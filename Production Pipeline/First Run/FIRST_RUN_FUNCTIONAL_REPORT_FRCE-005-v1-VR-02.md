# First Run Functional Report - v3 Launch-Literal Stop

Report ID: `FRCE-005-v1-VR-02`

Stage / stable agent: Combat Engineer / `combat_engineer`

Disposition: **`HOLD / FRRC-003-v3 CREATE STOPPED BEFORE PRIMITIVE LOAD /
NO RETRY / MISSION EXECUTION-CONTROL ADJUDICATION REQUIRED`**

Work Order / base shell / effective variances: `FRWO-005-v2` /
`FRSH-005-v1` / `FRSH-005-v1-VR-01` / `FRSH-005-v1-VR-02`

Release-command manifest: `FRRC-003-v3`

Combat source:
`6e3630d8e9267dfaf8dec3bfcf3d68b968ec7c43`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-10**

## Result

Fresh Combat verified every declared precondition and launched the one
authorized `FRRC-003-v3.entries.accepted-media-create` attempt. The attempt
stopped before the manifest primitive loaded. The outer Windows PowerShell
command layer interpolated the entry's `$r` and `$p` variables before the
declared child `powershell -NoProfile -Command` process received them. The
child therefore received malformed expressions beginning with
`=Get-Content` and `.policy.accepted_media_manifest_primitive` and exited
nonzero:

```text
=Get-Content : The term '=Get-Content' is not recognized
.policy.accepted_media_manifest_primitive : The term
'.policy.accepted_media_manifest_primitive' is not recognized
& : The term '-Mode' is not recognized
```

This is an execution-orchestration literal-preservation failure before
`Get-Content` loaded `FRRC-003-v3`, before `Add-Type`, before metadata or data
handles, and before the frozen BitConverter conversion. Combat did not retry,
escape and relaunch, substitute a command host, repair output, or reinterpret
the stop as a PASS. `FRAM-001-v1` remains absent. Quartermaster remains
blocked.

## Exact pre-invocation verification

Before the consumed attempt, Combat independently verified:

- exact `HEAD == origin/main == 6e3630d8e9267dfaf8dec3bfcf3d68b968ec7c43`;
- `FRRC-003-v2` SHA-256 exact
  `1ce0dedb5f8d4fc7d9d2b9186194f9af112069d4ff0d4b7aee517b2f1b1b85f1`
  and an exact match to the immutable v3 supersession pin;
- `FRRC-003-v3` SHA-256
  `460acd2f7e02c0a0d25dc6a30a5aa85ef305cfced409b0b85618e58b10d200f7`;
- the v2/v3 executable primitive had exactly two textual deltas: its own
  v3 release-manifest path and the authorized tuple-digest conversion;
- v2 contained one PowerShell `[Convert]::ToHexString` call, v3 contained
  zero, and the v3 replacement was the frozen non-emitting
  `BitConverter.ToString(...).Replace(...).ToLowerInvariant()` assignment;
- frozen candidate `02d957e9...` existed, was an ancestor of `HEAD`, and had
  exact tree `09da6293...`;
- the accepted-media literal set was exact count `17`, unique count `17`,
  and produced exact cumulative component count `31`;
- the frozen total was exact `37,410,731` bytes;
- the create entry owner was `combat_engineer`, its declared host was literal
  `powershell`, and its timeout was `60,000` ms; and
- `FRAM-001-v1` was absent.

The worktree contained only the already-declared protected untracked PDF, QA
quarantine, and training directory. No tracked delta existed.

## Invocation reach and unavailable evidence

Because the child stopped before loading the JSON manifest, this attempt
opened none of the thirty-one cumulative accepted-media components and none
of the seventeen accepted-media data streams. It performed no topology,
identity, residency, no-recall, raw-byte, metadata, per-entry SHA, tuple,
candidate, create-new, or semantic-manifest operation.

```text
count: unavailable from invocation
totalBytes: unavailable from invocation
entriesSha256: unavailable
candidateHead: preflight-confirmed 02d957e9d69dc7986928a391c37f899784f73ea5;
               not reached inside the invocation
lastAccessTime scalars: unavailable; accepted-media handles never opened
FRAM-001-v1: absent
generation ordinals consumed: 0
```

No pixel decode, rendering, thumbnail, preview, metadata interpretation,
pixel inspection, accepted-media read or write, hydration, pin, copy, move,
relabel, repair, E2E, generator call, source selection, import, or reveal
occurred.

## Frozen functional evidence reconfirmed

The inert candidate and inherited evidence remain accepted and frozen, not
replayed: focused `50/0`, legacy static-contract `29/0`, learning/privacy
`17/0`, related `58/0`, validators `40/40`, cold full `979/0/0`, production
build PASS, TD-012 fixture build PASS, production PBA JavaScript `1,676,508`,
CSS `119,394`, modules `217`, accepted media `17 / 37,410,731`, source maps
`0`, served preflight PASS, owned process/port cleanup PASS, and
`git diff --check` PASS.

Complete E2E remains correctly unrun. These inherited gates do not substitute
for the absent immutable accepted-media manifest and do not authorize
`PRODUCTION FUNCTIONAL`.

## Variance and rollback

Classification: **`REQUIRED CORRECTION / EXECUTION CONTROL / COMMAND ARGUMENT
LITERAL PRESERVATION`**.

The frozen v3 primitive itself was not reached and is not adjudicated as
defective by this report. Its single authorized create opportunity is consumed
under the controlling `Any failure is immediate HOLD / NO RETRY` boundary.
Combat does not authorize a second v3 launch, even with corrected quoting.
Mission must adjudicate a new versioned authorization and freeze any required
launcher transport correction without weakening or changing the accepted
Cloud Files adapter, BitConverter fix, tuple domain, create-new boundary,
candidate, output contract, no-pixel rule, or protected-state controls.

No rollback ran because no manifest or accepted-media state was created or
changed. The frozen candidate remains inert and the released Host 05 boundary
remains safe. No `PRODUCTION FUNCTIONAL` push is authorized.

## Protected state, process, and maturity

Repository QA quarantine, protected PDF, training directory, real browser /
profile / save, hidden lore, user work, managed generation root, OS-temp
candidate roots, accepted-media pixels, and opaque residuals were not opened
or changed.

All thirteen inherited records remain separate and **OPEN**: VR-17, VR-23,
VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage 4,
VR-60 Call 9, and VR-61. The separate Commandant filename / search-scope
record remains **OPEN**.

VR-65 remains exactly **`DEFERRED LIMITATION / RELEASE-PROCESS ONLY /
NON-GATING / OPAQUE EXTERNAL QA RESIDUAL`**, unknown and inaccessible.

Maturity impact: none. `FR-03` remains continuity `FR2`; physical-host
expression `FR0 - 1 accepted shared compression / 1 exact / 10 missing`;
learning `FR2`; behavior/save/recovery `FR1`; content `FR2`; presentation
`FR3`; and prior bounded release proof `FR4`.

## Exact return handoff

One fresh Mission Captain / `mission_captain` must read this complete report,
`FRSH-005-v1-VR-01`, `FRSH-005-v1-VR-02`, `FRVE-005-v2-VR-01`,
`FRRC-003-v2`, and `FRRC-003-v3`; classify the consumed v3 launch-literal
stop; and, only if the frozen shell remains viable, issue one versioned
Mission variance and superseding release-command manifest that preserve the
complete adapter while making the command-array argument transport literal
under the actual executor.

No second `FRRC-003-v3` create invocation, manifest repair, accepted-media
mutation/read, Quartermaster attempt, generator call, candidate code change,
source inspection/import, Image work, E2E, Intelligence release, reveal,
`PRODUCTION FUNCTIONAL` push, maturity update, OPEN-record closure, schedule,
automation, or `FIRST RUN COMPLETE` may begin.
