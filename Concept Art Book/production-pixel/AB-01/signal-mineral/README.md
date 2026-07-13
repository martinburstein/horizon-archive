# Derelict Signal-Mineral Terminal Study (Historical V1)

> Superseded for new production by the [Builder Machine signal-coupler study](../signal-coupler/README.md). This package remains as provenance and comparison evidence; its red pseudo-writing and standalone mineral housing must not return.

This package translates the frame-grounded [Terminal GIF inspiration](../../../References/terminal-gif-inspiration/README.md) into an original Horizon Archive sprite study. It is a candidate replacement direction for the current symmetric console blockout, not yet a runtime replacement.

## Outputs

- Exploration sheet: `terminal-signal-mineral-exploration-sheet.png`
- Chroma-removed exploration sheet: `terminal-signal-mineral-exploration-sheet-alpha.png`
- Logical animation frames: `frames/terminal-signal-01-64x64.png` through `terminal-signal-06-64x64.png`
- Representative available state: `terminal-signal-mineral-available-64x64.png`
- Logical sprite sheet: `terminal-signal-mineral-sheet-192x128.png`
- Logical loop: `terminal-signal-loop-64x64.gif`
- Exact nearest-neighbor QA: `qa/terminal-signal-mineral-sheet-4x.png` and `qa/terminal-signal-loop-4x.gif`

## Animation contract

Six frames cycle through ember, bounded red field, abstract marks, displaced marks, diagonal interference, and static. The build pins every pixel outside the warning membrane to the first frame, so the mineral body cannot jitter. Timings are `520, 180, 240, 220, 140, 420 ms`.

## Rebuild

```powershell
python build_signal_mineral_terminal.py
```

The script requires Pillow. It crops the six generated exploration cells, normalizes each object into a `64 x 64` logical frame with nearest-neighbor sampling, detects the red warning membrane, freezes all pixels outside that box, writes the sheet/GIF/QA artifacts, and fails if body pixels change outside the membrane.

## Production caution

The generated body is strong enough for silhouette and animation exploration, but final integration still requires Pixel Patrol and Curse Art Director approval. At `64 x 64`, verify that the mineral strata, sealed interface scar, off-center clipped-rectangle screen, burial, and repair seam survive without becoming noisy. The sprite must not be promoted merely because the GIF builds.
