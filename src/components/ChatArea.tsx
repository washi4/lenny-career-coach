'use client';

import { useEffect, useRef } from 'react';
import type { Message, Reference } from '@/types';
import ChatMessage from './ChatMessage';
import { BookOpen } from 'lucide-react';

interface ChatAreaProps {
  messages: Message[];
  isLoading: boolean;
  onRefClick?: (ref: Reference) => void;
  onSuggestionClick?: (text: string) => void;
}

function TypingIndicator() {
  return (
    <div className="flex gap-3 items-start">
      <div className="w-8 h-8 rounded-full bg-accent-muted flex items-center justify-center flex-shrink-0">
        <BookOpen size={16} className="text-accent" />
      </div>
      <div className="border border-border/50 bg-bg-secondary rounded-2xl rounded-bl-sm px-4 py-3">
        <div className="flex gap-1.5 items-center h-5">
          <span className="w-2 h-2 bg-accent/50 rounded-full animate-bounce [animation-delay:0ms]" />
          <span className="w-2 h-2 bg-accent/50 rounded-full animate-bounce [animation-delay:150ms]" />
          <span className="w-2 h-2 bg-accent/50 rounded-full animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}

export default function ChatArea({ messages, isLoading, onRefClick, onSuggestionClick }: ChatAreaProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const lastAssistantIdx = messages.reduce((acc, m, i) => m.role === 'assistant' ? i : acc, -1);

  const hasMessages = messages.length > 0 || isLoading;

  return (
    <div className="flex-1 overflow-y-auto relative">
      {hasMessages && (
        <div className="relative z-10 px-4 py-6 space-y-4">
          {messages.map((msg, idx) => (
            <ChatMessage
              key={msg.id}
              message={msg}
              onRefClick={onRefClick}
              isLastAssistant={!isLoading && idx === lastAssistantIdx}
              onSuggestionClick={onSuggestionClick}
            />
          ))}
          {isLoading && <TypingIndicator />}
          <div ref={bottomRef} />
        </div>
      )}
    </div>
  );
}
