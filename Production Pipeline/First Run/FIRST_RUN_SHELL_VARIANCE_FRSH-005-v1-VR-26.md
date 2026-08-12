# First Run Shell Variance - Bounded SR05 Child Fact Projection

Variance ID: `FRSH-005-v1-VR-26`

Disposition: **`FIRST RUN SHELL READY / SR05 CHILD EXIT-STDOUT-STDERR FACTS
PROJECTED ONLY AFTER EXACT PARENT-STOP REGEX VALIDATION / PARENT AND CARRIERS
UNCHANGED / FRESH SCIENCE ONE-RUN LOCALIZATION REQUIRED /
FRSH-005-v1-VR-26`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / current Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-22`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-25`

Mission source inspected:
`cf96be3060029f0794e61e9c883dee73f8c7ea15`

Corrected inert code candidate:
`f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree:
`92b22fc56d79d18cf1abf7213c5268c9e4149830`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

Exact next recipient: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Mission adjudication

Mission accepts `FRVE-005-v7-VR-22` only as the exact completed one-run HOLD.
That run proved controller exit `89`, parent exit `88`, empty parent stdout,
one exact bounded parent-stop record, `SR05_CHILD_CAPTURE`, fixed
`ASSERTION_FAILED`, one child, and exact postflight absence. It is not
reinterpreted or retried.

Read-only source adjudication identifies the three and only three SR05 capture
predicates in the authoritative retained parent:

```text
CHILD_EXIT   := childExitEvidence == 87
CHILD_STDOUT := childStdoutCharacters == 0
CHILD_STDERR := childStderrClass == EXACT_PT06
```

The parent already maps those values to bounded nonsecret stop facts:

```text
childExit   = UNAVAILABLE | OUT_OF_RANGE | 0..255
childStdout = UNAVAILABLE | ZERO | NONZERO_BOUNDED | NONZERO_OVERSIZE
childStderr = UNAVAILABLE | EXACT_PT06 | EMPTY | NONEXACT_BOUNDED | OVERSIZE
```

The retained outer controller's anchored exact parent-stop regex already
validated all three fields, but `FRSH-005-v1-VR-25` projected only stop stage
and fixed code. The exact source defect is therefore bounded result-projection
loss. This shell corrects only that outer projection. It does not yet infer
which predicate failed and does not alter the completed run.

Variance classification: **`REQUIRED CORRECTION RESOLVED / EXACT
REGEX-VALIDATED SR05 CHILD EXIT-STDOUT-STDERR FACTS ARE NOW PROJECTED WITHOUT
STREAM OR BODY DISCLOSURE / FRESH SCIENCE EXECUTION PROOF REQUIRED`**.

## Revised authoritative outer controller

The authoritative path remains:

```text
Production Pipeline/First Run/HOST06_SCIENCE_OUTER_CONTROLLER_V1.ps1
```

The new retained identity, established before any future execution, is:

```text
sourceCharacters=11251
sourceAsciiBytes=11251
sourceSha256=a1f40770f9dc16f042f89feda547655dd7b0e22dd5e0d68fd3b88cdf1dc01d83
sourceStrictAscii=true
sourceLfOnly=true
sourceFinalLF=true
parserErrors=0
```

On initialization, the three new output facts are each exactly
`NOT_APPLICABLE`. They can change only after the complete anchored
`SCIENCE_PARENT_STOP_V2` regex succeeds. The controller then copies only regex
groups 3, 4, and 5 into the respective allowlisted facts. Partial,
nonconforming, oversize, missing, or non-stop stderr cannot populate them.

The sole result schema is extended only by:

```text
childExitFact=NOT_APPLICABLE|UNAVAILABLE|OUT_OF_RANGE|0..255
childStdoutFact=NOT_APPLICABLE|UNAVAILABLE|ZERO|NONZERO_BOUNDED|NONZERO_OVERSIZE
childStderrFact=NOT_APPLICABLE|UNAVAILABLE|EXACT_PT06|EMPTY|NONEXACT_BOUNDED|OVERSIZE
```

For an exact accepted parent result or any result without an exact validated
parent stop, all three remain `NOT_APPLICABLE`. The controller still emits
one bounded scalar before final exit and never emits either stream body, the
parent or child body, diagnostic text, credential, request, response, Base64
member, exception, stack, handle, native value, or path-derived value.

Read-only Mission validation proved strict source form, zero parser errors,
the exact anchored regex's group mapping, and exact static projection using a
synthetic bounded scalar. Mission did not invoke the controller, parent, or
child.

## Frozen parent and production semantics

The authoritative retained parent remains byte-identical:

```text
Production Pipeline/First Run/HOST06_SCIENCE_PARENT_V2.ps1
sourceCharacters=50688
sourceAsciiBytes=50688
sourceSha256=2f47b5d01dd67397654176b596ced4602622a7f35ff1a078c57ad058399ef217
```

All launcher, combined carrier, prehelper, production-tail, helper, prompt,
endpoint, model/options, direct API, ordinal, file-identity, PNG, physical
review, product import, provenance, cleanup, test, build, and E2E semantics
remain frozen by `FRSH-005-v1-VR-25` and its effective predecessors. The
embedded carrier identities remain:

```text
launcherDecodedByteLength=2001
launcherDecodedSha256=96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
combinedDecodedByteLength=27044
combinedDecodedSha256=015dfd96befad29793892f1e15dc9ff4362ff8cec0ae4ce7b9c45b5da9e125f3
prefixByteLength=976
prefixSha256=5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
tailByteLength=26068
tailSha256=e9815ce8f988bca0f1f9bd14a7ba50cfa4935b3d7a47492c95bfa90986b7070c
helperSourceByteLength=1693
helperSourceSha256=98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97
helperDllByteLength=4096
helperDllSha256=39e85b32b7f8437c2b5732e26093ca5bd9a9182b048c411e9dc5660ba03f10c9
```

This shell authorizes no request or API operation.

## Exact fresh Science proof

One fresh Science role reads the complete active intake and profile, this
shell, `FRVE-005-v7-VR-22`, `FRSH-005-v1-VR-25`,
`FRVE-005-v7-VR-21`, both complete retained sources, `FRWO-005-v7`, and all
cited controls.

Science independently validates both source identities and strict form, the
outer parser, the frozen carrier identities and stage order, exact
controller/parent/child cardinality, exact result allowlists and group
mapping, and `13/13` preflight absence. It performs no alternate parent or
runner operation.

If and only if every read-only gate passes, Science invokes the exact retained
outer controller exactly once through Windows PowerShell 5.1 x64 with
`-NoLogo -NoProfile -NonInteractive -File` and the exact quoted tracked path.
It dual-drains controller stdout/stderr, waits for EOF and native completion,
and records the one bounded result. No correction or retry exists after
controller start.

PASS remains controller exit `0`, one exact accepted scalar, zero controller
stderr, one parent, one child, all zero activity counters, and exact
postflight absence. PASS returns only `POLISH VIABILITY READY` to one fresh
Mission Captain for a separate API shell.

An exact rejected parent stop remains HOLD. For `SR05_CHILD_CAPTURE`, Science
must record the exact three projected allowlisted facts and identify each
failed predicate by direct comparison only:

```text
childExitFact   expected 87
childStdoutFact expected ZERO
childStderrFact expected EXACT_PT06
```

It returns that bounded localization to one fresh Mission Captain without
emitting a stream or body. If all three equal their expected values while the
parent still reports `SR05_CHILD_CAPTURE`, that contradiction is itself exact
HOLD. Any other result is exact HOLD. Science commits only its variance and
synchronized handoff and does not push.

## Activity, protection, maturity, and rollback

Mission performed no controller, parent, child, credential, request, API,
generation, media, pixel, product, test, build, browser, E2E, or residual
operation. API sends remain `0`; ordinal `1` remains consumed, opaque, and
inaccessible; ordinals `2` and `3` remain unstarted and unconsumed. No
maturity or OPEN record changes.

The player address remains `FR-03 / Chapter II - Drowned Archive / Host 06`.
The Host 05 handoff, sole unchanged `L02-03`, one-path rail, equal-dignity
MH-40 outcomes, shared RP-012 ending, and `successor=null` remain immutable.
No branch, packet, lesson, Host 07, reward, access, identity, authority, world
response, hidden-lore answer, RP-013, or post-ending content exists.

Repository QA quarantine, protected PDF, training tree, Martin's real
browser/profile/save, hidden lore, accepted-media bytes/pixels, OS-temp
parent, ordinal-1 residual, real managed directory, user work, VR-65, and
opaque residuals remain untouched.

Rollback removes only this shell and restores the immediately preceding
handoff and outer-controller content explicitly. It never resets the
repository or touches the parent, carriers, controlled/product/media paths,
protected state, or user work.

Mission Captain signs **`FIRST RUN SHELL READY / EXACT SR05 CHILD
EXIT-STDOUT-STDERR FACTS RETAINED THROUGH BOUNDED OUTER PROJECTION / FRESH
SCIENCE ONE-RUN LOCALIZATION REQUIRED / FRSH-005-v1-VR-26`** from exact
source `cf96be3060029f0794e61e9c883dee73f8c7ea15`.
