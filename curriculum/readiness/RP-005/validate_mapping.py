import argparse
import ast
import json
import runpy
import tempfile
from datetime import date
from pathlib import Path
from urllib.parse import urlparse


HERE = Path(__file__).parent
AI_DIMENSIONS = ("technique", "deciding_signal")


def load(name):
    return json.loads((HERE / name).read_text(encoding="utf-8"))


def validate_contract(contract):
    assert date.fromisoformat(contract["source_verified_on"]) <= date.today()
    assert all(urlparse(url).scheme == "https" and urlparse(url).hostname == "learn.microsoft.com" for url in contract["source_urls"])
    assert contract["status"] == "SOLIDIFIED"
    assert contract["python_contract"]["skill_id"] == "PY-012"
    assert contract["ai901_contract"]["objective_id"] == "AI901-D1-O5"
    assert contract["python_contract"]["gate"].startswith("8/8 primary")
    assert contract["ai901_contract"]["gate"].startswith("8/8 primary")
    assert [len(contract["ai901_contract"]["forms"][name]) for name in ("primary", "retrieval", "transfer")] == [4, 3, 4]
    assert contract["ai901_contract"]["landscape_is_never_a_case_metric_model_or_answer_key"] is True
    assert contract["remediation_contract"]["unlimited_retry"] is True
    assert contract["evidence_contract"]["save_eligibility"].startswith("require finalized strict PY-012")
    assert contract["accessibility_contract"]["minimum_target_css_px"] >= 44
    assert contract["accessibility_contract"]["time_limit"] is False
    assert contract["authority_contract"]["no_exam_guarantee"] is True
    assert contract["authority_contract"]["offline_only"] is True
    assert contract["authority_contract"]["no_field_city_or_physical_delta"] is True
    assert len(contract["reopen_conditions"]) == 3
    assert {"continuation unchanged", "city_state_delta=None", "external_state_delta=None", "no RP-006 route or destination"} <= set(contract["world_locks"])


def _parameter_subscript(node, parameter, key):
    return isinstance(node, ast.Subscript) and isinstance(node.value, ast.Name) and node.value.id == parameter and isinstance(node.slice, ast.Constant) and node.slice.value == key


def inspect_python(path):
    tree = ast.parse(path.read_text(encoding="utf-8"))
    functions = [node for node in tree.body if isinstance(node, ast.FunctionDef)]
    named = len(functions) == 1 and functions[0].name == "build_summary"
    exact_params = named and [arg.arg for arg in functions[0].args.args] == ["replica_summary", "sealed_reading"]
    returns = [node for node in ast.walk(functions[0]) if isinstance(node, ast.Return)] if named else []
    uses_params = False
    if len(returns) == 1 and isinstance(returns[0].value, ast.Dict):
        pairs = {key.value: value for key, value in zip(returns[0].value.keys, returns[0].value.values) if isinstance(key, ast.Constant)}
        uses_params = (
            list(pairs) == ["recurring_count", "divergent_count", "sealed", "judgment"]
            and _parameter_subscript(pairs["recurring_count"], "replica_summary", "recurring_count")
            and _parameter_subscript(pairs["divergent_count"], "replica_summary", "divergent_count")
            and isinstance(pairs["sealed"], ast.Name) and pairs["sealed"].id == "sealed_reading"
            and isinstance(pairs["judgment"], ast.Constant) and pairs["judgment"].value is None
        )
    calls = [node for node in ast.walk(tree) if isinstance(node, ast.Call) and isinstance(node.func, ast.Name) and node.func.id == "build_summary"]
    called_once = len(calls) == 1 and [arg.id for arg in calls[0].args if isinstance(arg, ast.Name)] == ["replica_summary", "sealed_reading"]
    forbidden = {"open", "print", "eval", "exec", "system", "remove", "unlink", "rmdir", "requests", "urlopen", "sorted", "max", "min", "mean"}
    forbidden_used = any(isinstance(node, (ast.Import, ast.ImportFrom)) for node in ast.walk(tree))
    for node in ast.walk(tree):
        if isinstance(node, ast.Call):
            name = node.func.id if isinstance(node.func, ast.Name) else getattr(node.func, "attr", "")
            forbidden_used |= name in forbidden
    return {"named": named, "params": exact_params, "return": uses_params, "call": called_once, "safe": not forbidden_used}


def evaluate_python(form, path, contract):
    expected = contract["python_contract"]["forms"][form]
    structure = inspect_python(path)
    checks = {name: False for name in contract["python_contract"]["checks"]}
    try:
        state = runpy.run_path(str(path))
        input_summary = state.get("replica_summary")
        sealed = state.get("sealed_reading")
        summary = state.get("summary")
        expected_summary = {**expected["replica_summary"], "sealed": None, "judgment": None}
        checks["summary_is_dictionary"] = isinstance(summary, dict)
        checks["exact_keys_and_values"] = list(summary) == contract["python_contract"]["expected_keys"] and summary == expected_summary
        checks["function_named_build_summary"] = structure["named"]
        checks["exact_two_parameters"] = structure["params"]
        checks["return_uses_parameters_without_inference"] = structure["return"]
        checks["function_called_once_with_supplied_inputs"] = structure["call"]
        checks["sealed_and_judgment_remain_none"] = summary.get("sealed") is None and summary.get("judgment") is None
        checks["inputs_unchanged_and_no_forbidden_operations"] = input_summary == expected["replica_summary"] and sealed is None and structure["safe"]
    except Exception:
        pass
    return checks


def evaluate_ai(form, answers, contract):
    return {
        f"{case['id']}.{dimension}": answers.get(case["id"], {}).get(dimension) == case[dimension]
        for case in contract["ai901_contract"]["forms"][form]
        for dimension in AI_DIMENSIONS
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
    wrong["T04"]["technique"] = "sentiment_analysis"
    assert not evaluate_ai("transfer", wrong, contract)["T04.technique"]
    with tempfile.TemporaryDirectory() as directory:
        bypass = Path(directory) / "bypass.py"
        bypass.write_text("replica_summary={'recurring_count':5,'divergent_count':2}\nsealed_reading=None\nsummary={'recurring_count':5,'divergent_count':2,'sealed':None,'judgment':None}\n", encoding="utf-8")
        assert not evaluate_python("primary", bypass, contract)["function_named_build_summary"]
    print("SELF-TEST PASS: RP-005 contract, function forms, text-technique evidence, locks, and bypass probes validated")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--self-test", action="store_true")
    parser.add_argument("--python-form", choices=("primary", "transfer"))
    parser.add_argument("--python-check")
    parser.add_argument("--ai-form", choices=("primary", "retrieval", "transfer"))
    parser.add_argument("--answers")
    args = parser.parse_args()
    if args.self_test:
        self_test(); return
    contract = load("contract.json"); validate_contract(contract)
    if args.python_form and args.python_check:
        checks = evaluate_python(args.python_form, Path(args.python_check), contract)
    elif args.ai_form and args.answers:
        checks = evaluate_ai(args.ai_form, json.loads(Path(args.answers).read_text(encoding="utf-8")), contract)
    else:
        parser.error("use --self-test or provide one complete form/check pair")
    print(f"SCORE: {sum(checks.values())}/{len(checks)}")
    for name, passed in checks.items(): print(f"{'PASS' if passed else 'FAIL'} {name}")
    if not all(checks.values()): raise SystemExit(1)


if __name__ == "__main__":
    main()
