# First Run Functional Return - Scalar-Range Six-Path Static-Focused Verification

Return ID: `FRCE-003-v1-VR-20`

Disposition: **`HOLD / SCALAR-RANGE SIX-PATH STATIC-FOCUSED FAILURE / NO
RERUN / RETURN TO FRESH MISSION / FRCE-003-v1-VR-20`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Combat Engineer / `combat_engineer`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Bounded verification shell: `FRSH-003-v1-VR-20`

Combat start source:
`46bb4320f5d6e2a4f21841f51ba3fc3f25a9341e`

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

Combat began the sole VR-20 repository-root PowerShell invocation once from
the exact synchronized source with the execution-tool timeout set to `30s`.
The corrected scalar revision range was passed to Git as one argument and
returned exact exit `0`, meaning no candidate-to-current drift across the six
literal allowlisted paths.

The invocation reached and executed the exact focused command once. Node
reported `68` tests, `68` pass, and `0` fail, with process duration
`254.2296ms`. The invocation nevertheless failed closed at the shell's exact
text-total assertion because the captured Node output used information-symbol
markers:

```text
ℹ tests 68
ℹ pass 68
ℹ fail 0
```

The shell required lines matching `# tests 68`, `# pass 68`, and `# fail 0`.
It therefore threw:

```text
focused exact totals
At line:261 char:3
+   throw 'focused exact totals'
```

The repository-root invocation exited `1` after `4.7s`. Per
`FRSH-003-v1-VR-20`, this is immediate **`HOLD / NO RERUN`**. Combat did not
alter the assertion, substitute output, repair a file, waive the result,
repeat the focused command, or start a second verification invocation. The
result is **`REQUIRED CORRECTION / EXECUTION CONTROL / OPEN`** and establishes
no candidate, product, manifest, test, E2E, validation, evidence, threshold,
learning, save, route, world, media, or ending defect.

The earlier **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN`**
classification remains separate and open. This attempt produced no new
protected, untracked, media, repository-wide, predecessor-root, or user-state
enumeration and does not waive, merge, repeat, or use that earlier divergence
as proof.

## Exact sole-invocation record

Before the terminal exact-total assertion, the invocation completed without
failure:

- start synchronization: `HEAD == origin/main ==
  46bb4320f5d6e2a4f21841f51ba3fc3f25a9341e`;
- all required frozen and candidate ancestry predicates;
- exact probe-candidate parent
  `e44e2c7712245c9f34bc1d544fd76c577604d86f`;
- six literal tracked-path checks, each resolving exactly once;
- all twelve frozen committed blob checks and all six current blob checks;
- initial allowlisted worktree and staged drift absence;
- scalar candidate range
  `2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc..HEAD` as one Git argument,
  with immediately captured exit `0` meaning no drift;
- candidate patch and allowlisted worktree diff integrity;
- committed FRRC JSON parse with exact schema
  `horizon.first-run.release-command-manifest.v1`, manifest ID
  `FRRC-002-v1`, thirteen-entry property order, and entry key/ID equality;
- exactly forty ordered `validator-01` through `validator-40` structures,
  exact repository-path-sorted `python <path> --self-test` command arrays,
  `policy.validator_count=40`, and `policy.e2e_invocations=1`, without
  validator execution;
- exact focused command identity, workdir, `30000ms` timeout, and expected
  exit `0`;
- `node --check playtest/e2e-playthrough.mjs` exactly once; and
- the exact focused command exactly once, reporting `68` tests, `68` pass,
  and `0` fail.

No Git usage or command failure occurred in the corrected scalar-range check.
The immediately captured exit semantics remained exact: `0` no drift, `1`
drift, and values greater than `1` command failure.

## Gate record

| Gate | Result |
| --- | --- |
| Start `HEAD == origin/main` | **PASS**: exact `46bb4320f5d6e2a4f21841f51ba3fc3f25a9341e` |
| Frozen ancestry and candidate parent | **PASS** |
| Six exact literal tracked paths | **PASS**: `6/6` |
| Frozen/current committed blobs | **PASS**: `12/12` frozen and `6/6` current |
| Initial allowlisted worktree/staged drift | **PASS** |
| Scalar candidate-to-current equality | **PASS**: exit `0`, no drift |
| Candidate and allowlisted worktree diff integrity | **PASS** |
| FRRC schema/ID/exact 13-entry order/key identity | **PASS** |
| Forty exact sorted validator structures | **PASS static structure**; no validator executed |
| `policy.e2e_invocations == 1` | **PASS** |
| `node --check playtest/e2e-playthrough.mjs` | **PASS**, invoked once |
| Focused command process | **68 tests / 68 pass / 0 fail**, invoked once |
| Exact focused output-text assertion | **FAIL-CLOSED**: captured totals used `ℹ` rather than required `#` markers |
| Final allowlisted worktree/staged drift | **NOT RUN** |
| Final allowlisted diff integrity | **NOT RUN** |

## Preserved scope and explicit limitations

Combat ran no related or full test, validator, build, PBA/media/offline/
performance scan, preview, served request, port/PID operation, browser,
external root, containment/cleanup operation, diagnostic, complete or partial
E2E, summary, verifier, or served-identity command. The focused command was
not rerun, and no later gate was begun.

Combat made no implementation, product, test, manifest, E2E, content, CSS,
module, fixture, dependency, package, curriculum, evaluator, save, story,
route, map, scoreboard, maturity, media, or other control change. Only this
versioned return and `NEXT_INSTANCE_HANDOFF.md` change after the attempt.

All player, learning, accessibility, privacy, save, route, world, equal MH-40,
null-delta, `successor=null`, ending, threshold, immutable-media
`17 / 37,410,731`, external-root, cleanup, and diagnostic non-evidence/non-
verifier meanings remain frozen. No Quartermaster, Image Specialist,
Intelligence, reveal, maturity, release, schedule, automation, or `FIRST RUN
COMPLETE` action occurred.

## Exact handoff

Exact next owner is a **fresh Mission Captain**. Adjudicate only the
fail-closed focused-output assertion mismatch and issue one versioned `HOLD`
or newly bounded authority. Preserve all five frozen identities, the exact
scalar-range exit-`0` observation, the focused process's truthful `68/68`
result, both open variance classifications, and every VR-20 boundary. Do not
infer a candidate or product defect, reuse VR-20, promote its partial checks
to a complete pass, begin a downstream role, inspect or enumerate protected/
predecessor/media/user state, advance maturity, create a reveal or schedule,
or call `FIRST RUN COMPLETE`.

The dedicated Combat report/handoff commit and final `HEAD == origin/main`
proof are reported from Git after commit because this artifact cannot contain
the hash that first contains itself.
