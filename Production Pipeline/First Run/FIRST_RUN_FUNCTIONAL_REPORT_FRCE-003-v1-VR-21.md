# First Run Functional Return - Robust-Totals Six-Path Static-Focused Verification

Return ID: `FRCE-003-v1-VR-21`

Disposition: **`ROBUST-TOTALS SIX-PATH STATIC-FOCUSED PASS / RETURN TO
FRESH MISSION / FRCE-003-v1-VR-21`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Combat Engineer / `combat_engineer`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Bounded verification shell: `FRSH-003-v1-VR-21`

Combat start source:
`65ad8aa116ccc8ddf4ced5d7d3d5a07e8fec7938`

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

Combat began the sole VR-21 repository-root PowerShell invocation once from
the exact synchronized source with the execution-tool timeout set to `30s`.
The invocation completed with exit `0` after `4.1s`. The robust line-anchored
focused-total parser accepted the truthful Unicode information-symbol output
and required exact totals:

```text
ℹ tests 68
ℹ pass 68
ℹ fail 0
```

The exact focused process completed with `68` tests, `68` pass, `0` fail, and
Node duration `182.2957ms`. The same PowerShell invocation then completed all
three required post-focused checks: final allowlisted worktree drift, final
allowlisted staged drift, and final allowlisted diff integrity. No check was
split, inferred, corrected, retried, or rerun.

This is a complete bounded static/focused pass, not production-functional or
release acceptance. It authorizes no downstream production role, maturity
advance, or release action. The prior `REQUIRED CORRECTION / EXECUTION
CONTROL / OPEN` history and the separate `UNAUTHORIZED DIVERGENCE /
PROTECTED PATH ENUMERATION / OPEN` classification remain for fresh Mission
adjudication; this attempt introduced no new divergence.

## Exact sole-invocation evidence

- Start synchronization: **PASS** at exact
  `HEAD == origin/main == 65ad8aa116ccc8ddf4ced5d7d3d5a07e8fec7938`.
- Frozen ancestry: **PASS** for all five exact identities against `HEAD` and
  all four required predecessor identities against probe candidate
  `2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`.
- Probe-candidate parentage: **PASS**; exact parent
  `e44e2c7712245c9f34bc1d544fd76c577604d86f`.
- Exact tracked allowlist: **PASS**, six literal paths only.
- Frozen committed identity: **PASS**, all `12/12` exact blobs.
- Current committed identity: **PASS**, all `6/6` exact blobs.
- Initial allowlisted worktree drift: **PASS**, exit `0`.
- Initial allowlisted staged drift: **PASS**, exit `0`.
- Scalar candidate range: exact
  `2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc..HEAD` supplied as one revision
  argument; candidate-current allowlist comparison **PASS**, exit `0`, no
  drift.
- Exit classification remained exact and immediate: `0` means no drift, `1`
  means the named drift/integrity finding, and values greater than `1` mean
  command failure. No command failure occurred and none was called drift.
- Candidate patch integrity: **PASS**, exit `0`.
- Initial allowlisted worktree diff integrity: **PASS**, exit `0`.
- FRRC identity: **PASS**; schema
  `horizon.first-run.release-command-manifest.v1` and manifest ID
  `FRRC-002-v1`.
- FRRC entries: **PASS**; exact `13`-entry property order and exact entry-key/
  `id` identity.
- Validator structure: **PASS static inspection**; exact ordered
  `validator-01` through `validator-40`, exact forty repository-path-sorted
  `python <path> --self-test` arrays, `policy.validator_count=40`, with no
  validator executed.
- One-E2E policy: **PASS**;
  `policy.e2e_invocations=1`.
- Focused command allowlist: **PASS**; exact workdir, timeout, expected exit,
  and eleven-test-path command array.
- `node --check playtest/e2e-playthrough.mjs`: **PASS**, invoked exactly once.
- Exact focused command: **PASS**, invoked exactly once, exit `0`, exact
  `68 tests / 68 pass / 0 fail`; Node duration `182.2957ms`.
- Robust output assertions: **PASS** for the exact line-anchored
  `(?:#|\u2139)` totals; no arbitrary prefix, alternate total, missing line,
  or nonzero process exit was accepted.
- Final allowlisted worktree drift: **PASS**, exit `0`.
- Final allowlisted staged drift: **PASS**, exit `0`.
- Final allowlisted diff integrity: **PASS**, exit `0`.
- Exact terminal summary from the frozen invocation:

```text
trackedAllowlist.Count=6
candidateRange is one scalar revision argument
candidate current allowlist exit=0; no drift
manifest entries=13; validators=40; e2e_invocations=1
focused tests=68; pass=68; fail=0
```

## Changed artifacts and preserved boundaries

No implementation, product, test, manifest, E2E, content, CSS, module,
fixture, dependency, package, curriculum, evaluator, save, story, route, map,
scoreboard, maturity, media, or other control file changed. After the passing
attempt, only this versioned Combat return and `NEXT_INSTANCE_HANDOFF.md`
change.

The invocation used only the six frozen literal paths. It did not call a
changed-path discovery command, broad `git ls-files`, `git status`, `rg`,
`Get-ChildItem`, `dir`, `find`, or filesystem/repository traversal. Combat did
not enumerate or output protected, untracked, media, predecessor-root,
repository-wide, or user-state names during the attempt.

All player, learning, accessibility, privacy, save, route, world, equal
MH-40, null-delta, `successor=null`, ending, threshold, diagnostic non-
evidence/non-verifier, one-E2E, and immutable-media `17 / 37,410,731`
meanings remain frozen. No Quartermaster, Image Specialist, Intelligence,
reveal, maturity, release, schedule, automation, or `FIRST RUN COMPLETE`
action occurred.

## Explicit limitations

Combat ran no related/full test, validator, build, PBA/media/offline/
performance scan, preview, served request, port/PID operation, browser,
external root, containment/cleanup operation, diagnostic, partial or complete
E2E, live summary, independent verifier, or served-identity command. This
bounded pass provides static/focused execution-control evidence only. It does
not reuse or promote VR-20 partial evidence and does not establish a release
or maturity result.

## Exact handoff

Exact next owner is a **fresh Mission Captain**. Independently adjudicate this
complete `FRCE-003-v1-VR-21` result against `FRSH-003-v1-VR-21`, preserve all
five frozen identities and both open variance classifications, and issue one
new versioned `HOLD` or `READY` decision. Do not rerun VR-21, infer a product
defect, begin Quartermaster/Image/Intelligence, inspect or enumerate
protected/predecessor/media/user state, advance maturity, create a reveal or
schedule, or call `FIRST RUN COMPLETE`.

The dedicated Combat report/handoff commit and final `HEAD == origin/main`
proof are reported from Git after commit because this artifact cannot contain
the hash that first contains itself.
