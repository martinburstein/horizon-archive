# First Run Shell Variance - Helper Cleanup and Current-Run DLL Freeze

Variance ID: `FRSH-005-v1-VR-31`

Disposition: **`FIRST RUN SHELL READY / EXACT RETAINED HELPER CLEANUP
AUTHORIZED FIRST / PRIOR-INSTANCE DLL DIGEST REJECTED AS A REPRODUCIBILITY
PREDICATE / CURRENT-RUN BYTE FREEZE AND LATER BYTE-IDENTITY PROOF REQUIRED /
FRESH SCIENCE CLEANUP-THEN-ONE-RUN NO-REQUEST PROOF / FRSH-005-v1-VR-31`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / current Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-27`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-30`

Mission source inspected: `d7646fce4256a1b00b6bd38d5349438093b762db`

Corrected inert code candidate: `f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree: `92b22fc56d79d18cf1abf7213c5268c9e4149830`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

Exact next recipient: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Mission adjudication

Mission accepts `FRVE-005-v7-VR-27` only as immutable evidence from the sole
completed `FRSH-005-v1-VR-30` run. That run reached one successful CodeDOM
compile, retained one ordinary non-reparse `4,096`-byte DLL, and stopped at
`PT03_HELPER_COMPILE` because actual SHA-256
`5092fcfd97f14c71841213a59c895d528bfb7b387808fadf6db9be7f9e3fe25d`
did not equal prior-instance SHA-256
`39e85b32b7f8437c2b5732e26093ca5bd9a9182b048c411e9dc5660ba03f10c9`.
It performed one parent/one child, zero credential reads, zero request
constructions, zero sends, and zero ordinal consumption.

The prior-instance DLL digest predicate conflicts with `FRWO-005-v7`. CodeDOM
may embed compile-instance identity; byte reproducibility across compiles is
not a safety invariant. The safety invariant is the exact frozen C# source,
successful bounded compile, ordinary one-link/non-reparse output, a single
read that freezes current-run bytes/length/SHA, byte-only
`Assembly.Load(byte[])` of those same bytes, exact type/method/P/Invoke surface
inherited from the frozen source, and a later exclusive-handle byte observation
that exactly matches the current-run freeze before native identity acceptance
and cleanup.

Variance classification: **`REQUIRED CORRECTION / PRIOR COMPILE-INSTANCE DLL
DIGEST WAS INCORRECTLY TREATED AS REPRODUCIBLE / REPLACED BY CURRENT-RUN
FREEZE AND SAME-RUN REOBSERVATION / FRESH SCIENCE PROOF REQUIRED`**.

## Exact retained-output cleanup authorization

Before any new outer, parent, or child execution, fresh Science is authorized
to inspect and remove only these two literal controlled paths:

```text
C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-725b75e4-8083-4df5-9a80-a0301b8f00dd
C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-725b75e4-8083-4df5-9a80-a0301b8f00dd\Host06FileIdentity.dll
```

Mission's exact-path read-only adjudication observed the root as an ordinary
non-reparse directory with exactly one direct entry, the exact DLL above. The
DLL is an ordinary non-reparse file, exact `4,096` bytes, with lowercase
SHA-256
`5092fcfd97f14c71841213a59c895d528bfb7b387808fadf6db9be7f9e3fe25d`.

Science cleanup is fail-closed and nonrecursive:

1. resolve no variable, parent, sibling, glob, pattern, search, or alternate
   path;
2. require the literal root to be an ordinary non-reparse directory and the
   literal DLL to be its sole direct entry;
3. require the literal DLL to be an ordinary non-reparse file with exact
   length and SHA above;
4. delete only the literal DLL with `File.Delete`, then prove file and
   directory absence at that DLL path;
5. delete only the now-empty literal root with
   `Directory.Delete(root,false)`, then prove file and directory absence at
   that root path; and
6. stop at exact `HOLD` without deletion if any precondition differs, or
   without a new proof run if either deletion/absence proof fails.

No parent temp directory, sibling, package/compiler cache, repository path,
live attempt root, ordinal path, managed output, product path, opaque residual,
ordinal-1 residual, or VR-65 is inspected or changed. This authorization
expires once both exact paths are proven absent.

## Corrected retained controller identities

Authoritative parent:

```text
Production Pipeline/First Run/HOST06_SCIENCE_PARENT_V2.ps1
sourceCharacters=58512
sourceAsciiBytes=58512
sourceSha256=943d3e83da37d3cba45f35833e2e283b24e9e1434ed137144a7df31ae6169c39
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
sourceSha256=55a4cf00b76cee30ebca0718e0f26341957ee72727ceaa620f0a20d48c1a317f
sourceStrictAscii=true
sourceLfOnly=true
sourceFinalLF=true
parserErrors=0
```

The outer controller freezes the corrected parent identity. The stored Base64
carriers remain canonical and unchanged. The retained parent applies exactly
the prior one-LF helper-source correction plus the current-run DLL-freeze
correction before it freezes and parses the runtime carrier:

```text
launcher=2001 / 96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
runtimeCombined=27690 / 91bcba2dfd55f0f9af296a9b92bfddd48312cc65aa62aa6a318e1f8fecd72ee0
runtimePrefix=976 / 5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
runtimeTail=26714 / 69a70f77940b2dd6457242a979522b9a7d262419968c30860c6e4bf71019c632
helperSource=1693 / 98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97
```

The corrected carrier accepts no prior-instance compile digest. It requires
the emitted DLL length in `1..1,048,576`, ordinary/non-reparse status, one
initial byte read, frozen current-run length and lowercase SHA, byte-only load
of that exact byte array, the exact existing reflection surface, a later full
exclusive-stream byte read with no trailing byte, exact later SHA equality,
native one-link/non-reparse/size equality, and exact cleanup. Product
provenance, if a later authorized production run ever succeeds, records the
actual current-run DLL length/SHA rather than `39e85b...`. No helper or DLL
bytes, native tuple, diagnostic, secret, request, or response enters
provenance.

## Exact fresh Science proof

After the exact cleanup above proves both paths absent, one fresh Science role
reads the complete required intake/profile, this shell, `FRVE-005-v7-VR-27`,
`FRSH-005-v1-VR-30`, `FRVE-005-v7-VR-26`, both corrected retained sources,
complete `FRWO-005-v7`, and cited controls. It performs read-only proof of the
two source identities, outer-to-parent freeze, canonical stored carriers,
exact corrected runtime identities, unique patch seams, parser success,
unchanged stage order, frozen helper source/API surface, dynamic current-run
DLL freeze and later-byte equality, one-parent/one-child capture, credential
removal, exact PT06 record, and all `13/13` controlled paths absent.

Only after every read-only gate passes, Science may invoke the exact retained
outer controller once through Windows PowerShell 5.1 x64 with
`OPENAI_API_KEY` removed. No correction, alternate runner, cleanup, or retry
follows start. The required result remains controller `0`, one accepted parent,
one child, child exit `87`, child stdout zero, child stderr `EXACT_PT06`, stage
`PT06_CREDENTIAL_GATE`, ordinal `0`, `sendStarted=false`, exact local and
postflight absence, and zero credential/request/API/ordinal activity. Science
records its actual current-adjudication helper compile length/SHA as evidence,
never as a future reproducibility predicate. Exact pass returns `POLISH
VIABILITY READY` to one fresh Mission Captain; any mismatch returns exact
`HOLD` to its earliest owner. Science commits only its result and synchronized
handoff and does not push.

## Complete shell boundary

First-run address remains `FR-03 / Chapter II - Drowned Archive / Host 06`.
Current maturity remains unchanged. The player-facing problem/outcome, exact
Host 05 handoff, sole unchanged `L02-03`, route, copy, content, assets,
presentation, interaction, save, privacy, accessibility, offline/runtime,
performance, PBA, build, preview, E2E, and cleanup gates remain those of
`FRWO-005-v7` and the effective shell. This planning correction changes no
player-visible behavior and authorizes no production or media operation.

Entry is exact retained-output cleanup. Active states are cleanup proof,
read-only carrier adjudication, and one credential-cleared no-request proof.
Completion is exact PT06 plus postflight absence. The only exit is a fresh
Mission decision. Hard stop follows cleanup uncertainty, any preflight
mismatch, or the sole run.

Mission performed no outer, parent, child, credential, request, API,
generation, media, pixel, product, test, build, browser, E2E, or opaque
residual operation. API sends remain `0`; ordinal `1` remains opaque and
consumed; ordinals `2` and `3` remain unstarted and unconsumed.

The one-path rail, equal-dignity MH-40 outcomes, shared RP-012 ending, and
`successor=null` remain immutable. No branch, packet, lesson, Host 07, reward,
access, identity, authority, world response, Machine/Builder dialogue, hidden
lore, RP-013, or post-ending content is added. Repository QA quarantine,
protected PDF, training tree, Martin's real browser/profile/save, accepted
media, opaque residuals, VR-65, hidden lore, and user work remain untouched.

Rollback removes only this shell and restores the prior retained parent,
outer, and handoff by explicit content; it never resets the repository and
never restores or deletes temp output without a separately proven exact-path
identity.

Mission Captain signs **`FIRST RUN SHELL READY / EXACT RETAINED HELPER
CLEANUP AUTHORIZED FIRST / CURRENT-RUN DLL BYTE FREEZE REPLACES INVALID
PRIOR-INSTANCE DIGEST / FRESH SCIENCE CLEANUP-THEN-ONE-RUN NO-REQUEST PROOF /
FRSH-005-v1-VR-31`** from source
`d7646fce4256a1b00b6bd38d5349438093b762db`.
