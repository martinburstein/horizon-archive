# Accessibility Sentinel Round 5 gate

## Outcome

The shared Terminal focus lifecycle now passes the complete regression flow at desktop and 320 px narrow presentations. One bounded fix adds a meaningful fallback when the physical trigger becomes disabled or disappears after mastery: focus moves to `Start Calibration`, `Resume Calibration`, or `Continue` instead of falling to the document body.

This is not a WCAG compliance claim. The required in-app Browser remained unavailable, so browser screenshots, contrast sampling, zoom inspection, and screen-reader announcement order were not accepted as evidence.

## Numbered flow

1. **Terminal opens — healthy in regression evidence.** Every Terminal exposes `role="dialog"`, `aria-modal="true"`, and a title through `aria-labelledby`; initial focus lands on that title.
2. **Terminal keyboard loop — healthy in regression evidence.** Background commands are inert, scene triggers are disabled, and Tab/Shift+Tab stay inside the Terminal.
3. **Escape with unfinished work — healthy in regression evidence.** Escape closes First Signal and Calibration, preserves same-scene source/hints/results, and returns focus to the exact trigger after the next rendered frame.
4. **Mastery close — improved and healthy in regression evidence.** When the old trigger becomes unavailable, focus moves to the next meaningful enabled action. Route mastery now lands on `Start Calibration`.
5. **Calibration orientation footer — structurally healthy; exact rendered metrics remain provisional.** The exact 102-character sentence is ungraded, is the final visual grid row, retains full copy at desktop and narrow test states, and uses a separate 2 px internal focus outline on tabs. A fresh visual measurement of one line at canonical width and three lines at 320 px was not possible.
6. **AB-01 canonical frame — artifact inspection healthy; runtime integration pending.** Native 640 x 480 and exact 2x studies preserve the 640 x 360 world, readable landmark/Terminal/route hierarchy, a state-distinct completion route, and a quiet final 19-pixel footer field. These are framing studies, not live UI.
7. **Reduced motion and zoom — partially inspectable.** No authored motion or timed input currently carries meaning; the reduced-motion rule disables smooth scrolling. Browser zoom, 640 x 480 runtime reflow, and letterboxing remain unverified.

## Files

- `horizon-archive-game/src/App.jsx`
- `playtest/e2e-playthrough.mjs`
- `Accessibility Sentinel/round-05/REPORT.md`
- `Accessibility Sentinel/WORK_LOG.md`

## Validation

- Unit tests: 31/31 passed
- Production build: passed
- Complete title-to-credits E2E: passed
- Focus assertions: dialog name/entry, inert command background, disabled scene trigger, Tab/Shift+Tab containment, Escape exact-trigger restoration at desktop and 320 px, session preservation, and route-mastery fallback
- AB-01 inspection: native available/complete 640 x 480 and complete 1280 x 960 nearest-neighbor artifact viewed; PIL dimension/palette/difference checks reviewed
- Runtime errors: none in the complete E2E
- Fresh in-app Browser screenshots: blocked; `iab` unavailable after required troubleshooting and only the user Chrome profile was discovered

## Findings

- **P1 remaining:** the live app is still a responsive approximation rather than one composed 640 x 480 runtime. Native type, exact footer line count, letterboxing, and zoom cannot be signed off until that integration exists.
- **P2 remaining:** Calibration diagnosis misses are announced globally but are not associated with the specific error-type, line, or token controls.
- **P2 remaining:** selected LOOK AT / USE / TALK TO state is visual-only and lacks a programmatic pressed state.

## Handoff

Player/Coder Round 6 should integrate AB-01 into the unified 640 x 480 runtime, then rerun the Terminal and footer audit at 640 x 480, 1280 x 960, 320 x 240 authored alternate, and a non-multiple host. Preserve the focus lifecycle and add field-specific Calibration error association during that pass.

## Status

`ready to advance`

