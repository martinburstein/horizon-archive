# First Run Shell Variance Reissue - Minimal Production Launch-Readiness Control Only

Variance ID: `FRSH-003-v1-VR-56`

Disposition: **`FIRST RUN SHELL READY / MINIMAL PRODUCTION LAUNCH-READINESS
CONTROL ONLY / FRSH-003-v1-VR-56`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Mission source inspected:
`341fa12909d1ffbed24bbac9b063027c1f70d78a`

Recorded: **2026-08-10**

## Context reuse and VR-55 adjudication

Fresh-child capacity remains unavailable. Root expressly authorized this
Mission Captain context to adjudicate VR-55 Call 1 and issue the next bounded
control. The reuse is disclosed, is not candidate evidence, and waives no
boundary.

The VR-55 production call was rejected by the tool-safety layer before
PowerShell execution. It performed no port query, launch, PID acquisition,
readiness request, process, preview, in-call cleanup, fixture action, browser,
or E2E. Mission classifies **`EXECUTION-CONTROL REJECTION / TOOL SAFETY /
NON-EXECUTED / NO EVIDENCE / VR-55 CALL 1`**.

The rejection is not a product/candidate finding, does not spend the E2E
budget, and creates no twelfth OPEN classification. VR-55 is exhausted and
may not be reformulated or retried.

## Exact three-call production-only control

Exact next owner is a **fresh Combat Engineer** if capacity permits; otherwise
context reuse must be disclosed. Execute three independent, bounded
PowerShell calls in order. Do not combine them. Suppress all command,
process-object, pathname, response-body, listener-detail, exception, and error
output. Emit only the ordered scalar for each call.

Any call failure or tool rejection exhausts this shell. No same-context
reformulation or rerun is allowed. Once Call 2 executes, Call 3 is separately
authorized and mandatory regardless of readiness outcome. Call 3 is also
authorized with PID 0 after a non-executed Call 2 solely to prove port clear.

### Call 1 - scalar preclear only

Query only `127.0.0.1:4173` for an active listener. Do not enumerate other
ports, recover or emit a PID, inspect a process, or stop anything. Emit:

```text
call=1 portQueryCount=<0|1> port4173Clear=<0|1> callPass=<0|1> nativeExit=<0|1>
```

Exact PASS requires query count 1, clear 1, call pass 1, native exit 0. On any
other result, stop without Call 2 or Call 3 because no process was started.

### Call 2 - exact VR-40 production launch and readiness

Use the exact previously accepted VR-40 command shape and literal production
working directory. Launch the direct Node/Vite production preview on
`127.0.0.1:4173` once with hidden `Start-Process` and `-PassThru`. Suppress the
returned object after copying its positive numeric PID. Do not use npm shell
resolution, a wrapper process, listener discovery, PID recovery, redirection,
inline cleanup, `Stop-Process`, deletion, fixture logic, or port-kill logic.

Set `$ProgressPreference='SilentlyContinue'`. Run the accepted bounded loop
using `Invoke-WebRequest -UseBasicParsing -Uri http://127.0.0.1:4173/
-TimeoutSec 1`, discard the response, suppress catches, and record attempts,
HTTP status, and readiness. Emit exactly one scalar even when readiness fails:

```text
call=2 launchAttemptCount=<0|1> passThruPidPresent=<0|1> prodPid=<positive-integer-or-0> processLiveAfterLaunch=<0|1> readinessAttempts=<integer> readinessStatus=<integer-or-NA> ready=<0|1> callPass=<0|1> nativeExit=<0|1>
```

Exact PASS requires launch attempt 1, PassThru PID present 1, positive PID,
process live 1, readiness status 200, ready/call pass 1/1, native exit 0. The
call must not query listener ownership. Whether it passes or fails after
execution, copy the exact `prodPid` scalar into Call 3 and perform no other
action first.

### Call 3 - mandatory exact transported-PID cleanup

Accept only the exact numeric `prodPid` emitted by Call 2, or literal 0 if
Call 2 was rejected before execution. Use parser-correct syntax:

```powershell
foreach ($processId in @($prodPid)) {
    # Inspect and stop only this transported positive PID.
}
foreach ($portNumber in @(4173)) {
    # Query only this exact loopback port and count it clear.
}
```

For a positive PID, inspect only that PID and stop it once if live; a missing
transported PID counts already absent. Do not enumerate processes/listeners,
recover/substitute a PID, adopt a listener owner, or stop an unowned process.
Then query only loopback port 4173 and require it clear. An active listener
after transported-PID handling is fail-closed and must not be stopped through
port ownership recovery.

Emit:

```text
call=3 prodPidInput=<positive-integer-or-0> ownedPidCount=<0|1> pidInspectionCount=<0|1> pidStopAttemptCount=<0|1> ownedPidStoppedOrAbsent=<0|1> portQueryCount=<0|1> port4173Clear=<0|1> cleanupPass=<0|1> nativeExit=<0|1>
```

Exact cleanup PASS requires a positive transported PID to be inspected and
stopped or absent, or PID 0 with all PID counts 0; port query/clear 1/1;
cleanup pass 1; native exit 0.

Return **`MINIMAL PRODUCTION LAUNCH-READINESS CONTROL PASS / ROOT HTTP 200 /
OWNED CLEANUP PASS / PORT CLEAR / NO FIXTURE / NO E2E / STOP / RETURN TO FRESH
MISSION`** only if all three calls pass. Otherwise return **`HOLD / PRODUCTION
LAUNCH-READINESS CONTROL FAILURE OR REJECTION / OWNED CLEANUP RESULT / NO
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
VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, and VR-53 Stage 4. The VR-53 Stage-2
and VR-55 Call-1 rejections remain non-executed/non-evidence. None is waived,
merged, closed, cured, or candidate evidence.

The single E2E budget remains unspent. Diagnostic evidence remains non-release,
forbidden verifier input, and no-retry. Every frozen product, player, learning,
privacy, save, accessibility, route, world, MH-40, null-delta,
`successor=null`, ending, media, and one-E2E meaning remains exact.

No root/filesystem action, fixture action, listener ownership recovery,
deep/assets request, byte identity, formal served-identity claim, browser, E2E,
diagnostic, transport, summary, verifier, build, test, validator, PBA,
product/media/protected action, repository write, downstream stage, or release
action is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / MINIMAL PRODUCTION LAUNCH-
READINESS CONTROL ONLY / FRSH-003-v1-VR-56`**.
