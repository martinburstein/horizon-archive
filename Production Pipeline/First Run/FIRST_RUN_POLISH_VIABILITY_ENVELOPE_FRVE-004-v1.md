# Horizon Archive First Run Polish Viability Envelope

Envelope ID: `FRVE-004-v1`

Stage: Office of Science Administrator / `office_of_science_administrator`

Work Order: `FRWO-004-v1 / Stranded Lens Cradle`

Disposition: **`HOLD / SOURCE GEOMETRY NOT PROVED`**

Date: **2026-08-10**

Science source: `c71872d559a0833932a968f52cc29148cac8e992`

Baseline: `FRPB-001-v1`, reaffirmed by `FRPB-001-v1-GR-03`

Continuity: `FRCL-004-v1 / CONTINUITY LOCK`

Released authority: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Released product candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Release map / scoreboard: `FRRM-004-v1` / `FRSB-004-v1`

## Science finding

`FRWO-004-v1` is not production-viable under the immutable-media boundary.
The exact accepted Drowned master and its provenance do not prove one local,
dry-reachable weathered lens resting in a tilted conformal cradle above the
present waterline.

The plate contains one unambiguous above-water glass lens: the large suspended
ring in the distant middle background. The accepted provenance names exactly
that feature the **distant suspended Tidal Lens**. Current runtime independently
names it a suspended landmark, contrasts it with the grounded local coupling,
and instructs the evidence exercise to inspect the landmark region rather than
the grounded Terminal. Its supports rise from the flooded basin; no visible dry
ridge, shelf, material trail, drainage seam, stress-control contact, or local
approach connects it to the post-Host-05 continuation.

The dry foreground contains the released Host 04 coupling, released Host 05
source band, return ridge, circular channels, and cradle-like structural rings.
None contains a visible glass lens resting in the required tilted relationship.
The submerged cyan lens-like fragments and machinery remain in live water and
cannot prove an above-water dry host. An empty ring, a water-filled aperture, a
submerged fragment, or the distant landmark cannot be relabeled Host 06 without
inventing geometry or accessibility.

Therefore the exact Host 06 geometry is:

```text
host06.sourceRelationship = null
host06.wideMapping = null
host06.narrowMapping = null
host06.physicalCenter = null
host06.semanticTarget = null
host06.labelBox = null
host06.sourceRetention = null
host06.dryReachability = false
host06.distinctness = unproved
```

This is the mandatory fail-closed result from Work Order milestones 1 and 2.
No target may be chosen downstream, and no interface rectangle can substitute
for absent physical-host evidence.

## Exact authority and source evidence

- Science began at exact local `HEAD`
  `c71872d559a0833932a968f52cc29148cac8e992`.
- Released product candidate `a91763e28d488f31f8cf7d40ece0b2682246ba9b`
  is an ancestor of Science source. Runtime source, `package.json`, and
  `package-lock.json` are byte-identical from that candidate through Science
  source.
- Protected game-on-paper SHA-256 is exact
  `F343E1DDA0647AD82DF9E5A85D26E0A7A3025166A0BA663E4CF7019FD066D142`.
- Accepted Drowned master is exact `1672 x 941`, `2,727,857` bytes, Git blob
  `0cdf10bfaef3a94bbde1ca46b43d9baa8aef00ce`, SHA-256
  `AFA0008E3F1E0CDACB2B9E58F14E9F676729EAB9E8725A58C87D73AC489C08ED`.
- Provenance authors suspended ribs and glass phase lenses at several heights,
  submerged counterparts, one lower-middle local coupling, a lower-left return
  region, and one **distant suspended Tidal Lens**. It does not author a local
  stranded cradle or a dry route to the distant lens.
- Game-on-paper requires a weathered lens inside a tilted conformal cradle
  above the present waterline, connected to drainage/stress-control seams and
  reached from Host 05's material trail. Those relations are not visible as one
  coherent source object on the exact master.
- Current runtime alt text calls the plate a basin with a grounded local
  coupling and suspended Tidal Lens. The registered-still alt calls the latter
  a landmark; its caption says to inspect the suspended landmark region, not
  the grounded Terminal. These runtime labels corroborate rather than create
  the source classification.

## Exact crop transform and why crop retention cannot cure the failure

The accepted runtime uses the same master for canonical and narrow sources.
The canonical scene frame is `16:9`; `.scene-art` uses `object-fit: cover`.
Wide Drowned presentation uses `object-position: 50% 20%`; the `<=760px`
narrow rule uses `70% 0%`. Because the source is slightly taller than exact
`16:9`, the cover transform removes only `0.5` source pixel vertically:

```text
scale = renderedSceneWidth / 1672
visibleSourceWidth = 1672
visibleSourceHeight = 1672 * 9 / 16 = 940.5
verticalSourceOverflow = 941 - 940.5 = 0.5
```

| Required layout | CSS crop class | Exact source bounds retained |
| --- | --- | --- |
| `1920 x 1080` desktop | wide | `x=[0,1672], y=[0.1,940.6]` |
| `1366 x 768` laptop | wide | `x=[0,1672], y=[0.1,940.6]` |
| `390 x 844` narrow | narrow | `x=[0,1672], y=[0,940.5]` |
| `768 x 900` effective `200%` | wide CSS branch | `x=[0,1672], y=[0.1,940.6]` |
| `320 x 180` retained | narrow | `x=[0,1672], y=[0,940.5]` |
| `320 x 240` retained | narrow | `x=[0,1672], y=[0,940.5]` |

Whole-source area retention is `940.5 / 941 = 99.946865%`. Thus all material
regions except the last half-pixel row survive every required crop. The HOLD
is not caused by crop loss. It is caused by the absence of the required local
physical relationship in the retained source. A `>=44 x 44 CSS px` semantic
box could be drawn over scenery, but doing so would be an expressly forbidden
interface overlay presented as physical-host proof. `sourceRetention=null` is
the only honest Host 06 result because there is no lawful source band to retain.

## Answers to the eleven Work Order questions

### 1. Exact source-authored dry-reachable Host 06

**FAIL / HOLD.** No exact source-authored lens-in-cradle relationship satisfies
all of: weathered glass lens, tilted conformal cradle, above current waterline,
visible drainage/stress contacts, dry reach from Host 05, and separation from
Hosts 04/05, return ridge, live flow, and scenic landmarks. Geometry is `null`.

### 2. Distant suspended Tidal Lens

**Scenic-only and inaccessible for this Work Order.** Provenance explicitly
calls it distant. Current runtime calls it a landmark. The exact pixels show its
supports in the basin and no source-authored dry approach. The image contains
no depth/navigation evidence that can lawfully turn distance into locality.
Using it as Host 06 would be an inaccessible landmark mislabeled as a host.

### 3. Mapping, transform, retention, center, containment, and target

The exact runtime cover transform is frozen above for all six layouts. It
retains the plate but yields no lawful Host 06 source band. Consequently there
is no wide/narrow normalized rectangle, source-space bounds, actual center,
nominal anchor, retention predicate, semantic activation box, label box,
separation calculation, or `>=44px` target to approve. Any non-null value would
be an unproved geometry choice and is forbidden.

If a future authorized source revision creates a candidate, Science must again
prove from that exact immutable source: one source band and anchor, `>=95%`
band retention at all six layouts, anchor containment, actual center inside the
semantic activation, zero overlap with Host 04, Host 05, return ridge and live
flow, label entirely within the activation, no horizontal escape, and semantic
width/height each `>=44 CSS px`. This envelope does not preselect that region.

### 4. Pure fail-closed state derivation

The state architecture is viable but cannot authorize absent geometry. A
future revised Work Order must use a pure derivation with exactly these gates:

```text
if sanitizeResponsibleAIEvidence(input)?.masteryStatus !== "mastered": hidden
else if sanitizeModelChoiceEvidence(input) === null: available
else if sanitized model-choice status is remediation_required: remediation_required
else if sanitized model-choice status is in_progress/primary_complete/transfer_complete: in_progress
else if sanitized model-choice status is mastered: complete
else: hidden
```

The derivation must consume sanitized values, not raw save fields. `hidden`
means no Host 06 DOM node, focus stop, accessible name, announcement, action,
credit, or state class. It adds no state variable, save field, schema, version,
migration, detection record, replay marker, or scene mutation. This contract is
technically coherent but remains unusable while `host06.sourceRelationship` is
`null`.

### 5. Sole `L02-03` entry and unchanged learning/privacy/save

**Technically viable, geometry-blocked.** A lawful Host 06 `USE` could call the
existing `openModelChoiceExercise()` and the generic dialogue-footer launcher
could be removed under the same state predicate. No second active path may
remain. `LOOK AT` and `TALK TO` must write nothing; completed `USE` is read-only.

The following remain byte/behavior locked: `exercise.json`, scenario bank,
answer key, primary/transfer/explanation evaluators, strict `16/16 + 16/16 +
2/2` progression, actual-dimension remediation, blank retry, ownership and
confidence gates, `sanitizeModelChoiceEvidence`, `getModelChoiceEligibility`,
allowlisted `modelChoiceEvidence`, private-session clearing, save projection,
restore, and the structured-packets next boundary. Current focused learning
tests pass `8/8`. No implementation is authorized by this answer.

### 6. Focus, recovery, return, and resume owners

These are the required future owners, conditional on a later proved host:

| Boundary | Required focus owner / fallback |
| --- | --- |
| Host 05 mastery close | new Host 06 trigger; if sanitation removes it, Host 05; then current first lawful scene fallback |
| optional one-time detection | Host 06 trigger only; detection writes no state/evidence |
| LOOK / TALK | same Host 06 trigger after one-hit dispatch |
| USE / modal open | existing Terminal initial owner under `TerminalShell`; world and controls inert |
| Close / Escape | exact connected Host 06 trigger; if hidden after sanitation, Host 05; then current first lawful fallback |
| miss / hint / blank retry | existing first failed model-choice field or existing exercise heading according to current Terminal behavior; never world focus |
| primary acknowledgement | Host 06 trigger, still `in_progress` |
| transfer / explanation | existing model-choice Terminal heading/first control on deliberate reconstruction |
| mastery acknowledgement | Host 06 trigger as read-only `complete`; next-boundary control remains the next lawful forward action |
| reload unfinished | Host 06 trigger; clean model-choice session mounts only on `USE` |
| reload mastered | existing next continuation; completed Host 06 remains discoverable/read-only |
| Meadow return / redepart unfinished | Host 06 trigger; navigation is write-free |
| Meadow return / redepart mastered | existing next continuation; navigation is write-free |
| malformed prerequisite/evidence | earliest safe sanitized Drowned boundary; no Host 06, replay, skip, or credit |

Keyboard Enter/Space, pointer, touch, and switch-like semantic activation must
converge once on the same handler. CSS visual order is not focus-order proof.
The exact new source order would be Host 04, Host 05 when eligible, Host 06 when
eligible, return ridge, adventure controls, and lawful continuation, subject to
Tactical confirmation. No final layout is chosen here.

### 7. Required meaning slots without final copy

Quartermaster would own final prose. A revised shell must reserve exactly these
meaning slots and no answer-bearing eighth slot:

| State | Required meaning | Owner |
| --- | --- | --- |
| unseen as interface | physical scenery predates the player; no interface, invitation, or compatibility claim | Scene |
| available | observable local lens/cradle fact plus provisional name/uncertainty; local compatibility only | Scene + Pilot + Suit |
| in progress | expedition work is unfinished/reconstructable; physical scene unchanged | System + Scene |
| remediation required | only the actually missed model-choice tradeoff needs answer-free repair | 901 Teacher |
| complete | allowlisted evidence finalized; lens, basin, Crown, route and world unchanged | System + Scene |
| returned | same physical relation; sanitized evidence restores only the lawful boundary | Scene + Suit |
| next boundary | existing residue-learning continuation is available without claiming Host 07 expression | Pilot + System |

Machine and Builders own no line. No slot may resolve whether the lens is
stranded or correctly placed, expose an answer, imply a native lesson diagram,
or claim response, recognition, reward, access, authority, correctness, route
creation, world change, or purpose certainty.

### 8. Performance, offline, accessibility, and immediate hard stops

Released evidence is JavaScript `1,667,393`, CSS `119,247`, production modules
`217`, media `17 / 37,410,731`, and source maps `0`. If Operations later
returns with proved geometry or Martin changes media authority, the narrow cap
is:

| Measure | Future FRWO-004 cap | Global hard cap |
| --- | ---: | ---: |
| emitted JavaScript | `<=1,679,393` (`+12,000`) | `<=1,703,258` |
| emitted CSS | `<=119,547` (`+300`) | `<=119,672` |
| production modules | `<=218` (`+1`) | `<=222` |
| focused / related / cold full | `<=30s / <=60s / <=60s` | same |
| production / TD-012 fixture build | `<=60s` each | same |
| complete E2E | `<=180s` | same |
| sampled Host 06 activation | `<=2ms` | sampled main-thread task `<=100ms` |

Runtime media remains exactly `17 / 37,410,731`; new or changed runtime media
is `0 / 0`. Any local/global overage, dependency/lockfile change, network or
external storage, source map, service worker, live service/model/Azure call,
credential, telemetry, download, clipboard, Python/WASM runtime, altered media,
target below `44px`, crop/overlap/containment failure, sensory-only state,
required motion, forced-color loss, or reduced-motion regression is immediate
`HOLD` or a variance to the owning predecessor. No quality waiver is implied.

### 9. Required validation ladder

No production ladder is run under this HOLD. A later revised READY envelope
must require all of the following in one checked manifest:

1. exact source/candidate ancestry; bounded patch; protected-path checks;
   game-on-paper, Drowned master, and immutable-media identities;
2. focused pure state/geometry/order/sole-entry/privacy/save/focus tests,
   including pre-mastery absence and malformed fail-closed cases;
3. all existing model-choice cases plus one actual miss, scoped remediation,
   blank retry, transfer, explanation, ownership/confidence, mastery, close,
   Escape, and private-free restore;
4. related Host 04/05/06, Meadow return, unchanged `L03-01 + L03-02`, later
   Drowned, Witness/City/later rail, Demo Tour, and MH-40 regression;
5. cold full product tests and exactly `40` sorted curriculum/readiness
   validators using exact `--self-test`;
6. production and TD-012 fixture builds; PBA/media/source-map checks; both
   previews and root/deep/JS/CSS served-to-disk identity;
7. one non-overlapping clean-start production E2E through Host 04, Host 05,
   Host 06, real `L02-03` recovery/mastery, reload/return, unchanged later rail,
   both equal MH-40 outcomes, null deltas, `successor=null`, and zero runtime
   errors;
8. machine-measured six-layout source mapping/retention/center/separation,
   `>=44px` target/label containment, keyboard/pointer/touch/switch semantics,
   focus restoration, modal inertness, non-color states, forced color, reduced
   motion, no overflow, activation task, and no runtime request;
9. exact machine live-summary verification, owned PID/port shutdown, and
   success-artifact-aware cleanup; then `git diff --check` and candidate freeze.

String presence, renamed generic UI, an invisible duplicate route, synthetic
geometry, or manually authored live output is not evidence. Automated access
checks are not human assistive-technology certification.

### 10. Release-command and external-QA-root contract

No `FRRC-003-v1` is created while viability is HOLD. A revised READY cycle must
add a new immutable manifest rather than edit `FRRC-002-v1`. It must retain
argument-array commands, workdir, timeout, expected exit, owner, prerequisites,
output/port ownership, cleanup, exact validator order/count, two recorded
preview PIDs/ports, one browser, and exactly one E2E invocation.

The QA root contract is exact:

- create one fresh GUID child under the resolved OS temporary directory only;
- prove it did not exist, resolves inside that temp parent, and resolves outside
  the repository before any write;
- pass the exact root only through the execution environment; do not print or
  enumerate protected/user/control paths;
- declare the exact allowed success artifacts and failure diagnostic before
  execution, plus their decoded-byte token digest domain;
- on success, identity-prove and delete only declared owned artifacts, then
  attempt one nonrecursive exact-root removal after repeating containment;
- on failure, capture one compact machine diagnostic scalar in memory, close
  the owned browser, stop recorded preview PIDs, and perform the same bounded
  declared-artifact cleanup; no E2E retry;
- if root removal reports an undeclared entry, emit only opaque scalar facts
  such as `rootDeleted=0`; do not enumerate, inspect, infer, recurse, retry,
  rename, move, or delete the entry or root;
- never access either already disclosed external residual or repository
  `Production Pipeline/First Run/QA/`.

All thirteen classifications remain separate and **OPEN**: VR-17, VR-23,
VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage 4,
VR-60 Call 9, and VR-61. Manifest conformance is future candidate evidence,
not closure, waiver, merger, or cure of those records. VR-65 remains exactly
`DEFERRED LIMITATION / RELEASE-PROCESS ONLY / NON-GATING / OPAQUE EXTERNAL QA
RESIDUAL`; this Science pass did not access, enumerate, inspect, infer, retry,
clean, or delete either disclosed external residual.

### 11. Exact rollback

There is no product/test/manifest delta to roll back from this Science HOLD.
Current runtime remains byte-identical to released product candidate
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`.

For any later authorized Host 06 candidate, rollback may remove only its
bounded product/test/E2E delta, files first introduced by that bounded patch,
its new `FRRC-003-v1`, and its cycle reports. For every pre-existing permitted
product/test file, restore the exact blob from `a91763e...`; do not reset the
repository or erase later control history. Prove candidate-to-working-tree
paths before changing them. No save migration is required because no new
durable field is permitted.

Rollback must not touch released Host 04/05, accepted media/provenance,
canonical game-on-paper/surface lore, curriculum/evaluator content, save
schema/version, dependencies/lockfiles, Host 07+, Witness, City, later rail,
Measured Horizon, user/untracked work, real browser/profile/save, protected
roots, repository QA quarantine, or either opaque external residual.

## Reused systems, blocked system, and permitted freedom

The existing hotspot renderer, sanitized evidence projection, model-choice
exercise, Terminal shell, save/restore, Drowned return, responsive canonical
frame, forced-color/reduced-motion system, Demo Tour isolation, and later rail
are reusable. A pure Host 06 derivation and focus ref would be a bounded new
system only after physical-source viability exists.

Downstream has no layout, target, copy, implementation, manifest, or media
freedom under this HOLD. A later revised Work Order may retain the state,
privacy, focus, budget, QA, and rollback caps above, but Science must rerun the
geometry gate against its exact authorized source rather than inheriting this
negative finding as a target.

## Validation performed and honest limitations

- Read the active workflow, registry, Science profile, baseline and guarded
  revalidation, exact released as-built package, continuity lock, Work Order,
  release map/scoreboard, complete Drowned game-on-paper section, surface lore,
  accepted Drowned provenance and master, relevant current runtime, model-choice
  sanitizer/evaluator/save/focus source, focused tests, PBA, readiness, and
  release-command controls.
- Inspected the tracked immutable Drowned master at original resolution; did
  not generate, edit, crop, export, import, replace, vary, or reveal media.
- Verified source hashes, product-candidate ancestry, and candidate-to-current
  runtime/package byte identity.
- Ran only focused read-only tests:
  `node --test test/modelChoiceExercise.test.js test/sixfoldWeir.test.js`:
  **`17/17 PASS`**, `101.0493ms` total. These prove the released Host 05 and
  existing `L02-03` learning controls, not Host 06 geometry.
- Ran no build, preview, browser, E2E, live summary, save, media mutation,
  external service, cleanup, or release action.
- Did not list, open, inspect, change, stage, move, or delete the protected PDF,
  training tree, repository QA quarantine, real browser/profile/save, hidden
  lore, user media, or either external residual. The disclosed dirty paths
  remain protected and opaque.

## Maturity and process impact

No maturity cell or host inventory changes. `FR-03` remains continuity `FR2`,
physical host `FR0 - 1 accepted shared compression / 1 exact / 10 missing`,
learning `FR2`, behavior/save/recovery `FR1`, final-purpose content `FR2`,
presentation `FR3`, and bounded release proof `FR4` for accepted prior packages.
The forty-host inventory remains `6 exact / 1 accepted shared compression / 32
missing / 1 unadvanced Witness expression`.

No OPEN process classification changes. This is not Mission authorization,
production, an accepted compression, media permission, a reveal, a schedule,
an ending change, or `FIRST RUN COMPLETE`.

## Exact Operations return

Return to one **fresh Operations Planning Major**. Read this envelope,
`FRWO-004-v1`, `FRCL-004-v1`, current `FRRM-004-v1` / `FRSB-004-v1`, exact
immutable source/provenance, and the active media boundary.

Reassess the `FR-03` earliest-address boundary from the proved fact that exact
Host 06 geometry is absent under current media authority. Operations may issue
one revised bounded Work Order for a truthful same-address accepted compression
that does not pretend Host 06 exists, or leave one explicit Martin decision
request if the complete-game promise requires new media authority. It may not
send this Work Order to Mission, use the Tidal Lens as a local host, invent or
overlay geometry, skip to a later address without a documented exception,
change learning/save/route/world/ending, close an OPEN classification, access a
residual/protected root, start production, create a reveal/schedule, or call
`FIRST RUN COMPLETE`.
