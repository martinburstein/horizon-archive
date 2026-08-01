# RP-008 Offset Reach Source and Runtime Master Provenance

## Production decision

Two image roles are accepted for `SS-RP008-OFFSET-REACH-v1`:

1. `SC-09-PANORAMA-MASTER` - invariant first-person world identity for
   orientation, learning, save, restore and return;
2. `SC-09-RELATION-DETAIL-MASTER` - registered flat-on material view for the
   recurring-contact, comparable-non-contact and cross-family-contact
   responsibilities.

Both are original built-in image-generation outputs. The panorama is the
preserved successful output from the first Quartermaster contract. The detail
is the accepted derivative from `GC-TD008-SC09-v3`, using the panorama as its
material identity reference and a private rejected v2 draft only as an edit
target. That rejected edit source remains outside the workspace, canon,
runtime, this provenance package, commit and reveal.

Creative Production board:
`9d5428ed-f5bb-41f5-b9cb-c30175ad705a`. The board was opened once only.
Panorama item `td008-sc09-panorama` completed at revision `3`. The accepted
v3 detail item `td008-sc09-relation-detail-v3` began at revision `9` and
completed at revision `10` without a v3 recovery attempt.

## Generation accounting

- Panorama: first private generation accepted; cached success reverified
  before v2 and v3; no replacement panorama generated.
- Original relation-detail contract: initial plus one targeted recovery both
  rejected before workspace entry.
- `GC-TD008-SC09-v2`: fresh initial plus one targeted recovery both rejected
  before workspace entry.
- `GC-TD008-SC09-v3`: one precise-object-edit initial accepted; zero v3
  recovery generations.
- All rejected drafts remain outside workspace, canon, runtime, provenance,
  commits and reveal. No CLI/API fallback or second board was used.

## Source and derivative identities

The generator returned both accepted native outputs at `1672 x 941`, RGB.
Pillow `12.2.0` performed deterministic RGB/Lanczos enlargement to exact
`3840 x 2160` lossless PNG source masters. Runtime masters were encoded from
the enlarged RGB sources as WebP quality `96`, method `6`, exact RGB.
Enlargement improves runtime sampling and meets the shell's minimum source
dimensions; it does not claim native 4K detail.

| Role | File | Dimensions | Bytes | SHA-256 |
|---|---|---:|---:|---|
| panorama lossless source | `rp008-offset-reach-panorama-source-v1.png` | `3840 x 2160` | `10,276,898` | `5EB66FE47691F6BAD70D325ED5EC56E3AC5B89043E7286204E2998A52775EBF7` |
| relation-detail lossless source | `rp008-offset-reach-relation-detail-source-v1.png` | `3840 x 2160` | `12,258,944` | `6FD59B0D8E66BB04C12EE27CB9DED7A4F765A4E44E2C7BB61FCB0A5DF8135013` |
| `SC-09-PANORAMA-MASTER` | `sc09-offset-reach-panorama-runtime-master-v1.webp` | `3840 x 2160` | `1,715,912` | `B25E90052EECF46ABA9949F47BB1FFF32602C1CB9984F7572F2F311A56E0D366` |
| `SC-09-RELATION-DETAIL-MASTER` | `sc09-offset-reach-relation-detail-runtime-master-v1.webp` | `3840 x 2160` | `2,369,022` | `CA09C4BDFEDC6EFC99538A8403AC43F6DD8DB221A6157434E82AE1A9767FD0B8` |

Accepted native identities retained outside the workspace:

- panorama: `1672 x 941`, `2,910,957` bytes, SHA-256
  `C68462B8A805BE4BD816A728A3BC19D650C8DA69052328D9F050128A7C1C09B4`;
- relation detail: `1672 x 941`, `3,391,660` bytes, SHA-256
  `10C65A8DAC3E7072BAE2D623436EE2F9E4289069229B13113702AC1BC17131A7`.

## Accepted panorama prompt

> Use case: stylized-concept
>
> Asset type: TD-008 SC-09 cinematic game-environment panorama master
>
> Primary request: Maximum-quality cinematic photorealistic first-person
> 16:9 panorama of Offset Reach, an immense alien material reach inside a
> volcanic habitation vault. Preserve a familiar variable-thickness
> laminated glass-ceramic ribbon and dense cellular mineral-ceramic mantle as
> separately traceable continuities across kilometer-scale depth. Show one
> ordinary recurring bounded contact; one exposed comparable reach where both
> familiar continuities remain present without visible contact; one rigid
> third mineral continuity making one bounded contact with only one familiar
> continuity; one externally bounded fully opaque unavailable case; and
> compatible layered stewardship without a single author, institution,
> hierarchy, rule, cause or purpose.
>
> Composition and light: credible first-person `26-32 mm` environmental
> camera, wide 16:9, deep reach beyond the frame, calm lower/right interface
> space, restrained cool vault reflection and geothermal amber bounce,
> physically plausible global illumination, volumetric scale, real
> glass-ceramic strain/refraction, cellular mineral texture, rigid third
> continuity, granular interphases, condensation, dust, abrasion, accretion
> and maintenance.
>
> Constraints: recurrence is non-universal, exposed non-contact is not
> separation, cross-family contact is not equivalence, unavailable contents
> remain unseen, and nothing reacts, opens, judges, invites, rewards,
> authorizes or responds. No protagonist, human trace, text, UI, diagram,
> route, console, door, portal, face, eye, altar, answer cue or watermark.

## Accepted relation-detail edit prompt

> Use case: precise-object-edit
>
> Asset type: TD-008 SC-09 relation-detail master,
> `GC-TD008-SC09-v3` initial
>
> Input images: the accepted panorama is the material, palette, atmosphere
> and construction-language reference. The private v2 recovery is the edit
> target only and remains excluded from the project.
>
> Primary request: change only the single-contact topology in the right third
> while preserving the straight-on non-traversable monumental wall, equal
> three-region composition, left familiar contact, broad middle solid
> no-contact offset, sealed porosity, rigid non-rope mauve material and every
> no-route/no-door/no-opening boundary.
>
> Required edit: keep one compact rigid mauve-gray faceted sintered-mineral
> continuity. Surround it with broad continuous solid neutral host rock. Move
> the porous cellular mantle to the far-right edge, wholly beyond that solid
> band, so no cellular material touches the mauve continuity. Separate mauve
> material from the glass-ceramic ribbon everywhere except one small bounded
> lower-left contact. Neutral host rock is supporting background and carries
> no evidence identity.
>
> Preserve: left ordinary familiar contact; middle completely solid matte
> no-contact offset; near-orthographic first-person material-wall view; three
> equal peer regions; cool reflection and restrained geothermal warmth. Seal
> all surfaces. No corridor, canyon, route, ground, tunnel, door, hatch,
> window, human assembly, cavity, face symmetry, text, UI, diagram, rope,
> cable, organic fiber, person, ship, neon or watermark.
>
> Meaning constraints: recurrence is not universal; visible non-contact is
> not separation; cross-family contact is not equivalence; unavailable
> contents remain unseen; scenery grants no evidence, verdict, route, access,
> authority, reward, response, cause, purpose, identity or world effect.

## Registration and responsive crops

- Panorama default position: `50% 50%`.
- Detail recurring familiar contact: normalized region
  `.00 / .00 / .36 / 1.00`; desktop position `18% 50%`.
- Detail comparable non-contact: normalized region
  `.30 / .00 / .40 / 1.00`; desktop position `50% 50%`.
- Detail cross-family contact: normalized region
  `.62 / .00 / .38 / 1.00`; desktop position `82% 50%`.
- Narrow and effective-200 layouts use the full centered source with
  `object-fit: contain`.
- These values are CSS art direction and semantic registration only. They are
  not clickable image maps and grant no observation or learning evidence.
- No third image, pre-rendered crop, mask, animation, audio, font, video,
  source map or network payload was emitted.

## Accessibility and visual review

- Alternatives separately describe the panorama, recurring familiar contact,
  comparable non-contact and isolated cross-family contact.
- Grayscale mean/standard deviation is `59.20 / 37.58` for the panorama and
  `47.68 / 30.48` for the relation detail.
- Geometry, translucency, lamination, faceting, shallow sealed cellular
  texture, broad solid offset and complete text preserve meaning without hue,
  brightness, motion, sound or side-only instruction.
- Original-resolution review found no protagonist, human trace, text,
  pseudo-writing, UI, diagram, route, corridor, door assembly, opening,
  face-like symmetry, rope-like continuity, answer cue, reward, authority or
  response.
- In the detail, broad continuous host rock separates the mauve continuity
  from the cellular mantle top-to-bottom. The only familiar-material contact
  is one small lower-left glass-ceramic point.
- The panorama and detail share material identity and visual logic. The detail
  is an edited contextual view of the same environment family; it is not a
  literal pixel crop of the panorama.

## Status

Quartermaster disposition: `CONTENT COMPLETE`.

Image Specialist and Intelligence Officer review remain mandatory before
release.
