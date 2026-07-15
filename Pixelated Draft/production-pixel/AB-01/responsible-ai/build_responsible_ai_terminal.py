"""Build the AB-01 Responsible AI physical Terminal motif on a 64x64 grid."""

from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent

P = {
    "void": (7, 8, 18),
    "deep": (15, 17, 27),
    "body": (43, 40, 50),
    "edge": (88, 76, 78),
    "violet0": (45, 27, 70),
    "violet1": (76, 45, 105),
    "violet2": (117, 73, 151),
    "violet3": (166, 119, 190),
    "cyan0": (44, 69, 91),
    "cyan1": (76, 112, 130),
    "cyan2": (128, 166, 169),
    "amber0": (100, 65, 34),
    "amber1": (171, 117, 54),
    "amber2": (226, 177, 91),
}


def terminal(progress=0):
    """progress 0-4 completes indicator groups from top to bottom."""
    im = Image.new("RGBA", (64, 64), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)

    # Three-fin family crown and grounded body, 48 x 61 painted silhouette.
    d.polygon([(9, 61), (12, 13), (20, 9), (43, 9), (52, 14), (56, 61)], fill=P["deep"])
    d.polygon([(13, 58), (15, 16), (22, 12), (41, 12), (49, 17), (52, 58)], fill=P["body"])
    d.rectangle((15, 58, 52, 61), fill=P["deep"])
    d.polygon([(16, 14), (18, 3), (24, 9), (25, 14)], fill=P["violet1"])
    d.polygon([(26, 13), (31, 1), (36, 13)], fill=P["violet2"])
    d.polygon([(38, 14), (43, 4), (48, 12), (47, 15)], fill=P["violet1"])
    d.line([(18, 4), (23, 10), (24, 13)], fill=P["violet3"], width=1)
    d.line([(31, 2), (35, 12)], fill=P["violet3"], width=1)
    d.line([(43, 5), (47, 12)], fill=P["violet3"], width=1)

    # Quiet front-face well. Four groups are vertically ordered and undithered.
    d.rectangle((18, 15, 47, 55), fill=P["void"])
    d.line([(18, 15), (47, 15), (47, 55)], fill=P["edge"], width=1)

    # 1. Principle: one faceted diamond, outline -> filled.
    principle = [(31, 18), (35, 21), (31, 24), (27, 21)]
    d.polygon(principle, fill=P["violet3"] if progress >= 1 else P["violet0"])
    if progress == 0:
        d.polygon([(31, 19), (34, 21), (31, 23), (28, 21)], fill=P["void"])

    # 2. Stakeholder: two distinct parties; completion adds a central bridge.
    d.rectangle((24, 28, 28, 32), fill=P["cyan2"] if progress >= 2 else P["cyan0"])
    d.rectangle((35, 28, 39, 32), fill=P["cyan2"] if progress >= 2 else P["cyan0"])
    if progress >= 2:
        d.rectangle((29, 29, 34, 31), fill=P["cyan1"])

    # 3. Mitigation: stepped intervention closes a broken path.
    d.line([(23, 40), (27, 40), (27, 37), (31, 37)], fill=P["amber1"] if progress >= 3 else P["amber0"], width=2)
    d.line([(33, 37), (37, 37), (37, 40), (41, 40)], fill=P["amber1"] if progress >= 3 else P["amber0"], width=2)
    if progress >= 3:
        d.rectangle((31, 37, 33, 38), fill=P["amber2"])

    # 4. Accountable owner: bounded owner block gains an anchor to the base.
    d.rectangle((28, 46, 35, 52), outline=P["violet3"] if progress >= 4 else P["violet0"], width=1)
    if progress >= 4:
        d.rectangle((30, 48, 33, 51), fill=P["violet3"])
        d.rectangle((31, 53, 32, 57), fill=P["amber2"])
        d.rectangle((27, 56, 36, 57), fill=P["amber1"])
    return im


def framed_mode(mode):
    """Keep the four indicators unchanged; encode exercise mode outside the body."""
    tile = Image.new("RGBA", (64, 64), (0, 0, 0, 0))
    d = ImageDraw.Draw(tile)
    if mode == "primary":
        # One solid left rail: first bounded form.
        d.rectangle((3, 13, 5, 54), fill=P["cyan0"])
        d.rectangle((5, 13, 8, 15), fill=P["cyan1"])
        d.rectangle((5, 52, 8, 54), fill=P["cyan1"])
    elif mode == "transfer":
        # Mirrored stepped rails: same reasoning transferred to a second form.
        for y in range(12, 55, 8):
            d.rectangle((2, y, 5, min(y + 4, 55)), fill=P["violet2"])
            d.rectangle((58, y + 3, 61, min(y + 7, 55)), fill=P["violet2"])
        d.rectangle((5, 11, 9, 13), fill=P["violet1"])
        d.rectangle((54, 54, 58, 56), fill=P["violet1"])
    elif mode == "explanation":
        # Closed witness frame: evidence is gathered into one accountable explanation.
        d.line([(2, 8), (8, 4), (55, 4), (61, 8)], fill=P["amber1"], width=2)
        d.rectangle((2, 8, 4, 57), fill=P["amber0"])
        d.rectangle((59, 8, 61, 57), fill=P["amber0"])
        d.line([(2, 58), (61, 58)], fill=P["amber1"], width=2)
        d.rectangle((27, 61, 36, 63), fill=P["amber2"])
    node = terminal(0)
    tile.paste(node, (0, 0), node)
    return tile


def main():
    (ROOT / "qa").mkdir(parents=True, exist_ok=True)
    available = terminal(0)
    available.save(ROOT / "responsible-ai-terminal-available-64x64.png", optimize=False)
    available.resize((128, 128), Image.Resampling.NEAREST).save(ROOT / "qa" / "responsible-ai-terminal-available-2x-128x128.png", optimize=False)

    strip = Image.new("RGB", (320, 64), P["void"])
    for stage in range(5):
        tile = terminal(stage)
        strip.paste(tile, (stage * 64, 0), tile)
    strip.save(ROOT / "qa" / "responsible-ai-sequence-1x-320x64.png", optimize=False)
    strip.resize((640, 128), Image.Resampling.NEAREST).save(ROOT / "qa" / "responsible-ai-sequence-2x-640x128.png", optimize=False)

    modes = ["primary", "transfer", "explanation"]
    mode_strip = Image.new("RGB", (192, 64), P["void"])
    for index, mode in enumerate(modes):
        tile = framed_mode(mode)
        mode_strip.paste(tile, (index * 64, 0), tile)
    mode_strip.save(ROOT / "responsible-ai-frame-modes-1x-192x64.png", optimize=False)
    mode_strip.resize((384, 128), Image.Resampling.NEAREST).save(ROOT / "qa" / "responsible-ai-frame-modes-2x-384x128.png", optimize=False)


if __name__ == "__main__":
    main()
