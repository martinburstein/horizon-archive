# First Run Shell Variance Reissue - Scalar Build and Blob Proof Only

Variance ID: `FRSH-003-v1-VR-30`

Disposition: **`FIRST RUN SHELL READY / ONE SCALAR PRODUCTION BUILD PROOF
ONLY / FRSH-003-v1-VR-30`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Immediate return / predecessor authority: Combat VR-29 proof return /
`FRSH-003-v1-VR-29`

Mission source inspected:
`fcca45fb3a15bf83d4d7328bb8b5a7ed4d16dc88`

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

Mission independently adjudicates the exact VR-29 Combat return. The sole
native production build exited `0`; the ANSI-normalized capture contained
exactly one literal `217 modules transformed.` substring; the completion
duration/line expression returned count `0`; and the wrapper exited `1`.
The returned facts are consistent with unstable duration/stream capture at
the completion-regex boundary. They do not establish a product, package,
manifest, Vite, module-count, native-build, or visible-output defect and do
not issue `PRODUCTION FUNCTIONAL`.

The six-object hash transport was also malformed: indexed values were emitted
as `HEAD[1..6]` forms rather than six distinct blob scalars. Those forms are
not accepted as blob evidence. This is a proof-transport defect, not evidence
of candidate drift.

Combat performed no rerun, no post-build command, and no repository write.
The consumed authority is **`HOLD / PRODUCTION BUILD EXECUTION-CONTROL
FAILURE / NO RERUN`**. Exact raw build output is not durably available as a
trusted artifact, so output-only reparse is not authorized.

One corrected proof-only build is proportionate. It is the only product
command authorized below. The completion proof removes duration and line
shape entirely and counts the ANSI-stripped literal substring `built in`.
The six frozen blobs are transported through six independent scalar
resolutions and six separately named outputs; no array or indexed string
interpolation is permitted.

At Mission start, scalar synchronization proved `HEAD == origin/main ==
fcca45fb3a15bf83d4d7328bb8b5a7ed4d16dc88`; fully suppressed tracked and
index quiet checks each returned exit `0`. Those checks did not inspect or
prove untracked absence. Mission makes no untracked-cleanliness claim.

Mission ran no build, test, validator, fixture, PBA/media/offline/dependency/
source-map/product-drift/performance, preview, served request, port/PID,
containment, root, browser, E2E, diagnostic, summary, verifier, cleanup,
live-review, product, media, protected-state, user-state, reveal, or maturity
action.

## Frozen six-blob scalar transport

Fresh Combat must resolve each literal `HEAD:<path>` expression through its
own `git rev-parse` invocation, capture and suppress the native output, require
one scalar and exit `0`, and emit only the separately named scalar shown here:

```text
frrcBlob=fc91a863be99b11c44405071324e3502b959e621
e2eBlob=0b72f1463c729a8e22337af0115c3316652c2565
staticTestBlob=5910af4e4f6754acbc5193ff021f374fe90a96f2
appBlob=802ceffb1a07c3b166dc2f7f06ab38138dc37596
drownedArchiveBlob=1bc2f9d93c59a396ddee7ed83cde1600f76b62e7
packageBlob=2c23c0a59f62af0463fa54bb1c8465aa9f6bb2da
```

The exact literal path mapping is frozen:

```text
frrcBlob=Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json
e2eBlob=playtest/e2e-playthrough.mjs
staticTestBlob=horizon-archive-game/test/sixfoldWeir.test.js
appBlob=horizon-archive-game/src/App.jsx
drownedArchiveBlob=horizon-archive-game/src/drownedArchive.js
packageBlob=horizon-archive-game/package.json
```

Do not combine the six revisions into one invocation or one array. Do not emit
the literal path expressions, filenames, labels other than the six scalar
names, Git diagnostics, or any other text. Missing, extra, reordered,
duplicate, non-scalar, native-failure, or hash-mismatch output is fail-closed
before the build and returns **`HOLD / BLOB PROOF EXECUTION-CONTROL FAILURE /
NO BUILD / RETURN TO FRESH MISSION`**.

## Exact fresh Combat authority

Fresh Combat may perform only this sequence:

1. Run scalar `git rev-parse HEAD` and `git rev-parse origin/main`; emit only
   the two hashes and require exact equality.
2. Run fully suppressed `git diff --quiet` and `git diff --cached --quiet`;
   require exit `0` from each and emit nothing. Do not inspect or claim
   untracked cleanliness.
3. Resolve and validate the six frozen literal blob expressions one at a time.
   Emit the six separately named scalar lines in the exact order above.
4. From workdir `horizon-archive-game`, with execution-tool timeout `60000ms`,
   invoke exactly one `npm run build` using the complete wrapper below.
5. Stop immediately whether the wrapper returns or fails. Return only the
   scalar outputs and disposition to a fresh Mission Captain. Run no
   post-build command and perform no repository write.

No other pre-build or post-build command is authorized. Do not run `git
status`, `git diff --check`, any multi-path or array-form rev-parse, any
filename-capable output command, listing, discovery, search, glob, protected-
path probe, untracked-path check, content parse, summary, verifier, cleanup,
or synchronization command outside the exact scalar/quiet proof groups.

The build is the first and only product command. Do not rerun any VR-22 test or
validator. Do not run fixture, PBA/media/offline/dependency/source-map/product-
drift/performance, preview, served request, port/PID, containment, root,
browser, E2E, diagnostic, live-review, or cleanup work.

## Exact one-build scalar wrapper

The wrapper captures and suppresses the build stream. After ANSI stripping it
counts the literal module substring and the literal substring `built in`.
It uses no duration parser, numeric duration capture, unit parser, line anchor,
or line-shape completion expression. It emits only one scalar line before the
assertion and requires exact `1 / 1 / 0`.

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
$builtSubstringCount = [regex]::Matches(
  $plainBuildText,
  [regex]::Escape('built in')
).Count
$nativeExitScalar = if ($null -eq $nativeExit) { 'null' } else { [string]$nativeExit }
Write-Output (
  'moduleCount={0} builtSubstringCount={1} nativeExit={2}' -f
    $moduleCount, $builtSubstringCount, $nativeExitScalar
)
if ($moduleCount -ne 1 -or $builtSubstringCount -ne 1 -or $nativeExit -ne 0) {
  exit 1
}
exit 0
```

Missing or duplicate literal module substring, missing or duplicate literal
`built in` substring, native exit other than exact `0`, missing native exit,
capture failure, timeout, or wrapper failure remains fail-closed. No captured
build stream, duration, path, or filename may be emitted.

## Return, scope, and preserved classifications

On exact six-blob equality plus `moduleCount=1 builtSubstringCount=1
nativeExit=0`, return **`PRODUCTION BUILD EXECUTION-CONTROL PASS / STOP /
RETURN TO FRESH MISSION`**. On any other build scalar or wrapper result,
return **`HOLD / PRODUCTION BUILD EXECUTION-CONTROL FAILURE / NO RERUN /
RETURN TO FRESH MISSION`**. Both branches stop without any post-build command
or write.

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

No media generation, edit, replacement, variation, import, movement, or
reveal is authorized. No branch, packet, lesson, hidden-lore answer, reward,
access, identity, authority, world response, successor, RP-013, or post-ending
content may be added or changed. Protected repository QA, PDF, training,
browser/profile/save, hidden lore, media, user state, predecessor roots, and
unrelated external roots remain forbidden to inspect, enumerate, reuse,
modify, move, or delete.

No Quartermaster, Image Specialist, Intelligence, reveal, maturity advance,
release, schedule, automation, or `FIRST RUN COMPLETE` action is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / ONE SCALAR PRODUCTION BUILD
PROOF ONLY / FRSH-003-v1-VR-30`**.

Exact next owner is a **fresh Combat Engineer**. Execute only the exact
scalar/quiet synchronization checks, six independent blob resolutions, and
one scalar wrapper invocation, then stop and return the scalar result to a
fresh Mission Captain.

The dedicated Mission commit and final synchronization proof are reported
from Git after commit because this artifact cannot contain the hash that first
contains itself.
