# FIRST RUN SHELL VARIANCE / FRSH-015-v1-VR-02

## Disposition and identity

`FIRST RUN SHELL READY / EXACT C01+C02 CUSTODY RESTORATION / C03-R1 STILL ONCE / QUARTERMASTER NEXT`

Mission custody-return stage: `mission_captain` / `DEBUG -> OPERATE`.

```yaml
variance: FRSH-015-v1-VR-02
governing_shell: FRSH-015-v1
retry_variance: FRSH-015-v1-VR-01
quartermaster_return: FRCA-015-v2
state_read: FRLS-QM-004-v1
state_written: FRLS-MSN-007-v1
source_commit_read: 1d7c792581b5d0c5936e10c329b189c9e5483df9
current_product: FRCE-015-v1_null_first@398a64131fa804223cfbdfc88f2865242bb3e02a
best_and_committed: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
authorized_custody_effect: restore_exact_C01_then_exact_C02
authorized_stochastic_effect_after_full_verification: FRM15-C03-R1_once
next_owner: quartermaster
```

This variance supersedes only the `VR-01` retry-input restoration procedure.
The retry identity, exact E02 prompt, exact C02 edit target, ordered G01
references, call budget, progression semantics, no-second-retry rule, physical
and accessibility gates, null-first rollback, cleanup, and no-reveal boundary
remain unchanged.

## Exact recorded C01 reconciliation

Quartermaster reported that `VR-01` restored the exact C02 tool original but
the frozen five-node verifier failed only because the previously authorized-
deleted C01 custody parent was physically absent. Mission performed one
read-only check at the exact C01 path already observed in the original built-in
tool return. No parent directory listing, discovery, glob, filename search, or
alternate output-root access occurred.

```yaml
C01_recorded_tool_original:
  path: C:\Users\marti\.codex\generated_images\019ffc1c-2ec5-76c3-bdef-774dda661947\exec-bd43d816-603d-4573-a334-4fe6650c7d89.png
  bytes: 2744979
  sha256: 518393d52bc0671c98838cca5f70c912d441e1bec3618eabfa6b9edbb04c6e9d
  device: 6349111972173417248
  inode: 8162774325155779
  links: 1
  ordinary_file: true
  symlink: false
  reparse: false
  attributes: Archive
  disposition: PASS_EXACT_RECORDED_IDENTITY
C01_existing_ledger_node:
  node_id: FRM15-R01
  sequence: 4
  custody_relative_path: R01/FRM15-R01.png
  expected_bytes: 2744979
  expected_sha256: 518393d52bc0671c98838cca5f70c912d441e1bec3618eabfa6b9edbb04c6e9d
```

Because the exact original exists and matches every recorded source-identity
field, Science's unchanged append-only DAG can be restored without a tombstone,
new verifier, missing-parent exception, manual raster recreation, or provenance
weakening. No Science return is required. The alternative tombstone branch is
closed and unauthorized by this variance.

## Closed restoration procedure

Quartermaster may operate only on the exact two recorded tool originals and
their existing custody paths. It must not inspect pixels, search other output
roots, append duplicate nodes, modify the ledger, substitute an equivalent
file, or recreate raster bytes.

1. Recheck the literal C01 source above with the frozen
   `safe_regular_file` semantics. Require exact path, bytes, SHA-256, device,
   inode, links `1`, ordinary-file, non-symlink, and nonreparse identity.
2. Require the exact owned `R01` leaf to exist and be empty. Restore C01
   create-new with the frozen custody `adopt` command:

```powershell
python 'C:\Users\marti\OneDrive\Desktop\Horizon Archive\Production Pipeline\First Run\FRM15_CUSTODY_DAG_v1.py' adopt --source 'C:\Users\marti\.codex\generated_images\019ffc1c-2ec5-76c3-bdef-774dda661947\exec-bd43d816-603d-4573-a334-4fe6650c7d89.png' --destination 'C:\Users\marti\OneDrive\Desktop\Horizon Archive\Production Pipeline\First Run\FRM15_CUSTODY_WORK_v1\R01\FRM15-R01.png'
```

3. Recheck the exact previously recorded C02 tool-original identity from
   `FRCA-015-v2`: `2,714,889` bytes, SHA-256
   `554e87aeaa83e94d37658b00857feded6ce048fc4394b47a161194d69261332e`,
   device `6349111972173417248`, inode `11821949022134913`, links `1`, ordinary,
   non-symlink, nonreparse. Require the exact owned `E01` leaf to be empty and
   restore it create-new to:

```text
C:\Users\marti\OneDrive\Desktop\Horizon Archive\Production Pipeline\First Run\FRM15_CUSTODY_WORK_v1\E01\FRM15-E01.png
```

Use only the exact C02 source path already recorded in the Quartermaster tool
return and successfully reconciled under `FRCA-015-v2`. No search is allowed.

4. Do not append either node. Run the unchanged verifier over the immutable
   ledger and custody root. It must return exactly:

```yaml
pass: true
nodes: 5
retained_node_bytes: 5491701
ledger_sha256: 087d59a0c4e893078f41abd0ea297943b821027d5717d29a84416280d820b5b6
errors: []
```

It must also preserve the three exact G01 guide identities. Any absence,
mismatch, source identity change, destination preexistence, adoption mismatch,
ledger-chain change, extra/missing node, retained-byte difference, link/reparse
condition, or ambiguous result records `HOLD / CUSTODY RESTORATION FAILED`.
In that state, identity-clean only a newly restored leaf whose exact adoption
identity is proven; do not call `image_gen` and do not construct a tombstone.

## Retry authority unchanged

Only after the exact five-node PASS above does the already-authorized
`FRM15-C03-R1` become executable. Its request remains byte-for-byte and path-
for-path identical to `VR-01`:

- exact `FRM15_PROMPT_E02_TRACE_v1.txt`, `1,238` bytes, SHA-256
  `2c759d0c29a1c42218fd96e5005e2444a69b0bddcd5998f6667119ce5d9f2445`;
- exact restored `FRM15-E01` as current-best/edit target;
- exact ordered structure, material-ID, and protection G01 references;
- built-in `image_gen.imagegen`, one artifact, sequential, no augmentation;
- no CLI, batch, hidden retry, alternate target, prompt, guide, order, or tool;
  and
- successful output adopted create-new as the already frozen `FRM15-E02`
  node before one normal private hard-vector inspection.

The hard stochastic maximum remains six. `C03-R1` consumes total call `4/6`
at launch and remains the one replacement observation for the original C03
zero-effect transport failure. It is not an earned call. No second retry
exists. A repeated transport/no-artifact result receives `WAIT/HOLD`; a
candidate follows the unchanged strict-improvement, earned-extension, reserve,
first-PASS, selection, import, cleanup, and rollback laws.

## Evidence reuse and protected state

Mission used only Git/control text, the immutable ledger, filesystem metadata,
and streamed SHA-256 at the one literal C01 path. Mission did not open or view
the raster, access the C02 source, alter custody, run a verifier/test/build,
invoke image generation, inspect media, transform/import media, or run browser/
E2E. Product bytes remain unchanged after Combat; the v2 registry remains
disabled/null; accepted media remains `24 / 154,163,567`; generic rollback is
active; final proof remains fully protected.

Combat's focused `13/13`, production build, and null-first PBA and all unchanged
predecessor related/full/validator/fixture evidence remain reused. No candidate,
encounter name, or media path is revealed to Martin. Image Specialist remains
unauthorized without a complete accepted source.

## Exact Quartermaster handoff

Quartermaster reads `FRSH-015-v1`, `VR-01`, this variance, `FRCA-015-v2`, the
unchanged ledger, and `FRLS-MSN-007-v1`. It performs exact known-path C01 and
C02 identity rechecks/restoration, proves the five-node chain, and only then
executes the already-authorized `C03-R1` once. It returns the normal candidate
vector or a typed custody/transport hold. It may not create a tombstone,
weaken/replace the verifier, search generated-image roots, append duplicate
ancestor nodes, launch a second retry, or spend an earned call before the
replacement vector permits it.

```yaml
convergence_handoff:
  mode: DEBUG_to_OPERATE
  state_version_read: FRLS-QM-004-v1
  state_version_written: FRLS-MSN-007-v1
  current_ref: FRCE-015-v1_null_first@398a64131fa804223cfbdfc88f2865242bb3e02a
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  binding_gap_or_hypothesis: five-node retry custody is restorable from both exact immutable tool originals
  action_kind: information
  predicted_effect: exact parent restoration allows the unchanged verifier to prove complete ancestry before the one retry
  verifier_vector:
    C01_literal_path_exists: PASS
    C01_bytes_sha_device_inode_links: PASS_EXACT
    C01_ordinary_nonlink_nonreparse: PASS
    C02_exact_restoration: PASS_RECORDED_FRCA_015_v2
    full_five_node_chain: REQUIRED_BEFORE_CALL
    tombstone_or_new_verifier: NOT_REQUIRED_FORBIDDEN
    retry_request_and_budget: UNCHANGED_C03_R1_ONCE_4_OF_6_AFTER_LAUNCH
    product_media_maturity_delta: ZERO
  delta_vs_best: zero_product_zero_media_zero_maturity_positive_custody_availability_information
  budget_used_before_retry:
    guide_families: 1
    stochastic_calls: 3
    deterministic_operations: 4
    private_candidate_inspections: 2
  budget_remaining_after_retry_launch:
    stochastic_calls: 2
    deterministic_operations: 8
    private_candidate_inspections: 6
    final_product_and_release_proof: FULL_PROTECTED
  remaining_uncertainty:
    - successful two-parent restoration and full verifier result
    - replacement transport completion and candidate vector
    - future source integration accessibility and independent release proof
  decision: CONTINUE
  next_owner: quartermaster
```

Mission signature:
**`FIRST RUN SHELL READY / FRSH-015-v1-VR-02 / RESTORE EXACT C01+C02 / C03-R1 ONCE / QUARTERMASTER NEXT`**.
