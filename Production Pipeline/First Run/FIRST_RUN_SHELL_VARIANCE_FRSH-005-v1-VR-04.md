# First Run Shell Variance - Cloud Change-Time Quiescence

Variance ID: `FRSH-005-v1-VR-04`

Disposition: **`FIRST RUN SHELL READY / REQUIRED CORRECTION INCORPORATED /
CLOUD CHANGE-TIME QUIESCENCE FROZEN / FRSH-005-v1-VR-04`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / viability / effective Science variances: `FRWO-005-v2` /
`FRVE-005-v2` / `FRVE-005-v2-VR-01` / `FRVE-005-v2-VR-02`

Base shell / effective prior Mission variances: `FRSH-005-v1` /
`FRSH-005-v1-VR-01` / `FRSH-005-v1-VR-02` /
`FRSH-005-v1-VR-03`

Consumed / superseding release-command manifests: `FRRC-003-v4` /
`FRRC-003-v5`

Mission source inspected:
`d71d559ffaf6f8ea609a8ecb266bd0c1c6c0d848`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

## Mission adjudication

Science's `FRVE-005-v2-VR-02` correction is narrow, conflict-free, and
prospective. The consumed v4 result remains an exact permanent **`HOLD`**: it
emitted only `metadata drift ChangeTime`, created no manifest or reusable
tuple evidence, and may not be retried, repaired, completed, or reclassified.

Windows distinguishes data-stream `LastWriteTime` from metadata
`ChangeTime`. The frozen `FILE_SHARE_READ`-only data handle excludes a
concurrent writable data handle or mapping while it remains open, but it does
not prohibit every metadata-only transition. Mission therefore replaces only
v4's exact post-read `ChangeTime` equality rule for an otherwise unchanged
Cloud leaf with Science's complete snapshot and bounded quiescence proof.

Every product, story, learning, state, save, accessibility, presentation,
media, tuple, candidate, gate, timeout, cleanup, rollback, process, and hard-
stop field in the base shell and prior effective variances remains exact.

## Exact immutable supersession

`FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-003-v5.json` pins immutable v4 at
SHA-256
`9db5b4dde14f944bfb435c59cf9e40a5835eeed46bac199c2916b9937eba4196`.
It changes only declared identity/supersession, v5 launcher transport, the
Cloud standard snapshot and quiescence primitive, and its scalar stdout
contract.

Frozen v5 manifest SHA-256:
`6b2d8dc1ad71640394a9c9fcca244072cce608f2dc571642ab8b1444b2941e03`

Frozen v5 launcher SHA-256:
`6218e7efd2e9758f902e631d443ac4ad999e19b6ab638031ccfd6a7276a163b0`

The create and verify transports remain literal argument arrays:

```text
powershell -NoProfile -File "Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_LAUNCHER_FRRC-003-v5.ps1" -Mode create
powershell -NoProfile -File "Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_LAUNCHER_FRRC-003-v5.ps1" -Mode verify
```

The host, `-NoProfile`, `-File` transport, workdir, `60,000 ms` timeout,
expected exit, owners, and cleanup remain unchanged.

## Frozen stronger adapter

The v5 primitive implements these ordered requirements:

1. Pin v4/v5/launcher identity, exact seventeen literals and order, exact
   thirty-one literal-derived cumulative components, exact
   `17 / 37,410,731`, frozen candidate/tree, and `FRAM-001-v1` absence before
   the one future invocation. No path enumeration or discovery is permitted.
2. Repeat the complete v4 root/component topology proof. Reject every name
   surrogate, non-Cloud reparse tag, normal/reparse identity disagreement,
   path substitution or escape, directory, delete-pending state, extra hard
   link, offline/unpinned/recall/invalid/partial/fetch-implying state, or
   missing exact `PLACEHOLDER | IN_SYNC` derived state.
3. On each Cloud leaf's read-attributes preflight handle, query complete
   `CF_PLACEHOLDER_STANDARD_INFO`. Require `InSyncState=IN_SYNC`,
   `ModifiedDataSize=0`, and `OnDiskDataSize == ValidatedDataSize == EOF`;
   require nonnegative property size, valid pin state, nonzero placeholder and
   sync-root file IDs, and a required `1..4096`-byte opaque provider identity.
   Opaque identity bytes are compared only for equality in memory and are
   never interpreted or persisted. Ordinary files retain exact ChangeTime.
4. Open one exclusionary data handle with `GENERIC_READ`, `OPEN_EXISTING`,
   `FILE_SHARE_READ` only, `FILE_FLAG_SEQUENTIAL_SCAN`, and
   `FILE_FLAG_OPEN_NO_RECALL`. Its complete pre-read snapshot must exactly
   equal preflight; inability to obtain it is a stop.
5. Every complete snapshot contains normalized final path; volume serial and
   128-bit file ID; creation/access/write/change times; attributes, tag, and
   derived Cloud state; allocation/EOF, links, delete-pending, directory; and
   all Cloud standard fields including opaque identity bytes.
6. Stream exactly once from offset zero through EOF on that same handle while
   counting bytes and computing SHA-256. No seek, decode, render, thumbnail,
   preview, sample, media-metadata interpretation, or pixel inspection exists.
7. The immediate post-read snapshot must retain exact full identity, content
   length, topology, residency, and Cloud-standard fields. `LastAccessTime`
   may only remain equal or advance monotonically. `ChangeTime` may only
   remain equal or advance monotonically; reversal or any accompanying fixed-
   field drift stops. An ordinary-file ChangeTime advance always stops.
8. If and only if a Cloud leaf's sole non-access delta is advanced
   `ChangeTime`, keep that same data handle open. Starting after `250 ms`,
   sample the complete metadata domain every `250 ms`, at most eight times and
   no later than `2,000 ms`. Two consecutive settle snapshots must be exactly
   identical across the full domain. Fixed fields must still equal before-
   read, both times must remain monotonic, all no-fetch predicates must pass,
   and `ChangeTime` may not move again after the immediate snapshot. Any
   timeout, disagreement, or continuing drift stops.
9. Before closing an advanced leaf, repeat its literal leaf reparse-open and
   normal-open proof while the data handle remains open. Require the same
   final path, identity, allowed non-name-surrogate Cloud tag, containment,
   complete residency, and exact settled snapshot.
10. Emit per ordinal `LastAccessTime=unchanged|advanced` and
    `ChangeTime=unchanged|advanced`. An advance also emits before, immediate,
    and settled raw 64-bit FILETIME values as invariant decimal strings plus
    settle elapsed milliseconds and sample count. These are stdout release
    scalars only; none enters `FRAM-001-v1` or tuple identity.
11. Only after all seventeen leaves pass, construct the unchanged frozen
    path/length/SHA tuples and canonical digest in memory, require exact
    `17 / 37,410,731`, assert the frozen candidate/tree, and create
    `FRAM-001-v1` with its unchanged schema and create-new cleanup rules.
12. Never reset a timestamp, restore an old time, call a Cloud mutation API,
    hydrate, pin, relabel, copy, move, repair, suppress, roll back, or mutate
    accepted media. Any v5 failure is **`HOLD / NO RETRY`** and authorizes no
    alternate timer, second stream, widened sharing, host substitution,
    manifest repair, media mutation, or second invocation.

## Static Mission proof

Mission used control files and Git objects only:

- v4 SHA equals the v5 supersession pin;
- v5 JSON parses; launcher and joined primitive PowerShell ASTs have `0`
  syntax errors; the embedded C# interop/snapshot adapter compiles;
- v5 create/recompute arrays are the exact literal `-File` forms above;
- the literal set remains exact count `17`, unique count `17`, cumulative
  component count `31`, and frozen total `37,410,731`;
- the candidate commit exists with exact frozen tree; and
- `FRAM-001-v1` remains absent.

Mission did not invoke create/verify, resolve or query an accepted-media path,
run test/build/preview/E2E, generate/import/reveal media, or mutate runtime,
candidate, manifest evidence, save, maturity, or protected state.

## Frozen candidate, gates, and maturity

The inert product/test candidate and every inherited passing functional gate
remain accepted and frozen: focused `50/0`, legacy static-contract `29/0`,
learning/privacy `17/0`, related `58/0`, validators `40/40`, cold full
`979/0/0`, production and TD-012 fixture builds PASS, production PBA
JavaScript `1,676,508`, CSS `119,394`, modules `217`, accepted media
`17 / 37,410,731`, source maps `0`, served preflight PASS, owned process/port
cleanup PASS, and `git diff --check` PASS. None was replayed by Mission.

Complete E2E remains correctly unrun. Generation ordinals consumed remain
`0`. `FRAM-001-v1` remains absent. Quartermaster remains blocked.

Maturity impact: none. `FR-03` remains continuity `FR2`; physical-host
expression `FR0 - 1 accepted shared compression / 1 exact / 10 missing`;
learning `FR2`; behavior/save/recovery `FR1`; content `FR2`; presentation
`FR3`; and prior bounded release proof `FR4`.

## Exactly one fresh Combat verification

If and only if this Mission gate is committed, pushed, and exactly
synchronized, one fresh Combat Engineer / `combat_engineer` may:

1. read this variance, `FRVE-005-v2-VR-02`, `FRCE-005-v1-VR-03`, immutable
   v4, v5, and the exact v5 launcher;
2. independently verify both SHA pins, AST/static shape, declared v4-to-v5
   delta, literal/count/total controls, candidate/tree, and
   `FRAM-001-v1` absence without querying an accepted-media path;
3. invoke `FRRC-003-v5.entries.accepted-media-create` exactly once through
   the checked-in literal command array, with no wrapper, transcription,
   reconstruction, host substitution, or ad hoc quoting;
4. on PASS only, verify immutable `FRAM-001-v1`, exact
   `17 / 37,410,731`, lowercase per-entry and canonical tuple digests,
   candidate identity, and all per-ordinal access/change-time scalars; and
5. issue one versioned Combat close, commit only lawful evidence/report/NEXT,
   push, and prove exact synchronization before `PRODUCTION FUNCTIONAL`.

This is one fresh v5 invocation, never a v4 retry. Any failure is immediate
`HOLD / NO RETRY`. Quartermaster and every later role remain blocked unless
the exact PASS and synchronization exist.

## Protected state and process records

All thirteen inherited process records remain separate and **OPEN**: VR-17,
VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage 4,
VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope record
remains **OPEN**. This variance closes, cures, merges, waives, or renumbers
none.

VR-65 remains exactly **`DEFERRED LIMITATION / RELEASE-PROCESS ONLY /
NON-GATING / OPAQUE EXTERNAL QA RESIDUAL`**, unknown and inaccessible.
Repository QA quarantine, protected PDF, training directory, real browser /
profile/save, hidden lore, user work, managed/temp roots, accepted-media
pixels, and opaque residuals remain protected.

## Mission signature

Mission Captain signs **`FIRST RUN SHELL READY / CLOUD CHANGE-TIME
QUIESCENCE FROZEN / FRSH-005-v1-VR-04`** from exact source `d71d559...`.

No v4 retry, v5 create/recompute, accepted-media query/stream, manifest repair,
test, build, preview, E2E, generator, import, Image work, reveal, release,
maturity update, OPEN-record closure, schedule, automation, or `FIRST RUN
COMPLETE` occurred in Mission.
