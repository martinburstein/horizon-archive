import argparse
import ast
import contextlib
import copy
import io
import runpy
from pathlib import Path

FORMS = {
    "primary": {
        "function": "classify_readings", "parameters": ["readings", "threshold"],
        "sample_name": "results", "sample": ["clear", "alert", "alert"],
        "boundary_args": ([5], 5), "boundary": ["alert"],
        "fresh_args": ([0, 2, 4], 3), "fresh": ["clear", "clear", "alert"]
    },
    "transfer": {
        "function": "route_items", "parameters": ["items", "minimum"],
        "sample_name": "routes", "sample": [{"name":"alpha","route":"hold"},{"name":"beta","route":"review"}],
        "boundary_args": ([{"name":"edge","score":3}], 3), "boundary": [{"name":"edge","route":"review"}],
        "fresh_args": ([{"name":"low","score":1},{"name":"high","score":6}], 4),
        "fresh": [{"name":"low","route":"hold"},{"name":"high","route":"review"}]
    }
}

def source_contract(path, cfg):
    tree = ast.parse(path.read_text(encoding="utf-8"))
    fn = next((node for node in tree.body if isinstance(node, ast.FunctionDef) and node.name == cfg["function"]), None)
    if fn is None: return False, False, False, False
    signature = [arg.arg for arg in fn.args.args] == cfg["parameters"] and not fn.args.vararg and not fn.args.kwarg
    uses_loop = any(isinstance(node, ast.For) for node in ast.walk(fn))
    uses_if_else = any(isinstance(node, ast.If) and node.orelse for node in ast.walk(fn))
    literal_print = any(isinstance(node, ast.Call) and isinstance(node.func, ast.Name) and node.func.id == "print"
                        and node.args and isinstance(node.args[0], ast.Constant) for node in ast.walk(tree))
    return signature, uses_loop, uses_if_else, not literal_print

def evaluate(form, path):
    cfg = FORMS[form]
    names = ("runs","function_signature","uses_for_loop","uses_if_else","sample_return","boundary_behavior","unseen_reuse_no_mutation","derived_output_no_bypass")
    checks = {name: False for name in names}
    try:
        signature, uses_loop, uses_if_else, no_literal_print = source_contract(path, cfg)
        stream = io.StringIO()
        with contextlib.redirect_stdout(stream): state = runpy.run_path(str(path))
        checks["runs"] = True
        checks["function_signature"] = signature
        checks["uses_for_loop"] = uses_loop
        checks["uses_if_else"] = uses_if_else
        fn = state[cfg["function"]]
        checks["sample_return"] = state.get(cfg["sample_name"]) == cfg["sample"]
        checks["boundary_behavior"] = fn(*copy.deepcopy(cfg["boundary_args"])) == cfg["boundary"]
        fresh_args = copy.deepcopy(cfg["fresh_args"]); before = copy.deepcopy(fresh_args[0])
        checks["unseen_reuse_no_mutation"] = fn(*fresh_args) == cfg["fresh"] and fresh_args[0] == before
        lines = stream.getvalue().strip().splitlines()
        checks["derived_output_no_bypass"] = no_literal_print and len(lines) == 1 and ast.literal_eval(lines[0]) == cfg["sample"]
    except Exception:
        pass
    return checks

def self_test():
    here = Path(__file__).parent
    for form in FORMS:
        assert all(evaluate(form, here / f"reference_{form}.py").values())
        assert not all(evaluate(form, here / f"starter_{form}.py").values())
    print("SELF-TEST PASS: references, starters, boundaries, unseen reuse, and anti-bypass checks validated")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--form", choices=FORMS); parser.add_argument("--check"); parser.add_argument("--self-test", action="store_true")
    args = parser.parse_args()
    if args.self_test: self_test(); return
    if not args.form or not args.check: parser.error("use --self-test or provide --form and --check")
    checks = evaluate(args.form, Path(args.check)); score = sum(checks.values())
    print(f"{args.form.upper()}: {score}/8")
    for name, passed in checks.items(): print(f"{'PASS' if passed else 'FAIL'} {name}")
    if score != 8: raise SystemExit(1)

if __name__ == "__main__": main()
