import argparse, ast, json, os, runpy, tempfile
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

HERE = Path(__file__).parent
AI_DIMS = ("capability", "deciding_signal")

def load(name): return json.loads((HERE / name).read_text(encoding="utf-8"))

def validate_contract(c):
    assert c["status"] == "SOLIDIFIED" and date.fromisoformat(c["source_verified_on"]) <= date.today()
    assert all(urlparse(u).scheme == "https" and urlparse(u).hostname == "learn.microsoft.com" for u in c["source_urls"])
    assert c["python_contract"]["skill_id"] == "PY-015" and c["ai901_contract"]["objective_id"] == "AI901-D1-O7"
    assert c["python_contract"]["gate"].startswith("8/8 primary") and c["ai901_contract"]["gate"].startswith("8/8 primary")
    assert [len(c["ai901_contract"]["forms"][f]) for f in ("primary", "retrieval", "transfer")] == [4, 2, 4]
    assert c["ai901_contract"]["scene_and_sequence_are_never_cases_or_answer_cues"] is True
    assert c["remediation_contract"]["unlimited_retry"] and c["authority_contract"]["offline_only"] and c["authority_contract"]["no_exam_guarantee"]
    assert c["accessibility_contract"]["minimum_target_css_px"] >= 44 and c["accessibility_contract"]["time_limit"] is False
    assert c["evidence_contract"]["save_eligibility"].startswith("require finalized strict PY-015")
    assert {"two continuities remain distinct", "closed junction unavailable", "purpose=None", "no RP-008 route or destination"} <= set(c["world_locks"])
    assert len(c["reopen_conditions"]) == 3

def inspect_python(path):
    tree = ast.parse(path.read_text(encoding="utf-8"))
    calls = [n for n in ast.walk(tree) if isinstance(n, ast.Call)]
    path_import = any(isinstance(n, ast.ImportFrom) and n.module == "pathlib" and [a.name for a in n.names] == ["Path"] for n in tree.body)
    writes = [n for n in calls if isinstance(n.func, ast.Attribute) and n.func.attr == "write_text"]
    reads = [n for n in calls if isinstance(n.func, ast.Attribute) and n.func.attr == "read_text"]
    utf8 = lambda call: any(k.arg == "encoding" and isinstance(k.value, ast.Constant) and k.value.value == "utf-8" for k in call.keywords)
    forbidden = {"open", "print", "eval", "exec", "system", "remove", "unlink", "rmdir", "requests", "urlopen", "connect", "send"}
    forbidden_used = any((n.func.id if isinstance(n.func, ast.Name) else getattr(n.func, "attr", "")) in forbidden for n in calls)
    return path_import, len(writes) == 1 and utf8(writes[0]), len(reads) == 1 and utf8(reads[0]), not forbidden_used

def evaluate_python(form, path, c):
    expected = c["python_contract"]["forms"][form]
    path_ok, write_ok, read_ok, safe = inspect_python(path)
    checks = {name: False for name in c["python_contract"]["checks"]}
    try:
        source_path = path.resolve()
        with tempfile.TemporaryDirectory() as directory:
            old = os.getcwd(); os.chdir(directory)
            try: state = runpy.run_path(str(source_path))
            finally: os.chdir(old)
            report_path, report_text, restored = state["report_path"], state["report_text"], state["restored_report"]
            expected_text = "\n".join(expected["lines"]) + "\n"
            checks["report_path_is_path"] = path_ok and isinstance(report_path, Path) and report_path.name == expected["filename"]
            checks["exact_report_text"] = report_text == expected_text
            checks["write_text_called_once_utf8"] = write_ok
            checks["read_text_called_once_utf8"] = read_ok
            checks["round_trip_matches"] = restored == report_text
            checks["unavailable_junction_preserved"] = "junction=unavailable\n" in restored
            checks["unity_cause_purpose_none"] = all(f"{key}=None\n" in restored for key in ("unity", "cause", "purpose"))
            checks["no_forbidden_or_external_operations"] = safe and not report_path.is_absolute()
    except Exception:
        pass
    return checks

def evaluate_ai(form, answers, c):
    return {f"{case['id']}.{d}": answers.get(case["id"], {}).get(d) == case[d] for case in c["ai901_contract"]["forms"][form] for d in AI_DIMS}

def self_test():
    c = load("contract.json"); validate_contract(c)
    for form in ("primary", "transfer"): assert all(evaluate_python(form, HERE / f"reference_{form}.py", c).values())
    for form in ("primary", "retrieval", "transfer"):
        answers = load(f"reference_{form}_answers.json")
        assert all(evaluate_ai(form, answers, c).values()) and not any(evaluate_ai(form, {}, c).values())
    wrong = load("reference_transfer_answers.json"); wrong["T04"]["capability"] = "computer_vision"
    assert not evaluate_ai("transfer", wrong, c)["T04.capability"]
    with tempfile.TemporaryDirectory() as directory:
        bypass = Path(directory) / "bypass.py"
        bypass.write_text("from pathlib import Path\nreport_path=Path('braided_relation_report.txt')\nreport_text=''\nrestored_report=report_text\n", encoding="utf-8")
        result = evaluate_python("primary", bypass, c)
        assert not result["write_text_called_once_utf8"] and not result["read_text_called_once_utf8"]
    print("SELF-TEST PASS: RP-007 file round trip, vision/generation evidence, mystery locks, and bypass probes validated")

def main():
    parser = argparse.ArgumentParser(); parser.add_argument("--self-test", action="store_true")
    parser.add_argument("--python-form", choices=("primary", "transfer")); parser.add_argument("--python-check")
    parser.add_argument("--ai-form", choices=("primary", "retrieval", "transfer")); parser.add_argument("--answers")
    args = parser.parse_args()
    if args.self_test: self_test(); return
    c = load("contract.json"); validate_contract(c)
    if args.python_form and args.python_check: checks = evaluate_python(args.python_form, Path(args.python_check), c)
    elif args.ai_form and args.answers: checks = evaluate_ai(args.ai_form, json.loads(Path(args.answers).read_text(encoding="utf-8")), c)
    else: parser.error("complete form required")
    print(f"SCORE: {sum(checks.values())}/{len(checks)}")
    if not all(checks.values()): raise SystemExit(1)

if __name__ == "__main__": main()
