# Horizon Archive — New Task Handoff

Last updated: **2026-07-18**
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

- Release candidate commit: `e7d619b` — `Working Coder Polish: separate RAI transfer guide cassette`
- Coordinator acceptance is recorded by the final commit containing this handoff; run `git rev-parse HEAD` for its exact identity.
- `HEAD == origin/main`: **must be verified after the coordinator acceptance push**
- Live demo: `http://127.0.0.1:4173/`
- Demo status at handoff: **HTTP 200**
- Served assets: `index-CKaXmS2o.js` / `index-DyAC0bkf.css`
- Automation `horizon-archive-two-team-continuation`: **ACTIVE at Martin's explicit request on 2026-07-17**
- The automation wakes hourly in this task and runs one complete sequential two-team cycle from the latest handoff state.
- Do not pause, replace, or duplicate the automation until Martin explicitly asks.
- Canonical cycle reveal: `Visual Direction/Production Masters/2026-07-17-rp002-blank-explanation-reveal/rp002-blank-explanation-archive-reveal-v1.png` with neighboring provenance. It locks the `SC-03 / EX-20 wide composition relationship`: exactly three blank foreground civic surfaces against an archive that extends far beyond the frame. Treat that question as closed; this is canonical reference evidence, not yet a runtime-integrated plate.
- Canonical cycle reveal: `Visual Direction/Production Masters/2026-07-17-rp002-pilot-conclusion-reveal/rp002-pilot-conclusion-triptych-v1.png` with neighboring provenance. It closes `SC-03 / EXS-20C Pilot conclusion visual identity`: one compact expedition-owned triptych object, exactly three equal blank laminae, remains visibly separate from the vast unchanged archive. Treat that question as closed; this is canonical item/composition evidence, not a claim of runtime integration.
- Canonical cycle reveal: `Visual Direction/Production Masters/2026-07-17-rp002-blank-rai-primary-reveal/rp002-blank-rai-review-frame-v1.png` with neighboring provenance. It closes `SC-03 / RAI-P0 blank review-frame ownership and scale`: one expedition-owned frame contains exactly three equal empty ordered channels, materially separate from the vast unchanged archive. Treat that question as closed; this is canonical item/composition evidence, not a claim of runtime integration.
- Canonical cycle reveal: `Visual Direction/Production Masters/2026-07-17-rp002-rai-guided-recovery-reveal/rp002-rai-guided-recovery-cassette-v1.png` with neighboring provenance. It closes `SC-03 / RAI-GUIDE neutral recovery-cassette identity`: exactly one removable expedition-owned single-aperture guide cassette remains outside the scored frame's exactly three blank channels, against the vast unchanged archive. Treat that question as closed; this is canonical item/count/separation evidence, not a claim of runtime integration.

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

After all nine roles, the coordinator independently runs the full release gates, restores incidental QA binaries, records the disposition, commits, pushes, and verifies `HEAD == origin/main`. Then generate exactly one spoiler-safe cycle-reveal image as the final visible output: an accepted-cycle item, console, interface surface, threshold, interior, or landscape that makes one lore or layout decision certain while clearly implying a larger whole. Archive it under `Visual Direction/Production Masters/` with provenance, declare the exact canonical scope and limits, close one named visual checklist item, and treat that decision as accepted evidence thereafter. Canonical reference status does not by itself mean runtime integration.

## Twelve-packet rail status

The complete intended route is outlined and protected through `RP-012`. `RP-012` is the ending railhead. **No `RP-013` or successor is authorized.**

Team 1 is therefore in continuity-maintenance mode near Team 2's current edge. It must not invent post-ending content. Team 2 remains methodically integrating `RP-002`; packets `RP-003` through `RP-012` stay ordered behind it.

## Accepted playable boundary

The coordinator now accepts the complete `RP002-RAI-01` transfer convergence in normal play. From genuinely blank `T01`, the three frozen transfer cases submit one at a time with session-only Pilot choices; `T01` and `T02` replace atomically with wholly blank next cases and no interim judgment; only `T03` invokes simultaneous strict `9/9`. Exact pass clears all private work and mounts only the separate genuinely blank `901 TEACHER // FEEDBACK` three-boundary explanation entry. Any miss mounts only actual-failed-case/dimension Teacher feedback, one neutral zero-credit guided case, and a wholly blank deterministic transfer retry at the first incomplete/first-failed case.

Accepted presentation now distinguishes the scored transfer frame from recovery: scored `T01`–`T03` retain exactly three equal source-ordered wide peers, while the zero-credit guide is one width-contained single-cassette enclosure containing the same three labeled inputs. Both recover to one natural column at narrow/`200%`. Canonical rasters remain non-integrated.

Accepted constraints remain exact: no transfer response, guide work, feedback prose, or private material persists; Python and RAI-primary evidence cannot cross-credit transfer; the civic world/art and `cityStateDelta=null` remain invariant; explanation submission/evaluation/feedback/result, RAI conclusion, review/save/completion, `RP-003+`, authority/external effects, RP-013, and every successor remain closed.

The previously accepted Pilot Python conclusion, explicit zero-effect dismissal, blank RAI entry, and strict primary convergence remain unchanged. Primary `P01`–`P03` still submit one at a time with no interim result, third-case-only simultaneous strict `9/9`, actual-failed-pair Teacher recovery/one zero-credit guide/wholly blank retry, or exact-pass blank transfer. All accepted primary controls, focus, responsive/accessibility, privacy, Python isolation, and invariant-world behavior remain exact.

Earlier accepted player-visible behavior remains unchanged:

- exact retained `FT-20C` under `SYSTEM // EXPEDITION STATE`;
- current-attempt `6/6` acknowledgement and two separate write-free returns;
- one distinct Pilot-owned `OPEN BLANK PYTHON EXPLANATION` action;
- seven-modality/one-hit activation with fail-closed invalid, stale, repeated, combined, Tour-derived, and private-bearing requests;
- atomic whole-group replacement by only canonical `EX-20` / `python_explanation`;
- `901 TEACHER // FEEDBACK` ownership, unchanged canonical prompt, and three genuinely blank editable controls;
- deterministic owner-heading focus before ordinary Tab entry;
- hidden prerequisite-only primary/transfer evidence with no carried source, values, answers, checks, feedback, transcript, token, focus history, or private work;
- literal no-attempt status, transient-only explanation work, and the existing blank-primary durable checkpoint;
- phase-aware evidence-return naming plus the separate City Threshold return;
- `>=44px` targets, desktop/narrow/`200%` reflow, forced-color, reduced-motion, and non-color parity;
- invariant civic art/world, `cityStateDelta=null`, no story/mastery/save/route/access/authority effect, and no successor.

Independent release evidence at the current boundary:

- full game suite: `654/654`;
- readiness validators: `15/15`;
- production build: pass on `index-CKaXmS2o.js` (`1012705` bytes; SHA-256 `EFD602C0CA03D6F7ABEC2FD030EBF049825D9DF19F1CADE99941D3241DB83090`) / `index-DyAC0bkf.css` (`73338` bytes; SHA-256 `E325370E1109440F4FEABF6ED745F3BE77163A0809A748CE28027AA7B46F5A42`);
- clean isolated full title-to-credits E2E rerun: pass in `875.7s` with every emitted gate true, `credits:true`, and `runtimeErrors:false`; one initial harness window expired without a result, its exact orphan process was stopped, incidental captures restored, and only the clean rerun was accepted;
- live `1920 x 1080` and `390 x 844` title-shell review: zero overflow, `48px` / `44px` actions, no console warnings or errors;
- incidental tracked QA captures restored; the two user-owned untracked items and browser storage remained untouched.

## Completed cycle status

The immediate automation cycle was completed sequentially and every checkpoint was pushed:

1. Lore Builder A1 — `8b95868`.
2. Storyboarder A2 — `1288743`.
3. Curriculum Checker A3 — `d3f099f`.
4. Gameplay Master A4 — `70b2e9d`.
5. Advance Coder A5 — `0797ca4`.
6. Player W1 — `d013de9`.
7. Bug-Repair Coder W2 — `24541df`.
8. Aesthetic W3 — `5439520`.
9. Aesthetic-Polish Coder W4 — `e7d619b`.

The coordinator then passed all release gates and accepted strict three-case Responsible-AI transfer convergence, bounded answer-free recovery, exact-pass blank Teacher three-boundary entry, scored-frame/guide-cassette distinction, and responsive parity as `IN DEMO — PARTIAL`.

## Exact next action

Begin the next full sequential cycle with **Lore Builder Agent A1**.

Read `Agent Profiles/lore-builder-agent.md` in full plus the top of the current RP-002 packet, both queues, the rail map, DI-001, and the applicable lore/ownership records. Keep Team 1 in continuity-maintenance mode at RP-002; do not invent RP-013 or any post-ending content.

A1 is limited to the nearest accepted edge:

```text
accepted exact-transfer 9/9 and genuinely blank Teacher three-boundary entry
    -> Pilot-owned transient application-label / native-fact / authority responses
    -> one explicit explanation submission
    -> separate simultaneous strict 3/3 evaluation
    -> any miss: first-failed-boundary-only Teacher feedback
                  -> clear every response and restore all three boundaries blank
                  -> wholly blank unlimited explanation retry with first-failed focus
    -> exact 3/3: exact Pilot Responsible-AI conclusion only
```

A1 should run a convergence/integration audit for this already-protected explanation-submission-and-conclusion seam, merging existing authorities instead of adding micro-seams. It must preserve:

- every accepted Python behavior, conclusion dismissal, primary convergence, native control treatment, and all closed canonical visual decisions unchanged;
- the newly accepted primary and transfer chains unchanged and exactly the existing three explanation boundaries, frozen answers, strict `3/3`, and exact Pilot conclusion, with no new prompt, answer, threshold, scoring rule, or branch;
- one active Teacher/Pilot group at a time, private session-only responses, one explicit Pilot explanation submission, and no interim or presentation-derived evaluation;
- separate strict `3/3`; a correct application-label boundary cannot compensate for a native-fact or authority miss;
- first-actual-failed-boundary-only answer-free Teacher remediation, complete clearing, wholly blank unlimited all-three retry, and deterministic first-failed focus;
- only allowlisted finalized booleans/counts/tags may persist; all choices, guided work, feedback prose, and private material clear;
- strict explanation `3/3` may open only the existing exact Pilot conclusion: `My application label is a human interpretation, not their fact or permission to act.` The conclusion is zero credit and grants no authority;
- separate write-free returns, seven modalities/one hit, sanitation/resume, privacy, offline/no-authority/no-exam-guarantee, responsive/accessibility parity, invariant world, null delta, and no successor.

Hard stop before:

- conclusion dismissal, bounded review, save/commit, completion, or credits;
- `RP-003+`;
- any world response, access, authority, identity disclosure, route reward, external action, or successor.

A1 should update the packet, `ADVANCE_QUEUE.md`, `WORKING_QUEUE.md`, `STORY_RAIL_MAP.md`, DI-001, and its own log; commit and push a dedicated checkpoint; and leave an exact A2 Storyboarder handoff.

Then continue sequentially with Storyboarder A2, Curriculum Checker A3, Gameplay Master A4, Coder A5 in `advance` mode, Player W1 on the accepted live genuinely blank RAI explanation boundary, Coder W2 in `bug-repair` mode, Aesthetic W3, Coder W4 in `aesthetic-polish` mode, and independent coordinator release validation.

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
Please continue Horizon Archive from NEXT_INSTANCE_HANDOFF.md. Read AGENTS.md and the handoff in full first. Keep the active recurring automation attached to its current task unless I explicitly ask to pause or replace it. Begin the next full sequential cycle with Lore Builder A1 at the accepted RP-002 Pilot Python conclusion, locking only one explicit zero-effect dismissal into the existing genuinely blank RP002-RAI-01 primary boundary, then proceed through every remaining role and the coordinator gates one at a time with dedicated pushed checkpoints. After coordinator closure and synchronization, end the cycle by producing exactly one spoiler-safe mysterious image that makes one accepted lore or layout decision certain, archives it as a canonical visual reference with provenance, closes one named visual checklist item, and implies a larger whole.
```
