from __future__ import annotations

import json
from pathlib import Path

from PIL import Image, ImageChops


ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "terminal-signal-coupler-connected-no-tongue-tube-sheet-alpha.png"
FRAMES_DIR = ROOT / "frames"
QA_DIR = ROOT / "qa"
LOGICAL_SIZE = 64
GRID = (3, 2)
FRAME_DURATIONS_MS = [620, 170, 260, 240, 150, 500]


def alpha_bbox(image: Image.Image) -> tuple[int, int, int, int]:
    alpha = image.getchannel("A").point(lambda value: 255 if value >= 32 else 0)
    box = alpha.getbbox()
    if box is None:
        raise ValueError("A sprite-sheet cell contains no opaque subject pixels")
    return box


def normalized_cells(sheet: Image.Image) -> list[Image.Image]:
    columns, rows = GRID
    if sheet.width % columns or sheet.height % rows:
        raise ValueError(f"Sheet dimensions {sheet.size} are not divisible by {columns}x{rows}")

    cell_width = sheet.width // columns
    cell_height = sheet.height // rows
    cells: list[Image.Image] = []
    for row in range(rows):
        for column in range(columns):
            cell = sheet.crop(
                (
                    column * cell_width,
                    row * cell_height,
                    (column + 1) * cell_width,
                    (row + 1) * cell_height,
                )
            )
            subject = cell.crop(alpha_bbox(cell))
            subject.thumbnail((62, 61), Image.Resampling.NEAREST)
            canvas = Image.new("RGBA", (LOGICAL_SIZE, LOGICAL_SIZE), (0, 0, 0, 0))
            x = (LOGICAL_SIZE - subject.width) // 2
            y = LOGICAL_SIZE - subject.height
            canvas.alpha_composite(subject, (x, y))
            cells.append(canvas)
    return cells


def cold_pixel_mask(image: Image.Image) -> Image.Image:
    mask = Image.new("L", image.size, 0)
    mask_pixels = mask.load()
    pixels = image.load()
    for y in range(image.height):
        for x in range(image.width):
            red, green, blue, alpha = pixels[x, y]
            if (
                alpha >= 64
                and green >= 82
                and blue >= 105
                and green >= red * 1.25
                and blue >= red * 1.32
            ):
                mask_pixels[x, y] = 255
    return mask


def animation_mask(cells: list[Image.Image]) -> tuple[Image.Image, tuple[int, int, int, int]]:
    cold_union = Image.new("L", (LOGICAL_SIZE, LOGICAL_SIZE), 0)
    for cell in cells:
        cold_union = ImageChops.lighter(cold_union, cold_pixel_mask(cell))

    central = Image.new("L", cold_union.size, 0)
    central.paste(cold_union.crop((16, 30, 46, 52)), (16, 30))
    screen_box = central.getbbox()
    if screen_box is None:
        raise ValueError("Could not locate the cold diagnostic membrane")
    screen_box = (
        max(0, screen_box[0] - 2),
        max(0, screen_box[1] - 2),
        min(LOGICAL_SIZE, screen_box[2] + 2),
        min(LOGICAL_SIZE, screen_box[3] + 2),
    )

    screen_mask = Image.new("L", cold_union.size, 0)
    screen_mask.paste(255, screen_box)
    return screen_mask, screen_box


def stable_animation(cells: list[Image.Image], mask: Image.Image) -> list[Image.Image]:
    base = cells[0]
    return [Image.composite(cell, base, mask) for cell in cells]


def save_gif(frames: list[Image.Image], path: Path, scale: int = 1) -> None:
    rendered = [
        frame.resize((LOGICAL_SIZE * scale, LOGICAL_SIZE * scale), Image.Resampling.NEAREST)
        for frame in frames
    ]
    rendered[0].save(
        path,
        save_all=True,
        append_images=rendered[1:],
        duration=FRAME_DURATIONS_MS,
        loop=0,
        disposal=2,
        transparency=0,
        optimize=False,
    )


def save_sheet(frames: list[Image.Image], path: Path, scale: int = 1) -> None:
    sheet = Image.new("RGBA", (LOGICAL_SIZE * 3, LOGICAL_SIZE * 2), (0, 0, 0, 0))
    for index, frame in enumerate(frames):
        sheet.alpha_composite(frame, ((index % 3) * LOGICAL_SIZE, (index // 3) * LOGICAL_SIZE))
    if scale != 1:
        sheet = sheet.resize((sheet.width * scale, sheet.height * scale), Image.Resampling.NEAREST)
    sheet.save(path)


def main() -> None:
    FRAMES_DIR.mkdir(parents=True, exist_ok=True)
    QA_DIR.mkdir(parents=True, exist_ok=True)

    source = Image.open(SOURCE).convert("RGBA")
    cells = normalized_cells(source)
    mask, screen_box = animation_mask(cells)
    frames = stable_animation(cells, mask)

    for index, frame in enumerate(frames, start=1):
        frame.save(FRAMES_DIR / f"terminal-coupler-{index:02d}-64x64.png")

    frames[2].save(ROOT / "terminal-signal-coupler-available-64x64.png")
    save_sheet(frames, ROOT / "terminal-signal-coupler-sheet-192x128.png")
    save_sheet(frames, QA_DIR / "terminal-signal-coupler-sheet-4x.png", scale=4)
    save_gif(frames, ROOT / "terminal-signal-coupler-loop-64x64.gif")
    save_gif(frames, QA_DIR / "terminal-signal-coupler-loop-4x.gif", scale=4)

    outside_mask = ImageChops.invert(mask)
    outside_differences = []
    for frame in frames[1:]:
        difference = ImageChops.difference(frames[0], frame)
        difference.putalpha(ImageChops.multiply(difference.getchannel("A"), outside_mask))
        outside_differences.append(difference.getbbox())
    if any(box is not None for box in outside_differences):
        raise ValueError("Animation changed pixels outside the diagnostic membrane")

    print(
        json.dumps(
            {
                "source_dimensions": source.size,
                "logical_frame_dimensions": [LOGICAL_SIZE, LOGICAL_SIZE],
                "frame_count": len(frames),
                "screen_box": screen_box,
                "animated_mask_pixels": mask.histogram()[255],
                "durations_ms": FRAME_DURATIONS_MS,
                "machine_body_and_connections_stable_outside_membrane": True,
            },
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
