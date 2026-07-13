"""Validate the Workload Sort reconstruction learner boundary."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


LESSON_DIR = Path(__file__).resolve().parent
GUIDE = LESSON_DIR / "saved-evidence-resume-guide.md"
EXERCISE = LESSON_DIR / "exercise.json"
RUNTIME = LESSON_DIR.parents[2] / "horizon-archive-game" / "src" / "workloadSortExercise.js"

STATUS_LINES = (
    "Choose the best primary workload or Terminal state, then check the card.",
    "Saved evidence restored. Continue with the first incomplete card.",
    "Saved form complete. Review the result and confirm or remediate it.",
)

REQUIRED_GUIDE_TEXT = (
    "prior assessed progress",
    "does not create a new attempt",
    "does not retain your selected choice, private or free-form response",
    "at least **10/12**",
    "no critical contrast miss",
    "fresh-form retry",
    "`Acknowledge mastery`",
    "does not count as Microsoft exam credit",
    "not a readiness guarantee",
    "does not call Microsoft Foundry or Azure",
    "grant external authority",
)


def validate_guide(text: str) -> list[str]:
    errors = [f"missing guide boundary: {item}" for item in REQUIRED_GUIDE_TEXT if item not in text]
    errors.extend(f"missing exact System message: {line}" for line in STATUS_LINES if line not in text)
    if text.count("## Quick retrieval check") != 1:
        errors.append("guide must contain exactly one retrieval check")
    return errors


def validate_exercise(asset: dict) -> list[str]:
    errors: list[str] = []
    mastery = asset.get("mastery", {})
    if mastery.get("minimum_correct") != 10 or mastery.get("total") != 12:
        errors.append("mastery threshold must remain 10/12")
    if mastery.get("critical_items_must_pass") is not True:
        errors.append("critical-item override must remain enabled")

    session = asset.get("session_contract", {})
    expected = {
        "close_reopen": "restore_active_draft_in_memory_without_submitting",
        "reload_or_scene_round_trip": "clear_working_session_and_reconstruct_from_sanitized_contiguous_finalized_evidence",
        "unfinalized_item": "open_first_incomplete_card_with_blank_choice_and_clean_per_card_controls",
        "completed_form": "restore_result_gate_without_acknowledging_mastery",
        "mastery_evidence": "persist_separately",
    }
    for key, value in expected.items():
        if session.get(key) != value:
            errors.append(f"session contract mismatch: {key}")

    excluded = set(asset.get("evidence_contract", {}).get("do_not_store", []))
    required_exclusions = {
        "selected_choice",
        "free_form_response_text",
        "scenario_prompt_copy",
        "transient_feedback",
        "working_index",
        "per_card_attempt_state",
        "open_hint_state",
        "session_object",
    }
    missing = sorted(required_exclusions - excluded)
    if missing:
        errors.append(f"privacy exclusions missing: {', '.join(missing)}")
    return errors


def validate_runtime(text: str) -> list[str]:
    return [f"runtime no longer contains exact System message: {line}" for line in STATUS_LINES if line not in text]


def self_test() -> None:
    guide = GUIDE.read_text(encoding="utf-8")
    exercise = json.loads(EXERCISE.read_text(encoding="utf-8"))
    runtime = RUNTIME.read_text(encoding="utf-8")
    assert not validate_guide(guide), validate_guide(guide)
    assert not validate_exercise(exercise), validate_exercise(exercise)
    assert not validate_runtime(runtime), validate_runtime(runtime)

    missing_attempt_boundary = guide.replace("does not create a new attempt", "continues")
    assert any("new attempt" in error for error in validate_guide(missing_attempt_boundary))

    weak_gate = json.loads(json.dumps(exercise))
    weak_gate["mastery"]["minimum_correct"] = 9
    assert any("10/12" in error for error in validate_exercise(weak_gate))
    print("L-02-01 saved-evidence resume self-test: PASS")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--self-test", action="store_true")
    args = parser.parse_args()
    if args.self_test:
        self_test()
        return 0

    errors = [
        *validate_guide(GUIDE.read_text(encoding="utf-8")),
        *validate_exercise(json.loads(EXERCISE.read_text(encoding="utf-8"))),
        *validate_runtime(RUNTIME.read_text(encoding="utf-8")),
    ]
    if errors:
        for error in errors:
            print(f"FAIL: {error}")
        return 1
    print("PASS: L-02-01 saved-evidence resume guide, exercise contract, and runtime messages")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
