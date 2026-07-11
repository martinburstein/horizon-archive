# Codex Hour-Plus Follow-Up

## Purpose

This file is a direct handoff to a future Codex session.

The next working session should spend at least 60 focused minutes expanding the AI-901 training platform plan from a curriculum skeleton into a build-ready product blueprint. The goal is not to generate final lessons yet. The goal is to think ahead aggressively, identify every likely feature surface, and remove ambiguity before implementation accelerates.

## Current project state

- The source corpus is assembled in `Knowledge Repository/`.
- The curriculum skeleton is assembled in `curriculum/`.
- AI-901 remains the target authority.
- AI-900 remains supporting foundation only.
- Microsoft Learn path material is available locally, though some captured units are still incomplete.
- Foundry implementation should receive heavier emphasis than pure concept review.

## Mission for the next long session

Take the current skeleton and turn it into a true product-and-curriculum systems plan:

1. Expand the curriculum architecture from chapter level to lesson-system level.
2. Map every probable application feature to source evidence, learner need, and data shape.
3. Identify every object model the app will eventually need.
4. Define what must exist before lesson generation starts.
5. Separate must-have launch features from later enhancements.
6. Preserve strict source-vs-generated-content boundaries.

## Non-negotiable constraints

- Do not overwrite `Knowledge Repository/` with generated curriculum.
- Do not present AI-900 as the governing exam.
- Do not invent Microsoft source claims.
- Do not generate polished lessons unless the user explicitly asks for that phase.
- Do not create copyrighted source replicas beyond what is already locally captured.
- Keep provenance visible.

## Follow-up outputs to produce during the next session

Create or update the following if they do not already exist:

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

If a better naming convention emerges, keep it consistent and document the rename.

## Primary planning areas

### 1. Curriculum structure features

Think through:

- chapter to module to lesson to activity hierarchy
- lesson prerequisites
- mastery checkpoints
- bridge lessons for zero-Python learners
- AI-900 foundation insertion points
- AI-901 objective coverage visibility
- beginner remediation routes
- acceleration routes for experienced learners
- capstone sequencing
- Foundry-first implementation lane
- concept-first lane
- mixed review lane
- exam-cram lane
- weak-area recovery lane

### 2. Lesson system features

Think through every lesson type the platform may need:

- concept lesson
- walkthrough lesson
- bridge lesson
- coding micro-lab
- portal navigation lab
- compare-and-choose scenario lesson
- misconception correction lesson
- vocabulary drill lesson
- exam objective review lesson
- recap lesson
- summary lesson
- checkpoint lesson
- confidence rebuilding lesson
- recovery lesson after repeated failure
- capstone prep lesson
- mock-exam review lesson
- source-grounded explainer lesson
- invented bridge lesson with explicit label

For each lesson type, define:

- purpose
- acceptable source inputs
- generated elements allowed
- interaction style
- difficulty range
- required metadata
- assessment linkage

### 3. Tutor behavior features

Imagine the AI tutor as a real product surface. Consider:

- tone controls
- beginner mode
- concise mode
- step-by-step mode
- confidence-support mode
- strict exam-prep mode
- source-grounded answer mode
- explain-like-I’m-new mode
- “show me where this comes from” mode
- “quiz me” mode
- “walk me through code” mode
- “don’t give me the answer yet” mode
- “give me a hint” mode
- Socratic questioning mode
- misconception detection
- frustration detection
- overconfidence detection
- review recommendation behavior
- adaptive repetition behavior
- answer confidence prompting
- source citation behavior
- boundary handling when the answer is not in local sources

### 4. Assessment system features

Think beyond quizzes. Include:

- objective-aligned checks
- quick checks
- end-of-lesson checks
- end-of-module checks
- scenario-based questions
- matching exercises
- sequencing exercises
- debug-the-code exercises
- portal workflow ordering exercises
- concept comparison exercises
- confidence ratings
- self-explanation prompts
- reflection prompts
- review flags
- partial mastery states
- retry rules
- spaced review scheduling hooks
- practice assessment ingestion hooks
- wrong-answer pattern tracking
- misconception tagging

### 5. Progress tracking features

Consider:

- chapter completion
- lesson completion
- objective mastery
- topic weakness scoring
- Python readiness score
- Foundry readiness score
- confidence trend
- attempt count
- streaks
- time-on-task
- paused state
- resume state
- checkpoint bookmarks
- review queue
- “needs help” queue
- exam-readiness estimate
- source exposure coverage
- mastery by AI-901 domain
- mastery by service family
- mastery by skill type

### 6. Source and provenance features

The platform will need:

- source-to-objective linkage
- source-to-lesson linkage
- source confidence flags
- missing source warnings
- official vs supporting source labels
- generated vs source-derived labels
- traceable citations
- section-level provenance where possible
- source freshness notes
- incomplete source flags
- source gap impact notes
- rules for what the tutor may say when source evidence is thin

### 7. Foundry implementation features

Because AI-901 heavily emphasizes implementation, think in detail about:

- portal onboarding
- model deployment concepts
- endpoints mental model
- SDK mental model
- prompt design labs
- single-agent setup walkthroughs
- text solution flow
- speech solution flow
- vision solution flow
- image generation flow
- information extraction flow
- Content Understanding flow
- secrets and environment variable hygiene
- safe mock credentials
- pseudo-live examples when real resources are unavailable
- local simulation mode
- portal screenshot annotation plan if ever added later
- lightweight code samples
- common failure mode explanations
- dependency installation help
- response parsing help

### 8. Python bridge features

Do not assume the learner is ready. Think through:

- first run setup
- terminal comfort
- file navigation basics
- print debugging
- variables
- strings
- numbers
- booleans
- if statements
- loops
- lists
- dictionaries
- functions
- imports
- pip/package basics
- reading JSON
- writing tiny API call scripts
- environment variables
- file input/output
- error interpretation
- copy/paste safe code blocks
- typo resilience guidance
- “why this matters for Azure AI” framing for every skill

### 9. UX and product features

Think like a platform designer:

- dashboard
- next lesson recommendation
- resume last session
- weak-area panel
- objective coverage panel
- chapter map
- lesson breadcrumbs
- collapsible source references
- inline glossary
- code sandbox or copy block behavior
- note-taking panel
- review queue panel
- exam readiness panel
- tutor chat sidebar
- “ask from this lesson only” filter
- “ask from all sources” filter
- source evidence drawer
- progress celebration moments
- calm failure states
- beginner-safe empty states
- mobile readability
- desktop multi-pane layout
- printing/export needs

### 10. Accessibility features

Think of:

- keyboard navigation
- screen-reader-friendly structure
- contrast safety
- dyslexia-friendly formatting considerations
- motion reduction
- caption-ready media assumptions
- code block readability
- table readability
- semantic heading hierarchy
- plain-language mode
- jargon explanation toggles

### 11. Data model features

The app will likely need entities such as:

- source
- source fragment
- objective
- domain
- chapter
- module
- lesson
- activity
- assessment item
- review item
- flashcard seed
- learner profile
- learner state
- progress record
- mastery record
- session log
- attempt record
- note
- review flag
- weakness tag
- recommendation
- tutor turn
- citation record
- lab configuration

For each likely entity, define:

- unique id
- parent relationships
- source provenance fields
- status fields
- timestamps
- user-facing labels
- machine-facing fields

### 12. Search and retrieval features

The eventual tutor and app will likely need:

- objective search
- glossary search
- source search
- lesson search
- weak-area search
- keyword lookup
- Azure service lookup
- Foundry concept lookup
- exact-source citation retrieval
- blended retrieval across source and generated artifacts with guardrails

### 13. Validation and safety features

Think about:

- citation-required responses
- unsupported claim detection
- stale source warnings
- generated-content labeling
- low-confidence answer handling
- missing-source escalation
- hallucination reduction patterns
- exam objective drift checks
- duplicate lesson detection
- overlap detection between lessons
- prerequisite regression checks

### 14. Import and export features

Possible needs:

- export progress
- export review notes
- export weak topics
- export objective coverage
- export flashcard seeds
- export study session logs
- import practice logger outputs
- import user notes
- import manually captured Foundry docs later

### 15. Analytics features

Potentially useful:

- most-missed objectives
- lessons with highest confusion
- skills that block later success
- time spent by chapter
- confidence vs correctness mismatch
- content gaps by objective
- tutor request categories
- source usage frequency
- review queue growth

### 16. Authoring workflow features

Future Codex sessions may need:

- source-to-lesson drafting workflow
- lesson review workflow
- provenance audit workflow
- schema validation workflow
- chapter expansion workflow
- remediation lesson workflow
- assessment generation workflow
- tutor prompt pack workflow

## Recommended backlog structure

During the next session, organize the imagined features into these buckets:

- launch critical
- launch valuable
- later enhancement
- stretch / research
- blocked by missing source capture

For every feature, tag:

- why it matters
- what source support it needs
- what data model it touches
- whether it is content, product, tutor, or infrastructure

## Questions the next session should answer

- What is the exact lesson granularity for the first production version?
- How many lesson types are truly needed at launch?
- What is the minimum viable mastery model?
- How should invented bridge content be labeled in the learner experience?
- What is the right balance between source quotation, paraphrase, and generated explanation?
- How should the tutor behave when a user asks beyond the local corpus?
- What is the minimum Foundry simulation plan if live Azure resources are unavailable?
- How should AI-900 practice logger data connect to AI-901 remediation?
- What must be true before any lesson generation begins?

## Deliverable expectations for the next session

The next session should leave behind:

- concrete schemas, not just ideas
- prioritized backlogs, not just brainstorming
- lesson architecture, not prose lessons
- data model blueprints, not vague app talk
- explicit source-gap handling, not silent assumptions
- clear launch boundaries

## Stretch thinking prompts

If time remains after the core work:

- design a tutor state machine
- define adaptive lesson recommendation rules
- define a source citation object model
- define a learner misconception taxonomy
- define review scheduling logic
- define capstone project archetypes
- define role-based modes such as learner, tutor, builder, reviewer
- define offline-first possibilities
- define future integration points with practice assessment logs

## Session discipline

The next Codex session should:

- start by reading this file, the build contract, and the current curriculum outputs
- log progress as it works
- prefer structured artifacts over freeform notes
- keep each new file scoped and machine-usable where possible
- end with a readiness summary for lesson-generation phase

## Finish line for the hour-plus session

A strong finish looks like this:

- the project has a feature-complete planning layer
- the curriculum system is decomposed into app-ready objects
- the tutor behaviors are specified
- the assessment and mastery model are outlined
- the launch-vs-later split is clear
- source gaps are explicitly connected to product risk
- the next implementation session can begin building, not guessing
