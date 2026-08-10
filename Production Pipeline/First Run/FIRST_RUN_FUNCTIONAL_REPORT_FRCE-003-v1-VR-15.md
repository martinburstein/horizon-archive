# First Run Functional Return - Corrected Diagnostic-Control Verification

Return ID: `FRCE-003-v1-VR-15`

Disposition: **`HOLD / DETERMINISTIC PREFLIGHT EXECUTION-CONTROL FAILURE /
NO E2E / NO RERUN / RETURN TO FRESH MISSION / FRCE-003-v1-VR-15`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Combat Engineer / `combat_engineer`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Diagnostic / verification / field-source correction shells:
`FRSH-003-v1-VR-12` / `FRSH-003-v1-VR-13` /
`FRSH-003-v1-VR-14`

Single corrected-control verification shell: `FRSH-003-v1-VR-15`

Combat start source: `c629345695ac680d9fa4475ab1533506d37a01bf`

Exact diagnostic field-source candidate:
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`

Exact diagnostic-control predecessor:
`ce7c9abbaf1d0ffad8c1031f0398750676d4970e`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Recorded: `2026-08-10 12:19:16 -04:00`

## Outcome

Combat began the exact deterministic ladder once from synchronized source.
The combined integrity/static preflight stopped after `1.7s` at its final
forbidden-boundary assertion. No repair or rerun was performed. Per VR-15,
the result is immediate **`HOLD / NO E2E / NO RERUN`**.

The stop was an execution-control command defect, not a candidate finding.
The assertion collected candidate paths matching protected or forbidden
product/control patterns. The correct actual collection was empty. The
command then incorrectly required that collection to contain exactly the
authorized existing static-test path
`horizon-archive-game/test/sixfoldWeir.test.js`, even though the assertion's
own pattern did not match `/test/`. It therefore threw the exact terminal
message:

```text
forbidden boundary
```

Combat does not correct, waive, or rerun that failed preflight under the
one-run authority. No product or evidence-control defect is established by
this execution failure.

## Deterministic gate record

Before the terminal assertion in the sole gate-1 invocation, these checks
executed without failure:

- start synchronization was exact:
  `HEAD == origin/main == c629345695ac680d9fa4475ab1533506d37a01bf`;
- product, probe, diagnostic predecessor, validation, and accepted evidence
  identities were ancestors of the start source;
- `ce7c9ab` was an ancestor of `2cccbfe`, and `2cccbfe` had exact parent
  `e44e2c7712245c9f34bc1d544fd76c577604d86f`;
- the probe candidate changed exactly the FRRC-002 manifest, existing
  `sixfoldWeir.test.js`, and E2E;
- candidate blobs were exact: manifest
  `fc91a863be99b11c44405071324e3502b959e621`, static test
  `5910af4e4f6754acbc5193ff021f374fe90a96f2`, and E2E
  `0b72f1463c729a8e22337af0115c3316652c2565`;
- predecessor blobs were exact: manifest
  `d9d3491067f072ec2f68dd4159eb4040d47d45ff`, static test
  `38ea5255a1713740094ab4ee3b36e7b78389bbe0`, and E2E
  `5e63e3fd36ce0d59d276a6bc3324cc15ce03bdb2`;
- product blobs were exact at the product candidate and current source:
  `App.jsx` `802ceffb1a07c3b166dc2f7f06ab38138dc37596` and
  `drownedArchive.js` `1bc2f9d93c59a396ddee7ed83cde1600f76b62e7`;
- the validation-control static-test blob remained
  `d71452e6bb5e8ab5d846b8a8ec4f8b12832b03ae`;
- accepted-evidence predecessor blobs remained manifest
  `786663223f75cb3a88503c50373e79f3c5c5cf26` and E2E
  `a322016aac859f385d81dd368845de7d5bde4e5b`;
- tracked and staged drift were absent before the report;
- probe-to-current drift in the three candidate files was absent;
- product-source and dependency drift were absent;
- candidate and worktree `git diff --check` passed;
- `node --check playtest/e2e-playthrough.mjs` passed; and
- the manifest parsed as exact `FRRC-002-v1`, thirteen ordered entries,
  forty sorted `python <repository-relative-path> --self-test` validators,
  and `e2e_invocations=1`.

Because the final assertion failed, the integrity/static gate as a whole did
not pass. The exact downstream ladder record is therefore:

| Gate | Result |
| --- | --- |
| Integrity/static | **FAIL-CLOSED** after `1.7s`; malformed final execution-control assertion, no candidate defect established |
| Focused `68/68` | **NOT RUN** |
| Related `74/74` | **NOT RUN** |
| Cold full `972/972` | **NOT RUN** |
| Validators `40/40` | **NOT RUN** |
| Production / fixture builds `217/57` | **NOT RUN** |
| PBA / media / offline / dependency / source-map / performance | **NOT RUN** |
| Previews / served identity | **NOT RUN** |
| Fresh external GUID root / containment | **NOT CREATED / NOT RUN** |
| Complete E2E | **NOT RUN** |
| Live diagnostic / summary / verifier | **NOT CREATED / NOT RUN** |

One later cleanup-proof command had a PowerShell hash-literal parse error
before execution. It changed no state. The corrected cleanup-only proof then
ran once; this did not rerun any deterministic gate.

## Cleanup and protected-boundary proof

No preview, browser, external QA root, E2E, summary, verifier, or owned log
was created. There was therefore no owned process, browser, root, or file to
remove. Cleanup proof recorded:

- owned preview PIDs: none;
- owned browser: none;
- owned external QA root: none;
- ports `4173` and `4184`: clear;
- tracked and staged diff: absent before the report; and
- `HEAD == origin/main == c629345695ac680d9fa4475ab1533506d37a01bf`
  before this report.

Protected repository QA, PDF, training, user browser/profile/save, hidden
lore, media, disclosed predecessor root, unrelated external roots, and user
state were not inspected, enumerated, reused, changed, moved, or deleted. No
image/media operation, reveal, schedule, automation, or maturity action
occurred.

## Variance, maturity, and exact handoff

Variance: **`REQUIRED CORRECTION / EXECUTION CONTROL / OPEN`**. The current
VR-15 verification authority was consumed by a malformed Combat-owned
preflight assertion. The corrected diagnostic field-source candidate remains
unadjudicated by a complete fresh ladder and live run. No product, probe,
validation, evidence, threshold, predicate, content, learning, privacy, save,
route, world, identity, authority, reward/access, ending, media, or maturity
meaning changed.

Only this versioned Combat return and `NEXT_INSTANCE_HANDOFF.md` change in
this stage. There is no Quartermaster placeholder delta, Image Specialist
work, Host 06-15 or City expansion, successor, RP-013, post-ending content,
release, scoreboard/release-map advance, or `FIRST RUN COMPLETE` claim.

Exact next owner is a **fresh Mission Captain**. Adjudicate only this
fail-closed execution-control stop and decide whether to issue one newly
versioned single-verification authority to a fresh Combat Engineer. Preserve
all five frozen identities and every VR-15 boundary. Do not treat the
preflight's partial checks as complete verification, infer a candidate or
product defect, authorize a rerun under VR-15, begin Quartermaster/Image/
Intelligence, inspect protected/predecessor/user state, advance maturity, or
call `FIRST RUN COMPLETE`.

The dedicated report/handoff commit and final `HEAD == origin/main` proof are
reported from Git after commit because this artifact cannot contain the hash
that first contains itself.
