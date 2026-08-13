# FIRST RUN SHELL VARIANCE / FRSH-015-v1-VR-01

## Disposition and identity

`FIRST RUN SHELL READY / ONE NO-EFFECT TRANSPORT RETRY / QUARTERMASTER NEXT`

Mission return stage: `mission_captain` / `DEBUG -> OPERATE`.

```yaml
variance: FRSH-015-v1-VR-01
governing_shell: FRSH-015-v1
work_order: FRWO-015-v1
quartermaster_return: FRCA-015-v1
state_read: FRLS-QM-003-v1
state_written: FRLS-MSN-006-v1
source_commit_read: 1f767b56eec7bab9235b2751920c10a3ad24826a
current_product: FRCE-015-v1_null_first@398a64131fa804223cfbdfc88f2865242bb3e02a
best_and_committed: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
authorized_effect: FRM15-C03-R1_once
next_owner: quartermaster
```

This variance supersedes only the `FRCA-015-v1` conclusion that the no-effect
`C03` transport failure prohibits a retry and forces representation replan.
Every guide, prompt, reference order, custody, physical, adversarial, layout,
accessibility, product, cleanup, rollback, no-reveal, and release clause in
`FRSH-015-v1` remains exact.

## Narrow failure classification

Mission accepts the recorded evidence:

- `C01` returned one candidate.
- The exact `C02` single-group material edit returned a candidate and produced
  verified representation improvement without regressing the already passing
  dry foreground, lateral water, or anti-message/answer/reward dimensions. It
  is the recorded search-best even though it remains a hard rejection.
- The exact `C03` E02 single-group edit failed at the network transport layer
  after approximately `4.4s`.
- Exact known-output reconciliation found no artifact or ambiguous external
  effect. No custody node, private inspection, candidate vector, source,
  import, or product effect exists for `C03`.

`C03` consumed its launched stochastic-call ordinal and cost slot, but it did
not produce an observation of the representation strategy. It therefore is
not evidence of improvement, non-improvement, plateau, or strategy failure.
Under `FRCV-001-v1`, an independently reconciled no-effect transient failure
may receive one identical bounded `RETRY`. Treating it as `C04`, an earned
representation iteration, would corrupt the progress trace; treating it as a
same-family non-improvement would invent evidence that does not exist.

Mission therefore authorizes exactly one replacement attempt, `C03-R1`. This
is not a prompt revision, strategy change, guide-family change, budget increase,
earned call, reserve call, or retry precedent.

## Frozen retry identity

Before launch, Quartermaster must restore the exact recorded `C02` search-best
bytes to their original custody leaf because rejected custody rasters were
identity-deleted after the hold. Restoration is custody reconciliation, not a
new stochastic or deterministic-media operation:

```yaml
restoration_source: exact_built_in_tool_return_path_recorded_for_C02_only
restoration_destination: C:\Users\marti\OneDrive\Desktop\Horizon Archive\Production Pipeline\First Run\FRM15_CUSTODY_WORK_v1\E01\FRM15-E01.png
expected_bytes: 2714889
expected_sha256: 554e87aeaa83e94d37658b00857feded6ce048fc4394b47a161194d69261332e
expected_existing_ledger_node: FRM15-E01_sequence_5
```

The source must still be the exact ordinary, single-link, nonreparse local file
returned for `C02`; its recorded file identity, bytes, and SHA-256 must reconcile.
Quartermaster may not search unrelated output roots or substitute another
candidate. Use the frozen custody `adopt` create-new operation, do not append a
duplicate node, then run the exact ledger verifier. It must return the original
five nodes, `5,491,701` retained node bytes, and ledger SHA-256
`087d59a0c4e893078f41abd0ea297943b821027d5717d29a84416280d820b5b6`.
If exact restoration or verification fails, record `HOLD / RETRY INPUT
UNAVAILABLE`; do not call `image_gen`.

The only executable stochastic request is:

```yaml
call: FRM15-C03-R1
classification: RETRY_NO_EFFECT_TRANSPORT_REPLACEMENT
tool: image_gen.imagegen
prompt_file: C:\Users\marti\OneDrive\Desktop\Horizon Archive\Production Pipeline\First Run\FRM15_PROMPT_E02_TRACE_v1.txt
prompt_bytes: 1238
prompt_sha256: 2c759d0c29a1c42218fd96e5005e2444a69b0bddcd5998f6667119ce5d9f2445
prompt: exact_UTF-8_file_text_no_augmentation
referenced_image_paths:
  - C:\Users\marti\OneDrive\Desktop\Horizon Archive\Production Pipeline\First Run\FRM15_CUSTODY_WORK_v1\E01\FRM15-E01.png
  - C:\Users\marti\OneDrive\Desktop\Horizon Archive\Production Pipeline\First Run\FRM15_CUSTODY_WORK_v1\G01\FRM15-G01-STRUCT.png
  - C:\Users\marti\OneDrive\Desktop\Horizon Archive\Production Pipeline\First Run\FRM15_CUSTODY_WORK_v1\G01\FRM15-G01-MAT.png
  - C:\Users\marti\OneDrive\Desktop\Horizon Archive\Production Pipeline\First Run\FRM15_CUSTODY_WORK_v1\G01\FRM15-G01-PROT.png
num_last_images_to_include: OMIT
concurrency: 1
requested_artifacts: 1
augmentation: forbidden
```

The first reference is the exact current-best and edit target. The three
guides remain immutable ordered references. No prompt, parent, reference,
ordering, guide, region, tool mode, output count, or invariant may change.

The replacement ordinal is consumed at launch. A successful tool-returned file
is adopted create-new under the exact new leaf
`FRM15_CUSTODY_WORK_v1\E02\FRM15-E02.png`, then appended as node
`FRM15-E02` with parents `FRM15-E01`, `FRM15-G01-STRUCT`, `FRM15-G01-MAT`,
and `FRM15-G01-PROT`. Its operation record names `FRM15-C03-R1`, this variance,
the exact prompt identity, ordered references, tool-return path identity, and
adoption hash before private inspection.

No result path is predicted. The tool must return an identity-provable absolute
local file. Ambiguous completion, URL/data-only return, missing/changed bytes,
or custody ambiguity is `STOP_SAFETY`, never a retry.

## Budget and progression law

```yaml
stochastic_hard_max: 6
before_retry_launch: {used: 3, remaining: 3}
after_retry_launch: {used: 4, remaining: 2}
representation_observations_before_retry: 2
representation_observations_after_successful_artifact: 3
C03_original: consumed_call_but_zero_effect_zero_observation
C03_R1: replacement_observation_not_earned_progression_call
C04_C05: unavailable_until_C03_R1_private_vector_is_recorded
C06_near_pass_reserve: no_separate_capacity_beyond_hard_max
```

The hard maximum remains six. The retry does not restore the spent `C03` call
or add a seventh slot. After launch only two total slots remain. Those two may
be used as the normal earned extension only if the replacement candidate
strictly improves the frozen search-best vector without regressing a passing
hard dimension and each next edit has one localized predicted effect. If fewer
than two earned calls are used, one remaining slot may serve the pre-existing
near-pass rule; earned calls plus reserve may never exceed the same hard maximum
of six.

If `C03-R1` produces a candidate, the unchanged private technical and hard
visible-pixel vector decides:

- first complete pre-import PASS stops search and advances through the existing
  selected-source gates;
- verified strict improvement may unlock the existing earned continuation,
  subject to one diagnosed local edit per call;
- same/deadband or regressed evidence does not unlock earned continuation and
  returns `HOLD`, `REPLAN`, or `STOP_LOW_MARGINAL_VALUE`; and
- multiple hard defects bar the near-pass reserve.

If `C03-R1` has another network/transport failure or yields no adoptable
artifact after exact reconciliation, no second retry exists. Record `WAIT` only
for a specifically evidenced temporary service incident with preserved safe
state; otherwise record `HOLD / REPEATED TRANSPORT FAILURE`. Do not launch an
earned call as a substitute.

## Custody residual reconciliation

The two owned empty OneDrive leaf directories are explicitly carried:

```yaml
carried_empty_leaf_directories:
  - C:\Users\marti\OneDrive\Desktop\Horizon Archive\Production Pipeline\First Run\FRM15_CUSTODY_WORK_v1\R01
  - C:\Users\marti\OneDrive\Desktop\Horizon Archive\Production Pipeline\First Run\FRM15_CUSTODY_WORK_v1\E01
verified_children_each: 0_at_Mission_read
verified_file_bytes_each: 0_at_Mission_read
one_drive_attributes: ReadOnly_Directory_Archive_ReparsePoint
```

Mission performs no repeated deletion attempt. They are exact owned leaf
containers, contain no rejected raster bytes, do not count against the
retained-file or retained-byte ceilings, and are required safe state because
`E01` is the exact restoration destination. No recursive removal, attribute
rewrite, broad OneDrive action, or deletion through a reparse point is
authorized. Quartermaster rechecks exact emptiness/identity before restoration.
Final cleanup remains leaf-first and literal; inability to remove an empty
OneDrive container is recorded separately from raster residual count.

## Evidence reuse and protected boundaries

Mission freshly verified only the Quartermaster report/ledger/prompt identities,
Git state, and the two empty leaf containers. No verifier-relevant product input
changed after `FRCE-015-v1`. Combat's focused `13/13`, production build, and
null-first PBA remain reused; predecessor related/full/validators/fixture proof
remains reused under `FRSH-015-v1`. No tests, builds, validators, media views,
image calls, transforms, imports, browser, or E2E ran at Mission.

The v2 registry remains disabled/null, the exact generic launchers remain
active, accepted media remains `24 / 154,163,567`, and the committed release
remains best. No rejected candidate becomes a source; no product, lesson, save,
route, copy, ending, maturity, or accepted-media state changes from this
variance. Image Specialist remains unauthorized without a complete accepted
source. No candidate, encounter name, or media path is revealed to Martin.

## Exact Quartermaster handoff

Quartermaster reads `FRSH-015-v1`, this variance, `FRCA-015-v1`, the current
ledger, and `FRLS-MSN-006-v1`. It performs only:

1. exact frozen-control, Git, null-first, budget, guide, ledger, prompt, known-
   output, and empty-leaf preflight;
2. exact identity restoration of the C02 current-best to its existing ledger
   path and five-node ledger verification;
3. one sequential `FRM15-C03-R1` built-in call with the frozen request above;
4. on success, create-new adoption, append-only DAG record, and one normal
   private hard-vector inspection;
5. continue only under the unchanged first-PASS, verified-improvement, earned-
   extension, reserve, cleanup, import, and rollback laws; or
6. on repeat no-effect transport failure, reconcile known output and record
   typed `WAIT/HOLD` with no second retry.

```yaml
convergence_handoff:
  mode: DEBUG_to_OPERATE
  state_version_read: FRLS-QM-003-v1
  state_version_written: FRLS-MSN-006-v1
  current_ref: FRCE-015-v1_null_first@398a64131fa804223cfbdfc88f2865242bb3e02a
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  binding_gap_or_hypothesis: the frozen E02 edit has not yet produced an observation because C03 failed with reconciled zero effect
  action_kind: information
  predicted_effect: one identical replacement can test the already-diagnosed local edit without corrupting earned progression or widening strategy
  verifier_vector:
    C01_to_C02_representation_improvement: PASS_RECORDED
    C03_transport_failure: TRANSIENT_NO_EFFECT
    known_output_reconciliation: PASS_ZERO_ARTIFACT
    retry_equivalence: PASS_EXACT_PROMPT_TARGET_GUIDES_ORDER
    hard_budget: PASS_FOUR_OF_SIX_AFTER_LAUNCH
    second_retry: FORBIDDEN
    custody_empty_leaf_state: PASS_EXPLICITLY_CARRIED
    product_media_maturity_delta: ZERO
  delta_vs_best: zero_product_zero_media_zero_maturity_positive_retry_classification
  budget_used_before_launch:
    guide_families: 1
    stochastic_calls: 3
    deterministic_operations: 4
    private_candidate_inspections: 2
  budget_remaining_after_launch:
    stochastic_calls: 2
    deterministic_operations: 8
    private_candidate_inspections: 6
    final_product_and_release_proof: FULL_PROTECTED
  remaining_uncertainty:
    - exact C02 tool-original availability for identity restoration
    - replacement transport completion and candidate adherence
    - future source physical layout accessibility integration and release proof
  decision: RETRY
  next_owner: quartermaster
```

Mission signature:
**`FIRST RUN SHELL READY / FRSH-015-v1-VR-01 / C03-R1 ONCE / QUARTERMASTER NEXT`**.
