# TD-004 Viability Envelope — Route and Budget Revalidation

## Document control

| Field | Value |
|---|---|
| Stage | Office of Science Administrator |
| Agent ID | `office_of_science_administrator` |
| Certificate ID | `VE-TD004-v2` |
| Supersedes | `VE-TD004-v1` HOLD at commit `c274ca349610a954af6780564768a137b3dc6057` for route and budget disposition only |
| Product brief | `GDB-TD004-v1` |
| World baseline | `WNMP-TD004-v1` |
| Floor-stack certificate | `CFS-TD004-v2` |
| Route contract | `TD004-RTA-001` |
| Selected slice | `TD-004-RP004-THREE-CURRENT-v1` |
| Campaign address | `RP-004 / SC-05 / TR-00–TR-40` |
| Released predecessor | `TD-003 / SS-RP003-REVIEW-SAVE-v1 / CM-50 VERIFIED RESTORE` |
| Budget authority | `PBA-TD004-v1` |
| Preceding stage commit | `e8b4b63a1ee7f9f82433d34bd24c5c611b082956` |
| Shell ID | Not yet issued; Mission-owned |
| Pass type | Returned route, systems, evidence, persistence, accessibility, recovery, and production-budget revalidation |
| Disposition | **`VIABILITY READY — ROUTE AND BUDGET REVALIDATED`** |

Martin's explicit route decision resolves the only missing authority identified
by `VE-TD004-v1`. Science independently finds `TD004-RTA-001` technically
compatible with the exact released TD-003 record, both known write-free
returns, the frozen RP-004 learning contract, privacy, deterministic
save/rollback/restore, accessibility, responsive behavior, offline operation,
and invariant SC-04/SC-05.

The separate production blocker is resolved by `PBA-TD004-v1`: a measured,
one-time, non-compounding phase-transition rebaseline anchored to the accepted
TD-003 build, enforced by an executable aggregate-bundle validator. The
rebaseline does not reduce or waive any product, learning, privacy,
accessibility, presentation, save, recovery, release, or protected-work gate.

This certificate does not implement the playable slice or deploy a Marine.
Mission must still issue one conflict-free versioned shell.

## Authority certificate

| Authority | SHA-256 or identity |
|---|---|
| Martin's route decision | Explicit `Go ahead!` for the documented exact TD-003 CM-50 to RP-004 / SC-05 / TR-00–TR-40 transition |
| `AGENTS.md` | `CC76D86D21ADA75D3BC6A340D2BDE41B7FEC00678CB74A1F3D0E9EAD3A0953CD` |
| `NEXT_INSTANCE_HANDOFF.md` at Science entry | `99117F07D16E2B5293A9CA06BA014E57F6FC6BEC7424B10364BF74BA223A167E` |
| `SKYSCRAPER_AGENT_WORKFLOW.md` | `6C22C4C8660BAF5F854246F55AC825B5F52DD6A5D2311C1579EB1C80DF212A43` |
| `Skyscraper Agent Profiles/README.md` | `78170827BD7BA4D420EC985937810396C3ED241A81E9ED6F697B0D9C24666D13` |
| `office-of-science-administrator.md` | `CB5C3A8D1699A9A91829FC403359A59B01EE5F95805794E8C2298EB4EBFD6B44` |
| `TD-004/01-GAME-DEVELOPMENT-BRIEF.md` | `4230A32C91991A523B47C1544AFE46885DE3230C89CED93A3E9C956E50B297C7` |
| `TD-004/02-WORLD-NARRATIVE-MASTERPLAN.md` | `1D6FB3D9C96619741DE569ADBA58770275BCC99C74F7777FFA8423E917F37EFE` |
| `TD-004/03-CAMPAIGN-FLOOR-STACK.md` v2 | `B7231FD28407D9C938563B9C74D9A4E053CC2BDE519FC28ED0C69339E00D55C5` |
| prior `TD-004/04-VIABILITY-ENVELOPE.md` | `208F8F832C68B3BBB37E3F8709BF44814EFBAF593C644C490E5D3CE02644489C` |
| `TD-004/05-PLAYABLE-SLICE-SHELL.md` HOLD | `0829767441BFBA68D4D020D7096305A78AB527226CC27650BB1BB97B420C571F` |
| `TD-004/04A-PRODUCTION-BUDGET-AUTHORITY.json` | `2010D10E3C24CCCA9E38CE2D9A10FBC878ACC36A0769101421930855FC3E9EC9` |
| `scripts/validate_td004_budget.py` | `74C9B3C86DDBBBBE080BD129CF1391A3D291C496279DF0ED7EB1361BBFFDEAC0` |
| `Production Pipeline/PRODUCTION_READINESS_SPINE.md` after Science control | `4D6E6BAC597CA53B6628027A815E7E105D0D8A74F39CB2F877B542594CC48648` |
| `Production Pipeline/CURRICULUM_SPINE.md` | `2439A2A1ECEF574FC7053F00CC3049010DB8FF0153DCCAEE98D65F9036084519` |
| `Production Pipeline/GAMEPLAY_SYSTEMS_SPINE.md` | `489559254CE9FBDFE7248B81BD335D812DD61190B5ACE70F59B96BF1C5A00BFF` |
| `RP-004-three-current-reach.md` | `359A55ED21B1A5CD14F078BE970828E8E764C8604F4683050C70A55813C9CFAE` |
| `curriculum/readiness/RP-004/contract.json` | `5C5EED65E8CCF6EC8E8CF3B41DC9798027308B0BB4D4135155989E0638FAFFB5` |
| `curriculum/readiness/RP-004/validate_mapping.py` | `9D7256249F41AE1E3DE5A030E747C6E96DDA4BC0D188B9F75C0F46332922482D` |
| `CalibrationMarginReviewSave.js` | `D82E9F916B682D51F07C8B382610B4A7977FEC7813855F0DD4AFE08C255BECF7` |
| `ThreeCurrentReachProtectedJourney.js` | `43F74ACBD0A20ADA37034038F279AF406362997833DEE4A9E3FD2796A5999A3A` |
| `threeCurrentReachProtectedJourney.test.js` | `005DA55141A936A3513A7316A3DAD723B0EFC9104CD7E175114E482406DD10D6` |
| `TD-003/11-AS-BUILT-RECONCILIATION.md` | `DEE140D5847A4B0705B25DA5FE2020E64D365C72AE69FCE3F996FFF999BEEFBD` |

## Official-source status

The named `foundry-azure-source-priority` skill remains unavailable in this
runtime. No learning claim is changed. The prior direct review of the ordered
official Microsoft sources remains applicable:

- [AI-901 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901);
- [Microsoft Foundry documentation](https://learn.microsoft.com/en-us/azure/foundry/);
- [Foundry SDKs and endpoints](https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview);
- [Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/overview); and
- [Content Understanding in Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview).

The current AI-901 authority still includes **Identify AI workloads** across
generative AI, agentic AI, text analysis, speech, computer vision, and
information extraction. The frozen `AI901-D1-O4` mapping remains
`SOLIDIFIED`. Any objective, case, answer, dimension, threshold, or source
change still requires the contract's explicit reopen path.

## Independent route viability — `TD004-RTA-001`

### Semantic owner and action

The transition is owned only by the Pilot:

```text
TD004-RTA-001
PILOT // FOLLOW EXPEDITION-MARKED SURVEY TO THREE-CURRENT REACH
```

`Three-Current Reach` remains an expedition label. The action is a deliberate
navigation decision authorized by Martin, not an invitation, permission,
access grant, reward, native route name, Builder message, Machine response, or
evidence that the world noticed the Pilot.

### Exact availability predicate

The action may be exposed only when every condition passes:

1. exact normal `campaign` mode, never Demo Tour;
2. the dedicated TD-003 key
   `horizon-archive-rp003-review-save-v1` is read through the accepted adapter;
3. the complete record passes the released strict sanitizer with no private or
   extra key;
4. version `rp003.review-save.v1`;
5. predecessor shell `SS-RP003-REVIEW-SAVE-v1`;
6. packet `RP-003`;
7. mapping `RP003-A3-CALIBRATION-MARGIN`;
8. checkpoint `calibration_margin_complete`;
9. `continuation="continuation"`;
10. `cityStateDelta=null`;
11. `successor=null`;
12. the exact three-key correspondence/difference/unavailable note passes;
13. all seven ordered sanitized evidence records pass with distinct
    `PY-010` and `RP003-IE-01` identities;
14. the mounted state is exact no-replay `CM-50 VERIFIED RESTORE`;
15. private and transient work is cleared;
16. active owner/group/action are exact;
17. activation is one of pointer, touch, keyboard Enter, keyboard Space,
    switch, speech, or screen reader; and
18. the opaque event token is valid, fresh, and unused.

The TD-003 record proves only the completed predecessor. It is never route
permission and cannot auto-dispatch. The fresh Pilot action is the sole
transition intent.

### Validation and one-hit state change

The technical contract orders Tour isolation, strict predecessor read and
sanitation, exact mounted-state verification, complete intent validation,
unused-token validation, and private/transient clearing confirmation before
token consumption.

One accepted intent consumes one token and performs exactly one transient
in-memory transition:

```text
CM-50 ROUTE CHOICE
  -- fresh valid TD004-RTA-001 -->
TR-00 ARRIVE + ORIENT
```

It writes no TD-003 or RP-004 record, replays no event, grants no observation
or mastery evidence, changes no continuation/successor/access/world/external
state, and leaves the verified TD-003 serialized bytes unchanged.

### Failure, duplicate, interruption, and reload

- Tour rejects before campaign adapter access.
- Invalid or contaminated predecessor data exposes no route action and uses
  the accepted TD-003 fail-closed recovery without changing last-known-good
  bytes.
- Wrong mode, owner, action, active group, modality, token, private state, or
  transient state remains at exact CM-50, writes nothing, preserves both
  returns, focuses the Pilot route choice, and requires a fresh token.
- A duplicate before transition is rejected. A duplicate after transition is
  a no-op at the current RP-004 boundary and cannot replay arrival.
- An interruption or reload before the first verified RP-004 save restores
  exact CM-50 and requires a fresh Pilot action. No TD-003 field reconstructs
  route intent.
- A voluntary RP-004 return clears unsaved transient slice work and restores
  the selected approved anchor without replay.

No failed or interrupted transition exposes SC-05, an observation, learning
case, answer channel, save state, successor, or world response.

## Relationship to TD-003 and permitted returns

### Immutable predecessor

`TD004-RTA-001` may read and validate the released TD-003 record but never
rewrite it. `continuation` remains ambiguous and unchanged; `successor`
remains null. The route token is transient and never enters either durable
record. TD-003 observations and mastery evidence are not copied into RP-004
and cannot cross-credit it.

### CM-50 peer choices

Exact CM-50 contains three separate Pilot choices:

- `TD004-RTA-001`;
- `RETURN TO CIVIC COMPARISON`; and
- `RETURN TO CITY THRESHOLD`.

Each has an independent fresh one-hit action. The new route does not replace,
rename, delay, gate, or write through either released return.

### RP-004 returns

- `RETURN TO CALIBRATION MARGIN` restores exact no-replay CM-50, where both
  known returns and a newly fresh RP-004 action are available.
- `RETURN TO CITY THRESHOLD` remains a direct write-free existing-anchor
  return.
- No direct RP-004-to-Civic-Comparison shortcut is created. Civic Comparison
  remains reachable only through restored Calibration Margin.
- Every return preserves continuation, null city/external deltas,
  `successor=null`, zero evidence, zero credit, zero authority, and zero world
  response.

## Systems reused and new capability boundary

### Reuse unchanged

- released TD-003 record sanitizer, local adapter, rollback, strict read-back,
  no-replay CM-50 restore, and both known returns;
- existing seven-modality semantic-intent, validation-before-consumption, and
  one-hit token patterns;
- frozen RP-004 Python and workload evaluators and machine-readable contract;
- the pure protected RP-004 journey as reference evidence only;
- answer-free remediation, deterministic first-incomplete focus, Tour
  isolation, privacy clearing, atomic save, and safe-return patterns;
- one-active-group responsive/accessibility grammar; and
- the complete existing validation ladder.

### New normal capabilities permitted for shell definition

- one CM-50 Pilot route-choice boundary governed by `TD004-RTA-001`;
- one released-record-to-transient-entry adapter contract;
- one normal `TR-00–TR-40` route using the frozen evidence authorities;
- one separate RP-004 persistence boundary;
- one invariant SC-05 production presentation; and
- storage-free closed fixtures and release evidence for the complete path.

These are contract permissions, not implemented work. Protected RP-004 remains
non-routable reference evidence until a Mission shell and Marine build prove
normal integration.

## State model and checkpoint constraints

| State | Completion condition | Failure/recovery |
|---|---|---|
| `CM-50 ROUTE CHOICE` | exact TD-003 restore plus one accepted fresh Pilot action | remain CM-50 or enter accepted TD-003 recovery; both known returns remain |
| `TR-00 ARRIVE + ORIENT` | one explicit orientation | early return; no evidence |
| `TR-10 OBSERVE THREE RELATIONS` | three deliberate equal-peer observations in any of six orders | replay Recorded facts; focus first unrecorded relation |
| `TR-20 TRACE APPARENT COMMON RETURN` | separate `observed=true`, `purpose=None` record | reject purpose/destination inference locally |
| `TR-30 RELATE + SAVE` | four observations, strict `PY-011`, strict independent `RP004-WORKLOAD-01`, conjunctive review, sanitation, atomic save, verified read-back | actual-miss-only answer-free blank remediation, first-incomplete recovery, byte-stable failed write |
| `TR-40 VERIFY + RETURN` | strict replay-free restore | return to exact Calibration Margin or City Threshold |

The common return remains observation only and is never a route. The hard stop
is `TR-40`; a destinationless physical-continuation note may open no RP-005
route.

## Frozen learning and evidence firewall

### Python

- `PY-011 — Write loops`, reinforcement only;
- prerequisite: full `L-03-02` evidence remains mastered;
- exact `8/8` primary;
- answer-free failed-check remediation;
- delayed closed-note five-dimension loop trace;
- genuinely blank exact `8/8` transfer; and
- fail closed for hardcoding, wrong count/order, live-source access, input
  mutation, forbidden operations, primary reuse, or purpose inference.

### AI-901

- `RP004-WORKLOAD-01 / AI901-D1-O4 — Identify AI workloads`;
- prerequisites: `L-06-01` objective evidence plus applicable
  `L-04-01–L-04-04` and `L-05-04` mastery;
- exact `12/12` primary;
- per-case/per-dimension answer-free remediation;
- delayed closed-note exact `8/8` retrieval;
- genuinely blank exact `12/12` transfer; and
- two separately scored explanations for modality versus workload and
  multi-step autonomy/approved-tool selection versus non-agentic work.

The course cases are neutral and contain no SC-05 crop, current/corridor
symbol, material/color/sound/motion mapping, Builder referent, or
landscape-derived answer channel.

### No cross-credit

Route entry, three relation observations, common-return/purpose-unknown
observation, Python, AI-901, review, and save remain separate owners.
Presentation, navigation, visibility, execution display, focus, accessibility,
confidence, timing, hints, save/restore display, returns, and Tour grant zero
observation or mastery evidence.

## Privacy and persistence contract

### Dedicated RP-004 durable identity

Mission may lock the following separate local record identity:

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

The RP-004 key is separate from TD-003. No transaction against it may alter,
remove, migrate, or replace the verified TD-003 bytes.

### Exact top-level allowlist

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

The note contains exactly:

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

The canonicalized relation order is stable regardless of the six accepted
observation orders.

### Exact evidence order

The durable record contains eight independently finalized records:

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

Every dimension required by its frozen form is true and every record uses the
exact RP-004 packet and mapping identities. A skill or objective ID cannot
substitute for the packet mapping.

### Denylist and sanitation

Never persist learner source, raw case answers, free-form reasoning, feedback,
private notes, identity content, credentials, endpoints, payloads, responses,
source content, exam-item text, external-action requests, route/event tokens,
focus/pointer history, diagnostics, Tour state, unavailable live material, or
arbitrary extra keys.

Validate the complete candidate before one atomic replacement. Read it back
through the same sanitizer before exposing TR-40. A rejection, exception,
quota failure, malformed read-back, partial candidate, forged record, private
field, stale token, or Tour input performs no accepted write and restores the
previous verified RP-004 bytes or verified absence. TD-003 bytes remain
independently unchanged.

After success, failure, retry, return, save, restore, and transition, clear all
private/transient source, answers, choices, feedback, reasoning, confidence
controls, tokens, focus history, and diagnostics at their defined boundary.
Only bounded public reason codes may remain transient.

### Resume

- Before a verified RP-004 save, reload returns to exact CM-50 and requires a
  fresh route intent.
- Separately persisted allowlisted finalized learning evidence may restore
  only under its own accepted learning authority and can resume the first
  incomplete scored boundary after fresh entry.
- Scene observations lost before save must be deliberately re-observed.
- Exact verified RP-004 record resumes directly at no-replay TR-40 with
  heading-first focus and `replayedEvents=[]`.
- No restore may synthesize entry, replay observation or learning, cross-credit
  evidence, or trigger a route/world event.

## Accessibility, input, focus, and responsive contract

- Pointer, touch, keyboard Enter, keyboard Space, switch, speech, and screen
  reader converge on one semantic action.
- Validation precedes token consumption; a rejection cannot spend the next
  valid hit.
- One active owner/message/content/action group and one visible heading exist
  at a time.
- Persistent labels, native semantics, associated text feedback, one polite
  atomic live region, and deterministic status identity are required.
- Initial focus lands on the active heading; action success moves to the next
  required group; failure moves to the first invalid or required control;
  restore lands on the TR-40 heading; return restores the destination anchor.
- Every required target is at least `44 x 44 CSS px`.
- Meaning never depends on color, motion, sound, position, texture, or timing
  alone.
- Forced colors preserve owner, group, control, focus, disabled, error,
  completion, and link boundaries using system colors and borders.
- Reduced motion removes nonessential animation while retaining every state,
  action, announcement, spatial relation, and text equivalent.
- At exact DPR-1 `1920 x 1080`, the dominant first-person world and complete
  current group/actions fit without outer horizontal or vertical scroll.
- Exact DPR-1 `1366 x 768`, `390 x 844`, and `768 x 900` representative
  layouts preserve containment, world dominance where applicable, complete
  actions, labels, status, and focus.
- Narrow and effective-`200%` layouts use natural semantic vertical reflow
  without page-level horizontal escape, clipped owner text, reordered
  evidence, or off-screen required action.

Human screen-reader speech, physical switch hardware, platform forced-color,
and native text-only `200%` remain direct-review limitations unless actually
exercised. Tests and width-equivalent review do not justify overclaiming them.

## Offline, authority, and invariant-world contract

The slice is local, offline, course-authored practice. It may not call Azure,
Foundry, a terminal, the landscape, or another live service; inspect
credentials/resources/endpoints/live samples; authenticate; authorize; grant
permission; imply consent; claim Microsoft standing, exam credit, readiness,
or guarantee; or perform an external action.

SC-04 and SC-05 geometry, materials, currents, corridors, common return,
maintenance forms, coupling body, light/sound causes, routes, and monotonic
environmental clocks remain invariant. The entry is Pilot movement, not a
world delta. Success, failure, save, restore, return, or learning never changes
the landscape or establishes native purpose, identity, audience, judgment,
reward, or Machine relation.

Demo Tour remains isolated, zero-credit, write-free, unable to access campaign
adapters, and unable to open a route.

## Production budget authority — `PBA-TD004-v1`

### Measured accepted baseline

Fresh `npm run build` on the accepted TD-003 source produced:

| Measure | Exact baseline |
|---|---:|
| Build | `13.81s`; `179` transformed modules |
| Aggregate JavaScript | `1,195,380` bytes; SHA-256 `D98AFEF9BD364F513523831E67114FEA800208AF15882DE4767D09BA3BF71DC3` |
| Aggregate CSS | `81,704` bytes; SHA-256 `3CFAC5DF70551BEFDEAF24E257CCA4729356BE1FE2D15E8BB6D1EEC4002FA53B` |
| Accepted runtime media | `19,372,371` bytes across the exact eight-file SHA-256 set in `PBA-TD004-v1` |
| Largest accepted media asset | `3,076,970` bytes |

Accepted history provides these observed slice deltas:

| Transition | Modules | JavaScript | CSS |
|---|---:|---:|---:|
| TD-001 → TD-002 | `+4` | `+33,857` bytes | `+3,862` bytes |
| TD-002 → TD-003 | `+2` | `+22,834` bytes | `+28` bytes |

### One-time non-compounding rebaseline

The new caps are:

| Measure | TD-004 cap | Reserve above TD-003 |
|---|---:|---:|
| Aggregate all emitted JavaScript | `1,255,149` bytes | `59,769` bytes |
| Aggregate all emitted CSS | `85,789` bytes | `4,085` bytes |
| Production modules | `187` | `8` |
| New image-only runtime media | `4,194,304` bytes | `4 MiB` |
| Total runtime media | `23,566,675` bytes | existing exact set plus `4 MiB` |
| Production build | `<=60s` | unchanged |
| Focused suite | `<=30s` | unchanged |
| Complete E2E | `<=180s`, never overlapping build | unchanged |
| Sampled main-thread task | no task over `100ms` | unchanged |

JavaScript, CSS, and module caps are exactly a one-time floor of `105%` of the
accepted TD-003 aggregate baseline. The JS reserve is `1.76x` the largest
accepted prior JS delta; the CSS reserve exceeds the largest accepted prior
CSS delta; the module reserve is twice the largest accepted prior module
delta. The image allowance is `1.36x` the largest current runtime image and
supports one premium SC-05 family without authorizing audio, font, video, or
network growth.

This is a phase-transition cap, not a rolling entitlement. Every emitted
chunk counts. Every runtime asset not in the accepted SHA-256 set counts.
Source maps, chunk splitting, duplicated files, encoding, or media placement
cannot hide payload. A future overage requires an explicit Science/Mission
variance supported by measurements.

No quality, evidence, privacy, accessibility, responsive behavior, truthful
copy, save/recovery, first-person presentation, or release check may be
removed to meet the cap.

### Executable budget evidence

`scripts/validate_td004_budget.py`:

- aggregates every emitted JavaScript and CSS chunk;
- identifies accepted media by SHA-256 rather than filename;
- aggregates every new runtime asset;
- permits only new `.avif`, `.jpeg`, `.jpg`, `.png`, or `.webp` image bytes;
- rejects new audio, font, video, source-map, or other payload classes;
- enforces module and build-time caps supplied from the build log; and
- verifies the exact TD-003 baseline identity in `--baseline` mode.

Fresh evidence:

- exact baseline validation: `PASS`;
- Python syntax compilation: `PASS`;
- negative module probe `188 > 187`: correctly `FAIL`;
- negative build probe `60.01s > 60s`: correctly `FAIL`.

## Validation ladder

### Tier 1 — authority and contracts

- current instruction, stage-chain, hash, campaign address, route owner,
  exact predecessor, record identity, checkpoint, return, hard-stop, and
  budget-authority checks;
- frozen curriculum/objective/source comparison;
- private/extra-key, no-cross-credit, Tour, authority, world, and successor
  boundary audit.

### Tier 2 — focused

- exact/invalid/private/stale/duplicate/Tour route-intent cases;
- TD-003 sanitizer, adapter, rollback, read-back, CM-50 restore, and both
  known returns;
- all six RP-004 observation orders and strict Python/AI-901 protected
  evaluators;
- eight-record allowlist, malformed/partial/failed write, last-known-good byte
  stability, deterministic recovery, TR-40 restore, and returns;
- seven modalities, one-hit behavior, focus, labels/status, targets, desktop,
  narrow, effective-`200%`, forced-color, and reduced-motion checks;
- budget baseline, aggregate-chunk, media-hash, module, build-time, extension,
  and negative-overage checks.

### Tier 3 — related regression

- complete TD-003 review/save/restore and normal-route families;
- RP-003/RP-004 protected journeys;
- exact return anchors, App storage/privacy, canonical frame, Demo Tour, and
  production-noninclusion suites;
- RP-004 readiness validator self-test.

### Tier 4 — full product

- full game suite;
- all applicable readiness validator self-tests;
- production build;
- aggregate JS/CSS/module/media budget validator;
- source/dist fixture exclusion and no hidden payload;
- served root/assets/reload HTTP `200` and byte identity;
- patch integrity and protected-work audit.

### Tier 5 — independent release

- isolated production preview with ownership and HTTP preflight;
- one complete non-overlapping E2E;
- all required storage-free closed scenarios at exact DPR-1 `1920 x 1080`,
  `1366 x 768`, `390 x 844`, and `768 x 900`;
- focus, target, status, forced-color, reduced-motion, responsive,
  accessibility, and console review;
- scoped claims for any human/platform evidence not directly exercised;
- QA restoration, owned-process shutdown, clean ports, variance
  reconciliation, commit/push/synchronization, and exact shell comparison.

## Current validation evidence

- focused TD-003 review/save plus protected RP-004 suite: `25/25 PASS`,
  `0` failures, `423.8707ms`;
- full game suite: `785/785 PASS`, `0` failures, `10.392s`;
- RP-004 mapping validator: `SELF-TEST PASS`;
- fresh production build: `179` modules, `13.81s`, exact accepted JS/CSS and
  runtime-media identities;
- `PBA-TD004-v1` baseline validator and syntax check: `PASS`;
- intentional module and build-time negative probes: correctly rejected;
- browser storage and Martin's campaign save: uninspected and unchanged;
- hidden lore and protected user work: unopened and untouched.

These checks validate the current released baseline and protected reference
contracts. Normal RP-004 behavior remains unbuilt and must earn every later
gate.

## Risk register

| ID | Risk | Required gate / owner |
|---|---|---|
| `V4-R01` | Route authority missing | **resolved** by Martin and `CFS-TD004-v2`; Mission must preserve exact scope |
| `V4-R02` | Protected RP-003 version is mistaken for released record | exact `rp003.review-save.v1` sanitizer and adapter contract / Mission + Combat |
| `V4-R03` | Save or restore synthesizes route intent | fresh transient Pilot action only; route token never persists / Combat |
| `V4-R04` | New route weakens either known return | three independent CM-50 choices and regression coverage / Tactical + Combat |
| `V4-R05` | Route/presentation/observation cross-credits mastery | frozen evidence firewall and neutral course interface / all downstream |
| `V4-R06` | Private/transient material persists | exact deny-extra-key sanitation and clearing / Combat + Intelligence |
| `V4-R07` | RP-004 write damages TD-003 or prior RP-004 bytes | separate keys, validate-before-write, strict read-back, rollback / Combat |
| `V4-R08` | Responsive or AT evidence is overstated | exact fixtures plus scoped direct-review limitations / Image + Intelligence |
| `V4-R09` | Rebaseline becomes rolling or hides payload | executable aggregate/hash validator and explicit variance gate / all downstream |
| `V4-R10` | Asset budget weakens photoreal quality | one premium image-only allowance; quality remains mandatory / Quartermaster + Image |
| `V4-R11` | Common return becomes route or purpose | observation-only source and hard checks / all downstream |
| `V4-R12` | RP-005, RP-013, successor, reward, authority, or world response leaks | source, shell, fixture, bundle, E2E, and Intelligence absence gates |

## Permitted flexibility

Mission may permit downstream choice of:

- internal module/file factoring;
- concise surface copy within owner and copy budgets;
- shared style consolidation and layout mechanics;
- exact component boundaries;
- bounded public reason-code wording;
- image encoding and crop strategy within `PBA-TD004-v1`;
- fixture component organization; and
- optional replay, maintenance, provenance, hint, clear-work, confidence, and
  destinationless-continuation presentation.

No flexibility may change the route owner/action, validation order, one-hit
meaning, exact predecessor identity, three CM-50 choices, checkpoint order,
learning identities/forms/cases/answers/dimensions/thresholds, no-cross-credit
firewall, durable key/schema/evidence order, atomicity, clearing, focus
destination class, seven modalities, targets, responsive gates, budget
accounting, offline/no-authority meaning, world invariance, or hard stop.

## Hard stops

Stop and return:

- to Operations for campaign address, route, checkpoint, or return conflict;
- to the Colonel for canon, ownership, mystery, or world contradiction;
- to the Commandant for product/platform/quality conflict;
- to Science for evidence, privacy, persistence, accessibility, responsive,
  offline, recovery, or budget ambiguity;
- to Mission for cross-discipline shell ambiguity;
- `HOLD` for any unverified learning/source change;
- `HOLD` for any cap overage without an explicit measured variance; and
- `HOLD` for any RP-005 route, traversable common return, RP-013, successor,
  post-ending content, native purpose, reward, identity, access, permission,
  authority, exam guarantee, live service, external action, or world response.

Never open hidden lore. Never inspect or mutate Martin's browser storage or
campaign save to manufacture evidence. Never inspect, alter, stage, move,
delete, or commit the protected PDF or training directory.

## Report envelope

- **Systems/evidence:** exact released-record-to-transient-entry contract and
  frozen RP-004 evidence firewall are compatible.
- **Reused/new:** accepted sanitation, intent, recovery, evaluator, and
  accessibility patterns are reused; only the bounded route, separate
  persistence, SC-05 normal presentation, and closed fixtures are new shell
  capabilities.
- **Privacy/save/recovery:** exact separate key, ten-field top-level allowlist,
  exact note, eight ordered evidence records, validate-before-write/read-back,
  rollback, private clearing, deterministic recovery, fresh re-entry, and
  replay-free TR-40.
- **Accessibility/performance:** seven modalities, deterministic focus,
  responsive/forced-color/reduced-motion parity, exact four-layout release
  review, and executable aggregate budget authority.
- **Sources:** official Microsoft sources only; no learning claim changed.
- **Variances:** route HOLD resolved; budget blocker resolved by
  `PBA-TD004-v1`; no product, canon, learning, implementation, or release
  variance accepted.
- **Files changed:** this v2 certificate,
  `04A-PRODUCTION-BUDGET-AUTHORITY.json`,
  `scripts/validate_td004_budget.py`,
  `PRODUCTION_READINESS_SPINE.md`, `STAGE-METRICS.json`, and
  `NEXT_INSTANCE_HANDOFF.md`.
- **Synchronization:** local only; no push at this stage.

**Disposition: `VIABILITY READY — ROUTE AND BUDGET REVALIDATED`.**

## Exact Mission Captain handoff

Using `GDB-TD004-v1`, `WNMP-TD004-v1`, `CFS-TD004-v2`,
`VE-TD004-v2`, `PBA-TD004-v1`, Operations commit
`e8b4b63a1ee7f9f82433d34bd24c5c611b082956`, and the dedicated Science
return commit containing this certificate, perform a fresh full shell
integration audit.

Mission may issue one versioned shell for
`TD-004-RP004-THREE-CURRENT-v1 / RP-004 / SC-05 / TR-00–TR-40` only if it
locks:

1. exact released TD-003 sanitation and no-replay CM-50;
2. Pilot-owned `TD004-RTA-001`, full validation before token consumption, one
   transient TR-00 entry, duplicate/interruption/reload recovery, and no
   predecessor rewrite;
3. the two existing CM-50 returns, RP-004 Calibration Margin and City
   Threshold returns, and no new direct Civic Comparison shortcut;
4. the complete `TR-00–TR-40` state graph and hard stop before RP-005;
5. frozen independent observation, `PY-011`, and
   `RP004-WORKLOAD-01 / AI901-D1-O4` evidence with zero cross-credit;
6. the dedicated RP-004 key, exact ten-key top-level record, exact canonical
   note, eight ordered ten-key evidence records, private denylist, atomic
   replacement/read-back, rollback, first-incomplete recovery, and no-replay
   restore;
7. seven modalities, deterministic focus, `>=44px` targets, one active group,
   exact desktop/narrow/effective-`200%`/forced-color/reduced-motion parity;
8. offline/no-authority/no-exam-guarantee, Tour isolation, and invariant
   SC-04/SC-05;
9. `PBA-TD004-v1` aggregate caps and executable validator with no rolling
   entitlement or hidden payload; and
10. the complete focused-to-release validation ladder and honest direct-review
    limitations.

Do not import the protected journey as proof, weaken any gate for budget,
authorize RP-005, create RP-013/successor/post-ending content, or imply
permission, reward, identity, authority, live service, external action, or
world response.

Issue `SHELL READY`, `REVISE`, or `HOLD` honestly. Push only if `SHELL READY`
under the workflow gate and verify `HEAD == origin/main` before
Reconnaissance deploys.
