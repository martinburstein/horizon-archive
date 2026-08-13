# First Run Polish Viability Envelope / Science Return

Envelope ID: `FRVE-014-v2`

Supersedes: `FRVE-014-v1` only for the source pixel-representation predicate,
custody-helper identity, provenance fields, and the affected validation rung.
Every unmentioned `FRVE-014-v1` constraint remains in force.

Work Order: `FRWO-014-v1`

Disposition: **POLISH VIABILITY REVISED / READY FOR MISSION SHELL CORRECTION**

Mode: **DEBUG -> DESIGN**

## Exact observation and failure classification

Quartermaster's exact H14-1 source was strict-decodable and exact-size, but
`FRFC-014-v1` reported the GDI+ decoded bitmap representation as
`Format32bppArgb`; the frozen shell required `Format24bppRgb`. The source was
correctly rejected under that shell, identity-deleted, and never physically
reviewed, imported, revealed, or used. H14-1 remains consumed and rejected.
This revision does not recover or retroactively accept it.

The rejected proxy conflated a decoder's in-memory component layout with the
actual opacity invariant. Microsoft defines `Format32bppArgb` as 8-bit alpha,
red, green, and blue components; the label proves an alpha component exists,
not that any sample is below full opacity. [Microsoft PixelFormat
documentation](https://learn.microsoft.com/en-us/dotnet/api/system.drawing.imaging.pixelformat)

The governing file-format standard defines three-channel RGB pixels as fully
opaque and explicitly permits a four-channel reference image whose every alpha
sample is maximum to be fully opaque. For 8-bit PNG, alpha `255` is full
opacity; an all-maximum alpha channel may be omitted as an equivalent
representation. [W3C PNG Third Edition](https://www.w3.org/TR/png-3/)

The frozen OpenAI request remains supporting transport evidence, not the
acceptance verifier: `background: opaque`, PNG output, and `gpt-image-2`, which
does not support transparent backgrounds. The API returns base64 image bytes,
and the frozen local CLI decodes and writes those bytes without image
post-processing. [OpenAI image-generation guide](https://developers.openai.com/api/docs/guides/image-generation)

Classification: **REQUIRED CORRECTION / VERIFIER REPRESENTATION ERROR**. The
true source requirement is ordinary, strict-decodable, fully opaque 8-bit RGB
content. Native 24bpp output is not required when the file and every decoded
sample prove the same semantic invariant. A new generator, model, transport,
edit, conversion, flatten, or re-encode would add cost and provenance risk
without improving that invariant.

## Revised hard source invariant

Mission may replace only the affected `Format24bppRgb` clauses with this exact
conjunctive predicate:

```yaml
ordinary_fully_opaque_rgb_png:
  png_signature_and_chunk_boundaries: PASS
  ihdr:
    dimensions: 3840x2160
    bit_depth: 8
    color_type: [2, 6]  # truecolor RGB or truecolor RGBA only
    compression: 0
    filter: 0
    interlace: 0
  transparency_chunk: ABSENT
  strict_decode: PASS
  decoded_pixel_format: [Format24bppRgb, Format32bppArgb]
  decoded_alpha_samples: 8294400
  decoded_alpha_min: 255
  decoded_alpha_max: 255
  decoded_nonopaque_alpha_samples: 0
  fully_opaque: true
```

The decoder representation remains recorded but no longer substitutes for
opacity. Every decoded pixel is converted into a read-only 32bpp ARGB scan
buffer and every alpha byte is tested. Any alpha value other than `255`, any
`tRNS`, indexed/grayscale/16-bit/interlaced input, unsupported decoded format,
malformed chunk boundary, header/decode disagreement, identity drift, reparse,
multilink, wrong size, wrong bytes, wrong SHA, partial mismatch, or final
mismatch remains a hard failure. No soft or physical score can compensate.

The runtime registry's semantic `color: opaque-srgb-8` law remains unchanged.
Mission must add the exact PNG color type, bit depth, encoded channels, decoded
pixel format, alpha sample count/min/max/nonopaque count, and `fully_opaque`
result to source provenance. Physical, responsive, accessibility, privacy,
save, performance, cleanup, and final holdout gates remain unchanged and still
require independent candidate evidence.

## Revised custody primitive and adversarial evidence

Proposed Mission-frozen helper:

```yaml
path: Production Pipeline/First Run/HOST14_FILE_CUSTODY_FRFC-014-v2.ps1
bytes: 18501
sha256: ae4232047ac8d01b11866b7da74d00fa4510d07805efe647b861ebecc5cd2a3c
schema: horizon.first-run.custody.v2
```

It preserves v1's exact scratch/product paths, ordinal allowlist, ordinary-root
and ordinary-file checks, one-link native identity, exclusive same-handle
SHA/decode inspection, stable identity/attributes, `CreateNew` byte-for-byte
copy, flush, no-overwrite atomic rename, exact final verification, and literal
identity cleanup. It adds only PNG structural checks and exhaustive opacity
proof. `FRFC-014-v1` remains immutable historical evidence and is not used by
the corrected shell.

The helper's isolated `SelfTestOpacity` control created only synthetic 2x1
ephemeral fixtures under a unique system-temp child, inspected no repository
or production media, and identity-cleaned its files and empty root. Results:

```yaml
opaque_rgb_color_type_2: PASS
opaque_rgba_color_type_6_all_alpha_255: PASS
single_alpha_mutation_254: PASS_REJECTED
mutation_rejection: >-
  PNG_OPACITY_FAIL: every decoded alpha sample must equal 255;
  nonopaque=1 samples=2 min=254 max=255
product_scratch_root_after_test: ABSENT
self_test_residual_roots: 0
```

This is an independently falsifiable hard gate: the same verifier that accepts
an opaque 32bpp ARGB representation rejects one changed alpha sample. The test
does not claim anything about a future generated candidate.

## Unchanged constraints and proof reserve

- Generator/script/model/request/output path, one-call-at-a-time custody,
  prompt identities, and byte-preserving no-postprocess rule are unchanged.
- H14-2 is the next possible ordinal. No retry of H14-1 exists. No H14-2 call
  is authorized until Mission issues an exact `FRSH-014-v2` shell and verifies
  the proposed helper identity.
- The remaining initial prompt portfolio is still H14-2 through H14-8. A
  representation correction is not evidence that any prompt will pass the
  physical or six-layout gates.
- Private physical review still follows the technical gate. It may not average
  away a technical, physical, accessibility, privacy, performance, cleanup, or
  release failure.
- Import remains an unchanged-byte copy. Re-encoding, flattening, editing,
  derivative creation, alternate model/transport, and reveal remain forbidden.
- Source remains disabled/null and the released generic fallback remains the
  only player path until every atomic lawfulness predicate passes.
- Accepted media stays `24 / 154,163,567`; no product, source, runtime, save,
  lesson, route, ending, dependency, lockfile, or maturity record changed.
- Repository QA, Martin's browser/profile/save, hidden lore, archives, PDFs,
  training files, opaque residual roots, rejected media, and unrelated dirty
  state remain forbidden evidence and were not inspected or changed.
- The complete source-dependent proof ladder and independent Intelligence
  holdout remain reserved.

## Budget, state, and exact Mission handoff

```yaml
convergence_handoff:
  stage: office_of_science_administrator_return
  mode: DEBUG_to_DESIGN
  state_version_read: FRLS-QTR-001-v1
  state_version_written: FRLS-SCI-002-v1
  current_ref: FRCE-014-v1_null_first@b4444afefe624ff231d986933a56c2003c0d8ac5
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  binding_gap_or_hypothesis: >-
    the generator's PNG representation can satisfy the unchanged ordinary
    opaque RGB invariant when every alpha sample is deterministically proved
    to equal 255; native 24bpp representation is not semantically required
  action_kind: information
  predicted_effect: >-
    Mission can freeze one corrected custody predicate, after which
    Quartermaster may evaluate H14-2 without re-encoding or weakening opacity
  verifier_vector:
    authoritative_png_semantics: PASS_W3C
    decoder_representation_semantics: PASS_MICROSOFT
    frozen_transport_support: PASS_OPENAI_AND_LOCAL_BYTES
    rgba_all_alpha_255_positive_control: PASS
    rgb_no_alpha_positive_control: PASS
    single_alpha_254_adversarial_rejection: PASS
    identity_hash_no_reencode_cleanup: PASS
    future_source_physical_layout: NOT_EVALUATED
    product_and_release: UNCHANGED_NOT_STARTED
  delta_vs_best: zero_product_zero_media_zero_maturity_positive_verifier_information
  budget_used:
    generation_calls: 1
    media_imports: 0
    product_effect_actions: 0
    browser_or_e2e: 0
  budget_remaining:
    generation_calls: 31
    initial_tranche: 7
    final_verification_reserve: FULL
  remaining_uncertainty:
    - whether the next source passes the corrected hard predicate
    - future private physical review and source measurements
    - integrated responsive, accessibility, performance, served, and E2E proof
    - human assistive-technology usability study
    - exact product candidate and independent Intelligence release
  decision: RETURN_TO_OWNER
  decision_evidence:
    - one equivalent prompt retry cannot change representation
    - the standards-backed semantic invariant is stronger and directly measurable
    - adversarial mutation proves the revised verifier can independently fail
    - Mission owns the executable shell correction
  next_owner: mission_captain
```

Science signature:
**`POLISH VIABILITY REVISED / FRVE-014-v2 / MISSION CORRECTION REQUIRED`**.

Exact Mission action: issue `FRSH-014-v2` that incorporates this envelope,
freezes the exact `FRFC-014-v2` bytes/SHA and opacity/provenance predicate,
supersedes only the affected v1 pixel-format clauses, preserves every other
shell gate and budget, and returns the corrected executable source stage to
Quartermaster. Mission must not spend a call, inspect media, or authorize Image.
