# Horizon Archive Process Changelog

## Current control

- The coordinator runs one adaptive retrospective after every completed coordinator release and before the cycle reveal.
- Each cycle records `KEEP`, `TUNE`, or `REDESIGN` with evidence and any future-cycle changes.
- Process adaptation may improve throughput, clarity, validation placement, model routing, checkpointing, scheduling, and artifact organization without weakening product, canon, learning, privacy, accessibility, release, reveal, or user-work protections.

## Entry template

### YYYY-MM-DD / cycle edge — KEEP | TUNE | REDESIGN

- **Observed:** measurable friction, failure, duplication, or confirmation that the process worked.
- **Decision:** what remains or changes for the next cycle.
- **Expected benefit:** throughput, quality, clarity, reliability, or reduced context load.
- **Preserved guardrails:** contracts that remain unchanged.
- **Validation:** how the next cycle will show whether the decision helped.
- **Rollback trigger:** evidence that restores or revises the previous process.

## 2026-07-18 / optimized-loop authorization — TUNE

- **Observed:** the original heartbeat duplicated repository authorities; active packet/increment history was repeatedly reread; full validation and pushes were repeated more often than required; the fixed hourly wake could arrive before a long cycle completed.
- **Decision:** adopt `AUTONOMOUS_PRODUCTION_LOOP.md`, compact replace-in-place handoffs, top current-control blocks, integration-sized tranches, tiered validation, five normal push boundaries, non-overlapping three-hour wakes, and hybrid Sol/Terra role guidance. Martin additionally authorizes an evidence-based retrospective after every completed cycle.
- **Expected benefit:** more production work per wake, less stale context and repeated validation, dependable next-task continuation, and one tangible visual result per completed cycle.
- **Preserved guardrails:** sequential role ownership, independent release validation, strict learning evidence, hidden-lore and no-RP-013 limits, privacy/save/accessibility/world invariants, protected user work, and exactly one canonical reveal.
- **Validation:** compare the next cycle's elapsed time, repeated reads/builds/pushes, late defects, visible delta, release evidence, and handoff clarity against the previous cycle.
- **Rollback trigger:** missed authorities, duplicated work, late regression, ambiguous handoff, unsafe overlap, or weaker release evidence attributable to the optimization.

## 2026-07-19 / RAI explanation convergence — TUNE

- **Observed:** the optimized read/checkpoint/push structure delivered the full ten-stage cycle without overlap or duplicated role work, and the clean complete E2E finished in `110.4s` versus the prior release's `875.7s`. The coordinator's first E2E launch nevertheless failed immediately with `ERR_CONNECTION_REFUSED` because the isolated port `5174` preview was absent; starting the exact preview and confirming HTTP `200` produced the single clean accepted rerun.
- **Decision:** keep the optimized structure and add one coordinator E2E endpoint preflight: verify `5174` returns HTTP `200`, start the exact local production preview only when absent, then launch E2E and stop only that coordinator-owned preview after cleanup.
- **Expected benefit:** remove an avoidable failed launch and make the one-E2E release rule deterministic without weakening coverage.
- **Preserved guardrails:** role order, release independence, non-overlapping build/E2E, complete E2E coverage, live responsive review, privacy/save discipline, canon, learning, accessibility, protected user work, and reveal rules remain unchanged.
- **Validation:** the next coordinator gate should reach a clean complete E2E on its first launch with a recorded `5174` HTTP preflight and no orphan listener.
- **Rollback trigger:** the preflight starts the wrong bundle, conflicts with an existing listener, leaves an orphan, obscures a real product failure, or increases release ambiguity.
