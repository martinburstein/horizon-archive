# Pixel Patrol Work Log

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
