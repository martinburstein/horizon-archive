# First Run Shell Variance Reissue - In-Memory Token Digest-Domain Correction Proof Only

Variance ID: `FRSH-003-v1-VR-62`

Disposition: **`FIRST RUN SHELL READY / IN-MEMORY TOKEN DIGEST-DOMAIN
CORRECTION PROOF ONLY / FRSH-003-v1-VR-62`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Mission source inspected:
`b21fa15be4e3fa12f1daedc498ebfd48ec6c3b79`

Recorded: **2026-08-10**

## Context reuse and VR-61 adjudication

Fresh-child capacity remains unavailable. Root expressly authorized this
Mission Captain context to adjudicate the VR-61 digest mismatch and issue only
a correction/localization control. The reuse is disclosed, is not candidate
evidence, and waives no boundary.

VR-61 decoded the supplied token and passed strict UTF-8 handling and SHA
execution/disposal, then reported digest mismatch before any filesystem, root,
or artifact operation. No literal artifact existence/identity read, deletion,
directory enumeration, root resolution, or root deletion occurred.

Mission independently audited only these literal values in memory:

```text
rootTokenB64=QzpcVXNlcnNcbWFydGlcQXBwRGF0YVxMb2NhbFxUZW1wXGhvcml6b24tYXJjaGl2ZS1mcnJjMDAyLTg1YmRjYmQzLThlZjctNGU3OC1iZGNiLWVjODgxNDFhMDczZQ==
rootTokenSha256=1c6a6df084f9917a37b27c1035f00929b9457b460aad323d1c4b65882dbd0654
```

The audit produced:

```text
decoded UTF-8/path bytes SHA-256 = 1c6a6df084f9917a37b27c1035f00929b9457b460aad323d1c4b65882dbd0654
base64 ASCII text bytes SHA-256 = 6db7019a2bb4983b3d6c63c0d1a9380f1263c665b5b32364a6eb41562c924ac8
normalized lowercase path UTF-8 SHA-256 = 22ddad7a2210b225abd36b2e5865aff624ad11423ea0fe8f73f7803fa1062c8a
normalized uppercase path UTF-8 SHA-256 = 1712564987d3e3cdc5dcc00dc5d2e5c40f3466467addf277a3aff0da27beb40e
```

Strict UTF-8 decode/re-encode reproduced the original decoded bytes and token
exactly. Pure `[System.IO.Path]::GetFullPath` normalization returned a string
ordinally equal to the decoded path, so its UTF-8 hash is the same exact
supplied digest.

Thus the Stage-1 transport contract is determinate: `rootTokenSha256` is
lowercase SHA-256 over the standard-base64 decoded `[byte[]]`, equivalently the
strict UTF-8 bytes of the exact normalized resolved path when the required
round-trip/equality predicates pass. It is not a hash over token text and does
not case-fold the path.

Mission records **`REQUIRED CORRECTION / EXECUTION CONTROL / CLEANUP TOKEN
DIGEST IMPLEMENTATION / OPEN / VR-61`** as a thirteenth separate OPEN
classification. The supplied token/digest pair itself is coherent; VR-61's
mismatch is implementation/control evidence, not token corruption, root
ambiguity, or a product/E2E finding.

## Exact in-memory correction proof

Exact next owner is a **fresh Combat Engineer** if capacity permits; otherwise
context reuse must be disclosed. Execute one bounded PowerShell call using only
the two literal strings above. Do not call `Test-Path`, `Resolve-Path`, any
file/directory API, any repository command, or any process/network API.

1. Decode the literal standard-base64 token once to `[byte[]]`.
2. Decode with strict non-BOM UTF-8 that throws on invalid input; reject NUL or
   control characters in memory.
3. Re-encode strict UTF-8; require byte-for-byte equality and exact canonical
   base64 reproduction.
4. Run `[System.IO.Path]::GetFullPath` only as a pure string normalization;
   require ordinal equality with the decoded string. Do not test or resolve it.
5. Compute lowercase SHA-256 over the original decoded `[byte[]]` using a fresh
   disposable `[Security.Cryptography.SHA256]::Create()` and explicit
   `ComputeHash([byte[]])`; require 64 lowercase hex and exact equality with
   the supplied digest.
6. Separately compute disposable SHA-256 over: ASCII bytes of the literal
   base64 text; UTF-8 bytes of the normalized string lowercased invariantly;
   and UTF-8 bytes of the normalized string uppercased invariantly. Require all
   three to differ from the supplied digest. These are negative domain controls
   only and may not replace the decoded-byte domain.
7. Dispose every created SHA object in `finally`. Suppress token, decoded path,
   byte arrays, objects, errors, and exceptions.

Emit exactly:

```text
stage=digest-domain-proof tokenDecoded=<0|1> strictUtf8Decoded=<0|1> decodedByteRoundTrip=<0|1> canonicalTokenRoundTrip=<0|1> pureNormalizationCompleted=<0|1> normalizedOrdinalEqual=<0|1> decodedDomainShaCreated=<0|1> decodedDomainShaComputed=<0|1> decodedDomainShaDisposed=<0|1> decodedDomainHexShape=<0|1> decodedDomainDigestMatch=<0|1> base64AsciiDigestMatch=<0|1> lowerPathDigestMatch=<0|1> upperPathDigestMatch=<0|1> negativeDomainControlPass=<0|1> digestContractPass=<0|1> nativeExit=<0|1>
```

Exact PASS requires all positive predicates 1, all three alternate-domain
match predicates 0, negative-domain control 1, digest-contract pass 1, and
native exit 0. Return **`TOKEN DIGEST-DOMAIN CORRECTION PROOF PASS / DECODED
BYTE DOMAIN EXACT / NO FILESYSTEM ACTION / STOP / RETURN TO FRESH MISSION`**.

Any other result returns **`HOLD / TOKEN DIGEST-DOMAIN CORRECTION UNRESOLVED /
NO FILESYSTEM ACTION / NO RETRY / RETURN TO FRESH MISSION`**. No same-context
reformulation or cleanup continuation is authorized even on PASS.

## Preserved controls and boundaries

VR-60's substantive one-E2E PASS remains accepted: diagnostic inventory exact,
failure 0, browser closed, summary 1, verifier 1 PASS, PIDs absent, ports clear.
The exact success-artifact allowlist remains diagnostic and summary JSON only,
but neither may be accessed under this shell.

The twelve prior OPEN classifications remain unchanged; the VR-61 cleanup
digest implementation is the thirteenth separate OPEN item. None is waived,
merged, closed, cured, or candidate evidence.

The corrected E2E budget is consumed. Diagnostic evidence remains non-release
and forbidden verifier input. Every frozen product, player, learning, privacy,
save, accessibility, route, world, MH-40, null-delta, `successor=null`, ending,
media, candidate, and one-E2E meaning remains exact.

No filesystem/root/artifact existence or identity access, directory
enumeration, deletion, preview, network, process, browser, E2E, verifier,
diagnostic transport, root creation, build, test, validator, PBA, product/
media/protected action, repository write, retry, downstream stage, maturity
advance, release, schedule, automation, or reveal is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / IN-MEMORY TOKEN DIGEST-DOMAIN
CORRECTION PROOF ONLY / FRSH-003-v1-VR-62`**.
