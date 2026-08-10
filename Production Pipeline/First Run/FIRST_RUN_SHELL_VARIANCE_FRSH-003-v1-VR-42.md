# First Run Shell Variance Reissue - Corrected Formal Pre-Live Served Identity Only

Variance ID: `FRSH-003-v1-VR-42`

Disposition: **`FIRST RUN SHELL READY / CORRECTED FORMAL PRE-LIVE SERVED
IDENTITY ONLY / FRSH-003-v1-VR-42`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Command authority: `FRRC-002-v1`

Immediate return / predecessor authority: Combat VR-41 identity-wrapper parse
failure before identity requests / `FRSH-003-v1-VR-41`

Mission predecessor source:
`0a3a154f1152370e9c658f9fdff27ce4e8e4f8bb`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Recorded: **2026-08-10**

## Context reuse and VR-41 adjudication

Fresh-child capacity remains unavailable. Root expressly authorized this
already-active Mission Captain context to adjudicate VR-41 and issue this
bounded shell. The reuse remains disclosed, is not candidate evidence, and
waives no validation, independence, divergence, or release boundary.

Mission accepts the VR-41 launch/readiness/cleanup stages as exact diagnostic
PASS: production and fixture each started once with a positive PassThru-owned
PID, both root-readiness checks returned HTTP `200`, both owned PIDs were
stopped, and ports `4173/4184` were clear at return.

The identity block failed at parse time before any of its eight formal requests
because the executing PowerShell did not support the proposed generic
`SequenceEqual[byte]` syntax. No root/deep/JS/CSS identity request or byte/hash
comparison ran. This is a wrapper-language defect, not served-product evidence.

Parser diagnostics escaped the scalar-only transport. Mission classifies:

**`UNAUTHORIZED DIVERGENCE / PARSER DIAGNOSTIC SCALAR OUTPUT / OPEN / VR-41`**.

The diagnostics are non-evidence and do not pass served identity. VR-42 is the
sole corrected formal checkpoint authorized after that pre-request failure.
No other rerun, repair, or diagnostic is authorized.

## Exact corrected formal checkpoint authority

Exact next owner is a **Combat Engineer**. A fresh context remains preferred;
if thread limits require reuse, disclose that reuse in the return.

Run exactly one fail-closed wrapper in this order:

1. Require exact loopback ports `4173` and `4184` clear, then use the accepted
   hidden, no-redirection, PassThru form to launch the exact manifest production
   and TD-012 fixture Node/Vite previews once each. Require two positive owned
   PIDs. No listener fallback is evidence; any strict VR-40 fallback may bind a
   PID only for safety cleanup and forces checkpoint failure before identity
   requests.
2. Run the accepted bounded suppressed `Invoke-WebRequest -UseBasicParsing`
   root-readiness loop for production, then fixture: at most `40` attempts per
   port, timeout `1s`, `250ms` between failures, exact final status `200`.
   Discard readiness responses.
3. Internally require exactly one JavaScript and one CSS file in production
   `dist/assets` and fixture
   `review-fixtures/td012-measured-horizon/dist/assets`. Suppress all directory
   entries, asset names, paths, byte totals, and diagnostics.
4. Create exactly one `System.Net.WebClient` instance. In a `try/finally`, call
   its `DownloadData(url)` method exactly eight times in order: production
   root, production `/deep/fallback`, production JavaScript, production CSS,
   fixture root, fixture `/deep/fallback`, fixture JavaScript, fixture CSS.
   Dispose the WebClient in `finally`. Capture only returned raw byte arrays;
   suppress URLs, response data, headers, exceptions, and diagnostics.
5. Read exact disk comparison bytes only with
   `[System.IO.File]::ReadAllBytes`: each build's `index.html`, JavaScript, and
   CSS. Create one `System.Security.Cryptography.SHA256` instance; call
   `ComputeHash` for served and disk byte arrays; convert hashes internally to
   uppercase hexadecimal with `BitConverter` plus hyphen removal; compare hex
   strings with ordinal exact equality; dispose SHA-256 in `finally`. Never
   emit a hash, byte array, body, asset name, or path.
6. A successful `DownloadData` whose bytes match the exact nonempty disk target
   counts as one HTTP-`200` identity result; any HTTP failure throws and counts
   zero. Root and deep must each match disk `index.html`, yielding `2`; JS and
   CSS must each match their disk assets, yielding `2`, independently for
   production and fixture.
7. In an unconditional final block, stop only the two PassThru-owned PIDs plus
   any strictly proven safety-only cleanup PID, record stop results, and check
   both exact ports once after cleanup. Do not inspect or stop any other
   process.

No generic method syntax, `SequenceEqual`, `[Net.Http.HttpClient]`, `Add-Type`,
alternate HTTP client, alternate URL, or response text decoding is authorized.

Initialize absent PIDs to `0`, unreached numeric/status fields to `-1`, and
Boolean/count fields to `0`. Emit exactly one ordered scalar line after cleanup
and nothing else:

```text
prePortClearCount=<0..2> productionStartExit=<0|1> productionPid=<int> fixtureStartExit=<0|1> fixturePid=<int> productionReadinessAttempts=<int> productionReadinessStatus=<int> fixtureReadinessAttempts=<int> fixtureReadinessStatus=<int> productionHttp200Count=<0..4> productionRootDeepHashMatchCount=<0..2> productionAssetHashMatchCount=<0..2> fixtureHttp200Count=<0..4> fixtureRootDeepHashMatchCount=<0..2> fixtureAssetHashMatchCount=<0..2> safetyRecoveryCount=<0..2> cleanupAttemptCount=<0..2> productionPidStopped=<0|1> fixturePidStopped=<0|1> portClearCount=<0..2> nativeExit=<0|1>
```

Exact PASS requires pre-port clear `2`; start exits `0/0`; two positive
PassThru PIDs; readiness attempts `1..40` and statuses `200/200`; production
HTTP/hash counts `4/2/2`; fixture HTTP/hash counts `4/2/2`; safety recovery
`0`; cleanup attempts `2`; owned PID stopped states `1/1`; ports clear `2`;
and native exit `0`. Every other combination requires native exit `1` and
HOLD. Cleanup fields remain truthful after any earlier failure.

On exact PASS return **`CORRECTED FORMAL PRE-LIVE SERVED IDENTITY PASS / STOP /
RETURN TO FRESH MISSION`**. On any missing, extra, reordered, duplicate,
download, HTTP, asset-count, hash, ownership, readiness, cleanup, port,
capture, timeout, or wrapper failure, return **`HOLD / CORRECTED FORMAL PRE-
LIVE SERVED IDENTITY FAILURE / NO RERUN / RETURN TO FRESH MISSION`**. Stop
after the scalar. Do not diagnose, repair, retry, or run a post-scalar command.

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

These seven classifications remain distinct and OPEN; none is waived, merged,
closed, cured, or used as candidate evidence:

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

Mission Captain signs **`FIRST RUN SHELL READY / CORRECTED FORMAL PRE-LIVE
SERVED IDENTITY ONLY / FRSH-003-v1-VR-42`**.

Commit and push are required only for this administrative variance and the
synchronized exact handoff. No product file may be staged.
