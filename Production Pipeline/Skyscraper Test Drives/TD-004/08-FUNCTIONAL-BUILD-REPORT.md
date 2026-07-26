# TD-004 Functional Build Report

## Document control

| Field | Value |
|---|---|
| Stage | Combat Engineer |
| Agent ID | `combat_engineer` |
| Shell | `SS-RP004-THREE-CURRENT-v1` |
| Route | `TD004-RTA-001` |
| Creative authority | `06-CREATIVE-TREATMENT.md`, `CREATIVE LOCK` |
| Experience authority | `EB-TD004-v1`, `EXPERIENCE READY` |
| Tactical predecessor | `40552d911c8dfbf5d5bc8fe5099bac2ae840df6c` |
| Exact released predecessor | TD-003 `CM-50 VERIFIED RESTORE` |
| Campaign address | `RP-004 / SC-05 / TR-00-TR-40` |
| Production budget | `PBA-TD004-v1` |
| Validation tier | Tiers 2-4 |
| Disposition | **`FUNCTIONALLY COMPLETE`** |

## Exact build objective

Construct the complete normal-production slice without importing the
protected RP-004 journey:

```text
exact no-replay TD-003 CM-50
  -> one fresh TD004-RTA-001
  -> TR-00 orient
  -> three equal deliberate observations in any order
  -> separate apparent-common-return / purpose-unknown observation
  -> strict PY-011 primary + retrieval + fresh transfer
  -> strict RP004-WORKLOAD-01 primary + retrieval + fresh transfer
  -> separate modality + agentic explanations
  -> conjunctive provenance review
  -> one atomic local replacement + strict read-back
  -> TR-40 no-replay verified restore
  -> only approved returns or optional destinationless notation
```

TD-003 remains independently byte-stable. No action creates cross-credit,
authority, a live-system effect, a traversable common return, a successor, or
a world response.

## Functional work completed

### Normal route, state, and action authority

`ThreeCurrentReachNormal.js` now owns a normal-production controller that is
separate from `ThreeCurrentReachProtectedJourney.js`.

- CM-50 retains three independent choices: the exact new Pilot route, Civic
  Comparison, and City Threshold.
- Full semantic-intent validation covers mode, shell/controller versions,
  packet, active group, owner, action, seven activation kinds, and an opaque
  fresh token.
- Validation completes before consumption; invalid input preserves a future
  valid token, while every accepted action is one-hit.
- TR-00 through TR-40 uses one active owner/content/action group at a time.
- The three relation observations are equal peers, are deliberate,
  idempotent after recording, and converge from all six orders.
- The apparent common return is a separate zero-learning observation and
  rejects purpose inference without exposing an answer or opening a route.
- Safe returns clear unsaved RP-004 transients, write nothing, replay nothing,
  and target only Calibration Margin, Civic Comparison from CM-50, or City
  Threshold as authorized.
- Optional outbound notation records only
  `destination=null`, `routeOpened=false`, and `successor=null`.

`CalibrationMarginNormalEntry.js` mounts this controller only from the exact
strict TD-003 record. It preserves the existing controller and both released
returns, reconnects a returned RP-004 player to exact no-replay CM-50, and
mounts an exact RP-004 save directly at TR-40.

`App.jsx` wires the dedicated strict RP-004 adapter into normal campaign play.
No test or fixture reads, seeds, or changes Martin's browser storage.

### Independent learning and evidence

The normal controller has its own bounded evaluators over the frozen RP-004
contract.

- Python primary and transfer require exact `8/8`; delayed retrieval requires
  exact `5/5`.
- AI-901 primary and transfer require exact `12/12`; delayed retrieval
  requires exact `8/8`.
- Modality and agentic explanations are separately scored evidence records.
- Python, AI-901, physical observations, common-return observation,
  navigation, focus, presentation, timing, and save display cannot substitute
  for one another.
- Misses expose only public failed IDs, clear private working material, enter
  answer-free repair, and return to one wholly blank retry.
- A previously finalized allowlisted learning prefix restores only
  contiguously after a fresh route and fresh physical re-observation.
- Returned controller state, status, fixture output, and durable records omit
  learner source, raw choices, reasoning, tokens, focus history, and
  diagnostics.

### Exact persistence, rollback, and restore

The new adapter owns only:

```text
horizon-archive-rp004-three-current-save-v1
```

It enforces:

- record version `rp004.three-current-save.v1`;
- exact ordered ten-key top level;
- exact ordered four-key canonical note;
- exact eight-record evidence order;
- exact ordered ten-key evidence records and all required true dimensions;
- rejection of private, extra, malformed, forged, partial, gapped, foreign,
  or later-state data;
- capture of prior verified RP-004 bytes or verified absence;
- strict candidate sanitation before one replacement;
- same-sanitizer read-back and canonical equality;
- deterministic rollback on thrown write, unavailable storage, malformed
  read-back, mismatch, or rejection; and
- an independent TD-003 raw-byte equality check at commit.

Successful read-back clears transient work and mounts TR-40 heading-first
with `replayedEvents=[]`. Nothing is recomputed, duplicated, downgraded,
cross-credited, or replayed.

### Renderer and responsive/accessibility behavior

`ThreeCurrentReach.jsx` composes the slice in the canonical first-person frame
without final art:

- one focusable `h1`, one visible owner, one content/action group, and one
  polite atomic live region;
- stable semantic target IDs and heading-first, first-invalid, or
  next-required focus;
- native buttons, text areas, selects, fieldsets, persistent labels, visible
  status, disabled Recorded peers, and explicit safe-return context;
- neutral course-authored AI-901 cases with no SC-05 answer channel;
- complete silent operation and explicit offline/no-authority/no-exam/no
  world-response language;
- `>=44px` controls, desktop split, natural narrow/zoom reflow, no intended
  horizontal escape, forced-color compatibility, and reduced-motion parity.

The renderer temporarily reuses the unchanged City Threshold overview as an
honest atmosphere placeholder. It is not claimed as an SC-05 master.

### Closed fixture

`review-fixtures/td004-three-current/` now contains:

- exact manifest `td004-three-current-v1`;
- root marker `TD004_THREE_CURRENT_FIXTURE`;
- owned loopback port `4176`;
- all 34 exact allowlisted scenarios;
- frozen in-memory controller construction only;
- production renderer reuse;
- explicit unknown-scenario rejection; and
- no query, hash, arbitrary JSON, browser storage, cookie, profile, network,
  or campaign-save seam.

The fixture identity, path, port, marker, and scenario names are absent from
normal production imports and the built production bundle.

## State and action coverage

| Requirement | Evidence |
|---|---|
| Exact TD-003 entry and three CM-50 choices | integration and controller tests |
| Seven modalities and one-hit semantics | all-modality route loop plus forged/stale/duplicate probes |
| TR-00 through TR-40 | complete controller traversal and fixture scenarios |
| Six equal observation orders | six-order convergence test and canonical save order |
| Purpose-unknown common return | local rejection and zero-evidence assertions |
| Strict independent Python | primary/retrieval/transfer production evaluator tests |
| Strict independent AI-901 | six/four/six neutral-case tests plus two explanations |
| Blank retry and private clearing | miss, repair, stale-token, and state leakage tests |
| Contiguous-prefix resume | fresh-entry/re-observation prefix test and fixture |
| Exact save and rollback | ten/four/eight/ten schema plus throw/malformed-read-back tests |
| TD-003 byte stability | independent raw-byte reader at RP-004 commit |
| No-replay restore | strict saved re-entry and empty replay list |
| Known returns and hard stop | write-free route objects, destinationless notation, no successor |
| Tour isolation | controller closes before route or adapter use |
| Accessibility/responsive | renderer and CSS structural tests |
| Fixture closure | all 34 recipes construct; unknown and production import fail closed |

## Tests and validation

| Gate | Result |
|---|---|
| Focused TD-004 + connected TD-003 suite | PASS, `18/18` |
| Full game suite | PASS, `802/802`, `9.901s` test duration |
| Readiness validator self-tests | PASS, `15/15`: `CUM-01`, `RP-002` through `RP-012`, `SIM-01` through `SIM-03` |
| Production build | PASS, `182` modules, `15.902s` |
| Sampled main-thread/focused case | PASS, individual route/controller cases remained below `100ms`; the `150.415ms` aggregate fixture case constructs all 34 scenarios and is not one runtime task |
| JavaScript budget | PASS, `1,237,250` bytes, `17,899` bytes below cap |
| CSS budget | PASS, `83,699` bytes, `2,090` bytes below cap |
| Runtime media | PASS, `19,372,371` total; `0` new bytes |
| Production served identity | PASS, owned `127.0.0.1:5184`; root/JS/CSS HTTP `200`; served byte lengths equal `dist`; owned PID stopped; port clear |
| Fixture lifecycle | PASS, owned `127.0.0.1:4176`; root HTTP `200` with exact marker; only owned PID stopped; port clear |
| Fixture production exclusion | PASS, marker/ID/path/scenario/protected-module scans returned no production match |
| Patch integrity | PASS, `git diff --check` |
| Protected work | PASS, protected PDF/directory and browser/campaign state untouched |

The complete E2E, rendered exact-viewport review, platform forced-colors and
reduced-motion review, physical switch hardware, human screen-reader speech,
and final release reconciliation remain Intelligence Officer work. This stage
does not claim those results.

## Build and served identity

| Artifact | Candidate identity |
|---|---|
| JavaScript | `index-eb39pAwv.js`, `1,237,250` bytes, SHA-256 `EF2BC8ED3CB8856DD7A8C44FA3707C78C201E42FE84CD607246709B0DFE51456` |
| CSS | `index-KrTPDfvo.css`, `83,699` bytes, SHA-256 `3F9B98753E35D998664410988788B44B61A474A86E8F37DB6E00AFEA128761BE` |
| Reused temporary atmosphere | `city-threshold-overview-master.png`, `2,626,795` bytes, SHA-256 `1D727694FA1DBB4311F9D7974A017D6165E66F10080114E5F81FE3CFD44EFF6D` |

## Quartermaster placeholder ledger

| Placeholder | Current location | Required treatment |
|---|---|---|
| `TD004-COPY-CM50-ROUTE` | CM-50 status and three-choice framing | preserve exact Pilot choice, released-return parity, and no invitation/authority meaning |
| `TD004-COPY-TR00-ORIENT` | arrival heading/body/status | retain awe, invariant world, and zero-evidence arrival |
| `TD004-COPY-TR10-RELATIONS` | three relation rows/actions | make the equal peer distinctions concise without implying answers or purpose |
| `TD004-COPY-TR20-COMMON` | apparent-return boundary/error | retain apparent/capped/non-traversable/purpose-unknown meaning |
| `TD004-COPY-PYTHON` | primary/retrieval/transfer instructions and statuses | retain sanitized-replica ownership, exact blankness, and no live control |
| `TD004-COPY-AI901` | neutral cases, key, repair, and statuses | retain course ownership and no landscape answer channel |
| `TD004-COPY-EXPLANATIONS` | modality and agentic groups | retain separate scoring and no external-action authority |
| `TD004-COPY-REVIEW` | three independent rows and provenance | do not collapse into score, rank, badge, or readiness verdict |
| `TD004-COPY-SAVE` | transaction/failure/read-back statuses | retain local/offline/all-or-none/last-good semantics without upload or ceremony |
| `TD004-COPY-TR40` | restored note and continuation | retain no replay, purpose unknown, destinationless notation, and exact returns |
| `TD004-COPY-NEGATIVE-AUTHORITY` | persistent footer | retain offline/no-live/no-authority/no-exam/no-world-response limits |
| `TD004-ASSET-SC05-PLACEHOLDER` | reused City Threshold overview | record unchanged provenance; replace or explicitly retain only under later visual authority |
| `TD004-STYLE-STRUCTURAL` | new bounded CSS | Quartermaster changes copy only; Image Specialist owns final presentation |

No functional placeholder remains. Quartermaster may refine bounded
player-facing language and the asset ledger but may not change the controller
graph, evaluator truth, evidence, schema, storage, returns, focus classes,
fixture boundary, world behavior, budget, or hard stop.

## Defects, variances, and limitations

### Defects

**None open.**

### Variances

**None.** The implementation follows the issued state graph, route, learning
identities, persistence contract, owner/focus/status grammar, return set,
fixture identity, production budgets, and hard stop.

### Honest limitations

1. The inherited City Threshold overview is a temporary SC-05 atmosphere
   placeholder, not an accepted SC-05 master.
2. Final surface copy and asset disposition remain Quartermaster work.
3. Final art, exact viewport polish, and reveal remain Image Specialist work.
4. Browser/device persistence was validated with closed adapters, not
   Martin's actual storage, which remained untouched.
5. Human assistive-technology and physical-switch results remain unclaimed.

## Protected boundaries

- Hidden-lore vault unopened.
- Protected PDF and training directory not inspected, changed, staged, moved,
  deleted, or committed.
- Martin's browser storage, campaign save, cookies, session, and profile were
  not inspected or mutated.
- TD-003 source behavior, key, record, two returns, assets, and bytes remain
  independently preserved.
- Protected `ThreeCurrentReachProtectedJourney.js` remains absent from normal
  production imports.
- No network, live Azure/Foundry operation, SDK/REST/CLI call, credential,
  endpoint, request, response, account, external action, exam guarantee,
  access, authority, reward, permission, identity, or world response was
  introduced.
- No traversable common return, RP-005, RP-013, successor, post-ending
  content, or hidden-lore answer is mounted, named as reachable UI, or
  dispatched.

## Files changed

### Production

- `horizon-archive-game/src/ThreeCurrentReachNormal.js`
- `horizon-archive-game/src/ThreeCurrentReach.jsx`
- `horizon-archive-game/src/CalibrationMarginNormalEntry.js`
- `horizon-archive-game/src/App.jsx`
- `horizon-archive-game/src/styles.css`
- `horizon-archive-game/package.json`

### Focused tests and closed fixture

- `horizon-archive-game/test/threeCurrentReachNormal.test.js`
- `horizon-archive-game/test/threeCurrentReachNormalIntegration.test.js`
- `horizon-archive-game/test/threeCurrentReachFixture.test.js`
- `horizon-archive-game/test/threeCurrentReachUi.test.js`
- `horizon-archive-game/test/calibrationMarginReviewSaveNormalRoute.test.js`
- `horizon-archive-game/review-fixtures/td004-three-current/`

### Stage control

- this report;
- `TD-004/STAGE-METRICS.json`.

## Commit, push, and synchronization

- Tactical predecessor:
  `40552d911c8dfbf5d5bc8fe5099bac2ae840df6c`.
- Dedicated Combat Engineer commit:
  `PENDING_COMBAT_ENGINEER_COMMIT`.
- Push gate: push `main` after this exact package is committed.
- Required synchronization: verify `HEAD == origin/main` before Quartermaster.

## Disposition

**`FUNCTIONALLY COMPLETE`**

The complete bounded TD-004 behavior through TR-40 is implemented and passes
Tiers 2-4. Quartermaster owns final surface copy and asset accounting; Image
Specialist owns final presentation and one reveal candidate; Intelligence
Officer owns independent Tier 5 release.

## Exact Quartermaster handoff

- **Stage / agent:** Quartermaster / `quartermaster`
- **Shell:** `SS-RP004-THREE-CURRENT-v1`
- **Starting authority:** synchronized `SHELL READY`, Recon `CREATIVE LOCK`,
  `EB-TD004-v1 EXPERIENCE READY`, this `FUNCTIONALLY COMPLETE` report, and the
  dedicated Combat Engineer commit
- **Exact build:** one normal `TD004-RTA-001` beside both released CM-50
  returns; complete TR-00 through TR-40 controller, renderer, strict
  independent learning, atomic local save/rollback/read-back, restore,
  approved returns, and closed 34-scenario fixture
- **Content objective:** retire every `TD004-COPY-*` item with concise
  owner-separated production language while preserving exact action labels,
  answer-free boundaries, independent evidence, purpose unknown, local/offline
  ownership, no-live/no-authority/no-exam/no-world-response, and known returns
- **Asset objective:** disposition `TD004-ASSET-SC05-PLACEHOLDER` honestly;
  add no runtime media unless separately authorized within `PBA-TD004-v1`
- **Permitted files:** bounded player-facing strings/status mappings in
  `ThreeCurrentReach.jsx` and `ThreeCurrentReachNormal.js`; exact related
  copy tests; `09-CONTENT-ASSET-LEDGER.md`; stage metrics
- **Do not change:** controller graph, intent shape, modalities, evaluators,
  learning identities, dedicated key/version, ten/four/eight/ten schema,
  source sanitation, atomic adapter, TD-003 byte check, recovery order,
  focus/owner/status IDs, return targets, fixture identity, CSS/layout,
  assets/world, budget, or hard stop
- **Validation tier:** focused copy/placeholder/asset/source checks plus
  connected TD-004 regression and build/budget if production source changes
- **Required disposition:** `CONTENT COMPLETE`, `REVISE`, or `HOLD`
- **Stop boundary:** no final art/reveal, RP-005, RP-013, successor,
  traversable common return, purpose inference, reward, permission, access,
  authority, exam standing/guarantee, external action, world response, hidden
  lore, protected user work, or Martin storage
- **Next recipient:** Image Specialist / `image_specialist`

If content or asset completion appears to require a state, evidence,
persistence, route, focus, accessibility, performance, fixture, world, or
hard-stop change, record a variance and return it to the earliest owning
stage rather than altering functional behavior.
