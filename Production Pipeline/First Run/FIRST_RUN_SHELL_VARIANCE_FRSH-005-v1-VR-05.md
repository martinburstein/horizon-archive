# First Run Shell Variance - Data-URL Ingress Planning Return

Variance ID: `FRSH-005-v1-VR-05`

Disposition: **`REVISE / OPERATIONS WORK ORDER RETURN REQUIRED / DATA-URL
PAYLOAD INGRESS IS NOT A MISSION-ONLY ADAPTER CORRECTION`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / viability / effective Science variances: `FRWO-005-v2` /
`FRVE-005-v2` / `FRVE-005-v2-VR-01` / `FRVE-005-v2-VR-02`

Base shell / effective prior Mission variances: `FRSH-005-v1` /
`FRSH-005-v1-VR-01` / `FRSH-005-v1-VR-02` /
`FRSH-005-v1-VR-03` / `FRSH-005-v1-VR-04`

Quartermaster return: `FRCA-005-v1 / HOLD`

Mission source inspected:
`f92f4f0a76a30d7fdcd8306cb25ebfc317412f6f`

Mission intake origin:
`08bc109c82428c43414c11575b2625746b58cb10`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Immutable accepted-media manifest: `FRAM-001-v1`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

## Mission adjudication

The built-in tool contract exposes one direct `image_url` string on its result
object plus an optional `output_hint`. A future result whose `image_url` is
exactly one canonical `data:image/png;base64,...` payload could be made into
one fresh OS-temporary candidate without parsing an `output_hint`, discovering
or enumerating the managed parent, revealing the image, or using a CLI/API
fallback.

That route is technically coherent in principle, but it is **not** a narrow
Mission-only result-adapter correction under the effective authorities.
`FRWO-005-v2` and `FRVE-005-v2` require all of these execution facts:

1. exactly one unique local absolute pathname returned directly by the tool;
2. exactly one tool-owned managed file beneath the frozen `generated_images`
   root;
3. a byte/SHA-identical managed-file-to-temp copy;
4. immediate deletion and proven absence of that exact managed file before
   candidate inspection; and
5. an opaque whole-cycle stop when the returned path is non-path, unknown, or
   unavailable.

A data-URL route changes every one of those facts. The payload, not a returned
managed pathname, becomes ingress authority. The first file materialization
occurs in the OS-temp child. Identity would compare strictly decoded payload
bytes with the temp file rather than managed-file bytes with the temp file.
No exact managed output is known or cleanable, so the already opaque ordinal-1
result and any independently retained tool-managed file must remain outside
the workflow rather than satisfy the mandatory managed cleanup gate.

Mission may not reinterpret `local absolute pathname`, `managed output`,
`identity copy`, or `immediate managed cleanup` to mean a data URL, decoded
bytes, discarded result reference, or opaque tool-owned residual. Doing so
would silently change the Work Order and Science viability envelope. The
earliest owner is therefore the Operations Planning Major, followed by a fresh
Office of Science Administrator revalidation and only then a fresh Mission
shell adjudication.

Mission issues **`REVISE`**. No Quartermaster attempt 2 is authorized by the
current shell or this variance.

## Consumed ordinal and candidate state

- Generation ordinal `1` remains permanently consumed.
- Ordinal 1 is not a `PHY-01..12` rejection and supplies no candidate evidence.
- Its non-path `output_hint` remains unparsed, unquoted, undisclosed, and
  unavailable.
- Its `image_url`, managed output, and every other result detail remain opaque
  and uninspected.
- No discovery, parent listing, search, cleanup, copy, decode, render, pixel
  inspection, import, provenance, preview, E2E, or reveal is authorized.
- No Host 06 media/content candidate exists.
- Maximum total ordinals remains `3`; therefore at most ordinals `2` and `3`
  could remain after a complete lawful planning revision. They are not
  currently callable.

## Exact planning question returned to Operations

Operations must decide whether `FRWO-005-v2` may be superseded by one new
version that permits a direct tool-returned PNG data URL as the sole future
ingress authority while leaving the tool-managed result opaque and
undiscovered.

If Operations accepts that authority, the revised Work Order must preserve
all existing one-source, prompt, attempt, path, canon, learning, state, save,
route, world, ending, no-reveal, rollback, and protected-state boundaries and
must freeze at least these prospective controls for Science to validate:

1. **Future calls only.** The correction is prospective for ordinal `2` and,
   only after a lawful objective rejection and exact cleanup, ordinal `3`.
   Ordinal `1` is never retried, reinterpreted, recovered, inspected, or
   cleaned.
2. **Exact result shape.** Accept exactly one built-in result object with
   exactly one string payload used from `image_url`. Ignore but do not parse,
   expose, or use `output_hint`. Reject arrays, multiple payloads, missing or
   non-string payloads, alternate URLs, remote URLs, blobs, files, or any
   ambiguous result shape.
3. **Exact data-URL grammar.** Require the literal prefix
   `data:image/png;base64,`; require one payload after that prefix; prohibit
   whitespace, fragments, parameters, percent encoding, secondary separators,
   and non-base64 alphabet; require canonical padding and strict base64 decode.
4. **Fresh one-file materialization.** Before the call, create the same fresh
   GUID-named direct child of the resolved OS temp parent and predeclare only
   `attempt-0N.png` with create-new semantics. Decode only the accepted payload
   into that exact candidate. Never use the repository, managed root, a user
   root, browser/save state, or a protected/residual root for materialization.
5. **Payload/file identity.** Count decoded payload bytes and compute lowercase
   SHA-256 while decoding; then reopen only the exact temp file read-only and
   independently require equal byte length and SHA-256 before any format,
   metadata, decode, or pixel review. Any mismatch stops opaque.
6. **Pre-pixel source checks.** Before `PHY-01..12` or other visual inspection,
   require exact PNG signature and shell-approved chunk structure, exact
   `3840 x 2160`, exact opaque 8-bit sRGB semantics, no alpha/transparency,
   no executable or forbidden metadata, direct browser decodability, and byte
   length `1..12,000,000`. Science must freeze the exact parser and rejection
   semantics; prompt intent or MIME spelling alone is not proof.
7. **Reference disposal.** After byte/file identity is established, discard
   decoded in-memory bytes, base64 text, and result-object references without
   retaining or publishing them. This is memory/reference disposal only and
   must never be represented as deletion of an unknown managed file.
8. **Opaque managed boundary.** Never resolve, list, search, parse, infer,
   inspect, copy, move, rename, delete, or clean the managed parent or an
   unknown managed output. Operations must explicitly decide whether this
   bounded opaque residue is acceptable for future ordinals and how it remains
   distinct from VR-65 and ordinal 1.
9. **Exact temp cleanup.** Rejection, selection, copy, provenance, and failure
   handling retain exact candidate and GUID-child cleanup/rollback. No broad,
   recursive, pattern, parent, or residual cleanup exists.
10. **No reveal.** Neither payload, temp candidate, rejected bytes, selected
    bytes, result object, managed result, preview, Markdown image, screenshot,
    contact sheet, nor cycle reveal is emitted to the user or a report.

Operations may instead retain the current direct-path requirement. That
disposition leaves the pass at `HOLD / NO MEDIA CANDIDATE`; it does not restore
or consume another ordinal.

## Required Science return after any Operations revision

If Operations issues a revised Work Order, a fresh Office of Science
Administrator must independently decide whether the exact data-URL grammar,
strict decode, bounded memory/byte handling, payload-to-temp identity,
PNG/chunk/color/metadata/decode checks, opaque-managed-output treatment,
reference disposal, cleanup, performance, offline, provenance, no-reveal, and
rollback contracts are technically viable and fail closed.

Science must also decide whether each lawful future call can produce exactly
one usable payload while the built-in skill's managed-save behavior may leave
an undiscoverable output outside the workflow. Mission cannot assume that a
discarded result reference proves managed-file cleanup or zero residual state.

Only after `WORK ORDER READY` and `POLISH VIABILITY READY` may a fresh Mission
Captain issue a prospective `FIRST RUN SHELL READY` variance for Quartermaster
ordinal 2. No production role may infer that future authority from this return.

## Preserved shell, gates, and maturity

Every product, story, learning, state, save, accessibility, presentation,
source, prompt, source-band, geometry, copy, provenance, budget, validation,
rollback, route, world, ending, and protected-state field in `FRSH-005-v1`
through `FRSH-005-v1-VR-04` remains exact unless a future complete planning
sequence explicitly supersedes only the ingress transport.

The frozen inert code candidate and all inherited functional evidence remain
unchanged and were not replayed: focused `50/0`, legacy static-contract
`29/0`, learning/privacy `17/0`, related `58/0`, validators `40/40`, cold full
`979/0/0`, production and TD-012 fixture builds PASS, production PBA
JavaScript `1,676,508`, CSS `119,394`, modules `217`, accepted media
`17 / 37,410,731`, source maps `0`, served preflight PASS, owned process/port
cleanup PASS, and `git diff --check` PASS. Complete E2E remains correctly
unrun.

Maturity impact: none. `FR-03` remains continuity `FR2`; physical-host
expression `FR0 - 1 accepted shared compression / 1 exact / 10 missing`;
learning `FR2`; behavior/save/recovery `FR1`; content `FR2`; presentation
`FR3`; and prior bounded release proof `FR4`.

All thirteen inherited process records remain separate and **OPEN**: VR-17,
VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage 4,
VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope record
remains **OPEN**. Mission's broad initial status and tracked filename locator
outputs are retained only as process recurrences under the applicable still-
OPEN records; they supplied no media, candidate, canon, maturity, or release
evidence and close nothing.

VR-65 remains exactly **`DEFERRED LIMITATION / RELEASE-PROCESS ONLY /
NON-GATING / OPAQUE EXTERNAL QA RESIDUAL`**, unknown and inaccessible. The
ordinal-1 opaque managed result and any prospective built-in managed result
remain separate from VR-65 and from one another. No result may be merged with,
inferred from, or used to inspect VR-65.

Repository QA quarantine, protected PDF, training directory, real browser /
profile/save, hidden lore, user work, accepted-media pixels, managed/temp
parents, and opaque residuals remain protected.

## Rollback and exact Operations handoff

This planning return changes no product, test, runtime, lesson, save, media,
manifest, candidate, copy, provenance, map, scoreboard, maturity, process
classification, or accepted asset. Its rollback boundary is only this
versioned Mission variance and the synchronized handoff; planning history must
not be rewritten.

Exact next owner: one fresh Operations Planning Major /
`operations_planning_major`.

Operations reads this complete return, `FRCA-005-v1`, complete
`FRWO-005-v2`, complete `FRVE-005-v2`, and the effective shell through
`FRSH-005-v1-VR-04`, then issues exactly one new versioned `WORK ORDER READY`,
`REVISE`, or `HOLD` artifact adjudicating the prospective data-URL ingress.

Operations may not call the generator, inspect or expose a result, discover or
clean an opaque managed output, authorize Quartermaster directly, decode a
payload, inspect pixels, import media, write copy/provenance, begin Image, run
E2E, update maturity, close an OPEN record, inspect VR-65, reveal, schedule,
automate, release, or call `FIRST RUN COMPLETE`.

## Mission signature

Mission Captain signs **`REVISE / OPERATIONS WORK ORDER RETURN REQUIRED /
FRSH-005-v1-VR-05`** from exact source `f92f4f0...`.

No generation, result inspection, output-hint parsing, managed discovery,
payload decode, pixel inspection, import, copy, provenance, product/test
change, build, preview, E2E, reveal, cleanup, browser/save access, residual
inspection, schedule, automation, release, maturity update, or OPEN-record
closure occurred in Mission.
