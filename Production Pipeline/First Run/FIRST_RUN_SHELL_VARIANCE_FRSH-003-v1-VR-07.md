# First Run Shell Variance Reissue - Stable Identity and Document Drift Proof

Variance ID: `FRSH-003-v1-VR-07`

Disposition: **`FIRST RUN SHELL READY / FRSH-003-v1-VR-07`**

Stage / owner: Mission Captain / `mission_captain`

Governing shell: `FIRST RUN SHELL READY / FRSH-003-v1`

Operative browser-proof predecessor: `FIRST RUN SHELL READY /
FRSH-003-v1-VR-04`

Static-control permission predecessor: `FIRST RUN SHELL READY /
FRSH-003-v1-VR-05`

Prior Mission hold: `HOLD / RETURN TO TACTICAL / FRSH-003-v1-VR-06`

Tactical return: `PLAYER EXPERIENCE READY / FRPX-003-v1-VR-03`

Functional evidence: `HOLD / VR-05 LIVE IDENTITY-STABILITY VARIANCE /
FRCE-003-v1`

Work Order: `FRWO-003-v1 / Sixfold Weir`

Mission control source inspected:
`6e768a203d01dd28f382660b1754e823fd12513f`

Frozen runtime product candidate:
`7e85154abd8dbf116c4bb84ca66afd859903d750`

Frozen browser-probe predecessor:
`d9487d8205174a7b5f688cbfccbcd5f7875ac1ad`

Frozen validation-control predecessor:
`4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Frozen predecessor lineages:
`a9776e337f1820776864a5690332c364d0fb2556` /
`bf58e528bc6ce4088f81f2c782ce2895259ab9fd`

Released rollback baseline:
`3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602`

Date: **2026-08-10**

## Decision

Tactical has removed the sole ambiguity that caused the VR-05 live stop.
Mission lifts the planning hold for one evidence-control correction and one
fail-closed release-ladder attempt.

Semantic identity and geometric stability are now independent gates. Host 05
must remain the same connected DOM node with exact semantic, focus, action,
and game-state identity and no write. Geometry must remain stable within each
fixed viewport epoch in exact document coordinates. Raw viewport movement is
allowed only when it is the exact negative of measured scroll movement; every
document residual and size delta must be strict zero on the frozen `q=1/64
CSS px` lattice. No raw or document rectangle equality is required across
different viewport sizes. Each epoch instead passes the complete direct
geometry contract independently before and after focus traversal.

No product defect is established and no product repair is authorized. Runtime
product `7e85154`, browser-probe predecessor `d9487d82`, validation-control
predecessor `4cd7fbf`, every threshold, and all passing VR-05 observations
remain frozen. VR-05 itself remains stopped evidence and is not release
acceptance.

Combat may correct only the existing E2E probe and `FRRC-002-v1` machine
summary/verifier contract. It must freeze those two edits as one new evidence-
control candidate, preserving the three current candidates as explicit
immutable predecessors. Only after the complete deterministic ladder passes
may Combat invoke exactly one fresh complete E2E under one new external GUID
root. Any failure is `HOLD` with no rerun.

Quartermaster remains blocked. This reissue is not functional acceptance,
release, copy authority, a maturity advance, or `FIRST RUN COMPLETE`.

## Frozen six-epoch interaction contract

The ordered requested viewports remain exact:

```text
0 desktop             1920 x 1080
1 laptop              1366 x 768
2 narrow               390 x 844
3 effective-200        768 x 900
4 retained-320x180     320 x 180
5 retained-320x240     320 x 240
```

Each viewport change begins a new epoch. After the viewport and image settle,
forced colors and reduced motion must be active before the `preFocus`
snapshot. No viewport or media change may occur before `postFocus`. With Host
05 active from the separately proven recovery contract, the only accepted
traversal is genuine keyboard:

```text
same Host 05 --Tab--> LOOK AT --Shift+Tab--> same Host 05
```

No pointer event or programmatic target focus may supply this evidence. At the
next epoch, raw rectangles from the prior viewport are not compared with the
new viewport. Same-node and semantic/game-state identity remain continuous;
the next epoch's geometry is freshly resolved and directly tested.

## Immutable semantic, action, and game-state identity

The Host 05 node captured before the desktop epoch must remain the same direct
DOM object, a connected `HTMLButtonElement`, before and after every traversal,
after each viewport transition, and after retained-320x240. Matching selectors
or replacement markup do not satisfy identity. Each epoch must emit and pass:

- `sameNodeFromSequenceStart.pre/post=true`;
- `sameNodeFromEpochStart.post=true`; and
- `isConnected.pre/post=true`.

Before and after each traversal, exact semantic fields must remain:

```text
tagName / implicit role:       BUTTON / button
data-hotspot-id / test id:     sixfold-weir
accessible name / aria-label:  use Sixfold Weir, in progress
data-sixfold-weir-state:       in_progress
disabled:                      false
world order:                   primary -> sixfold-weir -> meadow-return-ridge
enabled order:                 sixfold-weir -> LOOK AT -> USE -> TALK TO
                               -> Return to Chapter I, Glass Meadow
```

`preFocus` requires Host 05 active. The intermediate requires real `LOOK AT`
active and `:focus-visible`. `postFocus` requires the same Host 05 node active
and `:focus-visible`, with exact `3px solid` browser-resolved system
`Highlight`. `reverseDomPredecessor` remains `null`; `forwardSuccessor`
remains `LOOK AT`; forced-color and reduced-motion facts remain exact.

The complete sanctioned game/action snapshot must be byte-identical before
and after every traversal and across viewport transitions: exact campaign
save-key string; permitted local/session-storage projection; URL/path/hash;
scene `ruins`; verb `USE`; Host 05 `in_progress`; dialogue text and owner;
absence of Terminal/dialog/confirmation and responsible-AI session; enabled
action order; evidence; route; and world state. No storage event/write,
navigation, dialogue/evidence mutation, session creation, click/input/change/
submit dispatch, or game action is allowed. `noGameAction` and `noWrite` must
both be `true`.

`semanticIdentityStable` is an independent Boolean. It must contain no
rectangle, scroll, or coordinate comparison.

## Exact document-coordinate drift contract

For each pre/post snapshot `s`, record viewport rectangle
`V_s(R)=(x,y,width,height)` and scroll `O_s=(scrollX,scrollY)`. The sole
within-epoch position-stability space is:

```text
D_s(R).x      = V_s(R).x + O_s.x
D_s(R).y      = V_s(R).y + O_s.y
D_s(R).width  = V_s(R).width
D_s(R).height = V_s(R).height

deltaScroll       = post.O - pre.O
deltaViewport.xy  = post.V.xy - pre.V.xy
residual.xy       = deltaViewport.xy + deltaScroll
residual.width    = post.V.width  - pre.V.width
residual.height   = post.V.height - pre.V.height
```

For every required rectangle, scroll-only translation passes only when
`deltaViewport.x/y == -deltaScroll.x/y` and all four residual components are
strictly zero. Pre/post document rectangles are therefore strictly equal.
When scroll does not change, raw viewport rectangles must be strictly equal.
Width and height must never change within an epoch.

Required pre/post rectangles are `.scene-frame`, `.scene-world-content`,
`.scene-art`, browser-resolved physical `P`, semantic Host 05 `S`, label
border, derived label text-content box, Host 04, and return ridge. For every
rectangle emit raw viewport, normalized document, and image-relative values,
plus viewport delta and residual. Also emit exact requested/pre/post viewport
dimensions and exact pre/post scrollX/Y.

Every raw component, scroll offset, document component, delta, and residual
must be finite and an exact signed `q=1/64 CSS px` lattice value. Expected
positive percentage/min/max used values retain `Q(v)=floor(v/q)*q`. Measured
values and residuals may not be rounded or re-quantized after capture. There
is no epsilon, tolerance, device-pixel substitution, or alternative operator.
A viewport/media change within an epoch, off-lattice value, nonzero residual,
or size delta is immediate failure.

`geometryStable` is an independent Boolean containing only within-epoch
viewport/document residual invariants and direct geometry results. It may not
depend on accessible, focus, semantic, or game-state identity.

## Direct gates before and after traversal

At both `preFocus` and `postFocus` in each epoch, independently require every
unchanged VR-04/VR-05 direct gate:

- exact authored `45/75/20/25` and strict `Q` physical/semantic used values
  relative to actual `.scene-art`;
- equal `.scene-world-content` / `.scene-art`, zero image border/padding,
  natural `1672 x 941`, and exact cover/object-position mapping;
- bottom-anchored semantic target, physical center inside activation, and
  actual width/height each `>=44`;
- inner-`2px` / outer-`3px` label model across exact `1px` borders, label
  `S-6px`, text `S-10px`, exact containment, and no scroll escape;
- source transform from browser-resolved `P`, source anchor containment,
  actual center, and retention `>=0.95`;
- exact zero Host 04/return intersection area and no horizontal overflow;
- actual enabled order, genuine focus path, exact forced-color outline, and
  zero reduced-motion durations/delays; and
- all frozen exact layout sizes, source centers/retentions, and finite strict
  values from `FRSH-003-v1-VR-04` / `FRPX-003-v1-VR-03`.

A scroll-only translation never waives a direct source, registration, size,
target, label, containment, overlap, overflow, focus, or motion failure.

## Exact permitted Combat changes and identities

Before execution Combat may change only:

- `playtest/e2e-playthrough.mjs`: correct only the Host 05 identity/drift
  probe, its six layout records, machine summary emission, and exact aggregate
  assertions to implement this contract; preserve all other journey behavior;
- `Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json`:
  correct only the corresponding summary schema and independent verifier
  fields/failures; preserve entry count/order, commands, owners, timeouts,
  one-E2E policy, ports, external-root containment, and cleanup.

After execution Combat may additionally update only the versioned Combat
functional return and `NEXT_INSTANCE_HANDOFF.md`.

No product source, product test, shared CSS, fixture, package, dependency,
lockfile, validator, curriculum, save, story, map, scoreboard, copy, media, or
other control file may change. In particular, `App.jsx` remains byte-exact to
product `7e85154`, `sixfoldWeir.test.js` remains byte-exact to validation
control `4cd7fbf`, and the two corrected files start byte-exact from probe
`d9487d82`.

Combat must commit the two-file correction as one new evidence-control
candidate before validation. Its parentage and report must preserve full
identities `7e85154`, `d9487d82`, and `4cd7fbf` separately. Summary and
verifier identity must use `shell=FRSH-003-v1-VR-07` and truthfully retain
`browserProofPredecessor=FRSH-003-v1-VR-04`; this predecessor field is part of
lineage proof, not a decorative legacy token. Manifest remains
`FRRC-002-v1`. Current static control must pass unchanged against that truthful
lineage and the retained `semanticBottomAnchored`, `Tab -> Shift+Tab`, and
`sixfoldActivationMs` contracts.

## Machine summary and independent verifier

Exactly six ordered records must emit `id`, `sequenceIndex`, requested/pre/
post viewport, lattice identity, and independent `semantic`, `focus`, and
`geometry` groups exactly defined by `FRPX-003-v1-VR-03`. Geometry must include
pre/post scroll, every raw/document/image-relative rectangle, deltas,
residuals, direct-gate/source results, `allResidualsZero`, and
`geometryStable`. Semantic must include every same-node/connected Boolean,
pre/post fields and action/game-state snapshots, `noGameAction`, `noWrite`,
and `semanticIdentityStable`.

The verifier must independently fail on missing/extra/reordered epochs;
candidate/shell/lineage drift; missing, nonfinite, or off-lattice geometry;
viewport mismatch within an epoch; false same-node/connected/semantic/no-
write/no-action facts; wrong focus path or outline; any raw position delta not
exactly canceled by measured scroll; any nonzero document or size residual;
cross-viewport equality used as a gate; any pre/post direct-gate failure;
rounding/tolerance/re-quantization; incomplete journey/ending/PBA/media/
served-identity/cleanup; or handwritten/incomplete summary.

Each layout passes only when
`semanticIdentityStable && geometryStable && directGatesPass && focusPass` is
true. The top-level pass additionally requires the complete unchanged journey,
zero runtime errors, performance/PBA/media/served identity, external-root
ownership and cleanup contract, both equal MH-40 outcomes, null deltas, and
`successor=null`.

## Deterministic pre-live ladder

After committing the two-file evidence-control candidate, Combat must run the
complete ladder from the beginning. No prior passing result substitutes.

1. **Integrity/static:** exact two-file diff; frozen product/test blobs;
   seven placeholders; authored/min-44/label/source/order/focus contracts;
   truthful shell/predecessor identities; immutable media; JSON parse;
   `node --check`; `git diff --check`; forbidden-change scan; no tracked drift.
2. **Focused:** exact manifest command within `30s`; require `68/68` with the
   unchanged validation-control test.
3. **Related:** exact manifest command within `60s`; require `74/74`.
4. **Cold full:** exact manifest command within `60s`; require `972/972`.
5. **Validators:** exactly forty sorted `validate*.py --self-test`
   invocations; require `40/40`.
6. **Build/served identity:** exact production/TD-012 builds within `60s`,
   require `217/57`; then exact owned previews at `127.0.0.1:4173` / `:4184`
   and root/deep/JS/CSS byte identity.
7. **PBA/media/offline/performance:** require JavaScript `1,666,665`, CSS
   `119,247`, modules `217`, media `17 / 37,410,731`, no source map/request/
   dependency/product drift, Host 05 `<=2ms`, and sampled tasks `<=100ms`.

Any failure stops before live execution, cleans owned resources, and returns
`HOLD`. No repair or partial rerun is authorized under this shell.

## Sole fresh E2E, cleanup, and downstream stop

Only after all seven deterministic gates pass, Combat may invoke exact
`FRRC-002-v1.entries.complete-e2e` once within `180s`, using the frozen product
candidate, new evidence-control candidate, and one new nonexisting GUID child
strictly inside resolved OS temp and outside the repository. No real user
browser/profile/save state may be used.

The journey must emit exactly one machine-owned `first-run-live-summary.json`.
Only after the E2E succeeds and emits that summary may Combat invoke the exact
independent verifier once. If E2E fails, aborts, times out, omits the summary,
or the verifier rejects it, no rerun is authorized. Combat records exact
evidence, cleans only owned PIDs/ports/root after repeated containment proof,
issues `HOLD`, and returns to Mission.

Combat may issue `PRODUCTION FUNCTIONAL / BUILD CANDIDATE READY` only if the
same frozen product and committed evidence-control candidate pass every gate,
one summary is accepted, the verifier passes once, cleanup is exact, and the
Combat report/handoff commit is pushed and synchronized. Quartermaster remains
blocked until that passing handoff exists; Combat does not begin it or advance
maturity.

## Frozen player, canon, media, rollback, and hard stops

All seven Quartermaster placeholders, Host 05 states/actions/focus/recovery,
`L02-02`, evaluator, sanitizer, evidence/privacy, save, Host 04, later Drowned/
Witness/City/rail, both equal MH-40 outcomes, null deltas, and
`successor=null` remain unchanged. Hosts 06-15, City repair, final copy, and
all later/global scope remain deferred.

Immutable media remains exact `17 / 37,410,731`. No image/audio/media byte,
path, import, replacement, variation, movement, operation, or reveal is
authorized. No learning, route, world, meaning, identity, authority, reward,
access, successor, RP-013, or post-ending content may change.

Released rollback remains `3e3da60`. Bounded rollback removes only the new
two-file evidence-control correction and restores both files to `d9487d82`;
it does not alter product/test, rewrite history, migrate save, or touch
protected/untracked/user state.

Immediate `HOLD` applies to any product/test/threshold/count/timeout/media/
copy change; extra implementation file; second E2E; tolerance or rounding;
candidate, summary, verifier, cleanup, learning, save, route, world, later-
rail, ending, or protected-boundary variance. The protected PDF, training
directory, repository QA quarantine, Martin's browser/profile/save, hidden
lore, automation, archived workflows, schedules, and reveals remain forbidden.

## Mission validation, signature, and exact Combat handoff

Mission read the current handoff, full Mission profile, complete
`FRPX-003-v1-VR-03`, complete `FRSH-003-v1-VR-06`, complete latest
`FRCE-003-v1`, and exact current predicate at source
`6e768a203d01dd28f382660b1754e823fd12513f`.

Mission verified exact ancestry and current blob equality for runtime product
`7e85154`, probe predecessor `d9487d82`, and validation control `4cd7fbf`.
Mission reconciled Tactical's same-node, semantic/game-state, document-
coordinate, scroll, strict residual, direct-gate, summary, and verifier
contracts without selecting a product repair or weakening a threshold.
Mission ran no test, validator, build, preview, browser, E2E, summary, or
verifier and inspected no protected/user state.

Mission Captain signs **`FIRST RUN SHELL READY /
FRSH-003-v1-VR-07`**.

Exact next owner is Combat Engineer. Read the Combat profile, this reissue,
`FRPX-003-v1-VR-03`, `FRSH-003-v1-VR-06`, operative
`FRSH-003-v1-VR-04`, current complete `FRCE-003-v1`, and exact current E2E/
manifest controls. Change only the two permitted evidence-control files,
freeze one committed candidate, run the complete deterministic ladder, and
invoke the sole fresh GUID-root E2E only after every pre-live gate passes.
Require one machine summary and one verifier pass; any failure is `HOLD`
without rerun.

Do not change product/test/CSS/module/media/copy/learning/save/route/world/
later-rail/ending/maturity/map/scoreboard, inspect protected/user state, begin
Quartermaster, repair City, expand Host 06-15, create a schedule/reveal, or
call `FIRST RUN COMPLETE`.

The dedicated Mission commit, push, and exact `HEAD == origin/main` proof are
reported from Git after commit because this artifact cannot contain the hash
of the commit that first contains itself.
