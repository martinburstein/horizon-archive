# Terminal Focus and Dismissal Contract

Status: production-ready, surface-canon only.

This contract defines player-facing ownership and compact copy for the shared focus-managed Terminal shell. It supports First Signal, Route Marker training, optional Calibration Debugger, Workload Sort, and the Evidence Packet without turning keyboard focus, modal isolation, or focus restoration into behavior by the Machine.

## Implementation alignment

Current shared behavior in `horizon-archive-game/src/App.jsx`:

- each Terminal is a named modal dialog;
- initial focus moves to the Terminal title;
- background command controls are inert and world hotspots are disabled while the workspace is open;
- `Tab` and `Shift+Tab` remain inside the active Terminal;
- `Escape` and the visible Close/Exit control dismiss the same workspace;
- ordinary dismissal preserves the existing in-memory exercise session;
- focus returns to the exact opening trigger when that trigger still exists and is enabled;
- mastery acknowledgement is a separate action from dismissal;
- after mastery changes or disables the trigger, focus restoration may be skipped rather than targeting an invalid control.

These are human interface and expedition-state behaviors. They are not evidence that a Terminal captures attention, freezes the world, releases the player, remembers a visitor, or sends focus back.

## Speaker ownership

| Event | Owner | Correct framing | Avoid |
|---|---|---|---|
| Dialog opens | `SYSTEM // EXPEDITION STATE` | Active workspace and title identified | “The Terminal draws you in” |
| Task instructions | `EXPEDITION LINK // LOCAL TOOLING` | Human-authored next action | “The Machine tests you” |
| Background becomes inert | No in-world line required | One workspace is active in the application | “Time stops outside” |
| Tab containment | No story line | Keyboard navigation remains in the dialog | “The Terminal will not let you leave” |
| Close or Escape | `SYSTEM // EXPEDITION STATE` | Workspace dismissed; session held if applicable | “The Terminal releases you” |
| Focus returns | No story line; optional accessibility status | Opening control restored | “The node calls you back” |
| Validation | `EXPEDITION LINK // LOCAL TOOLING` | Code/data contract checked | “The Terminal approves” |
| Mastery acknowledgement | Expedition link, then separately attributed scene/local response | Evidence recorded; physical state may change afterward | “Closing completes the lesson” |

## Compact dialog-entry contract

On open, screen-reader and keyboard focus land on the title. The visible dialogue strip behind the modal should already contain the concise reason for opening; it must not introduce a second task.

Recommended open sequence:

1. Adventure dialogue before launch: one sentence naming the bounded task.
2. Modal title receives focus: `MACHINE TERMINAL // [TITLE]`.
3. Tab strip identifies file, optional persistent status, and lesson.
4. Task pane gives the first learner action.

No additional lore line should fire merely because focus moved.

## Dismissal is not completion

Closing with the button or `Escape` means only:

- hide the active workspace;
- retain the current in-memory session according to its exercise contract;
- return to exploration at the opening control when that control remains usable.

It must never:

- mark mastery;
- transfer evidence;
- change a physical node from locked, awake, or completed;
- consume an attempt;
- clear an error or hint;
- close the adventure route;
- create unique dialogue or lore available only through Escape.

Recommended universal system line after ordinary dismissal:

> Workspace closed. Local session held.

Use a more specific line only when it adds state clarity.

## Glass Meadow trigger and copy matrix

### Petal / First Signal

- Opening trigger: Petal hotspot.
- Open dialogue: `EXPEDITION LINK // LOCAL TOOLING`: “First Signal active. Edit, run, then review the output.”
- Initial title: `MACHINE TERMINAL // First Signal`.
- Close/Escape line: `SYSTEM // EXPEDITION STATE`: “First Signal closed. Code, result, and hints remain in this session.”
- Focus destination after ordinary dismissal: Petal hotspot.
- Reopen line: “First Signal restored at the last edit.”
- After acknowledgement: do not restore focus to the now-completed Petal trigger as if another action were required. The next meaningful control is the awake Route Marker.

### Route Marker Survey Label

- Opening trigger: Route Marker hotspot.
- Locked-state click never opens a modal; it names First Signal as the prerequisite.
- Open dialogue: “Route training active. Predict, validate, then retrieve.”
- Initial title: `MACHINE TERMINAL // Route Marker Survey Label`.
- Close/Escape line: “Route session closed. Source, predictions, results, and hints remain.”
- Focus destination after ordinary dismissal: Route Marker hotspot.
- Reopen line: “Route session restored at the current form and phase.”
- After mastery acknowledgement: do not treat close as the event that creates directional geometry. Acknowledgement records mastery first; the scene response follows as a separately owned event.

### Expedition Calibration Copy

- Opening trigger: `Start Calibration` or `Resume Calibration` in the dialogue actions.
- Persistent title status: `ROUTE OPEN · [FORM]`.
- Open dialogue: “Calibration copy active. The physical route remains open.”
- Visible dismissal label: `Exit` with accessible name `Exit Calibration`.
- Escape/Exit line: “Calibration exited. The route stays open; repair progress remains in this session.”
- Focus destination after ordinary exit: the same Start/Resume control when it remains present.
- Exit never counts as failure, never closes Continue, and never changes physical route geometry.
- After mastery acknowledgement: route state remains complete; mastery adds only the privacy-limited calibration record.

## Other shared Terminals

### Workload Sort

- Open dialogue: “Workload Sort active. Classify the primary job.”
- Close/Escape line: “Workload Sort closed. Current card and remediation state remain.”
- Focus returns to the grounded Workload Sort Terminal hotspot.
- Dismissal does not submit the selected card.

### Responsible AI practice

- Opening trigger: `Start Responsible AI` or `Resume Responsible AI` after Workload Sort mastery.
- Open dialogue is Teacher-owned: "Responsible AI primary practice: four fields per scenario."
- Visible dismissal label: `Exit` with accessible name `Exit Practice`.
- Exit/Escape line: "Primary practice closed. Current scenario, choices, result, and hints remain."
- Reopen line: "Primary practice restored at the current scenario."
- Continue remains available because this slice is optional for traversal.
- Primary acknowledgement records `primary_complete`; it does not mark full `L-02-02` mastery or change AB-01 world state.
- Exact mode labels are System-owned: `PRIMARY`, `TRANSFER`, and `EXPLANATION`.
- Reopen restores the current mode and session draft; reload restores mode eligibility with clean private fields.
- Physical primary/transfer/explanation frame patterns are display state only, never Machine judgment or intent.

### Model, Deployment, and Configuration Choices

- Exact title: `Model, Deployment, and Configuration Choices`.
- Exact textual labels remain visible: `MODEL`, `DEPLOYMENT`, `REQUEST CONFIGURATION`, `Decision`, and `Reason`.
- System-owned state labels are `PRIMARY`, `TRANSFER`, `CLOSED-NOTE`, and `MASTERED`; live progress/status copy uses `PRIMARY n/8`, `PRIMARY 16/16`, `TRANSFER n/8`, and `CLOSED-NOTE GATE`.
- The three physical rings mean model, deployment, and request configuration only. They never indicate Machine attention, preference, judgment, or understanding.
- Visible dismissal label: `Exit` with accessible name `Exit Model Choices`.
- Close line: "Model choices closed. Current [PRIMARY|TRANSFER|CLOSED-NOTE] draft remains in this session."
- Reopen restores the current form, item, answers, result, and hints within the same session.
- Reload restores sanitized evidence and the eligible mode with clean answer and explanation fields; it does not restore ownership confirmation.
- The course boundary remains Teacher-owned and visible: "Course-authored practice—not a Microsoft exam question. Live availability, regions, quota, prices, parameter support, and preview status must be reverified."
- Dismissal does not submit an answer, change a physical ring, change route access, or produce a Tidal Lens response.

### Structured Packets

- Exact title and dismissal name: `Structured Packets`; `Exit Structured Packets`.
- System-owned modes are `PRIMARY`, `TRANSFER`, `CLOSED-NOTE`, and `MASTERED`; live status uses `PRIMARY n/8`, `TRANSFER n/8`, and `CLOSED-NOTE GATE`.
- Python, dictionary/list traversal, nested-access, and JSON instruction or remediation is always `901 TEACHER // SOURCE-GROUNDED COURSE` copy.
- Editable source is `PILOT // SOURCE OWNER`; the closed-note response is `PILOT // EXPLANATION OWNER`. Neither Pilot label teaches or validates.
- Exit line: "Structured Packets closed. Current [PRIMARY|TRANSFER|CLOSED-NOTE] work remains in this session."
- Reopen restores active source, result, and hints inside the same session. Reload restores sanitized eligibility with clean source and explanation fields.
- Persistent evidence excludes learner source, raw JSON, runtime output, and explanation prose.
- After mastery acknowledgement, focus prefers `Continue`; acknowledgement and progression remain separate actions.
- Dismissal does not run code, score a form, acknowledge mastery, advance, or imply a Machine response.

### Control Flow

- Exact title and dismissal name: `Control Flow`; `Exit Control Flow`.
- System-owned modes are `PRIMARY`, `TRANSFER`, `CLOSED-NOTE`, and `MASTERED`; live status uses `PRIMARY n/8`, `TRANSFER n/8`, and `CLOSED-NOTE GATE`.
- Python instruction, boundary remediation, execution-path reconstruction, and completion are `901 TEACHER // SOURCE-GROUNDED COURSE` copy.
- Editable source is `PILOT // FUNCTION OWNER`; explanation prose is `PILOT // CLOSED-NOTE EXPLANATION OWNER`.
- Exit line: "Control Flow closed. Current [PRIMARY|TRANSFER|CLOSED-NOTE] work remains in this session."
- Reopen restores active source, result, and hints. Reload restores sanitized eligibility with clean source and explanation fields.
- Persistent evidence excludes learner source, input records, runtime output, and explanation prose.
- After mastery acknowledgement, focus prefers `Continue`; acknowledgement and progression remain separate actions.
- Dismissal does not run, validate, acknowledge mastery, advance, or imply a Machine response.

### Offline Client Bridge

- Exact title and dismissal name: `Offline Client Bridge`; `Exit Client Bridge`.
- System-owned modes are `PRIMARY`, `TRANSFER`, `RETRIEVAL`, `EXPLANATION`, and `MASTERED`; code scores use `n/10`.
- Python/client instruction, missing-secret/redaction remediation, retrieval teaching, and completion remain `901 TEACHER` copy.
- Editable source is `PILOT // OFFLINE SOURCE OWNER`; closed-note prose is `PILOT // CLOSED-NOTE EXPLANATION OWNER`.
- The visible boundary states that validation is static, no code/network executes, and `example.invalid` is never contacted.
- Exit line: "Client Bridge closed. Current [PRIMARY|TRANSFER|RETRIEVAL|EXPLANATION] work remains in this session."
- Reopen restores same-session work. Reload restores sanitized eligibility with clean source, answers, and explanation fields.
- Persistent evidence excludes source, config body, secret name/value, Authorization header, runtime output, and prose.
- After mastery acknowledgement, focus prefers `Continue`; acknowledgement and progression remain separate actions.
- Dismissal never validates, calls a service, stores credentials, acknowledges mastery, advances, or implies a Machine response.

### Offline Text Analysis

- Exact title and dismissal name: `Offline Text Analysis`; `Exit Text Analysis`.
- System-owned modes are `PRIMARY`, `TRANSFER`, `CLOSED-NOTE`, and `MASTERED`; scenario status uses `n/6` and the gate uses `CLOSED-NOTE GATE`.
- Capability teaching, keyword/key-phrase bridging, document correlation, remediation, and completion remain `901 TEACHER` copy.
- Scenario choices are `PILOT // WORKLOAD OWNER`; explanation prose is `PILOT // CLOSED-NOTE WORKLOAD OWNER`.
- The visible boundary states `COURSE-AUTHORED OFFLINE PRACTICE · no service call or document text.`
- Exit line: "Text Analysis closed. Current [PRIMARY|TRANSFER|CLOSED-NOTE] work remains in this session."
- Reopen restores the active card, choices, result, and hints. Reload restores sanitized eligibility with clean fields.
- Persistent evidence excludes reasoning, document text, service-result bodies, runtime output, and explanation prose.
- After mastery acknowledgement, focus prefers `Continue`; acknowledgement and progression remain separate actions.
- Dismissal never validates, calls a service, stores document text, acknowledges mastery, advances, or implies a Machine response.

### Offline Speech Workloads

- Exact title and dismissal name: `Offline Speech Workloads`; `Exit Speech Workloads`.
- System-owned modes are `PRIMARY`, `TRANSFER`, `CLOSED-NOTE`, and `MASTERED`; scenario status uses `n/6` and the gate uses `CLOSED-NOTE GATE`.
- Recognition, synthesis, multimodal prompt, file direction, cancellation remediation, and completion remain `901 TEACHER` copy.
- Scenario choices are `PILOT // SPEECH-FLOW OWNER`; explanation prose is `PILOT // CLOSED-NOTE SPEECH-FLOW OWNER`.
- Entry announcement order is fixed: title → `speech-offline-warning` → `speech-transcript-equivalent` → active work.
- The dialog association is exactly `aria-describedby="speech-offline-warning speech-transcript-equivalent"`; IDs are unique and ordered.
- System owns the title/offline warning/state; Teacher owns the transcript equivalent, instruction, remediation, and completion.
- Pilot owns primary/transfer choices and closed-note prose only. System owns neutral validation and mastery persistence state.
- Every spoken scenario includes transcript-equivalent text; no listening, recording, audio generation, path access, or service call occurs.
- Exit line: "Speech Workloads closed. Current [PRIMARY|TRANSFER|CLOSED-NOTE] work remains in this session."
- Reopen restores active choices, result, and hints. Reload restores sanitized eligibility with clean fields and no audio state.
- Persistent evidence excludes audio, voice, path, transcript, spoken prompt, response body, runtime output, and explanation prose.
- After mastery acknowledgement, focus prefers `Continue`; acknowledgement and progression remain separate actions.
- Dismissal never validates, listens, records, calls a service, acknowledges mastery, advances, or implies a Machine response.

### Offline Extraction Workloads

- Exact title and dismissal name: `Offline Extraction Workloads`; `Exit Extraction Workloads`.
- System-owned modes are `PRIMARY`, `TRANSFER`, `CLOSED-NOTE`, and `MASTERED`; scenario status uses `n/6` and the gate uses `CLOSED-NOTE GATE`.
- Modality, schema-first, null/missing, evidence/confidence, integrity remediation, and completion remain `901 TEACHER` copy.
- Scenario choices are `PILOT // SCHEMA OWNER`; explanation prose is `PILOT // CLOSED-NOTE EXTRACTION OWNER`.
- Every media scenario includes a text equivalent; no media/path access, processing, upload, analyzer, or service call occurs.
- Exit line: "Extraction Workloads closed. Current [PRIMARY|TRANSFER|CLOSED-NOTE] work remains in this session."
- Reopen restores active choices, result, and hints. Reload restores sanitized eligibility with clean fields and no source state.
- Persistent evidence excludes source media/path, extracted values, service responses, runtime output, reasoning, and prose.
- After mastery acknowledgement, focus prefers `Continue`; acknowledgement and progression remain separate actions.
- Dismissal never validates, processes media, calls a service, acknowledges mastery, advances, or implies a Machine response.

### Planned Offline Foundry Portal Rehearsal

- Runtime integration is incomplete; this section defines target focus, dismissal, privacy, and ownership behavior.
- Target title and dismissal name: `Offline Foundry Portal Rehearsal`; `Exit Portal Rehearsal`.
- System-owned modes are `PRIMARY`, `TRANSFER`, `CLOSED-NOTE`, and `MASTERED`; cards use `n/8` and the gate uses `CLOSED-NOTE GATE`.
- Portal workflow, troubleshooting, connection boundaries, cleanup safeguards, and completion remain `901 TEACHER` copy.
- Scenario choices are `PILOT // REHEARSAL OWNER`; explanation prose is `PILOT // CLOSED-NOTE PORTAL-FLOW OWNER`.
- The visible boundary states zero Azure login, mutation, deployment, prompt submission, service call, credential use, or cleanup.
- Exit line: "Portal rehearsal closed. Current [PRIMARY|TRANSFER|CLOSED-NOTE] choices remain in this session."
- Reopen restores active choices, result, and hints. Reload restores sanitized eligibility with clean fields and no identifiers.
- Persistent evidence excludes tenant, subscription, resource group, project, endpoint, deployment, credential, prompt, response, and prose.
- After mastery acknowledgement, focus prefers `Continue`; acknowledgement and progression remain separate actions.
- Dismissal and exercise text never authorize or perform an Azure action or imply a Machine response.

### Offline Prompt Layers

- Exact title and dismissal name: `Offline Prompt Layers`; `Exit Prompt Layers`.
- System-owned modes are `PRIMARY`, `TRANSFER`, `CLOSED-NOTE`, and `MASTERED`; cards use `n/6` and the gate uses `CLOSED-NOTE GATE`.
- Layer instruction, grounding/output boundaries, conflict/injection remediation, action safety, and completion remain `901 TEACHER` copy.
- Scenario choices are `PILOT // PROMPT-LAYER OWNER`; explanation prose is `PILOT // CLOSED-NOTE PROMPT OWNER`.
- The visible boundary states text cannot authorize login, deploy, delete, email, purchase, credential use, service calls, or external action.
- Exit line: "Prompt Layers closed. Current [PRIMARY|TRANSFER|CLOSED-NOTE] choices remain in this session."
- Reopen restores active choices, result, and hints. Reload restores sanitized eligibility with clean fields and no prompt content.
- Persistent evidence excludes prompts, grounding, model output, credentials, action requests, and explanation prose.
- After mastery acknowledgement, focus prefers `Continue`; acknowledgement and progression remain separate actions.
- Dismissal and exercise text never call a service, perform an external action, grant authority, or imply a Machine response.

### Offline Mock Client Boundaries

- Exact title and dismissal name: `Offline Mock Client Boundaries`; `Exit Client Boundaries`.
- System-owned modes are `MOCK`, `PRIMARY`, `TRANSFER`, `CLOSED-NOTE`, and `MASTERED`; scenario cards use `n/6`.
- Endpoint/credential/deployment/client/request-response teaching, simulation limits, remediation, and completion remain `901 TEACHER` copy.
- Mock is `PILOT // LOCAL MOCK OWNER`; choices are `PILOT // CLIENT-BOUNDARY OWNER`; prose is `PILOT // CLOSED-NOTE BOUNDARY OWNER`.
- The visible boundary states no Foundry, Azure, service, login, credential use, mutation, deletion, or external action.
- Exit line: "Client Boundaries closed. Current [MOCK|PRIMARY|TRANSFER|CLOSED-NOTE] work remains in this session."
- Reopen restores active choices and mock source. Reload restores sanitized eligibility with clean configuration and response fields.
- Persistent evidence excludes configuration, source, endpoint, deployment, credential, request/response data, action requests, and prose.
- After mastery acknowledgement, focus prefers `Continue`; acknowledgement and progression remain separate actions.
- Dismissal and mock text never call a service, perform an Azure/external action, grant authority, or imply a Machine response.

### Offline Single Agent Design

- Exact title and dismissal name: `Offline Single Agent Design`; `Exit Single Agent`.
- System-owned modes are `PRIMARY`, `TRANSFER`, `CLOSED-NOTE`, and `MASTERED`; scenario cards use `n/6`.
- Agent fit, stable instructions, least privilege, testing, action safety, client flow, remediation, and completion remain `901 TEACHER` copy.
- Scenario choices are `PILOT // DESIGN OWNER`; explanation prose is `PILOT // CLOSED-NOTE DESIGN OWNER`.
- The visible boundary states no agent, tool, service, Azure resource, login, credential use, or external action.
- Exit line: "Single Agent closed. Current [PRIMARY|TRANSFER|CLOSED-NOTE] choices remain in this session."
- Reopen restores active choices only. Reload restores sanitized eligibility with clean prompt/tool/action fields.
- Persistent evidence excludes instructions, tool payload/results, identifiers, endpoint, credential, conversation, action request, and prose.
- After mastery acknowledgement, focus prefers `Continue`; acknowledgement and progression remain separate actions.
- Dismissal never invokes an agent/tool, calls a service, uses Azure, performs an action, grants authority, or implies a Machine response.

### Offline Text and Speech Patterns

- Exact title and dismissal name: `Offline Text and Speech Patterns`; `Exit Text and Speech Patterns`.
- System-owned modes are `PRIMARY`, `TRANSFER`, `CLOSED-NOTE`, and `MASTERED`; scenario cards use `n/6`.
- Description order is `text-speech-offline-warning text-speech-transcript-equivalent`, then active work.
- Text/speech capability, direction, client/result boundaries, remediation, action safety, and completion remain `901 TEACHER` copy.
- Scenario choices are `PILOT // PATTERN OWNER`; explanation prose is `PILOT // CLOSED-NOTE PATTERN OWNER`.
- The visible boundary states no service, Azure, text/audio processing, media access, disclosure, or external action.
- Exit line: "Text/Speech Patterns closed. Current [PRIMARY|TRANSFER|CLOSED-NOTE] choices remain in this session."
- Reopen restores active choices only. Reload restores sanitized eligibility with clean text/audio/configuration/result fields.
- Persistent evidence excludes text, audio/path, transcript, endpoint, credential, service response, action request, and prose.
- After mastery acknowledgement, focus prefers `Continue`; acknowledgement and progression remain separate actions.
- Dismissal never processes media, calls a service, uses Azure, discloses content, performs an action, or implies a Machine response.

### Offline Visual Patterns

- Exact title and dismissal name: `Offline Visual Patterns`; `Exit Visual Patterns`.
- System-owned modes are `PRIMARY`, `TRANSFER`, `CLOSED-NOTE`, and `MASTERED`; scenario cards use `n/6`.
- Description order is `visual-pattern-offline-warning visual-pattern-text-equivalent`, then active work.
- Capability, media/request/deployment validation, result shape, provenance, safeguards, remediation, and completion remain `901 TEACHER` copy.
- Scenario choices are `PILOT // VISUAL OWNER`; explanation prose is `PILOT // CLOSED-NOTE VISUAL OWNER`.
- The visible boundary states no service, Azure, media access, analysis, generation, publication, deletion, or external action.
- Exit line: "Visual Patterns closed. Current [PRIMARY|TRANSFER|CLOSED-NOTE] choices remain in this session."
- Reopen restores active choices only. Reload restores sanitized eligibility with clean media/prompt/configuration/result fields.
- Persistent evidence excludes media/path, descriptions, prompts/outputs, endpoint, credential, response, action request, and prose.
- After mastery acknowledgement, focus prefers `Continue`; acknowledgement and progression remain separate actions.
- Dismissal never accesses media, calls a service, uses Azure, publishes, deletes, performs an action, or implies a Machine response.

### Planned Offline AI-901 Objective Ledger

- Runtime integration is incomplete; this section defines target focus, dismissal, privacy, status, and ownership behavior.
- Target title and dismissal name: `Offline AI-901 Objective Ledger`; `Exit Objective Ledger`.
- System-owned modes are `PRIMARY`, `TRANSFER`, `CLOSED-NOTE`, and `MASTERED`; cards use `n/15`.
- Objective/evidence teaching, concept/implementation distinctions, remediation, readiness, and completion remain `901 TEACHER` copy.
- Ledger choices/pointers are `PILOT // EVIDENCE LEDGER OWNER`; prose is `PILOT // CLOSED-NOTE DOMAIN OWNER`.
- Status values are exactly `ready`, `remediate`, and `not_yet_assessed`; confidence never changes status or mastery.
- Exit line: "Objective Ledger closed. Current [PRIMARY|TRANSFER|CLOSED-NOTE] ledger remains in this session."
- Reopen restores statuses and evidence pointers. Reload restores sanitized eligibility with clean scenario/prose fields.
- Persistent evidence excludes exam text, credentials, endpoint/service data, personal notes, action requests, and prose.
- After mastery acknowledgement, focus prefers `Continue`; acknowledgement and progression remain separate actions.
- Dismissal never calls a service, performs an action, predicts an exam result, grants authority, or implies a Machine response.

### Planned Offline Remediation Planner

- Runtime and game exercise integration are implemented; this section remains the normative focus, dismissal, privacy, and ownership contract.
- Target title and dismissal name: `Offline Remediation Planner`; `Exit Remediation Planner`.
- System-owned modes are `PRIMARY`, `TRANSFER`, `CLOSED-NOTE`, and `MASTERED`; cards use `n/6`.
- Gap diagnosis, priority, lesson/source routing, practice, reassessment, escalation, and completion remain `901 TEACHER` copy.
- Route choices are `PILOT // REMEDIATION ROUTE OWNER`; prose is `PILOT // CLOSED-NOTE PLANNER OWNER`.
- The visible boundary states course-authored/not-exam/no-guarantee/no-service/no-external-action.
- Exit line: "Remediation Planner closed. Current [PRIMARY|TRANSFER|CLOSED-NOTE] routes remain in this session."
- Reopen restores routes/statuses. Reload restores sanitized eligibility with clean scenario and prose fields.
- Persistent evidence excludes exam text, notes, credentials, endpoint/payload/response data, action requests, and prose.
- After mastery acknowledgement, focus prefers `Continue`; acknowledgement and progression remain separate actions.
- Dismissal never calls a service, performs an action, guarantees an exam result, grants authority, or implies a Machine response.

### Planned Offline Capstone Readiness

- Runtime and game exercise integration are implemented; this section remains the normative focus, dismissal, privacy, and ownership contract.
- Target title and dismissal name: `Offline Capstone Readiness`; `Exit Capstone`.
- System-owned modes are `PRIMARY`, `TRANSFER`, `CLOSED-NOTE`, and `MASTERED`; scenario cards use `n/6`.
- The persistent prerequisite panel shows all 15 objective rows, remediation-route closure, and fresh-evidence status using text, not color alone.
- Implementation guidance, current-source routing, remediation, recommendation, and completion remain `901 TEACHER` copy.
- Trace choices are `PILOT // CAPSTONE TRACE OWNER`; prose is `PILOT // CLOSED-NOTE CAPSTONE OWNER`.
- The visible boundary states course-authored/not-exam/no-guarantee/no-source-or-media-processing/no-service/no-external-action.
- Exit line: "Capstone closed. Current [PRIMARY|TRANSFER|CLOSED-NOTE] work remains in this session."
- Reopen restores the offline design and gate status. Reload restores sanitized eligibility with clean content, configuration, scenario, and prose fields.
- Persistent evidence excludes source content, audio, transcript, credential, endpoint, payload/response, exam-item text, action requests, and prose.
- After strict mastery acknowledgement, focus prefers `Continue to mixed simulation`; recommendation, acknowledgement, simulation launch, and later scene progression remain separate actions.
- Dismissal never processes media, calls a service, performs an action, guarantees an exam result, grants authority, or implies a Machine response.

### Offline Mixed Simulation

- Target title and dismissal name: `Offline AI-901 Mixed Simulation`; `Exit Mixed Simulation`.
- System-owned progress is `ITEM n/12` or `24/24 COMPLETE`; player-visible completion says `MIXED SIMULATION BLOCK COMPLETE`, not full readiness.
- Objective remediation and block meaning remain `901 TEACHER`; decisions, reasons, and optional timing remain `PILOT // MIXED SIMULATION OWNER`.
- Exit clears working choices and restores focus to its launch action. Reopen/reload derives the first incomplete item or completed result from sanitized evidence.
- Persistent evidence excludes exam text, notes, content, credential, endpoint, payload/response, action requests, choices, and free text.
- Timing is optional diagnostic data with no time limit; untimed completion is equivalent and timing never changes completion.
- Internal `mastered` is a demo progression key only; player copy defers full cumulative-retention mastery until its separate gate exists.
- After block acknowledgement, focus prefers the next-scene `Continue`; acknowledgement and progression remain separate actions.
- Dismissal never calls a service, performs an action, guarantees an exam result, grants authority, or implies a Machine response.

### Capstone-to-simulation-to-scene handoff

- Capstone dismissal focuses `Continue to mixed simulation`; activation opens the simulation dialog and does not change scene.
- Mixed-block completion focuses `Continue to the next survey site`; activation then enters the next scene in normal focus order.
- Teacher course state, System checkpoint, and Pilot progression remain separately owned states/actions.
- Each activation clears only its working session and preserves sanitized evidence; neither restores learner prose or choices.
- Reload derives the correct Capstone checkpoint, simulation item/result, or post-block Continue state.
- Departure copy is one compact Scene-owned observation; it never says a Machine surface waits, wakes, listens, accepts, recognizes, invites, or remembers.
- Progression is local game state only: no source/media processing, service call, credential use, Azure mutation, or external/destructive action.
- Reduced motion uses direct scene replacement; heading and object description remain available as text without sound, animation, or color.

### Evidence Packet

- Open dialogue: “Evidence workspace active. Inspect sources, repair JSON, then validate.”
- Close/Escape line: “Evidence workspace closed. Working JSON, notes, source tab, result, and hints remain.”
- Focus returns to the grounded Evidence Terminal hotspot.
- Dismissal does not transfer the packet or trigger an automaton response.

## Focus restoration after state change

Exact trigger restoration is correct only if the opening trigger remains connected and enabled.

When acknowledgement changes progression:

- First Signal completion: prefer the newly awake Route Marker as the next focus target or announce its availability, rather than returning to a completed Petal.
- Route mastery: prefer `Continue` or `Start Calibration`; neither choice should be automatic.
- Calibration mastery: prefer `Continue` because the optional lesson no longer needs a resume action.
- Workload Sort mastery: prefer the scene's Continue action after the success recap.
- Evidence mastery: prefer `Descend to the city` after the final acknowledgement recap.
- Structured Packets mastery: prefer `Continue` after the System announces availability.
- Control Flow mastery: prefer `Continue` after the System announces availability.
- Client Bridge mastery: prefer `Continue` after the System announces availability.
- Text Analysis mastery: prefer `Continue` after the System announces availability.
- Speech Workloads mastery: prefer `Continue` after the System announces availability.
- Extraction Workloads mastery: prefer `Continue` after the System announces availability.
- Portal Orientation mastery: prefer `Continue` after the System announces availability.
- Prompt Layers mastery: prefer `Continue` after the System announces availability.
- Client Boundaries mastery: prefer `Continue` after the System announces availability.
- Single Agent mastery: prefer `Continue` after the System announces availability.
- Text/Speech Patterns mastery: prefer `Continue` after the System announces availability.
- Visual Patterns mastery: prefer `Continue` after the System announces availability.
- Objective Ledger mastery: prefer `Continue` after the System announces course readiness without an exam guarantee.
- Remediation Planner mastery: prefer `Continue` after all weak routes close without an exam guarantee.
- Capstone mastery: prefer `Continue to mixed simulation` after strict prerequisite and closed-note gates.
- Mixed Simulation block completion: prefer `Continue to the next survey site` without claiming cumulative mastery or an exam result.

If implementation cannot safely assign the next focus target, leaving focus unset is preferable to focusing a disabled, hidden, or narratively stale control. The Accessibility Sentinel should treat missing next-action focus as a usability finding, not solve it by weakening mastery.

## Reload and resume distinction

Focus restoration applies to dismissal inside the current application session. It does not imply restoration after a full reload.

On reload/resume:

- working sessions start clean according to each exercise contract;
- sanitized mastery evidence may persist;
- focus begins in the restored screen's normal document order;
- the system may announce restored progression, but no Terminal claims to remember the abandoned cursor position.

Recommended system copy:

> Expedition state restored. Working sessions begin clean.

Pending acknowledgements use their scene-specific recap and next action rather than reopening the previous modal.

## Keyboard-help copy

If keyboard help is displayed, keep it explicitly non-diegetic and concise:

> Tab moves through this workspace. Shift+Tab moves back. Escape closes without discarding this session.

Do not require the learner to discover Escape. The visible Close or Exit button remains mandatory. Keyboard technique is never part of Python or AI-901 mastery evidence.

## Pixel-UI constraints

- Fit help and dismissal state inside the final `640 × 480` square-logical-pixel interface.
- Prefer one compact status line; do not add a persistent modern modal tutorial overlay.
- Keep focus rings, title, close control, and status readable without covering the active task.
- At narrow host sizes, Terminal scrolling may reveal later controls, but the focused title and visible Close/Exit must remain understandable on entry.
- Copy must remain useful without animation, color, or sound.

## Lore and learning safety gates

- Modal focus is human UI state, never Machine attention.
- Inert background controls do not mean the world stops.
- Focus containment does not mean captivity or refusal.
- Close and Escape are identical safe dismissals.
- Dismissal does not equal acknowledgement, submission, transfer, failure, or mastery.
- In-memory persistence is attributed to expedition application state.
- Focus restoration creates no new canon and unlocks no unique story line.
- Keyboard dexterity is not graded as Python or AI-901 knowledge.
- Microsoft principle instruction remains in the source-grounded Teacher layer, never local-surface or story dialogue.
- Central mysteries remain untouched.

## 901 Teacher handoff

Review learner-facing `L-01-03` instructions so the focus-managed shell supports debugging without becoming part of the assessment:

- add the one-line keyboard help above to orientation, not scoring;
- state that Escape/Exit preserves the current calibration session and the physical route remains open;
- keep `PY-007` mastery limited to traceback reading, diagnosis, repair, rerun, and explanation;
- ensure no assessment item asks what Tab, Escape, modal, focus, or inert means.
