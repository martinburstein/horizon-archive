# First Run Shell Variance Hold - Production-Build Execution Control

Variance ID: `FRSH-003-v1-VR-23`

Disposition: **`HOLD / MISSION PROCESS-BOUNDARY FAILURE / NO BUILD / RETURN TO
FRESH MISSION / FRSH-003-v1-VR-23`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Immediate return / authority: `FRCE-003-v1-VR-22` /
`FRSH-003-v1-VR-22`

Mission source inspected:
`cea511905feb66e322dcfccdd4319c397c3a7a7f`

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

Mission independently accepts the narrow VR-22 adjudication: the exact
manifest production-build command was invoked once, but PowerShell promoted a
colored native stderr record to terminating `NativeCommandError` before the
wrapper captured `$LASTEXITCODE` or proved the required `217 modules
transformed` result. The returned tool exit `1` therefore establishes an
execution-control failure only. It does not establish a candidate, product,
Vite, manifest, test, build, module-count, or output defect.

The VR-22 focused `68/68`, related `74/74`, cold full `972/972`, and forty
validator passes remain truthful partial evidence. They are not rerun,
promoted to `PRODUCTION FUNCTIONAL`, or treated as authority for a later gate.
The fixture build, PBA/media/offline/dependency/source-map/product-drift/
performance gates, previews, containment, E2E, diagnostic, summary, and
verifier remain not run from VR-22.

Mission nevertheless issues **HOLD** because this Mission adjudication itself
used repository-wide `rg --files` discovery with filename globs during initial
orientation. That command returned tracked filenames beyond the six exact
literal frozen paths. No protected file content was opened by that command and
no product, control, media, user, predecessor-root, browser, save, or external
state was mutated, but the operation repeated the expressly forbidden broad
filename-discovery pattern.

This pass therefore records a new, separate **`UNAUTHORIZED DIVERGENCE /
BROAD REPOSITORY FILENAME ENUMERATION / OPEN / VR-23`**. It does not merge
with, waive, close, or reuse the earlier **`UNAUTHORIZED DIVERGENCE /
PROTECTED PATH ENUMERATION / OPEN / VR-17`**. Because Mission cannot sign a
production authority after violating the active no-enumeration boundary,
VR-23 authorizes no build or downstream command.

## Static Mission evidence and honest unavailable evidence

Before the violation was adjudicated, Mission established only that:

- pre-edit `HEAD == origin/main ==
  cea511905feb66e322dcfccdd4319c397c3a7a7f`;
- current `FRAB-003-v1` remains `HOLD / RELEASE GATE FAILURE`;
- the committed FRRC entry remains exact production command
  `npm run build`, workdir `horizon-archive-game`, timeout `60000`, expected
  native exit `0`, and expected production output ownership
  `horizon-archive-game/dist`; and
- the VR-22 return and VR-22 shell preserve the five frozen identities, the
  six literal tracked paths, exact one-E2E policy, and no-change boundaries.

Mission ran no `node --check`, focused, related, full, validator, build,
fixture, PBA, media, offline, dependency, source-map, product-drift,
performance, preview, served request, port/PID, external-root, browser, E2E,
diagnostic, summary, verifier, or cleanup command. Mission inspected no media
bytes, predecessor root, browser profile, campaign save, or user state.

## Corrected production-build wrapper candidate - not authorized by VR-23

The following is the exact candidate wrapper a future fresh Mission may
independently adjudicate. It is recorded to make the known correction precise;
**VR-23 does not authorize its execution**.

The execution tool would use workdir `horizon-archive-game`, timeout `60000ms`,
and exactly one native invocation of `npm run build`:

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
$buildText | Write-Output
if ($null -eq $nativeExit -or $nativeExit -ne 0) {
  throw "production build native exit: $nativeExit"
}

$plainBuildText = [regex]::Replace(
  $buildText,
  "`e\[[0-?]*[ -/]*[@-~]",
  ''
)
$moduleProof = [regex]::Matches(
  $plainBuildText,
  '(?m)^\s*(?:✓|√)\s*217 modules transformed\.\s*$'
)
$completionProof = [regex]::Matches(
  $plainBuildText,
  '(?m)^\s*(?:✓|√)\s*built in .+\s*$'
)
if ($moduleProof.Count -ne 1 -or $completionProof.Count -ne 1) {
  throw 'production build output proof unavailable'
}
```

The correction deliberately disables native-error promotion when that
PowerShell preference exists and temporarily captures combined stdout/stderr
under nonterminating native-stream handling. It then restores both preferences,
prints the complete captured output, inspects `$LASTEXITCODE` explicitly, and
requires exactly one ANSI-normalized `217 modules transformed` marker plus
exactly one successful Vite `built in` marker. A native exit other than `0`, a
missing native exit, an absent/duplicate module marker, or an absent/duplicate
completion marker would be immediate fail-closed evidence.

## Scope a future fresh Mission may adjudicate

A lawful successor may choose one of two dispositions only:

1. `HOLD`; or
2. a new versioned authority for one corrected **production-build-only**
   invocation from a newly synchronized Combat source.

If authorized later, that invocation must preserve all prior VR-22 passes as
truthful but incomplete evidence and must not rerun the integrity/static,
focused, related, full, or validator gates. It must run no fixture build,
PBA/media/offline/dependency/source-map/product-drift/performance gate,
preview, served request, containment, root, browser, E2E, diagnostic, summary,
verifier, cleanup, or live action. After exact native exit `0` and exact
`217`/successful-output proof, or after any failure, Combat must stop and
return a new versioned report to another fresh Mission. No staged continuation
beyond that one production build is implied here.

No product, implementation, test, manifest, E2E, content, CSS, module,
fixture, dependency, package, lockfile, curriculum, evaluator, save, story,
route, map, scoreboard, maturity, media, or other control change is permitted.
The exact six literal tracked-path allowlist remains the maximum permitted
identity/diff boundary; no repository-wide discovery or enumeration is
permitted.

## Preserved player, learning, accessibility, media, and ending boundaries

This Mission return has no player-visible delta. Exact first-run address
remains `FR-03 / Host 05 / Sixfold Weir`; stage and release remain HOLD; no
release-map or scoreboard cell advances.

All frozen player, seven final copy/owner, `L02-02`, strict `24/24`, evaluator,
remediation, evidence/privacy, save/reload/return, accessibility, focus,
responsive, forced-color, reduced-motion, offline, request, dependency,
source-map, PBA, performance, route, world, equal MH-40, null-delta,
`successor=null`, diagnostic non-evidence/non-verifier, and one-E2E meanings
remain exact.

Immutable media remains exact `17 / 37,410,731`. No media generation, edit,
replacement, variation, import, movement, or reveal is authorized. No branch,
packet, lesson, hidden-lore answer, reward, access, identity, authority, world
response, successor, RP-013, or post-ending content may be added or changed.

No Quartermaster, Image Specialist, Intelligence, reveal, maturity advance,
release, schedule, automation, or `FIRST RUN COMPLETE` action is authorized.

## Files, rollback, and exact handoff

This Mission stage changes only this versioned variance and
`NEXT_INSTANCE_HANDOFF.md`. There is no product, build-output, save, media, or
runtime rollback. Administrative rollback may only normally revert this
Mission variance/handoff commit; it may not reset history, alter a frozen
identity, touch protected/untracked/user state, or migrate a save.

Mission Captain signs **`HOLD / MISSION PROCESS-BOUNDARY FAILURE / NO BUILD /
RETURN TO FRESH MISSION / FRSH-003-v1-VR-23`**.

Exact next owner is a **fresh Mission Captain**. Read the full Mission profile,
this VR-23 HOLD, VR-22 shell and Combat return, current `FRAB-003-v1`, current
handoff, and only the exact allowlisted frozen FRRC/E2E/static controls.
Independently adjudicate the production-build wrapper correction and issue one
new versioned `HOLD` or bounded production-build-only authority. Do not repeat
broad discovery, execute a build or prior/later gate, inspect protected/media/
predecessor/user state, begin a downstream role, advance maturity, create a
reveal or schedule, or call `FIRST RUN COMPLETE`.

The dedicated Mission commit and final synchronization proof are reported
from Git after commit because this artifact cannot contain the hash that first
contains itself.
