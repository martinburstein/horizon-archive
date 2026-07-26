# TD-004 Experience Blueprint

## Document control

| Field | Value |
|---|---|
| Stage | Tactical Operations Specialist |
| Agent ID | `tactical_operations_specialist` |
| Shell | `SS-RP004-THREE-CURRENT-v1` |
| Slice | `TD-004-RP004-THREE-CURRENT-v1` |
| Campaign address | `RP-004 / SC-05 / TR-00-TR-40` |
| Starting authority | Reconnaissance Sergeant `CREATIVE LOCK`, commit `126e89dad07f7350b37f3d794cecd08f1d5342ba` |
| Experience contract | `EB-TD004-v1` |
| Validation tier | Tier 1 blueprint trace and design-level modality/accessibility/recovery walkthrough |
| Disposition | **`EXPERIENCE READY`** |
| Next recipient | Combat Engineer / `combat_engineer` |

This blueprint translates the shell and creative lock into an
implementation-ready experience graph. It does not authorize new canon,
learning truth, route, persistence meaning, world behavior, final copy, art,
or code. Copy below is a bounded public-purpose contract; the Quartermaster
owns final prose inside the same meaning.

## Authorities and compatibility

The complete shell and creative treatment agree on all material boundaries:

- exact sanitized TD-003 no-replay `CM-50 VERIFIED RESTORE` is the sole entry;
- `TD004-RTA-001` is one fresh Pilot choice beside two unchanged returns;
- the sequence is `TR-00 -> TR-10 -> TR-20 -> TR-30 -> TR-40`;
- the three physical observations are equal, any-order, zero-credit peers;
- the apparent common return is a separate observation with
  `observed=true`, `purpose=None`, and no route;
- Python and AI-901 are independent, strict, blank-form learning chains;
- the bounded review is conjunctive rather than scored;
- save is one local atomic replacement with strict read-back and rollback;
- restored completion replays nothing and opens only the two known returns;
- SC-05 remains invariant; and
- the hard stop excludes RP-005, RP-013, successors, hidden lore, authority,
  external action, live service, purpose inference, and world response.

No emotional-treatment contradiction, shell ambiguity, or system
impossibility was found. **Variance requests: none.**

## Reusable experience grammar

The Combat Engineer should reuse the accepted TD-003 patterns rather than
invent a second interaction language:

- `CanonicalGameFrame` for canonical/narrow layout selection;
- the `CalibrationMarginReviewSave` heading-first `useLayoutEffect` focus
  pattern;
- one `role="status" aria-live="polite" aria-atomic="true"` region with a
  deterministic `data-message-id`;
- native buttons, fieldsets, labels, textareas/selects, persistent help, and
  field-associated errors;
- action refs keyed by stable action ID;
- one-hit semantic-intent validation before token consumption;
- direct group replacement and `preventScroll: true` focus;
- the extraction-floor two-column world/panel grammar at wide sizes and
  natural single-column reflow below it;
- `>=44 x 44 CSS px` targets, visible focus, forced-color system borders, and
  reduced-motion direct replacement; and
- closed named fixture factories, production-exclusion markers, and no
  arbitrary state injection.

RP-004 must receive its own controller, renderer family, persistence adapter,
fixture root, status namespace, and storage key. The protected
`ThreeCurrentReachProtectedJourney.js` remains reference evidence only and
must stay unimported from normal production.

## Stable semantic IDs

### Owners

Use exactly one visible owner prefix per active group:

- `PILOT // EXPEDITION NAVIGATION`
- `SCENE // THREE-CURRENT REACH`
- `PILOT // EXPEDITION OBSERVATION`
- `BUILDER WORK // SANITIZED REPLICA`
- `901 TEACHER // COURSE PRACTICE`
- `PILOT // BOUNDED REVIEW`
- `SYSTEM // LOCAL EXPEDITION NOTE`
- `SYSTEM // RESTORED EXPEDITION NOTE`

System status may report availability within a Scene or Pilot group, but it
does not become a second content/action owner and never states a world fact.

### Headings and focus targets

| Target ID | Purpose |
|---|---|
| `cm50-route-heading` | exact released predecessor heading |
| `tr00-orient-heading` | arrival/orientation heading |
| `tr10-relations-heading` | equal observation-group heading |
| `relation-suspended-action` | first semantic observation peer |
| `relation-cyclic-action` | second semantic observation peer |
| `relation-heat-action` | third semantic observation peer |
| `tr20-common-return-heading` | purpose-unknown observation heading |
| `common-return-action` | record apparent common return |
| `tr30-python-primary-heading` | Python primary heading |
| `tr30-python-primary-editor` | blank Python primary editor |
| `tr30-python-retrieval-heading` | delayed retrieval heading |
| `tr30-python-retrieval-first` | first retrieval field |
| `tr30-python-transfer-heading` | fresh transfer heading |
| `tr30-python-transfer-editor` | blank Python transfer editor |
| `tr30-ai-primary-heading` | AI-901 primary heading |
| `tr30-ai-primary-first` | first primary case/dimension field |
| `tr30-ai-retrieval-heading` | delayed retrieval heading |
| `tr30-ai-retrieval-first` | first retrieval case/dimension field |
| `tr30-ai-transfer-heading` | fresh transfer heading |
| `tr30-ai-transfer-first` | first transfer case/dimension field |
| `tr30-modality-heading` | modality explanation heading |
| `tr30-modality-field` | blank modality explanation control |
| `tr30-agentic-heading` | agentic explanation heading |
| `tr30-agentic-field` | blank agentic explanation control |
| `tr30-review-heading` | conjunctive review heading |
| `tr30-provenance-heading` | provenance/no-control boundary heading |
| `tr30-save-action` | fresh save action |
| `tr30-save-recovery-heading` | failed/rejected save recovery heading |
| `tr40-restore-heading` | verified-restore heading |
| `tr40-continuation-action` | optional destinationless notation action |
| `return-calibration-action` | return to exact CM-50 |
| `return-threshold-action` | return to City Threshold |

Every heading is an `h1` with `tabIndex="-1"`. Subsections use `h2`; an `h2`
never replaces the active group heading as the initial focus target.

### Status namespace

The sole live region ID is `three-current-status`. Each message has
`data-message-id="td004:<group>:<event>"`. Public reason strings are bounded
codes mapped to answer-free text. No learner input, correct answer, route
token, storage bytes, diagnostic, identity, or source content enters a status.

## Complete state graph

```text
exact CM-50
  |-- RETURN TO CIVIC COMPARISON -----------------> released RP-002 anchor
  |-- RETURN TO CITY THRESHOLD -------------------> released threshold anchor
  `-- TD004-RTA-001 [fresh valid intent] ----------> TR00_ORIENT

TR00_ORIENT
  |-- either safe return --------------------------> existing anchor
  `-- ORIENT --------------------------------------> TR10_RELATIONS

TR10_RELATIONS [0..3 Recorded, any of six orders]
  |-- either safe return --------------------------> existing anchor
  |-- fresh unrecorded peer -----------------------> TR10_RELATIONS
  `-- third accepted peer -------------------------> TR20_COMMON_RETURN

TR20_COMMON_RETURN
  |-- either safe return --------------------------> existing anchor
  |-- invalid inference ---------------------------> TR20_COMMON_RETURN blank
  `-- exact observed=true / purpose=None ----------> TR30_PY_PRIMARY

TR30_PY_PRIMARY
  |-- miss ----------------------------------------> TR30_PY_PRIMARY_REPAIR
  `-- 8/8 -----------------------------------------> TR30_PY_RETRIEVAL
TR30_PY_PRIMARY_REPAIR -- fresh blank retry -------> TR30_PY_PRIMARY
TR30_PY_RETRIEVAL
  |-- miss ----------------------------------------> TR30_PY_RETRIEVAL_REPAIR
  `-- 5/5 -----------------------------------------> TR30_PY_TRANSFER
TR30_PY_RETRIEVAL_REPAIR -- fresh blank retry -----> TR30_PY_RETRIEVAL
TR30_PY_TRANSFER
  |-- miss ----------------------------------------> TR30_PY_TRANSFER_REPAIR
  `-- 8/8 -----------------------------------------> TR30_AI_PRIMARY
TR30_PY_TRANSFER_REPAIR -- fresh blank retry ------> TR30_PY_TRANSFER

TR30_AI_PRIMARY
  |-- any failed case/dimension -------------------> TR30_AI_PRIMARY_REPAIR
  `-- 12/12 ---------------------------------------> TR30_AI_RETRIEVAL
TR30_AI_PRIMARY_REPAIR -- fresh blank retry --------> TR30_AI_PRIMARY
TR30_AI_RETRIEVAL
  |-- any failed case/dimension -------------------> TR30_AI_RETRIEVAL_REPAIR
  `-- 8/8 -----------------------------------------> TR30_AI_TRANSFER
TR30_AI_RETRIEVAL_REPAIR -- fresh blank retry ------> TR30_AI_RETRIEVAL
TR30_AI_TRANSFER
  |-- any failed case/dimension -------------------> TR30_AI_TRANSFER_REPAIR
  `-- 12/12 ---------------------------------------> TR30_MODALITY
TR30_AI_TRANSFER_REPAIR -- fresh blank retry -------> TR30_AI_TRANSFER
TR30_MODALITY
  |-- miss ----------------------------------------> TR30_MODALITY_REPAIR
  `-- exact dimension -----------------------------> TR30_AGENTIC
TR30_MODALITY_REPAIR -- fresh blank retry ----------> TR30_MODALITY
TR30_AGENTIC
  |-- miss ----------------------------------------> TR30_AGENTIC_REPAIR
  `-- exact dimension -----------------------------> TR30_REVIEW
TR30_AGENTIC_REPAIR -- fresh blank retry ----------->
  TR30_AGENTIC

TR30_REVIEW -- REVIEW PROVENANCE ------------------> TR30_REVIEW_PROVENANCE
TR30_REVIEW_PROVENANCE
  |-- invalid/stale save intent -------------------> TR30_SAVE_RECOVERY
  |-- rejected/write/read-back/equality failure ---> TR30_SAVE_RECOVERY
  `-- verified atomic replacement -----------------> TR40_RESTORE
TR30_SAVE_RECOVERY -- REVIEW PROVENANCE AGAIN ------> TR30_REVIEW_PROVENANCE

TR40_RESTORE
  |-- optional destinationless notation -----------> TR40_RESTORE_RECORDED
  |-- RETURN TO CALIBRATION MARGIN ----------------> exact no-replay CM-50
  `-- RETURN TO CITY THRESHOLD --------------------> released threshold anchor
TR40_RESTORE_RECORDED
  |-- RETURN TO CALIBRATION MARGIN ----------------> exact no-replay CM-50
  `-- RETURN TO CITY THRESHOLD --------------------> released threshold anchor
```

The optional continuation action does not create a destination, route,
successor, evidence record, world effect, or new checkpoint. If cut for
budget, omit it and its fixture without changing any required state.

## Group ownership and replacement

| Group | Visible owner | World treatment | Content/action owner | Replacement rule |
|---|---|---|---|---|
| `cm50_verified_restore` | `PILOT // EXPEDITION NAVIGATION` | accepted SC-04 | Pilot choices | retain three independent choices; no auto-route |
| `tr00_orient` | `SCENE // THREE-CURRENT REACH` | complete equal SC-05 panorama | Scene description; Pilot orient/returns | direct arrival; no response animation |
| `tr10_relations` | `PILOT // EXPEDITION OBSERVATION` | panorama or registered equal-peer crop | three peer observations/returns | accepted peer becomes textual `Recorded`; world unchanged |
| `tr20_common_return` | `PILOT // EXPEDITION OBSERVATION` | broad capped-return crop retaining all three relations | one boundary observation/returns | replace only after three peers recorded |
| `tr30_py_*` | `BUILDER WORK // SANITIZED REPLICA` | SC-05 context remains present but subordinate and noninteractive | Python form | one blank form at a time |
| `tr30_ai_*` | `901 TEACHER // COURSE PRACTICE` | world correspondence folds away from the course instrument | neutral course form | no SC-05-derived color, crop, icon, term, sound, or motion |
| `tr30_review*` | `PILOT // BOUNDED REVIEW` | invariant world context | three separate responsibility groups plus provenance | never collapse to a score or readiness verdict |
| `tr30_transaction/recovery` | `SYSTEM // LOCAL EXPEDITION NOTE` | invariant, no save response | local transaction status/recovery | transaction has no dispatchable action |
| `tr40_restore*` | `SYSTEM // RESTORED EXPEDITION NOTE` | invariant full-world context | read-only note and Pilot returns | no replay; optional notation is local only |

Exactly one group exists in the DOM as the active content/action group.
Outgoing learner forms are cleared before replacement. The world region may
persist visually but is never an active answer or control region.

## Action and eligibility matrix

All dispatchable actions are native `button` controls except learner fields.
Each dispatch receives one semantic intent:
`mode`, `shellVersion`, `controllerVersion`, `packetId`, `activeGroupId`,
`expectedOwner`, `allowlistedActionId`, `activationKind`, and one opaque fresh
event token. Validate the complete intent and relevant source state before
consuming the token.

| Group | Action | Eligibility | Accepted result | Rejected/disabled behavior |
|---|---|---|---|---|
| CM-50 | `PILOT // FOLLOW EXPEDITION-MARKED SURVEY TO THREE-CURRENT REACH` | exact normal sanitized TD-003, no-replay CM-50, private/transient clear, fresh token | one transient TR-00 arrival; no write/evidence | unavailable action absent if predicate fails; stale/forged intent does not consume token |
| CM-50 | two released returns | existing released predicates | existing write-free return | unchanged TD-003 behavior |
| TR-00 | `ORIENT TO THREE CURRENT RELATIONS` | active TR-00, fresh token | TR-10, zero evidence | reject in place |
| TR-00/TR-10/TR-20 | two safe returns | active group, fresh token | clear unsaved RP-004 transients and return to chosen anchor | never save, replay, or cross-dispatch |
| TR-10 | each relation observation | exact unrecorded ID, active group, fresh token | mark only that peer `Recorded`; zero learning evidence | recorded peer remains present, native disabled, labelled `Recorded - no second event` |
| TR-20 | `RECORD APPARENT COMMON RETURN` | all three peers recorded; exact `observed=true`, `purpose=null` | open Python primary, zero learning evidence | purpose/destination/category inference clears transient selection, associates answer-free error, focuses action |
| Python groups | `SUBMIT PYTHON PRIMARY`, `SUBMIT PYTHON RETRIEVAL`, `SUBMIT PYTHON TRANSFER` | current genuinely blank form has a response, fresh token | exact evaluator decides named boundary only | empty submission gets required-field error; miss exposes failed check IDs only and clears all private source |
| Python repair | `RETURN TO FRESH BLANK RETRY` | remediation state | new blank form; focus editor/first field | no answer, old response, selection, or feedback carried |
| AI-901 groups | `SUBMIT WORKLOAD PRIMARY`, `SUBMIT WORKLOAD RETRIEVAL`, `SUBMIT WORKLOAD TRANSFER` | every visible case/dimension answered, fresh token | exact evaluator decides named form only | incomplete focuses first blank; miss exposes failed case/dimension IDs only and clears all responses |
| AI repair | `RETURN TO FRESH BLANK RETRY` | remediation state | entire responsible form blank; focus first field | no correct answer or completed peer dimension retained |
| Explanation groups | `SUBMIT MODALITY BOUNDARY`, `SUBMIT AGENTIC BOUNDARY` | one explicit blank-start bounded choice/explanation response, fresh token | exact separate dimension only | answer-free miss, clear response, fresh blank retry |
| Review | `REVIEW PROVENANCE` | exact conjunctive gate passes | exposes sanitized-replica/no-control/no-external-action boundary; zero evidence | if gate fails, route to first incomplete group |
| Provenance | `SAVE EXPEDITION NOTE` | fresh intent after current provenance inspection; exact gate still passes | atomic candidate -> strict read-back -> TR-40 | stale/invalid request consumes no save; returns to provenance-pending recovery |
| Save recovery | `REVIEW PROVENANCE AGAIN` | recovery state | fresh provenance view; prior bytes unchanged | no automatic retry |
| TR-40 | `RECORD OUTBOUND PHYSICAL CONTINUATION` | optional scope retained, not already recorded, fresh token | `destination=null`, `routeOpened=false`, `successor=null`; same checkpoint | action then removed; status says no route was opened |
| TR-40 | two approved returns | exact restored record, fresh token | write-free existing-anchor return | no Civic Comparison shortcut |

Observation peers are rendered in the canonical order
`suspended_matter_porous_relation`,
`cyclic_pressure_tensioned_relation`,
`conducted_heat_jointed_relation`. Completion order never changes DOM order,
visual weight, label weight, or canonical save order.

## State, focus, and announcement matrix

| State/event | Initial or success focus | Polite atomic status purpose |
|---|---|---|
| CM-50 exact restore | `cm50-route-heading` | exact local predecessor verified; three independent choices available |
| route accepted | `tr00-orient-heading` | expedition arrival is local navigation; no world response or record write |
| TR-00 orient accepted | `tr10-relations-heading` | three equal observations available; zero learning credit |
| relation accepted | first unrecorded relation action in canonical order; after third, `tr20-common-return-heading` | complete relation label plus `Recorded`; no purpose or credit |
| recorded relation reactivation attempt | recorded control if programmatically attempted | already recorded; no second event or credit |
| common-return invalid inference | `common-return-action` | available evidence supports observation only; purpose remains unknown |
| common-return accepted | `tr30-python-primary-heading` | observation retained; no route opened and no learning credit |
| scored-form entry | group heading, then normal Tab order to first blank field | form identity, sanitized/course-owned provenance, no live control |
| empty scored submit | first blank/invalid field | name required field/case/dimension only |
| scored miss | repair heading; repair action follows | name failed check/case/dimension IDs only; response cleared; no answer |
| repair accepted | editor or first field | fresh blank retry ready |
| scored form passed | next required group heading | only named form finalized; no cross-credit/world effect |
| review entry | `tr30-review-heading` | obligations are independently complete; not a score or verdict |
| provenance inspected | `tr30-provenance-heading` | sanitized replicas only; no live read/control/external action |
| save transaction begins | `tr30-save-recovery-heading` only on failure; no focus move during synchronous transaction | checking one local note; no upload or city action |
| save failure/rejection | `tr30-save-recovery-heading` | last verified bytes or verified absence preserved; private work cleared |
| save strict-read success | `tr40-restore-heading` | exact local note restored; no event replayed |
| continuation notation | `tr40-restore-heading` | physical continuation recorded with no destination or route |
| return | destination anchor heading | known anchor restored; no write, replay, evidence, or world response |
| malformed reload before verified save | exact CM-50 heading | unsaved RP-004 state cleared; fresh route choice required |
| malformed RP-004 saved record | exact CM-50 heading | local RP-004 record was not accepted; no predecessor mutation |

Live announcements never read all form contents, all review rows, or repeated
decorative world descriptions. Disabled-state reasons are persistent visible
text and `aria-describedby`, not live chatter.

## Learning form presentation

### Python

- The independent learning identity is exactly `PY-011 - Write loops`,
  reinforcement only. Its evidence cannot satisfy any observation or AI-901
  boundary.
- Primary and transfer use a labelled native multiline editor with supplied
  immutable sanitized inputs and bounded lookup data rendered as separate
  read-only code.
- The learner-owned editor begins genuinely empty; supplied text is not
  inserted into it and is not serialized as learner work.
- Retrieval presents the five frozen dimensions as labelled native fields
  using course-owned option banks. No selected value is prefilled.
- Error text uses the evaluator's failed check IDs translated to
  answer-free public descriptions. It must not show expected source or value.
- A miss clears the whole learner-owned form before the repair state mounts.
- Execution/result display is local, sanitized, and non-authoritative. It
  cannot resemble transmission into SC-05.

### AI-901

- The independent learning identity is exactly
  `RP004-WORKLOAD-01 / AI901-D1-O4 - Identify AI workloads`. Its evidence
  cannot satisfy Python or physical observation.
- Primary and transfer contain six neutral course cases with two separately
  labelled dimensions per case; retrieval contains four cases with the same
  two dimensions.
- Use fieldsets with persistent case prompt, dimension legend, and native
  selections. The persistent six-family workload key is course-owned and
  identical across forms.
- Source order is case order from the frozen contract, then its two
  dimensions. Visual columns may change; semantic order may not.
- No world crop, relation name, carrier material, corridor term, color,
  sound, motion, Builder symbol, or SC-05 wording may appear.
- A miss reports only failed case/dimension identifiers, clears the entire
  responsible form, and routes through a repair state to a genuinely blank
  retry.
- Modality and agentic explanations are separate groups and separately scored.
  Neither can be inferred from the other or from a workload-family selection.

Confidence is optional and zero-credit. If retained, it defaults to no
selection, is cleared with private/transient work, and never affects
eligibility, evidence, focus, feedback, status, or persistence except the
allowlisted `confidence` value in a finalized evidence record.

## Review, save, restore, and recovery

### Conjunctive review

Render three non-ranked sections:

1. **Physical observation** - three relations plus apparent-common-return /
   purpose-unknown;
2. **Python** - primary, retrieval, and transfer finalized independently; and
3. **AI-901** - primary, retrieval, transfer, modality explanation, and
   agentic explanation finalized independently.

A fourth provenance/authority note states sanitized replicas only, no live
read/control, no external action, and no world response. Do not show a point
total, percentage, progress ring, rank, badge, readiness, pass banner, or
expedition-wide correctness verdict.

### Atomic save

The UI dispatches one fresh save intent only after provenance inspection.
During the single synchronous transaction, controls are removed rather than
left deceptively active. The adapter captures the last verified RP-004 bytes
or verified absence, strictly sanitizes the complete ten-key candidate,
replaces only `horizon-archive-rp004-three-current-save-v1`, reads through the
same strict sanitizer, and compares canonical sanitized equality.

The following all fail to `TR30_SAVE_RECOVERY` with prior RP-004 bytes intact
or verified absence preserved: invalid candidate, private/extra field,
malformed prior/read-back, unavailable/quota storage, throw, partial write,
read-back mismatch, stale/duplicate token, Tour input, and changed review
gate. TD-003 serialized bytes are independently byte-identical throughout.

### Clearing and resume

- Clear route/event tokens, learner source, case selections, explanations,
  feedback, reasoning, confidence, pointer/focus history, and diagnostics on
  rejection, miss, retry, save failure, successful replacement/read-back,
  return, reload sanitation, invalid recovery, and completion.
- Before a verified RP-004 save, reload returns to exact CM-50 and requires a
  fresh `TD004-RTA-001`.
- Allowlisted separately persisted learning evidence may restore only after
  fresh entry and only as one contiguous finalized prefix.
- Scene and common-return observations are transient until the final save and
  must be deliberately re-observed after reload.
- After those observations, a valid contiguous learning prefix skips only
  finalized scored groups and focuses the first incomplete blank group.
- A gap truncates that boundary and everything after it; no form is
  prepopulated, recomputed, downgraded, duplicated, or cross-credited.
- Exact strict RP-004 restore mounts `TR40_RESTORE` directly, focuses its
  heading, sets `replayedEvents=[]`, and never replays route, arrival,
  observation, learning, review, save, sound, city, or world events.

An approved return from any unsaved RP-004 phase clears unsaved RP-004
transient work. The exact `RETURN TO CALIBRATION MARGIN` and
`RETURN TO CITY THRESHOLD` controls remain available in the current action
group under a visibly separate `PILOT // SAFE RETURN` label. They are not
wrapped in a newly named cancel, confirmation, or menu action. This preserves
one active group while keeping navigation ownership distinct from Scene,
Builder-work, course, and System content. Choosing either exact return is one
fresh intent; merely focusing it changes nothing.

## Input-modality contract

- Pointer and touch activate the native control click path.
- Enter and Space use native button semantics; custom key handlers must not
  double-dispatch.
- Switch, speech, and screen-reader activation use the same accessible name
  and semantic click path.
- The event adapter maps each accepted activation to one allowlisted
  `activationKind`; it never infers learning correctness from modality.
- One accepted event creates one opaque token. Validation completes before
  insertion into the consumed-token set.
- Duplicate click/key/click synthesis, stale token, wrong owner/group/action,
  and combined actions fail closed without state advance.
- No drag, hover, long press, timed response, gesture, color hit, spatial hit,
  or audio response is required.
- Switch-like sequential traversal follows DOM order. Speech names remain
  unique without relying on owner prefixes alone.
- World imagery and decorative crops are never focusable. Any registered
  semantic region is descriptive `figure`/`figcaption`, not a hotspot that
  dispatches evidence.

## Responsive layout contract

### Source order at every size

1. active `h1` and owner;
2. concise instruction/authority boundary;
3. world figure when the group uses it;
4. sole status region;
5. current content/form;
6. field errors/help;
7. current actions;
8. negative-authority/local-only note; and
9. approved return/cancel controls when present.

CSS may place the world before the panel in a wide grid, but DOM order must
keep the active heading first. Use `aria-labelledby` on the world figure and
do not reorder learning cases or relation peers with CSS.

### Exact layouts

| Gate | Contract |
|---|---|
| `1920 x 1080`, DPR 1 | two columns: world `minmax(0,3fr)`, panel `minmax(430px,2fr)`; complete outer shell, dominant world, active heading, status, current fields, errors/help, and every required action fit with no outer horizontal/vertical scroll and no inner panel hiding a required action |
| `1366 x 768`, DPR 1 | two columns when the active form fits; otherwise one world band above one panel; shell remains contained, required action remains visible/sticky only within normal flow, and any content scrolling is explicit, keyboard reachable, and never traps focus |
| `390 x 844`, DPR 1 | natural single-column document; active heading and instruction precede art; art uses a registered equality-preserving crop; actions are one column; vertical page scroll allowed; no nested horizontal/vertical scroll for the active form |
| `768 x 900`, DPR 1 effective 200% gate | natural single-column semantic reflow equivalent to text zoom; no clipped owner, status, error, label, world equivalent, or required action; vertical page scroll allowed; no page-level horizontal escape |

At widths below `1280px`, AI case grids become one column. At widths below
`768px`, all action grids become one column. Long IDs and bounded public
messages use `overflow-wrap:anywhere`. No fixed pixel height may clip expanded
text. The world may reduce in height on learning groups but may not disappear
from TR-00, TR-10, TR-20, review, save recovery, or TR-40.

### World/crop/semantic-region plan

One SC-05 runtime master is preferred. Register the following CSS
`object-position` crops, all from the same invariant source:

| Crop ID | Used by | Required visible relationship |
|---|---|---|
| `sc05-whole-equal` | TR-00, TR-10 default, review, TR-40 | all three equal carriers, low capped return, greater whole |
| `sc05-suspended-context` | suspended relation active/focus | porous handling plus portions of both peers and greater whole |
| `sc05-cyclic-context` | cyclic relation active/focus | tensioned handling plus portions of both peers and greater whole |
| `sc05-heat-context` | heat relation active/focus | jointed handling plus portions of both peers and greater whole |
| `sc05-common-return-context` | TR-20 | all three traceable into a broad capped non-aperture return |
| `sc05-coupling-context` | Python only if retained | subordinate non-terminal coupling and surrounding world; never AI-901 |

Each world figure has one factual, answer-free text equivalent naming only
visible physical relation and invariance. Do not use image maps or controls
over the world. Crop selection changes attention, not evidence, availability,
correctness, or saved state. Narrow fallback text must preserve all three
relations even if the crop cannot.

## Forced colors, reduced motion, and silence

### Forced colors

- Set `forced-color-adjust:auto` on panel, status, fieldsets, controls, error
  bars, Recorded markers, return group, and world-text-equivalent boundary.
- Use `Canvas`, `CanvasText`, `ButtonFace`, `ButtonText`, `GrayText`,
  `Highlight`, and `HighlightText`.
- Ownership/group boundaries retain solid borders; Recorded uses visible text
  plus a double border; unavailable/disabled uses native disabled state plus
  reason text; error uses an adjacent text label plus Highlight border.
- Focus is at least a `3px solid Highlight` outline with offset.
- World-image loss in forced colors is acceptable only because the complete
  non-color text equivalent remains visible. No relation is identified by
  hue.

### Reduced motion

- Disable panorama drift, particles, tension displacement, heat refraction,
  condensation, maintenance movement, smooth scrolling, fades, transforms,
  pulses, and animated group transitions.
- Use the same registered still/crop and direct DOM replacement.
- Focus, status, state, action availability, relation identity, common-return
  boundary, and error/recovery remain identical.
- No animation is tied to a controller transition, evaluator result, save,
  restore, or completion.

### Silence

Every state, error, success, relation, and action is complete in text and
semantics. Audio, if later supplied, is ambient and independently timed only.
No chime, alarm, voice, route sting, save seal, synchronization, or world
response is required or permitted.

## Closed fixture plan

Create `review-fixtures/td004-three-current/launch-manifest.json` with exact
fixture ID `td004-three-current-v1`, a fixture-owned loopback port, root marker
`TD004_THREE_CURRENT_FIXTURE`, and only the following named scenarios:

1. `cm50-three-choice-route-ready`
2. `cm50-route-rejected-stale-token`
3. `tr00-arrive-orient`
4. `tr00-early-return-calibration`
5. `tr00-early-return-threshold`
6. `tr10-relations-none-recorded`
7. `tr10-relations-one-recorded`
8. `tr10-relations-two-recorded`
9. `tr10-relations-all-recorded`
10. `tr10-six-orders-converge`
11. `tr20-common-return-purpose-unknown`
12. `tr20-purpose-inference-rejected`
13. `tr30-python-primary-blank`
14. `tr30-python-primary-answer-free-repair`
15. `tr30-python-retrieval-blank`
16. `tr30-python-transfer-blank`
17. `tr30-ai901-primary-neutral`
18. `tr30-ai901-primary-answer-free-repair`
19. `tr30-ai901-retrieval-neutral`
20. `tr30-ai901-transfer-neutral`
21. `tr30-modality-explanation-blank`
22. `tr30-agentic-explanation-blank`
23. `tr30-conjunctive-review`
24. `tr30-provenance-inspected`
25. `tr30-save-transaction`
26. `tr30-save-failed-last-good`
27. `tr30-save-malformed-readback`
28. `tr40-verified-restore`
29. `tr40-destinationless-continuation-recorded`
30. `tr40-return-calibration`
31. `tr40-return-threshold`
32. `resume-contiguous-prefix`
33. `resume-gap-first-incomplete`
34. `tour-route-closed`

Scenario factories construct frozen in-memory controller inputs; they do not
read or write `localStorage`, `sessionStorage`, IndexedDB, cookies, Martin's
campaign save, or any network resource. The launcher accepts only an exact
manifest name, rejects query/body/arbitrary JSON state, and exposes no
production import. Viewport, forced-color, reduced-motion, and modality tests
wrap these same named states; they are not extra state-injection scenarios.

Production bundles must not contain the root marker, fixture ID/path, fixture
port, scenario names, factory imports, or source map. Fixture storage uses an
in-memory adapter with explicit success/failure/read-back modes fixed by the
scenario factory.

## Implementation acceptance tests

### Route and graph

- exact sanitized no-replay CM-50 is the only normal entry;
- three CM-50 choices remain independent and one-hit;
- all six relation orders converge to one canonical state and save order;
- replay of Recorded peers is idempotent and zero-credit;
- common return cannot appear before all peers and never opens a route;
- every active state has exactly one owner, `h1`, status region, content
  group, action group, and deterministic focus intent;
- returns target only exact CM-50 or City Threshold from RP-004; and
- no RP-004 Civic Comparison shortcut or later route exists.

### Learning and privacy

- every scored form is genuinely blank visibly, semantically,
  programmatically, and serially on first entry and retry;
- Python primary/transfer require exact `8/8`; retrieval requires exact five
  dimensions;
- AI primary/transfer require exact `12/12`; retrieval exact `8/8`; both
  explanations are separate;
- misses disclose only failed public IDs, clear the responsible form, and
  never include an answer;
- scenery/navigation/focus/status/accessibility/timing/hints/Tour/save display
  grant zero evidence;
- Python, AI-901, observations, and common-return observation cannot
  cross-credit;
- AI-901 interface has only neutral course cases and no SC-05 answer channel;
- private/source/answer/reasoning/token/focus/diagnostic fields never reach
  durable data, fixture output, status, logs, or returned state; and
- Tour cannot read/write adapters, finalize evidence, or open the route.

### Save, restore, and returns

- exact ten-key object, canonical four-key note, and eight ordered ten-key
  evidence records are required;
- one atomic replacement uses only the dedicated RP-004 key;
- strict read-back and canonical equality are required;
- every failure preserves prior verified RP-004 bytes or verified absence;
- every RP-004 operation preserves exact TD-003 bytes;
- pre-save reload returns to CM-50; valid contiguous learning prefix resumes
  only after fresh entry and re-observation;
- malformed/gapped state focuses the first incomplete blank boundary;
- verified restore mounts TR-40 heading-first with `replayedEvents=[]`; and
- return/continuation actions write no route, predecessor, authority, external
  state, successor, or world effect.

### Accessibility and presentation

- pointer, touch, Enter, Space, switch, speech, and screen-reader semantic
  activations converge without duplicate dispatch;
- all required targets measure at least `44 x 44 CSS px`;
- labels persist; errors are field-associated; disabled reasons are visible;
- focus order and destination match this blueprint in every state;
- exactly one polite atomic live region exists and messages use deterministic
  IDs;
- `1920x1080`, `1366x768`, `390x844`, and `768x900` DPR-1 gates satisfy the
  responsive contract with no page-level horizontal escape;
- forced-color and reduced-motion emulation preserve all meaning and action;
- silent operation is complete;
- world pixels do not change in response to state or learning results; and
- no world hotspot or crop dispatches learning or route state.

### Fixture and boundary

- all 34 names are manifest-allowlisted and unknown names fail closed;
- fixture uses only frozen in-memory state and is absent from production;
- protected RP-004 remains unimported from production;
- budget, build, complete test, validator, served identity, and E2E gates
  remain mandatory; and
- source/copy/art scans find no RP-005, RP-013, hidden lore, successor,
  purpose, permission, reward, authority, live service, exam guarantee,
  external action, or world response.

## Blueprint walkthrough

| Walkthrough | Result |
|---|---|
| Keyboard: heading-first, native control order, first-invalid/next-required focus, returns | PASS by design trace |
| Pointer/touch: one semantic click and one token per accepted intent | PASS by design trace |
| Switch-like traversal: stable DOM order and `>=44px` controls | PASS by design trace |
| Speech/screen reader: unique persistent accessible names and one live status | PASS by design trace |
| Six observation orders: equal peers converge without rank or cross-credit | PASS by graph trace |
| Python/AI misses: answer-free, cleared, genuinely blank retry | PASS by recovery trace |
| Save failure/malformed read-back: byte-preserving deterministic recovery | PASS by transaction trace |
| Resume: fresh entry, transient re-observation, contiguous-prefix-only learning | PASS by resume trace |
| Desktop/laptop/narrow/effective-200% source order and containment | PASS by layout trace |
| Forced colors/reduced motion/silence | PASS by parity trace |
| Fixture closure, Tour isolation, production exclusion | PASS by manifest design |
| Hard stop and invariant SC-05 | PASS by boundary trace |

These are design-level results, not claims of live browser, assistive
technology, platform forced-color, native text-only zoom, storage, or runtime
evidence. The Combat Engineer and Intelligence Officer must obtain direct
evidence at their respective gates.

## Placeholders and downstream owners

| Placeholder | Owner | Constraint |
|---|---|---|
| public headings, instructions, status, errors, help, return, local-only, and negative-authority prose | Quartermaster | preserve the bounded purposes and owner prefixes in this blueprint; no answer or unauthorized semantics |
| exact component/module factoring and reducer/controller names | Combat Engineer | preserve stable semantic IDs and one-group graph |
| evaluator option banks and machine truth | frozen curriculum contract/validator | never reproduce private answers in this artifact or public UI |
| SC-05 master, crops, grade, atmosphere, and visual polish | Image Specialist after Quartermaster | preserve crop semantics, equality, invariance, budget, and accessibility |
| any ambient audio | Image Specialist | optional, existing/allowed only, non-semantic and complete in silence |
| optional continuation, replay, inspection, overlay, confidence, and motion | Combat Engineer/Quartermaster/Image Specialist | trim in the authorized order before any required behavior |

## Variances and risks

**Variances: none.**

The principal implementation risks are duplicate semantic dispatch, an
observation control reading as a correct answer, common return reading as a
portal, SC-05 leaking into AI-901 answers, learner work surviving repair,
review becoming a score, save resembling upload/acceptance, narrow crops
privileging one relation, fixture state entering production, and status text
leaking private detail. The graph, ownership, crop plan, clearing rules,
closed manifest, and acceptance tests above are mandatory mitigations.

## Hard stop

Stop at exact verified `TR-40`, its two approved returns, and the optional
destinationless notation. Do not mount, preload as reachable UI, dispatch,
name, imply, or reveal RP-005, a destination beyond the reach, a traversable
common return, RP-013, successor, post-ending content, hidden lore, native
purpose/category/author/audience/identity, permission, reward, access,
authority, judgment, Machine relation, live system, Azure/Foundry operation,
credential, endpoint, request/response, external action, exam guarantee, or
any changed geometry/current/light/sound/maintenance/clock/world response.

## Report envelope

- **Stage / agent:** Tactical Operations Specialist /
  `tactical_operations_specialist`
- **Shell / treatment:** `SS-RP004-THREE-CURRENT-v1` and Recon
  `CREATIVE LOCK` at `126e89dad07f7350b37f3d794cecd08f1d5342ba`
- **Work completed:** complete state/replacement graph, stable semantic IDs,
  action/eligibility matrix, focus/status matrix, learning presentation,
  save/recovery/resume rules, seven-modality contract, responsive/crop plan,
  forced-color/reduced-motion/silent parity, closed fixture manifest, and
  implementation acceptance tests
- **Decisions locked:** one active group, heading-first/first-incomplete focus,
  equal observation peers, purpose-unknown common return, neutral AI-901
  instrument, blank retries, conjunctive review, quiet atomic save, no-replay
  restore, approved returns, invariant world, and exact hard stop
- **Flexible areas:** bounded final prose, component factoring, visual
  execution within registered crop purposes, and optional scope in the
  authorized trim order
- **Files changed:** this blueprint and `TD-004/STAGE-METRICS.json`
- **Validation:** Tier 1 authority/graph/action/focus/recovery/responsive/
  accessibility/privacy/fixture walkthrough; no runtime claim
- **Variances:** none
- **Protected boundaries:** hidden-lore vault unopened; protected user files
  untouched; no browser storage, campaign save, cookies, profile, session,
  code, art, media, or automation inspected or mutated
- **Commit:** `PENDING_TACTICAL_OPERATIONS_COMMIT`; the dedicated commit
  containing this artifact and metric entry is authoritative under the ledger
  self-reference convention
- **Synchronization:** local only; no push at this stage
- **Disposition:** **`EXPERIENCE READY`**

## Exact Combat Engineer handoff

- **Stage / agent:** Combat Engineer / `combat_engineer`
- **Shell:** `SS-RP004-THREE-CURRENT-v1`
- **Starting authority:** this `EB-TD004-v1 EXPERIENCE READY`, Recon
  `CREATIVE LOCK`, exact Mission shell, `CFS-TD004-v2`, `VE-TD004-v2`,
  `PBA-TD004-v1`, and released TD-003 CM-50
- **Bounded objective:** implement one normal production route, controller,
  persistence adapter, renderer family, integration, focused tests, and closed
  storage-free fixture for the complete graph in this blueprint
- **Must reuse:** released TD-003 sanitizer/adapter/no-replay return patterns,
  one-hit semantic-intent validation, canonical frame, heading/status/focus
  grammar, answer-free remediation, contiguous-prefix recovery, Tour
  isolation, and release-runner fixture exclusion
- **Must not reuse as production proof:** protected
  `ThreeCurrentReachProtectedJourney.js`, its smoke runner, protected
  predecessor version, or protected test results
- **Core acceptance:** exact CM-50 route and returns; equal any-order
  observations; separate purpose-unknown observation; strict independent
  Python and AI-901 chains; blank retry/clearing; conjunctive review; exact
  dedicated save/rollback/read-back/restore; TD-003 byte stability; known
  returns; invariant SC-05; seven modalities; exact focus/status/layout
  contract; closed 34-scenario fixture; no unauthorized semantics
- **Validation:** focused route/controller/persistence/UI/fixture tests,
  related TD-003 and protected-reference regressions, RP-004 validator
  self-test, build, and `scripts/validate_td004_budget.py`; do not overlap
  build and E2E
- **Stop boundary:** do not write final production copy, generate art, accept
  an unrequested variance, open later routes, weaken a gate, inspect Martin's
  browser/campaign storage, or touch protected user work
- **Required output:**
  `Production Pipeline/Skyscraper Test Drives/TD-004/08-FUNCTIONAL-BUILD-REPORT.md`
- **Required disposition:** `FUNCTIONALLY COMPLETE`, `REVISE`, or `HOLD`
- **Push gate:** dedicated Combat Engineer commit, push `main`, and verify
  `HEAD == origin/main` only after `FUNCTIONALLY COMPLETE`
- **Next recipient:** Quartermaster / `quartermaster`

Return a flow/layout/focus/status/fixture ambiguity here. Return shell
ambiguity to Mission Captain; canon/mystery conflict to Colonel;
campaign/route/return conflict to Operations Planning Major; and
learning/evidence/privacy/persistence/accessibility/responsive/offline/
recovery/performance/budget conflict to Science through Mission Captain.
