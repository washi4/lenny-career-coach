---
name: job-matcher
description: Use when users ask to find jobs, match jobs against a resume, search Boss直聘 or Google Jobs, rank job listings, or need help with "找工作", "职位匹配", "推荐职位", "job search", or "find jobs for me".
---

# Job Matcher

AI-powered job matching that searches live listings and scores them against your resume. Supports Boss直聘 (via OpenCLI) and Google Jobs (via SerpApi).

## When to Use

Use this skill when the user:

- Wants to find jobs matching their resume or background
- Asks to search Boss直聘, Google Jobs, or job platforms in general
- Has a resume and wants ranked job recommendations
- Says "找工作", "职位匹配", "推荐职位", "find jobs", "match jobs", "job search"
- Wants to compare job listings against their skills and preferences

Do not use this skill when:

- The user wants career advice without job searching (use a career coaching skill)
- The user wants interview prep (use a mock interview skill)
- The user wants resume editing (use a resume review skill)

## Prerequisites

### For Boss直聘 (Chinese job market)

1. **OpenCLI**: `npm install -g @jackwener/opencli`
2. **Browser Bridge**: Install the Chrome extension (see https://github.com/jackwener/opencli)
3. **Boss直聘 login**: Open Chrome, go to https://www.zhipin.com, log in
4. **Verify**: Run `opencli doctor` — should show Browser Bridge connected

### For Google Jobs (international)

1. **SerpApi key**: Sign up at https://serpapi.com/
2. **Set environment variable**: `export SERPAPI_API_KEY=your_key_here`
3. **Verify**: `curl "https://serpapi.com/search.json?engine=google_jobs&q=test&api_key=$SERPAPI_API_KEY"` should return results

If neither source is available, inform the user and help them set one up.

## Workflow

### Phase 1: Resume Input and Profile Extraction

Accept the user's resume via:
- **File path**: Read PDF, MD, or TXT from the provided path
- **Pasted text**: User pastes resume content directly

Extract a structured profile:

```json
{
  "target_roles": ["Backend Engineer", "Go Developer"],
  "skills": ["Go", "Python", "Kubernetes", "MySQL", "Redis"],
  "experience_years": 5,
  "experience_level": "3-5年",
  "education": "本科",
  "preferred_cities": ["杭州", "上海"],
  "preferred_industries": ["互联网", "人工智能"],
  "salary_expectation": "30-50K",
  "dealbreakers": ["996", "外包"],
  "strengths": ["Distributed systems", "High concurrency"],
  "career_highlights": ["Built microservice architecture from scratch"]
}
```

Show the extracted profile and ask for confirmation before proceeding.

For field options and valid values, see `references/config-reference.md`.

### Phase 2: Job Fetching

#### Boss直聘 (OpenCLI)

Run multiple searches to cover different angles:

```bash
# Primary — exact role
opencli boss search "Go后端工程师" --city 杭州 --experience 3-5年 --salary 30-50K --limit 30 -f json

# Secondary — broader terms
opencli boss search "后端开发" --city 杭州 --experience 3-5年 --salary 30-50K --limit 30 -f json

# Tertiary — different city
opencli boss search "Go后端工程师" --city 上海 --experience 3-5年 --salary 30-50K --limit 30 -f json
```

Parameter mapping:

| Profile Field | OpenCLI Flag | Example Values |
|---|---|---|
| experience_level | `--experience` | 应届/1年以内/1-3年/3-5年/5-10年/10年以上 |
| education | `--degree` | 大专/本科/硕士/博士 |
| salary_expectation | `--salary` | 3K以下/3-5K/5-10K/10-15K/15-20K/20-30K/30-50K/50K以上 |
| preferred_cities | `--city` | 北京/上海/广州/深圳/杭州/成都/南京/武汉/西安 etc. |
| preferred_industries | `--industry` | 互联网/电子商务/游戏/人工智能/大数据/金融 etc. |

Deduplicate results by `security_id`. Expect 30-90 unique jobs across searches.

#### Google Jobs (SerpApi)

```bash
curl "https://serpapi.com/search.json?engine=google_jobs&q=Backend+Engineer&location=San+Francisco%2C+California%2C+United+States&api_key=$SERPAPI_API_KEY"
```

Key parameters:

| Parameter | Description | Example |
|---|---|---|
| `q` | Search query (role + skills) | `Backend Engineer Go Kubernetes` |
| `location` | Full location string | `San Francisco, California, United States` |
| `chips` | Filter chips | `date_posted:week` for recent jobs |

SerpApi requires full location format. See `references/config-reference.md` for the location mapping table.

Run 2-3 searches with different query variations to maximize coverage.

### Phase 3: Quick Filter (Rule-Based)

Apply hard filters to eliminate mismatches:

1. **Salary mismatch**: Job salary doesn't overlap with expectation
2. **Experience mismatch**: Job requires significantly different experience level
3. **Dealbreaker match**: Company name or title matches dealbreakers
4. **Duplicate company**: Keep only the best-matching role per company

Report filter stats:

```
📊 Quick filter results:
- Total jobs fetched: 72
- Salary mismatch: -18
- Experience mismatch: -8
- Dealbreaker match: -5
- Entering deep evaluation: 41 jobs
```

### Phase 4: Deep Evaluation (LLM)

For remaining candidates (typically 20-40), fetch full job descriptions:

**Boss直聘:**
```bash
opencli boss detail <security_id> -f json
```

Fetch in batches of 5 with 2-3 second delays between batches to avoid rate limiting.

**Google Jobs:** Full descriptions are already included in SerpApi results.

Score each job on these dimensions:

| Dimension | Weight | Criteria |
|---|---|---|
| Skills Match | 30% | How many required skills does the user have? Core vs nice-to-have? |
| Experience Match | 20% | Does experience level and domain match? |
| Salary Match | 15% | Is salary within or above expectation? |
| Role Level | 15% | Does role level match career stage? |
| Company/Industry | 10% | Does company industry, scale, stage match preferences? |
| JD Quality | 10% | Is JD detailed? Is the recruiter active? Red flags? |

For each job, generate:
- **Score**: 0-100
- **Match reasons**: 2-3 bullet points
- **Concerns**: Potential mismatches or red flags
- **Recruiter activity** (Boss直聘 only): From active_time field

### Phase 5: Present Results

Sort by score descending. Present the top 10:

```
## 🎯 Top 10 Job Recommendations

| # | Score | Position | Company | Salary | Key Match |
|---|-------|----------|---------|--------|-----------|
| 1 | 95 | Senior Go Engineer | ByteDance | 40-60K | Full skill match, distributed systems |
| 2 | 88 | Backend Tech Lead | XX Tech | 35-50K | Tech stack match, management exp ✅ |
| 3 | 82 | Go Developer | YY Corp | 30-45K | Core skills match, smaller company |

📊 Pipeline: 72 fetched → 41 after filter → Top 10 ranked
```

For each recommended job, provide a detail card:

```
### #1 Senior Go Engineer — ByteDance (95/100)

Salary: 40-60K·15months | Experience: 3-5 years | Education: Bachelor+
Location: Hangzhou · Yuhang · Future Sci-Tech City
Skills: Go, Kubernetes, MySQL, Redis, Microservices
Company: Internet | Series D+ | 10000+

✅ Match:
- Go + distributed systems experience is a direct fit
- High concurrency experience is a bonus
- Salary range covers expectation

⚠️ Watch out:
- JD mentions "moderate overtime expected"

🔗 https://www.zhipin.com/job_detail/xxx.html
```

### Phase 6: User Interaction

After presenting results, offer these actions:

1. **View details**: "Tell me more about #3"
2. **Adjust filters**: "Widen salary to 20-50K and re-search"
3. **Open links**: "Open #1, #3, #5 in browser"
4. **Export**: "Export recommendations to a file"

**Opening links:**
```bash
open "https://www.zhipin.com/job_detail/xxx.html"
# or for Google Jobs links
open "https://..."
```

**Exporting:** Write results to `~/job-matches-YYYY-MM-DD.md`.

**IMPORTANT — No auto-greet**: OpenCLI's `boss greet` and `boss send` are **recruiter-side** commands (Boss identity), not job-seeker commands. Never auto-apply or auto-greet. Always direct users to open links and apply manually.

## Language Rule

- Detect the language of the user's first message
- Chinese input → respond in Chinese
- English input → respond in English
- Maintain the same language throughout the session

## Error Handling

| Error | Action |
|---|---|
| `opencli doctor` fails | Guide user through OpenCLI + Browser Bridge setup |
| `opencli boss search` returns empty | Try broader terms, different city, or remove salary/experience filters |
| `opencli boss detail` fails | Skip job, note "Position may have been taken down" |
| SerpApi returns error | Check API key, quota, and location format |
| Rate limiting (empty responses) | Add longer delays, reduce batch size |
| Chrome not logged in | Tell user to open Chrome → zhipin.com → log in |
| Boss直聘 IP restriction | Warn user that Boss直聘 may block requests from certain IPs/regions. Suggest switching to Google Jobs or using a Chinese IP |

## Common Mistakes

- Searching without extracting a profile first — always understand the resume before searching
- Using only one search query — run 2-3 variations for broader coverage
- Ignoring rate limits — Boss直聘 blocks rapid requests, always add delays
- Fabricating job data — only present what the search tools actually return
- Auto-greeting or auto-applying — the greet/send commands are recruiter-side only
- Using short location names with SerpApi — always use full format (e.g., "San Francisco, California, United States")
- Not deduplicating results across multiple searches

## Bundled Reference

Read `references/config-reference.md` for valid field values: cities, salary ranges, experience levels, education levels, dealbreakers, and SerpApi location mappings.
