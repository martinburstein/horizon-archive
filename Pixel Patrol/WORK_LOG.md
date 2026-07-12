# Pixel Patrol Work Log

## 2026-07-12 — Responsible AI transfer and closed-note audit

- **Completed:** audited the completed transfer and closed-note stages against the existing native-frame scroll contract. Both preserve one form scroller, natural-height four-field cards, title/file/status stage hierarchy, adjacent validator/remediation, and two-column canonical versus one-column narrow grouping. Added the one missing visual invariant: transfer selects and closed-note inputs now share a 2 px internal gold focus frame with -3 px offset, so keyboard focus remains square, high-contrast, and unclipped at both scroll boundaries.
- **Files changed:** `horizon-archive-game/src/styles.css`, `Pixel Patrol/PIXEL_METRICS.md`, `Pixel Patrol/UI_AND_TYPE_SPEC.md`, `Pixel Patrol/QA_CHECKLIST.md`, and this log.
- **Validation:** all 39 unit tests, production build, and full title-to-credits E2E pass with zero runtime errors. Static checks confirm the shared 2 px/-3 px focus rule, one-scroll-owner contract, 640 x 480 two-column field grouping, and 320 x 240 one-column grouping. E2E confirms transfer 24/24, field-associated closed-note remediation, close/reopen continuity, ownership confirmation, strict mastery, privacy, and credits.
- **Next recommended item:** Location Scout should keep the four-indicator physical grammar stable through primary, transfer, and explanation states, changing the surrounding frame geometry rather than inventing new indicator meanings per stage.
- **Unresolved risks:** `playtest/responsible-ai-primary-qa.png` is the only Responsible AI QA output path and is overwritten by subsequent full runs; transfer and closed-note do not have distinct retained captures. This is noted for the coordinator but intentionally not broadened into a playtest-output cleanup during this one-CSS-rule tranche.

## 2026-07-12 — Responsible AI native-frame audit

- **Completed:** audited the Responsible AI primary form in the native 640 x 480 frame. The existing 624 x 344 Terminal attempted to keep its header, four-field grid, and 105 px validator simultaneously visible, collapsing the field grid to approximately 18 px in the selected QA capture. Replaced that squeeze layout inside CanonicalGameFrame with one contained form scroller; field cards now retain natural label/select/feedback height and the validator remains after the fourth field in the same reading flow. The exercise-specific outer Terminal overflow is hidden so focus scrolls the form rather than pushing title/status chrome out of view. The 320 x 240 alternate keeps its single-column form inside the same scroll contract.
- **Files changed:** `horizon-archive-game/src/styles.css`, `Pixel Patrol/PIXEL_METRICS.md`, `Pixel Patrol/UI_AND_TYPE_SPEC.md`, `Pixel Patrol/QA_CHECKLIST.md`, and this log.
- **Validation:** all 35 unit tests, production build, and full title-to-credits browser regression pass with zero runtime errors. Static checks lock the 8 px/4 px Terminal insets, canonical 624 x 344 and narrow 312 x 172 border boxes, exactly one responsible-form overflow owner, visible field-grid overflow, two-column canonical and one-column narrow grouping, and existing whole-pixel focus treatment. The refreshed native capture confirms title/status chrome remains fixed while two complete field cards, their associated remediation, validator score, and next action share the visible scrolled region; the first pair remains immediately above in the same form scroller.
- **Next recommended item:** Location Scout should keep the Responsible AI node's four physical indicator groups vertically ordered and visually distinct so the world object foreshadows the form's principle -> stakeholder -> mitigation -> owner reading order without adding labels to the landscape.
- **Unresolved risks:** the current capture uses Courier New and native browser selects rather than final original bitmap glyphs and controls. Preserve functional select and scrollbar affordances until equivalent accessible pixel-native replacements exist.

## 2026-07-12 — Calibration keyboard-help placement

- **Completed:** resolved the Exercise Agent handoff by moving the exact ungraded keyboard-orientation sentence from between route status and task content into the persistent final row of the Calibration workspace. Locked native metrics are 102 characters, 612 px glyph run at 6 px advance, 632 px including insets, and a 19 px canonical footer. The 320 px alternate preserves the exact copy as three lines in a 43 px footer.
- **Files changed:** `horizon-archive-game/src/styles.css`, `Pixel Patrol/UI_AND_TYPE_SPEC.md`, `Pixel Patrol/PIXEL_METRICS.md`, `Pixel Patrol/QA_CHECKLIST.md`, and this work log.
- **Validation:** all 31 unit tests and the production build pass. Static grid-order review confirms tabs/status/pane/footer visual order while DOM orientation remains before pane controls; the footer uses whole-pixel dimensions, no ellipsis, and narrow-only wrapping. Calibration tabs now receive a non-clipping 2 px internal focus outline. The full browser regression was attempted twice but stopped before Calibration at the existing desktop Petal focus-restoration assertion; this stylesheet-only change does not affect that earlier path, so the blocked run is reported rather than misclassified as a footer failure.
- **Next recommended item:** Location Scout should keep the physical Calibration node's status marks above its interaction surface, leaving the lowest 19 logical pixels of any open-interface framing visually quiet so footer text retains contrast.
- **Unresolved risks:** the current prototype is still a responsive approximation rather than the final single 640 x 480 composed canvas. The final bitmap font must preserve a maximum 6 px advance for this exact line; a wider font requires a deliberately condensed original variant, not reduced readability or changed copy.

## 2026-07-12 — Foundation aesthetic tranche

- **Completed:** researched official/store media, ScummVM technical documentation, a gallery covering the full location arc and UI modes, a listed complete longplay, a chapter walkthrough, and period control documentation. Research saturated at stable conclusions about 640 x 480 presentation, theatrical scene hierarchy, contextual action choice, inventory, animation cadence, subtitles, transitions, and cutscene boundaries.
- **Files changed:** created the complete `Pixel Patrol/` implementation bible, reference matrix, metrics, UI/type system, animation/transition system, QA checklist, and original 640 x 480 benchmark HTML.
- **Validation:** verified required topic coverage, source labeling, evidence-class separation, internal links, accessible Steam/ScummVM/gallery/walkthrough/guide URLs, exact benchmark viewport, original-label-only scope, no external media/assets, ROUTE OPEN coordinates, 640 x 360 + 640 x 120 canvas arithmetic, four-pane Terminal handoff, and narrow-layout accessibility rules. The period-manual PDF remained unparsed and is explicitly labeled low-confidence; no metric depends on it.
- **Next recommended item:** Location Scout should author the next selected scene directly at 640 x 360 using the production handoff below and include 1x plus 2x QA renders; Coder should then compose it inside one 640 x 480 canvas rather than independently scaling scene and HTML UI.
- **Unresolved risks:** exact proprietary palette indices, fonts, original frame tables, and per-scene sprite metrics are unknown and are neither needed nor claimed. The in-app Browser surface was unavailable during this pass; public web sources were used, and the complete-playthrough listing could not be frame-scrubbed in-session. Measured visual values therefore carry explicit tolerances.

## Exact Location Scout handoff

For the next production plate:

1. Author a new, original `640 x 360` PNG or code-native scene at 1x square pixels; no downscaled exploration art.
2. Use 24-48 scene colors, 4-6 values per major material, and no smooth gradients.
3. Build one landmark, one dominant walkable route within y=214-342, and no more than three secondary reads.
4. Reserve 22% negative space around the default player/active target position.
5. Make the Terminal 32-62 px tall and at least 24 px wide, with a unique top silhouette and one edge at least 24 luminance points from its background.
6. Use 1 px selective contours, 2 px only at deep/contact edges; texture clusters 2-8 px; no orphan noise.
7. Dither only background haze up to 25% or middle materials up to 12.5%; never dither hotspot edges, faces, text, or indicators.
8. Supply dormant, available, active, and complete state geometry; every state changes silhouette/value, not color alone.
9. Define painted bounds and a separate >=22 x 22 logical hit box, with 44 x 44 CSS verification at 2x/narrow presentation.
10. Keep foreground masks under 18% and out of the required target, route, and exits.
11. Deliver a native 640 x 360 inspection image, a 1280 x 720 nearest-neighbor render, palette swatches, target bounds, walk strip, and state thumbnails.
12. Run the originality gate against concept/reference material and record which abstract traits were retained and which concrete layout/forms were changed.
