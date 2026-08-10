# First Run Player Experience Blueprint - The Third Coupling

Blueprint ID: `FRPX-002-v1`

Stage / owner: Tactical Operations Specialist / `tactical_operations_specialist`

Shell / treatment: `FRSH-002-v1` / `FRDT-002-v1`

Work Order / viability: `FRWO-002-v1` / `FRVE-002-v1`

Planning authorities: `FRPB-001-v1`, `FRPB-001-v1-GR-01`,
`FRCL-002-v1`, `FRRM-002-v1`, `FRSB-002-v1`

Source commit inspected: `38154612d35178f236874031b48d0d1d2625bed2`

Released predecessor: `FRAB-001-v1 / FIRST RUN PASS RELEASED`

Accepted product/test baseline: `d37103b46f257cb61ef99f76413611ee31d0fab2`

Date: **2026-08-10**

## Disposition

**`PLAYER EXPERIENCE READY / FRPX-002-v1`**

`FRSH-002-v1` and `FRDT-002-v1` are compatible with the current runtime. One
bounded implementation can add the provenance-honest Fracture Nursery target,
make the existing optional calibration reachable only through that target,
remove the duplicate departure-row launcher, and keep the already-open
Drowned departure exact.

The accepted plate, current `object-fit: cover` presentation, exact `16 / 9`
scene frame, existing native buttons, Terminal dialog, polite dialogue region,
save sanitizers, calibration workspace, route return, and responsive natural
flow are sufficient. No media, lesson, route, save-schema, dependency, or
world-state change is needed. This blueprint freezes player experience and
leaves final prose to Quartermaster and code architecture to Combat.

## Player-visible outcome

After exact Route Marker mastery, the completed right-side interaction closes
and focus lands on one newly classified, physically unchanged relationship in
the low-left repair stock. A single Suit/System notice and a compact Pilot
comparison make the counterturn legible without blocking the already-open
departure. The player may select `LOOK AT`, `TALK TO`, or `USE` for the
Fracture Nursery coupling. Only `USE` opens the existing optional `L01-03`
workspace. Skip, close, miss, remediation, mastery, departure, reload, and
Drowned return all preserve the same route and evidence truth.

## Compatibility and fixed interpretation

- The changed address is only `FR-02 / Chapter I - Glass Meadow` after exact
  Route Marker mastery and before stable entry into `FR-03`.
- First Signal and Route Marker remain the same two existing hosts, lessons,
  geometry, evidence, completion order, and world behavior.
- The Fracture Nursery is a third physical relationship over source-authored
  repair stock. It is not a new raster object, kiosk, cache, shrine, door, or
  responsive intelligence.
- The scene material exists before detection. Only the semantic interaction
  target is absent before detection.
- Compatibility is Suit/System classification. Python and the Terminal
  interface belong to the expedition. Machine and Builders own no line.
- The one campaign calibration entry is `USE Fracture Nursery coupling`.
  There is no departure-row calibration action.
- `L-01-03`, `PY-007`, `EX-L0103-CALIBRATION-DEBUG`, strict
  `8/8 + 8/8 + 4/4`, confidence, remediation, hints, unlimited retry, safe
  exit, privacy, and evidence remain byte/meaning fixed.
- `calibrationMastery` remains the sole durable calibration record. Detection,
  dialogue, focus, working source, traceback, output, notes, and modality are
  never persisted.
- Departure remains route-eligible in every calibration state. While the
  modal Terminal is open it is intentionally inert with the rest of the
  background, then is actionable immediately after close; calibration never
  closes or creates the route.
- Demo Tour remains separately named and zero-credit. Nursery appearance,
  actions, focus, and copy mint no campaign or Tour evidence.
- The Drowned return, later rail, MH-40, equal outcomes, null deltas, and
  `successor=null` remain exact.

## Current state graph

```text
MEADOW / First Signal unfinished
  DOM targets: First Signal -> Route Marker
  route marker: locked

First Signal complete
  DOM targets: First Signal -> Route Marker
  route marker: awake
  USE Route Marker -> existing L01-02 workspace

Route Marker mastery acknowledgement
  -> completed includes meadow
  -> pendingAdvance=true
  -> Route Terminal closes
  -> current hotspots and all verbs disabled
  -> departure row shows:
       Optional calibration / Resume optional calibration
       Depart: Drowned Archive

Optional calibration launcher
  -> existing L01-03 workspace
  -> close returns to departure row
  -> mastery removes optional launcher and leaves departure

DROWNED return to completed Meadow
  -> completed Meadow hold
  -> current generic optional launcher can return
```

Current implementation gaps are bounded: no Nursery registration or state,
the completed hold disables all world targets and verbs, the optional lesson
has a second generic launcher, completed `USE` has no defined behavior, and
focus restoration knows only the generic trigger/fallback rather than the new
state-specific target.

## Target state graph

```text
M0 PRE_DETECTION
  routeMarkerMastery != exact mastered
  visible material: unchanged low-left stock
  semantic Nursery node: absent
  targets: First Signal -> Route Marker

exact Route Marker acknowledgement
  -> sanitize exact evidence
  -> M1 AVAILABLE
  -> unmount Route Terminal
  -> render Nursery third in source order
  -> focus Nursery once
  -> announce detection once in the existing visible polite region
  -> keep departure immediately available

M1 AVAILABLE (calibrationMastery == null)
  LOOK AT -> material observation -> M1
  TALK TO -> complete silence -> M1
  USE -> open existing clean L01-03 Terminal -> M2
  DEPART -> DROWNED, no calibration write

M2 IN_PROGRESS (sanitized in_progress or remediation_required)
  close/Escape -> M2, same-scene working session retained
  retry/hint/form/retrieval -> existing exact L01-03 behavior
  USE after close -> reopen retained same-scene session
  DEPART after close -> DROWNED, durable bounded evidence unchanged
  full reload/departure/return -> clean working session reconstructed only
    after deliberate USE from sanitized mastery

mastery acknowledgement
  -> sanitize exact mastered evidence
  -> close Terminal
  -> M3 COMPLETE
  -> focus Nursery once
  -> announce completion once
  -> departure remains next reachable adventure action

M3 COMPLETE
  LOOK AT -> unchanged material fact -> M3
  TALK TO -> complete silence -> M3
  USE -> bounded read-only completion report in polite region -> M3
         no Terminal, session, attempt, hint, answer, confidence request,
         evidence write, downgrade, route write, or world change
  DEPART -> DROWNED

DROWNED -> RETURN MEADOW
  sanitized in_progress/remediation_required -> M2, focus Nursery
  sanitized null or mastered -> M1 or M3, focus departure; Nursery remains
  discoverable next in scene source order

malformed prerequisite / noncontiguous campaign
  -> existing earliest safe fallback
  -> no Nursery, credit, or prerequisite skip
```

An optional calibration record rejected by its existing sanitizer cannot
claim in-progress or complete state. If the independently sanitized Route
Marker prerequisite and contiguous campaign are exact, the optional record
has the same no-credit effect as absent optional evidence and the Nursery is
`available`; otherwise the Nursery is absent. This does not trust malformed
evidence, add a recovery field, or skip a prerequisite.

## Target registration and source-order graph

The Meadow scene registry is frozen in this semantic and focus order:

```text
scene world group
  1. immutable integrated Meadow image
  2. First Signal button / primary / existing geometry
  3. Route Marker button / secondary / existing geometry
  4. Fracture Nursery button / secondary / conditional after exact mastery
  5. scene status
  6. conditional Terminal dialog as sibling of the inert world-content group

adventure control group
  7. LOOK AT
  8. TALK TO
  9. USE
 10. visible dialogue/status and owner labels
 11. Depart: Drowned Archive
 12. existing inventory controls
```

The Nursery remains third even though it is visually left of both prior
targets. Do not reorder the DOM by x-coordinate. Before detection, item 4 is
not rendered at all: no disabled button, offscreen label, `aria-hidden`
substitute, status token, focus stop, pointer target, or announcement exists.

During the completed Meadow hold:

- First Signal and Route Marker remain rendered as completed, disabled,
  non-dispatchable targets.
- Nursery alone remains enabled among scene targets.
- `LOOK AT`, `TALK TO`, and `USE` remain enabled so the player can choose the
  Nursery action. They change the selected verb only and mint no evidence.
- departure remains enabled; unrelated inventory actions may retain the
  existing completed-hold disable behavior.
- hidden or disabled controls cannot receive pointer, keyboard, touch,
  switch-like, or programmatic dispatch.

## Pure view-state derivation

Combat may add a pure derived helper beside `MEADOW_PIXEL_HOTSPOTS`; it may not
add a state hook, save field, evidence class, scene ID, completion key, or
route flag for discovery.

| Sanitized route state | Sanitized calibration state | Nursery view state | Render / dispatch |
| --- | --- | --- | --- |
| missing, locked, awake, in progress, rejected | any | `hidden` | no node, focus, label, notice, or action |
| exact mastered | `null` | `available` | enabled semantic target |
| exact mastered | `in_progress` | `in_progress` | enabled semantic target |
| exact mastered | `remediation_required` | `in_progress` | enabled semantic target; remediation remains inside Terminal |
| exact mastered | `mastered` | `complete` | enabled semantic target; `USE` is read-only |
| exact mastered | unsupported status sanitized to `in_progress` by current sanitizer | `in_progress` | no forged completion |

The current sanitizer defaults a structurally accepted optional record with an
unsupported mastery value to `in_progress`; Tactical does not change that
existing learning contract. Missing or rejected optional records never gain
credit. Reordered/forged/missing Route Marker evidence cannot render the
Nursery.

## Group replacement contract

| Target group | Owner | Heading/status owner | Replaces | Permitted replacement |
| --- | --- | --- | --- | --- |
| Meadow world content | Scene | existing chapter status | current image + two targets | same image + two targets + conditional third target |
| detection | Suit/System | existing visible polite dialogue region | generic route-open summary after Route Terminal | one compatibility notice plus compact chapter turn; no modal |
| action verbs | Pilot controls | existing pressed state | all disabled during Meadow hold | enabled only for Nursery selection during hold |
| Nursery result | Scene or Suit/System by slot | existing polite dialogue region | none | one owner-correct result; focus remains on target |
| optional calibration entry | Suit/System | Nursery `USE` | generic departure-row launcher | direct existing Terminal open with no confirmation |
| calibration Terminal | System / 901 Teacher | existing Terminal title and status | same current workspace | exact workspace, semantics, and learning behavior |
| completed `USE` | System + Scene fact | polite dialogue region | undefined current path | read-only bounded completion report; no modal |
| Meadow departure | Pilot / Scene | existing departure action | two-action optional/departure row | one departure action plus separate in-world Nursery |
| Drowned return | Scene + Suit/System | existing chapter announcement/dialogue | generic optional launcher after return | state-correct Nursery or departure focus |

Every replacement is complete. The generic `Optional calibration` and
`Resume optional calibration` button, accessible label, event path, and tests
must be removed rather than hidden. There is exactly one campaign function
path that opens a fresh/in-progress calibration: eligible Nursery `USE`.

## Action, eligibility, and one-hit map

| Action / event | Eligibility | Result | Focus / announcement | Evidence effect |
| --- | --- | --- | --- | --- |
| select `LOOK AT` | Nursery visible; Terminal closed | selected verb becomes `LOOK AT` | selected verb keeps native focus | none |
| select `TALK TO` | Nursery visible; Terminal closed | selected verb becomes `TALK TO` | selected verb keeps native focus | none |
| select `USE` | Nursery visible; Terminal closed | selected verb becomes `USE` | selected verb keeps native focus | none |
| activate Nursery with `LOOK AT` | M1/M2/M3 | show visible repair-stock fact only | Nursery remains focused; one polite result | none |
| activate Nursery with `TALK TO` | M1/M2/M3 | show complete physical silence | Nursery remains focused; one polite result | none |
| activate Nursery with `USE` | M1 | create existing clean in-memory calibration session and open Terminal | Terminal title | no attempt until existing run/check action |
| activate Nursery with `USE` | M2 same scene | reopen retained in-memory session | Terminal title, then existing internal order | none on open |
| activate Nursery with `USE` | M2 after reload/return | create clean working session from exact starter, preserving only sanitized mastery | Terminal title | none on open |
| activate Nursery with `USE` | M3 | no Terminal; show read-only completion state | Nursery remains focused; one polite result | none |
| Depart: Drowned Archive | M1/M2/M3 with Terminal closed | existing `continueJourney()` to Drowned | existing Drowned primary focus and chapter announcement | no calibration write |
| close / Escape | Terminal open | close only; retain same-scene session | enabled Nursery; fallback departure if unavailable | no new evidence |
| TOUR: SKIP PRACTICE | Terminal open | existing explicit confirmation and zero-credit Tour flow | existing confirmation focus/return | no campaign credit |

All target and verb controls remain native buttons. Pointer, touch, Enter,
Space, screen-reader activation, speech-command activation by accessible name,
and switch-like activation converge on one native `click` intent. Do not add
parallel `keydown`, `pointerdown`, or touch dispatch. Held key repeat,
pointer/keyboard crossover, or simultaneous activation cannot open two
Terminals or increment attempts. Terminal-open state synchronously makes the
world and command background inert before another intent can dispatch.

## Focus, announcement, and recovery plan

| Event | Exact focus after settled render | Announcement rule |
| --- | --- | --- |
| Route Marker mastery acknowledgement | Nursery hotspot after Route Terminal unmounts | exactly one visible polite detection update; no duplicate sr-only copy |
| select a verb | selected native verb button | pressed state is enough; no live announcement |
| Nursery `LOOK AT` / `TALK TO` | Nursery hotspot | exactly one owner-correct update in existing polite dialogue region |
| Nursery `USE` M1/M2 | existing `#terminal-title` | existing dialog title/context; no extra detection replay |
| Terminal close button / Escape | Nursery trigger if still eligible | route-open state may update visibly once; no duplicate scene announcement |
| active failure | existing failed control or status within Terminal | existing actual-miss status/remediation only |
| hint / retry | existing triggering control or next existing task control | existing bounded status; no answer exposure |
| mastery acknowledgement | Nursery after Terminal unmounts | exactly one completion update in visible polite region |
| completed Nursery `USE` | Nursery | one read-only completion update; no dialog announcement |
| immediate departure | existing Drowned primary target | existing Chapter II announcement only |
| reload unfinished | Nursery | existing Chapter I announcement once; clean session waits for `USE` |
| reload unstarted/mastered | Drowned departure | Chapter I announcement once; Nursery remains next in source order |
| Drowned return unfinished | Nursery | existing Chapter I arrival once; no detection replay |
| Drowned return unstarted/mastered | Drowned departure | existing Chapter I arrival once; no detection replay |
| sanitation removes eligibility while closing | Drowned departure | no Nursery or false completion announcement |
| malformed/noncontiguous campaign | existing earliest safe fallback | existing recovery only; no Nursery notice |

Use one purpose-specific Nursery ref plus bounded pending-focus refs for
detection and mastery. A pending ref is consumed once in `useLayoutEffect`
after the target is connected. It is never persisted. Terminal cleanup first
honors an already-connected explicit transition focus, then its eligible
trigger, then `[data-terminal-focus-fallback]:not([disabled])`. Set the
departure as the deterministic Meadow fallback. No render-time `.focus()`,
timeout-based retry, or focus to a hidden/disabled target is permitted.

The visible dialogue box remains the sole detection/result live region. Do
not mirror the same sentence into `data-scene-announcement`; that sr-only
region remains for chapter arrival. Detection does not replay on render,
reload, Drowned return, verb change, hover, focus, resize, forced colors, or
reduced-motion changes.

## Terminal modal and inertness contract

The current Terminal retains `role="dialog"`, `aria-modal="true"`, its unique
title, title-first focus, Tab/Shift+Tab containment, Escape, visible close,
and trigger/fallback restoration. Combat must make the complete nonmodal
background inert while any Terminal is open:

```text
scene-frame
  world-content [inert when Terminal open OR Tour confirmation open]
    image, hotspots, scene status
  TerminalShell [not inert while Terminal open; inert behind Tour confirmation]

command-panel [inert when Terminal open OR Tour confirmation open]
DemoTourConfirmation [top active modal when present]
```

The plate is never called interactive in alt text; the semantic button owns
the action. Background inertness is semantic and pointer-safe, not only a
visual overlay. The Nursery trigger stays connected while its Terminal is
open but cannot dispatch. When Tour confirmation opens from inside the
Terminal, the Terminal also becomes inert behind that confirmation; cancel
restores its initiating Tour control exactly as released. No modal action
creates learning evidence merely by focus, open, close, or cancellation.

## Retry, close, departure, return, reload, and malformed recovery

### Same-scene session

- Close/Escape from an unfinished calibration retains the current in-memory
  `calibrationSession` exactly as current behavior permits.
- Reopening through Nursery `USE` returns to that session without an attempt,
  form, hint, or confidence mutation.
- Actual diagnosis, run, retrieval, and confidence actions retain their
  existing evidence rules. A miss alone enables existing remediation.
- Exiting after a miss is safe. No shame, object fault, answer, or route-loss
  claim is introduced.

### Departure and return

- Departure is rendered and enabled at M1, M2, and M3 whenever no modal is
  open. It never checks calibration mastery.
- `continueJourney()` continues to clear transient `calibrationSession`; it
  does not clear or rewrite sanitized `calibrationMastery`.
- Drowned-to-Meadow return remains write-free. It clears every private working
  session through the existing return patch and preserves all allowlisted
  evidence byte/meaning.
- Return at M2 focuses Nursery; a deliberate `USE` reconstructs the clean
  starter and shows current sanitized evidence state.
- Return at M1/M3 focuses departure. Nursery remains discoverable in canonical
  source order and does not replay detection.
- Redeparture always enters Chapter II, even when later completion exists.

### Reload and resume

- Full reload never restores source, traceback, output, notes, dialogue,
  detection, focus, modality, or pointer path.
- Resume sanitizes the existing route and calibration records before deriving
  Nursery state.
- Pending completed Meadow plus unfinished calibration focuses Nursery; no
  workspace opens automatically.
- Pending completed Meadow plus absent/mastered calibration focuses departure.
- A fully completed later prefix does not backtrack to Meadow unless the
  existing explicit Drowned return is used.
- No resume path writes until the existing campaign projection writes for its
  existing reason.

### Malformed and unavailable states

- Forged/missing Route Marker mastery, noncontiguous completion, unsupported
  lesson identity, or rejected campaign structure produces the existing safe
  fallback with no Nursery.
- Rejected optional calibration data cannot produce in-progress/mastered
  display or credit. With an independently exact mastered Route Marker it is
  treated as no optional credit, not as a prerequisite bypass.
- If eligibility changes while a dialog closes, focus goes to departure.
- Hidden/disabled states have a textual non-color meaning when present, but
  pre-detection Nursery is absent rather than shown as locked.
- Runtime exceptions, duplicate launch, missing focus target, positive target
  overlap, or horizontal escape are test failures, not silent recovery paths.

## Responsive hotspot and source mapping proof

### Frozen normalized rectangles

| Target | Left | Top | Width | Height | Right | Bottom |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Fracture Nursery | `0%` | `52%` | `24%` | `48%` | `24%` | `100%` |
| First Signal | `25%` | `11.1111%` | `50%` | `88.8889%` | `75%` | `100%` |
| Route Marker | `77.0313%` | `53.3333%` | `21.5625%` | `46.3889%` | `98.5938%` | `99.7222%` |

The Nursery ends one percentage point before First Signal begins and more
than fifty-three percentage points before Route Marker begins. Pairwise
positive intersection area is exactly zero. Boundary contact is also absent.
Wide and narrow custom properties are identical `0/52/24/48`.

### Live cover mapping

The accepted image is exact `1672 x 941`, `2,688,247` bytes, 24-bit RGB PNG,
SHA-256
`6B27AC8233A5C29583450064DA3D51C504E16A513759D52E5651B9C60EC031D2`.
The scene is exact `16 / 9`, and current Meadow art is `object-fit: cover` with
centered object position. Because the source is one half-pixel taller than an
exact `1672 x 940.5` 16:9 crop, live cover removes only `0.25` source pixel
from top and bottom.

The authored Nursery source band is `x 0-401.28`, `y 489.32-941`. The visible
source range is `x 0-1672`, `y 0.25-940.75`. The live DOM target maps to
`x 0-401.28`, `y 489.32-940.75`, preserving
`451.43 / 451.68 = 0.9994465` of the source band. This exceeds `0.85`.
Its source center `(200.64, 715.16)` and rendered center remain contained.

| Required layout | Scene box | Nursery CSS box | `>=44 x 44` |
| --- | --- | --- | --- |
| `1920 x 1080` | `1920 x 1080` | `460.8 x 518.4` at `(0, 561.6)` | yes |
| `1366 x 768` | `1366 x 768.375` | `327.84 x 368.82` at `(0, 399.555)` | yes |
| `390 x 844` | `390 x 219.375` | `93.6 x 105.3` at `(0, 114.075)` | yes |
| effective `200%` `768 x 900` | `768 x 432` | `184.32 x 207.36` at `(0, 224.64)` | yes |
| retained `320 x 180` | `320 x 180` | `76.8 x 86.4` at `(0, 93.6)` | yes |
| retained `320 x 240` host | `320 x 180` world | `76.8 x 86.4` at `(0, 93.6)` | yes |

Combat tests must measure the actual rendered image content box and target
rectangle, not merely repeat constants. Any layout whose live source-band
overlap is below `0.85`, center is outside, target is below `44 x 44`, or
positive overlap appears is `HOLD` through Mission to Science.

## Wide, laptop, narrow, and effective-200 layout

### Wide and laptop

- Preserve the one continuous 16:9 field, centered cover, existing image
  request, and three overlaid semantic targets.
- The Nursery label remains inside its target/scene and never overlays First
  Signal, Route Marker, scene status, or the departure control.
- The command band keeps all three verbs, compact owner-correct copy, one
  departure action, and existing inventory without horizontal escape.
- Opening the Terminal may cover part of the plate, but its background is
  inert and the dialog remains contained with all existing work visible by
  internal scroll where needed.

### Narrow and effective `200%`

- Preserve exact Nursery geometry and centered plate; do not pan, zoom,
  substitute a crop, or change object position.
- Keep natural document flow. No required outer-page horizontal scroll is
  permitted.
- The existing completed-Meadow rule that hides the entire verb grid is
  incompatible with this Work Order and must be removed or narrowed. All three
  verbs and the departure remain visible, reachable, and at least `44 x 44`.
- Remove the generic calibration action rather than compressing it beside
  departure. The Nursery remains the sole entry.
- Longest Quartermaster copy and non-color state wrap without clipping,
  target occlusion, or required outer-page scroll. Vertical document flow or
  bounded internal Terminal scrolling is permitted.
- No meaning depends on seeing all three physical targets simultaneously at
  magnified text size; semantic source order carries the comparison.

The CSS cap has only ten bytes of accepted headroom. Combat may remove or
replace redundant completed-Meadow compact rules in the same candidate, but
aggregate emitted CSS must remain `<=119,672` bytes. No invisible semantics,
undersized control, truncated copy, or media change is an acceptable budget
trade.

## Non-color, forced-color, grayscale, motion, and sound contract

- Each Nursery accessible/visible label contains selected action, stable name
  `Fracture Nursery coupling`, and explicit state `available`, `in progress`,
  or `complete`. Border style, color, or opacity never carries state alone.
- Native disabled semantics and explicit state text distinguish completed
  prior targets from the enabled Nursery.
- Focus remains at least the existing `2px` visible outline in normal mode and
  `3px Highlight` or equivalent in forced colors. The Nursery may not inherit
  the primary target's intentionally suppressed outer outline unless its own
  visible label receives an equal explicit focus indicator.
- Grayscale preserves labels, borders, pressed state, status text, and focus.
- Reduced motion removes every nonessential transition/animation. No motion,
  delay, hover, or camera movement is required for detection or order.
- Add no sound. `TALK TO` does not imply a failed speaker, delayed answer,
  dormant mind, or future response.

## Copy-slot ledger

Quartermaster owns exact final words. Combat creates or preserves the slots
and uses clearly bounded nonfinal placeholders without expanding meaning.

| Slot | Owner | State / surface | Required meaning | Forbidden meaning |
| --- | --- | --- | --- | --- |
| `FRPX02_MEADOW_ALT` | Scene | broad image alt | flat cultivated glass plus visible low repair stock | raster interactive, awake, responsive, native-named |
| `FRPX02_NURSERY_NAME` | Suit/System | all semantic labels | stable name `Fracture Nursery coupling` | Builder/native proper name or kiosk |
| `FRPX02_NURSERY_STATE` | Suit/System | hotspot label | available / in progress / complete in text | color-only or locked pre-detection label |
| `FRPX02_DETECTION` | Suit/System | first post-Marker update | one local compatible coupling newly classified; matter unchanged | woke, opened, invited, responded, reward |
| `FRPX02_CHAPTER_TURN` | Pilot | same compact post-detection group | three unlike bodies; one expedition interface | Machine/Builder speech, native Python |
| `FRPX02_LOOK` | Scene | LOOK result | rejected/cloudy forms, sleeves/collars, fused edges, feed/return relation visibly present | secret object, prize, healing |
| `FRPX02_TALK` | Scene/Pilot observation | TALK result | complete silence and unchanged material | broken voice, listening, future answer |
| `FRPX02_AVAILABLE` | Suit/System | route-open summary | optional scored calibration available here; departure already open | requirement, route gate, reward |
| `FRPX02_IN_PROGRESS` | System | route-open summary | bounded human working copy unfinished; safe resume/exit | object fault, shame, lost route |
| `FRPX02_COMPLETE` | System + Scene fact | mastery return/read-only USE | evidence finalized; cracks/field unchanged | repair, approval, earned passage |
| `FRPX02_RETURN` | Scene + Suit/System | Drowned return/reload | same stock/coupling; unfinished work available here only when true | recall, replay, new response |
| `FRPX02_DEPARTURE` | Pilot/Scene | departure context | deliberate use of pre-existing ridge, no penalty | refusal, loss, closed route |

Slots `FRPX02_DETECTION` and `FRPX02_CHAPTER_TURN` may share one visual status
group only if each owner is explicitly labeled. One owner may not speak the
other's line. Final copy may not use `healed`, `crowned passage earned`,
`expected`, `accepted`, `invited`, `approved`, `mission`, `native Python`,
`successor packet`, or an equivalent route-earned/world-response claim. Do
not paste the game-on-paper chapter in bulk.

## Combat-ready acceptance matrix

| ID | Requirement | Exact proof |
| --- | --- | --- |
| `PX02-01` | authority and patch scope | candidate descends from Tactical source; only shell-permitted product/test/manifest/report paths change; protected paths untouched |
| `PX02-02` | immutable master | exact file path, dimensions, byte count, SHA-256, accepted media `17 / 37,410,731`, and zero media diff/request |
| `PX02-03` | target registry | exact `fracture-nursery` geometry `0/52/24/48`, identical narrow, after Route Marker in source order |
| `PX02-04` | live mapping | actual DOM/image measurement at all six layouts proves `>=0.85`, center containment, `>=44 x 44`, and zero positive overlap |
| `PX02-05` | pre-detection absence | every route state except exact mastered has no Nursery DOM node, label, focus stop, pointer target, notice, or action |
| `PX02-06` | sanitized states | exact mastered + null/in-progress/remediation/mastered maps to available/in-progress/in-progress/complete with no persistent discovery state |
| `PX02-07` | completed hold | prior hosts nonactive; Nursery and three verbs active; departure active outside modal; unrelated controls retain safe behavior |
| `PX02-08` | action semantics | LOOK material fact, TALK silence, USE exact calibration; LOOK/TALK never open Terminal or change evidence/state |
| `PX02-09` | sole launcher | generic optional/resume launcher and accessible names absent; exactly one eligible campaign open path from Nursery USE |
| `PX02-10` | completed USE | no Terminal/session/attempt/hint/answer/confidence/evidence/downgrade/write; read-only polite result and retained focus |
| `PX02-11` | detection lifecycle | post-acknowledgement unmount -> Nursery focus -> one visible polite notice; no replay on render/reload/return/resize |
| `PX02-12` | focus recovery | exact event table passes; close/Escape returns Nursery or departure; hidden/disabled nodes never receive focus |
| `PX02-13` | modal inertness | Terminal title first, Tab containment, Escape, visible close, complete background inert, one restoration, no pointer leakage |
| `PX02-14` | activation convergence | pointer/touch/Enter/Space/switch-like native activation opens once; repeated/crossover activation cannot duplicate attempt or dialog |
| `PX02-15` | exact learning | current prompts/starters/tracebacks/forms/answers/check IDs and strict `8/8 + 8/8 + 4/4` remain byte/meaning exact |
| `PX02-16` | privacy/save | save schema/version/key projection unchanged; working/private/detection/focus/modality fields absent; sanitizer allowlist exact |
| `PX02-17` | safe practice | actual miss, hint, unlimited retry, exit, reopen, and mastery preserve existing remediation and route-open truth |
| `PX02-18` | optional departure | unstarted, in progress, remediation, mastered, skip, close, and return all permit unchanged Drowned departure outside modal |
| `PX02-19` | return/reload | write-free Drowned return; unfinished focuses Nursery; unstarted/mastered focuses departure; clean session only after deliberate USE |
| `PX02-20` | malformed recovery | forged/missing prerequisite cannot render Nursery or gain credit; optional malformed data cannot claim progress/mastery |
| `PX02-21` | Tour isolation | Demo Tour separately named, confirmation/modal focus exact, zero campaign credit, no discovery cross-credit |
| `PX02-22` | responsive copy/control | longest slots, state, verbs, departure, Terminal, and labels contain at wide/laptop/narrow/effective 200/320 fixtures with no horizontal escape |
| `PX02-23` | non-color/accessibility | explicit state text, native names, pressed/disabled semantics, normal/forced-color/grayscale focus and meaning pass; no human-AT overclaim |
| `PX02-24` | reduced motion/silence | no required motion/timing/hover/sound; reduced motion preserves order and meaning; no audio request |
| `PX02-25` | route/world/ending radius | opening, Drowned, Witness, City, later returns, all learning, MH-40 equal outcomes, null deltas, and `successor=null` unchanged |
| `PX02-26` | PBA/offline | JS `<=1,703,258`, CSS `<=119,672`, modules `<=222`, task `<=100ms`; no dependency/network/runtime/external operation |
| `PX02-27` | canonical command manifest | checked-in `FRRC-001-v1` has every required field/entry, exact 40 sorted validator `--self-test` calls, exact previews/identity/PBA/cleanup/candidate |
| `PX02-28` | one E2E | one isolated production journey skips Nursery for first Drowned entry, returns write-free, makes one real calibration miss, exits/reloads, completes through Nursery, redeparts, and reaches both equal MH-40 outcomes with zero runtime errors |
| `PX02-29` | cleanup and identity | only owned contained outputs/PIDs/ports touched; `4173` and `4184` clear; candidate stable; Combat dedicated commit pushed with `HEAD == origin/main` |
| `PX02-30` | rollback | one bounded Work Order product/test/manifest patch reverts to exact accepted predecessor without migration or user/media action |

Focused tests must directly cover `PX02-03` through `PX02-21`, not infer them
from string presence alone. The full test and validator ladder remains required
for release, and live measurement is required in addition to arithmetic.

## `FRRC-001-v1`, E2E, and release evidence preservation

Combat must instantiate the exact checked-in manifest required by
`FRSH-002-v1`. Tactical freezes these points without changing command meaning:

- `focused` and `related` are nonempty explicit argument arrays; there is no
  empty test-name filter.
- `validators` enumerates exactly the current forty sorted `validate*.py`
  paths, each with `--self-test`; count drift stops execution for
  reconciliation.
- production preview owns only `127.0.0.1:4173`; fixture preview uses the
  exact TD-012 fixture config and owns only `127.0.0.1:4184`.
- served identity covers root, deep fallback, emitted JS, and emitted CSS for
  both previews with served/disk byte equality.
- exactly one `playtest/e2e-playthrough.mjs` invocation uses one resolved,
  contained isolated QA directory and exact URL/QA environment values.
- the one journey proves initial optional skip, write-free return, deliberate
  Nursery entry, real miss, safe exit, reload recovery, mastery, redeparture,
  and both equal MH-40 outcomes. It is one deterministic journey, not two
  overlapping whole-game runs.
- cleanup stops only recorded PIDs, checks containment before deletion,
  reports blocked cleanup, clears owned ports, runs patch/protected checks,
  and records candidate identity before and after.

Quartermaster and Image may append only their named focused files as the shell
permits. A divergent command is not release evidence until the manifest is
versioned and the exact gate rerun.

## Regression radius and patch firewall

Combat must treat these as regression-only unless the exact blueprint requires
their authorized integration:

- First Signal orientation, editor, evidence, focus, copy, and exact hotspot;
- Route Marker geometry, two forms, prediction, retrieval, confidence,
  evidence sanitizer, completion, and inherited physical response;
- calibration curriculum asset and evaluator module, which are patch-forbidden;
- campaign save schema/version/projection and all other evidence sanitizers;
- opening, Drowned controller and host compression, Witness, City, later route,
  all returns, TD-012 fixture, and MH-40;
- accepted media, dependencies, lockfiles, runtime requests, and offline mode;
- Demo Tour allowlist, zero-credit cursor, confirmation, and resume;
- game-on-paper, surface lore, curriculum JSON/Markdown/Python, hidden lore,
  and all paths outside the shell list.

Permitted product/test/manifest/report paths remain exactly those enumerated in
`FRSH-002-v1`. Tactical adds only this report and the synchronized handoff.
Combat may not touch a patch-forbidden path to make a test easier.

## Performance, media, privacy, and release hard stops

Immediate `HOLD` applies to any of the following:

- a media byte/request/path change, generation, edit, replacement, variation,
  crop export, import, movement, removal, publication, or reveal;
- hidden lore, Martin's browser/profile/save, protected path, broad process
  kill, broad deletion, or external operation;
- a new lesson, exercise, branch, route, save field/version/migration,
  mandatory activation, reward, access, identity, authority, world response,
  successor, RP-013, or post-ending content;
- Machine/Builder dialogue, prior-human trace, native-Python claim, or route
  earned through optional calibration;
- invisible host expression, positive target overlap, `<0.85` source overlap,
  lost center, `<44 x 44` target, clipped required copy, horizontal escape, or
  inaccessible sole action;
- any JS/CSS/module/media/task/time cap overage, dependency/network request,
  validator count other than forty, generic fixture preview, second E2E, or
  uncontained QA/cleanup path;
- learning, privacy, Tour, save, route, Drowned, later-rail, world, or ending
  regression.

Return a provenance/crop/geometry/budget/system impossibility through Mission
to Science; canon/voice ambiguity to Colonel; scope/order to Operations; and
product promise to Commandant. Do not solve a mismatch with media, hidden
state, scope expansion, or a weaker test.

## Variances, downstream choices, and rollback

Variance classification: **none discovered**.

The blueprint resolves the current completed-hold conflict by enabling only
the already-authorized Nursery and three verb controls while leaving the route
open. It resolves completed `USE` with the shell-permitted no-modal read-only
report. It resolves detection announcement duplication by using the existing
visible polite dialogue region once and reserving the sr-only scene region for
chapter arrival.

Combat retains implementation freedom only for helper/function/ref names,
exact component factoring inside permitted files, and same-candidate CSS
removal/reuse that satisfies the frozen DOM/state/focus/layout behavior.
Quartermaster retains exact prose and accessible-label wording within the copy
slots. Image Specialist retains only the shell's code/configuration-level
presentation review boundary.

Rollback is the complete `FRWO-002-v1` product/test/manifest patch and
downstream reports. Reverting it restores the exact accepted `FRAB-001-v1`
product/test predecessor. There is no migration and no user state or media is
a rollback tool.

## Validation performed

- Read the synchronized handoff, Tactical profile, `FRSH-002-v1`, and
  `FRDT-002-v1` in full and reconciled every fixed invariant and flexible
  Tactical choice.
- Inspected the current Meadow scene registry, `pixelMeadow.js`, `App.jsx`
  scene/state/save/resume/action/calibration/render sections, responsive
  `styles.css`, Terminal focus helper, scene transition/return helpers,
  calibration and Route Marker evaluators, and all cited focused tests.
- Read both accepted Meadow provenance records and verified the integrated
  master path, byte count, and exact SHA-256 without changing media.
- Proved exact normalized non-overlap and actual centered-cover source mapping,
  including the half-source-pixel vertical crop and `0.9994465` retained band.
- Walked available, in-progress/remediation, complete, skip, close/Escape,
  miss/retry, mastery, departure, reload, Drowned return, malformed, Tour,
  pointer, keyboard, touch-equivalent, switch-like, wide, laptop, narrow,
  effective-200, forced-color, grayscale, and reduced-motion paths.
- Fresh current focused baseline passes `47/47` in `0.226 s` process time
  across calibration, Meadow geometry, Route Marker, transition, return, Tour,
  focus, production plate, and primary-coupler contracts. This is baseline
  evidence only, not as-built proof or a maturity advance.
- Changed no product, test, media, story, learning, save, route, map,
  scoreboard, maturity, manifest, or downstream report and performed no image
  or media operation.

## Exact Combat handoff

Combat Engineer must read `FRSH-002-v1`, `FRDT-002-v1`, and this
`FRPX-002-v1` in full. Implement exactly one bounded `FRWO-002-v1` candidate
inside the shell's permitted product/test paths: register the exact
`fracture-nursery` target and pure sanitized view state, render no affordance
before exact Route Marker mastery, enable the sole Nursery and three verbs in
the completed Meadow hold, route `LOOK AT` / `TALK TO` / `USE`, remove the
generic calibration launcher, make completed `USE` read-only, wire the frozen
focus/announcement/recovery/modal-inertness rules, preserve the existing
optional lesson and route, and add direct tests plus the exact checked-in
`FRRC-001-v1` command manifest.

Preserve Quartermaster copy slots rather than claiming final prose. Run and
record the manifest-defined Combat ladder, including focused/related/full,
exact forty validators, production and exact fixture builds/previews, served
identity, live required layouts, PBA/media/offline/privacy, exactly one
isolated complete E2E, cleanup, and candidate identity. Stop at stable entry
into existing Drowned behavior. Do not edit/generate/import/reveal media,
alter learning/canon/route/save/world/ending, change maturity, touch protected
or user state, or begin Quartermaster. Classify every variance, issue
`BUILD CANDIDATE READY`, `REVISE`, or `HOLD`, update the synchronized handoff,
commit only Combat's authorized scope, push `main`, and prove
`HEAD == origin/main`.
