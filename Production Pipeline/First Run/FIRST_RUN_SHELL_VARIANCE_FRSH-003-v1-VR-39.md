# First Run Shell Variance Reissue - Production Readiness Transport Localization Only

Variance ID: `FRSH-003-v1-VR-39`

Disposition: **`FIRST RUN SHELL READY / PRODUCTION READINESS TRANSPORT
LOCALIZATION ONLY / FRSH-003-v1-VR-39`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Command authority: `FRRC-002-v1`

Immediate return / predecessor authority: Combat VR-38 launcher pass and
readiness-transport failure / `FRSH-003-v1-VR-38`

Mission predecessor source:
`49cddb202bbe121f64ffabd62eeb6d18938a1718`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Recorded: **2026-08-10**

## Context-reuse limitation

Fresh-child capacity remains unavailable. Root expressly authorized this
already-active Mission Captain context to adjudicate the VR-38 return and
issue the next bounded shell. The reuse remains a disclosed coordination
limitation, is not candidate evidence, and waives no validation, independence,
divergence, or release boundary.

## VR-38 adjudication

Mission accepts the launcher-vector portion of VR-38 as diagnostic PASS:
manifest `node` resolved to an accepted application with an existing source,
the literal workdir existed, the exact direct Node/bundled-Vite production
vector started once, and one positive owned PID was recorded. The owned PID
was stopped and loopback port `4173` was clear at return.

Readiness did not produce an HTTP result. The wrapper failed only because
`[Net.Http.HttpClient]` was unavailable in the executing PowerShell runtime.
This localizes a readiness transport dependency, not a preview, product,
route, asset, or served-identity failure. No deep route or asset was requested;
no fixture, browser, or E2E ran.

Two alternate formulations were rejected by host policy before execution.
They launched no process, made no request, emitted no candidate evidence, and
changed no repository or product state. They remain disclosed as
**`EXECUTION-CONTROL REJECTION / NON-EXECUTED / NON-EVIDENCE / VR-38`** and do
not create a runtime rerun or waive the no-retry boundary.

VR-38 is diagnostic only. It does not pass VR-36 served identity. Mission
preserves HOLD and authorizes one production-only readiness-transport
localization with the proven launcher vector and no `HttpClient` dependency.

## Exact readiness-transport authority

Exact next owner is a **Combat Engineer**. A fresh context remains preferred;
if thread limits require reuse, disclose that reuse in the return.

Run one fail-closed wrapper with this exact scope:

1. Set `$ProgressPreference = 'SilentlyContinue'` inside the wrapper. Resolve
   manifest executable `node` by the accepted VR-38 method, suppress its source
   path, and start the exact direct Node/bundled-Vite production vector once:
   workdir `horizon-archive-game`; arguments
   `node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4173
   --strictPort`; redirected streams asynchronously drained without emission.
   No alternate executable or command is permitted.
2. Only after one positive owned PID exists, perform at most `40` ordered
   readiness attempts. Each attempt must invoke exactly:

```powershell
Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:4173/' -TimeoutSec 1 -ErrorAction Stop
```

   Capture the response only long enough to record integer status, then discard
   it without emitting headers, body, URL, exception, or diagnostics. Set ready
   to `1` and stop polling only on status `200`. On a suppressed catch, record
   status `-1`; if another attempt remains, wait exactly `250ms`. No
   `[Net.Http.HttpClient]`, `Add-Type`, alternate HTTP client, alternate URI,
   deep route, body comparison, or asset request is authorized.
3. In an unconditional final block, make exactly one stop attempt for the
   positive owned PID if one exists, wait only by the accepted bounded cleanup
   rule, record stopped state, and check only loopback port `4173` once after
   cleanup. Do not inspect or stop any unowned process.

Initialize attempts and status to `-1` until readiness is reached, absent PID
to `0`, and all other Boolean/count fields to `0`. Emit exactly one ordered
scalar line after cleanup and nothing else:

```text
productionStartExit=<0|1> productionPid=<int> productionReadinessAttempts=<int> productionReadinessStatus=<int> productionReady=<0|1> cleanupAttemptCount=<0|1> productionPidStopped=<0|1> portClearCount=<0|1> localizedStage=<0..3> nativeExit=<0|1>
```

Use `localizedStage=1` for internal resolution/workdir/start/PID failure, `2`
for readiness exhaustion or non-`200`, `3` for cleanup/port failure, and `0`
only when the diagnostic passes. `nativeExit=0` requires start exit `0`, one
positive owned PID, readiness attempts in inclusive range `1..40`, final
status `200`, ready `1`, cleanup attempt `1`, owned PID stopped `1`, and port
clear `1`. Every other combination requires native exit `1` and the first
failed stage. Cleanup fields remain truthful after any earlier failure.

Stop after the scalar and return **`PRODUCTION READINESS TRANSPORT LOCALIZED /
STOP / RETURN TO FRESH MISSION`**. Even `localizedStage=0` is diagnostic only;
it is not root/deep or asset identity evidence and does not pass or rerun
VR-36. Mission alone may authorize a later bounded checkpoint.

Do not start production a second time, start fixture, use an alternate
executable, use `npm`, `npm.cmd`, `npx`, use an alternate port/route/client,
repair, fall back, or run a post-scalar command. No deep route, JS, CSS, disk
comparison, full served rerun, browser, E2E, complete journey, summary,
verifier, live review, build, fixture build, test, validator, PBA,
media/source-map scan, synchronization, hash, quiet, blob, dependency, source,
filename, glob, protected-path, untracked-path, or repository-write command is
authorized.

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

Mission Captain signs **`FIRST RUN SHELL READY / PRODUCTION READINESS
TRANSPORT LOCALIZATION ONLY / FRSH-003-v1-VR-39`**.

Commit and push are required only for this administrative variance and the
synchronized exact handoff. No product file may be staged.
