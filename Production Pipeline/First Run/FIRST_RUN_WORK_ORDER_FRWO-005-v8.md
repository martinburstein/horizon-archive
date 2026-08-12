# Horizon Archive First Run Work Order

Work Order ID: `FRWO-005-v8`

Title: **Stranded Lens Cradle - One Fresh Official-Envelope Image API Attempt**

Stage / stable agent: Operations Planning Major / `operations_planning_major`

Disposition: **`WORK ORDER READY / ONE FRESH NON-V7 ATTEMPT / FRESH SCIENCE
AND MISSION REQUIRED BEFORE API`**

Date: **2026-08-12**

Operations source inspected:
`d709fe35426a5d83494c34a7c0e7f48816ded0ed`

Authority: Martin's explicit bounded Host 06 Image API authorization, including
his direction to keep building; `FRPB-001-v2`; `FRCL-004-v2`; and the closed-v7
reconciliation `FRSH-005-v1-VR-33`.

Planning controls: `FRRM-005-v8` / `FRSB-005-v8`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

First-run address: `FR-03 / Chapter II - Drowned Archive / Host 06`

Learning owner: sole unchanged `L02-03`

Exact next recipient: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Operations decision and attempt budget

Operations accepts the v7 ledger exactly: ordinal `1` is opaque and consumed;
ordinal `2` was consumed by exactly one authoritative `SendAsync` ending at
`PT10_RESPONSE_ENVELOPE`; its status, body, content type, and diagnostic are
unavailable and no cause is inferred; ordinal `3` is unstarted and unavailable.
`FRWO-005-v7` and its entire ordinal domain are closed. Nothing in this Work
Order revives, reuses, renames, inspects, cleans, or infers any v7 ordinal or
residual.

Martin's authorization is literal permission for one bounded Host 06 source
operation, not one particular carrier generation. Because this replacement
does not change the host, source count, endpoint, model, prompt, transport,
media type, product path, canon, or eventual import count, Operations finds
that one separately versioned finite replacement attempt remains within the
existing authority. This is not an open retry policy.

The complete fresh v8 paid-attempt domain is exactly `{A1}`:

- `A1` begins only at its sole authoritative `SendAsync`;
- it permits at most one `POST` and no redirect, retry, alternate request,
  continuation, fallback, edit, variation, or second output;
- any transport, HTTP, content-type, body, UTF-8, JSON, metadata, payload,
  base64, identity, materialization, review, product, validation, or cleanup
  failure is terminal and closes v8;
- objective image rejection also closes v8; there is no `A2`; and
- Science and Mission consume zero attempts. Only the Quartermaster named by a
  later complete `FIRST RUN SHELL READY` contract may begin `A1`.

This Operations stage performs no credential access, request construction,
API send, carrier execution or patch, temp allocation, media read/generation/
import/reveal, product change, runtime change, test, maturity update, release,
or record closure.

## Player-visible outcome and vertical boundary

The sole outcome remains:

```text
exact Host 05 / Sixfold Weir mastery
-> lens-like fragment handoff
-> one distinct local dry Host 06 / Stranded Lens Cradle
-> sole unchanged L02-03 entry and loop
-> unchanged next Drowned learning boundary
```

The source must depict one weathered lens in one tilted conformal cradle on a
dry reachable same-basin continuation, with at least two load/stress contacts,
at least two continuous drainage seams, Host 05 fragment continuity, and a
restrained horizon/reflected-horizon catch. It must remain visibly distinct
from live water, Host 05, a return-like ridge, the Crown, the distant suspended
Tidal Lens, and any second lens/cradle candidate. No text or watermark is
permitted.

Entry remains after exact sanitized Host 05 / `L02-02` mastery. The changed
boundary ends immediately after exact `L02-03` mastery. LOOK/TALK remain
write-free; completed USE remains read-only; remediation stays answer-free;
retry, return, resume, save, privacy, offline, Demo Tour, accessibility, and
hard-stop behavior remain unchanged. Host 07+ is outside scope.

Maturity remains unchanged: `FR-03` physical-host expression stays `FR0 - 1
accepted shared compression / 1 exact / 10 missing`. The total inventory stays
`6 exact / 1 accepted shared compression / 32 missing / 1 unadvanced Witness
expression`. Only Intelligence may advance it from accepted as-built evidence.

## Frozen request and transport

The request remains exact: one non-streaming `POST
https://api.openai.com/v1/images/generations`; model `gpt-image-2`; exact
unchanged `HOST06-GEN-PROMPT-v1`; `n=1`; `size=3840x2160`; `quality=high`;
`background=opaque`; and `output_format=png`. The current official OpenAI
Create image reference supports GPT Image 2 arbitrary divisible-by-16 sizes up
to `3840x2160`, GPT-image `high` quality, opaque background, PNG output, and
base64 image responses. The GPT Image 2 model page lists
`v1/images/generations`.

The existing `HOST06-IMAGE-API-PSNET-v1` posture remains: native Windows
PowerShell/.NET `HttpClient`; environment-only `OPENAI_API_KEY` with only
boolean presence before send; `Authorization: Bearer` used in memory only;
`AllowAutoRedirect=false`; `ResponseHeadersRead`; exact ten-minute timeout;
one request body; bounded response; no SDK, CLI, Python, browser, package,
managed-output discovery, response URL, output hint, accepted-media input, or
alternate endpoint/model/transport.

## Strict official `ImagesResponse` success parser

Science must fixture-prove and freeze a strict structural JSON parser before
Mission can authorize production. It must parse exactly one complete UTF-8
JSON object, reject BOM/malformed UTF-8/trailing content, and detect duplicate
keys at every admitted object layer.

The only admitted top-level keys are `created`, `background`, `data`,
`output_format`, `quality`, `size`, and `usage`. `created` is required as one
nonnegative integral JSON number within signed 64-bit range. `data` is required
as exactly one array with exactly one object. That object admits only one
required canonical RFC 4648 `b64_json` string; `url`, `revised_prompt`, unknown
members, extra payloads, and extra images are rejected. The base64 member stays
bounded to `4..16,000,000` characters and one decoded payload stays bounded to
`1..12,000,000` bytes; the complete response stays bounded to
`1..16,500,000` bytes.

When present, `background`, `output_format`, `quality`, and `size` must be JSON
strings equal to `opaque`, `png`, `high`, and `3840x2160` respectively.
`usage`, when present, is non-authority metadata and admits only nonnegative
integral `input_tokens`, `output_tokens`, `total_tokens` and optional
`input_tokens_details` / `output_tokens_details` objects; each details object
admits only nonnegative integral `text_tokens` and `image_tokens`. Unknown,
duplicate, negative, fractional, overflow, string-coerced, or nested members
are rejected. No metadata may influence selection, identity, credit, runtime,
or provenance, and all response text/bytes/metadata/payload references must be
cleared after bounded decode.

## Mandatory bounded failure evidence

Unlike the retired carrier, the v8 carrier must preserve enough non-secret,
non-media evidence to locate a terminal response-envelope failure without
retaining the response body.

For every completed HTTP response, it must retain in the Quartermaster ledger:

- exact numeric HTTP status (`100..599`);
- normalized lower-case media type without parameters, or exact `absent`;
- bounded response byte count, or exact `cap-exceeded`;
- stable terminal gate and whether `SendAsync` began; and
- on a non-success response only, a sanitized diagnostic projection from a
  strict JSON error envelope: optional `error.type` (128 UTF-8 bytes),
  `error.code` (128), `error.param` (128), and `error.message` (512), each
  truncated only by rejecting the projection and reporting
  `diagnostic-unavailable`; total projection at most 1,024 UTF-8 bytes.

The diagnostic projection must redact bearer/key-like values before durable
writing, reject control characters and nested/non-string values, and never
retain or report headers, Authorization, request JSON, response JSON/body,
base64, generated bytes, stack/exception text, account/project identifiers, or
unrecognized fields. If strict safe projection fails, retain only status,
media type, byte-count state, terminal gate, and `diagnostic-unavailable`.
Failure evidence is operational metadata, not media, provenance, selection
authority, or gameplay evidence. Response and diagnostic buffers are cleared
after projection.

For HTTP success, require exact status `200` and normalized media type
`application/json`; retain those scalars and byte count, then apply the strict
success parser. HTTP, content-type, size, decode, or parser failure remains
terminal even when a diagnostic is unavailable.

## Materialization, review, product, and cleanup envelope

All frozen v7 non-response safeguards remain required and must be restated in
the Science viability and Mission shell: exact retained parent/launcher/
carrier/helper identities; the exact `HOST06-FILE-IDENTITY-PSNET-v1` helper
source/hash/compile/load/cleanup contract; one-link, non-reparse, handle-bound
identity; `FileMode.CreateNew`; one bounded write; `Flush(true)`; close and
exclusive reopen; same-directory atomic no-replace move; and identity-
conditioned exact-path cleanup with no parent/sibling/glob/recursive cleanup.
Fresh v8 attempt paths must be literal and distinct from every v7/helper/
product/protected path, then frozen by Science and Mission before `A1`.

Before any image review, require exact PNG signature, bounded chunks, valid
CRC, one IHDR, exact `3840x2160`, opaque sRGB/no alpha, bounded inflate,
successful independent decode, and absence of disallowed metadata. Review then
requires all frozen `PHY-01..12`, source-retention, six-layout crop,
hotspot/label/center/nonoverlap, keyboard/pointer/touch/focus/reflow/effective
`200%`/forced-color/reduced-motion, PBA, accessibility, performance, offline,
save/privacy, build, served-identity, and bounded E2E predicates.

Rejected material has zero authority and must remain outside the workspace,
unrevealed, with exact cleanup. At most the sole fully passing `A1` source may
be imported byte-identically with create-new semantics to the single
predeclared Host 06 product raster path, followed by its single
`PROVENANCE.md`; no replacement is allowed. Registry/copy/alt remain null-first
until that import. Provenance records only authorized source/request/model,
accepted file identity, helper contract identities, objective review scalars,
and validation results—not credentials, bodies, base64, diagnostics, rejected
identities/pixels, or hidden metadata. Accepted media remain immutable except
for this one authorized additive source.

## Required Science proof and routing

One fresh Science context must, with zero credential access and zero API sends:

1. prove the official-envelope parser against positive and adversarial inert
   fixtures, including documented siblings, arbitrary member order, duplicate
   keys, unknown fields, extra data/items, forbidden item fields, metadata
   shapes, trailing data, malformed UTF-8, base64 bounds, and exact request
   echo checks;
2. prove the response status/media-type/byte-count and sanitized bounded error
   projection using inert fixtures, including secret-like sentinel redaction
   and `diagnostic-unavailable` fallbacks;
3. re-prove exact request identity, one-send/no-redirect behavior, fresh v8
   path isolation, native helper/handle identity, create-new/flush/move,
   PNG/physical/layout/accessibility/product/cleanup/validation envelope, and
   exact absence of controlled paths; and
4. issue one versioned `POLISH VIABILITY READY`, `REVISE`, or `HOLD` artifact.

On PASS, Science routes one fresh Mission Captain, which must issue a complete
new `FIRST RUN SHELL READY` contract before Quartermaster. No role may treat
this Work Order alone as API, credential, media, or production authority.

## Protected boundaries and rollback

Repository QA quarantine, `Art Of No Mans Sky Book Scan.pdf`, `Simplilearn
Training Files/`, Martin's real browser/profile/save, accepted-media pixels,
real managed directories, opaque/managed residuals, all v7 paths and ordinals,
VR-65, hidden lore, and unrelated user work remain inaccessible. All inherited
OPEN process records remain separate and OPEN.

The one-path rail, sole unchanged `L02-03`, equal-dignity MH-40 outcomes,
shared RP-012 ending, all null deltas, and `successor=null` are immutable. No
branch, packet, lesson, reward, access, identity, authority, world response,
Machine/Builder dialogue, hidden-lore answer, Host 07+, RP-013, successor, or
post-ending content is authorized.

Rollback is limited to v8-owned planning artifacts until a later shell exists;
it never resets the repository or touches runtime, evidence, media, protected
state, or user work.

Operations signs **`WORK ORDER READY / FRWO-005-v8 / EXACTLY ONE FRESH A1
ATTEMPT / STRICT OFFICIAL IMAGESRESPONSE AND BOUNDED FAILURE EVIDENCE / FRESH
SCIENCE THEN MISSION REQUIRED / NO CURRENT API OR MEDIA AUTHORITY`**.
