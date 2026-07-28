# Reusable Agent Operations Playbook

## Purpose

This playbook captures a practical method for creating, running, managing,
scoping, automating, pausing, and improving a multi-agent production system.
It is designed to transfer to another software, game, research, creative, or
documentation project without importing project-specific lore or terminology.

The central lesson is simple:

> A useful agent is not a personality or an extra pair of hands. It is a
> bounded decision owner with explicit authority, inputs, outputs, evidence,
> and a stop condition.

More agents do not automatically produce more work. A multi-agent system earns
its complexity only when the roles separate genuinely different kinds of
judgment, prevent expensive mistakes, or make a long workflow safely
resumable.

---

## 1. The operating principles

### 1.1 Authority must be explicit

Every run needs an authority order. A dependable default is:

1. the user's latest explicit instruction;
2. repository-level operating instructions;
3. the current-state handoff;
4. the workflow or runbook;
5. the agent registry;
6. the selected role profile;
7. the versioned work contract;
8. supporting specifications, logs, and evidence.

This prevents an old schedule, archived prompt, stale plan, or downstream
summary from overriding the current task.

### 1.2 Current state has one owner

Maintain one small file as the sole current-state authority, for example:

`NEXT_INSTANCE_HANDOFF.md`

It should contain:

- workflow status: active, paused, complete, or blocked;
- current cycle or work-unit ID;
- latest completed stage and commit;
- exact next stage;
- exact input contract for that stage;
- current return loop, if any;
- automation status and cadence;
- protected work and hard stops;
- one executable next action.

Do not turn the handoff into a historical diary. Git history and specialist
logs preserve history; the handoff preserves the edge.

### 1.3 Separate definition from execution

For complex work, use two broad layers:

- **Definition roles** decide purpose, domain meaning, sequence, constraints,
  feasibility, and the versioned implementation contract.
- **Execution roles** interpret that contract, specify the experience, build
  it, supply final content, and polish it.

Only begin execution after a complete, conflict-free contract reaches a named
ready gate. This dramatically reduces rework caused by building against
aspirational or contradictory requirements.

### 1.4 Run dependent roles sequentially

When roles transform the same artifact, they should run in sequence. A
downstream role begins only after the preceding role produces a validated
handoff.

Parallelism is appropriate only when:

- the tasks are genuinely independent;
- they do not edit the same control artifacts;
- neither task needs the other's conclusions;
- their results can be reconciled deterministically.

Do not parallelize merely because agent slots are available.

### 1.5 Return to the earliest responsible owner

When a defect is found, route it to the first role with authority to correct
it. Do not:

- restart the entire workflow automatically;
- ask a downstream implementer to redefine upstream intent;
- let the final reviewer patch a defect it is supposed to judge;
- silently absorb a contract change.

Examples:

| Defect | Return owner |
|---|---|
| Product purpose or audience | Product/vision owner |
| Domain meaning, narrative, or policy | Domain owner |
| Sequence, dependency, or route | Planning owner |
| Security, privacy, accessibility, data, performance, or recovery | Viability owner |
| Cross-discipline ambiguity | Contract integrator |
| User flow or layout | Experience designer |
| Functional behavior | Implementer |
| Missing or provisional content/asset | Content owner |
| Presentation defect | Presentation owner |
| Evidence or reconciliation defect | Independent release owner |

Resume forward from the corrected stage after revalidation. Do not repeat
unaffected stages.

### 1.6 A `HOLD` is a successful safety outcome

Every gate should permit three honest outcomes:

- `PASS` or the stage's ready state;
- `REVISE`, with an exact return owner and acceptance evidence;
- `HOLD`, when required authority, evidence, input, or safety conditions are
  missing.

An agent that stops unauthorized work is functioning correctly. Never mark
work complete because time, context, or token budget is low.

### 1.7 Evidence must match the claim

Source inspection does not prove runtime behavior. Automated tests do not
replace visual judgment. A rendered screenshot does not prove save
correctness. A generated reference image does not prove runtime integration.

Use the narrowest evidence that directly supports each claim, and state
limitations honestly.

---

## 2. Decide whether multiple agents are warranted

Before creating roles, map the work as a chain of decisions and transformations.

Use a separate role when at least one of these is true:

- it owns a distinct kind of authority;
- it requires a materially different expertise or review posture;
- its output can be expressed as a stable contract;
- a defect in its domain needs a clear return destination;
- independence from the builder is important;
- it creates a useful pause or synchronization boundary.

Combine roles when:

- they repeatedly read the same inputs and restate the same conclusions;
- their outputs cannot be distinguished;
- defects always return to the same owner;
- the handoff costs more than the review benefit;
- one role exists only to make the team look comprehensive.

Do not choose a fixed number of agents first. Choose the transformations first,
then assign owners.

---

## 3. A scalable role architecture

### 3.1 Compact five-role system

This is sufficient for many projects:

| Role | Owns | Output |
|---|---|---|
| Vision Owner | Purpose, audience, priorities, non-goals | Product brief |
| Domain and Planning Owner | Domain meaning, sequence, dependencies | Approved plan |
| Contract Integrator | Feasibility and conflict-free specification | Versioned build contract |
| Builder | Implementation, focused tests, implementation report | Functionally complete artifact |
| Independent Release Owner | Fresh validation, variances, release, next handoff | Reconciliation and release |

### 3.2 Full eleven-role system

For a complex playable, regulated, cross-disciplinary, or high-polish product,
the functions can be separated further:

| Stage | Generic role | Core question | Gate |
|---|---|---|---|
| 1 | Product Director | What are we making, for whom, and why? | `VISION READY` |
| 2 | Domain Director | What meaning, world, policy, or narrative must remain true? | `DOMAIN READY` |
| 3 | Program Planner | Where does this unit sit, and what does it depend on? | `PLAN READY` |
| 4 | Viability Director | Can it satisfy technical, learning, safety, privacy, accessibility, performance, and recovery requirements? | `VIABILITY READY` |
| 5 | Contract Integrator | Can all upstream decisions become one conflict-free build contract? | `SHELL READY` |
| 6 | Creative Director | What is the compelling interpretation inside that contract? | `CREATIVE LOCK` |
| 7 | Experience Architect | What exactly happens in every state, flow, layout, error, retry, and return? | `EXPERIENCE READY` |
| 8 | Implementation Engineer | Does the complete behavior work? | `FUNCTIONALLY COMPLETE` |
| 9 | Content and Asset Owner | Are real content and production assets present and correctly sourced? | `CONTENT COMPLETE` |
| 10 | Presentation Director | Is the result polished across visual, responsive, audio, and accessible states? | `PRESENTATION COMPLETE` |
| 11 | Independent Release Officer | Does the as-built result satisfy the contract, and what happens next? | `AS BUILT RELEASED` |

The titles can match the project's theme. The functions should remain stable.

### 3.3 Why the independent release role matters

The final examiner should:

- use a fresh context when possible;
- read the original versioned contract;
- compare the implementation requirement by requirement;
- rerun release evidence independently;
- classify every variance;
- return defects rather than patching them;
- update master plans only from accepted as-built evidence;
- publish one synchronized next action.

Fresh review has caught defects that passed full automated suites, including
incorrect presentation at a state boundary and required production assets
that were still placeholders. Independence is a quality control, not
ceremony.

---

## 4. Design every role as a contract

Each role profile should contain the following sections.

### 4.1 Identity

- stable role ID;
- human-readable title;
- team or workflow layer;
- required inputs;
- primary output;
- default validation tier.

Use stable IDs even if themed titles later change.

### 4.2 Mission

One paragraph stating the transformation the role performs.

Good:

> Convert the approved product and domain baselines into an ordered delivery
> plan with exact dependencies, entry conditions, exits, and hard stops.

Weak:

> Help with planning and make sure everything is good.

### 4.3 Success definition

Define what must be true for the stage to pass. Make it observable.

### 4.4 Read-before-acting list

Specify:

- the immediately preceding handoff;
- the current work contract or upstream baseline;
- exact control sections needed;
- role-specific sources;
- applicable safety or policy authorities.

Avoid “read the entire repository.” Excessive reading consumes time, increases
stale-context risk, and encourages unbounded exploration.

### 4.5 Owns

List the decisions the role may make.

### 4.6 Does not own

List adjacent decisions the role must not make. This section is often more
valuable than the ownership list.

### 4.7 Procedure

Give the role a short ordered method. Include:

- verification of predecessor inputs;
- bounded work;
- proportional validation;
- artifact updates;
- disposition;
- dedicated checkpoint;
- exact handoff.

### 4.8 Validation

Name the evidence required at that stage, not the entire release suite unless
the role is the release owner.

### 4.9 Stop and return conditions

Define:

- when to return upstream;
- who owns each defect type;
- when user authority is required;
- when to record `HOLD`;
- what must never be inferred.

### 4.10 Required output

Specify the exact artifact, required fields, and destination.

### 4.11 Report envelope

Every stage report should include:

- stage and role ID;
- disposition;
- authorities read;
- bounded work completed;
- decisions locked;
- flexible areas left downstream;
- files and artifacts changed;
- validation evidence;
- variances discovered or resolved;
- protected boundaries verified;
- commit and synchronization status;
- exact next-stage handoff.

---

## 5. Invoke roles precisely

Every agent invocation should mechanically name:

1. stage and stable role ID;
2. work-unit or shell ID and version;
3. exact starting authority;
4. one bounded objective;
5. permitted files and systems;
6. required validation rung;
7. stop boundary;
8. required output artifact;
9. required checkpoint or commit;
10. next-stage recipient.

If a material field is ambiguous, the agent should perform read-only
orientation, record the ambiguity, and return to the preceding owner. It
should not invent scope.

### Reusable invocation template

```markdown
## Invocation

- Stage:
- Stable role ID:
- Work-unit ID/version:
- Starting authority:
- Bounded objective:
- Permitted files/systems:
- Required validation:
- Stop boundary:
- Required output:
- Required commit/checkpoint:
- Next recipient:

Complete only the named outcome. Once the required evidence makes the
disposition decidable, update the designated artifacts, create the dedicated
checkpoint, report the exact handoff, and stop.
```

The terminal condition matters. Without it, capable agents continue reading,
polishing, or testing after the decision is already supported.

---

## 6. Use a versioned implementation contract

The most important artifact in a definition-to-execution workflow is a
complete, versioned contract. It may be called a shell, build brief, work
order, issue specification, or implementation package.

It should define:

- ID and version;
- source authorities;
- purpose and user promise;
- exact entry state and permitted exits;
- spatial, interface, ownership, and data boundaries;
- required interactions and state transitions;
- required content, learning, or business evidence;
- permitted systems, assets, utilities, and sources;
- privacy and data-retention behavior;
- save, resume, rollback, sanitation, and failure recovery;
- accessibility and responsive behavior;
- offline and degraded behavior;
- performance and size budgets;
- fixed visual, domain, or policy invariants;
- forbidden states, effects, routes, disclosures, and later-scope exposure;
- validation ladder;
- definition of done;
- variance-request format;
- explicit `READY`, `REVISE`, or `HOLD` disposition.

Do not issue a ready contract while it remains aspirational, incomplete, or
internally contradictory. Do not send it to builders “for exploration.”

Downstream roles may request a variance but may not silently modify the
contract.

---

## 7. Scope work as integration-sized tranches

A tranche should be:

- large enough to create a user-visible or system-meaningful change;
- small enough for one contract and one release review;
- bounded by an exact entry and exit;
- testable without manufacturing hidden state;
- reversible or returnable at a clear owner boundary.

Avoid two extremes:

- **Micro-task churn:** many tiny passes whose handoffs cost more than the
  work.
- **Epic-sized ambiguity:** a cycle so large that no role can validate its
  own boundary or safely resume after interruption.

Time is a scheduling budget, not the definition of done. A “three-hour cycle”
may run longer or end in a safe checkpoint. Never cut across a stage merely to
match the clock.

### Convergence rule

If several cycles keep expanding the same work unit without moving it toward
integration, pause elaboration and perform a convergence audit:

- Which requirements are essential?
- What can be merged or deferred?
- What evidence is still missing?
- Is the contract unstable?
- Does the work need a smaller slice?
- Is a `HOLD` more honest than another micro-seam?

---

## 8. Manage state with artifacts, not memory

Use five artifact layers:

1. **Stable baseline**
   - product purpose;
   - domain rules;
   - architecture;
   - global safety, quality, and performance constraints.
2. **Versioned work contract**
   - complete requirements for one bounded unit.
3. **Production package**
   - design, implementation, content, and presentation evidence.
4. **As-built reconciliation**
   - requirement comparison, release evidence, variances, and accepted
     lessons.
5. **Current handoff**
   - compact synchronized state and one exact next action.

### Stable baseline versus recurring verification

Build the full baseline once. On later cycles, upstream roles should normally
issue compact delta certificates keyed to stable authority versions or hashes.
Reopen a baseline only for:

- a user-approved direction change;
- a documented contradiction;
- a failed viability requirement;
- an accepted as-built discovery with global impact;
- an explicit release recommendation approved for integration.

Keep the versioned implementation contract complete even when upstream
baseline reviews are compact. Builders should not have to reconstruct a
contract from scattered deltas.

### Avoid competing state authorities

Metrics ledgers, logs, scheduled prompts, role reports, and dashboards are
evidence—not alternate sources of current truth.

---

## 9. Validation ladder

Validation should grow with risk and progress.

### Tier 1: Contract checks

- required sections present;
- authority is valid;
- sources and cross-references agree;
- forbidden boundaries are explicit;
- dependencies and versions resolve.

### Tier 2: Focused checks

- changed function, content, asset, layout, or policy;
- happy path and direct failure cases;
- accessibility state directly affected;
- exact boundary introduced by the change.

### Tier 3: Related regression

- predecessor and successor transitions;
- shared controllers or renderers;
- retry, return, resume, and malformed state;
- data and privacy sanitation;
- adjacent responsive states.

### Tier 4: Full product checks

- full test suite;
- readiness validators;
- production build;
- bundle or asset budgets;
- served-file identity;
- patch and dependency integrity.

### Tier 5: Independent release

- isolated production preview;
- endpoint/liveness preflight;
- exactly one complete post-build end-to-end run when practical;
- no overlapping build and E2E processes;
- exact viewport and zoom checks;
- visual and accessibility review;
- forced-color, reduced-motion, grayscale, keyboard, and focus checks where
  applicable;
- save/recovery and privacy evidence without touching user data;
- process and fixture cleanup;
- shell-to-build reconciliation;
- repository synchronization.

### Deterministic checks and human judgment are complementary

Automated geometry can catch clipping, target size, overflow, and containment.
Human review can catch hierarchy, legibility, emotional tone, false
affordances, and visual confusion. Neither should replace the other.

Record the actual reported viewport and device-pixel ratio. A requested browser
override is not proof that the exact viewport was achieved.

### Test state transitions, not only labels

When one renderer spans a boundary, assert the exact identity on:

- predecessor state;
- accepted destination state;
- rejected or failed state;
- return state;
- resume state.

Tests that assert only state labels can miss content from the wrong state
appearing at the right time.

---

## 10. Variance management

Every mismatch between the contract and the implementation should enter a
variance register.

Useful classifications:

- `ACCEPTED IMPROVEMENT`
- `REQUIRED CORRECTION`
- `MASTERPLAN UPDATE`
- `DEFERRED LIMITATION`
- `UNAUTHORIZED DIVERGENCE`

Each variance records:

- ID;
- requirement or contract line;
- observed result;
- classification;
- impact;
- earliest responsible owner;
- required acceptance evidence;
- resolution commit;
- independent verification.

Changes to product purpose, domain meaning, sequence, learning evidence,
privacy, accessibility, persistence, authority, or external effects should
never be accepted after the fact by a downstream role.

---

## 11. Checkpoints, commits, and synchronization

For repository-based work:

- create one dedicated commit per stage;
- stage only intended files;
- preserve unrelated user work;
- permit a documented no-change checkpoint for a genuinely read-only pass;
- push at meaningful gates, not after every sentence;
- verify local and remote identity at synchronization gates.

A practical push pattern is:

1. versioned contract ready;
2. functionally complete implementation;
3. final independent release.

Add an earlier push when an interruption or machine shutdown makes a local
checkpoint risky.

### Why one commit per stage helps

It provides:

- clear ownership;
- interruption recovery;
- reviewable diffs;
- measurable stage boundaries;
- precise rollback;
- proof that a handoff is durable.

The commit is not a substitute for the report, and the report is not a
substitute for the commit.

---

## 12. Scheduled and autonomous operation

### 12.1 Keep the scheduled prompt stable

A scheduled prompt should contain:

- workflow identity;
- instruction to read repository authorities;
- non-overlap and resume behavior;
- canonical role order;
- release and safety invariants;
- notification policy.

It should not contain a copied exact-next-action edge. That edge becomes stale.
The scheduled task must read the current handoff on every wake.

### 12.2 One wake, one continuing cycle

On wake:

1. read repository instructions, current handoff, workflow, and registry;
2. determine whether a cycle is active, paused, returned, or complete;
3. resume the latest synchronized stage;
4. never restart completed work;
5. never duplicate accepted commits;
6. run dependent roles sequentially;
7. close at independent release or a genuine safe hold;
8. synchronize the next exact action.

### 12.3 Non-overlap is mandatory

If a scheduled wake occurs while the previous cycle is still active, it should
join or defer to the active cycle—not start another one.

The interval controls wake opportunities, not cycle duration.

### 12.4 Cadence selection

Choose cadence from measured cycle duration:

- cadence shorter than typical duration creates overlap pressure;
- cadence far longer than typical duration reduces throughput;
- a modest buffer supports cleanup and synchronization.

If cycles typically take three to four hours, a three-hour schedule can still
work only if non-overlap and checkpoint resumption are enforced. Fewer,
larger cycles often create less interruption and better visible progress than
frequent small wakes.

### 12.5 Notification policy

Notify the user for:

- genuine blocker;
- destructive or external decision;
- major direction change;
- repeated validation failure;
- completed released cycle.

Routine stage transitions can remain quiet. At completion, report concise,
evidence-backed outcomes and the tangible artifact.

---

## 13. Safe pause and shutdown protocol

When the user asks to stop:

1. stop launching new stages;
2. allow the current bounded operation to reach a safe boundary when
   practical;
3. stop only processes owned by the workflow;
4. preserve completed work in a dedicated checkpoint;
5. push the latest valid checkpoint when authorized and safe;
6. update the current handoff with:
   - paused status;
   - last completed stage and commit;
   - exact next stage;
   - return-loop state;
   - validation still required;
   - automation disabled;
7. verify synchronization;
8. report that the computer can be safely shut down.

Do not continue into a downstream stage merely because it is next. A
versioned-contract boundary is an especially good pause point.

When resuming, start from the handoff. Do not recreate prior reasoning from
chat history.

---

## 14. Tool and process ownership

Automated workflows often launch previews, browsers, fixtures, test runners,
and image generators. Treat process ownership as part of correctness.

Record:

- command or launch manifest;
- owned process ID when available;
- port and expected served identity;
- liveness preflight;
- cleanup result.

Stop only owned processes. Do not kill an unknown listener simply because it
uses the expected port.

If a tool hangs:

1. wait a bounded period;
2. inspect available output and repository state;
3. interrupt only the owned task or process;
4. preserve any valid checkpoint;
5. resume from durable artifacts;
6. do not restart the whole cycle unless the state is corrupt.

---

## 15. Visual deliverables as progress evidence

A tangible visual at the end of a cycle is useful when it is treated as a
controlled production artifact, not decoration.

### Reveal contract

Before generation:

- choose one accepted design, layout, lore, or production decision to make
  certain;
- compare it with recent visual canon;
- vary subject, scale, or composition;
- define spoiler and authority boundaries;
- write explicit quality criteria.

After generation:

- perform private quality review before the file enters the project;
- archive exactly one accepted image;
- record prompt, model/tool, date, dimensions, hash, and source status;
- close one named visual-production checklist item;
- update the relevant visual record;
- distinguish reference status from runtime integration;
- let the independent release role validate the exact accepted candidate;
- show it only after release.

### Bounded recovery

A useful policy is:

1. one private initial generation;
2. if it fails documented quality review before entering the workspace, one
   targeted private recovery generation;
3. no third attempt in that cycle.

Rejected drafts stay outside:

- workspace;
- canon;
- provenance package;
- commits;
- user-facing reveal.

Track two separate counts:

- private generation attempts;
- accepted archived sources.

This avoids provenance ambiguity while preserving “exactly one accepted
reveal.”

### Production asset versus canonical reference

Always state whether an image is:

- concept/reference;
- approved production source;
- derived runtime asset;
- actually integrated and served.

If a production derivative is created from an accepted source, record the
transformation and do not overclaim native resolution or origin.

---

## 16. Protect user work and sensitive state

Every workflow needs a protected-work policy.

Agents should:

- preserve unrelated files and changes;
- never inspect, stage, move, delete, or commit named protected items;
- avoid broad destructive commands;
- avoid opening restricted or hidden material without explicit authority;
- never mutate user browser storage, production data, or saves to manufacture
  a gated state;
- prefer deterministic, storage-free test fixtures;
- state live-review limitations honestly;
- request authority before external, destructive, or direction-changing
  actions.

Protected paths can remain untracked without being “cleaned up.” A clean
project checkpoint means the workflow's own changes are controlled, not that
all user files have been erased or committed.

---

## 17. Common failure modes and what corrected them

| Failure mode | Why it happens | Correction |
|---|---|---|
| Too much rereading | Every role rereads append-only history | Read stable authorities once per wake, selected profile immediately before its stage, and only cited current sections |
| Stale scheduled edge | Automation prompt copies current task | Make the handoff the sole exact-next-action authority |
| Duplicate cycles | Schedule fires before prior run ends | Enforce one active cycle and resume checkpoints |
| Agent drift | Objective lacks stop boundary | Use the ten-field invocation contract and an explicit terminal condition |
| Silent scope expansion | Ownership and non-ownership are vague | Define `Owns`, `Does not own`, variance process, and return map |
| Premature building | Specification is incomplete | Require a versioned ready contract before execution |
| Late architectural rework | Downstream role patches upstream conflict | Return to earliest responsible owner |
| Green tests, wrong visual | Tests assert state but not rendered identity | Add predecessor/destination/return identity checks plus human review |
| Placeholder survives release | Layout passes despite provisional content | Require asset identity, provenance, direct import, emitted bytes/hash, and retired-placeholder evidence |
| Fake viewport confidence | Browser override is treated as exact | Record actual viewport/DPR and use exact deterministic geometry checks |
| Release reviewer fixes its own finding | Pressure to finish | Preserve reviewer independence; issue `REVISE` with exact evidence |
| Repeated full suites | Every stage runs release validation | Use the tiered ladder; reserve the full gate for release |
| Excessive pushing | Push after every small edit | Commit per stage, push at contract/function/release gates |
| Orphan previews | Wrapper lifecycle is ambiguous | Use owned launch manifests, liveness checks, and PID-scoped cleanup |
| User state manipulated for QA | Gated screens are hard to reach | Use deterministic storage-free fixtures that cannot become production seams |
| Image churn | Unlimited generation retries | One private attempt, one targeted recovery, one accepted archive |
| Ambiguous image provenance | Attempt count and accepted count are conflated | Record both separately |
| Handoff bloat | Current file accumulates diaries | Replace current control in place; keep details in role logs and Git |
| Automation cannot stop safely | Pause is treated as cancellation | Finish the current safe boundary, synchronize it, and write one exact resume action |
| More roles, no more quality | Roles do not own distinct decisions | Merge roles until every handoff has a meaningful contract |

---

## 18. Adaptive process improvement

Run a short retrospective after each completed release and before the final
progress reveal.

Use one disposition:

- `KEEP` — the system worked; make no process change.
- `TUNE` — apply one to three bounded, reversible improvements.
- `REDESIGN` — evidence shows the structure is failing; make the smallest
  safe structural correction with migration and rollback.

### Retrospective template

```markdown
## YYYY-MM-DD / cycle ID — KEEP | TUNE | REDESIGN

- Observed:
- Measured stage boundaries:
- Decision:
- Expected benefit:
- Preserved guardrails:
- Validation in the next cycle:
- Rollback trigger:
```

Only adapt process mechanics autonomously:

- reading scope;
- handoff templates;
- stage size;
- validation placement;
- fixture organization;
- checkpoint and push cadence;
- model routing;
- schedule cadence;
- log structure.

Do not use a process retrospective to weaken product direction, domain truth,
learning or policy evidence, privacy, accessibility, release independence,
protected work, or external-authority rules.

### Useful metrics

Measure:

- total cycle duration;
- duration per stage;
- longest stage;
- number of return loops;
- defects caught before release versus at release;
- repeated reads or duplicated prose;
- full-suite and build count;
- failed launches;
- orphan processes;
- handoff ambiguity;
- number and quality of variances;
- visible user-facing delta;
- whether the next action was immediately executable.

Metrics should inform tuning, not become another authority file.

---

## 19. Model and tool routing

Use the best reasoning model for:

- ambiguous product or domain decisions;
- conflict integration;
- risky implementation;
- independent release reconciliation.

A faster or cheaper model can handle bounded mechanical work only when:

- the contract is exact;
- the allowed files are narrow;
- validation is deterministic;
- no safety or domain authority is being inferred.

Do not route models by rank or title. Route them by ambiguity, risk, and
verification cost.

Changing models does not repair a weak workflow. Clear authority, state,
scope, and evidence usually matter more than a modest model upgrade.

---

## 20. Starter repository structure

```text
AGENTS.md
NEXT_INSTANCE_HANDOFF.md
AGENT_WORKFLOW.md
Agent Profiles/
  README.md
  product-director.md
  domain-director.md
  program-planner.md
  viability-director.md
  contract-integrator.md
  creative-director.md
  experience-architect.md
  implementation-engineer.md
  content-owner.md
  presentation-director.md
  release-officer.md
Production Pipeline/
  PROCESS_CHANGELOG.md
  STAGE_METRICS.md
  Work Units/
  Reconciliation/
  Logs/
Visual Direction/
  Production Masters/
```

Not every project needs every directory or role. Start with the smallest
structure that creates unambiguous ownership.

---

## 21. Reusable control-file templates

### 21.1 `AGENTS.md`

```markdown
# Project agent instructions

## Authority order

1. User's latest explicit instruction
2. This file
3. `NEXT_INSTANCE_HANDOFF.md`
4. `AGENT_WORKFLOW.md`
5. Agent registry and selected role
6. Current versioned work contract
7. Supporting artifacts

## Active workflow

- Canonical role order:
- Ready gates:
- Independent release owner:
- Automation authority:

## Invariants

- Product/domain:
- Security/privacy:
- Accessibility:
- Data/save/recovery:
- Performance:
- Protected user work:
- Forbidden material/actions:

## Operating rules

- Run dependent roles sequentially.
- Resume from the latest synchronized checkpoint.
- Return defects to the earliest responsible owner.
- Never silently expand scope.
- Use one dedicated checkpoint per stage.
- Keep the current handoff compact and authoritative.
```

### 21.2 `NEXT_INSTANCE_HANDOFF.md`

```markdown
# Next Instance Handoff

## Status

- Workflow:
- Automation: ACTIVE | PAUSED | DISABLED
- Cycle/work-unit:
- Contract version:
- Current disposition:
- Last completed stage:
- Last synchronized commit:

## Exact next action

Run `<role ID>` on `<bounded objective>` using `<authority/contract>`.

## Required inputs

- ...

## Required output and gate

- ...

## Active return loop

- None | variance ID, owner, acceptance evidence

## Hard stops

- ...

## Protected work

- ...

## Resume verification

- Expected local/remote identity:
- Owned processes that should or should not exist:
```

### 21.3 Role profile

```markdown
---
stable_id:
team:
primary_input:
primary_output:
default_validation_tier:
---

# Role title

## Mission

## Success definition

## Read before acting

## Owns

## Does not own

## Procedure

## Validation

## Stop and return conditions

## Required output

## Report envelope
```

### 21.4 Versioned work contract

```markdown
# Work Unit `<ID>` — Version `<N>`

## Source authorities
## Purpose and user promise
## Entry state
## Permitted exits
## Required states and transitions
## Content or evidence requirements
## Systems and asset allowlist
## Privacy and sanitation
## Save, resume, rollback, and failure recovery
## Accessibility and responsive requirements
## Performance and size budgets
## Fixed invariants
## Forbidden behavior and scope
## Validation ladder
## Definition of done
## Variance request format
## Disposition

`READY | REVISE | HOLD`
```

### 21.5 Variance record

```markdown
## `<VAR-ID>`

- Contract requirement:
- Observed result:
- Classification:
- Impact:
- Earliest responsible owner:
- Required correction or decision:
- Acceptance evidence:
- Resolution commit:
- Independent verification:
```

### 21.6 Scheduled-loop prompt

```markdown
Continue `<project>` with exactly one complete, non-overlapping production
cycle per wake.

At every wake, read `AGENTS.md`, `NEXT_INSTANCE_HANDOFF.md`,
`AGENT_WORKFLOW.md`, and the agent registry. Treat
`NEXT_INSTANCE_HANDOFF.md` as the sole current-state and exact-next-action
authority. Never use a stale work edge copied into this prompt.

If a cycle is active, interrupted, or in a return loop, continue from the
latest valid synchronized checkpoint. Never restart completed stages,
duplicate accepted work, or run dependent roles concurrently.

Run the canonical roles sequentially. Before each stage, read its profile,
the immediately preceding handoff, and only the exact current-control and
contract sections required by that role.

Complete one bounded integration-sized work unit. Use the tiered validation
ladder and stage checkpoint policy. At release, independently reconcile the
as-built result with the contract, classify every variance, record
`PASS`, `REVISE`, or `HOLD`, update the compact current handoff, synchronize,
and verify repository identity.

Run a measured `KEEP`, `TUNE`, or `REDESIGN` retrospective. Preserve all
project invariants and protected user work. Notify the user only for a genuine
blocker, destructive/external decision, major direction change, repeated
validation failure, or completed released cycle.
```

---

## 22. Launching a new agent workflow

### Phase 1: Map the decision chain

Write the transformations from idea to released result. Assign one owner to
each distinct decision domain.

### Phase 2: Define invariants and authority

Create repository instructions, authority order, protected-work rules, and
the current-handoff format before agents begin production.

### Phase 3: Write role contracts

Create the registry and profiles. Make `Does not own`, return conditions,
evidence, and terminal conditions explicit.

### Phase 4: Create one bounded work contract

Use an existing-authority, low-risk, representative slice. Do not test the
workflow on the most ambiguous or consequential project decision.

### Phase 5: Run one manual test drive

Exercise every handoff sequentially. Measure:

- stage duration;
- artifact usefulness;
- repeated reading;
- return-routing accuracy;
- throughput;
- release quality;
- user-visible progress.

### Phase 6: Tune before automation

Fix ambiguity, unnecessary roles, excess reading, weak gates, and process
ownership. Keep all product and safety guardrails intact.

### Phase 7: Authorize recurring automation explicitly

Choose cadence from measured duration. Use a stable scheduled prompt and a
dynamic handoff. Enforce non-overlap and checkpoint resumption.

### Phase 8: Review after every release

Record `KEEP`, `TUNE`, or `REDESIGN`. Apply only small, evidence-backed,
reversible changes unless the structure itself is demonstrably failing.

---

## 23. One-page operating checklist

### Before the run

- [ ] Latest user instruction understood
- [ ] Repository instructions read
- [ ] Current handoff read
- [ ] Workflow and registry read
- [ ] Active/paused/return state resolved
- [ ] Protected work identified
- [ ] No overlapping cycle active

### Before each stage

- [ ] Selected profile read in full
- [ ] Predecessor handoff verified
- [ ] Starting authority exact
- [ ] One bounded objective
- [ ] Permitted files/systems explicit
- [ ] Validation rung explicit
- [ ] Stop boundary explicit
- [ ] Required artifact and next recipient explicit

### At each stage close

- [ ] Disposition honest
- [ ] Evidence proportional and direct
- [ ] Variances recorded
- [ ] Protected boundaries verified
- [ ] Dedicated checkpoint created
- [ ] Exact next handoff written
- [ ] Push performed if this is a synchronization gate

### At release

- [ ] Fresh contract-to-build comparison
- [ ] Every requirement dispositioned
- [ ] Every variance classified
- [ ] Full release ladder passed without invalid overlap
- [ ] Visual and accessibility judgment performed
- [ ] Owned processes cleaned up
- [ ] Master artifacts updated only from accepted evidence
- [ ] `PASS`, `REVISE`, or `HOLD` recorded
- [ ] Current handoff replaced with one executable next action
- [ ] Repository synchronization verified
- [ ] Retrospective recorded
- [ ] Tangible progress artifact shown only if accepted

### When pausing

- [ ] No new stage launched
- [ ] Current work stopped at a safe boundary
- [ ] Owned processes stopped
- [ ] Latest valid checkpoint preserved
- [ ] Handoff says `PAUSED`
- [ ] Exact resume action recorded
- [ ] Automation disabled
- [ ] Synchronization verified

---

## Final guidance

The strongest multi-agent workflow is not the one with the most elaborate
cast. It is the one in which:

- authority is impossible to misunderstand;
- current state is stored outside conversational memory;
- each role owns one meaningful decision boundary;
- the build begins only from a complete contract;
- defects return to the earliest owner;
- validation grows with risk;
- an independent examiner can say `REVISE` or `HOLD`;
- interruptions resume from durable checkpoints;
- automation never trusts a stale prompt;
- process changes are measured and reversible;
- every released cycle produces something the user can actually see or use.

Start small, test manually, measure the friction, and add roles only where
they create a better contract, a safer gate, or a clearer return path.
