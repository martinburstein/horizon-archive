# First Run Polish Viability Variance

Variance ID: `FRVE-005-v7-VR-29`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-005-v7 / Stranded Lens Cradle - Direct Image API Source,
Native Handle Identity, and Fixed Lesson Integration`

Disposition: **`REVISE / ORDINAL 2 PT10 TERMINAL RESULT ACCEPTED / FROZEN
DIRECT REQUEST REMAINS OFFICIALLY SUPPORTED / FROZEN SUCCESS RESPONSE PARSER
IS NOT OFFICIAL-ENVELOPE-COMPATIBLE / STATUS AND DIAGNOSTIC UNAVAILABLE / NO
RETRY OR ORDINAL 3 / FRVE-005-v7-VR-29`**

Date: **2026-08-12**

Science source inspected: `6ddec6c6c4893ecbf100eb29b10fb29125f756a5`

Quartermaster return: `FRCA-005-v5`

Mission shell: `FRSH-005-v1-VR-32`

Prior Science return: `FRVE-005-v7-VR-28`

Effective shell: `FRSH-005-v1` through `FRSH-005-v1-VR-32`

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Science decision

Science read the complete active intake, workflow, registry, full Science
profile, complete `FRCA-005-v5`, `FRSH-005-v1-VR-32`,
`FRVE-005-v7-VR-28`, complete `FRWO-005-v7`, the complete retained parent,
the decoded stored carrier, the exact two deterministic corrections that
produce the current runtime carrier, and current official OpenAI Image API
authority.

The authoritative Quartermaster evidence is accepted without inference:

```text
ordinal=2
sendStarted=true
stable terminal gate=PT10_RESPONSE_ENVELOPE
helper/live/active/product/provenance paths absent=true
response diagnostic/status/body unavailable and not inferred
```

Ordinal `1` remains opaque and consumed. Ordinal `2` is consumed by its sole
`SendAsync`. Ordinal `3` is unstarted and unavailable because this was a
terminal transport/HTTP/content-type envelope result, not a fully reviewed
objective source rejection. Science made no request and authorizes no retry,
new ordinal, repaired carrier execution, alternate endpoint, or fallback.

Variance classification: **`REQUIRED CORRECTION / SUCCESS RESPONSE OBJECT
PARSER DOES NOT ADMIT THE CURRENT OFFICIAL IMAGE RESPONSE ENVELOPE / OPEN`**.

## Current official API adjudication

Science used only current official OpenAI authority:

- the [GPT Image 2 model page](https://developers.openai.com/api/docs/models/gpt-image-2)
  identifies `gpt-image-2` and the `v1/images/generations` endpoint;
- the [Image generation guide](https://developers.openai.com/api/docs/guides/image-generation)
  identifies the Image API as the direct single-prompt generation path and
  states that organization verification may be required for GPT Image models;
  and
- the [Create image API reference](https://developers.openai.com/api/reference/resources/images/methods/generate)
  defines the request parameters and the `ImagesResponse` object.

The frozen request remains viable under that authority:

| Frozen member | Official adjudication |
| --- | --- |
| `POST /v1/images/generations` | supported Image API generation endpoint |
| `model=gpt-image-2` | supported current image model |
| exact prompt, 4,099 bytes | below the documented 32,000-character GPT Image limit |
| `n=1` | supported; one image is the default and one is explicitly lawful |
| `size=3840x2160` | supported maximum; both edges divisible by 16, ratio within 3:1, exact 8,294,400-pixel ceiling |
| `quality=high` | supported GPT Image quality |
| `background=opaque` | supported; avoids the model's unsupported transparent mode |
| `output_format=png` | supported GPT Image output format |

HTTP success remaining exact `200` and requiring JSON content remain viable
fail-closed gates. The authoritative PT10 result does not reveal whether the
response was non-`200` or whether its media type failed the exact comparison.
Science therefore does not attribute the failure to model access,
organization verification, request validation, authentication, rate limits,
content policy, server behavior, media type, or any other cause.

The frozen success response parser is not viable. The current carrier admits
only this entire top-level object shape:

```json
{"data":[{"b64_json":"..."}]}
```

Current official authority defines an `ImagesResponse` with `created`,
`data`, and documented result metadata including `background`,
`output_format`, `quality`, `size`, and `usage`; its official success example
contains those top-level members. GPT Image returns base64 image data by
default, and `data[].b64_json` remains the correct payload field, but a parser
that rejects every documented sibling member is not compatible with the
official response object.

Science confirmed that the frozen regex accepts a synthetic data-only object
and rejects an in-memory synthetic object matching the documented top-level
success example. This test used inert ASCII and no response, credential,
network, media, or file output. The mismatch would be reached at `PT11` on a
documented success object; it does not explain or reclassify the actual PT10
terminal result.

## Required revision boundary

Mission may accept this Science revision only as a no-execution shell
correction. A future carrier, if separately authorized by a new lawful
attempt budget, must:

1. retain the exact endpoint, model, prompt, `n`, size, quality, background,
   output format, one-send/no-redirect posture, bounded body, strict UTF-8,
   canonical base64, and all downstream identity/PNG/review/cleanup gates;
2. parse one strict JSON object rather than regex-match one serialized member
   order;
3. require exactly one `data` array, exactly one image item, and exactly one
   canonical `b64_json` payload while admitting only the documented
   non-payload top-level result metadata and rejecting duplicate keys,
   unknown payload-bearing members, `url`, extra images, and trailing content;
4. validate any admitted `background`, `output_format`, `quality`, and `size`
   values against the request when present, and treat `usage` and `created` as
   bounded non-authority metadata that is neither persisted nor reported;
5. preserve the rule that an HTTP, content-type, body, JSON, payload,
   diagnostic, transport, identity, or cleanup failure is terminal; and
6. expose no credential, header, request/response body, base64, API diagnostic,
   exception, media, pixel, or rejected evidence.

This revision does not create a retry. `FRWO-005-v7` has no remaining lawful
production ordinal after the PT10 terminal result. Mission must retire the
current production authorization and synchronize the closed ordinal ledger;
it may not route Quartermaster or execute the revised parser. Any new API
attempt requires a separately authorized Operations attempt budget and a new
complete Science/Mission contract from Martin's still-bounded Host 06 API
authorization. No such attempt is authorized by this artifact.

## Evidence, protected state, and maturity

Retained source identity remained exact:

```text
parent=58,512 / 943d3e83da37d3cba45f35833e2e283b24e9e1434ed137144a7df31ae6169c39
outer=15,559 / 55a4cf00b76cee30ebca0718e0f26341957ee72727ceaa620f0a20d48c1a317f
launcher=2,001 / 96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
runtime carrier=27,690 / 91bcba2dfd55f0f9af296a9b92bfddd48312cc65aa62aa6a318e1f8fecd72ee0
runtime prefix=976 / 5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
runtime tail=26,714 / 69a70f77940b2dd6457242a979522b9a7d262419968c30860c6e4bf71019c632
```

Science confirmed exact `13/13` controlled-path absence. It made zero API
calls, zero credential accesses, zero ordinal consumption, zero helper/child
executions, zero temp allocations, zero media reads, and zero product,
runtime, test, registry, copy, alt, provenance, manifest, map, scoreboard, or
maturity changes. No source raster or provenance exists; registry/copy/alt
remain null-first.

Repository QA quarantine, protected PDF, training tree, Martin's real
browser/profile/save, accepted-media bytes and pixels, managed residuals,
opaque residuals, VR-65, and hidden lore remained untouched. The one-path
rail, sole unchanged `L02-03`, equal-dignity MH-40 outcomes, shared RP-012
ending, all null deltas, and `successor=null` remain immutable. Maturity does
not advance.

Science changes only this result and `NEXT_INSTANCE_HANDOFF.md`, commits them,
and does not push.

Office of Science Administrator signs **`REVISE / FROZEN REQUEST OFFICIALLY
SUPPORTED / FROZEN SUCCESS PARSER INCOMPATIBLE WITH DOCUMENTED IMAGESRESPONSE /
PT10 CAUSE UNAVAILABLE / ORDINAL 2 CONSUMED / ORDINAL 3 UNAVAILABLE / ZERO
ACTIVITY / FRVE-005-v7-VR-29`** from exact source
`6ddec6c6c4893ecbf100eb29b10fb29125f756a5`.
