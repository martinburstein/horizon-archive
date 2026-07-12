# L-04-04 — Information extraction workloads

## Outcome

Identify schema-driven extraction from documents/forms, images, audio, and video while preserving missing values and source evidence.

## Source boundary

**Must know for AI-901:** Identify techniques to extract information from text, images, audio, and video. Current Content Understanding documentation describes multimodal inputs, analyzer field schemas, and structured JSON outputs. See the [current official source register](../../sources/current-official-source-register.md).

**Course-authored practice:** All scenarios, field sets, reasons, and 12/12 gates are original. No source media or live analyzer is used.

## Extraction versus general analysis

Extraction starts with a requested record shape. “Describe this photograph” is general visual analysis. “Return equipment_id, model, and serial_number” is information extraction because specific named fields must be populated from evidence.

| Source | Example extraction output |
|---|---|
| Document/form | invoice number, date, vendor, total |
| Image | label identifier, model, expiration date |
| Audio | speaker, action item, timestamp |
| Video | event, participant, start time |

Transcription, OCR, captions, or descriptions may support extraction, but they are not the final structured record by themselves.

## The schema-first flow

1. Name the input modality and supported format.
2. Define field names, data types, and useful descriptions.
3. Analyze the source with the configured analyzer.
4. Parse structured output by field name.
5. Preserve null/missing when evidence is absent.
6. Retain available provenance/confidence for review; never invent a field merely to complete the schema.

## Assessment and remediation

Complete primary closed-note:

```powershell
python validate_extraction_workloads.py --form primary --check primary_answers.json
```

For a miss, name modality, required fields, and why a generic description/transcript is insufficient. For integrity misses, restate the schema and missing-value policy. Then complete transfer:

```powershell
python validate_extraction_workloads.py --form transfer --check transfer_answers.json
```

Readiness requires 12/12 on both forms, all four modalities, both integrity items, and one closed-note explanation. Review weak contrasts tomorrow, then after 3, 7, and 14 days.

## Privacy, accessibility, volatility, and deprecation

The exercise stores no source media, paths, extracted values, or response bodies. Every media scenario has a text equivalent; controls are labeled, keyboard accessible, untimed, and not color-only. Analyzer schemas, field types, formats, languages, SDK/REST operations, API versions, limits, regions, pricing, and preview/deprecation status are volatile and must be reverified before live use.
