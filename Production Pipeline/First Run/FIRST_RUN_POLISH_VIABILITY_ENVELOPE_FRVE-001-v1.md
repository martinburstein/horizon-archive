# First Run Polish Viability Envelope — Unbroken Opening Rail

Envelope ID: `FRVE-001-v1`

Stage: Office of Science Administrator / `office_of_science_administrator`

Work Order: `FRWO-001-v1`

Baseline / continuity lock: `FRPB-001-v1` / `FRCL-001-v1`

Release map / scoreboard: `FRRM-001-v1` / `FRSB-001-v1`

Science source inspected: `5ed294cb61b04baa0d06d68a1d12ef817de3164b`

Released predecessor: `TD-012 / SS-RP012-MEASURED-HORIZON-v1`

Budget authority: `PBA-TD012-v1`

Date: **2026-08-10**

## Disposition

**`POLISH VIABILITY READY / FRVE-001-v1`**

`FRWO-001-v1` is buildable as one bounded continuity/content pass without a
new save version, save field, lesson, evidence channel, host, route, runtime
dependency, or media byte. The obsolete credits junction can leave normal play
while exact City Threshold and later-route authority remain intact.

One state requirement is mandatory: the direct Witness-to-City transition must
durably clear the early-scene `pendingSceneId`. Changing only the visual target
from `ending` to `city-threshold-staging` would leave the previously persisted
pending Witness acknowledgement in Slot 01, so reload could return the player
to Witness. The production shell must make City Threshold staging a persisted
post-Witness campaign frontier while retaining the existing opening schema.

This envelope defines viability and measurable gates. It does not write final
copy, implement a route, change the Work Order, create a Mission shell, or
authorize image or media work.

## Independent inspection basis

Science inspected:

- the complete First Run baseline, continuity lock, release map, scoreboard,
  Work Order, workflow, registry, and Science profile;
- `App.jsx`, `openingFlow.js`, `gameLogic.js`, `sceneTransition.js`,
  `CityThresholdStaging.jsx`, `cityThresholdExercise.js`, `demoTour.js`, the
  Windows launcher, package guide, package scripts, focused tests, and the
  complete campaign E2E source;
- the released TD-012 production, curriculum, persistence, accessibility,
  media, PBA, build, served-identity, and reconciliation controls; and
- the current clean-start, every opening step, early three-scene completion,
  pending acknowledgement, completed-prefix resume, City Threshold staging,
  verified predecessor, later-route, write-free return, and Demo Tour paths.

Fresh planning-stage checks at the inspected source produced:

- focused opening/scene/return/Tour/City tests: `48/48 PASS`;
- production build: `215` modules in `6.65s`; and
- `PBA-TD012-v1` release check: JS `1,660,034 / 1,703,258`, CSS
  `119,599 / 119,672`, modules `215 / 222`, media exact
  `17 / 37,410,731`, zero new media.

These checks establish the starting architecture and budget only. They do not
claim the unbuilt Work Order passes.

## Work Order Science answers

1. **Credits junction:** yes. It is not a predecessor authority and may leave
   normal play if completion and resume both enter City Threshold, City entry
   durably clears the pending Witness marker, the City return-to-credits action
   is removed, and direct/reload/later-return tests pass.
2. **Opening save/markers:** keep opening version `1`, the same three ordinal
   beats, and the same resumable steps. Rename only nonpersisted source/DOM
   markers and update tests; add beat `0/1/2`, legacy, malformed, and activation
   de-duplication fixtures. No player-save migration is required.
3. **Windows entry:** add `PLAY_HORIZON_ARCHIVE.cmd` plus a canonical guide;
   retain the old `.cmd` only as a quoted-path, exit-code-preserving legacy
   wrapper and remove stale product claims from its output and old guide.
4. **Drowned/Witness closure:** change the Drowned shared success, all three
   fallen-assembly verb responses, the Witness shared success, and their E2E
   expectations together. Pending resume already reuses the shared success, so
   that source must be the single non-response completion authority.
5. **Regression proof:** focused state/copy/package tests, related early/City/
   Tour suites, cold full tests, all validators, exact save/evidence comparisons,
   builds/PBA/media/served identity, one clean-start-to-MH-40 E2E, four-layout
   accessibility review, and cleanup are all required.
6. **Budgets:** retain exact `PBA-TD012-v1`, four required layouts, `>=44px`
   controls, forced-color/reduced-motion/non-color parity, fully local runtime,
   exact immutable media, the named timing caps, owned-process cleanup, and
   no mutation of Martin's state.

## Official Microsoft source check and learning disposition

The repository-named `foundry-azure-source-priority` skill is unavailable in
this session. Science therefore followed the required source order directly
and used no third-party source. On 2026-08-10, Science checked:

- [AI-901 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901);
- [Microsoft Foundry documentation](https://learn.microsoft.com/en-us/azure/foundry/);
- [Microsoft Foundry SDKs and endpoints](https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview);
- [Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/overview); and
- [Azure Content Understanding in Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview).

The AI-901 guide still presents the objectives effective April 15, 2026 and
the same two top-level skill groups used by the released mapping. This Work
Order introduces no learning statement and needs no objective, case, answer,
evaluator, threshold, remediation, source, or evidence change. All forty
released owner mappings and the TD-012 evidence contract remain frozen.

## Reused systems and prohibited inventions

### Reused unchanged

- Slot 01 key `horizon-archive-prologue-v1`, opening version `1`, save slot
  `expedition-01`, three-beat prologue shape, bounded name sanitizer, and
  activation-burst de-duplication.
- Contiguous early-scene completion sanitizer, pending acknowledgement,
  exact Meadow return, scene announcement, and deterministic resume focus.
- Separate City Threshold key `horizon-archive-rp001-staging-v1`, its
  fail-closed sanitizer, independent learning evidence, local anchor commit,
  exact verified predecessor, downstream controllers, and write-free returns.
- Demo Tour key `horizon-archive-demo-tour-v1`, allowlist, campaign-byte
  isolation, zero-credit behavior, explicit confirmation, and exact First
  Signal resume target.
- Current learning catalogs, evaluators, evidence allowlists, privacy clearing,
  local/offline behavior, later packet saves, MH-40, and `successor=null`.
- Existing semantic controls, canonical frame, scene focus machinery, polite
  status regions, responsive flow, forced-color rules, and reduced-motion
  rules.

### No new system is required or authorized

The pass adds no route controller, persistence schema, data migration service,
learning utility, package dependency, cloud call, service worker, media file,
or runtime asset. A small pure helper may be extracted only if it makes the
post-Witness resume target and save projection directly testable; it may not
change the Work Order or create a new state authority.

## Fixed state and transition contract

The shell must freeze this normal path:

`FR-00 -> title -> create/resume Slot 01 -> character-name -> prologue[0..2] -> chapter-reveal -> meadow -> ruins -> automaton -> city-threshold-staging`

The later released path remains unchanged:

`city-threshold-staging -> verified RP-001 predecessor -> RP-002 ... -> MH-40`

### Post-Witness completion

After exact Witness learning completion:

- `completed` is the exact contiguous prefix
  `["meadow", "ruins", "automaton"]`;
- `pendingSceneId="automaton"` remains valid until the player activates the
  existing final early-rail continuation;
- resume before that activation restores Witness once, uses the revised
  non-response completion summary, focuses the continuation, and grants no
  replayed evidence; and
- the activation clears pending acknowledgement and enters initial City
  Threshold directly. It does not create the route, a city response, a
  predecessor record, learning evidence, or an extra mandatory action.

### Durable City Threshold frontier

On direct entry, the campaign save projection must synchronously converge to:

- opening step `playing` under opening version `1`;
- the exact completed three-scene prefix;
- no `pendingSceneId`; and
- the existing sanitized early learning/evidence fields only.

`city-threshold-staging` must therefore be included in the existing campaign
save effect (or an equivalently testable atomic projection) as a `playing`
opening step with no pending early scene. It must not be passed into
`createOpeningProgress` as an unknown opening step.

City Threshold retains its own separate save and derives the verified RP-001
predecessor only after the existing Python, CUM-01, safety, and explicit local
anchor commit. Direct arrival alone writes no City Threshold completion.

### Resume order

Resume must remain deterministic in this order:

1. reject malformed or noncontiguous early campaign state fail-closed;
2. honor an exact later City Threshold/Civic Record restore already accepted
   by current authority;
3. restore exact incomplete opening or pending early scene;
4. route an exact completed early prefix with no later record to City
   Threshold staging, including legacy saves that formerly opened credits; and
5. let City Threshold's existing sanitizer choose entry, first incomplete
   learning boundary, or exact completed overview.

No arrival, response, success effect, credits beat, route creation, learning
submission, or predecessor event may replay.

## Opening save and marker decision

No save-version migration is needed or permitted for the preferred build.

- `OPENING_SAVE_VERSION=1`, `PROLOGUE_BEAT_COUNT=3`, resumable step names, and
  `prologueBeat` semantics remain unchanged.
- Prologue labels, body copy, action labels, source variable names, and DOM
  test markers are not persisted. They may become final-purpose names without
  invalidating a save.
- Existing v1 saves at beats `0`, `1`, and `2` resume the same ordinal beat
  using new approved copy; `chapter-reveal` and `playing` resume unchanged.
- Legacy saves without `opening` retain the existing bounded migration to
  `Pilot / playing / beat 2`; malformed slot/name/step data still fails closed.
- Replace `TEMPORARY_PROLOGUE_*` DOM markers with stable final-purpose markers.
  Marker replacement is a test migration, not a player-save migration.

Any proposal to change beat count/order, resumable step names, save key, save
slot, or opening schema is outside this envelope and returns to Science before
implementation.

## Credits-junction removal decision

The obsolete credits junction may be removed safely from normal play if all of
these coupled changes occur:

1. the completed early-rail branch in `continueJourney` enters
   `city-threshold-staging` directly;
2. `resumeGame` maps exact `saved.finished` early prefixes to City Threshold
   staging after the existing later-route restore checks;
3. City Threshold staging persists the cleared pending early-scene marker as
   specified above;
4. `CityThresholdStaging` no longer accepts or renders a return-to-prologue-
   credits action;
5. the obsolete `ending`/credits DOM and copy are unreachable and preferably
   removed rather than retained as dead product content; and
6. E2E proves direct arrival, close/reopen at initial City Threshold, partial
   City restore, completed City restore, later write-free return, and exact
   downstream predecessor derivation.

The credits surface is not the City Threshold predecessor. Its removal changes
no RP-001 evidence, key, checkpoint, continuation, city delta, later save, or
return authority.

## Safe Windows package entry

The compatible package plan is:

- add canonical `PLAY_HORIZON_ARCHIVE.cmd` as the documented entry point;
- keep `PLAY_HORIZON_ARCHIVE_DEMO.cmd` only as a truthful legacy compatibility
  wrapper that calls the canonical script by quoted `%~dp0` path and preserves
  its exit code;
- add canonical `PLAY_HORIZON_ARCHIVE.md` as the player guide;
- reduce `PLAYABLE_DEMO.md` to a truthful compatibility pointer or replace its
  stale slice/freeze material completely; and
- preserve current local build/preview behavior, Node/npm prerequisite checks,
  port `4173`, error propagation, and stop instructions.

The canonical launcher may call the existing internal npm `demo` script with
silent npm lifecycle labeling so the internal legacy script ID is not presented
as product identity. `package.json` need not change and is outside the preferred
patch. The separate player-facing name `Demo Tour` remains exact everywhere.

Focused launcher checks must prove quoted paths work from a directory with
spaces, missing npm fails clearly, dependency/build/preview failures return a
nonzero code, the compatibility wrapper does not recurse, and player-facing
launcher/guide text contains no frozen-demo or playable-slice claim.

## Drowned and Witness response-string closure

Final prose remains Colonel/Quartermaster-owned. The shell must require all of
these source responsibilities to change together:

| Source state | Forbidden current assertion | Required semantic result |
| --- | --- | --- |
| Drowned `scenes.ruins.success` | Terminal success makes route geometry appear | Local work completes; Crown/basin stay unchanged; pre-existing dry outflow/service continuity remains the physical next relation |
| Witness fallen assembly `LOOK AT` | its lens tracks evidence channels | Direct inert physical observation and assembly/Terminal separation; no attention, tracking, or privileged interface |
| Witness fallen assembly `TALK TO` | a damaged speaker returns a pulse and listens | No response; any report belongs to Pilot/Suit observation and directs attention to the separate active Terminal |
| Witness fallen assembly `USE` | its joints reject a command | No coupling or response; the separate grounded Terminal remains the usable interface |
| Witness `scenes.automaton.success` | its lens opens and an old voice speaks | Suit/local evidence completion only; assembly and world remain silent and unchanged |
| Pending Witness resume | reuses `resumedScene.success` | Automatically presents the same revised non-response completion state without replay |

Source and built-output scans must reject the exact obsolete phrases and their
near-equivalent response claims in these owned states. The scan must not reject
legitimate course material about speech recognition or the explicit statement
that the Evidence Terminal has no voice. Interaction and E2E proof, not string
absence alone, must show LOOK/TALK/USE never open the exercise, change evidence,
move the assembly, or create a world effect.

## Learning, evidence, privacy, and Tour firewall

- No learning source, catalog, answer, evaluator, threshold, owner, evidence
  key, attempt rule, remediation route, or readiness rule may change.
- Scene copy, prologue completion, package launch, credits removal, navigation,
  focus, layout, and presentation are zero mastery and zero remediation input.
- Working code, choices, prose, source content, notes, credentials, endpoints,
  payloads, responses, private identity, focus, modality, timing, and tokens
  remain transient and absent from durable saves.
- Existing early evidence sanitizers and all later atomic records remain exact.
- Demo Tour retains its name, explicit no-credit confirmation, allowlisted
  cursor only, zero campaign mutation, zero City/evidence access, and exact
  unfinished-practice resume. Package renaming must not rename or weaken it.
- Full validators and exact learning/evidence object comparisons must prove
  meaning-equivalent state before and after this pass.

## Input, focus, accessibility, and responsive envelope

All affected actions remain native semantic buttons/inputs. Pointer, touch,
Enter, Space, switch-like activation, speech, and screen-reader activation must
converge on the same one-hit intent; modality changes no state or evidence.

### Required focus and announcement landings

| State | Required landing |
| --- | --- |
| create slot / name / each prologue beat / Chapter I reveal | the existing unique page heading; duplicate activation advances at most one state |
| Meadow/Drowned/Witness arrival or resume | existing scene announcement plus first required hotspot or earned continuation according to current focus authority |
| direct initial City Threshold entry | one unique City Threshold heading/status before the first required world action; no focus remains on the removed continuation |
| partial City Threshold restore | restored overlay heading or first exact incomplete control; background remains inert while the overlay is active |
| completed City Threshold or later write-free return | existing exact forward/return action focus; no credits action exists |

Every affected state must have one `main`, one unambiguous heading, one polite
atomic status owner where state changes, unique IDs and accessible names,
visible `3px`-equivalent focus, and no hidden duplicate primary action.

### Layout and access gates

- Test `1920x1080`, `1366x768`, `390x844`, and `768x900` at effective `200%`
  text, plus the existing `320px` lower-bound contracts where retained.
- Required controls are at least `44 x 44 CSS px`; opening primary controls
  may retain their stronger `48px` floor.
- Final prologue copy, status text, and actions must wrap without horizontal
  overflow, clipped required text, overlapping controls, or viewport-locked
  scrolling.
- Meaning survives grayscale and forced colors without color alone. Focus,
  borders, disabled state, and status remain distinguishable.
- Reduced motion removes nonessential transition/cycle motion; no focus or
  state change depends on animation. No forced audio or timer is introduced.
- Honest assistive-technology limitations must be recorded; automated semantic
  checks are not mislabeled as a human screen-reader session.

## Offline, authority, and presentation boundary

Normal play remains local. No Azure account, subscription, sign-in, identity,
credential, resource, endpoint, SDK call, model, agent, upload, request,
response, telemetry, external action, or exam service is introduced.

Package dependency preparation may preserve the current Node/npm prerequisite
behavior, but the game itself adds no runtime dependency or network service.
Player copy may not promise certification, exam success, Microsoft approval,
employment, access, permission, or authority.

Presentation may use existing accepted media only through current imports and
code/configuration treatment. Image generation, editing, replacement,
variation, import, new boards, new media, and cycle reveals remain disabled.
No accepted media byte may change.

## Performance and asset budgets

The fixed non-compounding `PBA-TD012-v1` caps remain:

| Measure | Cap |
| --- | ---: |
| Aggregate JavaScript | `1,703,258` bytes |
| Aggregate CSS | `119,672` bytes |
| Production modules | `222` |
| Runtime media | exact `17 / 37,410,731` bytes |
| New runtime media | `0 files / 0 bytes` |
| Production build | `<=60s` |
| Focused suite | `<=30s` |
| Related suite | `<=60s` |
| Full suite | `<=60s` |
| Complete E2E | `<=180s` |
| Sampled main-thread task | `<=100ms` |

The released candidate has only `73` CSS bytes, `43,224` JS bytes, and `7`
modules of remaining headroom. CSS work is therefore optional and must be
net-neutral or offset by removing obsolete credits rules while still passing
all quality gates. No budget may be met by weakening copy, access, focus,
privacy, learning, save, route, or presentation requirements.

No new blocking load, layout shift, duplicate transition, horizontal escape,
runtime request, warning/error, or preview resource is allowed. All emitted
chunks and assets count.

## Validation ladder

Mission must make this exact ladder executable; production and Intelligence
must report fresh results at their gates.

1. **Authority and patch integrity:** exact Work Order/envelope/shell/source;
   `git diff --check`; protected-path exclusion; no hidden lore, browser/profile,
   real save, media, image, or reveal operation.
2. **Focused contract tests:** launcher/wrapper/guide; opening sanitizer and
   beats `0/1/2`; activation de-duplication; completed-prefix routing; cleared
   pending marker; Drowned/Witness owned states; City direct entry, partial and
   complete restore; removed credits return; Demo Tour isolation; focus and
   obsolete-marker scans.
3. **Related regression:** current opening, game logic, scene transition,
   scene return, workload resume, evidence packet, Demo Tour, terminal focus,
   City Threshold, Civic Record entry/return, and malformed-state suites.
4. **Learning/privacy parity:** cold full product suite; all curriculum and
   readiness validators; exact before/after learning/evidence/save allowlists;
   no cross-credit or private persistence.
5. **Build/budget/identity:** production and TD-012 fixture builds; exact PBA;
   media hash inventory; root/deep/JS/CSS HTTP preflight and disk identity;
   no new dependency or runtime request.
6. **One complete non-overlapping E2E:** canonical launcher-equivalent clean
   start through MH-40, including final-purpose opening, wrong-answer/retry,
   pending Witness reload, direct City entry, reload before City completion,
   exact downstream predecessor, later route, equal ending outcomes as
   proportionate fixtures, no obsolete credits/response/route-creation copy,
   and no runtime error. The current E2E's old stop at `CREDITS_REACHED` must be
   replaced, not counted as whole-game proof.
7. **Live affected states:** desktop, narrow, effective `200%`, keyboard,
   pointer/touch-equivalent, forced color, grayscale, reduced motion, focus,
   target size, announcements, longest final copy, containment, zero horizontal
   overflow, and runtime request/error review.
8. **Cleanup:** restore or remove owned QA artifacts according to shell; close
   owned preview/browser contexts; clear owned ports including `4173`, `4184`,
   and the selected isolated E2E port; leave Martin's state untouched.
9. **Release identity:** dedicated stage commits, Mission/Combat/Intelligence
   push gates, exact candidate ancestry, and `HEAD == origin/main` at each push.

## Risks and controls

| Risk | Required control |
| --- | --- |
| Direct mode replacement leaves pending Witness persisted | Persist City staging as `playing` with `pendingSceneId=null`; reload test immediately after arrival |
| Old complete saves strand at removed credits | Map exact completed early prefix to City staging; fixture old clean and pending saves |
| City entry accidentally mints RP-001 predecessor | Keep separate City save and exact anchor commit; compare bytes before/after arrival |
| Wrapper keeps stale product identity visible | New canonical entry/guide; legacy file is truthful forwarding only; no stale terminal output |
| Copy cleanup misses a resume-visible response | Change shared scene success plus all fallen-object verbs; pending-resume E2E and scoped source/bundle scans |
| Global scan falsely rejects speech curriculum | Scope forbidden-response scans to owned Drowned/Witness states and exact obsolete phrases |
| Final prose becomes new lore or Machine speech | Colonel meaning and voice ownership remain fixed; Quartermaster owns exact copy |
| Credits CSS removal or new focus rule exceeds 73-byte headroom | Prefer existing rules; remove obsolete styles; exact aggregate PBA at each production gate |
| Package rename weakens Demo Tour | Exact Tour storage/campaign byte comparison and player-facing name assertions |
| Existing full E2E still ends at old credits | Replace that stop with direct City and MH-40 continuation; one complete non-overlapping run only |

## Permitted production surface

Mission may permit only:

- `PLAY_HORIZON_ARCHIVE.cmd`;
- legacy wrapper `PLAY_HORIZON_ARCHIVE_DEMO.cmd`;
- `PLAY_HORIZON_ARCHIVE.md` and truthful compatibility
  `PLAYABLE_DEMO.md`;
- `horizon-archive-game/src/App.jsx`;
- `horizon-archive-game/src/CityThresholdStaging.jsx`;
- `horizon-archive-game/src/styles.css` only for a proven affected-state need
  within PBA;
- focused opening/scene/Tour/City/package tests and at most one small pure
  transition/save-projection helper with direct tests;
- `playtest/e2e-playthrough.mjs`; and
- First Run stage reports and synchronized controls.

`openingFlow.js` is regression-only under the preferred plan because no opening
schema change is needed. `package.json`, media, learning catalogs/evaluators,
later controllers, later save schemas, canonical story authorities, and
protected user paths are outside the production patch. A demonstrated need to
change one returns to Science/Mission as a variance before editing.

## Flexible implementation choices

Mission may choose exact final copy, source symbol names, stable DOM marker
names, whether the obsolete credits component is deleted or made structurally
unreachable, and whether the post-Witness save projection is expressed inline
or through one pure helper. These choices must satisfy the fixed semantic,
state, focus, test, and budget contracts above.

## Hard stops and variance routing

Return to the earliest owner before any:

- new or reordered prologue beat, save key/version/field, host, exercise,
  lesson, evidence rule, route controller, mandatory activation, later state,
  or package dependency;
- Machine/Builder speech, route creation, world response, identity, reward,
  access, permission, authority, exam promise, successor, RP-013, or
  post-ending content;
- physical-host parity promotion for Fracture Nursery, Drowned hosts 05-15,
  Witness, or later missing hosts;
- media-byte change or image generation/edit/replacement/variation/import,
  board, reveal, or hidden-lore access;
- use of Martin's browser/profile/save or protected paths; or
- PBA overage, unproven rollback, replay, private leakage, Tour mutation,
  accessibility regression, or inability to complete the direct City/MH-40
  E2E.

Any such finding is `REVISE` or `HOLD`, never a silent shell expansion.

## Mission handoff

Mission Captain must reconcile `FRPB-001-v1`, `FRCL-001-v1`, `FRRM-001-v1`,
`FRSB-001-v1`, `FRWO-001-v1`, and this `FRVE-001-v1` into exactly one
versioned First Run shell for `FR-00` through initial `FR-05`.

The shell must freeze the v1 opening-save preservation, durable cleared-pending
City frontier, direct credits-free transition, safe canonical launcher plus
legacy wrapper, complete Drowned/Witness response closure, unchanged learning/
privacy/Tour/later-route/MH-40 contracts, deterministic affected-state focus,
four layouts and assistive modes, exact PBA/media, one full clean-start-to-MH-40
E2E, cleanup, rollback, and the permitted-file boundary above.

Issue `FIRST RUN SHELL READY`, `REVISE`, or `HOLD`. Do not implement, write
final copy, deploy a production role, change media, or expand host parity in
the Mission stage.
