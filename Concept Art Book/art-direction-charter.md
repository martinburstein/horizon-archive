# Art-Direction Charter

## North star

The final game should feel like a lost turn-of-the-millennium point-and-click adventure running on a Windows 98/ME/2000-era PC: theatrical enough to remember, legible enough to navigate, and visibly constructed from square logical pixels.

## Inspiration references

The four existing plates establish mood, palette, scale, landmark language, and interaction intent. They are inspiration, not literal layouts or production-ready game art. Each was visually inspected at its native `1672 x 941` landscape size.

The [LucasArts adventure-game lineage](https://en.wikipedia.org/wiki/LucasArts_adventure_games) is a broad production reference for readable point-and-click staging, scene-first interfaces, verb/context interaction, deliberate dithering and pixel craft, expressive silhouettes, and player-friendly experimentation without routine dead ends. It is not a license to reproduce any particular game's characters, scenes, jokes, compositions, icons, or interface.

| Reference | What it establishes |
|---|---|
| [Alien Meadow](../Concept%20Art/Alien%20Meadow.png) | Violet/peach sky, faceted crystalline ecology, monumental centered landmark, readable foreground approach. |
| [Alien Ruins](../Concept%20Art/Alien%20Ruins.png) | Indirect cosmic scale, water reflections, dark masonry silhouettes, ceremonial symmetry. |
| [Fallen Automoton](../Concept%20Art/Fallen%20Automoton.png) | Intimate corridor scale, oblique path, readable character-object silhouette, violet practical light. |
| [Underground City](../Concept%20Art/Underground%20City.png) | Vast layered depth, warm/cool contrast, small human scale cues, infrastructure over voids. |

The historical references contain a bottom dialogue panel. New **exploration plates** should contain only the 16:9 world view; UI is composed separately by the game. This keeps concept masters reusable while preserving the landscape-first game presentation. A selected exploration plate must be re-authored into a production pixel plate instead of being copied or smoothly downscaled.

## Production pixel contract

- The canonical final game canvas is `640 × 480` square logical pixels (4:3), matching the upper end of the classic LucasArts pixel-adventure era selected by Martin.
- Default layout budget: `640 × 360` scene viewport above a compact `640 × 120` command/dialogue/inventory band. A `320 × 180` authored scene module may be presented exactly `2×` inside the scene viewport.
- Present the complete canvas only at integer multiples (`640 × 480`, `1280 × 960`, `1920 × 1440`, and so on) and letterbox when the host viewport falls between supported sizes.
- Square logical pixels are mandatory. No rectangular-pixel simulation, subpixel detail, or resolution-independent smoothing.
- Build final scene art, UI frames, icons, focus states, and Terminal workspaces on an explicit low-resolution logical grid.
- Present production pixels with nearest-neighbor scaling and integer scaling wherever the viewport permits. When an exact integer multiple is unavailable, preserve square pixel blocks through letterboxing or a purpose-built alternate logical-size asset rather than blur or uneven filtering.
- Use deliberate pixel clusters, stepped diagonals, limited-value ramps, selective dithering, and crisp one-logical-pixel edges. Avoid painterly microtexture that collapses into noise.
- Do not apply a generic mosaic or pixelation filter to a finished concept image and call it production art. Reinterpret silhouettes, planes, lighting, and landmarks intentionally at the logical resolution.
- Typography and editor chrome must share the same pixel density and edge treatment as the world. Avoid modern vector icons, anti-aliased hairlines, soft shadows, glassmorphism, and high-DPI gradients.
- High-resolution generated images remain exploration artifacts. Every scene sheet must distinguish `exploration plate` from `production pixel plate` and record the intended logical resolution and scaling behavior before implementation.

## Visual grammar

- **Composition:** one memorable landmark or silhouette, one dominant route, and two or three secondary interaction reads.
- **Camera:** side-on three-quarter adventure camera with slightly exaggerated perspective; never tactical isometric.
- **Planes:** foreground framing, uncluttered walkable middle ground, atmospheric background.
- **Hotspots:** readable through silhouette, value contrast, and light—not outlines or labels.
- **Texture:** intentional pixel clusters, restrained dithering, angular low-poly massing, readable weather and age at the logical resolution.
- **Palette:** indigo, slate, charcoal, muted violet; use peach, amber, crystal white, or volcanic orange as scarce focal accents.
- **Atmosphere:** fog, pollen, steam, heat haze, or dust should separate depth rather than conceal navigation.
- **Scale:** pair monumental forms with a ramp, railing, doorway, beacon, figure, or known-size craft.
- **Mood:** serious, beautiful, quiet, melancholic, curious. Never grimdark, combat-led, corporate, or glossy.
- **Interface occupancy:** keep the world dominant. The dark dialogue/command area should be compact, stable, and information-dense rather than a modern dashboard covering the scene.
- **Interaction language:** readable verbs and contextual cursor/focus states should feel immediate and playful, with inventory and observation supporting exploration rather than busywork.
- **Failure philosophy:** visual and interaction design must support recovery. A wrong action may produce characterful feedback, but it must not strand the player or conceal the next useful affordance.

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

- Exploration aspect ratio: 16:9.
- Current exploration continuity resolution: `1672 x 941` PNG; these files are not production game art.
- Production deliverables target the canonical `640 × 480` complete canvas and require a separately defined scene/UI logical master plus supported integer-scale presentation sizes.
- Clean world plate only; no baked UI.
- Lower-center walkable space should survive the game's dialogue-panel crop and responsive scaling.
- Every selected plate requires a scene sheet and provenance entry.
- In any open-interface `640×480` framing, logical rows `461–479` are reserved for the persistent help footer. Keep the full 19-row zone flat and low-detail: one top seam, one fill, no dither, ornaments, state lights, route geometry, or baked text.
