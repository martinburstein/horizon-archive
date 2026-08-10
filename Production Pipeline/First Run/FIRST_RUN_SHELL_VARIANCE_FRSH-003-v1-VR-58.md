# First Run Shell Variance Reissue - Exact PID-16040 Cleanup Verification Only

Variance ID: `FRSH-003-v1-VR-58`

Disposition: **`FIRST RUN SHELL READY / EXACT PID-16040 CLEANUP VERIFICATION
ONLY / FRSH-003-v1-VR-58`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Mission source inspected:
`7f76d6a45e07874d074c42f1bc7c847fabfcbfd2`

Recorded: **2026-08-10**

## Context reuse and VR-57 adjudication

Fresh-child capacity remains unavailable. Root expressly authorized this
Mission Captain context to adjudicate VR-57 and issue exact cleanup
verification. The reuse is disclosed, is not candidate evidence, and waives no
boundary.

Mission accepts the VR-57 production control evidence:

- the hidden direct Node/Vite `Start-Process -PassThru` launch passed and
  returned exact numeric PID `16040`;
- the transported-PID readiness call found the process live and received root
  HTTP 200 on its first bounded IWR attempt;
- cleanup attempted to stop PID `16040` exactly once;
- loopback port 4173 was clear afterward; but
- the post-stop exact-PID absence predicate returned 0.

No fixture, browser, E2E, diagnostic, transport, summary, or verifier action
ran. The E2E invocation count remains zero.

Mission classifies **`REQUIRED VERIFICATION / EXECUTION CONTROL / POST-STOP PID
ABSENCE / VR-57 CALL D`**. It is not a production/candidate finding and does
not currently add a twelfth OPEN classification. The exact-PID verification
below must determine whether cleanup is complete or unresolved; it may not
generalize to any process or listener.

## Exact cleanup-verification authority

Exact next owner is a **fresh Combat Engineer** if capacity permits; otherwise
context reuse must be disclosed. Execute one bounded PowerShell call. Use
literal PID `16040` and literal loopback port `4173`. Suppress process objects,
paths, command output, listener details, errors, and exceptions. Emit only the
ordered scalar.

1. Call `Get-Process -Id 16040 -ErrorAction SilentlyContinue` exactly once and
   suppress the object after scalar extraction. Do not enumerate processes.
2. If no process is returned, set initial absence 1, do not attempt a stop, and
   continue to the exact-port clear check.
3. If a process is returned, require its numeric ID equals `16040` and its
   scalar process name equals `node` ordinal-ignore-case. Do not inspect or emit
   executable path, command line, parent process, modules, handles, owner, or
   any other process.
4. Only when both exact PID and Node identity pass, invoke one
   `Stop-Process -Id 16040 -Force -ErrorAction SilentlyContinue` attempt. No
   second stop is authorized.
5. After the one conditional stop, use a bounded wait totaling no more than 5
   seconds and test only PID `16040` for absence. Do not inspect another PID.
6. Query only `127.0.0.1:4173` once after process handling and require no
   listener. Do not emit or adopt a listener PID, enumerate listeners, stop a
   listener owner, or query any other port.

Emit exactly:

```text
stage=pid-cleanup-verification pidInput=16040 initialPidInspectionCount=1 initialPidAbsent=<0|1> pidIdentityMatch=<0|1|NA> nodeIdentityMatch=<0|1|NA> conditionalStopAttemptCount=<0|1> boundedWaitMs=<0..5000> finalPidAbsent=<0|1> portQueryCount=<0|1> port4173Clear=<0|1> cleanupVerificationPass=<0|1> nativeExit=<0|1>
```

Use `NA` for identity predicates when PID `16040` was initially absent. Exact
PASS is either:

- initial PID absent 1, identity fields `NA`, stop attempts/wait 0/0, final
  absence 1; or
- initial PID absent 0, exact PID/Node identity 1/1, one stop attempt, bounded
  wait no more than 5000 ms, final absence 1;

and in either case port query/clear 1/1, cleanup-verification pass 1, native
exit 0.

On exact PASS return **`EXACT PID-16040 CLEANUP VERIFIED / PID ABSENT / PORT
4173 CLEAR / NO LIVE / STOP / RETURN TO FRESH MISSION`**. Any identity mismatch,
final presence, active port, tool rejection, parse failure, or other scalar
returns **`HOLD / EXACT PID CLEANUP UNRESOLVED / NO ALTERNATE PID / NO RETRY /
RETURN TO FRESH MISSION`**.

This authority permits one exact-PID inspection, at most one conditional stop,
one bounded absence wait, and one exact-port query. No retry or reformulation
is authorized.

## Preserved controls and boundaries

Geometry correction / transport lineage remains
`8aa1dcaf2d5a347cc21ec48a4d6022485fe7cd97` /
`6c64eb354b7dbb467df5725e2cae4eb67092ddc7`. Immutable product, validation,
diagnostic/probe, and evidence identities remain
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`,
`4cd7fbf31291671dd28c0743b44a7c49aaad82bb`,
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`, and
`ca89a679195c11d441a76e6c02983a6436f2ccb2`.

The cumulative accepted gates and eleven OPEN classifications remain exact:
VR-17, VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, and
VR-53 Stage 4. The VR-57 cleanup predicate is pending verification and is not
silently merged with or used to close any OPEN item.

The single E2E budget remains unspent. Diagnostic evidence remains non-release,
forbidden verifier input, and no-retry. Every frozen product, player, learning,
privacy, save, accessibility, route, world, MH-40, null-delta,
`successor=null`, ending, media, and one-E2E meaning remains exact.

No other process/listener/path inspection, alternate PID, second stop, port-
owner recovery, fixture, root/filesystem, deep/assets, formal served identity,
browser, E2E, diagnostic, transport, summary, verifier, build, test, validator,
PBA, product/media/protected action, repository write, downstream stage, or
release action is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / EXACT PID-16040 CLEANUP
VERIFICATION ONLY / FRSH-003-v1-VR-58`**.
