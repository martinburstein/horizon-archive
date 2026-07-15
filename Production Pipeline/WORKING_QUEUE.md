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
| 1 | `RP-001` | `AESTHETIC IMPLEMENTATION` | Complete the protected City Threshold route from post-credits entry through saved return without any physical city response | Coder Agent (`aesthetic-polish`) | `RP001-AESTH-001` and `002` are P1 release blockers deferred to the locked production-art package; `RP001-AESTH-003` is accepted for W4 | Implement only `RP001-AESTH-003`, preserve the W2 repair, and explicitly retain `001/002` for art production; do not substitute crop/filter/mask workarounds |

## Current-demo quality lane

The Working Team may always select the highest-value reproducible current-demo defect when no packet is ready or when the defect blocks the next packet.

The required pass order is Player Agent, shared Coder Agent bug repair and reload, Aesthetic Agent review, then the same Coder Agent's aesthetic implementation and final reload.

| Priority | Finding | Evidence | Status | Next owner |
|---:|---|---|---|---|
| 1 | `RP001-P1-001` — City Threshold canonical frame clipped required controls at exact `640 × 480` | `playtest/WORK_LOG.md`; `demo-increments/DI-001-city-threshold.md` | `DEMO RELOADED — RESOLVED` | Closed unless reproduced |
| 2 | `RP001-AESTH-001` — Rough plate violates first-person/no-visible-occupant contract and required production package is absent | Four scoped RP-001 PNGs; `demo-increments/DI-001-city-threshold.md` | `P1 — DEFERRED TO ART PRODUCTION; RELEASE BLOCKER` | Art production / coordinator |
| 3 | `RP001-AESTH-002` — Smooth concept density conflicts with square-pixel native/narrow presentation | Four scoped RP-001 PNGs; `demo-increments/DI-001-city-threshold.md` | `P1 — DEFERRED TO ART PRODUCTION; RELEASE BLOCKER` | Art production / coordinator |
| 4 | `RP001-AESTH-003` — Internal rough-plate banner dominates scene hierarchy | `playtest/rp001-sc02-50-640x480.png`; narrow comparison | `P2 — ACCEPTED FOR W4` | Coder Agent (`aesthetic-polish`) |
