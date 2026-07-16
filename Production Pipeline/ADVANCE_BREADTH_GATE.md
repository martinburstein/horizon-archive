# Advance Breadth and Convergence Gate

## Goal

Advance work must become both deep enough to build and broad enough to reach the intended ending. This gate prevents a Rail Packet from accumulating isolated micro-seams without approaching a playable handoff.

It supplements, and never weakens, the existing lore, curriculum, accessibility, privacy, recovery, save, no-authority, art, and Demo Tour contracts.

## Work-in-progress limit

- Team 1 has exactly **one active Rail Packet**.
- A later packet may be a reserved spine row, but it cannot enter design until its predecessor has a specified end state.
- Team 1 may seed the next contiguous packet when the active packet reaches `GATE REVIEW` or `READY FOR WORKING`.
- Team 2 continues independently on the oldest adjacent approved packet.

## Meaningful Advance tranche

An A1–A5 tranche is meaningful only when it does at least one of the following:

1. closes a named Rail Packet acceptance criterion;
2. removes a documented blocker or unknown;
3. integrates two or more already approved seams into one testable path;
4. produces missing story, scene, curriculum, puzzle, accessibility, save, or code evidence required by the handoff gate; or
5. reduces the packet's remaining Gate Review checklist.

Creating another isolated state, module, note, or test without reducing a named gate is maintenance, not Advance progress.

## Convergence budget

Each packet receives:

- one orientation cycle to lock the slice and its learning purpose;
- up to two construction cycles for the largest missing contracts;
- one convergence cycle to integrate, validate, and decide readiness.

After **three consecutive complete Advance cycles** on the same packet without reaching `GATE REVIEW`, the next A1 pass must be a convergence audit. The coordinator records one outcome:

- `CONVERGE` — stop adding micro-seams and assemble the shortest protected end-to-end path;
- `TRIM` — move optional work to a later packet or backlog;
- `MERGE` — consolidate overlapping modules or contracts;
- `HOLD` — name the genuine blocker and advance no speculative code; or
- `RE-SCOPE WITH MARTIN` — only when the player goal or project direction must materially change.

## Convergence audit

The audit must answer:

1. What exact player-visible path will this packet eventually add?
2. Which handoff gates already pass?
3. Which gates are still missing?
4. Which existing artifacts are duplicated, over-segmented, or not on the shortest path?
5. What is the smallest integration tranche that reduces the missing-gate count?
6. What optional work can be deferred without weakening learning, recovery, accessibility, canon, or safety?
7. Can the packet reach `GATE REVIEW` in the next complete A1–A5 cycle?

The result is recorded in the packet and `PACKET_SCOREBOARD.md`.

## Code-shape guardrails

- Prefer extending or composing an existing protected model when ownership and invariants match.
- Add a new module only when it closes a named gate, creates a reusable boundary, or prevents unsafe coupling.
- A pure protected module is not progress by itself; its caller, exit state, and handoff purpose must be documented.
- Do not create one production module per narrative sentence or per individual state transition by default.
- Before A5 adds another isolated module, it must identify the integration seam that will consume it or explain why `HOLD` is safer.
- Accepted App/main and bundles remain unchanged until the packet explicitly authorizes integration.

## Breadth checkpoint at every A5 handoff

Record:

- cycles spent on this packet;
- handoff gates passed and remaining;
- whether the tranche reduced the remaining-gate count;
- current verdict: `CONTINUE | CONVERGE | TRIM | MERGE | HOLD | GATE REVIEW`;
- next contiguous packet seed readiness; and
- the exact next action in one sentence.

## Immediate application to RP-002

`RP-002` exceeded the normal convergence budget. Existing protected work remains valid, and the mandatory convergence cycle is complete: A2 consolidated presentation, A3 preserved the SOLIDIFIED mappings, A4 locked one end-to-end graph, and A5 composed one pure P0–P3 protected journey smoke through real authorities.

Current verdict: `GATE REVIEW — A5 HANDOFF`. The protected-code and post-integration validation deficits are zero; normal integration, final production assets, Working evidence, and release remain later-stage obligations. `RP-003` is seed-ready but reserved pending the coordinator gate. No additional RP-002 protected micro-seam is authorized unless the coordinator records a genuine hold or a later validation reproduces a regression.
