"""Deterministic validator for the L-05-07 offline extraction exercise."""

from __future__ import annotations

import argparse
import copy
import json
from pathlib import Path


LESSON_DIR = Path(__file__).resolve().parent
WORKSPACE_ROOT = LESSON_DIR.parents[2]
EVIDENCE_DIR = LESSON_DIR / "evidence"
EXPECTED_FIELDS = {
    "structure_count",
    "access_surface_detected",
    "audible_response_detected",
    "response_meaning",
}


def load_json(path: Path) -> dict:
    with path.open(encoding="utf-8") as stream:
        return json.load(stream)


def sources(field: dict) -> set[str]:
    value = field.get("source_ids", [])
    return set(value) if isinstance(value, list) else set()


def meaningful_uncertainty(field: dict) -> bool:
    value = field.get("uncertainty")
    return isinstance(value, str) and len(value.strip()) >= 12 and value.strip() != "TODO"


def evaluate(result: dict) -> list[tuple[str, bool]]:
    fields = result.get("fields", {})
    checks: list[tuple[str, bool]] = []
    checks.append(("E_PACKET_MODE", result.get("packet_id") == "DA-PACKET-01" and result.get("simulation_mode") == "offline_course_asset"))
    checks.append(("E_FIELD_SET", isinstance(fields, dict) and set(fields) == EXPECTED_FIELDS))

    structure = fields.get("structure_count", {})
    access = fields.get("access_surface_detected", {})
    audio = fields.get("audible_response_detected", {})
    meaning = fields.get("response_meaning", {})
    checks.append(("E_STRUCTURE_VALUE", type(structure.get("value")) is int and structure.get("value") == 1))
    checks.append(("E_STRUCTURE_SOURCES", sources(structure) == {"DA-IMG-01"}))
    checks.append(("E_ACCESS_FALSE", access.get("value") is False))
    checks.append(("E_ACCESS_SOURCES", sources(access) == {"DA-IMG-01", "DA-TEL-01"}))
    checks.append(("E_AUDIO_FALSE", audio.get("value") is False))
    checks.append(("E_AUDIO_SOURCES", sources(audio) == {"DA-AUD-01", "DA-TEL-01"}))
    checks.append(("E_RESPONSE_NULL", "value" in meaning and meaning.get("value") is None))
    checks.append(("E_RESPONSE_SOURCES", sources(meaning) == {"DA-IMG-01", "DA-AUD-01", "DA-TEL-01"}))
    checks.append(("E_MODALITIES", set(result.get("modalities_reviewed", [])) == {"audio", "image", "telemetry"}))
    checks.append(("E_UNCERTAINTY_POLICY", all(meaningful_uncertainty(field) for field in (structure, access, audio, meaning)) and result.get("unsupported_value_policy") == "null"))
    return checks


def validate_packet_assets() -> None:
    manifest = load_json(EVIDENCE_DIR / "source_manifest.json")
    assert manifest["packet_id"] == "DA-PACKET-01"
    assert manifest["simulation_mode"] == "offline_course_asset"
    assert {source["source_id"] for source in manifest["sources"]} == {
        "DA-IMG-01", "DA-AUD-01", "DA-TEL-01"
    }
    assert {source["modality"] for source in manifest["sources"]} == {
        "image", "audio", "telemetry"
    }
    for source in manifest["sources"]:
        assert (WORKSPACE_ROOT / source["workspace_path"]).is_file(), source["source_id"]


def self_test() -> None:
    validate_packet_assets()
    reference = load_json(LESSON_DIR / "reference_output.json")
    assert all(passed for _, passed in evaluate(reference))

    invented = copy.deepcopy(reference)
    invented["fields"]["response_meaning"]["value"] = "dormant"
    assert not dict(evaluate(invented))["E_RESPONSE_NULL"]

    missing_source = copy.deepcopy(reference)
    missing_source["fields"]["access_surface_detected"]["source_ids"] = ["DA-IMG-01"]
    assert not dict(evaluate(missing_source))["E_ACCESS_SOURCES"]

    null_is_false = copy.deepcopy(reference)
    null_is_false["fields"]["access_surface_detected"]["value"] = None
    assert not dict(evaluate(null_is_false))["E_ACCESS_FALSE"]

    prose_not_schema = copy.deepcopy(reference)
    prose_not_schema["fields"]["broad_description"] = {"value": "A ruin", "source_ids": ["DA-IMG-01"], "uncertainty": "open prose"}
    assert not dict(evaluate(prose_not_schema))["E_FIELD_SET"]
    print("L-05-07 validator self-test: PASS (valid + 4 critical negative fixtures)")


def check(path: Path) -> int:
    result = load_json(path)
    checks = evaluate(result)
    passed_count = sum(passed for _, passed in checks)
    for code, passed in checks:
        print(f"{'PASS' if passed else 'FAIL'} {code}")
    print(f"Score: {passed_count}/{len(checks)}")
    if passed_count == len(checks):
        print("Mastery: PASS")
        return 0
    print("Mastery: REMEDIATE AND RETRY")
    return 1


def main() -> int:
    parser = argparse.ArgumentParser()
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--self-test", action="store_true")
    group.add_argument("--check", type=Path)
    args = parser.parse_args()
    if args.self_test:
        self_test()
        return 0
    return check(args.check)


if __name__ == "__main__":
    raise SystemExit(main())
