"""Acceptance checks for the AB-01 Portal Orientation motif."""
from pathlib import Path
import re
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent


def check(ok, message):
    if not ok: raise AssertionError(message)
    print(f"PASS: {message}")


def main():
    n = Image.open(ROOT / "portal-orientation-64x64.png")
    d = Image.open(ROOT / "qa/portal-orientation-2x-128x128.png")
    g = Image.open(ROOT / "qa/portal-orientation-grayscale-64x64.png")
    iso = Image.open(ROOT / "qa/checkpoint-isolation-2x-1152x128.png")
    check(n.mode == "RGBA" and n.size == (64, 64), "native RGBA 64x64")
    check(d.size == (128, 128) and d.tobytes() == n.resize((128, 128), Image.Resampling.NEAREST).tobytes(), "exact nearest-neighbor 2x")
    check(g.mode == "L" and g.size == (64, 64), "grayscale 64x64")
    check(iso.size == (1152, 128), "combined plus eight isolation tiles")
    small = iso.resize((576, 64), Image.Resampling.NEAREST)
    tiles = [ImageOps.grayscale(small.crop((i*64, 0, (i+1)*64, 64))).tobytes() for i in range(1, 9)]
    check(len(set(tiles)) == 8, "eight distinct grayscale checkpoints")
    p = n.load(); amber = {(100,65,34), (171,117,54), (226,177,91)}
    route = {(x,y) for y in range(64) for x in range(64) if p[x,y][:3] in amber}
    start=(6,18); seen={start}; stack=[start]
    while stack:
        x,y=stack.pop()
        for q in ((x-1,y),(x+1,y),(x,y-1),(x,y+1)):
            if q in route and q not in seen: seen.add(q); stack.append(q)
    contacts=[(6,18),(20,18),(34,18),(48,18),(48,44),(34,44),(20,44),(6,44)]
    check(all(q in seen for q in contacts), "connected rail reaches eight checkpoint frames")
    void=(7,8,18); empty=sum(p[x,y][:3]==void for y in range(42,47) for x in range(23,26))
    check(empty >= 10 and p[25,42][:3] != void, "credential slot empty and keyed")
    check(p[8,44][:3] == (117,73,151) and p[5,44][:3] == (226,177,91), "cleanup owner-lock meets terminal cap")
    check(any(p[x,y][:3] in {(76,112,130),(128,166,169)} for y in range(5,8) for x in range(43,59)), "catalog shelf separate from deployment socket")
    bbox=n.getbbox(); w=bbox[2]-bbox[0]; h=bbox[3]-bbox[1]
    check(w<=68 and h<=76 and 156+w<=360, f"{w}x{h} bounds fit target")
    broken=[]
    for md in (ROOT/'README.md', ROOT.parent/'README.md'):
        for link in re.findall(r"\[[^]]*\]\(([^)#]+)", md.read_text(encoding='utf-8')):
            if '://' not in link and not (md.parent/link).exists(): broken.append(link)
    check(not broken, "local links resolve")


if __name__ == "__main__": main()
