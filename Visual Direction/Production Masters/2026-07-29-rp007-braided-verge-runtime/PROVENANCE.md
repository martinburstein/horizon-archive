# RP-007 Braided Verge Source and Runtime Master Provenance

## Production decision

Two image roles were produced and accepted for
`SS-RP007-BRAIDED-VERGE-v1`:

1. `SC-08-PANORAMA-MASTER` - the invariant shared-region identity used for
   arrival, orientation, work, review, save, restore, and return;
2. `SC-08-CONTACT-DETAIL-MASTER` - the registered close material identity
   used for bounded difference, relative order, closed unavailability, and
   layered stewardship.

Both accepted sources are original built-in `image_gen` generations with no
external reference, copyrighted composition, manual compositing, inpainting,
or CLI/API fallback. Each role used one initial generation and the single
permitted targeted recovery:

- the first panorama was rejected because distant rounded voids read as
  framed apertures;
- the first contact detail was rejected because a three-opening coupling read
  as a face;
- each final recovery removed the rejected reading;
- no third attempt occurred.

Rejected drafts remained outside the workspace, runtime, canon, board
completion state, commit, and player-facing reveal. They are not included in
this package.

Creative Production board:
`294b4090-1b9a-4831-bf98-eecaabacd695`. Stable items
`td007-sc08-panorama` and `td007-sc08-contact-detail` began on the already
mounted board at revision `7`; a concurrent stable-ID reconciliation advanced
the same board to revision `8` without opening a replacement board. Accepted
source completions were received at revisions `11` and `12`.

## Source and derivative identities

The generator returned both accepted native sources at `1672 x 941`, RGB.
Pillow `12.2.0` performed deterministic RGB/Lanczos enlargement to exact
`3840 x 2160` lossless PNG source masters. Runtime masters were encoded from
those enlarged RGB sources as WebP quality `96`, method `6`, exact RGB.
Enlargement improves runtime sampling and meets the shell's minimum source
dimensions; it does not claim native 4K detail.

| Role | File | Dimensions | Bytes | SHA-256 |
|---|---|---:|---:|---|
| panorama lossless source | `rp007-braided-verge-panorama-source-v1.png` | `3840 x 2160` | `11,735,767` | `8E9F4BDD29F57A9B4AE36E41575F5520E2F79E37AEAA777AA42A7BBC783CEF0E` |
| contact-detail lossless source | `rp007-braided-verge-contact-detail-source-v1.png` | `3840 x 2160` | `10,019,043` | `B074188F36A11204186E6B1937DF18884E39FB51ED81001AE283C7B237A6F809` |
| `SC-08-PANORAMA-MASTER` | `sc08-braided-verge-panorama-runtime-master-v1.webp` | `3840 x 2160` | `2,097,426` | `63148566D2745C45E0D9F1BDEDBB437B0D74A6DAE09028F61828BE2F0E96031E` |
| `SC-08-CONTACT-DETAIL-MASTER` | `sc08-braided-verge-contact-detail-runtime-master-v1.webp` | `3840 x 2160` | `1,638,180` | `182E79793CEB3F375BCAABD87FF6D6279E54B53927B8AF90F988D2DFAABC4640` |

Accepted native output identities retained outside the workspace:

- panorama: `1672 x 941`, `3,250,161` bytes, SHA-256
  `7837EC144FB68C55B1E867028EFBCAC1462AC9DC17784CB78A638EA3BF870CDC`;
- contact detail: `1672 x 941`, `2,826,586` bytes, SHA-256
  `432851755701E792B1E42DFC5FC9BA44200D7D21F5E5D62E84B75DD09B63BAB7`.

## Exact accepted panorama prompt

> Use case: stylized-concept
>
> Asset type: TD-007 SC-08 cinematic game-environment panorama master
>
> Primary request: Maximum-quality cinematic photoreal first-person 16:9
> game-environment panorama of Braided Verge in an immense volcanic
> habitation vault.
>
> Scene and materials: A variable-thickness laminated glass-ceramic load
> ribbon and a dense sintered cellular mineral-ceramic mantle weave through
> kilometer-scale depth while remaining separately traceable by silhouette
> and texture. Show at least three irregular saddle contacts at different
> scales and orientations with granular compliant interphases. One
> middle-ground offset saddle has an ordinary quilted repair without special
> emphasis.
>
> Closed boundary: An off-axis opaque fused technical-ceramic junction mass
> sits in the deeper middle ground with separate peripheral seams and a
> visible external bypass. It has no aperture, interior, destination, or
> access reading. Replace every distant framed opening or door-like
> silhouette with solid irregular cellular relief, closed mineral mass, or
> overlapping opaque material.
>
> Composition: `28-34 mm` lens territory, first-person landscape view, calm
> lower/right interface-safe negative space, recurrent contacts across
> foreground, middle distance, and haze. The lower periphery carries a
> serviced continuation from prior works without replaying a stratigraphic
> cut.
>
> Light and texture: restrained cool mineral reflections and geothermal
> warmth; volumetric haze, particulate fall, condensation, real
> Fresnel/refraction, pores, sealed voids, strain veils, abrasion, fused scars,
> granular ridges, and patch fabric.
>
> Avoid: protagonist, human trace, text, pseudo-writing, UI, diagram, network,
> grid, centered hub, arrow, number, route, door, portal, tunnel mouth,
> monitor, console, face, eye, altar, neon, reward glow, synchronized
> emissions, merged materials, answer cue, cause/history/purpose claim, or
> watermark.

## Exact accepted contact-detail prompt

> Use case: stylized-concept
>
> Asset type: TD-007 SC-08 cinematic registered contact-detail master
>
> Primary request: Maximum-quality cinematic photoreal first-person 16:9
> registered contact-detail view of the same Braided Verge material family.
> Use `50-65 mm` lens territory and retain environmental scale rather than a
> diagram or abstract macro.
>
> Continuities and contacts: Both the laminated glass-ceramic ribbon and the
> dense porous cellular mantle enter and leave the frame through uninterrupted
> unique structures. Show two ordinary saddle contacts in different
> orientations. One offset saddle has a later quilted granular interphase and
> remains equal in visual weight.
>
> Relative order: A cellular substrate visibly terminates beneath crossing
> lamellae, with later mineral accretion coating both. This supports relative
> order only and carries no arrow, date, duration, authorship, cause, or
> original/correct emphasis.
>
> Closed boundary and stewardship: At the side, include an opaque heavy fused
> junction mass with separate peripheral seams and an external bypass, but no
> visible interior or access. Foundation cellular fabric, crossing lamellae,
> and maintained interphase repair coexist as compatible layers.
>
> Replica coupling: The subordinate coupling is one asymmetrical solid
> technical-mineral nodule with offset sealed seams and no holes, sockets,
> face, eyes, monitor, or access.
>
> Light and texture: restrained cool mineral reflection and geothermal
> warmth; glass strain veils, inclusions, abrasion, deep pores, sealed voids,
> dust, condensation, compressed ridges, localized vitrification, and real
> material weight.
>
> Avoid: person, hand, body, shadow, reflection, ship, drone, text, symbols,
> labels, UI, diagram, callout, arrow, timeline, date, monitor, keyboard,
> console, door, portal, face, eye, hub, route, reward glow, damage/error
> emphasis, answer cue, cause/history/purpose claim, or watermark.

## Registration and derivatives

- Panorama continuities: `.02 / .03 / .95 / .90`.
- Panorama recurrent contacts: `.03 / .02 / .72 / .88`.
- Detail bounded difference: `.38 / .18 / .32 / .58`.
- Detail relative order: `.05 / .12 / .52 / .68`.
- Detail closed junction and stewardship: `.68 / .12 / .30 / .70`.
- Wide crop defaults to `46% 50%`.
- Detail difference, order, and junction crops use `48% 50%`, `34% 50%`,
  and `76% 50%` respectively.
- Narrow layouts expose the full centered source.
- These values are semantic registration metadata and CSS art-direction only.
  They are never clickable image-map evidence.
- No third image, pre-rendered crop, mask payload, animation, audio, font,
  video, source map, network payload, or answer-bearing overlay was emitted.

The two accepted masters use the same material taxonomy, physical scale,
geothermal/cool-light envelope, and nonhuman construction language. The
contact detail is a registered view of the same environment family, not a
claim that it is a pixel crop from the panorama.

## Accessibility and review

- Panorama alternative text names the two separately traceable material
  continuities, recurrent contacts, sealed junction, and external bypass.
- Three detail alternatives separately name bounded difference, visible
  relative order, and closed-junction/stewardship responsibilities.
- Grayscale mean/standard deviation is `66.02 / 31.27` for the panorama and
  `61.27 / 35.47` for the contact detail.
- Geometry, lamination, porosity, density, boundaries, and complete text
  preserve meaning without color, sound, motion, side, or brightness.
- Full-size review found no protagonist, human trace, readable text,
  pseudo-writing, UI, chart, arrow, answer cue, face, eye, door, portal,
  reward, route, or world response.
- The panorama's lower central negative space is an ordinary exposed saddle
  between separately continuing materials; it is not part of the opaque
  junction and has no framed edge, destination, or access treatment.
- The contact-detail replica nodule is sealed, asymmetrical, subordinate, and
  non-ergonomic.

## Status

Quartermaster disposition: `CONTENT COMPLETE`.

Image Specialist and Intelligence Officer review remain mandatory before
release.
