# First Run Shell Variance - Pre-Helper Identity and Diagnostic Retention

Variance ID: `FRSH-005-v1-VR-09`

Disposition: **`FIRST RUN SHELL READY / EXACT PRE-HELPER IDENTITY,
PS5.1 ROOT PRIMITIVE, AND FIRST-FAILURE RETENTION FROZEN / FRESH SCIENCE
REQUIRED / FRSH-005-v1-VR-09`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / decisive Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-04`

Quartermaster return: `FRCA-005-v3`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-08`

Effective treatment / blueprint: `FRDT-005-v1-VR-01` /
`FRPX-005-v1-VR-01`

Functional report: `FRCE-005-v1-VR-05`

Mission source inspected:
`0f0f85539894a422a530b01009eb7dca48187adf`

Corrected inert code candidate:
`f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree:
`92b22fc56d79d18cf1abf7213c5268c9e4149830`

Immutable accepted-media manifest: `FRAM-001-v1`, file SHA-256
`a674c337b377de113eaa4c6763bd431afc73ab613374a76501aa8c5ce37e5437`,
exact `17 / 37,410,731`, canonical digest
`c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

Exact next recipient: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Mission decision

`FRVE-005-v7-VR-04` proves that the inherited-environment -> parser ->
`ScriptBlock.Create` -> invocation transport is viable in exact 64-bit Windows
PowerShell `5.1.26100.8875`. It also proves that `New-Item -LiteralPath` is not
a lawful PS5.1 root-creation form. The failed Quartermaster statement and its
earliest predicate were not retained, so Mission does not attribute the prior
failure or authorize a retry from resemblance.

Mission issues this narrow **`FIRST RUN SHELL READY`** correction. It freezes
the previously underspecified pre-helper boundary and requires one fresh
Science no-request fixture over the exact form before Quartermaster may be
considered again. It supersedes only pre-helper script/transport/diagnostic
wording in `FRSH-005-v1-VR-08`; every helper, API, parser-after-response,
ordinal, media, physical, crop/mapping, accessibility, canon, lesson, privacy,
save, offline, performance, PBA, no-reveal, rollback, protected-state, and OPEN
record clause remains exact.

## Exact transport and byte identity

Transport contract ID: `HOST06-PREHELPER-PS51-v1`.

The parent supplies exactly one task-specific inherited process-environment
value named:

```text
HORIZON_ARCHIVE_HOST06_PREHELPER_V1
```

Its value is exactly the pre-helper script below. The value contains no key,
credential, header, endpoint, prompt, request, response, JSON, base64, media,
payload, native tuple, or diagnostic body. It is UTF-8 without BOM, LF-only,
including the final LF. Exact identity:

```text
byteLength=976
sha256=5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
```

The exact short launcher is UTF-8 without BOM, LF-only, including the final
LF. It is passed as the sole `-Command` value to exact
`C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe` with arguments
`-NoLogo -NoProfile -NonInteractive -ExecutionPolicy Bypass -Command` in that
order. No encoded command, stdin, file, profile, nested shell, alternate
environment name, interpolation, or second transport is permitted. Exact
launcher identity:

```text
byteLength=2001
sha256=96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
```

```powershell launcher
$ErrorActionPreference='Stop'
$state=@{Predicate='PH01_ENV_RETRIEVAL';RootCreated=$false;RootOrdinary=$false}
$helperRoot='C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-725b75e4-8083-4df5-9a80-a0301b8f00dd'
$helperDll=$helperRoot+'\Host06FileIdentity.dll'
$liveRoot='C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-6eae8313-1407-492d-af7c-675051ab8e08'
try {
  $source=[Environment]::GetEnvironmentVariable('HORIZON_ARCHIVE_HOST06_PREHELPER_V1','Process')
  if ([string]::IsNullOrEmpty($source)) { throw 'PH01_ENV_RETRIEVAL' }
  $state.Predicate='PH02_PARSE_SUCCESS'
  $tokens=$null
  $errors=$null
  [void][System.Management.Automation.Language.Parser]::ParseInput($source,[ref]$tokens,[ref]$errors)
  if ($errors.Count -ne 0) { throw 'PH02_PARSE_SUCCESS' }
  $block=[scriptblock]::Create($source)
  $state.Predicate='PH03_INVOCATION_ENTRY'
  & $block
  if ($state.Predicate -ne 'PH08_ROOT_CREATE_COMPLETE' -or -not $state.RootOrdinary) { throw 'PH08_ROOT_CREATE_COMPLETE' }
} catch {
  $failurePredicate=$state.Predicate
  $failureClass=$_.Exception.GetType().FullName
  $failureFqid=$_.FullyQualifiedErrorId
  if ($state.RootCreated -and $state.RootOrdinary -and [IO.Directory]::Exists($helperRoot) -and -not [IO.File]::Exists($helperDll)) {
    try { [IO.Directory]::Delete($helperRoot,$false) } catch {}
  }
  $helperRootAbsent=(-not [IO.Directory]::Exists($helperRoot) -and -not [IO.File]::Exists($helperRoot))
  $helperDllAbsent=(-not [IO.File]::Exists($helperDll) -and -not [IO.Directory]::Exists($helperDll))
  $liveRootAbsent=(-not [IO.Directory]::Exists($liveRoot) -and -not [IO.File]::Exists($liveRoot))
  [Console]::Error.WriteLine('HOST06_PREHELPER_FAILURE|predicate='+$failurePredicate+'|class='+$failureClass+'|fqid='+$failureFqid+'|helperRootAbsent='+$helperRootAbsent.ToString().ToLowerInvariant()+'|helperDllAbsent='+$helperDllAbsent.ToString().ToLowerInvariant()+'|liveRootAbsent='+$liveRootAbsent.ToString().ToLowerInvariant())
  exit 86
}
```

```powershell prehelper
$state.Predicate='PH04_PS51_VERSION'
if ($PSVersionTable.PSEdition -ne 'Desktop' -or $PSVersionTable.PSVersion.ToString() -ne '5.1.26100.8875') { throw 'PH04_PS51_VERSION' }
$state.Predicate='PH05_X64_PROCESS'
if ([IntPtr]::Size -ne 8) { throw 'PH05_X64_PROCESS' }
$state.Predicate='PH06_ROOT_ABSENT'
if ([IO.Directory]::Exists($helperRoot) -or [IO.File]::Exists($helperRoot) -or [IO.File]::Exists($helperDll) -or [IO.Directory]::Exists($helperDll)) { throw 'PH06_ROOT_ABSENT' }
$state.Predicate='PH07_ROOT_CREATE_ENTRY'
$created=[IO.Directory]::CreateDirectory($helperRoot)
$state.RootCreated=$true
$state.Predicate='PH08_ROOT_CREATE_COMPLETE'
if ($created.FullName -cne $helperRoot -or -not [IO.Directory]::Exists($helperRoot) -or [IO.File]::Exists($helperRoot) -or [IO.File]::Exists($helperDll) -or [IO.Directory]::Exists($helperDll) -or (($created.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0)) { throw 'PH08_ROOT_CREATE_COMPLETE' }
$state.RootOrdinary=$true
```

The launcher and pre-helper are one nonsecret prefix of the already-frozen
one-process helper/direct-API production sequence. On exact pre-helper success,
the same PowerShell process may later continue only with the unchanged helper
compile/load/identity/cleanup and direct-API protocol of
`FRSH-005-v1-VR-08`; this variance does not freeze, add, or weaken any later
statement. On any pre-helper failure, the launcher exits `86` and no later
statement may run.

## Stable predicates and PS5.1 primitive

The predicates are exact and ordered:

| Order | Predicate ID | Passing condition |
| ---: | --- | --- |
| 1 | `PH01_ENV_RETRIEVAL` | exact named process value exists and is nonempty |
| 2 | `PH02_PARSE_SUCCESS` | `Language.Parser.ParseInput` returns zero errors and `ScriptBlock.Create` succeeds |
| 3 | `PH03_INVOCATION_ENTRY` | call-operator invocation enters the exact script |
| 4 | `PH04_PS51_VERSION` | Desktop edition and exact `5.1.26100.8875` |
| 5 | `PH05_X64_PROCESS` | `[IntPtr]::Size -eq 8` |
| 6 | `PH06_ROOT_ABSENT` | exact helper root and DLL are absent as file and directory |
| 7 | `PH07_ROOT_CREATE_ENTRY` | root creation is entered only after predicates 1-6 pass |
| 8 | `PH08_ROOT_CREATE_COMPLETE` | exact ordinary, non-reparse helper root exists and DLL remains absent |

The sole root-creation primitive is exact
`[System.IO.Directory]::CreateDirectory($helperRoot)`. `New-Item` is forbidden,
including `New-Item -LiteralPath`; so are `mkdir`, `md`, `cmd`, another shell,
recursive creation/deletion wrappers, and alternate roots. Root deletion is
only exact `[System.IO.Directory]::Delete($helperRoot,$false)` after this
process created the root, proved it ordinary/non-reparse, and proved the exact
DLL absent. There is no parent or sibling enumeration.

## Bounded first-failure retention and cleanup

The child may emit either no diagnostic line on pre-helper success or exactly
one ASCII stderr line beginning `HOST06_PREHELPER_FAILURE|`. The parent retains
that line only after validating this exact field order and allowlists:

- `predicate`: one of `PH01_ENV_RETRIEVAL`, `PH02_PARSE_SUCCESS`,
  `PH03_INVOCATION_ENTRY`, `PH04_PS51_VERSION`, `PH05_X64_PROCESS`,
  `PH06_ROOT_ABSENT`, `PH07_ROOT_CREATE_ENTRY`, or
  `PH08_ROOT_CREATE_COMPLETE`;
- `class`: one of `System.Management.Automation.RuntimeException`,
  `System.Management.Automation.ParseException`, `System.IO.IOException`,
  `System.UnauthorizedAccessException`, `System.Security.SecurityException`,
  `System.PlatformNotSupportedException`, `System.ArgumentException`, or the
  literal `UNLISTED`;
- `fqid`: one of the eight predicate IDs, `NamedParameterNotFound`,
  `MethodInvocationException`, `RuntimeException`, `ParseException`, or the
  literal `UNLISTED`; and
- `helperRootAbsent`, `helperDllAbsent`, `liveRootAbsent`: exact lowercase
  booleans.

Before retention, any non-allowlisted class or fully-qualified error ID is
replaced with literal `UNLISTED`; it is never copied through. Any missing,
extra, reordered, multiline, non-ASCII, or over-`640`-byte record becomes
`STABLE_LOCAL_FAILURE / diagnosticRecordRejected=true` plus the three exact
absence booleans. Transport is stderr captured in memory by the parent; it is
never a file, environment writeback, repository artifact, event log, registry
value, clipboard value, command echo, transcript, or standard output.

No message, stack, source excerpt, command, path, native tuple, timestamp,
username, process detail, key, header, request/response, JSON, base64, media,
payload, or opaque value may be retained. The earliest predicate alone
survives. A failure is terminal, consumes no ordinal, and authorizes no retry.

On failure after root creation, cleanup attempts only the exact empty ordinary
helper root nonrecursively and only while the exact DLL is absent. If those
preconditions fail, delete nothing. In every outcome record exact helper-root,
helper-DLL, and live-root absence; fresh Science must additionally check both
ordinal stage-target pairs and both product targets. Cleanup uncertainty is
`HOLD`. The live root is never created or deleted by this pre-helper block.

## Mandatory fresh Science fixture

One fresh Office of Science Administrator must independently recompute the two
byte identities from this artifact and run a credential-cleared, no-request
fixture over the exact launcher, environment name/value, parser, invocation,
predicate order, PS5.1 version/bitness gates, and
`Directory.CreateDirectory` primitive. Science may use only the exact helper
root, must keep the DLL absent, delete only the exact empty ordinary root
nonrecursively, and restore it to absence.

Science must prove at minimum: the full success path through
`PH08_ROOT_CREATE_COMPLETE`; each locally inducible first-failure record is
allowlist-bounded and single-line; unlisted class/FQID replacement and malformed
record rejection; no source file; exact cleanup; helper root/DLL, live root,
both ordinal pairs, raster, and provenance all absent; zero credential read;
zero request construction; zero `SendAsync`; and exact direct API sends `0`.
Science issues one new versioned `POLISH VIABILITY READY`, `REVISE`, or `HOLD`
artifact. Only a passing fresh Science result may return to a new Mission
decision; Science may not route directly to Quartermaster.

## Preserved shell, ordinals, and protected state

Historical ordinal `1` remains consumed, opaque, inaccessible, and unchanged.
Ordinals `2` and `3` remain unstarted and unconsumed. Future sends remain at
most two, sequential, under the unchanged conditional ordinal-3 rule. Direct
API sends remain exact `0`. The helper/API design, frozen C# source/DLL
identities, endpoint/model/seven options, prompt, response parser, staging,
handle identity, no-replace move, cleanup, source review, import/provenance,
immutable `FRAM-001-v1`, PBA/performance gates, no-reveal boundary, canon,
lesson/save/privacy/accessibility behavior, and product paths remain unchanged.

All thirteen inherited process records and the separate Commandant filename/
search-scope record remain separate and **OPEN**. VR-65 remains separate,
opaque, non-gating, and inaccessible. Repository QA quarantine, the protected
PDF, training tree, Martin's real browser/profile/save, hidden lore,
accepted-media pixels, OS-temp parent, ordinal-1 residual, managed directory,
user work, and every opaque residual remain protected.

Maturity impact: none. `FR-03` remains continuity `FR2`; physical-host
expression remains `FR0 - 1 accepted shared compression / 1 exact / 10
missing`; learning `FR2`; behavior/save/recovery `FR1`; content `FR2`;
presentation `FR3`; and prior bounded release proof `FR4`.

Mission changed no product, test, runtime, lesson, save, media, manifest,
candidate, map, scoreboard, maturity, process classification, residual,
schedule, or automation state. Mission did not execute the launcher or script,
allocate a root, compile/invoke the helper, read a credential, construct/send a
request, consume an ordinal, inspect media/pixels, run a build/browser/E2E,
reveal, advance maturity, close an OPEN record, access a residual or VR-65,
schedule, automate, release, or call `FIRST RUN COMPLETE`.

Mission Captain signs **`FIRST RUN SHELL READY / EXACT PRE-HELPER IDENTITY,
PS5.1 ROOT PRIMITIVE, AND FIRST-FAILURE RETENTION FROZEN / FRESH SCIENCE
REQUIRED / FRSH-005-v1-VR-09`** from exact source `0f0f855...`.
