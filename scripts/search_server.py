#!/usr/bin/env python3
"""
FastAPI persistent search server for Lenny Career Coach.

Loads the embedding model and ChromaDB collection once at startup,
then serves search queries over HTTP — eliminating the ~14s cold-start
penalty of spawning a new Python subprocess per query.

Usage:
  uvicorn search_server:app --host 127.0.0.1 --port 8001
  python3 search_server.py
"""

import sys
import os
import re
import time
from pathlib import Path
from typing import Dict, List, Optional
from contextlib import asynccontextmanager

sys.path.insert(0, str(Path(__file__).parent))

from config import load_config, get_chroma_dir

try:
    from fastapi import FastAPI
    from fastapi.responses import JSONResponse
    from pydantic import BaseModel
except ImportError:
    print("Error: fastapi not installed")
    print("Please install: pip install fastapi uvicorn")
    sys.exit(1)

try:
    import chromadb
except ImportError:
    print("Error: chromadb not installed")
    print("Please install: pip install chromadb")
    sys.exit(1)

try:
    from sentence_transformers import SentenceTransformer
except ImportError:
    print("Error: sentence-transformers not installed")
    print("Please install: pip install sentence-transformers")
    sys.exit(1)


_model: Optional[SentenceTransformer] = None
_collection = None
_config: Optional[Dict] = None


@asynccontextmanager
async def lifespan(app: FastAPI):
    global _model, _collection, _config

    config_path = os.environ.get("COACH_CONFIG")
    if not config_path:
        candidate = Path(__file__).parent.parent / "knowledge-coach-config.json"
        if candidate.exists():
            config_path = str(candidate)

    _config = load_config(config_path)

    t0 = time.time()
    _model = SentenceTransformer(_config["embedding_model"])
    print(f"[search-server] Model loaded in {time.time() - t0:.1f}s", file=sys.stderr)

    t0 = time.time()
    chroma_dir = get_chroma_dir(_config)
    client = chromadb.PersistentClient(path=str(chroma_dir))
    collection_name = re.sub(
        r"[^\w]", "_", _config.get("name", "knowledge_coach")
    ).lower()
    _collection = client.get_collection(name=collection_name)
    count = _collection.count()
    print(
        f"[search-server] ChromaDB ready: {count} chunks in '{collection_name}' ({time.time() - t0:.1f}s)",
        file=sys.stderr,
    )

    yield

    print("[search-server] Shutting down", file=sys.stderr)


app = FastAPI(title="Lenny Career Coach Search", lifespan=lifespan)


class SearchRequest(BaseModel):
    query: str
    top_k: int = 5
    content_type: Optional[str] = None


class SearchResultItem(BaseModel):
    rank: int
    text: str
    title: str
    url: str
    date: str
    type: str
    source_file: str
    source_path: str
    youtube_id: str
    guest: str
    similarity: float


class SearchResponseModel(BaseModel):
    query: str
    total_results: int
    results: List[SearchResultItem]
    elapsed_ms: float


@app.get("/health")
async def health():
    ready = _model is not None and _collection is not None
    return {"status": "ok" if ready else "loading", "ready": ready}


@app.post("/search", response_model=SearchResponseModel)
async def search_endpoint(req: SearchRequest):
    if _model is None or _collection is None:
        return JSONResponse(
            status_code=503,
            content={"error": "Server still loading, try again shortly"},
        )

    t0 = time.time()

    query_embedding = _model.encode([req.query]).tolist()

    where_filter = None
    if req.content_type:
        where_filter = {"type": req.content_type}

    results = _collection.query(
        query_embeddings=query_embedding,
        n_results=req.top_k,
        where=where_filter,
        include=["documents", "metadatas", "distances"],
    )

    formatted: List[Dict] = []
    if results and results["documents"]:
        for i, (doc, meta, dist) in enumerate(
            zip(
                results["documents"][0],
                results["metadatas"][0],
                results["distances"][0],
            )
        ):
            similarity = max(0, 1 - dist / 2)
            formatted.append(
                {
                    "rank": i + 1,
                    "text": doc,
                    "title": meta.get("title", ""),
                    "url": meta.get("url", ""),
                    "date": meta.get("date", ""),
                    "type": meta.get("type", ""),
                    "source_file": meta.get("source_file", ""),
                    "source_path": meta.get("source_path", ""),
                    "youtube_id": meta.get("youtube_id", ""),
                    "guest": meta.get("guest", ""),
                    "similarity": round(similarity, 4),
                }
            )

    elapsed_ms = (time.time() - t0) * 1000

    return {
        "query": req.query,
        "total_results": len(formatted),
        "results": formatted,
        "elapsed_ms": round(elapsed_ms, 1),
    }


if __name__ == "__main__":
    import uvicorn

    port = int(os.environ.get("SEARCH_PORT", "8001"))
    print(f"[search-server] Starting on http://127.0.0.1:{port}", file=sys.stderr)
    uvicorn.run(app, host="127.0.0.1", port=port, log_level="info")
