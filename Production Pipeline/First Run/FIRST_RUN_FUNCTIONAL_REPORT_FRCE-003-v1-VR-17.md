# First Run Functional Return - Manifest-Order-Corrected Static-Focused Verification

Return ID: `FRCE-003-v1-VR-17`

Disposition: **`HOLD / MANIFEST-ORDER-CORRECTED STATIC-FOCUSED FAILURE /
NO RERUN / RETURN TO FRESH MISSION / FRCE-003-v1-VR-17`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Combat Engineer / `combat_engineer`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Bounded verification shell: `FRSH-003-v1-VR-17`

Combat start source: `edb45ac2490a63e16f317d17abf3f12995913c4d`

Exact diagnostic field-source candidate:
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`

Exact diagnostic-control predecessor:
`ce7c9abbaf1d0ffad8c1031f0398750676d4970e`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Recorded: **2026-08-10**

## Outcome

Combat began the sole VR-17 repository-root PowerShell invocation once from
the exact synchronized source. It stopped during frozen product-blob proof
before tracked/staged drift proof, diff integrity, candidate-boundary
predicates, manifest parsing, validator-structure proof, `node --check`, or
the focused command. No command or assertion was rerun.

The earliest failure was a Combat-owned invocation defect. Combat asked Git
for this non-existent path at the immutable content candidate:

```text
horizon-archive-game/src/data/drownedArchive.js
```

The exact failing command/result was:

```text
git rev-parse a91763e28d488f31f8cf7d40ece0b2682246ba9b:horizon-archive-game/src/data/drownedArchive.js
fatal: path 'horizon-archive-game/src/data/drownedArchive.js' does not exist in 'a91763e28d488f31f8cf7d40ece0b2682246ba9b'
```

The existing production file is instead
`horizon-archive-game/src/drownedArchive.js`. That correct path was identified
only after the consumed invocation and was not used in a replacement blob
lookup or rerun.

The invocation then threw its fail-closed `git failed` assertion and exited
`1`. Per `FRSH-003-v1-VR-17`, this is immediate **`HOLD / NO RERUN`**.
Combat did not correct the path, continue, or start a second verification
invocation. The failure establishes no candidate, manifest, static-test, E2E,
product, validation, evidence, threshold, predicate, or protected-boundary
defect.

## Exact sole-invocation record

The invocation began with `$ErrorActionPreference='Stop'` and completed these
checks before the stop:

- start synchronization passed: `HEAD == origin/main == edb45ac2490a63e16f317d17abf3f12995913c4d`;
- all five frozen identities were proven ancestors of `HEAD`;
- immutable content, diagnostic-control, validation-control, and accepted-
  evidence identities were proven ancestors of diagnostic field-source
  candidate `2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`;
- diagnostic field-source candidate parentage passed exactly:
  `e44e2c7712245c9f34bc1d544fd76c577604d86f`;
- candidate blobs passed: manifest
  `fc91a863be99b11c44405071324e3502b959e621`, static test
  `5910af4e4f6754acbc5193ff021f374fe90a96f2`, and E2E
  `0b72f1463c729a8e22337af0115c3316652c2565`;
- diagnostic-predecessor blobs passed: manifest
  `d9d3491067f072ec2f68dd4159eb4040d47d45ff`, static test
  `38ea5255a1713740094ab4ee3b36e7b78389bbe0`, and E2E
  `5e63e3fd36ce0d59d276a6bc3324cc15ce03bdb2`; and
- immutable content candidate `App.jsx` blob passed as
  `802ceffb1a07c3b166dc2f7f06ab38138dc37596`.

The next lookup was the failing invented Drowned Archive path. Nothing after
that lookup in the sole invocation executed.

## Gate record

| Gate | Result |
| --- | --- |
| Start `HEAD == origin/main` | **PASS**: exact `edb45ac2490a63e16f317d17abf3f12995913c4d` |
| Frozen ancestry and candidate parent | **PASS** |
| Candidate and diagnostic-predecessor blobs | **PASS** |
| Immutable product `App.jsx` blob | **PASS** |
| Remaining frozen/current blob proof | **FAIL-CLOSED / INCOMPLETE**: invocation stopped on a non-existent Combat-supplied product path |
| Start tracked/staged drift and candidate/current diff proof | **NOT RUN** |
| Candidate/worktree `git diff --check` | **NOT RUN** |
| `forbiddenPaths.Count == 0` | **NOT RUN** |
| Exact three authorized candidate paths | **NOT RUN** |
| FRRC schema/ID/order/key identity | **NOT RUN** |
| Forty exact sorted validator structures | **NOT RUN**; no validator executed |
| `policy.e2e_invocations == 1` | **NOT RUN** |
| `node --check playtest/e2e-playthrough.mjs` | **NOT RUN** |
| Parsed focused command / exact `68/68`, zero fail | **NOT RUN** |
| Final tracked/staged drift and diff integrity | **NOT RUN** |

## Preserved scope and explicit limitations

Combat ran no focused, related, or full test; validator; build; PBA/media/
offline/performance scan; preview; served request; port/PID operation;
browser; external root; containment/cleanup operation; diagnostic; E2E;
summary; verifier; or served-identity command. Exact focused totals are
therefore **unavailable**, not inferred from prior runs.

Combat did not read protected-file contents, predecessor roots, media bytes,
browser/profile/save, hidden-lore, or user state. However, while identifying
the correct existing Drowned Archive production path after the stopped
attempt, a repository-wide filename search also returned filenames beneath
the protected First Run QA directory and media-bearing repository paths. No
returned file was opened, read, changed, moved, or deleted. This path-name
enumeration is disclosed as **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH
ENUMERATION`** for fresh Mission adjudication; protected-boundary
noninteraction is not claimed.

Combat made no product, test, manifest, E2E,
content, CSS, module, fixture, dependency, lockfile, curriculum, evaluator,
save, story, route, map, scoreboard, maturity, media, or implementation/
control repair. The only post-attempt tracked changes are this versioned
Combat return and `NEXT_INSTANCE_HANDOFF.md`.

All product, candidate, predecessor, validation, accepted-evidence,
threshold, predicate, learning, evidence/privacy, save, route, world,
identity, authority, reward/access, equal MH-40 outcome, null-delta,
`successor=null`, ending, immutable media `17 / 37,410,731`, external-root,
cleanup, diagnostic non-evidence/non-verifier, and one-E2E boundaries remain
frozen. No Quartermaster, Image Specialist, Intelligence, reveal, maturity,
release, schedule, automation, or `FIRST RUN COMPLETE` action occurred.

## Variance and exact handoff

Variances: **`REQUIRED CORRECTION / EXECUTION CONTROL / OPEN`** for the
invented blob path, plus **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH
ENUMERATION / OPEN`** for the disclosed post-attempt filename results. The
sole VR-17 authority is consumed. Its early passing subchecks do not constitute a
complete static/focused verification and may not be promoted, reused as
current proof, or rerun under VR-17.

Exact next owner is a **fresh Mission Captain**. Adjudicate only this
fail-closed Combat invocation-path defect and issue one versioned `HOLD` or
new bounded authority. Preserve all five frozen identities and every VR-17
boundary. Do not infer a candidate/product defect, reuse VR-17, begin a
downstream role, inspect protected/predecessor/media/user state, advance
maturity, create a reveal/schedule, or call `FIRST RUN COMPLETE`.

The dedicated Combat report/handoff commit and final synchronization proof
are reported from Git after commit because this artifact cannot contain the
hash that first contains itself.
