# L-05-07 Mastery and Remediation Key

## Retrieval

1. `evidence/source_manifest.json` declares the source IDs and modalities.
2. `DA-IMG-01` supports the bounded visual structure count.
3. Zero detected response establishes only the bounded measurement; it does not establish dormancy, intent, awareness, failure, or any other cause.
4. Keep a field `null` when the supplied evidence cannot support the requested value.

## Expected field boundaries

| Field | Expected value | Required provenance | Why |
| --- | --- | --- | --- |
| `structure_count` | `1` | `DA-IMG-01` | One monumental suspended landmark is visible in the defined region of interest. |
| `access_surface_detected` | `false` | `DA-IMG-01`, `DA-TEL-01` | The survey found no bounded access surface on the landmark. |
| `audible_response_detected` | `false` | `DA-AUD-01`, `DA-TEL-01` | The bounded audio window contains ambience and zero response events above the configured threshold. |
| `response_meaning` | `null` | all three source IDs | The packet cannot support a meaning for a response that was not detected. |
| `modalities_reviewed` | audio, image, telemetry | source manifest | Confirms the packet was treated as multimodal. |

These are course-authored expected values for the supplied simulated packet, not claims about live Azure output.

## Critical misconception tags

- `invented-value`
- `missing-provenance`
- `false-is-null`
- `description-is-extraction`
- `simulation-is-live-service`

Any critical tag blocks mastery even if other checks pass.

## Transfer key

A defensible maintenance schema maps `panel_count` to the image, `alarm_detected` to the audio, and `peak_temperature_c` to telemetry. `failure_cause` remains `null` unless the packet contains direct supporting evidence. A broad photo description cannot guarantee the named fields, types, or cross-modality provenance.

