import { NextRequest, NextResponse } from 'next/server';
import { CopilotClient } from '@github/copilot-sdk';
import * as path from 'path';
import { execFile } from 'child_process';
import { promisify } from 'util';
import { existsSync, readFileSync } from 'fs';
import { JOB_MATCH_CONFIG } from '@/lib/career-data';

const execFileAsync = promisify(execFile);

interface JobSearchRequest {
  resumeText: string;
  source?: 'boss' | 'google_jobs';
  profile: {
    target_roles: string[];
    skills: string[];
    experience_years: number;
    experience_level: string;
    education: string;
    preferred_cities: string[];
    salary_expectation: string;
    dealbreakers: string[];
  };
}

interface ProgressPayload {
  stage: string;
  message: string;
  percent: number;
}

interface RawJob {
  securityId?: string;
  security_id?: string;
  jobName?: string;
  title?: string;
  brandName?: string;
  company?: string;
  salaryDesc?: string;
  salary?: string;
  cityName?: string;
  city?: string;
  areaDistrict?: string;
  location?: string;
  jobExperience?: string;
  experience?: string;
  jobDegree?: string;
  degree?: string;
  skills?: string[];
  bossName?: string;
  bossTitle?: string;
  activeTimeDesc?: string;
  industryName?: string;
  brandStageName?: string;
  brandScaleName?: string;
  jobUrl?: string;
  [key: string]: unknown;
}

interface RawJobDetail {
  securityId?: string;
  security_id?: string;
  postDescription?: string;
  jobDescription?: string;
  description?: string;
  content?: string;
  [key: string]: unknown;
}

interface NormalizedJob {
  security_id: string;
  title: string;
  company: string;
  salary: string;
  location: string;
  experience_req: string;
  education_req: string;
  skills: string[];
  boss_name: string;
  boss_title: string;
  boss_active_time: string;
  company_industry: string;
  company_scale: string;
  job_url: string;
  full_jd: string;
  source?: 'boss' | 'google_jobs';
  via?: string;
  apply_options?: Array<{ title: string; link: string }>;
  schedule_type?: string;
  posted_at?: string;
}

interface SseContext {
  controller: ReadableStreamDefaultController<Uint8Array>;
  encoder: TextEncoder;
  ended: { value: boolean };
}

function emitSse(ctx: SseContext, payload: unknown): void {
  if (ctx.ended.value) return;
  try {
    ctx.controller.enqueue(ctx.encoder.encode(`data: ${JSON.stringify(payload)}\n\n`));
  } catch {
    ctx.ended.value = true;
  }
}

function emitProgress(ctx: SseContext, stage: string, message: string, percent: number): void {
  emitSse(ctx, { type: 'progress', stage, message, percent });
}

function toErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : 'Unknown error';
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

const MAX_OPENCLI_RETRIES = 4;
const IP_BAN_RE = /IP地址存在异常|IP.*异常行为|code=35/i;

async function runOpenCli(
  args: string[],
  timeoutMs: number,
  maxRetries: number = MAX_OPENCLI_RETRIES,
): Promise<{ ok: true; data: unknown } | { ok: false; error: string }> {
  let lastError = '';
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const { stdout, stderr } = await execFileAsync('opencli', args, {
        timeout: timeoutMs,
        maxBuffer: 2 * 1024 * 1024,
        env: { ...process.env },
        cwd: process.cwd(),
      });

      if (stderr?.trim()) {
        console.warn(`[opencli] stderr:`, stderr.slice(0, 200));
      }

      const trimmed = stdout.trim();
      if (!trimmed) {
        lastError = 'Empty output';
        if (attempt < maxRetries) {
          const delay = 1500 + attempt * 1000;
          console.warn(`[opencli] attempt ${attempt}/${maxRetries} empty output, retrying in ${delay}ms...`);
          await new Promise((r) => setTimeout(r, delay));
          continue;
        }
        return { ok: false, error: 'Empty output — possible expired session' };
      }

      return { ok: true, data: JSON.parse(trimmed) as unknown };
    } catch (error) {
      lastError = toErrorMessage(error);
      if (IP_BAN_RE.test(lastError)) {
        return { ok: false, error: lastError };
      }
      if (attempt < maxRetries) {
        const delay = 1500 + attempt * 1000;
        console.warn(`[opencli] attempt ${attempt}/${maxRetries} failed: ${lastError.slice(0, 100)}, retrying in ${delay}ms...`);
        await new Promise((r) => setTimeout(r, delay));
      }
    }
  }
  return { ok: false, error: lastError };
}

interface SearchResult {
  jobs: RawJob[];
  sessionExpired: boolean;
  ipBanned: boolean;
}

const SESSION_ERROR_RE = /登录|Cookie\s*已过期|环境存在异常|session|expired|unauthorized/i;

async function searchBossJobs(query: string, city: string, experience?: string, salary?: string, limit = 30): Promise<SearchResult> {
  const args = ['boss', 'search', query, '--city', city];
  if (experience) args.push('--experience', experience);
  if (salary) args.push('--salary', salary);
  args.push('--limit', String(limit), '-f', 'json');

  const result = await runOpenCli(args, 30_000);
  if (!result.ok) {
    console.warn(`[search] ${query}@${city} failed after retries: ${result.error}`);
    if (IP_BAN_RE.test(result.error)) {
      return { jobs: [], sessionExpired: false, ipBanned: true };
    }
    const expired = SESSION_ERROR_RE.test(result.error);
    return { jobs: [], sessionExpired: expired, ipBanned: false };
  }

  return parseSearchData(result.data);
}

function parseSearchData(data: unknown): SearchResult {
  if (Array.isArray(data)) return { jobs: data as RawJob[], sessionExpired: false, ipBanned: false };
  const obj = data as Record<string, unknown>;
  if (Array.isArray(obj.jobList)) return { jobs: obj.jobList as RawJob[], sessionExpired: false, ipBanned: false };
  if (Array.isArray(obj.data)) return { jobs: obj.data as RawJob[], sessionExpired: false, ipBanned: false };
  if (Array.isArray(obj.list)) return { jobs: obj.list as RawJob[], sessionExpired: false, ipBanned: false };
  return { jobs: [], sessionExpired: false, ipBanned: false };
}

async function fetchJobDetail(securityId: string): Promise<RawJobDetail | null> {
  const args = ['boss', 'detail', securityId, '-f', 'json'];
  const result = await runOpenCli(args, 30_000);
  if (!result.ok) return null;
  return result.data as RawJobDetail;
}

function normalizeJob(raw: RawJob): NormalizedJob | null {
  try {
    const sid = raw.securityId ?? raw.security_id ?? '';
    return {
      security_id: sid,
      title: raw.jobName ?? raw.title ?? '',
      company: raw.brandName ?? raw.company ?? '',
      salary: raw.salaryDesc ?? raw.salary ?? '',
      location: [raw.cityName ?? raw.city, raw.areaDistrict].filter(Boolean).join('·') || raw.location || '',
      experience_req: raw.jobExperience ?? raw.experience ?? '',
      education_req: raw.jobDegree ?? raw.degree ?? '',
      skills: Array.isArray(raw.skills) ? raw.skills : [],
      boss_name: raw.bossName ?? '',
      boss_title: raw.bossTitle ?? '',
      boss_active_time: raw.activeTimeDesc ?? '',
      company_industry: raw.industryName ?? '',
      company_scale: [raw.brandStageName, raw.brandScaleName].filter(Boolean).join(' · '),
      job_url: raw.jobUrl ?? (sid ? `https://www.zhipin.com/job_detail/${sid}.html` : ''),
      full_jd: '',
      source: 'boss',
    };
  } catch (e) {
    console.warn('[normalizeJob] skipped malformed job:', toErrorMessage(e));
    return null;
  }
}

interface RawGoogleApplyOption {
  title?: string;
  link?: string;
}

interface RawGoogleJobHighlight {
  title?: string;
  items?: string[];
}

interface RawGoogleDetectedExtensions {
  posted_at?: string;
  schedule_type?: string;
  salary?: string;
  qualifications?: string;
}

interface RawGoogleJob {
  title?: string;
  company_name?: string;
  location?: string;
  via?: string;
  description?: string;
  job_highlights?: RawGoogleJobHighlight[];
  apply_options?: RawGoogleApplyOption[];
  job_id?: string;
  share_link?: string;
  detected_extensions?: RawGoogleDetectedExtensions;
  [key: string]: unknown;
}

function extractGoogleSkillsFromHighlights(highlights: RawGoogleJobHighlight[] | undefined): string[] {
  if (!Array.isArray(highlights)) return [];
  const qualificationItems = highlights
    .filter((h) => (h.title ?? '').trim().toLowerCase() === 'qualifications')
    .flatMap((h) => (Array.isArray(h.items) ? h.items : []));

  const tokens = qualificationItems
    .flatMap((item) => item.split(/[\n,，;；、·•|/]/g))
    .map((token) => token.trim())
    .filter((token) => token.length >= 2 && token.length <= 48);

  return Array.from(new Set(tokens)).slice(0, 20);
}

function normalizeGoogleJob(raw: RawGoogleJob): NormalizedJob | null {
  try {
    const detected = raw.detected_extensions ?? {};
    const applyOptions = (Array.isArray(raw.apply_options) ? raw.apply_options : [])
      .map((option) => ({
        title: option.title ?? '',
        link: option.link ?? '',
      }))
      .filter((option) => option.link);
    const scheduleType = detected.schedule_type ?? '';
    return {
      security_id: raw.job_id ?? '',
      title: raw.title ?? '',
      company: raw.company_name ?? '',
      salary: detected.salary ?? '',
      location: raw.location ?? '',
      experience_req: scheduleType,
      education_req: '',
      skills: extractGoogleSkillsFromHighlights(raw.job_highlights),
      boss_name: '',
      boss_title: '',
      boss_active_time: '',
      company_industry: '',
      company_scale: '',
      job_url: applyOptions[0]?.link ?? raw.share_link ?? '',
      full_jd: raw.description ?? '',
      source: 'google_jobs',
      via: raw.via ?? '',
      apply_options: applyOptions,
      schedule_type: scheduleType,
      posted_at: detected.posted_at ?? '',
    };
  } catch (e) {
    console.warn('[normalizeGoogleJob] skipped malformed job:', toErrorMessage(e));
    return null;
  }
}

async function searchGoogleJobs(
  query: string,
  location: string,
): Promise<NormalizedJob[]> {
  const apiKey = process.env.SERPAPI_API_KEY;
  if (!apiKey) {
    throw new Error('SERPAPI_API_KEY not set');
  }

  const resolvedLocation = JOB_MATCH_CONFIG.serpapi_location_map[location] ?? location;

  const params = new URLSearchParams({
    engine: 'google_jobs',
    q: query,
    location: resolvedLocation,
    hl: 'en',
    gl: 'us',
    api_key: apiKey,
  });

  const resp = await fetch(`https://serpapi.com/search.json?${params.toString()}`);
  if (!resp.ok) {
    throw new Error(`SerpApi request failed (${resp.status} ${resp.statusText})`);
  }

  const data = (await resp.json()) as { jobs_results?: unknown };
  const jobs = Array.isArray(data.jobs_results) ? (data.jobs_results as RawGoogleJob[]) : [];
  return jobs.map(normalizeGoogleJob).filter((j): j is NormalizedJob => j !== null);
}

function deduplicateJobs(jobs: NormalizedJob[]): NormalizedJob[] {
  const seen = new Set<string>();
  let syntheticId = 0;
  return jobs.filter((job) => {
    if (!job.security_id) {
      job.security_id = `_synthetic_${syntheticId++}`;
    }
    if (seen.has(job.security_id)) return false;
    seen.add(job.security_id);
    return true;
  });
}

function buildSearchQueries(profile: JobSearchRequest['profile'], source: 'boss' | 'google_jobs' = 'boss'): Array<{ query: string; city: string }> {
  const roles = profile.target_roles.length > 0 ? profile.target_roles.slice(0, 3) : [''];
  const defaultCity = source === 'google_jobs' ? 'United States' : '上海';
  const cities = profile.preferred_cities.length > 0 ? profile.preferred_cities.slice(0, 3) : [defaultCity];

  const queries: Array<{ query: string; city: string }> = [];
  for (const role of roles) {
    for (const city of cities) {
      if (role) queries.push({ query: role, city });
    }
  }

  if (queries.length === 0 && profile.skills.length > 0) {
    const skill = profile.skills[0];
    for (const city of cities) {
      queries.push({ query: skill, city });
    }
  }

  return queries.slice(0, 6);
}

const SCORING_PROMPT = `You are a job matching scorer. Given a candidate's resume and a list of job postings with details, score each job 0-100 and provide analysis.

Return ONLY a JSON array (no markdown, no wrapping, no explanation). Each element:
{
  "security_id": "the_id",
  "score": 85,
  "match_reasons": ["reason1", "reason2"],
  "concerns": ["concern1"]
}

Scoring dimensions:
- 技能匹配 (30%): How many required skills match the candidate?
- 经验匹配 (20%): Does experience level and domain fit?
- 薪资匹配 (15%): Is salary within or above expectation?
- 职位级别 (15%): Does role level match career stage?
- 公司/行业 (10%): Does company industry/scale match preferences?
- JD质量 (10%): Is JD detailed? Is boss active? Red flags?

Rules:
- match_reasons: 2-3 concise Chinese bullet points
- concerns: 0-2 concise Chinese bullet points, only real issues
- If dealbreakers match (e.g. 加班严重, 外包), score below 30
- Return the array sorted by score descending
- Include ALL jobs in the output, even low-scoring ones`;

async function scoreJobsWithLlm(
  resumeText: string,
  profile: JobSearchRequest['profile'],
  jobs: NormalizedJob[],
): Promise<Array<{ security_id: string; score: number; match_reasons: string[]; concerns: string[] }>> {
  const jobSummaries = jobs.map((j, i) => [
    `--- Job ${i + 1} [${j.security_id}] ---`,
    `Title: ${j.title}`,
    `Company: ${j.company} (${j.company_industry}, ${j.company_scale})`,
    `Salary: ${j.salary}`,
    `Location: ${j.location}`,
    `Experience: ${j.experience_req} | Education: ${j.education_req}`,
    `Skills: ${j.skills.join(', ')}`,
    `Boss: ${j.boss_name} ${j.boss_title} (${j.boss_active_time})`,
    j.full_jd ? `JD: ${j.full_jd.slice(0, 500)}` : 'JD: (not available)',
  ].join('\n')).join('\n\n');

  const prompt = [
    'Score these jobs against the candidate profile.',
    '',
    'Resume (excerpt):',
    resumeText.slice(0, 3000),
    '',
    'Profile:',
    JSON.stringify(profile, null, 2),
    '',
    'Dealbreakers to check: ' + (profile.dealbreakers.length > 0 ? profile.dealbreakers.join(', ') : 'none'),
    '',
    'Jobs to score:',
    jobSummaries,
  ].join('\n');

  const copilot = new CopilotClient({ useLoggedInUser: true });
  const session = await copilot.createSession({
    model: getModelFromConfig(),
    streaming: false,
    systemMessage: {
      mode: 'customize',
      sections: {
        identity: { action: 'replace', content: SCORING_PROMPT },
        tone: { action: 'remove' },
        code_change_rules: { action: 'remove' },
        guidelines: { action: 'remove' },
      },
    },
    onPermissionRequest: () => ({ kind: 'approved' as const }),
  });

  const response = await session.sendAndWait({ prompt }, 120_000);
  await session.disconnect();

  const content = response?.data.content ?? '';
  const jsonMatch = content.match(/\[[\s\S]*\]/);
  if (!jsonMatch) {
    return [];
  }

  try {
    return JSON.parse(jsonMatch[0]) as Array<{ security_id: string; score: number; match_reasons: string[]; concerns: string[] }>;
  } catch {
    return [];
  }
}

async function runBossPipeline(ctx: SseContext, body: JobSearchRequest): Promise<void> {
  const { resumeText, profile } = body;

  emitProgress(ctx, 'checking', '检查环境连接...', 2);
  await runOpenCli(['doctor'], 10_000, 1);

  emitProgress(ctx, 'extracting', '分析简历与偏好...', 5);

  const searchQueries = buildSearchQueries(profile);
  if (searchQueries.length === 0) {
    emitSse(ctx, { type: 'error', message: 'No target roles or skills specified' });
    return;
  }

  emitProgress(ctx, 'searching', `搜索 Boss直聘 (${searchQueries.length} 个查询)...`, 15);

  // Run searches sequentially — the OpenCLI browser bridge daemon handles
  // concurrent requests poorly, causing elevated failure rates.
  const allRawJobs: RawJob[] = [];
  let failedCount = 0;
  let sessionExpired = false;
  let ipBanned = false;
  for (let qi = 0; qi < searchQueries.length; qi++) {
    const { query, city } = searchQueries[qi];
    try {
      const result = await searchBossJobs(query, city, profile.experience_level || undefined, profile.salary_expectation || undefined);
      allRawJobs.push(...result.jobs);
      if (result.sessionExpired) sessionExpired = true;
      if (result.ipBanned) ipBanned = true;
    } catch (err) {
      failedCount++;
      console.error('[jobs/search] query failed:', toErrorMessage(err));
    }
    if (ipBanned) break;
    const pct = 15 + Math.round(((qi + 1) / searchQueries.length) * 15);
    emitProgress(ctx, 'searching', `搜索 Boss直聘 (${qi + 1}/${searchQueries.length})...`, pct);
  }

  if (failedCount > 0) {
    console.warn(`[jobs/search] ${failedCount}/${searchQueries.length} queries failed`);
  }

  if (allRawJobs.length === 0) {
    if (ipBanned) {
      emitSse(ctx, { type: 'error', message: 'Boss直聘 检测到异常请求，暂时限制了当前 IP 的访问。请等待 10-30 分钟后重试，或切换网络（如手机热点）。' });
      return;
    }

    if (sessionExpired) {
      emitSse(ctx, { type: 'error', message: 'Boss直聘 登录已过期。请在 Chrome 中重新登录 zhipin.com，然后重试。' });
      return;
    }

    if (failedCount === searchQueries.length) {
      emitSse(ctx, { type: 'error', message: '所有搜索查询均失败。请检查网络连接和 OpenCLI 状态。' });
      return;
    }

    const probe = await searchBossJobs('产品经理', profile.preferred_cities[0] || '上海', undefined, undefined, 1);
    if (probe.sessionExpired) {
      emitSse(ctx, { type: 'error', message: 'Boss直聘 登录已过期。请在 Chrome 中重新登录 zhipin.com，然后重试。' });
      return;
    }
    if (probe.jobs.length === 0) {
      emitSse(ctx, { type: 'error', message: 'Boss直聘 连接异常，无法获取搜索结果。请稍后重试。' });
      return;
    }

    const queriesUsed = searchQueries.map((q) => q.query).join(', ');
    console.warn(`[jobs/search] no results for queries: ${queriesUsed}`);
    emitSse(ctx, {
      type: 'error',
      message: `未搜索到职位（搜索词：${queriesUsed}）。Boss直聘 是中文平台，建议使用中文搜索词（如"云架构师"而非"cloud architect"）。`,
    });
    return;
  }

  const normalizedJobs = allRawJobs.map(normalizeJob).filter((j): j is NormalizedJob => j !== null);
  const uniqueJobs = deduplicateJobs(normalizedJobs);
  const totalFetched = uniqueJobs.length;

  emitProgress(ctx, 'searching', `找到 ${totalFetched} 个不重复职位`, 30);

  const MAX_DETAIL_FETCH = 20;
  const jobsToFetch = uniqueJobs.slice(0, MAX_DETAIL_FETCH);
  const BATCH_SIZE = 5;

  emitProgress(ctx, 'fetching', `获取职位详情 (0/${jobsToFetch.length})...`, 35);

  for (let i = 0; i < jobsToFetch.length; i += BATCH_SIZE) {
    const batch = jobsToFetch.slice(i, i + BATCH_SIZE);
    const detailPromises = batch.map((job) => fetchJobDetail(job.security_id));
    const details = await Promise.all(detailPromises);

    for (let j = 0; j < batch.length; j++) {
      const detail = details[j];
      if (detail) {
        const jd = detail.postDescription ?? detail.jobDescription ?? detail.description ?? detail.content ?? '';
        batch[j].full_jd = typeof jd === 'string' ? jd : '';
      }
    }

    const completed = Math.min(i + BATCH_SIZE, jobsToFetch.length);
    const percent = 35 + Math.round((completed / jobsToFetch.length) * 30);
    emitProgress(ctx, 'fetching', `获取职位详情 (${completed}/${jobsToFetch.length})...`, percent);

    if (i + BATCH_SIZE < jobsToFetch.length) {
      await new Promise((r) => setTimeout(r, 1500));
    }
  }

  emitProgress(ctx, 'scoring', `AI 评分中 (${uniqueJobs.length} 个职位)...`, 70);

  const scores = await scoreJobsWithLlm(resumeText, profile, uniqueJobs);

  const scoreMap = new Map(scores.map((s) => [s.security_id, s]));
  const scoredJobs = uniqueJobs
    .map((job) => {
      const scoreData = scoreMap.get(job.security_id);
      return {
        rank: 0,
        score: scoreData?.score ?? 50,
        title: job.title,
        company: job.company,
        salary: job.salary,
        location: job.location,
        experience_req: job.experience_req,
        education_req: job.education_req,
        skills: job.skills,
        match_reasons: scoreData?.match_reasons ?? [],
        concerns: scoreData?.concerns ?? [],
        boss_name: job.boss_name,
        boss_title: job.boss_title,
        boss_active_time: job.boss_active_time,
        company_industry: job.company_industry,
        company_scale: job.company_scale,
        job_url: job.job_url,
        security_id: job.security_id,
        full_jd: job.full_jd,
        source: job.source,
        via: job.via,
        apply_options: job.apply_options,
        schedule_type: job.schedule_type,
        posted_at: job.posted_at,
      };
    })
    .sort((a, b) => b.score - a.score);

  scoredJobs.forEach((job, i) => { job.rank = i + 1; });

  const topResults = scoredJobs.slice(0, 15);

  emitProgress(ctx, 'done', '完成！', 100);

  emitSse(ctx, {
    type: 'result',
    jobs: topResults,
    stats: {
      total_fetched: totalFetched,
      after_filter: uniqueJobs.length,
      top_results: topResults.length,
    },
  });
}

async function runGoogleJobsPipeline(ctx: SseContext, body: JobSearchRequest): Promise<void> {
  const { resumeText, profile } = body;

  emitProgress(ctx, 'extracting', '分析简历与偏好...', 5);

  if (!process.env.SERPAPI_API_KEY) {
    emitSse(ctx, { type: 'error', message: 'SERPAPI_API_KEY not set' });
    return;
  }

  const searchQueries = buildSearchQueries(profile, 'google_jobs');
  if (searchQueries.length === 0) {
    emitSse(ctx, { type: 'error', message: 'No target roles or skills specified' });
    return;
  }

  emitProgress(ctx, 'searching', `搜索 Google Jobs (${searchQueries.length} 个查询)...`, 15);

  const allJobs: NormalizedJob[] = [];
  let failedCount = 0;
  for (let qi = 0; qi < searchQueries.length; qi++) {
    const { query, city } = searchQueries[qi];
    try {
      const jobs = await searchGoogleJobs(query, city);
      allJobs.push(...jobs);
    } catch (error) {
      failedCount++;
      const msg = toErrorMessage(error);
      console.warn(`[google-jobs] ${query}@${city} failed: ${msg}`);
    }
    const pct = 15 + Math.round(((qi + 1) / searchQueries.length) * 15);
    emitProgress(ctx, 'searching', `搜索 Google Jobs (${qi + 1}/${searchQueries.length})...`, pct);
  }

  if (failedCount > 0) {
    console.warn(`[google-jobs] ${failedCount}/${searchQueries.length} queries failed`);
  }

  if (allJobs.length === 0) {
    if (failedCount === searchQueries.length) {
      emitSse(ctx, { type: 'error', message: 'Google Jobs 搜索失败，请检查 SerpApi 配置和网络连接。' });
      return;
    }
    emitSse(ctx, { type: 'error', message: 'Google Jobs 未返回可用职位。请调整搜索词后重试。' });
    return;
  }

  const uniqueJobs = deduplicateJobs(allJobs);
  const totalFetched = uniqueJobs.length;

  emitProgress(ctx, 'searching', `找到 ${totalFetched} 个不重复职位`, 30);
  emitProgress(ctx, 'scoring', `AI 评分中 (${uniqueJobs.length} 个职位)...`, 70);

  const scores = await scoreJobsWithLlm(resumeText, profile, uniqueJobs);
  const scoreMap = new Map(scores.map((s) => [s.security_id, s]));

  const scoredJobs = uniqueJobs
    .map((job) => {
      const scoreData = scoreMap.get(job.security_id);
      return {
        rank: 0,
        score: scoreData?.score ?? 50,
        title: job.title,
        company: job.company,
        salary: job.salary,
        location: job.location,
        experience_req: job.experience_req,
        education_req: job.education_req,
        skills: job.skills,
        match_reasons: scoreData?.match_reasons ?? [],
        concerns: scoreData?.concerns ?? [],
        boss_name: job.boss_name,
        boss_title: job.boss_title,
        boss_active_time: job.boss_active_time,
        company_industry: job.company_industry,
        company_scale: job.company_scale,
        job_url: job.job_url,
        security_id: job.security_id,
        full_jd: job.full_jd,
        source: job.source,
        via: job.via,
        apply_options: job.apply_options,
        schedule_type: job.schedule_type,
        posted_at: job.posted_at,
      };
    })
    .sort((a, b) => b.score - a.score);

  scoredJobs.forEach((job, i) => { job.rank = i + 1; });
  const topResults = scoredJobs.slice(0, 15);

  emitProgress(ctx, 'done', '完成！', 100);
  emitSse(ctx, {
    type: 'result',
    jobs: topResults,
    stats: {
      total_fetched: totalFetched,
      after_filter: uniqueJobs.length,
      top_results: topResults.length,
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<JobSearchRequest>;

    if (!body.resumeText || !body.profile) {
      return NextResponse.json({ error: 'Missing resumeText or profile' }, { status: 400 });
    }

    const encoder = new TextEncoder();

    const stream = new ReadableStream<Uint8Array>({
      async start(controller) {
        const ctx: SseContext = {
          controller,
          encoder,
          ended: { value: false },
        };

        try {
          const source = body.source ?? 'boss';
          const payload: JobSearchRequest = {
            resumeText: body.resumeText!,
            profile: body.profile!,
            source,
          };

          if (source === 'google_jobs') {
            await runGoogleJobsPipeline(ctx, payload);
          } else {
            await runBossPipeline(ctx, payload);
          }
        } catch (error) {
          const msg = toErrorMessage(error);
          console.error('[jobs/search] pipeline error:', msg, error instanceof Error ? error.stack : '');
          emitSse(ctx, { type: 'error', message: msg });
        }

        if (!ctx.ended.value) {
          ctx.ended.value = true;
          try {
            controller.enqueue(encoder.encode('data: [DONE]\n\n'));
            controller.close();
          } catch {}
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
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }
}
