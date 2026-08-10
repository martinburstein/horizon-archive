# First Run Shell Variance Reissue - BitConverter In-Memory Digest-Domain Proof Only

Variance ID: `FRSH-003-v1-VR-64`

Disposition: **`FIRST RUN SHELL READY / BITCONVERTER IN-MEMORY DIGEST-DOMAIN
PROOF ONLY / FRSH-003-v1-VR-64`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Mission source inspected:
`d40a1fd357f7db41efb2ffabf5d6b756b7080f60`

Recorded: **2026-08-10**

## Context reuse and VR-63 adjudication

Fresh-child capacity remains unavailable. Root expressly authorized this
Mission Captain context to adjudicate VR-63 and issue a corrected in-memory
proof only. The reuse is disclosed, is not candidate evidence, and waives no
boundary.

VR-63 performed no filesystem, root, artifact, process, network, or repository
action. Its token decode, strict UTF-8, canonical round trip, pure normalization,
first inline SHA creation/computation/disposal, and output-suppression controls
passed. The reached failure was the first hex conversion: this runtime does not
provide `[Convert]::ToHexString`, so `positiveHexShape=0`; the three negative
domains were correctly unreached.

Mission classifies **`EXECUTION-CONTROL LOCALIZATION / UNAVAILABLE
CONVERT.TOHEXSTRING / VR-63`** under the existing **`REQUIRED CORRECTION /
EXECUTION CONTROL / CLEANUP TOKEN DIGEST IMPLEMENTATION / OPEN / VR-61`**.
It does not create a fourteenth OPEN classification or alter the Stage-1 byte-
domain contract.

## Exact corrected in-memory proof

Exact next owner is a **fresh Combat Engineer** if capacity permits; otherwise
context reuse must be disclosed. Execute one bounded PowerShell call using only:

```text
rootTokenB64=QzpcVXNlcnNcbWFydGlcQXBwRGF0YVxMb2NhbFxUZW1wXGhvcml6b24tYXJjaGl2ZS1mcnJjMDAyLTg1YmRjYmQzLThlZjctNGU3OC1iZGNiLWVjODgxNDFhMDczZQ==
rootTokenSha256=1c6a6df084f9917a37b27c1035f00929b9457b460aad323d1c4b65882dbd0654
```

Do not define or call a hash helper/function/scriptblock. Compute four domains
inline: decoded base64 `[byte[]]` as the positive domain; base64-text ASCII,
normalized-path lowercase UTF-8, and normalized-path uppercase UTF-8 as the
three negative domains. Do not call `Test-Path`, `Resolve-Path`, any filesystem
API, repository command, process API, or network API.

For each domain:

1. create a fresh `[Security.Cryptography.SHA256]::Create()` instance;
2. call explicit `ComputeHash([byte[]]$domainBytes)`;
3. dispose in `finally`; and
4. convert the returned hash bytes only with the proven runtime-compatible
   expression:

```powershell
$hex = [BitConverter]::ToString($digest).Replace('-', '').ToLowerInvariant()
```

Require `$hex` is one scalar string matching `^[0-9a-f]{64}$`. The positive
hex must equal the supplied digest ordinally. Each negative hex must differ.

Explicitly suppress every intermediate assignment, method/ref/setter result,
SHA object, byte array, string transform, and dispose result using `$null =`,
`[void](...)`, or a simple non-emitting assignment. Never leave a method call
or expression bare. Emit no token, decoded path, digest, bytes, object, error,
or exception. Emit one final scalar line only.

```text
stage=bitconverter-digest-proof tokenDecoded=<0|1> strictUtf8Decoded=<0|1> decodedByteRoundTrip=<0|1> canonicalTokenRoundTrip=<0|1> normalizedOrdinalEqual=<0|1> shaCreateCount=<0..4> shaComputeCount=<0..4> shaDisposeCount=<0..4> positiveHexScalar=<0|1> positiveHexShape=<0|1> decodedDomainDigestMatch=<0|1> base64AsciiHexScalar=<0|1> base64AsciiHexShape=<0|1> base64AsciiDigestMatch=<0|1> lowerHexScalar=<0|1> lowerHexShape=<0|1> lowerDigestMatch=<0|1> upperHexScalar=<0|1> upperHexShape=<0|1> upperDigestMatch=<0|1> negativeDomainControlPass=<0|1> successStreamItemCount=<1|other> digestContractPass=<0|1> nativeExit=<0|1>
```

Exact PASS requires all positive predicates 1; SHA counts 4/4/4; every hex
scalar/shape 1; decoded-domain match 1; all negative-domain matches 0; negative
control 1; exactly one success-stream item, the scalar; digest-contract pass 1;
native exit 0.

Return **`BITCONVERTER TOKEN DIGEST PROOF PASS / DECODED BYTE DOMAIN EXACT /
ONE SCALAR ONLY / NO FILESYSTEM ACTION / STOP / RETURN TO FRESH MISSION`**.
Any other result returns **`HOLD / BITCONVERTER DIGEST PROOF FAILURE / NO
FILESYSTEM ACTION / NO RETRY / RETURN TO FRESH MISSION`**.

No cleanup or filesystem continuation is authorized even on PASS.

## Preserved controls and boundaries

VR-60's substantive one-E2E PASS remains accepted: inventory exact, failure 0,
browser closed, summary 1, verifier 1 PASS, PIDs absent, ports clear. Its exact
success-artifact allowlist remains diagnostic and summary JSON only, but neither
may be accessed under this shell.

All thirteen OPEN classifications remain unchanged. VR-62 and VR-63 are
localization evidence under VR-61, not new items. None is waived, merged,
closed, cured, or candidate evidence.

The corrected E2E budget is consumed. Diagnostic evidence remains non-release
and forbidden verifier input. Every frozen identity, candidate, player,
learning, privacy, save, accessibility, route, world, MH-40, null-delta,
`successor=null`, ending, media, and one-E2E meaning remains exact.

No filesystem/root/artifact access, directory enumeration, deletion, cleanup
continuation, preview, network, process, browser, E2E, verifier, diagnostic
transport, root creation, build, test, validator, PBA, product/media/protected
action, repository write, retry, downstream stage, maturity advance, release,
schedule, automation, or reveal is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / BITCONVERTER IN-MEMORY
DIGEST-DOMAIN PROOF ONLY / FRSH-003-v1-VR-64`**.
