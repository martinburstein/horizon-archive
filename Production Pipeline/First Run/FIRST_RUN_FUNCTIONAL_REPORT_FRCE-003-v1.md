# First Run Functional Report / FRCE-003-v1

Date: **2026-08-10**

Role: **Combat Engineer**

Disposition: **HOLD / LIVE LAYOUT CONTRACT VARIANCE**

## Candidate identity

- Work Order: `WORK ORDER READY / FRWO-003-v1`
- Shell: `FIRST RUN SHELL READY / FRSH-003-v1`
- Directorial treatment: `DIRECTORIAL LOCK / FRDT-003-v1`
- Player-experience blueprint: `PLAYER EXPERIENCE READY / FRPX-003-v1`
- Combat start source: `e5010a6bd3e54027850b3b77dc2bc7216474e838`
- Product, test, E2E, and manifest candidate exercised live:
  `a9776e337f1820776864a5690332c364d0fb2556`
- Post-stop harness correction, not live re-exercised:
  `bf58e528bc6ce4088f81f2c782ce2895259ab9fd`
- Verification-only control source:
  `a39e6bf45ebabe536425719be8a9370a1183270b`
- Canonical command manifest:
  `FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json`

Combat does **not** issue `PRODUCTION FUNCTIONAL` or
`BUILD CANDIDATE READY`. Quartermaster is not authorized to begin from this
report.

## Bounded implementation

- Added conditional Host 05 `sixfold-weir` at exact canonical and narrow
  geometry `left 45% / top 75% / width 20% / height 25%`.
- Added pure sanitized `available`, `in_progress`,
  `remediation_required`, and `complete` view state. Missing, malformed,
  noncontiguous, or inconsistent evidence fails closed and renders no Host 05.
- Preserved actual semantic order Host 04, Host 05, return ridge. Host 05 is
  absent before strict Host 04 mastery.
- Routed native `LOOK AT`, `TALK TO`, and sole `USE Sixfold Weir`; removed the
  generic `L02-02` launcher; made completed `USE` read-only.
- Added one-time detection, deterministic focus restoration, Terminal
  inertness, Escape/close, miss, primary acknowledgement, mastery, reload,
  Meadow return, redeparture, and continuation behavior.
- Left the existing Responsible AI evaluator, evidence sanitizer, privacy
  clearing, save schema, route, later rail, MH-40 outcomes, media, curriculum,
  and canon unchanged.
- Reserved exactly seven nonfinal Quartermaster slots:
  `FRPX03_UNSEEN_INTERFACE`, `FRPX03_AVAILABLE`, `FRPX03_IN_PROGRESS`,
  `FRPX03_MISSED`, `FRPX03_MASTERED`, `FRPX03_RETURNED`, and
  `FRPX03_NEXT_BOUNDARY`.

## Pre-live evidence

| Gate | Result |
|---|---|
| Manifest focused suite | **67/67 PASS** |
| Manifest related suite | **74/74 PASS** |
| Cold full suite | **971/971 PASS**, `17.697s` |
| Validator manifest | **40/40 PASS**, exact `--self-test` invocations |
| Production build | **PASS**, `217` modules |
| Exact TD-012 fixture build | **PASS**, `57` modules |
| Narrow PBA | **PASS**: JS `1,666,377 <= 1,675,664`; CSS `119,247 <= 119,281`; modules `217 <= 217` |
| Global PBA | **PASS**: JS `1,666,377 <= 1,703,258`; CSS `119,247 <= 119,672`; modules `217 <= 222` |
| Accepted media | **PASS**: exact `17` files / `37,410,731` bytes |
| Served identity | **PASS**: production and fixture root/deep/JS/CSS byte-equal to disk |
| Corrected harness focused suite | **67/67 PASS** plus `node --check` |
| Owned preview cleanup | **PASS**: exact PIDs stopped; ports `4173` and `4184` clear |
| External QA cleanup | **PASS**: owned GUID root removed after exact containment checks |

Verification-only return evidence remains exact focused `67/67`, related
`74/74`, cold full `971/971` (`23.114s`), validators `40/40`, production and
fixture builds `217/57`, JavaScript `1,666,377`, CSS `119,247`, accepted media
`17 / 37,410,731`, and both served identities byte-equal to disk.

## Live gate stop

The one authorized complete E2E ran once against
`a9776e337f1820776864a5690332c364d0fb2556` and stopped after `45.1s` at
`playtest/e2e-playthrough.mjs:582`. Host 05 had lawfully completed the primary
form, returned focus to `use Sixfold Weir, in progress`, and emitted the
shell-owned `FRPX03_IN_PROGRESS` placeholder. The harness incorrectly waited
for the inherited `901 TEACHER // SOURCE-GROUNDED COURSE` speaker label.

The mismatch is a stale E2E assertion, not evidence of a product behavior
failure. Combat corrected that assertion and the analogous strict-mastery
assertion in `bf58e528bc6ce4088f81f2c782ce2895259ab9fd`, then ran only static and
focused tests. It did not rerun the complete journey because FRSH-003 permits
one and only one complete E2E. Consequently:

- no `first-run-live-summary.json` was emitted;
- the six live layouts, complete later rail, both equal MH-40 outcomes,
  runtime-error aggregate, and `<=2ms` Host 05 activation aggregate are not
  accepted for the corrected candidate;
- the machine live-summary verifier could not lawfully run; and
- production readiness remains unproved.

## Verification-only live return

A new authorized return verified exact corrected harness candidate
`bf58e528bc6ce4088f81f2c782ce2895259ab9fd`. Patch integrity proved that the
only delta from product candidate `a9776e337f1820776864a5690332c364d0fb2556`
is the two intended Host 05 post-primary/post-mastery live assertions. No
product, meaning-slot, shell, or test-threshold change occurred.

The one complete E2E ran once for `72s`. It passed the former assertion stop,
completed the clean-start journey through the complete later rail and both
equal MH-40 outcomes, reached the zero-runtime-error, focus, and `<=2ms`
activation checks, then failed closed at the six-layout aggregate. The exact
live measurements were:

| Layout | Host 05 size | Source retention | Center | Label | Forced color | Reduced motion |
|---|---:|---:|---|---|---|---|
| `desktop` | `285.71875 x 200.640625` | `0.9938006568862109` | pass | pass | fail | pass |
| `laptop` | `265.703125 x 186.5625` | `0.9934461383565948` | pass | pass | fail | pass |
| `narrow` | `76.796875 x 53.75` | `0.9803488345477811` | fail | pass | fail | pass |
| `effective-200` | `149.203125 x 104.65625` | `0.9891190780432326` | fail | pass | fail | pass |
| `retained-320x180` | `62.796875 x 43.90625` | `0.9762053196054321` | fail | fail | fail | pass |
| `retained-320x240` | `62.796875 x 43.90625` | `0.9762053196054321` | fail | fail | fail | pass |

All six layouts retained exact zero Host 04 and return-ridge overlap, no
horizontal overflow, and source retention above `0.95`. The two retained
layouts miss the frozen minimum activation height by `0.09375px`; their
persistent placeholder labels also escape the measured button bounds. No
`first-run-live-summary.json` was emitted and the independent machine verifier
therefore could not run.

The run used fresh owned root
`C:\Users\marti\AppData\Local\Temp\horizon-archive-frrc002-624f64ad-f344-4a2c-aa89-e3d9f2398b5c`,
proved inside OS temp and outside the repository. Exact preview PIDs `3528`
and `23764` were stopped, ports `4173` and `4184` are clear, and the root was
removed after repeated containment checks.

## Earliest-owner diagnosis

- The source-center probe maps against `.scene-frame.getBoundingClientRect()`,
  which includes the fixed scene border, while the visual source is rendered
  by `.scene-art`. The viewport-dependent Y drift is therefore a Combat/
  Tactical measurement-contract defect; the probe must use the rendered image
  content box and its actual object-fit/object-position mapping without
  weakening the frozen source coordinate.
- The forced-color probe calls programmatic `focus()` after a pointer-driven
  journey, then expects a `:focus-visible` rule. It does not first prove
  keyboard focus-visible modality. Tactical must freeze an honest keyboard
  probe; Combat may then implement it without lowering the required outline.
- The `43.90625px` retained height and escaped label are live product facts.
  FRVE-003 and FRSH-003 simultaneously freeze exact `25%` height and `>=44px`
  activation geometry, but the bordered/scaled retained scene yields less
  than `44px`. Combat may not silently enlarge the target or relax exact
  geometry. Mission must adjudicate this shell variance and route the
  contradicted viability claim back to Science before any repair.

## Variance classification and rollback

- **Shell variance:** retained live geometry cannot simultaneously satisfy the
  frozen `25%` height and `>=44px` activation contract as currently framed.
- **Harness variance:** the stale post-primary assertion is corrected. The
  source-mapping and focus-visible probes now require owner clarification.
- **Live product variance:** retained target height and label containment fail
  the exact current shell.
- **Release classification:** `HOLD`; this cycle cannot advance to
  Quartermaster or maturity acceptance.
- **Protected boundaries:** no protected PDF, training folder, repository QA
  quarantine, browser/profile/save, hidden lore, image, or media asset was
  inspected or mutated. No image/media operation or reveal occurred.
- **Rollback:** `a9776e337f1820776864a5690332c364d0fb2556` is the bounded product/test/
  manifest commit; `bf58e528bc6ce4088f81f2c782ce2895259ab9fd` is the isolated harness
  correction. Neither requires a migration or save repair.

## Exact next action

Mission Captain must adjudicate the exact retained-layout contradiction before
another Combat run. Preserve product candidate
`a9776e337f1820776864a5690332c364d0fb2556`, corrected harness candidate
`bf58e528bc6ce4088f81f2c782ce2895259ab9fd`, all seven placeholders, and every
threshold. Route the `25%` versus live `43.90625px` / required `44px` conflict
to Science, and obtain Tactical clarification for rendered-image source
mapping plus keyboard focus-visible measurement. Issue a versioned shell
variance decision or continue HOLD. Do not authorize a new E2E until those
controls yield one implementable, non-weakened acceptance contract.
