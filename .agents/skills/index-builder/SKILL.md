---
name: index-builder
description: Use when adding new data to the knowledge base, rebuilding the ChromaDB vector index, or troubleshooting search issues. Triggers include "add data", "rebuild index", "update knowledge base", "search not working", "新增数据", "重建索引".
---

# Index Builder

Build and manage the ChromaDB vector index for the Lenny Career Coach knowledge base.

## Prerequisites

```bash
pip install chromadb sentence-transformers
```

## Project Layout

```
data/
├── podcasts/       # Podcast transcripts (markdown with YAML frontmatter)
├── newsletters/    # Newsletter articles (markdown with YAML frontmatter)
└── .chroma/        # ChromaDB storage (gitignored, ~609MB)
scripts/
├── build_index.py  # Index builder
├── search.py       # Vector search
└── config.py       # Config loader
knowledge-coach-config.json  # Points to ./data and ./data/.chroma
```

## Commands

All commands run from project root.

### Incremental build (new files only)

```bash
python3 scripts/build_index.py --config knowledge-coach-config.json
```

### Full rebuild

```bash
python3 scripts/build_index.py --config knowledge-coach-config.json --rebuild
```

### Test search

```bash
python3 scripts/search.py "career growth" --config knowledge-coach-config.json --top-k 3
```

## Adding New Data

1. Place markdown files in `data/podcasts/` or `data/newsletters/`
2. Each file MUST have YAML frontmatter:

```yaml
---
title: "Article or Episode Title"
date: "2025-01-15"
url: "https://..."
youtube_id: "dQw4w9WgXcQ"   # podcasts only
guest: "Guest Name"          # podcasts only
---
```

3. Run incremental build (processes only new files):

```bash
python3 scripts/build_index.py --config knowledge-coach-config.json
```

4. Verify with a search query related to the new content.

## Chunking Strategy

- **Newsletters**: Split by markdown headings (h1/h2), then by size if section > 800 chars
- **Podcasts**: Fixed-size chunks (~800 chars) with 100-char overlap
- Minimum chunk size: 50 chars (smaller chunks are discarded)

## Embedding Model

`all-MiniLM-L6-v2` — configured in `knowledge-coach-config.json`. Changing this requires a full `--rebuild`.

## Current Stats

- 314 podcasts + 349 newsletters = 663 source files
- 45,463 chunks in ChromaDB collection `lenny_career_coach`

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| "Collection not found" | Run `build_index.py` to create index |
| Search returns stale results after adding files | Run incremental build |
| Changed embedding model | Must use `--rebuild` |
| ChromaDB corrupted | Delete `data/.chroma/`, run `--rebuild` |
