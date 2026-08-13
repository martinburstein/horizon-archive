# Horizon Archive First Run Loop State

State ID: `FRLS-MSN-007-v1`

Control: `FRCV-001-v1`

Status: **FIRST RUN SHELL READY / EXACT C01+C02 CUSTODY RESTORATION / QUARTERMASTER NEXT**

`NEXT_INSTANCE_HANDOFF.md` remains the sole exact-next-action authority.

```yaml
contract:
  shell: FRSH-015-v1
  retry_variance: FRSH-015-v1-VR-01
  custody_variance: FRSH-015-v1-VR-02
  work_order: FRWO-015-v1
  hard_constraints:
    - restore only exact recorded C01 and C02 tool originals to existing ledger paths
    - unchanged five-node verifier must pass before C03-R1
    - no tombstone new verifier manual recreation discovery search or duplicate node
    - C03-R1 exact same request once total calls 4/6 after launch no second retry
    - preserve null-first generic rollback and all canon lesson privacy accessibility ending no-reveal boundaries
state:
  source_control_read: 1d7c792581b5d0c5936e10c329b189c9e5483df9
  current_ref: FRCE-015-v1_null_first@398a64131fa804223cfbdfc88f2865242bb3e02a
  current_product_tree: 066077823b780ba83c5e71e7b478d117f3761dcc
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  active_owner: quartermaster
  controller_state: CONTINUE
custody:
  ledger_sha256: 087d59a0c4e893078f41abd0ea297943b821027d5717d29a84416280d820b5b6
  retained_now: G01_four_files_32541_bytes
  C01_tool_original: PASS_EXACT_PATH_BYTES_SHA_DEVICE_INODE_LINKS_ORDINARY_NONREPARSE
  C02_tool_original: PASS_EXACT_RESTORATION_FRCA_015_v2
  restoration_order: C01_then_C02_then_full_verify
  required_verifier: five_nodes_5491701_bytes_same_ledger_hash_zero_errors
  tombstone_branch: CLOSED_NOT_REQUIRED
representation:
  guide_family: G01_BUILT_VERIFIED_RETAINED
  search_best: FRM15-E01_REJECTED_BUT_VERIFIED_IMPROVEMENT
  retry: FRM15-C03-R1_EXACT_ONCE_AFTER_CUSTODY_PASS
  selected_source: null
  runtime: v2_disabled_null_generic_fallback
evidence:
  fresh:
    - exact C01 literal tool path exists
    - C01 bytes hash device inode links ordinary nonlink nonreparse all match ledger source identity
    - C02 exact source restoration previously succeeded
    - both ancestors can use unchanged create-new adoption and existing ledger verifier
  reused:
    - FRSH-015-v1 and VR-01 request budget gates cleanup rollback
    - FRCE-015-v1 focused 13/13 production build null-first PBA
    - predecessor related 63/63 full 1047/1047 validators 40/40 fixture build 57
  not_run:
    - custody restoration verifier tests builds media views imagegen transforms imports browser E2E
budgets:
  guide_families: {used: 1, hard_max: 2}
  stochastic_calls_before_retry: {used: 3, remaining: 3}
  stochastic_calls_after_retry_launch: {used: 4, remaining: 2, hard_max: 6}
  deterministic_operations: {used: 4, remaining: 8}
  private_candidate_inspections: {used: 2, remaining: 6}
  final_proof: FULL_PROTECTED
stops:
  - any exact source/restoration/five-node mismatch holds before imagegen
  - repeated transport or no artifact yields WAIT/HOLD no second retry
  - deadband or regression does not earn continuation
  - first complete PASS stops
decision: CONTINUE
decision_evidence:
  - exact missing parent original is available with full identity match
  - existing Science verifier remains sufficient and stronger than a deletion exception
  - retry action and hard budgets remain unchanged
next_owner: quartermaster
```

Exact Quartermaster action: restore exact C01 and C02 tool originals create-new
to their existing ledger paths, prove the unchanged five-node chain, then and
only then launch the already-authorized exact `FRM15-C03-R1` once. Any custody
mismatch holds before launch; another no-effect transport failure ends retry.
