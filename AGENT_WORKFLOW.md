# Horizon Archive Nine-Agent Loop Redeployment Playbook

> **Legacy system preserved for redeployment.** This file documents the original nine-agent loop. New development cycles use [TWO_TEAM_AGENT_CYCLE.md](TWO_TEAM_AGENT_CYCLE.md), which reorganizes the work into an Advance Team and a Working Team. Do not delete this playbook; it remains the complete fallback procedure for the earlier loop.

## Document purpose

This is the authoritative operating manual for the nine-agent Horizon Archive development loop used through July 2026. It is written so a new coordinator can redeploy the complete team without relying on chat history.

The loop advances three connected products together:

1. the browser-based point-and-click game;
2. the spoiler-safe Horizon Archive narrative and visual-production system; and
3. the zero-to-AI-901 learning system embedded in the game.

This file defines the roster, canonical order, role boundaries, work logs, handoffs, Git checkpoint policy, validation gates, reporting contract, failure recovery, and copy-ready deployment prompts.

This playbook supplements, but never overrides, the applicable `AGENTS.md` files. Every coordinator and agent must read the root `AGENTS.md` plus any closer `AGENTS.md` governing the files it will inspect or modify.

---

## 1. Canonical roster and order

Run the agents in this exact order:

1. **Player Agent**
2. **Coder Agent**
3. **Lore Keeper Agent**
4. **901 Teacher Agent**
5. **Exercise Agent**
6. **Pixel Patrol Agent**
7. **Location Scout Agent**
8. **Curse Art Director Agent**
9. **Accessibility Sentinel Agent**

The coordinator runs after agent nine. The coordinator is not a tenth specialist agent; it owns orchestration, Git checkpoints, final integration validation, cleanup, synchronization, and the consolidated report.

### Canonical agent identifiers

| Display name | Suggested task identifier | Historical color | Primary work log |
|---|---|---:|---|
| Player Agent | `player_agent_round_{n}` | Purple | `playtest/WORK_LOG.md` |
| Coder Agent | `coder_agent_round_{n}` | Green | `horizon-archive-game/WORK_LOG.md` |
| Lore Keeper Agent | `lore_keeper_agent_round_{n}` | Yellow | `Lore Development/WORK_LOG.md` |
| 901 Teacher Agent | `901_teacher_agent_round_{n}` | Orange | `curriculum/BUILD_LOG.md` and `curriculum/BUILD_STATUS.md` |
| Exercise Agent | `exercise_agent_round_{n}` | — | `Exercise Development/WORK_LOG.md` |
| Pixel Patrol Agent | `pixel_patrol_round_{n}` | — | `Pixel Patrol/WORK_LOG.md` |
| Location Scout Agent | `location_scout_round_{n}` | — | `Concept Art Book/WORK_LOG.md` |
| Curse Art Director Agent | `curse_art_director_round_{n}` | — | `Curse Art Director/WORK_LOG.md` |
| Accessibility Sentinel Agent | `accessibility_sentinel_round_{n}` | — | `Accessibility Sentinel/WORK_LOG.md` |

Use a new task identifier for every round. Do not depend on a retired agent retaining memory. The project files and logs are the durable memory.

---

## 2. Execution model

### 2.1 Sequential ownership

Only one specialist owns the active work turn. Do not run specialist tranches in parallel. Sequential ownership is important because each role consumes the previous role's artifacts and handoff.

The lifecycle is:

```text
Player finding
  -> Coder correction
  -> Lore production tranche
  -> Teacher learning tranche
  -> Exercise implementation
  -> Pixel presentation audit
  -> Location/environment production
  -> Art-direction verdict
  -> Accessibility integration audit
  -> Coordinator full validation and report
```

An agent must reach a coherent, reviewable stopping point before the coordinator starts the next agent.

### 2.2 Supported operating modes

#### Manual-advance mode

Use this when Martin wants to review each role individually.

1. Run one agent.
2. Checkpoint and push its work.
3. Report the role's outcome.
4. Stop until Martin says `advance`, `next`, or equivalent.

#### Full-round mode

Use this when Martin asks for another round, a nine-agent loop, or autonomous progress.

1. Run all nine agents sequentially.
2. Checkpoint and push after every agent.
3. Run coordinator validation.
4. Return one consolidated nine-agent report.

#### Scheduled recurring mode

Use only when an actual recurring automation has been created. A heartbeat prompt does not by itself create persistence.

Each scheduled invocation should run one complete nine-agent round, write routine progress to logs, and notify Martin only for blockers, major directional decisions, destructive/external actions, or milestones. The scheduler must return to the same task when context preservation is required.

---

## 3. Non-negotiable project invariants

These rules apply to every role.

### 3.1 User work and repository safety

- Preserve all pre-existing user changes and untracked files.
- At preflight, record the exact allowed untracked-file list. Do not assume an unfamiliar untracked file belongs to the agent.
- Never use destructive Git commands such as `git reset --hard` or `git checkout --` to clean the repository.
- Revert only known incidental generated QA files after validation.
- Avoid unrelated edits, drive-by formatting, bulk newline conversion, or dependency upgrades.
- Agents do not commit or push unless the coordinator explicitly delegates that authority. The normal model is coordinator-owned checkpoints.
- Do not create a pull request unless Martin asks for one.

### 3.2 Spoiler protocol

- Keep chat reports surface-safe.
- Never open, read, summarize, search within, or quote `DO_NOT_READ_HORIZON_ARCHIVE_HIDDEN_LORE_VAULT.md` unless Martin gives explicit authorization in the current task.
- Lore Keeper may create unrevealed production material in approved project artifacts, but chat reports describe only the kind, location, validation, and readiness of that work.
- Other agents must not infer hidden canon to fill gaps.
- Visual and interaction work may pose questions but must not resolve the central mystery.

### 3.3 Game and adventure design

- The game is a browser-based, first-person point-and-click adventure.
- Ordinary experimentation must not create surprise deaths, unwinnable states, irreversible learning loss, or punitive dead ends.
- The world view never shows the protagonist, companions, or their ship, including hands, shadows, silhouettes, reflections, portraits, or cropped body parts.
- Keep scene interaction readable by pointer and keyboard.
- Python shown to learners must be real Python syntax.
- Preserve save/resume behavior, sanitized evidence, and deterministic recovery.

### 3.4 Visual direction

- Canonical complete canvas: `640 × 480` square logical pixels.
- World budget: upper `640 × 360`.
- Interface budget: lower `640 × 120`.
- Exact narrow evidence: `320 × 240`, with a `320 × 180` world derivative.
- Production world art is authored at `640 × 360`; a `320 × 180` asset is blockout or exact half-scale evidence and must not be enlarged as final production scenery.
- Scale with whole-number multiples and letterbox when appropriate.
- Use nearest-neighbor presentation, crisp one-pixel edges, deliberate pixel clusters, and no smoothing or modern soft effects.
- Draw inspiration from the broad LucasArts adventure lineage and the richness of late-1990s illustrated adventures without copying any copyrighted character, scene, composition, joke, icon, proprietary UI, extracted frame, or asset.
- Concept art is evidence for mood, composition, material, scale, and purpose. It is not production art to be directly downscaled.
- Builder beauty must communicate collective authorship, maintenance, revision, occupation, and function—not enchanted crystals or arbitrary fantasy ornament.

### 3.5 Glass Meadow and Machine direction

- The Meadow is an absolutely flat, horizon-scale cultivated-glass landscape.
- Cultivated glass is the only vertical landform.
- Reject mountains, hills, terraces, roads, fences, human rows, freestanding farm machinery, and conventional cable-tray grammar.
- Show fictional silica extraction through flush growth/cutter mats, purpose-shaped extrusion, stress and temperature training, maturity cues, harvesting, annealing, routing, rejection, and repair.
- Glass must show wall thickness, transparency or translucency, refraction, internal reflection, sharp highlights, inclusions or strain, and believable floor contact.
- Every alien form needs multiple plausible operating layers and visible system relationships.
- When editing the production signal coupler, preserve the locked central body, clean tongue, six identical body frames, six distinct screen states, screen-only animation, and native/narrow route continuity unless Martin explicitly changes that contract. The production manifest and focused tests are the authority for exact hashes and pixel counts.

### 3.6 AI-901 and Microsoft source priority

- Treat current official AI-901 objectives as the master learning goals.
- Use AI-900 only as overlapping background.
- When work involves Microsoft Foundry, Azure AI, AI-901, SDKs/endpoints, agents, APIs, CLIs, or Content Understanding, use the `foundry-azure-source-priority` skill first when it is available.
- If that named skill is unavailable, state the fallback and consult official Microsoft sources before third-party material:
  1. Microsoft Foundry documentation hub;
  2. Foundry SDKs and Endpoints overview;
  3. Foundry Agent Service overview;
  4. Azure Content Understanding overview;
  5. the current official AI-901 study guide and repository source register.
- Record volatile claims and verification dates in `curriculum/sources/current-official-source-register.md`.
- Do not claim that course completion guarantees an exam result.
- No exercise prompt grants authority to mutate Azure, deploy, delete, publish, spend money, disclose credentials, or perform external actions.

### 3.7 Accessibility and privacy

- Validate exact `640 × 480` and `320 × 240` presentations.
- Preserve keyboard-only operation, logical focus order, visible focus, dialog focus containment, deterministic restoration, and safe exit.
- Use persistent labels, programmatic names, field-specific errors, `aria-invalid`, `aria-describedby`, and appropriately scoped live regions.
- Do not rely on color alone.
- Keep rendered interactive targets at least `24 × 24` logical pixels unless a documented exception applies.
- Honor reduced motion; static alternatives must preserve meaning.
- Keep confidence and optional timing separate from mastery.
- Store only allowlisted progress evidence. Do not persist learner code, prompts, credentials, endpoints, payloads, service responses, audio, media, free-form notes, or working selections unless an approved contract explicitly requires a safe representation.
- Manual screen-reader, switch-control, forced-colors, physical-keyboard, and 200% zoom checks remain required before a formal conformance claim.

---

## 4. Coordinator preflight

Before spawning Player Agent:

1. Read root `AGENTS.md`, `horizon-archive-game/AGENTS.md`, and this playbook.
2. Inspect `git status --short`.
3. Record the current branch, `HEAD`, `origin/main`, remote URL, and allowed untracked files.
4. Confirm whether the playable server is running and whether it must remain available.
5. Read the latest entry in every primary work log.
6. Inspect the last round's consolidated report or recent commit subjects.
7. Identify known unresolved risks and pending handoffs.
8. Create a plan with all nine agents plus coordinator validation.
9. Tell Martin that the round is starting and which role is first.

Do not silently discard a dirty tree. If an intended agent edit overlaps unknown user changes, pause and request direction.

### Preflight state template

```markdown
Round: {number or date}
Branch: main
Starting HEAD: {sha}
Remote HEAD: {sha}
Allowed untracked files:
- {path}
Known unresolved handoffs:
- {handoff}
Playable URL: http://127.0.0.1:4173/
Mode: manual-advance | full-round | scheduled
```

---

## 5. Per-agent turn protocol

For every specialist:

1. Spawn only the next canonical role.
2. Give it the shared base prompt, the role-specific prompt, the round number, and the previous handoff.
3. Require it to read applicable instructions and its latest work log before acting.
4. Require one bounded, high-value, reviewable tranche.
5. Require direct work in project artifacts when the role permits edits.
6. Require proportionate validation.
7. Require a work-log update.
8. Require a concise spoiler-safe report and explicit next handoff.
9. Tell it not to commit or push.
10. Wait for the final report before starting another specialist.

If an agent claims completion but omits the log update, validation, or handoff, send a follow-up task and keep the same role active.

### Required agent report

```markdown
Outcome: {material improvement or verdict}
Files: {created or changed files}
Validation: {tests, builds, source checks, visual checks, consistency review}
Findings: {remaining defects, risks, or uncertainties}
Handoff: {single highest-value next action}
Status: ready to advance | blocked | objective complete
```

### Definition of a bounded tranche

A valid tranche must:

- materially advance the role's mission;
- be understandable in one review;
- have a clear validation method;
- avoid starting the following role's work;
- leave the repository in a coherent state; and
- end with a specific handoff.

Research or analysis alone is insufficient unless the role is explicitly a read-only audit gate and produces durable review evidence.

---

## 6. Git checkpoint protocol

After every agent report, the coordinator:

1. inspects `git status --short` and the diff;
2. confirms only intended files changed;
3. runs `git diff --check`;
4. restores incidental regenerated QA binaries if they are not intended evidence;
5. stages only the agent's tranche;
6. runs `git diff --cached --check`;
7. creates a dedicated commit;
8. pushes `main` to `origin`; and
9. verifies local `HEAD` matches `origin/main`.

If the role is read-only or produces no changes, create an empty checkpoint commit when Martin has requested a checkpoint after every agent:

```powershell
git commit --allow-empty -m "Player: verify current opening"
git push origin main
```

### Commit subject convention

| Role | Prefix |
|---|---|
| Player | `Player:` |
| Coder | `Coder:` |
| Lore Keeper | `Lore:` |
| 901 Teacher | `Teacher:` |
| Exercise | `Exercise:` |
| Pixel Patrol | `Pixel Patrol:` |
| Location Scout | `Location Scout:` |
| Curse Art Director | `Curse Art Director:` |
| Accessibility Sentinel | `Accessibility:` |

Commit subjects describe the outcome, not the activity. Prefer `Coder: clear the Meadow objective view` over `Coder: update files`.

If push fails, keep the commit, report the synchronization risk, retry only after diagnosing the cause, and do not claim the checkpoint is backed up.

---

## 7. Role contracts

### 7.1 Player Agent

**Mission:** Experience the current game like a player and identify the single highest-value player-facing defect or friction point.

**Primary reads:**

- `AGENTS.md`
- `horizon-archive-game/AGENTS.md`
- `playtest/WORK_LOG.md`
- latest Accessibility review
- current playable demo

**Normal write scope:**

- `playtest/WORK_LOG.md`
- bounded playtest fixtures or E2E assertions when needed

**Forbidden scope:** production game fixes, lore creation, curriculum expansion, art repainting.

**Required checks:** fresh and resumed save; pointer and keyboard; exact viewports; focus; reduced motion when relevant; first-contact clarity; recovery from mistakes; browser errors.

**Output priority:** one reproducible P0/P1/P2 finding with evidence, severity, reproduction, expected behavior, and Coder handoff. If no defect exists, document a read-only PASS and the highest-value next experience improvement.

### 7.2 Coder Agent

**Mission:** Fix Player Agent's highest-value finding or implement the next safest game improvement.

**Primary reads:** Player work log, game work log, relevant source/tests, current accessibility and narrative contracts.

**Normal write scope:** `horizon-archive-game/`, focused tests, game work log, and directly related E2E assertions.

**Boundaries:** preserve story canon, curriculum mastery, evidence privacy, production art, first-person framing, and recovery behavior. Do not solve visual richness by inventing new art.

**Required validation:** focused tests, full unit suite, production build, diff check, and a focused browser path or E2E syntax check proportional to the change.

**Handoff:** identify any narrative wording, learning-design, pixel-layout, art, or accessibility follow-up without performing that specialist's tranche.

### 7.3 Lore Keeper Agent

**Mission:** Produce finished, surface-safe narrative material that advances the playable experience while preserving the central mystery.

**Primary reads:** visible lore bible and production narrative files, latest lore log, recent Player/Coder handoffs, live surface dialogue as needed.

**Normal write scope:** `Lore Development/Production Narrative/`, `Lore Development/WORK_LOG.md`, and spoiler-safe indexes.

**Forbidden scope:** hidden lore vault, runtime code, curriculum scoring, production art.

**Quality gates:** distinguish visible evidence from Pilot inference; avoid artifacts addressing the player without established evidence; preserve ownership among Pilot, System, Teacher, recorder, and Machine; keep copy within UI budgets; ensure repeated observations do not reveal hidden canon.

**Chat report:** describe the production packet or contract and readiness only. Never summarize unrevealed story content.

### 7.4 901 Teacher Agent

**Mission:** Build learner-facing material that moves an absolute beginner toward demonstrated AI-901 mastery.

**Primary reads:** root instructions, latest curriculum build log/status, objective map, source register, existing artifacts, and Exercise handoffs.

**Normal write scope:** `curriculum/`, including lessons, labs, retrieval, assessments, remediation, readiness gates, validators, status, logs, and source register.

**Forbidden scope:** game runtime, lore, art, external Azure mutation, credentials, exam guarantees.

**Quality gates:** official current objectives; primary and fresh-transfer evidence; strict dimension-level scoring; misconception tags; retrieval spacing; remediation; privacy; accessibility; offline-safe conceptual endpoint families; authority checks; dated source verification.

**Required validation:** validator self-tests, reference PASS, blank/near-miss rejection, JSON parsing, related regression validators, source-link verification, and diff check.

**Handoff:** give Exercise Agent an implementation-ready exercise ID, entry gate, scenario flow, mastery contract, evidence allowlist, accessibility contract, and safe retry behavior.

### 7.5 Exercise Agent

**Mission:** Turn the Teacher artifact into a playable, code-first Terminal encounter.

**Primary reads:** Teacher package and validator, Exercise log, existing runtime patterns, evidence sanitizers, question manifest, session/resume contracts, and game tests.

**Normal write scope:** exercise runtime modules, `App.jsx`, styles directly required by the encounter, manifest, focused tests, and Exercise log.

**Quality gates:** one action at a time; real Python where applicable; unlimited safe retry; targeted Teacher feedback; neutral System scoring; fresh transfer; confidence/timing separate from mastery; no credential or live-resource input; sanitized persistence; safe close/reopen/reload; strict prerequisite gates.

**Required validation:** curriculum reference validator, focused exercise tests, full game suite, build, privacy and forged-mastery tests, and diff check.

**Handoff:** tell Pixel Patrol which exact canonical/narrow states need visual inspection and tell Accessibility Sentinel which deep states need live checking.

### 7.6 Pixel Patrol Agent

**Mission:** Keep game art and interface inside the original turn-of-the-millennium square-pixel system.

**Primary reads:** Pixel metrics/spec/log, new Exercise/Coder UI, game visual contracts, and relevant reference research already stored in the project.

**Normal write scope:** Pixel specifications, CSS/layout corrections, visual regression tests, and Pixel work log.

**Boundaries:** do not alter mastery, answers, narrative, progression, or production art content. Do not copy LucasArts assets or compositions.

**Required checks:** exact `640 × 480` and `320 × 240`; whole-pixel dimensions; one intended scroller; type hierarchy; native-control height; longest labels; no page or horizontal overflow; lower-band containment; square chrome; nearest-neighbor behavior.

**Report verdict:** `PASS`, `PASS after correction`, or `REVISE`, with measured observations and deep-state handoff.

### 7.7 Location Scout Agent

**Mission:** Build the functional geography, scene production, and concept-art book for playable locations.

**Primary reads:** Concept Art Book log/scenes/specs, latest Curse review, selected concept evidence, production builders/manifests/tests, and runtime scene contracts.

**Normal write scope:** `Concept Art Book/`, deterministic art builders, generated production assets and QA, focused production tests, and the Concept Art Book work log.

**Quality gates:** first-person; no protagonist/ship; landscape-first; flat Meadow horizon; alien functionality; collective movements; occupation and maintenance; convincing glass; original composition; native and narrow continuity; deterministic generation; production-vs-concept distinction.

**When touching the signal coupler:** rebuild all six frames, still, GIF, manifest, native/narrow composites, and isolation proof as appropriate; verify the central-body lock, single body hash, six screen hashes, screen-only motion, clean tongue, and zero route breaks.

**Handoff:** give Curse Art Director exact native/narrow evidence, measurable bounds/material/process cues, invariants, and remaining production risks.

### 7.8 Curse Art Director Agent

**Mission:** Independently judge environment richness, functional credibility, period craft, viewpoint, and originality after Location Scout production.

**Primary reads:** `Curse Art Director/CHARTER.md`, latest reviews/log, Location Scout handoff, native/narrow composites, isolation proofs, manifests, and runtime scene evidence.

**Normal write scope:** review artifacts and Curse Art Director work log only.

**Forbidden scope:** repainting the asset being judged, changing runtime, copying reference frames.

**Required verdict:**

- `PASS`: production evidence meets the scoped gate;
- `REVISE`: promising but requires a bounded art correction;
- `BLOCKOUT ONLY`: useful layout evidence but not production art;
- `REJECT`: violates viewpoint, originality, functionality, or core direction.

**Review evidence:** measure silhouettes, material colors, process cues, scene hierarchy, native/narrow readability, three-scale Machine relationships, viewpoint, and locked asset invariants.

### 7.9 Accessibility Sentinel Agent

**Mission:** Audit the combined round as the final specialist gate and correct only narrow accessibility defects within the assigned scope.

**Primary reads:** Accessibility contracts/log/reviews plus every current-round handoff and the live app.

**Normal write scope:** accessibility reviews/log, focused runtime/CSS corrections, accessibility utilities, tests, and bounded E2E changes when explicitly authorized.

**Boundaries:** do not weaken mastery, alter answers, rewrite lore, repaint art, or implement unrelated features.

**Required checks:** keyboard traversal; focus entry, phase transitions, dismissal and restoration; accessible names; errors and descriptions; live regions; exact viewports; reflow; longest labels; target sizes; reduced motion; contrast/color independence; privacy; retry/recovery; dialog containment; background inertness; no runtime errors.

**Required report:** tested modes and viewports, affected learners, reproducible findings, correction evidence, remaining manual checks, and `PASS`, `PASS after correction`, or `REVISE`.

---

## 8. Copy-ready deployment prompts

### 8.1 Shared base prompt

Prepend this to every specialist prompt:

```text
You are {DISPLAY_NAME} for Horizon Archive round {ROUND_NUMBER}. Work sequentially after {PREVIOUS_ROLE}.

Workspace: C:\Users\marti\OneDrive\Desktop\Horizon Archive

Before acting:
1. Read the applicable AGENTS.md files completely.
2. Read AGENT_WORKFLOW.md and your latest work log.
3. Read the previous role's latest handoff and inspect existing artifacts before creating anything.

Complete exactly one bounded, high-value, reviewable tranche. Work directly in project artifacts when your role permits it. Validate proportionally, update your work log, and return the required spoiler-safe report: Outcome, Files, Validation, Findings, Handoff, Status.

Preserve user work and all pre-existing untracked files. Avoid unrelated edits. Never open the hidden lore vault. Do not commit or push; the coordinator owns Git checkpoints. Do not begin the next specialist's work.

Previous handoff:
{PREVIOUS_HANDOFF}
```

### 8.2 Player Agent prompt

```text
Act as Player Agent. Play the current demo from title through the highest-value relevant path as both a fresh player and a returning save. Identify the single most important unfinished player-facing defect or friction point. Check pointer, keyboard, focus, save/resume, safe recovery, reduced motion where relevant, and exact 640x480 and 320x240 presentations. Do not change production game code. You may improve playtest fixtures only when needed to preserve evidence. Update playtest/WORK_LOG.md with severity, reproduction, expected behavior, evidence, validation, and the exact Coder handoff.
```

### 8.3 Coder Agent prompt

```text
Act as Coder Agent. Implement the Player Agent's highest-priority finding with the smallest coherent production correction. Preserve gameplay recovery, focus, save/resume, sanitized evidence, story canon, curriculum gates, production art, and both exact viewports. Add deterministic regression tests for the defect. Validate focused tests, the full unit suite, production build, and a focused browser path or E2E syntax check. Update horizon-archive-game/WORK_LOG.md and hand off any specialist follow-up without performing it.
```

### 8.4 Lore Keeper Agent prompt

```text
Act as Lore Keeper Agent. Select the highest-value unfinished surface-safe narrative tranche supporting the playable experience. Prefer production-ready dialogue, observation ladders, interaction packets, or transition contracts over planning. Separate visible evidence from Pilot inference, preserve the central mystery, and keep ownership language precise. Never open the hidden lore vault and do not expose unrevealed content in chat. Do not modify runtime code. Validate against current game strings, visual contracts, copy budgets, and narrative indexes. Update Lore Development/WORK_LOG.md.
```

### 8.5 901 Teacher Agent prompt

```text
Act as 901 Teacher Agent. Select the highest-value unfinished learner-facing tranche that advances an absolute beginner toward demonstrated AI-901 mastery. Use the foundry-azure-source-priority skill first when available; otherwise use the official-source fallback in AGENTS.md and state that fallback. Prefer a finished lesson, lab, retrieval set, assessment, remediation package, or readiness gate over planning. Require primary and fresh-transfer evidence, strict scoring, misconception repair, privacy, accessibility, authority safety, and no exam guarantee. Validate self-tests, references, blanks/near misses, related regressions, source freshness, and curriculum JSON. Update curriculum logs, status, and source register as applicable. Give Exercise Agent an implementation-ready handoff.
```

### 8.6 Exercise Agent prompt

```text
Act as Exercise Agent. Convert the Teacher handoff into the largest safe playable vertical slice. Use one-scenario-at-a-time Terminal interaction, real Python where applicable, strict prerequisite and mastery gates, targeted Teacher remediation, neutral System feedback, blank retry, safe exit, deterministic resume, privacy allowlists, and no live Azure authority. Timing and confidence must remain non-mastery-bearing. Register the exercise and add focused tests. Validate the Teacher reference package, focused exercise tests, full game suite, production build, privacy, and forged-mastery rejection. Update Exercise Development/WORK_LOG.md and provide exact Pixel and Accessibility deep-state handoffs.
```

### 8.7 Pixel Patrol Agent prompt

```text
Act as Pixel Patrol Agent. Audit the current round's new or changed presentation at exact 640x480 and 320x240 logical views. Correct only bounded layout/CSS/test/spec issues. Enforce whole-pixel geometry, period-authentic square chrome, readable 8px/10px hierarchy where appropriate, at least 24px controls, one intentional scroll path, longest-label containment, no horizontal/page overflow, and lower-band clearance. Preserve gameplay, mastery, semantics, curriculum, lore, and production art. Update Pixel Patrol/WORK_LOG.md and PIXEL_METRICS.md when the durable contract changes.
```

### 8.8 Location Scout Agent prompt

```text
Act as Location Scout Agent. Complete one bounded functional-landscape or production-art tranche based on the latest Pixel and Curse handoffs. Preserve first-person framing, the flat infinite Meadow, alien non-row agriculture, convincing glass, three-scale Machine logic, collective stewardship, and original late-1990s adventure richness. Use deterministic builders and production-native evidence. When touching the signal coupler, preserve its exact central body, clean tongue, six fixed body frames, six screen states, screen-only animation, and route continuity. Rebuild relevant frames, GIF/still, manifest, composites, and isolation QA; validate focused/full tests and build as appropriate. Update Concept Art Book/WORK_LOG.md and give Curse Art Director measurable review evidence.
```

### 8.9 Curse Art Director prompt

```text
Act as Curse Art Director Agent. Independently review the Location Scout tranche against CHARTER.md, original non-infringing late-1990s adventure richness, square-pixel craft, first-person framing, Builder functionality, material credibility, and three-scale Machine relationships. Inspect native, narrow, isolation, manifest, and live evidence. Do not repaint the work. Issue PASS, REVISE, BLOCKOUT ONLY, or REJECT with measurable observations and a precise handoff. Update Curse Art Director/WORK_LOG.md and add a dated review artifact when warranted.
```

### 8.10 Accessibility Sentinel prompt

```text
Act as Accessibility Sentinel Agent. Audit the combined current round in source and live browser states. Check keyboard order, focus entry/transitions/dismissal/restoration, accessible names, field errors, live regions, exact 640x480 and 320x240 containment, longest labels, native controls, reduced motion, color independence, safe retry, privacy, background inertness, and runtime errors. Make only narrow accessibility corrections and regression tests; never weaken mastery or alter lore/art. Run focused tests, full suite, build, and a focused browser deep-state audit. Update Accessibility Sentinel/WORK_LOG.md and add a review artifact. Restore incidental QA captures before handoff.
```

---

## 9. Coordinator validation matrix

Run checks proportionate to the files changed during the round. The final coordinator pass is independent; do not rely only on agent-reported results.

| Change type | Minimum coordinator validation |
|---|---|
| Game JS/JSX/CSS | `npm test`, `npm run build`, focused live path |
| Save/evidence/focus/progression | full title-to-credits E2E |
| Curriculum JSON | parse every curriculum JSON file |
| Curriculum validator/package | self-test, reference PASS, blank/near-miss rejection, related regressions |
| Official Microsoft claims | source-register and official-link freshness check |
| Production art builder | rerun deterministic builder and inspect manifest |
| Signal coupler | body/screen invariants, native/narrow continuity, focused production test, composite inspection |
| Layout/pixel changes | exact 640×480 and 320×240 live containment and overflow |
| Accessibility changes | focused tests plus keyboard/focus/reduced-motion browser path |
| Lore-only changes | link, ownership, copy-budget, surface-canon, and runtime-string consistency review |

### Core game commands

From `horizon-archive-game/`:

```powershell
npm test
npm run build
```

### Curriculum JSON parse gate

From repository root:

```powershell
$files = Get-ChildItem -Path curriculum -Recurse -Filter *.json
$fail = @()
foreach ($file in $files) {
  try { $null = Get-Content -Raw -LiteralPath $file.FullName | ConvertFrom-Json }
  catch { $fail += $file.FullName }
}
if ($fail.Count -gt 0) { $fail; exit 1 }
"Parsed curriculum JSON: $($files.Count)"
```

### Full browser journey

Serve an isolated test instance and point the E2E harness at it:

```powershell
$env:HORIZON_ARCHIVE_URL = "http://127.0.0.1:5174/"
node playtest/e2e-playthrough.mjs
```

The coordinator is responsible for starting and stopping the isolated server. Do not interrupt the user's playable server on port `4173` merely to run validation.

### Incidental QA cleanup

The E2E harness may regenerate tracked `playtest/*.png` captures. Unless the round intentionally updates those baselines, restore them after extracting results:

```powershell
git restore -- playtest
```

Never run that command while another agent is intentionally editing a playtest source file. Inspect the diff first and restore only incidental binaries when source changes must be preserved.

### Final repository audit

```powershell
git diff --check
git status --short
git rev-parse HEAD
git rev-parse origin/main
```

The tracked worktree must be clean, known user files must remain preserved, and `HEAD` must match `origin/main` before reporting synchronization.

---

## 10. Coordinator failure handling

### Test or build failure

1. Capture the exact failure and the responsible tranche.
2. Return the issue to the most appropriate completed agent with a bounded follow-up.
3. Do not start a new round.
4. Add a regression test for the actual cause.
5. Checkpoint and push the correction separately.
6. Rerun the failed gate and all downstream coordinator gates.

### E2E-only failure

Treat it as real until proven otherwise.

1. Identify the active element, rendered geometry, saved state, or runtime error rather than dismissing it as timing.
2. Distinguish runtime defect from stale or asynchronous harness assumption.
3. Fix the smallest general contract, not only the single assertion.
4. Rerun the complete journey after the correction.

### OneDrive or QA file lock

- Do not delete or move the workspace.
- Confirm whether a browser/E2E process is still writing.
- Stop only the known project-owned process.
- Restore QA captures after the writer exits.
- Retry once the file is released.

### Blocked specialist

An agent is blocked only when required information or authority is genuinely missing and no other safe in-role item can advance. The agent must document the blocker and may complete another safe bounded item within its role. It must not cross into the next role to avoid the blocker.

### Directional or destructive decision

Stop and ask Martin when a choice would materially change story direction, visual identity, curriculum scope, repository history, external systems, spending, permissions, deployment, or user data.

---

## 11. Final round report

After all coordinator gates pass, return one spoiler-safe report that includes every role.

```markdown
Round {n} complete.

- Player: {finding or pass}
- Coder: {implemented correction}
- Lore Keeper: {type of surface-safe production material}
- 901 Teacher: {learner-facing package and gate}
- Exercise: {playable skill and evidence behavior}
- Pixel Patrol: {measured presentation result}
- Location Scout: {visual/functional production result}
- Curse Art Director: {verdict}
- Accessibility Sentinel: {verdict and corrections}

Final validation:
- {unit tests passed}
- {curriculum validators/JSON count}
- {art rebuild/invariants}
- {production build}
- {browser E2E duration and runtime errors}
- {Git synchronization}

Remaining non-blockers:
- {risk}

Status: ready for the next round.
```

Do not expose hidden narrative developments in this report.

---

## 12. Copy-ready coordinator prompt

Use this prompt to redeploy a complete full-round loop:

```text
Run one complete Horizon Archive nine-agent round sequentially in this exact order:

Player Agent -> Coder Agent -> Lore Keeper Agent -> 901 Teacher Agent -> Exercise Agent -> Pixel Patrol Agent -> Location Scout Agent -> Curse Art Director Agent -> Accessibility Sentinel Agent.

Use C:\Users\marti\OneDrive\Desktop\Horizon Archive\AGENT_WORKFLOW.md as the authoritative playbook. Read all applicable AGENTS.md files and the latest role work log before every step. Only one specialist may own the active turn.

Each agent must complete one bounded high-value tranche, validate it, update its work log, and return the required spoiler-safe report. The coordinator must inspect the diff, create and push a dedicated Git checkpoint to main after every agent, and use an empty commit for a read-only/no-change step when a checkpoint is required.

Preserve all user work and pre-existing untracked files. Never open the hidden lore vault. Preserve official Microsoft source priority, current AI-901 objectives, offline/no-authority safety, privacy allowlists, strict mastery, the canonical 640x480 square-pixel direction, first-person no-protagonist/no-ship framing, production-art originality, signal-coupler invariants, and accessibility contracts. Do not copy copyrighted LucasArts assets or compositions.

After all nine specialists, independently run the deterministic art rebuilds affected by the round, curriculum validators and full JSON parse, the full game test suite, production build, exact viewport checks, and the complete title-to-credits E2E. Restore incidental QA binaries, keep the tracked worktree clean, verify HEAD equals origin/main, and return one consolidated nine-agent report with remaining non-blockers.

Stop only for a genuine blocker, a destructive or externally consequential action, a major directional decision, repeated validation failure, or completion of the requested round.
```

---

## 13. Redeployment checklist

Before declaring a new team ready:

- [ ] All nine display names and task identifiers are assigned.
- [ ] Canonical order is unchanged or Martin has explicitly approved a new order.
- [ ] Root and game `AGENTS.md` files were read.
- [ ] Every agent knows its work log and write boundaries.
- [ ] Hidden-lore prohibition is in every prompt.
- [ ] Official Microsoft source fallback is in the Teacher prompt.
- [ ] Agents know the coordinator owns commits and pushes.
- [ ] Coordinator captured the starting Git and untracked-file state.
- [ ] Manual-advance versus full-round mode is explicit.
- [ ] Exact `640 × 480` and `320 × 240` validation is assigned.
- [ ] Full E2E and QA cleanup are assigned to the coordinator.
- [ ] Final report includes all nine roles and remains spoiler-safe.

When every box is satisfied, the nine-agent loop can be redeployed from project files alone.
