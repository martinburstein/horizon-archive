# First Run Functional Report - Direct API Pre-Generation Correction

Report ID: `FRCE-005-v1-VR-05`

Stage / stable agent: Combat Engineer / `combat_engineer`

Disposition: **`PRODUCTION FUNCTIONAL / SELECTED ORDINAL 2|3 ONLY /
DIRECT-API PREFLIGHT PASS / FRCE-005-v1-VR-05`**

Work Order / decisive viability: `FRWO-005-v7` /
`FRVE-005-v7-VR-03`

Effective shell: `FRSH-005-v1` through `FRSH-005-v1-VR-08`

Effective treatment: `FRDT-005-v1` through `FRDT-005-v1-VR-01`

Effective blueprint: `FRPX-005-v1` through `FRPX-005-v1-VR-01`

Combat source inspected:
`70b6a6055923a5718cb735b1dc6000ba370f37ec`

Frozen inert predecessor candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen predecessor tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Corrected inert code candidate:
`f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree:
`92b22fc56d79d18cf1abf7213c5268c9e4149830`

Immutable accepted-media manifest: `FRAM-001-v1`, file SHA-256
`a674c337b377de113eaa4c6763bd431afc73ab613374a76501aa8c5ce37e5437`,
exact `17 / 37,410,731`, canonical digest
`c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

Exact next recipient: one fresh Quartermaster / `quartermaster`

## Result

Combat independently revalidated the frozen inert candidate and current
direct-API shell, reproduced the one Tactical defect, and made the sole
authorized functional correction. The pure Host 06 selected-source identity
guard now accepts only exact `attemptOrdinal === 2` or `attemptOrdinal === 3`.
Historical consumed ordinal `1` fails closed.

This correction changes no total ordinal domain, future send budget,
transport, helper, request, cleanup, state, action, focus, source mapping,
learning, save, privacy, route, world, accessibility, presentation, or ending
behavior. The registry remains inert and null-first. The selected raster and
provenance targets remain absent. Direct API sends remain exact `0`; ordinals
`2` and `3` remain unconsumed; the conservative managed-residual count remains
exact `1` for opaque historical ordinal `1`.

Combat issues **`PRODUCTION FUNCTIONAL`**. Quartermaster may begin only after
the enclosing evidence commit is pushed and exact local/origin synchronization
is proved.

## Bounded implementation

Changed only:

- `horizon-archive-game/src/drownedArchive.js`: narrowed the pure selected-
  source identity predicate from integer `1..3` to exact membership in
  `{2,3}`;
- `horizon-archive-game/test/strandedLensCradle.test.js`: moved the lawful
  fixture to ordinal `2` and added direct regression proof that ordinal `1`
  is rejected while ordinals `2` and `3` are accepted.

No FRRC change was required. `FRRC-003-v5` and its launcher remain immutable.
The current launcher exposes only accepted-media `create|verify`; the manifest
contains only `accepted-media-create`, `accepted-media-recompute`, and
`production-functional-push`. It contains no direct-API, built-in-generation,
managed-ingress, output-hint, credential, endpoint, response, or candidate-
discovery executable entry. The pre-existing create entry is inapplicable
because immutable `FRAM-001-v1` exists; recompute remains Intelligence-owned.
Therefore obsolete managed ingress cannot execute through the current release
control, and adding a new pre-generation harness would expand the shell.

No other product, test, release-control, media, manifest, curriculum, save,
dependency, route, world, ending, map, scoreboard, maturity, process record,
or protected path changed.

## Independent identity and inertness proof

- Starting `HEAD` was exact `70b6a6055923a5718cb735b1dc6000ba370f37ec`.
- Frozen candidate `02d957e9...` exists as a commit, is an ancestor, and has
  exact tree `09da6293...`.
- Corrected code candidate is exact `f4b2062...`, tree `92b22fc...`.
- `FRAM-001-v1` file SHA-256 is exact `a674c337...`; its stored seventeen
  records sum to `37,410,731`, identify candidate `02d957e9...`, and recompute
  from stored tuple fields to exact `c7ca9520...`.
- Manifest identity was revalidated from the manifest file and stored fields;
  the Intelligence-owned raw-stream recompute command was not invoked.
- The frozen helper source independently re-extracted in memory to exact
  `1,693` bytes / SHA-256 `98cf564b...`.
- The frozen prompt independently re-extracted in memory to exact `4,099`
  bytes / SHA-256 `efd8c7f8...`.
- `FRRC-003-v5` remains exact SHA-256 `6b2d8dc1...`; its launcher remains
  exact SHA-256 `6218e7ef...` and parses with zero PowerShell AST errors.
- The raster and `PROVENANCE.md` product targets are absent.
- Source, provenance, physical, activation, protected, layouts, seven
  `FRPX05_*` copy slots, and factual alt remain exact null-first.
- No accepted-media pixel was opened or inspected. No helper, fixture root,
  live root, credential, request, response, candidate, residual, or VR-65 was
  accessed.

## State, action, focus, recovery, and accessibility evidence

Focused regression preserved the exact graph:

```text
inert source / ordinal 1 / malformed identity
  -> Host 06 hidden
  -> accepted Host 05 safe
  -> generic launcher visible only while enabled !== true

lawful future ordinal 2|3 + all remaining guards
  -> Host 05 committed paint
  -> direct Host 06 replacement
  -> Host 06 focus and notice once
  -> sole native USE into unchanged L02-03
  -> exact Close/Escape/reload/Meadow return
  -> completed read-only USE
  -> unchanged next boundary
```

The same focused set proves one selected image branch, Host 04/05 source
isolation, outgoing Host 05 -> Host 06 -> return order, LOOK/TALK write-free,
USE one-hit, completed USE read-only, transition token nonpersistence, title-
first Terminal focus, Close/Escape restoration, six-layout measurement shape,
`44x44` semantic targets, `3px Highlight` forced-color focus, centered
`cover / 50% 50%`, and unchanged reduced-motion/non-color semantics.

Learning/privacy regression preserves the exact `L02-03` eight primary plus
eight transfer cases, strict `16/16 + 16/16 + 2/2`, sanitizer, actual-
dimension answer-free remediation, blank retry, fresh transfer, closed-note
explanation, ownership/confidence, private clearing, and restoration. Related
regression preserves Hosts 04/05, Meadow return, Demo Tour isolation, later
rail, both MH-40 outcomes, all null deltas, RP-012, and `successor=null`.

## Validation evidence

- Focused Host 05/06, model-choice, scene-return, focus, and world-plate set:
  **50 passed / 0 failed** in `0.22s`.
- Learning/privacy set: **17 passed / 0 failed** in `0.17s`.
- Related opening, return, Demo Tour, responsive, and ending set:
  **58 passed / 0 failed** in `9.02s`.
- Exact sorted curriculum/readiness validators: **40 / 40 passed** in
  `7.02s`.
- Cold full product suite: **979 passed / 0 failed / 0 skipped** in `25.83s`.
- Production build: **PASS**, `217` modules, `10.03s`.
- TD-012 fixture build: **PASS**, `57` modules, `1.54s`.
- Clean production rebuild: **PASS**, `217` modules, `8.46s`.
- Production PBA: JavaScript `1,676,476`; CSS `119,394`; media exact
  `17 / 37,410,731`; source maps `0`. Every applicable pre-generation cap
  passes.
- Served preflight: production root, deep fallback, emitted JavaScript,
  emitted CSS, and TD-012 fixture root each returned HTTP `200`.
- The two exact owned Vite listener processes were stopped and ports `4173`
  and `4184` were proved clear.
- `git diff --check`: **PASS**.

Complete E2E, candidate preview, image decode/performance, live six-layout
mapping, source request, CLS, activation/task, and selected served-media
identity were correctly not run: the source/provenance targets and candidate
values are absent, and the shell prohibits candidate-bearing gates before
lawful Quartermaster selection/import/cleanup. Automated accessibility evidence
is not human assistive-technology certification.

## Acceptance matrix and variance

| ID | Result |
| --- | --- |
| `PX05-VR01-01` | PASS - frozen commit/tree and immutable manifest identities revalidated |
| `PX05-VR01-02` | PASS - exact null-first registry/copy/alt and absent product targets |
| `PX05-VR01-03` | PASS - ordinal `1` rejected; exact `2` and `3` accepted |
| `PX05-VR01-04` | PASS - irreversible launcher boundary preserved |
| `PX05-VR01-05` | PASS - Host 05 paint -> Host 06 -> return -> unchanged L02-03 preserved |
| `PX05-VR01-06` | PASS - native path, six-layout schema, target/focus/motion semantics preserved |
| `PX05-VR01-07` | PASS - direct-API/helper IDs and ordinal/retention ledger exact |
| `PX05-VR01-08` | PASS - technical/physical/PHY/band/protected/cleanup slots remain value-free |
| `PX05-VR01-09` | PASS - frozen post-import layout/live and summary/verifier schema remains implementable |
| `PX05-VR01-10` | PASS - current FRRC is identity/push-only; obsolete ingress has no executable entry |
| `PX05-VR01-11` | PASS - learning/privacy/save/no-cross-credit/Tour isolation unchanged |
| `PX05-VR01-12` | PASS - adjacent rail, equal outcomes, null deltas, RP-012, successor hard stop preserved |

Variance classification:

- **`REQUIRED CORRECTION RESOLVED / DIRECT-API SOURCE IDENTITY`** - runtime
  selection now admits only exact ordinal `2|3`.
- All other inspected behavior and controls: **`PRESERVED / NO CHANGE`**.

## Rollback, protected state, and maturity

Bounded rollback is the explicit two-file revert from corrected candidate
`f4b2062...` to starting source `70b6a605...`. No repository reset, media
rollback, manifest edit, accepted-media mutation, or protected cleanup is
needed or authorized.

Repository QA quarantine, `Art Of No Mans Sky Book Scan.pdf`, `Simplilearn
Training Files/`, real browser/profile/save, hidden lore, accepted-media
pixels, OS-temp parent, helper/live roots, ordinal-1 residual, managed
directory, user work, and VR-65 remain untouched. All thirteen inherited
process records and the separate Commandant filename/search-scope record
remain separate and OPEN.

Maturity impact: none. `FR-03` remains continuity `FR2`; physical-host
expression remains `FR0 - 1 accepted shared compression / 1 exact / 10
missing`; learning `FR2`; behavior/save/recovery `FR1`; content `FR2`;
presentation `FR3`; and prior bounded release proof `FR4`. Only Intelligence
may advance maturity from accepted as-built evidence.

## Exact Quartermaster handoff

After the enclosing report/handoff commit is pushed and exact
`HEAD == origin/main` synchronization is proved, one fresh Quartermaster /
`quartermaster` reads the complete current intake, full Quartermaster profile,
`FRWO-005-v7`, decisive `FRVE-005-v7-VR-03`, complete effective shell through
`FRSH-005-v1-VR-08`, complete effective treatment, complete effective
blueprint, corrected code candidate `f4b2062...`, this report, immutable
`FRAM-001-v1`, and exact helper/direct-API contracts.

Quartermaster independently verifies synchronization, manifest identity,
corrected selected-ordinal guard, absent targets, inert slots, and exact
attempt ledger. It then performs only the shell-authorized one-process PS5.1
helper/direct-API sequence beginning with ordinal `2`; uses ordinal `3` only
after lawful objective rejection and exact cleanup; selects at most one source;
imports only the byte-identical raster plus `PROVENANCE.md`; populates only
predeclared scalar/source/provenance/copy/alt slots; proves exact cleanup; and
issues `PRODUCTION CONTENT COMPLETE` or `HOLD` without reveal.

Quartermaster may not change behavior, lesson, route, save, world, ending,
accepted media/manifest, dependencies, Host 07+, later rail, or protected
state; retry ordinal `1`; exceed the two future sends; access a residual or
VR-65; run complete E2E; advance maturity; release; schedule; automate; reveal;
or call `FIRST RUN COMPLETE`.

The enclosing evidence commit is resolved by Git after this report is written.
Combat must push it and prove exact local/origin equality before this handoff
becomes active.
