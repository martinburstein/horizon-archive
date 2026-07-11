# App Feature Backlog

## Launch Critical

- Objective-to-lesson navigator
  - Why it matters: lets the app render a source-backed curriculum path instead of a static chapter list.
  - Source support needed: objective map, lesson map, source map.
  - Data model touched: objective, chapter, module, lesson, recommendation.
  - Area: product

- Lesson viewer with provenance labels
  - Why it matters: learners must see whether content is source-grounded, bridge content, or gap-limited.
  - Source support needed: source mode, source ids, citation rules.
  - Data model touched: lesson, citation record, source fragment.
  - Area: content

- Beginner Python bridge lane
  - Why it matters: zero-Python learners otherwise fail before Foundry material becomes usable.
  - Source support needed: prerequisite map, bridge references.
  - Data model touched: lesson, activity, progress record.
  - Area: content

- Objective mastery tracker
  - Why it matters: AI-901 readiness has to be visible by objective, not just by chapter.
  - Source support needed: AI-901 objective map.
  - Data model touched: objective, mastery record, attempt record.
  - Area: product

- Weak-area review queue
  - Why it matters: supports remediation instead of one-pass consumption.
  - Source support needed: objective map, assessment outputs, practice logger import later.
  - Data model touched: review item, weakness tag, recommendation.
  - Area: product

- Tutor with source-grounded and hint modes
  - Why it matters: the learning platform needs interactive help without losing provenance discipline.
  - Source support needed: lesson context, source map, tutor model.
  - Data model touched: tutor turn, citation record, learner state.
  - Area: tutor

- Lesson-level confidence and needs-review capture
  - Why it matters: subjective confidence is a strong signal for remediation and tutor routing.
  - Source support needed: none beyond lesson map.
  - Data model touched: progress record, note, review flag.
  - Area: product

- Source gap warnings for Foundry-heavy lessons
  - Why it matters: prevents hallucinated detail where official local captures are missing.
  - Source support needed: source-gap remediation plan.
  - Data model touched: lesson, source, citation record.
  - Area: infrastructure

- Resume state and checkpoint bookmarks
  - Why it matters: this course is long and implementation-heavy.
  - Source support needed: lesson sequence.
  - Data model touched: learner state, session log.
  - Area: product

## Launch Valuable

- Dashboard with next recommended lesson
- Objective coverage panel
- Foundry readiness score
- Python readiness score
- Exam-readiness estimate
- Reflection notes panel
- Review-plan export
- Practice-assessment log import
- Scenario-based micro-assessments
- Portal workflow ordering checks
- Debug-the-code checks
- Adaptive remediation recommendations
- Capstone readiness checkpoint

## Later Enhancement

- Tutor “ask from this lesson only” filter UI
- Tutor “ask from all sources” filter UI
- Inline glossary
- Flashcard seed export
- Source evidence drawer
- Progress celebration moments
- Personalized study calendar
- Misconception taxonomy dashboard
- Weak-skill heatmap
- Printable review packets

## Stretch / Research

- Offline-first study mode
- Live Azure sandbox integration
- Annotated portal screenshot mode
- Multi-agent tutor behaviors
- Voice tutor mode
- Cross-device synchronization

## Blocked By Missing Source Capture

- High-confidence Foundry portal walkthroughs
- High-confidence SDK-specific implementation details
- High-confidence official Agent Service depth
- High-confidence official Content Understanding product detail

## Launch boundary answer

The launch product should be a source-aware lesson platform with tutoring, progress, mastery, and remediation. It does not need polished capstone generation, live Azure execution, or advanced analytics on day one.
