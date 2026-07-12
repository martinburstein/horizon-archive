"""Author the AB-01 Control Flow physical motif at 64x64 logical pixels."""

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
    d.polygon([(6, 59), (7, 14), (15, 6), (49, 6), (57, 14), (58, 59)], fill=P["deep"])
    d.polygon([(10, 56), (11, 16), (18, 10), (46, 10), (53, 16), (54, 56)], fill=P["body"])
    d.rectangle((10, 57, 54, 61), fill=P["deep"])
    d.rectangle((18, 56, 46, 57), fill=P["edge"])


def groove(d, pts):
    d.line(pts, fill=P["amber0"], width=5, joint="curve")
    d.line(pts, fill=P["amber1"], width=1)


def inlet(d):
    groove(d, [(7, 52), (16, 52), (16, 44)])
    d.rectangle((5, 49, 8, 55), fill=P["cyan0"])


def repeating_channel(d):
    # Dark continuous loop; bright blocks make the repeated cadence explicit.
    loop = [(16, 44), (16, 19), (44, 19), (44, 42), (16, 42)]
    groove(d, loop)
    for box in [(15, 34, 17, 39), (15, 25, 17, 30), (20, 18, 25, 20),
                (29, 18, 34, 20), (38, 18, 43, 20)]:
        d.rectangle(box, fill=P["cyan2"])


def equality_fork(d):
    # Two equal branches share identical one-pixel edge notches.
    groove(d, [(44, 30), (49, 30), (49, 23)])
    groove(d, [(49, 30), (49, 37)])
    d.rectangle((47, 23, 48, 25), fill=P["void"])
    d.rectangle((47, 35, 48, 37), fill=P["void"])
    d.rectangle((49, 28, 52, 32), fill=P["violet3"])


def append_path(d):
    groove(d, [(49, 37), (54, 42), (44, 42)])
    # Added segment sits after the repeated bottom channel and before rejoin.
    d.rectangle((34, 40, 39, 43), fill=P["cyan2"])
    d.rectangle((40, 40, 43, 43), fill=P["cyan1"])


def outlet(d):
    groove(d, [(49, 23), (54, 18), (60, 18)])
    # Open cap is beyond the loop boundary and differs from the closed fork hub.
    d.rectangle((59, 14, 61, 17), fill=P["violet2"])
    d.rectangle((59, 19, 61, 22), fill=P["violet2"])


def motif(parts=("inlet", "repeat", "fork", "append", "outlet")):
    im = Image.new("RGBA", (64, 64), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    plate(d)
    if "inlet" in parts: inlet(d)
    if "repeat" in parts: repeating_channel(d)
    if "fork" in parts: equality_fork(d)
    if "append" in parts: append_path(d)
    if "outlet" in parts: outlet(d)
    return im


def main():
    (ROOT / "qa").mkdir(parents=True, exist_ok=True)
    asset = motif()
    asset.save(ROOT / "control-flow-channel-64x64.png", optimize=False)
    asset.resize((128, 128), Image.Resampling.NEAREST).save(ROOT / "qa" / "control-flow-channel-2x-128x128.png", optimize=False)
    ImageOps.grayscale(asset).save(ROOT / "qa" / "control-flow-channel-grayscale-64x64.png", optimize=False)
    variants = [motif(), motif(("inlet",)), motif(("repeat",)), motif(("fork",)), motif(("append",)), motif(("outlet",))]
    strip = Image.new("RGB", (384, 64), P["void"])
    for i, tile in enumerate(variants):
        strip.paste(tile, (i * 64, 0), tile)
    strip.resize((768, 128), Image.Resampling.NEAREST).save(ROOT / "qa" / "control-flow-isolation-2x-768x128.png", optimize=False)


if __name__ == "__main__":
    main()
