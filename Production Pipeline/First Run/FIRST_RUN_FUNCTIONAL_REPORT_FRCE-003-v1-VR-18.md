# First Run Functional Return - Tracked-Path-Corrected Static-Focused Verification

Return ID: `FRCE-003-v1-VR-18`

Disposition: **`HOLD / TRACKED-PATH-CORRECTED STATIC-FOCUSED FAILURE /
NO RERUN / RETURN TO FRESH MISSION / FRCE-003-v1-VR-18`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Combat Engineer / `combat_engineer`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Bounded verification shell: `FRSH-003-v1-VR-18`

Combat start source: `58e596cdde26183f1805812cabeb6d81747fe525`

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

Combat began the sole VR-18 repository-root PowerShell invocation once from
the exact synchronized source with the execution-tool timeout set to `30s`.
The invocation failed closed during the exact tracked-allowlist proof, before
committed blob proof, tracked/staged drift proof, candidate diff and boundary
predicates, manifest parsing, validator-structure proof, `node --check`, or the
focused command. No command or assertion was rerun.

The earliest failure was the shell-required exact path:

```text
horizon-archive-game/package-lock.json
```

The exact command result was:

```text
error: pathspec 'horizon-archive-game/package-lock.json' did not match any file(s) known to git
Did you forget to 'git add'?
exact tracked allowlist path
At line:118 char:5
+     throw 'exact tracked allowlist path'
```

The invocation exited `1` after `4.7s`. Per `FRSH-003-v1-VR-18`, this is
immediate **`HOLD / NO RERUN`**. Combat did not search for, substitute, remove,
repair, waive, or retry the path, did not continue the invocation, and did not
start a second verification invocation. The failure establishes no product,
candidate, manifest, test, E2E, validation, evidence, threshold, predicate,
learning, save, route, world, media, or ending defect.

## Exact sole-invocation record

Before the stop, the invocation completed these checks:

- start synchronization passed: `HEAD == origin/main ==
  58e596cdde26183f1805812cabeb6d81747fe525`;
- all five frozen identities were proven ancestors of `HEAD`;
- immutable content, diagnostic-control, validation-control, and accepted-
  evidence identities were proven ancestors of diagnostic field-source
  candidate `2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`; and
- diagnostic field-source candidate parentage passed exactly:
  `e44e2c7712245c9f34bc1d544fd76c577604d86f`.

The invocation then entered its exact tracked allowlist and failed when Git
rejected the literal package-lock path. No broad path command, filesystem
traversal, repository-wide filename search, unexpected candidate-name output,
or untracked/protected/media enumeration occurred.

## Gate record

| Gate | Result |
| --- | --- |
| Start `HEAD == origin/main` | **PASS**: exact `58e596cdde26183f1805812cabeb6d81747fe525` |
| Frozen ancestry and candidate parent | **PASS** |
| Exact tracked allowlist | **FAIL-CLOSED**: `horizon-archive-game/package-lock.json` is not known to Git |
| Exact committed/current blobs, including corrected `drownedArchive.js` | **NOT RUN** |
| Tracked/staged drift and candidate/current diff proof | **NOT RUN** |
| Candidate/worktree `git diff --check` | **NOT RUN** |
| `forbiddenPaths.Count == 0` | **NOT RUN** |
| Exact three authorized candidate paths | **NOT RUN** |
| FRRC schema/ID/exact 13-entry order/key identity | **NOT RUN** |
| Forty exact sorted validator structures | **NOT RUN**; no validator executed |
| `policy.e2e_invocations == 1` | **NOT RUN** |
| `node --check playtest/e2e-playthrough.mjs` | **NOT RUN** |
| Focused command / exact `68/68`, zero fail | **NOT RUN** |
| Final tracked/staged drift and diff integrity | **NOT RUN** |

## Preserved scope and explicit limitations

Combat ran no focused, related, or full test; validator; build; PBA/media/
offline/performance scan; preview; served request; port/PID operation;
browser; root; containment/cleanup operation; diagnostic; E2E; summary;
verifier; or served-identity command. Exact focused totals are therefore
**unavailable**, not inferred from prior runs.

Combat did not inspect or enumerate protected repository QA, PDF, training,
media, browser/profile/save, hidden-lore, predecessor-root, unrelated-root, or
user state. No protected or media filename was output. No image, audio, media,
import, generation, edit, replacement, variation, movement, or reveal
operation occurred.

Combat made no implementation, product, test, manifest, E2E, content, CSS,
module, fixture, dependency, lockfile, curriculum, evaluator, save, story,
route, map, scoreboard, maturity, media, or other control change. The only
post-attempt tracked changes are this versioned Combat return and
`NEXT_INSTANCE_HANDOFF.md`.

All product, candidate, predecessor, validation, accepted-evidence,
threshold, predicate, learning, evidence/privacy, save, route, world,
identity, authority, reward/access, equal MH-40 outcome, null-delta,
`successor=null`, ending, immutable media `17 / 37,410,731`, external-root,
cleanup, diagnostic non-evidence/non-verifier, and one-E2E boundaries remain
frozen. No Quartermaster, Image Specialist, Intelligence, reveal, maturity,
release, schedule, automation, or `FIRST RUN COMPLETE` action occurred.

## Variance and exact handoff

Variance: **`REQUIRED CORRECTION / EXECUTION CONTROL / OPEN`** for the
shell-required literal `horizon-archive-game/package-lock.json` failing exact
tracked-path proof. The sole VR-18 authority is consumed. Its early passing
identity and ancestry subchecks do not constitute complete static/focused
verification and may not be promoted, reused as current proof, or rerun under
VR-18.

Exact next owner is a **fresh Mission Captain**. Adjudicate only this
fail-closed tracked-allowlist mismatch and issue one versioned `HOLD` or new
bounded authority. Preserve all five frozen identities and every VR-18
boundary. Do not infer a candidate or product defect, reuse VR-18, begin a
downstream role, inspect or enumerate protected/predecessor/media/user state,
advance maturity, create a reveal or schedule, or call `FIRST RUN COMPLETE`.

The dedicated Combat report/handoff commit and final synchronization proof
are reported from Git after commit because this artifact cannot contain the
hash that first contains itself.
