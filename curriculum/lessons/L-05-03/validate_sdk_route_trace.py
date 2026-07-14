import argparse
import json
from pathlib import Path

HERE = Path(__file__).parent
DIMENSIONS = ("route", "endpoint_family", "next_action")
EXPECTED_BOUNDARIES = {
    "foundry_native",
    "hosted_agent_code",
    "openai_compatibility",
    "claude_models",
    "service_specific_tool",
    "unverified_scope",
}


def load(name):
    return json.loads((HERE / name).read_text(encoding="utf-8"))


def validate_bank(bank):
    assert bank["verified_on"] == "2026-07-13"
    assert len(bank["source_urls"]) == 5
    assert all(url.startswith("https://learn.microsoft.com/") for url in bank["source_urls"])
    assert tuple(bank["dimensions"]) == DIMENSIONS
    assert len(set(bank["choices"]["route"])) == 6
    assert len(set(bank["choices"]["endpoint_family"])) == 5
    assert len(set(bank["choices"]["next_action"])) == 2
    for form, items in bank["forms"].items():
        assert len(items) == 6, form
        assert len({item["id"] for item in items}) == 6, form
        assert {item["boundary"] for item in items} == EXPECTED_BOUNDARIES, form
        assert all(item["prompt"].strip() for item in items), form


def evaluate(form, answers):
    key = load("sdk_route_trace_answer_key.json")["forms"][form]
    return {
        f"{item_id}.{dimension}": answers.get(item_id, {}).get(dimension) == expected[dimension]
        for item_id, expected in key.items()
        for dimension in DIMENSIONS
    }


def self_test():
    validate_bank(load("sdk_route_trace_scenarios.json"))
    for form, reference_name in (
        ("primary", "sdk_route_trace_reference_answers.json"),
        ("transfer", "sdk_route_trace_reference_transfer_answers.json"),
    ):
        assert all(evaluate(form, load(reference_name)).values())
        assert not any(evaluate(form, {}).values())

    wrong_endpoint = load("sdk_route_trace_reference_answers.json")
    wrong_endpoint["DP02"]["endpoint_family"] = "openai_v1_endpoint"
    endpoint_results = evaluate("primary", wrong_endpoint)
    assert endpoint_results["DP02.route"]
    assert not endpoint_results["DP02.endpoint_family"]

    unsafe_action = load("sdk_route_trace_reference_transfer_answers.json")
    unsafe_action["DT06"]["next_action"] = "verify_identity_rbac_resource_scope"
    assert not evaluate("transfer", unsafe_action)["DT06.next_action"]

    route_substitution = load("sdk_route_trace_reference_answers.json")
    route_substitution["DP03"]["route"] = "foundry_sdk"
    assert not evaluate("primary", route_substitution)["DP03.route"]

    print(
        "SELF-TEST PASS: six boundaries per form, reference/blank, route, "
        "endpoint-family, and stop/reverify probes validated"
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

    validate_bank(load("sdk_route_trace_scenarios.json"))
    answers = json.loads(Path(args.check).read_text(encoding="utf-8"))
    results = evaluate(args.form, answers)
    score = sum(results.values())
    misses = [key for key, passed in results.items() if not passed]
    print(f"{args.form.upper()}: {score}/18")
    if misses:
        print("MISSES: " + ", ".join(misses))
        raise SystemExit(1)
    print("PASS: strict SDK route/endpoint/action trace gate met")


if __name__ == "__main__":
    main()
