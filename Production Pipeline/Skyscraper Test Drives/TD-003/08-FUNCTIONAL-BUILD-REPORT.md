# TD-003 Functional Build Report

## Document control

| Field | Value |
|---|---|
| Stage | Combat Engineer |
| Agent ID | `combat_engineer` |
| Shell | `SS-RP003-REVIEW-SAVE-v1` |
| Shell disposition | `SHELL READY` |
| Creative authority | `06-CREATIVE-TREATMENT.md`, `CREATIVE LOCK` |
| Blueprint authority | `07-EXPERIENCE-BLUEPRINT.md`, `EXPERIENCE READY` |
| Accepted predecessor | released no-action `RP003-IE-01 / IE-P3` |
| Campaign address | `RP-003 / SC-04 / CM-40-CM-50` |
| Validation tier | Tiers 2-4 |
| Disposition | `FUNCTIONALLY COMPLETE` |

## Exact build objective

Construct the complete bounded normal-play floor:

```text
exact no-action IE-P3
  -> fresh REVIEW EXPEDITION EVIDENCE
  -> CM-40 five independent conjuncts
  -> fresh zero-credit REVIEW PROVENANCE
  -> fresh SAVE EXPEDITION NOTE
  -> CM-41 validate / sanitize / atomic replace / strict read-back
  -> CM-50 verified restore
  -> one of two known write-free replay-free returns
```

The implementation had to preserve the exact nine-key record, three-key
note, seven ordered ten-key evidence records, mapping/learning-ID separation,
last-known-good byte stability, first-incomplete recovery, privacy clearing,
Tour isolation, responsive/accessibility contracts, invariant SC-04, and the
hard stop before bearing or any later route.

## Functional work completed

### Review/save authority

`CalibrationMarginReviewSave.js` now owns one bounded controller, sanitizer,
and storage-agnostic adapter:

- eligibility is rebuilt from the exact three observation IDs, strict
  sanitized Python `P3`, strict sanitized extraction `IE-P3`, the accepted
  extraction landing, source provenance, and null/false world/authority
  invariants;
- the five obligations remain separately named and fixed-order;
- review, provenance, save, and both return actions require fresh exact
  private-free intents and accept the seven fixed activation kinds;
- invalid, extra, wrong-owner, wrong-mode, stale, duplicate, forged, private,
  partial, and wrong-boundary actions fail before accepted mutation;
- provenance inspection is transient, grants zero evidence, and alone enables
  save;
- the save candidate is built only from the two strict checkpoint
  sanitizers and the exact observation authority, never rendered or
  client-authored save state;
- the strict save sanitizer admits exactly the fixed top-level, note, record,
  mapping, learning, ordering, correctness, and metadata contract;
- the adapter captures the opaque prior serialized value, sanitizes before
  serialization, performs one replacement, reads through the same sanitizer,
  compares canonical equality, and exposes only a frozen sanitized result;
- thrown, unavailable, rejected, partial, malformed, and invalid-read-back
  paths restore or retain the exact prior bytes, including the absent-key
  case;
- valid-prerequisite failure clears transients and requires fresh provenance
  plus fresh save;
- exact saved re-entry mounts CM-50 with `replayedEvents=[]`; and
- early/final returns are explicit, write-free, adapter-free, replay-free,
  clear CM-40 transients, preserve legitimate checkpoints/record, and expose
  no successor.

### Normal route and resume

`CalibrationMarginNormalEntry.js` now integrates the floor without importing
the protected complete journey:

- exact extraction finalization replaces IE-P3 with the fresh review action;
- an exact saved record restores directly to CM-50;
- transient CM-40/41 state never restores;
- if an IE-P3 reload lacks independently revalidated observation state, the
  first review attempt routes to a blank CM-10 observation boundary while
  preserving the finalized Python and IE checkpoints;
- completing those three observations reconstructs the exact fresh IE-P3
  review boundary without replay or cross-credit;
- source invalidity routes in observation, Python primary/retrieval/transfer,
  IE primary/retrieval/transfer/explanation, provenance, and invariant order;
  and
- CM-50 and CM-40 return handling preserves the existing RP-002 and City
  Threshold anchors without a write or forward route.

### App persistence and presentation

`App.jsx` owns the normal-campaign browser-storage interface only. It creates
the dedicated adapter after the existing Demo Tour guard, reads only through
the strict sanitizer, and reconnects restored CM-50 or a retained CM-40
controller to the two known anchors. No test or fixture read, seeded, or
mutated Martin's browser storage.

`CalibrationMarginReviewSave.jsx` uses the existing invariant world frame and
proven extraction-floor/custody-ledger styles:

- one active labelled owner group and one focusable heading;
- one polite atomic status;
- an ordered five-row semantic list;
- native buttons and native disabled save with a persistent associated
  reason;
- provenance detail inside the same group;
- a three-term restored-note description list;
- heading/provenance/action focus destinations;
- at least `44px` controls and `3px` visible focus through inherited styles;
- desktop `3fr/2fr`, laptop/narrow/zoom natural reflow;
- inherited forced-color and reduced-motion equivalents; and
- complete silent operation with no new runtime media or CSS.

### Closed fixture and owned launch

`review-fixtures/td003-review-save/` contains exactly the eleven fixed
scenario recipes, one inherited-world fixture, exact manifest, Vite config,
and isolation test. Recipes use public checkpoint/controller/adapter/
renderer interfaces and closed in-memory storage only. There is no URL,
query, hash, arbitrary JSON, browser storage, cookie, profile, service worker,
network, or campaign-save seam.

The manifest declares:

- `td003-review-save-v1`;
- owner `Intelligence Officer`;
- `127.0.0.1:4175`;
- `npm run review:td003-review-save`;
- the exact config, scenarios, root marker, production-exclusion markers,
  PID capture, and stop-only-that-PID cleanup contract.

All eleven scenarios use the production review-save renderer. Recovery and
return states are fixed public recipes rather than runtime debug routes.

## State and action coverage

| Requirement | Evidence |
|---|---|
| Exact entry and five-conjunct independence | controller, normal-route, and fixture tests |
| Seven modalities and one-hit semantics | all review/provenance/save modalities plus invalid/duplicate intent probes |
| Required zero-credit provenance | controller state, UI, and zero-evidence assertions |
| Native-disabled pre-provenance save | renderer source and UI tests |
| Exact nine/three/seven/ten schema | sanitizer reconstruction through both strict source checkpoint sanitizers |
| No cross-credit or substitution | ordered skill/objective, form, mapping, and correctness rejection probes |
| Atomic replacement and read-back | storage-adapter happy path and canonical equality |
| Prior-byte and absent-key stability | partial throw, normal throw, malformed read-back, rollback, and no-prior tests |
| First-incomplete recovery | observations, Python, IE, invariant, and normal-route reobservation tests |
| Private/transient clearing | state assertions on failure, return, restore, and recovery |
| Exact CM-50 restore | strict saved-record restoration and `replayedEvents=[]` |
| Two known returns | controller and App routing; write/adapter/replay remain absent |
| Tour isolation | Tour closes before adapter use and leaves seeded test bytes unchanged |
| One active semantic group | renderer/UI/fixture assertions |
| Responsive/accessibility | inherited layout/focus/forced-color/reduced-motion rules and structural tests |
| Invariant world | one unchanged SC-04 image import; no hotspot/media/style/world mutation |
| Production exclusion | source and `dist` scans for marker/path/port/scenario IDs |
| Hard stop | source, test, and bundle scans; no bearing or later route is implemented |

## Tests and validation

| Gate | Result |
|---|---|
| Focused + connected review/save suite | PASS, `19/19`, `0.354s` test duration, `0.490s` wall |
| Full game suite | PASS, `784/784`, `8.925s` |
| Readiness validator self-tests | PASS, `15/15`: `CUM-01`, `RP-002` through `RP-012`, `SIM-01` through `SIM-03` |
| Production build | PASS, `179` modules, `18.18s` Vite build |
| Sampled focused dispatch/construction | PASS, maximum observed test case `60.409ms`, below `100ms` |
| JavaScript budget | PASS, `1,193,211` bytes, `2,413` bytes below `1,195,624` |
| CSS budget | PASS, unchanged `81,676` bytes, `29` bytes below `81,705` |
| New runtime media/font/network payload | PASS, `0` bytes |
| Production served identity | PASS, owned `127.0.0.1:5174`; root/JS/CSS HTTP `200`; served JS/CSS byte-identical to `dist`; owned PID stopped; port clear |
| Fixture lifecycle | PASS, preflight-clear `4175`; owned fixture root HTTP `200` with exact marker; only captured PID stopped; port clear |
| Fixture production exclusion | PASS, fixture path, marker, port, manifest/config, and scenario IDs absent from production imports and `dist` |
| Offline/privacy/Tour scan | PASS, no request, service, account, credential, capture, media, arbitrary state, or Tour storage authority introduced |
| World plate integrity | PASS, exact unchanged identity below |
| Patch integrity | PASS, `git diff --check` |
| Protected user work | PASS, not inspected, altered, staged, moved, deleted, or committed |

The complete E2E, rendered desktop/narrow/effective-`200%` review, direct
forced-color/reduced-motion platform review, human screen-reader speech,
physical switch hardware, and final release reconciliation remain the
Intelligence Officer's independent Tier 5 work. This report does not claim
those results.

## Build and served identity

| Artifact | Candidate identity |
|---|---|
| JavaScript | `index-DTAB2O9z.js`, `1,193,211` bytes, SHA-256 `DA3B9C74CCF75720057B90C4E997AB173F0C86E2F2C1CC9C3DA9DD25F1FD6C0C` |
| CSS | `index-hd_9FUHO.css`, `81,676` bytes, SHA-256 `F7C0F531E1F1C1944AE70472FFB9D51C97A0BB09261FA5DB7F403A936E4DC834` |
| Inherited SC-04 atmosphere plate | `2,626,795` bytes, SHA-256 `1D727694FA1DBB4311F9D7974A017D6165E66F10080114E5F81FE3CFD44EFF6D` |

No CSS or runtime media was added. Production uses two additional modules
and remains under the fixed `182`-module cap.

## Quartermaster placeholder ledger

The implementation contains bounded truthful structural wording. The
Quartermaster owns final copy and asset disposition for:

| Placeholder | Current structural location and required treatment |
|---|---|
| `COPY-REVIEW-ENTRY` | IE-P3 fresh review purpose; retain no-score/no-replay meaning |
| `COPY-CM40-HEADING` | review heading/responsibility; retain five independent obligations |
| `COPY-CM40-ROW-{id}` | five row labels, owners, complete states, and non-substitution limits |
| `COPY-PROVENANCE-ACTION` | fixed action label; retain required zero-credit meaning |
| `COPY-PROVENANCE-DETAIL` | exposed/supplied ownership and unavailable/unread boundary |
| `COPY-SAVE-DISABLED` | persistent associated provenance-required reason |
| `COPY-CM41-TRANSACTION` | local/offline all-or-none validation, no ceremony/upload |
| `COPY-SAVE-FAILURE-{reason}` | bounded private-free failure and fresh inspection/save retry |
| `COPY-CM50-INTEGRITY` | exact sanitized read-back integrity only |
| `COPY-CM50-NOTE-{field}` | three fixed expedition-owned note meanings |
| `COPY-CM50-NO-ACTION` | no city/world/access/authority/exam/external action |
| `COPY-KNOWN-RETURNS` | Civic Comparison and City Threshold as already-known anchors |
| `COPY-LOCAL-PRIVACY` | local device, offline, no account/service/private material |
| `ASSET-SC04-INHERITED-PLATE` | unchanged temporary atmosphere, not `SC-04-MASTER` |
| `STYLE-QUIET-FIELD-CLOSURE` | final Image Specialist presentation polish using existing CSS means |

No structural implementation placeholder remains. Quartermaster may change
surface language only inside the fixed meanings and may not add runtime
media, score, answer, route, reward, authority, or city response.

## Defects, variances, and limitations

### Defects

**None open.**

### Variances

**None.** The implementation does not alter the shell state graph, mapping or
learning IDs, note values, schema/order, evidence truth, persistence
technology, recovery order, return destinations, focus destination classes,
accessibility contract, fixture identity, world behavior, budgets, or hard
stop.

### Honest limitations carried forward

1. The inherited City Threshold overview remains temporary SC-04 atmosphere
   and is not `SC-04-MASTER`.
2. Production CSS retains only `29` bytes of headroom.
3. Production JavaScript retains `2,413` bytes of headroom.
4. Human assistive-technology speech, physical switch hardware, native
   platform forced colors/reduced motion, and native text-only `200%` zoom
   are not claimed by this stage.
5. Closed in-memory adapter evidence does not claim Martin's actual browser
   persistence; his storage was deliberately untouched.

## Protected boundaries

- Hidden-lore vault unopened.
- Protected PDF and training directory uninspected and untouched.
- Martin's browser storage, campaign save, cookies, profile, and session were
  not inspected, seeded, changed, or used to manufacture a gated state.
- No network, Azure/Foundry call, SDK, REST/CLI, account, authentication,
  microphone, camera, file picker, service worker, or external process action
  was introduced.
- Demo Tour cannot read, write, delete, replace, restore, enter, or navigate
  the TD-003 record.
- SC-04 image, crop, geometry, materials, light/sound sources, clocks,
  maintenance, coupling, sealed boundary, and routes remain unchanged.
- No score, reward, access, permission, identity, authority, exam standing,
  exam guarantee, unavailable-source inference, or world response exists.
- The build stops at CM-50 plus only the two known returns. No bearing,
  waypoint, destination, RP-004, RP-013, successor, or later content is
  mounted or dispatched.

## Files changed

### Production

- `horizon-archive-game/src/CalibrationMarginReviewSave.js` — strict
  controller, sanitizer, adapter, record, recovery, and return contract.
- `horizon-archive-game/src/CalibrationMarginReviewSave.jsx` — semantic
  review/save/restore renderer.
- `horizon-archive-game/src/CalibrationMarginNormalEntry.js` — normal route,
  first-incomplete observation recovery, resume, and return integration.
- `horizon-archive-game/src/CalibrationMarginEntry.jsx` — review renderer
  composition inside the unchanged world frame.
- `horizon-archive-game/src/App.jsx` — normal-campaign storage adapter and
  known-anchor route wiring.
- `horizon-archive-game/package.json` — fixed fixture command only.

### Focused tests and fixture

- `horizon-archive-game/test/calibrationMarginReviewSaveFixtures.js`
- `horizon-archive-game/test/calibrationMarginReviewSaveSanitizer.test.js`
- `horizon-archive-game/test/calibrationMarginReviewSaveController.test.js`
- `horizon-archive-game/test/calibrationMarginReviewSaveNormalRoute.test.js`
- `horizon-archive-game/test/calibrationMarginReviewSaveUi.test.js`
- `horizon-archive-game/test/calibrationMarginExtractionNormalRoute.test.js`
- `horizon-archive-game/review-fixtures/td003-review-save/` exact seven-file
  package.

### Stage control

- this report;
- `TD-003/STAGE-METRICS.json`.

## Commit, push, and synchronization

- Tactical Operations Specialist predecessor resolved to
  `6675d18e603ffe2e0ceaea1bc35ce1776bf2a4e0`.
- Dedicated Combat Engineer commit:
  `PENDING_COMBAT_ENGINEER_COMMIT`.
- Push gate: push `main` immediately after the exact stage package is
  committed.
- Required synchronization: verify `HEAD == origin/main` before Quartermaster
  begins.

## Disposition

**`FUNCTIONALLY COMPLETE`**

All bounded functional requirements through CM-50 and the two known returns
are implemented and pass Tiers 2-4. Final copy/assets remain explicitly owned
by the Quartermaster; final presentation and reveal remain owned by the Image
Specialist; independent Tier 5 release remains owned by the Intelligence
Officer.

## Exact Quartermaster handoff

- **Stage / agent:** Quartermaster / `quartermaster`
- **Shell:** `SS-RP003-REVIEW-SAVE-v1`
- **Starting authority:** synchronized `SHELL READY`, `CREATIVE LOCK`,
  `EXPERIENCE READY`, this `FUNCTIONALLY COMPLETE` report, and the dedicated
  Combat Engineer commit
- **Exact build:** normal review/provenance/atomic-save/verified-restore floor
  through CM-50 plus only Civic Comparison and City Threshold returns
- **Content objective:** retire every `COPY-*` placeholder in the ledger with
  concise surface-safe production language while preserving exact action
  labels, state/schema/evidence meaning, privacy, local/offline ownership,
  unavailable/unread limits, no-score/no-authority/no-exam/no-world-response,
  and known-return meaning
- **Asset objective:** record unchanged inherited SC-04 plate provenance and
  the temporary non-master limitation; add no runtime media
- **Permitted files:** player-facing review-save wording inside
  `CalibrationMarginReviewSave.jsx` and bounded status strings in
  `CalibrationMarginReviewSave.js`/normal integration; exact related tests;
  `TD-003/09-CONTENT-ASSET-LEDGER.md`; stage metrics
- **Do not change:** controller graph, intent shape, modalities, record key,
  version, nine/three/seven/ten schema, mapping/learning IDs, source
  derivation, atomic adapter, byte-stability, recovery order, focus
  destination classes, returns, fixture, CSS, assets, world, or hard stop
- **Validation tier:** focused copy/placeholder/asset/source tests plus
  connected review-save regression and build if production source changes
- **Required disposition:** `CONTENT COMPLETE`, `REVISE`, or `HOLD`
- **Stop boundary:** no bearing, RP-004, RP-013, successor, later content,
  reward, access, authority, exam standing, external action, unavailable
  inference, city response, hidden lore, protected user work, or Martin
  storage
- **Next recipient:** Image Specialist / `image_specialist`

If final copy or asset completion appears to require a state, schema,
evidence, persistence, route, focus, accessibility, performance, fixture,
world, or hard-stop change, record a variance and return it to the earliest
owning stage rather than changing functional behavior.
