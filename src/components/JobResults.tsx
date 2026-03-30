'use client';

import { ArrowRight, Briefcase } from 'lucide-react';
import type { JobResult, JobSearchStats } from '@/types';
import { useLocale } from '@/lib/i18n';
import JobCard from '@/components/JobCard';

interface JobResultsProps {
  jobs: JobResult[];
  stats: JobSearchStats;
  onJobClick: (job: JobResult) => void;
  onNewSearch: () => void;
}

export default function JobResults({ jobs, stats, onJobClick, onNewSearch }: JobResultsProps) {
  const { t } = useLocale();

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
        <h2 className="mt-3 text-lg font-semibold text-text-primary">
          {t('results_title', { count: jobs.length })}
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
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
