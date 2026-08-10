# First Run Shell Variance Reissue - Failure-Side Layout Localization

Variance ID: `FRSH-003-v1-VR-12`

Disposition: **`FIRST RUN SHELL READY / EVIDENCE LOCALIZATION CORRECTION ONLY / FRSH-003-v1-VR-12`**

Release state: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / owner: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Mission source inspected: `cb249d8342f7947eafd1a9d4dd0c680a1e82dc21`

Exact immutable content candidate: `a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted predecessor evidence control: `ca89a679195c11d441a76e6c02983a6436f2ccb2`

Released rollback baseline: `3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602`

Date: **2026-08-10**

## Decision

Mission preserves the release `HOLD` and reissues the shell as `READY` for
one evidence-localization correction only. Combat Engineer is the earliest
responsible owner because the unresolved condition is in the E2E failure path
and its command-manifest evidence contract, not in a proven runtime, content,
geometry, interaction, learning, save, route, media, or ending defect.

Fresh Intelligence passed focused `68/68`, related `74/74`, cold full
`972/972`, validators `40/40`, builds `217/57`, JavaScript `1,667,393`, CSS
`119,247`, media `17 / 37,410,731`, and served identity `2/2`. Its sole E2E
failed after `57.5s` at `playtest/e2e-playthrough.mjs:1550` with `Sixfold
Weir layout contract incomplete`. Output truncated before an exact failing
layout or subfield could be established; no summary existed and the verifier
did not run.

The current E2E already constructs six complete records containing semantic,
focus, geometry, direct-gate, source, lattice, residual, and aggregate facts.
Line `1549` computes `layoutPass`; line `1550` throws the complete serialized
aggregate; only lines `1552-1596` construct and write the machine summary.
The aggregate is too large to be a reliable failure transport. Truncation
therefore proves **`REQUIRED CORRECTION / EVIDENCE CONTROL / OPEN`** only. It
does not identify a false product field and cannot route a product repair.

This reissue authorizes the exact correction and bounded static/focused proof
below. It authorizes **no E2E, preview, browser, external QA root, summary
verifier, product repair, release, maturity advance, or downstream role**.
A fresh Mission Captain must inspect the committed correction before any
later single-run live authority may be considered.

## Exact failure-side diagnostic contract

### Machine-owned file and write order

After all six layout records, focus aggregate, runtime-error aggregate, and
performance values exist, but before any focus/layout/live-summary aggregate
can throw, the E2E must synchronously write exactly:

```text
<owned external QA root>/first-run-live-diagnostic.json
```

The diagnostic must derive only from the same run's in-memory raw values. It
may not reconstruct a layout, round a number, parse console text, copy an old
summary, or hand-author a result. Write failure is fail-closed and authorizes
no retry.

Exact identity envelope:

```text
schema:                      horizon.first-run.live-diagnostic.v1
producer:                    playtest/e2e-playthrough.mjs
workOrder:                   FRWO-003-v1
operativeShell:              FRSH-003-v1-VR-07
diagnosticContract:          FRSH-003-v1-VR-12
manifest:                    FRRC-002-v1
productCandidate:            exact HORIZON_ARCHIVE_PRODUCT_CANDIDATE
probeCandidate:              exact HORIZON_ARCHIVE_PROBE_CANDIDATE
validationControlCandidate:  4cd7fbf31291671dd28c0743b44a7c49aaad82bb
acceptedEvidencePredecessor: ca89a679195c11d441a76e6c02983a6436f2ccb2
externalQaRoot:              exact HORIZON_ARCHIVE_QA_DIR
runtimeErrors:               exact run Boolean
```

It contains the complete unmodified raw records for exactly these ordered
layout IDs and indexes: `0 desktop`, `1 laptop`, `2 narrow`, `3
effective-200`, `4 retained-320x180`, and `5 retained-320x240`. Missing,
extra, duplicate, or reordered rows fail.

### Exhaustive check inventory

The diagnostic also contains a deterministic `checks` array. Each entry has:

```text
path      stable dotted path beginning layouts.<id>.
expected  exact scalar, array, object, or predicate label
actual    exact captured value
pass      Boolean
owner     semantic | focus | geometry | source | aggregate
```

Paths sort by fixed layout index, then lexicographically. The expected path
set is constructed before evaluation and must equal the emitted path set
byte-for-byte. Missing and extra checks fail. An aggregate never substitutes
for its child checks.

For every layout, the inventory must localize all of the following:

1. **Envelope/lattice:** ID, sequence index, requested/pre/post viewport;
   `q=1/64`, `operator=floor`, `strict=true`, `epsilon=false`; every finite
   and exact-lattice rectangle, scroll, delta, and residual component.
2. **Semantic/node/action:** same sequence node pre/post, same epoch node post,
   connected and HTML-button truth; every pre/post tag, role, test ID,
   accessible name, explicit state, disabled state, world order, enabled
   order; exact sanctioned game state, storage, URL, scene, verb, dialogue,
   modal/session absence, evidence, route, and world equality; empty audit
   writes/events; `noGameAction`; `noWrite`; `semanticIdentityStable`.
3. **Focus/motion:** exact `Tab -> Shift+Tab`, null reverse predecessor,
   `LOOK AT` successor; pre, intermediate, and post active/focus-visible facts;
   pointer/programmatic focus false; forced colors and reduced motion true;
   exact `3px solid` same-context system `Highlight`; every Host 05/label
   animation and transition duration/delay zero; then `focusPass`.
4. **Direct gates, pre and post separately:** `authoredPhysical`,
   `boxesEqual`, `zeroImageEdges`, `imageContract`, `semanticExact`,
   `semanticBottomAnchored`, `physicalCenterInsideActivation`, `targetSize`,
   `outerLabelInset`, `innerLabelInset`, `labelBorderExact`,
   `labelPaddingExact`, `labelTextExact`, `labelContained`,
   `labelScrollContained`, `anchorContained`, `retention`,
   `host04NoOverlap`, `returnNoOverlap`, `noHorizontalOverflow`,
   `allLattice`, and `directGatesPass`.
5. **Nine rectangles, pre and post:** `frame`, `containing`, `sceneArt`,
   `physical`, `semantic`, `label`, `labelText`, `host04`, and `returnRidge`.
   For each, check every viewport/document/image-relative `x/y/width/height`,
   finite/lattice truth, document mapping, image-relative mapping, exact
   browser used values for physical `P` and semantic `S`, authored normalized
   values, `>=44 x 44`, label/text box model, source bounds/center/anchor/
   retention, overlap, containment, and overflow.
6. **Document drift:** for every rectangle, each viewport delta and residual
   component, lattice truth, `documentEqual`, `rawDeltaIsInverseScroll`, and
   `residualZero`; then delta scroll, viewport stable/exact,
   `allResidualsZero`, aggregate lattice, `geometryStable`, and
   `directGatesPass`. Cross-viewport rectangle equality remains forbidden.
7. **Layout aggregate:** only after all children exist, record
   `semanticIdentityStable`, `focusPass`, `geometryStable`,
   `directGatesPass`, and `layout.pass`. `layout.pass` remains the exact VR-07
   conjunction and may not be changed by diagnostic code.

The diagnostic must include `requiredCheckPaths`, `emittedCheckPaths`,
`checkInventoryExact`, `failureCount`, sorted `failurePaths`,
`failuresByLayout`, `focusPass`, and `layoutPass`. `failurePaths` contains
every false check, not merely the first. `failuresByLayout` groups the same
complete set without discarding paths.

After the synchronous write, print one concise JSON line containing only the
schema, candidate identities, diagnostic contract, inventory result,
`failureCount`, `failurePaths`, `focusPass`, and `layoutPass`. Any aggregate
throw cites that same count/path list instead of serializing all layouts. The
file remains authoritative if console output truncates.

### Summary/verifier separation and one-run rule

The diagnostic is failure-side localization only. It is not
`first-run-live-summary.json`, is not release evidence, cannot be passed to
`live-summary-verify`, and cannot make a failed E2E pass. The existing summary
is still written only after all live gates pass; the verifier still runs only
after a successful E2E emits that summary. No acceptance rule, threshold,
identity check, schema meaning, or verifier failure may be removed, bypassed,
or softened.

On a later failed run, the execution owner may read only this exact file in
the owned root, record every failure path/value in its report, and perform
exact owned cleanup. The diagnostic is not a retry oracle. The disclosed
VR-11 predecessor root remains forbidden to inspect or touch.

## Exact permitted correction and proof

Combat may change only:

- `playtest/e2e-playthrough.mjs` for the diagnostic builder, write-before-
  throw order, exhaustive failure index, and concise aggregate error;
- `Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json`
  only to freeze diagnostic schema/path, output ownership, failure capture,
  cleanup retention, and no-verifier-on-failed-E2E;
- `horizon-archive-game/test/sixfoldWeir.test.js` only inside its existing
  FRRC-002 contract test, adding static assertions for the diagnostic and
  unchanged summary/verifier separation without adding a test or changing
  the focused `68/68` count; and
- one versioned Combat evidence-control return and the synchronized handoff
  after validation.

No product source, content copy, CSS, module, fixture, dependency, lockfile,
curriculum, evaluator, save, story, map, scoreboard, media, or other control
file may change. The three implementation files become one separately
committed diagnostic-control candidate. Product `a91763e`, validation
`4cd7fbf`, and evidence predecessor `ca89a679` remain immutable lineage
identities; the new candidate may not replace or absorb them.

Authorized validation is limited to: exact ancestry/three-file diff/blob and
forbidden-change checks; protected-boundary and `git diff --check`; JSON parse
and `node --check playtest/e2e-playthrough.mjs`; and exact manifest `focused`
`68/68` within `30s`. No related/full tests, validators, builds, previews,
served requests, browser, external root, diagnostic execution, E2E, summary,
verifier, or cleanup command is authorized.

After PASS, Combat commits the diagnostic-control delta, writes its versioned
return and handoff, pushes, proves synchronization, and routes a **fresh
Mission Captain**. Combat may not authorize or run a fresh E2E.

## Frozen boundaries, rollback, and handoff

Everything substantive remains exact: authored `45/75/20/25`; `q=1/64` /
`Q=floor`; strict equality/no epsilon; semantic `>=44`; label/source/
retention/overlap/overflow/residual/focus/forced-color/reduced-motion gates;
seven final meanings and owners; LOOK, silent TALK, sole USE, completed
read-only behavior; `L02-02`, strict `24/24`, evaluator, remediation,
evidence/privacy/save/reload/return; Host 04, `L02-03`, later rail; both equal
MH-40 outcomes, null deltas, `successor=null`; PBA/performance/offline/served
identity; exact media `17 / 37,410,731`; immutable Drowned master; external-
root containment/cleanup; and the one-complete-E2E rule.

No Host 06-15, City repair, lesson, branch, reward, access, identity,
authority, response, successor, RP-013, post-ending content, image/media
operation, reveal, schedule, automation, or maturity advance is authorized.
Protected repository QA, PDF, training, browser/profile/save, hidden lore,
and the predecessor temp root remain forbidden.

Bounded rollback removes only the future three-file diagnostic-control delta
and restores the exact `cb249d8` blobs. It does not alter the content
candidate, reset the repository, rewrite history, migrate save, or touch
protected/untracked/user state.

Mission verified `HEAD == origin/main == cb249d8`, no candidate-to-current
product/playtest/curriculum drift, and the exact throw-before-summary order.
Mission ran no test, validator, build, preview, browser, E2E, summary,
verifier, or cleanup; changed no implementation; and inspected no protected,
user, media, or predecessor-root state.

Mission Captain signs **`FIRST RUN SHELL READY / EVIDENCE LOCALIZATION
CORRECTION ONLY / FRSH-003-v1-VR-12`** while preserving release state
**`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**.

Exact next owner is **Combat Engineer**. Implement only the three-file
diagnostic-control correction, run only the authorized proof, freeze one
committed diagnostic-control candidate, issue one versioned return, update
the handoff, push, prove synchronization, and route a fresh Mission Captain.
Do not repair product, run or authorize E2E, begin a downstream role, advance
maturity, create a reveal/schedule, or call `FIRST RUN COMPLETE`.

The Mission commit and synchronization proof are reported from Git after
commit because this artifact cannot contain the hash that first contains it.
