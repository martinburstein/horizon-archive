# Horizon Archive First Run Work Order

Work Order ID: `FRWO-005-v6`

Title: **Stranded Lens Cradle - Direct Image API Source and Fixed Lesson Integration**

Stage / stable agent: Operations Planning Major / `operations_planning_major`

Disposition: **`WORK ORDER READY / MARTIN-AUTHORIZED DIRECT IMAGE API
TRANSPORT / EXCLUSIVE STAGING AND NO-REPLACE MOVE / FRESH SCIENCE REQUIRED`**

Date: **2026-08-11**

Operations source inspected:
`b37f2057cbee5a2ab986f56f5326417dee7aac84`

Martin's latest controlling instruction: **imagegen CLI/API fallback is
authorized for Host 06; the API key is set; revise Operations to use direct
Image API transport rather than the defective CLI or Python SDK.**

Reopened baseline / continuity: `FRPB-001-v2` / `FRCL-004-v2`

Superseded Work Order / decisive return: `FRWO-005-v5` / `FRVE-005-v5`

Effective prior shell / returns: `FRSH-005-v1` through
`FRSH-005-v1-VR-07` / `FRCA-005-v2`

Released First Run predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Immutable accepted-media manifest: `FRAM-001-v1`, file SHA-256
`a674c337b377de113eaa4c6763bd431afc73ab613374a76501aa8c5ce37e5437`,
exact `17 / 37,410,731`, canonical digest
`c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`

Planning controls: `FRRM-005-v6` / `FRSB-005-v6`

First-run address: `FR-03 / Chapter II - Drowned Archive / Host 06`

Learning owner: existing sole unchanged `L02-03`
model/deployment/configuration work

Exact next recipient: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Operations adjudication

Operations accepts the complete `FRVE-005-v5` counterexample. The immutable
CLI performs a separate existence check followed by a truncating final-path
write and cannot establish create-new, race-safe, or partial-write-safe
materialization. Its missing local Python `openai` package is an independent
stop. `FRWO-005-v6` withdraws that CLI route completely; it does not patch,
copy, wrap, invoke, or reinterpret it and does not install any dependency.

Martin's explicit API authorization permits the materially different ingress
frozen here. The installed authoritative imagegen references support direct
generation at `POST /v1/images/generations`, identify `gpt-image-2` as the
default for new API workflows, support the exact quality/size/background/
format controls below, and define one `data[]` item containing `b64_json` as
the response transport. The network reference identifies `api.openai.com` as
the API host. Therefore the only prospective live endpoint is exactly:

```text
POST https://api.openai.com/v1/images/generations
```

The transport is native Windows PowerShell 5.1 plus installed .NET Framework
types only. It uses `System.Net.Http.HttpClient` directly and an in-memory
bounded JSON/base64 pipeline. It uses no OpenAI SDK, Python, CLI, script file,
script edit, generated-images directory, `output_hint`, result hint, data URL,
browser, extension, alternate service, or output discovery.

This planning stage establishes no candidate and authorizes no live call.
Fresh Science must independently prove the exact request, response parser,
exclusive staging, strict PNG gate, no-replace move, cleanup, and retained
product envelope without generation, an API request, or pixel review. Fresh
Mission must then issue a new versioned shell before ordinal `2` may run.

## Preserved bounded outcome, route, and maturity

The one player-visible outcome remains exactly:

```text
exact Host 05 / Sixfold Weir mastery
-> lens-like fragment handoff
-> one distinct local dry Host 06 / Stranded Lens Cradle
-> sole unchanged L02-03 entry and loop
-> unchanged next Drowned learning boundary
```

The source must show exactly one visibly weathered lens resting inside one
tilted conformal cradle on a dry, locally reachable same-basin continuation
above current live water. It must show at least two distinct load or stress
contacts, at least two continuous drainage seams, the material-fragment
handoff from Host 05, and a restrained horizon or reflected-horizon catch.
It remains distinct from live water, Host 05, a return-like ridge, the Crown,
the distant suspended Tidal Lens, and any second lens/cradle candidate.

Entry begins only after exact sanitized Host 05 / `L02-02` mastery and the
changed boundary hard-stops immediately after exact `L02-03` mastery. The
one on-foot rail, unchanged next Drowned boundary, shared RP-012 ending,
READY/NOT YET READY dignity, all null deltas, and `successor=null` remain
unchanged. There is no Host 07, RP-013, branch, reward, access, identity,
authority, world response, successor, or post-ending content.

Maturity remains unchanged. `FR-03` remains continuity `FR2`; physical-host
expression `FR0 - 1 accepted shared compression / 1 exact / 10 missing`;
learning `FR2`; behavior/save/recovery `FR1`; content `FR2`; presentation
`FR3`; and prior bounded release proof `FR4`. Only Intelligence may later
record `1 accepted shared compression / 2 exact / 9 missing` from accepted
as-built evidence.

## Frozen prompt and exact API request

Prompt ID is exactly `HOST06-GEN-PROMPT-v1`. Its text is byte-for-byte the
fenced prompt in `FRSH-005-v1-VR-06` under `### HOST06-GEN-PROMPT-v1 exact
text`; no character, line ending after normalization to the request string,
label, order, or meaning may change. There is no augmentation, reference,
image input, edit, variation, accepted-media input, repair, post-process, or
derivative.

For ordinal `2`, and only conditionally ordinal `3`, the request JSON contains
exactly these seven members and values:

```json
{
  "model": "gpt-image-2",
  "prompt": "<exact HOST06-GEN-PROMPT-v1 text>",
  "n": 1,
  "size": "3840x2160",
  "quality": "high",
  "background": "opaque",
  "output_format": "png"
}
```

No other request member exists. In particular there is no input image, mask,
`input_fidelity`, moderation override, compression, response format, user,
streaming option, metadata, seed, or tool/SDK option. Request serialization is
from one predeclared ordered in-memory object through a standard .NET JSON
serializer; the prompt is a string value and is never shell-interpolated into
literal JSON or a command string.

The one request has `Authorization: Bearer <OPENAI_API_KEY from the process
environment only>`, `Content-Type: application/json; charset=utf-8`, and
`Accept: application/json`. The credential is read directly from
`$env:OPENAI_API_KEY` into `AuthenticationHeaderValue`; only its nonempty
boolean may be observed before the request. The value, prefix, suffix, length,
digest, fragment, header, request object, or derived credential may never be
printed, expanded into a command line, serialized into JSON, logged,
transcribed, retained in an exception/report/file, or committed. A missing
key is a pre-call HOLD and consumes no ordinal.

The predeclared transport contract ID is `HOST06-IMAGE-API-PSNET-v1`:

- add only installed framework assemblies `System.Net.Http`,
  `System.Web.Extensions`, and `System.Runtime.Serialization`;
- construct one `HttpRequestMessage(HttpMethod.Post, exact endpoint)` and one
  `HttpClient`; set a finite `00:10:00` client timeout;
- call `SendAsync` exactly once with
  `HttpCompletionOption.ResponseHeadersRead`; no retry handler, redirect,
  proxy override, SDK policy, parallel call, fallback, or second send exists;
- once `SendAsync` begins, the active ordinal is consumed regardless of HTTP,
  timeout, parse, decode, file, or cleanup result;
- require HTTP `200`, JSON content type, and any declared `Content-Length`
  within `1..16,500,000`; stream the body in chunks of at most `65,536` bytes
  into one memory buffer with a hard cumulative maximum of `16,500,000`
  bytes, stopping before an over-cap write;
- strictly decode the body as UTF-8 with invalid-byte rejection, parse exactly
  one JSON document, require a top-level object, exactly one `data` array,
  array count exactly `1`, one object item, exactly one string `b64_json`, no
  second payload, no URL, and no trailing non-whitespace; unknown payload-
  bearing members, duplicate member names, nonfinite/deep/oversized structure,
  or any other response shape are terminal;
- require `b64_json` length `4..16,000,000`, divisible by four, RFC 4648
  alphabet/padding/pad-bit validity, decoded-length arithmetic within
  `1..12,000,000`, then call one in-memory base64 decoder exactly once;
- retain only the decoded byte array long enough for materialization and
  byte-identity validation; dispose response, request, HTTP content, streams,
  JSON/base64 strings, serializer references, and client without emitting
  their contents; and
- on non-200 or any failure, retain only ordinal, stable local failure code,
  HTTP status integer if available, and cleanup booleans. Response bodies,
  API diagnostics, request/prompt JSON, payloads, exception dumps, headers,
  and credentials are never output or retained.

Science must fixture-prove this exact parser and all size/shape boundaries
with synthetic non-image responses. If PowerShell 5.1 cannot reject duplicate
members, enforce the caps, validate RFC 4648 exactly, or keep the credential
and payload out of diagnostics using only the installed framework, Science
must issue `HOLD`; it may not substitute a package, SDK, CLI, script file,
one-off compiled helper, or liberal parser.

## Predeclared exact OS-temp paths and race-safe materialization

The one predeclared live evaluation root is outside the repository and absent
at this Operations stage:

```text
C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-6eae8313-1407-492d-af7c-675051ab8e08
```

The only permitted active pairs are:

```text
ordinal 2 staging: C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-6eae8313-1407-492d-af7c-675051ab8e08\.attempt-02-5f858a43-216c-4344-a4ce-0bfbcd042bcb.stage
ordinal 2 target:  C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-6eae8313-1407-492d-af7c-675051ab8e08\attempt-02.png
ordinal 3 staging: C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-6eae8313-1407-492d-af7c-675051ab8e08\.attempt-03-63422fd8-bf71-489b-921a-5acb0fca7357.stage
ordinal 3 target:  C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-6eae8313-1407-492d-af7c-675051ab8e08\attempt-03.png
```

Operations proved by exact-path existence checks only that the root and all
four child paths were absent. It did not create, list, or mutate the OS-temp
parent. Science must prove scalar parent resolution, canonical containment,
protected-root separation, ordinary non-reparse root/file identity, exact
permissions, absence, and cleanup without parent enumeration.

After a successful response decode, materialization is exactly:

1. prove the inactive ordinal's staging and target remain absent and the
   active staging and target are absent; unexpected root child or identity is
   terminal before any write;
2. open only the exact active staging path through `System.IO.FileStream`
   using `FileMode.CreateNew`, `FileAccess.Write`, `FileShare.None`; any
   pre-existing or racing entry fails without overwrite;
3. write the decoded byte array once with bounded offset/count, call
   `Flush(true)`, close and dispose the exclusive handle; no byte is ever
   written directly to `attempt-0N.png`;
4. reopen only that staging path read-only with `FileShare.None`; require
   ordinary one-link non-reparse identity, exact decoded length and lowercase
   SHA-256 equality, then apply the strict pre-pixel PNG gate below to those
   exact bytes; close every validation handle;
5. re-prove active target absence and staging identity, then call the same-
   directory two-argument `System.IO.File.Move(staging, target)` exactly once.
   This is a no-replace move: an entry racing into the destination makes the
   move fail and must never be overwritten, deleted, or adopted;
6. prove staging absent and target ordinary/non-reparse with the same exact
   length and SHA-256. Only this final exact target may enter pixel review.

Science must fixture-prove CreateNew collision refusal, partial-write cleanup,
write/flush/close failure, stage substitution/identity mismatch, destination
race refusal, no-replace same-directory move behavior, post-move identity,
unexpected-child stops, and every exact cleanup branch. If the two-argument
move is not atomic and no-replace on the exact local filesystem, this Work
Order is `HOLD`; no replacement primitive may be improvised downstream.

Any API, response, decode, staging, validation, move, identity, or cleanup
failure consumes only the active ordinal and stops with no retry and no later
ordinal. Delete only the exact identity-proved active staging or target if it
was created, prove it absent, then delete only the exact empty GUID root
nonrecursively and prove it absent. Cleanup uncertainty is terminal. No parent,
sibling, glob, recursion, pattern, unknown entry, ordinal-1 residual, managed
directory, VR-65, product path, or alternate cleanup is authorized.

## Ordinal and residual ledger

- The total ordinal domain remains exactly `{1,2,3}`.
- Ordinal `1` remains permanently consumed, opaque, untouched, and never
  retried, recovered, discovered, inspected, or cleaned.
- Ordinal `2` remains unconsumed and unavailable until new Science and Mission
  accept this v6 contract.
- Ordinal `3` remains unconsumed. It may run only after ordinal `2` reaches a
  fully identified objective source rejection after final target identity,
  and exact attempt/root cleanup is proved. It is a distinct allowed source,
  not a retry of a transport or file failure.
- Maximum future API calls is exactly `2`, sequential, one request and one
  output per active ordinal. There is no fourth call, automatic/manual retry,
  parallel call, replacement ordinal, or alternate transport.
- Operations v6 API calls remain exact `0`; Science must also make exact `0`.
- Conservative possible ordinal-associated managed residual count remains
  exact `1`, associated only with historical built-in ordinal `1`. Direct API
  ordinals `2` and `3` create no managed output and never alter that count.
- The ordinal-1 residual remains **`DEFERRED LIMITATION / RELEASE-PROCESS
  ONLY / NON-GATING / OPAQUE BUILT-IN MANAGED RESIDUAL`** and untouched.
- VR-65 remains separate, opaque, non-gating, and inaccessible.

An exact target that passes transport, byte identity, and all pre-pixel PNG
gates but fails `PHY-01..12`, composition, mapping, accessibility, or meaning
is an objective source rejection. Delete only that exact target, prove it
absent, delete the exact empty root, and prove it absent. Only successful exact
cleanup authorizes ordinal `3` in a newly re-created, revalidated same literal
root using its own predeclared stage/target pair. If ordinal `3` is rejected,
cleanup is mandatory and the result is `HOLD / ALL LAWFUL ORDINALS CONSUMED /
NO MEDIA CANDIDATE`.

## Technical, physical, import, provenance, and content gates

Before pixel review, the final exact active target must pass the inherited
strict gate unchanged: exact PNG signature; checked big-endian chunk lengths,
order, and CRC; exactly one first `IHDR` with `3840 x 2160`, 8-bit truecolor
type `2`, compression/filter/interlace `0`; exactly one valid pre-IDAT `sRGB`;
only the already-authorized constrained `gAMA`, `cHRM`, and `pHYs`; forbidden
alpha, `tRNS`, palette, profile, text/EXIF/time/animation/private/unknown
chunks, and trailing bytes; consecutive nonempty IDAT; one last empty IEND;
one complete zlib stream and exact `24,885,360` scanline-structure bytes; and
isolated natural-size browser decode at `3840 x 2160`. No repair, conversion,
normalization, alternate decode, screenshot, preview, export, crop, upscale,
post-process, or derivative exists.

Only then may original-resolution `PHY-01..12`, frozen source bands, centered
six-layout presentation, retained relation/approach, physical/activation/
label/center/anchor/nonoverlap/target mapping, native `44 x 44 CSS px` target,
focus stability, effective `200%`, forced-color, reduced-motion, and no-
sensory-only-meaning gates run. All exact predicates and measurements remain
those in `FRSH-005-v1-VR-06`; this Work Order changes no physical, crop,
mapping, access, copy, lesson, save, privacy, or world threshold.

At most the first fully passing source may be copied once, byte-identically
and create-new, to the existing sole product path:

```text
Visual Direction/Production Masters/2026-08-10-first-run-host06/host06-stranded-lens-cradle-master-v1.png
```

Require equal byte length and lowercase SHA-256 between exact target and
product. Only then may the existing sole provenance path be created:

```text
Visual Direction/Production Masters/2026-08-10-first-run-host06/PROVENANCE.md
```

Provenance must record `FRWO-005-v6`, the later effective shell,
`HOST06-IMAGE-API-PSNET-v1`, exact endpoint, model, seven request options,
prompt ID and no-input/no-edit/no-variation declaration, consumed ordinals and
dispositions, selected attempt basename, selected length/SHA, technical/CRC/
decode and `PHY`/layout/accessibility results, immutable manifest digest,
exact product path, accepted-media unchanged declaration, and exact temp
cleanup. It contains no API key/header, request/response body, JSON, base64,
payload, exception, rejected bytes/hash/pixels, hidden diagnostics,
`output_hint`, or generated-images path.

The fail-closed Host 06 registry, conditional generic-launcher removal, seven
copy slots, one factual alt slot, sole `USE Stranded Lens Cradle`, write-free
LOOK/TALK, completed read-only USE, exact `L02-03` evaluator and
`16/16 + 16/16 + 2/2` progression, actual-miss answer-free remediation,
transfer, explanation, ownership/confidence, sanitizer/private clearing, save
projection/restore, no cross-credit, Demo Tour isolation, return/reload
recovery, one-path rail, both MH-40 outcomes, null deltas, RP-012, and
`successor=null` remain unchanged.

## Performance, offline, accessibility, and validation radius

All inherited caps remain exact:

| Measure | Affected cap | Global/result cap |
| --- | ---: | ---: |
| HTTP response body | `1..16,500,000` bytes | memory-only; never retained |
| base64 member | `4..16,000,000` code units | decoded once to `1..12,000,000` bytes |
| emitted JavaScript | `<=1,679,393` | `<=1,703,258` |
| emitted CSS | `<=119,547` | `<=119,672` |
| production modules | `<=218` | `<=222` |
| selected raster | `1..12,000,000` bytes | exact `3840 x 2160` opaque PNG |
| resulting media | exact `18` and `37,410,731 + selectedBytes` | `<=49,410,731` bytes |
| source maps | `0` | `0` |
| cold/warm decode | `<=250ms / <=100ms` | direct browser decode |
| cold local image ready | `<=750ms` | one same-origin request; zero external |
| attributable / total CLS | `<=0.01 / <=0.05` | reserved `16:9` slot |
| Host 06 activation / sampled task | `<=2ms / <=100ms` | same |
| focused / related / cold full | `<=30s / <=60s / <=60s` | same |
| production / fixture build | `<=60s` each | same |
| complete E2E | one invocation `<=180s` | no retry |

The external API is a bounded production-time operation only. The shipped
product remains local/offline with one same-origin selected-image request and
zero external runtime requests. No dependency, lockfile, endpoint, credential,
telemetry, service worker, runtime model call, or external runtime asset is
added.

The later validation order remains: authority/transport/request/target/
manifest gates; Science synthetic HTTP-response/parser/file/move fixtures
without live generation; exact technical PNG/decode gates; original-
resolution physical and six-layout/accessibility gates; focused Host 05-to-06
and complete unchanged `L02-03` learning/privacy/recovery proof; related rail
and ending regression; validators `40/40`, cold full, production and TD-012
fixture builds, PBA, served/offline/decode/task/CLS; exactly one later complete
E2E without retry; owned cleanup; candidate freeze; and Git synchronization.

## Required Science adjudication

One fresh Office of Science Administrator must independently validate this
contract without generation, an API request, or pixel review. It must:

1. pin the authoritative local imagegen skill/reference identities and prove
   the exact endpoint, `gpt-image-2` model, seven request members, one-output
   `data[0].b64_json` response shape, and no unsupported option;
2. repeat only the boolean API-key presence check and freeze the env-only
   Authorization/non-disclosure boundary;
3. pin Windows PowerShell 5.1 and installed framework assemblies/types, then
   fixture-prove the exact ordered request serialization, one SendAsync,
   no-redirect/no-retry behavior, response caps, strict UTF-8/JSON shape,
   duplicate rejection, RFC 4648 validation, decoded-length arithmetic, and
   one-time in-memory decode using synthetic non-image inputs only;
4. prove the literal root/stage/target paths are outside protected roots,
   ordinary/no-follow, absent, bounded to the active pair, and exactly
   cleanable without parent enumeration;
5. fixture-prove `FileMode.CreateNew`, `Flush(true)`, stage byte/SHA/PNG
   identity, partial-write cleanup, source substitution stop, two-argument
   same-directory atomic no-replace move, destination race refusal, post-move
   identity, zero/multiple/unexpected output, and every cleanup branch;
6. freeze the exact strict PNG/chunk/CRC/sRGB/opacity/dimension/inflate/
   browser-decode implementation and limits;
7. preserve the physical, learning, privacy, save, accessibility, performance,
   offline, PBA, import/provenance, validation, no-reveal, rollback, ordinal,
   residual, accepted-media, OPEN-record, and protected-state contracts; and
8. issue exactly one new versioned `POLISH VIABILITY READY`, `REVISE`, or
   `HOLD` artifact.

If the direct response format, invocation, strict parser, secret boundary,
response cap, exclusive staging, or atomic no-replace move cannot be proved
from the installed authoritative references and framework behavior, Science
must issue `HOLD`. It may not silently add a package, SDK, CLI, helper/script,
model, option, retry, output path, parser relaxation, or alternate transport.

## Rollback, protected state, and process records

Rollback remains bounded to the exact selected raster, `PROVENANCE.md`,
bounded Host 06 product/config/test/E2E delta, release-command delta, and cycle
reports after exact identity proof. It never touches the CLI, ordinal `1`, the
real managed directory, any opaque residual, accepted media, Hosts 04/05,
curriculum, save schema, dependencies, Host 07+, later rail, user/untracked
work, browser/profile/save, repository QA quarantine, protected PDF, training
directory, VR-65, OS-temp parent, or a parent root.

All thirteen inherited process records remain separate and **OPEN**: VR-17,
VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage 4,
VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope record
remains **OPEN**. This stage closes, cures, merges, waives, or renumbers none.

Repository QA quarantine, `Art Of No Mans Sky Book Scan.pdf`, `Simplilearn
Training Files/`, real browser/profile/save, hidden lore, user work, accepted-
media pixels, real managed directory, ordinal-1 residual, OS-temp parent, and
VR-65 remain protected. The predeclared API root remains inactive and absent
until a later shell authorizes the active ordinal.

## Validation performed and exact Science handoff

Operations verified exact starting `HEAD`
`b37f2057cbee5a2ab986f56f5326417dee7aac84`; read the active workflow,
registry, complete Operations profile, current handoff, complete
`FRWO-005-v5`, complete `FRVE-005-v5`, current release map/scoreboard,
applicable Host 06 effective-shell controls, and the complete installed
imagegen skill plus `references/image-api.md` and
`references/codex-network.md`. Operations inspected only local PowerShell/
.NET type availability and exact path absence.

No generation or API call, prompt execution, OS-temp allocation, managed-
directory access, response/result/output-hint access, media read/hash/decode,
pixel inspection, import, copy/provenance, product/test change, build, browser,
preview, E2E, reveal, maturity update, OPEN-record closure, VR-65 access,
schedule, automation, push, release, or `FIRST RUN COMPLETE` occurred.

One fresh Office of Science Administrator / `office_of_science_administrator`
reads this complete Work Order and synchronized authorities, performs only the
non-generative/non-API adjudication above, and issues one new versioned
`POLISH VIABILITY READY`, `REVISE`, or `HOLD` artifact.

Science may not invoke generation or the Image API; inspect pixels; allocate
the live attempt root; import media; write copy/provenance; authorize Mission
or Quartermaster; run E2E; reveal; advance maturity; close an OPEN record;
inspect VR-65 or the real managed directory; schedule; automate; push;
release; or call `FIRST RUN COMPLETE`.
