#!/usr/bin/env python3
"""Small reusable inspection, normalization, card, and receipt utility."""

from __future__ import annotations

import argparse
import hashlib
import io
import json
import os
import stat
import tempfile
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from PIL import Image, ImageCms, ImageOps

CARD_SCHEMA = "horizon.image-asset-card.v1"
RECEIPT_SCHEMA = "horizon.image-receipt.v1"
REQUIRED_CARD_FIELDS = {
    "schema",
    "asset_id",
    "status",
    "use_case",
    "asset_type",
    "prompt_file",
    "target",
    "generation_budget",
    "must_show",
    "must_preserve",
    "avoid",
    "integration",
}


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        while chunk := handle.read(1024 * 1024):
            digest.update(chunk)
    return digest.hexdigest()


def ordinary_file(path: Path) -> os.stat_result:
    resolved = path.resolve(strict=True)
    info = resolved.lstat()
    reparse = getattr(stat, "FILE_ATTRIBUTE_REPARSE_POINT", 0x400)
    if not stat.S_ISREG(info.st_mode) or resolved.is_symlink() or info.st_nlink != 1:
        raise ValueError("input must be a single-link ordinary file")
    if getattr(info, "st_file_attributes", 0) & reparse:
        raise ValueError("reparse files are not accepted")
    return info


def open_image(path: Path) -> Image.Image:
    ordinary_file(path)
    image = Image.open(path.resolve(strict=True))
    image.load()
    return ImageOps.exif_transpose(image)


def hex_color(value: str) -> tuple[int, int, int]:
    cleaned = value.strip().removeprefix("#")
    if len(cleaned) != 6:
        raise ValueError("background must be a six-digit RGB hex value")
    try:
        return tuple(int(cleaned[index:index + 2], 16) for index in (0, 2, 4))  # type: ignore[return-value]
    except ValueError as error:
        raise ValueError("background must be hexadecimal") from error


def to_srgb_rgb(image: Image.Image, background: tuple[int, int, int]) -> Image.Image:
    alpha = image.getchannel("A") if "A" in image.getbands() else None
    profile = image.info.get("icc_profile")
    base = image.convert("RGB")
    if profile:
        try:
            source = ImageCms.ImageCmsProfile(io.BytesIO(profile))
            target = ImageCms.createProfile("sRGB")
            base = ImageCms.profileToProfile(base, source, target, outputMode="RGB")
        except (OSError, ValueError) as error:
            raise ValueError("embedded color profile cannot be converted to sRGB") from error
    if alpha is not None:
        rgba = base.convert("RGBA")
        rgba.putalpha(alpha)
        matte = Image.new("RGBA", rgba.size, background + (255,))
        base = Image.alpha_composite(matte, rgba).convert("RGB")
    clean = Image.new("RGB", base.size)
    clean.paste(base)
    return clean


def png_bytes(image: Image.Image) -> bytes:
    stream = io.BytesIO()
    image.convert("RGB").save(stream, format="PNG", optimize=False, compress_level=9)
    return stream.getvalue()


def write_new(path: Path, data: bytes) -> None:
    output = path.resolve(strict=False)
    if not output.parent.is_dir():
        raise ValueError("output parent directory must already exist")
    with output.open("xb") as handle:
        handle.write(data)
        handle.flush()
        os.fsync(handle.fileno())


def inspect_image(path: Path) -> dict[str, Any]:
    resolved = path.resolve(strict=True)
    info = ordinary_file(resolved)
    image = open_image(resolved)
    return {
        "pass": True,
        "path": str(resolved),
        "format": image.format,
        "mode": image.mode,
        "width": image.width,
        "height": image.height,
        "animated": bool(getattr(image, "is_animated", False)),
        "alpha": "A" in image.getbands(),
        "metadata_keys": sorted(image.info.keys()),
        "bytes": info.st_size,
        "sha256": sha256_file(resolved),
    }


def normalize_image(source: Path, output: Path, width: int, height: int, fit: str, background: str) -> dict[str, Any]:
    if width <= 0 or height <= 0:
        raise ValueError("width and height must be positive")
    image = to_srgb_rgb(open_image(source), hex_color(background))
    size = (width, height)
    if fit == "cover":
        final = ImageOps.fit(image, size, method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))
    elif fit == "contain":
        final = ImageOps.pad(image, size, method=Image.Resampling.LANCZOS, color=hex_color(background), centering=(0.5, 0.5))
    else:
        raise ValueError("fit must be cover or contain")
    write_new(output, png_bytes(final))
    result = inspect_image(output)
    result["pass"] = result["format"] == "PNG" and result["mode"] == "RGB" and result["width"] == width and result["height"] == height and not result["alpha"] and not result["animated"] and not result["metadata_keys"]
    result["fit"] = fit
    result["background"] = background.upper().removeprefix("#")
    return result


def check_card(card_path: Path) -> dict[str, Any]:
    ordinary_file(card_path)
    card = json.loads(card_path.read_text(encoding="utf-8"))
    missing = sorted(REQUIRED_CARD_FIELDS - set(card))
    errors: list[str] = []
    if missing:
        errors.append("missing fields: " + ", ".join(missing))
    if card.get("schema") != CARD_SCHEMA:
        errors.append("schema mismatch")
    target = card.get("target", {})
    if not isinstance(target.get("width"), int) or not isinstance(target.get("height"), int) or target.get("width", 0) <= 0 or target.get("height", 0) <= 0:
        errors.append("invalid target dimensions")
    budget = card.get("generation_budget", {})
    if any(not isinstance(budget.get(key), int) or budget.get(key, 0) < 0 for key in ("concepts", "targeted_edits", "concurrency")):
        errors.append("invalid generation budget")
    prompt = card_path.parent.parent / str(card.get("prompt_file", ""))
    if not prompt.is_file():
        errors.append("prompt file missing")
    return {
        "pass": not errors,
        "asset_id": card.get("asset_id"),
        "errors": errors,
        "prompt": str(prompt.resolve(strict=False)),
        "card_sha256": sha256_file(card_path),
    }


def make_receipt(asset_id: str, operation: str, prompt: Path, source: Path, final: Path, output: Path) -> dict[str, Any]:
    ordinary_file(prompt)
    source_info = inspect_image(source)
    final_info = inspect_image(final)
    receipt = {
        "schema": RECEIPT_SCHEMA,
        "asset_id": asset_id,
        "accepted_at_utc": datetime.now(timezone.utc).isoformat(),
        "tool": "built-in-imagegen",
        "operation": operation,
        "prompt": {"path": str(prompt.resolve(strict=True)), "sha256": sha256_file(prompt)},
        "source": source_info,
        "final": final_info,
    }
    write_new(output, (json.dumps(receipt, indent=2, sort_keys=True) + "\n").encode("utf-8"))
    return {"pass": True, "receipt": str(output.resolve(strict=True)), "receipt_sha256": sha256_file(output)}


def self_test() -> dict[str, Any]:
    with tempfile.TemporaryDirectory(prefix="horizon-image-toolkit-") as temp:
        root = Path(temp)
        source = root / "source.png"
        Image.new("RGBA", (64, 48), (30, 80, 120, 180)).save(source, format="PNG")
        first = root / "first.png"
        second = root / "second.png"
        first_result = normalize_image(source, first, 320, 180, "cover", "000000")
        second_result = normalize_image(source, second, 320, 180, "cover", "000000")
        deterministic = first.read_bytes() == second.read_bytes()
        overwrite_rejected = False
        try:
            normalize_image(source, first, 320, 180, "cover", "000000")
        except FileExistsError:
            overwrite_rejected = True
        return {
            "pass": first_result["pass"] and second_result["pass"] and deterministic and overwrite_rejected,
            "deterministic": deterministic,
            "overwrite_rejected": overwrite_rejected,
            "normalized_sha256": first_result["sha256"],
        }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="command", required=True)
    sub.add_parser("self-test")
    item = sub.add_parser("inspect")
    item.add_argument("--input", type=Path, required=True)
    item = sub.add_parser("normalize")
    item.add_argument("--input", type=Path, required=True)
    item.add_argument("--output", type=Path, required=True)
    item.add_argument("--width", type=int, required=True)
    item.add_argument("--height", type=int, required=True)
    item.add_argument("--fit", choices=("cover", "contain"), default="cover")
    item.add_argument("--background", default="000000")
    item = sub.add_parser("check-card")
    item.add_argument("--card", type=Path, required=True)
    item = sub.add_parser("receipt")
    item.add_argument("--asset-id", required=True)
    item.add_argument("--operation", choices=("generate", "edit"), required=True)
    item.add_argument("--prompt", type=Path, required=True)
    item.add_argument("--source", type=Path, required=True)
    item.add_argument("--final", type=Path, required=True)
    item.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    if args.command == "self-test":
        result = self_test()
    elif args.command == "inspect":
        result = inspect_image(args.input)
    elif args.command == "normalize":
        result = normalize_image(args.input, args.output, args.width, args.height, args.fit, args.background)
    elif args.command == "check-card":
        result = check_card(args.card)
    else:
        result = make_receipt(args.asset_id, args.operation, args.prompt, args.source, args.final, args.output)
    print(json.dumps(result, indent=2, sort_keys=True))
    return 0 if result.get("pass") else 1


if __name__ == "__main__":
    raise SystemExit(main())

