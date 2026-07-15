import argparse
import ast
import json
import runpy
import tempfile
from datetime import date
from pathlib import Path
from urllib.parse import urlparse


HERE = Path(__file__).parent
DIMENSIONS = ("principle", "mitigation", "owner")


def load(name):
    return json.loads((HERE / name).read_text(encoding="utf-8"))


def validate_contract(contract):
    verified = date.fromisoformat(contract["source_verified_on"])
    assert verified <= date.today()
    assert all(urlparse(url).scheme == "https" for url in contract["source_urls"])
    assert all(urlparse(url).hostname == "learn.microsoft.com" for url in contract["source_urls"])
    assert contract["status"] == "SOLIDIFIED"
    assert contract["python_contract"]["skill_id"] == "PY-009"
    assert contract["ai901_contract"]["objective_id"] == "AI901-D1-O1"
    assert contract["python_contract"]["gate"].startswith("6/6 primary")
    assert contract["ai901_contract"]["gate"].startswith("9/9 primary")
    assert contract["remediation_contract"]["unlimited_retry"] is True
    assert contract["evidence_contract"]["after_save"].startswith("clear_all_temporary")
    assert contract["accessibility_contract"]["time_limit"] is False
    assert contract["authority_contract"]["no_exam_guarantee"] is True
    assert contract["authority_contract"]["no_live_azure_or_foundry_call"] is True
    assert contract["authority_contract"]["no_city_response_or_physical_delta"] is True
    assert "photographic_realism" in contract["unscored_scene_evidence"]
    assert "registered_world_effects" in contract["unscored_scene_evidence"]
    assert len(contract["reopen_conditions"]) == 3
    required_locks = {
        "cityThresholdAnchorRecorded=true",
        "civicDistrictRouteAvailable=true",
        "continuation unchanged",
        "city_state_delta=None",
        "closed identity-bearing layer",
        "no successor route or claim type",
    }
    assert required_locks <= set(contract["world_locks"])
    expected_principles = {"transparency", "privacy_and_security", "accountability"}
    for form, scenarios in contract["ai901_contract"]["forms"].items():
        assert len(scenarios) == 3, form
        assert len({scenario["id"] for scenario in scenarios}) == 3
        assert {scenario["principle"] for scenario in scenarios} == expected_principles


def inspect_python(path):
    source = path.read_text(encoding="utf-8")
    tree = ast.parse(source)
    direct_rebinds = 0
    initial_keys = []
    keyed_updates = []
    forbidden_calls = []
    for node in ast.walk(tree):
        if isinstance(node, ast.Assign):
            for target in node.targets:
                if isinstance(target, ast.Name) and target.id == "comparison":
                    direct_rebinds += 1
                    if isinstance(node.value, ast.Dict):
                        initial_keys = [
                            key.value for key in node.value.keys
                            if isinstance(key, ast.Constant) and isinstance(key.value, str)
                        ]
                if isinstance(target, ast.Subscript) and isinstance(target.value, ast.Name) and target.value.id == "comparison":
                    if isinstance(target.slice, ast.Constant) and isinstance(target.slice.value, str):
                        keyed_updates.append(target.slice.value)
        if isinstance(node, ast.Call):
            name = node.func.id if isinstance(node.func, ast.Name) else getattr(node.func, "attr", "")
            if name in {"open", "print", "eval", "exec", "system", "remove", "unlink", "rmdir"}:
                forbidden_calls.append(name)
    return direct_rebinds == 1, initial_keys, keyed_updates, not forbidden_calls


def evaluate_python(form, path, contract):
    expected = contract["python_contract"]["forms"][form]
    no_replacement, initial_keys, keyed_updates, no_forbidden_calls = inspect_python(path)
    checks = {name: False for name in contract["python_contract"]["checks"]}
    try:
        state = runpy.run_path(str(path))
        comparison = state.get("comparison")
        expected_keys = set(expected["input"]) | set(expected["add"])
        checks["result_is_dictionary"] = isinstance(comparison, dict)
        checks["exact_keys_only"] = set(comparison) == expected_keys
        checks["condition_and_source_preserved"] = all(
            comparison.get(key) == expected["input"][key] for key in ("condition", "source")
        )
        checks["identity_remains_none"] = comparison.get("identity") is None
        checks["access_requested_remains_false"] = comparison.get("access_requested") is False
        checks["classification_and_owner_added_by_key_update"] = (
            no_replacement
            and set(initial_keys) == set(expected["input"])
            and len(keyed_updates) == 2
            and set(keyed_updates) == set(expected["add"])
            and no_forbidden_calls
            and all(comparison.get(key) == value for key, value in expected["add"].items())
        )
    except Exception:
        pass
    return checks


def evaluate_ai(form, answers, contract):
    scenarios = contract["ai901_contract"]["forms"][form]
    return {
        f"{scenario['id']}.{dimension}": answers.get(scenario["id"], {}).get(dimension) == scenario[dimension]
        for scenario in scenarios
        for dimension in DIMENSIONS
    }


def self_test():
    contract = load("contract.json")
    validate_contract(contract)
    for form in ("primary", "transfer"):
        assert all(evaluate_python(form, HERE / f"reference_{form}.py", contract).values())
        assert all(evaluate_ai(form, load(f"reference_{form}_answers.json"), contract).values())
        assert not any(evaluate_ai(form, {}, contract).values())
    wrong = load("reference_primary_answers.json")
    wrong["P02"]["principle"] = "transparency"
    assert not evaluate_ai("primary", wrong, contract)["P02.principle"]
    unsafe = load("reference_primary_answers.json")
    unsafe["P02"]["mitigation"] = "open_identity_layer_to_improve_confidence"
    assert not evaluate_ai("primary", unsafe, contract)["P02.mitigation"]
    with tempfile.TemporaryDirectory() as directory:
        bypass = Path(directory) / "prefilled.py"
        bypass.write_text(
            "comparison = {'condition': 'outlined_gap', 'source': 'exposed_surface', "
            "'identity': None, 'access_requested': False, 'classification': 'unknown', "
            "'owner': 'human_expedition'}\n"
            "comparison['classification'] = 'unknown'\n"
            "comparison['owner'] = 'human_expedition'\n",
            encoding="utf-8",
        )
        assert not evaluate_python("primary", bypass, contract)["classification_and_owner_added_by_key_update"]
    print("SELF-TEST PASS: RP-002 contract, Python key updates, AI-901 forms, locks, and failure probes validated")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--self-test", action="store_true")
    parser.add_argument("--python-form", choices=("primary", "transfer"))
    parser.add_argument("--python-check")
    parser.add_argument("--ai-form", choices=("primary", "transfer"))
    parser.add_argument("--answers")
    args = parser.parse_args()
    if args.self_test:
        self_test()
        return
    contract = load("contract.json")
    validate_contract(contract)
    if args.python_form and args.python_check:
        checks = evaluate_python(args.python_form, Path(args.python_check), contract)
        print(f"PYTHON {args.python_form.upper()}: {sum(checks.values())}/6")
        for name, passed in checks.items():
            print(f"{'PASS' if passed else 'FAIL'} {name}")
        if not all(checks.values()):
            raise SystemExit(1)
        return
    if args.ai_form and args.answers:
        checks = evaluate_ai(args.ai_form, json.loads(Path(args.answers).read_text(encoding="utf-8")), contract)
        print(f"AI901 {args.ai_form.upper()}: {sum(checks.values())}/9")
        if not all(checks.values()):
            print("Needs remediation: " + ", ".join(key for key, passed in checks.items() if not passed))
            raise SystemExit(1)
        return
    parser.error("use --self-test or provide one complete form/check pair")


if __name__ == "__main__":
    main()
