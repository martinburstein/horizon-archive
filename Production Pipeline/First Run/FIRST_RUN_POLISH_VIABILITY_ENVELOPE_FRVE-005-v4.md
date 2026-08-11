# Horizon Archive First Run Polish Viability Envelope

Envelope ID: `FRVE-005-v4`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-005-v4 / Stranded Lens Cradle - One New Source and Fixed
Lesson Integration`

Disposition: **`HOLD / MARTIN DECISION REQUIRED / MANAGED-DIRECTORY
FILETIME-OWNER DELTA CANNOT PROVE BUILT-IN CREATOR IDENTITY`**

Date: **2026-08-11**

Science source inspected:
`bc0b17c4ef3c0d597bb9e1c97081ef76c5d2ff8c`

Baseline / continuity: `FRPB-001-v2` / `FRCL-004-v2`

Current Work Order / superseded viability: `FRWO-005-v4` / `FRVE-005-v3`

Mission return / Quartermaster return: `FRSH-005-v1-VR-07` /
`FRCA-005-v2`

Effective base shell: `FRSH-005-v1` through `FRSH-005-v1-VR-06`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Immutable accepted-media manifest: `FRAM-001-v1`, file SHA-256
`a674c337b377de113eaa4c6763bd431afc73ab613374a76501aa8c5ce37e5437`,
exact `17 / 37,410,731`, canonical digest
`c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`

Planning controls: `FRRM-005-v4` / `FRSB-005-v4`

Exact next recipient: **Martin / explicit creator-binding transport decision**

## Science decision

`FRWO-005-v4` is not technically admissible as a fail-closed production
contract. Its before/after snapshot, exact-one-new-entry, owner-SID, canonical
identity, and creation/last-write FILETIME predicates can prove that one
ordinary file appeared during the call window. They cannot prove that the
built-in call, rather than another same-owner producer, created that file.

Windows file owner is the security owner of the object, not a creator-process
identity. `GetSystemTimePreciseAsFileTime` and raw creation/write FILETIMEs
prove temporal inclusion only. Volume serial plus 128-bit file ID proves which
file was observed, not which process created it. A bounded direct-directory
snapshot proves the delta shape, not causal attribution. The built-in result
supplies neither an identity-proved file handle nor an independently trusted
volume/file ID under the v4 opaque-result rule.

This is a required creator-identity predicate in `FRWO-005-v4`, not a
performance preference. The Work Order expressly requires Science to HOLD if
creator/owner, call-window attribution, race isolation, or exact source
identity cannot be established without broader discovery or result-field path
parsing. The owner and creator concepts cannot be collapsed.

No amount of tightening the timestamp tolerance repairs the defect. A
directory change notification or NTFS USN record can corroborate name, file
ID, reason, and time, but does not supply the originating process identity.
Taking an exclusive or ACL-mutating lock over the tool-owned directory is not
part of the authorized adapter and cannot be assumed compatible with the
built-in producer. `output_hint` parsing, CLI/API fallback, and alternate
transport remain forbidden.

Science therefore issues **`HOLD / MARTIN DECISION REQUIRED`**. No fresh
Mission stage follows this envelope.

Variance classification: **`REQUIRED CORRECTION / CREATOR-BINDING INGRESS
AUTHORITY / EARLIEST EXTERNAL DECISION MARTIN`**.

## Decisive disposable synthetic fixture

Science used one fresh GUID-named child under the resolved OS temporary
directory. It was outside the repository and outside the real built-in
managed directory. The fixture did not resolve, enumerate, snapshot, open,
hash, copy, move, delete, or otherwise touch
`C:\Users\marti\.codex\generated_images`.

The fixture bracketed a synthetic unrelated same-owner writer with
`GetSystemTimePreciseAsFileTime`, then took the relevant before/after scalars.
The exact observed result was:

```text
before direct entries = 0
after direct entries = 1
exactly one new direct entry = true
owner equals current principal = true
creation FILETIME inside inclusive window = true
last-write FILETIME inside inclusive window = true
actual producer = synthetic unrelated same-owner writer
v4 admission predicates would pass = true
```

The owned fixture was removed after an exact containment check. Its closing
state was absent. No repository file, managed output, accepted media, browser
profile/save, protected path, residual, or user file participated.

This counterexample is sufficient to reject the prospective adapter: a
non-built-in producer can satisfy the complete proposed causal admission
signature. Running copy/hash, optional data-URL, handle-delete, PNG, pixel, or
later product gates cannot cure a source-attribution defect that occurs before
content access.

## Windows API and tool-compatibility adjudication

The local Windows PowerShell host successfully compiled and invoked
`GetSystemTimePreciseAsFileTime` for the decisive fixture. The precise clock
and ordinary file creation/write timestamps are callable on this host.

A broader in-memory prospective harness was attempted only against disposable
synthetic state. Its first compilation stopped before execution on a
warning-as-error; a subsequent expanded orchestration was blocked before
execution. Those attempts produced no adapter evidence and touched no real
managed directory. They are not the basis of this HOLD. The completed causal
counterexample independently defeats the mandatory creator-binding predicate,
so downstream destructive or content-bearing fixture work was correctly not
used to manufacture readiness.

The following primitives remain plausible but unaccepted because they cannot
repair creator attribution:

- metadata-only `CreateFileW` with `FILE_FLAG_OPEN_REPARSE_POINT` and normal
  handles, `GetFinalPathNameByHandleW`, `FileIdInfo`, `FileBasicInfo`,
  `FileStandardInfo`, and `FileAttributeTagInfo`;
- handle-owner SID through `GetSecurityInfo`;
- bounded direct enumeration with ordinary-file, reparse, directory, device,
  sparse/offline/placeholder, hard-link, alternate-stream, and path-escape
  rejection;
- one no-follow read/delete handle, create-new temp copy, bounded streaming
  SHA-256, optional memory-only canonical data-URL digest comparison, and
  handle-bound `FileDispositionInfo` deletion; and
- exact-path absence plus one closing snapshot equal to the before snapshot.

Science does not label those items proved, production-compatible, or
authorized in this envelope. Even a complete PASS for all of them would leave
the causal source-binding defect unchanged.

## Frozen data and performance limits

No limit is widened by this HOLD. Any future creator-bound revision must
retain at least these current ceilings unless a new complete planning sequence
lawfully tightens them:

- direct snapshot: nonrecursive, at most `4096` direct entries, memory-only;
- child name: one direct component, `1..255` UTF-16 code units;
- candidate: exact `1..12,000,000` bytes;
- streaming buffer: at most `196,608` bytes;
- optional canonical PNG data URL: payload at most `16,000,000` code units,
  total at most `16,000,022`, cross-check only and never transport;
- selected PNG and downstream JavaScript/CSS/module/media/source-map,
  decode/task/CLS/test/build/E2E caps: unchanged from `FRVE-005-v3` and the
  effective shell; and
- every allocation, metadata, identity, sharing, copy, hash, deletion,
  absence, restoration, or cleanup ambiguity: terminal opaque stop.

These are preserved ceilings, not production authority.

## Opaque failure and cleanup contract

If a future contract becomes creator-bound, every post-call zero, multiple,
ambiguous, wrong-owner, out-of-window, subdirectory, reparse, link, device,
placeholder, changed-prior-entry, identity, copy/hash, deletion, absence, or
restoration failure must consume only the active ordinal and stop opaque. It
must authorize no broader discovery, result-path inference, recursive cleanup,
later ordinal, or fallback.

This envelope itself consumed no ordinal and created no possible managed
residual. Its disposable synthetic file was not an image-generation result
and was removed inside its exact owned fixture.

## Exact ordinal and residual state

- Total ordinal domain remains exactly `{1,2,3}`.
- Ordinal `1` remains permanently consumed by the historical opaque result-
  path stop.
- Ordinal `2` remains unconsumed and unavailable.
- Ordinal `3` remains unconsumed and conditional only on a future lawful
  ordinal-2 objective source rejection plus exact cleanup.
- Built-in calls in `FRCA-005-v2`: exact `0`.
- Built-in calls in this Science stage: exact `0`.
- Conservative possible ordinal-associated managed residual count remains
  exact `1`, associated only with ordinal `1`.
- The ordinal-1 residual remains **`DEFERRED LIMITATION / RELEASE-PROCESS
  ONLY / NON-GATING / OPAQUE BUILT-IN MANAGED RESIDUAL`** and was not
  inspected or changed.
- VR-65 remains separate, opaque, non-gating, and inaccessible.

No role may infer that Science consumed ordinal `2`, proved a creator-bound
adapter, authorized managed discovery, permitted `output_hint` parsing,
authorized CLI/API, or created a candidate.

## Preserved product, learning, accessibility, and maturity state

Every non-ingress product field remains frozen. The bounded outcome is still
exact Host 05 mastery -> one distinct local dry Host 06 -> sole unchanged
`L02-03` -> unchanged next Drowned boundary. No lesson, evaluator, threshold,
remediation, evidence, privacy, save, focus, accessibility, offline, route,
world, ending, copy, source band, layout, asset, provenance, or rollback field
changes.

Maturity remains unchanged. `FR-03` remains continuity `FR2`; physical-host
expression `FR0 - 1 accepted shared compression / 1 exact / 10 missing`;
learning `FR2`; behavior/save/recovery `FR1`; content `FR2`; presentation
`FR3`; and prior bounded release proof `FR4`.

Inherited functional gates remain frozen and were not replayed: focused
`50/0`, legacy static-contract `29/0`, learning/privacy `17/0`, related
`58/0`, validators `40/40`, cold full `979/0/0`, production and TD-012
fixture builds PASS, production PBA JavaScript `1,676,508`, CSS `119,394`,
modules `217`, accepted media `17 / 37,410,731`, source maps `0`, served
preflight PASS, owned process/port cleanup PASS, and `git diff --check` PASS.
Complete E2E remains correctly unrun.

## Protected state and process records

All thirteen inherited process records remain separate and **OPEN**: VR-17,
VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage
4, VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope
record remains **OPEN**. This stage closes, cures, merges, waives, or
renumbers none.

The initial broad status and file locators re-emitted already-disclosed
untracked/control pathnames; they remain process-only recurrences under the
applicable OPEN records and supplied no product, media, candidate, or release
evidence.

Repository QA quarantine, `Art Of No Mans Sky Book Scan.pdf`, `Simplilearn
Training Files/`, real browser/profile/save, hidden lore, user work,
accepted-media pixels, the real managed directory, opaque residuals, and
VR-65 remained protected. No generation, real managed access, result-field
inspection, data-URL transport, pixel inspection, import, copy/provenance,
product/test change, browser, E2E, preview, screenshot, reveal, publication,
schedule, automation, push, release, maturity update, or OPEN-record closure
occurred.

## Rollback and exact decision handoff

This Science stage changes only this versioned envelope and the synchronized
handoff. Rollback is limited to those two documentation files. Planning
history is not rewritten.

Martin must explicitly choose a new creator-binding authority before planning
can resume. A lawful future decision could authorize one of these boundaries:

1. a built-in result contract that returns a trusted identity-proved handle or
   independently authenticated volume/file ID for the created output;
2. explicit CLI/API mode with a predeclared create-new output target, subject
   to a new Operations -> Science -> Mission sequence and the installed
   skill's no-silent-fallback rule; or
3. termination/withdrawal of `FRWO-005-v4` with no media candidate.

Until Martin decides, no Mission, Quartermaster, generator call, managed
snapshot, ordinal `2`, CLI/API path, product work, reveal, release, or later
address is authorized.

Office of Science Administrator signs **`HOLD / MARTIN DECISION REQUIRED /
FRVE-005-v4`** from exact source `bc0b17c4...`.
