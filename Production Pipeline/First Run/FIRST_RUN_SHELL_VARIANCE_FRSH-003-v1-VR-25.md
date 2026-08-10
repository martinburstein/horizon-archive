# First Run Shell Variance Hold - Production-Build Process Boundary

Variance ID: `FRSH-003-v1-VR-25`

Disposition: **`HOLD / MISSION PROCESS-BOUNDARY FAILURE / NO BUILD / RETURN TO
FRESH MISSION / FRSH-003-v1-VR-25`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Immediate authority / attempted return: `FRSH-003-v1-VR-24` / fresh Combat
VR-24 pre-build attempt

Mission source inspected:
`644cebc04c4711694a3d67350403010b544d0c69`

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

Mission independently adjudicates the fresh Combat VR-24 pre-build attempt.
Its initial `git status --short` emitted untracked pathnames before the exact
authorized synchronization, quiet-clean, six-path identity, or manifest
checks. Combat invoked the production build zero times, performed no package
or FRRC proof, changed no file, wrote no report or handoff, made no commit, and
pushed nothing.

That attempt is **`UNAUTHORIZED DIVERGENCE / UNTRACKED PATHNAME ENUMERATION /
OPEN / VR-24 COMBAT ATTEMPT`**. It remains distinct from and does not merge
with, waive, close, or reuse either **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH
ENUMERATION / OPEN / VR-17`** or **`UNAUTHORIZED DIVERGENCE / BROAD REPOSITORY
FILENAME ENUMERATION / OPEN / VR-23`**. All three enumeration divergences
remain separately OPEN and none is candidate evidence.

Mission then independently established synchronized tracked state and the six
exact literal blobs. During a later document-integrity check, however, Mission
ran a path-scoped `git diff --check` instead of limiting Git proof to the two
authorized quiet exit-code checks. Although output redirection was requested,
PowerShell native stderr promotion surfaced Git's LF-to-CRLF warning containing
the already authorized literal `NEXT_INSTANCE_HANDOFF.md` pathname and
terminated the command.

That event performed no discovery, listing, broad enumeration, untracked
inspection, or content access, and it exposed no unknown pathname. It is still
a direct breach of the stricter no-command-capable-of-filename-output and
quiet-check-only boundary. Mission records **`UNAUTHORIZED DIVERGENCE /
LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-25 MISSION`** separately. Mission
therefore may not sign a production authority from this pass.

Disposition is HOLD. No build invocation is authorized by VR-25. No product
command ran, no product/control file changed, no stage or maturity advanced,
and the corrected build authority remains unconsumed for a later fresh,
lawful Mission adjudication.

## Independent static evidence and disclosed limitations

Before the Mission process violation, bounded corroboration established:

- pre-edit `HEAD == origin/main ==
  644cebc04c4711694a3d67350403010b544d0c69`;
- tracked worktree and index returned exact quiet exit `0` without pathname
  output;
- exact disk manifest blob
  `fc91a863be99b11c44405071324e3502b959e621`;
- exact disk E2E-control blob
  `0b72f1463c729a8e22337af0115c3316652c2565`;
- exact disk static-control blob
  `5910af4e4f6754acbc5193ff021f374fe90a96f2`;
- exact disk `App.jsx` blob
  `802ceffb1a07c3b166dc2f7f06ab38138dc37596`;
- exact disk `drownedArchive.js` blob
  `1bc2f9d93c59a396ddee7ed83cde1600f76b62e7`;
- exact disk package blob
  `2c23c0a59f62af0463fa54bb1c8465aa9f6bb2da`;
- `package.json` maps `npm run build` to exact `vite build` and retains Vite
  `6.4.2`; and
- manifest entry `production-build` remains exact: workdir
  `horizon-archive-game`, command `npm run build`, timeout `60000`, expected
  native exit `0`, owner `combat_engineer`, and output ownership
  `horizon-archive-game/dist`.

The quiet Git checks do not inspect or prove absence of untracked paths.
Mission makes no untracked-cleanliness claim and inspected no untracked
content. The six exact literal hashes remain truthful static evidence but do
not cure the Mission process failure or authorize a build.

Mission ran no `node --check`, focused, related, full, validator, build,
fixture, PBA, media, offline, dependency, source-map, product-drift,
performance, preview, served request, port/PID, containment, root, browser,
E2E, diagnostic, summary, verifier, cleanup, product, or media work.

## Corrected wrapper candidate - unchanged and not authorized

The following is the VR-24 wrapper preserved unchanged for a future fresh
Mission to adjudicate. **VR-25 does not authorize its execution.**

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

The intended future wrapper remains build-only: nonterminating native-stream
handling, native stderr promotion disabled when supported, combined capture,
immediate `$LASTEXITCODE`, preferences restored in `finally`, ANSI
normalization, native exit `0`, exactly one `217 modules transformed` marker,
and exactly one Vite `built in` marker.

## Scope a future fresh Mission may adjudicate

A lawful successor may issue only `HOLD` or a new versioned one-corrected-
production-build-only authority. That future authority must explicitly forbid
`git status` before and after, repository listing, filename search, globbing,
protected-path probing, and untracked-path checking. Start proof may use only
`git rev-parse HEAD`, `git rev-parse origin/main`, `git diff --quiet`,
`git diff --cached --quiet`, and exact checks of the six literal paths above.

If later authorized, Combat may parse only the exact manifest, invoke the
unchanged wrapper once from workdir `horizon-archive-game` with timeout
`60000ms`, and then stop. VR-22 tests and validators must not be rerun. No
fixture build, PBA/media/offline/dependency/source-map/product-drift/
performance gate, preview, served request, port/PID, containment, root,
browser, E2E, diagnostic, summary, verifier, cleanup, or live action may run.

No product, implementation, test, manifest, E2E, content, CSS, module,
fixture, dependency, package, lockfile, curriculum, evaluator, save, story,
route, map, scoreboard, maturity, media, or other control change is permitted.

## Preserved boundaries and exact handoff

This Mission return has no player-visible delta. Exact first-run address
remains `FR-03 / Host 05 / Sixfold Weir`; stage and release remain HOLD; no
release-map or scoreboard cell advances.

All five frozen identities, all VR-22 passing thresholds, all player, seven
final copy/owner, `L02-02`, strict `24/24`, evaluator, remediation,
evidence/privacy, save/reload/return, accessibility, focus, responsive,
forced-color, reduced-motion, offline, request, dependency, source-map, PBA,
performance, route, world, equal MH-40, null-delta, `successor=null`, ending,
diagnostic non-evidence/non-verifier, and one-E2E meanings remain exact.

Immutable media remains exact `17 / 37,410,731`. No media generation, edit,
replacement, variation, import, movement, or reveal is authorized. No branch,
packet, lesson, hidden-lore answer, reward, access, identity, authority, world
response, successor, RP-013, or post-ending content may be added or changed.

Protected repository QA, PDF, training, browser/profile/save, hidden lore,
media, user state, every predecessor root, and unrelated external roots remain
forbidden to inspect, enumerate, reuse, modify, move, or delete.

No Quartermaster, Image Specialist, Intelligence, reveal, maturity advance,
release, schedule, automation, or `FIRST RUN COMPLETE` action is authorized.

Mission Captain signs **`HOLD / MISSION PROCESS-BOUNDARY FAILURE / NO BUILD /
RETURN TO FRESH MISSION / FRSH-003-v1-VR-25`**.

Exact next owner is a **fresh Mission Captain**. Read the Mission profile,
VR-24, this VR-25 HOLD, current handoff, and only the six exact literal
controls. Independently adjudicate one corrected production-build-only
authority without any command capable of filename output. Do not build, test,
inspect untracked/protected/media/user state, begin a downstream role, advance
maturity, create a reveal or schedule, or call `FIRST RUN COMPLETE`.

The dedicated Mission commit and final synchronization proof are reported
from Git after commit because this artifact cannot contain the hash that first
contains itself.
