# Horizon Archive First Run Loop State

State ID: `FRLS-NEXT-v1`

Control: `FRCV-001-v1`

Status: **DESIGN / COMMANDANT BASELINE REVALIDATION PENDING**

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
  goal: guarded baseline revalidation, then one earliest missing physical encounter through independent release
  selected_address: null
  work_order: null
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
  current_release_map: FRRM-013-v2
  current_scoreboard: FRSB-013-v2
  current_baseline: FRPB-001-v11
  current_continuity_lock: FRCL-013-v1
  accepted_media_count: 24
  accepted_media_bytes: 154163567
  remaining_missing_physical_encounters_at_current_address: 2
  user_authorized_generation_call_pool: 32
unknown:
  - guarded baseline coherence under fresh Commandant inspection
  - exact next encounter selection until planning gates complete
  - Work Order, viability envelope, and shell identity
```

## Action and authority state

```yaml
active_mode: DESIGN
active_owner: commandant
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
  hard_failures: unknown_pending_revalidation
  selected_encounter_missing: 1
  work_order_ready: false
  shell_ready: false
  production_candidate: null
  final_holdout_passed: false
budget:
  generation_calls_authorized: 32
  generation_calls_used_this_cycle: 0
  generation_calls_remaining: 32
  concurrent_roles: 1
  role_order: strict_sequential
  final_verification_reserve: protected
best_state_policy: preserve FRAB-013-v1 until Intelligence releases a superior exact candidate
```

## Strategy and continuation

```yaml
active_strategy_family: guarded_release_baseline_revalidation
rejected_strategy_families: []
continuation_reason: current handoff explicitly authorizes one fresh Commandant information pass
decision: GATHER_EVIDENCE
next_owner: commandant
```

No further stage may begin until the Commandant writes a validated handoff and
updates this state without weakening the immutable contract edge.
