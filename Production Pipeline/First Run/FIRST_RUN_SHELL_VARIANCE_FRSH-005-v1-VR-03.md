# First Run Shell Variance - Literal Command Transport

Variance ID: `FRSH-005-v1-VR-03`

Disposition: **`FIRST RUN SHELL READY / REQUIRED CORRECTION INCORPORATED /
LITERAL FILE TRANSPORT FROZEN / FRSH-005-v1-VR-03`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / viability / Science variance: `FRWO-005-v2` / `FRVE-005-v2` /
`FRVE-005-v2-VR-01`

Base shell / effective prior Mission variances: `FRSH-005-v1` /
`FRSH-005-v1-VR-01` / `FRSH-005-v1-VR-02`

Consumed / superseding release-command manifests: `FRRC-003-v3` /
`FRRC-003-v4`

Mission source inspected:
`89b844b5a69239e627f5617136797aca9d3966b7`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-10**

## Mission adjudication

Combat's `FRCE-005-v1-VR-02` return is a bounded **`REQUIRED CORRECTION /
EXECUTION CONTROL / COMMAND ARGUMENT LITERAL PRESERVATION`**. The actual
executor's outer Windows PowerShell layer interpolated v3's inline `$r` and
`$p` tokens before the declared child process received them. The child saw
malformed expressions beginning with `=Get-Content`, stopped before the JSON
manifest or primitive loaded, and opened no accepted-media metadata or data
handle.

This is not an accepted-media, Cloud Files adapter, BitConverter, tuple,
candidate, topology, identity, residency, single-handle, raw-byte,
create-new, or release defect. The frozen shell remains viable. The sole v3
create launch is consumed and may not be retried, edited, escaped ad hoc, or
reinterpreted as a PASS.

Mission makes no manifest create/recompute, accepted-media stream, digest,
test, build, preview, E2E, generation, import, presentation, release, or
maturity operation in this stage.

## Exact transport correction

`FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-003-v4.json` is one immutable narrow
overlay. It pins `FRRC-003-v3` by exact SHA-256
`460acd2f7e02c0a0d25dc6a30a5aa85ef305cfced409b0b85618e58b10d200f7`
and supersedes only command-array argument transport.

The create and recompute entries no longer contain `-Command`, `$r`, `$p`, or
any other child-script source token at the process boundary. They invoke the
exact checked-in launcher as an argument array:

```text
powershell -NoProfile -File "Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_LAUNCHER_FRRC-003-v4.ps1" -Mode create
powershell -NoProfile -File "Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_LAUNCHER_FRRC-003-v4.ps1" -Mode verify
```

The launcher path is resolved by the declared repository-root workdir. The
PowerShell executable receives `-File`, the literal script path, `-Mode`, and
the literal mode as separate arguments. No outer shell must carry or preserve
a `$` token. Only after the child loads the checked-in file does the launcher
use its own child-scope variables to read exact v4, join the frozen primitive,
parse it as a scriptblock, and pass the validated mode.

Frozen launcher SHA-256:
`bc49dc414820b83e5c623685215a2d548b282de5da09442315f6c20e12498ab2`

Frozen v4 SHA-256:
`9db5b4dde14f944bfb435c59cf9e40a5835eeed46bac199c2916b9937eba4196`

No command-host substitution occurred: the child host remains literal
`powershell`, `-NoProfile` remains exact, and the declared `60,000` ms timeout,
expected exit, ownership, working directory, output contract, and cleanup
remain unchanged.

## Syntax, AST, and static proof

Mission ran control-file-only static verification before authorizing any new
create launch:

- v3 SHA matched the immutable v4 supersession pin;
- v4 JSON parsed successfully;
- the launcher parsed through the PowerShell AST with `0` syntax errors;
- the joined v4 primitive parsed through the PowerShell AST with `0` syntax
  errors, without invocation;
- semantic normalization of only manifest ID, shell variance, supersession,
  self-manifest path, the two transport arrays, and the create prerequisite
  made v4 exactly equal to v3;
- both command arrays exactly matched the frozen `-File` forms above and
  contained neither `$` nor `-Command`;
- the v4 primitive contained zero `[Convert]::ToHexString` calls and exactly
  one frozen tuple-digest
  `[BitConverter]::ToString($digestBytes).Replace('-', '').ToLowerInvariant()`
  assignment;
- the accepted-media literals remained exact `17` unique paths, their
  in-memory literal-derived cumulative component count remained exact `31`,
  and frozen total remained `37,410,731`;
- the frozen candidate existed with exact tree `09da6293...`; and
- `FRAM-001-v1` remained absent.

The proof parsed strings and Git/control metadata only. It did not invoke the
launcher or primitive and did not resolve, enumerate, open, hash, or otherwise
touch an accepted-media path.

## Frozen adapter, candidate, and gates

Every `FRSH-005-v1-VR-01` Cloud Files requirement remains byte-for-byte exact
inside v4: literal-only path construction; metadata-only root/component
handling; ordinary-or-Cloud tag eligibility; name-surrogate rejection;
normal/reparse volume and 128-bit file-ID equality; normalized final-path
equality and strict containment; regular one-link leaf state; delete-pending
and fetch-state rejection; `PLACEHOLDER | IN_SYNC` requirement for Cloud
leaves; one `GENERIC_READ` / `FILE_SHARE_READ`-only / `OPEN_NO_RECALL` handle
per leaf; offset-zero-to-EOF raw streaming; same-handle byte count and SHA;
before/after metadata equality; monotonic-only `LastAccessTime`; and no
hydration, pin, copy, move, relabel, repair, decode, render, thumbnail,
preview, metadata interpretation, or pixel inspection.

The `FRSH-005-v1-VR-02` BitConverter tuple-hex correction remains exact. The
tuple domain, lowercase-hex encoding, exact seventeen literals and order,
exact thirty-one cumulative components, exact total `37,410,731`,
`FRAM-001-v1` schema/path, create-new behavior, candidate/tree, final stdout
object, and create/recompute ownership remain unchanged.

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

1. read this complete variance, `FRCE-005-v1-VR-02`,
   `FRSH-005-v1-VR-01`, `FRSH-005-v1-VR-02`, `FRVE-005-v2-VR-01`,
   `FRRC-003-v3`, `FRRC-003-v4`, and the exact v4 launcher;
2. verify exact Mission synchronization, immutable v3 and launcher SHA pins,
   both AST/static results, the transport-only semantic delta, frozen
   candidate/tree, exact seventeen literals, exact thirty-one components,
   exact total, and `FRAM-001-v1` absence;
3. invoke `FRRC-003-v4.entries.accepted-media-create` exactly once against
   frozen candidate `02d957e9...` using the declared command array without
   wrapping, transcription, inline reconstruction, host substitution, or ad
   hoc quoting;
4. if and only if it passes, verify the create-new `FRAM-001-v1` semantic
   object, exact `17 / 37,410,731`, lowercase-hex per-entry and canonical tuple
   digests, candidate identity, and recorded `LastAccessTime` scalars;
5. issue one versioned Combat functional close, commit only the immutable
   manifest evidence, Combat report, and synchronized handoff, then push
   `main` and prove exact `HEAD == origin/main`; and
6. report **`PRODUCTION FUNCTIONAL`** only after that exact PASS and
   synchronization.

This is one new invocation under `FRRC-003-v4`, not a retry of v3. Any failure
is immediate `HOLD / NO RETRY`; it authorizes no launcher, manifest, primitive,
adapter, or command repair and no alternate transport. Combat may not run
prior tests/builds/previews, E2E, generation, selected-source inspection,
pixel work, Quartermaster, import, Image work, release, reveal, maturity
change, or process-record closure.

Quartermaster remains blocked until the exact Combat PASS, immutable evidence
commit, `PRODUCTION FUNCTIONAL` disposition, push, and synchronization.

## Protected state, process, and maturity

All thirteen inherited process records remain separate and **OPEN**: VR-17,
VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage 4,
VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope record
remains **OPEN**. This bounded control-file correction creates no new OPEN
item and closes, cures, merges, waives, or renumbers none.

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

Mission Captain signs **`FIRST RUN SHELL READY / LITERAL FILE TRANSPORT
FROZEN / FRSH-005-v1-VR-03`** from exact source `89b844b...`.

No manifest create/recompute, accepted-media stream, digest, pixel, generator,
import, test, build, preview, E2E, reveal, protected content, residual,
browser, save, schedule, automation, release, or maturity operation was run by
Mission.
