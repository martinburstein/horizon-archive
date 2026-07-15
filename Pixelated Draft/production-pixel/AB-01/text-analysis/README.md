# Text Analysis Physical Motif

[![Four apertures, correlation rail, and split returns](text-analysis-apertures-64x64.png)](text-analysis-apertures-64x64.png)

One native `64 x 64` AB-01-compatible overlay presents four distinct analysis apertures feeding a central document-correlation rail with split success and error returns. It embeds no text; live labels remain the semantic authority.

## Physical language

| Function | Non-text geometry |
|---|---|
| Key phrase | comb aperture with three repeated slots and one deeper notch |
| Entity | four open locator corners around a compact center block |
| Sentiment | opposing shutters around a neutral central gap; deliberately not a face icon |
| Summary | three horizontal bars collapsing in length toward the rail |
| Correlation rail | one continuous vertical groove with five cross-ties |
| Success return | right split closes into a bounded square socket |
| Error return | left split terminates in an open stepped fracture |

Shape, open/closed endings, pattern cadence, and value masses remain distinct in grayscale. Hue is reinforcement only.

## Delivery

- **Native asset:** [text-analysis-apertures-64x64.png](text-analysis-apertures-64x64.png), transparent RGBA.
- **Exact nearest-neighbor 2x:** [128 x 128](qa/text-analysis-apertures-2x-128x128.png).
- **Grayscale QA:** [64 x 64](qa/text-analysis-apertures-grayscale-64x64.png).
- **Isolation QA:** [combined / four apertures / rail / success / error at 2x](qa/aperture-return-isolation-2x-1024x128.png).
- **Renderer:** [build_text_analysis_motif.py](build_text_analysis_motif.py); integer geometry only and no reference inputs.
- **AB-01 anchor:** `x=156, y=211` in the `640 x 360` world.
- **Painted bounds:** approximately `x=4–59, y=4–61`; 56 x 58 logical pixels.
- **Hotspot:** retain `x=156, y=205, w=68, h=76`; ≥44 x 44 at native 1x.

The motif replaces only the physical overlay. It cannot enter the lower interface band or quiet footer rows `461–479`.

## Accessibility boundary

The apertures support recognition but cannot name an analysis capability or explain its output. Runtime must expose persistent labels for Key phrase, Entity, Sentiment, Summary, Success, and Error, plus textual document-correlation feedback. Success and error must never rely on right/left placement alone.
