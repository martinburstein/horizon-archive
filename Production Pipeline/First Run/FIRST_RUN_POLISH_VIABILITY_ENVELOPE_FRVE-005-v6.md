# Horizon Archive First Run Polish Viability Envelope

Envelope ID: `FRVE-005-v6`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-005-v6 / Stranded Lens Cradle - Direct Image API Source
and Fixed Lesson Integration`

Disposition: **`HOLD / AUTHORIZED PS5.1/.NET SURFACE CANNOT PROVE REQUIRED
ONE-LINK AND HANDLE-BOUND FILE IDENTITY`**

Date: **2026-08-11**

Science source inspected:
`9ad6d2345097470c9a66693fa1960c5c7bfb7a80`

Planning controls: `FRRM-005-v6` / `FRSB-005-v6`

Prior Science envelope / decisive Operations revision: `FRVE-005-v5` /
`FRWO-005-v6`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-07`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Immutable accepted-media manifest: `FRAM-001-v1`, file SHA-256
`a674c337b377de113eaa4c6763bd431afc73ab613374a76501aa8c5ce37e5437`,
exact `17 / 37,410,731`, canonical digest
`c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`

Exact next recipient: one fresh Operations Planning Major /
`operations_planning_major`

## Science decision

`FRWO-005-v6` is not technically admissible on its exact authorized
transport surface. Windows PowerShell `5.1.26100.8875` and the installed .NET
Framework expose `System.Net.Http.HttpClient`, exclusive
`FileMode.CreateNew`, `FileShare.None`, `FileStream.Flush(Boolean)`, and the
two-argument `System.IO.File.Move`. They do not expose a managed
`FileInfo.LinkTarget`, file-link-count, file-ID, or handle-bound identity API.

The Work Order nevertheless requires the active staging and final target to
be proved ordinary, **one-link**, non-reparse, and identity-stable before and
after reopen and move. `File.GetAttributes` can reject a reparse point, and an
exclusive handle can reject sharing, but neither proves link count nor binds a
pathname to a stable Windows file identity. On this host the missing proof
would require at least one forbidden expansion: a P/Invoke/`Add-Type` compiled
helper for Windows file-information APIs, an external executable such as an
OS file-identity CLI, or a package/newer runtime. Science may not invent any
of those substitutes.

This is a pre-call, pre-write defect in the Work Order's required
materialization/cleanup contract. Science therefore issues **`HOLD`**. No
fresh Mission stage follows.

Variance classification: **`REQUIRED CORRECTION / FILE LINK-COUNT AND
HANDLE-BOUND IDENTITY PRIMITIVE / EARLIEST OWNER OPERATIONS`**.

## Direct API contract findings

The complete installed `imagegen` skill and its `references/image-api.md` and
`references/codex-network.md` were read under Martin's explicit API authority.
They support the prospective generation endpoint
`POST https://api.openai.com/v1/images/generations`, default new-API model
`gpt-image-2`, `quality=high`, flexible `3840x2160`, opaque PNG output, and a
`data[]` response item carrying `b64_json`.

The exact prospective request remains the seven-member object frozen by
`FRWO-005-v6`: `model`, exact unchanged `HOST06-GEN-PROMPT-v1`, `n=1`,
`size=3840x2160`, `quality=high`, `background=opaque`, and
`output_format=png`, with no other member. The LF-normalized prompt extracted
from `FRSH-005-v1-VR-06` is exact ASCII/UTF-8 length `4,099` with SHA-256
`efd8c7f8b5ca6c0ec9e16ac82cdb008921a480e549b3b0b1b4b767f79e323179`.
The installed `System.Web.Extensions` serializer preserved the ordered seven
members without prompt interpolation.

Only boolean credential presence was observed and it was `true`. No key
value, length, fragment, prefix, suffix, digest, header, request, or
credential-derived value was printed, retained, written, or committed.
`AuthenticationHeaderValue` remains the only lawful prospective Authorization
construction. `HttpClientHandler.AllowAutoRedirect=false`, one explicit
`SendAsync(..., ResponseHeadersRead)`, finite `00:10:00` timeout, no handler
retry, and response disposal remain required.

A TCP/TLS handshake to `api.openai.com:443` succeeded with TLS 1.3 without an
HTTP or Image API request. The installed HttpClient, request/content/header,
stream, serializer, strict UTF-8, SHA-256, and base64 primitives are present.
This proves reachability and type availability only; it does not authorize or
simulate an image request.

## Bounded response and parser findings

Synthetic in-memory non-image fixtures established that the proposed reader
can cap any declared `Content-Length` to `1..16,500,000`, read in chunks no
larger than `65,536`, accept exactly `16,500,000`, and reject the next byte
before an over-cap write. `UTF8Encoding(false,true)` accepted valid UTF-8 and
rejected invalid byte sequences.

An anchored exact-schema recognizer accepted only one top-level `data` array
with one object and one primitive `b64_json` string, allowing only JSON space,
tab, CR, and LF outside tokens. Synthetic duplicate `data`, `url`, extra
member, second item, and trailing-material forms rejected. Its narrow grammar
also bounds depth and excludes nonfinite or oversized alternate structures.

Canonical RFC 4648 fixtures accepted `TQ==`, `TWE=`, and `TWFu`; rejected
bad length, alphabet, whitespace, early/excess padding, URL-safe characters,
and nonzero `==`/`=` pad bits; and proved exact maximum arithmetic
`16,000,000 / 4 * 3 = 12,000,000`. Only after this validation may one
`Convert.FromBase64String` call create the decoded byte array. These parser
findings are viable but cannot cure the independent filesystem HOLD.

On non-200 or any transport/parser failure, only ordinal, stable local failure
code, optional integer status, and cleanup booleans may survive. Response
bodies, API diagnostics, request/prompt JSON, base64, payload, exception dumps,
headers, and credentials remain forbidden output and provenance.

## Staging, move, and cleanup findings

The exact live root, both exact staging paths, and both exact attempt targets
remain absent. They resolve on the Windows `C:` temporary volume outside the
repository. Science did not create the live root, enumerate its parent, or
touch any live child.

A separate GUID-named disposable non-media fixture on the same temporary
volume proved:

- `FileMode.CreateNew` refuses a pre-existing stage without overwrite;
- `FileShare.None`, one bounded write, `Flush(true)`, close, and exact-path
  reopen are available;
- two-argument same-directory `File.Move(stage,target)` succeeds when the
  target is absent;
- a destination created before the move makes `File.Move` throw without
  altering that destination and leaves the stage intact; and
- exact-file deletion followed by nonrecursive exact empty-root deletion
  restores complete absence.

Those observations establish create-new and no-replace behavior. They cannot
establish the required one-link/handle identity, and one observed rename
cannot elevate unavailable managed identity evidence into the full atomic
identity contract. Accordingly stage substitution, hard-link aliasing,
post-move identity, and identity-conditioned cleanup cannot be made
authoritative with the permitted primitives. Cleanup uncertainty would be
terminal and cannot authorize ordinal `3`.

## Frozen technical, physical, and product envelope

All later gates remain exact and unreachable under this HOLD: PNG signature;
checked big-endian chunk sizes/order/CRC; one first `IHDR` at `3840 x 2160`,
8-bit truecolor type `2`, compression/filter/interlace `0`; one pre-IDAT
`sRGB`; only constrained `gAMA`, `cHRM`, and `pHYs`; no alpha, `tRNS`, palette,
profile, text/EXIF/time/animation/private/unknown chunks or trailing bytes;
consecutive nonempty IDAT; last empty IEND; one complete zlib stream; exact
`24,885,360` scanline-structure bytes; and isolated natural-size browser
decode without screenshot, repair, conversion, alternate file, or pixel
reveal.

The exact `PHY-01..12`, source bands, centered `50% 50%` six-layout crop,
`99.5%` relation/approach retention, `1/64 CSS px` mapping lattice, activation/
label/center/anchor/nonoverlap proof, native `44 x 44 CSS px` target, focus,
effective `200%`, forced-color `3px Highlight`, reduced-motion, factual alt,
semantic naming, input convergence, and no-sensory-only-meaning controls from
`FRSH-005-v1-VR-06` remain unchanged.

The predeclared `FRAM-001-v1` manifest file identity remains exact without
opening accepted-media pixels. At most one future fully passing source could
enter the sole product raster path byte-identically, followed only by the sole
`PROVENANCE.md`; this HOLD grants neither import nor provenance authority.
All emitted JavaScript/CSS/module, selected-raster/resulting-media, zero-source-
map, cold/warm decode, local-image-ready, CLS, task, test/build, offline/PBA,
and one complete no-retry E2E caps remain exact.

The fail-closed Host 06 registry, conditional generic-launcher removal, seven
copy slots, one factual alt slot, sole `USE Stranded Lens Cradle`, write-free
LOOK/TALK, completed read-only USE, sole unchanged `L02-03`, exact
`16/16 + 16/16 + 2/2`, answer-free actual-miss remediation, transfer,
explanation, ownership/confidence, sanitizer/private clearing, save restore,
no cross-credit, Demo Tour isolation, return/reload recovery, one-path rail,
both MH-40 outcomes, null deltas, RP-012, and `successor=null` remain frozen.
The shipped product remains offline with one same-origin selected-image
request and zero external runtime requests.

## Ordinals, maturity, protected state, and rollback

- Ordinal `1` remains permanently consumed, opaque, untouched, and never
  retried, recovered, discovered, inspected, or cleaned.
- Ordinals `2` and `3` remain unconsumed and unavailable.
- Direct API calls in Operations v6 and this Science stage remain exact `0`.
- Conservative managed-residual count remains exact `1`, associated only
  with historical ordinal `1`; VR-65 remains separate and inaccessible.
- `FRAM-001-v1` remains immutable at exact `17 / 37,410,731`.
- `FR-03` maturity and inventory remain exactly unchanged at `1 accepted
  shared compression / 1 exact / 10 missing` physical expression.

All thirteen inherited process records remain separate and **OPEN**: VR-17,
VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage 4,
VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope record
also remains **OPEN**.

Repository QA quarantine, `Art Of No Mans Sky Book Scan.pdf`, `Simplilearn
Training Files/`, real browser/profile/save, hidden lore, user work,
accepted-media pixels, the real managed directory, ordinal-1 residual,
OS-temp parent, live API root, VR-65, product media, and all later route state
remained protected.

Rollback is limited to this envelope and synchronized handoff. No product,
runtime, test, media, manifest, copy, provenance, candidate, map, scoreboard,
maturity, residual, schedule, automation, or release state changed.

## Exact Operations handoff

One fresh Operations Planning Major / `operations_planning_major` must read
this complete HOLD and `FRWO-005-v6`, then issue one versioned `WORK ORDER
READY`, `REVISE`, or `HOLD` adjudication. Operations may seek Martin's
explicit authority for a narrowly identified Windows file-identity primitive
or replace the materialization contract with an independently provable lawful
ingress. It may not weaken or reinterpret the one-link/identity requirement,
silently add P/Invoke, `Add-Type`, an executable, package, SDK, CLI, helper,
new runtime, alternate parser/transport, or overwrite primitive.

No Mission, generation/API call, ordinal consumption, live-root allocation,
pixel review, import, copy/provenance, E2E, reveal, maturity advancement, OPEN-
record closure, residual access, schedule, automation, push, release, or
`FIRST RUN COMPLETE` is authorized.

Office of Science Administrator signs **`HOLD / FRVE-005-v6`** from exact
source `9ad6d2345097470c9a66693fa1960c5c7bfb7a80`.
