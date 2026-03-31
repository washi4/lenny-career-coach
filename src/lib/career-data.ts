export const RESUME_REVIEW_CRITERIA = {
  impact_metrics: {
    name: '量化成果 (Impact Metrics)',
    description: '简历是否用具体数字展示成果？增长了X%、节省了Y万、服务了Z用户',
  },
  product_thinking: {
    name: '产品思维 (Product Thinking)',
    description: '是否展示了用户洞察→问题定义→方案设计→验证迭代 的完整思路',
  },
  leadership_signals: {
    name: '领导力信号 (Leadership Signals)',
    description: '是否展示了跨团队协作、影响力、决策能力',
  },
  storytelling: {
    name: '叙事能力 (Storytelling)',
    description: '简历是否讲了一个连贯的职业故事？不是功能列表而是成长轨迹',
  },
  role_match: {
    name: '角色匹配 (Role Match)',
    description: '经验是否匹配目标职位级别？IC vs 管理者、B2B vs B2C、0-1 vs 规模化',
  },
} as const;

export const CAREER_TOPICS = {
  transition: {
    key: 'transition',
    name: '职业转型和转变',
    emoji: '🎯',
    description: '转行做PM、从IC转管理、从大公司到创业、从创业到大公司',
  },
  negotiation: {
    key: 'negotiation',
    name: '薪资谈判策略',
    emoji: '📈',
    description: '如何谈薪资、评估offer、理解总包结构',
  },
  personal_brand: {
    key: 'personal_brand',
    name: '打造个人品牌',
    emoji: '💡',
    description: '建立影响力、写作、演讲、社交媒体',
  },
  networking: {
    key: 'networking',
    name: '社交网络和导师指导',
    emoji: '🤝',
    description: '找到导师、建立人脉、求助技巧',
  },
  promotion: {
    key: 'promotion',
    name: '晋升和职业成长',
    emoji: '🚀',
    description: '如何晋升、职级体系、成为高级PM',
  },
  skills: {
    key: 'skills',
    name: '核心技能发展',
    emoji: '🛠️',
    description: 'PM需要什么技能、怎么学习提升',
  },
  ai_impact: {
    key: 'ai_impact',
    name: 'AI 对职业的影响',
    emoji: '🤖',
    description: 'AI会取代PM吗？如何利用AI提升效率、未来PM的技能',
  },
  burnout: {
    key: 'burnout',
    name: '倦怠管理和工作生活平衡',
    emoji: '🧘',
    description: '应对倦怠、时间管理、心理健康',
  },
} as const;

export const INTERVIEW_TYPES = {
  product_sense: {
    key: 'product_sense',
    name: '产品感觉面试 (Product Sense)',
    emoji: '🎨',
    description: '设计一个产品、改进现有产品、分析用户需求',
    sampleQuestions: [
      'Design a product for elderly people to stay connected with family',
      'How would you improve Instagram for creators?',
      'Design a feature to help remote teams build culture',
      'Your PM dashboard shows DAU dropped 20% this week. Walk me through your approach.',
    ],
  },
  analytical: {
    key: 'analytical',
    name: '数据分析面试 (Analytical)',
    emoji: '📊',
    description: '定义指标、分析数据、设计实验',
    sampleQuestions: [
      'How would you measure the success of Instagram Stories?',
      'If Uber ride completion rate dropped 5%, how would you investigate?',
      'Define the north star metric for Spotify\'s podcast business',
      'Design an A/B test for a new checkout flow',
    ],
  },
  behavioral: {
    key: 'behavioral',
    name: '行为面试 (Behavioral)',
    emoji: '💬',
    description: '领导力、冲突处理、团队协作经历',
    sampleQuestions: [
      'Tell me about a time you had to push back on a stakeholder',
      'Describe a situation where you had to make a decision with incomplete data',
      'Tell me about a product you launched that failed. What did you learn?',
      'How do you handle disagreements with engineering leads?',
    ],
  },
  strategy: {
    key: 'strategy',
    name: '战略面试 (Strategy/Market)',
    emoji: '🎯',
    description: '市场分析、竞争策略、商业模式',
    sampleQuestions: [
      'Should Spotify enter the audiobook market? How?',
      'How would you build a strategy for Notion to compete with Google Docs?',
      'A fintech startup asks you to define their GTM strategy for SMBs. Walk me through it.',
      'How would you prioritize international expansion for a B2B SaaS product?',
    ],
  },
  execution: {
    key: 'execution',
    name: '执行面试 (Execution)',
    emoji: '⚡',
    description: '项目管理、优先级排序、跨团队协调',
    sampleQuestions: [
      'You have 5 feature requests from 5 different teams. How do you prioritize?',
      'Your engineering team says the project will take 3x longer than expected. What do you do?',
      'How would you create a 6-month roadmap for a new product line?',
      'Walk me through how you\'d handle launching a feature across 10 countries simultaneously.',
    ],
  },
} as const;

export type CareerTopicKey = keyof typeof CAREER_TOPICS;
export type InterviewTypeKey = keyof typeof INTERVIEW_TYPES;

export const JOB_MATCH_CONFIG = {
  cities: [
    '北京', '上海', '广州', '深圳', '杭州', '成都',
    '南京', '武汉', '西安', '苏州', '长沙', '重庆',
    '天津', '郑州', '青岛', '大连', '厦门', '珠海',
  ],
  international_cities: [
    'San Francisco, CA', 'New York, NY', 'Seattle, WA', 'Los Angeles, CA',
    'Austin, TX', 'Boston, MA', 'Chicago, IL', 'Denver, CO',
    'London, UK', 'Toronto, Canada', 'Singapore', 'Berlin, Germany',
    'Sydney, Australia', 'Tokyo, Japan', 'Amsterdam, Netherlands', 'Remote',
  ],
  /** Maps short display names to SerpApi-compatible location strings */
  serpapi_location_map: {
    'San Francisco, CA': 'San Francisco, California, United States',
    'New York, NY': 'New York, New York, United States',
    'Seattle, WA': 'Seattle, Washington, United States',
    'Los Angeles, CA': 'Los Angeles, California, United States',
    'Austin, TX': 'Austin, Texas, United States',
    'Boston, MA': 'Boston, Massachusetts, United States',
    'Chicago, IL': 'Chicago, Illinois, United States',
    'Denver, CO': 'Denver, Colorado, United States',
    'London, UK': 'London, England, United Kingdom',
    'Toronto, Canada': 'Toronto, Ontario, Canada',
    'Singapore': 'Singapore',
    'Berlin, Germany': 'Berlin, Germany',
    'Sydney, Australia': 'Sydney, New South Wales, Australia',
    'Tokyo, Japan': 'Tokyo, Japan',
    'Amsterdam, Netherlands': 'Amsterdam, Netherlands',
    'Remote': 'United States',
  } as Record<string, string>,
  salary_ranges: [
    '3K以下', '3-5K', '5-10K', '10-15K', '15-20K',
    '20-30K', '30-50K', '50K以上',
  ],
  international_salary_ranges: [
    '$50K-$80K', '$80K-$120K', '$120K-$160K', '$160K-$200K',
    '$200K-$250K', '$250K-$300K', '$300K+',
  ],
  experience_levels: [
    '应届', '1年以内', '1-3年', '3-5年', '5-10年', '10年以上',
  ],
  international_experience_levels: [
    'Entry Level', '1-3 years', '3-5 years', '5-10 years', '10+ years',
  ],
  education_levels: [
    '大专', '本科', '硕士', '博士',
  ],
  international_education_levels: [
    'Associate', 'Bachelor', 'Master', 'PhD',
  ],
  common_dealbreakers: [
    '996', '加班严重', '外包', '大小周', '无社保', '频繁出差',
  ],
  common_dealbreakers_intl: [
    'No remote', 'Low pay', 'Excessive overtime', 'Contract only', 'No visa sponsorship', 'Frequent travel',
  ],
} as const;
