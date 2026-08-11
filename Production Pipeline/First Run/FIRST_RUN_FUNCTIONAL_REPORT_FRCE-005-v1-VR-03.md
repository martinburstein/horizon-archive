# First Run Functional Report - v4 Same-Handle Change-Time Stop

Report ID: `FRCE-005-v1-VR-03`

Stage / stable agent: Combat Engineer / `combat_engineer`

Disposition: **`HOLD / FRRC-003-v4 CREATE STOPPED ON SAME-HANDLE
CHANGE-TIME DRIFT / NO RETRY / SCIENCE VIABILITY ADJUDICATION REQUIRED`**

Work Order / base shell / effective variances: `FRWO-005-v2` /
`FRSH-005-v1` / `FRSH-005-v1-VR-01` / `FRSH-005-v1-VR-02` /
`FRSH-005-v1-VR-03`

Release-command manifest / launcher: `FRRC-003-v4` /
`FIRST_RUN_RELEASE_COMMAND_LAUNCHER_FRRC-003-v4.ps1`

Combat source:
`390345d7f4deaa6b917133d4fd60b29931f291c0`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

## Result

Fresh Combat verified every declared v4 precondition and invoked
`FRRC-003-v4.entries.accepted-media-create` exactly once through the literal
checked-in `-File` launcher. The invocation loaded the launcher and frozen
primitive, entered the fail-closed Cloud Files adapter, and stopped during a
same-data-handle post-read metadata comparison:

```text
metadata drift ChangeTime
FullyQualifiedErrorId: metadata drift ChangeTime
```

The frozen contract permits only unchanged or monotonically advanced
`LastAccessTime`; it requires exact before/after equality for `ChangeTime`.
The invocation therefore failed lawfully before tuple completion, final stdout,
candidate assertion, or create-new manifest logic. Combat did not retry,
recompute, alter the launcher or primitive, substitute a host, inspect the
affected path, weaken the metadata predicate, repair metadata, or reinterpret
the stop as a PASS. `FRAM-001-v1` remains absent and Quartermaster remains
blocked.

## Exact pre-invocation verification

Before the consumed attempt, Combat independently verified:

- exact `HEAD == origin/main == 390345d7f4deaa6b917133d4fd60b29931f291c0`;
- immutable v3 SHA-256 exact
  `460acd2f7e02c0a0d25dc6a30a5aa85ef305cfced409b0b85618e58b10d200f7`
  and equal to the v4 supersession pin;
- launcher SHA-256 exact
  `bc49dc414820b83e5c623685215a2d548b282de5da09442315f6c20e12498ab2`;
- v4 SHA-256 exact
  `9db5b4dde14f944bfb435c59cf9e40a5835eeed46bac199c2916b9937eba4196`;
- launcher AST and joined frozen primitive AST each had `0` syntax errors;
- normalization of only the declared supersession, self-path, command arrays,
  and create prerequisite made v4 semantically exact to v3;
- create and verify arrays were the exact literal `powershell -NoProfile
  -File ... -Mode create|verify` transports, with no `$` or `-Command` token;
- the effective primitive contained `0` `[Convert]::ToHexString` calls and
  exactly one frozen BitConverter lowercase-hex tuple assignment;
- the literal set was exact count `17`, unique count `17`, and produced exact
  in-memory cumulative component count `31` and frozen total `37,410,731`;
- frozen candidate `02d957e9...` existed, was an ancestor of `HEAD`, and had
  exact tree `09da6293...`; and
- `FRAM-001-v1` was absent.

These checks read control files and Git objects only. They did not resolve,
enumerate, open, hash, or otherwise touch an accepted-media path.

## Invocation reach and unavailable evidence

The failure site is the frozen `SameMeta $before $after $true` call after an
affected leaf's same-handle offset-zero-to-EOF raw hash and post-read metadata
snapshot. Therefore at least the affected leaf reached its permitted raw
stream, but the command emitted no final object and does not identify its
ordinal. Combat did not inspect the media or run any auxiliary query to infer
the path or progress.

```text
count: unavailable from invocation
totalBytes: unavailable from invocation
per-entry sha256: unavailable from invocation
entriesSha256: unavailable
candidateHead: preflight-confirmed 02d957e9d69dc7986928a391c37f899784f73ea5;
               not reached inside the invocation
lastAccessTime scalars: unavailable; final stdout was not emitted
FRAM-001-v1: absent
generation ordinals consumed: 0
```

No pixel decode, render, thumbnail, preview, metadata interpretation, pixel
inspection, accepted-media write, hydration, pin, copy, move, relabel, repair,
generator call, source selection/import, E2E, or reveal occurred. The primitive
may have left only its explicitly permitted operating-system access effects;
Combat made no metadata write or rollback.

## Frozen functional evidence

The inert candidate and inherited evidence remain accepted and frozen, not
replayed: focused `50/0`, legacy static-contract `29/0`, learning/privacy
`17/0`, related `58/0`, validators `40/40`, cold full `979/0/0`, production
and TD-012 fixture builds PASS, production PBA JavaScript `1,676,508`, CSS
`119,394`, modules `217`, accepted media `17 / 37,410,731`, source maps `0`,
served preflight PASS, owned process/port cleanup PASS, and `git diff --check`
PASS.

Complete E2E remains correctly unrun. Those inherited passes do not substitute
for the absent immutable accepted-media manifest and do not authorize
`PRODUCTION FUNCTIONAL`.

## Variance and rollback

Classification: **`REQUIRED CORRECTION / SCIENCE VIABILITY / SAME-HANDLE
CHANGE-TIME STABILITY`**.

The stop is an exact fail-closed outcome under the current Science and Mission
contract. Combat does not classify the observed `ChangeTime` drift as safe,
does not determine whether it arose from Cloud Files behavior or concurrent
external activity, and does not authorize accepting, masking, resetting, or
rechecking it. The one v4 create opportunity is consumed. Any further attempt
requires fresh upstream viability adjudication and, only if lawful, a new
versioned Mission shell variance and superseding command manifest. This report
authorizes neither a second v4 invocation nor an alternate transport.

No rollback ran because no manifest or accepted-media write was created. The
frozen candidate remains inert and the released Host 05 boundary remains safe.
No `PRODUCTION FUNCTIONAL` push is authorized.

## Protected state, process, and maturity

Repository QA quarantine, protected PDF, training directory, real browser /
profile/save, hidden lore, user work, managed/temp roots, accepted-media pixels,
and opaque residuals were not opened or changed.

All thirteen inherited process records remain separate and **OPEN**: VR-17,
VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage 4,
VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope record
remains **OPEN**. This stop closes, cures, merges, waives, or renumbers none.

VR-65 remains exactly **`DEFERRED LIMITATION / RELEASE-PROCESS ONLY /
NON-GATING / OPAQUE EXTERNAL QA RESIDUAL`**, unknown and inaccessible.

Maturity impact: none. `FR-03` remains continuity `FR2`; physical-host
expression `FR0 - 1 accepted shared compression / 1 exact / 10 missing`;
learning `FR2`; behavior/save/recovery `FR1`; content `FR2`; presentation
`FR3`; and prior bounded release proof `FR4`.

## Exact return handoff

One fresh Office of Science Administrator /
`office_of_science_administrator` must read this complete report,
`FRVE-005-v2-VR-01`, `FRSH-005-v1-VR-01`, `FRSH-005-v1-VR-03`, and
`FRRC-003-v4`; classify the same-handle `ChangeTime` stop without touching the
accepted-media paths or retrying the consumed invocation; and decide whether
the manifest gate remains viable. If and only if Science can define a lawful
fail-closed envelope, it must issue a versioned Science variance and return to
Mission for a new versioned shell/command authorization. Otherwise it records
`HOLD`.

No second `FRRC-003-v4` create invocation, recompute, manifest repair,
accepted-media mutation or auxiliary inspection, Quartermaster attempt,
generator call, candidate code change, source inspection/import, Image work,
test/build/preview/E2E, Intelligence release, reveal, push under `PRODUCTION
FUNCTIONAL`, maturity update, OPEN-record closure, schedule, automation, or
`FIRST RUN COMPLETE` may begin.
