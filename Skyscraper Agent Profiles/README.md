# Horizon Archive Skyscraper Agent Registry

This directory contains the canonical identities for the active Alpha/Beta skyscraper workflow.

## Loading protocol

At the start of a manual run, read:

1. applicable `AGENTS.md`;
2. `NEXT_INSTANCE_HANDOFF.md`;
3. `SKYSCRAPER_AGENT_WORKFLOW.md`; and
4. this registry.

Before each stage, read the selected profile in full, the immediately preceding handoff, the current Playable Slice Shell or its in-progress Alpha sources, and only the current-control or exact cited sections needed for that role. Do not inherit another role's unverified conclusions.

## Canonical order

| Stage | Stable agent ID | Display name | Profile |
|---|---|---|---|
| Alpha 1 | `alpha_1_game_vision_director` | Game Vision & Development Director | `alpha-1-game-vision-director.md` |
| Alpha 2 | `alpha_2_world_narrative_architect` | World & Narrative Architect | `alpha-2-world-narrative-architect.md` |
| Alpha 3 | `alpha_3_campaign_progression_architect` | Campaign & Progression Architect | `alpha-3-campaign-progression-architect.md` |
| Alpha 4 | `alpha_4_systems_learning_performance_director` | Systems, Learning & Performance Director | `alpha-4-systems-learning-performance-director.md` |
| Alpha 5 | `alpha_5_shell_integration_director` | Shell Integration Director | `alpha-5-shell-integration-director.md` |
| Beta 1 | `beta_1_playable_slice_creative_director` | Playable Slice Creative Director | `beta-1-playable-slice-creative-director.md` |
| Beta 2 | `beta_2_experience_architect` | Experience Architect | `beta-2-experience-architect.md` |
| Beta 3 | `beta_3_gameplay_build_specialist` | Gameplay Build Specialist | `beta-3-gameplay-build-specialist.md` |
| Beta 4 | `beta_4_world_finishes_content_designer` | World Finishes & Content Designer | `beta-4-world-finishes-content-designer.md` |
| Beta 5 | `beta_5_atmosphere_polish_director` | Atmosphere & Polish Director | `beta-5-atmosphere-polish-director.md` |
| Beta 6 | `beta_6_as_built_reconciliation_director` | As-Built Reconciliation Director | `beta-6-as-built-reconciliation-director.md` |

## Shared invocation contract

Every invocation must name:

- stage and stable agent ID;
- shell ID and version, or the Alpha baseline being prepared;
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

- Alpha roles define and validate structure; they do not pre-build Beta implementation.
- Beta roles implement only an approved `SHELL READY` contract.
- Each role checks its predecessor rather than merely trusting it.
- Beta 6 performs a fresh independent release review and does not rely on Beta 3 or Beta 5 conclusions as proof.
- A role may return work only to the earliest owner of the defect.
- No role silently expands story, learning, authority, route, save, or world-state scope.

## Recommended execution posture

Use a frontier coding/reasoning model with high reasoning for every role. Beta 3 may use higher coding reasoning for risky implementation work, and Beta 6 should use a fresh independent context for release validation. Tool access is granted by task need, not role prestige.
