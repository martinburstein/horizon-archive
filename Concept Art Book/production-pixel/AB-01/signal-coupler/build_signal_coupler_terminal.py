from __future__ import annotations

import hashlib
import json
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageSequence


ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "terminal-signal-coupler-connected-no-tongue-tube-sheet-alpha.png"
FRAMES_DIR = ROOT / "frames"
QA_DIR = ROOT / "qa"
LOGICAL_SIZE = 64
GRID = (3, 2)
FRAME_DURATIONS_MS = [620, 170, 260, 240, 150, 500]
SCREEN_INTERIOR_POLYGON = [
    (17, 33),
    (34, 33),
    (36, 35),
    (36, 38),
    (34, 40),
    (17, 40),
    (15, 38),
    (15, 35),
]


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


def animation_mask() -> tuple[Image.Image, tuple[int, int, int, int]]:
    screen_mask = Image.new("L", (LOGICAL_SIZE, LOGICAL_SIZE), 0)
    ImageDraw.Draw(screen_mask).polygon(SCREEN_INTERIOR_POLYGON, fill=255)
    screen_box = screen_mask.getbbox()
    if screen_box is None:
        raise ValueError("Diagnostic membrane mask is empty")
    return screen_mask, screen_box


def stable_animation(cells: list[Image.Image], mask: Image.Image) -> list[Image.Image]:
    base = cells[0]
    return [Image.composite(cell, base, mask) for cell in cells]


def changed_pixel_mask(first: Image.Image, other: Image.Image) -> Image.Image:
    difference = ImageChops.difference(first, other)
    channels = difference.split()
    combined = ImageChops.lighter(channels[0], channels[1])
    combined = ImageChops.lighter(combined, channels[2])
    return ImageChops.lighter(combined, channels[3])


def body_hash(frame: Image.Image, screen_mask: Image.Image) -> str:
    body = frame.copy()
    body.paste((0, 0, 0, 0), (0, 0), screen_mask)
    return hashlib.sha256(body.tobytes()).hexdigest()


def validate_decoded_gif(path: Path, screen_mask: Image.Image, scale: int) -> None:
    gif = Image.open(path)
    decoded_frames = [frame.convert("RGBA") for frame in ImageSequence.Iterator(gif)]
    if len(decoded_frames) != len(FRAME_DURATIONS_MS):
        raise ValueError(f"{path.name} decoded to {len(decoded_frames)} frames")

    scaled_mask = screen_mask.resize(
        (LOGICAL_SIZE * scale, LOGICAL_SIZE * scale),
        Image.Resampling.NEAREST,
    )
    outside_mask = ImageChops.invert(scaled_mask)
    outside_differences = [
        ImageChops.multiply(changed_pixel_mask(decoded_frames[0], frame), outside_mask).getbbox()
        for frame in decoded_frames[1:]
    ]
    if any(box is not None for box in outside_differences):
        raise ValueError(f"{path.name} changes decoded pixels outside the diagnostic membrane")


def save_gif(frames: list[Image.Image], path: Path, scale: int = 1) -> None:
    rendered = [
        frame.resize((LOGICAL_SIZE * scale, LOGICAL_SIZE * scale), Image.Resampling.NEAREST)
        for frame in frames
    ]

    width, height = rendered[0].size
    atlas = Image.new("RGB", (width * len(rendered), height), (0, 0, 0))
    for index, frame in enumerate(rendered):
        opaque = Image.new("RGB", frame.size, (0, 0, 0))
        opaque.paste(frame.convert("RGB"), (0, 0), frame.getchannel("A"))
        atlas.paste(opaque, (index * width, 0))

    palette_source = atlas.quantize(
        colors=255,
        method=Image.Quantize.MEDIANCUT,
        dither=Image.Dither.NONE,
    )
    palette_values = palette_source.getpalette()[: 255 * 3]
    palette_colors = [
        tuple(palette_values[index : index + 3])
        for index in range(0, len(palette_values), 3)
    ]
    shared_palette = [0, 0, 0] + palette_values
    color_cache: dict[tuple[int, int, int], int] = {}

    def opaque_palette_index(color: tuple[int, int, int]) -> int:
        cached = color_cache.get(color)
        if cached is not None:
            return cached
        red, green, blue = color
        nearest = min(
            range(len(palette_colors)),
            key=lambda index: (
                (red - palette_colors[index][0]) ** 2
                + (green - palette_colors[index][1]) ** 2
                + (blue - palette_colors[index][2]) ** 2
            ),
        )
        shifted = nearest + 1
        color_cache[color] = shifted
        return shifted

    indexed_frames: list[Image.Image] = []
    for frame in rendered:
        rgb = frame.convert("RGB")
        alpha = frame.getchannel("A")
        indexed_pixels = bytearray()
        for color, alpha_value in zip(
            rgb.get_flattened_data(),
            alpha.get_flattened_data(),
            strict=True,
        ):
            indexed_pixels.append(0 if alpha_value < 128 else opaque_palette_index(color))
        stable = Image.frombytes("P", frame.size, bytes(indexed_pixels))
        stable.putpalette(shared_palette)
        indexed_frames.append(stable)

    indexed_frames[0].save(
        path,
        save_all=True,
        append_images=indexed_frames[1:],
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
    mask, screen_box = animation_mask()
    frames = stable_animation(cells, mask)

    for index, frame in enumerate(frames, start=1):
        frame.save(FRAMES_DIR / f"terminal-coupler-{index:02d}-64x64.png")

    frames[2].save(ROOT / "terminal-signal-coupler-available-64x64.png")
    save_sheet(frames, ROOT / "terminal-signal-coupler-sheet-192x128.png")
    save_sheet(frames, QA_DIR / "terminal-signal-coupler-sheet-4x.png", scale=4)
    save_gif(frames, ROOT / "terminal-signal-coupler-loop-64x64.gif")
    save_gif(frames, QA_DIR / "terminal-signal-coupler-loop-4x.gif", scale=4)
    mask.resize((LOGICAL_SIZE * 4, LOGICAL_SIZE * 4), Image.Resampling.NEAREST).save(
        QA_DIR / "terminal-signal-coupler-screen-mask-4x.png"
    )

    outside_mask = ImageChops.invert(mask)
    outside_differences = [
        ImageChops.multiply(changed_pixel_mask(frames[0], frame), outside_mask).getbbox()
        for frame in frames[1:]
    ]
    if any(box is not None for box in outside_differences):
        raise ValueError("Animation changed pixels outside the diagnostic membrane")

    body_hashes = [body_hash(frame, mask) for frame in frames]
    if len(set(body_hashes)) != 1:
        raise ValueError("The six animation frames do not share one byte-identical body")

    screen_hashes = []
    for frame in frames:
        screen = Image.new("RGBA", frame.size, (0, 0, 0, 0))
        screen.paste(frame, (0, 0), mask)
        screen_hashes.append(hashlib.sha256(screen.tobytes()).hexdigest())
    if len(set(screen_hashes)) != len(frames):
        raise ValueError("Each of the six screen states must be distinct")

    validate_decoded_gif(ROOT / "terminal-signal-coupler-loop-64x64.gif", mask, scale=1)
    validate_decoded_gif(QA_DIR / "terminal-signal-coupler-loop-4x.gif", mask, scale=4)

    print(
        json.dumps(
            {
                "source_dimensions": source.size,
                "logical_frame_dimensions": [LOGICAL_SIZE, LOGICAL_SIZE],
                "frame_count": len(frames),
                "screen_box": screen_box,
                "screen_polygon": SCREEN_INTERIOR_POLYGON,
                "animated_mask_pixels": mask.histogram()[255],
                "durations_ms": FRAME_DURATIONS_MS,
                "unique_body_hashes": len(set(body_hashes)),
                "body_sha256": body_hashes[0],
                "unique_screen_hashes": len(set(screen_hashes)),
                "only_screen_pixels_change": True,
                "decoded_logical_gif_body_locked": True,
                "decoded_qa_gif_body_locked": True,
            },
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
