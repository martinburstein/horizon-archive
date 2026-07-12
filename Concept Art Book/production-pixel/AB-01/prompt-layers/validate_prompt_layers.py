"""Acceptance checks for the AB-01 Prompt Layers motif."""
from pathlib import Path
import re
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent


def check(ok, message):
    if not ok: raise AssertionError(message)
    print(f"PASS: {message}")


def main():
    n = Image.open(ROOT / "prompt-layers-64x64.png")
    d = Image.open(ROOT / "qa/prompt-layers-2x-128x128.png")
    g = Image.open(ROOT / "qa/prompt-layers-grayscale-64x64.png")
    iso = Image.open(ROOT / "qa/layer-isolation-2x-896x128.png")
    check(n.mode == "RGBA" and n.size == (64,64), "native RGBA 64x64")
    check(d.size == (128,128) and d.tobytes() == n.resize((128,128), Image.Resampling.NEAREST).tobytes(), "exact nearest-neighbor 2x")
    check(g.mode == "L" and g.size == (64,64), "grayscale 64x64")
    check(iso.size == (896,128), "combined plus six isolation tiles")
    small = iso.resize((448,64), Image.Resampling.NEAREST)
    tiles = [ImageOps.grayscale(small.crop((i*64,0,(i+1)*64,64))).tobytes() for i in range(1,7)]
    check(len(set(tiles)) == 6, "six pairwise-distinct grayscale layers")

    p=n.load(); amber={(100,65,34),(171,117,54),(226,177,91)}
    accepted={(x,y) for y in range(4,58) for x in range(22,43) if p[x,y][:3] in amber}
    start=(32,5); seen={start}; stack=[start]
    while stack:
        x,y=stack.pop()
        for q in ((x-1,y),(x+1,y),(x,y-1),(x,y+1)):
            if q in accepted and q not in seen: seen.add(q); stack.append(q)
    check(all((32,y) in seen for y in (5,8,17,26,35,44,53,56)), "one linked spine reaches all six layers")

    violet={(117,73,151),(166,119,190)}; body=(43,40,50)
    spur=any(p[x,y][:3] in violet for y in range(13,22) for x in range(3,15))
    gap=all(p[x,y][:3] not in violet|amber for y in range(14,21) for x in range(15,22))
    check(spur and gap, "injection side spur ends at hard rejection gap")
    shackle=all(any(p[x,y][:3] == (128,166,169) for y in range(28,34)) for x in (54,59))
    barrier=all(p[x,35][:3] == body for x in range(48,51))
    check(shackle and barrier and p[56,37][:3] == (128,166,169), "external action socket is locked beyond a solid boundary")

    bbox=n.getbbox(); w=bbox[2]-bbox[0]; h=bbox[3]-bbox[1]
    check(w<=68 and h<=76 and 156+w<=360, f"{w}x{h} bounds fit AB-01 target")
    broken=[]
    for md in (ROOT/'README.md', ROOT.parent/'README.md'):
        for link in re.findall(r"\[[^]]*\]\(([^)#]+)", md.read_text(encoding='utf-8')):
            if '://' not in link and not (md.parent/link).exists(): broken.append(link)
    check(not broken, "local links resolve")


if __name__ == "__main__": main()
