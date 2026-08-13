# Horizon Archive First Run Loop State

State ID: `FRLS-OPS-001-v1`

Control: `FRCV-001-v1`

Status: **DESIGN / WORK ORDER READY / SCIENCE PENDING**

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
  shell: null
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
  accepted_media_count: 24
  accepted_media_bytes: 154163567
  remaining_missing_physical_encounters_at_current_address: 2
  user_authorized_generation_call_pool: 32
unknown:
  - exact source/generator/transport and physical feasibility
  - responsive, accessibility, cleanup, PBA, and verifier thresholds
  - Viability Envelope and shell identity
  - future production candidate and independent release proof
```

## Action and authority state

```yaml
active_mode: DESIGN
active_owner: office_of_science_administrator
information_actions_allowed:
  - inspect current authorities, exact release candidate, runtime, controls, and non-QA evidence
effect_actions_allowed_before_shell:
  - versioned planning and control artifacts only
prohibited_before_shell:
  - generation or external media call
  - image or runtime media mutation
  - product implementation
  - later-address selection
  - maturity advancement
```

## Potential and budget

```yaml
potential:
  hard_failures: 0_observed_at_commandant_gate
  selected_encounter_missing: 0
  continuity_lock_ready: true
  work_order_ready: true
  source_feasibility_unknown: true
  shell_ready: false
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
active_strategy_family: viability_hardening_for_one_bounded_physical_host
rejected_strategy_families: []
continuation_reason: FRWO-014-v1 closes ordering and scope uncertainty; Science is the least-powerful sufficient information action because source, transport, verifier, cleanup, and economic feasibility remain unknown
decision: GATHER_EVIDENCE
next_owner: office_of_science_administrator
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

No later stage may begin until Science answers the exact questions in
`FRWO-014-v1`, issues one validated viability handoff, and updates this state
without weakening the immutable contract edge. No generation call, product or
media action, Mission shell, or maturity advancement exists yet.
