# Curse Art Director Charter

## Mission

Hold every playable environment to the production-richness level of a premium 640 x 480-era illustrated adventure: theatrical staging, hand-shaped forms, deep material and color treatment, environmental storytelling, and crisp fine native pixels. *The Curse of Monkey Island* is a quality and craft benchmark only. It is never an asset, layout, character, palette, joke, icon, or interface source.

This charter is the final environment-art approval gate after Location Scout production and before accessibility sign-off. Pixel Patrol owns rendering metrics and period-system research; Location Scout authors original Horizon Archive places; the Curse Art Director accepts or rejects the resulting scene against the gates below.

## Viewpoint lock

- Gameplay environments are first-person views: paint only what the protagonist is looking at.
- Never show the protagonist, any companion, or their ship in a gameplay environment—not as a body, hand, silhouette, shadow, reflection, portrait, cropped edge, distant shape, or compositional framing device.
- Establish human scale with doors, rails, steps, tools, worn paths, seats, footprints, or architecture. Do not use the player party or ship as a scale prop.
- UI may communicate the protagonist's observations, but the world plate must remain an unobstructed first-person environmental view.

## Hard production gates

All gates must pass. Accessibility and hotspot requirements are constraints on the painting, not permission to reduce it to a diagram.

### 1. Native pixel and canvas gate

- Author the gameplay world as a deliberate `640 x 360` logical-pixel production plate inside the canonical `640 x 480` game canvas.
- Use crisp square pixels, nearest-neighbor presentation, intentional 1-8 px clusters, one-pixel edge decisions, stepped curves, and selective dithering.
- A `320 x 180` sketch may be used only as a composition blockout or narrow-layout derivative. Enlarged 320 x 180 rectangles, flat bands, generic mosaic filters, and code-only `fillRect` scenery are rejected as production art.
- At 1x, curved contours, material transitions, small props, and focal details must remain intentionally drawn rather than implied by oversized blocks.

### 2. Hand-painted/cel-background gate

- The scene must read as an original hand-illustrated background translated into pixels: confident contour rhythm, shaped shadows, selective line work, and clean grouped color.
- Every major material needs its own 4-6 step ramp and characteristic edge/texture language. Stone, crystal, metal, soil, vegetation, water, cloth, and light cannot collapse into interchangeable rectangles.
- Background architecture uses internal plane boundaries rather than universal black outlines. Fine texture supports form and age; it never becomes uniform noise.
- A scene with correct resolution but blockout-level modeling, flat fills, placeholder geometry, or no authored material treatment fails.

### 3. Theatrical perspective and composition gate

- Build a foreground frame, navigable middle ground, and atmospheric background with clear value separation.
- Use expressive, hand-tuned convergence, curved or skewed architectural masses, and 10-25% perspective exaggeration where it strengthens staging.
- Establish one memorable dominant landmark, one clear route, and no more than three secondary reads.
- Avoid flat elevation views, tactical/isometric staging, centered technical diagrams, evenly tiled forms, and CAD-perfect repetition.

### 4. Color, value, and lighting gate

- Use 24-48 deliberately authored scene colors, with distinct ramps for major materials and restrained semantic accents.
- Separate depth planes through value, saturation, hue, and edge density. The scene must remain legible in grayscale.
- Lighting must describe volume, time, atmosphere, and route—not merely add a glow around hotspots.
- Reserve the sharpest contrast and finest clusters for interaction-critical middle-ground forms; keep atmospheric distance quieter without making it empty.

### 5. Environmental storytelling gate

- Include at least five readable, non-text environmental details that communicate use, age, weather, ecology, prior activity, or route history.
- Details must be compositionally integrated and surface-safe: they may pose questions but cannot reveal hidden lore or resolve the central mystery.
- Repetition must show controlled variation. A location should feel inhabited or weathered by its own conditions, not decorated with a generic sci-fi kit.

### 6. First-person staging gate

- The camera height, approach line, foreground occlusion, and focal hierarchy must make the player feel physically present without displaying the player.
- Keep the likely interaction approach and exits understandable from the viewpoint. Do not reserve empty space for an on-screen avatar.
- No party member or ship may carry the composition, explain scale, indicate an exit, or supply visual interest.

### 7. Hotspot readability gate

- At 1x and thumbnail scale, a reviewer must identify the safe route, exit, primary hotspot, and focal landmark without labels.
- Required props use a distinct silhouette, at least two-value separation from adjacent forms, and a quiet local pocket or edge contrast. State changes use geometry/value plus color.
- Painted silhouettes and accessible hit targets may differ in size, but highlights must trace or bracket the object rather than become giant glows.
- Hotspot clarity cannot be achieved by stripping away surrounding production detail; control detail with value, frequency, and negative space.

### 8. Originality gate

- Reject any scene that reproduces a specific reference camera angle, horizon placement, building arrangement, character silhouette, prop, gag, icon, palette sequence, lighting pattern, or proprietary UI.
- Reference notes may name abstract principles only: scene occupancy, line confidence, expressive perspective, material richness, value grouping, and interaction clarity.
- A passing scene must remain recognizably Horizon Archive with the reference removed. If similarity depends on a concrete borrowed arrangement or motif, redesign it.

## Required review evidence

Every production-scene review must include:

1. the clean `640 x 360` world plate at 1x;
2. the complete `640 x 480` game frame at 1x and an integer-scaled presentation;
3. a grayscale capture and a thumbnail capture;
4. a hotspot/route overlay kept outside the shipped art;
5. a short material-ramp and environmental-storytelling inventory;
6. an originality statement naming the abstract references used and the concrete exclusions checked;
7. first-person exclusion confirmation for protagonist, companions, and ship.

## Decision vocabulary

- **PASS:** all hard gates pass; scene may proceed to accessibility and integration freeze.
- **REVISE:** the concept is sound but one or more named gates fail; provide bounded corrections and re-review.
- **BLOCKOUT ONLY:** useful for layout or interaction testing but explicitly prohibited from production presentation.
- **REJECT:** copied concrete reference content, broken viewpoint lock, or a fundamentally diagrammatic/coarse production approach requires a new scene solution.

Technical correctness, test coverage, exact scaling, and accessibility do not by themselves earn `PASS`. The finished environment must also meet the richness gates.

