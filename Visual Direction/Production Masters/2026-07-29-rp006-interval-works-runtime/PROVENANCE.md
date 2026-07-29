# RP-006 Interval Works Source and Runtime Master Provenance

## Production decision

Two image roles were produced and accepted for
`SS-RP006-INTERVAL-WORKS-v1`:

1. `SC-07-PANORAMA-MASTER` - the invariant exposed-works identity used for
   arrival, learning, save, restore, and return;
2. `SC-07-CROSSSECTION-MASTER` - the registered close material view used for
   the four equal observations.

Both are original built-in image generations. The cross-section used the
accepted panorama as its sole visual reference to preserve the same mineral,
glass-ceramic, conductive, palette, and lighting language. No external
reference, copyrighted composition, inpainting, compositing, manual cleanup,
or semantic edit was used.

Creative Production board:
`294b4090-1b9a-4831-bf98-eecaabacd695`. Generation items
`td006-sc07-panorama` and `td006-sc07-crosssection` were completed at board
revision `4`.

## Source and derivative identities

The generator returned both accepted sources at `1672 x 941`, RGB. Pillow
`12.2.0` performed deterministic RGB/Lanczos enlargement to exact
`3840 x 2160` lossless PNG source masters. The runtime masters were encoded
from those enlarged RGB sources as WebP quality `96`, method `6`, exact RGB.
Enlargement improves runtime sampling and meets the shell's source-dimension
contract; it does not claim native 4K detail.

| Role | File | Dimensions | Bytes | SHA-256 |
|---|---|---:|---:|---|
| panorama lossless source | `rp006-interval-works-panorama-source-v1.png` | `3840 x 2160` | `10,329,737` | `71F0CAEC9CC8862FB2362FCD16C726708A15B51D33F6A6C805FC64583A1FDB1D` |
| cross-section lossless source | `rp006-interval-works-crosssection-source-v1.png` | `3840 x 2160` | `10,206,788` | `D0FA17CB6381E21FF92249C9AAE6323C0AEFAE4AC6C32E82A3A9FA4541A109C4` |
| `SC-07-PANORAMA-MASTER` | `sc07-interval-works-panorama-runtime-master-v1.webp` | `3840 x 2160` | `1,816,650` | `EF5917632EB2440D7D6D85895F5775767389745F1534F4E107F7BB0DE7D59202` |
| `SC-07-CROSSSECTION-MASTER` | `sc07-interval-works-crosssection-runtime-master-v1.webp` | `3840 x 2160` | `1,790,866` | `0D79C2C2096C0114216A666279D5ACD2ED35F6920D60A117726C625177A0615D` |

Native private output identities, retained outside the workspace:

- panorama: `1672 x 941`, SHA-256
  `69B4B93BC87D28E8E9A58F2B3C4D4C5AE5DA92AC3385C694971B7F3B97B14022`;
- cross-section: `1672 x 941`, SHA-256
  `B2DE862476BCCEC60885391873EF5A406926E82BFB608414D22DF50D23D20B03`.

## Exact panorama prompt

> Use case: stylized-concept
>
> Asset type: TD-006 SC-07 cinematic game-environment panorama master
>
> Primary request: Maximum-quality cinematic photorealistic first-person
> 16:9 panorama of Interval Works, a vast alien exposed material works inside
> a volcanic habitation vault.
>
> Scene/backdrop: Immense nested mineral-ceramic masses extend beyond the
> frame; destinationless service infrastructure continues beyond the crop. A
> dark foundation lamina lies beneath a thick compatible glass-ceramic
> overlay. A pale fused repair web cross-cuts both layers and is itself
> covered by thinner mineral deposition. One changed branch-vane form is held
> in continuous surrounding geometry. One ordinary matte conductive
> continuity passes through every exposed record with compatible joints. A
> broad, heavy, opaque service laminate bounds an unavailable interval, with
> an external bypass and absolutely no aperture. Include compatible contacts
> from several visible material eras and low asymmetric maintenance following
> fixed joints.
>
> Style/medium: Cinematic photorealism, feature-film and premium game key-art
> quality; forensic, physically credible alien mineral ceramic and thick
> glass ceramic.
>
> Composition/framing: Clean first-person environmental view with no visible
> protagonist, 30-35mm equivalent lens, disciplined deep perspective,
> landscape-first 16:9 composition, safe negative space for lower/right UI.
> Monumental nested geometry continues beyond every crop. Changed forms and
> persistent forms receive equal visual credibility.
>
> Lighting/mood: Motivated geothermal bounce from below and broad vault
> reflection from above; restrained atmosphere; no theatrical reward glow.
>
> Materials/textures: Real refraction through thick glass ceramic, mineral
> inclusions, strain, abrasion, dust, condensation, heat refraction, fused
> repair seams, deposited layers, compatible joints and contacts. The opaque
> unavailable interval is integrated structural mass, never an entrance or
> access point.
>
> Constraints: One coherent environmental photograph-like panorama; ordinary
> conductive continuity must visibly pass through every exposed material
> record; external bypass must clearly route around the sealed opaque interval
> without suggesting access; no text or watermark.
>
> Avoid: protagonist, hands, body, shadow, reflection, portrait, ship, human
> trace, humanoid, animal, drone, readable writing, numbers, labels, UI,
> console, screen, kiosk, museum, timeline, chart, before/after display,
> clock, calendar, causal arrow, door, lock, portal, route invitation, reward
> glow, mystical ornament, generic ruins, familiar human industrial
> shorthand, aperture, entrance, hatch, doorway, tunnel mouth, access seam,
> inviting route, symbolic glyphs, decorative runes, text, watermark.

## Exact cross-section prompt

> Use case: stylized-concept
>
> Asset type: final cinematic game-environment runtime master, one image only
>
> Input image: Image 1 is the sole spatial, material, palette, and lighting
> continuity reference. Preserve its dark ancient mineral substrate, pale
> translucent glass-ceramic seams, matte black conductive filaments,
> restrained amber warmth, cool silver daylight, geological scale, and
> entirely nonhuman construction language. Do not copy a literal layout;
> reinterpret the same Interval Works as a clear material cross-section.
>
> Primary request: Create one maximum-quality cinematic photorealistic
> first-person 16:9 material cross-section of the same Interval Works. The
> view reads as a calm, monumental exposed geological-material face with four
> equal peer regions visible together in one coherent scene, separated
> through natural material boundaries and negative space, never by frames,
> labels, diagrams, or UI.
>
> Region 1: clearly show an older mineral underlay beneath a later translucent
> overlay; a pale repair vein crosses both layers; an even thinner covering
> deposit lies continuously over the repair.
>
> Region 2: show a branching mineral vane where exactly one branch is visibly
> altered, while the surrounding interface and one continuous matte
> conductive phase remain materially continuous through the region.
>
> Region 3: show a broad, completely opaque laminate interval, solid from
> edge to edge, with a separate external bypass filament running around its
> outside; it must contain absolutely no aperture, doorway, portal, tunnel,
> window, seam shaped like access, or implied route through it.
>
> Region 4: show compatible ancient dark mineral foundation, a later
> glass-ceramic adaptation, the pale crossing repair, a thin covering deposit,
> and a quiet maintained-present contact where materials meet.
>
> Replica-only coupling: include it only as one ordinary, very small material
> junction embedded among many minor junctions; never center it, spotlight it,
> enlarge it, or make it a hero.
>
> Composition/framing: wide 16:9 first-person environmental close panorama;
> all four regions equally legible and equally weighted; no central hero
> object; strong calm reading order; substantial negative space between
> distinctive evidence areas; high material depth and scale; no cutaway
> diagram conventions.
>
> Lighting/mood: soft raking cool light with restrained amber subsurface
> warmth inherited from Image 1; somber, quiet, observational, no spectacle,
> no success state, no active machinery, no live response.
>
> Materials/textures: weathered dark mineral foundation, translucent smoky
> glass-ceramic layers, pale repaired seams, very thin mineral deposition,
> matte conductive filaments, dense opaque laminate; physically plausible
> abrasion, inclusions, edge wear, and layered continuity.
>
> Historical neutrality: the image must not imply, reveal, or encode history,
> cause, chronology beyond directly visible material superposition, date,
> authorship, purpose, identity, authority, reward, access, or narrative
> explanation.
>
> Constraints: no visible person, hands, body, silhouette, shadow, reflection,
> ship, drone, or vehicle. No text, symbols, numerals, UI, labels, callouts,
> charts, arrows, pseudo-writing, signage, maps, diagrams, human architecture,
> ergonomics, doors, stairs, handrails, consoles, altars, magic, faces, eyes,
> neon, glowing glyphs, triumphant lighting, interactive response, or motion.
> No opening or traversable path in the opaque laminate. No watermark.
> Original design.
>
> Output: exactly one polished photorealistic landscape image; no variants, no
> contact sheet, no border, no captions.

## Review and integration contract

- Full-size inspection found no protagonist, human trace, text,
  pseudo-writing, symbol, UI, chart, aperture, portal, route, reward, or
  response cue.
- The panorama preserves large-scale orientation, the sealed opaque interval,
  ordinary conductive continuity, and layered repair/deposition without
  claiming history.
- The cross-section keeps the four observation regions as peers. The dark
  closed interval remains sealed and externally bypassed.
- Grayscale review preserves the opaque interval, pale cross-cut repair,
  layered contacts, changed branch, and continuous phase without relying on
  hue. Measured grayscale means/stddev were `68.62/41.34` for panorama and
  `45.75/25.51` for cross-section.
- Runtime crops are CSS samples of the two direct masters; no additional
  image payload is emitted.
- Scenery remains descriptive only. It creates no evidence, answer, score,
  chronology, cause, identity, authority, access, reward, or world response.

## Status

Quartermaster disposition: `CONTENT COMPLETE`.

Image Specialist and Intelligence Officer review remain mandatory before
release.
