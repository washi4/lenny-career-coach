export type TabMode = 'resume_review' | 'career_advice' | 'mock_interview';

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
