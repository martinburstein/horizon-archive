# Horizon Archive First Run Polish Viability Envelope - Host 07 CLI

Envelope ID: `FRVE-007-v2`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-007-v2`

Disposition: **`POLISH VIABILITY READY / IMAGEGEN CLI / FIVE TOTAL
SEQUENTIAL ATTEMPTS / EXPLICIT BOUNDED ORDINARY-WRITE LIMITATION`**

Date: **2026-08-12**

Control source: `a37981ec`

Baseline / continuity: `FRPB-001-v4` / `FRCL-006-v2` + `FRCL-006-v1`

Released predecessor: `FRAB-005-v1`

## Science decision

`FRWO-007-v2` is viable. Martin explicitly selected the installed CLI fallback,
which resolves `FRVE-007-v1`'s built-in managed-output custody blocker by
providing explicit output paths. The CLI dependency is installed and its
request/output shape passes a no-network dry run.

```text
python=3.12.10
openai=3.0.0
cliBytes=35266
cliSha256=c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05
apiKeyPresent=true (value unread/unreported)
model=gpt-image-2
size=3840x2160
quality=high
format=png
n=1
```

The CLI's one-off `generate` path performs one API call and no automatic retry.
Its decoder checks destination absence and then uses ordinary
`Path.write_bytes`; this is not atomic create-new. Science records that as an
**`ACCEPTED IMPROVEMENT LIMITATION / AUTHORIZED BUNDLED CLI WRITE SEMANTICS /
BOUNDED TO FRESH UNIQUE SCRATCH ROOT / NON-TRANSFERABLE`**.

The limitation is acceptable only because Martin explicitly authorized this
exact bundled CLI and Mission must enforce all of these compensating controls:

- fresh cryptographic-GUID root, absent before shell issue and unique to Host
  07, created immediately before the first eligible call;
- one authorized CLI writer, exact predeclared path per ordinal, no `--force`,
  no concurrent process, and current/later paths absent before launch;
- root ordinary/non-reparse and exact child-set checks before and after each
  call; any unexpected child, collision, identity drift, or ambiguity stops;
- strict post-write ordinary/non-reparse/one-link/length/SHA/PNG/decode proof
  before pixel review or copy;
- exact identity reproof immediately before selected copy or rejected delete;
  and
- nonrecursive root deletion only after every exact child is absent.

This does not claim race-free atomic creation and creates no precedent for
other tools or paths. No attempt was consumed by Science.

## Attempt and custody envelope

Domain is exactly `{H7-1,H7-2,H7-3,H7-4,H7-5}`. All are unconsumed. Mission
freezes one GUID root and exact paths `h7-1.png` through `h7-5.png`. Each prompt
is a strict-UTF-8/LF/final-LF immutable file under the shell's tracked control
path, hashed before use. Each command uses `generate`, `--prompt-file`,
`--model gpt-image-2`, `--size 3840x2160`, `--quality high`,
`--output-format png`, `--out <exact>`, `--no-augment`, `n=1` default, and no
force/downscale/background/compression/moderation override.

One nonzero CLI exit consumes the active ordinal and returns to Science/Mission
without another call. Only objective content/layout rejection plus exact
cleanup enables the next ordinal. First PASS stops all later calls. No sixth
call or rerun exists.

## Candidate source and media envelope

A candidate must be:

- exact `3840x2160` static PNG;
- `1..30,000,000` bytes;
- decodable RGB or RGBA, fully opaque after decode, with no animation;
- strict PNG signature and complete chunk/CRC structure;
- local and independent of metadata, external references, URLs, credentials,
  or runtime network;
- SHA-256 identified over exact bytes; and
- accepted aggregate media `<=83,554,983` bytes.

Product import is byte-identical create-new/no-replace to the two exact
`FRWO-007-v2` product paths. The selected candidate is deleted from scratch
only after product byte/SHA identity and provenance are complete.

## Physical and layout records

Before acceptance Quartermaster must measure normalized source coordinates for:

```text
relationRect
physicalCenter
semanticTargetRect
labelAnchorRect
sedimentHandoffRect
dryApproachRect
depthBandRects[3..n]
noduleGroupRect
protectedRects[]
retentionByLayout[6]
```

All essential facts must lie inside center-safe source corridor
`x=.18..82, y=.14..86`. The complete relation must occupy `width=.32..58` and
`height=.28..56`; its center must lie within `x=.42..58, y=.38..62`. At least
three nonoverlapping depth bands must each be `>=.07` source height and jointly
span `>=.24` height. The dry approach and graded-sediment handoff must each be
visible, connected to the relation, and at least `.08` source width.

For each of the six layouts:

- `>=95%` of the complete relation, all depth-band centers, the handoff center,
  and dry-approach center remain visible;
- semantic target is at least `44x44 CSS px`, contains physical center, and
  remains keyboard/pointer/touch/switch equivalent;
- label is fully contained and separated by `>=8 CSS px` from focus edge and
  every protected region;
- protected overlap is zero; and
- factual alt remains equivalent without position-only language.

Any ambiguous physical fact or failed threshold is objective rejection.

## State, learning, evidence, privacy, and save

Combat builds null-first Host 07 fields for enabled/source/attempt/provenance/
decode/measurements/copy/alt. Exact Host 06 + `L02-03` mastery is the only
entry. Generic continuation exists only before Host 07 is enabled; accepted-
only enablement is irreversible, and later source/provenance/decode/measurement
failure remains fail-closed rather than resurrecting legacy continuation.

LOOK is factual/write-free, TALK silent, USE owns exact `L03-01`, and
`L03-02` remains locked until exact `L03-01` mastery. Existing strict 16/16 and
8/8 primary/transfer/explanation/remediation/evidence/privacy rules remain
unchanged. Focused reuse remains `27/27 PASS`. Media and observation mint zero
evidence. No new private field, save family, route token, external authority,
runtime credential, or network dependency is allowed.

## Accessibility and performance budgets

- semantic target `>=44x44 CSS px`;
- equivalent keyboard/pointer/touch/switch activation;
- deterministic focus entry/return, one bounded announcement, reload/resume;
- desktop/narrow/effective-200%, forced-color, reduced-motion parity;
- factual alt limited to visible sediment/nodules/channel depth/dry approach;
- selected-source cold decode `<=300ms`, warm `<=120ms`;
- local ready `<=750ms`, activation handler `<=2ms`;
- attributable CLS `<=.01`, whole-view CLS `<=.05`;
- affected/global JS `<=1,692,160 / 1,716,000`, CSS `<=119,700`, modules
  `<=220`, maps `0`, no dependency/lockfile change;
- focused/related/full/validators each within `30/60/60/60s`, builds each
  `<=60s`, isolated E2E `<=180s`.

## Validation and rollback

Mission must require authority/script/dependency/key-boolean/prompt/path/ledger
preflight; exact candidate technical and private physical review; focused and
related tests; full suite and validators; production/fixture builds; PBA and
served identity; isolated Host06->Host07 learning/return/reload E2E;
representative accessibility review; owned-process shutdown/port clearance;
scratch cleanup; candidate ancestry; and Intelligence release.

Rollback removes only exact Host 07 scratch/product/provenance/code/test/config
additions. Accepted Hosts 01-06 are never targets. Any cleanup uncertainty,
unexpected child, protected overlap, secret exposure, attempt ambiguity, or
request for a sixth call stops fail-closed.

## Science actions and protected boundaries

Science installed the imagegen skill's required `openai` dependency into the
active Python environment using `uv`; no repository dependency or lockfile
changed. A disposable no-image fixture proved one exact write, collision
rejection without force, exact deletion, and root absence. CLI dry-run proved
the request shape without network. No live API, generation, media pixel,
candidate/product path, runtime edit, browser/save, or protected-state access
occurred.

Every OPEN record, both filename-enumeration records, protected exclusion, and
VR-65 remain separate and unchanged.

## Exact Mission handoff

Use one fresh Mission Captain context. Read its full profile, this envelope,
`FRWO-007-v2/v1`, `FRPB-001-v4`, `FRCL-006-v2/v1`, `FRVE-007-v1`, exact
`FRAB-005-v1`, current runtime/tests/budgets, and complete imagegen CLI
authorities. Freeze one conflict-free shell with one GUID scratch root, five
prompt identities, exact command/options, sequential ledger, custody/cleanup,
candidate measurements, null-first integration, production-role ownership,
full validation, rollback, no reveal, and push synchronization.

Do not execute live generation in Mission.

Science signs **`POLISH VIABILITY READY / FRVE-007-v2 / HOST 07 CLI /
FIVE TOTAL ATTEMPTS / ROUTE FRESH MISSION`**.
