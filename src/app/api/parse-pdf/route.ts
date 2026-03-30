import { NextRequest, NextResponse } from 'next/server';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';
import { execSync } from 'child_process';
import { randomUUID } from 'crypto';

const MAX_FILE_SIZE = 10 * 1024 * 1024;

export async function POST(req: NextRequest) {
  let tempPath = '';

  try {
    const body = await req.json() as { filename?: string; data?: string; size?: number };

    if (!body.data || !body.filename) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    if (!body.filename.toLowerCase().endsWith('.pdf')) {
      return NextResponse.json({ error: 'Only PDF files are supported' }, { status: 400 });
    }

    if (body.size && body.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'File too large (max 10MB)' }, { status: 400 });
    }

    const buffer = Buffer.from(body.data, 'base64');
    const filename = body.filename;

    tempPath = join(tmpdir(), `resume-${randomUUID()}.pdf`);
    await writeFile(tempPath, buffer);

    let text: string;
    try {
      text = execSync(`lit parse "${tempPath}" --format text`, {
        encoding: 'utf-8',
        timeout: 30000,
      }).trim();
    } catch (litError) {
      console.error('[parse-pdf] lit parse failed:', litError instanceof Error ? litError.message : litError);
      try {
        text = execSync(`strings "${tempPath}"`, {
          encoding: 'utf-8',
          timeout: 10000,
        }).trim();
      } catch (fallbackError) {
        console.error('[parse-pdf] strings fallback failed:', fallbackError instanceof Error ? fallbackError.message : fallbackError);
        return NextResponse.json(
          { error: 'PDF text extraction failed. The file may be image-based or corrupted.' },
          { status: 422 },
        );
      }
    }

    if (!text) {
      return NextResponse.json({ error: 'Could not extract text from PDF' }, { status: 422 });
    }

    return NextResponse.json({ text, filename });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'PDF parsing failed';
    return NextResponse.json({ error: message }, { status: 500 });
  } finally {
    if (tempPath) {
      await unlink(tempPath).catch(() => {});
    }
  }
}
