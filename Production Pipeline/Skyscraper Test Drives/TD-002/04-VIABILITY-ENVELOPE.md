# TD-002 Viability Envelope - Guarded Delta

## Document control

| Field | Value |
|---|---|
| Stage | Office of Science Administrator |
| Agent ID | `office_of_science_administrator` |
| Envelope version | `VE-TD002-v1` |
| Stable baseline | `VE-TD001-v1` |
| Product brief | `GDB-TD002-v1` |
| World baseline | `WNMP-TD002-v1` |
| Floor stack | `CFS-TD002-v1` |
| Shell candidate | `SS-RP003-IE01-v1` |
| Campaign address | `RP-003 / SC-04 / CM-30-CM-34` |
| Exact predecessor | accepted no-action `PY010-P3` |
| Preceding stage commit | `87fdf3241edf45f711b136168ec8a769f7676e31` |
| Source retrieval date | `2026-07-25` |
| Disposition | `VIABILITY READY` |

This is a compact technical delta over `VE-TD001-v1`. The accepted global
privacy, accessibility, offline, authority, invariant-world, performance, test,
and release standards remain controlling except where this document issues a
new versioned TD-002 budget from the accepted TD-001 release baseline.

## Viability conclusion

`CM-30-CM-34` is buildable as one normal-runtime extraction floor without
changing the frozen `RP003-IE-01` mapping or importing the protected complete
journey. The implementation can reuse the accepted TD-001 predecessor,
controller/checkpoint patterns, RP-003 extraction evaluator, evidence record
shape, sanitation rules, semantic UI, and release ladder.

The bounded additions are:

1. an extraction-only ordered checkpoint adapter;
2. an extraction-only normal controller for primary, repair, interlude,
   delayed retrieval, distinct transfer, explanation, and terminal landing;
3. one normal composition seam after exact `PY010-P3`;
4. one player-facing extraction group renderer or a bounded extension of the
   accepted RP-003 renderer;
5. focused contract, controller, route, UI, privacy, accessibility, and
   anti-bypass tests; and
6. a production-excluded, storage-free gated-review fixture.

No backend, account, network path, Azure/Foundry resource, SDK, REST/CLI call,
credential, endpoint, payload, service response, live analyzer, new learning
case, new answer, new evidence dimension, new world asset, expedition-note
save, route, or world state is required.

## Official-source verification

The named `foundry-azure-source-priority` skill was unavailable in this
session. In accordance with the project fallback, only official Microsoft Learn
sources were consulted:

1. [AI-901 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901),
   retrieved `2026-07-25`. The page labels its current objectives as
   "Skills measured as of April 15, 2026" and includes information extraction
   from documents/forms, images, audio, and video plus a lightweight Content
   Understanding application.
2. [Azure Content Understanding overview](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview),
   retrieved `2026-07-25`. It supports multimodal supplied inputs,
   user-defined/schema-aligned structured output, and source grounding.
3. [Content Understanding analyzer reference](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/analyzer-reference),
   retrieved `2026-07-25`. It describes analyzers as reusable configurations
   that define input type, extracted elements, and output structure.
4. [Content Understanding FAQ](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/faq),
   retrieved `2026-07-25`. It confirms document, text, image, audio, and video
   input coverage and defined-schema/grounding concepts.

### Source disposition

`PASS - NO CONTRADICTION`.

The official objective still supports the SOLIDIFIED internal
`AI901-D2-O7 / RP003-IE-01` focus. TD-002 teaches a bounded offline subset:
identify supplied inputs, respect a defined output schema and provenance, and
avoid inventing a value for missing evidence. It does not claim that every live
Content Understanding analyzer universally returns `null` for missing input.
The exact `null`/unsupported rule is the existing course-authored assessment
boundary, not a new or volatile service-runtime claim.

If a later official source contradicts the objective, modality coverage,
schema/provenance basis, or the project's mapping, construction stops with
`HOLD` and returns here. No SDK, portal, model, endpoint, API-version, pricing,
or deployment-detail claim is authorized by this envelope.

## Reused versus new capabilities

### Reuse without semantic change

| Capability | Accepted authority | TD-002 use |
|---|---|---|
| Exact normal predecessor | `CalibrationMarginNormalEntry`, `CalibrationMarginPythonFloor`, and exact Python P3 checkpoint | Accept only finalized `PY-010`, all three observations, no IE evidence, no private material, and terminal no-action state |
| Seven modalities and one-hit validation | TD-001 Python intent/checkpoint pattern | Validate exact shell, packet, active group, owner, action, modality, and opaque fresh token before consuming the token |
| Frozen extraction cases/evaluator | `contract.json` and `evaluateCalibrationMarginInformationExtraction` | Reuse exact P01/R01/T01, three dimensions, expected values, and simultaneous strict `3/3` |
| Unsupported explanation evaluator | `calibrationMarginUnsupportedExplanation` | Reuse the exact separately valid explanation boundary; never expose it as an answer |
| Failed-dimension projection | protected `answerFreeFailure` behavior and RP-003 remediation contract | Return only actual failed dimension IDs or the explanation-boundary ID, with answer-free guidance |
| Evidence record shape | RP-003 `evidence_contract.store` and protected `evidenceRecord` shape | Persist only exact allowlisted finalized form records |
| Privacy and atomic sanitation | TD-001 Python checkpoint adapter and RP-003 protected sanitizer | Validate exact keys/order before atomic replacement; preserve the prior valid prefix on failure |
| Normal composition and UI shell | TD-001 RP-003 world frame, `CalibrationMarginEntry`, Python floor UI, and CSS | Replace one active group inside the invariant SC-04 frame with native labeled controls and deterministic focus |
| Release infrastructure | current Node tests, RP-003 validator, Vite build, preview, served identity, E2E, patch and cleanup gates | Extend focused evidence; retain full functional and independent release gates |

### Add only for this shell

The Mission Captain may authorize:

1. `CalibrationMarginExtractionCheckpoint` or an equivalently bounded module
   using the exact record and route-envelope keys below.
2. `CalibrationMarginExtractionFloor` or an equivalently bounded pure
   storage-agnostic controller.
3. One composition seam that changes the finalized Python landing from
   no-action to one exact explicit extraction-entry action only when the full
   predecessor conjunction passes.
4. One extraction form renderer or a semantic extension of the current RP-003
   component.
5. A test-only gated-review host and fixture excluded from `src`, App/main,
   production imports, and `dist`.
6. New focused tests and nonprivate bounded diagnostic reason codes.

### Forbidden reuse or exposure

Normal play must not call or expose:

- `runCalibrationMarginProtectedJourneySmoke`;
- the protected full persistence/save adapter;
- `SAVE EXPEDITION NOTE`, verified restore, bounded review, or onward bearing;
- `CM-40` or any later RP-003 state;
- expected-answer exports in player-facing state, DOM, accessibility text,
  placeholders, data attributes, logs, QA captures, or persisted values;
- a test fixture, test route, query-string state injector, developer backdoor,
  browser-storage seed, or arbitrary checkpoint injection in production; or
- a live Foundry/Azure/Content Understanding path.

Shared evaluators may be factored into a smaller pure module only if output is
byte-equivalent for the frozen reference and bypass cases and both the protected
journey and normal extraction tests pass.

## Exact state and transition model

### Prefix model

`IE-P0` through `IE-P3` are sanitized local progression checkpoints, not
expedition-note saves, rewards, permissions, player-facing scores, or additional
skill IDs.

| Prefix | Exact meaning | Durable IE evidence | First reconstructed boundary |
|---|---|---|---|
| `IE-P0` | Exact accepted `PY010-P3`; no extraction form finalized | `[]` | Fresh explicit entry is required; then blank `CM-30` |
| `IE-P1` | Primary P01 strict `3/3` finalized | one exact `RP003-IE-01 / primary` record | Zero-credit `CM-32` interlude and explicit continue |
| `IE-P2` | Primary and delayed R01 retrieval strict `3/3` finalized | exact ordered primary + retrieval records | Genuinely blank `CM-34` transfer plus blank explanation control |
| `IE-P3` | T01 transfer strict `3/3` and separate explanation both finalized | exact ordered primary + retrieval + transfer + explanation records | Finalized-`RP003-IE-01` no-action landing |

The jump from `IE-P2` to `IE-P3` atomically appends both the transfer record and
the separately valid unsupported-explanation record. Neither may exist alone.

### No durable CM-32 marker

No separate durable `CM-32` continuation marker is necessary. `IE-P1`
deterministically reconstructs the zero-credit interlude. One valid fresh
continue intent mounts blank retrieval in memory. A reload before `IE-P2`
returns to the interlude and requires a new continue. This may repeat
presentation but cannot replay evidence, a world event, an answer, or a credit
event. It avoids a navigation-only durable field and fails closed toward the
required delay.

### Canonical groups

| Boundary | Active owner/group | Editable fields | Available semantic actions |
|---|---|---|---|
| Accepted `PY010-P3` | System finalized Python landing | none | exact fresh `BEGIN_EXTRACTION` only when predecessor and IE-P0 pass |
| `CM-30` primary | Pilot / `ie_primary` | `input_boundary`, `output_contract`, `unsupported_rule` | submit, clear, bounded return |
| `CM-31` primary repair | Teacher / `ie_primary_repair` | none; failed IDs only | retry blank primary, bounded return |
| `CM-32` interlude | System / `ie_interlude` | none | continue to retrieval, bounded return |
| `CM-33` retrieval | Pilot / `ie_retrieval` | the same three dimensions on R01 | submit, clear |
| `CM-31` retrieval repair | Teacher / `ie_retrieval_repair` | none; failed IDs only | retry blank retrieval |
| `CM-34` transfer | Pilot / `ie_transfer` | three T01 dimensions plus separate `unsupported_explanation` | submit, clear |
| `CM-31` transfer repair | Teacher / `ie_transfer_repair` | none; failed IDs and/or explanation-boundary ID only | retry blank transfer |
| Final `IE-P3` | System / `ie_finalized` | none | none |

The Mission Captain may choose player-facing labels, but these owner, phase,
field, action, and no-action semantics are fixed.

### One-hit intent contract

Every semantic intent must contain exactly:

- shell version;
- `packetId=RP-003`;
- active group ID;
- expected owner;
- allowlisted action ID;
- one of the seven supported modalities; and
- one opaque fresh event token.

Validation precedes token consumption. A wrong shell, packet, phase, owner,
action, modality, token shape, duplicate token, private extra key, stale group,
Tour mode, missing predecessor, malformed prefix, or later-state assertion is
rejected without spending a future valid token.

### Exact transition graph

```text
accepted no-action PY010-P3 + exact IE-P0
  -> fresh valid BEGIN_EXTRACTION
  -> wholly blank CM-30 primary
     -> incomplete: textual required errors; no evaluation and token not spent
     -> actual miss: token spent; clear all submitted work immediately
        -> CM-31 shows only failed dimension IDs and answer-free guidance
        -> fresh retry -> wholly blank CM-30
     -> simultaneous current-attempt 3/3
        -> atomic append primary record -> IE-P1
        -> zero-credit CM-32 interlude
  -> fresh valid continue
  -> wholly blank CM-33 delayed retrieval, with no P01 answers present
     -> actual miss -> complete clear -> failed IDs only -> blank CM-33 retry
     -> simultaneous current-attempt 3/3
        -> atomic append retrieval record -> IE-P2
        -> wholly blank CM-34 transfer
  -> T01 current-attempt 3/3 + separately valid explanation
     -> any miss -> complete clear -> only failed IDs/explanation ID
        -> wholly blank CM-34 retry
     -> full pass -> atomically append transfer + explanation -> IE-P3
        -> finalize only RP003-IE-01
        -> no-action landing
```

No transition may skip primary, interlude, retrieval, transfer, or explanation;
combine two attempts; retain partial correctness; compensate one dimension with
another; prefill a later form; or finalize on an intermediate prefix.

## Frozen learning and evidence contract

### Objective and exact dimensions

- Objective: existing `AI901-D2-O7`.
- Check ID: existing `RP003-IE-01`.
- Primary P01: strict simultaneous current-attempt `3/3`.
- Delayed closed-note retrieval R01: strict simultaneous current-attempt
  `3/3`, with no P01 answer set present.
- Distinct transfer T01: strict simultaneous current-attempt `3/3`.
- Transfer explanation: separately valid exact unsupported-input boundary.
- Retry: unlimited, untimed, answer-free, and wholly blank.

The fixed dimensions remain:

1. `input_boundary`;
2. `output_contract`; and
3. `unsupported_rule`.

The case prompts, expected values, dimension names, thresholds, remediation
mapping, misconception tags, and exact explanation value remain those in
`curriculum/readiness/RP-003/contract.json` and the accepted evaluator. The
normal controller imports or invokes evaluator truth; it does not duplicate or
rewrite it.

### Miss projection and repair

- Only dimensions that evaluated false may appear in the repair result.
- If the three transfer dimensions pass but the explanation fails, only the
  explanation-boundary ID appears.
- If both fail, the union of actual failures appears once in stable source
  order.
- Repair contains a human-authored contrast or question, never an expected
  value, completed field, correct option, source response, or inference.
- Submitted choices/prose and evaluator result objects are cleared before the
  repair group mounts.
- Retry reconstructs every field of the same form as a native empty value.
- Repair, retries, hint display, attempt count, focus, timing, confidence,
  interlude, and status grant zero evidence.

### Evidence firewall

None of the following may prefill, satisfy, compensate for, or cross-credit an
IE dimension or explanation:

- `PY-010`, Python primary/retrieval/transfer records, or Python output;
- the three observations or their order;
- navigation, entry, return, continue, reload, resume, focus, timing,
  confidence, modality, color, motion, sound, layout, status, or Tour;
- partial/failed IE attempts, repair, hints, diagnostics, or interlude;
- save status, review status, route state, release tests, screenshots, or
  presentation; or
- hidden/later evidence.

Conversely, `RP003-IE-01` cannot change or refinalize `PY-010`, observation
records, review/save eligibility, a route, destination, authority, or world
state.

## Privacy, persistence, and recovery

### Private/transient data

These values are memory-only and clear on evaluated miss, repair entry, retry,
clear, bounded return, group replacement, reload sanitation, malformed-state
recovery, checkpoint failure, and P3 finalization:

- P01/R01/T01 choices and native field values;
- explanation prose or selection;
- raw prompt, case, source, image, audio, and video material when represented
  as mutable session data;
- evaluator inputs, result objects, partial correctness, submitted values, and
  expected values;
- failed values and answer-bearing feedback;
- local hint/guide text beyond allowlisted numeric metadata;
- event tokens and handled-token sets;
- focus target/history/timing and live-region history;
- Tour work;
- credentials, identity, endpoints, payloads, responses, service data,
  private notes, sealed content, and external-action requests.

No raw value from these categories may enter browser storage, App persistence,
logs, URLs, analytics, QA captures, screenshots, release reports, or the
storage-free review fixture.

### Exact durable allowlist

The extraction checkpoint may contain only these route-envelope keys:

- `version`;
- `shellVersion=SS-RP003-IE01-v1`;
- `packetId=RP-003`;
- `mappingId=RP003-A3-CALIBRATION-MARGIN`;
- `checkpoint` in `IE-P0|IE-P1|IE-P2|IE-P3`;
- `continuation=continuation`;
- `cityStateDelta=null`;
- `worldStateDelta=null`;
- `accessStateDelta=null`;
- `successor=null`; and
- `evidence`.

Each evidence record may contain only the existing contract keys:

- `packet_id`;
- `mapping_id`;
- `form`;
- `skill_or_objective_id=RP003-IE-01`;
- exact all-true allowlisted `dimension_correctness`;
- integer `attempt_count` clamped to `1-99`;
- integer `hint_level` clamped to `0-3`;
- `confidence` in `null|low|medium|high`;
- allowlisted `misconception_tags` (the normal v1 implementation may use the
  stricter empty array); and
- `mastery_status=mastered`.

The only valid ordered record sets are:

- `IE-P0`: none;
- `IE-P1`: primary;
- `IE-P2`: primary, retrieval;
- `IE-P3`: primary, retrieval, transfer, unsupported explanation.

The explanation record must use:

- `form=unsupported_explanation`; and
- `dimension_correctness={unavailable_input_cannot_support_value:true}`.

Unknown keys, raw work, false/partial dimensions, wrong IDs, wrong forms,
duplicate/out-of-order records, a transfer without explanation, explanation
without transfer, Python evidence, observation evidence, review/save/note/
bearing/route data, or later-state content invalidates the entire IE candidate.

The existing Python checkpoint/evidence and three observations remain separate
and byte-stable. TD-002 reuses their established durable fields; it may not
rewrite, merge, or copy them into IE evidence.

### Atomicity and no-save boundary

- Sanitize predecessor, current exact IE prefix, and candidate record(s) before
  persistence.
- One success atomically replaces only the prior IE prefix with the next exact
  prefix.
- P2-to-P3 transfer and explanation records commit together or not at all.
- Rejection, thrown commit, false commit, malformed candidate, or duplicate
  leaves the prior exact prefix byte-for-byte stable.
- A failure never downgrades valid P1/P2, upgrades mastery, or changes Python
  or observation evidence.
- `IE-P3` finalizes only `RP003-IE-01`.
- There is no expedition-note save, save eligibility, save confirmation,
  restore action, or onward-bearing action in TD-002.
- Tour has no campaign adapter and cannot read, write, satisfy, or save the IE
  chain.

### Deterministic resume and failure recovery

| Sanitized condition | Recovery target | Required initial focus |
|---|---|---|
| Exact predecessor + IE-P0 | no-action Python landing; fresh entry required | finalized landing heading, then entry action |
| Exact IE-P1 | zero-credit CM-32 interlude | interlude heading, then continue |
| Exact IE-P2 | wholly blank CM-34 transfer | transfer heading, then first dimension |
| Exact IE-P3 | finalized no-action IE landing | landing heading |
| Missing/malformed/private/non-prefix IE state with exact predecessor | clear IE work and downgrade to IE-P0 | Python landing recovery heading, then fresh entry |
| Invalid predecessor | fail closed to the existing accepted Python recovery owner | existing first-incomplete/recovery target |

Active partial or failed work never resumes. It reconstructs from the last exact
finalized prefix. A P1 checkpoint failure returns to P0/no-action predecessor;
a P2 failure reconstructs CM-32 from P1; a P3 failure reconstructs blank CM-34
from P2. Recovery emits only nonprivate reason codes and never replays a world
event, evidence event, expected answer, success spectacle, or external action.

## Accessibility, input, focus, and responsive contract

### Seven semantic modalities

Every available action must converge on one semantic dispatch and identical
state/evidence result for:

1. pointer;
2. touch;
3. keyboard Enter;
4. keyboard Space;
5. switch;
6. speech; and
7. screen reader.

Native form and button behavior is preferred. Modality can never alter scoring,
repair, checkpoint order, evidence, focus destination, or one-hit semantics.

### Blankness

Primary, every post-repair retry, retrieval, and transfer/explanation must be
empty in all of:

- visible value;
- native control value/default;
- DOM/React state;
- programmatic value;
- accessibility name/description/value;
- placeholder and option default;
- data attributes;
- serialized controller/checkpoint state; and
- focus/live-region history.

Labels may describe the dimension but may not contain the expected choice.
Expected answer exports must not be imported into the renderer.

### One active group and focus

- Exactly one owner/message/content/action group is mounted and operable in
  visual, DOM, pointer, keyboard, and accessibility order.
- Replaced groups are unmounted or inert and retain no value, focus, live
  message, or dispatch authority.
- Fresh entry focuses the complete CM-30 owner/heading, then the first blank
  dimension.
- Incomplete submit associates textual `required` feedback with each empty
  field and focuses the first invalid field.
- Actual miss focuses the repair heading or first failed-ID explanation; no
  submitted value remains mounted.
- Retry focuses the first field of the wholly blank owning form.
- Pass focuses the next group's complete heading.
- CM-32 resume/entry focuses its heading, then continue.
- Final P3 focuses the landing heading.
- Bounded return restores the exact predecessor heading/action.
- Focus, history, and timing remain transient and zero credit.

Each input has a persistent visible label, unique native/programmatic name,
required state, and `aria-describedby` association for help/error text. One
polite atomic status region reports current nonprivate status without stale or
duplicate announcements.

### Targets and reflow

- Every required action/control is at least `44 x 44 CSS px`.
- At representative `1920 x 1080`, the dominant SC-04 world and complete
  current required group/actions fit the dynamic viewport without outer
  horizontal or vertical scroll.
- At narrow width and effective `200%` text zoom, world precedes one natural
  source-ordered vertical interface column.
- Narrow/zoom may scroll vertically but has no page-level horizontal escape,
  clipping, overlapping world, or inaccessible action.
- Long labels, errors, provenance/unsupported copy, and wrapped controls retain
  semantic/source order.
- The three dimensions have equal semantic weight; layout cannot imply an
  answer key.
- Unavailable input is textual evidence, not a disabled/denied permission cue.

### Non-sensory parity

- Blank, required, failed, repaired, finalized, unavailable, owner, and
  disabled states are explicit in text and semantics, not color, position,
  sound, glow, or animation alone.
- Forced colors retain group boundaries, native field/control states, visible
  focus, and error association.
- Reduced motion uses direct group replacement with identical status, focus,
  order, and evidence.
- Sound is optional and zero credit; every meaning has a silent equivalent.
- There is no timer.

The storage-free review fixture provides deterministic visual access but does
not itself prove human screen-reader speech order, physical switch hardware, or
platform-specific forced-color rendering. Those claims require direct evidence.

## Offline, authority, world, and save limits

The slice is a course-authored local simulation:

- no fetch, network, service worker fetch path, SDK, REST/CLI, Azure/Foundry
  call, Content Understanding submission, credential, resource, endpoint,
  authentication, account, external file/process, payload, or response;
- no official Microsoft exam item, exam credit, exam guarantee,
  certification, Microsoft authority, or service-configuration proof;
- no permission, consent, authentication, access, recognition, identity,
  reward, refusal, denial, external action, or automated decision;
- no sealed-source read or inference from unavailable input;
- no Tour credit or campaign promotion;
- no expedition-note save, eligibility, restore, onward bearing, destination,
  or RP-004 route;
- no `CM-40`, review, RP-013, successor, or post-ending content; and
- no physical, environmental, clock, route, city, Builder, Machine, coupling,
  light, material, sound-source, or world response.

`continuation` is unchanged. `cityStateDelta`, `worldStateDelta`, and
`accessStateDelta` remain `null`; `successor` remains `null`. The accepted
SC-04 plate and independent environmental clocks remain visually and
mechanically invariant.

## Storage-free gated-review fixture

TD-002 requires a deterministic visual-review fixture; absence is no longer an
accepted silent limitation.

### Required boundary

- Fixture code lives outside `src` and outside all App/main production import
  graphs.
- It is available only to the test/review harness under an explicit test
  command and separate local entry.
- It imports the public production controller/component and creates states only
  through exact public constructors, intent dispatch, and sanitized checkpoint
  adapters.
- It never reads or writes `localStorage`, `sessionStorage`, IndexedDB,
  cookies, Martin's campaign adapter/save, URL/query state, profile/session
  storage, or a signed-in browser.
- It accepts only a closed named scenario allowlist, not arbitrary state JSON.
- It exposes at least: blank primary, each representative dimension repair,
  CM-32 interlude, blank retrieval, blank transfer, explanation-only repair,
  and P3 no-action landing.
- Rendered blank states contain no answer value. Repair fixtures contain only
  failed IDs and answer-free copy.
- It creates no production action, route, query flag, debug menu, or shipped
  state injection seam.
- Build/import scans prove no fixture marker or test entry enters `dist`.
- The review host binds to loopback only, has an owned PID/liveness check, and
  is stopped by its owning validator.

Tactical may choose the exact filename and host composition. Combat must add a
test that fails if any fixture file becomes reachable from `src`, App/main, or
the production bundle. If the fixture cannot meet all of these constraints,
return `REVISE`; do not fall back to manipulating Martin's save.

## Performance and production budgets

### Accepted TD-002 baseline

The independent TD-001 release established:

- production JS: `1,138,689` raw bytes;
- production CSS: `77,814` raw bytes;
- production module count: `173`;
- no new TD-002 runtime media requirement;
- accepted complete E2E: `101.06s`; and
- protected reference-smoke ceiling: `300s`.

### TD-002 versioned caps

| Budget | Gate |
|---|---|
| New runtime media/font/network payload | `0` bytes |
| Raw production JS | `<=1,195,624` bytes (`+5%` from accepted TD-001 JS) |
| Raw production CSS | `<=81,705` bytes (`+5%` from accepted TD-001 CSS) |
| Production modules | `<=182` without a documented factoring variance |
| Production build | successful within `60s` on the existing gate host |
| Focused RP-003 controller/route/UI suite | within `30s` |
| Protected RP-003 reference smoke | within `300s` |
| Complete isolated E2E | within `180s`, never overlapping build |
| One local evaluate/dispatch action | no sampled main-thread task over `100ms` |
| Served identity | root/assets HTTP `200` and byte-identical to candidate `dist` |

### CSS-cap resolution

TD-001's `77,828`-byte cap was a versioned shell cap measured from its older
`74,121`-byte baseline. It is not a permanent product ceiling. TD-002 therefore
uses the accepted released `77,814` bytes as its new evidence baseline and
allows `3,891` bytes of measured CSS headroom under the same `+5%` policy.

This resolves the 14-byte limitation without lowering the visual or
accessibility bar. Reuse/refactoring remains preferred. The Marines may not
hide an overage, remove required responsive/forced-color/reduced-motion/focus
behavior, or add a runtime asset merely to meet the cap. Any overage requires a
measured variance and return to Mission/Science.

The test-only fixture and review host do not count as production modules or
bundle bytes because they must be absent from `dist`; their absence is itself a
gate.

## Required diagnostics

Diagnostics are bounded reason codes only, for example:

- `exact_python_p3_required`
- `fresh_extraction_intent_required`
- `tour_extraction_closed`
- `intent_rejected`
- `one_hit_only`
- `primary_remediation_required`
- `retrieval_remediation_required`
- `transfer_remediation_required`
- `unsupported_explanation_required`
- `checkpoint_write_rejected`
- `resume_sanitized_to_ie_p0`
- `later_state_closed`

They may include actual failed dimension IDs but never submitted or expected
values, explanation text, source/media content, event tokens, focus history,
identity, credentials, payloads, responses, or sealed content.

## Validation ladder

### Tier 1 - Mission shell checks

- all five Colonel artifacts agree on shell ID, version, address, predecessor,
  chain, landing, and hard stop;
- frozen objective, P01/R01/T01, dimensions, expected values, strict thresholds,
  explanation, remediation, and evidence keys are unchanged;
- IE prefixes and durable record sets are exact ordered allowlists;
- CM-32 has no durable marker and grants zero credit;
- transfer and explanation commit atomically;
- Python/observation evidence remains byte-stable and cannot cross-credit IE;
- private/later-state key scans pass;
- the TD-002 budget replaces only the TD-001 shell-relative caps;
- the test-only fixture boundary is explicit; and
- no save, network, service, route, world, authority, or later state appears.

### Tier 2 - focused implementation checks

Add direct tests for:

- exact Python P3 plus fresh entry and every rejection class;
- all seven modalities and validation-before-token-consumption;
- native/semantic/programmatic/serialized blankness on entry and every retry;
- strict P01 `3/3`, R01 delayed `3/3`, T01 `3/3`, and separate explanation;
- no primary answer set in retrieval and no primary/retrieval carry into
  transfer;
- actual-failed-dimension/explanation-only repair and immediate private clear;
- zero-credit CM-32 plus explicit fresh continue;
- IE-P0/P1/P2/P3 exact sanitation, atomicity, no downgrade, and resume;
- P2-to-P3 two-record atomic commit;
- byte-stable Python and observation predecessor evidence;
- Tour isolation and complete evidence firewall;
- focus, label, error, status, target, reflow, forced-color, and reduced-motion
  contracts;
- one active group and terminal no-action landing;
- fixture production exclusion and no browser-storage access; and
- absence of CM-40, review/save, bearing, later rail, service, authority, and
  world response.

### Tier 3 - related regression

Run:

- new extraction checkpoint/controller/normal-route/UI/fixture tests;
- `calibrationMarginProtectedJourney.test.js`;
- `calibrationMarginPythonFloor.test.js`;
- `calibrationMarginPythonCheckpoint.test.js`;
- `calibrationMarginPythonNormalRoute.test.js`;
- `calibrationMarginPythonUi.test.js`;
- `calibrationMarginNormalEntry.test.js`;
- `calibrationMarginProtectedEntry.test.js`;
- `calibrationMarginProtectedSurvey.test.js`;
- connected canonical-frame and RP-002 return tests; and
- `python curriculum/readiness/RP-003/validate_mapping.py --self-test`.

### Tier 4 - Combat functional gate

At `FUNCTIONALLY COMPLETE`, independently run:

- all focused and related checks;
- full `npm test`;
- all current readiness-validator self-tests;
- `npm run build`;
- raw JS/CSS/module/media budgets;
- production exclusion of fixture/test markers;
- inherited SC-04 plate identity;
- source/dist/served identity and forbidden-reachability scans;
- offline/no-network proof;
- storage/privacy and campaign/Tour separation;
- clean patch/status checks; and
- push plus `HEAD == origin/main`.

### Tier 5 - Intelligence release

The Intelligence Officer independently runs:

- full suite and all readiness self-tests;
- production build;
- isolated production preview with root/assets HTTP `200`, owned PID/liveness,
  reload-stability preflight, and served identity;
- one complete non-overlapping E2E;
- storage-free fixture review at desktop, narrow, and effective `200%`;
- blank, repair, retry, interlude, retrieval, transfer, explanation-repair, and
  P3 visual/semantic states;
- keyboard/focus, disabled/native state, error association, live region,
  forced-color, reduced-motion, console, network, overflow, asset, and hash
  checks;
- fixture absence from the production bundle;
- QA restoration and owned-process shutdown;
- shell-to-build reconciliation and variance classification; and
- final commit/push synchronization.

No role may inspect or mutate Martin's browser storage or campaign save to
manufacture the gated state.

## Science-stage validation evidence

The Office of Science Administrator ran the current RP-003 authority suite:

```text
node --test
  test/calibrationMarginProtectedJourney.test.js
  test/calibrationMarginProtectedEntry.test.js
  test/calibrationMarginProtectedSurvey.test.js
  test/calibrationMarginNormalEntry.test.js
  test/calibrationMarginPythonFloor.test.js
  test/calibrationMarginPythonCheckpoint.test.js
  test/calibrationMarginPythonNormalRoute.test.js
  test/calibrationMarginPythonUi.test.js

PASS `61/61`, Node reported `370.565ms`
```

The applicable readiness validator was also run:

```text
python curriculum/readiness/RP-003/validate_mapping.py --self-test

SELF-TEST PASS
```

These checks verify the current frozen evaluator, strict Python predecessor,
protected extraction evaluator, miss projection, privacy, Tour isolation,
accessibility metadata, normal composition, purity, and non-integration
authority. They do not claim the not-yet-built normal CM-30-CM-34 controller,
fixture, live gated review, or release.

## Risk register

| ID | Risk | Severity | Required control | Return owner |
|---|---|---:|---|---|
| `V2-R01` | Python P3 auto-enters extraction or broad states dispatch entry | High | No-action predecessor plus exact fresh one-hit gate | Mission / Science |
| `V2-R02` | Protected full journey becomes normal route | Critical | Extraction-only controller; import/dispatch/bundle absence tests | Mission |
| `V2-R03` | Primary, retrieval, transfer, or retry is prefilled | Critical | Separate blank memories/groups; DOM/native/serialized blankness tests | Science |
| `V2-R04` | Partial form or P1/P2 is mistaken for final mastery | Critical | Exact prefix sanitizer and finalization only at atomic P3 | Science |
| `V2-R05` | Repair carries answers or submitted values | Critical | Immediate clear before failed-ID-only answer-free repair | Science / Recon |
| `V2-R06` | Missing audio is scored as negative/false/empty | Critical | Frozen unsupported rule plus separate explanation gate | Science |
| `V2-R07` | CM-32 grants evidence or marker-derived credit | High | No durable marker; zero-credit state/action tests | Science |
| `V2-R08` | Reload skips required work or leaks private state | Critical | Exact P0-P3 sanitation and first-incomplete reconstruction | Science |
| `V2-R09` | P3 partially commits transfer without explanation | Critical | Two-record atomic candidate and prior-prefix byte test | Science / Combat |
| `V2-R10` | IE evidence rewrites or cross-credits Python/observations | Critical | Separate adapters, immutable predecessor bytes, firewall tests | Science |
| `V2-R11` | Fixture becomes a production backdoor | Critical | Test-only closed scenarios, import/bundle scans, no arbitrary state | Combat / Intelligence |
| `V2-R12` | Fixture touches Martin's storage/save | Critical | Storage-free API guards and separate loopback-owned host | Intelligence |
| `V2-R13` | Dense extraction UI fails narrow/zoom/accessibility | High | One group, native fields, source-order reflow, direct review | Tactical / Image |
| `V2-R14` | CSS growth weakens quality or exceeds cap | Medium | New evidence baseline, 3,891-byte headroom, measured gate | Combat / Image |
| `V2-R15` | Completion implies service/exam/authority/world response | Critical | Local course owner copy, invariant scene, hard absence checks | Colonel / Image |
| `V2-R16` | Official learning objective changes | Critical | Official-source recheck; `HOLD` on contradiction | Science |
| `V2-R17` | CM-40/save/later route leaks from protected source | Critical | Terminal P3 no actions; source/DOM/dispatch/bundle tests | Mission / Intelligence |

No present risk requires return to Commandant, Colonel, or Operations Planning.

## Flexible implementation areas

Within the fixed contracts, downstream roles may choose:

- file/module names and pure reducer/controller factoring;
- a dedicated extraction renderer or bounded extension of the RP-003 component;
- native radio/select/other accessible choice controls for the three dimensions
  and explanation;
- exact answer-free Teacher/System/Pilot copy;
- visual grouping and wide column proportions;
- focus-announcement phrasing while target and association remain fixed;
- CSS refactoring and selectors within the cap;
- test organization; and
- the exact test-only fixture filename and loopback review-host structure.

They may not change the state order, owner semantics, case, answer, dimension,
threshold, explanation, failed-ID mapping, evidence key, prefix, focus target
class, modality, privacy rule, budget, official-source meaning, canon, world
state, or hard stop.

## Hard stops and return routing

Stop and return rather than implement if the shell would require:

- a changed objective, P01/R01/T01 case, expected answer, dimension, strict
  `3/3`, explanation, remediation map, or evidence key;
- a private/non-allowlisted durable field or CM-32 durable marker;
- persistence of responses, prose, case/media/source, feedback, diagnostics,
  token/focus history, identity, credential, endpoint, payload, or response;
- a late-chain return or new campaign route;
- a production-accessible fixture/debug/state injection seam;
- browser/campaign storage mutation for review;
- a live Azure/Foundry/Content Understanding action or volatile service claim;
- `CM-40`, bounded review, expedition-note save, eligibility, restore, bearing,
  destination, RP-004, RP-013, successor, or post-ending content;
- reward, access, authentication, identity, permission, authority, exam
  standing, external action, or physical/world response;
- hidden lore, new canon, or intended-ending change;
- a runtime media/font/network asset;
- a bundle/budget overage without classified variance; or
- weaker accessibility, responsive behavior, Tour isolation, blankness,
  sanitation, atomicity, recovery, or release evidence.

Route/campaign conflicts return to Operations Planning. Canon/world conflicts
return to the Colonel. Product/platform conflicts return to the Commandant.
Learning, state, privacy, accessibility, save, offline, recovery, performance,
fixture, or official-source conflicts return here.

## Report envelope

- **Systems and evidence decisions:** reuse the frozen extraction evaluator and
  accepted Python/controller patterns; add only extraction-specific P0-P3
  composition and test support
- **Reused versus new:** detailed above; no live service or new learning truth
- **State:** exact IE-P0/P1/P2/P3, no durable interlude marker, P2-to-P3 atomic
  transfer plus explanation
- **Learning:** strict `3/3` primary, delayed retrieval, distinct audio/video
  missing-input transfer, and separate explanation; no cross-credit
- **Privacy/persistence:** exact allowlist only; all raw/private work transient;
  no expedition-note save
- **Recovery:** sanitation before mount; blank first-incomplete reconstruction;
  prior prefix byte-stable on failure
- **Accessibility:** seven modalities, native blankness, one active group,
  deterministic focus/errors/status, `44px`, wide/narrow/200%, forced-color,
  reduced-motion, non-sensory parity
- **Offline/authority:** local course simulation only; no service, exam,
  permission, route, or world meaning
- **Performance:** accepted TD-001 release is the new baseline; TD-002 caps
  provide measured CSS headroom without weakening quality
- **Fixture:** required test-only storage-free gated-review host, provably absent
  from production
- **Official sources:** four Microsoft Learn sources retrieved `2026-07-25`;
  no contradiction
- **Variances:** no new variance; TD001-DL-002 is addressed as a TD-002
  requirement and TD001-DL-003 is resolved by a new versioned baseline/cap
- **Protected boundaries:** hidden lore unopened; protected user work untouched;
  no browser storage/save inspection or mutation; no automation
- **Files changed:** this viability envelope only
- **Disposition:** `VIABILITY READY`

## Exact Mission Captain handoff

Using `GDB-TD002-v1`, `WNMP-TD002-v1`, `CFS-TD002-v1`, and
`VE-TD002-v1`, issue one complete versioned `SHELL READY` contract for
`SS-RP003-IE01-v1` at exactly `RP-003 / SC-04 / CM-30-CM-34`.

The shell must:

1. validate exact accepted no-action `PY010-P3`, finalized `PY-010`, all three
   observations, zero IE evidence, and no private/later state;
2. expose one fresh private-free seven-modality `BEGIN_EXTRACTION` intent and
   wholly blank CM-30 only after that conjunction;
3. reuse the frozen P01/R01/T01 evaluator, dimensions, answers, strict `3/3`,
   separate explanation, and actual-failed-ID remediation without change;
4. clear submitted/private work before answer-free CM-31 and reconstruct the
   same form wholly blank on retry;
5. use IE-P0/P1/P2/P3 exactly as specified, with no durable CM-32 marker and an
   atomic transfer-plus-explanation P3 commit;
6. keep CM-32 zero-credit, require one fresh continue, keep CM-33 free of P01
   answers, and keep CM-34 genuinely blank and distinct;
7. preserve Python/observation bytes and enforce the complete evidence firewall;
8. adopt the exact privacy, no-save, recovery, modality, focus, target, reflow,
   forced-color, reduced-motion, offline, authority, budget, fixture, diagnostic,
   and validation contracts above;
9. authorize no new runtime media and classify the inherited temporary SC-04
   plate as a continuing limitation;
10. require a storage-free test-only gated-review fixture that is mechanically
    absent from production; and
11. stop at finalized `RP003-IE-01` with no action before CM-40, review/save,
    bearing, RP-004, RP-013, successor, reward/access/authority/exam standing,
    live service/external action, or any physical/world response.

Issue `SHELL READY`, `REVISE`, or `HOLD`. If ready, hand the Reconnaissance
Sergeant one conflict-free shell with exact non-negotiables, permitted creative
flexibility, definition of done, and the complete validation ladder.
