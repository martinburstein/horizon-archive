#!/usr/bin/env python3
"""Deterministic FRM15 guide builder and verifier. No stochastic or product work."""

from __future__ import annotations

import argparse
import copy
import hashlib
import io
import json
from pathlib import Path
from typing import Any

from PIL import Image, ImageDraw

SCHEMA = "horizon.first-run.frm15-guide.v1"
MANIFEST_SCHEMA = "horizon.first-run.frm15-guide-manifest.v1"


def sha256_bytes(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def load_spec(path: Path) -> dict[str, Any]:
    value = json.loads(path.read_text(encoding="utf-8"))
    if value.get("schema") != SCHEMA or value.get("spec_id") != "FRM15-SPEC-v1":
        raise ValueError("guide spec identity mismatch")
    return value


def rgb(value: str) -> tuple[int, int, int]:
    if len(value) != 7 or not value.startswith("#"):
        raise ValueError(f"invalid RGB hex: {value}")
    return tuple(int(value[index:index + 2], 16) for index in (1, 3, 5))


def in_canvas(point: list[int], width: int, height: int) -> bool:
    return len(point) == 2 and all(isinstance(v, int) for v in point) and 0 <= point[0] <= width and 0 <= point[1] <= height


def rect_ok(rect: dict[str, int], width: int, height: int) -> bool:
    return set(rect) == {"x", "y", "width", "height"} and all(isinstance(v, int) for v in rect.values()) and rect["x"] >= 0 and rect["y"] >= 0 and rect["width"] > 0 and rect["height"] > 0 and rect["x"] + rect["width"] <= width and rect["y"] + rect["height"] <= height


def bbox(points: list[list[int]]) -> tuple[int, int, int, int]:
    xs = [p[0] for p in points]
    ys = [p[1] for p in points]
    return min(xs), min(ys), max(xs), max(ys)


def rect_intersects(a: dict[str, int], b: dict[str, int]) -> bool:
    return a["x"] < b["x"] + b["width"] and b["x"] < a["x"] + a["width"] and a["y"] < b["y"] + b["height"] and b["y"] < a["y"] + a["height"]


def render(spec: dict[str, Any]) -> dict[str, Image.Image]:
    width = spec["canvas"]["width"]
    height = spec["canvas"]["height"]
    palette = {key: rgb(value) for key, value in spec["palette"].items()}

    structure = Image.new("RGB", (width, height), palette["background"])
    draw = ImageDraw.Draw(structure)
    draw.polygon(spec["relation"], fill=palette["structure"])
    draw.polygon(spec["dry_route"], fill=palette["dry_route"])
    draw.polygon(spec["water"], fill=palette["water"])
    draw.line(spec["trace"], fill=palette["trace"], width=12, joint="curve")
    for seam in spec["service_seams"]:
        draw.line(seam["points"], fill=palette["service_void"], width=13, joint="curve")

    material = Image.new("RGB", (width, height), palette["background"])
    material_draw = ImageDraw.Draw(material)
    for material_id in spec["materials"]["draw_order"]:
        for polygon in spec["materials"][material_id]:
            material_draw.polygon(polygon, fill=palette[material_id])
    material_ids = material.copy()
    material_draw.line(spec["trace"], fill=palette["trace"], width=12, joint="curve")
    for seam in spec["service_seams"]:
        material_draw.line(seam["points"], fill=palette["service_void"], width=13, joint="curve")

    protection = Image.new("RGB", (width, height), palette["background"])
    protection_draw = ImageDraw.Draw(protection)
    core = spec["canvas"]["final_core"]
    protection_draw.rectangle((core["x"], core["y"], core["x"] + core["width"] - 1, core["y"] + core["height"] - 1), outline=palette["safe_core"], width=4)
    for area in spec["protected"].values():
        protection_draw.rectangle((area["x"], area["y"], area["x"] + area["width"] - 1, area["y"] + area["height"] - 1), fill=palette["protected"])
    target = spec["semantic_target"]
    protection_draw.rectangle((target["x"], target["y"], target["x"] + target["width"] - 1, target["y"] + target["height"] - 1), outline=palette["semantic_target"], width=8)
    anchor = spec["label_anchor"]
    protection_draw.rectangle((anchor["x"], anchor["y"], anchor["x"] + anchor["width"] - 1, anchor["y"] + anchor["height"] - 1), outline=palette["label_anchor"], width=8)
    return {"structure": structure, "material": material, "material_ids": material_ids, "protection": protection}


def validate(spec: dict[str, Any]) -> dict[str, Any]:
    errors: list[str] = []
    width = spec.get("canvas", {}).get("width")
    height = spec.get("canvas", {}).get("height")
    if (width, height) != (1536, 1024):
        errors.append("canvas must be 1536x1024")
        return {"pass": False, "errors": errors}
    core = spec["canvas"].get("final_core", {})
    if core != {"x": 0, "y": 80, "width": 1536, "height": 864}:
        errors.append("final core identity mismatch")
    if spec["canvas"].get("normalized_output") != {"width": 3840, "height": 2160}:
        errors.append("normalized output identity mismatch")
    for key in ("relation", "dry_route", "water", "trace"):
        points = spec.get(key)
        if not isinstance(points, list) or len(points) < 3 or not all(in_canvas(p, width, height) for p in points):
            errors.append(f"invalid {key} geometry")
    if set(spec.get("materials", {}).get("draw_order", [])) != {"foundation", "repair", "service_skin"}:
        errors.append("material draw order mismatch")
    for material_id in ("foundation", "repair", "service_skin"):
        polygons = spec.get("materials", {}).get(material_id, [])
        if not polygons or any(len(poly) < 3 or not all(in_canvas(p, width, height) for p in poly) for poly in polygons):
            errors.append(f"invalid material polygons: {material_id}")
    for key in ("semantic_target", "label_anchor"):
        if not rect_ok(spec.get(key, {}), width, height):
            errors.append(f"invalid {key}")
    center = spec.get("physical_center", {})
    if set(center) != {"x", "y"} or not all(isinstance(value, int) for value in center.values()) or not (0 <= center["x"] < width and 0 <= center["y"] < height):
        errors.append("invalid physical center")
    protected = spec.get("protected", {})
    if set(protected) != {"predecessor", "next_boundary", "live_water", "return_route", "suspended_landmark", "crown", "witness", "narration_ui"}:
        errors.append("protected-zone keys mismatch")
    elif any(not rect_ok(value, width, height) for value in protected.values()):
        errors.append("invalid protected-zone geometry")
    elif any(rect_intersects(spec["semantic_target"], value) for value in protected.values()):
        errors.append("semantic target overlaps a protected zone")

    seams = spec.get("service_seams", [])
    main = [entry for entry in seams if "parent" not in entry]
    branches = [entry for entry in seams if "parent" in entry]
    if len(main) < 3 or any(len(entry.get("points", [])) < 3 for entry in main):
        errors.append("fewer than three main service seams")
    if any(entry["points"][-1][1] >= entry["points"][0][1] for entry in main):
        errors.append("service seam does not continue upward")
    main_ids = {entry["id"] for entry in main}
    if not branches or any(entry.get("parent") not in main_ids or entry["points"][0] not in next(item["points"] for item in main if item["id"] == entry["parent"]) for entry in branches):
        errors.append("branch does not join a main seam")

    if not errors:
        images = render(spec)
        material_ids = images["material_ids"]
        palette = {key: rgb(value) for key, value in spec["palette"].items()}
        for pair, windows in spec.get("pairwise_contact_windows", {}).items():
            left, right = pair.split("_") if pair != "foundation_service_skin" and pair != "repair_service_skin" else (pair.split("_")[0], "service_skin")
            if pair == "foundation_repair":
                left, right = "foundation", "repair"
            expected = {palette[left], palette[right]}
            if len(windows) < 2:
                errors.append(f"too few contact windows: {pair}")
                continue
            for index, window in enumerate(windows):
                if not rect_ok(window, width, height):
                    errors.append(f"invalid contact window: {pair}:{index}")
                    continue
                crop = material_ids.crop((window["x"], window["y"], window["x"] + window["width"], window["y"] + window["height"]))
                colors = set(crop.get_flattened_data())
                if not expected.issubset(colors):
                    errors.append(f"contact window lacks both process IDs: {pair}:{index}")
        trace_ids = set()
        for point in spec["trace"]:
            color = material_ids.getpixel(tuple(point))
            for material_id in ("foundation", "repair", "service_skin"):
                if color == palette[material_id]:
                    trace_ids.add(material_id)
        if trace_ids != {"foundation", "repair", "service_skin"}:
            errors.append("trace does not sample all three process IDs")
        for material_id, point in spec.get("trace_reaction_samples", {}).items():
            if material_ids.getpixel(tuple(point)) != palette[material_id]:
                errors.append(f"reaction sample is not on {material_id}")
        core_bottom = core["y"] + core["height"]
        essential = spec["relation"] + spec["dry_route"] + spec["water"] + spec["trace"] + [p for seam in seams for p in seam["points"]]
        if any(not (core["x"] <= x <= core["x"] + core["width"] and core["y"] <= y <= core_bottom) for x, y in essential):
            errors.append("essential geometry falls outside the 16:9 safe core")
    return {"pass": not errors, "errors": errors}


def png_bytes(image: Image.Image) -> bytes:
    stream = io.BytesIO()
    image.save(stream, format="PNG", optimize=False, compress_level=9)
    return stream.getvalue()


def build(spec_path: Path, output_dir: Path) -> dict[str, Any]:
    spec = load_spec(spec_path)
    verdict = validate(spec)
    if not verdict["pass"]:
        raise ValueError("guide validation failed: " + "; ".join(verdict["errors"]))
    output_dir.mkdir(parents=False, exist_ok=False)
    images = render(spec)
    files = []
    for key, name in (("structure", "FRM15-G01-STRUCT.png"), ("material", "FRM15-G01-MAT.png"), ("protection", "FRM15-G01-PROT.png")):
        data = png_bytes(images[key])
        path = output_dir / name
        with path.open("xb") as handle:
            handle.write(data)
            handle.flush()
        files.append({"role": key, "name": name, "bytes": len(data), "sha256": sha256_bytes(data)})
    manifest = {"schema": MANIFEST_SCHEMA, "spec_id": spec["spec_id"], "files": files, "validation": verdict}
    manifest_data = (json.dumps(manifest, indent=2, sort_keys=True) + "\n").encode("utf-8")
    with (output_dir / "FRM15-G01-MANIFEST.json").open("xb") as handle:
        handle.write(manifest_data)
    return manifest


def verify_outputs(spec_path: Path, output_dir: Path) -> dict[str, Any]:
    spec = load_spec(spec_path)
    verdict = validate(spec)
    if not verdict["pass"]:
        return verdict
    expected = render(spec)
    errors = []
    for key, name in (("structure", "FRM15-G01-STRUCT.png"), ("material", "FRM15-G01-MAT.png"), ("protection", "FRM15-G01-PROT.png")):
        path = output_dir / name
        if not path.is_file() or path.is_symlink():
            errors.append(f"missing or linked output: {name}")
            continue
        if path.read_bytes() != png_bytes(expected[key]):
            errors.append(f"output bytes differ from deterministic render: {name}")
    return {"pass": not errors, "errors": errors}


def self_test(spec_path: Path) -> dict[str, Any]:
    spec = load_spec(spec_path)
    base = validate(spec)
    if not base["pass"]:
        raise AssertionError(base)
    mutations = []
    missing_material = copy.deepcopy(spec)
    missing_material["materials"]["service_skin"] = []
    mutations.append(("missing material", missing_material))
    broken_trace = copy.deepcopy(spec)
    broken_trace["trace"] = [[200, 200], [300, 210], [400, 220]]
    mutations.append(("trace misses processes", broken_trace))
    missing_seam = copy.deepcopy(spec)
    missing_seam["service_seams"] = missing_seam["service_seams"][:2]
    mutations.append(("too few seams", missing_seam))
    overlap = copy.deepcopy(spec)
    overlap["protected"]["witness"] = copy.deepcopy(overlap["semantic_target"])
    mutations.append(("protected overlap", overlap))
    failures = []
    for name, mutation in mutations:
        if validate(mutation)["pass"]:
            failures.append(name)
    first = {key: sha256_bytes(png_bytes(value)) for key, value in render(spec).items() if key != "material_ids"}
    second = {key: sha256_bytes(png_bytes(value)) for key, value in render(spec).items() if key != "material_ids"}
    if first != second:
        failures.append("nondeterministic render")
    return {"pass": not failures, "base": base, "adversarial_rejections": len(mutations) - len(failures), "deterministic_hashes": first, "failures": failures}


def main() -> int:
    parser = argparse.ArgumentParser()
    sub = parser.add_subparsers(dest="command", required=True)
    for name in ("self-test", "validate"):
        item = sub.add_parser(name)
        item.add_argument("--spec", type=Path, required=True)
    item = sub.add_parser("build")
    item.add_argument("--spec", type=Path, required=True)
    item.add_argument("--out-dir", type=Path, required=True)
    item = sub.add_parser("verify")
    item.add_argument("--spec", type=Path, required=True)
    item.add_argument("--out-dir", type=Path, required=True)
    args = parser.parse_args()
    if args.command == "self-test":
        result = self_test(args.spec)
    elif args.command == "validate":
        result = validate(load_spec(args.spec))
    elif args.command == "build":
        result = build(args.spec, args.out_dir)
    else:
        result = verify_outputs(args.spec, args.out_dir)
    print(json.dumps(result, indent=2, sort_keys=True))
    return 0 if result.get("pass", result.get("validation", {}).get("pass", True)) else 1


if __name__ == "__main__":
    raise SystemExit(main())
