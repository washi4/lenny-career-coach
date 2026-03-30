'use client';

import type { Message, Reference } from '@/types';
import React from 'react';
import { BookOpen } from 'lucide-react';

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

const REF_PATTERN = /\[REF-(\d+)(?::\s*"(.+?)")?\s*(?:\|\s*source:([^\]\s]+))?\]/g;

function parseRefsFromLine(
  html: string,
  onRefClick?: (ref: Reference) => void
): React.ReactNode[] {
  if (!onRefClick) return [<span key="0" dangerouslySetInnerHTML={{ __html: html }} />];

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  const regex = new RegExp(REF_PATTERN.source, 'g');
  let match: RegExpExecArray | null;

  while ((match = regex.exec(html)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <span key={`t${lastIndex}`} dangerouslySetInnerHTML={{ __html: html.slice(lastIndex, match.index) }} />
      );
    }

    const refId = match[1];
    const refTitle = match[2] ?? '';
    const sourceFile = match[3] ?? '';

    const ref: Reference = {
      id: `REF-${refId}`,
      title: refTitle || `Reference ${refId}`,
      type: sourceFile.toLowerCase().includes('podcast') ? 'podcast' : 'newsletter',
      sourceFile,
    };

    const displayText = refTitle
      ? `[REF-${refId}: "${refTitle}"]`
      : `[REF-${refId}]`;

    parts.push(
      <button
        key={`r${match.index}`}
        onClick={() => onRefClick(ref)}
        className="inline text-accent hover:text-accent-hover hover:underline font-medium cursor-pointer transition-colors text-left"
        title={`View source: ${refTitle || `Reference ${refId}`}`}
      >
        {displayText}
      </button>
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < html.length) {
    parts.push(
      <span key={`t${lastIndex}`} dangerouslySetInnerHTML={{ __html: html.slice(lastIndex) }} />
    );
  }

  return parts.length > 0 ? parts : [<span key="0" dangerouslySetInnerHTML={{ __html: html }} />];
}

function renderContent(content: string, onRefClick?: (ref: Reference) => void) {
  content = content.replace(/^\n+/, '');
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim().startsWith('|') && (line.match(/\|/g) ?? []).length >= 2) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }

      if (tableLines.length >= 2) {
        const sepIdx = tableLines.findIndex(l => /^\|[\s-:|]+\|$/.test(l.trim()));
        const headerLine = sepIdx > 0 ? tableLines[0] : undefined;
        const bodyLines = sepIdx >= 0 ? tableLines.slice(sepIdx + 1) : tableLines;

        // Regex: strip outer |, split on unescaped |, unescape \|
        const parseCells = (row: string): string[] => {
          const trimmed = row.trim().replace(/^\|/, '').replace(/\|$/, '');
          return trimmed.split(/(?<!\\)\|/).map(c => c.trim().replace(/\\\|/g, '|'));
        };

        const headerCells = headerLine ? parseCells(headerLine) : undefined;

        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-2">
            <table className="w-full text-sm border-collapse">
              {headerCells && (
                <thead>
                  <tr className="border-b border-border">
                    {headerCells.map((cell, ci) => {
                      const boldParsed = cell.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                      return (
                        <th key={ci} className="text-left py-1.5 px-2 font-semibold">
                          {parseRefsFromLine(boldParsed, onRefClick)}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
              )}
              <tbody>
                {bodyLines.map((row, ri) => {
                  const cells = parseCells(row);
                  return (
                    <tr key={ri} className="border-b border-border/50">
                      {cells.map((cell, ci) => {
                        const boldParsed = cell.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                        return (
                          <td key={ci} className="text-left py-1.5 px-2 align-top">
                            {parseRefsFromLine(boldParsed, onRefClick)}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
    }

    const boldParsed = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="font-semibold text-base mt-3 mb-1">
          {parseRefsFromLine(boldParsed.slice(4), onRefClick)}
        </h3>
      );
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="font-bold text-lg mt-4 mb-2">
          {parseRefsFromLine(boldParsed.slice(3), onRefClick)}
        </h2>
      );
    } else if (line.match(/^[-•]\s/)) {
      elements.push(
        <li key={i} className="ml-4 list-disc">
          {parseRefsFromLine(boldParsed.slice(2), onRefClick)}
        </li>
      );
    } else {
      const orderedMatch = line.match(/^(\d+)\.\s(.*)$/);
      if (orderedMatch) {
        const itemContent = orderedMatch[2].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        elements.push(
          <div key={i} className="ml-4 flex gap-1">
            <span className="flex-shrink-0">{orderedMatch[1]}.</span>
            <span>{parseRefsFromLine(itemContent, onRefClick)}</span>
          </div>
        );
      } else if (line.trim() === '') {
        elements.push(<br key={i} />);
      } else {
        elements.push(
          <p key={i}>{parseRefsFromLine(boldParsed, onRefClick)}</p>
        );
      }
    }
    i++;
  }

  return elements;
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
          {suggestions.map((s, i) => (
            <button
              key={i}
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
