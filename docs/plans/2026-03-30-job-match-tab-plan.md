# Job Match Tab — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a 4th "Job Match" tab to the web app with a step-by-step wizard, progress tracking, and custom job cards — backed by OpenCLI + LLM scoring.

**Architecture:** New `/api/jobs/` routes handle prerequisite checking and the LLM+OpenCLI pipeline via SSE. Frontend renders 4 states (prerequisite check → wizard → progress → results). The ReferencePanel slot is reused for job detail view. The existing chat pipeline is untouched.

**Tech Stack:** Next.js 16, React 19, Tailwind v4 (theme tokens from globals.css), Copilot SDK, OpenCLI (`opencli boss search/detail`), lucide-react icons.

**Design doc:** `docs/plans/2026-03-30-job-match-tab-design.md`

---

## Task 1: Types & Constants Foundation

**Files:**
- Modify: `src/types/index.ts`
- Modify: `src/lib/career-data.ts`

**Step 1: Add types to `src/types/index.ts`**

Add `'job_match'` to `TabMode` union type. Add these new interfaces after the existing `Reference` interface:

```typescript
export type TabMode = 'resume_review' | 'career_advice' | 'mock_interview' | 'job_match';

export interface JobProfile {
  target_roles: string[];
  skills: string[];
  experience_years: number;
  experience_level: string;
  education: string;
  preferred_cities: string[];
  salary_expectation: string;
  dealbreakers: string[];
}

export interface JobResult {
  rank: number;
  score: number;
  title: string;
  company: string;
  salary: string;
  annual_salary?: string;
  location: string;
  experience_req: string;
  education_req: string;
  skills: string[];
  match_reasons: string[];
  concerns: string[];
  boss_name?: string;
  boss_title?: string;
  boss_active_time?: string;
  company_industry?: string;
  company_scale?: string;
  job_url?: string;
  security_id: string;
  full_jd?: string;
}

export interface JobSearchStats {
  total_fetched: number;
  after_filter: number;
  top_results: number;
}

export type JobSearchStage = 'idle' | 'checking' | 'extracting' | 'searching' | 'fetching' | 'scoring' | 'done' | 'error';

export interface JobSearchState {
  stage: JobSearchStage;
  message: string;
  percent: number;
  jobs: JobResult[];
  stats?: JobSearchStats;
  error?: string;
}
```

**Step 2: Verify types compile**

Run: `npx tsc --noEmit`
Expected: No new errors from our changes (pre-existing errors may exist).

**Step 3: Add job match constants to `src/lib/career-data.ts`**

Add at the end of the file:

```typescript
export const JOB_MATCH_CONFIG = {
  cities: [
    '北京', '上海', '广州', '深圳', '杭州', '成都',
    '南京', '武汉', '西安', '苏州', '长沙', '重庆',
    '天津', '郑州', '青岛', '大连', '厦门', '珠海',
  ],
  salary_ranges: [
    '3K以下', '3-5K', '5-10K', '10-15K', '15-20K',
    '20-30K', '30-50K', '50K以上',
  ],
  experience_levels: [
    '应届', '1年以内', '1-3年', '3-5年', '5-10年', '10年以上',
  ],
  education_levels: [
    '大专', '本科', '硕士', '博士',
  ],
} as const;
```

**Step 4: Commit**

```bash
git add src/types/index.ts src/lib/career-data.ts
git commit -m "feat(job-match): add types and constants for job match tab"
```

---

## Task 2: i18n Strings

**Files:**
- Modify: `src/lib/i18n.ts`

**Step 1: Add English translations**

In the `en` object, add `tabs.job_match` and a new `job_match` section:

```typescript
// In en.tabs:
job_match: 'Job Match',

// New top-level section in en:
job_match: {
  // Prerequisite check
  setup_title: 'Setup Required',
  setup_desc: 'Job Match needs OpenCLI and Boss直聘 to search live job listings.',
  check_opencli: 'OpenCLI installed',
  check_bridge: 'Browser Bridge connected',
  check_boss: 'Boss直聘 logged in',
  check_button: 'Check Setup',
  setup_guide: 'Setup Guide',
  check_fail_boss: 'Open Chrome → zhipin.com → Log in',

  // Wizard
  step_upload: 'Upload Resume',
  step_profile: 'Profile & Preferences',
  upload_prompt: 'Drop your resume PDF here, or click to browse',
  upload_success: '{name} uploaded',
  field_target_roles: 'Target Roles',
  field_cities: 'Preferred Cities',
  field_salary: 'Salary Range',
  field_experience: 'Experience Level',
  field_skills: 'Key Skills',
  field_dealbreakers: 'Dealbreakers',
  field_add: 'Add',
  find_jobs: 'Find Matching Jobs',

  // Progress
  progress_title: 'Finding jobs for you...',
  stage_checking: 'Checking prerequisites...',
  stage_extracting: 'Extracting profile...',
  stage_searching: 'Searching Boss直聘...',
  stage_fetching: 'Fetching job details ({current}/{total})...',
  stage_scoring: 'Scoring & ranking...',
  cancel: 'Cancel',

  // Results
  results_title: '{count} Jobs Matched',
  results_stats: 'Searched {total} → Filtered {filtered} → Top {top}',
  new_search: 'New Search',
  score: 'Score',
  salary_annual: '/year',
  match_reasons: 'Match',
  concerns: 'Concerns',
  boss_active: 'Boss Active',
  view_on_boss: 'View on Boss直聘',
  no_results: 'No matching jobs found. Try adjusting your preferences.',

  // Detail panel
  detail_title: 'Job Details',
  detail_jd: 'Job Description',
  detail_analysis: 'Match Analysis',
  detail_company: 'Company Info',
  detail_boss: 'Recruiter',
  detail_open_link: 'Open on Boss直聘',
},
```

**Step 2: Add Chinese translations**

In the `zh` object, add matching keys:

```typescript
// In zh.tabs:
job_match: '职位匹配',

// New top-level section in zh:
job_match: {
  setup_title: '需要设置',
  setup_desc: '职位匹配需要 OpenCLI 和 Boss直聘 来搜索职位。',
  check_opencli: 'OpenCLI 已安装',
  check_bridge: 'Browser Bridge 已连接',
  check_boss: 'Boss直聘 已登录',
  check_button: '检查设置',
  setup_guide: '设置指南',
  check_fail_boss: '打开 Chrome → zhipin.com → 登录',

  step_upload: '上传简历',
  step_profile: '个人资料与偏好',
  upload_prompt: '拖入简历 PDF，或点击浏览',
  upload_success: '{name} 已上传',
  field_target_roles: '目标职位',
  field_cities: '意向城市',
  field_salary: '薪资范围',
  field_experience: '工作经验',
  field_skills: '核心技能',
  field_dealbreakers: '排除条件',
  field_add: '添加',
  find_jobs: '开始匹配',

  progress_title: '正在为你寻找职位...',
  stage_checking: '检查环境...',
  stage_extracting: '提取简历信息...',
  stage_searching: '搜索 Boss直聘...',
  stage_fetching: '获取职位详情 ({current}/{total})...',
  stage_scoring: '评分排序中...',
  cancel: '取消',

  results_title: '匹配到 {count} 个职位',
  results_stats: '搜索 {total} → 筛选 {filtered} → 推荐 {top}',
  new_search: '重新搜索',
  score: '匹配度',
  salary_annual: '/年',
  match_reasons: '匹配亮点',
  concerns: '注意事项',
  boss_active: 'Boss活跃',
  view_on_boss: '在 Boss直聘 查看',
  no_results: '未找到匹配职位，请调整筛选条件。',

  detail_title: '职位详情',
  detail_jd: '职位描述',
  detail_analysis: '匹配分析',
  detail_company: '公司信息',
  detail_boss: '招聘者',
  detail_open_link: '在 Boss直聘 打开',
},
```

**Step 3: Verify no i18n type errors**

Run: `npx tsc --noEmit`

**Step 4: Commit**

```bash
git add src/lib/i18n.ts
git commit -m "feat(job-match): add i18n strings for job match tab (en + zh)"
```

---

## Task 3: Backend — Prerequisite Check API

**Files:**
- Create: `src/app/api/jobs/check/route.ts`

**Step 1: Create the route**

```typescript
import { NextResponse } from 'next/server';
import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

interface CheckResult {
  opencli: boolean;
  bridge: boolean;
  boss: boolean;
  message?: string;
}

export async function GET(): Promise<NextResponse<CheckResult>> {
  const result: CheckResult = { opencli: false, bridge: false, boss: false };

  try {
    // Check if opencli is installed
    await execFileAsync('opencli', ['--version'], { timeout: 5000 });
    result.opencli = true;
  } catch {
    result.message = 'OpenCLI is not installed. Run: npm install -g @jackwener/opencli';
    return NextResponse.json(result);
  }

  try {
    // Run opencli doctor to check browser bridge + boss login
    const { stdout } = await execFileAsync('opencli', ['doctor'], {
      timeout: 15000,
      env: { ...process.env },
    });

    const output = stdout.toLowerCase();
    result.bridge = output.includes('browser bridge') && output.includes('ok');
    result.boss = !output.includes('cookie') || !output.includes('expired');

    // If doctor passes overall
    if (!output.includes('fail') && !output.includes('error')) {
      result.bridge = true;
      result.boss = true;
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    result.message = `OpenCLI doctor failed: ${msg}`;
  }

  return NextResponse.json(result);
}
```

**Step 2: Verify route compiles**

Run: `npx tsc --noEmit`

**Step 3: Commit**

```bash
git add src/app/api/jobs/check/route.ts
git commit -m "feat(job-match): add prerequisite check API route"
```

---

## Task 4: Backend — Job Search Pipeline API

**Files:**
- Create: `src/app/api/jobs/search/route.ts`

This is the main backend route. It creates a Copilot SDK session with the job-matcher system prompt, provides `search_jobs` and `fetch_job_detail` tools that call OpenCLI, and streams structured SSE events (progress + results).

**Step 1: Create the route**

Key implementation details:
- Read system prompt from `.agents/skills/job-matcher/SKILL.md`
- Define two tools: `search_jobs` (wraps `opencli boss search`) and `fetch_job_detail` (wraps `opencli boss detail`)
- The LLM prompt includes the resume text + profile preferences
- Parse LLM output for structured JSON blocks (the LLM outputs ````json ... ```` blocks with progress and results)
- Stream SSE events: `progress` events during pipeline, `result` event at the end with structured job data

The LLM's system prompt should instruct it to:
1. Output progress updates as `<!-- progress: {"stage":"searching","message":"...","percent":30} -->`
2. Output final results as `<!-- results: {"jobs":[...],"stats":{...}} -->`
3. These HTML comments are parsed by the route and converted to SSE events

Reference: `src/app/api/chat/route.ts` for the Copilot SDK session pattern.

**Step 2: Verify route compiles**

Run: `npx tsc --noEmit`

**Step 3: Commit**

```bash
git add src/app/api/jobs/search/route.ts
git commit -m "feat(job-match): add job search pipeline API with OpenCLI tools"
```

---

## Task 5: Frontend — TabBar + Types Integration

**Files:**
- Modify: `src/components/TabBar.tsx`
- Modify: `src/components/TopicChips.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Add 4th tab to TabBar**

In `TabBar.tsx`:
- Import `Briefcase` from `lucide-react`
- Add `job_match: Briefcase` to `TAB_ICONS`
- Add `{ key: 'job_match', labelKey: 'tabs.job_match' }` to the `tabs` array

**Step 2: Handle job_match in TopicChips**

In `TopicChips.tsx`, add before the final `return null`:

```typescript
if (activeTab === 'job_match') {
  return null; // JobMatchWizard handles the empty state
}
```

**Step 3: Update page.tsx for job_match tab**

In `page.tsx`:
- Add `job_match: []` to the `chatHistories` initial state
- Import `JobMatchTab` (we'll create this as a wrapper component)
- When `activeTab === 'job_match'`, render `<JobMatchTab>` instead of `ChatArea + TopicChips + InputArea`
- Share the ReferencePanel slot: job detail clicks set `selectedRef` with a special format

**Step 4: Verify it compiles and renders (tab appears, clicking it shows empty area)**

Run: `npm run build`

**Step 5: Commit**

```bash
git add src/components/TabBar.tsx src/components/TopicChips.tsx src/app/page.tsx
git commit -m "feat(job-match): add 4th tab to navigation and page routing"
```

---

## Task 6: Frontend — JobMatchWizard Component

**Files:**
- Create: `src/components/JobMatchWizard.tsx`

**Step 1: Create the wizard component**

This component handles States 1-2 (prerequisite check + upload + profile form).

Structure:
- `useState` for: `checkStatus` (null | checking | passed | failed), `resumeText` (string), `fileName` (string), `profile` (Partial<JobProfile>)
- On mount: call `GET /api/jobs/check` to verify prerequisites
- If check fails: show checklist with ✅/❌ indicators and "Check Setup" button
- If check passes: show upload area + profile form

Upload area:
- Drag-and-drop zone with `onDrop` handler
- Click to browse (hidden file input)
- On file select: call `POST /api/parse-pdf` to extract text
- After extraction: pre-populate profile fields (simple regex extraction for skills, roles — NOT LLM extraction at this stage; LLM does the real extraction during search)

Profile form:
- Tag inputs for: target_roles, skills, dealbreakers (type + Enter to add, click X to remove)
- Multi-select for cities (show checkboxes from `JOB_MATCH_CONFIG.cities`)
- Dropdowns for salary_expectation, experience_level
- "Find Matching Jobs" button calls `onSearch(resumeText, profile)`

All labels use `t('job_match.field_xxx')` for i18n.
Style: uses existing theme tokens (`bg-bg-secondary`, `border-border`, `text-accent`, etc.)

**Step 2: Verify it renders**

Run: `npm run dev`, navigate to Job Match tab, verify wizard appears.

**Step 3: Commit**

```bash
git add src/components/JobMatchWizard.tsx
git commit -m "feat(job-match): add wizard component with prerequisite check and profile form"
```

---

## Task 7: Frontend — JobSearchProgress Component

**Files:**
- Create: `src/components/JobSearchProgress.tsx`

**Step 1: Create the progress component**

This component handles State 3 (searching pipeline in progress).

Props: `state: JobSearchState`, `onCancel: () => void`

Structure:
- Progress bar (percentage-based, animated with `transition-all`)
- Stage list showing completed (✅), active (🔄 spinner), and pending (○) stages
- Cancel button

Stages (in order): checking → extracting → searching → fetching → scoring → done

Style:
- Progress bar: `bg-accent` fill on `bg-bg-tertiary` track
- Spinner: CSS animation for active stage
- Green checkmark for completed stages

**Step 2: Commit**

```bash
git add src/components/JobSearchProgress.tsx
git commit -m "feat(job-match): add search progress component with stage indicators"
```

---

## Task 8: Frontend — JobCard + JobResults Components

**Files:**
- Create: `src/components/JobCard.tsx`
- Create: `src/components/JobResults.tsx`

**Step 1: Create JobCard component**

Props: `job: JobResult`, `onClick: (job: JobResult) => void`, `rank: number`

Layout:
```
┌─────────────────────────────────────┐
│ 🥇 92                               │ ← Score badge (color: green >80, yellow 60-80, gray <60)
│ 公有云交付架构师 — 腾讯              │ ← Title + company
│ 💰 67-125万/年  📍上海               │ ← Salary + location
│ K8s · Terraform · 多云架构           │ ← Top 3 skills as tags
│ ✅ 技能完全匹配                      │ ← First match reason
│ 🟢 刚刚活跃                          │ ← Boss activity (green/yellow/gray dot)
└─────────────────────────────────────┘
```

Score badge colors:
- 80-100: `bg-green-500/20 text-green-400`
- 60-79: `bg-yellow-500/20 text-yellow-400`
- 0-59: `bg-gray-500/20 text-gray-400`

Rank icons: 🥇 🥈 🥉 for top 3, then number for rest.

**Step 2: Create JobResults component**

Props: `jobs: JobResult[]`, `stats: JobSearchStats`, `onJobClick: (job: JobResult) => void`, `onNewSearch: () => void`

Layout:
- Stats banner at top
- Scrollable list of `JobCard` components
- "New Search" button

**Step 3: Commit**

```bash
git add src/components/JobCard.tsx src/components/JobResults.tsx
git commit -m "feat(job-match): add job card and results list components"
```

---

## Task 9: Frontend — JobDetailPanel Component

**Files:**
- Create: `src/components/JobDetailPanel.tsx`

**Step 1: Create the detail panel**

This component replaces `ReferencePanel` when a job card is clicked. It shows full job details.

Props: `job: JobResult`, `onClose: () => void`

Sections:
1. **Header**: Job title, company, score badge, close button
2. **Key Info**: Salary, location, experience, education (in a grid)
3. **Match Analysis**: Pros (green ✅ list) and Concerns (yellow ⚠️ list)
4. **Job Description**: Full JD text (rendered as markdown/plain text)
5. **Recruiter**: Boss name, title, activity status
6. **Company**: Industry, scale
7. **Action**: "Open on Boss直聘" button (opens job_url in new tab)

Style: matches `ReferencePanel` styling (same bg, padding, close button pattern).

**Step 2: Commit**

```bash
git add src/components/JobDetailPanel.tsx
git commit -m "feat(job-match): add job detail panel for right-side view"
```

---

## Task 10: Frontend — SSE Client for Jobs

**Files:**
- Create: `src/lib/jobs-client.ts`

**Step 1: Create the SSE client**

This is a NEW file (we do NOT modify `chat-client.ts`). It handles the SSE stream from `POST /api/jobs/search`.

```typescript
export async function searchJobs(
  resumeText: string,
  profile: JobProfile,
  onProgress: (state: Partial<JobSearchState>) => void,
  onResult: (jobs: JobResult[], stats: JobSearchStats) => void,
  onError: (error: string) => void,
  signal?: AbortSignal,
): Promise<void> {
  // POST to /api/jobs/search
  // Parse SSE events
  // Route to appropriate callback based on event type
}
```

Parse logic:
- `data: {"type":"progress",...}` → call `onProgress`
- `data: {"type":"result",...}` → call `onResult`
- `data: {"error":"..."}` → call `onError`
- `data: [DONE]` → resolve

**Step 2: Commit**

```bash
git add src/lib/jobs-client.ts
git commit -m "feat(job-match): add SSE client for job search pipeline"
```

---

## Task 11: Frontend — Wire Everything Together

**Files:**
- Create: `src/components/JobMatchTab.tsx` (wrapper component managing all 4 states)
- Modify: `src/app/page.tsx` (import and render JobMatchTab)

**Step 1: Create JobMatchTab component**

This is the top-level component for the job_match tab. It manages state transitions between the 4 states:

```typescript
type JobMatchView = 'wizard' | 'progress' | 'results';

export default function JobMatchTab({
  onJobSelect,
}: {
  onJobSelect: (job: JobResult | null) => void;
}) {
  const [view, setView] = useState<JobMatchView>('wizard');
  const [searchState, setSearchState] = useState<JobSearchState>({ ... });
  const [profile, setProfile] = useState<Partial<JobProfile>>({});
  const abortRef = useRef<AbortController | null>(null);

  const handleSearch = async (resumeText: string, profile: JobProfile) => {
    setView('progress');
    // Call searchJobs() from jobs-client.ts
    // Update searchState via callbacks
    // On result: setView('results')
  };

  const handleCancel = () => { ... };
  const handleNewSearch = () => setView('wizard');
  const handleJobClick = (job: JobResult) => onJobSelect(job);

  if (view === 'wizard') return <JobMatchWizard onSearch={handleSearch} />;
  if (view === 'progress') return <JobSearchProgress state={searchState} onCancel={handleCancel} />;
  return <JobResults jobs={searchState.jobs} stats={searchState.stats} onJobClick={handleJobClick} onNewSearch={handleNewSearch} />;
}
```

**Step 2: Update page.tsx**

When `activeTab === 'job_match'`:
- Render `<JobMatchTab onJobSelect={...} />` instead of ChatArea+TopicChips+InputArea
- When a job is selected, show `<JobDetailPanel>` in the right panel (instead of `<ReferencePanel>`)
- Add state: `selectedJob: JobResult | null`

**Step 3: Full integration test**

Run: `npm run dev`
- Verify tab appears and switches correctly
- Verify wizard renders with prerequisite check
- Verify upload works (PDF → extracted text)
- Verify profile form populates
- Verify "Find Jobs" triggers pipeline (SSE streaming)
- Verify job cards render
- Verify clicking card opens detail panel

**Step 4: Build check**

Run: `npm run build`
Expected: Build succeeds

Run: `npm run lint`
Expected: No new errors

**Step 5: Commit**

```bash
git add src/components/JobMatchTab.tsx src/app/page.tsx
git commit -m "feat(job-match): wire up all components and integrate into main page"
```

---

## Task 12: Documentation Update

**Files:**
- Modify: `AGENTS.md`
- Modify: `README.md`

**Step 1: Update AGENTS.md**

- Add `job_match` to the TabMode and project structure descriptions
- Document new API routes (`/api/jobs/search`, `/api/jobs/check`)
- Document new components
- Add OpenCLI dependency note

**Step 2: Update README.md**

- Add "Job Match" to the features list
- Add OpenCLI as a prerequisite (optional — only needed for Job Match tab)
- Add setup instructions for OpenCLI + Browser Bridge

**Step 3: Commit**

```bash
git add AGENTS.md README.md
git commit -m "docs: add job match tab documentation"
```

---

## Task Dependency Graph

```
Task 1 (Types) ──┬── Task 2 (i18n) ──┬── Task 5 (TabBar+Page) ───┐
                  │                    │                            │
                  ├── Task 3 (Check API)                           │
                  │                                                │
                  ├── Task 4 (Search API) ── Task 10 (SSE Client) ─┤
                  │                                                │
                  ├── Task 6 (Wizard) ─────────────────────────────┤
                  │                                                │
                  ├── Task 7 (Progress) ───────────────────────────┤
                  │                                                │
                  ├── Task 8 (Cards+Results) ──────────────────────┤
                  │                                                │
                  └── Task 9 (DetailPanel) ────────────────────────┤
                                                                   │
                                                    Task 11 (Wire) ┤
                                                                   │
                                                    Task 12 (Docs) ┘
```

**Parallelizable after Task 1:** Tasks 2-9 are mostly independent and can be parallelized.
**Sequential:** Task 10 depends on Task 4. Task 11 depends on all of 2-10. Task 12 depends on Task 11.

---

## Estimated Effort

| Task | Complexity | Est. Time |
|------|-----------|-----------|
| 1. Types & Constants | Low | 5 min |
| 2. i18n Strings | Low | 10 min |
| 3. Check API | Low | 10 min |
| 4. Search API | High | 30 min |
| 5. TabBar + Page | Low | 10 min |
| 6. Wizard | High | 30 min |
| 7. Progress | Medium | 15 min |
| 8. Cards + Results | Medium | 20 min |
| 9. Detail Panel | Medium | 15 min |
| 10. SSE Client | Medium | 15 min |
| 11. Wire Together | High | 25 min |
| 12. Docs | Low | 10 min |
| **Total** | | **~3 hours** |
