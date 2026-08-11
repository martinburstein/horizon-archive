# Horizon Archive First Run Polish Viability Envelope

Envelope ID: `FRVE-005-v5`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-005-v5 / Stranded Lens Cradle - Explicit CLI/API Source
and Fixed Lesson Integration`

Disposition: **`HOLD / IMMUTABLE CLI CANNOT PROVE CREATE-NEW OR
RACE-SAFE EXACT-TARGET WRITE / REQUIRED SDK ABSENT`**

Date: **2026-08-11**

Science source inspected:
`30bd853fe0eda819ba9e9dd971e86fb7844d718a`

Planning controls: `FRRM-005-v5` / `FRSB-005-v5`

Superseded Science HOLD / Work Order: `FRVE-005-v4` / `FRWO-005-v4`

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

`FRWO-005-v5` is not technically admissible. The exact immutable installed
CLI passes its identity, help-surface, model, dry-run argument, output-path,
API-key-presence, and network preflights, but it does not implement an atomic
create-new output primitive.

The live write path performs these operations in order:

```text
if out_path.exists() and not force: fail
out_path.parent.mkdir(parents=True, exist_ok=True)
out_path.write_bytes(decoded_bytes)
```

`Path.write_bytes` opens the target for an ordinary truncating write. The
existence check and the write are separate operations. A same-path entry can
therefore appear after the check and before the write; the CLI then truncates
or overwrites that entry even though `--force` is absent. The help/reference
promise that a target existing at the time of the pre-check is refused does
not establish create-new semantics across the write interval.

The same implementation writes the final pathname directly. It has no
exclusive create-new handle, no same-directory temporary plus atomic rename,
no handle-bound identity proof, and no cleanup transaction. A decode or write
exception can leave a partial final-path file. Source inspection is decisive:
the required exact-target race and partial-write contract cannot be made
fail-closed without editing the immutable script, adding a wrapper, or
changing transport. All three are forbidden by `FRWO-005-v5`.

The declared platform `python` environment also lacks the required `openai`
package. The CLI's live path would stop in `_create_client()` before an API
request. Installing or changing the environment is not authorized by this
Science stage and would not repair the independent create-new defect.

Science therefore issues **`HOLD`**. No fresh Mission stage follows.

Variance classification: **`REQUIRED CORRECTION / CLI EXACT-TARGET
CREATE-NEW, RACE, PARTIAL-WRITE, AND DEPENDENCY CONTRACT / EARLIEST OWNER
OPERATIONS`**.

## Exact installed CLI adjudication

Only this path was inspected:

```text
C:\Users\marti\.codex\skills\.system\imagegen\scripts\image_gen.py
```

Observed immutable identity:

```text
contract: HOST06-IMAGEGEN-CLI-v1
SHA-256: c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05
byte length: 35,266
last-write UTC: 2026-08-09T15:46:11.7575005Z
```

The top-level help exposes only `generate`, `generate-batch`, and `edit`.
`generate --help` exposes the frozen `--model`, `--prompt`, `--n`, `--size`,
`--quality`, `--background`, `--output-format`, `--out`, `--force`,
`--dry-run`, and `--no-augment` surface. No intrinsic version or atomic
create-new option exists.

One non-generative dry-run used a sentinel prompt and a disposable never-
created path outside the live attempt root. It emitted exactly:

```text
endpoint: /v1/images/generations
model: gpt-image-2
n: 1
size: 3840x2160
quality: high
background: opaque
output_format: png
prompt: unchanged sentinel under --no-augment
outputs: exactly the declared --out path
outputs_downscaled: null
```

The dry-run created neither its parent nor its target and made no API request.
This proves argument and dry-run output shaping only. It cannot prove the live
post-response write safe.

The CLI decodes `result.data[*].b64_json` and writes the corresponding output
paths. With `n=1`, the declared payload requests one result and computes one
path. No SDK runner, one-off runner, script edit, prompt file, out directory,
batch, edit, image input, reference, variation, force, downscale, or retry
path was used or authorized.

## Environment and target preflight

Only a boolean credential check occurred:

```text
OPENAI_API_KEY present: true
```

No key value, prefix, length, digest, fragment, or derivative was printed or
retained. TCP connectivity to `api.openai.com:443` passed. Importing `openai`
under the declared platform `python` failed with `ModuleNotFoundError`; no
package installation or environment mutation occurred.

The exact predeclared live evaluation root and both targets remained absent:

```text
C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-cli-1ecc6811-5521-4244-8dcd-a8adbb0f0393
C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-cli-1ecc6811-5521-4244-8dcd-a8adbb0f0393\attempt-02.png
C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-cli-1ecc6811-5521-4244-8dcd-a8adbb0f0393\attempt-03.png
```

Science did not allocate the root, enumerate the OS-temp parent, create an
attempt file, or exercise a live or simulated write through the CLI. The
source-level race counterexample makes a candidate-bearing fixture unnecessary
and prevents Science from manufacturing readiness through an external lock or
wrapper.

## Frozen technical and cleanup gate

The downstream technical gate remains necessary and unchanged, but is not
reachable under this HOLD. A future lawful ingress must still bind exactly one
active source to its literal attempt path, ordinary one-link non-reparse
identity, stable `1..12,000,000` byte length, and lowercase SHA-256, with no
sibling or output ambiguity.

Before pixel review it must still require exact PNG signature; checked chunk
length/order and CRC for every chunk; one first `IHDR` with `3840 x 2160`,
8-bit color type `2`, compression/filter/interlace `0`; required `sRGB`;
forbidden alpha, `tRNS`, profiles, text/EXIF/time/animation/private chunks,
and trailing bytes; one complete zlib stream with exact scanline structure;
and isolated natural-size browser decode. No repair, conversion, screenshot,
crop, derivative, or alternate decode is allowed.

Rejected candidates must remain outside the workspace and must never be
revealed, reused, retained, hashed in a report, or imported. Cleanup remains
limited to the exact identity-proved active target followed by the exact empty
predeclared root and exact absence proof. No parent, sibling, glob, recursive,
pattern, managed-directory, ordinal-1, VR-65, or unknown-file cleanup exists.

At most the first fully passing source may later be copied once, byte-
identically and create-new, to the sole product raster path, followed only by
the sole `PROVENANCE.md` path after byte-length/SHA equality. This HOLD grants
no import or provenance authority.

## Preserved physical, interaction, learning, and release envelope

The intended one-path result remains exact Host 05 / Sixfold Weir mastery,
lens-like fragment handoff, one weathered lens visibly resting inside one
tilted conformal cradle on a dry same-basin reach above live water, at least
two stress/load contacts, at least two drainage seams, restrained horizon
catch, sole unchanged `L02-03`, and unchanged next Drowned boundary.

All inherited `PHY-01..12`, source-band, centered six-layout, crop retention,
physical/activation/label/center/anchor/nonoverlap/target mapping, native
`44 x 44 CSS px`, focus stability, effective `200%`, forced-color `3px
Highlight`, reduced-motion, factual-alt, semantic naming, input convergence,
and no-sensory-only-meaning requirements remain exact.

The fail-closed Host 06 registry, conditional generic-launcher removal, sole
`USE Stranded Lens Cradle`, write-free LOOK/TALK, completed read-only USE,
exact `L02-03` evaluator and `16/16 + 16/16 + 2/2` progression, actual-miss
answer-free remediation, transfer, explanation, ownership/confidence,
sanitizer, private clearing, save projection/restore, no cross-credit, Demo
Tour isolation, return/reload recovery, one-path rail, both MH-40 outcomes,
null deltas, RP-012, and `successor=null` remain unchanged.

The shipped product remains local/offline: one same-origin selected-image
request, zero external runtime requests, and no dependency, lockfile,
endpoint, credential, telemetry, service worker, runtime model call, or
external asset. The inherited JavaScript/CSS/module/media/source-map,
decode/image-ready/CLS/task, test/build, and single no-retry E2E caps remain
exact. Generation, if later reauthorized through a lawful ingress, remains a
bounded production-time external operation only.

## Ordinals, manifest, maturity, and protected state

- Total ordinal domain remains exactly `{1,2,3}`.
- Ordinal `1` remains permanently consumed and opaque.
- Ordinals `2` and `3` remain unconsumed and unavailable.
- No built-in or CLI/API call occurred in this Science stage.
- Conservative possible ordinal-associated managed residual count remains
  exact `1`, associated only with historical ordinal `1`.
- The ordinal-1 residual remains **`DEFERRED LIMITATION / RELEASE-PROCESS
  ONLY / NON-GATING / OPAQUE BUILT-IN MANAGED RESIDUAL`**.
- VR-65 remains separate, opaque, non-gating, and inaccessible.
- `FRAM-001-v1` remains immutable at exact `17 / 37,410,731`; its file and
  canonical tuple digests remain exact.

Maturity remains unchanged: `FR-03` continuity `FR2`; physical-host expression
`FR0 - 1 accepted shared compression / 1 exact / 10 missing`; learning `FR2`;
behavior/save/recovery `FR1`; content `FR2`; presentation `FR3`; and prior
bounded release proof `FR4`.

All thirteen inherited process records remain separate and **OPEN**: VR-17,
VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage
4, VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope
record remains **OPEN**. Science closes, cures, merges, waives, or renumbers
none.

Repository QA quarantine, `Art Of No Mans Sky Book Scan.pdf`, `Simplilearn
Training Files/`, real browser/profile/save, hidden lore, user work, accepted-
media pixels, the real managed directory, ordinal-1 residual, OS-temp parent,
predeclared live root, and VR-65 remained protected.

## Validation limits, rollback, and exact handoff

Science read the active workflow, registry, complete Science profile, current
handoff, complete `FRWO-005-v5`, `FRVE-005-v4`, `FRRM-005-v5`,
`FRSB-005-v5`, effective Host 06 shell through `VR-07`, current treatment,
blueprint, functional close, immutable manifest, and installed imagegen skill
plus CLI/API/network references. It inspected the exact CLI identity, help,
dry-run payload, output implementation, boolean key presence, package import,
network reachability, and live-target absence.

No generation or Image API call, pixel inspection, managed-directory access,
live-root allocation, result/output-hint access, media read/decode/import,
copy/provenance, product/test change, build, browser, preview, E2E, reveal,
maturity update, OPEN-record closure, VR-65 access, schedule, automation, push,
release, or `FIRST RUN COMPLETE` occurred.

Rollback is limited to this envelope and the synchronized handoff. Planning
history and all product/media state remain untouched.

One fresh Operations Planning Major / `operations_planning_major` must read
this complete HOLD and `FRWO-005-v5`, then issue one versioned `WORK ORDER
READY`, `REVISE`, or `HOLD` adjudication. Operations may withdraw the CLI
route or seek Martin's explicit authority for a materially different ingress,
script/dependency boundary, or termination. It may not reinterpret the
current pre-check as atomic create-new, authorize Mission, install or edit the
script, invoke the API, consume ordinal `2`, inspect pixels, import media,
reveal, advance maturity, close an OPEN record, inspect a residual, schedule,
automate, push, release, or call `FIRST RUN COMPLETE`.

Office of Science Administrator signs **`HOLD / FRVE-005-v5`** from exact
source `30bd853fe0eda819ba9e9dd971e86fb7844d718a`.
