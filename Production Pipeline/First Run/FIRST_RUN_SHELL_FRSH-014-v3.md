# FIRST RUN SHELL CORRECTION / FRSH-014-v3

## Disposition and identity

`FIRST RUN SHELL READY / ONE H14-4-v2 REPRESENTATION OBSERVATION / QUARTERMASTER NEXT`

Mission correction stage: `mission_captain` / `DESIGN -> OPERATE`.

```yaml
shell: FRSH-014-v3
supersedes: FRSH-014-v2_only_for_H14_4_prompt_strategy_representation_and_plateau_clauses
work_order: FRWO-014-v1
science_return: FRVE-014-v2-VR-01
mission_routing: FRSH-014-v2-VR-01
directorial_replan: FRCT-014-v1-VR-01
quartermaster_evidence: FRCA-014-v2
call_ledger: FRLG-014-v1
state_read: FRLS-SCI-003-v1
state_written: FRLS-MSN-003-v1
source_commit_read: 12866ad768b9b40f2b93852efe194a40fc971453
current_product: FRCE-014-v1@b4444afefe624ff231d986933a56c2003c0d8ac5
best_and_committed_product: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
generation_calls_used: 3
generation_calls_remaining: 29
next_owner: quartermaster
```

Mission independently accepts Science's bounded representation return. One
new prompt changes the positive topography, material-process topology, and
service-continuity primitive, so one observation has materially greater
information value than another rejected-family retry. This correction creates
no general retry authority and changes no product, source, media, maturity, or
unaffected shell gate.

## Independent Mission validation

Mission reproduced the following without a generation or media action:

| Check | Exact result |
| --- | --- |
| Science return | `18,237` bytes; SHA-256 `9a9c3c785fe73d36984e2c08f08f66d6c6e2a9c9d4a145d69bee965f848878c1` |
| Replacement prompt | `3,757` bytes; SHA-256 `e5af6294dbefabbaeeb9f71e044d611abb6a1ffafbb9992d9b2987423d462164` |
| Prompt text form | ASCII; `0` non-ASCII bytes; LF-only; `0` carriage returns; final LF present |
| Historical H14-4 | unchanged `1,772` bytes; SHA-256 `36ecfcc1feb9d01a47c81adb918d9a29664015f9d1eeab464196d51e2e17e032` |
| Historical prompt portfolio | all H14-1 through H14-8 v1 byte/hash/ASCII/LF identities PASS |
| Generator | `35,266` bytes; SHA-256 `c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05` |
| `FRFC-014-v2` | `18,501` bytes; SHA-256 `ae4232047ac8d01b11866b7da74d00fa4510d07805efe647b861ebecc5cd2a3c` |
| `FRFC-014-v2 SelfTestOpacity` | opaque RGB PASS; opaque RGBA/all-alpha-255 PASS; one alpha-254 mutation PASS_REJECTED |
| Accepted manifest | `5,512` bytes; SHA-256 `7057dd8f24f46086e5591d326706d537876030959ce6e058bd7b826683b28c30`; `24 / 154,163,567` exact entry integrity PASS |
| `FRPBA-014-v1` | `4,072` bytes; SHA-256 `28336cfa72803f2a10872014966528c6a52ab925deb8461323c0d6df9ded47b5` |
| Product identity | no committed or working-tree change after `FRCE-014-v1@b4444afefe624ff231d986933a56c2003c0d8ac5` |
| Owned output state | production scratch root, H14-4 output, product source, and product partial all absent |

Mission parsed the exact corrected invocation once using the generator's local
`--dry-run` information mode. It returned endpoint `/v1/images/generations`,
model `gpt-image-2`, `n=1`, size `3840x2160`, quality `high`, background
`opaque`, output format `png`, the exact replacement prompt, and the exact
H14-4 output path. Exit was zero. The scratch root and output were absent before
and after. No external request or output was created.

These checks validate mechanics and authority only. They do not claim future
source quality, layout, accessibility, product integration, or release.

## Exact prompt and strategy replacement

This shell supersedes only the former H14-4 executable identity. Historical
`HOST14_GEN_PROMPT_H14-4.txt` remains immutable failure evidence and is not
executable. The sole executable next identity is:

```yaml
attempt_id: H14-4
prompt_revision: v2
prompt_path: Production Pipeline/First Run/HOST14_GEN_PROMPT_H14-4-v2.txt
prompt_bytes: 3757
prompt_sha256: e5af6294dbefabbaeeb9f71e044d611abb6a1ffafbb9992d9b2987423d462164
encoding: ASCII
line_endings: LF_only
final_lf: true
strategy_family: low_concave_shelf_interdigitating_processes_branching_service_voids
prediction: >-
  a technically valid candidate will read as a low concave exposed shelf,
  show all three interdigitating material processes and one continuous trace
  with three substrate reactions, and preserve at least three branching
  recessed service voids without barrier, human infrastructure, hardware,
  biology, or message cues
```

Quartermaster may launch exactly this command once, sequentially, after exact
preflight and a prelaunch ledger record:

```text
python C:\Users\marti\.codex\skills\.system\imagegen\scripts\image_gen.py generate --prompt-file "C:\Users\marti\OneDrive\Desktop\Horizon Archive\Production Pipeline\First Run\HOST14_GEN_PROMPT_H14-4-v2.txt" --model gpt-image-2 --n 1 --size 3840x2160 --quality high --background opaque --output-format png --out "C:\Users\marti\AppData\Local\Temp\horizon-archive-host14-e3223c20-b7b5-410d-b335-3c15c576cfba\H14-4.png" --no-augment
```

The operational attempt ID remains `H14-4` because `FRFC-014-v2` admits only
`H14-1` through `H14-32`; `v2` names the exact prompt revision. The ordinal is
consumed when the process launches, including timeout, transport failure,
ambiguous completion, or nonzero exit. No retry wrapper, `--force`, second
output, batch, edit, variation, reference, augmentation, alternate model,
alternate transport, or direct API path exists.

H14-5 through H14-8 remain historical frozen identities and are **not
executable as-is**. H14-9 through H14-32 still have no prompt bytes or call
authority.

## New conjunctive pre-layout representation gate

After `FRFC-014-v2` technical PASS and before source mapping, layout,
selection/import, product work, or Image work, Quartermaster's private review
must record this complete visible-evidence vector. Prompt language or generator
self-assessment is not evidence. Every item is conjunctive.

```yaml
representation_vector_schema: horizon.first-run.host14-representation.v1
positive:
  low_concave_basin_shelf_read: true
  dry_ground_continuity_foreground_to_face: true
  same_basin_receded_water_lateral_or_shallow: true
  ancient_vesicular_load_mesh_process: true
  repair_dendritic_ceramic_sinter_process: true
  present_discontinuous_lamellar_skin_process: true
  each_history_overlaps_another_horizontally_and_vertically: true
  pairwise_boundary_interlocks_or_islands_minimum: 2
  one_irregular_trace_continuous_across_all_three: true
  trace_distinct_reaction_count: 3
  upward_recessed_service_seam_count_minimum: 3
  seam_group_visible_branch_or_merge: true
  seams_unequal_nonparallel_and_recessed: true
negative:
  barrier_or_impoundment_silhouette: false
  human_civil_infrastructure_cue_count: 0
  human_service_hardware_cue_count: 0
  histories_as_horizontal_zones: false
  biological_substitution_cue_count: 0
  writing_answer_message_or_world_response_cue_count: 0
```

Any failed item records the matching `FRVE-014-v2-VR-01` `REP_*` code and
rejects the candidate before source mapping. Passing this vector cannot
compensate for any failure in the existing complete physical sentence,
technical/custody law, source mapping, responsive/accessibility gate, privacy,
performance, cleanup, or release proof.

## Unchanged gates and protected boundaries

Every clause of `FRSH-014-v2` and `FRSH-014-v1` not explicitly replaced above
remains exact, including:

- strict PNG structure, full-opacity proof, exact identity, no-reparse/no-
  multilink rules, byte-preserving import, no overwrite, and literal cleanup;
- reachable dry approach, three independently visible histories, one irregular
  trace across all three, receded same-basin waterline, at least three upward
  service continuities, distinct local target, and all physical rejection
  codes;
- one-source measurement, source-derived coordinates, all six layouts,
  retention `>= .95`, mandatory centers visible, physical center inside one
  semantic target, `>=44x44` CSS pixels, and source-shift/crop adversarial
  sensitivity;
- keyboard, pointer, touch, switch-like input, focus and announcements,
  effective-200%, forced color, reduced motion, non-sensory equivalence, and
  honest human assistive-technology limitation;
- accepted media, provenance, source/final byte equality, `FRPBA-014-v1`,
  production/fixture/served identities, performance, browser/E2E, cleanup,
  rollback, and independent Intelligence holdout;
- canon, fixed copy and learning ownership, no hidden lore, no authored answer,
  no message/world response, no access/reward/identity/judgment, no new lesson
  or branch, unchanged route/save/privacy/offline behavior, equal RP-012 ending,
  and `successor=null`; and
- null-first source registry, sanitized state, and the exact generic fallback
  as the only player path until one candidate passes every atomic gate.

No repository QA, Martin browser/profile/save, hidden lore, archives,
PDFs/training material, opaque residual roots, unrelated dirt, accepted-media
pixels, or rejected pixels may be used or changed. No candidate or path is
revealed to Martin. Image Specialist remains **NOT AUTHORIZED** until
Quartermaster accepts and commits one content-complete selected source.

## Budget, continuation, and stop law

```yaml
generation_budget:
  hard_pool: 32
  used_before_authorized_launch: 3
  remaining_before_authorized_launch: 29
  initial_tranche_unspent: 5
  calls_authorized_by_this_shell: 1
  authorized_ordinal: H14-4
  authorized_prompt_revision: v2
  used_after_launch: 4
  remaining_after_launch: 28
  concurrency: 1
  outputs_per_call: 1
  final_verification_reserve: FULL
```

- First complete technical, representation, physical, source-mapping, layout,
  accessibility, provenance, product, and release-quality PASS stops the
  encounter and preserves every unused call.
- Any technical, custody, cleanup, or identity failure returns to Science via
  Mission. It does not authorize another call.
- Any barrier, horizontal zoning, human hardware/infrastructure, missing
  process causality, biological substitution, or message/response failure
  returns through Mission to Recon/Science. Old H14-5 is not launched.
- If H14-4 passes the entire representation vector but misses exactly one
  independent mandatory physical group, one local-repair proposal may return
  through Recon/Science and Mission with a predicted changed measurement. No
  repair call is authorized by this shell.
- A later second technically valid candidate in this new family that fails the
  same representation dimension without a new measurable mechanism forces
  `HOLD / REPRESENTATION CEILING`. No third synonymous attempt exists.
- Unused initial-tranche calls and the wider pool are budget, not authority.
  This correction authorizes exactly one observation.

## Exact Quartermaster handoff

Quartermaster is the sole exact next owner and may perform only this sequence:

1. Read `FRSH-014-v3`, `FRVE-014-v2-VR-01`, `FRCT-014-v1-VR-01`,
   `FRCA-014-v2`, `FRLG-014-v1`, `FRFC-014-v2`, `FRAM-014-v1`,
   `FRPBA-014-v1`, `FRCE-014-v1`, and `FRLS-MSN-003-v1`.
2. Prove the synchronized Mission shell commit, exact prompt/generator/custody/
   manifest/PBA identities, all 24 accepted manifest entries, null-first source
   state, budget `3 / 29`, key presence only, free disk, process absence, and
   scratch/source/partial absence. Run only the frozen opacity self-test and the
   exact H14-4-v2 CLI dry-run before creating the owned scratch root.
3. Create the root through `FRFC-014-v2`, append the exact prelaunch ledger
   transition with attempt `H14-4`, prompt revision/path/bytes/hash, strategy,
   prediction, and no prompt body or secret, then launch the executable command
   exactly once.
4. Reconcile the recorded PID and exact ordinal output. Run the technical gate;
   only a technical PASS may receive private representation review. Only a full
   representation PASS may receive the unchanged complete physical review.
5. On any failure, record exact codes, identity-delete the rejected output,
   delete only the identity-matching empty root, prove product/partial absence,
   preserve null-first behavior, and return to the named earliest owner. Do not
   launch H14-5 or retry H14-4.
6. Only a complete technical + representation + physical PASS may proceed to
   unchanged source mapping and six-layout measurement. Only a complete atomic
   source/layout/accessibility/provenance PASS may be imported byte-identically
   and populated into the existing null-first registry. The first complete PASS
   stops all calls.

Quartermaster may append its ledger/report/state and, only after complete
acceptance, the already-authorized source/registry/copy/provenance fields. It
may not alter generator/custody/PBA controls, product behavior, route, lesson,
save, ending, other media, or this shell. It may not begin Image work.

```yaml
convergence_handoff:
  mode: DESIGN_to_OPERATE
  current_ref: FRCE-014-v1_null_first@b4444afefe624ff231d986933a56c2003c0d8ac5
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  action_kind: information
  verifier_vector:
    planning_conflict: PASS_NONE
    replacement_prompt_identity_ascii_lf: PASS
    historical_prompt_portfolio_unchanged: PASS
    exact_cli_substitution: PASS_DRY_RUN_NO_CALL_NO_OUTPUT
    frfc_v2_selftest_and_identity: PASS
    accepted_manifest_and_pba: PASS
    causal_representation_vector: PASS_FROZEN_CANDIDATE_UNKNOWN
    every_unaffected_shell_gate: PASS_PRESERVED
    budget_and_one_observation_law: PASS_3_USED_29_REMAINING_ONE_CALL
    media_product_runtime_or_maturity_action: NONE
  delta_vs_best: zero_product_zero_media_zero_maturity_positive_shell_information
  budget_used:
    generation_calls: 3_total_cycle_0_mission
    media_imports: 0
    product_effect_actions: 0
    browser_or_e2e: 0
  budget_remaining:
    generation_calls: 29_before_launch
    authorized_now: H14-4_v2_once
    later_ordinals: NONE
    final_verification_reserve: FULL
  remaining_uncertainty:
    - future H14-4 candidate technical and representation compliance
    - future physical, source-mapping, six-layout, and accessibility proof
    - future product candidate and independent Intelligence release
    - human assistive-technology usability study
  decision: GATHER_EVIDENCE
  next_owner: quartermaster
```

Mission signature:
**`FIRST RUN SHELL READY / FRSH-014-v3 / QUARTERMASTER H14-4-v2 ONCE`**.
