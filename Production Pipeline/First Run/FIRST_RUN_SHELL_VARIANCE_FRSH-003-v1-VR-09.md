# First Run Shell Variance Reissue - Native Fresh-Root Orchestration

Variance ID: `FRSH-003-v1-VR-09`

Disposition: **`FIRST RUN SHELL READY / FRSH-003-v1-VR-09`**

Stage / owner: Mission Captain / `mission_captain`

Governing shell: `FIRST RUN SHELL READY / FRSH-003-v1`

Operative evidence shell: `FIRST RUN SHELL READY / FRSH-003-v1-VR-07`

Identity-replay authority: `FIRST RUN SHELL READY / FRSH-003-v1-VR-08`

Quartermaster return: `PRODUCTION CONTENT HOLD / FRCA-003-v1 / VR-08`

Work Order: `FRWO-003-v1 / Sixfold Weir`

Mission control source inspected:
`3b1bf51b585769e9734241982210e72372c6801d`

Exact content product/test candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Runtime product predecessor:
`7e85154abd8dbf116c4bb84ca66afd859903d750`

Validation-control candidate:
`4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Passing evidence-control candidate:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Released rollback baseline:
`3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602`

Date: **2026-08-10**

## Decision

Mission authorizes one zero-change exact-identity replay under corrected native
PowerShell root orchestration.

VR-08 failed before the proposed QA root existed and before any browser, E2E,
summary, verifier, or served request ran. The unsupported
`New-Item -LiteralPath` parameter produced a nonterminating error; two preview
processes then started and were immediately stopped. Ports are clear. No live
replay authority was consumed and no tracked or protected byte changed.

This PowerShell's own command metadata proves that `New-Item` supports `Path`
and `ItemType` and does not expose `LiteralPath`. It also proves
`Resolve-Path`, `Test-Path`, and `Remove-Item` support `LiteralPath`, while
`Remove-Item` supports `Recurse` and `Force`. Mission therefore replaces only
the invalid creation spelling with the exact native form below and requires
terminating error behavior before any orchestration step.

No product, content, copy, test, E2E, manifest, probe, summary schema,
verifier, media, presentation, threshold, learning, save, route, later rail,
ending, or maturity change is authorized. Any preflight, path, creation,
containment, preview, served-identity, E2E, summary, verifier, ownership, or
cleanup failure is immediate `HOLD` with no rerun. Image Specialist remains
blocked until a synchronized Quartermaster PASS.

## Accepted stopped VR-08 facts

- Exact identity preflight passed at synchronized source `6862a171`.
- The immutable content candidate remains exact `a91763e`; evidence control
  remains exact `ca89a679`; validation control remains exact `4cd7fbf`.
- Proposed root
  `C:\Users\marti\AppData\Local\Temp\horizon-archive-frrc002-c4f48d0d-6aaa-47ce-8a35-d5ca7804e069`
  never existed.
- No E2E invocation, browser process, summary, verifier, served request, root
  write, media operation, or protected-state access occurred.
- Owned preview PIDs `49016` / `58240` were stopped and ports `4173` / `4184`
  are clear.
- No tracked product/content/test/copy/probe/manifest/media/presentation/
  learning/save/route/ending/maturity byte changed.

These facts prove a command-syntax orchestration failure only. They do not
accept content evidence and do not waive the new replay's gates.

## Repeat exact deterministic identity preflight

Quartermaster must repeat the complete VR-08 Git/object/blob/identity preflight
from the new synchronized VR-09 source before generating a GUID or starting a
preview. Prior results do not substitute.

1. Prove local `HEAD`, `origin/main`, and remote main equal the exact VR-09
   commit, with no tracked drift.
2. Resolve exact commits and ordered ancestry `7e85154 -> 4cd7fbf -> ca89a679
   -> aa2c141 -> a91763e -> current control`; prove mistyped
   `a91763e0b00d6344f84e741f022d894b352a0f23` is not a Git object and occurs
   in no new environment value.
3. Prove current frozen blobs remain exact:

```text
horizon-archive-game/src/drownedArchive.js
  1bc2f9d93c59a396ddee7ed83cde1600f76b62e7
horizon-archive-game/test/sixfoldWeir.test.js
  21eb3cd40b4b25f39a72d8f4084a5cdf50e7deb5
playtest/e2e-playthrough.mjs
  30ad3bbb49e441914bbd22e365044677f8263b11
Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json
  786663223f75cb3a88503c50373e79f3c5c5cf26
```

4. Prove the E2E delta after `ca89a679` remains only the two final-copy
   assertions, exactly seven final-purpose slots remain, accepted media is
   `17 / 37,410,731`, and no runtime/content/test/evidence-control byte drifted.
5. Prove ports `4173` / `4184` are clear and no owned preview/browser PID from
   VR-08 remains.

No focused, related, full, validator, build, content, diagnostic browser, or
E2E run is authorized by this preflight. Any failure is `HOLD`.

## Exact native PowerShell root creation

Quartermaster must use one PowerShell process and set terminating errors before
path construction or any owned operation:

```powershell
$ErrorActionPreference = 'Stop'
```

It must resolve the existing OS-temp parent and repository root first, generate
one fresh GUID leaf matching exactly
`horizon-archive-frrc002-<lowercase GUID>`, and canonicalize the intended
nonexisting child with `[IO.Path]::GetFullPath`. Before creation it must prove:

- the resolved OS-temp parent exists and is a directory;
- the resolved repository root is exact;
- the canonical candidate's direct parent is exactly the resolved OS-temp
  parent under ordinal-ignore-case comparison;
- the candidate is outside the resolved repository in both directions;
- the leaf matches the exact prefix/GUID form;
- the candidate differs from every prior attempted or retained QA root; and
- `Test-Path -LiteralPath <candidate>` is false.

Only after those checks pass may it create the exact validated path with:

```powershell
New-Item -ItemType Directory -Path <validated-exact-path> -ErrorAction Stop
```

`-LiteralPath` is forbidden on `New-Item` in this environment. `-Force`, a
glob, an unresolved variable, a relative path, a shell switch, or a fallback
creation attempt is forbidden. Output redirection such as `Out-Null` is
optional and has no authority effect.

Immediately after creation and before any environment assignment, file write,
preview start, browser launch, or request, Quartermaster must:

1. require `Test-Path -LiteralPath <candidate> -PathType Container`;
2. resolve the created directory with `Resolve-Path -LiteralPath`;
3. require byte-for-byte ordinal-ignore-case equality to the prevalidated full
   path;
4. repeat direct-child-inside-temp and outside-repository checks; and
5. freeze that resolved value as the only `HORIZON_ARCHIVE_QA_DIR` and owned
   deletion target.

If creation emits any error, the directory is absent, or any post-create fact
differs, stop immediately. Do not start previews or attempt a second path.

## Preview and sole exact-identity replay

Only after the root exists and all post-create containment checks pass may
Quartermaster set the unchanged VR-08 environment:

```text
HORIZON_ARCHIVE_PRODUCT_CANDIDATE=
  a91763e28d488f31f8cf7d40ece0b2682246ba9b
HORIZON_ARCHIVE_PROBE_CANDIDATE=
  ca89a679195c11d441a76e6c02983a6436f2ccb2
HORIZON_ARCHIVE_QA_DIR=<the exact resolved new root>
HORIZON_ARCHIVE_URL=http://127.0.0.1:4173/
HORIZON_ARCHIVE_PBA_NARROW=true
HORIZON_ARCHIVE_PBA_GLOBAL=true
HORIZON_ARCHIVE_MEDIA_IDENTITY=true
```

The exact content identity must come from the verified commit result, not the
failed summary or manual retyping. Then start only the exact owned FRRC-002
production/fixture previews at `127.0.0.1:4173` / `:4184`, record their PIDs,
and require root/deep/JS/CSS served-to-disk identity. A preview may never start
before the verified root exists.

Only after served identity passes may Quartermaster invoke exact
`FRRC-002-v1.entries.complete-e2e` once within `180s`. It must run the complete
unchanged journey and generate exactly one new machine-owned
`first-run-live-summary.json` in the new root. The summary must name exact
product `a91763e`, probe `ca89a679`, validation `4cd7fbf`, operative shell
`FRSH-003-v1-VR-07`, manifest `FRRC-002-v1`, exact root, six passing epochs,
complete journey/ending, zero runtime errors, and `pass=true`.

Only after successful E2E exit and summary existence may Quartermaster invoke
exact `entries.live-summary-verify` once with the same exact product, probe,
root, and summary-path values. No partial/diagnostic/second E2E, summary edit,
second verifier, alternate identity, or retry is authorized.

## Exact cleanup and no-rerun rule

On success or failure, Quartermaster must close only the owned browser, stop
only recorded preview PIDs, and prove ports `4173` / `4184` clear. Before any
recursive deletion it must resolve the created root again and require exact
equality to the frozen deletion target, exact direct-child containment in the
resolved OS-temp parent, and exclusion from the repository. Only then may it
use the supported literal deletion form:

```powershell
Remove-Item -LiteralPath <revalidated-exact-root> -Recurse -Force -ErrorAction Stop
```

It must then prove that exact path no longer exists. It may not enumerate,
reuse, inspect, mutate, or delete the prior retained root or the failed VR-08
candidate. Broad temp cleanup is forbidden.

Any command error, unexpected root state, preview/request variance, E2E fail/
abort/timeout, missing or duplicate summary, verifier rejection, PID/port
ambiguity, containment mismatch, or cleanup failure is `PRODUCTION CONTENT
HOLD` with no rerun and no in-place repair. Quartermaster records the exact
evidence and may update only its content return and the handoff.

## Frozen scope, downstream gate, and rollback

All VR-08 content, product, evidence, identity, threshold, performance, media,
canon, route, learning, save, later-rail, MH-40, null-delta, and
`successor=null` boundaries remain exact. No tracked file may change before or
during replay. No image/audio/media operation or reveal is authorized.

Quartermaster may issue `PRODUCTION CONTENT / BUILD CANDIDATE READY` only if
the exact candidate passes repeated preflight, native root creation and
containment, served identity, the sole E2E, one summary, one verifier, and
cleanup. It may then update only `FRCA-003-v1` or one versioned content return
and `NEXT_INSTANCE_HANDOFF.md`, commit, push, and prove synchronization.

Image Specialist and Intelligence remain blocked until that exact passing
synchronized Quartermaster handoff. No maturity advance, release, or
`FIRST RUN COMPLETE` is authorized.

This Mission variance changes documentation only. Released rollback remains
`3e3da60`; content candidate remains `a91763e`; no product/content rollback or
migration exists. Protected PDF/training/repository-QA/browser/profile/save/
hidden-lore state, automation, archived workflows, schedules, and reveals
remain forbidden.

## Mission signature and exact Quartermaster handoff

Mission read the current synchronized handoff, full Mission profile, complete
`FRCA-003-v1` including the VR-08 return, complete `FRSH-003-v1-VR-08`, exact
Git identities, and native PowerShell command metadata at source
`3b1bf51b585769e9734241982210e72372c6801d`.

Mission proved `New-Item` exposes `Path` and `ItemType` but not `LiteralPath`;
`Resolve-Path`, `Test-Path`, and `Remove-Item` expose `LiteralPath`; current
temp and repository roots resolve separately; candidate commits remain valid
ancestors; and no tracked drift exists. Mission created no root, started no
preview/browser, ran no test/E2E/verifier, deleted nothing, and inspected no
protected/user state.

Mission Captain signs **`FIRST RUN SHELL READY /
FRSH-003-v1-VR-09`**.

Exact next owner is Quartermaster. Read its profile, this variance, complete
`FRSH-003-v1-VR-08`, complete current `FRCA-003-v1`, operative
`FRSH-003-v1-VR-07`, and exact current E2E/manifest controls. Change no tracked
implementation/content file. Repeat the identity preflight, create and verify
one root only with the exact supported native form, start previews only after
containment passes, then invoke one E2E, one summary, and one verifier. Any
failure is `HOLD` without rerun. Image remains blocked until Quartermaster
PASS.

The dedicated Mission commit, push, and exact `HEAD == origin/main` proof are
reported from Git after commit because this artifact cannot contain the hash
of the commit that first contains itself.
