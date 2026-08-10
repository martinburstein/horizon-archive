# First Run Shell Variance Reissue - Failure Evidence Transport Correction Only

Variance ID: `FRSH-003-v1-VR-44`

Disposition: **`FIRST RUN SHELL READY / FAILURE EVIDENCE TRANSPORT CORRECTION
ONLY / FRSH-003-v1-VR-44`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Immediate return / predecessor authority: Combat VR-43 diagnostic-only E2E
failure / `FRSH-003-v1-VR-43`

Mission predecessor source:
`aa89a4c7aae8ebad8925a868765175448779dae5`

Exact immutable product candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Exact diagnostic candidate:
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Recorded: **2026-08-10**

## Context reuse and VR-43 adjudication

Fresh-child capacity remains unavailable. Root expressly authorized this
already-active Mission Captain context to adjudicate VR-43 and issue this
bounded shell. The reuse remains disclosed, is not candidate evidence, and
waives no boundary.

VR-43 ran the complete E2E exactly once for `61.152s` and failed. The exact
diagnostic existed, `checkInventoryExact=true`, and `failureCount=57`. No
summary existed and no verifier ran, correctly preserving diagnostic-only
failure. Both preview PIDs were stopped, ports `4173/4184` were clear, and the
fresh QA root was deleted under the exact containment boundary.

The wrapper did not capture `failurePaths` or `failuresByLayout` before deleting
the root. `browserClosed=0` means unknown because the wrapper did not inspect
the owned Playwright lifecycle; it is not affirmative evidence that a browser
remained. The absent failure map prevents lawful product diagnosis.

Mission classifies **`CONTROL DEFECT / VR-43 FAILURE DETAIL TRANSPORT OMITTED /
BROWSER LIFECYCLE UNKNOWN / NO PRODUCT FINDING`**. This is a Mission transport
omission, not candidate evidence and not a new unauthorized divergence. The
seven existing OPEN classifications remain exact.

## Exact construction authority

Exact next owner is a **Combat Engineer**. A fresh context remains preferred;
disclose reuse if thread limits require it. This is diagnostic-control
construction only. No E2E, preview, browser, product build, or product change
is authorized.

Combat may inspect and, only as required, modify this closed set:

- `playtest/e2e-playthrough.mjs`;
- `playtest/first-run-diagnostic-transport.mjs` as one optional new helper;
- `Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json`;
- `horizon-archive-game/test/sixfoldWeir.test.js` for static control without
  increasing the focused test count.

First determine from the literal E2E source whether an existing synchronous
diagnostic/console transport already contains full `failurePaths`, full
`failuresByLayout`, and owned-lifecycle `browserClosed`:

- If complete transport already exists, do not change E2E behavior. Add or
  correct only wrapper extraction, manifest ownership, and static assertions.
- If any field is absent, make the smallest E2E harness-only change needed to
  record it. `browserClosed` must come from the owned Playwright lifecycle: it
  becomes true only after the owned browser's awaited close completes. Do not
  infer it from preview PIDs or ports.

The failure extractor must synchronously read the exact literal diagnostic
before QA-root cleanup, select no other file, and canonicalize only:

```json
{"failurePaths":[],"failuresByLayout":{},"browserClosed":false}
```

`failurePaths` must be the full untruncated string array sorted ordinally.
`failuresByLayout` must preserve every layout and failure: object keys sorted
ordinally and any string arrays sorted ordinally. Serialize compact JSON with
stable key order, encode the UTF-8 bytes as standard base64, and retain it in
memory before cleanup. Reject transport containing an OS absolute/UNC/file URL
or the fresh-root value. Do not emit raw JSON, failure strings, filesystem
paths, console diagnostics, or browser details.

After capture, the later wrapper must perform cleanup and only then emit the
stored transport inside this scalar schema:

```text
failureCount=<int> failurePathCount=<int> failureLayoutCount=<int> browserClosed=<0|1> failureDetailBytes=<int> failureDetailBase64=<base64> transportExit=<0|1>
```

Exact transport success requires base64 decode to the canonical compact JSON,
full counts matching the diagnostic, `browserClosed` sourced from the owned
lifecycle, no truncation, and exit `0`. This work prepares evidence transport;
it does not run or adjudicate another E2E.

If a helper is added, FRRC-002 may add exactly one read-only diagnostic-
transport entry pointing to it. Do not change product, build, preview, E2E,
verifier, candidate, port, timeout, route, or success semantics. Static control
must prove stable sorting, compact UTF-8 base64 round-trip, full preservation,
unsafe-path rejection, lifecycle-derived browser closure, and one-line scalar
output without adding a new focused test case.

## Exact validation and return

Run only these quiet validations:

1. JSON parse of the exact FRRC-002 file;
2. `node --check` for each changed/new Node file;
3. the exact FRRC-002 focused command, requiring unchanged `68/68` PASS.

No related/full test, validator suite, build, PBA, preview, served identity,
browser, E2E, summary, verifier, cleanup root, or live command is authorized.

On exact success, commit/push only the permitted diagnostic-control files and
return **`FAILURE EVIDENCE TRANSPORT READY / JSON PASS / NODE PASS / FOCUSED
68/68 / STOP / RETURN TO FRESH MISSION`** with changed-file count and revision
scalars only. On any failure return **`HOLD / FAILURE EVIDENCE TRANSPORT
CONSTRUCTION OR STATIC FAILURE / NO E2E / RETURN TO FRESH MISSION`**. Do not
repair outside the closed set.

## Preserved boundaries

The immutable test/build/PBA/served ladder remains accepted. No
`PRODUCTION FUNCTIONAL`, release, or maturity advance is authorized.

All seven OPEN divergences remain separate and OPEN: VR-17 protected-path
enumeration; VR-23 broad filename enumeration; VR-24 untracked pathname
enumeration; VR-25 and VR-28 literal control pathname output; VR-39 exact-port
listener ownership recovery; and VR-41 parser diagnostic scalar output. None
is waived, merged, closed, cured, or used as candidate evidence.

All frozen player, learning, privacy, save, accessibility, route, world,
MH-40, null-delta, `successor=null`, ending, media, diagnostic non-verifier,
and one-E2E meanings remain exact. No media operation, reveal, Quartermaster,
Image Specialist, Intelligence, release, schedule, automation, or `FIRST RUN
COMPLETE` action is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / FAILURE EVIDENCE TRANSPORT
CORRECTION ONLY / FRSH-003-v1-VR-44`**.
