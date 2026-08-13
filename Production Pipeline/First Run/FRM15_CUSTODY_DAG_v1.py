#!/usr/bin/env python3
"""Append-only, content-addressed custody ledger for FRM15 intermediates."""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import shutil
import stat
import tempfile
from pathlib import Path
from typing import Any

LEDGER_SCHEMA = "horizon.first-run.frm15-custody.v1"
NODE_KINDS = {"guide", "tool_result", "render", "edit", "mask", "derivative", "acceptance", "selected"}


def canonical(value: dict[str, Any]) -> bytes:
    return (json.dumps(value, sort_keys=True, separators=(",", ":")) + "\n").encode("utf-8")


def digest_file(path: Path) -> tuple[int, str]:
    size = 0
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        while chunk := handle.read(1024 * 1024):
            size += len(chunk)
            digest.update(chunk)
    return size, digest.hexdigest()


def safe_regular_file(path: Path) -> os.stat_result:
    if not path.is_absolute():
        raise ValueError("path must be absolute")
    before = path.lstat()
    if not stat.S_ISREG(before.st_mode) or path.is_symlink() or before.st_nlink != 1:
        raise ValueError("path is not a single-link ordinary file")
    attributes = getattr(before, "st_file_attributes", 0)
    reparse = getattr(stat, "FILE_ATTRIBUTE_REPARSE_POINT", 0x400)
    if attributes & reparse:
        raise ValueError("reparse file forbidden")
    return before


def read_records(ledger: Path) -> list[dict[str, Any]]:
    if not ledger.is_file() or ledger.is_symlink():
        raise ValueError("ledger missing or linked")
    records = []
    for line_number, line in enumerate(ledger.read_text(encoding="utf-8").splitlines(), 1):
        try:
            records.append(json.loads(line))
        except json.JSONDecodeError as error:
            raise ValueError(f"invalid ledger line {line_number}: {error}") from error
    return records


def record_hash(record: dict[str, Any]) -> str:
    return hashlib.sha256(canonical(record)).hexdigest()


def init_ledger(ledger: Path, root: Path) -> dict[str, Any]:
    if not ledger.is_absolute() or not root.is_absolute():
        raise ValueError("ledger and root must be absolute")
    resolved_root = root.resolve(strict=True)
    if not resolved_root.is_dir() or resolved_root.is_symlink():
        raise ValueError("custody root must be an existing ordinary directory")
    header = {"schema": LEDGER_SCHEMA, "record_type": "header", "cycle": "FRM15", "root": str(resolved_root), "sequence": 0, "previous_record_sha256": None}
    with ledger.open("xb") as handle:
        handle.write(canonical(header))
        handle.flush()
        os.fsync(handle.fileno())
    return header


def append_node(ledger: Path, root: Path, node_id: str, kind: str, file_path: Path, parents: list[str], operation: dict[str, Any]) -> dict[str, Any]:
    if kind not in NODE_KINDS or not node_id.startswith("FRM15-"):
        raise ValueError("node identity or kind rejected")
    records = read_records(ledger)
    header = records[0]
    resolved_root = root.resolve(strict=True)
    if header.get("root") != str(resolved_root):
        raise ValueError("custody root mismatch")
    existing_ids = {record.get("node_id") for record in records[1:]}
    if node_id in existing_ids or any(parent not in existing_ids for parent in parents):
        raise ValueError("duplicate node or missing parent")
    resolved_file = file_path.resolve(strict=True)
    try:
        resolved_file.relative_to(resolved_root)
    except ValueError as error:
        raise ValueError("node file lies outside custody root") from error
    before = safe_regular_file(resolved_file)
    size, sha256 = digest_file(resolved_file)
    after = safe_regular_file(resolved_file)
    if (before.st_dev, before.st_ino, before.st_size) != (after.st_dev, after.st_ino, after.st_size) or size != after.st_size:
        raise ValueError("file identity changed during hashing")
    record = {
        "schema": LEDGER_SCHEMA,
        "record_type": "node",
        "sequence": len(records),
        "previous_record_sha256": record_hash(records[-1]),
        "node_id": node_id,
        "kind": kind,
        "parents": parents,
        "relative_path": resolved_file.relative_to(resolved_root).as_posix(),
        "bytes": size,
        "sha256": sha256,
        "file_identity": {"device": before.st_dev, "inode": before.st_ino, "links": before.st_nlink},
        "operation": operation,
    }
    with ledger.open("ab") as handle:
        handle.write(canonical(record))
        handle.flush()
        os.fsync(handle.fileno())
    return record


def adopt_result(source: Path, destination: Path) -> dict[str, Any]:
    source_before = safe_regular_file(source)
    if destination.exists():
        raise FileExistsError(destination)
    destination.parent.mkdir(parents=False, exist_ok=True)
    with source.open("rb") as incoming, destination.open("xb") as outgoing:
        shutil.copyfileobj(incoming, outgoing, length=1024 * 1024)
        outgoing.flush()
        os.fsync(outgoing.fileno())
    source_after = safe_regular_file(source)
    if (source_before.st_dev, source_before.st_ino, source_before.st_size) != (source_after.st_dev, source_after.st_ino, source_after.st_size):
        destination.unlink(missing_ok=True)
        raise ValueError("built-in result identity changed during adoption")
    source_size, source_hash = digest_file(source)
    destination_size, destination_hash = digest_file(destination)
    if (source_size, source_hash) != (destination_size, destination_hash):
        destination.unlink(missing_ok=True)
        raise ValueError("adopted bytes differ from returned result")
    return {"pass": True, "bytes": destination_size, "sha256": destination_hash, "source_identity": {"device": source_before.st_dev, "inode": source_before.st_ino, "links": source_before.st_nlink}}


def verify_ledger(ledger: Path, root: Path) -> dict[str, Any]:
    records = read_records(ledger)
    errors: list[str] = []
    resolved_root = root.resolve(strict=True)
    if not records or records[0].get("schema") != LEDGER_SCHEMA or records[0].get("root") != str(resolved_root):
        errors.append("header mismatch")
        return {"pass": False, "errors": errors}
    seen = set()
    retained_bytes = 0
    for index, record in enumerate(records):
        if record.get("sequence") != index:
            errors.append(f"sequence mismatch at {index}")
        if index and record.get("previous_record_sha256") != record_hash(records[index - 1]):
            errors.append(f"chain mismatch at {index}")
        if index == 0:
            continue
        node_id = record.get("node_id")
        if node_id in seen:
            errors.append(f"duplicate node: {node_id}")
        if any(parent not in seen for parent in record.get("parents", [])):
            errors.append(f"missing parent before node: {node_id}")
        seen.add(node_id)
        candidate = resolved_root / record.get("relative_path", "")
        try:
            safe_regular_file(candidate)
            size, sha256 = digest_file(candidate)
            retained_bytes += size
            if size != record.get("bytes") or sha256 != record.get("sha256"):
                errors.append(f"content drift: {node_id}")
        except (OSError, ValueError) as error:
            errors.append(f"unavailable node {node_id}: {error}")
    if len(seen) > 16:
        errors.append("retained intermediate file ceiling exceeded")
    if retained_bytes > 536870912:
        errors.append("retained intermediate byte ceiling exceeded")
    return {"pass": not errors, "errors": errors, "nodes": len(seen), "retained_bytes": retained_bytes, "ledger_sha256": digest_file(ledger)[1]}


def self_test() -> dict[str, Any]:
    with tempfile.TemporaryDirectory(prefix="frm15-custody-selftest-") as temp:
        root = Path(temp).resolve()
        ledger = root / "ledger.jsonl"
        init_ledger(ledger, root)
        returned = root / "returned.bin"
        returned.write_bytes(b"built-in-result-fixture")
        adopted = root / "FRM15-R01.bin"
        adoption = adopt_result(returned, adopted)
        append_node(ledger, root, "FRM15-R01", "render", adopted, [], {"tool": "image_gen", "mode": "synthetic-self-test"})
        first = verify_ledger(ledger, root)
        adopted.write_bytes(b"mutated")
        mutation_rejected = not verify_ledger(ledger, root)["pass"]
        return {"pass": first["pass"] and mutation_rejected and adoption["pass"], "initial_verification": first, "mutation_rejected": mutation_rejected}


def main() -> int:
    parser = argparse.ArgumentParser()
    sub = parser.add_subparsers(dest="command", required=True)
    sub.add_parser("self-test")
    item = sub.add_parser("init")
    item.add_argument("--ledger", type=Path, required=True)
    item.add_argument("--root", type=Path, required=True)
    item = sub.add_parser("adopt")
    item.add_argument("--source", type=Path, required=True)
    item.add_argument("--destination", type=Path, required=True)
    item = sub.add_parser("add")
    item.add_argument("--ledger", type=Path, required=True)
    item.add_argument("--root", type=Path, required=True)
    item.add_argument("--node-id", required=True)
    item.add_argument("--kind", choices=sorted(NODE_KINDS), required=True)
    item.add_argument("--file", type=Path, required=True)
    item.add_argument("--parents", default="")
    item.add_argument("--operation-json", required=True)
    item = sub.add_parser("verify")
    item.add_argument("--ledger", type=Path, required=True)
    item.add_argument("--root", type=Path, required=True)
    args = parser.parse_args()
    if args.command == "self-test":
        result = self_test()
    elif args.command == "init":
        result = init_ledger(args.ledger.resolve(), args.root.resolve())
        result = {"pass": True, "header": result}
    elif args.command == "adopt":
        result = adopt_result(args.source.resolve(), args.destination.resolve())
    elif args.command == "add":
        operation = json.loads(args.operation_json)
        parents = [value for value in args.parents.split(",") if value]
        result = append_node(args.ledger.resolve(), args.root.resolve(), args.node_id, args.kind, args.file.resolve(), parents, operation)
        result = {"pass": True, "node": result}
    else:
        result = verify_ledger(args.ledger.resolve(), args.root.resolve())
    print(json.dumps(result, indent=2, sort_keys=True))
    return 0 if result.get("pass") else 1


if __name__ == "__main__":
    raise SystemExit(main())
