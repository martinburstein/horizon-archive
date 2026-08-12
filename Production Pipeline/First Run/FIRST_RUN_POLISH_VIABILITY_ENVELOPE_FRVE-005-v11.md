# First Run Polish Viability Envelope - Center-Safe Host 06 E1

Envelope ID: `FRVE-005-v11`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-005-v13`

Disposition: **`POLISH VIABILITY READY / SOLE E1 / CENTER-SAFE PROMPT V2 /
DICTIONARY-SAFE RESPONSE / REQUIRED E1 RUNTIME IDENTITY AND 30 MB SOURCE-CAP
RECONCILIATION / ZERO API OR MEDIA`**

Date: **2026-08-12**

Science source inspected: `a5030d8f3285f4efcfb1f341f55c53f0a8e18266`

Predecessor release: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Planning authorities: `FRPB-001-v2`, `FRCL-004-v2`, `FRWO-005-v13`,
`FRRM-005-v13`, `FRSB-005-v13`

Transport / parser baseline: `FRVE-005-v10`, `FRSH-005-v1-VR-42`, and the
five retained v11 D1 source controls

Treatment / blueprint: `FRDT-005-v1`, `FRDT-005-v1-VR-01`,
`FRPX-005-v1`, `FRPX-005-v1-VR-01`

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Science decision

The center-safe E1 pass is technically, physically, educationally,
accessibly, and operationally viable. The corrected source bands can contain
one complete lens/cradle relation, one inward Host 05 fragment group, and one
continuous dry approach without overlap with live water or dependence on a
responsive crop. The complete authored sentence remains measurable at the
original `3840x2160` source and all six frozen runtime layouts.

Science therefore issues `POLISH VIABILITY READY` for exactly one future
attempt `{E1}`. E1 begins at the sole future `SendAsync` and is consumed by
every result. There is no E2, retry, relaunch, alternate endpoint/model/
transport, edit, variation, reference input, second output, crop repair,
repositioning, or fallback.

Two pre-production contract corrections are mandatory, not optional:

1. **`REQUIRED CORRECTION / E1 RUNTIME SOURCE IDENTITY`** - the old inert
   runtime and blueprint admit only historical numeric selected ordinals
   `{2,3}`. E1 is a new separately versioned attempt domain and must never be
   mislabeled as either historical ordinal. Mission must require the later
   inert runtime schema, guard, tests, provenance, measurements, and E2E
   identity to use exact `attemptId="E1"`; the obsolete selected-source
   `attemptOrdinal` member must be removed rather than forged. Historical
   ledgers remain unchanged.
2. **`REQUIRED CORRECTION / 4K PRODUCT BYTE ENVELOPE`** - the old inert runtime
   guard still caps a selected source at `12,000,000` bytes, while
   `FRVE-005-v9-VR-01` and `FRSH-005-v1-VR-41..42` lawfully corrected a
   technically valid 4K PNG envelope to `30,000,000` decoded bytes and media
   aggregate `<=18 / 67,410,731`. Mission must require the later inert guard,
   tests, provenance, PBA, served identity, and E2E contract to use exact
   selected-source `1..30,000,000` bytes. Decode/image-ready/performance gates
   remain measured and conjunctive; a large source that misses them is not
   repairable by compression or editing.

These corrections are within the selected Work Order's source-registration,
identity, performance, and PBA scope. They create no product value while the
registry remains null-first. Mission may not omit them or silently retain the
obsolete `{2,3}` / `12,000,000` selected-source conditions.

## Official API basis

Official OpenAI documentation identifies `gpt-image-2` as supporting the
`/v1/images/generations` endpoint, and the current image-generation reference
admits `gpt-image-2` arbitrary `WIDTHxHEIGHT` requests through the experimental
maximum `3840x2160`. It defines GPT image output as Base64 image data and
documents the request options used here: `n=1`, `background=opaque`,
`output_format=png`, and `quality=high`.

Sources:

- https://developers.openai.com/api/docs/models/gpt-image-2
- https://developers.openai.com/api/reference/resources/images/methods/generate

Official capability does not prove account availability, response validity,
candidate quality, selection, performance, or release. Every local gate below
remains fail-closed.

## Frozen `HOST06-GEN-PROMPT-v2`

Prompt identity rules: strict ASCII and UTF-8 without BOM; LF between the
following content lines; the two marker lines and Markdown fence are excluded;
there is no terminal LF. The only change from `HOST06-GEN-PROMPT-v1` is the
`Composition/framing:` line. All other lines are byte-identical.

```text
<HOST06-GEN-PROMPT-v2>
Use case: stylized-concept
Asset type: final runtime 16:9 first-person environment plate for Horizon Archive Host 06
Primary request: Create one premium contemporary, maximum-quality cinematic science-fiction environment view of the Stranded Lens Cradle in the existing Drowned Archive basin. Show one visibly weathered lens resting inside one tilted conformal cradle on an already-dry, above-water local reach. The scene must preserve quiet scientific uncertainty about whether the lens was stranded by a former phase or is exactly where it belongs.
Scene/backdrop: One local next reach of the same enormous flooded Builder phase-processing basin, continuous with the prior Sixfold Weir rather than a second basin, teleport, cutaway, or lesson diagram. Keep a ruler-straight horizon and reflected horizon, restrained atmosphere, and physically legible old process routing.
Subject: The complete lens-and-cradle relation is the single discovery center. At least 80 percent of the visible lens body lies within the projected inner cradle. Tilt the cradle principal axis 12 to 35 degrees from image horizontal. Show at least two distinct load or stress-control contacts coupling lens, cradle, and supporting fabric; at least two continuous drainage seams leading away toward basin drainage; at least 2 percent of source height of dry clearance above live water; and one continuous dry material approach. Show at least three lens-like fragments leading from the Host 05 side toward but not into the activation region. Make the horizon or its reflection cross at least 25 percent of the visible inner lens width.
Style/medium: Feature-film environment credibility and flagship current-generation game key art; photorealistic materials, physically convincing smoky phase glass, ceramic ribs, mineral deposition, corrosion, abrasion, dust, inclusions, refraction, internal reflection, caustics, repair seams, and several visible stewardship eras. Builder beauty must read as accumulated functional civic construction, engineered ecology, maintenance, revision, graceful failure, and nonhuman process rather than generic fantasy ornament or human industry.
Composition/framing: Use a restrained environmental medium-wide view, never a close-up or oversized hero prop. Preserve exact wide 3840 by 2160 landscape intent, first-person eye level, and centered full-source presentation with no required crop. Keep the top 10 percent free of essential physical fact. Keep the complete Host 06 lens/cradle relation wholly within normalized x 0.34 to 0.70 and y 0.30 to 0.74, with a measured tight relation rectangle width 0.30 to 0.34 and height 0.30 to 0.38; no part of the complete relation may exceed that box. Center the relation at normalized x 0.51 to 0.53 and retain clear basin context around it. Move the complete Host 05 fragment group inward, wholly within x 0.18 to 0.32 and y 0.58 to 0.84; no required fragment may occur left of x 0.18. Show at least three individually legible, non-token-like fragments, each retaining a distinct silhouette and material relationship at a 390 pixel wide downsample. Keep the continuous dry approach wholly within x 0.18 to 0.40 and y 0.52 to 0.88 so it visibly joins the fragment group to the lower-left edge of the relation without entering the activation region. Keep all essential Host 05 to Host 06 reading inside the combined center-safe source corridor x 0.18 to 0.70 and y 0.30 to 0.88, legible through scale, silhouette, contact shadow, and material contrast rather than glow, overlay, text, timing, sound, or crop. Reserve same-basin distant context within x 0.70 to 0.98 and y 0.08 to 0.56. Live water may occupy only the right/lower band x 0.68 to 0.98 and y 0.62 to 0.92 and must intersect neither relation nor dry approach. Prohibit crop-dependent essential facts, off-edge breadcrumbs, a second candidate, an enlarged central structure, or responsive repair by alternate image, derivative, zoom, repositioning, overlay, or fabricated alternative text.
Lighting/mood: Restrained natural basin light, horizon reflection caught by the inner lens, sober discovery, deep atmospheric scale, no magical glow, spectacle cue, invitation, reward, activation flash, or world response.
Text: No text.
Constraints: No image input. No protagonist, body, hands, shadow, reflection, portrait, companion, ship, person, face, human path, human control, label, glyph, symbol, interface, overlay, beacon, readable mark, prior-human trace, or native educational graphic. The Machine and Builders do not speak, react, recognize, reward, authorize, invite, judge, explain, move, heal, aim, drain, illuminate, or open anything because of the player. Preserve physical ambiguity and surface-safe canon.
Avoid: Empty ring; lens beside, behind, through, or in front of an aperture; submerged or water-filled cradle; inaccessible scenic landmark; duplicate lens/cradle relation; the distant Tidal Lens as Host 06; generic ruins; terrestrial industrial shorthand; arbitrary fantasy ornament; answer key; model or deployment diagram; purpose certainty; hidden-lore answer; watermark; border; crop-dependent essential fact.
</HOST06-GEN-PROMPT-v2>
```

Validated identity: **`5,139` UTF-8/ASCII bytes / SHA-256
`561a82faa45aed45d2fca50bfb189bfe6e315682ca1289882361939f79455801`**.

Mission must reproduce this exact identity from its retained carrier source
before issuing the shell. A mismatch is `HOLD`; it may not paraphrase the
prompt for execution.

## Center-safe composition proof

One witness geometry proves the corrected bands are mutually satisfiable; it
does not preselect candidate measurements:

```text
relation = x .35, y .35, width .32, height .34, center (.51,.52)
activation witness = x .345, y .345, width .33, height .35
fragment group = x .18..32, y .60..82
dry approach = x .20..345, y .54..86; terminates at activation boundary
live water = x .70..98, y .72..92
horizon/reflection = restrained crossing through inner lens near y .50
```

The relation lies inside `x=[.34,.70], y=[.30,.74]`, its `.32 x .34`
tight rectangle lies inside the `.30-.34 / .30-.38` bands, and its center is
inside `.51-.53`. The fragment group and approach lie inside their respective
inward bands and the combined `.18-.70 / .30-.88` corridor. Relation-to-water
horizontal separation is `.03` source width (`115.2px`), and vertical
separation is `.03` source height (`64.8px`), exceeding the frozen `.02`
source-height dry-clearance magnitude; the approach remains wholly left of
water. The
activation witness contains the physical relation, has area ratio `1.0616 <
1.50`, and can meet the source/semantic separation gates without swallowing
the approach.

With the frozen full-source `16:9`, `cover`, `50% 50%` presentation, no layout
crops the source. Minimum mapped relation/activation sizes are:

| Layout | World width | Relation | Activation | Fragment-group horizontal band |
| --- | ---: | ---: | ---: | ---: |
| desktop | `1920` | `614.4 x 367.2` | `633.6 x 378.0` | `268.8` |
| laptop | `1366` | `437.12 x 261.225` | `450.78 x 268.93125` | `191.24` |
| narrow | `390` | `124.8 x 74.5875` | `128.7 x 76.78125` | `54.6` |
| effective200 | `768` | `245.76 x 146.88` | `253.44 x 151.2` | `107.52` |
| retained320x180 | `320` | `102.4 x 61.2` | `105.6 x 63.0` | `44.8` |
| retained320x240 | `320` | `102.4 x 61.2` | `105.6 x 63.0` | `44.8` |

At the required `390px` downsample, three fragments can each retain an
approximately `9.75px` silhouette with approximately `9.75px` inter-fragment
spacing inside the `54.6px` group band. This proves capacity, not candidate
legibility; Quartermaster must still inspect and measure the actual E1 source.

The witness also leaves room for nested fraction `>=.80`, cradle axis
`12..35` degrees, two distinct contacts, two continuous drainage seams,
source-height dry clearance `>=.02`, one continuous approach, at least three
fragments, and horizon/reflection crossing `>=.25` of inner-lens width. These
facts remain conjunctive private-review predicates and cannot be inferred from
the prompt or witness.

## Request, response, parser, and memory envelope

Mission must retain one new v12/E1 carrier family. The v11 carrier is evidence
and a mechanically reusable baseline, not an executable E1 source. The E1
family must preserve:

- one non-streaming `POST https://api.openai.com/v1/images/generations`;
- exact `gpt-image-2`, prompt v2, `n=1`, `3840x2160`, `high`, `opaque`, `png`;
- inherited environment-only `OPENAI_API_KEY`; boolean nonblank gate only;
- `AllowAutoRedirect=false`, `ResponseHeadersRead`, ten-minute timeout, and
  one `SendAsync`;
- response `1..40,500,000` bytes in bounded `65,536`-byte reads;
- canonical Base64 `4..40,000,000` characters and decoded PNG
  `1..30,000,000` bytes;
- strict UTF-8/no BOM and whole-document syntax/duplicate validation;
- PowerShell 5.1 dictionary-safe, case-sensitive key-set membership;
- required nonnegative integral `created`, exactly one data dictionary, and
  exactly one string `b64_json`;
- exact known request echoes when present; null-or-absent `url` and
  `revised_prompt`; safe known usage integers; bounded unknown metadata only;
- canonical Base64 round-trip and exact decoded-length agreement; and
- disposal/clearing of response stream, response bytes, JSON object/text,
  Base64, decoded bytes, request JSON, and credential at their frozen stage
  boundaries.

The retained semantic parser must pass the same 15-case positive/adversarial
suite as `FRVE-005-v10`, under exact Windows PowerShell 5.1 generic
dictionaries. Any parser regression, prompt mismatch, source mismatch, or
fixture send is `HOLD` before production.

## File identity, materialization, and fresh paths

Mission must use the literal v12 paths from `FRWO-005-v13` and no others:

```text
helper root=C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-v12-7b3e6b6c-f96d-4f5a-91f9-a02be46e560b
helper DLL=<helper root>\Host06FileIdentity.dll
live root=C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-v12-15ae0b5e-04a0-43eb-b6be-0f8ab94f9cc9
stage=<live root>\.attempt-E1-053311a9-3849-42d4-bada-3a7f44c3044c.stage
target=<live root>\attempt-E1.png
decision=<live root>\.attempt-E1.review-v1
product root=C:\Users\marti\OneDrive\Desktop\Horizon Archive\Visual Direction\Production Masters\2026-08-10-first-run-host06
product raster=<product root>\host06-stranded-lens-cradle-master-v1.png
product provenance=<product root>\PROVENANCE.md
```

The v11 native helper source and boundary remain exact: temp-only compilation;
only `GetFileInformationByHandle` over an already-open exclusive
`SafeFileHandle`; current-run source/DLL length and SHA; reflection/PInvoke
proof; one link; no reparse; exact size; no helper close/path/write method;
delete exact DLL then empty helper root nonrecursively before credential
access.

E1 materialization remains `CreateNew`, one bounded write, `Flush(true)`,
handle-bound identity, exclusive reopen/SHA, same-file pre-move identity,
same-directory no-replace move, stage absence, and final-target identity. No
candidate path exists until these gates pass. Any collision, substitution,
drift, alias, reparse, extra link, or cleanup doubt stops fail-closed.

Science validated only the nine exact literal path predicates. Old v7-v11
roots, D1, managed output, opaque residuals, parent/sibling paths, protected
paths, and user state remain inaccessible and cannot supply evidence.

## Technical, physical, and provenance acceptance

Technical selection remains exact: PNG signature, lengths, chunk types/order/
CRC, one IHDR, `3840x2160`, bit depth 8, color type 2, methods zero, exact
sRGB ordering with only allowed gamma/chromaticity/physical metadata, no alpha,
palette, transparency, ICC, text, EXIF, time, animation, private/unknown chunk,
trailing byte, malformed zlib, scanline, filter, or decode defect; one final
empty IEND; isolated browser decode; opaque output; byte cap pass.

Physical selection requires every inherited `PHY-01..12` predicate plus the
stricter v2 source bands. The complete relation and approach must be measured
from actual original-resolution pixels; a beautiful or plausible image is not
evidence. Layout/accessibility selection requires source-center and at least
`.995` area retention at all six layouts, relation/activation/label/protected
measurements, `>=44x44 CSS px`, center clearance, no overlap, required
separation, keyboard/pointer/touch/Enter/Space/speech/switch convergence,
stable focus, `3px Highlight` forced-color focus, reduced-motion parity,
effective-`200%` reflow, no horizontal escape, no clipped required text, and
equivalent factual alt meaning.

Private review is technical-first and no-reveal. ACCEPT requires exact
`technical=true|physical=true|layouts=true|accessibility=true|codes=NONE`.
Any false or uncertain predicate requires truthful objective rejection or
terminal failure. A rejected E1 has zero canon, product, reuse, prompt,
maturity, screenshot, publication, or reveal authority.

Only a conjunctive pass may be copied byte-identically to the exact product
raster and paired with create-new provenance recording Work Order, shell,
transport, endpoint, model/options, prompt-v2 ID/bytes/SHA, exact E1 identity,
selected bytes/SHA, dynamic helper identity, objective PASS facts, immutable
accepted-media manifest identity, product path, and cleanup completion. No
credential, body, Base64, hidden metadata, rejected identity, or diagnostic
may persist.

## Learning, state, privacy, save, offline, and authority

- Host 05 mastery remains the sole Host 06 gate; Host 06 remains the sole
  physical entry to unchanged `L02-03` after lawful enablement.
- The runtime stays null-first until an accepted source, provenance, exact
  measurements, factual alt, and seven owner-correct copy slots are complete;
  `enabled=true` is written last and is not itself proof.
- `LOOK AT` is physical and write-free; `TALK TO` is immediate complete
  silence and write-free; available/in-progress/remediation `USE` calls the
  existing model-choice exercise once; completed `USE` is read-only.
- Existing `8+8`, `16/16 + 16/16 + 2/2`, actual-dimension remediation, blank
  retry, fresh transfer, explanation, ownership, confidence, no-cross-credit,
  Demo Tour zero-credit, and evidence firewall remain exact.
- Only sanitized `modelChoiceEvidence` may persist. Credential, response,
  Base64, source diagnostic, private response, session, focus, timing, media
  diagnostic, candidate, or review state may not enter save or telemetry.
- Save schema/version/projection, malformed-state fail-closed recovery,
  reload, Meadow return, Close/Escape focus, and authorized write-free returns
  remain exact.
- Runtime remains same-origin/offline after packaging: one selected image
  request and zero external runtime requests, dependencies, services,
  credentials, authority, telemetry, or account coupling.
- Scene owns observable fact; Pilot owns provisional naming and uncertainty;
  Suit/System owns compatibility and interface; the 901 Teacher owns only the
  unchanged learning. Machine and Builders own no line.

No state can create a branch, lesson, answer, reward, access, identity,
authority, recognition, world response, prior-human trace, hidden-lore answer,
Host 07 expression, RP-013, successor, or post-ending content. READY and NOT
YET READY retain equal dignity and the same RP-012 ending;
`cityStateDelta=null`, `worldStateDelta=null`, `externalStateDelta=null`,
`authorityDelta=null`, and `successor=null` remain exact.

## Performance, PBA, validation, and cleanup

The immutable accepted-media baseline remains exact `17 / 37,410,731`.
Accepted E1 may produce only `18` media and at most `67,410,731` aggregate
bytes. Affected/global JavaScript remain `<=1,679,393 / 1,703,258`; CSS
`<=119,547 / 119,672`; modules `<=218 / 222`; source maps `0`; cold/warm
decode `<=250ms / <=100ms`; image ready `<=750ms`; attributable/total CLS
`<=0.01 / <=0.05`; activation `<=2ms`; sampled task `<=100ms`. A budget miss
is `HOLD` and authorizes no edit, compression, replacement, or retry.

Validation order is fixed:

1. authority, exact patch scope, source hashes/parser-zero, prompt identity,
   E1 identity, forbidden strings/paths, and exact nine-path absence;
2. Windows PowerShell 5.1 dictionary-safe 15-case parser suite and exactly one
   credential-cleared fixture proving one child, zero credential/request/send/
   E1 activity, and postflight absence;
3. pre-generation inert runtime guard/tests including exact `attemptId="E1"`
   and `1..30,000,000` selected bytes, accepted-media manifest, null slots,
   no import/DOM/name/action, and unchanged launcher;
4. sole private E1 request, strict response/Base64/PNG/identity/materialization,
   original-resolution physical/band/layout/accessibility adjudication, and
   exact decision grammar;
5. after ACCEPT only, byte-identical import/provenance, registry/geometry/
   layouts/copy/alt population, focused Host 05 -> Host 06 -> L02-03 tests,
   learning/privacy/save and adjacent-route regressions;
6. applicable validators, full product tests, clean fixture and production
   builds, PBA, served identity, one isolated non-overlapping no-retry E2E
   `<=180s`, six-layout/live keyboard/focus/forced-color/reduced-motion/error
   review, one summary, and one verifier; and
7. owned browser/process/port/QA-fixture cleanup, exact helper/live/decision/
   stage/target absence, tracked-clean Git identity, and workflow-gate sync.

Cleanup is exact and identity-conditioned. Rejection deletes only the proven
E1 target/decision and exact empty live root. Acceptance deletes the proven
temp target and exact empty live root after byte-identical product import.
Post-import rollback owns only the new Host 06 raster, provenance, registry/
copy/alt/measurement changes, focused tests/evidence, and empty product root.
No repository reset, recursive broad cleanup, accepted-media change,
planning-history erasure, protected-path access, or user-state change is
permitted.

## Risks, hard stops, and variance ledger

- Prompt compliance is stochastic. The exact bands improve feasibility but do
  not guarantee a passing source; uncertainty rejects and consumes E1.
- A center-safe relation can still fail nesting, tilt, contacts, drainage,
  water clearance, fragment legibility, horizon optics, same-basin continuity,
  forbidden content, PNG, accessibility, or performance.
- A technically valid 4K PNG can be large. The corrected 30 MB source/media
  envelope does not waive live decode, image-ready, CLS, task, PBA, or offline
  evidence.
- Runtime identity must not counterfeit E1 as historical ordinal 2 or 3.
- The no-reveal boundary survives Martin's prior curiosity about D1 and this
  new authorization; only private assigned-role review is permitted.

Any credential ambiguity, API/transport/parser/PNG/identity/path/cleanup
failure, unavailable required evidence, protected-boundary concern, or
objective review failure stops the pass. It does not authorize E2, another
looped request, a later host, maturity advance, or an alternate solution.

The Operations-stage process variance remains separate and **OPEN**:
**`UNAUTHORIZED DIVERGENCE / FULL UNTRACKED GIT STATUS ENUMERATED PROTECTED
FILENAMES`**. Science preserves this disclosed classification without
accessing, repeating, querying, or using any emitted filename. This stage uses
only tracked-only Git status and does not claim to close, cure, merge, waive,
or renumber that or any inherited OPEN record. VR-65 remains a separate opaque
non-gating release-process limitation and inaccessible.

Repository QA quarantine, protected PDF, training tree, Martin's real browser/
profile/save, hidden lore, old v7-v11 paths, D1, accepted-media pixels,
managed-output roots, opaque residuals, and unlisted user state were not
opened, listed, searched, inferred, changed, moved, or deleted.

## Validation performed and evidence limits

Science read the complete required intake, full Science profile, complete
Work Orders v11-v13, D1 ledger, v10 viability, v42 shell plus inherited v40-v41
controls, reopened baseline, continuity lock, current map/scoreboard, complete
Host 06 treatment/blueprint and variances, five retained v11 controls, and the
exact current null-first Drowned runtime, App, CSS, and focused test controls.

Offline validation proved the corrected composition arithmetic at all six
layouts and re-exercised the dictionary-safe semantic contract with synthetic
in-memory response fixtures: exact Windows PowerShell `5.1.26100.8875`, generic
`Dictionary<String,Object>`, and `15/15` positive/adversarial cases passed with
zero credential reads, request constructions, API sends, or media. Science
read no credential; constructed or sent
no API request; allocated no helper/live/product root; created, inspected,
decoded, imported, rendered, or revealed no media; ran no product test, build,
preview, browser, E2E, cleanup, production, release, or maturity operation.

No candidate facts, selected bytes, pixel geometry, actual fragment
legibility, technical image validity, decode timing, served identity, or live
layout evidence exists or is claimed. Those remain downstream gates.

## Exact Mission handoff

One fresh Mission Captain reads the complete active intake, full Mission
profile, `FRWO-005-v13`, this complete `FRVE-005-v11`, D1 ledger,
`FRVE-005-v10`, `FRSH-005-v1-VR-42`, treatment/blueprint controls, and only
the exact retained v11/runtime controls cited here.

Mission must issue one separately versioned E1 shell and five new retained
v12/E1 sources. It must preserve the literal paths, exact prompt-v2 identity,
one-send/no-retry domain, dictionary-safe response envelope, native identity,
strict materialization/PNG/private review, no reveal, exact cleanup,
provenance, full validation ladder, and every canon/learning/save/world/ending
boundary. It must explicitly freeze the required `attemptId="E1"` and
`1..30,000,000` runtime/product guard corrections for the later strict
production sequence.

Before `FIRST RUN SHELL READY`, Mission proves strict UTF-8/no BOM, exact byte
length and lowercase SHA-256, parser-zero for all five sources; exact prompt
bytes/SHA in the retained carrier; the 15-case PS5.1 semantic suite; exactly
one credential-cleared fixture with zero request/send/E1 activity; all nine
fresh paths absent; and no product/media/credential/API activity. It commits
the shell, retained sources, and synchronized handoff, then pushes at the
workflow gate and proves `HEAD == origin/main`.

Mission may not invoke production, consume E1, inspect media/pixels, import or
populate product, begin Recon/Tactical/Combat/Quartermaster, run E2E, reveal,
access protected/old/residual state, close an OPEN classification, advance
maturity, skip Host 06, express Host 07, or call `FIRST RUN COMPLETE`.

Office of Science Administrator signs **`POLISH VIABILITY READY /
FRVE-005-v11 / SOLE E1 / CENTER-SAFE PROMPT V2 / REQUIRED E1 IDENTITY + 30
MB RUNTIME RECONCILIATION / ZERO API OR MEDIA / FRESH MISSION NEXT`**.
