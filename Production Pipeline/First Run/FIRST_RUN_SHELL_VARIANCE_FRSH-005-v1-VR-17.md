# First Run Shell Variance - Fileless Parent Source and Result Transport

Variance ID: `FRSH-005-v1-VR-17`

Disposition: **`FIRST RUN SHELL READY / LARGE ASCII PARENT SOURCE MOVED FROM
POWERSHELL COMMAND-STDIN MODE TO FILELESS READTOEND BOOTSTRAP / EXACT BOUNDED
RESULT RETENTION FROZEN / FRESH SCIENCE ONE-RUN PROOF REQUIRED /
FRSH-005-v1-VR-17`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / current Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-14`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-16`

Quartermaster return: `FRCA-005-v4`

Effective treatment / blueprint: `FRDT-005-v1-VR-01` /
`FRPX-005-v1-VR-01`

Functional report: `FRCE-005-v1-VR-05`

Mission source inspected:
`4f6da45d990274de1bb419357fc786c301800099`

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

## Mission adjudication

Mission accepts `FRVE-005-v7-VR-14` only as an honest transport HOLD. The sole
disposable parent returned exit `0`, exact zero-byte stdout, and exact
zero-byte stderr. It retained neither the accepted bounded Science result nor
an allowlisted bounded parent stop. Child invocation cardinality therefore
remains unproven `0-or-1`; the empty capture is not child evidence and cannot
be reclassified, repaired, resumed, or retried from that Science context.

The two immutable runtime script carriers, their decoded identities and
slices, the frozen production child, PT06 semantic mapping, zero-activity
requirements, and controlled-path requirements remain unchanged. The defect
is the use of Windows PowerShell `-Command -` as both a multiline source-input
mode and an execution/result boundary. Its empty capture proves neither that
the complete large source executed nor that a child began.

Mission replaces only that outer parent-source transport. The new transport
uses one short fixed `-Command` bootstrap. The complete already-constructed
parent source remains one in-memory ASCII scalar and is written once as data
to redirected standard input. The bootstrap reads that stream to EOF, creates
one script block from the complete scalar, and invokes it once. No parent
source file, repository-document runtime extraction, environment-source
carrier, encoded command, command-line source, alternate script, or second
invocation exists.

Variance classification: **`REQUIRED CORRECTION RESOLVED / POWERSHELL
COMMAND-STDIN MULTILINE EXECUTION AMBIGUITY REPLACED BY FIXED FILELESS
READTOEND BOOTSTRAP AND DUAL-STREAM RESULT CAPTURE`**.

## Frozen parent source transport

The executable remains exact Windows PowerShell 5.1 x64:

```text
C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
```

The bootstrap is this exact `105`-character ASCII scalar:

```text
$s=[Console]::In.ReadToEnd(); if ([string]::IsNullOrEmpty($s)) { exit 97 }; & ([scriptblock]::Create($s))
```

Its lowercase ASCII SHA-256 is:

```text
0b4ba2e1ded92d98027f350abad13cc76fa30ea0419e472e3be0a7bac3b97cbc
```

The exact `ProcessStartInfo.Arguments` scalar is:

```text
-NoLogo -NoProfile -NonInteractive -Command "$s=[Console]::In.ReadToEnd(); if ([string]::IsNullOrEmpty($s)) { exit 97 }; & ([scriptblock]::Create($s))"
```

It is exact `151` ASCII characters with lowercase SHA-256:

```text
a0f684461636f5ee04f78020695bf5b055d9e94bbf750a3a060d1ba291cfef47
```

The parent source itself must be one nonempty, strictly ASCII, LF-only,
final-LF `System.String`. It contains the exact already-compiled `2,668`- and
`36,060`-character Base64 carrier constants from `FRSH-005-v1-VR-16`; it
obtains no script byte from a repository document, Markdown fence, line
range, regex, search, Git object, file, environment source value, or alternate
carrier. Science computes and freezes the parent source's exact character
length and ASCII SHA-256 before start, then writes that same scalar through
`StandardInput.Write(parentSource)` exactly once and closes standard input.
It does not call `WriteLine`, append a newline, reopen input, or write a second
value.

The `ProcessStartInfo` settings are exact:

```text
UseShellExecute=false
CreateNoWindow=true
RedirectStandardInput=true
RedirectStandardOutput=true
RedirectStandardError=true
```

Before writing stdin, Science starts one asynchronous `ReadToEnd` drain for
stdout and one for stderr. After the one write and input close, it waits for
the process and both drains to complete. It retains the exact exit code and
the exact captured stdout/stderr strings and byte counts. It performs no
line-event handler, console inheritance, shell redirection, pipeline capture,
merged stream, transcript, host UI, temporary source file, output file, or
second process.

The fixed bootstrap emits no record itself. Empty source exits `97`; a
nonempty source is compiled once and invoked once. The parent source remains
responsible for catching its own closed assertions and for emitting exactly
one bounded accepted Science result or one allowlisted bounded stop. Any
bootstrap parse/runtime output, host formatting, command echo, source excerpt,
extra record, empty capture, merged stream, missing final record, or nonexact
exit/result combination is rejected evidence and `HOLD`.

This transport does not weaken the Windows-limit proof for the unchanged
production child. The parent source is stdin data, not argv or an environment
value. The fixed parent arguments remain `151` characters. The production
child still receives only the exact decoded `2,001`-byte launcher as its sole
`-Command` value and the exact decoded `27,044`-byte combined source in its
sole inherited process environment value, under the frozen limits and
identities in `FRSH-005-v1-VR-16`.

## Independent Mission transport proof

Mission ran one disposable no-child, no-credential, no-API, no-media transport
probe through the exact executable, bootstrap, arguments, process settings,
one-write/close sequence, and dual asynchronous drains above. The in-memory
ASCII parent source contained two inert literal scalars of exact lengths
`2,668` and `36,060`, checked those lengths inside the invoked script, and
emitted one fixed record by `Console.Out.WriteLine`.

Observed proof was exact:

```text
parentSourceCharacters=38953
argumentsCharacters=151
processExit=0
stdoutRecord=MISSION_PARENT_TRANSPORT_V1|executed=true|carrierA=2668|carrierB=36060|records=1
stdoutRecordCharacters=80
stdoutUtf8BytesIncludingCRLF=82
stdoutExact=true
stderrBytes=0
```

The record's content-only lowercase ASCII SHA-256 is:

```text
f6ff98290afff025e9da507217a6f65ac95197bc23e57c030dc0c7e91be74ebd
```

The exact result proves the large source crossed the fileless stdin transport,
executed its internal scalar assertions, and retained one bounded result while
the command line stayed far below the Windows limit. The probe contained no
production launcher, combined source, credential operation, helper, child,
request, endpoint, response, ordinal, live/product path, media byte, image, or
pixel. It is transport evidence only and authorizes no API or production work.

## Unchanged carrier, classifier, and one-run contract

Every `FRSH-005-v1-VR-16` carrier/hash/decode/re-encode, prefix/tail slice,
strict UTF-8, parser-zero, argv/environment, Windows-limit, and stage-order
assertion remains exact. The frozen identities remain:

```text
launcher 2001 / 96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
prefix 976 / 5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
tail 26068 / e9815ce8f988bca0f1f9bd14a7ba50cfa4935b3d7a47492c95bfa90986b7070c
combined 27044 / 015dfd96befad29793892f1e15dc9ff4362ff8cec0ae4ce7b9c45b5da9e125f3
helper source 1693 / 98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97
helper DLL 4096 / 39e85b32b7f8437c2b5732e26093ca5bd9a9182b048c411e9dc5660ba03f10c9
```

Every `FRSH-005-v1-VR-16` classifier, counter, controlled-path, stage-order,
no-retry, and secrecy rule remains exact. The sole accepted semantic result is
unchanged:

```text
outcome=ACCEPTED_NO_REQUEST_STOP
earliestStage=PT06_CREDENTIAL_GATE
code=CREDENTIAL_ABSENT
childExit=87
childInvocations=1
credentialValueReads=0
requestConstructions=0
sendAsyncCalls=0
directSends=0
ordinalsConsumed=0
helperRootAbsent=true
helperDllAbsent=true
liveRootAbsent=true
ordinal2StageAbsent=true
ordinal2TargetAbsent=true
ordinal2DecisionAbsent=true
ordinal3StageAbsent=true
ordinal3TargetAbsent=true
ordinal3DecisionAbsent=true
productRootAbsent=true
productRasterAbsent=true
productProvenanceAbsent=true
scienceFixtureRootsAbsent=true
```

The child diagnostic still has no `code` field. Exact child exit `87`, zero
stdout records, one exact PT06 production diagnostic, ordinal `0`,
`sendStarted=false`, and every child-owned absence true maps only to
`ACCEPTED_NO_REQUEST_STOP / PT06_CREDENTIAL_GATE / CREDENTIAL_ABSENT`.
Product-root, product-raster, and provenance absence remain independent parent
postflight facts. Anything nonexact is `HOLD`. Once the one production child
begins, no correction, second child, or retry exists.

## Preserved boundaries, validation, rollback, and handoff

Historical ordinal `1` remains consumed, opaque, inaccessible, and unchanged.
Ordinals `2` and `3` remain unstarted and unconsumed. Mission credential value
reads, request constructions, `SendAsync` calls, direct sends, ordinals
consumed, and production-child invocations are exact `0`. The disposable
Mission proof used one harmless parent process and no child. All controlled
helper/live/ordinal/product/Science-fixture paths remain absent.

The player address remains `FR-03 / Chapter II - Drowned Archive / Host 06`.
The exact Host 05 handoff, one dry same-basin Stranded Lens Cradle, sole
unchanged `L02-03`, next Drowned boundary, one-path rail, both MH-40 outcomes,
equal dignity, all null deltas, shared RP-012 ending, and `successor=null`
remain immutable. No branch, packet, lesson, Host 07, reward, access, identity,
authority, world response, hidden-lore answer, successor, RP-013, or
post-ending content exists.

The immutable manifest and accepted-media bytes/pixels remain untouched.
Repository QA quarantine, protected PDF, training tree, Martin's real browser/
profile/save, hidden lore, OS-temp parent, ordinal-1 residual, real managed
directory, user work, VR-65, and every opaque residual remain protected. All
inherited OPEN records remain separate and OPEN.

Maturity impact: none. `FR-03` remains continuity `FR2`; physical-host
expression remains `FR0 - 1 accepted shared compression / 1 exact / 10
missing`; learning `FR2`; behavior/save/recovery `FR1`; content `FR2`;
presentation `FR3`; and prior bounded release proof `FR4`.

Mission changes only this variance and `NEXT_INSTANCE_HANDOFF.md`. Validation
is read-only authority review, the one bounded disposable transport probe,
exact source/argument/result identity recomputation, diff, and Git. Mission
runs no production child, helper, Science fixture, API, generation, media,
pixel, product, test, build, browser, or E2E operation.

Rollback removes only this variance and restores the immediately preceding
handoff by explicit content. It never resets the repository or touches
product, media, controlled paths, protected state, or user work.

After synchronization, one fresh Office of Science Administrator /
`office_of_science_administrator` reads the complete active intake, full
Science profile, this complete variance, complete `FRVE-005-v7-VR-14`,
complete `FRSH-005-v1-VR-16`, complete `FRVE-005-v7-VR-13`, complete
`FRSH-005-v1-VR-15`, and the exact cited effective controls. It constructs
the one complete parent source in memory, verifies its ASCII/LF/source
identity, and uses the frozen bootstrap transport directly for the sole fresh
credential-cleared proof. It performs no separate transport probe and no
retry. It removes any disposable parent state and issues one `POLISH VIABILITY
READY`, `REVISE`, or `HOLD` artifact plus synchronized handoff. Science does
not push.

Science may not use `-Command -`; write a parent source file; read a repository
document for script bytes; retry after a child begins; route to Quartermaster;
execute generation/API; allocate the live root; construct a request; call
`SendAsync`; consume ordinal `2`; inspect media/pixels; change product/tests;
run E2E; reveal; advance maturity; close an OPEN record; access a residual or
VR-65; schedule; automate; push; release; or call `FIRST RUN COMPLETE`.

Mission Captain signs **`FIRST RUN SHELL READY / FILELESS READTOEND PARENT
TRANSPORT AND EXACT RESULT RETENTION FROZEN / FRESH SCIENCE ONE-RUN PROOF
REQUIRED / FRSH-005-v1-VR-17`** from exact source
`4f6da45d990274de1bb419357fc786c301800099`.
