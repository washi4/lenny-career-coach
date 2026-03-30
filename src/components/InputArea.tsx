'use client';

import { useState, useRef, useCallback, type KeyboardEvent, type ChangeEvent } from 'react';
import type { TabMode } from '@/types';
import { Paperclip, ArrowUp } from 'lucide-react';
import { useLocale } from '@/lib/i18n';

interface InputAreaProps {
  onSend: (message: string) => void;
  onFileUpload: (file: File) => void;
  disabled: boolean;
  activeTab: TabMode;
}

export default function InputArea({ onSend, onFileUpload, disabled, activeTab }: InputAreaProps) {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useLocale();

  const handleSend = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  }, [input, disabled, onSend]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
      e.target.value = '';
    }
  };

  const placeholder = t(`input.placeholder.${activeTab}`);

  return (
    <div className="px-4 pb-4 pt-2">
      <div className="max-w-3xl mx-auto">
        <div className="bg-bg-secondary rounded-2xl border border-border flex items-end px-3 py-2 gap-2">
          <>
            <button
              type="button"
              onClick={handleFileClick}
              disabled={disabled}
              className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg text-text-secondary hover:text-accent hover:bg-accent-subtle transition-colors disabled:opacity-50 cursor-pointer"
              title="Upload PDF"
            >
              <Paperclip size={18} />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </>
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            rows={1}
            className="flex-1 bg-transparent border-none outline-none resize-none text-sm text-text-primary placeholder:text-text-muted leading-relaxed py-1 min-h-[28px] max-h-[120px]"
          />
          <button
            type="button"
            onClick={handleSend}
            disabled={!input.trim() || disabled}
            className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <ArrowUp size={16} />
          </button>
        </div>
        <p className="text-center text-text-muted text-xs mt-2">
          {t('input.footer')}
        </p>
      </div>
    </div>
  );
}
