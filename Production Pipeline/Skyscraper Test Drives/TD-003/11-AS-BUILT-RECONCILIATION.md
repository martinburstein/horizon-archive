# TD-003 As-Built Reconciliation

## Document control

| Field | Value |
|---|---|
| Stage | Intelligence Officer |
| Agent ID | `intelligence_officer` |
| Test drive | `TD-003` |
| Shell | `SS-RP003-REVIEW-SAVE-v1` |
| Campaign address | `RP-003 / SC-04 / CM-40-CM-50` |
| Candidate commit | `5c843f589ba63ceef0d200e2f05b16e12f1fd2ae` |
| Candidate source chain | Commandant `5d4dd5d` through Image Specialist `5c843f5`, including the Mission return/correction chain |
| Release disposition | **`REVISE`** |
| Return owner | Image Specialist / `image_specialist` |
| Blocking finding | `TD003-INT-001` |
| Process recommendation | Provisional `TUNE`; record in `PROCESS_CHANGELOG.md` only after a completed release |

The candidate is functionally correct and clears every independent automated
gate, but it does not satisfy the shell's exact representative desktop
containment contract. At exact CSS `1920 x 1080`, required CM-40 actions extend
below the viewport and the document and command panel scroll vertically.
The Intelligence Officer therefore does not release the slice, update the
accepted playable landing, or accept the reveal yet.

## Repository and chain audit

- Starting `HEAD`: `5c843f589ba63ceef0d200e2f05b16e12f1fd2ae`.
- Expected dedicated stage chain is contiguous and ordered:
  Commandant, Colonel, Operations, Science, Mission `REVISE`, Operations
  correction, Science revalidation, Mission `SHELL READY`, Reconnaissance,
  Tactical Operations, Combat, Quartermaster, and Image Specialist.
- The Mission Captain's `d4d85a5` return is retained as process evidence.
  It correctly stopped shell issuance when Operations used a learning ID as
  the packet-mapping identity. Operations `123b4b9` and Science `5393646`
  corrected and revalidated the exact distinction before Mission issued
  `e8b7b3f`.
- Mission shell push and Combat functional push are present. The Quartermaster
  and Image commits were intentionally local pending this Intelligence gate.
- Before Intelligence documentation, the only worktree entries were the two
  protected untracked paths. They were not inspected, altered, staged, moved,
  deleted, or committed.
- Patch integrity passed with `git diff --check`.

## Requirement-by-requirement reconciliation

| Shell requirement | Direct evidence | Result |
|---|---|---|
| Exact no-action `IE-P3` plus five independent conjuncts is the sole entry | source controller, normal-route tests, fixture recipes | PASS |
| Fresh review intent alone opens CM-40 | intent/controller tests across seven modalities | PASS |
| Five rows remain independent and zero-score | source rows, sanitizer firewall, rendered fixture | PASS |
| Required provenance inspection grants no evidence | controller/UI tests and fixture | PASS |
| Fresh validated save intent is required | controller token/order tests | PASS |
| Dedicated key and exact nine-key record | sanitizer/source audit and strict tests | PASS |
| Packet mapping and learning IDs remain distinct | source line audit and seven-record sanitizer tests | PASS |
| Exact three-value expedition note | source constant and strict sanitizer tests | PASS |
| Seven ordered source-derived ten-key records | checkpoint composition and strict sanitizer tests | PASS |
| Private/transient/Tour/extra material rejects and clears | full focused controller/storage/Tour tests | PASS |
| Sanitize before one atomic replacement | storage adapter source and tests | PASS |
| Strict read-back is required for success | adapter equality/read-back tests | PASS |
| Failure preserves last-known-good bytes | throw, malformed read-back, rollback, absent-key tests and fixture | PASS |
| First-incomplete blank recovery preserves legitimate evidence | observation/Python/IE/invariant route tests and fixture | PASS |
| Exact saved re-entry mounts no-action CM-50 with no replay | normal-route/storage tests and fixture | PASS |
| CM-50 explains integrity, provenance, unavailable input, and no external action | production copy and fixture | PASS |
| Both known returns are explicit, write-free, adapter-free, and replay-free | controller/App tests and both return fixtures | PASS |
| Bearing and later rail remain absent | source and `dist` scans | PASS |
| One group, focus, status, non-color meaning, `44px`, responsive/accessibility states | structural tests plus 44 direct scenario/layout reviews | **REVISE — exact desktop vertical containment fails** |
| Offline/local privacy, Tour isolation, no authority/exam guarantee, invariant SC-04 | source/tests/network/fixture scans | PASS |
| Production caps | JS `1,195,380`; CSS `81,688`; modules `179`; no new runtime media | PASS |
| Closed fixture and launch manifest | exact eleven IDs, fixed loopback `4175`, owned PID lifecycle, no arbitrary state | PASS |
| Fixture absent from production | source and built marker/path/port/scenario scans | PASS |
| Content placeholders retired | Quartermaster ledger, copy tests, source scan | PASS |
| Exactly one reveal candidate | one image and provenance record | PASS AS CANDIDATE; acceptance withheld until release |
| Variances recorded and unauthorized divergence absent | register below | PASS |

## Exact save-schema audit

The implementation matches the final Mission shell line by line:

- key: `horizon-archive-rp003-review-save-v1`;
- record version: `rp003.review-save.v1`;
- shell version: `SS-RP003-REVIEW-SAVE-v1`;
- packet: `RP-003`;
- mapping: `RP003-A3-CALIBRATION-MARGIN`;
- checkpoint: `calibration_margin_complete`;
- continuation: `continuation`;
- `cityStateDelta=null`; `successor=null`;
- top-level order:
  `version`, `packetId`, `mappingId`, `checkpoint`, `continuation`,
  `cityStateDelta`, `successor`, `note`, `evidence`;
- note order: `correspondence`, `difference`, `unavailable`, with the exact
  three shell values;
- seven evidence records in exact Python primary/retrieval/transfer then IE
  primary/retrieval/transfer/unsupported-explanation order;
- every record has exactly the ten shell keys;
- every record uses packet mapping
  `RP003-A3-CALIBRATION-MARGIN`;
- records 1-3 use learning ID `PY-010`; records 4-7 use
  `RP003-IE-01`; and
- the strict Python and extraction checkpoint sanitizers revalidate all
  dimensions and metadata before the review-save sanitizer returns a frozen
  record.

World/access/authority/external-action fields remain validated source
conditions and are not widened into durable keys.

## Independent release evidence

### Automated product gates

| Gate | Independent result |
|---|---|
| Full game suite | `785/785 PASS`, `9.907s` |
| Readiness validators | `15/15 PASS` |
| Production build | PASS, `179` modules, `21.72s` |
| JavaScript | `index-DUDSudk8.js`, `1,195,380` bytes, SHA-256 `D98AFEF9BD364F513523831E67114FEA800208AF15882DE4767D09BA3BF71DC3` |
| CSS | `index-Dmsam-J8.css`, `81,688` bytes, SHA-256 `00A9C50F467FC704A1C69D0FDBEA3E014253C207E94DC5B2D36AB1BAEDA90DD0` |
| Budget headroom | JS `244` bytes; CSS `17` bytes; modules `3` |
| Preview preflight | owned strict `127.0.0.1:5174`, root HTTP `200` |
| Served identity | root/assets/reload HTTP `200`; JS/CSS byte-identical to `dist` |
| Complete E2E | exactly one post-build run, `109.143s`, credits reached, all emitted gates true, `runtimeErrors:false` |
| QA restoration | all incidental E2E-generated tracked captures restored |
| Fixture exclusion | marker, path, port, config/manifest identity, and scenario IDs absent from production source/`dist` |
| Cleanup | only owned listeners stopped; ports `5174` and `4175` clear |

### Closed fixture review

The manifest-owned fixture was launched once per exact allowlisted scenario,
with the process PID captured and only that PID stopped. All eleven scenarios
were directly inspected at exact CSS:

- `1920 x 1080`;
- `1366 x 768`;
- `390 x 844`; and
- width-equivalent effective-`200%` (`768 x 900`).

Across all `44` scenario/layout combinations:

- scenario and phase identities were exact;
- the inherited `1672 x 941` local SC-04 plate loaded;
- one active labelled group and one polite atomic status existed;
- every visible action was at least `44px`;
- no horizontal escape occurred;
- no console/page error occurred;
- the closed fixture read no browser storage or campaign save;
- the failed-write recipe preserved last-good bytes by deterministic source
  and tests; and
- bearing, RP-004, RP-013, successor, reward, access, authority, or city
  acceptance language did not appear.

Direct Chrome review independently corroborated the first eight scenario
families and production title at desktop/narrow. The controlled surface
reported scaled effective viewports (`1920 x 1080` request became
`2133 x 1200`; `390 x 844` became `434 x 938`). This scaling is the reason
the exact desktop containment defect was not visible in the earlier Image
review and is not accepted as a substitute for exact CSS-pixel evidence.

### Blocking exact desktop evidence

At exact CSS `1920 x 1080` in
`cm40-five-conjunct-ready`:

```text
document client:  1920 x 1080
document scroll:  1920 x 1126
panel client:     1077
panel scroll:     1313

REVIEW PROVENANCE                 top 1046.64 / bottom 1104.64
RETURN TO CIVIC COMPARISON        top 1046.64 / bottom 1104.64
RETURN TO CITY THRESHOLD          top 1114.64 / bottom 1172.64
SAVE EXPEDITION NOTE              top 1114.64 / bottom 1172.64
```

All four required actions are partly or wholly below the exact viewport.
This violates the shell requirement that the dominant world and complete
current group/actions fit at representative `1920 x 1080` without outer
vertical scroll. The same content family also has internal command-panel
scroll. This is not a platform-only or assistive-technology limitation.

## Variance register

| ID | Classification | Owner | Disposition |
|---|---|---|---|
| `TD003-MC-R01` | Process return evidence, resolved before shell | Operations / Science / Mission | The field-identity conflict was correctly returned and corrected; it is not erased from history and did not reach Marines. |
| `TD003-IMG-001` | `ACCEPTED IMPROVEMENT` | Image Specialist | `min-width:0` corrects sparse-state horizontal clipping inside shell intent; tests/build/44-layout review pass. |
| `TD003-IMG-002` | `ACCEPTED IMPROVEMENT` | Image Specialist | Human-readable fixture-only recovery label removes an internal token without state or production change. |
| `TD003-INT-001` | **`REQUIRED CORRECTION`** | **Image Specialist** | Exact `1920 x 1080` CM-40 required actions extend below the viewport and outer/panel vertical scroll violates the shell. Release is returned. |

No product, canon, campaign, learning, privacy, persistence schema, route,
world, authority, or later-content divergence was found.

## Reveal validation

The Intelligence Officer inspected the Image Specialist's exact candidate;
it was not regenerated.

| Field | Verified value |
|---|---|
| Asset | `Visual Direction/Production Masters/2026-07-26-rp003-five-filament-retention-braid-reveal/rp003-five-filament-retention-braid-v1.png` |
| Dimensions | `1672 x 941` |
| Bytes | `1,923,084` |
| SHA-256 | `574936396CC062762E07AB6EBEA3FFA60059ACA919A36A8A60A4DAFA6A2AF7B2` |
| Provenance | complete neighboring `PROVENANCE.md`; exactly one generation |
| Checklist | present in Polish Review, provenance, prompt log, SC-04 record, and Demo Increment |
| Distinctness | mid-scale five-filament object/world composition differs from TD-001 landscape clocks and TD-002 macro carrier |
| Boundary | spoiler-safe reference only; not runtime-integrated and not a schema/interface/Builder fact/`SC-04-MASTER` |

Original-resolution inspection shows five materially distinct, non-glowing
traceable strands in one inert local braid; no readable text, UI, route,
reward, access, authority, person, or visible world response. The asset is a
valid pending candidate. Because the slice is `REVISE`, reveal acceptance and
publication are withheld; Image Specialist must not regenerate it while
correcting `TD003-INT-001`.

## Limitations carried forward

1. The inherited City Threshold overview remains temporary SC-04 atmosphere
   and is not `SC-04-MASTER`.
2. Candidate headroom is only `244` JS bytes and `17` CSS bytes.
3. English is the only integrated locale.
4. Exact native forced-color, reduced-motion, text-only `200%`, human
   screen-reader speech, and physical switch hardware were not directly
   emulated. Deterministic source/tests and width-equivalent layout evidence
   pass.
5. The fixture proves closed in-memory behavior and does not claim Martin's
   real browser persistence; his storage remained untouched.
6. Chrome's responsive override exposed scaled effective CSS viewports.
   Exact CSS-pixel headless measurements therefore remain necessary for the
   desktop containment gate.

## Process metrics and provisional recommendation

`STAGE-METRICS.json` preserves all thirteen predecessor entries, including
the Mission `REVISE` and both correction stages, and resolves the Image
commit to `5c843f5`. Those stages used `6,700,302ms` (`111.67m`) before
Intelligence. Combat was the longest implementation stage (`28.01m`); Image
was the longest presentation stage (`26.21m`).

Artifact utility:

- the compact baseline-delta certificates retained stable authority, but at
  roughly 13-25 KB each they remain less compact than intended;
- the full Mission shell and Tactical blueprint were highly useful for exact
  schema/route reconciliation;
- the machine-readable ledger eliminated retrospective timestamp
  reconstruction;
- the launch manifest made fixture ownership and cleanup auditable; and
- explicit return routing prevented the mapping-ID conflict from reaching
  construction, then gave this exact presentation defect one bounded owner.

Provisional recommendation: **`TUNE`**, not redesign. Keep all eleven roles,
the Mission shell, return routing, dedicated commits, functional/content/
presentation gates, independent release, and exact reveal. For the next
completed release retrospective:

1. require exact CSS-pixel `1920 x 1080` containment as an automated Image
   gate instead of relying on a browser override's requested dimensions;
2. use one manifest-driven fixture runner to collect all scenario/layout
   measurements and owned PIDs;
3. keep browser review for visual/focus judgment, while recording the actual
   browser-reported viewport beside the request; and
4. preserve the ledger's explicit self-reference convention for a stage's
   own commit.

Do not write this recommendation into `PROCESS_CHANGELOG.md` until the
returned correction passes and TD-003 completes a release.

## Release disposition

**`REVISE`**

The functional build, content, save schema, privacy, fixture, reveal
candidate, full suite, validators, build, served identity, and E2E all pass.
`TD003-INT-001` is nevertheless a fixed shell failure and blocks
`AS BUILT RELEASED`.

No playable-demo, story-rail, packet-current-control, production-readiness,
or other master release artifact is advanced by this reconciliation.

## Exact Image Specialist return

- **Stage / agent:** Image Specialist / `image_specialist`
- **Shell:** `SS-RP003-REVIEW-SAVE-v1`
- **Starting authority:** candidate commit `5c843f5`, this independent
  reconciliation, and exact `TD003-INT-001` measurements above
- **Bounded objective:** make the full CM-40 current group and every required
  action fit inside exact CSS `1920 x 1080` with no outer vertical or
  horizontal scroll, while preserving natural laptop/narrow/effective-`200%`
  reflow
- **Permitted scope:** presentation-only CSS/layout adjustment and focused
  presentation tests; update `10-POLISH-REVIEW.md` and stage metrics
- **Do not change:** player copy, controller, schema, evidence, storage,
  state graph, actions, focus destination classes, world plate/crop, route,
  fixture identities, reveal image/provenance, canon, hard stop, or runtime
  media
- **Caps:** JS `<=1,195,624`; CSS `<=81,705`; modules `<=182`; zero new
  runtime media
- **Acceptance evidence:** exact CSS `1920 x 1080` document
  `scrollWidth==clientWidth` and `scrollHeight==clientHeight`; all four CM-40
  actions fully within the viewport; command panel has no hidden required
  content/action; all eleven scenarios remain horizontally contained at
  desktop/laptop/narrow/effective-`200%`; every visible action `>=44px`;
  focus/non-color/forced-color/reduced-motion contracts remain exact;
  focused tests and production build/caps pass
- **Reveal:** preserve the existing exact candidate; do not generate another
- **Required disposition:** `PRESENTATION COMPLETE — REVALIDATED`,
  `REVISE`, or `HOLD`
- **Next recipient:** Intelligence Officer for a fresh complete Tier 5
  release; prior passing gates are evidence, not a substitute

## Protected-work confirmation

- Hidden-lore vault was not opened or inferred from.
- `Art Of No Mans Sky Book Scan.pdf` and `Simplilearn Training Files/` were
  not inspected, altered, staged, moved, deleted, or committed.
- Martin's browser storage, campaign save, cookies, profile, and session were
  not inspected or mutated.
- Only deterministic source/tests, the closed fixture, an isolated production
  preview, and agent-owned browser contexts were used.
