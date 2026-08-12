# First Run Shell Variance - Bounded PT06 Child Stderr Normalization

Variance ID: `FRSH-005-v1-VR-27`

Disposition: **`FIRST RUN SHELL READY / ONE ANCHORED PT06 DIAGNOSTIC WITH
ASCII-WHITESPACE-ONLY FRAMING / EXTRA CONTENT AND OVERSIZE FAIL CLOSED /
FRESH SCIENCE ONE-RUN PROOF REQUIRED / FRSH-005-v1-VR-27`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / current Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-23`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-26`

Mission source inspected: `63849f3b3ca27fe9d868a07f57682ea5eb2bb889`

Corrected inert code candidate: `f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree: `92b22fc56d79d18cf1abf7213c5268c9e4149830`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

Exact next recipient: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Mission adjudication

Mission accepts `FRVE-005-v7-VR-23` only as the completed one-run HOLD. The
sole child exit `87`, stdout cardinality `0`, one-child cardinality, and exact
postflight absence passed; only the bounded child-stderr class differed. The
completed run is neither reinterpreted nor retried.

Read-only source review localizes the defect to an overstrict byte-equality
comparison against one LF or CRLF spelling. Windows PowerShell 5.1 host
framing may vary without changing the diagnostic record. The retained parent
now classifies bounded stderr by extracting exactly one line whose complete
content is the frozen 202-character `HOST06_PRODUCTION_FAILURE` record for
`PT06_CREDENTIAL_GATE`. The record is ordinal and case exact. After removing
that one match, the entire remainder must consist only of ASCII tab, space,
CR, or LF. Zero matches, multiple matches, a partial record, non-ASCII input,
any other non-whitespace content, an incomplete bounded capture, or more than
512 characters is fail-closed. Empty remains `EMPTY`; oversize remains
`OVERSIZE`; every other rejection remains `NONEXACT_BOUNDED`.

This removes dependence on one byte-for-byte line-ending spelling without
accepting a second diagnostic, native error body, exception, stack, credential,
response, Base64 member, path, handle, or arbitrary host text. Variance:
**`REQUIRED CORRECTION RESOLVED / BOUNDED PT06 RECORD NORMALIZER RETAINED /
FRESH EXECUTION PROOF REQUIRED`**.

## Retained source identities

The complete authoritative parent is:

```text
Production Pipeline/First Run/HOST06_SCIENCE_PARENT_V2.ps1
sourceCharacters=51179
sourceAsciiBytes=51179
sourceSha256=15f56566daf08e3cd2cd636c9dcceec92168a6c97d6638a067fcd2c63ab0e232
sourceStrictAscii=true
sourceLfOnly=true
sourceFinalLF=true
parserErrors=0
```

The outer controller changes only its frozen parent byte-length and SHA
assertions. Its complete retained identity is:

```text
Production Pipeline/First Run/HOST06_SCIENCE_OUTER_CONTROLLER_V1.ps1
sourceCharacters=11251
sourceAsciiBytes=11251
sourceSha256=b02015e7a25d94a450c4f968d0cb481023f1b51ccbd4a9cc2ed35af39706df37
sourceStrictAscii=true
sourceLfOnly=true
sourceFinalLF=true
parserErrors=0
```

The launcher, combined carrier, prefix, production tail, helper, endpoint,
model/options, prompt, ordinal, materialization, review, cleanup, provenance,
product, test, build, and E2E semantics remain byte-identical to
`FRSH-005-v1-VR-26` and its effective predecessors. Their frozen decoded
identities remain:

```text
launcher=2001 / 96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
combined=27044 / 015dfd96befad29793892f1e15dc9ff4362ff8cec0ae4ce7b9c45b5da9e125f3
prefix=976 / 5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
tail=26068 / e9815ce8f988bca0f1f9bd14a7ba50cfa4935b3d7a47492c95bfa90986b7070c
```

## Exact fresh Science proof

One fresh Science role reads the complete active intake/profile, this shell,
`FRVE-005-v7-VR-23`, `FRSH-005-v1-VR-26`, `FRVE-005-v7-VR-22`, both retained
sources, `FRWO-005-v7`, and cited controls. It independently verifies exact
source/carrier identities, parser and stage order, the bounded normalizer's
single-record/whitespace-only rejection rules, cardinality, and `13/13`
preflight absence.

Only after every read-only gate passes, Science invokes the exact outer
controller once through Windows PowerShell 5.1 x64 with the exact tracked
path. It dual-drains, waits for EOF/native completion, and retains only the
bounded scalar. There is no correction or retry after start.

PASS requires controller exit `0`, one exact accepted scalar, zero controller
stderr, one parent, one child, child exit `87`, child stdout zero, accepted
PT06 classification, all zero activity counters, and exact postflight
absence. PASS returns `POLISH VIABILITY READY` to one fresh Mission Captain
for a separate API shell. Any mismatch is exact HOLD. Science commits only
its variance and handoff and does not push.

## Protection, activity, and rollback

Mission performed no controller, parent, child, credential, request, API,
generation, media, pixel, product, test, build, browser, E2E, or residual
operation. API sends remain `0`; ordinal `1` remains opaque and consumed;
ordinals `2` and `3` remain unstarted and unconsumed. All controlled paths
remain absent. Maturity and OPEN records are unchanged.

The Host 05 handoff, sole unchanged `L02-03`, one-path rail, equal-dignity
MH-40 outcomes, shared RP-012 ending, and `successor=null` remain immutable.
No branch, packet, lesson, Host 07, reward, access, identity, authority, world
response, hidden lore, RP-013, or post-ending content is added. Protected user
state, repository QA quarantine, PDF, training tree, accepted media, opaque
residuals, VR-65, browser/profile/save, and hidden lore remain untouched.

Rollback explicitly restores the two immediately preceding retained-source
files, removes only this shell, and restores the prior handoff. It never resets
the repository or touches controlled, product, media, protected, or user state.

Mission Captain signs **`FIRST RUN SHELL READY / BOUNDED SINGLE PT06 STDERR
NORMALIZATION RETAINED / FRESH SCIENCE ONE-RUN PROOF REQUIRED /
FRSH-005-v1-VR-27`** from source
`63849f3b3ca27fe9d868a07f57682ea5eb2bb889`.
