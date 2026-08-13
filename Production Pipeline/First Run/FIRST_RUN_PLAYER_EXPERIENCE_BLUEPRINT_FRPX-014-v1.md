# FIRST RUN PLAYER EXPERIENCE BLUEPRINT / FRPX-014-v1

## Disposition and identity

`PLAYER EXPERIENCE READY / ATOMIC NATIVE-OR-GENERIC RELATIONSHIP / COMBAT NEXT`

Tactical stage: `tactical_operations_specialist` / `OPERATE`.

```yaml
blueprint_id: FRPX-014-v1
shell: FRSH-014-v1
treatment: FRCT-014-v1
work_order: FRWO-014-v1
viability_envelope: FRVE-014-v1
baseline: FRPB-001-v12
continuity_lock: FRCL-014-v1
source_release: FRAB-013-v1
source_product: 357ad6dc4184b74150173504e86e366c761cdc0e
state_read: FRLS-REC-001-v1
state_written: FRLS-TAC-001-v1
next_owner: combat_engineer
```

The shell, treatment, current released code, predecessor state machine,
Objective Ledger, Remediation Planner, save/resume sanitation, shared Terminal,
responsive projection, hotspot, focus, and current tests are compatible. The
remaining gap is implementation specificity, not product, canon, source,
learning, or viability ambiguity. This blueprint closes that gap without a
call, media action, runtime edit, copy change, lesson change, or maturity move.

## Source facts and implementation boundary

Combat works from the released source structure in `App.jsx`: one ruins scene,
one selected physical host presented at a time, native semantic hotspot buttons,
one shared `TerminalShell`, and generic lesson launchers in the command panel.
The exact released predecessor derives `hidden / available / in_progress /
remediation_required / complete` from predecessor mastery, source identity,
physical measurement, decode, and sanitized lesson evidence; presents only
after lawfulness; routes LOOK/TALK/USE through one native button; and derives a
six-layout cover projection from source geometry.

The two current generic launchers are independently visible after predecessor
mastery: first Objective Ledger until strict mastery, then Remediation Planner
until strict mastery. The later Capstone launcher is outside the replacement
group. `TerminalShell` already owns a named modal, title-first focus,
Tab/Shift+Tab containment, Escape, visible Close, connected-trigger restoration,
and the first enabled `data-terminal-focus-fallback` fallback. Objective Ledger
and Remediation Planner already own their evaluators, sanitizers, session
objects, status live regions, remediation, strict mastery, and private-data
exclusion. Combat reuses those systems; it does not fork them.

## Current and target state graphs

### Released current graph

```text
predecessor not mastered
  -> no Objective Ledger launcher

predecessor mastered
  -> generic Start/Resume Objective Ledger
     -> primary | miss/remediation | primary complete
     -> fresh transfer | miss/remediation | transfer complete
     -> closed-note explanation | strict mastery
  -> generic Start/Resume Remediation Planner
     -> primary | miss/remediation | primary complete
     -> fresh transfer | miss/remediation | transfer complete
     -> closed-note explanation | strict mastery
  -> unchanged generic Capstone boundary
```

Close/Escape retains the exact in-memory session and restores the generic
trigger. Reload/resume sanitizes durable evidence, clears session-private
responses, and reconstructs the first incomplete released form. Invalid
evidence is downgraded by its existing sanitizer. No world state changes.

### Target selection graph: one atomic render decision

```text
compute nativeCandidate =
  scene == ruins
  AND pendingAdvance
  AND predecessor native state == complete
  AND registry/provenance/schema/copy/geometry/layout predicate == PASS
  AND selected raster decode == exact 3840x2160 PASS
  AND Objective Ledger evidence is absent or sanitizer-accepted
  AND Remediation Planner evidence is absent or sanitizer-accepted

if nativeCandidate is false:
  render released generic Objective/Remediation launchers by their unchanged
  evidence predicates; render no native art, label, hotspot, or focus target

if nativeCandidate is true but presentation has not committed:
  retain generic launchers until the same render that commits native art +
  native hotspot; never hide generic controls in an earlier pass

if nativeCandidate and native presentation are true:
  atomically render native art + exactly one native hotspot
  AND suppress exactly the two generic Objective/Remediation launchers
  AND leave Capstone and all earlier/later launchers unchanged
```

Combat must express that choice with one positive selector such as
`waterlineLedgerNativeActive`. The two generic predicates are the logical
inverse of that same selector plus their released lesson predicates. Source
`enabled` alone is never the suppression predicate. There is no interval with
zero eligible action, no native-plus-generic duplicate, no decode flicker, and
no delayed cleanup pass.

### Native state graph

```text
HIDDEN
  cause: predecessor incomplete OR source disabled/absent/partial/malformed
         OR stale schema/wrong path/wrong attempt/identity mismatch
         OR provenance/copy/measurement/layout missing or invalid
         OR decode absent/error/wrong dimensions
         OR supplied lesson evidence fails its released sanitizer
  presentation: native absent; released generic path active

AVAILABLE
  condition: native lawful; Objective Ledger absent; Remediation absent
  USE -> Objective Ledger primary

OBJECTIVE_IN_PROGRESS
  condition: Objective Ledger sanitizer-accepted and not mastered
  includes primary, remediation_required, primary_complete, transfer,
  transfer remediation, transfer_complete, and closed-note states
  USE -> exact first incomplete Objective Ledger phase

REMEDIATION_IN_PROGRESS
  condition: strict Objective Ledger mastered; Remediation absent or
             sanitizer-accepted and not mastered
  includes primary, remediation_required, primary_complete, transfer,
  transfer remediation, transfer_complete, and closed-note states
  USE -> exact first incomplete Remediation Planner phase

COMPLETE
  condition: strict Objective Ledger mastered AND strict Remediation mastered
  USE -> read-only completion + unchanged next-boundary message

RETURNED
  not a sixth durable machine state; it is a write-free presentation event
  over AVAILABLE / OBJECTIVE_IN_PROGRESS / REMEDIATION_IN_PROGRESS / COMPLETE
```

`deriveWaterlineLedgerState` may expose the shell vocabulary
`available / in_progress / remediation_required / complete`; it must also
expose which owned lesson is current so the interface can place exact copy and
dispatch without inference in `App.jsx`. `remediation_required` means at least
one current owned sanitizer-accepted record has that status; it never means
the world changed. A malformed supplied evidence object is `hidden`, causing
the generic fallback; ordinary reload sanitation converts invalid saved
evidence to the released safe boundary before rendering.

## Registry, semantic region, hotspot, and crop plan

Combat creates `src/waterlineLedger.js` using schema
`horizon.waterline-ledger.v1`. Its committed preselection export is deeply
immutable and exactly null-first for source, provenance, relation, dry approach,
three histories, deposition band, waterline, service seams, semantic target,
physical center, label anchor, protected regions, six layouts, and copy.

Lawfulness is one non-coercing predicate. It requires the shell-frozen exact
path/provenance identity, `H14-1..H14-32`, ordinary opaque RGB PNG, exact
`3840x2160`, byte/SHA/decode identity, current schema, complete frozen copy,
nonzero source-pixel support for every required physical group, at least three
distinct service-seam polylines, all protected rectangles, and all six derived
layout records. Missing arrays, aliased history objects, duplicate seam paths,
non-finite/out-of-bounds coordinates, caller-authored layout attestations, and
unknown keys cannot become truth by coercion.

The native world region remains the existing ruins `scene-frame` and
`scene-world-content`. DOM source order inside it is:

```text
1. native img with shell alt
2. one native button hotspot
3. two non-live sr-only descriptions: physical relation and current state
4. existing scene status
```

The button is a native `type="button"`, uses
`data-hotspot-id="waterline-ledger"`, and carries the current state as data,
not as a second control. Its accessible name is exactly the active verb plus
the frozen provisional name, for example `USE Waterline Ledger`; physical and
state meaning are referenced through unique `aria-describedby` IDs. Visible
label text is the same active verb, name, and non-color state word. The label
is never visually aligned into rows that echo the deposition band or lesson
objective list.

`getWaterlineLedgerHotspot` derives the interactive rectangle from the measured
`semanticTarget`, projects it through the same cover geometry as the image,
centers it on the measured physical center, clamps it inside the current world
frame, and enforces `>=44x44` CSS px. It must not divide raw source coordinates
by fixed percentages without applying cover projection. A companion projected
label anchor keeps the label inside the world, at least `5px` inset, at least
`8px` from the visible focus edge, and non-overlapping with every protected
projection. If this cannot be satisfied at any required layout, lawfulness
fails and the generic path remains.

Runtime display crop is fixed to `object-fit: cover` and
`object-position: 50% 50%`; no byte crop or source edit exists. The projection
uses actual source dimensions and `getExpectedCanonicalWorldSize`. It must
retain `>=.95` of the complete relation, retain the center of the dry approach,
foundation, repair, service skin, deposition crossing, waterline, and every
required seam, contain the physical center in the semantic target, maintain
zero protected overlap, and pass one deliberately shifted/cropped mutation
that fails by `>.05` retention loss, missing essential center, target below
44px, or protected overlap.

## Action, eligibility, unavailable, and one-hit contract

One native hotspot owns all three existing verbs. It is omitted, not disabled,
when native lawfulness fails. While a Terminal is open, the connected hotspot
is disabled and its world container is inert under the released modal law.

| Action | Eligibility | Exact purpose/result | Evidence/world effect | Focus/announcement |
| --- | --- | --- | --- | --- |
| `LOOK AT` | native lawful, Terminal closed | place frozen `look` copy in dialogue as Scene observation | none / none | focus remains hotspot; announce `look` once through the scene polite status |
| `TALK TO` | native lawful, Terminal closed | place frozen `talk` complete-nonresponse copy as Pilot inference | none / none | focus remains hotspot; announce `talk` once; no voice/sound cue |
| `USE` available | native lawful, both owned evidence absent | open Objective Ledger primary | only existing Terminal work may later write evidence | Terminal title receives focus |
| `USE` Objective in progress | Objective evidence sanitizer-accepted, not mastered | open exact first incomplete primary/transfer/explanation phase | existing evaluator/sanitizer only | Terminal title receives focus |
| `USE` Objective remediation | actual current status `remediation_required` | reopen the exact released objective-specific repair path | no answer/cross-credit | Terminal title; existing bounded Teacher feedback |
| `USE` Remediation available/in progress | strict Objective mastered; Remediation not mastered | open exact first incomplete planner phase with sanitized learner state | existing planner only | Terminal title receives focus |
| `USE` planner remediation | actual planner status `remediation_required` | reopen exact failed route, fresh transfer, or explanation repair | no world or mastery shortcut | Terminal title; existing bounded Teacher feedback |
| `USE` complete | both strict masteries | show frozen `mastered` plus `next_boundary`; do not open a Terminal | none / none | focus remains hotspot; announce once |

The native button relies on browser-native click activation. Pointer click,
single touch, Enter, Space, accessibility switch, and programmatic semantic
click converge on the same `onClick` dispatch. Combat must not add parallel
`pointerdown`, `touchstart`, or key handlers. Held-key repeat, synthetic double
events, and a second activation while `terminalOpen` are non-dispatchable. One
accepted activation produces exactly one dialogue replacement or one Terminal
open.

Truthful unavailable paths are:

- predecessor incomplete: neither native nor owned generic launchers appear;
- native invalid/unready: no native control or source is exposed; the first
  eligible released generic launcher appears;
- Objective incomplete: planner cannot dispatch;
- Terminal open: world/hotspot is inert and disabled;
- complete: USE is explicitly read-only and the unchanged Capstone action
  remains separate;
- Demo Tour: no native action produces campaign evidence and the existing Tour
  isolation remains authoritative.

## Focus and announcement event table

| Event | Focus target after render | Polite announcement | Replay rule |
| --- | --- | --- | --- |
| predecessor mastery exposes lawful native relation | native hotspot | frozen `available` | once for that transition; not on every render |
| initial load at lawful incomplete relation | native hotspot if this is the first incomplete boundary | current available/in-progress/remediation copy | once after deterministic restoration |
| LOOK/TALK | same hotspot | exact action result | once per accepted activation |
| native USE | shared Terminal title | Terminal name/status via existing dialog semantics | no duplicate scene announcement |
| objective miss | first invalid field or existing repair action under Terminal flow | existing System score + Teacher repair | only current check result |
| Objective primary/transfer acknowledgement | native hotspot after Terminal closes | frozen `objective_in_progress` | once; no predecessor arrival replay |
| Objective strict mastery | native hotspot | frozen `remediation_in_progress` | once; no generic planner focus when native active |
| planner miss | first invalid field or existing repair action | existing System score + Teacher repair | only current check result |
| Planner primary/transfer acknowledgement | native hotspot | frozen `remediation_in_progress` | once |
| Planner strict mastery | native hotspot | frozen `mastered` | once; world art/sound/motion unchanged |
| visible Close or Escape | exact connected native trigger | existing safe-close status, not arrival copy | one restoration only |
| close while sanitation removes native | first eligible generic Objective/Planner; else Capstone; else first lawful existing fallback | existing safe-close status | never focus hidden/disabled/disconnected node |
| write-free route return | native hotspot when incomplete; native hotspot when complete before separate forward action | frozen `returned` plus current non-color state | once per route return |
| reload/resume with first lesson incomplete | native hotspot | current `available` or `objective_in_progress` | no transient response replay |
| reload/resume with second lesson incomplete | native hotspot | `remediation_in_progress` | no transient response replay |
| reload/resume with both mastered | native hotspot; unchanged Capstone remains next in source order | `mastered` | no mastery ceremony replay |
| native becomes invalid before focus | first eligible generic/fallback control | bounded System fallback status only | no orphaned pending flag |

Combat adds one `waterlineLedgerRef` plus transition, focus, and announcement
pending refs following the predecessor pattern, but clears every pending flag
when lawfulness fails. `TerminalShell` receives the exact native button as
`restoreFocusTo`. The Objective and Planner acknowledgement handlers choose
native focus when `waterlineLedgerNativeActive`; their released generic
`continueButtonRef` behavior remains the fallback when native is inactive.
The shared `shouldRestoreTerminalFocus` guard remains unchanged so a deliberate
post-mastery focus move wins over Terminal cleanup.

Announcements use the existing single scene `role=status`, `aria-live=polite`,
and `aria-atomic=true`. No answer, score, objective row, or physical feature is
repeated into it. Terminal result live regions remain the sole owner of check
scores and Teacher remediation.

## Close, reopen, retry, return, reload, resume, and malformed recovery

- Close/Escape closes only the active Terminal. It retains the existing
  `objectiveLedgerSession` or `remediationPlannerSession` in memory, including
  current form, index, working response, result, and hint position. It writes
  no new evidence merely by closing.
- Reopen through native USE returns to that exact in-session object. The native
  state copy reflects the sanitized durable evidence, not private draft text.
- A miss remains inside the released evaluator. Retry is unlimited, answer-free,
  and local. The world and native registry do not receive attempt, correctness,
  hint, score, or remediation data.
- Primary and transfer acknowledgement may clear/reconstruct the released
  session at the next form boundary; the native relation remains presented and
  receives deterministic focus.
- Write-free return changes no evidence, registry, source identity, world,
  route, or lesson. It selects `returned` copy and current state only.
- Reload/resume persists only the existing sanitizer output. It clears session
  response, prose, result, ownership checkbox, focus/pointer/timing, source
  review, and presentation-transition state. USE reconstructs the first
  incomplete released phase.
- Invalid Objective evidence sanitizes to null/downgraded evidence and cannot
  unlock Planner. Invalid Planner evidence sanitizes to null/downgraded
  evidence and cannot unlock Capstone. Confidence, averages, scene state,
  presentation, timing, and source lawfulness never satisfy mastery.
- Invalid source/registry/provenance/schema/copy/geometry/layout/decode or an
  invalid persisted host/source identity removes the native candidate before
  render and restores the released generic path atomically. No source identity
  or host presentation flag is added to the save.
- If source validity is lost while a lesson Terminal is open, the current
  lesson session may close safely through the shared modal; after close, focus
  resolves to the correct generic launcher. The lesson is never aborted and
  no invalid native node is targeted.

## Responsive and accessibility layouts

The meaning and DOM order are identical at every required layout.

| Layout | World/action contract | Command/Terminal contract |
| --- | --- | --- |
| wide `1920x1080` | centered 16:9 cover; relation and all essential centers retained; target/label contained; no outer scroll required to act | existing scene above command panel; modal inset and internal scroll owner only |
| laptop `1366x768` | same centered cover and thresholds; no top status/label/protected overlap; no outer scroll required to act | labels wrap inside anchor; Terminal remains one named modal |
| narrow `390x844` | scene then command panel in natural document order; centered source-derived crop overrides the generic ruins `70% top` rule for this art; target stays `>=44px`; no horizontal escape | command actions stack/wrap without reordering; Terminal owns internal vertical scroll |
| effective `200%` `768x900` | same physical relation and non-sensory description; natural vertical flow permitted; no content loss | one-column form fields where existing CSS requires; title, Close, current form, result, and practice action remain reachable |
| retained `320x180` | world projection retains relation/essential centers and target; label may wrap but remains inside measured anchor; `scrollWidth == clientWidth` | no hidden native action; command panel may follow below the frame without horizontal escape |
| retained `320x240` | same as `320x180`; forced-color representative must retain border/state/focus | modal and command controls keep their existing small-layout source order; native hotspot remains `>=44px` even where unrelated legacy controls are smaller |

All native text uses wrapping and `overflow-wrap:anywhere`; no label uses a
fixed `max-content` width that can escape the measured anchor. Desktop/laptop
have no outer vertical scroll before the action. Narrow/effective-200% may
scroll naturally but cannot hide the hotspot behind the command panel or modal.
`scrollWidth == clientWidth` at all six layouts.

Forced colors renders the native button, state border, visible label, and
focus outline using Canvas/CanvasText/Highlight with `forced-color-adjust:auto`.
The image may disappear without removing the sr-only physical description,
button name, current state word, or action. States use text plus border style:
solid `available`, dashed `in_progress`, dotted `remediation_required`, double
`complete`; color is supplemental.

Reduced motion removes the presentation frame transition, animated filter,
scroll behavior, and timing dependency. The native/generic selector commits
directly, focus moves once after render, and every state/action/result remains
identical. No sound, motion, texture, palette, direction, or memory is required
to understand or operate the relationship.

## Placeholder and downstream owner ledger

| Placeholder/decision | Exact owner | Required fill | Tactical lock |
| --- | --- | --- | --- |
| null-first registry, lawfulness, state derivation, responsive derivation, hotspot/label projection | Combat | `waterlineLedger.js` with shell schema and tests | no weaker predicate, attestation, or source-enabled shortcut |
| App import, decoded-image lifecycle, atomic native selector, art/hotspot render, USE routing, focus refs, generic guards | Combat | bounded `App.jsx` integration | only two generic launchers replaced; later boundary unchanged |
| functional selectors and layout/state CSS | Combat | minimal `styles.css` rules needed for semantics, containment, focus, non-color states | no atmosphere or source-byte work |
| focused functional and responsive tests | Combat | exact new test files named by shell | acceptance matrix below is minimum, not optional prose |
| journey proof and exact served-count literals | Combat | shell-permitted E2E and two count-literal edits only | no hidden shortcut or unrelated fixture change |
| source/provenance/geometry/layout/copy/alt fields | Quartermaster | first privately reviewed exact PASS only | fills existing null slots; may not redesign graph/copy meaning |
| selected raster and provenance file | Quartermaster | exact byte import and provenance after PASS | no edit, crop, re-encode, derivative, reveal, or second asset |
| filter, lighting treatment, hierarchy, spacing, focus visibility, responsive containment | Image Specialist | code/config only after accepted source | no behavior/copy/media-byte change |
| exact-candidate holdout and maturity decision | Intelligence | independent source, graph, E2E, accessibility, cleanup, sync proof | may release or return; may not tune candidate |

No new copy slot is invented. The registry exposes exactly shell-frozen
`name`, `unseen`, `available`, `look`, `talk`, `objective_in_progress`,
`remediation_in_progress`, `mastered`, `returned`, `next_boundary`, and `alt`.
Quartermaster may correct fidelity to those facts only through a versioned
variance; Combat uses placeholders verbatim.

## Combat acceptance matrix

| ID | Gate | Required proof |
| --- | --- | --- |
| `PX14-01` | permitted diff | only shell-listed Combat product/test/E2E/count files plus Combat report/state; protected and dirty user paths untouched |
| `PX14-02` | null-first | deep-frozen disabled registry contains null/empty values exactly; import alone creates no native path |
| `PX14-03` | source identity | wrong path, attempt, bytes, SHA, format, color, dimensions, provenance, schema, copy, or decode fails closed |
| `PX14-04` | physical groups | relation, dry approach, three distinct histories, irregular crossing, waterline, >=3 distinct seams, target, center, label, and every protected region required |
| `PX14-05` | anti-gaming | removed/displaced/aliased history, duplicated seam, regularized band, kiosk substitution, source shift/crop, and protected overlap each fail independently |
| `PX14-06` | atomic selector | before decode generic count is correct; after lawful presentation native count `1`, affected generic count `0`; on any failure native `0`, correct generic count `1`; never both or neither |
| `PX14-07` | predecessor | native cannot appear until exact predecessor state is complete; no earlier source/evidence substitutes |
| `PX14-08` | state vector | absent, primary, remediation, primary complete, transfer, transfer remediation, transfer complete, explanation, strict mastery, and returned presentations map exactly |
| `PX14-09` | ordered USE | USE opens only first incomplete Objective phase, then only after strict Objective mastery first incomplete Planner phase, then read-only complete |
| `PX14-10` | LOOK/TALK/read-only | LOOK/TALK/complete USE write zero evidence/save/world state and use frozen ownership/copy |
| `PX14-11` | one-hit modalities | pointer, touch, Enter, Space, switch-like click each dispatch once; held repeat, double source event, terminal-open activation dispatch zero additional actions |
| `PX14-12` | semantics | one native button, stable verb+name, described physical/state text, textual state word, no div-button or duplicate tab stop |
| `PX14-13` | modal | title-first focus, inert background, Tab trap, visible Close, Escape, one restoration, no pointer leakage |
| `PX14-14` | focus table | every entry/miss/ack/mastery/close/Escape/reload/resume/return/invalidity event above lands on exact connected lawful target |
| `PX14-15` | announcements | one bounded transition/action announcement; no answer, objective row, score, arrival replay, or completion theater |
| `PX14-16` | session recovery | close/reopen preserves exact in-memory form/index/draft/result; reload clears private/transient state and reconstructs first incomplete phase |
| `PX14-17` | malformed recovery | forged/stale/partial/private evidence cannot create mastery; invalid native identity atomically restores generic path and safe focus |
| `PX14-18` | six layouts | all six exact viewports pass retention, centers, target, anchor, insets, focus, overlap, containment, and no horizontal overflow |
| `PX14-19` | sensitivity | at least one source crop/shift mutation trips a declared hard layout threshold; caller-authored rectangles cannot override it |
| `PX14-20` | forced color | label, state text/border, target, focus, and non-image meaning remain; no color-only history/state |
| `PX14-21` | reduced motion | direct transition with identical graph/focus/meaning; no forced wait, animation, or sound dependency |
| `PX14-22` | lesson integrity | Objective remains 15+15+four-part strict; Planner remains 6x2+6x2+four-part, official-route, fresh-transfer, stop/escalate exact |
| `PX14-23` | save/privacy | only released sanitized evidence persists; source/presentation/focus/pointer/timing/drafts/prompts/review never persist |
| `PX14-24` | Tour/offline | Tour earns zero credit; runtime performs zero external/service/model/Azure/media request and makes no exam/authority claim |
| `PX14-25` | regression radius | predecessor arrival/mastery/focus, generic rollback, unchanged next boundary, returns, Demo Tour, both endings, RP-012, and `successor=null` pass |
| `PX14-26` | E2E ownership | every Objective/Planner initial, transfer, remediation, close/reopen, reload/resume, return, and completion entry uses native USE when lawful; no hidden/generic shortcut |
| `PX14-27` | presentation boundary | accepted media remains `24 / 154,163,567`, source remains disabled/null, and no raster/media byte is added in Combat |
| `PX14-28` | exact candidate | focused, related, cold full, 40 validators, builds, PBA/served/browser/E2E/cleanup are reserved and routed exactly by shell; Combat does not claim Intelligence release |

Combat runs shell rungs `1, 3, 4, 5, 6, 7` proportionately for the null-first
functional candidate, with rung 2 limited to frozen identity/dry-run facts and
no real call. Source-dependent physical/browser PASS remains Quartermaster,
Image, and Intelligence owned. A test that only searches source strings cannot
replace behavioral and mutation checks.

## Regression radius, variances, and hard stop

The permitted regression radius is the exact predecessor-complete boundary;
both generic Objective/Planner rollback launchers; Objective/Planner state,
focus, sanitation, save, and resume; the current later generic Capstone entry;
shared Drowned native selection and art precedence; scene live status;
`TerminalShell`; responsive cover projection; Demo Tour; offline/privacy; both
Measured Horizon outcomes; RP-012; and `successor=null`. It authorizes no
behavior or content change in those protected systems beyond the atomic local
replacement and proof hooks above.

No variance is requested. Return canon/voice conflict to Colonel; order/scope
to Operations; source/system/learning/privacy/save/accessibility/performance or
verifier infeasibility through Mission to Science; shell ambiguity to Mission;
emotional conflict to Recon; any remaining flow/focus/reflow/recovery ambiguity
to Tactical. Combat owns code/state/build defects only.

Tactical hard stop is this complete implementation-exact blueprint and compact
state checkpoint. Tactical does not implement, spend a call, inspect pixels,
select/import/reveal media, edit runtime, alter copy/lesson meaning, advance
maturity, or begin Combat. Combat hard-stops its stage after the null-first
functional candidate, declared deterministic gates, dedicated commit, required
push/synchronization, and exact Quartermaster handoff. A source-dependent pass
cannot be fabricated while the registry is intentionally null.

## Convergence handoff to Combat

```yaml
convergence_handoff:
  mode: OPERATE
  state_version_read: FRLS-REC-001-v1
  state_version_written: FRLS-TAC-001-v1
  current_ref: FRPX-014-v1_player_experience_state
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  binding_gap_or_hypothesis: >-
    One null-first module and one atomic native-active selector can make the
    shell exact without changing the released lessons, route, save, world, or
    generic rollback, while source-dependent truth remains disabled.
  action_kind: information
  predicted_effect: >-
    Combat can implement and deterministically prove the complete null-first
    interaction/focus/recovery graph without inventing player meaning or
    touching media.
  verifier_vector:
    shell_treatment_compatibility: PASS
    current_and_target_graph: PASS_EXACT
    atomic_native_generic_replacement: PASS_BLUEPRINT
    every_action_state_unavailable_path: PASS_BLUEPRINT
    focus_announcement_recovery: PASS_BLUEPRINT
    six_layout_accessibility: PASS_BLUEPRINT_CANDIDATE_UNKNOWN
    crop_hotspot_registration: PASS_BLUEPRINT_SOURCE_UNKNOWN
    acceptance_and_regression_radius: PASS_EXACT
    media_or_product_action: NONE
    candidate_and_release_proof: NOT_STARTED
  delta_vs_best:
    product: ZERO
    maturity: ZERO
    media: ZERO
    generation_calls: ZERO
    information: POSITIVE / implementation ambiguity closed
  budget_used:
    generation_calls: 0
    product_effect_actions: 0
    media_actions: 0
    browser_or_e2e: 0
    planning_effect_actions: 2_control_artifacts
  budget_remaining:
    generation_calls: 32_hard_pool
    available_initial_tranche: 8
    final_verification_reserve: PROTECTED
    role_order: STRICT_SEQUENTIAL
  remaining_uncertainty:
    - future source bytes, transport, physical review, and source measurements
    - source-derived integrated browser and presentation proof
    - human assistive-technology usability study
    - exact product candidate and independent Intelligence release
  decision: GATHER_EVIDENCE
  decision_evidence:
    - every shell state and recovery path maps to released primitives
    - the atomic native-active selector preserves a functional generic fallback
    - deterministic behavioral and adversarial tests can fail independently
    - Combat is the next least-powerful sufficient effect owner
  next_owner: combat_engineer
```

Tactical signature: **`PLAYER EXPERIENCE READY / FRPX-014-v1 / COMBAT NEXT`**.

Exact Combat task: read this blueprint, `FRSH-014-v1`, `FRCT-014-v1`,
`FRWO-014-v1`, `FRVE-014-v1`, `FRLS-TAC-001-v1`, the current predecessor,
Objective Ledger, Remediation Planner, responsive projection, Terminal focus,
save/resume, App/style, and affected tests/E2E. Implement the exact null-first
module and atomic native/generic graph only in shell-permitted Combat files;
keep source disabled/null; run the declared cheap-to-full deterministic gates;
issue one versioned `PRODUCTION FUNCTIONAL`, `REVISE`, or `HOLD`; make one
dedicated Combat commit, push, and prove synchronization before Quartermaster.
Do not spend a call, inspect/select/import/reveal media, fill accepted source or
provenance fields, change copy/lesson/route/save/ending meaning, perform Image
presentation, advance maturity, or begin Quartermaster.
