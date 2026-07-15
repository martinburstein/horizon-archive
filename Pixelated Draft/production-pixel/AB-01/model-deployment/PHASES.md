# Model / Deployment Four-Phase Geometry

[![Primary, transfer, closed-note, mastered](model-deployment-phases-1x-256x64.png)](model-deployment-phases-1x-256x64.png)

One native `256 x 64` strip defines four `64 x 64` phase tiles in fixed order: primary → transfer → closed-note → mastered. The model, deployment, and request rings plus decision/reason core are pixel-identical in every tile.

## Phase framing

Every frame uses the same two existing motif values. Phase cannot be inferred from a unique color.

| Tile | Source x | External geometry/pattern | Grayscale read |
|---|---:|---|---|
| Primary | `0–63` | one continuous left rail with capped ends | single vertical mass |
| Transfer | `64–127` | mirrored offset broken rails | paired alternating rhythm |
| Closed-note | `128–191` | segmented top shutter with two end stops | sealed upper boundary |
| Mastered | `192–255` | four complete corner locks with inset blocks | persistent enclosing corners |

## Invariants

- The complete existing motif within local `x=6–58, y=6–60` is drawn after the frame and remains unchanged.
- Ring meanings remain: continuous outer model octagon; bracketed deployment ring; dashed request-configuration ring.
- Core meanings remain: left diamond decision; right unequal-bar reason.
- AB-01 retains anchor `x=156, y=211`, hotspot `x=156, y=205, w=68, h=76`, and `640 x 360` world boundary.
- No phase art enters the interface band or quiet footer rows `461–479`.
- Live labels “Primary,” “Transfer,” “Closed-note,” and “Mastered” remain mandatory.

## QA

- Native strip: [model-deployment-phases-1x-256x64.png](model-deployment-phases-1x-256x64.png)
- Exact nearest-neighbor 2x: [model-deployment-phases-2x-512x128.png](qa/model-deployment-phases-2x-512x128.png)
- Pairwise grayscale comparison must distinguish all four complete tiles.
- Semantic motif crop must remain byte-identical across all tiles.
