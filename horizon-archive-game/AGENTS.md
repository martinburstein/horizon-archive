# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat it as design evidence for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy. Translate it into the game's pixel-art system instead of copying or shipping the smooth concept image directly.

## Horizon Archive durable direction

- Gameplay is browser-based point-and-click in the spirit of 1990s LucasArts adventures.
- The four images in `../Concept Art/` and the `Concept Art Book/` plates are inspiration for mood, palette, scale, composition, landmarks, and interaction intent. They are not literal scene layouts or production-ready game art.
- The shipped game should evoke the turn-of-the-millennium Windows 98/ME/2000 visual era around November 2000: visibly pixel-built, with square logical pixels, crisp one-pixel edges, deliberate dithering, and nearest-neighbor presentation.
- The canonical complete game canvas is `640 × 480` square logical pixels in a period-authentic 4:3 frame. Budget the upper `640 × 360` for the adventure world and the lower `640 × 120` for compact verbs, dialogue, inventory, and status. Production world art is authored at `640 × 360`; a `320 × 180` version is blockout or narrow-derivative evidence only and must not ship enlarged as final scenery.
- Scale the complete `640 × 480` canvas only by whole-number multiples and letterbox when the host viewport does not fit the next integer multiple.
- Use the broad LucasArts adventure-game lineage as aesthetic and interaction inspiration: theatrical readable scenes, strong silhouettes, characterful pixel clusters, clear point-and-click verbs or contextual actions, inventory-driven observation, and an interface that protects as much scene space as practical. Do not reproduce any specific LucasArts scene, character, composition, joke, icon, or proprietary UI.
- Follow the player-friendly adventure philosophy: mistakes should teach or redirect; ordinary experimentation must not create unwinnable states, surprise deaths, or irreversible learning dead ends.
- Do not smooth, blur, anti-alias, or directly downscale painterly concept plates into the game. Reinterpret them on a defined low-resolution logical grid, then scale with integer or otherwise square-pixel-safe rules.
- UI, type, icons, focus states, borders, scene art, and Terminal workspaces must belong to the same pixel system. Avoid modern subpixel hairlines, soft shadows, glass effects, and high-resolution vector polish.
- Preserve the landscape-first composition and dark bottom dialogue panel.
- Gameplay world plates use a first-person viewpoint: paint only what the protagonist is looking at. Never show the protagonist, companions, or their ship in frame, including hands, bodies, silhouettes, shadows, reflections, portraits, or cropped edges.
- The durable environment-richness approval gate is `../Curse Art Director/CHARTER.md`. Coarse rectangle/blockout scenery cannot pass merely because scaling, interaction, tests, or accessibility pass.
- Builder beauty must show collective authorship across generations: visible construction phases, functional or civic purpose, maintenance as ornament, accumulated revision, engineered ecology, and movement-level design schools. Reject enchanted-garden fantasy, arbitrary crystals, decorative glow, and beauty without visible purpose.
- Python shown to the learner must use real syntax.
- Keep lore surface-safe and preserve the central mystery.
