# Opening Glass Meadow art review — 2026-07-13

**Verdict: REVISE**

## Outcome

The first 45 seconds are visually usable and substantially richer than the former blockout. The selected Meadow establishes a memorable first-person field with a ruler-straight horizon, convincing transparent glass, and an interlocking alien growth-mat floor. No protagonist or ship appears. The current imagery is original Horizon Archive material; the Curse-era reference is being used for richness, staging, and readability rather than copied characters, props, interface assets, or composition.

## Gates

- **Reveal timing — pass:** title, save, name, and prologue now remain solid-dark surfaces. The Meadow first appears at the [Chapter I reveal](../../horizon-archive-game/src/App.jsx#L1829), then becomes the playable [scene plate](../../horizon-archive-game/src/App.jsx#L1865). This preserves the first reveal.
- **Richness and viewpoint — pass for demo:** glass thickness, refraction, highlights, dense crop variation, flat infinity, and floor circuitry create a strong visual premise without protagonist/ship framing.
- **Interface hierarchy — pass with one guardrail:** Chapter copy leads into landscape, scene status and bottom adventure controls remain subordinate, and the Terminal dialog becomes the clear task layer. Keep the opening objective compact and outside both mapped Terminal silhouettes.
- **Production treatment — revise:** `Glass Meadow Example.png` is a smooth `1672 × 941` composition target loaded directly into the scene. CSS `image-rendering` cannot turn it into authored native pixels. Final art still requires an original `640 × 360` square-logical-pixel translation with deliberate clusters, stepped contours, grouped value ramps, and selective dithering.
- **First-read Terminal findability — revise:** the mapped targets currently sit over glass forms that resemble many neighboring crop tubes. Hover/focus labels make the demo operable, but the final plate must give each Terminal a distinct crop-integrated silhouette and state cue before the label appears.

## Coordinator handoff

1. Keep the current solid-dark title, save, name, and prologue surfaces; first show Meadow art only at **Chapter I — Glass Meadow**.
2. Re-author the selected raster as an original `640 × 360` production plate while preserving the flat horizon, realistic glass, flush growth mats, first-person/no-ship view, and protected-source exclusions.
3. Build the First Terminal into `x294 y191 w120 h136` and the Route Terminal into `x493 y192 w138 h167`; retain the current `MEADOW_PIXEL_HOTSPOTS.primary` and `.routeMarker` mappings instead of inferring new bounds from the smooth raster.
4. At native 1x, verify both targets read without labels, remain distinct in grayscale, do not collide with the opening objective, and align exactly under mouse, keyboard focus, and touch cues. Preserve the Terminal dialog's current dominant hierarchy.

The demo may remain playable with the selected raster while this translation is produced, but it is not final production art.
