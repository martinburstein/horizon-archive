# Advance Queue

The Advance Team uses this queue for future playable slices ordered from the current live-demo boundary toward the intended ending. There is no maximum queue depth. Complete the nearest unfinished segment first, then advance contiguously without waiting for the Working Team.

## Status vocabulary

- `SEED`
- `IN DESIGN`
- `GATE REVIEW`
- `REVISE`
- `READY FOR WORKING`
- `HOLD`
- `REJECTED`
- `PROMOTED TO WORKING`

## Queue

| Priority | Packet | Working title | Status | Advance owner | Gate | Dependencies | Next action |
|---:|---|---|---|---|---|---|---|
| 1 | `TBD` | First two-team future slice | `SEED` | Lore Builder Agent | Not reviewed | Current demo boundary | Create `RP-001` during the first Advance Team phase |

## Team positions

- Ready packets: `0`
- In-design packets: `1 seed`
- Team 1 railhead: `TBD`
- Team 2 live-demo position: `TBD from latest accepted Demo Increment`
- Ordered Advance lead: `0 packets`
- Whole-story rail status: `NOT STARTED`

When a packet becomes `READY FOR WORKING`, retain its ordered position, promote it to the Working Queue, update `STORY_RAIL_MAP.md`, and seed the immediately following segment. Do not remove historical route order when Team 2 accepts a packet.
