"""Author the original AB-01 production pixel scene at its native logical grid.

This renderer draws only integer-coordinate shapes from an explicit palette.
It does not load, sample, resize, trace, or filter any concept-art image.
"""

from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent
W, H = 640, 360
ANCHOR = (156, 211)
OVERLAY_SIZE = (64, 64)

P = {
    "void": (7, 8, 18),
    "sky0": (14, 15, 35),
    "sky1": (24, 25, 55),
    "sky2": (36, 35, 74),
    "sky3": (52, 47, 89),
    "haze": (71, 61, 103),
    "peach0": (111, 72, 91),
    "peach1": (154, 98, 101),
    "star": (205, 190, 177),
    "ridge0": (22, 23, 44),
    "ridge1": (31, 30, 55),
    "ridge2": (43, 39, 67),
    "water0": (10, 14, 31),
    "water1": (17, 22, 43),
    "water2": (27, 29, 55),
    "water3": (43, 37, 70),
    "water_glint": (83, 65, 112),
    "stone0": (15, 17, 27),
    "stone1": (27, 27, 38),
    "stone2": (43, 40, 50),
    "stone3": (63, 56, 65),
    "stone4": (88, 76, 78),
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


def rect(draw, box, color):
    draw.rectangle(tuple(map(int, box)), fill=P[color])


def poly(draw, points, color):
    draw.polygon([(int(x), int(y)) for x, y in points], fill=P[color])


def line(draw, points, color, width=1):
    draw.line([(int(x), int(y)) for x, y in points], fill=P[color], width=int(width))


def draw_scene_background():
    im = Image.new("RGB", (W, H), P["sky0"])
    d = ImageDraw.Draw(im)

    # Five hard sky bands; sparse ordered haze bridges only adjacent bands.
    rect(d, (0, 0, 639, 47), "sky0")
    rect(d, (0, 48, 639, 90), "sky1")
    rect(d, (0, 91, 639, 132), "sky2")
    rect(d, (0, 133, 639, 165), "sky3")
    rect(d, (0, 166, 639, 184), "haze")
    poly(d, [(0, 120), (134, 126), (246, 170), (0, 188)], "peach0")
    poly(d, [(0, 143), (102, 149), (182, 178), (0, 195)], "peach1")
    for y in range(72, 148, 4):
        for x in range((y // 4) % 4, 640, 8):
            if x > 150 or y < 118:
                rect(d, (x, y, x + 1, y + 1), "sky3")
    for x, y in [(52, 28), (88, 67), (139, 41), (214, 24), (301, 61), (351, 35),
                 (418, 74), (487, 30), (548, 58), (604, 22), (571, 103), (260, 101)]:
        rect(d, (x, y, x, y), "star")

    # Original broken basin skyline: no layout or geometry copied from concept art.
    poly(d, [(0, 178), (38, 145), (67, 174), (103, 128), (139, 177),
             (183, 151), (221, 181), (267, 138), (316, 179), (362, 147),
             (408, 184), (460, 151), (511, 177), (559, 132), (607, 174), (639, 151), (639, 212), (0, 212)], "ridge0")
    poly(d, [(0, 195), (53, 166), (91, 195), (151, 161), (206, 201),
             (278, 169), (330, 200), (398, 168), (466, 197), (531, 166), (592, 200), (639, 181), (639, 222), (0, 222)], "ridge1")
    for x, h in [(72, 24), (143, 38), (235, 19), (315, 31), (603, 28)]:
        poly(d, [(x, 205), (x + 5, 205 - h), (x + 11, 205), (x + 9, 214), (x + 1, 214)], "ridge2")

    # Water planes and bounded dither patches.
    rect(d, (0, 185, 639, 359), "water0")
    rect(d, (0, 217, 639, 359), "water1")
    for y in range(196, 350, 8):
        for x in range((y * 3) % 19, 640, 32):
            rect(d, (x, y, x + 5, y + 1), "water2")
    for bx, by, bw, bh in [(18, 225, 88, 20), (281, 186, 96, 18), (500, 276, 112, 24)]:
        for y in range(by, by + bh, 4):
            for x in range(bx + ((y // 4) % 2) * 4, bx + bw, 8):
                rect(d, (x, y, x + 1, y + 1), "water3")
    for x, y, w in [(34, 244, 47), (285, 219, 55), (424, 279, 63), (548, 235, 38), (87, 323, 72)]:
        rect(d, (x, y, x + w, y + 1), "water_glint")

    # Monumental Tidal Lens: split arch and suspended lozenge, intentionally not a cube or central altar.
    poly(d, [(383, 205), (392, 103), (414, 67), (436, 54), (449, 59), (430, 82),
             (416, 114), (413, 183), (428, 205)], "stone1")
    poly(d, [(404, 190), (408, 111), (425, 81), (439, 66), (446, 70), (433, 91),
             (424, 122), (424, 190)], "stone3")
    poly(d, [(520, 205), (518, 126), (507, 93), (487, 66), (498, 58), (522, 82),
             (539, 116), (553, 205)], "stone1")
    poly(d, [(527, 191), (530, 125), (519, 99), (499, 72), (505, 68), (530, 94),
             (543, 124), (543, 191)], "stone3")
    poly(d, [(441, 194), (450, 116), (467, 94), (483, 116), (493, 194)], "violet0")
    poly(d, [(451, 184), (457, 122), (467, 106), (481, 124), (484, 184)], "violet1")
    poly(d, [(459, 126), (467, 112), (477, 127), (468, 162)], "violet2")
    rect(d, (467, 116, 469, 153), "violet3")
    line(d, [(397, 102), (412, 98), (424, 101)], "stone4", 1)
    line(d, [(511, 95), (527, 101), (538, 111)], "stone4", 1)

    # Causeway: dominant route stays in y=214-342 and bends toward the lens exit.
    poly(d, [(0, 286), (88, 274), (167, 257), (251, 249), (329, 237), (392, 219),
             (624, 202), (639, 218), (639, 252), (430, 248), (346, 268), (263, 282),
             (178, 293), (86, 319), (0, 338)], "stone1")
    poly(d, [(0, 295), (89, 283), (169, 266), (252, 258), (331, 246), (395, 228),
             (628, 211), (639, 223), (639, 240), (425, 239), (341, 259), (260, 273),
             (174, 284), (84, 310), (0, 328)], "stone2")
    line(d, [(0, 296), (90, 284), (170, 267), (253, 259), (332, 247), (396, 229), (628, 212)], "stone4", 1)
    for x, y, w in [(18, 303, 24), (58, 294, 18), (101, 282, 28), (145, 273, 22),
                    (200, 264, 29), (271, 253, 21), (319, 243, 25), (372, 229, 18),
                    (438, 220, 31), (512, 214, 24), (578, 209, 30)]:
        rect(d, (x, y, x + w, y + 2), "stone3")
        rect(d, (x + w, y + 2, x + w + 1, y + 7), "stone0")

    # Exit stair under the landmark.
    for i in range(5):
        rect(d, (555 + i * 5, 208 - i * 3, 625 - i * 5, 211 - i * 3), "stone3" if i % 2 else "stone2")

    # One secondary leaning survey monolith, kept outside the Terminal quiet pocket.
    poly(d, [(91, 260), (97, 190), (109, 184), (117, 253)], "stone0")
    poly(d, [(98, 247), (102, 194), (108, 190), (111, 246)], "stone3")
    rect(d, (102, 211, 108, 213), "violet1")

    # Foreground masks stay below 18% and avoid target/route/exit.
    poly(d, [(0, 360), (0, 324), (31, 316), (56, 333), (76, 360)], "stone0")
    poly(d, [(640, 360), (640, 315), (615, 304), (593, 331), (566, 360)], "stone0")
    return im


def draw_terminal(state):
    im = Image.new("RGBA", OVERLAY_SIZE, (0, 0, 0, 0))
    d = ImageDraw.Draw(im)

    # Base: 41 x 30, selective 1 px contour and 2 px contact edge.
    poly(d, [(12, 61), (16, 33), (24, 27), (47, 27), (54, 34), (57, 61)], "stone0")
    poly(d, [(16, 59), (19, 35), (26, 30), (45, 30), (51, 36), (53, 59)], "stone2")
    rect(d, (18, 59, 54, 61), "stone0")
    rect(d, (22, 42, 49, 45), "stone3")

    if state == "dormant":
        # Closed crown and asymmetrical notch, no beacon.
        poly(d, [(25, 31), (28, 7), (34, 20), (35, 31)], "violet0")
        poly(d, [(36, 31), (38, 13), (43, 5), (46, 31)], "violet0")
        poly(d, [(29, 10), (32, 21), (34, 28), (29, 27)], "violet1")
        rect(d, (33, 23, 38, 29), "void")
    else:
        # Available/active crown: unique three-fin top silhouette.
        poly(d, [(19, 31), (21, 11), (27, 4), (30, 31)], "violet1")
        poly(d, [(30, 30), (34, 13), (37, 8), (41, 30)], "violet1")
        poly(d, [(41, 31), (45, 6), (51, 15), (51, 32)], "violet1")
        line(d, [(21, 12), (27, 6), (29, 29)], "violet3", 1)
        line(d, [(35, 14), (37, 10), (40, 29)], "violet2", 1)
        line(d, [(46, 8), (50, 16), (50, 30)], "violet3", 1)
        poly(d, [(31, 28), (36, 20), (42, 28), (38, 34)], "violet0")
        if state == "available":
            rect(d, (35, 24, 37, 26), "cyan2")
            rect(d, (36, 23, 36, 23), "star")
            rect(d, (25, 38, 45, 39), "cyan0")
        elif state == "active":
            rect(d, (33, 24, 35, 26), "cyan2")
            rect(d, (39, 24, 41, 26), "cyan1")
            rect(d, (24, 38, 47, 38), "cyan2")
            rect(d, (17, 61, 53, 61), "violet2")
        elif state == "complete":
            # Aligned fins and closed route ring are geometry changes, not color-only.
            poly(d, [(19, 31), (19, 14), (24, 8), (29, 31)], "violet2")
            poly(d, [(31, 30), (34, 8), (38, 5), (41, 30)], "violet2")
            poly(d, [(43, 31), (48, 9), (53, 15), (53, 31)], "violet2")
            d.rectangle((30, 20, 43, 31), outline=P["amber2"], width=1)
            rect(d, (35, 22, 38, 25), "amber2")
            rect(d, (23, 37, 49, 39), "amber1")
            rect(d, (48, 36, 57, 37), "amber2")
    return im


def composite(background, state):
    out = background.copy()
    out.paste(draw_terminal(state), ANCHOR, draw_terminal(state))
    return out


def main():
    (ROOT / "states").mkdir(parents=True, exist_ok=True)
    (ROOT / "qa").mkdir(parents=True, exist_ok=True)
    background = draw_scene_background()
    background.save(ROOT / "ab01-background-640x360.png", optimize=False)

    states = ["dormant", "available", "active", "complete"]
    for state in states:
        overlay = draw_terminal(state)
        overlay.save(ROOT / "states" / f"terminal-{state}-64x64.png", optimize=False)
        composite(background, state).save(ROOT / f"ab01-{state}-640x360.png", optimize=False)

    selected = composite(background, "available")
    selected.resize((1280, 720), Image.Resampling.NEAREST).save(ROOT / "qa" / "ab01-available-2x-1280x720.png", optimize=False)

    swatches = Image.new("RGB", (256, 64), P["void"])
    sd = ImageDraw.Draw(swatches)
    for i, color in enumerate(P.values()):
        x = (i % 16) * 16
        y = (i // 16) * 32
        sd.rectangle((x, y, x + 15, y + 31), fill=color)
    swatches.save(ROOT / "qa" / "palette-swatches-32.png", optimize=False)

    strip = Image.new("RGB", (256, 64), P["water1"])
    for i, state in enumerate(states):
        tile = Image.new("RGB", (64, 64), P["water1"])
        tile.paste(draw_terminal(state), (0, 0), draw_terminal(state))
        strip.paste(tile, (i * 64, 0))
    strip.save(ROOT / "qa" / "terminal-state-strip-1x.png", optimize=False)
    strip.resize((512, 128), Image.Resampling.NEAREST).save(ROOT / "qa" / "terminal-state-strip-2x.png", optimize=False)


if __name__ == "__main__":
    main()
