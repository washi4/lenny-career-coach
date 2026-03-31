'use client';

import { useCallback, useRef } from 'react';
import type { JobProfile, JobResult, JobSearchState, JobSearchStats, JobSource, JobMatchView } from '@/types';
import { INITIAL_SEARCH_STATE } from '@/types';
import JobMatchWizard from '@/components/JobMatchWizard';
import JobSearchProgress from '@/components/JobSearchProgress';
import JobResults from '@/components/JobResults';
import { searchJobs } from '@/lib/jobs-client';

interface JobMatchTabProps {
  onJobSelect: (job: JobResult | null) => void;
  resumeText: string;
  onResumeTextChange: (text: string) => void;
  profile: Partial<JobProfile>;
  onProfileChange: (updater: Partial<JobProfile> | ((prev: Partial<JobProfile>) => Partial<JobProfile>)) => void;
  view: JobMatchView;
  onViewChange: (view: JobMatchView) => void;
  searchState: JobSearchState;
  onSearchStateChange: (updater: JobSearchState | ((prev: JobSearchState) => JobSearchState)) => void;
  fileName: string;
  onFileNameChange: (name: string) => void;
  source: JobSource;
  onSourceChange: (source: JobSource) => void;
  lastSearchRef: React.RefObject<{ resumeText: string; profile: JobProfile } | null>;
}

export default function JobMatchTab({
  onJobSelect,
  resumeText,
  onResumeTextChange,
  profile,
  onProfileChange,
  view,
  onViewChange,
  searchState,
  onSearchStateChange,
  fileName,
  onFileNameChange,
  source,
  onSourceChange,
  lastSearchRef,
}: JobMatchTabProps) {
  const abortRef = useRef<AbortController | null>(null);

  const handleSearch = useCallback(
    async (resumeText: string, profile: JobProfile) => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      lastSearchRef.current = { resumeText, profile };

      onSearchStateChange({ ...INITIAL_SEARCH_STATE, stage: source === 'google_jobs' ? 'extracting' : 'checking' });
      onViewChange('progress');

      try {
        await searchJobs(
          resumeText,
          profile,
          source,
          (partial) => {
            onSearchStateChange((prev) => ({ ...prev, ...partial }));
          },
          (jobs: JobResult[], stats: JobSearchStats) => {
            onSearchStateChange((prev) => ({
              ...prev,
              stage: 'done',
              percent: 100,
              jobs,
              stats,
            }));
            onViewChange('results');
          },
          (error: string) => {
            onSearchStateChange((prev) => ({
              ...prev,
              stage: 'error',
              error,
            }));
          },
          controller.signal,
        );
      } catch (err: unknown) {
        if (err instanceof Error && err.name === 'AbortError') return;
        onSearchStateChange((prev) => ({
          ...prev,
          stage: 'error',
          error: err instanceof Error ? err.message : 'Unknown error',
        }));
      }
    },
    [source, onSearchStateChange, onViewChange, lastSearchRef],
  );

  const handleCancel = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    onSearchStateChange(INITIAL_SEARCH_STATE);
    onViewChange('wizard');
  }, [onSearchStateChange, onViewChange]);

  const handleRetry = useCallback(() => {
    if (lastSearchRef.current) {
      handleSearch(lastSearchRef.current.resumeText, lastSearchRef.current.profile);
    }
  }, [handleSearch, lastSearchRef]);

  const handleNewSearch = useCallback(() => {
    onJobSelect(null);
    onSearchStateChange(INITIAL_SEARCH_STATE);
    onViewChange('wizard');
  }, [onJobSelect, onSearchStateChange, onViewChange]);

  const handleJobClick = useCallback(
    (job: JobResult) => {
      onJobSelect(job);
    },
    [onJobSelect],
  );

  if (view === 'wizard') {
    return (
      <div className="p-4">
        <JobMatchWizard
          onSearch={handleSearch}
          resumeText={resumeText}
          onResumeTextChange={onResumeTextChange}
          fileName={fileName}
          onFileNameChange={onFileNameChange}
          profile={profile}
          onProfileChange={onProfileChange}
          source={source}
          onSourceChange={onSourceChange}
        />
      </div>
    );
  }

  if (view === 'progress') {
    return (
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <JobSearchProgress
            state={searchState}
            source={source}
            onCancel={handleCancel}
            onRetry={handleRetry}
            onBack={handleNewSearch}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-hidden">
      <JobResults
        jobs={searchState.jobs}
        stats={searchState.stats ?? { total_fetched: 0, after_filter: 0, top_results: 0 }}
        onJobClick={handleJobClick}
        onNewSearch={handleNewSearch}
        resumeText={resumeText}
        profile={profile as JobProfile}
      />
    </div>
  );
}
