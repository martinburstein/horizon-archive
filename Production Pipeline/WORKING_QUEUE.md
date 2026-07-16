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
| 1 | `RP-001` | `IN DEMO — ACCEPTED / VIEWPORT-P1-002 COORDINATOR PASS` | Maintain the complete accepted responsive campaign | Closed unless reproduced | None | Preserve the accepted baseline while RP-002 advances |
| 2 | `RP-002` | `AESTHETIC IMPLEMENTATION — RP002-AESTH-001 OPEN` | Integrate the approved four-phase Civic Record Encounter without weakening its learning, save, Tour, art, or accessibility contracts | Coder Agent (`W4`, aesthetic-polish mode) | P1 temporary-art finding: normal `SC-03-00` reuses the predecessor plate and shows an internal continuity badge | Replace only the P0 hook with a dedicated registered master, remove the badge, validate, and final-reload |
| 3 | `RP-003` | `READY — QUEUED BEHIND RP-002` | Later integrate the approved Calibration Margin packet without skipping the older adjacent packet | Player Agent after RP-002 acceptance | RP-002 must be accepted first; final production assets and normal integration are unbuilt | Hold ordered position; do not begin Working until RP-002 is accepted |

`RP-002` passed coordinator Gate Review and is promoted. Its protected journey still remains absent from App/main, browser storage, accepted bundles, normal routing, and the live Demo until the Working Team implements and accepts it.

`RP-003` also passed coordinator Gate Review but remains queued behind RP-002. Its protected journey likewise remains absent from the live Demo and grants no permission to skip Working order.

**Current W2 result:** `RP002-P1-001` is resolved. The exact verified RP-001 predecessor now exposes a normal `FOLLOW RECORDED CIVIC ROUTE` action into only P0 / `SC-03-00`, with reversible return and a bounded allowlisted resume checkpoint. Focused `6/6`, full `419/419`, build, and complete E2E pass; port `4173` is reloaded. W3 owns only the first arrival's aesthetic review. The dedicated `SC-03-00` master remains an explicit temporary production-art hook, and no RP-003 content is exposed.

**Current W3 result:** `RP002-AESTH-001` is open at P1. The exact temporary hook preserves source quality and responsive behavior but repeats the predecessor view and exposes an internal badge, so W4 owns one dedicated `SC-03-00` master replacement and final reload. No later RP-002 state or RP-003 content is authorized.

**Coordinator result:** `VIEWPORT-P1-002` is `RESOLVED — COORDINATOR VALIDATED`. Exact `1920 x 1080` and `390 x 844` live review, full release validation, and the final reload passed. RP-002 is now the oldest adjacent `READY` packet.

## Current-demo quality lane

`VIEWPORT-P1-001` is `RESOLVED — COORDINATOR VALIDATED` as of 2026-07-15. Fixed logical canvases, integer scaling, and the residual ultrawide ceiling are retired; the live demo now uses an available-width 16:9 world, vertical interface reflow, no horizontal page escape, and 44px command/Terminal targets. Reopen only if reproduced.

The Working Team may always select the highest-value reproducible current-demo defect when no packet is ready or when the defect blocks the next packet.

The required pass order is Player Agent, shared Coder Agent bug repair and reload, Aesthetic Agent review, then the same Coder Agent's aesthetic implementation and final reload.

| Priority | Finding | Evidence | Status | Next owner |
|---:|---|---|---|---|
| 1 | `RP001-P1-001` — City Threshold canonical frame clipped required controls at exact `640 × 480` | `playtest/WORK_LOG.md`; `demo-increments/DI-001-city-threshold.md` | `DEMO RELOADED — RESOLVED` | Closed unless reproduced |
| 2 | `RP001-AESTH-001` — Historical rough plate violated first-person/no-visible-occupant contract | Four scoped RP-001 PNGs; `demo-increments/DI-001-city-threshold.md` | `SUPERSEDED — old raster removed; recheck new photoreal masters` | Closed unless reproduced |
| 3 | `RP001-AESTH-002` — Historical pixel-consistency requirement | `Pixelated Draft/`; `demo-increments/DI-001-city-threshold.md` | `RETIRED BY VISUAL-DIRECTION DECISION` | Closed |
| 4 | `RP001-AESTH-003` — Internal rough-plate banner dominated scene hierarchy | W4 exact live checks; `demo-increments/DI-001-city-threshold.md` | `RESOLVED — FINAL DEMO RELOADED` | Closed unless reproduced |
| 5 | `RP001-AESTH-004` — Historical City Threshold pixel-styled fallback plates | Coordinated photorealistic production family; active visual charter | `SUPERSEDED — PHOTOREALISTIC MASTERS INTEGRATED` | Closed unless reproduced |
| 6 | `RP001-AESTH-005` — Detached pixel-era Glass Meadow Terminal and route-marker overlays | W1/W3 reports; integrated master provenance; `demo-increments/DI-001-city-threshold.md` | `RESOLVED — COORDINATOR VALIDATED` | Closed unless reproduced |
| 7 | `OPENING-AESTH-001` — First-45-seconds opening remained a miniature legacy panel inside the fluid stage | W3 hierarchy review; coordinator live walkthrough; `demo-increments/DI-001-city-threshold.md` | `RESOLVED — COORDINATOR VALIDATED` | Closed unless reproduced |
| 8 | `MEADOW-AESTH-FOCUS-001` — Full primary-hit-area focus treatment dominates the first Glass Meadow plate | Root live `1280 x 720` before/after; W3/W4 evidence; responsive full E2E; `demo-increments/DI-001-city-threshold.md` | `RESOLVED — COORDINATOR VALIDATED` | Closed unless reproduced |
| 9 | `VIEWPORT-P1-002` — Representative `1920 × 1080` Glass Meadow shell pushes required command controls below the fold | W1 exact failure; W2 repair; W3 clean review; W4 and coordinator full/live evidence; `demo-increments/DI-001-city-threshold.md` | `RESOLVED — COORDINATOR VALIDATED` | Closed unless reproduced |
| 10 | `RP002-AESTH-001` — Normal `SC-03-00` arrival reuses the predecessor City Threshold plate and exposes an internal continuity-hook badge | W3 current-run desktop/narrow captures; `CivicRecordArrival.jsx`; provenance; `demo-increments/DI-001-city-threshold.md` | `OPEN — P1 / AESTHETIC IMPLEMENTATION` | Coder Agent (`W4`) |
