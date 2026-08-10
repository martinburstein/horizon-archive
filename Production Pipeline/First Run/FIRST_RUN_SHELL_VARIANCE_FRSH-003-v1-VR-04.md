# First Run Shell Variance Reissue - Browser-Resolved Sixfold Proof

Variance ID: `FRSH-003-v1-VR-04`

Disposition: **`FIRST RUN SHELL READY / FRSH-003-v1-VR-04`**

Stage / owner: Mission Captain / `mission_captain`

Governing shell: `FIRST RUN SHELL READY / FRSH-003-v1`

Prior Mission hold: `HOLD / RETURN TO SCIENCE THEN TACTICAL /
FRSH-003-v1-VR-03`

Science return: `POLISH VIABILITY READY / FRVE-003-v1-VR-02`

Tactical return: `PLAYER EXPERIENCE READY / FRPX-003-v1-VR-02`

Functional evidence: `HOLD / VR-02 LIVE CONTRACT VARIANCE / FRCE-003-v1`

Work Order: `FRWO-003-v1 / Sixfold Weir`

Mission control source inspected:
`a9e0670115d8925840d7f57438f720031b9e3298`

Frozen repaired product/test candidate:
`7e85154abd8dbf116c4bb84ca66afd859903d750`

Frozen predecessor lineages:
`a9776e337f1820776864a5690332c364d0fb2556` /
`bf58e528bc6ce4088f81f2c782ce2895259ab9fd`

Released rollback baseline:
`3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602`

Date: **2026-08-10**

## Decision

Science and Tactical now provide one compatible, exact, non-weakened
acceptance contract. Mission lifts the planning hold for a harness-only Combat
correction and one fail-closed release-ladder attempt.

No product repair is required or authorized. Candidate
`7e85154abd8dbf116c4bb84ca66afd859903d750` remains the exact product/test
candidate. Its authored physical `45/75/20/25`, bottom-anchored semantic
activation `>=44 x 44`, contained visible label, actual rendered-image source
mapping, genuine forced-color focus-visible treatment, reduced-motion parity,
learning, save, route, media, later rail, and ending remain frozen.

Combat may correct only stale Host 05 measurement, order, focus-path, summary,
and verifier expectations in the existing E2E harness and
`FRRC-002-v1`. It must commit that documentation/harness delta as a separate
probe candidate while continuing to identify `7e85154` as the unchanged
product/test candidate.

After all deterministic pre-live gates pass against those exact identities,
Combat receives authority for exactly **one** fresh complete `FRRC-002-v1`
E2E under one new external GUID root. The E2E must emit exactly one machine-
owned summary and the independent manifest verifier must accept it. Any
failure, missing summary, verifier rejection, identity drift, ambiguous
cleanup, or protected-boundary concern returns `HOLD` with no rerun.

Quartermaster remains blocked until Combat issues a fully passing synchronized
functional report and exact handoff. This decision is not release acceptance,
a maturity advance, final copy authority, or `FIRST RUN COMPLETE`.

## Reconciled variance contract

| Prior contradiction | Reissued exact contract | Product effect |
| --- | --- | --- |
| Unquantized percentage arithmetic was compared to browser DOMRect bytes | Exact authored declarations are checked separately; browser used values use `q=1/64 CSS px`, `Q(v)=floor(v/q)*q`, then strict component equality | none |
| Label `2px` was treated as an outer-border inset | `2px` is from the button inner content/padding edge; across the exact `1px` button border, outer-border distance is exact `3px` | none |
| Probe expected `LOOK AT -> TALK TO -> USE` | Actual enabled order is Host 05 -> `LOOK AT` -> `USE` -> `TALK TO` -> inventory return | none |
| Probe invented inventory return as Host 05's cyclic predecessor | Host 05 has no enabled in-document predecessor; genuine focus proof is Host 05 `Tab` -> `LOOK AT`, then `Shift+Tab` -> Host 05 | none |

These are harness and verifier corrections, not threshold exceptions. The
accepted VR-02 live facts remain diagnostic until the new complete ladder
passes; they do not themselves release the candidate.

## Frozen authored and browser-resolved geometry

The authoring gate requires byte- and meaning-exact Host 05 values in both
layout variants:

```text
left: 45%
top: 75%
width: 20%
height: 25%
normalized physical center: 55% / 87.5%
semantic top: min(75%, calc(100% - 44px))
semantic height: max(25%, 44px)
```

Let the actual equal `.scene-art` / `.scene-world-content` box be
`I=(Ix,Iy,Iw,Ih)`. Image border and padding remain exact zero. For the frozen
Chromium runner, let:

```text
q = 1/64 CSS px
Q(v) = floor(v / q) * q

browser-resolved physical registration P:
  P.x = Ix + Q(0.45 * Iw)
  P.y = Iy + Q(0.75 * Ih)
  P.w = Q(0.20 * Iw)
  P.h = Q(0.25 * Ih)

browser-resolved semantic activation S:
  S.x = Ix + Q(0.45 * Iw)
  S.y = Iy + Q(min(0.75 * Ih, Ih - 44))
  S.w = Q(0.20 * Iw)
  S.h = Q(max(0.25 * Ih, 44))
```

Every actual DOMRect component must equal its expected used value exactly.
`Q` is the frozen browser's positive-length resolution operator, not an
epsilon, approximation, nearest-pixel rule, decimal rounding permission, or
device-pixel conversion. A one-layout-unit difference fails. If the runner no
longer uses this exact lattice/operator, the result is environment-identity
`HOLD`; Combat may not infer a new model or tolerance.

The independently unquantized arithmetic rectangle may be recorded only as a
diagnostic. It is never compared byte-for-byte with DOMRect and never
substitutes for actual geometry. Direct player-facing gates remain raw and
full precision: actual `S.w >=44 && S.h >=44`, finite geometry, source-anchor
containment, retention `>=0.95`, exact zero Host 04/return overlap, exact label
containment/no scroll, and no page overflow.

Expected used-value sizes remain exact:

| Layout | Physical `P w x h` | Semantic `S w x h` | Label border `w x h` | Label content `w x h` |
| --- | --- | --- | --- | --- |
| desktop | `285.71875 x 200.640625` | same | `279.71875 x 194.640625` | `275.71875 x 190.640625` |
| laptop | `265.703125 x 186.5625` | same | `259.703125 x 180.5625` | `255.703125 x 176.5625` |
| narrow | `76.796875 x 53.75` | same | `70.796875 x 47.75` | `66.796875 x 43.75` |
| effective-200 | `149.203125 x 104.65625` | same | `143.203125 x 98.65625` | `139.203125 x 94.65625` |
| retained-320x180 | `62.796875 x 43.90625` | `62.796875 x 44` | `56.796875 x 38` | `52.796875 x 34` |
| retained-320x240 | `62.796875 x 43.90625` | `62.796875 x 44` | `56.796875 x 38` | `52.796875 x 34` |

At retained layouts, `S` expands exactly `0.09375px` upward, preserves
physical left/width/bottom, and does not round physical height to `44`.

## Exact label and rendered-source models

The Host 05 semantic button has exact `1px` borders and zero padding. Its
absolute label uses exact `2px` positioning from the inner content/padding
edge. Therefore:

```text
label outer distance from S outer border = 1px + 2px = 3px per side
label border width  = S.w - 6px
label border height = S.h - 6px
label text width    = S.w - 10px
label text height   = S.h - 10px
```

Each side and dimension must compare with strict equality. The label border
box must be strictly inside `S`, `scrollWidth <= clientWidth`, and
`scrollHeight <= clientHeight`. Hidden overflow alone is not proof. No label
copy, font, CSS, geometry, accessible name, or state change is authorized.

Rendered-source mapping begins only from browser-resolved `P`, actual
`.scene-art.getBoundingClientRect()`, natural `1672 x 941`, and computed
`object-fit: cover` / `object-position`. `.scene-frame`, viewport dimensions,
and unquantized percentage arithmetic never supply the source transform.

Every layout record must separately capture finite raw rectangles for frame,
world content, image, `P`, `S`, label border/text, Host 04, return ridge, and
inventory return. It must capture exact cover scale/draw/offset, transformed
source bounds/center, nominal anchor containment, retention, physical center
inside activation, overlap areas, and overflow. The already successful
per-layout centers/retention from `FRVE-003-v1-VR-02` remain exact; no
alternate media or crop is authorized.

## Exact semantic and genuine-keyboard graph

World DOM order remains Host 04 -> conditional Host 05 -> return ridge.
In the valid recovered responsible-AI `in_progress` hold, the enabled
sequential order is exactly:

```text
Host 05 -> LOOK AT -> USE -> TALK TO -> Return: Glass Meadow
```

Host 05 has no enabled in-document predecessor and its real successor is
`LOOK AT`. For each of the six layouts, with no modal open:

1. activate forced colors and reduced motion before traversal and prove both
   queries active;
2. send no pointer event after activation and never call `.focus()` on Host 05
   or another target;
3. confirm recovered Host 05 active as the separately tested recovery
   precondition, not as focus-visible acceptance evidence;
4. send genuine keyboard `Tab` once and require `LOOK AT` active and
   `:focus-visible`;
5. send genuine keyboard `Shift+Tab` once and require Host 05 active and
   `:focus-visible`;
6. record `reverseDomPredecessor:null`, `forwardSuccessor:"LOOK AT"`, key path
   `Tab -> Shift+Tab`, intermediate `LOOK AT`, final Host 05, and the complete
   enabled order; and
7. require Host 05 exact computed `3px solid` browser-resolved system
   `Highlight`, zero motion durations/delays, unchanged identity/state/boxes,
   and zero dispatched game actions.

No probe may press `Shift+Tab` from Host 05, assert browser-chrome identity,
invent wrapping, substitute inventory return as predecessor, use pointer
history, or programmatically focus a target. Product action order and behavior
must not change to accommodate the probe.

## Frozen player, learning, media, and performance contract

- Host 05 remains absent before exact sanitized Host 04 mastery. Pure
  `available`, `in_progress`, `remediation_required`, and `complete` states
  derive only from existing sanitized evidence; no state hook or persistence
  is added.
- `LOOK AT` owns bounded material fact, sole `USE` opens unchanged `L02-02`,
  and `TALK TO` owns silence. Completed `USE` remains read-only. The generic
  launcher remains absent.
- Detection, announcement, close/Escape, Terminal inertness, miss,
  remediation, acknowledgement, transfer, explanation, mastery, reload,
  Meadow return/redeparture, completed revisit, malformed recovery, and all
  focus owners remain exact.
- Seven placeholders remain exactly `FRPX03_UNSEEN_INTERFACE`,
  `FRPX03_AVAILABLE`, `FRPX03_IN_PROGRESS`, `FRPX03_MISSED`,
  `FRPX03_MASTERED`, `FRPX03_RETURNED`, and `FRPX03_NEXT_BOUNDARY`. Combat
  writes no final copy.
- `L02-02`, evaluator, sanitizer, evidence/privacy, save schema, Host 04,
  `L02-03`, route, later Drowned/Witness/City/rail, both equal MH-40 outcomes,
  null deltas, and `successor=null` remain unchanged.
- Immutable media remains exact `17 / 37,410,731`; no image/audio/media byte,
  path, request, import, variation, replacement, movement, or reveal is
  authorized. Existing media may be read only for exact identity verification.
- Product PBA remains JavaScript `1,666,665`, CSS `119,247`, modules `217`;
  narrow headroom remains `8,999 / 34 / 0`. Product build output must remain
  byte-consistent with frozen candidate content; CSS and module count may not
  grow. Host 05 remains `<=2ms`; total sampled tasks remain `<=100ms`.
- Current and target maturity remain those frozen by `FRSH-003-v1`; this
  harness correction advances no cell. Host 06-15, City repair, final copy,
  and every later/global scope remain deferred.

## Exact permitted Combat changes

Combat may change only:

- `playtest/e2e-playthrough.mjs`: replace only the stale Host 05 used-value,
  inner/outer label, enabled-order, genuine-keyboard, live-summary fields, and
  assertions with the exact contracts above; preserve both corrected
  `bf58e52` placeholder assertions and all other journey behavior;
- `Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json`:
  replace only the corresponding summary/verifier identity, schema fields,
  `q/Q`, rectangle, label, action-order, key-path, focus, and strict aggregate
  expectations while preserving commands, owners, timeouts, one-E2E policy,
  external-root containment, PID/port ownership, and cleanup;
- `Production Pipeline/First Run/FIRST_RUN_FUNCTIONAL_REPORT_FRCE-003-v1.md`
  or one versioned bounded Combat variance report after execution; and
- `NEXT_INSTANCE_HANDOFF.md` after execution.

No product source, product test, shared CSS, fixture source, package,
dependency, lockfile, curriculum, validator, save, story, map, scoreboard,
media, copy, or other control file may change. Combat may not alter
`horizon-archive-game/src/App.jsx` or
`horizon-archive-game/test/sixfoldWeir.test.js`; their exact candidate blobs
remain frozen.

Before validation, Combat must commit the two permitted harness/manifest edits
as one **probe candidate** and record its full hash separately from product
candidate `7e85154`. Prove the probe candidate's diff from the Mission source
contains only those two files and that every product/test blob matches
`7e85154`. The E2E and summary must record product candidate, probe candidate,
both predecessor lineages, shell `FRSH-003-v1-VR-04`, manifest `FRRC-002-v1`,
runner/lattice/operator identity, and external GUID-root identity.

## Deterministic pre-live ladder

Combat must run these gates in order against the committed probe candidate.
It records exact manifest entry/command, identity, elapsed time, count, and
result. A failure stops before E2E and returns `HOLD`.

1. **Integrity/static:** exact allowed two-file diff; product/test blob
   equality to `7e85154`; seven placeholders; authored `45/75/20/25` and
   Host-05-only min-`44` mechanism; both `bf58e52` assertions; immutable media
   identity; forbidden-change scan; JSON parse; `node --check
   playtest/e2e-playthrough.mjs`; `git diff --check`; no tracked drift.
2. **Focused:** run the exact `FRRC-002-v1.entries.focused` command within
   `30s`; require the frozen candidate count `68/68` and all original Host 05
   state/action/focus/privacy/geometry tests.
3. **Related:** run the exact `entries.related` command within `60s`; require
   `74/74`.
4. **Cold full:** run exact `entries.full` within `60s`; require `972/972`.
5. **Validators:** run the manifest's exactly forty sorted `validate*.py
   --self-test` invocations, each within `60s`; require `40/40`.
6. **Build and identity:** run exact production and TD-012 fixture builds,
   each within `60s`; require modules `217/57`; then start only the exact
   owned previews on `127.0.0.1:4173` / `:4184` and require root/deep/JS/CSS
   served-to-disk byte identity.
7. **PBA/media/offline:** run exact manifest PBA/media gate; require JS
   `1,666,665`, CSS `119,247`, modules `217`, immutable media
   `17 / 37,410,731`, no source map, dependency, request, network, storage,
   credential, endpoint, telemetry, service-worker, Python/WASM, or product
   drift; require sampled performance caps.

No prior run substitutes for a gate. Pre-live execution creates no authority
to change product or thresholds. Owned previews may remain only for the sole
immediately following E2E and must be stopped on any failure.

## Sole fresh E2E, summary, and verifier

Only after gates 1-7 pass, Combat may invoke exact manifest
`entries.complete-e2e` once, within `180s`, using:

- product candidate exactly `7e85154abd8dbf116c4bb84ca66afd859903d750`;
- the committed harness/manifest probe-candidate hash;
- one new nonexisting GUID-suffixed child strictly inside the resolved OS temp
  parent and outside the resolved repository; and
- exact owned production/fixture previews and no real user browser/profile/
  save state.

The one journey must prove clean start, optional departure, Host 04-to-05
entry, real L02-02 miss/remediation/resume/transfer/explanation/mastery,
completed read-only revisit, all six exact layout/source/label/focus/motion
records, unchanged later rail, both equal MH-40 outcomes, null deltas,
`successor=null`, Host 05 `<=2ms`, total sampled tasks `<=100ms`, zero runtime
errors, and no unowned request or write.

The same E2E must emit exactly one machine-produced
`first-run-live-summary.json` inside the owned root. Only if that file exists
and the E2E returns success may Combat invoke exact
`entries.live-summary-verify` once against it. The verifier must independently
reject missing/extra layouts or fields, nonfinite/rounded values, any lattice
or `floor` mismatch, epsilon/unquantized comparison, unequal `P/S` component,
actual activation below `44`, outer label inset other than `3px`, label
escape/scroll, frame-derived source mapping, retention below `.95`, nonzero
overlap/overflow, wrong enabled order, non-null in-document predecessor,
wrong successor/key path/intermediate/final focus, pointer/programmatic focus,
non-focus-visible Host 05, outline/motion variance, identity/state drift,
runtime error, handwritten summary, candidate mismatch, or incomplete cleanup
contract.

The verifier must accept exact enabled order Host 05 -> `LOOK AT` -> `USE` ->
`TALK TO` -> inventory return; `reverseDomPredecessor:null`;
`forwardSuccessor:"LOOK AT"`; genuine key path `Tab -> Shift+Tab`; intermediate
`LOOK AT`; final Host 05 active/focus-visible; and exact `3px solid` resolved
system `Highlight`.

If the E2E fails/aborts/times out, does not emit the summary, or the verifier
fails, **no rerun is authorized**. Combat must preserve the exact evidence,
clean up owned resources, issue `HOLD`, and return to Mission.

## Cleanup, definition of done, and downstream stop

Combat must stop only recorded preview/browser PIDs, prove ports `4173` and
`4184` clear, repeat repository/OS-temp containment checks, and remove only
the exact owned GUID root after the verifier or failed-run evidence is safely
recorded. Broad enumeration/deletion, repository QA use, unresolved paths, or
access to protected/user state is forbidden.

Combat may issue `PRODUCTION FUNCTIONAL / BUILD CANDIDATE READY` only if the
same frozen product candidate and probe candidate pass every gate, the sole
E2E emits the accepted summary, the verifier passes exactly once, cleanup is
exact, and the Combat report/handoff commit is pushed and synchronized.

Even on pass, Combat only hands the exact identities to Quartermaster through
`NEXT_INSTANCE_HANDOFF.md`; Combat does not begin Quartermaster, write final
copy, change a placeholder, advance maturity, or release. Quartermaster may
begin only from that passing synchronized handoff.

## Rollback, hard stops, and variance protocol

Released rollback baseline remains
`3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602`. Bounded rollback of this reissue
removes only the harness/manifest probe correction and restores their
`7e85154` blobs; it does not alter product/test blobs, rewrite prior controls,
reset the repository, migrate save, or touch protected/untracked/user state.

Immediate `HOLD` applies to any:

- product/test/CSS/module/media/copy/placeholder change;
- deviation from authored `45/75/20/25`, exact `q=1/64` / `Q=floor`
  used-value equality, semantic `>=44`, inner-`2px`/outer-`3px` label model,
  `.scene-art` source mapping, retention, anchor, overlap, containment,
  overflow, action order, genuine-key focus, forced color, reduced motion,
  PBA, performance, summary, verifier, candidate, or cleanup gate;
- second E2E, alternative probe/product mechanism, tolerance, rounding,
  environment-model invention, or post-freeze relevant drift;
- learning/evaluator/sanitizer/evidence/privacy/save/route/world/later-rail/
  ending change, Host 06-15 work, City repair, reward/access/identity/authority/
  response, successor, RP-013, or post-ending content; or
- protected path, Martin's browser/profile/save, hidden lore, forbidden media
  operation, destructive cleanup, automation, schedule, reveal, or archived
  workflow access.

Any variance returns to Mission with exact evidence. No downstream role may
silently change this reissue.

## Mission validation, signature, and exact Combat handoff

Mission read the current handoff, full Mission profile,
`FRSH-003-v1-VR-03`, `FRVE-003-v1-VR-02`,
`FRPX-003-v1-VR-02`, complete latest `FRCE-003-v1`, and exact current
`FRRC-002-v1` control at source
`a9e0670115d8925840d7f57438f720031b9e3298`. It reconciled the planning
returns without running product tests, builds, previews, validators, browser,
verifier, or E2E and changed no product/test/harness/manifest/media/copy/
learning/save/route/world/ending/maturity state.

Mission Captain signs **`FIRST RUN SHELL READY /
FRSH-003-v1-VR-04`**.

Exact next owner is Combat Engineer. Read this reissue, governing
`FRSH-003-v1`, `FRSH-003-v1-VR-03`,
`FRVE-003-v1-VR-02`, `FRPX-003-v1-VR-02`, complete
`FRCE-003-v1`, Combat profile, and exact current E2E/manifest controls. Change
only the two permitted harness/manifest files, freeze one probe candidate,
run the deterministic ladder, and invoke the sole fresh GUID-root E2E only
after every pre-live gate passes. Require one machine summary and one passing
verifier. Any failure is `HOLD` without rerun.

Do not change product/test/CSS/module/media/copy/learning/save/route/world/
later-rail/ending/maturity/map/scoreboard, inspect protected/user state, begin
Quartermaster, repair City, expand Host 06-15, create a schedule/reveal, or
call `FIRST RUN COMPLETE`.
