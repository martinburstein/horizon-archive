# Horizon Archive Skyscraper Agent Workflow

## Purpose

This is the active manual production workflow for Horizon Archive. It treats the complete game as a 33-story skyscraper and each production-quality playable slice as a fully realized showroom inside a construction-ready shell.

- **Alpha 1–5** protect the whole building and issue one exact Playable Slice Shell.
- **Beta 1–5** turn that shell into one finished playable jewel.
- **Beta 6** independently reconciles the as-built result, releases it honestly, and returns accepted lessons to the master plan.

The retired Team 1 / Team 2 workflow remains available only at tag `two-team-infrastructure-archive-2026-07-25`. It is not an execution authority for this workflow.

## Authority order

When instructions conflict, use this order:

1. Martin's latest explicit instruction.
2. Applicable `AGENTS.md` files.
3. `NEXT_INSTANCE_HANDOFF.md` for current state and the exact next action.
4. This workflow.
5. `Skyscraper Agent Profiles/README.md`.
6. The selected canonical Alpha or Beta profile.
7. The approved Playable Slice Shell.
8. Current product, canon, curriculum, technical, visual, and work-log artifacts.

Never use an archived exact-next-action edge as current authority.

## Canonical sequence

```text
ALPHA 1  Game Vision & Development Director
ALPHA 2  World & Narrative Architect
ALPHA 3  Campaign & Progression Architect
ALPHA 4  Systems, Learning & Performance Director
ALPHA 5  Shell Integration Director
          ↓ SHELL READY
BETA 1   Playable Slice Creative Director
BETA 2   Experience Architect
BETA 3   Gameplay Build Specialist
BETA 4   World Finishes & Content Designer
BETA 5   Atmosphere & Polish Director
BETA 6   As-Built Reconciliation Director
          ↓ RELEASED AS BUILT + NEXT HANDOFF
```

Run stages strictly sequentially. A downstream stage may not begin until the preceding stage leaves a validated handoff. Do not run Alpha and Beta roles concurrently on the same shell.

## Stable baseline versus recurring work

The first foundation run establishes or confirms the whole-building baseline:

- Alpha 1 establishes the product brief.
- Alpha 2 establishes the world and narrative masterplan.
- Alpha 3 confirms the campaign floor stack.
- Alpha 4 confirms the global viability envelope.
- Alpha 5 issues the first Playable Slice Shell.

On later runs, Alpha 1 and Alpha 2 normally perform guarded verification rather than reinvention. Reopen either baseline only for a documented contradiction, product-direction change from Martin, failed viability requirement, accepted as-built discovery with global impact, or an explicit Beta 6 recommendation approved for integration.

## Core artifacts

The workflow uses five artifact layers:

1. **Whole-building baseline**
   - product purpose and player promise;
   - world, narrative, canon, and intended ending;
   - campaign floor stack;
   - global technical, learning, privacy, accessibility, save, offline, and performance constraints.
2. **Playable Slice Shell**
   - one versioned construction contract issued by Alpha 5.
3. **Beta production package**
   - creative treatment;
   - experience blueprint;
   - functional build report;
   - content and asset ledger;
   - polish review and one reveal candidate.
4. **As-Built Reconciliation Package**
   - shell-to-build comparison, release evidence, variances, accepted lessons, and disposition.
5. **Current handoff**
   - compact synchronized state and one exact next action in `NEXT_INSTANCE_HANDOFF.md`.

## Playable Slice Shell contract

Every Alpha 5 shell must define:

- shell ID, version, campaign position, and source authorities;
- player-facing purpose and emotional promise;
- exact entry state and exact permitted exits;
- spatial, scene, interface, and ownership boundaries;
- required interactions and state transitions;
- required learning objectives and acceptable evidence;
- allowed systems, utilities, assets, and source material;
- save, resume, privacy, sanitation, and failure recovery;
- accessibility, responsive, performance, and offline requirements;
- fixed canon and visual invariants;
- forbidden reveals, effects, routes, authority, and later-state exposure;
- validation ladder;
- definition of done; and
- explicit `SHELL READY`, `REVISE`, or `HOLD` disposition.

Beta may request a variance but may never silently alter the shell.

## Stage gates

| Gate | Owner | Required result |
|---|---|---|
| `VISION BASELINE` | Alpha 1 | Product promise, audience, scope, quality, and priorities are evaluable |
| `WORLD BASELINE` | Alpha 2 | Canon, story arc, identity, and reveal boundaries are coherent |
| `FLOOR STACK READY` | Alpha 3 | Selected slice has exact campaign position and dependencies |
| `VIABILITY READY` | Alpha 4 | Systems, learning, evidence, privacy, accessibility, performance, save, and recovery are buildable |
| `SHELL READY` | Alpha 5 | One conflict-free versioned construction contract exists |
| `CREATIVE LOCK` | Beta 1 | The slice has a compelling interpretation inside the shell |
| `EXPERIENCE READY` | Beta 2 | Every state, action, focus target, recovery route, and responsive layout is specified |
| `FUNCTIONALLY COMPLETE` | Beta 3 | The complete behavior works and is proportionately tested |
| `CONTENT COMPLETE` | Beta 4 | Player-facing structural placeholders are retired or explicitly dispositioned |
| `PRESENTATION COMPLETE` | Beta 5 | The slice is polished across required visual, audio, responsive, and accessible states |
| `AS BUILT RELEASED` | Beta 6 | Independent gates pass, variances are reconciled, and the next handoff is synchronized |

## Variance protocol

Any mismatch between a shell and its implementation must be recorded as one of:

- `ACCEPTED IMPROVEMENT`
- `REQUIRED CORRECTION`
- `MASTERPLAN UPDATE`
- `DEFERRED LIMITATION`
- `UNAUTHORIZED DIVERGENCE`

The discovering role records the variance immediately. Beta 6 owns final classification. A variance that changes product purpose, canon, campaign order, learning evidence, privacy, accessibility, save behavior, authority meaning, or world response cannot be accepted without returning to its owning Alpha role.

## Return routing

- Product-purpose conflict → Alpha 1.
- Canon, mystery, world, or narrative conflict → Alpha 2.
- Campaign position, dependency, pacing, route, or checkpoint conflict → Alpha 3.
- Systems, learning, evidence, privacy, accessibility, save, offline, recovery, or performance conflict → Alpha 4.
- Shell ambiguity or cross-discipline conflict → Alpha 5.
- Emotional treatment conflict → Beta 1.
- Flow, layout, interaction, focus, or responsive blueprint conflict → Beta 2.
- Functional defect → Beta 3.
- Content or major asset defect → Beta 4.
- Presentation defect → Beta 5.
- Release-evidence or reconciliation defect → Beta 6.

Return to the earliest responsible stage. Do not restart the whole sequence without evidence that the baseline itself changed.

## Validation ladder

Validation grows with risk:

1. **Contract checks:** artifact completeness, authority, forbidden-boundary, and cross-reference checks.
2. **Focused checks:** changed behavior, content, asset, accessibility, or visual evidence.
3. **Related regression:** immediately connected systems and predecessor/successor boundaries.
4. **Full product checks:** full suite, validators, production build, served identity, and patch integrity.
5. **Release checks:** isolated production preview, complete non-overlapping E2E, representative desktop/narrow/zoom review, accessibility state review, QA restoration, and synchronization.

Do not claim a live visual, save, assistive-technology, or gated-state result without direct evidence. Never inspect or mutate Martin's browser storage or campaign save merely to manufacture a state.

## Checkpoints and Git discipline

- One bounded integration-sized contribution per stage.
- One dedicated commit per stage, including an honest documented no-change checkpoint when the pass is genuinely read-only.
- Preserve unrelated work and stage only intended files.
- Push at Alpha 5 `SHELL READY`, Beta 3 `FUNCTIONALLY COMPLETE`, and Beta 6 `AS BUILT RELEASED`, unless the current handoff requires a safer earlier synchronization.
- Verify `HEAD == origin/main` at every push gate.
- No scheduled automation is active. Test drives and future runs begin only from Martin's explicit instruction.

## Continuing Horizon Archive invariants

Every stage preserves:

- closed surface canon and the intended ending;
- no RP-013, successor, or post-ending invention;
- the hidden-lore prohibition without Martin's explicit authorization;
- AI-901 evidence quality and no cross-credit;
- privacy allowlists and private/transient clearing;
- offline/no-authority/no-exam-guarantee behavior;
- no-credit Demo Tour;
- accessibility, responsive, focus, forced-color, and reduced-motion parity;
- deterministic save/resume and recoverable failure;
- first-person maximum-quality cinematic photorealism;
- invariant-world limits and explicit ownership language; and
- protected user files named in `NEXT_INSTANCE_HANDOFF.md`.

## Cycle reveal

Beta 5 may produce exactly one spoiler-safe reveal candidate after choosing one accepted visual or lore decision and checking it against existing visual canon. The candidate must vary subject, scale, or composition from recent reveals, include provenance, and identify one named checklist item.

Beta 6 validates and either accepts that exact candidate or records `REVISE`/`HOLD`; it does not silently generate a replacement. A completed released run shows the accepted reveal to Martin. Canonical reference status does not claim runtime integration.

## Beta 6 close

Beta 6 must:

1. independently validate the entire as-built slice;
2. compare it line by line with the shell;
3. classify every variance;
4. record `PASS`, `REVISE`, or `HOLD`;
5. update any master artifact only when the accepted as-built evidence justifies it;
6. record a concise process retrospective;
7. replace `NEXT_INSTANCE_HANDOFF.md` with synchronized state and one exact next action;
8. commit, push, and verify synchronization; and
9. publish the accepted reveal only after the release gate passes.

## Manual test-drive rule

The first test drive is manual and non-scheduled. It should use one bounded existing-authority slice, exercise all 11 handoffs, and measure:

- stage duration;
- artifact usefulness;
- ambiguity or duplicated reading;
- return-routing accuracy;
- number and quality of variances;
- implementation throughput;
- release quality; and
- whether the final reveal communicates tangible progress.

After the test, Beta 6 recommends `KEEP`, `TUNE`, or `REDESIGN`. Martin decides whether to authorize recurring automation.
