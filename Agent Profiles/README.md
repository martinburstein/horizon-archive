# Horizon Archive Agent Registry

This directory stores the canonical, redeployable identity for every unique agent in the two-team production cycle.

## Loading protocol

At the start of a scheduled wake, the coordinator reads applicable `AGENTS.md`, `NEXT_INSTANCE_HANDOFF.md`, and `AUTONOMOUS_PRODUCTION_LOOP.md` in full. Before every agent pass, read in order:

1. the selected agent profile in full;
2. the immediately preceding current-cycle handoff;
3. the active Rail Packet or Demo Increment's top current-control block;
4. the selected agent's latest work-log entry; and
5. exact sections directly cited by the handoff or profile.

Read `TWO_TEAM_AGENT_CYCLE.md`, this registry, and older append-only artifact history again only when their hashes changed, a current authority cites them, a contradiction or reopen condition appears, or an audit requires them. This optimization does not weaken any role boundary or project invariant.

The profile is the stable identity. The active current-control block, latest work-log entry, and preceding handoff provide current context. Do not replace a profile with an improvised prompt when its file is available.

## Registry and run order

| Pass | Stable agent ID | Display name | Canonical profile |
|---|---|---|---|
| A1 | `lore_builder_agent` | Lore Builder Agent | `Agent Profiles/lore-builder-agent.md` |
| A2 | `storyboarder_agent` | Storyboarder Agent | `Agent Profiles/storyboarder-agent.md` |
| A3 | `curriculum_checker_agent` | Curriculum Checker Agent | `Agent Profiles/curriculum-checker-agent.md` |
| A4 | `gameplay_master_agent` | Gameplay Master Agent | `Agent Profiles/gameplay-master-agent.md` |
| A5 | `coder_agent` | Coder Agent — Advance mode | `Agent Profiles/coder-agent.md` |
| W1 | `player_agent` | Player Agent | `Agent Profiles/player-agent.md` |
| W2 | `coder_agent` | Coder Agent — Bug Repair mode | `Agent Profiles/coder-agent.md` |
| W3 | `aesthetic_agent` | Aesthetic Agent | `Agent Profiles/aesthetic-agent.md` |
| W4 | `coder_agent` | Coder Agent — Aesthetic Polish mode | `Agent Profiles/coder-agent.md` |

There are nine sequential passes but seven unique agents. `coder_agent` is intentionally reused in A5, W2, and W4. When the agent runtime permits follow-up work on an existing agent, resume that same Coder Agent rather than spawning another identity.

## Standard invocation

Give the selected agent this instruction:

```text
Load your canonical profile from [profile path] and follow it as your identity contract. Read the applicable AGENTS.md files, TWO_TEAM_AGENT_CYCLE.md, the active pipeline artifact, your work log, and the preceding handoff. Operate in [pass/mode]. Complete one bounded, high-value tranche; validate it; update the required durable artifacts; and return the profile's report envelope. Do not perform the next agent's pass.
```

## Shared rules

- One pass owns the shared worktree at a time.
- Team 1 always advances the nearest unfinished contiguous packet, then proceeds toward the ending without waiting for Team 2.
- Team 2 always perfects the oldest approved packet adjacent to the accepted live demo and may remain on it for multiple cycles.
- Keep `Production Pipeline/STORY_RAIL_MAP.md` current so the growing lead is ordered and measurable.
- Preserve user work and unrelated changes.
- Never open the hidden lore vault without explicit authorization.
- Keep unrevealed story content out of chat.
- Use official Microsoft source priority for AI-901 and Foundry work.
- Preserve `SOLIDIFIED` mappings unless a documented reopen condition exists.
- Preserve first-person framing, protagonist/ship exclusion, and the active high-resolution photorealistic charter. Legacy pixel contracts live only under `Pixelated Draft/`.
- Keep the playable path recoverable, privacy-safe, offline-safe, and free of live Azure authority.
- End at the profile's handoff boundary and report evidence, not vague completion claims.

## Missing or unavailable profile

If a profile cannot be read, stop that pass and report the missing path. Do not silently invent a replacement identity. Other safe, independent work may continue only if the coordinator can preserve sequential handoffs.
