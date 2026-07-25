# Horizon Archive Skyscraper Agent Registry

This directory contains the canonical identities for the active Colonels-and-Marines skyscraper workflow. The titles use a 1986 *Aliens*-inspired Colonial Marine setting while preserving the agents' original functions exactly.

## Loading protocol

At the start of a manual run, read:

1. applicable `AGENTS.md`;
2. `NEXT_INSTANCE_HANDOFF.md`;
3. `SKYSCRAPER_AGENT_WORKFLOW.md`; and
4. this registry.

Before each stage, read the selected profile in full, the immediately preceding handoff, the current Playable Slice Shell or its in-progress Colonel sources, and only the current-control or exact cited sections needed for that role. Do not inherit another role's unverified conclusions.

## Canonical order

| Team | Stable agent ID | Military title | Profile |
|---|---|---|---|
| Colonels | `expeditionary_command_colonel` | Expeditionary Command Colonel | `expeditionary-command-colonel.md` |
| Colonels | `colonial_intelligence_colonel` | Colonial Intelligence Colonel | `colonial-intelligence-colonel.md` |
| Colonels | `operations_planning_colonel` | Operations Planning Colonel | `operations-planning-colonel.md` |
| Colonels | `science_technical_readiness_colonel` | Science & Technical Readiness Colonel | `science-technical-readiness-colonel.md` |
| Colonels | `mission_integration_colonel` | Mission Integration Colonel | `mission-integration-colonel.md` |
| Marines | `reconnaissance_sergeant` | Reconnaissance Sergeant | `reconnaissance-sergeant.md` |
| Marines | `tactical_operations_sergeant` | Tactical Operations Sergeant | `tactical-operations-sergeant.md` |
| Marines | `combat_engineer` | Combat Engineer | `combat-engineer.md` |
| Marines | `field_quartermaster` | Field Quartermaster | `field-quartermaster.md` |
| Marines | `combat_imaging_illumination_specialist` | Combat Imaging & Illumination Specialist | `combat-imaging-illumination-specialist.md` |
| Marines | `after_action_intelligence_officer` | After-Action Intelligence Officer | `after-action-intelligence-officer.md` |

## Shared invocation contract

Every invocation must name:

- stage and stable agent ID;
- shell ID and version, or the Colonel baseline being prepared;
- exact starting authority;
- one bounded objective;
- permitted files and systems;
- validation tier;
- stop boundary;
- required output artifact; and
- next-stage recipient.

If any of these are materially ambiguous, the role performs safe read-only orientation, records the ambiguity, and returns to the preceding owner. It does not invent scope.

## Shared report envelope

Every stage reports:

- stage and agent ID;
- disposition;
- authorities read;
- work completed;
- decisions locked;
- flexible areas left downstream;
- files and artifacts changed;
- validation evidence;
- variances discovered or resolved;
- protected boundaries verified;
- commit and synchronization status; and
- exact next-stage handoff.

## Independence rules

- The Colonels define and validate structure; they do not pre-build Marine implementation.
- The Marines implement only an approved `SHELL READY` contract.
- Each role checks its predecessor rather than merely trusting it.
- The After-Action Intelligence Officer performs a fresh independent release review and does not rely on the Combat Engineer's or Combat Imaging & Illumination Specialist's conclusions as proof.
- A role may return work only to the earliest owner of the defect.
- No role silently expands story, learning, authority, route, save, or world-state scope.

## Recommended execution posture

Use a frontier coding/reasoning model with high reasoning for every role. The Combat Engineer may use higher coding reasoning for risky implementation work, and the After-Action Intelligence Officer should use a fresh independent context for release validation. Tool access is granted by task need, not rank.
