# First Run Shell Variance Reissue - Production Launcher-Vector Localization Only

Variance ID: `FRSH-003-v1-VR-38`

Disposition: **`FIRST RUN SHELL READY / PRODUCTION LAUNCHER-VECTOR
LOCALIZATION ONLY / FRSH-003-v1-VR-38`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Command authority: `FRRC-002-v1`

Immediate return / predecessor authority: Combat VR-37 stage-1 production
launcher failure before PID / `FRSH-003-v1-VR-37`

Mission predecessor source:
`70367f5ad0cb26ed566df045b75424bdfeba0aaa`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Recorded: **2026-08-10**

## Context-reuse limitation

The fresh-child limit remains unavailable. Root expressly authorized the
already-active Mission Captain context to adjudicate this return and issue the
next bounded shell. This reuse remains a disclosed coordination limitation,
not candidate evidence, and waives no validation, independence, divergence,
or release boundary.

## VR-37 adjudication

Mission accepts the exact localized classification **stage `1`: production
launcher failure before owned PID**. The decisive scalars are production start
failure, production PID `0`, `localizedStage=1`, native exit `1`, and both
assigned ports clear. No fixture launch, root/deep identity request, asset
request, browser, or E2E ran. No owned PID existed to stop. No live surface or
product delta is established.

The return localizes the fault before readiness and before any served-identity
operation. It does not authorize a full VR-36 rerun and is not candidate
evidence. Mission preserves HOLD and narrows the next action to executable
resolution plus one production-only launch/readiness/cleanup diagnostic.

## Exact immutable manifest vector

Mission read only the scalar production-preview fields in
`FRRC-002-v1`. They are exact:

```text
workdir=horizon-archive-game
executable=node
arguments=node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4173 --strictPort
portOwnership=recorded owned PID and 127.0.0.1:4173 only
```

The manifest owns a direct Node invocation of the bundled Vite entry point. It
does not own `npm`, `npm.cmd`, `npx`, a package-script substitution, shell
chaining, or a fixture command for this checkpoint. No manifest or package
change is warranted.

The likely Windows-only control defect is executable resolution before process
creation. VR-38 corrects only the launcher transport: resolve manifest
executable name `node` with `Get-Command -Name 'node' -CommandType Application
-ErrorAction Stop`; require one selected application command, accept its name
only as literal `node` or `node.exe`, require its `.Source` to exist as a leaf,
and pass that resolved source internally as the process executable. Never emit
the resolved source or any path diagnostic.

## Exact Combat authority

Exact next owner is a **Combat Engineer**. A fresh context remains preferred;
if thread limits require reuse, disclose that reuse in the return. Run exactly
one production launcher-vector diagnostic in one fail-closed wrapper:

1. Resolve `node` exactly as above. Emit only found/name/source-exists scalars.
   On failure, skip launch/readiness and continue to the final port-clear check.
2. Verify literal working directory `horizon-archive-game` exists as a
   directory. Resolve it internally for process launch but emit only the
   Boolean existence scalar; suppress its resolved path.
3. Create one `System.Diagnostics.ProcessStartInfo` with the internally
   resolved Node source as `FileName`, the exact manifest argument vector as
   `Arguments`, the internally resolved manifest workdir as `WorkingDirectory`,
   `UseShellExecute=false`, `CreateNoWindow=true`, and both standard streams
   redirected and asynchronously drained without emission. Start exactly once.
   `productionStartExit=0` means the start API returned one process with a
   positive owned PID; otherwise use `1` and PID `0`.
4. Only after successful start, use the accepted bounded readiness cadence
   already defined by the operative shell against only
   `http://127.0.0.1:4173/`. Record attempt count and final HTTP status only.
   Do not request the deep route or any asset. Do not compare any body or disk
   byte.
5. In an unconditional final block, make exactly one stop attempt for the
   positive owned PID if one exists, wait only by the accepted bounded cleanup
   rule, record stopped state, and check only port `4173` once after cleanup.
   Do not inspect or stop any unowned process.

Initialize unreached numeric fields to `-1`, absent PID to `0`, and unreached
status to `-1`. Emit exactly one ordered scalar line after cleanup:

```text
nodeCommandFound=<0|1> nodeCommandNameAccepted=<0|1> nodeSourceExists=<0|1> workdirExists=<0|1> productionStartExit=<0|1> productionPid=<int> productionReadinessAttempts=<int> productionReadinessStatus=<int> cleanupAttemptCount=<0|1> productionPidStopped=<0|1> portClearCount=<0|1> localizedStage=<0..5> nativeExit=<0|1>
```

Use `localizedStage=1` for command lookup/name/source failure, `2` for workdir
failure, `3` for process-start/PID failure, `4` for readiness failure, `5` for
cleanup/port failure, and `0` only when all stages pass. `nativeExit=0` requires
all three Node scalars `1`, workdir `1`, start exit `0`, positive PID, positive
readiness attempts with final status `200`, cleanup attempt `1`, owned PID
stopped `1`, and port clear `1`. Every other combination requires native exit
`1` and the first failed stage. Cleanup fields remain truthful after any
earlier failure.

Stop after the scalar and return **`PRODUCTION LAUNCHER VECTOR LOCALIZED /
STOP / RETURN TO FRESH MISSION`**. Even `localizedStage=0` is diagnostic only;
it is not production or fixture served-identity evidence and does not pass or
rerun VR-36. Mission alone may authorize a later bounded served checkpoint.

Do not run a second production start, fixture start, alternate executable,
`npm.cmd`, `npm`, `npx`, alternate port, alternate route, repair, fallback,
post-scalar command, or repository write. Do not request deep route, JS, CSS,
or any other asset. No browser, E2E, complete journey, summary, verifier, live
review, build, fixture build, test, validator, PBA, media/source-map scan,
synchronization, hash, quiet, blob, dependency, source, filename, glob,
protected-path, or untracked-path command is authorized.

## Preserved boundaries and classifications

VR-22 focused `68/68`, related `74/74`, cold full `972/972`, validators
`40/40`; VR-30 production build; VR-35 fixture build; and VR-36's corrected
scalar PBA remain frozen without rerun. No full served-identity acceptance,
product delta, `PRODUCTION FUNCTIONAL`, release, or maturity advance is
authorized or inferred.

These five classifications remain distinct and OPEN; none is waived, merged,
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

All frozen candidate, threshold, player, learning, copy/owner, `L02-02`, strict
`24/24`, evaluator, remediation, evidence/privacy, save/reload/return,
accessibility, focus, responsive, forced-color, reduced-motion, offline,
request, dependency, source-map, PBA, performance, route, world, equal MH-40,
null-delta, `successor=null`, ending, immutable-media `17 / 37,410,731`,
diagnostic non-evidence/non-verifier, and one-E2E meanings remain exact.

No implementation, product, test, manifest, E2E, content, CSS, module,
dependency, package, lockfile, curriculum, evaluator, save, story, route, map,
scoreboard, maturity, media, or other control change is permitted. No media
operation or reveal is authorized. No branch, packet, lesson, hidden-lore
answer, reward, access, identity, authority, world response, successor,
RP-013, or post-ending content may be added or changed.

Protected repository QA, PDF, training, browser/profile/save, hidden lore,
media, user state, predecessor roots, and unrelated external roots remain
forbidden to inspect, enumerate, reuse, modify, move, or delete.

No Quartermaster, Image Specialist, Intelligence, reveal, maturity advance,
release, schedule, automation, or `FIRST RUN COMPLETE` action is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / PRODUCTION LAUNCHER-VECTOR
LOCALIZATION ONLY / FRSH-003-v1-VR-38`**.

Commit and push are required only for this administrative variance and the
synchronized exact handoff. No product file may be staged.
