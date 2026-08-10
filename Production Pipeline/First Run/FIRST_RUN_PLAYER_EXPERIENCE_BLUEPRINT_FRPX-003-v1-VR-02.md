# First Run Player Experience Blueprint Clarification - Sixfold Weir Used Values and Focus Graph

Clarification ID: `FRPX-003-v1-VR-02`

Disposition: **`PLAYER EXPERIENCE READY / FRPX-003-v1-VR-02`**

Stage / owner: Tactical Operations Specialist / `tactical_operations_specialist`

Clarifies: `FRPX-003-v1` and `FRPX-003-v1-VR-01`

Governing return: `HOLD / RETURN TO SCIENCE THEN TACTICAL /
FRSH-003-v1-VR-03`

Science authority: `POLISH VIABILITY READY / FRVE-003-v1-VR-02`

Frozen repaired candidate:
`7e85154abd8dbf116c4bb84ca66afd859903d750`

Frozen predecessor lineages:
`a9776e337f1820776864a5690332c364d0fb2556` /
`bf58e528bc6ce4088f81f2c782ce2895259ab9fd`

Released rollback baseline:
`3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602`

Tactical control source inspected:
`2a6aef632fed7c9e833b3acbaad36b2c43cb58c2`

Date: **2026-08-10**

## Decision

The Science clarification is implementable and the player-facing graph can be
made exact without a product change. Tactical freezes these corrections:

1. `45/75/20/25` remains the exact authored physical registration. Browser
   used-value evidence is separately derived on the current Chromium `1/64
   CSS px` lattice and compared with strict equality, not with unquantized
   arithmetic, rounded decimals, or a tolerance.
2. The visible label is positioned `2px` from the button's inner content edge.
   Across the button's exact `1px` border, the label border is therefore
   exactly `3px` inside the button's outer border on every side.
3. Current source and rendered DOM authorize the action order `LOOK AT -> USE
   -> TALK TO`. In the exact recovered `in_progress` hold, the complete enabled
   sequential order is Host 05, `LOOK AT`, `USE`, `TALK TO`, then inventory
   `Return: Glass Meadow`.
4. Host 05 is the first enabled focus stop in the document and has no enabled
   in-document predecessor. The deterministic genuine-key acceptance path is
   `Tab -> Shift+Tab`: move from recovered Host 05 to its real successor
   `LOOK AT`, then return to Host 05. The final Host 05 focus-visible result is
   keyboard-induced and does not depend on an invented cyclic predecessor,
   browser-chrome identity, pointer history, or a programmatic target focus.

The prior VR-01 statements that ordered `TALK TO` before `USE` or named
inventory return as Host 05's reverse-tab predecessor are superseded. No
action is reordered in product code. Focus, announcement, recovery, seven
meaning slots, learning, privacy, save, route, world, media, performance,
later rail, ending, candidates, rollback, and all thresholds remain frozen.
This document changes no product, test, E2E, manifest, copy, or media and
authorizes no execution. Mission must reissue the shell before Combat acts.

## Exact semantic and keyboard graph

Current source freezes the world/action DOM order as:

```text
world:   Host 04 -> conditional Host 05 -> return-ridge hotspot
verbs:   LOOK AT -> USE -> TALK TO
```

In the valid post-Host-04, responsible-AI `in_progress` recovery state used by
the live focus probe, Host 04 and return ridge are disabled and no later
continuation is available. The enabled sequential focus order is exactly:

```text
Host 05 -> LOOK AT -> USE -> TALK TO -> Return: Glass Meadow
```

Therefore Host 05 has:

```text
enabled in-document predecessor: none
enabled in-document successor:   LOOK AT
reverse traversal from Host 05:  crosses the document sequential-focus boundary
```

The browser may place reverse-boundary focus in browser chrome or expose no
enabled page element as active. Neither identity is a product contract, and
inventory return must not be described as a cyclic predecessor. The probe
records `reverseDomPredecessor: null` and `forwardSuccessor: "LOOK AT"`.

For each layout, enter the valid recovered `in_progress` state with no modal,
then use this exact acceptance sequence:

1. Activate forced colors and reduced motion before traversal. Confirm both
   media queries are active. Send no pointer event after activation and never
   call `.focus()` on Host 05 or another target.
2. Confirm recovered Host 05 is active as the separately tested recovery
   result. This initial placement is a precondition only; it is not accepted
   as focus-visible evidence.
3. Press the real keyboard `Tab` key once. Require `LOOK AT` to become
   `document.activeElement` and match `:focus-visible`. This real key
   establishes keyboard modality without an assumption about recovery focus
   modality.
4. Press the real keyboard `Shift+Tab` chord once. Require Host 05 to become
   `document.activeElement` and match `:focus-visible`.
5. Record exact key path `Tab -> Shift+Tab`, intermediate `LOOK AT`, final
   Host 05, full enabled order, `reverseDomPredecessor: null`, and
   `forwardSuccessor: "LOOK AT"`.
6. Require Host 05 computed outline width `3px`, style `solid`, and color equal
   to browser-resolved system `Highlight` under the same forced-color context.
   Require zero animation/transition durations and delays on button and label.
7. Require accessible name, explicit state, hotspot identity, physical and
   semantic rectangles, label rectangle, and evidence/save/route/world state
   to equal their pre-key records. Both keys dispatch zero game actions.

No acceptance step uses `Shift+Tab` from Host 05, an assumed wrap, `.focus()`,
a click/tap, or pointer history. Recovery focus remains independently required
for reload and return behavior; only the successor-to-Host-05 keyboard edge is
used to prove final `:focus-visible`.

## Exact physical, semantic, and label models

Let the browser-resolved `.scene-art` content rectangle be
`I=(Ix,Iy,Iw,Ih)` and let `q=1/64 CSS px`. For the current Chromium identity,
positive bounded used values use:

```text
Q(v) = floor(v / q) * q

physical P:
  P.x = Ix + Q(.45 * Iw)
  P.y = Iy + Q(.75 * Ih)
  P.w = Q(.20 * Iw)
  P.h = Q(.25 * Ih)

semantic activation S:
  S.x = Ix + Q(.45 * Iw)
  S.y = Iy + Q(min(.75 * Ih, Ih - 44))
  S.w = Q(.20 * Iw)
  S.h = Q(max(.25 * Ih, 44))
```

All actual DOMRect components must strictly equal these expected values. One
layout unit of difference fails. This operator is not an epsilon, nearest-
pixel rounding rule, device-pixel conversion, or permission to serialize
rounded decimal evidence. If the runner/browser lattice or operator changes,
environment identity is `HOLD`; evidence may not silently change the model.

Authoring acceptance separately requires the exact source declarations
`left:45%`, `top:75%`, `width:20%`, `height:25%`, and the frozen Host-05-only
inline `min/max` semantic mechanism. The physical normalized center remains
`55% / 87.5%`; `S` keeps the same left, width, and bottom as `P` and expands
upward only where required to reach exact `44px` height.

The label model is exact:

```text
button border:                         1px per side
label position from inner content edge: 2px per side
label border distance from S outer edge: 3px per side
label border box:                      (S.w - 6) x (S.h - 6)
label own border + padding:            1px + 1px per side
label text content:                    (S.w - 10) x (S.h - 10)
```

The label must be strictly contained, and
`scrollWidth <= clientWidth` / `scrollHeight <= clientHeight` must both hold.
Hidden overflow alone is never acceptance.

## Six-layout exact geometry and source checks

Expected used-value sizes are:

| Layout | Physical `P w x h` | Semantic `S w x h` | Label border `w x h` | Label text `w x h` |
| --- | --- | --- | --- | --- |
| desktop | `285.71875 x 200.640625` | `285.71875 x 200.640625` | `279.71875 x 194.640625` | `275.71875 x 190.640625` |
| laptop | `265.703125 x 186.5625` | `265.703125 x 186.5625` | `259.703125 x 180.5625` | `255.703125 x 176.5625` |
| narrow | `76.796875 x 53.75` | `76.796875 x 53.75` | `70.796875 x 47.75` | `66.796875 x 43.75` |
| effective-200 | `149.203125 x 104.65625` | `149.203125 x 104.65625` | `143.203125 x 98.65625` | `139.203125 x 94.65625` |
| retained-320x180 | `62.796875 x 43.90625` | `62.796875 x 44` | `56.796875 x 38` | `52.796875 x 34` |
| retained-320x240 | `62.796875 x 43.90625` | `62.796875 x 44` | `56.796875 x 38` | `52.796875 x 34` |

At both retained layouts `S` expands exactly `0.09375px` upward, its bottom is
identical to `P`, and its center is `0.046875px` above the physical center.
No row rounds physical height to `44` or treats the label offset as `2px` from
the outer border.

Each of the six records must independently capture `.scene-frame`,
`.scene-world-content`, `.scene-art`, `P`, `S`, label, Host 04, and return
rectangles. Source mapping begins only with the raw browser-resolved `P` and
`.scene-art.getBoundingClientRect()`, natural `1672 x 941`, and computed
`object-fit: cover` / `object-position`. It never uses the viewport or frame
as the image transform and never recomputes `P` with unquantized percentages.

The accepted transformed sample checks remain exact per layout:

| Layout | Actual source center `x/y` | Retention | Anchor contained | Host04/return overlap |
| --- | --- | ---: | --- | --- |
| desktop | `919.6 / 822.2305195231324` | `0.9942341283489181` | true | `0 / 0` |
| laptop | `919.6 / 822.1539664804469` | `0.9938484555239582` | true | `0 / 0` |
| narrow | `919.6 / 819.1609359104781` | `0.9795278501799451` | true | `0 / 0` |
| effective-200 | `919.6 / 821.5113666352497` | `0.9906110492900371` | true | `0 / 0` |
| retained-320x180 | `919.6 / 818.318984822095` | `0.9754376065442601` | true | `0 / 0` |
| retained-320x240 | `919.6 / 818.318984822095` | `0.9754376065442601` | true | `0 / 0` |

For every row require strict `Q` equality for `P` and `S`; actual `S >=44 x
44`; exact label outer-distance `3px`; exact label size and text-content size;
strict containment and no label scroll; physical center/nominal anchor
containment; retention `>=0.95`; exact zero intersection area with Host 04 and
return; no horizontal overflow; and unchanged identity/state/order. All raw
values must be finite. A mismatch is `HOLD`, never a tolerance adjustment.

## Focus, announcement, and recovery reconciliation

| Event | Frozen owner/result | VR-02 effect |
| --- | --- | --- |
| Host 04 mastery/detection | Terminal unmount, Host 05 focus, one Pilot-first/Suit-confirmed polite update | none; recovery focus is not focus-visible proof |
| LOOK AT | Host 05 retained; bounded material fact | first action remains first |
| USE | responsible-AI Terminal title; background inert | actual second action; unchanged L02-02 entry |
| TALK TO | Host 05 retained; complete silence | actual third action; no dialogue |
| miss/remediation | failed field/status then ordered answer-free help | no exterior/focus change |
| primary acknowledgement | Host 05; next USE reconstructs transfer | placeholder meaning unchanged |
| close/Escape | connected eligible Host 05, else Host 04/first lawful fallback | unchanged modal inertness and one restoration |
| mastery acknowledgement | Host 05 with unchanged continuation next | placeholder meaning unchanged |
| unfinished reload/Meadow return | Host 05; clean session waits for USE | separately proves recovery; keyboard path then proves focus-visible |
| mastered reload/return | unchanged L02-03 continuation; Host 05 read-only | no focus reordering |
| malformed evidence | earliest safe Drowned boundary; no Host 05/skip/credit | fail closed; no geometry/focus probe |

Detection still occurs exactly once after Host 04 acknowledgement and never on
render, reload, return, resize, or media change. No announcement is added for
geometry, forced colors, reduced motion, or keyboard traversal. Terminal Tab
trap, inert background, Escape/close, restoration, optional campaign
departure, no campaign skip, and read-only complete revisit remain exact.

## Reconciled thirty-point acceptance matrix

| ID | Exact acceptance |
| --- | --- |
| `PX03-01` | FRWO/FRSH/FRDT plus accepted VR returns govern; protected paths remain untouched and only Mission may reauthorize production. |
| `PX03-02` | Immutable media remains exact `17 / 37,410,731`; no byte/path/request/import/reveal changes. |
| `PX03-03` | Source authoring is exact canonical/narrow `45/75/20/25`; actual `P` and `S` strictly equal the frozen `q=1/64`, `Q=floor` used-value equations. |
| `PX03-04` | Six rows record all boxes; exact `P/S/label/text` sizes match the table, `S>=44 x 44`, exact outer label inset is `3px`, label strictly contains with no scroll, and page contains. |
| `PX03-05` | Source mapping starts at actual browser-resolved `P` and `.scene-art`; each row matches its center/retention/anchor result, retains `>=0.95`, and overlaps Host04/return by exact `0/0`. |
| `PX03-06` | Before exact sanitized Host04 mastery there is no Host05 DOM/name/state/focus/notice/action. |
| `PX03-07` | Available/in-progress/remediation/complete remain pure sanitized view states with no new hook/persistence. |
| `PX03-08` | Forged prerequisite, malformed/noncontiguous evidence, or status/form contradiction fails closed with no Host05/skip/credit. |
| `PX03-09` | DOM remains Host04, conditional Host05, ridge, then commands; enabled in-progress order is exactly Host05, LOOK AT, USE, TALK TO, inventory return. |
| `PX03-10` | LOOK owns material fact, USE owns unchanged L02-02, TALK owns silence; probes dispatch no action. |
| `PX03-11` | Generic responsible-AI launcher stays absent; sole campaign entry is native Host05 USE. |
| `PX03-12` | Complete USE is read-only with no modal/session/attempt/hint/check/explanation/confidence/evidence/save/route/world write. |
| `PX03-13` | Detection remains Host04 acknowledgement -> Terminal unmount -> Host05 focus -> one polite Pilot/Suit update, with no replay. |
| `PX03-14` | Genuine focus path is real `Tab -> Shift+Tab`, intermediate LOOK AT, final Host05; predecessor is null, successor LOOK AT; no pointer or programmatic target focus. |
| `PX03-15` | Terminal title, Tab trap, close, Escape, inert background, and one lawful restoration remain exact; layout probe has no modal. |
| `PX03-16` | Pointer/touch/Enter/Space/switch-like activation dispatches once; measurement/focus probes dispatch zero actions. |
| `PX03-17` | Six primary + six transfer, four dimensions, strict `24/24`, explanation, confidence, ownership, evaluator, sanitizer, and objective ownership are unchanged. |
| `PX03-18` | Real dimension miss retains progressive answer-free remediation/resume; no exterior warning or geometry meaning. |
| `PX03-19` | Primary acknowledgement closes to Host05 and next deliberate USE reconstructs transfer without extra write/launcher. |
| `PX03-20` | Save schema/projection is unchanged; private responses, explanation, session, focus, detection, probe modality, and timing never persist. |
| `PX03-21` | Unfinished/remediation reload and Meadow return focus Host05; mastered state focuses unchanged continuation; navigation is write-free. |
| `PX03-22` | Demo Tour remains explicit/confirmed/zero-credit; optional departure remains; there is no campaign skip or cross-credit. |
| `PX03-23` | At six layouts forced colors precede traversal; final Host05 is active and `:focus-visible` after the genuine key path with exact `3px solid` resolved system Highlight and unchanged state/order. |
| `PX03-24` | Reduced motion precedes traversal; all Host05/label animation and transition durations/delays are zero; non-color state meaning and silence remain. |
| `PX03-25` | Exactly seven Quartermaster meaning slots/owners remain frozen; no final copy, lesson, response, Host06, or successor drift. |
| `PX03-26` | Host04, L02-03, later Drowned/returns/Witness/City/rail and MH-40 equal outcomes/null deltas/`successor=null` remain unchanged. |
| `PX03-27` | PBA stays JS `1,666,665`, CSS `119,247`, modules `217`; narrow headroom `8,999 / 34 / 0`; no dependency/network/media change; Host05 stays `<=2ms`. |
| `PX03-28` | A future Mission-authorized FRRC-002 summary records exact Q/operator/lattice, all boxes and source fields, six expected rows, label inner/outer models, action order, key path, null predecessor, successor, outline, reduced motion, and strict aggregate. |
| `PX03-29` | Tactical authorizes no E2E. Only a reissued Mission shell may grant one fresh complete run using repaired candidate `7e85154` and frozen lineage; no failed-run rerun. |
| `PX03-30` | Cleanup remains exact owned PIDs/ports/external GUID root; repository QA is untouched; candidate, placeholders, rollback, learning/save/route/media/ending are exact. |

The matrix contains exactly thirty checks. None weakens an original threshold.

## Live summary and verifier contract

A future Mission-authorized machine summary must record exactly six layout
records and, for each, the browser/runner identity and `q=1/64` plus operator;
authored constants; raw frame/content/image/physical/semantic/label/text/Host04/
return rectangles; strict expected-versus-actual `Q` comparisons; natural
image size and cover transform; source bounds/center/anchor/retention; exact
overlap/containment/overflow; label inner `2px` and outer `3px` models; and
accessible identities/states.

It must also record forced colors and reduced motion active before traversal,
no pointer/programmatic target focus, enabled order, predecessor `null`,
successor `LOOK AT`, keys `Tab -> Shift+Tab`, intermediate `LOOK AT`, final
Host05 active/focus-visible, exact `3px solid` resolved system Highlight, zero
durations/delays, unchanged state, candidate identities, performance, runtime
errors, external-root identity, and cleanup disposition.

The verifier rejects a missing/extra layout or field, nonfinite/rounded value,
unquantized comparison, different lattice/operator, frame-derived source math,
label outer `2px`, activation below `44`, label scroll/escape, retention below
`.95`, nonzero overlap/overflow, wrong semantic order, cyclic predecessor,
reversed key path, pointer/programmatic focus, non-focus-visible final target,
outline variance, nonzero reduced-motion timing, identity drift, handwritten
summary, runtime error, or incomplete cleanup.

## Mission-only handoff

Exact next owner is Mission Captain. Mission must read
`FRSH-003-v1-VR-03`, `FRVE-003-v1-VR-02`, this clarification, and complete
`FRCE-003-v1`, preserve repaired candidate `7e85154`, predecessor lineages,
seven placeholders, and every closed boundary, then issue a new versioned
`FIRST RUN SHELL READY` or `HOLD`.

Only a later Mission `READY` may authorize Combat to correct the existing
probe/summary/verifier expectations to the exact used-value, label, semantic
order, and genuine keyboard contracts above; rerun focused static gates; and,
if explicitly granted, conduct exactly one fresh complete external-root E2E.
No product repair is requested by Tactical. Until shell reissue, Combat may
not edit or execute, and Quartermaster remains blocked.

## Validation and variance classification

- Read current authority, full Tactical profile, VR-03 Mission return, Science
  VR-02, complete current Combat report, and cited App/test/E2E controls.
- Confirmed actual source/DOM semantic order and actual enabled recovery graph.
- Reconciled all thirty checks without running a test, build, preview,
  validator, browser, verifier, or E2E.
- Made no product, test, harness, manifest, copy, media, learning, save, route,
  world, ending, maturity, map, scoreboard, automation, or schedule change.
- Did not inspect protected PDF/training/QA paths, hidden lore, or Martin's
  browser/profile/save.

| Finding | Classification | Result |
| --- | --- | --- |
| Unquantized DOMRect arithmetic | `REQUIRED CORRECTION - CLARIFIED` | strict current Chromium `Q` model frozen |
| Label inner/outer distance | `REQUIRED CORRECTION - CLARIFIED` | `2px` inner / exact `3px` outer and size models frozen |
| Verb order | `REQUIRED CORRECTION - CLARIFIED` | actual `LOOK AT -> USE -> TALK TO` frozen without product reorder |
| Invented cyclic predecessor | `REQUIRED CORRECTION - CLARIFIED` | no in-document predecessor; `Tab -> Shift+Tab` via real successor frozen |
| Product/E2E action | `DEFERRED PENDING MISSION` | no edit, execution, or run authorized |
| Learning/save/route/media/ending | `PRESERVED` | no change authorized or inferred |

Tactical signs **`PLAYER EXPERIENCE READY / FRPX-003-v1-VR-02`**. Mission is
the sole exact next owner. No maturity advances.
