# First Run Player Experience Blueprint Clarification - Sixfold Weir Live Evidence

Clarification ID: `FRPX-003-v1-VR-01`

Disposition: **`PLAYER EXPERIENCE READY / FRPX-003-v1-VR-01`**

Stage / owner: Tactical Operations Specialist / `tactical_operations_specialist`

Clarifies: `PLAYER EXPERIENCE READY / FRPX-003-v1`

Governing shell / Mission return:
`FRSH-003-v1` / `HOLD / RETURN TO SCIENCE / FRSH-003-v1-VR-01`

Science variance authority: `POLISH VIABILITY READY / FRVE-003-v1-VR-01`

Work Order / treatment: `FRWO-003-v1` / `FRDT-003-v1`

Frozen product candidate:
`a9776e337f1820776864a5690332c364d0fb2556`

Frozen corrected harness candidate:
`bf58e528bc6ce4088f81f2c782ce2895259ab9fd`

Released rollback baseline:
`3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602`

Tactical control source inspected:
`969e5db71da378d1aa36377c2e8b41b5cdbec2c9`

Date: **2026-08-10**

## Decision

The Science variance is implementable without weakening `FRPX-003-v1`.
Tactical freezes two clarifications:

1. Physical source registration and live semantic activation are distinct
   measured rectangles. Physical registration remains exact `45/75/20/25`
   against the `.scene-art` / `.scene-world-content` content box. The Host-05-
   only semantic button may use Science's exact bottom-anchored `44px`
   minimum, and its label/state may use the exact inset containment mechanism.
2. Forced-color focus acceptance must be produced by genuine keyboard
   traversal after forced colors are active. Programmatic `.focus()` and
   pointer history are not evidence. The Host 05 button must become the active
   `:focus-visible` element after an actual `Tab` from a deterministic lawful
   predecessor and must compute an exact `3px solid` system-highlight outline.

All state, action, focus owner, announcement, recovery, copy-meaning,
learning, privacy, save, route, world, media, PBA, performance, later-rail,
ending, rollback, and single-E2E boundaries remain unchanged. This document
changes no product, test, harness, manifest, or media. Mission must readjudicate
and reissue a shell decision before Combat may repair anything. Tactical does
not authorize another E2E.

## Exact Science presentation mechanism

The immutable physical registration remains:

```text
left: 45%
top: 75%
width: 20%
height: 25%
narrow: identical
normalized center: 55% / 87.5%
nominal source bounds: x 752.4-1086.8 / y 705.75-941
nominal source anchor: x 919.6 / y 823.375
```

Only the existing `isSixfoldWeir` render branch may later receive these
Host-05-only inline presentation values:

```text
semantic activation:
  left   = physical left
  width  = physical width
  top    = min(75%, calc(100% - 44px))
  height = max(25%, 44px)

visible label/state border box:
  inset         = 2px
  padding       = 1px
  letterSpacing = 0
  overflow      = hidden
```

The activation's bottom edge remains exactly the physical registration's
bottom edge. At the retained layouts only, activation expands exactly
`0.09375px` upward and its semantic center is `0.046875px` above the physical
center. The physical center remains strictly inside activation. No left/right
edge, source registration, source request, object fit/position, image byte,
shared hotspot style, frame, containing block, lesson, action, state, or
meaning changes.

No CSS or module addition is authorized by this mechanism. Current accepted
PBA remains JavaScript `1,666,377`, CSS `119,247`, modules `217`; narrow
headroom remains exact `9,287 / 34 / 0`. A later implementation must use only
JavaScript headroom and must still pass both narrow and global PBA.

## Four separately measured coordinate spaces

The live probe must capture raw floating-point `DOMRect` values for each space
without integer rounding, nominal viewport substitution, or reuse of one box
as another:

1. **Frame border box:** `.scene-frame.getBoundingClientRect()`. This records
   the bordered scene footprint only. It is never an image-source transform.
2. **Hotspot containing block:**
   `.scene-world-content.getBoundingClientRect()`. Percentage registration
   resolves against this padding/content box. Record its computed position,
   border, and padding. Current accepted border/padding contribution is zero.
3. **Rendered image content box:** `.scene-art.getBoundingClientRect()` plus
   natural dimensions and computed `object-fit` / `object-position`. Record
   computed border and padding; they must remain zero so the current image
   element rectangle is the rendered content box. Any future nonzero image
   border/padding is `HOLD` until its content box is explicitly derived.
4. **Host rectangles:** derive the untouched physical `45/75/20/25`
   registration from the containing/image box; separately measure the actual
   Host 05 semantic button, its visible `span` label/state, Host 04, and both
   the return-ridge hotspot and inventory return action.

The containing block and image element boxes must remain equal in x, y, width,
and height. A corrected source probe cannot conceal a frame/content mismatch,
an activation below `44px`, activation overlap, escaped label, outline failure,
or horizontal overflow.

## Rendered-image source transform

For `.scene-art` content width/height `Iw/Ih`, natural source
`Sw=1672`, `Sh=941`, and computed object-position fractions `px/py`, require
computed `object-fit === "cover"` and calculate:

```text
scale = max(Iw / Sw, Ih / Sh)
drawW = Sw * scale
drawH = Sh * scale
freeX = Iw - drawW
freeY = Ih - drawH
offsetX = freeX * px
offsetY = freeY * py

sourceLeft   = (physicalRect.left   - imageRect.left - offsetX) / scale
sourceTop    = (physicalRect.top    - imageRect.top  - offsetY) / scale
sourceRight  = (physicalRect.right  - imageRect.left - offsetX) / scale
sourceBottom = (physicalRect.bottom - imageRect.top  - offsetY) / scale
```

`physicalRect` and `imageRect` in these equations are the raw viewport-space
rectangles. The tables below subtract `imageRect.left/top` only for compact
reporting; the transform must not subtract those origins a second time.

`object-position` must be read from `getComputedStyle(sceneArt)` after the
layout settles. Accept only the current resolved percentage/keyword forms:
`left/top = 0`, `center = 0.5`, `right/bottom = 1`, or a finite percentage
converted to a fraction. An unknown, length-offset, malformed, or nonfinite
form fails closed; the probe may not silently assume center. The source
transform uses the derived physical registration, never the expanded semantic
activation.

Record both truths:

- authoring registration is exact normalized `45/75/20/25`, with nominal
  full-master bounds and anchor above; and
- cover painting produces the actual transformed source sample and actual
  source-sample center below.

The nominal anchor must be contained within the actual transformed sample;
the normalized physical center must remain exact `55% / 87.5%`. Do not test
that the cover-transformed sample center equals the nominal full-master anchor.
That false equality caused the prior narrow/effective/retained failure.

Source-band retention uses the two-dimensional intersection of the actual
transformed physical sample with nominal bounds
`752.4/705.75/1086.8/941`, divided by the nominal bounds' area. Horizontal
retention remains `1.0`; aggregate retention must remain `>=0.95` with raw
finite values.

## Six-layout geometry and containment expectations

All positions below are CSS pixels relative to the containing/image box's
top-left. Raw viewport-relative x/y rectangles must also be recorded so the
relative values can be independently recomputed.

| Layout | Frame border box `w x h` | Content/image box `w x h` | Physical `x/y/w/h` | Activation `x/y/w/h` | Label border box `x/y/w/h` |
| --- | --- | --- | --- | --- | --- |
| desktop | `1428.59375 x 803.5625` | `1428.59375 x 802.5625` | `642.8671875 / 601.921875 / 285.71875 / 200.640625` | same as physical | `644.8671875 / 603.921875 / 281.71875 / 196.640625` |
| laptop | `1328.515625 x 747.25` | `1328.515625 x 746.25` | `597.83203125 / 559.6875 / 265.703125 / 186.5625` | same as physical | `599.83203125 / 561.6875 / 261.703125 / 182.5625` |
| narrow | `383.984375 x 216` | `383.984375 x 215` | `172.79296875 / 161.25 / 76.796875 / 53.75` | same as physical | `174.79296875 / 163.25 / 72.796875 / 49.75` |
| effective-200 | `746.015625 x 419.625` | `746.015625 x 418.625` | `335.70703125 / 313.96875 / 149.203125 / 104.65625` | same as physical | `337.70703125 / 315.96875 / 145.203125 / 100.65625` |
| retained-320x180 | `313.984375 x 176.625` | `313.984375 x 175.625` | `141.29296875 / 131.71875 / 62.796875 / 43.90625` | `141.29296875 / 131.625 / 62.796875 / 44` | `143.29296875 / 133.625 / 58.796875 / 40` |
| retained-320x240 | `313.984375 x 176.625` | `313.984375 x 175.625` | `141.29296875 / 131.71875 / 62.796875 / 43.90625` | `141.29296875 / 131.625 / 62.796875 / 44` | `143.29296875 / 133.625 / 58.796875 / 40` |

These are exact expectations from the accepted live rows and Science
mechanism. The machine record keeps full precision and does not round
`43.90625` into `44`. The minimum-size gate applies to actual semantic
activation, not physical registration: activation width and height must each
be `>=44` at every layout. Physical registration stays exact even when its
retained height is below `44`.

| Layout | Cover scale | `drawH / offsetY` | Actual source `y0-y1` | Actual source center `x/y` | Retention | Anchor contained |
| --- | ---: | --- | --- | --- | ---: | --- |
| desktop | `0.8544220992822966` | `804.0111954246411 / -0.28973908492821465` | `704.817460352182-939.643578694083` | `919.6 / 822.2305195231324` | `0.9942341283489181` | true |
| laptop | `0.7945667613636364` | `747.6873224431818 / -0.28746448863635127` | `704.7550837988827-939.5528491620112` | `919.6 / 822.1539664804469` | `0.9938484555239582` | true |
| narrow | `0.22965572667464115` | `216.10603880083733 / 0` | `702.1379450661241-936.1839267548321` | `919.6 / 819.1609359104781` | `0.9795278501799451` | true |
| effective-200 | `0.44618159389952156` | `419.8568798594498 / -0.24637597188996097` | `704.2314839250183-938.7912493454812` | `919.6 / 821.5113666352497` | `0.9906110492900371` | true |
| retained-320x180 | `0.18778969796650719` | `176.71010578648327 / 0` | `701.4162727046529-935.2216969395372` | `919.6 / 818.318984822095` | `0.9754376065442601` | true |
| retained-320x240 | `0.18778969796650719` | `176.71010578648327 / 0` | `701.4162727046529-935.2216969395372` | `919.6 / 818.318984822095` | `0.9754376065442601` | true |

Horizontal source bounds remain exact `752.4-1086.8`. For every row, require:

- finite raw rectangles and transform values;
- containing box equals image content box;
- physical normalized registration remains exact `45/75/20/25` and physical
  bottom is exact containing-box bottom;
- semantic activation bottom equals physical bottom, width and left are
  unchanged, height is `max(25%, 44px)`, and top is the corresponding
  bottom anchor;
- physical normalized center equals `55% / 87.5%`, nominal anchor is inside
  transformed source bounds, actual source center and retention are reported,
  and retention is `>=0.95`;
- activation intersection area with measured Host 04 and return-ridge hotspot
  is exactly `0`; registered physical region remains vertically disjoint from
  the Tidal Lens authority;
- visible label/state border box is contained strictly inside activation with
  exact `2px` inset, `scrollWidth <= clientWidth` and
  `scrollHeight <= clientHeight`, and its complete accessible identity/state
  remains on the button;
- `document.documentElement.scrollWidth <= clientWidth`; and
- no check uses a `+/-1px` containment allowance, rounded size, frame-derived
  source box, screenshot estimate, or nominal viewport substitution.

Any deviation is fail-closed `HOLD`; a corrected probe never converts a real
product failure into a pass.

## Genuine keyboard forced-color focus evidence

Run this contract independently at all six layouts in the same sanctioned
Host 05 `in_progress` recovery state, with no modal open:

1. Reach the state through existing campaign behavior and reload. The existing
   recovery contract may initially place focus on Host 05; that programmatic
   recovery is tested separately and is not forced-color acceptance evidence.
2. Confirm actual DOM order remains Host 04, Host 05, return ridge; Host 04 and
   the ridge hotspot are disabled in the completed hold. Confirm enabled tab
   order is Host 05, `LOOK AT`, `TALK TO`, `USE`, then the inventory
   `Return: Glass Meadow` action. Record accessible names/states before focus.
3. Call the browser's forced-color emulation before any focus check and also
   set reduced motion to reduce. Require
   `matchMedia('(forced-colors: active)').matches === true` before continuing.
4. Send no pointer event and never call `host.focus()`. From the state-recovery
   Host 05, press actual keyboard `Shift+Tab`. Require the deterministic cyclic
   predecessor `Return: Glass Meadow` to become `document.activeElement` and
   match `:focus-visible`.
5. Press actual keyboard `Tab` once. Require Host 05 to become
   `document.activeElement` and `host.matches(':focus-visible') === true`.
   Record exact key sequence `Shift+Tab -> Tab`, predecessor identity, and
   resulting tab-order snapshot.
6. Read Host 05 computed style only after keyboard arrival. Require
   `outlineWidth === '3px'`, `outlineStyle === 'solid'`, and a finite,
   nontransparent `outlineColor` equal to the browser-resolved system
   `Highlight` color. Resolve the comparison color from a temporary probe
   element styled `outline-color: Highlight` under the same active forced-
   color context, then remove that probe immediately. A named or RGB/RGBA
   browser equivalent is acceptable only through this equality check.
7. Require the Host 05 accessible name, explicit `in progress` state,
   `data-hotspot-id`, `data-sixfold-weir-state`, DOM order, target rectangle,
   and label rectangle to equal the pre-focus record. Focus may not change
   evidence, dialogue, route, save, or world state.
8. Require all computed animation and transition durations/delays on Host 05
   and its visible label to be zero under reduced motion. Restore media only
   after the complete record is captured.

Calling `.focus()` on Host 05, clicking/tapping it, using pointer history,
enabling forced colors after focus, checking only a static CSS string, or
accepting a `2px`/non-solid/non-system outline is not evidence. The exact
`3px solid Highlight` rule already exists in the frozen candidate; this
clarification strengthens verification and requests no CSS change.

## Focus, announcement, and recovery reconciliation

The semantic expansion and corrected probes change no focus owner or player
meaning:

| Event | Frozen owner / result | Variance clarification |
| --- | --- | --- |
| Host 04 mastery / detection | Host 05 after Terminal unmount; one Pilot-first/Suit-confirmed polite update | activation may expand upward only after mount; physical registration and notice timing unchanged |
| LOOK / TALK | Host 05 retained; one owner-correct polite result | expanded activation dispatches the same native click once |
| USE | responsible-AI Terminal title; background inert | source probe and forced-color probe never dispatch USE |
| real miss/remediation | actual failed field/status; ordered answer-free help | no exterior geometry or focus change |
| primary acknowledgement | Host 05 after Terminal unmount; next USE reconstructs transfer | exact `FRPX03_IN_PROGRESS` meaning remains frozen |
| close / Escape | connected eligible Host 05, else Host 04/first lawful fallback | restoration targets semantic button; no source-rect substitution |
| mastery acknowledgement | Host 05, with unchanged continuation next | exact `FRPX03_MASTERED` meaning remains frozen |
| reload/Meadow return unfinished | Host 05; clean session waits for USE | this sanctioned recovery state seeds the keyboard probe, but recovery focus is not focus-visible proof |
| reload/Meadow return mastered | unchanged L02-03 continuation; Host 05 read-only | no probe may reorder continuation to simplify focus |
| malformed evidence | earliest safe Drowned boundary; no Host 05/skip/credit | no geometry or focus probe runs against a hidden/forged target |

Detection still occurs exactly once from the successful Host 04 mastery event
and never on render, reload, return, resize, or media-query change. Focus is
zero evidence. No announcement is added for geometry correction, forced-color
entry, Tab traversal, or label containment.

## Reconciled thirty-point acceptance matrix

| ID | Clarified exact acceptance |
| --- | --- |
| `PX03-01` | Authority remains FRWO-003/FRSH-003 plus accepted VR-01 planning returns; only later Mission-authorized paths may change; protected paths untouched. |
| `PX03-02` | Immutable Drowned master and accepted media remain exact `17 / 37,410,731`; no media byte/path/request changes. |
| `PX03-03` | Physical registration remains exact canonical/narrow `45/75/20/25` relative to `.scene-world-content`/`.scene-art`, after Host 04 and before return in DOM order. |
| `PX03-04` | All six rows independently record frame, containing, image, physical, activation, label, Host 04, and return rectangles; actual activation is `>=44 x 44`; label and page contain. |
| `PX03-05` | Source transform begins at `.scene-art`, uses computed cover/position, records nominal and actual centers, retains `>=0.95`, and activation overlap with Host 04/return is exact zero. |
| `PX03-06` | Before exact sanitized Host 04 mastery there is no Host 05 node/name/state/focus/notice/action; physical material remains only in immutable plate. |
| `PX03-07` | Available/in-progress/remediation/complete remain pure sanitized view states with no new hook or persistence. |
| `PX03-08` | Forged prerequisite, malformed/noncontiguous correctness, status/form contradiction, or forged mastery fails closed with no probe target/skip/credit. |
| `PX03-09` | Actual DOM order remains Host 04, Host 05, return, then command surfaces; enabled in-progress tab order is Host 05, LOOK, TALK, USE, inventory return. |
| `PX03-10` | LOOK is material fact, TALK is complete silence, USE is unchanged L02-02; no geometry/focus instrumentation dispatches an action. |
| `PX03-11` | Generic responsible-AI launcher remains absent and sole campaign entry remains native Host 05 USE. |
| `PX03-12` | Completed USE remains read-only with no modal/session/attempt/hint/check/explanation/confidence/evidence/save/route/world write. |
| `PX03-13` | Detection lifecycle remains Host 04 acknowledgement -> Terminal unmount -> Host 05 focus -> one polite Pilot/Suit update, with no replay. |
| `PX03-14` | Existing recovery table passes; forced-color acceptance separately uses genuine `Shift+Tab -> Tab` via deterministic inventory return predecessor, never programmatic target focus. |
| `PX03-15` | Terminal title, Tab trap, close, Escape, inert background, and one restoration remain exact; probe runs only with no modal. |
| `PX03-16` | Pointer/touch/Enter/Space/switch-like activation still dispatches once; measurement and keyboard-focus probes dispatch zero actions. |
| `PX03-17` | Six primary + six transfer, four dimensions, strict `24/24`, explanation, confidence, ownership, evaluator, sanitizer, and objective ownership remain unchanged. |
| `PX03-18` | A real dimension miss retains progressive answer-free remediation and lawful resume; no exterior warning or geometry meaning. |
| `PX03-19` | Primary acknowledgement closes to Host 05 and next deliberate USE reconstructs transfer without extra write or generic launcher. |
| `PX03-20` | Save schema/projection remains unchanged; private responses, explanation, session, focus, detection, probe/media modality, and timing never persist. |
| `PX03-21` | Unfinished/remediation reload and Meadow redepart focus Host 05; mastered state focuses unchanged continuation; navigation remains write-free. |
| `PX03-22` | Demo Tour remains explicit/confirmed/zero-credit; Meadow return cannot bypass/cross-credit; there is no campaign skip. |
| `PX03-23` | At all six layouts forced colors are active before genuine keyboard traversal; Host 05 is active and `:focus-visible`; computed outline is exact `3px solid` system Highlight; identity/state/order unchanged. |
| `PX03-24` | Reduced motion is active during focus evidence and all Host 05/label animation/transition durations and delays are zero; silence and meaning remain unchanged. |
| `PX03-25` | Exactly seven Quartermaster meaning slots and their owners remain byte/meaning frozen; no final copy, native lesson, response, Host 06, or successor drift. |
| `PX03-26` | Host 04, L02-03, later Drowned, returns, Witness, City, later rail, MH-40 equal outcomes/null deltas/`successor=null` remain unchanged. |
| `PX03-27` | Current JS/CSS/modules stay within narrow/global caps; future inline-only mechanism adds no CSS/module/media/dependency/network action; Host 05 remains `<=2ms`. |
| `PX03-28` | Mission must reissue shell authority before Combat updates `FRRC-002-v1`; manifest/live summary must record all separate boxes, transform fields, keyboard sequence, exact outline, reduced motion, and fail-closed aggregate. |
| `PX03-29` | The one future Mission-authorized E2E must use frozen corrected harness lineage and prove the complete journey plus clarified live fields; this Tactical document authorizes no run. |
| `PX03-30` | Future cleanup remains exact owned PIDs/ports/external GUID root only; repository QA remains untouched; candidate/harness identities and bounded rollback remain exact. |

No threshold is rounded, relaxed, exchanged, or reclassified. In particular,
physical `43.90625px` is not semantic `44px`; a `2px` outline is not the
required `3px`; and programmatic focus is not keyboard focus-visible evidence.

## Live summary and verifier clarification

After a later Mission `READY`, the one machine-owned summary and verifier must
add or replace fields so each of exactly six layout records includes:

- viewport; frame border; containing block; image element/content; computed
  object fit/position; natural source size; cover scale/draw/offset;
- physical registration, normalized ratios/center, nominal source bounds/
  anchor, actual source bounds/center, anchor containment, and retention;
- semantic activation, label/state, Host 04, return hotspot, inventory return,
  exact overlap areas, minimum-size, label containment, and overflow results;
- forced-colors active, predecessor identity, exact key sequence, active
  element identity, `:focus-visible`, outline width/style/color/system-color
  equality, unchanged accessible name/state/semantic order; and
- reduced-motion active plus computed animation/transition durations/delays
  for button and label.

The verifier rejects missing/extra layouts or keys, nonfinite values,
candidate/harness mismatch, frame-derived source math, unknown object-position
syntax, rounded retained size, any overlap, retention below `0.95`, nominal
anchor outside the transformed sample, activation below `44 x 44`, escaped or
clipped label, horizontal overflow, pointer/programmatic focus, inactive
forced colors, non-focus-visible Host 05, outline other than exact `3px solid`
system Highlight, nonzero reduced-motion duration/delay, any false invariant,
runtime errors, or a handwritten summary.

The exact frozen product candidate and corrected harness identities remain
separate fields. A future repaired product candidate must descend only through
Mission-authorized deltas. The summary is external QA evidence only and never
campaign state, player copy, media, or a reveal.

## Mission-only handoff and candidate Combat repair contract

Exact next owner is Mission Captain, not Combat. Mission must read
`FRSH-003-v1-VR-01`, `FRVE-003-v1-VR-01`, this clarification, complete
`FRCE-003-v1`, frozen candidate `a9776e3`, and frozen harness `bf58e52`, then
issue a new versioned shell decision.

Only a later explicit Mission `FIRST RUN SHELL READY` may authorize Combat to:

1. apply Science's Host-05-only inline activation/label mechanism in the
   existing `isSixfoldWeir` branch, with no CSS/module/media change;
2. update focused tests for physical-versus-semantic geometry and exact label
   containment;
3. correct only the live source probe to use `.scene-art` and the equations
   above, and correct only forced-color focus evidence to use the frozen
   keyboard sequence/exact `3px solid` system outline;
4. update the `FRRC-002-v1` live-summary/verifier fields without changing
   command meaning, external-root containment, candidate freeze, or cleanup;
5. rerun focused/related/full/validators/build/PBA/served gates; and
6. run exactly one further complete E2E only if the new Mission shell
   explicitly grants a fresh single-run authority.

Until then, Combat may not edit or run anything. Quartermaster, Image
Specialist, and Intelligence remain blocked. Mission may not treat this
documentation as live proof, accept the current product, or waive a failed
gate.

## Validation, protected boundaries, and variance classification

- Read the current synchronized handoff, Tactical profile, complete
  `FRPX-003-v1`, `FRCE-003-v1`, Mission `FRSH-003-v1-VR-01`, Science
  `FRVE-003-v1-VR-01`, and cited current App/CSS/E2E controls.
- Reconciled all six accepted live rows and Science expectations without
  running a product test, build, preview, browser, validator, verifier, or E2E.
- Made no product, test, harness, manifest, media, copy, learning, save, route,
  world, ending, maturity, map, scoreboard, automation, or schedule change.
- Did not inspect or mutate the repository QA quarantine, protected PDF/
  training paths, hidden lore, or Martin's browser/profile/save.
- The required `foundry-azure-source-priority` skill is unavailable. This
  clarification changes no AI-901 objective, learning claim, evaluator, or
  Azure/Foundry implementation; no external source was material and no
  third-party source was used.

Variance classification:

| Finding | Classification | Result |
| --- | --- | --- |
| Frame-derived source mapping | `REQUIRED CORRECTION - CLARIFIED` | `.scene-art` content-box transform and exact fields frozen |
| Pointer/programmatic forced-color focus | `REQUIRED CORRECTION - CLARIFIED` | genuine cyclic keyboard predecessor and exact `3px solid` system outline frozen |
| Retained semantic height / label escape | `REQUIRED CORRECTION - CLARIFIED` | Science bottom-anchored activation and exact inset label mechanism frozen |
| Product/test/harness/manifest repair | `DEFERRED PENDING MISSION` | no edit or run authorized |
| Another complete E2E | `DEFERRED PENDING MISSION` | Tactical grants no run authority |
| Learning/save/route/world/media/ending | `PRESERVED` | no change authorized or inferred |

Tactical signs **`PLAYER EXPERIENCE READY / FRPX-003-v1-VR-01`**. Mission is
the sole exact next owner. No maturity advances.
