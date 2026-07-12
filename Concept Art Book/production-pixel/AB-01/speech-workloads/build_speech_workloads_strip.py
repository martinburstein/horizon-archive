"""Author four AB-01 Speech Workload tiles at 64x64 logical pixels each."""

from pathlib import Path
from PIL import Image, ImageDraw, ImageOps

ROOT = Path(__file__).resolve().parent

P = {
    "void": (7, 8, 18), "deep": (15, 17, 27), "body": (43, 40, 50),
    "edge": (88, 76, 78), "violet0": (45, 27, 70), "violet2": (117, 73, 151),
    "violet3": (166, 119, 190), "cyan0": (44, 69, 91), "cyan1": (76, 112, 130),
    "cyan2": (128, 166, 169), "amber0": (100, 65, 34), "amber1": (171, 117, 54),
    "amber2": (226, 177, 91),
}


def plate(d):
    d.polygon([(5, 59), (6, 10), (14, 4), (50, 4), (58, 11), (59, 59)], fill=P["deep"])
    d.polygon([(9, 56), (10, 13), (17, 8), (47, 8), (55, 13), (55, 56)], fill=P["body"])
    d.rectangle((9, 57, 55, 61), fill=P["deep"])
    d.rectangle((18, 56, 46, 57), fill=P["edge"])


def channel(d, points, direction):
    d.line(points, fill=P["amber0"], width=5)
    d.line(points, fill=P["amber2"], width=1)
    x, y = direction
    if y < 0:
        d.polygon([(x - 2, 37), (x, 34), (x + 2, 37)], fill=P["amber1"])
    elif x > 0:
        d.polygon([(33, y - 2), (36, y), (33, y + 2)], fill=P["amber1"])


def voice_port(d, x, y, outward=False):
    # Three stepped wave teeth, inward or outward, not an audio-brand icon.
    step = -1 if outward else 1
    d.rectangle((x, y - 7, x + 2, y + 7), fill=P["violet2"])
    x0, x1 = sorted((x + 4 * step, x + 5 * step))
    d.rectangle((x0, y - 5, x1, y + 5), fill=P["violet3"])
    x0, x1 = sorted((x + 7 * step, x + 8 * step))
    d.rectangle((x0, y - 3, x1, y + 3), fill=P["violet2"])


def text_register(d, x, y):
    d.rectangle((x, y, x + 13, y + 15), outline=P["cyan2"], width=2)
    d.rectangle((x + 3, y + 4, x + 10, y + 5), fill=P["cyan1"])
    d.rectangle((x + 3, y + 8, x + 9, y + 9), fill=P["cyan2"])
    d.rectangle((x + 3, y + 12, x + 7, y + 13), fill=P["cyan0"])


def model_aperture(d, x, y):
    d.polygon([(x, y + 10), (x + 2, y), (x + 6, y + 7), (x + 9, y + 1),
               (x + 12, y + 10), (x + 8, y + 15), (x + 4, y + 15)], fill=P["violet2"])
    d.rectangle((x + 5, y + 8, x + 7, y + 10), fill=P["void"])


def response_socket(d, x, y):
    d.rectangle((x, y, x + 11, y + 11), outline=P["cyan2"], width=2)
    d.rectangle((x + 3, y + 3, x + 8, y + 8), fill=P["cyan0"])
    d.rectangle((x + 9, y + 4, x + 12, y + 7), fill=P["cyan2"])


def tile(kind):
    im = Image.new("RGBA", (64, 64), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    plate(d)
    if kind == "recognition":
        voice_port(d, 12, 31, outward=False)
        text_register(d, 42, 23)
        channel(d, [(20, 31), (42, 31)], (1, 31))
    elif kind == "synthesis":
        text_register(d, 10, 23)
        voice_port(d, 52, 31, outward=True)
        channel(d, [(23, 31), (44, 31)], (1, 31))
    elif kind == "multimodal":
        voice_port(d, 11, 42, outward=False)
        model_aperture(d, 27, 25)
        response_socket(d, 45, 12)
        channel(d, [(19, 42), (33, 42), (33, 34), (45, 34), (45, 23), (50, 23)], (33, -1))
    elif kind == "cancelled":
        # Two capped halves and a displaced break block: intentionally disconnected.
        d.line([(10, 31), (27, 31)], fill=P["amber0"], width=5)
        d.line([(10, 31), (27, 31)], fill=P["amber2"], width=1)
        d.rectangle((25, 27, 28, 35), fill=P["violet3"])
        d.line([(37, 31), (54, 31)], fill=P["amber0"], width=5)
        d.line([(37, 31), (54, 31)], fill=P["amber2"], width=1)
        d.rectangle((36, 27, 39, 35), fill=P["violet3"])
        d.rectangle((30, 21, 34, 25), fill=P["edge"])
        d.rectangle((30, 38, 34, 42), fill=P["edge"])
    return im


def main():
    (ROOT / "qa").mkdir(parents=True, exist_ok=True)
    kinds = ["recognition", "synthesis", "multimodal", "cancelled"]
    strip = Image.new("RGB", (256, 64), P["void"])
    for i, kind in enumerate(kinds):
        part = tile(kind)
        strip.paste(part, (i * 64, 0), part)
    strip.save(ROOT / "speech-workloads-1x-256x64.png", optimize=False)
    strip.resize((512, 128), Image.Resampling.NEAREST).save(ROOT / "qa" / "speech-workloads-2x-512x128.png", optimize=False)
    strip.resize((512, 128), Image.Resampling.NEAREST).save(ROOT / "qa" / "speech-workloads-isolation-2x-512x128.png", optimize=False)
    ImageOps.grayscale(strip).save(ROOT / "qa" / "speech-workloads-grayscale-256x64.png", optimize=False)


if __name__ == "__main__":
    main()
