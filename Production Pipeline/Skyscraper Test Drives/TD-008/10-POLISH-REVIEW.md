# TD-008 Polish Review - Offset Reach

## Document control

| Field | Value |
|---|---|
| Test drive | `TD-008` |
| Stage | Image Specialist |
| Agent ID | `image_specialist` |
| Starting commit | `e2d3c1760fde85d8cb44e35bd52d390ff3bf4fb5` |
| Shell | `SS-RP008-OFFSET-REACH-v1 / SHELL READY` |
| Address | `RP-008 / SC-09 / OR-00-OR-30` |
| Date | `2026-08-01` |
| Disposition | **`PRESENTATION COMPLETE - THIRD-LINEAGE REVEAL ACCEPTED`** |
| Next recipient | Intelligence Officer / `intelligence_officer` |

## Exact build reviewed

Image Specialist began from exact Quartermaster `CONTENT COMPLETE` commit
`e2d3c1760fde85d8cb44e35bd52d390ff3bf4fb5`, both accepted SC-09 source and
runtime masters, their complete provenance, exact production source and
closed fixture, and `PBA-TD008-v1`.

During the initial pass, no production source, test, fixture, runtime image,
emitted runtime asset, player-facing copy, mechanic, evidence, schema, owner,
focus target, route, return, hard stop, or world meaning changed. Intelligence
later returned the bounded heading-wrap defect `TD008-PRES-001`; the scoped
CSS and source assertion recorded below are the only reopened changes.

| Role | Dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| SC-09 panorama runtime | `3840 x 2160` | `1,715,912` | `B25E90052EECF46ABA9949F47BB1FFF32602C1CB9984F7572F2F311A56E0D366` |
| SC-09 relation-detail runtime | `3840 x 2160` | `2,369,022` | `CA09C4BDFEDC6EFC99538A8403AC43F6DD8DB221A6157434E82AE1A9767FD0B8` |
| JavaScript | `index-L_Jm6-oG.js` | `1,450,176` | `F6BA2083C81ED8FB4685D73E8FEFEFF92AD7ECF81CFBF53F8DEEAD6108D0AA2E` |
| CSS | `index-BJjBVihW.css` | `99,112` | `6BEF0D7BDA63696C96BE14473B936DDFA751795A4EE1A3B7593C5FDD9E2C251D` |

## Presentation decision

The initial review found no bounded production correction. Intelligence's
independent exact-layout matrix subsequently demonstrated one real typography
defect: the frozen longest heading wrapped to four lines at `1920 x 1080`
where at most three are allowed, and five lines at `1366 x 768` where at most
four are allowed. Natural `390 x 844` wrapping and effective-200
`768 x 900` containment already passed. `TD008-PRES-001` corrects only that
returned defect; all accepted asset, interaction, accessibility, and meaning
boundaries remain unchanged.

## Original-resolution asset review

Both `3840 x 2160` lossless sources were independently inspected at original
resolution.

### Panorama

- the laminated glass-ceramic ribbon and dense cellular mantle remain
  separately traceable through the full field;
- a broad open reach prevents the image from implying one universal contact;
- the mauve third continuity remains distinct and does not merge with the
  cellular mantle;
- the dark peripheral mass remains closed, with no framed aperture, door,
  route, reward, or interior claim;
- no protagonist, human trace, text, UI, diagram, face, eye, authority,
  response, or later cue appears.

### Relation detail

- the left region preserves one ordinary familiar ribbon/mantle contact;
- the middle region preserves broad continuous solid host rock between the
  familiar continuities without turning visible non-contact into separation;
- the right rigid mauve continuity remains isolated from the cellular mantle
  top-to-bottom and meets the glass ribbon once at a small lower contact;
- sealed cellular texture remains surface material rather than doorway,
  tunnel, face, specimen cavity, or access affordance;
- the detail is contextually/materially registered to the panorama family and
  is not claimed as a literal pixel crop.

Whole-source grayscale mean/standard deviation remains `59.20 / 37.58` for
the panorama and `47.68 / 30.48` for the relation detail. Material shape,
lamination, faceting, sealed cellular texture, solid offset, boundaries,
caption, and complete alternatives preserve meaning without hue, brightness,
motion, sound, or side-only direction.

## Responsive and accessibility evidence

The isolated storage-free fixture served only at `127.0.0.1:4180` and was
stopped after review. The in-app Browser directly reviewed:

- exact `1920 x 1080` presentation: document `1920/1920`, exact longest
  heading `616/616` client/scroll width, no outer overflow, and one `44px`
  target;
- backend-provided `1280 x 720` laptop-class presentation: document and
  product client/scroll widths equal, exact longest heading contained, one
  atomic status, and one `44px` target;
- arrival, recurrent-contact, comparable-non-contact, cross-family-contact,
  review, save, restore, forced-color, reduced-motion, grayscale, and exact
  longest-copy fixture states;
- visible keyboard focus styling on the native scenario control; and
- zero console warnings or errors across both reviewed tabs.

The Browser viewport capability did not honor requested `1366 x 768`,
`390 x 844`, or `768 x 900` overrides; it remained at `1920 x 1080` or
`1280 x 720`. Image Specialist therefore makes no false claim of direct live
narrow, effective-200, OS forced-color, or OS reduced-motion emulation.
Deterministic production CSS and the closed tests independently preserve:

- the explicit `1366 x 768`, `390 x 844`, and effective-200 reflow
  contracts;
- full centered `object-fit: contain` images below `900px`;
- natural one-column reflow with no fixed narrow height or horizontal escape;
- `>=44px` native controls, persistent labels, one owner/status, and
  deterministic focus;
- system-color forced-color treatment with Highlight focus; and
- disabled animation/transition and `scroll-behavior:auto` under reduced
  motion.

The fixture accepts no URL, arbitrary state, browser storage, file, network,
campaign adapter, protected journey, or production import. No cookies,
profile, local/session storage, IndexedDB, campaign save, or other
Martin-owned browser state was inspected or changed. Intelligence must
independently reproduce the complete live release matrix or return the slice.

## Functional and release validation

| Gate | Result |
|---|---|
| Focused TD-008 normal/protected/UI/fixture | `28/28 PASS`; `0.410s` wall |
| Connected TD-004 through TD-008 and five fixtures | `159/159 PASS`; `0.902s` wall |
| Full product suite | `879/879 PASS`; `6.791s` wall |
| Mapping validators | `11/11 SELF-TEST PASS`; `1.177s` |
| Production build | `PASS`; `203` modules; `7.917s` wall |
| JavaScript / CSS | `1,450,176` / `99,112` bytes; hashes unchanged |
| Runtime media | exact `17` / `37,506,807` bytes |
| New SC-09 runtime media | exact `2` / `4,084,934` bytes |
| Accepted predecessor media | exact `15`; missing or changed `0` |
| `PBA-TD008-v1` | `PASS` for JS, CSS, modules, new-media and total-media caps |
| Served identity | root, two deep fallbacks and all `19` emitted assets: `22/22` HTTP `200` |
| Runtime integration | exactly two SC-09 imports; reveal absent from `dist` |
| Owned cleanup | Browser tabs finalized; ports `4180` and `5193` clear |
| Patch integrity | `git diff --check` PASS |

The reveal is reference-only and does not count as runtime media.

## Intelligence return correction - `TD008-PRES-001`

### Returned evidence and smallest correction

Intelligence's disposable, storage-free matrix established the exact
pre-correction defect above. Image Specialist reopened from exact commit
`01638076aa3b4d045c6266892d7aa4efa368725f` and changed one scoped rule:

```css
.offset-verge[data-active-group="or20_review"] .offset-heading h1 {
  font-size: clamp(1.45rem, 2vw, 2rem);
}
```

The selector applies only to the real TD-008 `or20_review` group. It preserves
the complete exact heading, the one semantic `h1`, owner, focus target,
status, source order, approximately `64/36` desktop world dominance, image
crops, alternatives, caption, controls, and every other group. At wide
layouts it reduces only the returned heading from the general `2.45rem` cap
to `2rem`; at narrow and effective-200 layouts the existing `1.45rem` floor
remains unchanged.

One source assertion now protects both the exact longest copy and this
TD-008-only correction selector. No JSX, player copy, runtime master, reveal,
content, mechanic, canon, state, evidence, schema, save, route, return, focus,
status, forced-color, reduced-motion, or hard-stop source changed.

### Correction validation

| Gate | Result |
|---|---|
| Focused TD-008 normal/protected/UI | `27/27 PASS`; all `720` observation orders retained; `0.425s` wall |
| Production build | `PASS`; `203` modules; Vite `7.56s`; `8.638s` wall |
| JavaScript | unchanged `index-Br7hhc_5.js`; `1,450,332` bytes; SHA-256 `95CA58D345EEF318AA807B9B3B357E8CEAE4882580FB5BED5ABBE79D97FD4FFA` |
| CSS | `index-C733m8E_.css`; `99,210` bytes; SHA-256 `29D0F5D794B66BA8DF40BC45C9A237B608CBA290D5BEAC456BB46DC17757045F` |
| `PBA-TD008-v1` | PASS; JS, CSS, `203 <= 207` modules, media, and reveal exclusion |
| Served production | root, two deep fallbacks, and all `19` emitted assets: `22/22` HTTP HEAD `200` |
| Runtime media | unchanged exact `17` / `37,506,807` bytes |
| SC-09 runtime identities | panorama `B25E9005...D366`; relation detail `CA09C4BD...D0B8`; unchanged |
| Reveal identity | `345900D8...D8D9C1`; unchanged and absent from `dist` |
| Owned cleanup | ports `4180` and `5195` clear |

The Browser runtime exposed no available browser to this returned Image
stage after its required connection troubleshooting. Image Specialist
therefore makes no post-correction live line-count claim. Intelligence must
use its working disposable harness to confirm exactly `<=3` lines at
`1920 x 1080`, `<=4` at `1366 x 768`, and unchanged readable containment at
`390 x 844` and effective-200 `768 x 900`, including no document or panel
horizontal escape, visible focus, one atomic status, and `>=44px` targets.

Correction disposition:
**`CORRECTED - RETURN TO INTELLIGENCE; EXACT LIVE ACCEPTANCE PENDING`**.

## Accepted cycle reveal

### Decision and named checklist

> A rigid third material lineage can make one bounded contact with the
> laminated ribbon while the cellular mantle remains separately traceable and
> visibly isolated.

Named checklist candidate:

`[x] RP-008 / SC-09 - one rigid third lineage contacts only the laminated
ribbon while the cellular mantle remains visibly isolated`.

### Visual-canon comparison

The reveal avoids TD-004 convergence, TD-005 receiver population, TD-006
contact-order macro, TD-007 recurrent-contact medium-site composition, and
the recent braid/carrier/instrument/threshold object subjects. It uses a
distinct `24-30 mm` high-oblique vast field whose subject is a rigid third
lineage entering an already occupied reach.

### Generation accounting and identity

- initial private generation rejected before workspace entry because the
  third lineage read as flexible brush/cable material and made a broad
  multi-strand contact;
- one targeted precise-object-edit recovery accepted at original resolution;
- no third attempt, variant, CLI/API fallback, second board, local generation
  endpoint, or runtime integration;
- rejected bytes remain outside workspace, canon, runtime, provenance
  package, commit, and reveal.

| Field | Value |
|---|---|
| Asset | `Visual Direction/Production Masters/2026-08-01-rp008-third-lineage-reveal/rp008-third-lineage-reveal-v1.png` |
| Dimensions/mode | `1672 x 941`, RGB PNG |
| Bytes | `2,878,532` |
| SHA-256 | `345900D8BBF181677A0D5892CB1A47B87729A313ED454F6EECA1E0B738D8D9C1` |
| Board | `9d5428ed-f5bb-41f5-b9cb-c30175ad705a`; item `td008-cycle-reveal`; begin `11`; complete `12` |
| Runtime status | spoiler-safe canonical reference candidate only; not imported or bundled |
| Provenance | neighboring `PROVENANCE.md` with both exact prompts, rejection reason, and QA |

## Variances and limitations

- Formal shell variances: **none**.
- Production presentation defects: **none found**.
- The in-app Browser viewport override limitation is disclosed above;
  Intelligence must reproduce the complete live matrix independently.
- Runtime sources remain deterministic enlargements of accepted
  `1672 x 941` native outputs; no native-4K detail claim is made.
- The relation detail remains a contextual/material registration, not a
  literal panorama crop.
- The reveal is reference-only and awaits Intelligence acceptance unchanged.

## Protected boundaries

- Hidden-lore vault unopened.
- Protected user PDF and training directory untouched and unstaged.
- Martin's browser storage, campaign save, cookies, profile, and session
  untouched.
- Protected RP-008 remains reference-only and unimported.
- No third runtime image, new audio, font, video, source map, network payload,
  Python/WASM runtime, or external service was introduced.
- No universal/exclusive verdict, separation, equivalence, unity,
  coordination, cause, purpose, identity, unavailable contents, reward,
  access, permission, authority, response, world effect, RP-009, RP-013,
  successor, ending, or post-ending content was introduced.

## Files changed

- `Visual Direction/Production Masters/2026-08-01-rp008-third-lineage-reveal/*`;
- `Concept Art Book/prompt-provenance-log.md`;
- this review;
- `Production Pipeline/Skyscraper Test Drives/TD-008/STAGE-METRICS.json`;
- `NEXT_INSTANCE_HANDOFF.md`;
- `horizon-archive-game/src/styles.css` (`TD008-PRES-001` only); and
- `horizon-archive-game/test/offsetReachUi.test.js` (scoped regression only).

## Disposition

**`PRESENTATION COMPLETE - THIRD-LINEAGE REVEAL ACCEPTED`**

The exact Quartermaster build remains unchanged and presentation-complete.
Exactly one accepted spoiler-safe reveal candidate is archived. Fresh
Intelligence Officer reconciliation and independent live release review are
mandatory before TD-008 release.

## Exact Intelligence Officer handoff

- **Stage / agent:** Intelligence Officer / `intelligence_officer`.
- **Starting authority:** Quartermaster commit
  `e2d3c1760fde85d8cb44e35bd52d390ff3bf4fb5`, this dedicated Image
  Specialist commit under the non-recursive convention, shell 05, treatment
  06, blueprint 07, report 08, ledger 09, review 10, both provenance
  packages, exact production build, and `PBA-TD008-v1`.
- **Independently reproduce:** shell line by line; both direct source/emitted/
  served runtime identities; reveal identity and exact two-attempt accounting;
  live `1920 x 1080`, `1366 x 768`, `390 x 844`, and effective-200 matrix;
  grayscale/forced-color/reduced-motion/focus/targets/containment;
  focused/connected/full/readiness/build/release-budget; all predecessor
  media; fixture/protected/later/private exclusions; logs/requests; and owned
  process cleanup.
- **Classify exactly:** no formal variance is claimed; classify the Image
  viewport limitation, native-source enlargement, contextual-not-literal
  detail registration, initial reveal rejection, and reference-only reveal
  status honestly.
- **Master truth:** update only from accepted as-built evidence; close the
  named RP-008 checklist item only if the exact reveal passes unchanged.
- **Protect:** mechanics, evidence, schema, save, route, two-runtime-image
  count, invariant world, exact returns, OR-30 hard stop, hidden lore, user
  files, and Martin's browser/save boundaries.
- **Required output:**
  `Production Pipeline/Skyscraper Test Drives/TD-008/11-AS-BUILT-RECONCILIATION.md`.
- **Required disposition:** `PASS - AS BUILT RELEASED`, `REVISE`, or `HOLD`.

### `TD008-PRES-001` corrected-build addendum

- **Correction baseline:**
  `01638076aa3b4d045c6266892d7aa4efa368725f`.
- **Correction owner:** Image Specialist / `image_specialist`.
- **Exact changed surface:** one TD-008 `or20_review` heading font-size rule
  plus one static regression assertion; no other product surface changed.
- **Mandatory first Intelligence action:** reproduce all four exact live
  layouts and accept only if the frozen `3/4/natural/4` wrap and containment
  contract passes with the exact full heading unchanged.
- **Synchronization:** local dedicated Image correction commit only; no push.
  Intelligence remains the next and sole release role.
