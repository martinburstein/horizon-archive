"""Build the AB-01 Offline Capstone Readiness physical motif."""
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
    d.rectangle((18, 56, 46, 57), fill=P["edge"])


def client_input(d):
    d.rectangle((6, 8, 17, 17), outline=P["v2"], width=2)
    d.line([(9, 11), (14, 11), (14, 14), (11, 14)], fill=P["c2"])
    d.rectangle((13, 8, 16, 10), fill=P["body"])
    d.point((13, 10), fill=P["v3"])
    d.line([(17, 13), (25, 13)], fill=P["a1"])


def speech_input(d):
    d.rectangle((6, 22, 17, 32), outline=P["c0"], width=1)
    for x, top, bottom in ((8, 25, 29), (11, 23, 31), (14, 24, 30)):
        d.rectangle((x, top, x + 1, bottom), fill=P["c2"])
    d.line([(14, 27), (17, 27), (15, 25), (17, 27), (15, 29)], fill=P["v3"])
    d.line([(17, 27), (25, 27)], fill=P["a1"])


def extraction_input(d):
    d.rectangle((6, 37, 17, 47), outline=P["v3"], width=2)
    d.rectangle((9, 40, 11, 42), fill=P["c0"])
    d.rectangle((13, 40, 15, 42), fill=P["c2"])
    d.rectangle((9, 44, 15, 45), fill=P["v0"])
    d.line([(17, 42), (25, 42)], fill=P["a1"])


def evidence_gate(d):
    d.rectangle((25, 7, 41, 49), outline=P["a0"], width=2)
    d.line([(30, 9), (30, 47)], fill=P["a1"])
    d.line([(36, 9), (36, 47)], fill=P["a1"])
    for y in (13, 27, 42):
        d.line([(25, y), (41, y)], fill=P["a0"], width=2)
    for x, y in ((27, 18), (33, 18), (38, 18), (27, 33), (33, 33), (38, 33)):
        d.rectangle((x, y, x + 1, y + 1), fill=P["a2"])
    # Closed prerequisite lock below the evidence lattice.
    d.line([(33, 49), (33, 52)], fill=P["a1"])
    d.rectangle((28, 52, 38, 61), outline=P["v2"], width=2)
    d.line([(30, 52), (30, 50), (32, 48), (35, 48), (37, 50), (37, 52)], fill=P["c2"])
    d.point((33, 56), fill=P["c2"])


def ready_outcome(d):
    d.line([(41, 13), (50, 13)], fill=P["a1"])
    d.rectangle((50, 8, 61, 18), outline=P["a2"], width=2)
    d.rectangle((53, 11, 58, 15), fill=P["c2"])
    d.line([(54, 13), (56, 15), (59, 10)], fill=P["void"])


def remediation_outcome(d):
    # Return loop points back toward evidence repair rather than exiting.
    d.line([(41, 27), (54, 27), (57, 30), (57, 35), (54, 38), (44, 38)], fill=P["c0"], width=2)
    d.line([(44, 38), (47, 35), (44, 38), (47, 41)], fill=P["c2"])
    d.rectangle((51, 30, 54, 34), outline=P["v3"])


def insufficient_outcome(d):
    d.line([(41, 42), (50, 42)], fill=P["a1"])
    d.line([(52, 38), (61, 38), (61, 48), (52, 48)], fill=P["v3"], width=2)
    d.line([(55, 41), (55, 45)], fill=P["c1"])
    d.rectangle((49, 39, 51, 47), fill=P["body"])


PARTS = [client_input, speech_input, extraction_input, evidence_gate,
         ready_outcome, remediation_outcome, insufficient_outcome]


def motif(parts=range(7)):
    image = Image.new("RGBA", (64, 64), (0, 0, 0, 0))
    d = ImageDraw.Draw(image); plate(d)
    for index in parts: PARTS[index](d)
    return image


def main():
    qa = ROOT / "qa"; qa.mkdir(parents=True, exist_ok=True)
    asset = motif(); asset.save(ROOT / "capstone-readiness-64x64.png", optimize=False)
    asset.resize((128, 128), Image.Resampling.NEAREST).save(qa / "capstone-readiness-2x-128x128.png", optimize=False)
    ImageOps.grayscale(asset).save(qa / "capstone-readiness-grayscale-64x64.png", optimize=False)
    strip = Image.new("RGB", (512, 64), P["void"]); strip.paste(asset, (0, 0), asset)
    for index in range(7):
        tile = motif((index,)); strip.paste(tile, ((index + 1) * 64, 0), tile)
    strip.resize((1024, 128), Image.Resampling.NEAREST).save(qa / "component-isolation-2x-1024x128.png", optimize=False)


if __name__ == "__main__": main()
