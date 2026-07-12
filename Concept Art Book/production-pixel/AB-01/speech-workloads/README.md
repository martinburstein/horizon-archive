# Speech Workloads Physical Strip

[![Recognition, synthesis, multimodal, cancellation](speech-workloads-1x-256x64.png)](speech-workloads-1x-256x64.png)

One native `256 x 64` strip defines four `64 x 64` AB-01-compatible physical tiles in fixed order: recognition → synthesis → spoken multimodal prompt → cancellation/break. It embeds no text; live labels and transcript equivalents remain mandatory.

## Physical paths

| Tile | Source x | Geometry |
|---|---:|---|
| Recognition | `0–63` | stepped voice inlet → one-way channel → three-line text register |
| Synthesis | `64–127` | three-line text register → one-way channel → outward stepped voice outlet |
| Spoken multimodal | `128–191` | voice inlet → bent rising channel through a three-fin model aperture → offset response socket |
| Cancelled | `192–255` | two capped channel halves separated by a hard ten-pixel gap and displaced break blocks |

Inlet/outlet orientation, register position, straight/bent routes, cap geometry, and continuity distinguish the tiles in grayscale. Color is reinforcement only.

## Delivery

- **Native strip:** [speech-workloads-1x-256x64.png](speech-workloads-1x-256x64.png).
- **Exact nearest-neighbor 2x:** [512 x 128](qa/speech-workloads-2x-512x128.png).
- **Grayscale QA:** [256 x 64](qa/speech-workloads-grayscale-256x64.png).
- **Renderer:** [build_speech_workloads_strip.py](build_speech_workloads_strip.py); integer geometry only and no reference inputs.
- **AB-01 anchor:** crop one `64 x 64` tile and place at `x=156, y=211` in the `640 x 360` world.
- **Hotspot:** retain `x=156, y=205, w=68, h=76`; ≥44 x 44 at native 1x.

The strip supplies physical world overlays only. No tile enters the lower interface band or quiet footer rows `461–479`.

## Accessibility boundary

Geometry supports recognition of direction and cancellation, but does not name a workload or replace transcripts. Runtime must provide live labels for Recognition, Synthesis, Spoken multimodal prompt, Response, and Cancel, plus text transcripts or equivalent alternatives for every speech input/output. Cancellation must remain reversible and clearly announced.
