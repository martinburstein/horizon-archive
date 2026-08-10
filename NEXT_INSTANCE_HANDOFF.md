# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`FIRST RUN SHELL READY / PRE-LIVE SERVED-IDENTITY STAGE
LOCALIZATION ONLY / FRSH-003-v1-VR-37`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Exact next owner: **Combat Engineer**

Immediate control: `FRSH-003-v1-VR-37`

Immediate return / predecessor authority: Combat VR-36 pre-live preview and
served-identity failure / `FRSH-003-v1-VR-36`

Mission VR-37 predecessor source:
`97b243f33952e85a94342174ddf26e4cb5010f36`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Mission accepts VR-36's exact fail-closed scalar: production root/deep `0`,
production assets `0`, fixture root/deep `0`, fixture assets `0`, cleanup `0`,
ports clear `2`, native exit `1`. No stage detail, pathname, preview stream,
browser, or E2E output was emitted, and both assigned ports were clear at
return. The failure cannot yet be attributed to preview launch, readiness,
HTTP status, disk/served matching, or wrapper control.

Mission attempted to spawn a fresh child context, but the agent thread limit
rejected it before any child ran. Root expressly authorized this Mission
context reuse. This disclosed coordination limitation is not candidate
evidence and waives no boundary.

Combat may execute only the VR-37 localization wrapper against the existing
manifest-owned production and TD-012 fixture preview/identity implementation
from `FRSH-003-v1-VR-07` on ports `4173` and `4184`. A fresh context remains
preferred; disclose reuse if thread limits require it.

Run once, fail forward to unconditional owned-PID cleanup at the first failed
stage, and emit exactly one ordered scalar line:

```text
productionStartExit=<int> productionPid=<int> fixtureStartExit=<int> fixturePid=<int> productionReadinessAttempts=<int> productionReadinessStatus=<int> fixtureReadinessAttempts=<int> fixtureReadinessStatus=<int> productionHttp200Count=<int> fixtureHttp200Count=<int> productionAssetMatchCount=<int> fixtureAssetMatchCount=<int> cleanupAttemptCount=<int> productionPidStopped=<0|1> fixturePidStopped=<0|1> portClearCount=<int> localizedStage=<0..7> nativeExit=<0|1>
```

Stages are exact: production start/PID; fixture start/PID; production
readiness attempts/final status; fixture readiness attempts/final status;
production then fixture root/deep HTTP-200 counts; production then fixture
JS/CSS disk/served byte-match counts; unconditional owned-PID stop attempts and
two-port clear check. Initialize unreached numeric fields to `-1`, absent PIDs
to `0`, and unreached statuses to `-1`. Suppress streams, requests, responses,
hashes, bytes, pathnames, filenames, asset references, and diagnostics.

Use `localizedStage=0` only if both launch exits are `0`, both PIDs are
positive, both readiness statuses are `200`, HTTP counts are `2/2`, asset
matches are `2/2`, every owned PID received one stop attempt and is stopped,
ports clear are `2`, and native exit is `0`. Otherwise emit the first failed
stage number and native exit `1`, while still reporting truthful cleanup.

Stop after that scalar and return **`PRE-LIVE SERVED-IDENTITY STAGE LOCALIZED /
STOP / RETURN TO FRESH MISSION`**. Even `localizedStage=0` is diagnostic only;
it does not pass or rerun VR-36. Mission alone may authorize a later formal
served-identity checkpoint.

No retry, second preview start, alternate port/route, full served rerun,
browser, E2E, summary, verifier, live review, build, fixture build, test,
validator, PBA, scan, synchronization, discovery, enumeration, repair, or
repository write is authorized.

All five OPEN divergences remain separate and OPEN:

- **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN / VR-17`**;
- **`UNAUTHORIZED DIVERGENCE / BROAD REPOSITORY FILENAME ENUMERATION / OPEN /
  VR-23`**;
- **`UNAUTHORIZED DIVERGENCE / UNTRACKED PATHNAME ENUMERATION / OPEN / VR-24
  COMBAT ATTEMPT`**;
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-25
  MISSION`**; and
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-28
  MISSION STAGING`**.

None is waived, merged, closed, cured, or used as candidate evidence.

All frozen candidate, threshold, player, learning, accessibility, privacy,
save, route, world, equal MH-40, null-delta, `successor=null`, ending,
immutable-media `17 / 37,410,731`, diagnostic non-evidence/non-verifier, and
one-E2E meanings remain exact. No release-map or scoreboard cell advances.

No Quartermaster, Image Specialist, Intelligence, release, schedule,
automation, or `FIRST RUN COMPLETE` action is authorized.

VR-37 and this synchronized handoff are the only administrative writes.
