# TD-009 Intelligence Officer As-Built Reconciliation

Date: **2026-08-01**
Role: **Intelligence Officer / independent release authority**
Shell: **`SS-RP009-OCCLUDED-FOLD-v1`**
Candidate: **`de2fb1c05a61f00aed99970e220060d48aae0866`**
Released predecessor: **`b0c8c7bea04ba5f17712e090a05f2f651d98581a`**
Remote before review: **`2b46d917e9e2bdc7eaadb78bf3dec9cbdf32e551`**
Disposition: **`REVISE - NOT RELEASED`**

## Release decision

TD-009 is not released. The corrected candidate now passes the automated,
build, served-identity, budget, four-layout containment, frozen-copy, and
deterministic presentation-mode gates. Martin's TD-009-only panorama deferral
and Image Specialist/reveal waiver remain accepted and are unrelated to this
decision.

The mandatory independent live review found two exact shell conflicts:

1. The real OF-30 product state renders active owner
   `SYSTEM // RESTORED EXPEDITION NOTES`. The Mission shell requires
   `SYSTEM // EXPEDITION LEDGER` for OF-30 verified restore. This mismatch is
   in `horizon-archive-game/src/OccludedFoldNormal.js`, not only the fixture.
2. The corrected fixture records heading IDs as the focus target for every
   production scenario. Live selection consequently focuses the heading for
   blank Python, prompt, and explanation states instead of the shell-frozen
   first editor/control targets. The contract-equivalent `route_pointer`
   surface reports `td009-route-heading` but does not focus it at all.

These are product/fixture contract defects, not image limitations. Intelligence
does not patch Marine work. The candidate returns to Combat Engineer only.
No release master, surface-canon boundary, product status, or remote ref
advances, and there is no release push.

## Requirement reconciliation

| Shell requirement | Fresh independent evidence | Result |
|---|---|---|
| Stable committed candidate | exact candidate `de2fb1c...`; tracked tree clean before Intelligence documentation | PASS |
| Automated behavior | focused TD-009 `35/35`; connected TD-007-TD-009 `106/106`; full `903/903`; mappings `11/11`; 15 readiness validators PASS | PASS |
| Production/fixture builds | production `206` modules; fixture `50` modules | PASS |
| Served identity | production root, two deep fallbacks, and 19 assets `22/22`; fixture root plus three modules `4/4` | PASS |
| Budget | PBA-TD009-v1 release mode; JS `1,509,976`; CSS `104,035`; 17 predecessor media / `37,410,731`; zero new media | PASS |
| Four layouts and longest copy | DPR-1 desktop/laptop/narrow/effective-200; no horizontal document overflow; all controls/copy contained; targets at least 44 px; all four frozen UTF-8 samples present at every layout | PASS |
| Presentation modes | forced-colors system palette and `forced-color-adjust:none`; reduced motion has no animation/transition and auto scroll; grayscale filter is `grayscale(1)` | PASS |
| Runtime/log boundary | zero console warnings/errors; page inventory is local fixture/product code only with zero image/font/video assets; sampled main-thread task `2ms` | PASS |
| Hard stop | `destination=null, routeOpened=false, successor=null`; no later route/successor text; only LOOK plus the two exact returns | PASS |
| OF-30 active owner | live real product renders `SYSTEM // RESTORED EXPEDITION NOTES`; shell requires `SYSTEM // EXPEDITION LEDGER` | **FAIL** |
| Deterministic focus | learning blanks focus headings rather than exact first controls; boundary route heading is reported but not focused | **FAIL** |
| Runtime imagery/reveal | explicitly deferred/waived by Martin for TD-009 only; zero image, board, or reveal calls | ACCEPTED BOUNDED USER AUTHORITY |

The live owner/focus conflicts leave the shell Definition of Done unsatisfied.
Green source-only fixture tests cannot substitute for the required rendered
contract evidence.

## Fresh validation evidence

- Patch integrity and repository object integrity: PASS.
- Focused TD-009: **35/35 PASS** in **0.455s**.
- Connected TD-007 through TD-009: **106/106 PASS** in **1.116s**.
- Full product suite: **903/903 PASS** in **9.968s**.
- RP-002 through RP-012 mapping self-tests: **11/11 PASS** in **1.451s**.
- All 15 readiness self-test validators: PASS in **1.791s**.
- Automated release validator: PASS in **19.5s**.
- Production build: **206 modules / 7.945s**; fixture build:
  **50 modules / 4.073s**.
- JavaScript: **1,509,976 bytes**, SHA-256
  `70BDD04BBE44E21ED4BC9AC59805991C24F6A6EEB21FA7D2AA37827C1DE17693`.
- CSS: **104,035 bytes**, SHA-256
  `1C24B2141944CF2429CC3B78162F95A32D44005421B87E84D6156660B7076EFB`.
- Runtime media: **17 / 37,410,731 bytes**; zero new media and no accepted
  predecessor media missing.
- Served production: **22/22 PASS**; served fixture: **4/4 PASS**.
- Exactly one non-overlapping E2E was run. It reached the final tracked capture
  set; the asynchronous cell's final stdout was lost during context compaction,
  so Intelligence did not invent an exit-code claim or rerun it. The bounded
  elapsed marker used for budget validation was approximately **157s**, inferred
  from the owned process start and final-capture timestamps.
- Release-mode PBA: PASS with **157s** E2E marker and **2ms** sampled
  main-thread task.
- The live in-app Browser review used DPR 1 desktop, laptop, narrow, and
  effective-200 viewports. Every product control was at least 44 CSS pixels;
  all four frozen copy samples were intact and contained; document horizontal
  overflow was absent.
- Forced-colors, reduced-motion, and grayscale live computed styles passed.
- Browser console warnings/errors: none. Page assets: 30 local scripts,
  2 local stylesheets, no images/fonts/videos, and no external origin.
- All 69 incidental tracked E2E captures were restored. Owned ports `5174`
  and `4181` were stopped and verified clear.

## Required corrections

### `TD009-FUNC-003` - OF-30 owner must match the shell

Earliest owner: **Combat Engineer**.

Change only the OF-30 active owner from `SYSTEM // RESTORED EXPEDITION NOTES`
to the shell-frozen `SYSTEM // EXPEDITION LEDGER` in normal product state and
its exact fixture contract. Add a focused assertion that compares the rendered
owner with the Mission shell contract. Do not alter OF-30 copy, record scopes,
actions, persistence, return behavior, hard stop, or canon.

### `TD009-FIX-002` - rendered focus must match every declared target

Earliest owner: **Combat Engineer**.

The fixture must reproduce the exact replacement-focus contract rather than
assigning every state its heading:

- route group -> `td009-route-heading` after route-group mount;
- OF-10 first entry -> first incomplete observation control;
- Python primary/trace/transfer -> editor/first/editor;
- prompt primary/retrieval/transfer -> their first controls;
- the two explanations -> their fields;
- review/save/recovery/restore -> the shell-defined heading or first failed
  control as applicable.

The contract-equivalent boundary surface must actually focus the declared
heading on mount. Add rendered-DOM tests that fail when `document.activeElement`
differs from the declared target; checking only that a target string exists is
insufficient.

Combat may make one dedicated local correction commit, rerun its bounded
ladder, and return directly to fresh independent Intelligence. Quartermaster,
Image Specialist, image generation, board work, and reveal do not repeat.

## Variance register

| ID | Classification | Owner and disposition |
|---|---|---|
| `TD009-PROC-001` | `DEFERRED LIMITATION` | Historical user-authorized board bypass; bounded to the ended attempt. |
| `TD009-PRES-001` | `DEFERRED LIMITATION` | Image Specialist and reveal waived for TD-009 only. |
| `TD009-CONT-001` | `DEFERRED LIMITATION` | Runtime imagery deferred by Martin; zero new media emitted. |
| `TD009-FUNC-001` | `RESOLVED` | Three ordered RP-007/RP-008/RP-009 review scopes remain accepted. |
| `TD009-FUNC-002` | `RESOLVED` | All eight learning groups remain Pilot-owned. |
| `TD009-CONT-002` | `RESOLVED` | Rollback copy truthfully names prior RP-009 bytes or verified absence. |
| `TD009-FIX-001` | `PARTIALLY RESOLVED` | Exact component/copy/modes are corrected; its exact-focus claim failed live verification. |
| `TD009-FUNC-003` | `REQUIRED CORRECTION` | Combat Engineer; exact OF-30 owner mismatch. |
| `TD009-FIX-002` | `REQUIRED CORRECTION` | Combat Engineer; exact rendered focus mismatch. |

No `MASTERPLAN UPDATE` or `ACCEPTED IMPROVEMENT` is recorded. The shell remains
authoritative.

## Retrospective

**TUNE**, not promoted to release controls on this failed gate: fixture tests
must compare shell-frozen owner/focus values with rendered DOM state and actual
focus, not merely assert that state objects contain nonempty owner/focus
strings. Combat's correction adds the bounded regression coverage; a later
successful Intelligence release may promote the evidence-backed process tune.

## Synchronization and protection

This package is a local Intelligence `REVISE` checkpoint. `origin/main` and
remote main remain `2b46d917e9e2bdc7eaadb78bf3dec9cbdf32e551`.

Martin's browser profile, storage, and campaign save were never opened, read,
or mutated. No Image Specialist, board, generation, edit, derivation,
integration, or reveal call occurred.

Protected `Art Of No Mans Sky Book Scan.pdf` and `Simplilearn Training Files/`
remain unmodified, unstaged, and uncommitted.

**Final disposition: `REVISE - NOT RELEASED`.**
