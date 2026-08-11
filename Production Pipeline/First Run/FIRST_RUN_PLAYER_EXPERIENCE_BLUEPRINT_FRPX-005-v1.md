# First Run Player Experience Blueprint - Stranded Lens Cradle

Blueprint ID: `FRPX-005-v1`

Stage / owner: Tactical Operations Specialist / `tactical_operations_specialist`

Disposition: **`PLAYER EXPERIENCE READY / FRPX-005-v1`**

Shell / treatment: `FRSH-005-v1` / `FRDT-005-v1`

Work Order / viability: `FRWO-005-v2` / `FRVE-005-v2`

Planning authorities: `FRPB-001-v2`, `FRCL-004-v2`, `FRRM-005-v2`,
`FRSB-005-v2`

Source commit inspected: `2afc3cc94011673ccb9426ef6205a16a5fa0189b`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Released product/test baseline: `a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Date: **2026-08-10**

## Result

`FRSH-005-v1` and `FRDT-005-v1` are compatible with the current Drowned
runtime. Combat can implement one inert, fail-closed Host 06 integration without
inventing state, order, focus, recovery, copy purpose, geometry, or acceptance
behavior. Candidate values remain `null`; no media was read, generated,
inspected, imported, rendered, or revealed.

The player-visible result is one exact sequence: exact Host 05 mastery returns
the unchanged accepted basin for one committed paint; the lawful selected
source then replaces that view as a direct same-basin reorientation; focus lands
once on `Stranded Lens Cradle`; and deliberate `USE` alone opens unchanged
`L02-03`. The world never responds.

## Current graph and exact replacement

```text
CURRENT
Host 05 mastered
  -> accepted Drowned source remains
  -> generic Start/Resume Model Choices command appears
  -> generic command opens existing L02-03

TARGET, inert Combat candidate
source.enabled=false
  -> accepted Drowned source and Host 05 remain exact
  -> generic launcher remains byte/behavior exact
  -> no Host 06 import, DOM, name, focus, notice, action, or credit

TARGET, later lawfully populated candidate
exact Host 05 mastery + exact source/provenance/measurement/decode proof
  -> Host 05 Terminal unmount
  -> one committed unchanged Host 05 paint
  -> direct source replacement to same-basin Host 06 reach
  -> outgoing Host 05 -> incoming Host 06 -> return logical order
  -> one Host 06 focus landing and one polite Suit/System notice
  -> generic launcher absent
  -> sole Host 06 USE opens unchanged L02-03
  -> mastery restores Host 06 read-only, then unchanged next boundary
```

No Host 05 hotspot is remapped onto the Host 06 raster. The two host targets
never coexist on the wrong source. The cross-state semantic succession is
Host 05, then Host 06, then the existing return control.

## Pure source guard and legacy-launcher switch

Combat creates pure validation, not new persistence or a second evaluator.

```text
host05Mastered =
  sanitizeResponsibleAIEvidence(input)?.masteryStatus === "mastered"

sourceIdentityPass =
  source.enabled === true
  && source.path === "Visual Direction/Production Masters/2026-08-10-first-run-host06/host06-stranded-lens-cradle-master-v1.png"
  && source.width === 3840
  && source.height === 2160
  && source.format === "png"
  && source.color === "opaque-srgb-8"
  && Number.isInteger(source.attemptOrdinal)
  && source.attemptOrdinal >= 1 && source.attemptOrdinal <= 3
  && Number.isInteger(source.byteLength)
  && source.byteLength > 0 && source.byteLength <= 12000000
  && /^[0-9a-f]{64}$/.test(source.sha256)
  && source.sha256 === selectedProvenance.sha256
  && source.byteLength === selectedProvenance.byteLength

measurementPass = every required physical, activation, protected, and layouts
  field has the frozen shape; every numeric scalar is finite; absent protected
  features are exactly "absent"; and every objective predicate passes

decodePass = importedImage.complete
  && importedImage.naturalWidth === 3840
  && importedImage.naturalHeight === 2160

host06Lawful = host05Mastered && sourceIdentityPass
  && measurementPass && decodePass

legacyLauncherVisible = source.enabled !== true
```

`source.enabled` is the irreversible candidate-mode switch, not proof that the
source is lawful. Before enablement, the generic launcher remains exact. After
enablement it is absent even if import, metadata, provenance, measurement, or
decode later fails. Failure keeps the accepted Host 05 source visible and safe,
leaves Host 06 wholly absent, and never restores the bypass. Missing static
import fails the build. Neither image load nor detection is a guard input.

## Null-first registry and evidence-only generation fields

Combat creates exactly this runtime/configuration schema:

```text
source = { enabled=false, path=null, sha256=null, byteLength=null,
           width=null, height=null, format=null, color=null,
           attemptOrdinal=null }
physical = { x=null, y=null, width=null, height=null,
             centerX=null, centerY=null }
activation = { x=null, y=null, width=null, height=null }
label = { insetOuterCss=3, insetTextCss=5 }
protected = { host05Cue=null, liveWater=null, returnLikeRidge=null,
              crown=null, tidalLens=null, secondLensCandidate=null }
layouts = { desktop=null, laptop=null, narrow=null, effective200=null,
            retained320x180=null, retained320x240=null }
```

Combat must not populate any candidate value. Quartermaster may populate only
these declared fields after a passing source is selected.

Generation acceptance is separate provenance/evidence, never runtime state.
For each consumed ordinal the bounded record fields are: `promptId` exact
`HOST06-GEN-PROMPT-v1`; `ordinal` `1..3`; available tool identity;
`managedContainmentPass`; `managedTempByteLengthEqual`;
`managedTempSha256Equal`; `managedCleanupPass`; `PHY-01..12` booleans and
rejection codes; PNG/color/dimension/opacity/metadata/decode/byte-cap booleans;
source-band and six-layout booleans; and `tempCleanupPass`. A selected record
additionally carries product path, selected bytes/SHA, product-copy equality,
product/provenance cleanup state, and the immutable `FRAM-001-v1`
`entriesSha256`. It contains no rejected bytes/hash/path/pixels, managed/temp
path, prompt secret, credential, or hidden diagnostic.

## View-state graph

State derives only after `host06Lawful` passes:

| Sanitized `modelChoiceEvidence` | Host 06 state | Result |
| --- | --- | --- |
| truly absent | `available` | enabled observation and sole `USE` |
| exact `remediation_required` | `remediation_required` | enabled; actual missed tradeoff stays inside Terminal |
| exact `in_progress`, `primary_complete`, or `transfer_complete` | `in_progress` | enabled; clean work reconstruction |
| exact `mastered` | `complete` | enabled observation; `USE` read-only |
| malformed, forged, unknown, contradictory, or any other status | `hidden` | no Host 06 node/name/focus/notice/action/credit |

Raw/private response content, focus, observation, media load, provisional name,
dialogue, and detection never influence state.

```text
H0 HIDDEN
  pre-Host05 mastery or any failed source guard
  -> Host 06 absent; safe Host 05; no bypass after enabled=true

H1 AVAILABLE
  LOOK -> physical observation -> H1
  TALK -> complete nonresponse -> H1
  USE -> clean existing L02-03 primary session -> H2

H2 IN_PROGRESS
  LOOK/TALK -> invariant scene -> H2
  USE same session -> retained lawful session
  USE after reload/return -> clean boundary from sanitized evidence
  primary acknowledgement -> close to Host 06; next USE creates fresh transfer

H3 REMEDIATION_REQUIRED
  USE -> actual failed field/status and answer-free remediation
  close/Escape/reload/return -> H3 with private controls cleared as applicable

H4 COMPLETE
  LOOK/TALK -> invariant scene
  USE -> read-only allowlisted completion status; no modal or write
  unchanged next continuation owns forward priority
```

## Source and DOM order

The order is fixed at every layout.

```text
Host 05 phase / accepted source
  world-content
    accepted Drowned picture/img
    Host 04 native hotspot
    Host 05 native hotspot
    Meadow return ridge
    scene status

Host 06 phase / selected source
  world-content
    one selected Host 06 img
    Host 06 native hotspot
    Meadow return remains inventory/navigation only; no invented ridge hotspot
    scene status

shared command-panel after world content
  LOOK AT
  TALK TO
  USE
  polite dialogue/status + explicit owner
  unchanged next continuation when lawful
  Return: Glass Meadow + existing inventory/navigation controls
```

The state transition preserves exact logical order `Host 05 -> Host 06 ->
Return: Glass Meadow`. There is no offscreen, disabled, `aria-hidden`, duplicate,
or zero-sized Host 06 substitute while hidden. Host 04/05 buttons disappear
with their source and are never overlaid on the selected raster. Demo Tour keeps
the accepted Drowned source and receives no Host 06 node or credit.

## One-time reorientation, focus, and announcement

The successful Host 05 mastery acknowledgement sets one nonpersisted pending
transition token. After the Host 05 Terminal unmounts, focus first returns to
the connected Host 05 target and the accepted source completes one paint. On
the next animation-frame boundary, if `host06Lawful` still passes, the source
is directly replaced, the token is consumed, and a layout effect focuses Host
06 with `preventScroll:true`. This is one committed perceptual beat, not a
timer, forced dwell, camera move, animation, or credit condition.

Exactly one polite Suit/System announcement follows the connected Host 06
focus landing. It confirms only local compatibility and lawful expedition
availability. It does not announce discovery credit, response, invitation,
purpose, reward, or mastery. The token is never reconstructed from render
state. Reload, return, resize, decode repetition, hover, focus traversal,
forced-color, or reduced-motion changes do not replay it. On reload/redeparture,
focus follows the recovery table without detection prose.

If the guard fails between paints, cancel the token, retain Host 05, and focus
Host 05 or the first lawful scene control. No Host 06 announcement occurs.

## Action and one-hit contract

| Event | Eligibility | Exact result | Settled focus | Writes |
| --- | --- | --- | --- | --- |
| select a verb | no modal | pressed native verb only | selected verb | none |
| Host 06 + `LOOK AT` | H1-H4 | observable physical fact only | Host 06 | none |
| Host 06 + `TALK TO` | H1-H4 | immediate complete nonresponse | Host 06 | none |
| Host 06 + `USE` | H1-H3 | call existing `openModelChoiceExercise()` once | existing Terminal title | none on open |
| Host 06 + `USE` | H4 | read-only finalized allowlisted evidence status | Host 06 | zero |
| Close / Escape | open L02-03 | close only | connected lawful Host 06; else Host 05; else first lawful scene control | none |
| Meadow return | no modal; existing gate | unchanged write-free navigation | existing Meadow recovery | none |

The accessible labels are exactly `${verb in lower case} Stranded Lens Cradle,
${state}`, where state is `available`, `in progress`, `remediation required`,
or `complete`. All world actions remain native buttons. Pointer, touch, Enter,
Space, screen-reader/speech-by-name, and switch-like activation use the native
click path only. Add no parallel key, pointer, or touch dispatch. Repeated key,
mixed-input crossover, and simultaneous intents open at most one Terminal and
never increment an attempt on open.

## Terminal, miss, recovery, and return

`TerminalShell` remains exact: `role=dialog`, `aria-modal=true`, unique title,
title-first focus, Tab/Shift+Tab containment, visible Close, Escape, and one
cleanup restoration. While open, world content and command panel are inert;
pointer events cannot leak through.

| Event | Focus / recovery |
| --- | --- |
| lawful initial `USE` | existing `#terminal-title`, then current internal order |
| actual miss | first actually invalid field/status in reading order; bounded answer-free remediation |
| retry/hint/next | initiating control or next existing lawful field; no answer exposure |
| primary acknowledgement | Terminal unmount, Host 06; next `USE` reconstructs fresh transfer |
| transfer to explanation | existing explanation title/first field in dialog order |
| ordinary Close/Escape | connected Host 06; otherwise Host 05; otherwise first enabled `data-terminal-focus-fallback` |
| mastery acknowledgement | Host 06, with unchanged next continuation the next lawful action |
| completed `USE` | Host 06; no dialog |
| reload unfinished/remediation | Host 06 scene; clean session mounts only after `USE` |
| reload mastered | unchanged next continuation; Host 06 remains read-only in source order |
| Meadow redepart unfinished/remediation | Host 06, arrival notice only |
| Meadow redepart mastered | unchanged next continuation; Host 06 remains read-only |
| malformed evidence/source/decode | Host 05 or first lawful scene control; no bypass, replay, or credit |

Same-session Close/Escape may retain the existing in-memory model-choice
session. Primary acknowledgement intentionally clears it. Reload and Meadow
round trip restore only sanitized `modelChoiceEvidence`; private selections,
free-form explanation, working index, ownership checkbox, hints, focus,
dialogue, timing, modality, and source diagnostics do not persist.

## Six-layout centered probe contract

Exactly one selected `<img>` uses `object-fit:cover` and
`object-position:50% 50%`. Source and world are exact `16:9`; required source
window is always `(0,0,3840,2160)` with no crop. No `<picture>` alternate,
responsive duplicate, derivative, or source override exists.

| Layout ID | Viewport / retained frame | Exact world box |
| --- | --- | --- |
| `desktop` | `1920x1080` | `1920x1080` |
| `laptop` | `1366x768` | `1366x768.375` |
| `narrow` | `390x844` | `390x219.375` |
| `effective200` | `768x900` | `768x432` |
| `retained320x180` | `320x180` | `320x180` |
| `retained320x240` | `320x240` | centered `320x180` world |

For world width `Rw`, `scale=Rw/3840`; mapped source point is
`(image.left + sourceX*scale, image.top + sourceY*scale)`. Capture all DOM
rectangles unrounded in one connected-document epoch. Predicate evaluation uses
unrounded values; diagnostic recording additionally floors each scalar to
`floor(value*64)/64` CSS px. Rounding may never create a pass.

Each non-null `layouts[id]` record must contain:

```text
viewport { width, height, deviceScaleFactor, effectiveZoom }
source { path, sha256, naturalWidth, naturalHeight, objectFit,
         objectPosition, renderedRect, visibleSourceRect, retainedArea }
physical { sourceRect, mappedRect, centerSource, centerMapped }
semantic { sourceRect, mappedRect, targetWidth, targetHeight,
           containsPhysical, areaRatio, centerClearance }
label { outerRect, textRect, insetOuterCss, insetTextCss,
        contained, clipped, overflowed }
protected { each feature: sourceRect or "absent", mappedRect or "absent",
            physicalIntersection, semanticIntersection, edgeSeparation }
order { imageIndex, host06Index, returnIndex, verbIndices }
focus { beforeRect, afterRect, deltaEdges, activeName, outlineWidth,
        outlineColor, targetStable }
```

Machine gates require source/DOM path and natural-size identity; visible source
rect exactly full source; relation and Host 05 cue each `>=0.995` retained area
with retained centers; physical is the smallest full-relation source rectangle;
activation contains physical, contains its center with `>=4 CSS px` clearance,
is `<=1.50x` physical area, and is `>=44x44 CSS px`; label outer/text are exact
`3/5 CSS px` activation insets and fully contained; physical and activation
have zero-area intersection with every present protected rectangle and at least
`96` source pixels / `8 CSS px` mapped edge separation; absent features equal
`"absent"`; and every mapped edge is stable before/after Tab then Shift+Tab
within `1/64 CSS px`. No horizontal page escape or required-text clipping.

## Accessibility and equivalent meaning

Quartermaster supplies one alt slot describing only the first-person observable
lens inside a tilted cradle, dry waterline separation, fragments, drainage,
stress contacts, horizon/reflection, and surrounding basin. It must not state
purpose, correctness, invitation, lesson mapping, or Builder intent.

Name, state text, pressed verb, dialogue owner, completion, and focus remain
legible without color, sight, sound, motion, hover, or timing. Normal mode has a
visible contained focus indicator. Forced colors require exact `3px solid
Highlight`, preserved accessible name/state, and visible target boundary.
Reduced motion removes every nonessential transition; the committed source
replacement is a direct cut with identical state, order, focus, and notice.
No audio request, cue, or timed state is required.

## Seven Quartermaster meaning slots

Combat declares exactly seven empty copy slots; Quartermaster owns final prose.

| Slot | Owner | Required meaning | Forbidden meaning |
| --- | --- | --- | --- |
| `FRPX05_UNSEEN_INTERFACE` | Scene | relation predates player; observable facts only | compatibility, invitation, credit, native name |
| `FRPX05_AVAILABLE` | Scene + Pilot + Suit | nested fact, provisional name, stranded/correct uncertainty, local compatibility | answer, purpose, response, reward |
| `FRPX05_IN_PROGRESS` | System + Scene | sanitized work reconstructs; scene invariant | retained private work, object fault |
| `FRPX05_MISSED` | 901 Teacher | only actually missed tradeoff needs answer-free repair | exterior warning, generalized failure, answer reveal |
| `FRPX05_MASTERED` | System + Scene | allowlisted evidence finalized; world invariant | approval, access, route/world change |
| `FRPX05_RETURNED` | Scene + Suit | same relation; sanitized evidence restores lawful boundary | replayed discovery, memory, recognition |
| `FRPX05_NEXT_BOUNDARY` | Pilot + System | existing structured-packet continuation available | Host 07 body/name/promise, branch, successor |

Machine and Builders own no line. Stable name/state labels and the alt slot are
identification fields, not extra story slots.

## Manifest, provenance, candidate, and role boundaries

The immutable accepted-media baseline is exactly the shell's ordered seventeen
literal paths, `17 / 37,410,731`, recorded only by Combat in
`FIRST_RUN_ACCEPTED_MEDIA_MANIFEST_FRAM-001-v1.json` after the inert code
candidate is committed. The raw-byte, one-read-only-handle, reparse/containment,
tuple-stream, and `entriesSha256` rules remain exact. Combat reads no pixels,
generates nothing, imports nothing, and pushes code-candidate plus manifest
evidence before attempt one.

The only later media-owned paths are the selected raster and `PROVENANCE.md`
named by the shell. Combat code candidate, seventeen-tuple baseline, attempt,
temp evaluation file, selected bytes, Quartermaster candidate, Image candidate,
and Intelligence release candidate remain distinct identities. No prompt,
attempt, selection, copy, hash, commit, or presentation advances canon or
maturity. Quartermaster alone may make up to three sequential built-in calls
after the Combat push gate. Image changes code/configuration presentation only.
Intelligence alone may release.

## Combat-ready acceptance matrix

| ID | Requirement | Exact proof |
| --- | --- | --- |
| `PX05-01` | scope/ancestry | candidate descends from Tactical source; only shell-permitted paths change |
| `PX05-02` | inert registry | all candidate fields exact null/false; media remains `17 / 37,410,731`; Host 06 has no DOM/import/name/action |
| `PX05-03` | pure guard | exact Host 05 sanitizer + identity/provenance/finite measurement/decode predicates only |
| `PX05-04` | legacy switch | generic launcher exact while `enabled!==true`; absent forever after `enabled===true`, including failure |
| `PX05-05` | fail close | invalid source/evidence/decode leaves Host 06 absent and Host 05 safe without bypass |
| `PX05-06` | source isolation | accepted Drowned source exact for Hosts 04/05 and Tour; selected source only for Host 06 |
| `PX05-07` | semantic succession | outgoing Host 05 -> incoming Host 06 -> return; no Host04/05 remap or simultaneous wrong-source node |
| `PX05-08` | view states | exact absent/remediation/in-progress/complete mapping; every other condition hidden |
| `PX05-09` | actions | LOOK physical/write-free; TALK immediate silence/write-free; USE sole unchanged L02-03 entry |
| `PX05-10` | completed USE | no modal/session/attempt/hint/check/confidence/evidence/save/route/world write |
| `PX05-11` | one-time beat | Host 05 unmount recovery, one committed paint, direct replacement, Host 06 focus/notice once; no replay |
| `PX05-12` | modal | title first, Tab trap, Close/Escape, complete background inertness, one restoration |
| `PX05-13` | input parity | pointer/touch/Enter/Space/switch/native-name activation dispatch once |
| `PX05-14` | learning exactness | existing 8+8 scenarios, strict `16/16 + 16/16 + 2/2`, evaluator and ownership unchanged |
| `PX05-15` | actual miss | failed field/status and answer-free actual-dimension remediation; blank retry |
| `PX05-16` | primary/transfer | primary acknowledgement closes to Host 06; next USE creates fresh transfer |
| `PX05-17` | explanation/mastery | closed-note flow, ownership/confidence, exact mastery, Host 06 read-only return |
| `PX05-18` | privacy/save | only sanitized modelChoiceEvidence durable; schema/version/projection unchanged |
| `PX05-19` | reload/return | exact table above; Meadow round trip write-free; no detection replay |
| `PX05-20` | six layouts | complete source/physical/semantic/label/protected/order/focus records for exactly six IDs |
| `PX05-21` | centered crop | one img, `cover`, `50% 50%`, full `3840x2160`, no crop/alternate/derivative |
| `PX05-22` | geometry | physical/activation/center/area/44px/label/retention/nonoverlap/separation pass unrounded |
| `PX05-23` | focus stability | before/after Tab/Shift+Tab edges stable to floor lattice; connected same-document epoch |
| `PX05-24` | accessibility | exact labels, factual alt, no sensory-only meaning, no horizontal escape |
| `PX05-25` | forced color/motion | `3px Highlight`; direct-cut reduced-motion parity; no required sound/timing |
| `PX05-26` | copy ledger | exactly seven slots, owner-correct, no final prose from Combat |
| `PX05-27` | manifest | exact ordered 17 tuples, `37,410,731`, canonical digest, candidateHead and no pixel inspection |
| `PX05-28` | media roles | Combat no pixels/generation; Quartermaster only after synced gate; no reveal |
| `PX05-29` | provenance/identity | all eight identity layers remain distinct; exact two media paths maximum |
| `PX05-30` | PBA/performance | JS/CSS/module/media/map, decode, image-ready, CLS, activation/task and time caps exact |
| `PX05-31` | offline | one same-origin image request, zero external; no dependency/service/account/credential/telemetry |
| `PX05-32` | regression radius | Hosts 04/05, Demo Tour, next boundary, Host07+, later rail, both MH-40 outcomes exact |
| `PX05-33` | null deltas | city/world/external/authority deltas null; `successor=null`; no response or branch |
| `PX05-34` | validation | exact `FRRC-003-v1` ordered ladder, exactly one E2E, no retry, machine summary/verifier |
| `PX05-35` | cleanup/rollback | exact owned PIDs/ports/temp artifacts only; bounded baseline rollback; protected state untouched |

Static string presence or arithmetic alone cannot prove DOM absence, sole
dispatch, inertness, focus, live mapping, decode failure, or read-only behavior.
Focused tests directly exercise `PX05-02..19`; machine geometry proves
`PX05-20..25`; the full ladder proves the remaining integration radius.

## Exact complete-E2E summary contract

Exactly one no-retry clean-start production journey, `<=180s`, must emit one
machine summary and pass one verifier. The summary identifies the frozen
candidate, shell, Work Order, `FRAM-001-v1` digest, selected source
bytes/SHA/served identity, and all six exact layout records. The journey covers
Hosts 04 and 05, one calm Host05-to-06 replacement, sole Host 06 USE, one real
L02-03 miss and scoped remediation, Close and Escape, reload and Meadow return,
fresh transfer, closed-note explanation, ownership/confidence/mastery,
completed read-only USE, unchanged structured-packet continuation, no Host 07
expression, later rail, equal MH-40 outcomes, null deltas, `successor=null`,
zero external requests, zero runtime errors, focus/forced-color/reduced-motion
evidence, budgets, and owned cleanup. A failed E2E authorizes no retry.

## Files, budgets, rollback, and hard stop

Combat may change only the product/test/manifest/report paths permitted by
`FRSH-005-v1`. `modelChoiceExercise.js`, all `L02-03` curriculum, save schema,
dependencies, accepted media, Hosts 07+, later rail, and every unlisted path are
patch-forbidden.

Caps remain: affected/global JS `<=1,679,393 / 1,703,258`; affected/global CSS
`<=119,547 / 119,672`; affected/global modules `<=218 / 222`; source maps `0`;
selected raster `<=12,000,000`; result exact `18` media and
`37,410,731+selectedBytes <=49,410,731`; decode `<=250ms` cold / `<=100ms` warm;
image ready `<=750ms`; CLS `<=0.01` attributable / `<=0.05` total; activation
`<=2ms`; sampled task `<=100ms`; focused/related/full/build and E2E times exact
to the shell.

Rollback is bounded to exact Host 06 product/config/test/E2E, `FRRC-003-v1`,
`FRAM-001-v1`, the exact new raster/provenance, and cycle reports, restoring
pre-existing permitted blobs explicitly to `a91763e...`. No repository reset,
broad cleanup, accepted-media change, user/untracked change, or planning-history
erasure is allowed.

Hard stop is immediate after exact `L02-03` mastery. No Host 07 expression,
Crown/Witness/City/later-host work, Measured Horizon literary change, branch,
lesson, reward, access, identity, authority, response, successor, RP-013, or
post-ending content is authorized.

## Variance, protected state, and maturity

Variance classification: **none discovered**. Combat retains discretion only
over helper/ref/component names and code factoring inside permitted paths.
Quartermaster retains final prose and lawful source selection. The shell is not
altered.

All thirteen inherited records remain separate and **OPEN**: VR-17, VR-23,
VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage 4,
VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope record
remains **OPEN**. This Tactical orientation re-emitted disclosed filenames in
bounded status/search output; those are process-only recurrences and close
nothing.

VR-65 remains exactly **`DEFERRED LIMITATION / RELEASE-PROCESS ONLY /
NON-GATING / OPAQUE EXTERNAL QA RESIDUAL`**. Its contents and meaning remain
unknown and inaccessible. Repository QA quarantine, protected PDF, training
directory, real browser/profile/save, hidden lore, user work, accepted-media
bytes, managed/temp roots, and opaque residuals were not opened or changed.

Maturity impact: none. `FR-03` remains continuity `FR2`; physical-host
expression `FR0 - 1 accepted shared compression / 1 exact / 10 missing`;
learning `FR2`; behavior/save/recovery `FR1`; final-purpose content `FR2`;
presentation `FR3`; and prior bounded release proof `FR4`.

## Validation performed and evidence limits

- Read the active authorities, registry, full Tactical profile, complete
  `FRSH-005-v1`, `FRDT-005-v1`, `FRWO-005-v2`, and `FRVE-005-v2`.
- Inspected exact current Drowned registration, Host 05 state/actions/focus,
  accepted-source rendering, generic launcher, Terminal inertness/focus,
  model-choice sanitizer/session, save projection, reload, Meadow return, and
  cited focused tests at exact local source `2afc3cc...`.
- Inspected no media byte, candidate, manifest tuple, managed output, OS-temp
  candidate, browser, real save, hidden lore, protected content, or VR-65.
- Ran no game, test, build, preview, E2E, generator, import, cleanup, external
  service, automation, schedule, release, or maturity operation. Therefore no
  as-built pixel, decode, live geometry, performance, served identity, or E2E
  evidence is claimed.

## Exact Combat handoff

One fresh Combat Engineer / `combat_engineer` must read `FRSH-005-v1`,
`FRDT-005-v1`, and this complete `FRPX-005-v1`. Implement only the inert
null-first registry, pure guard, conditional source/legacy-launcher boundary,
Host05-to-06 order, exact action/focus/recovery behavior, predeclared seven copy
slots, focused/related tests, and `FRRC-003-v1`. Freeze and commit the code
candidate; then run the exact read-only seventeen-file gate, create immutable
`FRAM-001-v1`, commit evidence, push, and prove `HEAD == origin/main` before any
Quartermaster attempt.

Combat must not populate candidate values, read/inspect pixels, generate,
select, import, reveal, write final prose, alter `L02-03`, change save/route/
world/ending, begin Quartermaster, advance maturity, close an OPEN record,
inspect VR-65, or cross the hard stop. Issue `PRODUCTION FUNCTIONAL`, `REVISE`,
or `HOLD` and synchronize the next handoff.
