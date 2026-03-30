#!/usr/bin/env python3
"""
知识库教练配置管理
加载和管理知识库教练的配置文件
"""

import json
import sys
from pathlib import Path
from typing import Dict, List, Optional


DEFAULT_CONFIG = {
    "name": "Knowledge Coach",
    "description": "A knowledge-base powered AI coach",
    "knowledge_base_dir": "./knowledge-base",
    "chroma_dir": "./knowledge-base/.chroma",
    "embedding_model": "all-MiniLM-L6-v2",
    "chunk_size": 800,
    "chunk_overlap": 100,
    "top_k": 5,
    "modes": ["qa", "resume", "interview", "career"],
    "persona": (
        "You are an experienced career coach and product management expert. "
        "Answer questions based on the provided knowledge base context. "
        "Always cite your sources when referencing specific content."
    ),
    "sources": []
}


def find_config(config_path: Optional[str] = None) -> Path:
    """
    查找配置文件，优先级：
    1. 指定路径
    2. 当前目录的 knowledge-coach.json
    3. skill 目录的 config.json
    """
    if config_path:
        p = Path(config_path)
        if p.exists():
            return p
        print(f"Error: Config file not found: {config_path}")
        sys.exit(1)

    # 当前目录
    local_config = Path("knowledge-coach.json")
    if local_config.exists():
        return local_config

    # skill 目录
    skill_dir = Path(__file__).parent.parent
    skill_config = skill_dir / "config.json"
    if skill_config.exists():
        return skill_config

    return None


def load_config(config_path: Optional[str] = None) -> Dict:
    """加载配置，合并默认值"""
    config_file = find_config(config_path)

    if config_file is None:
        print("No config file found, using defaults", file=sys.stderr)
        return DEFAULT_CONFIG.copy()

    with open(config_file, "r", encoding="utf-8") as f:
        user_config = json.load(f)

    # 合并默认配置
    config = DEFAULT_CONFIG.copy()
    config.update(user_config)

    print(f"Loaded config from: {config_file}", file=sys.stderr)
    return config


def get_knowledge_base_dir(config: Dict) -> Path:
    """获取知识库目录路径"""
    kb_dir = Path(config["knowledge_base_dir"])
    kb_dir.mkdir(parents=True, exist_ok=True)
    return kb_dir


def get_chroma_dir(config: Dict) -> Path:
    """获取 ChromaDB 存储目录"""
    chroma_dir = Path(config["chroma_dir"])
    chroma_dir.mkdir(parents=True, exist_ok=True)
    return chroma_dir


def get_source_dirs(config: Dict) -> Dict[str, Path]:
    """获取各类内容源的目录"""
    kb_dir = get_knowledge_base_dir(config)
    dirs = {
        "newsletters": kb_dir / "newsletters",
        "podcasts": kb_dir / "podcasts",
        "articles": kb_dir / "articles",
    }
    for d in dirs.values():
        d.mkdir(parents=True, exist_ok=True)
    return dirs


if __name__ == "__main__":
    config = load_config()
    print(json.dumps(config, indent=2, ensure_ascii=False))
