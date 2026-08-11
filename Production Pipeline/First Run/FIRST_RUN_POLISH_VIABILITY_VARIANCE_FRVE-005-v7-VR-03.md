# Horizon Archive First Run Polish Viability Variance

Variance ID: `FRVE-005-v7-VR-03`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-005-v7 / Stranded Lens Cradle - Direct Image API Source,
Native Handle Identity, and Fixed Lesson Integration`

Disposition: **`POLISH VIABILITY READY / EXACT PS5.1 NATIVE HANDLE IDENTITY
AND TEMP-ONLY CLEANUP PROVED / MISSION MAY CONTRACT BUT MAY NOT EXECUTE`**

Date: **2026-08-11**

Science source inspected:
`1eb10aff9cc6e69a7593b493f0bc68ebc8e176a6`

Planning controls: `FRRM-005-v7` / `FRSB-005-v7`

Prior Science envelope / variances: `FRVE-005-v7` /
`FRVE-005-v7-VR-01` / `FRVE-005-v7-VR-02`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Science decision

Science read the active intake, workflow, registry, complete Science profile,
current handoff, complete `FRWO-005-v7`, complete `FRVE-005-v7`, complete
`FRVE-005-v7-VR-01`, complete `FRVE-005-v7-VR-02`, complete inherited
`FRWO-005-v6` and `FRVE-005-v6`, synchronized `FRRM-005-v7` /
`FRSB-005-v7`, and reopened `FRPB-001-v2` / `FRCL-004-v2`. Starting `HEAD`
was exactly `1eb10aff9cc6e69a7593b493f0bc68ebc8e176a6` with no tracked
modification.

The fixture ran directly in Windows PowerShell `5.1.26100.8875`, Desktop
edition, in a 64-bit process. No nested PowerShell or other child fixture
process was launched. It used only the fixed helper root and one fresh GUID
non-media fixture root under the resolved OS temporary directory:

```text
C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-725b75e4-8083-4df5-9a80-a0301b8f00dd
C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-fixture-c8917243-7ac4-4f77-95e5-83cb93e01502
```

The exact fenced C# source was extracted in memory from `FRWO-005-v7`, LF
normalized, and independently proved to be exact UTF-8 without BOM length
`1,693` with lowercase SHA-256
`98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97`.
No source file was written. `Add-Type -TypeDefinition`, CSharp, exact sole
`-OutputAssembly`, and `-ErrorAction Stop` emitted no warning, diagnostic,
type output, or extra child.

Science freezes the exact compiled DLL identity for this adjudication:

```text
byteLength=4096
sha256=39e85b32b7f8437c2b5732e26093ca5bd9a9182b048c411e9dc5660ba03f10c9
```

Every later byte observation matched both scalars. The assembly loaded only
from verified bytes through `Assembly.Load(byte[])`. Reflection proved the
sole public static `Read(SafeFileHandle) -> UInt64[]` surface, exactly one
private `GetFileInformationByHandle` import from `kernel32.dll` with
`SetLastError=true`, and no third declared method. The frozen source identity
proves no close, path, string, create, write, move, copy, link, delete,
enumeration, process, network, registry, environment, reflection, or other
native surface.

The private native structure was exact size `52` on x64. Its offsets were
proved as `0, 4, 12, 20, 28, 32, 36, 40, 44, 48` in frozen field order. The
exact DLL itself returned the five-value schema with link count `1`, no
reparse bit, and exact size `4,096` from an exclusive read-only
`FileStream.SafeFileHandle`.

The missing v7 proof is therefore complete. Science issues **`POLISH
VIABILITY READY`**. `FRVE-005-v7`, `VR-01`, and `VR-02` remain honest prior
evidence-availability HOLDs; this variance supplies the previously absent
execution evidence and does not rewrite them.

Variance classification: **`REQUIRED CORRECTION RESOLVED / DIRECT PS5.1
FIXTURE STAGED INTO SHORT FAIL-CLOSED HOST CALLS`**.

## Native fixture evidence

The exclusive core fixture proved all of the following without emitting or
retaining native tuple values:

- `FileMode.CreateNew`, `FileAccess.Write`, `FileShare.None`, one bounded
  write, `Flush(true)`, and close;
- five unsigned native values with exact schema, link count `1`, no reparse
  bit, and exact expected size while the write handle remained open;
- the same volume/file-index identity across exclusive stage reopen, the
  immediately pre-move stage snapshot, and the exclusive post-move target;
- same-directory two-argument `File.Move` with stage absence and unchanged
  target identity after the move; and
- a second exclusive target snapshot matching the frozen active tuple before
  exact-file deletion.

Negative, race, alias, and cleanup fixtures proved:

- null, invalid, and disposed/closed handles fail closed with the frozen
  stable argument failure;
- a fixture hard link raises the native link count to exact `2`; deleting only
  the exact fixture alias returns the original to exact link count `1` before
  identity-conditioned deletion;
- an occupied `CreateNew` path refuses overwrite;
- a destination entry racing before the two-argument move makes the move
  fail, preserves both source and destination, and permits deletion only after
  each exact entry independently matches its own frozen identity;
- a deliberate partial-write abort, write-after-close, and flush-after-close
  all stop, after which only the exclusive one-link ordinary partial file is
  deleted;
- moving the frozen stage aside and creating a replacement at the same path
  yields a different file index, makes active-tuple cleanup refuse deletion,
  and leaves both entries present until the harness independently proves and
  deletes each by its own identity;
- a file symbolic-link request was unavailable without Administrator
  privilege and created no link; its already-created ordinary target was
  immediately cleaned through two matching exclusive snapshots;
- a no-elevation fixture junction then proved the reparse-bit pre-open stop,
  exact junction deletion without target traversal, and separate ordinary
  empty-target deletion;
- an unexpected child prevents nonrecursive root deletion and remains present
  until its exclusive identity is proved and the exact child is removed; and
- the disposable fixture root is deleted only when ordinary and exactly
  empty, nonrecursively, and is then proved absent.

The native-false exception route is present in the exact frozen source and
surface. Science did not manufacture an arbitrary nonzero raw handle to force
that route because `FRWO-005-v7` explicitly forbids passing a borrowed
integer/`IntPtr`; the required runtime negative cases are the null, invalid,
and closed `SafeFileHandle` cases above.

The first attempted literal source here-string failed its source-identity
precondition before root creation. Two oversized combined B submissions were
rejected by command transport before PowerShell execution; one compact layout
form failed parsing before execution; and one legal Marshal overload was
selected explicitly after PowerShell chose the object overload. None supplied
positive evidence. The final evidence above comes only from independently
passing compact direct-host calls. No failed call touched the live API root or
product state.

## Helper and fixture cleanup proof

Before helper cleanup, Science re-read the exact DLL, reconfirmed length/SHA,
loaded only those bytes, and obtained a final exclusive handle snapshot with
five values, one link, no reparse bit, and size `4,096`. The exact helper root
contained only that exact DLL. Science deleted only the identity-proved DLL,
proved it absent, deleted only the exact empty helper root nonrecursively, and
proved it absent.

Final exact-path checks proved all three roots absent:

```text
helperRootAbsent=true
fixtureRootAbsent=true
liveApiRootAbsent=true
```

No parent, sibling, glob, pattern, recursion, package/compiler cache,
repository helper, live attempt child, product path, managed directory,
ordinal-1 residual, or VR-65 was enumerated or targeted for cleanup.

## Preserved v6 and product envelope

`FRVE-005-v6` remains accepted prior evidence for the exact endpoint/model/
seven-member request, one-item `data[0].b64_json` response, boolean-only
environment credential boundary, TLS reachability, one-send/no-redirect
HttpClient posture, strict bounded UTF-8/JSON/base64 parser, `CreateNew`,
`Flush(true)`, same-volume two-argument no-replace move, and exact-path
cleanup. This stage freshly corroborated the file/create/flush/move/race/
cleanup subset without touching the live root. It did not reread a credential,
open a network connection, construct or serialize a request, or send an API
call. Direct Image API sends remain exact `0`.

All inherited strict PNG/chunk/CRC/sRGB/opacity/dimension/inflate/browser-
decode, `PHY-01..12`, six-layout crop/mapping/accessibility, input/focus,
privacy, evidence firewall, save/resume/recovery, offline/no-authority,
performance/PBA, import/provenance, one-complete-E2E, no-reveal, and rollback
requirements remain exact. Mission receives them as fixed requirements, not
new evidence and not permission to execute them.

The sole unchanged learning owner remains `L02-03`; exact `16/16 + 16/16 +
2/2`, no-cross-credit, answer-free actual-miss remediation, fresh transfer,
private/transient clearing, deterministic save restore, and Demo Tour
isolation remain fixed. All supported modalities must converge on the same
semantic action with stable focus, names, announcements, native `44 x 44 CSS
px` target, effective `200%`, forced-color, reduced-motion, and equivalent
meaning. Presentation may not imply answer, authority, correctness, reward,
recognition, or world response.

The exact Host 05 -> dry same-basin Host 06 -> sole unchanged `L02-03` ->
unchanged next Drowned boundary, one-path rail, both MH-40 outcomes, RP-012,
all null deltas, and `successor=null` remain immutable. Asset authority remains
at most the first later fully passing source under a new shell; accepted media
remain immutable. Rejected attempts retain zero authority.

## Ordinals, maturity, records, and hard stops

- Ordinal `1` remains permanently consumed, opaque, inaccessible, and never
  retried or cleaned.
- Ordinals `2` and `3` remain unconsumed and unavailable until a new Mission
  shell is complete; this Science stage consumed none.
- Conservative managed-residual count remains exact `1`, associated only with
  ordinal `1`; VR-65 remains separate and inaccessible.
- `FRAM-001-v1` remains immutable at exact `17 / 37,410,731`, file SHA-256
  `a674c337b377de113eaa4c6763bd431afc73ab613374a76501aa8c5ce37e5437`,
  canonical digest
  `c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`.
- `FR-03` remains exactly `1 accepted shared compression / 1 exact / 10
  missing`; this planning proof advances no maturity or inventory cell.
- All thirteen inherited process records and the separate Commandant search-
  scope record remain separate and OPEN.

Science did not authorize Mission execution; invoke generation/API; allocate
the live root; consume an ordinal; inspect/hash/decode media or pixels; import
an asset; write copy or provenance; change runtime/tests; run E2E; reveal;
advance maturity; close an OPEN record; access a residual or VR-65; schedule;
automate; push; release; or call `FIRST RUN COMPLETE`.

## Exact fresh Mission handoff

One fresh Mission Captain / `mission_captain` reads complete
`FRWO-005-v7`, complete `FRVE-005-v7`, `FRVE-005-v7-VR-01`,
`FRVE-005-v7-VR-02`, and this `FRVE-005-v7-VR-03`, plus synchronized
`FRRM-005-v7` / `FRSB-005-v7`, the effective prior shell through
`FRSH-005-v1-VR-07`, and exact current controls required by the Mission
profile.

Mission issues exactly one new versioned `FIRST RUN SHELL READY`, `REVISE`,
or `HOLD` contract. It must carry forward the frozen DLL byte length/SHA,
exact helper/source/load/surface/layout/handle/cleanup contract, preserved v6
direct API and ordinal gates, the complete technical/physical/accessibility/
privacy/save/offline/performance/no-reveal envelope, and all canon and maturity
hard stops. Mission may resolve cross-discipline contract wording; it may not
execute the helper, allocate a root, call the API, consume ordinal `2`, inspect
media, begin production, or weaken a frozen predicate.

Office of Science Administrator signs **`POLISH VIABILITY READY /
FRVE-005-v7-VR-03`** from exact source
`1eb10aff9cc6e69a7593b493f0bc68ebc8e176a6`.
