'use client';

import type { ReactNode } from 'react';
import type { Reference } from '@/types';

export const REF_PATTERN = /\[REF-(\d+)(?::\s*"(.+?)")?\s*(?:\|\s*source:([^\]\s]+))?\]/g;

export function parseRefsFromLine(
  line: string,
  onRefClick?: (ref: Reference) => void,
): ReactNode[] {
  const renderBoldText = (text: string, keyPrefix: string): ReactNode[] => {
    const result: ReactNode[] = [];
    const boldRegex = /\*\*(.*?)\*\*/g;
    let cursor = 0;
    let boldMatch = boldRegex.exec(text);

    while (boldMatch) {
      const [full, boldContent] = boldMatch;
      if (boldMatch.index > cursor) {
        result.push(<span key={`${keyPrefix}-t-${cursor}`}>{text.slice(cursor, boldMatch.index)}</span>);
      }
      result.push(<strong key={`${keyPrefix}-b-${boldMatch.index}`}>{boldContent}</strong>);
      cursor = boldMatch.index + full.length;
      boldMatch = boldRegex.exec(text);
    }

    if (cursor < text.length) {
      result.push(<span key={`${keyPrefix}-t-${cursor}`}>{text.slice(cursor)}</span>);
    }

    return result.length > 0 ? result : [<span key={`${keyPrefix}-t-0`}>{text}</span>];
  };

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  const regex = new RegExp(REF_PATTERN.source, 'g');
  let match = regex.exec(line);

  while (match !== null) {
    if (match.index > lastIndex) {
      parts.push(...renderBoldText(line.slice(lastIndex, match.index), `seg-${lastIndex}`));
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

    if (onRefClick) {
      parts.push(
        <button
          key={`r${match.index}`}
          type="button"
          onClick={() => onRefClick(ref)}
          className="inline text-accent hover:text-accent-hover hover:underline font-medium cursor-pointer transition-colors text-left"
          title={`View source: ${refTitle || `Reference ${refId}`}`}
        >
          {displayText}
        </button>,
      );
    } else {
      parts.push(
        <span key={`r${match.index}`} className="font-medium text-accent">
          {displayText}
        </span>,
      );
    }

    lastIndex = match.index + match[0].length;
    match = regex.exec(line);
  }

  if (lastIndex < line.length) {
    parts.push(...renderBoldText(line.slice(lastIndex), `seg-${lastIndex}`));
  }

  return parts.length > 0 ? parts : renderBoldText(line, 'seg-0');
}

export function renderContent(content: string, onRefClick?: (ref: Reference) => void) {
  content = content.replace(/^\n+/, '');
  const lines = content.split('\n');
  const elements: ReactNode[] = [];
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
                    {headerCells.map((cell) => {
                      return (
                        <th key={`h-${cell}`} className="text-left py-1.5 px-2 font-semibold">
                          {parseRefsFromLine(cell, onRefClick)}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
              )}
              <tbody>
                {bodyLines.map((row) => {
                  const cells = parseCells(row);
                  return (
                    <tr key={`r-${row}`} className="border-b border-border/50">
                      {cells.map((cell) => {
                        return (
                          <td key={`c-${row}-${cell}`} className="text-left py-1.5 px-2 align-top">
                            {parseRefsFromLine(cell, onRefClick)}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>,
        );
        continue;
      }
    }

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="font-semibold text-base mt-3 mb-1">
          {parseRefsFromLine(line.slice(4), onRefClick)}
        </h3>,
      );
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="font-bold text-lg mt-4 mb-2">
          {parseRefsFromLine(line.slice(3), onRefClick)}
        </h2>,
      );
    } else if (line.match(/^[-•]\s/)) {
      elements.push(
        <li key={i} className="ml-4 list-disc">
          {parseRefsFromLine(line.slice(2), onRefClick)}
        </li>,
      );
    } else {
      const orderedMatch = line.match(/^(\d+)\.\s(.*)$/);
      if (orderedMatch) {
        elements.push(
          <div key={i} className="ml-4 flex gap-1">
            <span className="flex-shrink-0">{orderedMatch[1]}.</span>
            <span>{parseRefsFromLine(orderedMatch[2], onRefClick)}</span>
          </div>,
        );
      } else if (line.trim() === '') {
        elements.push(<br key={i} />);
      } else {
        elements.push(<p key={i}>{parseRefsFromLine(line, onRefClick)}</p>);
      }
    }
    i++;
  }

  return elements;
}
