# First Run Polish Viability Variance

Variance ID: `FRVE-005-v7-VR-24`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-005-v7 / Stranded Lens Cradle - Direct Image API Source,
Native Handle Identity, and Fixed Lesson Integration`

Disposition: **`HOLD / SOLE AUTHORITATIVE FRSH-005-v1-VR-27 OUTER RUN
RETAINED EXACT SR05 CHILD FACTS / CHILD EXIT 87 PASS / CHILD STDOUT ZERO PASS /
CHILD STDERR NONEXACT_BOUNDED FAIL / ONE PARENT / ONE CHILD / ALL CONTROLLED
PATHS ABSENT / NO RETRY / MISSION STDERR-NORMALIZER ADJUDICATION REQUIRED /
FRVE-005-v7-VR-24`**

Date: **2026-08-11**

Science source inspected: `8120e67928e5ebe941bec58782b0715d12ed03db`

Mission shell: `FRSH-005-v1-VR-27`

Prior Science return: `FRVE-005-v7-VR-23`

Effective shell: `FRSH-005-v1` through `FRSH-005-v1-VR-27`

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Science decision

Science read the complete active intake, workflow, registry, full Science
profile, complete `FRSH-005-v1-VR-27`, complete `FRVE-005-v7-VR-23`, complete
`FRSH-005-v1-VR-26`, complete `FRVE-005-v7-VR-22`, both retained sources,
complete `FRWO-005-v7`, and the cited effective controls.

The retained outer controller and parent passed their exact tracked source
identity, strict ASCII/LF/final-LF form, and parser gates:

```text
outerSourceBytes=11251
outerSourceSha256=b02015e7a25d94a450c4f968d0cb481023f1b51ccbd4a9cc2ed35af39706df37
outerStrictAscii=true
outerLfOnly=true
outerFinalLF=true
outerParserErrors=0
parentSourceBytes=51179
parentSourceSha256=15f56566daf08e3cd2cd636c9dcceec92168a6c97d6638a067fcd2c63ab0e232
parentStrictAscii=true
parentLfOnly=true
parentFinalLF=true
parentParserErrors=0
```

Static and decoded-source review confirmed the frozen launcher, combined
carrier, prefix, and production-tail identities and stage order retained by
the parent. The parent contains one normalizer, one child start, one bounded
stderr capture, one exact diagnostic literal, and the anchored single-record
plus ASCII-whitespace-only remainder rule. The outer contains one parent
start, one parent-source stdin write, one credential removal, bounded
dual-stream capture, one result projection, and exact postflight absence.
Preflight absence passed `13/13`.

Two disposable read-only gate expressions stopped before completion because
of local PowerShell syntax/name resolution and AST lookup mistakes. Neither
expression started the outer, parent, or child; accessed a credential; created
a path; or changed either retained source. Science performed no correction to
tracked content and invoked no alternate runner.

Science then invoked the exact retained outer controller exactly once through
Windows PowerShell 5.1 x64 with `-NoLogo -NoProfile -NonInteractive -File` and
the exact quoted tracked path. Science asynchronously dual-drained controller
stdout and stderr, waited for EOF and native completion, and retained only the
bounded scalar. No correction, retry, or second outer/parent/child execution
occurred.

The sole authoritative result was:

```text
controllerExecutions=1
controllerExit=89
controllerStdoutCharacters=309
controllerStderrCharacters=0
controllerStdoutRecords=1
controllerStderrRecords=0
SCIENCE_OUTER_RESULT_V1|classification=REJECTED_PARENT_RESULT|parentExit=88|parentStdout=EMPTY|parentStderr=EXACT_PARENT_STOP_V2|parentStopStage=SR05_CHILD_CAPTURE|parentStopCode=ASSERTION_FAILED|childExitFact=87|childStdoutFact=ZERO|childStderrFact=NONEXACT_BOUNDED|childInvocations=1|postflightAbsent=true
```

The result is exact HOLD. Direct comparison against the three SR05 predicates
localizes the sole failed fact without exposing either stream body:

```text
CHILD_EXIT:   actual 87 / expected 87 / PASS
CHILD_STDOUT: actual ZERO / expected ZERO / PASS
CHILD_STDERR: actual NONEXACT_BOUNDED / expected EXACT_PT06 / FAIL
```

The completed run is not reinterpreted or retried. Science does not inspect,
emit, infer, or preserve the bounded child stderr body. Variance:
**`REQUIRED CORRECTION / THE VR-27 SINGLE-RECORD ASCII-WHITESPACE NORMALIZER
DID NOT ACCEPT THE SOLE RUNTIME CHILD STDERR CAPTURE / OPEN`**.

## Activity, absence, and protected state

Independent exact-path postflight inspection confirmed all `13/13` controlled
paths absent. Because the outer removed `OPENAI_API_KEY` from the parent, the
parent removed it from the child, and the frozen child orders request
construction and sending after `PT06_CREDENTIAL_GATE`, the stopped child made
no request and consumed no ordinal:

```text
controllerExecutions=1
parentExecutions=1
childInvocations=1
acceptedParentResults=0
apiSends=0
ordinalsConsumed=0
helperRootAbsent=true
helperDllAbsent=true
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
scienceFixtureRootsAbsent=true
```

Historical ordinal `1` remains consumed, opaque, inaccessible, and unchanged.
Ordinals `2` and `3` remain unstarted and unconsumed. Science did not call the
API, construct a request, inspect media or pixels, alter product or tests, run
a build/browser/E2E operation, or access a residual.

The one-path rail, sole unchanged `L02-03`, equal-dignity MH-40 outcomes,
shared RP-012 ending, and `successor=null` remain immutable. No branch, packet,
lesson, Host 07, reward, access, identity, authority, world response,
hidden-lore answer, RP-013, or post-ending content exists. Maturity and every
inherited OPEN record remain unchanged.

Repository QA quarantine, the protected PDF, training tree, Martin's real
browser/profile/save, hidden lore, accepted-media bytes/pixels, OS-temp parent,
ordinal-1 residual, real managed directory, user work, VR-65, and opaque
residuals remained untouched.

## Exact Mission handoff

One fresh Mission Captain reads this complete HOLD, complete
`FRSH-005-v1-VR-27`, complete `FRVE-005-v7-VR-23`, both retained sources, and
the cited effective controls. Mission performs no controller, parent, child,
credential, API, media, product, test, build, browser, E2E, or residual
operation. It issues exactly one new versioned `FIRST RUN SHELL READY`,
`REVISE`, or `HOLD` decision for the exact retained
`childStderrFact=NONEXACT_BOUNDED` mismatch.

Any correction must preserve the passing exit/stdout facts, one parent/one
child cardinality, no-body projection, frozen production carriers, no-request
proof, exact path absence, and one-run/no-retry discipline. Mission may not
reinterpret or retry the completed run; route to Quartermaster; call the API;
consume ordinal `2`; inspect media/pixels; change product/tests; run E2E;
reveal; advance maturity; close an OPEN record; access a residual or VR-65;
release; or call `FIRST RUN COMPLETE`.

Science changes only this variance and `NEXT_INSTANCE_HANDOFF.md`, commits
them, and does not push. Rollback removes only this variance and restores the
immediately preceding handoff by explicit content.

Office of Science Administrator signs **`HOLD / SOLE FRSH-005-v1-VR-27
OUTER RUN RETAINED CHILD EXIT 87 AND STDOUT ZERO / CHILD STDERR
NONEXACT_BOUNDED / ONE PARENT / ONE CHILD / ALL PATHS ABSENT / NO RETRY /
FRVE-005-v7-VR-24`** from exact source
`8120e67928e5ebe941bec58782b0715d12ed03db`.
