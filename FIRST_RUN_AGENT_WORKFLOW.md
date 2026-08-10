# Horizon Archive First Run Agent Workflow

## Purpose

First Run is the active production workflow for turning the released Horizon
Archive working game into a complete, cohesive, first-playthrough-quality game.
It begins with what already exists—from the first sanctioned player input to
the shared Measured Horizon ending—and closes the distance between “the whole
rail works” and “the whole journey feels authored, legible, memorable, and
ready to hand to a new player.”

First Run does not build a sequel to the demo. It finishes the game already on
the page and already present in the released rail.

- **The five planning roles** protect the full-game promise and select the
  earliest meaningful polish gap.
- **The five production roles** direct, blueprint, implement, furnish, and
  present one bounded vertical-quality pass.
- **The Intelligence Officer** independently validates the result, advances
  the full-game maturity record, and leaves one synchronized next action.

The retired Skyscraper infrastructure is preserved at
`Production Pipeline/Archive/2026-08-09-skyscraper-agent-program/`. It is not
an execution authority for First Run.

## Authority order

When instructions conflict, use this order:

1. Martin's latest explicit instruction.
2. Applicable `AGENTS.md` files.
3. `NEXT_INSTANCE_HANDOFF.md` for current state and the exact next action.
4. This workflow.
5. `First Run Agent Profiles/README.md`.
6. The selected canonical First Run profile.
7. The approved versioned First Run Shell.
8. Current runtime, game-on-paper, canon, curriculum, systems, visual,
   accessibility, readiness, and work-log controls.

Never use an archived workflow, profile, prompt, or exact-next-action edge as
current authority.

## Canonical sequence

```text
COMMANDANT
COLONEL
OPERATIONS PLANNING MAJOR
OFFICE OF SCIENCE ADMINISTRATOR
MISSION CAPTAIN
          ↓ FIRST RUN SHELL READY
RECONNAISSANCE SERGEANT
TACTICAL OPERATIONS SPECIALIST
COMBAT ENGINEER
QUARTERMASTER
IMAGE SPECIALIST (RUNTIME PRESENTATION ONLY)
INTELLIGENCE OFFICER
          ↓ FIRST RUN PASS RELEASED + MATURITY UPDATE + NEXT HANDOFF
```

Run roles strictly sequentially. A downstream role may not begin until the
preceding role leaves a validated handoff. The Image Specialist is active only
as a runtime presentation specialist under the non-generative boundary below.

## What “fully fledged” means

First Run is complete only when an independent new player can traverse the
entire canonical experience from boot through RP-012 and encounter a game that
is complete in all of these dimensions:

- entry, onboarding, controls, orientation, and first success are legible;
- all required story and learning beats are represented at their approved
  implementation fidelity;
- the one physical rail is understandable without feeling arbitrary;
- interaction, feedback, remediation, return, save, resume, and recovery are
  trustworthy;
- every player-facing surface has final-purpose copy and truthful state;
- world, terminal, interface, sound, motion, and pacing form one coherent
  experience;
- keyboard, pointer, touch, switch-like activation, reflow, effective `200%`,
  forced color, reduced motion, and assistive naming preserve meaning;
- privacy, evidence ownership, offline behavior, and no-exam-guarantee limits
  remain intact;
- performance and loading are suitable for the supported local platform;
- no temporary production scaffolding masquerades as finished content; and
- READY and NOT YET READY retain equal dignity and the same canonical ending.

“Fully fledged” does not mean more canon. It means the approved game is fully
expressed.

## First Run operating model

### 1. Baseline before backlog

The first cycle establishes a versioned First Run Product Baseline by comparing
the current runtime with:

- `HORIZON_ARCHIVE_GAME_ON_PAPER.md`;
- the released TD-012 state and test evidence;
- surface canon and the closed ending;
- current AI-901 curriculum ownership;
- gameplay, accessibility, save, privacy, and production-readiness controls;
  and
- existing accepted art, audio, and interface assets.

Do not assume every enriched game-on-paper host is already implemented. Record
the exact distance honestly.

### 2. Earliest-first polish rule

After the baseline, Operations selects the earliest material player-facing gap
on the canonical first playthrough. “Earliest” is measured from clean start,
not by file order or whichever screen is most visually exciting.

A later gap may move first only when it blocks an earlier fix, repairs a global
system used by the earlier experience, addresses a release-critical safety or
accessibility failure, or prevents destructive duplicate work. The reason must
be recorded.

### 3. One bounded First Run Work Order

Each cycle owns one integration-sized vertical-quality pass. A Work Order may
include adjacent screens, shared components, and required regression surfaces
when they form one player-visible outcome. It may not become an unbounded
“polish everything” pass.

Every Work Order defines:

- exact first-run address and current maturity;
- player friction or missing production value;
- intended player-visible improvement;
- fixed story, learning, state, save, and ending behavior;
- source, content, asset, and system scope;
- entry, exit, retry, return, resume, and hard-stop behavior;
- desktop, narrow, effective-`200%`, forced-color, and reduced-motion targets;
- performance and offline budgets;
- validation ladder;
- files and systems permitted to change; and
- objective proof required to advance maturity.

### 4. Maturity ladder

First Run tracks each major journey surface through the same ladder:

| Level | Meaning |
| --- | --- |
| `FR0 MAPPED` | Canonical purpose, current implementation, gap, and dependencies are known |
| `FR1 FUNCTIONAL` | Required path, state, learning, recovery, and persistence behavior work |
| `FR2 CONTENT COMPLETE` | Final-purpose copy, content, and major approved assets are present or honestly dispositioned |
| `FR3 PRESENTATION COMPLETE` | Runtime hierarchy, lighting, sound, motion, responsive, and accessibility presentation are polished |
| `FR4 RELEASED` | Intelligence independently validates the exact pass and advances the maturity record |

No role may advance a level from intent alone. The Intelligence Officer alone
records `FR4 RELEASED`.

### 5. Completion sweep

When every critical journey surface is `FR4 RELEASED`, Operations performs a
full first-run convergence audit. Science defines the release envelope, Mission
issues one whole-game completion shell, the production unit addresses only
proven remaining seams, and Intelligence runs the final end-to-end release
gate. Only then may the program record `FIRST RUN COMPLETE`.

## Core artifacts

The active program maintains:

1. `Production Pipeline/First Run/FIRST_RUN_PRODUCT_BASELINE.md`;
2. `Production Pipeline/First Run/FIRST_RUN_RELEASE_MAP.md`;
3. `Production Pipeline/First Run/FIRST_RUN_SCOREBOARD.md`;
4. one versioned First Run Work Order and Viability Envelope per cycle;
5. one versioned `FIRST RUN SHELL READY` contract per production pass;
6. Marine treatment, blueprint, build, content, and presentation reports;
7. one independent As-Built Reconciliation Package per released pass;
8. `Production Pipeline/First Run/PROCESS_CHANGELOG.md`; and
9. compact synchronized state plus one exact action in
   `NEXT_INSTANCE_HANDOFF.md`.

The first planning cycle creates these controls through their named owners,
beginning with the Commandant's baseline and continuing through Operations'
release map and scoreboard. They may be written only after inspection of the
runtime and accepted authorities. Templates do not count as evidence.

## First Run Shell contract

The Mission Captain's shell must include:

- shell ID, version, Work Order, source commit, and predecessor release;
- exact first-run address and current/target maturity;
- player-facing problem and intended felt improvement;
- entry, active states, completion, permitted exits, and hard stop;
- required behavior, copy, content, asset, and presentation changes;
- fixed canon, lesson ownership, evidence, privacy, save, and world behavior;
- keyboard, pointer, touch, semantic activation, focus, announcement, reflow,
  forced-color, and reduced-motion requirements;
- supported offline/runtime/performance budgets;
- existing media allowed for reuse and exact non-generative asset boundaries;
- focused, related, full-product, preview, E2E, live-review, and cleanup gates;
- permitted files/systems and protected files/state;
- definition of done, variance routing, and rollback boundary; and
- explicit `FIRST RUN SHELL READY`, `REVISE`, or `HOLD` disposition.

Production roles may request a variance but may never silently alter the shell.

## Stage gates

| Gate | Owner | First Run result |
| --- | --- | --- |
| `FIRST RUN VISION BASELINE` | Commandant | Full-game finish line, player promise, quality bar, and priority rubric are evaluable |
| `CONTINUITY LOCK` | Colonel | Game-on-paper, runtime, surface canon, and ending boundaries are reconciled |
| `WORK ORDER READY` | Operations Planning Major | Earliest justified gap and one integration-sized pass are exact |
| `POLISH VIABILITY READY` | Office of Science Administrator | Systems, learning, privacy, accessibility, save, performance, and QA envelope are complete |
| `FIRST RUN SHELL READY` | Mission Captain | One conflict-free versioned production contract exists |
| `DIRECTORIAL LOCK` | Reconnaissance Sergeant | The pass has one compelling player-facing interpretation |
| `PLAYER EXPERIENCE READY` | Tactical Operations Specialist | Complete interaction, focus, layout, recovery, and pacing blueprint exists |
| `PRODUCTION FUNCTIONAL` | Combat Engineer | Behavior works in production and proportionate regressions pass |
| `PRODUCTION CONTENT COMPLETE` | Quartermaster | Copy, learning presentation, and approved major content/assets are complete |
| `RUNTIME PRESENTATION COMPLETE` | Image Specialist | Existing-media runtime presentation is polished across required states |
| `FIRST RUN PASS RELEASED` | Intelligence Officer | Independent release gates pass and the maturity record is synchronized |

## Variance and return protocol

Every mismatch is immediately recorded as:

- `ACCEPTED IMPROVEMENT`;
- `REQUIRED CORRECTION`;
- `MASTERPLAN UPDATE`;
- `DEFERRED LIMITATION`; or
- `UNAUTHORIZED DIVERGENCE`.

Return to the earliest owner:

- product finish line or priority conflict → Commandant;
- canon, story meaning, voice, continuity, or ending → Colonel;
- first-run address, ordering, pacing, dependency, or Work Order scope →
  Operations Planning Major;
- systems, learning, evidence, privacy, save, accessibility, performance,
  offline, recovery, or validation → Office of Science Administrator;
- cross-discipline or shell ambiguity → Mission Captain;
- emotional direction or sensory concept → Reconnaissance Sergeant;
- flow, interaction, focus, responsive order, or recovery blueprint → Tactical
  Operations Specialist;
- code, state, build, or functional defect → Combat Engineer;
- copy, learning presentation, major content, or asset provenance →
  Quartermaster;
- runtime lighting, sound, motion, hierarchy, spacing, or visual accessibility
  → Image Specialist; and
- release evidence, maturity classification, or synchronization → Intelligence
  Officer.

Do not restart the entire sequence when a bounded return will repair the defect.

## Validation ladder

Validation grows with risk:

1. contract, authority, patch-integrity, and forbidden-boundary checks;
2. focused tests for every changed behavior/content/presentation surface;
3. related regression across shared systems and adjacent first-run boundaries;
4. applicable curriculum/readiness validators and full game tests;
5. clean production and fixture builds with served identity;
6. isolated preview with HTTP preflight and one complete non-overlapping E2E;
7. representative desktop, narrow, effective-`200%`, keyboard, reduced-motion,
   forced-color, focus, containment, and runtime-error review;
8. QA capture restoration and coordinator-owned process shutdown; and
9. Git synchronization and exact candidate identity.

Never inspect or mutate Martin's real browser profile or campaign save to reach
a gate. Use sanctioned fixtures or deterministic evidence and state any honest
limitation.

## Git and automation discipline

- One bounded contribution and dedicated commit per stage.
- Stage only intended files and preserve unrelated user work.
- Push at `FIRST RUN SHELL READY`, `PRODUCTION FUNCTIONAL`, and
  `FIRST RUN PASS RELEASED`, unless the handoff requires a safer earlier push.
- Prove `HEAD == origin/main` at every push gate.
- Automation is disabled by default. Only Martin may explicitly authorize a
  recurring schedule, cadence, or wake behavior for First Run.
- `NEXT_INSTANCE_HANDOFF.md` is the sole exact-next-action authority.

## Continuing Horizon Archive invariants

Every First Run stage preserves:

- the complete on-foot rail and the shared RP-012 ending;
- `successor=null`, no RP-013, and no post-ending hook;
- no hidden-lore access without Martin's explicit authorization;
- no invented Builder/Machine dialogue, judgment, access, reward, identity,
  world response, or prior-human trace;
- AI-901 ownership, evidence independence, exact remediation, and no cross-credit;
- privacy allowlists and clearing of private/transient work;
- deterministic fail-closed save/resume and recoverable play;
- offline/no-authority/no-exam-guarantee behavior;
- no-credit Demo Tour boundaries;
- accessibility, responsive, focus, forced-color, and reduced-motion parity;
- first-person maximum-quality cinematic identity; and
- protected user files named in `NEXT_INSTANCE_HANDOFF.md`.

## Non-generative presentation boundary

Image generation and cycle reveals remain disabled. No First Run role may
generate, edit, replace, vary, import, or publish an image, or treat concept art
as runtime-integrated evidence. Existing accepted runtime media is immutable
unless Martin explicitly authorizes a later asset operation.

The Image Specialist remains useful and active for code- and configuration-
level runtime presentation: composition, crop use, lighting treatment, color,
sound, motion, typography, hierarchy, focus visibility, responsive containment,
forced color, and reduced motion. The role may not change media bytes or create
a reveal.

## Intelligence close and program stop

After every pass, Intelligence must independently validate the candidate,
classify all variances, update the scoreboard only from accepted as-built
evidence, record `KEEP`, `TUNE`, or `REDESIGN`, replace the handoff, commit,
push, and prove synchronization.

When no authorized Work Order remains, stop honestly. `FIRST RUN COMPLETE` is
permitted only after the whole-game completion sweep passes. It never creates a
new story edge.
