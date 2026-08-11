# First Run Functional Report - v5 Cloud Quiescence PASS

Report ID: `FRCE-005-v1-VR-04`

Stage / stable agent: Combat Engineer / `combat_engineer`

Disposition: **`PRODUCTION FUNCTIONAL / FRRC-003-v5 CREATE PASS /
FRAM-001-v1 FROZEN / QUARTERMASTER AUTHORIZED AFTER EXACT SYNC`**

Work Order / viability / effective Science variances: `FRWO-005-v2` /
`FRVE-005-v2` / `FRVE-005-v2-VR-01` / `FRVE-005-v2-VR-02`

Base shell / effective Mission variances: `FRSH-005-v1` /
`FRSH-005-v1-VR-01` / `FRSH-005-v1-VR-02` /
`FRSH-005-v1-VR-03` / `FRSH-005-v1-VR-04`

Release-command manifest / launcher: `FRRC-003-v5` /
`FIRST_RUN_RELEASE_COMMAND_LAUNCHER_FRRC-003-v5.ps1`

Combat source:
`a25aba052792cc731488a0270d09fd14e09ee820`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

## Result

Fresh Combat independently verified the complete v5 control envelope and
invoked `FRRC-003-v5.entries.accepted-media-create` exactly once through its
literal checked-in command array. The command passed all seventeen topology,
identity, raw-content, complete Cloud-standard, residency, and same-handle
quiescence gates and created immutable `FRAM-001-v1`.

```text
mode: create
count: 17
totalBytes: 37410731
entriesSha256: c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99
candidateHead: 02d957e9d69dc7986928a391c37f899784f73ea5
```

No second invocation, recompute, alternate wrapper, widened share, auxiliary
accepted-media query, pixel decode, media write, metadata repair, generator
call, selected-source inspection/import, test/build/preview replay, E2E, or
reveal occurred. Generation ordinals consumed remain `0`.

## Exact pre-invocation verification

Combat used only control files, Git objects, and in-memory literal strings
before the one create invocation:

- exact `HEAD == origin/main == remote main ==
  a25aba052792cc731488a0270d09fd14e09ee820`;
- no tracked worktree delta;
- immutable v4 SHA-256 exact
  `9db5b4dde14f944bfb435c59cf9e40a5835eeed46bac199c2916b9937eba4196`;
- immutable v5 SHA-256 exact
  `6b2d8dc1ad71640394a9c9fcca244072cce608f2dc571642ab8b1444b2941e03`;
- immutable v5 launcher SHA-256 exact
  `6218e7efd2e9758f902e631d443ac4ad999e19b6ab638031ccfd6a7276a163b0`;
- launcher and joined primitive PowerShell ASTs each had `0` errors;
- embedded C# interop/snapshot adapter compiled;
- the v4-to-v5 comparison contained exactly the declared eleven replaced
  primitive lines and eighteen stronger-adapter lines while frozen schema,
  Work Order, shell, candidate, literals, topology, stream, tuple, count,
  total, timeout, owners, cleanup, and push controls remained stable;
- create and verify transports were the exact checked-in `powershell
  -NoProfile -File ... -Mode create|verify` arrays;
- literal count `17`, unique count `17`, cumulative component count `31`, and
  frozen total `37,410,731` were exact;
- frozen candidate `02d957e9...` existed, was an ancestor of Combat source,
  and had exact tree `09da6293...`; and
- `FRAM-001-v1` was absent.

The first control pass stopped only on Combat's own overly literal prose-token
assertion before any accepted-media access or invocation. Combat corrected
that control-only assertion and reran the preflight. It did not consume or
retry a release command.

## Immutable manifest proof

Combat read only the created JSON evidence after PASS; it did not recompute
the seventeen raw streams.

- `FRAM-001-v1` file SHA-256:
  `a674c337b377de113eaa4c6763bd431afc73ab613374a76501aa8c5ce37e5437`;
- schema: `horizon-archive.first-run.accepted-media-manifest/v1`;
- Work Order / shell: `FRWO-005-v2` / `FRSH-005-v1`;
- release baseline: `a91763e28d488f31f8cf7d40ece0b2682246ba9b`;
- exact entries/count/byte sum/declared total: `17 / 17 / 37,410,731 /
  37,410,731`;
- exact literal order: PASS;
- every per-entry digest: exactly 64 lowercase hexadecimal characters;
- canonical tuple recomputation from stored manifest fields:
  `c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`;
- stdout/manifest/recomputed tuple digest equality: PASS; and
- candidate/tree identity: `02d957e9...` / `09da6293...`, PASS.

## Complete per-ordinal timing scalars

Every ordinal emitted `LastAccessTime=advanced`. Ordinal 1 emitted
`ChangeTime=unchanged` and correctly has no settle scalars. Ordinals 2-17
emitted `ChangeTime=advanced`; every immediate value equaled its settled value,
was greater than its before value, settled in exactly two consecutive samples,
and remained inside the `2,000 ms` bound.

| Ordinal | Access | Change | Before | Immediate / settled | Elapsed ms | Samples |
| ---: | --- | --- | ---: | ---: | ---: | ---: |
| 1 | advanced | unchanged | - | - | - | - |
| 2 | advanced | advanced | 134308903437435702 | 134308960536257408 | 521 | 2 |
| 3 | advanced | advanced | 134308903437415698 | 134308960541787501 | 516 | 2 |
| 4 | advanced | advanced | 134308903437405692 | 134308960547003281 | 512 | 2 |
| 5 | advanced | advanced | 134308903437373730 | 134308960552189103 | 514 | 2 |
| 6 | advanced | advanced | 134308903437373730 | 134308960557460837 | 519 | 2 |
| 7 | advanced | advanced | 134308903437465707 | 134308960562735058 | 524 | 2 |
| 8 | advanced | advanced | 134308903669420579 | 134308960568064587 | 519 | 2 |
| 9 | advanced | advanced | 134308903669289620 | 134308960573341142 | 526 | 2 |
| 10 | advanced | advanced | 134308903669289620 | 134308960578684523 | 513 | 2 |
| 11 | advanced | advanced | 134308903669072609 | 134308960584026534 | 519 | 2 |
| 12 | advanced | advanced | 134308903669022602 | 134308960589305841 | 519 | 2 |
| 13 | advanced | advanced | 134308903669289620 | 134308960594578899 | 520 | 2 |
| 14 | advanced | advanced | 134308903669420579 | 134308960599827675 | 521 | 2 |
| 15 | advanced | advanced | 134308903669289620 | 134308960605134546 | 522 | 2 |
| 16 | advanced | advanced | 134308903669289620 | 134308960610561729 | 520 | 2 |
| 17 | advanced | advanced | 134308903666329387 | 134308960615848985 | 523 | 2 |

The command's complete snapshot comparisons also proved stable normalized
path, volume/128-bit file ID, creation/write times, attributes/tag/derived
Cloud state, allocation/EOF/link/delete/directory state, raw length/SHA, and
all `CF_PLACEHOLDER_STANDARD_INFO` fields, including zero modified data,
fully validated/on-disk content equal to EOF, in-sync state, valid pin/property
values, nonzero Cloud IDs, and stable opaque identity bytes.

## Frozen product evidence and Quartermaster ledger

The product/test candidate remains inert and byte-identical to frozen commit
`02d957e9...`; Combat changed no product, test, runtime, lesson, save, route,
world, ending, or media file in this close. Its inherited gates remain
accepted and were not replayed: focused `50/0`, legacy static-contract `29/0`,
learning/privacy `17/0`, related `58/0`, validators `40/40`, cold full
`979/0/0`, production and TD-012 fixture builds PASS, production PBA
JavaScript `1,676,508`, CSS `119,394`, modules `217`, accepted media
`17 / 37,410,731`, source maps `0`, served preflight PASS, owned process/port
cleanup PASS, and `git diff --check` PASS.

Complete E2E remains correctly unrun. Automated accessibility evidence remains
non-equivalent to human assistive-technology certification.

Quartermaster receives exactly the predeclared inert Host 06 registry:

```text
source = { enabled=false, path=null, sha256=null, byteLength=null,
           width=null, height=null, format=null, color=null,
           attemptOrdinal=null }
physical = { x=null, y=null, width=null, height=null,
             centerX=null, centerY=null }
activation = { x=null, y=null, width=null, height=null }
label = { insetOuterCss=3, insetTextCss=5 }
protected = { host05Cue=null, liveWater=null, returnLikeRidge=null,
              crown=null, tidalLens=null, secondLensCandidate=null }
layouts = { desktop=null, laptop=null, narrow=null, effective200=null,
            retained320x180=null, retained320x240=null }
```

The seven final-purpose copy slots and one alt slot remain null. No foundational
behavior defect or undeclared placeholder remains. Quartermaster may populate
only the shell's predeclared source/geometry/protected/layout scalars, seven
copy slots, and one alt slot after independently proving the synchronized
Combat gate.

## Variance, rollback, maturity, and protected state

Disposition classification: **`ACCEPTED IMPROVEMENT / RELEASE VALIDATION /
CLOUD CHANGE-TIME QUIESCENCE PROVED`**.

The consumed v4 stop remains an exact permanent historical `HOLD`; this PASS
does not retry, repair, complete, or reclassify it. The v5 monotonic Cloud-only
ChangeTime advances were accepted only because every stronger fixed-field,
content, topology, residency, complete Cloud-standard, settle, and
reconfirmation predicate passed. No timestamp or placeholder was repaired or
restored. The operating system's permitted access/change-time effects remain
recorded above.

Rollback was unnecessary. The new manifest is evidence for the frozen inert
candidate; the released Host 05 boundary remains safe until Quartermaster
lawfully supplies every source predicate.

Maturity impact: the bounded stage reaches **`PRODUCTION FUNCTIONAL`** but no
scoreboard level is advanced here. `FR-03` remains continuity `FR2`;
physical-host expression `FR0 - 1 accepted shared compression / 1 exact / 10
missing`; learning `FR2`; behavior/save/recovery `FR1`; content `FR2`;
presentation `FR3`; and prior bounded release proof `FR4`. Intelligence alone
may update maturity after the completed production sequence.

Repository QA quarantine, protected PDF, training directory, real browser /
profile/save, hidden lore, user work, managed/temp roots, accepted-media
pixels, and opaque residuals were not opened or changed.

All thirteen inherited process records remain separate and **OPEN**: VR-17,
VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage 4,
VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope record
remains **OPEN**. This close cures, merges, waives, closes, or renumbers none.

VR-65 remains exactly **`DEFERRED LIMITATION / RELEASE-PROCESS ONLY /
NON-GATING / OPAQUE EXTERNAL QA RESIDUAL`**, unknown and inaccessible.

## Exact Quartermaster handoff

After this manifest/report/handoff evidence is committed, pushed, and exact
`HEAD == origin/main == remote main` synchronization is proved, one fresh
Quartermaster / `quartermaster` must read the complete current handoff, full
Quartermaster profile, `FRWO-005-v2`, complete effective shell through
`FRSH-005-v1-VR-04`, `FRDT-005-v1`, `FRPX-005-v1`, this report, and immutable
`FRAM-001-v1`.

Quartermaster independently verifies the synchronized Combat evidence and
manifest identity, then executes only its bounded shell milestone: at most
three sequential built-in image-generation ordinals through the exact managed-
ingress protocol; objective original-resolution rejection; selection of at
most one passing candidate; exact one-raster plus `PROVENANCE.md` import;
population only of the predeclared scalar/source slots; and final-purpose copy
in exactly seven slots plus one observable-fact alt slot. It may not change
behavior, lesson ownership, route, save, world, ending, accepted predecessor
media, manifest identity, or protected state.

The enclosing evidence commit is resolved by Git after this report is written.
Combat must push it and prove exact local/origin/remote equality before the
handoff becomes active.
