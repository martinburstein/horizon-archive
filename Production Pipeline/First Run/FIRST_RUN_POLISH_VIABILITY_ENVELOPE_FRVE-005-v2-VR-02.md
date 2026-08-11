# First Run Polish Viability Envelope - Change-Time Quiescence Variance

Variance ID: `FRVE-005-v2-VR-02`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Disposition: **`POLISH VIABILITY READY / REQUIRED CORRECTION / MISSION
CHANGE-TIME QUIESCENCE VARIANCE REQUIRED`**

Work Order / base viability: `FRWO-005-v2` / `FRVE-005-v2`

Base shell / effective Mission variances: `FRSH-005-v1` /
`FRSH-005-v1-VR-01` / `FRSH-005-v1-VR-02` /
`FRSH-005-v1-VR-03`

Consumed release-command manifest / Combat return: `FRRC-003-v4` /
`FRCE-005-v1-VR-03`

Science source inspected:
`5139bb52c483d34f4f4e7214b47b3332076f6dc2`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

## Science decision

The accepted-media manifest remains technically viable, but the consumed v4
result remains an exact **`HOLD`** and cannot be reclassified, completed, or
retried. A `FILE_BASIC_INFO.ChangeTime` advance is not, by itself, a Windows
data-stream mutation signal. Microsoft distinguishes the two fields directly:
`LastWriteTime` relates to the underlying data stream, while `ChangeTime`
records file-metadata changes such as a rename or attribute change.

The current v4 primitive was still correct to stop. It required exact
`ChangeTime` equality, did not query the complete Cloud Files placeholder
standard record, emitted no final scalar object, and did not identify the
affected ordinal. Science cannot establish the missing facts retroactively
and does not infer the cause of the observed metadata update.

Science therefore classifies the return as **`REQUIRED CORRECTION / RELEASE
VALIDATION ENVELOPE / CHANGE-TIME QUIESCENCE`**. A later adapter may accept
only a monotonically advancing, bounded, quiescent **metadata-only**
`ChangeTime` transition under the complete contract below. It may never ignore
the field, accept continuing drift, use an elapsed-time grace alone, or accept
any accompanying content, identity, topology, residency, or Cloud-state
change.

This variance authorizes no command invocation. Mission is the earliest owner
of the frozen executable shell and release-command contract. Mission must
issue a new versioned shell variance and superseding manifest before fresh
Combat receives exactly one new create opportunity. `FRRC-003-v4` remains
consumed forever.

## Exact Windows and Cloud Files semantics

The adjudication uses only Microsoft API contracts and the already recorded
control evidence. Science opened or queried no accepted-media path.

1. [`FILE_BASIC_INFO`](https://learn.microsoft.com/en-us/windows/win32/api/winbase/ns-winbase-file_basic_info)
   defines `LastWriteTime` as the time of the last underlying data-stream
   write and distinguishes `ChangeTime` as metadata-change time, including
   rename and attribute changes. The kernel-level
   [`FILE_BASIC_INFORMATION`](https://learn.microsoft.com/en-us/windows-hardware/drivers/ddi/wdm/ns-wdm-_file_basic_information)
   contract also states that the file system updates access, write, and change
   times as appropriate after file I/O. Windows therefore does not guarantee
   that a read-only operation leaves `ChangeTime` equal.
2. [`CreateFileW`](https://learn.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-createfilew)
   makes share compatibility bidirectional and persistent for the lifetime of
   the handle. Omitting `FILE_SHARE_WRITE` rejects an already-open write handle
   or writable file mapping and prevents a later write open or writable mapping
   while the manifest data handle remains open. Attribute and extended-
   attribute requests are explicitly outside that share-mode restriction.
   The v4 shape can therefore exclude ordinary concurrent data writers while
   still observing a concurrent metadata-only change.
3. `FILE_FLAG_OPEN_NO_RECALL` requests that remote-storage data not be recalled.
   It does not promise timestamp immutability and is not a substitute for the
   pre/post residency predicates.
4. [`CfGetPlaceholderStateFromAttributeTag`](https://learn.microsoft.com/en-us/windows/win32/api/cfapi/nf-cfapi-cfgetplaceholderstatefromattributetag)
   derives only the public placeholder-state bits from attributes and reparse
   tag. Exact `PLACEHOLDER | IN_SYNC` remains necessary, but that derived value
   alone is not a complete Cloud Files stability snapshot.
5. [`CfGetPlaceholderInfo`](https://learn.microsoft.com/en-us/windows/win32/api/cfapi/nf-cfapi-cfgetplaceholderinfo)
   is an expressly non-mutating, `READ_ATTRIBUTES` query. Its
   [`CF_PLACEHOLDER_STANDARD_INFO`](https://learn.microsoft.com/en-us/windows/win32/api/cfapi/ns-cfapi-cf_placeholder_standard_info)
   record supplies on-disk, validated, modified, and property sizes; pin and
   in-sync state; placeholder and sync-root file IDs; and the opaque provider
   file-identity blob. These values can distinguish a stable fully local,
   validated placeholder from an incomplete or locally modified one without
   reading or interpreting media.
6. [`CfUpdatePlaceholder`](https://learn.microsoft.com/en-us/windows/win32/api/cfapi/nf-cfapi-cfupdateplaceholder)
   confirms that Cloud Files metadata, timestamps, size, file identity,
   in-sync state, and dehydration state are separately updateable and that a
   USN guard encompasses local metadata changes. Science does not claim that
   this API or OneDrive caused the v4 transition; it establishes why a bare
   `ChangeTime` advance is insufficient to classify content mutation or
   stable Cloud state by itself.

## Why v4 remains failed

The sole v4 attempt reported only:

```text
metadata drift ChangeTime
```

It did not emit the affected ordinal, pre/post `FILETIME` values, settled
snapshots, complete placeholder-standard information, byte count, per-entry
SHA-256, tuple digest, final candidate scalar, or `LastAccessTime` scalars.
Even though the error site proves that an affected leaf completed its permitted
same-handle raw stream, it does not prove that every stronger predicate below
would have passed. No control-only analysis can reconstruct those facts.

`FRAM-001-v1` remains absent. No v4 manifest-create completion, partial tuple,
digest, ordinal, or candidate assertion exists. The failed invocation supplies
no reusable content-integrity evidence and consumes no generation ordinal.

## Required stronger fail-closed adapter

Mission must preserve every `FRSH-005-v1-VR-01` topology, tag, identity,
residency, literal-path, one-link, no-recall, same-handle, raw-byte, tuple,
create-new, candidate, no-pixel, and no-mutation rule. It may replace only the
post-read `ChangeTime` equality predicate and add the read-only Cloud standard
snapshot and bounded settle needed to prove that narrow exception.

Any unavailable API, unsupported structure, buffer ambiguity, unexpected
value, failed query, timeout, or disagreement stops fail-closed and writes no
manifest.

1. **Frozen controls first.** Pin immutable v4, the new manifest and launcher,
   exact seventeen literals and order, exact thirty-one cumulative components,
   exact `17 / 37,410,731`, frozen candidate/tree, and `FRAM-001-v1` absence.
   Parse both launcher and joined primitive through the PowerShell AST without
   invocation. The new manifest must differ from v4 only in declared identity,
   supersession, launcher/command transport, the stronger snapshot/settle
   primitive, and its scalar output contract.
2. **Exact topology and residency.** Repeat the complete v4 metadata-only root
   and cumulative-component proof. Reject every name surrogate, non-Cloud
   reparse tag, normal/reparse file-ID disagreement, final-path substitution,
   containment failure, directory, delete-pending leaf, extra hard link,
   `OFFLINE`, `UNPINNED`, recall, invalid, partial, partially-on-disk, fetch-
   implying, or not-in-sync state. No prior observation is a residency waiver.
3. **Cloud standard preflight.** For a Cloud leaf, query
   `CF_PLACEHOLDER_STANDARD_INFO` through a read-attributes handle before data
   access. Require exact `IN_SYNC`, zero `ModifiedDataSize`, fully validated and
   fully on-disk content equal to the same leaf EOF, and a valid stable
   placeholder file ID, sync-root file ID, pin state, property size, identity
   length, and opaque identity bytes. Compare opaque identity bytes only for
   equality; never interpret or persist them. If a leaf is an eligible ordinary
   file, retain the ordinary-file predicates and require exact `ChangeTime`
   equality; the drift exception below is Cloud-only.
4. **One exclusionary data handle.** Open exactly one leaf data handle with
   `GENERIC_READ`, `OPEN_EXISTING`, `FILE_SHARE_READ` only,
   `FILE_FLAG_SEQUENTIAL_SCAN`, and `FILE_FLAG_OPEN_NO_RECALL`. Query one
   complete pre-read snapshot from that handle and require equality with
   preflight. Because `FILE_SHARE_WRITE` and `FILE_SHARE_DELETE` are absent,
   failure to obtain the exclusionary handle is a stop, never a reason to
   broaden sharing.
5. **Complete snapshot domain.** Every same-handle snapshot contains normalized
   final path; volume serial and 128-bit file ID; creation, last-access,
   last-write, and change times; attributes, reparse tag, and derived Cloud
   state; allocation and EOF lengths; link count, delete-pending, and directory
   state; plus the complete Cloud standard fields in step 3. The adapter must
   also retain the before-read values in memory until that leaf closes.
6. **Exactly one raw stream.** From offset zero through EOF on that still-open
   handle, read each byte exactly once while simultaneously counting returned
   bytes and computing SHA-256. Do not seek, decode, render, thumbnail,
   preview, sample, interpret media metadata, or inspect pixels. Require raw
   bytes read equal the before-read same-handle EOF.
7. **Immediate comparison.** Query the complete snapshot immediately after the
   raw stream. Final path, volume/file ID, creation time, last-write time,
   attributes/tag/derived Cloud state, allocation, EOF, links,
   delete-pending, directory state, and every Cloud standard field must equal
   the before-read values exactly. `LastAccessTime` may be equal or advance
   monotonically. `ChangeTime` may be equal or advance monotonically; reversal
   is always a stop. Any other delta is a stop and the change-time branch may
   not mask it.
8. **Bounded quiescence for an advance.** If and only if a Cloud leaf's sole
   non-access delta is monotonically advanced `ChangeTime`, keep the same data
   handle open and enter a maximum `2,000 ms` metadata-only settle window.
   Starting `250 ms` after the immediate snapshot, query the complete snapshot
   at `250 ms` intervals, for at most eight settle snapshots. Acceptance
   requires two consecutive settle snapshots to be byte-for-byte identical
   across the entire domain in step 5, with every fixed field still equal to
   before-read, both time fields monotonic relative to before-read, and all
   topology/no-fetch predicates still true. No two identical consecutive
   snapshots by the bound, any later `ChangeTime` movement, or any other delta
   is a stop. An unchanged `ChangeTime` needs no settle delay.
9. **Reconfirm the named leaf.** Before closing an advanced-change-time leaf,
   repeat its literal-component reparse-open and normal-open metadata proof and
   require the same final path, volume/file ID, allowed non-name-surrogate
   Cloud tag, containment, and residency. This is metadata-only and may not
   enumerate, discover, or open a media stream.
10. **Record, do not repair.** For every ordinal, emit `LastAccessTime` as
    `unchanged|advanced`. Emit `ChangeTime` as `unchanged|advanced`, and for an
    advance emit the before, immediate-after, and settled raw 64-bit FILETIME
    values as invariant decimal strings plus settle elapsed milliseconds and
    sample count. The values are scalar release evidence, not fields added to
    `FRAM-001-v1`. Never set a timestamp to `-1`, restore an old time, call a
    Cloud mutation API, hydrate, pin, relabel, repair, or suppress a transition.
11. **Manifest remains content-defined.** Only after all seventeen leaves pass,
    build the same frozen path/length/SHA tuples and canonical tuple digest in
    memory, require exact `17 / 37,410,731`, assert the frozen candidate/tree,
    and create `FRAM-001-v1` with the unchanged schema and create-new cleanup
    rules. A metadata-only `ChangeTime` advance never enters tuple identity and
    never waives later full recomputation.
12. **No retry.** The future command is one new invocation under a new
    versioned manifest, not a retry of v4. Any failure, including a settle
    timeout, is immediate `HOLD / NO RETRY`. It authorizes no alternate timer,
    second raw pass, host substitution, widened share mode, manifest repair,
    media mutation, or another invocation.

The maximum settle cost is bounded at `34,000 ms` across seventeen leaves and
fits inside the frozen `60,000 ms` command timeout alongside the existing
`37,410,731`-byte raw pass. Mission may not expand either bound without a new
Science return.

## Preserved candidate, gates, and boundaries

The inert product/test candidate remains `02d957e9...` with tree
`09da6293...`. Every inherited passing functional gate remains accepted and
frozen: focused `50/0`, legacy static-contract `29/0`, learning/privacy
`17/0`, related `58/0`, validators `40/40`, cold full `979/0/0`, production
and TD-012 fixture builds PASS, production PBA JavaScript `1,676,508`, CSS
`119,394`, modules `217`, accepted media `17 / 37,410,731`, source maps `0`,
served preflight PASS, owned process/port cleanup PASS, and `git diff --check`
PASS. None may be replayed from Science or the next Mission variance.

Complete E2E remains correctly unrun. Generation ordinals consumed remain
`0`. Quartermaster remains blocked. No candidate code, test, runtime, lesson,
save, route, world, ending, media, import, generator, preview, E2E, reveal,
maturity, release, schedule, or automation operation is authorized here.

All thirteen inherited process records remain separate and **OPEN**: VR-17,
VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage 4,
VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope record
remains **OPEN**. This variance closes, cures, merges, waives, or renumbers
none.

VR-65 remains exactly **`DEFERRED LIMITATION / RELEASE-PROCESS ONLY /
NON-GATING / OPAQUE EXTERNAL QA RESIDUAL`**, unknown and inaccessible.
Repository QA quarantine, protected PDF, training directory, real browser /
profile/save, hidden lore, user work, managed/temp roots, accepted-media pixels,
and opaque residuals remain protected.

Maturity impact: none. `FR-03` remains continuity `FR2`; physical-host
expression `FR0 - 1 accepted shared compression / 1 exact / 10 missing`;
learning `FR2`; behavior/save/recovery `FR1`; content `FR2`; presentation
`FR3`; and prior bounded release proof `FR4`.

## Exact Mission and Combat handoff

Exact next owner is one fresh Mission Captain / `mission_captain`. Mission
reads this complete variance, `FRCE-005-v1-VR-03`,
`FRVE-005-v2-VR-01`, `FRSH-005-v1-VR-01`,
`FRSH-005-v1-VR-03`, and `FRRC-003-v4`; issues one versioned
`FRSH-005-v1-VR-04` shell variance and superseding `FRRC-003-v5` release-
command manifest/launcher implementing the exact stronger adapter above; and
runs only control-file, AST, literal-set, candidate, and Git proof. Mission may
not invoke a create/recompute command or query an accepted-media path.

If and only if Mission reaches `FIRST RUN SHELL READY`, commits, pushes, and
proves exact synchronization, the exact next owner is one fresh Combat
Engineer / `combat_engineer`. Combat independently verifies the new pins and
transport, then invokes `FRRC-003-v5.entries.accepted-media-create` exactly
once against frozen candidate `02d957e9...`. A PASS must include the immutable
`FRAM-001-v1`, exact `17 / 37,410,731`, canonical tuple digest, candidate
identity, and per-ordinal access/change-time scalar evidence. Any failure is
`HOLD / NO RETRY`.

No second `FRRC-003-v4` invocation, v4 recompute, ordinal inference, manifest
repair, accepted-media auxiliary inspection or mutation, Quartermaster,
generator call, selected-source inspection/import, Image work, test/build/
preview/E2E, Intelligence release, reveal, maturity update, OPEN-record
closure, schedule, automation, or `FIRST RUN COMPLETE` may begin.

## Science signature

Office of Science Administrator signs **`POLISH VIABILITY READY / MISSION
CHANGE-TIME QUIESCENCE VARIANCE REQUIRED / FRVE-005-v2-VR-02`** from exact
source `5139bb52...`.

Science used official Microsoft control documentation and the checked-in v4
primitive only. It did not open or query an accepted-media path, retry or
recompute v4, infer the affected ordinal, read media, decode pixels, run a
test/build/preview/E2E, generate/import/reveal an asset, mutate a timestamp or
placeholder, push, or advance maturity.
