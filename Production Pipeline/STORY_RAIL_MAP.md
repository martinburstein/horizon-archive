# Horizon Archive Story Rail Map

This is the surface-safe, ordered map from the accepted live demo to the intended ending. It tracks adjacency and production maturity without exposing unrevealed story details in chat.

## Position summary

- Team 2 live-demo position: `Accepted baseline — Witness Corridor complete -> THE CITY BENEATH / Prologue complete credits`
- Team 2 active packet: `RP-001 — IN DEMO PARTIAL / RELEASE BLOCKED ON PRODUCTION ART`
- Team 1 railhead: `RP-002 — A4 puzzle and non-credit demo-tour contract locked; A5 pending`
- Ordered Advance lead beyond Team 2 active packet: `1 packet — RP-002 in design`
- Whole-story rail status: `IN PROGRESS`
- Intended ending represented: `NO`

## Route integrity rules

1. Add packets in story order; never skip an unresolved gap.
2. Every packet's start state must match the preceding packet's end state.
3. Team 1 works the first unfinished row after its current railhead.
4. Team 2 works the oldest `READY FOR WORKING` row after its accepted live-demo position.
5. Team 1 may advance any distance ahead; Team 2 never skips forward to reduce the gap.
6. If Team 2 invalidates an assumption, mark affected future rows `IMPACT REVIEW` without discarding unaffected work.
7. Chat reports use packet IDs and surface-safe working titles only.

## Ordered route

| Order | Packet | Surface-safe chapter/location | Predecessor | Advance status | Working status | Story | Location | Python skill | AI-901 check | Puzzle | Rough code | Dependencies/impact |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `RP-001` | `City Threshold — City Beneath` | `Witness Corridor complete -> City Beneath credits` | `PROMOTED TO WORKING — 7001340` | `IN DEMO PARTIAL — PHOTOREALISTIC ART BLOCKED` | `LORE LOCKED` | `STORYBOARD LOCKED` | `PY-020 SOLIDIFIED` | `CUM-01 SOLIDIFIED` | `A4 LOCKED` | `FUNCTIONAL STAGING PASS` | Functional gates pass. Pixel-specific `RP001-AESTH-002` is retired and the earlier occupant raster is removed. `RP001-AESTH-004` now blocks release until the archived pixel-styled fallbacks are replaced by three approved high-resolution photorealistic masters and registered effects. |
| 2 | `RP-002` | `Civic Record Encounter — City Beneath` | `RP-001 anchor complete -> civic route available` | `IN DESIGN — A4 COMPLETE; A5 PENDING` | `NOT READY` | `LORE LOCKED — PHYSICAL EVIDENCE REFINED` | `STORYBOARD LOCKED — PREMIUM PHOTO BUILD BRIEF` | `PY-009 SOLIDIFIED` | `RP002-RAI-01 SOLIDIFIED` | `A4 LOCKED — CUSTODY LEDGER + NON-CREDIT TOUR` | `NOT STARTED` | A4 encodes strict 6/6 -> blank 6/6 + explanation and 9/9 -> blank 9/9 + explanation gates, unlimited recovery, atomic expedition-only completion, and a separate allowlisted Demo Tour skip beside tests that records no attempts, mastery, campaign unlock, or city change; A1/A2 photorealistic and no-response locks remain invariant |

## Whole-story coverage gate

Mark the route `END-TO-END OUTLINED` only when:

- the intended ending has an ordered row;
- every row has a predecessor and successor relationship;
- every story beat and location has a surface-safe purpose;
- every required Python skill and AI-901 knowledge check has an ordered place;
- every puzzle has entry, success, failure, recovery, and knowledge-evidence contracts;
- cross-packet state and inventory dependencies are identified;
- no unresolved gap exists between the live-demo boundary and ending; and
- all future uncertainties are labeled rather than silently assumed.

After this gate, Team 1 performs continuity and impact maintenance only unless Martin expands or changes the intended story.
