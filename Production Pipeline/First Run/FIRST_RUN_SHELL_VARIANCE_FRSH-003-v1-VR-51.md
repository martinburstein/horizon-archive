# First Run Shell Variance Reissue - Stage-1 Post-Create Predicate Localization Only

Variance ID: `FRSH-003-v1-VR-51`

Disposition: **`FIRST RUN SHELL READY / STAGE-1 POST-CREATE PREDICATE
LOCALIZATION ONLY / FRSH-003-v1-VR-51`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Mission source inspected:
`b4b77590b99369773b7b958483c2586d0af1aa21`

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

## Context reuse and VR-50 adjudication

Fresh-child capacity remains unavailable. Root expressly authorized this
Mission Captain context to adjudicate VR-50 and issue the next bounded shell.
The reuse is disclosed, is not candidate evidence, and waives no boundary.

Mission accepts the exact VR-50 Stage 1 scalar:

```text
stage=1 rootControlPass=0 preExists=0 createAttemptCount=1 createExit=0 postExists=1 rootRetained=0 failureRootCleanupAttempt=1 failureRootDeleted=1 rootTokenB64= rootTokenSha256= nativeExit=1
```

It proves one fresh directory was created successfully and observed as a
directory. A later aggregate post-create proof failed before the implementation
set `rootRetained` or emitted token/digest transport. The authorized failure
branch resolved and deleted that same empty candidate exactly once. No root,
token, PID, preview, browser, E2E, diagnostic, summary, or verifier remains.
The E2E invocation count is zero.

Mission records **`REQUIRED CORRECTION / EXECUTION CONTROL / STAGE-1 POST-
CREATE ROOT PROOF / OPEN / VR-50`**. This is a tenth separate OPEN
classification and establishes no candidate, product, layout, browser,
diagnostic, transport, summary, or verifier finding.

## Predicate comparison and localization boundary

The accepted VR-48 atomic root control already proved post-create resolution,
exact candidate equality, anchored leaf, exact direct parent, strict OS-temp
containment, bidirectional repository exclusion, predecessor distinction, and
directory existence. VR-50 stated that it reused those predicates.

VR-50 newly required the resolved identity to be retained and transformed into
UTF-8 bytes, standard base64, and lowercase SHA-256 transport. Its scalar did
not expose any individual legacy post-create result or any new token-construction
result. Because `rootRetained` was assigned only after the aggregate proof,
`createExit=0 postExists=1 rootRetained=0` cannot distinguish:

- a legacy post-resolve implementation mismatch;
- retained-identity assignment failure; or
- a UTF-8/base64/SHA-256 construction or round-trip predicate failure.

No specific failed predicate is lawfully inferable. Mission authorizes one
scalar-localization root lifecycle only; it does not authorize a speculative
correction or another complete staged run.

## Exact root-only localization authority

Exact next owner is a **fresh Combat Engineer** if capacity permits; otherwise
context reuse must be disclosed. Execute exactly one bounded PowerShell call
containing only root construction, per-predicate proof, token-construction
localization, empty-root cleanup, and one scalar output.

1. Normalize OS temp and repository with `[System.IO.Path]::GetFullPath` and
   trailing-separator normalization that preserves drive/root meaning.
2. Generate one leaf exactly `horizon-archive-frrc002-` plus lowercase
   `Guid.ToString('D')`; combine it as a direct OS-temp child and normalize.
3. Before creation separately evaluate anchored leaf, exact direct parent,
   strict temp descendant, bidirectional repository exclusion, predecessor
   distinction, and nonexistence. Continue only if all pass.
4. Create exactly once with `New-Item -ItemType Directory -Path $candidate
   -ErrorAction Stop`, suppressing the returned object.
5. Same-call resolve with `Resolve-Path -LiteralPath -ErrorAction Stop`. Without
   short-circuiting scalar capture, separately evaluate: resolution success,
   normalized resolved/candidate equality, anchored resolved leaf, exact
   resolved parent, strict temp descendant, bidirectional repository exclusion,
   predecessor distinction, and directory existence.
6. Only if every legacy post-create predicate passes, assign the normalized
   resolved string to a distinct retained-identity variable and separately
   record exact assignment equality.
7. Only if assignment passes, encode that exact string as strict UTF-8 bytes;
   construct standard base64; decode once; require byte-for-byte round trip;
   compute lowercase SHA-256; require exactly 64 lowercase hexadecimal
   characters; recompute SHA-256 over the decoded bytes; and require exact
   digest equality. Record each predicate separately. Suppress token, digest,
   bytes, path, and object output.
8. In `finally`, only when the created candidate can be re-resolved and every
   destructive containment predicate passes, delete that exact empty root once
   with `[System.IO.Directory]::Delete($resolvedRoot,$false)`. Require absence.
   Never target an alternate, inferred, unresolved, repository, predecessor,
   wildcard, or enumerated path.

Emit exactly one ordered scalar line after cleanup:

```text
stage=1-localization preNameShape=<0|1> preParent=<0|1> preTempDescendant=<0|1> preRepositoryExcluded=<0|1> prePredecessorDistinct=<0|1> preExists=<0|1> createAttemptCount=<0|1> createExit=<0|1|NA> postExists=<0|1|NA> postResolve=<0|1|NA> postCandidateMatch=<0|1|NA> postNameShape=<0|1|NA> postParent=<0|1|NA> postTempDescendant=<0|1|NA> postRepositoryExcluded=<0|1|NA> postPredecessorDistinct=<0|1|NA> postDirectory=<0|1|NA> identityAssigned=<0|1|NA> identityAssignmentMatch=<0|1|NA> utf8Encoded=<0|1|NA> base64Encoded=<0|1|NA> base64RoundTrip=<0|1|NA> digestComputed=<0|1|NA> digestShape=<0|1|NA> digestRecomputeMatch=<0|1|NA> tokenPredicatePass=<0|1|NA> cleanupAttemptCount=<0|1> rootDeleted=<0|1> nativeExit=<0|1>
```

Use `NA`, not `0`, for a predicate that was not reached because an earlier
required predicate failed. `0` means reached and failed. This preserves the
earliest failing predicate without exception or path output.

Exact localization PASS requires all pre/post/identity/token predicates 1,
`preExists=0`, create attempt 1/exit 0, cleanup attempt 1/root deleted 1, and
native exit 0. Even on exact PASS, do not retain or emit the token and do not
continue to another stage. Return **`STAGE-1 POST-CREATE PREDICATE
LOCALIZATION PASS / ROOT DELETED / NO LIVE / STOP / RETURN TO FRESH MISSION`**.

Any other result returns **`HOLD / STAGE-1 POST-CREATE PREDICATE LOCALIZED OR
UNRESOLVED / EXACT CLEANUP RESULT / NO LIVE / NO RERUN / RETURN TO FRESH
MISSION`**. One root lifecycle is the entire authority. No same-context
correction, second root, or retry is allowed.

## Preserved controls and classifications

The accepted VR-48 atomic root PASS remains exact and is not contradicted by
this execution-control localization. The cumulative VR-22 tests/validators,
VR-30 production build, VR-35 fixture build/corrected PBA, VR-42 formal served
identity, VR-44 transport-control proof, and VR-46 exact correction proof
remain accepted without rerun.

The nine prior classifications remain separate and OPEN:

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
   COMBAT`; and
9. `REQUIRED CORRECTION / EXECUTION CONTROL / PRE-ROOT SCALAR TRANSPORT / OPEN
   / VR-47`.

The VR-50 Stage-1 post-create root-proof correction is the tenth separate OPEN
classification. The VR-49 tool-safety rejection remains separately recorded
as non-executed/non-evidence and is not an OPEN divergence. None is waived,
merged, closed, cured, or admitted as candidate evidence.

Diagnostic evidence remains non-release, forbidden verifier input, and no-
retry. Every frozen product, player, learning, privacy, save, accessibility,
route, world, MH-40, null-delta, `successor=null`, ending, media, and one-E2E
meaning remains exact.

No port, process, preview, browser, E2E, diagnostic, transport, summary,
verifier, build, test, validator, PBA, served-identity, product/media/protected,
repository-write, downstream-stage, or release action is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / STAGE-1 POST-CREATE PREDICATE
LOCALIZATION ONLY / FRSH-003-v1-VR-51`**.
