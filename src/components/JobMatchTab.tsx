'use client';

import { useCallback, useRef, useState } from 'react';
import type { JobProfile, JobResult, JobSearchState, JobSearchStats, JobSource } from '@/types';
import JobMatchWizard from '@/components/JobMatchWizard';
import JobSearchProgress from '@/components/JobSearchProgress';
import JobResults from '@/components/JobResults';
import { searchJobs } from '@/lib/jobs-client';

type JobMatchView = 'wizard' | 'progress' | 'results';

const INITIAL_SEARCH_STATE: JobSearchState = {
  stage: 'idle',
  message: '',
  percent: 0,
  jobs: [],
};

const INITIAL_PROFILE: Partial<JobProfile> = {
  target_roles: [],
  skills: [],
  dealbreakers: [],
  preferred_cities: [],
};

export default function JobMatchTab({
  onJobSelect,
}: {
  onJobSelect: (job: JobResult | null) => void;
}) {
  const [view, setView] = useState<JobMatchView>('wizard');
  const [searchState, setSearchState] = useState<JobSearchState>(INITIAL_SEARCH_STATE);
  const abortRef = useRef<AbortController | null>(null);
  const lastSearchRef = useRef<{ resumeText: string; profile: JobProfile } | null>(null);

  const [resumeText, setResumeText] = useState('');
  const [fileName, setFileName] = useState('');
  const [profile, setProfile] = useState<Partial<JobProfile>>(INITIAL_PROFILE);
  const [source, setSource] = useState<JobSource>('boss');

  const handleSearch = useCallback(
    async (resumeText: string, profile: JobProfile) => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      lastSearchRef.current = { resumeText, profile };

      setSearchState({ ...INITIAL_SEARCH_STATE, stage: 'checking' });
      setView('progress');

      try {
        await searchJobs(
          resumeText,
          profile,
          source,
          (partial) => {
            setSearchState((prev) => ({ ...prev, ...partial }));
          },
          (jobs: JobResult[], stats: JobSearchStats) => {
            setSearchState((prev) => ({
              ...prev,
              stage: 'done',
              percent: 100,
              jobs,
              stats,
            }));
            setView('results');
          },
          (error: string) => {
            setSearchState((prev) => ({
              ...prev,
              stage: 'error',
              error,
            }));
          },
          controller.signal,
        );
      } catch (err: unknown) {
        if (err instanceof Error && err.name === 'AbortError') return;
        setSearchState((prev) => ({
          ...prev,
          stage: 'error',
          error: err instanceof Error ? err.message : 'Unknown error',
        }));
      }
    },
    [source],
  );

  const handleCancel = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    setSearchState(INITIAL_SEARCH_STATE);
    setView('wizard');
  }, []);

  const handleRetry = useCallback(() => {
    if (lastSearchRef.current) {
      handleSearch(lastSearchRef.current.resumeText, lastSearchRef.current.profile);
    }
  }, [handleSearch]);

  const handleNewSearch = useCallback(() => {
    onJobSelect(null);
    setSearchState(INITIAL_SEARCH_STATE);
    setView('wizard');
  }, [onJobSelect]);

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
          onResumeTextChange={setResumeText}
          fileName={fileName}
          onFileNameChange={setFileName}
          profile={profile}
          onProfileChange={setProfile}
          source={source}
          onSourceChange={setSource}
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
      />
    </div>
  );
}
