# FIRST RUN PLAYER EXPERIENCE BLUEPRINT / FRPX-015-v1

## Disposition and identity

`PLAYER EXPERIENCE READY / GUIDE-TO-SOURCE GEOMETRY AND ATOMIC FALLBACK / COMBAT NEXT`

Tactical stage: `tactical_operations_specialist` / `OPERATE`.

```yaml
blueprint_id: FRPX-015-v1
shell: FRSH-015-v1
treatment: FRCT-015-v1
work_order: FRWO-015-v1
viability_envelope: FRVE-015-v1
baseline: FRPB-001-v13
continuity_lock: FRCL-015-v1
guide_spec: FRM15-SPEC-v1
guide_spec_sha256: d749d452bce7cc4747b25908ad4824275ba038debb7686e07c4a7502a5f6bf96
guide_control_sha256: 214a26f29443c91138cb4768fb54e40c9d7ce1980392cd6ecc20aae6a24a7037
state_read: FRLS-REC-005-v1
state_written: FRLS-TAC-005-v1
source_control_commit_read: b43d8a958d25e7eaf12c611e411ea1ba0e2251fe
current_product: FRCE-014-v1@b4444afefe624ff231d986933a56c2003c0d8ac5
best_and_committed: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
next_owner: combat_engineer
```

The shell, treatment, guide specification, frozen controls, and predecessor
null-first interaction/focus/recovery graph are compatible. This blueprint
closes the implementation ambiguity between noncanonical guide space, final
source pixels, runtime registry fields, and the six sanctioned layouts. It
does not create or inspect a guide or image, alter a frozen control, authorize
a call, change the product, or advance maturity.

## Current and target state graphs

The released/current product remains the exact `FRCE-014-v1` null-first graph:

```text
predecessor incomplete
  -> no owned lesson launcher

predecessor complete + native source unlawful/absent/disabled
  -> first incomplete released generic launcher
  -> second generic launcher only after strict first-lesson mastery
  -> unchanged later boundary only after strict second-lesson mastery

lawful native source (not yet present)
  -> atomic source + hotspot presentation
  -> suppress exactly the two replaced generic launchers
  -> LOOK write-free / TALK complete nonresponse
  -> USE opens the exact first incomplete owned lesson
  -> complete USE is read-only; later boundary remains separate
```

The target implementation retains one positive selector. Until a source,
provenance, visible-pixel registry, derived layouts, and decode all pass in one
render, generic controls remain active. Source `enabled`, file existence, a
passing guide, a generated candidate, or a populated subset can never suppress
them. There is no render with both native and affected generic actions, and no
render with neither eligible action.

## Coordinate authority and deterministic normalization

### Two evidence classes

The implementation must keep these classes separate:

1. **Control geometry** is the exact noncanonical `G01` geometry. It owns the
   normalized safe core, semantic target, physical-center test point, label
   anchor, protected regions, contact observation windows, and names/roles of
   physical groups. It cannot prove that a candidate visibly contains them.
2. **Visible-pixel geometry** is measured from the flattened selected source
   after normalization. It owns relation, dry approach, three process bounds,
   pairwise contacts, trace/reactions, waterline, and recessed seam evidence.
   Prompt text, guide coordinates, copy, or reviewer intent cannot populate a
   visible field that the pixels do not support.

The registry passes only when both classes reconcile. Copying control geometry
into visible fields without source-pixel evidence is a hard failure.

### One source-space transform

The guide canvas is `1536 x 1024`. Only its final core
`[0,80]..[1536,944]` maps to the `3840 x 2160` source. For every guide point
`(xg, yg)`:

```text
xs = 2.5 * xg
ys = 2.5 * (yg - 80)
```

Rectangles map by transforming left, top, right, and bottom independently;
width and height are the transformed right-minus-left and bottom-minus-top.
Polylines map every vertex in order. Values ending in `.5` remain exact
finite source coordinates; no floor, ceiling, rounding, viewport percentage,
or caller-authored attestation is permitted. A point outside the final core is
invalid rather than clamped.

This transform is the only guide-to-source mapping Combat may encode. Runtime
source-to-layout projection continues to use the shared deterministic cover
geometry with actual source dimensions, the exact world size, `object-fit:
cover`, and `object-position: 50% 50%`.

### Frozen normalized controls

| Control | Exact normalized source-space value |
| --- | --- |
| semantic target | `{x:750,y:362.5,width:2550,height:1337.5}` |
| physical center | `{x:1920,y:1050}` |
| label anchor | `{x:1387.5,y:50,width:1065,height:225}` |
| predecessor protection | `{x:0,y:1425,width:325,height:735}` |
| next-boundary protection | `{x:3515,y:550,width:325,height:650}` |
| live-water protection | `{x:3575,y:1262.5,width:265,height:897.5}` |
| return-route protection | `{x:0,y:550,width:287.5,height:625}` |
| remote-landmark protection | `{x:3375,y:0,width:465,height:425}` |
| crown protection | `{x:3400,y:675,width:440,height:425}` |
| witness protection | `{x:0,y:0,width:440,height:425}` |
| narration/UI corridor | `{x:1300,y:0,width:1240,height:287.5}` |

The label is intentionally contained by the narration/UI corridor. It must
overlap no other protected region. The semantic target must overlap no
protected region, including narration/UI. The physical center must remain
inside both the semantic target and the visibly measured relation.

### Frozen visible-measurement references

The following are guide-projected search/reference geometry, not automatic
candidate truth:

| Group | Guide-projected source reference |
| --- | --- |
| whole relation bounds | `{x:225,y:250,width:3400,height:1525}` |
| dry approach bounds | `{x:375,y:1450,width:3100,height:650}` |
| lateral water bounds | `{x:3300,y:1262.5,width:540,height:897.5}` |
| foundation process bounds | `{x:300,y:350,width:3225,height:1350}` |
| repair process bounds | `{x:650,y:425,width:2025,height:1087.5}` |
| service-skin process bounds | `{x:1050,y:375,width:2225,height:1175}` |
| trace points | `[(562.5,1137.5),(1075,1012.5),(1550,1087.5),(1975,1187.5),(2450,987.5),(2975,1062.5),(3312.5,1175)]` |
| foundation reaction | `(562.5,1137.5)` |
| repair reaction | `(1550,1087.5)` |
| service-skin reaction | `(2450,987.5)` |
| main seam 1 | `[(1050,1550),(1100,1150),(1025,675),(950,262.5)]` |
| main seam 2 | `[(1900,1550),(1950,1250),(1875,875),(1975,450)]` |
| main seam 3 | `[(2750,1550),(2700,1200),(2800,850),(2725,350)]` |
| branch of main seam 2 | `[(1950,1250),(2250,875),(2450,500)]` |

Each of the three process pairs retains two exact guide-projected contact
windows, in guide order:

```yaml
foundation_repair:
  - {x: 625, y: 450, width: 550, height: 450}
  - {x: 975, y: 1150, width: 575, height: 375}
foundation_service_skin:
  - {x: 2475, y: 350, width: 625, height: 475}
  - {x: 2800, y: 1125, width: 525, height: 425}
repair_service_skin:
  - {x: 1312.5, y: 512.5, width: 550, height: 425}
  - {x: 1850, y: 987.5, width: 600, height: 475}
```

A final candidate must show the named construction evidence in each matching
window, but Quartermaster records the tight visible-pixel bounds/points. Empty
or color-only guide correspondence is rejected.

## Frozen v2 registry contract

Combat migrates only the null-first source law from
`horizon.waterline-ledger.v1` to `horizon.waterline-ledger.v2`. The disabled
export remains deeply immutable. Import alone remains inert.

```yaml
schema: horizon.waterline-ledger.v2
source:
  keys: [enabled, path, sourceId, bytes, sha256, width, height, format, color]
  disabled: {enabled: false, path: null, sourceId: null, bytes: null, sha256: null, width: null, height: null, format: null, color: null}
  selected_source_id: FRM15-A01
provenance:
  keys: [schema, path, sourceId, bytes, sha256]
  schema: horizon.first-run.frm15-source-provenance.v1
visible_geometry:
  relation: rect_or_null
  dryApproach: rect_or_null
  histories:
    foundation: {bounds: rect, processEvidence: nonempty_rect_array}
    repair: {bounds: rect, processEvidence: nonempty_rect_array}
    serviceSkin: {bounds: rect, processEvidence: nonempty_rect_array}
  pairwiseContacts:
    foundationRepair: exactly_two_or_more_distinct_rects
    foundationServiceSkin: exactly_two_or_more_distinct_rects
    repairServiceSkin: exactly_two_or_more_distinct_rects
  depositionTrace:
    bounds: rect
    points: ordered_irregular_polyline
    reactions: {foundation: point, repair: point, serviceSkin: point}
  waterline: rect_or_null
  serviceSeams:
    - {id: unique_string, parent: null_or_existing_id, points: ordered_polyline}
control_geometry:
  semanticTarget: exact_frozen_rect_or_null
  physicalCenter: exact_frozen_point_or_null
  labelAnchor: exact_frozen_rect_plus_insets_or_null
  protected: exact_eight_key_map_or_all_null
layouts: exact_six_key_derived_records_or_all_null
copy: exact_existing_frozen_copy_or_null
```

The label anchor retains `insetOuterCss >= 3`, `insetTextCss >= 5`, and
`focusSeparationCss >= 8`. At least three parentless seams rise, are mutually
unequal/nonparallel, and one child begins at an exact vertex of its named
parent. Distinct IDs or rectangles alone do not prove visible distinction.
Each trace reaction point must lie on the trace and in the matching visible
process. Pairwise contact rectangles must be distinct, intersect both named
visible process regions, and cannot be one aliased box reused under new keys.

Unknown keys, missing keys, shared object aliases, duplicate polylines,
nonfinite/out-of-core coordinates, coercible strings, caller-authored layout
claims, guide-only palette identity, or incomplete protection fail closed.
Source path, source ID, byte/hash, decode, dimensions, format, color, and
provenance must match exactly. Source law never reads or writes player save.

## Target, label, crop, and protected-region behavior

The semantic target is one native `type="button"` in the world layer and one
tab stop. It covers the projected target rect, centers on the projected
physical center, clamps only the final CSS target inside the world frame, and
never alters source coordinates. Its minimum size is `44 x 44` CSS pixels.
Target expansion for the minimum size must still produce zero protected
overlap.

The visible label uses the current verb, frozen provisional name, and a
non-color state word. It projects from the frozen label anchor, wraps within
it, remains at least `5px` from its own outer edge, and has at least `8px`
separation from the visible focus edge. It may occupy only the narration/UI
corridor among protected regions. It may not align into a trace-like row,
mask physical evidence, or become a native sign.

The source and runtime remain centered `cover`. No privileged viewport crop,
per-layout object position, byte crop, or crop-based concealment is allowed.
All six records are rederived from source geometry; stored layout records are
accepted only when byte-for-byte structurally equal to the derivation.

## Action, eligibility, and one-hit activation

| Action/state | Eligibility and exact result | Focus/announcement |
| --- | --- | --- |
| LOOK | lawful native, Terminal closed; write-free existing observation | hotspot remains focused; scene polite status once |
| TALK | lawful native, Terminal closed; complete nonresponse | hotspot remains focused; no voice/sound cue; status once |
| USE available | first lesson has no accepted mastery | existing first primary phase; Terminal title focus |
| USE first lesson in progress/remediation | accepted first-lesson evidence, not mastered | exact first incomplete/repair phase; Terminal title focus |
| USE second lesson in progress/remediation | strict first mastery, second not mastered | exact first incomplete/repair phase; Terminal title focus |
| USE complete | both strict masteries | read-only completion/next-boundary copy; hotspot remains focused |
| native unlawful | any source/provenance/geometry/layout/decode failure | no native node; exact eligible generic launcher and safe focus |

Pointer click, single touch, Enter, Space, programmatic semantic click, and
switch-like activation converge on native button `click`. Combat adds no
parallel pointer/touch/key dispatch. Held repeat, duplicate event, a second
activation while Terminal is open, and activation after native invalidation
dispatch zero additional actions. One accepted activation produces exactly
one dialogue replacement or one Terminal open.

## Focus, announcement, resume, and recovery

- On lawful first entry or deterministic resume at this boundary, focus the
  native hotspot only when it is the first incomplete action; announce the
  restored state once, never every render.
- LOOK/TALK and complete USE retain hotspot focus. Native incomplete USE sends
  focus to the shared Terminal title.
- Misses use the existing Terminal invalid field/repair focus and existing
  result live region; no score, answer, or objective text enters scene status.
- Visible Close and Escape restore the exact connected hotspot. If lawfulness
  disappears, restore the first eligible generic launcher, then the unchanged
  later fallback, never a detached native ref.
- Strict first-lesson mastery returns to the native hotspot and announces the
  second-lesson state once. Strict second mastery returns there and announces
  completion once without ceremony or world change.
- Close/reopen retains the exact in-memory session, current form/index, draft,
  result, and hint position. Closing writes no evidence.
- Reload/resume retains only existing sanitized evidence, clears drafts,
  results, focus/pointer/timing/source/presentation metadata, and reconstructs
  the first incomplete phase.
- Malformed or stale lesson evidence cannot unlock a later lesson. Malformed,
  partial, stale, mismatched, disabled, undecoded, or wrong-identity native
  state atomically restores generic controls and a bounded System fallback
  announcement.
- Route return is write-free, focuses the lawful native hotspot when present,
  and announces returned plus current state once. The world image, source,
  trace, seams, water, light, and route do not change.
- Demo Tour remains isolated and can mint no campaign evidence.

The existing single scene `role=status`, `aria-live=polite`,
`aria-atomic=true` remains the sole scene announcer. Terminal live regions
remain sole owners of scores and Teacher repair.

## Six-layout and equivalent-truth matrix

| Layout | Exact viewport and requirement |
| --- | --- |
| wide | `1920x1080`; centered 16:9 world, complete relation and all centers visible, no outer scroll before action |
| laptop | `1366x768`; same target/anchor/protection thresholds; label wraps inside anchor |
| narrow | `390x844`; scene then command panel in source order; centered source overrides the generic ruins crop; natural vertical scroll only |
| effective 200% | `768x900`; one-column natural flow where required; complete target, label, focus, title, Close, form, result, and action reachability |
| retained landscape | `320x180`; all hard geometry retained, target at least `44x44`, label wraps inside anchor, no horizontal escape |
| retained compact | `320x240`; same hard geometry plus representative forced-color proof and no horizontal escape |

Every layout requires relation retention `>= .95`, all essential centers
visible, target contained and `>=44x44`, physical center in target, label
contained, focus separation `>=8px`, target protected overlap `0`, label
overlap `0` except its permitted narration/UI corridor, and
`scrollWidth == clientWidth`. A declared center/crop mutation must reduce
retention by `>.05`, hide an essential center, make the target too small, or
cause protected overlap and be rejected.

Forced colors preserve button, textual state, border-style state, visible
focus, target containment, label containment, and the sr-only physical/state
descriptions with `forced-color-adjust:auto`. Solid means available, dashed
in-progress, dotted remediation-required, and double complete. Source pixels
may disappear without removing operation or meaning.

Reduced motion commits native/generic selection directly, removes decorative
transition/filter/scroll timing, and preserves identical state, action,
focus, announcement, and recovery. Color, sound, motion, fine texture, and one
crop are never the sole carrier of physical or interaction meaning. Human AT
usability remains unavailable and is not claimed.

## Edit, composite, and accepted-media atomicity law

Targeted generation edits may change exactly one diagnosed physical group.
They cannot move or redefine the frozen transform, semantic target, physical
center, label anchor, protected rectangles, contact-window identities, crop,
camera, dry-route continuity, or any already-passing interaction relation.
After every edit, all visible-pixel measurements are recomputed; unchanged
groups must retain their hard PASS. A better-looking whole-frame restage is a
regression, not a repair.

The optional binary composite may select only between two normalized recorded
parents at one frozen process boundary. It cannot move a control coordinate,
shift/crop a parent, duplicate an interlock, create a reaction, fabricate a
branch, hide prohibited content, or let a mask edge become player-visible.
Post-composite visible measurements and all interaction/protection relations
must be recomputed. Normalization changes encoding only.

No candidate changes runtime or accepted inventory. Only the first complete
pre-import PASS may become the one selected source. Source, provenance,
registry, URL, and accepted bytes must commit atomically; any mismatch leaves
the v2 registry disabled/null and the two generic launchers active. Import or
activation failure removes only exact identity-proved new effects and restores
the verified null-first state. Existing accepted originals remain immutable.

## Combat acceptance matrix

| ID | Required proof |
| --- | --- |
| `PX15-01` | permitted diff only; no guide build/view, media, product source population, or unrelated file action |
| `PX15-02` | exact `v2` schema/source/provenance identities; deep-frozen disabled/null registry remains inert |
| `PX15-03` | pure guide-core transform accepts exact controls and rejects out-of-core, rounding, clamping, percentages, and altered scale/origin |
| `PX15-04` | guide controls and visible-pixel measurements are separate; guide-only population cannot pass geometry |
| `PX15-05` | every visible physical group, process evidence, pairwise contact, trace reaction, three main seams, branch, water, target, center, anchor, and eight protected regions is required |
| `PX15-06` | removed/displaced/aliased/color-only group, reused contact box, duplicate seam, missing branch, regularized trace, crop shift, and protected overlap fail independently |
| `PX15-07` | source ID `FRM15-A01`, provenance schema, path, bytes/SHA, format/color/dimensions/decode all fail closed on mismatch |
| `PX15-08` | one atomic selector: native `1`/affected generic `0` only after complete lawful presentation; otherwise native `0`/correct generic `1` |
| `PX15-09` | exact predecessor and ordered first-incomplete lesson law; LOOK/TALK/complete USE write zero evidence/save/world state |
| `PX15-10` | pointer, touch, Enter, Space, and switch-like click dispatch once; repeat/duplicate/Terminal-open dispatch no additional action |
| `PX15-11` | one native semantic button, stable name/descriptions/text state, no duplicate tab stop or div-button |
| `PX15-12` | title-first modal focus, Tab containment, Close/Escape, connected-trigger restoration, and generic fallback restoration |
| `PX15-13` | entry/action/miss/ack/mastery/close/reload/resume/return/invalidity focus and announcement table is exact and non-replaying |
| `PX15-14` | close/reopen session continuity; reload clears private/transient fields; malformed evidence/source returns safely |
| `PX15-15` | all six exact layouts pass thresholds; center/crop mutation fails; caller-authored records cannot override derivation |
| `PX15-16` | narration/UI is an allowed label corridor only; target overlaps no protected region and label overlaps no other protected region |
| `PX15-17` | forced color, reduced motion, effective 200%, no horizontal escape, and non-sensory equivalence preserve operation and meaning |
| `PX15-18` | save/privacy/offline/Tour/route/later boundary/equal ending/`successor=null` remain unchanged |
| `PX15-19` | `FRPBA-015-v1` is only the shell-required path/identity overlay; source remains null and PBA source-dependent PASS is not claimed |
| `PX15-20` | existing exact-input product evidence is marked `REUSED`; only changed source-law/projection focused checks run now |

Combat may add or change tests only where the v2 namespace, guide mapping,
branch/contact/reaction schema, or narration/UI protection introduces a new
failure mode. It must not duplicate predecessor tests or rerun unrelated/full
suites at this stage. A behavior-affecting product diff invalidates only the
focused source-law/projection evidence now; related regression expands only if
the diff crosses shared route/save/privacy. One cold full suite remains after
the final behavior-affecting JS/config/test change, not at this handoff.

## Placeholder ledger and regression radius

Combat owns the v2 null-first schema, pure coordinate mapping, lawfulness,
responsive derivation, atomic selector compatibility, focused mutations, and
the minimal PBA overlay. It may issue `REUSED / NO PRODUCT DELTA` only if the
current source law already proves every v2 requirement; the current v1 identity
does not satisfy that claim by name alone.

Quartermaster alone builds/views guides, invokes built-in generation/edit,
measures source pixels, populates source/provenance/visible/control/layout/copy
fields, imports accepted bytes, and records custody. Image Specialist acts
only on code/config presentation after accepted import. Intelligence owns the
fresh exact-candidate holdout and maturity.

Regression radius is the exact predecessor boundary, the two generic rollback
launchers, both owned lesson flows and sanitation, shared Terminal, source
projection, current later boundary, Demo Tour, save/privacy/offline, returns,
both ending outcomes, RP-012, and `successor=null`. No new state, lesson,
answer, reward, authority, world response, route, save field, dependency,
request, or media behavior is authorized.

## Validation, variances, and hard stop

Fresh Tactical validation is textual/integrity-only: exact authority and
source-control identities, transform arithmetic, registry-key completeness,
six-layout/interaction/focus/recovery coverage, protected-boundary coverage,
and the exact blueprint/state diff. No guide or media was built, viewed,
inspected, edited, transformed, or imported. No image call, product test,
build, validator, browser, E2E, or product/runtime action occurred.

Product evidence remains `REUSED` from `FRCE-014-v1`: focused `31/31`, related
`63/63`, cold full `1047/1047`, validators `40/40`, builds `234/57`, and
null-first PBA. That evidence proves the unchanged predecessor only; it is not
source-enabled or v2 proof. The independent committed-release holdout remains
reused only for `FRAB-013-v1`.

No variance is requested. Canon conflict returns to Colonel; scope/order to
Operations; source-law, guide/tool, accessibility, performance, or verifier
infeasibility through Mission to Science; shell ambiguity to Mission;
directorial conflict to Recon; and remaining interaction/focus/reflow/recovery
ambiguity to Tactical.

Tactical stops after this implementation-exact information artifact and
compact checkpoint. It does not begin Combat.

## Convergence handoff to Combat

```yaml
convergence_handoff:
  mode: OPERATE
  state_version_read: FRLS-REC-005-v1
  state_version_written: FRLS-TAC-005-v1
  current_ref: FRPX-015-v1_player_experience_state
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  binding_gap_or_hypothesis: >-
    An exact guide-core transform, distinct visible-pixel evidence class, and
    v2 fail-closed registry can make source geometry and interaction relations
    testable without letting guide correctness stand in for player-facing truth.
  action_kind: information
  predicted_effect: >-
    Combat can implement the smallest null-first source-law migration and
    deterministic focused proof without touching media or rerunning unaffected gates.
  verifier_vector:
    shell_treatment_compatibility: PASS
    guide_to_normalized_mapping: PASS_BLUEPRINT_EXACT
    visible_pixel_vs_control_separation: PASS_BLUEPRINT
    registry_v2_null_first: PASS_BLUEPRINT
    atomic_native_generic_replacement: REUSED_AND_V2_ACCEPTANCE_DEFINED
    action_focus_announcement_recovery: PASS_BLUEPRINT
    six_layout_accessibility: PASS_BLUEPRINT_CANDIDATE_UNKNOWN
    accepted_media_atomicity: PASS_BLUEPRINT_CANDIDATE_UNKNOWN
    product_or_media_effect: NONE
    product_evidence: REUSED_FRCE_014
  delta_vs_best: zero_product_zero_media_zero_maturity_positive_implementation_information
  budget_used:
    guide_families: 0
    stochastic_calls: 0
    deterministic_media_operations: 0
    private_candidate_inspections: 0
    product_tests_builds_validators_browser_e2e: 0
  budget_remaining:
    guide_families: 2_hard_1_executable
    stochastic_calls: 6_hard_3_initial
    deterministic_media_operations: 12
    private_candidate_inspections: 8
    final_proof: FULL_PROTECTED
  remaining_uncertainty:
    - Combat v2 implementation and focused source-law proof
    - actual built-in output identity and visible guide adherence
    - future source measurements and six-layout browser corroboration
    - future accepted-source integration and independent release
    - human assistive-technology usability study
  decision: GATHER_EVIDENCE
  decision_evidence:
    - exact coordinate authority and evidence classes are non-overlapping
    - every player action and recovery maps to released primitives
    - generic fallback remains the best verified product state
    - no verifier-relevant product input changed at Tactical
    - Combat is the next least-powerful sufficient effect owner
  next_owner: combat_engineer
```

Tactical signature:
**`PLAYER EXPERIENCE READY / FRPX-015-v1 / COMBAT NEXT`**.

Exact Combat handoff: read this blueprint, `FRSH-015-v1`, `FRCT-015-v1`,
`FRWO-015-v1`, `FRVE-015-v1`, `FRLS-TAC-005-v1`, the frozen guide/control
identities, and the exact predecessor registry/projection/interaction/focus/
recovery code and focused tests. Implement only the smallest fail-closed v2
source-law, deterministic guide-core mapping, new schema failure modes, and
`FRPBA-015-v1` overlay while source remains disabled/null. Run only fresh
focused checks invalidated by those changes and expand only with a documented
shared-boundary invalidation. Issue `FRCE-015-v1`, commit/push exactly the
permitted Combat changes, and hand Quartermaster the synchronized candidate.
Do not build/view guides, invoke image generation, inspect/edit/import media,
populate selected source/provenance/geometry, change copy/lesson/route/save/
ending meaning, perform presentation polish, or advance maturity.
