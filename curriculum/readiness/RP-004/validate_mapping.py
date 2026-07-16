import argparse
import ast
import json
import runpy
import tempfile
from datetime import date
from pathlib import Path
from urllib.parse import urlparse


HERE = Path(__file__).parent
AI_DIMENSIONS = ("workload", "deciding_signal")


def load(name):
    return json.loads((HERE / name).read_text(encoding="utf-8"))


def validate_contract(contract):
    assert date.fromisoformat(contract["source_verified_on"]) <= date.today()
    assert all(urlparse(url).scheme == "https" for url in contract["source_urls"])
    assert all(urlparse(url).hostname == "learn.microsoft.com" for url in contract["source_urls"])
    assert contract["status"] == "SOLIDIFIED"
    assert contract["python_contract"]["skill_id"] == "PY-011"
    assert contract["ai901_contract"]["objective_id"] == "AI901-D1-O4"
    assert contract["python_contract"]["gate"].startswith("8/8 primary")
    assert contract["ai901_contract"]["gate"].startswith("12/12 primary")
    assert contract["ai901_contract"]["landscape_is_never_a_case_or_answer_key"] is True
    assert [len(contract["ai901_contract"]["forms"][name]) for name in ("primary", "retrieval", "transfer")] == [6, 4, 6]
    assert contract["remediation_contract"]["unlimited_retry"] is True
    assert contract["evidence_contract"]["save_eligibility"].startswith("require finalized strict PY-011")
    assert contract["accessibility_contract"]["minimum_target_css_px"] >= 44
    assert contract["accessibility_contract"]["time_limit"] is False
    assert contract["authority_contract"]["no_exam_guarantee"] is True
    assert contract["authority_contract"]["offline_only"] is True
    assert contract["authority_contract"]["no_landscape_response_or_physical_delta"] is True
    assert len(contract["reopen_conditions"]) == 3
    assert {"continuation unchanged", "city_state_delta=None", "external_state_delta=None", "no RP-005 route or destination"} <= set(contract["world_locks"])


def _subscript_key(node, root, key):
    return (
        isinstance(node, ast.Subscript)
        and isinstance(node.value, ast.Name)
        and node.value.id == root
        and isinstance(node.slice, ast.Constant)
        and node.slice.value == key
    )


def inspect_python(path):
    tree = ast.parse(path.read_text(encoding="utf-8"))
    loops = [node for node in ast.walk(tree) if isinstance(node, ast.For)]
    if len(loops) != 1:
        return False, False
    loop = loops[0]
    iterates_samples = isinstance(loop.target, ast.Name) and loop.target.id == "sample" and isinstance(loop.iter, ast.Name) and loop.iter.id == "samples"
    append_calls = [
        node for node in ast.walk(loop)
        if isinstance(node, ast.Call)
        and isinstance(node.func, ast.Attribute)
        and isinstance(node.func.value, ast.Name)
        and node.func.value.id == "correspondence"
        and node.func.attr == "append"
    ]
    exact_append = False
    if len(append_calls) == 1 and len(append_calls[0].args) == 1 and isinstance(append_calls[0].args[0], ast.Dict):
        record = append_calls[0].args[0]
        pairs = {key.value: value for key, value in zip(record.keys, record.values) if isinstance(key, ast.Constant)}
        sample_id_ok = _subscript_key(pairs.get("sample_id"), "sample", "sample_id")
        corridor = pairs.get("corridor")
        corridor_ok = (
            isinstance(corridor, ast.Subscript)
            and isinstance(corridor.value, ast.Name)
            and corridor.value.id == "corridor_for_form"
            and _subscript_key(corridor.slice, "sample", "form")
        )
        exact_append = set(pairs) == {"sample_id", "corridor"} and sample_id_ok and corridor_ok
    forbidden = {"open", "print", "eval", "exec", "system", "remove", "unlink", "rmdir", "requests", "urlopen"}
    forbidden_used = False
    for node in ast.walk(tree):
        forbidden_used |= isinstance(node, (ast.Import, ast.ImportFrom))
        if isinstance(node, ast.Call):
            name = node.func.id if isinstance(node.func, ast.Name) else getattr(node.func, "attr", "")
            forbidden_used |= name in forbidden
    return iterates_samples and exact_append, not forbidden_used


def evaluate_python(form, path, contract):
    expected = contract["python_contract"]["forms"][form]
    structural_loop, no_forbidden = inspect_python(path)
    checks = {name: False for name in contract["python_contract"]["checks"]}
    try:
        state = runpy.run_path(str(path))
        samples = state.get("samples")
        mapping = state.get("corridor_for_form")
        result = state.get("correspondence")
        common_return = state.get("common_return")
        expected_result = [
            {"sample_id": sample["sample_id"], "corridor": mapping[sample["form"]]}
            for sample in expected["samples"]
        ]
        checks["result_is_list"] = isinstance(result, list)
        checks["one_record_per_sample"] = len(result) == len(expected["samples"])
        checks["exact_record_keys_and_order"] = all(
            isinstance(record, dict) and list(record) == ["sample_id", "corridor"]
            for record in result
        )
        checks["every_sample_id_preserved_once"] = [record.get("sample_id") for record in result] == [sample["sample_id"] for sample in expected["samples"]]
        checks["exact_form_to_corridor_lookup"] = result == expected_result
        checks["for_loop_iterates_samples_and_appends_once"] = structural_loop
        checks["common_return_observed_and_purpose_none"] = common_return == contract["python_contract"]["common_return"]
        checks["inputs_unchanged_and_no_forbidden_operations"] = samples == expected["samples"] and mapping == expected["corridor_for_form"] and no_forbidden
    except Exception:
        pass
    return checks


def evaluate_ai(form, answers, contract):
    checks = {}
    for case in contract["ai901_contract"]["forms"][form]:
        for dimension in AI_DIMENSIONS:
            checks[f"{case['id']}.{dimension}"] = answers.get(case["id"], {}).get(dimension) == case[dimension]
    return checks


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
    wrong["T06"]["workload"] = "computer_vision"
    assert not evaluate_ai("transfer", wrong, contract)["T06.workload"]
    with tempfile.TemporaryDirectory() as directory:
        bypass = Path(directory) / "bypass.py"
        bypass.write_text(
            "samples=[{'sample_id':'suspension_replica','form':'particulate'},{'sample_id':'pressure_replica','form':'cyclic'},{'sample_id':'heat_replica','form':'thermal'}]\n"
            "corridor_for_form={'particulate':'porous','cyclic':'tensioned','thermal':'jointed'}\n"
            "correspondence=[{'sample_id':'suspension_replica','corridor':'porous'},{'sample_id':'pressure_replica','corridor':'tensioned'},{'sample_id':'heat_replica','corridor':'jointed'}]\n"
            "common_return={'observed':True,'purpose':None}\n",
            encoding="utf-8",
        )
        assert not evaluate_python("primary", bypass, contract)["for_loop_iterates_samples_and_appends_once"]
    print("SELF-TEST PASS: RP-004 contract, loop forms, six-workload evidence, locks, and bypass probes validated")


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
    elif args.ai_form and args.answers:
        checks = evaluate_ai(args.ai_form, json.loads(Path(args.answers).read_text(encoding="utf-8")), contract)
        print(f"AI901 {args.ai_form.upper()}: {sum(checks.values())}/{len(checks)}")
    else:
        parser.error("use --self-test or provide one complete form/check pair")
    for name, passed in checks.items():
        print(f"{'PASS' if passed else 'FAIL'} {name}")
    if not all(checks.values()):
        raise SystemExit(1)


if __name__ == "__main__":
    main()
