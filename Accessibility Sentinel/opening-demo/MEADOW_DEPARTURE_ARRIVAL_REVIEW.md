# Completed-Meadow Departure and Arrival Accessibility Gate

**Verdict: PASS — the target-size/readability blocker and plain-language finding are closed.** The two-choice handoff now provides measurable compact targets, readable native narrow labels, explicit optional-versus-scored wording, destination-aware names, safe calibration recovery, focus/reload restoration, and a surface-safe arrival status without weakening mastery.

This is an integration gate, not a WCAG conformance claim. Coordinator-provided live browser evidence establishes rendered geometry, focus, recovery, announcement content, and reload state. Actual screen-reader spoken order, Windows forced colors, 200% zoom, and physical switch-control remain manual evidence risks.

## Re-review evidence

1. **Choice comprehension — healthy.** The shared description now says the learner may depart or choose scored calibration, then states the diagnosis and `8/8 + 8/8 + 4/4` requirement positively. Unlimited retry, safe Exit, and the open route remain explicit. Both native buttons retain `aria-describedby="meadow-choice-summary"` and destination-aware accessible names.
2. **Native `320 x 240` geometry — healthy.** The command panel is exactly `(0,180)..(320,240)`. The summary is `(5.8,183.6)..(314.2,211.2)`, uses 8 px type/line height, and has `scrollHeight = clientHeight = 28`. Optional calibration is `(5.8,213.2)..(159,237.2)` and departure is `(161,213.2)..(314.2,237.2)`: both are 153.2 x 24 px with 8 px type, a 2 px gap, and no clipping.
3. **Focus visibility and containment — healthy.** The focused departure control's 2.4 px inset outline remains inside the command panel and viewport. The document remains exactly `clientWidth = scrollWidth = 320` and `clientHeight = scrollHeight = 240`.
4. **Safe optional-practice recovery — healthy.** Activating optional calibration opens the modal; Exit returns focus to `Resume optional calibration`; the route remains available and no horizontal or vertical page overflow appears.
5. **Arrival and persistence — healthy in browser evidence.** Departure populates the polite status with the existing chapter/location line and focuses the destination's primary Terminal. Reload/resume preserves the destination state, status content, and primary-hotspot focus at `320 x 240`.
6. **Canonical presentation — healthy.** The pre-final live `1280 x 720` pass measured both actions at 29.2 px high with 8 px type and no overflow. Final CSS preserves the canonical branch while adding a 24 px minimum; the special narrow reflow is scoped to the completed-Meadow choice state.
7. **Contrast, non-color meaning, and motion — unchanged healthy.** Action text, focus, summary text, and summary rail retain the previously measured `10.38:1`, `8.44:1`, `13.87:1`, and `7.19:1` contrasts. Labels and `ROUTE OPEN` carry meaning without color. The transition is a direct replacement with no authored motion.

## Closed findings

- **P1 target size/readability — closed.** Source now enforces 24 px height and 8 px type in both canonical and narrow branches; live narrow rectangles and focus containment match the contract.
- **P2 optional/scored double negative — closed.** Runtime copy is positive and preserves the strict gate.
- **P2 announcement implementation — structurally closed, manual AT observation remains.** Live evidence proves the status text and destination focus occur and survive reload. A human NVDA/equivalent pass is still required before claiming spoken-order conformance.

## Validation and handoff

Focused scene-transition/opening/mixed-simulation tests pass `20/20`; the production build passes. Preserve the 24 px narrow targets, 8 px labels, contained focus outline, positive scoring language, shared descriptions, polite status, and primary-hotspot/reload focus. No further Coder change is required for this gate. Schedule NVDA/equivalent spoken-order, Windows forced-colors, 200% zoom, and physical switch-control observations before any accessibility-conformance claim.
