import argparse
import json
from datetime import date
from pathlib import Path

ROOT = Path(__file__).parent


def load(name):
    return json.loads((ROOT / name).read_text(encoding="utf-8"))


def score_answers(filename):
    items = load("scenario_bank.json")["items"]
    answers = load(filename)
    points = sum(
        answers.get(item["id"], {}).get(dimension) == item[dimension]
        for item in items
        for dimension in ("decision", "reason")
    )
    print(f"final confidence simulation: {points}/24")
    return points == 24


def check_entry(filename):
    evidence = load(filename)
    try:
        verified = date.fromisoformat(evidence["official_sources_reverified_on"])
        attempted = date.fromisoformat(evidence["attempted_on"])
    except (KeyError, TypeError, ValueError):
        print("entry gate: FAIL (source and attempt dates must use YYYY-MM-DD)")
        return False

    checks = {
        "L-06-03 readiness": evidence.get("l0603_readiness_state")
        == "ready_for_next_practice_checkpoint",
        "CUM-01 transfer": evidence.get("cum01_transfer_score") == 16,
        "SIM-01": evidence.get("sim01_score") == 24,
        "SIM-02": evidence.get("sim02_score") == 24,
        "48-hour separation": isinstance(
            evidence.get("sim01_sim02_separation_hours"), (int, float)
        )
        and evidence["sim01_sim02_separation_hours"] >= 48,
        "critical misconceptions closed": evidence.get(
            "open_critical_misconceptions"
        )
        == 0,
        "high-confidence misses retested": evidence.get(
            "high_confidence_misses_retested"
        )
        is True,
        "source verification not future-dated": 0 <= (attempted - verified).days,
        "source verification within seven days": (attempted - verified).days <= 7,
    }
    failed = [name for name, passed in checks.items() if not passed]
    if failed:
        print("entry gate: FAIL (" + ", ".join(failed) + ")")
        return False
    print("entry gate: PASS")
    return True


def self_test():
    manifest = load("manifest.json")
    items = load("scenario_bank.json")["items"]
    expected = set(manifest["objective_ids"])
    routes = load("../CUM-01/remediation_routes.json")
    source_register = (ROOT.parent.parent / "sources" / "current-official-source-register.md").read_text(
        encoding="utf-8"
    )

    assert len(items) == 12
    assert len({item["id"] for item in items}) == len(items)
    assert sum(item["domain"] == "AI901-D1" for item in items) == manifest["domain_mix"]["AI901-D1"] == 5
    assert sum(item["domain"] == "AI901-D2" for item in items) == manifest["domain_mix"]["AI901-D2"] == 7
    assert {objective for item in items for objective in item["objective_ids"]} == expected
    assert expected == set(routes)
    assert all(source_id in source_register for source_id in manifest["source_ids"])
    assert all(
        item.get(field)
        for item in items
        for field in ("id", "domain", "objective_ids", "prompt", "decision", "reason")
    )
    assert all((ROOT.parent.parent / "lessons" / lesson).exists() for lesson in routes.values())
    assert (ROOT.parent / "SIM-01").exists() and (ROOT.parent / "SIM-02").exists()
    assert check_entry("reference_entry_evidence.json")
    assert not check_entry("entry_evidence.json")
    assert score_answers("reference_answers.json")
    assert not score_answers("answers.json")

    route_probe = load("reference_answers.json")
    route_probe["Q07"]["decision"] = "use_foundry_project_client_from_memory"
    assert route_probe["Q07"]["decision"] != items[6]["decision"]

    action_probe = load("reference_answers.json")
    action_probe["Q12"]["reason"] = "mastery_authorizes_publication"
    assert action_probe["Q12"]["reason"] != items[11]["reason"]

    stale = load("reference_entry_evidence.json")
    stale["official_sources_reverified_on"] = "2026-07-05"
    assert (date.fromisoformat(stale["attempted_on"]) - date.fromisoformat(
        stale["official_sources_reverified_on"]
    )).days > 7

    print(
        "self-test: PASS (weights, objectives, routes, entry gate, references, blank, SDK route, action, and stale-source probes)"
    )


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--check")
    parser.add_argument("--evidence")
    parser.add_argument("--self-test", action="store_true")
    args = parser.parse_args()

    if args.self_test:
        self_test()
    elif args.check and args.evidence:
        raise SystemExit(
            0
            if check_entry(args.evidence) and score_answers(args.check)
            else 1
        )
    else:
        parser.error("use --self-test or --evidence FILE --check FILE")
