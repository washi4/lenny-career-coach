export type TabMode = 'resume_review' | 'career_advice' | 'mock_interview' | 'job_match';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
}

export interface Reference {
  id: string;
  title: string;
  type: 'podcast' | 'newsletter';
  sourceFile: string;
  youtubeId?: string;
  guest?: string;
  date?: string;
  content?: string;
}

export type JobSource = 'boss' | 'google_jobs';

export interface JobProfile {
  target_roles: string[];
  skills: string[];
  experience_years: number;
  experience_level: string;
  education: string;
  preferred_cities: string[];
  salary_expectation: string;
  dealbreakers: string[];
}

export interface JobResult {
  rank: number;
  score: number;
  title: string;
  company: string;
  salary: string;
  annual_salary?: string;
  location: string;
  experience_req: string;
  education_req: string;
  skills: string[];
  match_reasons: string[];
  concerns: string[];
  boss_name?: string;
  boss_title?: string;
  boss_active_time?: string;
  company_industry?: string;
  company_scale?: string;
  job_url?: string;
  security_id: string;
  full_jd?: string;
  source?: JobSource;
  via?: string;
  apply_options?: Array<{ title: string; link: string }>;
  schedule_type?: string;
  posted_at?: string;
}

export interface JobSearchStats {
  total_fetched: number;
  after_filter: number;
  top_results: number;
}

export type JobSearchStage = 'idle' | 'checking' | 'extracting' | 'searching' | 'fetching' | 'scoring' | 'done' | 'error';

export interface JobSearchState {
  stage: JobSearchStage;
  message: string;
  percent: number;
  jobs: JobResult[];
  stats?: JobSearchStats;
  error?: string;
}
