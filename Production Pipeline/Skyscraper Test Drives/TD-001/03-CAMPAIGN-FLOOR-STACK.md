# TD-001 Campaign Floor Stack and Next Slice Definition

## Document control

| Field | Value |
|---|---|
| Stage | Operations Planning Major |
| Agent ID | `operations_planning_major` |
| Pass type | Contiguous-slice planning |
| Floor-stack version | `CFS-TD001-v1` |
| Product brief | `GDB-TD001-v1` |
| World baseline | `WNMP-TD001-v1` |
| Shell candidate | `SS-RP003-PY010-v1` |
| Campaign address | `RP-003 / SC-04 / CM-20-CM-23` |
| Preceding stage commit | `15f322c27ef9f4eaa04193e077fda6f6e1b9f52b` |
| Completed | `2026-07-25T17:55:00-04:00` |
| Disposition | `FLOOR STACK READY` |

This entry places one existing-authority, integration-sized playable slice into the campaign floor stack. It changes no canonical queue, packet, rail, curriculum, case, answer, score, story fact, or later campaign floor.

## Authorities verified

- `AGENTS.md`
- `NEXT_INSTANCE_HANDOFF.md`
- `SKYSCRAPER_AGENT_WORKFLOW.md`
- `Skyscraper Agent Profiles/README.md`
- `Skyscraper Agent Profiles/operations-planning-major.md`
- `Production Pipeline/Skyscraper Test Drives/TD-001/01-GAME-DEVELOPMENT-BRIEF.md`
- `Production Pipeline/Skyscraper Test Drives/TD-001/02-WORLD-NARRATIVE-MASTERPLAN.md`
- current control, position, route-integrity, and coverage sections in `Production Pipeline/STORY_RAIL_MAP.md`
- current control and active packet rows in `Production Pipeline/PACKET_SCOREBOARD.md`
- current control in `Production Pipeline/ADVANCE_QUEUE.md`
- current control in `Production Pipeline/WORKING_QUEUE.md`
- current control and packet spine in `Production Pipeline/EXPEDITION_SPINE.md`
- current control, packet identity, start/end state, puzzle graph, pacing, dependencies, locks, and acceptance criteria in `Production Pipeline/rail-packets/RP-003-calibration-margin.md`
- current control and exact completed predecessor summary in `Production Pipeline/rail-packets/RP-002-civic-record-encounter.md`
- reserved successor summary in `Production Pipeline/rail-packets/RP-004-three-current-reach.md`
- current control in `Production Pipeline/demo-increments/DI-001-city-threshold.md`
- accepted player boundary and local/offline delivery statement in `PLAYABLE_DEMO.md`

No accepted Intelligence Officer campaign variance exists for this first skyscraper test drive.

## Whole-building and playable positions

| Position | Current state | Planning consequence |
|---|---|---|
| Whole-story railhead | `RP-012`, intended ending represented, no successor | TD-001 may use existing RP-003 authority only; it may not create a later floor |
| Current playable packet | `RP-003 - IN DEMO PARTIAL / CM-10 SURVEY ACCEPTED` | The nearest unfinished edge is the explicit local-work review and complete Python chain |
| Accepted player boundary | All three CM-10 observations separately Recorded in any order; replay is safe; local review is visibly `Eligible` but disabled and non-dispatchable | The slice begins by making only this exact gated review action genuinely dispatchable through one fresh player activation |
| Selected landing | Finalized `PY-010` only | The slice ends before `CM-30`; no AI-901, save, bearing, or successor-facing state is exposed |
| Ordered later work | Remaining RP-003 states, then RP-004 through RP-012 | All remain structurally planned but implementation-inaccessible from TD-001 |

The current control artifacts agree on the same edge. No structural predecessor is skipped, and no whole-story status is mistaken for playable implementation.

## Selected slice and rationale

### Slice identity

- **Slice ID:** `SS-RP003-PY010-v1`
- **Campaign address:** `RP-003 / SC-04 / CM-20-CM-23`
- **Campaign role:** final Python-learning floor of the foundation-phase packet
- **Player purpose:** use exposed evidence to write and independently transfer a bounded Python conditional while preserving unavailable evidence as unavailable
- **Narrative meaning:** the Pilot becomes more precise; the world does not become more responsive

### Why this is one integration-sized slice

The explicit review action, primary, actual-miss repair, retrieval, transfer, and finalization are one indivisible evidence chain. Splitting them into separate releases would create bypassable intermediate endpoints, duplicate state plumbing, and encourage a false result boundary before independent transfer. Expanding beyond them would enter a separately owned AI-901 chain and save flow. The selected floor is therefore the smallest complete slice that:

1. begins at the nearest accepted player boundary;
2. produces one independently meaningful capability;
3. has a deterministic recoverable landing;
4. can be validated without later campaign content; and
5. does not become a micro-seam.

## Exact predecessor and fresh entry

### Required predecessor state

Normal entry is valid only when all of the following are true:

- the player is at the accepted normal `RP-003 / SC-04 / CM-10 SURVEY` boundary;
- exposed sequence A, exposed sequence B, and the sealed-boundary observation are each separately finalized as Recorded;
- those observations came from ordinary campaign play, not Tour, forged, stale, combined, private, or contaminated state;
- the local-review control is at the accepted all-three `Eligible` boundary;
- no Python response, answer prose, feedback, prompt, credential, payload, sealed-source content, or other private/transient material is carried in; and
- `continuation` is unchanged and `cityStateDelta=null`.

The accepted predecessor remains the sole normal campaign entry. Exact verified RP-002 completion is an earlier dependency, not an alternate shortcut into this slice.

### Fresh entry trigger

The only normal transition into `CM-20` is one fresh, explicit, semantic activation of `REVIEW LOCAL WORK IMAGE` after the exact predecessor gate passes.

- Eligibility alone is neither activation nor evidence.
- The accepted disabled/non-dispatchable placeholder becomes dispatchable only for this exact all-three normal state.
- Focus, visibility, hover, timing, replay, Tour traversal, or a restored stale intent cannot activate it.
- One activation enters one fresh review session and is consumed as transient navigation intent.
- Repeated or stale dispatch cannot duplicate evidence, skip a state, or expose a later floor.
- A failed gate leaves the player at the accepted survey/recovery boundary with private/transient work cleared and no physical or campaign change.

This transition is Pilot intent validated by the System. It is not invitation, access, permission, recognition, or response from the City, Builders, or Machine.

## Ordered floor stack

| Order | Boundary | Required player-facing work | Transition and checkpoint | Evidence and hard-stop protection |
|---:|---|---|---|---|
| 0 | Accepted `CM-10 SURVEY` | Three separate observations are already Recorded; review is only Eligible | Fresh explicit `REVIEW LOCAL WORK IMAGE` activation after exact gate validation | Observations remain observation evidence only; no Python credit |
| 1 | `CM-20 PYTHON PRIMARY` | Genuinely blank learner-owned condition, true-branch label, and false-branch label over the supplied lists/loop/index/append/sealed-source scaffold | `RUN BOUNDED COMPARISON` invokes the frozen semantic evaluator; simultaneous `8/8` advances, any actual miss enters `CM-21` | Running, viewing, focus, scaffold exposure, output display, or partial correctness finalizes nothing |
| 2 | `CM-21 PYTHON REPAIR` | Answer-free feedback only for the check or checks actually missed, plus the already-authorized aligned-index trace | Acknowledge/review repair, then clear all private/transient work and return to the appropriate genuinely blank form | No completed line, expected condition, branch answer, primary output, or transfer answer carries forward; retries remain unlimited |
| 3 | `CM-20 PYTHON PRIMARY - BLANK RETRY` | Re-enter the same learner-owned fields wholly blank after repair | Exact simultaneous `8/8` establishes the verified primary boundary and opens retrieval; another miss repeats bounded repair | A previous miss, hint, trace, or partial result cannot compensate for any current check |
| 4 | `CM-22 PYTHON RETRIEVAL` | Closed-note statements for condition, true branch, false branch, and unavailable boundary | All four required statements pass separately before transfer opens; a miss receives only its concept-specific answer-free contrast and a blank closed-note retry | Primary code/output is absent; unavailable never becomes false, unequal, empty, denied, or inferred |
| 5 | `CM-23 PYTHON TRANSFER` | Genuinely blank, unseen transfer sequences with the same learner-owned fields and a supplied unscored scaffold | Exact fresh simultaneous `8/8` advances; an actual miss uses `CM-21`-class answer-free repair against the transfer form, clears work, and returns to a wholly blank transfer retry | Primary code, choices, outputs, and retrieval answers remain unavailable; no cross-credit or rehearsal substitute |
| 6 | Finalized `PY-010` landing | Quiet System confirmation of only the finalized Python capability | Sanitize private/transient work, derive the first incomplete boundary deterministically, and stop | No `CM-30`, AI-901, save, bearing, destination, reward, access, authority, or physical response is exposed |

### Sequence invariants

- `CM-20 -> CM-22 -> CM-23` may not be reordered or collapsed.
- `CM-21` is reachable only from an actually evaluated miss. It cannot appear as preemptive coaching or an answer browser.
- Exact primary `8/8` is necessary but insufficient for finalization.
- Exact retrieval is necessary but insufficient for finalization.
- Only exact fresh transfer `8/8` finalizes `PY-010`.
- Observation, presentation, navigation, focus, hints, repair acknowledgement, confidence, timing, Tour, or later hidden evidence contributes zero Python credit.
- `PY-010` contributes zero credit to `RP003-IE-01`.

## Puzzle and learning placement

| Floor | Puzzle job | Learning job | Owner boundary |
|---|---|---|---|
| Fresh review | Convert deliberate player intent into a bounded local-work session | None; activation is zero credit | Pilot intent, System gate |
| `CM-20` | Complete only the missing conditional decisions in an unfinished local work image | Primary evidence for conditional comparison over supplied inputs | Builder Work supplies bounded structure; Pilot supplies code; System evaluates |
| `CM-21` | Trace the first actual mismatch without revealing a completed solution | Answer-free correction of only observed failed checks | Teacher supplies neutral instruction; System clears state |
| `CM-22` | Reconstruct condition and branch meanings without notes | Closed-note retrieval, including the unavailable boundary | Teacher prompts; Pilot recalls; System verifies |
| `CM-23` | Apply the method to unseen supplied sequences | Independent fresh transfer at strict `8/8` | System supplies fresh case/scaffold; Pilot acts independently |
| Final landing | Show capability state without spectacle | Finalize only allowlisted `PY-010` evidence | System evidence only; Scene remains invariant |

Cases, expected answers, evaluator checks, thresholds, and feedback mappings remain owned by the solidified `PY-010` curriculum contract. This floor stack neither restates nor changes them.

## Routes, returns, checkpoints, and recovery

### Forward route

There is one forward route:

```text
accepted all-three CM-10
  -> fresh explicit review
  -> blank CM-20 primary
  -> exact pass or actual-miss CM-21 repair/blank retry
  -> CM-22 closed-note retrieval
  -> blank unseen CM-23 transfer
  -> finalized PY-010 landing
```

No action, return, reload, or resume may jump from CM-10 to CM-22/CM-23, from primary pass directly to finalization, or from a repaired attempt to a prefilled form.

### Permitted returns

- `CM-20` retains the already-specified `RETURN TO SURVEY`.
- `CM-21` retains the already-specified `RETURN TO SURVEY`.
- Either return is reversible navigation with zero new evidence. It clears private/transient Python work and lands at the accepted all-three CM-10 survey boundary.
- Re-entry requires another fresh explicit review activation and reconstructs the first incomplete verified Python boundary without prefill.
- `CM-22` and `CM-23` gain no invented shortcut or later route in this planning pass. If downstream usability evidence requires an additional explicit late-chain return, that is a campaign-route variance and returns to the Operations Planning Major.
- The existing earlier reversible RP-002/City Threshold routes remain predecessor recovery routes; they do not provide an alternate learning entry.

### Checkpoint model

| Checkpoint | Meaning | May retain | Must clear or exclude |
|---|---|---|---|
| `P0` | accepted all-three CM-10 predecessor | existing allowlisted observation status and campaign boundary | review intent, code, feedback, private/transient work |
| `P1` | exact CM-20 primary verified | only the existing allowlisted finalized boundary needed to derive next incomplete work | raw code, partial checks, outputs, hints, trace state, feedback |
| `P2` | exact CM-22 retrieval verified | only the existing allowlisted finalized boundary needed to derive transfer | answers, primary material, notes, feedback |
| `P3` | exact CM-23 transfer verified | finalized `PY-010` allowlisted evidence | transfer code/answers, raw cases, feedback, all private/transient work |

These are learning/resume checkpoints, not a new expedition-note or campaign save. TD-001 does not enter `CM-40` or `CM-41`, does not make save eligible, and does not persist a story note. Reload/resume must derive the first incomplete verified boundary from the existing sanitized evidence model. It may never inspect or mutate Martin's browser storage to manufacture a state.

### Failure and recovery

- Syntax, semantic, branch-label, hardcoding, mutation, forbidden-operation, or sealed-source errors fail locally under the frozen evaluator.
- Feedback names only the actual failed check or checks and associates with the relevant learner-owned field.
- Exiting repair clears all learner-owned inputs and transient results before blank retry.
- Retrieval failure repeats a blank closed-note form after concept-specific answer-free contrast.
- Transfer failure uses transfer-specific repair and returns to a genuinely blank transfer, never the primary.
- Invalid, stale, duplicate, Tour-derived, forged, combined, or contaminated intents fail closed without downgrading valid earlier finalized evidence.
- No failure path creates a world event, refusal, denial, reward, authority claim, or unrecoverable trap.

## Time budget and pacing

- **Planned Python-floor duration:** `8-11 minutes` for a clean first completion, matching the accepted RP-003 pacing envelope.
- **Repair allowance:** untimed and unlimited; each repair loop adds only the time the learner needs. Timing carries no credit.
- **Rhythm:** deliberate entry -> exposed effort -> bounded correction if needed -> quiet recall -> independent transfer -> restrained capability confirmation.
- **Anti-filler rule:** no result interstitial, celebration, lore recap, second guide, optional side puzzle, new observation, or ornamental transition is required between the locked boundaries.
- **Mastered replay:** may be faster naturally, but no step, evaluator, blankness requirement, retrieval, or transfer may be skipped.

The slice should feel substantial because the full evidence chain is complete, not because it adds extra rooms or copy.

## Dependencies

### Required existing dependencies

- accepted normal RP-003 play through all three CM-10 observations and replay-safe Available/Recorded status;
- the exact CM-10 all-three review-eligibility gate;
- the existing pure `CalibrationMarginProtectedJourney` authority and frozen `PY-010` evaluators/remediation mappings;
- `curriculum/readiness/RP-003/contract.json` and its anti-bypass/self-test authority;
- supplied exposed inputs and sealed-source-unavailable representation;
- privacy/transient sanitizer and allowlisted evidence model;
- campaign/Tour separation and offline/no-authority behavior;
- deterministic active-owner focus, first-failed-field association, heading-first resume, and semantic activation;
- responsive one-group layout, non-color states, forced-color viability, reduced-motion parity, and `>=44px` controls;
- existing invariant SC-04 world presentation and reversible survey/predecessor routes; and
- production test/build/served-identity infrastructure.

### Dependencies explicitly not introduced

- no new location, world plate, art master, case, answer, score, evaluator, hint branch, persistence field, route, backend, SDK, Azure resource, endpoint, credential, network call, or external service;
- no `RP003-IE-01` implementation dependency for this slice;
- no RP-004 asset, route, state, or destination; and
- no hidden-lore dependency.

## Required versus optional scope

### Required for this slice

- make review dispatchable only at the exact accepted all-three normal boundary;
- require one fresh explicit activation;
- present genuinely blank CM-20 learner fields;
- reuse strict simultaneous primary `8/8`;
- route actual misses through check-specific answer-free CM-21 repair;
- clear all private/transient work before wholly blank retry;
- require CM-22 closed-note condition/true/false/unavailable retrieval;
- present genuinely blank unseen CM-23 transfer;
- require strict fresh transfer `8/8`;
- finalize only `PY-010`;
- preserve deterministic return, retry, reload, and resume;
- preserve keyboard, pointer, touch, focus, errors, non-color, forced-color, reduced-motion, responsive, and offline parity;
- keep SC-04 physically invariant; and
- prove later-state absence.

### Optional but already authorized

- answer-free hints that do not disclose a condition, label, completed line, or transfer answer;
- `CLEAR WORK`;
- replay-safe CM-10 observation review before re-entering;
- early `RETURN TO SURVEY` from CM-20/CM-21;
- neutral status copy and restrained suit-layer presentation inside established ownership; and
- implementation factoring and test organization that do not change observable contracts.

Optional work cannot delay the required chain, create a new release seam, or add another learning branch.

## Completion state and permitted outputs

### Successful completion

At the successful landing:

- `PY-010` alone is finalized under the existing allowlist;
- private/transient primary, repair, retrieval, and transfer material is cleared or excluded from durable state;
- the first incomplete boundary resolver reports no incomplete Python step within CM-20-CM-23;
- the player remains in the bounded SC-04 local comparison context;
- `continuation` is unchanged;
- `cityStateDelta=null`;
- no physical channel, seal, coupling, route, light, material, sound source, maintenance process, or environmental clock changes; and
- no next campaign action is exposed.

### Other permitted outputs

- a recoverable wholly blank primary or transfer retry after bounded answer-free repair;
- a blank retrieval retry after bounded answer-free contrast;
- a reversible return to accepted CM-10 with no added Python evidence;
- local, non-persisted feedback and focus state; and
- proportionate validation evidence for the owning downstream gates.

No output may include raw submitted code, answer prose, credentials, prompts, service payloads, sealed-source content, private notes, or external actions.

## Hard stop and forbidden exposure

The floor stops immediately after finalized `PY-010`.

The implementation and presentation must not enter, mount, preload as reachable UI, dispatch, score, imply, or reveal:

- `CM-30`, `CM-31`, `CM-32`, `CM-33`, or `CM-34`;
- `RP003-IE-01`, AI-901 extraction content, cases, remediation, retrieval, transfer, explanation, or result;
- `CM-40`, `CM-41`, or `CM-50`;
- review/save eligibility, expedition-note save, restore, or onward bearing;
- an RP-004 route, destination, scene, state, asset, or action;
- `RP-013`, a successor, post-ending content, or a central-mystery answer;
- reward, access, authentication, permission, identity, recognition, authority, exam standing, external action, or physical/world response; or
- hidden-lore material or inference.

Code may reuse already-protected internal authority, but no forbidden later-state marker may become player-reachable or be misreported as integrated. Tests must distinguish protected source existence from normal-route exposure.

## Implementation-distance note

This is a convergence/integration floor, not a greenfield design floor.

- **Already accepted in normal play:** exact predecessor, CM-10 orientation and three observations, replay/status behavior, and inactive all-three review eligibility.
- **Already protected outside normal routing:** complete CM-20-CM-23 evaluator, repair, retrieval, transfer, sanitation, and resume authority in the pure RP-003 journey.
- **Nearest implementation gap:** connect the exact accepted normal eligibility boundary to one fresh normal review activation and compose the complete protected Python chain into the live RP-003 experience.
- **Primary risk distance:** normal App/route/UI integration, not curriculum invention.
- **Expected work shape:** one bounded route/state/UI composition plus focused contract, anti-bypass, privacy, accessibility, related regression, build, and served-state evidence.
- **Expected stop:** no protected later state is promoted merely because it exists in the pure journey.

The Mission Captain should name exact permitted implementation surfaces after Science confirms viability. The Marines must request a variance rather than silently widening this distance.

## Campaign risks

| Risk | Consequence | Planning control |
|---|---|---|
| Eligible placeholder becomes broadly dispatchable | Review can start from partial, Tour, stale, or forged state | Exact all-three normal gate plus fresh one-hit activation |
| Review intent persists or replays | Duplicate entry or evidence | Treat intent as transient navigation only; reject replay |
| Primary form is prefilled from supplied or prior material | False evidence and privacy leak | Native/programmatic/semantic blankness at every entry/retry |
| Repair reveals a solution | Retry becomes answer copying | Actual-missed-check-only answer-free feedback and full clear |
| Primary pass finalizes PY-010 | Retrieval and transfer are bypassed | Separate P1/P2/P3 gates; finalization only after fresh transfer |
| Retrieval can see primary output | Closed-note evidence is invalid | Remove primary code/output from retrieval context |
| Transfer reuses primary state or resembles a carried answer | Independence is false | Unseen supplied case, blank learner fields, no primary material |
| Return/reload skips the first incomplete boundary | Evidence chain becomes noncontiguous | Sanitized checkpoint resolver and anti-bypass tests |
| Intermediate private work persists | Privacy contract breaks | Allowlist only finalized boundary evidence; clear all raw/transient state |
| CM-30 is mounted after Python success | Slice silently widens into AI-901 | Explicit finalized-PY-010 terminal state and later-marker absence checks |
| Correctness changes SC-04 or implies access | Invariant world/canon breaks | `cityStateDelta=null`, no physical channel changes, restrained System ownership |
| Dense learning UI escapes narrow/zoom layouts | Required action becomes inaccessible | One active owner group, vertical reflow, no horizontal escape |
| Protected source is mistaken for accepted live integration | Status becomes dishonest | Separate protected-authority evidence from normal-route/release evidence |

No risk requires a Colonel or Commandant return. The remaining questions are viability and shell-detail questions owned downstream.

## Validation

| Check | Result | Evidence |
|---|---|---|
| Contiguous with accepted play | PASS | Current rail, scoreboard, queues, packet, and Demo Increment all name accepted all-three CM-10 -> explicit review as the next edge |
| Exact predecessor and fresh entry | PASS | One normal all-three boundary and one fresh semantic activation are specified; alternatives fail closed |
| Integration-sized scope | PASS | Complete PY-010 evidence chain is kept together; CM-30 and later work are excluded |
| Ordered learning and puzzle placement | PASS | Primary -> actual-miss repair/blank retry -> retrieval -> blank unseen transfer -> finalization |
| Bypass resistance | PASS | No observation, navigation, Tour, primary-only, retrieval-only, partial score, return, reload, or stale intent can finalize |
| Routes and returns recover safely | PASS | Existing CM-20/CM-21 survey returns clear private work and require fresh re-entry; no later shortcut is invented |
| Pacing avoids filler | PASS | Existing 8-11 minute Python allocation retained; no ornamental seam added |
| Predecessor/successor integrity | PASS | RP-002 remains closed predecessor; RP-004 remains planned but unreachable and undefined here |
| Whole-story plan distinct from implementation | PASS | RP-012 rail completion is not treated as live; normal implementation stops in RP-003 |
| No later-state exposure | PASS | Hard stop excludes CM-30+, save, bearing, RP-004, RP-013, successor, and world/authority effects |
| Privacy/accessibility/offline/invariant world | PASS at planning contract tier | Exact obligations and downstream viability checks are named |
| No hidden-lore or protected-user-file use | PASS | Neither hidden lore nor protected user files were opened or changed |

## Disposition

`FLOOR STACK READY`

`SS-RP003-PY010-v1` has an exact contiguous campaign position, recoverable entry/exit model, complete evidence-chain floor plan, dependency boundary, time budget, and forbidden-exposure stop. No campaign-order, canon, or scope contradiction requires return.

## Exact Office of Science Administrator handoff

Using `GDB-TD001-v1`, `WNMP-TD001-v1`, and `CFS-TD001-v1` as locked upstream authorities, evaluate the viability of shell candidate `SS-RP003-PY010-v1` at exactly `RP-003 / SC-04 / CM-20-CM-23`.

Confirm that the accepted all-three CM-10 normal boundary can safely make `REVIEW LOCAL WORK IMAGE` dispatchable through one fresh explicit activation, then compose the existing protected chain as genuinely blank CM-20 -> strict simultaneous `8/8` or actual-missed-check-only answer-free CM-21 repair/full clear/blank retry -> CM-22 closed-note condition/true/false/unavailable retrieval -> genuinely blank unseen CM-23 strict `8/8` transfer -> finalized `PY-010` only.

Resolve and record:

1. the exact normal-runtime gate and stale/replay/Tour rejection behavior for fresh review activation;
2. the allowlisted intermediate/final evidence needed for deterministic first-incomplete resume while excluding all raw/private/transient work;
3. evaluator reuse and anti-bypass proof without changing any frozen case, answer, check, threshold, or remediation mapping;
4. keyboard/pointer/touch semantics, focus/error association, native/programmatic blankness, live-region behavior, forced-color/reduced-motion parity, and desktop/narrow/zoom containment;
5. offline, performance, failure-recovery, and served-build requirements for one complete integration tranche; and
6. direct proof that CM-30, RP003-IE-01, save, bearing, RP-004, RP-013, successor, reward, access, authority, exam standing, and every physical/world response remain unreachable.

Produce `04-VIABILITY-ENVELOPE.md`, issue `VIABILITY READY`, `REVISE`, or `HOLD`, and hand the Mission Captain one buildable viability envelope. Do not add an Azure/Foundry implementation, new learning claim, case, answer, score, route, persistence field, asset, world event, or later-state content. If exact intermediate persistence cannot satisfy privacy and deterministic resume simultaneously, return that conflict to the Operations Planning Major rather than weakening either contract.
