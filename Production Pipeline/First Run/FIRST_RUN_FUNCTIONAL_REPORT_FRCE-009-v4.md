# FIRST RUN FUNCTIONAL REPORT / FRCE-009-v4

## Disposition

`PRODUCTION FUNCTIONAL / DERIVED RESPONSIVE GATE`

## Implementation

- Added `responsiveImageProjection.js`, a pure fail-closed cover/contain
  geometry module for canonical-world sizing, object-position parsing, visible
  source bounds, mapped rectangles, retained area, and clamped 44px targets.
- Replaced Host 09 caller-attested layout lawfulness with derived evidence from
  the registered source rectangles and the six canonical viewports.
- Removed source-center coordinate preferences from Host 09 functional
  lawfulness; retained physical containment/nesting/non-overlap requirements.
- Added an exact 44px Host 09 target floor and centered expansion math.
- Added pure projection, hostile-input, Host 09 anti-forgery, Host 07/08
  corroboration, and isolated Edge DOM suites.

## Initial gates

- Focused/adjacent: `37/37 PASS`.
- Isolated Edge browser: `6/6 layouts PASS`, forced colors `1`, reduced motion
  `1`, no horizontal escape, target >=44px, visible focus.
- Browser computed CSS included canonical `50% 50%`, ruins `50% 20%`, and
  narrow `70% 0%`; equal-aspect projection retained the complete source.

## Independent release gates

- Cold full suite: `1008/1008 PASS` in `22.645s` wall time.
- Curriculum validators: `40/40 PASS` using each validator's `--self-test`.
- Production build: `224 modules PASS` in `7.944s` wall time.
- PBA: JavaScript `1,711,071` bytes; CSS `119,757`; source maps `0`; accepted
  media unchanged `19 / 70,136,520`.
- Served identity: root, deep fallback, JS, and CSS all HTTP `200`; owned port
  `4199` cleared.

## Boundaries

Host 09 remains inert and null-first. No source, provenance, copy, alt, save,
route, lesson, media, or product state was populated. No image/API/protected QA
operation occurred.

## Handoff

Quartermaster reconciles only historical evidence classifications and adjacent
accepted-media projection facts, then Image reviews the CSS/DOM presentation.
