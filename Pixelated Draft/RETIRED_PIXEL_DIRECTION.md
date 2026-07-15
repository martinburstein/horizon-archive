# Retired Pixel Direction

This document consolidates the complete pixel-specific direction Martin gave before replacing it with photorealism on 2026-07-15. Everything below is archived and must not be treated as a current requirement.

## Retired aesthetic target

- Evoke the look of turn-of-the-millennium Windows games around November 2000.
- Use the broad visual lineage of classic LucasArts adventure games and *The Curse of Monkey Island* as an art-direction reference.
- Match the richness of late-1990s illustrated adventures while rendering the game as intentional pixel art rather than smooth digital painting.
- Use square logical pixels, stepped diagonals, deliberate clusters, restrained dithering, limited value ramps, hard one-pixel edges, and period-authentic sprite/UI density.
- Treat high-resolution concept images as inspiration only; do not ship direct smooth reductions or generic pixelation filters.
- Construct production art directly on a logical grid and inspect it pixel by pixel.
- Keep backgrounds, sprites, interface, type, icons, focus states, effects, and Terminal chrome in one coherent pixel system.

## Retired resolution and scaling contract

- Canonical full canvas: `640 x 480` square logical pixels.
- Adventure world: upper `640 x 360`.
- Interface: lower `640 x 120`.
- Narrow evidence: `320 x 240`, with a `320 x 180` world derivative.
- Scale only with whole-number multiples when possible and letterbox unused host space.
- Use nearest-neighbor presentation and disable interpolation, smoothing, blur, anti-aliasing, subpixel hairlines, soft modern shadows, glass effects, and high-resolution vector polish.
- Do not enlarge a `320 x 180` derivative as final production scenery.

## Retired production and QA rules

- A generated image that merely has a pixel-art texture or vibe is not native pixel art.
- Mechanical downsampling does not become pixel authorship.
- Final acceptance required intentional pixel placement, readable clusters, bounded palettes, exact native/narrow assets, and visual review at logical resolution.
- Pixel density had to remain coherent across background, sprite, effects, UI, and typography.
- Production reviews tracked crop, integer scaling, smoothing, interpolation, sprite invariants, and exact logical target geometry.
- Pixel Patrol and Curse Art Director served as specialist gates for this direction.

## Retired Terminal sprite rules

- The Terminal body had to remain identical across six animation frames.
- Only the screen or explicitly bounded membrane region could animate.
- The animation needed six distinct screen states and a quiet persistent hum.
- The tongue, body silhouette, underground connections, and side routes were protected geometry unless Martin explicitly changed them.

## What remains active

The first-person point-and-click gameplay philosophy remains active: exploratory scenes, recoverable mistakes, strong interaction readability, inventory/observation logic, compact narrative UI, and no protagonist or ship visible in the world plate. Only the retro pixel rendering strategy is retired.
