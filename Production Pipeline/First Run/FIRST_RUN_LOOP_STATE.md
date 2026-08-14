# Horizon Archive First Run Loop State

State ID: `FRLS-MSN-009-v1`

Control: `FRCV-001-v1` / `HA-RI-001-v1`

Status: **OPERATE / EXISTING-MASTER RUNTIME INTEGRATION / HOST 14 ACTIVE**

`NEXT_INSTANCE_HANDOFF.md` remains the exact-next-action authority.

```yaml
contract:
  shell: FRSH-016-v1
  loop: HA-RI-001-v1
  scope: 27_existing_private_production_masters_one_asset_per_iteration
state:
  source_control_read: 6bf7036d
  current_asset: host-14
  current_address: FR-03
  controller_state: CONTINUE_SAME_STRATEGY
  current_ref: FRCE-015-v1_null_first@398a64131fa804223cfbdfc88f2865242bb3e02a
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
queue:
  produced_pending_integration: 27
  integration_candidate: 0
  integrated_released: 0
evidence:
  reused:
    - FRCE-015-v1 related 63/63 full 1047/1047 validators 40/40
    - unchanged route save privacy lesson ending and fixture evidence
  fresh_required:
    - host-14 master identity provenance selector source-law build emitted identity responsive accessibility
  final_proof_reserve: FULL
hard_constraints:
  - no image generation editing reveal or accepted-master overwrite
  - no route lesson evidence save ending world-response or successor change
  - no broad test rerun without a named verifier-relevant invalidation
decision: CONTINUE_SAME_STRATEGY
next_owner: runtime_integration_controller
```
