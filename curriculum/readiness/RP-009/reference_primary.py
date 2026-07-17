import os

edge_records = [
    {"record_id": "near_lamellar", "status": "correspondence", "candidates": ["far_lamellar"]},
    {"record_id": "far_unmatched", "status": "unmatched", "candidates": []},
    {"record_id": "far_ambiguous", "status": "ambiguous", "candidates": ["near_lamellar", "near_filament"]},
    {"record_id": "outer_margin", "status": "unavailable", "candidates": None},
]
mode = os.environ.get("EDGE_LEDGER_MODE")
if mode != "bounded":
    raise ValueError("EDGE_LEDGER_MODE must be bounded")
edge_ledger = {
    "mode": mode,
    "correspondence": [record["record_id"] for record in edge_records if record["status"] == "correspondence"],
    "unmatched": [record["record_id"] for record in edge_records if record["status"] == "unmatched"],
    "ambiguous": {record["record_id"]: record["candidates"] for record in edge_records if record["status"] == "ambiguous"},
    "unavailable": [record["record_id"] for record in edge_records if record["status"] == "unavailable"],
    "identity": None,
    "topology": None,
    "continuity": None,
    "transformation": None,
    "cause": None,
    "purpose": None,
}
