# Opening Glass Meadow art review — 2026-07-13

**Verdict: REVISE**

## Gate review

The demo is visually usable and rich. `Glass Meadow Example.png` passes the first-person, no-ship, flat-horizon, realistic-glass, growth-mat, and originality gates. The clear extruded forms, repeated apertures, and dark engineered substrate communicate a cultivated silica landscape without falling back on a generic crystal field.

The smooth selected `1672 × 941` raster is the composition target, not native `640 × 360` square-pixel production art. Production translation still needs to preserve its material clarity, silhouette hierarchy, and broad horizon after the canonical crop/resample.

## Reveal correction

The opening flow spends the Chapter I reveal early: the same meadow art is already visible on the [title screen](../../horizon-archive-game/src/App.jsx#L1713), [save-file screen](../../horizon-archive-game/src/App.jsx#L1734), and [character-name screen](../../horizon-archive-game/src/App.jsx#L1759) before it is formally introduced by the [Chapter I reveal](../../horizon-archive-game/src/App.jsx#L1811).

Use solid dark title, save, name, and prologue surfaces. The first art reveal must occur at **Chapter I — Glass Meadow**.

## Interaction handoff

Hotspots must use the Location Scout rectangles in the canonical `640 × 360` scene coordinate space:

- First Terminal: `x294 y191 w120 h136`
- Route: `x493 y192 w138 h167`

Do not infer new hotspot bounds from the smooth source raster.

## Status

**REVISE** — scene direction passes; reveal timing, production-format translation, and Location Scout hotspot integration remain required.
