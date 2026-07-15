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
| 1 | `RP-001` | City Threshold | `IN DESIGN` | Curriculum Checker Agent | A1 and A2 passed; full gate not reviewed | Accepted Witness Corridor -> City Beneath credits boundary | Perform A3 on `rail-packets/RP-001-city-threshold.md`; preserve locked visual causality |

## Team positions

- Ready packets: `0`
- In-design packets: `1 — RP-001`
- Team 1 railhead: `RP-001 — A2 complete; A3 pending`
- Team 2 live-demo position: `Accepted Witness Corridor complete -> THE CITY BENEATH / Prologue complete credits baseline`
- Ordered Advance lead: `1 in-design packet`
- Whole-story rail status: `IN PROGRESS`

When a packet becomes `READY FOR WORKING`, retain its ordered position, promote it to the Working Queue, update `STORY_RAIL_MAP.md`, and seed the immediately following segment. Do not remove historical route order when Team 2 accepts a packet.
