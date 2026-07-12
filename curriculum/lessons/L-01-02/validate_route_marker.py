"""Safe deterministic AST validator for the L-01-02 route-marker exercise."""

from __future__ import annotations

import argparse
import ast
from pathlib import Path


LESSON_DIR = Path(__file__).resolve().parent
CHECK_CODES = (
    "E_SAFE_SHAPE",
    "E_VARIABLE_SET",
    "E_SITE_VALUE",
    "E_LABEL_HISTORY",
    "E_CHANNEL_TYPE",
    "E_PRINT_VARIABLES",
    "E_OUTPUT_1",
    "E_OUTPUT_2",
)
EXPECTED = {
    "primary": {
        "site_history": ["DROWNED ARCHIVE"],
        "label_history": ["LOCAL SURFACE"],
        "channel_history": [3],
        "outputs": ["DROWNED ARCHIVE", "LOCAL SURFACE 3"],
    },
    "transfer": {
        "site_history": ["DROWNED ARCHIVE"],
        "label_history": ["LOCAL SURFACE", "ROUTE VERIFIED"],
        "channel_history": [3],
        "outputs": ["DROWNED ARCHIVE", "ROUTE VERIFIED 3"],
    },
}


def analyze_text(source: str) -> dict:
    result = {
        "safe": True,
        "names": set(),
        "history": {},
        "print_names": [],
        "outputs": [],
    }
    try:
        tree = ast.parse(source)
    except SyntaxError:
        result["safe"] = False
        return result

    environment: dict[str, object] = {}
    for statement in tree.body:
        if isinstance(statement, ast.Expr) and isinstance(statement.value, ast.Constant) and isinstance(statement.value.value, str):
            continue  # module docstring
        if isinstance(statement, ast.Assign):
            if (
                len(statement.targets) != 1
                or not isinstance(statement.targets[0], ast.Name)
                or not isinstance(statement.value, ast.Constant)
                or type(statement.value.value) not in (str, int, bool)
            ):
                result["safe"] = False
                continue
            name = statement.targets[0].id
            value = statement.value.value
            result["names"].add(name)
            result["history"].setdefault(name, []).append(value)
            environment[name] = value
            continue
        if isinstance(statement, ast.Expr) and isinstance(statement.value, ast.Call):
            call = statement.value
            if (
                not isinstance(call.func, ast.Name)
                or call.func.id != "print"
                or call.keywords
                or not all(isinstance(argument, ast.Name) for argument in call.args)
            ):
                result["safe"] = False
                continue
            names = [argument.id for argument in call.args]
            if any(name not in environment for name in names):
                result["safe"] = False
                continue
            result["print_names"].append(names)
            result["outputs"].append(" ".join(str(environment[name]) for name in names))
            continue
        result["safe"] = False
    return result


def evaluate(source: str, form: str) -> list[tuple[str, bool]]:
    observed = analyze_text(source)
    expected = EXPECTED[form]
    history = observed["history"]
    outputs = observed["outputs"]
    checks = [
        ("E_SAFE_SHAPE", observed["safe"]),
        ("E_VARIABLE_SET", observed["names"] == {"site_name", "signal_label", "channel_count"}),
        ("E_SITE_VALUE", history.get("site_name") == expected["site_history"]),
        ("E_LABEL_HISTORY", history.get("signal_label") == expected["label_history"]),
        ("E_CHANNEL_TYPE", history.get("channel_count") == expected["channel_history"] and all(type(value) is int for value in history.get("channel_count", []))),
        ("E_PRINT_VARIABLES", observed["print_names"] == [["site_name"], ["signal_label", "channel_count"]]),
        ("E_OUTPUT_1", len(outputs) >= 1 and outputs[0] == expected["outputs"][0]),
        ("E_OUTPUT_2", len(outputs) >= 2 and outputs[1] == expected["outputs"][1]),
    ]
    return checks


def self_test() -> None:
    primary = (LESSON_DIR / "reference_primary.py").read_text(encoding="utf-8")
    transfer = (LESSON_DIR / "reference_transfer.py").read_text(encoding="utf-8")
    assert all(passed for _, passed in evaluate(primary, "primary"))
    assert all(passed for _, passed in evaluate(transfer, "transfer"))

    quoted_number = primary.replace("channel_count = 3", 'channel_count = "3"')
    assert not dict(evaluate(quoted_number, "primary"))["E_CHANNEL_TYPE"]

    hardcoded = primary.replace("print(site_name)", 'print("DROWNED ARCHIVE")')
    assert not dict(evaluate(hardcoded, "primary"))["E_PRINT_VARIABLES"]

    missing_reassignment = transfer.replace('\nsignal_label = "ROUTE VERIFIED"\n', "\n")
    assert not dict(evaluate(missing_reassignment, "transfer"))["E_LABEL_HISTORY"]

    unsafe = primary + "\nsite_name = input()\n"
    assert not dict(evaluate(unsafe, "primary"))["E_SAFE_SHAPE"]
    print("L-01-02 validator self-test: PASS (2 valid forms + 4 critical negative fixtures)")


def check(path: Path, form: str) -> int:
    source = path.read_text(encoding="utf-8")
    checks = evaluate(source, form)
    passed_count = sum(passed for _, passed in checks)
    for code, passed in checks:
        print(f"{'PASS' if passed else 'FAIL'} {code}")
    print(f"Score: {passed_count}/{len(checks)}")
    if passed_count == len(checks):
        for line in EXPECTED[form]["outputs"]:
            print(line)
        print("Mastery: CODE FORM PASS")
        return 0
    print("Mastery: REMEDIATE AND RETRY")
    return 1


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--self-test", action="store_true")
    parser.add_argument("--form", choices=("primary", "transfer"))
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
