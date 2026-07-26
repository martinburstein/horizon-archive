# TD-004 Image Specialist corrected polish review

## Document control

| Field | Value |
|---|---|
| Stage | Image Specialist |
| Agent ID | `image_specialist` |
| Test drive | `TD-004` |
| Shell | `SS-RP004-THREE-CURRENT-v1` |
| Slice | `TD-004-RP004-THREE-CURRENT-v1` |
| Campaign address | `RP-004 / SC-05 / TR-00-TR-40` |
| Starting commit | Quartermaster correction `82fc431ff7209165039b49af41c8ed96cc9169e3` |
| Functional authority | `08-FUNCTIONAL-BUILD-REPORT.md`, `FUNCTIONALLY COMPLETE` |
| Content authority | `09-CONTENT-ASSET-LEDGER.md`, `CONTENT COMPLETE - TD004-VAR-001 CORRECTED` |
| Production budget | `PBA-TD004-v1` |
| Disposition | **`PRESENTATION COMPLETE — CORRECTED`** |

This correction pass produced no image. It did not regenerate, edit, replace,
or republish the one existing reveal.

## Exact build reviewed

The Quartermaster candidate directly imports the registered SC-05 runtime
master:

- source:
  `Visual Direction/Production Masters/2026-07-26-rp004-three-current-runtime-master/sc05-three-current-panorama-runtime-master-v1.webp`;
- dimensions: `3840 x 2160`;
- bytes: `2,163,752`;
- SHA-256:
  `B6E0F34A917732DBB7B66B65968198CFC068BC650AC00CD8A01F095A6109F63F`;
- emitted production asset:
  `sc05-three-current-panorama-runtime-master-v1-VoJlZWmR.webp`, with the
  exact same bytes and hash; and
- derivation: deterministic Pillow `12.2.0` RGB resize from the exact existing
  reveal to `3840 x 2161` with Lanczos, one lower-edge pixel trimmed, then q100
  method-6 WebP encoding.

The larger raster is an honest responsive-sampling derivative. It does not
contain or claim native 4K source detail.

The corrected production build is:

| Output | Exact identity |
|---|---|
| JavaScript | `index-589WID4d.js`; `1,247,036` bytes; SHA-256 `ABAAF0A8DA6B11AB55A862917622F9AE0EEB5938E16041B5722D12A3C55435C4` |
| CSS | `index-DVnUbAwl.css`; `85,151` bytes; SHA-256 `9222AAE71766D4E9DC7ACFA8D2FEB16F958D5D1CDC36C158982075C602D4F985` |
| Modules | `183` |
| Build time | Vite `19.30s`; wall `21.838s` |
| Runtime media | `21,536,123` bytes |
| New runtime media | `2,163,752` bytes |

An isolated `127.0.0.1:5184` production preview returned HTTP `200` for the
root, JS, CSS, and SC-05 master. Served JS, CSS, and image bytes/hashes were
identical to `dist`. Only the owned preview was stopped, and port `5184` was
clear afterward.

## Presentation findings and corrections

The direct master exposed one exact presentation defect that the placeholder
could not reveal: the shared desktop shell-width cap reduced the TD-004 world
to a center-only cover crop. The cyclic/tensioned center remained visible,
but most of the porous left relation and jointed right relation fell outside
the world pane. That failed the shell requirement that the three equal
relations remain simultaneously legible.

The bounded correction:

- lets only a canonical host containing `.three-current-reach` use the full
  available stage width at the shared desktop-height breakpoint;
- preserves the issued `3fr / 2fr` world/panel split, `object-fit: cover`,
  undistorted first-person framing, and sixty-percent world dominance;
- retains the complete 16:9 composition at narrow and effective-`200%`
  reflow; and
- changes the narrow action group from sticky to natural source-order flow so
  long learning forms are not visually interrupted or overlaid.

No controller, component copy, state, route, intent, evidence, evaluator,
focus destination, persistence, save, privacy, world image, image bytes,
asset import, audio, or invariant-world behavior changed. Two source
assertions lock the TD-004-only wide-stage rule and natural narrow action
flow.

## Exact responsive and crop evidence

Five representative storage-free states were launched independently:

1. `cm50-three-choice-route-ready`;
2. `tr10-relations-none-recorded`;
3. `tr30-ai901-transfer-neutral`;
4. `tr30-save-failed-last-good`; and
5. `tr40-verified-restore`.

Each was measured at exact DPR-1 `1920 x 1080`, `1366 x 768`, `390 x 844`,
and width-equivalent effective-`200%` `768 x 900`: `20` state/layout
combinations.

| Gate | Corrected result |
|---|---|
| Outer horizontal containment | PASS in `20/20`; document client width equaled scroll width |
| Desktop outer containment | PASS; every `1920 x 1080` state remained `1920 x 1080` with no outer scroll |
| Wide world dominance | PASS; world width share `0.600` |
| Wide registered crop | PASS; worst measured normalized crop `x 0.194-0.806`, retaining meaningful portions of left porous, center tensioned, right jointed, and the capped return |
| Laptop registered crop | PASS; normalized crop `x 0.192-0.808` in the high-density state |
| Narrow/effective-200 crop | PASS; full normalized `x 0.000-1.000` 16:9 composition |
| Runtime master identity | PASS; every state decoded `3840 x 2160` from the emitted SC-05 asset |
| Text fit | PASS; zero measured heading, paragraph, list, label, legend, or button horizontal text overflow |
| Required controls | PASS; minimum `44 x 44 CSS px` |
| Required actions | PASS; reachable through native panel or page scrolling |
| Focus/status | PASS; the expected `h1` held entry focus and exactly one polite atomic status existed |
| Console/page/network | PASS; zero warning/error/page errors and local-only requests |

Original-resolution and rendered desktop inspection show:

- suspended material moving through the perforated porous left bed;
- a braided, repeatedly collared tensioned center carrier;
- segmented jointed refractory structure on the right;
- all three leading into the same bounded glass-ceramic-capped apparent
  return; and
- world-first framing with no stretch, pixel fabrication, semantic hotspot
  displacement, or one relation presented as correct.

The image supplies no interactive hotspot overlay; the observation actions
remain in the separate semantic interface. Crop registration therefore
preserves the structural evidence those actions describe without turning
image position, color, glow, or motion into an answer.

## Non-color and accessibility presentation

A grayscale desktop world capture was inspected at the worst high-density
wide crop. Particle/porous texture, braided tension, repeated joint
boundaries, and the solid capped return remain separable without hue.

Forced colors and reduced motion were jointly emulated for route-ready and
high-density transfer states at all four exact layouts: `8/8` combinations.

- forced colors removed the decorative world falloff and preserved system
  borders, native controls, text, grouping, and `Highlight` focus;
- every required control remained at least `44 x 44 CSS px`;
- all TD-004 animation and transition durations were `0s`;
- panel scrolling reported `scroll-behavior:auto`;
- available/recorded/saved/failure meaning remained textual and structural;
  and
- no audio, motion, position, color, or glow was the sole carrier of meaning.

The runtime alternative text names suspended matter, cyclic pressure,
conducted heat, three equal handling relations, and only an *apparent* capped
return. It assigns no workload, answer, purpose, destination, access,
permission, authority, or response.

Human screen-reader speech, physical switch hardware, and native platform
forced-colors hardware were not exercised. Deterministic semantics, focus,
browser emulation, target size, and width-equivalent review passed.

## Invariance, artifact, and authority review

Source, runtime, and the five representative states use the same directly
imported world master. Observation, course work, miss, save failure, verified
restore, and return change only the separate interface; no answer, success,
failure, save, or route state changes the world image.

Original-resolution and crop review found no person, protagonist, hands,
body, face, human shadow/reflection, ship, occupant, readable text,
pseudo-writing, UI, logo, watermark, arrow, route marker, opening event,
portal, destination, reward, access, identity, permission, authority,
correctness cue, external action, or world response. The cap remains a solid,
non-traversable apparent return.

The derivative preserves the source's generated incidental anatomy. Those
details remain non-canonical and authorize no pipe, road, canal, bridge,
rail, platform, human architecture, native mechanism, purpose, control
surface, route, destination, hidden lore, RP-005 content, RP-013, successor,
or post-ending content.

## Sole reveal revalidation

The named visual checklist item remains:

`[x] RP-004 / SC-05 - three equal physical relations remain distinct at the apparent common return`

| Field | Revalidated value |
|---|---|
| Asset | `Visual Direction/Production Masters/2026-07-26-rp004-three-current-capped-return-reveal/rp004-three-current-capped-return-v1.png` |
| Dimensions | `1672 x 941` |
| Bytes | `2,764,920` |
| SHA-256 | `CE7FDDF3694FBE0912B03172C6A0FE2DC9FD8B42ED2AFBB1857D54A02AD3C83F` |
| Generator/mode | OpenAI built-in `image_gen`; exactly one original generation |
| Prompt | Exact unchanged prompt in the neighboring `PROVENANCE.md` |
| Provenance | Complete neighboring `PROVENANCE.md`, scene sheet, prompt-provenance log, and Demo Increment record |
| Runtime status | Source reveal remains byte-identical, canonical physical-layout reference only, and not imported |
| Additional generation/edit count | `0` |

The separately registered WebP derivative is runtime-integrated; this does
not turn the source PNG into a runtime asset or a native-detail
`SC-05-PANORAMA-MASTER`. The source reveal was not edited, replaced,
regenerated, or republished in this correction.

## Functional regression and budget evidence

| Gate | Result |
|---|---|
| Focused TD-004 connected suite | PASS, `33/33` |
| Related TD-003/TD-004 selected suite | PASS, `48/48` |
| Full game suite | PASS, `805/805` |
| Readiness validators | PASS, `15/15`: `CUM-01`, `RP-002` through `RP-012`, `SIM-01` through `SIM-03` |
| Production build | PASS, `183` modules in `19.30s` |
| Budget validator | `PBA-TD004-v1 PASS` |
| JavaScript | `1,247,036 <= 1,255,149`; headroom `8,113` |
| CSS | `85,151 <= 85,789`; headroom `638` |
| Modules | `183 <= 187`; headroom `4` |
| New runtime media | `2,163,752 <= 4,194,304`; headroom `2,030,552` |
| Aggregate runtime media | `21,536,123 <= 23,566,675` |
| Patch integrity | PASS, `git diff --check` |
| Fixture cleanup | PASS; temporary screenshots/results removed and port `4176` clear |
| Preview cleanup | PASS; owned preview stopped and port `5184` clear |

The existing non-blocking Vite large-chunk advisory remains. CSS headroom is
now only `638` bytes and is not a rolling entitlement.

## Variance status and limitations

`TD004-VAR-001` is **implemented and Image-validated, pending fresh
Intelligence classification**. The required SC-05 runtime master is directly
imported, presentation-corrected, provenance-complete, invariant, accessible,
within budget, and independently revalidated by this stage.

Remaining honest limitations:

1. The runtime master is deterministically resampled from `1672 x 941`; it
   does not contain or claim native 4K capture detail.
2. Native human assistive-technology speech, physical switch hardware, and
   Martin's browser/device persistence remain unclaimed.
3. English remains the only integrated locale.
4. Fresh independent Intelligence Tier 5 is still required; this stage does
   not release TD-004.

## Files changed

- `horizon-archive-game/src/styles.css`
- `horizon-archive-game/test/threeCurrentReachUi.test.js`
- this corrected Polish Review
- `TD-004/11-AS-BUILT-RECONCILIATION.md`
- `TD-004/STAGE-METRICS.json`
- `Concept Art Book/scenes/SC-05-three-current-reach.md`
- `Concept Art Book/prompt-provenance-log.md`
- `Production Pipeline/demo-increments/DI-001-city-threshold.md`
- runtime-master neighboring `PROVENANCE.md`
- source-reveal neighboring `PROVENANCE.md`

No raster image changed.

## Disposition

**`PRESENTATION COMPLETE — CORRECTED`**

The exact SC-05 world now remains world-dominant and simultaneously legible
through its three distinct structural relations and capped apparent return at
required wide, laptop, narrow, effective-`200%`, grayscale, forced-color, and
reduced-motion presentations. Functional/content behavior is unchanged,
every validation and budget gate passed, and the single reveal remains exact
and reference-only.

## Exact Intelligence Officer handoff

- **Stage / agent:** fresh Intelligence Officer / `intelligence_officer`
- **Starting commit:** the dedicated corrected Image Specialist commit
  containing this review; resolve its immutable hash from Git history
- **Shell:** `SS-RP004-THREE-CURRENT-v1`
- **Variance:** classify `TD004-VAR-001` from the Quartermaster correction and
  this `PRESENTATION COMPLETE — CORRECTED` evidence
- **Candidate:** functionally complete; content correction complete;
  presentation correction complete; one exact reference-only reveal; one
  directly imported provenanced SC-05 runtime derivative; no added generation
- **Independent objective:** run a fresh complete Tier 5 release, verify exact
  build/media identities and registered crop behavior, classify every
  variance, update the master plan only from accepted as-built evidence, and
  record `AS BUILT RELEASED`, `REVISE`, or `HOLD` honestly
- **Synchronization:** no push was made by Image Specialist; replace
  `NEXT_INSTANCE_HANDOFF.md` only from the fresh Intelligence release
- **Hard stop:** no RP-005 runtime route/content, RP-013, successor,
  post-ending content, hidden lore, external action, world response, access,
  identity, authority, exam standing, or exam guarantee
