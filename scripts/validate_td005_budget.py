import argparse
import hashlib
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_AUTHORITY = (
    ROOT
    / "Production Pipeline"
    / "Skyscraper Test Drives"
    / "TD-005"
    / "04A-PRODUCTION-BUDGET-AUTHORITY.json"
)
DEFAULT_DIST = ROOT / "horizon-archive-game" / "dist"


def sha256(path):
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest().upper()


def collect_assets(dist):
    assets_dir = dist / "assets"
    if not assets_dir.is_dir():
        raise AssertionError(f"missing production assets directory: {assets_dir}")
    return [
        {
            "path": path,
            "name": path.name,
            "suffix": path.suffix.lower(),
            "bytes": path.stat().st_size,
            "sha256": sha256(path),
        }
        for path in sorted(assets_dir.rglob("*"))
        if path.is_file()
    ]


def timed_gate(errors, name, value, cap, required):
    if required and value is None:
        errors.append(f"{name} measurement is required for release mode")
    elif value is not None and value > cap:
        errors.append(f"{name} {value:.3f} > {cap}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--authority", type=Path, default=DEFAULT_AUTHORITY)
    parser.add_argument("--dist", type=Path, default=DEFAULT_DIST)
    parser.add_argument(
        "--mode",
        choices=("baseline", "candidate", "release"),
        default="candidate",
    )
    parser.add_argument("--modules", type=int, required=True)
    parser.add_argument("--build-seconds", type=float, required=True)
    parser.add_argument("--focused-seconds", type=float)
    parser.add_argument("--related-seconds", type=float)
    parser.add_argument("--full-suite-seconds", type=float)
    parser.add_argument("--e2e-seconds", type=float)
    parser.add_argument("--sampled-main-thread-ms", type=float)
    args = parser.parse_args()

    authority = json.loads(args.authority.read_text(encoding="utf-8"))
    caps = authority["caps"]
    basis = authority["basis"]
    assets = collect_assets(args.dist)

    javascript = [item for item in assets if item["suffix"] == ".js"]
    css = [item for item in assets if item["suffix"] == ".css"]
    media = [item for item in assets if item["suffix"] not in {".js", ".css"}]
    accepted_media_hashes = {
        item["sha256"].upper() for item in basis["runtimeMedia"]
    }
    present_media_hashes = {item["sha256"] for item in media}
    new_media = [
        item for item in media if item["sha256"] not in accepted_media_hashes
    ]

    javascript_bytes = sum(item["bytes"] for item in javascript)
    css_bytes = sum(item["bytes"] for item in css)
    media_bytes = sum(item["bytes"] for item in media)
    new_media_bytes = sum(item["bytes"] for item in new_media)
    allowed_extensions = set(caps["allowedNewRuntimeMediaExtensions"])

    errors = []
    if not javascript:
        errors.append("no production JavaScript emitted")
    if not css:
        errors.append("no production CSS emitted")
    if javascript_bytes > caps["aggregateJavascriptBytes"]:
        errors.append(
            f"JavaScript {javascript_bytes} > {caps['aggregateJavascriptBytes']}"
        )
    if css_bytes > caps["aggregateCssBytes"]:
        errors.append(f"CSS {css_bytes} > {caps['aggregateCssBytes']}")
    if args.modules > caps["productionModules"]:
        errors.append(f"modules {args.modules} > {caps['productionModules']}")
    if args.build_seconds > caps["productionBuildSeconds"]:
        errors.append(
            f"build {args.build_seconds:.3f}s > "
            f"{caps['productionBuildSeconds']}s"
        )
    if media_bytes > caps["totalRuntimeMediaBytes"]:
        errors.append(
            f"total runtime media {media_bytes} > "
            f"{caps['totalRuntimeMediaBytes']}"
        )
    if len(new_media) > caps["newRuntimeMediaAssets"]:
        errors.append(
            f"new runtime media assets {len(new_media)} > "
            f"{caps['newRuntimeMediaAssets']}"
        )
    if new_media_bytes > caps["newRuntimeMediaBytes"]:
        errors.append(
            f"new runtime media {new_media_bytes} > "
            f"{caps['newRuntimeMediaBytes']}"
        )
    missing_accepted = accepted_media_hashes - present_media_hashes
    if missing_accepted:
        errors.append(
            f"accepted runtime media missing: {len(missing_accepted)} hash(es)"
        )
    disallowed = [
        item["name"]
        for item in new_media
        if item["suffix"] not in allowed_extensions
    ]
    if disallowed:
        errors.append(f"disallowed new runtime media: {', '.join(disallowed)}")

    release = args.mode == "release"
    timed_gate(
        errors,
        "focused suite",
        args.focused_seconds,
        caps["focusedSuiteSeconds"],
        release,
    )
    timed_gate(
        errors,
        "related suite",
        args.related_seconds,
        caps["relatedSuiteSeconds"],
        release,
    )
    timed_gate(
        errors,
        "full suite",
        args.full_suite_seconds,
        caps["fullSuiteSeconds"],
        release,
    )
    timed_gate(
        errors,
        "complete E2E",
        args.e2e_seconds,
        caps["completeE2ESeconds"],
        release,
    )
    timed_gate(
        errors,
        "sampled main-thread task",
        args.sampled_main_thread_ms,
        caps["sampledMainThreadTaskMs"],
        release,
    )

    if args.mode == "baseline":
        expected_javascript = basis["javascript"]
        expected_css = basis["css"]
        if len(javascript) != 1 or (
            javascript[0]["bytes"],
            javascript[0]["sha256"],
        ) != (
            expected_javascript["bytes"],
            expected_javascript["sha256"],
        ):
            errors.append("baseline JavaScript identity mismatch")
        if len(css) != 1 or (css[0]["bytes"], css[0]["sha256"]) != (
            expected_css["bytes"],
            expected_css["sha256"],
        ):
            errors.append("baseline CSS identity mismatch")
        if new_media:
            errors.append("baseline contains media outside accepted hash set")
        if media_bytes != basis["runtimeMediaBytes"]:
            errors.append("baseline runtime-media byte total mismatch")

    report = {
        "authorityId": authority["authorityId"],
        "mode": args.mode,
        "javascriptChunks": len(javascript),
        "javascriptBytes": javascript_bytes,
        "cssChunks": len(css),
        "cssBytes": css_bytes,
        "modules": args.modules,
        "buildSeconds": args.build_seconds,
        "runtimeMediaBytes": media_bytes,
        "newRuntimeMediaAssets": [item["name"] for item in new_media],
        "newRuntimeMediaBytes": new_media_bytes,
        "acceptedRuntimeMediaMissing": len(missing_accepted),
        "status": "PASS" if not errors else "FAIL",
        "errors": errors,
    }
    print(json.dumps(report, indent=2))
    if errors:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
