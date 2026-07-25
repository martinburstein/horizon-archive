# TD-001 Game Development Brief

## Document control

| Field | Value |
|---|---|
| Stage | Commandant |
| Agent ID | `commandant` |
| Pass type | Guarded verification |
| Brief ID | `GDB-TD001-v1` |
| Shell candidate | `SS-RP003-PY010-v1` |
| Campaign address | `RP-003 / SC-04 / CM-20–CM-23` |
| Source commit | `7efe50004972dfc9070f9f2c9dc39f155fc28b99` |
| Started | `2026-07-25T17:23:00-04:00` |
| Completed | `2026-07-25T17:34:00-04:00` |
| Disposition | `VISION BASELINE` |

This is a guarded verification of the established Horizon Archive product baseline. It does not reopen or replace the whole-product vision. The older readiness scores in `PROJECT_STATUS_SNAPSHOT.md` describe an earlier foundations phase; the current implementation and story positions are controlled by `NEXT_INSTANCE_HANDOFF.md` and the current-control section of `Production Pipeline/STORY_RAIL_MAP.md`.

## Authorities verified

- `AGENTS.md`
- `NEXT_INSTANCE_HANDOFF.md`
- `SKYSCRAPER_AGENT_WORKFLOW.md`
- `Skyscraper Agent Profiles/README.md`
- `Skyscraper Agent Profiles/commandant.md`
- current product-purpose context in `PROJECT_STATUS_SNAPSHOT.md`
- current player/demo behavior in `PLAYABLE_DEMO.md`
- the premise, player perspective, Machine/Python relationship, narrative structure, visual direction, tone, open questions, and implementation notes in `HORIZON_ARCHIVE_SURFACE_LORE.md`
- current implementation position, route integrity, RP-003 row, and whole-story coverage gate in `Production Pipeline/STORY_RAIL_MAP.md`
- current control, RP-003 mapping, and coverage rules in `Production Pipeline/CURRICULUM_SPINE.md`
- `Visual Direction/PHOTOREALISTIC_CHARTER.md`

No prior Intelligence Officer reconciliation exists for this first skyscraper test drive.

## Audience

The primary player is an adult learner, including Martin, who wants to gain real Python and AI-901 readiness through a serious first-person science-fiction mystery rather than through a detached quiz shell. The experience must remain usable by a first-time or returning learner on desktop and narrow layouts, with keyboard, mouse, and touch access and without requiring cloud credentials or an active network connection.

The player is also the mortal human pilot inside the fiction. Learning and story share one interaction, but neither may counterfeit the other: narrative navigation is not mastery evidence, and mastery evidence does not authorize a world response.

## Player promise

Horizon Archive lets the player investigate the beautiful abandoned works of the Builders, use real Python to interpret bounded local surfaces of the Machine, and become more capable without collapsing the central mystery or pretending to confer official exam or service authority.

For `TD-001`, that promise becomes one exact experience:

> From the already accepted all-three CM-10 survey boundary, the player deliberately opens a fresh local-work review, completes an honestly blank conditional exercise with answer-free recovery when needed, retrieves the conditional boundary from memory, and proves it again on a genuinely blank unseen transfer before finalizing only `PY-010`.

## Product and educational purpose

### Product purpose

- Deliver a first-person, landscape-led, cinematic archaeological adventure whose central pleasure is discovery through careful interaction.
- Make each local Machine surface feel like part of a much greater functional whole while preserving multiple plausible interpretations.
- Keep experimentation recoverable and state changes legible without combat, busy HUD conventions, or false external consequences.

### Educational purpose

- Teach and verify real Python rather than decorative pseudocode.
- In this slice, reinforce only conditional reasoning over the supplied list/loop/index/append/dictionary scaffold.
- Require the already-solidified `PY-010` evidence chain: strict `8/8` primary, answer-free remediation for the first actual miss, closed-note retrieval, and genuinely blank strict `8/8` unseen transfer.
- Keep presentation, navigation, review activation, focus, return, timing, Tour traversal, and the separate observations at zero mastery credit.
- Make no official exam claim, exam guarantee, Azure/Foundry authority claim, or service authorization claim.

## Experience pillars

1. **Real capability through real interaction**
   The player writes and submits real Python conditions. A passing state is earned only by the frozen evaluator, not by scene traversal or narrative acknowledgement.

2. **Mystery through bounded evidence**
   The local interface exposes observable correspondence, difference, and unavailability without defining the Machine, the Builders' disappearance, consciousness, causation, purpose, or ownership.

3. **Recoverable rigor**
   A miss produces answer-free help only for checks actually missed, clears private/transient work, and returns the player to a genuinely blank retry. Failure never becomes a trap or an answer key.

4. **Player-owned and private learning**
   Editable code and other transient attempt material remain private and local. Only allowlisted finalized evidence may persist, and this slice does not perform the later save.

5. **Premium, accessible first-person presence**
   The world remains a cinematic photorealistic Builder environment with separate responsive interface layers, clear focus ownership, non-color meaning, reduced-motion parity, and no visible protagonist, ship, companion, hands, shadow, or reflection.

6. **Honest limits**
   The experience is offline-first, no-authority, no-credit in Tour, and invariant-world. No learning result produces access, reward, city response, physical response, external action, or exam standing.

## Global non-negotiables

- Preserve closed surface canon, the intended ending, and all open questions.
- Do not open or infer from the hidden-lore vault.
- Do not invent `RP-013`, a successor, or post-ending content.
- Preserve exact `PY-010` scoring, sequencing, fresh-form, private-clearing, and no-cross-credit contracts.
- Do not expose, score, prefill, or finalize `RP003-IE-01`.
- Preserve the distinction between observation evidence, Python evidence, AI-901 evidence, review eligibility, and save eligibility.
- Keep submitted code, answer prose, credentials, prompts, service payloads, identity content, and private notes out of persisted progress.
- Preserve local-only/offline operation; require no sign-in, credentials, endpoint, SDK, network call, cloud resource, or browser-storage manipulation.
- Preserve deterministic entry, retry, return, and resume behavior at the first incomplete verified boundary.
- Preserve keyboard, mouse, and touch use; visible and programmatic labels; correct field/error association; intentional focus; non-color state; forced-color viability; reduced-motion parity; and responsive reflow without horizontal escape.
- Preserve first-person maximum-quality cinematic photorealism, physically credible Builder materials and systems, clean world plates, separate UI, and landscape-first composition.
- Preserve `cityStateDelta=null` and all invariant-world, no-reward, no-access, and no-authority limits.
- Preserve the no-credit Demo Tour and do not allow it to prefill or satisfy the shell.
- Never inspect or alter Martin's campaign save or browser storage merely to manufacture the required start state.

## Quality bar

The completed slice must feel like a deliberate premium interaction, not a developer form placed over a background:

- The established Builder environment and local Machine surface retain physically credible material, lighting, scale, atmosphere, functional logic, and mystery.
- The active learning owner, next action, editable region, feedback, and recovery route are obvious without baked instructions or a busy HUD.
- The interface remains contained and readable at representative desktop and narrow widths, at zoom/reflow conditions required by the shell, and under reduced-motion and forced-color presentation.
- Every control has honest visible, semantic, programmatic, and dispatch behavior.
- Feedback is specific enough to guide correction but cannot expose the expected transfer answer.
- Return, retry, reload, and resume do not leak private work, duplicate evidence, or skip prerequisites.
- The build remains deterministic, offline, responsive, accessible, and proportionately performant.

## Platform and offline assumptions

- Primary delivery remains the local browser application launched from the project workspace.
- Current Node.js LTS is the only expected local runtime dependency for the packaged launcher/build path.
- Mouse, touch, and keyboard are first-class input methods.
- Progress may use only the existing sanitized local evidence model; raw submissions and private/transient material are excluded.
- No Azure sign-in, Foundry connection, credential, cloud resource, live endpoint, or external service is needed.
- The app must fail honestly and recoverably if a local prerequisite or valid predecessor state is absent.

## Scope of TD-001

### Exact entry

The accepted `RP-003 / SC-04 / CM-10` state with all three survey observations complete and `REVIEW LOCAL WORK IMAGE` visible only as disabled, non-dispatchable `Eligible`.

### Authorized path

1. One explicit fresh activation of `REVIEW LOCAL WORK IMAGE`.
2. `CM-20`: a genuinely blank `PYTHON PRIMARY` conditional exercise.
3. Strict simultaneous `8/8` evaluation.
4. On a first actual miss only, `CM-21`: answer-free remediation limited to the missed check or checks, followed by complete private/transient clearing and a genuinely blank retry.
5. On exact primary pass, `CM-22`: closed-note retrieval covering the condition, true branch, false branch, and unavailable boundary.
6. `CM-23`: a genuinely blank unseen transfer scored at strict `8/8`.
7. Finalize only the existing allowlisted `PY-010` evidence.

### Exact permitted exits

- A recoverable, genuinely blank `CM-20` retry after bounded `CM-21` remediation.
- A bounded return to the accepted predecessor without adding evidence.
- A finalized-`PY-010` boundary that exposes no `CM-30` or later action.

### Hard stop

Stop before:

- `CM-30`;
- `RP003-IE-01` entry, extraction, scoring, remediation, retrieval, transfer, or unsupported-input explanation;
- save or save eligibility;
- onward bearing or any destination;
- `RP-004`, `RP-013`, a successor, or post-ending content;
- reward, access, authority, exam standing, external action, or physical/world response.

## Non-goals and protected tradeoffs

- This test does not redesign the product vision, surface lore, story rail, visual charter, or learning mapping.
- It does not add new Python cases, expected answers, thresholds, objectives, hints, lore facts, locations, routes, assets, systems, persistence fields, or story packets.
- It does not modernize unrelated code or content.
- It does not make the AI-901 chain playable.
- It does not save progress or change campaign/world state.
- It does not trade strict evidence for speed, spectacle, convenience, or narrative momentum.
- It does not trade accessibility, privacy, responsive containment, or recovery for cinematic presentation.
- It does not trade mystery for explanatory copy.
- It does not claim a generated or canonical visual reference is integrated at runtime.

## Priority order

When a later decision cannot satisfy every preference, preserve this order:

1. Canon, hidden-lore, route, intended-ending, and hard-stop integrity.
2. Exact learning evidence, blankness, answer-free remediation, and no-cross-credit integrity.
3. Privacy, sanitation, offline/no-authority, invariant-world, and save boundaries.
4. Accessibility, focus, responsive reflow, and recoverable interaction.
5. Deterministic entry, transition, retry, return, and resume behavior.
6. Honest player communication and emotional clarity.
7. Maximum-quality first-person cinematic photorealism and polish.
8. Implementation convenience and throughput.

## Measurable success signals

The slice may advance only when the later owning stages can produce direct evidence that:

1. The exact accepted all-three CM-10 predecessor is the only normal campaign entry.
2. `REVIEW LOCAL WORK IMAGE` begins disabled/non-dispatchable `Eligible`, then requires one explicit fresh player action before `CM-20`.
3. `CM-20` begins with every editable Python response visibly, semantically, programmatically, and natively blank.
4. No presentation, observation, navigation, focus, Tour, or predecessor evidence contributes to the eight Python checks.
5. Primary evaluation produces a pass only at simultaneous `8/8`.
6. A failing primary attempt routes to remediation for only actually missed checks and does not reveal expected code or transfer answers.
7. Leaving remediation clears every private/transient response and retry begins wholly blank.
8. Repeated misses remain recoverable without duplicating or finalizing evidence.
9. `CM-22` remains closed until exact primary pass and verifies condition, true branch, false branch, and unavailable-boundary understanding without open notes.
10. `CM-23` is unseen, independent of the primary form, genuinely blank, and passes only at simultaneous `8/8`.
11. Finalization writes only the approved finalized `PY-010` evidence; raw code, prose, prompts, credentials, service data, and transient feedback are absent from persisted progress.
12. `RP003-IE-01`, `CM-30`, save, onward bearing, later packets, rewards, access, authority, and physical/world effects remain unreachable and absent from exposed state.
13. Return/retry/reload/resume reconstruct the first incomplete verified boundary deterministically without replay, prefill, leakage, cross-credit, or state escalation.
14. The complete path works by keyboard and representative pointer/touch activation; focus lands on the active owner or first failed field as specified downstream.
15. Desktop and narrow layouts retain readable copy, contained controls, no horizontal escape, non-color state meaning, reduced-motion parity, and honest disabled/inert semantics.
16. Focused contract tests, connected regression, full product tests, production build, isolated served identity, complete non-overlapping E2E, representative live review, QA restoration, and final synchronization pass at their owning gates.

## Flexible areas for downstream roles

Within the non-negotiables and shell authority, later stages may decide:

- the surface-safe emotional framing and exact player-facing copy;
- the arrangement and responsive composition of the existing scene/interface regions;
- the visible hierarchy of instructions, editor, retrieval prompts, feedback, and return controls;
- focus sequencing and announcement wording when more than one accessible implementation is valid;
- material, lighting, atmosphere, localized motion, and sound treatment consistent with existing `SC-04` visual canon;
- implementation factoring and test organization that preserve current state contracts; and
- one spoiler-safe reveal subject or composition, provided it records provenance and does not imply runtime integration without evidence.

These are permissions to interpret the established product, not permissions to change cases, answers, thresholds, evidence, canon, route, persistence, authority, or the hard stop.

## Reopen triggers

Return to the Commandant only if evidence shows:

- Martin changes the target audience, product category, educational promise, platform, whole-product scope, intended ending, or maximum-quality visual direction;
- the requested slice cannot serve both serious play and meaningful real-Python learning;
- privacy, accessibility, offline delivery, or recoverable play would require a product-level tradeoff;
- accepted as-built evidence reveals a global product conflict rather than a local shell variance; or
- the proposed work would require reward, business-model, authority, account, service, or world-state behavior not already authorized.

Canon conflicts return to the Colonel; order/dependency conflicts to the Operations Planning Major; learning, systems, privacy, accessibility, save, offline, recovery, or performance conflicts to the Office of Science Administrator; shell ambiguity to the Mission Captain.

## Commandant validation

| Check | Result |
|---|---|
| Product promise matches current playable direction | PASS |
| Audience and purpose remain compatible with surface canon | PASS |
| Real-Python value remains meaningful and non-authoritative | PASS |
| Current demo and whole-story completion are distinguished | PASS |
| First-person cinematic photorealism remains required | PASS |
| Accessibility, privacy, offline, and recovery are evaluable | PASS |
| No new packet, successor, ending, or hidden-lore claim introduced | PASS |
| Candidate remains inside `CM-20–CM-23` and finalizes only `PY-010` | PASS |

No product-level contradiction or reopen trigger was found. The candidate is an appropriate bounded test of the skyscraper workflow.

## Report envelope

- **Stage and agent ID:** Commandant / `commandant`
- **Pass type:** guarded verification
- **Disposition:** `VISION BASELINE`
- **Product decisions confirmed:** audience, player promise, real-Python purpose, mystery-first first-person identity, offline/local delivery, strict evidence, privacy, accessibility, recoverability, maximum-quality photorealism, and honest no-authority limits
- **Product decisions changed:** none
- **Evidence supporting change:** not applicable
- **Non-goals and protected tradeoffs:** recorded above; strict learning, privacy, accessibility, canon, and hard stops outrank convenience or spectacle
- **Risks for the Colonel:** emotional framing must not imply that Python causes a world response, that the Machine has been categorized, or that the bounded local review reveals why the Builders vanished
- **Flexible areas left downstream:** copy, emotional treatment, layout, focus wording, existing-system implementation factoring, and visual/auditory treatment inside the locked boundaries
- **Variances discovered or resolved:** none
- **Protected boundaries verified:** hidden lore, no `RP-013`/successor, no `RP003-IE-01`, no save, no onward bearing, no reward/access/authority/world response, protected user files untouched

## Exact Colonel handoff

Using `GDB-TD001-v1` as the locked product brief and `7efe50004972dfc9070f9f2c9dc39f155fc28b99` as its source authority, perform a guarded world-and-narrative verification for shell candidate `SS-RP003-PY010-v1` at `RP-003 / SC-04 / CM-20–CM-23`.

Confirm a surface-safe story identity and emotional progression for explicit fresh review, blank primary, answer-free recovery, closed-note retrieval, genuinely blank unseen transfer, and finalization of only `PY-010`. Protect the existing SC-04 location/canon, the pilot's incomplete human perspective, the Machine's uncategorizable local-interface status, all open questions, the intended ending, and the exact hard stop before `CM-30`, `RP003-IE-01`, save, onward bearing, later packets, successor, reward, access, authority, or physical/world response.

Produce `02-WORLD-NARRATIVE-MASTERPLAN.md`, issue `WORLD BASELINE`, `REVISE`, or `HOLD`, and hand one coherent surface-safe world/narrative envelope to the Operations Planning Major. Do not write scene copy, place puzzles, change the learning contract, or pre-build the Marine treatment.
