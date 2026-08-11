# First Run Shell Variance - Cloud Files Accepted-Media Gate

Variance ID: `FRSH-005-v1-VR-01`

Disposition: **`FIRST RUN SHELL READY / REQUIRED CORRECTION INCORPORATED /
CLOUD FILES MANIFEST ADAPTER FROZEN / FRSH-005-v1-VR-01`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / viability / Science variance: `FRWO-005-v2` / `FRVE-005-v2` /
`FRVE-005-v2-VR-01`

Base shell / superseding command manifest: `FRSH-005-v1` / `FRRC-003-v2`

Mission source inspected:
`0f2716564fe9904566a0adb95e4671de2e4c38fd`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-10**

## Mission decision

Science's correction is conflict-free. The OneDrive `ReparsePoint` attribute
observed on the exact frozen literals is not by itself a name-surrogate
redirect, and the exact metadata-only proof identifies only Microsoft Cloud
Files variants with the name-surrogate bit clear, exact final-path
containment, matching normal/reparse volume and file identity, and fully local
`PLACEHOLDER | IN_SYNC` leaves.

This variance replaces only the base shell's reject-every-reparse predicate
and the corresponding `FRRC-003-v1` accepted-media primitive. It does not
weaken the manifest gate. It makes the gate topology-, identity-, residency-,
single-handle-, and metadata-aware and remains fail-closed before every unsafe
read.

Every other field, requirement, permission, prohibition, budget, owner,
milestone, identity layer, validation gate, rollback boundary, no-reveal
boundary, process classification, and hard stop in `FRSH-005-v1` remains exact.
`FRSH-005-v1` remains the base shell; this variance is its sole effective
manifest-gate correction.

## Exact supersession

`FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-003-v2.json` is a narrow immutable
overlay that supersedes only the accepted-media create/recompute primitive in
`FRRC-003-v1`. It pins the immutable predecessor by exact SHA-256
`e623369f28254f943e6f9063555a1f170caf59a079d277506700128bd78edf56`.

The exact seventeen literals, ordinal order, accepted-media schema, canonical
tuple stream, exact count `17`, exact total `37,410,731`, raw-byte SHA-256
semantics, `FRAM-001-v1` path, no-pixel rule, and later recomputation remain
unchanged. All non-manifest commands and all already-passing Combat evidence
in `FRRC-003-v1` / `FRCE-005-v1` remain frozen; none is rerun by this Mission
variance.

## Replacement Windows Cloud Files primitive

`FRRC-003-v2` freezes one exact executable Windows adapter with this order:

1. Load only the exact seventeen frozen POSIX literals. Require exact order,
   uniqueness, non-rooted spelling, and no empty, `.` or `..` component. Build
   only their cumulative literal components, without listing or discovery,
   and require the corroborated exact unique component count `31`.
2. Open the exact repository root metadata-only and freeze normalized DOS
   final path, volume serial, and 128-bit file ID.
3. For each exact cumulative component, open one attribute-only
   `OPEN_EXISTING | FILE_FLAG_BACKUP_SEMANTICS |
   FILE_FLAG_OPEN_REPARSE_POINT` handle. An ordinary non-reparse component is
   eligible only with a zero tag. A reparse component is eligible only when
   `(tag & ~IO_REPARSE_TAG_CLOUD_MASK) == IO_REPARSE_TAG_CLOUD` and
   `IsReparseTagNameSurrogate(tag) == false`. Reject every symlink, junction,
   mount point, name surrogate, non-Cloud/unknown tag, tag/attribute
   disagreement, or unavailable query.
4. Open the same component metadata-only with normal reparse processing.
   Require equality of volume serial and 128-bit file ID with the reparse-open
   handle. Require its normalized DOS final path to equal the exact
   repository-root-plus-literal-component path and remain strictly below the
   exact root. Reject alternate spelling, volume, file ID, target, mount,
   substitution, escape, or containment uncertainty.
5. For each exact leaf, require an ordinary regular file or allowed Cloud
   Files leaf, one hard link, no directory state, and no delete-pending state.
   Query attributes/tag plus `CfGetPlaceholderStateFromAttributeTag`. Reject
   `OFFLINE`, `UNPINNED`, `RECALL_ON_OPEN`, `RECALL_ON_DATA_ACCESS`, `PARTIAL`,
   `PARTIALLY_ON_DISK`, invalid/unknown Cloud state, missing
   `PLACEHOLDER | IN_SYNC` for a Cloud leaf, or any state implying fetch.
6. Only after leaf preflight passes, open exactly one data handle with
   `GENERIC_READ`, `OPEN_EXISTING`, `FILE_SHARE_READ` only,
   `FILE_FLAG_SEQUENTIAL_SCAN`, and `FILE_FLAG_OPEN_NO_RECALL`. Re-query final
   path, volume/file ID, basic info, standard info, tag, and Cloud state from
   that handle before read; require exact preflight equality and all no-fetch
   predicates.
7. From that one still-open handle, read once from offset zero to EOF while
   simultaneously counting returned bytes and computing SHA-256. Do not seek,
   sample, decode, render, thumbnail, preview, interpret metadata, inspect
   pixels, hydrate, pin, copy, move, relabel, or repair.
8. Before closing the same handle, re-query final path, volume/file ID,
   creation, last-write, change time, attributes/tag/Cloud state, allocation,
   EOF, link count, delete-pending, and directory state. Require exact
   before/after equality and bytes read equal same-handle EOF. Only
   `LastAccessTime` may remain unchanged or advance monotonically; record that
   scalar, reject reversal, and never write a prior timestamp back.
9. Construct entries and canonical digest only in memory. Require exact
   `17 / 37,410,731`. Create `FRAM-001-v1` only after every read passes, with
   create-new semantics and frozen `candidateHead=02d957e9...`. On a manifest
   write failure, delete only the newly created exact manifest after final-path
   and file-ID proof. Never mutate or roll back accepted media.
10. Every recomputation reruns the complete topology, tag, final-path,
    identity, residency, one-handle, no-recall, and metadata contract. A Cloud
    tag is never a blanket exemption.

Any unavailable API, unexpected value, mismatch, unsafe residency state,
identity drift, byte drift, metadata drift other than permitted monotonic
access time, or failed assertion stops before the affected read or manifest
write. It authorizes no bypass, hydration, retry, repair, rollback of accepted
media, generator call, or Quartermaster start.

## Frozen candidate and prior gates

The inert code candidate remains exactly `02d957e9...` with tree
`09da6293...`. Mission changes no product, test, runtime, learning, save,
route, world, ending, accepted-media, candidate, or prior evidence byte.

The `FRCE-005-v1` passes remain accepted and frozen: focused `50/0`, legacy
static-contract `29/0`, learning/privacy `17/0`, related `58/0`, validators
`40/40`, cold full `979/0/0`, production build PASS, TD-012 fixture build
PASS, production PBA JavaScript `1,676,508`, CSS `119,394`, modules `217`,
accepted media `17 / 37,410,731`, source maps `0`, served preflight PASS,
owned process/port cleanup PASS, and `git diff --check` PASS. Complete E2E
remains correctly unrun. None of these gates is replayed from this variance.

No `FRAM-001-v1`, tuple digest, generator call, attempt, selected source,
import, preview, E2E, reveal, maturity change, or release exists.

## One bounded Combat verification

Exact next owner is one fresh Combat Engineer / `combat_engineer`. Combat may:

1. read this complete variance, `FRVE-005-v2-VR-01`, `FRCE-005-v1`, and
   `FRRC-003-v2`;
2. parse and verify the superseding manifest plus frozen predecessor identity;
3. run `FRRC-003-v2.entries.accepted-media-create` exactly once against frozen
   candidate `02d957e9...`;
4. if and only if it passes, verify the created `FRAM-001-v1` semantic object,
   exact `17 / 37,410,731`, canonical digest, candidate identity, and recorded
   LastAccessTime scalars;
5. issue one versioned Combat functional close, commit only `FRAM-001-v1`, the
   Combat report, and synchronized handoff, then push `main` and prove exact
   `HEAD == origin/main`; and
6. report **`PRODUCTION FUNCTIONAL`** only after that exact pass and
   synchronization.

A failed create invocation produces `HOLD`, no retry, no manifest repair, no
push under `PRODUCTION FUNCTIONAL`, and no Quartermaster authority. Combat may
not rerun prior tests/builds/previews, inspect pixels, call a generator,
hydrate/copy/move accepted media, begin Quartermaster, import/select/reveal a
source, run E2E, alter candidate code, advance maturity, or close a process
record.

Quartermaster remains blocked until the lawful Combat PASS, evidence commit,
`PRODUCTION FUNCTIONAL` disposition, push, and exact synchronization.

## Protected state, process, and maturity

All thirteen inherited process records remain separate and **OPEN**: VR-17,
VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage 4,
VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope record
remains **OPEN**. None is waived, merged, closed, cured, or renumbered.

VR-65 remains exactly **`DEFERRED LIMITATION / RELEASE-PROCESS ONLY /
NON-GATING / OPAQUE EXTERNAL QA RESIDUAL`**, unknown and inaccessible.
Repository QA quarantine, protected PDF, training directory, real browser/
profile/save, hidden lore, user work, managed/temp roots, accepted-media
bytes, and opaque residuals remain protected.

Maturity impact: none. `FR-03` remains continuity `FR2`; physical-host
expression `FR0 - 1 accepted shared compression / 1 exact / 10 missing`;
learning `FR2`; behavior/save/recovery `FR1`; content `FR2`; presentation
`FR3`; and prior bounded release proof `FR4`.

## Mission signature

Mission Captain signs **`FIRST RUN SHELL READY / CLOUD FILES MANIFEST ADAPTER
FROZEN / FRSH-005-v1-VR-01`** from exact source `0f271656...`.

No media data stream, pixel, generator, import, preview, reveal, protected
content, residual, browser, save, schedule, automation, release, or maturity
operation was opened or changed by Mission.
