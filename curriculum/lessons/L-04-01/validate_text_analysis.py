import argparse
import json
from pathlib import Path

HERE=Path(__file__).parent; DIMENSIONS=("decision","reason")
def load(name): return json.loads((HERE/name).read_text(encoding="utf-8"))
def validate_bank(bank):
    required=set(bank["capabilities"]); assert len(required)==4
    for form,items in bank["forms"].items():
        assert len(items)==6 and len({x["id"] for x in items})==6,form
        assert {x["topic"] for x in items if x["topic"]!="client_flow"}==required
        assert sum(x["topic"]=="client_flow" for x in items)==2
def evaluate(form,answers):
    key=load("answer_key.json")["forms"][form]
    return {f"{item}.{dim}":answers.get(item,{}).get(dim)==expected[dim] for item,expected in key.items() for dim in DIMENSIONS}
def self_test():
    validate_bank(load("scenario_bank.json"))
    for form in ("primary","transfer"):
        assert all(evaluate(form,load(f"reference_{form}_answers.json")).values())
        assert not any(evaluate(form,{}).values())
    wrong=load("reference_primary_answers.json"); wrong["P01"]["decision"]="named_entity_recognition"; assert not evaluate("primary",wrong)["P01.decision"]
    wrong=load("reference_primary_answers.json"); wrong["P06"]["reason"]="assume_all_succeeded"; assert not evaluate("primary",wrong)["P06.reason"]
    print("SELF-TEST PASS: capability coverage, client-flow coverage, references, blanks, and misconception probes validated")
def main():
    p=argparse.ArgumentParser(); p.add_argument("--form",choices=("primary","transfer")); p.add_argument("--check"); p.add_argument("--self-test",action="store_true"); a=p.parse_args()
    if a.self_test:self_test();return
    if not a.form or not a.check:p.error("use --self-test or --form FORM --check FILE")
    validate_bank(load("scenario_bank.json")); results=evaluate(a.form,json.loads(Path(a.check).read_text())); score=sum(results.values()); print(f"{a.form.upper()}: {score}/12")
    if score!=12:
        print("Needs remediation: "+", ".join(k for k,v in results.items() if not v)); raise SystemExit(1)
    print("PASS: strict form gate met")
if __name__=="__main__":main()
