# First Run Functional Report / FRCE-003-v1

Date: **2026-08-10**

Role: **Combat Engineer**

Disposition: **HOLD / REVISE LIVE HARNESS**

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

## Variance classification and rollback

- **Shell variance:** none found in implementation or focused evidence.
- **Harness variance:** one stale post-primary assertion, corrected after the
  authorized E2E stop.
- **Release classification:** `HOLD`; this cycle cannot advance to
  Quartermaster or maturity acceptance.
- **Protected boundaries:** no protected PDF, training folder, repository QA
  quarantine, browser/profile/save, hidden lore, image, or media asset was
  inspected or mutated. No image/media operation or reveal occurred.
- **Rollback:** `a9776e337f1820776864a5690332c364d0fb2556` is the bounded product/test/
  manifest commit; `bf58e528bc6ce4088f81f2c782ce2895259ab9fd` is the isolated harness
  correction. Neither requires a migration or save repair.

## Exact next action

Combat Engineer must verify exact corrected candidate
`bf58e528bc6ce4088f81f2c782ce2895259ab9fd` in a fresh authorized run. Use
`FRRC-002-v1`, a new GUID OS-temp QA root proved outside the repository, and
one complete E2E. Require the machine six-layout summary and verifier, the
full later rail, both equal MH-40 outcomes, runtime-error and performance
gates, exact cleanup, and unchanged candidate identity. If and only if every
gate passes, supersede this HOLD with `PRODUCTION FUNCTIONAL / BUILD CANDIDATE
READY` and hand the exact accepted candidate to Quartermaster.
