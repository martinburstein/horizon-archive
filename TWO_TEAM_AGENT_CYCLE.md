# Horizon Archive Two-Team Agent Cycle

> **Scheduled-production optimization:** `AUTONOMOUS_PRODUCTION_LOOP.md` specializes this workflow for autonomous wakes. It preserves the role order and gates while defining compact reads, integration-sized tranches, tiered validation, push boundaries, non-overlap behavior, and replace-in-place handoffs.

## Purpose

This is the authoritative workflow for new Horizon Archive development cycles.

The system separates future-shaping work from current-demo production:

- **Team 1 — Advance Team:** lays the rails. It defines the next lore, storyboard, curriculum alignment, gameplay puzzle, and coded first pass far enough ahead that the playable demo has a stable path.
- **Team 2 — Working Team:** runs the train. It implements and perfects the approved path inside the playable demo, proves that it works, and leaves a visible player-facing improvement every cycle.

The original nine-agent loop remains documented in `AGENT_WORKFLOW.md` as a legacy fallback. The Advance Team uses Martin's five named roles: **Lore Builder Agent, Storyboarder Agent, Curriculum Checker Agent, Gameplay Master Agent, and Coder Agent**.

Canonical agent identities are stored in `Agent Profiles/`. `Agent Profiles/README.md` is the registry and loading protocol. The coordinator must read the selected profile in full before every pass; role summaries in this workflow do not replace the profile.

---

## 1. Core operating idea

The project maintains three horizons:

```text
FUTURE HORIZON          READY HORIZON             PLAYABLE HORIZON
Advance Team designs -> approved Rail Packet -> Working Team builds -> demo
```

The Advance Team begins with the first unfinished rail segment immediately beyond the Working Team's live-demo boundary. From there it advances contiguously toward the ending. It may build an intentionally growing backlog of ordered `READY FOR WORKING` Rail Packets.

- Team 1 advances to the next contiguous segment whenever its current packet passes the Advance Handoff Gate. It does not wait for Team 2 to catch up.
- Team 2 remains slower and methodical. It works only on the oldest approved packet adjacent to the accepted live demo and may spend multiple cycles perfecting that packet.
- A growing distance between the teams is expected and desirable. It gives Team 2 a stable route while Team 1 develops the complete story, locations, Python puzzles, knowledge checks, and rough implementation path.
- There is no one-packet target or two-packet ceiling. Sequence integrity, not backlog size, is the governing constraint.
- Team 1 may not skip unresolved gaps. Every packet must connect its start state to the preceding packet's accepted or specified end state.

Team 1's long-range completion condition is an end-to-end rail plan for the entire intended game: ordered story beats, locations, scene states, Python skills, AI-901 knowledge checks, puzzle contracts, dependencies, acceptance criteria, and protected rough construction where specified. After that, Team 1 enters continuity-maintenance mode instead of inventing additional story. Team 2 then continues packet by packet until it catches the completed railhead, at which point Martin may redesign the agent cycle.

The teams do not optimize for equal amounts of writing. They optimize for a dependable pipeline:

1. future decisions become concrete enough to build and connect to the full route;
2. current work becomes playable enough to judge;
3. play evidence changes the next future plan when necessary; and
4. every completed cycle moves the demo forward visibly.

---

## 2. Team roster

## Team 1 — Advance Team

The Advance Team owns future direction and the Rail Packet.

### A1. Lore Builder Agent — Lore Track

Builds the next surface-safe narrative beat, mystery posture, player motivation, observation ladder, state transitions, and ownership language. This role inherits the spoiler discipline and production focus of the previous Lore Keeper Agent.

It answers:

- What does the player encounter next?
- What can the player safely learn, infer, or misunderstand?
- What changes between entry and exit?
- What must remain unresolved?

It may prepare exact runtime-ready copy but does not independently change gameplay code. It never opens the hidden lore vault without explicit authorization.

### A2. Storyboarder Agent — Travel and Scene Track

Treats Horizon Archive's presentation as a sequence of richly illustrated interactive slides. It sketches the places the player will travel next and establishes the visual sequence before the team builds them.

It owns:

- the location immediately beyond the current playable boundary;
- the next planet, region, interior, or transition space;
- first-person scene sketches and composition thumbnails;
- the order of slides/scenes and the transitions between them;
- entry, idle, changed, completed, and return-state boards;
- landmarks, navigation exits, interaction zones, and negative space;
- Builder occupation, functional landscape, material, scale, and collective-work evidence;
- concept-art book plates and production briefs;
- high-resolution 16:9 composition targets and responsive desktop/narrow evidence; and
- visual continuity with the locations before and after the new scene.

It asks concrete forward questions: What comes after the Glass Meadow? What does the next planet look like? What is the first image the player sees there? Which visual change tells the player they made progress?

It does not treat a rough or artifact-heavy generated concept as finished production and never shows the protagonist or ship in the world plate.

### A3. Curriculum Checker Agent — Curriculum Verification Track

Audits the learning path line by line so every Python skill has a direct, defensible purpose in reaching AI-901 mastery. Its job is convergence: once a mapping is correct and validated, it marks it solid and moves forward instead of repeatedly rewriting settled material.

It owns:

- the ordered Python skill sequence;
- line-by-line mapping from Python skill to game exercise, AI-901 objective, and implementation reason;
- detection of gaps, duplication, premature difficulty, and skills that do not advance the exam goal;
- current official AI-901 objective and Foundry-source alignment;
- prerequisite knowledge and readiness gates;
- primary, retrieval, remediation, and fresh-transfer evidence;
- strict mastery and misconception contracts;
- source freshness, privacy, and no-authority boundaries; and
- a `SOLIDIFIED` marker for mappings that pass all checks.

It reopens a `SOLIDIFIED` mapping only when official objectives change, a validator or playtest proves a mismatch, or Martin changes the learning goal. It works hand in hand with Gameplay Master Agent and does not integrate runtime code.

### A4. Gameplay Master Agent — Puzzle Track

Turns the Curriculum Checker's verified Python lesson into an enjoyable adventure-game puzzle that belongs naturally in the Storyboarder's scene and the Lore Builder's surface narrative.

It owns:

- player goal and motivation;
- scene entry and exit states;
- puzzle and interaction graph;
- verbs, hotspots, objects, and state responsibilities;
- how Python knowledge is discovered, attempted, corrected, and applied;
- prerequisite and dependency order;
- optional observations and required actions;
- hints that preserve discovery;
- mistake, retry, and recovery behavior;
- save/resume checkpoints;
- pacing, delight, surprise, and expected play time; and
- player-observable acceptance tests.

Curriculum Checker and Gameplay Master must explicitly sign off on the same skill-to-puzzle mapping before code begins. Gameplay Master may not trade learning validity for a clever puzzle, and Curriculum Checker may not force a valid but joyless quiz when the concept can be taught interactively.

### A5. Coder Agent — Advance Construction Track

Encodes the four preceding tracks into the first rough playable rail segment. This is forward construction, not final polish.

It owns:

- future scene and state scaffolding;
- rough interaction and puzzle logic;
- runtime-ready Lore Builder copy integration;
- Storyboarder asset hooks and state boards;
- Curriculum Checker IDs and validated gates;
- Gameplay Master puzzle sequence, hint, retry, and recovery behavior;
- save/resume foundations;
- feature flags, staging entries, or unreachable future routes that protect the current demo; and
- focused smoke tests proving the rail segment can be handed to the Working Team.

It must not destabilize the current playable path. The forward segment may remain behind a staging entry or incomplete route until the Working Team accepts and perfects it.

At handoff, the coordinator records one of these readiness states:

- `READY FOR WORKING`
- `REVISE`
- `HOLD`

Only `READY FOR WORKING` packets may enter the Working Team queue. Readiness requires Lore Builder, Storyboarder, Curriculum Checker, and Gameplay Master sign-off plus a compiling, testable first code pass.

---

## Team 2 — Working Team

The Working Team owns the playable demo and the Demo Increment.

Team 2 has three unique agents and four sequential passes. The same Coder Agent performs both coding passes and may also be the same Coder Agent used by Team 1. Reusing that agent preserves implementation context from rough Advance construction through bug repair and visual polish.

### W1. Player Agent — Playthrough and Bug Report

Plays the puzzles currently loaded in the playable demo from a valid starting state. It attempts to finish them as a real player would, including plausible mistakes, retries, save/resume, and alternate interaction order where relevant.

It owns:

- completing the loaded playable path without reading implementation details first;
- finding crashes, dead ends, broken state, incorrect puzzle responses, unclear goals, and failed recovery;
- distinguishing a gameplay bug from an aesthetic concern;
- recording exact reproduction steps, starting state, expected behavior, actual behavior, severity, and evidence;
- identifying the earliest blocking defect before reporting later dependent failures; and
- handing a prioritized bug report to the Coder Agent.

It does not change production code or visual assets. If no bug is found, it records a clean playthrough with the path and validation evidence.

### W2. Coder Agent — Bug Repair and Demo Reload

Receives the Player Agent's report, fixes the highest-value reproducible defects, adds focused regression coverage, and reloads the playable demo before aesthetic review.

It owns:

- puzzle state and transitions;
- hotspots and interaction behavior;
- hint, retry, failure, and recovery logic;
- save/resume behavior;
- Terminal and scene integration;
- focused regression tests for every repaired defect;
- a clean production build; and
- restarting or rebuilding the demo at `http://127.0.0.1:4173/` so the Aesthetic Agent reviews the repaired version.

It must not invent future canon, weaken a `SOLIDIFIED` curriculum mapping, or hide a bug with presentation changes. Its handoff includes repaired issue IDs, remaining known bugs, validation, build identity, and confirmation that the demo was reloaded.

### W3. Aesthetic Agent — Scene Review

Reviews the reloaded demo as a whole scene, not as isolated files. It judges whether the scene looks internally coherent, intentional, readable, and faithful to Horizon Archive's established visual direction.

It checks:

- PNG dimensions, crop, compression, transparency, and on-screen scale;
- inadequate source resolution, destructive resampling, compression artifacts, inconsistent photographic sharpness, or visible image-generation defects;
- mismatched detail levels between backgrounds, sprites, interface, and effects;
- elements that attract attention without gameplay or narrative purpose;
- important elements that fail to attract enough attention;
- composition, hierarchy, silhouette, palette, contrast, and negative space;
- visible seams, clipping, overflow, stretching, and incorrect aspect ratios;
- first-person framing, protagonist/ship exclusion, and the high-resolution photorealistic presentation contract;
- whether animation preserves invariant body geometry when only one region should change; and
- whether the scene still carries the intended Builder-made functional strangeness and richness.

It records each issue with location, evidence, severity, intended visual outcome, constraints to preserve, and a concrete acceptance check. It does not edit production code or assets during this pass.

### W4. Coder Agent — Aesthetic Implementation and Final Reload

The same Coder Agent returns after the Aesthetic Agent. It implements the accepted visual corrections without breaking the now-working puzzles.

It owns:

- asset sizing, cropping, rendering, and integration corrections;
- CSS/layout and canvas presentation fixes;
- high-quality responsive resampling, aspect-ratio preservation, and photographic detail retention;
- animation invariants and stable sprite geometry;
- visual hierarchy changes identified by the Aesthetic Agent;
- regression checks for both gameplay and presentation;
- a clean production build; and
- the final demo reload at `http://127.0.0.1:4173/`.

If an aesthetic recommendation conflicts with gameplay clarity, curriculum validity, accessibility, canon, or an approved Rail Packet, the Coder records the conflict and preserves the higher-level contract rather than silently implementing it.

A Demo Increment is complete only after the coordinator validates the final reloaded build.

---

## 3. Durable pipeline artifacts

Canonical identities live under `Agent Profiles/`; shared queues, packets, and increment records live under `Production Pipeline/`.

| Artifact | Purpose |
|---|---|
| `Agent Profiles/README.md` | Stable agent registry, run order, and profile-loading protocol |
| `Agent Profiles/*.md` | Canonical identity, boundaries, procedure, validation, and handoff for each unique agent |
| `STORY_RAIL_MAP.md` | Ordered end-to-end route, packet adjacency, team positions, and distance between railhead and live demo |
| `EXPEDITION_SPINE.md` | Spoiler-safe 12-packet breadth target, phase structure, reserved sequence, and coverage rules |
| `ADVANCE_BREADTH_GATE.md` | Work-in-progress limit, convergence budget, anti-micro-seam rules, and Gate Review audit |
| `PACKET_SCOREBOARD.md` | Compact packet readiness matrix and missing-gate count |
| `LOCATION_VISUAL_SPINE.md` | Storyboarder-owned location, world-plate, presentation, and responsive progression across the 12-packet spine |
| `CURRICULUM_SPINE.md` | Curriculum-owned Python and AI-901 coverage obligations across the 12-packet spine |
| `GAMEPLAY_SYSTEMS_SPINE.md` | Gameplay-owned interaction, recovery, save, and systems progression across the 12-packet spine |
| `PRODUCTION_READINESS_SPINE.md` | Coder/coordinator-owned protected build, art, integration, Working, and release progression |
| `ADVANCE_QUEUE.md` | Future slices being explored, designed, revised, or gated |
| `WORKING_QUEUE.md` | Approved packets waiting for or undergoing demo implementation |
| `DECISION_LOG.md` | Directional decisions that affect multiple packets or teams |
| `rail-packets/RP-###-slug.md` | Complete build contract for one future playable slice |
| `demo-increments/DI-###-slug.md` | Evidence and release record for one playable improvement |
| `templates/RAIL_PACKET_TEMPLATE.md` | Required Advance Team output |
| `templates/DEMO_INCREMENT_TEMPLATE.md` | Required Working Team output |

Project logs remain authoritative for specialist detail. Pipeline artifacts coordinate across roles; they do not replace the role work logs.

Working Team role logs are:

- Player Agent: `playtest/WORK_LOG.md`
- shared Coder Agent, both passes: `horizon-archive-game/WORK_LOG.md`
- Aesthetic Agent: `Aesthetic Agent/WORK_LOG.md`

---

## 4. Cycle sequence

One complete cycle has two phases and two gates.

## Phase A — Advance Team lays the next rail segment

Run in this order:

1. Lore Builder Agent
2. Storyboarder Agent
3. Curriculum Checker Agent
4. Gameplay Master Agent
5. Coder Agent

Each Advance role works on the same Rail Packet ID.

### Advance Handoff Gate

After the Coder handoff, the coordinator runs the Advance Handoff Gate and checks that the packet includes:

- a surface-safe story beat;
- a player goal;
- explicit start and exit states;
- a buildable interaction or puzzle graph;
- required and optional actions;
- failure, hint, retry, and recovery behavior;
- learning alignment and strict evidence where applicable;
- scene topology and visual evidence;
- accessibility risks anticipated before Working Team polish;
- dependencies and open risks;
- locked decisions versus flexible implementation choices; and
- player-observable acceptance criteria.

If the readiness state is `REVISE`, return the packet to the named Advance role. Do not send an incomplete packet to the Working Team.

If the readiness state is `READY FOR WORKING`, promote the packet from `ADVANCE_QUEUE.md` to `WORKING_QUEUE.md`.

After promotion, update `STORY_RAIL_MAP.md` and seed the next contiguous Rail Packet unless the intended ending has been reached. The next cycle's Advance Team works that new packet even if Team 2 is still perfecting an older one.

### Asymmetric cadence

- One Advance phase normally moves one future packet through A1–A5.
- One Working phase performs one methodical tranche on its current live-demo packet; acceptance is not forced within a single cycle.
- The coordinator may run additional complete Advance phases before the next Working phase when safe work remains, so Team 1 can extend multiple packets while Team 2 performs one careful live-demo tranche.
- Team 1 starts its next contiguous packet after a successful handoff. Team 2 stays on its current packet until the release gate accepts it.
- Therefore, completed Advance packets may accumulate faster than accepted Demo Increments. This backlog is intentional.
- The coordinator reports both positions after every cycle rather than trying to keep the teams equally distant.

## Phase B — Working Team runs the train

Run in this order:

1. Player Agent
2. Coder Agent — bug repair and demo reload
3. Aesthetic Agent — scene review
4. Coder Agent — aesthetic implementation and final reload

The Working Team always takes the oldest `READY FOR WORKING` packet that directly follows the accepted live-demo boundary. It never jumps to a newer packet merely because Team 1 has advanced farther. A packet remains Team 2's active work across as many cycles as needed until it is accepted or explicitly returned.

### Demo Release Gate

The coordinator independently confirms:

- at least one visible player-facing improvement exists;
- the new or improved path is playable from a valid save;
- mistakes remain recoverable;
- tests and builds pass;
- exact viewports and asset invariants pass;
- relevant curriculum validators pass;
- the Aesthetic Agent's accepted findings were implemented or explicitly dispositioned;
- the full browser journey passes when progression, save, focus, or evidence changed;
- the playable demo at port `4173` is rebuilt or restarted; and
- the Demo Increment record links the evidence.

The coordinator then marks the packet:

- `IN DEMO — PARTIAL`
- `IN DEMO — ACCEPTED`
- `RETURN TO ADVANCE`

`RETURN TO ADVANCE` means play evidence invalidated a future assumption. This is healthy feedback, not failure.

---

## 5. Definition of visible progress

Every Working Team phase must leave something Martin can experience in the playable demo.

Qualifying progress includes:

- a new playable scene beat;
- a new interaction or puzzle step;
- a newly integrated learning encounter;
- a repaired save/resume path;
- a clearly improved production asset in the scene;
- a major obstruction, confusion, or accessibility defect removed; or
- a noticeable presentation improvement that protects gameplay.

The following do not satisfy visible progress by themselves:

- planning documents;
- research notes;
- source-register updates;
- tests without a player-facing change;
- refactors with identical behavior;
- concept art not connected to the current or next playable slice; or
- a claim that the demo improved without a reproducible path.

Each Demo Increment must include a short demonstration path that can be completed in approximately five minutes or less.

---

## 6. Scope firewall between teams

### Advance Team may

- define future story, gameplay, learning, location, and art contracts;
- create curriculum source packages and validators;
- create concept/preproduction art;
- revise future packets based on play evidence; and
- lock or explicitly leave flexible decisions;
- advance through any number of contiguous packets; and
- complete the full ordered rail map before Team 2 catches up.

### Advance Team may not

- casually edit the current playable runtime;
- fix current demo bugs;
- bypass the Working queue;
- treat speculative art as shipped production;
- skip a missing or unresolved rail segment; or
- rewrite an already accepted live-demo segment without a documented return from Team 2.

### Working Team may

- test the rough playable segment supplied by the Advance Coder;
- fix current demo blockers;
- review the repaired scene as a coherent visual whole;
- implement accepted aesthetic corrections;
- make narrow integration decisions inside the packet's flexible areas;
- return invalid assumptions to Advance; and
- improve the current demo even when the next packet is temporarily blocked.

### Working Team may not

- invent future story canon;
- redesign the packet's core player goal without returning it;
- weaken Teacher mastery contracts;
- substitute blockout art for an approved richness target;
- reveal hidden lore; or
- silently expand scope into a second future slice.

---

## 7. Rail Packet contract

A Rail Packet is a promise that a future slice is coherent enough to build.

It must answer:

1. Where does the slice begin?
2. What does the player want?
3. What can the player observe and do?
4. What is required, optional, and unavailable?
5. What state or understanding changes?
6. How can the player fail safely and recover?
7. What learning outcome is practiced or reinforced?
8. What scene and assets are required?
9. What must the art communicate without exposition?
10. What accessibility risks can be prevented before coding?
11. What decisions are locked?
12. What implementation choices remain flexible?
13. What exact player-visible evidence proves completion?

Packets use the template at `Production Pipeline/templates/RAIL_PACKET_TEMPLATE.md`.

### Breadth and convergence requirement

Before A1 selects work, read `EXPEDITION_SPINE.md`, `ADVANCE_BREADTH_GATE.md`, and `PACKET_SCOREBOARD.md`.

Each later Advance role also reads its supporting spine: Storyboarder reads `LOCATION_VISUAL_SPINE.md`, Curriculum Checker reads `CURRICULUM_SPINE.md`, Gameplay Master reads `GAMEPLAY_SYSTEMS_SPINE.md`, and Coder reads `PRODUCTION_READINESS_SPINE.md`.

After three consecutive complete Advance cycles on the same packet without reaching `GATE REVIEW`, the next A1 pass is a convergence audit. It must reduce missing gates through integration, trimming, merging, or an explicit hold. Further one-transition-at-a-time expansion is not authorized merely because another micro-seam can be specified.

At every A5 handoff, update the packet's scoreboard row and record whether the tranche reduced its missing-gate count.

---

## 8. Demo Increment contract

A Demo Increment is a verified, player-visible improvement tied to a Rail Packet or current-demo defect.

It records:

- packet and cycle IDs;
- starting and ending commit;
- player-visible delta;
- five-minute demonstration path;
- changed files and systems;
- validation results;
- exact viewport evidence;
- save/resume and recovery behavior;
- known limitations;
- screenshots or local evidence paths when appropriate;
- Player bug verdict, Aesthetic review, and coordinator release verdict; and
- whether the packet is accepted, partial, or returned.

Increments use the template at `Production Pipeline/templates/DEMO_INCREMENT_TEMPLATE.md`.

---

## 9. Git and reporting cadence

The coordinator owns Git.

### Advance Team checkpoints

Checkpoint after every Advance role so story, gameplay, curriculum, world, and gate decisions have separate history.

Suggested commit prefixes:

- `Advance Lore Builder:`
- `Advance Storyboarder:`
- `Advance Curriculum:`
- `Advance Gameplay Master:`
- `Advance Coder:`

### Working Team checkpoints

Checkpoint after every Working role.

Suggested commit prefixes:

- `Working Player:`
- `Working Coder Bugfix:`
- `Working Aesthetic:`
- `Working Coder Polish:`

Create a dedicated local commit after each role. During scheduled autonomous production, push at the optimized boundaries in `AUTONOMOUS_PRODUCTION_LOOP.md`: after A5, W2, W4, coordinator handoff, and cycle reveal, plus immediately after any unusually risky runtime/save/recovery change. Do not create empty commits merely to prove a read-only role ran; record its signed disposition in the current-cycle control block and include it in the next boundary commit.

### Mandatory cycle-end visual reveal

After the coordinator has completed the release disposition, pushed the handoff, and verified synchronization, produce exactly **one** new cycle-reveal image for Martin.

The reveal must:

- make the game's visual or spatial layout feel measurably more developed;
- depict one bounded fragment from the completed cycle, such as an item, console, interface surface, architectural threshold, or landscape;
- feel mysterious and unmistakably part of a much larger whole;
- use only accepted, spoiler-safe project material and never consult or reveal the hidden-lore vault;
- preserve the first-person, maximum-quality cinematic photoreal direction unless the cycle explicitly accepted a different asset class;
- contain no protagonist, hands, body, ship, prior human trace, readable Builder prose, answer key, watermark, or unapproved story revelation;
- identify exactly one accepted lore, spatial, layout, material, item, or interface decision that the image makes certain, preferably a recent breakthrough from the completed cycle;
- become a canonical visual reference for that declared decision as soon as it passes coordinator inspection, while remaining distinct from a shipped or runtime-integrated production asset;
- close one named visual-production checklist item so later agents consume the image as accepted evidence instead of rechecking the same uncertainty, unless a regression, contradiction, accessibility failure, or Martin's direct instruction reopens it;
- be copied into `Visual Direction/Production Masters/` with a non-overwriting versioned filename and a neighboring `PROVENANCE.md` that records the decision, limits, prompt intent, dimensions, hash, and integration status;
- be shown inline to Martin as the final visible output of the cycle; and
- be recorded in the Demo Increment with its subject, locked decision, closed checklist item, prompt intent, canonical status, and project path.

Choose the subject from the accepted cycle outcome. Prefer the single uncertainty whose resolution will most reduce future checking, or the cycle's strongest spoiler-safe lore breakthrough. Vary the scale across cycles so the reveals gradually expose the world through objects, consoles, interiors, thresholds, and landscapes rather than repeatedly depicting the same view. Canon applies only to the decision and limits written in provenance; it does not automatically authorize runtime integration, new gameplay state, hidden lore, or facts outside the accepted cycle.

At cycle end, the coordinator reports both teams separately:

```markdown
Advance Team
- Lore Builder: ...
- Storyboarder: ...
- Curriculum Checker: ...
- Gameplay Master: ...
- Coder: READY FOR WORKING | REVISE | HOLD

Working Team
- Player: ...
- Coder bug repair and reload: ...
- Aesthetic review: ...
- Coder aesthetic implementation and final reload: ...
- Coordinator release verdict: PASS | REVISE

Playable demo delta: ...
Next approved Rail Packet: ...
Team 1 railhead: RP-### / chapter-location ...
Team 2 live-demo position: RP-### / chapter-location ...
Advance lead: ... ordered packets
Whole-story rail status: NOT STARTED | IN PROGRESS | END-TO-END OUTLINED
Validation: ...
Git synchronization: ...
```

Routine hidden-story work remains spoiler-safe in chat.

---

## 10. First-cycle bootstrap

The current playable demo is the Working Team's starting track. The first two-team cycle should:

### Advance Team

Create and code the first future Rail Packet for the nearest coherent story/gameplay/learning/location slice beyond the currently accepted demo boundary. After it passes, seed the immediately following packet so later Advance cycles continue contiguously toward the ending.

### Working Team

Play and perfect the current live demo methodically. Remain on the oldest adjacent approved packet until it passes the release gate, even when Team 1 has moved several packets ahead.

This avoids waiting for an entirely new roadmap before improving the game.

---

## 11. Copy-ready coordinator prompt

```text
Run one complete Horizon Archive two-team cycle using TWO_TEAM_AGENT_CYCLE.md as the authoritative workflow. Team 1 may complete additional contiguous Advance phases before Team 2's single methodical phase when safe capacity remains.

Team 1 — Advance Team:
Lore Builder Agent -> Storyboarder Agent -> Curriculum Checker Agent -> Gameplay Master Agent -> Coder Agent.

All five agents work on one future Rail Packet. Begin with the nearest unfinished segment beyond Team 2, then advance contiguously toward the intended ending without waiting for Team 2. There is no maximum backlog size. Curriculum Checker and Gameplay Master must agree on the skill-to-puzzle mapping. Coder Agent produces the protected first playable pass. The packet may enter the Working queue only after a READY FOR WORKING handoff. After handoff, update STORY_RAIL_MAP.md and seed the next contiguous packet.

Team 2 — Working Team:
Player Agent -> Coder Agent (bug repair and reload) -> Aesthetic Agent -> the same Coder Agent (aesthetic implementation and final reload).

The Player Agent completes every puzzle loaded in the oldest approved demo slice and produces exact bug reports. The shared Coder Agent repairs those bugs, validates them, and reloads the demo. The Aesthetic Agent then reviews the repaired scene in the live demo for source quality, photorealistic credibility, asset scale, material and lighting consistency, AI artifacts, hierarchy, visual distractions, framing, richness, and presentation defects. The same Coder Agent implements accepted aesthetic corrections, revalidates gameplay and visuals, and performs the final demo reload. Team 2 may spend multiple cycles on one packet and must not skip forward to match Team 1's railhead. Each Working phase must leave a visible player-facing improvement with a five-minute demonstration path. It may return invalid assumptions to the Advance Team but may not invent future canon or weaken mastery.

Read all applicable AGENTS.md files, Agent Profiles/README.md, the selected agent's canonical profile in full, the two-team cycle, pipeline queues, active packet, previous Demo Increment, and role work logs before each step. Reuse the same coder_agent identity for A5, W2, and W4, selecting the required Coder mode each time. Only one specialist owns the shared worktree at a time. Each agent completes one bounded tranche, validates it, updates its work log and shared pipeline artifact, and returns a spoiler-safe handoff.

The coordinator inspects, commits, and pushes a dedicated checkpoint after every role; preserves user work and untracked files; enforces hidden-lore, official-source, high-resolution photorealistic, first-person, originality, privacy, no-authority, recovery, and accessibility contracts; and uses an empty commit for read-only checkpoints when required.

After both teams, run independent curriculum, art, test, build, exact-viewport, and full E2E gates as appropriate. Update the playable demo at http://127.0.0.1:4173/, restore incidental QA files, verify HEAD equals origin/main, report Advance Team progress, Working Team progress, the visible demo delta, Team 1's railhead, Team 2's live-demo position, the ordered packet lead, whole-story rail status, validation, and risks, then produce exactly one spoiler-safe mysterious cycle-reveal image as the final visible output.
```

---

## 12. Success condition

The two-team system is healthy when:

- the Advance Team extends a contiguous, buildable route toward the ending without waiting for the live demo;
- the ordered Advance lead may grow without gaps or contradictory packets;
- the Working Team delivers a visible, reliable live-demo improvement every cycle while remaining methodical;
- Player evidence can revise future packets without chaos;
- returned evidence repairs affected future packets without forcing Team 2 to skip ahead;
- the playable demo never becomes a neglected prototype while planning expands;
- Team 1 eventually reaches `END-TO-END OUTLINED`;
- Team 2 eventually catches that completed railhead; and
- the catch-up milestone triggers a deliberate workflow review with Martin rather than automatic scope expansion; and
- every completed cycle ends with one spoiler-safe visual fragment that lets Martin see the game world and layout accumulating into a larger whole.
