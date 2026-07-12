import argparse,json
from pathlib import Path
HERE=Path(__file__).parent;D=("decision","reason")
def load(n):return json.loads((HERE/n).read_text(encoding="utf-8"))
def bankcheck(b):
 req=set(b["modalities"]);assert len(req)==4
 for f,items in b["forms"].items():
  assert len(items)==6 and len({x["id"] for x in items})==6,f
  assert {x["topic"] for x in items if x["topic"]!="integrity"}==req
  assert sum(x["topic"]=="integrity" for x in items)==2
def evaluate(f,a):
 k=load("answer_key.json")["forms"][f];return {f"{i}.{d}":a.get(i,{}).get(d)==e[d] for i,e in k.items() for d in D}
def selftest():
 bankcheck(load("scenario_bank.json"))
 for f in ("primary","transfer"):
  assert all(evaluate(f,load(f"reference_{f}_answers.json")).values());assert not any(evaluate(f,{}).values())
 w=load("reference_primary_answers.json");w["P02"]["decision"]="image_analysis";assert not evaluate("primary",w)["P02.decision"]
 w=load("reference_primary_answers.json");w["P06"]["decision"]="guess_value";assert not evaluate("primary",w)["P06.decision"]
 print("SELF-TEST PASS: modality coverage, integrity coverage, references, blanks, and failure probes validated")
def main():
 p=argparse.ArgumentParser();p.add_argument("--form",choices=("primary","transfer"));p.add_argument("--check");p.add_argument("--self-test",action="store_true");a=p.parse_args()
 if a.self_test:selftest();return
 if not a.form or not a.check:p.error("use --self-test or --form FORM --check FILE")
 bankcheck(load("scenario_bank.json"));r=evaluate(a.form,json.loads(Path(a.check).read_text()));s=sum(r.values());print(f"{a.form.upper()}: {s}/12")
 if s!=12:print("Needs remediation: "+", ".join(k for k,v in r.items() if not v));raise SystemExit(1)
 print("PASS: strict form gate met")
if __name__=="__main__":main()
