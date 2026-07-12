"""Generate the deterministic offline basin-audio bridge asset."""

from __future__ import annotations

import math
import random
import struct
import wave
from pathlib import Path


OUTPUT = Path(__file__).with_name("evidence") / "basin_audio.wav"
SAMPLE_RATE = 16_000
DURATION_SECONDS = 3


def generate() -> None:
    random_source = random.Random(901)
    filtered_noise = 0.0
    frames = bytearray()
    for index in range(SAMPLE_RATE * DURATION_SECONDS):
        time_s = index / SAMPLE_RATE
        raw_noise = random_source.uniform(-1.0, 1.0)
        filtered_noise = 0.985 * filtered_noise + 0.015 * raw_noise
        water = 0.30 * math.sin(2 * math.pi * 73 * time_s)
        water += 0.18 * math.sin(2 * math.pi * 127 * time_s + 0.7)
        slow_level = 0.55 + 0.20 * math.sin(2 * math.pi * 0.45 * time_s)
        sample = slow_level * (water + 1.8 * filtered_noise)
        sample_i16 = max(-32767, min(32767, int(sample * 2800)))
        frames.extend(struct.pack("<h", sample_i16))

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with wave.open(str(OUTPUT), "wb") as output:
        output.setnchannels(1)
        output.setsampwidth(2)
        output.setframerate(SAMPLE_RATE)
        output.writeframes(frames)
    print(f"Generated {OUTPUT.name}: {DURATION_SECONDS}.0 seconds, {SAMPLE_RATE} Hz, mono")


if __name__ == "__main__":
    generate()
