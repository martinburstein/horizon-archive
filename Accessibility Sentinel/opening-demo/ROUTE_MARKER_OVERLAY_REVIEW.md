# Glass Meadow route-marker overlay accessibility gate

## Verdict

**PASS - the completed route-marker overlay is cleared after its material correction.** Locked, awake, and completed states remain structurally distinct without color; the interactive hotspot exposes the current state to assistive technology; strict sanitized evidence prevents early promotion; desktop/narrow labels and hotspots remain contained; and the translucent canvas cannot intercept input or cover the higher focus/control layers. No runtime or raster edit was warranted in this gate.

## Numbered gate

1. **Non-color state distinction - healthy.** Locked uses a low folded profile bounded at logical y=119..150, awake raises a three-fin profile to y=85, and completed adds a crown/split-fin profile reaching y=73 and x=283. Player's fresh live loop visually confirmed all three profiles, including the crowned completed state, at 1280 x 720 and 320 x 240. The material revision changes alpha/reflection treatment only and preserves those exact bounds.
2. **Screen-reader labeling and progression - healthy.** The overlay canvas is decorative with `aria-hidden="true"`. The real hotspot button includes the current state in its accessible name and persistent visible label: LOCKED, AWAKE, or COMPLETED. State derivation requires exact sanitized first-Terminal completion before awake and exact sanitized route mastery before completed; forged, missing, in-progress, remediation, and premature mastery inputs cannot promote early.
3. **Desktop and narrow containment - healthy.** At 1280 x 720 the completed hotspot is `(850.53, 290.76)..(1018.46, 493.63)` and its label is `(854.98, 457.04)..(1014.01, 487.96)`, inside both hotspot and scene. At 320 x 240 the hotspot is `(246.50, 95.56)..(315.50, 178.69)` and label `(250.30, 132.09)..(311.70, 173.89)`, inside the `0..320 x 0..179.20` scene with `clientWidth = scrollWidth = 320`. Player confirmed scene controls remained unobstructed.
4. **Translucent material and focus visibility - healthy.** The material layer is pointer-transparent at z-index 1. Hotspots, their persistent labels, and the 2 px gold focus-visible outline are at z-index 2; Terminal controls are at z-index 3. The translucent layer therefore cannot intercept focus/pointer input or paint over the focus/control layer. Body alpha remains at or below 0.4, restrained reflection clusters preserve background-through-glass, and the persistent label retains its opaque backing and state-specific dashed/double border cues.
5. **Reload, motion, and CRT contracts - healthy.** Player verified locked, awake, and completed persistence across reload/resume; completed returned with the same state label and narrow bounds. Rendering is a synchronous square-pixel canvas redraw with no animation, timing, glow, blur, or scanline. Reduced-motion behavior and the already-passed canonical/compact CRT containment, 24 px scene controls, 44 px hotspots, and no-horizontal-overflow contracts are unchanged.

## Validation

- Accepted Player Agent's fresh locked -> awake -> completed desktop/narrow/reload walkthrough and exact live bounds as runtime evidence.
- Reviewed current `App.jsx`, `MeadowRouteMarker.jsx`, `pixelMeadow.js`, overlay/focus CSS, save sanitizers, Coder/Player logs, and focused tests.
- `node --test test/pixelMeadow.test.js test/meadowRouteMarker.test.js test/routeMarkerExercise.test.js`: 16/16 passed.
- Current Coder evidence: complete unit suite 176/176 and production build passed.
- Player removed temporary screenshots after measurement, so this gate does not make a retained-screenshot visual or WCAG-conformance claim.
- Human NVDA announcement cadence, physical switch control, forced colors, and 200% zoom remain outstanding before any accessibility-conformance claim.

## Handoff

Preserve the exact state derivation, accessible state names, persistent bounded labels, non-color silhouettes, z-index ordering, pointer-transparent decorative canvas, reduced-motion behavior, and established CRT/scene containment.

## Status

`PASS - route-marker overlay accessibility gate cleared`
