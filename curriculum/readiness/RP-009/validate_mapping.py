import argparse
import ast
import json
import os
import runpy
import tempfile
from contextlib import contextmanager
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

HERE = Path(__file__).parent
AI_DIMS = ("prompt_owner", "deciding_signal")


def load(name):
    return json.loads((HERE / name).read_text(encoding="utf-8"))


def validate_contract(contract):
    assert contract["status"] == "SOLIDIFIED"
    assert date.fromisoformat(contract["source_verified_on"]) <= date.today()
    assert all(urlparse(url).scheme == "https" and urlparse(url).hostname == "learn.microsoft.com" for url in contract["source_urls"])
    assert contract["python_contract"]["skill_id"] == "PY-017"
    assert contract["ai901_contract"]["objective_id"] == "AI901-D2-O1"
    assert contract["python_contract"]["gate"].startswith("8/8 primary")
    assert contract["ai901_contract"]["gate"].startswith("8/8 primary")
    assert [len(contract["ai901_contract"]["forms"][form]) for form in ("primary", "retrieval", "transfer")] == [4, 4, 4]
    assert contract["ai901_contract"]["scene_cases_and_inferred_weakness_are_never_cases_answers_or_remediation_signals"] is True
    assert contract["remediation_contract"]["remediation_is_selected_only_from_scored_misconception_tags"] is True
    assert contract["authority_contract"]["offline_only"] and contract["authority_contract"]["no_exam_guarantee"]
    assert contract["accessibility_contract"]["minimum_target_css_px"] >= 44
    assert contract["accessibility_contract"]["time_limit"] is False
    assert contract["evidence_contract"]["save_eligibility"].startswith("require finalized strict PY-017")
    assert {
        "RP-007 and RP-008 bounded summaries remain valid",
        "unavailable margin remains unavailable",
        "identity=None",
        "topology=None",
        "continuity=None",
        "transformation=None",
        "cause=None",
        "no RP-010 route destination event or learning content",
    } <= set(contract["world_locks"])
    assert len(contract["reopen_conditions"]) == 3


def expected_records(form):
    if form == "primary":
        return [
            {"record_id": "near_lamellar", "status": "correspondence", "candidates": ["far_lamellar"]},
            {"record_id": "far_unmatched", "status": "unmatched", "candidates": []},
            {"record_id": "far_ambiguous", "status": "ambiguous", "candidates": ["near_lamellar", "near_filament"]},
            {"record_id": "outer_margin", "status": "unavailable", "candidates": None},
        ]
    return [
        {"record_id": "inlet_ribbed", "status": "correspondence", "candidates": ["outer_ribbed"]},
        {"record_id": "outer_solitary", "status": "unmatched", "candidates": []},
        {"record_id": "outer_mixed", "status": "ambiguous", "candidates": ["inlet_ribbed", "inlet_beaded"]},
        {"record_id": "sealed_edge", "status": "unavailable", "candidates": None},
    ]


def inspect_python(path, form, contract):
    source = path.read_text(encoding="utf-8")
    tree = ast.parse(source)
    imports = [node for node in tree.body if isinstance(node, (ast.Import, ast.ImportFrom))]
    exact_import = len(imports) == 1 and isinstance(imports[0], ast.Import) and [alias.name for alias in imports[0].names] == ["os"]
    calls = [node for node in ast.walk(tree) if isinstance(node, ast.Call)]
    environment_gets = [
        node for node in calls
        if isinstance(node.func, ast.Attribute)
        and node.func.attr == "get"
        and isinstance(node.func.value, ast.Attribute)
        and isinstance(node.func.value.value, ast.Name)
        and node.func.value.value.id == "os"
        and node.func.value.attr == "environ"
    ]
    expected_name = contract["python_contract"]["forms"][form]["environment_name"]
    exact_get = len(environment_gets) == 1 and len(environment_gets[0].args) == 1 and isinstance(environment_gets[0].args[0], ast.Constant) and environment_gets[0].args[0].value == expected_name
    forbidden_calls = {"open", "print", "eval", "exec", "system", "popen", "remove", "unlink", "rmdir", "requests", "urlopen", "connect", "send", "write_text", "read_text"}
    safe_calls = not any((node.func.id if isinstance(node.func, ast.Name) else getattr(node.func, "attr", "")) in forbidden_calls for node in calls)
    secret_names = set(contract["python_contract"]["forms"][form]["secret_names_forbidden"])
    constants = {node.value for node in ast.walk(tree) if isinstance(node, ast.Constant) and isinstance(node.value, str)}
    no_secret_names = not (secret_names & constants)
    environment_mutation = any(
        isinstance(node, (ast.Assign, ast.AnnAssign, ast.AugAssign, ast.Delete))
        and any(isinstance(child, ast.Subscript) and isinstance(child.value, ast.Attribute) and isinstance(child.value.value, ast.Name) and child.value.value.id == "os" and child.value.attr == "environ" for child in ast.walk(node))
        for node in ast.walk(tree)
    )
    return exact_import and exact_get, safe_calls and no_secret_names and not environment_mutation


@contextmanager
def configured_environment(name, value):
    before = dict(os.environ)
    os.environ[name] = value
    try:
        yield before
    finally:
        os.environ.clear()
        os.environ.update(before)


def evaluate_python(form, path, contract):
    shape, safe = inspect_python(path, form, contract)
    checks = {name: False for name in contract["python_contract"]["checks"]}
    spec = contract["python_contract"]["forms"][form]
    before_records = expected_records(form)
    try:
        with configured_environment(spec["environment_name"], spec["environment_value"]):
            environment_before_run = dict(os.environ)
            state = runpy.run_path(str(path.resolve()))
            environment_after_run = dict(os.environ)
        records = state["edge_records"]
        ledger = state["edge_ledger"]
        keys = ["mode", "correspondence", "unmatched", "ambiguous", "unavailable", "identity", "topology", "continuity", "transformation", "cause", "purpose"]
        checks["os_import_and_single_allowlisted_get"] = shape
        checks["nonsecret_mode_read_exactly"] = state["mode"] == "bounded" and ledger["mode"] == "bounded"
        checks["environment_unchanged"] = environment_before_run == environment_after_run
        checks["records_preserved_exactly"] = records == before_records
        checks["ledger_exact_keys"] = list(ledger) == keys
        checks["four_evidence_classes_preserved"] = (
            ledger["correspondence"] == [before_records[0]["record_id"]]
            and ledger["unmatched"] == [before_records[1]["record_id"]]
            and ledger["ambiguous"] == {before_records[2]["record_id"]: before_records[2]["candidates"]}
            and ledger["unavailable"] == [before_records[3]["record_id"]]
        )
        checks["unsupported_limits_remain_none"] = all(ledger[key] is None for key in ("identity", "topology", "continuity", "transformation", "cause", "purpose"))
        checks["no_secret_file_network_output_or_external_operation"] = safe
    except Exception:
        pass
    return checks


def evaluate_ai(form, answers, contract):
    return {
        f"{case['id']}.{dimension}": answers.get(case["id"], {}).get(dimension) == case[dimension]
        for case in contract["ai901_contract"]["forms"][form]
        for dimension in AI_DIMS
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
    wrong["T04"]["prompt_owner"] = "system_prompt"
    assert not evaluate_ai("transfer", wrong, contract)["T04.prompt_owner"]
    with tempfile.TemporaryDirectory() as directory:
        bypass = Path(directory) / "bypass.py"
        bypass.write_text("import os\nedge_records=[]\nmode='bounded'\nedge_ledger={}\n", encoding="utf-8")
        result = evaluate_python("primary", bypass, contract)
        assert not result["os_import_and_single_allowlisted_get"]
        assert not result["records_preserved_exactly"]
        secret_reader = Path(directory) / "secret_reader.py"
        secret_reader.write_text("import os\nedge_records=[]\nmode=os.environ.get('EDGE_LEDGER_MODE')\nsecret=os.environ.get('AZURE_API_KEY')\nedge_ledger={}\n", encoding="utf-8")
        result = evaluate_python("primary", secret_reader, contract)
        assert not result["os_import_and_single_allowlisted_get"]
        assert not result["no_secret_file_network_output_or_external_operation"]
    print("SELF-TEST PASS: RP-009 environment boundary, prompt ownership, scope locks, and bypass probes validated")


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
    elif args.ai_form and args.answers:
        checks = evaluate_ai(args.ai_form, json.loads(Path(args.answers).read_text(encoding="utf-8")), contract)
    else:
        parser.error("complete form required")
    print(f"SCORE: {sum(checks.values())}/{len(checks)}")
    if not all(checks.values()):
        raise SystemExit(1)


if __name__ == "__main__":
    main()
