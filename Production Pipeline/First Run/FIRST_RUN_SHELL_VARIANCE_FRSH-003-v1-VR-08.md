# First Run Shell Variance Reissue - Content Candidate Identity Replay

Variance ID: `FRSH-003-v1-VR-08`

Disposition: **`FIRST RUN SHELL READY / FRSH-003-v1-VR-08`**

Stage / owner: Mission Captain / `mission_captain`

Governing shell: `FIRST RUN SHELL READY / FRSH-003-v1`

Operative evidence shell: `FIRST RUN SHELL READY / FRSH-003-v1-VR-07`

Quartermaster return: `PRODUCTION CONTENT HOLD / FRCA-003-v1`

Work Order: `FRWO-003-v1 / Sixfold Weir`

Mission control source inspected:
`a1109e1f12409a660fcd92f4809ccab6414eac36`

Exact content product/test candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Runtime product predecessor:
`7e85154abd8dbf116c4bb84ca66afd859903d750`

Validation-control candidate:
`4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Passing evidence-control candidate:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Mistyped non-commit identity rejected:
`a91763e0b00d6344f84e741f022d894b352a0f23`

Released rollback baseline:
`3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602`

Date: **2026-08-10**

## Decision

Mission authorizes one evidence-only exact-identity replay. The Quartermaster
E2E behavior passed in full, but its machine summary was parameterized with a
mistyped product identity that is not a Git commit. The actual content
candidate exists, is exact in Git, descends from the passing evidence-control
candidate, and remains byte-exact in the current tree. This is an injected
execution-identity defect, not a product, content, test, copy, media, probe,
manifest, behavior, threshold, or presentation defect.

No tracked file change is authorized before replay. Quartermaster may inject
only the exact existing candidate identities through the already-defined
FRRC-002 environment and perform one fresh complete E2E, its one machine
summary, and the independent verifier once after the exact deterministic Git/
identity preflight below passes. No prior summary may be edited, renamed,
copied, or treated as acceptance evidence.

Any preflight, preview, served-identity, E2E, summary, verifier, ownership, or
cleanup failure is immediate `HOLD` with no rerun. Image Specialist remains
blocked until Quartermaster issues a fully passing, committed, pushed, and
synchronized `PRODUCTION CONTENT` return. No maturity advances here.

## Exact Git adjudication

Mission verified all of the following at source `a1109e1`:

- `HEAD == origin/main == remote main`;
- `a91763e28d488f31f8cf7d40ece0b2682246ba9b` resolves as an exact commit;
- `a91763e0b00d6344f84e741f022d894b352a0f23` does not resolve as a Git
  object or commit;
- exact ancestry is runtime `7e85154` -> validation control `4cd7fbf` ->
  evidence control `ca89a679` -> Quartermaster handoff `aa2c141` -> content
  candidate `a91763e` -> current control `a1109e1`;
- the content candidate's own commit changes only
  `horizon-archive-game/src/drownedArchive.js`,
  `horizon-archive-game/test/sixfoldWeir.test.js`, and
  `playtest/e2e-playthrough.mjs`;
- the E2E delta from `ca89a679` to `a91763e` changes only the two exact
  Quartermaster final-copy assertions; it does not change candidate injection,
  six-epoch evidence, summary, verifier, thresholds, or journey behavior;
- current `drownedArchive.js`, `sixfoldWeir.test.js`, and E2E blobs are exact
  to `a91763e`; and
- current `FRRC-002-v1` is exact to evidence control `ca89a679`.

The exact frozen blob identities are:

```text
horizon-archive-game/src/drownedArchive.js
  1bc2f9d93c59a396ddee7ed83cde1600f76b62e7
horizon-archive-game/test/sixfoldWeir.test.js
  21eb3cd40b4b25f39a72d8f4084a5cdf50e7deb5
playtest/e2e-playthrough.mjs
  30ad3bbb49e441914bbd22e365044677f8263b11
Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json
  786663223f75cb3a88503c50373e79f3c5c5cf26
```

No alternate, abbreviated, repaired, inferred, or near-match identity is
accepted.

## Frozen passing evidence and scope

Quartermaster's deterministic results remain accepted and are not authorized
for repetition: focused `68/68`, related `74/74`, cold full `972/972`,
validators `40/40`, builds `217/57`, JavaScript `1,667,393`, CSS `119,247`,
media `17 / 37,410,731`, and served identity `2/2`.

The consumed E2E is accepted only as a stopped behavioral observation: `71.1s`,
all six ordered epochs, complete later rail, both equal MH-40 outcomes, null
deltas, `successor=null`, zero runtime errors, and passing performance. It is
not release evidence because the repository identity field is false.

Exactly seven final-purpose Quartermaster slots remain frozen. No eighth slot,
placeholder restoration, word change, punctuation change, assertion change,
product/test/probe/manifest edit, media operation, or presentation change is
authorized. The operative machine-summary shell remains
`FRSH-003-v1-VR-07`; VR-08 is the permission for a fresh exact-identity replay,
not a new runtime schema or a reason to edit the harness.

## Deterministic ancestry and identity preflight

Quartermaster must run this bounded preflight before creating a QA root or
starting the complete E2E. It may inspect Git and the exact authorized tracked
files only; it may not inspect protected repository/user paths.

1. Prove local `HEAD`, `origin/main`, and remote `refs/heads/main` equal the
   Mission VR-08 commit from which Quartermaster starts, with no tracked drift.
2. Resolve full commits for `7e85154`, `4cd7fbf`, `ca89a679`, `aa2c141`, and
   `a91763e`; prove the ordered ancestry above. Prove the mistyped identity
   does not resolve and reject it from every environment value.
3. Prove the four exact current blobs listed above. Prove no tracked runtime,
   content, test, copy, E2E, manifest, media, or control byte changed after the
   Mission commit.
4. Prove the `a91763e` E2E delta from `ca89a679` is still only the two final-
   copy assertions, and prove the existing candidate-injection and VR-07
   summary/verifier logic unchanged.
5. Prove exactly seven final-purpose slots, exact accepted media
   `17 / 37,410,731`, and the already-built production/fixture outputs and
   served assets correspond to the frozen current bytes. Start only the exact
   owned `127.0.0.1:4173` / `:4184` previews required by FRRC-002 and require
   root/deep/JS/CSS served-to-disk identity before E2E.
6. Resolve one new, nonexisting GUID-suffixed child strictly inside the OS temp
   parent and outside the repository. It must differ from every prior root.
   Repeated resolved containment proof is mandatory before creation and later
   cleanup.

This preflight authorizes no focused, related, full, validator, build, content,
or diagnostic browser rerun. A failure stops, cleans only newly owned
resources, and returns `HOLD`.

## Exact identity injection and sole replay

For the one replay, Quartermaster must supply the existing FRRC-002 environment
with these exact identities:

```text
HORIZON_ARCHIVE_PRODUCT_CANDIDATE=
  a91763e28d488f31f8cf7d40ece0b2682246ba9b
HORIZON_ARCHIVE_PROBE_CANDIDATE=
  ca89a679195c11d441a76e6c02983a6436f2ccb2
HORIZON_ARCHIVE_QA_DIR=
  <the one freshly resolved external GUID root>
HORIZON_ARCHIVE_URL=
  http://127.0.0.1:4173/
HORIZON_ARCHIVE_PBA_NARROW=true
HORIZON_ARCHIVE_PBA_GLOBAL=true
HORIZON_ARCHIVE_MEDIA_IDENTITY=true
```

The product value must be copied from the verified full commit result, not
typed from memory, abbreviated, transformed, or read from the failed summary.
The mistyped non-commit must not occur in the new command, environment,
summary, verifier environment, or result.

Only after the preflight passes may Quartermaster invoke exact
`FRRC-002-v1.entries.complete-e2e` once within its frozen `180s` timeout. The
run must execute the complete clean-start journey and every unchanged VR-07
identity, six-epoch, direct-geometry, focus, learning, privacy, performance,
PBA/media, later-rail, ending, and runtime-error gate. No diagnostic, partial,
or second E2E is authorized.

The E2E must generate exactly one new machine-owned
`first-run-live-summary.json` inside the new root. It must report exact
`productCandidate=a91763e28d488f31f8cf7d40ece0b2682246ba9b`,
`probeCandidate=ca89a679195c11d441a76e6c02983a6436f2ccb2`,
`candidate=probeCandidate`, validation control `4cd7fbf`, shell
`FRSH-003-v1-VR-07`, manifest `FRRC-002-v1`, the exact new root, complete
journey, six passing epochs, zero runtime errors, and `pass=true`.

Only after the E2E exits successfully and the one summary exists may
Quartermaster invoke exact `entries.live-summary-verify` once. The verifier
environment must use the same exact product, probe, QA-root, and summary-path
values. The verifier must independently accept repository identity and every
unchanged schema/behavior gate. A verifier run against the mistyped identity,
an edited summary, or a second verifier attempt is forbidden.

## Failure, cleanup, and downstream gate

If preflight, preview, served identity, E2E, summary emission, verifier, or
cleanup fails, Quartermaster must not rerun or repair. Preserve exact evidence,
stop only recorded preview/browser PIDs, prove ports `4173` / `4184` clear,
issue `PRODUCTION CONTENT HOLD`, update only the content ledger/handoff, and
return to Mission.

After success or failure, repeat containment proof and remove only the new
owned GUID root if policy permits. The prior declared external root from
FRCA-003 is outside this variance: do not reuse, inspect, mutate, enumerate,
or delete it. Any inability to complete the new run's exact cleanup is `HOLD`.

Quartermaster may issue `PRODUCTION CONTENT / BUILD CANDIDATE READY` only if
the exact content candidate passes the preflight, sole E2E, one machine
summary, one independent verifier, and cleanup, with no tracked mutation. The
Quartermaster may then change only `FRCA-003-v1` (or one versioned content
return) and `NEXT_INSTANCE_HANDOFF.md`, commit, push, and prove synchronization.

Image Specialist remains blocked until that exact passing synchronized
Quartermaster handoff exists. Mission does not authorize Image, Intelligence,
release, maturity advancement, or `FIRST RUN COMPLETE`.

## Protected product, content, canon, media, and rollback

No product, test, E2E, manifest, content, copy, CSS, module, fixture, package,
dependency, validator, curriculum, save, story, map, scoreboard, image, audio,
or media file may change. No image/media generation, edit, replacement,
variation, import, move, deletion, publication, or reveal is authorized.

Host 05 geometry, states/actions/focus/recovery, `L02-02`, evaluator,
sanitizer, evidence/privacy, save, Host 04, route, later Drowned/Witness/City/
rail, both equal MH-40 outcomes, null deltas, and `successor=null` remain
unchanged. No Host 06 work, City repair, new meaning, reward, access, identity,
authority, world response, branch, RP-013, successor, or post-ending content
is authorized.

This variance changes documentation only. The released rollback remains
`3e3da60`; the content candidate remains `a91763e`; there is no product or
content rollback and no migration. The protected PDF, training directory,
repository QA quarantine, Martin's browser/profile/save, hidden lore,
automation, archived workflows, schedules, and reveals remain forbidden.

## Mission signature and exact Quartermaster handoff

Mission read the current synchronized handoff, full Mission profile, complete
`FRCA-003-v1`, exact current candidate/manifest injection controls, and exact
Git object, ancestry, commit-diff, and blob identities at source
`a1109e1f12409a660fcd92f4809ccab6414eac36`. Mission ran no test, validator,
build, preview, browser, E2E, summary, verifier, or cleanup and inspected no
protected/user state.

Mission Captain signs **`FIRST RUN SHELL READY /
FRSH-003-v1-VR-08`**.

Exact next owner is Quartermaster. Read the Quartermaster profile, this
variance, complete `FRCA-003-v1`, operative `FRSH-003-v1-VR-07`, complete
`FRCE-003-v1`, and exact current E2E/manifest identity controls. Change no
tracked implementation or content file. Pass the deterministic ancestry/
identity preflight, inject only the exact content/evidence candidate values,
then run exactly one fresh external-GUID-root complete E2E, one generated
summary, and one verifier. Any failure is `HOLD` without rerun. Image remains
blocked until Quartermaster PASS.

The dedicated Mission commit, push, and exact `HEAD == origin/main` proof are
reported from Git after commit because this artifact cannot contain the hash
of the commit that first contains itself.
