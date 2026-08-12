# First Run Shell Variance - Bounded Parent Stop Detail

Variance ID: `FRSH-005-v1-VR-25`

Disposition: **`FIRST RUN SHELL READY / RETAINED OUTER CONTROLLER PROJECTS
ONLY REGEX-VALIDATED PARENT STOP STAGE AND FIXED CODE / SOURCE RETAINED BEFORE
EXECUTION / FRESH SCIENCE ONE-RUN PROOF REQUIRED / FRSH-005-v1-VR-25`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / current Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-21`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-24`

Mission source inspected:
`34033267132ae8b3dd2d6e0651817f8c40b7611a`

Corrected inert code candidate:
`f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree:
`92b22fc56d79d18cf1abf7213c5268c9e4149830`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

Exact next recipient: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Mission decision

Mission accepts `FRVE-005-v7-VR-21` only as an exact one-run HOLD. That run
proved controller exit `89`, parent exit `88`, empty parent stdout, one exact
regex-validated `SCIENCE_PARENT_STOP_V2` stderr record, one child, and all
controlled paths absent. The completed run is not reinterpreted or retried.

Mission corrects only the retained outer controller's projection of a parent
stop. Its unchanged authoritative path is:

```text
Production Pipeline/First Run/HOST06_SCIENCE_OUTER_CONTROLLER_V1.ps1
```

The revised tracked identity retained before any future execution is:

```text
sourceCharacters=10896
sourceAsciiBytes=10896
sourceSha256=787247b3bdcc8e5b2fec5b7891460fc57a8828e4fb2c46cf1e0e67986afef018
sourceStrictAscii=true
sourceLfOnly=true
sourceFinalLF=true
```

The controller still retains at most a `2,048`-character prefix of either
parent stream only for bounded in-process classification and never emits a
stream body. Its exact existing parent-stop regex remains the sole authority
for accepting a stop record. Only after that complete regex succeeds does the
controller assign the exact regex allowlisted stage group and fixed code:

```text
parentStopStage=SR01_STATIC_IDENTITY|SR02_NORMALIZER_SELF_TEST|
  SR03_CHILD_PREPARE|SR04_CHILD_INVOKE|SR05_CHILD_CAPTURE|
  SR06_CHILD_CLASSIFY|SR07_POSTFLIGHT_ABSENCE|SR08_ZERO_ACTIVITY|
  SR09_RESULT_EMIT
parentStopCode=ASSERTION_FAILED
```

The line wrapping above is explanatory only. Runtime emits one unbroken
bounded scalar. When no exact parent stop was validated, both fields remain
exactly `NOT_APPLICABLE`. No `UNAVAILABLE`, partial-match, or attacker-supplied
value can enter either field.

The sole outer result schema is now:

```text
SCIENCE_OUTER_RESULT_V1|classification=<allowlisted class>|parentExit=<allowlisted fact>|parentStdout=<allowlisted fact>|parentStderr=<allowlisted fact>|parentStopStage=<allowlisted stage or NOT_APPLICABLE>|parentStopCode=<ASSERTION_FAILED or NOT_APPLICABLE>|childInvocations=<allowlisted fact>|postflightAbsent=<true or false>
```

For an exact accepted parent result, `parentStopStage=NOT_APPLICABLE` and
`parentStopCode=NOT_APPLICABLE`. For an exact parent stop, the parent stderr
body remains private while `parentStopStage` and `parentStopCode` are retained
in the same one-record scalar. No diagnostic body, child body, credential,
request, response, Base64 member, exception, stack, handle, path-derived
value, or native result is emitted or persisted.

Variance classification: **`REQUIRED CORRECTION RESOLVED / EXACT
REGEX-VALIDATED PARENT STOP STAGE AND FIXED CODE ARE NOW RETAINED WITHOUT THE
PARENT BODY / FRESH SCIENCE EXECUTION PROOF REQUIRED`**.

## Frozen parent, carriers, and production semantics

The authoritative retained parent remains byte-identical:

```text
Production Pipeline/First Run/HOST06_SCIENCE_PARENT_V2.ps1
sourceCharacters=50688
sourceAsciiBytes=50688
sourceSha256=2f47b5d01dd67397654176b596ced4602622a7f35ff1a078c57ad058399ef217
```

All embedded carrier and decoded runtime identities remain frozen:

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
helperSourceByteLength=1693
helperSourceSha256=98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97
helperDllByteLength=4096
helperDllSha256=39e85b32b7f8437c2b5732e26093ca5bd9a9182b048c411e9dc5660ba03f10c9
```

The outer controller still performs exact parent identity, parser, `13/13`
preflight absence, one parent start, one parent-source stdin write, credential
removal without value access, dual-drain bounded capture, postflight absence,
one scalar emission, and fail-closed exit. The parent, child, launcher,
prehelper, production tail, PT06 classifier, helper, direct API, prompt,
endpoint, model/options, request/response bounds, ordinal rules, PNG/physical
review, import, provenance, cleanup, tests, build, and E2E semantics do not
change. This shell does not authorize an API request.

## Exact fresh Science proof

One fresh Science role reads the complete active intake and profile, this
shell, `FRVE-005-v7-VR-21`, `FRSH-005-v1-VR-24`, `FRVE-005-v7-VR-20`, both
complete retained sources, `FRWO-005-v7`, and all cited controls.

Science independently proves both tracked identities and strict source form;
the outer parser; frozen carrier identities, canonical roundtrips, splits,
and stage order; exact controller/parent/child cardinality; the result
allowlists; and exact `13/13` preflight absence. Science performs no alternate
parent execution or runner.

If and only if those read-only gates pass, Science invokes the exact tracked
outer controller once through Windows PowerShell 5.1 x64 with `-NoLogo
-NoProfile -NonInteractive -File` and the exact quoted path. It dual-drains
controller stdout/stderr, waits for EOF and native completion, and records the
one bounded result. No correction or retry exists after controller start.

PASS requires controller exit `0`, one exact accepted scalar, zero controller
stderr, one parent, one child, all activity counters `0`, and exact postflight
absence. PASS returns only `POLISH VIABILITY READY` to one fresh Mission for a
separate API shell. A rejected exact parent stop requires controller exit
`89`, one scalar with `parentStderr=EXACT_PARENT_STOP_V2`, one exact allowlisted
`parentStopStage`, `parentStopCode=ASSERTION_FAILED`, one child, and exact
postflight absence; Science records those nonsecret scalars as exact HOLD and
returns the defect to its earliest owner without emitting the parent body.
Any other result is exact HOLD. Science commits only its variance and
synchronized handoff and does not push.

## Protection, maturity, and rollback

Mission performed no parser, controller, parent, child, credential, request,
API, generation, media, pixel, product, test, build, browser, or E2E
execution. API sends remain `0`; historical ordinal `1` remains opaque and
consumed; ordinals `2` and `3` remain unstarted and unconsumed. No maturity or
OPEN record changes.

The player address remains `FR-03 / Chapter II - Drowned Archive / Host 06`.
The Host 05 handoff, sole unchanged `L02-03`, one-path rail, equal-dignity
MH-40 outcomes, shared RP-012 ending, and `successor=null` remain immutable.
No branch, packet, lesson, Host 07, reward, access, identity, authority, world
response, hidden-lore answer, RP-013, or post-ending content exists.

Repository QA quarantine, protected PDF, training tree, Martin's real browser/
profile/save, hidden lore, accepted-media bytes/pixels, OS-temp parent,
ordinal-1 residual, real managed directory, user work, VR-65, and opaque
residuals remain untouched.

Rollback removes only this shell and restores the immediately preceding
handoff and retained outer controller content explicitly. It never resets the
repository or touches the parent, carriers, controlled/product/media paths,
protected state, or user work.

Mission Captain signs **`FIRST RUN SHELL READY / BOUNDED PARENT STOP STAGE AND
FIXED CODE RETAINED WITHOUT BODY DISCLOSURE / FRESH SCIENCE ONE-RUN PROOF
REQUIRED / FRSH-005-v1-VR-25`** from exact source
`34033267132ae8b3dd2d6e0651817f8c40b7611a`.
