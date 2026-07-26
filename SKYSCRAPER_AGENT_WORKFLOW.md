# Horizon Archive Skyscraper Agent Workflow

## Purpose

This is the active manual production workflow for Horizon Archive. It treats the complete game as a 33-story skyscraper and each production-quality playable slice as a fully realized showroom inside a construction-ready shell.

- **The Colonels** protect the whole building and issue one exact Playable Slice Shell.
- **The Marine field unit** turns that shell into one finished playable jewel.
- **The Intelligence Officer** independently reconciles the as-built result, releases it honestly, and returns accepted lessons to the master plan.

The retired Team 1 / Team 2 workflow remains available only at tag `two-team-infrastructure-archive-2026-07-25`. It is not an execution authority for this workflow.

## Authority order

When instructions conflict, use this order:

1. Martin's latest explicit instruction.
2. Applicable `AGENTS.md` files.
3. `NEXT_INSTANCE_HANDOFF.md` for current state and the exact next action.
4. This workflow.
5. `Skyscraper Agent Profiles/README.md`.
6. The selected canonical Colonel or Marine profile.
7. The approved Playable Slice Shell.
8. Current product, canon, curriculum, technical, visual, and work-log artifacts.

Never use an archived exact-next-action edge as current authority.

## Canonical sequence

```text
COMMANDANT
COLONEL
OPERATIONS PLANNING MAJOR
OFFICE OF SCIENCE ADMINISTRATOR
MISSION CAPTAIN
          ↓ SHELL READY
RECONNAISSANCE SERGEANT
TACTICAL OPERATIONS SPECIALIST
COMBAT ENGINEER
QUARTERMASTER
IMAGE SPECIALIST
INTELLIGENCE OFFICER
          ↓ RELEASED AS BUILT + NEXT HANDOFF
```

Run roles strictly sequentially. A downstream role may not begin until the preceding role leaves a validated handoff. Do not run the Colonel staff and Marine field unit concurrently on the same shell.

## Stable baseline versus recurring work

The first foundation run establishes or confirms the whole-building baseline:

- The Commandant establishes the product brief.
- The Colonel establishes the world and narrative masterplan.
- The Operations Planning Major confirms the campaign floor stack.
- The Office of Science Administrator confirms the global viability envelope.
- The Mission Captain issues the first Playable Slice Shell.

On later runs, the Commandant and Colonel normally perform guarded verification rather than reinvention. Reopen either baseline only for a documented contradiction, product-direction change from Martin, failed viability requirement, accepted as-built discovery with global impact, or an explicit Intelligence Officer recommendation approved for integration.

## Core artifacts

The workflow uses five artifact layers:

1. **Whole-building baseline**
   - product purpose and player promise;
   - world, narrative, canon, and intended ending;
   - campaign floor stack;
   - global technical, learning, privacy, accessibility, save, offline, and performance constraints.
2. **Playable Slice Shell**
   - one versioned construction contract issued by the Mission Captain.
3. **Marine production package**
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

Every Mission Captain shell must define:

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

The Marines may request a variance but may never silently alter the shell.

## Stage gates

| Gate | Owner | Required result |
|---|---|---|
| `VISION BASELINE` | Commandant | Product promise, audience, scope, quality, and priorities are evaluable |
| `WORLD BASELINE` | Colonel | Canon, story arc, identity, and reveal boundaries are coherent |
| `FLOOR STACK READY` | Operations Planning Major | Selected slice has exact campaign position and dependencies |
| `VIABILITY READY` | Office of Science Administrator | Systems, learning, evidence, privacy, accessibility, performance, save, and recovery are buildable |
| `SHELL READY` | Mission Captain | One conflict-free versioned construction contract exists |
| `CREATIVE LOCK` | Reconnaissance Sergeant | The slice has a compelling interpretation inside the shell |
| `EXPERIENCE READY` | Tactical Operations Specialist | Every state, action, focus target, recovery route, and responsive layout is specified |
| `FUNCTIONALLY COMPLETE` | Combat Engineer | The complete behavior works and is proportionately tested |
| `CONTENT COMPLETE` | Quartermaster | Player-facing structural placeholders are retired or explicitly dispositioned |
| `PRESENTATION COMPLETE` | Image Specialist | The slice is polished across required visual, audio, responsive, and accessible states |
| `AS BUILT RELEASED` | Intelligence Officer | Independent gates pass, variances are reconciled, and the next handoff is synchronized |

## Variance protocol

Any mismatch between a shell and its implementation must be recorded as one of:

- `ACCEPTED IMPROVEMENT`
- `REQUIRED CORRECTION`
- `MASTERPLAN UPDATE`
- `DEFERRED LIMITATION`
- `UNAUTHORIZED DIVERGENCE`

The discovering role records the variance immediately. The Intelligence Officer owns final classification. A variance that changes product purpose, canon, campaign order, learning evidence, privacy, accessibility, save behavior, authority meaning, or world response cannot be accepted without returning to its owning Colonel.

## Return routing

- Product-purpose conflict → Commandant.
- Canon, mystery, world, or narrative conflict → Colonel.
- Campaign position, dependency, pacing, route, or checkpoint conflict → Operations Planning Major.
- Systems, learning, evidence, privacy, accessibility, save, offline, recovery, or performance conflict → Office of Science Administrator.
- Shell ambiguity or cross-discipline conflict → Mission Captain.
- Emotional treatment conflict → Reconnaissance Sergeant.
- Flow, layout, interaction, focus, or responsive blueprint conflict → Tactical Operations Specialist.
- Functional defect → Combat Engineer.
- Content or major asset defect → Quartermaster.
- Presentation defect → Image Specialist.
- Release-evidence or reconciliation defect → Intelligence Officer.

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
- Push at the Mission Captain's `SHELL READY`, Combat Engineer's `FUNCTIONALLY COMPLETE`, and Intelligence Officer's `AS BUILT RELEASED`, unless the current handoff requires a safer earlier synchronization.
- Verify `HEAD == origin/main` at every push gate.
- Recurring automation may run only under Martin's explicit authorization.
  `NEXT_INSTANCE_HANDOFF.md` is the sole authority for its current status and
  next exact stage; never restart a completed stage from a stale scheduled
  prompt.

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

The Image Specialist may produce exactly one spoiler-safe reveal candidate after choosing one accepted visual or lore decision and checking it against existing visual canon. The candidate must vary subject, scale, or composition from recent reveals, include provenance, and identify one named checklist item.

The Intelligence Officer validates and either accepts that exact candidate or records `REVISE`/`HOLD`; it does not silently generate a replacement. A completed released run shows the accepted reveal to Martin. Canonical reference status does not claim runtime integration.

## Intelligence Officer close

The Intelligence Officer must:

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

After the test, the Intelligence Officer recommends `KEEP`, `TUNE`, or `REDESIGN`. Martin decides whether to authorize recurring automation.
