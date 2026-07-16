import argparse
import ast
import json
import runpy
import tempfile
from datetime import date
from pathlib import Path
from urllib.parse import urlparse


HERE = Path(__file__).parent
DIMENSIONS = ("input_boundary", "output_contract", "unsupported_rule")


def load(name):
    return json.loads((HERE / name).read_text(encoding="utf-8"))


def validate_contract(contract):
    assert date.fromisoformat(contract["source_verified_on"]) <= date.today()
    assert all(urlparse(url).scheme == "https" for url in contract["source_urls"])
    assert all(urlparse(url).hostname == "learn.microsoft.com" for url in contract["source_urls"])
    assert contract["status"] == "SOLIDIFIED"
    assert contract["python_contract"]["skill_id"] == "PY-010"
    assert contract["ai901_contract"]["objective_id"] == "AI901-D2-O7"
    assert contract["python_contract"]["gate"].startswith("8/8 primary")
    assert contract["ai901_contract"]["gate"].startswith("3/3 primary")
    assert contract["remediation_contract"]["unlimited_retry"] is True
    assert contract["evidence_contract"]["save_eligibility"].startswith("require finalized strict PY-010")
    assert contract["accessibility_contract"]["minimum_target_css_px"] >= 44
    assert contract["accessibility_contract"]["time_limit"] is False
    assert contract["authority_contract"]["no_exam_guarantee"] is True
    assert contract["authority_contract"]["no_live_azure_or_foundry_call"] is True
    assert contract["authority_contract"]["no_city_response_or_physical_delta"] is True
    assert len(contract["reopen_conditions"]) == 3
    assert {
        "RP-002 verified completion required",
        "continuation unchanged",
        "city_state_delta=None",
        "two exposed sources only",
        "sealed source remains unavailable and unread",
        "no RP-004 route or destination",
    } <= set(contract["world_locks"])
    for form in ("primary", "retrieval", "transfer"):
        cases = contract["ai901_contract"]["forms"][form]
        assert len(cases) == 1
        assert set(DIMENSIONS) <= set(cases[0])


def _subscript_root_name(node):
    return node.value.id if isinstance(node, ast.Subscript) and isinstance(node.value, ast.Name) else None


def inspect_python(path):
    source = path.read_text(encoding="utf-8")
    tree = ast.parse(source)
    if_nodes = [node for node in ast.walk(tree) if isinstance(node, ast.If)]
    if len(if_nodes) != 1:
        return False, False
    condition = if_nodes[0].test
    same_index_comparison = (
        isinstance(condition, ast.Compare)
        and len(condition.ops) == 1
        and isinstance(condition.ops[0], ast.Eq)
        and len(condition.comparators) == 1
        and {_subscript_root_name(condition.left), _subscript_root_name(condition.comparators[0])}
        == {"exposed_a", "exposed_b"}
        and isinstance(condition.left.slice, ast.Name)
        and isinstance(condition.comparators[0].slice, ast.Name)
        and condition.left.slice.id == condition.comparators[0].slice.id == "index"
    )

    def assigned_status_values(nodes):
        values = set()
        for node in nodes:
            if isinstance(node, ast.Assign) and any(isinstance(t, ast.Name) and t.id == "status" for t in node.targets):
                if isinstance(node.value, ast.Constant) and isinstance(node.value.value, str):
                    values.add(node.value.value)
        return values

    branch_values = (
        assigned_status_values(if_nodes[0].body),
        assigned_status_values(if_nodes[0].orelse),
    )
    branch_labels = branch_values == ({"corresponding"}, {"different"})
    forbidden = {"open", "print", "eval", "exec", "system", "remove", "unlink", "rmdir", "requests", "urlopen"}
    forbidden_used = False
    for node in ast.walk(tree):
        if isinstance(node, (ast.Import, ast.ImportFrom)):
            forbidden_used = True
        if isinstance(node, ast.Call):
            name = node.func.id if isinstance(node.func, ast.Name) else getattr(node.func, "attr", "")
            forbidden_used |= name in forbidden
    return same_index_comparison and branch_labels, not forbidden_used


def evaluate_python(form, path, contract):
    expected = contract["python_contract"]["forms"][form]
    structural_condition, no_forbidden_operations = inspect_python(path)
    checks = {name: False for name in contract["python_contract"]["checks"]}
    try:
        state = runpy.run_path(str(path))
        exposed_a = state.get("exposed_a")
        exposed_b = state.get("exposed_b")
        comparison = state.get("comparison")
        sealed_source = state.get("sealed_source")
        expected_different = set(expected["different_indices"])
        expected_corresponding = set(range(len(expected["exposed_a"]))) - expected_different
        checks["result_is_list"] = isinstance(comparison, list)
        checks["one_record_per_exposed_index"] = len(comparison) == len(expected["exposed_a"])
        checks["exact_record_keys_and_index_order"] = all(
            isinstance(record, dict)
            and set(record) == {"index", "status"}
            and record["index"] == index
            for index, record in enumerate(comparison)
        )
        checks["corresponding_positions_correct"] = {
            record["index"] for record in comparison if record.get("status") == "corresponding"
        } == expected_corresponding
        checks["difference_positions_correct"] = {
            record["index"] for record in comparison if record.get("status") == "different"
        } == expected_different
        checks["conditional_compares_exposed_values_at_same_index"] = structural_condition
        checks["sealed_source_marked_unavailable_none"] = sealed_source == contract["python_contract"]["sealed_source"]
        checks["inputs_unchanged_and_no_forbidden_operations"] = (
            exposed_a == expected["exposed_a"]
            and exposed_b == expected["exposed_b"]
            and no_forbidden_operations
        )
    except Exception:
        pass
    return checks


def evaluate_ai(form, answers, contract):
    case = contract["ai901_contract"]["forms"][form][0]
    return {
        f"{case['id']}.{dimension}": answers.get(case["id"], {}).get(dimension) == case[dimension]
        for dimension in DIMENSIONS
    }


def self_test():
    contract = load("contract.json")
    validate_contract(contract)
    for form in ("primary", "transfer"):
        assert all(evaluate_python(form, HERE / f"reference_{form}.py", contract).values())
    for form in ("primary", "retrieval", "transfer"):
        answers = load(f"reference_{form}_answers.json")
        assert all(evaluate_ai(form, answers, contract).values())
        assert not any(evaluate_ai(form, {}, contract).values())
    wrong = load("reference_transfer_answers.json")
    wrong["T01"]["unsupported_rule"] = "treat_missing_audio_as_no_alarm"
    assert not evaluate_ai("transfer", wrong, contract)["T01.unsupported_rule"]
    with tempfile.TemporaryDirectory() as directory:
        bypass = Path(directory) / "bypass.py"
        bypass.write_text(
            "exposed_a=['steady','rise','steady','cool']\n"
            "exposed_b=['steady','rise','hold','cool']\n"
            "comparison=[{'index':0,'status':'corresponding'},{'index':1,'status':'corresponding'},"
            "{'index':2,'status':'different'},{'index':3,'status':'corresponding'}]\n"
            "sealed_source={'status':'unavailable','value':None}\n",
            encoding="utf-8",
        )
        assert not evaluate_python("primary", bypass, contract)["conditional_compares_exposed_values_at_same_index"]
    print("SELF-TEST PASS: RP-003 contract, conditional forms, AI-901 evidence forms, locks, and bypass probes validated")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--self-test", action="store_true")
    parser.add_argument("--python-form", choices=("primary", "transfer"))
    parser.add_argument("--python-check")
    parser.add_argument("--ai-form", choices=("primary", "retrieval", "transfer"))
    parser.add_argument("--answers")
    args = parser.parse_args()
    if args.self_test:
        self_test()
        return
    contract = load("contract.json")
    validate_contract(contract)
    if args.python_form and args.python_check:
        checks = evaluate_python(args.python_form, Path(args.python_check), contract)
        print(f"PYTHON {args.python_form.upper()}: {sum(checks.values())}/8")
        for name, passed in checks.items():
            print(f"{'PASS' if passed else 'FAIL'} {name}")
        if not all(checks.values()):
            raise SystemExit(1)
        return
    if args.ai_form and args.answers:
        checks = evaluate_ai(args.ai_form, json.loads(Path(args.answers).read_text(encoding="utf-8")), contract)
        print(f"AI901 {args.ai_form.upper()}: {sum(checks.values())}/3")
        if not all(checks.values()):
            print("Needs remediation: " + ", ".join(key for key, passed in checks.items() if not passed))
            raise SystemExit(1)
        return
    parser.error("use --self-test or provide one complete form/check pair")


if __name__ == "__main__":
    main()
