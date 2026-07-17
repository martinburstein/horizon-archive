import json
from pathlib import Path

ROOT = Path(__file__).parent
COURSE = ROOT.parents[1]


def load(path):
    return json.loads(path.read_text(encoding="utf-8"))


def self_test():
    contract = load(ROOT / "contract.json")
    assert contract["status"] == "SOLIDIFIED"
    assert contract["official_blueprint"]["total_objectives"] == 15
    assert contract["official_blueprint"]["domains"]["AI901-D1"]["objective_count"] == 8
    assert contract["official_blueprint"]["domains"]["AI901-D2"]["objective_count"] == 7
    objective_ids = contract["ai901_mapping"]["objective_ids"]
    assert len(objective_ids) == len(set(objective_ids)) == 15
    coverage = load(COURSE / "validation" / "ai901-domain-coverage.json")
    assert all(domain["coverage_status"] == "complete" for domain in coverage["domains"])
    assert sum(domain["objectives_total"] for domain in coverage["domains"]) == 15
    cumulative = load(COURSE / "readiness" / "CUM-01" / "manifest.json")
    assert set(cumulative["objective_ids"]) == set(objective_ids)
    assert contract["python_mapping"]["kind"] == "cumulative_fresh_transfer_not_new_primary"
    assert contract["boundaries"]["scene_and_presentation_zero_credit"]
    assert contract["boundaries"]["ready_and_not_yet_ready_recoverable"]
    assert contract["boundaries"]["no_exam_guarantee"] and contract["boundaries"]["no_successor"]
    assert "answers" in contract["privacy_forbidden"] and "credentials" in contract["privacy_forbidden"]
    print("SELF-TEST PASS: RP-012 cumulative Python, all-15-objective coverage, recovery, privacy, and no-authority gates validated")


if __name__ == "__main__":
    self_test()
