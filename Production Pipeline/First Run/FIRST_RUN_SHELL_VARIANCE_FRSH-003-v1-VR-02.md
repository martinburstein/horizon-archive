# First Run Shell Variance Reissue - Sixfold Weir Live Acceptance

Variance ID: `FRSH-003-v1-VR-02`

Disposition: **`FIRST RUN SHELL READY / FRSH-003-v1-VR-02`**

Stage / owner: Mission Captain / `mission_captain`

Governing shell: `FIRST RUN SHELL READY / FRSH-003-v1`

Prior Mission hold: `HOLD / RETURN TO SCIENCE / FRSH-003-v1-VR-01`

Science return: `POLISH VIABILITY READY / FRVE-003-v1-VR-01`

Tactical return: `PLAYER EXPERIENCE READY / FRPX-003-v1-VR-01`

Functional evidence: `HOLD / LIVE LAYOUT CONTRACT VARIANCE / FRCE-003-v1`

Work Order: `FRWO-003-v1 / Sixfold Weir`

Mission control source inspected:
`7af1e09553ec23591aa492a4b441d7ea8e5e0a7e`

Frozen product/test/manifest predecessor:
`a9776e337f1820776864a5690332c364d0fb2556`

Frozen corrected harness predecessor:
`bf58e528bc6ce4088f81f2c782ce2895259ab9fd`

Released rollback baseline:
`3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602`

Date: **2026-08-10**

## Decision

The Science and Tactical returns are compatible, measurable, and bounded.
Mission lifts the planning hold only for one exact Combat repair and one fresh
release-ladder attempt under this reissued shell.

The immutable physical Host 05 registration remains exact
`left 45% / top 75% / width 20% / height 25%`. Combat may add only the
Host-05-specific inline semantic activation and label containment mechanism
frozen below. Combat may then correct the live source and forced-color probes,
update their focused tests and `FRRC-002-v1` summary/verifier fields, and run
the complete validation ladder.

If every pre-live gate passes, this reissue authorizes exactly **one** new
complete E2E invocation under one fresh external GUID root. That invocation
must emit the machine-owned summary and the verifier must accept it. Any
failure stops the run and returns to Mission; it does not authorize a retry,
threshold change, alternate mechanism, or partial release.

Quartermaster remains blocked. This is not `PRODUCTION FUNCTIONAL`, a content
pass, a maturity advance, or a release.

## Planning conflict reconciliation

The prior `64 x 45` retained expectation used nominal viewport dimensions as
the percentage containing block. Accepted live evidence proves the actual
retained boxes are:

- `.scene-frame` border box: `313.984375 x 176.625`;
- equal `.scene-world-content` / `.scene-art` content box:
  `313.984375 x 175.625`; and
- exact physical `20% x 25%` registration:
  `62.796875 x 43.90625`.

`43.90625` is not rounded or credited as `44`. Science resolves the conflict
without moving the physical source registration: the semantic activation
keeps the physical left, width, and bottom and expands exactly `0.09375px`
upward at retained layouts to reach an exact `44px` height. Tactical separately
measures physical registration, semantic activation, visible label/state, and
rendered-source transform.

The former source-center failures were probe errors caused by using the
bordered `.scene-frame` as an image-source box and requiring a cover-transformed
sample center to equal the nominal full-source anchor. The corrected contract
begins at the actual `.scene-art` content box, reports both nominal and actual
source truths, and requires the nominal anchor to remain contained.

The former forced-color failures were probe errors caused by programmatically
focusing Host 05 after a pointer-driven journey. The corrected contract enters
forced colors first and proves Host 05 `:focus-visible` through genuine
keyboard `Shift+Tab -> Tab` traversal. Existing product CSS already supplies
the required `3px solid Highlight` rule; no CSS repair is authorized.

No player-facing behavior, meaning, learning, persistence, route, media, or
ending conflict remains in the planning contract.

## Frozen physical registration and source identity

The immutable Drowned master remains exact `1672 x 941`, `2,727,857` bytes,
SHA-256
`AFA0008E3F1E0CDACB2B9E58F14E9F676729EAB9E8725A58C87D73AC489C08ED`.

Physical Host 05 registration remains byte- and meaning-fixed:

```text
left: 45%
top: 75%
width: 20%
height: 25%
narrow: identical
normalized center: 55% / 87.5%
nominal source bounds: x 752.4-1086.8 / y 705.75-941
nominal source anchor: x 919.6 / y 823.375
```

`DROWNED_ARCHIVE_HOTSPOTS.sixfoldWeir`, its four physical geometry values,
the source plate, `.scene-frame`, `.scene-world-content`, `.scene-art`,
`object-fit: cover`, `object-position`, Host 04, return geometry, shared
hotspot CSS, and every other target are patch-forbidden.

The semantic correction may not become a new physical region, a new source
rectangle, an overlay asset, a media edit, or evidence that the world changed.
It remains centered on the same dry six-branch relationship and must preserve
exact zero activation overlap with Host 04 and the return ridge.

## Sole authorized product mechanism

Combat may change only the existing `isSixfoldWeir` render branch in
`horizon-archive-game/src/App.jsx` to apply the following Host-05-only inline
presentation values:

```text
semantic activation:
  left   = physical left
  width  = physical width
  top    = min(75%, calc(100% - 44px))
  height = max(25%, 44px)

visible label/state border box:
  inset         = 2px
  padding       = 1px
  letterSpacing = 0
  overflow      = hidden
```

Combat may inline-reset only the existing label properties necessary to make
that exact inset authoritative: `left`, `right`, `top`, and `bottom` to `2px`,
`width` and `height` to the resulting auto/inset size, and the inherited
translation to `none`. It may not change label text, owner, state token,
accessible name, font family/size/weight, color, focus treatment, visibility
lifecycle, action, or shared CSS.

For desktop, laptop, narrow, and effective-`200%`, `25%` already exceeds
`44px`; semantic activation remains geometrically equal to physical
registration. At both retained layouts only:

```text
physical registration: x 141.29296875 / y 131.71875 /
                       w 62.796875 / h 43.90625
semantic activation:   x 141.29296875 / y 131.625 /
                       w 62.796875 / h 44
label border box:       x 143.29296875 / y 133.625 /
                       w 58.796875 / h 40
```

The activation bottom remains exact `175.625`, equal to the physical bottom.
The semantic center moves only `0.046875px` upward and the physical center
remains strictly inside activation. No tolerance or rounding supplies the
minimum.

This mechanism adds no CSS, module, dependency, request, media, copy, save
field, state, route, or learning change. Any additional product mechanism is
an unauthorized variance and stops Combat.

## Exact rendered-image measurement contract

The live probe must record raw finite floating-point rectangles for:

1. `.scene-frame` border box;
2. `.scene-world-content` hotspot containing block;
3. `.scene-art` image element/content box;
4. derived physical `45/75/20/25` registration;
5. actual Host 05 semantic activation;
6. visible Host 05 label/state;
7. Host 04;
8. the return-ridge hotspot; and
9. the inventory `Return: Glass Meadow` action.

The containing block and `.scene-art` box must remain exactly equal in x, y,
width, and height. Image border and padding remain zero. `.scene-frame` is
recorded separately and never supplies a source transform.

Source mapping begins only from
`.scene-art.getBoundingClientRect()`, natural `1672 x 941`, and computed
`object-fit` / `object-position`:

```text
scale = max(imageWidth / 1672, imageHeight / 941)
drawW = 1672 * scale
drawH = 941 * scale
offsetX = (imageWidth - drawW) * objectPositionX
offsetY = (imageHeight - drawH) * objectPositionY

sourceLeft   = (physical.left   - image.left - offsetX) / scale
sourceTop    = (physical.top    - image.top  - offsetY) / scale
sourceRight  = (physical.right  - image.left - offsetX) / scale
sourceBottom = (physical.bottom - image.top  - offsetY) / scale
```

Accept only current finite percentage/keyword object-position forms. An
unknown or length-offset form fails closed; it may not default to center.

The record keeps these as separate truths:

- normalized physical center remains exact `55% / 87.5%` and nominal source
  anchor remains `919.6 / 823.375`; and
- cover painting yields an actual transformed source sample/center whose
  nominal anchor must be contained.

Do not require the actual transformed center to equal the nominal anchor.
Two-dimensional nominal-band retention must be finite and `>=0.95`. Activation
overlap with Host 04 and return must be exact zero. Semantic width/height are
each `>=44`; the visible label/state is strictly inside activation with exact
`2px` inset, `scrollWidth <= clientWidth`, and
`scrollHeight <= clientHeight`; and page horizontal overflow is false.

No `+/-1px` containment allowance, integer rounding, screenshot estimate,
nominal viewport substitution, or frame-derived source math is permitted.

## Exact six-layout expectations

The complete expected rows from `FRVE-003-v1-VR-01` and
`FRPX-003-v1-VR-01` are frozen by reference and must be emitted in the machine
summary at full precision. At minimum they include:

| Layout | Content/image box | Physical `w x h` | Semantic `w x h` | Retention |
| --- | --- | --- | --- | ---: |
| desktop | `1428.59375 x 802.5625` | `285.71875 x 200.640625` | same | `0.9942341283489181` |
| laptop | `1328.515625 x 746.25` | `265.703125 x 186.5625` | same | `0.9938484555239582` |
| narrow | `383.984375 x 215` | `76.796875 x 53.75` | same | `0.9795278501799451` |
| effective-200 | `746.015625 x 418.625` | `149.203125 x 104.65625` | same | `0.9906110492900371` |
| retained-320x180 | `313.984375 x 175.625` | `62.796875 x 43.90625` | `62.796875 x 44` | `0.9754376065442601` |
| retained-320x240 | `313.984375 x 175.625` | `62.796875 x 43.90625` | `62.796875 x 44` | `0.9754376065442601` |

The summary must also include each exact frame box, x/y position, semantic
bottom-anchor result, label rectangle, physical normalized ratios/center,
nominal source bounds/anchor, actual transformed bounds/center, anchor
containment, Host 04/return rectangles and overlap areas, overflow, and all
focus/motion fields required below.

## Genuine keyboard forced-color focus contract

Run this probe independently at all six layouts in the sanctioned Host 05
`in_progress` reload/recovery state with no modal open:

1. Enter forced-colors mode and reduced-motion mode before focus verification.
2. Require `matchMedia('(forced-colors: active)').matches === true`.
3. Send no pointer event and never call `host.focus()`.
4. Confirm DOM order Host 04, Host 05, return ridge and enabled tab order
   Host 05, `LOOK AT`, `TALK TO`, `USE`, inventory `Return: Glass Meadow`.
5. From the lawful recovery focus on Host 05, send genuine keyboard
   `Shift+Tab`; require inventory `Return: Glass Meadow` to become
   `document.activeElement` and match `:focus-visible`.
6. Send genuine keyboard `Tab` once; require Host 05 to become
   `document.activeElement` and `host.matches(':focus-visible') === true`.
7. Require exact computed `outlineWidth === '3px'`,
   `outlineStyle === 'solid'`, and a finite nontransparent outline color equal
   to a temporary same-context system `Highlight` probe. Remove that probe
   immediately.
8. Require accessible name, explicit `in progress` state, hotspot/state data
   attributes, DOM/tab order, activation rectangle, and label rectangle to
   remain unchanged by focus.
9. Require every computed animation and transition duration and delay on Host
   05 and its label to be zero under reduced motion.

Record exact key sequence `Shift+Tab -> Tab`, predecessor identity, active
element, `:focus-visible`, media-query result, system-color equality, and the
pre/post identity/geometry snapshots.

Programmatic focus remains valid evidence for the separate reload-recovery
contract but supplies zero forced-color acceptance evidence. Pointer history,
pointer activation, forced colors enabled after focus, static CSS-string
presence, a `2px` outline, a non-solid outline, or a non-system color fails.

## Frozen interaction, meaning, learning, and state firewall

This reissue changes no original `FRSH-003-v1` state or player contract:

- Host 05 remains absent before exact sanitized Host 04 mastery.
- Pure `available`, `in_progress`, `remediation_required`, and `complete`
  states derive only from existing sanitized `workloadEvidence` and
  `responsibleAIEvidence`; there is no new hook or persistence.
- Actual DOM order remains Host 04, conditional Host 05, return, command
  surfaces, and unchanged continuation.
- `LOOK AT` owns physical fact, `TALK TO` owns silence, and sole campaign
  `USE Sixfold Weir` opens unchanged `L02-02`.
- Completed `USE` remains read-only with no modal, session, attempt, hint,
  check, explanation, confidence, evidence, save, route, or world write.
- Detection, close, Escape, miss, primary acknowledgement, transfer,
  explanation, mastery, reload, Meadow return, completed revisit, malformed
  recovery, focus owners, and announcements remain exact.
- Exactly seven placeholders remain byte- and meaning-frozen:
  `FRPX03_UNSEEN_INTERFACE`, `FRPX03_AVAILABLE`, `FRPX03_IN_PROGRESS`,
  `FRPX03_MISSED`, `FRPX03_MASTERED`, `FRPX03_RETURNED`, and
  `FRPX03_NEXT_BOUNDARY`.
- Machine and Builders own no line. Combat writes no final copy.
- Six principles, six primary and six transfer scenarios, four dimensions,
  strict `24/24`, explanation, confidence, ownership, evaluator, remediation,
  sanitizer, objective mapping, evidence, privacy, and save are unchanged.
- Host 04, `L02-03`, later Drowned order, Meadow return/redeparture, Witness,
  City, later rail, equal MH-40 outcomes, null deltas, and `successor=null`
  remain exact.
- There is no Host 06 parity, City repair, reward, access, identity, authority,
  response, successor, RP-013, or post-ending content.

The reconciled `PX03-01` through `PX03-30` matrix remains mandatory with the
exact VR-01 clarifications. No test or probe convenience may modify a player
contract.

## Performance, offline, media, and patch caps

Current frozen candidate evidence is:

- JavaScript `1,666,377` under narrow cap `1,675,664`;
- CSS `119,247` under narrow cap `119,281`;
- modules `217` at narrow cap `217`; and
- immutable media exact `17 / 37,410,731`.

Narrow headroom is exact `9,287 JavaScript / 34 CSS / 0 modules`, but this
repair may consume JavaScript headroom only. Emitted CSS must not increase,
module count must remain `217`, and media remains exact. Global PBA, Host 05
`<=2ms`, total sampled task `<=100ms`, focused/related/full/build/E2E time
caps, offline/no-request, dependency, lockfile, network, service-worker,
source-map, Python/WASM, credential, endpoint, telemetry, storage, and external
action gates remain exact.

Any cap failure is `HOLD`; there is no quality waiver or second implementation
mechanism.

## Exact permitted Combat changes

Combat may change only:

- `horizon-archive-game/src/App.jsx`: the exact `isSixfoldWeir` inline semantic
  activation/label values above;
- existing exact Host 05 focused tests, or one already-authorized
  `horizon-archive-game/test/sixfoldWeir.test.js`, for physical-versus-semantic
  boxes and exact inset containment;
- `playtest/e2e-playthrough.mjs`: preserve both corrected `bf58e52`
  placeholder assertions; replace only the Host 05 source transform, retained
  semantic/label measurement, genuine keyboard forced-color probe, and live
  summary fields described here;
- `Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json`:
  update only live-summary/verifier required fields while preserving command
  meaning, external root, candidate freeze, ownership, timeouts, and cleanup;
- `Production Pipeline/First Run/FIRST_RUN_FUNCTIONAL_REPORT_FRCE-003-v1.md`
  or one versioned bounded functional variance report; and
- `NEXT_INSTANCE_HANDOFF.md`.

No other product, CSS, module, test, harness, manifest, fixture, curriculum,
save, story, map, scoreboard, media, or control file may change without a
returned variance. Existing temporary/build outputs remain owned only by their
exact manifest entries.

## Candidate construction and immutable-run identity

Combat must begin from exact corrected harness candidate
`bf58e528bc6ce4088f81f2c782ce2895259ab9fd`, which directly descends from
product candidate `a9776e337f1820776864a5690332c364d0fb2556`.

Before any release ladder:

1. apply only the permitted product/test/harness/manifest delta;
2. run focused static integrity checks;
3. commit the complete bounded repair as one candidate commit;
4. freeze and record that full candidate hash;
5. prove its ancestry and exact diff from `a9776e3` / `bf58e52`; and
6. run every later gate against that committed candidate with no tracked or
   candidate-relevant untracked drift.

The E2E and summary must record both frozen predecessor identities and the new
full repaired candidate. Any candidate mismatch or post-freeze product/test/
manifest change invalidates the run and returns `HOLD`. Control reports and
handoff follow only after the candidate validation completes.

## Reissued executable validation ladder

Combat records exact command/manifest entry, frozen candidate, elapsed time,
result, and honest unavailable evidence for every gate:

1. **Integrity:** exact ancestry and permitted diff; seven placeholders;
   physical hotspot constants; prior two harness corrections; immutable master
   and full media hash set; protected boundaries; forbidden-change scan;
   `git diff --check`.
2. **Focused (`<=30s`):** physical `45/75/20/25`; Host-05-only semantic
   min-`44` bottom anchor; exact retained `62.796875 x 44`; inset label box;
   no CSS/module change; all original Host 05 state/action/focus/privacy tests.
3. **Related (`<=60s`):** original Host 04, responsible-AI, save/reload,
   Meadow return, Demo Tour, later Drowned, Witness, City, later rail, and
   ending radius.
4. **Cold full and validators (`<=60s` each):** `node --test`; exactly forty
   sorted `validate*.py --self-test` invocations.
5. **Build/PBA/media:** production and exact fixture builds; narrow/global
   PBA; modules exactly `217`; CSS no growth; media exact; no dependency or
   request; sampled tasks under caps.
6. **Served identity:** strict owned production/fixture previews; root/deep/
   JS/CSS HTTP success and served-to-disk byte identity.
7. **Exactly one fresh complete E2E (`<=180s`):** only after gates 1-6 pass,
   invoke `playtest/e2e-playthrough.mjs` once under the external-root contract.
   It must prove the original complete journey, actual miss/remediation,
   close/reload, transfer/explanation/mastery, completed read-only `USE`, all
   six clarified geometry/source/label/focus/motion rows, unchanged later rail,
   both equal MH-40 outcomes, null deltas, `successor=null`, Host 05 `<=2ms`,
   and zero runtime errors.
8. **Summary/verifier:** the same E2E emits exactly one
   `first-run-live-summary.json`; the independent manifest verifier runs once
   against it and must accept exact schema, candidates, six layouts, all
   clarified fields, invariants, runtime aggregate, and `pass=true`.
9. **Cleanup/identity:** stop only recorded preview/browser PIDs, prove ports
   `4173` / `4184` clear, repeat exact containment, remove only the fresh owned
   external GUID root, preserve protected/user state, prove clean candidate
   identity, commit the functional report/handoff separately, push, and prove
   synchronization.

Prior failed/diagnostic journeys are historical evidence and do not count as
this reissued single run. This shell grants one new invocation because the
planning contradiction and probe contract are now versioned and closed.

If the new E2E fails or aborts for any reason, no rerun is authorized. If it
does not emit the summary, the verifier does not pass, cleanup is ambiguous,
or candidate identity drifts, disposition remains `HOLD` and Combat returns to
Mission with exact evidence.

## Fresh external GUID-root contract

Resolve the OS temporary parent and repository root at execution time. Create
one new nonexisting GUID-suffixed child strictly inside the resolved OS temp
parent and outside the repository. Reprove exact containment before every
write and delete. Pass only that absolute child as
`HORIZON_ARCHIVE_QA_DIR` to the sole E2E.

The E2E emits the summary inside that owned child. The verifier reads only that
summary. Cleanup removes only the exact child after repeated containment and
stops only recorded PIDs. Broad globbing, parent deletion, repository QA use,
real browser/profile/save access, or unresolved-path deletion is forbidden.

## Definition of done and downstream stop

Combat may issue `PRODUCTION FUNCTIONAL / BUILD CANDIDATE READY` only when the
same frozen repaired candidate passes every ladder gate, the sole E2E emits an
accepted summary, the verifier passes, cleanup is exact, all variances are
classified, and Git is synchronized.

Even on PASS, Combat hands the exact candidate to Quartermaster through
`NEXT_INSTANCE_HANDOFF.md`; Combat does not begin Quartermaster, write final
copy, change a placeholder, advance maturity, or release.

Quartermaster remains unauthorized until a successful Combat disposition and
exact synchronized handoff exist. Image Specialist and Intelligence remain
later sequential stages.

## Rollback and hard stops

Rollback baseline remains exact
`3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602`. Bounded rollback removes only
the FRWO-003 Host 05 product/test/E2E/manifest delta and current-cycle reports,
restores exact baseline blobs, and requires no save migration. It never resets
the repository, rewrites prior release controls, alters historical
`FRRC-001-v1`, or touches protected/untracked/user state.

Immediate `HOLD` applies to:

- any physical registration, source, image, crop, center, retention, overlap,
  `44px`, label, focus, forced-color, reduced-motion, summary, verifier,
  cleanup, performance, PBA, media, or candidate mismatch;
- any mechanism beyond the exact Host-05 inline activation/label correction;
- CSS or module growth, dependency/network/runtime request, media operation,
  or a second E2E invocation;
- placeholder/copy/owner change, learning/evaluator/sanitizer/evidence/privacy/
  save change, route/world/later-rail/ending change, Host 06 promotion, City
  repair, reward/access/identity/authority/response, successor, RP-013, or
  post-ending content; and
- hidden lore, protected path, Martin's browser/profile/save, destructive or
  broad cleanup, automation, schedule, reveal, or archived-workflow access.

No downstream role may silently revise this reissue.

## Mission validation and signature

- Read current `NEXT_INSTANCE_HANDOFF.md`, complete
  `FRSH-003-v1-VR-01`, `FRVE-003-v1-VR-01`,
  `FRPX-003-v1-VR-01`, original governing controls, and complete
  `FRCE-003-v1`.
- Confirmed `a9776e3 -> bf58e52 -> 7af1e09` ancestry and no product/test drift
  after the corrected harness candidate.
- Reconciled exact six-row physical/semantic/source geometry and genuine
  keyboard forced-color acceptance without running a product test, build,
  preview, browser, validator, verifier, or E2E.
- Changed no product, test, harness, manifest, media, copy, learning, save,
  route, world, ending, maturity, map, scoreboard, automation, or schedule.
- Did not inspect or mutate protected/untracked paths, hidden lore, or Martin's
  browser/profile/save.

Mission Captain signs **`FIRST RUN SHELL READY /
FRSH-003-v1-VR-02`** from source
`7af1e09553ec23591aa492a4b441d7ea8e5e0a7e`.

## Exact Combat handoff

Combat Engineer must read this reissue, `FRSH-003-v1`,
`FRSH-003-v1-VR-01`, `FRVE-003-v1-VR-01`,
`FRPX-003-v1-VR-01`, and complete `FRCE-003-v1`. Starting from exact
`bf58e52`, implement only the Host-05 inline semantic activation/label repair,
focused proof, `.scene-art` source transform, genuine
`Shift+Tab -> Tab` forced-color probe, and required `FRRC-002-v1` summary/
verifier fields.

Freeze one committed repaired candidate, run every pre-live gate, then invoke
exactly one fresh GUID-root complete E2E only if those gates pass. Accept only
an emitted machine summary plus passing verifier. On any failure, stop and
return `HOLD` without rerun. On complete PASS, issue one versioned functional
report and exact Quartermaster handoff, commit/push authorized Combat scope,
and prove `HEAD == origin/main`.

Do not write final copy, change any placeholder, CSS, module, media, learning,
save, route, world, later rail, ending, maturity, map, scoreboard, or protected
state; do not begin Quartermaster, create a reveal/schedule, or call
`FIRST RUN COMPLETE`.
