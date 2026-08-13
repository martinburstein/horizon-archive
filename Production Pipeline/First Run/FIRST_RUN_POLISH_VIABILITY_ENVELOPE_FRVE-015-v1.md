# FIRST RUN POLISH VIABILITY ENVELOPE / FRVE-015-v1

## Disposition and identity

`POLISH VIABILITY READY / GUIDE-CONDITIONED BUILT-IN REPRESENTATION / MISSION NEXT`

Science stage: `office_of_science_administrator` / `DESIGN -> MIGRATE`.

Work Order: `FRWO-015-v1`. Baseline: `FRPB-001-v13`. Continuity:
`FRCL-015-v1`. State read: `FRLS-OPS-002-v1`. State written:
`FRLS-SCI-004-v1`. Source/control commit read:
`75d1cdfa206aab7b9fd339e15517405f177dcd8d`.

Best and committed release remains
`FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e`. Current product
remains the inert null-first `FRCE-014-v1@b4444afefe624ff231d986933a56c2003c0d8ac5`.
Accepted media remains `24 / 154,163,567`. No product, runtime, guide,
candidate, media, import, browser, save, lesson, route, or maturity change
occurred at Science.

Martin's materially different mechanism authority makes this representation
viable. The exact mechanism is a deterministic guide family, the default
built-in `image_gen` reference flow, bounded targeted edits, and a closed set
of deterministic local derivatives. CLI/API image generation is not
authorized. Built-in output size and returned path are deliberately not
predicted: custody begins with the actual tool-returned result, then copies
accepted bytes into a literal isolated workspace staging root. Mission must
freeze exact staging and final product paths before any effect.

## Frozen control identities

| Control | Bytes | SHA-256 |
| --- | ---: | --- |
| `FRM15_GUIDE_SPEC_v1.json` | 3,859 | `d749d452bce7cc4747b25908ad4824275ba038debb7686e07c4a7502a5f6bf96` |
| `FRM15_GUIDE_CONTROL_v1.py` | 14,107 | `214a26f29443c91138cb4768fb54e40c9d7ce1980392cd6ecc20aae6a24a7037` |
| `FRM15_CUSTODY_DAG_v1.py` | 10,558 | `74ee796d87287ed7b8c4c281396a3fbdcc37897a472d89761fb5090234158329` |
| `FRM15_MEDIA_TRANSFORM_v1.py` | 6,400 | `cbc06354e448af6ece96d61bb5154c98c1b206ee05592db61f9f11256a59990f` |
| `FRM15_PROMPT_R01_v1.txt` | 3,050 | `5cf70f69727aa742045d9da6008c77f085894dfdd934f5493801170b08869cdd` |
| `FRM15_PROMPT_E01_MATERIAL_v1.txt` | 1,553 | `f56572f6812f1147f20bc468e5c56c4ce7b6c664ba4d3fd2656368ed27dc9877` |
| `FRM15_PROMPT_E02_TRACE_v1.txt` | 1,238 | `2c759d0c29a1c42218fd96e5005e2444a69b0bddcd5998f6667119ce5d9f2445` |
| `FRM15_PROMPT_E03_SEAMS_v1.txt` | 1,263 | `2e9dfdccd42f056d1ccd363b21811f9effd043ea0e381adc96cc0ced542e6f90` |

The deterministic controls require Python `3.12.10` and Pillow `12.2.0`.
Mission may freeze these exact versions or return for an explicitly verified
replacement. The controls create new outputs only and reject linked files,
duplicate nodes, missing parents, content drift, nonbinary composite masks,
metadata-bearing/non-RGB normalized output, and hard retained-file/byte caps.

## Guide family and hard gate

`FRM15-SPEC-v1` defines a `1536x1024` guide canvas. Its exact centered
`1536x864` region (`y=80..944`) is the safe `16:9` core that normalizes to
`3840x2160`. The three outputs are:

- `G01-STRUCT`: low concave relation, dry route, receded water, trace, and
  four recessed service paths;
- `G01-MAT`: foundation, repair, and service-skin material IDs, pairwise
  contact windows, trace, and service paths; and
- `G01-PROT`: safe core, semantic target, label anchor, and all protected
  predecessor/later/water/return/landmark/Crown/Witness/UI regions.

Material and control colors have zero world meaning. The player-facing result
must not reproduce exact guide palette blocks, mask edges, control lines,
labels, legends, IDs, or diagram structure. The guide verifier requires three
material processes, two contact windows per material pair, one trace sampling
all three IDs, three reaction samples, at least three upward main seams, a real
branch joined to a main seam, target/protected separation, and all essential
geometry in the safe core. Its self-test proves four mutations fail: removed
material, trace missing processes, too few seams, and protected-target overlap.

Guide build/validation is owned by Combat after shell. Quartermaster must view
the built structural and material guides locally before the first built-in
call. The protection guide is viewed and used as a reference only if the
built-in call can include all three inputs within the exact tool contract;
otherwise Mission must freeze a two-reference base call and protection remains
a deterministic verifier, not an omitted constraint. A guide PASS is
necessary and gives zero source-acceptance credit.

## Built-in generation/edit contract

Use built-in `image_gen` only. No API key, CLI, endpoint, model string, output
size flag, output-path argument, hidden retry, internal batch, or `n` claim is
permitted. Every stochastic call has one requested artifact and one consumed
ordinal at launch, including ambiguous completion.

Base call `FRM15-R01`:

1. Combat builds `G01-STRUCT`, `G01-MAT`, and `G01-PROT` into the shell's
   initially absent custody root and validates their exact hashes.
2. Quartermaster loads/views required local guides; call built-in `image_gen`
   with `FRM15_PROMPT_R01_v1.txt`, explicitly ordering each guide by role.
3. Record the actual tool result and returned path. Do not assume the result is
   1536x1024, 3840x2160, PNG, or under a named directory.
4. On tool success, immediately prove the returned file is an ordinary,
   single-link, nonreparse file; copy it create-new into custody with
   `FRM15_CUSTODY_DAG_v1.py adopt`; hash source and destination; and add one
   append-only render node. Ambiguous return or missing/changed bytes is
   `STOP_SAFETY`, not a retry.

Targeted edits use built-in edit mode only after the current best candidate is
visible in conversation context. Each edit repeats the immutable structural,
material, and protection references and changes one diagnosed group:
`E01_MATERIAL`, `E02_TRACE`, or `E03_SEAMS`. Whole-frame regeneration passed
off as an edit, simultaneous unrelated repairs, prompt rewrite without a
measured diagnosis, and an unrecorded reference are prohibited. Each returned
edit is independently adopted and added to the DAG before inspection.

Built-in output remains under `$CODEX_HOME/*` until adopted. It is not a
project asset. Only the first final flattened source to pass every pre-import
gate is copied atomically no-replace to the Mission-frozen product destination.

## Custody, provenance, privacy, and recovery

Mission freezes one literal initially absent workspace staging root outside
accepted-media directories and one append-only JSONL ledger. Root creation is
nonrecursive and no-replace. Every node records sequence, previous-record
hash, ID, kind, ordered parents, relative path, bytes, SHA-256, file identity,
and operation. Node IDs are append-only and cannot be reused. Every composite
names both raster parents and its exact mask parent. All retained nodes must
verify at handoff.

Hard custody limits are `16` files and `536,870,912` bytes. Guide manifests,
ledger, and acceptance JSON are control records; guide/raster/mask/derivative
nodes count toward retained files and bytes. A crash/cancellation/ambiguous
effect consumes its ordinal, records uncertainty, stops new effects, and
reconciles actual filesystem state before cleanup or continuation.

No credential is needed or accepted for built-in mode. Prompts, ledger,
reports, and commits may contain no secret, browser/profile/save content,
player evidence, answers, hidden lore, repository QA/screenshots, protected
PDF/training content, archives, old rejected pixels, opaque residuals, or
unrelated dirt. Existing accepted pixels are not input references in v1.

Before selection, rejected stochastic rasters may be identity-deleted only
after their rejection vector is recorded and the exact file identity is
reproved; parents needed by a retained derivative stay immutable. Guides and
evidence remain through Intelligence or a typed hold. Final cleanup enumerates
only ledger-owned literal paths, proves containment and identities, removes
leaves before parents, removes the root only when empty, and records residual
count zero. No glob or broad recursive delete is authorized.

## Deterministic transform allowlist

`FRM15_MEDIA_TRANSFORM_v1.py` permits only:

1. normalize: decode, recognized embedded-profile conversion to sRGB, alpha
   flatten against fixed `#000000`, centered Lanczos cover resize/crop to
   `3840x2160`, metadata stripping, RGB PNG encoding; and
2. composite: exact binary `0/255` mask selection between two already
   normalized `3840x2160` parents, followed by the same clean RGB PNG encode.

Every transform creates a new file and DAG node. At most one composite may be
used, and only when two parents each independently pass different physical
regions and the binary mask follows a frozen guide/process boundary. Crop may
not remove a hard failure; composite may not duplicate, clone, repaint,
generate, or invent missing meaning. Repeated normalization of unchanged input
must be byte-identical. Final output is strict PNG, RGB, `3840x2160`, opaque
8-bit sRGB intent, with no forbidden metadata. The selected PNG is
`1..30,000,000` bytes.

## Physical, adversarial, responsive, and accessibility gates

After technical/ledger PASS, a private reviewer who did not author the current
prompt records a conjunctive Boolean/count vector from the flattened pixels:

- low nonhuman concave face; continuous dry foreground; lateral receded water;
- three processes identifiable by physical construction evidence, not color;
- horizontal and vertical overlap and at least two interlocks/islands for
  foundation/repair, foundation/service skin, and repair/service skin;
- one continuous irregular mineral trace crossing all three with three visibly
  different substrate reactions;
- at least three upward unequal nonparallel recessed seams and one branch or
  merge; and
- zero barrier/impoundment, human civil/service hardware, natural-geology or
  biological substitution, writing/UI/answer/message/response, protagonist,
  guide-palette/line/mask/label/legend, glow/activation, reward/access, or world
  change cues.

One failed item is a hard rejection. Prompt language, guide structure, registry
rectangles, alt/copy, and generator self-assessment cannot rescue it. Source
geometry for relation, dry approach, three processes, pairwise contacts,
trace/reactions, waterline, seams, target/center/anchor, and protected regions
must then be derived from visible pixels and pass displacement/removal,
one-box-alias, color-only, guide-leak, center-crop, crop-shift, and mask-edge
adversaries.

The existing six layouts remain exact: `1920x1080`, `1366x768`, `390x844`,
`768x900` effective `200%`, retained `320x180`, and retained `320x240`.
Relation retention is `>=.95`; every essential center is visible; target is
contained and `>=44x44` CSS px; physical center is inside target; label is
contained with `>=8px` focus separation; protected overlap is zero. A mutation
must reduce retention by `>.05`, hide a center, shrink the target, or create
protected overlap and be rejected.

Keyboard, pointer, touch, semantic/switch-like click share one action; held or
duplicate activation does not dispatch twice. Visible focus, deterministic
return, announcement, narrow/effective-200% reflow, forced-color containment,
reduced-motion parity, no outer horizontal escape, and non-color/non-sound/
non-motion equivalence remain required. Copy may describe only passing visible
facts and uncertainty. It cannot supply missing image meaning or learning
evidence. A human assistive-technology usability study remains unavailable and
is not claimed.

## State, learning, save, offline, and fallback

The two released lessons, order, thresholds, actual-gap remediation, fresh
transfer, explanation, close/Escape, reopen/reload/resume/return, privacy
allowlists, fail-closed sanitation, Demo Tour isolation, no-exam/no-authority
language, and equal ending remain byte/behavior authoritative. LOOK is
write-free, TALK is complete nonresponse, and USE opens only the first
incomplete owned lesson after source, predecessor, geometry, layout, and decode
guards pass. The world never answers, moves, rewards, opens, identifies,
approves, or remembers.

Combat must migrate the closed attempt schema to `horizon.waterline-ledger.v2`
and exact source identity `FRM15-A01`, with provenance schema
`horizon.first-run.frm15-source-provenance.v1`. Absent, disabled, malformed,
stale, wrong-path, wrong-ID, hash/byte/format/decode/provenance mismatch,
missing geometry, or invalid layout remains hidden and leaves the two generic
launchers active. Source identity and production metadata never persist in the
player save. No new dependency, service worker, runtime fetch, SDK, Python/
WASM runtime, endpoint, source map, audio, video, font, or remote request is
permitted.

## Performance, PBA, and exact evidence economics

The selected source and product retain the predecessor budgets:

```yaml
selected_png_bytes: 1..30000000
accepted_media_after_import: exactly_25_files_and_at_most_184163567_bytes
decoded_rgba_working_set: <=33177600
custody_retained_files: <=16
custody_retained_bytes: <=536870912
javascript_bytes: <=1785000
css_bytes: <=122000
production_modules: <=236
source_maps: 0
emitted_runtime_files: 28
emitted_runtime_media: 25_exact_accepted_hashes
runtime_requests: local_only_one_new_selected_raster_zero_remote
source_activation_ms: <=1500
sampled_main_thread_task_ms: <=50
runtime_errors_or_unhandled_rejections: 0
```

Science does not authorize reuse of the path-locked `FRPBA-014-v1` script as
final FRM15 proof. Mission must require Combat to create a minimal FRM15 PBA
overlay with the new exact destination and manifest identity while preserving
all numeric caps. The accepted 24-file manifest may be reused by exact hash.

No verifier-relevant product input changed at Science. Therefore focused
`31/31`, related `63/63`, full `1047/1047`, validators `40/40`, builds
`234/57`, and null-first PBA are `REUSED` from `FRCE-014-v1`, not rerun. Fresh
Science proof consists only of schema/control identities and isolated
synthetic self-tests: guide base PASS, four adversarial guide mutations
rejected, stable guide hashes; custody adoption/chain PASS and byte mutation
rejected; normalization/composite PASS, byte-deterministic repeat, and
nonbinary mask rejected. No product test/build/validator/browser/E2E or image
call ran.

After product/config/test inputs change, use the cheapest affected rung:
guide/control self-tests -> focused source/registry/projection tests -> affected
related route/lesson/save/privacy tests -> one cold full suite -> validators
only if curriculum inputs or integration contract changed -> production and
fixture builds/PBA -> served identity -> six-layout Edge -> one clean-start
E2E. Intelligence keeps one fresh exact-candidate holdout. Do not rerun a rung
on unchanged hashes merely because ownership changes.

## Finite budget and stop law

```yaml
budget:
  guide_families: {hard_max: 2, initially_authorized: 1}
  stochastic_calls:
    hard_max: 6
    initial: 3
    earned_extension: 2
    near_pass_reserve: 1
    concurrency: 1
    outputs_per_call: 1
  deterministic_operations:
    hard_max: 12
    guide_build_validation: 4
    normalize_composite: 8
  private_inspections:
    search: 6
    selected_reconciliation: 1
    intelligence_holdout: 1
  retained: {files: 16, bytes: 536870912}
  final_proof: FULL_PROTECTED
```

Initial calls are one base plus at most two single-group edits. The two-call
extension is earned only if a candidate improves the search-best hard vector
without regression and the next edit has one predicted localized effect. The
last call is reserved for a candidate with exactly one localized hard defect
and every other gate passing. A second guide family must change structural or
material representation, not prompt wording, color, crop, or seed.

Search-best ordering is lexicographic: fewer hard physical failures; more
complete mandatory groups; better six-layout vector; private preference only
after all hard gates tie. Deadband is unchanged hard codes, unchanged mandatory
group count, retention delta `<.02`, target delta `<2px`, unchanged center and
protected-overlap counts. Two equivalent failures require new causal diagnosis.
Three non-improving same-family iterations force `REPLAN`, owner return, or
typed stop; an equivalent fourth is barred. First complete release-quality PASS
stops search. `STOP_LOW_MARGINAL_VALUE` applies when no new localized mechanism
has positive expected player value. Any hard budget, identity, custody,
privacy, canon, accessibility, cleanup, or residual ambiguity stops before
another effect.

## Rollback and Mission handoff

Before import, rollback deletes only identity-proved ledger-owned candidates
and leaves product/media unchanged. After import, use dedicated product-bearing
commits and ordinary `git revert` in reverse order; never reset/check out user
files. Restore the null-first registry and exact generic launchers. Accepted
originals and unrelated worktree changes are immutable.

```yaml
convergence_handoff:
  mode: DESIGN_to_MIGRATE
  state_version_read: FRLS-OPS-002-v1
  state_version_written: FRLS-SCI-004-v1
  current_ref: FRWO-015-v1 / FRCE-014-v1_null_first@b4444afefe624ff231d986933a56c2003c0d8ac5
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  binding_gap_or_hypothesis: deterministic topology/material/protection guides plus bounded built-in reference rendering and local edits can preserve low topology and constructed-process causality jointly
  action_kind: information
  predicted_effect: Mission can freeze one conflict-free executable shell with exact guides, prompts, custody, transforms, budgets, gates, cleanup, and rollback
  verifier_vector:
    exact_guide_schema_and_builder: PASS_SELF_TESTED
    material_process_and_adversarial_structure: PASS_SELF_TESTED
    built_in_generation_edit_path: VIABLE_NO_CALL
    returned_path_custody_and_append_only_dag: PASS_SELF_TESTED
    deterministic_normalization_composite: PASS_SELF_TESTED
    physical_responsive_accessibility_release_candidate: NOT_STARTED
    product_media_maturity_delta: ZERO
    product_test_evidence: REUSED_FRCE_014
  delta_vs_best: zero_product_zero_media_zero_maturity_positive_mechanism_and_verifier_information
  budget_used:
    guide_families: 0
    stochastic_calls: 0
    deterministic_media_operations: 0
    private_candidate_inspections: 0
    product_tests_builds_browser_e2e: 0
  budget_remaining:
    guide_families: 2
    stochastic_calls: 6
    deterministic_media_operations: 12
    private_inspections: 8
    final_proof: FULL_PROTECTED
  remaining_uncertainty:
    - actual built-in output path, dimensions, format, and guide adherence
    - final physical meaning and independent private classification
    - source geometry and six-layout corroboration
    - future exact product candidate and Intelligence release
    - human assistive-technology usability study
  decision: GATHER_EVIDENCE
  next_owner: mission_captain
```

Science signature:
**`POLISH VIABILITY READY / FRVE-015-v1 / MISSION SHELL REQUIRED`**.

Mission must independently verify all frozen hashes and self-tests, freeze
literal custody/final paths and exact tool reference ordering, select the
initial three-call graph, resolve whether the third guide fits the built-in
input contract, freeze the FRM15 namespace/PBA migration and proof cascade,
and issue one versioned `FIRST RUN SHELL READY` or return. Mission may not
build/view a guide, call `image_gen`, inspect media, import, change product, or
authorize Image Specialist before the production sequence.
