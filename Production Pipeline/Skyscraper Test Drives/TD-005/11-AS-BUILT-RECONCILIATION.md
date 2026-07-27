# TD-005 As-Built Reconciliation - Intelligence Release

## Control

| Field | Released value |
|---|---|
| Test drive | `TD-005` |
| Stage | Intelligence Officer / Tier 5 |
| Agent ID | `intelligence_officer` |
| Shell | `SS-RP005-MANYFOLD-RETURN-v1 / SHELL READY` |
| Slice | `TD-005-RP005-MANYFOLD-RETURN-v1` |
| Address | `RP-005 / SC-06 / MF-00-MF-30` |
| Route | `TD005-RTA-001` |
| Candidate input | `558674bd8ea3b2bef039c250275a9c17e663e164` |
| Parent policy input | `036b43190bc5a0da80db3b97e2af002ee950ee22` |
| Release date | `2026-07-27` |
| Disposition | **`PASS - AS BUILT RELEASED`** |

The candidate conforms to the versioned Mission shell. TD-005 is now the
released playable boundary. MF-30, the two exact write-free returns, and every
no-later-content boundary remain the release stop.

## Independent requirement reconciliation

| # | Shell definition of done | Independent evidence | Result |
|---:|---|---|---|
| 1 | TD-004 TR-40 bytes, record, choices, returns, and SC-05 remain exact | predecessor/route regressions and selected related suite pass; no TD-004 asset or record authority changed | PASS |
| 2 | only `TD005-RTA-001` mounts zero-evidence MF-00 | route/controller/integration tests and closed fixture pass | PASS |
| 3 | invalid, duplicate, stale, Tour, interrupted, and reload entry fail closed | protected/normal integration and related recovery regressions pass | PASS |
| 4 | MF-00-MF-30 and all 24 observation orders converge | focused controller and fixture scenario coverage pass | PASS |
| 5 | four physical observations remain equal and nonjudgmental | original-resolution, runtime, grayscale, wide, narrow, and semantic review pass | PASS |
| 6 | `PY-012`, `RP005-TEXT-01`, and two explanations remain independent | frozen evaluator and connected integration tests pass | PASS |
| 7 | presentation, route, focus, Tour, modality, timing, and save display grant no evidence | evidence-firewall tests and source review pass | PASS |
| 8 | exact ten-key, nine-note-key, eight-record allowlist only | persistence/controller tests and strict restore scenarios pass | PASS |
| 9 | private/transient material is rejected and cleared | sanitation, invalid-save, recovery, and privacy tests pass | PASS |
| 10 | atomic replacement, read-back, rollback, TD-004 preservation, recovery, and no-replay restore | success, rollback, rollback-unverified, reload, and MF-30 fixture states pass | PASS |
| 11 | only write-free TR-40 and City Threshold returns; no later route | both return fixture states and source/later-marker exclusions pass | PASS |
| 12 | seven modalities and complete accessibility/responsive contract | 176 base-layout checks plus 24 parity checks; minimum control height `44px`; representative grayscale inspection | PASS |
| 13 | offline, no authority/guarantee, no-credit Tour, local-only, invariant worlds | zero foreign requests, no runtime errors, invariant-role review, full regression | PASS |
| 14 | both and only both SC-06 roles are direct, proven, accessible, responsive, clean, maximum quality | exact source/master reproduction, direct-import scan, artifact and rendered review | PASS |
| 15 | budget, suites, validators, served identity, E2E, visual, cleanup, patch, synchronization | all release gates below pass; synchronization is completed by the dedicated Intelligence commit/push convention | PASS |
| 16 | no identity, purpose, access, reward, authority, response, RP-006 route, RP-013, successor, post-ending content, or hidden lore | runtime/test exclusion and bounded source review pass; hidden lore unopened | PASS |
| 17 | Intelligence classifies every variance and releases honestly | classifications below are complete | PASS |

## Accepted visual identity and recovery history

Exactly two private no-reference generation attempts occurred. The first
failed Image Specialist QA and remained outside the workspace, canon, runtime,
provenance package, commit, and user-facing reveal. The one permitted targeted
recovery produced the sole accepted and archived source. No third attempt
occurred. A tracked-file/name audit found no rejected draft.

| Role | Exact identity |
|---|---|
| accepted source | `rp005-manyfold-return-source-v1.png`; `1672 x 941`; RGB PNG; `2,979,891` bytes; SHA-256 `1DF61905EC19F28DD10839D95FADCEE81FBA4EF3AF12C0A94B2F44AC9738AC28` |
| panorama | `sc06-manyfold-return-panorama-runtime-master-v1.webp`; `3840 x 2160`; `2,416,978` bytes; SHA-256 `3EEC1A762ABB1C0654CF41753044173136E79F933DB55C6FE7CA097E33A5012B` |
| detail | `sc06-manyfold-return-detail-runtime-master-v1.webp`; `3840 x 2160`; `2,125,650` bytes; SHA-256 `1F64EE18EB14ED0FB7B35EF4814C308391635865056A21F7EC76F3F5BA48D0E9` |

Pillow `12.2.0` independently reproduced byte-identical derivatives:

1. panorama: full RGB source to `3840 x 2161` with Lanczos, remove one
   lower-edge pixel, WebP quality `100`, method `6`, exact RGB;
2. detail: crop `(180,120)-(1492,858)` (`1312 x 738`), Lanczos to
   `3840 x 2160`, WebP quality `100`, method `6`, exact RGB.

Original-resolution and rendered inspection confirms a coherent asymmetric
receiver field, recurring but nonmatching cuffs, an ordinary supported
difference, three compatible material eras, an upright opaque bypassed mass,
equal evidence weighting, and larger invariant context. It contains no
person, UI, writing, answer/rank/failure cue, route/access cue, authority,
response, or successor. Grayscale remains legible without color dependence.

## Tier-5 release evidence

| Gate | Fresh result |
|---|---|
| focused TD-005 | `18/18 PASS`; Node `0.405s`; wall `0.597s` |
| selected related TD-004/TD-005/CM | `77/77 PASS`; Node `0.740s`; wall `0.880s` |
| complete game suite | `825/825 PASS`; Node `9.975s`; wall `11.739s` |
| readiness validators | `15/15 PASS`: CUM-01, RP002-RP012, SIM01-SIM03 |
| production build | `PASS`; Vite `10.80s`; wall `13.469s`; `188` modules |
| release PBA | `PBA-TD005-v1 PASS`; JS `1,295,773`; CSS `87,267`; media `26,078,751`; two new images / `4,542,628` |
| exclusion | fixture markers/paths, protected-journey markers, source maps, copy placeholders, and later-content markers absent from production output |
| closed fixture | `44` scenarios x `4` layouts = `176` checks; `6` parity scenarios x `4` layouts = `24`; min control `44px`; no containment, console, page, failed-request, or foreign-request failures |
| exact post-build E2E | one complete run only; `94.241s`; every emitted gate true; `runtimeErrors:false`; `credits:true` |
| cleanup | owned preview/fixture listeners stopped; ports clear; `69` incidental E2E captures restored; temporary QA script removed |

Fresh production identity:

- `index-C4WKXvKt.js` - `1,295,773` bytes - SHA-256
  `D26D82884E75444D3BFD0804D5FE65D555AFA755960EC4A48787B9425D8BB6A9`;
- `index-DfYUL49q.css` - `87,267` bytes - SHA-256
  `20F300C19DEB36C2420EC554B9317190095179C1179205DC3218182A38E2174D`;
- `index.html` - `551` bytes - SHA-256
  `4419CEB3EE26777A646F11F577EAB436FCAA53BFD535BC3E9E745BF1A6EE8CC0`.

Root, reload, fallback, JS, CSS, panorama, and detail each returned HTTP 200
and matched the fresh local byte identities. The successful owned preview was
stopped and its port cleared.

## Variance classification

| ID | Final classification | Release treatment |
|---|---|---|
| `TD005-LIM-001` | **REQUIRED CORRECTION - RESOLVED BEFORE RELEASE** | missing panorama role was supplied by the accepted direct SC-06 panorama master |
| `TD005-LIM-002` | **REQUIRED CORRECTION - RESOLVED BEFORE RELEASE** | missing detail role was supplied by the accepted direct SC-06 detail master |
| `TD005-VAR-001` | **ACCEPTED IMPROVEMENT** | two temporary predecessor placeholders were replaced by the two shell-required SC-06 masters without changing mechanics, copy, evidence, persistence, route, accessibility, budget authority, or world state |

The generation-attempt wording correction is provenance reconciliation, not a
product or shell variance. No unauthorized divergence or deferred limitation
remains. The World/Narrative Masterplan is updated only with the accepted
as-built physical decision; no new lore, identity, purpose, authority, or
successor is added.

## Protected-boundary attestation

- Hidden lore was not opened.
- Martin's browser profile, storage, campaign save, cookies, and session were
  not inspected or mutated. Automated fixture/E2E contexts were isolated.
- The protected PDF and `Simplilearn Training Files/` were not inspected,
  altered, staged, moved, deleted, or committed.
- No Microsoft/Azure/Foundry claim changed.

## Release

**`PASS - AS BUILT RELEASED / TD-005 / SS-RP005-MANYFOLD-RETURN-v1`.**

Exactly one accepted cycle reveal source is archived and shown to Martin:

`Visual Direction/Production Masters/2026-07-27-rp005-manyfold-return-runtime/rp005-manyfold-return-source-v1.png`

The dedicated Intelligence commit containing this reconciliation, final
metrics, controls, retrospective, and synchronized handoff is authoritative
under the non-recursive commit convention. After push, `HEAD`, `origin/main`,
and remote `refs/heads/main` must be identical.

## Synchronized next action

At the next active three-hour wake, Commandant performs guarded verification
of the synchronized TD-005 release and defines only the next selection
envelope. No next story edge is preselected here. Any adjacent surface-canon
transition must again pass the standing sequential Operations, Science, and
Mission authorities before Marine deployment.
