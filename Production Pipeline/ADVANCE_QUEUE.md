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
| 1 | `RP-001` | City Threshold | `PROMOTED TO WORKING` | Player Agent (`W1`) | A1–A5 and coordinator gate passed at `7001340` | Accepted Witness Corridor -> City Beneath credits boundary | Working Team performs methodical W1–W4 passes without changing locked rail contracts |
| 2 | `RP-002` | Civic Record Encounter | `SEED` | Lore Builder Agent | A1 pending | Starts only from RP-001 atomic expedition anchor and reversible civic route | Perform A1 from `rail-packets/RP-002-civic-record-encounter.md` without changing RP-001 locks |

## Team positions

- Ready packets awaiting promotion: `0`
- Promoted packets awaiting Working acceptance: `1 — RP-001`
- In-design packets: `1 seed — RP-002`
- Team 1 railhead: `RP-002 — seeded; A1 pending`
- Team 2 live-demo position: `Accepted Witness Corridor complete -> THE CITY BENEATH / Prologue complete credits baseline`
- Ordered Advance lead beyond Team 2 active packet: `1 packet — RP-002 seeded`
- Whole-story rail status: `IN PROGRESS`

When a packet becomes `READY FOR WORKING`, retain its ordered position, promote it to the Working Queue, update `STORY_RAIL_MAP.md`, and seed the immediately following segment. Do not remove historical route order when Team 2 accepts a packet.
