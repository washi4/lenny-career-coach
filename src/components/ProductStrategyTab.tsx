'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import type { Message, Reference, ProductStrategyProfile, ProductStrategyView, TabMode } from '@/types';
import StrategyWizard from '@/components/StrategyWizard';
import ChatArea from '@/components/ChatArea';
import InputArea from '@/components/InputArea';
import { sendChatMessage } from '@/lib/chat-client';
import { useLocale } from '@/lib/i18n';
import { Lightbulb, ArrowLeft, MessageSquare, RotateCcw } from 'lucide-react';

interface ProductStrategyTabProps {
  view: ProductStrategyView;
  onViewChange: (view: ProductStrategyView) => void;
  profile: Partial<ProductStrategyProfile>;
  onProfileChange: (updater: Partial<ProductStrategyProfile> | ((prev: Partial<ProductStrategyProfile>) => Partial<ProductStrategyProfile>)) => void;
  diagnosticContent: string;
  onDiagnosticContentChange: (content: string) => void;
  messages: Message[];
  isLoading: boolean;
  onSend: (text: string, targetTab?: TabMode) => void;
  onRefClick: (ref: Reference) => void;
  onFileUpload: (file: File) => void;
}

function buildDiagnosticPrompt(profile: ProductStrategyProfile, locale: string): string {
  const isZh = locale === 'zh';

  const strategyAreaNames: Record<string, { en: string; zh: string }> = {
    roadmap: { en: 'Roadmap & Prioritization', zh: '路线图与优先级' },
    positioning: { en: 'Positioning & Differentiation', zh: '定位与差异化' },
    metrics: { en: 'Metrics & North Star', zh: '指标与北极星' },
    discovery: { en: 'User Research & Discovery', zh: '用户研究与发现' },
    launch: { en: 'Launch & GTM', zh: '发布与市场推广' },
    platform: { en: 'Platform & Ecosystem', zh: '平台与生态' },
    other: { en: 'Other', zh: '其他' },
  };

  const maturityNames: Record<string, { en: string; zh: string }> = {
    idea: { en: 'Idea / Concept', zh: '概念阶段' },
    pre_pmf: { en: 'Pre-PMF', zh: 'PMF 之前' },
    post_pmf: { en: 'Post-PMF / Early Traction', zh: 'PMF 之后' },
    growth: { en: 'Growth Phase', zh: '增长阶段' },
    mature: { en: 'Mature / At Scale', zh: '成熟期' },
  };

  const areaName = strategyAreaNames[profile.strategy_area]?.[isZh ? 'zh' : 'en'] ?? profile.strategy_area;
  const maturity = maturityNames[profile.product_maturity]?.[isZh ? 'zh' : 'en'] ?? profile.product_maturity;

  const lines = [
    isZh ? '请根据以下产品策略信息生成一份完整的产品策略诊断报告：' : 'Please generate a comprehensive Product Strategy Diagnostic Report based on the following product strategy profile:',
    '',
    `**${isZh ? '策略领域' : 'Strategy Area'}:** ${areaName}`,
    profile.product_description ? `**${isZh ? '产品描述' : 'Product Description'}:** ${profile.product_description}` : '',
    `**${isZh ? '产品成熟度' : 'Product Maturity'}:** ${maturity}`,
    `**${isZh ? '核心挑战' : 'Core Challenges'}:** ${profile.challenges.join(', ')}`,
  ].filter(Boolean);

  if (profile.context) {
    const contextLines: string[] = [];
    if (profile.context.team_size) contextLines.push(`${isZh ? '团队规模' : 'Team Size'}: ${profile.context.team_size}`);
    if (profile.context.user_base) contextLines.push(`${isZh ? '用户规模' : 'User Base'}: ${profile.context.user_base}`);
    if (profile.context.revenue_model) contextLines.push(`${isZh ? '商业模式' : 'Revenue Model'}: ${profile.context.revenue_model}`);
    if (profile.context.competitive_landscape) contextLines.push(`${isZh ? '竞争格局' : 'Competitive Landscape'}: ${profile.context.competitive_landscape}`);

    if (contextLines.length > 0) {
      lines.push(`**${isZh ? '补充信息' : 'Additional Context'}:**`);
      for (const cl of contextLines) {
        lines.push(`- ${cl}`);
      }
    }
  }

  return lines.join('\n');
}

export default function ProductStrategyTab({
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
}: ProductStrategyTabProps) {
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
    async (completedProfile: ProductStrategyProfile) => {
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
          [{ id: 'strategy-prompt', role: 'user' as const, content: prompt, timestamp: Date.now() }],
          'product_strategy',
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
        <StrategyWizard
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
            <Lightbulb size={16} className="text-accent" />
            <span className="text-sm font-medium text-text-primary">
              {t('product_strategy.report_title')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {!isDone && (
              <span className="text-xs text-text-muted animate-pulse">
                {t('product_strategy.report_generating')}
              </span>
            )}
            {isDone && (
              <span className="text-xs text-accent">
                {t('product_strategy.report_done')}
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
              {t('product_strategy.start_chat')}
            </button>
            <button
              type="button"
              onClick={handleBackToWizard}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-border text-sm text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              {t('product_strategy.back_to_wizard')}
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
          <Lightbulb size={14} className="text-accent" />
          <span>{t('product_strategy.report_title')}</span>
        </div>
        <button
          type="button"
          onClick={handleNewDiagnostic}
          className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary transition-colors cursor-pointer"
        >
          <RotateCcw size={12} />
          {t('product_strategy.new_diagnostic')}
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
        activeTab="product_strategy"
      />
    </div>
  );
}
