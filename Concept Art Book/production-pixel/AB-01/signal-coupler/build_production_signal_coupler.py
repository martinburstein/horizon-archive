from __future__ import annotations

import hashlib
import json
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageSequence


ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "terminal-signal-coupler-connected-no-tongue-tube-sheet-alpha.png"
MEADOW_SOURCE = ROOT.parents[3] / "Glass Meadow Example.png"
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


def draw_side_connections(scene: Image.Image) -> None:
    """Author continuous phase conduits from the coupler to both scene crops.

    The selected source already contains the collars and the first lengths of
    both side bundles. This body layer continues their perspective beneath the
    source object with uninterrupted substrate, then adds irregular service
    sleeves on top. Unlike the earlier repeated-alpha method, the sleeves never
    create transparent breaks in the load-bearing conduit.
    """
    draw = ImageDraw.Draw(scene)

    # Left bundle: a low four-lane bus travels beyond the left crop. Its final
    # section runs beneath the source object so the generated collar hides the
    # join instead of exposing a familiar loose cable end.
    left_outer = [(0, 183), (159, 183), (210, 193), (210, 216), (158, 224), (0, 219)]
    draw.polygon(left_outer, fill=(10, 15, 31, 255))
    draw.line([(0, 184), (159, 184), (208, 194)], fill=(93, 111, 149, 255), width=3)
    draw.line([(0, 218), (158, 222), (208, 215)], fill=(3, 5, 15, 255), width=4)
    for offset, color, width in (
        (0, (18, 97, 145, 255), 3),
        (7, (61, 174, 214, 255), 2),
        (14, (20, 82, 132, 255), 3),
        (21, (103, 203, 228, 255), 2),
    ):
        draw.line([(0, 190 + offset), (157, 190 + offset), (207, 198 + offset // 2)], fill=color, width=width)
    for x in (30, 83, 137):
        draw.polygon(
            [(x, 184), (x + 8, 184), (x + 11, 221), (x + 2, 221)],
            fill=(35, 39, 60, 255),
        )
        draw.line([(x + 2, 186), (x + 5, 218)], fill=(119, 126, 154, 255), width=2)

    # Right bundle: perspective drops toward the lower-right crop. The varied
    # sleeve spacing records maintenance phases without interrupting the bus.
    right_outer = [(430, 204), (468, 207), (640, 222), (640, 253), (466, 239), (430, 235)]
    draw.polygon(right_outer, fill=(9, 14, 29, 255))
    draw.line([(431, 205), (468, 209), (640, 224)], fill=(94, 112, 150, 255), width=3)
    draw.line([(431, 234), (466, 238), (640, 251)], fill=(3, 5, 14, 255), width=4)
    for offset, color, width in (
        (0, (21, 93, 143, 255), 3),
        (7, (71, 187, 221, 255), 2),
        (14, (18, 77, 126, 255), 3),
        (21, (111, 209, 230, 255), 2),
    ):
        draw.line(
            [(432, 211 + offset), (468, 213 + offset), (640, 228 + offset)],
            fill=color,
            width=width,
        )
    for x in (493, 556, 616):
        rise = (x - 468) // 12
        draw.polygon(
            [(x, 209 + rise), (x + 9, 210 + rise), (x + 9, 243 + rise), (x, 242 + rise)],
            fill=(34, 39, 61, 255),
        )
        draw.line([(x + 2, 211 + rise), (x + 2, 240 + rise)], fill=(121, 129, 156, 255), width=2)


def scene_frames(objects: list[Image.Image]) -> tuple[list[Image.Image], Image.Image]:
    screen_mask = object_mask()
    scene_mask = Image.new("L", SCENE_SIZE, 0)
    scene_mask.paste(screen_mask, OBJECT_ORIGIN)
    frames: list[Image.Image] = []
    for stable_object in objects:
        scene = Image.new("RGBA", SCENE_SIZE, (0, 0, 0, 0))
        draw_side_connections(scene)
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


def save_scene_qa(frame: Image.Image) -> None:
    """Save composition evidence without merging the overlay into world art."""
    meadow = Image.open(MEADOW_SOURCE).convert("RGBA")
    scale = max(SCENE_SIZE[0] / meadow.width, SCENE_SIZE[1] / meadow.height)
    resized = meadow.resize(
        (round(meadow.width * scale), round(meadow.height * scale)),
        Image.Resampling.LANCZOS,
    )
    left = (resized.width - SCENE_SIZE[0]) // 2
    top = (resized.height - SCENE_SIZE[1]) // 2
    background = resized.crop((left, top, left + SCENE_SIZE[0], top + SCENE_SIZE[1]))
    background.alpha_composite(frame)
    background.save(QA_DIR / "terminal-signal-coupler-meadow-composite-640x360.png")
    background.resize((320, 180), Image.Resampling.NEAREST).save(
        QA_DIR / "terminal-signal-coupler-meadow-composite-320x180.png"
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

    # These centerlines sit inside the authored load-bearing substrate rather
    # than decorative highlights. Every logical column must remain opaque from
    # the crop through the hidden join beneath the selected source object.
    alpha = frames[0].getchannel("A")
    left_continuity = all(alpha.getpixel((x, 202)) >= 128 for x in range(0, 211))
    right_continuity = all(alpha.getpixel((x, 224)) >= 128 for x in range(430, SCENE_SIZE[0]))
    if not left_continuity or not right_continuity:
        raise ValueError("An authored side conduit contains a transparent break")

    narrow = frames[0].resize((320, 180), Image.Resampling.NEAREST)
    narrow_alpha = narrow.getchannel("A")
    narrow_left_continuity = all(narrow_alpha.getpixel((x, 101)) >= 128 for x in range(0, 106))
    narrow_right_continuity = all(narrow_alpha.getpixel((x, 112)) >= 128 for x in range(215, 320))
    if not narrow_left_continuity or not narrow_right_continuity:
        raise ValueError("The 320 x 180 derivative breaks conduit continuity")

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
        "side_connections_are_continuous": True,
        "transparent_break_count": 0,
        "connection_continuity_scanlines": {
            "left_640x360": {"y": 202, "x": [0, 210]},
            "right_640x360": {"y": 224, "x": [430, 639]},
            "left_320x180": {"y": 101, "x": [0, 105]},
            "right_320x180": {"y": 112, "x": [215, 319]},
        },
        "narrow_derivative_dimensions": [320, 180],
        "narrow_derivative_resampling": "nearest-neighbor",
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
    narrow_still = frames[2].resize((320, 180), Image.Resampling.NEAREST)
    narrow_still.save(QA_DIR / "terminal-signal-coupler-available-320x180.png")
    save_scene_qa(frames[2])
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
