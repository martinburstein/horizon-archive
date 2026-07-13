# Opening Demo Design QA

## Source truth

- Selected scene art: `../Glass Meadow Example.png`
- Combined comparison: `qa/glass-meadow-comparison.png`
- Implementation captures: `qa/opening-chapter-reveal.png`, `qa/glass-meadow-demo.png`, `qa/glass-meadow-320x240.png`, `qa/first-terminal-orientation.png`

## Viewports and states

- 1280x720 browser viewport, canonical 640x480 game frame: title through Chapter I reveal, first playable Meadow, focused first hotspot, and first Terminal orientation.
- 320x240 browser viewport, authored narrow 320x240 game frame: first playable Meadow with the primary hotspot focused.

## Comparison evidence

- Full-view comparison: the implementation uses the selected Glass Meadow artwork itself, preserving its flat horizon, realistic glass density, bright sky, and first-person composition. The playable layer adds only the chapter/status bar, objective card, and hotspot focus treatment.
- Focused-region comparison: the first Terminal crop remains visually identifiable under the focus rectangle; the mapped rectangle follows the central glass vessel without introducing a new painted object.
- Terminal overlay: the VS Code-like orientation stays within the 640x360 world band at 624x343 logical pixels and preserves visible context around its edge.

## Interaction and accessibility checks

- Completed title -> create Slot 01 -> name character -> three temporary prologue beats -> Chapter I reveal -> enter Meadow.
- Confirmed the Meadow artwork does not appear before the Chapter I reveal.
- Confirmed the primary Meadow hotspot receives focus on entry and exposes an action-specific accessible label.
- Confirmed LOOK AT reports the Terminal clue and USE opens the four-step beginner orientation.
- Confirmed the modal focuses its title, disables background hotspots, closes safely, and restores the scene interaction.
- Confirmed the save-replacement warning is programmatically associated with the destructive create action.
- Confirmed 320x240 has no page overflow and key narrow-interface text is 8px logical type (status metadata remains 6px; location and controls are 8px).
- Browser console warnings/errors: none.

## Comparison history

- Earlier build exposed the Meadow art during setup and prologue; corrected so the scene first appears at the Chapter I reveal.
- Earlier hotspot rectangles were inherited from the procedural meadow; replaced with Location Scout measurements against the selected image.
- Earlier recorder punctuation rendered as mojibake; corrected to a valid em dash.
- Earlier Meadow Terminal width escaped the canonical frame at wide browser sizes; constrained to the authored game frame.
- Earlier narrow controls rendered at 4-6px; raised the player-critical controls and dialogue to 8px.

## Remaining non-blocking art note

The selected image is the approved concept-rich scene and is displayed with square-pixel scaling. It is not yet a hand-authored native 640x360 production painting; a later art pass can recreate its composition at native logical resolution without changing this opening flow.

final result: passed
