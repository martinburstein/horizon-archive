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
    print(f"{form}: {points}/12")
    for topic, ok in passed.items():
        print(f"  {topic}: {'PASS' if ok else 'REMEDIATE'}")
    return points == 12 and all(passed.values())


def self_test():
    bank = load("scenario_bank.json")
    expected = {"image_analysis", "multimodal_prompt", "image_generation", "request_contract", "result_provenance", "action_safety"}
    assert set(bank["boundaries"]) == expected
    for form in ("primary", "transfer"):
        assert len(bank["forms"][form]) == 6
        assert {x["topic"] for x in bank["forms"][form]} == expected
        assert score(form, f"reference_{form}_answers.json")
        assert not score(form, f"{form}_answers.json")
    provenance_probe = load("reference_transfer_answers.json")
    provenance_probe["T05"]["decision"] = "store_as_observed_fact"
    assert provenance_probe["T05"]["decision"] != bank["forms"]["transfer"][4]["decision"]
    action_probe = load("reference_primary_answers.json")
    action_probe["P06"]["reason"] = "prompt_authorizes_publication"
    assert action_probe["P06"]["reason"] != bank["forms"]["primary"][5]["reason"]
    print("self-test: PASS (references, blanks, coverage, provenance, and action probes)")


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
