# First Run Functional Report - Four-Stage Corrected Verification

Report ID: `FRCE-003-v1-VR-50`

Disposition: **`HOLD / STAGE-1 POST-CREATE ROOT-PROOF FAILURE / ROOT DELETED /
NO LIVE ACTION / NO E2E / NO RERUN / RETURN TO FRESH MISSION`**

Governing shell: `FRSH-003-v1-VR-50`

Starting revision: `fb7dbee986f96a290274510a3a109f490ff65dff`

Geometry correction / diagnostic transport / report lineage:

```text
8aa1dcaf2d5a347cc21ec48a4d6022485fe7cd97
6c64eb354b7dbb467df5725e2cae4eb67092ddc7
0ac9023037873004f7bd5d75c16f80953d770a4d
```

Recorded: **2026-08-10**

## Context reuse

Fresh-child capacity remained unavailable, so root expressly authorized the
existing Combat context to execute VR-50. Context reuse is disclosed and is
not candidate evidence.

## Exact Stage 1 outcome

Combat ran exactly one Stage 1 PowerShell call. Pre-creation containment
completed far enough to create one new directory. Creation succeeded and the
directory existed. A later post-create identity predicate failed before the
root identity was retained or its base64/digest transport was emitted.

The Stage 1 authorized failure `finally` branch resolved the same candidate,
confirmed it was empty, attempted cleanup exactly once, and deleted it. The
stage emitted:

```text
stage=1 rootControlPass=0 preExists=0 createAttemptCount=1 createExit=0 postExists=1 rootRetained=0 failureRootCleanupAttempt=1 failureRootDeleted=1 rootTokenB64= rootTokenSha256= nativeExit=1
```

No second root attempt, investigation, substitution, reformulation, directory
listing, pathname output, port query, process, preview, readiness request,
browser, E2E, diagnostic, extractor, summary, verifier, build, test, validator,
PBA, product, media, protected-path, predecessor-root, or user-state action
ran.

Stages 2 and 3 were forbidden because Stage 1 did not pass and emitted no
valid root token. The root was already deleted by the exact Stage 1 failure
cleanup, and no PID or retained identity existed for Stage 4. Combat did not
invent an empty token, infer a path, or perform an alternate cleanup call.

## Classification

This is **`REQUIRED CORRECTION / EXECUTION CONTROL / STAGE-1 POST-CREATE ROOT
PROOF / OPEN / VR-50`**. It establishes no defect in the accepted VR-48 root
protocol, geometry correction, product, preview, browser journey, diagnostic,
transport, summary, or verifier. The E2E invocation count remains zero.

Fresh Mission must adjudicate the exact post-create proof failure and issue a
new bounded localization/verification authority or HOLD. Combat does not
reuse, debug, or rerun VR-50.

## Preserved controls

Immutable product / validation / diagnostic / evidence identities remain:

```text
a91763e28d488f31f8cf7d40ece0b2682246ba9b
4cd7fbf31291671dd28c0743b44a7c49aaad82bb
2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc
ca89a679195c11d441a76e6c02983a6436f2ccb2
```

The cumulative accepted gates and all nine OPEN classifications remain exact.
The VR-49 tool-policy rejection remains non-executed/non-evidence. The new
VR-50 execution-control classification is separate; Mission alone may
adjudicate its final registry treatment.

Diagnostic output remains non-release, forbidden verifier input, and no-retry.
All frozen player, learning, privacy, save, accessibility, route, world,
MH-40, null-delta, `successor=null`, ending, media, and one-E2E meanings remain
exact. No downstream stage, release, schedule, automation, reveal, maturity,
or `FIRST RUN COMPLETE` action is authorized.

