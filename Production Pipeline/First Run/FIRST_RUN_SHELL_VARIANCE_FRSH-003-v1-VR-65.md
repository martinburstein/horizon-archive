# First Run Shell Variance Reissue - Corrected Exact Success-Artifact Token-Bound Cleanup Only

Variance ID: `FRSH-003-v1-VR-65`

Disposition: **`FIRST RUN SHELL READY / CORRECTED EXACT SUCCESS-ARTIFACT
TOKEN-BOUND CLEANUP ONLY / FRSH-003-v1-VR-65`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Mission source inspected:
`a90320fff67c0edea6dd0235b1158d6ab612b90a`

Recorded: **2026-08-10**

## Context reuse and VR-64 adjudication

Fresh-child capacity remains unavailable. Root expressly authorized this
Mission Captain context to adjudicate VR-64 and reissue exact artifact cleanup.
The reuse is disclosed, is not candidate evidence, and waives no boundary.

Mission accepts VR-64's in-memory result: strict token/UTF-8/canonical
round-trip and pure normalization passed; four inline SHA objects were created,
computed, and disposed; every BitConverter lowercase 64-hex value was a scalar
with exact shape; the decoded-byte domain matched the supplied digest; the
base64-ASCII, normalized-lowercase, and normalized-uppercase domains did not;
negative controls and one-item success stream passed; native exit was 0.

No filesystem, root, artifact, process, network, browser, E2E, verifier, or
cleanup action occurred. VR-62 through VR-64 are correction/localization
evidence under the existing VR-61 digest-implementation OPEN item; no
fourteenth OPEN classification arises.

VR-60's sole corrected E2E remains substantively accepted: inventory exact,
failure 0, browser closed, summary 1, verifier attempt/PASS 1, both PIDs absent,
and both ports clear. The one-E2E budget is consumed.

## Exact retained identity and artifact allowlist

Use only:

```text
rootTokenB64=QzpcVXNlcnNcbWFydGlcQXBwRGF0YVxMb2NhbFxUZW1wXGhvcml6b24tYXJjaGl2ZS1mcnJjMDAyLTg1YmRjYmQzLThlZjctNGU3OC1iZGNiLWVjODgxNDFhMDczZQ==
rootTokenSha256=1c6a6df084f9917a37b27c1035f00929b9457b460aad323d1c4b65882dbd0654
```

FRRC-002 and the successful VR-60 branch establish exactly two owned files:

```text
first-run-live-diagnostic.json
first-run-live-summary.json
```

No success log, screenshot, trace, video, browser artifact, subdirectory,
alternate name, or inferred file is declared or authorized.

## Exact corrected cleanup authority

Exact next owner is a **fresh Combat Engineer** if capacity permits; otherwise
context reuse must be disclosed. Execute one bounded PowerShell call only.
Suppress paths, filenames, token, digest, JSON bodies, byte arrays, objects,
errors, exceptions, and intermediate success-stream output. Emit only the
ordered final scalar.

### 1. Corrected token/digest binding

Decode the literal standard-base64 token to `[byte[]]`; strict-UTF-8 decode;
reject NUL/control characters; require byte and canonical-token round trips;
normalize once with `[System.IO.Path]::GetFullPath`.

Inline, without a helper, create a fresh
`[Security.Cryptography.SHA256]::Create()`, call explicit
`ComputeHash([byte[]]$decodedBytes)`, and dispose in `finally`. Convert only with:

```powershell
$hex = [BitConverter]::ToString($digest).Replace('-', '').ToLowerInvariant()
```

Require one scalar matching `^[0-9a-f]{64}$` and exact ordinal equality to the
literal digest. Explicitly suppress every intermediate assignment/method/
dispose result. Do not hash token text or case-folded path bytes.

Resolve only the decoded path with `Resolve-Path -LiteralPath -ErrorAction
Stop`; require exact normalized identity equality, anchored lowercase
`horizon-archive-frrc002-<GUID>` leaf, direct OS-temp parent, strict temp
containment, bidirectional repository exclusion, frozen-predecessor
distinction, and directory existence.

### 2. Literal diagnostic identity and deletion

Construct only `[IO.Path]::Combine($resolvedRoot,
'first-run-live-diagnostic.json')`; normalize and require exact direct parent
binding. Require literal existence and an ordinary non-directory,
non-reparse-point file. Read only it, parse JSON, and require the accepted
completed diagnostic identity: `checkInventoryExact=true`, `failureCount=0`,
and `browserClosed=true`.

Only after identity PASS, call `[IO.File]::Delete` once on that literal path and
require literal absence. Do not enumerate or inspect another file.

### 3. Literal summary identity and deletion

Construct only `[IO.Path]::Combine($resolvedRoot,
'first-run-live-summary.json')`; normalize and require exact direct parent
binding. Require literal existence and an ordinary non-directory,
non-reparse-point file. Read only it, parse JSON, and require schema
`horizon.first-run.live-summary.v1`, producer `playtest/e2e-playthrough.mjs`,
manifest `FRRC-002-v1`, exact product candidate
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`, exact probe candidate
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`, `externalQaRoot` equal to the
resolved root, exactly six layouts, and `pass=true`.

Only after identity PASS, call `[IO.File]::Delete` once on that literal path and
require literal absence. Do not enumerate or inspect another file.

### 4. Exact nonrecursive root deletion

After both literal files pass identity/deletion/absence, re-prove the exact
root token identity and containment. Without enumerating entries, attempt once:

```powershell
[System.IO.Directory]::Delete($resolvedRoot, $false)
```

Require root absence. A nonempty failure proves an undeclared residual entry;
do not inspect it, recurse, retry, or target another path.

Emit exactly:

```text
stage=corrected-success-artifact-cleanup tokenDecoded=<0|1> strictUtf8Decoded=<0|1> shaCreated=<0|1> shaComputed=<0|1> shaDisposed=<0|1> digestHexScalar=<0|1> digestHexShape=<0|1> digestMatch=<0|1> rootIdentityPass=<0|1> diagnosticExists=<0|1> diagnosticOrdinaryFile=<0|1> diagnosticIdentityPass=<0|1> diagnosticDeleteAttempt=<0|1> diagnosticAbsent=<0|1> summaryExists=<0|1> summaryOrdinaryFile=<0|1> summaryIdentityPass=<0|1> summaryDeleteAttempt=<0|1> summaryAbsent=<0|1> rootReproofPass=<0|1> rootDeleteAttempt=<0|1> rootDeleted=<0|1> cleanupPass=<0|1> successStreamItemCount=<1|other> nativeExit=<0|1>
```

Exact PASS requires every predicate 1, exactly one success-stream item (the
scalar), and native exit 0. Return **`CORRECTED SUCCESS ARTIFACT CLEANUP PASS /
DIAGNOSTIC DELETED / SUMMARY DELETED / ROOT DELETED / NO LIVE / STOP / RETURN
TO FRESH MISSION`**.

Any other result returns **`HOLD / CORRECTED SUCCESS ARTIFACT CLEANUP FAILURE /
NO ENUMERATION / NO ALTERNATE TARGET / NO RETRY / RETURN TO FRESH MISSION`**.
This authority permits one call, two literal file deletion attempts only after
identity proof, and one nonrecursive root deletion attempt.

## Preserved controls and boundaries

Geometry correction / diagnostic transport lineage remains
`8aa1dcaf2d5a347cc21ec48a4d6022485fe7cd97` /
`6c64eb354b7dbb467df5725e2cae4eb67092ddc7`. All immutable product,
validation, diagnostic, evidence, player, learning, privacy, save,
accessibility, route, world, MH-40, null-delta, `successor=null`, ending,
media, and one-E2E meanings remain exact.

VR-60 substantive PASS and cumulative accepted gates remain exact. All
thirteen OPEN classifications remain separate and unchanged; none is waived,
merged, closed, cured, or candidate evidence.

Diagnostic evidence remains non-release and forbidden verifier input. No
directory enumeration, third file/log assumption, recursive deletion,
alternate path, preview, network/process action, browser, E2E, verifier,
diagnostic transport, root creation, build, test, validator, PBA, product/
media/protected action, repository write, retry, downstream stage, maturity
advance, release, schedule, automation, or reveal is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / CORRECTED EXACT SUCCESS-
ARTIFACT TOKEN-BOUND CLEANUP ONLY / FRSH-003-v1-VR-65`**.
