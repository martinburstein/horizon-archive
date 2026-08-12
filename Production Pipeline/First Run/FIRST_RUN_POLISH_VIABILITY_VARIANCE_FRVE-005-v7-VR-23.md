# First Run Polish Viability Variance

Variance ID: `FRVE-005-v7-VR-23`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-005-v7 / Stranded Lens Cradle - Direct Image API Source,
Native Handle Identity, and Fixed Lesson Integration`

Disposition: **`HOLD / SOLE AUTHORITATIVE OUTER CONTROLLER RUN RETAINED
EXACT SR05 CHILD FACTS / CHILD EXIT 87 PASS / CHILD STDOUT ZERO PASS / CHILD
STDERR NONEXACT_BOUNDED FAIL / ONE PARENT / ONE CHILD / ALL CONTROLLED PATHS
ABSENT / NO RETRY / MISSION STDERR-FACT ADJUDICATION REQUIRED /
FRVE-005-v7-VR-23`**

Date: **2026-08-11**

Science source inspected:
`c2973a453c90c1804bb6573215b1f86fe129793f`

Mission shell: `FRSH-005-v1-VR-26`

Prior Science return: `FRVE-005-v7-VR-22`

Effective shell: `FRSH-005-v1` through `FRSH-005-v1-VR-26`

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Science decision

Science read the complete active intake, workflow, registry, full Science
profile, complete `FRSH-005-v1-VR-26`, complete `FRVE-005-v7-VR-22`,
complete `FRSH-005-v1-VR-25`, complete `FRVE-005-v7-VR-21`, both retained
sources, complete `FRWO-005-v7`, and the cited effective controls.

The retained outer controller and parent passed exact tracked source identity,
strict ASCII/LF/final-LF form, and parser gates:

```text
outerSourceBytes=11251
outerSourceSha256=a1f40770f9dc16f042f89feda547655dd7b0e22dd5e0d68fd3b88cdf1dc01d83
outerStrictAscii=true
outerLfOnly=true
outerFinalLF=true
outerParserErrors=0
parentSourceBytes=50688
parentSourceSha256=2f47b5d01dd67397654176b596ced4602622a7f35ff1a078c57ad058399ef217
parentStrictAscii=true
parentLfOnly=true
parentFinalLF=true
parentParserErrors=0
```

Both embedded carriers passed exact single occurrence, encoded identity,
canonical Base64 roundtrip, decoded identity, strict UTF-8, split, and stage
order gates:

```text
launcherCarrierAsciiLength=2668
launcherCarrierAsciiSha256=02c0219793c0aeb6e8e989aac9f9ee52373598cdbc2a33da4f2c54b069796af9
launcherDecodedByteLength=2001
launcherDecodedSha256=96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
launcherRoundtripEqual=true
combinedCarrierAsciiLength=36060
combinedCarrierAsciiSha256=c8926687184ecff422bb29fe26a7a9e3bd3d6273c75fceb56746734de89b19f5
combinedDecodedByteLength=27044
combinedDecodedSha256=015dfd96befad29793892f1e15dc9ff4362ff8cec0ae4ce7b9c45b5da9e125f3
combinedRoundtripEqual=true
prefixByteLength=976
prefixSha256=5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
tailByteLength=26068
tailSha256=e9815ce8f988bca0f1f9bd14a7ba50cfa4935b3d7a47492c95bfa90986b7070c
launcherStageOffsets=50,587,859,921
combinedStageOffsets=18,192,283,497,997,1691,3828,4723,5916,6148
```

Static inspection confirmed exactly one outer parent start, one parent-source
stdin write, one outer credential removal, one retained-parent child start,
one child credential removal, and exactly one projection assignment for each
of regex groups `3`, `4`, and `5`. Exact preflight absence passed `13/13`.

Two disposable read-only Science expressions stopped or produced unusable
carrier extraction evidence because of local PowerShell quoting. They started
no controller, parent, or child; accessed no credential; created no file or
directory; and changed no retained source. Science corrected only those
disposable expressions and completed every required read-only gate before the
one authorized run.

Science then invoked the exact retained outer controller exactly once through
Windows PowerShell 5.1 x64 with `-NoLogo -NoProfile -NonInteractive -File`
and the exact quoted tracked path. Science asynchronously dual-drained
controller stdout and stderr, waited for both EOFs and native completion, and
retained only the bounded result. No alternate runner, correction, retry, or
second controller/parent/child execution occurred.

The sole authoritative bounded result was:

```text
controllerExecutions=1
controllerExit=89
controllerStdoutCharacters=309
controllerStderrCharacters=0
controllerStdoutRecords=1
controllerStderrRecords=0
SCIENCE_OUTER_RESULT_V1|classification=REJECTED_PARENT_RESULT|parentExit=88|parentStdout=EMPTY|parentStderr=EXACT_PARENT_STOP_V2|parentStopStage=SR05_CHILD_CAPTURE|parentStopCode=ASSERTION_FAILED|childExitFact=87|childStdoutFact=ZERO|childStderrFact=NONEXACT_BOUNDED|childInvocations=1|postflightAbsent=true
```

The result is exact HOLD, not PASS. Direct comparison against the three and
only three SR05 predicates localizes the failure without disclosing either
stream body:

```text
CHILD_EXIT:   actual 87 / expected 87 / PASS
CHILD_STDOUT: actual ZERO / expected ZERO / PASS
CHILD_STDERR: actual NONEXACT_BOUNDED / expected EXACT_PT06 / FAIL
```

Variance classification: **`REQUIRED CORRECTION / THE SOLE CHILD EXIT AND
STDOUT FACTS MATCH; THE SOLE CHILD STDERR FACT DOES NOT MATCH THE EXACT PT06
DIAGNOSTIC CLASS / OPEN`**. Science does not inspect, emit, infer, or retry
the bounded child stderr body.

## Activity, absence, and protected state

Independent exact-path postflight inspection confirmed all `13/13`
controlled paths absent. Because the outer removed `OPENAI_API_KEY` from the
parent, the parent removed it from the child, and the frozen child orders live
root allocation, request construction, and sending after `PT06_CREDENTIAL_GATE`,
the stopped child made no request and consumed no ordinal:

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
a build/browser/E2E operation, or access any residual.

The one-path rail, sole unchanged `L02-03`, equal-dignity MH-40 outcomes,
shared RP-012 ending, and `successor=null` remain immutable. No branch,
packet, lesson, Host 07, reward, access, identity, authority, world response,
hidden-lore answer, RP-013, or post-ending content exists. Maturity and every
inherited OPEN record remain unchanged.

Repository QA quarantine, the protected PDF, training tree, Martin's real
browser/profile/save, hidden lore, accepted-media bytes/pixels, OS-temp parent,
ordinal-1 residual, real managed directory, user work, VR-65, and opaque
residuals remained untouched.

## Exact Mission handoff

One fresh Mission Captain reads this complete HOLD, complete
`FRSH-005-v1-VR-26`, complete `FRVE-005-v7-VR-22`, both retained sources,
and the cited effective controls. Mission performs no controller, parent,
child, credential, API, media, product, test, build, browser, E2E, or residual
operation. It issues exactly one new versioned `FIRST RUN SHELL READY`,
`REVISE`, or `HOLD` decision for the exact `CHILD_STDERR` mismatch. Any
correction must preserve the already-passing exit/stdout facts, bounded
projection, no-body boundary, carrier/production semantics, and one-run/no-
retry discipline.

Mission may not reinterpret or retry this completed run; route to
Quartermaster; call the API; consume ordinal `2`; inspect media/pixels; change
product/tests; run E2E; reveal; advance maturity; close an OPEN record; access
a residual or VR-65; release; or call `FIRST RUN COMPLETE`.

Science changes only this variance and `NEXT_INSTANCE_HANDOFF.md`, commits
them, and does not push. Rollback removes only this variance and restores the
immediately preceding handoff by explicit content.

Office of Science Administrator signs **`HOLD / SOLE AUTHORITATIVE OUTER
CONTROLLER RUN LOCALIZED SR05 TO CHILD STDERR NONEXACT_BOUNDED / CHILD EXIT 87
AND STDOUT ZERO PASS / ONE PARENT / ONE CHILD / ALL PATHS ABSENT / NO RETRY /
FRVE-005-v7-VR-23`** from exact source
`c2973a453c90c1804bb6573215b1f86fe129793f`.
