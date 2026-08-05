# ChatGPT Pro Browser Planning Workflow

## Purpose

This workflow offloads long-form reasoning, review, synthesis, and planning to
ChatGPT Pro in a web browser while the Codex desktop account is close to its
usage limit. It is intentionally designed for a browser-only model that cannot
inspect the local Horizon Archive workspace, run the project, change files,
execute tests, use Git, or verify runtime behavior.

The goal is to return a carefully sourced, non-authoritative planning dossier
that Codex can inspect and integrate after the account resets. The browser work
should reduce later reasoning time without pretending that planning is the
same as implementation or release evidence.

## Current project boundary

At the time this workflow was written:

- `TD-010 / PASS - AS BUILT RELEASED` is the latest synchronized release.
- Recurring Skyscraper production is paused.
- No RP-011 packet, route, destination, shell, or successor is selected.
- The next executable role is inactive until Martin explicitly resumes work.
- If Martin resumes, the only authorized first role is Commandant.
- The accepted TD-010 reveal must not be regenerated, edited, replaced, or
  reinterpreted as a runtime asset.
- The archived two-team workflow remains inactive.

This document does **not** resume production. ChatGPT Pro must treat all of its
outputs as draft decision support. It may identify questions, compare existing
authorities, and propose evaluation methods, but it may not issue a canonical
stage gate, select RP-011, open a route, or claim that the project changed.

Before starting browser work, confirm that `NEXT_INSTANCE_HANDOFF.md` still
contains the same paused state. If it has changed, use the newest handoff and
revise this boundary before proceeding.

## Browser-only operating contract

ChatGPT Pro may:

- read files that Martin deliberately uploads;
- summarize, cross-reference, critique, and synthesize those files;
- conduct source-backed research in the browser;
- build matrices, checklists, taxonomies, decision registers, and prose specs;
- draft non-authoritative templates and future prompts;
- identify contradictions, gaps, risks, assumptions, and questions;
- create downloadable Markdown drafts for later review; and
- perform independent second-pass reviews in fresh chats.

ChatGPT Pro may not:

- claim access to the local directory, terminal, Git repository, application,
  browser profile, save data, build output, or test environment;
- write or modify canonical project files directly;
- produce code, patches, shell commands, migrations, or implementation steps;
- claim that a test, build, screenshot review, accessibility check, or runtime
  interaction passed;
- claim that a branch, commit, push, pull request, or release exists;
- manufacture evidence for a state it cannot directly observe;
- silently fill gaps in canon, learning evidence, routes, authority, identity,
  rewards, world response, successors, or post-ending content;
- inspect or request hidden lore, private browser data, campaign saves, the
  protected book scan, or the protected training-files directory;
- generate or edit a cycle-reveal image; or
- treat a polished draft as an approved project decision.

When evidence is absent, it must write `UNKNOWN`, `NOT PROVIDED`, or
`REQUIRES DESKTOP VERIFICATION`. It must never make a confident substitute.

## Recommended duration and shape

Run this as a multi-session planning expedition rather than one enormous
prompt. A thorough pass can occupy several long browser sessions over the
three-day reset window.

Use four browser chats:

1. **Primary Analyst** - performs extraction, mapping, and first-pass drafts.
2. **Curriculum and Viability Reviewer** - independently reviews AI-901,
   learning evidence, privacy, accessibility, save, recovery, offline, and
   performance constraints.
3. **Adversarial Reviewer** - receives the source packet and draft dossier in a
   fresh context, looking specifically for unsupported claims and boundary
   violations.
4. **Final Synthesizer** - reconciles accepted findings into the final handoff
   packet without adding new claims.

Do not ask these chats to impersonate the canonical eleven production roles.
Those roles own sequential stage gates and require the real repository and
evidence. The browser chats are analysts preparing inputs for those roles.

## Source packet preparation

### Packet A - required current authority

Upload fresh copies of:

1. `AGENTS.md`
2. `NEXT_INSTANCE_HANDOFF.md`
3. `SKYSCRAPER_AGENT_WORKFLOW.md`
4. `Skyscraper Agent Profiles/README.md`

Tell ChatGPT Pro that the authority order is:

1. Martin's latest explicit instruction.
2. Applicable `AGENTS.md` instructions.
3. `NEXT_INSTANCE_HANDOFF.md` for current state and exact next action.
4. `SKYSCRAPER_AGENT_WORKFLOW.md`.
5. The profile registry.
6. A selected role profile, when one is relevant.
7. An approved Playable Slice Shell, when one exists.
8. Current product, canon, curriculum, technical, visual, and work-log
   artifacts.

### Packet B - released-state evidence

Upload only the documents needed to understand the accepted TD-010 state and
the surface-canon boundary. Prefer current master artifacts and concise release
records over archive dumps. Include an explicit file manifest so the model
cannot imply that it has reviewed files it has not received.

Do not upload:

- `Art Of No Mans Sky Book Scan.pdf`;
- anything inside `Simplilearn Training Files/`;
- hidden-lore sources;
- private saves, browser exports, credentials, tokens, or personal data;
- generated build folders or dependency directories; or
- archived workflow material unless a current authority explicitly cites it.

### Packet C - focused planning sources

Upload focused documents in small groups for the phase that needs them. Useful
categories include:

- current product brief and world/narrative masterplan;
- campaign or released-route map;
- current AI-901 curriculum and evidence spine;
- gameplay and interaction system descriptions;
- accessibility, privacy, save, recovery, offline, and performance contracts;
- visual direction and presentation standards; and
- recent process retrospectives or accepted variance records.

Do not upload the entire repository merely to appear comprehensive. A smaller
declared packet produces a more auditable answer.

### Packet D - role profiles for template work

When Phase 7 begins, upload the eleven current profiles. Upload them in
canonical order and ask the model to process one profile at a time:

1. Commandant
2. Colonel
3. Operations Planning Major
4. Office of Science Administrator
5. Mission Captain
6. Reconnaissance Sergeant
7. Tactical Operations Specialist
8. Combat Engineer
9. Quartermaster
10. Image Specialist
11. Intelligence Officer

The template pass may extract required inputs, decisions, outputs, stop
conditions, and handoff fields. It may not execute the roles.

## File and claim discipline

Every browser-produced document must begin with this header:

```markdown
Status: DRAFT - NON-AUTHORITATIVE BROWSER ANALYSIS
Prepared by: ChatGPT Pro browser session
Repository access: NONE
Runtime/test access: NONE
Canonical effect: NONE UNTIL REVIEWED AND INTEGRATED
Source packet date: YYYY-MM-DD
```

Every document must end with:

```markdown
## Verification debt

- Claims requiring local file confirmation:
- Claims requiring runtime or test confirmation:
- Decisions requiring Martin:
- Decisions requiring a canonical Skyscraper role:
- Sources not provided:
- Assumptions that must not become canon silently:
```

For substantive claims, require one of these evidence labels:

- `SOURCE-DIRECT` - explicitly stated in an uploaded current authority.
- `SOURCE-INFERRED` - a bounded inference from named uploaded sources.
- `EXTERNAL-OFFICIAL` - supported by a cited official source.
- `PROPOSAL` - a new suggestion with no canonical force.
- `QUESTION` - an ambiguity that requires an owner.
- `DESKTOP-VERIFY` - cannot be established in the browser.

Each source-backed item should name the file and heading that support it. Page
or line references are welcome when the browser can reliably provide them.

## Master kickoff prompt

Start the Primary Analyst chat with the following prompt after uploading
Packet A:

```text
You are the non-executing planning analyst for Horizon Archive. You have only
the files explicitly uploaded to this chat. You have no access to the local
workspace, repository, application, terminal, Git, runtime, tests, browser
profile, campaign saves, or hidden files.

The current project is paused. Do not resume production, execute a canonical
Skyscraper role, select RP-011, issue a stage gate, invent canon, or claim that
any file or runtime state changed. Your work is draft decision support for
later inspection by Martin and a desktop coding agent.

Obey the authority order in AGENTS.md and the current handoff. Separate direct
source statements, bounded inferences, proposals, questions, and items that
require desktop verification. If a source is missing, say so. Never fill a gap
silently.

First, create:
1. an exact manifest of files you received;
2. an authority digest;
3. a protected-boundaries list;
4. a current-state summary;
5. a list of missing inputs;
6. a contradiction and ambiguity register; and
7. a proposed order for the remaining analysis phases.

Use the mandatory draft header and verification-debt footer. Stop after this
orientation package and wait for my approval before doing later phases.
```

## Phase 1 - Authority and state digest

### Objective

Produce a compact, traceable model of what is currently released, paused,
forbidden, unselected, and conditionally allowed.

### Required work

Ask the Primary Analyst to:

1. list every uploaded source and its apparent authority level;
2. distinguish current documents from archived or historical references;
3. extract the exact paused-state rule;
4. extract the sole conditional next role after explicit resume;
5. list every frozen boundary and protected file boundary;
6. separate released facts from future possibilities;
7. identify any conflict among the uploaded authorities; and
8. identify information that a browser analysis cannot verify.

### Deliverable

`01_AUTHORITY_AND_STATE_DIGEST.md`

### Gate

Martin checks that the model did not resume production, select a successor,
or claim repository access. Correct those errors before proceeding.

## Phase 2 - Released-system knowledge map

### Objective

Convert the uploaded released-state documents into an auditable knowledge map
that later desktop work can consult quickly.

### Required work

For each accepted system, route, learning objective, evidence item, retained
scope, save field, recovery rule, accessibility rule, presentation invariant,
and known limitation, record:

- canonical name;
- current status;
- source file and heading;
- predecessor dependencies;
- downstream consumers;
- invariants that must remain true;
- known validation evidence described by the source;
- what is still unverified by the browser; and
- what kind of future change would require reopening an owner.

Do not ask for code. Do not infer behavior from filenames alone.

### Deliverable

`02_RELEASED_SYSTEM_KNOWLEDGE_MAP.md`

The document should include small tables rather than one giant prose summary.

## Phase 3 - Documentation consistency audit

### Objective

Find stale language, conflicting terminology, missing cross-references,
ambiguous ownership, and obsolete workflow edges without editing anything.

### Audit lenses

- Does any current document imply that the retired two-team workflow is live?
- Does any document imply recurring automation is active while the handoff
  says it is paused?
- Does any document name a next route, packet, shell, or successor that the
  current handoff leaves unselected?
- Are role titles, stable IDs, and canonical sequence consistent?
- Are all stage gates and return routes owned clearly?
- Are accepted variances distinguished from unresolved proposals?
- Do canon, learning, gameplay, accessibility, privacy, save, offline, and
  visual documents describe the same released boundary?
- Are references to validation results historical records rather than new
  browser verification claims?

### Required output format

For each finding, record:

| ID | Severity | Evidence | Conflict | Likely owner | Proposed resolution | Authority needed |
|---|---|---|---|---|---|---|

Use severity labels `BLOCKING`, `IMPORTANT`, `EDITORIAL`, and `NO ISSUE`.

### Deliverable

`03_DOCUMENTATION_CONSISTENCY_AUDIT.md`

Do not draft patches in this phase. Proposed resolutions should be plain
language and should name the earliest responsible owner.

## Phase 4 - AI-901 curriculum and evidence audit

### Objective

Review how the released Horizon Archive experience teaches and evidences the
current AI-901 objectives without cross-crediting distinct learning goals.

### Source rules

Treat AI-901 objectives as the master learning goals. AI-900 material may be
used only as supporting background when it overlaps.

For Microsoft Foundry, Azure AI, agents, SDKs, endpoints, REST APIs, CLIs, or
Azure Content Understanding, consult official Microsoft sources first:

1. <https://learn.microsoft.com/en-us/azure/foundry/>
2. <https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview>
3. <https://learn.microsoft.com/en-us/azure/foundry/agents/overview>
4. <https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview>

Ask the browser model to cite the exact official page used for every external
claim and record the access date. Third-party summaries must not override
official documentation.

### Required work

Build a matrix containing:

- AI-901 objective or skill statement;
- related released experience or explanation;
- required player action;
- evidence of understanding;
- independence from other objectives;
- misconception risk;
- no-authority and no-exam-guarantee language;
- accessibility alternative;
- recovery behavior;
- source support; and
- gap or improvement question.

Distinguish a curriculum-design concern from a runtime defect. Runtime facts
must be labeled `DESKTOP-VERIFY` unless an uploaded accepted release artifact
states them directly.

### Deliverable

`04_AI901_CURRICULUM_AND_EVIDENCE_AUDIT.md`

## Phase 5 - Cross-discipline risk register

### Objective

Create one prioritized register of risks that a future resumed cycle should
consider before selecting or constructing anything new.

### Required risk families

- canon and narrative boundary;
- campaign adjacency and pacing;
- learning correctness and evidence independence;
- player comprehension and cognitive load;
- privacy, sanitation, and ownership language;
- accessibility and input parity;
- save, resume, replay, and recovery;
- offline and no-authority behavior;
- responsive layout and focus order;
- performance and asset budget;
- visual continuity and spoiler safety;
- source provenance;
- shell ambiguity and variance control; and
- release evidence integrity.

### Required output format

| Risk ID | Condition | Consequence | Evidence | Probability | Impact | Earliest owner | Prevention question | Verification method |
|---|---|---|---|---|---|---|---|---|

Probability and impact may be qualitative, but the model must explain the
basis. A risk register is not permission to change scope.

### Deliverable

`05_CROSS_DISCIPLINE_RISK_REGISTER.md`

## Phase 6 - Decision and question docket

### Objective

Separate decisions Martin must make from questions the canonical roles can
resolve after an explicit resume.

### Docket categories

1. **Martin-only direction** - product preference, authorization, scope, or
   any decision reserved by the current authority.
2. **Commandant evaluation** - bounded product-purpose and selection-envelope
   questions after resume.
3. **Colonel ownership** - canon, mystery, narrative, identity, or reveal.
4. **Operations ownership** - released adjacency, dependency, pacing, route,
   or checkpoint.
5. **Science ownership** - learning, evidence, privacy, accessibility, save,
   offline, recovery, performance, or budget.
6. **Mission ownership** - shell ambiguity or cross-discipline conflict.
7. **Marine ownership** - treatment, interaction, implementation, content, or
   presentation questions that require an approved shell first.
8. **Intelligence ownership** - independent evidence, variance classification,
   release disposition, or synchronized handoff.
9. **Desktop verification** - questions that require files, code, runtime,
   builds, tests, screenshots, Git, or served identity.

### Required output fields

For every item, include:

- a neutral question;
- why it matters;
- named evidence already available;
- missing evidence;
- earliest owner;
- latest safe decision point;
- default behavior if unresolved; and
- whether the item blocks resumption, shell issuance, construction, or release.

Do not answer owner-reserved questions on the owner's behalf.

### Deliverable

`06_DECISION_AND_QUESTION_DOCKET.md`

## Phase 7 - Non-authoritative stage template pack

### Objective

Extract reusable report and handoff templates from the eleven current role
profiles. This makes later desktop invocations more precise without executing
any stage early.

### Method

Process the profiles sequentially. For each role, extract:

- stable ID and title;
- entry gate;
- required authorities;
- minimum input packet;
- questions the role must answer;
- decisions the role owns;
- decisions the role may not make;
- required checks;
- required artifact sections;
- allowed dispositions;
- variance and return routing;
- stop boundary;
- next recipient; and
- claims that require local or runtime evidence.

Every role template must preserve the shared invocation contract:

- stage and stable ID;
- shell ID/version or baseline;
- exact starting authority;
- one bounded objective;
- permitted files and systems;
- validation tier;
- stop boundary;
- required output artifact; and
- next-stage recipient.

Every template must preserve the shared report envelope:

- disposition;
- authorities read;
- work completed;
- decisions locked;
- flexible areas left downstream;
- files and artifacts changed;
- validation evidence;
- variances;
- protected boundaries;
- commit/synchronization status; and
- exact next-stage handoff.

Because this is browser planning, the default values for files changed,
validation, commit, and synchronization must explicitly state that no such
action occurred.

### Deliverable

`07_SKYSCRAPER_STAGE_TEMPLATE_PACK.md`

## Phase 8 - Resumption-readiness checklist

### Objective

Define the checks a desktop agent should perform if Martin later explicitly
resumes production. This phase must not perform those checks or phrase them as
already passed.

### Checklist sections

- explicit resumption authority from Martin;
- current branch, status, and remote synchronization;
- confirmation that current handoff remains sole exact-next-action authority;
- confirmation that the latest release baseline is unchanged;
- protected untracked files remain untouched;
- archived workflows remain inactive;
- current Commandant profile loaded in full;
- bounded Commandant objective and stop condition;
- required source packet available;
- no RP-011 selection smuggled in from browser proposals;
- no image generation or cycle reveal before its authorized stage;
- one-stage commit discipline; and
- handoff validation before any downstream role begins.

### Deliverable

`08_RESUMPTION_READINESS_CHECKLIST.md`

## Phase 9 - Primary synthesis

### Objective

Ask the Primary Analyst to create one dossier index that links the conclusions
of Phases 1-8 without collapsing their evidence labels.

### Required sections

1. Executive summary.
2. Current immutable boundaries.
3. Highest-confidence source-backed findings.
4. Highest-priority contradictions or documentation risks.
5. AI-901 and viability findings.
6. Decisions reserved for Martin.
7. Questions routed to canonical owners.
8. Desktop-only verification backlog.
9. Recommended reading order.
10. Full artifact manifest.

### Deliverable

`09_PRIMARY_PLANNING_DOSSIER.md`

No new proposals should first appear in the synthesis. New ideas must return
to the appropriate earlier draft and receive an evidence label.

## Phase 10 - Independent adversarial review

### Objective

Use a fresh browser chat to challenge the entire dossier. Fresh context is
important because the reviewer should not inherit the Primary Analyst's
confidence or conversational assumptions.

### Reviewer packet

Upload:

- Packet A;
- the focused authoritative sources used by the dossier;
- the complete Phase 1-9 outputs; and
- an exact manifest of what was not supplied.

### Adversarial reviewer prompt

```text
Act as an independent, non-executing evidence auditor. Do not improve the
project creatively and do not execute a Skyscraper role. Audit the draft
dossier against the uploaded authorities.

Look for invented canon, premature route or successor selection, unsupported
runtime claims, missing sources, authority-order violations, cross-crediting
of learning evidence, role-boundary violations, hidden assumptions, stale
workflow edges, false Git or test claims, and recommendations that exceed the
current paused state.

For every finding, cite the dossier location and controlling source. Classify
it as ACCEPT, CORRECT, REMOVE, DEFER TO OWNER, or DESKTOP VERIFY. If evidence
is insufficient, do not resolve the question yourself.
```

### Deliverable

`10_INDEPENDENT_ADVERSARIAL_REVIEW.md`

## Phase 11 - Reconciliation

### Objective

Use the Final Synthesizer chat to reconcile the dossier and independent review
without inventing a compromise.

### Reconciliation rules

- A direct current authority overrides a browser proposal.
- An unresolved source conflict remains unresolved and is routed to its owner.
- A runtime or repository question remains `DESKTOP-VERIFY`.
- A rejected idea is removed rather than hidden in softened wording.
- An owner-reserved question remains a question.
- The current paused state remains unchanged.
- Nothing is labeled accepted, released, committed, or implemented.

### Deliverables

`11_RECONCILED_PLANNING_DOSSIER.md`

`12_RECONCILIATION_LEDGER.md`

The ledger should map every adversarial finding to its final disposition and
the exact dossier section affected.

## Phase 12 - Desktop integration handoff

### Objective

Package the work so a future Codex desktop task can validate it efficiently.

### Required deliverable

Create `13_DESKTOP_INTEGRATION_HANDOFF.md` with:

- a manifest of all browser-generated files;
- the date and model/session context for each file;
- the authoritative source manifest used;
- the list of external official sources and access dates;
- top findings that appear ready for local verification;
- every unresolved contradiction;
- every Martin-only decision;
- every canonical-role question;
- every desktop verification item;
- proposed destination for each accepted draft artifact;
- files that should remain planning-only;
- a statement that no local changes, tests, commits, pushes, or releases were
  performed; and
- the exact first request to give Codex after usage resets.

Use this suggested final request:

```text
Review the attached Enterprise Pro browser planning dossier against the
current Horizon Archive repository. Treat every browser output as
non-authoritative. Verify the source manifest, re-check the current handoff and
Git state, classify each proposal, and recommend which planning artifacts are
safe to integrate. Do not resume Skyscraper production unless I explicitly say
to resume it. Do not implement changes until you have reported the audit.
```

## Session handoff prompt

At the end of each browser session, ask ChatGPT Pro:

```text
Create a compact continuation handoff for a fresh ChatGPT browser chat. Include
the source manifest, authority order, current paused boundary, work completed,
accepted draft conclusions, unresolved questions, verification debt, and the
single next analysis action. Do not claim local access or canonical effect.
```

Paste that handoff into the next chat together with the source files it names.
A handoff is not a substitute for re-uploading authoritative sources.

## Quality-control checklist for every browser output

Before accepting a draft from ChatGPT Pro, confirm:

- [ ] It names only files actually uploaded.
- [ ] It distinguishes direct evidence from inference and proposal.
- [ ] It does not claim local, Git, application, runtime, or test access.
- [ ] It preserves the paused state.
- [ ] It does not select RP-011 or any later route, destination, or successor.
- [ ] It does not invent canon, hidden lore, identity, reward, authority, or
      world response.
- [ ] It does not cross-credit one AI-901 interaction as proof of unrelated
      objectives.
- [ ] Microsoft technical claims cite official Microsoft sources first.
- [ ] It does not request protected files or private data.
- [ ] It does not generate or modify the accepted reveal.
- [ ] It routes decisions to the earliest responsible owner.
- [ ] It lists verification debt explicitly.
- [ ] It remains readable Markdown with stable headings and tables.
- [ ] It labels the entire artifact non-authoritative.

## Stop conditions

Stop the browser workflow and return to Martin if:

- current authorities contradict each other about production status;
- a required file appears stale or is missing;
- the model cannot distinguish released state from a proposal;
- the task would require hidden lore or protected/private material;
- the analysis requires inspecting code, runtime, saves, screenshots, or Git;
- an answer would select a route, packet, shell, successor, or canon change;
- an official technical claim cannot be sourced confidently;
- the model repeatedly claims it performed actions it cannot perform; or
- Martin changes the project direction or explicitly resumes production.

If Martin explicitly resumes production during this planning expedition, stop
the expedition. Re-read the live local authorities with Codex desktop before
deciding whether any browser draft remains useful.

## What success looks like

At the end of the three-day window, success is not new code or a new release.
Success is a source-traceable planning package that:

- accurately captures the current released and paused state;
- exposes inconsistencies and missing decisions;
- improves AI-901 and cross-discipline reasoning;
- supplies reusable role templates without executing roles;
- survives an independent adversarial review;
- clearly separates proposals from authority;
- contains no fabricated runtime or repository evidence; and
- gives Codex a small, explicit, verifiable integration backlog after reset.

That package can save substantial desktop-agent reasoning while leaving all
implementation, testing, Git operations, stage gates, and release decisions in
the environment where they can actually be verified.
