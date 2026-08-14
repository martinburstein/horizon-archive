# Horizon Archive Runtime Image Integration Loop

Loop ID: `HA-RI-001-v1`

Authority: Martin's 2026-08-14 instruction to build and operate a production
loop that integrates the completed private image queue into the runtime.

## Target and completion

Integrate `IMAGE_QUEUE.json` earliest-first without changing the canonical
route, lesson ownership, save/evidence behavior, world response, or shared
ending. The loop is complete when all 27 production masters are:

- referenced by an exact runtime slot at their canonical address;
- provenance-bound to their card and receipt;
- presented with current alternative text and responsive containment;
- verified in the states that actually select them;
- independently reconciled in one final aggregate release pass; and
- marked `integrated_released` in the queue.

`produced_pending_integration`, `integration_candidate`, and
`integrated_released` are different states. The newest candidate is not the
best or committed release by implication.

## Controller

Each asset executes the same bounded controller:

```text
OBSERVE -> CHECK HARD STOPS -> MAP SLOT -> CHECKPOINT -> INTEGRATE
        -> VERIFY CHANGED EVIDENCE -> COMPARE -> RECORD -> DECIDE
```

The per-asset decision is one of `CONTINUE_SAME_STRATEGY`, `REPLAN`,
`RETURN_TO_OWNER`, `ROLLBACK`, `STOP_SUCCESS`, `STOP_BLOCKED`, or
`STOP_LOW_MARGINAL_VALUE`.

## Current, best, and committed state

- `CURRENT`: the inspected runtime at the iteration's source commit.
- `CANDIDATE`: the exact runtime tree after one image is wired.
- `BEST`: the strongest candidate whose declared focused gates pass.
- `COMMITTED`: the last Intelligence-released product candidate.

An image-generation selection receipt proves production readiness, not runtime
acceptance. A runtime candidate never overwrites or mutates its production
master.

## One-asset iteration

1. Select the earliest `produced_pending_integration` item. Resume an
   `integration_candidate` before selecting another item.
2. Verify the card, receipt, master path, bytes, SHA-256, exact `1920x1080`
   RGB PNG identity, and no-overwrite status.
3. Identify the smallest existing state boundary that owns the host. Reuse the
   existing lesson, focus, return, and fallback graph; an image does not create
   a new mechanic or route step.
4. Add or update only the asset registry, runtime import/selection, semantic
   alternative text, presentation class, and source-dependent focused tests.
5. Run the cheapest checks invalidated by those files:
   - metadata/hash and provenance integrity;
   - the exact registry/selector unit test;
   - a production build and emitted-asset identity check when an import or
     bundler input changes;
   - one source-dependent responsive/accessibility check when crop,
     containment, focus, or semantic presentation changes.
6. Do not rerun related, full, validator, fixture, browser, or E2E suites merely
   because the next image or role begins. Expand only when a shared boundary
   changed or a focused result exposes uncertainty.
7. Record the candidate, verifier vector, delta versus best, evidence reuse,
   and exact next asset. Commit only the intended runtime, asset-control, and
   receipt files.

## Evidence economy

Existing `FRCE-015-v1` related `63/63`, full `1047/1047`, validators `40/40`,
and unaffected fixture/route/save/privacy evidence are `REUSED` while their
relevant inputs remain unchanged. They are not relabeled as fresh passes.

One cold full suite, applicable validators, clean served build, complete E2E,
representative desktop/narrow/effective-200%/forced-color/reduced-motion
review, and independent exact-candidate reconciliation are reserved for the
final aggregate candidate or an earlier change that truly invalidates those
boundaries.

New tests are added only for a new selector, source identity, responsive
mapping, or previously uncovered failure mode. Test count is not a progress
metric.

## Budgets and stopping

- Scope: one asset per iteration; no image generation or editing.
- Concurrency: one authoritative integration worker.
- Patch budget: the smallest host-owned runtime surface plus shared adapter
  changes that prevent duplicate work.
- Verification budget: focused checks per asset; one final aggregate reserve.
- Two equivalent failures require causal diagnosis before retry.
- Three non-improving iterations in one strategy family force replan, return,
  rollback, or stop.
- The first complete per-asset PASS stops that asset iteration.
- A hard provenance, semantic, accessibility, route, save, or release-boundary
  failure cannot be averaged away.

## Rollback and safety

Every host remains fail-closed to the already released runtime presentation or
generic launcher until its source identity and selector are lawful. Reverting
the host-owned import/registry/selector must restore the previous verified
product without touching the production master.

Never inspect, stage, alter, or commit repository QA screenshots, Martin's
browser/profile/save, hidden lore, the art-book PDF, training files, or
unrelated worktree state. Never reveal private production masters in chat.

## Final release sweep

After all 27 items have focused PASS candidates, freeze one exact aggregate
candidate. Intelligence then performs the reserved full-product validation,
classifies every variance, updates the release map/scoreboard and queue to
`integrated_released`, and writes the next exact handoff. A failed final
holdout returns only the affected boundary; it does not restart successful
unaffected asset iterations.
