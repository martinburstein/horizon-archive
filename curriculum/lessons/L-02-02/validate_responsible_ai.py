import argparse
import json
from pathlib import Path

HERE = Path(__file__).parent
DIMENSIONS = ("principle", "stakeholder", "mitigation", "owner")

def load(name):
    return json.loads((HERE / name).read_text(encoding="utf-8"))

def validate_bank(bank):
    expected = set(bank["principles"])
    assert len(expected) == 6
    for form_name, scenarios in bank["forms"].items():
        assert len(scenarios) == 6, form_name
        assert len({item["id"] for item in scenarios}) == 6
        assert {item["principle"] for item in scenarios} == expected
        for item in scenarios:
            for dimension in ("stakeholder", "mitigation", "owner"):
                assert item[dimension] in item[f"{dimension}_choices"]

def evaluate(form, answers):
    key = load("answer_key.json")["forms"][form]
    return {f"{item_id}.{dimension}": answers.get(item_id, {}).get(dimension) == expected[dimension]
            for item_id, expected in key.items() for dimension in DIMENSIONS}

def self_test():
    validate_bank(load("scenario_bank.json"))
    for form in ("primary", "transfer"):
        assert all(evaluate(form, load(f"reference_{form}_answers.json")).values())
        assert not any(evaluate(form, {}).values())
    wrong = load("reference_primary_answers.json")
    wrong["P01"]["principle"] = "transparency"
    assert not evaluate("primary", wrong)["P01.principle"]
    wrong = load("reference_primary_answers.json")
    wrong["P05"]["mitigation"] = "publish_ai_disclosure_only"
    assert not evaluate("primary", wrong)["P05.mitigation"]
    wrong = load("reference_primary_answers.json")
    wrong["P06"]["owner"] = "platform_itself"
    assert not evaluate("primary", wrong)["P06.owner"]
    missing = load("reference_primary_answers.json")
    missing.pop("P01")
    assert sum(not value for key, value in evaluate("primary", missing).items() if key.startswith("P01.")) == 4
    print("SELF-TEST PASS: bank coverage and failure probes validated")

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
    print(f"{args.form.upper()}: {score}/24")
    if score != 24:
        print("Needs remediation: " + ", ".join(key for key, passed in results.items() if not passed))
        raise SystemExit(1)
    print("PASS: strict form gate met")

if __name__ == "__main__":
    main()
