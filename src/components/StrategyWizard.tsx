'use client';

import { useState, type ChangeEvent } from 'react';
import type { ProductStrategyProfile, StrategyArea, ProductMaturity } from '@/types';
import { STRATEGY_CHALLENGES, STRATEGY_AREA_OPTIONS, PRODUCT_MATURITY_OPTIONS } from '@/lib/career-data';
import { Lightbulb, Plus, X } from 'lucide-react';
import { useLocale } from '@/lib/i18n';

interface StrategyWizardProps {
  profile: Partial<ProductStrategyProfile>;
  onProfileChange: (updater: Partial<ProductStrategyProfile> | ((prev: Partial<ProductStrategyProfile>) => Partial<ProductStrategyProfile>)) => void;
  onSubmit: (profile: ProductStrategyProfile) => void;
}

export default function StrategyWizard({ profile, onProfileChange, onSubmit }: StrategyWizardProps) {
  const { locale, t } = useLocale();
  const [customChallenge, setCustomChallenge] = useState('');

  const isValid = profile.strategy_area && profile.product_maturity && (profile.challenges?.length ?? 0) > 0;

  const handleArea = (area: StrategyArea) => {
    onProfileChange((prev) => ({ ...prev, strategy_area: area }));
  };

  const handleMaturity = (maturity: ProductMaturity) => {
    onProfileChange((prev) => ({ ...prev, product_maturity: maturity }));
  };

  const handleChallengeToggle = (challenge: string) => {
    onProfileChange((prev) => {
      const current = prev.challenges ?? [];
      const next = current.includes(challenge)
        ? current.filter((c) => c !== challenge)
        : [...current, challenge];
      return { ...prev, challenges: next };
    });
  };

  const handleAddCustomChallenge = () => {
    const trimmed = customChallenge.trim();
    if (!trimmed) return;
    onProfileChange((prev) => ({
      ...prev,
      challenges: [...(prev.challenges ?? []), trimmed],
    }));
    setCustomChallenge('');
  };

  const handleDescChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onProfileChange((prev) => ({ ...prev, product_description: e.target.value }));
  };

  const handleContextChange = (key: string, value: string) => {
    onProfileChange((prev) => ({
      ...prev,
      context: { ...(prev.context ?? {}), [key]: value },
    }));
  };

  const handleSubmit = () => {
    if (!isValid) return;
    onSubmit({
      strategy_area: profile.strategy_area!,
      product_description: profile.product_description ?? '',
      product_maturity: profile.product_maturity!,
      challenges: profile.challenges!,
      context: profile.context,
    });
  };

  return (
    <div className="max-w-lg mx-auto space-y-8">
      <div className="text-center">
        <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center mx-auto mb-4">
          <Lightbulb size={24} className="text-accent" />
        </div>
        <h2 className="text-lg font-semibold text-text-primary mb-2">
          {t('product_strategy.wizard_title')}
        </h2>
        <p className="text-text-secondary text-sm leading-relaxed max-w-md mx-auto">
          {t('product_strategy.wizard_subtitle')}
        </p>
      </div>

      <div>
        <span className="block text-sm font-medium text-text-primary mb-3">
          {t('product_strategy.field_strategy_area')}
        </span>
        <div className="grid grid-cols-2 gap-2">
          {STRATEGY_AREA_OPTIONS.map((opt) => (
            <button
              type="button"
              key={opt.key}
              onClick={() => handleArea(opt.key as StrategyArea)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                profile.strategy_area === opt.key
                  ? 'border-accent bg-accent-muted text-accent'
                  : 'border-border bg-bg-tertiary text-text-secondary hover:border-border-hover hover:text-text-primary'
              }`}
            >
              <span>{opt.emoji}</span>
              <span>{locale === 'zh' ? opt.nameZh : opt.nameEn}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="strategy-product-desc" className="block text-sm font-medium text-text-primary mb-2">
          {t('product_strategy.field_product_desc')}
        </label>
        <textarea
          id="strategy-product-desc"
          value={profile.product_description ?? ''}
          onChange={handleDescChange}
          placeholder={t('product_strategy.field_product_desc_placeholder')}
          rows={3}
          className="w-full bg-bg-tertiary border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted resize-none focus:outline-none focus:border-accent/50"
        />
      </div>

      <div>
        <span className="block text-sm font-medium text-text-primary mb-3">
          {t('product_strategy.field_product_maturity')}
        </span>
        <div className="grid grid-cols-2 gap-2">
          {PRODUCT_MATURITY_OPTIONS.map((opt) => (
            <button
              type="button"
              key={opt.key}
              onClick={() => handleMaturity(opt.key as ProductMaturity)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                profile.product_maturity === opt.key
                  ? 'border-accent bg-accent-muted text-accent'
                  : 'border-border bg-bg-tertiary text-text-secondary hover:border-border-hover hover:text-text-primary'
              }`}
            >
              <span>{opt.emoji}</span>
              <span>{locale === 'zh' ? opt.nameZh : opt.nameEn}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <span className="block text-sm font-medium text-text-primary mb-2">
          {t('product_strategy.field_challenges')}
        </span>
        <p className="text-text-muted text-xs mb-3">{t('product_strategy.field_challenges_hint')}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {STRATEGY_CHALLENGES.map((challenge) => (
            <button
              type="button"
              key={challenge}
              onClick={() => handleChallengeToggle(challenge)}
              className={`px-3 py-1.5 rounded-full text-xs transition-colors cursor-pointer ${
                profile.challenges?.includes(challenge)
                  ? 'bg-accent text-white'
                  : 'bg-bg-tertiary border border-border text-text-secondary hover:border-border-hover hover:text-text-primary'
              }`}
            >
              {challenge}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {(profile.challenges ?? [])
            .filter((c) => !STRATEGY_CHALLENGES.includes(c as typeof STRATEGY_CHALLENGES[number]))
            .map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs bg-accent text-white"
              >
                {c}
                <button
                  type="button"
                  onClick={() => handleChallengeToggle(c)}
                  className="hover:text-white/70 cursor-pointer"
                >
                  <X size={12} />
                </button>
              </span>
            ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={customChallenge}
            onChange={(e) => setCustomChallenge(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddCustomChallenge(); } }}
            placeholder={locale === 'zh' ? '添加自定义挑战...' : 'Add custom challenge...'}
            className="flex-1 bg-bg-tertiary border border-border rounded-lg px-3 py-2 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50"
          />
          <button
            type="button"
            onClick={handleAddCustomChallenge}
            disabled={!customChallenge.trim()}
            className="px-3 py-2 bg-bg-tertiary border border-border rounded-lg text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div>
        <span className="block text-sm font-medium text-text-primary mb-2">
          {t('product_strategy.field_context')}
        </span>
        <div className="grid grid-cols-2 gap-3">
          {[
            { key: 'team_size', label: t('product_strategy.field_team_size') },
            { key: 'user_base', label: t('product_strategy.field_user_base') },
            { key: 'revenue_model', label: t('product_strategy.field_revenue_model') },
            { key: 'competitive_landscape', label: t('product_strategy.field_competitive_landscape') },
          ].map((field) => (
            <div key={field.key}>
              <label htmlFor={`strategy-ctx-${field.key}`} className="block text-xs text-text-muted mb-1">{field.label}</label>
              <input
                id={`strategy-ctx-${field.key}`}
                type="text"
                value={profile.context?.[field.key as keyof NonNullable<ProductStrategyProfile['context']>] ?? ''}
                onChange={(e) => handleContextChange(field.key, e.target.value)}
                placeholder="—"
                className="w-full bg-bg-tertiary border border-border rounded-lg px-3 py-2 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={!isValid}
        className="w-full bg-accent text-white rounded-xl px-6 py-3.5 text-sm font-medium hover:bg-accent-hover transition-colors cursor-pointer shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {t('product_strategy.run_diagnostic')}
      </button>
    </div>
  );
}
