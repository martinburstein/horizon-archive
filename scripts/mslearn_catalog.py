from __future__ import annotations

import json
from dataclasses import dataclass
from pathlib import Path
from typing import Any
from urllib.parse import urlsplit, urlunsplit

import requests


CATALOG_URL = "https://learn.microsoft.com/api/catalog/?locale={locale}"
DEFAULT_TARGET_PATHS = [
    "https://learn.microsoft.com/en-us/training/paths/ai-concepts/",
    "https://learn.microsoft.com/en-us/training/paths/get-started-ai-apps-agents/",
]
FOUNDRY_PRIORITY_DOCS = [
    {
        "title": "Microsoft Foundry documentation hub",
        "url": "https://learn.microsoft.com/en-us/azure/foundry/",
    },
    {
        "title": "Microsoft Foundry SDKs and Endpoints overview",
        "url": "https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview",
    },
    {
        "title": "Microsoft Foundry Agent Service overview",
        "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/overview",
    },
    {
        "title": "Azure Content Understanding overview in Foundry Tools",
        "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview",
    },
]


def strip_query_fragment(url: str) -> str:
    parts = urlsplit(url)
    path = parts.path if parts.path.endswith("/") else f"{parts.path}/"
    return urlunsplit((parts.scheme, parts.netloc, path, "", ""))


def fetch_catalog(locale: str, session: requests.Session, timeout: int = 120) -> dict[str, Any]:
    response = session.get(CATALOG_URL.format(locale=locale), timeout=timeout)
    response.raise_for_status()
    return response.json()


def save_catalog_snapshot(catalog: dict[str, Any], output_path: Path) -> None:
    output_path.write_text(json.dumps(catalog, indent=2), encoding="utf-8")


def load_catalog_snapshot(snapshot_path: Path) -> dict[str, Any]:
    return json.loads(snapshot_path.read_text(encoding="utf-8"))


@dataclass
class CatalogIndexes:
    learning_paths: dict[str, dict[str, Any]]
    modules: dict[str, dict[str, Any]]
    units: dict[str, dict[str, Any]]


def build_indexes(catalog: dict[str, Any]) -> CatalogIndexes:
    return CatalogIndexes(
        learning_paths={item["uid"]: item for item in catalog.get("learningPaths", [])},
        modules={item["uid"]: item for item in catalog.get("modules", [])},
        units={item["uid"]: item for item in catalog.get("units", [])},
    )


def find_target_learning_paths(
    catalog: dict[str, Any],
    target_urls: list[str] | None = None,
) -> list[dict[str, Any]]:
    normalized_targets = {
        strip_query_fragment(url): strip_query_fragment(url) for url in (target_urls or DEFAULT_TARGET_PATHS)
    }
    matched: list[dict[str, Any]] = []
    for item in catalog.get("learningPaths", []):
        normalized_url = strip_query_fragment(item.get("url", ""))
        if normalized_url in normalized_targets:
            matched.append(item)
    matched.sort(key=lambda item: sorted(normalized_targets).index(strip_query_fragment(item["url"])))
    return matched


def build_manifest_structure(
    catalog: dict[str, Any],
    target_urls: list[str] | None = None,
) -> dict[str, Any]:
    indexes = build_indexes(catalog)
    learning_paths = find_target_learning_paths(catalog, target_urls=target_urls)
    manifest_paths: list[dict[str, Any]] = []

    for path_index, path_item in enumerate(learning_paths, start=1):
        modules: list[dict[str, Any]] = []
        for module_index, module_uid in enumerate(path_item.get("modules", []), start=1):
            module_item = indexes.modules.get(module_uid)
            if not module_item:
                continue
            units: list[dict[str, Any]] = []
            for unit_index, unit_uid in enumerate(module_item.get("units", []), start=1):
                unit_item = indexes.units.get(unit_uid, {"uid": unit_uid})
                units.append(
                    {
                        "uid": unit_item.get("uid"),
                        "title": unit_item.get("title"),
                        "duration_minutes": unit_item.get("duration_in_minutes"),
                        "last_modified": unit_item.get("last_modified"),
                        "number": unit_index,
                    }
                )

            modules.append(
                {
                    "uid": module_item.get("uid"),
                    "title": module_item.get("title"),
                    "summary": module_item.get("summary"),
                    "url": strip_query_fragment(module_item.get("url", "")),
                    "duration_minutes": module_item.get("duration_in_minutes"),
                    "last_modified": module_item.get("last_modified"),
                    "number": module_index,
                    "unit_count": len(units),
                    "units": units,
                }
            )

        manifest_paths.append(
            {
                "uid": path_item.get("uid"),
                "title": path_item.get("title"),
                "summary": path_item.get("summary"),
                "url": strip_query_fragment(path_item.get("url", "")),
                "duration_minutes": path_item.get("duration_in_minutes"),
                "last_modified": path_item.get("last_modified"),
                "number": path_index,
                "module_count": len(modules),
                "modules": modules,
            }
        )

    return {
        "locale": catalog.get("learningPaths", [{}])[0].get("locale"),
        "target_paths": target_urls or DEFAULT_TARGET_PATHS,
        "foundry_priority_docs": FOUNDRY_PRIORITY_DOCS,
        "learning_paths": manifest_paths,
    }
