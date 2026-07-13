# GM-01 — Glass Meadow Petal and Route Marker

## Identity

- **Scene ID:** GM-01
- **Player-facing survey name:** Glass Meadow
- **World / region:** World A / Twilight Highlands
- **Production status:** Playable interaction blockout; replacement target is a `640 x 360` first-person Builder garden/masterwork
- **Image:** [glass-meadow-petal-route-marker-v1.png](../images/glass-meadow-petal-route-marker-v1.png)
- **Original environment reference:** [Alien Meadow.png](../../Concept%20Art/Alien%20Meadow.png)
- **Arrival continuity:** [GM-00 Landing Shelf](GM-00-glass-meadow-landing-shelf.md)
- **Purpose:** Reframe Glass Meadow as a Builder garden/masterwork stewarded by generations and design movements, while keeping the First Signal Petal Terminal, separate route-marker exercise, landmark, and route physically honest from a first-person viewpoint.

## Navigation and interaction zones

| Zone | Approximate source area | Read | Intended interaction |
|---|---|---|---|
| Former survey-craft area | x 0–23%, y 40–63% | must be repainted as original meadow foreground, route evidence, or environmental scale cues | no party ship in gameplay frame |
| Petal / First Signal Terminal | essential target x 32–57%, y 5–52%; base to y 55% | monumental many-petaled crown around dark oval core | primary First Signal interaction |
| Three-fin route marker | x 59–65%, y 49–69% | exactly three fins, dark core, grounded compact base | secondary prerequisite-gated route exercise |
| Walkable route | x 18–69%, y 49–100% | layered S-path from left foreground, between nodes, toward right distance | traversable plane and onward cue |

## Builder garden/masterwork doctrine

Glass Meadow is not a naturally enchanted crystal garden. It is a civic-scale cultivated system whose beauty records centuries of collective stewardship. The exact Builder purpose remains surface-safe and unresolved, but cultivation, water, access, signal, and maintenance must visibly depend on one another.

- **Collective work:** the meadow, Petal, route, water control, and smaller growths form one maintained public landscape rather than unrelated scenic props.
- **Longitudinal phases:** show an old terraced substrate and primary channels; a later Petal-era graft and rerouted approach; and a newer layer of route repairs, replaced edging, pruning supports, and reopened drains.
- **Functional sublime:** the Petal's crown, basin, channels, and planted bands visibly exchange light, water, support, or signal. Its monumentality comes from coordinating the whole garden.
- **Civic/ritual use:** broaden selected route edges into gathering or care platforms, repeat approach intervals, and preserve deliberate sight lines that imply communal stewardship or procession without defining a hidden ceremony.
- **Maintenance ornament:** use graft collars, inspection seams, drainage combs, replacement plates, alignment notches, scaffold sockets, and hand-varied pruning frames as the scene's decorative rhythm.
- **Accumulated revisions:** retain sealed channel stubs, mismatched repair stone, an abandoned earlier route alignment, and negotiated joins between eras.
- **Engineered ecology:** every crystalline or living cluster follows water, substrate, shade, support, or signal infrastructure. No random crystal scatter.
- **Visual school:** classify the meadow as the Twilight Garden School—layered cultivated terraces, folded light-management surfaces, low civic routes, and repairs that remain proudly visible. This is a production label, not hidden lore or player-facing exposition.

## Responsive crop and hotspot plan

- **Desktop Petal initial bounds:** `left: 31%`, `top: 5%`, `width: 27%`, `height: 54%`.
- **Desktop route-marker initial bounds:** `left: 58.5%`, `top: 47%`, `width: 8%`, `height: 23%`.
- At `1600 x 900`, the 74vh top-crop retains both complete interaction silhouettes above source y 70%; the marker target is roughly 128 by 153 CSS pixels.
- At `320–375px` width with a 55vh scene, the historical exploration crop shows roughly source x 31.8–68.2%. The replacement must retain the Petal core, central crown, base, and complete route marker while excluding the ship from the source painting itself, not merely cropping it away.
- **Narrow Petal initial bounds:** `left: 0%`, `top: 5%`, `width: 72%`, `height: 55%`.
- **Narrow route-marker initial bounds:** `left: 74%`, `top: 47%`, `width: 24%`, `height: 24%`.
- Targets remain non-overlapping and each exceeds 44 by 44 CSS pixels. Confirm final percentages from browser captures rather than copying them blindly.

## State cues

| State | Petal Terminal | Route marker |
|---|---|---|
| Current selected master | dark core; soft pale green-white edge shimmer; broad low-contrast readiness pool | dark core and groove; cool rim only; tiny separate residual reflection |
| First Signal completed | core may gain restrained steady light; edge shimmer narrows | three fin edges brighten, core gains restrained violet point, one shallow route groove illuminates |
| Route exercise completed | retain steady acknowledged core without bloom | route groove becomes a steady directional line; no projected arrows or text |

Core value, groove value, and pool size provide redundant state cues so status does not depend on green/violet color perception. The selected raster depicts the first row only; awake treatment should use a verified state variant or restrained runtime overlay.

## Visual specification and continuity

- **Palette:** indigo, slate blue, basalt charcoal, lavender, pale crystal white, restrained celadon readiness shimmer, peach-gold horizon, and tiny amber route-wear accents.
- **Lighting:** blue-hour ambient and warm left horizon; restrained Petal and marker reflections must be visibly explained by built conduits, wet channels, or reflective material and must not read as decorative magic.
- **Scale:** environmental steps, worn approach path, monumental Petal crown, waist-high marker, rail-like route edging, and small flowers.
- **Family resemblance:** both nodes use engineered translucent facets folded around dark cores, with collars, fastenings, service seams, and substrate connections explaining their construction. Petal is a monumental garden coordinator; the exactly three-fin marker is grounded, compact, repairable civic infrastructure.
- **Must preserve:** two moons, angular mountain family, cultivated crystal/mineral flora tied to visible garden systems, open S-path, serious painterly quiet, and clear first-person approach.
- **Must exclude:** protagonist, companions, and ship in any visible, reflected, shadowed, portrait, distant, or cropped form.
- **Must avoid:** generic enchanted garden, arbitrary crystal scatter, decorative glow, beauty without visible purpose, single-era perfection, generic monolith marker, merged hit areas, joined light pools, projected UI, text, combat, or any explanation of the larger system.

## Production record

- **Current blockout:** code-assembled `320 × 180` canvas in `horizon-archive-game/src/pixelMeadow.js`; the `1672 × 941` exploration plate is not imported by the game. This implementation is `BLOCKOUT ONLY` under the Curse Art Director charter and is not the production pixel master.
- **Required production replacement:** original `640 x 360` first-person Builder garden/masterwork with fine native pixels, complete material ramps, theatrical depth, at least three visible stewardship phases, purposeful engineered ecology, maintenance ornament, and no party or ship.
- **Presentation:** whole-number nearest-neighbor scaling with centered letterboxing; `3×` at 1600×900 gameplay and `1×` at 320×900.
- **Implemented logical targets:** Petal `x 36–59%, y 22–83%`; Route Marker `x 75–89%, y 48–84%`.
- **State implementation:** locked cross/dark groove, awake core/ring/short groove, and completed stepped acknowledgement/directional groove alter silhouette geometry as well as value.

- **Final prompt set:** [Prompt HA-LS-004](../prompt-provenance-log.md#ha-ls-004)
- **Generator / mode:** OpenAI built-in image generation, reference-guided generation plus one targeted anatomy/crop edit
- **Native dimensions:** `1672 x 941` PNG
- **Selection notes:** first candidate established the composition but overbuilt and cropped the small marker; selected edit reduced it to exactly three fins and moved its full silhouette above the desktop crop line.
- **Historical exploration validation:** landmark, two distinct nodes, non-touching light pools, open path, current-state cues, clean-master constraints, and spoiler safety passed. The former ship inclusion is now superseded and must be removed from production art.
