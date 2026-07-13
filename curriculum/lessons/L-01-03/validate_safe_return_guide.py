"""Validate the learner-facing navigation-versus-evidence boundary."""

from __future__ import annotations

import argparse
from pathlib import Path


GUIDE = Path(__file__).with_name("safe-return-state-guide.md")

REQUIRED_TEXT = (
    "`Return: Glass Meadow`",
    "`Return to Chapter I, Glass Meadow`",
    "`Depart: Drowned Archive`",
    "`Depart for Chapter II, The Drowned Archive`",
    "It does not run Python, submit an answer, or create assessment evidence.",
    "A new attempt, point, pass, mastery status, objective completion, exam-progress credit, or readiness decision",
    "8/8 + 8/8 + 4/4",
    "does not call Microsoft Foundry or Azure",
    "does not guarantee an exam result",
)


def validate(text: str) -> list[str]:
    errors = [f"missing required boundary: {item}" for item in REQUIRED_TEXT if item not in text]
    if text.count("| Navigation |") != 1:
        errors.append("state table must contain exactly one Navigation row")
    if text.count("## Quick retrieval check") != 1:
        errors.append("guide must contain exactly one retrieval check")
    if "Returning to a scene cannot weaken, satisfy, or bypass that gate." not in text:
        errors.append("strict-gate non-bypass statement is missing")
    return errors


def self_test() -> None:
    source = GUIDE.read_text(encoding="utf-8")
    assert not validate(source), validate(source)

    missing_control = source.replace("`Return: Glass Meadow`", "`Return`")
    assert any("Return: Glass Meadow" in error for error in validate(missing_control))

    missing_gate = source.replace(
        "Returning to a scene cannot weaken, satisfy, or bypass that gate.",
        "Returning is convenient.",
    )
    assert any("non-bypass" in error for error in validate(missing_gate))
    print("L-01-03 safe-return guide self-test: PASS")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", type=Path, default=GUIDE)
    parser.add_argument("--self-test", action="store_true")
    args = parser.parse_args()

    if args.self_test:
        self_test()
        return 0

    errors = validate(args.check.read_text(encoding="utf-8"))
    if errors:
        for error in errors:
            print(f"FAIL: {error}")
        return 1
    print(f"PASS: {args.check}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
