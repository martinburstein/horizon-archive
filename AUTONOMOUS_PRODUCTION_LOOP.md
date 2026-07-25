# Horizon Archive Autonomous Production Loop

## Purpose

This is the optimized execution overlay for scheduled Horizon Archive work. It preserves the ten-stage quality line in `TWO_TEAM_AGENT_CYCLE.md` while maximizing useful production work per wake-up.

The outcome of every completed wake is:

1. one integration-sized playable advance at the nearest authorized edge;
2. one independently validated release disposition;
3. one spoiler-safe canonical visual reveal;
4. one compact, synchronized handoff that the next scheduled wake can execute immediately.

## Authority order

When instructions differ, use this order:

1. Martin's latest explicit instruction;
2. applicable `AGENTS.md` files;
3. `NEXT_INSTANCE_HANDOFF.md` for current state and exact next action;
4. `TWO_TEAM_AGENT_CYCLE.md` for role order and role boundaries;
5. this file for autonomous throughput, reading, validation, and checkpoint strategy;
6. the selected canonical role profile;
7. active pipeline artifacts and specialist logs.

Never use a workflow edge copied into a scheduled prompt when `NEXT_INSTANCE_HANDOFF.md` has a newer edge.

## One wake, one continuing cycle

- A scheduled wake starts exactly one cycle only when no cycle is already active.
- If a previous wake was interrupted, continue from its latest synchronized role checkpoint. Do not restart A1, duplicate commits, or repeat accepted work.
- Roles remain strictly sequential: A1, A2, A3, A4, A5, W1, W2, W3, W4, coordinator, cycle reveal.
- Never run two roles concurrently against the shared worktree.
- A completed role's durable handoff is the next role's immediate input.
- A cycle is complete only after the release disposition, compact handoff, and exactly one cycle reveal are pushed and `HEAD == origin/main`.

## Optimized reading protocol

### Once per scheduled wake

Read in full:

- applicable `AGENTS.md` files;
- `NEXT_INSTANCE_HANDOFF.md`;
- `AUTONOMOUS_PRODUCTION_LOOP.md`;
- `TWO_TEAM_AGENT_CYCLE.md` only when its hash changed since the preceding completed cycle or when the handoff reports a workflow conflict;
- `Agent Profiles/README.md` only when its hash changed or the role registry is in question.

### Before each role

Read in full:

- the selected canonical role profile;
- the preceding role's current-cycle handoff;
- the active artifact's top `Current control` block;
- the latest entry in the selected role's work log;
- the exact sections directly named by the handoff or profile.

Do not reread thousands of lines of append-only history by default. Read older packet, increment, queue, rail-map, or log history only when:

- a current control block cites it;
- a validator or playtest contradicts current state;
- a closed decision meets a documented reopen condition;
- continuity cannot otherwise be proven; or
- Martin requests a historical audit.

The coordinator may search historical artifacts for exact authorities without loading unrelated sections.

## Current-control blocks

The top of each active packet, Demo Increment, queue, rail map, scoreboard, and supporting spine must state:

- current disposition;
- accepted player-visible boundary;
- exact next gap;
- closed constraints;
- current Team 1 and Team 2 positions;
- latest relevant validation;
- exact next-role handoff.

Update the current-control block in place. Preserve useful history in Git and specialist logs instead of endlessly expanding the active handoff.

At coordinator close, leave exactly one authoritative release-status bullet and one authoritative exact-next-edge bullet in each top current-control block. Move superseded peer bullets into dated history or delete them when Git already preserves the evidence; do not accumulate “authoritative” disclaimers above stale current peers.

`NEXT_INSTANCE_HANDOFF.md` is a replace-in-place operational state file, not a cycle diary. Keep it concise enough to read in one pass.

## Work sizing

Each specialist owns one integration-sized tranche, not one microscopic transition.

A tranche is large enough to reduce a real player-facing or release deficit and small enough to validate and hand off safely in the current cycle. Prefer:

- complete ownership paths over isolated micro-seams;
- one coherent interaction and recovery loop over individual states;
- merging existing authorities over creating new modules;
- fixing the earliest reproducible player-facing gap and its direct recovery path;
- a visible layout improvement with accessibility parity over cosmetic churn.

If the convergence budget is exhausted, integrate, merge, trim, or hold. Do not manufacture work by inventing a new prompt, answer, score, branch, packet, successor, or post-ending content.

## Ten-stage production line

### Model routing

- Coordinator, A5, W2, and W4 use GPT-5.6 Sol with high reasoning when model routing is available.
- A1, A2, A3, A4, W1, and W3 may use GPT-5.6 Terra at medium or high reasoning for faster bounded specialist work.
- If the scheduled task supports only one model, keep GPT-5.6 Sol at high reasoning for the entire cycle.
- Model routing never relaxes profile, validation, evidence, privacy, canon, or handoff requirements.

### Advance Team

1. Lore Builder locks the surface-safe ownership and meaning of the complete tranche.
2. Storyboarder locks one coherent wide/narrow presentation sequence using closed visual canon.
3. Curriculum Checker verifies the whole evidence and remediation contract without reopening `SOLIDIFIED` mappings.
4. Gameplay Master locks the complete interaction, failure, recovery, focus, and save graph.
5. Coder in `advance` mode builds one pure protected end-to-end controller and focused regression coverage without normal integration.

### Working Team

6. Player reports the earliest normal player-facing gap from the accepted live boundary without inspecting implementation first.
7. Coder in `bug-repair` mode integrates and repairs that complete gap, adds focused coverage, builds, and reloads the demo.
8. Aesthetic reviews the repaired live scene and opens only concrete presentation findings.
9. Coder in `aesthetic-polish` mode resolves accepted findings, protects gameplay/accessibility, builds, and performs the final reload.
10. Coordinator independently validates, disposes, updates the handoff, and synchronizes the release.

After synchronization, generate exactly one canonical cycle reveal under `TWO_TEAM_AGENT_CYCLE.md`.

## Validation ladder

Run the cheapest decisive evidence at each stage. Do not repeat full release work after every role.

| Stage | Required validation |
|---|---|
| A1 | continuity, ownership, spoiler, hard-stop, and diff checks |
| A2 | composition, responsive/accessibility contract, closed-canon, and diff checks |
| A3 | directly applicable curriculum validators and evidence firewall checks |
| A4 | focused graph/recovery tests and contract checks |
| A5 | focused protected-controller tests, directly related regression tests, applicable validators, and production build |
| W1 | player-path evidence and reproducible issue checks; no full suite unless needed to establish a defect |
| W2 | focused repaired-path tests, full game suite, applicable validators, production build, served-bundle identity |
| W3 | live or served-source visual review at representative wide/narrow states; no full suite |
| W4 | focused gameplay/presentation tests, applicable validators, production build, final served-bundle identity |
| Coordinator | full game suite, all readiness validators, production build, complete non-overlapping E2E, live desktop/narrow review, cleanup, hashes, and synchronization |

The complete E2E runs once at coordinator close unless an earlier failure specifically requires a diagnostic rerun. Never overlap E2E with a build. Immediately before launching E2E, verify its isolated preview endpoint on port `5174` returns HTTP `200`; if absent, start the exact local production preview, confirm the listener and response, then run E2E. Stop only that coordinator-owned preview after review and cleanup. A failed no-server preflight is environmental evidence, not a product failure or an accepted E2E run.

## Checkpoint and push strategy

- Create one dedicated local commit after every role. This preserves auditability and gives the next role an exact edge.
- Push after A5, W2, W4, coordinator handoff, and cycle reveal.
- Push immediately after any risky runtime, save, migration, or recovery change even if it occurs before a normal push boundary.
- If the cycle is interrupted, push the latest valid committed role checkpoint before pausing when safe; update the handoff only if the authoritative next edge changed.
- Stage only intended files. Preserve unrelated work and protected user paths.
- Never use an empty commit merely to prove an agent ran. A genuinely read-only role records its signed disposition in the current-cycle control block and may share the next boundary commit.

## Coordinator release contract

The coordinator independently confirms:

- the visible delta exists on the normal player route;
- mistakes, retry, focus, sanitation, and resume remain recoverable;
- learning evidence remains strict and private;
- offline/no-authority/no-exam-guarantee and no-credit Tour rules remain exact;
- responsive/accessibility and invariant-world contracts hold;
- full tests, validators, build, E2E, and live desktop/narrow review pass honestly;
- incidental QA captures are restored;
- only expected protected user paths remain untracked;
- release status is `PASS`, `REVISE`, or `HOLD`;
- `NEXT_INSTANCE_HANDOFF.md` contains the new exact edge;
- `HEAD == origin/main` after the handoff push.

Do not mutate Martin's browser storage or campaign save to reach a gated state. Use deterministic source, test, served-bundle, and E2E evidence and state any live limitation.

## Adaptive end-of-cycle retrospective

Martin explicitly authorizes the coordinator to improve the production process at the end of every completed cycle.

Run the retrospective after coordinator release validation and before the cycle reveal so the image remains the cycle's final visible output. Review:

- player-visible progress delivered versus intended tranche;
- total elapsed cycle time and the slowest phases;
- repeated file reads or unnecessary context load;
- redundant tests, builds, E2E runs, pushes, or reloads;
- agent handoff ambiguity, duplicated work, or missed ownership;
- validation failures, defects caught late, or evidence gaps;
- model-routing quality and latency;
- scheduled cadence versus actual cycle duration;
- reveal usefulness and repeated visual uncertainty from the preceding cycle.

Record one disposition in `Production Pipeline/PROCESS_CHANGELOG.md`:

- `KEEP` — the process performed well enough; make no change;
- `TUNE` — apply one to three bounded reversible improvements for the next cycle;
- `REDESIGN` — evidence shows the structure itself is failing; make the smallest safe structural correction and document migration and rollback.

The coordinator may autonomously change:

- reading scope and current-control formats;
- work-tranche sizing and handoff templates;
- validation placement and deduplication;
- local commit and push boundaries;
- role model/reasoning routing;
- schedule cadence and non-overlap handling;
- log, queue, packet, increment, and handoff organization;
- agent reuse and context-transfer mechanics.

Process changes must be evidence-backed, reversible where practical, applied only to future work, and recorded with the problem, change, expected benefit, guardrails, and rollback trigger. Do not optimize for novelty or change a healthy process merely because modification is permitted.

The retrospective may not silently weaken or remove:

- Martin's latest direction;
- hidden-lore restrictions;
- canon and no-RP-013 boundaries;
- AI-901 learning validity and strict evidence;
- privacy, save, offline/no-authority/no-exam-guarantee, and no-credit Tour rules;
- accessibility and responsive parity;
- independent coordinator release judgment;
- the requirement for one tangible canonical reveal per completed cycle;
- preservation of user-owned work.

If a proposed change would alter product direction, expose hidden material, weaken a safety/learning gate, cause destructive state change, or require external authority, stop and ask Martin. Otherwise, the coordinator may implement and synchronize it without waiting for confirmation.

## Cycle reveal contract

After coordinator synchronization:

- generate exactly one image;
- choose one newly accepted lore, spatial, material, item, or layout decision;
- vary scale from recent reveals;
- preserve first-person cinematic photorealism and spoiler safety;
- archive the asset under `Visual Direction/Production Masters/` with neighboring provenance;
- close one named visual-production checklist item;
- update the Demo Increment and visual canon records;
- state explicitly that canonical reference status does not claim runtime integration;
- commit, push, verify synchronization, and show the image inline to Martin.

Do not generate a reveal for an incomplete or blocked cycle.

## Compact handoff contract

At cycle close, replace the contents of `NEXT_INSTANCE_HANDOFF.md` with only:

- current synchronized commit and served build identity;
- automation status;
- Team 1 railhead, Team 2 live boundary, and ordered lead;
- accepted player-visible behavior;
- closed invariants and protected user paths;
- concise release evidence;
- latest canonical reveal and its declared scope;
- exact next action and hard stop;
- role order and validation entrypoints.

Do not copy completed role-by-role diaries, obsolete prompts, or old validation transcripts into the next handoff. Git history and specialist logs retain that evidence.

## Scheduled-task behavior

The recurring scheduled prompt should be short. It should:

- read `AGENTS.md`, `NEXT_INSTANCE_HANDOFF.md`, and this runbook;
- continue one existing cycle or start one new cycle, never overlap;
- follow the canonical role order;
- close with coordinator validation, one reveal, and a synchronized compact handoff;
- run the adaptive end-of-cycle retrospective, record `KEEP`, `TUNE`, or `REDESIGN`, and apply safe future-cycle improvements before the reveal;
- preserve protected files and hidden-lore boundaries;
- notify Martin only for a genuine blocker or completed cycle.

The scheduled prompt must never duplicate the current exact edge. That belongs only in `NEXT_INSTANCE_HANDOFF.md`.
