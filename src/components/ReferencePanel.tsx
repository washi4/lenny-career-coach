'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import type { Reference } from '@/types';
import { useLocale } from '@/lib/i18n';

interface ReferencePanelProps {
  reference: Reference;
  onClose: () => void;
}

function MarkdownImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="max-w-full rounded-lg my-2"
      loading="lazy"
      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
    />
  );
}

const IMAGE_URL_RE = /\.(png|jpe?g|gif|webp|svg|avif)/i;
const LINKED_IMAGE_RE = /\[!\[([^\]]*)\]\(([^)]+)\)\]\(([^)]+)\)/;
const STANDALONE_IMAGE_RE = /!\[([^\]]*)\]\(([^)]+)\)/;

function renderMarkdownLine(line: string): (string | React.ReactElement)[] {
  const parts: (string | React.ReactElement)[] = [];
  let remaining = line;
  let keyIdx = 0;

  while (remaining.length > 0) {
    const linkedMatch = remaining.match(LINKED_IMAGE_RE);
    const standaloneMatch = remaining.match(STANDALONE_IMAGE_RE);

    const match = linkedMatch && (!standaloneMatch || (linkedMatch.index ?? Infinity) <= (standaloneMatch.index ?? Infinity))
      ? linkedMatch
      : standaloneMatch;

    if (!match || match.index === undefined) {
      parts.push(remaining);
      break;
    }

    if (match.index > 0) {
      parts.push(remaining.slice(0, match.index));
    }

    if (match === linkedMatch) {
      const imgSrc = IMAGE_URL_RE.test(match[3]) ? match[3] : match[2];
      parts.push(
        <a key={`img-${keyIdx++}`} href={match[3]} target="_blank" rel="noopener noreferrer">
          <MarkdownImage src={imgSrc} alt={match[1]} />
        </a>
      );
    } else {
      parts.push(<MarkdownImage key={`img-${keyIdx++}`} src={match[2]} alt={match[1]} />);
    }

    remaining = remaining.slice(match.index + match[0].length);
  }

  return parts;
}

function renderMarkdown(content: string) {
  const lines = content.split('\n');
  return lines.map((line, i) => {
    const hasImage = STANDALONE_IMAGE_RE.test(line);

    if (hasImage) {
      const parts = renderMarkdownLine(line);
      return <p key={i} className="mb-1">{parts}</p>;
    }

    const boldParsed = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    const italicParsed = boldParsed.replace(/(?<!\*)\*(?!\*)([^*]+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
    const linkParsed = italicParsed.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">$1</a>'
    );

    if (line.startsWith('### ')) {
      return <h3 key={i} className="font-semibold text-base mt-4 mb-1" dangerouslySetInnerHTML={{ __html: linkParsed.slice(4) }} />;
    }
    if (line.startsWith('## ')) {
      return <h2 key={i} className="font-bold text-lg mt-5 mb-2" dangerouslySetInnerHTML={{ __html: linkParsed.slice(3) }} />;
    }
    if (line.startsWith('# ')) {
      return <h1 key={i} className="font-bold text-xl mt-6 mb-3" dangerouslySetInnerHTML={{ __html: linkParsed.slice(2) }} />;
    }
    if (line.match(/^[-*]\s/)) {
      return <li key={i} className="ml-4 list-disc" dangerouslySetInnerHTML={{ __html: linkParsed.slice(2) }} />;
    }
    if (line.trim() === '') {
      return <br key={i} />;
    }
    return <p key={i} className="mb-1" dangerouslySetInnerHTML={{ __html: linkParsed }} />;
  });
}

export default function ReferencePanel({ reference, onClose }: ReferencePanelProps) {
  const { t } = useLocale();
  const [content, setContent] = useState<string | null>(reference.content ?? null);
  const [loading, setLoading] = useState(!reference.content);
  const [error, setError] = useState<string | null>(null);
  const [youtubeId, setYoutubeId] = useState<string | undefined>(reference.youtubeId);
  const [guest, setGuest] = useState<string | undefined>(reference.guest);
  const [type, setType] = useState<'podcast' | 'newsletter'>(reference.type);
  const [title, setTitle] = useState(reference.title);
  const [date, setDate] = useState(reference.date);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync derived state on prop change
    setYoutubeId(reference.youtubeId);
    setGuest(reference.guest);
    setType(reference.type);
    setTitle(reference.title);
    setDate(reference.date);

    if (reference.content) {
      setContent(reference.content);
      setLoading(false);
      return;
    }

    if (!reference.sourceFile) {
      setError('No source file available');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`/api/reference/${encodeURIComponent(reference.sourceFile)}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load reference (${res.status})`);
        return res.json();
      })
      .then((data) => {
        setContent(data.content ?? '');
        if (data.youtubeId) setYoutubeId(data.youtubeId);
        if (data.guest) setGuest(data.guest);
        if (data.type) setType(data.type);
        if (data.title) setTitle(data.title);
        if (data.date) setDate(data.date);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [reference]);

  return (
    <div className="flex flex-col h-full bg-bg-secondary border-l border-border">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-bg-tertiary">
        <div className="flex-1 min-w-0 mr-3">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent-muted text-accent">
              {type === 'podcast' ? `🎙️ ${t('reference.podcast')}` : `📰 ${t('reference.newsletter')}`}
            </span>
            {date && (
              <span className="text-xs text-text-muted">{date}</span>
            )}
          </div>
          <h3 className="text-sm font-semibold text-text-primary truncate" title={title}>
            {title}
          </h3>
          {guest && (
            <p className="text-xs text-text-secondary mt-0.5">{t('reference.guest')}: {guest}</p>
          )}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full hover:bg-bg-hover transition-colors text-text-secondary"
          aria-label={t('reference.close')}
        >
          <X size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* YouTube embed for podcasts */}
        {type === 'podcast' && youtubeId && (
          <div className="aspect-video w-full bg-black">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* Content area — only show for newsletters (podcast transcripts are too messy to display) */}
        {type !== 'podcast' && (
          <div className="px-4 py-4">
            {loading && (
              <div className="flex items-center justify-center py-12 text-text-muted text-sm">
                {t('reference.loading')}
              </div>
            )}
            {error && (
              <div className="text-center py-12 text-red-500 text-sm">
                {error}
              </div>
            )}
            {!loading && !error && content && (
              <div className="text-sm leading-relaxed text-text-primary">
                {renderMarkdown(content)}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
