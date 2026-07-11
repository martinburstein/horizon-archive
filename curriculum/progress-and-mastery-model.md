# Progress And Mastery Model

## Goal

Define the minimum viable mastery system for the first production version.

## Core idea

Progress and mastery should not be the same thing.

- Progress answers: “Did the learner touch and finish this lesson?”
- Mastery answers: “How ready is the learner on this objective or skill?”

## Launch mastery states

For objectives:

- `unseen`
- `exposed`
- `partial`
- `guided`
- `independent`
- `review_required`

For Python bridge skills:

- `not_started`
- `emerging`
- `usable_with_guidance`
- `usable_independently`

## Signals that update mastery

- lesson completion
- quick-check results
- scenario-check results
- debug/code-check results
- confidence rating
- needs-review flags
- repeated failures
- successful retry after remediation
- imported practice logger outcomes later

## Confidence overlay

Track confidence separately from correctness:

- `low`
- `medium`
- `high`

Important flags:

- low confidence + correct = fragile mastery
- high confidence + incorrect = misconception risk

## Weakness scoring

Each objective should carry a weakness score driven by:

- incorrect attempts
- review flags
- repeated hint use
- time spent without completion
- confidence mismatch

Recommended bands:

- `stable`
- `watch`
- `weak`
- `priority_remediation`

## Readiness scores

The platform should maintain:

- `python_readiness_score`
- `foundry_readiness_score`
- `ai901_exam_readiness_score`

These should be heuristic and clearly labeled as estimates, not guarantees.

## Recommendation rules

### Move forward when

- prerequisite lesson progress is complete
- minimum mastery state for required skills is met
- no `priority_remediation` blocker exists for hard prerequisites

### Hold and remediate when

- learner has repeated incorrect attempts
- objective state falls to `review_required`
- learner confidence remains low on critical implementation lessons

## Review queue rules

Create a review item when any of these occur:

- incorrect attempt on a launch-critical objective
- learner marks `needs_review`
- high confidence + incorrect
- repeated hint usage without success

## Minimum viable mastery answer

The minimum viable mastery model at launch is:

- lesson completion tracking
- objective mastery states
- confidence overlay
- weak-area review queue
- three readiness scores

That is enough to drive tutoring and sequencing without requiring a complex psychometric engine.
