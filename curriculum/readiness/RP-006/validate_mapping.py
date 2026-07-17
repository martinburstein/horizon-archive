import argparse, ast, json, runpy, tempfile
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

HERE=Path(__file__).parent
AI_DIMS=("capability","deciding_signal")
def load(n): return json.loads((HERE/n).read_text(encoding="utf-8"))

def validate_contract(c):
    assert c["status"]=="SOLIDIFIED" and date.fromisoformat(c["source_verified_on"])<=date.today()
    assert all(urlparse(u).scheme=="https" and urlparse(u).hostname=="learn.microsoft.com" for u in c["source_urls"])
    assert c["python_contract"]["skill_id"]=="PY-013" and c["ai901_contract"]["objective_id"]=="AI901-D1-O6"
    assert c["python_contract"]["gate"].startswith("8/8 primary") and c["ai901_contract"]["gate"].startswith("8/8 primary")
    assert [len(c["ai901_contract"]["forms"][f]) for f in ("primary","retrieval","transfer")]==[4,2,4]
    assert c["ai901_contract"]["scene_and_sequence_are_never_cases_or_answer_cues"] is True
    assert c["remediation_contract"]["unlimited_retry"] and c["authority_contract"]["offline_only"] and c["authority_contract"]["no_exam_guarantee"]
    assert c["accessibility_contract"]["minimum_target_css_px"]>=44 and c["accessibility_contract"]["time_limit"] is False
    assert c["evidence_contract"]["save_eligibility"].startswith("require finalized strict PY-013")
    assert {"continuation unchanged","city_state_delta=None","external_state_delta=None","no RP-007 route or destination"}<=set(c["world_locks"])
    assert len(c["reopen_conditions"])==3

def inspect_python(path):
    tree=ast.parse(path.read_text(encoding="utf-8"))
    imports=[n for n in tree.body if isinstance(n,(ast.Import,ast.ImportFrom))]
    exact_import=len(imports)==1 and isinstance(imports[0],ast.Import) and [a.name for a in imports[0].names]==["itertools"]
    calls=[n for n in ast.walk(tree) if isinstance(n,ast.Call)]
    chain=[n for n in calls if isinstance(n.func,ast.Attribute) and n.func.attr=="from_iterable" and isinstance(n.func.value,ast.Attribute) and n.func.value.attr=="chain" and isinstance(n.func.value.value,ast.Name) and n.func.value.value.id=="itertools"]
    exact_chain=len(chain)==1 and len(chain[0].args)==1 and isinstance(chain[0].args[0],ast.Name) and chain[0].args[0].id=="record_groups"
    forbidden={"open","print","eval","exec","system","remove","unlink","rmdir","requests","urlopen","sorted","reversed"}
    forbidden_used=any((n.func.id if isinstance(n.func,ast.Name) else getattr(n.func,"attr","")) in forbidden for n in calls)
    return exact_import,exact_chain,not forbidden_used

def evaluate_python(form,path,c):
    exp=c["python_contract"]["forms"][form]; imp,chain,safe=inspect_python(path)
    checks={n:False for n in c["python_contract"]["checks"]}
    try:
        state=runpy.run_path(str(path)); groups=state["record_groups"]; seq=state["sequence"]
        flat=[r for g in groups for r in g]
        checks["sequence_is_list"]=isinstance(seq,list)
        checks["exact_source_order"]=[r["state_id"] for r in seq]==exp["state_ids"]
        checks["exact_record_keys"]=all(list(r)==["state_id","changed","persistent","available","cause"] for r in seq)
        checks["changed_and_persistent_preserved"]=[r["changed"] for r in seq]==exp["changed"] and [r["persistent"] for r in seq]==exp["persistent"]
        checks["unavailable_interval_preserved"]=seq[2]["state_id"] is None and seq[2]["available"] is False
        checks["cause_remains_none_for_every_record"]=all(r["cause"] is None for r in seq)
        checks["imports_itertools_and_calls_chain_once"]=imp and chain
        checks["inputs_unchanged_and_no_forbidden_operations"]=seq==flat and safe
    except Exception: pass
    return checks

def evaluate_ai(form,a,c):
    return {f"{case['id']}.{d}":a.get(case["id"],{}).get(d)==case[d] for case in c["ai901_contract"]["forms"][form] for d in AI_DIMS}

def self_test():
    c=load("contract.json"); validate_contract(c)
    for f in ("primary","transfer"): assert all(evaluate_python(f,HERE/f"reference_{f}.py",c).values())
    for f in ("primary","retrieval","transfer"):
        a=load(f"reference_{f}_answers.json"); assert all(evaluate_ai(f,a,c).values()); assert not any(evaluate_ai(f,{},c).values())
    wrong=load("reference_transfer_answers.json"); wrong["T04"]["capability"]="speech_recognition"; assert not evaluate_ai("transfer",wrong,c)["T04.capability"]
    with tempfile.TemporaryDirectory() as d:
        p=Path(d)/"bypass.py"; p.write_text("record_groups=[]\nsequence=[]\n",encoding="utf-8")
        assert not evaluate_python("primary",p,c)["imports_itertools_and_calls_chain_once"]
    print("SELF-TEST PASS: RP-006 contract, import/sequence forms, speech evidence, locks, and bypass probes validated")

def main():
    p=argparse.ArgumentParser(); p.add_argument("--self-test",action="store_true"); p.add_argument("--python-form",choices=("primary","transfer")); p.add_argument("--python-check"); p.add_argument("--ai-form",choices=("primary","retrieval","transfer")); p.add_argument("--answers"); a=p.parse_args()
    if a.self_test: self_test(); return
    c=load("contract.json"); validate_contract(c)
    if a.python_form and a.python_check: checks=evaluate_python(a.python_form,Path(a.python_check),c)
    elif a.ai_form and a.answers: checks=evaluate_ai(a.ai_form,json.loads(Path(a.answers).read_text(encoding="utf-8")),c)
    else: p.error("complete form required")
    print(f"SCORE: {sum(checks.values())}/{len(checks)}")
    if not all(checks.values()): raise SystemExit(1)

if __name__=="__main__": main()
