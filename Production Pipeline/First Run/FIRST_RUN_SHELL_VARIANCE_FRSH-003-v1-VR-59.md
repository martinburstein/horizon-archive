# First Run Shell Variance Reissue - Split Fixture Launch-Readiness Control Only

Variance ID: `FRSH-003-v1-VR-59`

Disposition: **`FIRST RUN SHELL READY / SPLIT FIXTURE LAUNCH-READINESS CONTROL
ONLY / FRSH-003-v1-VR-59`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Mission source inspected:
`1172d1b90e3ba884cc6d98e4b64c7d9753d7b1f6`

Recorded: **2026-08-10**

## Context reuse and VR-58 adjudication

Fresh-child capacity remains unavailable. Root expressly authorized this
Mission Captain context to adjudicate VR-58 and issue the next bounded control.
The reuse is disclosed, is not candidate evidence, and waives no boundary.

Mission accepts VR-58 as **`EXACT PID-16040 CLEANUP VERIFIED / PID ABSENT /
PORT 4173 CLEAR / NO LIVE`**. The exact initial PID inspection found PID
`16040` absent, so identity predicates were correctly `NA`, stop attempts and
wait were 0, final PID absence passed, exact port query/clear passed, cleanup
verification passed, and native exit was 0.

No other PID/process/listener/path was inspected. No stop, fixture, browser,
E2E, diagnostic, transport, summary, or verifier ran. The VR-57 cleanup
predicate is resolved execution-control evidence and does not add a twelfth
OPEN classification.

VR-57 therefore proves the tool-compatible production split: inherited
preclear, hidden direct Node/Vite `Start-Process -PassThru` PID capture,
separate bounded root readiness, and separate PID-bound cleanup. VR-59 may
apply only the analogous accepted shape to the fixture on 4184.

## Exact split fixture-only authority

Exact next owner is a **fresh Combat Engineer** if capacity permits; otherwise
context reuse must be disclosed. Execute Calls A, B, C, and D separately and
in order. Never combine calls. Suppress command, process-object, pathname,
response-body, listener-detail, exception, and error output. Emit only each
ordered scalar.

Any failure or tool-policy rejection exhausts this shell and forbids
reformulation/rerun. Once Call B executes and emits a positive PID, Call D is
independently authorized and mandatory after every Call C outcome or rejection.
If Call B is rejected before execution, Call D may run with PID 0 solely to
prove port 4184 remains clear.

### Call A - fixture preclear only

Query only `127.0.0.1:4184` for an active listener. Do not enumerate other
ports, recover or emit a PID, inspect a process, or stop anything. Emit:

```text
call=A portQueryCount=<0|1> port4184Clear=<0|1> callPass=<0|1> nativeExit=<0|1>
```

Exact PASS requires query/clear 1/1, call pass 1, native exit 0. On any other
result, stop without Calls B/C/D because no process was started.

### Call B - fixture Start-Process only

Use exactly the previously accepted literal fixture executable, direct
Node/Vite arguments for port 4184, and literal fixture working directory.
Execute one launch action only with mandatory tool-safety hiding and ownership
return:

```powershell
Start-Process -FilePath <accepted-literal-node-executable> -ArgumentList <accepted-direct-fixture-vite-arguments-for-4184> -WorkingDirectory <accepted-literal-fixture-working-directory> -WindowStyle Hidden -PassThru
```

Copy the returned positive numeric PID, suppress the object, and emit the
scalar. Do not run IWR, sleep/readiness, port/listener query, process lookup,
PID recovery, production logic, inline cleanup, `Stop-Process`, deletion,
redirection, npm shell resolution, or any second command beyond scalar
construction.

Emit exactly:

```text
call=B launchAttemptCount=<0|1> passThruPidPresent=<0|1> fixturePid=<positive-integer-or-0> callPass=<0|1> nativeExit=<0|1>
```

Exact PASS requires launch attempt 1, PID present 1, positive PID, call pass 1,
native exit 0. Copy only the numeric PID to Calls C and D. If rejected before
execution, use PID 0 only for Call D and do not run Call C.

`-WindowStyle Hidden` is mandatory. A formulation without it is forbidden.

### Call C - transported fixture-PID readiness only

Accept the exact positive PID from Call B as a literal. Inspect only that PID
and require it live. Do not enumerate processes/listeners, query port
ownership, discover/substitute a PID, launch a process, or stop anything.

Set `$ProgressPreference='SilentlyContinue'`. Run the accepted bounded
`Invoke-WebRequest -UseBasicParsing -Uri http://127.0.0.1:4184/ -TimeoutSec 1`
fixture-root readiness loop; discard responses and suppress catches. Do not
request a deep route or asset.

Emit:

```text
call=C fixturePidInput=<positive-integer> pidInspectionCount=<0|1> processLive=<0|1> readinessAttempts=<integer> readinessStatus=<integer-or-NA> ready=<0|1> callPass=<0|1> nativeExit=<0|1>
```

Exact PASS requires PID inspection/live 1/1, readiness status 200, ready/call
pass 1/1, native exit 0. Regardless of result or rejection, proceed only to
Call D with the exact Call B PID.

### Call D - mandatory exact fixture-PID cleanup

Accept the exact Call B numeric PID, or 0 only after non-executed Call B. Use
parser-correct forms:

```powershell
foreach ($processId in @($fixturePid)) {
    # Inspect and stop only this transported positive PID.
}
foreach ($portNumber in @(4184)) {
    # Query only this exact loopback port and count it clear.
}
```

For a positive PID, inspect only that PID and stop it once if live. Perform a
bounded post-stop absence check on only that PID. Do not enumerate processes
or listeners, recover/substitute a PID, adopt a listener owner, or stop an
unowned process. Then query only port 4184 and require it clear. An active
listener after transported-PID handling is fail-closed and may not be stopped
through listener recovery.

Emit:

```text
call=D fixturePidInput=<positive-integer-or-0> ownedPidCount=<0|1> pidInspectionCount=<0|1> pidStopAttemptCount=<0|1> boundedWaitMs=<0..5000> finalPidAbsent=<0|1> portQueryCount=<0|1> port4184Clear=<0|1> cleanupPass=<0|1> nativeExit=<0|1>
```

Exact cleanup PASS requires a positive transported PID inspected, stopped once
if live, and finally absent, or PID 0 with PID counts/wait 0 and absence 1;
port query/clear 1/1; cleanup pass 1; native exit 0.

If port clears but final PID absence is 0, do not stop again. Return the exact
PID and scalar to fresh Mission for a separately authorized cleanup
verification. No same-shell retry is permitted.

Return **`SPLIT FIXTURE LAUNCH-READINESS CONTROL PASS / ROOT HTTP 200 / OWNED
CLEANUP PASS / PORT CLEAR / NO PRODUCTION / NO E2E / STOP / RETURN TO FRESH
MISSION`** only if Calls A/B/C/D all pass. Otherwise return **`HOLD / SPLIT
FIXTURE CONTROL FAILURE OR REJECTION / OWNED CLEANUP RESULT / NO PRODUCTION /
NO E2E / NO RERUN / RETURN TO FRESH MISSION`**.

## Preserved controls and boundaries

Geometry correction / transport lineage remains
`8aa1dcaf2d5a347cc21ec48a4d6022485fe7cd97` /
`6c64eb354b7dbb467df5725e2cae4eb67092ddc7`. Immutable product, validation,
diagnostic/probe, and evidence identities remain
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`,
`4cd7fbf31291671dd28c0743b44a7c49aaad82bb`,
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`, and
`ca89a679195c11d441a76e6c02983a6436f2ccb2`.

The cumulative accepted gates and the proven VR-57 production split remain
accepted without rerun. All eleven OPEN classifications remain separate:
VR-17, VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, and
VR-53 Stage 4. None is waived, merged, closed, cured, or candidate evidence.

The single E2E budget remains unspent. Diagnostic evidence remains non-release,
forbidden verifier input, and no-retry. Every frozen product, player, learning,
privacy, save, accessibility, route, world, MH-40, null-delta,
`successor=null`, ending, media, and one-E2E meaning remains exact.

No production launch, root/filesystem, listener ownership recovery, deep/
assets request, byte identity, formal served identity, browser, E2E,
diagnostic, transport, summary, verifier, build, test, validator, PBA,
product/media/protected action, repository write, downstream stage, or release
action is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / SPLIT FIXTURE LAUNCH-READINESS
CONTROL ONLY / FRSH-003-v1-VR-59`**.
