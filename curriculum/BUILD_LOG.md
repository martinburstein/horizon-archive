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

## Log entry: 2026-07-12T12:17:32-04:00

Stage: Sequential Microsoft Foundry implementation expansion
Action: Built exactly one next mapped lesson, `L-05-02`, with source-grounded system/user/grounding/output-contract instruction, guided prompt improvement, primary and transfer scenarios, injection and destructive-action safeguards, remediation, and strict deterministic readiness.
Files touched:
- curriculum/lessons/L-05-02/*
- curriculum/objective-to-lesson-map.json
- curriculum/sources/current-official-source-register.md
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 guide and all required priority Foundry sources checked first: pass
- current prompt-engineering and system-message guidance alignment: pass
- all curriculum JSON parsed; lesson/activity/assessment schema contracts: pass
- IDs, prerequisites, objective/skill coverage, official sources, map alignment, and local link: pass
- each form covers all six prompt decisions including conflict/action safety and evaluation: pass
- validator self-test and role-confusion plus injection/destructive-action probes: pass
- primary reference 12/12; transfer reference 12/12; blank form correctly rejected at 0/12
- existing `L-05-01` validator regression: pass
- `git diff --check`: pass
Handoff: Exercise Agent can render `EX-L0502-PROMPT-LAYERS`.
Notes: No prompt is sent and no external action occurs. Model-specific roles, parameters, context limits, safety behavior, SDK/API shapes, and deprecated guidance remain volatile. No Azure mutation, gameplay, or narrative files changed.

## Log entry: 2026-07-12T12:47:18-04:00

Stage: Sequential Microsoft Foundry implementation expansion
Action: Completed the next mapped `L-05-03` reference package to the current standard by preserving its runnable mock and adding primary/transfer client-boundary assessment, Exercise Agent contract, deterministic strict gate, privacy/session/accessibility, and external/destructive-action safeguards.
Files touched:
- curriculum/lessons/L-05-03/*
- curriculum/objective-to-lesson-map.json
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 guide and all required priority Foundry sources checked first: pass
- current Foundry SDK/client/endpoint pattern alignment: pass
- all curriculum JSON parsed; lesson/activity/assessment schema contracts: pass
- IDs, prerequisites, objective/skill coverage, official sources, map alignment, and local link: pass
- existing offline mock: pass
- validator self-test and endpoint/deployment plus destructive-action probes: pass
- primary reference 12/12; transfer reference 12/12; blank form correctly rejected at 0/12 while mock remained passing
- existing `L-05-02` validator regression: pass
- `git diff --check`: pass
Handoff: Exercise Agent can render `EX-L0503-CLIENT-BOUNDARIES` while reusing `mock_client.py`.
Notes: No service call or Azure action occurs. SDK packages, client methods, endpoint shapes, authentication, roles, model/deployment names, API behavior, and deprecations remain volatile. No gameplay or narrative files changed.

## Log entry: 2026-07-12T13:23:00-04:00

Stage: Sequential Microsoft Foundry implementation expansion
Action: Completed exactly one next mapped package, `L-05-04`, as an offline source-grounded single-agent lesson with guided instruction, retrieval, primary/transfer assessment, remediation, Exercise Agent contract, strict readiness gate, and explicit action safeguards.
Files touched:
- curriculum/lessons/L-05-04/*
- curriculum/ai901-objective-map.json
- curriculum/objective-to-lesson-map.json
- curriculum/sources/current-official-source-register.md
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 guide and all required priority Foundry sources checked first: pass
- current Agent Service concepts and prompt-agent portal workflow alignment: pass
- all curriculum JSON parsed; lesson/activity/assessment schema contracts: pass
- IDs, prerequisites, objective/skill coverage, official sources, map alignment, local link, and privacy/session/accessibility/action safeguards: pass
- each form covers all six single-agent boundaries: pass
- validator self-test, tool-permission failure probe, and false-tool-success failure probe: pass
- primary reference 12/12; transfer reference 12/12; blank primary and transfer correctly rejected at 0/12
- existing `L-05-03` validator regression: pass
- `git diff --check`: pass
Handoff: Exercise Agent can render `EX-L0504-SINGLE-AGENT` as the offline portal worksheet and deterministic two-form gate.
Notes: No agent/service call, Azure mutation, gameplay, lore, or external action occurred. Portal labels, Agent Service APIs/SDKs, identity terms, tool availability, run/session concepts, models, pricing, previews, and deprecations remain volatile.

## Log entry: 2026-07-12T14:06:59-04:00

Stage: Sequential Microsoft Foundry implementation expansion
Action: Completed exactly one next mapped package, `L-05-05`, as a source-grounded offline text-and-speech solution-pattern lesson with instruction, guided practice, retrieval, deterministic primary/transfer assessment, remediation, strict readiness gate, and Exercise Agent contract.
Files touched:
- curriculum/lessons/L-05-05/*
- curriculum/ai901-objective-map.json
- curriculum/objective-to-lesson-map.json
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 guide and all required priority Foundry sources checked first: pass
- current Foundry SDK, Azure Language, and Azure Speech official alignment: pass
- all curriculum JSON parsed; lesson/activity/assessment schema contracts: pass
- IDs, prerequisites, objectives, Python skills, official sources, map alignment, local link, and privacy/session/accessibility/action safeguards: pass
- each form covers all six text-and-speech solution boundaries: pass
- validator self-test, cancellation failure probe, and unauthorized-disclosure probe: pass
- primary reference 12/12; transfer reference 12/12; blank primary and transfer correctly rejected at 0/12 with exit 1
- existing `L-05-04` validator regression: pass
- `git diff --check`: pass
Handoff: Exercise Agent can render `EX-L0505-TEXT-SPEECH-PATTERNS` as an offline scenario terminal with deterministic two-form scoring.
Notes: No service call, Azure mutation, credential use, audio capture/playback, external action, gameplay, or lore change occurred. Portal labels, SDK/API versions, endpoints, authentication, capabilities, languages, voices, formats, regions, quotas, prices, previews, and deprecations remain volatile.

## Log entry: 2026-07-12T14:47:33-04:00

Stage: Sequential Microsoft Foundry implementation expansion
Action: Completed exactly one next mapped package, `L-05-06`, as a source-grounded offline vision and image-generation solution-pattern lesson with instruction, guided practice, retrieval, deterministic primary/transfer assessment, remediation, strict readiness gate, and Exercise Agent contract.
Files touched:
- curriculum/lessons/L-05-06/*
- curriculum/ai901-objective-map.json
- curriculum/objective-to-lesson-map.json
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 guide and all required priority Foundry sources checked first: pass
- current Foundry SDK and Azure Vision official alignment: pass
- all curriculum JSON parsed; lesson/activity/assessment schema contracts: pass
- IDs, prerequisites, objectives, Python skills, official sources, map alignment, local link, and privacy/session/accessibility/action safeguards: pass
- each form covers all six visual solution boundaries: pass
- validator self-test, generated-content provenance probe, and unauthorized-publication probe: pass
- primary reference 12/12; transfer reference 12/12; blank primary and transfer correctly rejected at 0/12 with exit 1
- existing `L-05-05` validator regression: pass
- `git diff --check`: pass
Handoff: Exercise Agent can render `EX-L0506-VISUAL-PATTERNS` as an offline scenario terminal with deterministic two-form scoring and text equivalents for all visuals.
Notes: No service call, Azure mutation, credential use, media access/upload/generation/publication/deletion, external action, gameplay, or lore change occurred. Portal labels, models/capabilities, SDK/API versions, endpoints, authentication, media formats/limits, regions, quotas, prices, safety controls, previews, and deprecations remain volatile.

## Log entry: 2026-07-12T16:31:19-04:00

Stage: Sequential AI-901 mastery expansion
Action: Skipped already-complete `L-05-07` and completed exactly one first-unfinished mapped package, `L-06-01`, as a source-grounded objective-by-objective mastery review with a 15-objective evidence ledger, guided practice, retrieval, deterministic primary/transfer assessment, remediation, strict readiness gate, and Exercise Agent contract.
Files touched:
- curriculum/lessons/L-06-01/*
- curriculum/objective-to-lesson-map.json
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 study guide and all required priority Foundry sources checked first: pass
- all 15 current mapped AI-901 objectives represented exactly once per form: pass
- all curriculum JSON parsed; lesson/activity/assessment schema contracts: pass
- IDs, prerequisites, objectives, Python skills, official sources, map alignment, local link, and privacy/session/accessibility/action safeguards: pass
- validator self-test, confidence-bypass probe, and simulated-live-action probe: pass
- primary reference 30/30; transfer reference 30/30; blank primary and transfer correctly rejected at 0/30 with exit 1
- existing `L-05-06` validator regression: pass
- `git diff --check`: pass
Handoff: Exercise Agent can render `EX-L0601-OBJECTIVE-LEDGER` as an accessible objective ledger plus one-scenario-at-a-time terminal.
Notes: No service call, Azure mutation, credential use, external action, gameplay, or lore change occurred. Objective names/weights, portal labels, SDK/APIs, models, tools, regions, prices, previews, and deprecations remain volatile; review scenarios are course-authored and do not guarantee an exam result.

## Log entry: 2026-07-12T17:27:48-04:00

Stage: Sequential AI-901 mastery expansion
Action: Completed exactly one first-unfinished mapped package, `L-06-02`, as an offline weak-area remediation planner with evidence-gap diagnosis, official-source routing, retrieval/guided/fresh-transfer practice, evidence-based reassessment, strict readiness gate, and Exercise Agent contract.
Files touched:
- curriculum/lessons/L-06-02/*
- curriculum/objective-to-lesson-map.json
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 study guide and all required priority Foundry sources checked first: pass
- all curriculum JSON parsed; lesson/activity/assessment schema contracts: pass
- IDs, prerequisites, objectives, Python skills, official sources, map alignment, local link, route contract, and privacy/session/accessibility/action safeguards: pass
- each form covers all six remediation-planning boundaries: pass
- validator self-test, exam-guarantee probe, and simulated-live-action probe: pass
- primary reference 12/12; transfer reference 12/12; blank primary and transfer correctly rejected at 0/12 with exit 1
- existing `L-06-01` validator regression: pass
- `git diff --check`: pass
Handoff: Exercise Agent can render `EX-L0602-REMEDIATION-PLANNER` as an accessible weak-objective queue and route editor.
Notes: No service call, Azure mutation, credential use, external action, gameplay, or lore change occurred. The planner does not guarantee an exam result. Exam objectives/weights and Foundry portal, SDK/API, model, tool, price, preview, and deprecation details remain volatile.

## Log entry: 2026-07-12T18:22:26-04:00

Stage: Sequential AI-901 mastery expansion
Action: Completed exactly one first-unfinished mapped package, `L-06-03`, as an offline capstone and evidence-based readiness checkpoint integrating Foundry client flow, text/speech patterns, and Content Understanding with prerequisite, exam-claim, and action safeguards.
Files touched:
- curriculum/lessons/L-06-03/*
- curriculum/objective-to-lesson-map.json
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 guide and required priority Foundry/Azure AI sources checked first: pass
- all curriculum JSON parsed; lesson/activity/assessment schema contracts: pass
- IDs, prerequisites, objectives, Python skills, official sources, map alignment, local link, and privacy/session/accessibility/readiness/action safeguards: pass
- each form covers all six capstone/readiness boundaries: pass
- validator self-test, open-remediation-gap probe, and exam-guarantee/live-action probe: pass
- primary reference 12/12; transfer reference 12/12; blank primary and transfer correctly rejected at 0/12 with exit 1
- existing `L-06-02` validator regression: pass
- `git diff --check`: pass
Handoff: Exercise Agent can render `EX-L0603-OFFLINE-CAPSTONE` as an accessible capstone trace plus prerequisite/readiness gate panel.
Notes: No data/media processing, service call, Azure mutation, credential use, external action, gameplay, or lore change occurred. The output is a next-practice recommendation, never an exam guarantee. Exam scope and Foundry SDK/API/analyzer/model/capability details remain volatile.

## Log entry: 2026-07-12T19:23:48-04:00

Stage: Cumulative AI-901 readiness evidence
Action: Confirmed all 23 mapped lessons are packaged, then completed exactly one bounded learner-facing tranche, `CUM-01`, as an offline cumulative confusion-pairs checkpoint with eight mixed scenarios per form and full 15-objective coverage.
Files touched:
- curriculum/readiness/CUM-01/*
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- current AI-901 study guide and required priority Foundry sources checked first: pass
- all 23 mapped lesson directories present: pass
- all curriculum JSON parsed; activity and assessment schema contracts: pass
- IDs, all 15 objectives, official sources, links, remediation routes, privacy/session/accessibility, exam-claim, and action safeguards: pass
- each primary and transfer form covers all 15 objectives through eight cross-lesson confusion pairs: pass
- validator self-test, exam/action probe, and portal/client-boundary probe: pass
- primary reference 16/16; transfer reference 16/16; blank primary and transfer correctly rejected at 0/16 with exit 1
- existing `L-06-03` validator regression: pass
- `git diff --check`: pass
Handoff: Exercise Agent can render `EX-CUM01-CONFUSION-PAIRS` as an accessible one-card-at-a-time cumulative checkpoint with direct remediation links.
Notes: No service call, Azure mutation, credential use, external action, gameplay, or lore change occurred. Scenarios are course-authored, optional timing cannot affect mastery, and passing does not guarantee an exam result. Exam and product details remain volatile.

## Log entry: 2026-07-12T20:27:53-04:00

Stage: Mixed AI-901 simulation evidence
Action: Completed one bounded learner-facing tranche, `SIM-01`, as a 12-item original offline simulation block with five concept/capability and seven Foundry implementation items, all 15 objectives covered, and remediation linked to existing lessons.
Files touched:
- curriculum/readiness/SIM-01/*
- curriculum/BUILD_STATUS.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_LOG.md
Validation:
- applicable AGENTS.md, source-priority skill, latest logs, `L-06-03`, and `CUM-01` inspected: pass
- current AI-901 guide and required priority Foundry sources checked first: pass
- all curriculum JSON parsed; IDs, all-objective coverage, source mapping, links, readiness gates, privacy/session/accessibility, exam-claim, and action safeguards: pass
- 5/7 domain mix and 15-objective union: pass
- validator self-test, generated-provenance probe, and simulation/action probe: pass
- reference 24/24; blank correctly rejected at 0/24 with exit 1
- `CUM-01` and `L-06-03` validator regressions: pass
- `git diff --check`: pass
Handoff: Exercise Agent can render `EX-SIM01-MIXED` with an optional 25-minute diagnostic timer and fully equivalent untimed mode.
Notes: No service call, Azure mutation, credential use, external action, gameplay, or lore change occurred. Items are course-authored, timing cannot change mastery, and passing does not guarantee an exam result. Exam and product details remain volatile.

## Log entry: 2026-07-12T21:31:49-04:00

Stage: Fresh-transfer AI-901 simulation evidence
Action: Completed one bounded learner-facing tranche, `SIM-02`, as a new 12-item transfer block with five concept/capability and seven Foundry implementation items, all 15 objectives covered, and retention gates for `SIM-01` and `CUM-01` transfer.
Files touched: `curriculum/readiness/SIM-02/*`, BUILD_STATUS, readiness record, and BUILD_LOG.
Validation: applicable instructions/logs/readiness chain inspected; official mappings checked; all curriculum JSON parsed; 5/7 mix, 15-objective union, source mapping, remediation links, strict gates, privacy/session/accessibility, exam-claim, and action safeguards passed; reference 24/24; blank rejected 0/24 exit 1; action and one-test-is-enough probes passed; `SIM-01`, `CUM-01`, and `L-06-03` regressions passed; `git diff --check` passed.
Handoff: Exercise Agent can render `EX-SIM02-TRANSFER` with optional diagnostic timing and fully equivalent untimed mode.
Notes: No service/Azure/credential/external action/gameplay/lore/QA-binary changes. Original practice only; no exam guarantee.

## Log entry: 2026-07-13T00:30:04-04:00

Stage: Opening-to-first-Terminal beginner handoff
Work completed: Added a short learner-facing orientation inside `L-01-01` that explains the first Terminal's read-predict-run-edit-retry loop, previews valid Python syntax, reassures the learner that code errors are recoverable, and separates browser-local character/save data, temporary Terminal working state, and privacy-limited mastery evidence. Linked it from the lesson README without changing the existing lesson, activity, assessment, or exercise contracts.
Files changed:
- curriculum/lessons/L-01-01/first-terminal-orientation.md
- curriculum/lessons/L-01-01/README.md
- curriculum/BUILD_LOG.md
Validation performed:
- read root and game AGENTS.md, AGENT_WORKFLOW.md, latest curriculum log, all existing `L-01-01` learner artifacts, and the surface-safe 45-second opening contract
- ran `first_signal.py`: expected two-line output passed
- ran the orientation's Python example: valid syntax and expected output passed
- verified L-01-01 activity/assessment ID alignment, local README links, required state-layer/no-guarantee language, and `git diff --check`
Next recommended item: Exercise Agent should surface this compact orientation immediately after the first Terminal is opened, before the editable task, while preserving keyboard focus, safe exit, and the current strict lesson gate.
Unresolved risks: Runtime copy must not imply that the Machine owns the browser save or character name. If the runtime restores or clears drafts differently from the stated temporary-session contract, Exercise Agent should align the learner-facing status text with actual behavior rather than weakening the privacy boundary.
Notes: Course-authored beginner bridge only; not a Microsoft exam question and no AI-901 outcome guarantee. No game, art, lore, exercise, QA-binary, service, Azure, external-action, commit, or push change.

## Log entry: 2026-07-13T02:01:47-04:00

Stage: First-Terminal four-step beginner calibration
Work completed: Tightened `L-01-01/first-terminal-orientation.md` to match the implemented four-step runtime exactly: run real Python, recover from errors, separate local save/session/mastery data, and predict changed output. Moved the course-authored/not-Microsoft/no-guarantee boundary above step one and removed the earlier five-action preamble so the zero-Python entry is quicker to scan.
Files changed:
- curriculum/lessons/L-01-01/first-terminal-orientation.md
- curriculum/BUILD_LOG.md
Validation performed:
- read root/game AGENTS.md, current curriculum and Exercise Agent logs, current orientation/README, `terminalExercise.js`, `App.jsx` orientation rendering, and focused runtime tests
- focused first-Terminal orientation, unlimited-retry, editor-gate, and focus-restoration tests passed (31 selected/eligible test-file results, 0 failures)
- ran `first_signal.py`; expected output passed
- verified exactly four numbered orientation steps, early course-practice disclaimer, valid Python syntax markers, all three information boundaries, local README link, and `git diff --check`
Next recommended item: Exercise Agent should compare the on-screen four cards against this tightened source and reduce only redundant per-card copy if the 640×480 runtime still feels slow; preserve all four checks, unlimited retry, and early disclaimer.
Unresolved risks: The runtime repeats the full disclaimer on every card. That is safe but may add reading load; any compression must keep “course-authored,” “not a Microsoft exam question,” and “no guarantee” available before editable code begins. Runtime session-clear wording must continue matching actual close/reopen versus reload/resume behavior.
Notes: No new objective/product claim and no game, lore, art, QA-binary, service, Azure, authority, commit, or push change.

## Log entry: 2026-07-13T11:52:15-04:00

Stage: Optional calibration and destination handoff
Work completed: Added a compact learner-facing `L-01-03` choice handoff for the newly destination-aware departure UI. It makes both actions valid, states that required route mastery is already complete, preserves the full 8/8 + 8/8 + 4/4 calibration gate if practice is chosen, and explains exit/reopen, reload/resume, departure clearing, and privacy-limited mastery evidence without making calibration control story access.
Files changed:
- curriculum/lessons/L-01-03/optional-calibration-handoff.md
- curriculum/lessons/L-01-03/README.md
- curriculum/BUILD_LOG.md
Validation performed:
- read AGENTS.md, AGENT_WORKFLOW.md, latest curriculum/game/Lore handoffs, `L-01-03` lesson/README/exercise/check, current AI-901 map, and official source register
- source check: `L-01-03` remains course-authored Python prerequisite bridge material with no mapped AI-901 objective or new time-sensitive product claim; the recorded controlling exam source remains `OFFICIAL-AI901-STUDY-GUIDE` (https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901)
- `validate_calibration.py --self-test` passed; traceback and indentation references each passed 8/8
- focused calibration/departure/arrival/focus/resume runtime tests passed with 0 failures
- verified local links, strict gate numbers, route-open states, session/evidence boundaries, no-live-Azure/no-authority/no-guarantee language, and `git diff --check`
Next recommended item: Exercise Agent should expose this compact choice explanation beside or immediately before the optional-calibration launch, then preserve the locked `Depart: Drowned Archive` action, strict calibration gate, safe Exit, and destination focus behavior.
Unresolved risks: Runtime currently communicates route-open status throughout calibration, but the two-choice screen may still need human/screen-reader testing to confirm that “optional practice” is understood without suggesting that calibration mastery is trivial. Departure must clear the working session exactly as documented while retaining sanitized mastery evidence.
Notes: No hidden lore, game, art, QA binary, service, Azure, external action, commit, or push change.

## Log entry: 2026-07-12T22:20:00-04:00

Stage: Demo curriculum freeze audit
Action: Audited and froze the learner-facing curriculum through `SIM-01`; deferred `SIM-02` runtime integration until after the demo. No demo-blocking learner-facing defect was found, so no lesson or assessment content was changed.
Files touched: demo freeze report, BUILD_STATUS, readiness record, and BUILD_LOG.
Validation: applicable instructions and logs inspected; 23/23 frozen-scope validator self-tests passed; all curriculum JSON parsed; unique/package/prerequisite progression, official-source mapping, all-15-objective coverage, remediation routes, strict gates, accessibility/session/privacy, and no-guarantee/no-authority language passed; `git diff --check` passed.
Freeze point: zero-Python progression through all mapped lessons, `L-06-03`, `CUM-01`, and `SIM-01`. `SIM-02` remains content-complete but is post-demo for runtime integration.
Notes: No game/lore/QA binary, service, Azure, credential, external action, commit, or push.

## Log entry: 2026-07-13T13:04:00-04:00

Stage: Safe-return navigation and mastery boundary
Work completed: Added a finished learner-facing `L-01-03` guide for the reversible Chapter II return. It names the exact visible and accessible return/re-departure controls, distinguishes navigation, restored scene display, temporary Terminal sessions, and privacy-limited mastery evidence, and states that backtracking cannot create an attempt, score, pass, mastery status, objective completion, exam progress, readiness decision, or external authority. Added a deterministic guide validator and linked the guide from the lesson and optional-calibration handoff without changing any mastery gate.
Files changed:
- curriculum/lessons/L-01-03/safe-return-state-guide.md
- curriculum/lessons/L-01-03/validate_safe_return_guide.py
- curriculum/lessons/L-01-03/README.md
- curriculum/lessons/L-01-03/optional-calibration-handoff.md
- curriculum/BUILD_LOG.md
Validation performed:
- read the root instructions, source-priority skill, relay workflow, latest curriculum/game/Lore handoffs, current safe-return implementation, focused return/transition tests, and existing `L-01-03` session/evidence contracts
- source check: no new Microsoft product or exam-objective claim was introduced; the guide is explicitly course-authored and preserves the current official-source boundary
- safe-return guide self-test and direct check passed, including negative probes for a missing exact control and a missing strict-gate boundary
- `validate_calibration.py --self-test` passed; traceback and indentation references each passed 8/8
- focused scene-return, scene-transition, and game-logic tests passed 17/17
- all curriculum JSON parsed; local `L-01-03` links passed; `git diff --check` passed with line-ending notices only
Next recommended item: Exercise Agent should use this state boundary when presenting any return/reopen status: announce navigation restoration separately from exercise feedback, show that temporary working data follows the exercise session contract, and never increment mastery evidence merely because a scene reappears.
Unresolved risks: Real screen-reader announcement order and live both-side reload remain Player/Accessibility checks. The completed Chapter II scene text may still be misread as a fresh response unless runtime ownership and status wording continue to label it as retained state.
Notes: The strict calibration gate remains 8/8 + 8/8 + 4/4 with both diagnoses before editing and no unresolved critical misconception. No hidden lore, game, art, QA binary, service, Azure, credential, external action, commit, or push change.

## Log entry: 2026-07-13T14:07:48-04:00

Stage: Workload Sort reconstructed-evidence boundary
Work completed: Added a finished learner-facing `L-02-01` guide that explains reconstructed finalized evidence as prior assessed progress, not a new attempt or retained private response. It preserves all three exact System resume messages; distinguishes in-memory close/reopen from clean reload/scene-round-trip reconstruction; documents contiguous finalized-prefix, first-incomplete-card, completed-result, critical-override, and privacy behavior; and preserves the strict 10/12, no-critical-miss, remediation, fresh-retry, confidence, and explicit acknowledgement sequence. Expanded the structured exercise session/privacy contract to match implementation without changing any assessment prompt or answer.
Files changed:
- curriculum/lessons/L-02-01/saved-evidence-resume-guide.md
- curriculum/lessons/L-02-01/validate_saved_evidence_resume.py
- curriculum/lessons/L-02-01/README.md
- curriculum/lessons/L-02-01/check.md
- curriculum/lessons/L-02-01/exercise.json
- curriculum/lessons/L-02-01/workload_terminal.py
- curriculum/BUILD_LOG.md
Validation performed:
- read the source-priority skill, root instructions, relay workflow, latest curriculum/game/Lore handoffs, Workload Sort reconstruction/save/open handlers, focused tests, lesson, exercise, assessments, mastery key, and Lore continuity contracts
- checked the four priority official Microsoft documentation pages first; no new volatile product or exam-objective claim was added, and reconstruction remains explicitly course-authored behavior
- saved-evidence guide self-test and direct cross-layer check passed, including negative probes for new-attempt wording and a weakened 10/12 gate; all three exact runtime System messages matched
- `workload_terminal.py --self-test` passed after expanding its privacy/session assertions
- focused Workload Sort, scene-return, and scene-transition tests passed 25/25
- all curriculum JSON parsed; local `L-02-01` links passed; `git diff --check` passed with line-ending notices only
Next recommended item: Exercise Agent should expose the resume guide's compact distinction beside reconstructed progress: prior finalized results may reappear, but the current choice and remediation controls start clean, and the result gate still requires remediation/retry or confidence plus `Acknowledge mastery`.
Unresolved risks: Live Player/Accessibility checks should confirm that the three resume states are announced clearly, blank controls are perceivable after an unfinalized miss, and a reconstructed complete form does not sound newly scored. Total attempt/hint telemetry persists while per-card state resets, so runtime copy must not claim that every attempt detail was restored or discarded.
Notes: No prompt, answer, official objective mapping, hidden lore, game code, art, QA binary, service, Azure, credential, external action, commit, or push change. Reconstructed course evidence grants no exam credit, readiness guarantee, AI-901 result guarantee, or external authority.

## Log entry: 2026-07-13T20:27:46-04:00

Stage: Current Foundry SDK route-choice strengthening
Work completed: Added a finished learner-facing primary/transfer drill to `L-05-03` that distinguishes the five current official SDK routes by scenario: Foundry SDK, Agent Framework, OpenAI SDK, Anthropic SDK, and service-specific Foundry Tools SDKs. The drill adds eight boundaries per form, strict decision-plus-reason scoring, retrieval/remediation guidance, and explicit resource, identity, privacy, volatility, and no-authority safeguards. Refreshed the official source register to the current verified date and route distinctions.
Files changed:
- curriculum/lessons/L-05-03/sdk-route-chooser.md
- curriculum/lessons/L-05-03/sdk_route_scenarios.json
- curriculum/lessons/L-05-03/sdk_route_answer_key.json
- curriculum/lessons/L-05-03/sdk_route_answers.json
- curriculum/lessons/L-05-03/sdk_route_transfer_answers.json
- curriculum/lessons/L-05-03/sdk_route_reference_answers.json
- curriculum/lessons/L-05-03/sdk_route_reference_transfer_answers.json
- curriculum/lessons/L-05-03/validate_sdk_route_chooser.py
- curriculum/lessons/L-05-03/README.md
- curriculum/sources/current-official-source-register.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_STATUS.md
- curriculum/BUILD_LOG.md
Validation performed:
- Reverified on 2026-07-13: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901
- Reverified on 2026-07-13: https://learn.microsoft.com/en-us/azure/foundry/
- Reverified on 2026-07-13: https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview
- Reverified on 2026-07-13: https://learn.microsoft.com/en-us/azure/foundry/agents/overview
- Reverified on 2026-07-13: https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview
- New validator self-test passed, including eight-boundary coverage, reference/blank checks, an OpenAI-route confusion probe, and an unverified-authority probe.
- Primary reference passed 16/16; fresh-transfer reference passed 16/16.
- Existing `L-05-03` client-boundary self-test and `L-05-04` single-agent regression passed.
- All curriculum JSON parsed; `git diff --check` passed.
Next recommended item: Exercise Agent can render the drill as one scenario at a time after the existing `L-05-03` client-boundary gate, with persistent route labels, route-plus-reason feedback, fresh transfer, and no endpoint/credential capture.
Unresolved risks: SDK packages, versions, endpoints, roles, models, tool availability, preview labels, and resource behavior remain volatile and require re-verification before a live lab. The route drill is supplemental and must not be presented as official Microsoft exam content or proof of live access.
Notes: No service call, Azure mutation, credential use, external action, game, lore, art, QA binary, commit, or push change.

## Log entry: 2026-07-13T21:41:02-04:00

Stage: SDK route remediation and fresh-transfer retrieval
Work completed: Added a finished learner-facing decision-trace packet to `L-05-03` for learners who miss a route or reason in the playable SDK Route Chooser. The packet separates route, endpoint family, and next action across six primary and six fresh-transfer scenarios, adds a six-contrast error clinic and spaced retrieval schedule, and enforces strict 18/18 + 18/18 validation without collecting real configuration or implying live authority.
Files changed:
- curriculum/lessons/L-05-03/sdk-route-decision-trace.md
- curriculum/lessons/L-05-03/sdk_route_trace_scenarios.json
- curriculum/lessons/L-05-03/sdk_route_trace_answer_key.json
- curriculum/lessons/L-05-03/sdk_route_trace_answers.json
- curriculum/lessons/L-05-03/sdk_route_trace_transfer_answers.json
- curriculum/lessons/L-05-03/sdk_route_trace_reference_answers.json
- curriculum/lessons/L-05-03/sdk_route_trace_reference_transfer_answers.json
- curriculum/lessons/L-05-03/validate_sdk_route_trace.py
- curriculum/lessons/L-05-03/README.md
- curriculum/sources/current-official-source-register.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_STATUS.md
- curriculum/BUILD_LOG.md
Validation performed:
- Reverified on 2026-07-13: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901
- Reverified on 2026-07-13: https://learn.microsoft.com/en-us/azure/foundry/
- Reverified on 2026-07-13: https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview
- Reverified on 2026-07-13: https://learn.microsoft.com/en-us/azure/foundry/agents/overview
- Reverified on 2026-07-13: https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview
- New validator self-test passed, including blank, route-substitution, shared-endpoint, and unsafe-action probes.
- Primary reference passed 18/18; fresh-transfer reference passed 18/18; both blank forms were correctly rejected at 0/18 with exit 1.
- Existing SDK Route Chooser, `L-05-03` client-boundary, and `L-05-04` single-agent self-tests passed.
- All 244 curriculum JSON files parsed.
Next recommended item: Exercise Agent can render this packet only as targeted remediation after a route/reason miss, one scenario at a time, with three labeled decisions and a persistent conceptual route key. Keep selected answers session-only and keep membrane animation outside learner feedback.
Unresolved risks: SDK packages, versions, endpoint forms, roles, models, preview labels, and availability remain volatile. The packet intentionally uses endpoint-family tokens rather than literal configuration, and it does not grant service access, exam credit, or authority for any external action.
Notes: The named source-priority skill was unavailable, so the required official Microsoft sources were checked directly before authoring. No game, lore, art, exercise runtime, QA binary, service call, Azure mutation, credential use, external action, commit, or push change occurred.

## Log entry: 2026-07-13T23:30:00-04:00

Stage: Entry-gated final AI-901 confidence simulation
Work completed: Built `SIM-03` as the finished learner-facing final confidence block named by the assessment system. It adds 12 new closed-note decision-plus-reason scenarios in the current 5 concept/capability and 7 Foundry implementation balance, covers all 15 objectives, and includes a new SDK-route transfer decision. A separate entry-evidence gate prevents one score, insufficient spacing, an open critical misconception, an unretested high-confidence miss, or stale official guidance from being mistaken for readiness. The outcome is a cautious scheduling recommendation, never an exam guarantee or external authority.
Files changed:
- curriculum/readiness/SIM-03/*
- curriculum/assessment-and-review-system.md
- curriculum/validation/lesson-generation-readiness.md
- curriculum/BUILD_STATUS.md
- curriculum/BUILD_LOG.md
Validation performed:
- reverified on 2026-07-13 the current AI-901 study guide, Microsoft Foundry hub, Foundry SDKs and Endpoints overview, Foundry Agent Service overview, and Content Understanding overview before authoring
- `SIM-03` self-test passed, including 5/7 domain balance, 15-objective union, remediation-route coverage, prerequisite existence, valid/blank entry evidence, reference/blank scoring, SDK-route confusion, unsafe-action, and stale-source probes
- valid entry evidence plus reference answers passed at 24/24; blank answers and blank entry evidence were rejected
- all curriculum JSON parsed successfully
- `SIM-02`, `CUM-01`, `L-06-03`, and `L-05-03` route-trace regressions passed
- `git diff --check` passed
Next recommended item: Exercise Agent can render `EX-SIM03-FINAL-CONFIDENCE` only after the entry gate passes, one scenario at a time, with optional timing, confidence recorded separately from correctness, and targeted objective remediation after any miss.
Unresolved risks: Runtime integration for `SIM-02` and `SIM-03` remains post-demo. The 48-hour field is privacy-limited learner evidence rather than a trusted external timestamp, so it supports coaching and does not certify identity, attendance, or exam readiness. SDK routes, endpoints, roles, portal labels, models, preview states, and exam scope remain volatile and must be reverified before final use.
Notes: The named source-priority skill was unavailable, so required official Microsoft sources were checked directly. Original course-authored practice only. No live service call, Azure mutation, credential use, exam item reproduction, external action, game runtime, art, lore, QA binary, commit, or push occurred.
