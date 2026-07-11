# Lesson Generation Readiness

## Goal

Decide what must be true before full lesson generation begins.

## Current verdict

`reference_generation_in_progress`

The project is ready for lesson-system implementation planning and limited prototype drafting, but not for broad full lesson generation across all chapters.

As of 2026-07-11, three end-to-end reference packages exist:

- `curriculum/lessons/L-01-01` — bridge lesson with runnable Python, activities, assessments, retrieval, remediation, and spaced review
- `curriculum/lessons/L-05-03` — official-source-grounded Foundry SDK mental model with a runnable offline simulation and optional-live guardrails
- `curriculum/lessons/L-02-01` — source-grounded concept lesson with deterministic workload matching and a privacy-limited Terminal state retrieval bridge

All three lesson manifests pass the dependency-free schema contract check. All three learner scripts or deterministic exercise checks run successfully. `L-05-07` remains to complete the four-pattern reference gate.

## Ready now

- chapter skeleton exists
- AI-901 objective map exists
- Python prerequisite map exists
- skill progression exists
- lesson architecture now exists
- lesson/activity/assessment schema stubs now exist
- tutor behavior model now exists
- backlog and data model planning now exist

## Still required before full lesson generation

- source-level lesson authoring templates for actual lesson JSON instances
- a citation object contract wired into lesson generation
- final decision on lesson file format for authored lessons
- remediation of missing official Foundry source captures or explicit scope freeze
- at least one end-to-end example lesson package approved as the reference pattern
- assessment authoring rules refined beyond schema shape

## Recommended pre-generation gates

### Gate 1: provenance gate

- every lesson must declare source mode
- every source-grounded lesson must list source ids
- every bridge lesson must carry a bridge label

### Gate 2: scope gate

- launch lesson list approved
- launch lesson types approved
- lesson granularity approved

### Gate 3: quality gate

- at least one lesson prototype for:
  - bridge lesson
  - concept lesson
  - coding micro-lab
  - portal navigation lab
  - source-grounded explainer

### Gate 4: source-gap gate

- either missing Foundry sources are captured
- or lesson-generation scope is explicitly limited to gap-safe depth

## Practical next move

Do not jump into all lessons at once.

Build one reference lesson package from each of these first:

- `L-01-01`
- `L-02-01`
- `L-05-03`
- `L-05-07`

If those four patterns hold up, broader lesson generation becomes much safer.
