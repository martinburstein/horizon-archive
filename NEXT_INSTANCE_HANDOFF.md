# Horizon Archive — New Task Handoff

Last updated: **2026-07-17**  
Project owner: **Martin Burstein**  
Workspace: `C:\Users\marti\OneDrive\Desktop\Horizon Archive`  
Repository: `https://github.com/martinburstein/horizon-archive`  
Branch: `main`

## Read this first

This file is the operational handoff for a new Codex task. Do not restart the project, redesign the agent process, or re-create completed work.

Before acting, read these files in order:

1. `AGENTS.md`
2. `TWO_TEAM_AGENT_CYCLE.md`
3. `Agent Profiles/README.md`
4. The canonical profile for the role about to run
5. `Production Pipeline/EXPEDITION_SPINE.md`
6. `Production Pipeline/ADVANCE_BREADTH_GATE.md`
7. `Production Pipeline/PACKET_SCOREBOARD.md`
8. `Production Pipeline/STORY_RAIL_MAP.md`
9. `Production Pipeline/ADVANCE_QUEUE.md`
10. `Production Pipeline/WORKING_QUEUE.md`
11. `Production Pipeline/rail-packets/RP-002-civic-record-encounter.md`
12. `Production Pipeline/demo-increments/DI-001-city-threshold.md`
13. The selected role's latest work log and applicable supporting spine

Never open `DO_NOT_READ_HORIZON_ARCHIVE_HIDDEN_LORE_VAULT.md` without Martin's explicit authorization. Keep unrevealed story material in project artifacts, not chat summaries.

## Current durable state

- Release candidate commit: `6692da6` — `Working Coder: polish RP-002 return group semantics`
- Coordinator acceptance is recorded by the final commit containing this handoff; run `git rev-parse HEAD` for its exact identity.
- `HEAD == origin/main`: **must be verified after the coordinator acceptance push**
- Live demo: `http://127.0.0.1:4173/`
- Demo status at handoff: **HTTP 200**
- Served assets: `index-CjiYW_Of.js` / `index-ghzUiZe9.css`
- Automation `horizon-archive-two-team-continuation`: **PAUSED at Martin's request**
- Do not resume or replace the automation until Martin explicitly asks.

The worktree intentionally contains these two untracked user-owned items:

- `Art Of No Mans Sky Book Scan.pdf`
- `Simplilearn Training Files/`

Do not delete, move, stage, commit, or otherwise alter them unless Martin explicitly asks.

## Project direction

Horizon Archive is a first-person, point-and-click Python mystery and AI-901 learning game. Gameplay may retain the adventure-game interaction sensibility of classic LucasArts titles, but the visual production direction is now **maximum-quality cinematic photorealism**, not pixel art.

Active visual rules:

- first-person world plates;
- no visible protagonist, ship, hands, body, shadow, reflection, or prior human trace;
- premium contemporary science-fiction environmental realism;
- Builder beauty must express function, occupation, resource handling, engineering logic, collective work, and long stewardship;
- responsive modern presentation that fills available space gracefully;
- the CRT-inspired shell is optional visual framing, not a fixed-resolution contract;
- fixed `640 x 480`, `320 x 240`, square-pixel, nearest-neighbor, and logical-pixel rules are retired historical material only;
- preserve accessibility, natural narrow reflow, text zoom, forced colors, reduced motion, deterministic focus, non-color meaning, and controls of at least `44 x 44 CSS px`.

The integrated photoreal Glass Meadow Terminal and route marker are accepted baselines. Do not reopen retired pixel-era work unless an actual regression is reproduced.

## Learning and safety direction

- AI-901 objectives are the master learning goals.
- Python is treated as a Builder-readable working language and as the player's practical route into understanding exposed systems.
- Terminal puzzles are learning exercises, not magical passwords or proof of Builder intent.
- Preserve strict primary, remediation, retrieval, and genuinely fresh-transfer evidence.
- Never allow navigation, presentation, timing, confidence, Tour play, story observation, save, or acknowledgement to substitute for mastery evidence.
- Preserve privacy allowlists, offline/no-authority behavior, no exam guarantee, no live Azure/Foundry action, and the no-credit Demo Tour.
- For Microsoft Foundry, Azure AI, AI-901, agents, SDKs/endpoints, APIs/CLIs, or Content Understanding, use `foundry-azure-source-priority` first when available. If unavailable, use only the official Microsoft sources listed in `AGENTS.md` before considering anything else.

## Two-team workflow

Run one complete cycle sequentially:

### Advance Team

1. Lore Builder Agent
2. Storyboarder Agent
3. Curriculum Checker Agent
4. Gameplay Master Agent
5. Coder Agent in `advance` mode

### Working Team

6. Player Agent
7. Coder Agent in `bug-repair` mode
8. Aesthetic Agent
9. Coder Agent in `aesthetic-polish` mode

Each role must:

- read its canonical profile in full before acting;
- complete one bounded, high-value tranche;
- validate it;
- update its role log, active packet/increment, queues, and rail map as applicable;
- leave an exact handoff;
- create and push one dedicated checkpoint to `main` before the next role begins;
- use an empty documented checkpoint only when a pass is genuinely read-only.

Do not run roles concurrently. Preserve the sequence so every role consumes the previous role's committed handoff.

After all nine roles, the coordinator independently runs the full release gates, restores incidental QA binaries, records the disposition, commits, pushes, and verifies `HEAD == origin/main`.

## Twelve-packet rail status

The complete intended route is outlined and protected through `RP-012`. `RP-012` is the ending railhead. **No `RP-013` or successor is authorized.**

Team 1 is therefore in continuity-maintenance mode near Team 2's current edge. It must not invent post-ending content. Team 2 remains methodically integrating `RP-002`; packets `RP-003` through `RP-012` stay ordered behind it.

## Accepted playable boundary

The coordinator now accepts the RP-002 PY-009 boundary through explicit provisional-result dismissal and canonical blank fresh-practice entry. The earlier primary submission/result acceptance remains part of this boundary.

Accepted player-visible behavior includes:

- the existing five recorded observations and blank primary entry;
- four immutable source fields;
- exactly two editable human-expedition fields: `classification` and `owner`;
- one submission action using the existing strict six-check authority;
- answer-free feedback for actually failed checks only;
- privacy-cleared blank retry with deterministic failed-field focus;
- a read-only `SUIT // PROVISIONAL TRANSLATION` result only on current-attempt `6/6`;
- active System, Teacher, and Suit owner-heading focus;
- literal and programmatic failed-field association;
- one explicit `CLEAR RESULT AND OPEN FRESH PRACTICE` action after the complete result;
- seven-modality/one-hit atomic replacement;
- canonical `SYSTEM // EXPEDITION SESSION` / `FRESH PRACTICE IMAGE`;
- exact `unresolved_interval`, `deidentified_sensor_log`, `None`, and `False` neutral source fields;
- genuinely blank editable fresh `classification` and `owner` fields;
- System owner-heading focus with blank fields first in ordinary Tab order;
- phase-aware evidence-return group names for blank, feedback, result, and fresh states;
- separate, write-free evidence and City Threshold returns;
- no world response, access, authority, route reward, mastery by presentation, or successor.

Independent release evidence at that boundary:

- full game suite: `587/587`;
- readiness validators: `15/15`;
- production build: pass;
- full title-to-credits E2E: pass in `102.8s` with every reported gate true, `credits:true`, and `runtimeErrors:false`;
- live `1920 x 1080` and `390 x 844` title-shell review: zero overflow, `48px` / `44px` actions, no console warnings or errors.

## Completed cycle status

The previously interrupted cycle was completed sequentially and every checkpoint was pushed:

1. Lore Builder A1 — `0b61d06`.
2. Storyboarder A2 — `dd21ee0`.
3. Curriculum Checker A3 — `0fd4f87`.
4. Gameplay Master A4 — `3315ba3`.
5. Advance Coder A5 — `b0ca9b5`.
6. Player W1 — `9cb9b75`.
7. Bug-Repair Coder W2 — `fc3011b`.
8. Aesthetic W3 — `7a016de`.
9. Aesthetic-Polish Coder W4 — `6692da6`.

The coordinator then passed all release gates and accepted the fresh-practice entry as `IN DEMO — PARTIAL`.

## Exact next action

Begin the next full sequential cycle with **Lore Builder Agent A1**.

Read `Agent Profiles/lore-builder-agent.md` in full plus the top of the current RP-002 packet, both queues, the rail map, DI-001, and the applicable lore/ownership records. Keep Team 1 in continuity-maintenance mode at RP-002; do not invent RP-013 or any post-ending content.

A1 is limited to the nearest accepted edge:

```text
accepted canonical blank SYSTEM fresh_practice entry
    -> explicit Pilot-owned transfer submission attempt
    -> existing strict transfer evaluation ownership only
```

A1 should lock ownership and meaning only. It must preserve:

- the accepted result-dismissal/fresh-entry release unchanged;
- canonical `fresh_practice` source and genuinely blank transfer fields;
- transfer evidence as independent from primary evidence;
- explicit Pilot ownership of only `classification` and `owner` updates;
- existing strict six-check transfer authority, without copying answers or rules;
- answer-free local/Teacher remediation and genuinely blank retry if later passes authorize it;
- no result or credit unless every current transfer check passes;
- separate write-free returns;
- deterministic sanitation/resume;
- seven input modalities with one-hit suppression;
- fail-closed automatic, passive, invalid, stale, combined, Tour-derived, and repeated requests;
- zero story observation, save, world/city delta, access, authority, external action, or successor effect from entry/presentation alone;
- invariant civic plate and current responsive/accessibility contracts.

Hard stop before:

- Python explanation;
- `RP002-RAI-01`;
- review/save/completion;
- `RP-003+`;
- any world response, access, authority, identity disclosure, route reward, or successor.

A1 should update the packet, `ADVANCE_QUEUE.md`, `WORKING_QUEUE.md`, `STORY_RAIL_MAP.md`, DI-001, and its own log; commit and push a dedicated checkpoint; and leave an exact A2 Storyboarder handoff.

Then continue sequentially with:

1. Storyboarder A2.
2. Curriculum Checker A3.
3. Gameplay Master A4.
4. Coder A5 in `advance` mode.
5. Player W1 on the accepted live blank fresh-practice group, reporting only the earliest transfer submit/evaluation gap.
6. Coder W2 in `bug-repair` mode.
7. Aesthetic W3 on only the newly repaired states.
8. Coder W4 in `aesthetic-polish` mode.
9. Coordinator release validation.

## Validation commands

Run game commands from `horizon-archive-game/`:

```powershell
npm test
npm run build
```

Run all readiness validators from the repository root:

```powershell
$validators = Get-ChildItem -Path 'curriculum\readiness' -Recurse -Filter 'validate*.py' | Sort-Object FullName
foreach ($validator in $validators) {
    python $validator.FullName --self-test
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}
```

Run the complete E2E only after the production build finishes; never overlap them:

```powershell
node playtest/e2e-playthrough.mjs
```

The E2E regenerates tracked QA PNGs. Restore those incidental binaries before committing:

```powershell
git restore -- ':(glob)playtest/*.png'
```

Then verify:

```powershell
git diff --check
git status --short
git rev-parse HEAD
git rev-parse origin/main
```

The only expected untracked paths are the two user-owned items named earlier.

For final live review, use the in-app browser at `http://127.0.0.1:4173/` without inspecting or mutating browser storage. Review representative desktop and narrow responsive layouts based on current behavior, not retired fixed game resolutions. If a gated state cannot be reached without changing Martin's save, rely on deterministic state/source/served-bundle evidence and do not fabricate a live screenshot claim.

## Demo operations

From `horizon-archive-game/`:

```powershell
npm run demo
```

This builds and serves the demo on `127.0.0.1:4173`. If a server is already running, avoid starting a duplicate. After a production build, confirm the existing preview serves the current hashed JS/CSS assets and reload the page before live review.

## Git discipline

- Work directly on `main` because that is the established project workflow.
- Pull/inspect before a role if the previous checkpoint may have changed.
- Stage only the role's intended files.
- Preserve unrelated edits and user files.
- Make one dedicated commit and push after every role.
- Revert only incidental E2E QA image regeneration, never user work.
- Do not use destructive reset/checkout commands.
- End coordinator work with a clean synchronized branch apart from the two preserved untracked items.

## Communication style

- Keep routine progress concise.
- Do not reveal unreleased story material in chat.
- Notify Martin only for a genuine blocker, destructive/external decision, major direction change, repeated validation failure, or meaningful completed milestone.
- Lead reports with the player-visible outcome and validation evidence.
- The new task should feel like a continuation, not a project reboot.

## Suggested opening message for the new task

```text
Please continue Horizon Archive from NEXT_INSTANCE_HANDOFF.md. Read AGENTS.md and the handoff in full first. The recurring automation must remain paused until I explicitly ask to resume it. Begin the next full sequential cycle with Lore Builder A1 at the accepted RP-002 blank fresh-practice boundary, locking only the nearest transfer submission/evaluation ownership, then proceed through every remaining role and the coordinator gates one at a time with dedicated pushed checkpoints.
```
