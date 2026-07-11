# Codex Build Contract: AI-901 Training Platform Curriculum Skeleton

## Status

This file is an operational directive for Codex.

It replaces the earlier research prompt. Do not treat this as a brainstorming request. Treat it as a long-form build session contract.

## Mission

Build the first complete **curriculum skeleton** for the Azure AI / AI-901 training platform by inspecting the full local `Knowledge Repository/` folder and producing structured, app-ready planning artifacts.

The curriculum must build the learner from:

```text
zero Python experience
→ first real Python code
→ basic Python data and control flow
→ debugging and structured data
→ files, JSON, packages, APIs, SDKs, and endpoints
→ prompts, agents, Content Understanding, and Foundry workflows
→ AI-901 exam mastery
```

The AI-901 exam is the north star. AI-900 is supporting foundation only.

The output of this work session is **not** a finished course. The output is the scaffolding that future lesson generation will use.

## Minimum work-session requirement

You must allocate **at least one uninterrupted hour of focused work** to this task.

Do not stop after producing a partial outline.
Do not stop after only scanning the repository.
Do not stop after only creating one markdown file.
Do not stop after only creating JSON schemas.
Do not stop until all required artifacts exist and pass validation.

If the required artifacts are completed before one hour has elapsed, continue using the remaining time for:

1. validation hardening,
2. source coverage checks,
3. duplicate detection,
4. schema cleanup,
5. missing-materials analysis,
6. objective-to-source mapping improvements,
7. JSON consistency fixes,
8. final documentation improvements.

If the environment imposes a shorter execution limit, use the full available time, save progress continuously, and clearly record what remains incomplete in `curriculum/BUILD_STATUS.md` and `curriculum/validation/final-build-summary.md`.

## Non-negotiable completion condition

This task is complete only when all of the following exist:

```text
curriculum/
  BUILD_STATUS.md
  BUILD_LOG.md
  source-inventory.md
  source-map.json
  ai901-objective-map.json
  python-prerequisite-map.json
  skill-progression.json
  curriculum-skeleton.md
  curriculum-skeleton.json
  codex-build-plan.md
  schemas/
    source-map.schema.json
    ai901-objective-map.schema.json
    python-prerequisite-map.schema.json
    skill-progression.schema.json
    curriculum-skeleton.schema.json
    chapter-outline.schema.json
  chapters/
    chapter-01-python-bridge.json
    chapter-02-ai-foundations-and-responsible-ai.json
    chapter-03-python-data-logic-and-structured-inputs.json
    chapter-04-azure-ai-services-text-speech-vision.json
    chapter-05-foundry-endpoints-sdk-agents-content-understanding.json
    chapter-06-ai901-mastery-and-azure-readiness-capstone.json
  validation/
    coverage-validation-report.md
    missing-materials-report.md
    duplicate-source-report.md
    ai901-domain-coverage.json
    schema-validation-report.md
    final-build-summary.md
```

If a file cannot be completed, create it anyway with a clear `status: incomplete` field or section and explain exactly what is missing and why.

## Repository assumptions

The local source folder is expected to be named:

```text
Knowledge Repository/
```

It contains the source corpus, including some or all of:

- AI-900 homepage
- AI-900 study guide
- AI-900 official practice assessment materials or logger output
- AI-901 homepage
- AI-901 study guide
- Microsoft Learn path: `AI concepts for developers and technology professionals`
- Microsoft Learn path: `Get started with AI applications and agents on Azure`
- Microsoft Learn / Azure AI / Microsoft Foundry materials
- Foundry documentation captures or links
- Content Understanding documentation captures or links

Treat `Knowledge Repository/` as read-only source evidence.

Do not rewrite source files.
Do not move source files unless explicitly copying metadata into generated artifacts.
Do not mix generated curriculum into the repository.
Generated curriculum files must go into `curriculum/`.

## Core authority hierarchy

Use this authority hierarchy for all curriculum decisions:

1. **AI-901 study guide and AI-901 homepage**: target exam authority.
2. **AI-901 Microsoft Learn learning paths**: core training material.
3. **Official Microsoft Foundry / Azure AI documentation**: implementation authority.
4. **AI-900 study guide and homepage**: foundation and overlap support.
5. **AI-900 practice assessment or logger output**: diagnostic support and question-pattern insight, not target authority.
6. Any other local materials: supporting context only, clearly labeled.

## Required Foundry / Azure AI source priority

For any implementation mapping involving Microsoft Foundry, SDKs, endpoints, agents, or Content Understanding, consult and prioritize these official Microsoft sources first if present locally. If not present locally, record them as expected source references in the missing-materials report.

1. Microsoft Foundry documentation hub  
   `https://learn.microsoft.com/en-us/azure/foundry/`

2. Microsoft Foundry SDKs and Endpoints overview  
   `https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview`

3. Microsoft Foundry Agent Service overview  
   `https://learn.microsoft.com/en-us/azure/foundry/agents/overview`

4. Azure Content Understanding overview in Foundry Tools  
   `https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview`

## AI-901 target domains to enforce

The AI-901 skeleton must cover the target domains from the AI-901 study guide:

```text
Identify AI concepts and capabilities: 40–45%
Implement AI solutions by using Microsoft Foundry: 55–60%
```

The implementation half must be treated as the heavier curriculum priority.

The curriculum must cover, at minimum:

- responsible AI principles,
- generative AI model concepts,
- model selection and deployment configuration,
- AI workloads,
- text analysis,
- speech recognition and speech synthesis,
- computer vision,
- image generation,
- information extraction,
- Microsoft Foundry portal concepts,
- Foundry SDK usage,
- endpoints,
- lightweight client applications,
- prompting,
- agents,
- Content Understanding for documents/forms, images, audio, and video,
- Azure resource basics.

## Absolute scope boundaries

You must not generate full lessons yet.

Do not create:

- full instructional lesson text,
- detailed narrative scenes,
- full exercise banks,
- flashcards,
- quizzes,
- final app UI,
- React components,
- backend services,
- generated summaries of every source document,
- rewritten Microsoft Learn units,
- a polished course.

You must create:

- source inventory,
- source map,
- AI-901 objective map,
- Python prerequisite map,
- skill progression,
- chapter-level skeleton,
- JSON schemas,
- validation reports,
- build log,
- final build summary.

## Required working style

Work like a careful build agent, not like a brainstorming assistant.

For every stage:

1. state the stage in `curriculum/BUILD_LOG.md`,
2. perform the work,
3. create or update the required files,
4. validate the result,
5. record pass/fail status,
6. retry failed validation before moving on.

Use conservative claims. If a source does not support a mapping, mark it as uncertain or missing instead of inventing a connection.

Use machine-readable JSON wherever specified. Use human-readable Markdown for planning and reports.

## Required progress logging

Create `curriculum/BUILD_LOG.md` immediately.

Append to it throughout the work session using this format:

```markdown
## Log entry: <ISO timestamp>

Stage: <stage number and name>
Action: <what was done>
Files touched:
- <path>
Validation:
- <check>: pass/fail
Next step: <next step>
Notes: <important caveats>
```

Create `curriculum/BUILD_STATUS.md` immediately.

It must contain:

```markdown
# Build Status

Started: <timestamp>
Minimum intended work duration: 60 minutes
Current status: in_progress | complete | incomplete

## Required artifacts

- [ ] source inventory
- [ ] source map
- [ ] AI-901 objective map
- [ ] Python prerequisite map
- [ ] skill progression
- [ ] curriculum skeleton markdown
- [ ] curriculum skeleton JSON
- [ ] chapter outline JSON files
- [ ] JSON schemas
- [ ] validation reports
- [ ] final build summary

## Current blocker

None | <blocker>
```

Update this file after every stage.

## Stage 0 — Initialize workspace

### Inputs

- Project root.
- `Knowledge Repository/` if present.

### Actions

1. Locate the project root.
2. Locate `Knowledge Repository/`.
3. Create `curriculum/` and subfolders:

```text
curriculum/
  schemas/
  chapters/
  validation/
```

4. Create `BUILD_LOG.md`.
5. Create `BUILD_STATUS.md`.
6. Record whether `Knowledge Repository/` exists.

### Outputs

- `curriculum/BUILD_LOG.md`
- `curriculum/BUILD_STATUS.md`

### Validation gate

Pass only if:

- `curriculum/` exists,
- `curriculum/schemas/` exists,
- `curriculum/chapters/` exists,
- `curriculum/validation/` exists,
- `BUILD_LOG.md` exists,
- `BUILD_STATUS.md` exists.

If validation fails, create the missing folder or file and retry.

## Stage 1 — Inventory the Knowledge Repository

### Inputs

- `Knowledge Repository/`

### Actions

Walk the entire folder tree and identify all files relevant to:

- AI-901,
- AI-900,
- Microsoft Learn learning paths,
- Foundry,
- SDKs/endpoints,
- agents,
- Content Understanding,
- practice assessment or logger outputs.

For every discovered file, record:

- local path,
- filename,
- extension,
- inferred source group,
- inferred exam relation: `ai-901-target`, `ai-900-foundation`, `foundry-implementation`, `practice-diagnostic`, `unknown`,
- source URL if visible in file metadata or file content,
- title if extractable,
- headings if extractable,
- module/unit if applicable,
- file size,
- last modified time,
- raw/markdown/PDF/image/JSON classification,
- whether the file appears useful for curriculum mapping.

### Outputs

- `curriculum/source-inventory.md`
- preliminary `curriculum/source-map.json`
- `curriculum/validation/missing-materials-report.md`
- `curriculum/validation/duplicate-source-report.md`

### Required `source-inventory.md` structure

```markdown
# Source Inventory

## Summary

- Total files scanned:
- Relevant files identified:
- AI-901 target files:
- AI-900 foundation files:
- Foundry implementation files:
- Practice diagnostic files:
- Unknown/unclassified files:

## Source groups

### AI-901 target materials
<table or bullet list>

### AI-900 foundation materials
<table or bullet list>

### Microsoft Learn path materials
<table or bullet list>

### Foundry / Azure AI implementation references
<table or bullet list>

### Practice assessment / diagnostic materials
<table or bullet list>

### Unclassified or questionable files
<table or bullet list>
```

### Required preliminary `source-map.json` shape

```json
{
  "generated_at": "",
  "repository_root": "Knowledge Repository/",
  "status": "draft",
  "sources": [
    {
      "source_id": "",
      "title": "",
      "local_path": "",
      "source_url": "",
      "source_type": "homepage|study_guide|learn_path|module|unit|documentation|practice_assessment|logger_output|unknown",
      "exam_role": "ai-901-target|ai-900-foundation|foundry-implementation|practice-diagnostic|supporting|unknown",
      "file_format": "md|html|pdf|json|csv|png|unknown",
      "headings": [],
      "module_name": "",
      "unit_name": "",
      "relevance_notes": "",
      "confidence": "high|medium|low"
    }
  ]
}
```

### Validation gate

Pass only if:

- at least one source is recorded,
- AI-901 homepage or study guide is found or listed as missing,
- AI-900 materials are labeled as foundation, not target authority,
- Microsoft Learn paths are found or listed as missing,
- source inventory exists in Markdown,
- source map exists in JSON,
- unknown files are not silently ignored.

If validation fails, revise the inventory process and rerun Stage 1.

## Stage 2 — Extract and normalize AI-901 objectives

### Inputs

- AI-901 study guide from the Knowledge Repository.
- AI-901 homepage from the Knowledge Repository.
- `source-map.json`.

### Actions

Create a normalized AI-901 objective map. Extract the high-level domains, weights, subskills, and implementation expectations.

Use this domain structure at minimum:

```text
Domain 1: Identify AI concepts and capabilities (40–45%)
Domain 2: Implement AI solutions by using Microsoft Foundry (55–60%)
```

Within those domains, represent objectives such as:

- responsible AI,
- AI model components and configurations,
- AI workloads,
- text analysis,
- speech,
- computer vision,
- image generation,
- information extraction,
- generative AI apps and agents,
- Foundry portal,
- Foundry SDK,
- lightweight client applications,
- Content Understanding.

### Outputs

- `curriculum/ai901-objective-map.json`
- update `curriculum/curriculum-skeleton.md` if already present, or create a stub

### Required `ai901-objective-map.json` shape

```json
{
  "generated_at": "",
  "exam": "AI-901: Microsoft Azure AI Fundamentals",
  "authority": "AI-901 study guide",
  "status": "draft",
  "domains": [
    {
      "domain_id": "AI901-D1",
      "title": "Identify AI concepts and capabilities",
      "weight": "40-45%",
      "priority": "high",
      "objectives": [
        {
          "objective_id": "AI901-D1-O1",
          "title": "Describe principles of responsible AI",
          "subskills": [],
          "required_knowledge": [],
          "python_prerequisites": [],
          "source_ids": [],
          "proposed_chapters": [],
          "mastery_check_type": "conceptual|scenario|coding|portal|mixed",
          "coverage_status": "mapped|partial|missing",
          "notes": ""
        }
      ]
    }
  ]
}
```

### Validation gate

Pass only if:

- both major AI-901 domains exist,
- weights are represented,
- each domain has objectives,
- every objective has a stable `objective_id`,
- AI-900 is not listed as the authority,
- objectives are source-backed or explicitly marked as needing source support.

If validation fails, revise and rerun Stage 2.

## Stage 3 — Build the Python prerequisite map

### Inputs

- AI-901 objective map.
- Source inventory.
- Known curriculum goal: learner begins with zero Python experience.

### Actions

Create a Python prerequisite map explaining which Python skills must be learned before Azure / Foundry implementation concepts.

Include at minimum:

- running Python,
- terminal basics,
- `print()`,
- strings,
- numbers,
- booleans,
- variables,
- lists,
- dictionaries,
- conditionals,
- loops,
- functions,
- errors and debugging,
- imports,
- packages,
- virtual environments if appropriate,
- files,
- JSON,
- command line arguments if useful,
- environment variables / secrets at beginner level,
- HTTP request/response basics,
- APIs,
- SDK concepts,
- endpoint concepts,
- structured inputs and outputs.

For each prerequisite, explain why it matters for Azure / Foundry work.

### Outputs

- `curriculum/python-prerequisite-map.json`
- updates to `curriculum/skill-progression.json`

### Required `python-prerequisite-map.json` shape

```json
{
  "generated_at": "",
  "learner_starting_state": "zero Python experience",
  "target_readiness": "beginner-ready Azure AI / Microsoft Foundry programming",
  "prerequisites": [
    {
      "skill_id": "PY-001",
      "skill_name": "Run a Python file",
      "category": "environment|syntax|data|control_flow|structure|debugging|files|apis|azure_readiness",
      "why_it_matters_for_azure": "",
      "introduced_in_chapter": "",
      "reinforced_in_chapters": [],
      "supports_ai901_objectives": [],
      "mastery_level_required": "recognize|use_with_guidance|use_independently",
      "notes": ""
    }
  ]
}
```

### Validation gate

Pass only if:

- the learner can progress from no Python to SDK/endpoints without hidden prerequisites,
- JSON and HTTP/API concepts appear before SDK usage,
- functions and dictionaries appear before lightweight client apps,
- environment variables/secrets are introduced before endpoint/API key workflows,
- every Azure-readiness skill has a reason.

If validation fails, revise and rerun Stage 3.

## Stage 4 — Build the skill progression

### Inputs

- `python-prerequisite-map.json`
- `ai901-objective-map.json`

### Actions

Create a skill progression that shows when each skill is introduced, practiced, reinforced, and considered mastered.

### Outputs

- `curriculum/skill-progression.json`

### Required `skill-progression.json` shape

```json
{
  "generated_at": "",
  "progression": [
    {
      "skill_id": "PY-001",
      "skill_name": "Run a Python file",
      "introduced": "chapter-01",
      "practiced": ["chapter-01", "chapter-02"],
      "reinforced": ["chapter-03"],
      "mastery_expected_by": "chapter-03",
      "depends_on": [],
      "unlocks": ["PY-002"],
      "related_ai901_objectives": []
    }
  ]
}
```

### Validation gate

Pass only if:

- no skill is mastered before it is introduced,
- SDK/endpoints depend on JSON/API basics,
- agents depend on prompts, structured data, and Foundry concepts,
- Content Understanding depends on files, structured outputs, and Foundry concepts,
- every chapter has at least one skill introduced or reinforced.

If validation fails, revise and rerun Stage 4.

## Stage 5 — Generate the master curriculum skeleton

### Inputs

- `source-map.json`
- `ai901-objective-map.json`
- `python-prerequisite-map.json`
- `skill-progression.json`

### Actions

Create a six-chapter skeleton curriculum that moves from zero Python to AI-901 mastery.

Use this chapter structure unless a better structure is strongly justified:

```text
Chapter 1: Python Bridge — First Code and Programming Confidence
Chapter 2: AI Foundations and Responsible AI
Chapter 3: Python Data, Logic, and Structured Inputs
Chapter 4: Azure AI Services — Text, Speech, Vision, and Information Extraction
Chapter 5: Microsoft Foundry — Endpoints, SDKs, Agents, and Content Understanding
Chapter 6: AI-901 Mastery, Capstone, and Azure Readiness
```

For each chapter, include:

- chapter ID,
- title,
- role in curriculum,
- learner starting state,
- learner ending state,
- AI-901 objectives supported,
- Python skills introduced,
- Python skills reinforced,
- Azure / Foundry concepts introduced,
- Knowledge Repository sources to use,
- assessment type,
- source role: `invented_bridge`, `source_adapted`, `exam_review`, or `mixed`,
- what not to include yet.

### Outputs

- `curriculum/curriculum-skeleton.md`
- `curriculum/curriculum-skeleton.json`
- six chapter JSON files in `curriculum/chapters/`

### Required chapter JSON shape

```json
{
  "chapter_id": "chapter-01",
  "title": "Python Bridge — First Code and Programming Confidence",
  "source_role": "invented_bridge|source_adapted|exam_review|mixed",
  "purpose": "",
  "learner_starting_state": "",
  "learner_ending_state": "",
  "ai901_objectives_supported": [],
  "python_skills_introduced": [],
  "python_skills_reinforced": [],
  "azure_foundry_concepts_introduced": [],
  "knowledge_repository_sources": [],
  "suggested_module_sequence": [
    {
      "module_id": "",
      "module_title": "",
      "module_purpose": "",
      "skills": [],
      "source_ids": [],
      "assessment_type": "conceptual|coding|scenario|portal|mixed"
    }
  ],
  "assessment_strategy": "",
  "do_not_generate_yet": []
}
```

### Validation gate

Pass only if:

- all six chapter files exist,
- Chapter 1 does not assume prior programming knowledge,
- Chapter 5 gives special emphasis to the heavier Foundry implementation domain,
- every AI-901 objective is mapped to at least one chapter or marked missing,
- every chapter includes source IDs or is explicitly labeled invented bridge,
- no full lessons or exercises are generated.

If validation fails, revise and rerun Stage 5.

## Stage 6 — Create JSON schemas

### Inputs

- All generated JSON files.

### Actions

Create simple JSON schema files that a future React/TypeScript app can use to validate generated curriculum data.

Create schemas for:

- `source-map.json`,
- `ai901-objective-map.json`,
- `python-prerequisite-map.json`,
- `skill-progression.json`,
- `curriculum-skeleton.json`,
- `chapter-outline.json`.

### Outputs

```text
curriculum/schemas/source-map.schema.json
curriculum/schemas/ai901-objective-map.schema.json
curriculum/schemas/python-prerequisite-map.schema.json
curriculum/schemas/skill-progression.schema.json
curriculum/schemas/curriculum-skeleton.schema.json
curriculum/schemas/chapter-outline.schema.json
```

### Validation gate

Pass only if:

- all six schema files exist,
- every schema is valid JSON,
- each schema includes required fields,
- schemas are simple enough to be app-consumable,
- generated JSON files can be manually checked against the schema structure.

If validation fails, revise and rerun Stage 6.

## Stage 7 — Validate AI-901 coverage

### Inputs

- `ai901-objective-map.json`
- `curriculum-skeleton.json`
- chapter JSON files
- `source-map.json`

### Actions

Create a coverage validation report.

Check:

1. Every AI-901 domain is represented.
2. Every AI-901 objective maps to at least one source or is marked missing.
3. Every AI-901 objective maps to at least one curriculum chapter or is marked missing.
4. Every chapter maps to AI-901 objectives or explicit Python prerequisites.
5. AI-900 materials are labeled as foundation, not target authority.
6. Foundry implementation concepts are tied to official Microsoft Foundry / Azure AI sources when available.
7. The implementation domain receives more curriculum weight than the concepts domain.
8. No unsupported source claims are present.
9. No chapter requires Python concepts that have not already been introduced.
10. No generated full lessons are present.

### Outputs

- `curriculum/validation/coverage-validation-report.md`
- `curriculum/validation/ai901-domain-coverage.json`

### Required `ai901-domain-coverage.json` shape

```json
{
  "generated_at": "",
  "overall_status": "pass|partial|fail",
  "domains": [
    {
      "domain_id": "AI901-D1",
      "title": "",
      "weight": "",
      "objectives_total": 0,
      "objectives_mapped_to_sources": 0,
      "objectives_mapped_to_chapters": 0,
      "coverage_status": "complete|partial|missing",
      "missing_objectives": []
    }
  ],
  "notes": []
}
```

### Validation gate

Pass only if:

- coverage report exists,
- domain coverage JSON exists,
- every objective is accounted for,
- gaps are explicit,
- Foundry gaps are highlighted.

If validation fails, revise the earlier maps and rerun Stage 7.

## Stage 8 — Create human-readable Codex build plan

### Inputs

- All generated maps and skeleton files.

### Actions

Create a clear build plan for the next Codex session. This plan should explain what to do after the skeleton exists.

It should include:

- recommended next task,
- what files to preserve,
- what files to edit next,
- how to begin lesson generation later,
- how to keep source material separate from generated curriculum,
- what validation to run before lesson-writing.

### Outputs

- `curriculum/codex-build-plan.md`

### Validation gate

Pass only if:

- the plan is actionable,
- the plan does not instruct Codex to write full lessons yet,
- the plan clearly states that the next phase is objective-to-lesson expansion.

If validation fails, revise and rerun Stage 8.

## Stage 9 — Final validation and summary

### Inputs

- All generated files.

### Actions

Perform final validation.

Check that every required artifact exists. Confirm whether all validation gates passed. Record incomplete items.

### Outputs

- `curriculum/validation/schema-validation-report.md`
- `curriculum/validation/final-build-summary.md`
- final update to `curriculum/BUILD_STATUS.md`
- final update to `curriculum/BUILD_LOG.md`

### Required final summary structure

```markdown
# Final Build Summary

## Overall status

complete | incomplete | partial

## Work duration

Started:
Ended:
Approximate elapsed time:
Minimum requested duration:

## Artifacts created

- [x] ...

## Validation results

- Stage 0:
- Stage 1:
- Stage 2:
- Stage 3:
- Stage 4:
- Stage 5:
- Stage 6:
- Stage 7:
- Stage 8:
- Stage 9:

## AI-901 coverage status

<summary>

## Known gaps

<list>

## Recommended next Codex task

<one concrete next task>
```

### Validation gate

Pass only if:

- final summary exists,
- build status is updated,
- all required artifacts are listed,
- missing files are not hidden,
- next task is concrete.

If validation fails, revise and rerun Stage 9.

## Retry logic

If any stage fails validation:

1. record the failure in `BUILD_LOG.md`,
2. identify the missing or invalid file,
3. revise the relevant stage output,
4. rerun the validation gate,
5. proceed only when the gate passes or the limitation is explicitly documented.

Do not silently skip failed validation.

## Coverage weighting guidance

Because AI-901 places more weight on implementing AI solutions with Microsoft Foundry than on identifying AI concepts, the curriculum skeleton should reflect this.

Suggested emphasis:

```text
Python bridge and programming readiness: 20–25%
AI concepts and responsible AI: 20–25%
Azure AI services and workloads: 20–25%
Foundry implementation, SDKs, endpoints, agents, Content Understanding: 30–40%
AI-901 review and capstone: 10–15%
```

This is not a final lesson count. It is a guidance rule for curriculum emphasis.

## Chapter-level expectations

### Chapter 1 — Python Bridge: First Code and Programming Confidence

Purpose: Invented bridge content for a learner with zero Python experience.

Must cover at skeleton level:

- running Python,
- terminal basics,
- print statements,
- strings,
- variables,
- simple errors,
- basic debugging mindset,
- why Python matters for Azure AI clients.

Must not cover:

- SDKs,
- endpoints,
- agents,
- complex APIs,
- full Azure setup.

### Chapter 2 — AI Foundations and Responsible AI

Purpose: Introduce AI concepts aligned to the AI-901 concept domain, using AI-901 and AI-900 materials.

Must cover at skeleton level:

- AI workloads,
- responsible AI,
- generative AI basics,
- model capabilities,
- model selection concepts,
- beginner Azure AI vocabulary.

### Chapter 3 — Python Data, Logic, and Structured Inputs

Purpose: Build the Python skills required before calling services or SDKs.

Must cover at skeleton level:

- lists,
- dictionaries,
- booleans,
- conditionals,
- loops,
- functions,
- errors,
- JSON,
- structured inputs and outputs.

### Chapter 4 — Azure AI Services: Text, Speech, Vision, and Information Extraction

Purpose: Connect AI workloads to Azure AI service categories.

Must cover at skeleton level:

- text analysis,
- speech recognition,
- speech synthesis,
- computer vision,
- image generation,
- information extraction,
- service/workload selection.

### Chapter 5 — Microsoft Foundry: Endpoints, SDKs, Agents, and Content Understanding

Purpose: Emphasize the implementation-heavy AI-901 domain.

Must cover at skeleton level:

- Microsoft Foundry portal concepts,
- deployment concepts,
- endpoints,
- SDKs,
- lightweight client apps,
- prompts,
- agents,
- Content Understanding for documents/forms, images, audio, and video,
- environment variables / keys at a beginner-safe level.

Prioritize official Foundry, SDK, Agent Service, and Content Understanding sources here.

### Chapter 6 — AI-901 Mastery, Capstone, and Azure Readiness

Purpose: Consolidate Python and Azure readiness; prepare for exam mastery.

Must cover at skeleton level:

- AI-901 objective review,
- weak area remediation,
- capstone structure,
- readiness checklist,
- simulated or optional Azure-style workflow,
- exam review strategy.

## Source labeling rules

Every source reference must be labeled as one of:

```text
ai-901-authority
ai-901-core-training
ai-900-foundation
ai-900-practice-diagnostic
foundry-implementation-authority
azure-ai-service-reference
supporting-reference
unknown
```

Never label AI-900 as target authority.

## Generated file quality rules

All JSON files must:

- be valid JSON,
- use stable IDs,
- avoid trailing comments,
- include `generated_at`,
- include `status`,
- include source IDs where relevant,
- avoid embedding large source excerpts.

All Markdown files must:

- have clear headings,
- distinguish complete vs incomplete sections,
- include known gaps,
- avoid pretending uncertain mappings are certain.

## Final console output

When the work session is complete, print:

```text
AI-901 curriculum skeleton build complete.

Repository scanned: <path>
Curriculum output: <path>
Overall status: <complete|partial|incomplete>
Elapsed work time: <duration>

Core artifacts:
- source inventory: <path>
- source map: <path>
- AI-901 objective map: <path>
- Python prerequisite map: <path>
- curriculum skeleton: <path>
- validation report: <path>

Known gaps:
<list>

Next recommended Codex task:
<objective-to-lesson expansion or source gap repair>
```

## Reminder

This is a build contract. Do not stop early. Do not produce only a prose answer. Create the files.
