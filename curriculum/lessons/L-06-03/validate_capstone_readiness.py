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
        d = supplied.get("decision") == item["decision"]
        r = supplied.get("reason") == item["reason"]
        points += d + r
        passed[item["topic"]] = d and r
    print(f"{form}: {points}/12")
    for topic, ok in passed.items():
        print(f"  {topic}: {'PASS' if ok else 'REMEDIATE'}")
    return points == 12 and all(passed.values())


def self_test():
    bank = load("scenario_bank.json")
    expected = {"client_flow", "text_speech_pattern", "content_understanding", "prerequisite_evidence", "readiness_recommendation", "claim_action_safety"}
    assert set(bank["boundaries"]) == expected
    exercise = load("exercise.json")
    assert exercise["mastery"]["objective_ledger_all_15_ready_required"]
    assert exercise["mastery"]["remediation_routes_closed_required"]
    for form in ("primary", "transfer"):
        assert len(bank["forms"][form]) == 6 and {x["topic"] for x in bank["forms"][form]} == expected
        assert score(form, f"reference_{form}_answers.json")
        assert not score(form, f"{form}_answers.json")
    claim_probe = load("reference_primary_answers.json")
    claim_probe["P06"]["decision"] = "guarantee_exam_and_deploy"
    assert claim_probe["P06"]["decision"] != bank["forms"]["primary"][5]["decision"]
    gap_probe = load("reference_transfer_answers.json")
    gap_probe["T04"]["decision"] = "ignore_open_remediation"
    assert gap_probe["T04"]["decision"] != bank["forms"]["transfer"][3]["decision"]
    print("self-test: PASS (references, blanks, prerequisite gates, exam-claim, and gap probes)")


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
