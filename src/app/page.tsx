'use client';

import { useState, useRef, useCallback } from 'react';
import type { TabMode, Message, Reference, JobResult } from '@/types';
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import ChatArea from '@/components/ChatArea';
import TopicChips from '@/components/TopicChips';
import InputArea from '@/components/InputArea';
import ReferencePanel from '@/components/ReferencePanel';
import JobMatchTab from '@/components/JobMatchTab';
import JobDetailPanel from '@/components/JobDetailPanel';
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
  });
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRef, setSelectedRef] = useState<Reference | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobResult | null>(null);
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
    async (text: string) => {
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
        [activeTab]: [...prev[activeTab], userMsg, assistantMsg],
      }));
      setIsLoading(true);

      let subtopic: string | undefined;
      const chipMatch = text.match(/^[^\s]+\s(.+)$/);
      if (chipMatch) {
        subtopic = chipMatch[1];
      }

      const allMessages = [...chatHistories[activeTab], userMsg];

      try {
        await sendChatMessage(
          allMessages,
          activeTab,
          subtopic,
          (fullContent) => {
            setChatHistories((prev) => ({
              ...prev,
              [activeTab]: prev[activeTab].map((m) =>
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
          [activeTab]: prev[activeTab].map((m) =>
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

  const showRightPanel = selectedRef || selectedJob;

  return (
    <div className="flex h-screen w-full bg-bg-primary">
      <div className={`flex flex-col h-screen transition-all duration-300 ${showRightPanel ? 'w-1/2' : 'w-full max-w-3xl mx-auto'}`}>
        <Header />
        <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
        {activeTab === 'job_match' ? (
          <div className="flex-1 min-h-0 overflow-y-auto">
            <JobMatchTab onJobSelect={setSelectedJob} />
          </div>
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
          <JobDetailPanel job={selectedJob} onClose={() => setSelectedJob(null)} />
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
