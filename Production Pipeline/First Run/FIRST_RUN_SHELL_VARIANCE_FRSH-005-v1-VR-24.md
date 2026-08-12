# First Run Shell Variance - Retained Outer Science Result Controller

Variance ID: `FRSH-005-v1-VR-24`

Disposition: **`FIRST RUN SHELL READY / EXACT OUTER SCIENCE CONTROLLER
RETAINED BEFORE EXECUTION / PARENT RESULT CLASSIFICATION EMITTED BEFORE
PASS-FAIL EXIT / FRESH SCIENCE ONE-RUN PROOF REQUIRED /
FRSH-005-v1-VR-24`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / current Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-20`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-23`

Mission source inspected:
`4563169e2144fe9ecb5ca18897276e4de0786a43`

Corrected inert code candidate:
`f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree:
`92b22fc56d79d18cf1abf7213c5268c9e4149830`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

Exact next recipient: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Mission decision

Mission accepts `FRVE-005-v7-VR-20` only as an exact one-run HOLD. The sole
credential-cleared parent completed nonzero, but the disposable Science
controller asserted on that exit before emitting the already captured parent
exit, stdout, and stderr evidence. The failed parent is not reinterpreted and
the prior one-run context is not retried.

Mission corrects only the outer Science control surface. The complete outer
controller is now retained before execution as an authoritative tracked file:

```text
Production Pipeline/First Run/HOST06_SCIENCE_OUTER_CONTROLLER_V1.ps1
```

Its exact identity is:

```text
sourceCharacters=10485
sourceAsciiBytes=10485
sourceSha256=c145eb70b459011e55bb8328c631c04733d615846b2d39ef602e1a5687b670b6
sourceStrictAscii=true
sourceLfOnly=true
sourceFinalLF=true
```

The controller freezes the existing retained parent by its exact path,
`50,688`-byte identity, and SHA-256. It performs the sole parent-source parser
operation, exact `13/13` preflight absence check, and exact VR-17 bootstrap.
It removes `OPENAI_API_KEY` from the parent process environment without
reading the value, writes the unchanged parent source exactly once to parent
stdin, and permits exactly one parent execution and at most one frozen child.
No retry exists.

After parent start, controller stdout and stderr are dual-drained through
asynchronous `ReadAsync` loops. Each stream has an independent 64-bit total
character count and a fixed `2,048`-character retained prefix ceiling. The
controller waits for both EOFs and parent completion, then captures the native
parent exit. It makes no parent-result assertion before those facts are
captured. It never emits a parent body, child body, credential, response,
Base64 member, diagnostic text, exception, or stack.

Only after capture does the controller classify the result. It emits exactly
one bounded scalar before its final exit:

```text
SCIENCE_OUTER_RESULT_V1|classification=ACCEPTED_PARENT_RESULT|parentExit=0|parentStdout=EXACT_ACCEPTED_V2|parentStderr=EMPTY|childInvocations=1|postflightAbsent=true
```

or the same schema with only allowlisted rejected facts:

```text
classification=REJECTED_PARENT_RESULT
parentExit=UNAVAILABLE|OUT_OF_RANGE|0..255
parentStdout=UNAVAILABLE|OVERSIZE|EMPTY|NONEXACT_BOUNDED|EXACT_ACCEPTED_V2
parentStderr=UNAVAILABLE|OVERSIZE|EMPTY|NONEXACT_BOUNDED|EXACT_PARENT_STOP_V2
childInvocations=UNPROVEN_0_OR_1|0|1
postflightAbsent=true|false
```

Pre-parent static, parser, absence, transport, or start failure emits only one
bounded `SCIENCE_OUTER_STOP_V1` scalar with `parentExecutions=0`. An accepted
classification exits `0`; a rejected captured result exits `89`; a pre-parent
stop exits `90`. The classification is always emitted before the captured
result is accepted or rejected. Variance classification: **`REQUIRED
CORRECTION RESOLVED / OUTER CONTROLLER SOURCE AND ONE-RUN RESULT RETENTION ARE
NOW DURABLE, BOUNDED, ALLOWLISTED, AND FAIL-CLOSED / FRESH EXECUTION PROOF
REQUIRED`**.

## Frozen parent, carriers, and API semantics

The authoritative retained parent remains byte-identical at:

```text
Production Pipeline/First Run/HOST06_SCIENCE_PARENT_V2.ps1
sourceCharacters=50688
sourceAsciiBytes=50688
sourceSha256=2f47b5d01dd67397654176b596ced4602622a7f35ff1a078c57ad058399ef217
```

Both embedded runtime carriers and all decoded semantics remain unchanged:

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

The launcher, prehelper, production tail, PT06 classifier, helper compile/load/
cleanup, native-handle identity, prompt, endpoint, model/options, request and
response limits, strict PNG and physical review, ordinal rules, atomic
materialization, product import, provenance, cleanup, test, build, and E2E
semantics do not change. No controller field authorizes an API request.

The sole accepted parent stdout remains the exact V2 result bound in the
retained controller. It proves `ACCEPTED_NO_REQUEST_STOP /
PT06_CREDENTIAL_GATE / CREDENTIAL_ABSENT`, child exit `87`, one child, all
activity counters `0`, and every controlled path absent. Exact parent exit
`0`, one exact accepted V2 stdout record, and zero parent stderr are all
required. An exact parent stop is bounded evidence only and remains `HOLD`.

## Exact fresh Science proof

One fresh Science role reads the full active intake, profile, this shell,
`FRVE-005-v7-VR-20`, `FRSH-005-v1-VR-23`, `FRVE-005-v7-VR-19`, the complete
retained controller, the complete retained parent, the VR-17 bootstrap
authority, `FRWO-005-v7`, and cited effective controls.

Science independently proves both retained source byte identities, strict
ASCII/LF/final-LF form, frozen carrier identities and roundtrips, split stage
ownership/order, exact controller cardinalities, and all preflight absence
facts. It performs no independent parent execution or alternate runner. If
those read-only gates pass, Science invokes the exact retained outer
controller once through exact Windows PowerShell 5.1 x64 with `-NoLogo
-NoProfile -NonInteractive -File` and the exact quoted tracked controller
path. Science captures the controller exit/stdout/stderr asynchronously.

PASS requires controller exit `0`, exactly one exact
`SCIENCE_OUTER_RESULT_V1` accepted scalar, zero controller stderr, the accepted
parent facts above, one parent execution, one child invocation, all activity
counters `0`, and exact controlled-path absence. Any controller stop, rejected
classification, nonzero exit, extra record, nonempty controller stderr,
identity mismatch, path presence, or unbounded/unknown class is exact `HOLD`.
There is no correction or retry after parent start.

PASS permits only **`POLISH VIABILITY READY / RETAINED OUTER CONTROLLER V1
AND PARENT V2 BOUNDED CREDENTIAL-CLEARED NO-REQUEST SUBGATE PASSED / MISSION
API SHELL REQUIRED`** and return to one fresh Mission Captain. Failure permits
only exact `HOLD`. Science commits only its variance and synchronized handoff
and does not push.

## Player, protection, maturity, and rollback

Mission performed no parser, bootstrap, controller, parent, child, helper,
credential, request, API, generation, media, pixel, controlled-root, product,
test, build, browser, or E2E operation. Exact activity remains:

```text
credentialValueReads=0
requestConstructions=0
sendAsyncCalls=0
directSends=0
ordinalsConsumed=0
```

Historical ordinal `1` remains consumed, opaque, inaccessible, and unchanged.
Ordinals `2` and `3` remain unstarted and unconsumed. Maturity and every
inherited OPEN record remain unchanged.

The player address remains `FR-03 / Chapter II - Drowned Archive / Host 06`.
The Host 05 handoff, one dry same-basin Stranded Lens Cradle, sole unchanged
`L02-03`, one-path rail, equal-dignity MH-40 outcomes, shared RP-012 ending,
and `successor=null` remain immutable. No branch, packet, lesson, Host 07,
reward, access, identity, authority, world response, hidden-lore answer,
RP-013, or post-ending content exists.

Repository QA quarantine, protected PDF, training tree, Martin's real browser/
profile/save, hidden lore, accepted-media bytes/pixels, OS-temp parent,
ordinal-1 residual, real managed directory, user work, VR-65, and opaque
residuals remain untouched.

Rollback removes only this shell and the retained outer controller, then
restores the immediately preceding handoff by explicit content. It never
resets the repository or touches the retained parent, frozen carriers,
controlled/product/media paths, protected state, or user work.

Mission Captain signs **`FIRST RUN SHELL READY / RETAINED OUTER SCIENCE
CONTROLLER V1 EMITS BOUNDED RESULT BEFORE FINAL CLASSIFICATION EXIT / FRESH
SCIENCE ONE-RUN PROOF REQUIRED / FRSH-005-v1-VR-24`** from exact source
`4563169e2144fe9ecb5ca18897276e4de0786a43`.
