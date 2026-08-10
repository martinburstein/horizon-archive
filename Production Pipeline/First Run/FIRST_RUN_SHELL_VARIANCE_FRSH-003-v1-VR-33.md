# First Run Shell Variance Reissue - Atomic Synchronization Localization Only

Variance ID: `FRSH-003-v1-VR-33`

Disposition: **`FIRST RUN SHELL READY / SYNCHRONIZATION LOCALIZATION ONLY /
FRSH-003-v1-VR-33`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Immediate return / predecessor authority: Combat VR-32 synchronization-
localization execution-control failure / `FRSH-003-v1-VR-32`

Mission source inspected and synchronized:
`caae8eb918ecbc6c82d43bcaac6d656fc326f4e7`

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

The VR-32 Combat return established `headEqOrigin=true` and then returned
`trackedQuietExit=null`. The tracked quiet native command and the read of
`$LASTEXITCODE` occurred in separate execution-tool calls. Native process
state does not cross that shell boundary, so the later null is not evidence of
the quiet command's exit. It neither proves tracked drift nor proves tracked
cleanliness.

The VR-32 sequence therefore stopped at its first non-exact scalar. No cached
quiet result or frozen-blob result is accepted from that attempt. The result
is **`HOLD / SYNCHRONIZATION LOCALIZATION EXECUTION-CONTROL FAILURE / NO
RERUN`**. It does not establish product, test, package, manifest, control, or
candidate drift and does not issue `PRODUCTION FUNCTIONAL`.

Mission authorizes one fresh Combat pass limited to the same synchronization
localization, now with an atomic capture rule: every native command runs in
its own execution-tool call, and its value and native exit are captured and
emitted from that same call. A native command may not be invoked in one shell
and interpreted in another.

Mission performed no fixture, PBA, build, test, validator, preview, served
identity, port/PID, containment, root, browser, E2E, diagnostic, live-summary
verification, cleanup, live review, product, media, protected-state,
user-state, reveal, or maturity action.

## Inherited immutable checkpoint

VR-22 focused `68/68`, related `74/74`, cold full `972/972`, and validators
`40/40` remain accepted without rerun. VR-30 production build
`moduleCount=1 builtSubstringCount=1 nativeExit=0`, recorded in `8.8s`, remains
accepted without rerun. The six expected frozen blobs remain exactly:

```text
frrcBlob=fc91a863be99b11c44405071324e3502b959e621
e2eBlob=0b72f1463c729a8e22337af0115c3316652c2565
staticTestBlob=5910af4e4f6754acbc5193ff021f374fe90a96f2
appBlob=802ceffb1a07c3b166dc2f7f06ab38138dc37596
drownedArchiveBlob=1bc2f9d93c59a396ddee7ed83cde1600f76b62e7
packageBlob=2c23c0a59f62af0463fa54bb1c8465aa9f6bb2da
```

The literal blob operands remain the exact six mappings frozen by VR-30.
These checks localize identity only. They neither reopen nor replace the
accepted checkpoint and may not broaden package/dependency, product-source,
test/control, offline, repository, path, or filename claims.

## Atomic one-command / one-call rule

Each numbered native command below must be the sole native command in its
execution-tool call. The surrounding PowerShell in that same call must:

1. capture and suppress the native command's complete standard output and
   diagnostics;
2. read `$LASTEXITCODE` immediately after that native invocation;
3. validate the captured scalar without invoking another native command; and
4. emit only the exact named scalar line required for that step.

For each revision resolution, a successful value is exactly one lowercase
40-hex line and native exit `0`. Otherwise its value is emitted as `null`, its
match is `false`, and its exit is the captured integer or `null`. No captured
stream, diagnostic, command, literal operand, pathname, or filename may be
emitted.

For the tracked quiet check, the same-call structure is exactly equivalent to:

```powershell
git diff --quiet *> $null
$e = $LASTEXITCODE
$exitScalar = if ($null -eq $e) { 'null' } else { [string]$e }
Write-Output ('trackedQuietExit={0}' -f $exitScalar)
```

For the index quiet check, use the same structure with the single native
command `git diff --cached --quiet` and emit only `indexQuietExit=<integer|null>`.
The command and its `$LASTEXITCODE` read may not cross tool calls.

For every scalar `git rev-parse` call, capture the resolved hash and native
exit in that same call. Validate against the exact expected value in this
authority and emit only that step's named fields. Do not run a later command
to recover, re-read, or infer an earlier native exit.

## Exact fresh Combat authority

Fresh Combat may perform only this ordered sequence:

1. In one execution-tool call, invoke only scalar revision resolution for
   `HEAD`, capture hash and exit in that call, and emit only
   `headMatch=<true|false> head=<40-lowercase-hex|null> headExit=<integer|null>`.
   Exact pass is `true`, source `caae8eb918ecbc6c82d43bcaac6d656fc326f4e7`,
   and exit `0`. Otherwise stop.
2. In a new execution-tool call, invoke only scalar revision resolution for
   `origin/main`, capture hash and exit in that call, and emit only
   `originMainMatch=<true|false> originMain=<40-lowercase-hex|null>
   originMainExit=<integer|null>`. Exact pass is `true`, the same source, and
   exit `0`. Otherwise stop. Passing steps 1 and 2 jointly prove
   `HEAD == origin/main`.
3. In a new execution-tool call, invoke only the tracked-worktree quiet
   command, capture `$LASTEXITCODE` in that same call, and emit only
   `trackedQuietExit=<integer|null>`. Require `0`; otherwise stop.
4. In a new execution-tool call, invoke only the index quiet command, capture
   `$LASTEXITCODE` in that same call, and emit only
   `indexQuietExit=<integer|null>`. Require `0`; otherwise stop.
5. In six new execution-tool calls, in the exact order below, invoke only one
   literal path-qualified blob resolution per call. Capture its hash and
   native exit in that same call and emit only its one exact named line:

```text
frrcBlobMatch=<true|false> frrcBlob=<40-lowercase-hex|null> frrcBlobExit=<integer|null>
e2eBlobMatch=<true|false> e2eBlob=<40-lowercase-hex|null> e2eBlobExit=<integer|null>
staticTestBlobMatch=<true|false> staticTestBlob=<40-lowercase-hex|null> staticTestBlobExit=<integer|null>
appBlobMatch=<true|false> appBlob=<40-lowercase-hex|null> appBlobExit=<integer|null>
drownedArchiveBlobMatch=<true|false> drownedArchiveBlob=<40-lowercase-hex|null> drownedArchiveBlobExit=<integer|null>
packageBlobMatch=<true|false> packageBlob=<40-lowercase-hex|null> packageBlobExit=<integer|null>
```

Each `blobMatch` must be `true`, each hash must equal its expected frozen value,
and each exit must be `0`. Stop at the first non-exact line. The complete exact
passing return schema is:

```text
headMatch=true head=caae8eb918ecbc6c82d43bcaac6d656fc326f4e7 headExit=0
originMainMatch=true originMain=caae8eb918ecbc6c82d43bcaac6d656fc326f4e7 originMainExit=0
trackedQuietExit=0
indexQuietExit=0
frrcBlobMatch=true frrcBlob=fc91a863be99b11c44405071324e3502b959e621 frrcBlobExit=0
e2eBlobMatch=true e2eBlob=0b72f1463c729a8e22337af0115c3316652c2565 e2eBlobExit=0
staticTestBlobMatch=true staticTestBlob=5910af4e4f6754acbc5193ff021f374fe90a96f2 staticTestBlobExit=0
appBlobMatch=true appBlob=802ceffb1a07c3b166dc2f7f06ab38138dc37596 appBlobExit=0
drownedArchiveBlobMatch=true drownedArchiveBlob=1bc2f9d93c59a396ddee7ed83cde1600f76b62e7 drownedArchiveBlobExit=0
packageBlobMatch=true packageBlob=2c23c0a59f62af0463fa54bb1c8465aa9f6bb2da packageBlobExit=0
```

Do not inspect or claim untracked cleanliness. No pre-check, between-command,
or post-check command is authorized. Do not run status, diff-check, listing,
discovery, search, glob, broad scan, protected-path probe, untracked-path
check, content parse, summary, verifier, cleanup, or any filename-capable
output command.

Stop immediately after the sixth exact blob line. Run no fixture, PBA, build,
test, validator, preview, served identity, port/PID, containment, root,
browser, E2E, diagnostic, live-summary verification, cleanup, or live review.
Perform no repository write. Return to a fresh Mission Captain.

## Return, scope, and preserved classifications

On the complete exact schema, return **`SYNCHRONIZATION LOCALIZATION PASS /
STOP / RETURN TO FRESH MISSION`**.

On any missing, null, extra, reordered, duplicate, mismatched, nonzero,
cross-call capture, timeout, wrapper, or native-command failure, return
**`HOLD / SYNCHRONIZATION LOCALIZATION OR IDENTITY FAILURE / NO RERUN /
RETURN TO FRESH MISSION`**. Stop at the first failure. Do not repair, rerun,
diagnose, enumerate, clean, or write.

This authority has no player-visible delta. Exact first-run address remains
`FR-03 / Host 05 / Sixfold Weir`; stage and release remain HOLD; no release-map
or scoreboard cell advances. The fixture and scalar PBA remain pending and
may be reauthorized only by a fresh Mission Captain after this return.

All OPEN divergences remain separate and OPEN:

- **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN / VR-17`**;
- **`UNAUTHORIZED DIVERGENCE / BROAD REPOSITORY FILENAME ENUMERATION / OPEN /
  VR-23`**;
- **`UNAUTHORIZED DIVERGENCE / UNTRACKED PATHNAME ENUMERATION / OPEN / VR-24
  COMBAT ATTEMPT`**;
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-25
  MISSION`**; and
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-28
  MISSION STAGING`**.

None is waived, merged, closed, cured, or used as candidate evidence.

All frozen candidate, threshold, player, learning, copy/owner, `L02-02`,
strict `24/24`, evaluator, remediation, evidence/privacy,
save/reload/return, accessibility, focus, responsive, forced-color,
reduced-motion, offline, request, dependency, source-map, PBA, performance,
route, world, equal MH-40, null-delta, `successor=null`, ending,
immutable-media `17 / 37,410,731`, diagnostic non-evidence/non-verifier, and
one-E2E meanings remain exact.

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

Mission Captain signs **`FIRST RUN SHELL READY / SYNCHRONIZATION LOCALIZATION
ONLY / FRSH-003-v1-VR-33`**.

Exact next owner is a **fresh Combat Engineer**. Execute only the ten atomic,
one-native-command / one-execution-tool-call synchronization and frozen-blob
checks above. Capture each scalar and native exit in the same call as its
native command, then stop and return to a fresh Mission Captain.

The dedicated Mission commit and final synchronization proof are reported
from Git after commit because this artifact cannot contain the hash that first
contains itself.
