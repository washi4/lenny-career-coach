# Job Match Tab — Web App Integration Design

**Date**: 2026-03-30
**Status**: Approved
**Depends on**: job-matcher skill (`SKILL.md` committed at `8560b93`)

## Overview

Add a 4th tab ("Job Match / 职位匹配") to the Lenny Career Coach web app. Users upload a resume, confirm their profile and preferences, then the app searches Boss直聘 via OpenCLI and presents AI-scored job cards ranked by match quality.

## Architecture

### Request Flow

```
User uploads PDF → POST /api/parse-pdf → extracted text
User fills profile+prefs form → POST /api/jobs/search
  → LLM session (Copilot SDK) with job-matcher system prompt
  → LLM calls tools:
      - search_jobs(query, city, salary, ...) → runs `opencli boss search` on server
      - fetch_job_detail(security_id) → runs `opencli boss detail` on server
  → LLM scores, ranks, streams structured results
  → SSE stream with progress events + final results
  → Client renders progress bar → then job cards
```

### SSE Event Format

Unlike the other 3 tabs (which stream free-form markdown), this tab streams structured events:

```
data: {"type":"progress","stage":"extracting","message":"Extracting profile...","percent":10}
data: {"type":"progress","stage":"searching","message":"Searching Boss直聘...","percent":30}
data: {"type":"progress","stage":"fetching","message":"Fetching job details (12/22)...","percent":60}
data: {"type":"progress","stage":"scoring","message":"Scoring 22 jobs...","percent":85}
data: {"type":"result","jobs":[{...structured job data...}],"stats":{...}}
data: [DONE]
```

### New API Routes

- `POST /api/jobs/search` — Main pipeline (LLM + OpenCLI, SSE streaming)
- `GET /api/jobs/check` — Prerequisite check (runs `opencli doctor`, returns status)

### LLM Tools (defined in /api/jobs/search)

| Tool | Implementation | Purpose |
|------|---------------|---------|
| `search_jobs` | `execFile('opencli', ['boss', 'search', ...])` | Search Boss直聘 listings |
| `fetch_job_detail` | `execFile('opencli', ['boss', 'detail', ...])` | Get full JD for a specific job |

The LLM handles the full pipeline: profile extraction from resume text, search strategy (multiple queries), filtering, scoring, and ranking. System prompt is adapted from `.agents/skills/job-matcher/SKILL.md`.

## UI Flow — 4 States

### State 1: Prerequisite Check

Shown on first visit or when checks fail. Runs `GET /api/jobs/check` to verify:
- OpenCLI installed
- Browser Bridge connected
- Boss直聘 cookie valid

Displays checklist with pass/fail indicators. Links to setup guide.

### State 2: Wizard (Upload + Profile)

After prerequisites pass. Two sections in one form:

1. **Resume Upload**: Drag-and-drop or click to upload PDF. Reuses existing `/api/parse-pdf`. After upload, LLM extracts profile fields.
2. **Profile + Preferences**: Editable form with extracted data:
   - Target Roles (tag input)
   - Cities (multi-select from Boss直聘 city list)
   - Salary Range (dropdown: 3K以下 → 50K以上)
   - Experience Level (dropdown: 应届 → 10年以上)
   - Key Skills (tag input, pre-filled from resume)
   - Dealbreakers (tag input)

"Find Matching Jobs" button triggers `POST /api/jobs/search`.

### State 3: Searching (Progress)

Shows a progress bar with labeled stages:
- Extracting profile
- Searching Boss直聘 (multiple queries)
- Fetching job details
- Scoring & ranking

Each stage updates via SSE progress events. Cancel button aborts the request.

### State 4: Results (Job Cards)

Stats banner: "12 Jobs Matched — Searched 72 → Filtered 41 → Top 12"

Scrollable list of `JobCard` components, each showing:
- Score badge (0-100 with color coding)
- Job title + company name
- Salary range (annual)
- Location
- Top 3 matching skills as tags
- Match summary (1 line)
- Boss activity indicator

Clicking a card opens `JobDetailPanel` in the right-side panel (same slot as `ReferencePanel`), showing:
- Full JD
- Match analysis (pros/concerns per dimension)
- Boss info
- Direct link to Boss直聘 listing

"New Search" button returns to State 2 with previous profile pre-filled.

## File Plan

### New Files

```
src/app/api/jobs/
  search/route.ts          # POST — LLM + OpenCLI pipeline, SSE streaming
  check/route.ts           # GET — Prerequisite check

src/components/
  JobMatchWizard.tsx        # States 1-2: prerequisite check + upload + profile form
  JobSearchProgress.tsx     # State 3: progress bar + stage indicators
  JobResults.tsx            # State 4: job card list + stats banner
  JobCard.tsx               # Individual job card component
  JobDetailPanel.tsx        # Full job detail in right panel
```

### Modified Files

| File | Changes |
|------|---------|
| `src/types/index.ts` | Add `'job_match'` to `TabMode` union. Add `JobProfile`, `JobResult`, `JobSearchState` types. |
| `src/lib/career-data.ts` | Add `JOB_MATCH_CONFIG` — city list, salary options, experience levels for form dropdowns. |
| `src/lib/i18n.ts` | Add `tabs.job_match`, wizard labels, progress messages, result labels (en + zh). |
| `src/components/TabBar.tsx` | Add 4th tab with `Briefcase` icon from lucide-react. |
| `src/components/TopicChips.tsx` | Add `job_match` case — return null (wizard handles empty state). |
| `src/app/page.tsx` | When `activeTab === 'job_match'`, render wizard/progress/results instead of ChatArea+InputArea. Share ReferencePanel slot for JobDetailPanel. |
| `AGENTS.md` | Document new tab in project structure and architecture sections. |

### Unchanged Files (constraints)

- `src/lib/chat-client.ts` — DO NOT MODIFY (new SSE client for jobs will be separate)
- `/api/chat/route.ts` — No changes needed; job_match has its own API route

## Types

```typescript
// Added to src/types/index.ts

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

export type JobSearchStage = 'checking' | 'extracting' | 'searching' | 'fetching' | 'scoring' | 'done' | 'error';

export interface JobSearchState {
  stage: JobSearchStage;
  message: string;
  percent: number;
  jobs: JobResult[];
  stats?: JobSearchStats;
  error?: string;
}
```

## Design Constraints

- Dark professional theme with indigo accents — matches existing `globals.css` tokens
- Bilingual (EN/ZH) — all new strings go through i18n
- OpenCLI runs server-side — requires `opencli` in PATH + Chrome with Boss直聘 login on the server machine
- Boss直聘 cookies expire — prerequisite check catches this; user re-logs in Chrome
- Rate limiting — LLM controls fetch pacing via tool calls (2-3s between batch detail fetches)
- Platform extensible — `JobResult` type is platform-agnostic; `search_jobs` tool can be extended for other platforms later

## Out of Scope (V1)

- No LinkedIn, Indeed, or other platform integration
- No auto-apply or auto-greet (OpenCLI greet/send are recruiter-side only)
- No job alert / saved search persistence
- No user accounts or saved profiles
