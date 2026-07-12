# Curse-Era Aesthetic Bible

## North star

Horizon Archive should look authored *for* a 640 x 480 Windows adventure, not like a smooth painting viewed through a pixel filter. Its personality comes from theatrical composition, elastic but readable silhouettes, confident color grouping, and interface actions that briefly appear where the player is looking.

## What the evidence says

- **Observed fact:** Curse is generated at a 640 x 480 client resolution according to ScummVM technical documentation.
- **Observed fact:** its interaction system exposes a compact three-family action wheel; inventory is modal and off the permanent scene surface.
- **Design inference:** locations favor a few large, curved or skewed masses over evenly distributed texture. Walkable ground is readable before decoration.
- **Design inference:** foreground, middle ground, and background separate primarily through value and saturation, with sparse dithering or small texture clusters as support.
- **Design inference:** characters are sized for facial/gesture readability and can occupy a substantial fraction of screen height in conversation staging.
- **Horizon adaptation:** retain a persistent dark lower dialogue/status band. The world therefore occupies 640 x 360 rather than the entire reference frame.

## Production grammar

### Composition and perspective

- Establish one dominant landmark, one traversable middle-ground route, and at most three secondary reads.
- Use side-on three-quarter perspective with hand-tuned convergence. Parallel lines may bend or disagree slightly when that improves staging.
- Keep the primary walking strip between logical y=214 and y=342 in the 640 x 360 world viewport. Exceptions must include a clearly staged ramp or stair.
- Reserve at least 22% of world area as low-detail negative space around the current character or active hotspot.
- Exaggerate near/far scale by 10-25% beyond strict projection. Never use tactical isometric grids.
- Foreground masks may cover 0-18% of world area but must not obscure a required hotspot or navigation boundary.

### Shape hierarchy

- Read order at 1x: landmark, character/Terminal, route, prop detail.
- Landmark silhouette: coherent clusters 24-160 px across.
- Interactive prop silhouette: 18-72 px across, with a unique top contour and a two-value separation from its immediate background.
- Decorative clusters: 2-8 px; single-pixel sparkles are accents, not texture fill.
- Avoid regular polygons and CAD-perfect repetition. Repeat forms with 1-3 px controlled variance.

### Palette and value

- Each scene uses 24-48 authored colors, drawn from a project-wide library of no more than 96 simultaneous production colors.
- Each major material gets a 4-6 step value ramp: deepest occlusion, body shadow, local, light plane, highlight, optional emissive.
- Separate adjacent planes by at least 12 RGB luminance points or by a clear hue shift; required hotspots target at least 24 points at one edge.
- Backgrounds lose one contrast step and 15-35% saturation relative to the middle ground. Foreground occluders may return to near-black.
- Focal accents occupy under 6% of the world viewport. Machine cyan, warning coral, and route amber are semantic accents, not ambient wallpaper.
- Do not use smooth gradients. Build a maximum of five visible bands, optionally joined by sparse ordered clusters.

### Outlines and clusters

- Characters and actionable props: 1 px dark contour on lit edges, selectively 2 px on ground-contact or deep-shadow edges.
- Background architecture: internal value boundaries, not universal black outlines.
- A curve is a sequence of intentional runs, typically 1-1, 2-1, 3-1, or 3-2 steps. Remove staircase noise and isolated jaggies.
- No orphan pixel unless it is a star, particle, indicator, eye glint, or timed animation accent.
- At 100% zoom every 8 x 8 sample should contain a dominant cluster, not salt-and-pepper noise.

### Dithering

- Use only to bridge adjacent ramp steps, soften atmospheric depth, or describe rough material.
- Maximum density: 25% checker in background haze; 12.5% patterned clusters on middle-ground material; none on text, controls, faces, or hotspot edges.
- Dither patches must be at least 4 x 4 and at most 32 x 24; stop before they form an unintended screen-wide texture.
- Never dither between semantically different states. Locked/ready/complete must differ by shape and value, not optical mixing.

### Background vs character detail

- Characters and physical Terminals receive the sharpest local contrast and smallest meaningful clusters.
- Faces at exploration scale may use 2-5 pixels for eye/mouth cues; expression comes mainly from head angle, posture, and hand silhouette.
- Background micro-detail cannot outnumber active-character clusters within a 96 x 96 region around the character.
- Keep moving parts clear of high-frequency background patterns by a 2-4 px quiet halo or value pocket.

### Sprite scale

- Exploration hero: 62-104 px tall depending on depth; nominal middle-ground height 82 px.
- Named conversation partner: 70-128 px; dramatic close framing may reach 160 px but must not turn into a separate high-resolution asset style.
- Small physical Terminal: 32-62 px tall with a 24 px minimum unique silhouette width.
- Interaction hotspot may exceed painted silhouette for accessibility, but the visual highlight must trace or bracket the real object rather than paint a giant glow.

## Scene-state semantics

- **Dormant:** closed center, asymmetrical dark notch, no rhythmic light.
- **Available:** one stable 2-3 px beacon plus a changed outer silhouette or exposed seam.
- **Active:** moving two-frame light pattern and a 1 px contact highlight.
- **Complete:** persistent geometry change such as aligned fins, closed route ring, or extended marker. Color alone never carries completion.
- **Error:** warning cluster appears at the place of consequence; the scene remains operable and the lower band explains recovery.

## Originality gate

Reject a scene if it reproduces a reference's camera angle, building arrangement, character silhouette, prop icon, palette sequence, joke, or interaction graphic. A compliant scene can state the same *principles*—strong staging, compact action choice, expressive motion—while every concrete form remains Horizon Archive's own.

