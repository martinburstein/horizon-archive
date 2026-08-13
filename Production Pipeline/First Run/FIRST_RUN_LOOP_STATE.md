# Horizon Archive First Run Loop State

State ID: `FRLS-MSN-001-v1`

Control: `FRCV-001-v1`

Status: **OPERATE ENABLED / FIRST RUN SHELL READY / RECON PENDING**

This compact state is resumable diagnostic control. It does not authorize work;
`NEXT_INSTANCE_HANDOFF.md` remains the sole exact-next-action authority.

## Immutable contract edge

```yaml
spec_version: NEXT_INSTANCE_HANDOFF-2026-08-13
workflow: FIRST_RUN_AGENT_WORKFLOW.md
committed_release:
  disposition: FIRST RUN PASS RELEASED
  package: FRAB-013-v1
  commit: 357ad6dc4184b74150173504e86e366c761cdc0e
best_verified_product_state:
  package: FRAB-013-v1
  commit: 357ad6dc4184b74150173504e86e366c761cdc0e
current_product_state:
  package: FRAB-013-v1
  commit: 357ad6dc4184b74150173504e86e366c761cdc0e
target:
  goal: one earliest missing physical encounter through independent release after guarded planning gates
  selected_address: FR-03 / Host 14
  work_order: FRWO-014-v1
  shell: FRSH-014-v1
```

## Hard constraints

- Run one fresh role at a time in the canonical eleven-role order.
- No production or media action exists before all five planning gates and one
  versioned `FIRST RUN SHELL READY` contract.
- Preserve accepted media `24 / 154,163,567`, all OPEN records, protected user
  state, hidden-lore exclusion, opaque residual roots, RP-012, equal ending
  dignity, and `successor=null`.
- Never inspect, restore, stage, or use repository QA screenshots.
- Do not reveal released encounter names or image paths to Martin.
- Preserve unrelated working-tree changes and untracked user material.
- Stop the selected encounter at its first release-quality PASS.

## Observable current state

```yaml
observed:
  source_candidate_exists: true
  source_candidate_on_main: true
  current_release_map: FRRM-014-v1
  current_scoreboard: FRSB-014-v1
  current_baseline: FRPB-001-v12
  current_continuity_lock: FRCL-014-v1
  current_work_order: FRWO-014-v1
  current_viability_envelope: FRVE-014-v1
  current_shell: FRSH-014-v1
  accepted_media_manifest: FRAM-014-v1
  custody_control: FRFC-014-v1
  pba_control: FRPBA-014-v1
  accepted_media_count: 24
  accepted_media_bytes: 154163567
  remaining_missing_physical_encounters_at_current_address: 2
  user_authorized_generation_call_pool: 32
  selected_host14_source_candidate_exists: false
  generator_dry_run: PASS_NO_CALL
  initial_prompt_identities: 8_FROZEN
unknown:
  - future source bytes, transport result, and private physical review
  - future candidate responsive, accessibility, performance, and holdout evidence
  - future production candidate and independent release proof
```

## Action and authority state

```yaml
active_mode: OPERATE
active_owner: reconnaissance_sergeant
information_actions_allowed:
  - inspect shell-owned authorities, released predecessor behavior, visual/surface controls, and non-QA evidence
effect_actions_allowed:
  - only the role-owned actions, exact files, earned budgets, and stage order frozen by FRSH-014-v1
prohibited_until_named_owner_and_stage:
  - generation or external media call before Quartermaster and preflight
  - source selection/import before private technical/physical/responsive PASS
  - product implementation before Combat
  - runtime presentation work before Image Specialist
  - release or maturity advancement before Intelligence
  - later-address selection
```

## Potential and budget

```yaml
potential:
  hard_failures: 0_observed_at_commandant_gate
  selected_encounter_missing: 0
  continuity_lock_ready: true
  work_order_ready: true
  source_feasibility_contract_ready: true
  shell_ready: true
  production_candidate: null
  final_holdout_passed: false
budget:
  generation_calls_authorized: 32
  generation_calls_used_this_cycle: 0
  generation_calls_remaining: 32
  initial_earned_tranche_after_shell: 8
  earned_extension_increment: 4
  concurrent_roles: 1
  role_order: strict_sequential
  final_verification_reserve: full_post_selection_cascade_plus_independent_intelligence_holdout
best_state_policy: preserve FRAB-013-v1 until Intelligence releases a superior exact candidate
```

## Strategy and continuation

```yaml
active_strategy_family: sequential_shell_bounded_physical_host_release
rejected_strategy_families: []
continuation_reason: FRSH-014-v1 freezes the complete executable contract; Recon is the next least-powerful sufficient information action and cannot spend a call or change product/media
decision: GATHER_EVIDENCE
next_owner: reconnaissance_sergeant
```

## Commandant checkpoint

```yaml
commandant:
  baseline: FRPB-001-v12
  disposition: FIRST RUN VISION BASELINE REVALIDATED
  product_candidate: 357ad6dc4184b74150173504e86e366c761cdc0e
  method_control_commit_read: 256f1fc54ef8692b932db1e905de48d21ba32a22
  delta_vs_best: zero_product_zero_maturity_positive_information
  verifier_vector:
    exact_product_paths_vs_release: PASS
    product_subtree_identity: PASS
    focused_native_boundary: 6/6 PASS
    cold_full_suite: 1036/1036 PASS
    curriculum_readiness: 40/40 PASS
    production_build: 233_modules_PASS
    prior_release_holdout: FRAB-013-v1_PASS_not_rerun
  budget_used:
    generation_calls: 0
    product_effect_actions: 0
  remaining_uncertainty:
    - Colonel continuity classification
    - Operations encounter selection and Work Order
    - Science envelope and Mission shell
    - future production candidate and independent release proof
  decision: GATHER_EVIDENCE
  next_owner: colonel
```

## Colonel checkpoint

```yaml
colonel:
  continuity_lock: FRCL-014-v1
  disposition: CONTINUITY LOCK
  product_candidate: 357ad6dc4184b74150173504e86e366c761cdc0e
  delta_vs_best: zero_product_zero_maturity_positive_information
  verifier_vector:
    single_pedestrian_route: PASS
    physical_causality: PASS
    scene_pilot_suit_ownership: PASS
    machine_builder_silence: PASS
    current_lesson_ownership: PASS
    no_response_world: PASS
    rp012_equal_ending: PASS
    successor_null: PASS
    hidden_lore_exclusion: PASS
    earliest_unresolved_adjacency_classified: PASS
  budget_used:
    generation_calls: 0
    product_effect_actions: 0
  remaining_uncertainty:
    - Operations encounter confirmation and bounded Work Order identity
    - exact source feasibility, physical mapping, and responsive proof
    - Science viability envelope and Mission shell
    - future candidate and independent release proof
  decision: GATHER_EVIDENCE
  next_owner: operations_planning_major
```

## Operations checkpoint

```yaml
operations:
  work_order: FRWO-014-v1
  release_map: FRRM-014-v1
  scoreboard: FRSB-014-v1
  disposition: WORK ORDER READY
  selected_address: FR-03 / Host 14
  product_candidate: 357ad6dc4184b74150173504e86e366c761cdc0e
  current_ref: FRWO-014-v1_planning_state
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  binding_gap: >-
    The released rail is functionally complete, but immediately after the
    released last Drowned host it falls back to generic launchers instead of
    the fixed distinct dry deposition-band face for unchanged L06-01 and
    L06-02 ownership.
  action_kind: information
  predicted_effect: >-
    Science will prove or reject source, generator/transport, physical,
    responsive, accessibility, privacy/save, performance, cleanup, verifier,
    and economic viability before any shell or call exists.
  verifier_vector:
    earliest_first: PASS
    bounded_vertical_outcome: PASS
    predecessor_and_adjacency: PASS
    fixed_lesson_ownership: PASS
    released_generic_rollback: PASS_AT_PLANNING
    route_save_world_ending_invariants: PASS_AT_PLANNING
    source_feasibility: UNKNOWN_SCIENCE_OWNED
    candidate_and_release_proof: NOT_STARTED
  delta_vs_best: zero_product_zero_maturity_zero_media_positive_information
  budget_used:
    generation_calls: 0
    product_effect_actions: 0
    browser_or_e2e: 0
    planning_effect_actions: 4_intended_control_artifacts
  budget_remaining:
    generation_calls: 32
    initial_earned_tranche_after_shell: 8
    extension_increment: 4
    final_verification_reserve: PROTECTED
  plateau_policy: >-
    Two equivalent failures require fresh diagnosis; three same-family
    non-improving attempts force replan, owner return, or typed stop; first
    complete PASS stops all remaining calls.
  remaining_uncertainty:
    - exact source and invocation feasibility
    - physical measurement and independent future-candidate review
    - responsive/accessibility and runtime-fallback thresholds
    - PBA, fixture, cleanup, and final-holdout envelope
  decision: GATHER_EVIDENCE
  next_owner: office_of_science_administrator
```

## Science checkpoint

```yaml
science:
  viability_envelope: FRVE-014-v1
  disposition: POLISH VIABILITY READY
  product_candidate: 357ad6dc4184b74150173504e86e366c761cdc0e
  current_ref: FRVE-014-v1_planning_state
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  action_kind: information
  verifier_vector:
    official_source_currency: PASS_MICROSOFT_LEARN_ONLY
    generator_transport: PASS_DRY_RUN_NO_CALL
    initial_prompt_portfolio: 8_EXACT_IDENTITIES_PASS
    resource_and_pba_budgets: FROZEN
    temp_identity_cleanup_rollback: FROZEN
    physical_anti_gaming: FROZEN_CANDIDATE_UNKNOWN
    six_layout_accessibility: FROZEN_CANDIDATE_UNKNOWN
    null_first_generic_fallback: FROZEN_NOT_IMPLEMENTED
    state_privacy_save_offline: UNCHANGED_FROZEN
    final_holdout: NOT_STARTED
  delta_vs_best: zero_product_zero_maturity_zero_media_positive_information
  budget_used:
    generation_calls: 0
    product_effect_actions: 0
    browser_or_e2e: 0
    cli_dry_runs: 1
  budget_remaining:
    generation_calls: 32
    initial_tranche_after_shell: 8
    extension_increment: 4
    maximum_extensions: 6
    final_verification_reserve: PROTECTED
  remaining_uncertainty:
    - future source bytes and transport outcome
    - candidate pixel-level physical credibility and private review
    - integrated browser, accessibility, performance, cleanup, and holdout evidence
    - human assistive-technology usability study
  decision: GATHER_EVIDENCE
  next_owner: mission_captain
```

## Mission checkpoint

```yaml
mission:
  shell: FRSH-014-v1
  disposition: FIRST RUN SHELL READY
  product_candidate: 357ad6dc4184b74150173504e86e366c761cdc0e
  source_commit_read: 4822608811f6ca96b55718632ffd8568ac594566
  current_ref: FRSH-014-v1_planning_state
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  action_kind: information
  verifier_vector:
    planning_conflict: PASS_NONE
    shell_completeness: PASS
    prompt_generator_custody_identity: PASS_FROZEN_NO_CALL
    accepted_media_and_pba_control: PASS_FROZEN
    budget_plateau_stop_policy: PASS_FROZEN
    future_source_and_candidate: NOT_STARTED
    independent_release: NOT_STARTED
  delta_vs_best: zero_product_zero_maturity_zero_media_positive_information
  budget_used:
    generation_calls: 0
    product_effect_actions: 0
    media_actions: 0
    browser_or_e2e: 0
  budget_remaining:
    generation_calls: 32_hard_pool
    available_initial_tranche: 8
    extensions: 6_increments_of_4_earned_only
    final_verification_reserve: PROTECTED
  remaining_uncertainty:
    - future source bytes, transport, physical review, and measurement
    - future integrated responsive/accessibility/performance evidence
    - future exact candidate and independent release
    - human assistive-technology usability study
  decision: GATHER_EVIDENCE
  next_owner: reconnaissance_sergeant
```

Reconnaissance may now perform only its shell-bounded directorial information
stage. No generation call, source inspection/import, product/media/runtime
change, maturity advancement, or Tactical action exists before the named owner
and exact sequential gate in `FRSH-014-v1`.
