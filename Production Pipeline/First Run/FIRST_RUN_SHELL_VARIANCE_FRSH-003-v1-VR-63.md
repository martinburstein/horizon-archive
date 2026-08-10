# First Run Shell Variance Reissue - Output-Suppressed In-Memory Digest-Domain Proof Only

Variance ID: `FRSH-003-v1-VR-63`

Disposition: **`FIRST RUN SHELL READY / OUTPUT-SUPPRESSED IN-MEMORY DIGEST-
DOMAIN PROOF ONLY / FRSH-003-v1-VR-63`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Mission source inspected:
`a8a0a7e3ff28b0479a5b907cc9b83559c306328e`

Recorded: **2026-08-10**

## Context reuse and VR-62 adjudication

Fresh-child capacity remains unavailable. Root expressly authorized this
Mission Captain context to adjudicate VR-62 and issue a corrected proof only.
The reuse is disclosed, is not candidate evidence, and waives no boundary.

VR-62 performed no filesystem, root, artifact, process, network, or repository
action. Its token decode, strict UTF-8, round-trip, disposable SHA creation,
computation, and disposal predicates passed. The reached failure was
`positiveHexShape=0` because the proof helper allowed an intermediate value to
contaminate PowerShell's success stream, so its returned positive digest was a
non-scalar collection. Negative domains were correctly unreached.

This is **`EXECUTION-CONTROL LOCALIZATION / POWERSHELL SUCCESS-STREAM
CONTAMINATION / VR-62`** under the existing **`REQUIRED CORRECTION / EXECUTION
CONTROL / CLEANUP TOKEN DIGEST IMPLEMENTATION / OPEN / VR-61`** classification.
It does not create a fourteenth OPEN item and does not contradict Mission's
literal audit or the Stage-1 digest source contract.

## Exact output-suppressed proof

Exact next owner is a **fresh Combat Engineer** if capacity permits; otherwise
context reuse must be disclosed. Execute one bounded PowerShell call using only:

```text
rootTokenB64=QzpcVXNlcnNcbWFydGlcQXBwRGF0YVxMb2NhbFxUZW1wXGhvcml6b24tYXJjaGl2ZS1mcnJjMDAyLTg1YmRjYmQzLThlZjctNGU3OC1iZGNiLWVjODgxNDFhMDczZQ==
rootTokenSha256=1c6a6df084f9917a37b27c1035f00929b9457b460aad323d1c4b65882dbd0654
```

Do not define or call a hash helper/function/scriptblock. Compute the four
domains inline and independently. Do not call `Test-Path`, `Resolve-Path`, any
filesystem API, repository command, process API, or network API.

### Success-stream discipline

For every intermediate operation, assign to a variable with output suppressed
using `$null = ...`, `[void](...)`, or a simple non-emitting assignment. This
includes base64 decode, UTF-8 decode/encode, pure `GetFullPath`, SHA creation,
`ComputeHash([byte[]])`, `BitConverter` conversion, `Replace`,
`ToLowerInvariant`, all collection/ref/setter operations, and `Dispose`.

Every fresh SHA instance must be disposed in `finally` using an explicitly
suppressed call. Never leave an expression or method invocation bare. Do not
emit a SHA object, byte array, path string, token, digest string, boolean, or
intermediate object. Construct one final scalar line only after all four
domains finish.

### Positive and negative domains

1. Decode standard base64 to `[byte[]]`; strict-UTF-8 decode; reject NUL/control
   characters; strict-UTF-8 re-encode; require byte and canonical-token round
   trips.
2. Run pure `[System.IO.Path]::GetFullPath` and require ordinal equality to the
   decoded string without testing/resolving it.
3. Positive domain: disposable SHA-256 with explicit
   `ComputeHash([byte[]]$decodedBytes)`; convert to exactly one lowercase
   64-hex scalar; require exact supplied-digest equality.
4. Negative domains, each with its own disposable SHA: ASCII bytes of the
   literal base64 text; UTF-8 bytes of normalized string lowercased invariantly;
   UTF-8 bytes of normalized string uppercased invariantly. Require each
   lowercase 64-hex scalar and require all three differ from the supplied
   digest.
5. Require exactly four SHA instances created/computed/disposed and no
   success-stream item before the final scalar. Implement the output count by
   keeping all intermediate work inside suppressed assignments; do not capture
   or replay the token/path/digests.

Emit exactly one ordered line:

```text
stage=output-suppressed-digest-proof tokenDecoded=<0|1> strictUtf8Decoded=<0|1> decodedByteRoundTrip=<0|1> canonicalTokenRoundTrip=<0|1> normalizedOrdinalEqual=<0|1> shaCreateCount=<0..4> shaComputeCount=<0..4> shaDisposeCount=<0..4> positiveHexScalar=<0|1> positiveHexShape=<0|1> decodedDomainDigestMatch=<0|1> base64AsciiHexScalar=<0|1> base64AsciiHexShape=<0|1> base64AsciiDigestMatch=<0|1> lowerHexScalar=<0|1> lowerHexShape=<0|1> lowerDigestMatch=<0|1> upperHexScalar=<0|1> upperHexShape=<0|1> upperDigestMatch=<0|1> negativeDomainControlPass=<0|1> successStreamItemCount=<1|other> digestContractPass=<0|1> nativeExit=<0|1>
```

Exact PASS requires positive predicates 1; SHA counts 4/4/4; every hex scalar/
shape predicate 1; decoded-domain match 1; all three negative matches 0;
negative control 1; success-stream item count exactly 1 (the final scalar
only); digest-contract pass 1; native exit 0.

Return **`OUTPUT-SUPPRESSED TOKEN DIGEST PROOF PASS / DECODED BYTE DOMAIN
EXACT / ONE SCALAR ONLY / NO FILESYSTEM ACTION / STOP / RETURN TO FRESH
MISSION`**. Any other result returns **`HOLD / OUTPUT-SUPPRESSED DIGEST PROOF
FAILURE / NO FILESYSTEM ACTION / NO RETRY / RETURN TO FRESH MISSION`**.

No cleanup or filesystem continuation is authorized even on PASS.

## Preserved controls and boundaries

VR-60's substantive one-E2E PASS remains accepted: inventory exact, failure 0,
browser closed, summary 1, verifier 1 PASS, PIDs absent, ports clear. Its exact
success-artifact allowlist remains diagnostic and summary JSON only, but neither
may be accessed under this shell.

All thirteen OPEN classifications remain unchanged. VR-62 is localization
evidence under VR-61, not a new item. None is waived, merged, closed, cured, or
candidate evidence.

The corrected E2E budget is consumed. Diagnostic evidence remains non-release
and forbidden verifier input. Every frozen identity, candidate, player,
learning, privacy, save, accessibility, route, world, MH-40, null-delta,
`successor=null`, ending, media, and one-E2E meaning remains exact.

No filesystem/root/artifact access, directory enumeration, deletion, cleanup
continuation, preview, network, process, browser, E2E, verifier, diagnostic
transport, root creation, build, test, validator, PBA, product/media/protected
action, repository write, retry, downstream stage, maturity advance, release,
schedule, automation, or reveal is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / OUTPUT-SUPPRESSED IN-MEMORY
DIGEST-DOMAIN PROOF ONLY / FRSH-003-v1-VR-63`**.
