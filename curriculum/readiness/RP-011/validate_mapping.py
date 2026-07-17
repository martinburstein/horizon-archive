import argparse
import ast
import json
import runpy
import tempfile
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

HERE = Path(__file__).parent
AI_DIMS = ("agent_surface", "deciding_signal")
UNSUPPORTED = ("identity", "topology", "continuity", "cause", "purpose", "readiness", "authority")


def load(name):
    return json.loads((HERE / name).read_text(encoding="utf-8"))


def validate_contract(contract):
    assert contract["status"] == "SOLIDIFIED"
    assert date.fromisoformat(contract["source_verified_on"]) <= date.today()
    assert all(
        urlparse(url).scheme == "https" and urlparse(url).hostname == "learn.microsoft.com"
        for url in contract["source_urls"]
    )
    assert contract["python_contract"]["skill_id"] == "PY-019"
    assert contract["ai901_contract"]["objective_id"] == "AI901-D2-O4"
    assert contract["python_contract"]["gate"].startswith("8/8 primary")
    assert contract["ai901_contract"]["gate"].startswith("8/8 primary")
    assert [len(contract["ai901_contract"]["forms"][form]) for form in ("primary", "retrieval", "transfer")] == [4, 4, 4]
    assert contract["ai901_contract"]["scene_prior_records_and_inferred_weakness_are_never_cases_answers_or_remediation_signals"] is True
    assert contract["remediation_contract"]["remediation_is_selected_only_from_scored_python_checks_or_ai_misconception_tags"] is True
    assert contract["authority_contract"]["offline_only"] and contract["authority_contract"]["no_exam_guarantee"]
    assert contract["accessibility_contract"]["minimum_target_css_px"] >= 44
    assert contract["accessibility_contract"]["time_limit"] is False
    assert contract["evidence_contract"]["fresh_finalization_eligibility"].startswith("require finalized strict PY-019")
    assert {
        "RP-007 RP-008 RP-009 and RP-010 records remain separate valid bounded scopes",
        "prior records hidden but retained until fresh finalization",
        "no memory of hidden content is required",
        "identity=None",
        "topology=None",
        "readiness=None",
        "authority=None",
        "continuation unchanged",
        "no RP-012 route destination event lesson verdict or ending content",
    } <= set(contract["world_locks"])
    assert len(contract["reopen_conditions"]) == 3


def expected_parts(form):
    if form == "primary":
        values = ("local_schema_only", "local_replica_only")
        provenance = "fresh_sanitized_reach_replicas"
    else:
        values = ("bounded_exchange_shape", "offline_client_shape")
        provenance = "blank_transfer_reach_replicas"
    return [
        {"kind": "api", "role": "request_response_contract", "value": values[0]},
        {"kind": "sdk", "role": "client_library_abstraction", "value": values[1]},
        {"kind": "endpoint", "role": "service_address_boundary", "value": None},
    ], provenance


def inspect_python(path):
    source = path.read_text(encoding="utf-8")
    tree = ast.parse(source)
    imports = [node for node in ast.walk(tree) if isinstance(node, (ast.Import, ast.ImportFrom))]
    calls = [node for node in ast.walk(tree) if isinstance(node, ast.Call)]
    forbidden_calls = {
        "open", "print", "eval", "exec", "system", "popen", "remove", "unlink", "rmdir",
        "request", "urlopen", "connect", "send", "post", "get", "put", "patch", "delete",
        "write_text", "read_text", "AIProjectClient", "DefaultAzureCredential",
    }
    forbidden_names = {"requests", "urllib", "httpx", "socket", "aiohttp", "azure", "openai", "subprocess", "os"}
    names = {node.id for node in ast.walk(tree) if isinstance(node, ast.Name)}
    strings = {node.value for node in ast.walk(tree) if isinstance(node, ast.Constant) and isinstance(node.value, str)}
    safe_calls = not any(
        (node.func.id if isinstance(node.func, ast.Name) else getattr(node.func, "attr", "")) in forbidden_calls
        for node in calls
    )
    no_live_values = not any(value.startswith(("http://", "https://")) for value in strings)
    return not imports and safe_calls and not (names & forbidden_names) and no_live_values


def evaluate_python(form, path, contract):
    checks = {name: False for name in contract["python_contract"]["checks"]}
    expected, provenance = expected_parts(form)
    try:
        safe = inspect_python(path)
        state = runpy.run_path(str(path.resolve()))
        parts = state["part_replicas"]
        record = state["fresh_integration_record"]
        checks["local_python_only_no_import_or_remote_client"] = safe
        checks["supplied_replicas_preserved_exactly"] = parts == expected
        checks["api_role_preserved_as_request_response_contract"] = record["parts"]["api"] == {
            "role": "request_response_contract", "value": expected[0]["value"]
        }
        checks["sdk_role_preserved_as_client_library_abstraction"] = record["parts"]["sdk"] == {
            "role": "client_library_abstraction", "value": expected[1]["value"]
        }
        checks["endpoint_role_preserved_as_address_boundary_with_null_value"] = record["parts"]["endpoint"] == {
            "role": "service_address_boundary", "value": None
        }
        checks["fresh_record_uses_only_new_local_replica_provenance"] = (
            record["provenance"] == provenance and set(record["parts"]) == {"api", "sdk", "endpoint"}
        )
        checks["unsupported_limits_remain_none"] = list(record["unsupported"]) == list(UNSUPPORTED) and all(
            record["unsupported"][key] is None for key in UNSUPPORTED
        )
        checks["no_package_file_network_output_secret_credential_endpoint_or_external_operation"] = safe
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
    wrong["T04"]["agent_surface"] = "agent_portal_testing"
    assert not evaluate_ai("transfer", wrong, contract)["T04.agent_surface"]
    with tempfile.TemporaryDirectory() as directory:
        bypass = Path(directory) / "bypass.py"
        bypass.write_text("part_replicas=[]\nfresh_integration_record={}\n", encoding="utf-8")
        result = evaluate_python("primary", bypass, contract)
        assert not result["supplied_replicas_preserved_exactly"]
        assert not result["api_role_preserved_as_request_response_contract"]
        remote = Path(directory) / "remote.py"
        remote.write_text("import socket\npart_replicas=[]\nfresh_integration_record={}\n", encoding="utf-8")
        result = evaluate_python("primary", remote, contract)
        assert not result["local_python_only_no_import_or_remote_client"]
        assert not result["no_package_file_network_output_secret_credential_endpoint_or_external_operation"]
    print("SELF-TEST PASS: RP-011 API/SDK/endpoint boundary, single-agent surfaces, fresh-record locks, and bypass probes validated")


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
