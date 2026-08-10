# First Run Shell Variance Reissue - Separate Preview Launch-Readiness Control Only

Variance ID: `FRSH-003-v1-VR-55`

Disposition: **`FIRST RUN SHELL READY / SEPARATE PREVIEW LAUNCH-READINESS
CONTROL ONLY / FRSH-003-v1-VR-55`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Mission source inspected:
`c9f9cba33a37d5cd24f23d44c8be8e8ad5f59651`

Recorded: **2026-08-10**

## Context reuse and cleanup adjudication

Fresh-child capacity remains unavailable. Root expressly authorized this
Mission Captain context to adjudicate VR-54 and issue the next bounded control.
The reuse is disclosed, is not candidate evidence, and waives no boundary.

Mission accepts VR-54 as **`EXACT TOKEN-BOUND ROOT CLEANUP PASS / ROOT DELETED
/ PORTS CLEAR / NO LIVE`**. Exact token decode, strict UTF-8, disposable SHA
computation/disposal, digest equality, normalized identity, leaf/parent/temp
containment, repository exclusion, predecessor distinction, initial existence,
zero PID/process/stop handling, exact-port queries 2/clear 2, empty-root proof,
single deletion, final absence, cleanup pass, and native exit all passed.

No root is retained. No process, preview, browser, E2E, diagnostic, transport,
summary, or verifier action occurred. The E2E invocation count remains zero.
Recovery does not erase the recorded VR-53 cleanup-parser OPEN classification.

Mission retains **`EXECUTION-CONTROL REJECTION / TOOL SAFETY / NON-EXECUTED /
NO LIVE / VR-53 STAGE 2`** as non-candidate execution-control evidence. Since
the rejected call performed no operation, it is not a new OPEN divergence.

## Tool-policy-compatible preview control

Exact next owner is a **fresh Combat Engineer** if capacity permits; otherwise
context reuse must be disclosed. Execute three separate bounded PowerShell
calls in order. Never combine calls. Suppress command, process-object,
pathname, response-body, exception, and listener-path output; emit only the
ordered scalars below.

Use only the accepted VR-40/VR-42 direct Node/Vite executable and literal
working-directory vectors, hidden with exact `PassThru` ownership. Use
`$ProgressPreference='SilentlyContinue'` and bounded
`Invoke-WebRequest -UseBasicParsing -TimeoutSec 1` readiness loops with
responses discarded and catches suppressed. No listener PID may be adopted,
recovered, or substituted.

Any failure or tool-policy rejection exhausts this shell and forbids
reformulation or rerun. A locally started PID must be stopped in the same call
on that call's failure. After production PASS, Call 3 is independently
authorized and mandatory after every later success, failure, or rejection.

### Call 1 - production launch and readiness only

Query only exact loopback ports 4173 and 4184 and require both clear. Launch
production on 4173 exactly once. Require a positive returned `PassThru` PID,
process live, and exact PID equality with the 127.0.0.1:4173 listener; this is
a comparison to the returned PID, not ownership discovery. Perform a bounded
root readiness loop and require HTTP 200. Do not request any deep route or
asset.

Emit exactly:

```text
call=1 prePortsQueryCount=<0..2> prePortsClearCount=<0..2> prodLaunchAttemptCount=<0|1> prodPid=<positive-integer-or-0> prodProcessLive=<0|1> prodOwnedListener=<0|1> prodReadinessAttempts=<integer> prodReadinessStatus=<integer-or-NA> prodReady=<0|1> inCallFailureStopAttempt=<0|1> inCallFailureStoppedOrAbsent=<0|1> callPass=<0|1> nativeExit=<0|1>
```

Exact PASS requires port queries/clear 2/2, launch attempt 1, positive PID,
live/owned/ready 1/1/1, readiness status 200, failure-stop fields 0/0, call
pass 1, and native exit 0. On a reached failure after launch, stop only the
locally returned PID once and report it stopped or absent. Then stop the shell;
no fixture call is authorized.

### Call 2 - fixture launch and readiness only

Pass the exact positive production PID from Call 1 as a literal. Require it
live and still the exact 4173 listener owner; require one suppressed root HTTP
200 check. Query only port 4184 and require clear. Launch fixture on 4184
exactly once using the accepted fixture vector. Require its positive returned
`PassThru` PID live and exactly equal to the 4184 listener owner. Perform the
bounded root readiness loop and require HTTP 200. Do not request any deep route
or asset.

Emit exactly:

```text
call=2 prodPidInput=<positive-integer> prodStillLive=<0|1> prodStillOwned=<0|1> prodReadinessStatus=<integer-or-NA> fixturePortQueryCount=<0|1> fixturePortClear=<0|1> fixtureLaunchAttemptCount=<0|1> fixturePid=<positive-integer-or-0> fixtureProcessLive=<0|1> fixtureOwnedListener=<0|1> fixtureReadinessAttempts=<integer> fixtureReadinessStatus=<integer-or-NA> fixtureReady=<0|1> inCallFailureStopAttempt=<0|1> inCallFailureStoppedOrAbsent=<0|1> callPass=<0|1> nativeExit=<0|1>
```

Exact PASS requires production live/owned/root status 1/1/200; fixture port
query/clear 1/1; launch attempt 1; positive fixture PID; fixture live/owned/
ready 1/1/1; readiness status 200; failure-stop 0/0; call pass 1; native exit
0. On a reached failure after fixture launch, stop only the locally returned
fixture PID once. Regardless of Call 2 result or rejection, proceed only to
Call 3 using the production PID and the exact fixture PID if one was emitted.

### Call 3 - mandatory owned cleanup only

Pass the exact numeric PIDs emitted by Calls 1 and 2; use 0 only when a call
did not emit a positive PID. Use parser-correct syntax:

```powershell
foreach ($processId in @($prodPid, $fixturePid)) {
    # Act only when this transported PID is positive.
}
foreach ($portNumber in @(4173, 4184)) {
    # Query only this exact loopback port and count it clear.
}
```

For each positive transported PID, inspect only that PID and stop it once if
live. Treat a missing transported PID as already absent. Do not enumerate
processes/listeners, discover a PID, adopt an exact-port listener, or stop an
unowned process. After PID handling, query only ports 4173 and 4184 and require
both clear. An active listener not owned by a transported PID is a fail-closed
cleanup failure and must not be stopped.

Emit exactly:

```text
call=3 prodPidInput=<positive-integer-or-0> fixturePidInput=<positive-integer-or-0> ownedPidCount=<0..2> pidInspectionCount=<0..2> pidStopAttemptCount=<0..2> ownedPidsStoppedOrAbsentCount=<0..2> portQueryCount=<0..2> portsClearCount=<0..2> cleanupPass=<0|1> nativeExit=<0|1>
```

Exact cleanup PASS requires every positive transported PID inspected and
stopped or already absent, port queries/clear 2/2, cleanup pass 1, and native
exit 0. No root or filesystem operation is permitted.

Return **`SEPARATE PREVIEW LAUNCH-READINESS CONTROL PASS / PRODUCTION READY /
FIXTURE READY / OWNED CLEANUP PASS / PORTS CLEAR / NO E2E / STOP / RETURN TO
FRESH MISSION`** only when Calls 1/2/3 all pass. Otherwise return **`HOLD /
PREVIEW LAUNCH-READINESS CONTROL FAILURE OR REJECTION / NO E2E / NO RERUN /
OWNED CLEANUP RESULT / RETURN TO FRESH MISSION`**.

## Preserved controls and boundaries

Geometry correction / transport lineage remains
`8aa1dcaf2d5a347cc21ec48a4d6022485fe7cd97` /
`6c64eb354b7dbb467df5725e2cae4eb67092ddc7`. Immutable product, validation,
diagnostic/probe, and evidence identities remain
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`,
`4cd7fbf31291671dd28c0743b44a7c49aaad82bb`,
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`, and
`ca89a679195c11d441a76e6c02983a6436f2ccb2`.

The cumulative VR-22 tests/validators, VR-30 production build, VR-35 fixture
build/corrected PBA, VR-42 formal served identity, VR-44 transport proof,
VR-46 geometry correction proof, VR-48 root control, VR-51 localization,
VR-52 SHA correction, and VR-54 exact cleanup remain accepted without rerun.

All eleven OPEN classifications remain separate: the prior VR-17, VR-23,
VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, and VR-50 items, plus VR-53
Stage-4 cleanup parser. The VR-53 Stage-2 rejection remains non-executed/non-
evidence. None is waived, merged, closed, cured, or candidate evidence.

The single E2E budget remains unspent. Diagnostic evidence remains non-release,
forbidden verifier input, and no-retry. Every frozen product, player, learning,
privacy, save, accessibility, route, world, MH-40, null-delta,
`successor=null`, ending, media, and one-E2E meaning remains exact.

No root/filesystem action, deep/assets request, byte identity, browser, E2E,
diagnostic, transport, summary, verifier, formal served-identity claim, build,
test, validator, PBA, product/media/protected action, repository write,
downstream stage, or release action is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / SEPARATE PREVIEW LAUNCH-
READINESS CONTROL ONLY / FRSH-003-v1-VR-55`**.
