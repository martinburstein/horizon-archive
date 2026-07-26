# TD-003 Experience Blueprint

## Document control

| Field | Value |
|---|---|
| Stage | Tactical Operations Specialist |
| Agent ID | `tactical_operations_specialist` |
| Test drive | `TD-003` |
| Shell | `SS-RP003-REVIEW-SAVE-v1` |
| Campaign address | `RP-003 / SC-04 / CM-40-CM-50` |
| Exact predecessor | released no-action `RP003-IE-01 / IE-P3` |
| Shell authority | `05-PLAYABLE-SLICE-SHELL.md`, `SHELL READY` |
| Creative authority | `06-CREATIVE-TREATMENT.md`, `CREATIVE LOCK` |
| Starting commit | `409f3d6139147f357d19fadf11cccc271d0e8a79` |
| Validation tier | Tier 1 blueprint trace plus design-level state, focus, responsive, accessibility, recovery, persistence, and fixture walkthrough |
| Disposition | `EXPERIENCE READY` |

This blueprint translates the issued shell and Creative Lock into one
implementation-ready experience contract. It changes no canon, learning
truth, checkpoint meaning, evidence threshold, persistence schema, route,
world state, fixture boundary, or hard stop.

## Compatibility finding

The shell, Creative Lock, accepted TD-001 and TD-002 components, and current
runtime boundary are compatible without a variance.

- The exact `IE-P3` landing can expose one conditionally present fresh review
  action without replaying or modifying either learning chain.
- The existing world/expedition split can host a review-save renderer as the
  sole active interface sibling while preserving the inherited SC-04 plate.
- The current Python and IE checkpoint sanitizers supply the seven source
  records; the new controller may compose them but may not duplicate or
  weaken their truth.
- The protected complete journey supplies non-routable behavior evidence for
  the note, safe returns, and `replayedEvents=[]`; it must remain absent from
  the production import graph.
- The current RP-002 verified-restore and City Threshold presentations provide
  the two known return anchors.
- The closed TD-002 fixture pattern can be extended with an owned manifest,
  exact PID rule, fixed port, and closed TD-003 public-state constructors
  without using campaign storage or opening arbitrary state.

No return to Reconnaissance Sergeant, Mission Captain, or a Colonel is
required.

## Experience identity

### Player-readable rule

At every boundary the player can determine from persistent text and native
semantics:

1. whether the current owner is expedition state, local transaction, or
   restored expedition note;
2. which of the five independent obligations is being reviewed;
3. why no obligation can substitute for another;
4. whether provenance has been inspected;
5. whether save is unavailable, available, validating, failed, or verified;
6. which known write-free return is available; and
7. that no score, city response, authority, access, exam standing, external
   action, or onward route was created.

The visual plate, light, animation, sound, timing, focus, modality, status
message, and navigation choice supply zero evidence.

### Component envelope

The Combat Engineer should compose:

- the existing invariant `calibration-margin-world` region;
- one dedicated `CalibrationMarginReviewSave` renderer;
- one pure review/save controller and strict sanitizer;
- one storage-agnostic atomic adapter around the dedicated TD-003 key;
- exact normal-entry composition after released `IE-P3`;
- a stable polite atomic status region inside the sole active group;
- native buttons, disabled semantics, description lists, and labelled
  sections;
- existing RP-002 and City Threshold return presentations; and
- a separate closed review fixture outside `src`.

The prior group unmounts before its replacement receives focus. No old form,
action, status, transaction control, hidden panel, off-canvas group, or
`aria-hidden` control remains operable.

## Complete state and replacement graph

```text
IE-FINAL / exact no-action IE-P3 / SYSTEM
  -- fresh REVIEW EXPEDITION EVIDENCE, after exact five-conjunct recheck -->

CM40-REVIEW / cm40_review / SYSTEM // EXPEDITION STATE
  observations       COMPLETE
  PY-010             COMPLETE
  RP003-IE-01        COMPLETE
  provenance         SOURCE-BOUND / INSPECTION REQUIRED
  no external action COMPLETE
  SAVE EXPEDITION NOTE = native disabled, inert, non-dispatchable
  -- fresh REVIEW PROVENANCE -->

CM40-READY / cm40_provenance_inspected / SYSTEM // EXPEDITION STATE
  same five rows, same order, no score
  bounded provenance detail is visible inside the same group
  SAVE EXPEDITION NOTE = enabled
  -- fresh validated SAVE EXPEDITION NOTE -->

CM41-VALIDATING / cm41_transaction / SYSTEM // LOCAL EXPEDITION TRANSACTION
  sanitize prerequisites and source checkpoints
  construct exact candidate
  preserve prior serialized bytes
  atomic replace
  strict same-sanitizer read-back
    -- exact read-back --> CM41-COMMITTED internal public result
                         --> CM50-RESTORED direct production replacement
    -- throw/unavailable/quota/reject/partial/read-back-invalid -->
       preserve prior bytes exactly
       clear private/transient work
       CM40-PROVENANCE-PENDING with bounded failure status
    -- invalid prerequisite/invariant/intent -->
       no write and deterministic first-incomplete route

CM50-RESTORED / cm50_verified_restore /
SYSTEM // RESTORED EXPEDITION NOTE
  exact record integrity
  three-part expedition note
  supplied/exposed provenance
  unavailable remains unavailable and unread
  no external action
  replayedEvents=[]
  -- RETURN TO CIVIC COMPARISON --> exact RP-002 SC-03-50 verified_restore
  -- RETURN TO CITY THRESHOLD --> exact accepted SC-02-50 Threshold anchor
```

Optional write-free early return from `CM40-REVIEW`,
`CM40-PROVENANCE-PENDING`, or `CM40-READY` uses either known return. It
creates no save and does not complete TD-003.

There is no automatic entry, review, provenance inspection, save, retry,
return, or restore event. `CM41` is a synchronous transaction replacement;
it is not a modal, timer, room, loading game, or cancellable network wait.

## Exact predecessor and five-conjunct reconstruction

The controller constructs eligibility; it never accepts a client-authored
Boolean claiming that eligibility passed.

| Order | Conjunct | Accepted source | Independent rejection |
|---:|---|---|---|
| 1 | observations | exact set `correspondence`, `bounded_difference`, `sealed_unavailable` | missing, extra, duplicate, forged, private, or noncanonical observation |
| 2 | `PY-010` | strict sanitized Python `P3`, ordered primary/retrieval/transfer | any non-P3, false dimension, wrong mapping/skill, extra/private/out-of-order record |
| 3 | `RP003-IE-01` | strict sanitized IE `IE-P3`, ordered primary/retrieval/transfer/unsupported explanation | any non-P3, missing explanation, false dimension, wrong mapping/objective, extra/private/out-of-order record |
| 4 | provenance | every retained record is supplied/exposed course evidence; sealed/audio/video unavailable inputs remain unread | source ambiguity, invented value, malformed record provenance, or unsupported-source inference |
| 5 | no external action | exact unchanged continuation; null city/world/access/successor; false authority/external action/world change | any non-null delta, successor, permission, authority, service, access, or world response |

The fixed result is Boolean conjunction, never a total. Each row shows its
own owner, completion statement, and limit. A missing conjunct routes to its
own source boundary; another completed row cannot compensate.

## Group ownership and replacement

| Boundary | Active group | Owner | Heading purpose | Mounted content | Permitted replacement |
|---|---|---|---|---|---|
| exact `IE-P3` | `ie_finalized` | `SYSTEM` | IE work is locally finalized; review is a fresh Pilot choice | accepted final status plus one conditional review action | `cm40_review` only |
| `CM40-REVIEW` | `cm40_review` | `SYSTEM // EXPEDITION STATE` | inspect five independent obligations | owner/heading, responsibility, five-row checklist, provenance action, disabled save, status, optional returns | same group with provenance detail; first-incomplete route; known return |
| `CM40-READY` | `cm40_provenance_inspected` | `SYSTEM // EXPEDITION STATE` | provenance was inspected; local preservation may be attempted | same rows, bounded detail, enabled save, status, optional returns | `cm41_transaction`; known return |
| `CM41` | `cm41_transaction` | `SYSTEM // LOCAL EXPEDITION TRANSACTION` | validate and replace one local record all-or-none | transaction heading and one atomic status; no player action | CM50, CM40 recovery, or first-incomplete boundary |
| failed valid-prerequisite write | `cm40_provenance_pending` | `SYSTEM // EXPEDITION STATE` | local save did not complete; provenance must be freshly inspected before another attempt | five rows, bounded public failure status, provenance action, disabled save, optional returns | `cm40_provenance_inspected`; known return |
| source/invariant recovery | source boundary named by fixed order | existing owning group | resume the first incomplete blank boundary | existing privacy-safe blank/recovery presentation | existing authorized successor only |
| `CM50` | `cm50_verified_restore` | `SYSTEM // RESTORED EXPEDITION NOTE` | exact local record returned intact without replay | integrity, note, provenance, unavailable/no-action statements, two returns | one known destination |

`SYSTEM STATUS` is a labelled polite region inside the active group, not a
second owner. Provenance detail expands inside `cm40_review` or
`cm40_provenance_inspected`; it is not a modal, dialog, route, checkpoint,
sixth row, second active group, or durable state.

## CM-40 source and DOM contract

The sole CM-40 group uses this source order:

1. owner eyebrow;
2. complete programmatically focusable phase heading;
3. concise present responsibility;
4. one stable atomic polite status region;
5. `<ol>` or equivalent ordered checklist with five peer rows;
6. provenance detail region, when inspected;
7. primary current action:
   `REVIEW PROVENANCE` or `SAVE EXPEDITION NOTE`;
8. natively disabled `SAVE EXPEDITION NOTE` while inspection is pending;
9. optional known-return navigation group; and
10. local/offline/no-authority/no-exam-guarantee statement.

Each checklist row has:

- a persistent row heading;
- explicit `Complete` state text, never a color-only icon;
- source/owner text;
- a sentence naming what cannot substitute for it; and
- no point, percentage, progress-bar, rank, aggregate, badge, or celebratory
  mark.

The provenance detail states only:

- Python and IE records came from accepted exposed or supplied course input;
- the exact retained record identities are local expedition records;
- sealed, audio, video, and other unsupplied input remains unavailable and
  unread; and
- inspection is zero credit and creates no evidence, checkpoint, permission,
  or world response.

It displays no answer, learner response, source body, expected value,
confidence control, attempt narrative, sealed value, media chrome, credential,
endpoint, payload, or service result.

## CM-41 transaction contract

`CM41-VALIDATING` directly replaces CM-40 only after the complete save intent
passes. The state has no player controls. Its source order is owner, heading,
one exact local/offline status, and one negative-authority statement.

The controller/adapter sequence is fixed:

1. capture the last verified serialized value as opaque bytes;
2. re-sanitize exact observation, Python, IE, provenance, and invariant
   authorities;
3. verify provenance inspection and the fresh save intent;
4. construct records from the sanitized checkpoints, never rendered state or
   a client-supplied save object;
5. construct the exact candidate and run the strict save sanitizer;
6. serialize only that sanitized candidate;
7. perform one replacement through
   `horizon-archive-rp003-review-save-v1`;
8. read through the same strict sanitizer;
9. compare canonical sanitized read-back to the candidate;
10. clear all private/transient work; and
11. expose CM-50 only after equality passes.

`CM41-COMMITTED` is an inspectable controller/fixture result, not a
player-paused success screen. Normal production dispatch returns directly
with the CM-50 public view after verified read-back.

## Exact save mapping and schema

### Persistence identity

```text
key = horizon-archive-rp003-review-save-v1
version = rp003.review-save.v1
packetId = RP-003
mappingId = RP003-A3-CALIBRATION-MARGIN
checkpoint = calibration_margin_complete
continuation = continuation
cityStateDelta = null
successor = null
```

Only normal campaign owns the key. Demo Tour has no read, write, replace,
delete, eligibility, restore, or navigation authority over it.

### Exact top-level object

The strict sanitizer accepts exactly these nine keys and no others:

```text
version
packetId
mappingId
checkpoint
continuation
cityStateDelta
successor
note
evidence
```

`worldStateDelta=null`, `accessStateDelta=null`, `authorityGranted=false`,
`externalActionEnabled=false`, and `worldStateChanged=false` are verified
source conditions, not durable extra keys.

### Exact note

`note` has exactly:

```text
correspondence = bounded_exposed_correspondence_observed
difference = one_bounded_exposed_difference_observed
unavailable = sealed_source_unavailable_and_unread
```

The note cannot create or backfill an observation.

### Exact evidence order and identities

| Position | Skill/objective | Form | Exact correctness dimensions |
|---:|---|---|---|
| 1 | `PY-010` | `primary` | eight Python checkpoint checks, all `true` |
| 2 | `PY-010` | `retrieval` | `condition`, `trueBranch`, `falseBranch`, `unavailableBoundary`, all `true` |
| 3 | `PY-010` | `transfer` | eight Python checkpoint checks, all `true` |
| 4 | `RP003-IE-01` | `primary` | frozen IE dimensions, all `true` |
| 5 | `RP003-IE-01` | `retrieval` | frozen IE dimensions, all `true` |
| 6 | `RP003-IE-01` | `transfer` | frozen IE dimensions, all `true` |
| 7 | `RP003-IE-01` | `unsupported_explanation` | `unavailable_input_cannot_support_value=true` |

Every record has exactly the ten existing checkpoint keys:

```text
packet_id
mapping_id
form
skill_or_objective_id
dimension_correctness
attempt_count
hint_level
confidence
misconception_tags
mastery_status
```

Every record has `packet_id=RP-003`,
`mapping_id=RP003-A3-CALIBRATION-MARGIN`,
`mastery_status=mastered`, the exact all-true dimension set, and metadata
already accepted by its source checkpoint sanitizer. The packet mapping ID is
never substituted with either learning ID.

The save rejects all raw answers, source text, supplied sequences, learner
prose, drafts, private notes, feedback, prompts, sealed content, extracted
values, confidence controls, focus/input history, tokens, transaction
diagnostics, credentials, identity, endpoints, payloads, responses, external
requests, Tour state, review-open state, provenance-inspection state, and
extra keys.

## Action, eligibility, disabled, and replay matrix

Labels are fixed shell purpose contracts. Quartermaster may improve support
copy but may not change IDs, meaning, eligibility, destinations, or owner.

| Group | Semantic action / visible label | Eligibility | Disabled or unavailable contract | Accepted one-hit result | Duplicate, stale, forged, early, or replay result |
|---|---|---|---|---|---|
| `ie_finalized` | `REVIEW EXPEDITION EVIDENCE` | exact campaign IE-P3 plus all five independently revalidated conjuncts; exact shell/group/owner/modality; private-free; fresh token | action absent unless exact eligibility passes; no teaser | validate first, consume once, unmount IE landing, mount `cm40_review` | reject without spending a later valid token, writing, replaying, or changing focus/evidence |
| `cm40_review` | `REVIEW PROVENANCE` | exact five rows, exact group/owner/shell, provenance pending, approved modality, fresh token | unavailable outside pending review | consume once; reveal bounded detail in same group; set transient inspection true; focus provenance heading | reject; inspection remains pending; no evidence |
| `cm40_review` / `cm40_provenance_pending` | `SAVE EXPEDITION NOTE` | none until provenance inspection | rendered native `disabled` plus `aria-disabled=true`; no handler/semantic dispatch; status names inspection requirement | none | no dispatch, token consumption, write, or diagnostic |
| `cm40_provenance_inspected` | `SAVE EXPEDITION NOTE` | exact fresh revalidation of all five conjuncts and inspection; exact campaign/group/owner/action/modality; private-free fresh token; storage available at dispatch | disabled immediately if any prerequisite changes | validation before consumption; direct CM41 transaction; exact success -> CM50 | reject before write and route to fixed first incomplete; if all sources exact but intent invalid, return CM40 provenance pending |
| CM-40 states | `RETURN TO CIVIC COMPARISON` | optional shell-authorized write-free return, exact known target, fresh intent | absent during CM41 | clear transients, preserve source checkpoints and any prior verified TD-003 record, mount exact RP-002 verified restore | one-hit reject; no adapter/evidence/world effect |
| CM-40 states | `RETURN TO CITY THRESHOLD` | same, exact known target | absent during CM41 | clear transients, preserve any prior record, mount accepted Threshold anchor | one-hit reject; no adapter/evidence/world effect |
| `cm41_transaction` | none | internal synchronous processing only | no button, link, cancel, Escape, retry, or hidden target | exact read-back -> direct CM50 | failure routes as specified; no partial accepted value |
| `cm50_verified_restore` | `RETURN TO CIVIC COMPARISON` | exact sanitized restored record, fresh exact intent | absent otherwise | write-free replay-free RP-002 verified restore | reject without record mutation |
| `cm50_verified_restore` | `RETURN TO CITY THRESHOLD` | exact sanitized restored record, fresh exact intent | absent otherwise | write-free replay-free accepted Threshold anchor | reject without record mutation |

Every semantic intent uses the existing seven activation kinds:

```text
pointer
touch
keyboard_enter
keyboard_space
switch
speech
screen_reader
```

The pure intent is exact-keyed to packet, controller version, shell version,
campaign mode, active group, owner, action, activation kind, and opaque fresh
token. Extra/private keys reject the intent.

## Focus and announcement matrix

One stable `<div role="status" aria-live="polite" aria-atomic="true">` exists
inside the active group. Stable message IDs suppress repeated announcements.
Direct `aria-describedby` associations remain authoritative for disabled and
failure explanations.

| Event | Deterministic focus | Atomic status purpose |
|---|---|---|
| exact `IE-P3` landing reconstructed | existing IE-final heading; review action follows in tab order | extraction evidence remains finalized; fresh expedition review is available |
| fresh review accepted | CM-40 heading (`tabIndex=-1`) | five independent obligations are ready for inspection; no score or new evidence |
| provenance pending | CM-40 heading on entry; `REVIEW PROVENANCE` next in tab order | provenance inspection is required before local save |
| provenance action accepted | provenance-detail heading (`tabIndex=-1`), then enabled save | source ownership and unavailable boundary inspected; inspection is zero credit |
| save dispatch accepted | CM-41 heading | validating one local all-or-none expedition record |
| exact commit/read-back | CM-50 heading | local expedition record restored intact; no event replay or external action |
| write/unavailable/quota/read-back failure with exact prerequisites | CM-40 heading, then provenance control | no accepted write occurred; last verified bytes remain unchanged; inspect provenance before another fresh save |
| missing/invalid observation | first incomplete CM-10 observation control | review/save closed; existing observation evidence preserved |
| invalid Python source record | exact first incomplete blank CM-20, CM-22, or CM-23 heading/control | review/save closed; valid earlier Python prefix preserved |
| invalid IE source record | exact first incomplete blank CM-30, CM-33, CM-34, or unsupported-explanation control | review/save closed; valid earlier IE prefix preserved |
| malformed provenance | first invalid source boundary; otherwise CM-40 provenance control | malformed source was not retained |
| invariant mismatch with exact evidence | exact IE-P3 safe heading | no external/world invariant was accepted; no write occurred |
| early/stale/duplicate/forged/Tour save intent with exact evidence | CM-40 heading, provenance control next | action was not accepted; provenance inspection remains required |
| exact saved reload/re-entry | CM-50 heading | exact local record restored; `replayedEvents=[]` |
| Civic Comparison return | existing `SC-03-50 verified_restore` heading | known comparison anchor restored; no event replay |
| City Threshold return | existing accepted `SC-02-50` adjacent-survey/anchor control | known Threshold anchor restored; no event replay |

Focus never moves to the world plate, a checklist icon, score, hidden or
replaced region, disabled control, transaction diagnostic, decorative
provenance element, or unavailable source.

## Error, retry, cancel, return, reload, and malformed recovery

### Bounded public reasons

Player-visible reason categories may be no more specific than:

- `source_boundary_incomplete`;
- `provenance_inspection_required`;
- `local_storage_unavailable`;
- `local_write_not_completed`;
- `local_readback_not_verified`; and
- `saved_record_not_verified`.

They contain no raw storage value, byte content, stack, browser detail,
learner value, answer, expected value, record body, token, credential,
endpoint, payload, or response.

### Failure and retry

- Invalid prerequisites or intent fail before storage.
- A storage throw, unavailable/quota result, rejected/partial replacement, or
  invalid read-back leaves the exact last-known-good serialized bytes
  byte-for-byte stable. With no prior record, the key remains absent.
- After a valid-prerequisite transaction failure, all private/transient state
  clears and CM-40 returns with provenance pending. Retry means another fresh
  `REVIEW PROVENANCE` followed by another fresh `SAVE EXPEDITION NOTE`.
- There is no hidden automatic retry, retry counter, punitive delay,
  attempt/evidence record, or persistent failure diagnostic.
- Unlimited retries are allowed while the exact prerequisites remain valid.

### Cancel and Escape

- CM-40 has no modal. `Escape` does not review, inspect, save, return, or
  retain an event token.
- The explicit known returns are the only pre-save route cancellation.
- CM-41 is synchronous and has no cancellable pending network request. Escape
  and close cannot interrupt an atomic replacement or create a partial
  accepted record.
- CM-50 has no cancel; its two explicit known returns are optional navigation.

### Return

Every return:

- is a fresh explicit semantic action;
- is write-free, adapter-free, and replay-free;
- clears review/provenance/save tokens, local status history, focus/input
  history, and transaction diagnostics;
- preserves exact legitimate Python/IE/observation checkpoints and any
  already verified TD-003 record;
- preserves `continuation="continuation"`, null deltas, null successor, false
  authority/external action, and `replayedEvents=[]`; and
- never calls a learning evaluator, creates evidence, or changes SC-04.

### Reload and resume

| Sanitized boundary | Reconstructed presentation | Focus and replay |
|---|---|---|
| exact IE-P3 and no exact TD-003 record | no-action IE-P3 with fresh review action | IE-final heading; no replay |
| CM-40 open, provenance pending, inspected, save-intent, or transaction-only transient | no-action IE-P3 with fresh review required | IE-final heading; transient work absent |
| exact TD-003 record | no-action CM-50 verified restore | CM-50 heading; `replayedEvents=[]` |
| partial/corrupt/extra/private stored TD-003 value with exact source prerequisites | ignore/reject stored value; exact IE-P3 fresh review boundary | IE-final heading; no content reflection |
| malformed source prerequisite | fixed first-incomplete blank boundary | owning heading/control; no replay/prefill |

Review-open, provenance-inspected, save intent, transaction state, status,
focus, and return choice never persist.

### First-incomplete routing order

The controller checks and routes in exactly this order:

1. observation IDs -> first incomplete CM-10 control;
2. Python primary -> CM-20 blank;
3. Python retrieval -> CM-22 blank;
4. Python transfer -> CM-23 blank;
5. IE primary -> CM-30 blank;
6. IE retrieval -> CM-33 blank;
7. IE transfer -> CM-34 blank;
8. unsupported explanation -> CM-34 explanation boundary;
9. provenance -> source record boundary or CM-40 provenance;
10. no-external-action invariant -> exact safe IE-P3 if prior evidence is
    exact, else the earlier source boundary;
11. provenance inspection -> CM-40 provenance control; and
12. transaction -> CM-40 if prerequisites remain exact.

Valid independently finalized evidence is preserved. Recovery never
downgrades a valid prefix, cross-credits another obligation, prepopulates a
form, recomputes a learner result, or replays an event.

## Seven-modality semantic convergence

| Input | Native/public delivery | Recorded activation kind |
|---|---|---|
| pointer | click on native button | `pointer` |
| touch | touch-origin semantic click | `touch` |
| keyboard Enter | focused native button activation | `keyboard_enter` |
| keyboard Space | focused native button activation | `keyboard_space` |
| switch-like | platform semantic activation of focused native button | `switch` |
| speech | semantic command resolved to exact visible accessible name | `speech` |
| screen reader | virtual-cursor/native control activation | `screen_reader` |

For each action:

1. exact packet/controller/shell/mode/group/owner/action/modality/token and
   private-free shape validate;
2. current eligibility validates;
3. the token is consumed once;
4. one semantic action executes once; and
5. replacement happens once.

Hover, focus, visibility, viewport entry, dwell, animation completion, key
repeat, live-region output, disabled clicks, reload, and layout changes do
not dispatch. Invalid input does not consume a later valid token.

## Responsive and accessibility layout contract

### Shared DOM and reading order

The single DOM order is:

1. labelled SC-04 world region and descriptive image;
2. sole active expedition group;
3. owner and phase heading;
4. present responsibility;
5. atomic status;
6. checklist or restored-note content in canonical order;
7. provenance/unavailable/no-action boundaries;
8. current primary action;
9. known returns where permitted; and
10. local/offline/no-authority/no-exam-guarantee statement.

CSS may create columns but may not reorder world, rows, statements, actions,
errors, returns, or focus.

### Wide desktop (`>=1280px`, representative `1920 x 1080`)

- Use the current `3fr / 2fr` world/interface split.
- The invariant world remains dominant.
- The full current group, present responsibility, all required actions, and
  local status fit with the world inside the desktop shell without outer
  horizontal or vertical scrolling.
- Internal interface overflow may scroll only when content exceeds the
  bounded lane; the current action and focus target must be reachable without
  being trapped beneath fixed content.
- The five rows remain one vertical sequence, not a dashboard grid.

### Laptop/intermediate (`768-1279px`)

- Use natural world-first two-row composition.
- The complete world plate precedes one full-width interface group.
- Checklist rows and restored note remain one column; no horizontal carousel,
  clipped label, or fixed-width card.

### Narrow (`<=767px`) and effective `200%`

- Use one natural semantic column in the same source order.
- All five rows, provenance detail, note fields, status, save, and returns
  wrap without changing order or meaning.
- Buttons become full available width where useful and remain at least
  `44 x 44 CSS px`.
- Vertical document scrolling is allowed. Page-level horizontal escape is
  not.
- No label truncation, ellipsis that removes meaning, off-screen required
  action, overlapping fixed element, or two-column note/checklist remains.

### Native semantics and target rules

- Use real `<button type="button">` controls.
- Disabled save uses the native `disabled` attribute and
  `aria-disabled=true`; it has no dispatch handler.
- The disabled reason is persistent text associated through
  `aria-describedby`.
- Group headings are programmatically focusable with `tabIndex=-1` and remain
  outside normal tab order.
- The checklist is an ordered semantic list or equivalent labelled set; each
  row includes complete state text.
- Restored note uses a `<dl>` with three fixed terms and values.
- Integrity, provenance, unavailable, and no-action statements are separate
  labelled regions, not icons or tooltips.
- All actionable controls and interactive disclosure summaries are at least
  `44 x 44 CSS px`.
- Visible focus uses a minimum `3px` high-contrast outline with separation
  from the control edge.

### Forced colors

- Use system text, canvas, border, highlight, disabled, error, and focus
  colors under `forced-colors: active`.
- Preserve boundaries among owner, checklist rows, provenance, transaction
  status, restored note, errors, disabled save, and returns through text and
  borders.
- No completion, failure, unavailable, or return meaning depends on authored
  color, translucency, shadow, or background image.

### Reduced motion and silent parity

- Reduced motion uses immediate group replacement and disables all
  nonessential interface transitions.
- Any default transition cannot delay unmount, focus, announcement,
  eligibility, write, read-back, failure, or return.
- World ambient motion remains independently owned and must not synchronize
  to interface state.
- TD-003 adds no audio. Every state, error, save result, restore result, and
  return is complete in text and semantics.

Direct claims about human screen-reader speech, physical switch hardware,
native platform forced colors/reduced motion, and native text-only zoom
remain limited to evidence actually collected by later stages.

## World, crop, hotspot, and semantic-region plan

The inherited `city-threshold-overview-master.png` remains the sole runtime
plate for this floor. It is temporary SC-04 atmosphere and is not
`SC-04-MASTER`.

The world has one semantic region:

```text
SC-04 - an immense empty underground civic landscape already operating above
geothermal chasms
```

During CM-40 through CM-50:

- no hotspot, polygon, tooltip, world button, hover target, focus target,
  crop switch, mask, light, sound, particle, route line, status lamp, or
  outcome effect is registered;
- the paired exposed bands, bounded difference, sealed boundary,
  condensation, thermal circulation, maintenance exchange, materials,
  coupling, route, and clocks remain context-only and unchanged;
- no world element becomes a checklist row or indicates save eligibility;
  and
- no interface material connects physically or semantically to Builder
  matter.

A future true SC-04 master needs separate crop/hotspot/accessibility
registration. TD-003 neither performs nor pre-approves that integration.

## Closed storage-free review fixture

### Directory and component composition

Create only:

```text
horizon-archive-game/review-fixtures/td003-review-save/
  index.html
  main.jsx
  ReviewSaveFixture.jsx
  scenarios.js
  launch-manifest.json
  vite.config.js
  fixtureIsolation.test.js
```

- `scenarios.js` exports the frozen exact allowlist and public-constructor
  recipes.
- `ReviewSaveFixture.jsx` composes the production public renderer with the
  inherited world and inert callbacks.
- `main.jsx` accepts one scenario only from a compile-time review-runner
  constant, not URL or storage state.
- `fixtureIsolation.test.js` proves scenario/group mapping, private-free
  output, manifest exactness, storage/network/URL exclusion, production
  import exclusion, and marker absence.

### Exact scenario contract

| Scenario | Public recipe | Required rendered boundary |
|---|---|---|
| `cm40-five-conjunct-ready` | exact accepted public IE-P3 source plus fresh public review intent | five fixed-order complete peer rows; provenance action; save disabled |
| `cm40-provenance-pending` | exact review plus one closed early/forged save rejection recipe | same exact CM-40 rows; bounded inspection-required status; provenance focus; save disabled |
| `cm40-observation-invalid` | exact controller construction with one fixed missing canonical observation fixture | first incomplete CM-10 recovery owner/control; no review/save |
| `cm40-python-invalid` | exact controller construction with one fixed sanitized Python prefix below P3 | exact first incomplete blank Python boundary; no IE/review/save replay |
| `cm40-ie-invalid` | exact controller construction with one fixed sanitized IE prefix below P3 | exact first incomplete blank IE boundary; no review/save |
| `cm40-invariant-invalid` | exact source records plus one fixed non-null/false invariant input | exact safe IE-P3 recovery; no write/world effect |
| `cm41-save-committed` | closed in-memory adapter, exact public review/provenance/save intents | committed/read-back-valid public transaction result; no storage |
| `cm41-write-failed-last-good` | closed in-memory failure adapter seeded with one exact verified serialized record | CM-40 failure recovery and byte-identical last-good value |
| `cm50-verified-restore` | exact sanitizer over one fixed public record | no-action CM-50 with integrity/note/provenance/unavailable/no-action content |
| `cm50-return-civic-comparison` | exact CM-50 plus fresh public return intent | exact replay-free RP-002 verified-restore descriptor |
| `cm50-return-city-threshold` | exact CM-50 plus fresh public return intent | exact replay-free accepted Threshold descriptor |

Scenario recipes may use only public sanitizers, controllers, adapters,
renderers, and fixed source fixtures. They may not import expected learner
answers or the complete protected-journey runner. Submitted, expected, source,
sealed, or private values never render.

### Exact owned launch manifest

`launch-manifest.json` must declare:

```json
{
  "fixtureId": "td003-review-save-v1",
  "owner": "Intelligence Officer",
  "host": "127.0.0.1",
  "port": 4175,
  "packageCommand": "npm run review:td003-review-save",
  "configPath": "review-fixtures/td003-review-save/vite.config.js",
  "scenarios": [
    "cm40-five-conjunct-ready",
    "cm40-provenance-pending",
    "cm40-observation-invalid",
    "cm40-python-invalid",
    "cm40-ie-invalid",
    "cm40-invariant-invalid",
    "cm41-save-committed",
    "cm41-write-failed-last-good",
    "cm50-verified-restore",
    "cm50-return-civic-comparison",
    "cm50-return-city-threshold"
  ],
  "expectedRootMarker": "TD003_REVIEW_SAVE_FIXTURE",
  "productionExclusionMarkers": [
    "TD003_REVIEW_SAVE_FIXTURE",
    "td003-review-save",
    "4175"
  ],
  "pidCapture": "exact spawned fixture-process PID",
  "cleanupCommand": "stop only that captured PID"
}
```

Property spelling may follow the implementation's manifest validator only if
all meanings and exact values above remain mechanically present. The fixture
command must use strict port `4175`.

### Fixture hard boundary and known limitation

- No URL/query/hash state, arbitrary JSON, text entry, checkpoint editor,
  developer console seam, campaign debug route, browser seed, or dynamic
  scenario discovery.
- No `localStorage`, `sessionStorage`, IndexedDB, cookie, Cache API, service
  worker, campaign save, signed-in profile, or Martin data access.
- No network source, service request, credential, file picker, microphone,
  camera, audio, or video.
- The runner preflights port ownership, captures exactly the process it
  starts, verifies HTTP `200` plus root marker, and stops only that PID.
- If `4175` is occupied by an unowned process, the runner stops with a
  blocker; it never kills or reuses that process.
- Production imports and `dist` must exclude every fixture file, marker,
  scenario ID, manifest/config path, and port reference.
- The fixture is release evidence for closed deterministic states. It does
  not prove Martin's real save, arbitrary browser persistence, human
  assistive-technology speech, or physical switch hardware.

## Copy, content, asset, and implementation placeholders

No placeholder may contain a private answer, source value, sealed content,
native category, score, reward, authority, access, destination, or onward
cue.

| Placeholder | Purpose | Owner |
|---|---|---|
| `COPY-REVIEW-ENTRY` | fresh review action and no-score purpose | Quartermaster |
| `COPY-CM40-HEADING` | five independent obligations, not a verdict | Quartermaster |
| `COPY-CM40-ROW-{id}` | complete state, source owner, non-substitution limit | Quartermaster |
| `COPY-PROVENANCE-ACTION` | required zero-credit inspection | Quartermaster |
| `COPY-PROVENANCE-DETAIL` | exposed/supplied ownership and unavailable/unread boundary | Quartermaster |
| `COPY-SAVE-DISABLED` | associated inspection-required reason | Quartermaster |
| `COPY-CM41-TRANSACTION` | local/offline all-or-none validation | Quartermaster |
| `COPY-SAVE-FAILURE-{reason}` | bounded private-free failure and fresh retry path | Quartermaster |
| `COPY-CM50-INTEGRITY` | exact local read-back integrity only | Quartermaster |
| `COPY-CM50-NOTE-{field}` | three fixed expedition-owned note meanings | Quartermaster |
| `COPY-CM50-NO-ACTION` | no city/world/access/authority/exam/external action | Quartermaster |
| `COPY-KNOWN-RETURNS` | Civic Comparison and City Threshold as already-known anchors | Quartermaster |
| `COPY-LOCAL-PRIVACY` | local device, offline, no account/service/private material | Quartermaster |
| `IMPL-REVIEW-SAVE-CONTROLLER` | exact graph, actions, eligibility, one-hit, recovery | Combat Engineer |
| `IMPL-REVIEW-SAVE-SANITIZER` | exact key/schema/note/evidence/extra-key rejection | Combat Engineer |
| `IMPL-REVIEW-SAVE-ADAPTER` | atomic replace, strict read-back, last-good byte stability | Combat Engineer |
| `IMPL-TD003-FIXTURE-MANIFEST` | closed states, owned launch, PID/port cleanup, production exclusion | Combat Engineer |
| `STYLE-QUIET-FIELD-CLOSURE` | neutral five-row independence, transaction restraint, restore hierarchy | Image Specialist |
| `ASSET-SC04-INHERITED-PLATE` | existing plate provenance and temporary limitation | Quartermaster |

No new runtime media, font, audio, image, crop, hotspot, or network asset is
authorized.

## Implementation acceptance matrix

| ID | Acceptance |
|---|---|
| `RS-EXP-001` | Only exact campaign IE-P3 plus all five independently revalidated conjuncts exposes `REVIEW EXPEDITION EVIDENCE`; Tour, partial, stale, forged, private, wrong owner/version/group/modality, passive, and extra-key cases reject before token consumption. |
| `RS-EXP-002` | All seven modalities converge on one fresh semantic review action and one-hit suppression; focus/hover/dwell/key repeat/layout/live output dispatch nothing. |
| `RS-EXP-003` | Fresh review mounts exactly one System group with five peer rows in fixed order, no total/score/grade/badge, provenance pending, and natively disabled non-dispatchable save. |
| `RS-EXP-004` | Each row is independently source-derived; observation/Python/IE/provenance/no-action cannot cross-credit or substitute. |
| `RS-EXP-005` | Fresh `REVIEW PROVENANCE` reveals only bounded source ownership and unavailable/unread limits inside the same group, grants zero evidence, and focuses the detail heading. |
| `RS-EXP-006` | Save becomes enabled only after exact provenance inspection while every prerequisite remains exact; any prerequisite change disables it immediately. |
| `RS-EXP-007` | Save intent supports all seven modalities, validates exact private-free shape and every prerequisite before consuming its token or calling storage, and executes at most once. |
| `RS-EXP-008` | Candidate construction uses only strict sanitized observation/Python/IE sources, not rendered/client-supplied state. |
| `RS-EXP-009` | Sanitizer accepts exactly the dedicated version/key identity, nine top-level keys, three note keys/values, seven ordered ten-key records, exact mapping/learning IDs, exact all-true dimensions, bounded metadata, and no extras. |
| `RS-EXP-010` | Raw answers, source text, prose, drafts, feedback, prompts, confidence controls, focus/input history, tokens, diagnostics, credentials, identity, endpoints, payloads, responses, Tour, and arbitrary keys reject and never persist. |
| `RS-EXP-011` | Adapter captures opaque last-good bytes, sanitizes before serialization, performs one replacement, strict-sanitizes read-back, compares canonical equality, and exposes only immutable sanitized output. |
| `RS-EXP-012` | Throw, unavailable, quota, reject, partial, malformed, or read-back-invalid failure writes no accepted partial value and preserves prior verified bytes exactly, including the no-prior-record case. |
| `RS-EXP-013` | Valid-prerequisite failure clears transients, returns CM-40 with provenance pending, and requires fresh provenance plus fresh save for unlimited retry. |
| `RS-EXP-014` | Missing/invalid prerequisites route in the fixed first-incomplete order to exact blank owning boundaries without cross-credit, downgrade, evidence loss, prefill, or replay. |
| `RS-EXP-015` | Exact saved reload/re-entry mounts no-action CM-50 only from an exact sanitized record and sets `replayedEvents=[]`; transient CM-40/41 states never resume. |
| `RS-EXP-016` | CM-50 presents integrity, exact three-part expedition note, exposed/supplied provenance, unavailable/unread boundary, and no-external-action meaning without claiming truth, city acceptance, or authority. |
| `RS-EXP-017` | Civic Comparison and City Threshold returns are fresh, explicit, known, write-free, adapter-free, preserve the save, focus verified anchors, and set `replayedEvents=[]`. |
| `RS-EXP-018` | Optional CM-40 early returns clear transients, create no TD-003 completion, preserve legitimate evidence/record, and use the same known destinations. |
| `RS-EXP-019` | Exactly one owner/message/content/action group is mounted, visible, operable, and exposed to accessibility APIs at every boundary; replaced groups are unmounted. |
| `RS-EXP-020` | Persistent labels, unique names, native disabled state, direct descriptions, one polite atomic status, heading-first focus, and bounded failure text pass. |
| `RS-EXP-021` | Every interactive target is at least `44 x 44 CSS px`; visible focus is at least `3px`; disabled save and unavailable sources are truthful and non-color. |
| `RS-EXP-022` | Desktop, laptop, narrow, and effective-200% preserve world-first/source order, all five rows, complete current actions, natural reflow, readable wrapping, and no page-level horizontal escape. |
| `RS-EXP-023` | Forced colors preserve owner/row/status/error/disabled/completion/return meaning; reduced motion uses direct equivalent replacement; silence preserves all information. |
| `RS-EXP-024` | Inherited SC-04 source/crop/world behavior is identical through every state; no hotspot, relight, sound, synchronized clock, route, material, or world effect is introduced. |
| `RS-EXP-025` | Demo Tour cannot read/write/delete/replace/restore the TD-003 key, enter review, or dispatch returns; campaign and Tour remain isolated and byte-stable. |
| `RS-EXP-026` | No network, Azure/Foundry/SDK/REST/CLI, account, authentication, service worker, microphone, camera, media, external process, or external action is introduced. |
| `RS-EXP-027` | All eleven closed fixture scenarios construct through public interfaces only, render no private/expected value, use no browser/campaign storage, and match exact active groups/destinations. |
| `RS-EXP-028` | Launch manifest exactly declares owner/host/4175/command/config/scenarios/root marker/exclusion markers/PID capture/cleanup; preflight and cleanup never kill unowned processes. |
| `RS-EXP-029` | Fixture files, marker, path, scenario IDs, manifest/config, and `4175` are absent from production imports and `dist`; `npm run build` remains the production build. |
| `RS-EXP-030` | No bearing, waypoint, destination, RP-004, RP-013, successor, later content, score, reward, identity, access, permission, authority, exam standing, external action, unavailable inference, or world response is mounted, dispatched, preloaded as reachable UI, or implied. |
| `RS-EXP-031` | Focused review/save/controller/sanitizer/adapter/route/UI/fixture tests stay within 30 seconds and map visibly to these acceptance IDs. |
| `RS-EXP-032` | Related RP-003 normal entry, Python, IE, protected reference, RP-002 return, City Threshold, App save/privacy, canonical frame, Tour, validator, full suite, build, budget, served, E2E, visual, cleanup, patch, and sync gates remain assigned to their owning stages. |

### Suggested focused test mapping

- `calibrationMarginReviewSaveSanitizer.test.js`:
  `RS-EXP-004`, `008-012`, `014-016`, `025-026`, `030`.
- `calibrationMarginReviewSaveController.test.js`:
  `RS-EXP-001-018`, `025-026`, `030-031`.
- `calibrationMarginReviewSaveNormalRoute.test.js`:
  `RS-EXP-001-002`, `006-018`, `024-026`, `030-032`.
- `calibrationMarginReviewSaveUi.test.js`:
  `RS-EXP-003`, `005-007`, `013`, `015-023`, `030`.
- `review-fixtures/td003-review-save/fixtureIsolation.test.js`:
  `RS-EXP-003`, `013-023`, `025-030`.

Computed layout, live focus movement, forced colors, reduced motion,
screen-reader speech, switch hardware, and platform storage behavior may be
claimed only from direct implementation/release evidence.

## Blueprint walkthrough

| Walkthrough | Result |
|---|---|
| Exact shell/treatment identity, predecessor, graph, landing, returns, hard stop | PASS |
| Five independent fixed-order conjuncts with no score or substitution | PASS |
| Provenance required, zero credit, in-group, fresh, non-durable | PASS |
| Save native-disabled/inert until prerequisites and provenance are exact | PASS |
| Seven modality, validation-before-consumption, one-hit action semantics | PASS |
| Exact key, nine-key object, three-key note, seven ordered ten-key records | PASS |
| Source-derived candidate, sanitize-before-write, atomic replace, strict read-back | PASS |
| Last-good byte stability and no-prior-record failure | PASS |
| Deterministic first-incomplete blank routing, clearing, retry, return, resume | PASS |
| No-action CM-50 with `replayedEvents=[]` and two known returns | PASS |
| One active group, focus/status/errors, `44px`, forced colors, reduced motion | PASS |
| Desktop/laptop/narrow/effective-200% world-first natural reflow | PASS |
| Invariant noninteractive SC-04 and temporary plate limitation | PASS |
| Eleven closed fixture scenarios and exact owned manifest | PASS |
| Storage/Tour/privacy/network/authority/exam/world boundaries | PASS |
| Copy/content/asset/implementation placeholders have one owner | PASS |

## Hard stop

The experience ends at exact no-action CM-50 plus only:

- `RETURN TO CIVIC COMPARISON`; and
- `RETURN TO CITY THRESHOLD`.

The Combat Engineer must not mount, dispatch, score, preload as reachable UI,
name, or imply:

- onward bearing, marker, waypoint, destination, invitation, or route;
- RP-004, RP-013, successor, or post-ending content;
- new learning, case, answer, score, observation, objective, threshold,
  evaluator, or evidence;
- reward, recognition, identity, authentication, access, permission,
  authority, official exam standing, or exam guarantee;
- Azure/Foundry request, live service, credential, endpoint, payload,
  external action, microphone, camera, file, audio, video, or sealed-source
  access;
- unavailable-source inference; or
- city acceptance, memory, judgment, refusal, invitation, physical response,
  geometry/material/light/sound/crop/route/maintenance/coupling/seal/clock
  change, Builder/Machine answer, or world response.

The hidden-lore vault remains unopened. The named protected PDF and training
directory remain uninspected and untouched. Martin's browser storage,
campaign save, cookies, profile, and session are never used to manufacture a
gated state.

## Variances and risks

### Variances

**None.**

### Implementation risks

| Risk | Blueprint mitigation |
|---|---|
| Five rows collapse into a score | one vertical ordered peer list, complete text per row, no total/progress/rank/outcome color |
| Provenance looks like a sixth achievement | keep it in the CM-40 group, zero-credit copy, no persistent marker or new row |
| Disabled save becomes a teasing hidden progression control | render it truthfully disabled only inside CM-40 with associated provenance-required reason; no onward control exists |
| Save appears to upload to the city | System/local ownership, no network or native receptacle, invariant world, direct transaction replacement |
| Client state forges the durable record | build only from strict checkpoint sanitizers and observation authority; reject client candidate objects |
| Write failure destroys a prior good note | capture opaque prior bytes and prove byte-identical stability on every failure class |
| CM-41 becomes a ceremonial confirmation | no action, modal, timer, chime, seal, animation, or paused reward screen; direct read-back replacement |
| Restore looks like proof of truth | state record integrity and expedition ownership only; preserve provenance and unavailable/no-action limits |
| Return looks newly unlocked | use exact known anchor names and existing return presentations; preserve save and no replay |
| City Threshold focus lands on an unrelated control | target the existing accepted SC-02-50 adjacent-survey/anchor control and verify in browser |
| Existing Python/IE checkpoint metadata differs | consume each strict sanitizer's immutable accepted records; never normalize by widening |
| Fixture becomes arbitrary state injection | fixed public recipes, compile-time allowlist, no URL/JSON/storage seam, exact manifest and production scans |
| Fixture process cleanup harms an unrelated process | preflight port, capture spawned PID, stop only that PID, block on unowned 4175 |
| Existing CSS has only 29 bytes headroom | reuse/consolidate existing extraction/custody-ledger styles; any overage is a Science/Mission variance |
| Temporary world plate weakens SC-04 specificity | preserve it identically and label as inherited non-master atmosphere; add no art/crop claim |

## Report envelope

- **Stage / agent:** Tactical Operations Specialist /
  `tactical_operations_specialist`
- **Shell and treatment:** `SS-RP003-REVIEW-SAVE-v1`; `CREATIVE LOCK`
- **Complete graph:** exact no-action IE-P3 -> fresh review -> fixed-order
  CM-40 five-conjunct review -> fresh required zero-credit provenance ->
  enabled fresh save -> CM-41 validate/atomic replace/read-back -> CM-50
  verified restore -> one of two known replay-free returns
- **Interaction decisions:** native semantic buttons, save native-disabled
  until provenance, validation before token consumption, one-hit actions,
  direct transaction replacement, no implicit Escape/cancel/retry
- **Focus decisions:** heading-first replacements, provenance-detail focus,
  first-incomplete source focus, CM-50 heading, existing verified return
  anchors
- **Responsive/accessibility decisions:** world-first DOM; wide `3fr/2fr`;
  laptop/narrow/zoom natural stack; vertical peer checklist; persistent
  labels; polite atomic status; direct descriptions; `44px`; forced-color,
  reduced-motion, and silent parity
- **Recovery/resume:** opaque last-good bytes, strict read-back, fresh
  provenance/save retry, exact first-incomplete order, transient states never
  resume, exact record restores CM-50 with no replay
- **Fixture:** eleven fixed public scenarios, no browser storage, exact
  Intelligence-owned launch manifest, PID/port discipline, production
  exclusion
- **World decision:** inherited invariant plate, one noninteractive semantic
  region, no outcome response
- **Placeholders:** final copy/provenance/asset ledger to Quartermaster;
  structural implementation/fixture to Combat Engineer; final surface polish
  to Image Specialist
- **Variances:** none
- **Validation:** Tier 1 blueprint trace and design-level state/focus/
  responsive/accessibility/privacy/save/recovery/fixture walkthrough pass
- **Protected boundaries:** verified as stated in the hard stop
- **Disposition:** `EXPERIENCE READY`

## Exact Combat Engineer handoff

- **Stage / agent:** Combat Engineer / `combat_engineer`
- **Shell:** `SS-RP003-REVIEW-SAVE-v1`
- **Starting authority:** synchronized `SHELL READY` shell, `CREATIVE LOCK`
  treatment, this `EXPERIENCE READY` blueprint, accepted TD-002 no-action
  IE-P3 landing, and source commit
  `409f3d6139147f357d19fadf11cccc271d0e8a79`
- **Starting runtime boundary:** normal route has strict Python and IE
  checkpoints through no-action IE-P3, inherited SC-04 presentation, known
  return anchors, and no TD-003 review/save controller, key, UI, fixture,
  package command, or manifest
- **Bounded objective:** implement the complete exact CM-40-CM-50 normal
  review/save/restore/return floor and the closed storage-free TD-003 fixture
  in one integration tranche without inventing player meaning
- **Permitted files:** only the implementation, test, fixture, package, App,
  entry, style, and TD-003 report envelope in
  `05-PLAYABLE-SLICE-SHELL.md`
- **Implementation priorities:** exact predecessor/five-conjunct derivation;
  fresh review/provenance/save; one active group; disabled save; exact
  sanitizer/schema/mapping; source-derived immutable records; atomic
  replacement; strict read-back; last-good bytes; first-incomplete recovery;
  privacy clearing; exact CM-50; both known returns; focus/status/reflow; Tour
  isolation; invariant world; fixture manifest/PID/exclusion
- **Fixture boundary:** use exactly the eleven public-state recipes and
  manifest above; no URL/hash/query/arbitrary JSON, production route/import,
  browser/campaign storage, or unowned process cleanup
- **Presentation boundary:** implement structural source order, native
  semantics, accessible classes, and bounded placeholder copy only; final
  wording/assets and aesthetic polish remain Quartermaster/Image Specialist
  work
- **World boundary:** preserve the inherited plate, crop, ambient behavior,
  and semantic region exactly; add no hotspot, mask, effect, sound, media, or
  state response
- **Validation tier:** Tiers 2-4, including focused/connected/full tests,
  readiness self-tests, build, JS/CSS/module/media caps, offline/network/
  privacy/storage/Tour separation, fixture/marker/port production exclusion,
  source/bundle/later-state scans, protected-reference smoke, served identity,
  clean patch/status, dedicated commit, push, and synchronization
- **Required disposition:** `FUNCTIONALLY COMPLETE`, `REVISE`, or `HOLD`
- **Push gate:** on honest `FUNCTIONALLY COMPLETE`, create one dedicated
  Combat Engineer commit, push `main`, and verify `HEAD == origin/main`
- **Stop boundary:** CM-50 and the two known returns; no bearing, RP-004,
  RP-013, successor, later content, authority, reward, exam standing,
  external action, unavailable inference, world response, hidden lore,
  protected user work, or Martin storage
- **Next recipient:** Quartermaster / `quartermaster`

If implementation requires changing the five-conjunct order, mapping/learning
IDs, note values, record schema/order, checkpoint truth, persistence
technology, transaction meaning, first-incomplete order, return destination,
focus destination class, accessibility requirement, performance cap, fixture
manifest/isolation, world behavior, or hard stop, record a shell variance and
return through Mission Captain to the earliest owning Colonel. Do not silently
reinterpret this blueprint.
