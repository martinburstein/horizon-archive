# First Run Polish Viability Variance

Variance ID: `FRVE-005-v7-VR-20`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-005-v7 / Stranded Lens Cradle - Direct Image API Source,
Native Handle Identity, and Fixed Lesson Integration`

Disposition: **`HOLD / RETAINED PARENT V2 SINGLE AUTHORIZED RUN RETURNED A
NONZERO PARENT EXIT / EXACT PARENT RESULT WAS NOT EXTERNALLY RETAINED / NO
RETRY / MISSION ONE-RUN EVIDENCE-RETENTION CORRECTION REQUIRED /
FRVE-005-v7-VR-20`**

Date: **2026-08-11**

Science source inspected:
`5e9b2d15b42e9e3818a88509bdfc2af8542aec68`

Mission correction: `FRSH-005-v1-VR-23`

Prior Science return: `FRVE-005-v7-VR-19`

Effective shell: `FRSH-005-v1` through `FRSH-005-v1-VR-23`

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Science decision

Science read the complete active intake, workflow, registry, full Science
profile, complete `FRSH-005-v1-VR-23`, complete `FRVE-005-v7-VR-19`, complete
`FRSH-005-v1-VR-22`, complete retained parent source, complete VR-17 bootstrap
authority, complete `FRWO-005-v7`, and the cited effective controls.

The retained source passed independent static identity, carrier, roundtrip,
slice, encoding, split-stage-order, and preflight-absence gates:

```text
sourceCharacters=50688
sourceAsciiBytes=50688
sourceSha256=2f47b5d01dd67397654176b596ced4602622a7f35ff1a078c57ad058399ef217
sourceStrictAscii=true
sourceLfOnly=true
sourceFinalLF=true
canonicalBase64AsciiLength=67584
canonicalBase64AsciiSha256=a0102c07a69401291c01ade2254ae4eb9d5cc25be0a20289a83891afd08240e1
launcherCarrierOccurrences=1
combinedCarrierOccurrences=1
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
prefixSha256=5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
tailSha256=e9815ce8f988bca0f1f9bd14a7ba50cfa4935b3d7a47492c95bfa90986b7070c
launcherStageOffsets=50,587,859,921
combinedPrehelperStageOffsets=18,192,283,497
combinedProductionStageOffsets=997,1691,3828,4723,5916,6148
controlledPathsAbsent=13/13
```

Science performed the sole authorized production-source parser operation. It
returned zero errors. Science then started exactly one parent with the exact
VR-17 executable, `105`-character bootstrap, `151`-character arguments,
redirected standard input/output/error, one source write and input close, and
dual asynchronous drains. `OPENAI_API_KEY` was removed from the parent process
environment without reading its value.

The parent completed with a nonzero exit. The Science controller correctly
rejected it at `PARENT_EXIT`, but its fail-fast assertion did not emit the
already captured exit/stdout/stderr scalars before the controller process
ended. The exact nonzero exit, bounded parent record, and child invocation
cardinality therefore are not externally retained evidence. The required
exact accepted V2 stdout record and parent exit `0` are not proven. The
one-run rule prohibits any retry.

Variance classification: **`REQUIRED CORRECTION / SCIENCE OUTER CONTROLLER
FAILS CLOSED BUT DOES NOT EXTERNALLY RETAIN THE ONE-RUN PARENT RESULT BEFORE
ASSERTING / OPEN`**.

## Exact activity and postflight evidence

```text
staticReadOnlyControllerFaultsBeforeParser=1
parserOperations=1
parentExecutions=1
parentRetries=0
acceptedParentResults=0
parentExit=NONZERO_UNRETAINED
parentStdout=UNRETAINED
parentStderr=UNRETAINED
childInvocations=UNPROVEN_0_OR_1
credentialValueReads=0
requestConstructions=0
sendAsyncCalls=0
directSends=0
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

The initial read-only static controller used an unsuitable `String.Split`
overload for literal carrier occurrence counting and stopped before the sole
production-source parser operation. The corrected read-only static controller
used ordinal first/last indexes and passed. No production parser, parent, or
child had begun at the time of that controller-only fault.

No API request, generation, media, pixel, live-root, ordinal, product, test,
build, browser, or E2E operation was authorized or performed by Science.
Because the credential was absent in the sole child environment and the
frozen production tail gates all request construction, live-root allocation,
and send work after PT06, the postflight absence proof is consistent with
exact zero request/send/ordinal activity. Historical ordinal `1` remains
consumed, opaque, inaccessible, and unchanged. Ordinals `2` and `3` remain
unstarted and unconsumed.

## Protected state, maturity, and exact Mission handoff

The one-path rail, sole unchanged `L02-03`, equal-dignity MH-40 outcomes,
shared RP-012 ending, and `successor=null` remain immutable. No branch, packet,
lesson, Host 07, reward, access, identity, authority, world response,
hidden-lore answer, successor, RP-013, or post-ending content exists.

Repository QA quarantine, the protected PDF, training tree, Martin's real
browser/profile/save, hidden lore, accepted-media bytes/pixels, OS-temp parent,
ordinal-1 residual, real managed directory, user work, VR-65, and every opaque
residual remained untouched. All inherited OPEN records remain separate and
OPEN. Maturity is unchanged.

Science changes only this variance and `NEXT_INSTANCE_HANDOFF.md`, commits
them, and does not push. Rollback removes only this variance and restores the
immediately preceding handoff by explicit content.

One fresh Mission Captain / `mission_captain` reads this complete HOLD,
complete `FRSH-005-v1-VR-23`, complete `FRVE-005-v7-VR-19`, the complete
retained parent source, and the frozen runtime carriers. Mission performs no
parser, parent, child, credential, API, media, product, or controlled-root
execution. It issues exactly one versioned `FIRST RUN SHELL READY`, `REVISE`,
or `HOLD` decision that preserves the retained parent and both frozen runtime
carrier identities while requiring a fresh Science outer controller to emit
or durably bound the exact parent exit/stdout/stderr classification before
any fail-fast assertion can destroy the one-run result. No child body,
credential, or unbounded response may be exposed or persisted.

Mission may not route to Quartermaster; call the API; consume ordinal `2`;
inspect media/pixels; change product/tests; run E2E; reveal; advance maturity;
close an OPEN record; access a residual or VR-65; release; or call
`FIRST RUN COMPLETE`.

Office of Science Administrator signs **`HOLD / SINGLE RETAINED PARENT V2 RUN
RETURNED NONZERO / EXACT ONE-RUN RESULT NOT EXTERNALLY RETAINED / NO RETRY /
FRVE-005-v7-VR-20`** from exact source
`5e9b2d15b42e9e3818a88509bdfc2af8542aec68`.
