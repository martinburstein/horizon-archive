# Lesson Type System

## Purpose

This file defines the lesson-system contract for the first production version of the AI-901 training platform. It is intentionally implementation-oriented and avoids full lesson prose.

## Launch lesson set

The launch lesson system should support these lesson types:

- `bridge_lesson`
- `concept_lesson`
- `walkthrough_lesson`
- `coding_micro_lab`
- `portal_navigation_lab`
- `compare_and_choose_scenario_lesson`
- `source_grounded_explainer_lesson`
- `exam_objective_review_lesson`
- `confidence_rebuilding_lesson`
- `recovery_lesson_after_repeated_failure`
- `capstone_prep_lesson`

## Type definitions

### `bridge_lesson`

- Purpose: Introduce a prerequisite skill that the learner needs before Azure AI material becomes approachable.
- Acceptable source inputs: Supporting bridge references, course slides, demos, and explicit internal prerequisite maps.
- Generated elements allowed: Explanations, practice prompts, step scaffolds, beginner reassurance language.
- Interaction style: Guided, low-pressure, step-by-step.
- Difficulty range: absolute beginner to early novice.
- Required metadata: prerequisite skill ids, downstream objective links, bridge-content label.
- Assessment linkage: quick checks and tiny code confirmations.

### `concept_lesson`

- Purpose: Teach a stable concept, service category, or exam-relevant capability.
- Acceptable source inputs: AI-901 study guide, AI-901 homepage, local Microsoft Learn captures, clearly labeled AI-900 foundation support.
- Generated elements allowed: Plain-language paraphrase, examples, comparisons, glossary support.
- Interaction style: explainer plus short retrieval checks.
- Difficulty range: novice to early intermediate.
- Required metadata: objective ids, source ids, citation expectation, misconception tags.
- Assessment linkage: concept check, compare-and-contrast, scenario fit.

### `walkthrough_lesson`

- Purpose: Walk the learner through a process, mental model, or ordered flow.
- Acceptable source inputs: source-grounded documentation plus local bridge material where needed.
- Generated elements allowed: step ordering, clarifying notes, safe pseudo-examples.
- Interaction style: “do this, now this, here’s why.”
- Difficulty range: novice to intermediate.
- Required metadata: ordered steps, blocking prerequisites, likely failure points.
- Assessment linkage: sequencing and reflection checks.

### `coding_micro_lab`

- Purpose: Build confidence in short code-oriented tasks without requiring a full project.
- Acceptable source inputs: bridge references, local source-grounded workflow examples, SDK mental model material.
- Generated elements allowed: starter code skeletons, safe mock values, debugging hints.
- Interaction style: type-run-inspect-fix.
- Difficulty range: beginner to intermediate.
- Required metadata: environment assumptions, safe inputs, expected outputs, secret-handling rules.
- Assessment linkage: code reasoning, debug-the-code, output interpretation.

### `portal_navigation_lab`

- Purpose: Teach a portal workflow or configuration path without requiring unsupported live detail.
- Acceptable source inputs: local official sources, Learn captures, and explicit source-gap notes when details are incomplete.
- Generated elements allowed: workflow summaries, ordered steps, common pitfalls, pseudo-live simulation.
- Interaction style: guided navigation or simulated walk-through.
- Difficulty range: novice to intermediate.
- Required metadata: live-vs-simulated flag, source confidence flag, UI volatility warning.
- Assessment linkage: workflow ordering, scenario matching, self-check.

### `compare_and_choose_scenario_lesson`

- Purpose: Help learners choose the right AI approach, service, or Foundry pattern.
- Acceptable source inputs: AI-901 study guide and relevant Learn modules.
- Generated elements allowed: scenario wrappers and comparison tables.
- Interaction style: decision-based.
- Difficulty range: novice to intermediate.
- Required metadata: decision dimensions, objective tags, scenario category.
- Assessment linkage: choose-the-best-approach questions.

### `source_grounded_explainer_lesson`

- Purpose: Explain a topic only to the depth supported by local source evidence.
- Acceptable source inputs: official/local source corpus only.
- Generated elements allowed: paraphrase, structure, cross-linking, glossary bridges.
- Interaction style: evidence-forward.
- Difficulty range: novice to intermediate.
- Required metadata: citation density, source confidence, unsupported-claim guardrails.
- Assessment linkage: source-backed recall and structured explanation checks.

### `exam_objective_review_lesson`

- Purpose: Review one or more objectives in explicit exam language.
- Acceptable source inputs: AI-901 target sources first, AI-900 support second.
- Generated elements allowed: objective summaries, weakness flags, remediation pointers.
- Interaction style: compact, diagnostic, source-aware.
- Difficulty range: mixed.
- Required metadata: objective ids, mastery status input, review priority.
- Assessment linkage: objective checklists and mixed short checks.

### `confidence_rebuilding_lesson`

- Purpose: Reduce learner anxiety after repeated failure or confusion.
- Acceptable source inputs: prerequisite maps, prior lesson context, bridge references.
- Generated elements allowed: simplified framing, smaller steps, error normalization, alternate examples.
- Interaction style: calm, affirming, slower.
- Difficulty range: adaptive.
- Required metadata: trigger rules, failure signals, fallback path.
- Assessment linkage: minimal-friction confirmation rather than heavy testing.

### `recovery_lesson_after_repeated_failure`

- Purpose: Route a stuck learner back to missing concepts, skills, or source-backed explanations.
- Acceptable source inputs: learner state, objective map, source map, prior attempt data.
- Generated elements allowed: remediation plans and personalized ordering.
- Interaction style: diagnostic triage.
- Difficulty range: adaptive.
- Required metadata: trigger threshold, weakness clusters, retry rules.
- Assessment linkage: targeted re-check after remediation.

### `capstone_prep_lesson`

- Purpose: Frame a capstone-style integration task and exam readiness checkpoint.
- Acceptable source inputs: objective map, chapter map, source-backed solution patterns.
- Generated elements allowed: capstone scope, readiness checklist, review recommendations.
- Interaction style: synthesis and planning.
- Difficulty range: intermediate.
- Required metadata: readiness thresholds, covered objectives, expected integration level.
- Assessment linkage: readiness score and capstone planning rubric.

## Stretch lesson types

These are useful later but not required at launch:

- `vocabulary_drill_lesson`
- `mock_exam_review_lesson`
- `summary_lesson`
- `checkpoint_lesson`
- `misconception_correction_lesson`

## Source labeling rules

- `source_grounded`: primarily driven by official captured material.
- `source_grounded_with_gap_warning`: official grounding exists but a known source gap limits depth.
- `invented_bridge_with_supporting_reference`: generated bridge content supported by non-authoritative prerequisite references.
- `generated_from_learner_state_with_source_links`: sequencing and coaching are generated, but recommendations must link back to source-grounded lessons.
- `blended_source_review`: review experience that blends target and supporting materials with clear labels.

## Launch answer to key question

The first production version should launch with 11 lesson types. That is enough to support beginner onboarding, concept instruction, Foundry workflow teaching, recovery, and review without exploding the authoring system.
