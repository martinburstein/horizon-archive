"""Author the AB-01 Text Analysis motif at 64x64 logical pixels."""

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
    d.polygon([(9, 56), (10, 12), (17, 8), (47, 8), (55, 13), (55, 56)], fill=P["body"])
    d.rectangle((9, 57, 55, 61), fill=P["deep"])
    d.rectangle((18, 56, 46, 57), fill=P["edge"])


def channel(d, points):
    d.line(points, fill=P["amber0"], width=3)
    d.line(points, fill=P["amber1"], width=1)


def key_phrase(d):
    # Comb aperture: repeated slots plus one deeper identifying notch.
    d.rectangle((8, 11, 22, 21), outline=P["violet2"], width=2)
    for x, h in ((11, 4), (14, 6), (17, 4)):
        d.rectangle((x, 13, x + 1, 13 + h), fill=P["violet3"])
    channel(d, [(22, 16), (31, 16)])


def entity(d):
    # Four-corner locator with open side gates.
    c = P["cyan2"]
    for pts in [[(43, 15), (43, 11), (47, 11)], [(51, 11), (55, 11), (55, 15)],
                [(55, 18), (55, 22), (51, 22)], [(47, 22), (43, 22), (43, 18)]]:
        d.line(pts, fill=c, width=2)
    d.rectangle((48, 15, 50, 18), fill=P["cyan0"])
    channel(d, [(43, 17), (33, 17)])


def sentiment(d):
    # Opposing shutters around a neutral central gap; no face glyph.
    d.rectangle((8, 28, 23, 39), outline=P["violet0"], width=1)
    d.polygon([(10, 30), (16, 33), (10, 36)], fill=P["violet3"])
    d.polygon([(21, 30), (16, 34), (21, 37)], fill=P["violet2"])
    d.rectangle((15, 33, 16, 34), fill=P["void"])
    channel(d, [(23, 34), (31, 34)])


def summary(d):
    # Three collapsing bars converge toward the rail.
    d.rectangle((42, 28, 56, 40), outline=P["cyan0"], width=1)
    d.rectangle((44, 30, 53, 31), fill=P["cyan2"])
    d.rectangle((46, 34, 53, 35), fill=P["cyan1"])
    d.rectangle((49, 38, 53, 39), fill=P["cyan2"])
    channel(d, [(42, 34), (33, 34)])


def correlation_rail(d):
    channel(d, [(32, 10), (32, 49)])
    for y in (16, 22, 28, 34, 40):
        d.rectangle((30, y, 34, y + 1), fill=P["amber2"])


def success_return(d):
    # Right branch closes into a bounded return socket.
    channel(d, [(32, 48), (42, 53), (52, 53)])
    d.rectangle((51, 48, 59, 58), outline=P["cyan2"], width=2)
    d.rectangle((54, 51, 56, 55), fill=P["cyan0"])


def error_return(d):
    # Left branch ends in an open stepped fracture, distinct from closed success.
    channel(d, [(32, 48), (22, 53), (13, 53)])
    d.line([(13, 49), (10, 52), (7, 50), (4, 54), (8, 58), (11, 55)], fill=P["violet3"], width=2)
    d.rectangle((11, 52, 13, 54), fill=P["violet0"])


def motif(parts=("key", "entity", "sentiment", "summary", "rail", "success", "error")):
    im = Image.new("RGBA", (64, 64), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    plate(d)
    if "rail" in parts: correlation_rail(d)
    if "key" in parts: key_phrase(d)
    if "entity" in parts: entity(d)
    if "sentiment" in parts: sentiment(d)
    if "summary" in parts: summary(d)
    if "success" in parts: success_return(d)
    if "error" in parts: error_return(d)
    return im


def main():
    (ROOT / "qa").mkdir(parents=True, exist_ok=True)
    asset = motif()
    asset.save(ROOT / "text-analysis-apertures-64x64.png", optimize=False)
    asset.resize((128, 128), Image.Resampling.NEAREST).save(ROOT / "qa" / "text-analysis-apertures-2x-128x128.png", optimize=False)
    ImageOps.grayscale(asset).save(ROOT / "qa" / "text-analysis-apertures-grayscale-64x64.png", optimize=False)
    names = ["key", "entity", "sentiment", "summary", "rail", "success", "error"]
    strip = Image.new("RGB", (512, 64), P["void"])
    strip.paste(asset, (0, 0), asset)
    for i, name in enumerate(names, start=1):
        tile = motif((name,))
        strip.paste(tile, (i * 64, 0), tile)
    strip.resize((1024, 128), Image.Resampling.NEAREST).save(ROOT / "qa" / "aperture-return-isolation-2x-1024x128.png", optimize=False)


if __name__ == "__main__":
    main()
