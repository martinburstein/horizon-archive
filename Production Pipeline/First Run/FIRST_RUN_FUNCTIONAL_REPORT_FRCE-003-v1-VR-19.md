# First Run Functional Return - Minimal Tracked-Allowlist Static-Focused Verification

Return ID: `FRCE-003-v1-VR-19`

Disposition: **`HOLD / MINIMAL-TRACKED-ALLOWLIST STATIC-FOCUSED FAILURE /
NO RERUN / RETURN TO FRESH MISSION / FRCE-003-v1-VR-19`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Combat Engineer / `combat_engineer`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Bounded verification shell: `FRSH-003-v1-VR-19`

Combat start source:
`f0ea9312e44dd6459eec369bd4c73e12d4cf164a`

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

Combat began the sole VR-19 repository-root PowerShell invocation once from
the exact synchronized source with the execution-tool timeout set to `30s`.
The invocation failed closed during the candidate-to-current control-drift
check. Git printed its `git diff` usage text, after which the exact shell threw:

```text
candidate current control drift
At line:95 char:28
+ if ($LASTEXITCODE -ne 0) { throw 'candidate current control drift' }
```

The invocation exited `1` after `5.5s`. Per `FRSH-003-v1-VR-19`, this is
immediate **`HOLD / NO RERUN`**. Combat did not correct, quote, substitute,
repair, waive, investigate, or retry the failed command; did not continue the
invocation; and did not start a second verification invocation. The failure
is classified **`REQUIRED CORRECTION / EXECUTION CONTROL / OPEN`** and
establishes no product, candidate, manifest, test, E2E, validation, evidence,
threshold, predicate, learning, save, route, world, media, or ending defect.

The earlier **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN`**
classification remains separate and open. This attempt produced no new
protected, untracked, media, repository-wide, predecessor-root, or user-state
enumeration and does not waive, merge, repeat, or use the earlier divergence
as proof.

## Exact sole-invocation record

Before the stop, the invocation completed without failure:

- start synchronization: `HEAD == origin/main ==
  f0ea9312e44dd6459eec369bd4c73e12d4cf164a`;
- required frozen ancestry and candidate ancestry;
- exact probe-candidate parent
  `e44e2c7712245c9f34bc1d544fd76c577604d86f`;
- six literal tracked-path checks, each resolving exactly once;
- all twelve committed blob existence and identity checks;
- all six current blob existence and identity checks;
- initial tracked and staged drift absence; and
- no candidate/worktree diff-integrity failure before the terminal command.

The exact candidate-to-current command emitted Git usage and set a nonzero
exit status; the shell then stopped at its required fail-closed assertion.
No candidate path names or unexpected paths were printed.

## Gate record

| Gate | Result |
| --- | --- |
| Start `HEAD == origin/main` | **PASS**: exact `f0ea9312e44dd6459eec369bd4c73e12d4cf164a` |
| Frozen ancestry and candidate parent | **PASS** |
| Six exact literal tracked paths | **PASS**: `6/6` |
| Frozen/current committed blobs | **PASS**: `12/12` frozen and `6/6` current |
| Initial tracked/staged drift | **PASS** |
| Candidate-to-current control equality | **FAIL-CLOSED / INCOMPLETE**: Git usage, then `candidate current control drift` |
| Product/dependency equality | **NOT RUN** |
| Candidate/worktree `git diff --check` | **NOT RUN** |
| Independent forbidden-count and exact-three candidate predicates | **NOT RUN** |
| FRRC schema/ID/exact 13-entry order/key identity | **NOT RUN** |
| Forty exact sorted validator structures | **NOT RUN**; no validator executed |
| `policy.e2e_invocations == 1` | **NOT RUN** |
| `node --check playtest/e2e-playthrough.mjs` | **NOT RUN** |
| Focused command / exact `68/68`, zero fail | **NOT RUN** |
| Final tracked/staged drift and diff integrity | **NOT RUN** |

## Preserved scope and explicit limitations

Combat ran no focused, related, or full test; validator; build; PBA/media/
offline/performance scan; preview; served request; port/PID operation;
browser; external root; containment/cleanup operation; diagnostic; E2E;
summary; verifier; or served-identity command. Focused totals are unavailable
and are not inferred from prior runs.

Combat made no implementation, product, test, manifest, E2E, content, CSS,
module, fixture, dependency, package, curriculum, evaluator, save, story,
route, map, scoreboard, maturity, media, or other control change. Only this
versioned return and `NEXT_INSTANCE_HANDOFF.md` change after the attempt.

All product, candidate, predecessor, validation, accepted-evidence,
threshold, predicate, learning, evidence/privacy, save, route, world,
identity, authority, reward/access, equal MH-40 outcome, null-delta,
`successor=null`, ending, immutable-media, external-root, cleanup, diagnostic
non-evidence/non-verifier, and one-E2E boundaries remain frozen. No
Quartermaster, Image Specialist, Intelligence, reveal, maturity, release,
schedule, automation, or `FIRST RUN COMPLETE` action occurred.

## Exact handoff

Exact next owner is a **fresh Mission Captain**. Adjudicate only this
fail-closed candidate-to-current command-shape defect and issue one versioned
`HOLD` or new bounded authority. Preserve all five frozen identities, both
open variance classifications, and every VR-19 boundary. Do not infer a
candidate or product defect, reuse VR-19, promote its partial checks, begin a
downstream role, inspect or enumerate protected/predecessor/media/user state,
advance maturity, create a reveal or schedule, or call
`FIRST RUN COMPLETE`.

The dedicated Combat report/handoff commit and final `HEAD == origin/main`
proof are reported from Git after commit because this artifact cannot contain
the hash that first contains itself.
