import argparse,json,runpy,contextlib,io
from pathlib import Path
HERE=Path(__file__).parent;D=("decision","reason")
def load(n):return json.loads((HERE/n).read_text(encoding="utf-8"))
def bankcheck(b):
 req=set(b["boundaries"]);assert len(req)==6
 for f,items in b["forms"].items():assert len(items)==6 and len({x["id"] for x in items})==6 and {x["topic"] for x in items}==req,f
def evaluate(f,a):
 k=load("answer_key.json")["forms"][f];return {f"{i}.{d}":a.get(i,{}).get(d)==e[d] for i,e in k.items() for d in D}
def mockcheck():
 s=io.StringIO()
 with contextlib.redirect_stdout(s):state=runpy.run_path(str(HERE/"mock_client.py"))
 lines=s.getvalue().strip().splitlines()
 return state["PROJECT_ENDPOINT"].startswith("https://") and state["request"]["model"]==state["MODEL_NAME"] and state["response"]["output_text"].startswith("SIMULATED:") and len(lines)==3
def selftest():
 bankcheck(load("scenario_bank.json"));assert mockcheck()
 for f in ("primary","transfer"):
  assert all(evaluate(f,load(f"reference_{f}_answers.json")).values());assert not any(evaluate(f,{}).values())
 w=load("reference_primary_answers.json");w["P03"]["decision"]="project_endpoint";assert not evaluate("primary",w)["P03.decision"]
 w=load("reference_transfer_answers.json");w["T06"]["reason"]="local_success_authorizes_delete";assert not evaluate("transfer",w)["T06.reason"]
 print("SELF-TEST PASS: mock, six-boundary coverage, references, blanks, endpoint/deployment, and destructive-action probes validated")
def main():
 p=argparse.ArgumentParser();p.add_argument("--form",choices=("primary","transfer"));p.add_argument("--check");p.add_argument("--self-test",action="store_true");a=p.parse_args()
 if a.self_test:selftest();return
 if not a.form or not a.check:p.error("use --self-test or --form FORM --check FILE")
 bankcheck(load("scenario_bank.json"));r=evaluate(a.form,json.loads(Path(a.check).read_text()));s=sum(r.values());print(f"{a.form.upper()}: {s}/12; MOCK: {'PASS' if mockcheck() else 'FAIL'}")
 if s!=12 or not mockcheck():raise SystemExit(1)
 print("PASS: strict form and mock gate met")
if __name__=="__main__":main()
