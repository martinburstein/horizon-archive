"""Safe deterministic AST validator for the L-01-03 calibration copies."""

from __future__ import annotations

import argparse
import ast
import subprocess
import sys
from pathlib import Path


LESSON_DIR = Path(__file__).resolve().parent
CHECK_CODES = (
    "E_PARSE",
    "E_SAFE_SHAPE",
    "E_STATEMENT_COUNT",
    "E_VARIABLE_SET",
    "E_VALUE",
    "E_REPAIR_STRUCTURE",
    "E_OUTPUT",
    "E_REPAIR_BOUNDARY",
)


def failed_checks() -> list[tuple[str, bool]]:
    return [(code, False) for code in CHECK_CODES]


def evaluate_traceback(source: str) -> list[tuple[str, bool]]:
    try:
        tree = ast.parse(source)
    except SyntaxError:
        return failed_checks()
    body = tree.body
    safe = all(isinstance(node, (ast.Assign, ast.Expr)) for node in body)
    assignment = body[0] if len(body) >= 1 and isinstance(body[0], ast.Assign) else None
    output_node = body[1].value if len(body) >= 2 and isinstance(body[1], ast.Expr) else None
    target_ok = (
        assignment is not None
        and len(assignment.targets) == 1
        and isinstance(assignment.targets[0], ast.Name)
    )
    value = assignment.value.value if assignment is not None and isinstance(assignment.value, ast.Constant) else None
    print_ok = (
        isinstance(output_node, ast.Call)
        and isinstance(output_node.func, ast.Name)
        and output_node.func.id == "print"
        and not output_node.keywords
        and len(output_node.args) == 1
        and isinstance(output_node.args[0], ast.Name)
    )
    print_name = output_node.args[0].id if print_ok else None
    assigned_name = assignment.targets[0].id if target_ok else None
    output = value if print_name == assigned_name else None
    return [
        ("E_PARSE", True),
        ("E_SAFE_SHAPE", safe and target_ok and print_ok),
        ("E_STATEMENT_COUNT", len(body) == 2),
        ("E_VARIABLE_SET", assigned_name == "route_label"),
        ("E_VALUE", type(value) is str and value == "ROUTE VERIFIED"),
        ("E_REPAIR_STRUCTURE", print_name == "route_label"),
        ("E_OUTPUT", output == "ROUTE VERIFIED"),
        ("E_REPAIR_BOUNDARY", "route_lable" not in source and print_name is not None),
    ]


def evaluate_indentation(source: str) -> list[tuple[str, bool]]:
    try:
        tree = ast.parse(source)
    except SyntaxError:
        return failed_checks()
    body = tree.body
    assignment = body[0] if len(body) >= 1 and isinstance(body[0], ast.Assign) else None
    if_node = body[1] if len(body) >= 2 and isinstance(body[1], ast.If) else None
    target_ok = (
        assignment is not None
        and len(assignment.targets) == 1
        and isinstance(assignment.targets[0], ast.Name)
    )
    assigned_name = assignment.targets[0].id if target_ok else None
    value = assignment.value.value if assignment is not None and isinstance(assignment.value, ast.Constant) else None
    test_ok = if_node is not None and isinstance(if_node.test, ast.Name) and if_node.test.id == "route_open"
    nested = if_node.body[0].value if if_node is not None and len(if_node.body) == 1 and isinstance(if_node.body[0], ast.Expr) else None
    print_ok = (
        isinstance(nested, ast.Call)
        and isinstance(nested.func, ast.Name)
        and nested.func.id == "print"
        and not nested.keywords
        and len(nested.args) == 1
        and isinstance(nested.args[0], ast.Constant)
        and nested.args[0].value == "CALIBRATION READY"
    )
    safe = target_ok and test_ok and print_ok and if_node is not None and not if_node.orelse
    output = "CALIBRATION READY" if value is True and safe else None
    return [
        ("E_PARSE", True),
        ("E_SAFE_SHAPE", safe),
        ("E_STATEMENT_COUNT", len(body) == 2),
        ("E_VARIABLE_SET", assigned_name == "route_open"),
        ("E_VALUE", type(value) is bool and value is True),
        ("E_REPAIR_STRUCTURE", test_ok and print_ok),
        ("E_OUTPUT", output == "CALIBRATION READY"),
        ("E_REPAIR_BOUNDARY", safe and source.splitlines()[2].startswith("    ")),
    ]


def evaluate(source: str, form: str) -> list[tuple[str, bool]]:
    return evaluate_traceback(source) if form == "traceback" else evaluate_indentation(source)


def starter_error(path: Path) -> str:
    process = subprocess.run(
        [sys.executable, str(path)],
        capture_output=True,
        text=True,
        timeout=5,
        check=False,
    )
    assert process.returncode != 0
    return process.stderr


def self_test() -> None:
    traceback_ref = (LESSON_DIR / "reference_traceback.py").read_text(encoding="utf-8")
    indentation_ref = (LESSON_DIR / "reference_indentation.py").read_text(encoding="utf-8")
    assert all(passed for _, passed in evaluate(traceback_ref, "traceback"))
    assert all(passed for _, passed in evaluate(indentation_ref, "indentation"))

    name_error = starter_error(LESSON_DIR / "calibration_traceback.py")
    assert "NameError" in name_error and "line 2" in name_error and "route_lable" in name_error
    indent_error = starter_error(LESSON_DIR / "calibration_indentation.py")
    assert "IndentationError" in indent_error and "line 3" in indent_error

    hardcoded = traceback_ref.replace("print(route_label)", 'print("ROUTE VERIFIED")')
    assert not dict(evaluate(hardcoded, "traceback"))["E_REPAIR_STRUCTURE"]
    quoted_bool = indentation_ref.replace("route_open = True", 'route_open = "True"')
    assert not dict(evaluate(quoted_bool, "indentation"))["E_VALUE"]
    extra_edit = traceback_ref + '\nother = "UNRELATED"\n'
    assert not dict(evaluate(extra_edit, "traceback"))["E_STATEMENT_COUNT"]
    print("L-01-03 validator self-test: PASS (2 valid forms, 2 real starter errors, 3 negative fixtures)")


def check(path: Path, form: str) -> int:
    checks = evaluate(path.read_text(encoding="utf-8"), form)
    passed_count = sum(passed for _, passed in checks)
    for code, passed in checks:
        print(f"{'PASS' if passed else 'FAIL'} {code}")
    print(f"Score: {passed_count}/{len(checks)}")
    if passed_count == len(checks):
        print("ROUTE VERIFIED" if form == "traceback" else "CALIBRATION READY")
        print("Mastery: CODE FORM PASS")
        return 0
    print("Route status: OPEN")
    print("Mastery: REMEDIATE OR EXIT SAFELY")
    return 1


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--self-test", action="store_true")
    parser.add_argument("--form", choices=("traceback", "indentation"))
    parser.add_argument("--check", type=Path)
    args = parser.parse_args()
    if args.self_test:
        self_test()
        return 0
    if args.form is None or args.check is None:
        parser.error("--form and --check are required unless --self-test is used")
    return check(args.check, args.form)


if __name__ == "__main__":
    raise SystemExit(main())
