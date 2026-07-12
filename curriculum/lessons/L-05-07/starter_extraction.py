"""Learner starter for L-05-07. Edit the TODO values, then run this file."""

from __future__ import annotations

import json
from pathlib import Path


LESSON_DIR = Path(__file__).resolve().parent
EVIDENCE_DIR = LESSON_DIR / "evidence"


def load_json(path: Path) -> dict:
    with path.open(encoding="utf-8") as stream:
        return json.load(stream)


def field(value, source_ids: list[str], uncertainty: str) -> dict:
    return {
        "value": value,
        "source_ids": source_ids,
        "uncertainty": uncertainty,
    }


manifest = load_json(EVIDENCE_DIR / "source_manifest.json")
telemetry = load_json(EVIDENCE_DIR / "telemetry.json")

# TODO: Replace placeholders using only evidence supported by the packet.
output = {
    "packet_id": manifest["packet_id"],
    "simulation_mode": "offline_course_asset",
    "fields": {
        "structure_count": field(None, [], "TODO"),
        "access_surface_detected": field(None, [], "TODO"),
        "audible_response_detected": field(None, [], "TODO"),
        "response_meaning": field(None, [], "TODO"),
    },
    "modalities_reviewed": [],
    "unsupported_value_policy": "null",
}

output_path = LESSON_DIR / "working_output.json"
with output_path.open("w", encoding="utf-8") as stream:
    json.dump(output, stream, indent=2)
    stream.write("\n")
print(f"Wrote {output_path.name}. Validate it after completing the TODO values.")
