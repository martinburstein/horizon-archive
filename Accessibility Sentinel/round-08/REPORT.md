# Accessibility Sentinel Round 8 gate

## Outcome

The Model/Deployment primary Terminal passes its bounded accessibility gate. One labeling fix now states all five concepts represented by the physical motif: Model, Deployment, Request configuration, Decision, and Reason. A dedicated primary-remediation capture path now records this stage.

This is not a WCAG compliance claim. The in-app Browser remained unavailable after troubleshooting; evidence is limited to source, automated browser regression, the fresh regression capture, and direct artifact inspection.

## Numbered flow

1. **Entry and ownership — healthy.** The course-authored/not-exam boundary is visible; System owns close/resume state and 901 Teacher owns primary completion.
2. **Five live labels — corrected.** Model, Deployment, Request configuration, Decision, and Reason are now explicitly visible while accessible field names remain `Model choice decision` and `Model choice reason`.
3. **Strict 16/16 — healthy.** Eight scenarios independently validate decision and reason across all four topic families; confidence is required before primary completion.
4. **Errors and remediation — healthy.** Both fields expose `aria-invalid`, unique `aria-describedby` feedback, an aggregate polite status, and progressive comparison guidance.
5. **Focus/session/privacy — healthy.** Shared modal focus containment and restoration remain intact; same-scene choices survive close/reopen; choices, prompts, and runtime text never persist.
6. **Layout — healthy by source/regression.** One form scroller owns overflow; fields are two columns at canonical width and one column in the narrow authored frame; 2 px internal focus outlines remain unclipped.
7. **Three-ring motif — healthy in grayscale artifact evidence.** The 64 x 64 grayscale asset retains 11 luminance values. Outer, middle, inner, and two-part core regions remain distinguishable by nested geometry, gaps, and value structure. [Grayscale motif](../../Concept%20Art%20Book/production-pixel/AB-01/model-deployment/qa/model-deployment-rings-grayscale-64x64.png)
8. **Capture provenance — improved.** [Model-choice primary remediation](../../playtest/model-choice-primary-remediation-qa.png) is now a dedicated E2E output rather than sharing another Terminal's screenshot path.

## Files

- `horizon-archive-game/src/App.jsx`
- `horizon-archive-game/src/styles.css`
- `playtest/e2e-playthrough.mjs`
- `playtest/model-choice-primary-remediation-qa.png`
- `Accessibility Sentinel/round-08/REPORT.md`
- `Accessibility Sentinel/WORK_LOG.md`

## Validation

- Unit tests: 42/42 passed
- Production build: passed
- Full title-to-credits E2E: passed with zero runtime errors
- Model/deployment: 16/16, four families, field associations, progressive remediation, focus/session recovery, privacy allowlist, ownership, and credits
- Motif: native color and grayscale assets inspected at 64 x 64; ring/core luminance and geometry verified

## Findings

- **P2 remaining:** screen-reader announcement order, forced-colors behavior, and zoom remain unverified because the in-app Browser is unavailable.
- **P3:** only primary remediation has a retained Model Choices capture; future transfer/closed-note stages should receive their own paths when implemented.

## Handoff

Round 9 should preserve the five-label contract and add stage-specific captures if Model Choices transfer and closed-note work are implemented. Run forced-colors, zoom, and announcement-order checks when the in-app Browser becomes available.

## Status

`ready to advance`

