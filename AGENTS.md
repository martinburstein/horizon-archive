## Microsoft Foundry / Azure AI source priority

When work involves Microsoft Foundry, Azure AI, AI-901, Azure AI implementation, agents, Foundry SDKs/endpoints, REST APIs/CLIs, or Azure Content Understanding, use the `foundry-azure-source-priority` skill first.

Before using third-party sources or general web results, check these official Microsoft sources:

1. Microsoft Foundry documentation hub: https://learn.microsoft.com/en-us/azure/foundry/
2. Microsoft Foundry SDKs and Endpoints overview: https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview
3. Microsoft Foundry Agent Service overview: https://learn.microsoft.com/en-us/azure/foundry/agents/overview
4. Azure Content Understanding overview in Foundry Tools: https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview

Treat AI-901 objectives as the master learning goals. Use AI-900 material only as supporting background when it overlaps.

## Two-team agent profiles

When running or resuming the Horizon Archive two-team cycle, treat `TWO_TEAM_AGENT_CYCLE.md` as the workflow authority and `Agent Profiles/README.md` as the agent registry.

Also read these pipeline-control artifacts before selecting Advance work:

- `Production Pipeline/EXPEDITION_SPINE.md`
- `Production Pipeline/ADVANCE_BREADTH_GATE.md`
- `Production Pipeline/PACKET_SCOREBOARD.md`

The 12-packet spine is the current breadth target. The Advance Team must obey the convergence budget: after three consecutive complete Advance cycles on one packet without Gate Review, run the convergence audit and prioritize integration, trimming, merging, or a documented hold over additional micro-seams.

Before each pass, read the selected canonical profile in full. Use these stable identities:

- `lore_builder_agent`
- `storyboarder_agent`
- `curriculum_checker_agent`
- `gameplay_master_agent`
- `coder_agent`
- `player_agent`
- `aesthetic_agent`

The same `coder_agent` profile is reused for Advance construction, Working bug repair, and Working aesthetic polish. Each Coder invocation must state its operating mode as defined in `Agent Profiles/coder-agent.md`.

Team 1 advances contiguously from the nearest unfinished packet toward the intended ending and does not wait for Team 2. Team 2 remains on the oldest approved packet adjacent to the accepted live demo until it passes. Maintain both positions and their ordered distance in `Production Pipeline/STORY_RAIL_MAP.md`; a growing Advance lead is intentional.
