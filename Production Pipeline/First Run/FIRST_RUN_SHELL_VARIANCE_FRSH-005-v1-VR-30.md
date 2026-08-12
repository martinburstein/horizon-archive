# First Run Shell Variance - Exact PT02 Helper Source Correction

Variance ID: `FRSH-005-v1-VR-30`

Disposition: **`FIRST RUN SHELL READY / PT02 TERMINAL-LF CONSTRUCTION
CORRECTED / FROZEN HELPER IDENTITY AND API SEMANTICS PRESERVED / FRESH SCIENCE
ONE-RUN NO-REQUEST PROOF REQUIRED / FRSH-005-v1-VR-30`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / current Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-26`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-29`

Mission source inspected: `1436b449cdcc0e51a988a4346c1dd801ce86467e`

Corrected inert code candidate: `f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree: `92b22fc56d79d18cf1abf7213c5268c9e4149830`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

Exact next recipient: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Mission adjudication

Mission accepts `FRVE-005-v7-VR-26` only as immutable evidence from the sole
completed `FRSH-005-v1-VR-29` run: controller `89`, parent `88`, one parent,
one child, child exit `87`, child stdout zero, one validated canonical Base64
diagnostic at actual `PT02_HELPER_SOURCE`, zero API activity, and exact `13/13`
postflight absence. The completed child is not decoded again, reinterpreted,
or retried.

Read-only source adjudication localized one deterministic construction defect.
The embedded C# body visibly contains `1,693` strict-UTF-8/LF bytes with SHA-256
`98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97`
when its intended terminal LF is included. PowerShell here-string evaluation
does not include the newline immediately before the closing marker in the
runtime string. The child therefore constructed `1,692` bytes before the
frozen `1,693`-byte predicate and stopped at `PT02_HELPER_SOURCE`.

Mission corrects only that mismatch. The retained parent deterministically
finds the one exact helper-source closing-marker/UTF-8-constructor seam in the
frozen decoded production carrier and inserts exactly:

```powershell
  $helperSource += [char]10
```

The corrected runtime carrier is then frozen by exact length and SHA-256
before parsing or child invocation. This preserves the previously approved
helper source identity, compiler input, native bridge API, request behavior,
prompt, endpoint, cleanup, ordinals, product rules, and all post-PT02
semantics. It does not weaken the helper predicate or substitute the
`1,692`-byte value.

Variance: **`REQUIRED CORRECTION / HERE-STRING TERMINAL LF OMITTED AT RUNTIME /
EXACT ONE-LF CONSTRUCTION RESTORED / FRESH EXECUTION PROOF REQUIRED`**.

## Corrected retained identities

Authoritative parent:

```text
Production Pipeline/First Run/HOST06_SCIENCE_PARENT_V2.ps1
sourceCharacters=54026
sourceAsciiBytes=54026
sourceSha256=ac0bef04361a9ebb5e473b11c54e314d88f41182b7140b7d631256e79530e60f
sourceStrictAscii=true
sourceLfOnly=true
sourceFinalLF=true
parserErrors=0
```

Authoritative outer controller:

```text
Production Pipeline/First Run/HOST06_SCIENCE_OUTER_CONTROLLER_V1.ps1
sourceCharacters=15559
sourceAsciiBytes=15559
sourceSha256=3a2994b0cbb0a607b92092c9c43cf9bb45f0595fe519fa5a1bcb095f1a044b26
sourceStrictAscii=true
sourceLfOnly=true
sourceFinalLF=true
parserErrors=0
```

The outer controller's exact parent length, character count, and SHA-256
assertions match the corrected parent.

The stored Base64 carrier remains the prior validated canonical carrier and is
checked before materialization. The exact runtime carrier delivered to the
credential-cleared child is now:

```text
launcher=2001 / 96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
runtimeCombined=27072 / c05bf41467e6272e890607e8848e6f3354311071942166804a4d2d7444e71158
runtimePrefix=976 / 5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
runtimeTail=26096 / 580a11aacd59301265f4e86abc83dc973cff68b9efac015b626086b42a37836e
helperSource=1693 / 98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97
helperDll=4096 / 39e85b32b7f8437c2b5732e26093ca5bd9a9182b048c411e9dc5660ba03f10c9
```

Only the exact terminal-LF construction statement changes the runtime tail.
The launcher and prehelper prefix remain byte-identical. Mission reviewed the
complete decoded carrier read-only and changed no credential, request,
endpoint, model/options, prompt, response, native-handle method, ordinal,
materialization, review, cleanup, provenance, product, test, build, or E2E
semantic.

## Exact fresh Science proof

One fresh Science role reads the complete active intake/profile, this shell,
`FRVE-005-v7-VR-26`, `FRSH-005-v1-VR-29`, both retained sources,
`FRWO-005-v7`, and cited controls. It performs read-only proof of:

1. both corrected retained source identities, strict ASCII/LF/final-LF form,
   parser success, and exact outer-to-parent identity;
2. the canonical stored carriers and exact corrected runtime launcher,
   combined, prefix, tail, helper-source, and DLL predicates;
3. exactly one ordinal helper-source seam, exactly one appended LF, unchanged
   stage order, child executable/argv/environment carrier, credential removal,
   exact PT06 acceptance record, one-parent/one-child cardinality, and raw
   dual-stream capture; and
4. all `13/13` controlled paths absent before execution.

Only after every read-only gate passes, Science may invoke the exact retained
outer controller once through Windows PowerShell 5.1 x64 with
`OPENAI_API_KEY` removed from the outer environment. No correction, alternate
runner, or retry is permitted after start.

The required result is controller `0`, one accepted parent, one child, child
exit `87`, child stdout zero, child stderr `EXACT_PT06`, stage
`PT06_CREDENTIAL_GATE`, ordinal `0`, `sendStarted=false`, all exact local
absence booleans true, zero API/request activity, and exact postflight absence.
Science returns `POLISH VIABILITY READY` to one fresh Mission Captain only on
that exact proof; every mismatch is exact HOLD to the earliest owner. Science
commits only its result and synchronized handoff and does not push.

## Shell contract and protected boundaries

First-run address remains `FR-03 / Chapter II - Drowned Archive / Host 06`.
Current maturity remains unchanged. Entry is fresh Science validation; active
state is one credential-cleared no-request proof; completion is exact PT06 and
postflight absence. The only next exit is a fresh Mission decision. Hard stop
follows the sole run or any mismatch.

Mission performed no controller, parent, child, credential, request, API,
generation, media, pixel, product, test, build, browser, E2E, or residual
operation. API sends remain `0`; ordinal `1` remains opaque and consumed;
ordinals `2` and `3` remain unstarted and unconsumed. All controlled paths
remain absent.

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

Rollback removes only this shell and restores the prior retained parent,
outer, and handoff by explicit content. It never resets the repository.

Mission Captain signs **`FIRST RUN SHELL READY / EXACT HELPER TERMINAL-LF
CONSTRUCTION RESTORED / FROZEN HELPER AND API SEMANTICS PRESERVED / FRESH
SCIENCE ONE-RUN NO-REQUEST PROOF REQUIRED / FRSH-005-v1-VR-30`** from source
`1436b449cdcc0e51a988a4346c1dd801ce86467e`.
