# First Run Polish Viability Envelope

Envelope ID: `FRVE-005-v8`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-005-v8 / Stranded Lens Cradle - One Fresh
Official-Envelope Image API Attempt`

Disposition: **`POLISH VIABILITY READY / ONE FRESH A1 OFFICIAL-ENVELOPE
ATTEMPT IS TECHNICALLY VIABLE / NEW COMPLETE MISSION SHELL REQUIRED / ZERO
CREDENTIAL, API, OR MEDIA ACTIVITY / FRVE-005-v8`**

Date: **2026-08-12**

Science source inspected: `5f3a7c9612f889350877635358ef29f340942a8d`

Planning controls: `FRRM-005-v8` / `FRSB-005-v8`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Science decision

Science independently accepts the closed v7 ledger without inspecting,
inferring, reopening, renaming, or cleaning any v7 ordinal or residual. The
complete new paid-attempt domain is exactly `{A1}` and remains unconsumed. No
retry, `A2`, alternate request, fallback, or continuation exists.

The current official OpenAI authority supports the frozen request. The GPT
Image 2 model page lists `v1/images/generations`; the image-generation guide
supports flexible `gpt-image-2` sizes including `3840x2160` and `high`
quality; and the Create image reference defines GPT-image opaque PNG output,
base64 response data, and an `ImagesResponse` containing `created`, `data`,
and the bounded metadata admitted below:

- https://developers.openai.com/api/docs/models/gpt-image-2
- https://developers.openai.com/api/docs/guides/image-generation
- https://developers.openai.com/api/reference/resources/images/methods/generate

Science fixture-proved the strict official-envelope success parser and the
bounded failure-evidence projection with zero credential access, zero sends,
zero temp allocation, zero media read, and zero product activity. The result
was exact:

```text
SCIENCE_V8_SYNTHETIC_PASS
cases=38
apiSends=0
credentialReads=0
mediaReads=0
tempRoots=0
responseCap=16,500,000
payloadCap=12,000,000
diagnosticCap=1,024
```

No production-ready shell is active. Mission must issue one new complete
`FIRST RUN SHELL READY` contract before Quartermaster may access a credential
or begin `A1`.

## Frozen success-response contract

The carrier must decode one complete strict UTF-8 JSON object, reject a BOM,
malformed UTF-8, malformed JSON, trailing content, duplicate keys at every
admitted layer, and every unknown member. The top-level allowlist is exactly:

```text
created background data output_format quality size usage
```

`created` and `data` are required. `created` is one nonnegative integral JSON
number in signed 64-bit range. `data` is exactly one array containing exactly
one object; that object contains exactly one required canonical RFC 4648
`b64_json` string. `url`, `revised_prompt`, an additional field, payload, or
image is terminal rejection. Although the general Image object documents URL
and revised-prompt alternatives for older DALL-E behavior, the official
reference states GPT image models return base64 and do not support URL output;
therefore rejecting those fields for this exact GPT Image 2 request is
fail-closed and compatible.

The base64 string is exact `4..16,000,000` characters, uses the canonical
alphabet, padding, and pad bits, decodes once in memory to exact
`1..12,000,000` bytes, and round-trips byte-for-byte through canonical base64.
The complete response is exact `1..16,500,000` bytes.

When present, request-echo metadata is strict string equality:

```text
background=opaque
output_format=png
quality=high
size=3840x2160
```

`usage`, when present, admits only nonnegative signed-64-bit integral
`input_tokens`, `output_tokens`, and `total_tokens`, plus optional
`input_tokens_details` and `output_tokens_details`. Each details object admits
only nonnegative integral `text_tokens` and `image_tokens`. Fractional,
negative, overflow, Boolean, string-coerced, duplicate, unknown, or nested
values reject. `created` and `usage` are non-authority metadata and may not
affect selection, identity, credit, provenance, or gameplay. Response,
metadata, base64, and decoded references are cleared after the bounded decode.

Positive fixtures covered the documented metadata envelope, minimal lawful
envelope, and arbitrary member order. Adversarial fixtures covered duplicate
top/item/usage/detail keys; unknown fields at all layers; URL and
`revised_prompt`; missing and additional data; missing required fields;
negative, fractional, overflow, and string-coerced integers; mismatched echo
metadata; invalid alphabet/padding/pad bits; trailing content; BOM; malformed
UTF-8; and the complete-body cap.

## Frozen HTTP and bounded failure evidence

The exact transport remains native Windows PowerShell/.NET `HttpClient`, one
non-streaming `POST https://api.openai.com/v1/images/generations`, redirects
disabled, `ResponseHeadersRead`, exact ten-minute timeout, environment-only
`OPENAI_API_KEY`, one in-memory request, and one authoritative `SendAsync` at
most. `A1` begins when that call begins and is consumed regardless of outcome.

For every completed HTTP response the carrier retains only numeric status
`100..599`, normalized lower-case media type without parameters or `absent`,
bounded byte count or `cap-exceeded`, stable terminal gate, and
`sendStarted`. Success requires exact `200`, `application/json`, and the
success parser above.

For non-success only, the strict diagnostic envelope admits exactly one
top-level `error` object and only optional string `type`, `code`, `param`, and
`message`. UTF-8 caps are `128 / 128 / 128 / 512`; the complete projection is
at most `1,024` bytes. Duplicate, unknown, nested, non-string, control,
oversize, malformed, or unsafe content yields exactly
`diagnostic-unavailable`. Bearer/key-like substrings are redacted before any
durable projection. Synthetic tests proved a safe four-field diagnostic,
secret-like sentinel redaction, and unavailable fallbacks for unknown,
control, nested, oversize, malformed, and extra-top-level cases.

No header, Authorization value, request JSON, response JSON/body, base64,
generated byte, exception/stack text, account/project identifier, request ID,
or unknown field may be retained or reported. Failure evidence is operations
metadata only and has no media, provenance, gameplay, identity, or selection
authority.

## Frozen request, source, and path identity

The request is exactly seven members: `model=gpt-image-2`, exact unchanged
`HOST06-GEN-PROMPT-v1`, `n=1`, `size=3840x2160`, `quality=high`,
`background=opaque`, and `output_format=png`. Science independently extracted
the canonical prompt from `FRSH-005-v1-VR-06` and proved exact `4,099` ASCII /
UTF-8 bytes and SHA-256
`efd8c7f8b5ca6c0ec9e16ac82cdb008921a480e549b3b0b1b4b767f79e323179`.
No request field may be omitted, added, reordered for semantic substitution,
or changed after Mission freezes its exact serializer.

Retained immutable source identity remains:

```text
parent=58,512 / 943d3e83da37d3cba45f35833e2e283b24e9e1434ed137144a7df31ae6169c39
outer=15,559 / 55a4cf00b76cee30ebca0718e0f26341957ee72727ceaa620f0a20d48c1a317f
launcher=2,001 / 96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
retired runtime carrier=27,690 / 91bcba2dfd55f0f9af296a9b92bfddd48312cc65aa62aa6a318e1f8fecd72ee0
runtime prefix=976 / 5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
retired runtime tail=26,714 / 69a70f77940b2dd6457242a979522b9a7d262419968c30860c6e4bf71019c632
helper source=1,693 / 98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97
```

The retained runtime carrier is evidence and construction input only; its old
response parser is not executable authority. Mission must freeze a new exact
v8 combined-carrier identity after replacing only the response/status/
diagnostic contract required by `FRWO-005-v8`. Launcher, helper source,
pre-response transport, materialization, review, product, and cleanup behavior
remain unchanged. Any unclassified byte delta is terminal `REVISE`.

Fresh v8 paths are now literal and frozen:

```text
helperRoot=C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-v8-5fbbd31e-8b50-4cb4-a0d3-c2f0d4b9e8aa
helperDll=<helperRoot>\Host06FileIdentity.dll
liveRoot=C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-v8-3f7d8a21-76c5-4d4e-9641-b2f5e73a019c
A1Stage=<liveRoot>\.attempt-A1-95a70af8-f9d0-49dc-87dc-89675212ed35.stage
A1Target=<liveRoot>\attempt-A1.png
A1Decision=<liveRoot>\.attempt-A1.review-v1
```

Science proved those six paths and the three exact product paths absent:
`V8_CONTROLLED_PATHS_ABSENT / 9`. It did not inspect any v7 path. Mission must
preserve these literals; no second-attempt path exists.

## Materialization, review, product, and validation envelope

The unchanged native-helper envelope remains mandatory: exact helper source,
bounded `Add-Type` output only under `helperRoot`, current-run DLL byte/length/
SHA freeze, in-memory load, exclusive byte reobservation, exact reflection
surface, handle-bound five-scalar file identity, one link, no reparse point,
exact size, identity-conditioned exact-path deletion, and nonrecursive deletion
of only the empty owned root. The already accepted same-source dynamic helper
proof remains applicable; this stage re-proved the exact source identities and
all ordered `PH01..PH08` / `PT01..PT18`, redirect, one-send, create-new,
flush, move, review, product, and cleanup markers without executing the
retired carrier.

Decoded bytes use exact `FileMode.CreateNew`, one bounded write, `Flush(true)`,
close, exclusive reopen, handle-tuple equality, one-link/non-reparse/size
proof, same-directory atomic no-replace move, and final-target identity proof.
Substitution, link/reparse drift, collision, uncertain identity, or cleanup
failure is terminal. Cleanup targets only an exact identity-proved owned file
and its exact empty owned root; never a parent, sibling, glob, recursive root,
managed directory, v7 path, opaque residual, repository path, or protected
path.

Before image review the source must pass exact PNG signature, chunk order and
CRC, one `IHDR`, `3840x2160`, 8-bit truecolor type 2, opaque sRGB/no alpha,
bounded complete inflate, independent decode, and disallowed-metadata absence.
The original source then must pass all frozen `PHY-01..12`, source-retention,
six-layout crop, hotspot/label/center/nonoverlap, keyboard/pointer/touch/focus,
reflow/effective `200%`, forced-color, reduced-motion, PBA, accessibility,
performance, offline, save/privacy, production-build, served-identity, and
bounded E2E predicates.

Rejected material has zero authority, remains outside the workspace and
unrevealed, and is exactly cleaned. At most sole fully passing `A1` may be
imported byte-identically with create-new semantics to:

```text
Visual Direction/Production Masters/2026-08-10-first-run-host06/host06-stranded-lens-cradle-master-v1.png
Visual Direction/Production Masters/2026-08-10-first-run-host06/PROVENANCE.md
```

Registry/copy/alt remain null-first until that import. Provenance may record
only authorized request/source/model, accepted file identity, helper
identities, objective review scalars, and validation results. It may not
record credentials, headers, bodies, base64, diagnostics, rejected identity,
pixels, or hidden metadata.

## State, accessibility, learning, and performance invariants

The player-visible boundary remains exact Host 05 mastery -> fragment handoff
-> one local dry Stranded Lens Cradle -> sole unchanged `L02-03` loop ->
unchanged next Drowned boundary. LOOK/TALK are write-free; completed USE is
read-only; remediation is answer-free. Evidence ownership, no-cross-credit,
privacy/transient clearing, deterministic save/resume/recovery, offline and
no-authority behavior, Demo Tour no-credit, input convergence, focus,
announcement, reflow, effective `200%`, forced color, reduced motion, and all
existing performance budgets remain unchanged.

No image can imply an answer, purpose certainty, Builder/Machine statement,
recognition, reward, access, identity, authority, invitation, world response,
or hidden lore. There is no branch, new packet, new lesson, Host 07+, RP-013,
successor, or post-ending content. READY and NOT YET READY retain equal
dignity and the shared RP-012 ending with `successor=null`.

## Evidence limits, maturity, and exact handoff

Science made zero credential reads, request constructions, sends, ordinal
consumptions, helper/child executions, temp allocations, media reads, pixel
reviews, imports, reveals, runtime/product changes, tests/builds, registry/
copy/alt changes, maturity updates, releases, or record closures. Repository
QA quarantine, protected PDF, training tree, Martin's real browser/profile/
save, accepted-media bytes/pixels, managed or opaque residuals, VR-65, hidden
lore, and unrelated work remained untouched.

Maturity is unchanged: `FR-03` physical-host expression remains `FR0 - 1
accepted shared compression / 1 exact / 10 missing`; total inventory remains
`6 exact / 1 accepted shared compression / 32 missing / 1 unadvanced Witness
expression`. No source raster or provenance exists.

One fresh Mission Captain reads the full required intake/profile, this entire
envelope, complete `FRWO-005-v8`, `FRSH-005-v1-VR-33`, `FRVE-005-v7-VR-29`,
`FRCA-005-v5`, retained sources, current official authority, and current
`FRRM-005-v8` / `FRSB-005-v8`. Mission must construct and parser-check the
exact new v8 carrier, freeze its byte identities, retain the literal paths and
all contracts above, and issue one complete `FIRST RUN SHELL READY`, `REVISE`,
or `HOLD`. Only a complete READY shell may route one fresh Quartermaster to
begin the sole `A1` send.

Office of Science Administrator signs **`POLISH VIABILITY READY /
FRVE-005-v8 / EXACTLY ONE FRESH A1 / STRICT OFFICIAL IMAGESRESPONSE AND
BOUNDED SECRET-SAFE FAILURE EVIDENCE FIXTURE-PROVED / COMPLETE MISSION SHELL
REQUIRED / ZERO API AND MEDIA ACTIVITY`** from exact source
`5f3a7c9612f889350877635358ef29f340942a8d`.
