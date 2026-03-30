'use client';

import { BookOpen, Globe } from 'lucide-react';
import { useLocale } from '@/lib/i18n';

export default function Header() {
  const { locale, setLocale, t } = useLocale();

  return (
    <header className="pt-6 pb-4 px-4 flex items-center justify-between">
      <div className="flex-1" />
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-accent-muted flex items-center justify-center">
            <BookOpen size={18} className="text-accent" />
          </div>
          <h1 className="text-xl font-semibold text-text-primary tracking-tight">
            {t('header.title')}
          </h1>
        </div>
        <div className="inline-block bg-bg-tertiary rounded-full px-4 py-1.5 border border-border">
          <span className="text-xs text-text-secondary">
            {t('header.subtitle')}
          </span>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <button
          type="button"
          onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors text-xs cursor-pointer"
          title={locale === 'en' ? '切换到中文' : 'Switch to English'}
        >
          <Globe size={14} />
          <span>{locale === 'en' ? '中文' : 'EN'}</span>
        </button>
      </div>
    </header>
  );
}
