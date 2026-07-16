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
| 1 | `RP-001` | `VIEWPORT-P1-002 W4 FINAL RELOAD; COORDINATOR NEXT` | Keep the complete accepted world, dialogue, verbs, inventory, and current required controls inside one representative `1920 × 1080` laptop viewport without outer-page scrolling | Coordinator (`independent release validation`) | None: W3 opened no finding; W4 passed focused `41/41`, full `402/402`, build, exact desktop/narrow/text-zoom computed checks, RP-002 leakage, HTTP assets, and final reload | Run independent release gates; preserve desktop laptop fit, accessible reflow, all accepted contracts, and protected RP-002 absence/non-routability |

`RP-002` is at `GATE REVIEW — A5 HANDOFF`, not promoted. Its protected journey remains absent from App/main, browser storage, accepted bundles, normal routing, the live Demo, and this queue.

**W4 result / exact coordinator boundary:** `VIEWPORT-P1-002` is final-reloaded on accepted RP-001 after a clean W3 and verification-only W4. Independently validate representative desktop world dominance, intentional breathing room, complete lower-band containment, narrow/`200%` text reflow, gameplay, curriculum, saves, art meaning, world/route state, and protected RP-002 absence. RP-002 remains Gate Review protected and unpromoted.

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
| 9 | `VIEWPORT-P1-002` — Representative `1920 × 1080` Glass Meadow shell pushes required command controls below the fold | W1 exact failure; W2 repair; W3 clean review; W4 focused/full/build/live/leakage/HTTP evidence; `demo-increments/DI-001-city-threshold.md` | `RESOLVED — W4 FINAL RELOAD / COORDINATOR VALIDATION PENDING` | Coordinator |
