# First Run Shell Variance Reissue - Split Production Launch-Readiness Control Only

Variance ID: `FRSH-003-v1-VR-57`

Disposition: **`FIRST RUN SHELL READY / SPLIT PRODUCTION LAUNCH-READINESS
CONTROL ONLY / FRSH-003-v1-VR-57`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Mission source inspected:
`20878104267a31bb2268dbd07d6ac7714a1f9663`

Recorded: **2026-08-10**

## Context reuse and VR-56 adjudication

Fresh-child capacity remains unavailable. Root expressly authorized this
Mission Captain context to adjudicate VR-56 and issue the next bounded control.
The reuse is disclosed, is not candidate evidence, and waives no boundary.

Mission accepts the exact VR-56 control outcomes:

- Call 1 queried only loopback port 4173 and passed its clear predicate;
- Call 2, which combined `Start-Process` and IWR, was rejected by tool safety
  before PowerShell execution and created no process, PID, request, preview, or
  evidence; and
- Call 3 used PID 0, performed no process action, queried only port 4173, and
  passed cleanup/port-clear/native-exit predicates.

Mission classifies **`EXECUTION-CONTROL REJECTION / TOOL SAFETY / NON-EXECUTED
/ NO EVIDENCE / VR-56 CALL 2`**. It is not a product/candidate finding, spends
no E2E budget, and creates no twelfth OPEN classification. VR-56 is exhausted.

The successful clear-port predicate is inherited as Call A for this control
and must not be rerun. No process or PID currently exists from VR-56.

## Exact split production-only authority

Exact next owner is a **fresh Combat Engineer** if capacity permits; otherwise
context reuse must be disclosed. Execute Calls B, C, and D separately and in
order. Never combine calls. Suppress command, process-object, pathname,
response-body, listener-detail, exception, and error output. Emit only each
ordered scalar.

Any call failure or tool-policy rejection exhausts this shell and forbids
reformulation/rerun. Once Call B executes and emits a positive PID, Call D is
independently authorized and mandatory after every Call C outcome or rejection.
If Call B is rejected before execution, Call D may run with PID 0 solely to
prove port 4173 remains clear.

### Call A - inherited preclear

Do not execute a call. Accept the exact VR-56 Call 1 result as:

```text
call=A inheritedPort4173Clear=1 inheritedNativeExit=0
```

### Call B - Start-Process only

Use exactly the accepted VR-40 literal executable, direct Node/Vite arguments,
and production working directory. Execute one launch action only with required
tool-safety hiding and exact ownership return:

```powershell
Start-Process -FilePath <accepted-literal-node-executable> -ArgumentList <accepted-direct-vite-arguments-for-4173> -WorkingDirectory <accepted-literal-production-working-directory> -WindowStyle Hidden -PassThru
```

Copy the returned process object's positive numeric PID, suppress the object,
and emit the scalar. Do not run IWR, sleep/readiness loop, port or listener
query, process lookup, PID recovery, fixture logic, inline cleanup,
`Stop-Process`, deletion, redirection, npm shell resolution, or any second
command beyond scalar construction.

Emit exactly:

```text
call=B launchAttemptCount=<0|1> passThruPidPresent=<0|1> prodPid=<positive-integer-or-0> callPass=<0|1> nativeExit=<0|1>
```

Exact PASS requires launch attempt 1, PID present 1, positive PID, call pass 1,
native exit 0. Copy only the numeric PID to Calls C and D. If the call is
rejected before execution, use PID 0 only for Call D and do not run Call C.

`-WindowStyle Hidden` is mandatory. A formulation without it is forbidden.

### Call C - transported-PID readiness only

Accept the exact positive PID emitted by Call B as a literal. Inspect only that
PID and require it live. Do not enumerate processes/listeners, query port
ownership, discover/substitute a PID, launch a process, or stop anything.

Set `$ProgressPreference='SilentlyContinue'`. Run the accepted bounded
`Invoke-WebRequest -UseBasicParsing -Uri http://127.0.0.1:4173/ -TimeoutSec 1`
root readiness loop; discard responses and suppress catches. Do not request a
deep route or asset.

Emit exactly:

```text
call=C prodPidInput=<positive-integer> pidInspectionCount=<0|1> processLive=<0|1> readinessAttempts=<integer> readinessStatus=<integer-or-NA> ready=<0|1> callPass=<0|1> nativeExit=<0|1>
```

Exact PASS requires PID inspection/live 1/1, readiness status 200, ready/call
pass 1/1, native exit 0. Regardless of result or rejection, proceed only to
Call D with the exact Call B PID.

### Call D - mandatory exact transported-PID cleanup

Accept the exact Call B numeric PID, or 0 only after a non-executed Call B.
Use parser-correct forms:

```powershell
foreach ($processId in @($prodPid)) {
    # Inspect and stop only this transported positive PID.
}
foreach ($portNumber in @(4173)) {
    # Query only this exact loopback port and count it clear.
}
```

For a positive PID, inspect only that PID and stop it once if live. Treat a
missing transported PID as already absent. Do not enumerate processes or
listeners, recover/substitute a PID, adopt a listener owner, or stop an unowned
process. Then query only port 4173 and require it clear. An active listener
after transported-PID handling is fail-closed and may not be stopped through
listener recovery.

Emit exactly:

```text
call=D prodPidInput=<positive-integer-or-0> ownedPidCount=<0|1> pidInspectionCount=<0|1> pidStopAttemptCount=<0|1> ownedPidStoppedOrAbsent=<0|1> portQueryCount=<0|1> port4173Clear=<0|1> cleanupPass=<0|1> nativeExit=<0|1>
```

Exact cleanup PASS requires the positive transported PID inspected and stopped
or absent, or PID 0 with PID counts 0; port query/clear 1/1; cleanup pass 1;
native exit 0.

Return **`SPLIT PRODUCTION LAUNCH-READINESS CONTROL PASS / ROOT HTTP 200 /
OWNED CLEANUP PASS / PORT CLEAR / NO FIXTURE / NO E2E / STOP / RETURN TO FRESH
MISSION`** only if inherited A and Calls B/C/D pass. Otherwise return **`HOLD /
SPLIT PRODUCTION CONTROL FAILURE OR REJECTION / OWNED CLEANUP RESULT / NO
FIXTURE / NO E2E / NO RERUN / RETURN TO FRESH MISSION`**.

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

All eleven OPEN classifications remain separate: VR-17, VR-23, VR-24, VR-25,
VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, and VR-53 Stage 4. The VR-53 Stage-2,
VR-55 Call-1, and VR-56 Call-2 rejections remain non-executed/non-evidence.
None is waived, merged, closed, cured, or candidate evidence.

The single E2E budget remains unspent. Diagnostic evidence remains non-release,
forbidden verifier input, and no-retry. Every frozen product, player, learning,
privacy, save, accessibility, route, world, MH-40, null-delta,
`successor=null`, ending, media, and one-E2E meaning remains exact.

No root/filesystem action, fixture action, listener ownership recovery,
deep/assets request, byte identity, formal served identity, browser, E2E,
diagnostic, transport, summary, verifier, build, test, validator, PBA,
product/media/protected action, repository write, downstream stage, or release
action is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / SPLIT PRODUCTION LAUNCH-
READINESS CONTROL ONLY / FRSH-003-v1-VR-57`**.
