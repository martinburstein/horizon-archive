# First Run Shell Variance Reissue - Production Ownership and Readiness Localization Only

Variance ID: `FRSH-003-v1-VR-40`

Disposition: **`FIRST RUN SHELL READY / PRODUCTION OWNERSHIP AND READINESS
LOCALIZATION ONLY / FRSH-003-v1-VR-40`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Command authority: `FRRC-002-v1`

Immediate return / predecessor authority: Combat VR-39 exact-port ownership
recovery / `FRSH-003-v1-VR-39`

Mission predecessor source:
`ebe71ff3418dd1f959571133d7a4b96d927ac771`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Recorded: **2026-08-10**

## Context-reuse limitation

Fresh-child capacity remains unavailable. Root expressly authorized this
already-active Mission Captain context to adjudicate the VR-39 return and
issue the next bounded shell. The reuse remains disclosed, is not candidate
evidence, and waives no validation, independence, divergence, or release
boundary.

## VR-39 adjudication and recovery divergence

Mission accepts that the exact direct Node/bundled-Vite production launch ran
once and created the exact loopback listener on port `4173`, but the wrapper's
PassThru scalar did not retain the owned PID. Readiness therefore did not run;
no `Invoke-WebRequest`, deep-route request, asset request, fixture, browser, or
E2E occurred.

To prevent an orphaned preview, Combat queried the exact port listener,
identified PID `29264`, stopped it, and proved port `4173` clear. The cleanup
was safety-preserving and narrowly localized, but VR-39 authorized stopping
only an already-recorded owned PID. Mission therefore classifies:

**`UNAUTHORIZED DIVERGENCE / EXACT-PORT LISTENER OWNERSHIP RECOVERY / OPEN /
VR-39`**.

The recovery is not candidate evidence, does not cure the missing PassThru
scalar, and does not pass VR-36. Its successful stop/port-clear result
establishes only that no known preview surface remains. Mission preserves HOLD
and authorizes one ownership-plus-readiness diagnostic with the recovery path
made explicit and fail-closed.

## Exact ownership and readiness authority

Exact next owner is a **Combat Engineer**. A fresh context remains preferred;
if thread limits require reuse, disclose that reuse in the return.

Run one fail-closed wrapper with this exact sequence:

1. Query only the exact loopback listener tuple `127.0.0.1:4173`. Require no
   listener before launch and emit only `prePortClearCount=1`. Any listener is
   stage `1` failure: do not launch, do not inspect its PID or process, and
   return after the final exact-port clear check.
2. Resolve manifest `node` internally by the accepted VR-38 method without
   emitting its source. Record UTC launch timestamp ticks immediately before
   one exact direct Node/bundled-Vite production start: workdir
   `horizon-archive-game`; arguments `node_modules/vite/bin/vite.js preview
   --host 127.0.0.1 --port 4173 --strictPort`; hidden process; streams captured
   and suppressed. Use PassThru and prefer its positive PID. Start exactly
   once.
3. If and only if PassThru yields no positive PID, poll only the exact listener
   tuple for at most `40` attempts separated by `250ms`. On first appearance,
   require exactly one distinct listener PID. Query only that PID and require
   its process start time in UTC to be greater than or equal to the recorded
   launch timestamp. Compare its executable path internally with the already
   resolved Node source using ordinal-ignore-case equality; emit only the
   Boolean executable-identity result and never either path. Bind the listener
   PID as owned only when PID count is `1`, start-time check is true, and exact
   Node executable identity is true. Otherwise do not stop or inspect any
   further process.
4. Only after PassThru ownership or the strict fallback ownership proof binds
   one positive PID, set `$ProgressPreference='SilentlyContinue'` and run the
   exact VR-39 bounded readiness transport: at most `40` root-only
   `Invoke-WebRequest -UseBasicParsing` attempts to
   `http://127.0.0.1:4173/`, each with `-TimeoutSec 1 -ErrorAction Stop`,
   responses discarded after integer status capture, catch output suppressed,
   and `250ms` between failures. Ready is `1` only on status `200`.
5. In an unconditional final block, make exactly one stop attempt only for the
   PID lawfully bound as owned, record stopped state, and check only the exact
   loopback port once after cleanup. Do not inspect or stop any unowned PID.

Initialize absent PID to `0`, unreached numeric/status fields to `-1`, and
Boolean/count fields to `0`. Emit exactly one ordered scalar line after cleanup
and nothing else:

```text
prePortClearCount=<0|1> launchUtcTicks=<int> passThruPid=<int> listenerProbeAttempts=<int> listenerPidCount=<int> listenerStartAfterLaunch=<0|1> listenerExecutableNode=<0|1> ownershipMode=<0|1|2> productionPid=<int> productionReadinessAttempts=<int> productionReadinessStatus=<int> productionReady=<0|1> cleanupAttemptCount=<0|1> productionPidStopped=<0|1> portClearCount=<0|1> localizedStage=<0..5> nativeExit=<0|1>
```

`ownershipMode=1` means positive PassThru PID; `2` means the strict exact-port
fallback proved a single post-launch exact-Node listener; `0` means no lawful
ownership. When mode `1` is used, fallback-only fields remain `-1`/`0` and no
listener PID lookup is authorized. Stage `1` is dirty pre-port, `2` launch
failure, `3` ownership failure, `4` readiness failure, `5` cleanup/port
failure, and `0` complete diagnostic pass.

`nativeExit=0` requires pre-port clear `1`, positive launch ticks, ownership
mode `1` or `2`, one positive production PID, readiness attempts `1..40`, final
status `200`, ready `1`, cleanup attempt/stopped `1/1`, and post-cleanup port
clear `1`. Mode `2` additionally requires listener PID count `1`, start-after-
launch `1`, and executable-Node `1`. Every other combination requires native
exit `1` and the first failed stage. Cleanup fields remain truthful after any
earlier failure.

Stop after the scalar and return **`PRODUCTION OWNERSHIP AND READINESS
LOCALIZED / STOP / RETURN TO FRESH MISSION`**. Even stage `0` is diagnostic
only; it is not root/deep or asset identity evidence and does not pass or rerun
VR-36. Mission alone may authorize a later bounded checkpoint.

Do not launch twice, query any nonexact port/address, inspect more than the one
exact listener PID allowed by fallback, stop any unowned PID, start fixture,
request deep route or assets, use an alternate executable/client/port/route,
repair, fall back beyond the exact rule above, or run a post-scalar command. No
formal served rerun, browser, E2E, complete journey, summary, verifier, live
review, build, fixture build, test, validator, PBA, media/source-map scan,
synchronization, hash, quiet, blob, dependency, source, filename, glob,
protected-path, untracked-path, or repository-write command is authorized.

## Preserved boundaries and classifications

VR-22 focused `68/68`, related `74/74`, cold full `972/972`, validators
`40/40`; VR-30 production build; VR-35 fixture build; and VR-36's corrected
scalar PBA remain frozen without rerun. No full served-identity acceptance,
product delta, `PRODUCTION FUNCTIONAL`, release, or maturity advance is
authorized or inferred.

These six classifications remain distinct and OPEN; none is waived, merged,
closed, cured, or used as candidate evidence:

- **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN / VR-17`**;
- **`UNAUTHORIZED DIVERGENCE / BROAD REPOSITORY FILENAME ENUMERATION / OPEN /
  VR-23`**;
- **`UNAUTHORIZED DIVERGENCE / UNTRACKED PATHNAME ENUMERATION / OPEN / VR-24
  COMBAT ATTEMPT`**;
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-25
  MISSION`**;
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-28
  MISSION STAGING`**; and
- **`UNAUTHORIZED DIVERGENCE / EXACT-PORT LISTENER OWNERSHIP RECOVERY / OPEN /
  VR-39`**.

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

Mission Captain signs **`FIRST RUN SHELL READY / PRODUCTION OWNERSHIP AND
READINESS LOCALIZATION ONLY / FRSH-003-v1-VR-40`**.

Commit and push are required only for this administrative variance and the
synchronized exact handoff. No product file may be staged.
