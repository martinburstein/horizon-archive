# First Run Functional Return - Corrected Preflight Command Control

Return ID: `FRCE-003-v1-VR-16`

Disposition: **`HOLD / CORRECTED PREFLIGHT-CONTROL FAILURE / NO RERUN /
RETURN TO FRESH MISSION / FRCE-003-v1-VR-16`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Combat Engineer / `combat_engineer`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Correction / bounded verification shell: `FRSH-003-v1-VR-16`

Combat start source: `2ba171de4394c63638be120cfba26a4b567ceac0`

Exact diagnostic field-source candidate:
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`

Exact diagnostic-control predecessor:
`ce7c9abbaf1d0ffad8c1031f0398750676d4970e`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Recorded: `2026-08-10 12:35:07 -04:00`

## Outcome

Combat began the sole VR-16 corrected preflight/static/focused invocation
once from synchronized source. The invocation stopped at the FRRC ordered-
entry assertion before validator-structure completion, `node --check`, or the
focused command. No assertion, static command, or focused test was rerun.

The earliest failure was a Combat-owned expected-order defect. The assertion
hard-coded the final three expected FRRC entries as:

```text
live-summary-verify
pba-media
cleanup-identity
```

The exact committed manifest order is:

```text
pba-media
cleanup-identity
live-summary-verify
```

The full actual thirteen-entry order was:

```text
focused
related
full
validators
production-build
fixture-build
production-preview
fixture-preview
served-identity
complete-e2e
pba-media
cleanup-identity
live-summary-verify
```

The assertion therefore threw `ordered manifest entries mismatch`. The
manifest parsed successfully far enough to expose its actual property order,
but the VR-16 FRRC structure gate did not pass. This result establishes no
candidate, manifest, static-test, E2E, product, validation, evidence,
threshold, predicate, or protected-boundary defect.

Per `FRSH-003-v1-VR-16`, the failure is immediate **`HOLD / NO RERUN`**.
Combat did not correct or waive the assertion and did not continue to the
remaining authorized commands.

## Exact sole-invocation record

Combat invoked one repository-root PowerShell ladder with
`$ErrorActionPreference='Stop'`. Its executed Git/static commands were:

```powershell
git rev-parse HEAD
git rev-parse origin/main
git merge-base --is-ancestor <each frozen identity> HEAD
git merge-base --is-ancestor <product/predecessor/validation/evidence> 2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc
git rev-parse 2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc^
git rev-parse <frozen-commit>:<exact-frozen-path>
git diff --quiet
git diff --cached --quiet
git diff --quiet 2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc..HEAD -- <FRRC> <static-test> <E2E>
git diff --quiet a91763e28d488f31f8cf7d40ece0b2682246ba9b..HEAD -- horizon-archive-game/src horizon-archive-game/package.json horizon-archive-game/package-lock.json
git diff --check 2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc^ 2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc
git diff --check
git diff-tree --no-commit-id --name-only -r 2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc
[IO.File]::ReadAllText(<exact FRRC path>) | ConvertFrom-Json
```

The corrected boundary predicates were independent. Exact observations:

```text
forbiddenPaths.Count = 0
candidatePaths.Count = 3
candidatePaths =
  horizon-archive-game/test/sixfoldWeir.test.js
  playtest/e2e-playthrough.mjs
  Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json
```

The display order above is PowerShell `Sort-Object` order. Set identity
against the separately sorted authorized-path collection passed with zero
delta. No authorized path was required to appear in `forbiddenPaths`.

## Gate record

| Gate | Result |
| --- | --- |
| Start synchronization | **PASS**: `HEAD == origin/main == 2ba171de4394c63638be120cfba26a4b567ceac0` |
| Ancestry and exact candidate parent | **PASS** |
| Frozen product/candidate/predecessor/validation/evidence blobs | **PASS** |
| Tracked/staged drift absence | **PASS** |
| Candidate/current controls and product/dependency equality | **PASS** |
| Candidate/worktree `git diff --check` | **PASS** |
| Corrected forbidden-path assertion | **PASS**: independent count `0` |
| Exact authorized candidate-path assertion | **PASS**: exact three paths |
| FRRC JSON parse and thirteen ordered entries | **FAIL-CLOSED**: Combat expected-order defect at the final three entries |
| Forty exact sorted validator invocations | **NOT RUN / NOT COMPLETED** |
| `node --check playtest/e2e-playthrough.mjs` | **NOT RUN** |
| Exact manifest focused command / `68/68` | **NOT RUN** |

## Exact blob and identity observations

- Candidate blobs: manifest
  `fc91a863be99b11c44405071324e3502b959e621`, static test
  `5910af4e4f6754acbc5193ff021f374fe90a96f2`, and E2E
  `0b72f1463c729a8e22337af0115c3316652c2565`; current blobs matched.
- Diagnostic-predecessor blobs: manifest
  `d9d3491067f072ec2f68dd4159eb4040d47d45ff`, static test
  `38ea5255a1713740094ab4ee3b36e7b78389bbe0`, and E2E
  `5e63e3fd36ce0d59d276a6bc3324cc15ce03bdb2`.
- Product blobs at product candidate and current source: `App.jsx`
  `802ceffb1a07c3b166dc2f7f06ab38138dc37596` and
  `drownedArchive.js`
  `1bc2f9d93c59a396ddee7ed83cde1600f76b62e7`.
- Validation-control static-test blob:
  `d71452e6bb5e8ab5d846b8a8ec4f8b12832b03ae`.
- Accepted-evidence blobs: manifest
  `786663223f75cb3a88503c50373e79f3c5c5cf26` and E2E
  `a322016aac859f385d81dd368845de7d5bde4e5b`.
- Candidate parent remained exact
  `e44e2c7712245c9f34bc1d544fd76c577604d86f`; all five frozen identities
  had the required ancestry.

## Preserved scope and explicit limitations

Combat ran no related/full test, validator, build, PBA/media/offline/
performance scan, preview, served request, port/PID operation, browser,
external root, containment/cleanup operation, diagnostic, E2E, summary,
verifier, or served-identity command. It did not inspect protected,
predecessor-root, media, browser/profile/save, hidden-lore, or user state.

No product, test, manifest, E2E, content, CSS, module, fixture, dependency,
lockfile, curriculum, evaluator, save, story, route, map, scoreboard,
maturity, media, or other implementation/control file changed. The only
post-attempt changes are this versioned return and `NEXT_INSTANCE_HANDOFF.md`.

All product, candidate, predecessor, validation, accepted-evidence,
threshold, predicate, learning, evidence/privacy, save, route, world,
identity, authority, reward/access, equal MH-40 outcome, null-delta,
`successor=null`, ending, exact media `17 / 37,410,731`, external-root,
cleanup, diagnostic non-evidence/non-verifier, and one-E2E boundaries remain
frozen. No Quartermaster, Image Specialist, Intelligence, reveal, maturity,
release, schedule, automation, or `FIRST RUN COMPLETE` action occurred.

## Variance and exact handoff

Variance: **`REQUIRED CORRECTION / EXECUTION CONTROL / OPEN`**. The sole
VR-16 authority is consumed. Earlier successful subchecks do not constitute
a complete corrected preflight/static/focused pass and may not be promoted or
rerun under VR-16.

Exact next owner is a **fresh Mission Captain**. Adjudicate only this
fail-closed expected-order assertion defect and issue one versioned `HOLD` or
new bounded authority. Preserve all five frozen identities and every VR-16
boundary. Do not infer a candidate/product defect, reuse VR-16, begin a
downstream role, inspect protected/predecessor/media/user state, advance
maturity, create a reveal/schedule, or call `FIRST RUN COMPLETE`.

The dedicated Combat report/handoff commit and final synchronization proof
are reported from Git after commit because this artifact cannot contain the
hash that first contains itself.
