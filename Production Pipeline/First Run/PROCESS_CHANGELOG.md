# First Run Process Changelog

## Current control

Program initialized **2026-08-09**. `FRAB-001-v1` is the first bounded First
Run release. Retrospectives apply only to future cycles and never rewrite an
accepted candidate or silently broaden a Work Order.

## Entries

### 2026-08-13 - Validation economics - TUNE

- **KEEP:** focused-to-related-to-full validation remains available when risk
  and changed product inputs justify it, and Intelligence retains one fresh
  independent exact-candidate release holdout.
- **TUNE:** exact, trustworthy verifier evidence now carries across role
  handoffs as `REUSED` when product/code/test/configuration inputs, commands,
  fixtures/manifests, relevant toolchain, and environment are unchanged.
  Handoffs, reports, prompts, ledgers, and planning-only edits do not by
  themselves justify rerunning unchanged product tests.
- **TUNE:** use the smallest affected validation rung. Cold full-suite reruns
  require a behavior-affecting change, the final independent holdout, or an
  explicit invalidation such as environment drift, nondeterminism, corruption,
  or incomplete evidence. Each fresh rerun records that reason.
- **TUNE:** add tests only for new behavior, boundaries, regressions, or
  previously uncovered failure modes; never duplicate coverage to increase the
  count or give a new role/cycle its own copy.
- **REDESIGN:** not warranted. This is an evidence-reuse and verification-cost
  correction; it weakens no product, accessibility, privacy, curriculum, or
  release gate.

### 2026-08-13 - Pre-cycle method control - REDESIGN

- **KEEP:** strict eleven-role sequencing, earliest-first bounded Work Orders,
  five-role shell approval, immutable candidate identity, first-PASS stop,
  independent Intelligence release, exact synchronized handoff, and all
  canon/media/privacy/save/accessibility boundaries.
- **TUNE:** every cycle now declares a target, observable state, local action
  surface, verifier authority, best-state policy, finite multi-dimensional
  budget, final-proof reserve, and typed stop/escalation outcomes before
  production.
- **TUNE:** every stage now distinguishes information from effect actions,
  compares candidates to both current and best state, records a typed
  continuation reason, and replans after evidence of strategy plateau instead
  of equating another call with progress.
- **REDESIGN:** the former method is preserved byte-for-byte at
  `Production Pipeline/Archive/2026-08-13-pre-convergent-first-run-workflow/`.
  The live successor adds `FIRST_RUN_CONVERGENCE_CONTROL.md` and
  `FIRST_RUN_LOOP_STATE.md`; the archive is not an execution authority.

### 2026-08-13 - `FRAB-013-v1` - TUNE

- **KEEP:** rolling finite call pools, first-PASS stop, private review,
  accepted-only import, exact cleanup, native lesson ownership, and independent
  full-journey release. The first generation call passed and seven calls remain.
- **TUNE:** served-identity fixtures must derive or explicitly advance the
  fresh-build asset count when one accepted source is added. Native-boundary
  E2E inventory must cover initial, transfer, reload, and close/reopen entries
  for every lesson owned by that boundary.
- **TUNE:** release commands must set all three mandatory PBA environment flags
  explicitly before the sole recorded E2E. The corrected exact invocation
  passed in `124.793s` with zero runtime errors.
- **REDESIGN:** not warranted; corrections were test/control-only and changed
  no product or media bytes.

### 2026-08-13 - `FRAB-012-v1` - TUNE

- **KEEP:** rolling finite call pools, first-PASS stop, private review,
  accepted-only import, exact cleanup, native lesson ownership, and independent
  full-journey release.
- **KEEP:** the first generation attempt passed source, physical, responsive,
  accessibility, and presentation gates; eight calls remain unused.
- **TUNE:** selected-source E2E fixtures must inventory every initial,
  transfer, reload, and close/reopen launcher before browser execution. When a
  generic launcher is retired, the harness follows the native verb/hotspot
  contract and waits for asynchronous focus restoration. The final complete
  journey passed in `73.674s` with zero runtime errors.
- **REDESIGN:** not warranted; the product implementation and media stayed
  unchanged while the stale harness contract was corrected.

### 2026-08-12 - `FRAB-011-v1` - KEEP

- **KEEP:** derived cover-projection acceptance, private original-resolution
  review, exact identity cleanup, accepted-only import, and first-PASS stop.
- **KEEP:** the first attempt passed the complete physical and responsive
  sentence, leaving nine paid calls unused; full route passed in 72.092 seconds
  with zero runtime errors.
- **TUNE:** derive served asset-count expectations from the fresh build rather
  than incrementing frozen literals after inert-source and selected-raster
  stages.

### 2026-08-12 - `FRWO-009-v7` - REDESIGN

- **KEEP:** finite paid-attempt ledgers, private review, exact identity cleanup,
  accepted-only import, and no-reveal discipline.
- **TUNE:** retain bounded normalized review rectangles for any future content
  decision so an audit can reproduce the verdict without retaining the image.
- **REDESIGN:** responsive acceptance must derive `cover` projection from the
  actual world box and computed CSS, then corroborate real DOM target/focus
  geometry. Caller-supplied booleans and generation-prompt center bands may not
  decide responsive lawfulness. This corrects fifteen unsupported verdicts and
  one invalid release-envelope override without retroactively accepting media.

### 2026-08-12 — `FRAB-008-v1` — TUNE

- **KEEP:** finite CLI ledger, private objective rejection, accepted-only
  import, exact Cloud identity, measured layouts, native lesson ownership, and
  external-root E2E.
- **TUNE:** inventory every retained launcher/re-entry before browser launch;
  compute minified CSS bytes before the presentation commit.
- **REDESIGN:** not warranted. H8-3 passed `994/994`, build/PBA, affected-state
  accessibility, and a `70.851s` complete journey with zero runtime errors.

### 2026-08-12 — `FRAB-007-v1` — TUNE

- **KEEP:** finite CLI ledgers, private objective rejection, exact cleanup,
  accepted-only import, provenance, measured layouts, and independent E2E.
- **TUNE:** require an explicit external QA root before E2E and fail closed
  when absent; never use the historical repository capture default.
- **REDESIGN:** not warranted. H7-3 passed exact media, `988/988`, build,
  served identity, accessibility, and `123.7s` complete-journey gates.

### 2026-08-12 — `FRAB-005-v1` — TUNE

- **KEEP:** finite attempt ledgers, exact cleanup, private review, provenance,
  accepted-only enablement, full regressions, and independent release.
- **TUNE:** use semantic full-source margins with measured accepted-candidate
  rectangles; derive served asset counts from fresh build inventory.
- **REDESIGN:** not warranted. I2 passed `979/979`, build, served identity,
  media budget, presentation, and invariant gates.

### 2026-08-10 — `FRAB-001-v1` — TUNE

- **KEEP:** immutable-candidate review; one non-overlapping clean-start E2E;
  byte-checked production/fixture served identity; explicit physical-host
  non-promotion; protected-path and media boundaries.
- **TUNE:** provide one canonical release-command manifest for the focused
  invocation, validator `--self-test` mode, fixture preview configuration, and
  cleanup disposition. The Intelligence run corrected three local orchestration
  mistakes and reran each exact gate successfully, but a single manifest would
  reduce avoidable reruns without weakening independence.
- **REDESIGN:** not warranted. The candidate passed `25/25` focused, `953/953`
  cold full, `40/40` validators, both builds, PBA/media/served identity, and one
  `69.974 s` clean-start journey through both MH-40 outcomes with zero runtime
  errors.

### 2026-08-10 — `FRAB-002-v1` — TUNE

- **KEEP:** the canonical release manifest; immutable-candidate ancestry and
  patch checks; explicit focused/related gates; exact sorted validators;
  production/fixture byte identity; one complete non-overlapping E2E; targeted
  live layout/focus/color/motion corroboration; honest physical-host maturity;
  and exact-PID/port cleanup.
- **TUNE:** future manifests must allocate a fresh contained QA root outside
  any pre-existing repository quarantine and should emit a concise
  machine-readable live-review summary. Current higher authority quarantined
  the manifest's historical repository QA root, so Intelligence reproduced the
  exact gate in a fresh external temp root without touching the quarantine.
- **REDESIGN:** not warranted. The immutable candidate passed `57/57` focused,
  `70/70` related, `963/963` cold full, `40/40` validators, both builds,
  PBA/media/served identity, one `67.779 s` complete journey through both MH-40
  outcomes with zero runtime errors, and a separate affected-state live check.
