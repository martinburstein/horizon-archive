"""Inspect the offline multimodal packet without external packages or network access."""

from __future__ import annotations

import json
import wave
from pathlib import Path


LESSON_DIR = Path(__file__).resolve().parent
WORKSPACE_ROOT = LESSON_DIR.parents[2]
EVIDENCE_DIR = LESSON_DIR / "evidence"


def load_json(path: Path) -> dict:
    with path.open(encoding="utf-8") as stream:
        return json.load(stream)


def inspect() -> None:
    manifest = load_json(EVIDENCE_DIR / "source_manifest.json")
    telemetry = load_json(EVIDENCE_DIR / "telemetry.json")
    sources = manifest["sources"]
    modalities = sorted(source["modality"] for source in sources)
    for source in sources:
        path = WORKSPACE_ROOT / source["workspace_path"]
        if not path.is_file():
            raise FileNotFoundError(f"Missing source {source['source_id']}: {path}")

    audio_path = WORKSPACE_ROOT / next(
        source["workspace_path"] for source in sources if source["modality"] == "audio"
    )
    with wave.open(str(audio_path), "rb") as audio:
        duration = audio.getnframes() / audio.getframerate()
        sample_rate = audio.getframerate()
        channels = audio.getnchannels()

    measurements = telemetry["measurements"]
    channel_name = "mono" if channels == 1 else f"{channels} channels"
    print(f"Sources: {len(sources)} ({', '.join(modalities)})")
    print(f"Audio: {duration:.1f} seconds at {sample_rate} Hz, {channel_name}")
    print(
        "Telemetry landmark access detections: "
        f"{measurements['bounded_access_surfaces_detected']}"
    )
    print(
        "Telemetry landmark audible responses: "
        f"{measurements['audible_response_events_above_threshold']}"
    )


if __name__ == "__main__":
    inspect()
