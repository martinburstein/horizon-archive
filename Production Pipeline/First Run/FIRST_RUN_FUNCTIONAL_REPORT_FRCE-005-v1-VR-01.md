# First Run Functional Report - Cloud Files Manifest Runtime Stop

Report ID: `FRCE-005-v1-VR-01`

Stage / stable agent: Combat Engineer / `combat_engineer`

Disposition: **`HOLD / ACCEPTED-MEDIA CREATE STOPPED BEFORE MANIFEST WRITE /
MISSION COMMAND-RUNTIME CORRECTION REQUIRED`**

Work Order / base shell / shell variance: `FRWO-005-v2` / `FRSH-005-v1` /
`FRSH-005-v1-VR-01`

Release-command manifest: `FRRC-003-v2`

Combat source:
`dbd0d4514735639336f1c26971918214adea5325`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-10**

## Result

Combat verified the narrow supersession and invoked
`FRRC-003-v2.entries.accepted-media-create` exactly once. The invocation
stopped fail-closed before tuple-digest completion and before manifest
creation because the entry launches Windows PowerShell through the literal
`powershell` executable while the frozen primitive calls
`[System.Convert]::ToHexString`, which is unavailable in that runtime:

```text
Method invocation failed because [System.Convert] does not contain a method
named 'ToHexString'.
FullyQualifiedErrorId: MethodNotFound
```

The failure is inside the immutable command primitive. Combat did not retry,
patch, substitute a host, repair output, or weaken the gate.
`FRAM-001-v1` remains absent. Quartermaster remains blocked.

## Pre-invocation identity verification

Before the sole create invocation, Combat verified:

- current `HEAD` was exact `dbd0d451...`, with no tracked worktree delta;
- `FRRC-003-v1` SHA-256 was exact
  `e623369f28254f943e6f9063555a1f170caf59a079d277506700128bd78edf56`;
- `FRRC-003-v2` pinned that exact predecessor and declared only the
  accepted-media create/recompute primitive supersession;
- the v1/v2 accepted-media literal arrays were byte-for-byte semantically
  equal, unique, and exact count `17`;
- the frozen policy required exact cumulative component count `31` and total
  `37,410,731` bytes;
- the v2 executable entry set and Combat ownership were exact;
- frozen candidate `02d957e9...` existed, was an ancestor of `HEAD`, and had
  exact tree `09da6293...`; and
- `FRAM-001-v1` was absent.

The post-candidate tracked delta contained only the already-accepted HOLD,
Science variance, Mission variance, superseding command manifest, and
synchronized control handoff. Frozen product/test candidate bytes were not
changed.

## Exact invocation reach and unavailable evidence

The frozen primitive reaches the failing conversion only after its complete
seventeen-leaf loop and exact total-byte assertion. Therefore this invocation
established internally, before the stop:

- exact seventeen literals and exact 31 cumulative components passed the
  ordinary-or-Cloud-tag, no-name-surrogate, normal/reparse identity, normalized
  final-path, and strict-containment checks;
- every leaf passed regular-file, one-link, delete-pending, residency,
  no-fetch, and no-recall preflight;
- one `GENERIC_READ` / `FILE_SHARE_READ`-only / `OPEN_NO_RECALL` handle per
  leaf streamed raw bytes from offset zero through EOF exactly once;
- each raw stream produced an in-memory byte count and per-file SHA-256;
- each leaf passed before/after final-path, volume/file ID, creation/write/
  change time, attributes/tag/Cloud state, allocation/EOF, link, delete, and
  directory equality; only unchanged or monotonically advanced
  `LastAccessTime` was eligible to continue; and
- the aggregate byte count reached exact `37,410,731`.

The invocation did **not** complete the tuple SHA conversion, emit stdout, run
its later internal candidate/tree assertions, or enter create-new manifest
logic. Consequently:

```text
count: 17 reached internally, not emitted
totalBytes: 37410731 reached internally, not emitted
entriesSha256: unavailable
candidateHead: preflight-confirmed 02d957e9d69dc7986928a391c37f899784f73ea5;
               not reached inside the invocation
lastAccessTime scalars: validated in memory but unavailable because stdout was
                       not emitted
FRAM-001-v1: absent
generation ordinals consumed: 0
```

No pixel decode, rendering, thumbnail, preview, metadata interpretation, or
pixel inspection occurred. No media byte was written. The permitted operating-
system `LastAccessTime` side effect may have remained unchanged or advanced;
the primitive forbids resetting it and Combat performed no metadata write.

## Frozen functional evidence reconfirmed

The inert code candidate and its accepted evidence remain exact and were not
replayed: focused `50/0`, legacy static-contract `29/0`, learning/privacy
`17/0`, related `58/0`, validators `40/40`, cold full `979/0/0`, production
build PASS, TD-012 fixture build PASS, production PBA JavaScript `1,676,508`,
CSS `119,394`, modules `217`, accepted media `17 / 37,410,731`, source maps
`0`, served preflight PASS, owned process/port cleanup PASS, and
`git diff --check` PASS.

Complete E2E remains correctly unrun. The selected source is absent, and the
shell forbids E2E before lawful source acceptance and managed/temp cleanup.
These inherited passes do not substitute for the missing immutable manifest
and do not authorize `PRODUCTION FUNCTIONAL`.

## Variance and rollback

Classification: **`REQUIRED CORRECTION / MISSION RELEASE-COMMAND RUNTIME
COMPATIBILITY`**.

Mission froze both the literal `powershell` command host and a digest encoding
call unavailable in that host. A new versioned Mission variance and
superseding release-command manifest are required before any fresh Combat
invocation. The correction must preserve every topology, residency, identity,
single-handle, no-recall, metadata, raw-byte, tuple, create-new, candidate,
no-pixel, no-retry-under-v2, and protected-state boundary. This report does not
authorize a replacement primitive or a second `FRRC-003-v2` invocation.

No rollback ran. The frozen candidate remains inert, imports no source, and
leaves the released Host 05 boundary safe. No push occurred because the shell
permits the Combat push only after lawful `PRODUCTION FUNCTIONAL`, which was
not reached.

## Protected state, process, and maturity

Repository QA quarantine, protected PDF, training directory, real browser/
profile/save, hidden lore, user work, managed generation root, OS-temp
candidate roots, and opaque residuals were not opened or changed. Only the
exact seventeen authorized raw streams were read; accepted-media bytes were
not decoded, interpreted, copied, moved, renamed, hydrated, pinned, repaired,
or written.

All thirteen inherited records remain separate and **OPEN**: VR-17, VR-23,
VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage 4,
VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope record
remains **OPEN**. Initial broad status and bounded filename/control output are
process-only recurrences and close nothing.

VR-65 remains exactly **`DEFERRED LIMITATION / RELEASE-PROCESS ONLY /
NON-GATING / OPAQUE EXTERNAL QA RESIDUAL`**, unknown and inaccessible.

Maturity impact: none. `FR-03` remains continuity `FR2`; physical-host
expression `FR0 - 1 accepted shared compression / 1 exact / 10 missing`;
learning `FR2`; behavior/save/recovery `FR1`; content `FR2`; presentation
`FR3`; and prior bounded release proof `FR4`.

## Exact return handoff

One fresh Mission Captain / `mission_captain` must read this complete report,
`FRSH-005-v1-VR-01`, `FRVE-005-v2-VR-01`, and `FRRC-003-v2`; issue one
versioned shell variance and superseding command manifest that make the exact
hex-encoding primitive executable under its declared command host without
changing another shell field; and synchronize one exact fresh Combat action.

No second `FRRC-003-v2` create invocation, manifest repair, accepted-media
mutation, Quartermaster attempt, generator call, candidate inspection, source
import, Image work, E2E, Intelligence release, reveal, push under
`PRODUCTION FUNCTIONAL`, maturity update, OPEN-record closure, schedule,
automation, or `FIRST RUN COMPLETE` may begin.
