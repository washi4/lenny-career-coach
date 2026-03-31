'use client';

import type { Message, Reference } from '@/types';
import React from 'react';
import { BookOpen } from 'lucide-react';
import { renderContent } from '@/lib/markdown-renderer';

interface ChatMessageProps {
  message: Message;
  onRefClick?: (ref: Reference) => void;
  isLastAssistant?: boolean;
  onSuggestionClick?: (text: string) => void;
}

function extractSuggestions(content: string): { cleanContent: string; suggestions: string[] } {
  const match = content.match(/<!--\s*suggestions:\s*(\[[\s\S]*?\])\s*-->\s*$/);
  if (!match) return { cleanContent: content, suggestions: [] };
  try {
    const suggestions = JSON.parse(match[1]);
    const cleanContent = content.slice(0, match.index).trimEnd();
    return { cleanContent, suggestions };
  } catch {
    return { cleanContent: content, suggestions: [] };
  }
}

export default function ChatMessage({ message, onRefClick, isLastAssistant, onSuggestionClick }: ChatMessageProps) {
  const isUser = message.role === 'user';

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="bg-surface-user rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%]">
          <div className="text-sm leading-relaxed text-text-primary whitespace-pre-wrap">
            {message.content}
          </div>
        </div>
      </div>
    );
  }

  const { cleanContent, suggestions } = extractSuggestions(message.content);

  return (
    <div>
      <div className="flex gap-3 items-start">
        <div className="w-8 h-8 rounded-full bg-accent-muted flex items-center justify-center flex-shrink-0">
          <BookOpen size={16} className="text-accent" />
        </div>
        <div className="border border-border/50 bg-bg-secondary rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%]">
          <div className="text-sm leading-relaxed text-text-primary">
            {renderContent(cleanContent, onRefClick)}
          </div>
        </div>
      </div>
      {isLastAssistant && suggestions.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2 ml-11">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onSuggestionClick?.(s)}
              className="bg-bg-tertiary border border-border rounded-full px-4 py-2 text-sm text-text-secondary hover:bg-bg-hover hover:border-border-hover hover:text-text-primary cursor-pointer transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
