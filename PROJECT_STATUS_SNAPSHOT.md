# Project Status Snapshot

## Purpose

This file is a plain-language snapshot of what has been built so far across the AI-901 training platform work, the source corpus work, the practice tooling, the curriculum planning layer, and the visible lore foundation.

It is meant to answer:

- what already exists
- what is still missing
- how close the project feels to completion on training
- how close the project feels to completion on lore

---

## Executive Read

### Training readiness score: `4/10`

Why:

- The source corpus is in place.
- The Microsoft Learn captures exist locally.
- The AI-900 practice logger exists.
- The curriculum architecture and lesson-planning layer exist.
- The objective map, prerequisite map, lesson map, schemas, tutor model, backlog, and mastery model exist.

But:

- the actual lesson packages are not built
- the tutoring product is not implemented
- the zero-to-Python teaching flow is planned, not delivered
- the Foundry / Azure implementation lessons are still mostly architecture, not finished learner content
- the missing official Foundry source captures still limit confidence in implementation-heavy teaching

If `10/10` means “this can reliably take Martin from zero Python to AI-901 mastery,” then the project is not close to done yet in delivery terms even though the planning foundation is strong.

### Lore readiness score: `3/10`

Why:

- The visible premise is strong.
- The tone, themes, mystery rules, player perspective, Builder surface canon, Machine surface canon, visual direction, and Python-to-story integration are defined in surface form.
- The project already has a clear identity: *The Horizon Archive* as a narrative Python / Azure learning game.

But:

- there is no finished chapter-by-chapter player-facing story content
- there is no full scene list
- there are no completed narrative lessons
- there is no real dialogue corpus
- there is no mystery pacing map across the whole experience
- the story is still mostly a lore bible and not yet a playable emotional arc

If `10/10` means “it is an engaging and thought-provoking story,” then the project has a promising spine, but not yet enough written narrative material to claim real completion.

---

## What Has Been Done

## 1. Repo-level source-priority setup

- `AGENTS.md` was updated with Microsoft Foundry / Azure AI source-priority rules.
- The workflow correctly treats AI-901 as the master learning goal.
- AI-900 is framed as supporting background only.

Why this matters:

- it keeps future work aligned with official Microsoft sources first
- it protects the project from drifting into vague or third-party-first Azure guidance

## 2. AI-901 Microsoft Learn local capture

Local capture output exists in:

- `ai901-mslearn-materials/`
- `scripts/capture_mslearn_ai901.py`
- `scripts/mslearn_catalog.py`
- `scripts/mslearn_extract.py`
- `README_AI901_CAPTURE.md`

What this accomplished:

- captured the two target Microsoft Learn paths locally
- created a compiled AI-readable archive
- created index and quality-report artifacts

Known limitation:

- some exercise / knowledge-check style pages were flagged as incomplete or harder to confirm

## 3. AI-900 practice assessment logger

Tooling exists in:

- `ai900_practice_assessment_logger/`

What it does:

- opens the official Microsoft Learn AI-900 practice assessment in Playwright
- supports study-capture mode
- logs topic tags, correctness, selected option letters/indices when possible, review flags, and user takeaways
- writes CSV / JSON / markdown review outputs

Important boundary:

- it does not save verbatim Microsoft question text, full answer choices, raw HTML, or a reusable answer key

Why this matters:

- it creates safe personal study signals without violating the intended copyright boundary

## 4. Knowledge repository build

The main source corpus exists in:

- `Knowledge Repository/`

What it includes:

- AI-900 homepage and study guide
- AI-901 homepage and study guide
- Microsoft Learn path captures
- manifests, inventories, quality-control files, and missing-materials reporting

Why this matters:

- the project now has a defined authoritative source base
- source content and generated curriculum are separated cleanly

Known limitation:

- several Foundry-related official Microsoft captures are still missing locally
- the AI-900 practice assessment source record is still incomplete / placeholder level

## 5. Simplilearn path-length cleanup

The `Simplilearn Training Files/` folder was renamed into shorter paths so files stop hitting Windows parser/path-length issues.

Why this matters:

- it makes the local training assets usable by scripts and tooling

## 6. Curriculum skeleton build

The main planning artifacts exist in:

- `curriculum/`

Core outputs already built:

- `ai901-objective-map.json`
- `python-prerequisite-map.json`
- `skill-progression.json`
- `curriculum-skeleton.md`
- `curriculum-skeleton.json`
- `source-map.json`
- `source-inventory.md`
- `chapters/`
- `schemas/`
- `validation/`

What this means:

- AI-901 objectives are mapped
- Python prerequisites are mapped
- a six-chapter structure exists
- Foundry implementation is correctly weighted more heavily than pure concept review

Known limitation:

- this is still architecture, not full lesson delivery

## 7. Hour-plus follow-up planning layer

The follow-up planning pass created:

- `curriculum/objective-to-lesson-map.json`
- `curriculum/lesson-type-system.md`
- `curriculum/lesson-template-schema.json`
- `curriculum/activity-template-schema.json`
- `curriculum/assessment-template-schema.json`
- `curriculum/tutor-interaction-model.md`
- `curriculum/app-feature-backlog.md`
- `curriculum/data-model-blueprint.md`
- `curriculum/progress-and-mastery-model.md`
- `curriculum/foundry-lab-roadmap.md`
- `curriculum/source-gap-remediation-plan.md`
- `curriculum/accessibility-and-ux-requirements.md`
- `curriculum/validation/lesson-generation-readiness.md`

What this added:

- launch lesson taxonomy
- lesson granularity decision
- lesson-level mapping
- mastery model
- tutor behavior model
- Foundry lab-mode plan
- launch-vs-later backlog split
- readiness gates before broad lesson generation

Why this matters:

- the project is no longer “just a curriculum sketch”
- it now has the beginnings of an app/system blueprint

## 8. Surface lore foundation

Visible lore work currently lives in:

- `HORIZON_ARCHIVE_SURFACE_LORE.md`
- `Concept Art/`
- `DO_NOT_READ_HORIZON_ARCHIVE_HIDDEN_LORE_VAULT.md`

What exists at the surface-lore level:

- project premise
- player perspective
- Builder surface canon
- Machine surface canon
- spoiler protocol
- themes
- visual direction
- narrative structure for the Python arc and later Azure arc

Important note:

- I did not use the hidden-lore file as a normal planning source
- the current visible lore is intentionally mystery-preserving

---

## What Is Still Missing

## Training-side missing pieces

- actual authored lesson packages
- lesson JSON instances using the new schemas
- learner-facing Python bridge lessons
- learner-facing AI-901 concept lessons
- learner-facing Foundry implementation lessons
- tutor implementation
- progress / mastery implementation
- app UI
- citations wired into lesson rendering
- safe reference lesson prototypes
- captured official Foundry source pages listed as missing in curriculum validation

## Lore-side missing pieces

- full chapter-by-chapter narrative breakdown
- scene list
- environmental storytelling plan by chapter
- player-facing dialogue and narration corpus
- chapter mystery escalation plan
- emotional arc for the pilot
- integration rules for how code exercises reveal story beats
- Azure-era story continuation in detail
- ending path and finale pacing at the visible/story-delivery level

---

## Honest Assessment

## Training: why `4/10`

The project has done a lot of hard invisible work:

- corpus building
- capture tooling
- practice logging
- objective mapping
- curriculum architecture
- lesson-system planning

That is meaningful progress. It is not fluff.

But the learner cannot yet sit down and be taken all the way from:

- “I know no Python”

to

- “I am AI-901 ready and strong on Foundry concepts”

without a lot more build-out.

So this is not a `7` or `8`. The foundation is better than the finished experience.

## Lore: why `3/10`

The lore has taste, theme, identity, and a good mystery spine already. That is real progress.

But “engaging and thought provoking story” requires:

- scenes
- revelations
- rhythm
- suspense
- dialogue
- emotional movement
- carefully paced ambiguity

Right now the project mostly has:

- a strong premise
- a strong tone
- a strong ruleset for not ruining the mystery too early

That is a very good beginning, but still only the beginning.

---

## Closest Next Steps

If the goal is to move the training score up fastest:

1. Build the first four reference lesson packages named in `curriculum/validation/lesson-generation-readiness.md`.
2. Capture the missing official Foundry sources locally.
3. Turn the lesson schemas into real lesson instances.
4. Build a minimal learner/tutor flow around one complete slice.

If the goal is to move the lore score up fastest:

1. Build a chapter-by-chapter story beat outline.
2. Write the Chapter 1 playable narrative shell.
3. Define how Python exercises trigger discoveries, not just instruction.
4. Create a mystery pacing map for what is revealed, suggested, and withheld in each chapter.

---

## Bottom Line

This project is in a strong **foundations and systems-design** phase, not a finish line phase.

The training side is farther along than the lore side because it already has:

- sources
- tooling
- mappings
- planning structure

The lore side has a compelling identity, but it still needs much more actual authored story content before it can carry the full experience.

### Current scores

- Training: `4/10`
- Lore: `3/10`
