from __future__ import annotations

import argparse
import csv
import json
import sys
from collections import Counter
from datetime import UTC, datetime
from pathlib import Path
from typing import Any

import yaml
from bs4 import BeautifulSoup
from slugify import slugify
from tqdm import tqdm

SCRIPT_DIR = Path(__file__).resolve().parent
if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

from mslearn_catalog import (  # noqa: E402
    DEFAULT_TARGET_PATHS,
    FOUNDRY_PRIORITY_DOCS,
    build_manifest_structure,
    fetch_catalog,
    save_catalog_snapshot,
    strip_query_fragment,
)
from mslearn_extract import (  # noqa: E402
    absolutize_links,
    convert_content_to_markdown,
    create_session,
    download_assets,
    extract_module_unit_links,
    find_main_content,
    get_unit_html,
    normalize_whitespace,
    prune_content,
    slug_from_url,
    wait_between_requests,
    write_json,
)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Capture AI-901 Microsoft Learn materials.")
    parser.add_argument("--out", required=True, help="Output folder for captured materials.")
    parser.add_argument("--locale", default="en-us", help="Catalog locale to fetch.")
    parser.add_argument("--refresh-catalog", action="store_true", help="Always refetch the catalog snapshot.")
    parser.add_argument("--no-images", action="store_true", help="Skip downloading images.")
    parser.add_argument("--delay", type=float, default=1.0, help="Delay between page fetches in seconds.")
    parser.add_argument("--max-pages", type=int, default=999, help="Maximum number of unit pages to capture.")
    parser.add_argument("--dry-run", action="store_true", help="Only build discovery outputs, not unit content.")
    parser.add_argument("--path-url", action="append", help="Optional learning-path URL override. Repeatable.")
    return parser.parse_args()


def now_utc() -> str:
    return datetime.now(UTC).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def safe_slug(text: str, fallback: str) -> str:
    slug = slugify(text or "")
    return slug or fallback


def make_output_dirs(root: Path) -> None:
    root.mkdir(parents=True, exist_ok=True)
    (root / "reference-docs").mkdir(parents=True, exist_ok=True)


def resolve_unit_urls(manifest: dict[str, Any], session, delay: float) -> tuple[list[str], list[str]]:
    warnings: list[str] = []
    failures: list[str] = []
    for path_item in manifest["learning_paths"]:
        for module_item in path_item["modules"]:
            wait_between_requests(delay)
            discovered_links = extract_module_unit_links(session, module_item["url"])
            title_to_urls: dict[str, list[str]] = {}
            for link in discovered_links:
                title_to_urls.setdefault(link["title"], []).append(link["url"])

            missing_for_module: list[str] = []
            for unit_item in module_item["units"]:
                matches = title_to_urls.get(unit_item["title"] or "", [])
                if matches:
                    unit_item["url"] = matches[0]
                else:
                    missing_for_module.append(unit_item.get("title") or unit_item.get("uid") or "unknown-unit")

            if missing_for_module:
                failures.append(module_item["url"])
                warnings.append(
                    f"Could not resolve {len(missing_for_module)} unit URL(s) for module '{module_item['title']}': "
                    + ", ".join(missing_for_module)
                )
    return warnings, failures


def write_root_readme(out_dir: Path, capture_time: str, target_urls: list[str]) -> None:
    lines = [
        "# AI-901 Microsoft Learn Study Materials",
        "",
        "Generated from official Microsoft Learn pages for Martin's personal study archive.",
        "",
        f"Captured at UTC: {capture_time}",
        "",
        "Target learning paths:",
    ]
    for url in target_urls:
        lines.append(f"- {strip_query_fragment(url)}")
    lines += [
        "",
        "Usage note: Preserve Microsoft attribution. Do not redistribute.",
    ]
    (out_dir / "README.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_reference_docs(out_dir: Path) -> None:
    skill_path = Path(".agents/skills/foundry-azure-source-priority/SKILL.md")
    lines = [
        "# Foundry Priority Sources",
        "",
        "These are the official Microsoft reference URLs kept as lightweight study references.",
        "",
    ]
    if skill_path.exists():
        lines.append(f"Repository skill: `{skill_path.as_posix()}`")
        lines.append("")
    for item in FOUNDRY_PRIORITY_DOCS:
        lines.append(f"- {item['title']}: {item['url']}")
    (out_dir / "reference-docs" / "foundry_priority_sources.md").write_text(
        "\n".join(lines) + "\n",
        encoding="utf-8",
    )


def build_front_matter(unit_payload: dict[str, Any], capture_time: str) -> str:
    front_matter = {
        "title": unit_payload["title"],
        "source_url": unit_payload["source_url"],
        "learning_path": unit_payload["learning_path"],
        "module": unit_payload["module"],
        "unit_number": unit_payload["unit_number"],
        "unit_type": unit_payload["unit_type"],
        "duration_minutes": unit_payload["duration_minutes"],
        "captured_at_utc": capture_time,
        "source": "Microsoft Learn",
        "usage_note": "Personal study archive. Preserve Microsoft attribution. Do not redistribute.",
    }
    return "---\n" + yaml.safe_dump(front_matter, sort_keys=False, allow_unicode=False).strip() + "\n---\n"


def infer_unit_type(title: str) -> str:
    lowered = (title or "").lower()
    if "knowledge check" in lowered:
        return "knowledge_check"
    if "module assessment" in lowered:
        return "knowledge_check"
    if lowered.startswith("exercise"):
        return "exercise"
    if lowered == "summary":
        return "summary"
    if lowered == "introduction":
        return "introduction"
    return "lesson"


def build_unit_markdown(unit_payload: dict[str, Any], extracted_markdown: str) -> str:
    sections = [
        build_front_matter(unit_payload, unit_payload["captured_at_utc"]),
        "",
        f"# {unit_payload['title']}",
        "",
        f"Source: {unit_payload['source_url']}",
        "",
    ]
    if unit_payload["unit_type"] == "exercise":
        sections.extend(
            [
                "Exercise captured only; not executed.",
                "",
            ]
        )
    sections.extend(
        [
            "## Extracted content",
            "",
            extracted_markdown.strip(),
            "",
        ]
    )
    return "\n".join(sections).strip() + "\n"


def write_path_indexes(out_dir: Path, manifest: dict[str, Any]) -> None:
    for path_item in manifest["learning_paths"]:
        path_dir = out_dir / f"{path_item['number']:02d}_{safe_slug(path_item['title'], 'learning-path')}"
        path_dir.mkdir(parents=True, exist_ok=True)
        write_json(path_dir / "path_metadata.json", path_item)

        lines = [
            f"# {path_item['title']}",
            "",
            f"Source: {path_item['url']}",
            "",
            f"Duration: {path_item.get('duration_minutes', 'unknown')} minutes",
            "",
            "## Modules",
            "",
        ]
        for module_item in path_item["modules"]:
            module_dir_name = f"{module_item['number']:02d}_{safe_slug(module_item['title'], 'module')}"
            lines.append(f"- [{module_item['title']}]({module_dir_name}/module_index.md)")
        (path_dir / "path_index.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_module_indexes(out_dir: Path, manifest: dict[str, Any]) -> None:
    for path_item in manifest["learning_paths"]:
        path_dir = out_dir / f"{path_item['number']:02d}_{safe_slug(path_item['title'], 'learning-path')}"
        for module_item in path_item["modules"]:
            module_dir = path_dir / f"{module_item['number']:02d}_{safe_slug(module_item['title'], 'module')}"
            module_dir.mkdir(parents=True, exist_ok=True)
            (module_dir / "raw").mkdir(parents=True, exist_ok=True)
            write_json(module_dir / "module_metadata.json", module_item)

            lines = [
                f"# {module_item['title']}",
                "",
                f"Source: {module_item['url']}",
                "",
                f"Duration: {module_item.get('duration_minutes', 'unknown')} minutes",
                "",
                "## Units",
                "",
            ]
            for unit_item in module_item["units"]:
                unit_slug = slug_from_url(unit_item.get("url", "")) if unit_item.get("url") else safe_slug(
                    unit_item.get("title", ""),
                    f"unit-{unit_item['number']:02d}",
                )
                lines.append(f"- `{unit_item['number']:02d}` {unit_item['title']} -> `{unit_slug}.md`")
            (module_dir / "module_index.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def build_master_index(out_dir: Path, manifest: dict[str, Any]) -> None:
    lines = [
        "# AI-901 Master Index",
        "",
    ]
    for path_item in manifest["learning_paths"]:
        path_dir_name = f"{path_item['number']:02d}_{safe_slug(path_item['title'], 'learning-path')}"
        lines.append(f"## {path_item['title']}")
        lines.append("")
        for module_item in path_item["modules"]:
            module_dir_name = f"{module_item['number']:02d}_{safe_slug(module_item['title'], 'module')}"
            lines.append(f"### {module_item['title']}")
            lines.append("")
            for unit_item in module_item["units"]:
                unit_slug = slug_from_url(unit_item.get("url", "")) if unit_item.get("url") else safe_slug(
                    unit_item.get("title", ""),
                    f"unit-{unit_item['number']:02d}",
                )
                relative = f"{path_dir_name}/{module_dir_name}/{unit_item['number']:02d}_{unit_slug}.md"
                lines.append(f"- [{unit_item['title']}]({relative})")
            lines.append("")
    (out_dir / "ai901_master_index.md").write_text("\n".join(lines).strip() + "\n", encoding="utf-8")


def compile_outputs(out_dir: Path, captured_units: list[dict[str, Any]]) -> None:
    md_lines = [
        "# AI-901 Microsoft Learn Study Materials",
        "",
        "Generated from official Microsoft Learn pages for personal study.",
        "",
    ]
    jsonl_path = out_dir / "ai901_compiled_for_ai.jsonl"
    with jsonl_path.open("w", encoding="utf-8") as jsonl_file:
        for unit in captured_units:
            md_lines.append(f"## Learning Path: {unit['learning_path']}")
            md_lines.append("")
            md_lines.append(f"### Module: {unit['module']}")
            md_lines.append("")
            md_lines.append(f"#### Unit: {unit['title']}")
            md_lines.append("")
            md_lines.append(f"Source: {unit['source_url']}")
            md_lines.append("")
            md_lines.append(unit["text"].strip())
            md_lines.append("")

            jsonl_payload = {
                "id": unit["id"],
                "learning_path": unit["learning_path"],
                "module": unit["module"],
                "unit": unit["title"],
                "source_url": unit["source_url"],
                "text": unit["text"].strip(),
                "images": unit["images"],
                "captured_at_utc": unit["captured_at_utc"],
            }
            jsonl_file.write(json.dumps(jsonl_payload, ensure_ascii=False) + "\n")

    (out_dir / "ai901_compiled_for_ai.md").write_text("\n".join(md_lines).strip() + "\n", encoding="utf-8")


def write_source_map(out_dir: Path, rows: list[dict[str, Any]]) -> None:
    fieldnames = [
        "learning_path",
        "module",
        "unit",
        "source_url",
        "markdown_path",
        "metadata_path",
        "raw_html_path",
    ]
    with (out_dir / "source_map.csv").open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def write_quality_report(
    out_dir: Path,
    manifest: dict[str, Any],
    capture_time: str,
    captured_count: int,
    skipped_count: int,
    failed_units: list[dict[str, str]],
    text_pivot_failures: list[str],
    image_failures: list[str],
    discovery_warnings: list[str],
    discovery_failures: list[str],
) -> None:
    total_units = sum(len(module["units"]) for path in manifest["learning_paths"] for module in path["modules"])
    duplicate_counter = Counter(
        unit["url"]
        for path in manifest["learning_paths"]
        for module in path["modules"]
        for unit in module["units"]
        if unit.get("url")
    )
    duplicates = [url for url, count in duplicate_counter.items() if count > 1]
    lines = [
        "# Quality Report",
        "",
        f"Capture date/time (UTC): {capture_time}",
        "",
        f"- Number of target learning paths found: {len(manifest['learning_paths'])}",
    ]
    for path_item in manifest["learning_paths"]:
        lines.append(f"- Modules found in '{path_item['title']}': {len(path_item['modules'])}")
        for module_item in path_item["modules"]:
            lines.append(f"- Units found in '{module_item['title']}': {len(module_item['units'])}")
    lines.extend(
        [
            f"- Number of units successfully captured: {captured_count}",
            f"- Number of units skipped: {skipped_count}",
            f"- Number of units failed: {len(failed_units)}",
            f"- Pages where Text and images could not be confirmed: {len(text_pivot_failures)}",
            f"- Images that failed to download: {len(image_failures)}",
            f"- Duplicate module/unit URLs detected: {len(duplicates)}",
            "",
        ]
    )

    if discovery_warnings:
        lines.append("## Discovery warnings")
        lines.append("")
        lines.extend(f"- {item}" for item in discovery_warnings)
        lines.append("")

    if discovery_failures:
        lines.append("## Discovery failures")
        lines.append("")
        lines.extend(f"- {item}" for item in discovery_failures)
        lines.append("")

    if failed_units:
        lines.append("## Failed unit pages")
        lines.append("")
        for item in failed_units:
            lines.append(f"- {item['source_url']} ({item['reason']})")
        lines.append("")

    if text_pivot_failures:
        lines.append("## Text and images review list")
        lines.append("")
        lines.extend(f"- {url}" for url in text_pivot_failures)
        lines.append("")

    if image_failures:
        lines.append("## Image download failures")
        lines.append("")
        lines.extend(f"- {url}" for url in image_failures)
        lines.append("")

    if duplicates:
        lines.append("## Duplicate URLs")
        lines.append("")
        lines.extend(f"- {url}" for url in duplicates)
        lines.append("")

    failure_rate = (len(failed_units) / total_units) if total_units else 1.0
    hard_failures: list[str] = []
    if not manifest["learning_paths"]:
        hard_failures.append("No target learning paths were found.")
    for path_item in manifest["learning_paths"]:
        if not path_item["modules"]:
            hard_failures.append(f"Learning path '{path_item['title']}' has zero modules.")
        for module_item in path_item["modules"]:
            if not module_item["units"]:
                hard_failures.append(f"Module '{module_item['title']}' has zero units.")
    if failure_rate > 0.10:
        hard_failures.append("More than 10% of unit pages failed extraction.")
    compiled_path = out_dir / "ai901_compiled_for_ai.md"
    if not compiled_path.exists() or len(compiled_path.read_text(encoding="utf-8").strip()) < 200:
        hard_failures.append("The compiled file is empty or too small to be useful.")

    if hard_failures:
        lines.append("## Hard failure conditions")
        lines.append("")
        lines.extend(f"- {item}" for item in hard_failures)
        lines.append("")

    (out_dir / "quality_report.md").write_text("\n".join(lines).strip() + "\n", encoding="utf-8")


def capture_units(args: argparse.Namespace, out_dir: Path, manifest: dict[str, Any]) -> None:
    session = create_session()
    capture_time = now_utc()
    captured_units: list[dict[str, Any]] = []
    source_rows: list[dict[str, Any]] = []
    failed_units: list[dict[str, str]] = []
    text_pivot_failures: list[str] = []
    image_failures: list[str] = []
    skipped_count = 0
    pages_seen = 0

    progress_total = sum(len(module["units"]) for path in manifest["learning_paths"] for module in path["modules"])
    progress = tqdm(total=min(progress_total, args.max_pages), desc="Capturing unit pages", unit="page")

    for path_item in manifest["learning_paths"]:
        path_dir = out_dir / f"{path_item['number']:02d}_{safe_slug(path_item['title'], 'learning-path')}"
        for module_item in path_item["modules"]:
            module_dir = path_dir / f"{module_item['number']:02d}_{safe_slug(module_item['title'], 'module')}"
            for unit_item in module_item["units"]:
                if pages_seen >= args.max_pages:
                    skipped_count += 1
                    continue
                unit_url = unit_item.get("url")
                if not unit_url:
                    failed_units.append(
                        {
                            "source_url": module_item["url"],
                            "reason": f"Missing resolved URL for unit '{unit_item['title']}'",
                        }
                    )
                    progress.update(1)
                    continue

                wait_between_requests(args.delay)
                pages_seen += 1
                progress.update(1)

                unit_slug = slug_from_url(unit_url)
                unit_prefix = f"{unit_item['number']:02d}_{unit_slug}"
                raw_html_path = module_dir / "raw" / f"{unit_prefix}.html"
                metadata_path = module_dir / f"{unit_prefix}.metadata.json"
                markdown_path = module_dir / f"{unit_prefix}.md"
                assets_dir = module_dir / "assets" / unit_slug

                try:
                    html, render_meta = get_unit_html(session, unit_url, prefer_playwright=True)
                    raw_html_path.write_text(html, encoding="utf-8")

                    soup = BeautifulSoup(html, "html.parser")
                    content = find_main_content(soup)
                    cleaned_content = prune_content(content)
                    absolutize_links(cleaned_content, unit_url)
                    asset_records, asset_failures = download_assets(
                        session,
                        cleaned_content,
                        assets_dir,
                        unit_url,
                        enable_download=not args.no_images,
                    )
                    image_failures.extend(asset_failures)
                    markdown_body = convert_content_to_markdown(cleaned_content)
                    markdown_body = markdown_body.replace("Source:", "Source:")

                    unit_payload = {
                        "id": f"{safe_slug(module_item['title'], 'module')}__{unit_slug}",
                        "title": unit_item["title"],
                        "source_url": unit_url,
                        "learning_path": path_item["title"],
                        "module": module_item["title"],
                        "unit_number": unit_item["number"],
                        "unit_type": infer_unit_type(unit_item["title"]),
                        "duration_minutes": unit_item.get("duration_minutes"),
                        "captured_at_utc": capture_time,
                        "images": asset_records,
                        "text": markdown_body,
                    }

                    markdown_path.write_text(build_unit_markdown(unit_payload, markdown_body), encoding="utf-8")
                    metadata_payload = {
                        **unit_item,
                        "source_url": unit_url,
                        "capture": render_meta,
                        "asset_count": len(asset_records),
                        "asset_failures": asset_failures,
                        "markdown_path": markdown_path.name,
                        "raw_html_path": raw_html_path.name,
                    }
                    write_json(metadata_path, metadata_payload)
                    write_json(assets_dir / "assets_manifest.json", asset_records)

                    source_rows.append(
                        {
                            "learning_path": path_item["title"],
                            "module": module_item["title"],
                            "unit": unit_item["title"],
                            "source_url": unit_url,
                            "markdown_path": str(markdown_path.relative_to(out_dir)).replace("\\", "/"),
                            "metadata_path": str(metadata_path.relative_to(out_dir)).replace("\\", "/"),
                            "raw_html_path": str(raw_html_path.relative_to(out_dir)).replace("\\", "/"),
                        }
                    )
                    captured_units.append(unit_payload)

                    if not render_meta.get("text_and_images_selected"):
                        text_pivot_failures.append(unit_url)
                except Exception as exc:
                    failed_units.append({"source_url": unit_url, "reason": str(exc)})

    progress.close()
    compile_outputs(out_dir, captured_units)
    build_master_index(out_dir, manifest)
    write_source_map(out_dir, source_rows)
    write_quality_report(
        out_dir=out_dir,
        manifest=manifest,
        capture_time=capture_time,
        captured_count=len(captured_units),
        skipped_count=skipped_count,
        failed_units=failed_units,
        text_pivot_failures=text_pivot_failures,
        image_failures=image_failures,
        discovery_warnings=[],
        discovery_failures=[],
    )


def write_discovery_outputs(out_dir: Path, manifest: dict[str, Any], capture_time: str) -> None:
    write_root_readme(out_dir, capture_time, manifest["target_paths"])
    write_reference_docs(out_dir)
    write_json(out_dir / "manifest.json", manifest)
    write_path_indexes(out_dir, manifest)
    write_module_indexes(out_dir, manifest)


def validate_manifest(manifest: dict[str, Any]) -> None:
    if len(manifest["learning_paths"]) == 0:
        raise RuntimeError("No target learning paths were found in the Microsoft Learn catalog.")
    for path_item in manifest["learning_paths"]:
        if len(path_item["modules"]) == 0:
            raise RuntimeError(f"Learning path '{path_item['title']}' has zero modules.")
        for module_item in path_item["modules"]:
            if len(module_item["units"]) == 0:
                raise RuntimeError(f"Module '{module_item['title']}' has zero units.")


def main() -> int:
    args = parse_args()
    out_dir = Path(args.out).resolve()
    make_output_dirs(out_dir)
    session = create_session()
    capture_time = now_utc()

    target_urls = args.path_url or DEFAULT_TARGET_PATHS
    catalog_path = out_dir / "catalog_snapshot.json"
    if args.refresh_catalog or not catalog_path.exists():
        catalog = fetch_catalog(args.locale, session)
        save_catalog_snapshot(catalog, catalog_path)
    else:
        catalog = json.loads(catalog_path.read_text(encoding="utf-8"))

    manifest = build_manifest_structure(catalog, target_urls=target_urls)
    manifest["generated_at_utc"] = capture_time
    manifest["target_paths"] = [strip_query_fragment(url) for url in target_urls]
    validate_manifest(manifest)

    discovery_warnings, discovery_failures = resolve_unit_urls(manifest, session, args.delay)
    write_discovery_outputs(out_dir, manifest, capture_time)

    if args.dry_run:
        compile_outputs(out_dir, [])
        build_master_index(out_dir, manifest)
        write_source_map(out_dir, [])
        write_quality_report(
            out_dir=out_dir,
            manifest=manifest,
            capture_time=capture_time,
            captured_count=0,
            skipped_count=0,
            failed_units=[],
            text_pivot_failures=[],
            image_failures=[],
            discovery_warnings=discovery_warnings,
            discovery_failures=discovery_failures,
        )
        return 0

    capture_units(args, out_dir, manifest)

    quality_path = out_dir / "quality_report.md"
    if discovery_warnings or discovery_failures:
        quality_text = quality_path.read_text(encoding="utf-8")
        extra_lines = []
        if discovery_warnings:
            extra_lines.extend(["", "## Discovery warnings", ""])
            extra_lines.extend(f"- {item}" for item in discovery_warnings)
        if discovery_failures:
            extra_lines.extend(["", "## Discovery failures", ""])
            extra_lines.extend(f"- {item}" for item in discovery_failures)
        quality_path.write_text(quality_text.rstrip() + "\n" + "\n".join(extra_lines) + "\n", encoding="utf-8")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
