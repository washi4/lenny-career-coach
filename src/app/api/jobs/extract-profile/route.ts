import { NextRequest, NextResponse } from 'next/server';
import { CopilotClient } from '@github/copilot-sdk';
import * as path from 'path';
import { existsSync, readFileSync } from 'fs';

interface ExtractedProfile {
  target_roles: string[];
  skills: string[];
  experience_level: string;
  education: string;
  preferred_cities: string[];
  salary_expectation: string;
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
  } catch {
  }
  return 'claude-sonnet-4.6';
}

const EXTRACT_PROMPT_BOSS = `You are a resume parser. Extract structured profile information from the given resume text.

Return ONLY a JSON object with these fields (no markdown, no explanation, no wrapping):

{
  "target_roles": ["role1", "role2"],
  "skills": ["skill1", "skill2", "skill3"],
  "experience_level": "应届 | 1年以内 | 1-3年 | 3-5年 | 5-10年 | 10年以上",
  "education": "大专 | 本科 | 硕士 | 博士",
  "preferred_cities": ["城市1"],
  "salary_expectation": ""
}

Rules:
- target_roles: Infer 1-3 suitable job titles from the resume's experience and skills. Use Chinese job titles.
- skills: Extract top 5-8 technical or professional skills mentioned.
- experience_level: Calculate from work history dates. Use the Chinese format exactly as shown.
- education: Use the Chinese format exactly as shown. Pick the highest degree.
- preferred_cities: Extract from current location or stated preference. Use Chinese city names.
- salary_expectation: Leave empty string "" unless explicitly stated in the resume.
- If a field cannot be determined, use empty array [] or empty string "".
- Return ONLY the JSON object, nothing else.`;

const EXTRACT_PROMPT_GOOGLE = `You are a resume parser. Extract structured profile information from the given resume text.

Return ONLY a JSON object with these fields (no markdown, no explanation, no wrapping):

{
  "target_roles": ["role1", "role2"],
  "skills": ["skill1", "skill2", "skill3"],
  "experience_level": "Entry Level | 1-3 years | 3-5 years | 5-10 years | 10+ years",
  "education": "Associate | Bachelor | Master | PhD",
  "preferred_cities": ["city1"],
  "salary_expectation": ""
}

Rules:
- target_roles: Infer 1-3 suitable English job titles from the resume's experience and skills.
- skills: Extract top 5-8 technical or professional skills mentioned.
- experience_level: Calculate from work history dates. Use the English format exactly as shown.
- education: Use the English format exactly as shown. Pick the highest degree.
- preferred_cities: Extract from current location or stated preference. Use English city names (e.g. "San Francisco, CA", "New York, NY").
- salary_expectation: Leave empty string "" unless explicitly stated in the resume.
- If a field cannot be determined, use empty array [] or empty string "".
- Return ONLY the JSON object, nothing else.`;

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { resumeText?: string; source?: string };

    if (!body.resumeText || body.resumeText.trim().length < 50) {
      return NextResponse.json({ error: 'Resume text too short' }, { status: 400 });
    }

    const resumeSnippet = body.resumeText.slice(0, 4000);
    const isGoogleJobs = body.source === 'google_jobs';

    const copilot = new CopilotClient({ useLoggedInUser: true });

    const session = await copilot.createSession({
      model: getModelFromConfig(),
      streaming: false,
      systemMessage: {
        mode: 'customize',
        sections: {
          identity: { action: 'replace', content: isGoogleJobs ? EXTRACT_PROMPT_GOOGLE : EXTRACT_PROMPT_BOSS },
          tone: { action: 'remove' },
          code_change_rules: { action: 'remove' },
          guidelines: { action: 'remove' },
        },
      },
      onPermissionRequest: () => ({ kind: 'approved' as const }),
    });

    const response = await session.sendAndWait({
      prompt: `Resume text:\n\n${resumeSnippet}`,
    });

    await session.disconnect();

    const content = response?.data.content ?? '';

    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json({ error: 'Failed to extract profile' }, { status: 500 });
    }

    const parsed = JSON.parse(jsonMatch[0]) as Partial<ExtractedProfile>;

    const profile: ExtractedProfile = {
      target_roles: Array.isArray(parsed.target_roles) ? parsed.target_roles.filter((r) => typeof r === 'string') : [],
      skills: Array.isArray(parsed.skills) ? parsed.skills.filter((s) => typeof s === 'string') : [],
      experience_level: typeof parsed.experience_level === 'string' ? parsed.experience_level : '',
      education: typeof parsed.education === 'string' ? parsed.education : '',
      preferred_cities: Array.isArray(parsed.preferred_cities) ? parsed.preferred_cities.filter((c) => typeof c === 'string') : [],
      salary_expectation: typeof parsed.salary_expectation === 'string' ? parsed.salary_expectation : '',
    };

    return NextResponse.json(profile);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[extract-profile]', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
