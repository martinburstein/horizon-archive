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

## Animation contract

Six frames cycle through a cyan seed, spectral scan, node topology, displaced phase contours, interference, and an amber fault tick. The build freezes every pixel outside the diagnostic membrane, including the tongue and all network connections. Timings are `620, 170, 260, 240, 150, 500 ms`.

## Rebuild

```powershell
python build_signal_coupler_terminal.py
```

The script requires Pillow. It crops the six generated cells, normalizes each object into a `64 x 64` logical frame with nearest-neighbor sampling, detects the cold diagnostic membrane, freezes the Machine body and all connections outside that box, writes the sheet/GIF/QA artifacts, and fails if any exterior pixel changes.

## Design lock

The broad front tongue is a clean laminated data bus that continues through the bottom crop. Nothing attaches to or branches from it. Paired sleeved channels continue through both side crops, while a separate vertical conduit enters the substrate beside the body. The display is a clipped instrument membrane, not writing and not a conventional monitor. No red warning palette, four-glyph arrangement, rock-with-a-screen silhouette, loose-ended wire, or tube branching from the tongue may return.
