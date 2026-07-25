# TD-001 Experience Blueprint

## Document control

| Field | Value |
|---|---|
| Stage | Tactical Operations Specialist |
| Agent ID | `tactical_operations_specialist` |
| Test drive | `TD-001` |
| Shell | `SS-RP003-PY010-v1` |
| Campaign address | `RP-003 / SC-04 / CM-20-CM-23` |
| Shell authority | `05-PLAYABLE-SLICE-SHELL.md`, disposition `SHELL READY` |
| Creative authority | `06-CREATIVE-TREATMENT.md`, disposition `CREATIVE LOCK` |
| Starting commit | `18681e1` |
| Validation tier | Tier 1 blueprint trace plus design-level state, route, accessibility, and responsive walkthrough |
| Disposition | `EXPERIENCE READY` |

This blueprint specifies the complete normal-route experience from the accepted all-three `CM-10` boundary through the no-action `PY010-P3` landing. It changes no canon, campaign order, case, answer, check, threshold, evidence field, checkpoint meaning, world condition, route, media asset, or later-state boundary.

## Compatibility finding

The shell and Creative Treatment are compatible without a variance.

- The shell requires one fresh review activation, strict primary/retrieval/transfer evidence, actual-miss-only answer-free repair, blank retries, allowlisted checkpoints, deterministic recovery, and a hard stop at `PY010-P3`.
- The treatment requires one removable human field folio, decisive group replacement, stable SC-04 presentation, quiet recovery, and player capability without world response.
- The experience below gives each checkpoint one mounted owner group, makes every dispatch and recovery deterministic, and preserves the world as a noninteractive invariant region throughout `CM-20-CM-23`.
- The inherited City Threshold plate remains a temporary runtime atmosphere plate, not a claim that the canonical SC-04 master, crops, masks, or hotspots are integrated.

No product, canon, floor-stack, viability, shell, or creative-treatment return is required.

## Experience identity

### Player-readable rule

At every boundary, the player can determine:

1. who owns the current layer;
2. what one responsibility is current;
3. what actions are presently valid;
4. what evidence, if any, was finalized;
5. how a miss can be recovered from; and
6. whether leaving the current boundary is permitted.

No state uses a world change, color, motion, sound, timing, score animation, or hidden progress meter to communicate any of those facts.

### Component envelope

The Combat Engineer should implement one bounded `CalibrationMarginPythonFloor` composition with:

- one persistent, invariant `SC04WorldRegion`;
- one and only one mounted `PythonFloorGroup` at a time;
- one persistent polite `PythonFloorStatus` inside the active group;
- pure controller and storage-agnostic checkpoint adapters;
- native forms and buttons for semantic convergence; and
- direct replacement between groups.

The world region and active group are layout siblings. An old group unmounts before the new group receives focus. No hidden, visually collapsed, off-canvas, or `aria-hidden` old group remains interactive.

## Canonical state and replacement graph

```text
CM10-READY / cm10_survey_complete / SCENE
  -- fresh REVIEW_LOCAL_WORK_IMAGE -->
CM20-P0 / python_primary / PILOT
  -- valid complete submit, 8/8, atomic P1 -->
CM22-R0 / python_retrieval / TEACHER
  -- evaluated miss -->
CM21-RF / retrieval_repair / TEACHER
  -- RETRY_BLANK_RETRIEVAL, clear -->
CM22-R0 / python_retrieval / TEACHER
  -- valid complete submit, 4/4, atomic P2 -->
CM23-T0 / python_transfer / PILOT
  -- evaluated miss -->
CM21-TF / transfer_repair / TEACHER
  -- RETRY_BLANK_TRANSFER, clear -->
CM23-T0 / python_transfer / PILOT
  -- valid complete submit, 8/8, atomic P3 -->
PY010-P3 / python_finalized / SYSTEM

CM20-P0
  -- evaluated miss -->
CM21-PF / primary_repair / TEACHER
  -- RETRY_BLANK_PRIMARY, clear -->
CM20-P0 / python_primary / PILOT

CM20-P0 or CM21-PF
  -- RETURN_TO_SURVEY, clear, write-free -->
CM10-READY / cm10_survey_complete / SCENE
  -- another fresh REVIEW_LOCAL_WORK_IMAGE required -->

malformed or contaminated durable boundary
  -- reject atomically, clear private/transient -->
accepted P0 / CM10-READY

exact sanitized P1 reload
  --> blank CM22-R0

exact sanitized P2 reload
  --> blank CM23-T0

exact sanitized P3 reload
  --> PY010-P3
```

There is no route from retrieval, retrieval repair, transfer, transfer repair, or `PY010-P3` back to survey in shell v1. There is no cancel dialog and no implicit `Escape` route.

## Group ownership and replacement

| State | DOM group ID | Active owner | Complete heading contract | Mounted content | Replacement target(s) |
|---|---|---|---|---|---|
| `CM10-READY` | `cm10_survey_complete` | `SCENE` | Current SC-04 survey is complete; local review is an expedition action | Existing three Recorded controls, enabled review action, two existing returns | `python_primary`, RP-002, or City Threshold |
| `CM20-P0` | `python_primary` | `PILOT` | Blank bounded Python primary | Read-only Builder Work scaffold provenance, three blank learner fields, local status, primary actions | `primary_repair`, `python_retrieval`, or survey |
| `CM21-PF` | `primary_repair` | `TEACHER` | Primary repair for the current missed checks | Submitted learner values retained privately and locally for association only, actual failed check IDs, answer-free guidance, retry and survey return | blank `python_primary` or survey |
| `CM22-R0` | `python_retrieval` | `TEACHER` | Closed-note four-boundary retrieval | Four blank learner response controls, local status, retrieval actions; no primary source, values, output, or feedback | `retrieval_repair` or `python_transfer` |
| `CM21-RF` | `retrieval_repair` | `TEACHER` | Retrieval repair for actual missed dimensions | Submitted responses retained privately and locally for association only, failed dimensions, answer-free contrast, retry | blank `python_retrieval` |
| `CM23-T0` | `python_transfer` | `PILOT` | Blank unseen transfer | Read-only distinct transfer scaffold provenance, three blank learner fields, local status, transfer actions; no primary or retrieval material | `transfer_repair` or `python_finalized` |
| `CM21-TF` | `transfer_repair` | `TEACHER` | Transfer repair for actual missed checks | Submitted transfer values retained privately and locally for association only, actual failed check IDs, answer-free guidance, retry | blank `python_transfer` |
| `PY010-P3` | `python_finalized` | `SYSTEM` | `PY-010` local evidence finalized | Concise factual, no-action status only; no prior work, score, reward, save, bearing, route, or next action | none |

### One-owner rule

- The owner label in the group heading is authoritative.
- A read-only scaffold inside a Pilot group carries a visible `BUILDER WORK // SUPPLIED` provenance label but does not create a second owner/message/action group.
- Learner inputs inside a Teacher retrieval group carry a visible `PILOT RESPONSE` field legend but do not change the group owner.
- `PythonFloorStatus` uses a visible `SYSTEM STATUS` label inside the active group. It is the group's single status channel, not an independent action group.
- Replaced groups are unmounted. Retained private learner values exist only inside the active miss-repair group and are destroyed on retry, return, replacement, sanitation, reload, or finalization.

## Form structure and blankness

### Primary and transfer

Each form has exactly three learner-owned controls:

1. equality-condition field;
2. true-branch label field; and
3. false-branch label field.

The two supplied bounded inputs, aligned loop/index structure, result append structure, and unavailable sealed-source dictionary are read-only Builder Work. The UI must not expose a completed source listing or editable supplied values. The controller assembles evaluator input from immutable contract data plus the three learner fields without writing the assembled source to DOM, storage, URL, logs, analytics, or QA captures.

Blank entry and retry mean:

- each learner control has `value=""`;
- no `defaultValue`, placeholder answer, autocomplete history, ghost text, previous attempt, generated source, evaluator output, score, or failed value is mounted;
- each control has a persistent visible label and neutral purpose-only help;
- any placeholder, if Quartermaster retains one, may describe format only and must be provably answer-free; and
- primary and transfer use separate component keys and separate memory objects.

### Retrieval

Retrieval has exactly four independently labelled blank response controls:

1. condition;
2. true branch;
3. false branch; and
4. unavailable boundary.

All four are required for semantic submit, but correctness is evaluated simultaneously as one current attempt. Primary fields, source, output, failed values, and wording are absent. Retrieval entry and every retry are wholly blank.

## Action and eligibility matrix

Visible labels below are copy contracts. Quartermaster may refine surface wording without changing the action ID, meaning, eligibility, owner, or destination.

| State | Semantic action ID | Label contract | Eligibility | Disabled/non-dispatchable rule | One-hit result | Replay/stale result |
|---|---|---|---|---|---|---|
| `CM10-READY` | `REVIEW_LOCAL_WORK_IMAGE` | `REVIEW LOCAL WORK IMAGE` | Campaign mode; exact all-three accepted state; private-free payload; fresh approved modality/token | Disabled and `aria-disabled=true` before exact all-three; enabled only at exact ready state | consumes token after validation; unmounts survey; mounts wholly blank `CM20-P0` | same token `one_hit_only`; stale/new token after replacement `action_unavailable`; no evidence |
| `CM20-P0` | `SUBMIT_PRIMARY` | `RUN BOUNDED COMPARISON` | Active exact group; native required fields nonblank; exact owner/version/action/modality/token | Button remains available; native/client validation blocks blank/whitespace controls before evaluator and before token consumption | evaluator miss -> `CM21-PF`; exact `8/8` -> atomic P1 then blank `CM22-R0` | duplicate token rejected; replaced group cannot dispatch |
| `CM20-P0` | `CLEAR_PRIMARY` | `CLEAR WORK` | At least one learner field contains a value | Disabled and `aria-disabled=true` when all fields blank | clears all three fields and local validation text; focuses first field; zero evidence | same token rejected; new token on blank disabled |
| `CM20-P0` | `RETURN_TO_SURVEY` | `RETURN TO SURVEY` | Exact active primary group | never available in retrieval or transfer states | clears all Python private/transient work, writes nothing, returns to accepted all-three survey heading | returned controller is closed; repeat has no route/evidence |
| `CM21-PF` | `RETRY_BLANK_PRIMARY` | `RETRY BLANK FORM` | Actual evaluated primary miss exists | absent otherwise | clears retained fields, result, failure details, tokens, and focus history; mounts blank `CM20-P0` | old repair action unavailable |
| `CM21-PF` | `RETURN_TO_SURVEY` | `RETURN TO SURVEY` | Exact primary repair only | absent from retrieval/transfer repair | same write-free, clear-all return as primary | old repair action unavailable |
| `CM22-R0` | `SUBMIT_RETRIEVAL` | `CHECK CLOSED-NOTE RETRIEVAL` | Active exact group; all four required controls nonblank; fresh exact token | blank/whitespace validation blocks before evaluator/token | miss -> `CM21-RF`; exact `4/4` -> atomic P2 then blank `CM23-T0` | duplicate/stale rejected; no carry |
| `CM22-R0` | `CLEAR_RETRIEVAL` | `CLEAR WORK` | At least one response contains a value | disabled when blank | clears all four controls/status; focuses first field; zero evidence | same token rejected |
| `CM21-RF` | `RETRY_BLANK_RETRIEVAL` | `RETRY BLANK RETRIEVAL` | Actual evaluated retrieval miss exists | absent otherwise | clears retained responses/result/failure details; mounts blank `CM22-R0` | old repair action unavailable |
| `CM23-T0` | `SUBMIT_TRANSFER` | `RUN UNSEEN TRANSFER` | Active exact group; native required fields nonblank; fresh exact token | blank/whitespace validation blocks before evaluator/token | miss -> `CM21-TF`; exact `8/8` -> atomic P3, clear all private/transient, mount `PY010-P3` | duplicate/stale rejected; no extra evidence |
| `CM23-T0` | `CLEAR_TRANSFER` | `CLEAR WORK` | At least one transfer field contains a value | disabled when blank | clears transfer controls/status; focuses first field; zero evidence | same token rejected |
| `CM21-TF` | `RETRY_BLANK_TRANSFER` | `RETRY BLANK TRANSFER` | Actual evaluated transfer miss exists | absent otherwise | clears retained transfer work/result/failures; mounts blank `CM23-T0` | old repair action unavailable |
| `PY010-P3` | none | none | n/a | no button, link, hotspot, implied route, or autofocus beyond heading | no-action landing | reload reconstructs same landing only from exact P3 |

### Submission rules

- Whitespace-only input is incomplete, not an evaluated miss.
- Incomplete submit sets `aria-invalid=true` only on incomplete controls, associates purpose-only required text, focuses the first incomplete control, and produces no evidence, attempt count, remediation, or consumed event token.
- A complete submit runs the frozen evaluator exactly once for a validated token.
- An evaluated miss records only a bounded in-memory reason and actual failed check IDs/dimensions for the current repair group. It does not store raw values or evaluator output.
- An exact pass first constructs the existing allowlisted record, then asks the checkpoint adapter to append it atomically. The next group mounts only after a committed exact prefix.
- A failed checkpoint append preserves the prior exact prefix byte-for-byte, clears active private/transient work, and reconstructs the prior prefix's safe resume target.

## Focus and announcement matrix

There is one `<div role="status" aria-live="polite" aria-atomic="true">` in the active group. Its node remains stable within a group; message IDs suppress duplicate announcements. Errors are also associated directly to their controls through `aria-describedby`; the live region does not replace field association.

| Event | Focus destination | Polite status contract | Error semantics |
|---|---|---|---|
| Fresh review accepted | complete `CM20-P0` heading (`tabIndex=-1`) | one factual blank-primary-ready message | all fields valid/blank until attempted submit |
| Blank primary/retrieval/transfer submit | first incomplete field | current form has incomplete required fields | incomplete fields `aria-invalid=true` and reference their required message |
| `CLEAR WORK` | first field of same form | work cleared; form is blank | remove all old invalid/error association |
| Evaluated primary/transfer miss | first actually failed learner control in new repair group | current attempt needs review; no score or answer | retained submitted control has `aria-invalid=true`; references its failed-check summary |
| Evaluated retrieval miss | first actually failed retrieval control in new repair group | current retrieval attempt needs review | only failed dimensions are invalid and associated |
| Repair retry | first field of wholly blank retry form | previous private work cleared; blank retry ready | no stale invalid/error state |
| Exact primary pass and committed P1 | complete `CM22-R0` heading | primary evidence finalized locally; closed-note retrieval ready | primary DOM absent |
| Exact retrieval pass and committed P2 | complete `CM23-T0` heading | retrieval evidence finalized locally; blank unseen transfer ready | retrieval DOM absent |
| Exact transfer pass and committed P3 | complete `PY010-P3` heading | `PY-010` local evidence finalized; no onward action | transfer DOM absent |
| `RETURN_TO_SURVEY` | accepted survey heading; review action is next in tab order | local Python work cleared; review closed | no Python error remains |
| Exact P1/P2/P3 resume | complete reconstructed group heading | concise local resume status naming only the current responsibility | reconstructed form blank; no prior error |
| Malformed active state with valid prefix | safe reconstructed heading for last exact prefix | local review recovered from an invalid state | no private diagnostic text |
| Malformed/contaminated durable boundary | accepted P0/CM-10 heading | local review reset to the accepted survey boundary | no private value or invalid key is reflected |
| Duplicate/stale activation | current valid focus remains unchanged | no repeated announcement unless the player initiated a currently visible control and needs `Action no longer available` | no evidence or route mutation |

Focus never moves to the world, a hidden result, a removed owner group, a disabled control, a score, or a sealed-boundary representation.

## Error, retry, cancel, return, resume, and malformed-state rules

### Errors

- Required-field errors are local completeness failures and do not invoke the evaluator.
- Evaluator misses expose only actual failed check IDs or retrieval dimensions plus approved answer-free remediation concepts.
- Forbidden-operation or sealed-source attempts are ordinary actual failed checks; copy must describe the boundary without revealing a completed source or answer.
- No error uses alarm language, punishment, denial, damage, access language, city judgment, or a world treatment.
- Unexpected controller errors fail closed to the last exact checkpoint, clear private/transient state, and expose one bounded reason category such as `local_review_recovered`. Raw exceptions, learner values, source, stack, or payload never enter player copy or logs.

### Retry

- Retry is unlimited.
- Retry is a semantic action, not a form reset side effect.
- Retry clears all current-form values, assembled source, results, scores, failures, help expansion, tokens, and focus history before mounting a new keyed blank form.
- The new form has no DOM, programmatic, or visible carry from the failed form.

### Cancel

- There is no confirmation dialog, pending network request, asynchronous wait, or modal to cancel.
- `Escape` does not navigate or discard work because no shell-v1 Escape route exists.
- The only route-equivalent cancellation is the explicit `RETURN TO SURVEY`, available solely in `CM20-P0` and `CM21-PF`.
- `CLEAR WORK` is local clearing, not a route cancellation.

### Return

- Primary return is write-free and clears all Python private/transient work before restoring accepted all-three survey.
- Returning does not preserve P0 authored work, create evidence, increment attempts, alter observations, or dispatch a world action.
- Another fresh `REVIEW LOCAL WORK IMAGE` activation is required.
- No return action is rendered or registered at `CM22`, retrieval repair, `CM23`, transfer repair, or `PY010-P3`.

### Resume

| Sanitized durable prefix | Reconstructed state | Blankness/focus |
|---|---|---|
| P0 / zero records | accepted all-three `CM10-READY`; review closed until another fresh activation | Python work absent; survey heading focus |
| P1 / primary only | `CM22-R0` | all four retrieval responses blank; group heading focus |
| P2 / primary + retrieval | `CM23-T0` | all three transfer fields blank; group heading focus |
| P3 / primary + retrieval + transfer | `PY010-P3` | no action; landing heading focus |

Active authoring, incomplete submit, evaluated miss, repair view, and uncommitted pass never resume. Reload sanitation clears them.

### Malformed and contaminated state

- Exact allowlisted keys, shell version, packet, mapping, checkpoint, ordered record prefix, all-true dimensions, capped numeric metadata, null deltas, unchanged continuation, and null successor are required.
- Unknown, private, answer-bearing, partial, failed, duplicate, out-of-order, AI-901, note, save, bearing, route, access, authority, later-state, or world-effect content rejects the entire candidate.
- Rejection preserves the prior accepted prefix byte-for-byte and clears active private/transient state.
- With no trustworthy prior prefix, recovery is accepted P0/CM-10, never a guessed first-incomplete form.
- Malformed state is never echoed into UI, telemetry, URL, QA, console, or release artifacts.

## Seven-modality semantic convergence

Every visible action uses a native `<button type="button">` or native `<form>` submit. The UI converts all supported activation paths to the same private-free semantic envelope:

```text
shellVersion
packetId
activeGroupId
owner
actionId
activationKind
opaqueFreshEventToken
```

No field value is included in the activation envelope; form data remains in controller-local memory and is read only after envelope validation.

| Modality | Input presentation | Converged semantic event |
|---|---|---|
| Pointer | primary-button click | `activationKind=pointer` |
| Touch | native tap/click | `activationKind=touch` |
| Keyboard Enter | native form submit or focused button activation | `activationKind=keyboard_enter` |
| Keyboard Space | focused native button activation | `activationKind=keyboard_space` |
| Switch-like activation | platform semantic click on focused native control | `activationKind=switch` |
| Speech | accessible-name command invokes the named native control | `activationKind=speech` |
| Screen reader | virtual-cursor/button activation | `activationKind=screen_reader` |

For all seven:

1. exact group, owner, action, modality, shell, packet, token shape, and private-free payload validate first;
2. eligibility validates second;
3. the token is consumed third;
4. at most one evaluator/checkpoint/route result follows; and
5. duplicate, stale, combined, wrong-owner, wrong-group, passive, forged, private-bearing, key-repeat, and Tour-derived input grants no result.

Hover, focus, visibility, timing, animation end, route mounting, live-region output, and field editing are not semantic activations.

## Responsive and accessible layout contract

### Shared source order

The DOM order is fixed:

1. page/main heading context;
2. invariant `SC04WorldRegion`;
3. active `PythonFloorGroup`;
4. within the group: owner/heading, present responsibility, local status, form/content, primary action, local clear, and authorized safe return.

CSS may place world and folio side by side at wide widths, but it may not reorder DOM or keyboard order.

### Wide (`>=1280px`, representative `1920x1080`)

- Use a two-column shell with world approximately `58-62%` and folio `38-42%`.
- The 16:9 world is undistorted, visually dominant, and uses the existing registered full plate.
- The complete current group, all required fields, status, and every current action fit within `100dvh` with no page-level horizontal or vertical scroll at `1920x1080`.
- Primary/transfer fields use one contained column. Retrieval may use a two-by-two field subgrid only if DOM order remains condition, true branch, false branch, unavailable boundary.
- Supplied scaffold wraps with `white-space: pre-wrap` and `overflow-wrap:anywhere`; it cannot force horizontal escape.
- No control overlays the world.

### Laptop (`768-1279px`)

- Use natural two-row flow: full-width world first, then full-width folio.
- Page vertical scroll is permitted; horizontal scroll is forbidden.
- The folio uses one column, except retrieval may retain two columns above `1024px` when every label and error fits without truncation.
- All headings, owner labels, status, fields, and actions remain visible in source order. No sticky action may cover content.

### Narrow (`<=767px`)

- One column: world, owner/heading, responsibility, status, fields/content, primary action, clear, then permitted return.
- World remains full-width 16:9 using the same inherited plate; it is not hidden.
- All form subgrids collapse to one column.
- Long labels, IDs, source fragments, and errors wrap; `min-width:0` applies to grid children.
- Vertical scroll is permitted. There is no page-level horizontal escape.

### Effective `200%` text zoom

- Treat the reduced effective width as narrow, regardless of physical viewport.
- Preserve the same source and tab order as narrow.
- Do not use fixed heights, clipped panels, font-size overrides that defeat zoom, transform scaling, or an inner horizontal source scroller.
- World remains visible before the folio. Required actions remain reachable by ordinary vertical scroll.

### Targets, labels, and semantics

- Every required button, input, select, textarea, and actionable disclosure is at least `44 x 44 CSS px`.
- Each field has a persistent visible `<label>`, unique programmatic name, `required`, and exact help/error association.
- Group headings form a valid hierarchy and are programmatically focusable but not in normal tab order.
- Disabled controls use native `disabled` plus truthful text where the state is otherwise meaningful; disabled state never relies on reduced opacity or color alone.
- Repair failure lists are semantic lists; check IDs/dimensions are human-readable through Quartermaster copy but remain machine-addressable.
- No table is required in the runtime experience.

### Forced colors

- Use system colors for text, borders, backgrounds, focus, disabled state, and error boundaries under `forced-colors: active`.
- Retain a `3px` or equivalent visible focus outline with separation from the control edge.
- Owner changes use heading text and structural boundaries, not hue.
- Blank/editable/read-only/failed states use labels and border style in addition to color.
- The world image may remain photographic context, but no required meaning or action depends on its pixels.

### Reduced motion and audio

- Group replacement is immediate under `prefers-reduced-motion: reduce`.
- Any default transition must not delay DOM replacement, focus, announcement, or action eligibility and must be shorter than the direct task rhythm.
- No miss, pass, checkpoint, or finalization animation touches the world.
- No new audio is introduced. Silence has complete parity.

## World, crop, hotspot, and semantic-region plan

### Runtime world registration for TD-001

- Reuse the existing `calibration-margin-world` region and the same imported `city-threshold-overview-master.png`.
- Preserve the existing 16:9 full-plate `object-fit: cover` behavior and the narrow same-master visibility exception.
- Keep identical source, crop behavior, exposure, effect state, alt text class, and environmental presentation for entry, primary, repair, retrieval, transfer, and landing.
- Add no state-specific plate, crop, mask, effect, light, audio, font, or media asset.
- This inherited plate is temporary atmosphere only. It is not `SC-04-MASTER`, not either canonical cycle-reveal image, and not evidence that the scene-sheet production package is integrated.

### Semantic world regions

The scene sheet reserves:

- `EXPOSED-SEQUENCE-A`;
- `EXPOSED-SEQUENCE-B`;
- `BOUNDED-DIFFERENCE`;
- `SEALED-BOUNDARY`;
- `LOCAL-COUPLING`; and
- `RETURN-BEARING`.

During `CM20-CM23` every one of these is context-only and noninteractive. The Python floor must not create a hotspot, hover target, focus target, crop switch, highlight, tooltip, disabled seal control, or world-overlay action for any of them. The only semantic world container is the existing labelled world `<section>` plus its descriptive image.

The accepted survey's three observation controls remain the sole normal player actions associated with A, B, and sealed-boundary evidence. Their existing Recorded state is not duplicated inside the Python floor.

### Future master registration boundary

When a true `SC-04-MASTER` package is authorized in a later shell, its crop coordinates, masks, hotspot geometry, reduced-motion stills, and responsive derivatives require independent registration and testing. TD-001 neither performs nor pre-approves that integration.

## Copy, content, and asset placeholders

No placeholder below may contain an expected answer, completed line, completed source, output, native category, sealed content, world purpose, access meaning, authority, exam guarantee, or onward cue.

| Placeholder | Purpose contract | Downstream owner |
|---|---|---|
| `COPY-CM20-OWNER-HEADING` | Pilot-owned blank primary heading | Quartermaster |
| `COPY-CM20-INSTRUCTION` | Explain the three learner-owned fields and immutable supplied scaffold without teaching an answer | Quartermaster |
| `COPY-CM20-FIELD-CONDITION` | Persistent visible purpose label for the equality-condition field | Quartermaster |
| `COPY-CM20-FIELD-TRUE` | Persistent visible purpose label for the true-branch label field | Quartermaster |
| `COPY-CM20-FIELD-FALSE` | Persistent visible purpose label for the false-branch label field | Quartermaster |
| `COPY-CM20-REQUIRED` | Purpose-only required-field error | Quartermaster |
| `COPY-CM21-PY-CHECK-{checkId}` | Answer-free description for each actual failed approved Python check ID | Quartermaster, using existing remediation concepts only |
| `COPY-CM22-OWNER-HEADING` | Teacher-owned closed-note retrieval heading | Quartermaster |
| `COPY-CM22-INSTRUCTION` | State closed-note responsibility and four equal dimensions without recalling the answer | Quartermaster |
| `COPY-CM22-FIELD-{dimension}` | Persistent visible labels for condition/true/false/unavailable response fields | Quartermaster |
| `COPY-CM21-RETRIEVAL-{dimension}` | Answer-free contrast for an actually failed retrieval dimension | Quartermaster |
| `COPY-CM23-OWNER-HEADING` | Pilot-owned unseen transfer heading | Quartermaster |
| `COPY-CM23-INSTRUCTION` | Establish distinct blank transfer without referencing primary values or result | Quartermaster |
| `COPY-PY010-P3-STATUS` | Factual local finalization status; no score spectacle, save, reward, access, bearing, or next action | Quartermaster |
| `COPY-LOCAL-REVIEW-RECOVERY` | Bounded privacy-safe malformed/checkpoint recovery status | Quartermaster |
| `COPY-NEGATIVE-AUTHORITY` | Concise offline/course-authored/no-authority/no-exam-guarantee wording where the shell presentation requires it | Quartermaster |
| `STYLE-FIELD-FOLIO` | Matte expedition-owned material, owner separation, blankness, focus, error, forced-color, and responsive polish | Image Specialist |
| `ASSET-SC04-INHERITED-PLATE` | Provenance entry for the existing inherited runtime image and explicit non-SC-04-master limitation | Quartermaster |

Combat Engineer owns semantic IDs, controller reason IDs, associations, and behavior. Quartermaster owns final surface-safe wording. Image Specialist owns final CSS presentation without changing behavior. No new runtime asset placeholder is authorized.

## Implementation acceptance matrix

| ID | Acceptance |
|---|---|
| `EXP-001` | Exact all-three campaign `CM-10` is the only state that enables `REVIEW LOCAL WORK IMAGE`; partial, Tour, stale, forged, private-bearing, wrong-owner, wrong-version, and wrong-modality intents reject before token consumption. |
| `EXP-002` | All seven modalities converge on one validated review activation and at most one `CM20-P0` transition. |
| `EXP-003` | Fresh review mounts exactly one Pilot group with three genuinely blank fields and no answer/source/result carry. |
| `EXP-004` | Incomplete primary submit focuses the first incomplete field, associates required text, consumes no evaluator attempt/token, and creates no evidence. |
| `EXP-005` | Complete primary submit invokes the frozen evaluator once; only simultaneous current-attempt `8/8` can request P1. |
| `EXP-006` | Each primary miss mounts only actual failed check IDs, answer-free guidance, associated error, retained private current-attempt fields, and first-failed-field focus. |
| `EXP-007` | Primary retry destroys the repair group and all private/transient values, then mounts a keyed wholly blank primary focused at its first field. |
| `EXP-008` | Primary and primary-repair return clear all Python private/transient work, write no checkpoint/evidence, restore accepted all-three survey heading, and require another fresh review. |
| `EXP-009` | Exact P1 atomically stores only the existing allowlisted primary record and mounts blank retrieval with all primary DOM/data absent. |
| `EXP-010` | Retrieval exposes exactly four blank controls and passes only at simultaneous current-attempt `4/4`. |
| `EXP-011` | Retrieval miss exposes only actual failed dimensions and answer-free contrast; retry destroys all responses and mounts a wholly blank retrieval form. |
| `EXP-012` | Exact P2 atomically appends the existing retrieval record and mounts distinct blank transfer with all primary/retrieval material absent. |
| `EXP-013` | Transfer uses the distinct existing transfer case and separate empty memory; only simultaneous current-attempt `8/8` can request P3. |
| `EXP-014` | Transfer miss and retry mirror the answer-free, actual-failed-only, complete-clear, blank-retry, first-field behavior without a return route. |
| `EXP-015` | Exact P3 atomically appends only transfer evidence, clears all private/transient state, finalizes only `PY-010`, and mounts a no-action landing. |
| `EXP-016` | P0/P1/P2/P3 resume reconstructs exactly CM10/blank retrieval/blank transfer/no-action landing respectively, heading first. Active or failed work never resumes. |
| `EXP-017` | Unknown, partial, failed, duplicate, out-of-order, private, AI-901, note, save, bearing, route, authority, later-state, or world-effect durable content rejects atomically without downgrading the last exact prefix. |
| `EXP-018` | `PY-010` evidence creates zero `RP003-IE-01` evidence or credit. Observation, activation, focus, display, retry, timing, modality, presentation, resume, and Tour also create zero credit. |
| `EXP-019` | Exactly one owner/message/content/action group is mounted, visible, focusable, and exposed to accessibility APIs at every state. |
| `EXP-020` | Every field has persistent label, unique name, required/invalid semantics, exact help/error association, and at least `44 x 44 CSS px` target size. |
| `EXP-021` | One stable polite atomic status region announces each meaningful event once; replay/stale state does not duplicate announcements. |
| `EXP-022` | Wide `1920x1080` presents dominant world plus complete current group/actions with no outer scroll or obstruction. |
| `EXP-023` | Laptop, narrow, and effective `200%` use world-first natural source order, wrap all content, preserve tab order, and have no page horizontal escape. |
| `EXP-024` | Forced colors preserve boundaries, disabled/error/read-only distinctions, and visible focus without color dependence. |
| `EXP-025` | Reduced motion uses direct replacement with identical meaning and immediate focus; no world treatment responds to learning state. |
| `EXP-026` | The same inherited world plate, crop behavior, alt relationship, and environmental presentation remain byte/source stable across every state; no world hotspot is added for `CM20-CM23`. |
| `EXP-027` | Source and built output contain no reachable `CM-30+`, AI-901, save, bearing, RP-004, RP-013, successor, reward, access, authority, exam standing, external action, or physical response marker. |
| `EXP-028` | No learner value, assembled source, failed value, evaluator result, token, focus history, private note, credential, endpoint, payload, or diagnostic escapes memory to storage, URL, analytics, log, console, capture, or report. |
| `EXP-029` | No network, fetch, Azure/Foundry call, credential, native API, external process/file operation, `eval`, or `exec` is introduced. |
| `EXP-030` | Existing CM-00/CM-10, protected journey, RP-002 return, canonical frame, curriculum validator, full suite, build, budget, offline, and patch-integrity checks remain passing. |

### Focused test mapping

The Combat Engineer's focused tests should make the acceptance IDs visible:

- `calibrationMarginPythonFloor.test.js`: `EXP-001-018`, `EXP-027-029`;
- `calibrationMarginPythonCheckpoint.test.js`: `EXP-009`, `EXP-012`, `EXP-015-018`, `EXP-028`;
- `calibrationMarginPythonNormalRoute.test.js`: `EXP-001-003`, `EXP-008`, `EXP-016`, `EXP-018`, `EXP-026-030`;
- `calibrationMarginPythonUi.test.js`: `EXP-003-007`, `EXP-009-015`, `EXP-019-026`.

Computed layout, focus movement, forced-color, reduced-motion, and assistive-name results must be claimed only from direct evidence at the appropriate implementation or release stage.

## Blueprint walkthrough

| Walkthrough | Result |
|---|---|
| Exact state graph and one owner at every checkpoint | PASS |
| All actions, eligibility, disabled truth, one-hit semantics, and replay outcomes specified | PASS |
| Primary/retrieval/transfer thresholds and no-cross-credit unchanged | PASS |
| Actual-miss-only answer-free repair with wholly blank retry specified | PASS |
| Focus, direct association, and one polite announcement channel specified | PASS |
| Return, clear, retry, cancel absence, reload, checkpoint failure, and malformed recovery deterministic | PASS |
| Pointer, touch, Enter, Space, switch, speech, and screen-reader activation converge | PASS |
| Wide, laptop, narrow, and effective-`200%` source-order layouts specified | PASS |
| `>=44px`, forced-color, reduced-motion, wrap, and no-horizontal-escape rules specified | PASS |
| Existing world/crop limitation and noninteractive SC-04 semantic regions explicit | PASS |
| Copy/content/style/provenance placeholders have downstream owners | PASS |
| No presentation action mints evidence or implies world response | PASS |
| Hard stop and protected boundaries remain explicit | PASS |

## Hard stop

The experience ends at `PY010-P3`.

The Combat Engineer must not mount, preload as reachable UI, route to, dispatch, score, imply, or expose:

- `CM-30`, `CM-31`, `CM-32`, `CM-33`, `CM-34`, `CM-40`, `CM-41`, or `CM-50`;
- `RP003-IE-01`, AI-901 content/evaluator/evidence, note review, save eligibility, save, verified note restore, or onward bearing;
- RP-004, RP-013, a successor, post-ending content, reward, recognition, authentication, access, permission, authority, exam standing, external action, or service authorization;
- sealed-source content or a world/native correctness category; or
- any SC-04 geometry, material, light, route, coupling, seal, maintenance, environmental-clock, access-state, or world-state response.

The hidden-lore vault and protected user files remain unopened and untouched.

## Variances and risks

### Variances

**None.**

Enabling the exact all-three review action is the fixed shell objective, not a variance from the accepted pre-shell disabled presentation.

### Implementation risks

| Risk | Blueprint mitigation |
|---|---|
| Existing normal controller deliberately rejects review | Add the new Python-floor transition only through the exact validated all-three boundary; keep every prior rejection class and validation-before-consumption behavior. |
| Importing the full protected journey could expose later authority | Prefer bounded Python-only controller/evaluator reuse. Any evaluator extraction must follow the shell's recorded byte-equivalence variance candidate rule. |
| Repair focus conflicts with group replacement | Rebuild the repair as the sole active group, retain only the current private submitted controls for field association, focus the first actual failed control, then destroy everything on retry/return. |
| Checkpoint failure could imply a partial pass | Do not mount the next group until atomic commit succeeds; failure reconstructs the prior exact prefix's safe target. |
| Existing generic city styles contain old small narrow values | New Python-floor selectors must meet the final canonical `>=44px` rules and be verified after cascade resolution. |
| Current runtime plate is not the SC-04 production master | Preserve it identically as atmosphere and state the limitation; add no crop/hotspot/media work. |
| Quiet landing could look like a route dead end | Use a complete factual no-action status and settled hierarchy, never an onward cue or reward. |
| Status/error announcements could duplicate under React replacement | Stable per-group live node plus message IDs; direct field association remains authoritative. |
| Retained failed fields could leak after repair | Keep them memory-only in the sole repair group, then explicit destruction tests on retry, return, reload, replacement, and finalization. |

## Report envelope

- **Stage / agent:** Tactical Operations Specialist / `tactical_operations_specialist`
- **Shell and treatment:** `SS-RP003-PY010-v1`; `CREATIVE LOCK` at `06-CREATIVE-TREATMENT.md`
- **Complete graph:** exact `CM10-READY -> CM20-P0 -> CM21-* as missed -> CM22-R0 -> CM23-T0 -> PY010-P3`, with only primary/primary-repair write-free survey return
- **Interaction decisions:** native semantic actions, exact eligibility, validation-before-consumption, one-hit tokens, truthful disabled states, no implicit Escape/cancel route
- **Focus decisions:** group heading on entry/pass/resume, first incomplete on required error, first actual failed control in repair, first blank field on retry/clear, survey heading on return
- **Responsive/accessibility decisions:** world-first DOM; wide world/folio split; laptop/narrow/zoom natural stack; `>=44px`; persistent labels; direct errors; one polite status region; forced-color/reduced-motion parity
- **Recovery/resume:** private clearing, unlimited blank retry, exact P0-P3 reconstruction, atomic fail-closed malformed handling
- **Semantic-region decision:** invariant inherited full plate only; no `CM20-CM23` world hotspot, crop, mask, highlight, or response
- **Placeholders:** final surface copy and provenance to Quartermaster; presentation CSS to Image Specialist; behavior and reason IDs to Combat Engineer; no new media
- **Variances:** none
- **Protected boundaries:** later states, AI-901, save/bearing, RP-004/RP-013, authority/world response, hidden lore, browser save/storage inspection, and named protected user work remain outside scope
- **Validation:** Tier 1 blueprint trace and design-level state/route/accessibility/responsive walkthrough pass
- **Disposition:** `EXPERIENCE READY`

## Exact Combat Engineer handoff

- **Stage / agent:** Combat Engineer / `combat_engineer`
- **Shell:** `SS-RP003-PY010-v1`
- **Starting authority:** synchronized `SHELL READY` shell, `CREATIVE LOCK` treatment, and this `EXPERIENCE READY` blueprint
- **Starting runtime boundary:** normal accepted all-three `CM-10` with the currently disabled/non-dispatchable `REVIEW LOCAL WORK IMAGE - Eligible`
- **Bounded objective:** implement the complete exact `CM20-CM23` Python-only normal route and storage-agnostic P0-P3 checkpoint behavior in one integration tranche, using this graph and acceptance matrix without inventing player meaning
- **Permitted product files:** only the exact implementation envelope in `05-PLAYABLE-SLICE-SHELL.md`
- **Required files:** the shell-authorized Python floor/checkpoint/controller/UI files and focused tests as needed; do not create unrelated runtime, media, route, curriculum, persistence, or configuration files
- **Implementation priorities:** exact review dispatch and seven-modality one-hit behavior; three-field blank primary; actual-failed-only repair; four-field blank closed-note retrieval; separate blank unseen transfer; strict `8/8 -> 4/4 -> 8/8`; atomic allowlisted P0-P3; deterministic privacy-safe return/resume/recovery; one active group; focus/live-region semantics; hard stop
- **Presentation boundary:** implement structural source order and accessible layout classes only; final copy/assets/polish remain Quartermaster and Image Specialist work
- **Existing-world boundary:** retain the same inherited plate and crop behavior; add no world hotspot, mask, effect, media, or state response
- **Validation tier:** Tiers 2-4, including all focused and connected tests, full suite, readiness self-tests, production build, budgets, offline/network/source/bundle/later-state/privacy checks, inherited-art identity, and clean patch/status
- **Required disposition:** `FUNCTIONALLY COMPLETE`, `REVISE`, or `HOLD`
- **Push gate:** on honest `FUNCTIONALLY COMPLETE`, create one dedicated Combat Engineer commit, push `main`, and verify `HEAD == origin/main`
- **Stop boundary:** stop at `PY010-P3`; do not expose AI-901, save, bearing, later CM states, RP-004, RP-013, successor, reward, access, authority, external action, exam standing, world response, hidden lore, or protected user work
- **Next recipient:** Quartermaster / `quartermaster`

If implementation requires changing a case, answer, threshold, evidence schema, checkpoint meaning, storage technology, route, focus destination class, accessibility contract, performance cap, world behavior, or hard stop, record the shell variance immediately and return it through the Mission Captain to the earliest owning Colonel. Do not silently reinterpret this blueprint.
