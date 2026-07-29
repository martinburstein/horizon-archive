# TD-007 Experience Blueprint - Braided Verge

## Document control

| Field | Value |
|---|---|
| Stage | Tactical Operations Specialist |
| Agent ID | `tactical_operations_specialist` |
| Shell | `SS-RP007-BRAIDED-VERGE-v1` |
| Shell disposition | `SHELL READY` |
| Creative treatment | TD-007 `06-PLAYABLE-SLICE-CREATIVE-TREATMENT.md` / `CREATIVE LOCK` |
| Slice | `TD-007-RP007-BRAIDED-VERGE-v1` |
| Address | `RP-007 / SC-08 / BV-00-BV-30` |
| Sole route | `TD007-RTA-001` |
| Exact starting commit | `7b113d642a7b5d63ca6e3cb15df77f8b8348abb3` |
| Validation tier | Tier 1 contract trace plus focused protected-reference regression |
| Disposition | **`EXPERIENCE READY`** |

This blueprint translates the issued shell and creative treatment into one
implementation-ready experience. It changes no route, state graph, evidence
threshold, record, persistence meaning, world fact, asset class, return, or
hard stop. It does not implement production code, fixture code, final copy,
CSS, or assets.

## Compatibility finding

The shell and treatment are compatible. The treatment's attention order,
landscape-first staging, and **association without consolidation** thesis fit
the shell's one-owner, equal-peer, strict-evidence, invariant-world contract.

The current released `IntervalWorks` controller/component supplies the
required reusable patterns: strict intent construction, one-hit dispatch,
one active group, heading/status/focus identities, a scene resolver, direct
world-image imports, native labelled controls, an internal-scroll panel,
forced-color/reduced-motion rules, and a storage-free fixture with product and
harness measurements. Combat must extend those patterns for RP-007 without
forking released TD-006 identities or importing
`BraidedVergeProtectedJourney.js` into production.

## Stable semantic identities

### Frozen public identities

| Purpose | Identity |
|---|---|
| Storage key | `horizon-archive-rp007-braided-verge-save-v1` |
| Record version | `rp007.braided-verge-save.v1` |
| Shell | `SS-RP007-BRAIDED-VERGE-v1` |
| Controller | `rp007.braided-verge-controller.v1` |
| Route controller | `td007.route-controller.v1` |
| Packet / mapping | `RP-007` / `RP007-A3-BRAIDED-VERGE` |
| Checkpoint | `braided_verge_complete` |
| Status region | `braided-verge-status` |
| Panorama role | `SC-08-PANORAMA-MASTER` |
| Contact-detail role | `SC-08-CONTACT-DETAIL-MASTER` |

### Active owner groups, headings, and primary focus targets

Exactly one row may be active. Replacing a row removes the prior row's
message, content, actions, errors, help, and private draft from the active
tree.

| Group ID | Owner | Heading ID | Default focus |
|---|---|---|---|
| `iw30_braided_route_choice` | `PILOT // EXPEDITION NAVIGATION` | `bv-route-choice-heading` | heading |
| `bv00_orientation` | `PILOT // FIELD ORIENTATION` | `bv00-orientation-heading` | heading |
| `bv10_observations` | `PILOT // FIELD OBSERVATION` | `bv10-observations-heading` | first Available peer, else chooser heading |
| `bv20_python_primary` | `BUILDER WORK // SANITIZED REPLICA` | `bv20-python-primary-heading` | `bv20-python-primary-editor` after heading entry |
| `bv20_python_trace` | `TEACHER / COURSE // METHOD TRACE` | `bv20-python-trace-heading` | `bv20-python-trace-first` after heading entry |
| `bv20_python_transfer` | `BUILDER WORK // SANITIZED REPLICA` | `bv20-python-transfer-heading` | `bv20-python-transfer-editor` after heading entry |
| `bv20_vision_primary` | `TEACHER / COURSE // CAPABILITY PRACTICE` | `bv20-vision-primary-heading` | `bv20-vision-primary-first` after heading entry |
| `bv20_vision_retrieval` | same | `bv20-vision-retrieval-heading` | `bv20-vision-retrieval-first` after heading entry |
| `bv20_vision_transfer` | same | `bv20-vision-transfer-heading` | `bv20-vision-transfer-first` after heading entry |
| `bv20_capability_boundary` | `TEACHER / COURSE // EXPLANATION` | `bv20-capability-heading` | `bv20-capability-field` after heading entry |
| `bv20_relation_boundary` | same | `bv20-relation-heading` | `bv20-relation-field` after heading entry |
| `bv20_repair` | owner of the failed form, rendered through `SYSTEM // PRIVATE-SAFE RECOVERY` | `bv20-repair-heading` | heading, then `bv20-retry-action` |
| `bv20_review` | `PILOT // EXPEDITION REVIEW` | `bv20-review-heading` | heading |
| `bv20_save` | `PILOT // LOCAL EXPEDITION RECORD` | `bv20-save-heading` | heading |
| `bv20_transaction` | `SYSTEM // LOCAL TRANSACTION` | `bv20-transaction-heading` | heading; actions temporarily absent |
| `bv20_save_recovery` | `SYSTEM // VERIFIED ROLLBACK` | `bv20-save-recovery-heading` | heading, then `bv20-save-retry-action` |
| `bv20_rollback_unverified` | `SYSTEM // TRANSACTION HOLD` | `bv20-rollback-unverified-heading` | heading; only safe returns |
| `bv30_restore` | `SYSTEM // RESTORED EXPEDITION NOTE` | `bv30-restore-heading` | heading, then saved controls |

### Atomic status namespace

One persistent `role="status" aria-live="polite" aria-atomic="true"` region
uses `braided-verge-status`. Every message is private-safe and has one stable
`data-status-id`:

- `td007:<group>:ready`;
- `td007:route:<reason>:no-effect`;
- `td007:observation:<observation-id>:recorded`;
- `td007:<form>:required`;
- `td007:<form>:remediation`;
- `td007:workspace:cleanup-failed`;
- `td007:review:ready`;
- `td007:save:committed`;
- `td007:save:<failure>:rolled-back`;
- `td007:save:rollback-unverified`;
- `td007:restore:no-replay`; and
- `td007:return:<target>:write-free`.

Status never exposes source, report text, filename work state, bytes, raw
answers, expected answers, private notes, identity, credentials, endpoints,
tokens, pointer/focus history, or diagnostics. Owner change is conveyed by the
new heading and owner label, not by a second live region.

## Complete state and replacement graph

```text
exact released IW-30 / SC-07
  -> iw30_braided_route_choice
      -- invalid / stale / duplicate / wrong owner / wrong action /
         wrong modality / private / Tour / interrupted --> same IW-30,
         no spend, heading focus
      -- invalid TD-006 dependency --> released MF-30 / SC-06 recovery
      -- fresh exact TD007-RTA-001 --> bv00_orientation / SC-08

bv00_orientation
  -- INSPECT BRAIDED EVIDENCE --> bv10_observations
  -- either safe return --> exact released target, write-free

bv10_observations
  -- any of five Available peers --> same group, textual Recorded,
     next Available peer focus, zero learning credit
  -- Recorded peer revisit --> same group, idempotent status
  -- fifth distinct peer --> bv20_python_primary
  -- unsupported / duplicate token --> same group, chooser focus

bv20_python_primary
  -- blank --> same group, first invalid field
  -- miss --> bv20_repair -> blank bv20_python_primary
  -- strict 8/8 + cleanup --> bv20_python_trace

bv20_python_trace
  -- blank/miss --> local recovery -> blank trace
  -- strict 8/8 --> bv20_python_transfer

bv20_python_transfer
  -- blank/miss/cleanup failure --> local recovery -> blank transfer
  -- strict 8/8 + cleanup --> bv20_vision_primary

bv20_vision_primary
  -- blank/miss --> local recovery -> blank primary
  -- strict 8/8 --> bv20_vision_retrieval

bv20_vision_retrieval
  -- blank/miss --> local recovery -> blank retrieval
  -- strict 4/4 --> bv20_vision_transfer

bv20_vision_transfer
  -- blank/miss --> local recovery -> blank transfer
  -- strict 8/8 --> bv20_capability_boundary

bv20_capability_boundary
  -- blank/miss --> local recovery -> blank explanation
  -- pass --> bv20_relation_boundary

bv20_relation_boundary
  -- blank/miss --> local recovery -> blank explanation
  -- pass --> bv20_review

bv20_review
  -- any missing conjunct --> deterministic first-incomplete group
  -- REVIEW INDEPENDENT RESPONSIBILITIES --> bv20_save

bv20_save
  -- fresh private-free SAVE --> bv20_transaction
bv20_transaction
  -- exact write/read-back + predecessor equality --> bv30_restore
  -- write/read-back/sanitize/equality failure + verified rollback
       --> bv20_save_recovery
  -- rollback/predecessor verification failure --> bv20_rollback_unverified

bv30_restore
  -- RETURN TO INTERVAL WORKS --> exact IW-30 / SC-07, no replay/write
  -- RETURN TO CITY THRESHOLD --> accepted anchor, no replay/write
  -- optional inert notation --> same state, zero evidence, opens nothing
```

Reload or interruption after route consumption but before verified save clears
all RP-007 work and reconstructs exact IW-30/SC-07. Invalid RP-007 restore
does the same. Exact valid RP-007 bytes alone mount heading-first BV-30.

## State, component, and action map

| Group | Component responsibility | Available semantic actions | Eligibility and replacement |
|---|---|---|---|
| IW-30 route choice | released Interval Works view plus one independent TD-007 route peer and unchanged released returns | `PILOT // FOLLOW EXPEDITION-MARKED ADJACENT SURVEY TO BRAIDED VERGE`; released returns | Exact normal IW-30, Pilot owner, strict predecessor bytes, fresh token, valid modality; accepted route alone mounts BV-00 |
| BV-00 | panorama, provenance, limits, orientation, safe returns | `INSPECT BRAIDED EVIDENCE`; both returns | Inspect is zero-credit and replaces orientation with chooser |
| BV-10 | one unordered semantic list of five observation buttons; optional registered detail view | five exact observation actions; both returns | Each Available peer records one physical note fact, not course evidence; fifth replaces group with Python primary |
| Python primary | supplied eight-line report/scaffold, persistent truthful workspace label, labelled blank editor | `VALIDATE APPROVED FILE-OPERATION PLAN`; returns | all required source checks and blank detection before token consumption |
| Python trace | eight labelled native selects over delayed closed-note trace | `SUBMIT METHOD TRACE`; returns | all eight choices present; strict 8/8 |
| Python transfer | fresh supplied report/scaffold, blank editor, truthful label | `VALIDATE FRESH FILE-OPERATION PLAN`; returns | no primary source/result/output prefills; strict 8/8 |
| Vision primary | four neutral fieldsets, each capability and deciding-signal select | `SUBMIT CAPABILITY PRACTICE`; returns | P01-P04 complete and strict 8/8 |
| Vision retrieval | two delayed neutral fieldsets | `SUBMIT RETRIEVAL`; returns | R01-R02 complete and strict 4/4 |
| Vision transfer | four distinct blank neutral fieldsets | `SUBMIT TRANSFER`; returns | T01-T04 complete and strict 8/8; no earlier prefill |
| Capability explanation | one labelled native choice | `SUBMIT CAPABILITY BOUNDARY`; returns | must state existing visual input selects vision/analysis and new prompt-created output selects generation |
| Relation explanation | one labelled native choice | `SUBMIT RELATION BOUNDARY`; returns | must reject unity, cause, coordination, ownership, and purpose inference |
| Repair | named failed public dimensions, answer-free guidance, blank-retry promise | `RETRY BLANK <FORM>`; returns | retry creates a new empty draft for failed owner only |
| Review | separate rows for five observations, three Python records, three AI records, two explanations | `REVIEW INDEPENDENT RESPONSIBILITIES`; returns | all thirteen owner rows complete; no total score or merged badge |
| Save | exact bounded preview and explicit local-only warning | `SAVE BOUNDED EXPEDITION NOTE`; returns | fresh private-free intent only after review |
| Transaction | strict transaction status only | none | rejects interaction until success or classified failure |
| Save recovery | rollback-safe explanation | `RETRY LOCAL SAVE`; returns | retry begins with no retained private draft |
| Rollback unverified | honest hold | both returns only | progression/save claim unavailable |
| BV-30 | panorama, restored bounded text, exact returns, optional inert notation | both returns; optional `RECORD DESTINATIONLESS CONTINUATION` | restore replays nothing; notation stays local, destination null, no route |

All action controls are native `button`, `select`, or `textarea` elements.
Unavailable actions are absent unless the player benefits from seeing the
dependency; a visible unavailable action uses `disabled`, explanatory text,
and a non-color border. Disabled controls never dispatch. No world image
pixel, decorative seam, caption, result, or status is an action.

## IW-30 independence and one-hit convergence

The released IW-30 note, Interval Works return, City Threshold return, and new
TD-007 route are peers owned by the Pilot. They do not imply one another.
`Braided Verge` remains an expedition label.

Before the route token is consumed, the route controller validates in shell
order: Tour rejection; exact one-time TD-006 adapter read; released sanitizer
and canonical raw/object equality; exact IW-30/SC-07; unchanged TD-005 and
TD-004 bytes; private/transient clearing; exact mode/shell/controller/packet/
group/owner/action/modality; opaque token shape; freshness. It then consumes
once and mounts BV-00 atomically.

Every modality reaches one semantic `activate(actionId, activationKind,
freshToken)` seam. Burst click, touch synthesis, key repeat, repeated speech,
screen-reader double activation, or reused token can yield at most one hit.
A rejected intent does not consume a future valid token.

## Scene, crop, hotspot, and alternative-text plan

### Resolver matrix

| Experience state | Scene role | Crop ID | Alternative-text role |
|---|---|---|---|
| IW-30 and every invalid route case | exact released SC-07 panorama | released crop unchanged | released TD-006 panorama alternative unchanged |
| invalid TD-006 dependency | released SC-06 recovery | released recovery crop | released recovery alternative unchanged |
| BV-00 | `SC-08-PANORAMA-MASTER` | `sc08-panorama-orient` | two distinct material continuities remain separately traceable through a vast shared region; no reaction or route opens |
| BV-10 chooser, continuities, association | panorama | `sc08-panorama-relations` | both continuities and recurrent exposed contacts remain structurally distinct and locally associated |
| BV-10 difference | `SC-08-CONTACT-DETAIL-MASTER` | `sc08-detail-difference` | one bounded neutral contact difference remains within the visible contact family |
| BV-10 order | contact detail | `sc08-detail-order` | one visible cross-cut supports relative order only |
| BV-10 junction/stewardship | contact detail | `sc08-detail-junction-stewardship` | one opaque closed junction has separate peripheral seams and a visible stewardship boundary; its interior remains unavailable |
| Python work | panorama | `sc08-panorama-work` | panorama alternative unchanged; interface separately names sanitized replica scope |
| AI-901 and explanations | panorama | `sc08-panorama-course` | panorama alternative unchanged; neutral course surface carries no scene cue |
| review/save/failure | panorama | `sc08-panorama-review` | panorama alternative unchanged; local transaction does not alter the world |
| exact BV-30 restore | panorama | `sc08-panorama-restore` | panorama alternative unchanged; bounded note is separately available as text |
| exact returns | exact accepted target scene | accepted crop unchanged | accepted target alternative unchanged |
| RP-008 or later | none | none | none |

The component exposes `data-scene-id`, `data-scene-role`, `data-crop-id`, and
`data-runtime-source-master`. Source, fixture, served build, regression, and
release evidence must resolve the same tuple. No state cross-fades between
masters; direct replacement preserves reduced-motion parity.

### Registered semantic regions

Coordinates are normalized source-master fractions and are art-registration
targets, not answer-bearing image maps:

| Region ID | Master | x / y / width / height | Semantic role |
|---|---|---|---|
| `sc08-region-continuities` | panorama | `.06 / .14 / .88 / .64` | both lineages enter and leave the view independently |
| `sc08-region-association` | panorama | `.16 / .24 / .66 / .46` | three or more irregular recurrent saddle contacts |
| `sc08-region-difference` | detail | `.08 / .19 / .28 / .52` | one offset but ordinary contact |
| `sc08-region-order` | detail | `.35 / .15 / .27 / .58` | exposed cross-cut/superposition relation |
| `sc08-region-junction-stewardship` | detail | `.63 / .16 / .31 / .62` | opaque junction, separate seams, bypass, stewardship strata |

Combat stores these regions as immutable registration metadata. The five
textual peer buttons remain the sole observation controls and reference the
corresponding region via `data-region-id`; image position is never needed to
activate or understand an observation. Quartermaster may refine crop numbers
only after registering actual masters without changing semantic coverage.
Image Specialist validates all crops at full resolution, grayscale, narrow,
and effective-200. A crop that removes either continuity or turns one peer
into a hero is a Tactical return, not an art-only discretion.

## Five equal any-order observations

Render one unnumbered list labelled `Five equal material observations`.
Source order is stable solely for assistive predictability and grants no
canonical observation order. Each peer has equal dimensions, typography,
target size, border weight, and visual priority.

| Observation ID | Button ID | Action meaning | Required complete-text limit |
|---|---|---|---|
| `distinct_continuities_trace` | `bv-observation-continuities` | record separately traceable ribbon and mantle | shared region is not shared identity |
| `recurrent_exposed_association` | `bv-observation-association` | record repeated local saddle contacts | recurrence is not coordination, communication, dependence, or unity |
| `bounded_contact_difference` | `bv-observation-difference` | record one bounded neutral difference | difference is not error, damage, correction, progress, or response |
| `crosscut_relative_order` | `bv-observation-order` | record relative order | order is not chronology, duration, authorship, intent, or cause |
| `closed_junction_stewardship` | `bv-observation-junction` | record opaque boundary and layered compatible stewardship | closure is unavailable evidence, not access; compatibility is not common ownership or purpose |

Each button contains a persistent observation label plus literal
`Available` or `Recorded`. Available uses a solid border; Recorded uses a
double border and remains enabled for idempotent textual review. Color, icon,
position, order, motion, brightness, sound, and detail-master selection do not
carry availability. All `120` permutations converge on identical evidence
eligibility and `bv20_python_primary`.

## PY-015 and memory-workspace flow

### Primary and transfer forms

Each form shows, in this order:

1. owner and heading;
2. the exact truthful label:

   > The course validator executes the approved file-operation plan against an
   > isolated session-only virtual temporary file. It does not execute arbitrary
   > Python or contact a live service.

3. supplied sanitized report rows and exact relative filename;
4. a labelled blank source editor;
5. interpretation limits (`junction=unavailable`, `unity=None`,
   `cause=None`, `purpose=None`);
6. private-safe help/error association; and
7. one submit action.

Primary uses `braided_relation_report.txt` and its exact eight ordered lines.
Transfer uses `contact_replica_note.txt`, its distinct exact eight ordered
lines, and a genuinely blank editor. Neither form may display restored output
before evaluation.

### Approved memory-workspace lifecycle

On a fully present, exact allowlisted source submission:

1. retain learner source only in the active controller/component draft;
2. statically validate exactly one `from pathlib import Path`, exact supplied
   relative filename, exact report text, exact one UTF-8 `write_text`, exact
   one UTF-8 `read_text`, exact comparison, required unknowns, and forbidden
   operations;
3. create a fresh unshared `Map`;
4. encode the supplied report once with `TextEncoder`;
5. add one entry under the exact relative filename;
6. read that entry once and decode with fatal UTF-8;
7. compare exact bytes and text;
8. return only the eight allowlisted booleans and public failed-check IDs; and
9. in unconditional `finally`, zero or replace byte buffers, delete the
   entry, clear the map, and drop source/report/restored references.

The visible lifecycle may say `validate`, `temporary write`, `read-back`,
`compare`, and `cleared`; it may not animate as disk, network, a native
terminal, arbitrary Python, Builder access, or world action. Lifecycle display
grants no evidence. Cleanup failure invalidates the whole attempt, announces
`The temporary workspace could not be verified as cleared. Private work was
discarded; retry starts blank.`, and replaces the group with recovery. No raw
diagnostic appears.

### Trace

The delayed trace is eight labelled native selects for Path object, exact
relative name, one write, one read, UTF-8, exact round trip, unavailable
junction, and unknown unity/cause/purpose boundary. No source or answer is
prefilled. A miss identifies only failed public dimension IDs.

## Independent AI-901 and explanation flows

The course panel is visually neutral and contains no SC-08 crop, ribbon,
mantle, saddle, order, junction, stewardship, color, sound, or motion cue.

- Primary: P01-P04, each with independently labelled `capability` and
  `deciding_signal`, strict `8/8`.
- Retrieval: R01-R02 after primary replacement, strict `4/4`.
- Transfer: T01-T04, a distinct genuinely blank form, strict `8/8`.
- Capability boundary: one separate explanation that existing supplied
  visual input selects vision/analysis while a prompt requesting new visual
  output selects generation.
- Relation boundary: one separate explanation that adjacency, recurrence,
  difference, or order proves none of unity, cause, coordination, ownership,
  or purpose.

No form prefills or finalizes another. Misses keep successful owners intact,
show only actual failed case/dimension IDs, offer answer-free guidance, and
return to a wholly blank retry for that form. Attempts are unlimited and
untimed.

## Evidence independence, review, and exact preview

The review renders thirteen separate rows:

1. five physical observation owners;
2. `PY-015 / primary`;
3. `PY-015 / trace`;
4. `PY-015 / transfer`;
5. `RP007-VISION-GENERATION-01 / primary`;
6. `RP007-VISION-GENERATION-01 / retrieval`;
7. `RP007-VISION-GENERATION-01 / transfer`;
8. capability-boundary explanation; and
9. relation-boundary explanation.

Each row says only `Complete` or `Incomplete`; there is no combined score,
percent, star, unlock, verdict, recognition, or world response. Review is
eligible only when all rows are complete. If a malformed controller reaches
review early, one System status announces incompleteness and focuses the
deterministic first-incomplete boundary:

Python primary -> trace -> transfer -> vision primary -> retrieval -> transfer
-> capability explanation -> relation explanation -> review -> save.
Observations precede this list and, if incomplete, focus the first Available
peer.

The save preview shows exact schema, order, and bounded values:

- ten root keys in shell order;
- fourteen note keys in shell order;
- five observation IDs exactly once in canonical record order;
- exact continuities/association/difference/order/junction/stewardship/
  replicas values and six null limits;
- eight evidence records in exact shell order; and
- each record's ten allowlisted fields only.

Preview omits attempt internals, raw source, report, filename work state,
answers, feedback, focus, tokens, diagnostics, identity, and all denied
material. It labels the result `Local expedition record only - no world,
route, service, Microsoft, exam, or authority effect.`

## Save, recovery, restore, and returns

### Atomic transaction

After fresh save intent, replace the action group with the System transaction
group. Retain prior RP-007 bytes or verified absence; snapshot TD-006,
TD-005, and TD-004 raw bytes; sanitize the complete candidate in memory;
reject before write unless every conjunct and allowlist passes; replace the
dedicated RP-007 key once; read raw bytes once; parse/sanitize and require
canonical byte equality; then prove every predecessor string unchanged.

Only after all checks pass:

- clear all private/transient work;
- announce one local commit status;
- replace with heading-first BV-30;
- expose only saved bounded text and exact returns; and
- replay no earlier event.

### Failure matrix

| Failure | Status | Focus / action | State effect |
|---|---|---|---|
| blank required field | private-safe required message | first blank labelled control | no token/evidence |
| unsupported or contaminated field | rejected message | first invalid control | draft cleared for that owner |
| scored miss | actual failed public IDs only | repair heading -> blank retry | other owners preserved |
| memory cleanup failure | `workspace:cleanup-failed` | repair heading -> blank retry | attempt invalid; all file-work references cleared |
| wrong/duplicate/stale token | no-effect message | current heading/chooser | no future valid token spent |
| interruption before route consumption | no-effect IW-30 message | route heading | fresh choice remains |
| interruption/reload after BV-00, before save | unsaved-work-cleared message at IW-30 | IW-30 heading | all RP-007 transient work cleared |
| invalid RP-007 restore | invalid-save-cleared message at IW-30 | IW-30 heading | predecessors preserved; SC-08 absent |
| candidate sanitation/write/read-back/equality failure | rollback message only after verified rollback | recovery heading -> retry save | no progression |
| rollback or predecessor equality unverified | explicit `HOLD` status | hold heading; safe returns only | no save/route claim |

`Cancel` is represented by exact early return rather than retaining a dormant
modal. Every early/final return clears RP-007 private/transient work, tokens,
drafts, and same-session completion state, then reconstructs the accepted
target without write or replay.

### BV-30

BV-30 begins with `bv30-restore-heading`, the invariant panorama, a textual
bounded-note definition list, and separate saved evidence summary. The
optional destinationless notation is a local zero-evidence record with
`destination=null` and `routeOpened=false`; it never reveals or names a
destination. Only `RETURN TO INTERVAL WORKS` and `RETURN TO CITY THRESHOLD`
are present.

## Four responsive layouts

DOM source order is always: skip target -> world figure -> active owner panel
heading -> boundary/provenance copy -> active content -> status -> current
actions. Visual layout never changes semantic order.

| Review size | Layout |
|---|---|
| `1920 x 1080` DPR 1 | `100dvh` two-column shell, panorama/detail `64%`, panel `36%`, no outer scroll; panel has keyboard-reachable internal vertical scroll; world remains dominant |
| `1366 x 768` DPR 1 | `100dvh` two-row shell, world `56%`, panel `44%`; panel alone may scroll vertically; no horizontal escape; owner, status, and immediate actions remain reachable |
| `390 x 844` DPR 1 | natural one-column document; 16:9 world first, then one panel column; page may scroll vertically; no clipped owner/status/action, sticky obstruction, or horizontal escape |
| `768 x 900` DPR 1 effective-`200%` | same natural one-column source order; world 16:9; fields/actions stack at full available width; complete labels/errors/status/actions and no horizontal escape |

All panels use `min-width:0`; code/report text uses wrapping or owned internal
overflow without widening the document; textarea/select/button max width is
`100%`; long route and status copy wraps; image uses registered art-directed
`object-fit:cover` with approved `object-position`; all interactive controls
remain at least `44 x 44 CSS px`.

## Accessibility and modality contract

### Seven equivalent modalities

| Modality | Activation | Required convergence |
|---|---|---|
| Pointer | primary click on native control | same action ID and fresh one-hit token |
| Touch | tap; no gesture/dexterity requirement | same |
| Enter | native button/select activation | same |
| Space | native button activation | same |
| Switch | synthesized semantic activation | same |
| Speech | accessible-name invocation of visible action | same |
| Screen reader | virtual-cursor native-control activation | same |

No hover-only, drag, hold, multi-touch, canvas hit, timed, audio, or
pixel-coordinate action exists. Speech names use the complete persistent
visible label. Screen-reader announcements never duplicate owner/status
messages.

### Focus rules

- normal group replacement: new heading first, then first owned control;
- observation record/revisit: first Available peer, else chooser heading;
- blank submit: first blank labelled control;
- scored miss: repair heading, then blank-retry action;
- retry: new form heading, then first blank field;
- review rejection: deterministic first-incomplete owner;
- save confirmation: transaction heading while pending;
- verified save: BV-30 heading, then saved controls;
- recovery: recovery/hold heading;
- exact return: accepted target heading;
- invalid route: IW-30 route-choice heading.

Focus never enters a hidden, disabled, removed, harness, or world-image
element. `preventScroll` may be used only when it does not hide the target.

### Forced colors, reduced motion, grayscale, and silence

- Forced colors use system canvas/text/button colors, explicit solid borders,
  `outline:2px solid Highlight` focus, and double-border Recorded versus
  solid-border Available. Images may remain but never carry state alone.
- Reduced motion makes every state change a direct replacement, disables
  smooth scrolling and decorative animation, and uses registered stills with
  the same crop, alternative text, focus, status, and action set.
- Grayscale preserves ribbon/mantle distinction through silhouette, density,
  lamination, porosity, boundary shape, and complete text. Difference receives
  no warning tone; junction receives no reward/access treatment.
- Silence removes no status, relation, capability, correctness, availability,
  route, save, or return information. Existing ambience, if retained, is
  optional and non-semantic.

## Closed storage-free fixture

Combat creates:

```text
horizon-archive-game/review-fixtures/td007-braided-verge/
  index.html
  main.jsx
  ReviewBraidedVergeFixture.jsx
  scenarios.js
  fixture.css
  fixtureIsolation.test.js
  launch-manifest.json
  vite.config.js
```

Exact manifest control:

| Field | Value |
|---|---|
| `fixtureId` | `td007-braided-verge-v1` |
| `rootMarker` | `TD007_BRAIDED_VERGE_FIXTURE` |
| `host` | `127.0.0.1` |
| `port` | `4179` |
| `storage` | `frozen-in-memory-only` |
| `acceptsArbitraryState` | `false` |
| owner | `Intelligence Officer` |
| config path | `review-fixtures/td007-braided-verge/vite.config.js` |
| PID capture | exact spawned fixture process PID |

The allowlist contains exactly 56 product scenarios:

```text
iw30-route-ready
route-invalid-owner
route-invalid-action
route-invalid-modality
route-stale-token
route-duplicate-token
route-private-bearing
route-tour-closed
route-contaminated-predecessor
route-interrupted-before-consumption
bv00-arrive-idle
bv00-early-return-interval
bv00-early-return-threshold
bv10-none-recorded
bv10-continuities-recorded
bv10-association-recorded
bv10-difference-recorded
bv10-order-recorded
bv10-junction-recorded
bv10-four-recorded
bv10-all-recorded
bv10-recorded-revisit-idempotent
bv20-python-primary-blank
bv20-python-primary-miss
bv20-python-primary-cleanup-failure
bv20-python-primary-pass
bv20-python-trace-blank
bv20-python-trace-miss
bv20-python-trace-pass
bv20-python-transfer-blank
bv20-python-transfer-miss
bv20-python-transfer-cleanup-failure
bv20-python-transfer-pass
bv20-vision-primary-blank
bv20-vision-primary-miss
bv20-vision-primary-pass
bv20-vision-retrieval-blank
bv20-vision-retrieval-miss
bv20-vision-retrieval-pass
bv20-vision-transfer-blank
bv20-vision-transfer-miss
bv20-vision-transfer-pass
bv20-capability-explanation-blank
bv20-capability-explanation-miss
bv20-relation-explanation-blank
bv20-relation-explanation-miss
bv20-conjunctive-review
bv20-save-ready
bv20-save-write-failure
bv20-save-readback-failure
bv20-save-rollback-unverified
bv30-verified-restore
bv30-return-interval
bv30-return-threshold
reload-unsaved-to-iw30
reload-invalid-rp007-to-iw30
```

The harness has exactly two controls/outputs measured separately from product:
one scenario picker and one JSON summary. Product target/content counts exclude
those two; whole-document containment includes them. The summary exposes only
fixture ID, scenario, player-surface target count/minimum failures, product
scroll/client width, document containment, scene role/crop, active group,
owner, heading, status ID, focus target, observation IDs, form kind, evidence
count, sanitized-note boolean, page/console error counts, local request count,
and harness count.

The fixture accepts no query, hash, URL injection, arbitrary JSON, campaign
adapter, browser storage, cookie, IndexedDB, OPFS, Cache API, service worker,
network, clipboard, file picker, external path, or Martin-owned state.
Scenarios use public production interfaces plus fixed private-free in-memory
inputs; they never import reference answers into the rendered component.
Production source and `dist` must exclude every fixture path, ID, marker,
scenario string, port, config, manifest, and harness style.

Required review matrix crosses the 56 scenarios with the four representative
layouts as applicable, plus forced colors, reduced motion, grayscale, silence,
keyboard focus, all seven modality metadata paths, target size, crop
registration, alt identity, overflow, local-only requests, and runtime logs.
Captures are bounded and QA processes are shut down by exact PID.

## Implementation acceptance matrix

| ID | Acceptance |
|---|---|
| `BV-EXP-001` | Exact TD-006/TD-005/TD-004 bytes and released SC-07 identities remain unchanged. |
| `BV-EXP-002` | Sole exact `TD007-RTA-001` validates before one-hit consumption and mounts one zero-effect BV-00. |
| `BV-EXP-003` | Invalid, duplicate, stale, Tour, private, interrupted, wrong-owner/action/modality, and contaminated-dependency routes fail closed without spending a future valid token. |
| `BV-EXP-004` | One active owner group, heading, status, action set, scene tuple, and deterministic focus exists for every state. |
| `BV-EXP-005` | Five equal semantic peer controls remain any-order; all 120 permutations converge; revisit is Recorded/idempotent. |
| `BV-EXP-006` | Panorama/detail resolver, registered regions, exact role/alt matrix, and invariant worlds agree in source, fixture, build, served bytes, and regression. |
| `BV-EXP-007` | PY-015 primary and transfer each enforce exact relative-path eight-line UTF-8 one-write/one-read round trip and forbidden-operation checks. |
| `BV-EXP-008` | Fresh unshared memory workspaces clear in unconditional finally; cleanup failure invalidates, discloses no private material, and returns blank. |
| `BV-EXP-009` | The exact truthful approved-plan label is visible; no arbitrary Python, disk, live service, or world-action claim appears. |
| `BV-EXP-010` | Python trace is independent and strict 8/8; miss feedback is actual-failed-check-only and answer-free. |
| `BV-EXP-011` | AI primary 8/8, retrieval 4/4, transfer 8/8, and both explanations finalize independently with blank recovery and no scene cue. |
| `BV-EXP-012` | Observation, Python, AI-901, explanation, review, and save owners never cross-credit, erase, or prefill each other. |
| `BV-EXP-013` | Review requires the full conjunction and routes malformed early entry to the deterministic first-incomplete boundary. |
| `BV-EXP-014` | Preview and persisted record contain exact ordered ten root keys, fourteen note keys, eight evidence records, allowlisted values, and no denied/private material. |
| `BV-EXP-015` | Save performs one-key atomic replacement, exact canonical read-back, predecessor-byte equality, verified rollback, and explicit unverified-rollback hold. |
| `BV-EXP-016` | Exact valid restore is heading-first BV-30 with no replay; invalid/unsaved restore clears RP-007 and returns to exact IW-30. |
| `BV-EXP-017` | Early/final returns are write-free/replay-free and target only exact IW-30 or City Threshold. |
| `BV-EXP-018` | Seven modalities converge through one semantic action seam; every required target is at least 44 CSS px. |
| `BV-EXP-019` | Desktop, laptop, narrow, and effective-200 layouts preserve source order, complete labels/status/actions, crop meaning, and no horizontal escape. |
| `BV-EXP-020` | Forced colors, reduced motion, grayscale, and silence preserve owner, Available/Recorded, focus, error, meaning, action, and evidence parity. |
| `BV-EXP-021` | Fixture constructs exactly 56 allowlisted scenarios, uses frozen memory only, counts product versus two harness elements separately, and is absent from production. |
| `BV-EXP-022` | Demo Tour rejects before campaign storage, creates no route/token/evidence/save, and cannot reach BV-30. |
| `BV-EXP-023` | No network, account, service, authority, exam guarantee, external action, world delta, or live vision/generation/file action exists. |
| `BV-EXP-024` | Exactly two SC-08 runtime image roles are direct production imports; thirteen predecessor media identities remain unchanged; no third image/new media class enters production. |
| `BV-EXP-025` | Performance and `PBA-TD007-v1` caps pass without weakening learning, privacy, accessibility, recovery, or quality. |
| `BV-EXP-026` | Protected journey and Node-only utilities remain reference-only and absent from App/main/production bundles. |
| `BV-EXP-027` | No RP-008/later cue, RP-013, successor, post-ending content, hidden lore, unity/cause/purpose/identity/reward/access/authority/response/world effect appears. |
| `BV-EXP-028` | Focused controller/route/workspace/evidence/save/UI/fixture tests visibly map to these IDs and remain under 30 seconds. |

## Copy, content, asset, and implementation placeholders

| Placeholder | Downstream owner | Locked purpose |
|---|---|---|
| Owner headings, orientation paragraphs, observation descriptions, limit copy, statuses, recovery and return labels | Quartermaster | final player-facing structural copy inside exact meanings |
| Stable group/action/focus/status/scene/record identities and controller graph | Combat Engineer | production implementation; no semantic discretion |
| Native form options and neutral course cases | Combat Engineer from frozen RP-007 contract; Quartermaster checks presentation | exact scoring and non-answer-bearing display |
| `SC-08-PANORAMA-MASTER` source/runtime pair, provenance, alt | Quartermaster | invariant shared-region identity |
| `SC-08-CONTACT-DETAIL-MASTER` source/runtime pair, provenance, alt | Quartermaster | registered difference/order/junction/stewardship identity |
| Actual crop registration within the semantic coverage above | Quartermaster then Image Specialist | premium art-directed responsive fit without reweighting peers |
| Grade, focus visibility, crop polish, forced-color/reduced-motion/grayscale review | Image Specialist | presentation only |
| Closed fixture implementation and manifest tests | Combat Engineer | deterministic review surface, production-excluded |

Non-answer-bearing wording may be polished. Owner, action purpose, route,
graph, alt identity, observation/evidence meaning, file-work truth, record,
recovery, return, and hard stop may not change.

## Variances and risks

### Variances

**None.**

No shell or creative-treatment ambiguity requires return. The registered
region coordinates and responsive proportions are Tactical-owned staging
decisions inside the granted freedom; they change no world fact or evidence.

### Controlled implementation risks

- A literal clickable image map could make position into evidence. Use the
  single textual peer controls and registration metadata specified here.
- A visual file icon or progress animation could imply disk execution. Keep
  the truthful label persistent and lifecycle textual/non-semantic.
- A combined completion badge could mint cross-credit. Preserve thirteen
  separate review rows and no total.
- Restoring same-session completion after reload could create unsaved durable
  state. Reload before save must clear to IW-30.
- Narrow crops could hide one continuity or promote the different contact.
  Full text and registered crop review are mandatory.
- Fixture JSON can itself create horizontal escape. Harness style must wrap
  summary output; product and harness measurements remain separate.

## Tier-1 and focused validation

| Check | Result |
|---|---|
| Shell/treatment versions, route, graph, purpose, pacing, returns, hard stop traced | PASS |
| Every state has one owner, heading, status, action set, scene tuple, and focus rule | PASS |
| Five equal peers, all 120 orders, Recorded behavior, and zero-credit boundary specified | PASS |
| PY-015 primary/trace/transfer, memory workspace, cleanup, truth label, and recovery specified | PASS |
| AI-901 primary/retrieval/transfer and both explanations specified independently | PASS |
| Review, exact schema preview, atomic save, rollback, restore, and returns specified | PASS |
| Scene/alt/crop/registration matrix covers SC-07/SC-08 and every recovery/return | PASS |
| Four layouts, seven modalities, forced colors, reduced motion, grayscale, silence, target and overflow parity specified | PASS |
| Closed storage-free fixture has exact manifest, 56-scenario allowlist, and separate product/two-harness counts | PASS |
| Protected reference remains unimported; no runtime code, final CSS/copy, fixture, or asset created | PASS |
| Focused protected RP-007 suite | `13/13 PASS` |
| RP-007 mapping self-test | `PASS` |
| Patch whitespace check | `PASS` |
| Hidden lore unopened; Martin browser/save uninspected; protected user work untouched | PASS |

The AGENTS-named `foundry-azure-source-priority` skill was not present in the
available skill catalog or local skill directory. Tactical therefore did not
perform new source interpretation; it preserved the already source-verified
and shell-frozen RP-007 course contract without alteration.

## Protected boundaries

The exact hard stop is `BV-30 VERIFY + RETURN`, followed only by exact
write-free/replay-free Interval Works or City Threshold return and optional
inert destinationless notation. No RP-008 or later identity, route, state,
action, scene, announcement, focus target, or meaning may mount.

- `DO_NOT_READ_HORIZON_ARCHIVE_HIDDEN_LORE_VAULT.md` was not opened.
- Martin's browser storage, campaign save, cookies, profile, and session were
  not inspected or mutated.
- `Art Of No Mans Sky Book Scan.pdf` and `Simplilearn Training Files/` were
  not inspected, altered, staged, moved, deleted, or committed.
- TD-004 through TD-006 released files, routes, records, assets, returns, and
  persistence were not changed.
- No runtime code, asset, final copy, final CSS, browser fixture, image,
  network call, save, or push was produced.

## Report envelope

- **Stage / agent:** Tactical Operations Specialist /
  `tactical_operations_specialist`
- **Shell / treatment:** `SS-RP007-BRAIDED-VERGE-v1 / SHELL READY`;
  TD-007 creative treatment / `CREATIVE LOCK`
- **Complete graph:** IW-30 choice -> BV-00 -> BV-10 equal observations ->
  BV-20 independent Python/AI/explanations -> review -> atomic save -> BV-30
  -> exact IW-30 or City Threshold
- **Locked interaction decisions:** stable owners/headings/status/focus;
  native controls; one-hit seven-modality seam; textual Available/Recorded;
  deterministic first-incomplete and private-safe recovery
- **Locked presentation decisions:** one semantic source order; four layouts;
  registered panorama/detail roles and crops; non-color, reduced-motion,
  grayscale, silence, target, overflow, and alt parity
- **Recovery/resume:** unsaved reload clears to IW-30; exact verified save
  alone restores BV-30 without replay; verified rollback retries; unverified
  rollback holds
- **Fixture:** `td007-braided-verge-v1`, port `4179`, 56 product scenarios,
  two separately counted harness elements, frozen memory only, production
  excluded
- **Variances:** none
- **Files changed:** this blueprint, `TD-007/STAGE-METRICS.json`, and
  `NEXT_INSTANCE_HANDOFF.md`
- **Synchronization:** local Tactical commit only; no push authorized
- **Disposition:** **`EXPERIENCE READY`**

## Exact Combat Engineer handoff

- **Stage / agent:** Combat Engineer / `combat_engineer`
- **Operating scope:** functional construction only
- **Shell:** `SS-RP007-BRAIDED-VERGE-v1`
- **Starting authority:** this `EXPERIENCE READY`, exact shell, creative
  treatment, `VE-TD007-v1`, `PBA-TD007-v1`, and released TD-006
- **Build:** normal route/controller/adapter, memory workspace, strict
  sanitizer/transaction/restore, production UI, direct integration seams,
  semantic focus/status, scene resolver, tests, and the closed fixture exactly
  as specified
- **Reuse unchanged:** released TD-006 identities and adapter/sanitizer/scene
  patterns; TD-005 and TD-004 predecessor bytes and returns
- **Do not import:** `BraidedVergeProtectedJourney.js`, reference answers,
  Node file utilities, fixture code, hidden lore, or later content into
  production
- **Validation:** focused route/controller/workspace/learning/save/UI/fixture
  tests; related TD-004-TD-006 regression; full suite; production build;
  candidate budget and protected-source exclusion
- **Stop boundary:** do not create or integrate final SC-08 runtime images,
  final content polish, presentation polish, reveal, release reconciliation,
  master-plan updates, or push beyond the Combat gate
- **Required output:**
  `Production Pipeline/Skyscraper Test Drives/TD-007/08-FUNCTIONAL-BUILD-REPORT.md`
- **Required disposition:** `FUNCTIONALLY COMPLETE`, `REVISE`, or `HOLD`
- **Next recipient:** Quartermaster / `quartermaster`

Return any experience-meaning ambiguity to Tactical. Route shell ambiguity to
Mission, learning/privacy/save/accessibility/performance impossibility to
Science through Mission, route/campaign conflict to Operations, and canon or
world conflict to Colonel. Do not invent around a blocked contract.
