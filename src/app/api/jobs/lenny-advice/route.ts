import { NextRequest, NextResponse } from 'next/server';
import { CopilotClient } from '@github/copilot-sdk';
import * as path from 'path';
import { existsSync, readFileSync } from 'fs';
import { searchKnowledgeBase } from '@/lib/knowledge-search';
import type { JobResult, JobProfile } from '@/types';

function getModelFromConfig(): string {
  const configPath = path.join(process.cwd(), 'knowledge-coach-config.json');
  try {
    if (existsSync(configPath)) {
      const config = JSON.parse(readFileSync(configPath, 'utf-8'));
      if (config.model && typeof config.model === 'string') {
        return config.model;
      }
    }
  } catch {}
  return 'claude-sonnet-4.6';
}

function buildPerJobQuery(job: JobResult): string {
  const parts = [job.title];
  if (job.company_industry) parts.push(job.company_industry);
  parts.push('interview preparation career growth');
  return parts.join(' ');
}

function buildOverallQuery(jobs: JobResult[]): string {
  const titles = [...new Set(jobs.slice(0, 5).map((j) => j.title))];
  const industries = [...new Set(jobs.slice(0, 5).map((j) => j.company_industry).filter(Boolean))];
  return [...titles, ...industries, 'career strategy'].join(' ');
}

const PER_JOB_PROMPT = `You are a career advisor powered by Lenny Rachitsky's podcast and newsletter archive. Given a specific job posting and the candidate's profile, provide actionable advice grounded ONLY in the search results provided.

Structure your response in exactly 3 sections with these headers:

## 🎯 Interview Prep

Specific preparation advice for this role, drawn from Lenny's content. What frameworks, concepts, or examples from the knowledge base are relevant to this job?

## 🏢 Industry Insights

What Lenny's guests and articles say about this industry, company type, or role category. Connect the job to broader trends discussed in the archive.

## 📈 Growth Path

Career trajectory advice relevant to this position, based on patterns and advice from the knowledge base.

RULES:
- ONLY use information from the search results. NEVER fabricate advice from your own knowledge.
- Cite sources with the exact citation format provided in search results (e.g., [REF-01: "Title" | source:filename.md])
- Respond in the same language as the job posting (Chinese job → Chinese response, English job → English response)
- Be concise — aim for 300-400 words total
- If search results don't have relevant content for a section, say so honestly`;

const OVERALL_PROMPT = `You are a career strategist powered by Lenny Rachitsky's podcast and newsletter archive. Given a set of job matches and the candidate's profile, provide a high-level strategic analysis grounded ONLY in the search results provided.

Structure your response in exactly 3 sections with these headers:

## 📊 Market Insights

Patterns across the matched jobs and what Lenny's content says about this market segment. Connect the job landscape to trends discussed in the archive.

## 🎯 Your Positioning

How the candidate's profile aligns with these opportunities, using frameworks and advice from Lenny's content.

## 💡 Lenny's Advice

Strategic recommendations for the candidate's job search, drawn from the knowledge base. What would Lenny's guests advise?

RULES:
- ONLY use information from the search results. NEVER fabricate advice from your own knowledge.
- Cite sources with the exact citation format provided in search results (e.g., [REF-01: "Title" | source:filename.md])
- Respond in the same language as the majority of job postings
- Be concise — aim for 400-500 words total
- If search results don't have relevant content for a section, say so honestly`;

interface RequestBody {
  type: 'per_job' | 'overall';
  job?: JobResult;
  jobs?: JobResult[];
  profile: JobProfile;
  resumeText: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<RequestBody>;

    if (!body.type || !body.profile || !body.resumeText) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (body.type === 'per_job' && !body.job) {
      return NextResponse.json({ error: 'Missing job for per_job request' }, { status: 400 });
    }

    if (body.type === 'overall' && (!body.jobs || body.jobs.length === 0)) {
      return NextResponse.json({ error: 'Missing jobs for overall request' }, { status: 400 });
    }

    const query = body.type === 'per_job'
      ? buildPerJobQuery(body.job!)
      : buildOverallQuery(body.jobs!);
    const topK = body.type === 'per_job' ? 5 : 8;

    let searchResults: string;
    try {
      const { formatted } = await searchKnowledgeBase(query, topK);
      searchResults = formatted.textResultForLlm;
    } catch (searchError) {
      console.error('[lenny-advice] Knowledge base search failed:', searchError);
      return NextResponse.json(
        { error: 'Knowledge base unavailable. Please try again later.' },
        { status: 503 },
      );
    }

    const jobContext = body.type === 'per_job'
      ? [
          `Job Title: ${body.job!.title}`,
          `Company: ${body.job!.company}`,
          `Industry: ${body.job!.company_industry || 'N/A'}`,
          `Location: ${body.job!.location}`,
          `Salary: ${body.job!.salary}`,
          `Requirements: ${body.job!.experience_req} | ${body.job!.education_req}`,
          `Skills: ${body.job!.skills.join(', ')}`,
          body.job!.full_jd ? `JD: ${body.job!.full_jd.slice(0, 800)}` : '',
        ].filter(Boolean).join('\n')
      : body.jobs!.slice(0, 5).map((j, i) =>
          `Job ${i + 1}: ${j.title} at ${j.company} (${j.company_industry || 'N/A'}) — Score: ${j.score}`
        ).join('\n');

    const prompt = [
      'Knowledge Base Search Results:',
      searchResults,
      '',
      body.type === 'per_job' ? 'Job Details:' : 'Matched Jobs:',
      jobContext,
      '',
      'Candidate Profile:',
      `Roles: ${body.profile.target_roles.join(', ')}`,
      `Skills: ${body.profile.skills.join(', ')}`,
      `Experience: ${body.profile.experience_level}`,
      '',
      'Resume (excerpt):',
      body.resumeText.slice(0, 2000),
      '',
      'Based on the knowledge base search results above, provide your analysis.',
    ].join('\n');

    const systemPrompt = body.type === 'per_job' ? PER_JOB_PROMPT : OVERALL_PROMPT;

    const copilot = new CopilotClient({ useLoggedInUser: true });
    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        let ended = false;

        const safeClose = async (session?: { disconnect: () => Promise<void> }): Promise<void> => {
          if (ended) return;
          ended = true;
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          try {
            await session?.disconnect();
          } catch {}
          controller.close();
        };

        try {
          const session = await copilot.createSession({
            model: getModelFromConfig(),
            streaming: true,
            systemMessage: {
              mode: 'customize',
              sections: {
                identity: { action: 'replace', content: systemPrompt },
                tone: { action: 'remove' },
                code_change_rules: { action: 'remove' },
                guidelines: {
                  action: 'replace',
                  content:
                    'CITATION FORMAT (MANDATORY):\n' +
                    'Each search result includes a "⚠️ CITE AS:" line with the pre-formatted citation. ' +
                    'You MUST copy that exact citation string when referencing that result.\n' +
                    'The format is: [REF-XX: "Title" | source:FILENAME.md]\n' +
                    'The "| source:FILENAME.md" part is REQUIRED.',
                },
              },
            },
            onPermissionRequest: () => ({ kind: 'approved' as const }),
          });

          session.on('assistant.message_delta', (event) => {
            const delta = event.data.deltaContent;
            if (!delta || ended) return;
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ delta })}\n\n`));
          });

          session.on('session.idle', () => {
            void safeClose(session);
          });

          session.on('session.error', (event) => {
            const errMsg = event.data.message ?? 'Unknown error';
            if (!ended) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: errMsg })}\n\n`));
            }
            void safeClose(session);
          });

          await session.send({ prompt });
        } catch (error) {
          if (!ended) {
            const msg = error instanceof Error ? error.message : 'Unknown error';
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: msg })}\n\n`));
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
