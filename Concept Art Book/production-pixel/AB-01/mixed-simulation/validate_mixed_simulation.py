"""Acceptance checks for the AB-01 SIM-01 mixed-simulation motif."""
from pathlib import Path
import re
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent


def check(ok, message):
    if not ok: raise AssertionError(message)
    print(f"PASS: {message}")


def main():
    n = Image.open(ROOT / "mixed-simulation-64x64.png")
    d = Image.open(ROOT / "qa/mixed-simulation-2x-128x128.png")
    g = Image.open(ROOT / "qa/mixed-simulation-grayscale-64x64.png")
    iso = Image.open(ROOT / "qa/component-isolation-2x-1024x128.png")
    check(n.mode == "RGBA" and n.size == (64, 64), "native transparent RGBA is 64x64")
    check(d.size == (128, 128) and d.tobytes() == n.resize(
        (128, 128), Image.Resampling.NEAREST).tobytes(), "2x is byte-exact nearest-neighbor")
    check(g.mode == "L" and g.size == (64, 64), "native grayscale QA is 64x64")
    check(iso.size == (1024, 128), "isolation QA contains combined plus seven components")
    small = iso.resize((512, 64), Image.Resampling.NEAREST)
    tiles = [ImageOps.grayscale(small.crop((i*64, 0, (i+1)*64, 64))).tobytes() for i in range(1, 8)]
    check(len(set(tiles)) == 7, "seven components remain pairwise distinct in grayscale")

    p = n.load(); amber = {(100,65,34),(171,117,54),(226,177,91)}
    accepted = amber | {(44,69,91),(76,112,130),(128,166,169)}
    check(all(p[x,20][:3] in amber for x in range(9,43)) and
          all(p[x,40][:3] in accepted for x in range(9,59)),
          "five-item and seven-item banks retain continuous ordered traces")
    # Each authored socket has two non-background internal dimension masses.
    centers = [(x, 15) for x in (7,15,23,31,39)] + [(x,35) for x in (7,15,23,31,39,47,55)]
    check(len(centers) == 12 and all(
        p[x+1,y][:3] != p[x+4,y][:3] for x,y in centers),
        "twelve sockets retain visibly split decision/reason dimensions")
    # Optional timer contains no amber trace and therefore cannot join mastery.
    check(not any(p[x,y][:3] in amber for y in range(7,20) for x in range(49,61)),
          "optional timer remains physically detached from mastery")
    check(p[29,40][:3] in accepted and any(p[x,51][:3] == (44,69,91) for x in range(16,26)),
          "remediation loop returns from the measured trace")
    check(p[40,53][:3] == (128,166,169) and p[52,54][:3] == (43,40,50),
          "retention remains keyed and external authority remains blocked")

    bbox=n.getbbox(); width=bbox[2]-bbox[0]; height=bbox[3]-bbox[1]
    check(width<=68 and height<=76 and 156+width<=360,
          f"painted bounds {width}x{height} fit hotspot, anchor, and world")
    check(g.crop((6,9,45,21)).getbbox() and g.crop((6,29,62,42)).getbbox(),
          "native grayscale silhouette preserves both domain banks")
    broken=[]
    for md in (ROOT/'README.md', ROOT.parent/'README.md'):
        for link in re.findall(r"\[[^]]*\]\(([^)#]+)", md.read_text(encoding='utf-8')):
            if '://' not in link and not (md.parent/link).exists(): broken.append(link)
    check(not broken, "all local links resolve")
    text=(ROOT/'README.md').read_text(encoding='utf-8').lower()
    check("not exam content" in text and "not a new location" in text and "no-exam-guarantee" in text,
          "spec preserves canon, spoiler, and exam-claim boundaries")


if __name__ == "__main__": main()
