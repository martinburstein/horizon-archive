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
| 1 | `RP-001` | `BUG REPAIR` | Complete the protected City Threshold route from post-credits entry through saved return without any physical city response | Coder Agent — `bug-repair` mode | `RP001-P1-001`: exact `640 × 480` narrow-parent/canonical-child mismatch clips the interface and focused forward route; production scene art remains rough staging evidence | Repair `RP001-P1-001`, add settled exact-viewport browser coverage, rebuild, and reload `/?staging=rp001` |

## Current-demo quality lane

The Working Team may always select the highest-value reproducible current-demo defect when no packet is ready or when the defect blocks the next packet.

The required pass order is Player Agent, shared Coder Agent bug repair and reload, Aesthetic Agent review, then the same Coder Agent's aesthetic implementation and final reload.

| Priority | Finding | Evidence | Status | Next owner |
|---:|---|---|---|---|
| 1 | `RP001-P1-001` — City Threshold canonical frame clips required controls at exact `640 × 480` | `playtest/WORK_LOG.md`; `demo-increments/DI-001-city-threshold.md` | `BUG REPAIR` | Coder Agent — `bug-repair` mode |
