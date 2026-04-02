'use client';

import { useState, useRef, useCallback } from 'react';
import type { TabMode, Message, Reference, JobResult, JobProfile, JobSearchState, JobSource, JobMatchView, GrowthCoachView, GrowthProfile, ProductStrategyView, ProductStrategyProfile } from '@/types';
import { INITIAL_SEARCH_STATE } from '@/types';
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import ChatArea from '@/components/ChatArea';
import TopicChips from '@/components/TopicChips';
import InputArea from '@/components/InputArea';
import ReferencePanel from '@/components/ReferencePanel';
import JobMatchTab from '@/components/JobMatchTab';
import JobDetailPanel from '@/components/JobDetailPanel';
import GrowthCoachTab from '@/components/GrowthCoachTab';
import ProductStrategyTab from '@/components/ProductStrategyTab';
import { sendChatMessage, uploadPdf } from '@/lib/chat-client';
import { useLocale } from '@/lib/i18n';

function createId() {
  return `msg_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabMode>('career_advice');
  const [chatHistories, setChatHistories] = useState<Record<TabMode, Message[]>>({
    resume_review: [],
    career_advice: [],
    mock_interview: [],
    job_match: [],
    growth_coach: [],
    product_strategy: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRef, setSelectedRef] = useState<Reference | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobResult | null>(null);
  const [jobResumeText, setJobResumeText] = useState('');
  const [jobProfile, setJobProfile] = useState<Partial<JobProfile>>({
    target_roles: [],
    skills: [],
    dealbreakers: [],
    preferred_cities: [],
  });
  const [jobMatchView, setJobMatchView] = useState<JobMatchView>('wizard');
  const [jobSearchState, setJobSearchState] = useState<JobSearchState>(INITIAL_SEARCH_STATE);
  const [jobFileName, setJobFileName] = useState('');
  const [jobSource, setJobSource] = useState<JobSource>('boss');
  const [growthCoachView, setGrowthCoachView] = useState<GrowthCoachView>('wizard');
  const [growthDiagnosticContent, setGrowthDiagnosticContent] = useState('');
  const [growthProfile, setGrowthProfile] = useState<Partial<GrowthProfile>>({
    challenges: [],
  });
  const [strategyView, setStrategyView] = useState<ProductStrategyView>('wizard');
  const [strategyDiagnosticContent, setStrategyDiagnosticContent] = useState('');
  const [strategyProfile, setStrategyProfile] = useState<Partial<ProductStrategyProfile>>({
    challenges: [],
  });
  const lastSearchRef = useRef<{ resumeText: string; profile: JobProfile } | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const { t } = useLocale();

  const messages = chatHistories[activeTab];

  const handleRefClick = useCallback((ref: Reference) => {
    setSelectedRef(ref);
  }, []);

  const handleCloseRef = useCallback(() => {
    setSelectedRef(null);
  }, []);

  const handleSend = useCallback(
    async (text: string, targetTab?: TabMode) => {
      const tab = targetTab ?? activeTab;
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      const userMsg: Message = {
        id: createId(),
        role: 'user',
        content: text,
        timestamp: Date.now(),
      };
      const assistantId = createId();
      const assistantMsg: Message = {
        id: assistantId,
        role: 'assistant',
        content: '',
        timestamp: Date.now(),
      };

      setChatHistories((prev) => ({
        ...prev,
        [tab]: [...prev[tab], userMsg, assistantMsg],
      }));
      setIsLoading(true);

      let subtopic: string | undefined;
      const chipMatch = text.match(/^[^\s]+\s(.+)$/);
      if (chipMatch) {
        subtopic = chipMatch[1];
      }

      const allMessages = [...chatHistories[tab], userMsg];

      try {
        await sendChatMessage(
          allMessages,
          tab,
          subtopic,
          (fullContent) => {
            setChatHistories((prev) => ({
              ...prev,
              [tab]: prev[tab].map((m) =>
                m.id === assistantId ? { ...m, content: fullContent } : m,
              ),
            }));
          },
          controller.signal,
        );
      } catch (err: unknown) {
        if (err instanceof Error && err.name === 'AbortError') return;
        setChatHistories((prev) => ({
          ...prev,
          [tab]: prev[tab].map((m) =>
            m.id === assistantId
              ? { ...m, content: t('chat.error') }
              : m,
          ),
        }));
      } finally {
        setIsLoading(false);
      }
    },
    [activeTab, chatHistories, t],
  );

  const handleChipClick = useCallback(
    (text: string) => {
      handleSend(text);
    },
    [handleSend],
  );

  const handleFileUpload = useCallback(
    async (file: File) => {
      if (file.size > 10 * 1024 * 1024) {
        const errorMsg: Message = {
          id: createId(),
          role: 'assistant',
          content: t('chat.file_too_large', { size: (file.size / 1024 / 1024).toFixed(1) }),
          timestamp: Date.now(),
        };
        setChatHistories((prev) => ({
          ...prev,
          [activeTab]: [...prev[activeTab], errorMsg],
        }));
        return;
      }

      setIsLoading(true);
      try {
        const extractedText = await uploadPdf(file);
        const displayName = file.name;
        const userMsg: Message = {
          id: createId(),
          role: 'user',
          content: `📎 ${displayName}`,
          timestamp: Date.now(),
        };
        const assistantId = createId();
        const assistantMsg: Message = {
          id: assistantId,
          role: 'assistant',
          content: '',
          timestamp: Date.now(),
        };

        setChatHistories((prev) => ({
          ...prev,
          [activeTab]: [...prev[activeTab], userMsg, assistantMsg],
        }));

        const prompt = activeTab === 'resume_review'
          ? `${t('chat.review_prompt')}${extractedText}`
          : `${t('chat.reference_prompt')}${extractedText}`;

        const allMessages = [...chatHistories[activeTab], { ...userMsg, content: prompt }];

        try {
          await sendChatMessage(
            allMessages,
            activeTab,
            undefined,
            (fullContent) => {
              setChatHistories((prev) => ({
                ...prev,
                [activeTab]: prev[activeTab].map((m) =>
                  m.id === assistantId ? { ...m, content: fullContent } : m,
                ),
              }));
            },
            new AbortController().signal,
          );
        } catch (err: unknown) {
          if (err instanceof Error && err.name === 'AbortError') return;
          setChatHistories((prev) => ({
            ...prev,
            [activeTab]: prev[activeTab].map((m) =>
              m.id === assistantId
              ? { ...m, content: t('chat.error') }
                : m,
            ),
          }));
        } finally {
          setIsLoading(false);
        }
      } catch (err) {
        let detail = 'Unknown error';
        if (err instanceof Error) {
          try {
            const parsed = JSON.parse(err.message);
            detail = parsed.error || err.message;
          } catch {
            detail = err.message;
          }
        }
        const errorMsg: Message = {
          id: createId(),
          role: 'assistant',
          content: t('chat.pdf_error', { detail }),
          timestamp: Date.now(),
        };
        setChatHistories((prev) => ({
          ...prev,
          [activeTab]: [...prev[activeTab], errorMsg],
        }));
        setIsLoading(false);
      }
    },
    [activeTab, chatHistories, t],
  );

  const handleTabChange = useCallback(
    (tab: TabMode) => {
      if (tab === activeTab) return;
      abortRef.current?.abort();
      setIsLoading(false);
      setActiveTab(tab);
      setSelectedJob(null);
    },
    [activeTab],
  );

  const handleStartJobChat = useCallback(
    (tab: 'career_advice' | 'mock_interview', job: JobResult) => {
      abortRef.current?.abort();
      setIsLoading(false);
      setSelectedJob(null);
      setActiveTab(tab);

      const jobLines = [
        `## Job Details`,
        `Title: ${job.title}`,
        `Company: ${job.company}`,
        job.company_industry ? `Industry: ${job.company_industry}` : '',
        job.location ? `Location: ${job.location}` : '',
        job.salary ? `Salary: ${job.salary}` : '',
        job.experience_req ? `Experience: ${job.experience_req}` : '',
        job.education_req ? `Education: ${job.education_req}` : '',
        job.skills.length > 0 ? `Required Skills: ${job.skills.join(', ')}` : '',
        job.match_reasons.length > 0 ? `\nMatch Strengths:\n${job.match_reasons.map(r => `- ${r}`).join('\n')}` : '',
        job.concerns.length > 0 ? `\nConcerns:\n${job.concerns.map(c => `- ${c}`).join('\n')}` : '',
        job.full_jd ? `\n## Job Description\n${job.full_jd}` : '',
      ].filter(Boolean).join('\n');

      const profileLines = jobProfile.target_roles?.length || jobProfile.skills?.length
        ? [
            `\n## Candidate Profile`,
            jobProfile.target_roles?.length ? `Target Roles: ${jobProfile.target_roles.join(', ')}` : '',
            jobProfile.skills?.length ? `Skills: ${jobProfile.skills.join(', ')}` : '',
            jobProfile.experience_level ? `Experience Level: ${jobProfile.experience_level}` : '',
            jobProfile.preferred_cities?.length ? `Preferred Cities: ${jobProfile.preferred_cities.join(', ')}` : '',
          ].filter(Boolean).join('\n')
        : '';

      const resumeSection = jobResumeText
        ? `\n## Resume\n${jobResumeText}`
        : '';

      const prompt = tab === 'mock_interview'
        ? `I'm preparing for an interview for this role. Please start a mock interview based on the following context:\n\n${jobLines}${profileLines}${resumeSection}`
        : `I'm considering this job opportunity. Please give me targeted career advice based on the following context:\n\n${jobLines}${profileLines}${resumeSection}`;

      void handleSend(prompt, tab);
    },
    [handleSend, jobResumeText, jobProfile],
  );

  const showRightPanel = selectedRef || selectedJob;

  return (
    <div className="flex h-screen w-full bg-bg-primary">
      <div className={`flex flex-col h-screen transition-all duration-300 ${showRightPanel ? 'w-1/2' : 'w-full max-w-3xl mx-auto'}`}>
        <Header />
        <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
        {activeTab === 'job_match' ? (
          <div className="flex-1 min-h-0 overflow-y-auto">
            <JobMatchTab
              onJobSelect={setSelectedJob}
              resumeText={jobResumeText}
              onResumeTextChange={setJobResumeText}
              profile={jobProfile}
              onProfileChange={setJobProfile}
              view={jobMatchView}
              onViewChange={setJobMatchView}
              searchState={jobSearchState}
              onSearchStateChange={setJobSearchState}
              fileName={jobFileName}
              onFileNameChange={setJobFileName}
              source={jobSource}
              onSourceChange={setJobSource}
              lastSearchRef={lastSearchRef}
            />
          </div>
        ) : activeTab === 'growth_coach' ? (
          <GrowthCoachTab
            view={growthCoachView}
            onViewChange={setGrowthCoachView}
            profile={growthProfile}
            onProfileChange={setGrowthProfile}
            diagnosticContent={growthDiagnosticContent}
            onDiagnosticContentChange={setGrowthDiagnosticContent}
            messages={messages}
            isLoading={isLoading}
            onSend={handleSend}
            onRefClick={handleRefClick}
            onFileUpload={handleFileUpload}
          />
        ) : activeTab === 'product_strategy' ? (
          <ProductStrategyTab
            view={strategyView}
            onViewChange={setStrategyView}
            profile={strategyProfile}
            onProfileChange={setStrategyProfile}
            diagnosticContent={strategyDiagnosticContent}
            onDiagnosticContentChange={setStrategyDiagnosticContent}
            messages={messages}
            isLoading={isLoading}
            onSend={handleSend}
            onRefClick={handleRefClick}
            onFileUpload={handleFileUpload}
          />
        ) : (
          <>
            <div className="flex-1 flex flex-col overflow-hidden relative">
              <ChatArea messages={messages} isLoading={isLoading} onRefClick={handleRefClick} onSuggestionClick={handleSend} />
              <TopicChips
                activeTab={activeTab}
                onChipClick={handleChipClick}
                onFileUpload={handleFileUpload}
                hasMessages={messages.length > 0}
              />
            </div>
            <InputArea
              onSend={handleSend}
              onFileUpload={handleFileUpload}
              disabled={isLoading}
              activeTab={activeTab}
            />
          </>
        )}
      </div>

      {selectedJob && (
        <div className="w-1/2 h-screen">
          <JobDetailPanel
            job={selectedJob}
            onClose={() => setSelectedJob(null)}
            resumeText={jobResumeText}
            profile={jobProfile as JobProfile}
            onRefClick={handleRefClick}
            onStartChat={handleStartJobChat}
          />
        </div>
      )}

      {!selectedJob && selectedRef && (
        <div className="w-1/2 h-screen">
          <ReferencePanel reference={selectedRef} onClose={handleCloseRef} />
        </div>
      )}
    </div>
  );
}
