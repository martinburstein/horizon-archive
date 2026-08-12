# First Run Shell Variance - Raw PT06 Child Stream Capture

Variance ID: `FRSH-005-v1-VR-28`

Disposition: **`FIRST RUN SHELL READY / DIRECT PROCESS RAW-BYTE DUAL-STREAM
CAPTURE / UNCHANGED EXACT PT06 RECORD PREDICATE / FRESH SCIENCE ONE-RUN PROOF
REQUIRED / FRSH-005-v1-VR-28`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / current Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-24`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-27`

Mission source inspected: `c89816a4f5268530f4b99c093c26a52e8244ba62`

Corrected inert code candidate: `f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree: `92b22fc56d79d18cf1abf7213c5268c9e4149830`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

Exact next recipient: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Mission adjudication

Mission accepts `FRVE-005-v7-VR-24` only as the completed one-run HOLD. Its
sole child exit `87`, stdout zero, one-parent/one-child cardinality, zero
activity, and exact controlled-path absence remain passing facts. The sole
failed fact remains `childStderrFact=NONEXACT_BOUNDED`. The completed run is
never reinterpreted or retried.

Read-only source review found that the retained parent already launches the
frozen child directly with `System.Diagnostics.Process`, but its asynchronous
drains still passed through `StandardOutput` and `StandardError` text readers.
That character-decoding layer is unnecessary for an ASCII-only diagnostic and
can alter the observed framing before the exact predicate sees it.

This revision corrects only that deterministic capture mechanism. The parent
dual-drains `StandardOutput.BaseStream` and `StandardError.BaseStream`
asynchronously into byte arrays. It counts the complete byte streams, retains
at most the first `512` stderr bytes in a `MemoryStream`, waits for both EOFs,
then waits for native process exit. It decodes retained stderr with ASCII only
when every retained byte is in `0..127`; otherwise the existing predicate
fails closed. The stdout acceptance remains exactly zero bytes.

The accepted content language is not broadened. `EXACT_PT06` still requires
exactly one ordinal- and case-exact frozen 202-byte
`HOST06_PRODUCTION_FAILURE` record and only ASCII tab, space, CR, or LF outside
that record. Empty, oversize, incomplete capture, non-ASCII, zero or multiple
records, partial record, extra diagnostic/body/exception/stack/path/handle
content, or any other byte remains fail-closed.

Variance: **`REQUIRED CORRECTION RESOLVED / CHARACTER-READER CAPTURE REMOVED /
RAW REDIRECTED BASE-STREAM DRAINS RETAINED / FRESH EXECUTION PROOF REQUIRED`**.

## Retained source identities

The corrected complete parent is retained at:

```text
Production Pipeline/First Run/HOST06_SCIENCE_PARENT_V2.ps1
sourceCharacters=51241
sourceAsciiBytes=51241
sourceSha256=60755e9374d56ba0d9d96ed763a9b44840c2819d90979734370f843124c297f7
sourceStrictAscii=true
sourceLfOnly=true
sourceFinalLF=true
parserErrors=0
```

The outer controller changes only its frozen parent byte-length, character-
length, and SHA assertions. Its complete retained identity is:

```text
Production Pipeline/First Run/HOST06_SCIENCE_OUTER_CONTROLLER_V1.ps1
sourceCharacters=11251
sourceAsciiBytes=11251
sourceSha256=3c24022c1d88746e01a8b0aa50587fd051ba5b30b114a5c3215cab23ad3bfcaf
sourceStrictAscii=true
sourceLfOnly=true
sourceFinalLF=true
parserErrors=0
```

The exact child executable, argument construction, launcher bytes, environment
name/value, removed credential, and runtime remain unchanged:

```text
executable=C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
arguments=-NoLogo -NoProfile -NonInteractive -Command <exact frozen launcher>
argumentsAscii=2047 / 1e0cb2c7d73001533ea89a4a67a2458582627740f04a0b671ee03aa5a68a1752
environmentName=HORIZON_ARCHIVE_HOST06_PREHELPER_V1
environmentNameAscii=35 / 36272799c07246832217306690f3cec6a114cb5d7104437f41d77002297a5555
environmentValue=<exact frozen combined carrier>
removedEnvironmentName=OPENAI_API_KEY
launcher=2001 / 96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
combined=27044 / 015dfd96befad29793892f1e15dc9ff4362ff8cec0ae4ce7b9c45b5da9e125f3
prefix=976 / 5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
tail=26068 / e9815ce8f988bca0f1f9bd14a7ba50cfa4935b3d7a47492c95bfa90986b7070c
```

No launcher, carrier, helper, production-tail, endpoint, model/options,
prompt, ordinal, materialization, review, cleanup, provenance, product, test,
build, or E2E byte or semantic changed.

Changed files are limited to the retained parent capture mechanism, the outer
parent-identity assertions, one exact `.gitattributes` LF rule for the outer,
this shell, and the synchronized handoff. The existing exact LF rule for the
parent remains unchanged.

## Exact fresh Science proof

One fresh Science role reads the complete active intake/profile, this shell,
`FRVE-005-v7-VR-24`, `FRSH-005-v1-VR-27`, `FRVE-005-v7-VR-23`, both retained
sources, `FRWO-005-v7`, and cited effective controls. It independently proves:

1. both retained source identities, strict ASCII/LF/final-LF form, and parser
   gates;
2. exact unchanged launcher, combined carrier, prefix, tail, child executable,
   argv construction, environment carrier, credential removal, and stage order;
3. one direct child `Process.Start`, redirected stdout/stderr base-stream
   `ReadAsync` drains, complete byte counts, bounded stderr retention, raw ASCII
   gate, exact unchanged normalizer, one-parent/one-child cardinality, and no
   native PowerShell pipeline capture;
4. all `13/13` controlled paths absent before execution.

Only after every read-only gate passes, Science invokes the exact retained
outer controller exactly once through Windows PowerShell 5.1 x64 with the
exact tracked path. It asynchronously dual-drains, waits for EOF and native
completion, and retains only the bounded scalar. There is no correction,
alternate runner, or retry after start.

PASS requires controller exit `0`, one exact accepted scalar, zero controller
stderr, one parent, one child, child exit `87`, child stdout zero, accepted
PT06 classification, every activity counter zero, and exact postflight
absence. PASS returns `POLISH VIABILITY READY` to one fresh Mission Captain for
a separate API execution shell. Any mismatch is exact HOLD and returns to the
earliest owner. Science commits only its variance and handoff and does not
push.

## Shell contract and protected boundaries

First-run address remains `FR-03 / Chapter II - Drowned Archive / Host 06`.
Current maturity remains unchanged; this proof advances no maturity. The felt
outcome and eventual target remain the one approved local dry Stranded Lens
Cradle integrated with sole unchanged `L02-03`; no production work begins in
this proof.

Entry is the fresh Science read-only gate. Active state is one credential-
cleared no-request outer/parent/child proof. Completion is only the exact PASS
scalar and postflight absence. The only permitted exit is PASS to fresh Mission
or exact HOLD to the earliest owner. Hard stop follows the sole run or any gate
mismatch. Rollback removes only this shell and restores the two immediately
preceding retained sources, the one added outer-controller LF rule, and prior
handoff by explicit content; it never resets the repository.

Mission performed no controller, parent, child, credential, request, API,
generation, media, pixel, product, test, build, browser, E2E, or residual
operation. API sends remain `0`; ordinal `1` remains opaque and consumed;
ordinals `2` and `3` remain unstarted and unconsumed. All controlled paths
remain absent. No accepted media is reused or changed in this stage.

The Host 05 handoff, sole unchanged `L02-03`, one-path rail, equal-dignity
MH-40 outcomes, shared RP-012 ending, and `successor=null` remain immutable.
No branch, packet, lesson, Host 07, reward, access, identity, authority, world
response, Machine/Builder dialogue, hidden lore, RP-013, or post-ending content
is added.

Repository QA quarantine, protected PDF, training tree, Martin's real
browser/profile/save, accepted media, opaque residuals, VR-65, hidden lore,
and user work remain untouched. No role may route to Quartermaster, call the
API, consume an ordinal, inspect pixels, reveal media, advance maturity, close
an OPEN record, release, or call `FIRST RUN COMPLETE` from this shell.

Mission Captain signs **`FIRST RUN SHELL READY / RAW REDIRECTED CHILD STREAM
CAPTURE RETAINED / UNCHANGED EXACT PT06 CONTENT PREDICATE / FRESH SCIENCE
ONE-RUN PROOF REQUIRED / FRSH-005-v1-VR-28`** from source
`c89816a4f5268530f4b99c093c26a52e8244ba62`.
