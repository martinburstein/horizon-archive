# FIRST RUN PLAYER EXPERIENCE BLUEPRINT / FRPX-009-v4

## Disposition

`PLAYER EXPERIENCE READY / DERIVED RESPONSIVE PROOF`

## Authority

Implements FRSH-009-v4 and FRDT-009-v4 without media or canon changes.

## Target model

1. Obtain the actual canonical world box: width equals the rendered scene-frame width; height is width * 9/16.
2. Obtain computed `object-fit` and `object-position` from the scene image.
3. Project source rectangles through cover geometry into the actual world box.
4. Derive visible source bounds, retained fractions, mapped physical centers, and semantic target bounds.
5. Expand the interactive target symmetrically to at least 44x44 CSS pixels, clamped inside the world.
6. Measure the real DOM image, world, target, and focus outline at desktop, laptop, narrow, effective-200%, 320x180, and 320x240 fixtures.

## Authority boundary

Caller-supplied `retainedArea`, `essentialCentersVisible`, target dimensions, overlap, focus stability, object-fit, object-position, and source-reference booleans are not evidence and must not decide lawfulness. Measurement records must be produced by the projection function from source rectangles plus the declared viewport, then corroborated by browser DOM.

## Content versus presentation

- Content gate: valid source identity; required rectangles are finite, positive, contained by the 3840x2160 source; physical nesting/non-overlap relations are coherent.
- Presentation gate: derived full-source retention, required centers visible, semantic target contains the physical center, target is >=44x44 CSS pixels, target stays inside world, no protected overlap, focus visible.
- Directorial score only: normalized center/balance bands from generation prompts.

## Accessibility and modality

- One native button remains the pointer/touch/keyboard/switch convergence point.
- The Host 09 button receives an exact centered-target style and minimum 44px dimensions.
- Focus remains visible in normal and forced-color modes; reduced motion changes no geometry or meaning.
- Labels remain inside the target and do not become the physical hit-area evidence.

## Tests

- Pure projection tests for equal aspect, crop, noncenter object-position, clipping, malformed input, and 44px clamping.
- Host 09 lawfulness tests that prove forged caller attestations cannot pass.
- Real isolated-browser fixture loading production CSS at all six layouts plus forced-colors and reduced-motion.
- Read-only Host 07/08 projection audit using their accepted registry rectangles.
- Existing focused, related, full, validator, build, bundle, and served checks.

## Hard stop

No API call, generation, candidate review, raster/provenance write, product activation, or release maturity advance belongs to this repair.

## Exact handoff

One fresh Combat Engineer implements this blueprint, validates it, records the audit/reclassification evidence, commits and pushes the exact correction candidate, then routes Quartermaster for evidence reconciliation only.
