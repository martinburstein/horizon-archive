import argparse
import ast
import json
import runpy
import tempfile
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

HERE = Path(__file__).parent
AI_DIMS = ("client_step", "deciding_signal")
UNSUPPORTED = (
    "identity",
    "topology",
    "continuity",
    "transformation",
    "unity",
    "synchronization",
    "chronology",
    "cause",
    "purpose",
)


def load(name):
    return json.loads((HERE / name).read_text(encoding="utf-8"))


def validate_contract(contract):
    assert contract["status"] == "SOLIDIFIED"
    assert date.fromisoformat(contract["source_verified_on"]) <= date.today()
    assert all(
        urlparse(url).scheme == "https" and urlparse(url).hostname == "learn.microsoft.com"
        for url in contract["source_urls"]
    )
    assert contract["python_contract"]["skill_id"] == "PY-018"
    assert contract["ai901_contract"]["objective_id"] == "AI901-D2-O3"
    assert contract["python_contract"]["gate"].startswith("8/8 primary")
    assert contract["ai901_contract"]["gate"].startswith("8/8 primary")
    assert [len(contract["ai901_contract"]["forms"][form]) for form in ("primary", "retrieval", "transfer")] == [4, 4, 4]
    assert contract["ai901_contract"]["scene_cases_and_inferred_weakness_are_never_cases_answers_or_remediation_signals"] is True
    assert contract["remediation_contract"]["remediation_is_selected_only_from_scored_python_checks_or_ai_misconception_tags"] is True
    assert contract["authority_contract"]["offline_only"] and contract["authority_contract"]["no_exam_guarantee"]
    assert contract["accessibility_contract"]["minimum_target_css_px"] >= 44
    assert contract["accessibility_contract"]["time_limit"] is False
    assert contract["evidence_contract"]["save_eligibility"].startswith("require finalized strict PY-018")
    assert {
        "RP-007 RP-008 and RP-009 bounded summaries remain valid only within recorded scopes",
        "seven equal non-answer-key observations remain independent",
        "identity=None",
        "topology=None",
        "synchronization=None",
        "chronology=None",
        "continuation unchanged",
        "no RP-011 route destination event or learning content",
    } <= set(contract["world_locks"])
    assert len(contract["reopen_conditions"]) == 3


def expected_records(form):
    if form == "primary":
        return (
            {
                "method": "POST",
                "route_label": "project_responses",
                "headers": {"content_type": "application/json"},
                "payload": {
                    "record_ids": ["near_relation", "ordered_gap", "far_correspondence"],
                    "scope": "sanitized_exposed_record_replicas",
                },
            },
            {
                "status_code": 200,
                "headers": {"content_type": "application/json"},
                "body": {
                    "supported": ["near_relation"],
                    "counterevidence": ["far_correspondence"],
                    "ambiguous": ["ordered_gap"],
                    "unavailable": ["outer_margin"],
                    **{key: None for key in UNSUPPORTED},
                },
            },
        )
    return (
        {
            "method": "POST",
            "route_label": "bounded_analysis",
            "headers": {"content_type": "application/json"},
            "payload": {
                "record_ids": ["inlet_pair", "missing_interval", "outer_repeat"],
                "scope": "fresh_sanitized_replica_set",
            },
        },
        {
            "status_code": 202,
            "headers": {"content_type": "application/json"},
            "body": {
                "supported": ["inlet_pair"],
                "counterevidence": ["outer_repeat"],
                "ambiguous": ["missing_interval"],
                "unavailable": ["sealed_margin"],
                **{key: None for key in UNSUPPORTED},
            },
        },
    )


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
    safe_calls = not any(
        (node.func.id if isinstance(node.func, ast.Name) else getattr(node.func, "attr", "")) in forbidden_calls
        for node in calls
    )
    forbidden_names = {"requests", "urllib", "httpx", "socket", "aiohttp", "azure", "openai"}
    names = {node.id for node in ast.walk(tree) if isinstance(node, ast.Name)}
    return not imports and safe_calls and not (names & forbidden_names)


def evaluate_python(form, path, contract):
    checks = {name: False for name in contract["python_contract"]["checks"]}
    expected_request, expected_response = expected_records(form)
    try:
        safe = inspect_python(path)
        state = runpy.run_path(str(path.resolve()))
        request = state["request_record"]
        response = state["response_record"]
        summary = state["exchange_summary"]
        checks["local_python_only_no_import_or_remote_client"] = safe
        checks["request_and_response_inputs_preserved_exactly"] = request == expected_request and response == expected_response
        checks["request_method_route_and_content_type_preserved"] = summary["request"] == {
            "method": expected_request["method"],
            "route_label": expected_request["route_label"],
            "content_type": expected_request["headers"]["content_type"],
            "record_ids": expected_request["payload"]["record_ids"],
            "scope": expected_request["payload"]["scope"],
        }
        checks["request_payload_provenance_and_scope_preserved"] = (
            summary["request"]["record_ids"] == expected_request["payload"]["record_ids"]
            and summary["request"]["scope"] == expected_request["payload"]["scope"]
        )
        checks["response_status_and_content_type_preserved"] = (
            summary["response"]["status_code"] == expected_response["status_code"]
            and summary["response"]["content_type"] == expected_response["headers"]["content_type"]
        )
        checks["response_evidence_classes_remain_separate"] = summary["response"] == {
            "status_code": expected_response["status_code"],
            "content_type": expected_response["headers"]["content_type"],
            "supported": expected_response["body"]["supported"],
            "counterevidence": expected_response["body"]["counterevidence"],
            "ambiguous": expected_response["body"]["ambiguous"],
            "unavailable": expected_response["body"]["unavailable"],
        }
        checks["unsupported_limits_remain_none"] = list(summary["unsupported"]) == list(UNSUPPORTED) and all(
            summary["unsupported"][key] is None for key in UNSUPPORTED
        )
        checks["no_file_network_output_secret_credential_endpoint_or_external_operation"] = safe and not any(
            token in path.read_text(encoding="utf-8")
            for token in ("API_KEY", "SECRET", "PASSWORD", "https://", "http://", "credential", "endpoint")
        )
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
    wrong["T04"]["client_step"] = "response_processing"
    assert not evaluate_ai("transfer", wrong, contract)["T04.client_step"]
    with tempfile.TemporaryDirectory() as directory:
        bypass = Path(directory) / "bypass.py"
        bypass.write_text("request_record={}\nresponse_record={}\nexchange_summary={}\n", encoding="utf-8")
        result = evaluate_python("primary", bypass, contract)
        assert not result["request_and_response_inputs_preserved_exactly"]
        assert not result["response_evidence_classes_remain_separate"]
        remote = Path(directory) / "remote.py"
        remote.write_text("import socket\nrequest_record={}\nresponse_record={}\nexchange_summary={}\n", encoding="utf-8")
        result = evaluate_python("primary", remote, contract)
        assert not result["local_python_only_no_import_or_remote_client"]
        assert not result["no_file_network_output_secret_credential_endpoint_or_external_operation"]
    print("SELF-TEST PASS: RP-010 request/response boundary, Foundry client flow, scope locks, and bypass probes validated")


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
