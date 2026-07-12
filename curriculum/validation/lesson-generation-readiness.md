# Lesson Generation Readiness

## Goal

Decide what must be true before full lesson generation begins.

## Current verdict

`reference_pattern_gate_complete_sequential_expansion_in_progress`

The four required reference patterns are implemented and ready for review. Controlled sequential learner-package expansion is now in progress; broad non-sequential generation still requires pattern approval and an explicit source-gap scope freeze.

As of 2026-07-12, four end-to-end reference packages exist:

- `curriculum/lessons/L-01-01` — bridge lesson with runnable Python, activities, assessments, retrieval, remediation, and spaced review
- `curriculum/lessons/L-05-03` — official-source-grounded Foundry SDK mental model with a runnable offline simulation and optional-live guardrails
- `curriculum/lessons/L-02-01` — source-grounded concept lesson with deterministic workload matching and a privacy-limited Terminal state retrieval bridge
- `curriculum/lessons/L-05-07` — source-grounded multimodal information-extraction lesson with real local image/audio/telemetry assets, null preservation, provenance, and deterministic validation

All four lesson manifests pass the dependency-free schema contract check. All four learner scripts or deterministic exercise checks run successfully. The four-pattern reference gate is complete; all packages remain at `review` status until learner and owner approval.

## Sequential learner expansion

- `curriculum/lessons/L-01-02` — complete bridge package for strings, numbers/booleans, assignment, reassignment, prediction, and visible variable-backed output
- `curriculum/lessons/L-01-03` — complete confidence-rebuilding package for traceback location, NameError repair, indentation repair, and dead-end-free experimentation
- `curriculum/lessons/L-02-02` — complete source-grounded scenario package for six responsible AI principles, concrete mitigations, accountable ownership, and fresh-form transfer
- `curriculum/lessons/L-02-03` — complete source-grounded model mechanics, selection, deployment, and configuration decision package with fresh-form transfer
- `curriculum/lessons/L-03-01` — complete two-form Python bridge for lists, dictionaries, nested access, JSON parsing/serialization, and structured-output validation
- `curriculum/lessons/L-03-02` — complete two-form coding lab for functions, loops, conditionals, boundary behavior, unseen-input reuse, and anti-bypass validation
- `curriculum/lessons/L-03-03` — complete offline client bridge for imports, package/environment reasoning, files, secrets, HTTP-shaped requests, hidden-config transfer, and redaction validation

## Ready now

- chapter skeleton exists
- AI-901 objective map exists
- Python prerequisite map exists
- skill progression exists
- lesson architecture now exists
- lesson/activity/assessment schema stubs now exist
- tutor behavior model now exists
- backlog and data model planning now exist

## Still required before broad lesson generation

- owner/learner review of the four reference packages
- explicit source-gap scope freeze or capture of remaining official sources
- approval of the package file convention demonstrated by the four references
- assessment authoring rules refined from the validated reference patterns

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

Review `L-01-01`, `L-02-01`, `L-05-03`, and `L-05-07` as a set. Approve or revise the shared provenance, mastery, remediation, privacy, and package conventions before expanding objective-by-objective.
