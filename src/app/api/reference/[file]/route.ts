import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import * as path from 'path';

// Base directory for knowledge base source files (relative to project root)
const KB_BASE_DIR = path.join(process.cwd(), 'data');

function parseFrontmatter(content: string): { metadata: Record<string, string>; body: string } {
  const metadata: Record<string, string> = {};
  let body = content;

  if (content.startsWith('---')) {
    const parts = content.split('---', 3);
    if (parts.length >= 3) {
      const fmText = parts[1].trim();
      body = parts.slice(2).join('---').trim();
      for (const line of fmText.split('\n')) {
        const trimmed = line.trim();
        const colonIdx = trimmed.indexOf(':');
        if (colonIdx > 0) {
          const key = trimmed.slice(0, colonIdx).trim();
          const value = trimmed.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '');
          if (key && value) {
            metadata[key] = value;
          }
        }
      }
    }
  }

  return { metadata, body };
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params;

  // Security: only allow .md files, no path traversal
  if (!file.endsWith('.md') || file.includes('..') || file.includes('/')) {
    return NextResponse.json({ error: 'Invalid file name' }, { status: 400 });
  }

  // Search in both podcasts/ and newsletters/ directories
  const searchDirs = ['podcasts', 'newsletters'];
  let filePath: string | null = null;

  for (const dir of searchDirs) {
    const candidate = path.join(KB_BASE_DIR, dir, file);
    if (existsSync(candidate)) {
      filePath = candidate;
      break;
    }
  }

  if (!filePath) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  try {
    const raw = readFileSync(filePath, 'utf-8');
    const { metadata, body } = parseFrontmatter(raw);

    // Determine type from directory
    const type = filePath.includes('/podcasts/') ? 'podcast' : 'newsletter';

    return NextResponse.json({
      title: metadata.title ?? file.replace('.md', ''),
      type,
      date: metadata.date ?? '',
      guest: metadata.guest ?? '',
      youtubeId: metadata.youtube_id ?? '',
      content: body,
      sourceFile: file,
    });
  } catch {
    return NextResponse.json({ error: 'Failed to read file' }, { status: 500 });
  }
}
