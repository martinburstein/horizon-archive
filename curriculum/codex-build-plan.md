# Codex Build Plan

## Recommended next task

Build the AI-901 objective-to-lesson expansion plan, starting with Chapter 1 bridge modules and then Chapter 5 Foundry implementation modules.

## Preserve these files

- `curriculum/source-map.json`
- `curriculum/ai901-objective-map.json`
- `curriculum/python-prerequisite-map.json`
- `curriculum/skill-progression.json`
- `curriculum/curriculum-skeleton.json`
- `curriculum/chapters/*.json`
- `curriculum/validation/*.md`

## Edit next

- `curriculum/chapters/chapter-01-python-bridge.json`
- `curriculum/chapters/chapter-05-foundry-endpoints-sdk-agents-content-understanding.json`
- a new future lesson-planning folder outside `Knowledge Repository/`

## How to begin lesson generation later

1. Expand one chapter JSON into module-level lesson briefs.
2. Keep each lesson tied to explicit `source_ids`.
3. Preserve invented bridge content as separate from Microsoft-derived source adaptation.
4. Generate assessments only after lesson briefs and source checks pass.

## Separation rule

Keep all source material in `Knowledge Repository/` and all generated curriculum in `curriculum/` or later app-specific generated folders. Do not write generated lessons back into the source corpus.

## Validation before lesson writing

- Confirm every lesson brief cites source IDs or is explicitly marked invented bridge.
- Recheck AI-901 objective coverage after each chapter expansion.
- Re-run duplicate and missing-materials review if new sources are added.
- Validate chapter JSON against the existing schemas before lesson expansion.

## Constraint

The next phase is objective-to-lesson expansion, not full polished lesson generation in one jump.
