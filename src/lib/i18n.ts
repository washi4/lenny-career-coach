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
      job_match: 'Job Match',
    },
    input: {
      placeholder: {
        resume_review: 'Paste your resume or drop a PDF here...',
        career_advice: 'What career challenge are you facing?',
        mock_interview: 'Type your answer...',
        job_match: 'Describe your ideal role...',
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
    job_match: {
      setup_title: 'Setup Required',
      setup_desc: 'Job Match needs OpenCLI and Boss直聘 to search live job listings.',
      check_opencli: 'OpenCLI installed',
      check_bridge: 'Browser Bridge connected',
      check_boss: 'Boss直聘 logged in',
      check_button: 'Check Setup',
      setup_guide: 'Setup Guide',
      check_fail_boss: 'Open Chrome → zhipin.com → Log in',
      step_upload: 'Upload Resume',
      step_profile: 'Profile & Preferences',
      upload_prompt: 'Drop your resume PDF here, or click to browse',
      upload_parsing: 'Parsing your resume...',
      upload_parsing_hint: 'Extracting text from PDF — this may take a few seconds',
      upload_success: '{name} uploaded',
      upload_extracting_profile: 'Extracting profile from resume...',
      field_target_roles: 'Target Roles',
      field_cities: 'Preferred Cities',
      field_salary: 'Salary Range',
      field_experience: 'Experience Level',
      field_skills: 'Key Skills',
      field_dealbreakers: 'Dealbreakers',
      field_add: 'Add',
      find_jobs: 'Find Matching Jobs',
      progress_title: 'Finding jobs for you...',
      stage_checking: 'Checking prerequisites...',
      stage_extracting: 'Extracting profile...',
      stage_searching: 'Searching Boss直聘...',
      stage_fetching: 'Fetching job details ({current}/{total})...',
      stage_scoring: 'Scoring & ranking...',
      cancel: 'Cancel',
      retry: 'Retry',
      back_to_wizard: 'Edit Profile',
      error_title: 'Search Failed',
      results_title: '{count} Jobs Matched',
      results_stats: 'Searched {total} → Filtered {filtered} → Top {top}',
      new_search: 'New Search',
      score: 'Score',
      salary_annual: '/year',
      match_reasons: 'Match',
      concerns: 'Concerns',
      boss_active: 'Boss Active',
      view_on_boss: 'View on Boss直聘',
      no_results: 'No matching jobs found. Try adjusting your preferences.',
      detail_title: 'Job Details',
      detail_jd: 'Job Description',
      detail_analysis: 'Match Analysis',
      detail_company: 'Company Info',
      detail_boss: 'Recruiter',
      detail_open_link: 'Open on Boss直聘',
      source_label: 'Job Source',
      source_boss: 'China (Boss直聘)',
      source_google: 'Global (Google Jobs)',
      source_boss_desc: 'Search live listings on Boss直聘',
      source_google_desc: 'Search global jobs via Google',
      stage_searching_google: 'Searching Google Jobs...',
      detail_open_link_google: 'Apply',
      detail_via: 'via {source}',
      posted_at: 'Posted {time}',
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
      job_match: '职位匹配',
    },
    input: {
      placeholder: {
        resume_review: '粘贴简历内容或拖入 PDF...',
        career_advice: '你正在面对什么职业挑战？',
        mock_interview: '输入你的回答...',
        job_match: '描述你理想的职位...',
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
    job_match: {
      setup_title: '需要设置',
      setup_desc: '职位匹配需要 OpenCLI 和 Boss直聘 来搜索职位。',
      check_opencli: 'OpenCLI 已安装',
      check_bridge: 'Browser Bridge 已连接',
      check_boss: 'Boss直聘 已登录',
      check_button: '检查设置',
      setup_guide: '设置指南',
      check_fail_boss: '打开 Chrome → zhipin.com → 登录',
      step_upload: '上传简历',
      step_profile: '个人资料与偏好',
      upload_prompt: '拖入简历 PDF，或点击浏览',
      upload_parsing: '正在解析简历...',
      upload_parsing_hint: '正在从 PDF 中提取文字，请稍候',
      upload_success: '{name} 已上传',
      upload_extracting_profile: '正在从简历中提取个人信息...',
      field_target_roles: '目标职位',
      field_cities: '意向城市',
      field_salary: '薪资范围',
      field_experience: '工作经验',
      field_skills: '核心技能',
      field_dealbreakers: '排除条件',
      field_add: '添加',
      find_jobs: '开始匹配',
      progress_title: '正在为你寻找职位...',
      stage_checking: '检查环境...',
      stage_extracting: '提取简历信息...',
      stage_searching: '搜索 Boss直聘...',
      stage_fetching: '获取职位详情 ({current}/{total})...',
      stage_scoring: '评分排序中...',
      cancel: '取消',
      retry: '重试',
      back_to_wizard: '修改条件',
      error_title: '搜索失败',
      results_title: '匹配到 {count} 个职位',
      results_stats: '搜索 {total} → 筛选 {filtered} → 推荐 {top}',
      new_search: '重新搜索',
      score: '匹配度',
      salary_annual: '/年',
      match_reasons: '匹配亮点',
      concerns: '注意事项',
      boss_active: 'Boss活跃',
      view_on_boss: '在 Boss直聘 查看',
      no_results: '未找到匹配职位，请调整筛选条件。',
      detail_title: '职位详情',
      detail_jd: '职位描述',
      detail_analysis: '匹配分析',
      detail_company: '公司信息',
      detail_boss: '招聘者',
      detail_open_link: '在 Boss直聘 打开',
      source_label: '职位来源',
      source_boss: '国内职位 (Boss直聘)',
      source_google: '海外职位 (Google Jobs)',
      source_boss_desc: '搜索 Boss直聘 实时职位',
      source_google_desc: '通过 Google 搜索全球职位',
      stage_searching_google: '搜索 Google Jobs...',
      detail_open_link_google: '申请职位',
      detail_via: '来自 {source}',
      posted_at: '{time}发布',
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
