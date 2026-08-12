# First Run Polish Viability Variance

Variance ID: `FRVE-005-v7-VR-27`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-005-v7 / Stranded Lens Cradle - Direct Image API Source,
Native Handle Identity, and Fixed Lesson Integration`

Disposition: **`HOLD / SOLE AUTHORITATIVE FRSH-005-v1-VR-30 OUTER RUN /
CHILD STOPPED AT PT03_HELPER_COMPILE / COMPILE OUTPUT IDENTITY MISMATCH /
HELPER ROOT AND DLL RETAINED / ZERO REQUEST OR API ACTIVITY / NO RETRY /
MISSION CLEANUP-AND-COMPILE-IDENTITY ADJUDICATION REQUIRED /
FRVE-005-v7-VR-27`**

Date: **2026-08-11**

Science source inspected: `46325ef8d7db8f1f32fc2296a5a9e4fd88abdeee`

Mission shell: `FRSH-005-v1-VR-30`

Prior Science return: `FRVE-005-v7-VR-26`

Effective shell: `FRSH-005-v1` through `FRSH-005-v1-VR-30`

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Science decision

Science read the complete active intake, workflow, registry, full Science
profile, complete `FRSH-005-v1-VR-30`, complete `FRVE-005-v7-VR-26`, complete
`FRSH-005-v1-VR-29`, both retained sources, complete `FRWO-005-v7`, and the
cited controls. Source identity and exact-path preflight passed before start:

```text
outerSourceBytes=15559
outerSourceSha256=3a2994b0cbb0a607b92092c9c43cf9bb45f0595fe519fa5a1bcb095f1a044b26
parentSourceBytes=54026
parentSourceSha256=ac0bef04361a9ebb5e473b11c54e314d88f41182b7140b7d631256e79530e60f
strictAscii=true
lfOnly=true
finalLF=true
parserErrors=0
controlledPathsAbsent=13/13
```

Independent read-only inspection confirmed the retained parent constructs the
exact corrected production carrier and predicates:

```text
launcher=2001 / 96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
runtimeCombined=27072 / c05bf41467e6272e890607e8848e6f3354311071942166804a4d2d7444e71158
runtimePrefix=976 / 5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
runtimeTail=26096 / 580a11aacd59301265f4e86abc83dc973cff68b9efac015b626086b42a37836e
helperSource=1693 / 98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97
frozenHelperDllPredicate=4096 / 39e85b32b7f8437c2b5732e26093ca5bd9a9182b048c411e9dc5660ba03f10c9
```

The parent retains exactly one appended helper-source LF, the frozen stage
order, one parent/one child raw capture, credential removal before child start,
and exact PT06 acceptance. A preflight-only SHA helper expression was adjusted
from the unavailable static `.HashData()` API to instance `ComputeHash()`
before start. That read-only adjustment did not invoke the retained outer,
parent, or child and changed no tracked source or controlled path.

## Sole authoritative execution

Science invoked the exact retained outer controller exactly once through
Windows PowerShell 5.1 x64 with `OPENAI_API_KEY` removed from the outer
environment. No correction, alternate runner, cleanup, or retry followed
start.

```text
controllerExecutions=1
controllerExit=89
controllerStdoutRecords=1
controllerStderrCharacters=0
classification=REJECTED_PARENT_RESULT
parentExecutions=1
parentExit=88
parentStdout=EMPTY
parentStderr=EXACT_PARENT_STOP_V2
parentStopStage=SR05_CHILD_CAPTURE
parentStopCode=ASSERTION_FAILED
childInvocations=1
childExitFact=87
childStdoutFact=ZERO
childStderrFact=NONEXACT_BOUNDED
childStderrLength=205
childStderrSha256=9d01c92a2db472f0f6e4328eee30611b6183d402d259a09911fa425bfd73110b
childStderrAscii=true
childStderrCrCount=1
childStderrLfCount=1
childStderrRecordOccurrences=0
postflightAbsent=false
```

The canonical Base64 returned by the retained boundary was independently
decoded in memory only. It contains one bounded, nonsecret production failure
record with allowed terminal CRLF. The record's actual stage is
`PT03_HELPER_COMPILE`; it is not the frozen `PT06_CREDENTIAL_GATE` record.

Exact-path postflight inspection found the controlled helper root and DLL
present. All other controlled paths remain absent:

```text
helperRootAbsent=false
helperDllAbsent=false
helperDllLength=4096
helperDllSha256=5092fcfd97f14c71841213a59c895d528bfb7b387808fadf6db9be7f9e3fe25d
helperDllReparse=false
liveRootAbsent=true
ordinal2StageAbsent=true
ordinal2TargetAbsent=true
ordinal2DecisionAbsent=true
ordinal3StageAbsent=true
ordinal3TargetAbsent=true
ordinal3DecisionAbsent=true
productRootAbsent=true
productRasterAbsent=true
productProvenanceAbsent=true
scienceFixtureRootAbsent=true
```

The observed ordinary `4,096`-byte compile output does not match the carrier's
frozen DLL SHA-256 `39e85b...`; the child therefore stopped at PT03 before
loading or identity-proving the helper and before credential retrieval. This
is consistent with `FRWO-005-v7`'s warning that PowerShell 5.1 CodeDOM output
contains compile-instance metadata and must be frozen from the current
adjudication rather than assumed reproducible. Variance: **`REQUIRED
CORRECTION / COMPILE-INSTANCE DLL DIGEST WAS PRE-FROZEN AS REPRODUCIBLE /
CONTROLLED OUTPUT NOW REQUIRES EXPLICIT IDENTITY-SAFE CLEANUP AND A DYNAMIC
CURRENT-RUN FREEZE RULE / OPEN`**.

Science does not delete the retained DLL or helper root: the failed carrier did
not load or identity-prove that DLL, and the Work Order forbids uncertain
cleanup. No retry is permitted.

## Activity and protected state

API sends remain `0`; request construction remains `0`; ordinal consumption
remains `0` in this run. Historical ordinal `1` remains opaque and consumed;
ordinals `2` and `3` remain unstarted and unconsumed. No credential value,
request, response, media, pixel, product, build, browser, E2E, or residual was
accessed. Maturity and every inherited OPEN record remain unchanged.

The one-path rail, sole unchanged `L02-03`, equal-dignity MH-40 outcomes,
shared RP-012 ending, and `successor=null` remain immutable. Repository QA
quarantine, protected PDF, training tree, Martin's real browser/profile/save,
accepted media, opaque residuals, VR-65, and hidden lore remained untouched.

## Exact Mission handoff

One fresh Mission Captain reads this complete HOLD, complete
`FRSH-005-v1-VR-30`, complete `FRVE-005-v7-VR-26`, both retained sources,
complete `FRWO-005-v7`, and cited controls. Mission performs no outer, parent,
child, credential, API, media, product, browser, E2E, or residual operation.
It issues one exact versioned decision that first adjudicates the controlled
helper root/DLL retained by the sole run and the conflict between the
Work Order's dynamic compile-output freeze rule and the carrier's hard-coded
DLL digest.

Any future cleanup must be explicit, exact-path, identity-safe, nonrecursive,
and proven complete before another Science run. Any future carrier must freeze
the current compile output only after reading it once, load only those same
bytes, and compare subsequent observations to that current-run freeze; it may
not require reproducibility against a prior compile instance. Mission may not
reinterpret or retry this completed run, call the API, consume ordinal `2`,
inspect media or pixels, advance maturity, close an OPEN record, release, or
call `FIRST RUN COMPLETE`.

Science changes only this variance and `NEXT_INSTANCE_HANDOFF.md`, commits
them, and does not push.

Office of Science Administrator signs **`HOLD / SOLE FRSH-005-v1-VR-30 RUN
STOPPED AT PT03 / CURRENT COMPILE OUTPUT 4096 / 5092fc... DOES NOT MATCH
PRE-FROZEN 4096 / 39e85b... / HELPER ROOT AND DLL RETAINED / ZERO API /
NO RETRY / FRVE-005-v7-VR-27`** from exact source
`46325ef8d7db8f1f32fc2296a5a9e4fd88abdeee`.
