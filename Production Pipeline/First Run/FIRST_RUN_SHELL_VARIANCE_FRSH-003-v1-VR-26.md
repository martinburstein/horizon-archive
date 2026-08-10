# First Run Shell Variance Reissue - Corrected Production Build Only

Variance ID: `FRSH-003-v1-VR-26`

Disposition: **`FIRST RUN SHELL READY / ONE CORRECTED PRODUCTION BUILD ONLY /
FRSH-003-v1-VR-26`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Immediate return / predecessor authority: `FRSH-003-v1-VR-25` /
`FRSH-003-v1-VR-24`

Mission source inspected:
`32f416277d4e8675114eab99e04d2668ad230df1`

VR-22 Combat start source:
`c81722376ac4686474648bca71ad5e648e35b644`

Exact diagnostic field-source candidate:
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`

Exact diagnostic-control predecessor:
`ce7c9abbaf1d0ffad8c1031f0398750676d4970e`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Recorded: **2026-08-10**

## Decision

Mission independently issues **READY for exactly one corrected
production-build-only invocation** by a fresh Combat Engineer.

At the exact Mission source, `HEAD == origin/main == 32f4162...`; the tracked
worktree and index each returned quiet exit `0`. Those quiet checks neither
inspected nor proved the absence of untracked paths, and Mission makes no
untracked-cleanliness claim.

Mission read only the named workflow authorities, VR-24, VR-25, and the six
literal controls. It ran no filename discovery or filename-capable integrity
command. It performed no build, test, validator, fixture, PBA/media/offline/
dependency/source-map/product-drift/performance, preview, served request,
port/PID, containment, root, browser, E2E, diagnostic, summary, verifier,
cleanup, live, product, media, protected-state, user-state, reveal, or maturity
work.

VR-22 already established the integrity/static preflight, focused `68/68`,
related `74/74`, cold full `972/972`, and forty validator passes. Its build
attempt stopped because PowerShell promoted Vite's colored native stderr
before native exit and output proof were captured. That remains an
execution-control failure only and does not establish a product or build
defect.

The corrected build authority remains unconsumed. The VR-24 wrapper is
preserved exactly below. It uses nonterminating native-stream handling,
disables native stderr promotion when supported, captures combined output and
`$LASTEXITCODE` immediately, restores preferences in `finally`, normalizes
ANSI control sequences, and requires exact native exit `0`, exactly one `217
modules transformed` marker, and exactly one Vite `built in` marker.

## Separately OPEN process divergences

All prior divergences remain distinct, OPEN, and unusable as candidate
evidence:

- **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN / VR-17`**;
- **`UNAUTHORIZED DIVERGENCE / BROAD REPOSITORY FILENAME ENUMERATION / OPEN /
  VR-23`**;
- **`UNAUTHORIZED DIVERGENCE / UNTRACKED PATHNAME ENUMERATION / OPEN / VR-24
  COMBAT ATTEMPT`**; and
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-25
  MISSION`**.

The three enumeration divergences remain separately OPEN. The VR-25 literal-
pathname-output divergence also remains separately OPEN. None is waived,
merged, closed, or reused.

## Authorized static identity

Mission independently proved these six exact tracked blobs at the inspected
source, in this order:

1. release command manifest:
   `fc91a863be99b11c44405071324e3502b959e621`;
2. E2E control: `0b72f1463c729a8e22337af0115c3316652c2565`;
3. Sixfold Weir static control:
   `5910af4e4f6754acbc5193ff021f374fe90a96f2`;
4. application control: `802ceffb1a07c3b166dc2f7f06ab38138dc37596`;
5. Drowned Archive control:
   `1bc2f9d93c59a396ddee7ed83cde1600f76b62e7`; and
6. package control: `2c23c0a59f62af0463fa54bb1c8465aa9f6bb2da`.

The package maps `npm run build` to exact `vite build` and retains Vite
`6.4.2`. The manifest's `production-build` entry remains exact: workdir
`horizon-archive-game`, command `npm run build`, timeout `60000`, expected
native exit `0`, owner `combat_engineer`, and output ownership
`horizon-archive-game/dist`.

Fresh Combat must prove the synchronized source and these six blobs unchanged
using only the quiet/scalar commands below. Any mismatch is immediate `HOLD /
NO BUILD / NO RERUN`.

## Exact Combat authority and absolute filename-output ban

Fresh Combat may perform only this bounded sequence:

1. Run `git rev-parse HEAD` and `git rev-parse origin/main`; require exact
   equality and emit only the two scalar hashes.
2. Run `git diff --quiet` and `git diff --cached --quiet` with all output
   suppressed; require exit `0` from each. These checks do not inspect or prove
   untracked absence.
3. Run `git rev-parse HEAD:<literal>` for each of the six literal paths named
   in the current handoff, suppress errors, emit only the six scalar hashes,
   and require the exact identities above.
4. From workdir `horizon-archive-game`, invoke exactly one `npm run build`
   inside the exact wrapper below with execution-tool timeout `60000ms`.
5. Stop immediately when the wrapper returns or throws. Return the captured
   result directly to a fresh Mission Captain. Run no post-build command and
   write, stage, commit, or push no report or handoff.

No other pre-build or post-build command is authorized. In particular, before
and after the wrapper, do not run `git status`, `git diff --check`, any command
that can emit a filename, repository listing, filename search, glob, protected-
path probe, untracked-path check, manifest parse, package parse, content read,
summary, verifier, cleanup, or synchronization command beyond the exact three
quiet/scalar proof groups above.

The build is the first and only product command. No VR-22 test or validator
gate may be rerun. No fixture build, PBA/media/offline/dependency/source-map/
product-drift/performance gate, preview, served request, port/PID, containment,
root, browser, E2E, diagnostic, live-review, or cleanup action is authorized.

## Exact corrected wrapper

The execution tool must use workdir `horizon-archive-game`, timeout `60000ms`,
and this exact PowerShell syntax, preserved unchanged from VR-24:

```powershell
$ErrorActionPreference = 'Stop'
$savedErrorActionPreference = $ErrorActionPreference
$hasNativePreference = Test-Path -LiteralPath Variable:PSNativeCommandUseErrorActionPreference
if ($hasNativePreference) {
  $savedNativePreference = $PSNativeCommandUseErrorActionPreference
}

$nativeExit = $null
$nativeSucceeded = $false
$buildLines = @()
try {
  $ErrorActionPreference = 'Continue'
  if ($hasNativePreference) {
    $PSNativeCommandUseErrorActionPreference = $false
  }
  $LASTEXITCODE = $null
  $buildLines = @(& npm run build 2>&1 | ForEach-Object { $_.ToString() })
  $nativeExit = $LASTEXITCODE
  $nativeSucceeded = ($null -ne $nativeExit -and $nativeExit -eq 0)
}
finally {
  if ($hasNativePreference) {
    $PSNativeCommandUseErrorActionPreference = $savedNativePreference
  }
  $ErrorActionPreference = $savedErrorActionPreference
}

$buildText = [string]::Join([Environment]::NewLine, $buildLines)
$buildText | Write-Output
if (-not $nativeSucceeded) {
  throw "production build native exit: $nativeExit"
}

$plainBuildText = [regex]::Replace(
  $buildText,
  "`e\[[0-?]*[ -/]*[@-~]",
  ''
)
$moduleProof = [regex]::Matches(
  $plainBuildText,
  '(?m)^\s*(?:\u2713|\u221A)\s*217 modules transformed\.\s*$'
)
$completionProof = [regex]::Matches(
  $plainBuildText,
  '(?m)^\s*(?:\u2713|\u221A)\s*built in\s+.+\s*$'
)
if ($moduleProof.Count -ne 1 -or $completionProof.Count -ne 1) {
  throw 'production build output proof unavailable'
}
```

`$nativeExit` is captured and evaluated immediately after the sole native
pipeline, before any later command. The complete combined output is retained
and printed after preference restoration. Native exit other than exact `0`,
missing native exit, missing or duplicate module marker, missing or duplicate
completion marker, timeout, or wrapper failure is fail-closed evidence.

## Return branches and no-change boundary

On exact native exit `0` with exactly one normalized module marker and exactly
one normalized completion marker, Combat returns **`PRODUCTION BUILD
EXECUTION-CONTROL PASS / STOP / RETURN TO FRESH MISSION`**.

On any synchronization, quiet-state, blob-identity, native exit, output-
capture, ANSI-normalization, marker-count, timeout, or wrapper failure, Combat
returns **`HOLD / PRODUCTION BUILD EXECUTION-CONTROL FAILURE / NO RERUN /
RETURN TO FRESH MISSION`**.

Both branches stop at the same boundary. Combat performs no post-build Git,
file, report, handoff, cleanup, inspection, or product command. Another fresh
Mission Captain must adjudicate the returned output before any further
authority exists.

No implementation, product, test, manifest, E2E, content, CSS, module,
fixture, dependency, package, lockfile, curriculum, evaluator, save, story,
route, map, scoreboard, maturity, media, or other control change is permitted.
The sole build may replace only its manifest-owned
`horizon-archive-game/dist` output.

No product or save rollback exists. Administrative rollback may only normally
revert this Mission variance/handoff commit; it may not reset history, alter a
frozen identity, touch protected/untracked/user state, or migrate a save.

## Preserved boundaries and exact handoff

This authority has no player-visible delta. Exact first-run address remains
`FR-03 / Host 05 / Sixfold Weir`; stage and release remain HOLD; no release-
map or scoreboard cell advances.

All five frozen identities, all VR-22 passing thresholds, all player, seven
final copy/owner, `L02-02`, strict `24/24`, evaluator, remediation, evidence/
privacy, save/reload/return, accessibility, focus, responsive, forced-color,
reduced-motion, offline, request, dependency, source-map, PBA, performance,
route, world, equal MH-40, null-delta, `successor=null`, ending, immutable-
media `17 / 37,410,731`, diagnostic non-evidence/non-verifier, and one-E2E
meanings remain exact.

No media generation, edit, replacement, variation, import, movement, or reveal
is authorized. No branch, packet, lesson, hidden-lore answer, reward, access,
identity, authority, world response, successor, RP-013, or post-ending content
may be added or changed.

Protected repository QA, PDF, training, browser/profile/save, hidden lore,
media, user state, every predecessor root, and unrelated external roots remain
forbidden to inspect, enumerate, reuse, modify, move, or delete.

No Quartermaster, Image Specialist, Intelligence, reveal, maturity advance,
release, schedule, automation, or `FIRST RUN COMPLETE` action is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / ONE CORRECTED PRODUCTION BUILD
ONLY / FRSH-003-v1-VR-26`**.

Exact next owner is a **fresh Combat Engineer**. Perform only the three exact
quiet/scalar proof groups, invoke the preserved wrapper exactly once, stop
without any post-build command or repository write, and return the captured
result to a fresh Mission Captain.

The dedicated Mission commit and final synchronization proof are reported
from Git after commit because this artifact cannot contain the hash that first
contains itself.
