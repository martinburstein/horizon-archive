# Responsible AI Frame Modes

[![Primary, transfer, explanation frame modes](responsible-ai-frame-modes-1x-192x64.png)](responsible-ai-frame-modes-1x-192x64.png)

One native `192 x 64` strip defines three `64 x 64` physical-frame modes. Tile order is fixed: primary → transfer → explanation. The internal Terminal body and its four indicator groups remain pixel-identical in every tile.

## Geometry contract

| Tile | Source bounds | Outer state geometry | Grayscale read |
|---|---|---|---|
| Primary | `x=0–63` | one continuous left rail with capped ends | single solid vertical mass |
| Transfer | `x=64–127` | two mirrored rails made from offset stepped segments | paired broken rhythm |
| Explanation | `x=128–191` | closed outer witness frame with top shoulders and grounded center tab | complete enclosing silhouette |

The outer geometry occupies only the existing `64 x 64` overlay. AB-01 keeps anchor `x=156, y=211` and hotspot `x=156, y=205, w=68, h=76`. No frame enters the `640 x 120` interface band or the quiet footer at canonical rows `461–479`.

## Indicator invariant

All three tiles preserve, in the same coordinates and pixels:

1. principle — hollow faceted diamond;
2. stakeholder — two separated party blocks;
3. mitigation — broken stepped intervention path;
4. accountable owner — bounded owner square.

Mode geometry never recolors, fills, reorders, masks, or touches these groups. Their completion progression remains independently controlled by the existing responsible-AI sequence assets.

## QA

- Native strip: [responsible-ai-frame-modes-1x-192x64.png](responsible-ai-frame-modes-1x-192x64.png)
- Exact nearest-neighbor 2x: [responsible-ai-frame-modes-2x-384x128.png](qa/responsible-ai-frame-modes-2x-384x128.png)
- Each mode differs by outer silhouette, mass count, and pattern—not color alone.
- No text, antialiasing, subpixel placement, reference-game asset, new location, or lore is introduced.
