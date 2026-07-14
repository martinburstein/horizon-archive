# Field-linked Terminal and SDK decision-trace final accessibility review — 2026-07-13

**Outcome: PASS for the bounded interaction gate.** The corrected field-linked Terminal now has a consistent visual, semantic, and focus target; the SDK Route Key is independently keyboard-readable; and the new targeted SDK decision trace passes its exact-viewport, error-association, focus-order, recovery, privacy, and strict-mastery checks. This is not a conformance claim.

## Field-linked Terminal

- At the `640 x 480` host, the settled narrow-authored scene is fully contained. The primary hotspot measures approximately `317.27 x 316.38 px` at `x=161.34, y=41.59`, matching the complete authored coupler body. Its label occupies `x=11.64..150.44`, leaving about `10.9 px` before the hotspot, while the Route Marker begins at `x=491.52`, leaving about `12.9 px` after it.
- At exact `320 x 240`, the scene is exactly `320 x 180`; the primary target is `160 x 159.11 px` at `x=80, y=19.88`; its label is fully contained at `x=5..75`; and the Route Marker begins at `x=246.5`. The label does not cover the crown, membrane, body, tongue, or Route Marker.
- Entry and reload focus the button named `look at field-linked Terminal`. Switching to `USE` exposes `use field-linked Terminal`. Opening it focuses `MACHINE TERMINAL // First Signal`, disables both background hotspots, contains the `312 x 171 px` narrow dialog, and retains the established `57.61 x 28 px` Close control.
- The production picture remains decorative and pointer-transparent. Runtime source provides the static production PNG through `prefers-reduced-motion: reduce`; focused production tests reconfirm six identical bodies, six membrane states, and no animation outside the `3,596`-pixel membrane.

## SDK Route Key and targeted decision trace

- The dialog description contains only `sdk-route-offline-warning`; the six-entry Route Key is a separately named `role="region"`, `tabindex="0"`, and `aria-labelledby="sdk-route-label-key-title"` reference. Keyboard focus can enter the key and then advances to `1. Client route`.
- The full E2E intentionally misses SDK route P01, opens matching trace DP01, and settles the responsive frame before measuring exact `640 x 480` and `320 x 240` hosts. Both use the one-column narrow logical layout, remain page-contained, have no horizontal overflow in either the Route Key or form, retain three native selects at or above the `24 px` target floor, and preserve the complete longest option label. The larger canonical logical frame retains the separately tested three-column contract.
- A deliberate endpoint-family-only miss yields `2/3`, marks only `2. Endpoint family (concept only)` invalid, and associates its specific feedback. Correcting it yields `3/3`; returning to the chooser clears both route and reason before the original scenario can be retried.
- The trace status is polite text, Teacher remediation is separate from neutral System scoring, and no motion, timing, or dexterity signal participates in evidence. The complete E2E reaches strict SDK mastery after the expected `17` chooser attempts and `2` remediation attempts, then reloads with focus on the next meaningful exercise. Working choices, endpoints, credentials, deployment names, requests, click timing, and key sequences are absent from saved evidence.

## Validation

- Relevant coupler, hotspot, Route Chooser, and decision-trace tests: `29/29` passed.
- Complete game unit suite: `223/223` passed.
- Production build passed with only the existing large-chunk advisory.
- Full title-to-credits E2E passed in `94.9 seconds` with zero runtime errors. It now covers the SDK trace remediation, exact settled viewport geometry, keyboard Route Key, independent error states, blank retry, mastery, privacy, and reload focus.
- Two stale harness assumptions were corrected: the valid narrow AB-01 PNG may be Vite-inlined, and responsive/focus assertions now wait for settled state rather than sampling during layout/effect transitions.

## Remaining manual risk

Human NVDA/equivalent spoken order, physical switch control, Windows forced colors, 200% browser zoom, and live reduced-motion media emulation remain unobserved. Those checks are still required before any accessibility-conformance claim. No bounded product blocker remains in this tranche.

**Status: PASS — final combined interaction gate cleared; manual assistive-technology observations remain.**
