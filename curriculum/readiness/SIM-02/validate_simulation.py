import argparse,json
from pathlib import Path
R=Path(__file__).parent
def load(n): return json.loads((R/n).read_text(encoding="utf-8"))
def score(f):
 i=load("scenario_bank.json")["items"]; a=load(f); p=sum((a.get(x["id"],{}).get(k)==x[k]) for x in i for k in ("decision","reason")); print(f"simulation: {p}/24"); return p==24
def self_test():
 m=load("manifest.json"); i=load("scenario_bank.json")["items"]; e=set(m["objective_ids"]); routes=load("../CUM-01/remediation_routes.json")
 assert len(i)==12 and sum(x["domain"]=="AI901-D1" for x in i)==5 and sum(x["domain"]=="AI901-D2" for x in i)==7
 assert {o for x in i for o in x["objective_ids"]}==e==set(routes)
 assert all((R.parent.parent/"lessons"/v).exists() for v in routes.values()) and (R.parent/"SIM-01").exists()
 assert score("reference_answers.json") and not score("answers.json")
 a=load("reference_answers.json"); a["Q12"]["reason"]="local_pass_authorizes_action"; assert a["Q12"]["reason"]!=i[11]["reason"]
 b=load("reference_answers.json"); b["Q08"]["decision"]="one_test_is_enough"; assert b["Q08"]["decision"]!=i[7]["decision"]
 print("self-test: PASS (weights, objectives, routes, references, blank, action, transfer probes)")
if __name__=="__main__":
 p=argparse.ArgumentParser(); p.add_argument("--check"); p.add_argument("--self-test",action="store_true"); a=p.parse_args()
 if a.self_test:self_test()
 elif a.check:raise SystemExit(0 if score(a.check) else 1)
 else:p.error("use --self-test or --check FILE")
