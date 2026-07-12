import argparse
import json
from pathlib import Path

HERE = Path(__file__).parent
DIMENSIONS = ("decision", "reason")

def load(name):
    return json.loads((HERE / name).read_text(encoding="utf-8"))

def validate_bank(bank):
    required = set(bank["topic_families"])
    assert required == {"mechanics", "model_choice", "deployment", "configuration"}
    for form, items in bank["forms"].items():
        assert len(items) == 8, form
        assert len({item["id"] for item in items}) == 8
        assert {item["topic"] for item in items} == required

def evaluate(form, answers):
    key = load("answer_key.json")["forms"][form]
    return {f"{item}.{dimension}": answers.get(item, {}).get(dimension) == expected[dimension]
            for item, expected in key.items() for dimension in DIMENSIONS}

def self_test():
    validate_bank(load("scenario_bank.json"))
    for form in ("primary", "transfer"):
        assert all(evaluate(form, load(f"reference_{form}_answers.json")).values())
        assert not any(evaluate(form, {}).values())
    wrong = load("reference_primary_answers.json")
    wrong["P04"]["decision"] = "provisioned_deployment"
    assert not evaluate("primary", wrong)["P04.decision"]
    wrong = load("reference_transfer_answers.json")
    wrong["T07"]["reason"] = "always_change_both"
    assert not evaluate("transfer", wrong)["T07.reason"]
    missing = load("reference_primary_answers.json"); missing.pop("P01")
    assert sum(not value for key, value in evaluate("primary", missing).items() if key.startswith("P01.")) == 2
    print("SELF-TEST PASS: coverage, references, and failure probes validated")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--form", choices=("primary", "transfer"))
    parser.add_argument("--check")
    parser.add_argument("--self-test", action="store_true")
    args = parser.parse_args()
    if args.self_test:
        self_test(); return
    if not args.form or not args.check:
        parser.error("use --self-test or provide --form and --check")
    validate_bank(load("scenario_bank.json"))
    results = evaluate(args.form, json.loads(Path(args.check).read_text(encoding="utf-8")))
    score = sum(results.values())
    print(f"{args.form.upper()}: {score}/16")
    if score != 16:
        print("Needs remediation: " + ", ".join(k for k, passed in results.items() if not passed))
        raise SystemExit(1)
    print("PASS: strict form gate met")

if __name__ == "__main__":
    main()
