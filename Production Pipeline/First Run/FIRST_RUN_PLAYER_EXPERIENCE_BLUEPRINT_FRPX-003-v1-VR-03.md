# First Run Player Experience Blueprint Clarification - Sixfold Weir Identity and Drift

Clarification ID: `FRPX-003-v1-VR-03`

Disposition: **`PLAYER EXPERIENCE READY / FRPX-003-v1-VR-03`**

Stage / owner: Tactical Operations Specialist / `tactical_operations_specialist`

Clarifies: `FRPX-003-v1`, `FRPX-003-v1-VR-02`

Governing return: `HOLD / RETURN TO TACTICAL / FRSH-003-v1-VR-06`

Operative browser-proof shell: `FIRST RUN SHELL READY /
FRSH-003-v1-VR-04`

Frozen runtime product candidate:
`7e85154abd8dbf116c4bb84ca66afd859903d750`

Frozen browser-probe candidate:
`d9487d8205174a7b5f688cbfccbcd5f7875ac1ad`

Frozen validation-control candidate:
`4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Frozen predecessor lineages:
`a9776e337f1820776864a5690332c364d0fb2556` /
`bf58e528bc6ce4088f81f2c782ce2895259ab9fd`

Released rollback baseline:
`3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602`

Tactical control source inspected:
`e8f09ab526b35adba658189bb4934315e0db230c`

Date: **2026-08-10**

## Decision

The VR-05 `identityStable` composite is not an acceptable player-experience
gate because it makes semantic identity depend on raw viewport coordinates.
Tactical replaces that one composite with two independent fail-closed facts:

1. **Semantic/action identity:** the exact same connected Host 05 DOM node,
   accessible/data/state/action-order identity, and sanctioned game state must
   survive every layout epoch and the genuine keyboard traversal without a
   write or action.
2. **Geometric stability:** within one fixed viewport epoch, pre-key and
   post-key rectangles are compared in exact document coordinates. A raw
   viewport translation is allowed only when it is exactly the inverse of the
   measured viewport scroll delta. Every residual must be exact zero on the
   current `q=1/64 CSS px` lattice. Width, height, relative geometry, source,
   target, label, overlap, containment, and overflow gates remain direct and
   must pass independently both before and after traversal.

Geometry is not required to be byte-equal between different viewport sizes.
The six layouts are sequential reflow epochs; each new epoch must independently
resolve the frozen authored/browser geometry contract. Cross-epoch semantic
identity remains exact and same-node identity remains mandatory.

This clarification requests no product repair and changes no threshold. It
does not accept either VR-05 failure because the required post rectangles and
scroll offsets were not emitted. It changes no product, test, E2E, manifest,
summary, verifier, fixture, copy, or media and authorizes no execution. Mission
must readjudicate before Combat may act.

## Exact six-layout epochs

The layout order and requested viewports remain:

```text
0 desktop             1920 x 1080
1 laptop              1366 x 768
2 narrow               390 x 844
3 effective-200        768 x 900
4 retained-320x180     320 x 180
5 retained-320x240     320 x 240
```

Each `setViewportSize` begins a new `viewportEpoch`. After the requested
viewport and image have settled, activate forced colors and reduced motion,
prove both media queries active, and take the epoch's `preFocus` snapshot.
No pointer event or programmatic target focus is permitted. Then execute:

```text
Host 05 --real Tab--> LOOK AT --real Shift+Tab--> same Host 05 node
```

Take `postFocus` before restoring media or changing viewport. No viewport or
media change is allowed between the two snapshots. At the transition to the
next epoch, do not compare prior and next raw rectangles: viewport reflow is
expected. Instead require the same Host 05 node and semantic/game-state
snapshot to persist, then evaluate the next epoch's direct geometry contract.

## Immutable semantic and action identity

Same-node identity is required. A direct DOM object/reference comparison must
prove that the Host 05 element captured before desktop remains the same
connected `HTMLButtonElement`:

- after each viewport transition;
- before and after each `Tab -> Shift+Tab` traversal; and
- after the retained-320x240 record.

A matching selector or reconstructed node with identical attributes is not
same-node identity. The machine record cannot serialize a DOM reference, so it
must emit direct comparison Booleans `sameNodeFromSequenceStart`,
`sameNodeFromEpochStart`, and `isConnected` for every pre/post snapshot. Every
Boolean must be `true`.

For every epoch, the following exact semantic fields are recorded before and
after and must be identical except for the separately specified focus path:

```text
tagName:                  BUTTON
implicit role:            button
data-hotspot-id/test id:  sixfold-weir
aria-label/name:           use Sixfold Weir, in progress
data-sixfold-weir-state:  in_progress
disabled:                 false
world DOM order:          primary -> sixfold-weir -> meadow-return-ridge
enabled order:            sixfold-weir -> LOOK AT -> USE -> TALK TO
                          -> Return to Chapter I, Glass Meadow
```

`preFocus` requires Host 05 active as the separately owned recovery result.
The intermediate record requires the real `LOOK AT` button active and
`:focus-visible`. `postFocus` requires the same Host 05 node active and
`:focus-visible`, with exact `3px solid` browser-resolved system `Highlight`.
The key path remains `Tab -> Shift+Tab`, reverse DOM predecessor remains
`null`, and forward successor remains `LOOK AT`.

The sanctioned game/action snapshot must also remain byte-identical before and
after every traversal and across viewport transitions:

```text
exact campaign save-key string
complete local/session storage projection allowed by the fixture
location href/path/hash
main scene id = ruins
selected verb = USE
Host 05 state = in_progress
dialogue text and speaker/owner
Terminal/dialog/confirmation absence
responsible-AI session absence
enabled action-order snapshot
```

There must be no storage event/write, navigation, dialogue mutation, evidence
mutation, session creation, route/world change, click/input/change/submit
dispatch, or game action. Emit `noGameAction=true`, `noWrite=true`, and exact
before/after values. Focus itself is not a game write.

Semantic acceptance is one independent Boolean, `semanticIdentityStable`, and
must not contain or depend on any rectangle comparison.

## Exact coordinate space and lattice

For each snapshot `s` and viewport-relative rectangle
`V_s(R)=(x,y,width,height)`, record the exact viewport scroll
`O_s=(scrollX,scrollY)` and define the primary comparison rectangle in
document coordinates:

```text
D_s(R).x      = V_s(R).x + O_s.x
D_s(R).y      = V_s(R).y + O_s.y
D_s(R).width  = V_s(R).width
D_s(R).height = V_s(R).height
```

This document-coordinate normalization is the sole position-stability space
within an epoch. Image-relative coordinates are also emitted to prove the
existing registration/source relations, but they do not replace the document
drift gate.

The current browser lattice remains `q=1/64 CSS px`. Science's operator for
positive bounded percentage/min/max used values remains:

```text
Q(v) = floor(v / q) * q
```

All raw rectangle components, scroll offsets, document-coordinate components,
and deltas must be finite and exact lattice values: `value/q` must be an
integer. `Q` is used to derive expected physical/semantic layout values; it is
not applied to measured positions or residuals after the fact. There is no
epsilon, nearest rounding, decimal serialization tolerance, or device-pixel
substitution. A changed lattice/operator or an off-lattice value is an
environment-identity `HOLD`.

## Scroll-only translation and residual drift

Within a fixed epoch, let:

```text
deltaScroll.x = post.scrollX - pre.scrollX
deltaScroll.y = post.scrollY - pre.scrollY

deltaViewport(R).x = post.V(R).x - pre.V(R).x
deltaViewport(R).y = post.V(R).y - pre.V(R).y

residual(R).x = deltaViewport(R).x + deltaScroll.x
residual(R).y = deltaViewport(R).y + deltaScroll.y
residual(R).w = post.V(R).width  - pre.V(R).width
residual(R).h = post.V(R).height - pre.V(R).height
```

Scroll-only translation passes only when all four residual components are
strictly `0` for every required rectangle. Equivalently, pre/post `D_s(R)` are
strictly equal. If scroll is unchanged, raw pre/post viewport rectangles must
therefore be strictly equal. If scroll changes, the only allowed raw `x/y`
change is exactly `-deltaScroll`; widths and heights never change.

Required pre/post rectangles are:

- `.scene-frame`;
- `.scene-world-content`;
- `.scene-art`;
- browser-resolved physical `P` derived from `.scene-art`;
- actual semantic Host 05 button `S`;
- its visible `span` label border box and derived text-content box;
- Host 04; and
- return-ridge hotspot.

For each, emit raw viewport rectangle, normalized document rectangle,
image-relative rectangle, delta, and residual. Emit exact pre/post viewport
width/height and scrollX/Y. A viewport change between pre/post snapshots is an
immediate failure rather than a reflow allowance.

An image and Host 05 moving together because of a true document layout shift
can retain equal image-relative coordinates, but its document residual is
nonzero and therefore fails. A Host 05 shift relative to an unmoved image
fails both document residual and direct image-relative registration. Scroll
cannot conceal either defect.

`geometryStable` is an independent Boolean and must contain only the exact
within-epoch residual/viewport invariants plus the direct gates below. It may
not depend on accessible name, data state, focus identity, or game state.

## Direct geometry and source gates remain independent

At both `preFocus` and `postFocus` in all six epochs, independently require:

- exact authored `45/75/20/25` and strict browser `Q` physical/semantic used
  values relative to the actual `.scene-art` content rectangle;
- equal `.scene-world-content` / `.scene-art` boxes, zero image border/padding,
  current `object-fit:cover` / object-position, and natural `1672 x 941`;
- semantic bottom anchor, physical center inside activation, and actual
  semantic target width/height each `>=44`;
- label inner `2px`, outer `3px`, exact `1px` border/padding, label `S-6px`,
  text content `S-10px`, strict containment, and no scroll escape;
- source transform from browser-resolved `P`, nominal anchor containment,
  actual center emission, and retention `>=0.95`;
- exact zero Host 04 and return-ridge intersection area;
- no horizontal overflow; and
- all finite strict values, with no screenshot/viewport/frame substitution.

The six exact size/center/retention expectations in `FRPX-003-v1-VR-02`
remain unchanged. Pre and post must each pass them. A scroll-only translation
never waives a direct size, mapping, label, source, target, containment, or
overlap failure.

## Machine summary schema

After a future Mission authorization, each of exactly six ordered layout
records must contain:

```text
id, sequenceIndex, requestedViewport, preViewport, postViewport
lattice { q: 1/64, operator: floor, strict: true, epsilon: false }

semantic {
  sameNodeFromSequenceStart.pre/post
  sameNodeFromEpochStart.post
  isConnected.pre/post
  tagName/role/testId/ariaLabel/state/disabled.pre/post
  worldOrder.pre/post
  enabledOrder.pre/post
  actionState.pre/post
  gameState.pre/post
  noGameAction, noWrite, semanticIdentityStable
}

focus {
  keyPath, reverseDomPredecessor, forwardSuccessor
  preActive, intermediate, postActive
  intermediateFocusVisible, postFocusVisible
  outlineWidth/style/color/systemHighlight
  forcedColors, reducedMotion, hostMotion, labelMotion
}

geometry {
  pre/post {
    scrollX, scrollY
    frame, containing, sceneArt, physical, semantic, label, labelText,
    host04, returnRidge
    documentCoordinates for every rectangle
    imageRelativeCoordinates for every rectangle
    directGateResults and source transform/results
  }
  deltaScroll
  per-rectangle viewportDelta and residual {x,y,width,height}
  allResidualsZero
  geometryStable
}

pass
```

The top-level summary must preserve exact candidate identities, shell ID,
layout order, complete journey, runtime/focus/performance/PBA/media/served
identity, external-root containment, zero errors, both MH-40 outcomes, null
deltas, `successor=null`, and cleanup fields already frozen by FRRC-002.

## Independent verifier failures

The verifier must fail closed for any of the following:

- missing, extra, duplicated, or reordered layout/sequence index;
- candidate, shell, placeholder, PBA, media, served identity, journey, ending,
  external-root, or cleanup mismatch;
- a missing/nonfinite/off-lattice rectangle, scroll, delta, or residual;
- pre/post viewport mismatch within an epoch or requested viewport mismatch;
- any same-node or connected Boolean false, or a same-selector replacement
  treated as identity;
- semantic field, accessible name, state, world/enabled order, action-state,
  storage, URL, scene, verb, dialogue, modal/session, evidence, route, or world
  mismatch;
- `noGameAction` or `noWrite` false;
- a focus path other than `Tab -> Shift+Tab`, wrong intermediate/final target,
  pointer/programmatic focus evidence, non-focus-visible target, outline other
  than exact `3px solid` resolved system `Highlight`, or nonzero motion timing;
- any raw `x/y` change not exactly canceled by measured scroll, any nonzero
  document residual, or any width/height residual;
- using image-relative equality alone to excuse document drift;
- requiring cross-viewport raw/document size equality instead of evaluating
  the next epoch's direct layout contract;
- any pre or post direct geometry/source/target/label/overlap/overflow failure;
- rounding, epsilon, tolerance, unquantized expected arithmetic, frame-derived
  source mapping, handwritten summary, or accepted incomplete aggregate.

The top-level record passes only when all six
`semanticIdentityStable && geometryStable && directGatesPass && focusPass`
facts are true and every unchanged release gate passes.

## Reconciliation with the thirty-check blueprint

All thirty `FRPX-003-v1-VR-02` checks remain operative. This clarification
replaces only the ambiguous identity portion of `PX03-14`, `PX03-23`,
`PX03-28`, and `PX03-29`:

| Check | VR-03 exact clarification |
| --- | --- |
| `PX03-14` | Same Host 05 node persists through six epochs; genuine `Tab -> Shift+Tab` has real intermediate LOOK AT and returns to that exact node with no write/action. |
| `PX03-23` | Focus identity and `3px solid Highlight` are semantic/focus facts; rectangle stability is separately exact document-coordinate residual zero. |
| `PX03-28` | Summary emits complete pre/post semantic, viewport, scroll, raw/document/image-relative box, delta, residual, direct-gate, and focus facts for six ordered epochs. |
| `PX03-29` | Tactical authorizes no run; only Mission may authorize a future probe correction and fresh single E2E after deterministic gates. |

No accepted VR-05 passing fact advances release because its missing coordinate
evidence prevents independent verification. No failed raw-viewport equality
proves a product defect.

## Mission-only handoff

Exact next owner is Mission Captain. Mission must read
`FRSH-003-v1-VR-06`, this clarification, complete latest `FRCE-003-v1`, and
the exact frozen predicate, then issue one new versioned `FIRST RUN SHELL
READY` or `HOLD`.

Only a later Mission `READY` may authorize Combat to update the probe,
summary, verifier, and any exact static expectation required to implement this
evidence contract, while preserving all three candidates as explicit
predecessors. Mission alone may define the permitted files, deterministic
ladder, and whether one fresh complete E2E follows a fully passing pre-live
return. Tactical authorizes no product repair, code change, test execution,
preview, diagnostic run, E2E, or verifier run. Quartermaster remains blocked.

## Validation and variance classification

- Read current workflow/registry/profile, synchronized handoff, complete
  Mission VR-06, complete latest Combat report, and exact current composite
  predicate.
- Confirmed that `boundingBox()` evidence is viewport-relative while current
  `identityStable` omits post rectangles and all scroll offsets.
- Defined an evidence contract only; ran no product test, build, preview,
  browser, E2E, summary, or verifier.
- Made no product, probe, test, harness, manifest, fixture, copy, media,
  learning, save, route, world, ending, maturity, map, scoreboard, automation,
  or schedule change.
- Did not inspect protected PDF/training/QA paths, hidden lore, or Martin's
  browser/profile/save.

| Finding | Classification | Result |
| --- | --- | --- |
| Semantic identity mixed with raw geometry | `REQUIRED CORRECTION - CLARIFIED` | same-node/semantic/game-state identity is independent |
| Viewport scroll mixed with layout drift | `REQUIRED CORRECTION - CLARIFIED` | exact document coordinates and zero residual frozen |
| Cross-viewport equality ambiguity | `REQUIRED CORRECTION - CLARIFIED` | no cross-size box equality; each epoch passes direct gates |
| Missing VR-05 post/scroll evidence | `DEFERRED PENDING MISSION` | stopped run neither accepted nor diagnosed as product drift |
| Product/probe/test/E2E action | `DEFERRED PENDING MISSION` | Tactical authorizes no edit or execution |
| Thresholds/canon/learning/save/media/ending | `PRESERVED` | no change authorized or inferred |

Tactical signs **`PLAYER EXPERIENCE READY / FRPX-003-v1-VR-03`**. Mission is
the sole exact next owner. No maturity advances.
