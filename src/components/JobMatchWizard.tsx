'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent, type DragEvent, type KeyboardEvent } from 'react';
import { CheckCircle2, Loader2, Upload, X, XCircle } from 'lucide-react';
import { JOB_MATCH_CONFIG } from '@/lib/career-data';
import { useLocale } from '@/lib/i18n';
import type { JobProfile, JobSource } from '@/types';

interface JobMatchWizardProps {
  onSearch: (resumeText: string, profile: JobProfile) => void;
  resumeText: string;
  onResumeTextChange: (text: string) => void;
  fileName: string;
  onFileNameChange: (name: string) => void;
  profile: Partial<JobProfile>;
  onProfileChange: (updater: Partial<JobProfile> | ((prev: Partial<JobProfile>) => Partial<JobProfile>)) => void;
  source: JobSource;
  onSourceChange: (source: JobSource) => void;
}

interface CheckResponse {
  opencli: boolean;
  bridge: boolean;
  boss: boolean;
}

type CheckStatus = null | 'checking' | 'passed' | 'failed';
type TagField = 'target_roles' | 'skills' | 'dealbreakers';

function toBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== 'string') {
        reject(new Error('Failed to read file'));
        return;
      }
      const [, base64 = ''] = result.split(',');
      resolve(base64);
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

async function parsePdf(file: File): Promise<{ text: string; filename: string }> {
  const formData = new FormData();
  formData.append('file', file);

  const formResponse = await fetch('/api/parse-pdf', {
    method: 'POST',
    body: formData,
  });

  if (formResponse.ok) {
    const result = (await formResponse.json()) as { text?: string; filename?: string };
    if (typeof result.text === 'string' && result.text.trim()) {
      return { text: result.text, filename: result.filename ?? file.name };
    }
  }

  const data = await toBase64(file);
  const jsonResponse = await fetch('/api/parse-pdf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      filename: file.name,
      data,
      size: file.size,
    }),
  });

  if (!jsonResponse.ok) {
    const errorText = await jsonResponse.text();
    throw new Error(errorText || `PDF parse failed: ${jsonResponse.status}`);
  }

  const result = (await jsonResponse.json()) as { text: string; filename?: string };
  return { text: result.text, filename: result.filename ?? file.name };
}

export default function JobMatchWizard({
  onSearch,
  resumeText,
  onResumeTextChange,
  fileName,
  onFileNameChange,
  profile,
  onProfileChange,
  source,
  onSourceChange,
}: JobMatchWizardProps) {
  const { t } = useLocale();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [checkStatus, setCheckStatus] = useState<CheckStatus>(null);

  const setProfile = useCallback(
    (updater: Partial<JobProfile> | ((prev: Partial<JobProfile>) => Partial<JobProfile>)) => {
      onProfileChange(updater);
    },
    [onProfileChange],
  );

  const [checkResult, setCheckResult] = useState<CheckResponse>({
    opencli: false,
    bridge: false,
    boss: false,
  });
  const [uploadError, setUploadError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isExtractingProfile, setIsExtractingProfile] = useState(false);
  const [draftTags, setDraftTags] = useState<Record<TagField, string>>({
    target_roles: '',
    skills: '',
    dealbreakers: '',
  });

  const runPrerequisiteCheck = useCallback(async () => {
    setCheckStatus('checking');

    try {
      const response = await fetch('/api/jobs/check', { method: 'GET' });
      if (!response.ok) {
        setCheckStatus('failed');
        return;
      }

      const result = (await response.json()) as CheckResponse;
      setCheckResult(result);
      setCheckStatus(result.opencli && result.bridge && result.boss ? 'passed' : 'failed');
    } catch {
      setCheckStatus('failed');
    }
  }, []);

  useEffect(() => {
    if (source !== 'boss') return;
    void runPrerequisiteCheck();
  }, [runPrerequisiteCheck, source]);

  const handleFile = useCallback(async (file: File | undefined) => {
    if (!file) return;
    if (!file.name.toLowerCase().endsWith('.pdf')) return;

    setUploadError('');
    setIsUploading(true);

    let extractedText = '';
    try {
      const result = await parsePdf(file);
      extractedText = result.text;
      onResumeTextChange(result.text);
      onFileNameChange(result.filename || file.name);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Upload failed';
      setUploadError(message);
      setIsUploading(false);
      return;
    }
    setIsUploading(false);

    if (extractedText.trim().length < 50) return;

    setIsExtractingProfile(true);
    try {
      const response = await fetch('/api/jobs/extract-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resumeText: extractedText }),
      });

      if (response.ok) {
        const extracted = (await response.json()) as Partial<JobProfile>;
        setProfile((prev) => ({
          ...prev,
          target_roles: extracted.target_roles?.length ? extracted.target_roles : prev.target_roles ?? [],
          skills: extracted.skills?.length ? extracted.skills : prev.skills ?? [],
          experience_level: extracted.experience_level || prev.experience_level || '',
          education: extracted.education || prev.education || '',
          preferred_cities: extracted.preferred_cities?.length ? extracted.preferred_cities : prev.preferred_cities ?? [],
          salary_expectation: extracted.salary_expectation || prev.salary_expectation || '',
        }));
      }
    } catch {
    } finally {
      setIsExtractingProfile(false);
    }
  }, [onResumeTextChange, onFileNameChange, setProfile]);

  const handleFileInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    await handleFile(file);
    event.target.value = '';
  };

  const handleDrop = async (event: DragEvent<HTMLElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    await handleFile(file);
  };

  const handleTagAdd = (field: TagField) => {
    const value = draftTags[field].trim();
    if (!value) return;

    setProfile((prev) => {
      const current = (prev[field] as string[] | undefined) ?? [];
      if (current.includes(value)) {
        return prev;
      }
      return {
        ...prev,
        [field]: [...current, value],
      };
    });

    setDraftTags((prev) => ({ ...prev, [field]: '' }));
  };

  const handleTagInputKeyDown = (event: KeyboardEvent<HTMLInputElement>, field: TagField) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleTagAdd(field);
    }
  };

  const handleTagRemove = (field: TagField, tag: string) => {
    setProfile((prev) => {
      const current = (prev[field] as string[] | undefined) ?? [];
      return {
        ...prev,
        [field]: current.filter((item) => item !== tag),
      };
    });
  };

  const toggleCity = (city: string) => {
    setProfile((prev) => {
      const current = prev.preferred_cities ?? [];
      const exists = current.includes(city);
      return {
        ...prev,
        preferred_cities: exists ? current.filter((item) => item !== city) : [...current, city],
      };
    });
  };

  const normalizedProfile = useMemo<JobProfile>(() => ({
    target_roles: profile.target_roles ?? [],
    skills: profile.skills ?? [],
    experience_years: profile.experience_years ?? 0,
    experience_level: profile.experience_level ?? '',
    education: profile.education ?? '',
    preferred_cities: profile.preferred_cities ?? [],
    salary_expectation: profile.salary_expectation ?? '',
    dealbreakers: profile.dealbreakers ?? [],
  }), [profile]);

  const canSearch = resumeText.trim().length > 0;

  const renderTagField = (field: TagField, labelKey: string) => {
    const fieldId = `job-match-${field}`;
    const tags = (profile[field] as string[] | undefined) ?? [];

    return (
      <div>
        <label htmlFor={fieldId} className="block text-sm font-medium text-text-primary mb-2">
          {t(labelKey)}
        </label>
        <div className="rounded-xl border border-border bg-bg-secondary px-3 py-3">
          {tags.length > 0 && (
            <ul className="flex flex-wrap gap-2 mb-3" aria-label={t(labelKey)}>
              {tags.map((tag) => (
                <li
                  key={`${field}-${tag}`}
                  className="inline-flex items-center gap-1 rounded-full bg-accent-muted text-text-primary px-2.5 py-1 text-xs"
                >
                  <span>{tag}</span>
                  <button
                    type="button"
                    onClick={() => handleTagRemove(field, tag)}
                    className="rounded text-text-secondary hover:text-text-primary cursor-pointer"
                    aria-label={`${t('job_match.field_add')} ${tag}`}
                  >
                    <X size={12} />
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center gap-2">
            <input
              id={fieldId}
              value={draftTags[field]}
              onChange={(event) => setDraftTags((prev) => ({ ...prev, [field]: event.target.value }))}
              onKeyDown={(event) => handleTagInputKeyDown(event, field)}
              aria-label={t(labelKey)}
              className="flex-1 bg-bg-tertiary border border-border rounded-lg px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-border-hover"
            />
            <button
              type="button"
              onClick={() => handleTagAdd(field)}
              className="px-3 py-2 rounded-lg bg-bg-hover border border-border text-sm text-text-primary hover:border-border-hover cursor-pointer"
            >
              {t('job_match.field_add')}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="space-y-6">
      <div>
        <p className="block text-sm font-medium text-text-primary mb-2">{t('job_match.source_label')}</p>
        <div className="flex gap-1 rounded-xl border border-border bg-bg-tertiary p-1">
          <button
            type="button"
            onClick={() => onSourceChange('boss')}
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
              source === 'boss'
                ? 'bg-accent text-white'
                : 'bg-bg-tertiary text-text-secondary hover:bg-bg-hover'
            }`}
          >
            {t('job_match.source_boss')}
          </button>
          <button
            type="button"
            onClick={() => onSourceChange('google_jobs')}
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
              source === 'google_jobs'
                ? 'bg-accent text-white'
                : 'bg-bg-tertiary text-text-secondary hover:bg-bg-hover'
            }`}
          >
            {t('job_match.source_google')}
          </button>
        </div>
      </div>

      {source === 'boss' && checkStatus !== 'passed' && (
        <section className="rounded-2xl border border-border bg-bg-secondary p-5 md:p-6" aria-live="polite">
          <h2 className="text-lg font-semibold text-text-primary">{t('job_match.setup_title')}</h2>
          <p className="text-sm text-text-secondary mt-1">{t('job_match.setup_desc')}</p>

          <ul className="mt-5 space-y-3" aria-label={t('job_match.setup_title')}>
            {[
              { key: 'opencli', label: t('job_match.check_opencli'), ok: checkResult.opencli },
              { key: 'bridge', label: t('job_match.check_bridge'), ok: checkResult.bridge },
              { key: 'boss', label: t('job_match.check_boss'), ok: checkResult.boss },
            ].map((item) => (
              <li
                key={item.key}
                className="flex items-center justify-between rounded-xl border border-border bg-bg-tertiary px-3 py-2"
              >
                <span className="text-sm text-text-primary">{item.label}</span>
                {item.ok ? (
                  <CheckCircle2 size={18} className="text-emerald-400" aria-hidden="true" />
                ) : (
                  <XCircle size={18} className="text-red-400" aria-hidden="true" />
                )}
              </li>
            ))}
          </ul>

          {!checkResult.boss && checkStatus === 'failed' && (
            <p className="mt-4 text-xs text-text-secondary">{t('job_match.check_fail_boss')}</p>
          )}

          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              onClick={() => void runPrerequisiteCheck()}
              disabled={checkStatus === 'checking'}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover disabled:opacity-60 cursor-pointer"
            >
              {checkStatus === 'checking' && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
              <span>{t('job_match.check_button')}</span>
            </button>
            <span className="text-xs text-text-secondary">{t('job_match.setup_guide')}</span>
          </div>
        </section>
      )}

      {(source === 'google_jobs' || checkStatus === 'passed') && (
        <>
          <div>
            <h3 className="text-base font-semibold text-text-primary mb-3">{t('job_match.step_upload')}</h3>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  fileInputRef.current?.click();
                }
              }}
              onDrop={(event) => void handleDrop(event)}
              onDragOver={(event) => event.preventDefault()}
              aria-label={t('job_match.upload_prompt')}
              className="rounded-2xl border border-dashed border-border bg-bg-secondary p-6 text-center hover:border-border-hover cursor-pointer"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                onChange={(event) => void handleFileInputChange(event)}
                className="hidden"
                aria-label={t('job_match.upload_prompt')}
              />
              <div className="flex justify-center mb-2">
                {isUploading || isExtractingProfile ? (
                  <Loader2 size={22} className="text-accent animate-spin" aria-hidden="true" />
                ) : (
                  <Upload size={22} className="text-text-secondary" aria-hidden="true" />
                )}
              </div>
              <p className="text-sm text-text-primary">
                {isUploading ? t('job_match.upload_parsing') : isExtractingProfile ? t('job_match.upload_extracting_profile') : t('job_match.upload_prompt')}
              </p>
              {isUploading && (
                <p className="text-xs text-text-secondary mt-2">{t('job_match.upload_parsing_hint')}</p>
              )}
              {isExtractingProfile && (
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Loader2 size={14} className="text-accent animate-spin" aria-hidden="true" />
                  <p className="text-xs text-accent">{t('job_match.upload_extracting_profile')}</p>
                </div>
              )}
              {fileName && !isUploading && !isExtractingProfile && (
                <p className="text-xs text-accent mt-2">{t('job_match.upload_success', { name: fileName })}</p>
              )}
              {uploadError && <p className="text-xs text-red-400 mt-2">{uploadError}</p>}
            </button>
          </div>

          <div>
            <h3 className="text-base font-semibold text-text-primary mb-3">{t('job_match.step_profile')}</h3>
            <div className="space-y-4 rounded-2xl border border-border bg-bg-secondary p-4 md:p-5">
              {renderTagField('target_roles', 'job_match.field_target_roles')}
              {renderTagField('skills', 'job_match.field_skills')}
              {renderTagField('dealbreakers', 'job_match.field_dealbreakers')}

              <div>
                <p className="block text-sm font-medium text-text-primary mb-2">{t('job_match.field_cities')}</p>
                <fieldset className="rounded-xl border border-border bg-bg-tertiary p-3">
                  <legend className="sr-only">{t('job_match.field_cities')}</legend>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {(source === 'google_jobs' ? JOB_MATCH_CONFIG.international_cities : JOB_MATCH_CONFIG.cities).map((city) => {
                      const cityId = `city-${city}`;
                      const checked = (profile.preferred_cities ?? []).includes(city);
                      return (
                        <label
                          htmlFor={cityId}
                          key={city}
                          className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-bg-hover cursor-pointer"
                        >
                          <input
                            id={cityId}
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleCity(city)}
                            className="h-4 w-4 rounded border-border bg-bg-primary"
                          />
                          <span className="text-sm text-text-primary">{city}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              </div>
 

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="salary-expectation" className="block text-sm font-medium text-text-primary mb-2">
                    {t('job_match.field_salary')}
                  </label>
                  <select
                    id="salary-expectation"
                    value={profile.salary_expectation ?? ''}
                    onChange={(event) => setProfile((prev) => ({ ...prev, salary_expectation: event.target.value }))}
                    className="w-full rounded-xl border border-border bg-bg-tertiary px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-border-hover"
                  >
                    <option value="" className="bg-bg-tertiary text-text-secondary">-</option>
                    {JOB_MATCH_CONFIG.salary_ranges.map((salary) => (
                      <option key={salary} value={salary} className="bg-bg-tertiary text-text-primary">
                        {salary}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="experience-level" className="block text-sm font-medium text-text-primary mb-2">
                    {t('job_match.field_experience')}
                  </label>
                  <select
                    id="experience-level"
                    value={profile.experience_level ?? ''}
                    onChange={(event) => setProfile((prev) => ({ ...prev, experience_level: event.target.value }))}
                    className="w-full rounded-xl border border-border bg-bg-tertiary px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-border-hover"
                  >
                    <option value="" className="bg-bg-tertiary text-text-secondary">-</option>
                    {JOB_MATCH_CONFIG.experience_levels.map((level) => (
                      <option key={level} value={level} className="bg-bg-tertiary text-text-primary">
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onSearch(resumeText, normalizedProfile)}
                  disabled={!canSearch}
                  className="w-full md:w-auto rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {t('job_match.find_jobs')}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
