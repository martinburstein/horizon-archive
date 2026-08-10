# First Run Shell Variance Reissue - Remaining Pre-Live Fixture and Scalar PBA Only

Variance ID: `FRSH-003-v1-VR-31`

Disposition: **`FIRST RUN SHELL READY / REMAINING PRE-LIVE FIXTURE AND
SCALAR PBA ONLY / FRSH-003-v1-VR-31`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Immediate return / predecessor authority: Combat VR-30 proof return /
`FRSH-003-v1-VR-30`

Mission source inspected:
`d8796afe0df017b1c06a01eb795f5b5192007b2c`

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

## Independent adjudication and inherited checkpoint

Mission accepts the exact immutable VR-22 and VR-30 evidence supplied by the
fresh Combat return. VR-22 passed focused `68/68`, related `74/74`, cold full
`972/972`, and validators `40/40`. VR-30 passed all six frozen blob scalars in
their exact order and values. Its sole production build returned
`moduleCount=1 builtSubstringCount=1 nativeExit=0`; the recorded native build
duration was `8.8s`, within the frozen `60s` build timeout. These gates are
accepted and must not be rerun under this variance.

The corrected build proof closes the VR-29/VR-30 execution-control return. It
does not itself issue `PRODUCTION FUNCTIONAL`, release acceptance, or a
maturity advance. The remaining proportionate pre-live work is one exact
TD-012 fixture build and one scalarized invocation of the manifest-owned
production PBA/media/source-map logic. Combat must then stop and return to a
fresh Mission Captain before preview, served identity, browser, or E2E.

At Mission start, scalar synchronization proved `HEAD ==
d8796afe0df017b1c06a01eb795f5b5192007b2c`. Mission performed no build, test,
validator, fixture, PBA/media, offline, dependency, source-map, product-drift,
performance, preview, served request, port/PID, containment, root, browser,
E2E, diagnostic, summary, verifier, cleanup, live-review, product, media,
protected-state, user-state, reveal, or maturity action.

## Frozen candidate and scan boundary

The six exact accepted blobs remain immutable:

```text
frrcBlob=fc91a863be99b11c44405071324e3502b959e621
e2eBlob=0b72f1463c729a8e22337af0115c3316652c2565
staticTestBlob=5910af4e4f6754acbc5193ff021f374fe90a96f2
appBlob=802ceffb1a07c3b166dc2f7f06ab38138dc37596
drownedArchiveBlob=1bc2f9d93c59a396ddee7ed83cde1600f76b62e7
packageBlob=2c23c0a59f62af0463fa54bb1c8465aa9f6bb2da
```

Combat must not resolve, emit, or rerun these blob proofs. They are the
accepted immutable checkpoint. Package/dependency identity, product-source
identity, exact test/control identity, and offline-source identity may be
carried forward only to the extent those six blobs establish them. No
lockfile-wide, repository-wide, dependency-tree, import-graph, URL-token,
network-token, source, filename, glob, or path scan is authorized, and no
broader offline or dependency claim may be made.

Source-map evidence is limited to the exact production output traversal in
the scalar PBA wrapper below and emits only `sourceMapCount`. No source-map
pathname may be emitted. Dynamic Host 05 `<=2ms`, sampled main-thread task
`<=100ms`, runtime-request, and offline runtime proof remain reserved for the
later sole E2E/live checkpoint. Production build duration `8.8s` is an
inherited build-time fact only and may not substitute for those dynamic gates.

## Exact fresh Combat authority

Fresh Combat may perform only this sequence:

1. Run scalar `git rev-parse HEAD` and `git rev-parse origin/main`; emit only
   the two hashes and require exact equality.
2. Run fully suppressed `git diff --quiet` and `git diff --cached --quiet`;
   require exit `0` from each and emit nothing. Do not inspect or claim
   untracked cleanliness.
3. From workdir `horizon-archive-game`, with execution-tool timeout `60000ms`,
   invoke exactly one `npm run build:td012-fixture` through the complete safe
   native wrapper below.
4. Only if the fixture scalar is exact and the wrapper exits `0`, return to
   repository root and invoke exactly one scalarized PBA/media/source-map
   wrapper below with execution-tool timeout `60000ms`.
5. Stop immediately after the scalar PBA wrapper whether it passes or fails.
   Run no post-scan command and perform no repository write. Return only the
   authorized scalar outputs and exact disposition to a fresh Mission Captain.

No other pre-build, between-command, or post-scan command is authorized. Do
not run `git status`, `git diff --check`, any blob or pathname rev-parse, any
filename-capable output command, listing, discovery, search, glob, protected-
path probe, untracked-path check, content parse, summary, verifier, cleanup,
or synchronization command outside the initial scalar/quiet proof group.

Do not rerun production build, focused, related, full, validators, or any
VR-22/VR-30 gate. Do not run preview, served identity, port/PID, containment,
root creation, browser, E2E, diagnostic, live-summary verification, cleanup,
or live review. The fixture build and scalar PBA wrapper are the only product-
output commands authorized.

## Exact one-fixture-build scalar wrapper

This wrapper invokes the exact manifest `fixture-build` command. It captures
and suppresses the complete stream, strips ANSI control sequences, counts the
literal `57 modules transformed.` substring and literal `built in` substring,
and emits only one scalar line. It uses no duration parser, unit parser, line
anchor, or line-shape expression.

```powershell
$ErrorActionPreference = 'Stop'
$savedErrorActionPreference = $ErrorActionPreference
$hasNativePreference = Test-Path -LiteralPath Variable:PSNativeCommandUseErrorActionPreference
if ($hasNativePreference) {
  $savedNativePreference = $PSNativeCommandUseErrorActionPreference
}

$nativeExit = $null
$buildLines = @()
try {
  $ErrorActionPreference = 'Continue'
  if ($hasNativePreference) {
    $PSNativeCommandUseErrorActionPreference = $false
  }
  $LASTEXITCODE = $null
  $buildLines = @(& npm run build:td012-fixture 2>&1 | ForEach-Object { $_.ToString() })
  $nativeExit = $LASTEXITCODE
}
finally {
  if ($hasNativePreference) {
    $PSNativeCommandUseErrorActionPreference = $savedNativePreference
  }
  $ErrorActionPreference = $savedErrorActionPreference
}

$buildText = [string]::Join([Environment]::NewLine, $buildLines)
$plainBuildText = [regex]::Replace(
  $buildText,
  "`e\[[0-?]*[ -/]*[@-~]",
  ''
)
$fixtureModuleCount = [regex]::Matches(
  $plainBuildText,
  [regex]::Escape('57 modules transformed.')
).Count
$fixtureBuiltSubstringCount = [regex]::Matches(
  $plainBuildText,
  [regex]::Escape('built in')
).Count
$nativeExitScalar = if ($null -eq $nativeExit) { 'null' } else { [string]$nativeExit }
Write-Output (
  'fixtureModuleCount={0} fixtureBuiltSubstringCount={1} nativeExit={2}' -f
    $fixtureModuleCount, $fixtureBuiltSubstringCount, $nativeExitScalar
)
if (
  $fixtureModuleCount -ne 1 -or
  $fixtureBuiltSubstringCount -ne 1 -or
  $nativeExit -ne 0
) {
  exit 1
}
exit 0
```

Required output is exact:

```text
fixtureModuleCount=1 fixtureBuiltSubstringCount=1 nativeExit=0
```

Missing, duplicate, nonzero, null, capture, timeout, or wrapper failure is
fail-closed. No captured build stream, duration, path, or filename may be
emitted. On failure stop without PBA and return **`HOLD / FIXTURE BUILD
EXECUTION-CONTROL FAILURE / NO RERUN / RETURN TO FRESH MISSION`**.

## Exact scalar PBA/media/source-map wrapper

This is the scalar transport of the exact manifest `pba-media` traversal and
threshold logic. It reads only the manifest-owned production output, suppresses
all native/path diagnostics, emits no filename, and adds exact-equality checks
required by the operative evidence shell. It is read-only.

```powershell
$ErrorActionPreference = 'Stop'
$jsBytes = $null
$cssBytes = $null
$mediaCount = $null
$mediaBytes = $null
$sourceMapCount = $null
$scanExit = 1
try {
  $assets = @(Get-ChildItem -LiteralPath 'horizon-archive-game/dist/assets' -File -ErrorAction Stop)
  $jsBytes = ($assets | Where-Object Extension -eq '.js' | Measure-Object Length -Sum).Sum
  $cssBytes = ($assets | Where-Object Extension -eq '.css' | Measure-Object Length -Sum).Sum
  $media = @($assets | Where-Object { $_.Extension -notin '.js','.css','.map' })
  $mediaCount = $media.Count
  $mediaBytes = ($media | Measure-Object Length -Sum).Sum
  $sourceMapCount = @(
    Get-ChildItem -LiteralPath 'horizon-archive-game/dist' -Recurse -File -ErrorAction Stop |
      Where-Object Extension -eq '.map'
  ).Count
  $scanExit = 0
}
catch {
  $scanExit = 1
}

$jsScalar = if ($null -eq $jsBytes) { 'null' } else { [string]$jsBytes }
$cssScalar = if ($null -eq $cssBytes) { 'null' } else { [string]$cssBytes }
$mediaCountScalar = if ($null -eq $mediaCount) { 'null' } else { [string]$mediaCount }
$mediaBytesScalar = if ($null -eq $mediaBytes) { 'null' } else { [string]$mediaBytes }
$sourceMapScalar = if ($null -eq $sourceMapCount) { 'null' } else { [string]$sourceMapCount }
Write-Output (
  'jsBytes={0} cssBytes={1} mediaCount={2} mediaBytes={3} sourceMapCount={4} scanExit={5}' -f
    $jsScalar, $cssScalar, $mediaCountScalar, $mediaBytesScalar,
    $sourceMapScalar, $scanExit
)

if (
  $scanExit -ne 0 -or
  $jsBytes -ne 1666665 -or
  $cssBytes -ne 119247 -or
  $jsBytes -gt 1675664 -or
  $cssBytes -gt 119281 -or
  $jsBytes -gt 1703258 -or
  $cssBytes -gt 119672 -or
  $mediaCount -ne 17 -or
  $mediaBytes -ne 37410731 -or
  $sourceMapCount -ne 0
) {
  exit 1
}
exit 0
```

Required output is exact:

```text
jsBytes=1666665 cssBytes=119247 mediaCount=17 mediaBytes=37410731 sourceMapCount=0 scanExit=0
```

Any null, missing, extra, reordered, duplicate, mismatched, threshold-over,
scan, timeout, or wrapper failure is fail-closed. No directory entry,
pathname, filename, extension inventory, exception text, or other output may
be emitted.

## Return, scope, and preserved classifications

On both exact scalar lines and both wrapper exits `0`, return
**`REMAINING PRE-LIVE FIXTURE AND SCALAR PBA PASS / STOP / RETURN TO FRESH
MISSION`**. This is a bounded checkpoint only. It does not authorize or imply
preview, served identity, E2E, live verification, cleanup, `PRODUCTION
FUNCTIONAL`, Quartermaster, release, or maturity advance.

On any other result, return **`HOLD / REMAINING PRE-LIVE EXECUTION-CONTROL OR
EVIDENCE FAILURE / NO RERUN / RETURN TO FRESH MISSION`**. Stop at the first
failure. Do not repair, rerun, diagnose, enumerate, clean, or write.

The fixture build may replace only its manifest-owned fixture output. The PBA
wrapper is read-only. There is no product/save rollback. Administrative
rollback may only normally revert this Mission variance/handoff commit; it may
not reset history, alter a frozen identity, delete build output, or touch
protected, untracked, or user state.

These classifications remain distinct and OPEN; none is waived, merged,
closed, cured, or used as candidate evidence:

- **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN / VR-17`**;
- **`UNAUTHORIZED DIVERGENCE / BROAD REPOSITORY FILENAME ENUMERATION / OPEN /
  VR-23`**;
- **`UNAUTHORIZED DIVERGENCE / UNTRACKED PATHNAME ENUMERATION / OPEN / VR-24
  COMBAT ATTEMPT`**;
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-25
  MISSION`**; and
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-28
  MISSION STAGING`**.

This authority has no player-visible delta. Exact first-run address remains
`FR-03 / Host 05 / Sixfold Weir`; stage and release remain HOLD; no release-
map or scoreboard cell advances.

All frozen candidate, threshold, player, learning, copy/owner, `L02-02`, strict
`24/24`, evaluator, remediation, evidence/privacy, save/reload/return,
accessibility, focus, responsive, forced-color, reduced-motion, offline,
request, dependency, source-map, PBA, performance, route, world, equal MH-40,
null-delta, `successor=null`, ending, immutable-media `17 / 37,410,731`,
diagnostic non-evidence/non-verifier, and one-E2E meanings remain exact.

No implementation, product, test, manifest, E2E, content, CSS, module,
dependency, package, lockfile, curriculum, evaluator, save, story, route, map,
scoreboard, maturity, media, or other control change is permitted. No media
generation, edit, replacement, variation, import, movement, or reveal is
authorized. No branch, packet, lesson, hidden-lore answer, reward, access,
identity, authority, world response, successor, RP-013, or post-ending content
may be added or changed.

Protected repository QA, PDF, training, browser/profile/save, hidden lore,
media, user state, predecessor roots, and unrelated external roots remain
forbidden to inspect, enumerate, reuse, modify, move, or delete.

No Quartermaster, Image Specialist, Intelligence, reveal, maturity advance,
release, schedule, automation, or `FIRST RUN COMPLETE` action is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / REMAINING PRE-LIVE FIXTURE
AND SCALAR PBA ONLY / FRSH-003-v1-VR-31`**.

Exact next owner is a **fresh Combat Engineer**. Execute only the initial
scalar/quiet synchronization checks, the exact one-fixture-build scalar
wrapper, and—only after exact fixture success—the exact scalar PBA/media/
source-map wrapper. Stop and return to a fresh Mission Captain before any
preview, served identity, browser, or E2E action.

The dedicated Mission commit and final synchronization proof are reported
from Git after commit because this artifact cannot contain the hash that first
contains itself.
