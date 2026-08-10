# First Run Shell Variance Hold - Identity Stability Coordinate Ownership

Variance ID: `FRSH-003-v1-VR-06`

Disposition: **`HOLD / RETURN TO TACTICAL / FRSH-003-v1-VR-06`**

Stage / owner: Mission Captain / `mission_captain`

Governing shell: `FIRST RUN SHELL READY / FRSH-003-v1`

Operative browser-proof shell: `FIRST RUN SHELL READY /
FRSH-003-v1-VR-04`

Static-contract reissue: `FIRST RUN SHELL READY / FRSH-003-v1-VR-05`

Functional return: `HOLD / VR-05 LIVE IDENTITY-STABILITY VARIANCE /
FRCE-003-v1`

Work Order: `FRWO-003-v1 / Sixfold Weir`

Mission control source inspected:
`f98263d3b910f1326f6f09a92580ff8f46b9e8dd`

Frozen runtime product candidate:
`7e85154abd8dbf116c4bb84ca66afd859903d750`

Frozen browser-probe candidate:
`d9487d8205174a7b5f688cbfccbcd5f7875ac1ad`

Frozen validation-control candidate:
`4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Frozen predecessor lineages:
`a9776e337f1820776864a5690332c364d0fb2556` /
`bf58e528bc6ce4088f81f2c782ce2895259ab9fd`

Released rollback baseline:
`3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602`

Date: **2026-08-10**

## Decision

Mission continues `HOLD` and returns exactly one evidence-contract question to
Tactical Operations Specialist.

The sole VR-05 live failure, `identityStable=false` at `laptop` and
`retained-320x180`, does not establish a product identity or layout defect.
The current predicate combines two different responsibilities:

1. immutable semantic/action identity; and
2. strict raw viewport-coordinate equality for Host 05 and its label before
   and after genuine keyboard traversal.

The failing records independently retain exact Host 05 accessible identity,
`data-hotspot-id`, `in_progress` state, final active/focus-visible state,
unchanged save/dialogue/URL, and `noGameAction=true`. They also pass every
substantive authored/browser geometry, lattice, source, anchor, retention,
overlap, overflow, label, target-size, order, forced-color, and reduced-motion
gate. Four other layouts pass the composite predicate.

The probe captures pre-key Host and label rectangles and computes post-key
rectangles, but emits neither post-key rectangles nor pre/post scroll offsets.
Because `boundingBox()` is viewport-relative and focus traversal may scroll to
keep the intermediate or final target visible, the aggregate cannot distinguish
an equal document-relative box translated by viewport scroll from a true
layout shift. It therefore cannot support either acceptance or a product-
repair diagnosis.

This is a Tactical interaction/focus/evidence-definition ambiguity. Science's
authored and browser-resolved geometry model is already satisfied. Combat has
no lawful implementation choice until Tactical separates semantic identity
from coordinate stability and freezes the exact comparison space and required
evidence.

Mission authorizes no product, test, E2E, manifest, harness, summary, verifier,
threshold, media, copy, learning, save, route, world, later-rail, or ending
change; no preview, deterministic rerun, E2E, or verifier run; and no
Quartermaster or maturity advance.

## Exact live evidence accepted only as a stopped-run finding

- VR-05 validation-control candidate `4cd7fbf` contains only the authorized
  one-line static expectation alignment.
- Deterministic gates passed: focused `68/68`, related `74/74`, cold full
  `972/972`, validators `40/40`, builds `217/57`, JavaScript `1,666,665`, CSS
  `119,247`, modules `217`, media `17 / 37,410,731`, and both served
  identities.
- The one authorized E2E ran once for `74s`; no rerun occurred.
- `desktop`, `narrow`, `effective-200`, and `retained-320x240` passed the full
  composite layout record.
- `laptop` and `retained-320x180` failed only `identityStable`.
- Both failing records passed semantic identity/state, no-action, exact
  lattice/semantic geometry, bottom anchoring, source mapping/anchor,
  retention `>=0.95`, zero overlap/overflow, exact label model, `>=44` target,
  actual order, genuine `Tab -> Shift+Tab`, exact `3px solid Highlight`, and
  reduced motion.
- The aggregate stopped before summary writing. No
  `first-run-live-summary.json` exists and the independent verifier did not
  run.
- Exact owned PIDs/root were cleaned and ports `4173` / `4184` are clear.

These findings remain diagnostic, not release evidence. They authorize no
threshold waiver, rerun, or downstream progression.

## Exact source-level ambiguity

Current `measureSixfoldLayout` does all of the following inside one Boolean:

```text
semantic identity:
  ariaLabel
  hotspotId
  state
  final active target

raw viewport geometry:
  pre Host DOMRect == post Host DOMRect
  pre label DOMRect == post label DOMRect
```

The run output includes `identityBefore` and `identityAfter`, but the layout
record includes only the pre-key Host/label rectangles. It omits:

- post-key Host rectangle;
- post-key label rectangle;
- pre-key `scrollX` / `scrollY`;
- post-key `scrollX` / `scrollY`; and
- a declared viewport-, document-, containing-block-, or image-relative
  coordinate space for stability comparison.

No owner may infer which omitted value changed. A raw `x/y` difference could
be viewport scroll, a containing-block shift, or true element drift. Equal
semantic fields and passing pre-key geometry alone do not prove which.

## Frozen identities and thresholds

- Runtime product candidate remains exactly
  `7e85154abd8dbf116c4bb84ca66afd859903d750`.
- Browser-probe candidate remains exactly
  `d9487d8205174a7b5f688cbfccbcd5f7875ac1ad`.
- Validation-control candidate remains exactly
  `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`.
- Current `App.jsx` blob remains exact to `7e85154`; current E2E and manifest
  blobs remain exact to `d9487d82`; current `sixfoldWeir.test.js` blob remains
  exact to `4cd7fbf`.
- Authored `45/75/20/25`, `q=1/64`, `Q=floor`, strict equality/no epsilon,
  bottom-anchored `>=44`, inner-`2px`/outer-`3px` label model, actual
  `.scene-art` source mapping, retention, anchor, exact zero overlap/overflow,
  action order, genuine keyboard focus, forced color, reduced motion, PBA,
  performance, immutable media, all seven placeholders, and cleanup remain
  unchanged.
- `L02-02`, evaluator, evidence/privacy, save, Host 04, later Drowned/Witness/
  City/rail, equal MH-40 outcomes, null deltas, and `successor=null` remain
  unchanged.

No current candidate is rejected or advanced by this planning hold.

## Exact Tactical action

Use a fresh Tactical Operations Specialist context. Read the Tactical profile,
this hold, `FRSH-003-v1-VR-05`, operative `FRSH-003-v1-VR-04`, latest complete
`FRCE-003-v1`, prior `FRPX-003-v1-VR-02`, and the exact current
`measureSixfoldLayout` identity/focus/box predicate.

Answer exactly one question:

> Across the sequential six-layout viewport transitions and genuine Host 05
> `Tab -> LOOK AT -> Shift+Tab -> Host 05` focus traversal, what exact evidence
> defines immutable semantic identity and what exact coordinate space defines
> absence of layout drift, given that raw viewport-relative DOMRects can move
> with scroll while the semantic element, state, dimensions, containing/image
> relation, and game state remain unchanged?

Issue exactly one versioned `PLAYER EXPERIENCE READY` clarification or
continue `HOLD`. The clarification must, without choosing implementation:

1. separate immutable semantic/action identity from geometric stability;
2. state whether same-node identity is required and name the exact stable
   accessible/data/state/focus/no-action fields;
3. name the exact pre/post rectangles, scroll offsets, containing/image
   rectangles, and active/focus-visible facts that evidence must emit;
4. choose and define one exact comparison coordinate space for position
   stability—raw viewport coordinates, document coordinates, containing-block
   coordinates, or another explicit invariant space—and state how pre/post
   scroll is treated;
5. preserve strict width/height, relative geometry, target, source, overlap,
   label, focus, forced-color, reduced-motion, action-order, and no-action
   gates with no epsilon or threshold weakening;
6. distinguish an allowed viewport translation caused only by scroll from a
   forbidden residual element/containing-block/layout shift; and
7. define the exact machine-summary/verifier fields and fail conditions needed
   for independent verification at all six layouts.

Tactical may inspect source and the existing stopped-run report. Tactical may
not edit or execute product, test, E2E, manifest, summary, verifier, fixture,
media, or control implementation; run a preview/E2E; authorize Combat; or
select a repair. Return the versioned clarification to Mission for shell
readjudication.

## Downstream stop and variance protocol

Combat remains stopped. Mission alone may reconcile a Tactical return into a
later versioned shell. No deterministic or live rerun is authorized by this
hold, including a diagnostic viewport run. Existing passing fields may not be
used to bypass the missing coordinate evidence.

Quartermaster remains blocked. No copy placeholder may change and no maturity
cell may advance. Any product/probe/test identity drift, threshold weakening,
second E2E, media operation, protected-state access, or downstream work is an
immediate continued `HOLD`.

## Rollback and protected boundaries

This Mission hold changes documentation only. There is no product rollback.
The released rollback baseline remains
`3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602`; all three current candidates
remain preserved.

The protected PDF, training directory, repository QA quarantine, Martin's
browser/profile/save, hidden lore, and all image/media operations remain
forbidden. Automation, archived workflows, schedules, reveals, Host 06-15,
City repair, RP-013, and post-ending work remain outside authority.

## Mission validation and signature

Mission read the current synchronized handoff, full Mission profile, complete
latest `FRCE-003-v1`, complete `FRSH-003-v1-VR-05`, and exact current
identity/focus/box predicate at source
`f98263d3b910f1326f6f09a92580ff8f46b9e8dd`.

Mission verified exact ancestry and blob equality for all three frozen
candidates, independently inspected the composite predicate, and found no
evidence-backed basis to route a product or geometry repair. Mission ran no
product test, validator, build, preview, browser, E2E, summary, or verifier and
inspected no protected/user state.

Mission Captain signs **`HOLD / RETURN TO TACTICAL /
FRSH-003-v1-VR-06`**.

The dedicated Mission commit, push, and exact `HEAD == origin/main` proof are
reported from Git after commit because this artifact cannot contain the hash
of the commit that first contains itself.
