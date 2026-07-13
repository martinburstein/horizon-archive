"""Acceptance checks for the AB-01 Offline Capstone Readiness motif."""
from pathlib import Path
import re
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent


def check(ok, message):
    if not ok: raise AssertionError(message)
    print(f"PASS: {message}")


def main():
    native = Image.open(ROOT / "capstone-readiness-64x64.png")
    double = Image.open(ROOT / "qa/capstone-readiness-2x-128x128.png")
    gray = Image.open(ROOT / "qa/capstone-readiness-grayscale-64x64.png")
    isolation = Image.open(ROOT / "qa/component-isolation-2x-1024x128.png")
    check(native.mode == "RGBA" and native.size == (64, 64), "native transparent RGBA is 64x64")
    check(double.size == (128, 128) and double.tobytes() == native.resize(
        (128, 128), Image.Resampling.NEAREST).tobytes(), "2x is byte-exact nearest-neighbor")
    check(gray.mode == "L" and gray.size == (64, 64), "native grayscale QA is 64x64")
    check(isolation.size == (1024, 128), "isolation QA contains combined plus seven components")

    small = isolation.resize((512, 64), Image.Resampling.NEAREST)
    tiles = [ImageOps.grayscale(small.crop((i * 64, 0, (i + 1) * 64, 64))).tobytes()
             for i in range(1, 8)]
    check(len(set(tiles)) == 7, "all seven components remain pairwise distinct in grayscale")
    p = native.load()
    amber = {(100, 65, 34), (171, 117, 54), (226, 177, 91)}
    cyan = {(44, 69, 91), (76, 112, 130), (128, 166, 169)}
    check(all(any(p[x, y][:3] in amber for x in range(17, 26)) for y in (13, 27, 42)),
          "all three implementation inputs physically reach the evidence gate")
    check(any(p[x, 13][:3] in amber for x in range(41, 51)) and
          any(p[x, 27][:3] in cyan for x in range(41, 55)) and
          any(p[x, 42][:3] in amber for x in range(41, 51)),
          "evidence gate reaches all three readiness outcomes")
    check(tiles[4] != tiles[5] != tiles[6] and tiles[4] != tiles[6],
          "closed-ready, return-loop, and open-insufficient outcomes differ by geometry")
    check(p[33, 56][:3] == (128, 166, 169) and
          any(p[x, 52][:3] == (117, 73, 151) for x in range(28, 39)),
          "prerequisite evidence gate has a closed physical lock")

    bbox = native.getbbox(); width = bbox[2] - bbox[0]; height = bbox[3] - bbox[1]
    check(width <= 68 and height <= 76 and 156 + width <= 360,
          f"painted bounds {width}x{height} fit hotspot, anchor, and world")
    # The grayscale silhouette must retain both input and outcome mass around the central gate.
    check(gray.crop((5, 7, 18, 48)).getbbox() is not None and
          gray.crop((49, 7, 62, 51)).getbbox() is not None,
          "native grayscale silhouette retains input and outcome reads")

    broken = []
    for markdown in (ROOT / "README.md", ROOT.parent / "README.md"):
        for link in re.findall(r"\[[^]]*\]\(([^)#]+)", markdown.read_text(encoding="utf-8")):
            if "://" not in link and not (markdown.parent / link).exists(): broken.append(link)
    check(not broken, "all local links resolve")
    text = (ROOT / "README.md").read_text(encoding="utf-8").lower()
    check("not a new location or story event" in text and "no outcome guarantees" in text,
          "spec preserves surface-canon, spoiler, and no-guarantee boundaries")


if __name__ == "__main__": main()
