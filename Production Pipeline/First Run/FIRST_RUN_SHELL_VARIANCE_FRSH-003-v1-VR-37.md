# First Run Shell Variance Reissue - Pre-Live Served-Identity Stage Localization Only

Variance ID: `FRSH-003-v1-VR-37`

Disposition: **`FIRST RUN SHELL READY / PRE-LIVE SERVED-IDENTITY STAGE
LOCALIZATION ONLY / FRSH-003-v1-VR-37`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Immediate return / predecessor authority: Combat VR-36 pre-live preview and
served-identity failure / `FRSH-003-v1-VR-36`

Mission source before this administrative variance:
`97b243f33952e85a94342174ddf26e4cb5010f36`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Recorded: **2026-08-10**

## Context-reuse limitation

Mission attempted to hand VR-36 to a fresh child context, but the agent thread
limit rejected the spawn before any child ran. Root therefore expressly
authorized this already-active Mission Captain context to adjudicate the
returned Combat scalar and issue the next bounded shell. This reuse is a
coordination limitation only. It is disclosed, is not candidate evidence, and
does not waive any validation, independence, divergence, or release boundary.

## Independent adjudication of VR-36 return

Mission accepts the returned scalar as an exact fail-closed VR-36 result:

```text
productionRootDeepCount=0 productionAssetMatchCount=0 fixtureRootDeepCount=0 fixtureAssetMatchCount=0 cleanupCount=0 portClearCount=2 nativeExit=1
```

The wrapper emitted no stage detail, pathname, filename, preview stream,
request body, asset reference, or diagnostic. No browser or E2E ran. Both
assigned ports were clear at return. No lingering live surface is established.

The scalar is insufficient to distinguish preview-launch failure, readiness
failure, HTTP-status failure, disk/served comparison failure, or an earlier
wrapper-control failure. `cleanupCount=0` cannot be interpreted as cleanup
failure because no owned PID/start scalar was emitted; it is bounded only by
`portClearCount=2`. Mission therefore preserves **`HOLD / PRE-LIVE PREVIEW OR
SERVED IDENTITY FAILURE / NO RERUN`** and authorizes localization only. The
VR-36 attempt is not served-identity evidence and may not be repaired,
reclassified as pass, or replaced by this diagnostic.

VR-22 focused `68/68`, related `74/74`, cold full `972/972`, and validators
`40/40`; VR-30 production build; VR-35 fixture build; and VR-36's accepted
corrected scalar PBA remain frozen without rerun. No product delta is accepted
or inferred.

## Exact localization-only authority

Exact next owner is a **Combat Engineer**. A fresh context remains preferred;
if thread limits require reuse, disclose that reuse in the return. Combat may
instrument only the existing manifest-owned production and TD-012 fixture
preview/served-identity implementation from `FRSH-003-v1-VR-07` on loopback
ports `4173` and `4184`. This is diagnostic localization, not a rerun of the
formal VR-36 served-identity checkpoint and not candidate evidence.

Use one wrapper with fail-closed ordered stages and an unconditional final
cleanup block:

1. Start the production preview once. Record launcher exit and exactly one
   owned process ID. If launch fails or no single owned PID exists, skip all
   readiness/HTTP/asset stages and enter cleanup.
2. Start the fixture preview once. Record launcher exit and exactly one owned
   process ID. If launch fails or no single owned PID exists, skip all later
   readiness/HTTP/asset stages and enter cleanup.
3. Poll production readiness only on `127.0.0.1:4173`, recording its scalar
   attempt count and final HTTP status. Stop the forward path on any non-`200`
   result or exhaustion and enter cleanup.
4. Poll fixture readiness only on `127.0.0.1:4184`, recording its scalar attempt
   count and final HTTP status. Stop the forward path on any non-`200` result
   or exhaustion and enter cleanup.
5. Request only the accepted root and deep route for production, then fixture.
   Record only the count of exact HTTP `200` results for each; exact forward
   success is `2` and `2`. Suppress URLs, bodies, headers, and diagnostics.
6. Using only the already accepted HTML-to-asset resolution and byte-comparison
   implementation, compare served JavaScript and CSS with the respective disk
   output for production, then fixture. Record only byte-equal match counts;
   exact forward success is `2` and `2`. Suppress hashes, byte totals, asset
   references, paths, filenames, bodies, and diagnostics.
7. In the unconditional final block, make one stop attempt for each owned PID
   that was actually created, record whether each such PID is stopped, and
   check both assigned ports once after stops. Do not inspect or stop any
   unowned process. Port-clear exact success is `2`.

Readiness uses the accepted bounded polling cadence already present in
`FRSH-003-v1-VR-07`; do not invent or alter its attempt cap, delay, request,
route, or preview command. A stage that cannot reuse that exact implementation
without invention is itself localized failure and must enter cleanup.

Initialize every unreached numeric stage field to `-1`, every absent PID to
`0`, and every unreached status to `-1`. Emit exactly one ordered scalar line
after cleanup and nothing else:

```text
productionStartExit=<int> productionPid=<int> fixtureStartExit=<int> fixturePid=<int> productionReadinessAttempts=<int> productionReadinessStatus=<int> fixtureReadinessAttempts=<int> fixtureReadinessStatus=<int> productionHttp200Count=<int> fixtureHttp200Count=<int> productionAssetMatchCount=<int> fixtureAssetMatchCount=<int> cleanupAttemptCount=<int> productionPidStopped=<0|1> fixturePidStopped=<0|1> portClearCount=<int> localizedStage=<0..7> nativeExit=<0|1>
```

`localizedStage` is the first failed stage number from the ordered list above;
use `0` only when every forward stage and cleanup passed. `nativeExit=0`
requires launcher exits `0`, two positive owned PIDs, positive readiness
attempt counts with final statuses `200`, HTTP counts `2/2`, asset-match counts
`2/2`, cleanup attempts equal to the number of positive owned PIDs, both owned
PIDs stopped, and ports clear `2`. Every other combination requires
`nativeExit=1` and the exact first failed `localizedStage`. Cleanup fields must
remain truthful even when an earlier stage failed.

Stop after the scalar and return **`PRE-LIVE SERVED-IDENTITY STAGE LOCALIZED /
STOP / RETURN TO FRESH MISSION`** whether `localizedStage` is `0` or nonzero.
Mission alone may interpret the stage and decide whether to reauthorize the
formal served-identity checkpoint. A localization `0` is diagnostic success
only and does not pass or rerun VR-36.

No second preview start, retry, alternate port, alternate route, repair,
fallback, post-scalar command, or repository write is authorized. No browser,
E2E, complete journey, machine summary, verifier, live review, build, fixture
build, test, validator, PBA, media/source-map scan, synchronization, hash,
quiet, blob, dependency, source, filename, glob, protected-path, or untracked-
path command is authorized.

Dynamic Host 05 `<=2ms`, sampled task `<=100ms`, runtime-request, offline-
runtime, save, learning, route, world, equal MH-40, ending, and full served-
identity acceptance remain reserved. No full served-identity rerun is
authorized until Mission adjudicates the localized stage.

## Preserved boundaries and classifications

This authority has no player-visible delta. Exact first-run address remains
`FR-03 / Host 05 / Sixfold Weir`; stage and release remain HOLD; no release-map
or scoreboard cell advances.

These five classifications remain distinct and OPEN; none is waived, merged,
closed, cured, or used as candidate evidence:

- **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN / VR-17`**;
- **`UNAUTHORIZED DIVERGENCE / BROAD REPOSITORY FILENAME ENUMERATION / OPEN /
  VR-23`**;
- **`UNAUTHORIZED DIVERGENCE / UNTRACKED PATHNAME ENUMERATION / OPEN / VR-24
  COMBAT ATTEMPT`**;
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-25
  MISSION`**; and
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-28
  MISSION STAGING`**.

All frozen candidate, threshold, player, learning, copy/owner, `L02-02`, strict
`24/24`, evaluator, remediation, evidence/privacy, save/reload/return,
accessibility, focus, responsive, forced-color, reduced-motion, offline,
request, dependency, source-map, PBA, performance, route, world, equal MH-40,
null-delta, `successor=null`, ending, immutable-media `17 / 37,410,731`,
diagnostic non-evidence/non-verifier, and one-E2E meanings remain exact.

No implementation, product, test, manifest, E2E, content, CSS, module,
dependency, package, lockfile, curriculum, evaluator, save, story, route, map,
scoreboard, maturity, media, or other control change is permitted. No media
generation, edit, replacement, variation, import, movement, deletion,
publication, or reveal is authorized. No branch, packet, lesson, hidden-lore
answer, reward, access, identity, authority, world response, successor,
RP-013, or post-ending content may be added or changed.

Protected repository QA, PDF, training, browser/profile/save, hidden lore,
media, user state, predecessor roots, and unrelated external roots remain
forbidden to inspect, enumerate, reuse, modify, move, or delete.

No Quartermaster, Image Specialist, Intelligence, reveal, maturity advance,
release, schedule, automation, or `FIRST RUN COMPLETE` action is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / PRE-LIVE SERVED-IDENTITY
STAGE LOCALIZATION ONLY / FRSH-003-v1-VR-37`**.

Commit and push are required only for this administrative variance and the
synchronized exact handoff. No product file may be staged.
