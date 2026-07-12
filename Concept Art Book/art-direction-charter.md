# Art-Direction Charter

## North star

Every plate should feel like a lost, hand-painted 1990s point-and-click adventure background: theatrical enough to remember, legible enough to navigate, and restrained enough that the environment carries the mystery.

## Source-of-truth references

The four existing plates are the visual authority. Each was visually inspected at its native `1672 x 941` landscape size.

| Reference | What it establishes |
|---|---|
| [Alien Meadow](../Concept%20Art/Alien%20Meadow.png) | Violet/peach sky, faceted crystalline ecology, monumental centered landmark, readable foreground approach. |
| [Alien Ruins](../Concept%20Art/Alien%20Ruins.png) | Indirect cosmic scale, water reflections, dark masonry silhouettes, ceremonial symmetry. |
| [Fallen Automoton](../Concept%20Art/Fallen%20Automoton.png) | Intimate corridor scale, oblique path, readable character-object silhouette, violet practical light. |
| [Underground City](../Concept%20Art/Underground%20City.png) | Vast layered depth, warm/cool contrast, small human scale cues, infrastructure over voids. |

The historical references contain a bottom dialogue panel. New **environment plates** should contain only the 16:9 world view; UI is composed separately by the game. This keeps clean masters reusable while preserving the landscape-first game presentation.

## Visual grammar

- **Composition:** one memorable landmark or silhouette, one dominant route, and two or three secondary interaction reads.
- **Camera:** side-on three-quarter adventure camera with slightly exaggerated perspective; never tactical isometric.
- **Planes:** foreground framing, uncluttered walkable middle ground, atmospheric background.
- **Hotspots:** readable through silhouette, value contrast, and light—not outlines or labels.
- **Texture:** hand-painted facets, restrained dithering, angular low-poly massing, visible weather and age.
- **Palette:** indigo, slate, charcoal, muted violet; use peach, amber, crystal white, or volcanic orange as scarce focal accents.
- **Atmosphere:** fog, pollen, steam, heat haze, or dust should separate depth rather than conceal navigation.
- **Scale:** pair monumental forms with a ramp, railing, doorway, beacon, figure, or known-size craft.
- **Mood:** serious, beautiful, quiet, melancholic, curious. Never grimdark, combat-led, corporate, or glossy.

## Point-and-click readability gate

A plate passes only when a reviewer can identify, without annotation:

1. where the player enters;
2. where the player can leave;
3. the safe walkable plane;
4. the primary interaction silhouette;
5. the intended visual focal point.

At thumbnail size, the route and primary hotspot must still read. No crucial hotspot may depend only on hue.

## Continuity rules

- Builder sites feel patiently made and carefully integrated with their environment, even in abandonment.
- Human equipment is compact, practical, weathered, and visibly recent beside ancient spaces.
- Crystalline flora repeats as a subtle regional motif, not as an identical landmark in every scene.
- Local interfaces are varied exposed surfaces; do not establish a single definitive form for the Machine.
- Environmental evidence may deepen ambiguity but may not resolve disappearance, consciousness, continuity, or purpose.
- No text, UI, watermark, logo, combat staging, or generic neon sci-fi in clean plates.

## Terminal family grammar

- A Terminal is a small physical node emerging from or rooted into the ground; it is not a conventional monitor, laptop, kiosk, or floating icon.
- The family resemblance is a faceted translucent crown folded around a small central core. Crown scale, fin count, material weathering, and base construction adapt to each region.
- One localized light pool or reflection may isolate a Terminal, but glow must not replace silhouette readability.
- The Terminal and the location's monumental landmark must remain separate visual roles: the node is the interaction target; the landmark carries environmental scale.
- Leave clean negative space around the crown and dry or visually stable footing around the base so the player can infer approach.
- Multimodal Evidence Terminals use one blank inspection surface and exactly three restrained, non-text channel indicators. Indicator color and shape may distinguish channels, but they must not become readable writing, familiar app icons, or a projected UI.
- When a scene contains a narrative object and a Terminal, give them separate silhouettes, light pools, and hit areas. The narrative object remains compositionally dominant; the Terminal remains operationally discoverable.
- A dormant-but-linkable node keeps its core dark but may hold a soft internal edge shimmer and broad low-contrast ground light. A prerequisite-locked node keeps its core and status groove dark; only ambient rim and a tiny residual ground reflection preserve discoverability. An awake node lights its core and one route/status groove. State cues must not depend on color alone: core value, groove value, and light-pool size all change together.

## Delivery specification

- Master aspect ratio: 16:9.
- Current continuity resolution: `1672 x 941` PNG.
- Clean world plate only; no baked UI.
- Lower-center walkable space should survive the game's dialogue-panel crop and responsive scaling.
- Every selected plate requires a scene sheet and provenance entry.
