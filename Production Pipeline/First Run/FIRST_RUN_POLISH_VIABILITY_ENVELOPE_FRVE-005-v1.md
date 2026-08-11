# Horizon Archive First Run Polish Viability Envelope

Envelope ID: `FRVE-005-v1`

Stage: Office of Science Administrator / `office_of_science_administrator`

Work Order: `FRWO-005-v1 / Stranded Lens Cradle - One New Source and Fixed
Lesson Integration`

Disposition: **`HOLD / BUILT-IN MANAGED-INGRESS CONTRACT NOT AUTHORIZED`**

Date: **2026-08-10**

Science source: `22dd9de3f8e6241cb6c3c38a8e31c2c925876ab0`

Baseline / continuity: `FRPB-001-v2` / `FRCL-004-v2`

Released authority: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Released product candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Planning controls: `FRRM-005-v1` / `FRSB-005-v1`

## Science finding

The one-source product, canon, state, learning, access, PBA, provenance,
validation, and rollback envelope is technically coherent. The current Work
Order is nevertheless not executable with the currently available built-in
image-generation path.

The installed `imagegen` authority says built-in generation first saves output
under `$CODEX_HOME/generated_images/...`; it exposes no dependable destination
argument. The callable tool accepts only a prompt and optional image-reference
inputs. It exposes no size, output-format, output-count, or output-path field.
Omitting both image-reference fields can guarantee new generation, and one
sequential call can account for one output, but Science cannot guarantee that
the first output byte originates in the Work Order's required fresh GUID child
of resolved OS temp.

The built-in managed location is outside the Horizon workspace and can
plausibly serve as a one-file **tool-owned ingress** without weakening the
rejected-draft, no-import, or no-reveal guarantees. It cannot serve as that
ingress under literal `FRWO-005-v1`: the Work Order says every attempt begins
inside the GUID OS-temp child and forbids a draft or cache elsewhere.

This mismatch is a bounded Operations staging/cleanup variance, not a new
Martin media-authority decision. Martin already authorized one new Host 06
source. Allowing one exact tool-returned managed pathname as ingress would not
change the one-source cap, three-attempt cap, product path, canon, lesson,
route, media acceptance, or reveal boundary. Science may not silently issue
that variance itself.

A second current-control gap reinforces HOLD. Released evidence proves the
aggregate accepted runtime inventory `17 / 37,410,731`, but no current control
freezes the required per-file byte length and SHA-256 manifest for all
seventeen accepted assets. Science is prohibited from inspecting media to
create that manifest. Operations must move exact manifest production to a
read-only pre-generation Combat/manifest gate while keeping every accepted
byte immutable.

No asset, prompt, coordinate, candidate, or source mapping is selected by this
HOLD. The conditional envelope below is complete so Operations can revise only
the two blocked execution controls rather than reopen product or continuity.

## Answers to the twelve Work Order questions

### 1. Generator capability, output envelope, and maximum attempts

**Current result: FAIL / HOLD.** The available built-in generator can create a
brand-new raster without accepted-media input and can be called sequentially
once per attempt. It cannot satisfy the literal output-origin requirement or
guarantee output size/format before generation.

The only acceptable conditional source envelope is:

- one brand-new `stylized-concept` landscape per call;
- no `referenced_image_paths`, no conversation image input, no accepted-media
  input, and no edit/variation operation;
- maximum three calls, sequentially, one returned raster per call;
- every call uses the same shell-frozen builder-honest specification; a prompt
  revision consumes the next ordinal;
- selected format `PNG`, exact `3840 x 2160`, exact `16:9`, opaque 8-bit sRGB,
  browser-decodable, no alpha/transparency, no text or executable metadata;
- any other format, size, count, decode result, or byte excess is a rejected
  attempt and still consumes its ordinal;
- no upscale, alternate export, crop, edit, variation, inpaint, outpaint,
  derivative, or fourth attempt; and
- output from all three failures means `HOLD`.

The shell-approved source specification must describe a premium contemporary
first-person same-basin Drowned view; one weathered lens inside one tilted
conformal cradle on an existing dry reach; Host 05 lens-fragment continuity;
visible drainage and stress contacts; horizon reflection; old Builder
materials and multiple stewardship eras; quiet scientific uncertainty; no
body, people, human controls, symbols, UI, lesson diagram, response, reward,
invitation, or accepted image input.

### 2. Objective physical rejection rubric

Prompt intent and self-reported success are never evidence. Quartermaster must
reject an attempt when any one predicate fails at original resolution:

1. A single tight physical rectangle cannot contain the complete lens and
   cradle relation.
2. Less than `80%` of the visible lens body lies within the projected inner
   cradle boundary, or the lens reads beside, behind, through, or in front of
   an empty aperture rather than nested inside it.
3. The cradle's principal axis is not visibly tilted `12-35 degrees` from
   image horizontal.
4. Fewer than two distinct load/stress contacts visibly couple lens, cradle,
   and supporting fabric.
5. Fewer than two continuous drainage seams lead away from the cradle toward
   basin drainage without implying a player-caused drain.
6. The relation intersects live water, lacks a visible dry clearance of at
   least `2%` of source height, or lacks one continuous dry material approach.
7. Fewer than three lens-like fragments form a material cue from the Host 05
   side of the composition toward, but not into, the activation rectangle.
8. A horizon/reflected horizon does not cross at least `25%` of the visible
   inner lens width before any interface is present.
9. The view is not first-person, reads as a cutaway/diagram/teleport/second
   basin, or shows a body, hand, shadow, reflection, companion, ship, human
   path/control, readable text, glyph, face, or prior-human trace.
10. The host cannot be separated from live water, the Host 05 approach cue,
    return-like ridge, Crown, distant Tidal Lens, or any second lens/cradle
    candidate by the schema in answer 5.
11. Same-basin material continuity is not independently legible through water,
    ceramic ribs, smoky phase glass, drainage, corrosion/mineral deposition,
    repair seams, and old process routing.
12. The scene resembles a native model/deployment/configuration diagram,
    indicates a best answer, or implies reaction, recognition, reward, access,
    authority, invitation, purpose certainty, or hidden lore.

Rejection codes are the stable ordinals `PHY-01` through `PHY-12`. A visually
strong source that fails one code has zero product or reuse authority.

### 3. Source bands, safe zones, and composition tolerance

The exact selected raster must use normalized source coordinates. These are
acceptance bands, not candidate coordinates:

| Band | Required normalized envelope |
| --- | --- |
| top status-safe context | `x=[0,1], y=[0,.10]`; no essential physical fact |
| complete Host 06 relation | wholly inside `x=[.34,.70], y=[.30,.74]` |
| tight relation rectangle | width `.30-.36`; height `.30-.40` |
| Host 05 fragment approach cue | wholly inside `x=[.04,.30], y=[.56,.88]` |
| same-basin distant context | `x=[.70,.98], y=[.08,.56]` |
| live-water context | may occupy `x=[.68,.98], y=[.62,.92]`, but cannot intersect the relation or dry approach |

The complete relation and approach cue must each retain `>=99.5%` area and
their measured centers in all six layouts. The host rectangle must be at least
`.30 x .30` of the source so the retained-small layout supplies at least
`96 x 54 CSS px` before any semantic enlargement. Essential fact outside the
bands, a needed alternate crop, or a need for raster/vector repair, synthetic
geometry, overlay-created fact, or fourth attempt is rejection.

### 4. Six-layout crop and access contract

Current canonical world presentation is `16:9`. The selected source is exact
`16:9`; runtime must use one `<img>`, `object-fit: cover`, and centered
`object-position: 50% 50%` for this source at every layout.

| Layout | Requested viewport | Visible selected-source bounds | Minimum result |
| --- | ---: | --- | --- |
| desktop | `1920 x 1080` | `x=[0,3840], y=[0,2160]` | full source |
| laptop | `1366 x 768` | `x=[0,3840], y=[0,2160]` | full source |
| narrow | `390 x 844` | `x=[0,3840], y=[0,2160]` | full source |
| effective `200%` | `768 x 900` | `x=[0,3840], y=[0,2160]` | full source |
| retained small | `320 x 180` | `x=[0,3840], y=[0,2160]` | full source |
| retained small | `320 x 240` | `x=[0,3840], y=[0,2160]` | `320 x 180` world, full source |

For rendered scene-art width `Rw`, scale is `Rw / 3840`; height is
`2160 * scale`. Any non-centered override, ratio drift, crop, or responsive
duplicate is rejection. The complete relation, approach cue, anchor, label,
and physical center must remain retained; the semantic target must be at least
`44 x 44 CSS px` in every layout.

### 5. Center, hotspot, label, nonoverlap, and source mapping

Candidate-specific values remain `null` until Quartermaster has one exact
candidate. Tactical must freeze this schema; Quartermaster may populate only
its predeclared scalar slots:

```text
source = { path, sha256, byteLength, width=3840, height=2160,
           format="png", color="opaque-srgb-8", attemptOrdinal }
physical = { x, y, width, height, centerX, centerY } // source pixels + normalized
activation = { x, y, width, height }                // normalized source
label = { insetOuterCss=3, insetTextCss=5 }
protected = { host05Cue, liveWater, returnLikeRidge, crown, tidalLens,
              secondLensCandidate }
layouts = { desktop, laptop, narrow, effective200, retained320x180,
            retained320x240 }
```

The physical rectangle is the smallest rectangle containing the full lens and
cradle. Its center is the arithmetic center and must lie inside activation
with `>=4 CSS px` clearance at every layout. Activation must contain the full
physical rectangle, remain no more than `1.50x` its area, and be at least
`44 x 44 CSS px`. Label outer bounds are activation inset by `3 CSS px`; text
bounds are activation inset by `5 CSS px`; both must be fully contained with
no scroll or overflow. Physical and activation rectangles must have zero area
intersection with every present protected rectangle and at least `96` source
pixels / `8 CSS px` mapped edge separation in all layouts. An absent protected
feature is recorded as `absent`, never silently omitted.

Mapping uses the answer-4 cover transform, unrounded raw DOM rectangles, and a
strict `1/64 CSS px` floor lattice for recorded live evidence. Machine gates
must prove source/DOM identity, center containment, label containment, target
size, anchor retention, nonoverlap, source order, and geometry stability before
and after focus traversal.

### 6. Fail-closed state and source guard

Combat must create one inert source registry before Quartermaster. Its initial
source and measurement fields are `null` and `enabled=false`. Host 06 remains
absent unless all of these are true:

```text
sanitizeResponsibleAIEvidence(input)?.masteryStatus === "mastered"
&& source.enabled === true
&& source.path === exact permitted source path
&& source dimensions/bytes/SHA-256 equal the selected provenance record
&& source attempt ordinal is 1..3
&& every required measurement slot is finite and passes its predicate
&& the imported image decodes at its declared natural dimensions
```

Then absent model-choice evidence yields `available`; sanitized
`remediation_required` yields that state; sanitized `in_progress`,
`primary_complete`, or `transfer_complete` yields `in_progress`; exact
`mastered` yields `complete`; every other state yields `hidden`. Raw/private
responses, focus, observation, media load, and detection are not inputs.

No new durable field, save version, migration, route flag, detection flag, or
scene mutation is allowed. Missing import must fail the build. Missing or
mismatched runtime decode/metadata leaves Host 06 absent and preserves Host 05
as the safe boundary; it must not restore the generic `L02-03` bypass. Focus
returns to Host 06 when lawful, otherwise Host 05, otherwise the first lawful
scene control. No release may ship the unavailable boundary.

### 7. Sole unchanged `L02-03` routing

**Technically viable after the source gate passes.** Sole Host 06 `USE` may
call the existing `openModelChoiceExercise()` only in `available`,
`in_progress`, or `remediation_required`. The current generic post-Host-05
launcher must be absent while the source contract is enabled; completed USE is
read-only. `LOOK AT` and `TALK TO` write nothing.

The existing `L02-03` assets, eight primary scenarios, eight transfer
scenarios, options, answer key, evaluator, `16/16 + 16/16 + 2/2` strict
progression, actual-dimension remediation, blank retry, closed-note
explanation, ownership/confidence, sanitizer, allowlisted
`modelChoiceEvidence`, private clearing, save projection, restore, and next
structured-packet boundary remain byte/behavior exact. The April 15, 2026
AI-901 objective still explicitly owns choosing a model by capability and
identifying deployment options/configuration parameters; Microsoft Learn's
study guide was last updated July 13, 2026. No learning change is needed.

### 8. Meaning, ownership, and accessibility

Quartermaster owns final prose inside exactly seven slots:

| State | Required meaning | Owner |
| --- | --- | --- |
| unseen as interface | scene predates player; no compatibility or invitation | Scene |
| available | observed lens-inside-cradle fact, provisional name and unresolved stranded/correct hypothesis, local compatibility only | Scene + Pilot + Suit |
| in progress | reconstructable expedition work; physical scene invariant | System + Scene |
| remediation required | only the actually missed model/deployment/configuration tradeoff needs answer-free repair | 901 Teacher |
| complete | allowlisted evidence finalized; lens, basin, Crown, route and world invariant | System + Scene |
| returned | same physical relation; sanitized evidence restores only the lawful boundary | Scene + Suit |
| next boundary | existing structured-packet continuation available without Host 07 expression | Pilot + System |

The fixed accessible host name is `Stranded Lens Cradle`. Native button labels
are exactly `${verb in lower case} Stranded Lens Cradle, ${state}` with state
one of `available`, `in progress`, `remediation required`, or `complete`.
Hidden means no node/name/announcement. Image alternative text must state only
first-person observable lens, tilted cradle, dry waterline separation,
fragments, drainage, stress contacts, and surrounding basin; it may not state
purpose, correctness, invitation, lesson answer, or Builder intent.

Keyboard Enter/Space, pointer, touch, and switch-like activation converge once
on the same native button. Focus, state, and meaning cannot rely on color,
sound, animation, or sight alone. Forced color retains a `3px Highlight`
focus outline; reduced motion disables nonessential motion; no required audio
or timed state exists. Machine and Builders own no line.

### 9. Numeric media, PBA, runtime, and validation budgets

Released predecessor: JavaScript `1,667,393`, CSS `119,247`, production
modules `217`, media `17 / 37,410,731`, source maps `0`.

| Measure | FRWO-005 narrow cap | Global/result cap |
| --- | ---: | ---: |
| emitted JavaScript | `<=1,679,393` (`+12,000`) | `<=1,703,258` |
| emitted CSS | `<=119,547` (`+300`) | `<=119,672` |
| production modules | `<=218` (`+1`) | `<=222` |
| selected raster | `<=12,000,000` bytes | exactly one `3840 x 2160` PNG |
| resulting media | exact `18` files and `37,410,731 + selectedBytes` | `<=49,410,731` bytes |
| source maps | `0` | `0` |
| cold/warm decode | `<=250ms / <=100ms` | direct browser decode |
| cold local image ready | `<=750ms` | one same-origin request, zero external requests |
| attributable / total CLS | `<=0.01 / <=0.05` | reserved `16:9` slot |
| Host 06 activation | `<=2ms` | sampled task `<=100ms` |
| focused / related / cold full | `<=30s / <=60s / <=60s` | same |
| production / fixture build | `<=60s` each | same |
| complete E2E | one invocation, `<=180s` | no retry |

No dependency/lockfile, network service, account, credential, endpoint, live
model at runtime, telemetry, download, clipboard, external storage, service
worker, or Python/WASM runtime is allowed.

### 10. Provenance, staging, cleanup, and no reveal

Current literal staging fails. The bounded Operations variance must require:

1. one built-in call returns exactly one local managed pathname under
   `$CODEX_HOME/generated_images`; no parent listing or discovery search;
2. prove by resolved scalar containment that this exact pathname is outside
   the repository and every protected/user/browser/save/residual root;
3. copy that exact output once into predeclared `attempt-0N.png` inside one
   fresh GUID OS-temp child after proving that child outside the repository;
4. byte-length/SHA-256 identity-prove the managed source and temp copy;
5. delete only the exact tool-returned managed pathname; missing path, unknown
   additional artifact, or deletion failure becomes opaque and stops all
   further attempts;
6. evaluate and retain only scalar provenance for a rejected temp attempt,
   then delete only exact `attempt-0N.png`; cleanup failure stops;
7. copy at most one passing temp file once, byte-identically, to
   `Visual Direction/Production Masters/2026-08-10-first-run-host06/host06-stranded-lens-cradle-master-v1.png`;
8. create only
   `Visual Direction/Production Masters/2026-08-10-first-run-host06/PROVENANCE.md`;
9. never emit `generatedImage`, Markdown embedding, candidate pixels, contact
   sheet, preview export, cycle reveal, publication, or sharing; and
10. never list or touch either opaque residual or repository QA quarantine.

Provenance records Work Order/shell; tool/mode/model identity available at
generation time; exact prompt version; explicit no-image-input declaration;
attempt ordinal; tool-returned output identity; dimensions; byte length;
SHA-256; PNG/color/metadata checks; bounded rejection codes; cleanup scalars;
selected temp/product identity; selected path; runtime/reference status; and
the statement that no accepted media was input, changed, or replaced. It
contains no pixels, rejected pathname, temp path, prompt secret, credential,
or hidden diagnostic.

Before attempt 1, Combat must produce an immutable read-only manifest of each
accepted emitted media filename, byte length, and SHA-256, totaling exactly
`17 / 37,410,731`. Any drift stops generation. That pre-generation proof does
not authorize Combat to generate or select media.

### 11. Validation ladder

No production ladder runs under this HOLD. A revised Work Order/shell must
require, in order:

1. exact authority/ancestry, bounded diff, protected boundary, game-on-paper
   hash, accepted-media per-file manifest, selected digest/bytes, provenance,
   attempt count, managed-ingress/temp containment, cleanup, forbidden-path,
   and no-reveal proof;
2. original-resolution candidate review against `PHY-01..12`, PNG chunks,
   dimensions, opacity, metadata, byte cap, and direct decode;
3. machine six-layout source/physical/semantic/label/center/anchor/retention/
   nonoverlap/target geometry and focus-stability proof;
4. focused source guard, pre-mastery absence, Host 05-to-06 order, LOOK/TALK/
   sole USE, duplicate-launcher absence, state, focus, Close/Escape, return,
   reload, malformed evidence, and decode-failure tests;
5. all current model-choice cases plus one actual miss, scoped answer-free
   remediation, blank retry, transfer, explanation, ownership/confidence,
   mastery, private-free persistence, and restore;
6. related Hosts 04/05, Meadow return, unchanged next boundary, no Host 07,
   Witness/City/later rail, Demo Tour, both MH-40 outcomes, null deltas, and
   `successor=null` regression;
7. exact sorted `40/40` curriculum/readiness validators and cold full suite;
8. production and TD-012 fixture builds, exact JS/CSS/module/media/source-map
   PBA, served-to-disk identity, offline/same-origin request proof, decode,
   task, and layout-shift budgets;
9. exactly one non-overlapping clean-start-to-MH-40 E2E with Host 04, Host 05,
   Host 06, real `L02-03` recovery/mastery, reload/return, unchanged rail,
   equal outcomes, zero runtime errors, one summary, and one verifier; and
10. exact owned-process/artifact cleanup, protected and opaque residuals
    untouched, candidate freeze, and later push-gate synchronization.

Automated access evidence is not human assistive-technology certification.

### 12. Exact rollback

There is no product/media/test/manifest delta from this Science HOLD.

For a later candidate, rollback removes only the exact new source,
`PROVENANCE.md`, bounded Host 06 product/config/test/E2E delta, new release
command manifest, and cycle reports. Restore every pre-existing permitted
product/test path to its exact blob from `a91763e...` by explicit path; do not
reset the repository or erase later planning history. Remove only files first
introduced by the bounded candidate after proving their exact path and digest.

Rollback must not touch accepted media/provenance, Host 04/05, curriculum,
save schema, dependencies, Host 07+, Witness, City, later rail, Measured
Horizon, user/untracked work, browser/profile/save, protected roots,
repository QA quarantine, managed files not returned by the exact generation
call, or either opaque residual. A failed managed/temp cleanup remains an
opaque stopped condition; it never authorizes parent enumeration or recursive
deletion.

## Reused systems and blocked utility

Reusable systems are the accepted hotspot renderer, canonical `16:9` frame,
sanitized evidence projection, model-choice exercise, Terminal shell,
save/restore, Drowned return, forced-color/reduced-motion system, Demo Tour
isolation, PBA controls, served identity, and complete rail.

The blocked utility is not the generator's visual capability. It is the
literal output-origin/cleanup contract plus the missing accepted-media
per-file manifest. Operations can bound both without altering product or
continuity: approve the managed one-file ingress and move manifest production
to a read-only pre-generation Combat gate. Science must revalidate that exact
revision before Mission.

## Maturity, route, and protected state

No maturity cell, host inventory, candidate identity, or release proof
advances. `FR-03` remains `1 accepted shared compression / 1 exact / 10
missing`; the forty-host inventory remains `6 exact / 1 accepted shared
compression / 32 missing / 1 unadvanced Witness expression`.

Hosts 07-15, Witness Host 16, the City contradiction, Hosts 17-38, and the
Measured Horizon literary close remain separate and unadvanced. Learning,
privacy, save/restore, offline behavior, access, Demo Tour, equal READY/NOT YET
READY dignity, null deltas, no world response, shared ending, and
`successor=null` remain exact. Accepted media remains `17 / 37,410,731`.

## Process classifications and recurrences

All thirteen inherited records remain separate and **OPEN**: VR-17, VR-23,
VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage 4,
VR-60 Call 9, and VR-61. The Commandant-stage broad First Run filename/search-
scope record remains one additional separate OPEN record. None is waived,
merged, closed, cured, renumbered, or candidate evidence.

This Science stage retains three process-only recurrences:

- the initial broad worktree status re-emitted the three already-disclosed
  untracked pathnames: recurrence under still-OPEN VR-24;
- an initial broad tracked filename locator emitted repository filenames:
  recurrence under still-OPEN VR-23 and the separate Commandant search-scope
  record; and
- a recursive First Run control-tree listing enumerated filenames inside the
  protected repository QA quarantine: recurrence under still-OPEN VR-17.

No protected QA file content was opened or used as evidence. After discovery,
the protected QA area and all disclosed user/residual paths remained untouched.

VR-65 remains exactly **`DEFERRED LIMITATION / RELEASE-PROCESS ONLY /
NON-GATING / OPAQUE EXTERNAL QA RESIDUAL`**. Its contents and meaning remain
unknown. No residual was accessed, inferred, retried, cleaned, moved, or
deleted.

## Validation performed and honest limitations

- Verified exact starting `HEAD`
  `22dd9de3f8e6241cb6c3c38a8e31c2c925876ab0`.
- Read the active workflow, registry, complete Science profile, exact
  `FRWO-005-v1`, `FRPB-001-v2`, `FRCL-004-v2`, founding baseline, guarded
  revalidation, product HOLD, withdrawn Work Order/Operations HOLD, complete
  `FRVE-004-v1`, exact `FRAB-003-v1`, and current map/scoreboard.
- Read the exact relevant Chapter II, Drowned provenance, runtime, model-choice
  sanitizer/evaluator/save/focus, canonical frame, PBA, release-manifest, and
  focused test authorities.
- Independently checked the official Microsoft AI-901 study guide on
  2026-08-10: objectives remain the April 15, 2026 set and the page remains
  last updated July 13, 2026. The unavailable
  `foundry-azure-source-priority` skill could not be used; the official source
  was used directly:
  <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901>.
- Read the installed image-generation skill and callable tool schema. No image
  tool was called.
- Ran the focused read-only contract set
  `modelChoiceExercise.test.js`, `sixfoldWeir.test.js`,
  `canonicalFrame.test.js`, and `firstRunPackageContract.test.js`: **30 passed,
  0 failed, 0 skipped**, Node-reported duration `237.7179 ms`.
- Ran no build, preview, browser, E2E, save, learner mutation, media read,
  generation, edit, variation, selection, import, copy, movement, deletion,
  publication, reveal, external service, cleanup, schedule, automation, or
  release operation.

## Exact Operations return

Return to one fresh Operations Planning Major / `operations_planning_major`.
Issue one bounded revision or HOLD for `FRWO-005` only.

The revision may replace the literal first-byte OS-temp requirement with the
exact managed-ingress-to-GUID-temp protocol in answer 10 and move the accepted
seventeen-file byte/SHA manifest to a read-only pre-generation Combat gate.
It must preserve maximum three sequential one-output attempts, no accepted
media input, no rejected workspace entry, exact-path cleanup, at most one
selected byte-identical copy, the two permitted product paths, all numeric
caps, no reveal, and every role/canon/learning/route/save/world/ending
boundary.

This is not permission to use CLI/API fallback, generate a candidate, begin
Mission, weaken cleanup, list the managed parent, accept an unknown tool path,
inspect accepted pixels, or bypass the per-file manifest. If Operations cannot
freeze those two exact revisions, the HOLD remains terminal and the next
decision returns to Martin. Only a revised Work Order returns to a fresh
Science context; Mission does not begin from this artifact.
