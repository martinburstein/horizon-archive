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

- Current commit: `0fd4f87028f6a67dc89dc29ae8ce5a5bfda25b95`
- Short commit: `0fd4f87` — `Advance Curriculum: preserve RP-002 transfer entry`
- `HEAD == origin/main`: **yes** at handoff time
- Live demo: `http://127.0.0.1:4173/`
- Demo status at handoff: **HTTP 200**
- Served assets: `index-BCpGPspB.js` / `index-ghzUiZe9.css`
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
5. Coder Agent in `advance-construction` mode

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

The coordinator accepted the RP-002 PY-009 primary submission/result boundary in commit `2a554ee`.

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
- separate, write-free evidence and City Threshold returns;
- no world response, access, authority, route reward, mastery by presentation, or successor.

Independent release evidence at that boundary:

- full game suite: `577/577`;
- readiness validators: `15/15`;
- production build: pass;
- full title-to-credits E2E: pass in `86.3s` with every reported gate true, `credits:true`, and `runtimeErrors:false`;
- live `1920 x 1080` and `390 x 844` title-shell review: zero overflow, `48px` / `44px` actions, no console warnings or errors.

## Interrupted cycle status

The most recent cycle was intentionally paused after three Advance roles completed and pushed:

1. Lore Builder A1 — `0b61d06` — locked result-dismissal-to-blank-transfer ownership.
2. Storyboarder A2 — `dd21ee0` — locked the two-group result-to-fresh-transfer presentation.
3. Curriculum Checker A3 — `0fd4f87` — `PASS — NO REOPEN — SOLIDIFIED`.

No Gameplay Master A4 work was completed or committed in that cycle. No later role from that cycle ran.

## Exact next action

Resume with **Gameplay Master Agent A4**, not Lore Builder and not the Working Team.

Read `Agent Profiles/gameplay-master-agent.md` in full plus the top of the current RP-002 packet, `Production Pipeline/GAMEPLAY_SYSTEMS_SPINE.md`, both queues, the rail map, and DI-001.

A4 is limited to the smallest interaction graph:

```text
complete canonical SUIT primary_result
    -> one explicit seven-modality / one-hit zero-effect dismissal
    -> canonical carry-free blank SYSTEM fresh_practice entry
```

A4 must preserve:

- the complete read-only result before dismissal;
- dismissal as the sole explicit forward intent;
- atomic whole-group replacement;
- canonical `primary_result` and `fresh_practice` authorities only;
- no carried learner source, answer, output, check state, feedback, annotation, provisional result, Builder evidence, or answer bank;
- blank transfer fields;
- active System owner-heading focus after replacement;
- separate write-free returns;
- deterministic sanitation/resume;
- seven input modalities with one-hit suppression;
- fail-closed automatic, passive, invalid, stale, combined, Tour-derived, and repeated requests;
- zero observation, mastery, score, check, save, world/city delta, access, authority, external action, or successor effect;
- invariant civic plate and current responsive/accessibility contracts.

Hard stop before:

- transfer submission, evaluation, scoring, result, feedback, or retry;
- Python explanation;
- `RP002-RAI-01`;
- review/save/completion;
- `RP-003+`;
- any world response, access, authority, identity disclosure, route reward, or successor.

A4 should update the packet, `ADVANCE_QUEUE.md`, `GAMEPLAY_SYSTEMS_SPINE.md` when appropriate, `WORKING_QUEUE.md`, `STORY_RAIL_MAP.md`, and DI-001; run the applicable existing RP-002 focused tests and validator; commit and push a dedicated checkpoint; and leave an exact A5 Coder handoff.

After A4, continue sequentially with:

1. Coder A5 in `advance-construction` mode, building only a protected/pure seam unless the handoff explicitly authorizes more.
2. Player W1 on the accepted live demo, reporting the earliest exact gap toward result dismissal and fresh blank transfer entry.
3. Coder W2 in `bug-repair` mode.
4. Aesthetic W3 on only the newly repaired states.
5. Coder W4 in `aesthetic-polish` mode.
6. Coordinator release validation.

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
Please continue Horizon Archive from NEXT_INSTANCE_HANDOFF.md. Read AGENTS.md and the handoff in full first. The recurring automation must remain paused until I explicitly ask to resume it. Continue the interrupted sequential cycle from Gameplay Master A4, using the exact bounded RP-002 result-dismissal-to-blank-transfer handoff, then proceed through the remaining roles and coordinator gates one at a time with dedicated pushed checkpoints.
```
