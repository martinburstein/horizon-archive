"""Offline deterministic practice for L-02-01; no learner responses are persisted."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


EXERCISE_PATH = Path(__file__).with_name("exercise.json")


def load_exercise() -> dict:
    with EXERCISE_PATH.open(encoding="utf-8") as stream:
        return json.load(stream)


def validate_asset(exercise: dict) -> None:
    keys = exercise["workload_keys"]
    assert exercise["lesson_id"] == "L-02-01"
    assert exercise["activity_id"] == "A-L0201-2"
    all_ids: list[str] = []
    for form_name in ("items", "retry_items"):
        items = exercise[form_name]
        assert len(items) == exercise["mastery"]["total"] == 12
        assert len({item["id"] for item in items}) == len(items)
        assert all(item["answer"] in keys for item in items)
        assert all(item["hint"] and item["tags"] for item in items)
        all_ids.extend(item["id"] for item in items)
    assert len(set(all_ids)) == len(all_ids)
    assert exercise["mastery"]["minimum_correct"] == 10
    assert {
        "free_form_source",
        "selected_choice",
        "free_form_response_text",
        "scenario_prompt_copy",
        "transient_feedback",
        "working_index",
        "per_card_attempt_state",
        "open_hint_state",
        "session_object",
    }.issubset(set(exercise["evidence_contract"]["do_not_store"]))
    assert exercise["session_contract"]["reload_or_scene_round_trip"] == (
        "clear_working_session_and_reconstruct_from_sanitized_contiguous_finalized_evidence"
    )
    assert exercise["session_contract"]["completed_form"] == (
        "restore_result_gate_without_acknowledging_mastery"
    )


def run(exercise: dict, form: str) -> int:
    items = exercise["items"] if form == "primary" else exercise["retry_items"]
    print(f"WORKLOAD SORT ({form.upper()}) — enter g/a/t/s/v/i or src/out/ev/session")
    correct = 0
    critical_misses: list[str] = []
    for item in items:
        print(f"\n{item['id']}: {item['prompt']}")
        answer = input("> ").strip().lower()
        if answer == item["answer"]:
            print("Correct.")
            correct += 1
        else:
            print(f"Not yet. Hint: {item['hint']}")
            retry = input("Retry > ").strip().lower()
            if retry == item["answer"]:
                print("Correct after hint.")
                correct += 1
            elif item["critical"]:
                critical_misses.extend(item["tags"])

    passed = correct >= exercise["mastery"]["minimum_correct"] and not critical_misses
    print(f"\nScore: {correct}/{len(items)}")
    print("Mastery: PASS" if passed else "Mastery: REMEDIATE AND RETRY")
    if critical_misses:
        print("Review contrasts: " + ", ".join(sorted(set(critical_misses))))
    return 0 if passed else 1


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--self-test", action="store_true")
    parser.add_argument("--form", choices=("primary", "retry"), default="primary")
    args = parser.parse_args()
    exercise = load_exercise()
    validate_asset(exercise)
    if args.self_test:
        print("L-02-01 exercise asset: PASS (2 x 12 items, deterministic keys, privacy contract present)")
        return 0
    return run(exercise, args.form)


if __name__ == "__main__":
    raise SystemExit(main())
