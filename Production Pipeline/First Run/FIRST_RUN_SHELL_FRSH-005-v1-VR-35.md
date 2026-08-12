# First Run Shell - Host 06 v8 A1 Redirected-Standard-Input Revision

Shell ID: `FRSH-005-v1-VR-35`

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / viability: `FRWO-005-v8` / `FRVE-005-v8` plus
`FRVE-005-v8-VR-01`

Disposition: **`FIRST RUN SHELL READY / EXACTLY ONE FRESH A1 / FILELESS
REDIRECTED-STANDARD-INPUT CARRIER DELIVERY / COMPLETE SOURCES RETAINED / NO
RETRY / FRSH-005-v1-VR-35`**

Date: **2026-08-12**

Mission source: `2a62ceb0121c11b956c228f6a188103e87db9c88`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Planning controls: `FRRM-005-v8` / `FRSB-005-v8`

First-run address: `FR-03 / Chapter II - Drowned Archive / Host 06`

Current / target maturity: physical-host expression remains `FR0 - 1 accepted
shared compression / 1 exact / 10 missing`; the bounded target after
independent release remains `1 accepted shared compression / 2 exact / 9
missing`. Mission advances no maturity.

Exact next owner: one fresh Quartermaster / `quartermaster`

## Mission decision

Mission accepts `FRVE-005-v8-VR-01` and replaces only the failed process-
environment carrier binding in terminal `FRSH-005-v1-VR-34`. The obsolete
`HORIZON_ARCHIVE_HOST06_PREHELPER_V1` value is absent. The exact carrier moves
through one closed redirected-standard-input stream. All request, prompt,
response, helper, materialization, review, product, cleanup, no-reveal, sole-
`A1`, validation, canon, learning, state, and release boundaries of the
complete terminal shell remain unchanged and are incorporated here.

The complete executable sources retained before authorization are:

```text
launcher=Production Pipeline/First Run/HOST06_V8_A1_LAUNCHER.ps1
launcher bytes=2,638
launcher SHA-256=0465a17fd73c3f732832cd4ecb0260ca0a8ac1959c5644e6ef6d0f4c7badd83b

parent=Production Pipeline/First Run/HOST06_V8_A1_STDIN_PARENT.ps1
parent bytes=2,878
parent SHA-256=904cf031c3194e3c65b97727518d65511526a748cc94531d1426db24d2602ce4

fixture controller=Production Pipeline/First Run/HOST06_V8_A1_STDIN_FIXTURE_CONTROLLER.ps1
controller bytes=2,192
controller SHA-256=f0340fcacc9989f0de92a9ae7196af8b0be6c1915e9600aa462096e126608726

carrier=Production Pipeline/First Run/HOST06_V8_A1_PRODUCTION_CARRIER.ps1
carrier bytes=33,638
carrier SHA-256=81e82f1b4f6bd936c4002f969ea6896533673ef7d03b4eef23b7953e7fcbe491

construction record=Production Pipeline/First Run/BUILD_HOST06_V8_A1_CARRIER.ps1
```

Any identity mismatch is terminal before process launch. The builder is
reproducibility evidence only and is not live execution authority.

## Exact fileless delivery contract

The parent reads the retained carrier once as bytes, requires exact byte
length, SHA-256, ASCII, strict UTF-8 character length, and zero parse errors,
then verifies the retained launcher identity and parser result. It starts one
Windows PowerShell 5.1 child with exact arguments:

```text
-NoLogo -NoProfile -NonInteractive -File "<exact retained launcher path>"
```

`UseShellExecute=false`, `CreateNoWindow=true`, and standard input, output,
and error are redirected. The obsolete carrier environment name is explicitly
removed. `OPENAI_API_KEY` is neither read, copied, cleared, logged, nor
projected by the parent; it remains a separately inherited process value.

After starting exactly one child, the parent performs exactly one
`StandardInput.Write(carrier)` call and closes standard input in `finally`.
It performs no second write, relaunch, alternate binding, encoded command,
environment chunking, carrier source/intermediate file, retry, or fallback.
It drains bounded child output, waits once, forwards only bounded safe child
records, and returns the child's exact exit code.

The launcher performs exactly one `[Console]::In.ReadToEnd()`. It rejects
empty input, wrong character or byte length, non-ASCII, strict-UTF-8 failure,
SHA mismatch, or parser error before invocation. After exact identity and one
parser pass, it creates one `ScriptBlock` and invokes it once. Carrier source,
bytes, tokens, errors, and block references are cleared in `finally`.

Only the unchanged production carrier may read `OPENAI_API_KEY`, at unchanged
`PT06_CREDENTIAL_GATE` after helper cleanup. Any delivery, identity, parse,
invocation, process, output, or cleanup mismatch is a pre-send terminal HOLD,
does not consume `A1`, and authorizes no second launch under this shell.

## Fixture and static evidence

All four retained PowerShell sources parser-check with zero errors. Mission
ran one credential-cleared fixture controller. It started one parent and one
child, completed exact stdin delivery, child-side length/SHA/ASCII/parser and
one ScriptBlock invocation, and stopped fail-closed at the unchanged carrier's
`PT02_HELPER_SOURCE` identity check on this host. Exact evidence:

```text
HOST06_V8_STDIN_FIXTURE_PASS|earliestStage=PT02_HELPER_SOURCE|childInvocations=1|credentialReads=0|requestConstructions=0|sendAsyncCalls=0|apiSends=0|A1Consumed=false|controlledPathsAbsent=true
```

This is delivery proof, not a production outcome and not authority to change
the frozen carrier. No credential, request, API, response, media, pixel,
product, provenance, registry, or runtime state was read or created. Exact
helper/live/product roots were absent after the run.

## Complete retained production envelope

The sole eventual player-visible outcome remains exact Host 05 mastery -> one
distinct local dry Host 06 Stranded Lens Cradle -> sole unchanged `L02-03` ->
unchanged next Drowned boundary. The exact `HOST06-GEN-PROMPT-v1`, seven-member
`gpt-image-2` request, one output, 3840x2160 opaque high-quality PNG, native
HttpClient transport, strict official response parser, bounded safe diagnostic,
native handle identity, create-new/flush/atomic no-replace materialization,
technical and physical review, byte-identical import, provenance, integration,
accessibility, performance, offline, save/privacy, build, served identity, PBA,
and bounded E2E contracts are unchanged from terminal VR-34.

`A1` begins only when the sole authoritative `SendAsync` begins and is consumed
regardless of outcome. No `A2`, retry, redirect, alternate request, continuation,
fallback, edit, variation, second output, or later attempt exists. Before send,
all helper/live/A1/product paths must be absent. Every rejected result has zero
authority, remains unrevealed and outside the workspace, and is cleaned only by
exact owned identity. Only a fully passing A1 may be imported create-new and
byte-identically to the predeclared Host 06 raster plus `PROVENANCE.md`.

Quartermaster must independently reproduce every retained source identity and
path absence immediately before executing the retained parent once. It may not
repair, rebuild, or alter any execution source in the live attempt. Full pass
yields `PRODUCTION CONTENT COMPLETE`, a dedicated commit/push, and one fresh
Image Specialist. Any pre-send or post-send failure yields exact terminal HOLD,
safe cleanup, no retry, and return to the earliest owner.

## Production freedoms, definition of done, and rollback

Quartermaster retains only the exact freedoms stated in VR-34: sole A1 call,
objective accept/reject, byte-identical accepted import, provenance, and the
already-approved Host 06 content/registry integration. Image Specialist remains
runtime code/configuration presentation only around unchanged accepted media.
Recon, Tactical, and Combat accepted controls remain closed.

Done is either one exact fully passing A1 with product/provenance/integration,
all validations passing, owned temp paths absent, dedicated pushed content
commit, and Image Specialist handoff; or an exact terminal HOLD with safe
bounded evidence, no rejected residue/reveal, and earliest-owner routing.
Rollback never resets the repository and may remove only identity-proved,
create-new v8-owned material and empty exact owned roots.

## Immutable and protected boundaries

Repository QA quarantine, protected PDF, training tree, Martin's real
browser/profile/save, accepted-media bytes/pixels, all v7 paths/ordinals/
residuals, managed or opaque residuals, VR-65, hidden lore, and unrelated work
remain inaccessible. Accepted media remain exact `17 / 37,410,731`, manifest
SHA-256 `a674c337b377de113eaa4c6763bd431afc73ab613374a76501aa8c5ce37e5437`,
tuple digest `c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`
until a fully passing A1 is truthfully imported.

The one-path rail, sole unchanged `L02-03`, no-cross-credit, privacy/evidence
ownership, equal-dignity MH-40 outcomes, shared RP-012 ending, all null deltas,
and `successor=null` are immutable. No branch, packet, lesson, answer, reward,
access, identity, authority, world response, Builder/Machine dialogue, Host 07+,
RP-013, successor, or post-ending content is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / FRSH-005-v1-VR-35 / ONE
FRESH A1 / EXACT FILELESS REDIRECTED-STDIN CARRIER DELIVERY / COMPLETE SOURCES
BYTE-FROZEN / NO RETRY / QUARTERMASTER NEXT`**.
