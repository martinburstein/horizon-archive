# Opening demo accessibility audit

## Scope and verdict

Source-and-test gate for title → save creation → character naming → three prologue beats → Chapter I reveal → first Glass Meadow → first Terminal orientation.

**REVISE before calling the opening accessibility-ready.** The flow is keyboard-operable and strongly structured, but the Chapter I → Meadow transition loses programmatic focus and the authored 320 × 240 text is below a reliably readable size. No implementation files were changed.

## Confirmed strengths

1. Opening headings receive programmatic focus on save, naming, each prologue beat, and chapter reveal. Buttons follow a logical DOM order and all opening actions use native controls.
2. Character-name help and errors are associated through `aria-describedby`; invalid input exposes `aria-invalid` and a live alert. NFKC normalization, trimming, allowlisting, a 2–24 character bound, forged-slot rejection, and private-field stripping are unit-tested.
3. Save replacement is stated before the destructive Create Slot action. Cancel and Back provide safe recovery.
4. Decorative title/prologue imagery is hidden; Meadow has a concise first-person alternative; the objective and primary hotspot do not depend on color alone.
5. First-Terminal orientation focuses its heading on entry and each step, uses named native buttons, a polite status region, unlimited retry, real Python examples, explicit save/session/mastery privacy boundaries, safe close/reopen, reload clearing, and ≥44 px orientation choices.
6. Reduced-motion CSS disables smooth scrolling. Canonical framing uses crisp square-pixel rendering and authored 640 × 480 / 320 × 240 layouts.

## Prioritized findings

### P1 — Focus is lost when Chapter I enters the Meadow

- **Reproduce:** keyboard through the opening; activate **Enter the meadow**; inspect `document.activeElement`.
- **Expected:** focus moves to the Meadow objective, scene heading/status, or primary Terminal hotspot.
- **Actual/source evidence:** the focused chapter button unmounts. The opening focus effect only covers `create-save`, `character-name`, `prologue`, and `chapter-reveal`; `enterChapterOne()` only sets dialogue and `mode="playing"`. The E2E checks orientation entry/restoration but not Meadow entry focus.
- **Affected learners/principle:** screen-reader and keyboard users; logical focus order and understandable context change (WCAG 2.4.3 / 3.2.2-informed).
- **Exact handoff:** Coder should focus a stable, visible Meadow target after `enterChapterOne`, preferably the primary Terminal hotspot, then add an E2E active-element assertion.

### P2 — Authored narrow text is too small for dependable reading

- **Reproduce:** host at 320 × 240 and inspect title/opening/prologue copy and controls.
- **Evidence:** narrow CSS uses 5–8 px text, including 5 px title-note and 6–7 px help, warning, labels, body copy, and buttons. The opening card scrolls, but the fixed host does not establish 200% zoom/reflow readability.
- **Affected learners/principle:** low-vision, dyslexic, and cognitively fatigued users; readable text and resize/reflow (WCAG 1.4.4 / 1.4.10-informed).
- **Exact handoff:** Pixel Patrol/Coder should set an opening minimum of 8 logical px for secondary copy and 9–10 px for actions/body, then verify at 320 × 240 and 200% zoom without clipped controls.

### P2 — Save replacement warning lacks an explicit control association

- **Reproduce:** resume-capable title → New expedition → tab directly to **Create Slot 01** with a screen reader.
- **Evidence:** warning is visible and precedes the button, but has no ID/`aria-describedby` association and is not part of the button's accessible description.
- **Affected learners/principle:** screen-reader users; destructive-action comprehension and relationship semantics (WCAG 1.3.1 / 3.3.2-informed).
- **Exact handoff:** give the warning a stable ID and describe **Create Slot 01** with it only when replacement will occur; add a source/E2E assertion.

### P2 verification gap — forced colors and human AT remain unobserved

- Source provides native controls, outlines, borders, labels, and non-color wording, but no `@media (forced-colors: active)` treatment exists. A human NVDA/forced-colors/200%-zoom pass remains required before a conformance claim.

## Validation

- `npm test`: 166/166 passed
- `npm run build`: passed; existing 696.61 kB chunk-size warning remains
- Static review: opening sanitizer/tests, App focus/save/orientation paths, canonical 640 × 480 and 320 × 240 CSS, reduced motion, labels/live regions/privacy, target sizes, and E2E opening assertions
- Browser QA: intentionally not run; coordinator-owned

## Status

`ready to advance — P1 focus handoff and P2 narrow/readout issues documented`
