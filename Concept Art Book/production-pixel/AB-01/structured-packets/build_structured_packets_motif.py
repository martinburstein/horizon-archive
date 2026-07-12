"""Author the AB-01 Structured Packets motif at 64x64 logical pixels."""

from pathlib import Path
from PIL import Image, ImageDraw, ImageOps

ROOT = Path(__file__).resolve().parent

P = {
    "void": (7, 8, 18),
    "deep": (15, 17, 27),
    "body": (43, 40, 50),
    "edge": (88, 76, 78),
    "violet0": (45, 27, 70),
    "violet2": (117, 73, 151),
    "violet3": (166, 119, 190),
    "cyan0": (44, 69, 91),
    "cyan1": (76, 112, 130),
    "cyan2": (128, 166, 169),
    "amber0": (100, 65, 34),
    "amber1": (171, 117, 54),
    "amber2": (226, 177, 91),
}


def backplate(d):
    d.polygon([(8, 58), (8, 15), (15, 6), (49, 6), (56, 15), (56, 58)], fill=P["deep"])
    d.polygon([(12, 55), (12, 17), (18, 10), (46, 10), (52, 17), (52, 55)], fill=P["body"])
    d.rectangle((12, 56, 52, 60), fill=P["deep"])
    d.rectangle((19, 55, 45, 56), fill=P["edge"])


def outer_socket(d):
    # Beveled continuous square socket.
    pts = [(18, 12), (46, 12), (51, 17), (51, 45), (46, 50), (18, 50), (13, 45), (13, 17), (18, 12)]
    d.line(pts, fill=P["violet2"], width=2)
    d.line([(19, 14), (45, 14)], fill=P["violet3"], width=1)


def middle_socket(d):
    # Thin square with doubled corner studs and open midpoint gates.
    c = P["cyan2"]
    for pts in [
        [(22, 29), (22, 21), (29, 21)],
        [(35, 21), (42, 21), (42, 29)],
        [(42, 35), (42, 42), (35, 42)],
        [(29, 42), (22, 42), (22, 35)],
    ]:
        d.line(pts, fill=c, width=2)
    for box in [(20, 20, 22, 22), (42, 20, 44, 22), (20, 42, 22, 44), (42, 42, 44, 44)]:
        d.rectangle(box, fill=P["cyan0"])


def inner_socket(d):
    # Compact checker-notched socket: distinct even without hue.
    d.rectangle((27, 27, 37, 37), outline=P["violet3"], width=1)
    d.rectangle((27, 27, 29, 29), fill=P["violet3"])
    d.rectangle((35, 27, 37, 29), fill=P["violet3"])
    d.rectangle((27, 35, 29, 37), fill=P["violet3"])
    d.rectangle((35, 35, 37, 37), fill=P["violet3"])
    d.rectangle((31, 31, 33, 33), fill=P["cyan1"])


def data_groove(d):
    # One continuous stepped path enters at the base, crosses all sockets, exits upper-right.
    path = [(10, 54), (16, 54), (16, 47), (20, 47), (20, 39), (24, 39),
            (24, 34), (28, 34), (28, 31), (32, 31), (32, 25), (39, 25),
            (39, 18), (47, 18), (47, 10), (55, 10)]
    d.line(path, fill=P["amber0"], width=3)
    d.line(path, fill=P["amber2"], width=1)
    for x, y in ((16, 47), (24, 34), (32, 25), (47, 18)):
        d.rectangle((x - 1, y - 1, x + 1, y + 1), fill=P["amber1"])


def motif(parts=("outer", "middle", "inner", "groove")):
    im = Image.new("RGBA", (64, 64), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    backplate(d)
    if "outer" in parts:
        outer_socket(d)
    if "middle" in parts:
        middle_socket(d)
    if "inner" in parts:
        inner_socket(d)
    if "groove" in parts:
        data_groove(d)
    return im


def main():
    (ROOT / "qa").mkdir(parents=True, exist_ok=True)
    asset = motif()
    asset.save(ROOT / "structured-packets-sockets-64x64.png", optimize=False)
    asset.resize((128, 128), Image.Resampling.NEAREST).save(ROOT / "qa" / "structured-packets-sockets-2x-128x128.png", optimize=False)
    ImageOps.grayscale(asset).save(ROOT / "qa" / "structured-packets-sockets-grayscale-64x64.png", optimize=False)

    strip = Image.new("RGB", (320, 64), P["void"])
    variants = [motif(), motif(("outer",)), motif(("middle",)), motif(("inner",)), motif(("groove",))]
    for i, tile in enumerate(variants):
        strip.paste(tile, (i * 64, 0), tile)
    strip.resize((640, 128), Image.Resampling.NEAREST).save(ROOT / "qa" / "socket-groove-isolation-2x-640x128.png", optimize=False)


if __name__ == "__main__":
    main()
