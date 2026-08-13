#!/usr/bin/env python3
"""Closed deterministic media transforms for FRM15. Never invents geometry."""

from __future__ import annotations

import argparse
import hashlib
import io
import json
import tempfile
from pathlib import Path

from PIL import Image, ImageCms, ImageOps

OUTPUT_SIZE = (3840, 2160)
BACKGROUND = (0, 0, 0)


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def open_image(path: Path) -> Image.Image:
    if not path.is_absolute() or not path.is_file() or path.is_symlink():
        raise ValueError("input must be an absolute ordinary file")
    image = Image.open(path)
    image.load()
    return image


def to_srgb_rgb(image: Image.Image) -> Image.Image:
    alpha = image.getchannel("A") if "A" in image.getbands() else None
    icc = image.info.get("icc_profile")
    base = image.convert("RGB")
    if icc:
        try:
            source_profile = ImageCms.ImageCmsProfile(io.BytesIO(icc))
            target_profile = ImageCms.createProfile("sRGB")
            base = ImageCms.profileToProfile(base, source_profile, target_profile, outputMode="RGB")
        except (OSError, ValueError):
            raise ValueError("unrecognized embedded color profile")
    if alpha is not None:
        rgba = base.convert("RGBA")
        rgba.putalpha(alpha)
        background = Image.new("RGBA", rgba.size, BACKGROUND + (255,))
        base = Image.alpha_composite(background, rgba).convert("RGB")
    return base


def encode_png(image: Image.Image) -> bytes:
    clean = Image.new("RGB", image.size)
    clean.paste(image.convert("RGB"))
    stream = io.BytesIO()
    clean.save(stream, format="PNG", optimize=False, compress_level=9)
    return stream.getvalue()


def write_new(path: Path, data: bytes) -> None:
    path.parent.mkdir(parents=False, exist_ok=True)
    with path.open("xb") as handle:
        handle.write(data)
        handle.flush()


def normalize(source: Path, output: Path) -> dict:
    image = to_srgb_rgb(open_image(source))
    fitted = ImageOps.fit(image, OUTPUT_SIZE, method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))
    data = encode_png(fitted)
    write_new(output, data)
    return inspect(output)


def composite(parent_a: Path, parent_b: Path, mask_path: Path, output: Path) -> dict:
    left = to_srgb_rgb(open_image(parent_a))
    right = to_srgb_rgb(open_image(parent_b))
    mask = open_image(mask_path).convert("L")
    if left.size != OUTPUT_SIZE or right.size != OUTPUT_SIZE or mask.size != OUTPUT_SIZE:
        raise ValueError("composite parents and mask must be normalized 3840x2160")
    extrema = mask.getextrema()
    colors = mask.getcolors(maxcolors=3)
    if extrema != (0, 255) or colors is None or any(value not in (0, 255) for _, value in colors):
        raise ValueError("composite mask must be binary and contain both values")
    data = encode_png(Image.composite(right, left, mask))
    write_new(output, data)
    return inspect(output)


def inspect(path: Path) -> dict:
    raw = path.read_bytes()
    image = open_image(path)
    alpha = image.getchannel("A").getextrema() if "A" in image.getbands() else None
    forbidden_metadata = sorted(key for key in image.info if key not in {"icc_profile", "dpi"})
    return {
        "pass": image.format == "PNG" and image.mode == "RGB" and image.size == OUTPUT_SIZE and alpha is None and not forbidden_metadata,
        "format": image.format,
        "mode": image.mode,
        "width": image.width,
        "height": image.height,
        "alpha_extrema": alpha,
        "forbidden_metadata": forbidden_metadata,
        "bytes": len(raw),
        "sha256": sha256(raw),
    }


def self_test() -> dict:
    with tempfile.TemporaryDirectory(prefix="frm15-transform-selftest-") as temp:
        root = Path(temp)
        source = root / "source.png"
        rgba = Image.new("RGBA", (64, 48), (80, 120, 160, 255))
        rgba.putpixel((0, 0), (255, 0, 0, 127))
        rgba.save(source, format="PNG")
        first = root / "first.png"
        second = root / "second.png"
        first_result = normalize(source.resolve(), first.resolve())
        second_result = normalize(source.resolve(), second.resolve())
        deterministic = first.read_bytes() == second.read_bytes()
        mask = root / "mask.png"
        binary = Image.new("L", OUTPUT_SIZE, 0)
        binary.paste(255, (0, 0, OUTPUT_SIZE[0] // 2, OUTPUT_SIZE[1]))
        binary.save(mask, format="PNG")
        comp = root / "composite.png"
        composite_result = composite(first.resolve(), second.resolve(), mask.resolve(), comp.resolve())
        bad_mask = root / "bad-mask.png"
        Image.new("L", OUTPUT_SIZE, 128).save(bad_mask, format="PNG")
        rejected = False
        try:
            composite(first.resolve(), second.resolve(), bad_mask.resolve(), (root / "bad.png").resolve())
        except ValueError:
            rejected = True
        return {"pass": first_result["pass"] and second_result["pass"] and composite_result["pass"] and deterministic and rejected, "deterministic": deterministic, "nonbinary_mask_rejected": rejected, "normalized_sha256": first_result["sha256"]}


def main() -> int:
    parser = argparse.ArgumentParser()
    sub = parser.add_subparsers(dest="command", required=True)
    sub.add_parser("self-test")
    item = sub.add_parser("inspect")
    item.add_argument("--input", type=Path, required=True)
    item = sub.add_parser("normalize")
    item.add_argument("--input", type=Path, required=True)
    item.add_argument("--output", type=Path, required=True)
    item = sub.add_parser("composite")
    item.add_argument("--parent-a", type=Path, required=True)
    item.add_argument("--parent-b", type=Path, required=True)
    item.add_argument("--mask", type=Path, required=True)
    item.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    if args.command == "self-test":
        result = self_test()
    elif args.command == "inspect":
        result = inspect(args.input.resolve())
    elif args.command == "normalize":
        result = normalize(args.input.resolve(), args.output.resolve())
    else:
        result = composite(args.parent_a.resolve(), args.parent_b.resolve(), args.mask.resolve(), args.output.resolve())
    print(json.dumps(result, indent=2, sort_keys=True))
    return 0 if result.get("pass") else 1


if __name__ == "__main__":
    raise SystemExit(main())
