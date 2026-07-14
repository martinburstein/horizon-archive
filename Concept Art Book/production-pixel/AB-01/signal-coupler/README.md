# Builder Machine Signal-Coupler Terminal Study

This package is the current second-generation direction for the derelict Terminal. It replaces the standalone signal-mineral read with one exposed diagnostic organ of a much larger buried Machine. The cold membrane communicates through scientific topology rather than warning-red pseudo-writing.

## Outputs

- First redesign exploration: `terminal-signal-coupler-exploration-sheet.png`
- Interconnection exploration: `terminal-signal-coupler-connected-sheet.png`
- Selected clean-tongue exploration: `terminal-signal-coupler-connected-no-tongue-tube-sheet.png`
- Selected chroma-removed source: `terminal-signal-coupler-connected-no-tongue-tube-sheet-alpha.png`
- Logical frames: `frames/terminal-coupler-01-64x64.png` through `terminal-coupler-06-64x64.png`
- Representative available state: `terminal-signal-coupler-available-64x64.png`
- Logical sheet: `terminal-signal-coupler-sheet-192x128.png`
- Logical loop: `terminal-signal-coupler-loop-64x64.gif`
- Exact nearest-neighbor QA: `qa/terminal-signal-coupler-sheet-4x.png` and `qa/terminal-signal-coupler-loop-4x.gif`
- Exact animated-area proof: `qa/terminal-signal-coupler-screen-mask-4x.png`

## Animation contract

Six frames cycle through a cyan seed, spectral scan, node topology, displaced phase contours, interference, and an amber fault tick. The screen interior is one fixed eight-point logical-pixel polygon with `164` included pixels. The build takes the entire body from frame one for all six outputs and permits source-frame variation only inside that polygon. The bezel, tongue, cables, glass fins, collars, stones, lighting, shadows, alpha silhouette, and all other pixels are byte-identical. Timings are `620, 170, 260, 240, 150, 500 ms`.

## Rebuild

```powershell
python build_signal_coupler_terminal.py
```

The script requires Pillow. It crops the six generated cells, normalizes each object into a `64 x 64` logical frame with nearest-neighbor sampling, composites only the fixed membrane polygon over the first frame, writes the sheet/GIF/QA artifacts, and calculates a SHA-256 body hash with the membrane blanked. GIF frames share one explicit palette so unchanged colors cannot be requantized between states. The build fails unless all six body hashes collapse to exactly one value, every changed PNG pixel is inside the membrane, all six screen hashes are distinct, and both the logical and 4x GIFs decode with zero changed pixels outside the mask.

## Design lock

The broad front tongue is a clean laminated data bus that continues through the bottom crop. Nothing attaches to or branches from it. Paired sleeved channels continue through both side crops, while a separate vertical conduit enters the substrate beside the body. The display is a clipped instrument membrane, not writing and not a conventional monitor. No red warning palette, four-glyph arrangement, rock-with-a-screen silhouette, loose-ended wire, or tube branching from the tongue may return.

## Playable production overlay

`build_production_signal_coupler.py` rebuilds the approved source into the scene-native package under `production/`. The playable master is `640 x 360`, with a `320 x 320` source-derived coupler centered in the foreground and its approved paired side channels continued through both scene crops. It never enlarges or samples the `64 x 64` preview.

The production build emits six lossless PNG frames, a shared-palette animated GIF, a reduced-motion still, a diagnostic membrane mask, native and `320 x 180` composition QA, and a machine-readable validation manifest. Both side bundles are now continuous authored phase conduits: an opaque load-bearing substrate runs from the hidden source collar through the scene crop while irregular repair sleeves sit on top without cutting periodic alpha gaps. The build scans an interior lane across every conduit column at both `640 x 360` and the exact nearest-neighbor `320 x 180` derivative and fails on any transparent break.

Composition evidence remains separate from the transparent runtime overlay:

- `production/qa/terminal-signal-coupler-meadow-composite-640x360.png`
- `production/qa/terminal-signal-coupler-meadow-composite-320x180.png`

The build also fails unless all six PNG bodies and all six decoded GIF bodies are byte-identical outside the membrane, every screen state is distinct, and no animation pixel escapes the fixed membrane. The clean tongue, side conduits, service sleeves, substrate conduit, debris, and crop therefore remain frozen while the membrane hums.

```powershell
python build_production_signal_coupler.py
```
