# First Run Shell Variance Reissue - Corrected Build Proof Only

Variance ID: `FRSH-003-v1-VR-27`

Disposition: **`FIRST RUN SHELL READY / ONE CORRECTED PRODUCTION BUILD PROOF
ONLY / FRSH-003-v1-VR-27`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Immediate return / predecessor authority: Combat VR-26 build return /
`FRSH-003-v1-VR-26`

Mission source inspected:
`ab9c6818b39a1509f990f2ed76a6270b4e1eb1d2`

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

## Independent decision

Mission independently adjudicates the exact VR-26 return fact: the sole native
production build exited `0`; Vite reported `built in 6.54s`; visible combined
output contained exactly one literal `217 modules transformed.` substring and
exactly one `built in` occurrence; the wrapper nevertheless exited `1` because
its ANSI-normalized marker expressions required one of two exact leading glyph
code points. Combat stopped immediately, did not rerun, and performed no
post-build command or write.

This is **`HOLD / PRODUCTION BUILD EXECUTION-CONTROL FAILURE / NO RERUN`** for
the consumed VR-26 authority. It is a glyph-sensitive proof-parser defect. It
does not establish a product, package, manifest, Vite, module-count, native
build, or output defect, and it does not issue `PRODUCTION FUNCTIONAL`.

Mission considered an output-only proof pass. It is not authorized because the
exact raw combined stream is not durably available here as a trusted artifact;
the supplied exact fact is sufficient to adjudicate VR-26 but not a substitute
for executing the corrected parser against the captured bytes. Mission
therefore issues **exactly one new corrected production-build-proof
invocation** to a fresh Combat Engineer. No output-only proof invocation and no
second build are authorized.

At the inspected source, `HEAD == origin/main == ab9c681...`; tracked worktree
and index checks each returned fully suppressed quiet exit `0`. Those checks
did not inspect or prove untracked absence, and Mission makes no untracked-
cleanliness claim.

Mission ran no build, test, validator, fixture, PBA/media/offline/dependency/
source-map/product-drift/performance, preview, served request, port/PID,
containment, root, browser, E2E, diagnostic, summary, verifier, cleanup, live,
product, media, protected-state, user-state, reveal, or maturity action.

## Corrected proof parser

The VR-26 native capture, immediate `$LASTEXITCODE` evaluation, preference
restoration, complete output emission, ANSI stripping, native-exit requirement,
timeout, workdir, command, and fail-closed behavior remain unchanged.

After ANSI stripping, the module proof must count the literal substring
`217 modules transformed.` exactly once. It is deliberately neither line-
anchored nor glyph-dependent:

```powershell
$moduleProof = [regex]::Matches(
  $plainBuildText,
  [regex]::Escape('217 modules transformed.')
)
```

After ANSI stripping, the completion proof must count exactly one complete
line containing Vite's `built in` timing form. The line is anchored, requires a
numeric duration in `ms` or `s`, permits any same-line prefix, and requires no
leading glyph:

```powershell
$completionProof = [regex]::Matches(
  $plainBuildText,
  '(?m)^[^\r\n]*\bbuilt in[ \t]+\d+(?:\.\d+)?(?:ms|s)[ \t]*$'
)
```

Both counts must equal exactly `1`. Missing or duplicate literal module
substring, missing or duplicate anchored Vite completion line, native exit
other than exact `0`, missing native exit, capture failure, timeout, or wrapper
failure remains fail-closed.

## Exact fresh Combat authority

Fresh Combat may perform only this sequence:

1. Run scalar `git rev-parse HEAD` and `git rev-parse origin/main`; require
   exact equality and emit only the two hashes.
2. Run fully suppressed `git diff --quiet` and `git diff --cached --quiet`;
   require exit `0` from each. Do not claim untracked cleanliness.
3. Run error-suppressed scalar `git rev-parse HEAD:<literal>` for the six paths
   in the synchronized handoff, in handoff order; require these exact blobs:
   `fc91a863be99b11c44405071324e3502b959e621`,
   `0b72f1463c729a8e22337af0115c3316652c2565`,
   `5910af4e4f6754acbc5193ff021f374fe90a96f2`,
   `802ceffb1a07c3b166dc2f7f06ab38138dc37596`,
   `1bc2f9d93c59a396ddee7ed83cde1600f76b62e7`, and
   `2c23c0a59f62af0463fa54bb1c8465aa9f6bb2da`.
4. From workdir `horizon-archive-game`, with execution-tool timeout `60000ms`,
   invoke exactly one `npm run build` using the complete wrapper below.
5. Stop immediately whether the wrapper returns or throws and return the
   captured result directly to a fresh Mission Captain. Run no post-build
   command and perform no repository write.

No other pre-build or post-build command is authorized. Do not run `git
status`, `git diff --check`, any filename-capable command, listing, discovery,
search, glob, protected-path probe, untracked-path check, content parse,
summary, verifier, cleanup, or synchronization command outside the exact
scalar/quiet proof groups.

The build is the first and only product command. Do not rerun any VR-22 test or
validator. Do not run fixture, PBA/media/offline/dependency/source-map/product-
drift/performance, preview, served request, port/PID, containment, root,
browser, E2E, diagnostic, live-review, or cleanup work.

## Exact one-build wrapper

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
  [regex]::Escape('217 modules transformed.')
)
$completionProof = [regex]::Matches(
  $plainBuildText,
  '(?m)^[^\r\n]*\bbuilt in[ \t]+\d+(?:\.\d+)?(?:ms|s)[ \t]*$'
)
if ($moduleProof.Count -ne 1 -or $completionProof.Count -ne 1) {
  throw 'production build output proof unavailable'
}
```

## Return, scope, and preserved classifications

On exact native exit `0`, one literal normalized module substring, and one
anchored normalized Vite completion line, return **`PRODUCTION BUILD
EXECUTION-CONTROL PASS / STOP / RETURN TO FRESH MISSION`**. On any failure,
return **`HOLD / PRODUCTION BUILD EXECUTION-CONTROL FAILURE / NO RERUN / RETURN
TO FRESH MISSION`**. Both branches stop without any post-build command or
write.

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
  COMBAT ATTEMPT`**; and
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-25
  MISSION`**.

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

Mission Captain signs **`FIRST RUN SHELL READY / ONE CORRECTED PRODUCTION BUILD
PROOF ONLY / FRSH-003-v1-VR-27`**.

Exact next owner is a **fresh Combat Engineer**. Execute only the three exact
quiet/scalar proof groups and one corrected wrapper invocation, then stop and
return the captured result to a fresh Mission Captain.

The dedicated Mission commit and final synchronization proof are reported
from Git after commit because this artifact cannot contain the hash that first
contains itself.
