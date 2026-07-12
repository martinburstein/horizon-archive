# L-04-03 — Vision and image generation workloads

## Outcome

Choose whether a visual task analyzes existing media, interprets visual input with a multimodal model, generates a new image, or generates video—and handle media inputs and outputs safely.

## Source boundary

**Must know for AI-901:** Identify computer-vision and image-generation capabilities; interpret visual input with a deployed multimodal model; create new visual outputs with generative models; understand a lightweight vision-capable app. The mapped course scope also includes video generation. See the [current official source register](../../sources/current-official-source-register.md).

**Course-authored practice:** All scenarios, reasons, and 12/12 gates are original. No media is opened, uploaded, generated, or stored.

## Four decisions

| Goal | Choice |
|---|---|
| Describe or detect features in an existing image | Image analysis |
| Ask a general model about image plus text context | Multimodal visual prompt |
| Create a new still visual | Image generation |
| Create new time-based visual media | Video generation |

Start with “existing or new?” Then ask whether the output is structured/descriptive text, a general model response, a still image, or moving media.

## Guided contrasts

- Describe objects in a photograph: analyze existing pixels.
- Explain a chart using its image plus a question: multimodal visual prompt.
- Make a poster from a brief: generate a new image.
- Make an animated scene: generate video.

## Lightweight client safeguards

1. Validate the input path and supported media type before a request.
2. Choose a currently supported model/service route for the required operation.
3. Keep analysis output (often structured/descriptive data) separate from generated media output.
4. Parse or save output according to the selected operation; never assume every visual response has the same shape.

## Assessment and remediation

Complete primary closed-note:

```powershell
python validate_visual_workloads.py --form primary --check primary_answers.json
```

For a miss: name existing/new media, input modalities, requested output, and expected output representation. Then complete transfer:

```powershell
python validate_visual_workloads.py --form transfer --check transfer_answers.json
```

Readiness requires 12/12 on both forms, all four visual patterns, both safeguards per form, and one closed-note explanation. Review low-confidence contrasts tomorrow, then after 3, 7, and 14 days.

## Deprecation, privacy, accessibility, and volatility

The current Azure Vision source flags Image Analysis 4.0 as deprecated; do not copy legacy implementation examples into a live lab. The exercise stores no media, paths, prompts, or response bodies. Every visual has a text equivalent; controls are labeled, keyboard accessible, untimed, and not color-only. Reverify current models, SDKs, operations, endpoints, authentication, formats, regions, quotas, pricing, deprecations, and preview status before live use.
