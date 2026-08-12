# First Run Shell Variance - Host 06 Parent Stage Ownership

Variance ID: `FRSH-005-v1-VR-22`

Disposition: **`FIRST RUN SHELL READY / RETAINED PARENT STATIC STAGE
OWNERSHIP CORRECTED / FROZEN RUNTIME CARRIERS UNCHANGED / FRESH SCIENCE
ONE-RUN PROOF REQUIRED / FRSH-005-v1-VR-22`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / current Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-18`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-21`

Mission source inspected:
`521b4b2a26cd500cd06f03bd294a52bdf9190f9f`

Corrected inert code candidate:
`f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree:
`92b22fc56d79d18cf1abf7213c5268c9e4149830`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

Exact next recipient: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Mission decision

Mission accepts complete `FRVE-005-v7-VR-18` as an exact pre-execution HOLD.
The retained parent incorrectly required all `PH01..PH08` literals to occur in
the decoded launcher, although the launcher owns `PH01`, `PH02`, `PH03`, and
its `PH08` completion assertion while the embedded prehelper at the head of
the decoded combined source owns `PH04`, `PH05`, `PH06`, and `PH07`.

Mission corrects only that static ownership check. The parent now validates
ordered launcher stages `PH01 -> PH02 -> PH03 -> PH08` against the launcher
and ordered prehelper stages `PH04 -> PH05 -> PH06 -> PH07` against the
combined source. The existing ordered `PT01 -> ... -> PT06` production-tail
check remains against the combined source. No runtime carrier, bootstrap,
classifier, path, API, ordinal, product, or cleanup semantic changes.

Variance classification: **`REQUIRED CORRECTION RESOLVED / STATIC STAGE
ASSERTIONS NOW FOLLOW ACTUAL SOURCE OWNERSHIP / FRESH EXECUTION PROOF STILL
REQUIRED`**.

## New retained parent identity

The complete corrected source is retained before execution at:

```text
Production Pipeline/First Run/HOST06_SCIENCE_PARENT_V2.ps1
```

Its new exact identity supersedes only the prior retained parent byte identity:

```text
sourceCharacters=48153
sourceAsciiBytes=48153
sourceSha256=93c8b15bc9abec26697273e3942a044688323e0f604f1fe792d569f6982d4f87
sourceStrictAscii=true
sourceLfOnly=true
sourceFinalLF=true
canonicalBase64AsciiLength=64204
canonicalBase64AsciiSha256=8dca0a47da913cce5c236d01fa519d2613a2aa2ab979280324cbdd7e54baeefc
sourceDecodeReencodeEqual=true
launcherCarrierOccurrences=1
combinedCarrierOccurrences=1
```

The tracked file, not this report or its hashes, is the complete authoritative
parent source. The existing `.gitattributes` LF rule remains exact.

Mission performed read-only source, carrier, and decoded-marker validation.
It did not parse or execute the parent. Exact source-location evidence is:

```text
launcherPH01=50
launcherPH02=587
launcherPH03=859
launcherPH08=921
launcherPH04=absent
combinedPH04=18
combinedPH05=192
combinedPH06=283
combinedPH07=497
parserOperations=0
parentExecutions=0
childInvocations=0
```

## Frozen carriers and one-run acceptance

Both complete runtime carriers remain embedded exactly once and byte-identical:

```text
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
```

The exact accepted V2 parent result, VR-17 fileless bootstrap, one-child and
no-retry rule, corrected PT06 classifier, dual-stream capture, zero-activity
contract, independent parent postflight absence facts, and every controlled
path gate remain exactly as `FRSH-005-v1-VR-21`. Any other result is `HOLD`.

One fresh Science role independently re-proves the new retained source
identity, carrier identities and roundtrips, correct split stage ownership and
order, and controlled-path absence. It may then parse-check the complete
retained parent once and, only if parser-clean, run exactly one parent through
the exact VR-17 bootstrap with `OPENAI_API_KEY` removed from the parent
environment without reading it. The parent may invoke exactly one frozen
child. There is no retry.

PASS permits only **`POLISH VIABILITY READY / CORRECTED RETAINED PARENT V2
CREDENTIAL-CLEARED NO-REQUEST SUBGATE PASSED / MISSION API SHELL REQUIRED`**
and return to one fresh Mission Captain. Failure permits only exact `HOLD`.
Science commits only its variance and synchronized handoff and does not push.

## Zero activity, protected boundaries, and rollback

Mission executed no parser, bootstrap, parent, child, helper, credential,
request, API, generation, media, pixel, controlled-root, product, test, build,
browser, or E2E operation. Exact activity remains:

```text
credentialValueReads=0
requestConstructions=0
sendAsyncCalls=0
directSends=0
ordinalsConsumed=0
```

The exact helper root/DLL, live root, ordinal-2/3 stage/target/decision paths,
product root/raster/provenance, and Science fixture root remain absent.
Historical ordinal `1` remains consumed, opaque, inaccessible, and unchanged.
Ordinals `2` and `3` remain unstarted and unconsumed.

The player address remains `FR-03 / Chapter II - Drowned Archive / Host 06`.
The exact Host 05 handoff, one dry same-basin Stranded Lens Cradle, sole
unchanged `L02-03`, next Drowned boundary, one-path rail, equal-dignity MH-40
outcomes, all null deltas, shared RP-012 ending, and `successor=null` remain
immutable. No branch, packet, lesson, Host 07, reward, access, identity,
authority, world response, hidden-lore answer, RP-013, or post-ending content
exists. Maturity and every inherited OPEN record remain unchanged.

Repository QA quarantine, protected PDF, training tree, Martin's real browser/
profile/save, hidden lore, accepted-media bytes/pixels, OS-temp parent,
ordinal-1 residual, real managed directory, user work, VR-65, and opaque
residuals remain untouched.

Rollback restores the previous complete retained source bytes, removes only
this variance, and restores the immediately preceding handoff by explicit
content. It never resets the repository or touches protected, controlled,
product, media, or user state.

Mission Captain signs **`FIRST RUN SHELL READY / CORRECTED RETAINED PARENT
STATIC STAGE OWNERSHIP / FRESH SCIENCE ONE-RUN PROOF REQUIRED /
FRSH-005-v1-VR-22`** from exact source
`521b4b2a26cd500cd06f03bd294a52bdf9190f9f`.
