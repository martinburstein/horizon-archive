import argparse
import ast
import contextlib
import io
import json
import runpy
from pathlib import Path

FORMS = {
    "primary": {
        "list_key": "observations", "record": {"kind": "image", "values": ["arch", "blue"]},
        "flag": ("complete", True), "access": (("first_kind", "audio"), ("last_value", "blue")),
        "output": ("audio", "blue")
    },
    "transfer": {
        "list_key": "readings", "record": {"sensor": "light", "values": [3, 5]},
        "flag": ("verified", True), "access": (("second_sensor", "light"), ("first_value", 3)),
        "output": ("light", "3")
    }
}

def inspect_source(path):
    source = path.read_text(encoding="utf-8")
    tree = ast.parse(source)
    literal_print = any(isinstance(node, ast.Call) and isinstance(node.func, ast.Name)
                        and node.func.id == "print" and node.args
                        and isinstance(node.args[0], ast.Constant) for node in ast.walk(tree))
    uses_append = any(isinstance(node, ast.Call) and isinstance(node.func, ast.Attribute)
                      and node.func.attr == "append" for node in ast.walk(tree))
    nested_assignment = any(isinstance(node, ast.Assign)
                            and any(isinstance(target, ast.Subscript)
                                    and isinstance(target.value, ast.Subscript)
                                    for target in node.targets) for node in ast.walk(tree))
    return not literal_print, uses_append, nested_assignment

def evaluate(form, path):
    cfg = FORMS[form]
    checks = {name: False for name in (
        "runs", "json_to_nested_containers", "appends_record", "updates_nested_flag",
        "first_nested_access", "second_nested_access", "json_round_trip", "derived_output_no_bypass")}
    try:
        no_literal_print, uses_append, nested_assignment = inspect_source(path)
        stream = io.StringIO()
        with contextlib.redirect_stdout(stream):
            state = runpy.run_path(str(path))
        checks["runs"] = True
        packet = state.get("packet")
        checks["json_to_nested_containers"] = isinstance(packet, dict) and isinstance(packet.get(cfg["list_key"]), list) and isinstance(packet.get("meta"), dict)
        checks["appends_record"] = uses_append and len(packet[cfg["list_key"]]) == 2 and packet[cfg["list_key"]][1] == cfg["record"]
        flag_name, flag_value = cfg["flag"]
        checks["updates_nested_flag"] = nested_assignment and packet["meta"].get(flag_name) is flag_value
        (first_name, first_expected), (second_name, second_expected) = cfg["access"]
        checks["first_nested_access"] = state.get(first_name) == first_expected
        checks["second_nested_access"] = state.get(second_name) == second_expected
        encoded = state.get("encoded", "")
        checks["json_round_trip"] = json.loads(encoded) == packet
        lines = stream.getvalue().strip().splitlines()
        checks["derived_output_no_bypass"] = no_literal_print and len(lines) == 3 and tuple(lines[:2]) == cfg["output"] and json.loads(lines[2]) == packet
    except Exception:
        pass
    return checks

def self_test():
    here = Path(__file__).parent
    for form in FORMS:
        assert all(evaluate(form, here / f"reference_{form}.py").values())
        assert not all(evaluate(form, here / f"starter_{form}.py").values())
    print("SELF-TEST PASS: references, starters, structure, and anti-bypass checks validated")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--form", choices=FORMS)
    parser.add_argument("--check")
    parser.add_argument("--self-test", action="store_true")
    args = parser.parse_args()
    if args.self_test:
        self_test(); return
    if not args.form or not args.check:
        parser.error("use --self-test or provide --form and --check")
    checks = evaluate(args.form, Path(args.check))
    score = sum(checks.values())
    print(f"{args.form.upper()}: {score}/8")
    for name, passed in checks.items(): print(f"{'PASS' if passed else 'FAIL'} {name}")
    if score != 8: raise SystemExit(1)

if __name__ == "__main__":
    main()
