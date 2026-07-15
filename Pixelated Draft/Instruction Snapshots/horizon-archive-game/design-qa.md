# Opening Demo Design QA

## Source truth

- Selected scene art: `../Glass Meadow Example.png`
- Combined comparisons: `qa/glass-meadow-comparison.png`, `qa/glass-meadow-crt-comparison.png`
- CRT implementation captures: `qa/glass-meadow-crt-final-1280x720.png`, `qa/glass-meadow-crt-320x240.png`
- Flow implementation captures: `qa/opening-chapter-reveal.png`, `qa/glass-meadow-demo.png`, `qa/glass-meadow-320x240.png`, `qa/first-terminal-orientation.png`

## Viewports and states

- 1280x720 browser viewport, canonical 640x480 game frame: title through Chapter I reveal, first playable Meadow, focused first hotspot, and first Terminal orientation.
- 320x240 browser viewport, authored narrow 320x240 game frame: first playable Meadow with the primary hotspot focused.
- 1280x720 browser viewport, fluid `1.217x` CRT stage: the complete bezel fits inside the viewport at `896x695` while the playable 640x480 frame renders at `779x584` with no page overflow.

## Comparison evidence

- Full-view comparison: the implementation uses the selected Glass Meadow artwork itself, preserving its flat horizon, realistic glass density, bright sky, and first-person composition. The playable layer adds only the chapter/status bar, objective card, and hotspot focus treatment.
- Focused-region comparison: the first Terminal crop remains visually identifiable under the focus rectangle; the mapped rectangle follows the central glass vessel without introducing a new painted object.
- Terminal overlay: the VS Code-like orientation stays within the 640x360 world band at 624x343 logical pixels and preserves visible context around its edge.
- CRT comparison: the selected image remains the dominant visual and preserves its horizon, crop, glass density, and realistic highlights. The original charcoal raster bezel adds a restrained molded surround, four corner screws, amber lamps, and two knobs without covering the playable frame.
- Image-quality check: the selected Glass Meadow raster now uses smooth browser sampling inside the square 640x480 logical frame; other native production pixel assets retain nearest-neighbor rendering.

## Interaction and accessibility checks

- Completed title -> create Slot 01 -> name character -> three temporary prologue beats -> Chapter I reveal -> enter Meadow.
- Confirmed the Meadow artwork does not appear before the Chapter I reveal.
- Confirmed the primary Meadow hotspot receives focus on entry and exposes an action-specific accessible label.
- Confirmed LOOK AT reports the Terminal clue and USE opens the four-step beginner orientation.
- Confirmed the modal focuses its title, disables background hotspots, closes safely, and restores the scene interaction.
- Confirmed the save-replacement warning is programmatically associated with the destructive create action.
- Confirmed 320x240 has no page overflow and key narrow-interface text is 8px logical type (status metadata remains 6px; location and controls are 8px).
- Confirmed the open Terminal stays inside the world band at native 640x480 (`x=8, y=8, 624x343`) and native 320x240 (`x=4, y=4, 312x171`), with zero page overflow and 44px answer targets.
- Browser console warnings/errors: none.
- Confirmed the CRT stage is uniformly scaled and centered at 1280x720, the full document has no overflow, and the default viewport override was cleared after responsive QA.
- Confirmed native 320x240 retains the complete 320x240 logical gameplay frame at `1x` with exact `0,0` to `320,240` containment. The bezel is suppressed below the canonical presentation threshold so decoration never clips or shrinks playable content.
- Confirmed all five adventure verb/inventory controls are at least `24px` in both dimensions: `29.2px` high at 1280x720 and exactly `24px` high at native 320x240. Narrow controls use one horizontal command row above the dialogue row.
- Accessibility Sentinel final re-review: PASS. Curse Art Director final re-review: PASS against the approved dominant-Meadow, restrained-period-CRT, original first-person direction.

## Comparison history

- Earlier build exposed the Meadow art during setup and prologue; corrected so the scene first appears at the Chapter I reveal.
- Earlier hotspot rectangles were inherited from the procedural meadow; replaced with Location Scout measurements against the selected image.
- Earlier recorder punctuation rendered as mojibake; corrected to a valid em dash.
- Earlier Meadow Terminal width escaped the canonical frame at wide browser sizes; constrained to the authored game frame.
- Earlier narrow controls rendered at 4-6px; raised the player-critical controls and dialogue to 8px.
- A later native 640x480 pass found the general mobile grid rule overriding canonical rows and pulling the Terminal above the frame; a higher-specificity canonical row contract now keeps both 640x480 and 320x240 layouts bounded.
- The first CRT pass compressed the generated bezel so far that only its blue top highlight read against black. The final pass increased the canonical bezel tranche to 38/48/54/48 logical pixels, making the screws, molded edge, lamps, and knobs visible while the Meadow still occupies almost the full display height.
- A compact-layout pass found canonical content shrinking below 1x at 640x480 and one clipped row at 320x240. Compact displays now select the authored narrow layout, suppress the decorative bezel, keep content at or above 1x, and expose 24px minimum controls.

## Remaining non-blocking art note

The selected image is the approved concept-rich scene and is displayed inside a square-pixel logical frame with smooth raster sampling. It is not yet a hand-authored native 640x360 production painting; a later art pass can recreate its composition at native logical resolution without changing this opening flow.

final result: passed
