# Production Pixel Contract

The canonical complete game presentation is a `640 × 480` square-logical-pixel canvas. Its default layout reserves `640 × 360` for the adventure world and `640 × 120` for compact verbs, dialogue, inventory, and status. The playable Glass Meadow and title currently use an original `320 × 180` scene module that can scale exactly `2×` into the world viewport. Every world mark is assembled from integer-coordinate filled rectangles; the runtime never samples the smooth exploration plate.

- Canvas interpolation is disabled with `imageSmoothingEnabled = false` and CSS `image-rendering` fallbacks.
- The current scene-module scale is `floor(min(frame width / 320, frame height / 180))`, clamped to at least `1`. The module is displayed only at `320n × 180n` CSS pixels and centered in a black letterbox.
- The next runtime integration step is to compose world and UI inside the complete `640 × 480` canvas, scale that complete canvas only by whole-number multiples, and letterbox host viewports between supported sizes.
- Meadow hotspots live inside the integer-scaled stage, so their percentages map to logical canvas coordinates rather than the outer viewport or a cropped image.
- Petal bounds: `x 36–59%`, `y 22–83%`. Route Marker bounds: `x 75–89%`, `y 48–84%`.
- At the supported minimum `320px` scene-module width, both targets exceed `44 × 44` CSS pixels. Existing desktop QA uses a `3×` module as an interim vertical-slice presentation; final QA must validate the composed `640 × 480` canvas at integer multiples.
- Locked, awake, and completed states change core/groove geometry and stepped marks as well as value and color.
- On narrow screens, the closed meadow scene occupies its 16:9 stage. When a Terminal opens, the frame expands and docks the editor below the full `320 × 180` scene, leaving the dark dialogue panel intact.
