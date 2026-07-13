"""Build the AB-01 SIM-01 mixed-simulation physical motif."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageOps

ROOT = Path(__file__).resolve().parent
P = {"void": (7, 8, 18), "deep": (15, 17, 27), "body": (43, 40, 50),
     "edge": (88, 76, 78), "v0": (45, 27, 70), "v2": (117, 73, 151),
     "v3": (166, 119, 190), "c0": (44, 69, 91), "c1": (76, 112, 130),
     "c2": (128, 166, 169), "a0": (100, 65, 34),
     "a1": (171, 117, 54), "a2": (226, 177, 91)}


def plate(d):
    d.polygon([(2, 59), (4, 8), (10, 3), (53, 3), (60, 9), (62, 59)], fill=P["deep"])
    d.polygon([(5, 56), (7, 10), (12, 7), (51, 7), (58, 11), (59, 56)], fill=P["body"])
    d.rectangle((7, 57, 57, 61), fill=P["deep"])


def split_item(d, x, y, left, right):
    d.rectangle((x, y, x + 5, y + 7), outline=P["a0"])
    d.line([(x + 3, y + 1), (x + 3, y + 6)], fill=P["edge"])
    d.rectangle((x + 1, y + 2, x + 2, y + 5), fill=left)
    d.rectangle((x + 4, y + 1, x + 4, y + 6), fill=right)


def domain_one_bank(d):
    d.line([(6, 10), (45, 10)], fill=P["v2"], width=2)
    for index, x in enumerate((7, 15, 23, 31, 39)):
        split_item(d, x, 12, P["v3"], P["c1"] if index % 2 else P["c2"])
    d.line([(9, 20), (42, 20)], fill=P["a1"])


def domain_two_bank(d):
    d.line([(6, 30), (59, 30)], fill=P["c0"], width=2)
    for index, x in enumerate((7, 15, 23, 31, 39, 47, 55)):
        split_item(d, x, 32, P["c2"], P["v2"] if index % 2 else P["v3"])
    d.line([(9, 40), (58, 40)], fill=P["a1"])


def coverage_rail(d):
    # Ordered trace touches both five-item and seven-item banks.
    d.line([(6, 20), (6, 40), (58, 40)], fill=P["a0"], width=2)
    for x in (13, 21, 29, 37, 45, 53):
        d.line([(x - 1, 39), (x, 40), (x - 1, 41)], fill=P["a2"])


def diagnostic_timer(d):
    # Detached from mastery trace: optional timing is diagnostic only.
    d.rectangle((49, 7, 60, 19), outline=P["edge"], width=2)
    d.polygon([(54, 9), (58, 12), (57, 16), (53, 17), (51, 13)], outline=P["c2"])
    d.line([(55, 12), (55, 14), (57, 14)], fill=P["v3"])


def remediation_return(d):
    d.line([(29, 40), (29, 47), (25, 51), (16, 51), (12, 47)], fill=P["c0"], width=2)
    d.line([(12, 47), (15, 46), (12, 47), (14, 50)], fill=P["c2"])
    d.rectangle((20, 47, 23, 50), outline=P["v3"])


def retention_lock(d):
    d.line([(40, 40), (40, 48)], fill=P["a1"])
    d.rectangle((35, 48, 45, 59), outline=P["v2"], width=2)
    d.line([(37, 48), (37, 46), (39, 44), (42, 44), (44, 46), (44, 48)], fill=P["c2"])
    d.rectangle((38, 52, 42, 56), fill=P["v0"])
    d.point((40, 53), fill=P["c2"])


def authority_stop(d):
    # Simulation/exam claims and external action cannot leave the local plate.
    d.line([(45, 54), (50, 54)], fill=P["a1"])
    d.rectangle((51, 49, 53, 59), fill=P["body"])
    d.line([(55, 49), (61, 49), (61, 59), (55, 59)], fill=P["v3"], width=2)
    d.line([(56, 52), (59, 56), (56, 58)], fill=P["c2"])


PARTS = [domain_one_bank, domain_two_bank, coverage_rail, diagnostic_timer,
         remediation_return, retention_lock, authority_stop]


def motif(parts=range(7)):
    image = Image.new("RGBA", (64, 64), (0, 0, 0, 0)); d = ImageDraw.Draw(image); plate(d)
    for index in parts: PARTS[index](d)
    return image


def main():
    qa = ROOT / "qa"; qa.mkdir(parents=True, exist_ok=True)
    asset = motif(); asset.save(ROOT / "mixed-simulation-64x64.png", optimize=False)
    asset.resize((128, 128), Image.Resampling.NEAREST).save(qa / "mixed-simulation-2x-128x128.png", optimize=False)
    ImageOps.grayscale(asset).save(qa / "mixed-simulation-grayscale-64x64.png", optimize=False)
    strip = Image.new("RGB", (512, 64), P["void"]); strip.paste(asset, (0, 0), asset)
    for index in range(7):
        tile = motif((index,)); strip.paste(tile, ((index + 1) * 64, 0), tile)
    strip.resize((1024, 128), Image.Resampling.NEAREST).save(qa / "component-isolation-2x-1024x128.png", optimize=False)


if __name__ == "__main__": main()
