import json

records_json = """[
  {"case_id":"local","relation":"familiar_contact","available":true},
  {"case_id":"open","relation":"non_contact","available":true},
  {"case_id":"cross","relation":"cross_family_contact","available":true},
  {"case_id":"closed","relation":null,"available":false}
]"""
records = json.loads(records_json)
scope_summary = {
    "retained_local_association": sum(record["relation"] == "familiar_contact" for record in records) == 1,
    "recurring_familiar_contact": sum(record["relation"] == "familiar_contact" for record in records),
    "comparable_non_contact": sum(record["relation"] == "non_contact" for record in records),
    "cross_family_contact": sum(record["relation"] == "cross_family_contact" for record in records),
    "unavailable_case": sum(record["available"] is False for record in records),
    "universal": None,
    "exclusive": None,
    "unity": None,
    "cause": None,
    "purpose": None,
}
summary_json = json.dumps(scope_summary, sort_keys=True)
restored_summary = json.loads(summary_json)
