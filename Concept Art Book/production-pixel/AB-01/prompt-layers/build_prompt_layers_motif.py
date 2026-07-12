"""Build the AB-01 Prompt Layers physical motif."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageOps

ROOT = Path(__file__).resolve().parent
P = {"void": (7, 8, 18), "deep": (15, 17, 27), "body": (43, 40, 50),
     "edge": (88, 76, 78), "violet0": (45, 27, 70), "violet2": (117, 73, 151),
     "violet3": (166, 119, 190), "cyan0": (44, 69, 91), "cyan1": (76, 112, 130),
     "cyan2": (128, 166, 169), "amber0": (100, 65, 34),
     "amber1": (171, 117, 54), "amber2": (226, 177, 91)}


def plate(d):
    d.polygon([(3, 59), (4, 8), (10, 3), (53, 3), (60, 9), (61, 59)], fill=P["deep"])
    d.polygon([(6, 56), (7, 10), (12, 7), (51, 7), (57, 11), (58, 56)], fill=P["body"])
    d.rectangle((7, 57, 57, 61), fill=P["deep"])
    d.rectangle((18, 56, 46, 57), fill=P["edge"])


def system_layer(d):
    d.polygon([(24, 5), (40, 5), (42, 11), (22, 11)], outline=P["amber0"])
    d.line([(27, 9), (29, 7), (32, 9), (35, 7), (37, 9)], fill=P["violet3"])


def user_layer(d):
    d.rectangle((22, 14, 42, 20), outline=P["amber0"])
    d.line([(25, 15), (28, 17), (25, 19)], fill=P["cyan2"])
    d.rectangle((35, 16, 39, 18), fill=P["cyan0"])


def grounding_layer(d):
    d.polygon([(22, 23), (42, 23), (40, 29), (24, 29)], outline=P["amber0"])
    d.line([(27, 24), (27, 27), (25, 28)], fill=P["violet2"])
    d.line([(32, 24), (32, 28)], fill=P["violet3"])
    d.line([(37, 24), (37, 27), (39, 28)], fill=P["violet2"])


def output_layer(d):
    d.rectangle((22, 32, 42, 38), outline=P["amber0"])
    d.line([(25, 33), (23, 35), (25, 37)], fill=P["cyan2"])
    d.line([(39, 33), (41, 35), (39, 37)], fill=P["cyan2"])
    d.rectangle((28, 34, 30, 36), fill=P["cyan0"])
    d.rectangle((34, 34, 36, 36), fill=P["cyan1"])


def conflict_layer(d):
    d.polygon([(22, 41), (27, 41), (29, 39), (35, 39), (37, 41), (42, 41),
               (42, 47), (37, 47), (35, 49), (29, 49), (27, 47), (22, 47)], outline=P["amber0"])
    d.line([(27, 42), (30, 45), (27, 46)], fill=P["violet3"])
    d.line([(37, 42), (34, 45), (37, 46)], fill=P["cyan2"])
    d.rectangle((31, 42, 33, 47), fill=P["void"])


def evaluation_layer(d):
    d.polygon([(26, 50), (38, 50), (42, 53), (38, 56), (26, 56), (22, 53)], outline=P["amber0"])
    d.line([(27, 53), (30, 55), (33, 51), (37, 53)], fill=P["cyan2"])
    d.point((37, 53), fill=P["amber2"])


LAYERS = [system_layer, user_layer, grounding_layer, output_layer, conflict_layer, evaluation_layer]


def linked_spine(d):
    # The evaluation path stays continuous through all six layers.
    d.line([(32, 5), (32, 56)], fill=P["amber1"])
    for y in (12, 21, 30, 39, 48):
        d.line([(31, y-1), (32, y), (33, y-1)], fill=P["amber2"])


def injection_rejection(d):
    d.line([(4, 14), (8, 17), (4, 20), (12, 20), (14, 17)], fill=P["violet3"], width=2)
    # Hard gap from x=15 through x=21 prevents injection from joining user input.
    d.rectangle((15, 14, 21, 20), fill=P["body"])


def locked_authority(d):
    # A request approaches, but does not cross, the external action lock.
    d.line([(42, 35), (47, 35)], fill=P["cyan2"])
    d.rectangle((48, 32, 50, 38), fill=P["body"])
    d.rectangle((51, 33, 61, 41), outline=P["violet2"], width=2)
    d.line([(54, 33), (54, 30), (56, 28), (59, 30), (59, 33)], fill=P["cyan2"], width=2)
    d.rectangle((54, 36, 58, 39), fill=P["violet0"])
    d.point((56, 37), fill=P["cyan2"])


def motif(parts=range(6), include_spine=True, include_boundaries=True):
    image = Image.new("RGBA", (64, 64), (0, 0, 0, 0)); d = ImageDraw.Draw(image)
    plate(d)
    for index in parts: LAYERS[index](d)
    if include_spine: linked_spine(d)
    if include_boundaries: injection_rejection(d); locked_authority(d)
    return image


def main():
    qa = ROOT / "qa"; qa.mkdir(parents=True, exist_ok=True)
    asset = motif(); asset.save(ROOT / "prompt-layers-64x64.png", optimize=False)
    asset.resize((128, 128), Image.Resampling.NEAREST).save(qa / "prompt-layers-2x-128x128.png", optimize=False)
    ImageOps.grayscale(asset).save(qa / "prompt-layers-grayscale-64x64.png", optimize=False)
    strip = Image.new("RGB", (448, 64), P["void"]); strip.paste(asset, (0, 0), asset)
    for index in range(6):
        tile = motif((index,), include_spine=False, include_boundaries=False)
        strip.paste(tile, ((index+1)*64, 0), tile)
    strip.resize((896, 128), Image.Resampling.NEAREST).save(qa / "layer-isolation-2x-896x128.png", optimize=False)


if __name__ == "__main__": main()
