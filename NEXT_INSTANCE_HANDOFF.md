# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`FIRST RUN SHELL READY / PRODUCTION LAUNCHER-VECTOR
LOCALIZATION ONLY / FRSH-003-v1-VR-38`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Exact next owner: **Combat Engineer**

Immediate control: `FRSH-003-v1-VR-38`

Immediate return / predecessor authority: Combat VR-37 stage-1 production
launcher failure before PID / `FRSH-003-v1-VR-37`

Mission VR-38 predecessor source:
`70367f5ad0cb26ed566df045b75424bdfeba0aaa`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Mission accepts VR-37 localization at stage `1`: production launcher failure
before PID. No fixture, readiness, deep route, asset request, browser, or E2E
ran; no owned PID existed; both assigned ports were clear. This diagnostic is
not served-identity evidence and does not authorize a full rerun.

Fresh-child capacity remained unavailable, so root expressly authorized this
Mission context reuse. The disclosed coordination limitation is not candidate
evidence and waives no boundary.

`FRRC-002-v1` owns this exact production vector: workdir
`horizon-archive-game`; executable `node`; arguments
`node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4173
--strictPort`; ownership limited to its recorded PID and loopback port `4173`.

Combat may run only one production launcher-vector diagnostic. Resolve `node`
once with `Get-Command -Name 'node' -CommandType Application -ErrorAction
Stop`; accept only command name `node` or `node.exe`; require the internally
resolved source to exist as a leaf; never emit its path. Require the literal
workdir to exist, then pass the resolved Node source internally to one
headless, redirected `System.Diagnostics.ProcessStartInfo` launch using the
exact manifest arguments. Poll only production root readiness. Do not request
deep route or any asset. Unconditionally stop only the owned PID and check only
port `4173` after cleanup.

Emit exactly one ordered scalar line:

```text
nodeCommandFound=<0|1> nodeCommandNameAccepted=<0|1> nodeSourceExists=<0|1> workdirExists=<0|1> productionStartExit=<0|1> productionPid=<int> productionReadinessAttempts=<int> productionReadinessStatus=<int> cleanupAttemptCount=<0|1> productionPidStopped=<0|1> portClearCount=<0|1> localizedStage=<0..5> nativeExit=<0|1>
```

Initialize unreached numerics to `-1`, absent PID to `0`, and unreached status
to `-1`. Stage meanings are: `1` command lookup/name/source, `2` workdir, `3`
start/PID, `4` readiness, `5` cleanup/port, `0` complete diagnostic pass. A
complete pass requires Node scalars `1/1/1`, workdir `1`, start `0`, positive
PID, positive readiness attempts/status `200`, cleanup attempt/stopped `1/1`,
port clear `1`, and native exit `0`. Otherwise report the first failed stage,
native exit `1`, and truthful cleanup.

Stop after the scalar and return **`PRODUCTION LAUNCHER VECTOR LOCALIZED /
STOP / RETURN TO FRESH MISSION`**. Even stage `0` is diagnostic only. No
fixture, second start, `npm.cmd`, npm, npx, alternate vector/port/route, full
served rerun, repair, browser, E2E, build, test, validator, PBA, scan,
synchronization, discovery, enumeration, or repository write is authorized.

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

VR-38 and this synchronized handoff are the only administrative writes.
