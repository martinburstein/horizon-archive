# First Run Polish Viability Envelope Variance - 4K Response Budget

Envelope ID: `FRVE-005-v9-VR-01`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Disposition: **`POLISH VIABILITY READY / REQUIRED RESPONSE-ENVELOPE
CORRECTION / 4K TRUECOLOR PNG AND BASE64 BUDGETS / FRESH OPERATIONS THEN
MISSION REQUIRED / ZERO API OR MEDIA ACTIVITY`**

Source ledger: `FRCA-005-v9`

Date: **2026-08-12**

Exact next recipient: one fresh Operations Planning Major /
`operations_planning_major`

## Science decision

Science accepts the exact v9 result without inference: B1 made one send,
returned HTTP `200` and `application/json`, exceeded the complete-response cap
of `16,500,000` bytes, and was discarded before JSON/Base64/media processing.
B1 is consumed, v9 cannot retry, all nine paths are absent, and no image or
product evidence exists.

The old limits are internally inconsistent with an incompressible lawful
`3840x2160`, 8-bit, truecolor PNG. One raw RGB scanline domain is
`3840 * 3 + 1 = 11,521` bytes; `2,160` scanlines total `24,885,360` bytes
before bounded zlib/PNG framing. Therefore a decoded-PNG cap of `12,000,000`
can reject a technically valid 4K truecolor source, and its corresponding
Base64/JSON caps are also too small. The HTTP-200 cap exceedance is consistent
with that contract defect but does not prove the discarded body valid.

Science issues **`POLISH VIABILITY READY / REQUIRED CORRECTION`** for a
separately versioned attempt only. It does not revive B1 or authorize a send.
No credential presence/value, request, API, media, temp path, pixel, product,
browser, or protected state was accessed.

## Corrected bounded envelope

A future shell may replace only the three response-size ceilings:

```text
complete response bytes: 1..40,500,000
canonical b64_json characters: 4..40,000,000
decoded PNG bytes: 1..30,000,000
```

The `30,000,000` decoded cap exceeds the `24,885,360` raw scanline domain by
more than five million bytes while remaining finite. Its canonical Base64
maximum is exactly `40,000,000` characters. The response cap leaves `500,000`
bytes for the strict admitted ImagesResponse metadata and JSON syntax. These
ceilings do not admit a second data item, URL, revised prompt, unknown field,
duplicate, trailing value, malformed Base64, alternate dimensions, alpha,
text, private chunks, animation, or extra output.

The response must still be read in bounded `65,536`-byte chunks with a check
before every append. `Content-Length`, when present, must be within the same
complete-response bound. Strict UTF-8/no BOM, duplicate detection, the exact
official ImagesResponse field allowlist, exactly one canonical `b64_json`,
and all numeric/request-echo rules remain unchanged. Base64 decoded length is
precomputed from canonical length/padding before one decode and must be within
the decoded cap.

The future retained 64-bit PS5.1 process must bound peak live response memory:
dispose the HTTP stream/response before JSON processing, clear raw response
bytes immediately after strict UTF-8 conversion, clear the JSON object/text
after extracting the single Base64 scalar, clear Base64 after decode, and
clear decoded bytes immediately after identity-proved materialization. At no
point may a second response, second payload, derivative, or report copy exist.

## Unchanged gates

All other v9 controls remain conjunctive and exact: status `200`, normalized
`application/json`, secret-safe non-success projection, exact endpoint/model/
prompt/options, one send, strict parser, PNG signature/chunk/order/CRC/IHDR,
exact `3840x2160` type-2 opaque sRGB, bounded inflate, independent decode, no
text/watermark/metadata/trailing bytes, same-run helper identity, CreateNew/
Flush/handle identity/atomic no-replace materialization, private no-reveal
review, `PHY-01..12`, six-layout/accessibility gates, byte-identical import,
provenance, runtime null-slot population, PBA, tests/build/served/E2E, cleanup,
rollback, canon, learning, privacy, save, and ending boundaries.

Product media still must satisfy the released aggregate cap after import. One
accepted source would make the media inventory at most `18` files and
`67,410,731` bytes under this corrected maximum; Operations and Mission must
explicitly update the former `49,410,731` media cap before any future call.
Decode performance remains measured rather than assumed; failure closes the
future attempt and rolls back exact owned files.

## Exact Operations handoff

One fresh Operations Planning Major may create one separately versioned,
finite, no-retry Work Order under Martin's active Host 06 funded instruction.
It must retire v9 B1, use fresh literal paths and attempt identity, adopt the
corrected `40,500,000 / 40,000,000 / 30,000,000` response/Base64/PNG envelope
and media aggregate `<=18 / 67,410,731`, preserve every unchanged gate above,
and route fresh Mission for newly retained sources and a credential-cleared
fixture before Quartermaster. Operations may instead HOLD for Martin. Science
authorizes no API call.

Office of Science Administrator signs **`POLISH VIABILITY READY /
FRVE-005-v9-VR-01 / BOUNDED 4K RESPONSE CORRECTION / ZERO API OR MEDIA /
FRESH OPERATIONS NEXT`**.
