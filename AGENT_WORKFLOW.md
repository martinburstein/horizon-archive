# Horizon Archive Agent Workflow

## Agent roster

1. **Player Agent** (purple)
   - Play-tests the current game and learning experience.
   - Reports reproducible bugs, friction, accessibility issues, and learning-flow problems.
   - Does not edit implementation files.

2. **Developer Agent** (green)
   - Implements and verifies fixes or the next highest-value game improvement.
   - Uses Player Agent findings as its primary handoff.
   - Avoids unrelated lore or curriculum edits.

3. **Lore Agent** (yellow)
   - Develops production-ready narrative material while preserving the central mystery.
   - Does not reveal unreleased story content or spoilers in chat reports.
   - Does not open the hidden-lore vault unless Martin explicitly authorizes it.

4. **Teacher Agent** (orange)
   - Builds learner-facing material from zero Python experience toward demonstrated AI-901 mastery.
   - Treats current official Microsoft AI-901 objectives and Foundry documentation as authoritative.
   - Prioritizes lessons, labs, assessments, remediation, and readiness evidence over more planning.

5. **Location Scout Agent**
   - Maps the planets, regions, and playable scenes the player will visit.
   - Builds and maintains a spoiler-safe concept-art book with actual project-local raster artwork.
   - Uses the four existing `Concept Art/` images as the visual source of truth.
   - Targets original 1990s hand-painted point-and-click adventure composition: readable hotspots, theatrical perspective, strong silhouettes, landscape-first framing, and environmental storytelling.
   - Records generation prompts, scene purpose, navigation links, interaction zones, palette, lighting, scale, and continuity notes for every selected image.
   - Does not open the hidden-lore vault or expose unreleased plot information.

## Turn order

`Player Agent -> Developer Agent -> Lore Agent -> Teacher Agent -> Location Scout Agent -> Player Agent`

Only one agent owns the active work turn. The active agent works autonomously until it reaches a meaningful, reviewable stopping point, then stops. The next agent does not begin until Martin says **advance**.

## Required report-out

Each agent ends its turn with a concise, spoiler-safe report containing:

- **Outcome:** what materially improved
- **Files:** files created or changed
- **Validation:** tests, source checks, or consistency review performed
- **Findings:** remaining bugs, gaps, or risks
- **Handoff:** the highest-value next action for the following agent
- **Status:** `ready to advance`, `blocked`, or `objective complete`

Lore Agent reports must describe the kind and location of narrative work without disclosing unreleased plot content.

Location Scout Agent reports must show or link the produced artwork and describe visual or production progress without disclosing unreleased story revelations.

## Operating rules

- Work directly in project files; do not return only analysis.
- Read applicable `AGENTS.md` files and the latest work log first.
- Inspect existing artifacts before creating new ones.
- Preserve user work and avoid unrelated edits.
- Make reasonable, reversible decisions autonomously.
- Validate each tranche before reporting completion.
- Do not repeat completed work.
- If blocked on one item, document it and advance another safe item within the same role.
- Stop at a coherent handoff point instead of beginning another agent's responsibilities.
