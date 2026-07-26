# TD-003 Polish Review

## Document control

| Field | Value |
|---|---|
| Stage | Image Specialist |
| Agent ID | `image_specialist` |
| Test drive | `TD-003` |
| Shell | `SS-RP003-REVIEW-SAVE-v1` |
| Campaign address | `RP-003 / SC-04 / CM-40-CM-50` |
| Starting authority | Quartermaster `CONTENT COMPLETE` commit `6f8b471e54feb17e79e1fa25f749390babc5d7bd` |
| Functional authority | Combat Engineer synchronized `FUNCTIONALLY COMPLETE` build `e6c4f995d29ee5257e6ab7caa68a8a0bd920f036` |
| Presentation candidate | This dedicated Image Specialist commit; resolve its immutable identity from Git history |
| Validation tier | Direct closed-fixture presentation review, focused regression, production build/budget identity, reveal inspection, provenance, and patch checks |
| Disposition | `PRESENTATION COMPLETE — CORRECTED` |

## Intelligence correction return — `TD003-INT-001`

Intelligence Officer release commit
`9e374431976636c217da11d3ba16493c32852515` returned one presentation
finding: at an actual CSS viewport of `1920 x 1080`, the CM-40 panel and
document overflowed, and the second action row was below the viewport.

The earlier controlled-Chrome overrides reported scaled viewports
(`2133 x 1200` for a requested `1920 x 1080`) and are superseded for this
finding. The correction return used the manifest-owned, storage-free fixture
in a clean Chromium context whose runtime reported exactly
`window.innerWidth=1920`, `window.innerHeight=1080`, and
`devicePixelRatio=1`.

The bounded CSS correction:

- caps the existing desktop extraction-floor panel inside the `46px` shell
  chrome budget;
- compacts only active CM-40 panel spacing;
- keeps the ordered five-obligation list in one DOM/source-order column while
  presenting each obligation's status, owner, and limit as three wrapping
  tracks; and
- removes behaviorally redundant desktop grid declarations to pay for the
  correction without weakening the fixed byte cap.

No copy, component markup, source order, focus order, mechanic, state,
controller, evidence, schema, persistence, route, world plate, asset, reveal,
audio, font, or network behavior changed.

### Exact corrected desktop evidence

For `cm40-five-conjunct-ready` at exact CSS `1920 x 1080`:

| Measurement | Corrected result |
|---|---:|
| Document client / scroll | `1920 x 1080` / `1920 x 1080` |
| Review panel client / scroll | `571 x 955` / `571 x 955` |
| Dominant invariant world | `857.19 x 957.86` |
| `REVIEW PROVENANCE` bottom | `794.64` |
| `RETURN TO CIVIC COMPARISON` bottom | `794.64` |
| `RETURN TO CITY THRESHOLD` bottom | `848.64` |
| `SAVE EXPEDITION NOTE` bottom | `848.64` |
| Local-only negative-authority copy bottom | `964.86` |

The heading owned initial focus. One `Tab` moved focus to
`REVIEW PROVENANCE` without scrolling; its target measured
`264.73 x 58`, with a visible `3px` solid outline and `3px` separation.
Every action remained at least `44 x 44`.

All eleven allowlisted scenarios passed a `44`-render sweep at exact CSS
desktop `1920 x 1080`, laptop `1366 x 768`, narrow `390 x 844`, and
width-equivalent effective-`200%` `768 x 900`. The sweep verified fixture and
scenario identity, exact CSS dimensions at DPR `1`, no horizontal document or
panel escape, world-first source order, heading-first focus, one polite atomic
status, `44px` targets, required-content horizontal bounds, console silence,
reduced-motion matching, forced-color matching on desktop, and the exact
CM-40 desktop document/panel/action/world-dominance gate. Each fixture launch
owned its exact listener PID, returned HTTP `200`, stopped only that PID, and
left port `4175` clear.

Focused presentation/regression tests pass `38/38`; the full suite passes
`785/785`; the production build passes with `179` modules. The corrected
build is:

- JavaScript `index-DHPBT_yG.js`, `1,195,380` bytes,
  `D98AFEF9BD364F513523831E67114FEA800208AF15882DE4767D09BA3BF71DC3`;
- CSS `index-DD5Uz-s3.css`, `81,704` bytes,
  `3CFAC5DF70551BEFDEAF24E257CCA4729356BE1FE2D15E8BB6D1EEC4002FA53B`;
- JavaScript headroom `244` bytes; CSS headroom `1` byte.

The exact reveal candidate remains untouched: `1672 x 941`,
`1,923,084` bytes,
`574936396CC062762E07AB6EBEA3FFA60059ACA919A36A8A60A4DAFA6A2AF7B2`.

## Original Image Specialist pass retained for audit

The sections below preserve the original Image Specialist evidence as run.
Where its scaled controlled-Chrome dimensions or original build identity
conflict with the correction-return section above, the correction-return
evidence is authoritative.

The stage began from exact Quartermaster commit
`6f8b471e54feb17e79e1fa25f749390babc5d7bd`. Its content, controller,
evidence, persistence, route, world, and hard-stop boundaries remained fixed.

The review found and corrected two presentation-only defects:

1. a sparse recovery state let the invariant world plate's intrinsic aspect
   ratio enlarge the one-column grid at narrow/effective-`200%`, clipping the
   review panel inside an overflow-clipped shell; and
2. the closed observation-recovery fixture exposed the internal target token
   `first_incomplete_observation` as its visible diagnostic action label.

The first correction adds only `min-width: 0` to the existing shared
canonical world rule. The second changes only the test-only fixed fixture
label to `FOCUS BLANK BOUNDARY`; phase, heading, recovery identity, focus
destination, and controller behavior remain unchanged.

No player copy, runtime JavaScript, state, controller, schema, evidence,
storage, route, world plate, audio, media, font, or network behavior changed.

## Presentation changes

| Finding | Correction | Scope | Result |
|---|---|---|---|
| `TD003-IMG-001` sparse-state intrinsic-width clipping | Added `min-width: 0` to the existing shared `.canonical-game-frame .city-world` rule | Runtime CSS; presentation only | RESOLVED |
| `TD003-IMG-002` raw fixture recovery token | Replaced the closed fixture's visible recovery action with `FOCUS BLANK BOUNDARY` | Test-only fixture presentation | RESOLVED |

The CSS correction adds `12` minified bytes and leaves `17` bytes below the
fixed shell cap. It does not hide overflow; it permits the existing grid item
to shrink to its parent and preserve natural wrapping.

## Manifest-owned fixture lifecycle

The exact manifest at
`horizon-archive-game/review-fixtures/td003-review-save/launch-manifest.json`
was confirmed:

- fixture `td003-review-save-v1`;
- owner `Intelligence Officer`;
- `127.0.0.1:4175`;
- package command `npm run review:td003-review-save`;
- exact eleven-scenario allowlist;
- root marker `TD003_REVIEW_SAVE_FIXTURE`;
- exact PID capture; and
- cleanup of only that captured PID.

For direct review, each manifest scenario was started through the package
command's exact Vite target with the scenario environment fixed before
launch. Port `4175` was preflighted clear, the captured process PID equaled
the listener PID, the root returned HTTP `200`, and only that PID was stopped.
The port was confirmed clear after every stop. No unowned process was killed
or reused.

| Scenario | Initial owned PID | Corrected-state recheck PID | Root |
|---|---:|---:|---:|
| `cm40-five-conjunct-ready` | `32028` | `17332` | `200` |
| `cm40-provenance-pending` | `49800` | `48804` | `200` |
| `cm40-observation-invalid` | `47132` | `43908` | `200` |
| `cm40-python-invalid` | `39460` | same owned launch after live CSS reload | `200` |
| `cm40-ie-invalid` | `31880` | n/a | `200` |
| `cm40-invariant-invalid` | `29588` | n/a | `200` |
| `cm41-save-committed` | `35676` | n/a | `200` |
| `cm41-write-failed-last-good` | `37936` | n/a | `200` |
| `cm50-verified-restore` | `1964` | n/a | `200` |
| `cm50-return-civic-comparison` | `39064` | n/a | `200` |
| `cm50-return-city-threshold` | `20352` | n/a | `200` |

Final fixture cleanup: PASS, port `4175` clear.

## Direct visual and responsive evidence

The Browser skill selected its controlled Chrome surface for the local URL.
One agent-created tab was used and closed. Temporary viewport overrides were
reset. No browser storage, campaign save, cookies, profile, session,
arbitrary URL state, query, hash, or user tab was inspected or changed.

The controlled surface reported the following effective CSS viewports for
the four requested review classes:

| Review class | Requested override | Browser-reported viewport |
|---|---:|---:|
| Desktop | `1920 x 1080` | `2133 x 1200` |
| Laptop | `1366 x 768` | `1518 x 853` |
| Narrow | `390 x 844` | `434 x 938` |
| Width-equivalent effective-`200%` | `768 x 900` | `853 x 1000` |

After correction, every one of the eleven fixed scenarios passed all four
layouts:

- no document horizontal escape;
- no visible descendant escaped the viewport;
- complete heading, owner, status, required content, and current action
  remained readable;
- the world remained first in source order;
- the inherited plate retained exact `1672 x 941` intrinsic identity and
  local-only origin;
- review states retained five ordered peer obligations;
- CM-50 retained one native three-term description list;
- every actionable button measured at least `44px` high;
- the one committed transaction state correctly exposed no player control;
- exactly one polite atomic status remained active;
- no forbidden bearing, RP-004, RP-013, reward, access, authority, or city
  authorization copy appeared; and
- console warning/error capture remained empty.

### Scenario evidence

| Scenario | Phase / heading | Focus result | Layout result |
|---|---|---|---|
| `cm40-five-conjunct-ready` | `CM-40`; `Review expedition evidence` | heading -> `REVIEW PROVENANCE` | PASS, four layouts |
| `cm40-provenance-pending` | `CM-40`; `Review expedition evidence` | heading -> `REVIEW PROVENANCE` | PASS, four layouts |
| `cm40-observation-invalid` | `CM-10`; `Return to incomplete observations` | heading -> `FOCUS BLANK BOUNDARY` | PASS after correction |
| `cm40-python-invalid` | `CM-22`; `Return to incomplete Python work` | heading -> `FOCUS BLANK BOUNDARY` | PASS after correction |
| `cm40-ie-invalid` | `CM-33`; `Return to incomplete extraction work` | heading -> `FOCUS BLANK BOUNDARY` | PASS |
| `cm40-invariant-invalid` | `IE-P3`; `Expedition record ready for review` | heading -> `FOCUS BLANK BOUNDARY` | PASS |
| `cm41-save-committed` | `CM-41`; `Preserve local expedition note` | heading retained; no player control enters tab order | PASS |
| `cm41-write-failed-last-good` | `CM-40`; `Review expedition evidence` | heading -> `REVIEW PROVENANCE` | PASS |
| `cm50-verified-restore` | `CM-50`; `Restored expedition note` | heading -> `RETURN TO CIVIC COMPARISON` | PASS |
| `cm50-return-civic-comparison` | `SC-03-50`; `Civic Comparison restored` | heading -> bounded fixture focus action | PASS |
| `cm50-return-city-threshold` | `SC-02-50`; `City Threshold` | heading -> bounded fixture focus action | PASS |

The failed-write scenario directly retained the private-free message:

> The new local note was not accepted. Any last verified note remains
> unchanged. Review provenance again before a fresh save.

Its save action remained natively disabled and non-dispatchable until fresh
provenance review.

## Accessibility-state evidence

| Check | Evidence | Result |
|---|---|---|
| Heading-first focus | Direct active-element inspection on every scenario | PASS |
| Visible keyboard focus | First available action measured approximately `2.67px` solid high-contrast outline with separation; source rule remains `3px` | PASS |
| Target size | All visible player actions measured `>=44px`; laptop actions measured `57px` | PASS |
| Disabled semantics | CM-40 save remains native `disabled` plus `aria-disabled=true`, with persistent reason | PASS |
| Status | One polite atomic status in each scenario | PASS |
| One active group | DOM snapshots expose one labelled expedition/recovery group beside one labelled invariant world region | PASS |
| Non-color meaning | Owner, completion, unavailable, failure, local save, restore, and return meaning remain complete in text/native state | PASS |
| Forced colors | Existing forced-color rules preserve system colors, borders, focus, disabled, and state grouping; focused tests pass | PASS BY SOURCE/TEST |
| Reduced motion | Existing reduced-motion rules remove animation/transition/scroll behavior without changing state meaning; focused tests pass | PASS BY SOURCE/TEST |
| Silence | No new runtime audio/media; every state and error remains complete in text | PASS |

The controlled Browser surface did not expose direct platform forced-color,
reduced-motion, native text-only `200%` zoom, human screen-reader speech, or
physical switch-hardware emulation. Those exact platform claims remain
deferred to independent release evidence. Width-equivalent layout, direct
focus/target/status evidence, and deterministic source/tests pass.

## Functional regression and build evidence

| Gate | Result |
|---|---|
| Focused controller/normal-route/UI/fixture suite | PASS, `12/12`, `0.431s` total command duration |
| Production build | PASS, `179` modules, `23.86s` |
| JavaScript | `index-DUDSudk8.js`; `1,195,380` bytes; SHA-256 `D98AFEF9BD364F513523831E67114FEA800208AF15882DE4767D09BA3BF71DC3`; unchanged; `244` bytes headroom |
| CSS | `index-Dmsam-J8.css`; `81,688` bytes; SHA-256 `00A9C50F467FC704A1C69D0FDBEA3E014253C207E94DC5B2D36AB1BAEDA90DD0`; `17` bytes headroom |
| New runtime media/font/audio/network | `0` bytes |
| Fixture production exclusion | PASS: marker, path, port, config/manifest identity, and scenario family absent from `dist` |
| Patch integrity | PASS, `git diff --check` |
| Protected work | PASS: hidden lore unopened; named PDF/training directory untouched |

The Intelligence Officer still owns the independent full suite, every
readiness validator self-test, production preview, served identity, complete
non-overlapping E2E, independent fixture review, QA restoration, final
variance classification, and release synchronization.

## Reveal decision

The chosen decision is:

> **`RP-003 / CM-50 — five independently verified expedition obligations can
> remain visibly distinct inside one atomic local memory while SC-04 neither
> receives nor responds to the record`.**

## Comparison with recent visual canon

- TD-001 used a steep landscape-scale SC-04 cross-section and independent
  environmental clocks.
- TD-002 used an extreme-macro single-piece provenance carrier.
- Earlier RP-003 references used medium-wide paired bands and a contact-scale
  bounded-difference material study.
- Recent RP-002 references used folios, cassettes, triptychs, leaves,
  cradles, seals, and threshold sightlines.

TD-003 uses a mid-scale low-oblique five-filament object/world relationship:
one compact braid remains countable and subordinate against the immense
greater whole. It repeats neither the prior macro carrier nor the
landscape-clock composition.

## Reveal asset and provenance

| Field | Value |
|---|---|
| Asset | `Visual Direction/Production Masters/2026-07-26-rp003-five-filament-retention-braid-reveal/rp003-five-filament-retention-braid-v1.png` |
| Dimensions | `1672 x 941` |
| File size | `1,923,084` bytes |
| SHA-256 | `574936396CC062762E07AB6EBEA3FFA60059ACA919A36A8A60A4DAFA6A2AF7B2` |
| Mode | OpenAI built-in `image_gen`; exactly one generation; no edit, retry, or variant |
| Original-resolution review | PASS; five distinct non-glowing filaments remain traceable in one inert removable braid; no person/text/UI/access/response artifact |
| Complete prompt/provenance | neighboring `PROVENANCE.md` |
| Runtime status | spoiler-safe canonical reference only; not runtime-integrated, not a save/schema/evidence/interface model, and not `SC-04-MASTER` |

The exact support surface, braid geometry, retainers, filament materials,
wear, terminal anatomy, distant ringed masses, apertures, lights, steam, and
circulation forms remain non-canonical. The image defines no human room,
native purpose, answer, route, access, reward, authority, hidden lore,
RP-004, RP-013, successor, or post-ending content.

## Named visual-production checklist

`[x] RP-003 / CM-50 — five independent obligations remain distinct inside one atomic expedition memory`

The item is recorded in:

- this Polish Review;
- the reveal's `PROVENANCE.md`;
- `Concept Art Book/prompt-provenance-log.md`;
- `Concept Art Book/scenes/SC-04-calibration-margin.md`; and
- `Production Pipeline/demo-increments/DI-001-city-threshold.md`.

Exactly one reveal image was generated for TD-003.

## Variances and limitations

### Resolved findings for Intelligence classification

| ID | Observed mismatch | Proposed classification | Status |
|---|---|---|---|
| `TD003-IMG-001` | Sparse recovery states clipped inside narrow/zoom shell because an intrinsic-ratio world grid item could not shrink | `REQUIRED CORRECTION` | RESOLVED by bounded `min-width: 0`; tests/build/review pass |
| `TD003-IMG-002` | Closed observation-recovery fixture exposed an internal target token as its visible label | `REQUIRED CORRECTION` | RESOLVED in test-only fixture; tests/review pass |
| `TD003-INT-001` | Exact CSS `1920 x 1080` CM-40 document/panel overflow placed required actions below the viewport | `REQUIRED CORRECTION` | RESOLVED by exact shell-height accounting plus active-CM-40 evidence-row compaction; exact layout, focus, tests, and build pass |

No product, canon, campaign, learning, evidence, privacy, save, route, world,
content, mechanic, or unauthorized shell divergence remains.

### Deferred limitations

1. The inherited City Threshold overview remains temporary SC-04 atmosphere
   and is not `SC-04-MASTER`.
2. CSS retains only `17` raw-byte headroom.
3. JavaScript retains only `244` raw-byte headroom.
4. English is the only integrated locale.
5. Exact native forced-color, reduced-motion, text-only `200%`, human
   screen-reader speech, and physical switch hardware remain unclaimed.
6. Closed in-memory fixture evidence does not claim Martin's actual browser
   persistence; his storage remained untouched.
7. The Browser-controlled screenshot export timed out, so the stage retains
   direct DOM/computed-layout evidence rather than an archived fixture
   screenshot. The controlled rendered tab itself remained available for all
   state, focus, target, overflow, console, and asset checks.

None blocks the Image Specialist presentation gate. The Intelligence Officer
must independently validate and classify them.

## Files changed

### Runtime presentation

- `horizon-archive-game/src/styles.css`

### Closed test fixture

- `horizon-archive-game/review-fixtures/td003-review-save/scenarios.js`

### Reveal and visual canon

- `Visual Direction/Production Masters/2026-07-26-rp003-five-filament-retention-braid-reveal/rp003-five-filament-retention-braid-v1.png`
- `Visual Direction/Production Masters/2026-07-26-rp003-five-filament-retention-braid-reveal/PROVENANCE.md`
- `Concept Art Book/prompt-provenance-log.md`
- `Concept Art Book/scenes/SC-04-calibration-margin.md`
- `Production Pipeline/demo-increments/DI-001-city-threshold.md`

### Stage control

- this Polish Review;
- `TD-003/STAGE-METRICS.json`.

## Protected boundaries

- Hidden-lore vault unopened.
- Protected PDF and training directory uninspected and untouched.
- Martin's browser storage, campaign save, cookies, profile, and session were
  not inspected, seeded, changed, or used to manufacture a gated state.
- No network, Azure/Foundry service, credential, endpoint, account,
  microphone, camera, file picker, service worker, or external action entered
  runtime.
- Demo Tour storage and credit boundaries remain unchanged.
- SC-04 geometry, crop, light/sound sources, route, coupling, sealed boundary,
  maintenance, circulation, clocks, and world response remain unchanged.
- No bearing, RP-004, RP-013, successor, post-ending content, score, reward,
  access, permission, identity, authority, exam standing, exam guarantee,
  unavailable-source inference, or city response was added.

## Disposition

**`PRESENTATION COMPLETE — CORRECTED`**

`TD003-INT-001` is resolved against Intelligence Officer release commit
`9e374431976636c217da11d3ba16493c32852515`. All eleven closed scenarios
pass the exact-CSS multi-layout correction sweep. Focus, target size, status,
semantic ownership, disabled state, non-color meaning, text fit, asset
identity, local-only origin, console, production exclusion, focused
regression, full suite, build, and byte caps pass. The existing one reveal
candidate remains byte-identical, provenance-complete, spoiler-safe, and
explicitly reference-only.

## Exact Intelligence Officer handoff

- **Stage / agent:** Intelligence Officer / `intelligence_officer`
- **Shell:** `SS-RP003-REVIEW-SAVE-v1`
- **Starting authority:** this exact
  `PRESENTATION COMPLETE — CORRECTED` commit, Intelligence Officer
  `REVISE` release
  `9e374431976636c217da11d3ba16493c32852515`, Quartermaster commit
  `6f8b471e54feb17e79e1fa25f749390babc5d7bd`, synchronized Combat Engineer
  build `e6c4f995d29ee5257e6ab7caa68a8a0bd920f036`, final shell, Creative
  Treatment, Experience Blueprint, Functional Build Report, Content/Asset
  Ledger, and Intelligence reconciliation
- **Exact runtime candidate:** JavaScript `index-DHPBT_yG.js`,
  `1,195,380` bytes,
  `D98AFEF9BD364F513523831E67114FEA800208AF15882DE4767D09BA3BF71DC3`;
  CSS `index-DD5Uz-s3.css`, `81,704` bytes,
  `3CFAC5DF70551BEFDEAF24E257CCA4729356BE1FE2D15E8BB6D1EEC4002FA53B`
- **Correction delta:** CSS-only exact-desktop CM-40 containment and ordered
  evidence-row compaction; byte-offset by redundant grid declaration removal;
  no JavaScript/content/component/mechanic/schema/focus/source-order delta
- **Fixture delta:** one test-only human-readable recovery label; no state,
  target, route, storage, or production delta
- **Reveal candidate:** absolute project path
  `C:\Users\marti\OneDrive\Desktop\Horizon Archive\Visual Direction\Production Masters\2026-07-26-rp003-five-filament-retention-braid-reveal\rp003-five-filament-retention-braid-v1.png`
- **Reveal identity:** `1672 x 941`, `1,923,084` bytes,
  `574936396CC062762E07AB6EBEA3FFA60059ACA919A36A8A60A4DAFA6A2AF7B2`
- **Reveal status:** exactly one generated candidate; canonical reference
  only; Intelligence may accept this exact image or issue `REVISE`/`HOLD`,
  but may not silently replace it
- **Resolved findings to reclassify:** `TD003-IMG-001`,
  `TD003-IMG-002`, and Intelligence blocking finding `TD003-INT-001`
- **Exact correction evidence:** real CSS `1920 x 1080` at DPR `1`;
  document `scrollHeight=1080`; panel `clientHeight=955` and
  `scrollHeight=955`; all required action bottoms `<=848.64`; world
  `857.19px` wide versus panel `571.47px`; initial heading focus and visible
  first-action focus pass
- **Independent release required:** full suite; all readiness validator
  self-tests; production build; isolated production preview with root/assets
  HTTP `200`, served byte identity, owned PID/liveness and cleanup; one
  complete non-overlapping E2E; independent owned fixture launch; all eleven
  scenarios across required viewports and supported accessibility states;
  console/network/overflow/asset/hash review; fixture production exclusion;
  QA restoration; line-by-line shell reconciliation; final variance
  classification; handoff replacement; commit, push, and
  `HEAD == origin/main`
- **Limitations to classify:** inherited temporary plate; `1` CSS byte;
  `244` JS bytes; English-only; exact platform zoom/color/motion/human-AT
  review beyond deterministic emulation
- **Protected boundary:** do not inspect or mutate Martin's browser storage or
  campaign save; do not open hidden lore; do not inspect, alter, stage, move,
  delete, or commit the named PDF or training directory
- **Stop boundary:** CM-50 plus only the two known returns; no bearing,
  RP-004, RP-013, successor, reward, access, authority, external action, or
  physical/world response
- **Required output:**
  `Production Pipeline/Skyscraper Test Drives/TD-003/11-AS-BUILT-RECONCILIATION.md`
- **Required disposition:** `AS BUILT RELEASED`, `REVISE`, or `HOLD`
