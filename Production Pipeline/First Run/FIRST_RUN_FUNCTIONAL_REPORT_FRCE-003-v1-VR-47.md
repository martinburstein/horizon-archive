# First Run Functional Report - Corrected Diagnostic-Control Verification

Report ID: `FRCE-003-v1-VR-47`

Disposition: **`HOLD / CORRECTED DIAGNOSTIC-CONTROL PRE-ROOT FAILURE / NO E2E
/ NO RERUN / RETURN TO FRESH MISSION`**

Governing shell: `FRSH-003-v1-VR-47`

Starting revision: `9c7701a7ff3990aa35d6460de1545e8bf572151a`

Geometry correction candidate:
`8aa1dcaf2d5a347cc21ec48a4d6022485fe7cd97`

Diagnostic transport / report lineage:
`6c64eb354b7dbb467df5725e2cae4eb67092ddc7` /
`0ac9023037873004f7bd5d75c16f80953d770a4d`

Recorded: **2026-08-10**

## Context reuse

Fresh-child capacity remained unavailable, so root expressly authorized the
existing Combat context to execute VR-47. Context reuse is disclosed and is
not candidate evidence.

## Exact outcome

The initial monolithic fail-closed wrapper was rejected by the command safety
layer before execution. It created no root or process and consumed no E2E,
extractor, or verifier invocation.

Combat then expressed the same shell as smaller owned stages. The first stage
was limited to source/ancestry checks and fresh-root containment/create. That
stage did not return the required root-creation scalar. The orchestrator failed
closed before retaining a root identity or advancing to preview launch.

No second containment/create attempt, diagnosis command, substitution, repair,
preview, browser, E2E, diagnostic read, transport extractor, summary, verifier,
build, test, product, media, protected-path, predecessor-root, or user-state
action ran.

The exact emitted control scalar was:

```text
resultMode=control-failure rootContainmentPass=0 rootCreated=0 prePortClearCount=0 productionPid=0 fixturePid=0 readinessStatusCount=0 e2eRunCount=0 e2eExit=-1 e2eDurationMs=0 diagnosticCount=0 checkInventoryExact=0 failureCount=-1 transportRunCount=0 transportExit=-1 failurePathCount=0 failureLayoutCount=0 browserClosed=0 failureDetailBytes=0 failureDetailBase64= summaryCount=0 summaryBytes=0 summarySha256= verifierRunCount=0 verifierExit=-1 verifierPass=0 cleanupAttemptCount=2 productionPidStopped=1 fixturePidStopped=1 portClearCount=2 rootDeleted=0 nativeExit=1 errorStage=control
```

The two exact ports were observed clear in the no-process cleanup branch.
`rootDeleted=0` means no owned root identity was retained or claimed; it does
not establish a leftover owned root. No path was emitted or enumerated.

## Classification

Combat classifies this as **`REQUIRED CORRECTION / EXECUTION CONTROL /
PRE-ROOT SCALAR TRANSPORT / OPEN / VR-47`**. It establishes no defect in the
accepted geometry correction, product, preview, browser journey, diagnostic,
or verifier because none of those stages ran.

The sole corrected E2E authority remains unconsumed as an E2E invocation, but
Combat does not self-reauthorize or retry it. Fresh Mission must adjudicate
whether to issue a newly versioned containment-localization or one-verification
authority. Mission must not infer product or diagnostic acceptance from this
return.

## Preserved controls

Immutable product / validation / diagnostic / evidence identities remain:

```text
a91763e28d488f31f8cf7d40ece0b2682246ba9b
4cd7fbf31291671dd28c0743b44a7c49aaad82bb
2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc
ca89a679195c11d441a76e6c02983a6436f2ccb2
```

All eight existing OPEN divergences remain separate and OPEN: VR-17,
VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, and VR-46. The new VR-47
execution-control classification is separate and does not merge, waive, cure,
or close any predecessor.

Diagnostic output remains non-release, forbidden verifier input, and no-retry.
All frozen player, learning, privacy, save, accessibility, route, world,
MH-40, null-delta, `successor=null`, ending, media, and one-E2E meanings remain
exact. No downstream stage, release, schedule, automation, reveal, maturity,
or `FIRST RUN COMPLETE` action is authorized.

