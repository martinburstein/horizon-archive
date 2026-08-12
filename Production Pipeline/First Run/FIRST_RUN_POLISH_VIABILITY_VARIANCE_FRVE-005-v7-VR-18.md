# First Run Polish Viability Variance

Variance ID: `FRVE-005-v7-VR-18`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-005-v7 / Stranded Lens Cradle - Direct Image API Source,
Native Handle Identity, and Fixed Lesson Integration`

Disposition: **`HOLD / RETAINED PARENT V2 STATIC STAGE-ORDER CONTRACT CANNOT
PASS / LAUNCHER CARRIER OMITS PH04 THROUGH PH07 / NO PARSER OR PARENT
EXECUTION / MISSION CORRECTION REQUIRED / FRVE-005-v7-VR-18`**

Date: **2026-08-11**

Science source inspected:
`e6e93f40c4e2183b03425d7fd8d87b40d6e9092c`

Mission correction: `FRSH-005-v1-VR-21`

Prior Science return: `FRVE-005-v7-VR-17`

Effective shell: `FRSH-005-v1` through `FRSH-005-v1-VR-21`

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Science decision

Science read the complete active intake, workflow, registry, full Science
profile, complete `FRSH-005-v1-VR-21`, authoritative
`HOST06_SCIENCE_PARENT_V2.ps1`, complete `FRVE-005-v7-VR-17`, complete
`FRSH-005-v1-VR-20` through `FRSH-005-v1-VR-16`, the exact VR-17 fileless
bootstrap authority, complete `FRWO-005-v7`, and the cited effective controls.

The retained source passed its source-identity and carrier-identity gates:

```text
sourceCharacters=48090
sourceAsciiBytes=48090
sourceSha256=cf7a722759db7b97fad6aefbdbf21df9864ec4b0794a661ecfde7c4f5384df4f
sourceStrictAscii=true
sourceLfOnly=true
sourceFinalLF=true
canonicalBase64AsciiLength=64120
canonicalBase64AsciiSha256=6b399d80ed7a6066d1bad7600be5ea4ec7594123b8167bee2c49a8d9274407b4
sourceDecodeReencodeEqual=true
launcherCarrierOccurrences=1
combinedCarrierOccurrences=1
launcherCarrierAsciiLength=2668
launcherCarrierAsciiSha256=02c0219793c0aeb6e8e989aac9f9ee52373598cdbc2a33da4f2c54b069796af9
launcherDecodedByteLength=2001
launcherDecodedSha256=96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
combinedCarrierAsciiLength=36060
combinedCarrierAsciiSha256=c8926687184ecff422bb29fe26a7a9e3bd3d6273c75fceb56746734de89b19f5
combinedDecodedByteLength=27044
combinedDecodedSha256=015dfd96befad29793892f1e15dc9ff4362ff8cec0ae4ce7b9c45b5da9e125f3
prefixByteLength=976
prefixSha256=5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
tailByteLength=26068
tailSha256=e9815ce8f988bca0f1f9bd14a7ba50cfa4935b3d7a47492c95bfa90986b7070c
decodedFinalLF=true
```

The required independent pre-execution stage-order proof then failed before
the one authorized parent-source parser operation. Exact ordinal search in the
decoded launcher produced:

```text
PH01_ENV_RETRIEVAL=50
PH02_PARSE_SUCCESS=587
PH03_INVOCATION_ENTRY=859
PH04_PS51_VERSION=absent
PH05_X64_PROCESS=absent
PH06_ROOT_ABSENT=absent
PH07_ROOT_CREATE_ENTRY=absent
PH08_ROOT_CREATE_COMPLETE=921
```

The decoded launcher retrieves, parses, and invokes the combined source; the
combined source owns `PH04` through `PH08`. The retained parent nevertheless
requires `Assert-Ordered` to find all eight `PH01..PH08` literals inside the
launcher scalar alone. Because `PH04` through `PH07` are absent from that
scalar, the parent is statically guaranteed to stop at
`SR01_STATIC_IDENTITY / STAGE_ORDER` before child preparation. This is not a
credential-cleared no-request proof and cannot be waived or reclassified.

Science ran two bounded fail-closed read-only controller preflights while
localizing the retained-source contradiction. Both stopped at `SC01_SOURCE`.
The first also included an overbroad post-credential production-stage literal
check; Science rejected that controller-local expectation and did not treat it
as evidence. The second used only the retained parent's own PH/SR order rules
and independently confirmed the launcher contradiction above. Neither
controller reached `Parser.ParseInput`, the VR-17 bootstrap, a parent process,
or a child. The subsequent localization was read-only decoding and ordinal
search. No correction or execution retry occurred.

Variance classification: **`REQUIRED CORRECTION / PARENT V2 ASSERTS PH04
THROUGH PH07 AGAINST A SCALAR THAT DOES NOT CONTAIN THEM / OPEN`**.

## Exact activity and absence evidence

```text
controllerPreflights=2
parserOperations=0
parentExecutions=0
childInvocations=0
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

No process, child, helper, credential, API, request, response, generation,
media, pixel, controlled-root, product, test, build, browser, or E2E operation
occurred. Historical ordinal `1` remains consumed, opaque, inaccessible, and
unchanged. Ordinals `2` and `3` remain unstarted and unconsumed. Direct sends
remain `0`.

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
complete `FRSH-005-v1-VR-21`, the retained parent source, and all cited
controls. Mission issues exactly one versioned `FIRST RUN SHELL READY`,
`REVISE`, or `HOLD` decision that repairs only the disposable parent's static
stage-order validation against the correct launcher/combined ownership while
preserving both carrier byte identities, source retention, exact VR-17
bootstrap, one-child/no-retry rule, PT06 classifier, zero-activity contract,
and controlled-path checks.

Mission may not reinterpret this preflight as parser, parent, child, or
credential evidence; execute this retained parent; route to Quartermaster;
call the API; consume ordinal `2`; inspect media/pixels; change product/tests;
run E2E; reveal; advance maturity; close an OPEN record; access a residual or
VR-65; push from Science; release; or call `FIRST RUN COMPLETE`.

Office of Science Administrator signs **`HOLD / PARENT V2 STATIC LAUNCHER
STAGE-ORDER CONTRADICTION / PARSER OPERATIONS ZERO / PARENT EXECUTIONS ZERO /
FRVE-005-v7-VR-18`** from exact source
`e6e93f40c4e2183b03425d7fd8d87b40d6e9092c`.
