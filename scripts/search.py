#!/usr/bin/env python3
"""
知识库向量检索
从 ChromaDB 索引中检索与查询最相关的内容片段

使用方式:
  python3 search.py "your query" [--config CONFIG] [--top-k K] [--type TYPE]
  python3 search.py "How to get promoted as a PM"
  python3 search.py "product-market fit" --top-k 10
  python3 search.py "interview tips" --type podcast

输出: JSON 格式的检索结果，供 Claude 教练使用
"""

import sys
import os
import re
import json
from pathlib import Path
from typing import Dict, List, Optional

sys.path.insert(0, str(Path(__file__).parent))
from config import load_config, get_chroma_dir

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


# 缓存模型实例
_model_cache = {}


def get_model(model_name: str) -> SentenceTransformer:
    """获取嵌入模型（带缓存）"""
    if model_name not in _model_cache:
        _model_cache[model_name] = SentenceTransformer(model_name)
    return _model_cache[model_name]


def search(
    query: str, config: Dict, top_k: int = 5, content_type: Optional[str] = None
) -> List[Dict]:
    """
    向量检索知识库

    Args:
        query: 查询文本
        config: 配置字典
        top_k: 返回结果数
        content_type: 可选过滤（newsletter/podcast/article）

    Returns:
        检索结果列表，每项包含 text, metadata, score
    """
    chroma_dir = get_chroma_dir(config)
    collection_name = re.sub(
        r"[^\w]", "_", config.get("name", "knowledge_coach")
    ).lower()

    # 初始化
    client = chromadb.PersistentClient(path=str(chroma_dir))

    try:
        collection = client.get_collection(name=collection_name)
    except ValueError:
        print(
            json.dumps(
                {
                    "error": "Collection not found. Please run build_index.py first.",
                    "collection": collection_name,
                    "results": [],
                }
            )
        )
        sys.exit(1)

    # 生成查询嵌入
    model = get_model(config["embedding_model"])
    query_embedding = model.encode([query]).tolist()

    # 构建过滤条件
    where_filter = None
    if content_type:
        where_filter = {"type": content_type}

    # 执行检索
    results = collection.query(
        query_embeddings=query_embedding,
        n_results=top_k,
        where=where_filter,
        include=["documents", "metadatas", "distances"],
    )

    # 格式化输出
    formatted = []
    if results and results["documents"]:
        for i, (doc, meta, dist) in enumerate(
            zip(
                results["documents"][0],
                results["metadatas"][0],
                results["distances"][0],
            )
        ):
            # ChromaDB 返回的是 L2 距离，转为相似度分数
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

    return formatted


def format_for_claude(results: List[Dict], query: str) -> str:
    """格式化检索结果，方便 Claude 读取"""
    output = {"query": query, "total_results": len(results), "results": results}
    return json.dumps(output, indent=2, ensure_ascii=False)


def main():
    import argparse

    parser = argparse.ArgumentParser(description="知识库向量检索")
    parser.add_argument("query", help="查询文本")
    parser.add_argument("--config", help="配置文件路径")
    parser.add_argument("--top-k", type=int, default=5, help="返回结果数（默认: 5）")
    parser.add_argument(
        "--type",
        choices=["newsletter", "podcast", "article"],
        help="只检索特定类型的内容",
    )
    parser.add_argument("--verbose", action="store_true", help="显示详细信息")
    args = parser.parse_args()

    config = load_config(args.config)
    top_k = args.top_k or config.get("top_k", 5)

    if args.verbose:
        print(f"Query: {args.query}", file=sys.stderr)
        print(f"Top-K: {top_k}", file=sys.stderr)
        if args.type:
            print(f"Filter type: {args.type}", file=sys.stderr)
        print(file=sys.stderr)

    results = search(args.query, config, top_k=top_k, content_type=args.type)
    output = format_for_claude(results, args.query)
    print(output)


if __name__ == "__main__":
    main()
