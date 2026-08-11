# Horizon Archive First Run Polish Viability Variance

Variance ID: `FRVE-005-v7-VR-05`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-005-v7 / Stranded Lens Cradle - Direct Image API Source,
Native Handle Identity, and Fixed Lesson Integration`

Disposition: **`HOLD / SINGLE PRE-HELPER FIXTURE HARNESS ABORTED ON
PARENT NATIVE-STDERR PROMOTION / SUCCESS PATH PROVED / NO SECOND RUN`**

Date: **2026-08-11**

Science source inspected:
`bcc7ae97f89f1715250c43740ab0da723fe46343`

Mission correction: `FRSH-005-v1-VR-09`

Prior Science return / decisive viability: `FRVE-005-v7-VR-04` /
`FRVE-005-v7-VR-03`

Quartermaster return: `FRCA-005-v3`

Effective shell: `FRSH-005-v1` through `FRSH-005-v1-VR-09`

Effective treatment / blueprint: `FRDT-005-v1-VR-01` /
`FRPX-005-v1-VR-01`

Functional report: `FRCE-005-v1-VR-05`

Corrected inert code candidate:
`f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree:
`92b22fc56d79d18cf1abf7213c5268c9e4149830`

Immutable accepted-media manifest: `FRAM-001-v1`, file SHA-256
`a674c337b377de113eaa4c6763bd431afc73ab613374a76501aa8c5ce37e5437`,
exact `17 / 37,410,731`, canonical digest
`c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Exact next recipient: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Science decision

Science independently recomputed both exact frozen identities from the two
code fences in `FRSH-005-v1-VR-09`, normalizing only repository CRLF framing
to the shell-frozen LF byte domain:

```text
launcher: byteLength=2001
launcher: sha256=96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
prehelper: byteLength=976
prehelper: sha256=5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
```

Both strings were UTF-8 without BOM, LF-only, and included the final LF. The
launcher and pre-helper contain no `New-Item`; the exact root primitive is
`[IO.Directory]::CreateDirectory($helperRoot)`.

Science then began the one permitted credential-cleared, no-request fixture.
The parent removed `OPENAI_API_KEY` from its process environment without
reading it, supplied only the exact task-specific inherited pre-helper value,
and invoked exact 64-bit Windows PowerShell Desktop `5.1.26100.8875` with the
frozen argument order and exact launcher.

The exact success child passed silently with exit `0`. It traversed the full
ordered `PH01..PH08` path, created the exact ordinary non-reparse helper root,
left the exact DLL absent, and touched no live root. The fixture proved the
created directory was the exact root, ordinary, non-reparse, and empty; it
then deleted only that exact root with
`[IO.Directory]::Delete($helperRoot,$false)` and proved it absent.

The same fixture next induced `PH01_ENV_RETRIEVAL` by clearing only the
task-specific inherited value. The exact child exited `86` and emitted one
ASCII stderr record in the frozen order:

```text
predicate=PH01_ENV_RETRIEVAL
class=System.Management.Automation.RuntimeException
fqid=PH01_ENV_RETRIEVAL
helperRootAbsent=true
helperDllAbsent=true
liveRootAbsent=true
```

The parent harness, however, retained `$ErrorActionPreference='Stop'` while
capturing the native child's stderr with `2>&1`. Windows PowerShell promoted
that valid native stderr line to a terminating `NativeCommandError` in the
parent before the harness could normalize the record or run the remaining
controlled diagnostic, unlisted, malformed, and cleanup branches. This is a
Science fixture-harness defect, not a failure of the frozen launcher,
pre-helper, PS5.1 root primitive, or PH01 diagnostic record.

The exact-one boundary forbids a second credential-cleared fixture in this
heartbeat. Science did not rerun the launcher. Therefore the exact success
path is positive evidence, but the mandatory complete bounded-retention,
unlisted-collapse, malformed-collapse, and failure-cleanup matrix is
incomplete. Science issues **`HOLD`** and does not return to Mission for a
retry decision.

Variance classification: **`REQUIRED CORRECTION / SCIENCE FIXTURE PARENT
CAPTURE / OPEN`**.

## Evidence available and unavailable

Available positive evidence:

- exact launcher and pre-helper byte identities passed;
- exact executable and argument order reached Windows PowerShell Desktop
  `5.1.26100.8875`, 64-bit;
- exact success execution passed silently through `PH08_ROOT_CREATE_COMPLETE`;
- sole `[IO.Directory]::CreateDirectory` root creation passed;
- `New-Item`, source file, stdin, encoded command, profile, and alternate
  transport were absent;
- exact ordinary/non-reparse/empty root state and exact nonrecursive cleanup
  passed;
- the exact PH01 failure child emitted one bounded, allowlisted, ordered ASCII
  record and exited `86`; and
- all exact controlled targets were absent after the aborted parent harness.

Unavailable because the one fixture stopped before these branches:

- completion of the parent allowlist normalizer over every locally inducible
  first-failure record;
- non-allowlisted exception-class and FQID replacement to literal `UNLISTED`;
- missing, extra, reordered, multiline, non-ASCII, and over-`640`-byte record
  collapse to `STABLE_LOCAL_FAILURE / diagnosticRecordRejected=true`; and
- the controlled post-root failure branch proving launcher-owned,
  identity-conditioned nonrecursive cleanup after `RootCreated=true` and
  `RootOrdinary=true`.

Static inspection confirms the frozen launcher contains those bounded rules,
but static inspection cannot replace the expressly required fresh fixture
evidence.

Before the credential-cleared fixture, Science also performed one bounded
PH01 capture orientation with the task-specific value absent. It emitted the
same one-line exit-`86` record, created no root, and supplies no positive
fixture credit. It did not read a credential, construct a request, call the
API, or consume an ordinal.

## Final root, ordinal, product, and protected-state proof

Independent exact-path checks after the stopped harness proved:

```text
helperRootAbsent=true
helperDllAbsent=true
liveRootAbsent=true
ordinal2StageAbsent=true
ordinal2TargetAbsent=true
ordinal3StageAbsent=true
ordinal3TargetAbsent=true
productRasterAbsent=true
productProvenanceAbsent=true
```

The exact launcher and pre-helper contain no credential name, endpoint,
header, request object, request serialization, response parser, `SendAsync`,
attempt-pair path, media path, or payload term. The parent cleared the only
prospective credential without reading it. No helper was compiled or loaded;
no DLL, source file, live root, request, response, raster, provenance, media
byte, or pixel existed in the fixture.

Therefore credential reads, request constructions, `SendAsync` calls, direct
Image API sends, and ordinals consumed in this Science heartbeat are each
exact `0`. Historical ordinal `1` remains permanently consumed, opaque,
inaccessible, and unchanged. Ordinals `2` and `3` remain unstarted and
unconsumed.

`FRAM-001-v1` was re-read only as control data; its file SHA remains exact.
No accepted-media stream or pixel was opened. Repository QA quarantine, the
protected PDF, training tree, Martin's browser/profile/save, hidden lore,
OS-temp parent, ordinal-1 residual, managed directory, user work, VR-65, and
every opaque residual remain untouched. All thirteen inherited process
records and the separate Commandant filename/search-scope record remain
separate and OPEN.

## Required fresh Science correction

One fresh Office of Science Administrator must begin from the committed exact
handoff and run exactly one new credential-cleared, no-request fixture. The
frozen launcher, pre-helper, environment name, child executable, arguments,
paths, predicates, record schema, allowlists, and cleanup rules do not change.

The parent harness must prevent its own native-stderr capture from terminating
the fixture: scope `$ErrorActionPreference='Continue'` around only the exact
native child invocation and restore the prior preference immediately after
capturing the in-memory line and `$LASTEXITCODE`. The correction may not
suppress, rewrite, redirect to a file, or discard child stderr. It may change
only the Science-owned parent capture behavior; the exact child command and
environment contract remain byte-identical.

That fresh fixture must independently repeat the exact identity and success
proof and complete every locally inducible first-failure, allowlist,
`UNLISTED`, malformed/oversized collapse, ownership-conditioned cleanup, and
final absence assertion. PASS may then issue one new versioned `POLISH
VIABILITY READY` and return to a fresh Mission Captain. Any failure remains a
precise Science `HOLD`; it does not authorize Mission or Quartermaster.

## Maturity, changes, and hard stops

Maturity impact: none. `FR-03` remains continuity `FR2`; physical-host
expression remains `FR0 - 1 accepted shared compression / 1 exact / 10
missing`; learning `FR2`; behavior/save/recovery `FR1`; content `FR2`;
presentation `FR3`; and prior bounded release proof `FR4`.

Science changed no product, test, runtime, lesson, save, media, manifest,
candidate, map, scoreboard, maturity, process classification, residual,
schedule, or automation state. The only repository changes authorized for
this stage are this variance and synchronized `NEXT_INSTANCE_HANDOFF.md`.

Science did not call the API, inspect media/pixels, compile/load the helper,
allocate the live root, consume an ordinal, change product/tests, run a build,
browser, preview, or E2E, reveal, advance maturity, close an OPEN record,
access a residual or VR-65, schedule, automate, push, release, or call `FIRST
RUN COMPLETE`.

Office of Science Administrator signs **`HOLD /
FRVE-005-v7-VR-05`** from exact source
`bcc7ae97f89f1715250c43740ab0da723fe46343`.
