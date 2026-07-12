"""Author the AB-01 Information Extraction motif at 64x64 logical pixels."""

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
    d.polygon([(4, 60), (5, 8), (13, 3), (51, 3), (59, 9), (60, 60)], fill=P["deep"])
    d.polygon([(8, 57), (9, 11), (16, 7), (48, 7), (56, 11), (56, 57)], fill=P["body"])
    d.rectangle((8, 58, 56, 62), fill=P["deep"])
    d.rectangle((18, 57, 46, 58), fill=P["edge"])


def channel(d, points, color="amber0", center="amber1", width=3):
    d.line(points, fill=P[color], width=width)
    d.line(points, fill=P[center], width=1)


def document_port(d):
    d.rectangle((7, 7, 18, 17), outline=P["violet2"], width=2)
    d.rectangle((10, 10, 15, 11), fill=P["violet3"])
    d.rectangle((10, 14, 12, 15), fill=P["violet0"])
    d.rectangle((14, 14, 16, 15), fill=P["violet0"])
    channel(d, [(18, 12), (25, 12)])


def image_port(d):
    for pts in [[(8, 24), (8, 20), (12, 20)], [(14, 20), (18, 20), (18, 24)],
                [(18, 26), (18, 30), (14, 30)], [(12, 30), (8, 30), (8, 26)]]:
        d.line(pts, fill=P["cyan2"], width=2)
    d.rectangle((12, 24, 14, 26), fill=P["cyan0"])
    channel(d, [(18, 25), (25, 25)])


def audio_port(d):
    d.rectangle((7, 33, 18, 42), outline=P["violet0"], width=1)
    for x, top, bottom in ((9, 36, 39), (12, 34, 41), (15, 35, 40)):
        d.rectangle((x, top, x + 1, bottom), fill=P["violet3"])
    channel(d, [(18, 38), (25, 38)])


def video_port(d):
    d.rectangle((7, 46, 18, 55), outline=P["cyan2"], width=2)
    d.rectangle((9, 48, 16, 53), outline=P["cyan0"], width=1)
    d.rectangle((6, 48, 7, 49), fill=P["cyan1"])
    d.rectangle((6, 52, 7, 53), fill=P["cyan1"])
    channel(d, [(18, 51), (25, 51)])


def schema_lattice(d):
    # Compact connected grid; cross-ties are extraction slots, not text rows.
    for x in (25, 32, 39):
        channel(d, [(x, 9), (x, 51)])
    for y in (12, 25, 38, 51):
        channel(d, [(25, y), (39, y)])
    for x, y in ((28, 16), (35, 29), (28, 42)):
        d.rectangle((x, y, x + 2, y + 2), fill=P["amber2"])


def null_socket(d):
    # Intentional empty/missing socket with one asymmetric notch.
    channel(d, [(32, 51), (32, 54)])
    d.rectangle((27, 53, 37, 62), outline=P["amber0"], width=2)
    d.rectangle((29, 55, 35, 61), fill=P["void"])
    d.rectangle((34, 52, 37, 55), fill=P["body"])
    d.rectangle((33, 53, 35, 54), fill=P["amber1"])


def value_channel(d):
    channel(d, [(39, 25), (55, 25)])
    d.rectangle((54, 20, 62, 30), outline=P["amber2"], width=2)
    d.rectangle((57, 23, 60, 27), fill=P["amber1"])


def evidence_return(d):
    # Separate paired rail returns below the solid value channel.
    d.line([(39, 39), (51, 39), (51, 34), (59, 34)], fill=P["cyan0"], width=2)
    d.line([(39, 42), (54, 42), (54, 37), (59, 37)], fill=P["cyan2"], width=1)
    d.rectangle((57, 32, 61, 34), fill=P["cyan1"])
    d.rectangle((57, 37, 61, 39), fill=P["cyan2"])


def rejected_spur(d):
    # Invented value breaks before an isolated fracture; it cannot enter output.
    channel(d, [(39, 12), (47, 12)])
    d.line([(52, 9), (55, 12), (52, 15), (58, 15), (61, 12)], fill=P["violet3"], width=2)
    d.rectangle((48, 10, 51, 14), fill=P["body"])


def motif(parts=("document", "image", "audio", "video", "lattice", "null", "value", "evidence", "reject")):
    im = Image.new("RGBA", (64, 64), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    plate(d)
    if "lattice" in parts: schema_lattice(d)
    if "document" in parts: document_port(d)
    if "image" in parts: image_port(d)
    if "audio" in parts: audio_port(d)
    if "video" in parts: video_port(d)
    if "null" in parts: null_socket(d)
    if "value" in parts: value_channel(d)
    if "evidence" in parts: evidence_return(d)
    if "reject" in parts: rejected_spur(d)
    return im


def main():
    (ROOT / "qa").mkdir(parents=True, exist_ok=True)
    asset = motif()
    asset.save(ROOT / "information-extraction-lattice-64x64.png", optimize=False)
    asset.resize((128, 128), Image.Resampling.NEAREST).save(ROOT / "qa" / "information-extraction-lattice-2x-128x128.png", optimize=False)
    ImageOps.grayscale(asset).save(ROOT / "qa" / "information-extraction-lattice-grayscale-64x64.png", optimize=False)
    names = ["document", "image", "audio", "video", "lattice", "null", "value", "evidence", "reject"]
    strip = Image.new("RGB", (640, 64), P["void"])
    strip.paste(asset, (0, 0), asset)
    for i, name in enumerate(names, start=1):
        tile = motif((name,))
        strip.paste(tile, (i * 64, 0), tile)
    strip.resize((1280, 128), Image.Resampling.NEAREST).save(ROOT / "qa" / "component-isolation-2x-1280x128.png", optimize=False)


if __name__ == "__main__":
    main()
