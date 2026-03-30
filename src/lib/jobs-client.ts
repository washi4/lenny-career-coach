import type { JobProfile, JobResult, JobSearchState, JobSearchStats, JobSource } from '@/types';

export async function searchJobs(
  resumeText: string,
  profile: JobProfile,
  source: JobSource,
  onProgress: (state: Partial<JobSearchState>) => void,
  onResult: (jobs: JobResult[], stats: JobSearchStats) => void,
  onError: (error: string) => void,
  signal?: AbortSignal,
): Promise<void> {
  const response = await fetch('/api/jobs/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ resumeText, profile, source }),
    signal,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Request failed' }));
    onError(errorData.error || `HTTP ${response.status}`);
    return;
  }

  const reader = response.body?.getReader();
  if (!reader) {
    onError('No response stream');
    return;
  }

  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() ?? '';

    for (const line of lines) {
      if (!line.startsWith('data: ')) continue;
      const data = line.slice(6).trim();
      if (data === '[DONE]') return;

      try {
        const parsed = JSON.parse(data);
        if (parsed.type === 'progress') {
          onProgress({
            stage: parsed.stage,
            message: parsed.message,
            percent: parsed.percent,
          });
        } else if (parsed.type === 'result') {
          onResult(parsed.jobs ?? [], parsed.stats ?? { total_fetched: 0, after_filter: 0, top_results: 0 });
        } else if (parsed.type === 'error' || parsed.error) {
          onError(parsed.message || parsed.error || 'Unknown error');
        }
      } catch {
      }
    }
  }
}
