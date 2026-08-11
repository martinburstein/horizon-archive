# First Run Shell Variance - Windows PowerShell Hex Compatibility

Variance ID: `FRSH-005-v1-VR-02`

Disposition: **`FIRST RUN SHELL READY / REQUIRED CORRECTION INCORPORATED /
WINDOWS POWERSHELL HEX CONVERSION FROZEN / FRSH-005-v1-VR-02`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / viability / Science variance: `FRWO-005-v2` / `FRVE-005-v2` /
`FRVE-005-v2-VR-01`

Base shell / prior Mission variance: `FRSH-005-v1` /
`FRSH-005-v1-VR-01`

Stopped / superseding release-command manifests: `FRRC-003-v2` /
`FRRC-003-v3`

Mission source inspected:
`5ea1da46790950e0d3c5372ea2cf54f678acd822`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-10**

## Mission adjudication

Combat's `FRCE-005-v1-VR-01` return is a bounded **`REQUIRED CORRECTION /
EXECUTION CONTROL / DECLARED COMMAND-RUNTIME HEX COMPATIBILITY`**. It is not
an accepted-media, candidate, Cloud Files, topology, identity, residency,
single-handle, no-recall, metadata, raw-byte, tuple-domain, create-new, or
release defect.

The sole `FRRC-003-v2.entries.accepted-media-create` invocation reached all
seventeen frozen raw streams and exact aggregate `17 / 37,410,731`, then
stopped before tuple-digest completion because the declared literal
`powershell` host does not expose `[System.Convert]::ToHexString`. No tuple
digest or manifest was produced; `FRAM-001-v1` remains absent; generation
ordinals consumed remain `0`. The invocation is consumed and may not be
retried, repaired, or reinterpreted as a PASS.

Mission makes no manifest, digest, raw-media, candidate, test, build, preview,
E2E, generation, import, presentation, release, or maturity operation in this
stage.

## Exact compatibility correction

`FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-003-v3.json` is one immutable narrow
overlay. It pins `FRRC-003-v2` by exact SHA-256
`1ce0dedb5f8d4fc7d9d2b9186194f9af112069d4ff0d4b7aee517b2f1b1b85f1`
and supersedes only its PowerShell tuple-digest lowercase-hex conversion.

After `SHA256.ComputeHash($tuple)` returns the exact digest byte array, every
PowerShell `[Convert]::ToHexString` conversion in the effective v3 primitive
is replaced by the already-proven Windows PowerShell-compatible expression:

```powershell
$digestBytes = $sha.ComputeHash($tuple)
$entriesSha = [BitConverter]::ToString($digestBytes).Replace('-', '').ToLowerInvariant()
```

Both operations are simple non-emitting assignments. They suppress
intermediate success-stream output; the primitive retains only its one final
compressed JSON scalar as declared output. `FRRC-003-v3` contains no
`[Convert]::ToHexString` call.

The exact seventeen literals, ordinal order, exact thirty-one cumulative
components, exact total `37,410,731`, tuple byte domain, SHA-256 algorithm,
lowercase-hex encoding, `FRAM-001-v1` schema/path, create-new behavior,
candidate and tree, final stdout object, timeout, command host, and create /
recompute ownership remain unchanged.

## Frozen adapter, candidate, and gates

Every `FRSH-005-v1-VR-01` Cloud Files requirement remains exact: literal-only
path construction; metadata-only root/component handling; ordinary-or-Cloud
tag eligibility; name-surrogate rejection; normal/reparse volume and 128-bit
file-ID equality; normalized final-path equality and strict containment;
regular one-link leaf state; delete-pending and fetch-state rejection;
`PLACEHOLDER | IN_SYNC` requirement for Cloud leaves; one `GENERIC_READ` /
`FILE_SHARE_READ`-only / `OPEN_NO_RECALL` handle per leaf; offset-zero-to-EOF
raw streaming; same-handle byte count and SHA; before/after metadata equality;
monotonic-only `LastAccessTime`; and no hydration, pin, copy, move, relabel,
repair, decode, render, thumbnail, preview, metadata interpretation, or pixel
inspection.

The inert product/test candidate remains `02d957e9...` with tree
`09da6293...`. Every already-passing `FRCE-005-v1` gate remains accepted and
frozen: focused `50/0`, legacy static-contract `29/0`, learning/privacy
`17/0`, related `58/0`, validators `40/40`, cold full `979/0/0`, production
and TD-012 fixture builds PASS, production PBA JavaScript `1,676,508`, CSS
`119,394`, modules `217`, accepted media `17 / 37,410,731`, source maps `0`,
served preflight PASS, owned process/port cleanup PASS, and
`git diff --check` PASS. None may be replayed from this variance.

Complete E2E remains correctly unrun. No source, import, generator call,
attempt, reveal, release, or maturity evidence exists.

## Exactly one fresh Combat manifest-create verification

Exact next owner is one fresh Combat Engineer / `combat_engineer`. Combat may:

1. read this complete variance, `FRSH-005-v1-VR-01`,
   `FRVE-005-v2-VR-01`, `FRCE-005-v1-VR-01`, `FRRC-003-v2`, and
   `FRRC-003-v3`;
2. verify exact Mission synchronization, the immutable v2 SHA pin, v3's sole
   effective compatibility substitution, frozen candidate/tree, exact
   seventeen literals, exact thirty-one components, and `FRAM-001-v1`
   absence;
3. invoke `FRRC-003-v3.entries.accepted-media-create` exactly once against
   frozen candidate `02d957e9...`;
4. if and only if it passes, verify the create-new `FRAM-001-v1` semantic
   object, exact `17 / 37,410,731`, lowercase-hex per-entry and canonical tuple
   digests, candidate identity, and recorded `LastAccessTime` scalars;
5. issue one versioned Combat functional close, commit only the immutable
   manifest evidence, Combat report, and synchronized handoff, then push
   `main` and prove exact `HEAD == origin/main`; and
6. report **`PRODUCTION FUNCTIONAL`** only after that exact PASS and
   synchronization.

This is one new invocation under `FRRC-003-v3`, not a retry of v2. Any failure
is immediate `HOLD / NO RETRY`; it authorizes no manifest repair or alternate
conversion/host. Combat may not run prior tests/builds/previews, E2E,
generation, selected-source inspection, pixel work, Quartermaster, import,
Image work, release, reveal, maturity change, or process-record closure.

Quartermaster remains blocked until the exact Combat PASS, immutable evidence
commit, `PRODUCTION FUNCTIONAL` disposition, push, and synchronization.

## Protected state, process, and maturity

All thirteen inherited process records remain separate and **OPEN**: VR-17,
VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage 4,
VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope record
remains **OPEN**. This bounded runtime localization creates no new OPEN item
and closes, cures, merges, waives, or renumbers none.

VR-65 remains exactly **`DEFERRED LIMITATION / RELEASE-PROCESS ONLY /
NON-GATING / OPAQUE EXTERNAL QA RESIDUAL`**, unknown and inaccessible.
Repository QA quarantine, protected PDF, training directory, real browser /
profile/save, hidden lore, user work, managed/temp roots, accepted-media
pixels, and opaque residuals remain protected.

Maturity impact: none. `FR-03` remains continuity `FR2`; physical-host
expression `FR0 - 1 accepted shared compression / 1 exact / 10 missing`;
learning `FR2`; behavior/save/recovery `FR1`; content `FR2`; presentation
`FR3`; and prior bounded release proof `FR4`.

## Mission signature

Mission Captain signs **`FIRST RUN SHELL READY / WINDOWS POWERSHELL HEX
CONVERSION FROZEN / FRSH-005-v1-VR-02`** from exact source `5ea1da4...`.

No manifest create/recompute, digest, accepted-media stream, pixel, generator,
import, preview, E2E, reveal, protected content, residual, browser, save,
schedule, automation, release, or maturity operation was run by Mission.
