import argparse
import ast
import contextlib
import io
import json
import runpy
import sys
import tempfile
from pathlib import Path

HERE = Path(__file__).parent
FORMS = {
    "primary":{"function":"prepare_request","parameters":["config_path","getenv"],"config":"primary_config.json"},
    "transfer":{"function":"assemble_call","parameters":["settings_path","getenv"],"config":"transfer_config.json"}
}

def static_contract(path, cfg):
    tree = ast.parse(path.read_text(encoding="utf-8"))
    imported = set()
    for node in tree.body:
        if isinstance(node, ast.Import): imported.update(alias.name for alias in node.names)
        if isinstance(node, ast.ImportFrom): imported.add(node.module)
    fn = next((n for n in tree.body if isinstance(n, ast.FunctionDef) and n.name == cfg["function"]), None)
    signature = fn is not None and [a.arg for a in fn.args.args] == cfg["parameters"]
    calls = [n for n in ast.walk(fn) if isinstance(n, ast.Call)] if fn else []
    names = {n.func.id for n in calls if isinstance(n.func, ast.Name)}
    attrs = {n.func.attr for n in calls if isinstance(n.func, ast.Attribute)}
    file_json = "loads" in attrs and "read_text" in attrs
    env_lookup = "getenv" in names
    forbidden = {"requests", "urllib", "httpx", "aiohttp"}
    return {"required_imports": {"json","os","pathlib","request_tools"}.issubset(imported), "function_signature": signature,
            "file_json_flow": file_json, "environment_lookup": env_lookup, "offline_no_network": not bool(imported & forbidden)}

def evaluate(form, path):
    cfg = FORMS[form]
    checks = {name: False for name in ("loads","required_imports","function_signature","file_json_flow","environment_lookup","missing_secret_rejected","sample_request","hidden_config_reuse","offline_no_network","secret_redacted")}
    try:
        checks.update(static_contract(path, cfg))
        sys.path.insert(0, str(HERE))
        try:
            with contextlib.redirect_stdout(io.StringIO()): state = runpy.run_path(str(path))
        finally:
            sys.path.pop(0)
        checks["loads"] = True
        fn = state[cfg["function"]]
        sample_cfg = json.loads((HERE / cfg["config"]).read_text(encoding="utf-8"))
        sample_secret = "validator-sample-secret"
        sample = fn(HERE / cfg["config"], lambda name: sample_secret if name == sample_cfg["secret_env"] else None)
        checks["sample_request"] = sample == {"method":"POST","url":sample_cfg["endpoint"],"headers":{"Authorization":f"Bearer {sample_secret}","Content-Type":"application/json"},"json":sample_cfg["body"]}
        try: fn(HERE / cfg["config"], lambda name: None)
        except ValueError: checks["missing_secret_rejected"] = True
        hidden = {"endpoint":"https://hidden.invalid/v9/check","secret_env":"HIDDEN_TOKEN","body":{"probe":17,"items":["x"]}}
        with tempfile.TemporaryDirectory() as directory:
            hidden_path = Path(directory) / "hidden.json"; hidden_path.write_text(json.dumps(hidden), encoding="utf-8")
            hidden_secret = "do-not-print-hidden-secret"
            request = fn(hidden_path, lambda name: hidden_secret if name == "HIDDEN_TOKEN" else None)
        checks["hidden_config_reuse"] = request["url"] == hidden["endpoint"] and request["json"] == hidden["body"] and request["headers"]["Authorization"] == f"Bearer {hidden_secret}"
        from request_tools import safe_summary
        rendered = json.dumps(safe_summary(request), sort_keys=True)
        checks["secret_redacted"] = hidden_secret not in rendered and "Authorization" not in rendered and json.loads(rendered)["has_authorization"] is True
    except Exception:
        pass
    return checks

def retrieval(answers):
    key = {item["id"]:item["answer"] for item in json.loads((HERE/"retrieval_bank.json").read_text())}
    return {item:answers.get(item)==answer for item,answer in key.items()}

def self_test():
    for form in FORMS:
        assert all(evaluate(form, HERE/f"reference_{form}.py").values())
        assert not all(evaluate(form, HERE/f"starter_{form}.py").values())
    assert all(retrieval(json.loads((HERE/"reference_retrieval_answers.json").read_text())).values())
    assert not any(retrieval({}).values())
    print("SELF-TEST PASS: references, starters, hidden config, missing secret, redaction, offline, and retrieval probes validated")

def main():
    p=argparse.ArgumentParser(); p.add_argument("--form",choices=FORMS); p.add_argument("--check"); p.add_argument("--retrieval"); p.add_argument("--self-test",action="store_true"); a=p.parse_args()
    if a.self_test: self_test(); return
    if a.retrieval:
        results=retrieval(json.loads(Path(a.retrieval).read_text())); score=sum(results.values()); print(f"RETRIEVAL: {score}/4");
        if score!=4: raise SystemExit(1)
        return
    if not a.form or not a.check: p.error("use --self-test, --retrieval FILE, or --form FORM --check FILE")
    results=evaluate(a.form,Path(a.check)); score=sum(results.values()); print(f"{a.form.upper()}: {score}/10")
    for name,passed in results.items(): print(f"{'PASS' if passed else 'FAIL'} {name}")
    if score!=10: raise SystemExit(1)

if __name__=="__main__": main()
