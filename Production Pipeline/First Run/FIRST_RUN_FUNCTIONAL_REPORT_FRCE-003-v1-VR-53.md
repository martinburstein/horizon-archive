# First Run Functional Report - Corrected Four-Stage Verification

Report ID: `FRCE-003-v1-VR-53`

Disposition: **`HOLD / STAGE-2 TOOL REJECTION / STAGE-4 PARSER FAILURE /
RETAINED ROOT TOKEN / NO E2E / NO RERUN / RETURN TO FRESH MISSION`**

Governing shell: `FRSH-003-v1-VR-53`

Starting revision: `d78d064f3f994b8f0a3cd5ab2f48c05ce70a446e`

Geometry correction / diagnostic transport / report lineage:

```text
8aa1dcaf2d5a347cc21ec48a4d6022485fe7cd97
6c64eb354b7dbb467df5725e2cae4eb67092ddc7
0ac9023037873004f7bd5d75c16f80953d770a4d
```

Recorded: **2026-08-10**

## Context reuse

Fresh-child capacity remained unavailable, so root expressly authorized the
existing Combat context to execute VR-53. Context reuse is disclosed and is
not candidate evidence.

## Stage 1 - PASS

Exactly one Stage 1 call created and retained one fresh root. Every root,
identity, strict UTF-8, standard base64, disposable SHA, hex-shape,
recomputation, and transport predicate passed:

```text
stage=1 rootPredicatesPass=1 identityTokenPredicatesPass=1 sha1Created=1 sha1Computed=1 sha1Disposed=1 sha1HexShapesPass=1 sha2Created=1 sha2Computed=1 sha2Disposed=1 sha2HexShapesPass=1 digestRecomputeMatch=1 rootRetained=1 rootTokenB64=QzpcVXNlcnNcbWFydGlcQXBwRGF0YVxMb2NhbFxUZW1wXGhvcml6b24tYXJjaGl2ZS1mcnJjMDAyLTRkMjliOWQ2LTYzMzItNGM3Yy04ODdhLTcwMWI3ZDFmOGEzNQ== rootTokenSha256=f9f20ff1dc54ca62993715bbc94d514f0f89570929b438bdf7b006c4a5ab703d failureRootCleanupAttempt=0 failureRootDeleted=0 stagePass=1 nativeExit=0
```

The token/digest above are the only lawful retained-root identity transport.
No raw path or GUID was emitted.

## Stage 2 - non-executed rejection

The submitted preview-only Stage 2 call was rejected by the command safety
layer before PowerShell execution. It performed no token decode, port query,
launch, PID acquisition, readiness request, preview, or in-call cleanup.

Per VR-53, this non-executed rejection exhausted the shell and prohibited
reformulation. Stage 3 did not run. E2E, diagnostic, transport, summary, and
verifier invocation counts remain zero.

## Stage 4 - parser failure, cleanup not executed

Combat submitted the independently authorized Stage 4 cleanup call with the
exact Stage 1 token/digest and numeric PIDs `0/0`. PowerShell rejected it at
parse time because the compact `foreach` statements omitted required spacing
before `in`. Exit was `1`; no Stage 4 scalar was emitted.

The parser failure occurred before token verification, PID handling, port
queries, root resolution, or deletion. No cleanup action executed. Combat did
not reformulate, retry, discover a path, or infer an alternate target.

Because Stage 1 retained a root and neither later call executed cleanup, the
root token/digest remain valid recovery authority. Combat does not claim root
absence. Fresh Mission must issue an exact token-bound cleanup authority or
HOLD; it must not enumerate, discover, infer, or substitute a path.

## Classification

The Stage 2 rejection is **`EXECUTION-CONTROL REJECTION / TOOL SAFETY /
NON-EXECUTED / VR-53 STAGE 2`**. The Stage 4 failure is **`REQUIRED CORRECTION
/ EXECUTION CONTROL / CLEANUP PARSER / RETAINED ROOT / OPEN / VR-53 STAGE 4`**.
Neither is a geometry-candidate, product, preview, browser, diagnostic,
transport, summary, or verifier finding.

## Preserved controls

Immutable product / validation / diagnostic / evidence identities remain:

```text
a91763e28d488f31f8cf7d40ece0b2682246ba9b
4cd7fbf31291671dd28c0743b44a7c49aaad82bb
2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc
ca89a679195c11d441a76e6c02983a6436f2ccb2
```

The cumulative accepted gates and all ten existing OPEN classifications remain
exact. VR-49 remains non-executed/non-evidence; VR-51/VR-52 remain localization
and correction evidence under VR-50. Mission alone may adjudicate whether the
new Stage 4 cleanup parser failure adds another registry classification.

Diagnostic evidence remains non-release, forbidden verifier input, and no-
retry. All frozen player, learning, privacy, save, accessibility, route,
world, MH-40, null-delta, `successor=null`, ending, media, and one-E2E meanings
remain exact. No downstream stage, release, schedule, automation, reveal,
maturity, or `FIRST RUN COMPLETE` action is authorized.

