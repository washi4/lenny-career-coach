'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Locale = 'en' | 'zh';

export const translations = {
  en: {
    header: {
      title: 'Lenny Career Coach',
      subtitle: 'Powered by 663 episodes & articles from Lenny Rachitsky · Every answer grounded in real content',
    },
    tabs: {
      resume_review: 'Resume Review',
      career_advice: 'Career Advice',
      mock_interview: 'Mock Interview',
    },
    input: {
      placeholder: {
        resume_review: 'Paste your resume or drop a PDF here...',
        career_advice: 'What career challenge are you facing?',
        mock_interview: 'Type your answer...',
      },
      footer: "Answers sourced from Lenny's Podcast & Newsletter · Not generic AI — every response cites real content",
    },
    topics: {
      title: 'Pick a topic to explore, or ask anything',
      resume_prompt: "Drop your resume here — I'll analyze it against patterns from 300+ conversations with top PMs, hiring managers, and career coaches featured on Lenny's Podcast.",
      resume_upload_button: 'Upload PDF Resume',
      resume_format_hint: 'PDF format supported, max 10MB',
      interview_title: 'Pick an interview format to start practicing',
      upload_hint: 'Drop a resume PDF or type directly',
    },
    chat: {
      greeting: "Hey — I'm an AI coach built on Lenny Rachitsky's full archive: 314 podcast episodes and 349 newsletter deep-dives. Ask me about your career, or upload your resume for a detailed review.",
      error: 'Something went wrong on our end. Please try again.',
      file_too_large: 'That file is {size}MB — the limit is 10MB. Try a smaller PDF.',
      pdf_error: "Couldn't parse that PDF: {detail}\n\nTry pasting the text directly instead.",
      review_prompt: 'Please review the following resume:\n\n',
      reference_prompt: 'Here is my resume content for reference:\n\n',
    },
    reference: {
      podcast: 'Podcast',
      newsletter: 'Newsletter',
      guest: 'Guest',
      loading: 'Loading content...',
      close: 'Close reference panel',
    },
    career_topics: {
      transition: {
        name: 'Career Transitions',
      },
      negotiation: {
        name: 'Salary Negotiation',
      },
      personal_brand: {
        name: 'Personal Branding',
      },
      networking: {
        name: 'Networking & Mentorship',
      },
      promotion: {
        name: 'Promotion & Growth',
      },
      skills: {
        name: 'Core Skills Development',
      },
      ai_impact: {
        name: 'AI Career Impact',
      },
      burnout: {
        name: 'Burnout & Work-Life Balance',
      },
    },
    interview_types: {
      product_sense: {
        name: 'Product Sense',
      },
      analytical: {
        name: 'Analytical',
      },
      behavioral: {
        name: 'Behavioral',
      },
      strategy: {
        name: 'Strategy & Market',
      },
      execution: {
        name: 'Execution',
      },
    },
  },
  zh: {
    header: {
      title: 'Lenny 职业教练',
      subtitle: '基于 314 期播客 + 349 篇深度文章构建 · 每个回答都有真实内容出处',
    },
    tabs: {
      resume_review: '简历诊断',
      career_advice: '职业咨询',
      mock_interview: '模拟面试',
    },
    input: {
      placeholder: {
        resume_review: '粘贴简历内容或拖入 PDF...',
        career_advice: '你正在面对什么职业挑战？',
        mock_interview: '输入你的回答...',
      },
      footer: '所有回答来源于 Lenny 播客与新闻通讯 · 非通用 AI，每条回复引用真实内容',
    },
    topics: {
      title: '选择一个话题，或直接提问',
      resume_prompt: '上传你的简历 — 我会基于 Lenny 播客中 300+ 位顶级 PM、招聘经理和职业导师的分享来分析和反馈。',
      resume_upload_button: '上传 PDF 简历',
      resume_format_hint: '支持 PDF 格式，最大 10MB',
      interview_title: '选择面试类型开始练习',
      upload_hint: '拖入简历 PDF 或直接输入',
    },
    chat: {
      greeting: '你好 — 我是一个基于 Lenny Rachitsky 完整内容库构建的 AI 教练：314 期播客访谈 + 349 篇深度文章。问我任何职业问题，或上传简历获取详细诊断。',
      error: '出了点问题，请重试。',
      file_too_large: '文件 {size}MB 超出限制，最大支持 10MB，请换个小一点的 PDF。',
      pdf_error: 'PDF 解析失败：{detail}\n\n可以试试直接粘贴简历文字。',
      review_prompt: '请评审以下简历：\n\n',
      reference_prompt: '以下是我的简历内容，请参考：\n\n',
    },
    reference: {
      podcast: '播客',
      newsletter: '文章',
      guest: '嘉宾',
      loading: '加载中...',
      close: '关闭参考面板',
    },
    career_topics: {
      transition: {
        name: '职业转型',
      },
      negotiation: {
        name: '薪资谈判',
      },
      personal_brand: {
        name: '个人品牌',
      },
      networking: {
        name: '人脉与导师',
      },
      promotion: {
        name: '晋升与成长',
      },
      skills: {
        name: '核心技能',
      },
      ai_impact: {
        name: 'AI 与职业',
      },
      burnout: {
        name: '倦怠与平衡',
      },
    },
    interview_types: {
      product_sense: {
        name: '产品感觉 (Product Sense)',
      },
      analytical: {
        name: '数据分析 (Analytical)',
      },
      behavioral: {
        name: '行为面试 (Behavioral)',
      },
      strategy: {
        name: '战略市场 (Strategy)',
      },
      execution: {
        name: '执行力 (Execution)',
      },
    },
  },
};

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

function getNestedValue(obj: Record<string, unknown>, path: string): string | undefined {
  const keys = path.split('.');
  let value: unknown = obj;

  for (const key of keys) {
    if (typeof value !== 'object' || value === null || !(key in (value as Record<string, unknown>))) {
      return undefined;
    }
    value = (value as Record<string, unknown>)[key];
  }

  return typeof value === 'string' ? value : undefined;
}

function interpolateString(text: string, params?: Record<string, string | number>): string {
  if (!params) return text;

  let result = text;
  for (const [key, value] of Object.entries(params)) {
    result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), String(value));
  }
  return result;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedLocale = localStorage.getItem('locale') as Locale | null;
    if (storedLocale && (storedLocale === 'en' || storedLocale === 'zh')) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration: sync with localStorage on mount
      setLocaleState(storedLocale);
    }
    setHydrated(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const activeLocale = hydrated ? locale : 'en';

  const t = (key: string, params?: Record<string, string | number>): string => {
    const value = getNestedValue(translations[activeLocale], key);
    if (!value) {
      return key;
    }
    return interpolateString(value, params);
  };

  const value: LocaleContextType = { locale: activeLocale, setLocale, t };

  return React.createElement(
    LocaleContext.Provider,
    { value },
    React.createElement('div', { style: { visibility: hydrated ? 'visible' : 'hidden' } }, children)
  );
}

export function useLocale(): LocaleContextType {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return context;
}
