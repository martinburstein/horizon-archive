from __future__ import annotations

import json
from pathlib import Path

from PIL import Image, ImageChops


ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "terminal-signal-mineral-exploration-sheet-alpha.png"
FRAMES_DIR = ROOT / "frames"
QA_DIR = ROOT / "qa"
LOGICAL_SIZE = 64
GRID = (3, 2)
FRAME_DURATIONS_MS = [520, 180, 240, 220, 140, 420]


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
            subject.thumbnail((60, 60), Image.Resampling.NEAREST)

            canvas = Image.new("RGBA", (LOGICAL_SIZE, LOGICAL_SIZE), (0, 0, 0, 0))
            x = (LOGICAL_SIZE - subject.width) // 2
            y = LOGICAL_SIZE - subject.height - 2
            canvas.alpha_composite(subject, (x, y))
            cells.append(canvas)

    return cells


def warning_membrane_box(cells: list[Image.Image]) -> tuple[int, int, int, int]:
    union: tuple[int, int, int, int] | None = None
    for image in cells[1:5]:
        red_mask = Image.new("L", image.size, 0)
        red_pixels = red_mask.load()
        pixels = image.load()
        for y in range(image.height):
            for x in range(image.width):
                red, green, blue, alpha = pixels[x, y]
                if alpha >= 64 and red >= 72 and red >= green * 1.65 and red >= blue * 1.25:
                    red_pixels[x, y] = 255
        box = red_mask.getbbox()
        if box is None:
            continue
        union = box if union is None else (
            min(union[0], box[0]),
            min(union[1], box[1]),
            max(union[2], box[2]),
            max(union[3], box[3]),
        )

    if union is None:
        raise ValueError("Could not locate the warning membrane")

    return (
        max(0, union[0] - 2),
        max(0, union[1] - 2),
        min(LOGICAL_SIZE, union[2] + 2),
        min(LOGICAL_SIZE, union[3] + 2),
    )


def stable_animation(cells: list[Image.Image], screen_box: tuple[int, int, int, int]) -> list[Image.Image]:
    base = cells[0]
    frames: list[Image.Image] = []
    for cell in cells:
        frame = base.copy()
        frame.alpha_composite(cell.crop(screen_box), (screen_box[0], screen_box[1]))
        frames.append(frame)
    return frames


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
    screen_box = warning_membrane_box(cells)
    frames = stable_animation(cells, screen_box)

    for index, frame in enumerate(frames, start=1):
        frame.save(FRAMES_DIR / f"terminal-signal-{index:02d}-64x64.png")

    frames[2].save(ROOT / "terminal-signal-mineral-available-64x64.png")
    save_sheet(frames, ROOT / "terminal-signal-mineral-sheet-192x128.png")
    save_sheet(frames, QA_DIR / "terminal-signal-mineral-sheet-4x.png", scale=4)
    save_gif(frames, ROOT / "terminal-signal-loop-64x64.gif")
    save_gif(frames, QA_DIR / "terminal-signal-loop-4x.gif", scale=4)

    outside_differences = []
    screen_mask = Image.new("L", (LOGICAL_SIZE, LOGICAL_SIZE), 0)
    screen_mask.paste(255, screen_box)
    outside_mask = ImageChops.invert(screen_mask)
    for frame in frames[1:]:
        difference = ImageChops.difference(frames[0], frame).convert("RGBA")
        difference.putalpha(ImageChops.multiply(difference.getchannel("A"), outside_mask))
        outside_differences.append(difference.getbbox())

    if any(box is not None for box in outside_differences):
        raise ValueError("Animation changed pixels outside the warning membrane box")

    print(
        json.dumps(
            {
                "source_dimensions": source.size,
                "logical_frame_dimensions": [LOGICAL_SIZE, LOGICAL_SIZE],
                "frame_count": len(frames),
                "screen_box": screen_box,
                "durations_ms": FRAME_DURATIONS_MS,
                "body_pixels_stable_outside_screen": True,
            },
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
