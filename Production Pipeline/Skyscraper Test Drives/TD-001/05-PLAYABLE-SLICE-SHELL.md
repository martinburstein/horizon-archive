# TD-001 Playable Slice Shell

## Document control

| Field | Value |
|---|---|
| Stage | Mission Captain |
| Agent ID | `mission_captain` |
| Shell ID | `SS-RP003-PY010` |
| Version | `v1` |
| Full contract identity | `SS-RP003-PY010-v1` |
| Test drive | `TD-001` |
| Campaign position | `RP-003 / SC-04 / CM-20-CM-23` |
| Product brief | `GDB-TD001-v1` |
| World baseline | `WNMP-TD001-v1` |
| Floor stack | `CFS-TD001-v1` |
| Viability envelope | `VE-TD001-v1` |
| Pre-shell source commit | `86cc735832db342fad120116a80f41f52ad01953` |
| Runtime source baseline | `7efe50004972dfc9070f9f2c9dc39f155fc28b99`; no runtime/curriculum difference through the pre-shell source commit |
| Branch | `main` |
| Disposition | `SHELL READY` |

This document is the single construction contract for the Marine field unit. The four Colonel authorities reconcile without an unresolved contradiction, omission, or ownership conflict. A downstream role may choose among the freedoms named here, but it may not silently change a fixed boundary. Any mismatch uses the variance procedure in this shell.

## Change history

| Version | Change | Authority | Result |
|---|---|---|---|
| `v1` | First issue: integrates the guarded product and world baselines, exact campaign floor stack, and viability envelope into one bounded normal-route Python floor | `GDB-TD001-v1`, `WNMP-TD001-v1`, `CFS-TD001-v1`, `VE-TD001-v1` | `SHELL READY` |

Any change to a fixed field creates a new shell version after return to the named owner. Marine interpretation within an explicitly flexible field does not change the shell version.

## Source and build identity

### Accepted source boundary

- The accepted live route ends at normal `RP-003 / SC-04 / CM-10 SURVEY`.
- All three observations may be separately `Recorded` in any order.
- At the exact all-three state, `REVIEW LOCAL WORK IMAGE` is visibly `Eligible` but remains disabled and non-dispatchable.
- The current normal route contains only transient `CM-00` and `CM-10`; it does not mount `CM-20-CM-23`.
- The protected `CalibrationMarginProtectedJourney` contains frozen evaluator and evidence authority, but its complete `CM-00-CM-50` smoke journey is not a normal-route component.
- `git diff 7efe50004972dfc9070f9f2c9dc39f155fc28b99..86cc735832db342fad120116a80f41f52ad01953 -- horizon-archive-game curriculum` is empty.

### Accepted pre-shell build baseline

The following is inherited measurement from `VE-TD001-v1`, not a claim that this shell document rebuilt the game:

- Vite production build: `170` modules.
- JavaScript: `index-BWwt4kKy.js`, `1,108,337` raw bytes.
- CSS: `index-JTpP97Cx.css`, `74,121` raw bytes.
- No new RP-003 runtime world, audio, or font asset is authorized.

The Combat Engineer establishes the candidate build identity at `FUNCTIONALLY COMPLETE`. The Intelligence Officer independently re-establishes it at release.

## Colonel reconciliation

### Authorities reconciled

1. `GDB-TD001-v1` fixes the player promise, priority order, quality bar, and exact bounded objective.
2. `WNMP-TD001-v1` fixes the surface-safe story identity, ownership language, SC-04 invariance, protected unknowns, and restrained emotional progression.
3. `CFS-TD001-v1` fixes the contiguous campaign address, dependency order, permitted returns, P0-P3 checkpoint meanings, pacing, and terminal landing.
4. `VE-TD001-v1` fixes the state model, evaluator/evidence reuse, privacy and atomicity, accessibility, offline/performance limits, diagnostics, and validation ladder.

### Audit result

| Audit | Result | Resolution |
|---|---|---|
| Product promise versus story identity | PASS | Player capability may increase; the world remains unchanged and categorically unresolved. |
| Campaign order versus evidence order | PASS | `CM-20 -> CM-22 -> CM-23`; `CM-21` exists only after an actual miss. |
| Fresh entry versus resume | PASS | Return to survey requires another fresh review activation. A sanitized P1/P2 reload may resume at the first incomplete verified form without redoing completed evidence. |
| Deterministic resume versus privacy | PASS | Only an ordered prefix of finalized allowlisted form evidence persists; active and failed work never resumes. |
| Intermediate checkpoints versus no-save boundary | PASS | P1-P3 are sanitized learning checkpoints, not an expedition-note save, save eligibility, verified note restore, or onward bearing. |
| Protected evaluator reuse versus later-state isolation | PASS | Python-only evaluator/retrieval utilities may be reused or extracted; the complete protected journey and every AI-901/save/bearing path remain forbidden on the normal route. |
| Visual quality versus zero new media | PASS | The existing registered SC-04 presentation and separate expedition layer are sufficient; styling may improve without adding a runtime media asset. |
| Ownership | PASS | Every fixed requirement and acceptance method has one primary owner below. |

No issue requires return to an earlier Colonel. No hidden lore, external authority, unavailable evidence, or Martin decision is needed.

## Player-facing purpose and emotional promise

From the accepted all-three survey boundary, the player deliberately opens a fresh local-work review, completes an honestly blank conditional exercise, receives answer-free recovery after an actual miss, retrieves the conditional boundary without notes, and proves it on a genuinely blank unseen transfer before finalizing only `PY-010`.

The emotional movement is:

```text
deliberate curiosity
  -> honest exposure
  -> recoverable effort
  -> bounded clarity
  -> quiet internalization
  -> independent transfer
  -> restrained confidence
```

The player becomes more capable. The City, Machine, Builder surface, route, light, sound source, material, environmental clock, access state, and authority state do not respond.

## Exact entry contract

Normal entry is permitted only when all of these are exact:

- mode is ordinary campaign, never Demo Tour;
- packet is `RP-003`, board is `SC-04`, and phase is accepted `CM-10 SURVEY`;
- the three approved observation IDs are separately recorded exactly once under the existing survey authority;
- `continuation` remains `continuation`;
- `cityStateDelta`, `worldStateDelta`, and `accessStateDelta` are `null`;
- `successor` is `null`;
- private and transient work are cleared;
- no replayed event, learning evidence, mastery evidence, save eligibility, authority, external action, or world change is present;
- the review marker reports exact all-three eligibility; and
- one new semantic `REVIEW LOCAL WORK IMAGE` intent passes exact packet, controller version, mode, owner, phase, action, approved modality, opaque fresh token, and private-free payload validation.

Eligibility, visibility, hover, focus, timing, key repeat, stale/restored intent, Tour traversal, a partial survey, or a forged/combined/private-bearing state cannot dispatch review or create evidence. Intent validation occurs before token consumption. One valid token causes at most one transition and is never persisted.

## Exact internal state and interaction contract

### Required state graph

```text
CM10-READY
  -> fresh REVIEW LOCAL WORK IMAGE
  -> CM20-P0 blank primary
       -> current-attempt 8/8
            -> atomic P1
            -> CM22-R0 blank closed-note retrieval
       -> actual miss
            -> CM21-PF actual-failed-check-only repair
            -> clear all private/transient work
            -> CM20-P0 wholly blank retry

CM22-R0
  -> current-attempt 4/4
       -> atomic P2
       -> CM23-T0 genuinely blank unseen transfer
  -> actual miss
       -> CM21-RF failed-dimension-only answer-free contrast
       -> clear all private/transient work
       -> CM22-R0 wholly blank retry

CM23-T0
  -> current-attempt 8/8
       -> atomic P3
       -> clear all private/transient work
       -> PY010-P3 finalized-PY-010-only landing
  -> actual miss
       -> CM21-TF actual-failed-check-only repair
       -> clear all private/transient work
       -> CM23-T0 wholly blank retry
```

### Fixed learning requirements

- Objective: existing `PY-010` conditional reinforcement only.
- Primary and transfer reuse the exact existing cases in `curriculum/readiness/RP-003/contract.json`.
- Both forms reuse the exact eight checks in that contract and pass only at simultaneous current-attempt `8/8`.
- Retrieval verifies exactly four dimensions: condition, true branch, false branch, and unavailable boundary; pass is simultaneous current-attempt `4/4`.
- Primary and transfer have distinct cases and distinct empty session state.
- A partial score never carries forward.
- `CM-21` appears only after an evaluated miss and identifies only the actually failed check IDs or retrieval dimensions.
- Repair copy contains no expected condition, branch value, completed line, completed source, primary output, retrieval answer, or transfer answer.
- Every retry is natively, programmatically, semantically, and visibly blank.
- Only P3 finalizes the overall `PY-010` objective.
- Observations, review activation, scaffold visibility, output display, repair, focus, timing, modality, Tour, presentation, confidence, save state, and release evidence grant zero credit.
- `PY-010` grants zero credit to `RP003-IE-01`.

### Fixed ownership

| Owner | Owns | Cannot imply |
|---|---|---|
| `SCENE` | Existing physical correspondence, bounded visible difference, sealed unavailable boundary, and invariant operation | Purpose, correctness, judgment, teaching, invitation, refusal, or response |
| `BUILDER WORK` | Existing local unfinished scaffold and approved supplied structure | English teaching, score, feedback, complete explanation, or proof of audience |
| `PILOT` | Fresh review intent, learner-owned fields, cautious interpretation, and submitted local work | Native category, sealed content, Builder motive, access, or authority |
| `SYSTEM` | Gate validation, active form state, local evaluation, sanitation, checkpoint, and finalized-evidence status | Builder speech, city judgment, physical causation, permission, or consciousness |
| `TEACHER` | Human-authored answer-free repair and retrieval prompts in the separate learning layer | Builder doctrine, Machine explanation, native meaning, or world response |

At any moment exactly one owner/message/content/action group is active in visual, pointer, keyboard, DOM, and accessibility order. Replaced groups unmount or become fully inert.

## Exact permitted exits

The slice may produce only:

1. a wholly blank primary retry after bounded primary repair;
2. a wholly blank retrieval retry after bounded retrieval contrast;
3. a wholly blank transfer retry after bounded transfer repair;
4. an early write-free return from `CM-20` or primary `CM-21` to the accepted all-three survey, with all Python private/transient work cleared and no new evidence;
5. fail-closed recovery to accepted P0/CM-10 when an invalid or contaminated durable boundary is supplied; or
6. `PY010-P3`, a no-action landing with only finalized `PY-010`.

Returning to survey requires another fresh explicit review activation. No late-chain `CM-22` or `CM-23` shortcut/return is authorized in v1.

## Hard stop and forbidden exposure

The normal route terminates at `PY010-P3`. It must not mount, preload as reachable interface, dispatch, score, imply, or reveal:

- `CM-30`, `CM-31`, `CM-32`, `CM-33`, `CM-34`, `CM-40`, `CM-41`, or `CM-50`;
- `RP003-IE-01`, AI-901 primary/retrieval/transfer/explanation/result content, or any AI-901 credit;
- expedition-note review, save eligibility, note save, verified note restore, safe return from later floors, or onward bearing;
- an RP-004 route, destination, scene, state, asset, copy, or action;
- `RP-013`, a successor, post-ending content, or a central-mystery answer;
- reward, authentication, permission, recognition, access, identity, authority, exam standing, external action, or service authorization;
- a physical/world response or any change to SC-04 geometry, material, light cause, effect mask, route, coupling, seal, maintenance process, or environmental clock; or
- hidden-lore material or inference.

Forbidden framing includes password, login, hack, bypass, access granted/denied, city acceptance, Machine approval, native correctness, official/original/damaged sequence, awakening, recognition, or response.

## Fixed, optional, and forbidden scope

### Fixed

- Exact entry gate and one fresh seven-modality/one-hit review activation.
- Complete `CM-20-CM-23` Python evidence chain in one integration tranche.
- Existing cases, checks, retrieval dimensions, evaluator behavior, remediation mapping, evidence schema, SC-04 shell, safe returns, accessibility metadata, and no-authority behavior.
- Ordered P0/P1/P2/P3 sanitized checkpoint prefixes and atomic fail-closed writes.
- Existing first-person, landscape-dominant, maximum-quality cinematic photorealistic direction.
- No-credit Demo Tour, offline operation, invariant world, deterministic recovery, responsive/accessibility parity, and the hard stop.

### Optional

- `CLEAR WORK` on an active learner form.
- Exact answer-free wording selected from the existing remediation concepts.
- Neutral owner/status wording inside the fixed ownership contract.
- A dedicated Python-floor component or bounded extension of the existing RP-003 component.
- A pure reducer/controller or another pure storage-agnostic controller shape.
- Extraction of Python-only evaluator helpers when byte-equivalent behavior is proved.
- A wide-layout arrangement that preserves source order and equal semantic importance.
- Restraint in local motion or sound using existing runtime means, provided silent and reduced-motion parity is complete.

Optional work cannot add a seam, branch, route, objective, evidence field, case, answer, asset, or later action.

### Forbidden

- New canon, scene, location, route, puzzle, observation, objective, case, answer, threshold, score, hint branch, persistence technology, storage schema, backend, SDK, endpoint, credential, cloud resource, network call, native API, world asset, audio asset, font, or story state.
- Runtime import or invocation of the complete protected journey, AI-901 evaluator/content, note persistence, verified restore, bearing, or later-floor utilities.
- Raw-source persistence, answer-bearing placeholders, prefilled controls, primary-to-transfer reuse, result hardcoding, input mutation, forbidden operation, sealed-source read, or output-only credit.
- Inspection or mutation of Martin's campaign save or browser storage to manufacture the gated state.

## Allowed systems, assets, sources, and files

### Source authorities that may be read and reused

- `curriculum/readiness/RP-003/contract.json`
- Python-only exports from `horizon-archive-game/src/CalibrationMarginProtectedJourney.js`:
  - `evaluateCalibrationMarginPython`
  - `evaluateCalibrationMarginPythonRetrieval`
  - approved presentation/remediation metadata as needed
- `horizon-archive-game/src/CalibrationMarginProtectedSurvey.js`
- `horizon-archive-game/src/CalibrationMarginNormalEntry.js`
- `horizon-archive-game/src/CalibrationMarginEntry.jsx`
- relevant RP-003 composition in `horizon-archive-game/src/App.jsx`
- relevant SC-04 and command-panel styles in `horizon-archive-game/src/styles.css`
- existing `CanonicalGameFrame` and its accepted tests
- existing local Node/Vite/test/readiness/build/E2E infrastructure
- existing SC-04 world plate already imported by the accepted RP-003 component

### Exact implementation file envelope

The Marine package may edit only these product surfaces without a variance:

- `horizon-archive-game/src/CalibrationMarginProtectedSurvey.js`
- `horizon-archive-game/src/CalibrationMarginNormalEntry.js`
- `horizon-archive-game/src/CalibrationMarginEntry.jsx`
- `horizon-archive-game/src/App.jsx`
- `horizon-archive-game/src/styles.css`

It may create:

- `horizon-archive-game/src/CalibrationMarginPythonFloor.js` — pure Python-only controller/state/sanitation;
- `horizon-archive-game/src/CalibrationMarginPythonCheckpoint.js` — storage-agnostic exact P0-P3 checkpoint sanitizer/atomic adapter;
- `horizon-archive-game/src/CalibrationMarginPythonFloor.jsx` — one active player-facing Python floor;
- `horizon-archive-game/test/calibrationMarginPythonFloor.test.js`;
- `horizon-archive-game/test/calibrationMarginPythonCheckpoint.test.js`;
- `horizon-archive-game/test/calibrationMarginPythonNormalRoute.test.js`; and
- `horizon-archive-game/test/calibrationMarginPythonUi.test.js`.

The Combat Engineer may extract Python-only evaluator functions from `CalibrationMarginProtectedJourney.js` into one new bounded helper only if keeping them in place would force a normal import of later-state authority. Such extraction requires a recorded variance candidate, byte-equivalent focused results, unchanged protected-journey results, and no semantic change.

No other runtime, curriculum, persistence, route, art, audio, font, configuration, or build file is in scope without a variance.

### Exact checkpoint envelope

`CalibrationMarginPythonCheckpoint.js` may accept and return only:

- `version`;
- `shellVersion=SS-RP003-PY010-v1`;
- `packetId=RP-003`;
- `mappingId=RP003-A3-CALIBRATION-MARGIN`;
- checkpoint `P0`, `P1`, `P2`, or `P3`;
- `continuation=continuation`;
- `cityStateDelta=null`;
- `worldStateDelta=null`;
- `accessStateDelta=null`;
- `successor=null`; and
- an ordered zero-to-three prefix of existing allowlisted `PY-010` evidence records.

Each record may contain only the existing contract store keys:

- `packet_id`
- `mapping_id`
- `form`
- `skill_or_objective_id`
- `dimension_correctness`
- capped `attempt_count`
- capped `hint_level`
- allowlisted `confidence`
- allowlisted `misconception_tags`
- `mastery_status`

The only valid prefix order is primary, retrieval, transfer. Every accepted dimension is true. Unknown, partial, failed, duplicate, out-of-order, private, AI-901, note, save, bearing, route, authority, or later-state keys reject the candidate atomically and preserve the prior exact prefix byte-for-byte.

The adapter is storage-agnostic at construction. Connecting it to any durable App save key or browser-storage write requires explicit proof that the existing allowlist and atomic behavior are preserved; the Marine may not inspect Martin's actual stored value to prove this.

## Privacy, clearing, save, resume, and recovery

### Always private/transient

Learner fields, assembled source, mutable case copies, evaluator results, partial scores, failed values, retrieval/transfer responses, answer prose, feedback, diagnostics beyond bounded reason IDs, hint/guide state beyond numeric evidence metadata, event tokens, handled-token sets, focus history, credentials, endpoints, prompts, payloads, service data, identity content, private notes, and sealed content remain memory-only.

They are cleared on:

- repair exit;
- retry;
- return;
- group replacement;
- invalid-state recovery;
- reload sanitation; and
- P3 finalization.

They never enter storage, URL, analytics, log output, QA capture, or release report.

### Checkpoint and resume

| Exact sanitized prefix | First incomplete owner |
|---|---|
| P0 / no Python records | accepted CM-10; one new review activation then wholly blank `CM20-P0` |
| P1 / primary only | wholly blank `CM22-R0` |
| P2 / primary + retrieval | wholly blank unseen `CM23-T0` |
| P3 / primary + retrieval + transfer | `PY010-P3` no-action landing |
| Anything else | clear transients and fail closed to accepted P0/CM-10 recovery |

An active failed or partially authored form never resumes. A failed checkpoint commit preserves the last exact prefix, clears active private work, and reconstructs its blank first incomplete form.

TD-001 does not perform an expedition-note save, make save eligible, restore a verified note, or mark a bearing.

## Accessibility and responsive contract

- Pointer, touch, keyboard Enter, keyboard Space, switch, speech, and screen-reader activation converge on the same semantic action and one-hit result.
- Native button and form semantics are preferred.
- Each editable field has a persistent visible label, unique programmatic name, required/invalid semantics, and exact help/error association.
- One polite status region announces current feedback; stale and duplicate announcements do not repeat.
- Entry and group replacement focus the complete active heading first, then expose the first required control in source order.
- A miss associates feedback to and focuses the first failed learner control.
- Repair acknowledgement and retry focus the first field of the wholly blank form.
- Exact pass focuses the next group heading, never a hidden result.
- Return restores the accepted survey heading or review action under the existing contract.
- Every required control/action is at least `44 x 44 CSS px`.
- At representative `1920 x 1080`, the dominant world and complete current group/actions fit the dynamic viewport without outer horizontal or vertical scroll.
- At narrow widths and effective `200%` text zoom, the world precedes one natural source-ordered interface column. Vertical scroll is allowed; page-level horizontal escape, clipping, and world-overlay obstruction are not.
- Long source, labels, errors, and negative-authority copy wrap.
- Meaning never depends on color, glow, motion, sound, or position alone.
- Forced colors retain boundaries, native states, and visible focus.
- Reduced motion uses direct state replacement with complete informational parity.
- Sound is optional, grants no cue or evidence, and has a silent equivalent.
- No timer exists; time grants no credit.

## Performance, offline, and invariant-world contract

### Budgets

| Measure | Acceptance |
|---|---|
| New runtime media/font/network payload | `0` bytes |
| Raw JavaScript | `<= 1,163,754` bytes without variance |
| Raw CSS | `<= 77,828` bytes without variance |
| Production modules | `<= 176` without a documented factoring reason |
| Production build | `<= 60s` on the existing gate host |
| Focused RP-003 controller/UI tests | `<= 30s` |
| Protected RP-003 reference smoke | `< 300s` |
| Complete isolated E2E | `<= 180s`, never overlapping build |
| Sampled local review/evaluator dispatch | no main-thread task over `100ms` |
| Served identity | root/assets HTTP `200` and byte-identical to candidate `dist` |

Exceeding a cap creates a variance; it cannot be hidden by changing the baseline.

### Offline and no-authority

The slice uses no fetch, network, Azure/Foundry call, SDK, endpoint, credential, authentication, account, permission, external file/process/service, `eval`, `exec`, system command, file read/write, sealed-source read, or external action.

It confers no exam item, exam credit, exam guarantee, Microsoft authority, service authorization, access, recognition, identity, reward, refusal, denial, or permission. Tour remains isolated, zero credit, and unable to save.

`continuation` stays unchanged. `cityStateDelta`, `worldStateDelta`, and `accessStateDelta` stay `null`. `successor` stays `null`. The SC-04 world plate, geometry, materials, light causes, effect masks, coupling, sealed boundary, route, maintenance, and environmental clocks remain invariant for every pass, miss, retry, retrieval, transfer, and finalization.

## Canon and visual invariants

- `Calibration Margin` remains a provisional expedition term, not a native label.
- Precision reveals a boundary without deciding its meaning.
- The sealed source remains unavailable and unread; unavailable is not false, different, empty, denied, wrong, or permission to infer.
- The Machine, Builder disappearance, consciousness, purpose, Python correspondence, sealed contents, and intended ending remain unresolved.
- SC-04 remains a civilization-scale working cross-section rather than a classroom, laboratory, shrine, factory floor, kiosk, screen, door, or human workstation.
- Two exposed bands, one ordinary bounded difference, a fused sealed boundary, practical bypass, flush coupling, three scales of operation, and multiple stewardship eras remain the visual thesis.
- The bounded difference receives no privileged color, glow, focus, animation, sound, or light.
- The sealed boundary remains non-affordant and cannot resemble a denied control.
- The view remains first-person with no protagonist, ship, hands, body, shadow, reflection, companion, occupant, portrait, or prior human trace.
- Human-readable Python and learning feedback remain a separate expedition layer.
- A canonical reveal reference does not claim runtime integration.

## Marine freedoms

### Reconnaissance Sergeant — creative treatment

May choose:

- the surface-safe emotional throughline and exact restrained tone;
- player-facing owner/status/instruction copy that contains no answer;
- the relationship between quiet SC-04 presence and the separate expedition work layer;
- visual hierarchy and pacing emphasis across entry, effort, repair, recall, transfer, and landing; and
- one spoiler-safe reveal decision for later Image Specialist execution.

May not alter a state, owner meaning, case, answer, threshold, evidence rule, route, physical response, canon fact, or hard stop.

### Tactical Operations Specialist — experience blueprint

May choose:

- exact component-level arrangement inside one active source-ordered group;
- wide-layout columns versus stacks;
- field grouping and code-scaffold presentation;
- control placement, focus wording, live-region phrasing, and responsive breakpoints;
- exact error association and recovery affordance consistent with the required focus class; and
- how the accepted survey visually hands off to and receives the Python floor.

May not add a late-chain return, alternate entry, new branch, concurrent group, prefill, answer browser, hidden focus target, or later action.

### Combat Engineer — implementation

May choose:

- pure reducer/controller factoring inside the exact file envelope;
- how the three learner fields are assembled into the frozen evaluator input without exposing completed source;
- storage-agnostic checkpoint implementation and App integration;
- test organization within the named test envelope; and
- a byte-equivalent Python-only evaluator extraction if a recorded variance candidate proves it necessary for isolation.

May not change evaluator semantics, cases, answers, checks, threshold, evidence keys, modality list, focus destination class, performance caps, storage technology, protected journey behavior, or hard stop.

### Quartermaster — content and assets

May choose:

- final surface-safe instructions, labels, status, blank-state, repair, retrieval, transfer, finalization, and negative-authority copy;
- answer-free mapping wording for the already-authorized remediation concepts;
- reuse of existing local symbols/styles where semantic ownership remains clear; and
- documentation/provenance for the existing reused world plate.

May not add a runtime media/font/audio asset, expose an expected answer, change a case, add lore, imply a Builder teacher, or turn the seal into an access state.

### Image Specialist — presentation and reveal

May choose:

- final CSS/material/light/atmosphere/interface polish using the existing world asset;
- local motion only when reduced-motion parity is exact;
- visible focus, forced-color, narrow, zoom, and desktop refinements;
- one spoiler-safe reveal candidate that varies scale, subject, or composition from recent reveals; and
- provenance and one named visual checklist item.

May not change functionality/evidence, generate more than one candidate, add a required runtime media asset, imply world response, or claim a reference is integrated without evidence.

## Protected files and systems

Never inspect, alter, stage, move, delete, or commit:

- `Art Of No Mans Sky Book Scan.pdf`
- `Simplilearn Training Files/`

Never open or infer from `DO_NOT_READ_HORIZON_ARCHIVE_HIDDEN_LORE_VAULT.md` without Martin's explicit authorization.

Protected product systems not authorized for normal-route invocation:

- complete `CalibrationMarginProtectedJourney` smoke runner;
- AI-901 evaluator, cases, answers, and `RP003-IE-01`;
- note persistence/save adapter and later verified restore;
- onward-bearing and later safe-return paths;
- RP-004 and later runtime routes;
- Martin's existing browser storage and campaign save; and
- any user-owned work outside the exact file envelope.

## Requirement ownership and acceptance

| Requirement family | Primary owner | Acceptance method |
|---|---|---|
| Product promise and priority order | Commandant | Shell-to-brief contract check |
| Canon, mystery, ownership, visual/world invariants | Colonel | Shell-to-masterplan and visible-copy/plate review |
| Campaign position, order, entry, return, landing | Operations Planning Major | State-graph and route tests |
| Evaluator, evidence, privacy, checkpoint, accessibility, offline, performance | Office of Science Administrator | Focused controller/UI/privacy tests, validator, build and measurements |
| Cross-discipline shell clarity | Mission Captain | Tier 1 shell audit and variance routing |
| Emotional treatment | Reconnaissance Sergeant | Creative treatment review against fixed shell |
| Flow, layout, focus, responsive blueprint | Tactical Operations Specialist | Blueprint trace and focused UI/accessibility tests |
| Functional behavior | Combat Engineer | Tiers 2-4 |
| Final copy and asset completeness | Quartermaster | Content/asset ledger and placeholder scan |
| Visual/accessibility polish and reveal | Image Specialist | Presentation review and provenance |
| Release and variance classification | Intelligence Officer | Independent Tier 5 and line-by-line shell reconciliation |

## Validation ladder

### Tier 1 — shell contract

Before Marine interpretation:

- identity/version/address agree across all five Colonel artifacts;
- exact all-three normal entry is the sole review gate;
- the state graph contains only `CM-20-CM-23` plus finalized `PY-010`;
- cases, checks, retrieval dimensions, thresholds, remediation meaning, and evidence schema are unchanged;
- P0-P3 records form a strict ordered allowlisted prefix;
- source scans find no new asset, storage schema, network, Azure/Foundry, AI-901, route, save, authority, or world effect;
- every fixed requirement has an owner and method; and
- the exact file envelope and Marine freedoms are explicit.

### Tier 2 — focused construction

Prove:

- exact review dispatch and every rejection class;
- seven modalities and validation-before-consumption one-hit behavior;
- blankness on every first entry and retry;
- strict primary `8/8`, retrieval `4/4`, and transfer `8/8`;
- actual-miss-only answer-free remediation;
- complete clearing at repair, retry, return, replacement, and finalization;
- P0-P3 sanitation, atomic writes, no downgrade, and first-incomplete resume;
- Tour isolation and zero cross-credit;
- heading/field focus, labels, error association, and one polite live region;
- one active group and hard later-state absence;
- no private key/value leakage;
- normal App/UI reachability from the accepted boundary; and
- no protected full-journey, AI-901, save, or bearing invocation.

### Tier 3 — connected regression

Run the new focused tests plus:

- `calibrationMarginProtectedJourney.test.js`
- `calibrationMarginProtectedSurvey.test.js`
- `calibrationMarginNormalEntry.test.js`
- `calibrationExercise.test.js` as historical privacy/regression only
- connected `canonicalFrame` and RP-002 return tests
- source/bundle reachable-marker absence checks
- `python curriculum/readiness/RP-003/validate_mapping.py --self-test`

### Tier 4 — `FUNCTIONALLY COMPLETE`

Combat Engineer runs:

- all focused and related checks;
- full `npm test`;
- every current readiness-validator self-test;
- `npm run build`;
- bundle/module/media budget checks;
- inherited-art immutability checks;
- source/dist/served identity and later-state-absence checks;
- local offline/no-network proof; and
- clean patch/status checks.

Then create one dedicated commit, push `main`, and verify `HEAD == origin/main`.

### Tier 5 — independent release

Intelligence Officer independently runs:

- full suite and all readiness validators;
- production build;
- isolated production preview with HTTP `200` preflight;
- one complete non-overlapping E2E;
- desktop, narrow, and effective-`200%` review;
- keyboard/focus, disabled-state, error association, live-region, forced-color, and reduced-motion review;
- console/network/overflow/asset/hash checks;
- QA restoration and owned-preview shutdown;
- line-by-line shell comparison and classification of every variance; and
- final synchronization.

No live gated-state claim may be made without direct evidence. Deterministic source/test/served-bundle evidence must be used when reaching the state would otherwise require Martin's save or browser-storage mutation.

## Definition of done

`SS-RP003-PY010-v1` is done only when:

1. exact accepted all-three CM-10 is the sole normal entry;
2. one fresh semantic review activation opens a wholly blank CM-20 primary;
3. current-attempt strict `8/8` is the sole primary pass;
4. each actual miss produces only failed-ID answer-free repair and then a wholly blank retry;
5. exact closed-note `4/4` retrieval occurs with primary material absent;
6. genuinely blank unseen strict `8/8` transfer is independent of the primary;
7. only P3 finalizes `PY-010`;
8. every private/transient value is cleared or excluded from durable state;
9. only exact ordered allowlisted P0-P3 prefixes survive sanitation and writes are atomic;
10. return, reload, invalid-state recovery, and resume reconstruct the correct blank first incomplete boundary without cross-credit or downgrade;
11. Tour, observation, navigation, focus, presentation, and later evidence grant zero credit;
12. keyboard, pointer, touch, switch, speech, and screen-reader behavior converge;
13. labels, focus, errors, live region, targets, desktop, narrow, zoom, forced colors, and reduced motion pass;
14. offline, no-authority, no-exam-guarantee, invariant-world, and zero-new-media requirements pass;
15. `CM-30+`, `RP003-IE-01`, save, bearing, RP-004, RP-013, successor, reward, access, authority, and physical/world response remain unreachable and absent;
16. focused, connected, full, validator, build, served, E2E, live-review, restoration, and sync gates pass at their owning stages;
17. all variances are classified and no unauthorized divergence remains; and
18. the Intelligence Officer issues `AS BUILT RELEASED`.

## Variance procedure

A Marine must stop the affected work and append this record to its stage artifact:

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
- canon, mystery, world, ownership meaning -> Colonel;
- campaign order, dependency, pacing, route, checkpoint -> Operations Planning Major;
- learning, evidence, privacy, accessibility, save/checkpoint, offline, recovery, performance -> Office of Science Administrator;
- shell ambiguity or cross-discipline conflict -> Mission Captain;
- emotional treatment -> Reconnaissance Sergeant;
- flow, layout, interaction, focus, responsive blueprint -> Tactical Operations Specialist;
- functional defect -> Combat Engineer;
- content or major asset defect -> Quartermaster;
- presentation defect -> Image Specialist;
- release evidence or reconciliation -> Intelligence Officer.

The discovering role may continue only on work demonstrably independent of the variance. It may not silently weaken or reinterpret the fixed requirement. The Intelligence Officer owns final classification as `ACCEPTED IMPROVEMENT`, `REQUIRED CORRECTION`, `MASTERPLAN UPDATE`, `DEFERRED LIMITATION`, or `UNAUTHORIZED DIVERGENCE`.

## Mission Captain validation

| Check | Result |
|---|---|
| Every workflow shell field is present | PASS |
| Current source boundary matches the predecessor claim | PASS |
| All Colonel identities, versions, addresses, and dispositions agree | PASS |
| No Colonel contradiction or unowned requirement remains | PASS |
| Scope is one integration-sized Python evidence chain | PASS |
| Fixed, optional, forbidden, file, system, and asset boundaries are explicit | PASS |
| Exact entry, states, exits, returns, resume, and hard stop are testable | PASS |
| Learning/evidence, privacy, checkpoint, accessibility, responsive, offline, performance, canon, and visual invariants are measurable | PASS |
| Each Marine has meaningful bounded freedom | PASS |
| Hidden lore and private answer material are absent | PASS |
| Forbidden later content and protected user work are named | PASS |

Validation evidence at issuance:

- focused existing authority suite: `36/36 PASS`;
- `curriculum/readiness/RP-003/validate_mapping.py --self-test`: `SELF-TEST PASS`;
- runtime/curriculum source difference from accepted source checkpoint to pre-shell source: none;
- no current runtime integration, live gated visual, save behavior, or release is claimed by this document.

## Disposition and signature

**Disposition:** `SHELL READY`

**Mission Captain:** `mission_captain`

**Issued contract:** `SS-RP003-PY010-v1`

**Construction order:** Reconnaissance Sergeant -> Tactical Operations Specialist -> Combat Engineer -> Quartermaster -> Image Specialist -> Intelligence Officer.

The Marines are authorized to construct only this version. The shell remains fixed until an accepted variance creates a successor version.

## Exact Reconnaissance Sergeant handoff

- **Stage / agent:** Reconnaissance Sergeant / `reconnaissance_sergeant`
- **Shell:** `SS-RP003-PY010-v1`
- **Starting authority:** this `SHELL READY` contract plus `GDB-TD001-v1`, `WNMP-TD001-v1`, `CFS-TD001-v1`, and `VE-TD001-v1`
- **Bounded objective:** produce one compelling, surface-safe creative interpretation for the complete fresh review -> blank primary -> answer-free repair if missed -> closed-note retrieval -> blank unseen transfer -> finalized-`PY-010` path
- **Permitted files:** `Production Pipeline/Skyscraper Test Drives/TD-001/06-CREATIVE-TREATMENT.md` only
- **Validation tier:** Tier 1 creative contract trace against this shell
- **Stop boundary:** do not write runtime code, final blueprint, final copy, generated art, new canon, case, answer, state, route, asset, or later-floor content
- **Required output:** `06-CREATIVE-TREATMENT.md` with emotional arc, player-readable hierarchy, owner separation, answer-free language envelope, visual/audio intent using existing assets, flexible versus fixed choices, risk checks, and one exact Tactical Operations Specialist handoff
- **Required disposition:** `CREATIVE LOCK`, `REVISE`, or `HOLD`
- **Next recipient:** Tactical Operations Specialist / `tactical_operations_specialist`

If any compelling treatment appears to require a physical response, access implication, expected answer, new asset, late-chain return, or later action, record a variance and return it to the named earliest owner rather than changing the shell.
