import json

records_json = """[
  {"case_id":"retained","relation":"paired_interface","available":true},
  {"case_id":"gap","relation":"exposed_gap","available":true},
  {"case_id":"alternate","relation":"alternate_interface","available":true},
  {"case_id":"sealed","relation":null,"available":false}
]"""
records = json.loads(records_json)
scope_summary = {
    "retained_local_association": sum(record["relation"] == "paired_interface" for record in records) == 1,
    "recurring_familiar_contact": sum(record["relation"] == "paired_interface" for record in records),
    "comparable_non_contact": sum(record["relation"] == "exposed_gap" for record in records),
    "cross_family_contact": sum(record["relation"] == "alternate_interface" for record in records),
    "unavailable_case": sum(record["available"] is False for record in records),
    "universal": None,
    "exclusive": None,
    "unity": None,
    "cause": None,
    "purpose": None,
}
summary_json = json.dumps(scope_summary, sort_keys=True)
restored_summary = json.loads(summary_json)
