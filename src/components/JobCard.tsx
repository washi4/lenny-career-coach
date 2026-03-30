'use client';

import { Circle, Coins, MapPin, MessageSquareText } from 'lucide-react';
import type { JobResult } from '@/types';
import { useLocale } from '@/lib/i18n';

interface JobCardProps {
  job: JobResult;
  onClick: (job: JobResult) => void;
  rank: number;
}

function getScoreClasses(score: number) {
  if (score >= 80) return 'bg-green-500/20 text-green-400';
  if (score >= 60) return 'bg-yellow-500/20 text-yellow-400';
  return 'bg-gray-500/20 text-gray-400';
}

function getRankLabel(rank: number) {
  if (rank === 1) return '🥇';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉';
  return String(rank);
}

function getBossActivityState(text?: string) {
  const value = (text ?? '').toLowerCase();
  if (!value) return { dot: 'text-gray-500', label: '' };
  if (value.includes('刚刚') || value.includes('minute') || value.includes('hour') || value.includes('今天')) {
    return { dot: 'text-green-400', label: text };
  }
  if (value.includes('天') || value.includes('day') || value.includes('week')) {
    return { dot: 'text-yellow-400', label: text };
  }
  return { dot: 'text-gray-400', label: text };
}

export default function JobCard({ job, onClick, rank }: JobCardProps) {
  const { t } = useLocale();
  const salaryText = job.annual_salary || job.salary;
  const scoreClasses = getScoreClasses(job.score);
  const bossActivity = getBossActivityState(job.boss_active_time);
  const topSkills = job.skills.slice(0, 3);
  const firstReason = job.match_reasons[0];

  return (
    <button
      type="button"
      onClick={() => onClick(job)}
      className="w-full text-left rounded-xl border border-border bg-bg-secondary p-4 transition-colors hover:bg-bg-hover hover:border-white/12 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-text-primary">
          <span>{getRankLabel(rank)}</span>
          <span
            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${scoreClasses}`}
            title={`${t('score')}: ${job.score}`}
          >
            {job.score}
          </span>
        </div>
      </div>

      <div className="mt-2 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <h3 className="truncate text-base font-semibold text-text-primary">{job.title}</h3>
            <span className="shrink-0 text-text-secondary">— {job.company}</span>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-secondary">
            <span className="inline-flex items-center gap-1">
              <Coins size={14} />
              {salaryText}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin size={14} />
              {job.location}
            </span>
          </div>
        </div>
      </div>

      {topSkills.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {topSkills.map((skill) => (
            <span key={skill} className="rounded-full bg-bg-tertiary px-2.5 py-1 text-xs text-text-secondary">
              {skill}
            </span>
          ))}
        </div>
      )}

      {firstReason && (
        <div className="mt-3 flex items-start gap-2 text-sm text-text-primary">
          <MessageSquareText size={14} className="mt-0.5 shrink-0 text-accent" />
          <span>{firstReason}</span>
        </div>
      )}

      {job.source !== 'google_jobs' && (
        <>
          <div className="mt-3 flex items-center gap-2 text-sm text-text-secondary">
            <Circle size={10} className={bossActivity.dot} fill="currentColor" />
            <span>{bossActivity.label || t('boss_active')}</span>
          </div>
          {job.boss_name && job.boss_title && (
            <div className="mt-2 text-xs text-text-secondary">
              {job.boss_name} · {job.boss_title}
            </div>
          )}
        </>
      )}

      {job.source === 'google_jobs' && (
        <div className="mt-3 flex items-center gap-3 text-xs text-text-secondary">
          {job.via && <span>{t('job_match.detail_via', { source: job.via })}</span>}
          {job.posted_at && <span>{t('job_match.posted_at', { time: job.posted_at })}</span>}
          {job.schedule_type && <span>{job.schedule_type}</span>}
        </div>
      )}
    </button>
  );
}
