# Horizon Archive First Run Polish Viability Envelope

Envelope ID: `FRVE-005-v3`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-005-v3 / Stranded Lens Cradle - One New Source and Fixed
Lesson Integration`

Disposition: **`POLISH VIABILITY READY / STRICT PNG DATA-URL INGRESS AND
BOUNDED OPAQUE BUILT-IN MANAGED RESIDUAL POLICY VIABLE`**

Date: **2026-08-11**

Science source inspected:
`d7dde19de3042bd60d17940d90adf0a7c9ef9e2b`

Baseline / continuity: `FRPB-001-v2` / `FRCL-004-v2`

Superseded Work Order / prior viability: `FRWO-005-v2` / `FRVE-005-v2`

Effective prior Science variances: `FRVE-005-v2-VR-01` /
`FRVE-005-v2-VR-02`

Base shell / effective Mission variances: `FRSH-005-v1` /
`FRSH-005-v1-VR-01` / `FRSH-005-v1-VR-02` /
`FRSH-005-v1-VR-03` / `FRSH-005-v1-VR-04` /
`FRSH-005-v1-VR-05`

Quartermaster return: `FRCA-005-v1 / HOLD`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Immutable accepted-media manifest: `FRAM-001-v1`

Planning controls: `FRRM-005-v3` / `FRSB-005-v3`

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Science decision

`FRWO-005-v3` is technically viable and fail-closed. A future built-in result
may use exactly one direct `image_url` string as ingress only when it is one
canonical `data:image/png;base64,` value. One bounded non-copying validation
pass over the base64 text precedes one streaming base64 decode into one
create-new OS-temp candidate. Decoded-payload count and SHA-256 are then
independently reconciled against an exact read of that candidate before any
PNG, browser-decode, or pixel gate.

The installed built-in image-generation skill states that built-in output is
saved under `$CODEX_HOME/*` by default and that a project-bound selected final
must be moved or copied into the workspace. It does not require deletion of
every default output. The direct payload can supply the byte-identical project
copy while an inaccessible default output remains tool-owned and outside the
repository. Therefore the bounded residual policy in `FRWO-005-v3` is
acceptable under the exact separation below; it is not a privacy, security,
product, provenance, PBA, rollback, or release blocker.

This finding is narrow. Each consumed ordinal is conservatively charged one
possible managed residual whether or not a file exists. The residual has no
path, content, identity, evidence, provenance, candidate, reuse, reveal,
rollback, maturity, or release authority. No role may inspect the managed
root or infer cleanup from discarded references. Ordinal `1` is consumed and
counts as possible residual `1`; only ordinals `2` and `3` remain; maximum
future calls is `2`; maximum ordinal-associated residual count is `3`; a
fourth call or fourth such count is forbidden. VR-65 remains a different
opaque external QA residual and is never included in this count.

If the installed skill policy changes to require zero default retention, a
security/privacy/storage authority rejects any opaque default retention, or a
future result cannot satisfy the direct payload contract, the pass stops. No
managed discovery or cleanup is an alternative.

No asset, attempt, prompt revision, coordinate, copy, candidate, source
mapping, or residual existence is accepted by this envelope. No maturity or
inventory advances.

## Exact strict result and data-URL firewall

Mission must freeze one executable adapter with all of these ordered rules.
Any disagreement, unavailable primitive, unexpected result, allocation
failure, write failure, or cleanup uncertainty fails closed.

1. **Ordinal and temp authority first.** Before a future call, require exact
   ordinal `2` or `3`, prior-ordinal disposition, and residual accounting.
   Resolve the OS temporary parent as a scalar without listing it. Create one
   fresh GUID-in-D-format direct child with create-new semantics, prove strict
   containment below that parent and separation from the repository, managed,
   accepted-media, user, browser/profile/save, protected, QA, and residual
   roots, and predeclare only absent `attempt-0N.png`. No fallback path,
   recursive operation, glob, or parent enumeration exists.
2. **Exactly one result.** Accept one direct non-array result object from one
   built-in call. Require one direct own data property named `image_url` whose
   value is a primitive string. Do not traverse nested values or coerce a
   value. The object may contain tool metadata, including `output_hint`, but
   every such field is opaque and unread. Arrays, wrappers, multiple results,
   accessors, missing/non-string `image_url`, or an ambiguous result are a
   transport rejection. JavaScript object semantics admit only one direct
   `image_url` value; the adapter consumes no other candidate-bearing field.
3. **Literal prefix and length before content.** Require the exact 22-code-unit
   prefix `data:image/png;base64,` at offset zero. Total string length must be
   `26..16,000,022` code units, making payload length exactly
   `4..16,000,000`, divisible by four. The payload begins at offset `22`; the
   adapter does not call `split`, `substring`, `slice`, `replace`, a regular
   expression, `atob`, `Buffer.from(fullPayload)`, or another whole-payload
   copier. The bound follows exactly from
   `4 * ceil(12,000,000 / 3) = 16,000,000`.
4. **RFC 4648 canonical base64.** One index-only validation pass permits only
   ASCII `A-Z`, `a-z`, `0-9`, `+`, and `/`, plus zero, one, or two final `=`
   characters. Padding appears only at the end and matches the final quartet.
   Whitespace, CR/LF, percent encoding, URL-safe alphabet, control/non-ASCII
   code units, comma, colon, semicolon, fragment/query syntax, a second
   prefix/separator, early/excess padding, or trailing material rejects. For
   `==`, the second sextet's low four bits must be zero; for `=`, the third
   sextet's low two bits must be zero. This rejects noncanonical pad bits.
5. **Decoded-length proof before allocation.** Compute only
   `(payloadLength / 4) * 3 - paddingCount` with checked integer arithmetic and
   require `1..12,000,000`. No decode or file write begins before this value
   passes.
6. **Exactly one streaming decode.** Open only the predeclared target with
   create-new semantics. Decode each quartet exactly once with the same fixed
   table used by validation, writing sequentially through one reusable buffer
   of at most `196,608` bytes. Simultaneously count decoded bytes and update
   one SHA-256 state. Do not retain a full decoded buffer, create a second
   payload string, decode again, normalize, repair, convert, export, or write
   any other file. Require the final count to equal the precomputed decoded
   length; flush and close the writer before any read.
7. **Payload/temp identity.** Reopen only the exact temp candidate read-only,
   independently stream it once to EOF, count bytes, and compute lowercase
   SHA-256. Require equality with the decode-time count and digest before PNG,
   metadata, browser-decode, pixel, or `PHY-01..12` work. Identity mismatch is
   an opaque stop, never a candidate rejection.
8. **Reference disposal.** After identity, clear the reusable decode buffer
   and release the base64 string, decoded-state, and result references before
   later inspection. This is bounded in-process reference disposal only. It
   never proves, claims, or attempts managed-output deletion.

The result string has a deterministic maximum of `16,000,022` UTF-16 code
units, at most `32,000,044` bytes of worst-case code-unit storage. Adapter-
owned decoded buffering is capped at `196,608` bytes plus fixed hash/parser
state. The adapter must validate by index and stream decode so it creates no
second full transport or decoded copy. An allocation or memory-pressure fault
is a consumed-ordinal opaque stop with exact temp cleanup, not permission to
raise the cap or switch tools.

## Exact PNG, chunk, color, size, and decode gate

Only after payload/temp identity passes may the same exact temp file enter one
read-only structural parser. The parser follows the W3C PNG Third Edition and
is intentionally stricter than a general PNG decoder:

1. Require exact signature bytes
   `89 50 4E 47 0D 0A 1A 0A` and total file length equal the already-proved
   `1..12,000,000` bytes.
2. Parse every chunk as checked big-endian unsigned length, four exact type
   bytes, data, and CRC. Reject arithmetic overflow, length beyond remaining
   bytes, chunk length above `2^31-1`, non-letter type bytes, a lowercase
   reserved/type byte, and any CRC mismatch. CRC covers type plus data.
3. Require exactly one first `IHDR`, length `13`, with width `3840`, height
   `2160`, bit depth `8`, color type `2` truecolor, compression `0`, filter
   `0`, and interlace `0`. This fixes 8-bit RGB with no alpha channel.
4. Require exactly one `sRGB` before the first `IDAT`, length `1`, rendering
   intent integer `0..3`. Optional `gAMA` is allowed at most once before IDAT
   only with length `4` and value `45455`. Optional `cHRM` is allowed at most
   once before IDAT only with length `32` and exact values
   `31270,32900,64000,33000,30000,60000,15000,6000`. Optional `pHYs` is
   allowed at most once before IDAT only with length `9`, nonzero X/Y density,
   and unit `0` or `1`.
5. Permit one or more consecutive `IDAT` chunks with nonzero aggregate data,
   followed by exactly one last `IEND` of length zero. Require no byte after
   `IEND`. Reject nonconsecutive IDAT, an empty aggregate, duplicate required
   chunks, and every other chunk, including `PLTE`, `tRNS`, `iCCP`, `sBIT`,
   text, EXIF, time, unknown/private, or APNG chunks. The strict allowlist
   prevents transparency, alternate color authority, executable/opaque
   metadata, animation, and trailing payloads.
6. Stream-inflate the concatenated IDAT zlib stream once without unfiltering,
   rendering, retaining, or inspecting pixels. Require one complete zlib
   stream, no compressed trailing data, exactly `24,885,360` inflated bytes
   (`2160 * (1 + 3840 * 3)`), exactly 2160 scanlines, and filter byte `0..4`
   at every `11,521`-byte scanline boundary. Inflate failure, length drift,
   invalid filter, or trailing data rejects.
7. Require a direct decode of that exact temp file in a clean isolated
   headless browser with natural dimensions `3840 x 2160`. No repair,
   conversion, alternate file, screenshot, preview, browser profile, or image
   emission is allowed. Decode failure rejects before visual suitability.

The structural combination `IHDR color type 2 / bit depth 8`, required sRGB,
and forbidden `tRNS`/alpha/color-profile alternatives proves exact opaque
8-bit sRGB semantics. MIME spelling and prompt intent are never format or
color evidence. W3C PNG requires signature/IHDR/IDAT/IEND ordering, chunk
lengths and CRCs, and defines `sRGB` as declaring sRGB samples; RFC 4648
requires rejection of nonalphabet material when not expressly permitted and
defines zero pad bits for canonical base64:

- <https://www.w3.org/TR/png-3/>
- <https://www.rfc-editor.org/rfc/rfc4648.html>

## Rejection classes and exact cleanup

Failure is classified before any later ordinal:

- **Opaque transport stop:** result shape, direct field, grammar, canonical
  base64, length arithmetic, allocation, create-new write, one-time decode,
  or payload/temp identity failure. The ordinal is consumed, no `PHY-*` code
  exists, and no further call is authorized. Close handles; if the exact temp
  file was created, delete only that exact file after exact child/file
  identity proof and prove it absent; delete only the exact empty GUID child
  nonrecursively and prove it absent. Cleanup uncertainty remains terminal.
- **Objective source rejection:** a fully identified candidate fails the PNG,
  chunk, color, dimensions, size, inflate, browser-decode, or later
  `PHY-01..12`/composition/accessibility gate. Retain only the permitted
  ordinal, prompt/tool-if-supplied, stage result, and stable rejection codes;
  retain no payload, base64, result, pathname, bytes, digest, pixels, or
  diagnostics. Delete and prove absent the exact candidate, then the exact
  empty GUID child. Only successful exact cleanup may permit the next and
  final ordinal.
- **Cleanup failure:** any close, identity, deletion, absence, or empty-child
  proof failure is terminal `HOLD`. It never authorizes parent listing,
  recursive/pattern cleanup, residual discovery, another call, or reuse.

Every rejection remains outside the repository and has zero product, canon,
continuity, evidence, provenance, reuse, reveal, maturity, or release
authority.

## Selected import, provenance, and residual separation

At most the first fully passing candidate may be selected. The two and only
two media-owned workspace paths remain:

```text
Visual Direction/Production Masters/2026-08-10-first-run-host06/host06-stranded-lens-cradle-master-v1.png
Visual Direction/Production Masters/2026-08-10-first-run-host06/PROVENANCE.md
```

The raster target must be absent and created new. Stream-copy the selected
temp file once to that exact target; close it; independently require product
byte length and lowercase SHA-256 to equal the selected temp identity. Only
then write create-new provenance. Provenance records Work Order/shell; built-
in tool/mode/model identity if supplied; prompt ID/version and no-image-input
declaration; consumed ordinals; strict direct-data-URL, canonical-base64,
single-decode, temp-create, payload/temp-identity, PNG/chunk/sRGB/opacity/
dimension/size/inflate/browser-decode results; selected product bytes/SHA;
`PHY-*` and layout results; immutable manifest digest; product path; and the
bounded possible managed-residual count/classification.

Provenance contains no data URL, payload, `output_hint`, result object,
managed/temp path, rejected bytes/hash/path/pixels, opaque identity, prompt
secret, credential, or hidden diagnostic. It explicitly states that the
managed residual was not inspected, copied, moved, deleted, or used, that its
possible count is conservative rather than existence proof, and that accepted
media was neither input nor changed.

After provenance succeeds, delete only the exact selected temp candidate and
exact GUID child and prove both absent. Product identity, provenance, or exact
temp cleanup failure triggers bounded rollback of only the new product raster
and provenance after exact identity proof. Rollback never touches a managed
residual, VR-65, accepted media, or a parent root.

## PBA, offline, privacy, and runtime budgets

The data URL is transport-only and never enters source, config, provenance,
Git, build output, browser storage, logs, reports, or runtime. It therefore
does not count as a production media or bundle asset. A static diff/build gate
must prove no literal `data:image/png;base64,` and no selected base64 payload
in product/source/report output. The selected PNG alone is the product media
delta.

The frozen result caps remain exact:

| Measure | Affected cap | Global/result cap |
| --- | ---: | ---: |
| emitted JavaScript | `<=1,679,393` | `<=1,703,258` |
| emitted CSS | `<=119,547` | `<=119,672` |
| production modules | `<=218` | `<=222` |
| selected raster | `1..12,000,000` bytes | exact `3840 x 2160` PNG |
| resulting media | exact `18` and `37,410,731 + selectedBytes` | `<=49,410,731` bytes |
| source maps | `0` | `0` |
| cold/warm decode | `<=250ms / <=100ms` | direct browser decode |
| cold local image ready | `<=750ms` | one same-origin request; zero external |
| attributable / total CLS | `<=0.01 / <=0.05` | reserved `16:9` slot |
| Host 06 activation / sampled task | `<=2ms / <=100ms` | same |
| focused / related / cold full | `<=30s / <=60s / <=60s` | same |
| production / fixture build | `<=60s` each | same |
| complete E2E | one invocation `<=180s` | no retry |

Normal runtime remains local/offline and makes exactly one same-origin selected
image request and zero external requests. Generation is a bounded production-
time built-in operation only. No dependency, lockfile, service, endpoint,
credential, telemetry, download, clipboard, external storage, service worker,
Python/WASM runtime, or runtime model call is added.

No learner/user image, accepted media, response, save, browser/profile data,
hidden lore, or private work enters the prompt or payload. Payload/base64/
result references are transient; only the selected public product bytes and
permitted provenance persist in the repository. The tool-owned residual is
outside save, evidence, telemetry, product, and release state.

## Preserved behavior, learning, accessibility, and source gates

Every non-ingress answer in `FRVE-005-v2`, its two effective Science
variances, and the effective shell through `FRSH-005-v1-VR-04` remains exact:

- original-resolution `PHY-01..12`, source bands, centered six-layout no-crop
  contract, retained relation/approach, physical/activation/label/center/
  nonoverlap/target mapping, and `1/64 CSS px` floor lattice;
- inert fail-closed Host 06 source registry and conditional generic-launcher
  removal; Host 06 remains absent unless exact Host 05 mastery, complete
  metadata/provenance, import, decode, and every gate pass;
- sole unchanged `L02-03`, strict current evaluator/progression,
  actual-dimension answer-free remediation, fresh transfer, explanation,
  ownership/confidence, sanitizer, private clearing, save projection/restore,
  no cross-credit, and unchanged next boundary;
- exactly seven copy slots, one alt slot, fixed `Stranded Lens Cradle` naming,
  owner-correct meaning, native convergent activation, focus/recovery,
  effective `200%`, forced-color, reduced-motion, no sensory-only meaning,
  and no required audio/timing; and
- exact route, state, save, privacy, Demo Tour, world nonresponse, READY/NOT
  YET READY dignity, null deltas, shared ending, `successor=null`, and no
  Host 07 or later expression.

The immutable accepted-media gate remains exact `17 / 37,410,731`, canonical
digest
`c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`,
under `FRAM-001-v1` and the effective Cloud Files/change-time adapters. No
accepted-media path or pixel becomes generation input; no accepted byte is
edited, replaced, relabeled, deleted, regenerated, or repaired.

## Ordered validation ladder

Mission must preserve this later order:

1. authority, ancestry, exact candidate/tree, bounded diff, permitted paths,
   protected state, immutable manifest and canonical digest, ordinal/residual
   counters, parser/static adapter identity, forbidden ingress, and no-reveal;
2. result-shape and RFC 4648 boundary-vector tests proving literal prefix,
   exact size arithmetic, alphabet/padding/pad-bit rejection, one decoder
   invocation, bounded buffering, create-new target, payload/temp count/SHA,
   reference disposal, and every partial-write cleanup branch;
3. exact PNG signature/chunk/order/CRC/IHDR/sRGB/opacity/size/inflate/browser-
   decode gates, followed only then by original-resolution `PHY-01..12`;
4. six-layout source/physical/activation/label/center/anchor/retention/
   nonoverlap/target and before/after-focus stability proof;
5. focused Host 05-to-06 state/action/focus/return/reload/malformed/decode-
   failure tests and complete current `L02-03` learning/privacy/restore proof;
6. related Hosts 04/05, Meadow return, unchanged next boundary, no Host 07,
   Witness/City/later rail, Demo Tour, both MH-40 outcomes, null deltas, and
   `successor=null` regression;
7. exact sorted `40/40` validators, cold full suite, production and TD-012
   fixture builds, exact PBA, served-to-disk identity, offline/same-origin,
   decode/task/CLS, and no-inline-data proof;
8. exactly one non-overlapping clean-start-to-MH-40 E2E with one real
   `L02-03` miss/recovery/mastery, reload/return, equal outcomes, zero runtime
   errors, one summary, and one verifier; and
9. exact owned cleanup, protected and opaque residuals untouched, candidate
   freeze, and required Git synchronization.

Automated accessibility evidence is not human assistive-technology
certification. No E2E retry exists.

## Risks, hard stops, and exact rollback

Principal residual risks are a non-data-URL future result, a data URL above
the strict bound, noncanonical base64, memory/allocation failure, malformed or
metadata-bearing PNG, absent exact sRGB declaration, an opaque default output,
and only two remaining ordinals. Every risk is bounded by rejection or HOLD;
none receives a fallback.

Immediate `HOLD` applies to a fourth call or residual count, more than one
payload/result, `output_hint` use, managed discovery/cleanup, parser
liberalization, second decode, second materialization, full-payload copy,
non-PNG/alpha/non-sRGB source, chunk/CRC/metadata exception, alternate tool,
CLI/API/browser/manual fallback, accepted-media input/edit, derivative,
identity mismatch, broad cleanup, more than one selected source, cap overage,
lesson/evaluator/save/dependency/network/route/world/ending change, protected
or residual access, reveal, E2E retry, or hidden-lore access.

Rollback removes only the exact new selected raster, `PROVENANCE.md`, bounded
Host 06 product/config/test/E2E delta, release-command delta, and cycle reports
after exact identity proof. It restores pre-existing permitted product/test
paths only by explicit path to frozen baseline blobs. It never resets the
repository or touches ordinal-managed residuals, VR-65, accepted media, Hosts
04/05, curriculum, save schema, dependencies, Host 07+, later rail, user or
untracked work, browser/profile/save, QA quarantine, protected PDF, training
directory, hidden lore, or a parent root.

## Maturity, process, and protected state

Maturity remains unchanged. `FR-03` remains continuity `FR2`; physical-host
expression `FR0 - 1 accepted shared compression / 1 exact / 10 missing`;
learning `FR2`; behavior/save/recovery `FR1`; content `FR2`; presentation
`FR3`; and prior bounded release proof `FR4`. The forty-host inventory remains
`6 exact / 1 accepted shared compression / 32 missing / 1 unadvanced Witness
expression`.

All thirteen inherited process records remain separate and **OPEN**: VR-17,
VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage 4,
VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope record
remains **OPEN**. This stage closes, cures, merges, waives, or renumbers none.

This Science stage's initial broad worktree status re-emitted the three
already-disclosed untracked pathnames, including repository QA, and its broad
tracked-file locator emitted control filenames. They are retained only as
process recurrences under still-OPEN VR-24, VR-23, and the separate Commandant
search-scope record. They supplied no media, candidate, canon, maturity, or
release evidence. No disclosed protected path was opened or enumerated.

VR-65 remains exactly **`DEFERRED LIMITATION / RELEASE-PROCESS ONLY /
NON-GATING / OPAQUE EXTERNAL QA RESIDUAL`**, unknown and inaccessible. The
possible ordinal-managed residuals remain separately **`DEFERRED LIMITATION /
RELEASE-PROCESS ONLY / NON-GATING / OPAQUE BUILT-IN MANAGED RESIDUAL`**. A
count is not proof of existence. No residual was listed, resolved, opened,
inferred, retried, cleaned, moved, renamed, or deleted.

## Validation performed and honest limitations

- Verified exact local starting `HEAD`
  `d7dde19de3042bd60d17940d90adf0a7c9ef9e2b` and read the active authorities,
  complete Science profile, current baseline/continuity/map/scoreboard,
  complete `FRWO-005-v3`, complete prior `FRVE-005-v2` and effective Science
  variances, complete base shell and effective Mission variances, complete
  `FRCA-005-v1`, synchronized handoff, and installed built-in image-generation
  skill policy.
- Corroborated the exact prefix length `22`, maximum encoded payload
  `16,000,000`, maximum total data-URL length `16,000,022`, and decoded cap
  `12,000,000` by checked arithmetic only.
- Used the official W3C PNG Third Edition and RFC 4648 as the structural and
  canonical-base64 authorities.
- Did not call a generator; inspect or expose a result or `output_hint`;
  validate/decode a payload; create/open/delete a candidate or managed output;
  read accepted-media bytes or pixels; run a test/build/preview/browser/E2E;
  import/copy/move media; write copy/provenance; inspect VR-65; reveal;
  schedule; automate; push; release; close an OPEN record; or advance maturity.
- The envelope proves a prospective fail-closed contract, not that either
  remaining tool call will return a conforming payload or passing source.

## Disposition and exact Mission handoff

**`POLISH VIABILITY READY / FRVE-005-v3`**

One fresh Mission Captain / `mission_captain` reads the active authorities,
complete Mission profile, complete `FRWO-005-v3`, complete `FRVE-005-v2` and
its effective variances, complete `FRSH-005-v1` through
`FRSH-005-v1-VR-05`, complete `FRCA-005-v1`, and this complete envelope.
Mission issues exactly one versioned `FIRST RUN SHELL READY`, `REVISE`, or
`HOLD` artifact for `FRWO-005-v3`.

Mission must freeze the exact result/data-URL adapter, parser limits, RFC 4648
rules, single streaming decode, temp identity/cleanup, strict PNG allowlist,
sRGB/opacity/dimension/size/inflate/browser-decode gates, selected byte-
identical import/provenance, ordinal/residual accounting, PBA/no-inline-data
proof, validation order, no-reveal boundary, and rollback while preserving
every unchanged shell field and effective variance.

Mission may not call the generator, inspect/decode a payload or pixel, inspect
or clean a managed output, authorize Quartermaster directly, import media,
write copy/provenance, alter the frozen inert candidate or immutable manifest,
run E2E, update maturity, close an OPEN record, inspect VR-65, reveal,
schedule, automate, push, release, or call `FIRST RUN COMPLETE`.
