# First Run Shell Variance Reissue - Separator-Normalized Root Containment

Variance ID: `FRSH-003-v1-VR-10`

Disposition: **`FIRST RUN SHELL READY / FRSH-003-v1-VR-10`**

Stage / owner: Mission Captain / `mission_captain`

Governing shell: `FIRST RUN SHELL READY / FRSH-003-v1`

Operative evidence shell: `FIRST RUN SHELL READY / FRSH-003-v1-VR-07`

Identity replay authority: `FRSH-003-v1-VR-08`

Native-root authority clarified: `FRSH-003-v1-VR-09`

Quartermaster return: `PRODUCTION CONTENT HOLD / FRCA-003-v1 / VR-09`

Work Order: `FRWO-003-v1 / Sixfold Weir`

Mission control source inspected:
`3e548e6615d10567ce6512e901740c5b77381eb7`

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

Mission authorizes one zero-change exact-identity replay with a single
separator-normalized correction to the VR-09 pre-create containment proof.

VR-09 stopped before `New-Item`. The resolved OS-temp parent retained its
trailing directory separator while `[IO.Path]::GetDirectoryName(candidate)`
returned the same parent without that separator. Direct string equality
therefore raised exact error `parent`. No QA root, environment assignment,
preview, served request, browser, E2E, summary, verifier, cleanup target, or
tracked change existed. The live replay remains unconsumed.

Mission independently evaluated the exact normalized expression without
creating a root. Normalizing both sides with `[IO.Path]::GetFullPath` and
`TrimEnd` over both platform directory-separator characters produces exact
ordinal-ignore-case direct-parent equality. The candidate remains a descendant
of normalized OS temp and remains outside the normalized repository in both
directions.

Only that comparison representation changes. All VR-09 root creation,
post-create validation, identity injection, preview, served-identity, one-E2E,
one-summary, one-verifier, cleanup, no-rerun, and protected-scope terms remain
exact. Any failure is immediate `HOLD`. Image Specialist and Intelligence
remain blocked until synchronized Quartermaster PASS.

## Accepted stopped VR-09 facts

- Repeated Git/object/blob/ancestry/slot/media/port preflight passed at
  synchronized source `913cbfe376dd028c67f0373b9e8c4126bf5fcf15`.
- Exact error `parent` occurred during pre-create direct-parent comparison.
- No `New-Item` invocation occurred and the proposed root never existed.
- No environment, preview, served request, browser, E2E, summary, verifier,
  write, deletion target, image/media operation, or protected-state access
  existed.
- Ports `4173` / `4184` remained clear and tracked files remained clean.

These facts prove only a canonical-string mismatch. They are not content
acceptance and waive no replay gate.

## Exact repeated identity preflight

Quartermaster must repeat the complete VR-09 identity preflight from the new
synchronized VR-10 source before generating a GUID. It must prove exact local/
tracking/remote equality; no tracked drift; ordered ancestry `7e85154 ->
4cd7fbf -> ca89a679 -> aa2c141 -> a91763e -> current control`; rejection of
mistyped non-object `a91763e0b00d6344f84e741f022d894b352a0f23`;
the four frozen blobs below; exactly seven final-purpose slots; accepted media
`17 / 37,410,731`; unchanged two final-copy E2E assertions; and clear ports.

```text
drownedArchive.js       1bc2f9d93c59a396ddee7ed83cde1600f76b62e7
sixfoldWeir.test.js      21eb3cd40b4b25f39a72d8f4084a5cdf50e7deb5
e2e-playthrough.mjs     30ad3bbb49e441914bbd22e365044677f8263b11
FRRC-002-v1.json         786663223f75cb3a88503c50373e79f3c5c5cf26
```

No focused, related, full, validator, build, content, browser, or E2E run is
authorized by preflight. Any failure is `HOLD`.

## Exact normalized pre-create path contract

Use one PowerShell process and set terminating errors first:

```powershell
$ErrorActionPreference = 'Stop'
$separators = [char[]]@(
  [IO.Path]::DirectorySeparatorChar,
  [IO.Path]::AltDirectorySeparatorChar
)
```

Resolve the existing OS-temp parent and repository root, then normalize both:

```powershell
$tempParentNormalized = [IO.Path]::GetFullPath(
  (Resolve-Path -LiteralPath ([IO.Path]::GetTempPath())).Path
).TrimEnd($separators)

$repoRootNormalized = [IO.Path]::GetFullPath(
  (Resolve-Path -LiteralPath '.').Path
).TrimEnd($separators)
```

Generate exactly one fresh lowercase-GUID leaf with prefix
`horizon-archive-frrc002-`, build the candidate with
`[IO.Path]::GetFullPath([IO.Path]::Combine(...))`, then normalize its parent:

```powershell
$candidateParentNormalized = [IO.Path]::GetFullPath(
  [IO.Path]::GetDirectoryName($candidate)
).TrimEnd($separators)
```

Direct-parent equality must compare only the two normalized strings:

```powershell
[String]::Equals(
  $candidateParentNormalized,
  $tempParentNormalized,
  [StringComparison]::OrdinalIgnoreCase
)
```

It must be `true`. Do not compare a trimmed parent with an untrimmed parent,
trim only one operand, concatenate a trailing separator into this equality, or
weaken direct-parent equality into descendant-only acceptance.

Separately preserve all VR-09 checks:

- exact leaf prefix and GUID shape;
- candidate does not exist;
- candidate differs from every prior retained/attempted root;
- candidate begins with `tempParentNormalized + directory separator` under
  ordinal-ignore-case comparison;
- candidate does not begin with `repoRootNormalized + directory separator`;
- normalized repo does not begin with `candidate + directory separator`; and
- no glob, relative path, unresolved variable, `-Force`, shell fallback, or
  alternate creation attempt.

Any normalization, equality, descendant, repository-exclusion, leaf,
freshness, or existence failure stops before creation with no retry.

## Creation and mandatory post-create validation

Only after every normalized pre-create check passes may Quartermaster invoke
the supported form once:

```powershell
New-Item -ItemType Directory -Path $candidate -ErrorAction Stop
```

Immediately afterward and before environment assignment, any root write,
preview, request, or browser, require `Test-Path -LiteralPath $candidate
-PathType Container`, resolve the created root with `Resolve-Path
-LiteralPath`, and normalize its full path with the same `GetFullPath` plus
`TrimEnd($separators)` operation.

The normalized resolved root must equal normalized candidate under
`OrdinalIgnoreCase`. Recompute and normalize its parent and require exact
equality to `tempParentNormalized`. Repeat descendant and bidirectional
repository-exclusion checks. Freeze the normalized resolved root as the sole
QA environment and deletion target. If any fact differs, stop without a
second path or replay.

## Sole replay, verifier, and cleanup

Only after the root exists and post-create validation passes may Quartermaster
inject exact product `a91763e28d488f31f8cf7d40ece0b2682246ba9b`,
probe `ca89a679195c11d441a76e6c02983a6436f2ccb2`, and the normalized root into
the unchanged VR-09/FRRC-002 environment. Then and only then start the exact
owned previews, record PIDs, and prove root/deep/JS/CSS served-to-disk identity.

Only after served identity passes may Quartermaster invoke exact
`FRRC-002-v1.entries.complete-e2e` once within `180s`. It must generate exactly
one machine-owned summary naming the exact candidates, validation `4cd7fbf`,
shell `FRSH-003-v1-VR-07`, manifest `FRRC-002-v1`, normalized root, six passing
epochs, complete journey/ending, zero runtime errors, and `pass=true`. Only
after successful exit and summary existence may exact
`entries.live-summary-verify` run once with identical environment values.

On success or failure, close only the owned browser, stop only recorded PIDs,
and prove ports clear. Before deletion, resolve the created root again; apply
the identical separator normalization to root, candidate, parent, temp, and
repo; require exact root/candidate and direct-parent equality plus descendant
and bidirectional repository exclusion. Only then may the exact root be
removed with:

```powershell
Remove-Item -LiteralPath $revalidatedExactRoot -Recurse -Force -ErrorAction Stop
```

Prove it no longer exists. Do not enumerate, inspect, reuse, mutate, or delete
any prior root. Any path/create/preview/served/E2E/summary/verifier/PID/port/
containment/deletion failure is `PRODUCTION CONTENT HOLD` with no rerun,
alternate path, or in-place repair.

## Frozen scope and downstream gate

No tracked file may change before or during replay. Product, content, test,
copy, E2E, probe, manifest, summary schema, verifier, thresholds, PBA,
performance, media, presentation, learning, privacy, save, route, later rail,
MH-40 equality, null deltas, and `successor=null` remain frozen. No image/audio/
media operation, reveal, Host 06 work, City repair, branch, successor, RP-013,
or post-ending content is authorized.

Quartermaster may issue `PRODUCTION CONTENT / BUILD CANDIDATE READY` only if
the exact candidate passes repeated identity preflight, normalized root
creation/containment, served identity, the sole E2E, one summary, one verifier,
and exact cleanup. It may then update only `FRCA-003-v1` or one versioned
content return and `NEXT_INSTANCE_HANDOFF.md`, commit, push, and prove sync.

Image Specialist and Intelligence remain blocked until that synchronized
Quartermaster PASS. No maturity advance, release, or `FIRST RUN COMPLETE` is
authorized. Released rollback remains `3e3da60`; no product/content rollback
or migration exists. Protected PDF/training/repository-QA/browser/profile/
save/hidden-lore state, automation, archived workflows, schedules, and reveals
remain forbidden.

## Mission signature and exact Quartermaster handoff

Mission read the current synchronized handoff, full Mission profile, complete
current `FRCA-003-v1`, complete `FRSH-003-v1-VR-09`, and exact current Git and
path behavior at source `3e548e6615d10567ce6512e901740c5b77381eb7`.

Mission evaluated normalized temp/candidate-parent comparison without creating
a directory: raw temp ended in a separator; both normalized values became
exact `C:\Users\marti\AppData\Local\Temp`; direct-parent equality and temp
descendant checks were `true`; both repository-containment directions were
`false`. Current candidate/manifest blobs remain exact. Mission created no
root, started no preview/browser, ran no test/E2E/verifier, deleted nothing,
and inspected no protected/user state.

Mission Captain signs **`FIRST RUN SHELL READY /
FRSH-003-v1-VR-10`**.

Exact next owner is Quartermaster. Read its profile, this variance, complete
`FRSH-003-v1-VR-09`, complete current `FRCA-003-v1`, and exact current
E2E/manifest controls. Change no tracked file. Repeat identity preflight; apply
identical separator normalization to both parent operands; create and
postvalidate one root; only then start previews and invoke one E2E, one summary,
and one verifier. Any failure is `HOLD` without rerun. Image remains blocked.

The dedicated Mission commit, push, and exact `HEAD == origin/main` proof are
reported from Git after commit because this artifact cannot contain the hash
of the commit that first contains itself.
