# SC-05 Three-Current Reach Runtime Master Provenance

## Registered runtime identity

- Asset:
  `sc05-three-current-panorama-runtime-master-v1.webp`
- Dimensions: `3840 x 2160`
- Encoding: RGB WebP, quality `100`, method `6`, exact RGB
- Bytes: `2,163,752`
- SHA-256:
  `B6E0F34A917732DBB7B66B65968198CFC068BC650AC00CD8A01F095A6109F63F`
- Runtime status: **approved TD-004 SC-05 presentation master**
- Scope: invariant world plate for `RP-004 / SC-05 / TR-00-TR-40`

## Exact source and generation accounting

This runtime master is a deterministic, non-generative derivative of the
already accepted single TD-004 cycle reveal:

- Source:
  `Visual Direction/Production Masters/2026-07-26-rp004-three-current-capped-return-reveal/rp004-three-current-capped-return-v1.png`
- Source dimensions: `1672 x 941`
- Source bytes: `2,764,920`
- Source SHA-256:
  `CE7FDDF3694FBE0912B03172C6A0FE2DC9FD8B42ED2AFBB1857D54A02AD3C83F`
- Source generation count: exactly `1`
- Additional generations for this runtime master: `0`

The source reveal remains byte-for-byte unchanged, canonical reference-only,
and governed by its neighboring `PROVENANCE.md`. This derivative does not
replace, revise, or republish that reveal.

## Deterministic derivation

The asset was derived locally with Pillow `12.2.0`:

1. decode the exact source PNG to RGB;
2. resample `1672 x 941` to `3840 x 2161` with Lanczos;
3. remove one resampling-edge pixel from the lower edge to obtain exact
   `3840 x 2160`;
4. encode once as WebP at quality `100`, method `6`, exact RGB.

No generative synthesis, inpainting, cleanup, compositing, sharpening,
content addition, or semantic edit was performed. The larger raster improves
runtime sampling and crop stability only. **It does not contain or claim
native 4K capture detail.**

## Shell-compliance evidence

Direct visual review at original size and through a deterministic grayscale
inspection confirms that the physical relations remain distinct without
depending on color:

| Shell relation | Registered image region | Structural evidence |
|---|---|---|
| suspended matter / porous handling | left foreground, approximately normalized `x 0.00-0.40`, `y 0.48-1.00` | irregular particulate flow remains paired with a perforated, open handling bed |
| cyclic pressure / tensioned handling | center foreground, approximately `x 0.39-0.62`, `y 0.49-1.00` | braided tension member and repeated collar rhythm remain independently traceable |
| conducted heat / jointed handling | right foreground, approximately `x 0.61-1.00`, `y 0.49-1.00` | segmented refractory blocks and repeated joint boundaries remain independently traceable |
| apparent capped return | shared upper-middle reach, approximately `x 0.18-0.86`, `y 0.17-0.61` | all three relations lead toward the same visibly bounded, non-traversable terminal surface |

The composition is first-person and contains no protagonist, hands, body,
shadow, reflection, ship, inhabitant, readable text, UI, portal, or
color-coded answer lane. It assigns no purpose, route, workload, permission,
identity, reward, or authority to the capped return.

## Responsive crop and accessibility registration

- Wide runtime cover crops retain approximately normalized
  `x 0.18-0.82`; each relation remains present from foreground into the
  shared reach.
- At `<=1279px`, the existing full-width `16:9` world plate shows the
  complete registered composition.
- The one invariant master is used for every SC-05 phase and board state;
  no answer, success, failure, or save state changes the world image.
- Runtime alternative text names the three physical relations and only an
  *apparent* capped return. It does not teach or imply a course answer.
- Grayscale inspection is recorded as a validation derivative only and is
  not a runtime or canonical asset.

## Budget and identity boundary

This is the sole new runtime-media file for the TD-004 correction. Its
`2,163,752` bytes are within the `4,194,304`-byte per-asset/new-media
authority. Direct source import, emitted identity, aggregate media budget,
tests, and served-byte identity are recorded in
`Production Pipeline/Skyscraper Test Drives/TD-004/09-CONTENT-ASSET-LEDGER.md`.
