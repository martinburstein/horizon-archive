# First Run Polish Viability Variance

Variance ID: `FRVE-005-v7-VR-21`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-005-v7 / Stranded Lens Cradle - Direct Image API Source,
Native Handle Identity, and Fixed Lesson Integration`

Disposition: **`HOLD / SOLE RETAINED OUTER CONTROLLER RUN REJECTED THE
CAPTURED PARENT RESULT / PARENT EXIT 88 / EXACT BOUNDED PARENT STOP / ONE
CHILD / ALL CONTROLLED PATHS ABSENT / NO RETRY / MISSION BOUNDED STOP-DETAIL
CORRECTION REQUIRED / FRVE-005-v7-VR-21`**

Date: **2026-08-11**

Science source inspected:
`c343de78e39ffbefdde160fac2c9fa0d5a1fd703`

Mission shell: `FRSH-005-v1-VR-24`

Prior Science return: `FRVE-005-v7-VR-20`

Effective shell: `FRSH-005-v1` through `FRSH-005-v1-VR-24`

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Science decision

Science read the complete active intake, workflow, registry, full Science
profile, complete `FRSH-005-v1-VR-24`, complete `FRVE-005-v7-VR-20`, complete
`FRSH-005-v1-VR-23`, complete `FRVE-005-v7-VR-19`, both complete retained
sources, the complete VR-17 bootstrap authority, complete `FRWO-005-v7`, and
the cited effective controls.

The retained outer controller and parent independently passed exact tracked
source identity and strict-source-form gates:

```text
outerSourceBytes=10485
outerSourceSha256=c145eb70b459011e55bb8328c631c04733d615846b2d39ef602e1a5687b670b6
outerStrictAscii=true
outerLfOnly=true
outerFinalLF=true
outerParserErrors=0
parentSourceBytes=50688
parentSourceSha256=2f47b5d01dd67397654176b596ced4602622a7f35ff1a078c57ad058399ef217
parentStrictAscii=true
parentLfOnly=true
parentFinalLF=true
```

Both embedded carriers passed exact single-occurrence, encoded identity,
decode, canonical roundtrip, split, strict UTF-8, and stage-order gates:

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
combinedPrehelperStageOffsets=18,192,283,497
combinedProductionStageOffsets=997,1691,3828,4723,5916,6148
```

The outer controller contains exactly one parent start, one parent-source
stdin write, one parent credential removal, and one accepted-classification
branch. The retained parent contains exactly one child start, one child
credential removal, and one accepted V2 result schema. Exact preflight
absence passed `13/13`.

Two disposable in-memory static count expressions stopped before the
authoritative controller invocation because their local regex quoting did not
match the tracked source. They performed no parent-source parse, controller,
parent, child, credential, API, filesystem creation, or controlled-path
operation. Science corrected only those disposable read-only expressions and
completed the same identity and cardinality gates before the one authorized
run. They are not production evidence and do not alter the one-run boundary.

Science then invoked the exact tracked outer controller exactly once through
exact Windows PowerShell 5.1 x64 using `-NoLogo -NoProfile -NonInteractive
-File` and its exact quoted tracked path. The Science capture dual-drained
controller stdout and stderr asynchronously, counted each stream, waited for
both EOFs and process completion, and captured the native controller exit.
There was no alternate runner, second controller, second parent, correction,
or retry.

The sole bounded result was:

```text
controllerExecutions=1
controllerExit=89
controllerStdoutCharacters=171
controllerStderrCharacters=0
controllerStdoutRecords=1
SCIENCE_OUTER_RESULT_V1|classification=REJECTED_PARENT_RESULT|parentExit=88|parentStdout=EMPTY|parentStderr=EXACT_PARENT_STOP_V2|childInvocations=1|postflightAbsent=true
```

The result is not PASS. The retained outer controller did preserve and emit
one bounded classification before its final rejection exit, but the parent
itself exited `88`, emitted no stdout, and emitted one exact allowlisted V2
parent-stop record on stderr. The outer result proves one parent and one child
and exact postflight absence, but intentionally collapses the validated parent
stop body and therefore does not expose which allowlisted parent stage,
child-exit class, child-stdout class, or child-stderr class failed. Science
does not reinterpret the rejected parent or retry the run.

Variance classification: **`REQUIRED CORRECTION / RETAINED OUTER CONTROLLER
NOW PRESERVES THE ONE-RUN CLASSIFICATION, BUT ITS REJECTED SCALAR COLLAPSES
THE EXACT ALLOWLISTED PARENT STOP DETAIL NEEDED TO LOCATE THE PARENT FAILURE /
OPEN`**.

## Activity, absence, and protected state

Exact postflight direct-path inspection independently confirmed all `13/13`
controlled paths absent. The rejected run never passed the credential-cleared
no-request subgate. No API or media action is authorized by this result:

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
API; construct a request; access a credential value; inspect media or pixels;
change product or tests; run a build, browser, or E2E operation; or touch a
residual. The controller and parent removed `OPENAI_API_KEY` from their child
process environments without reading its value.

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
`FRSH-005-v1-VR-24`, complete `FRVE-005-v7-VR-20`, both complete retained
sources, and the cited effective controls. Mission performs no controller,
parent, child, credential, API, media, product, test, build, browser, or E2E
execution. It issues exactly one new versioned `FIRST RUN SHELL READY`,
`REVISE`, or `HOLD` decision that preserves both retained source and carrier
identities while making any future rejected parent result expose only the
already regex-validated, bounded, allowlisted parent-stop fields needed to
locate the failure. It must not expose a parent/child body, diagnostic text,
credential, response, Base64 member, exception, or stack, and it must not
reinterpret or retry this completed run.

Mission may not route to Quartermaster; call the API; consume ordinal `2`;
inspect media/pixels; change product/tests; run E2E; reveal; advance maturity;
close an OPEN record; access a residual or VR-65; release; or call
`FIRST RUN COMPLETE`.

Science changes only this variance and `NEXT_INSTANCE_HANDOFF.md`, commits
them, and does not push. Rollback removes only this variance and restores the
immediately preceding handoff by explicit content.

Office of Science Administrator signs **`HOLD / SOLE OUTER CONTROLLER RUN
REJECTED PARENT EXIT 88 / EXACT BOUNDED PARENT STOP / ONE CHILD / ALL PATHS
ABSENT / NO RETRY / FRVE-005-v7-VR-21`** from exact source
`c343de78e39ffbefdde160fac2c9fa0d5a1fd703`.
