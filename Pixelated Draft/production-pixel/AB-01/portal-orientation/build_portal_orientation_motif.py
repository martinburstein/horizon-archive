"""Build the AB-01 Portal Orientation checkpoint motif."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageOps

ROOT = Path(__file__).resolve().parent
P = {"void": (7, 8, 18), "deep": (15, 17, 27), "body": (43, 40, 50),
     "edge": (88, 76, 78), "violet0": (45, 27, 70), "violet2": (117, 73, 151),
     "violet3": (166, 119, 190), "cyan0": (44, 69, 91), "cyan1": (76, 112, 130),
     "cyan2": (128, 166, 169), "amber0": (100, 65, 34),
     "amber1": (171, 117, 54), "amber2": (226, 177, 91)}
CENTERS = [(10, 18), (24, 18), (38, 18), (52, 18),
           (52, 44), (38, 44), (24, 44), (10, 44)]


def plate(d):
    d.polygon([(3, 58), (4, 8), (10, 3), (54, 3), (60, 9), (61, 58)], fill=P["deep"])
    d.polygon([(6, 56), (7, 10), (12, 7), (52, 7), (58, 11), (58, 56)], fill=P["body"])
    d.rectangle((7, 57, 57, 61), fill=P["deep"])
    d.rectangle((18, 56, 46, 57), fill=P["edge"])


def frame(d, x, y):
    d.rectangle((x-4, y-4, x+4, y+4), outline=P["amber0"], width=2)
    d.point((x-4, y), fill=P["amber1"]); d.point((x+4, y), fill=P["amber1"])


def access(d, x, y):
    frame(d, x, y)
    d.line([(x-2, y+2), (x-2, y-2), (x, y)], fill=P["violet3"])
    d.line([(x+2, y+2), (x+2, y-2), (x, y)], fill=P["violet2"])


def project(d, x, y):
    frame(d, x, y)
    d.rectangle((x-2, y-2, x+2, y+2), outline=P["cyan2"])
    d.line([(x-1, y+1), (x-1, y-1), (x+1, y-1)], fill=P["cyan0"])


def model(d, x, y):
    frame(d, x, y)
    d.polygon([(x, y-3), (x+3, y), (x, y+3), (x-3, y)], outline=P["violet3"])
    d.rectangle((x-1, y-1, x+1, y+1), fill=P["violet0"])


def deployment(d, x, y):
    frame(d, x, y)
    d.rectangle((x-2, y-2, x+2, y+1), outline=P["cyan2"])
    d.rectangle((x-1, y+2, x+3, y+3), fill=P["cyan0"])
    d.point((x+3, y+2), fill=P["cyan2"])
    # Detached catalog shelf: a collection, never the named deployment socket.
    d.line([(43, 8), (58, 8)], fill=P["edge"])
    d.line([(45, 5), (45, 7), (49, 7), (49, 5)], fill=P["cyan1"])
    d.line([(52, 5), (52, 7), (57, 7), (57, 5)], fill=P["cyan2"])


def readiness(d, x, y):
    frame(d, x, y)
    d.line([(x-3, y+2), (x-2, y-1), (x, y-3), (x+2, y-1), (x+3, y+2)], fill=P["cyan2"])
    d.point((x-2, y+2), fill=P["cyan0"])
    d.rectangle((x, y+1, x+1, y+2), fill=P["cyan1"])
    d.rectangle((x+3, y, x+3, y+2), fill=P["cyan2"])


def interaction(d, x, y):
    frame(d, x, y)
    d.line([(x-3, y-2), (x, y-2), (x, y)], fill=P["violet3"], width=2)
    d.line([(x+3, y+2), (x, y+2), (x, y)], fill=P["cyan2"], width=2)


def connection(d, x, y):
    frame(d, x, y)
    # Empty keyed credential slot. Empty means missing, never false or zero.
    d.rectangle((x-2, y-3, x+2, y+3), outline=P["violet3"])
    d.rectangle((x-1, y-2, x+1, y+2), fill=P["void"])
    d.rectangle((x+1, y-3, x+3, y-1), fill=P["body"])
    d.point((x+1, y-2), fill=P["violet2"])


def cleanup(d, x, y):
    frame(d, x, y)
    d.line([(x-2, y), (x-2, y-2), (x-1, y-3), (x+1, y-3),
            (x+2, y-2), (x+2, y)], fill=P["cyan2"])
    d.rectangle((x-2, y, x+2, y+3), fill=P["violet2"])
    d.point((x, y+1), fill=P["cyan2"])
    d.line([(x-5, y-4), (x-5, y+4)], fill=P["amber2"], width=2)


STAGES = [access, project, model, deployment, readiness, interaction, connection, cleanup]


def rail(d):
    # One continuous serpentine sequence: 1->2->3->4->5->6->7->8.
    for a, b in ((14, 20), (28, 34), (42, 48)):
        d.line([(a, 18), (b, 18)], fill=P["amber1"])
    d.line([(56, 18), (56, 44)], fill=P["amber0"], width=2)
    for a, b in ((48, 42), (34, 28), (20, 14)):
        d.line([(a, 44), (b, 44)], fill=P["amber1"])
    for x in (17, 31, 45):
        d.line([(x-1, 17), (x, 18), (x-1, 19)], fill=P["amber2"])
    d.line([(55, 31), (56, 32), (57, 31)], fill=P["amber2"])
    for x in (45, 31, 17):
        d.line([(x+1, 43), (x, 44), (x+1, 45)], fill=P["amber2"])


def motif(parts=range(8), include_rail=True):
    image = Image.new("RGBA", (64, 64), (0, 0, 0, 0)); d = ImageDraw.Draw(image)
    plate(d)
    if include_rail: rail(d)
    for index in parts: STAGES[index](d, *CENTERS[index])
    return image


def main():
    qa = ROOT / "qa"; qa.mkdir(parents=True, exist_ok=True)
    asset = motif(); asset.save(ROOT / "portal-orientation-64x64.png", optimize=False)
    asset.resize((128, 128), Image.Resampling.NEAREST).save(qa / "portal-orientation-2x-128x128.png", optimize=False)
    ImageOps.grayscale(asset).save(qa / "portal-orientation-grayscale-64x64.png", optimize=False)
    strip = Image.new("RGB", (576, 64), P["void"]); strip.paste(asset, (0, 0), asset)
    for index in range(8):
        tile = motif((index,), include_rail=False); strip.paste(tile, ((index+1)*64, 0), tile)
    strip.resize((1152, 128), Image.Resampling.NEAREST).save(qa / "checkpoint-isolation-2x-1152x128.png", optimize=False)


if __name__ == "__main__": main()
