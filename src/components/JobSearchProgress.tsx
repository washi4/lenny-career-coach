'use client';

import { useLocale } from '@/lib/i18n';
import type { JobSearchState, JobSearchStage, JobSource } from '@/types';

type ProgressStage = Exclude<JobSearchStage, 'idle' | 'error'>;

const BOSS_STAGES: Array<{ key: ProgressStage; labelKey: string }> = [
  { key: 'checking', labelKey: 'job_match.stage_checking' },
  { key: 'extracting', labelKey: 'job_match.stage_extracting' },
  { key: 'searching', labelKey: 'job_match.stage_searching' },
  { key: 'fetching', labelKey: 'job_match.stage_fetching' },
  { key: 'scoring', labelKey: 'job_match.stage_scoring' },
  { key: 'done', labelKey: 'job_match.stage_scoring' },
];

const GOOGLE_STAGES: Array<{ key: ProgressStage; labelKey: string }> = [
  { key: 'extracting', labelKey: 'job_match.stage_extracting' },
  { key: 'searching', labelKey: 'job_match.stage_searching_google' },
  { key: 'scoring', labelKey: 'job_match.stage_scoring' },
  { key: 'done', labelKey: 'job_match.stage_scoring' },
];


export default function JobSearchProgress({
  state,
  source = 'boss',
  onCancel,
  onRetry,
  onBack,
}: {
  state: JobSearchState;
  source?: JobSource;
  onCancel: () => void;
  onRetry?: () => void;
  onBack?: () => void;
}) {
  const { t, locale } = useLocale();
  const STAGES = source === 'google_jobs' ? GOOGLE_STAGES : BOSS_STAGES;
  const isError = state.stage === 'error';
  const activeIndex = isError ? -1 : STAGES.findIndex((stage) => stage.key === state.stage);
  const errorStageIndex = isError
    ? (state.percent < 10 ? 0 : state.percent < 15 ? 1 : state.percent < 35 ? 2 : state.percent < 65 ? 3 : 4)
    : -1;
  const completedAll = state.stage === 'done';
  const progressValue = Math.max(0, Math.min(100, state.percent));

  return (
    <section className="rounded-xl border border-border bg-bg-secondary p-4 shadow-lg shadow-black/20">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h3 className={`text-sm font-semibold ${isError ? 'text-red-400' : 'text-text-primary'}`}>
          {isError ? t('job_match.error_title') : t('job_match.progress_title')}
        </h3>
        <span className={`text-xs font-medium tabular-nums ${isError ? 'text-red-400/60' : 'text-text-secondary'}`}>{progressValue}%</span>
      </div>

      <progress
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progressValue}
        aria-label={t('job_match.progress_title')}
        value={progressValue}
        max={100}
        className={`w-full h-2 overflow-hidden rounded-full bg-bg-tertiary [appearance:none] [&::-webkit-progress-bar]:bg-bg-tertiary [&::-webkit-progress-value]:rounded-full transition-all duration-500 ${
          isError
            ? '[&::-webkit-progress-value]:bg-red-500 [&::-moz-progress-bar]:bg-red-500'
            : '[&::-webkit-progress-value]:bg-accent [&::-moz-progress-bar]:bg-accent'
        }`}
      />

      <div className="mt-2 text-sm text-text-secondary min-h-5">
        {isError ? '' : state.message}
      </div>

      <ul className="mt-4 space-y-2">
        {STAGES.map((stage, index) => {
          const isComplete = completedAll || (activeIndex !== -1 && index < activeIndex) || (isError && index < errorStageIndex);
          const isActive = !completedAll && !isError && activeIndex === index;
          const isFailed = isError && index === errorStageIndex;
          const label = stage.key === 'done'
            ? (locale === 'zh' ? '完成' : 'Done')
            : stage.key === 'fetching'
              ? (isActive || isComplete)
                ? t(stage.labelKey, { current: '…', total: '…' })
                : (locale === 'zh' ? '获取职位详情...' : 'Fetching job details...')
              : t(stage.labelKey);

          return (
            <li key={stage.key} className="flex items-center gap-3 text-sm">
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                  isFailed
                    ? 'border-red-500/40 bg-red-500/10 text-red-400'
                    : isComplete
                      ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                      : isActive
                        ? 'border-accent/40 bg-accent/10 text-accent'
                        : 'border-border bg-bg-tertiary text-text-secondary'
                }`}
              >
                {isFailed ? (
                  <span className="text-[11px] font-bold leading-none">✕</span>
                ) : isComplete ? (
                  <span className="text-[11px] font-bold leading-none">✓</span>
                ) : isActive ? (
                  <span className="h-3 w-3 rounded-full border-2 border-current border-t-transparent animate-spin" />
                ) : (
                  <span className="text-[11px] leading-none">○</span>
                )}
              </span>
              <span
                className={`flex-1 ${
                  isFailed ? 'text-red-400 font-medium' : isComplete ? 'text-text-primary' : isActive ? 'text-accent font-medium' : 'text-text-secondary'
                }`}
              >
                {label}
              </span>
            </li>
          );
        })}
      </ul>

      {isError && (
        <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3">
          <p className="text-sm font-medium text-red-400">{t('job_match.error_title')}</p>
          <p className="mt-1 text-xs text-red-400/80">{state.error}</p>
        </div>
      )}

      <div className="mt-4 flex justify-end gap-2">
        {isError ? (
          <>
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="rounded-lg border border-border bg-bg-tertiary px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:bg-white/5"
              >
                {t('job_match.back_to_wizard')}
              </button>
            )}
            {onRetry && (
              <button
                type="button"
                onClick={onRetry}
                className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/80"
              >
                {t('job_match.retry')}
              </button>
            )}
          </>
        ) : (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-border bg-bg-tertiary px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:bg-white/5"
          >
            {t('job_match.cancel')}
          </button>
        )}
      </div>
    </section>
  );
}
