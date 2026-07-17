import os

edge_records = [
    {"record_id": "inlet_ribbed", "status": "correspondence", "candidates": ["outer_ribbed"]},
    {"record_id": "outer_solitary", "status": "unmatched", "candidates": []},
    {"record_id": "outer_mixed", "status": "ambiguous", "candidates": ["inlet_ribbed", "inlet_beaded"]},
    {"record_id": "sealed_edge", "status": "unavailable", "candidates": None},
]
mode = os.environ.get("REPLICA_LEDGER_MODE")
if mode != "bounded":
    raise ValueError("REPLICA_LEDGER_MODE must be bounded")
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
