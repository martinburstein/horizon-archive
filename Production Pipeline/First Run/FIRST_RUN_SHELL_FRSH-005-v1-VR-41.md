# First Run Shell - Host 06 Corrected 4K C1

Shell ID: `FRSH-005-v1-VR-41`

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / viability / predecessor: `FRWO-005-v10` /
`FRVE-005-v9-VR-01` / `FRCA-005-v9`

Disposition: **`FIRST RUN SHELL READY / SOLE C1 / CORRECTED 4K ENVELOPE /
ONE SEND / NO RETRY OR C2 / PRIVATE REVIEW / ACCEPTED IMPORT OR EXACT
CLEANUP`**

Date: **2026-08-12**

Exact next owner: one fresh Quartermaster / `quartermaster`

## Mission decision

Mission accepts the bounded 4K correction. V9 B1 remains consumed and
inaccessible. V10 has exactly one attempt `{C1}`; it begins at its sole
`SendAsync` and is consumed regardless of result. There is no retry, C2,
relaunch, fallback, edit, variation, reference, alternate transport, or second
output. Mission made no credential read, request, API send, media operation,
pixel inspection, or C1 consumption.

## Frozen retained sources

Quartermaster independently verifies strict UTF-8/no BOM, exact length,
lowercase SHA-256, and parser-zero for all five:

```text
BUILD_HOST06_V10_C1_CARRIER.ps1
  24933 / f1e5d3059310af5e19287c35890dc2a55d855c121f4bb11f90f6798fb0ca2cca
HOST06_V10_C1_PRODUCTION_CARRIER.ps1
  34795 / 4f6d7faa80214a3753cae5f49c5fb3e393c9675c8feaab7b8a4d3ab15cd03c68
HOST06_V10_C1_LAUNCHER.ps1
  2639 / 42a1f80bc9ad18fa4fd8b9151028333bfa97fccfd4aebdf95268222a040b2b06
HOST06_V10_C1_STDIN_PARENT.ps1
  2880 / 9e2ec0b547195d9cbd7da8c067a20e2e17efd6cfc73df2614199f586bce50f7d
HOST06_V10_C1_STDIN_FIXTURE_CONTROLLER.ps1
  2200 / 41e94893a1be2b9248d3d6c734c177d716ff177eddd930470012e4f9894f1c58
parserErrors=0 for all five
```

The credential-cleared fixture passed exactly once:

```text
HOST06_V10_STDIN_FIXTURE_PASS
earliestStage=PT06_CREDENTIAL_GATE
childInvocations=1
credentialReads=0
requestConstructions=0
sendAsyncCalls=0
apiSends=0
C1Consumed=false
controlledPathsAbsent=true
```

Production invokes only
`HOST06_V10_C1_STDIN_PARENT.ps1` once. Builder, carrier, launcher, and fixture
may not be directly invoked, rebuilt, edited, inlined, or reinterpreted.

## Exact paths and request

Before invocation Quartermaster proves the nine exact paths from
`FRWO-005-v10` absent, including the v10 helper/live roots, C1 stage/target/
decision, and product root/raster/provenance. V7-v9 paths and residuals remain
inaccessible.

The request is the unchanged exact endpoint, prompt, `gpt-image-2`, `n=1`,
`3840x2160`, high, opaque, PNG contract. `OPENAI_API_KEY` remains inherited
environment-only and secret. Redirects are disabled, timeout is ten minutes,
and exactly one `SendAsync` is permitted.

## Corrected response and memory envelope

```text
complete response bytes: 1..40,500,000
canonical b64_json characters: 4..40,000,000
decoded PNG bytes: 1..30,000,000
accepted media: <=18 files / 67,410,731 bytes
```

The carrier reads bounded `65,536`-byte chunks with pre-append checks, applies
the unchanged strict official ImagesResponse parser, requires one canonical
Base64 item, precomputes decoded length, and clears raw response, parsed JSON,
Base64, and decoded references at their exact stage boundaries. Status,
normalized media type, bounded byte count, terminal stage, send-started, and
the secret-safe bounded diagnostic are the only reportable response facts.

## Review, acceptance, and unchanged boundaries

All `FRSH-005-v1-VR-40` helper, strict PNG, file identity, private no-reveal
review, `PHY-01..12`, layout/accessibility, decision grammar, byte-identical
product import, provenance, null-slot population, tests/build/PBA/served/E2E,
cleanup, rollback, canon, learning, save/privacy, and protected-state clauses
remain exact, substituting only v10/C1 paths/identities and the corrected caps.
ACCEPT requires technical/physical/layout/accessibility true and codes NONE;
otherwise truthful REJECT or failure performs exact identity-conditioned
cleanup and closes v10.

The one-path rail, Host 05 -> Host 06 -> unchanged L02-03, Hosts 07+, MH-40
parity, RP-012, null deltas, and `successor=null` remain immutable. No image may
be displayed, attached, screenshotted, or revealed.

Mission Captain signs **`FIRST RUN SHELL READY / FRSH-005-v1-VR-41 / SOLE
C1 / ONE SEND / CORRECTED 4K ENVELOPE / PRIVATE REVIEW / NO RETRY / FRESH
QUARTERMASTER NEXT`**.
