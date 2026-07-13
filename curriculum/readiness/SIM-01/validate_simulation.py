import argparse, json
from pathlib import Path

ROOT = Path(__file__).parent
def load(name): return json.loads((ROOT / name).read_text(encoding="utf-8"))

def score(answer_file):
    items=load("scenario_bank.json")["items"]; answers=load(answer_file); points=0
    for item in items:
        a=answers.get(item["id"],{})
        points += a.get("decision")==item["decision"]
        points += a.get("reason")==item["reason"]
    print(f"simulation: {points}/24")
    return points==24

def self_test():
    m=load("manifest.json"); items=load("scenario_bank.json")["items"]
    expected=set(m["objective_ids"])
    assert len(items)==12 and sum(x["domain"]=="AI901-D1" for x in items)==5 and sum(x["domain"]=="AI901-D2" for x in items)==7
    assert {o for x in items for o in x["objective_ids"]}==expected
    routes=load("../CUM-01/remediation_routes.json")
    assert set(routes)==expected and all((ROOT.parent.parent/"lessons"/v).exists() for v in routes.values())
    assert score("reference_answers.json") and not score("answers.json")
    action=load("reference_answers.json"); action["Q12"]["reason"]="simulation_authorizes_action"; assert action["Q12"]["reason"]!=items[11]["reason"]
    provenance=load("reference_answers.json"); provenance["Q10"]["decision"]="treat_generated_as_observed"; assert provenance["Q10"]["decision"]!=items[9]["decision"]
    print("self-test: PASS (weights, 15 objectives, routes, reference, blank, action, provenance)")

if __name__=="__main__":
    p=argparse.ArgumentParser(); p.add_argument("--check"); p.add_argument("--self-test",action="store_true"); a=p.parse_args()
    if a.self_test: self_test()
    elif a.check: raise SystemExit(0 if score(a.check) else 1)
    else: p.error("use --self-test or --check FILE")
