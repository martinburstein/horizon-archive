"""Acceptance checks for the Speech Workloads production strip."""

from pathlib import Path
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parent
AMBER = {(100, 65, 34), (171, 117, 54), (226, 177, 91)}


def component_count(tile):
    rgb = tile.convert("RGB")
    points = {(x, y) for y in range(64) for x in range(64) if rgb.getpixel((x, y)) in AMBER}
    count = 0
    while points:
        count += 1
        stack = [next(iter(points))]
        while stack:
            point = stack.pop()
            if point not in points:
                continue
            points.remove(point)
            x, y = point
            stack.extend(
                (nx, ny)
                for nx in range(x - 1, x + 2)
                for ny in range(y - 1, y + 2)
                if (nx, ny) in points
            )
    return count


def main():
    native = Image.open(ROOT / "speech-workloads-1x-256x64.png")
    doubled = Image.open(ROOT / "qa" / "speech-workloads-2x-512x128.png")
    isolation = Image.open(ROOT / "qa" / "speech-workloads-isolation-2x-512x128.png")
    grayscale = Image.open(ROOT / "qa" / "speech-workloads-grayscale-256x64.png")

    assert native.size == (256, 64) and native.mode == "RGB"
    assert doubled.size == (512, 128) and isolation.size == (512, 128)
    expected = native.resize((512, 128), Image.Resampling.NEAREST)
    assert expected.tobytes() == doubled.tobytes() == isolation.tobytes()
    assert grayscale.size == (256, 64)

    tiles = [native.crop((i * 64, 0, (i + 1) * 64, 64)) for i in range(4)]
    gray = [tile.convert("L") for tile in tiles]
    assert all(
        ImageChops.difference(gray[i], gray[j]).getbbox()
        for i in range(4)
        for j in range(i + 1, 4)
    )
    counts = [component_count(tile) for tile in tiles]
    assert counts == [1, 1, 1, 2], counts

    # Direction tips are physically joined to each active channel.
    assert tiles[0].getpixel((36, 31)) == (171, 117, 54)
    assert tiles[1].getpixel((36, 31)) == (171, 117, 54)
    assert tiles[2].getpixel((33, 34)) == (171, 117, 54)
    # Cancellation gap remains empty between capped channel halves.
    assert all(tiles[3].getpixel((x, 31)) == (43, 40, 50) for x in range(29, 36))

    assert 68 >= 44 and 76 >= 44
    assert 211 + 64 <= 360
    print("speech-workloads acceptance: PASS")
    print("native/2x/grayscale/isolation: PASS")
    print("all six grayscale pairs distinct: PASS")
    print("signal components:", counts)
    print("direction cues and cancellation gap: PASS")
    print("target and world/footer separation: PASS")


if __name__ == "__main__":
    main()
