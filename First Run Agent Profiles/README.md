# Horizon Archive First Run Agent Registry

This directory contains the canonical profiles for the active First Run
workflow. The profiles were cloned from the retired Skyscraper program so each
role keeps its original discipline, judgment boundaries, and handoff talent.
Their missions are retargeted from constructing new slices to polishing the
released working game into a complete first-playthrough experience.

## Loading protocol

At the start of a First Run cycle, read:

1. applicable `AGENTS.md`;
2. `NEXT_INSTANCE_HANDOFF.md`;
3. `FIRST_RUN_AGENT_WORKFLOW.md`; and
4. this registry.

Before each stage, read the selected profile in full, the immediately preceding
handoff, the current First Run Shell or its in-progress planning authorities,
and only the exact current-control sections required by that role. Inspect the
actual runtime or evidence owned by the stage; do not inherit a predecessor's
conclusion as proof.

## Canonical order

| Team | Stable agent ID | Title | Preserved talent | Profile |
| --- | --- | --- | --- | --- |
| Planning | `commandant` | Commandant | product direction and priority | `commandant.md` |
| Planning | `colonel` | Colonel | world, narrative, canon, and continuity | `colonel.md` |
| Planning | `operations_planning_major` | Operations Planning Major | sequencing, pacing, dependency, and bounded scope | `operations-planning-major.md` |
| Planning | `office_of_science_administrator` | Office of Science Administrator | technical, learning, privacy, accessibility, and QA viability | `office-of-science-administrator.md` |
| Planning | `mission_captain` | Mission Captain | cross-discipline contract integration | `mission-captain.md` |
| Production | `reconnaissance_sergeant` | Reconnaissance Sergeant | creative direction and emotional interpretation | `reconnaissance-sergeant.md` |
| Production | `tactical_operations_specialist` | Tactical Operations Specialist | interaction, state, focus, responsive, and recovery design | `tactical-operations-specialist.md` |
| Production | `combat_engineer` | Combat Engineer | robust runtime construction and tests | `combat-engineer.md` |
| Production | `quartermaster` | Quartermaster | final-purpose content and major asset stewardship | `quartermaster.md` |
| Production | `image_specialist` | Image Specialist | atmosphere and runtime presentation polish | `image-specialist.md` |
| Release | `intelligence_officer` | Intelligence Officer | independent validation, reconciliation, and synchronization | `intelligence-officer.md` |

The Image Specialist is active for runtime presentation only. Image generation,
image editing/replacement/import, and cycle reveals remain disabled.

## Shared invocation contract

Every invocation must name:

- First Run stage and stable agent ID;
- baseline, Work Order, and shell ID/version as applicable;
- exact source commit and predecessor release;
- one bounded objective and first-run address;
- current and target maturity;
- permitted files, systems, and existing assets;
- validation tier;
- stop and rollback boundary;
- required output artifact; and
- next-stage recipient.

If any material field is ambiguous, perform safe read-only orientation, record
the ambiguity, and return to the preceding owner. Do not invent scope.

## Shared report envelope

Every stage reports:

- stage, stable agent ID, Work Order, and shell identity;
- disposition;
- authorities and exact source/build read;
- first-run problem and player-visible outcome;
- work completed and decisions locked;
- flexible areas left downstream;
- files, systems, content, and assets changed;
- validation evidence and honest unavailable evidence;
- maturity impact;
- variances discovered or resolved;
- protected boundaries verified;
- commit and synchronization status; and
- exact next-stage handoff.

## Independence and finish rules

- Planning roles define and validate the pass; they do not pre-build production
  implementation.
- Production roles implement only an approved `FIRST RUN SHELL READY` contract.
- Each role verifies its predecessor and inspects the evidence it owns.
- Intelligence begins from a fresh release posture and independently reruns or
  corroborates proportionate gates.
- Return work to the earliest owner of the defect.
- Prefer the earliest player-facing incomplete seam unless a documented global
  dependency or critical defect justifies different ordering.
- No role silently expands story, learning, authority, route, save, world state,
  media permission, or ending scope.
- A polished screen does not advance maturity if its behavior, content,
  accessibility, or recovery remains incomplete.

## Recommended execution posture

Use a frontier coding/reasoning model with high reasoning for every role. Use a
fresh independent context for Intelligence release review. Tool access follows
the bounded Work Order, not rank. Recurring automation requires Martin's
explicit authorization and is not implied by this registry.
