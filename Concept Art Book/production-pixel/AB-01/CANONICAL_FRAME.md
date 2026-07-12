# AB-01 Canonical 640×480 Frame

This is a production framing study, not gameplay code. It proves that the selected `640×360` AB-01 world and a `640×120` period-authentic lower interface can share one square-logical-pixel canvas without obscuring the route or sacrificing the persistent help footer.

## QA renders

- [Available, native 640×480](qa/ab01-canonical-available-640x480.png)
- [Available, nearest-neighbor 2×](qa/ab01-canonical-available-2x-1280x960.png)
- [Complete, native 640×480](qa/ab01-canonical-complete-640x480.png)
- [Complete, nearest-neighbor 2×](qa/ab01-canonical-complete-2x-1280x960.png)

## Logical bands

| Canvas rows | Purpose | Treatment |
|---|---|---|
| `0–359` | AB-01 world | selected production pixels; no UI overlap |
| `360–367` | seam/context | hard 1 px/value-banded chrome |
| `368–407` | dialogue | broad low-detail field; up to three text rows at runtime |
| `408–447` | actions/status | three original hard-edged button wells |
| `448–460` | progress/recovery | route completion geometry appears only in complete variant |
| `461–479` | persistent help footer | 1 px seam plus flat fill; no ornament, dither, glyph, state light, or route geometry |

The final 19 logical pixels are intentionally quiet. Runtime may place the exact keyboard-orientation sentence there; this study reserves the contrast field and does not bake text into art.

## State comparison

- **Available:** open three-fin Terminal and stable beacon in the world; progress row contains no route-complete geometry.
- **Complete:** Terminal fins align and close a route ring; the progress row gains three connected value-stepped route blocks and an end cap.
- The footer remains pixel-identical between variants, preventing route status from reducing help contrast.

## Implementation handoff

Compose the complete logical frame first, then scale the `640×480` surface as one unit. Use nearest-neighbor integer scaling and letterbox non-multiple hosts. The lower band shown here is geometry evidence; accessible live text and controls remain DOM/canvas integration responsibilities.
