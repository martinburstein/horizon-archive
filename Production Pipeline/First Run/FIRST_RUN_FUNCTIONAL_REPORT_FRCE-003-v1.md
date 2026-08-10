# First Run Functional Report / FRCE-003-v1

Date: **2026-08-10**

Role: **Combat Engineer**

Disposition: **HOLD / VR-05 LIVE IDENTITY-STABILITY VARIANCE**

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
- VR-02 repaired product/test/probe/manifest candidate:
  `7e85154abd8dbf116c4bb84ca66afd859903d750`
- VR-04 probe-only candidate:
  `d9487d8205174a7b5f688cbfccbcd5f7875ac1ad`
- VR-05 validation-control candidate:
  `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`
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

## VR-02 repair and sole live run

Mission reissued `FIRST RUN SHELL READY / FRSH-003-v1-VR-02`. Combat froze
exact repaired candidate `7e85154abd8dbf116c4bb84ca66afd859903d750` as
one bounded commit touching only `App.jsx`, `sixfoldWeir.test.js`, the existing
E2E, and the `FRRC-002-v1` summary verifier. The candidate:

- preserves physical `45/75/20/25` constants and all seven placeholders;
- adds only Host-05 inline bottom-anchored `min 44px` activation and label
  containment values;
- begins source mapping at the actual `.scene-art` content box;
- separates frame, containing, image, nominal physical, semantic, label,
  Host 04, return ridge, and inventory-return evidence; and
- enters forced colors/reduced motion before genuine keyboard
  `Shift+Tab -> Tab`, with no programmatic focus in that probe.

Exact pre-live evidence on this candidate passed:

| Gate | Result |
|---|---|
| Focused | **68/68 PASS** |
| Related | **74/74 PASS** |
| Cold full | **972/972 PASS**, `21.182s` |
| Validators | **40/40 PASS** |
| Production / fixture | **217 / 57 modules PASS** |
| Narrow/global PBA | **PASS**: JS `1,666,665`; CSS `119,247`; modules `217` |
| Media | **PASS**: `17 / 37,410,731` |
| Served identity | **2/2 PASS** |

The one authorized VR-02 E2E ran once for `72.2s`. It completed the full
journey and reached the final live aggregate, where it failed closed. No rerun
occurred. The accepted observations are:

- `.scene-world-content` and `.scene-art` boxes are equal at all layouts;
  image border/padding are zero, the nominal source anchor is contained,
  retention remains above `0.95`, and overlap/overflow remain zero;
- retained semantic activation is exact `62.796875 x 44`, bottom anchored,
  target-size passes, and label text has no scroll overflow;
- Host 05 regains genuine keyboard `:focus-visible` and computes exact
  `3px solid` system `Highlight`; reduced-motion and identity stability pass;
- browser CSS percentage registration is quantized. At desktop the nominal
  arithmetic rectangle is `x 888.5671875 / w 285.73125`, while the actual DOM
  rectangle is `x 888.5625 / w 285.71875`. Comparing those as byte-identical
  makes `semanticExact` and the desktop/laptop bottom check false even though
  the semantic and physical CSS declarations coincide there;
- inline `2px` label offsets are positioned inside the button's `1px` border,
  so the measured outer-border inset is `3px`, not the frozen `2px`. At
  retained size Host 05 is `x 144.296875 / y 134.625 / w 62.796875 / h 44`,
  while the label is `x 147.296875 / y 137.625 / w 56.796875 / h 38`;
- live enabled verb order is `LOOK AT`, `USE`, `TALK TO`, not the VR-02
  expected `LOOK AT`, `TALK TO`, `USE`; and
- one genuine `Shift+Tab` from recovered Host 05 did not focus inventory
  `Return: Glass Meadow`. The following `Tab` did restore Host 05 and prove
  its exact focus-visible treatment, but the mandated predecessor assertion
  is false.

Because the aggregate stopped before summary writing, no
`first-run-live-summary.json` exists and the independent verifier could not
run. Owned preview PIDs `13356` / `13884` were stopped, ports `4173` / `4184`
are clear, and external root
`C:\Users\marti\AppData\Local\Temp\horizon-archive-frrc002-10b39789-1f29-42ac-8fcc-f5981ec7627f`
was removed after exact containment checks.

## Variance classification and rollback

- **Shell/blueprint variance:** VR-02 assumes unquantized percentage arithmetic,
  an outer-border `2px` result from inner positioning, a verb order the
  product does not use, and a reverse-tab predecessor the live DOM does not
  produce.
- **Accepted repaired facts:** retained activation reaches exact `44px`, label
  containment/scroll pass, actual rendered-image source proof passes, and Host
  05 genuine keyboard focus-visible/forced-color/reduced-motion proof passes.
- **Test status:** no threshold was weakened and no second E2E was attempted.
- **Release classification:** `HOLD`; this cycle cannot advance to
  Quartermaster or maturity acceptance.
- **Protected boundaries:** no protected PDF, training folder, repository QA
  quarantine, browser/profile/save, hidden lore, image, or media asset was
  inspected or mutated. No image/media operation or reveal occurred.
- **Rollback:** `a9776e337f1820776864a5690332c364d0fb2556` is the bounded product/test/
  manifest commit; `bf58e528bc6ce4088f81f2c782ce2895259ab9fd` is the isolated harness
  correction; `7e85154abd8dbf116c4bb84ca66afd859903d750` is the bounded VR-02 repair.
  None requires a migration or save repair.

## VR-04 deterministic stop

Combat started from synchronized control source
`b52bfa6a33d4a685b490c9c991f5191cc17bf490`, proved exact ancestry and
unchanged `App.jsx` / `test/sixfoldWeir.test.js` blobs against frozen product/
test candidate `7e85154abd8dbf116c4bb84ca66afd859903d750`, and committed exactly the two
authorized probe files as `d9487d8205174a7b5f688cbfccbcd5f7875ac1ad`.
That probe implements strict `q=1/64` floor used-value equality with no
epsilon, resolved-`P` `.scene-art` source mapping, inner-`2px` / outer-`3px`
label evidence, actual Host 05 -> `LOOK AT` -> `USE` -> `TALK TO` -> return
order, and genuine `Tab -> Shift+Tab` focus-visible proof.

The first deterministic pre-live gate then failed **67/68**. The sole failure
is the frozen static manifest assertion at
`horizon-archive-game/test/sixfoldWeir.test.js:146`, which still requires the
superseded literal sequence `FRSH-003-v1-VR-02 ... Shift+Tab -> Tab` inside the
live-summary verifier command. VR-04 simultaneously requires the verifier to
declare `FRSH-003-v1-VR-04` and the corrected `Tab -> Shift+Tab` path, while
forbidding any product-test change. Thus the current permitted-file contract
cannot satisfy its own mandatory `68/68` gate without either changing the
frozen test or adding a non-operative legacy token solely to appease it.

Per the exact no-rerun rule, Combat stopped immediately. Related/full tests,
validators, builds, PBA/media, previews, served identity, the complete E2E,
summary emission, and the independent verifier were **not run** in VR-04.
No external QA root or preview process was created; ports `4173` and `4184`
remain clear. No protected/user/media state was inspected or mutated.

## VR-05 validation control and sole live run

Combat started from synchronized control source
`5972de914fc74c6af69af9ff002e2de0d166fa4e`, proved exact frozen runtime and
probe blobs, and committed the one authorized static assertion update as
validation-control candidate
`4cd7fbf31291671dd28c0743b44a7c49aaad82bb`. Its only delta is
`horizon-archive-game/test/sixfoldWeir.test.js:146`, replacing exact stale
`FRSH-003-v1-VR-02` / `Shift+Tab -> Tab` expectations with operative
`FRSH-003-v1-VR-04` / `Tab -> Shift+Tab`. No decorative compatibility token
or other change exists.

Exact deterministic evidence passed:

| Gate | VR-05 result |
|---|---|
| Focused | **68/68 PASS** |
| Related | **74/74 PASS** |
| Cold full | **972/972 PASS**, `21.991s` |
| Validators | **40/40 PASS** |
| Production / fixture builds | **217 / 57 modules PASS** |
| PBA | **PASS**: JS `1,666,665`; CSS `119,247`; modules `217` |
| Media | **PASS**: `17 / 37,410,731`; no source map |
| Served identity | **2/2 PASS**, root/deep/JS/CSS byte-equal to disk |

The one authorized complete E2E ran once for `74s` under external root
`C:\Users\marti\AppData\Local\Temp\horizon-archive-frrc002-75abe881-9a28-4dbb-af5e-c840a1ba6a64`.
It completed the journey and all preceding runtime, focus, and performance
gates, then failed closed at the final six-layout aggregate. No rerun occurred.

Four layouts passed completely: `desktop`, `narrow`, `effective-200`, and
`retained-320x240`. `laptop` and `retained-320x180` failed only
`identityStable`. For both failing layouts, the emitted failure record still
shows exact stable Host 05 identity/state before and after, strict lattice and
semantic geometry, bottom anchoring, source mapping and anchor containment,
retention above `0.95`, zero overlap/overflow, exact label model, target size,
actual enabled order, genuine `Tab -> Shift+Tab`, exact focus-visible
`3px solid Highlight`, reduced motion, and `noGameAction=true`. The probe does
not emit its post-key box values, so this run cannot distinguish a viewport
scroll-coordinate change from a true box change; Combat does not infer product
instability from the aggregate alone.

Because the aggregate throws before summary writing, no
`first-run-live-summary.json` was emitted and the independent verifier was not
run. Owned preview PIDs `18612` / `54564` were stopped, ports `4173` / `4184`
are clear, and the exact external root was removed after containment proof.
Protected PDF/training/repository-QA/user/media state remained untouched.

## Exact next action

Mission Captain must adjudicate the VR-05 live identity-stability variance and
route the probe contract to Tactical if clarification is required. Preserve
runtime product `7e85154abd8dbf116c4bb84ca66afd859903d750`, probe
`d9487d8205174a7b5f688cbfccbcd5f7875ac1ad`, validation control
`4cd7fbf31291671dd28c0743b44a7c49aaad82bb`, every threshold, and all passing
live facts. Determine whether identity stability must compare layout-relative
geometry/scroll state or whether the runner must emit exact pre/post boxes and
scroll offsets before another Combat return. Do not authorize a rerun,
Quartermaster, threshold weakening, or product change without one versioned,
evidence-honest contract.
