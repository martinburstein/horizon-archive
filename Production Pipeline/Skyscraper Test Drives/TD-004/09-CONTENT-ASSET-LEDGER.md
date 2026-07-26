# TD-004 Content and Asset Ledger

## Document control

| Field | Value |
|---|---|
| Stage | Quartermaster |
| Agent ID | `quartermaster` |
| Test drive | `TD-004` |
| Shell | `SS-RP004-THREE-CURRENT-v1` |
| Campaign address | `RP-004 / SC-05 / TR-00-TR-40` |
| Starting build | Combat Engineer correction commit `4a34454f17ec133e768c8c104b396da6e6491700` |
| Functional authority | `08-FUNCTIONAL-BUILD-REPORT.md`, `FUNCTIONALLY COMPLETE — CORRECTED (TD004-VAR-002)` |
| Content candidate | This dedicated Quartermaster commit; resolve its immutable identity from Git history |
| Production budget | `PBA-TD004-v1` |
| Disposition | **`CONTENT COMPLETE — REVALIDATED`** |

## TD004-VAR-002 Quartermaster revalidation

Quartermaster resumed strictly from Combat Engineer correction commit
`4a34454f17ec133e768c8c104b396da6e6491700`. No player-facing content,
asset byte, provenance record, CSS/layout rule, or reveal changed in that
correction. The only production change was the bounded state-to-scene
resolver and its exact identity markers.

Every retired content and asset placeholder remains correctly retired:

- exact `CM-50 / cm50_route / SC-04` uses the accepted City Threshold
  overview with the unchanged Calibration Margin alternative text;
- only accepted `SC-05` states from `tr00_orient` onward use the registered
  Three-Current master and its SC-05 alternative text;
- malformed state combinations fail closed to the SC-04 presentation;
- invalid and duplicate pre-route intents remain at CM-50 / SC-04;
- interrupted unsaved arrival reloads to CM-50 / SC-04; and
- write-free `RETURN TO CALIBRATION MARGIN` restores CM-50 / SC-04.

Comparison against Intelligence return commit
`dfc8544e5f7741b93e49e6d01a567ba68f6939f1` confirms that the complete set
of player-facing strings in `ThreeCurrentReach.jsx` is unchanged; only the
accepted SC-04 import, asset selection, and `SC-04`/`SC-05` resolver
identities were added.
No raw placeholder token, temporary-placeholder label, fixture identity, or
answer-bearing content appears in production source or output.

### Fresh revalidation evidence

| Gate | Result |
|---|---|
| Focused TD-004 plus connected TD-003 | `22/22 PASS` |
| Related TD-003/TD-004 | `136/136 PASS` |
| Full game suite | `806/806 PASS` |
| Readiness validators | `15/15 PASS` |
| Production build | PASS; `183` modules; Vite `14.22s`; wall `16.636s` |
| JavaScript | `index-CynBBXnS.js`; `1,247,724` bytes; SHA-256 `875A2E9FDD9F3F38BCE3B2CD29556678AA3D6F638D61923B30D2FE9917608409` |
| CSS | `index-DVnUbAwl.css`; `85,151` bytes; SHA-256 `9222AAE71766D4E9DC7ACFA8D2FEB16F958D5D1CDC36C158982075C602D4F985` |
| Runtime media | `21,536,123` bytes total; `2,163,752` new image-only bytes |
| Budget | `PBA-TD004-v1 PASS`; JS headroom `7,425`, CSS headroom `638`, module headroom `4`, media headroom `2,030,552` |
| Served identity | isolated `127.0.0.1:5184` root, JS, CSS, accepted SC-04 master, and registered SC-05 master HTTP `200`; every served byte/hash identical to `dist`; owned preview stopped; port clear |
| Production exclusion | TD-004 fixture marker/path/port and source-map URL absent from `dist` |
| Copy integrity | authored string set unchanged; all `TD004-COPY-*` entries remain retired |
| Asset integrity | SC-04 SHA-256 `1D727694...EFF6D`; SC-05 SHA-256 `B6E0F34A...9F63F`; reveal SHA-256 `CE7FDDF3...C83F` |

The SC-05 master remains `3840 x 2160`, `2,163,752` bytes, directly
runtime-integrated only for accepted SC-05 states, and fully governed by its
unchanged provenance. The sole reveal remains `1672 x 941`, `2,764,920`
bytes, exactly one generation, byte-for-byte unchanged, and reference-only.
No image was generated, edited, replaced, or reclassified.

## TD004-VAR-001 Quartermaster correction

This section supersedes the original placeholder-retention disposition below.
Intelligence returned the candidate because a required SC-05 runtime master
was absent. Quartermaster has now retired
`TD004-ASSET-SC05-PLACEHOLDER` and directly integrated:

- source import:
  `Visual Direction/Production Masters/2026-07-26-rp004-three-current-runtime-master/sc05-three-current-panorama-runtime-master-v1.webp`;
- dimensions: `3840 x 2160`;
- bytes: `2,163,752`;
- SHA-256:
  `B6E0F34A917732DBB7B66B65968198CFC068BC650AC00CD8A01F095A6109F63F`;
- emitted file:
  `sc05-three-current-panorama-runtime-master-v1-VoJlZWmR.webp`, with
  identical bytes and hash; and
- neighboring complete provenance:
  `Visual Direction/Production Masters/2026-07-26-rp004-three-current-runtime-master/PROVENANCE.md`.

The master is a deterministic non-generative derivative of the exact existing
single reveal. The reveal remains unchanged, reference-only, `1672 x 941`,
`2,764,920` bytes, and SHA-256
`CE7FDDF3694FBE0912B03172C6A0FE2DC9FD8B42ED2AFBB1857D54A02AD3C83F`.
No second image was generated. The derivative adds no native 4K detail claim;
it uses disclosed Lanczos resampling, a one-pixel lower-edge trim, and q100
WebP encoding to provide a stable runtime/crop raster.

Original-size and grayscale inspection retain three independent structural
readings without color dependence: left particulate flow through porous
handling, center cyclic/tensioned braided handling, and right
conducted-heat/jointed handling. All remain traceable toward the same visibly
capped, non-traversable apparent return. No protagonist, hands, body, shadow,
reflection, ship, inhabitant, readable text, UI, portal, answer lane, route,
reward, access, identity, permission, authority, or world response is present.
One direct import supplies the same invariant image for every SC-05 state.

### Fresh correction evidence

| Gate | Result |
|---|---|
| TD-004 connected source/fixture/UI suite | `33/33 PASS` |
| Full game suite | `805/805 PASS` |
| Readiness validators | `15/15 PASS` |
| Production build | PASS; `183` modules; Vite `16.52s`; wall `18.979s` |
| JavaScript | `index-C8qIMjxS.js`; `1,247,036` bytes; SHA-256 `ABAAF0A8DA6B11AB55A862917622F9AE0EEB5938E16041B5722D12A3C55435C4` |
| CSS | `index-BxET_qxJ.css`; `84,962` bytes; SHA-256 `DF87C5E5A91310463D9AB522192B0E44106E2C2911B986F360B477F744EBF871` |
| New runtime media | `2,163,752` bytes of `4,194,304`; PASS |
| Aggregate runtime media | `21,536,123` bytes of `23,566,675`; PASS |
| Budget | `PBA-TD004-v1 PASS`; JS headroom `8,113`, CSS headroom `827`, module headroom `4`, media headroom `2,030,552` |
| Served identity | isolated `127.0.0.1:5184` root, JS, CSS, and SC-05 master HTTP `200`; all served bytes/hashes identical to `dist`; owned preview stopped and port clear |
| Fixture exclusion | closed TD-004 fixture path/port/marker and source-map URL remain absent from production output |
| Source reveal integrity | exact source hash unchanged; generation count remains exactly `1` |

Human assistive-technology and physical-switch validation remain unclaimed.
Image Specialist must now revalidate presentation, registered crop behavior,
alternative text, and the unchanged reveal before fresh Intelligence Tier 5.

## Combat Engineer build confirmed

The synchronized functional build at
`95fb6402c281ec1294bdb76582de04e80f3f3cb9` was confirmed before content
work. `HEAD` and `origin/main` matched. The only untracked paths were the two
protected user paths named by the shell, and neither was inspected or
altered.

This pass preserves without modification:

- the `TD004-RTA-001` route, active-group graph, owners, actions, semantic
  intents, seven modalities, one-hit tokens, focus destinations, and
  recovery order;
- the three equal physical relations, separate apparent-return observation,
  purpose-unknown boundary, safe returns, and destinationless hard stop;
- all Python and AI-901 evaluators, exact checks, answer order, evidence
  identities, thresholds, independent scoring, and blank-retry behavior;
- the dedicated storage key and version, ten/four/eight/ten record shape,
  sanitizer, atomic replacement, strict read-back, rollback, predecessor-byte
  check, and no-replay restore;
- Demo Tour isolation, local/offline operation, privacy, no authority, no exam
  guarantee, no external action, and invariant-world behavior;
- the exact closed fixture, normal route, CSS, layout, runtime assets, world
  state, media, audio, and hard stop; and
- every hidden-lore and protected-user-work boundary.

No state graph, controller action, intent, evaluator, record field, save
mechanism, route, focus target, stylesheet, asset, world behavior, fixture,
or performance cap changed.

## Content and assets integrated

The surface now follows the Creative Lock's owner-separated language
envelope:

- **Scene and Pilot observation:** headings and instructions name only the
  visible carrier/handling relations, their equal status, the capped apparent
  return, and the discipline of leaving purpose, category, and destination
  unknown.
- **Builder work and course practice:** the Python chain clearly distinguishes
  Builder-origin unfinished work from course-owned sanitized replicas. AI
  workload cases are numbered for the current form and use human-readable
  requested-workload and deciding-signal labels.
- **System status:** every ready boundary now has consequence-accurate copy.
  Status describes local expedition state, blankness, first-incomplete
  recovery, record integrity, or no replay; it never describes city judgment.
- **Repair:** raw evaluator identifiers are translated to answer-free,
  player-readable boundary statements. The response-cleared and fresh-blank
  rules remain explicit.
- **Review and save:** four physical observations, Python loop evidence, AI
  workload evidence, and the local source/authority boundary remain separate.
  The review is not a score, rank, badge, or readiness verdict.
- **Restore and return:** strict local integrity is distinguished from truth,
  access, or approval. Known returns remain write-free and replay-free. The
  optional physical continuation remains destinationless and non-routing.
- **Privacy and authority:** the persistent footer states what the local
  record retains and excludes, and denies live service work, cloud sync,
  external action, access, authority, exam standing/guarantee, and world
  response.

This pass introduces no new Microsoft Foundry, Azure, Content Understanding,
or AI-901 product claim. It renders only the already-frozen RP-004 curriculum
contract, so no new live-source assertion was made.

## Placeholder-by-placeholder disposition

| Declared placeholder | Production disposition | Runtime location | Status |
|---|---|---|---|
| `TD004-COPY-CM50-ROUTE` | `Depart from the verified expedition note`; one expedition-marked survey and two known, independent, write-free returns | CM-50 heading, introduction, status, return boundary | RETIRED |
| `TD004-COPY-TR00-ORIENT` | `Orient within Three-Current Reach`; names three distinct handling systems and records zero evidence on orientation | TR-00 heading, introduction, status | RETIRED |
| `TD004-COPY-TR10-RELATIONS` | Three concise physical relation statements, explicit equal-peer order freedom, and `Available`/`Recorded - no second event` state | TR-10 heading, rows, actions, status | RETIRED |
| `TD004-COPY-TR20-COMMON` | `Record convergence without assigning purpose`; capped apparent return remains non-route with purpose/category/destination unknown | TR-20 heading, body, rejection, status | RETIRED |
| `TD004-COPY-PYTHON` | Primary, closed-note retrieval, and fresh transfer use complete course-owned, sanitized, local-only instructions; raw field/option/check IDs are replaced by authored labels | TR-30 Python forms, help, status, repair | RETIRED |
| `TD004-COPY-AI901` | Neutral case numbering, `Requested AI workload`, `Deciding signal`, authored option labels, and per-case/dimension answer-free repair | TR-30 workload forms, status, repair | RETIRED |
| `TD004-COPY-EXPLANATIONS` | Complete modality and agentic boundary questions/options, each explicitly separate and local; option values remain mechanically unchanged | TR-30 explanation groups | RETIRED |
| `TD004-COPY-REVIEW` | `Confirm each obligation stands alone`; four owner-separated rows with no aggregate verdict or cross-credit | TR-30 review/provenance | RETIRED |
| `TD004-COPY-SAVE` | Local/offline eligibility, deterministic failure consequence, last-verified preservation, and strict read-back integrity remain explicit and non-ceremonial | provenance, save recovery, TR-40 status | RETIRED |
| `TD004-COPY-TR40` | `Verify the restored expedition note`; exact no-replay integrity, expedition-owned note, known returns, and optional destinationless continuation | TR-40 heading, body, note, status, return boundary | RETIRED |
| `TD004-COPY-NEGATIVE-AUTHORITY` | Browser/device-local allowlist and explicit exclusions for private work, cloud sync, live services, action, access, authority, exam claims, and world response | persistent footer | RETIRED |
| `TD004-ASSET-SC05-PLACEHOLDER` | Retired after `TD004-VAR-001`; inherited City Threshold overview is no longer imported by `ThreeCurrentReach.jsx`. Replaced by the approved, directly imported, provenanced SC-05 runtime master registered above | world-image import replaced | **RETIRED — CORRECTED** |
| `TD004-STYLE-STRUCTURAL` | No Quartermaster CSS change or presentation-completion claim; final hierarchy, exact-viewport polish, and reveal treatment remain with the Image Specialist | presentation stage | ASSIGNED DOWNSTREAM |

All declared `TD004-COPY-*` structural placeholders are retired. The durable
record tokens, evaluator values, and case IDs remain internally exact where
the controller requires them, but generic underscore/camel-case conversion
and raw failed-check display are no longer player-facing.

## Copy and source mapping

| Content family | Meaning authority | Runtime source | Status |
|---|---|---|---|
| Route, physical relations, apparent return, restore, and hard stop | Shell; Creative Treatment; Experience Blueprint; SC-05 scene sheet | `ThreeCurrentReach.jsx`; controller status map | PRODUCTION |
| Python primary/retrieval/transfer | RP-004 `PY-011` contract and fixed public form shape | authored field/option/repair maps; unchanged evaluator values | PRODUCTION / answer-free |
| AI workload primary/retrieval/transfer | RP-004 `RP004-WORKLOAD-01`; AI-901 objective `AI901-D1-O4` | authored case/dimension/option/repair maps; unchanged evaluator values | PRODUCTION / answer-free |
| Modality and agentic explanations | frozen RP-004 explanation contract | authored option labels; unchanged underlying values | PRODUCTION / independently scored |
| Review/provenance | shell conjunctive firewall; Creative Lock owner envelope | controller `reviewRows`; renderer review list | PRODUCTION |
| Local save/privacy/authority | shell persistence and authority contracts; RP-004 evidence/authority contracts | controller statuses; renderer footer and return boundary | PRODUCTION |
| Surface mystery and world language | `HORIZON_ARCHIVE_SURFACE_LORE.md`; SC-05 scene contract | headings, introductions, relation and note copy | PRODUCTION / spoiler-safe |
| World imagery | SC-04 predecessor authority; SC-05 scene contract and photorealistic charter | exact resolver selects accepted City Threshold overview at CM-50/fail-closed return states and registered Three-Current master only from accepted TR-00 onward | PRODUCTION / STATE-EXACT |

## Player-facing content inventory

### Observation and mystery

- Arrival presents the greater reach before asking for one orientation action.
- The three physical observations are equal and complete in text without
  color, sound, position, or motion as sole meaning.
- The common return is called apparent, visibly capped, and unassigned. No
  copy calls it a portal, destination, route, invitation, refusal, failure,
  native category, AI workload, or Machine relation.
- Recording a physical observation remains separate from course evidence.

### Learning

- Each Python field and choice now has ordinary human-readable language.
- The Python repair list translates all eight checks and all five retrieval
  boundaries without disclosing expected syntax or the selected answer.
- Workload cases display `Case 1` and so on rather than evaluator IDs, while
  the internal case keys remain unchanged for scoring and focus.
- All six workload families and every deciding-signal candidate have authored
  display labels. Candidate order and underlying values are unchanged.
- Workload misses identify only the form, case number, and incomplete
  dimension. The correct choice remains undisclosed.
- The modality and agentic explanations remain distinct evidence records.

### Review, save, and restore

- The review exposes four physical observations, Python loop evidence, AI
  workload evidence, and the local source/authority boundary as independent
  obligations.
- Save language names local eligibility and strict read-back, never upload,
  authentication, city acceptance, reward, access, or unlock.
- Failure says only that the attempted replacement did not become verified
  and that the last verified note or absence remains unchanged.
- Restore verifies the expedition record, not a theory or destination, and
  replays nothing.

## Visual and audio asset inventory

| Asset | Provenance | Runtime status | Identity | Approval |
|---|---|---|---|---|
| City Threshold overview | `Visual Direction/Production Masters/2026-07-15-photorealistic-demo/city-threshold-overview-master.png`; sibling `PROVENANCE.md` | direct invariant SC-04 predecessor/fail-closed/return import; never used as SC-05 | `1672 x 941`; `2,626,795` bytes; SHA-256 `1D727694FA1DBB4311F9D7974A017D6165E66F10080114E5F81FE3CFD44EFF6D` | approved inherited runtime asset in its original scope |
| SC-05 production panorama | `Visual Direction/Production Masters/2026-07-26-rp004-three-current-runtime-master/sc05-three-current-panorama-runtime-master-v1.webp`; sibling `PROVENANCE.md` | direct invariant SC-05 runtime import | `3840 x 2160`; `2,163,752` bytes; SHA-256 `B6E0F34A917732DBB7B66B65968198CFC068BC650AC00CD8A01F095A6109F63F` | **approved runtime master; deterministic derivative with no native-4K-detail claim** |
| Interface typography | existing application stack | reused unchanged | `0` new font bytes | approved reuse |
| New icons/symbols | none | absent | `0` bytes | required absence |
| New audio | none | absent | `0` bytes | required silence |
| TD-004 reveal | `Visual Direction/Production Masters/2026-07-26-rp004-three-current-capped-return-reveal/rp004-three-current-capped-return-v1.png`; sibling `PROVENANCE.md` | unchanged canonical physical-layout reference only; not imported | `1672 x 941`; `2,764,920` bytes; SHA-256 `CE7FDDF3694FBE0912B03172C6A0FE2DC9FD8B42ED2AFBB1857D54A02AD3C83F`; exactly one generation | revalidation required; no second image |

No external, licensed, untraceable, hidden-lore-derived, concept-only, or
newly generated asset entered runtime. The inherited plate was not edited,
recropped, recompressed, renamed, or reclassified.

## Source, spoiler, answer, and privacy checks

| Check | Result |
|---|---|
| Surface canon | PASS: only directly visible physical relations, Pilot labels, local record state, and unresolved questions are stated |
| Later-state spoiler | PASS: no later packet, destination, successor, reward, or post-ending content was introduced |
| Expected-answer leakage | PASS: no answer marker, expected value, selected value, learner source, private reasoning, or source content is rendered |
| Candidate neutrality | PASS: every existing candidate receives production language; order, value, and evaluator truth are unchanged |
| Ownership | PASS: Scene/Pilot, Builder-work/course, Teacher, and System responsibilities remain distinct |
| Privacy | PASS: durable allowlist and excluded code/selections/reasoning/account/source material are stated accurately |
| Authority | PASS: no credential, endpoint, live read/control, service authority, external action, exam standing/guarantee, or world response |
| Hidden lore | PASS: hidden-lore vault remained unopened |
| Protected user work | PASS: protected PDF and training directory remained uninspected and untouched |

## Accessibility and responsive review

| Check | Result |
|---|---|
| Focused headings | PASS: every group retains one focusable `h1`; authored headings replace structural phase language |
| Status | PASS: one existing polite atomic live region; stable IDs and private-free messages retained |
| Persistent labels | PASS: Python, retrieval, workload, modality, and agentic controls have complete visible labels |
| Assistive names | PASS: raw camel-case/underscore labels are removed; action identities remain exact and unique |
| Repair association | PASS: named incomplete boundaries remain in the active repair section; no answer is supplied |
| Non-sensory meaning | PASS: relation, available/recorded, local, no-replay, purpose-unknown, and return boundaries are complete in text |
| Source order and focus | PASS: no DOM order, focus destination, heading ID, target ID, or field association changed |
| Targets | PASS by unchanged style contract: interactive controls remain at least `44px` |
| Narrow/effective 200% | PASS by unchanged reflow contract and source checks; copy uses wrapping blocks and no fixed-width or nowrap rule |
| Forced colors/reduced motion | PASS by unchanged semantics and styles; no color-, motion-, or sound-only content added |
| Localization readiness | PASS WITH LIMITATION: complete English sentences and explicit nouns; no integrated non-English locale |

This stage does not claim human screen-reader speech, physical switch
hardware, native platform forced colors, or native text-only 200% review.
Those remain independent release evidence.

## Optimization, build, and served evidence

| Measure | Quartermaster candidate | Cap | Result |
|---|---:|---:|---|
| Production modules | `183` | `<=187` | PASS |
| Raw JavaScript | `1,247,724` bytes | `<=1,255,149` | PASS, `7,425` bytes headroom |
| JavaScript identity | `index-CynBBXnS.js`; SHA-256 `875A2E9FDD9F3F38BCE3B2CD29556678AA3D6F638D61923B30D2FE9917608409` | exact candidate | RECORDED |
| Raw CSS | `85,151` bytes | `<=85,789` | PASS, `638` bytes headroom |
| CSS identity | `index-DVnUbAwl.css`; SHA-256 `9222AAE71766D4E9DC7ACFA8D2FEB16F958D5D1CDC36C158982075C602D4F985` | exact functional build | BYTE-STABLE |
| Runtime media | `21,536,123` bytes | `<=23,566,675` | PASS, `2,030,552` bytes headroom |
| New runtime media | `2,163,752` bytes | `<=4,194,304` | PASS |
| Production build | `183` modules in `14.22s` | `<=60s` | PASS |
| Isolated preview | owned `127.0.0.1:5184`; root/JS/CSS/SC-04/SC-05 HTTP `200`; every served byte/hash matched `dist`; owned PID stopped; port clear | exact candidate | PASS |

JavaScript headroom is now limited. The Image Specialist should prefer
byte-neutral styling and reference-only reveal work. Any runtime SC-05 asset
proposal must independently pass the `PBA-TD004-v1` image, aggregate-media,
resolution, provenance, and quality gates; reference status alone is not
runtime approval.

## Functional regression evidence

| Gate | Result |
|---|---|
| Focused TD-004 and connected TD-003 tests | PASS, `22/22` |
| Related TD-003/TD-004 tests | PASS, `136/136` |
| Full game suite | PASS, `806/806` |
| Readiness validator self-tests | PASS, `15/15`: `CUM-01`, `RP-002` through `RP-012`, `SIM-01` through `SIM-03` |
| Production build and budget | PASS under every fixed cap |
| Production served identity | PASS on owned isolated preview; exact JS/CSS byte lengths |
| Copy placeholder scan | PASS: no generic underscore option conversion, raw scenario legend, or raw failed-ID presentation remains |
| Mojibake scan in changed runtime copy | PASS |
| Patch integrity | PASS, `git diff --check` |

## Remaining polish opportunities

1. Revalidate the corrected SC-04/SC-05 scene boundary at exact viewports
   without changing either master, its provenance, or responsive registration.
2. Preserve presentation hierarchy without changing source order, content,
   focus, targets, owner boundaries, or the one-group replacement model.
3. Review the longest course forms at the exact desktop, narrow, and
   effective-200% gates; trim only if meaning and answer neutrality remain
   complete.
4. Revalidate the existing sole reveal byte-for-byte unchanged and
   reference-only; generate no second image.

## Variances and limitations

### Variances

`TD004-VAR-001` is resolved by fresh Intelligence. `TD004-VAR-002` is
implemented by Combat Engineer and now **content/asset revalidated** by
Quartermaster: exact SC-04 presentation remains at CM-50/fail-closed/return
states, and SC-05 begins only from accepted TR-00. It returns to Image
Specialist for presentation revalidation before fresh Intelligence
classification. No shell, content meaning, mechanic, evidence, save, focus,
layout, asset, provenance, reveal, world, or budget variance was introduced.

### Honest limitations

1. The SC-05 runtime master is resampled from the exact `1672 x 941` reveal;
   it supports a `3840 x 2160` runtime raster and registered crops but does
   not contain or claim native 4K source detail.
2. Exact-viewport revalidation of the corrected runtime master remains Image
   Specialist work; the existing reveal remains unchanged and reference-only.
3. Browser/device persistence was tested through closed adapters; Martin's
   actual browser storage and campaign save remained untouched.
4. Human assistive-technology and physical-switch validation remain
   unclaimed.

## Files changed

- `horizon-archive-game/src/ThreeCurrentReach.jsx`
- `horizon-archive-game/src/ThreeCurrentReachNormal.js`
- `horizon-archive-game/test/threeCurrentReachUi.test.js`
- `horizon-archive-game/test/threeCurrentReachNormal.test.js`
- this ledger
- `TD-004/STAGE-METRICS.json`
- `TD-004/08-FUNCTIONAL-BUILD-REPORT.md` only to resolve the preceding
  Combat Engineer commit identity

## Disposition

**`CONTENT COMPLETE — REVALIDATED`**

All player-facing structural copy placeholders remain retired. The asset
placeholder remains retired through the exact, directly imported, provenanced
SC-05 runtime master. The corrected scene resolver now preserves the accepted
SC-04 predecessor and fail-closed states without changing either asset or any
copy. The candidate remains within budget, pending Image Specialist and fresh
Intelligence revalidation.

## Exact Image Specialist handoff

- **Stage / agent:** Image Specialist / `image_specialist`
- **Starting commit:** the dedicated Quartermaster commit containing this
  ledger; resolve its immutable hash from Git history
- **Shell:** `SS-RP004-THREE-CURRENT-v1`
- **Exact build:** corrected normal `TD004-RTA-001` through no-replay
  `TR-40`, with `806/806`, all `15/15` readiness self-tests, `183` modules,
  and the candidate identities recorded in the revalidation section
- **Presentation objective:** revalidate `TD004-STYLE-STRUCTURAL` plus exact
  SC-04-at-CM-50 / SC-05-from-TR-00 identity at wide, narrow,
  effective-200%, forced-color, and reduced-motion states
- **Asset objective:** revalidate the corrected direct SC-05 runtime master,
  its three grayscale-independent structural relations, capped apparent
  return, registered wide/narrow crops, alternative text, invariant/no-human
  boundary, and exact emitted/served identity
- **Reveal objective:** revalidate the existing sole reveal unchanged and
  reference-only; do not generate, edit, replace, or publish a second image
- **Immutable content:** all authored headings, introductions, relation
  statements, field/option labels, answer-free repair statements, review
  rows, known-return explanation, local/privacy footer, and internal
  evaluator values/order
- **Do not change:** state/controller/intents/modalities/evaluators/evidence,
  key/version/schema/atomicity, TD-003 byte check, route/focus/source order,
  fixture identity, world response, safe returns, purpose unknown,
  destinationless hard stop, no authority/exam/external-action limits, hidden
  lore, protected user work, or Martin storage
- **Budget warning:** JavaScript headroom `7,425` bytes; CSS headroom `638`
  bytes; aggregate runtime-media headroom `2,030,552` bytes; production build
  cap `60s`
- **Validation:** direct visual review at required viewports plus focused
  regressions, full suite/build if runtime source changes, budget/identity,
  provenance, answer/spoiler, fixture-exclusion, patch, and protected-file
  checks
- **Required output:** updated `TD-004/10-POLISH-REVIEW.md`, exact unchanged
  reveal-package revalidation, and `PRESENTATION COMPLETE — REVALIDATED`,
  `REVISE`, or `HOLD`
- **Next recipient:** Intelligence Officer / `intelligence_officer`

If honest presentation completion requires changing mechanics, content
meaning, evidence, persistence, route, focus, accessibility, world behavior,
or the hard stop, record a variance and return to the earliest owner rather
than changing the accepted build.
