# Next Model Handoff Instructions

## Purpose

This file is for the next model or next chat session that picks up work on this project.

Use it as the first-read handoff so you do not waste time re-discovering the current state.

---

## Project Goal

Build an AI-901-focused training platform that can take a learner from zero Python to AI-901 mastery, with AI-900 used only as supporting foundation, and eventually wrap that training inside an engaging narrative/lore experience.

Current high-level reality:

- the source corpus is mostly built
- the curriculum planning layer is mostly built
- the learner-facing lessons are not built yet
- the lore premise is strong, but the actual story content is still early

---

## Read These First

Read these files in this order:

1. [AGENTS.md](C:/Users/marti/OneDrive/Desktop/Horizon%20Archive/AGENTS.md)
2. [PROJECT_STATUS_SNAPSHOT.md](C:/Users/marti/OneDrive/Desktop/Horizon%20Archive/PROJECT_STATUS_SNAPSHOT.md)
3. [curriculum/CODEX_HOUR_PLUS_FOLLOWUP.md](C:/Users/marti/OneDrive/Desktop/Horizon%20Archive/curriculum/CODEX_HOUR_PLUS_FOLLOWUP.md)
4. [curriculum/validation/lesson-generation-readiness.md](C:/Users/marti/OneDrive/Desktop/Horizon%20Archive/curriculum/validation/lesson-generation-readiness.md)
5. [curriculum/objective-to-lesson-map.json](C:/Users/marti/OneDrive/Desktop/Horizon%20Archive/curriculum/objective-to-lesson-map.json)
6. [curriculum/lesson-type-system.md](C:/Users/marti/OneDrive/Desktop/Horizon%20Archive/curriculum/lesson-type-system.md)
7. [curriculum/app-feature-backlog.md](C:/Users/marti/OneDrive/Desktop/Horizon%20Archive/curriculum/app-feature-backlog.md)
8. [HORIZON_ARCHIVE_SURFACE_LORE.md](C:/Users/marti/OneDrive/Desktop/Horizon%20Archive/HORIZON_ARCHIVE_SURFACE_LORE.md)

If working specifically on source integrity or curriculum coverage, also read:

- [curriculum/BUILD_LOG.md](C:/Users/marti/OneDrive/Desktop/Horizon%20Archive/curriculum/BUILD_LOG.md)
- [curriculum/validation/final-build-summary.md](C:/Users/marti/OneDrive/Desktop/Horizon%20Archive/curriculum/validation/final-build-summary.md)
- [curriculum/source-map.json](C:/Users/marti/OneDrive/Desktop/Horizon%20Archive/curriculum/source-map.json)

---

## Current Scores

Use these as the current honest baseline unless the user changes the definition:

- Training: `4/10`
- Lore: `3/10`

Interpretation:

- Training `10/10` means the platform can realistically take a learner from zero Python to AI-901 mastery.
- Lore `10/10` means the narrative is engaging, thought-provoking, and substantially realized as actual story content.

---

## What Already Exists

### Source / corpus layer

- `Knowledge Repository/`
- local AI-901 Microsoft Learn captures
- manifests, inventories, missing-materials tracking, and quality-control files

### Practice tooling

- `ai900_practice_assessment_logger/`
- study-capture workflow without storing verbatim copyrighted assessment text

### Curriculum planning layer

- objective map
- Python prerequisite map
- skill progression map
- six-chapter curriculum skeleton
- lesson-system plan
- lesson/activity/assessment schemas
- tutor behavior model
- app feature backlog
- data model blueprint
- mastery model
- Foundry lab roadmap
- source-gap remediation plan
- UX/accessibility requirements
- lesson-generation readiness gate

### Lore foundation

- strong surface lore premise
- spoiler-safe lore bible
- visual tone and mystery rules
- narrative chapter framing for Python arc and later Azure arc

---

## What Does Not Exist Yet

### Training delivery gaps

- real lesson packages
- lesson JSON instances using the schemas
- learner-facing prose/content for the bridge and AI-901 lessons
- working tutor product
- working app UI
- real progress/mastery implementation
- reference lesson prototypes

### Lore delivery gaps

- chapter beat sheets
- scene-by-scene narrative structure
- dialogue corpus
- reveal pacing plan
- player-facing narrative lesson content

---

## Source Priority Rule

When work involves:

- Microsoft Foundry
- Azure AI
- AI-901 implementation
- agents
- Foundry SDKs or endpoints
- REST APIs or CLIs
- Azure Content Understanding

follow the source-priority rule in `AGENTS.md` first.

Use official Microsoft sources first, especially:

1. [Microsoft Foundry documentation hub](https://learn.microsoft.com/en-us/azure/foundry/)
2. [Microsoft Foundry SDKs and Endpoints overview](https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview)
3. [Microsoft Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)
4. [Azure Content Understanding overview](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview)

Important:

- AI-901 objectives are the master learning goals.
- AI-900 is supporting foundation only.

---

## Best Next Tasks

If the user wants the fastest improvement to the training side, do this next:

1. Build the first four reference lesson packages:
   - `L-01-01`
   - `L-02-01`
   - `L-05-03`
   - `L-05-07`
2. Decide the concrete lesson file format.
3. Wire provenance/citation behavior into lesson instances.
4. Keep source-grounded and invented bridge content visibly distinct.

If the user wants the fastest improvement to the lore side, do this next:

1. Create a chapter-by-chapter story beat outline.
2. Write the Chapter 1 playable narrative shell.
3. Define how Python exercises trigger discoveries and revelations.
4. Preserve mystery; do not collapse hidden answers early.

---

## Guardrails

Do not:

- write generated curriculum into `Knowledge Repository/`
- treat AI-900 as the primary authority
- invent official Microsoft claims when source evidence is thin
- reveal hidden lore just because the visible lore is incomplete
- pretend the project is further along than it is

Do:

- keep provenance visible
- separate source-grounded from bridge/generated content
- preserve the mystery in lore work
- be honest about missing Foundry captures and incomplete source areas

---

## Recommended Operating Mode For The Next Model

When starting:

1. summarize the current state briefly
2. confirm which side the user wants to push next:
   - training
   - lore
   - app/system build
3. execute directly instead of over-planning
4. leave behind files, not just chat analysis

---

## Short Version

If you are the next model:

- training is better planned than built
- lore is better imagined than written
- the best next training move is to build the first reference lesson packages
- the best next lore move is to build the chapter beat structure
- preserve Microsoft source discipline
- preserve mystery
