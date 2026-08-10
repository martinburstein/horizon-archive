# First Run Shell Variance Reissue - Root-Only Disposable SHA-256 Correction Control

Variance ID: `FRSH-003-v1-VR-52`

Disposition: **`FIRST RUN SHELL READY / ROOT-ONLY DISPOSABLE SHA-256 CORRECTION
CONTROL / FRSH-003-v1-VR-52`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Mission source inspected:
`8803a6dc0baf646d0add69f45562fa1ec536b79d`

Geometry correction / diagnostic transport / report lineage:

```text
8aa1dcaf2d5a347cc21ec48a4d6022485fe7cd97
6c64eb354b7dbb467df5725e2cae4eb67092ddc7
0ac9023037873004f7bd5d75c16f80953d770a4d
```

Exact immutable product / validation / diagnostic / evidence identities:

```text
a91763e28d488f31f8cf7d40ece0b2682246ba9b
4cd7fbf31291671dd28c0743b44a7c49aaad82bb
2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc
ca89a679195c11d441a76e6c02983a6436f2ccb2
```

Recorded: **2026-08-10**

## Context reuse and VR-51 adjudication

Fresh-child capacity remains unavailable. Root expressly authorized this
Mission Captain context to adjudicate VR-51 and issue the next bounded shell.
The reuse is disclosed, is not candidate evidence, and waives no boundary.

Mission accepts VR-51's exact localization outcome:

- every pre-create and legacy post-create root predicate passed;
- retained-identity assignment and exact assignment equality passed;
- strict UTF-8 encoding, standard base64 encoding, and byte-for-byte base64
  round trip passed;
- the earliest reached failure was `digestComputed=0`;
- `digestShape`, `digestRecomputeMatch`, and the aggregate token predicate were
  correctly `NA`; and
- exact cleanup attempted once, deleted the same empty root, and left no root.

No token, digest, path, GUID, PID, preview, browser, E2E, diagnostic, summary,
or verifier was emitted or retained. No live action occurred and the E2E
invocation count remains zero.

Mission classifies **`EXECUTION-CONTROL LOCALIZATION / SHA-256 API INVOCATION /
VR-51`**. The evidence localizes the existing VR-50 Stage-1 correction to the
SHA operation; it does not establish a new candidate, product, layout,
browser, diagnostic, transport, or verifier finding and does not create an
eleventh OPEN classification.

## Exact correction vector

The correction is limited to the PowerShell/.NET hashing vector. Use the
already proven identity bytes and the disposable API explicitly:

```powershell
$sha = [Security.Cryptography.SHA256]::Create()
$hashBytes = $sha.ComputeHash([byte[]]$identityBytes)
$sha.Dispose()
```

Do not use a static SHA method, `HashData`, `Get-FileHash`, shell pipeline,
string-to-overload inference, generic equality helper, external executable, or
file-backed hash. `ComputeHash` must receive an explicit `[byte[]]`. Every
created SHA instance must be disposed in `finally` even if its computation
fails.

Convert returned hash bytes to uppercase hexadecimal with
`[BitConverter]::ToString($hashBytes).Replace('-', '')`; require exactly 64
characters matching `^[0-9A-F]{64}$`. Convert that exact value with
`ToLowerInvariant()`; require exactly 64 characters matching
`^[0-9a-f]{64}$`. Use a second fresh disposable SHA-256 instance to recompute
from the exact same `[byte[]]`; apply the same uppercase/lowercase conversion;
require exact ordinal equality of both lowercase digests.

## Exact root-only correction-control authority

Exact next owner is a **fresh Combat Engineer** if capacity permits; otherwise
context reuse must be disclosed. Execute exactly one bounded PowerShell call
containing only the following lifecycle:

1. Create one fresh direct OS-temp child using the proven VR-48/VR-51 leaf,
   parent, containment, repository-exclusion, predecessor-distinction, and
   nonexistence protocol.
2. Resolve after creation and require every accepted legacy post-create
   identity predicate.
3. Assign the normalized resolved identity; strict-UTF-8 encode it; standard-
   base64 encode/decode it; and require byte-for-byte round-trip, using the
   exact operations that passed VR-51.
4. Apply the exact disposable SHA-256 correction vector above twice and record
   each creation, computation, disposal, uppercase/lowercase shape, and
   recompute-equality result separately.
5. Suppress every path, GUID, root token, digest, byte array, directory object,
   SHA object, exception, and command output.
6. In `finally`, re-resolve and re-prove the exact created candidate, delete
   that empty root once with `[System.IO.Directory]::Delete($resolvedRoot,
   $false)`, and require absence. Never target an alternate, inferred,
   unresolved, repository, predecessor, wildcard, or enumerated path.

Emit exactly one ordered scalar after cleanup:

```text
stage=sha-correction rootPredicatesPass=<0|1> identityTokenPredicatesPass=<0|1|NA> sha1Created=<0|1|NA> sha1Computed=<0|1|NA> sha1Disposed=<0|1|NA> sha1UpperHexShape=<0|1|NA> sha1LowerHexShape=<0|1|NA> sha2Created=<0|1|NA> sha2Computed=<0|1|NA> sha2Disposed=<0|1|NA> sha2UpperHexShape=<0|1|NA> sha2LowerHexShape=<0|1|NA> digestRecomputeMatch=<0|1|NA> digestCorrectionPass=<0|1|NA> cleanupAttemptCount=<0|1> rootDeleted=<0|1> nativeExit=<0|1>
```

Use `NA` for an unreached predicate and `0` only for a reached failure. A SHA
instance created before a later failure must still report `Disposed=1` after
its `finally` block.

Exact PASS requires root and identity/token predicates 1; both SHA instances
created/computed/disposed 1; both uppercase and lowercase shape pairs 1;
recompute match and correction pass 1; cleanup attempt/root deleted 1/1; and
native exit 0. Return **`DISPOSABLE SHA-256 CORRECTION CONTROL PASS / ROOT
DELETED / NO LIVE / STOP / RETURN TO FRESH MISSION`**.

Any other result returns **`HOLD / DISPOSABLE SHA-256 CORRECTION CONTROL
FAILURE / EXACT CLEANUP RESULT / NO LIVE / NO RERUN / RETURN TO FRESH
MISSION`**. One root lifecycle is the entire authority. Do not retain or emit
the computed token/digests, continue to a preview stage, correct again, or
retry.

## Preserved controls and classifications

The accepted VR-48 atomic root PASS and VR-51 non-SHA predicate results remain
exact. The cumulative VR-22 tests/validators, VR-30 production build, VR-35
fixture build/corrected PBA, VR-42 formal served identity, VR-44 transport-
control proof, and VR-46 exact correction proof remain accepted without rerun.

All ten OPEN classifications remain separate:

1. `UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN / VR-17`;
2. `UNAUTHORIZED DIVERGENCE / BROAD REPOSITORY FILENAME ENUMERATION / OPEN /
   VR-23`;
3. `UNAUTHORIZED DIVERGENCE / UNTRACKED PATHNAME ENUMERATION / OPEN / VR-24
   COMBAT ATTEMPT`;
4. `UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-25
   MISSION`;
5. `UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-28
   MISSION STAGING`;
6. `UNAUTHORIZED DIVERGENCE / EXACT-PORT LISTENER OWNERSHIP RECOVERY / OPEN /
   VR-39`;
7. `UNAUTHORIZED DIVERGENCE / PARSER DIAGNOSTIC SCALAR OUTPUT / OPEN / VR-41`;
8. `UNAUTHORIZED DIVERGENCE / VALIDATION COMMAND SELECTION / OPEN / VR-46
   COMBAT`;
9. `REQUIRED CORRECTION / EXECUTION CONTROL / PRE-ROOT SCALAR TRANSPORT / OPEN
   / VR-47`; and
10. `REQUIRED CORRECTION / EXECUTION CONTROL / STAGE-1 POST-CREATE ROOT PROOF /
    OPEN / VR-50`.

The VR-49 tool-safety rejection remains non-executed/non-evidence. VR-51 is
localization evidence for item 10, not a new OPEN classification. None is
waived, merged, closed, cured, or admitted as candidate evidence.

Diagnostic evidence remains non-release, forbidden verifier input, and no-
retry. Every frozen product, player, learning, privacy, save, accessibility,
route, world, MH-40, null-delta, `successor=null`, ending, media, and one-E2E
meaning remains exact.

No retained token, port, process, preview, browser, E2E, diagnostic, transport,
summary, verifier, build, test, validator, PBA, served-identity, product/media/
protected, repository-write, downstream-stage, or release action is
authorized.

Mission Captain signs **`FIRST RUN SHELL READY / ROOT-ONLY DISPOSABLE SHA-256
CORRECTION CONTROL / FRSH-003-v1-VR-52`**.
