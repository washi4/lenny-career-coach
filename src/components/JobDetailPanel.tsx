'use client';

import type { ComponentType } from 'react';
import { X, Coins, MapPin, GraduationCap, Briefcase, Building2, UserRound, Circle, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import type { JobResult } from '@/types';
import { useLocale } from '@/lib/i18n';

interface JobDetailPanelProps {
  job: JobResult;
  onClose: () => void;
}

function getScoreClasses(score: number) {
  if (score >= 80) return 'bg-green-500/20 text-green-400';
  if (score >= 60) return 'bg-yellow-500/20 text-yellow-400';
  return 'bg-gray-500/20 text-gray-400';
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

function LabelValue({ label, value, icon: Icon }: { label: string; value: string; icon: ComponentType<{ size?: number; className?: string }> }) {
  return (
    <div className="rounded-xl border border-border bg-bg-tertiary p-3">
      <div className="flex items-center gap-1.5 text-xs text-text-secondary">
        <Icon size={12} className="shrink-0" />
        <span>{label}</span>
      </div>
      <div className="mt-1 text-sm font-medium text-text-primary break-words">{value}</div>
    </div>
  );
}

export default function JobDetailPanel({ job, onClose }: JobDetailPanelProps) {
  const { t, locale } = useLocale();
  const scoreClasses = getScoreClasses(job.score);
  const bossActivity = getBossActivityState(job.boss_active_time);
  const salaryText = job.annual_salary || job.salary;
  const labels = locale === 'zh'
    ? { salary: '薪资', location: '地点', experience: '经验', education: '学历' }
    : { salary: 'Salary', location: 'Location', experience: 'Experience', education: 'Education' };

  const infoItems = [
    { label: labels.salary, value: job.annual_salary ? `${salaryText} ${t('job_match.salary_annual')}` : salaryText, icon: Coins, show: Boolean(salaryText) },
    { label: labels.location, value: job.location, icon: MapPin, show: Boolean(job.location) },
    { label: labels.experience, value: job.experience_req, icon: Briefcase, show: Boolean(job.experience_req) },
    { label: labels.education, value: job.education_req, icon: GraduationCap, show: Boolean(job.education_req) },
  ].filter((item) => item.show);

  const hasRecruiter = Boolean(job.boss_name || job.boss_title || job.boss_active_time);
  const hasCompany = Boolean(job.company_industry || job.company_scale);

  return (
    <div className="flex flex-col h-full bg-bg-secondary border-l border-border">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-bg-tertiary">
        <div className="flex-1 min-w-0 mr-3">
          <div className="flex items-center gap-2 mb-0.5">
            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${scoreClasses}`}>
              {t('job_match.score')} {job.score}
            </span>
          </div>
          <h3 className="text-sm font-semibold text-text-primary truncate" title={job.title}>
            {job.title}
          </h3>
          <p className="text-xs text-text-secondary mt-0.5 truncate" title={job.company}>
            {job.company}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full hover:bg-bg-hover transition-colors text-text-secondary"
          aria-label={t('reference.close')}
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-4 space-y-5">
          {infoItems.length > 0 && (
            <section>
              <div className="grid grid-cols-2 gap-3">
                {infoItems.map((item) => (
                  <LabelValue key={item.label} label={item.label} value={item.value} icon={item.icon} />
                ))}
              </div>
            </section>
          )}

          {(job.match_reasons.length > 0 || job.concerns.length > 0) && (
            <section>
              <h4 className="text-sm font-semibold text-text-primary mb-3">{t('job_match.detail_analysis')}</h4>
              <div className="space-y-4">
                {job.match_reasons.length > 0 && (
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm font-medium text-text-primary">
                      <CheckCircle2 size={14} className="text-green-400" />
                      <span>{t('job_match.match_reasons')}</span>
                    </div>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      {job.match_reasons.map((reason) => (
                        <li key={reason} className="flex gap-2">
                          <span className="mt-0.5 text-green-400">✅</span>
                          <span className="flex-1">{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {job.concerns.length > 0 && (
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm font-medium text-text-primary">
                      <AlertTriangle size={14} className="text-yellow-400" />
                      <span>{t('job_match.concerns')}</span>
                    </div>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      {job.concerns.map((concern) => (
                        <li key={concern} className="flex gap-2">
                          <span className="mt-0.5 text-yellow-400">⚠️</span>
                          <span className="flex-1">{concern}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {job.full_jd && (
            <section>
              <h4 className="text-sm font-semibold text-text-primary mb-2">{t('job_match.detail_jd')}</h4>
              <div className="rounded-xl border border-border bg-bg-tertiary p-4 text-sm leading-relaxed text-text-primary whitespace-pre-wrap">
                {job.full_jd}
              </div>
            </section>
          )}

          {hasRecruiter && job.source !== 'google_jobs' && (
            <section>
              <h4 className="text-sm font-semibold text-text-primary mb-3">{t('job_match.detail_boss')}</h4>
              <div className="rounded-xl border border-border bg-bg-tertiary p-4 space-y-2 text-sm">
                {job.boss_name && (
                  <div className="flex items-start gap-2 text-text-primary">
                    <UserRound size={14} className="mt-0.5 shrink-0 text-accent" />
                    <span>{job.boss_name}</span>
                  </div>
                )}
                {job.boss_title && <div className="pl-5 text-text-secondary">{job.boss_title}</div>}
                {job.boss_active_time && (
                  <div className="flex items-center gap-2 text-text-secondary">
                    <Circle size={10} className={bossActivity.dot} fill="currentColor" />
                    <span>{t('job_match.boss_active')}: {bossActivity.label || job.boss_active_time}</span>
                  </div>
                )}
              </div>
            </section>
          )}

          {hasCompany && (
            <section>
              <h4 className="text-sm font-semibold text-text-primary mb-3">{t('job_match.detail_company')}</h4>
              <div className="rounded-xl border border-border bg-bg-tertiary p-4 space-y-2 text-sm">
                {job.company_industry && (
                  <div className="flex items-start gap-2 text-text-secondary">
                    <Building2 size={14} className="mt-0.5 shrink-0 text-accent" />
                    <span>{job.company_industry}</span>
                  </div>
                )}
                {job.company_scale && (
                  <div className="flex items-start gap-2 text-text-secondary">
                    <Building2 size={14} className="mt-0.5 shrink-0 text-accent" />
                    <span>{job.company_scale}</span>
                  </div>
                )}
              </div>
            </section>
          )}

          {job.source === 'google_jobs' && job.apply_options && job.apply_options.length > 1 ? (
            <section className="space-y-2">
              {job.apply_options.map((opt) => (
                <a
                  key={opt.link}
                  href={opt.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
                >
                  {t('job_match.detail_open_link_google')} — {opt.title}
                  <ExternalLink size={14} />
                </a>
              ))}
            </section>
          ) : job.job_url && (
            <section>
              <a
                href={job.job_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
              >
                {job.source === 'google_jobs' ? t('job_match.detail_open_link_google') : t('job_match.detail_open_link')}
                <ExternalLink size={16} />
              </a>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
