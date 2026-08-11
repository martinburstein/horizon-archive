# First Run Content and Asset Ledger - Host 06 Pre-Call Adapter HOLD

Ledger ID: `FRCA-005-v2`

Stage / stable agent: Quartermaster / `quartermaster`

Disposition: **`HOLD / PRE-CALL BUILT-IN DATA-URL MATERIALIZATION ADAPTER
UNAVAILABLE / ORDINALS 2-3 PRESERVED / NO MEDIA CANDIDATE`**

Work Order / viability: `FRWO-005-v3` / `FRVE-005-v3`

Prior viability / effective Science variances: `FRVE-005-v2` /
`FRVE-005-v2-VR-01` / `FRVE-005-v2-VR-02`

Base shell / effective Mission variances: `FRSH-005-v1` /
`FRSH-005-v1-VR-01` / `FRSH-005-v1-VR-02` /
`FRSH-005-v1-VR-03` / `FRSH-005-v1-VR-04` /
`FRSH-005-v1-VR-05` / `FRSH-005-v1-VR-06`

Directorial / player-experience authorities: `FRDT-005-v1` /
`FRPX-005-v1`

Functional predecessor: `FRCE-005-v1-VR-04 / PRODUCTION FUNCTIONAL`

Prior Quartermaster return: `FRCA-005-v1 / HOLD`

Quartermaster intake source:
`1352d08316cd813e1770d118d850bde397156fcb`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Immutable accepted-media manifest: `FRAM-001-v1`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Quartermaster decision

Quartermaster stopped before ordinal `2` because the exact materialization
adapter frozen by `FRSH-005-v1-VR-06` is unavailable in the installed built-in
tool boundary.

The built-in `image_gen__imagegen` call is callable only inside the current
tool-orchestration V8 isolate. That isolate is explicitly non-Node and has no
filesystem primitive. It can receive and validate a direct `image_url` string
without inspecting any other result field, but it cannot create or stream to
the predeclared `attempt-02.png` file.

The available filesystem-capable tools are separate transports. Sending the
direct `image_url` or its payload into a shell-command string, patch request,
or Node-REPL code string would create the forbidden second full-payload
transport copy before the shell's one fixed-buffer streaming decode. Reading
or parsing `output_hint` to recover a managed path would violate the exact
opaque-field rule. Discovering the managed parent, invoking CLI/API fallback,
using a browser download, emitting the image, or silently weakening the
decode-once contract is also forbidden.

`FRSH-005-v1-VR-06` requires parser/adapter identity before the call and says
an unavailable primitive fails closed. Quartermaster therefore did not call
the generator. This is a pre-call execution-control HOLD, not a transport
rejection, source rejection, `PHY-01..12` result, cleanup failure, or consumed
generation ordinal.

## Exact intake proof

Quartermaster independently proved before the stop:

- exact `HEAD == origin/main == remote main == 1352d083...`;
- tracked worktree and index deltas both absent;
- frozen inert candidate tree exact `09da6293...`;
- immutable `FRAM-001-v1` file SHA-256
  `a674c337b377de113eaa4c6763bd431afc73ab613374a76501aa8c5ce37e5437`;
- immutable manifest identity remains exact `17 / 37,410,731`, canonical
  digest
  `c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`;
- exact product raster and exact `PROVENANCE.md` both absent;
- Host 06 source URL null; source registry null/false; provenance SHA/bytes
  null; physical, activation, protected, and six-layout values null except
  exact label insets `3/5`; seven `FRPX05_COPY` slots null; and
  `FRPX05_IDENTIFICATION.ALT` null;
- ordinal `1` remains the sole consumed ordinal and the sole conservatively
  counted possible built-in managed residual; and
- remaining ordinal set remains exactly `{2,3}` in that order.

Quartermaster did not recompute or open an accepted-media byte stream. It did
not inspect any accepted-media pixel.

## Ordinal and residual ledger

| Fact | Result |
| --- | --- |
| Ordinal `1` | Permanently consumed historical opaque transport stop |
| Ordinal `2` | **Not invoked; remains available after lawful adapter correction** |
| Ordinal `3` | **Not invoked; remains conditional after lawful ordinal-2 objective rejection** |
| Built-in calls in this stage | `0` |
| Possible ordinal-associated managed residual count | Conservative exact `1` |
| Data URL / result object received | No |
| OS-temp child / candidate created | No |
| PNG / browser / pixel / `PHY-*` work | Not run |
| Product raster / provenance / registry / copy delta | None |

The one possible ordinal-1 residual remains exactly **`DEFERRED LIMITATION /
RELEASE-PROCESS ONLY / NON-GATING / OPAQUE BUILT-IN MANAGED RESIDUAL`**.
It was not resolved, listed, searched, parsed, inferred, inspected, rendered,
copied, moved, deleted, cleaned, or used. VR-65 remains the separate opaque
external QA residual and was not inspected.

## Content, copy, and asset ledger

- Selected raster: **none**.
- `PROVENANCE.md`: **absent**.
- Registry/source/geometry/protected/layout scalars: unchanged null/false.
- Seven `FRPX05_COPY` slots: unchanged null.
- `FRPX05_IDENTIFICATION.ALT`: unchanged null.
- Existing accepted media: unchanged immutable `17 / 37,410,731` baseline.
- Host 06 runtime/content candidate: none.
- Image Specialist authority: blocked.
- Maturity impact: none.

No final-purpose prose was written because no lawful selected source exists.

## Validation and unavailable evidence

Quartermaster ran only literal authority reads, exact Git synchronization,
frozen candidate/tree, immutable-manifest file identity, target absence,
null-ledger, installed built-in skill, and adapter-capability controls.

No built-in image-generation call, data-URL receipt, result-field inspection,
OS-temp allocation, payload validation, decode, materialization, hash, PNG
parse, browser decode, pixel review, source-band review, geometry, focused
test, related test, validator, full suite, build, PBA, served identity,
performance probe, complete E2E, preview, reveal, or publication occurred.

Inherited functional evidence remains frozen and was not replayed: focused
`50/0`, legacy static-contract `29/0`, learning/privacy `17/0`, related
`58/0`, validators `40/40`, cold full `979/0/0`, production and TD-012
fixture builds PASS, production PBA JavaScript `1,676,508`, CSS `119,394`,
modules `217`, accepted media `17 / 37,410,731`, source maps `0`, served
preflight PASS, owned process/port cleanup PASS, and `git diff --check` PASS.
Complete E2E remains correctly unrun.

## Variance, process, and protected state

Classification: **`REQUIRED CORRECTION / BUILT-IN DATA-URL MATERIALIZATION
ADAPTER / PRE-CALL EXECUTION CONTROL`**.

This is not authority for Quartermaster to parse or use `output_hint`, inspect
or discover a managed output, pass a full payload through a second tool
transport, call CLI/API, weaken streaming/decode-once, or consume ordinal `2`.

All thirteen inherited process records remain separate and **OPEN**: VR-17,
VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage
4, VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope
record remains **OPEN**. This stage closes, cures, merges, waives, or
renumbers none.

Repository QA quarantine, protected PDF, training directory, real browser /
profile/save, hidden lore, user work, accepted-media pixels, managed/temp
parents, and opaque residuals were not opened or changed. No image, payload,
preview, screenshot, Markdown embedding, or reveal was emitted.

## Exact Mission return

One fresh Mission Captain / `mission_captain` reads this complete ledger, the
current handoff, full Mission profile, complete `FRWO-005-v3`, complete
`FRVE-005-v3`, and the effective shell through `FRSH-005-v1-VR-06`.

Mission must issue exactly one versioned `FIRST RUN SHELL READY`, `REVISE`, or
`HOLD` adjudication for the unavailable same-isolate data-URL materialization
adapter. A future lawful route must either:

1. return through Operations and Science for a narrowly explicit managed-
   output pathname/result-discovery contract that does not infer, list, or
   broadly clean the managed parent; or
2. identify that built-in mode cannot satisfy the frozen ingress and require
   Martin's explicit authorization before any CLI/API fallback, because the
   installed image-generation skill forbids silent fallback.

Mission may not consume ordinal `2`, call a generator, parse `output_hint`,
discover or clean a managed output, carry a payload through another tool,
authorize CLI/API on Martin's behalf, import media, write content/provenance,
begin Image, run E2E, reveal, advance maturity, close an OPEN record, inspect
VR-65, schedule, automate, release, or call `FIRST RUN COMPLETE`.
