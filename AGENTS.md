## Microsoft Foundry / Azure AI source priority

When work involves Microsoft Foundry, Azure AI, AI-901, Azure AI implementation, agents, Foundry SDKs/endpoints, REST APIs/CLIs, or Azure Content Understanding, use the `foundry-azure-source-priority` skill first.

Before using third-party sources or general web results, check these official Microsoft sources:

1. Microsoft Foundry documentation hub: https://learn.microsoft.com/en-us/azure/foundry/
2. Microsoft Foundry SDKs and Endpoints overview: https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview
3. Microsoft Foundry Agent Service overview: https://learn.microsoft.com/en-us/azure/foundry/agents/overview
4. Azure Content Understanding overview in Foundry Tools: https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview

Treat AI-901 objectives as the master learning goals. Use AI-900 material only as supporting background when it overlaps.

## Active skyscraper agent workflow

The active manual production workflow is `SKYSCRAPER_AGENT_WORKFLOW.md`. Its canonical registry is `Skyscraper Agent Profiles/README.md`, with five strategic Colonels and six field Marines. These are setting-inspired military titles; their production functions remain unchanged.

At the start of a run, read this file, `NEXT_INSTANCE_HANDOFF.md`, `SKYSCRAPER_AGENT_WORKFLOW.md`, and the registry. Before each stage, read the selected profile in full, the immediately preceding handoff, and the exact current-control or shell sections cited by that role.

Run strictly sequentially:

1. Expeditionary Commandant
2. Colonial Intelligence Colonel
3. Operations Planning Major
4. Science & Technical Readiness Captain
5. Mission Integration Warrant Officer
6. Reconnaissance Gunnery Sergeant
7. Tactical Operations Corporal
8. Combat Engineer
9. Field Quartermaster
10. Combat Imaging & Illumination Specialist
11. After-Action Intelligence Officer

The Mission Integration Warrant Officer must issue a versioned `SHELL READY` contract before the Marines deploy. A Marine may request a variance but may not silently change the shell. The After-Action Intelligence Officer independently releases, classifies every variance, updates the master plan only from accepted as-built evidence, and replaces `NEXT_INSTANCE_HANDOFF.md` with one synchronized exact next action.

No recurring automation is active. Do not schedule this workflow until Martin explicitly approves automation after the manual test drive.

## Two-team agent profiles

**Archived 2026-07-25.** The Team 1 / Team 2 production system is retired after completing the 12-packet story rail. Its immutable snapshot is tagged `two-team-infrastructure-archive-2026-07-25` and indexed at `Production Pipeline/Archive/2026-07-25-two-team-agent-infrastructure/README.md`. Do not run, resume, schedule, or infer work from the archived exact-next-action edge unless Martin explicitly reactivates that archived workflow. The current `NEXT_INSTANCE_HANDOFF.md` belongs to the skyscraper workflow.

The instructions below are retained only as historical reactivation guidance.

When running or resuming the Horizon Archive two-team cycle, treat `TWO_TEAM_AGENT_CYCLE.md` as the workflow authority and `Agent Profiles/README.md` as the agent registry.

For scheduled autonomous production, also read `AUTONOMOUS_PRODUCTION_LOOP.md`. It is the throughput and handoff authority for reading scope, integration-sized work, tiered validation, checkpoint/push cadence, non-overlap behavior, and compact state transfer. `NEXT_INSTANCE_HANDOFF.md` remains the sole exact-next-action authority.

After every completed coordinator release, run the authorized adaptive retrospective in `AUTONOMOUS_PRODUCTION_LOOP.md`, record `KEEP`, `TUNE`, or `REDESIGN` in `Production Pipeline/PROCESS_CHANGELOG.md`, and apply only safe evidence-backed improvements to future cycles before producing the cycle reveal.

Also read these pipeline-control artifacts before selecting Advance work:

- `Production Pipeline/EXPEDITION_SPINE.md`
- `Production Pipeline/ADVANCE_BREADTH_GATE.md`
- `Production Pipeline/PACKET_SCOREBOARD.md`

Read the applicable supporting spine for the selected role:

- Storyboarder: `Production Pipeline/LOCATION_VISUAL_SPINE.md`
- Curriculum Checker: `Production Pipeline/CURRICULUM_SPINE.md`
- Gameplay Master: `Production Pipeline/GAMEPLAY_SYSTEMS_SPINE.md`
- Coder and coordinator: `Production Pipeline/PRODUCTION_READINESS_SPINE.md`

The 12-packet spine is the current breadth target. The Advance Team must obey the convergence budget: after three consecutive complete Advance cycles on one packet without Gate Review, run the convergence audit and prioritize integration, trimming, merging, or a documented hold over additional micro-seams.

Before each pass, read the selected canonical profile in full. Use the optimized current-control and relevant-section reading protocol in `AUTONOMOUS_PRODUCTION_LOOP.md`; do not reread append-only history unless a cited authority, contradiction, reopen condition, or audit requires it. Use these stable identities:

- `lore_builder_agent`
- `storyboarder_agent`
- `curriculum_checker_agent`
- `gameplay_master_agent`
- `coder_agent`
- `player_agent`
- `aesthetic_agent`

The same `coder_agent` profile is reused for Advance construction, Working bug repair, and Working aesthetic polish. Each Coder invocation must state its operating mode as defined in `Agent Profiles/coder-agent.md`.

Team 1 advances contiguously from the nearest unfinished packet toward the intended ending and does not wait for Team 2. Team 2 remains on the oldest approved packet adjacent to the accepted live demo until it passes. Maintain both positions and their ordered distance in `Production Pipeline/STORY_RAIL_MAP.md`; a growing Advance lead is intentional.
