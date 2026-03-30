'use client';

import type { TabMode } from '@/types';
import { FileText, MessageSquare, Mic } from 'lucide-react';
import { useLocale } from '@/lib/i18n';

const TAB_ICONS: Record<TabMode, React.ComponentType<{ size?: number; className?: string }>> = {
  resume_review: FileText,
  career_advice: MessageSquare,
  mock_interview: Mic,
};

interface TabBarProps {
  activeTab: TabMode;
  onTabChange: (tab: TabMode) => void;
}

export default function TabBar({ activeTab, onTabChange }: TabBarProps) {
  const { t } = useLocale();

  const tabs: { key: TabMode; labelKey: string }[] = [
    { key: 'resume_review', labelKey: 'tabs.resume_review' },
    { key: 'career_advice', labelKey: 'tabs.career_advice' },
    { key: 'mock_interview', labelKey: 'tabs.mock_interview' },
  ];

  return (
    <nav className="flex border-b border-border">
      {tabs.map((tab) => {
        const Icon = TAB_ICONS[tab.key];
        const isActive = activeTab === tab.key;
        return (
          <button
            type="button"
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`flex-1 py-3 text-sm font-medium transition-colors relative flex items-center justify-center gap-2 cursor-pointer ${
              isActive
                ? 'text-accent font-semibold'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Icon size={16} className={isActive ? 'text-accent' : ''} />
            {t(tab.labelKey)}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
