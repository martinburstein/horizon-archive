# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`FIRST RUN SHELL READY / ONE COMPLETE DIAGNOSTIC-
CONTROL VERIFICATION / FRSH-003-v1-VR-43`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Exact next owner: **Combat Engineer**

Immediate control: `FRSH-003-v1-VR-43`

Immediate return / predecessor authority: Combat VR-42 corrected formal
pre-live served-identity PASS / `FRSH-003-v1-VR-42`

Mission VR-43 predecessor source:
`a6376d040798ecd11fc4d279f3d55e914012dadf`

Exact immutable product candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Exact diagnostic candidate:
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Mission accepts the cumulative immutable ladder: VR-22 tests/validators;
VR-30 production build; VR-35 fixture build and corrected PBA; VR-42 formal
production/fixture served identity. The product candidate is unchanged. Seven
OPEN divergences remain process/control-only and unwaived.

Fresh-child capacity remains unavailable, so root expressly authorized this
Mission context reuse. The disclosed limitation is not candidate evidence and
waives no boundary.

Combat may run exactly one complete diagnostic-control verification. Create
one new direct-child OS-temp root named
`horizon-archive-frrc002-<lowercase-D-GUID>`, prove exact containment,
repository exclusion, nonexistence, and distinction from the disclosed
predecessor root. Launch production and fixture exactly once with owned PIDs,
prove root readiness, then run exactly once with timeout `180000ms`:

```text
node playtest/e2e-playthrough.mjs
```

Use product `a91763e28d488f31f8cf7d40ece0b2682246ba9b`, diagnostic/probe
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`, and the exact fresh root. Require
E2E exit `0`, exactly one diagnostic with `checkInventoryExact=true` and
`failureCount=0`, exactly one summary, all six layouts, full rail, both equal
MH-40 outcomes, null outcome, runtime/offline/performance gates, and only then
exactly one manifest verifier PASS. On diagnostic failure do not run verifier.

Unconditionally stop both preview PIDs, require browser closed and both ports
clear, then re-prove exact-root containment/distinctness and delete only the
fresh root. Emit exactly one scalar line:

```text
rootContainmentPass=<0|1> rootDistinctPass=<0|1> rootCreated=<0|1> prePortClearCount=<0..2> productionPid=<int> fixturePid=<int> readinessStatusCount=<0..2> e2eRunCount=<0|1> e2eExit=<int> e2eDurationMs=<int> diagnosticCount=<0|1> checkInventoryExact=<0|1> failureCount=<int> summaryCount=<0|1> sixLayoutsPass=<0|1> fullRailPass=<0|1> bothMh40Pass=<0|1> nullOutcomePass=<0|1> runtimeOfflinePass=<0|1> performancePass=<0|1> verifierRunCount=<0|1> verifierExit=<int> verifierPass=<0|1> cleanupAttemptCount=<0..2> productionPidStopped=<0|1> fixturePidStopped=<0|1> browserClosed=<0|1> portClearCount=<0..2> rootDeleted=<0|1> nativeExit=<0|1>
```

On exact PASS return **`ONE COMPLETE DIAGNOSTIC-CONTROL VERIFICATION PASS /
STOP / RETURN TO FRESH MISSION`**. Otherwise return **`HOLD / ONE COMPLETE
DIAGNOSTIC-CONTROL VERIFICATION FAILURE / DIAGNOSTIC ONLY / NO RERUN / RETURN
TO FRESH MISSION`**. Stop after cleanup; no retry, diagnosis, repair, second
E2E/verifier, product change, or post-cleanup command.

All seven OPEN divergences remain separate and OPEN:

- **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN / VR-17`**;
- **`UNAUTHORIZED DIVERGENCE / BROAD REPOSITORY FILENAME ENUMERATION / OPEN /
  VR-23`**;
- **`UNAUTHORIZED DIVERGENCE / UNTRACKED PATHNAME ENUMERATION / OPEN / VR-24
  COMBAT ATTEMPT`**;
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-25
  MISSION`**;
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-28
  MISSION STAGING`**;
- **`UNAUTHORIZED DIVERGENCE / EXACT-PORT LISTENER OWNERSHIP RECOVERY / OPEN /
  VR-39`**; and
- **`UNAUTHORIZED DIVERGENCE / PARSER DIAGNOSTIC SCALAR OUTPUT / OPEN /
  VR-41`**.

None is waived, merged, closed, cured, or used as candidate evidence.

No Quartermaster, Image Specialist, Intelligence, release, schedule,
automation, or `FIRST RUN COMPLETE` action is authorized.

VR-43 and this synchronized handoff are the only administrative repository
writes.
