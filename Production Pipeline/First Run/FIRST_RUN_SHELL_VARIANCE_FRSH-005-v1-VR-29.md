# First Run Shell Variance - Bounded Raw PT06 Diagnostic Localization

Variance ID: `FRSH-005-v1-VR-29`

Disposition: **`FIRST RUN SHELL READY / ENTIRE BOUNDED RAW CHILD STDERR
RETURNED AS CANONICAL BASE64 WITH INDEPENDENT FACTS / ACCEPTANCE UNCHANGED /
FRESH SCIENCE ONE-RUN LOCALIZATION REQUIRED / FRSH-005-v1-VR-29`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / current Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-25`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-28`

Mission source inspected: `043df3129870d9c6e1be62957bf131ed739f308e`

Corrected inert code candidate: `f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree: `92b22fc56d79d18cf1abf7213c5268c9e4149830`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

Exact next recipient: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Mission adjudication

Mission accepts `FRVE-005-v7-VR-25` only as the immutable completed HOLD from
the sole `FRSH-005-v1-VR-28` run. That run remains controller exit `89`,
parent exit `88`, one parent, one child, child exit `87`, child stdout zero,
raw child stderr `NONEXACT_BOUNDED`, controller stderr zero, zero activity,
and `13/13` postflight absence. It is not reinterpreted or retried.

The direct raw-byte capture proved that the entire stderr stream is bounded at
no more than `512` bytes, but the prior result intentionally discarded its
body. The exact PT06 mismatch therefore cannot yet be adjudicated. This shell
authorizes one localization-only revision: the retained parent returns the
entire already-bounded child stderr as canonical RFC 4648 Base64, together
with facts sufficient for the retained outer controller and fresh Science to
verify the projection without guessing.

The child acceptance language remains byte-for-byte unchanged. `EXACT_PT06`
still requires exactly one ordinal- and case-exact frozen 202-byte
`HOST06_PRODUCTION_FAILURE` record and only ASCII tab, space, CR, or LF outside
that record. The new fields do not satisfy, replace, relax, normalize, or
reinterpret that predicate. They localize why the unchanged predicate failed.

Variance: **`REQUIRED CORRECTION / NONEXACT_BOUNDED BODY WAS DISCARDED /
BOUNDED CANONICAL BASE64 LOCALIZATION AUTHORIZED / FRESH EXECUTION PROOF
REQUIRED`**.

## Retained corrected source identities

The complete corrected parent is retained at:

```text
Production Pipeline/First Run/HOST06_SCIENCE_PARENT_V2.ps1
sourceCharacters=52900
sourceAsciiBytes=52900
sourceSha256=59915b373283f78408df07a2f3ad37e01ed8ce4cb963b03eb453385c531009f0
sourceStrictAscii=true
sourceLfOnly=true
sourceFinalLF=true
parserErrors=0
```

The complete corrected outer controller is retained at:

```text
Production Pipeline/First Run/HOST06_SCIENCE_OUTER_CONTROLLER_V1.ps1
sourceCharacters=15559
sourceAsciiBytes=15559
sourceSha256=2ba96ebf1bfd9ba25db1dbba1ceb03314ee657283b4ad0600ba4f09a9787e158
sourceStrictAscii=true
sourceLfOnly=true
sourceFinalLF=true
parserErrors=0
```

The outer's frozen parent length, character count, and SHA assertions match
the corrected parent. Existing `.gitattributes` exact LF rules for both
sources remain unchanged.

The launcher, combined carrier, prehelper prefix, production tail, child
executable, argument construction, environment carrier, removed credential,
stage order, request, endpoint, model/options, prompt, helper, ordinal,
materialization, review, cleanup, provenance, product, test, build, and E2E
bytes and semantics remain unchanged:

```text
launcher=2001 / 96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
combined=27044 / 015dfd96befad29793892f1e15dc9ff4362ff8cec0ae4ce7b9c45b5da9e125f3
prefix=976 / 5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
tail=26068 / e9815ce8f988bca0f1f9bd14a7ba50cfa4935b3d7a47492c95bfa90986b7070c
```

## Exact bounded localization contract

The parent continues to dual-drain `StandardOutput.BaseStream` and
`StandardError.BaseStream`, count the complete streams, retain only the first
`512` stderr bytes, wait for both EOFs, and then wait for native process exit.
For a complete stderr stream of `0..512` bytes, its exact stop record appends:

```text
childStderrLength=<decimal 0..512>
childStderrSha256=<lowercase 64-hex SHA-256>
childStderrBase64=<canonical RFC 4648 Base64, 0..684 ASCII characters>
childStderrAscii=<true|false>
childStderrCrCount=<decimal count of byte 0x0d>
childStderrLfCount=<decimal count of byte 0x0a>
childStderrRecordOccurrences=<decimal raw-byte occurrences of the exact frozen 202-byte record>
```

The same stop record retains `childExit` and `childStdout` facts. No API key,
authorization header, credential value, request JSON, response JSON, response
body, image Base64, media byte, native handle value, exception, stack, secret,
or product content may enter any localization field. The child is credential-
cleared before invocation and stops at PT06 before request construction, so
the bounded body is the expected nonsecret local diagnostic surface.

The outer accepts the expanded parent stop schema only when it independently:

1. parses every new field with exact ordinal names and bounded alphabets;
2. requires length `0..512` and Base64 length `0..684`;
3. decodes the Base64 and requires canonical round-trip equality;
4. recomputes decoded length and lowercase SHA-256;
5. recomputes strict ASCII truth and raw CR/LF byte counts;
6. raw-byte counts occurrences of the exact frozen 202-byte PT06 record; and
7. matches every recomputed fact to the parent field.

Any absent, malformed, oversize, noncanonical, undecodable, inconsistent, or
unverifiable field remains `NONEXACT_BOUNDED` at the outer boundary. The outer
projects the exact validated fields, plus parent exit, parent stdout/stderr,
parent stop stage/code, child exit/stdout/stderr facts, child cardinality, and
postflight absence, in its sole bounded stdout scalar. The localization does
not create an accepted production result; this expected mismatch still exits
parent `88` and controller `89`.

## Exact fresh Science proof

One fresh Science role reads the complete active intake/profile, this shell,
`FRVE-005-v7-VR-25`, `FRSH-005-v1-VR-28`, `FRVE-005-v7-VR-24`, both retained
sources, `FRWO-005-v7`, and cited effective controls. It independently proves:

1. both corrected source identities, strict ASCII/LF/final-LF form, and zero
   parser errors;
2. exact unchanged launcher, carrier, prefix, tail, child executable, argv,
   environment carrier, credential removal, stage order, and exact PT06
   acceptance predicate;
3. one direct child start, raw dual-stream drains, complete counts, 512-byte
   maximum stderr retention, bounded canonical Base64 projection, independent
   outer recomputation, one-parent/one-child cardinality, and no native
   PowerShell pipeline capture;
4. all `13/13` controlled paths absent before execution.

Only after every read-only gate passes, Science invokes the exact retained
outer controller once through Windows PowerShell 5.1 x64 using the exact
tracked path. There is no correction, alternate runner, or retry after start.

The expected localization result is controller exit `89`, parent exit `88`,
one parent, one child, child exit `87`, child stdout zero,
`childStderrFact=NONEXACT_BOUNDED`, one validated raw length/SHA/Base64/ASCII/
CR/LF/occurrence tuple, zero controller stderr, zero activity, and exact
postflight absence. Science decodes the canonical Base64 only in memory,
compares it byte-for-byte with the frozen expected diagnostic and allowed
framing, reports the exact mismatch without exposing a secret, request value,
or unrelated path, and preserves the Base64 and objective scalar facts in its
variance. It does not write the decoded body to disk.

If the raw body makes the correction exact and bounded, Science returns HOLD
to one fresh Mission Captain with the precise byte-level cause and no retry.
Any other mismatch is exact HOLD to the earliest owner. Science commits only
its variance and synchronized handoff and does not push.

## Shell contract and protected boundaries

First-run address remains `FR-03 / Chapter II - Drowned Archive / Host 06`.
Current maturity remains unchanged; this localization advances no maturity.
The eventual felt outcome remains the one approved local dry Stranded Lens
Cradle integrated with sole unchanged `L02-03`; production does not begin.

Entry is fresh Science read-only validation. Active state is one credential-
cleared, no-request outer/parent/child localization. Completion is the one
validated bounded raw tuple and exact postflight absence. The only exit is
HOLD to fresh Mission or the earliest owner. Hard stop follows the sole run or
any mismatch. Rollback removes only this shell and restores the immediately
preceding retained sources and handoff by explicit content; it never resets
the repository.

Mission performed no controller, parent, child, credential, request, API,
generation, media, pixel, product, test, build, browser, E2E, or residual
operation. API sends remain `0`; ordinal `1` remains opaque and consumed;
ordinals `2` and `3` remain unstarted and unconsumed. All controlled paths
remain absent. No accepted media was reused or changed.

The Host 05 handoff, sole unchanged `L02-03`, one-path rail, equal-dignity
MH-40 outcomes, shared RP-012 ending, and `successor=null` remain immutable.
No branch, packet, lesson, Host 07, reward, access, identity, authority, world
response, Machine/Builder dialogue, hidden lore, RP-013, or post-ending
content is added.

Repository QA quarantine, protected PDF, training tree, Martin's real
browser/profile/save, accepted media, opaque residuals, VR-65, hidden lore,
and user work remain untouched. No role may route to Quartermaster, call the
API, consume an ordinal, inspect pixels, reveal media, advance maturity, close
an OPEN record, release, or call `FIRST RUN COMPLETE` from this shell.

Mission Captain signs **`FIRST RUN SHELL READY / BOUNDED RAW CHILD STDERR
LOCALIZATION VIA CANONICAL BASE64 / ACCEPTANCE UNCHANGED / FRESH SCIENCE ONE-
RUN PROOF REQUIRED / FRSH-005-v1-VR-29`** from source
`043df3129870d9c6e1be62957bf131ed739f308e`.
