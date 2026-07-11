# Data Model Blueprint

## Design goal

Define the core objects the platform will need before application implementation begins.

## Core entities

### `source`

- Unique id: `source_id`
- Parent relationships: optional `source_group_id`
- Provenance fields: `source_url`, `source_label`, `exam_role`, `capture_status`, `captured_at`
- Status fields: `complete`, `incomplete`, `missing_expected`
- Timestamps: `captured_at`, `indexed_at`
- User-facing labels: title, source type
- Machine-facing fields: local path, file format, confidence

### `source_fragment`

- Unique id: `fragment_id`
- Parent relationships: `source_id`
- Provenance fields: heading path, citation anchor, quote policy
- Status fields: `ready`, `needs_review`
- Timestamps: `indexed_at`
- User-facing labels: section title
- Machine-facing fields: fragment text hash, retrieval keywords

### `objective`

- Unique id: `objective_id`
- Parent relationships: `domain_id`
- Provenance fields: authority source ids
- Status fields: `mapped`, `partial`, `blocked`
- Timestamps: `mapped_at`
- User-facing labels: title
- Machine-facing fields: subskills, mastery type

### `chapter`

- Unique id: `chapter_id`
- Parent relationships: none
- Provenance fields: source mode summary, source ids
- Status fields: `planned`, `draft`, `approved`
- Timestamps: `created_at`, `updated_at`
- User-facing labels: title
- Machine-facing fields: ordering index, emphasis weight

### `module`

- Unique id: `module_id`
- Parent relationships: `chapter_id`
- Provenance fields: source ids
- Status fields: planning status
- Timestamps: created/updated
- User-facing labels: title
- Machine-facing fields: recommended sequence, lesson ids

### `lesson`

- Unique id: `lesson_id`
- Parent relationships: `chapter_id`, `module_id`
- Provenance fields: `source_mode`, `source_ids`, `provenance_policy`
- Status fields: `planned`, `draft`, `review`, `approved`, `blocked`
- Timestamps: created/updated/published
- User-facing labels: title, lesson type
- Machine-facing fields: objective ids, python skill ids, prerequisites, launch tier

### `activity`

- Unique id: `activity_id`
- Parent relationships: `lesson_id`
- Provenance fields: source dependency
- Status fields: planning status
- Timestamps: created/updated
- User-facing labels: short title
- Machine-facing fields: activity type, input/output contract

### `assessment_item`

- Unique id: `assessment_id`
- Parent relationships: `lesson_id`
- Provenance fields: objective ids, source linkage policy
- Status fields: planned/reviewed/approved
- Timestamps: created/updated
- User-facing labels: assessment name
- Machine-facing fields: assessment type, mastery signal, retry rules

### `learner_profile`

- Unique id: `learner_id`
- Parent relationships: none
- Provenance fields: none
- Status fields: active/paused
- Timestamps: created/updated
- User-facing labels: display name
- Machine-facing fields: experience level, goals, preferred tutor mode

### `learner_state`

- Unique id: `learner_state_id`
- Parent relationships: `learner_id`
- Provenance fields: derived from lesson and assessment records
- Status fields: current lesson, paused, completed
- Timestamps: last active, resumed at
- User-facing labels: current path
- Machine-facing fields: checkpoint, current objective focus, active review queue ids

### `progress_record`

- Unique id: `progress_id`
- Parent relationships: `learner_id`, `lesson_id`
- Provenance fields: evidence pointers to activities and assessments
- Status fields: `not_started`, `in_progress`, `completed`, `needs_review`
- Timestamps: started/completed/last_touched
- User-facing labels: lesson progress
- Machine-facing fields: confidence, notes, time spent

### `mastery_record`

- Unique id: `mastery_id`
- Parent relationships: `learner_id`, `objective_id`
- Provenance fields: contributing assessment ids
- Status fields: `unseen`, `exposed`, `partial`, `guided`, `independent`, `review_required`
- Timestamps: updated_at
- User-facing labels: mastery state
- Machine-facing fields: score band, confidence mismatch, weak-signal tags

### `attempt_record`

- Unique id: `attempt_id`
- Parent relationships: `learner_id`, `assessment_id`
- Provenance fields: lesson context
- Status fields: result state
- Timestamps: attempted_at
- User-facing labels: none
- Machine-facing fields: correctness, confidence, misconception tags, retry count

### `review_item`

- Unique id: `review_item_id`
- Parent relationships: learner, objective, lesson
- Provenance fields: originating assessment/lesson/source
- Status fields: open, snoozed, resolved
- Timestamps: created/resolved
- User-facing labels: review title
- Machine-facing fields: priority, review reason, recommended next action

### `recommendation`

- Unique id: `recommendation_id`
- Parent relationships: learner
- Provenance fields: rationale source ids and evidence
- Status fields: active, dismissed, completed
- Timestamps: created/acted_on
- User-facing labels: next step
- Machine-facing fields: recommendation type, score, trigger

### `tutor_turn`

- Unique id: `turn_id`
- Parent relationships: learner, lesson
- Provenance fields: cited source ids, evidence level
- Status fields: completed, truncated, escalated
- Timestamps: created_at
- User-facing labels: none
- Machine-facing fields: mode, request type, guardrail result

### `citation_record`

- Unique id: `citation_id`
- Parent relationships: source/source_fragment/lesson/tutor_turn
- Provenance fields: exact source reference
- Status fields: valid, stale, missing
- Timestamps: created_at, validated_at
- User-facing labels: citation string
- Machine-facing fields: anchor, label, confidence

### `lab_configuration`

- Unique id: `lab_config_id`
- Parent relationships: lesson
- Provenance fields: source assumptions and gap warnings
- Status fields: `simulated`, `live_optional`, `blocked`
- Timestamps: created/updated
- User-facing labels: lab mode
- Machine-facing fields: environment assumptions, secret policy, sample inputs

## Minimum launch persistence set

The first real app build should persist:

- lesson
- activity
- assessment_item
- objective
- source
- learner_profile
- learner_state
- progress_record
- mastery_record
- attempt_record
- review_item
- recommendation
- tutor_turn
- citation_record

That is the minimum set that supports tutoring, progress, review, and provenance.
