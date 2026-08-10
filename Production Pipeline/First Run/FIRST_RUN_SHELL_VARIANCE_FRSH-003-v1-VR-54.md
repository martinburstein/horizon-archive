# First Run Shell Variance Reissue - Exact Token-Bound Retained-Root Cleanup Only

Variance ID: `FRSH-003-v1-VR-54`

Disposition: **`FIRST RUN SHELL READY / EXACT TOKEN-BOUND RETAINED-ROOT CLEANUP
ONLY / FRSH-003-v1-VR-54`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Mission source inspected:
`8d70921d7d3c6553a29540ea4e83f1db16cf6685`

Recorded: **2026-08-10**

## Context reuse and VR-53 adjudication

Fresh-child capacity remains unavailable. Root expressly authorized this
Mission Captain context to adjudicate VR-53 and issue cleanup recovery. The
reuse is disclosed, is not candidate evidence, and waives no boundary.

Mission accepts VR-53 Stage 1 PASS and its sole lawful retained identity:

```text
rootTokenB64=QzpcVXNlcnNcbWFydGlcQXBwRGF0YVxMb2NhbFxUZW1wXGhvcml6b24tYXJjaGl2ZS1mcnJjMDAyLTRkMjliOWQ2LTYzMzItNGM3Yy04ODdhLTcwMWI3ZDFmOGEzNQ==
rootTokenSha256=f9f20ff1dc54ca62993715bbc94d514f0f89570929b438bdf7b006c4a5ab703d
prodPid=0
fixturePid=0
```

Stage 2 was rejected by the tool-safety layer before PowerShell execution. It
performed no token decode, port query, launch, PID acquisition, readiness
request, preview, or cleanup. Mission classifies **`EXECUTION-CONTROL REJECTION
/ TOOL SAFETY / NON-EXECUTED / NO LIVE / VR-53 STAGE 2`**. It is non-evidence
for the candidate and is not a new OPEN divergence.

Stage 4 was submitted with the exact token/digest and PIDs 0/0, but PowerShell
failed at parse time before any token, process, port, root, or delete operation.
The compact loop forms omitted the required space before `in`. Mission records
**`REQUIRED CORRECTION / EXECUTION CONTROL / CLEANUP PARSER / RETAINED ROOT /
OPEN / VR-53 STAGE 4`** as an eleventh separate OPEN classification.

Stage 3 never ran. E2E, diagnostic, transport, summary, and verifier invocation
counts are zero. Neither classification is a geometry-candidate, product,
preview, browser, diagnostic, transport, summary, or verifier finding.

## Exact cleanup-only authority

Exact next owner is a **fresh Combat Engineer** if capacity permits; otherwise
context reuse must be disclosed. Execute one bounded PowerShell call only.
Embed the token/digest and PID values above literally. Do not obtain state by
listing, search, enumeration of paths, inference, substitution, or discovery.

### 1. Decode and bind the exact root

Decode the standard base64 token once to bytes, decode as strict UTF-8, reject
NUL/control characters, and normalize with `[System.IO.Path]::GetFullPath`.
Recompute SHA-256 over the exact decoded bytes using a fresh disposable
`[Security.Cryptography.SHA256]::Create()` and explicit
`ComputeHash([byte[]])`; dispose in `finally`; convert through uppercase 64-hex
and `ToLowerInvariant()` lowercase 64-hex; require exact ordinal equality with
the literal digest.

Resolve only the decoded literal root with `Resolve-Path -LiteralPath
-ErrorAction Stop`. Require normalized resolved identity equals normalized
decoded identity exactly, the anchored lowercase `horizon-archive-frrc002-`
GUID leaf shape, exact direct OS-temp parent, strict OS-temp containment,
bidirectional repository exclusion, distinction from the frozen predecessor
root, and directory existence. Emit no path, GUID, token, digest, bytes,
object, or exception.

### 2. Correct parser forms and bounded ownership checks

The PID values are exactly 0/0 because Stage 2 never executed. Use the parser-
correct loop exactly in this form:

```powershell
foreach ($processId in @($prodPid, $fixturePid)) {
    if ($processId -gt 0) { throw 'unexpected positive PID' }
}
```

Do not call `Get-Process`, stop a process, enumerate processes/listeners, or
infer ownership. Exact process inspection and stop counts must remain zero.

Use the parser-correct exact-port loop form:

```powershell
foreach ($portNumber in @(4173, 4184)) {
    # Query only 127.0.0.1:$portNumber and count it clear.
}
```

The loop may only query each literal port for a listener and count it clear.
No port was touched by VR-53, and no listener may be stopped or treated as
owned. Any active listener causes fail-closed HOLD before deletion.

### 3. Prove empty, delete once, verify absent

After all identity and port predicates pass, inspect only the exact resolved
root for emptiness without emitting entry names. Require zero entries. Attempt
exactly one nonrecursive deletion:

```powershell
[System.IO.Directory]::Delete($resolvedRoot, $false)
```

Require the exact directory absent afterward. Never create a root or target an
alternate, inferred, unresolved, repository, predecessor, wildcard, parent,
child, enumerated, or substituted path.

Emit exactly one ordered scalar:

```text
stage=cleanup-recovery tokenDecoded=<0|1> utf8Decoded=<0|1> shaCreated=<0|1> shaComputed=<0|1> shaDisposed=<0|1> digestShapePass=<0|1> digestMatch=<0|1> pathNormalized=<0|1> exactIdentityMatch=<0|1> nameShapePass=<0|1> parentPass=<0|1> tempDescendantPass=<0|1> repositoryExcludedPass=<0|1> predecessorDistinctPass=<0|1> rootExistsBefore=<0|1> pidInputCount=<0> processInspectionCount=<0> pidStopAttemptCount=<0> portQueryCount=<0..2> portsClearCount=<0..2> rootEmpty=<0|1> deleteAttemptCount=<0|1> rootDeleted=<0|1> cleanupPass=<0|1> nativeExit=<0|1>
```

Exact PASS requires every token/SHA/identity predicate 1; PID/process/stop
counts 0; port queries/clear count 2/2; root exists and empty 1/1; delete
attempt/root deleted 1/1; cleanup pass 1; and native exit 0. Return **`EXACT
TOKEN-BOUND ROOT CLEANUP PASS / ROOT DELETED / PORTS CLEAR / NO LIVE / STOP /
RETURN TO FRESH MISSION`**.

Any other result returns **`HOLD / EXACT TOKEN-BOUND ROOT CLEANUP FAILURE / NO
ALTERNATE TARGET / NO RETRY / RETURN TO FRESH MISSION`** with the scalar only.
This authority permits one cleanup call and no reformulation or retry.

## Preserved controls and classifications

Geometry correction / diagnostic transport / report lineage remains:

```text
8aa1dcaf2d5a347cc21ec48a4d6022485fe7cd97
6c64eb354b7dbb467df5725e2cae4eb67092ddc7
0ac9023037873004f7bd5d75c16f80953d770a4d
```

Exact immutable product / validation / diagnostic / evidence identities remain:

```text
a91763e28d488f31f8cf7d40ece0b2682246ba9b
4cd7fbf31291671dd28c0743b44a7c49aaad82bb
2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc
ca89a679195c11d441a76e6c02983a6436f2ccb2
```

The cumulative VR-22 tests/validators, VR-30 production build, VR-35 fixture
build/corrected PBA, VR-42 served identity, VR-44 transport proof, VR-46
geometry correction proof, VR-48 root control, VR-51 localization, and VR-52
SHA correction remain accepted without rerun.

The ten prior OPEN classifications remain unchanged: VR-17, VR-23, VR-24,
VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, and VR-50. The VR-53 Stage-4 cleanup
parser classification is the eleventh separate OPEN item. The Stage-2
tool-safety rejection is non-executed/non-evidence and not a new OPEN item.
None is waived, merged, closed, cured, or admitted as candidate evidence.

Diagnostic evidence remains non-release, forbidden verifier input, and no-
retry. Every frozen product, player, learning, privacy, save, accessibility,
route, world, MH-40, null-delta, `successor=null`, ending, media, and one-E2E
meaning remains exact. The single E2E budget remains unspent.

No root creation, other-path inspection, process/listener recovery, preview,
browser, E2E, diagnostic, transport, summary, verifier, build, test, validator,
PBA, served identity, product/media/protected action, repository write,
downstream stage, or release action is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / EXACT TOKEN-BOUND RETAINED-
ROOT CLEANUP ONLY / FRSH-003-v1-VR-54`**.
