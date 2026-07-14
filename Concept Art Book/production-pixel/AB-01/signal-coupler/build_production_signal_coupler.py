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

# These are the load-bearing centerlines of the two frozen field routes. They
# deliberately leave the familiar horizontal cable-tray grammar: the west
# route dives into a flush cultivation seam, while the east route changes
# depth, passes behind two glass growths, and branches into a mat contact.
LEFT_ROUTE_CENTERLINE = [
    (211, 204),
    (188, 207),
    (166, 218),
    (151, 233),
    (126, 242),
    (96, 249),
    (65, 257),
    (32, 264),
    (0, 268),
]
RIGHT_ROUTE_CENTERLINE = [
    (429, 220),
    (456, 223),
    (477, 232),
    (486, 246),
    (516, 253),
    (545, 247),
    (574, 253),
    (606, 244),
    (640, 248),
]
RIGHT_MAT_BRANCH = [(506, 251), (518, 266), (538, 281)]
LOCKED_CENTRAL_BODY_SHA256 = "dde04a431a528f5853632670bf624bf1cb0c4f361cafe73a8974121f605d27cc"
CULTIVATION_ORGAN_BOUNDS = {
    "trained_hollow_extrusion": (518, 204, 565, 260),
    "annealing_return_loop": (557, 220, 603, 261),
}

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


def draw_flush_growth_aperture(
    draw: ImageDraw.ImageDraw,
    x: int,
    floor_y: int,
    scale: int,
    phase: str,
) -> None:
    """Author one floor-level extrusion aperture without a pedestal or row grid.

    The skewed outer mat, nested pressure throat, and unequal capillary windows
    make the contact read as cultivated infrastructure. It is intentionally
    flush with the perfectly flat Meadow and has no human-facing controls.
    """
    outer = [
        (x - scale - 5, floor_y - 3),
        (x - 4, floor_y - 7),
        (x + scale + 4, floor_y - 5),
        (x + scale + 8, floor_y),
        (x + 3, floor_y + 5),
        (x - scale - 7, floor_y + 2),
    ]
    draw.polygon(outer, fill=(20, 27, 41, 238))
    draw.line(outer + [outer[0]], fill=(83, 93, 108, 230), width=1)

    # The amber-violet interior is silica feedstock visible through an open
    # pressure throat, not a lamp or status button.
    throat = [
        (x - scale, floor_y - 3),
        (x + 2, floor_y - 5),
        (x + scale + 1, floor_y - 2),
        (x + scale - 1, floor_y + 2),
        (x - 2, floor_y + 3),
        (x - scale - 2, floor_y),
    ]
    draw.polygon(throat, fill=(74, 54, 51, 245))
    throat_note = (161, 111, 59, 255) if phase == "trained" else (111, 78, 124, 255)
    draw.line(throat[:4], fill=throat_note, width=2)

    # Unequal trace windows imply state relationships rather than Cartesian
    # crop rows. They remain subordinate to the coupler membrane.
    if phase == "trained":
        draw.line([(x - scale - 12, floor_y + 1), (x - scale - 7, floor_y)], fill=(52, 111, 132, 220), width=2)
        draw.line([(x + scale + 7, floor_y - 1), (x + scale + 14, floor_y - 4)], fill=(92, 68, 43, 220), width=2)
    else:
        draw.line([(x - scale - 11, floor_y - 3), (x - scale - 6, floor_y - 1)], fill=(92, 68, 43, 220), width=2)
        draw.line([(x + scale + 7, floor_y), (x + scale + 11, floor_y + 3)], fill=(43, 105, 128, 220), width=2)


def draw_trained_extrusion(draw: ImageDraw.ImageDraw, x: int, floor_y: int) -> None:
    """Place a purpose-grown hollow conduit in front of the east route."""
    draw_flush_growth_aperture(draw, x, floor_y, 9, "trained")

    # A thick-walled, asymmetrically trained hollow tube. Its oblique open lip
    # is a process shape produced by the mat; it is neither a fantasy crystal
    # point nor a decorative spike.
    shell = [
        (x - 8, floor_y - 4),
        (x - 7, floor_y - 26),
        (x - 5, floor_y - 39),
        (x - 2, floor_y - 43),
        (x + 4, floor_y - 42),
        (x + 7, floor_y - 36),
        (x + 7, floor_y - 19),
        (x + 10, floor_y - 5),
    ]
    draw.polygon(shell, fill=(82, 111, 139, 178))
    draw.line(shell[:4], fill=(208, 224, 232, 245), width=2)
    draw.line(shell[4:], fill=(37, 57, 80, 240), width=2)

    # The open lumen and unequal lip expose wall thickness and prevent a solid
    # icicle read. A small trapped inclusion makes the fictional material feel
    # grown and stress-trained rather than machined from a perfect extrusion.
    draw.polygon(
        [(x - 1, floor_y - 39), (x + 2, floor_y - 40), (x + 4, floor_y - 36),
         (x + 3, floor_y - 21), (x, floor_y - 11), (x - 2, floor_y - 23)],
        fill=(20, 35, 56, 205),
    )
    draw.line([(x - 2, floor_y - 42), (x + 3, floor_y - 41), (x + 6, floor_y - 37)], fill=(225, 232, 235, 245), width=1)
    draw.line([(x - 4, floor_y - 31), (x + 5, floor_y - 28)], fill=(126, 91, 128, 245), width=2)
    draw.line([(x - 5, floor_y - 30), (x - 6, floor_y - 24)], fill=(170, 177, 193, 235), width=1)
    draw.point((x + 4, floor_y - 16), fill=(188, 130, 68, 255))
    draw.point((x - 3, floor_y - 19), fill=(202, 218, 228, 255))


def draw_annealing_loop(draw: ImageDraw.ImageDraw, x: int, floor_y: int) -> None:
    """Place a low trained return loop from a different stewardship phase."""
    draw_flush_growth_aperture(draw, x, floor_y, 8, "annealing")

    # Two unequal walls rise from one pressure throat and are fused by a low
    # return bridge. This is a harvested-component shape still in its training
    # aperture, not a sign, archway, or repeated crop-row marker.
    left_wall = [(x - 8, floor_y - 4), (x - 8, floor_y - 20), (x - 5, floor_y - 29), (x - 1, floor_y - 27), (x - 2, floor_y - 6)]
    right_wall = [(x + 2, floor_y - 5), (x + 3, floor_y - 23), (x + 7, floor_y - 27), (x + 9, floor_y - 18), (x + 9, floor_y - 4)]
    draw.polygon(left_wall, fill=(92, 119, 143, 180))
    draw.polygon(right_wall, fill=(70, 100, 128, 190))
    draw.line(left_wall[:3], fill=(201, 218, 229, 240), width=2)
    draw.line(right_wall[1:4], fill=(46, 66, 88, 245), width=2)
    draw.line([(x - 5, floor_y - 27), (x - 1, floor_y - 31), (x + 5, floor_y - 29), (x + 7, floor_y - 25)], fill=(128, 151, 171, 220), width=4)
    draw.line([(x - 4, floor_y - 28), (x, floor_y - 29), (x + 5, floor_y - 27)], fill=(218, 229, 234, 245), width=1)

    # A later amber anneal seam and a violet strain mote record two different
    # interventions without copying the coupler's repair-joint silhouettes.
    draw.line([(x - 7, floor_y - 13), (x - 2, floor_y - 15)], fill=(151, 109, 57, 255), width=2)
    draw.point((x + 5, floor_y - 18), fill=(136, 92, 139, 255))


def draw_cultivation_organs(draw: ImageDraw.ImageDraw) -> None:
    """Draw two deliberately non-repeating organs over the buried route."""
    draw_trained_extrusion(draw, 543, 252)
    draw_annealing_loop(draw, 580, 253)


def draw_side_connections(scene: Image.Image) -> None:
    """Author two asymmetric glass-ceramic continuities into the cultivated field.

    The selected source already owns the housing, collars, tongue, and screen.
    This frozen underlay keeps those pixels untouched. Broad exposed bundles
    quickly become low flush seams, visibly repaired by three unlike stewardship
    systems and occluded by the crop instead of floating across it.
    """
    draw = ImageDraw.Draw(scene)

    # West: the body-side collar compresses into two offset, flush entry
    # organs. Beyond them, only a shallow ceramic seam and two diagnostic
    # windows reveal the buried continuation toward the crop.
    draw.line(LEFT_ROUTE_CENTERLINE[:4], fill=(8, 13, 27, 255), width=21, joint="curve")
    draw.line(LEFT_ROUTE_CENTERLINE[2:], fill=(20, 27, 43, 238), width=9, joint="curve")
    draw.line(LEFT_ROUTE_CENTERLINE[3:], fill=(72, 82, 102, 220), width=2, joint="curve")
    draw.polygon(
        [(145, 220), (161, 218), (169, 226), (160, 239), (143, 237), (137, 229)],
        fill=(31, 37, 55, 255),
    )
    draw.line([(143, 225), (158, 223), (164, 228), (157, 235), (144, 233)], fill=(148, 163, 184, 255), width=2)
    draw.polygon(
        [(118, 236), (132, 233), (140, 240), (132, 248), (116, 249), (109, 243)],
        fill=(41, 46, 63, 245),
    )
    draw.line([(116, 240), (130, 237), (136, 241), (129, 245), (116, 246)], fill=(91, 111, 136, 255), width=2)
    # Old pearl knuckle: an uneven sealed repair, not a repeated clamp.
    draw.polygon([(84, 246), (96, 241), (108, 246), (103, 255), (90, 257), (80, 252)], fill=(88, 92, 113, 255))
    draw.line([(84, 249), (96, 245), (103, 248), (99, 253), (89, 254)], fill=(170, 176, 194, 255), width=2)
    # Two short trace windows disclose continuity without making a glowing rail.
    draw.line([(56, 257), (70, 253)], fill=(38, 116, 145, 255), width=2)
    draw.line([(8, 267), (27, 264)], fill=(55, 128, 150, 255), width=2)
    draw.line([(0, 272), (35, 268), (66, 261), (97, 253)], fill=(91, 68, 43, 190), width=2)

    # East: a shallow depth-changing route leaves the collar, passes behind two
    # cultivated shoots, and forks once into a flush growth-mat relationship.
    draw.line(RIGHT_ROUTE_CENTERLINE[:4], fill=(8, 13, 28, 255), width=20, joint="curve")
    draw.line(RIGHT_ROUTE_CENTERLINE[2:], fill=(23, 29, 45, 238), width=10, joint="curve")
    draw.line(RIGHT_ROUTE_CENTERLINE[3:], fill=(76, 88, 106, 220), width=2, joint="curve")
    draw.line(RIGHT_MAT_BRANCH, fill=(17, 23, 38, 245), width=8, joint="curve")
    draw.line(RIGHT_MAT_BRANCH[1:], fill=(77, 91, 108, 230), width=2, joint="curve")

    # Middle-period violet stitch and later amber lattice are intentionally
    # different technologies and spacing from the west pearl repair.
    draw.polygon([(501, 246), (511, 244), (521, 249), (518, 258), (505, 260), (497, 254)], fill=(54, 41, 67, 255))
    draw.line([(501, 250), (510, 247), (517, 251), (514, 256), (505, 257)], fill=(120, 80, 126, 255), width=2)
    draw.polygon([(594, 238), (607, 237), (616, 243), (612, 251), (598, 253), (589, 247)], fill=(54, 50, 53, 255))
    draw.line([(595, 242), (605, 240), (612, 244), (608, 249), (598, 250)], fill=(151, 113, 59, 255), width=2)
    draw.line([(626, 247), (640, 249)], fill=(42, 119, 145, 255), width=2)

    # The branch terminates in a flat non-Cartesian distribution contact: no
    # pedestal, switch, label, or human-row alignment. Offset underfloor
    # windows tie it to the trained extrusion without drawing a surface cable.
    draw.polygon([(524, 278), (537, 273), (551, 279), (548, 287), (532, 290), (518, 285)], fill=(25, 31, 44, 245))
    draw.line([(523, 282), (536, 277), (546, 281), (542, 286), (531, 287)], fill=(112, 127, 143, 255), width=2)
    draw.line([(529, 290), (548, 287)], fill=(94, 68, 42, 210), width=2)
    draw.line([(540, 276), (545, 269)], fill=(41, 105, 128, 210), width=2)
    draw.line([(546, 264), (545, 259)], fill=(91, 68, 43, 210), width=2)

    # Two unequal cultivated organs change the route's depth and tie it to the
    # Meadow's material-processing occupation. One is a hollow trained
    # extrusion; the other is a low annealing loop. Their apertures, wall
    # thickness, stress marks, and stewardship scars are authored anatomy,
    # replacing the former generic overlay spikes.
    draw_cultivation_organs(draw)


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


def route_mask(size: tuple[int, int]) -> Image.Image:
    mask = Image.new("L", SCENE_SIZE, 0)
    draw = ImageDraw.Draw(mask)
    draw.line(LEFT_ROUTE_CENTERLINE, fill=255, width=1)
    draw.line(RIGHT_ROUTE_CENTERLINE, fill=255, width=1)
    draw.line(RIGHT_MAT_BRANCH, fill=255, width=1)
    if size != SCENE_SIZE:
        mask = mask.resize(size, Image.Resampling.NEAREST)
    return mask


def transparent_break_count(frame: Image.Image, mask: Image.Image) -> int:
    alpha = frame.getchannel("A")
    return sum(
        1
        for alpha_value, mask_value in zip(
            alpha.get_flattened_data(), mask.get_flattened_data(), strict=True
        )
        if mask_value and alpha_value < 128
    )


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


def cultivation_organ_layer() -> Image.Image:
    layer = Image.new("RGBA", SCENE_SIZE, (0, 0, 0, 0))
    draw_cultivation_organs(ImageDraw.Draw(layer))
    return layer


def cultivation_organ_metrics() -> dict[str, dict[str, object]]:
    layer = cultivation_organ_layer()
    metrics: dict[str, dict[str, object]] = {}
    for name, bounds in CULTIVATION_ORGAN_BOUNDS.items():
        crop = layer.crop(bounds)
        opaque_pixels = sum(1 for value in crop.getchannel("A").get_flattened_data() if value >= 128)
        material_colors = {
            rgba[:3]
            for rgba in crop.get_flattened_data()
            if rgba[3] >= 128
        }
        if opaque_pixels < 200:
            raise ValueError(f"Cultivation organ {name} lacks a reviewable authored silhouette")
        if len(material_colors) < 8:
            raise ValueError(f"Cultivation organ {name} lacks a convincing material ramp")
        metrics[name] = {
            "bounds": list(bounds),
            "opaque_pixels": opaque_pixels,
            "material_color_count": len(material_colors),
            "flush_growth_aperture": True,
            "purpose_shaped_hollow_glass": True,
        }
    return metrics


def save_cultivation_qa() -> None:
    layer = cultivation_organ_layer()
    crop_bounds = (514, 200, 607, 265)
    isolation = layer.crop(crop_bounds)
    isolation.resize(
        (isolation.width * 4, isolation.height * 4),
        Image.Resampling.NEAREST,
    ).save(QA_DIR / "terminal-signal-coupler-cultivation-organs-isolation-4x.png")


def validate(
    frames: list[Image.Image],
    scene_mask: Image.Image,
    gif_path: Path,
    detail_metrics: list[dict[str, object]],
    objects: list[Image.Image],
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

    central_body_sha256 = body_hash(objects[0], object_mask())
    if central_body_sha256 != LOCKED_CENTRAL_BODY_SHA256:
        raise ValueError("The approved central coupler body changed during route authoring")

    native_route_mask = route_mask(SCENE_SIZE)
    native_breaks = transparent_break_count(frames[0], native_route_mask)
    narrow = frames[0].resize((320, 180), Image.Resampling.NEAREST)
    narrow_route_mask = route_mask((320, 180))
    narrow_breaks = transparent_break_count(narrow, narrow_route_mask)
    if native_breaks or narrow_breaks:
        raise ValueError(
            f"An authored field route contains transparent breaks: native={native_breaks}, narrow={narrow_breaks}"
        )

    organ_metrics = cultivation_organ_metrics()

    return {
        "source_dimensions": list(Image.open(SOURCE).size),
        "production_dimensions": list(SCENE_SIZE),
        "object_source_box": [OBJECT_ORIGIN[0], OBJECT_ORIGIN[1], OBJECT_SIZE, OBJECT_SIZE],
        "frame_count": 6,
        "durations_ms": FRAME_DURATIONS_MS,
        "animated_mask_pixels": scene_mask.histogram()[255],
        "unique_body_hashes": 1,
        "body_sha256": body_hashes[0],
        "central_coupler_body_sha256": central_body_sha256,
        "central_coupler_body_lock_sha256": LOCKED_CENTRAL_BODY_SHA256,
        "central_coupler_body_unchanged": True,
        "decoded_gif_unique_body_hashes": 1,
        "unique_screen_hashes": 6,
        "only_screen_pixels_change": True,
        "side_connections_reach_scene_edges": True,
        "side_connections_are_continuous": True,
        "transparent_break_count": native_breaks + narrow_breaks,
        "connection_continuity_paths": {
            "left_native": LEFT_ROUTE_CENTERLINE,
            "right_native": RIGHT_ROUTE_CENTERLINE,
            "right_mat_branch_native": RIGHT_MAT_BRANCH,
            "native_breaks": native_breaks,
            "narrow_breaks": narrow_breaks,
        },
        "field_integration": {
            "route_grammar": "asymmetric partly buried glass-ceramic",
            "flush_entry_collars": 2,
            "crop_occlusions": 2,
            "flush_growth_mat_contacts": 1,
            "authored_cultivation_organs": ["trained hollow extrusion", "annealing return loop"],
            "visible_extrusion_apertures": 2,
            "visible_material_process_cues": [
                "open pressure throats",
                "variable wall thickness",
                "stress-training seams",
                "trapped inclusions",
                "underfloor feed windows",
            ],
            "repair_joint_families": ["pearl knuckle", "violet stitch", "amber lattice"],
            "parallel_cyan_tray_runs": 0,
            "regular_repeated_clamps": 0,
            "generic_spike_occluders": 0,
            "cultivation_organ_metrics": organ_metrics,
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
    save_cultivation_qa()
    gif_path = OUTPUT / "terminal-signal-coupler-loop-640x360.gif"
    save_gif(frames, gif_path)
    scene_mask.save(QA_DIR / "terminal-signal-coupler-screen-mask-640x360.png")

    manifest = validate(frames, scene_mask, gif_path, detail_metrics, objects)
    (OUTPUT / "terminal-signal-coupler-production-manifest.json").write_text(
        json.dumps(manifest, indent=2) + "\n",
        encoding="utf-8",
    )
    print(json.dumps(manifest, indent=2))


if __name__ == "__main__":
    main()
