'use client';

import { useState, type ChangeEvent } from 'react';
import type { GrowthProfile, ProductType, GrowthStage } from '@/types';
import { GROWTH_CHALLENGES, GROWTH_STAGE_OPTIONS, PRODUCT_TYPE_OPTIONS } from '@/lib/career-data';
import { TrendingUp, Plus, X } from 'lucide-react';
import { useLocale } from '@/lib/i18n';

interface GrowthWizardProps {
  profile: Partial<GrowthProfile>;
  onProfileChange: (updater: Partial<GrowthProfile> | ((prev: Partial<GrowthProfile>) => Partial<GrowthProfile>)) => void;
  onSubmit: (profile: GrowthProfile) => void;
}

export default function GrowthWizard({ profile, onProfileChange, onSubmit }: GrowthWizardProps) {
  const { locale, t } = useLocale();
  const [customChallenge, setCustomChallenge] = useState('');

  const isValid = profile.product_type && profile.growth_stage && (profile.challenges?.length ?? 0) > 0;

  const handleProductType = (type: ProductType) => {
    onProfileChange((prev) => ({ ...prev, product_type: type }));
  };

  const handleStage = (stage: GrowthStage) => {
    onProfileChange((prev) => ({ ...prev, growth_stage: stage }));
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

  const handleMetricChange = (key: string, value: string) => {
    onProfileChange((prev) => ({
      ...prev,
      metrics: { ...(prev.metrics ?? {}), [key]: value },
    }));
  };

  const handleSubmit = () => {
    if (!isValid) return;
    onSubmit({
      product_type: profile.product_type!,
      product_description: profile.product_description ?? '',
      growth_stage: profile.growth_stage!,
      challenges: profile.challenges!,
      metrics: profile.metrics,
    });
  };

  return (
    <div className="max-w-lg mx-auto space-y-8">
      <div className="text-center">
        <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center mx-auto mb-4">
          <TrendingUp size={24} className="text-accent" />
        </div>
        <h2 className="text-lg font-semibold text-text-primary mb-2">
          {t('growth_coach.wizard_title')}
        </h2>
        <p className="text-text-secondary text-sm leading-relaxed max-w-md mx-auto">
          {t('growth_coach.wizard_subtitle')}
        </p>
      </div>

      <div>
        <span className="block text-sm font-medium text-text-primary mb-3">
          {t('growth_coach.field_product_type')}
        </span>
        <div className="grid grid-cols-2 gap-2">
          {PRODUCT_TYPE_OPTIONS.map((pt) => (
            <button
              type="button"
              key={pt.key}
              onClick={() => handleProductType(pt.key as ProductType)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                profile.product_type === pt.key
                  ? 'border-accent bg-accent-muted text-accent'
                  : 'border-border bg-bg-tertiary text-text-secondary hover:border-border-hover hover:text-text-primary'
              }`}
            >
              <span>{pt.emoji}</span>
              <span>{locale === 'zh' ? pt.nameZh : pt.nameEn}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="growth-product-desc" className="block text-sm font-medium text-text-primary mb-2">
          {t('growth_coach.field_product_desc')}
        </label>
        <textarea
          id="growth-product-desc"
          value={profile.product_description ?? ''}
          onChange={handleDescChange}
          placeholder={t('growth_coach.field_product_desc_placeholder')}
          rows={3}
          className="w-full bg-bg-tertiary border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted resize-none focus:outline-none focus:border-accent/50"
        />
      </div>

      <div>
        <span className="block text-sm font-medium text-text-primary mb-3">
          {t('growth_coach.field_growth_stage')}
        </span>
        <div className="grid grid-cols-2 gap-2">
          {GROWTH_STAGE_OPTIONS.map((stage) => (
            <button
              type="button"
              key={stage.key}
              onClick={() => handleStage(stage.key as GrowthStage)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                profile.growth_stage === stage.key
                  ? 'border-accent bg-accent-muted text-accent'
                  : 'border-border bg-bg-tertiary text-text-secondary hover:border-border-hover hover:text-text-primary'
              }`}
            >
              <span>{stage.emoji}</span>
              <span>{locale === 'zh' ? stage.nameZh : stage.nameEn}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <span className="block text-sm font-medium text-text-primary mb-2">
          {t('growth_coach.field_challenges')}
        </span>
        <p className="text-text-muted text-xs mb-3">{t('growth_coach.field_challenges_hint')}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {GROWTH_CHALLENGES.map((challenge) => (
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
            .filter((c) => !GROWTH_CHALLENGES.includes(c as typeof GROWTH_CHALLENGES[number]))
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
          {t('growth_coach.field_metrics')}
        </span>
        <div className="grid grid-cols-2 gap-3">
          {[
            { key: 'dau', label: t('growth_coach.field_dau') },
            { key: 'mau', label: t('growth_coach.field_mau') },
            { key: 'd30_retention', label: t('growth_coach.field_d30_retention') },
            { key: 'conversion_rate', label: t('growth_coach.field_conversion') },
            { key: 'revenue', label: t('growth_coach.field_revenue') },
          ].map((metric) => (
            <div key={metric.key}>
              <label htmlFor={`growth-metric-${metric.key}`} className="block text-xs text-text-muted mb-1">{metric.label}</label>
              <input
                id={`growth-metric-${metric.key}`}
                type="text"
                value={profile.metrics?.[metric.key as keyof NonNullable<GrowthProfile['metrics']>] ?? ''}
                onChange={(e) => handleMetricChange(metric.key, e.target.value)}
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
        {t('growth_coach.run_diagnostic')}
      </button>
    </div>
  );
}
