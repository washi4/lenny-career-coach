import * as path from 'path';
import { execFile } from 'child_process';
import { promisify } from 'util';
import { existsSync } from 'fs';

const execFileAsync = promisify(execFile);

export type SearchResultItem = {
  type?: 'podcast' | 'newsletter' | 'article';
  title?: string;
  date?: string;
  url?: string;
  similarity?: number;
  text?: string;
  source_file?: string;
  source_path?: string;
  youtube_id?: string;
  guest?: string;
};

export type SearchResponse = {
  results?: SearchResultItem[];
};

export const SEARCH_SERVER_URL = process.env.SEARCH_SERVER_URL ?? 'http://127.0.0.1:8001';

export async function searchViaServer(
  query: string,
  top_k: number,
  content_type?: string,
): Promise<SearchResponse> {
  const body: Record<string, unknown> = { query, top_k };
  if (content_type) body.content_type = content_type;

  const res = await fetch(`${SEARCH_SERVER_URL}/search`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(30_000),
  });

  if (!res.ok) {
    throw new Error(`Search server returned ${res.status}: ${await res.text()}`);
  }

  return (await res.json()) as SearchResponse;
}

export async function searchViaSubprocess(
  query: string,
  top_k: number,
  content_type?: string,
): Promise<SearchResponse> {
  const projectRoot = process.cwd();
  const searchScript = path.join(projectRoot, 'scripts', 'search.py');
  const configFile = path.join(projectRoot, 'knowledge-coach-config.json');

  const args = [searchScript, query, '--top-k', String(top_k)];
  if (content_type) args.push('--type', content_type);
  if (existsSync(configFile)) args.push('--config', configFile);

  const { stdout, stderr } = await execFileAsync('python3', args, {
    timeout: 90000,
    maxBuffer: 1024 * 1024,
    env: { ...process.env },
    cwd: projectRoot,
  });

  if (stderr) console.error('[search_knowledge_base] subprocess stderr:', stderr);
  return JSON.parse(stdout) as SearchResponse;
}

export function formatSearchResults(results: SearchResultItem[], query: string) {
  if (results.length === 0) {
    return {
      textResultForLlm: `No results found for query: "${query}". Try rephrasing your search or using different keywords.`,
      resultType: 'success' as const,
    };
  }

  const formatted = results
    .map((result, index) => {
      const source =
        result.type === 'podcast'
          ? '🎙️ Podcast'
          : result.type === 'newsletter'
            ? '📰 Newsletter'
            : '📄 Article';
      const title = result.title ?? 'Untitled';
      const date = result.date ?? 'Unknown date';
      const similarity = typeof result.similarity === 'number' ? result.similarity : 0;
      const text = result.text ?? '';
      const sourceFile = result.source_file ?? '';
      const youtubeId = result.youtube_id ?? '';
      const guest = result.guest ?? '';

      const refNum = String(index + 1).padStart(2, '0');
      const citeAs = `[REF-${refNum}: "${title}" | source:${sourceFile}]`;

      let header = `[Result ${index + 1}] ${source}: "${title}"\nDate: ${date}\nSource File: ${sourceFile}`;
      if (youtubeId) header += `\nYouTube ID: ${youtubeId}`;
      if (guest) header += `\nGuest: ${guest}`;
      header += `\nRelevance: ${(similarity * 100).toFixed(1)}%`;
      header += `\n⚠️ CITE AS: ${citeAs}`;

      return `${header}\n\n${text}`;
    })
    .join('\n\n---\n\n');

  return {
    textResultForLlm: `Found ${results.length} relevant results for "${query}":\n\n${formatted}`,
    resultType: 'success' as const,
  };
}

export async function searchKnowledgeBase(
  query: string,
  top_k: number,
  content_type?: string,
): Promise<{ results: SearchResultItem[]; formatted: ReturnType<typeof formatSearchResults> }> {
  try {
    const parsed = await searchViaServer(query, top_k, content_type);
    const results = Array.isArray(parsed.results) ? parsed.results : [];
    return { results, formatted: formatSearchResults(results, query) };
  } catch (serverError) {
    console.warn(
      '[search_knowledge_base] Server unavailable, falling back to subprocess:',
      serverError instanceof Error ? serverError.message : serverError,
    );

    const parsed = await searchViaSubprocess(query, top_k, content_type);
    const results = Array.isArray(parsed.results) ? parsed.results : [];
    return { results, formatted: formatSearchResults(results, query) };
  }
}
