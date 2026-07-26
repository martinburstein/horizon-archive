# TD-004 As-Built Reconciliation

## Document control

| Field | Value |
|---|---|
| Stage | Intelligence Officer |
| Agent ID | `intelligence_officer` |
| Test drive | `TD-004` |
| Shell | `SS-RP004-THREE-CURRENT-v1` |
| Slice | `TD-004-RP004-THREE-CURRENT-v1` |
| Campaign address | `RP-004 / SC-05 / TR-00-TR-40` |
| Candidate | Image Specialist commit `57fe57ccd2d571af5f341181d78c0a9cbe8d9143` |
| Released functional base | Combat Engineer commit `95fb6402c281ec1294bdb76582de04e80f3f3cb9` (`origin/main` at audit start) |
| Release disposition | **`REVISE - NOT AS BUILT RELEASED`** |
| Blocking finding | `TD004-VAR-001` |
| Return owner | Quartermaster / `quartermaster` |
| Process recommendation | `TUNE` |

The candidate is functionally strong and every fresh automated, build,
served-identity, E2E, and representative exact-layout gate passed. It cannot
be released because the final shell requires one shell-compliant SC-05
first-person runtime world presentation with provenance and honest runtime
identity. The candidate instead imports the inherited City Threshold
overview, which both downstream records explicitly classify as a temporary
placeholder that is not an SC-05 master. The one generated TD-004 reveal is
valid reference evidence but is explicitly ineligible for runtime use.

This is a fixed-requirement major asset defect, not an honest limitation that
can be deferred from this shell.

## Repository and chain audit

- Starting `HEAD`:
  `57fe57ccd2d571af5f341181d78c0a9cbe8d9143`.
- Starting `origin/main`:
  `95fb6402c281ec1294bdb76582de04e80f3f3cb9`.
- The dedicated stage chain is contiguous and ordered:
  Commandant `524f71e`, Colonel `6130810`, Operations HOLD `e1d54c0`,
  Science HOLD `c274ca3`, Mission HOLD `555496a`, returned Operations
  `e8b4b63`, returned Science `644d074`, Mission `SHELL READY` `cb124fa`,
  Reconnaissance `126e89d`, Tactical Operations `40552d9`, Combat
  `95fb640`, Quartermaster `4b7a9ec`, and Image Specialist `57fe57c`.
- The three HOLD records correctly prevented Marine deployment before
  Martin's exact route authority was encoded, revalidated, and issued in a
  versioned shell.
- The stage ledger's predecessor commit placeholders are reconciled to the
  immutable hashes above.
- Before Intelligence documentation, the only worktree entries were the two
  protected untracked paths. They were not inspected, altered, staged,
  moved, deleted, or committed.
- `git diff --check` passed before documentation.

## Requirement-by-requirement reconciliation

| # | Shell requirement | Independent evidence | Result |
|---:|---|---|---|
| 1 | Exact released CM-50 predecessor and no replay | source, controller/integration tests, route-ready fixture | PASS |
| 2 | `TD004-RTA-001` is the sole fresh normal entry | seven-modality token tests and App integration | PASS |
| 3 | Validation precedes one-hit token consumption | controller tests for valid, invalid, stale, and repeated intents | PASS |
| 4 | Arrival changes no world or durable record | controller state/source audit and fixture | PASS |
| 5 | Three equal observations converge in all six orders | focused test and TR-10 fixture | PASS |
| 6 | Observation remains zero-credit and replay-safe | controller/source tests | PASS |
| 7 | Apparent common return remains purpose/category/destination unknown | rejection test, copy, and fixture | PASS |
| 8 | Purpose inference does not consume token or grant evidence | focused test | PASS |
| 9 | Python primary/retrieval/transfer remain independent | evaluator/controller tests and source audit | PASS |
| 10 | AI-901 primary/retrieval/transfer remain independent | exact fixture recipes, controller tests, frozen references | PASS |
| 11 | Modality and agentic explanations remain separately scored | controller/source tests | PASS |
| 12 | Misses expose answer-free public boundaries and blank retry | focused test and repair fixture recipe | PASS |
| 13 | No cross-credit or partial-credit accumulation | evaluator/controller tests and exact ordered evidence audit | PASS |
| 14 | Review keeps physical, Python, AI workload, and source/authority obligations separate | source, UI test, conjunctive review recipe | PASS |
| 15 | Fresh provenance and save intents are required | controller tests and state graph audit | PASS |
| 16 | Dedicated RP-004 sanitizer precedes one atomic replacement | storage adapter/source and strict save tests | PASS |
| 17 | Strict read-back defines success | exact save/read-back tests | PASS |
| 18 | Failure preserves prior RP-004 bytes or verified absence and all TD-003 bytes | throw/malformed read-back tests and failure fixture | PASS |
| 19 | First-incomplete recovery is blank, deterministic, and no replay | contiguous-prefix tests and resume recipes | PASS |
| 20 | Exact saved re-entry mounts heading-first TR-40 | integration/controller tests and restore fixture | PASS |
| 21 | Calibration Margin and City Threshold returns are exact and write-free | controller tests and fixture recipes | PASS |
| 22 | No direct Civic Comparison shortcut exists | actions/source/production scans | PASS |
| 23 | Optional continuation stays destinationless and opens no route | controller/source tests | PASS |
| 24 | Seven input modalities converge; one owner/group/heading/status is active | focused tests plus live review | PASS |
| 25 | SC-05 is maximum-quality, first-person, causally legible, accessible, invariant, and free of protagonist/human trace | runtime imports inherited City Threshold overview expressly marked temporary and non-SC-05 | **FAIL** |
| 26 | Closed fixture is storage-free, allowlisted, and absent from production | isolation tests; source/dist marker, path, port, scenario scans | PASS |
| 27 | Offline, no authority/exam guarantee, Tour isolation | source/tests, no foreign live-review requests | PASS |
| 28 | Every `PBA-TD004-v1` aggregate cap passes | independent build and budget validator | PASS |
| 29 | RP-005, traversable return, RP-013, successor, reward, access, permission, authority, live service, external action, and world response remain absent | tests and source/dist scans | PASS |
| 30 | Focused, related, full, validator, build, served, E2E, exact-layout, cleanup, patch, and sync gates pass | all technical gates pass; sync/release withheld by required correction | PASS except release sync intentionally withheld |
| 31 | Exactly one reveal candidate and provenance package exists | one PNG, one provenance record, exact hash/dimensions | PASS; acceptance/publication held |
| 32 | Every variance is classified and no unauthorized divergence remains | variance register below | PASS |
| 33 | Intelligence issues `AS BUILT RELEASED` only after the whole shell passes | requirement 25 fails | **NOT ISSUED** |

## Independent release evidence

### Automated product gates

| Gate | Fresh Intelligence result |
|---|---|
| Focused TD-004 suite | `19/19 PASS`, `0.436s`; one `164.768ms` fixture-construction aggregate builds all 34 static recipes, while every route/controller/UI case is below `100ms` |
| Related TD-003/TD-004 suite | `134/134 PASS`, `1.147s` |
| Full game suite | `804/804 PASS`, Node duration `9.626s`, wall `11.06s` |
| Readiness validators | `15/15 PASS`: `CUM-01`, `RP-002` through `RP-012`, `SIM-01` through `SIM-03` |
| Production build | PASS, `182` modules, Vite `14.02s`, wall `16.506s` |
| JavaScript | `index-CAdIIK0s.js`, `1,246,963` bytes, SHA-256 `6CF04ECF500B0922864CF6DFD3A2C61E39ADE73527F51CEB0AD5806A81CDBF94` |
| CSS | `index-BxET_qxJ.css`, `84,962` bytes, SHA-256 `DF87C5E5A91310463D9AB522192B0E44106E2C2911B986F360B477F744EBF871` |
| Runtime media | `19,372,371` bytes; `0` new runtime media bytes |
| Budget | `PBA-TD004-v1 PASS`; JS headroom `8,186`, CSS headroom `827`, modules headroom `5`, image headroom `4,194,304` |
| Production exclusion | no fixture marker, fixture path, port, scenario ID, or source mapping URL in `dist` |
| Preview and fallback | isolated strict `127.0.0.1:5184`; root, reload, and route fallback HTTP `200`; root/reload bytes identical |
| Served identity | served JS/CSS HTTP `200` and byte/hash-identical to `dist` |
| Complete E2E | exactly one post-build, non-overlapping run; `93.809s`; every emitted gate true, credits reached, `runtimeErrors:false` |
| QA restoration | all 69 incidental tracked E2E captures restored; no generated capture retained in the repository |
| Cleanup | only owned fixture/preview PIDs stopped; ports `4176` and `5184` clear |

The production build completed before the preview and E2E began. No build
overlapped the complete E2E.

### Representative exact DPR-1 live review

The closed storage-free fixture was launched independently for:

- `cm50-three-choice-route-ready`;
- `tr10-relations-none-recorded`;
- `tr30-ai901-transfer-neutral`;
- `tr30-save-failed-last-good`; and
- `tr40-verified-restore`.

Every state was measured at exact CSS `1920 x 1080`, `1366 x 768`,
`390 x 844`, and width-equivalent effective-`200%` `768 x 900`: 20 exact
state/layout combinations.

Across all 20:

- document width equaled scroll width; no horizontal escape occurred;
- desktop/laptop SC-05 states retained a `0.600` world-width share;
- every visible control was at least `44 CSS px` high and wide;
- the expected `h1` held initial focus;
- exactly one polite atomic status existed;
- the required action group was reachable inside the viewport after native
  panel/page scrolling;
- no fixture/scenario marker entered the DOM;
- no console error, page error, or foreign network request occurred; and
- the loaded world source was the inherited
  `city-threshold-overview-master.png`.

Forced-colors and reduced-motion emulation were exercised on route-ready and
the high-density TR-30 transfer state at all four layouts. Forced colors
removed the decorative world overlay and preserved system control borders;
reduced motion reported zero nonzero animation/transition durations and
`scroll-behavior:auto`.

Original-resolution visual review confirmed clean containment and legible
world/panel hierarchy. It also confirmed the blocking identity mismatch:
SC-05 presents the same City Threshold overview instead of the three distinct
current/handling relations and capped apparent return required by the shell.

## Runtime asset reconciliation

| Evidence | Verified fact |
|---|---|
| Runtime source | `ThreeCurrentReach.jsx` imports the inherited `city-threshold-overview-master.png` |
| Inherited plate | `1672 x 941`; `2,626,795` bytes; SHA-256 `1D727694FA1DBB4311F9D7974A017D6165E66F10080114E5F81FE3CFD44EFF6D` |
| Quartermaster record | `TD004-ASSET-SC05-PLACEHOLDER` is `DISPOSITIONED - TEMPORARILY RETAINED`, does not satisfy the SC-05 brief, and is not an SC-05 master |
| Image record | inherited plate remains temporary; no runtime import/media byte changed |
| Required SC-05 production panorama | absent and not approved |
| Shell asset contract | final release requires one shell-compliant SC-05 first-person world presentation with provenance and honest runtime identity |

Honest placeholder labeling prevents a false provenance claim, but it does
not satisfy a fixed final-release requirement. The ample unused image budget
also means this cannot be excused as a measured cap overage.

## Variance register

| ID | Classification | Owner | Disposition |
|---|---|---|---|
| `TD004-VAR-001` | **`REQUIRED CORRECTION`** | Quartermaster / `quartermaster` | The final runtime still uses `TD004-ASSET-SC05-PLACEHOLDER`; no approved shell-compliant SC-05 runtime master exists. Return as a major asset defect. Quartermaster must retire the placeholder through an approved, directly imported, provenanced runtime master inside `PBA-TD004-v1`, or issue a formal bounded variance if no eligible asset exists. Image Specialist must then revalidate presentation and the unchanged reveal before fresh Intelligence Tier 5. |

No `ACCEPTED IMPROVEMENT`, `MASTERPLAN UPDATE`, `DEFERRED LIMITATION`, or
`UNAUTHORIZED DIVERGENCE` is recorded. No master plan advances from this
candidate.

## Reveal validation

The exact single Image Specialist reveal was inspected at original
resolution. It was not regenerated or edited.

| Field | Verified value |
|---|---|
| Asset | `Visual Direction/Production Masters/2026-07-26-rp004-three-current-capped-return-reveal/rp004-three-current-capped-return-v1.png` |
| Dimensions | `1672 x 941` |
| Bytes | `2,764,920` |
| SHA-256 | `CE7FDDF3694FBE0912B03172C6A0FE2DC9FD8B42ED2AFBB1857D54A02AD3C83F` |
| Generation count | exactly `1` |
| Provenance | complete neighboring `PROVENANCE.md` and prompt/scene records |
| Runtime status | canonical physical-layout reference only; not imported |

The image depicts three materially distinct paths converging toward one
large capped return without a person, body trace, readable text, UI, portal
claim, route, reward, access, authority, or world response. Its composition
is an acceptable spoiler-safe layout reference. It is below the SC-05 scene
sheet's `3840 x 2160` production minimum and lacks approved crop/mask/effect,
grayscale, artifact, and live runtime evidence, so it remains ineligible as
the runtime master.

The reveal is validated unchanged but acceptance/publication is held until
the complete shell releases. No second generation is authorized.

## Limitations retained

1. Human screen-reader speech, physical switch hardware, native platform
   forced colors, and native text-only `200%` were not exercised.
   Deterministic semantics, emulation, and width-equivalent review passed.
2. English is the only integrated locale.
3. The closed fixture proves in-memory states; it does not claim Martin's
   real browser persistence.
4. CSS has `827` bytes of remaining cap headroom.

These are honest direct-review or localization limitations. None substitutes
for the required SC-05 runtime asset correction.

## Process metrics and recommendation

The 13 predecessor stages used `7,630,146ms` (`127.17m`). Combat Engineer
was longest at `27.69m`; Image Specialist used `22.62m`; Quartermaster used
`15.63m`. The HOLD/return chain correctly stopped an unauthorized shell.
The independent gate also worked: it caught a fixed major-asset omission
despite green functional, presentation-layout, budget, and E2E evidence.

Recommendation: **`TUNE`**, not redesign.

- Keep the eleven sequential roles, versioned Mission shell, dedicated
  commits, return ownership, independent release, closed fixture, one reveal,
  build/E2E non-overlap, and all product guardrails.
- Add a mandatory Quartermaster completion assertion that every shell
  `required` runtime asset has an approved identity, direct import, provenance,
  and exact placeholder-retirement row before `CONTENT COMPLETE`.
- Add an Image gate that rejects `PRESENTATION COMPLETE` when its own record
  still names a required runtime plate as temporary.
- Keep reference-reveal acceptance separate from runtime-master eligibility.

The recommendation is recorded in
`Production Pipeline/PROCESS_CHANGELOG.md`.

## Release disposition

**`REVISE - NOT AS BUILT RELEASED`**

All technical release gates pass, but requirement 25 and the shell's final
asset contract do not. TD-003 remains the accepted released playable
boundary. TD-004 does not advance `PLAYABLE_DEMO.md`, the rail, packet
scoreboard, expedition spine, curriculum/gameplay/visual masters, or any
successor control. No push is permitted from this candidate.

## Exact next action

Resume only the **Quartermaster** at `TD004-VAR-001`. Retire
`TD004-ASSET-SC05-PLACEHOLDER` by selecting and directly integrating one
approved shell-compliant SC-05 first-person runtime master with complete
provenance and honest identity inside `PBA-TD004-v1`; prove the three distinct
current/handling relations and capped apparent return, invariant/no-human
boundary, responsive accessibility, source import, emitted bytes/hashes,
full relevant tests, build, budget, and production exclusion. If no eligible
asset exists, issue a formal bounded variance rather than claiming
`CONTENT COMPLETE`. Preserve the existing single reveal unchanged and
reference-only. Then return through Image Specialist presentation
revalidation before a fresh complete Intelligence Tier 5. Do not begin a new
Commandant shell.

## Protected-work confirmation

- The hidden-lore vault was not opened or inferred from.
- `Art Of No Mans Sky Book Scan.pdf` and `Simplilearn Training Files/` were
  not inspected, altered, staged, moved, deleted, or committed.
- Martin's browser storage, campaign save, cookies, profile, and session were
  not inspected or mutated.
- Only deterministic source/tests, the closed fixture, an isolated production
  preview, and agent-owned headless browser contexts were used.
