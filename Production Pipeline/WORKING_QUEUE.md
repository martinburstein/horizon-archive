# Working Queue

The Working Team uses this queue for approved Rail Packets and current-demo blockers. It always works the oldest approved packet adjacent to the accepted live-demo boundary. It may remain on that packet for multiple cycles and never skips forward merely because the Advance Queue has grown.

## Status vocabulary

- `READY`
- `PLAYER REVIEW`
- `BUG REPAIR`
- `DEMO RELOADED`
- `AESTHETIC REVIEW`
- `AESTHETIC IMPLEMENTATION`
- `FINAL VALIDATION`
- `IN DEMO — PARTIAL`
- `IN DEMO — ACCEPTED`
- `RETURN TO ADVANCE`

## Approved packet queue

| Priority | Packet | Status | Player-visible target | Working owner | Blocker | Next action |
|---:|---|---|---|---|---|---|
| 1 | `RP-001` | `IN DEMO — PARTIAL` | Complete the protected City Threshold route from post-credits entry through saved return without any physical city response | Photorealistic art production, then Working Team | `RP001-AESTH-004` is the active P1 visual blocker; archived pixel-styled fallback plates remain wired temporarily | Author three high-resolution photorealistic 16:9 masters plus registered animation layers, integrate responsive derivatives, then rerun W3/W4 and coordinator release validation |

## Current-demo quality lane

The Working Team may always select the highest-value reproducible current-demo defect when no packet is ready or when the defect blocks the next packet.

The required pass order is Player Agent, shared Coder Agent bug repair and reload, Aesthetic Agent review, then the same Coder Agent's aesthetic implementation and final reload.

| Priority | Finding | Evidence | Status | Next owner |
|---:|---|---|---|---|
| 1 | `RP001-P1-001` — City Threshold canonical frame clipped required controls at exact `640 × 480` | `playtest/WORK_LOG.md`; `demo-increments/DI-001-city-threshold.md` | `DEMO RELOADED — RESOLVED` | Closed unless reproduced |
| 2 | `RP001-AESTH-001` — Historical rough plate violated first-person/no-visible-occupant contract | Four scoped RP-001 PNGs; `demo-increments/DI-001-city-threshold.md` | `SUPERSEDED — old raster removed; recheck new photoreal masters` | Closed unless reproduced |
| 3 | `RP001-AESTH-002` — Historical pixel-consistency requirement | `Pixelated Draft/`; `demo-increments/DI-001-city-threshold.md` | `RETIRED BY VISUAL-DIRECTION DECISION` | Closed |
| 4 | `RP001-AESTH-003` — Internal rough-plate banner dominated scene hierarchy | W4 exact live checks; `demo-increments/DI-001-city-threshold.md` | `RESOLVED — FINAL DEMO RELOADED` | Closed unless reproduced |
| 5 | `RP001-AESTH-004` — Active demo still uses archived pixel-styled City Threshold fallback plates instead of approved photorealistic masters | `Pixelated Draft/city-threshold-pixel-staging/`; active visual charter | `P1 — PHOTOREALISTIC ART MIGRATION; RELEASE BLOCKER` | Art production / Working Team |
