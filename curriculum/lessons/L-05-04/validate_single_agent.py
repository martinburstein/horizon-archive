import argparse
import json
from pathlib import Path

ROOT = Path(__file__).parent


def load(name):
    return json.loads((ROOT / name).read_text(encoding="utf-8"))


def score(form, answer_file):
    bank = load("scenario_bank.json")["forms"][form]
    answers = load(answer_file)
    points = 0
    boundary_pass = {}
    for item in bank:
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
    expected = set(bank["boundaries"])
    assert expected == {"agent_fit", "instructions", "tools", "portal_test", "action_safety", "client_flow"}
    for form in ("primary", "transfer"):
        items = bank["forms"][form]
        assert len(items) == 6
        assert {item["topic"] for item in items} == expected
        assert score(form, f"reference_{form}_answers.json")
    assert not score("primary", "primary_answers.json")
    assert not score("transfer", "transfer_answers.json")
    probe = load("reference_primary_answers.json")
    probe["P05"]["reason"] = "tool_is_permission"
    assert probe["P05"]["reason"] != bank["forms"]["primary"][4]["reason"]
    transfer_probe = load("reference_transfer_answers.json")
    transfer_probe["T03"]["decision"] = "claim_success"
    assert transfer_probe["T03"]["decision"] != bank["forms"]["transfer"][2]["decision"]
    print("self-test: PASS (references, blanks, boundary coverage, and failure probes)")


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
