# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`POLISH VIABILITY READY / STRICT PNG DATA-URL
INGRESS / OPAQUE BUILT-IN MANAGED RESIDUALS ACCEPTED AS NON-GATING RELEASE-
PROCESS LIMITATION / ORDINAL 1 CONSUMED / MISSION REVIEW REQUIRED`**

Martin's controlling decision: **`Authorized new Drowned Media for Host 06`**

Current Work Order / viability: `FRWO-005-v3` / `FRVE-005-v3`

Prior viability / effective Science variances: `FRVE-005-v2` /
`FRVE-005-v2-VR-01` / `FRVE-005-v2-VR-02`

Base shell / effective Mission variances: `FRSH-005-v1` /
`FRSH-005-v1-VR-01` / `FRSH-005-v1-VR-02` /
`FRSH-005-v1-VR-03` / `FRSH-005-v1-VR-04` /
`FRSH-005-v1-VR-05`

Combat functional close: `FRCE-005-v1-VR-04 / PRODUCTION FUNCTIONAL`

Quartermaster return: `FRCA-005-v1 / HOLD`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Immutable accepted-media manifest: `FRAM-001-v1`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Exact next owner: **fresh Mission Captain / `mission_captain`**

## Science decision

`FRVE-005-v3` independently finds `FRWO-005-v3` technically viable and
fail-closed. One future built-in result may supply exactly one direct
`image_url` string only when it is one canonical
`data:image/png;base64,` value. `output_hint` and every other result field
remain opaque and unused.

The exact transport cap is `16,000,022` string code units: 22 for the literal
prefix and at most `16,000,000` canonical base64 characters, which can decode
to at most `12,000,000` bytes. Validation is an index-only non-copying pass.
One fixed-buffer streaming decoder writes the bytes exactly once to the sole
create-new `attempt-0N.png`, counts them, and computes lowercase SHA-256. An
independent read of the exact temp file must match byte length and SHA before
PNG, browser-decode, pixel, or `PHY-01..12` work.

The pre-pixel parser requires exact PNG signature; checked chunk lengths and
CRCs; one `IHDR` with `3840 x 2160`, 8-bit truecolor, no alpha, and no
interlace; one valid `sRGB`; only narrowly allowed exact `gAMA`, `cHRM`, or
`pHYs`; consecutive nonempty `IDAT`; one final empty `IEND`; no `tRNS`, ICC,
text, EXIF, APNG, unknown/private chunk, or trailing byte; one complete zlib
stream with exactly `24,885,360` structural scanline bytes and valid filter
bytes; and direct isolated-browser decode at natural `3840 x 2160`.

Malformed result/grammar/base64, allocation/write, or payload/temp identity
failure is a consumed-ordinal opaque stop. A fully identified candidate that
fails PNG or objective visual gates is an objective rejection. Every branch
deletes and proves absent only its exact temp candidate and GUID child; cleanup
uncertainty is terminal and never authorizes another call or broad cleanup.

At most one passing temp candidate may be copied create-new and byte-
identically to the sole product raster, proven by length/SHA, recorded in only
the permitted `PROVENANCE.md`, and followed by exact temp cleanup. No data URL,
payload, result, `output_hint`, temp/managed path, or rejected hash/pixels may
enter provenance, source, Git, build output, report, preview, or reveal.

The installed built-in image-generation skill allows default output under
`$CODEX_HOME/*` and requires a project-bound selected final to be copied into
the workspace; it does not require deletion of every default file. Science
therefore accepts at most one possible opaque tool-owned managed residual per
consumed ordinal as **`DEFERRED LIMITATION / RELEASE-PROCESS ONLY /
NON-GATING / OPAQUE BUILT-IN MANAGED RESIDUAL`**. It has zero project,
candidate, provenance, evidence, reuse, reveal, rollback, maturity, or release
authority. No role may discover, inspect, infer, copy, move, delete, clean, or
prove absence of it.

Ordinal `1` remains permanently consumed and conservatively counts as possible
residual `1`. Only ordinals `2` and `3` remain; maximum future calls is `2`;
maximum total ordinal-associated managed-residual count is `3`; a fourth call
or fourth count is forbidden. VR-65 remains separate and inaccessible. If a
later controlling policy requires zero default retention, the only lawful
result is `HOLD / MARTIN DECISION REQUIRED`; managed discovery/cleanup is not
an alternative.

The transport data URL is production-time transient state and never counts as
a product asset. The selected PNG alone is the media delta. Existing PBA caps
remain exact: JavaScript `<=1,679,393` affected / `<=1,703,258` global; CSS
`<=119,547` / `<=119,672`; modules `<=218` / `<=222`; resulting media exact
`18` and `37,410,731 + selectedBytes`, at most `49,410,731`; source maps `0`;
all decode/ready/CLS/task/test/build/E2E caps unchanged. A static gate must
prove no inline PNG data URL or selected base64 payload in product/build/report
output.

## Exact next action

One fresh Mission Captain reads this handoff, complete `FRWO-005-v3`, complete
`FRVE-005-v3`, complete prior `FRVE-005-v2` and its effective variances,
complete `FRSH-005-v1` through `FRSH-005-v1-VR-05`, complete `FRCA-005-v1`,
the Mission profile, and the installed built-in save-path policy. Mission then
issues exactly one new versioned `FIRST RUN SHELL READY`, `REVISE`, or `HOLD`
artifact for `FRWO-005-v3`.

Mission must freeze the exact result/data-URL adapter, parser bounds,
canonical-base64 rules, single streaming decode, temp byte/SHA identity,
strict PNG/chunk/sRGB/opacity/dimension/size/inflate/browser-decode gates,
failure classification, exact temp cleanup, selected byte-identical import/
provenance, ordinal/residual accounting, PBA/no-inline-data proof, validation
order, no-reveal boundary, and rollback while preserving every unchanged
shell field and effective variance.

Mission may not call the generator, inspect or decode a payload or pixel,
inspect/clean a managed output, authorize Quartermaster directly, import
media, write copy/provenance, alter the frozen inert candidate or immutable
manifest, run E2E, update maturity, close an OPEN record, inspect VR-65,
reveal, schedule, automate, push, release, or call `FIRST RUN COMPLETE`.

## Preserved state

Ordinal `1` remains consumed and is neither candidate evidence nor a
`PHY-01..12` rejection. Its non-path hint, `image_url`, managed output, and
other result details remain opaque and uninspected. No Host 06 media/content
candidate exists. No Quartermaster attempt `2` is authorized.

The accepted-media baseline remains exact `17 / 37,410,731`, canonical digest
`c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`;
product/test code, immutable manifest, candidate/tree, registry/source/
geometry/protected/layout scalars, seven copy slots, and alt slot remain
unchanged. Complete E2E remains correctly unrun.

Inherited functional gates remain frozen and were not replayed: focused
`50/0`, legacy static-contract `29/0`, learning/privacy `17/0`, related `58/0`,
validators `40/40`, cold full `979/0/0`, production and TD-012 fixture builds
PASS, production PBA JavaScript `1,676,508`, CSS `119,394`, modules `217`,
accepted media `17 / 37,410,731`, source maps `0`, served preflight PASS, owned
process/port cleanup PASS, and `git diff --check` PASS.

Maturity remains unchanged. `FR-03` remains continuity `FR2`; physical-host
expression `FR0 - 1 accepted shared compression / 1 exact / 10 missing`;
learning `FR2`; behavior/save/recovery `FR1`; content `FR2`; presentation
`FR3`; and prior bounded release proof `FR4`.

All thirteen inherited process records remain separate and **OPEN**: VR-17,
VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage 4,
VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope record
remains **OPEN**. Science closes none.

VR-65 remains exactly **`DEFERRED LIMITATION / RELEASE-PROCESS ONLY /
NON-GATING / OPAQUE EXTERNAL QA RESIDUAL`**, unknown and inaccessible. It is
separate from ordinal `1` and every possible future ordinal-managed residual.

Repository QA quarantine, protected PDF, training directory, real browser /
profile/save, hidden lore, user work, accepted-media pixels, managed/temp
parents, and opaque residuals remain protected.
