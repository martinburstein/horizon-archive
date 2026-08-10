# First Run Player Experience Blueprint - Unbroken Opening Rail

Blueprint ID: `FRPX-001-v1`

Stage / owner: Tactical Operations Specialist / `tactical_operations_specialist`

Shell / treatment: `FRSH-001-v1` / `FRDT-001-v1`

Work Order / viability: `FRWO-001-v1` / `FRVE-001-v1`

Planning authorities: `FRPB-001-v1`, `FRCL-001-v1`, `FRRM-001-v1`,
`FRSB-001-v1`

Source commit inspected: `35b43f5a30f588efa99783eea961158d0a026a19`

Released predecessor: `TD-012 / SS-RP012-MEASURED-HORIZON-v1`

Date: **2026-08-10**

## Disposition

**`PLAYER EXPERIENCE READY / FRPX-001-v1`**

The shell and Directorial Treatment are compatible. The covered journey can be
implemented as one uninterrupted, recoverable path using the existing v1
opening, existing compact early scenes, existing accepted media, and existing
City Threshold controller. No new host, lesson, save field, route, world state,
media operation, or mandatory activation is required.

This blueprint freezes interaction and layout. It deliberately leaves exact
final prose to Quartermaster and code architecture to Combat.

## Player-visible outcome

One truthful Windows entry reaches one finished three-beat opening, the existing
Glass Meadow, the existing long Drowned work sequence, the silent Witness
correction, and then the already-operating City Threshold without a credits or
world-response interruption. Every accepted action has one result, every
unavailable state is truthful and non-dispatchable, every modal makes its
background inert, and every sanctioned resume restores the same earned state.

## Compatibility and fixed interpretation

- The normal route remains one path. Presentation never creates a branch.
- Opening save version `1`, Slot 01, three ordinal beats, existing step names,
  bounded name sanitation, and the one-hit activation burst remain exact.
- Meadow behavior and the absence of Fracture Nursery remain exact.
- Drowned remains one compressed physical host. Its many existing lesson
  boundaries create rhythm by returning attention to the unchanged basin; they
  never imply a walk or additional host.
- The fallen Witness assembly is a complete inert observation target. The
  grounded Evidence Terminal is the only active exercise surface.
- The earned Witness continuation clears its pending acknowledgement, persists
  the existing completed prefix, and enters City Threshold directly.
- City Threshold is already operating. Its existing cycles do not begin or
  change because the player arrives.
- The separate City save remains absent or byte-identical on initial arrival.
  Arrival cannot mint its anchor, predecessor, evidence, or later route.
- Existing learning, Tour, privacy, later route, returns, MH-40, equal outcomes,
  world invariance, and `successor=null` are unchanged.

## Current state graph

```text
PLAY_HORIZON_ARCHIVE_DEMO.cmd
  -> local build / preview
  -> TITLE
     NEW -> CREATE SLOT -> NAME -> TEMP PROLOGUE 0 -> 1 -> 2
         -> CHAPTER I REVEAL -> MEADOW
     RESUME -> exact opening/early state OR later route

MEADOW
  -> First Signal -> Route Marker -> optional calibration / depart
  -> DROWNED

DROWNED
  -> one shared Terminal -> existing ordered lesson sequence
  -> WITNESS

WITNESS
  fallen assembly LOOK/TALK/USE currently implies tracking/listening/rejection
  Evidence Terminal -> evidence mastery -> spoken-response success
  -> CREDITS_REACHED / "Prologue complete" / world-response claim
  -> CITY THRESHOLD

Exact completed-prefix resume without a pending acknowledgement
  -> CREDITS_REACHED
```

The current City component also leaves the world hotspots interactive behind
its open record overlay, does not give the initial City landing one explicit
heading focus target, and retains a return-to-prologue-credits control. Those
are part of the same obsolete junction and modal-focus seam.

## Target state graph

```text
canonical launcher OR truthful legacy wrapper
  -> TITLE
     NEW EXPEDITION
       -> CREATE SLOT 01
          cancel -> TITLE
          create -> NAME
            invalid -> NAME + field error
            back -> CREATE SLOT 01
            valid -> PROLOGUE[0]
              one hit -> PROLOGUE[1]
              one hit -> PROLOGUE[2]
              one hit -> CHAPTER I REVEAL
              one hit -> MEADOW
     RESUME SIGNAL
       malformed/no accepted campaign -> CREATE SLOT 01
       exact later City/Civic record -> existing exact later restore
       exact opening beat/reveal/playing -> same exact state
       exact pending early scene -> same scene + earned continuation
       exact completed early prefix with no later record -> CITY INITIAL

MEADOW (behavior unchanged)
  First Signal -> Route Marker -> optional calibration or depart -> DROWNED

DROWNED (one host; behavior/learning unchanged)
  initial use -> existing Workload Sort
  each existing mastery seam -> basin reorientation + exactly one next action
  final required mixed simulation mastery -> depart -> WITNESS

WITNESS
  fallen assembly LOOK/TALK/USE -> inert observation only
  Evidence Terminal USE -> existing L05-07 work
  pending completion reload -> same silent completion + focused continuation
  continuation -> atomic campaign frontier -> CITY INITIAL

CITY INITIAL / SC-02-00
  -> existing City survey, learning, restore, and later rail unchanged
```

There is no `ending` or credits node in target normal or completed-prefix resume
flow. The old node is removed, not hidden behind a different label.

## Group replacement contract

| Target group | Owner | Heading / status owner | Replaces | Permitted replacement |
| --- | --- | --- | --- | --- |
| package launcher | Product/System | launcher process text | stale demo launcher output | title or clear nonzero failure only |
| `title` | Product | `h1` plus quiet product note | current title | setup, resume, or no action |
| `create-save` | System | unique `h1`; replacement warning when applicable | current setup | title or character name |
| `character-name` | System | unique `h1`; field error owner | current name form | create-save or prologue beat 0 |
| `prologue-0..2` | Pilot/Scene per slot | unique stable prologue `h1` | temporary markers/copy | next ordinal beat or Chapter I reveal |
| `chapter-reveal` | Scene/Pilot | Chapter I `h1` | current reveal | Meadow only |
| `meadow` | Scene/Suit/System | chapter announcement plus required hotspot/earned action | current Meadow | its existing Terminal, return, or Drowned |
| `drowned` | Scene/Suit/System/Teacher | chapter announcement plus one current work action | current Drowned | existing overlay, Meadow return, or Witness |
| `witness` | Scene/Pilot/Suit/System | chapter announcement plus inert/active distinction | response-bearing Witness | existing overlay or City |
| `city-initial` | Scene/Suit/System | unique City `h1` and one atomic status | credits then City | existing City board only |
| `city-overlay` | existing learning owner | exact overlay `h2` and status | current non-inert overlay | cancel/retry/next existing City state |

Every visual replacement is a complete semantic state. Do not render an old
primary action beside its replacement, leave a hidden credits action in the
focus order, or announce both the old and new state.

## Package action and failure map

| Action / event | Eligibility | Result | Unavailable or failure behavior |
| --- | --- | --- | --- |
| run `PLAY_HORIZON_ARCHIVE.cmd` | local Windows shell | existing dependency check, build, preview on `4173`, browser open | missing npm or downstream failure prints one truthful instruction and exits nonzero |
| run legacy demo-named file | any legacy caller | quoted `%~dp0` call to canonical launcher; same exit code | no recursion, duplicate build, or stale product claim |
| stop | active local preview | current `Ctrl+C` behavior | no forced process kill or unrelated port action |
| read canonical guide | player | complete local game/prerequisite/control/privacy truth | no slice, freeze, held-work, exam, or authority claim |

Package output is not fiction and never uses Scene, Pilot, Machine, or Teacher
voice.

## Opening action, eligibility, and focus map

| State | Actions | Eligibility / unavailable state | Result | Focus and announcement |
| --- | --- | --- | --- | --- |
| title | New expedition; conditional Resume signal | Resume absent when `loadSave()` rejects or no save exists | setup or exact restore | on first load, unique title `h1`; after cancel, New expedition |
| create-save | Create Slot 01; Cancel | replacement warning is programmatically tied when an accepted save exists | clear campaign key and reset bounded runtime state; or title | heading on entry; after cancel title heading; warning read with create action |
| character-name | Confirm name; Back | Confirm never advances on invalid/empty/out-of-range input | valid sanitized name enters beat 0; invalid remains | heading on entry; invalid announces alert and focuses name input; Back returns create heading |
| prologue beats 0/1/2 | one primary advance | exactly one accepted pointer/touch/Enter/Space/switch/speech/screen-reader activation per burst | next ordinal state only | stable beat heading on entry; no separate progress alert needed |
| Chapter I reveal | Enter Meadow | one accepted activation | `playing`, Meadow scene 0 | reveal heading on entry; Meadow primary hotspot after acceptance |

Held key repeat, multi-click, or a second activation inside the existing 400ms
burst is rejected with no state, evidence, save, focus, or announcement change.
The input remains usable after the burst. No timer advances a beat.

## Meadow action map (regression exact)

- `LOOK AT`, `TALK TO`, and `USE` remain native pressed-state verb controls.
- First Signal `LOOK AT` observes; `TALK TO` remains Pilot-owned; `USE` opens the
  existing orientation/work only when not completed.
- Route Marker is visibly and semantically `locked`, `awake`, or `completed`.
  A locked `USE` reports the First Signal prerequisite without opening work or
  mutating evidence. An awake `USE` opens existing Route Marker work.
- The earned departure state exposes optional calibration and depart as peer
  actions. Optional calibration never blocks departure.
- During an open Terminal or earned departure replacement, underlying verbs,
  hotspots, inventory, and duplicate actions are inert or absent as already
  authorized.
- First entry focuses the primary field-linked Terminal. Earned/resumed
  departure focuses the exact continue action. Arrival is announced once as
  `Chapter I, Glass Meadow.` independently from dialogue.

No action, label, hotspot count, or status may imply Fracture Nursery exists.

## Drowned work-and-reorientation contract

Drowned owns one physical Workload Sort Terminal. The following existing
learning sequence stays at that host and in its current evidence order:

1. Workload Sort;
2. Responsible AI;
3. Model Choices;
4. Structured Packets;
5. Control Flow;
6. Client Bridge;
7. Text Analysis;
8. Speech Workloads;
9. Visual Workloads;
10. Extraction Workloads;
11. Portal Orientation;
12. Prompt Layers;
13. Client Boundaries;
14. SDK Route Chooser;
15. Single Agent;
16. Text and Speech Patterns;
17. Visual Patterns;
18. Objective Ledger;
19. Remediation Planner;
20. Capstone Readiness;
21. Mixed Simulation; and
22. optional Final Confidence where already eligible.

This list is interface sequencing, not a claim of 22 hosts or changed lesson
ownership.

At initial arrival, focus the grounded primary hotspot and announce Chapter II
once. `LOOK AT` returns basin/Terminal observation. `TALK TO` returns silence.
`USE` opens only the currently eligible existing work. While work is open, the
world and lower command band are inert.

At every natural close, primary mastery, transfer boundary, remediation exit,
or restored incomplete boundary:

1. close the overlay;
2. expose the unchanged basin plate and its current neutral status;
3. show exactly one eligible next-work control in the existing dialogue band;
4. focus that control once; and
5. leave the Crown, water, light, route, hotspot registry, and evidence unchanged.

The reorientation is not an extra state, click, walk, animation, or saved field.
It is the visible world behind the existing lower-band next action. Final
required mastery exposes Witness continuation; optional Final Confidence may
remain a separate optional action and cannot block it.

The Meadow return is eligible only under existing completed Meadow plus Route
Marker mastery. Its visual ridge hotspot and lower-band `Return: Glass Meadow`
remain equivalent routes to the same write-free patch. Ineligible return is
absent, not a disabled promise.

## Witness action and unavailable-state map

| Target | Verb | Result | Must never happen |
| --- | --- | --- | --- |
| fallen assembly | `LOOK AT` | direct inert physical observation; explicitly separate from Terminal | tracking, attention, channel reading, future-use tease |
| fallen assembly | `TALK TO` | no response; Pilot/Suit may state that none occurred | pulse, listening, speaker, voice, reply |
| fallen assembly | `USE` | no coupling or motion; point to separate usable Terminal | rejection, locked joint response, command receipt |
| Evidence Terminal | `LOOK AT` | grounded active-surface observation | assembly attribution |
| Evidence Terminal | `TALK TO` | explicitly no voice | audio playback, ambient speaker, response |
| Evidence Terminal | `USE` | open existing L05-07 Evidence workspace | any assembly change or world effect |

All six actions remain native buttons through the shared verb/hotspot system.
The inert assembly is not disabled, because bounded observation is complete and
available. It has no hidden eligibility, reward state, or future-action tease.
The Terminal alone is exercise-eligible.

On incomplete work, current retry, hint, close, and session-only clearing remain
exact. On mastery, close the overlay, present one Suit/System-owned silent local
completion status, and focus the continuation. Reload while
`pendingSceneId="automaton"` restores this same status and focus once; it does
not replay evidence, arrival, audio, or success effects.

## Direct City frontier

The Witness continuation is one semantic intent with this atomic accepted
result:

1. exact `completed=["meadow","ruins","automaton"]` is retained;
2. `pendingSceneId` becomes `null`;
3. opening remains version `1`, Slot 01, step `playing`, beat `2`, and the
   existing sanitized name;
4. every existing early evidence field remains sanitized and meaning-identical;
5. the campaign projection is durably written before or as City renders;
6. the separate City key is not created or changed by arrival; and
7. mode becomes `city-threshold-staging` with no credits render in between.

Combat may implement this inline or with the shell's sole optional pure helper.
The projection must be directly unit-testable and must not pass
`city-threshold-staging` into `createOpeningProgress`.

An exact completed-prefix legacy save with no later accepted record performs
the same projection on Resume signal. An exact later City/Civic restore retains
priority and enters its existing accepted state. A pending Witness save remains
Witness until the player activates continuation.

## City action and focus plan

City behavior is regression-only beyond the entry seam, but its initial,
partial, and completed states must remain usable after direct routing.

| Board / state | Available actions | Unavailable state | Focus landing |
| --- | --- | --- | --- |
| `SC-02-00` initial | observe cycles; inspect already-lit locked bridge; trace maintenance after observation | Trace maintenance is disabled and non-dispatchable until cycles observed; bridge inspection is information only and never routes | unique City heading/status first, then ordinary Tab order to first required hotspot |
| `SC-02-10` boundary | inspect stop seam; inspect map division; return; compare after both | Compare disabled/non-dispatchable until both observations | first incomplete observation; return focus to overview heading after return |
| `SC-02-20` access | observe environmental access; observe closed record aperture; return; establish survey after both | Establish disabled/non-dispatchable until both | first incomplete observation |
| `SC-02-30` coordinate | select coordinate, then record local anchor; cancel | record semantic unavailable until coordinate selected | coordinate hotspot; after cancel first required access observation |
| partial City save | exact existing Python/CUM/safety overlay | all world and command actions inert | overlay heading or first incomplete control |
| committed/completed City | exact current route or adjacent-survey action | no credits control exists | exact forward/return action |

Initial direct arrival has one unique City `h1` or equivalent shell-approved
heading in the command/status region, with `tabIndex=-1`. Focus it once after
the campaign projection is durable. The atomic polite status states only the
already-operating cycles and local entry truth. It is not a success alert.

When a City overlay is open, both `.city-world` and `.city-command-panel` are
inert. The overlay owns a real dialog relationship, one labelled heading,
bounded Tab/Shift+Tab, and Escape-equivalent Cancel. Opening from a control
captures that trigger. Cancel clears session-only work as already authorized,
restores the exact access detail, and focuses its first required action. On
partial restore with no live trigger, focus the overlay heading or first exact
incomplete control. No focus history is saved.

Remove `RETURN TO PROLOGUE CREDITS` entirely. It has no replacement in City.
Current City forward/return actions continue to own later navigation.

## Announcement lifecycle

- Use one polite atomic scene status for Meadow, Drowned, Witness, and City.
- Fresh scene arrival announces chapter/location once, then focus moves to the
  first required hotspot without repeating dialogue.
- Same-scene verb observations update the existing polite dialogue owner only.
- Exercise feedback remains inside the active Terminal status; it does not also
  fire the scene arrival status.
- Group replacement after mastery announces one complete local status, then
  focuses the eligible next action.
- Invalid name uses the existing alert/error association and focuses the field.
- Disabled prerequisites are named in visible status/description; their click
  handlers cannot dispatch.
- Direct City entry announces the already-operating entry state once. It does
  not announce completion, welcome, continuation, or response.
- Resume does not replay arrival or success. It may announce the restored
  chapter/state once and focuses the exact restored responsibility.

## Modal and inertness contract

| Modal | Background | Initial focus | Escape / cancel | Close focus |
| --- | --- | --- | --- | --- |
| every `TerminalShell` | scene and command inert | Terminal title, except existing First Signal orientation/editor rule | existing close; clear only authorized transient work | invoking hotspot or exact eligible fallback |
| Demo Tour confirmation | scene and command inert | confirmation heading/first action under existing component | cancel, zero write | invoking Tour action |
| City local-record overlay | world and command inert | overlay heading or first incomplete control | clear unsubmitted work; return access detail | invoking control, or first required access action on restore |

No modal leaves an underlying hotspot, verb, inventory action, route, or credits
control operable or focusable. Missing trigger falls back only to the declared
state heading/first action, never `body`.

## Retry, return, resume, and malformed recovery

### Retry and close

- Wrong learning answers retain the exact existing retry/remediation behavior.
- Presentation and copy contribute zero evidence and cannot satisfy a gate.
- Closing a Terminal clears or retains only the session/evidence fields already
  authorized by that exercise. No new persistence is added.
- Reopening reconstructs from sanitized evidence, never private code, prose,
  answer choice, focus, timing, modality, or token.

### Returns

- Title cancel/back actions are zero-write except the explicit confirmed Slot
  creation action.
- Meadow return from Drowned uses the existing write-free patch and focuses the
  earned departure action.
- Demo Tour return restores its exact unfinished First Signal practice boundary
  and trigger focus with zero campaign/City/evidence mutation.
- Later City/Civic/Calibration and released write-free returns remain exact.
- No return traverses the removed credits node.

### Resume priority

1. Reject malformed JSON, slot, name, opening, noncontiguous completion, forged
   pending scene, or non-allowlisted evidence fail-closed.
2. Honor an exact accepted later City Threshold/Civic restore.
3. Restore exact incomplete opening beat, Chapter I reveal, or playing scene.
4. Restore exact pending early completion on that scene with continuation focus.
5. Route exact completed early prefix with no later record directly to City.
6. Let the existing City sanitizer choose entry, first incomplete overlay, or
   completed overview/action.

Malformed campaign state never opens credits, skips to a lesson, or creates a
City key. If no accepted resume exists, `Resume signal` is absent; if a race or
late parse rejects after activation, fall back to new-expedition setup without
destroying unrelated storage. Malformed City state uses the existing safe City
entry and cannot alter the accepted campaign record.

## Modality contract

Pointer, touch, keyboard Enter, keyboard Space, switch-like activation, speech,
and screen-reader activation converge on the same native control and intent.

- One accepted activation produces at most one state replacement.
- Coordinates, pointer type, timing, focus order, announcement timing, and
  modality are never persisted or scored.
- Native disabled controls do not receive or dispatch an intent.
- Observational unavailable actions may report why a route is unavailable but
  cannot dispatch navigation, evidence, or world change.
- Escape closes only the top modal; it never advances, saves, or exits the
  campaign.
- No hover-only, drag-only, double-click, long-press, timed, audio-only, or
  color-only requirement exists.

## Stable source order and responsive layouts

### Opening states

DOM order is one `main`, eyebrow/status, unique `h1`, body/help, field or local
slot if present, error/warning, primary action, then secondary action. At
`1920x1080` and `1366x768`, the card remains centered with a readable `<=68ch`
measure. At `390x844` and `768x900` effective `200%`, it becomes natural-flow
single column with document scrolling, no fixed-height island, no clipped
heading/body/error, and no horizontal escape. Opening primary controls retain
the current `48px` floor; secondary controls remain at least `44px`.

### Adventure states

Source order stays scene announcement, world/plate and hotspots, chapter
status, active Terminal when present, verbs, dialogue/current action, then
inventory/return. CSS may visually place these regions but cannot reorder their
meaning.

- `1920x1080`: registered 16:9 world dominates; complete command band remains
  reachable in the supported shell height.
- `1366x768`: same world-first order; natural document flow is allowed rather
  than compressing controls below `44px`.
- `390x844`: world, verbs, dialogue/action, and inventory stack; no required
  hotspot label or control is clipped or horizontally scrolled away.
- `768x900` effective `200%`: use the same one-column source order and document
  scroll; no viewport-locked Terminal or nested pane may hide Close, current
  work, feedback, retry, or continuation.

### City

Source order is unique heading/status, world figure/hotspots, command status,
then current actions; an open overlay becomes the sole interactive region. The
existing 16:9 world may remain above the command band. Narrow/effective-`200%`
uses one-column command actions and natural scrolling. Every control, City
overlay select, and cancel remains at least `44px`.

Longest Quartermaster copy must be tested at all four layouts with browser text
scaling, not by reducing type below current readable floors.

## Existing-media crop and hotspot plan

No media byte, import, source, or asset role changes.

| Scene | Wide/laptop crop | Narrow/effective `200%` crop | Required visible relation |
| --- | --- | --- | --- |
| Chapter I / Meadow | current accepted centered integrated plate | current accepted responsive plate/cover behavior | First Signal and Route Marker hotspot geometry remain inside the registered world; cultivated field remains visible |
| Drowned | current plate with grounded coupling and Crown together; current canonical object position | current approved `70% top`/registered narrow behavior | grounded Terminal and return ridge remain actionable; Crown stays distant and inert |
| Witness | current centered/top plate | current narrow hotspot geometry | right fallen assembly and left grounded Terminal remain visually and semantically distinguishable |
| City initial | accepted overview with depth and cycles already present | existing narrow plate role | overview dominates; first required hotspots and complete command status remain contained |
| City boundary/access | current accepted roles only | existing normalized hotspot projections | no crop turns a detail into a response shot or hides the current required observation |

Hotspots preserve their current registered geometry. Tactical authorizes no new
hotspot. If a required control/hotspot cannot coexist with a cinematic crop,
containment and semantic access win; do not alter the image.

## Forced colors, grayscale, reduced motion, and sound

- Forced colors uses system borders/text/focus and keeps observed, disabled,
  active, status, and error meanings explicit in text/semantics.
- Grayscale retains hierarchy, disabled distinction, focus, owner, and current
  action without relying on violet/gold/teal.
- Visible focus is at least the existing `3px`-equivalent treatment and is not
  clipped by world or modal containment.
- Reduced motion removes nonessential opening treatments and City cycle
  animation. State replacement, focus, announcement, and eligibility remain
  identical.
- Add no forced audio, ambient sound, sting, or voice. The Witness lesson audio
  remains player-controlled evidence inside its existing overlay only.

## Copy-slot ledger

Quartermaster owns final words. Combat may install explicit semantic
placeholders bearing these stable slot IDs; placeholder text must already be
canon-safe and may not ship as production-process copy.

| Slot | Owner | Required meaning | Forbidden assertion |
| --- | --- | --- | --- |
| `PKG-LAUNCH-IDENTITY` | Product/System | Horizon Archive complete local product | demo/slice/freeze/held work |
| `PKG-LAUNCH-PREREQ` | Product/System | Node/npm prerequisite, local preparation, stop/error truth | cloud/Azure requirement or silent failure |
| `PKG-GUIDE-SCOPE` | Product/System | complete local journey and controls/privacy | exam result, authority, unsupported implementation detail |
| `OPN-B0-LABEL/HEAD/BODY/ACTION` | Scene/Pilot | pattern without sender | invitation, mission, production status |
| `OPN-B1-LABEL/HEAD/BODY/ACTION` | Scene/Pilot | reversible mortal approach | chosen Pilot, fixed purpose, irreversible landing |
| `OPN-B2-LABEL/HEAD/BODY/ACTION` | Scene/Pilot | repeated ruler-straight horizon without road | road, destination, greeting, Builder intent |
| `MEADOW-CH1-REVEAL` | Scene/Pilot | grounded arrival and existing field | Fracture Nursery or host parity |
| `DROWNED-SUCCESS` | Scene/Suit | local work complete; Crown/basin unchanged; existing outflow | route appearance, Crown response, new host |
| `DROWNED-REORIENT` | Suit/System | current local work boundary and next eligible existing work | walking tour, host count, world reward |
| `WIT-FALLEN-LOOK` | Scene/Pilot | inert observation; separate Terminal | tracking/attention/interface privilege |
| `WIT-FALLEN-TALK` | Scene/Pilot/Suit | no response | pulse/listening/speaker reply |
| `WIT-FALLEN-USE` | Scene/Pilot/Suit | no coupling; separate Terminal usable | rejection/command receipt/joint response |
| `WIT-TERM-LOOK/TALK/USE` | Scene/Pilot/Suit | active grounded interface; no voice; local work link | assembly ownership or world speech |
| `WIT-SUCCESS` | Suit/System | local evidence complete; world silent | voice, lens opening, continuity verdict |
| `WIT-RESUME` | Suit/System | same non-response state restored | replayed success or new evidence |
| `CITY-ENTRY-HEAD/STATUS` | Scene/Suit/System | already-operating cycles and local entry | welcome, acknowledgement, reward, predecessor |
| `CITY-ROUTE-LOCKED` | Suit/System | existing local record incomplete | city denial, permission, hidden promise |

The screen-reader name and visible label share meaning. Accessible-only copy
cannot contain lore, route, host, success, or authority absent from visible
copy.

## Combat-ready acceptance matrix

| Concern | Required proof |
| --- | --- |
| package | canonical launcher succeeds through quoted path; wrapper delegates once and preserves exit; missing npm/install/build/preview failure is clear/nonzero; guides truthful |
| opening state | beats `0/1/2`, reveal, playing, legacy migration, bounded name, malformed slot/name/step, and duplicate activation preserve v1 exactness |
| opening semantics | stable final-purpose markers; no temporary/story-pass/placeholder/demo/slice/freeze claim in owned source or served bundle |
| Meadow | title-to-first hotspot, First Signal, locked/awake/completed Route Marker, optional calibration, return, and depart remain exact; no Fracture Nursery claim |
| Drowned | one host and existing ordered work; wrong/retry/close/resume; each eligible next action focuses after world reorientation; no route appearance/Crown response/new host |
| Witness verbs | all fallen LOOK/TALK/USE remain inert and evidence-neutral; Terminal alone opens exercise; no track/listen/pulse/reject/voice response in owned states |
| Witness resume | pending final success restores same silent state once, focuses continuation, and replays no evidence |
| direct City | normal continuation and exact completed-prefix resume persist opening `playing`, exact completed prefix, `pendingSceneId=null`; no credits frame and no City-key/predecessor/evidence write |
| City states | direct initial heading/status focus; partial overlay heading/control focus; world+command inert; Tab containment; Escape/cancel restoration; completed route focus; no credits action |
| save/recovery | malformed/noncontiguous state fails closed; later restore priority; incomplete/pending/completed resume order exact; no arrival/success/learning replay |
| modalities | pointer, touch, Enter, Space, switch, speech, screen reader share one semantic intent; one-hit; disabled actions non-dispatchable |
| focus/status | one main, heading, atomic status, unique names, trigger/fallback restoration, no hidden duplicate primary control |
| responsive | `1920x1080`, `1366x768`, `390x844`, `768x900` at effective `200%`, retained `320px`; no clipping/overlap/horizontal escape; `>=44px`, opening `48px` |
| sensory | forced colors, grayscale, reduced motion, visible focus, no forced audio/timer, Witness audio remains player-controlled evidence |
| learning/privacy/Tour | exact catalogs/evaluators/thresholds/evidence/save allowlists; no private persistence/cross-credit; Tour bytes and First Signal return exact |
| later rail/ending | City predecessor derives only from existing anchor; Civic through MH-40 and equal outcomes remain exact; `successor=null` |
| performance/media | PBA caps, exact `17 / 37,410,731` media inventory/hashes, zero new media/runtime request/dependency, sampled task `<=100ms` |
| E2E | one clean canonical-launcher-equivalent run through MH-40 includes opening, wrong/retry, Witness pending reload, direct/reloaded City, partial/completed restore, later route, equal outcome fixtures, zero runtime errors |

String absence is supporting proof only. Interaction, storage-byte comparison,
focus, route, and E2E evidence must prove the owned semantics.

## Regression radius

Combat may change only the shell's exact permitted product/test files. The
following are regression-only and meaning/byte equivalent:

- `openingFlow.js`, `gameLogic.js`, `sceneTransition.js`,
  `cityThresholdExercise.js`, and `demoTour.js`;
- every learning catalog, source, answer, evaluator, threshold, owner, attempt,
  remediation, readiness, and evidence contract;
- City Threshold learning/anchor/predecessor semantics and every later
  controller/save/return;
- Demo Tour storage/name/isolation and unfinished-practice return;
- accepted media imports and all `17` media bytes;
- RP-004 through RP-012, MH-40, equal outcomes, invariant world, and
  `successor=null`; and
- Martin's browser/profile/save, hidden lore, and protected user paths.

No CSS is required by this blueprint if existing rules satisfy live proof.
Any CSS edit must replace obsolete credits rules or remain net-neutral within
the fixed `119,672`-byte aggregate cap.

## Downstream implementation choices

Combat may choose inline projection or the shell's sole optional pure helper;
exact stable source symbol names; deletion of obsolete credits JSX/CSS versus
structurally complete removal by an equivalent smaller patch; and the smallest
focus utility needed for the City overlay. Those choices may not change the
graph, saved data, copy-slot meaning, focus landings, permitted files, PBA, or
validation burden.

Quartermaster may replace Combat's explicit content-safe placeholders with
final prose only inside the registered slots. Image Specialist may later adjust
authorized code/config presentation only if the functional/content candidate
needs it. Neither role may change interaction eligibility or media.

## Maturity and owned-file impact

This planning stage advances no scoreboard cell. It defines the evidence
required for covered continuity/content to reach `FR2` and affected
presentation to reach `FR3`; only Intelligence may accept that evidence and
record `FR4`.

Tactical changes only this blueprint and `NEXT_INSTANCE_HANDOFF.md`. It changes
no launcher, guide, product source, test, CSS, build, media, story authority,
learning authority, save, release map, scoreboard, or process record. The
dedicated Tactical commit is the commit introducing those two control files.
No Tactical push gate exists; Combat owns the next required push.

## Hard stop and rollback

Changed behavior stops when initial City Threshold is durably visible and
focused. Adjacent City partial/completed states, later controllers, and MH-40
are validation surfaces only. There is no new action, host, state, route, save
field, content authority, image role, destination, ending, successor, or
post-ending surface after that stop.

Rollback is the complete bounded product/test patch for `FRWO-001-v1`.
Reverting it restores the released TD-012 package/opening/credits behavior
without changing save schema, deleting player data, migrating City state,
touching media, or requiring an external action.

## Variances and risks

| Finding | Classification | Tactical control |
| --- | --- | --- |
| City overlay currently leaves world hotspots interactive | `REQUIRED CORRECTION` within shell | inert world and command; trap focus; deterministic cancel return |
| current direct-entry state lacks an explicit focused City heading | `REQUIRED CORRECTION` within shell | unique heading/status landing before first world action |
| Drowned density could read as host multiplication | `DEFERRED LIMITATION` for later host pass | one physical host, basin reorientation only, no new hotspot/action/save |
| narrow Witness crop could blur assembly/Terminal distinction | `REQUIRED CORRECTION` by semantic/crop proof, not media change | keep both current hotspots/names and test every target layout |
| final copy could imply world response | `REQUIRED CORRECTION` routed to Quartermaster if found | locked slot owners and forbidden assertions |

No shell variance is requested. No `UNAUTHORIZED DIVERGENCE` was discovered in
the permitted Tactical plan.

## Validation performed

- Read the active workflow, registry, Tactical profile, synchronized handoff,
  complete shell, Directorial Treatment, Work Order, viability envelope,
  baseline, continuity lock, release map, and scoreboard.
- Independently inspected the current launcher/guide; title/setup/prologue;
  Meadow, Drowned, Witness, completion and resume graph; City Threshold source,
  overlay, save board, focus, responsive CSS, and adjacent Chapter IV route.
- Inspected current opening, game-logic, scene-transition/return, City, Terminal
  focus, and Demo Tour tests without mutating runtime or user state.
- Changed no product, test, media, story, learning, save, or runtime file.
- Performed no image generation, edit, replacement, variation, import, board,
  publication, reveal, browser/profile/save inspection, or hidden-lore access.

## Exact Combat handoff

Run **Combat Engineer / `combat_engineer` only** against `FRSH-001-v1`,
`FRDT-001-v1`, and `FRPX-001-v1` at the committed Tactical source. Implement
the bounded Unbroken Opening Rail in the shell's exact permitted files: truthful
canonical launcher/guide plus compatibility wrapper; final-purpose stable
opening structure with content-safe placeholders; canon-safe Drowned/Witness
states; atomic direct completed-prefix/Witness-to-City projection; removal of
the credits node/action; deterministic City entry/overlay focus and inertness;
and focused, related, full, build, budget, media, served, E2E, live-state, and
cleanup proof.

Do not write final Quartermaster prose, add or imply a host, alter learning,
save schema, City predecessor, Tour, later route, world state, or ending, touch
media or protected paths, inspect user state/hidden lore, perform an image
operation, create a reveal, or deploy Quartermaster. Issue
`PRODUCTION FUNCTIONAL`, `REVISE`, or `HOLD`; write one dedicated Combat report,
commit only the permitted build/test/report/handoff files, push `main`, prove
`HEAD == origin/main`, and hand the exact candidate to Quartermaster.
