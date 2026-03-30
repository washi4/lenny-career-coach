import type { Message } from '@/types';

export async function sendChatMessage(
  messages: Message[],
  mode: string,
  subtopic?: string,
  onDelta?: (delta: string) => void,
  signal?: AbortSignal,
): Promise<string> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, mode, subtopic }),
    signal,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `Chat request failed: ${response.status}`);
  }

  const reader = response.body?.getReader();
  if (!reader) throw new Error('No response body');

  const decoder = new TextDecoder();
  let fullContent = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value, { stream: true });
    const lines = chunk.split('\n');

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const data = line.slice(6);
        if (data === '[DONE]') break;
        try {
          const parsed = JSON.parse(data);
          if (parsed.delta) {
            fullContent += parsed.delta;
            onDelta?.(fullContent);
          }
        } catch {
          /* intentionally empty — malformed SSE data is non-fatal */
        }
      }
    }
  }

  return fullContent;
}

export async function uploadPdf(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const base64 = btoa(
    new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), ''),
  );

  const response = await fetch('/api/parse-pdf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      filename: file.name,
      data: base64,
      size: file.size,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `PDF upload failed: ${response.status}`);
  }

  const result = await response.json();
  return result.text;
}
