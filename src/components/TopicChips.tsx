'use client';

import { useRef, type ChangeEvent } from 'react';
import type { TabMode } from '@/types';
import { CAREER_TOPICS, INTERVIEW_TYPES } from '@/lib/career-data';
import { Upload, Paperclip } from 'lucide-react';
import { useLocale } from '@/lib/i18n';

interface TopicChipsProps {
  activeTab: TabMode;
  onChipClick: (text: string) => void;
  onFileUpload?: (file: File) => void;
  hasMessages: boolean;
}

export default function TopicChips({ activeTab, onChipClick, onFileUpload, hasMessages }: TopicChipsProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useLocale();

  if (hasMessages) return null;

  if (activeTab === 'resume_review') {
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && onFileUpload) {
        onFileUpload(file);
        e.target.value = '';
      }
    };

    return (
      <div className="absolute inset-x-0 top-0 flex justify-center z-20 px-8 pt-12">
        <div className="text-center">
          <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center mx-auto mb-4">
            <Upload size={24} className="text-accent" />
          </div>
          <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-6">
            {t('topics.resume_prompt')}
          </p>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 bg-accent text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-accent-hover transition-colors cursor-pointer shadow-sm"
          >
            <Paperclip size={16} />
            {t('topics.resume_upload_button')}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          <p className="text-text-muted text-xs mt-3">{t('topics.resume_format_hint')}</p>
        </div>
      </div>
    );
  }

  if (activeTab === 'career_advice') {
    const topics = Object.values(CAREER_TOPICS);
    return (
      <div className="absolute inset-x-0 top-0 flex justify-center z-20 px-8 pt-12">
        <div className="text-center max-w-md">
          <p className="text-text-secondary text-sm mb-6">{t('topics.title')}</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {topics.map((topic) => (
              <button
                type="button"
                key={topic.key}
                onClick={() => onChipClick(`${topic.emoji} ${t(`career_topics.${topic.key}.name`)}`)}
                className="bg-bg-tertiary border border-border rounded-full px-4 py-2 text-sm text-text-secondary hover:bg-accent-subtle hover:border-accent/30 hover:text-text-primary cursor-pointer transition-colors"
              >
                {topic.emoji} {t(`career_topics.${topic.key}.name`)}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'job_match') {
    return null; // JobMatchWizard handles the empty state
  }

  if (activeTab === 'growth_coach') {
    return null;
  }

  if (activeTab === 'product_strategy') {
    return null;
  }

  if (activeTab === 'mock_interview') {
    const types = Object.values(INTERVIEW_TYPES);
    return (
      <div className="absolute inset-x-0 top-0 flex justify-center z-20 px-8 pt-12">
        <div className="text-center max-w-md">
          <p className="text-text-secondary text-sm mb-6">{t('topics.interview_title')}</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {types.map((type) => (
              <button
                type="button"
                key={type.key}
                onClick={() => onChipClick(`${type.emoji} ${t(`interview_types.${type.key}.name`)}`)}
                className="bg-bg-tertiary border border-border rounded-full px-4 py-2 text-sm text-text-secondary hover:bg-accent-subtle hover:border-accent/30 hover:text-text-primary cursor-pointer transition-colors"
              >
                {type.emoji} {t(`interview_types.${type.key}.name`)}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
