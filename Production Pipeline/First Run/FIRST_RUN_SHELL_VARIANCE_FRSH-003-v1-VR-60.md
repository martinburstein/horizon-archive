# First Run Shell Variance Reissue - Fully Staged One-E2E Diagnostic-Control Verification

Variance ID: `FRSH-003-v1-VR-60`

Disposition: **`FIRST RUN SHELL READY / FULLY STAGED ONE-E2E DIAGNOSTIC-
CONTROL VERIFICATION / FRSH-003-v1-VR-60`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Mission source inspected:
`261390a19b6f1d2a304be8b12a4f5ec4caeceb0c`

Geometry correction / diagnostic transport / report lineage:

```text
8aa1dcaf2d5a347cc21ec48a4d6022485fe7cd97
6c64eb354b7dbb467df5725e2cae4eb67092ddc7
0ac9023037873004f7bd5d75c16f80953d770a4d
```

Exact immutable product / validation / diagnostic / evidence identities:

```text
a91763e28d488f31f8cf7d40ece0b2682246ba9b
4cd7fbf31291671dd28c0743b44a7c49aaad82bb
2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc
ca89a679195c11d441a76e6c02983a6436f2ccb2
```

Recorded: **2026-08-10**

## Context reuse and VR-59 adjudication

Fresh-child capacity remains unavailable. Root expressly authorized this
Mission Captain context to adjudicate VR-59 and issue the next bounded shell.
The reuse is disclosed, is not candidate evidence, and waives no boundary.

Mission accepts VR-59 PASS: fixture port 4184 preclear; exact hidden direct
Node/Vite `Start-Process -PassThru` PID capture; separate transported-PID
liveness and root HTTP 200 readiness; one exact-PID stop when live; bounded PID
absence; port clear; cleanup pass; and native exit all passed. No production,
root, browser, or E2E action occurred.

VR-57/VR-58 likewise prove the analogous production split and exact cleanup.
VR-48/VR-51/VR-52/VR-54 prove root containment, token/base64/disposable SHA,
and exact token-bound deletion. No new OPEN classification arises. Exactly one
E2E budget remains.

## Ten-call orchestration boundary

Exact next owner is a **fresh Combat Engineer** if capacity permits; otherwise
context reuse must be disclosed. Execute Calls 0 through 9 separately and in
order. Never combine calls. Suppress paths, response bodies, process/directory
objects, listener details, exceptions, errors, and command output except the
ordered scalar or explicitly authorized safe base64 evidence.

Copy only exact scalar tokens/digests/PIDs between calls. Do not rediscover
state by path, process, listener, port-owner, wildcard, or repository
enumeration. Any failure or tool-policy rejection exhausts this shell and
forbids reformulation/rerun. Once Call 1 succeeds, Call 9 root cleanup is
independently mandatory. Once a launch returns a positive PID, its cleanup call
is independently mandatory. Execute applicable cleanup calls even after a
later rejection.

### Call 0 - exact port preclear only

Query only loopback ports 4173 and 4184; require both clear. No PID/listener
detail, process action, root, or launch is allowed.

```text
call=0 portQueryCount=<0..2> portsClearCount=<0..2> callPass=<0|1> nativeExit=<0|1>
```

Exact PASS is 2/2, call pass 1, native exit 0.

### Call 1 - fresh root/token only

Use the proven atomic OS-temp direct-child GUID protocol: pre/post leaf,
parent, containment, repository exclusion, predecessor distinction,
nonexistence, create-once, exact resolve, identity assignment, strict UTF-8,
standard-base64 round trip. Compute the token digest twice with fresh
disposable `[Security.Cryptography.SHA256]::Create()` instances and explicit
`ComputeHash([byte[]])`; require disposal, uppercase/lowercase 64-hex shapes,
and recompute equality. Retain the root only on complete PASS and emit its
base64 token/lowercase digest. On failure, same-call exact empty-root deletion.

```text
call=1 rootPredicatesPass=<0|1> tokenPredicatesPass=<0|1|NA> shaCorrectionPass=<0|1|NA> rootRetained=<0|1> rootTokenB64=<base64-or-empty> rootTokenSha256=<64-lowercase-hex-or-empty> failureCleanupAttempt=<0|1> failureRootDeleted=<0|1> callPass=<0|1> nativeExit=<0|1>
```

No port/process/preview action is allowed.

### Call 2 - production launch only

Use the proven VR-57 exact literal direct Node/Vite vector on 4173:
`Start-Process -WindowStyle Hidden -PassThru`. Emit only the positive numeric
PID. No IWR, port/listener query, process lookup, cleanup, fixture, root, or
second action.

```text
call=2 launchAttemptCount=<0|1> passThruPidPresent=<0|1> prodPid=<positive-integer-or-0> callPass=<0|1> nativeExit=<0|1>
```

### Call 3 - production readiness only

Inspect only the transported positive production PID for liveness. Run the
proven bounded suppressed root IWR on `http://127.0.0.1:4173/`; require HTTP
200. No launch, listener query, cleanup, fixture, or root action.

```text
call=3 prodPidInput=<positive-integer> pidInspectionCount=<0|1> processLive=<0|1> readinessAttempts=<integer> readinessStatus=<integer-or-NA> ready=<0|1> callPass=<0|1> nativeExit=<0|1>
```

### Call 4 - fixture launch only

Use the proven VR-59 exact literal direct fixture Node/Vite vector on 4184:
`Start-Process -WindowStyle Hidden -PassThru`. Emit only the positive numeric
PID. No IWR, port/listener query, process lookup, cleanup, production, root, or
second action.

```text
call=4 launchAttemptCount=<0|1> passThruPidPresent=<0|1> fixturePid=<positive-integer-or-0> callPass=<0|1> nativeExit=<0|1>
```

### Call 5 - fixture readiness only

Inspect only the transported positive fixture PID for liveness. Run the proven
bounded suppressed root IWR on `http://127.0.0.1:4184/`; require HTTP 200. No
launch, listener query, cleanup, production, or root action.

```text
call=5 fixturePidInput=<positive-integer> pidInspectionCount=<0|1> processLive=<0|1> readinessAttempts=<integer> readinessStatus=<integer-or-NA> ready=<0|1> callPass=<0|1> nativeExit=<0|1>
```

### Call 6 - exactly one E2E evidence branch

This call is authorized only after Calls 0-5 exact PASS. Accept the exact root
token/digest and both numeric PIDs literally. Decode/recompute the root token
with the proven disposable SHA vector and re-prove exact contained root
identity. Inspect only the two transported PIDs for liveness. Do not launch,
perform readiness IWR, query listeners, or clean up.

Invoke exactly once:

```text
node playtest/e2e-playthrough.mjs
```

Use the exact FRRC-002 environment contract, retained QA root, frozen PBA
flags, and immutable identities/lineage above. Apply the existing 180000 ms
timeout. Do not pipe, truncate, duplicate, or asynchronously defer evidence.

After E2E ends, synchronously read exactly one diagnostic while the root
exists. Capture `checkInventoryExact`, `failureCount`, and `browserClosed`.

On nonzero E2E exit, non-exact inventory, positive failure count, or browser
not closed: emit no summary; invoke the accepted diagnostic transport exactly
once with 60000 ms timeout; capture full canonical compact sorted
`failurePaths` and `failuresByLayout` safe base64 plus lifecycle scalars; and
invoke no verifier.

Only on E2E exit 0, inventory exact, failure 0, and browser closed may the call
emit exactly one complete summary and invoke exactly one verifier. The summary
must cover all six layouts, full rail, both MH-40 outcomes, null-delta,
runtime/offline/performance, and all frozen accessibility/save/route/ending
meanings. Exact success requires verifier PASS. Diagnostic evidence remains
forbidden verifier input.

```text
call=6 rootTokenMatch=<0|1> rootShaDisposed=<0|1|NA> prodPidLive=<0|1> fixturePidLive=<0|1> e2eAttemptCount=<0|1> e2eExit=<integer-or-NA> checkInventoryExact=<0|1|NA> failureCount=<integer-or-NA> browserClosed=<0|1|NA> transportAttemptCount=<0|1> transportExit=<integer-or-NA> summaryCount=<0|1> verifierAttemptCount=<0|1> verifierPassCount=<0|1> outcome=<PRECONDITION_HOLD|DIAGNOSTIC_HOLD|SUCCESS> nativeExit=<0|1>
```

If E2E begins or returns, the sole budget is consumed regardless of result. No
repair, retry, alternate subset, second browser/diagnostic/transport/summary/
verifier, or same-shell rerun is authorized.

### Call 7 - mandatory fixture-PID cleanup only

Accept only the transported fixture PID, or 0 if Call 4 was rejected. Inspect
and stop only that positive PID once if live; bounded wait no more than 5
seconds; require exact PID absence and only port 4184 clear. No discovery,
substitution, other port/process, or root action.

```text
call=7 fixturePidInput=<positive-integer-or-0> pidInspectionCount=<0|1> stopAttemptCount=<0|1> boundedWaitMs=<0..5000> finalPidAbsent=<0|1> portQueryCount=<0|1> port4184Clear=<0|1> cleanupPass=<0|1> nativeExit=<0|1>
```

### Call 8 - mandatory production-PID cleanup only

Accept only the transported production PID, or 0 if Call 2 was rejected.
Inspect and stop only that positive PID once if live; bounded wait no more than
5 seconds; require exact PID absence and only port 4173 clear. No discovery,
substitution, other port/process, or root action.

```text
call=8 prodPidInput=<positive-integer-or-0> pidInspectionCount=<0|1> stopAttemptCount=<0|1> boundedWaitMs=<0..5000> finalPidAbsent=<0|1> portQueryCount=<0|1> port4173Clear=<0|1> cleanupPass=<0|1> nativeExit=<0|1>
```

If either final PID absence predicate fails, do not stop again; return the
exact PID/scalar to Mission for separate adjudication after completing every
other independently safe cleanup call.

### Call 9 - mandatory root cleanup only

Accept only the exact Call 1 token/digest. Decode/recompute with the disposable
SHA vector; require digest equality; normalize/resolve and re-prove exact leaf,
direct OS-temp parent, strict containment, repository exclusion, predecessor
distinction, and identity equality. Inspect only that exact root for emptiness,
delete once nonrecursively with `[System.IO.Directory]::Delete($resolvedRoot,
$false)`, and require absence. No alternate path, enumeration output, process,
port, launch, or retry.

```text
call=9 rootTokenMatch=<0|1> shaDisposed=<0|1|NA> identityPredicatesPass=<0|1> rootExistsBefore=<0|1> rootEmpty=<0|1> deleteAttemptCount=<0|1> rootDeleted=<0|1> cleanupPass=<0|1> nativeExit=<0|1>
```

## Return dispositions and preserved boundaries

Success requires every Call 0-9 exact PASS, Call 6 E2E attempt 1/exit 0,
diagnostic inventory exact/failure 0/browser closed, summary 1, verifier 1 PASS,
both PID cleanups, both ports clear, and root deleted. Return **`ONE FULLY
STAGED COMPLETE E2E PASS / DIAGNOSTIC 0 / BROWSER CLOSED / SUMMARY 1 / VERIFIER
1 PASS / EXACT CLEANUP / STOP / RETURN TO FRESH MISSION`**.

Diagnostic failure returns **`HOLD / DIAGNOSTIC FAILURE / FULL TRANSPORT /
NO VERIFIER / NO RERUN / EXACT CLEANUP RESULT / RETURN TO FRESH MISSION`**.
Pre-E2E failure/rejection returns **`HOLD / EXECUTION CONTROL / NO E2E / NO
RERUN / EXACT CLEANUP RESULT / RETURN TO FRESH MISSION`**.

The cumulative accepted gates and all eleven OPEN classifications remain
exact: VR-17, VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50,
and VR-53 Stage 4. None is waived, merged, closed, cured, or candidate evidence.

Diagnostic evidence remains non-release, forbidden verifier input, and no-
retry. Every frozen product, player, learning, privacy, save, accessibility,
route, world, MH-40, null-delta, `successor=null`, ending, media, and one-E2E
meaning remains exact.

No product/content/media/protected change, build, test, validator, PBA, formal
served-identity rerun, repository write, downstream stage, maturity advance,
release, schedule, automation, or reveal is authorized. Combat may not declare
`PRODUCTION FUNCTIONAL`.

Mission Captain signs **`FIRST RUN SHELL READY / FULLY STAGED ONE-E2E
DIAGNOSTIC-CONTROL VERIFICATION / FRSH-003-v1-VR-60`**.
