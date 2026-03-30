#!/usr/bin/env python3
"""
知识库索引构建
将 markdown 文件分块并嵌入到 ChromaDB 中

使用方式:
  python3 build_index.py [--config CONFIG] [--rebuild]
  python3 build_index.py                  # 增量构建（只处理新文件）
  python3 build_index.py --rebuild        # 完全重建索引

分块策略:
  - Newsletter: 按 markdown heading 分段
  - Podcast: 按固定 token 数分段
  - 每块 500-1000 tokens，相邻块 100 tokens 重叠
"""

import sys
import os
import re
import json
import hashlib
import time
from pathlib import Path
from typing import List, Dict, Tuple, Optional

sys.path.insert(0, str(Path(__file__).parent))
from config import load_config, get_knowledge_base_dir, get_chroma_dir

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


def parse_frontmatter(content: str) -> Tuple[Dict, str]:
    """解析 markdown 文件的 YAML frontmatter"""
    metadata = {}
    body = content

    if content.startswith("---"):
        parts = content.split("---", 2)
        if len(parts) >= 3:
            fm_text = parts[1].strip()
            body = parts[2].strip()
            for line in fm_text.split("\n"):
                line = line.strip()
                if ":" in line:
                    key, _, value = line.partition(":")
                    key = key.strip()
                    value = value.strip().strip('"').strip("'")
                    if key and value:
                        metadata[key] = value

    return metadata, body


def chunk_by_heading(
    text: str, max_chunk_size: int = 800, overlap: int = 100
) -> List[str]:
    """按 markdown heading 分块"""
    # 按一级和二级标题分段
    sections = re.split(r"\n(?=#{1,2}\s)", text)

    chunks = []
    for section in sections:
        section = section.strip()
        if not section:
            continue

        if len(section) <= max_chunk_size:
            chunks.append(section)
        else:
            # 大段落进一步按段落拆分
            sub_chunks = chunk_by_size(section, max_chunk_size, overlap)
            chunks.extend(sub_chunks)

    return [c for c in chunks if len(c.strip()) > 50]


def chunk_by_size(
    text: str, max_chunk_size: int = 800, overlap: int = 100
) -> List[str]:
    """按固定大小分块，带重叠"""
    words = text.split()
    if not words:
        return []

    # 按词数估算（~1.3 chars per word on average for English）
    words_per_chunk = max_chunk_size // 5  # ~5 chars per word
    overlap_words = overlap // 5

    chunks = []
    start = 0
    while start < len(words):
        end = min(start + words_per_chunk, len(words))
        chunk = " ".join(words[start:end])

        # 尝试在句子边界截断
        if end < len(words):
            last_period = chunk.rfind(".")
            last_newline = chunk.rfind("\n")
            break_point = max(last_period, last_newline)
            if break_point > len(chunk) * 0.5:  # 至少保留一半内容
                chunk = chunk[: break_point + 1]
                # 重新计算实际消耗的词数
                end = start + len(chunk.split())

        chunks.append(chunk.strip())
        start = end - overlap_words if end - overlap_words > start else end

    return [c for c in chunks if len(c.strip()) > 50]


def detect_content_type(metadata: Dict, filepath: Path) -> str:
    """检测内容类型"""
    if metadata.get("type") == "podcast":
        return "podcast"

    parent_name = filepath.parent.name.lower()
    if "podcast" in parent_name:
        return "podcast"
    elif "newsletter" in parent_name:
        return "newsletter"
    return "article"


def process_document(filepath: Path, config: Dict) -> List[Dict]:
    """处理单个文档，返回分块列表"""
    content = filepath.read_text(encoding="utf-8")
    metadata, body = parse_frontmatter(content)
    content_type = detect_content_type(metadata, filepath)

    max_chunk_size = config.get("chunk_size", 800)
    overlap = config.get("chunk_overlap", 100)

    # 按内容类型选择分块策略
    if content_type in ("newsletter", "article"):
        chunks = chunk_by_heading(body, max_chunk_size, overlap)
    else:
        chunks = chunk_by_size(body, max_chunk_size, overlap)

    result = []
    for i, chunk_text in enumerate(chunks):
        doc_id = hashlib.md5(
            f"{filepath.name}::{i}::{chunk_text[:50]}".encode()
        ).hexdigest()
        result.append(
            {
                "id": doc_id,
                "text": chunk_text,
                "metadata": {
                    "source_file": filepath.name,
                    "source_path": str(filepath),
                    "title": metadata.get("title", filepath.stem),
                    "url": metadata.get("url", ""),
                    "date": metadata.get("date", ""),
                    "type": content_type,
                    "chunk_index": i,
                    "youtube_id": metadata.get("youtube_id", ""),
                    "guest": metadata.get("guest", ""),
                },
            }
        )

    return result


def build_index(config: Dict, rebuild: bool = False):
    """构建或增量更新 ChromaDB 索引"""
    kb_dir = get_knowledge_base_dir(config)
    chroma_dir = get_chroma_dir(config)
    collection_name = re.sub(
        r"[^\w]", "_", config.get("name", "knowledge_coach")
    ).lower()

    print(f"Knowledge base directory: {kb_dir}")
    print(f"ChromaDB directory: {chroma_dir}")
    print(f"Collection name: {collection_name}")
    print(f"Embedding model: {config['embedding_model']}")
    print()

    # 初始化嵌入模型
    print("Loading embedding model...")
    model = SentenceTransformer(config["embedding_model"])
    print(f"Model loaded: {config['embedding_model']}")

    # 初始化 ChromaDB
    client = chromadb.PersistentClient(path=str(chroma_dir))

    if rebuild:
        # 删除旧 collection 重建
        try:
            client.delete_collection(collection_name)
            print("Old collection deleted")
        except Exception:
            pass

    collection = client.get_or_create_collection(
        name=collection_name, metadata={"description": config.get("description", "")}
    )

    # 获取已索引的文件列表
    existing_ids = set()
    if not rebuild:
        existing_data = collection.get()
        existing_ids = set(existing_data.get("ids", []))
        print(f"Existing documents in index: {len(existing_ids)}")

    # 扫描所有 markdown 文件
    md_files = []
    for subdir in ["newsletters", "podcasts", "articles"]:
        dir_path = kb_dir / subdir
        if dir_path.exists():
            md_files.extend(sorted(dir_path.glob("*.md")))

    # 也支持根目录的 markdown 文件
    md_files.extend(sorted(kb_dir.glob("*.md")))

    print(f"Found {len(md_files)} markdown files")

    # 处理文档
    total_chunks = 0
    new_chunks = 0
    all_ids = []
    all_texts = []
    all_metadatas = []
    all_embeddings = []

    for i, filepath in enumerate(md_files, 1):
        chunks = process_document(filepath, config)
        total_chunks += len(chunks)

        # 过滤已存在的块
        new = [c for c in chunks if c["id"] not in existing_ids]
        if not new:
            continue

        new_chunks += len(new)
        print(f"  [{i}/{len(md_files)}] {filepath.name}: {len(new)} new chunks")

        # 生成嵌入
        texts = [c["text"] for c in new]
        embeddings = model.encode(texts, show_progress_bar=False).tolist()

        all_ids.extend([c["id"] for c in new])
        all_texts.extend(texts)
        all_metadatas.extend([c["metadata"] for c in new])
        all_embeddings.extend(embeddings)

    # 批量写入 ChromaDB
    if all_ids:
        batch_size = 500
        for start in range(0, len(all_ids), batch_size):
            end = min(start + batch_size, len(all_ids))
            collection.add(
                ids=all_ids[start:end],
                documents=all_texts[start:end],
                metadatas=all_metadatas[start:end],
                embeddings=all_embeddings[start:end],
            )
        print(f"\nAdded {new_chunks} new chunks to index")
    else:
        print("\nNo new chunks to add")

    total_in_collection = collection.count()
    print(f"Total chunks in collection: {total_in_collection}")

    # 保存索引元数据
    meta_path = chroma_dir / "index_meta.json"
    meta = {
        "collection": collection_name,
        "total_documents": total_in_collection,
        "last_updated": time.strftime("%Y-%m-%d %H:%M:%S"),
        "embedding_model": config["embedding_model"],
        "files_indexed": len(md_files),
    }
    meta_path.write_text(
        json.dumps(meta, indent=2, ensure_ascii=False), encoding="utf-8"
    )

    return {
        "total_files": len(md_files),
        "total_chunks": total_chunks,
        "new_chunks": new_chunks,
        "total_in_collection": total_in_collection,
    }


def main():
    import argparse

    parser = argparse.ArgumentParser(description="构建知识库 ChromaDB 索引")
    parser.add_argument("--config", help="配置文件路径")
    parser.add_argument(
        "--rebuild", action="store_true", help="完全重建索引（删除旧索引）"
    )
    parser.add_argument(
        "--test", action="store_true", help="测试模式：只处理前 3 个文件"
    )
    args = parser.parse_args()

    config = load_config(args.config)

    if args.test:
        print("TEST MODE: Processing limited files\n")

    stats = build_index(config, rebuild=args.rebuild)

    print(f"\nIndex build complete!")
    print(json.dumps(stats, indent=2))


if __name__ == "__main__":
    main()
