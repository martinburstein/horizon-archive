# Workload Sort saved-resume accessibility gate

## Verdict

**PASS for interaction accessibility.** The W01-to-W02 saved-resume tranche preserves deterministic focus, announced feedback, clean private controls, strict evidence boundaries, readable logical-pixel floors, and contained internal scrolling at both `640 x 480` and exact `320 x 240`.

This verdict does **not** approve the Chapter II environment art. The unchanged world plate remains `BLOCKOUT ONLY` under the Curse Art Director review; that is a production-art finding, not an interaction-accessibility blocker for this Terminal tranche.

## Flow and state checks

1. **Wrong answer and retry — pass live.** W01 accepted a native radio choice, moved focus to the `Check card` button after submission, and exposed the non-color text status `Not yet...` plus a separately reachable `Reveal contrast hint`. Correcting the answer changed the same polite status to `Correct after remediation. Contrast recovered.` and disabled finalized choices.
2. **Close and reopen — pass live.** Closing and reopening during remediation preserved the in-session choice/remediation state and moved focus to the named Terminal title. Background hotspots remained disabled while the dialog was open.
3. **Finalized W01 to W02 reload — pass live.** After finalizing W01 and advancing, a browser reload returned through `Resume signal` to Chapter II. Reopening Workload Sort landed on W02, focused `MACHINE TERMINAL // Workload Sort`, showed no checked radio, and announced `Saved evidence restored. Continue with the first incomplete card.`
4. **Prior-progress strip — pass live.** The strip appeared only after reconstruction and read `RESUME // PRIOR ASSESSED PROGRESS: 1/12 finalized · WORKING CONTROLS: reset clean`. It is a semantic `note`, not a live region, and occurs in DOM/reading order after the checkpoint explanation and before Activity/Form/Progress and the W02 fieldset. This avoids a competing announcement while keeping the boundary discoverable.
5. **Multi-card, retry-form, and completed-unacknowledged reconstruction — pass in focused logic/integration tests.** The tests cover W05 as the first gap after a contiguous four-card prefix, first retry card `R-W04`, and a fully finalized but unacknowledged form reopening on its result gate. These deeper variants were not replayed manually in Chrome during this bounded pass.
6. **Evidence/privacy — pass in source, tests, and Teacher validator.** Reconstruction uses only sanitized contiguous finalized correctness and bounded aggregate evidence. It does not restore a selected choice, response, feedback, hint-open state, working index, or per-card attempt state; it does not increment attempts or create mastery. Confidence and explicit acknowledgement remain required, and pass remains `10/12` with no critical miss.
7. **Safe return — pass in focused tests.** Scene round-trip/reload routing preserves assessed evidence while resetting private working controls. Existing safe-return focus, status, and mastery-isolation contracts remain green.

## Rendered geometry

At `640 x 480`, the game rendered its authored `320 x 240` surface at roughly 2x. The resume note measured `515.3 x 51.5` physical px with `8 px / 10 px` authored type; no page-level horizontal overflow occurred. Terminal command buttons measured at least `112.3 x 54.8` physical px. The dialog used bounded internal vertical scrolling.

At exact `320 x 240`, the dialog measured `312 x 171` at `(4, 4)` with no page-level horizontal overflow. The resume note wrapped to `244 x 26` with `8 px / 10 px` type and no horizontal overflow. Choice labels measured `248 x 42`; the Close button measured `57.6 x 28`; Check card measured `89.3 x 30`. All inspected controls exceeded the established 24 px command-target floor, focus stayed on the Terminal title after reload/open, and zero radios were checked. Reduced-motion preference was active during measurement; the state change remained direct and motion-independent.

## Announcement, order, and non-color findings

- The dialog has a stable accessible name and focuses that title on every observed open/reopen.
- W01/W02 are native named groups with native named radios. Feedback is a polite status with complete text, so correct/not-yet meaning is not color-only.
- The resume strip uses explicit `PRIOR ASSESSED PROGRESS` and `WORKING CONTROLS: reset clean` wording plus a square left rail. Its meaning does not depend on color, animation, position, or world art.
- The scene-change status and Terminal feedback are separate polite surfaces. The resume note is intentionally not live, preventing duplicate or competing reload announcements.
- DOM/tab order follows title, Close, file tab, task context/note, choices, and output controls. Automated focus changes in the observed path scrolled controls into view without page-level horizontal movement; physical keyboard traversal remains a documented evidence limit.

## Validation

- `node --test test/workloadResumeIntegration.test.js test/workloadSortExercise.test.js test/sceneReturn.test.js test/sceneTransition.test.js` — `30/30` passed.
- `python curriculum/lessons/L-02-01/validate_saved_evidence_resume.py --self-test` — passed.
- Live Chrome path: W01 wrong/retry, close/reopen, corrected finalization, W02 advance, full reload, Resume signal, reopened W02, clean controls, semantic note, focus, and exact `640 x 480` / `320 x 240` measurements.
- `git diff --check` — passed; only line-ending advisories were emitted.

## Remaining evidence limits

This is a product gate, not an accessibility-conformance claim. Human NVDA/equivalent spoken-order, Windows forced-colors, 200% browser zoom, physical keyboard-only traversal, and switch-control observations remain unperformed. The W05, retry-form, and completed-unacknowledged variants are source/test-confirmed rather than separately live-replayed in this pass.

## Status

`PASS — Workload Sort saved-resume interaction gate cleared; environment art remains BLOCKOUT ONLY`
