# Lenny's AI Coach

A RAG-powered coaching app built on Lenny Rachitsky's podcast and newsletter content.

[Lenny Rachitsky](https://www.lennysnewsletter.com/) is a former product lead at Airbnb and the author of the #1 business newsletter on Substack. His podcast and newsletter cover product management, growth, career development, and working with executives — featuring guests like Sheryl Sandberg, Brian Chesky, and Julie Zhuo. This app turns that knowledge base into an interactive AI coach.

Six tabs — three chat-based coaching modes (**Resume Review**, **Career Advice**, **Mock Interview**), two diagnostic coaches (**Growth Coach**, **Product Strategy Coach**) with wizard → streaming report → follow-up chat flow, and an experimental **Job Match** tab. All grounded in 314 podcast transcripts and 349 newsletter articles. Every response cites its sources with clickable references that open the original content (YouTube embeds for podcasts, rendered articles for newsletters).

Built with Next.js 16, React 19, ChromaDB for vector search, and the GitHub Copilot SDK for LLM inference.

![Demo](docs/images/demo.png)

## Features

- **Three chat-based coaching modes** — Resume review, career advice, and mock interview, each with a specialized system prompt
- **Growth Coach** — Fill a product growth profile (product type, growth stage, challenges, metrics) → receive a streaming diagnostic report grounded in Lenny's content → continue with follow-up chat
- **Product Strategy Coach** — Fill a strategy profile (strategy area, product maturity, challenges, context) → receive a streaming strategy diagnostic → continue with follow-up chat
- **RAG with inline citations** — Responses include `[REF-XX]` links to original podcast episodes and newsletter articles
- **Reference panel** — Click a citation to see the source: YouTube embeds for podcasts, rendered markdown for newsletters
- **PDF resume upload** — Upload your resume in any coaching mode for personalized feedback
- **Fast vector search** — FastAPI persistent server delivers ~100ms queries (vs ~14s cold subprocess)
- **Bilingual UI** — English and Chinese with a one-click language switcher
- **Hot-swappable model** — Change the LLM model in config, takes effect on the next request
- **Job Match** (experimental) — Upload your resume and get ranked job matches scored by the LLM against your profile and preferences. Two data sources:
  - **Google Jobs** (via [SerpApi](https://serpapi.com/)) — International job search. Requires a SerpApi API key
  - **Boss直聘** (via [OpenCLI](https://github.com/jackwener/opencli)) — Chinese job market. Requires OpenCLI and an active Boss直聘 session in Chrome. ⚠️ May be blocked by IP restrictions — a warning is displayed in the UI
- **Lenny integration for Job Match** — Every job result connects back to Lenny's knowledge base:
  - **Ask Lenny** — Per-job streaming advice with citations from relevant podcast episodes and newsletter articles
  - **Lenny's Take** — Overall analysis card across all search results
  - **Cross-tab navigation** — Jump from any job result directly into Career Advice or Mock Interview with full job context (JD, profile, resume) pre-filled
- **Persistent Job Match state** — Switching between tabs preserves your search results; no need to re-search when coming back

## Prerequisites

- **Node.js 18+** and npm
- **Python 3.8+**
- **GitHub account with a Copilot subscription** — The app uses the [GitHub Copilot SDK](https://github.com/nicolo-ribaudo/github-copilot-sdk) for LLM access. This requires an active [GitHub Copilot](https://github.com/features/copilot) subscription (paid).
- **`gh` CLI** — Install from [cli.github.com](https://cli.github.com/), then run `gh auth login`
- **OpenCLI** (optional, for Job Match / Boss直聘 only) — `npm install -g @jackwener/opencli`. Also requires Chrome with an active [Boss直聘](https://www.zhipin.com) login session
- **SerpApi key** (optional, for Job Match / Google Jobs only) — Sign up at [serpapi.com](https://serpapi.com/) and add to `.env.local`:
  ```
  SERPAPI_API_KEY=your_key_here
  ```

## Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/washi4/lenny-ai-coach.git
cd lenny-ai-coach

# 2. Install Node dependencies
npm install

# 3. Install Python dependencies (first run downloads ~2GB of model weights)
pip install -r requirements.txt

# 4. Build the ChromaDB vector index (processes 663 files, takes 10-30 min)
python3 scripts/build_index.py --config knowledge-coach-config.json --rebuild

# 5. Authenticate with GitHub
gh auth login
gh auth status  # Verify: should show "Logged in to github.com"

# 6. Start both servers (two separate terminals)

# Terminal 1 — Search server (FastAPI, port 8001)
npm run search-server

# Terminal 2 — Next.js dev server (port 3000)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Authentication

The app authenticates via `gh` CLI OAuth tokens — **not** personal access tokens (PATs).

1. Install the `gh` CLI: [cli.github.com](https://cli.github.com/)
2. Log in: `gh auth login` (follow the browser-based OAuth flow)
3. Verify: `gh auth status` should show `Logged in to github.com`

Your GitHub account must have an active Copilot subscription. The SDK reads the OAuth token from `gh` automatically — no API keys or environment variables needed.

## Architecture

```
User → Next.js API (/api/chat) → Copilot SDK → LLM
                                       ↓
                                 search_knowledge_base tool
                                       ↓
                          FastAPI server (port 8001)
                          or subprocess fallback (port N/A)
                                       ↓
                            ChromaDB vector search
                                       ↓
                      Top-K results with metadata → LLM generates
                      response with [REF-XX] inline citations
```

The search has a **dual-path** strategy: it tries the FastAPI server first (~100ms warm), and falls back to spawning a Python subprocess (~14s) if the server is unavailable. Both paths query the same ChromaDB index.

### Diagnostic Coaches Flow (Growth Coach / Product Strategy Coach)

```
User fills wizard form → Client builds diagnostic prompt from profile fields
  → POST /api/chat with skill-specific system prompt
  → LLM calls search_knowledge_base for relevant Lenny content
  → SSE stream: streaming diagnostic report with [REF-XX] citations
  → Report complete → user can continue with follow-up chat
  → Follow-up messages carry diagnostic context forward
```

### Job Match + Lenny Advice Flow

```
User fills profile → POST /api/jobs/search
  → OpenCLI (Boss直聘) or SerpApi (Google Jobs) fetches listings
  → LLM scores each job against resume + profile
  → SSE stream: progress stages → ranked results

User clicks "Ask Lenny" on a job → POST /api/jobs/lenny-advice
  → search_knowledge_base (ChromaDB) for relevant Lenny content
  → LLM generates advice with [REF-XX] citations
  → SSE stream back to job card

User clicks "Career Advice" / "Mock Interview" on a job
  → Switches tab with full context (JD + profile + resume) pre-filled
  → New chat session starts with job-specific context
```

## Configuration

Edit `knowledge-coach-config.json`:

```json
{
  "name": "Lenny Career Coach",
  "model": "claude-sonnet-4.6",
  "knowledge_base_dir": "./data",
  "chroma_dir": "./data/.chroma",
  "embedding_model": "all-MiniLM-L6-v2",
  "top_k": 5
}
```

| Field | Description |
|-------|-------------|
| `model` | LLM model ID. Change takes effect on the next chat request — no restart needed. |
| `top_k` | Number of search results returned per query. |
| `chroma_dir` | Path to ChromaDB storage. Gitignored; rebuilt locally via `build_index.py`. |
| `embedding_model` | Sentence-transformers model for embeddings. Must match what was used to build the index. |

## Project Structure

```
lenny-career-coach/
├── src/
│   ├── app/
│   │   ├── page.tsx                # Main page — 6 tabs, split-panel layout
│   │   ├── globals.css             # Theme tokens (Tailwind v4)
│   │   └── api/
│   │       ├── chat/route.ts       # LLM chat + search tool + SSE streaming
│   │       ├── parse-pdf/route.ts  # PDF text extraction
│   │       ├── reference/[file]/route.ts  # Serve source content
│   │       └── jobs/
│   │           ├── check/route.ts          # Prerequisite check (OpenCLI + Boss直聘)
│   │           ├── extract-profile/route.ts # Auto-extract profile from resume
│   │           ├── lenny-advice/route.ts   # Per-job Lenny advice (RAG + SSE)
│   │           └── search/route.ts         # Job search pipeline (Boss直聘 + Google Jobs + LLM + SSE)
│   ├── components/
│   │   ├── ChatArea.tsx            # Message list + scroll management
│   │   ├── ChatMessage.tsx         # Markdown rendering + REF links + suggestion buttons
│   │   ├── Header.tsx              # App header + language switcher
│   │   ├── InputArea.tsx           # Text input + PDF upload (all tabs)
│   │   ├── ReferencePanel.tsx      # Right panel: YouTube embed / newsletter content
│   │   ├── TabBar.tsx              # 6-tab navigation
│   │   ├── TopicChips.tsx          # Empty-state topic suggestions
│   │   ├── GrowthCoachTab.tsx      # Growth coach tab (wizard → report → chat)
│   │   ├── GrowthWizard.tsx        # Growth diagnostic wizard form
│   │   ├── ProductStrategyTab.tsx  # Product strategy tab (wizard → report → chat)
│   │   ├── StrategyWizard.tsx      # Product strategy diagnostic wizard form
│   │   ├── JobMatchTab.tsx         # Job match tab wrapper (wizard/progress/results states)
│   │   ├── JobMatchWizard.tsx      # Source selection + PDF upload + profile form
│   │   ├── JobSearchProgress.tsx   # Search progress with stage indicators
│   │   ├── JobResults.tsx          # Job results list + Lenny's Take card
│   │   ├── JobCard.tsx             # Individual job card with Ask Lenny button
│   │   └── JobDetailPanel.tsx      # Full job detail + Ask Lenny / Career Advice / Mock Interview
│   ├── lib/
│   │   ├── i18n.ts                 # Internationalization (EN/ZH)
│   │   ├── chat-client.ts          # SSE streaming client (DO NOT MODIFY)
│   │   ├── career-data.ts          # Tab config, topic definitions, city/salary presets
│   │   ├── jobs-client.ts          # SSE client for job search pipeline
│   │   ├── knowledge-search.ts     # Shared ChromaDB search functions (used by chat + lenny-advice)
│   │   ├── lenny-advice-client.ts  # SSE client for per-job Lenny advice
│   │   └── markdown-renderer.tsx   # Shared markdown renderer (used by ChatMessage + JobCard)
│   └── types/index.ts
├── scripts/
│   ├── search_server.py           # FastAPI persistent search server
│   ├── search.py                  # CLI search + subprocess fallback
│   ├── build_index.py             # Build ChromaDB vector index
│   └── config.py                  # Shared config loader
├── data/
│   ├── podcasts/                  # 314 podcast transcripts (.md)
│   ├── newsletters/               # 349 newsletter articles (.md)
│   └── .chroma/                   # ChromaDB index (gitignored, rebuilt locally)
├── .agents/skills/                # Coaching skill definitions (system prompts)
├── knowledge-coach-config.json    # Runtime config
└── AGENTS.md                      # AI agent instructions for contributors
```

## Troubleshooting

**Search takes 14+ seconds**
The FastAPI search server isn't running. Start it with `npm run search-server`. You should see `ChromaDB ready: 45463 chunks` in the output.

**"Model not found" or authentication errors**
Run `gh auth status`. Your GitHub account needs an active Copilot subscription. If you see "not logged in", run `gh auth login`.

**ChromaDB errors on startup**
The vector index hasn't been built yet. Run:
```bash
python3 scripts/build_index.py --config knowledge-coach-config.json --rebuild
```

**`sentence-transformers` download is slow**
First run downloads ~2GB of PyTorch + model weights. This is expected. Subsequent runs use the cached model.

**"Cannot find module" errors**
Run `npm install` to install Node dependencies.

**Job Match tab shows "Setup Required" when searching with Boss直聘**
The prerequisite check runs when you click "Find Jobs" with the Boss直聘 source selected. Install OpenCLI: `npm install -g @jackwener/opencli`. Then open Chrome, go to zhipin.com, and log in. If all checks pass, the search will proceed automatically. Note: Boss直聘 may block requests due to IP restrictions — if searches consistently fail, switch to Google Jobs.

**Google Jobs returns no results**
Check that `SERPAPI_API_KEY` is set in `.env.local` and the key is valid. You can test directly: `curl "https://serpapi.com/search.json?engine=google_jobs&q=product+manager&api_key=YOUR_KEY"`. SerpApi requires full location format (e.g., "San Francisco, California, United States" not "San Francisco, CA").


## Data Source & Attribution

The knowledge base content is sourced from [Lenny Rachitsky's](https://www.lennysnewsletter.com/) podcast and newsletter, via the [joeseesun/lennys-podcast-newsletter](https://github.com/joeseesun/lennys-podcast-newsletter) data collection.

> **Disclaimer**: This project is **not** affiliated with or endorsed by Lenny Rachitsky. It is intended for personal learning and research purposes.

## License

[MIT](LICENSE)

## Acknowledgments

- [Lenny Rachitsky](https://www.lennysnewsletter.com/) — for the podcast and newsletter content that powers this app
- [joeseesun/lennys-podcast-newsletter](https://github.com/joeseesun/lennys-podcast-newsletter) — for the curated data collection
- [GitHub Copilot SDK](https://github.com/nicolo-ribaudo/github-copilot-sdk) — for LLM integration
- [ChromaDB](https://www.trychroma.com/) — for vector search
- [SerpApi](https://serpapi.com/) — for Google Jobs search integration
- [YouMind Lenny Career Coach](https://youmind.com/zh-CN/landing/lenny-career-coach) — for the original inspiration
