'use client';

import { useState, useRef, useCallback } from 'react';
import { ArrowRight, Briefcase, BookOpen } from 'lucide-react';
import type { JobResult, JobSearchStats, JobProfile, LennyAdviceState } from '@/types';
import { useLocale } from '@/lib/i18n';
import JobCard from '@/components/JobCard';
import { fetchLennyAdvice } from '@/lib/lenny-advice-client';
import { renderContent } from '@/lib/markdown-renderer';

interface JobResultsProps {
  jobs: JobResult[];
  stats: JobSearchStats;
  onJobClick: (job: JobResult) => void;
  onNewSearch: () => void;
  resumeText?: string;
  profile?: JobProfile;
}

export default function JobResults({ jobs, stats, onJobClick, onNewSearch, resumeText, profile }: JobResultsProps) {
  const { t } = useLocale();
  const [lennyState, setLennyState] = useState<LennyAdviceState>('idle');
  const [lennyContent, setLennyContent] = useState('');
  const [lennyExpanded, setLennyExpanded] = useState(true);
  const lennyAbortRef = useRef<AbortController | null>(null);

  const handleLennysTake = useCallback(async () => {
    if (lennyState === 'loaded') {
      setLennyExpanded(!lennyExpanded);
      return;
    }
    if (!resumeText || !profile) return;

    lennyAbortRef.current?.abort();
    const controller = new AbortController();
    lennyAbortRef.current = controller;

    setLennyState('loading');
    setLennyContent('');

    try {
      await fetchLennyAdvice(
        { type: 'overall', jobs, profile, resumeText },
        (content) => setLennyContent(content),
        () => setLennyState('loaded'),
        (error) => {
          console.error('[lennys-take]', error);
          setLennyState('error');
        },
        controller.signal,
      );
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') return;
      setLennyState('error');
    }
  }, [lennyState, lennyExpanded, resumeText, profile, jobs]);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-bg-primary">
      <div className="border-b border-border bg-bg-secondary px-4 py-3">
        <div className="rounded-xl border border-border bg-bg-tertiary px-3 py-2 text-sm text-text-secondary">
          {t('results_stats', {
            total: stats.total_fetched,
            filtered: stats.after_filter,
            top: stats.top_results,
          })}
        </div>
        {resumeText && profile && (
          <div className="mt-2">
            <button
              type="button"
              onClick={() => void handleLennysTake()}
              disabled={lennyState === 'loading'}
              className="flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent/20 disabled:opacity-50"
            >
              <BookOpen size={14} />
              {lennyState === 'loading' ? t('job_match.lenny_loading')
                : lennyState === 'loaded' ? (lennyExpanded ? t('job_match.lenny_collapse') : t('job_match.lenny_expand'))
                  : t('job_match.lennys_take')}
            </button>
          </div>
        )}
        <h2 className="mt-3 text-lg font-semibold text-text-primary">
          {t('results_title', { count: jobs.length })}
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {lennyState !== 'idle' && (
          <div className="mb-3">
            {lennyState === 'error' ? (
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-400">
                <p>{t('job_match.lenny_error')}</p>
                <button
                  type="button"
                  onClick={() => {
                    setLennyState('idle');
                    void handleLennysTake();
                  }}
                  className="mt-2 text-accent hover:underline"
                >
                  {t('job_match.lenny_retry')}
                </button>
              </div>
            ) : lennyContent && (lennyState === 'loading' || (lennyState === 'loaded' && lennyExpanded)) ? (
              <div className={`rounded-xl border p-4 ${lennyState === 'loaded' ? 'border-accent/20' : 'border-border'} bg-bg-tertiary`}>
                <div className="text-sm leading-relaxed text-text-primary">
                  {renderContent(lennyContent)}
                </div>
              </div>
            ) : null}
          </div>
        )}

        {jobs.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 py-12 text-center">
            <Briefcase size={28} className="text-text-secondary" />
            <p className="text-sm text-text-secondary">{t('no_results')}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {jobs.map((job) => (
              <JobCard key={job.security_id} job={job} rank={job.rank} onClick={onJobClick} />
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-border bg-bg-secondary p-4">
        <button
          type="button"
          onClick={onNewSearch}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
        >
          {t('new_search')}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
