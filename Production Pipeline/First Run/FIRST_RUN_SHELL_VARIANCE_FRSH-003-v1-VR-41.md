# First Run Shell Variance Reissue - Formal Pre-Live Served Identity Only

Variance ID: `FRSH-003-v1-VR-41`

Disposition: **`FIRST RUN SHELL READY / FORMAL PRE-LIVE SERVED IDENTITY ONLY /
FRSH-003-v1-VR-41`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Command authority: `FRRC-002-v1`

Immediate return / predecessor authority: Combat VR-40 production ownership
and readiness localization PASS / `FRSH-003-v1-VR-40`

Mission predecessor source:
`9ec8dfaf2da63d86a28679b349ba2be03d9987a5`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Recorded: **2026-08-10**

## Context reuse and VR-40 adjudication

Fresh-child capacity remains unavailable. Root expressly authorized this
already-active Mission Captain context to adjudicate VR-40 and issue this
bounded shell. The reuse remains disclosed, is not candidate evidence, and
waives no validation, independence, divergence, or release boundary.

Mission accepts VR-40 stage `0` diagnostic PASS. The exact production port was
clear before launch; the exact direct Node/bundled-Vite vector produced one
positive PassThru-owned PID; root readiness returned HTTP `200`; the owned PID
was stopped; and port `4173` was clear afterward. No fallback listener lookup,
fixture, deep route, asset request, browser, or E2E ran.

Combat omitted process-stream redirection because the prior redirection form
swallowed the wrapper's scalar output. The production process was hidden and
emitted no output. Mission classifies this as **`ACCEPTED VARIANCE / HIDDEN
NO-REDIRECTION PASSTHRU TRANSPORT / NO OUTPUT / NO PRODUCT CHANGE / VR-40`**.
It is now explicit authority for VR-41. It does not waive the scalar-only
contract or any OPEN divergence.

The launcher, PassThru ownership, root-readiness transport, and owned cleanup
are now sufficiently localized for one formal production-and-fixture served-
identity checkpoint. VR-36 remains failed history; VR-41 is the sole formal
replacement authorized by this variance.

## Exact formal checkpoint authority

Exact next owner is a **Combat Engineer**. A fresh context remains preferred;
if thread limits require reuse, disclose that reuse in the return.

Run exactly one fail-closed wrapper in this order:

1. Query only exact loopback listener tuples `127.0.0.1:4173` and
   `127.0.0.1:4184`. Require both clear and emit only
   `prePortClearCount=2`. Any other result stops before launch.
2. Resolve manifest `node` internally by the accepted method, never emitting
   its source. From workdir `horizon-archive-game`, use hidden,
   **no-redirection**, PassThru starts exactly once each:

```text
production: node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4173 --strictPort
fixture: node_modules/vite/bin/vite.js preview --config review-fixtures/td012-measured-horizon/vite.config.js --host 127.0.0.1 --port 4184 --strictPort
```

   Require one positive PassThru PID for each. Do not use listener-PID fallback
   for evidence. If PassThru ownership fails after a listener is created, the
   exact VR-40 single-listener/post-launch/exact-Node proof may bind a PID only
   for safety cleanup; the checkpoint must still fail, make no HTTP request,
   and report `safetyRecoveryCount` without emitting the recovered PID or any
   process/path detail.
3. Set `$ProgressPreference='SilentlyContinue'`. Poll production root, then
   fixture root, with the exact VR-39 bounded `Invoke-WebRequest
   -UseBasicParsing` transport: at most `40` attempts per port, timeout `1s`,
   `250ms` between suppressed failures, ready only on HTTP `200`. Discard
   readiness responses. Stop the forward path on either readiness failure.
4. For production output `dist` and fixture output
   `review-fixtures/td012-measured-horizon/dist`, internally require exactly one
   JavaScript file and one CSS file in the exact `assets` directory. Suppress
   all directory entries, asset names, paths, byte totals, and diagnostics.
5. For production, then fixture, request only root `/`, deep route
   `/deep/fallback`, the single JavaScript asset, and the single CSS asset with
   `Invoke-WebRequest -UseBasicParsing -TimeoutSec 1 -ErrorAction Stop`.
   Capture no output. Require exact HTTP `200` for all four requests per
   preview.
6. Read response bodies only as raw bytes. Hash internally with SHA-256 and
   compare without emitting hashes: served root and deep must each equal that
   build's disk `index.html` hash, producing root/deep hash-match count `2`;
   served JavaScript and CSS must each equal their exact disk asset hash,
   producing asset hash-match count `2`. Hash comparison is a byte-equality
   transport only; no hash value, body, filename, path, or exception may be
   emitted.
7. In an unconditional final block, make exactly one stop attempt for each
   positive PassThru-owned PID, plus any strictly proven safety-only PID if
   PassThru failed. Record owned PID stopped states and check both exact ports
   once after cleanup. Do not inspect or stop any other process.

Initialize absent PIDs to `0`, unreached numeric/status fields to `-1`, and
Boolean/count fields to `0`. Emit exactly one ordered scalar line after cleanup
and nothing else:

```text
prePortClearCount=<0..2> productionStartExit=<0|1> productionPid=<int> fixtureStartExit=<0|1> fixturePid=<int> productionReadinessAttempts=<int> productionReadinessStatus=<int> fixtureReadinessAttempts=<int> fixtureReadinessStatus=<int> productionHttp200Count=<0..4> productionRootDeepHashMatchCount=<0..2> productionAssetHashMatchCount=<0..2> fixtureHttp200Count=<0..4> fixtureRootDeepHashMatchCount=<0..2> fixtureAssetHashMatchCount=<0..2> safetyRecoveryCount=<0..2> cleanupAttemptCount=<0..2> productionPidStopped=<0|1> fixturePidStopped=<0|1> portClearCount=<0..2> nativeExit=<0|1>
```

Exact PASS requires pre-port clear `2`; start exits `0/0`; two positive
PassThru PIDs; readiness attempts `1..40` and statuses `200/200`; production
HTTP/hash counts `4/2/2`; fixture HTTP/hash counts `4/2/2`; safety recovery
`0`; cleanup attempts `2`; both owned PIDs stopped; ports clear `2`; and native
exit `0`. Every other combination requires native exit `1` and HOLD. Cleanup
fields remain truthful after any earlier failure.

On exact PASS return **`FORMAL PRE-LIVE SERVED IDENTITY PASS / STOP / RETURN
TO FRESH MISSION`**. On any missing, extra, reordered, duplicate, non-`200`,
hash mismatch, asset-count mismatch, ownership, readiness, cleanup, port,
capture, timeout, or wrapper failure, return **`HOLD / FORMAL PRE-LIVE SERVED
IDENTITY FAILURE / NO RERUN / RETURN TO FRESH MISSION`**. Stop after the one
scalar. Do not diagnose, repair, retry, or run a post-scalar command.

This checkpoint does not authorize browser, E2E, complete journey, machine
summary, verifier, live review, dynamic Host 05/task timing, runtime-request,
offline-runtime, save, learning, route, world, equal MH-40, ending, or release
proof. No build, fixture build, test, validator, PBA, media/source-map scan,
synchronization, hash/blob identity command, dependency/source scan,
nonexact-port query, filename/path output, protected/untracked inspection, or
repository write is authorized.

## Preserved boundaries and classifications

VR-22 focused `68/68`, related `74/74`, cold full `972/972`, validators
`40/40`; VR-30 production build; VR-35 fixture build; and VR-36's corrected
scalar PBA remain frozen without rerun. No product delta, `PRODUCTION
FUNCTIONAL`, release, or maturity advance is authorized or inferred.

These six classifications remain distinct and OPEN; none is waived, merged,
closed, cured, or used as candidate evidence:

- **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN / VR-17`**;
- **`UNAUTHORIZED DIVERGENCE / BROAD REPOSITORY FILENAME ENUMERATION / OPEN /
  VR-23`**;
- **`UNAUTHORIZED DIVERGENCE / UNTRACKED PATHNAME ENUMERATION / OPEN / VR-24
  COMBAT ATTEMPT`**;
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-25
  MISSION`**;
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-28
  MISSION STAGING`**; and
- **`UNAUTHORIZED DIVERGENCE / EXACT-PORT LISTENER OWNERSHIP RECOVERY / OPEN /
  VR-39`**.

All frozen candidate, threshold, player, learning, copy/owner, `L02-02`, strict
`24/24`, evaluator, remediation, evidence/privacy, save/reload/return,
accessibility, focus, responsive, forced-color, reduced-motion, offline,
request, dependency, source-map, PBA, performance, route, world, equal MH-40,
null-delta, `successor=null`, ending, immutable-media `17 / 37,410,731`,
diagnostic non-evidence/non-verifier, and one-E2E meanings remain exact.

No implementation, product, test, manifest, E2E, content, CSS, module,
dependency, package, lockfile, curriculum, evaluator, save, story, route, map,
scoreboard, maturity, media, or other control change is permitted. No media
operation or reveal is authorized. No branch, packet, lesson, hidden-lore
answer, reward, access, identity, authority, world response, successor,
RP-013, or post-ending content may be added or changed.

Protected repository QA, PDF, training, browser/profile/save, hidden lore,
media, user state, predecessor roots, and unrelated external roots remain
forbidden to inspect, enumerate, reuse, modify, move, or delete.

No Quartermaster, Image Specialist, Intelligence, reveal, maturity advance,
release, schedule, automation, or `FIRST RUN COMPLETE` action is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / FORMAL PRE-LIVE SERVED
IDENTITY ONLY / FRSH-003-v1-VR-41`**.

Commit and push are required only for this administrative variance and the
synchronized exact handoff. No product file may be staged.
