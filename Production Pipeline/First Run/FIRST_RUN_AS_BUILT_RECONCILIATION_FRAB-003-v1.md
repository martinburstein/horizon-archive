# First Run As-Built Reconciliation - FRAB-003-v1

Disposition: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Recorded: `2026-08-10 11:01:51 -04:00`

## Exact control

- Intelligence starting HEAD: `0c5985c113a44376786e67abe5e030a3d63c55d6`
- Exact immutable content candidate: `a91763e28d488f31f8cf7d40ece0b2682246ba9b`
- Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`
- Accepted predecessor evidence control: `ca89a679195c11d441a76e6c02983a6436f2ccb2`
- Predecessor acceptance: `FIRST_RUN_AS_BUILT_RECONCILIATION_FRAB-002-v1.md`
- Governing shell: `FIRST_RUN_SHELL_FRSH-003-v1.md` through
  `FIRST_RUN_SHELL_VARIANCE_FRSH-003-v1-VR-11.md`
- Bounded Work Order: `FIRST_RUN_WORK_ORDER_FRWO-003-v1.md`

This is a release HOLD, not a product correction and not a rejection of the
exact immutable content candidate. Intelligence did not repair, amend, or
rerun the candidate. The sole authorized fresh external-root E2E failed closed
at the final Sixfold Weir layout aggregate before it emitted the required
machine summary. Therefore the independent verifier had no accepted input and
was not run. FRWO-003 cannot receive fresh Intelligence acceptance from this
run.

## Identity and patch integrity

- `3e3da60` is an ancestor of `7e85154`, which is an ancestor of validation
  control `4cd7fbf`, evidence control `ca89a679`, content candidate `a91763e`,
  and Intelligence starting HEAD `0c5985c` in that order.
- `git diff a91763e..0c5985c -- horizon-archive-game playtest curriculum`
  was empty.
- The evidence-manifest blob at `ca89a679` and at the starting HEAD was exactly
  `786663223f75cb3a88503c50373e79f3c5c5cf26`.
- Validation control changed only
  `horizon-archive-game/test/sixfoldWeir.test.js`; evidence control changed
  only the FRRC-002 manifest and `playtest/e2e-playthrough.mjs`; the content
  candidate changed only `src/data/drownedArchive.js`,
  `test/sixfoldWeir.test.js`, and `playtest/e2e-playthrough.mjs`.
- `package.json` and `package-lock.json` were unchanged from the accepted
  baseline to the candidate. The runtime-source network-request scan was
  empty. The forbidden later-host/authority/successor token scan over the
  candidate addition was empty. `git diff --check` passed.
- Exact Drowned Archive master: SHA-256
  `AFA0008E3F1E0CDACB2B9E58F14E9F676729EAB9E8725A58C87D73AC489C08ED`,
  `2,727,857` bytes. Exact game-on-paper control: SHA-256
  `F343E1DDA0647AD82DF9E5A85D26E0A7A3025166A0BA663E4CF7019FD066D142`.

## Independent gate record

| Gate | Fresh Intelligence result | Reconciliation |
| --- | --- | --- |
| Manifest-focused tests | `68/68` PASS; Node duration `182.87ms` | Accepted deterministic corroboration |
| Related tests | `74/74` PASS; `2254.7838ms` | Accepted deterministic corroboration |
| Cold full suite | `972/972` PASS; `12617.1715ms` | Accepted deterministic corroboration |
| Repository validators | Exact sorted inventory `40/40` PASS | Accepted deterministic corroboration |
| Production build | PASS; `217` modules; Vite `6.47s`; wall `7.5s` | Accepted deterministic corroboration |
| TD-012 fixture build | PASS; `57` modules; Vite `742ms`; wall `1.8s` | Accepted deterministic corroboration |
| PBA | JS `1,667,393`; CSS `119,247`; media `17 / 37,410,731`; no maps | Under narrow/global caps |
| Served identity | Production and fixture root/deep/JS/CSS byte equality `2/2` | Accepted deterministic corroboration |
| Sole fresh external-root E2E | **FAIL** after `57.5s` at `playtest/e2e-playthrough.mjs:1550`: `Sixfold Weir layout contract incomplete` | Required correction remains open; no rerun authorized |
| Machine summary | Not emitted (`first-run-live-summary.json` absent) | Required evidence unavailable |
| Independent verifier | Not run because the required summary did not exist | Required evidence unavailable |

The failed assertion reported the complete six-layout aggregate. The captured
command output was truncated before an exact failing subfield could be
reliably isolated. This record therefore does not infer which product,
fixture, orchestration, or evidence-contract component owns the failure.
Earlier deterministic and served-identity passes remain true, but they cannot
substitute for the shell-required successful live aggregate, machine summary,
and verifier.

## Requirement reconciliation

- Seven final copy meanings, LOOK/silent TALK/Pilot-Suit detection, pure state
  derivation, unchanged mechanics, `L02-02`, the evaluator/evidence/privacy
  boundary, exact `45/75/20/25` lattice, and immutable Drowned source identity
  passed source and deterministic checks.
- Semantic/action identity, q-geometry, focus graph, forced-colors behavior,
  reduced-motion behavior, full-rail traversal, both MH-40 outcomes, null
  deltas, `successor=null`, offline behavior, runtime error freedom, and
  activation performance were exercised by the sole live command, but the
  command did not complete and emitted no accepted summary. Intelligence does
  not promote those claims to fresh release evidence.
- The final six-layout aggregate is **`REQUIRED CORRECTION - OPEN`**. Its exact
  ownership is unresolved because the no-rerun contract and absent failure-side
  machine diagnostic prevent responsible localization from this run.
- Host 05 local maturity only was in scope. No Host 06-15, Witness/later-host,
  City-contradiction, Measured Horizon literary-close, RP-013, successor, or
  post-ending maturity is inferred.

## Complete variance classification

| Variance | Classification at this gate |
| --- | --- |
| `FRVE-003-v1-VR-01` | Accepted planning clarification; superseded by the later browser-resolved envelope and governing shell reissues |
| `FRVE-003-v1-VR-02` | Accepted planning clarification; frozen into the governing shell chain |
| `FRSH-003-v1-VR-01` | Historical HOLD resolved by the VR-02 shell reissue |
| `FRSH-003-v1-VR-02` | Accepted, then superseded by later exact shell reissues |
| `FRSH-003-v1-VR-03` | Historical HOLD resolved by the VR-04 shell reissue |
| `FRSH-003-v1-VR-04` | Accepted, then superseded by later exact shell reissues |
| `FRSH-003-v1-VR-05` | Accepted truthful-static alignment; inherited by later reissues |
| `FRSH-003-v1-VR-06` | Historical HOLD resolved by the VR-07 shell reissue |
| `FRSH-003-v1-VR-07` | Accepted stable-identity/document-drift contract; inherited |
| `FRSH-003-v1-VR-08` | Accepted candidate-identity replay contract; superseded operationally by VR-09 through VR-11 |
| `FRSH-003-v1-VR-09` | Accepted native-root clarification; superseded operationally by VR-10 and VR-11 |
| `FRSH-003-v1-VR-10` | Accepted normalized-containment clarification; superseded operationally by VR-11 |
| `FRSH-003-v1-VR-11` | **Deferred limitation / release-process only / non-gating** for the disclosed predecessor external root; unchanged by this run |
| `FRPX-003-v1-VR-01` | Accepted live-evidence clarification; superseded by the more exact VR-02/VR-03 blueprint |
| `FRPX-003-v1-VR-02` | Accepted used-values/focus clarification; inherited by VR-03 and the shell |
| `FRPX-003-v1-VR-03` | Accepted immutable identity/drift clarification; current blueprint control |
| Fresh Intelligence six-layout aggregate failure | **Required correction / open / release-gating**; exact owning component unresolved; Mission adjudication required |
| Automated accessibility evidence without human AT certification | **Deferred limitation / non-gating for this bounded automated gate**; no certification claimed |
| Vite large-chunk warning | **Deferred limitation / non-gating**; measured JS/CSS/media remain within the accepted PBA |
| Host 06-15, Witness/later hosts, City contradiction, MH literary close | **Deferred outside FRWO-003 / no spillover** |

The disclosed predecessor root is exactly
`C:\Users\marti\AppData\Local\Temp\horizon-archive-frrc002-3d574750-951c-4029-b6b6-531f7d012015`.
Intelligence did not inspect, enumerate, reuse, mutate, move, or delete it.

## Maturity and release control

No release-map or scoreboard cell advances. Their current FRRM-003-v1 and
FRSB-003-v1 controls remain unchanged. Host 05 remains recorded at the prior
honest local maturity: playable `FR2`; physical maturity `FR0 - 1 compressed /
11 missing`; learning `FR2`; behavior `FR1`; content `FR2`; presentation
`FR3`. Any predecessor bounded-FR4 statement remains historical evidence, not
a fresh FRWO-003 release.

This record does not call `FIRST RUN COMPLETE`. Hosts 06-15, Witness and later
hosts, the City contradiction, and the shared Measured Horizon literary close
remain incomplete.

## Cleanup and protected boundaries

- Fresh Intelligence root:
  `C:\Users\marti\AppData\Local\Temp\horizon-archive-intelligence-c046e0d8-6bd7-4acb-83d8-0fb542611ba4`.
  It was created as one external GUID root, used for the sole attempt, and
  deleted after exact containment validation. It is absent.
- Owned previews PID `38704` and `20208` were stopped. Ports `4173` and `4184`
  are clear. Four owned `ha-intel-*-6075085a-efe8-4bd8-b6b6-9adc84c43bbf`
  preview logs were deleted.
- One PowerShell `Remove-Item -Recurse` cleanup command was policy-blocked
  before execution. The same exact validated root was subsequently deleted
  with `System.IO.Directory.Delete`; this is a disclosed policy-blocked
  release-process variance with no product effect.
- Protected repository QA, PDF, training, browser/profile/save, hidden-lore,
  and media content were not inspected or modified. No image, audio, media,
  import, generation, edit, or reveal operation occurred.

## Adaptive retrospective

Decision: **`TUNE`**.

- **KEEP:** immutable candidate/control identities, ancestry/diff preflight,
  deterministic ladder, served identity, one fresh external-GUID root, and the
  no-rerun release rule.
- **TUNE:** before a future sole E2E may be authorized, its evidence contract
  should persist a minimal failure-side machine diagnostic identifying the
  failing layout/subfield before throwing. This is a future planning decision,
  not authorization to change or rerun FRWO-003 here.
- **REDESIGN:** not warranted from one stopped aggregate. The exact owner must
  first be adjudicated from a bounded Mission review.

## Exact next action

A **fresh Mission Captain** must read this reconciliation and the complete
FRWO-003 shell/variance/production chain, adjudicate the failed live aggregate,
and issue one versioned shell `HOLD` or `READY` routing to the earliest
responsible owner. Mission may not infer a product defect from the truncated
aggregate, authorize another E2E before defining the exact evidence contract,
repair the candidate, advance maturity, or start a downstream role.
