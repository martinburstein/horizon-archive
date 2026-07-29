# TD-006 Experience Blueprint - Interval Works

## Document control

| Field | Value |
|---|---|
| Stage | Tactical Operations Specialist |
| Agent ID | `tactical_operations_specialist` |
| Shell | `SS-RP006-INTERVAL-WORKS-v1` |
| Treatment | TD-006 `CREATIVE LOCK` |
| Slice | `TD-006-RP006-INTERVAL-WORKS-v1` |
| Address | `RP-006 / SC-07 / IW-00-IW-30` |
| Route | `TD006-RTA-001` |
| Entry | Exact released MF-30 / SC-06 |
| Hard stop | IW-30 |
| Output | `07-EXPERIENCE-BLUEPRINT.md` |
| Disposition | **`EXPERIENCE READY`** |

## Compatibility finding

The exact shell and Creative Treatment are compatible. This blueprint changes
no route, campaign position, canon, evidence threshold, record shape,
sanitation rule, scene identity, asset count, return, budget, or hard stop.
There is no Tactical variance request.

The experience rule is:

> One active owner presents one bounded responsibility. Physical relations can
> support relative order while cause, duration, authorship, identity,
> importance, purpose, destination, and closed contents remain unavailable.

## Stable semantic identities

### Owner regions

| Owner | Region ID | Heading prefix | Permitted responsibility |
|---|---|---|---|
| `PILOT` | `iw-owner-pilot` | `PILOT //` | route, provisional note, save, return |
| `SCENE` | `iw-owner-scene` | `SCENE //` | visible physical facts only |
| `SYSTEM` | `iw-owner-system` | `SYSTEM //` | provenance, validation, recovery, persistence |
| `BUILDER WORK` | `iw-owner-builder-work` | `BUILDER WORK //` | incomplete Python over sanitized replicas |
| `TEACHER / COURSE` | `iw-owner-course` | `TEACHER / COURSE //` | neutral speech-capability practice |

Exactly one owner region is active and rendered as the current
`aria-labelledby` group. Replacement unmounts the prior owner group and clears
its private/transient fields. The world region is descriptive background and
never owns a score, answer, route, save, or response.

### Headings and focus targets

| State/group | Heading ID | Default focus |
|---|---|---|
| MF-30 route choice | existing released MF-30 heading | existing heading |
| IW-00 orientation | `iw00-orientation-heading` | heading |
| IW-10 observations | `iw10-observations-heading` | heading on entry; first incomplete action thereafter |
| Python primary | `iw20-python-primary-heading` | learner editor |
| Python repair | `iw20-python-repair-heading` | heading, then first invalid field |
| Python trace | `iw20-python-trace-heading` | first unanswered trace field |
| Python transfer | `iw20-python-transfer-heading` | blank learner editor |
| Speech primary | `iw20-speech-primary-heading` | first unanswered case/dimension |
| Speech repair | `iw20-speech-repair-heading` | first missed case/dimension |
| Speech retrieval | `iw20-speech-retrieval-heading` | first unanswered case/dimension |
| Speech transfer | `iw20-speech-transfer-heading` | first unanswered blank case/dimension |
| Direction explanation | `iw20-direction-heading` | explanation control |
| Causation explanation | `iw20-causation-heading` | explanation control |
| Conjunctive review | `iw20-review-heading` | heading |
| Save confirmation | `iw20-save-heading` | save action |
| Save recovery | `iw20-save-recovery-heading` | heading, then retry or return |
| IW-30 restore | `iw30-restore-heading` | heading, always |
| IW-30 return | `iw30-return-heading` | heading when the return group replaces restore |

Every error uses a persistent field-associated message and the single polite
atomic live region `iw-polite-status`. Status replacement is atomic; messages
do not queue, repeat, or announce world changes.

### Status namespace

All status IDs begin `td006:` and end in one stable result token:
`ready`, `recorded`, `required`, `miss`, `retry-blank`, `passed`,
`review-ready`, `saving`, `committed`, `rolled-back`, `rollback-unverified`,
`restored-no-replay`, `returned`, or `no-effect`. Status never names a score,
rank, reward, permission, recognition, unlocked route, Builder judgment, or
world response.

## Complete state and replacement graph

```text
exact MF-30 / SC-06
  ├─ released Manyfold Return action ───────────────> exact released behavior
  ├─ released City Threshold action ────────────────> exact released behavior
  ├─ optional continuation notation ────────────────> same MF-30 / SC-06
  └─ fresh valid TD006-RTA-001 token
       └─ IW-00 orientation / SC-07 panorama
            ├─ early return Manyfold ───────────────> exact MF-30 / SC-06
            ├─ early return City ───────────────────> existing City anchor
            └─ inspect
                 └─ IW-10 / SC-07 cross-section
                      ├─ four equal observations in any of 24 orders
                      ├─ revisit ───────────────────> Recorded; no advance
                      ├─ unsupported/duplicate ─────> no advance; first incomplete
                      └─ all four
                           └─ IW-20 Python primary
                                ├─ miss -> blank answer-free repair -> same form
                                └─ pass -> trace
                                     ├─ miss -> blank answer-free repair -> trace
                                     └─ pass -> blank transfer
                                          ├─ miss -> blank repair -> transfer
                                          └─ pass -> speech primary
                                               ├─ miss -> local blank repair
                                               └─ pass -> retrieval
                                                    ├─ miss -> local blank repair
                                                    └─ pass -> blank transfer
                                                         ├─ miss -> local blank repair
                                                         └─ pass -> direction explanation
                                                              -> causation explanation
                                                                   -> conjunctive review
                                                                        -> explicit save
                                                                             ├─ verified commit -> IW-30
                                                                             └─ verified rollback -> first incomplete / retry

exact valid RP-006 reload ──────────────────────────> IW-30 / SC-07 panorama
missing, invalid, contaminated, or unsaved RP-006 ─> exact MF-30 / SC-06
IW-30 return Manyfold ──────────────────────────────> exact MF-30 / SC-06
IW-30 return City ──────────────────────────────────> existing City anchor
```

No observation is first or final in meaning. Completion order is never saved.
The world, crop family, audio, effects, and monotonic ambient clock do not
change as evidence accumulates.

## State, component, and semantic map

| Phase | Active owner | World role / crop | Content component | Action component | Completion condition |
|---|---|---|---|---|---|
| MF-30 | `PILOT` | released SC-06 | released route-choice copy | independent native buttons | exact route intent only |
| IW-00 | `SYSTEM` then `PILOT` replacement | `SC-07-PANORAMA-MASTER` / `sc07-panorama-orient` | provenance, interpretation limits, replica-only boundary, returns | `INSPECT MATERIAL RELATIONS` | deliberate inspect |
| IW-10 | `SCENE` | `SC-07-CROSSSECTION-MASTER` / `sc07-crosssection-all` | one shared physical-fact summary and four equal peers | four native buttons | four unique facts |
| IW-20 Python | `BUILDER WORK` | panorama / `sc07-panorama-work` | sanitized groups, incomplete source, result or local repair | submit, retry, continue | three strict records |
| IW-20 speech | `TEACHER / COURSE` | panorama remains outside neutral course surface | one neutral form at a time | submit, retry, continue | three strict records |
| IW-20 explanations | `TEACHER / COURSE` | invariant panorama | one explanation at a time | submit, retry | both independent records |
| IW-20 review/save | `PILOT`, then `SYSTEM` replacement | panorama / `sc07-panorama-review` | four owner-separated sections and exact record preview | review, save, retry/return | strict committed read-back |
| IW-30 | `SYSTEM`, then `PILOT` return replacement | panorama / `sc07-panorama-restore` | compact read-only bounded note | two exact returns | return intent |

The DOM keeps a stable top-level order: skip link, application heading, world
figure, current owner region, one status region, current action group, safe
return group. On narrow and effective-200 layouts the same nodes reflow; they
are not duplicated or reordered with CSS.

## MF-30 independence and route token convergence

The new route is a peer, not a successor emitted by notation or scenery:

| Choice | Owner | Effect | Must remain independent from |
|---|---|---|---|
| released Manyfold return choice | existing released owner | existing released effect | TD-006 |
| released City Threshold return | existing released owner | existing released effect | TD-006 |
| optional continuation notation | `PILOT` | local Recorded/inert state | route, SC-07, evidence |
| `TD006-RTA-001` | `PILOT // EXPEDITION NAVIGATION` | one transient IW-00 mount | notation, continuation, scenery, history |

All seven modalities dispatch the same semantic activation:
`pointer`, `touch`, `enter`, `space`, `switch`, `speech`, and
`screen-reader`. Before consuming the opaque fresh token, the controller
validates campaign mode/Tour rejection, canonical TD-005 raw/object equality,
unchanged TD-004 bytes, MF-30/SC-06 identity, sanitation, sole active owner,
exact route/source/target/group/action, modality allowlist, and token
freshness. Only a valid action consumes once. Invalid, stale, pre-consumed, or
wrong-owner events stay at MF-30 and focus its heading. A duplicate after
accepted transition is a no-op. Return or interruption requires fresh intent.

## Scene, crop, hotspot, and alt matrix

### Resolver matrix

| State | Scene | Role | Crop | Alt contract |
|---|---|---|---|---|
| MF-30 normal/noted/invalid TD-006 | SC-06 | released role | released crop | exact released SC-06 alt |
| invalid TD-005/TD-004 | released recovery | released role | released crop | released recovery alt |
| IW-00 | SC-07 | panorama | `sc07-panorama-orient` | exposed nested works, opaque interval, continuous phase, maintenance, destinationless service path; no history claim |
| IW-10 partial/complete | SC-07 | cross-section | `sc07-crosssection-all` | underlay/overlay, crossing repair, covering deposit, changed vane, continuous phase, opaque interval/bypass, compatible material contacts |
| IW-20 all groups/failures/save | SC-07 | panorama | `sc07-panorama-work` | same invariant exposed works; expedition work is separate and causes no change |
| IW-30 valid restore | SC-07 | panorama | `sc07-panorama-restore` | same invariant works; restored local note does not establish cause, duration, authorship, identity, purpose, or contents |
| unsaved/invalid RP-006 reload | SC-06 | released role | released crop | exact released SC-06 alt |
| Manyfold return | SC-06 | released role | released crop | exact released SC-06 alt |
| City return | existing City | existing role | existing crop | existing accepted alt |

SC-07 is impossible before route acceptance or strict valid restore. Alt text
does not include action instructions, chronology, cause, correct/original,
damage/progress, identity, importance, access, or purpose.

### Registered hotspot geometry

Coordinates are normalized percentages of the cross-section source and remain
review registrations until Image supplies final masters. Combat implements the
named regions and Image may make bounded registration corrections without
changing their relative equality or semantic ownership.

| Zone | Normalized box `(x,y,w,h)` | Accessible name |
|---|---|---|
| `OVERLAP-CROSSCUT-ORDER` | `10,18,34,31` | Inspect the underlay, overlay, crossing repair, and covering deposit |
| `CHANGED-PERSISTENT-PAIR` | `51,16,35,29` | Compare the changed branch form with the continuous surrounding interface |
| `CLOSED-INTERVAL-BOUNDARY` | `14,56,34,27` | Inspect the opaque interval boundary and external bypass |
| `LAYERED-STEWARDSHIP-ASSEMBLY` | `54,54,33,29` | Inspect compatible foundation, adaptation, repair, deposition, and current contact |
| `SANITIZED-RECORD-COUPLING` | `42,82,17,12` | Replica-only coupling; no live read or control |

The four observation controls are native buttons in one fieldset-like semantic
group. Image hotspots are supplementary pointer targets mapped to the same
actions, never the only controls. Each remains at least `44 x 44 CSS px`.
Every crop retains all four current zones; narrow crops use contained
object-position plus the full textual controls rather than hiding evidence.

## Four equal any-order observations

| Frozen ID | Physical fact recorded | Interpretation limit |
|---|---|---|
| `overlap_crosscut_relative_order` | underlay beneath overlay; repair crosses both; deposit covers repair | relative order only; no date, duration, cause, author, or purpose |
| `changed_persistent_feature_pair` | one branch form differs while surrounding geometry and one phase continue | change is not progress/damage; continuity is not identity/importance |
| `closed_interval_unavailable` | opaque laminate bounds an interval while an external interface bypasses it | unavailable evidence, never a lock, route, reward, or access request |
| `layered_stewardship_visible` | foundation, adaptation, repair, deposition, and current contact are compatible | visible care without institution, doctrine, ownership, or intent |

All buttons share geometry, typography, border weight, state copy, and DOM
level. Initial state is visibly `Available`. Activation becomes visibly
`Recorded` with text plus border/icon shape; it does not disable the button,
move it, brighten the world, increment a total, or animate accumulation.
Reactivation returns `Recorded; no new evidence`. Unsupported input advances
nothing and focuses the canonical first incomplete ID in the table above.
After the fourth unique observation the owner group is replaced directly by
Python; no “final observation” celebration appears.

## Learning presentation and token convergence

### Python `PY-013`

One `BUILDER WORK` owner group replaces forms in this exact order:

1. primary incomplete fragment;
2. local answer-free remediation only for missed dimensions;
3. delayed closed-note trace covering import, module, helper, input/output,
   source order, explicit gap, and `cause=None`;
4. genuinely blank transfer fragment.

Primary, trace, and transfer each require strict `8/8`. The submitted source
must import `itertools` and call
`itertools.chain.from_iterable(record_groups)` exactly once. Supplied wrapper
and groups are visible as unscored, sanitized, precomputed replicas. Sorting,
reversing, mutation, hardcoding, gap filling, live reads, primary reuse, or
inference of cause/duration/authorship/category/truth/purpose fails closed.
Each retry replaces learner source and feedback with a blank form; only an
answer-free dimension hint persists. Execution output stays in the expedition
surface and cannot change SC-07.

### Speech `RP006-SPEECH-01 / AI901-D1-O6`

One visually neutral `TEACHER / COURSE` group replaces:

1. primary four cases by input/output direction, strict `8/8`;
2. per-case/per-dimension answer-free repair for actual misses;
3. delayed retrieval two cases, strict `4/4`;
4. genuinely blank transfer four cases, strict `8/8`;
5. input/output-direction explanation; and
6. transcript-order-does-not-prove-causation explanation.

The course surface contains no SC-07 crop, material geometry, layer/repair/gap
icon, scene sound/motion, Builder referent, route, story sentence, or deciding
signal. It states offline course authorship, no external action, no Microsoft
or exam authority, and no guarantee. Each miss leaves every other owner
unchanged and replaces only the failed form with a wholly blank retry.

### Evidence independence

The controller holds twelve independent completion responsibilities:
four observations, Python primary/trace/transfer, speech
primary/retrieval/transfer, direction explanation, and causation explanation.
No aggregate score exists. Route, scene, order, sound, focus, modality,
timing, Tour, hints, confidence, execution display, review, save display, and
story state mint zero learning evidence.

## Conjunctive review and exact preview

Review mounts only when all twelve responsibilities are strict and finalized.
It presents four non-scoring sections:

1. `SCENE // RECORDED PHYSICAL FACTS` - four observations;
2. `BUILDER WORK // SANITIZED REPLICA PRACTICE` - three records;
3. `TEACHER / COURSE // SPEECH CAPABILITY PRACTICE` - three records plus two
   independent explanation records;
4. `PILOT // BOUNDED EXPEDITION NOTE` - interpretation limits and save intent.

No section displays a percentage, points, meter, badge, grade, rank, world
verdict, or completion spectacle.

The read-only preview shows the exact ordered durable shape:

```text
version, packetId, mappingId, checkpoint, continuation,
cityStateDelta, externalStateDelta, successor, note, evidence

note:
observations, relativeOrder, changed, persistent, unavailable,
stewardship, replicas, gap, cause, purpose, destination
```

`observations` contains the four frozen IDs once in canonical order,
irrespective of inspection order. Values are exactly:
`exposed_source_order_preserved`, `one_visible_change_observed`,
`one_feature_persists`, `closed_interval_unavailable`,
`layered_stewardship_observed`, `sanitized_precomputed_only`, and
`explicit_unavailable_record`; `cause`, `purpose`, and `destination` are null.
The eight evidence records appear in the shell order. Preview excludes source,
answers, cases, feedback, prompts, private notes, identity, endpoints,
requests/responses, tokens, route/focus/modality/timing history, and inferred
meaning.

## Atomic save, rollback, restore, and returns

Save is an explicit Pilot action followed by a System transaction group:

```text
capture exact prior RP-006 bytes or verified absence
-> reject malformed prior without overwrite
-> capture exact TD-005 and TD-004 bytes
-> strict sanitize complete candidate
-> one replacement at dedicated RP-006 key
-> raw read-back + strict object read-back
-> canonical equality + unchanged predecessor proof
-> accept to heading-first IW-30
   OR restore prior bytes/absence -> verify rollback and predecessors
```

The save button is temporarily non-dispatchable while the single synchronous
transaction is active and exposes text `Saving local expedition note`.
Success replaces the group with IW-30 and announces only local verification.
Write throw, malformed read-back, predecessor change, invalid prior record, or
unverified rollback grants no progression or evidence. Verified rollback
focuses `iw20-save-recovery-heading`, identifies the local transaction failure,
and offers `RETRY LOCAL SAVE`, `RETURN TO MANYFOLD RETURN`, and
`RETURN TO CITY THRESHOLD`. Unverified rollback permits returns but never
retry/save until a fresh exact entry reconstructs safe state.

Exact valid reload mounts IW-30/SC-07, focuses `iw30-restore-heading`, restores
only the bounded note/evidence, clears all transient work, and replays nothing.
Missing, unsaved, invalid, or contaminated RP-006 clears RP-006 work, mounts
exact MF-30/SC-06, and requires fresh Pilot intent. Final returns reconstruct
exact released destinations write-free and replay-free. Optional notation, if
retained, is non-actionable and destinationless.

## Error, retry, cancel, and resume matrix

| Condition | Result | Focus |
|---|---|---|
| Tour | reject before storage | Tour heading |
| invalid predecessor | released recovery; no SC-07 | released recovery heading |
| invalid route envelope/token | MF-30 no effect | MF-30 heading |
| duplicate post-transition token | no-op | current heading/action unchanged |
| unsupported/duplicate observation | no advance | first incomplete observation |
| missing form field | no evidence | first invalid field |
| learning miss | local answer-free message; blank retry | repair heading then first field |
| cancel/early return | clear TD-006 transient work; exact return | destination heading |
| unsaved reload | clear work; exact MF-30 | MF-30 heading |
| invalid RP-006 restore | preserve predecessors; clear invalid RP-006; MF-30 | MF-30 heading |
| save failure + verified rollback | no progression; retry/return | recovery heading |
| save failure + unverified rollback | no progression/save; return only | recovery heading |
| exact restore | bounded note only; no replay | IW-30 heading |

## Responsive and accessibility contract

### Layouts

| Gate | World / interface geometry | Containment |
|---|---|---|
| `1920 x 1080` | `minmax(0, 1.55fr) / minmax(360px, .75fr)`; world dominant; interface right/lower | complete current group and action inside `100dvh`; no outer scroll |
| `1366 x 768` | world top `56-60%`; current interface bottom `40-44%`; compact two-column fields only inside owner | complete current action visible; no outer scroll |
| `390 x 844` | one natural column: world, owner heading/limit, content, status, actions, returns | document vertical scroll allowed; no horizontal escape |
| `768 x 900` effective-200 | same source order in one column; no side-by-side learning fields | text and controls reflow without clipping or horizontal escape |

Only narrow/zoom use document vertical scroll. Every owner, limit, field error,
status, recovery, save, and return remains in source order. Internal code and
record previews use wrapping, not page-width overflow. Touch/action targets
are at least `44 x 44 CSS px` with visible persistent labels.

### Forced colors, reduced motion, grayscale, and silence

- Forced colors use native buttons, system colors, explicit borders, visible
  focus, textual `Available`/`Recorded`, and no background-image-only control.
- Reduced motion uses direct group replacement, no smooth scroll, no parallax,
  no evidence animation, and `scroll-behavior:auto`.
- Grayscale preserves relations through material edge, depth, texture,
  outline, labels, and alt text; changed and persistent forms receive equal
  exposure.
- Silence loses no status, evidence, route, focus, or timing information.
- World audio/motion, if retained, is monotonic and invariant across every
  progress, failure, save, restore, and return state.

### Seven-modality walkthrough

Every action is a native semantic button or labeled native field submission.
Pointer hotspot and textual button dispatch the same action. Touch has no
hover prerequisite. Enter/Space activate once. Switch traverses the stable DOM
and activates once. Speech uses the persistent visible accessible name.
Screen-reader operation encounters the owner heading, evidence boundary,
interpretation limit, status, then actions in the same order. No modality
receives different evidence.

## Closed storage-free fixture

Combat creates `review-fixtures/td006-interval-works/` with a closed imported
manifest and named scenario factory. It accepts no URL/query, browser storage,
campaign save, arbitrary JSON, runtime injection, or external request.
Production imports and emitted output must contain no fixture marker.

Allowlisted scenarios cover route-ready/noted; invalid/stale/duplicate/Tour/
contaminated entry; IW-00; each observation plus all observed; every Python
blank/miss/repair/pass form; every speech blank/miss/repair/pass form; both
explanations; review; write/read-back/rollback/rollback-unverified failures;
IW-30; unsaved reload; early/final Manyfold; and City return.

The machine summary has two roots:

- `playerSurface`: target sizes, owner/heading/status, scene/alt, crop/hotspot,
  containment, focus, overflow, and action visibility measured only inside
  the player surface;
- `harness`: fixture selector/output measured separately and never included in
  player metrics.

An independent `documentContainment` result measures `scrollWidth`,
`clientWidth`, outer overflow, page/console errors, and local-only requests
for the full document. Human review remains mandatory for all four layouts,
forced colors, reduced motion, grayscale, and silence.

## Implementation acceptance matrix

1. Exact MF-30 route, returns, and notation remain independent; only valid
   `TD006-RTA-001` mounts zero-evidence IW-00.
2. SC-06/SC-07 resolver and alt matrix passes every normal, invalid, restore,
   reload, and return state.
3. All 24 observation orders converge; duplicates are idempotent; the world
   and environmental clocks are invariant.
4. Four controls remain equal under pointer, touch, Enter, Space, switch,
   speech, screen reader, forced colors, grayscale, reduced motion, and
   silence.
5. Python primary/trace/transfer are independently strict `8/8`, use
   `chain.from_iterable` exactly once, preserve order/gap/`cause=None`, and
   recover with blank answer-free retries.
6. Speech primary/retrieval/transfer are independently strict `8/8`, `4/4`,
   `8/8`; both explanations remain independent; course presentation has no
   scene answer channel.
7. No cross-credit exists among observations, Python, speech, explanations,
   presentation, navigation, save, Tour, timing, focus, modality, or story.
8. Review appears only on the complete conjunction and previews exactly ten
   top-level keys, eleven note keys, and eight ordered evidence records.
9. Sanitation rejects extra, reordered, false, partial, duplicate, forged,
   private, transient, inferred, or contaminated material.
10. Atomic replacement, exact read-back, predecessor-byte proof, verified
    rollback, no-effect failure, and replay-free heading-first restore pass.
11. Unsaved/invalid state returns to exact MF-30/SC-06 and requires fresh
    intent; only exact Manyfold and City returns exist.
12. Four layouts, targets, deterministic focus, status, overflow, forced
    colors, reduced motion, grayscale, silence, crops, hotspots, and alt pass.
13. Fixture roots and document containment are independent; fixture is closed,
    storage-free, local-only, and absent from production.
14. Exactly the panorama and cross-section runtime roles are referenced; no
    third image, new audio/font/video/source map/network payload exists.
15. Tour is storage-free and zero-credit; offline/no-authority/no-exam-
    guarantee and null world/city/external/successor behavior remain exact.
16. `PBA-TD006-v1` passes; IW-30 exposes no RP-007 route, later content,
    identity, authority, reward, response, purpose, or closed contents.

## Placeholders and downstream owners

| Placeholder | Owner | Exit requirement |
|---|---|---|
| normal controller, storage adapter, resolver, UI, CSS, tests, fixture | Combat Engineer | functional matrix passes |
| final player-facing copy and record labels | Quartermaster | copy stays inside semantic contracts |
| exactly two SC-07 runtime masters, derivatives sampled from masters, provenance | Quartermaster / Image Specialist | both roles accepted; no third image |
| final crop/hotspot registration and accessible alternatives | Image Specialist | all layout/parity reviews pass |
| independent release, variance classification, masterplan reconciliation | Intelligence Officer | `AS BUILT RELEASED`, `REVISE`, or `HOLD` |

## Variances and risks

Formal variances: **none**.

Primary risks remain chronology-by-layout, causal reading, changed-as-progress,
persistence-as-importance, interval-as-access, stewardship-as-institution,
observation hierarchy, Python as live history, scene leakage into speech,
ceremonial save, scene resolver leakage, and responsive crop privilege. The
state, owner, copy, resolver, parity, and test contracts above fail closed
against each risk.

## Protected boundaries

The blueprint opens no hidden lore and introduces no native chronology, cause,
duration, author, identity, importance, category, purpose, reward, permission,
access, authority, world response, closed contents, RP-007 route, RP-013,
successor, or post-ending content. It does not inspect or mutate Martin's
browser storage/campaign save or protected user files. Protected RP-006 code
remains reference-only.

## Report envelope

- **Stage / agent:** Tactical Operations Specialist /
  `tactical_operations_specialist`
- **Shell / treatment:** `SS-RP006-INTERVAL-WORKS-v1` / TD-006
  `CREATIVE LOCK`
- **Work completed:** exact state/component/semantic graph, owner replacement,
  route/token convergence, scene/alt/crop/hotspot matrix, four-observation
  equality, independent learning flows, review/schema preview, atomic
  recovery, focus, layout, modality, parity, and fixture contracts
- **Decisions locked:** stable IDs and DOM order; direct-replacement owner
  model; registered cross-section controls plus equivalent text buttons;
  non-color Available/Recorded state; deterministic first-incomplete focus;
  four exact review sections; two-root fixture metrics
- **Flexible downstream:** bounded copy refinement, implementation structure,
  final art coordinates/crops inside semantic registrations, optional-scope
  trimming in the authorized order
- **Validation:** Tier 1 blueprint trace and design walkthrough across state,
  action, focus, responsive, accessibility, privacy, scene, asset, fixture,
  and hard-stop requirements
- **Variances:** none
- **Files changed:** this blueprint, TD-006 metrics, synchronized handoff
- **Commit:** `PENDING_TACTICAL_OPERATIONS_COMMIT`
- **Synchronization:** local only
- **Disposition:** **`EXPERIENCE READY`**

## Exact Combat Engineer handoff

- **Stage / agent:** Combat Engineer / `combat_engineer`
- **Shell:** `SS-RP006-INTERVAL-WORKS-v1`
- **Starting authority:** this `EXPERIENCE READY`, exact shell and Creative
  Treatment, released MF-30/SC-06 normal implementation, protected RP-006
  reference-only code, current game/source/test/fixture structure, and
  `PBA-TD006-v1`
- **Bounded objective:** implement the complete normal IW-00 through IW-30
  functional slice behind one exact MF-30 route, including strict controller,
  persistence, UI, styles, tests, and closed fixture without final art
  invention
- **Permitted systems:** normal RP-006 entry/controller/storage/resolver/UI;
  minimal MF-30 integration; target-only styles; focused/related/full tests;
  closed fixture; build/readiness/budget evidence; TD-006 build report,
  metrics, and handoff
- **Mandatory behavior:** every acceptance item above, including seven
  modalities, all 24 orders, independent strict Python/speech/explanations,
  exact record/sanitation, atomic recovery, replay-free restore, exact returns,
  four layouts, parity, fixture isolation, and immutable predecessors
- **Asset posture:** use two explicit structural placeholders for
  `SC-07-PANORAMA-MASTER` and `SC-07-CROSSSECTION-MASTER`; do not generate or
  import final media and do not authorize a third image
- **Validation tier:** Tier 2 focused plus Tier 3 related, full suite,
  readiness validators, production build, leakage/patch/fixture checks, and
  current `PBA-TD006-v1` measurement
- **Stop boundary:** do not alter canon, learning contracts, exact record,
  asset count, released TD-005/TD-004 bytes, protected journey, final art,
  RP-007/RP-013/successor/post-ending content, hidden lore, or Martin's
  browser storage/campaign save
- **Required output:**
  `Production Pipeline/Skyscraper Test Drives/TD-006/08-FUNCTIONAL-BUILD-REPORT.md`
- **Required disposition:** `FUNCTIONALLY COMPLETE`, `REVISE`, or `HOLD`
- **Next recipient:** Quartermaster / `quartermaster`
