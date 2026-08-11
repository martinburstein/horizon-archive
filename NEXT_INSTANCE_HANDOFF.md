# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`WORK ORDER READY / FRWO-005-v6 / DIRECT IMAGE API
WITH EXCLUSIVE STAGING AND ATOMIC NO-REPLACE MOVE / FRESH SCIENCE REQUIRED`**

Current Work Order / prior Science envelope: `FRWO-005-v6` / `FRVE-005-v5`

Planning controls: `FRRM-005-v6` / `FRSB-005-v6`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-07`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Immutable accepted-media manifest: `FRAM-001-v1`, file SHA-256
`a674c337b377de113eaa4c6763bd431afc73ab613374a76501aa8c5ce37e5437`,
exact `17 / 37,410,731`, canonical digest
`c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Exact next owner: **one fresh Office of Science Administrator /
`office_of_science_administrator`**

## Operations decision

Operations accepts `FRVE-005-v5`: the immutable CLI has a TOCTOU truncating
final-path write and the declared Python environment lacks `openai`. The CLI,
Python SDK, dependency install, and any script edit/helper are withdrawn.

Martin's explicit direct-API authority is now expressed by `FRWO-005-v6` as
`HOST06-IMAGE-API-PSNET-v1`: native Windows PowerShell 5.1/.NET HttpClient,
exact `POST https://api.openai.com/v1/images/generations`, model
`gpt-image-2`, one high-quality `3840x2160` opaque PNG, exact unchanged
`HOST06-GEN-PROMPT-v1`, and exactly one bounded in-memory
`data[0].b64_json` response per active ordinal. Authorization comes only from
the nonempty `OPENAI_API_KEY` environment value and is never printed, logged,
serialized, or retained.

The response and base64 are capped and strictly validated. Decoded bytes are
written only to the active predeclared staging path with
`FileMode.CreateNew`, `FileShare.None`, `Flush(true)`, and close; exact bytes,
SHA-256, and strict PNG structure are then validated before one same-directory
two-argument `File.Move` to absent `attempt-02.png` or `attempt-03.png`. The
move must be atomic and no-replace; a destination race fails without overwrite.
Any transport/materialization failure receives exact owned cleanup, consumes
the active ordinal, and stops without retry. Ordinal `3` remains available
only after a fully identified objective source rejection and exact cleanup.

No CLI, SDK, generated-images path, `output_hint`, managed-output discovery,
data URL, script file/edit/helper, reference/edit/variation, accepted-media
input, or alternate transport is permitted.

## Preserved state

The predeclared API root, both staging paths, and exact `attempt-02.png` /
`attempt-03.png` targets remain absent and unallocated. Ordinal `1` remains
permanently consumed and opaque; ordinals `2` and `3` remain unconsumed and
unavailable. Conservative managed-residual count remains exact `1`, associated
only with ordinal `1`. VR-65 remains separate and inaccessible.

The fixed Host 05 -> one dry same-basin Host 06 lens/cradle relation -> sole
unchanged `L02-03` -> unchanged next Drowned boundary, all PNG/CRC/decode,
`PHY-01..12`, six-layout crop/mapping/accessibility, privacy/save/offline/PBA/
performance/E2E/rollback gates, one-path canon, RP-012, `successor=null`, all
OPEN records, exact `17 / 37,410,731` accepted-media tuple, code candidate,
and maturity state remain unchanged.

## Exact next action

One fresh Office of Science Administrator reads complete `FRWO-005-v6`,
`FRVE-005-v5`, current map/scoreboard, and exact Host 06 controls. Without a
generation or API call, live-root allocation, or pixel review, Science must
independently fixture-prove the authoritative endpoint/request/response shape,
env-only secret boundary, single-send/no-retry HTTP behavior, response caps,
strict UTF-8/JSON/base64 parsing, exact path containment, exclusive staging,
flush/close/byte/PNG identity, atomic no-replace destination-race behavior,
and every cleanup branch. It then issues exactly one new versioned `POLISH
VIABILITY READY`, `REVISE`, or `HOLD` artifact.

If any direct API response, parser, secret, cap, staging, move, or cleanup
property cannot be frozen from authoritative local references and installed
framework behavior, Science must `HOLD`; it may not invent or install a
substitute.

Science may not authorize Mission; invoke generation/API; consume ordinal `2`;
inspect pixels; allocate the live root; import media; write copy/provenance;
access managed outputs/residuals or VR-65; run E2E; reveal; advance maturity;
close an OPEN record; schedule; automate; push; release; or call `FIRST RUN
COMPLETE`.
