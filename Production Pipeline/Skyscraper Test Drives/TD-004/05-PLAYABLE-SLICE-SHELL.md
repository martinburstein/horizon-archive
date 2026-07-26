# TD-004 Playable Slice Shell

## Document control

| Field | Value |
|---|---|
| Stage | Mission Captain |
| Agent ID | `mission_captain` |
| Shell ID | `SS-RP004-THREE-CURRENT-v1` |
| Version | `v1` |
| Selected slice | `TD-004-RP004-THREE-CURRENT-v1` |
| Campaign address | `RP-004 / SC-05 / TR-00–TR-40` |
| Exact released predecessor | `TD-003 / SS-RP003-REVIEW-SAVE-v1 / CM-50 VERIFIED RESTORE` |
| Route contract | `TD004-RTA-001` |
| Product brief | `GDB-TD004-v1` |
| World baseline | `WNMP-TD004-v1` |
| Campaign floor stack | `CFS-TD004-v2` |
| Viability envelope | `VE-TD004-v2` |
| Production budget authority | `PBA-TD004-v1` |
| Operations correction | `e8b4b63a1ee7f9f82433d34bd24c5c611b082956` |
| Science revalidation | `644d07482723809468d69b7800e81faf7b5ae6e7` |
| Disposition | **`SHELL READY`** |

This is the sole Marine construction contract for TD-004. It authorizes one
normal, integration-sized journey from exact released TD-003 CM-50 into the
already-approved Three-Current Reach candidate, through one strict local
RP-004 save, verified restore, and existing-anchor returns.

Martin's route authorization is implemented here only as one Pilot-owned
navigation decision. It is not an invitation, permission, access grant,
reward, native route name, Builder/Machine message, world response, or general
authority to widen later campaign movement.

## Shell change history

| Revision | Result |
|---|---|
| `MC-TD004-HOLD-v1`, commit `555496a0b7ef7fb7db51e197b886c97d715f2503` | Mission correctly issued `HOLD — NO SHELL` because no current source authorized entry and the released production budget was exhausted. |
| `CFS-TD004-v2`, commit `e8b4b63a1ee7f9f82433d34bd24c5c611b082956` | Operations encoded Martin's exact route decision as `TD004-RTA-001`, preserving all prior returns, canon, and no-authority limits. |
| `VE-TD004-v2` and `PBA-TD004-v1`, commit `644d07482723809468d69b7800e81faf7b5ae6e7` | Science revalidated route, evidence, privacy, persistence, recovery, accessibility, responsive, offline, invariant-world, and measurable production constraints. |
| This revision | Fresh cross-discipline audit found no unresolved conflict. `SS-RP004-THREE-CURRENT-v1` is issued `SHELL READY`. |

The historical HOLD remains process evidence. It is superseded only for route
and budget disposition; its protected-work, no-invention, and no-silent-widen
principles remain binding.

## Source and build identity

### Strategic authorities

| Authority | SHA-256 or identity |
|---|---|
| Martin's route decision | Explicit approval for the documented exact TD-003 CM-50 to `RP-004 / SC-05 / TR-00–TR-40` transition |
| `AGENTS.md` | `CC76D86D21ADA75D3BC6A340D2BDE41B7FEC00678CB74A1F3D0E9EAD3A0953CD` |
| `NEXT_INSTANCE_HANDOFF.md` at Mission re-entry | `E1CA5DF6352E6CE71E954F7ADA9247FE75C86F2D420F4DF8BC860862F28E8B1B` |
| `SKYSCRAPER_AGENT_WORKFLOW.md` | `6C22C4C8660BAF5F854246F55AC825B5F52DD6A5D2311C1579EB1C80DF212A43` |
| `Skyscraper Agent Profiles/README.md` | `78170827BD7BA4D420EC985937810396C3ED241A81E9ED6F697B0D9C24666D13` |
| `Skyscraper Agent Profiles/mission-captain.md` | `50D65209277D569DB86D55DE34896ED453991E43F442B4FA75EDDE5A51744088` |
| `TD-004/01-GAME-DEVELOPMENT-BRIEF.md` | `4230A32C91991A523B47C1544AFE46885DE3230C89CED93A3E9C956E50B297C7` |
| `TD-004/02-WORLD-NARRATIVE-MASTERPLAN.md` | `1D6FB3D9C96619741DE569ADBA58770275BCC99C74F7777FFA8423E917F37EFE` |
| `TD-004/03-CAMPAIGN-FLOOR-STACK.md` | `B7231FD28407D9C938563B9C74D9A4E053CC2BDE519FC28ED0C69339E00D55C5` |
| `TD-004/04-VIABILITY-ENVELOPE.md` | `FB36C5F4BDD50C136CAA850F9574271418B98981C906AC036D0242CB4E022DB4` |
| `TD-004/04A-PRODUCTION-BUDGET-AUTHORITY.json` | `2010D10E3C24CCCA9E38CE2D9A10FBC878ACC36A0769101421930855FC3E9EC9` |
| historical `TD-004/05-PLAYABLE-SLICE-SHELL.md` HOLD | `0829767441BFBA68D4D020D7096305A78AB527226CC27650BB1BB97B420C571F` |
| `TD-003/11-AS-BUILT-RECONCILIATION.md` | `DEE140D5847A4B0705B25DA5FE2020E64D365C72AE69FCE3F996FFF999BEEFBD` |

### Current implementation and control authorities

| Authority | SHA-256 |
|---|---|
| `RP-004-three-current-reach.md` | `359A55ED21B1A5CD14F078BE970828E8E764C8604F4683050C70A55813C9CFAE` |
| `curriculum/readiness/RP-004/contract.json` | `5C5EED65E8CCF6EC8E8CF3B41DC9798027308B0BB4D4135155989E0638FAFFB5` |
| `curriculum/readiness/RP-004/validate_mapping.py` | `9D7256249F41AE1E3DE5A030E747C6E96DDA4BC0D188B9F75C0F46332922482D` |
| `CalibrationMarginReviewSave.js` | `D82E9F916B682D51F07C8B382610B4A7977FEC7813855F0DD4AFE08C255BECF7` |
| `CalibrationMarginReviewSave.jsx` | `A87D3B3F74A7E0B23251F809F6950199AC8D3A45A8986AC11422EC103D64C4F8` |
| `ThreeCurrentReachProtectedJourney.js` | `43F74ACBD0A20ADA37034038F279AF406362997833DEE4A9E3FD2796A5999A3A` |
| `App.jsx` | `2DF6EEF415AF51539A0E1274FB1D6E22B6C63973D8DF07E71C6DD1155089EA3C` |
| `scripts/validate_td004_budget.py` | `74C9B3C86DDBBBBE080BD129CF1391A3D291C496279DF0ED7EB1361BBFFDEAC0` |
| `Production Pipeline/PRODUCTION_READINESS_SPINE.md` at Mission entry | `4D6E6BAC597CA53B6628027A815E7E105D0D8A74F39CB2F877B542594CC48648` |

The accepted TD-003 build is the construction baseline:

- JavaScript `index-DHPBT_yG.js`, `1,195,380` bytes, SHA-256
  `D98AFEF9BD364F513523831E67114FEA800208AF15882DE4767D09BA3BF71DC3`;
- CSS `index-DD5Uz-s3.css`, `81,704` bytes, SHA-256
  `3CFAC5DF70551BEFDEAF24E257CCA4729356BE1FE2D15E8BB6D1EEC4002FA53B`;
- `179` production modules;
- `19,372,371` accepted runtime-media bytes across the exact eight-file hash
  set in `PBA-TD004-v1`; and
- released normal landing at exact no-replay CM-50 with two write-free
  returns.

Normal source does not yet import or expose RP-004/SC-05. The protected
journey remains unimported, storage-free, network-free reference evidence and
must not be promoted into normal production as proof. New normal route,
controller, persistence, interface, art, fixture, and release evidence are
authorized construction work.

## Player-facing purpose and emotional promise

From exact verified CM-50, the player may make one explicit expedition
navigation choice, enter a vast invariant working landscape, deliberately
observe three distinct physical form/handling relationships, record their
apparent common return without assigning purpose, complete strict independent
Python and AI-901 work on course-owned sanitized replicas, save one bounded
local note, verify it without replay, and return safely.

The emotional movement is from visible plurality to disciplined uncertainty.
The Pilot becomes more precise, not more authoritative. The world continues
independently. No success state congratulates, authenticates, invites,
rewards, grades the expedition as a whole, or speaks for the city, Builders,
Machine, Microsoft, Azure, Foundry, or an exam.

Target clean first play is `34–46 minutes`; mastered replay is `20–28
minutes`. Time, speed, modality, focus, confidence, hints, navigation,
presentation, save display, and Tour never create evidence or credit.

## Exact entry contract

### Predecessor record and mounted state

The sole normal entry predicate requires every one of these conditions:

1. mode is exact normal `campaign`, never Demo Tour;
2. the dedicated key `horizon-archive-rp003-review-save-v1` is read through
   the accepted TD-003 adapter;
3. the complete record passes the released strict sanitizer with no private
   or extra key;
4. version is `rp003.review-save.v1`;
5. predecessor shell is `SS-RP003-REVIEW-SAVE-v1`;
6. packet is `RP-003`;
7. mapping is `RP003-A3-CALIBRATION-MARGIN`;
8. checkpoint is `calibration_margin_complete`;
9. `continuation="continuation"`, `cityStateDelta=null`, and
   `successor=null`;
10. the exact three-value correspondence/difference/unavailable note passes;
11. seven ordered sanitized evidence records pass with distinct `PY-010` and
    `RP003-IE-01` learning identities;
12. the mounted state is exact no-replay `CM-50 VERIFIED RESTORE`;
13. private and transient work is cleared; and
14. no prior route, arrival, or later event is replayed.

The TD-003 record is immutable predecessor evidence. It is not permission and
does not auto-dispatch.

### CM-50 route-choice group

Exact CM-50 exposes three independent Pilot choices:

1. `PILOT // FOLLOW EXPEDITION-MARKED SURVEY TO THREE-CURRENT REACH`
   (`TD004-RTA-001`);
2. `RETURN TO CIVIC COMPARISON`; and
3. `RETURN TO CITY THRESHOLD`.

The new route must not replace, rename, delay, gate, visually demote, or write
through either released return. Every choice uses its own fresh one-hit
action. Choosing one cannot activate another.

### `TD004-RTA-001`

The exact route action requires:

- owner `PILOT`;
- action identity `TD004-RTA-001`;
- exact CM-50 active group;
- one approved activation kind: pointer, touch, keyboard Enter, keyboard
  Space, switch, speech, or screen reader; and
- one opaque valid, fresh, unused event token.

Validation order is fixed:

1. isolate Tour;
2. read and sanitize the full predecessor;
3. verify exact mounted CM-50;
4. validate mode, owner, active group, action, modality, and token;
5. verify token unused;
6. confirm private/transient clearing; then
7. consume the token and perform one transient in-memory transition to
   `TR-00 ARRIVE + ORIENT`.

One accepted intent creates exactly one arrival. It writes no TD-003 or
RP-004 record, grants no observation or learning evidence, replays no event,
changes no world/access/authority/external state, and leaves the exact TD-003
serialized bytes unchanged.

## State and transition contract

```text
exact no-replay CM-50 plus exact predecessor record
  -- fresh valid TD004-RTA-001 -->
TR-00 ARRIVE + ORIENT
  -- fresh ORIENT -->
TR-10 OBSERVE THREE RELATIONS
  -- all three deliberate observations, any of six orders -->
TR-20 TRACE APPARENT COMMON RETURN
  -- separate observed=true / purpose=None observation -->
TR-30 RELATE + SAVE
  -- strict PY-011 + strict independent RP004-WORKLOAD-01 -->
TR-30 BOUNDED REVIEW
  -- exact conjunctive review + fresh save intent -->
TR-30 ATOMIC SAVE
  -> reject/fail to first valid incomplete boundary with prior bytes intact
  -> or commit one exact local record and strict-read it back
TR-40 VERIFY + RETURN
  -> RETURN TO CALIBRATION MARGIN
  -> RETURN TO CITY THRESHOLD
  -> optional destinationless continuation record; route remains closed
```

Only one owner/message/content/action group and one visible heading may be
active at a time.

### TR-00 ARRIVE + ORIENT

- Owner: `SCENE`, with Pilot-owned navigation and System-owned availability
  status kept separate.
- Present one first-person SC-05 panorama with all three current/handling
  relationships and the apparent common return spatially legible.
- Arrival changes no geometry, current, light, sound cause, maintenance
  behavior, clock, route, access, or world state.
- `ORIENT TO THREE CURRENT RELATIONS` is explicit and zero evidence.
- Early return to Calibration Margin or City Threshold is permitted.

### TR-10 OBSERVE THREE RELATIONS

The exact observation IDs are:

```text
suspended_matter_porous_relation
cyclic_pressure_tensioned_relation
conducted_heat_jointed_relation
```

- The three controls are equal peers and may be completed in any of six
  orders.
- Each requires a fresh deliberate observation action.
- Replaying an already Recorded fact grants no second event or credit.
- Observation copy may state only visible physical correspondence.
- First-incomplete focus targets the first unrecorded relationship in stable
  semantic order, regardless of completion order.
- Observation creates no Python or AI-901 evidence.

### TR-20 TRACE APPARENT COMMON RETURN

- Available only after all three relationships are Recorded.
- The separate observation is exactly `observed=true`, `purpose=None`.
- The common return remains apparent, capped, and non-traversable.
- Reject purpose, destination, native-category, invitation, or Machine
  inference locally with answer-free boundary language.
- Completion creates no learning evidence and opens no route.

### TR-30 RELATE + SAVE

This checkpoint contains sequential, independently owned groups:

1. Python primary;
2. Python answer-free repair and wholly blank retry when needed;
3. delayed closed-note Python retrieval;
4. genuinely blank Python transfer;
5. AI-901 primary;
6. per-case/per-dimension answer-free repair and wholly blank retry;
7. delayed closed-note AI-901 retrieval;
8. genuinely blank AI-901 transfer;
9. separate modality-boundary explanation;
10. separate agentic-boundary explanation;
11. conjunctive bounded review;
12. fresh save intent; and
13. one atomic transaction plus strict read-back.

Every learner form starts genuinely blank in visible, semantic,
programmatic, and serialized state. A private answer or prior-form response
cannot carry into a retry, retrieval, transfer, explanation, review, fixture,
log, or durable record.

The review gate is exactly:

```text
three relation observations
AND apparent-common-return / purpose-unknown observation
AND finalized PY-011 primary + retrieval + transfer
AND finalized RP004-WORKLOAD-01 primary + retrieval + transfer
AND finalized modality explanation
AND finalized agentic explanation
AND provenance / no-live-control / no-external-action invariants
```

It is never a point total or general readiness verdict.

### TR-40 VERIFY + RETURN

- Mount only from an exact sanitized
  `three_current_reach_complete` record.
- Owner: `SYSTEM // RESTORED EXPEDITION NOTE`.
- Focus the TR-40 heading first.
- Show local record integrity, expedition ownership, three canonical
  relations, apparent-common-return/purpose-unknown meaning,
  sanitized-replicas-only provenance, independent learning identities, and
  no-live-control/no-authority limits.
- Set `replayedEvents=[]`; do not replay route, arrival, observation,
  learning, review, save, completion, sound, city, or world events.
- Returns are optional explicit navigation after completion, not completion
  evidence.

## Learning and evidence contract

### Python

- Identity: `PY-011 — Write loops`, reinforcement only.
- Prerequisite: full `L-03-02` primary and fresh-transfer mastery.
- Gate: exact `8/8` primary, failed-check-only answer-free remediation,
  delayed closed-note five-dimension loop trace, then genuinely blank exact
  `8/8` transfer.
- Learner ownership: one loop traverses three supplied sanitized replica
  dictionaries and appends one ordered result per supplied item.
- Supplied/unscored: sanitized inputs, bounded lookup data, output container,
  and common-return record shape.
- Hard failures include hardcoding, wrong count/order, live-source access,
  input mutation, forbidden operations, primary reuse, or purpose inference.

The shell references the frozen contract and validator. It does not reproduce
private expected source or answer values.

### AI-901

- Identity:
  `RP004-WORKLOAD-01 / AI901-D1-O4 — Identify AI workloads`.
- Prerequisites: `L-06-01` objective evidence and the applicable
  `L-04-01–L-04-04` and `L-05-04` mastery.
- Gate: exact `12/12` primary, per-case/per-dimension answer-free
  remediation, delayed closed-note exact `8/8` retrieval, genuinely blank
  exact `12/12` transfer, plus two separately scored explanations.
- The six course-authored workload families are generative AI, agentic AI,
  text analysis, speech, computer vision, and information extraction.
- The neutral course interface contains no SC-05 crop, physical current,
  corridor, material, color, sound, motion, symbol, Builder referent, or
  landscape-derived answer channel.

The authoritative cases, dimensions, thresholds, explanations, and answers
remain only in the frozen machine-readable contract and validator.

### Evidence firewall

Route entry, three physical observations, common-return observation, Python,
AI-901, review, save eligibility, and saved state remain separately owned.
Scenery, presentation, navigation, execution display, focus, accessibility,
confidence, timing, hints, returns, save/restore display, and Tour grant zero
observation or mastery evidence.

Python cannot satisfy AI-901; AI-901 cannot satisfy Python; neither can satisfy
scene observations; scene observations cannot satisfy either learning chain.

## Privacy, persistence, sanitation, and recovery

### Dedicated RP-004 identity

The local record uses:

```text
key = horizon-archive-rp004-three-current-save-v1
version = rp004.three-current-save.v1
packetId = RP-004
mappingId = RP004-A3-THREE-CURRENT-REACH
checkpoint = three_current_reach_complete
continuation = continuation
cityStateDelta = null
externalStateDelta = null
successor = null
```

The RP-004 key is separate from TD-003. No RP-004 read, write, failure,
rollback, clear, return, or restore may alter, remove, migrate, replace, or
reinterpret the verified TD-003 bytes.

### Exact top-level and note allowlists

The durable object contains exactly:

```text
version
packetId
mappingId
checkpoint
continuation
cityStateDelta
externalStateDelta
successor
note
evidence
```

`note` contains exactly:

```text
relations = [
  suspended_matter_porous_relation,
  cyclic_pressure_tensioned_relation,
  conducted_heat_jointed_relation
]
commonReturn = observed_purpose_unknown
correspondence = sanitized_replicas_only
purpose = null
```

The relation order is canonicalized exactly as above regardless of the six
accepted observation orders.

### Exact eight-record order

`evidence` contains exactly:

1. `PY-011 / primary`;
2. `PY-011 / retrieval`;
3. `PY-011 / transfer`;
4. `RP004-WORKLOAD-01 / primary`;
5. `RP004-WORKLOAD-01 / retrieval`;
6. `RP004-WORKLOAD-01 / transfer`;
7. `RP004-WORKLOAD-01 / modality_explanation`; and
8. `RP004-WORKLOAD-01 / agentic_explanation`.

Each record contains exactly:

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

Every required dimension is exactly true and every record uses the exact
RP-004 packet and mapping identities. A skill/objective ID cannot substitute
for the packet mapping.

### Absolute exclusions

Reject learner source, raw case answers, free-form reasoning, feedback,
private notes, identity content, credentials, endpoints, payloads, responses,
source content, exam-item text, external-action requests, route/event tokens,
focus/pointer history, diagnostics, Tour state, unavailable live material,
rendered UI, transient observations before save, and arbitrary extra keys.

### Transaction

The adapter must:

1. capture the last verified serialized RP-004 value or verified absence;
2. construct the candidate only from finalized sanitized sources;
3. strict-sanitize the entire candidate before any write;
4. serialize only the sanitized candidate;
5. perform one atomic replacement through the dedicated RP-004 key;
6. read the committed value through the same strict sanitizer;
7. require canonical sanitized read-back equality; and
8. expose only the frozen sanitized result.

A rejection, throw, unavailable/quota-limited storage, malformed read-back,
partial candidate, private field, stale token, Tour input, or equality failure
must leave the prior verified RP-004 serialized bytes byte-for-byte unchanged,
or preserve verified absence. TD-003 bytes remain independently unchanged.

### Clearing

Clear private/transient source, answers, choices, feedback, reasoning,
confidence controls, tokens, focus history, and diagnostics on rejection,
failure, retry, successful replacement, successful read-back, return, reload
sanitation, invalid recovery, and completion. Only bounded public reason codes
may survive transiently for accessible status.

### First-incomplete recovery and resume

Validation order is:

1. predecessor and route entry;
2. relation observations;
3. common-return observation;
4. Python primary, retrieval, transfer;
5. AI-901 primary, retrieval, transfer, modality explanation, agentic
   explanation;
6. provenance and no-external-action invariant;
7. bounded review; and
8. save transaction.

- Before a verified RP-004 save, reload returns to exact CM-50 and requires a
  fresh route intent.
- Separately persisted allowlisted learning evidence may restore only under
  its existing authority after fresh entry and only as a contiguous finalized
  prefix.
- Scene observations lost before save must be deliberately re-observed.
- Any gap routes to the first incomplete wholly blank scored boundary.
- Exact verified RP-004 resumes directly at no-replay TR-40.
- Recovery never prepopulates, downgrades, duplicates, recomputes,
  cross-credits, synthesizes entry, or replays an event.

## Permitted exits and hard stop

### CM-50 returns

The two released choices remain exact, independent, write-free, adapter-free,
and replay-free:

- `RETURN TO CIVIC COMPARISON`;
- `RETURN TO CITY THRESHOLD`.

They remain available beside the new route choice and preserve the TD-003
record.

### RP-004 returns

- `RETURN TO CALIBRATION MARGIN` clears unsaved RP-004 transient work and
  restores exact no-replay CM-50. Both known TD-003 returns and a new fresh
  RP-004 intent are then available.
- `RETURN TO CITY THRESHOLD` remains a direct write-free existing-anchor
  return.
- There is no direct RP-004-to-Civic-Comparison shortcut.
- A return consumes only its own fresh action, grants zero evidence/credit,
  writes no route state, and causes no world response.

### Destinationless continuation

After verified TR-40, an optional
`RECORD OUTBOUND PHYSICAL CONTINUATION` action may record only that a physical
relation continues beyond the visible reach. It must retain
`destination=null`, `routeOpened=false`, and `successor=null`. It is local
expedition notation, not a route, reward, promise, or RP-005 exposure.

### Absolute hard stop

The shell ends at TR-40 plus the approved returns and optional destinationless
record. Production, fixture, tests, copy, art, and presentation must not
mount, dispatch, preload as reachable UI, imply, name, or reveal:

- RP-005 or a destination beyond the visible reach;
- a traversable common return;
- RP-013, successor, post-ending content, or hidden lore;
- native purpose, category, author, audience, identity, judgment, reward,
  permission, access, authority, readiness verdict, or Machine relation;
- Builder/Machine/city invitation, acceptance, refusal, attention, or memory;
- live landscape, Azure, Foundry, service, credential, endpoint, request,
  payload, response, external action, or exam guarantee; or
- any physical geometry, material, current, corridor, junction, return,
  maintenance, coupling, light/sound cause, clock, route, or world response.

## Spatial, scene, interface, and ownership boundaries

### Fixed scene structure

- `SC-05` is one immense first-person working reach, not a human room,
  factory diagram, hallway, utility plant, screen, console, or portal.
- Three materially and structurally distinct relationships remain traceable:
  suspended matter/porous handling, cyclic pressure/tensioned handling, and
  conducted heat/jointed handling.
- The three remain visibly distinct before one apparent capped common return.
- The common return never reads as a doorway or travel control.
- Existing maintenance follows its own service boundaries and never
  approaches, tracks, acknowledges, helps, or judges the Pilot.
- The scene remains free of protagonist, hands, body, shadow, reflection,
  portrait, ship, readable Builder text, pseudo-writing, prior human trace,
  human ergonomics, face/eye motifs, and generic color-coded lanes.
- First-person maximum-quality cinematic photorealism and multiple plausible
  functional readings are mandatory.

### Interface structure

- The world is dominant; the active expedition group is a separate legible
  suit/course layer.
- Do not embed answer choices or English labels into world geometry.
- Three observation controls require structural/non-color distinction.
- Ownership prefixes remain explicit: `SCENE`, `PILOT`, `SYSTEM`,
  `BUILDER WORK`, and `901 TEACHER` may not be merged.
- Builder work may be represented only as the bounded executable fragment.
  English instructions, labels, feedback, safety limits, and assessment are
  expedition/suit/course mediation.
- System status never becomes Scene fact or native truth.

### World invariance

Across entry, orientation, observation, execution, miss, remediation, retry,
review, save, failure, restore, continuation record, and return, SC-04 and
SC-05 geometry, materials, current phase, corridor state, junctions, common
return, maintenance paths, coupling body, light/sound causes, and monotonic
environmental clocks remain unchanged.

## Accessibility, responsive, performance, and offline requirements

### Input, semantics, focus, and status

- Pointer, touch, keyboard Enter, keyboard Space, switch, speech, and screen
  reader converge on one semantic action.
- Validation precedes one-hit token consumption.
- Use one active owner/message/content/action group, one visible heading, and
  one polite atomic live status region.
- Use native controls, persistent labels, field-associated text errors,
  non-color state, deterministic status IDs, and visible focus.
- Initial entry and restore focus the active heading.
- Success focuses the next required group; failure focuses the first invalid
  or required control; return restores the destination anchor.
- Every required target is at least `44 x 44 CSS px`.
- Meaning never depends on color, motion, sound, position, texture, or timing
  alone.
- Forced colors preserve ownership, group, control, focus, disabled, error,
  completion, and link boundaries with system colors/borders.
- Reduced motion removes nonessential animation without removing state,
  action, announcement, spatial relation, or text equivalent.

### Responsive contract

- At exact DPR-1 `1920 x 1080`, the complete outer shell, dominant
  first-person world, current group, status, and all required actions fit
  without outer horizontal or vertical scroll.
- Exact DPR-1 `1366 x 768`, `390 x 844`, and `768 x 900` preserve containment,
  complete actions, labels, status, and focus; desktop/laptop retain world
  dominance where applicable.
- Narrow and effective-`200%` use natural semantic vertical reflow without
  page-level horizontal escape, clipped ownership, reordered evidence, or
  off-screen required action.
- No inner panel may conceal a required action at the exact desktop gate.

Human screen-reader speech, physical switch hardware, platform forced-color,
and native text-only `200%` remain direct-review limitations unless actually
exercised. Deterministic tests and emulation must not be described as human
hardware evidence.

### Production budget

Every candidate build must satisfy `PBA-TD004-v1`:

| Measure | Cap |
|---|---:|
| Aggregate all emitted JavaScript | `1,255,149` bytes |
| Aggregate all emitted CSS | `85,789` bytes |
| Production modules | `187` |
| New runtime media | `4,194,304` bytes, image-only |
| Total runtime media | `23,566,675` bytes |
| Production build | `<=60s` |
| Focused suite | `<=30s` |
| Complete E2E | `<=180s`, never overlapping build |
| Sampled main-thread task | no task over `100ms` |

Run from the repository root after a candidate build, using the measured
module count and build seconds:

```text
python scripts/validate_td004_budget.py --modules <count> --build-seconds <seconds>
```

Every emitted JS/CSS chunk counts. Every new runtime asset is classified by
SHA-256 against the accepted TD-003 media set. Only new `.avif`, `.jpeg`,
`.jpg`, `.png`, or `.webp` image bytes are permitted. No new audio, font,
video, source-map payload, or network-fetched asset is permitted. Chunking,
duplication, encoding, source maps, or file placement may not hide payload.
The allowance is one-time and non-compounding. Overage returns to Science and
Mission as a measured variance.

No quality, evidence, privacy, accessibility, truthful copy, save/recovery,
first-person presentation, or release check may be removed to meet a cap.

### Offline and authority

The slice is local, offline, course-authored practice. It performs no Azure,
Foundry, terminal, service, credential, endpoint, resource, live-sample, or
network operation. It cannot authenticate, authorize, grant permission,
perform an external action, claim Microsoft standing, award exam credit,
declare readiness, or guarantee an exam result.

Demo Tour remains isolated, zero-credit, write-free, unable to read/write
campaign adapters, and unable to open `TD004-RTA-001`.

## Allowed construction envelope

### Allowed production files and systems

Marines may add or modify only the bounded normal integration needed for this
shell:

- `horizon-archive-game/src/CalibrationMarginReviewSave.js`;
- `horizon-archive-game/src/CalibrationMarginReviewSave.jsx`;
- `horizon-archive-game/src/CalibrationMarginNormalEntry.js`;
- `horizon-archive-game/src/CalibrationMarginEntry.jsx`;
- `horizon-archive-game/src/App.jsx`;
- one bounded normal route adapter/controller module under
  `horizon-archive-game/src/`;
- one bounded RP-004 state/controller/persistence module and one renderer
  family under `horizon-archive-game/src/`;
- `horizon-archive-game/src/styles.css`, through reuse/consolidation inside
  the aggregate cap;
- directly corresponding focused tests under `horizon-archive-game/test/`;
- `horizon-archive-game/package.json`, only for an exact closed fixture/review
  command;
- `horizon-archive-game/review-fixtures/td004-three-current/`, with an exact
  allowlisted launch manifest and no arbitrary state input;
- one approved SC-05 runtime image family under canonical visual-production
  control, within the aggregate image allowance;
- TD-004 Marine package artifacts `06` through `11`;
- applicable owned current-control/work-log records; and
- exactly one Image Specialist reveal/provenance package.

File factoring may vary if ownership remains obvious and the total module,
bundle, media, fixture-exclusion, and release gates pass. Any file or system
outside this envelope requires a variance request.

### Existing capabilities to reuse

- released TD-003 sanitizer, adapter, rollback, strict read-back, no-replay
  restore, and return reconstruction;
- seven-modality semantic-intent and one-hit-token patterns;
- frozen RP-004 evaluators and machine-readable contract;
- answer-free remediation, contiguous-prefix resume, deterministic focus,
  Tour isolation, privacy clearing, atomic save, and safe-return patterns;
- current canonical frame and responsive/accessibility grammar; and
- current fixture ownership, production-exclusion, and release-runner
  patterns.

The protected RP-004 journey may be consulted and regression-tested as
reference evidence. Normal production must not import it, call its smoke
runner, reuse its protected predecessor version as released state, or claim
its tests as normal-route proof.

### Assets

- Final release requires one shell-compliant SC-05 first-person world
  presentation with provenance and honest runtime identity.
- New runtime payload is image-only and at most `4,194,304` aggregate bytes.
- Existing accepted media may remain; no accepted hash may be silently
  mutated and treated as inherited.
- Multiple crops/derivatives all count if emitted. Prefer one registered
  runtime master with CSS/object-position crops when quality and responsive
  evidence remain sufficient.
- No new audio, font, video, or network asset is allowed.
- Existing audio may not be repurposed to assign native meaning to a current,
  corridor, return, success, or route.
- The single generated cycle-reveal candidate may become the runtime SC-05
  master only if its provenance, canon, shell, crop, byte, accessibility, and
  direct import evidence pass. Otherwise it remains a canonical reference and
  does not claim integration. No second reveal generation is authorized.

### Fixed, optional, and forbidden scope

Required:

- exact route, state graph, observations, learning, review, save, restore,
  returns, responsive/accessibility parity, invariant world, budget gates, and
  hard stop described above.

Optional:

- Recorded-observation replay;
- maintenance-continuity inspection;
- sanitized-replica provenance review;
- answer-free hints;
- clear-work and confidence controls at zero credit;
- early returns;
- shared pure evaluator factoring with byte-equivalent results; and
- the destinationless continuation record.

Optional work cannot gate completion, create evidence, widen a route, add a
durable route token, extend duration artificially, consume a second reveal,
or weaken any fixed requirement.

Forbidden:

- new objective, case, expected answer, dimension, threshold, remediation
  truth, evidence field, native category, canon fact, route, destination,
  backend, account, persistence technology, service call, or world behavior;
- primary-to-retry/retrieval/transfer carryover, answer-bearing repair,
  partial-credit accumulation, prefilled controls, intermediate mastery, or
  arbitrary fixture state;
- production-accessible debug/fixture/state injection;
- new audio/font/video/network payload;
- RP-005, traversable common return, RP-013, successor, post-ending content,
  hidden lore, reward, access, identity, permission, authority, exam
  guarantee, live service, external action, or physical/world response; and
- inspection or mutation of Martin's browser storage or campaign save to
  manufacture a gated state.

## Marine freedoms

### Reconnaissance Sergeant — creative treatment

May choose:

- the emotional pacing from Pilot-owned departure through plural observation,
  disciplined uncertainty, local accountable save, and safe return;
- concise surface-safe Scene/Pilot/System/Builder-work/Teacher language within
  source copy budgets;
- how the single world composition supports awe while the expedition layer
  supports rigorous learning;
- treatment of silence, scale, negative space, and independent maintenance
  without assigning native purpose or attention;
- one reveal-decision candidate for later Image Specialist execution; and
- which optional elements to recommend trimming.

May not change route ownership/action, entry predicate, state order,
observation identities, learning truth, evidence, persistence, return graph,
world invariance, budget, or hard stop.

### Tactical Operations Specialist — experience blueprint

May choose:

- exact component layout inside each one-active-group boundary;
- wide composition, panel proportions, and narrow/effective-`200%` reflow;
- semantic grouping and non-color distinction for the three equal
  relationships;
- exact focus target IDs, live-status wording, error association, and
  recovery affordances within the required destination classes;
- native accessible control types, provided every learner form is genuinely
  blank;
- fixture component organization and exact scenario names inside one closed
  manifest; and
- how optional replay, provenance, hints, clear-work, confidence, and returns
  fit without becoming evidence.

May not add alternate entry, concurrent groups, hidden focus targets,
prefilled forms, arbitrary fixture injection, direct RP-004-to-Civic shortcut,
route-like common return, or later state.

### Combat Engineer — implementation

May choose:

- pure controller/reducer/adapter/module factoring inside the file envelope;
- exact component boundaries and test organization;
- strict normal RP-004 sanitizer and separate storage adapter composition;
- shared evaluator extraction only when protected and normal results remain
  byte-equivalent and production does not import the protected journey;
- CSS consolidation and local code refactoring within the aggregate caps; and
- deterministic in-memory fixture implementation inside the closed manifest.

May not change route semantics, accepted modalities, token order, evaluator
truth, cases, answers, dimensions, thresholds, schema/evidence order,
storage technology, return graph, focus destination class, budgets, asset
classes, world invariance, or hard stop.

### Quartermaster — content and assets

May choose:

- final instructions, labels, blank states, answer-free repair, review,
  transaction, restore, return, provenance, and negative-authority copy;
- concise explanation of expedition ownership and purpose uncertainty;
- local symbols and existing styles whose meaning remains explicit;
- final runtime asset selection and provenance record inside the shell; and
- retirement or explicit disposition of every player-facing placeholder.

May not expose an expected answer, change a case, add lore, imply that the
landscape teaches or grades, make purpose unknown into a negative finding,
make the common return a route, add a disallowed asset, or claim generated
reference integration without source evidence.

### Image Specialist — presentation and reveal

May choose:

- final SC-05 image encoding, crop, composition refinement, grade, atmosphere,
  interface material, and restrained local motion inside the shell;
- responsive world/panel balance and exact desktop/laptop/narrow/zoom states;
- visible focus, forced-color, reduced-motion, and non-color presentation;
- exactly one spoiler-safe reveal candidate, varied from recent reveals, with
  complete provenance and one named checklist item; and
- whether that exact candidate can also serve as the runtime master after
  direct import, budget, canon, accessibility, and shell evidence.

May not change function/evidence, generate a second reveal candidate, add a
disallowed runtime asset, obscure required controls, imply world response,
turn the common return into a portal, synchronize clocks, or claim runtime
integration without direct evidence.

## Protected files and systems

Never inspect, alter, stage, move, delete, or commit:

- `Art Of No Mans Sky Book Scan.pdf`;
- `Simplilearn Training Files/`.

Never open or infer from
`DO_NOT_READ_HORIZON_ARCHIVE_HIDDEN_LORE_VAULT.md` without Martin's explicit
authorization.

Never inspect or mutate Martin's browser storage, campaign save, cookies,
profile, or session merely to reach a gated state. Use deterministic
source/tests, storage-free closed fixtures, served bundles, and agent-owned
browser contexts.

## Requirement ownership and acceptance matrix

| Requirement family | Primary owner | Acceptance method |
|---|---|---|
| Product promise and priority order | Commandant | shell-to-brief trace |
| Canon, mystery, owner language, emotional boundary, invariant world | Colonel | shell/masterplan, copy, art, and state-difference review |
| Campaign position, exact route, checkpoints, returns, hard stop | Operations Planning Major | route graph and predecessor/return tests |
| Learning, privacy, persistence, accessibility, responsive, offline, recovery, budget | Office of Science Administrator | frozen validator, focused tests, fixture evidence, aggregate budget command |
| Cross-discipline shell clarity | Mission Captain | Tier 1 integration audit and variance routing |
| Emotional treatment | Reconnaissance Sergeant | creative treatment trace |
| Flow, layout, focus, status, responsive and fixture blueprint | Tactical Operations Specialist | blueprint trace and focused UI/accessibility/isolation tests |
| Functional normal route and persistence | Combat Engineer | Tiers 2–4 |
| Final copy and runtime asset completeness | Quartermaster | content/asset ledger, provenance, placeholder/answer scan |
| Presentation and reveal | Image Specialist | exact multi-layout review, asset identity, provenance |
| Release and variance classification | Intelligence Officer | independent Tier 5 and line-by-line shell reconciliation |

## Validation ladder

### Tier 1 — shell contract

Before Marine deployment:

- all strategic certificates agree on shell, slice, address, route,
  predecessor, state order, returns, persistence, budget, and hard stop;
- Martin's authorization is represented only by `TD004-RTA-001`;
- normal source still has no RP-004 integration and protected code remains
  non-routable reference evidence;
- frozen curriculum/objective/contract/source hashes are unchanged;
- no private expected answer appears in this shell;
- every fixed requirement has one owner and acceptance method;
- all allowed files/systems/assets and Marine freedoms are explicit;
- `PBA-TD004-v1` passes baseline identity and fail-closed negative probes; and
- no RP-005, RP-013, successor, reward, permission, authority, live service,
  external action, or world response is authorized.

### Tier 2 — focused construction

Prove directly:

- exact and every invalid/private/stale/duplicate/Tour route-intent class;
- all seven modalities and validation-before-token-consumption;
- three independent CM-50 choices and no cross-activation;
- one transient TR-00 arrival with no predecessor write or replay;
- all six observation orders and separate purpose-unknown return observation;
- strict blank Python and AI-901 forms, answer-free repair, retrieval,
  transfer, explanations, and no cross-credit;
- exact ten-key top level, note, eight records, denylist, separate key,
  sanitize-before-write, strict read-back, rollback, and byte stability;
- first-incomplete recovery, fresh re-entry, no-replay TR-40, and exact
  returns;
- one group, heading/focus, labels/errors/status, `>=44px`, desktop, laptop,
  narrow, effective-`200%`, forced-color, and reduced-motion requirements;
- offline/Tour/privacy/world invariants;
- closed fixture ownership and production exclusion; and
- aggregate JS/CSS/module/media/build/focused/main-task budgets.

### Tier 3 — related regression

Run:

- all new normal route/controller/persistence/UI/fixture tests;
- complete TD-003 review/save/restore and normal-entry families;
- RP-003 and RP-004 protected journeys;
- RP-002 and City Threshold return-anchor families;
- App storage/privacy, canonical frame, Demo Tour, and production-exclusion
  suites; and
- `python curriculum/readiness/RP-004/validate_mapping.py --self-test`.

### Tier 4 — `FUNCTIONALLY COMPLETE`

The Combat Engineer independently runs:

- all focused and related checks;
- full `npm test`;
- every applicable readiness-validator self-test;
- `npm run build`, without overlap with E2E;
- the candidate `validate_td004_budget.py` command using measured modules and
  build seconds;
- aggregate output/media identity and fixture/source-map/hidden-payload
  exclusion;
- source/dist route, privacy, offline, invariant-world, and hard-stop scans;
- served root/assets/reload HTTP `200` and byte identity;
- patch integrity and protected-work audit; and
- commit, push, and `HEAD == origin/main`.

### Tier 5 — independent release

The Intelligence Officer independently runs:

- the complete Tier 4 evidence afresh;
- isolated production preview with owned PID/liveness and HTTP preflight;
- exactly one complete non-overlapping E2E;
- the complete closed scenario manifest at exact DPR-1 `1920 x 1080`,
  `1366 x 768`, `390 x 844`, and `768 x 900`;
- route, observation-order, blank, repair, retry, retrieval, transfer,
  explanation, review, failed-write, restore, return, and hard-stop states;
- focus, targets, status, non-color, forced-color, reduced-motion, responsive,
  overflow, console, network, asset, and hash review;
- honest limitations for unexercised human/platform evidence;
- fixture absence from production, QA restoration, owned-process shutdown,
  clean ports, clean patch/status, and synchronization;
- line-by-line shell reconciliation and variance classification; and
- exact unchanged reveal validation.

No role may claim a live gated, assistive-technology, save, storage, or world
result without direct evidence.

## Definition of done

`SS-RP004-THREE-CURRENT-v1` is complete only when:

1. exact sanitized TD-003 CM-50 is the sole normal predecessor;
2. all three independent CM-50 choices remain exact and usable;
3. one fresh valid Pilot-owned `TD004-RTA-001` alone reaches TR-00;
4. every invalid/duplicate/Tour transition fails before write/exposure and
   preserves the next valid token;
5. TD-003 bytes remain unchanged through every RP-004 path;
6. reload before RP-004 save restores CM-50 and requires a fresh route intent;
7. TR-00 through TR-40 execute in exact order;
8. all six relation-observation orders converge without cross-credit;
9. the common return remains a separate purpose-unknown non-route;
10. strict blank `PY-011` primary/repair/retrieval/transfer passes;
11. strict blank independent `RP004-WORKLOAD-01` primary/repair/retrieval/
    transfer plus both explanations passes;
12. the neutral course interface has no landscape-derived answer channel;
13. the conjunctive review hides no incomplete obligation and is not a score;
14. only the exact ten-key record, canonical note, and eight ordered records
    survive;
15. private/transient/extra/Tour material is rejected and cleared;
16. the RP-004 adapter sanitizes before one atomic replacement and requires
    strict read-back;
17. failure preserves prior RP-004 bytes or absence and always preserves
    TD-003 bytes;
18. first-incomplete recovery is wholly blank, deterministic, and does not
    downgrade or replay;
19. exact saved re-entry mounts no-replay TR-40 heading-first;
20. Calibration Margin and City Threshold returns are write-free and exact;
21. no direct RP-004-to-Civic-Comparison shortcut exists;
22. optional continuation remains destinationless and opens no route;
23. seven modalities converge and one active group owns each state;
24. labels, focus, errors, live status, targets, desktop, laptop, narrow,
    zoom-equivalent, forced-color, and reduced-motion gates pass;
25. SC-05 is maximum-quality first-person, causally legible, accessible, and
    invariant with no protagonist/human trace;
26. the closed fixture touches no campaign/browser storage and is absent from
    production;
27. offline/no-authority/no-exam-guarantee and no-credit Tour pass;
28. every aggregate `PBA-TD004-v1` cap passes with no hidden payload;
29. RP-005, traversable return, RP-013, successor, reward, access, permission,
    authority, live service, external action, and world response remain
    absent;
30. focused, related, full, validator, build, served, E2E, exact-layout,
    cleanup, patch, and sync gates pass at their owning stages;
31. exactly one reveal candidate and provenance package exists;
32. every variance is classified and no unauthorized divergence remains; and
33. the Intelligence Officer issues `AS BUILT RELEASED`.

## Variance procedure

A Marine stops affected work and appends:

```text
VARIANCE ID:
DISCOVERING STAGE / AGENT:
SHELL ID / VERSION:
FIXED REQUIREMENT:
OBSERVED CONDITION:
EVIDENCE:
PLAYER / PRODUCT IMPACT:
PROPOSED CLASSIFICATION:
MINIMUM REQUESTED CHANGE:
FILES / SYSTEMS AFFECTED:
VALIDATION NEEDED:
RETURN OWNER:
WORK SAFE TO CONTINUE:
```

Return ownership:

- product purpose -> Commandant;
- canon, mystery, world, ownership, or narrative -> Colonel;
- campaign position, route, checkpoint, return, pacing, or hard stop ->
  Operations Planning Major;
- learning, evidence, privacy, persistence, accessibility, responsive,
  offline, recovery, performance, asset-class, or official source -> Office
  of Science Administrator;
- shell ambiguity or cross-discipline conflict -> Mission Captain;
- emotional treatment -> Reconnaissance Sergeant;
- flow, layout, interaction, focus, status, responsive, or fixture blueprint
  -> Tactical Operations Specialist;
- functional defect -> Combat Engineer;
- content or major asset defect -> Quartermaster;
- presentation defect -> Image Specialist; and
- release evidence or reconciliation -> Intelligence Officer.

The discovering role may continue only work demonstrably independent of the
variance. It may not silently weaken, reinterpret, or exceed a fixed
requirement. Intelligence finally classifies every variance as
`ACCEPTED IMPROVEMENT`, `REQUIRED CORRECTION`, `MASTERPLAN UPDATE`,
`DEFERRED LIMITATION`, or `UNAUTHORIZED DIVERGENCE`.

## Mission Captain validation

| Check | Result |
|---|---|
| Every workflow/profile shell field is present | PASS |
| Current source matches the released predecessor and unbuilt-candidate claims | PASS |
| Commandant, Colonel, corrected Operations, and revalidated Science agree | PASS |
| Martin's route decision is not widened beyond `TD004-RTA-001` | PASS |
| No unresolved conflict or duplicated owner remains | PASS |
| Scope is one integration-sized `TR-00–TR-40` slice | PASS |
| Entry, state graph, returns, recovery, save, and hard stop are measurable | PASS |
| Frozen learning truth is referenced without private answers | PASS |
| Exact privacy, schema, evidence, atomicity, and byte-stability rules are complete | PASS |
| Accessibility, responsive, offline, world, and direct-review limits are testable | PASS |
| `PBA-TD004-v1` is executable, non-compounding, and preserves quality | PASS |
| Allowed files/systems/assets and fixed/optional/forbidden scope are explicit | PASS |
| Every Marine has meaningful bounded freedom | PASS |
| Hidden lore, later content, and protected user work are named and closed | PASS |

Issuance evidence:

- route authority resolves only the recorded Operations defect;
- focused TD-003 review/save plus protected RP-004 checks:
  `23/23 PASS`;
- RP-004 readiness validator: `SELF-TEST PASS`;
- `PBA-TD004-v1` exact accepted-baseline validator: `PASS`;
- current normal entrypoints contain no RP-004/SC-05 integration;
- current protected journey remains non-routable reference evidence; and
- no live normal RP-004, browser storage, campaign save, production art, or
  Marine implementation is claimed by this shell.

## Disposition and signature

**Disposition:** `SHELL READY`

**Mission Captain:** `mission_captain`

**Issued contract:** `SS-RP004-THREE-CURRENT-v1`

**Construction order:** Reconnaissance Sergeant -> Tactical Operations
Specialist -> Combat Engineer -> Quartermaster -> Image Specialist ->
Intelligence Officer.

Marines are authorized to construct only this version. The shell remains
fixed until an accepted variance creates a successor version.

## Exact Reconnaissance Sergeant handoff

- **Stage / agent:** Reconnaissance Sergeant /
  `reconnaissance_sergeant`
- **Shell:** `SS-RP004-THREE-CURRENT-v1`
- **Starting authority:** this `SHELL READY` contract,
  `GDB-TD004-v1`, `WNMP-TD004-v1`, `CFS-TD004-v2`, `VE-TD004-v2`,
  `PBA-TD004-v1`, and exact released TD-003 reconciliation
- **Bounded objective:** produce one compelling surface-safe treatment for
  exact CM-50 Pilot departure -> invariant TR-00 arrival -> three equal
  observations -> apparent-common-return/purpose-unknown boundary -> strict
  separate learning -> accountable local save/restore -> existing-anchor
  return
- **Permitted file:**
  `Production Pipeline/Skyscraper Test Drives/TD-004/06-CREATIVE-TREATMENT.md`
  only
- **Validation tier:** Tier 1 creative trace against this shell
- **Stop boundary:** do not write runtime code, layout blueprint, final
  production copy, generated art, new canon, learning truth, route, state,
  asset, fixture, or later-floor content
- **Required output:** a creative treatment containing emotional arc,
  player-readable hierarchy, owner separation, answer-free language envelope,
  world/interface/audio intent using allowed means, flexible versus fixed
  choices, risk checks, one reveal-decision candidate, optional-scope
  recommendation, and one exact Tactical Operations Specialist handoff
- **Required disposition:** `CREATIVE LOCK`, `REVISE`, or `HOLD`
- **Next recipient:** Tactical Operations Specialist /
  `tactical_operations_specialist`

If a compelling treatment appears to require a world response, permission/
authority implication, expected answer, new learning, disallowed asset,
alternate route, common-return traversal, RP-005, RP-013, successor,
post-ending content, hidden lore, or budget/recovery/accessibility weakening,
record a variance and return it to the earliest owner instead of changing the
shell.
