# Horizon Archive First Run Loop State

State ID: `FRLS-REC-002-v1`

Control: `FRCV-001-v1`

Status: **OPERATE / RECON DIRECTORIAL REPLAN READY / MISSION VARIANCE REQUIRED**

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
  shell: FRSH-014-v2
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
  current_viability_envelope: FRVE-014-v2
  current_shell: FRSH-014-v2
  current_player_experience_blueprint: FRPX-014-v1
  current_directorial_variance: FRCT-014-v1-VR-01
  accepted_media_manifest: FRAM-014-v1
  custody_control: FRFC-014-v2
  pba_control: FRPBA-014-v1
  accepted_media_count: 24
  accepted_media_bytes: 154163567
  remaining_missing_physical_encounters_at_current_address: 2
  user_authorized_generation_call_pool: 32
  selected_host14_source_candidate_exists: false
  quartermaster_report: FRCA-014-v2
  call_ledger: FRLG-014-v1
  h14_1_launch_consumed: true
  h14_1_technical_disposition: REJECT_FORMAT32BPPARGB_REQUIRES_FORMAT24BPPRGB
  h14_1_cleanup: PASS_EXACT_IDENTITY
  h14_2_disposition: TECHNICAL_PASS_PHYSICAL_FAIL_HUMAN_DAM
  h14_3_disposition: TECHNICAL_PASS_PHYSICAL_FAIL_HUMAN_DAM_AND_CROSSING
  h14_2_h14_3_cleanup: PASS_EXACT_IDENTITY
  corrected_opacity_self_test: PASS_RGB_RGBA_AND_ALPHA254_REJECTION
  generator_dry_run: PASS_NO_CALL
  initial_prompt_identities: 8_FROZEN_H14-4_THROUGH_H14-8_NOT_EXECUTABLE_AS_IS
unknown:
  - future source bytes, transport result, and private physical review
  - future candidate responsive, accessibility, performance, and holdout evidence
  - future production candidate and independent release proof
```

## Action and authority state

```yaml
active_mode: OPERATE
active_owner: mission_captain
information_actions_allowed:
  - Mission may inspect the current shell, Science envelope, Recon variance, Quartermaster evidence, call ledger, and exact prompt texts
  - Science may assess and freeze one exact H14-4 replacement only after Mission routes the viability variance
effect_actions_allowed:
  - versioned Mission and Science control artifacts plus one exact H14-4 replacement prompt identity
prohibited_until_named_owner_and_stage:
  - generation or external media call before exact Science prompt identity and Mission shell variance
  - source selection/import before private technical/physical/responsive PASS
  - any product change beyond the exact FRPX-014-v1 atomic null-first Combat scope
  - runtime presentation work before Image Specialist
  - release or maturity advancement before Intelligence
  - later-address selection
```

## Potential and budget

```yaml
potential:
  hard_failures: 2_representation_equivalent_physical_source_rejections
  selected_encounter_missing: 0
  continuity_lock_ready: true
  work_order_ready: true
  source_feasibility_contract_ready: true
  shell_ready: true
  directorial_lock_ready: true
  directorial_representation_replan_ready: true
  player_experience_blueprint_ready: true
  production_candidate: null_first_FRCE-014-v1_pending_commit
  final_holdout_passed: false
budget:
  generation_calls_authorized: 32
  generation_calls_used_this_cycle: 3
  generation_calls_remaining: 29
  initial_earned_tranche_after_shell: 5
  earned_extension_increment: 4
  concurrent_roles: 1
  role_order: strict_sequential
  final_verification_reserve: full_post_selection_cascade_plus_independent_intelligence_holdout
best_state_policy: preserve FRAB-013-v1 until Intelligence releases a superior exact candidate
```

## Strategy and continuation

```yaml
active_strategy_family: low_concave_shelf_interdigitating_processes_branching_service_voids
rejected_strategy_families:
  - continue_prompt_search_under_format24bpprgb_gate
  - substrate_separation_that_resolves_as_human_dam
  - dry_access_waterline_nonhuman_words_that_resolve_as_human_dam
continuation_reason: Recon replaced the barrier-layer-conduit causal grammar with a measurable low-shelf/interdigitating-process/branching-negative-space mechanism; only a Science-frozen H14-4 identity and Mission shell variance can lawfully test it
decision: RETURN_TO_OWNER
next_owner: mission_captain
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

Mission authorized only the shell-bounded Reconnaissance information stage.
That stage is now closed by `FRCT-014-v1`; it spent no call and changed no
source, media, runtime, product, or maturity state.

## Reconnaissance checkpoint

```yaml
reconnaissance:
  creative_treatment: FRCT-014-v1
  disposition: DIRECTORIAL LOCK
  product_candidate: 357ad6dc4184b74150173504e86e366c761cdc0e
  current_ref: FRCT-014-v1_directorial_state
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  action_kind: information
  verifier_vector:
    shell_identity_and_authority: PASS
    felt_improvement_and_player_fantasy: PASS
    physical_attention_and_emotional_rhythm: PASS
    world_interface_lesson_ownership: PASS
    visual_audio_motion_silence_restraint: PASS
    adjacent_and_recent_scene_contrast: PASS
    fixed_invariants_and_tactical_freedoms: PASS
    media_or_product_action: NONE
  delta_vs_best: zero_product_zero_maturity_zero_media_positive_information
  budget_used:
    generation_calls: 0
    product_effect_actions: 0
    media_actions: 0
    browser_or_e2e: 0
    planning_effect_actions: 2_control_artifacts
  budget_remaining:
    generation_calls: 32_hard_pool
    available_initial_tranche: 8
    final_verification_reserve: PROTECTED
  remaining_uncertainty:
    - exact Tactical interaction, focus, announcement, reflow, and recovery blueprint
    - future source bytes, transport, physical review, and measurements
    - future implementation and integrated responsive/accessibility/performance evidence
    - future exact candidate and independent release
    - human assistive-technology usability study
  decision: GATHER_EVIDENCE
  next_owner: tactical_operations_specialist
```

Reconnaissance authorized only the shell-bounded Tactical information stage.
That stage is now closed by `FRPX-014-v1`; it spent no call and changed no
source, media, runtime, product, or maturity state.

## Tactical checkpoint

```yaml
tactical:
  player_experience_blueprint: FRPX-014-v1
  disposition: PLAYER EXPERIENCE READY
  product_candidate: 357ad6dc4184b74150173504e86e366c761cdc0e
  current_ref: FRPX-014-v1_information_state
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  action_kind: information
  verifier_vector:
    current_and_target_graph: PASS
    atomic_native_or_generic_replacement: PASS
    state_action_eligibility_unavailable_paths: PASS
    focus_announcement_and_recovery: PASS
    input_modality_convergence: PASS
    six_layout_reflow_and_accessibility: PASS
    semantic_hotspot_and_source_derived_crop: PASS
    placeholder_and_owner_ledger: PASS
    acceptance_regression_and_hard_stop: PASS
    media_or_product_action: NONE
  delta_vs_best: zero_product_zero_maturity_zero_media_positive_information
  budget_used:
    generation_calls: 0
    product_effect_actions: 0
    media_actions: 0
    browser_or_e2e: 0
    planning_effect_actions: 2_control_artifacts
  budget_remaining:
    generation_calls: 32_hard_pool
    available_initial_tranche: 8
    final_verification_reserve: PROTECTED
  remaining_uncertainty:
    - future source bytes, transport, private physical review, and measurements
    - source-derived integrated browser, accessibility, performance, and presentation proof
    - human assistive-technology usability study
    - exact product candidate and independent Intelligence release
  decision: GATHER_EVIDENCE
  next_owner: combat_engineer
```

Combat may now implement only the exact shell-bounded, null-first functional
stage in `FRPX-014-v1`. It must keep source disabled/null and the released
generic path available until one positive native-active selector atomically
commits a lawful source, presentation, semantic hotspot, and sanitized state.
No generation call, media inspection/selection/import, Image-stage treatment,
maturity advancement, or Quartermaster action is authorized.

Combat has now closed that exact null-first functional stage as
`FRCE-014-v1`. Source remains disabled/null; no generation, media, browser,
repository-QA, save/profile, or release action occurred.

## Combat checkpoint

```yaml
combat:
  functional_report: FRCE-014-v1
  disposition: PRODUCTION FUNCTIONAL / INERT HOST 14 SLOT / QUARTERMASTER READY
  predecessor_reproduced: 24/24_PASS
  current_ref: FRCE-014-v1_null_first_candidate_pending_dedicated_commit
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  action_kind: bounded_product_effect
  verifier_vector:
    null_first_deep_frozen_registry: PASS
    strict_lawfulness_and_physical_mutations: PASS
    atomic_native_or_exact_generic_fallback: PASS
    semantic_action_focus_announcement_resume_fallback: PASS
    six_layout_derivation_and_minimum_target: PASS_DETERMINISTIC
    focused: 31/31_PASS
    related: 63/63_PASS_AFTER_FRCV_CONTENTION_REPLAN
    cold_full: 1047/1047_PASS
    curriculum_readiness: 40/40_PASS
    production_fixture_builds: 234/57_MODULES_PASS
    null_first_pba: JS_1762475_CSS_121983_MAPS0_NO_NEW_RASTER_PASS
    source_dependent_pba_browser_e2e_holdout: NOT_CLAIMED
  delta_vs_best: positive_functional_seam_zero_media_zero_maturity_released_behavior_unchanged
  budget_used:
    generation_calls: 0
    media_actions: 0
    browser_or_e2e: 0
    product_files: 6
    control_reports: 2
  budget_remaining:
    generation_calls: 32
    initial_earned_tranche: 8
    final_verification_reserve: PROTECTED
  remaining_uncertainty:
    - future source bytes, transport, private physical review, and exact measurement
    - source-derived registry/copy/provenance population and selected inventory
    - integrated browser, accessibility, performance, served, and full E2E proof
    - human assistive-technology usability study
    - exact product candidate and independent Intelligence release
  decision: GATHER_EVIDENCE
  next_owner: quartermaster
```

Quartermaster may now perform only the shell-bounded source stage after exact
preflight. It must populate the FRCE placeholder ledger from one privately
accepted source, stop at the first complete PASS, and preserve the inert
generic fallback on every failed or absent source path.

Quartermaster completed exact preflight and consumed H14-1. The frozen
generator produced one strict-decodable exact-size PNG, but the custody
verifier reported `Format32bppArgb` against the shell-required
`Format24bppRgb`. The higher technical gate failed before private physical or
layout review. Prompt-family continuation cannot change this representation;
post-processing, re-encoding, edit, alternate transport/model, and helper
modification remain forbidden.

## Quartermaster checkpoint

```yaml
quartermaster:
  content_asset_ledger: FRCA-014-v1
  call_ledger: FRLG-014-v1
  disposition: REVISE / TECHNICAL SOURCE REPRESENTATION CEILING
  current_ref: FRCE-014-v1_null_first@b4444afefe624ff231d986933a56c2003c0d8ac5
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  action_kind: bounded_external_effect_then_information_return
  verifier_vector:
    exact_preflight: PASS
    h14_1_transport: PASS_ONE_OUTPUT
    h14_1_dimensions_and_strict_decode: PASS
    h14_1_required_pixel_format: FAIL_FORMAT32BPPARGB_REQUIRES_FORMAT24BPPRGB
    private_physical_review: NOT_EVALUATED_HIGHER_GATE_FAIL
    six_layout_measurement: NOT_EVALUATED_HIGHER_GATE_FAIL
    source_import_registry_copy_provenance: NOT_STARTED
    exact_identity_cleanup: PASS
    source_dependent_full_proof: RESERVED_NOT_CONSUMED
  delta_vs_best: zero_product_zero_media_zero_maturity_one_consumed_call_positive_failure_information
  budget_used:
    generation_calls: 1
    media_imports: 0
    browser_or_e2e: 0
  budget_remaining:
    generation_calls: 31
    initial_tranche: 7
    final_verification_reserve: FULL
  remaining_uncertainty:
    - whether Science can lawfully revise the opaque RGB predicate or freeze a native 24bpp generator primitive
    - future physical source, responsive, accessibility, performance, and holdout evidence
    - human assistive-technology usability study
  decision: RETURN_TO_OWNER
  next_owner: office_of_science_administrator_via_mission_captain
```

No H14-2 or later call is authorized before a versioned Science feasibility
correction and Mission shell correction. Image Specialist is not authorized.

Science has now classified the Quartermaster return as a verifier
representation error, not an opacity failure. W3C PNG semantics permit both
three-channel RGB and four-channel RGBA whose every alpha sample is maximum to
represent the same fully opaque image. `FRFC-014-v2` therefore replaces the
decoder-format proxy with strict PNG structure plus an exhaustive decoded
alpha proof, while retaining byte identity, no-postprocess import, and exact
cleanup. Its isolated controls accepted opaque RGB and opaque RGBA and rejected
one alpha mutation from `255` to `254`.

## Science return checkpoint

```yaml
science_return:
  viability_envelope: FRVE-014-v2
  proposed_custody_control: FRFC-014-v2
  disposition: POLISH VIABILITY REVISED / MISSION CORRECTION REQUIRED
  current_ref: FRCE-014-v1_null_first@b4444afefe624ff231d986933a56c2003c0d8ac5
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  action_kind: information
  verifier_vector:
    w3c_png_opacity_semantics: PASS
    microsoft_decoder_representation_semantics: PASS
    frozen_openai_transport_support: PASS
    opaque_rgb_positive_control: PASS
    opaque_rgba_all_alpha_255_positive_control: PASS
    single_alpha_254_adversarial_rejection: PASS
    exact_identity_no_reencode_cleanup: PASS
    future_source_physical_layout: NOT_EVALUATED
    product_and_release: UNCHANGED_NOT_STARTED
  delta_vs_best: zero_product_zero_media_zero_maturity_positive_verifier_information
  budget_used:
    generation_calls: 1
    media_imports: 0
    browser_or_e2e: 0
  budget_remaining:
    generation_calls: 31
    initial_tranche: 7
    final_verification_reserve: FULL
  remaining_uncertainty:
    - whether a future source passes the corrected hard predicate
    - future private physical review and six-layout measurements
    - integrated responsive, accessibility, performance, served, and E2E proof
    - human assistive-technology usability study
    - exact product candidate and independent Intelligence release
  decision: RETURN_TO_OWNER
  next_owner: mission_captain
```

Science required Mission to issue `FRSH-014-v2`, freeze the exact
`FRFC-014-v2` identity and provenance fields, and supersede only the affected
pixel-format clauses before Quartermaster could evaluate H14-2. At that return
checkpoint, no call, media action, product action, or Image stage was
authorized.

Mission has now accepted the bounded verifier correction and issued
`FRSH-014-v2`. The corrected shell directly proves strict PNG structure and
full opacity instead of using the decoder storage label as a proxy. Every
unmentioned v1 gate, frozen CLI/prompt identity, no-postprocess rule, physical
and layout requirement, null-first fallback, protected boundary, budget, and
stop policy remains in force.

## Mission return checkpoint

```yaml
mission_return:
  shell: FRSH-014-v2
  disposition: FIRST RUN SHELL READY / QUARTERMASTER H14-2 READY
  current_ref: FRCE-014-v1_null_first@b4444afefe624ff231d986933a56c2003c0d8ac5
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  action_kind: information
  verifier_vector:
    planning_conflict: PASS_NONE
    w3c_png_semantics: PASS
    microsoft_decoder_semantics: PASS
    openai_transport_support: PASS
    custody_v2_identity: PASS
    opaque_rgb_positive_control: PASS
    opaque_rgba_all_alpha_255_positive_control: PASS
    single_alpha_254_adversarial_rejection: PASS
    frozen_prompt_generator_manifest_pba_identities: PASS
    accepted_manifest_integrity: 24/24_PASS
    owned_scratch_source_partial_absence: PASS
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
    initial_tranche: 7
    final_verification_reserve: FULL
  remaining_uncertainty:
    - whether H14-2 or a later lawful ordinal passes the corrected hard predicate
    - future private physical review and six-layout measurement
    - integrated responsive, accessibility, performance, served, and E2E proof
    - human assistive-technology usability study
    - exact product candidate and independent Intelligence release
  decision: GATHER_EVIDENCE
  next_owner: quartermaster
```

H14-1 remains consumed/rejected/deleted. H14-2 is the only next ordinal. The
remaining initial tranche is seven calls, the total remaining pool is 31, and
the complete verification reserve remains protected. Image Specialist is not
authorized.

## Quartermaster v2 resume checkpoint

```yaml
quartermaster_resume:
  report: FRCA-014-v2
  disposition: REVISE / REPRESENTATION REPLAN REQUIRED
  current_ref: FRCE-014-v1_null_first@b4444afefe624ff231d986933a56c2003c0d8ac5
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  action_kind: information
  verifier_vector:
    corrected_preflight_and_self_test: PASS
    h14_2_strict_truecolor_and_full_opacity: PASS
    h14_2_private_physical_review: FAIL_HUMAN_DAM_AND_HUMAN_SERVICE_LOGIC
    h14_3_strict_truecolor_and_full_opacity: PASS
    h14_3_private_physical_review: FAIL_HUMAN_DAM_HISTORY_CROSSING_AND_HUMAN_SERVICE_LOGIC
    source_mapping_and_six_layouts: NOT_EVALUATED_HIGHER_PHYSICAL_GATE_FAIL
    source_import_registry_copy_provenance: NOT_STARTED
    exact_identity_cleanup: PASS
    product_and_release: UNCHANGED_NOT_STARTED
    final_proof_reserve: FULL
  delta_vs_best: zero_product_zero_media_zero_maturity_two_calls_positive_failure_information
  budget_used:
    generation_calls: 3_total_cycle_2_this_resume
    media_imports: 0
    product_effect_actions: 0
    browser_or_e2e: 0
  budget_remaining:
    generation_calls: 29
    initial_tranche: 5
    final_verification_reserve: FULL
  remaining_uncertainty:
    - one visibly alien but physically causal nonhuman construction grammar
    - a future source that passes the complete physical and source-mapping gates
    - future six-layout, accessibility, performance, served, E2E, and Intelligence proof
    - human assistive-technology usability study
  decision: RETURN_TO_OWNER
  next_owner: reconnaissance_sergeant_via_mission_captain
```

H14-2 and H14-3 are consumed/rejected/deleted. The remaining frozen prompts
are unspent, but no further call is evidence-earned because both technical-pass
strategies resolved to the same familiar human infrastructure archetype and
the second weakened the required history crossing. Reconnaissance must return
through Mission with a versioned representation replan before Quartermaster
may continue. Image Specialist is not authorized.

Reconnaissance has now completed that bounded representation replan as
`FRCT-014-v1-VR-01`. The new mechanism changes composition and construction
causality rather than adding more nonhuman synonyms: a low concave basin shelf
replaces the barrier silhouette; three interdigitating material processes
replace horizontal construction zones; and branching recessed service voids
replace familiar conduits, clamps, and drainage joints. The complete physical
sentence and every no-message/no-response boundary remain fixed.

## Reconnaissance representation-return checkpoint

```yaml
reconnaissance_return:
  directorial_variance: FRCT-014-v1-VR-01
  disposition: DIRECTORIAL REPLAN READY / MISSION VARIANCE REQUIRED
  current_ref: FRCE-014-v1_null_first@b4444afefe624ff231d986933a56c2003c0d8ac5
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  action_kind: information
  verifier_vector:
    recorded_two_family_equivalence: PASS
    barrier_layer_conduit_failure_localization: PASS
    low_concave_shelf_composition: PASS_SPECIFIED
    interdigitating_process_histories: PASS_SPECIFIED
    branching_recessed_service_voids: PASS_SPECIFIED
    exact_measurable_representation_delta: PASS_SPECIFIED
    physical_story_accessibility_boundaries: PASS_PRESERVED
    prompt_or_shell_identity_change: NOT_PERFORMED_MISSION_SCIENCE_OWNED
    media_or_product_action: NONE
    future_candidate: NOT_EVALUATED
  delta_vs_best: zero_product_zero_media_zero_maturity_positive_representation_information
  budget_used:
    generation_calls: 3_total_cycle_0_recon_return
    media_imports: 0
    product_effect_actions: 0
    browser_or_e2e: 0
  budget_remaining:
    generation_calls: 29
    initial_tranche_unspent: 5
    next_observation_if_authorized: H14-4_only
    final_verification_reserve: FULL
  plateau_policy: >-
    old H14-5 through H14-8 prompts are not executable as-is; one newly frozen
    H14-4 may test the new mechanism; a second equivalent new-family failure
    without a new measurable mechanism is HOLD / REPRESENTATION CEILING
  remaining_uncertainty:
    - Science feasibility and exact replacement-prompt identity
    - Mission shell variance and Quartermaster authority
    - future source compliance and complete downstream proof
    - human assistive-technology usability study
  decision: RETURN_TO_OWNER
  next_owner: mission_captain
```

Mission must now classify the variance and route the H14-4 identity through
Science. No prompt, shell, call, source, media, product, maturity, or Image
action is authorized by the Recon treatment alone.
