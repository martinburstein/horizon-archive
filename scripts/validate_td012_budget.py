#!/usr/bin/env python3
"""Validate TD-012 aggregate production output against PBA-TD012-v1."""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "horizon-archive-game" / "dist" / "assets"
PBA = ROOT / "Production Pipeline" / "Skyscraper Test Drives" / "TD-012" / "04A-PRODUCTION-BUDGET-AUTHORITY.json"
MEDIA_AUTHORITY = ROOT / "Production Pipeline" / "Skyscraper Test Drives" / "TD-010" / "04A-PRODUCTION-BUDGET-AUTHORITY.json"


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest().upper()


def fail(message: str) -> None:
    raise SystemExit(f"PBA-TD012-v1 FAIL: {message}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--mode", choices=("baseline", "candidate", "release"), required=True)
    parser.add_argument("--modules", type=int, required=True)
    args = parser.parse_args()

    authority = json.loads(PBA.read_text(encoding="utf-8"))
    media_authority = json.loads(MEDIA_AUTHORITY.read_text(encoding="utf-8"))
    caps = authority["caps"]
    if not DIST.is_dir():
        fail("dist/assets is absent; run npm run build first")

    files = sorted(path for path in DIST.iterdir() if path.is_file())
    javascript = [path for path in files if path.suffix.lower() == ".js"]
    css = [path for path in files if path.suffix.lower() == ".css"]
    media = [path for path in files if path not in javascript and path not in css]
    js_bytes = sum(path.stat().st_size for path in javascript)
    css_bytes = sum(path.stat().st_size for path in css)
    media_bytes = sum(path.stat().st_size for path in media)

    if js_bytes > caps["aggregateJavascriptBytes"]:
        fail(f"aggregate JavaScript {js_bytes} > {caps['aggregateJavascriptBytes']}")
    if css_bytes > caps["aggregateCssBytes"]:
        fail(f"aggregate CSS {css_bytes} > {caps['aggregateCssBytes']}")
    if args.modules > caps["productionModules"]:
        fail(f"modules {args.modules} > {caps['productionModules']}")
    if len(media) != caps["totalRuntimeMediaAssets"]:
        fail(f"runtime media count {len(media)} != {caps['totalRuntimeMediaAssets']}")
    if media_bytes != caps["totalRuntimeMediaBytes"]:
        fail(f"runtime media bytes {media_bytes} != {caps['totalRuntimeMediaBytes']}")

    accepted_hashes = {item["sha256"].upper() for item in media_authority["basis"]["runtimeMedia"]}
    emitted_hashes = {sha256(path) for path in media}
    if emitted_hashes != accepted_hashes:
        added = sorted(emitted_hashes - accepted_hashes)
        missing = sorted(accepted_hashes - emitted_hashes)
        fail(f"runtime media identity changed; added={added}, missing={missing}")

    if args.mode == "baseline":
        basis = authority["basis"]
        if len(javascript) != 1 or javascript[0].stat().st_size != basis["javascript"]["bytes"] or sha256(javascript[0]) != basis["javascript"]["sha256"]:
            fail("baseline JavaScript identity differs from released TD-011")
        if len(css) != 1 or css[0].stat().st_size != basis["css"]["bytes"] or sha256(css[0]) != basis["css"]["sha256"]:
            fail("baseline CSS identity differs from released TD-011")
        if args.modules != basis["modules"]:
            fail(f"baseline modules {args.modules} != {basis['modules']}")

    report = {
        "authority": authority["authorityId"],
        "mode": args.mode,
        "status": "PASS",
        "javascript": {"chunks": len(javascript), "bytes": js_bytes},
        "css": {"chunks": len(css), "bytes": css_bytes},
        "modules": args.modules,
        "runtimeMedia": {"files": len(media), "bytes": media_bytes, "newFiles": 0},
    }
    print(json.dumps(report, separators=(",", ":")))


if __name__ == "__main__":
    main()
