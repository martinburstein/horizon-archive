# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`POLISH VIABILITY HOLD / FRVE-005-v5 / IMMUTABLE CLI
CREATE-NEW AND RACE CONTRACT FAILED / OPERATIONS RETURN REQUIRED`**

Current Work Order / Science envelope: `FRWO-005-v5` / `FRVE-005-v5`

Planning controls: `FRRM-005-v5` / `FRSB-005-v5`

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

Exact next owner: **one fresh Operations Planning Major /
`operations_planning_major`**

## Science decision

The exact installed CLI identity, help surface, `gpt-image-2` model,
`3840x2160` high-quality opaque-PNG dry-run payload, one declared `--out`,
unchanged `--no-augment` prompt behavior, boolean API-key presence, and TCP
network preflight passed without a generation or API request.

The immutable script is not create-new or race safe. It checks
`out_path.exists()` and later calls `out_path.write_bytes(...)`; the latter is
an ordinary truncating write. A target created between those two operations
can be overwritten without `--force`, and an interrupted direct write can
leave a partial final-path candidate. There is no atomic create-new handle,
atomic rename, handle identity, or cleanup transaction. The defect cannot be
cured without a script edit, wrapper, or different transport, all forbidden
by `FRWO-005-v5`.

The declared platform `python` also lacks the required `openai` package. No
install or environment mutation occurred. This dependency stop is independent
of and does not cure the decisive exact-target defect.

Science therefore issued `HOLD / FRVE-005-v5`. No Mission, generation/API
call, ordinal consumption, candidate, import, reveal, or release is
authorized.

## Preserved state

The predeclared live root and exact `attempt-02.png` / `attempt-03.png` targets
remain absent and unallocated. Ordinal `1` remains permanently consumed and
opaque; ordinals `2` and `3` remain unconsumed and unavailable. Conservative
managed-residual count remains exact `1`, associated only with ordinal `1`.
VR-65 remains separate and inaccessible.

The fixed Host 05 -> one dry same-basin Host 06 lens/cradle relation -> sole
unchanged `L02-03` -> unchanged next Drowned boundary, all PNG/CRC/decode,
`PHY-01..12`, six-layout crop/mapping/accessibility, privacy/save/offline/PBA/
performance/E2E/rollback gates, one-path canon, RP-012, `successor=null`, all
OPEN records, exact `17 / 37,410,731` accepted-media tuple, code candidate,
and maturity state remain unchanged.

## Exact next action

One fresh Operations Planning Major reads complete `FRVE-005-v5` and
`FRWO-005-v5`, accepts the Science counterexample, and issues exactly one new
versioned `WORK ORDER READY`, `REVISE`, or `HOLD` artifact. Operations may
withdraw the CLI route or seek Martin's explicit decision for a materially
different ingress, script/dependency authority, or termination. It may not
reinterpret the current CLI as atomic create-new, silently edit/install/wrap,
authorize Mission, call the generator/API, consume ordinal `2`, allocate the
live root, inspect pixels, access managed outputs or residuals, import media,
write copy/provenance, run E2E, reveal, advance maturity, close an OPEN record,
schedule, automate, push, release, or call `FIRST RUN COMPLETE`.
