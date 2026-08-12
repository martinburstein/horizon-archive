# First Run Polish Viability Variance

Variance ID: `FRVE-005-v7-VR-22`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-005-v7 / Stranded Lens Cradle - Direct Image API Source,
Native Handle Identity, and Fixed Lesson Integration`

Disposition: **`HOLD / SOLE AUTHORITATIVE OUTER CONTROLLER RUN REJECTED THE
PARENT AT SR05_CHILD_CAPTURE / PARENT EXIT 88 / EXACT BOUNDED PARENT STOP /
ONE CHILD / ALL CONTROLLED PATHS ABSENT / NO RETRY / MISSION CAPTURE-FACT
ADJUDICATION REQUIRED / FRVE-005-v7-VR-22`**

Date: **2026-08-11**

Science source inspected:
`b6d1564d361e6ffac85b181709dc76429bc403f1`

Mission shell: `FRSH-005-v1-VR-25`

Prior Science return: `FRVE-005-v7-VR-21`

Effective shell: `FRSH-005-v1` through `FRSH-005-v1-VR-25`

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Science decision

Science read the complete active intake, workflow, registry, full Science
profile, complete `FRSH-005-v1-VR-25`, complete `FRVE-005-v7-VR-21`,
complete `FRSH-005-v1-VR-24`, complete `FRVE-005-v7-VR-20`, both retained
sources, complete `FRWO-005-v7`, and the cited effective controls.

The retained outer controller and parent passed their exact tracked byte
identities and strict ASCII/LF/final-LF form. Both parsed without errors. Both
embedded carriers passed exact single-occurrence, encoded identity, canonical
Base64 roundtrip, decoded identity, strict UTF-8, split, and stage-order gates:

```text
outerSourceBytes=10896
outerSourceSha256=787247b3bdcc8e5b2fec5b7891460fc57a8828e4fb2c46cf1e0e67986afef018
outerStrictAscii=true
outerLfOnly=true
outerFinalLF=true
parentSourceBytes=50688
parentSourceSha256=2f47b5d01dd67397654176b596ced4602622a7f35ff1a078c57ad058399ef217
parentStrictAscii=true
parentLfOnly=true
parentFinalLF=true
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
preflightAbsent=13/13
```

Static inspection also confirmed one outer parent start, one parent-source
stdin write, one parent credential removal, one retained-parent child start,
one child credential removal, the bounded result allowlists, and the revised
regex-validated `parentStopStage` / fixed `parentStopCode` projection. Two
disposable read-only Science expressions initially stopped because of local
PowerShell quoting in the launcher-carrier occurrence and stop-projection
checks. They started no controller, parent, or child; accessed no credential;
and performed no filesystem creation. Science corrected only those disposable
expressions, independently confirmed the tracked source facts, and did not
change either retained source.

Science then invoked the exact tracked outer controller exactly once through
Windows PowerShell 5.1 x64 with `-NoLogo -NoProfile -NonInteractive -File` and
the exact quoted tracked path. The Science capture started no alternate runner,
dual-drained controller stdout and stderr asynchronously, waited for both EOFs
and native completion, and retained only the bounded controller result. There
was no correction, retry, or second controller/parent/child execution.

The sole authoritative bounded result was:

```text
controllerExecutions=1
controllerExit=89
controllerStdoutCharacters=238
controllerStderrCharacters=0
controllerStdoutRecords=1
controllerStderrRecords=0
SCIENCE_OUTER_RESULT_V1|classification=REJECTED_PARENT_RESULT|parentExit=88|parentStdout=EMPTY|parentStderr=EXACT_PARENT_STOP_V2|parentStopStage=SR05_CHILD_CAPTURE|parentStopCode=ASSERTION_FAILED|childInvocations=1|postflightAbsent=true
```

The result is not PASS. The outer controller proved one parent and one child,
but the retained parent rejected its captured child result at exact allowlisted
stage `SR05_CHILD_CAPTURE`. The fixed bounded code is `ASSERTION_FAILED`. The
parent body, child body, diagnostic, credential, response, Base64 member,
exception, stack, native value, and path-derived value remain unexposed.
Science does not reinterpret or retry the completed run.

Variance classification: **`REQUIRED CORRECTION / RETAINED PARENT V2 REJECTS
THE SOLE CHILD CAPTURE AT SR05_CHILD_CAPTURE; THE CURRENT OUTER RESULT DOES NOT
PROJECT WHICH ALREADY-REGEX-VALIDATED CHILD EXIT/STDOUT/STDERR FACT CAUSED THAT
CAPTURE ASSERTION / OPEN`**.

## Activity, absence, and protected state

Independent direct-path postflight inspection confirmed all `13/13`
controlled paths absent. Because the outer removed `OPENAI_API_KEY` from the
parent and the parent removed it from its sole child, the child could not pass
`PT06_CREDENTIAL_GATE`; the retained source orders request construction, live
root allocation, and sending after that gate. No API or ordinal operation
occurred:

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
API, construct a request, inspect media or pixels, change product or tests,
run a build/browser/E2E operation, or access a residual.

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
`FRSH-005-v1-VR-25`, complete `FRVE-005-v7-VR-21`, both retained sources, and
the cited controls. Mission performs no controller, parent, child, credential,
API, media, product, test, build, browser, E2E, or residual operation. It
issues exactly one new versioned `FIRST RUN SHELL READY`, `REVISE`, or `HOLD`
decision for the exact `SR05_CHILD_CAPTURE` failure. Any future proof must
retain only bounded allowlisted facts sufficient to distinguish the captured
child exit/stdout/stderr assertion without exposing a child or parent body,
diagnostic text, credential, response, Base64 member, exception, or stack. It
must preserve both tracked sources and all carrier/production semantics unless
its explicit correction is retained and synchronized before a fresh run.

Mission may not reinterpret or retry this completed run; route to Quartermaster;
call the API; consume ordinal `2`; inspect media/pixels; change product/tests;
run E2E; reveal; advance maturity; close an OPEN record; access a residual or
VR-65; release; or call `FIRST RUN COMPLETE`.

Science changes only this variance and `NEXT_INSTANCE_HANDOFF.md`, commits
them, and does not push. Rollback removes only this variance and restores the
immediately preceding handoff by explicit content.

Office of Science Administrator signs **`HOLD / SOLE OUTER CONTROLLER RUN
REJECTED PARENT EXIT 88 AT SR05_CHILD_CAPTURE / EXACT BOUNDED PARENT STOP /
ONE CHILD / ALL PATHS ABSENT / NO RETRY / FRVE-005-v7-VR-22`** from exact
source `b6d1564d361e6ffac85b181709dc76429bc403f1`.
