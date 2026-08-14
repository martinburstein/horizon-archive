# Horizon Archive First Run Loop State

State ID: `FRLS-IMG-002-v1`

Control: `FRCV-001-v1` / `HA-RI-001-v1`

Status: **OPERATE / HOST 15 INTEGRATION CANDIDATE / HOST 16 NEXT**

`NEXT_INSTANCE_HANDOFF.md` remains the exact-next-action authority.

```yaml
contract:
  shell: FRSH-016-v1
  loop: HA-RI-001-v1
  scope: 27_existing_private_production_masters_one_asset_per_iteration
state:
  source_control_read: 6bf7036d
  current_asset: host-16
  current_address: FR-04
  controller_state: CONTINUE_SAME_STRATEGY
  current_ref: FRCE-015-v1_null_first@398a64131fa804223cfbdfc88f2865242bb3e02a
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
queue:
  produced_pending_integration: 25
  integration_candidate: 2
  integrated_released: 0
evidence:
  reused:
    - FRCE-015-v1 related 63/63 full 1047/1047 validators 40/40
    - unchanged route save privacy lesson ending and fixture evidence
  fresh_required:
    - host-16 master identity provenance and affected runtime boundary evidence
  fresh_passed:
    - host-14 master identity and provenance
    - host-14 focused source selector and mutation 10/10
    - host-14 responsive accessibility and CSS 3/3
    - production build 235 modules and byte-identical emitted master
    - host-15 master identity and provenance
    - host-15 focused source selector predecessor boundary and lesson order 16/16
    - production build 237 modules bundle caps and byte-identical emitted master
  final_proof_reserve: FULL
hard_constraints:
  - no image generation editing reveal or accepted-master overwrite
  - no route lesson evidence save ending world-response or successor change
  - no broad test rerun without a named verifier-relevant invalidation
decision: CONTINUE_SAME_STRATEGY
next_owner: runtime_integration_controller_host_16
```
