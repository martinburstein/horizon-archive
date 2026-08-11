# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`POLISH VIABILITY READY / FRRC-003-v4 REMAINS HELD /
MISSION CHANGE-TIME QUIESCENCE VARIANCE REQUIRED`**

Martin's controlling decision: **`Authorized new Drowned Media for Host 06`**

Work Order / viability / effective Science variances: `FRWO-005-v2` /
`FRVE-005-v2` / `FRVE-005-v2-VR-01` / `FRVE-005-v2-VR-02`

Base shell / effective Mission variances: `FRSH-005-v1` /
`FRSH-005-v1-VR-01` / `FRSH-005-v1-VR-02` / `FRSH-005-v1-VR-03`

Consumed release-command manifests: `FRRC-003-v2` / `FRRC-003-v3` /
`FRRC-003-v4`

Latest Combat return: `FRCE-005-v1-VR-03 / HOLD`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Exact next owner: **fresh Mission Captain / `mission_captain`**

## Science adjudication

Fresh Science accepted Combat's v4 stop as exact and permanent. The consumed
attempt emitted only `metadata drift ChangeTime`; it supplied no affected
ordinal, settled snapshot, complete Cloud placeholder information, tuple,
digest, final candidate scalar, or reusable manifest evidence. `FRAM-001-v1`
remains absent and v4 may not be retried, recomputed, repaired, or reclassified.

Official Windows semantics distinguish `LastWriteTime`, which belongs to the
underlying data stream, from `ChangeTime`, which records file-metadata changes
such as rename and attribute updates. The v4 `FILE_SHARE_READ`-only data handle
also excluded an existing or later writable handle or writable mapping while
it remained open. A bare monotonic `ChangeTime` advance is therefore not, by
itself, evidence that the hashed content stream changed.

Science found the manifest gate prospectively viable only under
`FRVE-005-v2-VR-02`'s stronger fail-closed adapter: unchanged path, volume and
128-bit file ID, creation/last-write times, attributes/tag/derived Cloud state,
allocation/EOF/link/delete/directory state, raw length/SHA, and complete
`CF_PLACEHOLDER_STANDARD_INFO`; no name-surrogate, topology, residency,
modified-data, validation, pin, in-sync, sync-root, or opaque identity drift;
monotonic access/change times; and, for a Cloud-only change-time advance, a
same-handle bounded `2,000 ms` settle with two consecutive identical complete
snapshots. The exact transition is recorded as scalars and never repaired or
inserted into tuple identity.

Science opened or queried no accepted-media path and ran no data, pixel, test,
build, preview, E2E, generation, import, release, reveal, or mutation operation.
The frozen candidate/tree, inherited gates, generation ordinals `0`, maturity,
OPEN records, and VR-65 remain unchanged.

## Exact next action

One fresh Mission Captain reads in full `AGENTS.md`, this handoff,
`FIRST_RUN_AGENT_WORKFLOW.md`, the registry, complete Mission profile,
`FRCE-005-v1-VR-03`, `FRVE-005-v2-VR-01`,
`FRVE-005-v2-VR-02`, `FRSH-005-v1-VR-01`,
`FRSH-005-v1-VR-03`, and `FRRC-003-v4`.

Mission issues one versioned `FRSH-005-v1-VR-04` and superseding
`FRRC-003-v5` manifest/launcher implementing the exact Science snapshot,
Cloud-standard-info, monotonic-time, bounded-settle, scalar-recording, no-
repair, and no-retry contract without changing the frozen candidate, literals,
tuple schema, count, total, gates, timeout, or protected boundaries. Mission
runs only control-file, AST, literal-set, candidate, and Git proof; it must not
invoke create/recompute or query an accepted-media path.

If and only if Mission reaches `FIRST RUN SHELL READY`, commits, pushes, and
proves exact synchronization, one fresh Combat Engineer independently verifies
the new pins and invokes `FRRC-003-v5.entries.accepted-media-create` exactly
once. Any failure is immediate `HOLD / NO RETRY`. `FRRC-003-v4` remains
consumed and no second v4 invocation is authorized.

Quartermaster remains blocked. No manifest repair, candidate code change,
selected-source inspection/import, Image work, test/build/preview/E2E,
Intelligence release, reveal, maturity update, OPEN-record closure, schedule,
automation, or `FIRST RUN COMPLETE` may begin.

All thirteen inherited process records and the separate Commandant filename /
search-scope record remain **OPEN**. VR-65 remains exactly **`DEFERRED
LIMITATION / RELEASE-PROCESS ONLY / NON-GATING / OPAQUE EXTERNAL QA
RESIDUAL`**, unknown and inaccessible. Repository QA quarantine, protected
PDF, training directory, real browser/profile/save, hidden lore, user work,
managed/temp roots, accepted-media pixels, and opaque residuals remain
protected.
