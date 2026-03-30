<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — Lenny Career Coach

## Project Overview

A RAG-powered career coaching web app built on **Lenny Rachitsky's** content (314 podcasts + 349 newsletters). Three coaching modes — resume review, career advice, mock interview — plus an experimental Job Match tab. All grounded in Lenny's knowledge base, not generic AI advice.

**Stack**: Next.js 16 + React 19 + Tailwind v4 + `@github/copilot-sdk` + ChromaDB + Python

## Quick Start

```bash
npm install
npm run dev          # http://localhost:3000
```

### Prerequisites

- Node.js 18+, Python 3.8+
- `gh` CLI authenticated (`gh auth login`) — the Copilot SDK uses `gh` OAuth tokens, NOT PATs
- Python packages: `pip install -r requirements.txt`
- ChromaDB index built (see "Vector DB" section below)

## Build & Run

```bash
npm run dev             # Dev server (port 3000)
npm run build           # Production build
npm run lint            # ESLint
npm run search-server   # FastAPI search server (port 8001)
```

## Architecture

### Core Principle

The LLM is a **conduit** for Lenny's data. All analysis, dimensions, frameworks, and advice MUST be derived from `search_knowledge_base` tool results. The model must NOT invent advice from its own training data.

### Request Flow

```
User message → POST /api/chat
  → Load SKILL.md for active tab (resume-reviewer | career-advisor | mock-interviewer)
  → CopilotClient.createSession() with skill as systemMessage
  → Model calls search_knowledge_base tool → FastAPI server (port 8001) or subprocess fallback → ChromaDB query
  → Model generates response with [REF-XX] inline citations
  → SSE stream back to client
  → Client renders markdown + clickable REF links
  → Click REF → ReferencePanel opens (YouTube embed for podcasts, markdown for newsletters)

Job Match tab → POST /api/jobs/search
  → Load job-matcher SKILL.md as systemMessage
  → CopilotClient session with search_jobs + fetch_job_detail tools
  → Tools call OpenCLI (opencli boss search/detail)
  → LLM scores and ranks results
  → SSE stream progress + results back to client
  → Client renders wizard → progress → results → detail panel
```

### Config: `knowledge-coach-config.json`

```json
{
  "name": "Lenny Career Coach",
  "model": "claude-sonnet-4.6",       // LLM model — hot-reloaded per request
  "knowledge_base_dir": "./data",
  "chroma_dir": "./data/.chroma",
  "embedding_model": "all-MiniLM-L6-v2",
  "top_k": 5
}
```

To switch models, edit `model` — takes effect on next chat request, no restart needed.

### Authentication

`@github/copilot-sdk` uses `useLoggedInUser: true` which reads OAuth tokens from `gh` CLI. Personal Access Tokens (PATs) are NOT supported.

## Project Structure

```
lenny-career-coach/
├── .agents/skills/
│   ├── resume-reviewer/SKILL.md    # Resume review coaching skill
│   ├── career-advisor/SKILL.md     # Career advice coaching skill
│   ├── mock-interviewer/SKILL.md   # Mock interview coaching skill
│   ├── job-matcher/SKILL.md        # Job match scoring skill (OpenCLI + Boss直聘)
│   └── index-builder/SKILL.md      # ChromaDB index management skill
├── data/
│   ├── podcasts/                   # 314 podcast transcripts (.md)
│   ├── newsletters/                # 349 newsletter articles (.md)
│   └── .chroma/                    # ChromaDB storage (gitignored, 609MB)
├── scripts/
│   ├── build_index.py              # Build/rebuild ChromaDB index
│   ├── search_server.py            # FastAPI persistent search server (port 8001)
│   ├── search.py                   # Query ChromaDB (CLI + subprocess fallback)
│   └── config.py                   # Shared config loader
├── src/
│   ├── app/
│   │   ├── page.tsx                # Main page — 4 tabs, split-panel layout
│   │   ├── globals.css             # Dark professional theme, Tailwind v4 tokens
│   │   ├── layout.tsx
│   │   └── api/
│   │       ├── chat/route.ts       # CopilotClient + search tool + SSE streaming
│   │       ├── parse-pdf/route.ts  # PDF parsing (liteparse + strings fallback)
│   │       ├── reference/[file]/route.ts  # Serve source files from data/
│   │       └── jobs/
│   │           ├── check/route.ts  # Prerequisite check (OpenCLI + Boss直聘)
│   │           └── search/route.ts # Job search pipeline (OpenCLI + LLM + SSE)
│   ├── components/
│   │   ├── ChatArea.tsx            # Message list + scroll management
│   │   ├── ChatMessage.tsx         # Markdown rendering + REF links + suggestion buttons
│   │   ├── ReferencePanel.tsx      # Right panel: YouTube embed / newsletter content / inline images
│   │   ├── InputArea.tsx           # Text input + PDF upload (all tabs)
│   │   ├── TopicChips.tsx          # Empty-state topic suggestions
│   │   ├── TabBar.tsx              # 4-tab navigation
│   │   ├── Header.tsx              # App header + language switcher
│   │   ├── JobMatchTab.tsx         # Job match tab wrapper (wizard/progress/results states)
│   │   ├── JobMatchWizard.tsx      # Prerequisite check + PDF upload + profile form
│   │   ├── JobSearchProgress.tsx   # Search progress with stage indicators
│   │   ├── JobCard.tsx             # Individual job result card
│   │   ├── JobResults.tsx          # Job results list with stats banner
│   │   └── JobDetailPanel.tsx      # Full job detail in right panel
│   ├── lib/
│   │   ├── i18n.ts                 # Lightweight i18n (EN/ZH) with React context
│   │   ├── career-data.ts          # Tab config, topic definitions
│   │   ├── chat-client.ts          # SSE client — DO NOT MODIFY
│   │   └── jobs-client.ts          # SSE client for job search pipeline
│   └── types/index.ts              # TabMode, Message, Reference, ChatState, JobProfile, JobResult
└── knowledge-coach-config.json     # App + vector DB config
```

## Key Technical Details

### REF Citation Format

Model outputs: `[REF-01: "Article Title" | source:filename.md]`

`ChatMessage.tsx` parses these into clickable `<button>` elements via `REF_PATTERN` regex. Clicking opens `ReferencePanel` with the source content.

### Suggestion Buttons

Model outputs `<!-- suggestions: ["Option 1", "Option 2"] -->` at end of response. Parsed by `extractSuggestions()` in `ChatMessage.tsx`, rendered as clickable pill buttons on the last assistant message.

### PDF Upload

All 3 tabs support PDF upload. `InputArea.tsx` → `POST /api/parse-pdf` → extracted text sent in chat history. UI shows filename only, not content.

### Markdown Rendering in Chat

`ChatMessage.tsx` `renderContent()` handles: headings, bold, ordered/unordered lists, tables with clickable REF links, empty lines.

### `chat-client.ts` — DO NOT MODIFY

SSE streaming format is locked. Any changes break the streaming pipeline.

### ReferencePanel

- Podcasts: YouTube embed (no transcript displayed below)
- Newsletters: Rendered markdown content
- Source files fetched from `/api/reference/[file]`

## Vector DB

### Data

- 45,463 chunks from 663 source files
- Collection: `lenny_career_coach`
- Embeddings: `all-MiniLM-L6-v2`
- Metadata per chunk: `source_file`, `title`, `date`, `type`, `youtube_id`, `guest`

### Rebuild Index

```bash
python3 scripts/build_index.py --config knowledge-coach-config.json --rebuild
```

### Search (CLI test)

```bash
python3 scripts/search.py "career growth" --config knowledge-coach-config.json --top-k 3
```

See `.agents/skills/index-builder/SKILL.md` for full index management guide.

## Design Constraints

- Respond in the language of the user's question (Chinese question → Chinese answer, English → English)
- ALL analysis logic must come from Lenny's data via `search_knowledge_base`, never the model's own training data
- Responses must cite sources with inline `[REF-XX: "Title" | source:FILENAME.md]`
- `scripts/` stays at project root — `search.py` is called by the app at runtime, not just by the index-builder skill
- UI: dark professional theme with indigo accents — see `globals.css` for theme tokens
- Search timeout: 90s (subprocess fallback; FastAPI server responds in ~100ms)

## Known Behaviors

- ChromaDB search takes ~14s warm per query via subprocess; ~100ms via FastAPI server
- Model may emit leading `\n\n` before content — trimmed by `renderContent()`
- HMR Fast Refresh disrupts in-flight SSE streams — reload page after code edits before testing
- `systemMessage: { mode: 'customize' }` is required — `mode: 'replace'` removes tool instructions
- Job Match tab requires OpenCLI (`npm install -g @jackwener/opencli`) and an active Boss直聘 session in Chrome
- The prerequisite check API (`/api/jobs/check`) verifies OpenCLI installation and Boss直聘 login status
