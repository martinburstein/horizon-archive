# Accessibility Sentinel Round 7 gate

## Outcome

The complete Responsible AI primary, fresh-transfer, and closed-note mastery flow passes the bounded accessibility gate. One safe ownership fix replaces the generic Pilot label on Responsible AI state/course messages with the Lore-defined System or 901 Teacher owner.

This is not a WCAG compliance claim. The in-app Browser remained unavailable after the required troubleshooting path, so evidence is limited to current source, automated browser regression, generated test captures, and direct artifact inspection.

## Numbered flow

1. **Adventure verbs — healthy.** Exactly one of LOOK AT, USE, or TALK TO reports `aria-pressed="true"`; pointer and keyboard dispatch remain correct at 640 x 480 and 320 x 240.
2. **Primary Responsible AI form — healthy.** Four labeled fields, strict 24/24 completion, unique field remediation, `aria-invalid`, live aggregate status, privacy-safe persistence, and the course-authored/not-exam boundary pass.
3. **Fresh transfer — healthy.** A separate six-scenario 24/24 form preserves primary completion, uses the same field associations and focus treatment, and cannot be skipped.
4. **Closed-note explanation — healthy.** Four independently typed fields expose field-specific invalid state/remediation; close/reopen preserves the session but saves no response text; learner ownership and confidence are required before strict mastery.
5. **Dialog/focus and scrolling — healthy by shared regression/source.** Named modal entry, Tab/Shift+Tab containment, inert background, Escape/close restoration, 2 px internal focus outlines, and one Responsible AI form scroll owner remain intact.
6. **Three 64 x 64 native frame modes — healthy in 1x grayscale artifact evidence.** Primary, transfer, and explanation differ by rail/enclosure geometry, with 300 and 519 grayscale pixels changing at the two boundaries. [Native strip](../../Concept%20Art%20Book/production-pixel/AB-01/responsible-ai/responsible-ai-frame-modes-1x-192x64.png)
7. **Voice ownership — corrected.** Closing practice is labeled `SYSTEM // EXPEDITION STATE`; primary completion and strict readiness are labeled `901 TEACHER // SOURCE-GROUNDED COURSE`; learner-authored closed-note work remains explicitly `SPEAKER: PILOT`.

## Files

- `horizon-archive-game/src/App.jsx`
- `playtest/e2e-playthrough.mjs`
- `Accessibility Sentinel/round-07/REPORT.md`
- `Accessibility Sentinel/WORK_LOG.md`

## Validation

- Unit tests: 39/39 passed
- Production build: passed
- Full title-to-credits E2E: passed with zero runtime errors
- Responsible AI evidence: primary 24/24, transfer 24/24, explanation 4/4, ownership confirmation, strict mastery, session continuity, no saved free text
- Accessibility evidence: three verb pressed states, field labels/errors, shared dialog focus lifecycle, internal focus outlines, and one-scroll-owner source contract
- Grayscale: three native frame modes inspected; adjacent differences measured at 300 and 519 pixels

## Findings

- **P2 remaining:** accepted in-app Browser verification of screen-reader announcement order, forced colors, browser zoom, and visual focus under operating-system high-contrast settings remains unavailable.
- **P3 remaining:** transfer and closed-note stages still share one overwritten Responsible AI QA screenshot path; dedicated retained captures would improve future visual regression review.

## Handoff

Player/Coder Round 8 should preserve the corrected ownership contract and add distinct transfer/closed-note visual regression captures. When the in-app Browser becomes available, verify zoom, forced colors, and announcement order without weakening the mastery gates.

## Status

`ready to advance`

