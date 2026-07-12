# Design QA — The Patient Signal

- Source visual truth path: `../Concept Art/Alien Meadow.png` (supported by the other three images in `../Concept Art/`)
- Implementation screenshot path: `qa-gameplay.png`
- Combined comparison evidence: `qa-comparison.png`
- Viewport: 1600 × 900 desktop
- State: Chapter I, Glass Meadow, clean new expedition
- Browser-rendered evidence: captured from the running Vite prototype in the Codex in-app browser

## Full-view comparison

The source and implementation use the same supplied meadow painting and preserve its landscape-first composition, violet twilight palette, centered crystal structure, low-poly texture, and dark lower dialogue region. The implementation intentionally replaces the blank painted textbox with a functional three-column LucasArts-style command panel.

The first comparison exposed a duplicated textbox because the supplied raster already included a blank panel. The image crop was changed to `object-position: center top`, removing the painted panel from gameplay while leaving the artwork itself unmodified. The post-fix screenshot is `qa-gameplay.png` and the side-by-side evidence is `qa-comparison.png`.

## Required fidelity surfaces

- Fonts and typography: restrained serif narrative type and monospaced technical labels match the archaeological/terminal tone; hierarchy remains legible without competing with the artwork.
- Spacing and layout rhythm: approximately 74% scene and 26% controls, matching the source's intended landscape/textbox balance. Verbs, dialogue, and inventory remain visually separate.
- Colors and visual tokens: near-black violet panels, aged ivory text, and muted lavender accents derive from the supplied art.
- Image quality and asset fidelity: the meadow, corridor, and city use supplied Concept Art PNGs; the ruins use the selected clean AB-01 production plate from the Concept Art Book. No inline SVG, CSS drawing, or generic placeholder is used.
- Copy and content: surface-lore-safe mystery language, short verb labels, real Python syntax, and beginner-readable instructions.

## Interaction and accessibility checks

- Title screen, new game, verb selection, hotspots, inventory, hint toggle, incorrect-answer retry, correct-answer progression, local save, ending gate, and credits were exercised.
- All interactive elements are native buttons or labeled inputs and are keyboard focusable.
- Browser console errors checked: none.
- Reduced-motion preference is respected.
- The grounded ruins Terminal target is source-mapped through `object-fit: cover`, exceeds 44×44 CSS pixels, and supports pointer and Enter-key activation at 1600×900 and 320×900. Evidence: `../playtest/drowned-archive-terminal-desktop-qa.png` and `../playtest/drowned-archive-terminal-narrow-qa.png`.

## Findings

- No remaining P0, P1, or P2 fidelity issues after the duplicated-panel crop fix.

## Focused region comparison

The command panel was inspected in the full-resolution gameplay screenshot. Its typography, controls, and three-column grouping are readable at the target viewport; a separate crop was unnecessary after the full-view check clearly exposed the relevant detail.

## Comparison history

1. P1 — duplicate lower dialogue panel visible because the source raster's blank frame remained in the scene crop.
2. Fix — anchored scene imagery to the top and used only the live command panel below it.
3. Post-fix evidence — `qa-gameplay.png` and `qa-comparison.png`; duplication is gone and scene/control proportions match the intended reference anatomy.

final result: passed
