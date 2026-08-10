# First Run Functional Report - Failure Evidence Transport

Report ID: `FRCE-003-v1-VR-44`

Disposition: **`FAILURE EVIDENCE TRANSPORT READY / JSON PASS / NODE PASS / FOCUSED 68/68 / STOP / RETURN TO FRESH MISSION`**

Governing shell: `FRSH-003-v1-VR-44`

Diagnostic-transport candidate: `6c64eb354b7dbb467df5725e2cae4eb67092ddc7`

Product / validation / diagnostic / evidence identities remain respectively:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b` /
`4cd7fbf31291671dd28c0743b44a7c49aaad82bb` /
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc` /
`ca89a679195c11d441a76e6c02983a6436f2ccb2`.

## Implementation

The candidate changes exactly four diagnostic-control files:

- `playtest/e2e-playthrough.mjs` removes raw failure-path console/error transport, retains the complete diagnostic in memory, awaits the owned Playwright browser close, and synchronously rewrites the exact diagnostic with lifecycle-derived `browserClosed` before process exit;
- `playtest/first-run-diagnostic-transport.mjs` is the single read-only extractor. It reads only the exact literal diagnostic, preserves every failure path and every layout failure, applies ordinal stable sorting, serializes compact stable-key JSON, rejects absolute/UNC/file/fresh-root path leakage, and emits one standard-base64 scalar line;
- `FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json` adds one non-release, non-verifier, no-retry diagnostic-transport entry and freezes capture-before-cleanup / emit-after-cleanup ownership; and
- `horizon-archive-game/test/sixfoldWeir.test.js` extends the existing static case without increasing the focused test count. It proves lifecycle ordering, full stable preservation, UTF-8/base64 round-trip, byte count, unsafe-path rejection, scalar-only output, and diagnostic non-evidence boundaries.

The extractor output schema is exact:

```text
failureCount=<int> failurePathCount=<int> failureLayoutCount=<int> browserClosed=<0|1> failureDetailBytes=<int> failureDetailBase64=<base64> transportExit=<0|1>
```

The execution owner must capture this scalar in memory before exact owned-root cleanup and emit it only after cleanup. The extractor never supplies release evidence or verifier input and never authorizes retry.

## Validation

- FRRC-002 JSON parse: **PASS**.
- `node --check playtest/e2e-playthrough.mjs`: **PASS**.
- `node --check playtest/first-run-diagnostic-transport.mjs`: **PASS**.
- Exact focused manifest command: **68 tests / 68 pass / 0 fail**, Node duration `198.1395ms`.
- Exact four-file `git diff --check`: **PASS** before candidate commit.

No related/full test, validator, build, PBA, preview, browser, E2E, summary, verifier, live command, product change, media operation, protected-path inspection, or user-state action ran.

## Boundaries and limitations

Fresh-child capacity remained unavailable, so the already-active Combat context was reused under root authority. The reuse is disclosed, is not candidate evidence, and waives no independence or release boundary.

This construction pass proves the transport statically; it does not prove a new failure capture live. VR-43 remains the sole failed live result and is not reinterpreted. A fresh Mission Captain must independently adjudicate this exact candidate before authorizing any later verification.

All seven OPEN divergences remain separate and OPEN. No player, learning, save, privacy, accessibility, route, world, MH-40, null-delta, `successor=null`, ending, media, diagnostic non-verifier, or one-E2E meaning changed.

Exact next owner: **fresh Mission Captain**.
