# FIRST RUN SHELL CORRECTION / FRSH-014-v2

## Disposition and identity

`FIRST RUN SHELL READY / CORRECTED OPAQUE PNG VERIFIER / QUARTERMASTER H14-2 READY`

Mission stage: `mission_captain` / `DESIGN -> OPERATE`.

```yaml
shell_id: FRSH-014-v2
supersedes: FRSH-014-v1_only_for_the_clauses_named_below
control: FRCV-001-v1
state_read: FRLS-SCI-002-v1
state_written: FRLS-MSN-002-v1
baseline: FRPB-001-v12
continuity_lock: FRCL-014-v1
work_order: FRWO-014-v1
viability_envelope: FRVE-014-v2
source_commit: def864b77211a0eaa557645a39b6b3b8662470d6
functional_candidate: b4444afefe624ff231d986933a56c2003c0d8ac5
predecessor_release: FRAB-013-v1
predecessor_product: 357ad6dc4184b74150173504e86e366c761cdc0e
active_mode_after_handoff: OPERATE
next_owner: quartermaster
```

This is a bounded executable correction, not a new Work Order or a restart of
the production sequence. `FRSH-014-v1` remains the complete shell authority
for every requirement not explicitly replaced here. `FRVE-014-v2` replaces
`FRVE-014-v1` only for source pixel representation, custody identity,
provenance fields, and the affected validation rung. The Reconnaissance,
Tactical, and Combat handoffs remain accepted and unchanged.

## Mission reconciliation and variance classification

Quartermaster lawfully rejected H14-1 because `FRSH-014-v1` required the GDI+
decoder label `Format24bppRgb` while the strict-decoded PNG reported
`Format32bppArgb`. H14-1 remains consumed, rejected, identity-deleted, absent,
and ineligible for recovery or retroactive acceptance. No physical, layout,
accessibility, presentation, import, or release inference is made from it.

Mission independently classifies the bounded mismatch as:

`REQUIRED CORRECTION / VERIFIER REPRESENTATION ERROR / ACCEPT FRVE-014-v2`.

The decoder label identifies an in-memory component layout; it does not prove
that any alpha sample is nonopaque. Microsoft documents
`Format32bppArgb` as eight bits each for alpha, red, green, and blue. The W3C
PNG Recommendation defines maximum alpha as fully opaque and three-channel RGB
as fully opaque. The frozen OpenAI transport returns base64 image bytes and
does not support transparent backgrounds for `gpt-image-2`; transport remains
supporting evidence, not the acceptance verifier. The acceptance law below is
therefore a stronger direct measurement of the intended invariant and retains
an adversarial failure path.

Authoritative evidence:

- <https://www.w3.org/TR/png-3/>
- <https://learn.microsoft.com/en-us/dotnet/api/system.drawing.imaging.pixelformat>
- <https://developers.openai.com/api/docs/guides/image-generation>

No planning conflict remains. The correction changes neither source meaning
nor product behavior, and it weakens no opacity, identity, provenance,
physical, responsive, accessibility, privacy, save, performance, cleanup, or
release gate.

## Exact replacement clauses

Every `FRSH-014-v1` requirement that the source or `InspectAttempt` report
native `Format24bppRgb` is replaced by this single conjunctive hard predicate:

```yaml
ordinary_fully_opaque_rgb_png:
  png_signature_and_chunk_boundaries: PASS
  ihdr:
    dimensions: 3840x2160
    bit_depth: 8
    color_type: [2, 6]
    compression_method: 0
    filter_method: 0
    interlace_method: 0
  transparency_chunk: ABSENT
  strict_decode: PASS
  decoded_pixel_format: [Format24bppRgb, Format32bppArgb]
  decoded_alpha_samples: 8294400
  decoded_alpha_min: 255
  decoded_alpha_max: 255
  decoded_nonopaque_alpha_samples: 0
  fully_opaque: true
```

Color type `2` is truecolor RGB and color type `6` is truecolor RGBA. The
helper converts every decoded pixel into a read-only 32bpp ARGB scan buffer and
tests every alpha byte. Any non-255 alpha, `tRNS`, indexed, grayscale, 16-bit,
interlaced, unsupported decoded format, malformed chunk boundary,
header/decode disagreement, identity drift, reparse point, multilink, wrong
size, byte/SHA mismatch, partial mismatch, or final mismatch is a hard failure.
No physical or soft score can compensate.

The runtime registry semantic law remains exactly `color: opaque-srgb-8`.
Native 24bpp storage is not required. No conversion, flatten, edit,
post-process, re-encode, alternate model, or alternate transport is permitted.

## Frozen custody primitive

The sole executable custody helper from H14-2 onward is:

```yaml
path: Production Pipeline/First Run/HOST14_FILE_CUSTODY_FRFC-014-v2.ps1
bytes: 18501
sha256: ae4232047ac8d01b11866b7da74d00fa4510d07805efe647b861ebecc5cd2a3c
schema: horizon.first-run.custody.v2
```

`FRFC-014-v1` remains immutable historical evidence and is no longer an
executable authority for this Work Order. `FRFC-014-v2` preserves the exact
scratch/product paths, ordinal allowlist, ordinary one-link identity checks,
exclusive same-handle SHA/decode snapshot, stable attributes, `CreateNew`
byte-for-byte copy, flush, atomic no-overwrite rename, final verification, and
literal identity cleanup. Its exposed modes are:

```text
-Mode CreateRoot
-Mode InspectRoot
-Mode InspectAttempt -AttemptId H14-N
-Mode DeleteAttempt -AttemptId H14-N -ExpectedIdentity <recorded> -ExpectedBytes <recorded> -ExpectedSha256 <recorded>
-Mode ImportSelected -AttemptId H14-N -ExpectedIdentity <recorded> -ExpectedBytes <recorded> -ExpectedSha256 <recorded>
-Mode DeleteProductPartial -ExpectedIdentity <recorded> -ExpectedBytes <recorded> -ExpectedSha256 <recorded>
-Mode DeleteRoot -ExpectedIdentity <recorded-root-identity>
-Mode SelfTestOpacity
```

Mission reproduced `SelfTestOpacity` from the frozen bytes. The opaque RGB
positive control passed, the opaque RGBA/all-255 positive control passed, and
one alpha sample changed from `255` to `254` was rejected with
`nonopaque=1`, `samples=2`, `min=254`, `max=255`. The ephemeral self-test root
was identity-cleaned; the exact production scratch, source, and partial paths
remain absent. This validates the verifier mechanism only, not a future source.

## Corrected source provenance contract

For an accepted source, Quartermaster writes the unchanged
`horizon.first-run.source-provenance.v1` record and all original
`FRSH-014-v1` fields, with the source-format group frozen to these exact
facts from the accepted `FRFC-014-v2` snapshot:

```yaml
png:
  width: 3840
  height: 2160
  bit_depth: 8
  color_type: 2_or_6
  encoded_channels: rgb_or_rgba
  compression_method: 0
  filter_method: 0
  interlace_method: 0
  transparency_chunk: absent
decode:
  strict: true
  pixel_format: Format24bppRgb_or_Format32bppArgb
opacity:
  alpha_samples: 8294400
  alpha_min: 255
  alpha_max: 255
  nonopaque_alpha_samples: 0
  fully_opaque: true
semantic_color: opaque-srgb-8
custody:
  control: FRFC-014-v2
  helper_bytes: 18501
  helper_sha256: ae4232047ac8d01b11866b7da74d00fa4510d07805efe647b861ebecc5cd2a3c
```

All original prompt, generator, request, source bytes/SHA, source/final file
identity, selection time, private review vector, measurement schema, and
no-secret/no-payload/no-review-prose provenance requirements remain exact.
The source/final raster remains byte-identical.

## Frozen identities, budget, and stage authority

Mission revalidated without a media call:

```yaml
accepted_media_manifest:
  path: Production Pipeline/First Run/FIRST_RUN_ACCEPTED_MEDIA_MANIFEST_FRAM-014-v1.json
  bytes: 5512
  sha256: 7057dd8f24f46086e5591d326706d537876030959ce6e058bd7b826683b28c30
  inventory: 24_files_154163567_bytes
pba_control:
  path: Production Pipeline/First Run/FIRST_RUN_PBA_FRPBA-014-v1.ps1
  bytes: 4072
  sha256: 28336cfa72803f2a10872014966528c6a52ab925deb8461323c0d6df9ded47b5
generator:
  path: C:\Users\marti\.codex\skills\.system\imagegen\scripts\image_gen.py
  bytes: 35266
  sha256: c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05
prompt_portfolio: H14-1_through_H14-8_exact_v1_identities_PASS
manifest_entry_integrity: 24_of_24_PASS
```

The exact generator CLI, `gpt-image-2`, one-output request, prompt files and
hashes, output root, no-augmentation flag, sequential launch law, physical
sentence/rejections, private review, measurement schema, six-layout and
accessibility gates, PBA and served identity, browser/E2E, cleanup, rollback,
and independent Intelligence holdout in `FRSH-014-v1` remain unchanged.

```yaml
budget:
  hard_pool: 32
  used: 1
  remaining: 31
  remaining_initial_tranche: H14-2_through_H14-8
  remaining_initial_calls: 7
  concurrency: 1
  outputs_per_call: 1
  extension_increment: 4_earned_only
  final_proof_reserve: FULL
```

H14-1 remains consumed/rejected/deleted and may not be retried. H14-2 is the
only next ordinal. Quartermaster may continue sequentially through the seven
remaining already-frozen prompts, subject to the original per-candidate hard
gates, two-equivalent-failure diagnosis rule, three-same-family replan rule,
tranche extension test, cleanup law, and first-complete-PASS stop. This verifier
correction does not itself improve media-search best and does not earn an
extension.

Quartermaster alone may now perform the exact `FRSH-014-v1` source stage using
`FRFC-014-v2`. Source remains null/disabled and the released generic fallback
remains the only player path until one candidate passes every atomic source,
physical, measurement, responsive, and provenance predicate. Image Specialist
remains **NOT AUTHORIZED** until Quartermaster commits one content-complete
accepted source candidate.

## Preserved gates, boundaries, and stop policy

Every unmentioned `FRSH-014-v1` clause remains in force, including:

- fixed canon, lesson ownership, route, save, privacy, offline behavior,
  equal ending dignity, RP-012, and `successor=null`;
- frozen player-facing copy and physical anti-answer requirements;
- no generation reference, edit, variation, derivative, reveal, second media,
  dependency, or runtime network request;
- null-first atomic native/generic fallback and complete released journey;
- six-layout, keyboard, pointer, touch, switch-like activation, focus,
  announcement, forced-color, reduced-motion, containment, and target gates;
- accepted media, PBA, performance, fixture, served-byte, real Edge, E2E,
  cleanup, product-candidate, rollback, and independent holdout gates;
- protected repository QA, browser/profile/save, hidden lore, archives,
  rejected media, PDFs/training material, and unrelated dirty state; and
- current/best/committed separation: `FRAB-013-v1` remains the best and
  committed release until Intelligence independently accepts a superior exact
  product candidate.

Permitted typed decisions and variance routing remain unchanged. A future
technical, opacity, identity, cleanup, physical, layout, accessibility,
privacy, performance, product, or release failure cannot be averaged away.
First release-quality PASS stops the encounter and every unused call.

## Mission validation and exact Quartermaster handoff

```yaml
convergence_handoff:
  mode: DESIGN_to_OPERATE
  state_version_read: FRLS-SCI-002-v1
  state_version_written: FRLS-MSN-002-v1
  current_ref: FRCE-014-v1_null_first@b4444afefe624ff231d986933a56c2003c0d8ac5
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  binding_gap_or_hypothesis: >-
    a future byte-identical PNG can satisfy the unchanged fully opaque RGB
    invariant when its strict file structure and all 8294400 decoded alpha
    samples pass the corrected independent custody verifier
  action_kind: information
  predicted_effect: >-
    Quartermaster can evaluate H14-2 without repeating the invalid decoder-label
    proxy, editing media, or weakening opacity
  verifier_vector:
    planning_conflict: PASS_NONE
    w3c_png_semantics: PASS
    microsoft_decoder_semantics: PASS
    openai_transport_support: PASS
    frozen_custody_identity: PASS
    opaque_rgb_positive_control: PASS
    opaque_rgba_all_255_positive_control: PASS
    single_alpha_254_adversarial_rejection: PASS
    accepted_manifest_integrity: 24/24_PASS
    prompt_generator_fram_frpba_identities: PASS
    production_scratch_source_partial_absence: PASS
    future_source_physical_layout: NOT_EVALUATED
    product_and_release: UNCHANGED_NOT_STARTED
  delta_vs_best: zero_product_zero_media_zero_maturity_positive_verifier_information
  budget_used:
    generation_calls: 1_total_cycle_0_mission
    media_imports: 0
    product_effect_actions: 0
    browser_or_e2e: 0
  budget_remaining:
    generation_calls: 31
    remaining_initial_tranche: 7
    final_verification_reserve: FULL
  remaining_uncertainty:
    - whether H14-2 or a later lawful ordinal passes the corrected hard predicate
    - future private physical review and six-layout measurement
    - integrated responsive, accessibility, performance, served, and E2E proof
    - human assistive-technology usability study
    - exact product candidate and independent Intelligence release
  decision: GATHER_EVIDENCE
  decision_evidence:
    - the failed proxy was localized without changing the intended invariant
    - the corrected verifier accepts both lawful encodings and rejects one nonopaque sample
    - exact byte identity and no-postprocess custody remain intact
    - one H14-2 observation is now the least-powerful sufficient next action
  next_owner: quartermaster
```

Mission signature:
**`FIRST RUN SHELL READY / FRSH-014-v2 / QUARTERMASTER H14-2 READY`**.

Exact Quartermaster handoff: read `FRSH-014-v2`, inherited
`FRSH-014-v1`, `FRVE-014-v2`, `FRCA-014-v1`, append-only `FRLG-014-v1`,
`FRFC-014-v2`, `FRCE-014-v1`, and `FRLS-MSN-002-v1`; reproduce the frozen
identity/self-test/preflight; reconcile H14-1 as consumed and absent; then
evaluate exactly H14-2 as the next single sequential ordinal. Stop at the
first higher-authority failure, clean only exact identity-owned state, append
the ledger, and decide from evidence before any further call. Do not inspect
repository QA, reveal media, edit/re-encode, change generator/transport, alter
runtime presentation, advance maturity, or begin Image work.
