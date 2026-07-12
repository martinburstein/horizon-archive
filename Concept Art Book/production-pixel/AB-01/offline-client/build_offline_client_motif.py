"""Author the AB-01 Offline Client Bridge motif at 64x64 logical pixels."""

from pathlib import Path
from PIL import Image, ImageDraw, ImageOps

ROOT = Path(__file__).resolve().parent

P = {
    "void": (7, 8, 18), "deep": (15, 17, 27), "body": (43, 40, 50),
    "edge": (88, 76, 78), "violet0": (45, 27, 70), "violet2": (117, 73, 151),
    "violet3": (166, 119, 190), "cyan0": (44, 69, 91), "cyan1": (76, 112, 130),
    "cyan2": (128, 166, 169), "amber0": (100, 65, 34), "amber1": (171, 117, 54),
    "amber2": (226, 177, 91),
}

STATIONS = {
    "module": (8, 13, 18, 23),
    "file": (25, 13, 35, 23),
    "secret": (42, 13, 54, 25),
    "request": (42, 36, 54, 48),
    "response": (22, 36, 34, 48),
}


def plate(d):
    d.polygon([(5, 59), (6, 11), (14, 5), (50, 5), (58, 12), (59, 59)], fill=P["deep"])
    d.polygon([(9, 56), (10, 13), (17, 9), (47, 9), (55, 14), (55, 56)], fill=P["body"])
    d.rectangle((9, 57, 55, 61), fill=P["deep"])
    d.rectangle((18, 56, 46, 57), fill=P["edge"])


def station_outline(d, box):
    d.rectangle(box, outline=P["amber0"], width=2)
    x0, y0, x1, _ = box
    d.line([(x0 + 2, y0 + 1), (x1 - 2, y0 + 1)], fill=P["amber2"], width=1)


def trace(d):
    # One connected snake: module -> file -> secret -> request -> response -> outlet.
    segments = [
        [(18, 18), (25, 18)], [(35, 18), (42, 18)], [(48, 25), (48, 36)],
        [(42, 42), (34, 42)], [(22, 42), (15, 42)],
    ]
    for pts in segments:
        d.line(pts, fill=P["amber0"], width=3)
        d.line(pts, fill=P["amber2"], width=1)
    # One-way teeth follow the snake's right, down, then left cadence.
    for x, y in ((21, 18), (38, 18), (48, 30)):
        d.polygon([(x - 1, y - 2), (x + 2, y), (x - 1, y + 2)], fill=P["amber1"])
    for x, y in ((38, 42), (18, 42)):
        d.polygon([(x + 1, y - 2), (x - 2, y), (x + 1, y + 2)], fill=P["amber1"])
    # Outlet beyond the response station: open split cap.
    d.rectangle((13, 38, 15, 41), fill=P["violet2"])
    d.rectangle((13, 43, 15, 46), fill=P["violet2"])


def module_station(d):
    station_outline(d, STATIONS["module"])
    d.rectangle((11, 16, 15, 20), outline=P["cyan2"], width=1)
    d.rectangle((13, 18, 14, 19), fill=P["cyan1"])


def file_station(d):
    station_outline(d, STATIONS["file"])
    d.line([(28, 16), (33, 16), (33, 18)], fill=P["cyan2"], width=1)
    d.rectangle((28, 19, 32, 20), fill=P["cyan0"])


def secret_station(d):
    # Empty keyed socket: asymmetric inward notch on right, no interior mark or fill.
    station_outline(d, STATIONS["secret"])
    d.rectangle((44, 15, 52, 23), fill=P["void"])
    d.rectangle((52, 17, 54, 21), fill=P["body"])
    d.rectangle((50, 18, 52, 20), fill=P["amber1"])


def request_station(d):
    station_outline(d, STATIONS["request"])
    d.line([(45, 39), (49, 39), (52, 42), (49, 45), (45, 45)], fill=P["cyan2"], width=1)
    d.rectangle((45, 41, 48, 43), fill=P["cyan0"])


def response_station(d):
    station_outline(d, STATIONS["response"])
    d.line([(31, 39), (27, 39), (24, 42), (27, 45), (31, 45)], fill=P["violet3"], width=1)
    d.rectangle((28, 41, 31, 43), fill=P["violet0"])


def motif(parts=("trace", "module", "file", "secret", "request", "response")):
    im = Image.new("RGBA", (64, 64), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    plate(d)
    if "trace" in parts: trace(d)
    if "module" in parts: module_station(d)
    if "file" in parts: file_station(d)
    if "secret" in parts: secret_station(d)
    if "request" in parts: request_station(d)
    if "response" in parts: response_station(d)
    return im


def main():
    (ROOT / "qa").mkdir(parents=True, exist_ok=True)
    asset = motif()
    asset.save(ROOT / "offline-client-bridge-64x64.png", optimize=False)
    asset.resize((128, 128), Image.Resampling.NEAREST).save(ROOT / "qa" / "offline-client-bridge-2x-128x128.png", optimize=False)
    ImageOps.grayscale(asset).save(ROOT / "qa" / "offline-client-bridge-grayscale-64x64.png", optimize=False)
    names = ["module", "file", "secret", "request", "response", "trace"]
    strip = Image.new("RGB", (448, 64), P["void"])
    strip.paste(asset, (0, 0), asset)
    for i, name in enumerate(names, start=1):
        tile = motif((name,))
        strip.paste(tile, (i * 64, 0), tile)
    strip.resize((896, 128), Image.Resampling.NEAREST).save(ROOT / "qa" / "station-trace-isolation-2x-896x128.png", optimize=False)


if __name__ == "__main__":
    main()
