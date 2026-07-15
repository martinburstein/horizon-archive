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
| 1 | `RP-001` | City Threshold | `IN DESIGN` | Coder Agent (`advance` mode) | A1–A4 passed; PY-020/CUM-01 mapping and puzzle `LOCKED`; full gate awaits A5 | Accepted Witness Corridor -> City Beneath credits boundary | Perform A5 from `rail-packets/RP-001-city-threshold.md`; implement the locked interaction graph, evidence gates, deterministic recovery/save contract, atomic expedition-only commit, and zero city response without inventing rules |

## Team positions

- Ready packets: `0`
- In-design packets: `1 — RP-001`
- Team 1 railhead: `RP-001 — A4 complete; A5 pending`
- Team 2 live-demo position: `Accepted Witness Corridor complete -> THE CITY BENEATH / Prologue complete credits baseline`
- Ordered Advance lead: `1 in-design packet`
- Whole-story rail status: `IN PROGRESS`

When a packet becomes `READY FOR WORKING`, retain its ordered position, promote it to the Working Queue, update `STORY_RAIL_MAP.md`, and seed the immediately following segment. Do not remove historical route order when Team 2 accepts a packet.
