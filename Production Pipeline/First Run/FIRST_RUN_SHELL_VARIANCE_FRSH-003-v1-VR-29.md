# First Run Shell Variance Reissue - Scalar Build Proof Only

Variance ID: `FRSH-003-v1-VR-29`

Disposition: **`FIRST RUN SHELL READY / ONE SCALAR PRODUCTION BUILD PROOF
ONLY / FRSH-003-v1-VR-29`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Immediate return / predecessor authority: Mission VR-28 hold /
`FRSH-003-v1-VR-28`

Mission source inspected:
`85c426872b2dce6be4c5bedc7e595f7a60a54cfa`

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

## Independent adjudication

Mission independently adjudicates the exact VR-27 return preserved by VR-28.
The sole native production build exited `0`; Vite reported `built in 6.39s`;
visible output contained exactly one literal `217 modules transformed.` marker
and exactly one completion marker; normalized proof remained unavailable; and
the wrapper exited `1`. Combat did not rerun and performed no post-build
command or repository write.

The consumed VR-27 authority remains **`HOLD / PRODUCTION BUILD
EXECUTION-CONTROL FAILURE / NO RERUN`**. The facts are consistent with a
completion-regex or output-capture proof defect. They do not establish a
product, package, manifest, Vite, module-count, native-build, or visible-output
defect, and they do not issue `PRODUCTION FUNCTIONAL`.

The exact raw captured stream is not durably available as a trusted artifact,
so an output-only reparse is not authorized. A single corrected build-proof
invocation is proportionate and is issued below. It is the only product
command authorized by this variance.

Mission also independently adjudicates the VR-28 staging warning boundary.
Git emitted line-ending warnings containing the two authorized literal
document pathnames. That violated the no-filename-output boundary and remains
the separate OPEN classification **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL
PATHNAME OUTPUT / OPEN / VR-28 MISSION STAGING`**. It was not discovery or
enumeration, changed no candidate fact or product state, and is not candidate
evidence. It neither invalidates the scalar parser nor blocks a later bounded
proof-only build.

The silent two-document staging method used for this Mission contribution is
docs-process authority only. It grants no production, build, test, inspection,
filename, or repository-scope authority to Combat or any later role.

At Mission start, scalar synchronization proved `HEAD == origin/main ==
85c426872b2dce6be4c5bedc7e595f7a60a54cfa`; fully suppressed tracked and index
checks each returned exit `0`. Those checks did not inspect or prove untracked
absence. Mission makes no untracked-cleanliness claim.

Mission ran no build, test, validator, fixture, PBA/media/offline/dependency/
source-map/product-drift/performance, preview, served request, port/PID,
containment, root, browser, E2E, diagnostic, summary, verifier, cleanup,
live-review, product, media, protected-state, user-state, reveal, or maturity
action.

## Exact fresh Combat authority

Fresh Combat may perform only this sequence:

1. Run scalar `git rev-parse HEAD` and `git rev-parse origin/main`; emit only
   the two hashes and require exact equality.
2. Run fully suppressed `git diff --quiet` and `git diff --cached --quiet`;
   require exit `0` from each and emit nothing. Do not inspect or claim
   untracked cleanliness.
3. From workdir `horizon-archive-game`, with execution-tool timeout `60000ms`,
   invoke exactly one `npm run build` using the complete wrapper below.
4. Stop immediately whether the wrapper returns or fails. Return only the
   scalar result and disposition to a fresh Mission Captain. Run no post-build
   command and perform no repository write.

No other pre-build or post-build command is authorized. Do not run `git
status`, `git diff --check`, blob/path rev-parse, any filename-capable command,
listing, discovery, search, glob, protected-path probe, untracked-path check,
content parse, summary, verifier, cleanup, or synchronization command outside
the exact scalar/quiet proof groups.

The build is the first and only product command. Do not rerun any VR-22 test or
validator. Do not run fixture, PBA/media/offline/dependency/source-map/product-
drift/performance, preview, served request, port/PID, containment, root,
browser, E2E, diagnostic, live-review, or cleanup work.

## Exact one-build scalar wrapper

The wrapper captures the build stream without emitting it. After ANSI strip it
counts the literal module substring exactly once and uses the exact
prefix-tolerant completion expression. It emits only one scalar line before
the assertion and requires exact `1 / 1 / 0`.

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
  $buildLines = @(& npm run build 2>&1 | ForEach-Object { $_.ToString() })
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
$moduleCount = [regex]::Matches(
  $plainBuildText,
  [regex]::Escape('217 modules transformed.')
).Count
$completionCount = [regex]::Matches(
  $plainBuildText,
  '(?m)^[^\r\n]*\bbuilt in\s+([0-9]+(?:\.[0-9]+)?)\s*(ms|s)\s*$'
).Count
$nativeExitScalar = if ($null -eq $nativeExit) { 'null' } else { [string]$nativeExit }
Write-Output (
  'moduleCount={0} completionCount={1} nativeExit={2}' -f
    $moduleCount, $completionCount, $nativeExitScalar
)
if ($moduleCount -ne 1 -or $completionCount -ne 1 -or $nativeExit -ne 0) {
  exit 1
}
exit 0
```

Missing or duplicate literal module substring, missing or duplicate anchored
completion line, native exit other than exact `0`, missing native exit,
capture failure, timeout, or wrapper failure remains fail-closed. No captured
build stream, path, or filename may be emitted.

## Return, scope, and preserved classifications

On exact `moduleCount=1 completionCount=1 nativeExit=0`, return **`PRODUCTION
BUILD EXECUTION-CONTROL PASS / STOP / RETURN TO FRESH MISSION`**. On any other
scalar or wrapper result, return **`HOLD / PRODUCTION BUILD EXECUTION-CONTROL
FAILURE / NO RERUN / RETURN TO FRESH MISSION`**. Both branches stop without
any post-build command or write.

No implementation, product, test, manifest, E2E, content, CSS, module,
fixture, dependency, package, lockfile, curriculum, evaluator, save, story,
route, map, scoreboard, maturity, media, or other control change is permitted.
The sole build may replace only manifest-owned `horizon-archive-game/dist`.
There is no product/save rollback. Administrative rollback may only normally
revert this Mission variance/handoff commit; it may not reset history, alter a
frozen identity, or touch protected, untracked, or user state.

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

All frozen candidate identities, VR-22 passing thresholds, player, learning,
copy/owner, `L02-02`, strict `24/24`, evaluator, remediation, evidence/privacy,
save/reload/return, accessibility, focus, responsive, forced-color, reduced-
motion, offline, request, dependency, source-map, PBA, performance, route,
world, equal MH-40, null-delta, `successor=null`, ending, immutable-media `17 /
37,410,731`, diagnostic non-evidence/non-verifier, and one-E2E meanings remain
exact.

No media generation, edit, replacement, variation, import, movement, or reveal
is authorized. No branch, packet, lesson, hidden-lore answer, reward, access,
identity, authority, world response, successor, RP-013, or post-ending content
may be added or changed. Protected repository QA, PDF, training, browser/
profile/save, hidden lore, media, user state, predecessor roots, and unrelated
external roots remain forbidden to inspect, enumerate, reuse, modify, move, or
delete.

No Quartermaster, Image Specialist, Intelligence, reveal, maturity advance,
release, schedule, automation, or `FIRST RUN COMPLETE` action is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / ONE SCALAR PRODUCTION BUILD
PROOF ONLY / FRSH-003-v1-VR-29`**.

Exact next owner is a **fresh Combat Engineer**. Execute only the exact
scalar/quiet synchronization checks and one scalar wrapper invocation, then
stop and return the scalar result to a fresh Mission Captain.

The dedicated Mission commit and final synchronization proof are reported
from Git after commit because this artifact cannot contain the hash that first
contains itself.
