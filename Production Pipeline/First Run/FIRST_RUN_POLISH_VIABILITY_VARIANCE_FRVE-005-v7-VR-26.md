# First Run Polish Viability Variance

Variance ID: `FRVE-005-v7-VR-26`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-005-v7 / Stranded Lens Cradle - Direct Image API Source,
Native Handle Identity, and Fixed Lesson Integration`

Disposition: **`HOLD / SOLE AUTHORITATIVE FRSH-005-v1-VR-29 OUTER RUN /
ENTIRE BOUNDED RAW CHILD STDERR RETURNED AS VALIDATED CANONICAL BASE64 /
ACTUAL PT02_HELPER_SOURCE DOES NOT MATCH FROZEN PT06_CREDENTIAL_GATE /
ONE PARENT / ONE CHILD / ALL CONTROLLED PATHS ABSENT / NO RETRY /
MISSION EXACT-STAGE ADJUDICATION REQUIRED / FRVE-005-v7-VR-26`**

Date: **2026-08-11**

Science source inspected: `2eccab0b52401d7676b0d5e4dc598f8ab00d095c`

Mission shell: `FRSH-005-v1-VR-29`

Prior Science return: `FRVE-005-v7-VR-25`

Effective shell: `FRSH-005-v1` through `FRSH-005-v1-VR-29`

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Science decision

Science read the complete active intake, workflow, registry, full Science
profile, complete `FRSH-005-v1-VR-29`, complete `FRVE-005-v7-VR-25`, complete
`FRSH-005-v1-VR-28`, complete `FRVE-005-v7-VR-24`, both retained sources,
complete `FRWO-005-v7`, and the cited effective controls.

The retained sources matched the exact Mission identities and form:

```text
outerSourceBytes=15559
outerSourceSha256=2ba96ebf1bfd9ba25db1dbba1ceb03314ee657283b4ad0600ba4f09a9787e158
outerStrictAscii=true
outerLfOnly=true
outerFinalLF=true
outerParserErrors=0
parentSourceBytes=52900
parentSourceSha256=59915b373283f78408df07a2f3ad37e01ed8ce4cb963b03eb453385c531009f0
parentStrictAscii=true
parentLfOnly=true
parentFinalLF=true
parentParserErrors=0
```

Independent read-only source review confirmed the unchanged frozen carrier
identities:

```text
launcher=2001 / 96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
combined=27044 / 015dfd96befad29793892f1e15dc9ff4362ff8cec0ae4ce7b9c45b5da9e125f3
prefix=976 / 5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
tail=26068 / e9815ce8f988bca0f1f9bd14a7ba50cfa4935b3d7a47492c95bfa90986b7070c
```

Both carriers round-tripped as canonical Base64. The parent retained exactly
one direct child `Process.Start`, raw `StandardOutput.BaseStream.ReadAsync`
and `StandardError.BaseStream.ReadAsync` drains, complete byte counts, a
512-byte stderr retention cap, the unchanged exact 202-byte PT06 acceptance
predicate, credential removal before child start, and no native PowerShell
pipeline capture. The outer retained one parent start, independent canonical
Base64 decode/recompute, one-parent/one-child classification, and exact-path
postflight checks. Preflight passed `13/13` exact-path absences.

Two disposable preflight-only assertion expressions were corrected before
the authoritative start: one failed to capture the carrier assignments and
one collided with the built-in `h` alias. Neither expression started an
outer, parent, or child; read a credential; created a path; or changed a
retained source. They do not alter the single-run evidence below.

## Sole authoritative execution

Science invoked the exact retained outer controller exactly once through
Windows PowerShell 5.1 x64 with `-NoLogo -NoProfile -NonInteractive -File`
and the exact tracked path. The outer process environment had
`OPENAI_API_KEY` removed. There was no correction, alternate runner, or retry
after start.

```text
controllerExecutions=1
controllerExit=89
controllerStdoutRecords=1
controllerStdoutCharacters=800
controllerStderrRecords=0
controllerStderrCharacters=0
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
postflightAbsent=true
```

The sole controller stdout scalar was:

```text
SCIENCE_OUTER_RESULT_V1|classification=REJECTED_PARENT_RESULT|parentExit=88|parentStdout=EMPTY|parentStderr=EXACT_PARENT_STOP_V2|parentStopStage=SR05_CHILD_CAPTURE|parentStopCode=ASSERTION_FAILED|childExitFact=87|childStdoutFact=ZERO|childStderrFact=NONEXACT_BOUNDED|childStderrLength=202|childStderrSha256=b5ed4a14735097e96447f4068d6df27ceec3effca27729d091d7d19abafac66e|childStderrBase64=SE9TVDA2X1BST0RVQ1RJT05fRkFJTFVSRXxzdGFnZT1QVDAyX0hFTFBFUl9TT1VSQ0V8b3JkaW5hbD0wfHNlbmRTdGFydGVkPWZhbHNlfGhlbHBlclJvb3RBYnNlbnQ9dHJ1ZXxoZWxwZXJEbGxBYnNlbnQ9dHJ1ZXxsaXZlUm9vdEFic2VudD10cnVlfGFjdGl2ZUFic2VudD10cnVlfHByb2R1Y3RBYnNlbnQ9dHJ1ZXxwcm92ZW5hbmNlQWJzZW50PXRydWUNCg==|childStderrAscii=true|childStderrCrCount=1|childStderrLfCount=1|childStderrRecordOccurrences=0|childInvocations=1|postflightAbsent=true
```

## Independent bounded raw-byte adjudication

Science decoded the returned Base64 only in memory and wrote no decoded body.
Independent recomputation matched every projected fact:

```text
childStderrLength=202
childStderrSha256=b5ed4a14735097e96447f4068d6df27ceec3effca27729d091d7d19abafac66e
childStderrBase64Canonical=true
childStderrAscii=true
childStderrCrCount=1
childStderrLfCount=1
childStderrRecordOccurrences=0
```

The byte-level mismatch is exact and nonsecret. After removing only the
allowed terminal CRLF framing, the actual diagnostic record is `200` bytes;
the frozen expected diagnostic record is `202` bytes. At zero-based byte
offset `32`, the actual stage value is the 18-byte ASCII token
`PT02_HELPER_SOURCE`; the frozen expected stage value is the 20-byte ASCII
token `PT06_CREDENTIAL_GATE`. The remaining fields are framed as one local
production-failure record, but the frozen 202-byte PT06 record occurs zero
times. Therefore the unchanged acceptance predicate correctly returns
`NONEXACT_BOUNDED`.

This proves the child stops at `PT02_HELPER_SOURCE`, before the credential
gate. Science does not infer or repair the underlying PT02 cause. Variance:
**`REQUIRED CORRECTION / FROZEN CHILD REPORTS PT02_HELPER_SOURCE INSTEAD OF
PT06_CREDENTIAL_GATE / OPEN`**.

## Activity, absence, and protected state

Independent exact-path postflight inspection confirmed all `13/13`
controlled paths absent:

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
scienceFixtureRootAbsent=true
```

Historical ordinal `1` remains consumed, opaque, inaccessible, and unchanged.
Ordinals `2` and `3` remain unstarted and unconsumed. Science did not call the
API, construct a request, inspect media or pixels, alter product or tests, run
a build/browser/E2E operation, or access a residual.

The one-path rail, sole unchanged `L02-03`, equal-dignity MH-40 outcomes,
shared RP-012 ending, and `successor=null` remain immutable. No branch, packet,
lesson, Host 07, reward, access, identity, authority, world response,
Machine/Builder dialogue, hidden-lore answer, RP-013, or post-ending content
was added. Maturity and every inherited OPEN record remain unchanged.

Repository QA quarantine, the protected PDF, training tree, Martin's real
browser/profile/save, hidden lore, accepted-media bytes/pixels, OS-temp parent,
ordinal-1 residual, real managed directory, user work, VR-65, and opaque
residuals remained untouched.

## Exact Mission handoff

One fresh Mission Captain reads this complete HOLD, complete
`FRSH-005-v1-VR-29`, complete `FRVE-005-v7-VR-25`, both retained sources, and
the cited effective controls. Mission performs no controller, parent, child,
credential, API, media, product, test, build, browser, E2E, or residual
operation. It issues exactly one new versioned `FIRST RUN SHELL READY`,
`REVISE`, or `HOLD` decision for the exact retained PT02-versus-PT06 mismatch.

Any correction must preserve the validated raw-byte/Base64 localization,
passing exit/stdout facts, one parent/one child, frozen production carriers,
credential-cleared no-request behavior, exact path absence, and one-run/no-
retry discipline. Mission may not reinterpret or retry the completed run;
route to Quartermaster; call the API; consume ordinal `2`; inspect media or
pixels; change product/tests; run E2E; reveal; advance maturity; close an OPEN
record; access a residual or VR-65; release; or call `FIRST RUN COMPLETE`.

Science changes only this variance and `NEXT_INSTANCE_HANDOFF.md`, commits
them, and does not push. Rollback removes only this variance and restores the
immediately preceding handoff by explicit content.

Office of Science Administrator signs **`HOLD / SOLE FRSH-005-v1-VR-29
OUTER RUN LOCALIZED EXACT ACTUAL PT02_HELPER_SOURCE AGAINST EXPECTED
PT06_CREDENTIAL_GATE / CANONICAL BASE64 RETAINED / ONE PARENT / ONE CHILD /
ALL PATHS ABSENT / NO RETRY / FRVE-005-v7-VR-26`** from exact source
`2eccab0b52401d7676b0d5e4dc598f8ab00d095c`.
