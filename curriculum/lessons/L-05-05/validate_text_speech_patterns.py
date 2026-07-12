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
    boundary_pass = {}
    for item in items:
        supplied = answers.get(item["id"], {})
        decision_ok = supplied.get("decision") == item["decision"]
        reason_ok = supplied.get("reason") == item["reason"]
        points += decision_ok + reason_ok
        boundary_pass[item["topic"]] = decision_ok and reason_ok
    print(f"{form}: {points}/12")
    for boundary, passed in boundary_pass.items():
        print(f"  {boundary}: {'PASS' if passed else 'REMEDIATE'}")
    return points == 12 and all(boundary_pass.values())


def self_test():
    bank = load("scenario_bank.json")
    expected = {"text_capability", "speech_direction", "multimodal_spoken_prompt", "client_configuration", "result_handling", "action_safety"}
    assert set(bank["boundaries"]) == expected
    for form in ("primary", "transfer"):
        items = bank["forms"][form]
        assert len(items) == 6 and {item["topic"] for item in items} == expected
        assert score(form, f"reference_{form}_answers.json")
        assert not score(form, f"{form}_answers.json")
    cancellation_probe = load("reference_primary_answers.json")
    cancellation_probe["P05"]["decision"] = "treat_cancellation_as_content"
    assert cancellation_probe["P05"]["decision"] != bank["forms"]["primary"][4]["decision"]
    action_probe = load("reference_transfer_answers.json")
    action_probe["T06"]["reason"] = "prompt_authorizes_disclosure"
    assert action_probe["T06"]["reason"] != bank["forms"]["transfer"][5]["reason"]
    print("self-test: PASS (references, blanks, coverage, cancellation, and action probes)")


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
