"""Author the AB-01 Model/Deployment Choices motif at 64x64 logical pixels."""

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
    "cyan2": (128, 166, 169),
    "amber0": (100, 65, 34),
    "amber2": (226, 177, 91),
}


def draw_outer_model_ring(d):
    # Continuous beveled octagon: one coherent model-family boundary.
    pts = [(18, 7), (46, 7), (57, 18), (57, 44), (46, 55), (18, 55), (7, 44), (7, 18), (18, 7)]
    d.line(pts, fill=P["violet2"], width=2)
    d.line([(19, 9), (45, 9)], fill=P["violet3"], width=1)
    d.line([(55, 19), (55, 43)], fill=P["violet0"], width=1)


def draw_middle_deployment_ring(d):
    # Paired corner brackets: a deployment boundary with four open edge gates.
    c = P["cyan2"]
    for points in [
        [(17, 25), (17, 17), (25, 17)],
        [(39, 17), (47, 17), (47, 25)],
        [(47, 37), (47, 45), (39, 45)],
        [(25, 45), (17, 45), (17, 37)],
    ]:
        d.line(points, fill=c, width=2)
    d.rectangle((15, 29, 17, 33), fill=P["cyan0"])
    d.rectangle((47, 29, 49, 33), fill=P["cyan0"])


def draw_inner_request_ring(d):
    # Alternating stepped dashes: request-time configuration can vary per call.
    c = P["amber2"]
    for box in [(28, 22, 31, 23), (34, 22, 37, 23), (40, 25, 41, 28),
                (40, 34, 41, 37), (34, 40, 37, 41), (28, 40, 31, 41),
                (22, 34, 23, 37), (22, 25, 23, 28)]:
        d.rectangle(box, fill=c)
    d.rectangle((24, 23, 26, 24), fill=P["amber0"])
    d.rectangle((38, 38, 40, 39), fill=P["amber0"])


def draw_core(d):
    # One bounded core split into decision (left diamond) and reason (right bars).
    d.rectangle((25, 26, 39, 37), fill=P["deep"])
    d.line([(32, 26), (32, 37)], fill=P["edge"], width=1)
    d.polygon([(28, 31), (30, 28), (32, 31), (30, 34)], fill=P["violet3"])
    d.rectangle((34, 29, 38, 30), fill=P["cyan2"])
    d.rectangle((34, 33, 37, 34), fill=P["cyan0"])


def motif(parts=("outer", "middle", "inner", "core")):
    im = Image.new("RGBA", (64, 64), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    # Grounded backplate preserves the AB-01 physical Terminal language.
    d.polygon([(14, 58), (10, 48), (10, 16), (17, 6), (47, 6), (54, 16), (54, 48), (50, 58)], fill=P["deep"])
    d.polygon([(17, 56), (13, 47), (13, 18), (19, 10), (45, 10), (51, 18), (51, 47), (47, 56)], fill=P["body"])
    if "outer" in parts:
        draw_outer_model_ring(d)
    if "middle" in parts:
        draw_middle_deployment_ring(d)
    if "inner" in parts:
        draw_inner_request_ring(d)
    if "core" in parts:
        draw_core(d)
    d.rectangle((13, 57, 51, 60), fill=P["deep"])
    d.rectangle((20, 56, 44, 57), fill=P["edge"])
    return im


def main():
    (ROOT / "qa").mkdir(parents=True, exist_ok=True)
    asset = motif()
    asset.save(ROOT / "model-deployment-rings-64x64.png", optimize=False)
    asset.resize((128, 128), Image.Resampling.NEAREST).save(ROOT / "qa" / "model-deployment-rings-2x-128x128.png", optimize=False)

    # QA-only grayscale and isolation strip; production remains the one native motif.
    gray = ImageOps.grayscale(asset)
    gray.save(ROOT / "qa" / "model-deployment-rings-grayscale-64x64.png", optimize=False)
    strip = Image.new("RGB", (256, 64), P["void"])
    variants = [
        motif(),
        motif(("outer", "core")),
        motif(("middle", "core")),
        motif(("inner", "core")),
    ]
    for i, tile in enumerate(variants):
        strip.paste(tile, (i * 64, 0), tile)
    strip.resize((512, 128), Image.Resampling.NEAREST).save(ROOT / "qa" / "ring-isolation-2x-512x128.png", optimize=False)


if __name__ == "__main__":
    main()
