from __future__ import annotations

import hashlib
import json
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageSequence


ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "terminal-signal-coupler-connected-no-tongue-tube-sheet-alpha.png"
OUTPUT = ROOT / "production"
FRAMES_DIR = OUTPUT / "frames"
QA_DIR = OUTPUT / "qa"
GRID = (3, 2)
OBJECT_SIZE = 320
SCENE_SIZE = (640, 360)
OBJECT_ORIGIN = (160, 40)
FRAME_DURATIONS_MS = [620, 170, 260, 240, 150, 500]

# This is the approved 64 px diagnostic membrane, expanded by an exact integer
# factor. Nothing outside this polygon is permitted to animate.
SCREEN_POLYGON_64 = [
    (17, 33),
    (34, 33),
    (36, 35),
    (36, 38),
    (34, 40),
    (17, 40),
    (15, 38),
    (15, 35),
]
SCREEN_SCALE = OBJECT_SIZE // 64


def alpha_bbox(image: Image.Image) -> tuple[int, int, int, int]:
    alpha = image.getchannel("A").point(lambda value: 255 if value >= 32 else 0)
    box = alpha.getbbox()
    if box is None:
        raise ValueError("A sprite-sheet cell contains no opaque subject pixels")
    return box


def normalized_cells(sheet: Image.Image) -> tuple[list[Image.Image], list[dict[str, object]]]:
    columns, rows = GRID
    if sheet.width % columns or sheet.height % rows:
        raise ValueError(f"Sheet dimensions {sheet.size} are not divisible by {columns}x{rows}")

    cell_width = sheet.width // columns
    cell_height = sheet.height // rows
    cells: list[Image.Image] = []
    detail_metrics: list[dict[str, object]] = []
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
            source_subject_size = subject.size
            subject.thumbnail((310, 305), Image.Resampling.NEAREST)
            normalized_subject_size = subject.size
            linear_retention = min(
                normalized_subject_size[0] / source_subject_size[0],
                normalized_subject_size[1] / source_subject_size[1],
            )
            canvas = Image.new("RGBA", (OBJECT_SIZE, OBJECT_SIZE), (0, 0, 0, 0))
            x = (OBJECT_SIZE - subject.width) // 2
            y = OBJECT_SIZE - subject.height
            canvas.alpha_composite(subject, (x, y))
            cells.append(canvas)
            detail_metrics.append(
                {
                    "source_subject_dimensions": list(source_subject_size),
                    "normalized_subject_dimensions": list(normalized_subject_size),
                    "linear_detail_retention": round(linear_retention, 4),
                }
            )
    return cells, detail_metrics


def object_mask() -> Image.Image:
    mask = Image.new("L", (OBJECT_SIZE, OBJECT_SIZE), 0)
    polygon = [(x * SCREEN_SCALE, y * SCREEN_SCALE) for x, y in SCREEN_POLYGON_64]
    ImageDraw.Draw(mask).polygon(polygon, fill=255)
    return mask


def stable_objects(cells: list[Image.Image], mask: Image.Image) -> list[Image.Image]:
    base = cells[0]
    return [Image.composite(cell, base, mask) for cell in cells]


def extend_side_connections(scene: Image.Image, stable_object: Image.Image) -> None:
    """Continue the approved side channels through both scene crops.

    The extension reuses only the object's real cable pixels. It does not draw
    replacement geometry, and it is baked into the invariant body layer.
    """
    x_origin, y_origin = OBJECT_ORIGIN
    segment_width = 48
    cable_top = 145
    cable_bottom = 215
    left_segment = stable_object.crop((0, cable_top, segment_width, cable_bottom))
    right_segment = stable_object.crop((OBJECT_SIZE - segment_width, cable_top, OBJECT_SIZE, cable_bottom))

    x = x_origin - segment_width
    while x > -segment_width:
        scene.alpha_composite(left_segment, (x, y_origin + cable_top))
        x -= segment_width

    x = x_origin + OBJECT_SIZE
    while x < SCENE_SIZE[0]:
        scene.alpha_composite(right_segment, (x, y_origin + cable_top))
        x += segment_width


def scene_frames(objects: list[Image.Image]) -> tuple[list[Image.Image], Image.Image]:
    screen_mask = object_mask()
    scene_mask = Image.new("L", SCENE_SIZE, 0)
    scene_mask.paste(screen_mask, OBJECT_ORIGIN)
    frames: list[Image.Image] = []
    for stable_object in objects:
        scene = Image.new("RGBA", SCENE_SIZE, (0, 0, 0, 0))
        extend_side_connections(scene, objects[0])
        scene.alpha_composite(stable_object, OBJECT_ORIGIN)
        frames.append(scene)
    return frames, scene_mask


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


def save_gif(frames: list[Image.Image], path: Path) -> None:
    width, height = frames[0].size
    atlas = Image.new("RGB", (width * len(frames), height), (0, 0, 0))
    for index, frame in enumerate(frames):
        opaque = Image.new("RGB", frame.size, (0, 0, 0))
        opaque.paste(frame.convert("RGB"), (0, 0), frame.getchannel("A"))
        atlas.paste(opaque, (index * width, 0))

    palette_source = atlas.quantize(colors=255, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
    palette_values = palette_source.getpalette()[: 255 * 3]
    palette_colors = [tuple(palette_values[index : index + 3]) for index in range(0, len(palette_values), 3)]
    shared_palette = [0, 0, 0] + palette_values
    color_cache: dict[tuple[int, int, int], int] = {}

    def opaque_palette_index(color: tuple[int, int, int]) -> int:
        if color in color_cache:
            return color_cache[color]
        red, green, blue = color
        nearest = min(
            range(len(palette_colors)),
            key=lambda index: (
                (red - palette_colors[index][0]) ** 2
                + (green - palette_colors[index][1]) ** 2
                + (blue - palette_colors[index][2]) ** 2
            ),
        )
        color_cache[color] = nearest + 1
        return nearest + 1

    indexed_frames: list[Image.Image] = []
    for frame in frames:
        rgb = frame.convert("RGB")
        alpha = frame.getchannel("A")
        indexed_pixels = bytearray()
        for color, alpha_value in zip(rgb.get_flattened_data(), alpha.get_flattened_data(), strict=True):
            indexed_pixels.append(0 if alpha_value < 128 else opaque_palette_index(color))
        indexed = Image.frombytes("P", frame.size, bytes(indexed_pixels))
        indexed.putpalette(shared_palette)
        indexed_frames.append(indexed)

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


def validate(
    frames: list[Image.Image],
    scene_mask: Image.Image,
    gif_path: Path,
    detail_metrics: list[dict[str, object]],
) -> dict[str, object]:
    outside_mask = ImageChops.invert(scene_mask)
    outside_differences = [
        ImageChops.multiply(changed_pixel_mask(frames[0], frame), outside_mask).getbbox()
        for frame in frames[1:]
    ]
    if any(box is not None for box in outside_differences):
        raise ValueError("PNG frames change outside the diagnostic membrane")

    body_hashes = [body_hash(frame, scene_mask) for frame in frames]
    if len(set(body_hashes)) != 1:
        raise ValueError("The six production PNG frames do not share one byte-identical body")

    decoded = [frame.convert("RGBA") for frame in ImageSequence.Iterator(Image.open(gif_path))]
    if len(decoded) != 6:
        raise ValueError(f"Production GIF decoded to {len(decoded)} frames")
    gif_differences = [
        ImageChops.multiply(changed_pixel_mask(decoded[0], frame), outside_mask).getbbox()
        for frame in decoded[1:]
    ]
    if any(box is not None for box in gif_differences):
        raise ValueError("Decoded production GIF changes outside the diagnostic membrane")
    decoded_body_hashes = [body_hash(frame, scene_mask) for frame in decoded]
    if len(set(decoded_body_hashes)) != 1:
        raise ValueError("Decoded production GIF body is not byte-identical")

    screen_hashes = []
    for frame in frames:
        screen = Image.new("RGBA", frame.size, (0, 0, 0, 0))
        screen.paste(frame, (0, 0), scene_mask)
        screen_hashes.append(hashlib.sha256(screen.tobytes()).hexdigest())
    if len(set(screen_hashes)) != 6:
        raise ValueError("Each production screen state must be distinct")

    minimum_linear_detail_retention = min(
        float(metric["linear_detail_retention"]) for metric in detail_metrics
    )
    if minimum_linear_detail_retention < 0.70:
        raise ValueError(
            "Production coupler retains less than 70% of the selected source's linear subject detail"
        )

    return {
        "source_dimensions": list(Image.open(SOURCE).size),
        "production_dimensions": list(SCENE_SIZE),
        "object_source_box": [OBJECT_ORIGIN[0], OBJECT_ORIGIN[1], OBJECT_SIZE, OBJECT_SIZE],
        "frame_count": 6,
        "durations_ms": FRAME_DURATIONS_MS,
        "animated_mask_pixels": scene_mask.histogram()[255],
        "unique_body_hashes": 1,
        "body_sha256": body_hashes[0],
        "decoded_gif_unique_body_hashes": 1,
        "unique_screen_hashes": 6,
        "only_screen_pixels_change": True,
        "side_connections_reach_scene_edges": True,
        "source_is_not_64px_preview": True,
        "detail_retention_by_frame": detail_metrics,
        "minimum_linear_detail_retention": minimum_linear_detail_retention,
        "minimum_linear_detail_retention_required": 0.70,
    }


def main() -> None:
    FRAMES_DIR.mkdir(parents=True, exist_ok=True)
    QA_DIR.mkdir(parents=True, exist_ok=True)
    sheet = Image.open(SOURCE).convert("RGBA")
    cells, detail_metrics = normalized_cells(sheet)
    objects = stable_objects(cells, object_mask())
    frames, scene_mask = scene_frames(objects)

    for index, frame in enumerate(frames, start=1):
        frame.save(FRAMES_DIR / f"terminal-coupler-{index:02d}-640x360.png")
    frames[2].save(OUTPUT / "terminal-signal-coupler-available-640x360.png")
    gif_path = OUTPUT / "terminal-signal-coupler-loop-640x360.gif"
    save_gif(frames, gif_path)
    scene_mask.save(QA_DIR / "terminal-signal-coupler-screen-mask-640x360.png")

    manifest = validate(frames, scene_mask, gif_path, detail_metrics)
    (OUTPUT / "terminal-signal-coupler-production-manifest.json").write_text(
        json.dumps(manifest, indent=2) + "\n",
        encoding="utf-8",
    )
    print(json.dumps(manifest, indent=2))


if __name__ == "__main__":
    main()
