# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`HOLD / SOLE AUTHORITATIVE OUTER CONTROLLER RUN
REJECTED THE PARENT AT SR05_CHILD_CAPTURE / EXACT BOUNDED STOP / NO RETRY /
FRESH MISSION CAPTURE-FACT ADJUDICATION REQUIRED / FRVE-005-v7-VR-22`**

Current Work Order: `FRWO-005-v7`

Current Mission decision: `FRSH-005-v1-VR-25`

Current Science return: `FRVE-005-v7-VR-22`

Effective shell: `FRSH-005-v1` through `FRSH-005-v1-VR-25`

Authoritative retained outer controller:
`Production Pipeline/First Run/HOST06_SCIENCE_OUTER_CONTROLLER_V1.ps1`

Outer controller identity: exact `10,896` strict-ASCII/LF/final-LF bytes,
SHA-256 `787247b3bdcc8e5b2fec5b7891460fc57a8828e4fb2c46cf1e0e67986afef018`

Authoritative retained parent source:
`Production Pipeline/First Run/HOST06_SCIENCE_PARENT_V2.ps1`

Parent source identity: exact `50,688` strict-ASCII/LF/final-LF bytes,
SHA-256 `2f47b5d01dd67397654176b596ced4602622a7f35ff1a078c57ad058399ef217`

Corrected inert code candidate:
`f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree:
`92b22fc56d79d18cf1abf7213c5268c9e4149830`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Exact next owner: **one fresh Mission Captain / `mission_captain`**

## Science handoff

Science independently validated both retained source identities and strict
form, parsing, frozen carrier identities and canonical roundtrips, split stage
order, controller/parent/child cardinalities, bounded result allowlists, and
exact `13/13` preflight absence. It then invoked the exact retained outer
controller exactly once through Windows PowerShell 5.1 x64 with the frozen
invocation and asynchronous dual-stream capture. No alternate runner,
correction, or retry occurred after start.

The sole bounded result was:

```text
controllerExecutions=1
controllerExit=89
controllerStdoutCharacters=238
controllerStderrCharacters=0
controllerStdoutRecords=1
SCIENCE_OUTER_RESULT_V1|classification=REJECTED_PARENT_RESULT|parentExit=88|parentStdout=EMPTY|parentStderr=EXACT_PARENT_STOP_V2|parentStopStage=SR05_CHILD_CAPTURE|parentStopCode=ASSERTION_FAILED|childInvocations=1|postflightAbsent=true
```

This is exact HOLD. The retained parent rejected the captured sole-child
result at `SR05_CHILD_CAPTURE`. The existing projection does not distinguish
which already-regex-validated child exit/stdout/stderr fact failed. Parent and
child bodies remain private. Independent postflight absence passed `13/13`.
API sends remain `0`; ordinal `1` remains opaque and consumed; ordinals `2`
and `3` remain unstarted and unconsumed.

## Exact next action

One fresh Mission Captain reads the complete required intake and profile,
complete `FRVE-005-v7-VR-22`, complete `FRSH-005-v1-VR-25`, complete
`FRVE-005-v7-VR-21`, both retained sources, `FRWO-005-v7`, and all cited
controls.

Mission performs no controller, parent, child, credential, request, API,
media, product, test, build, browser, E2E, or residual operation. It issues
exactly one new versioned `FIRST RUN SHELL READY`, `REVISE`, or `HOLD`
decision for the exact `SR05_CHILD_CAPTURE` failure. Any future proof must
retain only bounded allowlisted child exit/stdout/stderr facts sufficient to
locate the capture assertion, without exposing a parent/child body, diagnostic
text, credential, response, Base64 member, exception, or stack. The completed
run is not reinterpreted or retried.

Do not route to Quartermaster; call the API; consume ordinal `2`; inspect
media/pixels; change product/tests; run E2E; reveal; advance maturity; close an
OPEN record; access a residual or VR-65; release; or call `FIRST RUN COMPLETE`.

The one-path rail, sole unchanged `L02-03`, equal-dignity MH-40 outcomes,
shared RP-012 ending, and `successor=null` remain immutable. Repository QA
quarantine, protected PDF, training tree, Martin's real browser/profile/save,
hidden lore, accepted-media bytes/pixels, OS-temp parent, ordinal-1 residual,
real managed directory, user work, VR-65, and opaque residuals remain
untouched.
