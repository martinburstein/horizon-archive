# First Run Shell Variance Reissue - Exact Success-Artifact-Aware Token-Bound Root Cleanup Only

Variance ID: `FRSH-003-v1-VR-61`

Disposition: **`FIRST RUN SHELL READY / EXACT SUCCESS-ARTIFACT-AWARE TOKEN-
BOUND ROOT CLEANUP ONLY / FRSH-003-v1-VR-61`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Mission source inspected:
`684e133a3d27a43201489f829095ad1ee26f94e1`

Recorded: **2026-08-10**

## Context reuse and substantive VR-60 adjudication

Fresh-child capacity remains unavailable. Root expressly authorized this
Mission Captain context to adjudicate VR-60 and issue artifact-aware cleanup.
The reuse is disclosed, is not candidate evidence, and waives no boundary.

Mission accepts VR-60's sole corrected complete E2E substantive result:

- exactly one E2E invocation, exit 0;
- `checkInventoryExact=true`, `failureCount=0`, `browserClosed=true`;
- diagnostic transport attempt 0;
- exactly one complete summary;
- exactly one verifier attempt and PASS;
- fixture PID `37996` and production PID `30248` absent; and
- ports 4184 and 4173 clear.

Call 9 re-proved the exact root identity, observed it nonempty, and correctly
made no deletion attempt. There was no directory enumeration, artifact
deletion, recursive removal, alternate path, or retry. This cleanup HOLD does
not negate or weaken the substantive E2E PASS.

Mission records **`REQUIRED CORRECTION / EVIDENCE CLEANUP CONTRACT / SUCCESS-
ARTIFACT-AWARE ROOT DELETION / OPEN / VR-60 CALL 9`** as a twelfth separate
OPEN classification. It is not a product, geometry, journey, layout, runtime,
performance, diagnostic, summary, or verifier failure.

## Exact artifact allowlist adjudication

FRRC-002 `complete-e2e.output_port_ownership` declares the fresh external QA
root, `first-run-live-diagnostic.json` on every completed aggregate evaluation,
and `first-run-live-summary.json` only after all live gates pass. Its cleanup
contract retains the success root through `live-summary-verify`, then removes
only the exact owned root after repeated containment proof.

VR-60 proves a completed successful aggregate evaluation and exactly one
summary/verifier PASS. Therefore the exact owned success-artifact allowlist is:

```text
first-run-live-diagnostic.json
first-run-live-summary.json
```

FRRC-002 declares no owned success log file. No log, screenshot, trace, video,
browser artifact, subdirectory, alternate diagnostic/summary name, or inferred
file is authorized. This allowlist is exact and sufficient; no directory
inspection is needed or permitted. Any undeclared residual entry must cause
nonrecursive root deletion to fail closed.

## Exact token-bound cleanup authority

Exact next owner is a **fresh Combat Engineer** if capacity permits; otherwise
context reuse must be disclosed. Execute one bounded PowerShell call only with
these literal inputs:

```text
rootTokenB64=QzpcVXNlcnNcbWFydGlcQXBwRGF0YVxMb2NhbFxUZW1wXGhvcml6b24tYXJjaGl2ZS1mcnJjMDAyLTg1YmRjYmQzLThlZjctNGU3OC1iZGNiLWVjODgxNDFhMDczZQ==
rootTokenSha256=1c6a6df084f9917a37b27c1035f00929b9457b460aad323d1c4b65882dbd0654
```

Suppress every path, filename, token, digest, JSON body, object, exception,
error, and command output. Emit only the final scalar.

### 1. Bind the exact root

Decode standard base64 to bytes, decode strict UTF-8, reject NUL/control
characters, and normalize once. Recompute the digest using a fresh disposable
`[Security.Cryptography.SHA256]::Create()` with explicit
`ComputeHash([byte[]])`, disposal in `finally`, uppercase/lowercase 64-hex
shape, and exact ordinal lowercase equality with the literal digest.

Resolve only the decoded root with `Resolve-Path -LiteralPath -ErrorAction
Stop`. Require exact normalized identity equality, anchored lowercase
`horizon-archive-frrc002-<GUID>` leaf, direct OS-temp parent, strict temp
containment, bidirectional repository exclusion, frozen-predecessor
distinction, and directory existence. Do not inspect any other path.

### 2. Verify and delete only the two literal files

Construct each path only with `[System.IO.Path]::Combine($resolvedRoot,
<literal-name>)`, normalize it, and require its direct parent and path prefix
bind it strictly to the exact resolved root. Do not use wildcard, glob,
`Get-ChildItem`, directory enumeration, recursive API, or inferred filename.

For literal `first-run-live-diagnostic.json`:

- require literal file existence and not a directory/reparse point;
- read only that file and parse JSON;
- require the accepted completed diagnostic identity:
  `checkInventoryExact=true`, `failureCount=0`, and `browserClosed=true`; and
- delete it once with `[System.IO.File]::Delete`, then require literal absence.

For literal `first-run-live-summary.json`:

- require literal file existence and not a directory/reparse point;
- read only that file and parse JSON;
- require schema `horizon.first-run.live-summary.v1`, producer
  `playtest/e2e-playthrough.mjs`, manifest `FRRC-002-v1`, exact product and
  probe candidate identities from this shell, exact `externalQaRoot` equality
  to the resolved root, six layouts, and `pass=true`; and
- delete it once with `[System.IO.File]::Delete`, then require literal absence.

File identity failure forbids deletion of that file and the root. Do not
inspect or delete anything else.

### 3. Delete only the now-empty exact root

After both literal files pass identity, deletion, and absence predicates,
re-prove the root identity and containment predicates. Without enumerating
entries, attempt exactly one nonrecursive deletion:

```powershell
[System.IO.Directory]::Delete($resolvedRoot, $false)
```

Successful nonrecursive deletion proves there was no undeclared residual
entry. Require exact root absence afterward. If deletion reports nonempty or
otherwise fails, do not inspect contents, retry, recurse, or delete another
path; return fail-closed HOLD.

Emit exactly:

```text
stage=success-artifact-cleanup tokenDecoded=<0|1> utf8Decoded=<0|1> shaComputed=<0|1> shaDisposed=<0|1> digestMatch=<0|1> rootIdentityPass=<0|1> diagnosticExists=<0|1> diagnosticOrdinaryFile=<0|1> diagnosticIdentityPass=<0|1> diagnosticDeleteAttempt=<0|1> diagnosticAbsent=<0|1> summaryExists=<0|1> summaryOrdinaryFile=<0|1> summaryIdentityPass=<0|1> summaryDeleteAttempt=<0|1> summaryAbsent=<0|1> rootReproofPass=<0|1> rootDeleteAttempt=<0|1> rootDeleted=<0|1> cleanupPass=<0|1> nativeExit=<0|1>
```

Exact PASS requires every scalar 1 except native exit, which must be 0. Return
**`SUCCESS ARTIFACT CLEANUP PASS / DIAGNOSTIC DELETED / SUMMARY DELETED / ROOT
DELETED / NO LIVE / STOP / RETURN TO FRESH MISSION`**.

Any other result returns **`HOLD / SUCCESS ARTIFACT CLEANUP FAILURE / NO
ENUMERATION / NO ALTERNATE TARGET / NO RETRY / RETURN TO FRESH MISSION`**.
This authority permits one call, two literal file deletion attempts only after
identity proof, and one nonrecursive exact-root deletion attempt.

## Preserved controls and boundaries

Geometry correction / diagnostic transport / report lineage remains:

```text
8aa1dcaf2d5a347cc21ec48a4d6022485fe7cd97
6c64eb354b7dbb467df5725e2cae4eb67092ddc7
0ac9023037873004f7bd5d75c16f80953d770a4d
```

Immutable product / validation / diagnostic / evidence identities remain:

```text
a91763e28d488f31f8cf7d40ece0b2682246ba9b
4cd7fbf31291671dd28c0743b44a7c49aaad82bb
2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc
ca89a679195c11d441a76e6c02983a6436f2ccb2
```

The cumulative accepted gates and substantive VR-60 PASS remain exact. The
eleven prior OPEN classifications remain unchanged; VR-60 Call 9 is the
twelfth separate OPEN cleanup-contract item. None is waived, merged, closed,
cured, or candidate evidence.

The sole corrected E2E budget is consumed. Diagnostic evidence remains non-
release and forbidden verifier input. Every frozen product, player, learning,
privacy, save, accessibility, route, world, MH-40, null-delta,
`successor=null`, ending, media, and one-E2E meaning remains exact.

No directory enumeration, third file/log assumption, recursive deletion,
alternate path, preview, process/listener action, browser, E2E, verifier,
diagnostic transport, root creation, build, test, validator, PBA, product/
media/protected action, repository write, retry, downstream stage, maturity
advance, release, schedule, automation, or reveal is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / EXACT SUCCESS-ARTIFACT-AWARE
TOKEN-BOUND ROOT CLEANUP ONLY / FRSH-003-v1-VR-61`**.
