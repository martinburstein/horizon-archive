# First Run Shell Variance Reissue - One Failure-Transport Diagnostic Verification

Variance ID: `FRSH-003-v1-VR-45`

Disposition: **`FIRST RUN SHELL READY / ONE FAILURE-TRANSPORT DIAGNOSTIC
VERIFICATION / FRSH-003-v1-VR-45`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Immediate return: `FRCE-003-v1-VR-44`

Mission source inspected:
`0ac9023037873004f7bd5d75c16f80953d770a4d`

Diagnostic-transport candidate:
`6c64eb354b7dbb467df5725e2cae4eb67092ddc7`

Exact immutable product / validation / diagnostic / evidence identities:

```text
a91763e28d488f31f8cf7d40ece0b2682246ba9b
4cd7fbf31291671dd28c0743b44a7c49aaad82bb
2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc
ca89a679195c11d441a76e6c02983a6436f2ccb2
```

Recorded: **2026-08-10**

## Context reuse and construction adjudication

Fresh-child capacity remains unavailable. Root expressly authorized this
already-active Mission Captain context to adjudicate VR-44 and issue this
bounded verification. The reuse remains disclosed, is not candidate evidence,
and waives no boundary.

Mission accepts VR-44 construction and static control: exactly the authorized
E2E harness, new diagnostic extractor, FRRC-002 entry, and existing Sixfold
static control changed; FRRC JSON parsed; both changed Node files passed syntax;
the exact focused command passed unchanged `68/68`; candidate integrity passed.
No E2E, preview, browser, build, broader test, product, content, or media byte
changed.

The cumulative VR-22 tests/validators, VR-30 production build, VR-35 fixture
build and corrected PBA, and VR-42 formal served identity remain accepted
without rerun. The product candidate remains unchanged.

## Exact one-live-verification authority

Exact next owner is a **Combat Engineer**. A fresh context remains preferred;
disclose reuse if required.

Run one fail-closed wrapper:

1. Create exactly one new direct-child OS-temp root named
   `horizon-archive-frrc002-<lowercase-D-GUID>`. Apply the exact VR-43
   normalized parent, descendant, repository-exclusion, anchored-name,
   pre-nonexistence, and disclosed-predecessor-distinctness checks before
   creation and deletion. Emit no path.
2. Require exact ports `4173/4184` clear. Launch production and TD-012 fixture
   once each with the accepted hidden PassThru-owned vectors and obtain root
   readiness `200/200`. Do not rerun formal served identity.
3. Run exactly one complete E2E, timeout `180000ms`:

```text
node playtest/e2e-playthrough.mjs
```

   Use the exact fresh root; immutable product candidate
   `a91763e28d488f31f8cf7d40ece0b2682246ba9b`; diagnostic/probe candidate
   `2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`; and the three frozen PBA/media
   environment flags. Capture and suppress the stream. No second E2E is
   authorized.
4. Address only literal `first-run-live-diagnostic.json`. Require one valid
   diagnostic, inventory exact, integer failure count, and owned-lifecycle
   `browserClosed` value.
5. On E2E failure, require failure count greater than zero and no summary. Run
   exactly once, timeout `60000ms`, the manifest `diagnostic-transport` entry:

```text
node playtest/first-run-diagnostic-transport.mjs
```

   Set its exact QA-root and diagnostic-path environment. Capture its one-line
   scalar before deleting the root. Require exit `0`; full counts; nonempty,
   untruncated standard base64; canonical compact UTF-8 round-trip containing
   the complete ordinal-sorted `failurePaths`, complete sorted
   `failuresByLayout`, and owned-lifecycle `browserClosed`. Emit no decoded
   failure, raw JSON, path, or diagnostic. Do not run the summary verifier.
6. On E2E success, require inventory exact, failure count `0`, browser closed,
   exactly one summary, all six layouts/full rail/both equal MH-40/null/runtime/
   offline/performance gates, then run the exact manifest summary verifier once
   and require PASS. Do not run diagnostic transport on the success path.
7. In an unconditional final block, stop both preview PIDs, prove both ports
   clear, retain any captured base64 in memory, re-prove exact-root boundaries,
   delete only the fresh root, require it absent, then emit the scalar. Cleanup
   must occur after failure transport capture and before scalar emission.

Emit exactly one ordered scalar line:

```text
resultMode=<success|failure-transport|control-failure> rootContainmentPass=<0|1> rootCreated=<0|1> prePortClearCount=<0..2> productionPid=<int> fixturePid=<int> readinessStatusCount=<0..2> e2eRunCount=<0|1> e2eExit=<int> e2eDurationMs=<int> diagnosticCount=<0|1> checkInventoryExact=<0|1> failureCount=<int> transportRunCount=<0|1> transportExit=<int> failurePathCount=<int> failureLayoutCount=<int> browserClosed=<0|1> failureDetailBytes=<int> failureDetailBase64=<base64|none> summaryCount=<0|1> verifierRunCount=<0|1> verifierExit=<int> verifierPass=<0|1> cleanupAttemptCount=<0..2> productionPidStopped=<0|1> fixturePidStopped=<0|1> portClearCount=<0..2> rootDeleted=<0|1> nativeExit=<0|1>
```

`success` requires E2E `1/0`, diagnostic inventory exact/failure `0`, transport
run `0`, failure detail `none`, summary `1`, verifier `1/0/1`, browser closed,
and exact cleanup. `failure-transport` requires E2E run `1` with nonzero exit,
inventory exact, positive failure count, summary/verifier `0/0`, transport
`1/0`, full count-consistent nonempty base64, browser closed, and exact cleanup.
Either correctly completed mode may use native exit `0`; only `success` is live
PASS. Every other combination is `control-failure` with native exit `1`.

Return respectively:

- **`ONE COMPLETE DIAGNOSTIC-CONTROL VERIFICATION PASS / STOP / RETURN TO
  FRESH MISSION`**;
- **`COMPLETE E2E FAILURE / FAILURE TRANSPORT PASS / DIAGNOSTIC ONLY / HOLD /
  NO VERIFIER / NO RERUN / RETURN TO FRESH MISSION`**; or
- **`HOLD / FAILURE-TRANSPORT DIAGNOSTIC CONTROL FAILURE / NO RERUN / RETURN
  TO FRESH MISSION`**.

No retry, diagnosis, repair, second E2E, second extractor, failure-detail use
as verifier input, product change, build, test, validator, PBA, served-identity
rerun, or post-cleanup command is authorized.

## Preserved boundaries

All seven OPEN divergences remain separate and OPEN: VR-17 protected-path
enumeration; VR-23 broad filename enumeration; VR-24 untracked pathname
enumeration; VR-25 and VR-28 literal control pathname output; VR-39 exact-port
listener ownership recovery; and VR-41 parser diagnostic scalar output. None
is waived, merged, closed, cured, or used as candidate evidence.

All frozen player, learning, privacy, save, accessibility, route, world,
MH-40, null-delta, `successor=null`, ending, media, diagnostic non-verifier,
and one-E2E meanings remain exact. No downstream stage, release, maturity,
schedule, automation, reveal, or `FIRST RUN COMPLETE` action is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / ONE FAILURE-TRANSPORT
DIAGNOSTIC VERIFICATION / FRSH-003-v1-VR-45`**.
