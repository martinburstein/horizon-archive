# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat it as design evidence for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy. Translate it into the game's pixel-art system instead of copying or shipping the smooth concept image directly.

## Horizon Archive durable direction

- Gameplay is browser-based point-and-click in the spirit of 1990s LucasArts adventures.
- The four images in `../Concept Art/` and the `Concept Art Book/` plates are inspiration for mood, palette, scale, composition, landmarks, and interaction intent. They are not literal scene layouts or production-ready game art.
- The shipped game should evoke the turn-of-the-millennium Windows 98/ME/2000 visual era around November 2000: visibly pixel-built, with square logical pixels, crisp one-pixel edges, deliberate dithering, and nearest-neighbor presentation.
- Do not smooth, blur, anti-alias, or directly downscale painterly concept plates into the game. Reinterpret them on a defined low-resolution logical grid, then scale with integer or otherwise square-pixel-safe rules.
- UI, type, icons, focus states, borders, scene art, and Terminal workspaces must belong to the same pixel system. Avoid modern subpixel hairlines, soft shadows, glass effects, and high-resolution vector polish.
- Preserve the landscape-first composition and dark bottom dialogue panel.
- Python shown to the learner must use real syntax.
- Keep lore surface-safe and preserve the central mystery.
