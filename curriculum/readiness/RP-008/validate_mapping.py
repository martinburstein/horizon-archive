import argparse, ast, json, runpy, tempfile
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

HERE = Path(__file__).parent
AI_DIMS = ("technique", "deciding_signal")

def load(name): return json.loads((HERE / name).read_text(encoding="utf-8"))

def validate_contract(contract):
    assert contract["status"] == "SOLIDIFIED" and date.fromisoformat(contract["source_verified_on"]) <= date.today()
    assert all(urlparse(url).scheme == "https" and urlparse(url).hostname == "learn.microsoft.com" for url in contract["source_urls"])
    assert contract["python_contract"]["skill_id"] == "PY-016" and contract["ai901_contract"]["objective_id"] == "AI901-D1-O8"
    assert contract["python_contract"]["gate"].startswith("8/8 primary") and contract["ai901_contract"]["gate"].startswith("8/8 primary")
    assert [len(contract["ai901_contract"]["forms"][form]) for form in ("primary", "retrieval", "transfer")] == [4, 4, 4]
    assert contract["ai901_contract"]["scene_cases_and_inferred_weakness_are_never_cases_answers_or_remediation_signals"] is True
    assert contract["remediation_contract"]["remediation_is_selected_only_from_scored_misconception_tags"] is True
    assert contract["authority_contract"]["offline_only"] and contract["authority_contract"]["no_exam_guarantee"]
    assert contract["accessibility_contract"]["minimum_target_css_px"] >= 44 and contract["accessibility_contract"]["time_limit"] is False
    assert contract["evidence_contract"]["save_eligibility"].startswith("require finalized strict PY-016")
    assert {"RP-007 bounded local association remains valid", "unavailable case remains unavailable", "universal=None", "cause=None", "no RP-009 route or destination"} <= set(contract["world_locks"])
    assert len(contract["reopen_conditions"]) == 3

def inspect_python(path):
    tree = ast.parse(path.read_text(encoding="utf-8"))
    imports = [node for node in tree.body if isinstance(node, (ast.Import, ast.ImportFrom))]
    exact_import = len(imports) == 1 and isinstance(imports[0], ast.Import) and [alias.name for alias in imports[0].names] == ["json"]
    calls = [node for node in ast.walk(tree) if isinstance(node, ast.Call)]
    loads = [node for node in calls if isinstance(node.func, ast.Attribute) and isinstance(node.func.value, ast.Name) and node.func.value.id == "json" and node.func.attr == "loads"]
    dumps = [node for node in calls if isinstance(node.func, ast.Attribute) and isinstance(node.func.value, ast.Name) and node.func.value.id == "json" and node.func.attr == "dumps"]
    sums = [node for node in calls if isinstance(node.func, ast.Name) and node.func.id == "sum"]
    sorted_keys = len(dumps) == 1 and any(keyword.arg == "sort_keys" and isinstance(keyword.value, ast.Constant) and keyword.value.value is True for keyword in dumps[0].keywords)
    forbidden = {"open", "print", "eval", "exec", "system", "remove", "unlink", "rmdir", "requests", "urlopen", "connect", "send", "write_text", "read_text"}
    safe = not any((node.func.id if isinstance(node.func, ast.Name) else getattr(node.func, "attr", "")) in forbidden for node in calls)
    return exact_import and len(loads) == 2 and len(dumps) == 1 and len(sums) == 5 and sorted_keys, safe

def expected_records(form):
    relations = load("contract.json")["python_contract"]["forms"][form]["relations"]
    ids = ["local", "open", "cross", "closed"] if form == "primary" else ["retained", "gap", "alternate", "sealed"]
    return [{"case_id": case_id, "relation": relation, "available": relation is not None} for case_id, relation in zip(ids, relations)]

def evaluate_python(form, path, contract):
    call_shape, safe = inspect_python(path)
    checks = {name: False for name in contract["python_contract"]["checks"]}
    try:
        state = runpy.run_path(str(path.resolve()))
        records, summary, encoded, restored = state["records"], state["scope_summary"], state["summary_json"], state["restored_summary"]
        keys = ["retained_local_association", "recurring_familiar_contact", "comparable_non_contact", "cross_family_contact", "unavailable_case", "universal", "exclusive", "unity", "cause", "purpose"]
        checks["json_import_and_call_shape"] = call_shape
        checks["records_decoded_exactly"] = records == expected_records(form)
        checks["summary_exact_keys"] = list(summary) == keys
        checks["counts_and_retained_local"] = summary["retained_local_association"] is True and [summary[key] for key in keys[1:4]] == [1, 1, 1]
        checks["unavailable_case_preserved"] = summary["unavailable_case"] == 1 and records[-1]["relation"] is None and records[-1]["available"] is False
        checks["unsupported_limits_remain_none"] = all(summary[key] is None for key in ("universal", "exclusive", "unity", "cause", "purpose"))
        checks["round_trip_matches_sorted_json"] = restored == summary and encoded == json.dumps(summary, sort_keys=True)
        checks["inputs_unchanged_and_no_forbidden_operations"] = safe and state["records_json"] == path_source_records(path)
    except Exception:
        pass
    return checks

def path_source_records(path):
    tree = ast.parse(path.read_text(encoding="utf-8"))
    for node in tree.body:
        if isinstance(node, ast.Assign) and any(isinstance(target, ast.Name) and target.id == "records_json" for target in node.targets) and isinstance(node.value, ast.Constant):
            return node.value.value
    return None

def evaluate_ai(form, answers, contract):
    return {f"{case['id']}.{dimension}": answers.get(case["id"], {}).get(dimension) == case[dimension] for case in contract["ai901_contract"]["forms"][form] for dimension in AI_DIMS}

def self_test():
    contract = load("contract.json"); validate_contract(contract)
    for form in ("primary", "transfer"): assert all(evaluate_python(form, HERE / f"reference_{form}.py", contract).values())
    for form in ("primary", "retrieval", "transfer"):
        answers = load(f"reference_{form}_answers.json")
        assert all(evaluate_ai(form, answers, contract).values()) and not any(evaluate_ai(form, {}, contract).values())
    wrong = load("reference_transfer_answers.json"); wrong["T04"]["technique"] = "field_extraction"
    assert not evaluate_ai("transfer", wrong, contract)["T04.technique"]
    with tempfile.TemporaryDirectory() as directory:
        bypass = Path(directory) / "bypass.py"
        bypass.write_text("import json\nrecords_json='[]'\nrecords=[]\nscope_summary={}\nsummary_json='{}'\nrestored_summary=scope_summary\n", encoding="utf-8")
        result = evaluate_python("primary", bypass, contract)
        assert not result["json_import_and_call_shape"] and not result["records_decoded_exactly"]
    print("SELF-TEST PASS: RP-008 JSON scope revision, information-extraction evidence, mystery locks, and bypass probes validated")

def main():
    parser = argparse.ArgumentParser(); parser.add_argument("--self-test", action="store_true")
    parser.add_argument("--python-form", choices=("primary", "transfer")); parser.add_argument("--python-check")
    parser.add_argument("--ai-form", choices=("primary", "retrieval", "transfer")); parser.add_argument("--answers")
    args = parser.parse_args()
    if args.self_test: self_test(); return
    contract = load("contract.json"); validate_contract(contract)
    if args.python_form and args.python_check: checks = evaluate_python(args.python_form, Path(args.python_check), contract)
    elif args.ai_form and args.answers: checks = evaluate_ai(args.ai_form, json.loads(Path(args.answers).read_text(encoding="utf-8")), contract)
    else: parser.error("complete form required")
    print(f"SCORE: {sum(checks.values())}/{len(checks)}")
    if not all(checks.values()): raise SystemExit(1)

if __name__ == "__main__": main()
