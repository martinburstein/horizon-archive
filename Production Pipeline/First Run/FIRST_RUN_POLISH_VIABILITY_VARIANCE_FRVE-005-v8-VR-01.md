# First Run Polish Viability Variance - v8 Carrier Delivery

Envelope ID: `FRVE-005-v8-VR-01`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order / prior viability / terminal shell: `FRWO-005-v8` /
`FRVE-005-v8` / `FRSH-005-v1-VR-34`

Predecessor result: `FRCA-005-v6`

Disposition: **`POLISH VIABILITY READY / FILELESS REDIRECTED-STDIN CARRIER
DELIVERY FIXTURE-PROVED / NEW COMPLETE MISSION SHELL REQUIRED / ZERO
CREDENTIAL, API, OR MEDIA ACTIVITY / A1 UNCONSUMED / FRVE-005-v8-VR-01`**

Date: **2026-08-12**

Science source inspected: `903189b46f288564de162aacb71d04450cc31436`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Science decision

Science independently reproduces the `FRCA-005-v6` pre-send failure. Assigning
a `33,638`-character synthetic value to the process environment on the exact
Windows host fails with `System.Management.Automation.MethodInvocationException`.
The failure needs no credential read, request construction, API send, media
read, temporary root, or product operation. The production carrier cannot be
delivered in one Windows process-environment value.

The smallest viable correction is to replace only the launcher's PH01 carrier
retrieval and its parent delivery binding with one redirected-standard-input
channel. The complete carrier remains a repository-retained, byte-frozen
source. It is read once by the Quartermaster parent, verified before launch,
written once to the child process's standard input, closed, read to end by the
launcher, re-encoded and verified in the child, parsed, converted to one
`ScriptBlock`, and invoked once. No carrier source or intermediate file is
created. No chunking, environment reconstruction, command-line payload,
encoded command, alternate launcher, retry, API fallback, or second attempt is
needed.

Science therefore classifies the variance as **`REQUIRED CORRECTION / CHANGE
ONLY CARRIER DELIVERY FROM ONE PROCESS ENVIRONMENT VALUE TO ONE CLOSED
REDIRECTED STDIN STREAM / FIXTURE-PROVED / OPEN FOR MISSION FREEZE`**.
`FRSH-005-v1-VR-34` remains terminal and may not be invoked again. A1 remains
unconsumed because no `SendAsync` began, but only a new complete Mission shell
can make it executable.

## Exact fixture evidence

Science used the current Windows PowerShell 5.1 executable and two fresh child
processes with `UseShellExecute=false`, redirected standard input/output/error,
no `OPENAI_API_KEY` in either child's process environment, and no filesystem
output.

The first child received the exact retained production carrier through
standard input, read it with `[Console]::In.ReadToEnd()`, re-encoded it with
strict BOM-less UTF-8, independently reproduced its identity, and parser-
validated it without creating or invoking a `ScriptBlock`:

```text
STDIN_CARRIER_PASS
bytes=33638
sha256=81e82f1b4f6bd936c4002f969ea6896533673ef7d03b4eef23b7953e7fcbe491
parsed=true
invoked=false
stderrBytes=0
```

The retained production carrier is exact ASCII, contains no NUL or CR bytes,
and contains `302` LF bytes. Its byte identity therefore survives the tested
redirected text channel without encoding ambiguity.

The second child received a distinct benign script padded to exactly `33,638`
UTF-8 bytes. Before invocation the child rejected any fixture containing
`SendAsync`, `OPENAI_API_KEY`, or `api.openai.com`; it then parser-validated,
created, and invoked the one benign `ScriptBlock`:

```text
STDIN_SYNTHETIC_INVOKE_PASS
syntheticBytes=33638
syntheticSha256=9914cd62491d8d2fe71139d50f560cbcfa1ced2f6512765af6d7608aedba9298
childInvocations=2
apiSends=0
credentialReads=0
mediaReads=0
tempRoots=0
intermediateFiles=0
stderrBytes=0
```

The fixture created no helper, live, review, candidate, product, or provenance
path. Science re-proved all exact nine v8 controlled paths absent afterward.
No production carrier was invoked.

## Frozen redirected-standard-input contract

Mission may revise the retained launcher and the Quartermaster parent binding
only as follows:

1. Quartermaster reads the exact repository carrier using strict BOM-less UTF-8
   and independently requires exact `33,638` bytes and SHA-256
   `81e82f1b4f6bd936c4002f969ea6896533673ef7d03b4eef23b7953e7fcbe491`
   before process start.
2. The child remains the exact Windows PowerShell 5.1 executable with no
   profile, no interactive UI, no shell execution, no window, and redirected
   standard input, standard output, and standard error. Mission must freeze the
   complete argument vector and new launcher byte identity.
3. The obsolete `HORIZON_ARCHIVE_HOST06_PREHELPER_V1` value is removed from
   the child's process environment before start and must be absent in the
   launcher. No part of the carrier is placed in any environment variable,
   command argument, encoded command, or additional process.
4. The parent starts exactly one child, performs exactly one
   `StandardInput.Write(carrier)` call, closes standard input in all cases, and
   performs no second write, relaunch, alternate binding, or retry. Output and
   error capture remain bounded and secret-safe under the existing shell.
5. Launcher PH01 becomes the single blocking
   `[Console]::In.ReadToEnd()` retrieval. Empty input, read failure, wrong
   character/byte length, non-ASCII input, strict UTF-8 failure, or SHA mismatch
   is terminal before parse and before carrier invocation.
6. After exact child-side identity passes, PH02 parser validation and PH03 one
   `ScriptBlock` creation/invocation occur. Existing PH04 through PH08 and the
   production carrier's PT01 through PT18 remain byte- and behavior-equivalent.
   Source and block references are cleared in the launcher `finally` path.
7. The parent does not read, copy, clear, log, or project `OPENAI_API_KEY`.
   Credential separation is preserved: only the invoked production carrier may
   read the inherited process credential at unchanged PT06 after helper cleanup.
8. Any delivery, identity, parse, invocation, process, output, or cleanup
   mismatch is a pre-send terminal HOLD. It does not consume A1 and does not
   authorize another launch under the same shell.

Chunked environment values are unnecessary and are not authorized. They add
ordering, missing-chunk, stale-value, aggregate-size, and environment-exposure
states without improving the proven one-stream solution.

## Retained production envelope

The production carrier itself remains exact `33,638 /
81e82f1b4f6bd936c4002f969ea6896533673ef7d03b4eef23b7953e7fcbe491`.
Its request, prompt, official response parser, status/diagnostic projection,
native helper, handle identity, create-new/flush/move, review handshake,
product paths, byte-identical import, provenance, cleanup, no-reveal, and
sole-A1 boundaries do not change. Mission must classify and freeze every new
launcher/parent byte; any other semantic or production-carrier delta is
`UNAUTHORIZED DIVERGENCE`.

The player path remains exact Host 05 mastery -> one local dry Host 06 -> sole
unchanged `L02-03` -> unchanged next Drowned boundary. Learning evidence,
privacy, save/resume/recovery, offline/no-authority, input/accessibility,
performance, equal-dignity MH-40 outcomes, shared RP-012, all null deltas, and
`successor=null` remain immutable. No branch, packet, lesson, reward, access,
identity, authority, world response, Machine/Builder dialogue, hidden-lore
answer, Host 07+, RP-013, or post-ending content is added.

Repository QA quarantine, protected PDF, training tree, Martin's real
browser/profile/save, accepted-media bytes/pixels, all v7 paths/ordinals/
residuals, managed or opaque residuals, VR-65, hidden lore, and unrelated work
remained inaccessible and untouched. Maturity remains unchanged and no image,
product raster, provenance, registry value, copy, or alt text exists.

## Exact Mission handoff

One fresh Mission Captain reads the complete required intake/profile,
`FRCA-005-v6`, this complete variance, `FRVE-005-v8`, `FRWO-005-v8`, terminal
`FRSH-005-v1-VR-34`, and the exact retained launcher/carrier/builder. Mission
must construct and parser-check one revised launcher plus the exact bounded
Quartermaster parent invocation, fixture-prove the complete redirected-stdin
contract with zero credential/API/media activity, freeze every identity, and
issue one new complete `FIRST RUN SHELL READY`, `REVISE`, or `HOLD` artifact.
Only a complete READY shell may route one fresh Quartermaster to begin A1.

Office of Science Administrator signs **`POLISH VIABILITY READY /
FRVE-005-v8-VR-01 / FILELESS REDIRECTED STDIN EXACT CARRIER DELIVERY AND
SAME-SIZE SCRIPTBLOCK INVOCATION FIXTURE-PROVED / NEW COMPLETE MISSION SHELL
REQUIRED / A1 UNCONSUMED / ZERO API AND MEDIA ACTIVITY`** from exact source
`903189b46f288564de162aacb71d04450cc31436`.
