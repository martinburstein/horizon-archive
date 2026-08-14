# Horizon Archive First Run Loop State

State ID: `FRLS-CITY-001-v1`

Control: `FRCV-001-v1` / `HA-RI-001-v1`

Status: **RELEASED / IMAGE QUEUE COMPLETE / CITY THRESHOLD COPY CORRECTED / LOOP COMPLETE**

`NEXT_INSTANCE_HANDOFF.md` remains the exact-next-action authority.

```yaml
contract:
  shell: FRSH-016-v1
  loop: HA-RI-001-v1
  scope: 27_existing_private_production_masters
state:
  product_candidate: 1e0039bb
  release: FRAB-015-v1
  controller_state: COMPLETE
queue:
  produced_pending_integration: 0
  integration_candidate: 0
  integrated_released: 27
evidence:
  fresh_passed:
    - final serialized full suite
    - exact validators 40/40
    - production build 275 modules
    - emitted binary identity 52/52 with source_maps 0
    - TD010 and TD011 served identity
    - complete E2E 78.555 seconds runtime_errors 0
    - READY and NOT_YET_READY equal_dignity ending proof
    - 27/27 queue card receipt provenance and Full_HD_RGB_PNG reconciliation
  diagnostic_variance:
    - stale pre-integration test and E2E launcher expectations corrected
    - shared dist contention removed by serialized release execution
    - Host_17 overlapping pointer targets corrected and regression locked
  city_threshold_copy:
    - focused City and adjacent-entry tests 21/21
    - production build 275 modules
    - successor_packet and staging_boundary absent from runtime component
constraints_preserved:
  - route lesson evidence save privacy world_response ending successor unchanged
  - no image generation edit overwrite or reveal
  - unrelated QA PDF training and user worktree state untouched
decision: STOP_SUCCESS
next_owner: null
```
