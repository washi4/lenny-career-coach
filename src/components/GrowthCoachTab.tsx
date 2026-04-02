'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import type { Message, Reference, GrowthProfile, GrowthCoachView, TabMode } from '@/types';
import GrowthWizard from '@/components/GrowthWizard';
import ChatArea from '@/components/ChatArea';
import InputArea from '@/components/InputArea';
import { sendChatMessage } from '@/lib/chat-client';
import { useLocale } from '@/lib/i18n';
import { TrendingUp, ArrowLeft, MessageSquare, RotateCcw } from 'lucide-react';

interface GrowthCoachTabProps {
  view: GrowthCoachView;
  onViewChange: (view: GrowthCoachView) => void;
  profile: Partial<GrowthProfile>;
  onProfileChange: (updater: Partial<GrowthProfile> | ((prev: Partial<GrowthProfile>) => Partial<GrowthProfile>)) => void;
  diagnosticContent: string;
  onDiagnosticContentChange: (content: string) => void;
  messages: Message[];
  isLoading: boolean;
  onSend: (text: string, targetTab?: TabMode) => void;
  onRefClick: (ref: Reference) => void;
  onFileUpload: (file: File) => void;
}

function buildDiagnosticPrompt(profile: GrowthProfile, locale: string): string {
  const isZh = locale === 'zh';

  const productTypeNames: Record<string, { en: string; zh: string }> = {
    consumer_app: { en: 'Consumer App', zh: '消费者应用' },
    b2b_saas: { en: 'B2B SaaS', zh: 'B2B SaaS' },
    marketplace: { en: 'Marketplace', zh: '平台/市场' },
    ecommerce: { en: 'E-Commerce', zh: '电商' },
    other: { en: 'Other', zh: '其他' },
  };

  const stageNames: Record<string, { en: string; zh: string }> = {
    pre_pmf: { en: 'Finding Product-Market Fit', zh: '寻找 PMF' },
    early_growth: { en: 'Early Growth', zh: '早期增长' },
    scaling: { en: 'Scaling', zh: '规模化增长' },
    mature: { en: 'Mature / Optimizing', zh: '成熟期优化' },
  };

  const typeName = productTypeNames[profile.product_type]?.[isZh ? 'zh' : 'en'] ?? profile.product_type;
  const stageName = stageNames[profile.growth_stage]?.[isZh ? 'zh' : 'en'] ?? profile.growth_stage;

  const lines = [
    isZh ? '请根据以下产品增长信息生成一份完整的增长诊断报告：' : 'Please generate a comprehensive Growth Diagnostic Report based on the following product growth profile:',
    '',
    `**${isZh ? '产品类型' : 'Product Type'}:** ${typeName}`,
    profile.product_description ? `**${isZh ? '产品描述' : 'Product Description'}:** ${profile.product_description}` : '',
    `**${isZh ? '增长阶段' : 'Growth Stage'}:** ${stageName}`,
    `**${isZh ? '核心挑战' : 'Core Challenges'}:** ${profile.challenges.join(', ')}`,
  ].filter(Boolean);

  if (profile.metrics) {
    const metricLines: string[] = [];
    if (profile.metrics.dau) metricLines.push(`DAU: ${profile.metrics.dau}`);
    if (profile.metrics.mau) metricLines.push(`MAU: ${profile.metrics.mau}`);
    if (profile.metrics.d30_retention) metricLines.push(`D30 Retention: ${profile.metrics.d30_retention}`);
    if (profile.metrics.conversion_rate) metricLines.push(`Conversion Rate: ${profile.metrics.conversion_rate}`);
    if (profile.metrics.revenue) metricLines.push(`MRR/Revenue: ${profile.metrics.revenue}`);

    if (metricLines.length > 0) {
      lines.push(`**${isZh ? '关键指标' : 'Key Metrics'}:**`);
      for (const ml of metricLines) {
        lines.push(`- ${ml}`);
      }
    }
  }

  return lines.join('\n');
}

export default function GrowthCoachTab({
  view,
  onViewChange,
  profile,
  onProfileChange,
  diagnosticContent,
  onDiagnosticContentChange,
  messages,
  isLoading,
  onSend,
  onRefClick,
  onFileUpload,
}: GrowthCoachTabProps) {
  const { locale, t } = useLocale();
  const abortRef = useRef<AbortController | null>(null);
  const [reportDone, setReportDone] = useState(false);
  const [reportTimestamp, setReportTimestamp] = useState(0);

  const reportMessages: Message[] = useMemo(() => {
    if (!diagnosticContent) return [];
    return [{
      id: 'diagnostic-report',
      role: 'assistant' as const,
      content: diagnosticContent,
      timestamp: reportTimestamp,
    }];
  }, [diagnosticContent, reportTimestamp]);

  const handleWizardSubmit = useCallback(
    async (completedProfile: GrowthProfile) => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      setReportDone(false);
      setReportTimestamp(Date.now());

      onDiagnosticContentChange('');
      onViewChange('report');

      const prompt = buildDiagnosticPrompt(completedProfile, locale);

      try {
        await sendChatMessage(
          [{ id: 'growth-prompt', role: 'user' as const, content: prompt, timestamp: Date.now() }],
          'growth_coach',
          undefined,
          (fullContent) => {
            onDiagnosticContentChange(fullContent);
          },
          controller.signal,
        );
        setReportDone(true);
      } catch (err: unknown) {
        if (err instanceof Error && err.name === 'AbortError') return;
        onDiagnosticContentChange(t('chat.error'));
        setReportDone(true);
      }
    },
    [locale, onDiagnosticContentChange, onViewChange, t],
  );

  const handleStartChat = useCallback(() => {
    onViewChange('chat');
  }, [onViewChange]);

  const handleBackToWizard = useCallback(() => {
    abortRef.current?.abort();
    onDiagnosticContentChange('');
    setReportDone(false);
    onViewChange('wizard');
  }, [onDiagnosticContentChange, onViewChange]);

  const handleNewDiagnostic = useCallback(() => {
    abortRef.current?.abort();
    onDiagnosticContentChange('');
    setReportDone(false);
    onProfileChange({ challenges: [] });
    onViewChange('wizard');
  }, [onDiagnosticContentChange, onProfileChange, onViewChange]);

   if (view === 'wizard') {
    return (
      <div className="flex-1 min-h-0 overflow-y-auto p-4">
        <GrowthWizard
          profile={profile}
          onProfileChange={onProfileChange}
          onSubmit={handleWizardSubmit}
        />
      </div>
    );
  }

  if (view === 'report') {
    const isDone = reportDone && diagnosticContent.length > 0;

    return (
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-accent" />
            <span className="text-sm font-medium text-text-primary">
              {t('growth_coach.report_title')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {!isDone && (
              <span className="text-xs text-text-muted animate-pulse">
                {t('growth_coach.report_generating')}
              </span>
            )}
            {isDone && (
              <span className="text-xs text-accent">
                {t('growth_coach.report_done')}
              </span>
            )}
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto">
          <ChatArea
            messages={reportMessages}
            isLoading={!isDone && diagnosticContent.length === 0}
            onRefClick={onRefClick}
            onSuggestionClick={onSend}
          />
        </div>

        {isDone && (
          <div className="px-4 py-3 border-t border-border flex items-center gap-3">
            <button
              type="button"
              onClick={handleStartChat}
              className="flex-1 flex items-center justify-center gap-2 bg-accent text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-accent-hover transition-colors cursor-pointer"
            >
              <MessageSquare size={16} />
              {t('growth_coach.start_chat')}
            </button>
            <button
              type="button"
              onClick={handleBackToWizard}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-border text-sm text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              {t('growth_coach.back_to_wizard')}
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <TrendingUp size={14} className="text-accent" />
          <span>{t('growth_coach.report_title')}</span>
        </div>
        <button
          type="button"
          onClick={handleNewDiagnostic}
          className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary transition-colors cursor-pointer"
        >
          <RotateCcw size={12} />
          {t('growth_coach.new_diagnostic')}
        </button>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <ChatArea
          messages={messages}
          isLoading={isLoading}
          onRefClick={onRefClick}
          onSuggestionClick={onSend}
        />
      </div>
      <InputArea
        onSend={onSend}
        onFileUpload={onFileUpload}
        disabled={isLoading}
        activeTab="growth_coach"
      />
    </div>
  );
}
