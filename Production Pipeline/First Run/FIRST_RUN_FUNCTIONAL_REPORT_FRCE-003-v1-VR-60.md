# First Run Functional Report - Fully Staged One-E2E Verification

Report ID: `FRCE-003-v1-VR-60`

Disposition: **`HOLD / COMPLETE CORRECTED E2E PASS / DIAGNOSTIC 0 / SUMMARY 1
/ VERIFIER 1 PASS / PID CLEANUP PASS / ROOT NONEMPTY / RETAINED TOKEN / RETURN
TO FRESH MISSION`**

Governing shell: `FRSH-003-v1-VR-60`

Starting revision: `40772a3185642c79dc47ad17f5cb6df0c33722fb`

Recorded: **2026-08-10**

## Context reuse

Fresh-child capacity remained unavailable, so root expressly authorized the
existing Combat context to execute VR-60. Context reuse is disclosed and is
not candidate evidence.

## Exact ten-call evidence

Call 0 passed exact two-port preclear:

```text
call=0 portQueryCount=2 portsClearCount=2 callPass=1 nativeExit=0
```

Call 1 passed root containment and corrected durable token transport:

```text
call=1 rootPredicatesPass=1 tokenPredicatesPass=1 shaCorrectionPass=1 rootRetained=1 rootTokenB64=QzpcVXNlcnNcbWFydGlcQXBwRGF0YVxMb2NhbFxUZW1wXGhvcml6b24tYXJjaGl2ZS1mcnJjMDAyLTg1YmRjYmQzLThlZjctNGU3OC1iZGNiLWVjODgxNDFhMDczZQ== rootTokenSha256=1c6a6df084f9917a37b27c1035f00929b9457b460aad323d1c4b65882dbd0654 failureCleanupAttempt=0 failureRootDeleted=0 callPass=1 nativeExit=0
```

Calls 2 and 3 passed production launch/readiness:

```text
call=2 launchAttemptCount=1 passThruPidPresent=1 prodPid=30248 callPass=1 nativeExit=0
call=3 prodPidInput=30248 pidInspectionCount=1 processLive=1 readinessAttempts=1 readinessStatus=200 ready=1 callPass=1 nativeExit=0
```

Calls 4 and 5 passed fixture launch/readiness:

```text
call=4 launchAttemptCount=1 passThruPidPresent=1 fixturePid=37996 callPass=1 nativeExit=0
call=5 fixturePidInput=37996 pidInspectionCount=1 processLive=1 readinessAttempts=1 readinessStatus=200 ready=1 callPass=1 nativeExit=0
```

Call 6 consumed exactly one complete E2E and passed its only lawful success
branch:

```text
call=6 rootTokenMatch=1 rootShaDisposed=1 prodPidLive=1 fixturePidLive=1 e2eAttemptCount=1 e2eExit=0 checkInventoryExact=1 failureCount=0 browserClosed=1 transportAttemptCount=0 transportExit=NA summaryCount=1 verifierAttemptCount=1 verifierPassCount=1 outcome=SUCCESS nativeExit=0
```

This proves one exact diagnostic with an exact inventory and zero failures,
owned-browser closure, exactly one complete summary, and exactly one passing
independent verifier. The diagnostic transport did not run and diagnostic
evidence was not verifier input. No retry, second E2E, second diagnostic,
second summary, or second verifier occurred.

Calls 7 and 8 passed exact-PID cleanup and port clearance:

```text
call=7 fixturePidInput=37996 pidInspectionCount=1 stopAttemptCount=1 boundedWaitMs=23 finalPidAbsent=1 portQueryCount=1 port4184Clear=1 cleanupPass=1 nativeExit=0
call=8 prodPidInput=30248 pidInspectionCount=1 stopAttemptCount=1 boundedWaitMs=21 finalPidAbsent=1 portQueryCount=1 port4173Clear=1 cleanupPass=1 nativeExit=0
```

Call 9 re-proved the root token and exact contained identity, then failed
closed before deletion because the successful E2E root was not empty:

```text
call=9 rootTokenMatch=1 shaDisposed=1 identityPredicatesPass=1 rootExistsBefore=1 rootEmpty=0 deleteAttemptCount=0 rootDeleted=0 cleanupPass=0 nativeExit=1
```

No deletion was attempted. Combat did not enumerate entry names, remove an
artifact, use recursive deletion, infer another path, or retry. The run itself
proved exactly one diagnostic and one summary, so those two known owned
artifacts explain why an empty-root-only cleanup contract cannot pass after a
successful verification. Mission must independently adjudicate exact artifact-
aware cleanup; Combat does not broaden authority.

## Retained cleanup authority

```text
rootTokenB64=QzpcVXNlcnNcbWFydGlcQXBwRGF0YVxMb2NhbFxUZW1wXGhvcml6b24tYXJjaGl2ZS1mcnJjMDAyLTg1YmRjYmQzLThlZjctNGU3OC1iZGNiLWVjODgxNDFhMDczZQ==
rootTokenSha256=1c6a6df084f9917a37b27c1035f00929b9457b460aad323d1c4b65882dbd0654
prodPid=30248
fixturePid=37996
```

Both transported PIDs are already proven absent and ports 4173/4184 are
proven clear. The token/digest above are the sole lawful root identity for a
future cleanup pass.

## Classification and preserved controls

Combat returns **`REQUIRED CORRECTION / EVIDENCE CLEANUP CONTRACT / SUCCESS-
ARTIFACT-AWARE ROOT DELETION / OPEN / VR-60 CALL 9`**. This is not a product,
geometry, journey, layout, runtime, performance, diagnostic, summary, or
verifier failure. `PRODUCTION FUNCTIONAL` is not declared until cleanup and
Mission adjudication complete.

Geometry correction / diagnostic transport lineage remains:

```text
8aa1dcaf2d5a347cc21ec48a4d6022485fe7cd97
6c64eb354b7dbb467df5725e2cae4eb67092ddc7
0ac9023037873004f7bd5d75c16f80953d770a4d
```

Immutable product / validation / diagnostic / evidence identities remain:

```text
a91763e28d488f31f8cf7d40ece0b2682246ba9b
4cd7fbf31291671dd28c0743b44a7c49aaad82bb
2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc
ca89a679195c11d441a76e6c02983a6436f2ccb2
```

The cumulative accepted gates and all eleven prior OPEN classifications remain
exact. Mission alone may decide whether VR-60 Call 9 creates another OPEN
classification or is a bounded cleanup-contract correction.

Diagnostic output remains non-release and forbidden verifier input. All
frozen player, learning, privacy, save, accessibility, route, world, MH-40,
null-delta, `successor=null`, ending, media, and one-E2E meanings remain exact.
No product/content/media/protected change, build, test, validator, PBA, formal
served-identity rerun, downstream stage, maturity advance, release, schedule,
automation, reveal, or `FIRST RUN COMPLETE` action is authorized.

