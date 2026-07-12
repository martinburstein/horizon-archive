import argparse
import json
from pathlib import Path

ROOT = Path(__file__).parent


def load(name):
    return json.loads((ROOT / name).read_text(encoding="utf-8"))


def score(form, answer_file):
    items = load("scenario_bank.json")["forms"][form]
    answers = load(answer_file)
    points = 0
    passed = {}
    for item in items:
        supplied = answers.get(item["id"], {})
        decision_ok = supplied.get("decision") == item["decision"]
        reason_ok = supplied.get("reason") == item["reason"]
        points += decision_ok + reason_ok
        passed[item["topic"]] = decision_ok and reason_ok
    print(f"{form}: {points}/30; objectives: {sum(passed.values())}/15")
    for objective, ok in passed.items():
        if not ok:
            print(f"  {objective}: REMEDIATE")
    return points == 30 and len(passed) == 15 and all(passed.values())


def self_test():
    bank = load("scenario_bank.json")
    expected = set(bank["objective_ids"])
    assert len(expected) == 15
    for form in ("primary", "transfer"):
        items = bank["forms"][form]
        assert len(items) == 15 and {x["topic"] for x in items} == expected
        assert score(form, f"reference_{form}_answers.json")
        assert not score(form, f"{form}_answers.json")
    confidence_probe = load("reference_primary_answers.json")
    confidence_probe["P11"] = {"decision": "AI901-D2-O3", "reason": "high_confidence"}
    assert confidence_probe["P11"]["reason"] != bank["forms"]["primary"][10]["reason"]
    action_probe = load("reference_transfer_answers.json")
    action_probe["T12"]["reason"] = "simulation_authorizes_live_tool_action"
    assert action_probe["T12"]["reason"] != bank["forms"]["transfer"][11]["reason"]
    print("self-test: PASS (15-objective coverage, references, blanks, confidence, and action probes)")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--form", choices=("primary", "transfer"))
    parser.add_argument("--check")
    parser.add_argument("--self-test", action="store_true")
    args = parser.parse_args()
    if args.self_test:
        self_test()
    elif args.form and args.check:
        raise SystemExit(0 if score(args.form, args.check) else 1)
    else:
        parser.error("use --self-test or --form FORM --check FILE")
