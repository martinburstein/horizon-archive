# Accessibility Sentinel Round 6 gate

## Outcome

The unified Drowned Archive frame and Responsible AI primary Terminal pass the source and full regression gate. One bounded accessibility fix now exposes each incorrect Responsible AI field with `aria-invalid="true"` while preserving its unique `aria-describedby` remediation association.

This is not a WCAG compliance claim. The Codex in-app Browser remained unavailable after its required troubleshooting path. The linked images are fresh automated regression captures from this run, not accepted in-app Browser audit captures.

## Numbered flow

1. **Canonical frame at 640 x 480 — healthy in regression evidence.** Logical bands are exactly 640 x 360 plus 640 x 120, scaling is 1x, the AB-01 source is native 640 x 360, smoothing is disabled, the target remains at least 44 x 44, and DOM controls remain live. [Fresh regression capture](../../playtest/ab01-canonical-640x480.png)
2. **Canonical frame at 1280 x 960 — healthy in regression evidence.** The complete frame scales exactly 2x with centered letterboxing and no unequal axis scaling. [Fresh regression capture](../../playtest/ab01-canonical-1280x960.png)
3. **Authored narrow frame at 320 x 240 — healthy in regression evidence.** The app uses the 320 x 240 alternate with a native 320 x 180 world, 60 px interface band, 1x pixels, and a 44 x 44 minimum hotspot. [Fresh regression capture](../../playtest/ab01-canonical-320x240.png)
4. **Non-multiple 1600 x 900 host — healthy in regression evidence.** A centered 640 x 480 frame is letterboxed at 1x instead of stretched. [Fresh regression capture](../../playtest/ab01-canonical-1600x900.png)
5. **Responsible AI dialog and focus lifecycle — healthy by shared source/regression evidence.** The shared Terminal is a named modal dialog, focuses its title, contains Tab/Shift+Tab, makes the command background inert, preserves same-scene choices on close/reopen, and restores exact or meaningful focus after close.
6. **Responsible AI form scrolling — healthy in source and current capture.** The exercise-specific outer Terminal hides overflow; the form is the sole `overflow:auto` owner; the field grid remains visible overflow inside it. Title, file/status, and course-authored boundary stay fixed. [Fresh regression capture](../../playtest/responsible-ai-primary-qa.png)
7. **Four live field labels and validation — improved and healthy.** Principle, stakeholder, mitigation, and owner are individually discoverable by accessible name. After a 0/4 response, each select exposes `aria-invalid="true"`, references its unique visible remediation, and the aggregate score remains a polite live status.
8. **Physical four-part motif — healthy as artifact evidence.** The 64 x 64 sequence changes geometry and luminance at every step: grayscale adjacent-frame pixel differences are 31, 68, 50, and 68. The four ordered indicator groups therefore do not rely on hue alone; the 2x asset remains exact nearest-neighbor. [1x sequence](../../Concept%20Art%20Book/production-pixel/AB-01/responsible-ai/qa/responsible-ai-sequence-1x-320x64.png)
9. **Reduced motion and zoom — partially verified.** The physical motif uses static geometry states and no timed motion is required for comprehension. Reduced motion disables smooth scrolling. Browser zoom and screen-reader announcement order could not be directly audited without the in-app Browser.

## Files

- `horizon-archive-game/src/App.jsx`
- `playtest/e2e-playthrough.mjs`
- `Accessibility Sentinel/round-06/REPORT.md`
- `Accessibility Sentinel/WORK_LOG.md`

## Validation

- Unit tests: 35/35 passed
- Production build: passed
- Complete title-to-credits E2E: passed with zero runtime errors
- Viewports: 640 x 480, 1280 x 960, 320 x 240, and 1600 x 900
- Scaling: logical bands, whole-number scale, centering/letterboxing, native asset dimensions, no smoothing, target size, and live controls asserted
- Responsible AI: four accessible field labels, four unique remediation associations, four invalid states, strict 24/24 primary gate, safe close/reopen, privacy sanitizer, and course-authored/not-exam boundary asserted
- Physical motif: 64 px sequence inspected at 1x and 2x; adjacent grayscale differences measured

## Findings

- **P2 remaining — active verb semantics:** LOOK AT, USE, and TALK TO show selected styling but still lack `aria-pressed` or another programmatic selected state. Affected users cannot confirm the active action through assistive technology.
- **P2 remaining — final visual verification:** native bitmap-type legibility, grayscale contrast ratios, browser zoom behavior, focus visibility under forced colors, and screen-reader announcement order remain unverified because the in-app Browser was unavailable.
- **P3 observation:** the physical progress strip contains five snapshots (initial plus four completed groups). Documentation should consistently call this a four-part progression rather than a four-frame sequence.

## Handoff

Player/Coder Round 7 should add programmatic pressed state to the three adventure verbs and verify it at canonical and narrow layouts, then run a fresh in-app Browser pass for zoom, forced colors, focus visibility, and screen-reader announcement order when that surface is available.

## Status

`ready to advance`

