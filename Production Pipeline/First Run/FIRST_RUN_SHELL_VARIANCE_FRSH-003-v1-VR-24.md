# First Run Shell Variance Reissue - Corrected Production Build Only

Variance ID: `FRSH-003-v1-VR-24`

Disposition: **`FIRST RUN SHELL READY / ONE CORRECTED PRODUCTION BUILD ONLY /
FRSH-003-v1-VR-24`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Immediate return / authority: `FRSH-003-v1-VR-23` /
`FRCE-003-v1-VR-22` / `FRSH-003-v1-VR-22`

Mission source inspected:
`e584c8021105a9c571db91756f90aea99952392b`

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

Mission independently accepts the narrow VR-22 and VR-23 adjudication and
issues **READY for one corrected production-build-only invocation** from a
newly synchronized fresh Combat source.

VR-22 established that the integrity/static preflight, focused `68/68`,
related `74/74`, cold full `972/972`, and all forty validators passed once.
It then stopped because PowerShell promoted Vite's colored native stderr to a
terminating `NativeCommandError` before native exit and the required module
proof were captured. That is an execution-control failure only. It does not
establish a candidate, product, package, manifest, Vite, build, module-count,
or output defect.

Mission accepts the corrected wrapper pattern recorded by VR-23. It
temporarily uses nonterminating native-stream handling, disables
`PSNativeCommandUseErrorActionPreference` when that preference exists,
captures combined output, captures and evaluates `$LASTEXITCODE` immediately
after the sole native invocation, restores every changed preference in
`finally`, normalizes ANSI control sequences, and requires exactly one Vite
`217 modules transformed` line and exactly one Vite `built in` line.

VR-23 itself remained HOLD because its orientation performed forbidden broad
repository filename discovery. This clean Mission pass performed no broad
listing, repository-wide discovery, glob expansion, protected-path
enumeration, build, test, validator, preview, browser, E2E, diagnostic,
product, or media command.

The prior **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN /
VR-17`** and the later **`UNAUTHORIZED DIVERGENCE / BROAD REPOSITORY FILENAME
ENUMERATION / OPEN / VR-23`** remain two separate OPEN classifications. They
are not waived, merged, closed, or used as candidate evidence.

This reissue does not promote the partial VR-22 ladder to `PRODUCTION
FUNCTIONAL`, authorize a fixture or live gate, accept a release, advance
maturity, or repair any product/control surface.

## Independent Mission corroboration and authorized disk identity

Mission performed bounded static corroboration only:

- pre-edit `HEAD == origin/main ==
  e584c8021105a9c571db91756f90aea99952392b`;
- tracked worktree and index were clean without filename enumeration;
- exact disk `horizon-archive-game/package.json` blob was
  `2c23c0a59f62af0463fa54bb1c8465aa9f6bb2da`;
- exact disk `Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json`
  blob was `fc91a863be99b11c44405071324e3502b959e621`;
- `package.json` maps `npm run build` to exact `vite build` and retains Vite
  `6.4.2`; and
- manifest entry `production-build` is exact: workdir
  `horizon-archive-game`, command `npm run build`, timeout `60000`, expected
  native exit `0`, owner `combat_engineer`, and output ownership
  `horizon-archive-game/dist`.

Those two exact disk blobs and that parsed manifest entry are the authorized
build identity. Fresh Combat must prove them unchanged before invoking the
build. A mismatch is immediate `HOLD / NO BUILD / NO RERUN`.

Mission did not execute `node --check`, focused, related, full, validator,
build, fixture, PBA, media, offline, dependency, source-map, product-drift,
performance, preview, served request, containment, browser, E2E, diagnostic,
summary, verifier, cleanup, product, or media work.

## Exact Combat authority

Fresh Combat must begin from the synchronized commit containing this reissue
and its handoff. It may perform only the following bounded sequence:

1. Prove `HEAD == origin/main` without broad discovery or filename output.
2. Prove the tracked worktree and index are clean without enumerating names.
3. Hash only the two literal authorized disk-identity paths above and require
   their exact blobs.
4. Parse only the exact manifest and require the exact `production-build`
   entry above.
5. From workdir `horizon-archive-game`, invoke exactly one native
   `npm run build` with execution-tool timeout `60000ms` under the exact
   wrapper below.
6. Stop immediately after the wrapper returns or throws. Do not run any later
   command except bounded Git/report/handoff synchronization required to
   return the result.

The build must be the first and only product command. No VR-22 test or
validator gate may be rerun. No fixture build, PBA/media/offline/dependency/
source-map/product-drift/performance gate, preview, served request, port/PID,
containment, root, browser, E2E, diagnostic, summary, verifier, cleanup, or
live action is authorized.

## Exact corrected wrapper

The execution tool must use workdir `horizon-archive-game`, timeout `60000ms`,
and this exact PowerShell syntax:

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
missing native exit, missing or duplicate module marker, or missing or
duplicate completion marker is fail-closed evidence.

## Return branches and no-change boundary

On exact native exit `0` with exactly one normalized module marker and exactly
one normalized completion marker, Combat issues one versioned **`PRODUCTION
BUILD EXECUTION-CONTROL PASS / STOP / RETURN TO FRESH MISSION`** report.

On any synchronization, clean-state, disk-identity, manifest-entry, native
exit, output-capture, ANSI-normalization, marker-count, timeout, or wrapper
failure, Combat issues one versioned **`HOLD / PRODUCTION BUILD
EXECUTION-CONTROL FAILURE / NO RERUN / RETURN TO FRESH MISSION`** report.

Both branches stop after this one build boundary. Neither branch may continue
the VR-22 ladder. Another fresh Mission Captain must adjudicate the exact
return before any new authority exists.

No implementation, product, test, manifest, E2E, content, CSS, module,
fixture, dependency, package, lockfile, curriculum, evaluator, save, story,
route, map, scoreboard, maturity, media, or other control change is permitted.
The production build may replace only its manifest-owned
`horizon-archive-game/dist` output. After the attempt Combat may write only
one new versioned functional return and `NEXT_INSTANCE_HANDOFF.md`.

No product or save rollback exists. Administrative rollback may only normally
revert this Mission variance/handoff commit; it may not reset history, alter a
frozen identity, touch protected/untracked/user state, or migrate a save.

## Preserved player, learning, accessibility, media, and ending boundaries

This authority has no player-visible delta. Exact first-run address remains
`FR-03 / Host 05 / Sixfold Weir`; stage and release remain HOLD; no release-map
or scoreboard cell advances.

All five frozen identities, all VR-22 passing thresholds, all player, seven
final copy/owner, `L02-02`, strict `24/24`, evaluator, remediation, evidence/
privacy, save/reload/return, accessibility, focus, responsive, forced-color,
reduced-motion, offline, request, dependency, source-map, PBA, performance,
route, world, equal MH-40, null-delta, `successor=null`, diagnostic
non-evidence/non-verifier, and one-E2E meanings remain exact.

Immutable media remains exact `17 / 37,410,731`. No media generation, edit,
replacement, variation, import, movement, or reveal is authorized. No branch,
packet, lesson, hidden-lore answer, reward, access, identity, authority, world
response, successor, RP-013, or post-ending content may be added or changed.

Protected repository QA, PDF, training, browser/profile/save, hidden lore,
media, user state, every predecessor root, and unrelated external roots remain
forbidden to inspect, enumerate, reuse, modify, move, or delete. No broad
discovery is permitted.

No Quartermaster, Image Specialist, Intelligence, reveal, maturity advance,
release, schedule, automation, or `FIRST RUN COMPLETE` action is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / ONE CORRECTED PRODUCTION BUILD
ONLY / FRSH-003-v1-VR-24`**.

Exact next owner is a **fresh Combat Engineer**. Execute only the bounded disk-
identity preflight and the exact one-build wrapper above, stop, commit the one
return plus synchronized handoff, push, prove `HEAD == origin/main`, and return
to another fresh Mission Captain.

The dedicated Mission commit and final synchronization proof are reported
from Git after commit because this artifact cannot contain the hash that first
contains itself.
