# First Run Functional Return - Failure-Side Layout Localization

Return ID: `FRCE-003-v1-VR-12`

Disposition: **`EVIDENCE LOCALIZATION CORRECTION COMPLETE / RETURN TO FRESH MISSION / FRCE-003-v1-VR-12`**

Stage / stable agent: Combat Engineer / `combat_engineer`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Diagnostic correction shell: `FRSH-003-v1-VR-12`

Combat start source: `d63a23104884978cd0c8943b6419b1c49a1458f9`

Diagnostic-control candidate: `ce7c9abbaf1d0ffad8c1031f0398750676d4970e`

Exact immutable content candidate: `a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor: `ca89a679195c11d441a76e6c02983a6436f2ccb2`

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Date: **2026-08-10**

## Correction completed

Combat changed exactly the three VR-12-authorized control files and committed
them as one separate diagnostic-control candidate:

- `playtest/e2e-playthrough.mjs` now synchronously writes
  `<exact owned QA root>/first-run-live-diagnostic.json` before any focus or
  layout aggregate throw. The file declares schema
  `horizon.first-run.live-diagnostic.v1`, exact product/probe/validation/
  predecessor lineage, the six complete raw layout records in frozen order,
  and a deterministic exhaustive check inventory.
- The inventory is constructed as a required path set before evaluation,
  emits `path / expected / actual / pass / owner`, sorts by frozen layout index
  and then path, proves required/emitted path equality and uniqueness, records
  every false path, and groups the same complete failures by layout.
- Checks cover the VR-12 envelope/lattice, semantic/node/action/game-state,
  focus/motion, pre/post direct gates, all nine pre/post rectangle coordinate
  spaces and mappings, exact browser-used physical/semantic/label boxes,
  source values, document drift/delta/residual facts, and layout aggregates.
- Failure transport is one concise JSON line containing only diagnostic
  identity/inventory/failure/focus/layout fields. Aggregate errors cite the
  same failure count and sorted paths rather than serializing six raw records.
- `FRRC-002-v1` now freezes diagnostic schema/path, machine ownership,
  write-before-throw order, failed-run capture/retention, external-root
  cleanup, non-release status, no retry, and no verifier on a failed E2E.
- The existing FRRC-002 static test now proves those controls and the exact
  diagnostic-before-focus/layout-before-summary order. No test was added; the
  focused count remains `68`.

The diagnostic is never the live summary, verifier input, release evidence,
or a retry oracle. The accepted summary and verifier remain unchanged and can
exist/run only after a later authorized successful sole E2E.

## Exact bounded proof

- Ancestry: `a91763e`, `4cd7fbf`, and `ca89a679` are ancestors of the Combat
  start source and diagnostic candidate.
- Exact implementation delta: only the manifest, existing FRRC static test,
  and E2E changed. Product/runtime and curriculum worktree diff was empty.
- Product blob proof: `App.jsx`
  `802ceffb1a07c3b166dc2f7f06ab38138dc37596`; `drownedArchive.js`
  `1bc2f9d93c59a396ddee7ed83cde1600f76b62e7`, both unchanged from `a91763e`.
- Validation predecessor test blob:
  `d71452e6bb5e8ab5d846b8a8ec4f8b12832b03ae`.
- Evidence predecessor blobs: manifest
  `786663223f75cb3a88503c50373e79f3c5c5cf26`; E2E
  `a322016aac859f385d81dd368845de7d5bde4e5b`.
- `git diff --check`: **PASS**.
- `FRRC-002-v1` JSON parse: **PASS**.
- `node --check playtest/e2e-playthrough.mjs`: **PASS**.
- Exact manifest focused command: **68/68 PASS**, final Node duration
  `207.1096ms`, below the `30s` ceiling.

One combined local command initially attempted the two root-relative static
checks from `horizon-archive-game` and returned only path-resolution `ENOENT`/
`MODULE_NOT_FOUND`; it did not execute the diagnostic or alter evidence. The
same authorized checks were immediately run from the repository root and
passed as recorded above. The focused command in that invocation ran from its
correct manifest workdir and passed `68/68`.

## Explicitly unavailable and unchanged

Per VR-12, Combat ran no E2E, diagnostic execution, preview, browser, external
QA root, related/full suite, validator, build, served request, PBA/media scan,
live summary, verifier, or cleanup command. It made no product repair and
cannot establish whether the prior live aggregate failure is product,
geometry, environment, or evidence-owned. A fresh Mission Captain alone may
decide whether a new single-run authority is justified.

No product source, CSS, content, fixture, dependency, lockfile, curriculum,
evaluator, save, story, route, map, scoreboard, media, learning, world,
identity, authority, reward, access, ending, or maturity changed. Product
`a91763e`, validation `4cd7fbf`, and predecessor evidence `ca89a679` remain
separate immutable lineage identities. FRAB-003 remains a release HOLD.

Protected repository QA, PDF, training, browser/profile/save, hidden lore,
the disclosed predecessor temp root, and all image/media/reveal/schedule
boundaries were untouched. The existing untracked protected entries remain
unstaged. No Host 06-15, City, successor, RP-013, post-ending, maturity, or
`FIRST RUN COMPLETE` claim was made.

## Exact handoff

Exact next owner is a **fresh Mission Captain**. Inspect candidate `ce7c9ab`
against VR-12 and the frozen lineages. Review only the committed static
correction and its bounded proof; do not reuse this report as independent
proof. Mission may issue one versioned `HOLD` or `READY` decision about a new
single-run authority. Mission must not run E2E, repair product, start a
downstream role, advance maturity, or weaken any accepted threshold from this
return.

The dedicated report/handoff commit and final `HEAD == origin/main` proof are
reported from Git after commit because this artifact cannot contain the hash
that first contains itself.
