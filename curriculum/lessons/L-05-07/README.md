# L-05-07 — Content Understanding and Multimodal Information Extraction

## Why this is exam-critical

**Must know for AI-901:** The skills measured as of April 15, 2026 require you to extract information from documents/forms, images, audio, and video with Azure Content Understanding in Foundry Tools, and to build a lightweight application with those capabilities. The Foundry implementation domain is 55–60%. See the [official source register](../../sources/current-official-source-register.md).

**Official fact:** Content Understanding processes documents, images, video, and audio into a user-defined output format. An analyzer configures content processing and a field schema; the service can return structured JSON matching that schema. Current official documentation also describes confidence and grounding, with modality-specific availability that must be rechecked before live use.

**Bridge instruction:** This lesson is a deterministic offline simulation. It does not install an Azure SDK, send content to Azure, estimate real service confidence, or prove a live resource is configured.

## The evidence-to-output flow

```text
source packet
  -> inspect each modality
  -> define requested fields and types
  -> extract only supported values
  -> attach source provenance and uncertainty
  -> preserve unsupported values as null
  -> validate structured JSON
```

This mirrors the official analyzer-and-schema mental model without copying a volatile API payload.

## Broad description versus information extraction

These requests use the same image but ask for different work:

- “Describe what is visible.” This is a broad visual interpretation request.
- “Return `structure_count`, `access_surface_detected`, `audible_response_detected`, and `response_meaning`, with source references.” This is schema-driven information extraction over multiple sources.

The difference is the output contract. A description can be open-ended prose. Extraction must fill named fields predictably.

## The null rule

**Bridge instruction:** In this course, `null` means the supplied packet cannot support a value. It does not mean false, dormant, broken, conscious, or secretly absent.

- Use `false` only when a source directly tests a yes/no condition and reports no detection.
- Use `null` when the requested value is unsupported or not applicable to the evidence.
- Add an uncertainty note explaining the boundary.

Never turn “no measurable response” into a story about why no response occurred.

## Activity 1 — Inspect the packet

Open `evidence/source_manifest.json`. It names three sources:

- `DA-IMG-01`: a still image of the basin and suspended landmark;
- `DA-AUD-01`: a short course-generated basin-audio segment;
- `DA-TEL-01`: bounded environmental telemetry.

The still image is reused from the project concept-art book. The WAV and telemetry are generated bridge assets, not recordings of a real place and not Content Understanding output.

Inspect the files with Python:

```powershell
python inspect_packet.py
```

Expected summary:

```text
Sources: 3 (audio, image, telemetry)
Audio: 3.0 seconds at 16000 Hz, mono
Telemetry landmark access detections: 0
Telemetry landmark audible responses: 0
```

Retrieval before continuing:

1. Which file declares the source IDs?
2. Which modality can support a visual structure count?
3. Why does zero detected audio response not establish a cause?
4. When should a requested field remain `null`?

## Activity 2 — Build structured output

Run the starter once:

```powershell
python starter_extraction.py
```

It writes `working_output.json`. Open both files. Replace the marked placeholders by reading the evidence packet and building the required field objects. Each field needs:

- `value`;
- `source_ids`;
- `uncertainty`.

Required meanings:

- `structure_count`: count the monumental suspended landmark, not the grounded Terminal;
- `access_surface_detected`: use the landmark-specific telemetry;
- `audible_response_detected`: use the audio-event telemetry and audio source;
- `response_meaning`: preserve the unsupported interpretation as `null`;
- `modalities_reviewed`: include image, audio, and telemetry.

## Activity 3 — Validate, remediate, transfer

Check your output:

```powershell
python validate_extraction.py --check working_output.json
```

The result reports 12 deterministic checks. Pass requires 12/12 and no critical tag.

Progressive remediation:

1. **Cue:** read the stable error code; change only the named boundary.
2. **Contrast:** if `false` and `null` are confused, state “measured no” versus “not supported” aloud.
3. **Provenance trace:** open the manifest and locate the source ID that directly supports the value.
4. **Worked comparison:** use `check.md`, then rebuild your own output rather than copying the file wholesale.

Transfer scenario: A maintenance packet contains a machine photo, a ten-second sound clip, and a temperature log. Define fields for `panel_count`, `alarm_detected`, `peak_temperature_c`, and `failure_cause`. State which field may need `null`, which source supports every non-null value, and why a broad photo description would not satisfy the request.

## Mastery gate

Advance only when all are true:

- validator returns 12/12;
- `response_meaning` remains `null`;
- every field uses only registered source IDs;
- `false` and `null` are explained correctly;
- broad vision and schema-driven extraction are distinguished;
- transfer scenario includes provenance and an unsupported-value rule.

## Current-product caution

Azure Vision’s current overview flags Image Analysis 4.0 for retirement on September 25, 2028. Do not build this lesson around that legacy API. For AI-901 information extraction, prefer the current Content Understanding documentation and recheck API versions, analyzer modes, SDK packages, portal availability, confidence, and grounding immediately before any live lab.

## Spaced review

- Tomorrow: redraw source → schema → fields → provenance → validation from memory.
- In three days: repair a result where `null` was replaced by an invented explanation.
- In seven days: design and validate a new three-modality schema without this packet, then recheck the live Microsoft documentation.

