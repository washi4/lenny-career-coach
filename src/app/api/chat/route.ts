import { NextRequest, NextResponse } from 'next/server';
import { CopilotClient, defineTool } from '@github/copilot-sdk';
import { z } from 'zod';
import * as path from 'path';
import { existsSync, readFileSync } from 'fs';
import {
  searchViaServer,
  searchViaSubprocess,
  formatSearchResults,
} from '@/lib/knowledge-search';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

type ChatRequestBody = {
  messages?: ChatMessage[];
  mode?: string;
  subtopic?: string;
};

let client: CopilotClient | null = null;

async function getClient(): Promise<CopilotClient> {
  if (!client) {
    client = new CopilotClient({
      useLoggedInUser: true,
    });
  }
  return client;
}

function getSkillDirectory(mode: string): string {
  const skillMap: Record<string, string> = {
    resume_review: 'resume-reviewer',
    career_advice: 'career-advisor',
    mock_interview: 'mock-interviewer',
  };

  const skillName = skillMap[mode] ?? 'career-advisor';
  return path.resolve(process.cwd(), '.agents', 'skills', skillName);
}

function loadSkillContent(skillDir: string): string {
  const skillFile = path.join(skillDir, 'SKILL.md');
  if (existsSync(skillFile)) {
    return readFileSync(skillFile, 'utf-8');
  }
  return '';
}

function getModelFromConfig(): string {
  const configPath = path.join(process.cwd(), 'knowledge-coach-config.json');
  try {
    if (existsSync(configPath)) {
      const config = JSON.parse(readFileSync(configPath, 'utf-8'));
      if (config.model && typeof config.model === 'string') {
        return config.model;
      }
    }
  } catch (e) {
    console.error('[config] Failed to read model from config:', e);
  }
  return 'claude-sonnet-4.6';
}

function buildPrompt(messages: ChatMessage[], subtopic?: string): string {
  const conversationContext = messages
    .slice(0, -1)
    .map((m) => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
    .join('\n\n');

  const lastMessage = messages[messages.length - 1];

  let prompt = '';
  if (conversationContext) {
    prompt += `<conversation_history>\n${conversationContext}\n</conversation_history>\n\n`;
  }

  if (subtopic) {
    prompt += `[Topic/Type: ${subtopic}]\n\n`;
  }

  prompt += lastMessage.content;
  return prompt;
}

function toErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : 'Unknown error';
}

const searchTool = defineTool('search_knowledge_base', {
  description:
    'Searches the Lenny Career Coach knowledge base for relevant podcast/newsletter/article excerpts. Use this when the user asks for factual guidance, examples, citations, or specific advice that should be grounded in source material.',
  parameters: z.object({
    query: z.string().describe('Search query for the knowledge base'),
    top_k: z.number().optional().default(5).describe('Maximum number of results to return'),
    content_type: z
      .enum(['podcast', 'newsletter', 'article'])
      .optional()
      .describe('Optional content type filter'),
  }),
  skipPermission: true,
  handler: async ({ query, top_k, content_type }) => {
    const t0 = Date.now();
    try {
      // Try FastAPI server first (fast path: ~200ms)
      const parsed = await searchViaServer(query, top_k ?? 5, content_type);
      const results = Array.isArray(parsed.results) ? parsed.results : [];
      console.log(`[search] server: ${results.length} results in ${Date.now() - t0}ms — "${query.slice(0, 60)}"`);
      return formatSearchResults(results, query);
    } catch (serverError) {
      // Fallback to subprocess (slow path: ~14s)
      console.warn(
        '[search_knowledge_base] Server unavailable, falling back to subprocess:',
        serverError instanceof Error ? serverError.message : serverError,
      );
      try {
        const parsed = await searchViaSubprocess(query, top_k ?? 5, content_type);
        const results = Array.isArray(parsed.results) ? parsed.results : [];
        return formatSearchResults(results, query);
      } catch (subprocessError) {
        const message =
          subprocessError instanceof Error ? subprocessError.message : 'Unknown error';
        console.error('[search_knowledge_base] Both paths failed:', message);
        return {
          textResultForLlm: `Search failed: ${message}. The knowledge base may not be accessible.`,
          resultType: 'failure' as const,
        };
      }
    }
  },
});

export async function POST(req: NextRequest) {
  try {
    const { messages, mode, subtopic }: ChatRequestBody = await req.json();

    if (!messages?.length || !mode) {
      return NextResponse.json({ error: 'Missing messages or mode' }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];
    if (!lastMessage?.content) {
      return NextResponse.json({ error: 'Latest message content is required' }, { status: 400 });
    }

    const requestStart = Date.now();
    console.log(`[chat] Request started — mode=${mode}`);

    const prompt = buildPrompt(messages, subtopic);

    const copilot = await getClient();
    const skillDir = getSkillDirectory(mode);
    const skillContent = loadSkillContent(skillDir);

    let session: Awaited<ReturnType<CopilotClient['createSession']>>;
    try {
      session = await copilot.createSession({
        model: getModelFromConfig(),
        streaming: true,
        systemMessage: {
          mode: 'customize',
          sections: {
            identity: { action: 'replace', content: skillContent },
            tone: { action: 'remove' },
            code_change_rules: { action: 'remove' },
            guidelines: {
              action: 'replace',
              content:
                'You MUST use the search_knowledge_base tool to answer questions. Do NOT use file system tools (bash, grep, glob, view, edit_file, etc.) — only use search_knowledge_base. NEVER fabricate sources.\n\n' +
                'CITATION FORMAT (MANDATORY — follow exactly):\n' +
                'Each search result includes a "⚠️ CITE AS:" line with the pre-formatted citation. You MUST copy that exact citation string when referencing that result.\n' +
                'The format is: [REF-XX: "Title" | source:FILENAME.md]\n' +
                'Example: If a search result shows ⚠️ CITE AS: [REF-01: "How to get promoted" | source:ada-chen-rekhi.md], you write exactly [REF-01: "How to get promoted" | source:ada-chen-rekhi.md] in your response.\n' +
                'The "| source:FILENAME.md" part is REQUIRED — without it, the user cannot click to view the original content. NEVER omit the source part.',
            },
          },
        },
        tools: [searchTool],
        onPermissionRequest: (request) => {
          if (request.kind === 'custom-tool') {
            return { kind: 'approved' as const };
          }
          // Deny all built-in tools (shell, file read/write, etc.)
          return { kind: 'denied-interactively-by-user' as const };
        },
      });
    } catch (error) {
      return NextResponse.json(
        { error: `Copilot session initialization failed: ${toErrorMessage(error)}` },
        { status: 502 },
      );
    }

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        let ended = false;

        const safeClose = async (): Promise<void> => {
          if (ended) return;
          ended = true;

          controller.enqueue(encoder.encode('data: [DONE]\n\n'));

          try {
            await session.disconnect();
          } catch {}

          controller.close();
        };

        try {
          session.on('assistant.message_delta', (event) => {
            const delta = event.data.deltaContent;
            if (!delta || ended) return;

            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ delta })}\n\n`));
          });

          session.on('session.idle', () => {
            console.log(`[chat] Session complete in ${Date.now() - requestStart}ms`);
            void safeClose();
          });

          session.on('session.error', (event) => {
            const errMsg = event.data.message ?? 'Unknown SDK error';
            if (!ended) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ error: errMsg })}\n\n`),
              );
            }
            void safeClose();
          });

          await session.send({ prompt });
        } catch (error) {
          if (!ended) {
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ error: toErrorMessage(error) })}\n\n`),
            );
          }
          await safeClose();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
