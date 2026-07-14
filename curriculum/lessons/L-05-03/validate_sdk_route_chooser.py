import argparse
import json
from pathlib import Path

HERE = Path(__file__).parent
DIMENSIONS = ("route", "reason")
EXPECTED_BOUNDARIES = {
    "foundry_native",
    "hosted_agent_code",
    "openai_compatibility",
    "claude_models",
    "service_specific_tool",
    "resource_scope",
    "identity_authority",
    "volatile_detail",
}


def load(name):
    return json.loads((HERE / name).read_text(encoding="utf-8"))


def validate_bank(bank):
    assert bank["verified_on"] == "2026-07-13"
    assert bank["source_url"].startswith("https://learn.microsoft.com/")
    assert len(set(bank["routes"])) == 6
    for form, items in bank["forms"].items():
        assert len(items) == 8, form
        assert len({item["id"] for item in items}) == 8, form
        assert {item["boundary"] for item in items} == EXPECTED_BOUNDARIES, form
        for item in items:
            assert set(item["choices"]) == set(bank["routes"]), item["id"]


def evaluate(form, answers):
    key = load("sdk_route_answer_key.json")["forms"][form]
    return {
        f"{item_id}.{dimension}": answers.get(item_id, {}).get(dimension) == expected[dimension]
        for item_id, expected in key.items()
        for dimension in DIMENSIONS
    }


def self_test():
    validate_bank(load("sdk_route_scenarios.json"))
    for form, reference_name in (
        ("primary", "sdk_route_reference_answers.json"),
        ("transfer", "sdk_route_reference_transfer_answers.json"),
    ):
        assert all(evaluate(form, load(reference_name)).values())
        assert not any(evaluate(form, {}).values())

    wrong_route = load("sdk_route_reference_answers.json")
    wrong_route["P03"]["route"] = "foundry_sdk"
    assert not evaluate("primary", wrong_route)["P03.route"]

    unsafe = load("sdk_route_reference_transfer_answers.json")
    unsafe["T07"]["route"] = "agent_framework"
    assert not evaluate("transfer", unsafe)["T07.route"]

    print(
        "SELF-TEST PASS: eight boundaries per form, reference/blank, "
        "OpenAI-route, and unverified-authority probes validated"
    )


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--form", choices=("primary", "transfer"))
    parser.add_argument("--check")
    parser.add_argument("--self-test", action="store_true")
    args = parser.parse_args()

    if args.self_test:
        self_test()
        return
    if not args.form or not args.check:
        parser.error("use --self-test or --form FORM --check FILE")

    validate_bank(load("sdk_route_scenarios.json"))
    answers = json.loads(Path(args.check).read_text(encoding="utf-8"))
    results = evaluate(args.form, answers)
    score = sum(results.values())
    misses = [key for key, passed in results.items() if not passed]
    print(f"{args.form.upper()}: {score}/16")
    if misses:
        print("MISSES: " + ", ".join(misses))
        raise SystemExit(1)
    print("PASS: strict SDK-route decision-and-reason gate met")


if __name__ == "__main__":
    main()
