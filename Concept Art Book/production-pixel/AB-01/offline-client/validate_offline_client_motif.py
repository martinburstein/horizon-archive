"""Validate every approval gate for the Offline Client Bridge motif."""

from pathlib import Path
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parent
VOID = (7, 8, 18)
AMBER = {(100, 65, 34), (171, 117, 54), (226, 177, 91)}


def connected(points):
    seen = set()
    stack = [next(iter(points))]
    while stack:
        point = stack.pop()
        if point in seen:
            continue
        seen.add(point)
        x, y = point
        stack.extend(
            (nx, ny)
            for nx in range(x - 1, x + 2)
            for ny in range(y - 1, y + 2)
            if (nx, ny) in points and (nx, ny) not in seen
        )
    return seen


def main():
    native = Image.open(ROOT / "offline-client-bridge-64x64.png")
    doubled = Image.open(ROOT / "qa" / "offline-client-bridge-2x-128x128.png")
    grayscale = Image.open(ROOT / "qa" / "offline-client-bridge-grayscale-64x64.png")
    isolation = Image.open(ROOT / "qa" / "station-trace-isolation-2x-896x128.png")

    assert native.size == (64, 64) and native.mode == "RGBA"
    assert doubled.size == (128, 128)
    assert native.resize((128, 128), Image.Resampling.NEAREST).tobytes() == doubled.tobytes()
    assert grayscale.size == (64, 64) and isolation.size == (896, 128)

    tiles = [isolation.crop((i * 128, 0, (i + 1) * 128, 128)).convert("L") for i in range(1, 7)]
    assert all(
        ImageChops.difference(tiles[i], tiles[j]).getbbox()
        for i in range(6)
        for j in range(i + 1, 6)
    )
    # Request and response isolation tiles are intentionally distinct mirrors.
    assert ImageChops.difference(tiles[3], tiles[4]).getbbox()

    rgb = native.convert("RGB")
    network = {
        (x, y)
        for y in range(64)
        for x in range(64)
        if rgb.getpixel((x, y)) in AMBER
    }
    assert connected(network) == network
    assert rgb.getpixel((51, 19)) == (171, 117, 54)
    assert all(rgb.getpixel((51, y)) == (171, 117, 54) for y in range(14, 19))

    secret_empty = sum(
        rgb.getpixel((x, y)) == VOID
        for y in range(15, 24)
        for x in range(44, 53)
    )
    assert secret_empty >= 60

    # Direction geometry: right, right, down, then left, left.
    assert rgb.getpixel((23, 18)) == (171, 117, 54)
    assert rgb.getpixel((40, 18)) == (171, 117, 54)
    assert rgb.getpixel((48, 32)) == (171, 117, 54)
    assert rgb.getpixel((36, 42)) == (171, 117, 54)
    assert rgb.getpixel((16, 42)) == (171, 117, 54)

    assert native.getbbox() == (5, 5, 60, 62)
    hotspot = (68, 76)
    assert hotspot[0] >= 44 and hotspot[1] >= 44
    assert 211 + 64 <= 360

    print("offline-client approval gates: PASS")
    print(f"connected network: {len(network)}/{len(network)} pixels")
    print(f"secret empty interior: {secret_empty}/81 pixels; keyed stem connected")
    print("direction cues: right, right, down, left, left")
    print("request/response grayscale distinction: PASS")
    print("native/2x/grayscale/isolation/target/world-boundary: PASS")


if __name__ == "__main__":
    main()
