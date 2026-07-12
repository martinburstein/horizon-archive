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
    for item in items:
        supplied = answers.get(item["id"], {})
        points += supplied.get("decision") == item["decision"]
        points += supplied.get("reason") == item["reason"]
    print(f"{form}: {points}/16")
    return points == 16


def self_test():
    manifest = load("manifest.json")
    bank = load("scenario_bank.json")
    routes = load("remediation_routes.json")
    expected = set(manifest["objective_ids"])
    assert len(expected) == 15 and set(routes) == expected
    for objective, lesson in routes.items():
        assert (ROOT.parent.parent / "lessons" / lesson).exists(), (objective, lesson)
    for form in ("primary", "transfer"):
        items = bank["forms"][form]
        assert len(items) == 8
        assert {o for item in items for o in item["objective_ids"]} == expected
        assert score(form, f"reference_{form}_answers.json")
        assert not score(form, f"{form}_answers.json")
    claim_probe = load("reference_primary_answers.json")
    claim_probe["P08"]["reason"] = "passing_authorizes_action"
    assert claim_probe["P08"]["reason"] != bank["forms"]["primary"][7]["reason"]
    boundary_probe = load("reference_transfer_answers.json")
    boundary_probe["T06"]["decision"] = "local_client_proves_deployment"
    assert boundary_probe["T06"]["decision"] != bank["forms"]["transfer"][5]["decision"]
    print("self-test: PASS (15-objective coverage, routes, references, blanks, claim, and boundary probes)")


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
