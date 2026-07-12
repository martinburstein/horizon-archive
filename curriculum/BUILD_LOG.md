# Build Log

## Log entry: 2026-05-29T16:26:59-04:00

Stage: 0 - Initialize workspace
Action: Confirmed project root and Knowledge Repository, ensured curriculum scaffolding exists.
Files touched:
- curriculum/BUILD_STATUS.md
- curriculum/BUILD_LOG.md
Validation:
- curriculum scaffolding: pass
Next step: Stage 1 inventory
Notes: Knowledge Repository exists and was treated as read-only evidence.

## Log entry: 2026-05-29T16:26:59-04:00

Stage: 1 - Inventory the Knowledge Repository
Action: Scanned the repository, classified relevant files, built the source inventory, source map, duplicate report, and missing-materials report.
Files touched:
- curriculum/source-inventory.md
- curriculum/source-map.json
- curriculum/validation/missing-materials-report.md
- curriculum/validation/duplicate-source-report.md
Validation:
- inventory + source map: pass
Next step: Stage 2 objective extraction
Notes: Unknown or incomplete sources were explicitly recorded instead of ignored.

## Log entry: 2026-05-29T16:26:59-04:00

Stage: 2 - Extract and normalize AI-901 objectives
Action: Normalized AI-901 domains and objective IDs from the study guide and mapped them to local evidence where available.
Files touched:
- curriculum/ai901-objective-map.json
Validation:
- objective map: pass
Next step: Stage 3 Python prerequisite map
Notes: AI-900 was not treated as target authority.

## Log entry: 2026-05-29T16:26:59-04:00

Stage: 3 - Build the Python prerequisite map
Action: Mapped zero-Python skills to Azure and Foundry readiness and tied them to AI-901 objectives.
Files touched:
- curriculum/python-prerequisite-map.json
Validation:
- prerequisite map: pass
Next step: Stage 4 skill progression
Notes: JSON, HTTP, secrets, and SDK readiness were placed before implementation-heavy work.

## Log entry: 2026-05-29T16:26:59-04:00

Stage: 4 - Build the skill progression
Action: Created introduction, reinforcement, and mastery timing for each prerequisite skill.
Files touched:
- curriculum/skill-progression.json
Validation:
- skill progression: pass
Next step: Stage 5 curriculum skeleton
Notes: Dependencies were constrained so Foundry skills do not appear before data and API basics.

## Log entry: 2026-05-29T16:26:59-04:00

Stage: 5 - Generate the master curriculum skeleton
Action: Created the six-chapter skeleton in markdown and JSON plus chapter outline files.
Files touched:
- curriculum/curriculum-skeleton.md
- curriculum/curriculum-skeleton.json
- curriculum/chapters/*.json
Validation:
- chapter files: pass
Next step: Stage 6 schemas
Notes: Chapter 5 received the heaviest implementation emphasis.

## Log entry: 2026-05-29T16:26:59-04:00

Stage: 6 - Create JSON schemas
Action: Generated app-ready schema stubs for all required JSON artifacts.
Files touched:
- curriculum/schemas/*.json
Validation:
- schema files exist: pass
Next step: Stage 7 coverage validation
Notes: Schemas were kept intentionally simple and consumable.

## Log entry: 2026-05-29T16:26:59-04:00

Stage: 7 - Validate AI-901 coverage
Action: Generated human-readable and machine-readable coverage reports.
Files touched:
- curriculum/validation/coverage-validation-report.md
- curriculum/validation/ai901-domain-coverage.json
Validation:
- coverage report: pass
Next step: Stage 8 build plan
Notes: Missing local Foundry authority captures were documented as gaps.

## Log entry: 2026-05-29T16:26:59-04:00

Stage: 8 - Create human-readable Codex build plan
Action: Created the next-session build plan for objective-to-lesson expansion.
Files touched:
- curriculum/codex-build-plan.md
Validation:
- build plan: pass
Next step: Stage 9 final validation
Notes: The plan preserves source and curriculum separation.

## Log entry: 2026-05-29T16:26:59-04:00

Stage: 9 - Final validation and summary
Action: Validated artifact existence, JSON syntax, and wrote the final summary and status updates.
Files touched:
- curriculum/validation/schema-validation-report.md
- curriculum/validation/final-build-summary.md
- curriculum/BUILD_STATUS.md
- curriculum/BUILD_LOG.md
Validation:
- final artifact check: pass
Next step: Complete current build session
Notes: The session finished with explicit source-gap documentation and shorter-than-requested elapsed time noted.

## Log entry: 2026-07-11T18:20:05-04:00

Stage: Reference concept lesson implementation
Action: Built complete source-grounded `L-02-01` package for AI workload matching, including the spoiler-safe Terminal source/output/evidence retrieval bridge, deterministic exercise data, validation script, progressive remediation, and spaced review.
Files touched:
- curriculum/lessons/L-02-01/*
- curriculum/objective-to-lesson-map.json
- curriculum/sources/current-official-source-register.md
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- official AI-901 guide and all four priority Foundry/Azure sources checked: pass
- official Language, Speech, and Vision workload sources checked: pass
- lesson/activity/assessment schema contracts: pass
- exercise JSON and deterministic self-test: pass
Next step: Exercise Agent should implement `EX-L0201-WORKLOAD-SORT` with the documented session and evidence contracts.
Notes: Terminal persistence behavior is explicitly labeled bridge instruction, not Microsoft product behavior. No gameplay code changed.

## Log entry: 2026-05-29T20:45:00-04:00

Stage: Follow-up planning layer expansion
Action: Expanded the curriculum skeleton into a lesson-system planning layer with mapping, schemas, tutor behavior, backlog, data model, mastery model, lab roadmap, gap plan, UX requirements, and generation-readiness gating.
Files touched:
- curriculum/objective-to-lesson-map.json
- curriculum/lesson-type-system.md
- curriculum/lesson-template-schema.json
- curriculum/activity-template-schema.json
- curriculum/assessment-template-schema.json
- curriculum/tutor-interaction-model.md
- curriculum/app-feature-backlog.md
- curriculum/data-model-blueprint.md
- curriculum/progress-and-mastery-model.md
- curriculum/foundry-lab-roadmap.md
- curriculum/source-gap-remediation-plan.md
- curriculum/accessibility-and-ux-requirements.md
- curriculum/validation/lesson-generation-readiness.md
Validation:
- planning-layer artifacts created: pass
- new JSON artifacts parse successfully: pass
Next step: Prototype one reference lesson package per core lesson type before broad lesson generation.
Notes: This pass intentionally stayed at architecture and systems depth rather than generating polished lessons.

## Log entry: 2026-07-12T01:05:06-04:00

Stage: Final reference-pattern implementation
Action: Built complete source-grounded `L-05-07` package for schema-driven multimodal information extraction using a spoiler-safe Drowned Archive evidence packet, explicit null preservation, field provenance, Python file/JSON practice, and deterministic offline validation.
Files touched:
- curriculum/lessons/L-05-07/*
- curriculum/objective-to-lesson-map.json
- curriculum/sources/current-official-source-register.md
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- live AI-901 guide and all four priority Foundry/Azure sources checked: pass
- current Content Understanding overview, analyzer reference, REST/SDK quickstart, and Azure Vision retirement warning checked: pass
- lesson/activity/assessment schema contracts: pass
- three-modality evidence packet and deterministic validator positive/negative fixtures: pass
- all four reference package scripts/checks: pass
Next step: Exercise Agent should implement `EX-L0507-EVIDENCE-PACKET` from the deterministic activity contract.
Notes: The WAV and telemetry are generated bridge assets. Null preservation is course-authored evidence discipline, not a claim that the live service always returns null. No gameplay code changed.

## Log entry: 2026-07-12T01:57:09-04:00

Stage: Sequential zero-Python learner expansion
Action: Built complete `L-01-02` bridge package for strings, numbers/booleans, variables, assignment, reassignment, prediction, and visible output using the spoiler-safe route-marker Terminal hook.
Files touched:
- curriculum/lessons/L-01-02/*
- curriculum/objective-to-lesson-map.json
- curriculum/python-prerequisite-map.json
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- live AI-901 guide and all four priority Foundry/Azure sources checked for downstream alignment: pass
- lesson/activity/assessment schema contracts: pass
- primary and transfer references: 8/8 each
- quoted-number, hardcoded-output, missing-reassignment, and unsafe-shape negative fixtures: pass
- incomplete primary and transfer starters rejected: pass
- existing reference-package regression scripts: pass
Next step: Exercise Agent should implement `EX-L0102-ROUTE-MARKER`; next Teacher package in sequence is `L-01-03`.
Notes: This is generated bridge instruction, not official Microsoft product guidance. The route marker repeats human-authored output without implying understanding or renaming. No gameplay code changed.

## Log entry: 2026-07-12T03:11:39-04:00

Stage: Sequential zero-Python learner expansion
Action: Built complete `L-01-03` confidence-rebuilding package for traceback reading, misspelled-variable repair, indentation repair, and controlled rerun using a human expedition calibration copy while preserving the completed adventure route.
Files touched:
- curriculum/lessons/L-01-03/*
- curriculum/objective-to-lesson-map.json
- curriculum/python-prerequisite-map.json
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- live AI-901 guide and all four priority Foundry/Azure sources checked for downstream alignment: pass
- lesson/activity/assessment schema contracts: pass
- traceback and indentation references: 8/8 each
- real starter errors match required NameError line 2 and IndentationError line 3 diagnoses: pass
- hardcoded bypass, quoted boolean, and unrelated-edit negative fixtures: pass
- route-open, privacy, reset, compact 640x480, and accessibility contracts: pass
- existing curriculum package regression scripts: pass
Next step: Exercise Agent should implement `EX-L0103-CALIBRATION-DEBUG`; next unimplemented Teacher package in sequence is `L-02-02`.
Notes: Generated bridge instruction only. Errors belong to the human expedition copy; failures never affect the route or consume access. No gameplay code changed.

## Log entry: 2026-07-12T04:38:49-04:00

Stage: Learner-facing accessibility orientation refinement
Action: Added concise ungraded keyboard orientation and safe-dismissal language to `L-01-03`, then encoded the same boundary in the Exercise Agent contract without altering `PY-007` mastery.
Files touched:
- curriculum/lessons/L-01-03/README.md
- curriculum/lessons/L-01-03/exercise.json
- curriculum/BUILD_LOG.md
Validation:
- live AI-901 guide and all four priority Foundry/Azure sources checked: pass
- keyboard orientation explicitly excludes Tab, Shift+Tab, Escape, focus, modal, and inert concepts from mastery: pass
- Escape and visible Exit preserve the current calibration session and route-open state: pass
- `PY-007` validator, diagnosis, repair, rerun, explanation, privacy, and route-safety contracts unchanged: pass
Next step: Exercise Agent should render the orientation as concise non-diegetic help in `EX-L0103-CALIBRATION-DEBUG` without adding graded keyboard items.
Notes: This is an accessibility and usability refinement only. No AI-901 mastery gate, gameplay code, or narrative canon changed.

## Log entry: 2026-07-12T05:35:48-04:00

Stage: Sequential source-grounded learner expansion
Action: Built complete `L-02-02` responsible AI scenario package with six principle cards, guided contrasts, two six-scenario forms, four-dimension scoring, targeted remediation, and a strict transfer gate.
Files touched:
- curriculum/lessons/L-02-02/*
- curriculum/objective-to-lesson-map.json
- curriculum/sources/current-official-source-register.md
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 study guide and priority Foundry sources checked before authoring: pass
- official six-principle and Discover-Protect-Govern sources registered: pass
- all curriculum JSON parsed; lesson/activity/assessment IDs, objective, prerequisite, source IDs, and local link: pass
- scenario bank has every principle exactly once per form and valid choice keys: pass
- validator self-test and failure probes: pass
- primary reference 24/24; transfer reference 24/24; blank form correctly rejected at 0/24
- existing `L-02-01` deterministic exercise regression: pass
- `git diff --check`: pass
Next step: Exercise Agent can render `EX-L0202-RESPONSIBLE-AI`; next Teacher package in sequence is `L-02-03`.
Notes: Scenarios, distractors, and 24/24 coaching gates are course-authored and not Microsoft exam questions. No gameplay or narrative files changed.

## Log entry: 2026-07-12T06:20:28-04:00

Stage: Sequential source-grounded learner expansion
Action: Built complete `L-02-03` model-mechanics, selection, deployment, and configuration lesson with guided instruction, two eight-scenario forms, decision-plus-reason scoring, targeted remediation, and strict transfer.
Files touched:
- curriculum/lessons/L-02-03/*
- curriculum/objective-to-lesson-map.json
- curriculum/sources/current-official-source-register.md
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 guide and all required priority Foundry sources checked first: pass
- current official model endpoint, deployment type, generative concepts, and parameter sources registered: pass
- all curriculum JSON parsed; lesson/activity/assessment schema contracts: pass
- IDs, prerequisite, objective mapping, source IDs, and local source-register link: pass
- scenario forms cover mechanics, model choice, deployment, and configuration: pass
- validator self-test and negative probes: pass
- primary reference 16/16; transfer reference 16/16; blank form correctly rejected at 0/16
- existing `L-02-02` validator regression: pass
- `git diff --check`: pass
Next step: Exercise Agent can render `EX-L0203-MODEL-DEPLOYMENT-CHOICES`; Teacher Agent should await the next approved dependency-safe lesson.
Notes: Instant access is explicitly labeled preview and all volatile model, SKU, region, quota, price, and parameter details require revalidation. No gameplay or narrative files changed.

## Log entry: 2026-07-12T07:07:21-04:00

Stage: Sequential Python bridge expansion
Action: Confirmed no mapped `L-02-04`, then built the next mapped lesson, `L-03-01`, as a complete two-form lab for lists, dictionaries, nested access, JSON parsing/serialization, prediction, remediation, and anti-hardcoding validation.
Files touched:
- curriculum/lessons/L-03-01/*
- curriculum/objective-to-lesson-map.json
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 guide and all four required priority Foundry sources checked first: pass
- all curriculum JSON parsed; lesson/activity/assessment schema contracts: pass
- IDs, prerequisite, skill coverage, source references, and objective-map alignment: pass
- validator self-test and anti-bypass probes: pass
- primary reference 8/8; transfer reference 8/8; incomplete starters correctly rejected at 3/8
- existing `L-02-03` validator regression: pass
- `git diff --check`: pass
Next step: Exercise Agent can render `EX-L0301-STRUCTURED-PACKETS`.
Notes: This lesson is course-authored Python bridge instruction. Future SDK objects, service payloads, endpoints, and API versions remain volatile and require revalidation. No gameplay or narrative files changed.

## Log entry: 2026-07-12T07:50:31-04:00

Stage: Sequential Python bridge expansion
Action: Built exactly one next mapped lesson, `L-03-02`, as a complete two-form coding lab for small functions, loops, if/else boundaries, accumulators, returns, and reusable behavior on unseen inputs.
Files touched:
- curriculum/lessons/L-03-02/*
- curriculum/objective-to-lesson-map.json
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 guide and all four required priority Foundry sources checked first: pass
- all curriculum JSON parsed; lesson/activity/assessment schema contracts: pass
- IDs, prerequisite, skill coverage, source references, map alignment, and local link: pass
- validator self-test, boundary probes, unseen-input reuse, input-preservation, and anti-bypass checks: pass
- primary reference 8/8; transfer reference 8/8; incomplete starters correctly rejected at 2/8
- existing `L-03-01` validator regression: pass
- `git diff --check`: pass
Handoff: Exercise Agent can render `EX-L0302-CONTROL-FLOW`.
Notes: This is course-authored Python bridge instruction. Future Foundry SDK versions, service schemas, endpoints, and runtime requirements remain volatile. No gameplay or narrative files changed.

## Log entry: 2026-07-12T08:32:50-04:00

Stage: Sequential Python-to-Foundry bridge expansion
Action: Built exactly one next mapped lesson, `L-03-03`, as a complete offline bridge connecting imports, packages/environments, JSON files, environment-backed secrets, HTTP request parts, response concepts, and safe redacted output.
Files touched:
- curriculum/lessons/L-03-03/*
- curriculum/objective-to-lesson-map.json
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 guide and all four required priority Foundry sources checked first: pass
- official SDK/package/authentication/endpoint alignment: pass
- all curriculum JSON parsed; lesson/activity/assessment schema contracts: pass
- IDs, prerequisite, skill coverage, source references, map alignment, and local link: pass
- validator self-test, hidden-config reuse, missing-secret rejection, offline constraint, and credential-redaction probes: pass
- primary reference 10/10; transfer reference 10/10; retrieval reference 4/4
- unfinished starters correctly rejected at 4/10 each; blank retrieval correctly rejected at 0/4
- existing `L-03-02` validator regression: pass
- `git diff --check`: pass
Handoff: Exercise Agent can render `EX-L0303-CLIENT-BRIDGE`.
Notes: No live network call occurs and no credential is stored or printed. Package versions, SDK choices, endpoints, identity flows, roles, API versions, and runtime requirements remain volatile. No gameplay or narrative files changed.

## Log entry: 2026-07-12T09:11:37-04:00

Stage: Sequential AI-901 workload expansion
Action: Built exactly one next mapped lesson, `L-04-01`, with source-grounded text-analysis instruction, guided contrasts, primary and transfer scenarios, document-ID/result/error flow, remediation, and strict deterministic readiness.
Files touched:
- curriculum/lessons/L-04-01/*
- curriculum/objective-to-lesson-map.json
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 guide and all required priority Foundry sources checked first: pass
- current Azure Language capability alignment and keyword/key-phrase terminology bridge: pass
- all curriculum JSON parsed; lesson/activity/assessment schema contracts: pass
- IDs, prerequisites, objective/skill coverage, official sources, map alignment, and local link: pass
- scenario forms each cover four required techniques plus two client-flow items: pass
- validator self-test and misconception probes: pass
- primary reference 12/12; transfer reference 12/12; blank form correctly rejected at 0/12
- existing `L-03-03` validator regression: pass
- `git diff --check`: pass
Handoff: Exercise Agent can render `EX-L0401-TEXT-ANALYSIS`.
Notes: Scenarios and gates are course-authored; no live service call occurs. SDK packages, operation names, endpoints, authentication, supported languages, limits, regions, pricing, and preview status remain volatile. No gameplay or narrative files changed.

## Log entry: 2026-07-12T09:50:55-04:00

Stage: Sequential AI-901 workload expansion
Action: Built exactly one next mapped lesson, `L-04-02`, with source-grounded speech instruction, guided direction contrasts, primary and transfer scenarios, audio-file input/output handling, cancellation safeguards, remediation, and strict deterministic readiness.
Files touched:
- curriculum/lessons/L-04-02/*
- curriculum/objective-to-lesson-map.json
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 guide and all required priority Foundry sources checked first: pass
- current Azure Speech capability alignment: pass
- all curriculum JSON parsed; lesson/activity/assessment schema contracts: pass
- IDs, prerequisites, objective/skill coverage, official sources, map alignment, and local link: pass
- each form covers recognition, synthesis, multimodal spoken prompts, and three client-flow items: pass
- validator self-test and recognition/synthesis plus cancellation failure probes: pass
- primary reference 12/12; transfer reference 12/12; blank form correctly rejected at 0/12
- existing `L-04-01` validator regression: pass
- `git diff --check`: pass
Handoff: Exercise Agent can render `EX-L0402-SPEECH-WORKLOADS`.
Notes: No audio capture/playback or live service call occurs. SDKs, API shapes, endpoints, authentication, languages, voices, formats, regions, quotas, pricing, and preview status remain volatile. No gameplay or narrative files changed.

## Log entry: 2026-07-12T10:36:32-04:00

Stage: Sequential AI-901 workload expansion
Action: Built exactly one next mapped lesson, `L-04-03`, with source-grounded visual workload instruction, guided contrasts, primary and transfer scenarios, media validation, output-shape safeguards, remediation, and strict deterministic readiness.
Files touched:
- curriculum/lessons/L-04-03/*
- curriculum/objective-to-lesson-map.json
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 guide and all required priority Foundry sources checked first: pass
- current Azure Vision direction and Image Analysis 4.0 deprecation note: pass
- all curriculum JSON parsed; lesson/activity/assessment schema contracts: pass
- IDs, prerequisites, objective/skill coverage, official sources, map alignment, and local link: pass
- each form covers four visual workload patterns plus two client safeguards: pass
- validator self-test and analysis/generation plus output-shape failure probes: pass
- primary reference 12/12; transfer reference 12/12; blank form correctly rejected at 0/12
- existing `L-04-02` validator regression: pass
- `git diff --check`: pass
Handoff: Exercise Agent can render `EX-L0403-VISUAL-WORKLOADS`.
Notes: No media or live service call occurs. Current models, SDKs, operations, endpoints, authentication, formats, regions, quotas, pricing, deprecations, and preview status remain volatile. No gameplay or narrative files changed.

## Log entry: 2026-07-12T11:13:46-04:00

Stage: Sequential AI-901 workload expansion
Action: Built exactly one next mapped lesson, `L-04-04`, with source-grounded multimodal extraction instruction, guided contrasts, primary and transfer scenarios, analyzer-schema and missing-value safeguards, remediation, and strict deterministic readiness.
Files touched:
- curriculum/lessons/L-04-04/*
- curriculum/objective-to-lesson-map.json
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 guide and all required priority Foundry sources checked first: pass
- current Content Understanding overview and analyzer reference alignment: pass
- all curriculum JSON parsed; lesson/activity/assessment schema contracts: pass
- IDs, prerequisites, objective/skill coverage, official sources, map alignment, and local link: pass
- each form covers four extraction modalities plus schema and missing-value integrity items: pass
- validator self-test and vision-versus-extraction plus invented-value failure probes: pass
- primary reference 12/12; transfer reference 12/12; blank form correctly rejected at 0/12
- existing `L-04-03` validator regression: pass
- `git diff --check`: pass
Handoff: Exercise Agent can render `EX-L0404-EXTRACTION-WORKLOADS`.
Notes: No source media or live service call occurs. Analyzer schemas, field types, formats, languages, SDK/REST operations, API versions, limits, regions, pricing, and preview/deprecation status remain volatile. No gameplay or narrative files changed.

## Log entry: 2026-07-12T11:41:01-04:00

Stage: Sequential Microsoft Foundry implementation expansion
Action: Built exactly one next mapped lesson, `L-05-01`, as an offline portal orientation covering access, project scope, capability-fit model choice, named deployment, provisioning readiness, bounded interaction, connection details, and safe cleanup.
Files touched:
- curriculum/lessons/L-05-01/*
- curriculum/objective-to-lesson-map.json
- curriculum/sources/current-official-source-register.md
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 guide and all required priority Foundry sources checked first: pass
- current Foundry resource/project/model-deployment quickstart alignment: pass
- all curriculum JSON parsed; lesson/activity/assessment schema contracts: pass
- IDs, prerequisites, objective/skill coverage, official sources, map alignment, and local link: pass
- each form covers all eight portal checkpoints including access and cleanup safeguards: pass
- validator self-test and catalog-versus-deployment plus destructive-cleanup probes: pass
- primary reference 16/16; transfer reference 16/16; blank form correctly rejected at 0/16
- existing `L-04-04` validator regression: pass
- `git diff --check`: pass
Handoff: Exercise Agent can render `EX-L0501-PORTAL-ORIENTATION`.
Notes: No Azure resource is created, deployed, prompted, shared, or deleted. Portal labels/navigation, roles, model availability, regions, deployment options, quotas, pricing, endpoints, preview status, and deprecations remain volatile. No gameplay or narrative files changed.
