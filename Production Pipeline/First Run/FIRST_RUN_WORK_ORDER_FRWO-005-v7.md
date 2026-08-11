# Horizon Archive First Run Work Order

Work Order ID: `FRWO-005-v7`

Title: **Stranded Lens Cradle - Direct Image API Source, Native Handle
Identity, and Fixed Lesson Integration**

Stage / stable agent: Operations Planning Major / `operations_planning_major`

Disposition: **`WORK ORDER READY / MARTIN-AUTHORIZED MINIMAL TEMP-ONLY
GETFILEINFORMATIONBYHANDLE HELPER / FRESH SCIENCE REQUIRED`**

Date: **2026-08-11**

Operations source inspected:
`c750893fcf27a99176a780c9cc5538ee7cb47253`

Martin's latest controlling instruction: **Host 06 CLI/API fallback is
authorized. Cure the sole PowerShell 5.1 file-identity/link-count gap with one
minimal temp-only PowerShell `Add-Type` C# helper calling kernel32
`GetFileInformationByHandle` on an already-open exclusive `FileStream`
`SafeFileHandle`; freeze its source, source hash, compile output, output-hash
rule, location, and cleanup; expose no `CloseHandle`, path, or write method;
and require fresh Science fixture proof before any API call.**

Reopened baseline / continuity: `FRPB-001-v2` / `FRCL-004-v2`

Superseded Work Order / decisive return: `FRWO-005-v6` / `FRVE-005-v6`

Effective prior shell / returns: `FRSH-005-v1` through
`FRSH-005-v1-VR-07` / `FRCA-005-v2`

Released First Run predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Immutable accepted-media manifest: `FRAM-001-v1`, file SHA-256
`a674c337b377de113eaa4c6763bd431afc73ab613374a76501aa8c5ce37e5437`,
exact `17 / 37,410,731`, canonical digest
`c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`

Planning controls: `FRRM-005-v7` / `FRSB-005-v7`

First-run address: `FR-03 / Chapter II - Drowned Archive / Host 06`

Learning owner: existing sole unchanged `L02-03`
model/deployment/configuration work

Exact next recipient: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Operations adjudication

Operations accepts complete `FRVE-005-v6`. Science independently validated
the v6 direct endpoint/model/request and one-item `data[0].b64_json` response;
boolean-only env credential boundary; one-send/no-redirect HttpClient posture;
bounded strict UTF-8/JSON/base64 parser; `FileMode.CreateNew`, `Flush(true)`,
and close behavior; same-directory two-argument `File.Move` no-replace
destination-race behavior; and exact-path cleanup. Its sole HOLD is that the
authorized PowerShell 5.1/.NET Framework managed surface cannot expose link
count or bind file identity to the already-open handle.

Martin's explicit authorization cures exactly that missing primitive. This v7
authorizes one minimal C# bridge compiled by PowerShell `Add-Type`. The bridge
accepts only an already-open `SafeFileHandle`, calls only kernel32
`GetFileInformationByHandle`, and returns volume serial, file index, link
count, attributes, and size. It cannot open by path, create, write, move,
delete, enumerate, duplicate, or close a handle. The owning `FileStream`
retains handle lifetime and exclusive access.

Except for the exact helper delta and v7 identities in this document,
`FRWO-005-v7` incorporates every clause, cap, literal path, ordinal rule,
prompt/API contract, PNG/CRC/decode predicate, physical predicate, crop/
mapping/accessibility threshold, privacy/save/offline/PBA/performance/E2E
gate, no-reveal boundary, rollback limit, protected state, and OPEN-record
classification of `FRWO-005-v6` unchanged. The direct API, not the withdrawn
CLI or Python SDK, remains the sole prospective generation transport.

This planning stage compiles or invokes no helper, allocates no helper/live
root, opens no attempt handle, invokes no API, and establishes no media
candidate. Fresh Science must independently compile, hash, load, exercise, and
clean the exact helper with disposable non-media fixtures before it may issue
`POLISH VIABILITY READY`. Fresh Mission must issue a new versioned shell before
ordinal `2` may run.

## Preserved outcome, route, and maturity

The one player-visible outcome remains exactly:

```text
exact Host 05 / Sixfold Weir mastery
-> lens-like fragment handoff
-> one distinct local dry Host 06 / Stranded Lens Cradle
-> sole unchanged L02-03 entry and loop
-> unchanged next Drowned learning boundary
```

The source remains exactly one weathered lens in one tilted conformal cradle
on a dry reachable same-basin continuation, with at least two load/stress
contacts, at least two continuous drainage seams, the Host 05 fragment
handoff, and a restrained horizon/reflected-horizon catch. It remains distinct
from live water, Host 05, a return-like ridge, the Crown, the distant suspended
Tidal Lens, and any second lens/cradle candidate.

Entry remains after exact sanitized Host 05 / `L02-02` mastery; the changed
boundary ends immediately after exact `L02-03` mastery. The one on-foot rail,
unchanged next Drowned boundary, shared RP-012 ending, READY/NOT YET READY
dignity, all null deltas, and `successor=null` remain fixed. No Host 07,
RP-013, branch, reward, access, identity, authority, world response, successor,
or post-ending content is added.

Maturity remains unchanged. `FR-03` stays continuity `FR2`; physical-host
expression `FR0 - 1 accepted shared compression / 1 exact / 10 missing`;
learning `FR2`; behavior/save/recovery `FR1`; content `FR2`; presentation
`FR3`; and prior bounded release proof `FR4`. Only Intelligence may later
record `1 accepted shared compression / 2 exact / 9 missing` from accepted
as-built evidence.

## Frozen native helper contract

Helper contract ID: `HOST06-FILE-IDENTITY-PSNET-v1`.

The source encoding is UTF-8 without BOM, LF line endings, including the final
LF. It is exactly `1,693` bytes with lowercase SHA-256:

```text
98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97
```

The exact source is:

```csharp
using System;
using System.ComponentModel;
using System.Runtime.InteropServices;
using Microsoft.Win32.SafeHandles;
namespace HorizonArchive.Host06 {
  public static class FileIdentity {
    [StructLayout(LayoutKind.Sequential)]
    private struct BY_HANDLE_FILE_INFORMATION {
      public uint FileAttributes;
      public System.Runtime.InteropServices.ComTypes.FILETIME CreationTime;
      public System.Runtime.InteropServices.ComTypes.FILETIME LastAccessTime;
      public System.Runtime.InteropServices.ComTypes.FILETIME LastWriteTime;
      public uint VolumeSerialNumber;
      public uint FileSizeHigh;
      public uint FileSizeLow;
      public uint NumberOfLinks;
      public uint FileIndexHigh;
      public uint FileIndexLow;
    }
    [DllImport("kernel32.dll", SetLastError = true)]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static extern bool GetFileInformationByHandle(
      SafeFileHandle handle,
      out BY_HANDLE_FILE_INFORMATION information);
    public static ulong[] Read(SafeFileHandle handle) {
      if (handle == null || handle.IsInvalid || handle.IsClosed) {
        throw new ArgumentException("An open SafeFileHandle is required.", "handle");
      }
      BY_HANDLE_FILE_INFORMATION information;
      if (!GetFileInformationByHandle(handle, out information)) {
        throw new Win32Exception(Marshal.GetLastWin32Error());
      }
      return new ulong[] {
        information.VolumeSerialNumber,
        ((ulong)information.FileIndexHigh << 32) | information.FileIndexLow,
        information.NumberOfLinks,
        information.FileAttributes,
        ((ulong)information.FileSizeHigh << 32) | information.FileSizeLow
      };
    }
  }
}
```

The returned array schema is exact: index `0` volume serial number; index `1`
64-bit file index; index `2` link count; index `3` file attributes; index `4`
64-bit file size. Any null, invalid, or closed handle, native false result,
array shape other than five unsigned values, zero link count, link count other
than exactly `1`, reparse attribute bit `0x400`, or inconsistent size is
terminal. Native error text/stack/handle values may not enter output or
provenance; only a stable local failure code may survive.

The only helper directory and compile output are:

```text
C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-725b75e4-8083-4df5-9a80-a0301b8f00dd
C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-725b75e4-8083-4df5-9a80-a0301b8f00dd\Host06FileIdentity.dll
```

No source file is written. The exact source string is passed to `Add-Type
-TypeDefinition` with `-Language CSharp`, exact `-OutputAssembly` above, and
`-ErrorAction Stop`. The compile must emit exactly one ordinary non-reparse DLL
at that path and no intentional second output. Pre-existing root or DLL,
compiler warning, compiler diagnostic, unexpected child, or any other output
is terminal before load.

Because PowerShell 5.1 CodeDOM output contains compile-instance metadata,
Operations does not invent a reproducible precompile byte digest. The frozen
output-hash rule is exact: Science must read the ordinary DLL once before
load, compute its lowercase SHA-256 and byte length, record both as immutable
scalars in `FRVE-005-v7`, load only those same bytes with
`Assembly.Load(byte[])`, and require any subsequent observed compile-output
bytes in that adjudication to match those frozen values. An absent, empty,
changed, path-replaced, multiply linked, reparse, or unhashable DLL is `HOLD`.
The DLL bytes, compiler diagnostics, assembly bytes, and native results are not
committed or placed in provenance.

After in-memory load and exact type/method/signature inspection, delete only
the identity-proved exact DLL, prove it absent, delete only the exact empty
helper directory nonrecursively, and prove it absent. This cleanup completes
before any live root allocation or API send. The loaded in-memory type may
then remain only for the bounded PowerShell process lifetime. Cleanup failure
is terminal and consumes no ordinal because no API send has begun. No parent,
sibling, glob, recursion, pattern, package cache, compiler cache, repository
path, live attempt root, managed output, ordinal-1 residual, or VR-65 is a
cleanup target.

There is exactly one P/Invoke and one public method. The helper contains no
`CloseHandle`, `CreateFile`, path/string parameter, file/directory API, write,
seek, flush, truncate, resize, rename, move, copy, link, delete, enumerate,
process, network, registry, environment, reflection, or arbitrary native-call
surface. No different source, namespace, type, method, assembly, native entry
point, struct layout, compiler option, output location, or loader is allowed.

## Handle-bound materialization delta

The v6 live root and exact ordinal-2/3 staging and target paths remain literal
and unchanged. `FileMode.CreateNew`, `FileAccess.Write`, `FileShare.None`, one
bounded write, `Flush(true)`, close/dispose, strict reopen, strict PNG gate,
and same-directory two-argument `File.Move` no-replace behavior remain exact.

The helper is called only while the owning `FileStream` is open with
`FileShare.None`, using that stream's `SafeFileHandle`. It is called after the
stage write and `Flush(true)` while the exclusive write handle remains open;
again on the exclusive read-only reopen; immediately before the move on the
same exclusive read handle; and on the exclusive read-only final target after
the move. Each snapshot must report link count `1`, no reparse bit, expected
size, and the same `(VolumeSerialNumber, FileIndex)` tuple across write handle,
stage reopen, pre-move stage, and post-move target. A mismatch is substitution
or aliasing and is terminal.

No pathname claim can replace a handle snapshot. No helper call may receive a
borrowed raw integer/`IntPtr`, duplicated handle, path-opened handle outside the
specified `FileStream`, shared handle, or handle after stream disposal. The
helper never owns and never closes the handle.

Cleanup may delete an active stage or target only when its exclusive reopened
handle snapshot matches the frozen active tuple, reports one link, no reparse
bit, and expected size. If identity cannot be proved, cleanup uncertainty is
terminal: do not delete, do not advance to ordinal `3`, and report only the
stable local failure and cleanup booleans. The exact no-parent/no-sibling/no-
glob/no-recursion cleanup boundary from v6 remains unchanged.

## Preserved direct API, ordinal, and product envelope

`HOST06-IMAGE-API-PSNET-v1` remains unchanged: exact one-send
`POST https://api.openai.com/v1/images/generations`; `gpt-image-2`; exact
`HOST06-GEN-PROMPT-v1`; `n=1`; `3840x2160`; `quality=high`;
`background=opaque`; `output_format=png`; env-only `OPENAI_API_KEY` with
boolean-only presence observation; `HttpClientHandler.AllowAutoRedirect=false`;
`ResponseHeadersRead`; `00:10:00` timeout; no retry; strict bounded
`1..16,500,000` response, `4..16,000,000` canonical RFC 4648 member, and
`1..12,000,000` one-time decoded bytes. No SDK, CLI, Python, package, script
file, alternate endpoint/model/parser/transport, response URL, output hint,
managed directory, or output discovery is authorized.

The total ordinal domain remains `{1,2,3}`. Ordinal `1` remains permanently
consumed, opaque, inaccessible, and never retried or cleaned. Ordinals `2` and
`3` remain unconsumed and unavailable. Maximum future API calls remains two,
sequential, with ordinal `3` allowed only after ordinal `2` becomes an
objective source rejection after full target identity/technical/physical
review and exact cleanup. Any transport/parser/file/identity/cleanup failure
stops with no retry or later ordinal. Operations v7 and fresh Science make
exactly zero API calls.

The conservative managed-residual count remains exact `1`, associated only
with historical ordinal `1`; VR-65 remains separate and inaccessible. The
strict PNG/chunk/CRC/sRGB/opacity/dimension/inflate/browser-decode gates;
`PHY-01..12`; six-layout crop/mapping/accessibility gates; sole unchanged
`L02-03`; exact `16/16 + 16/16 + 2/2`; privacy/save/recovery/no-cross-credit;
one-path canon; both MH-40 outcomes; RP-012; and `successor=null` remain
unchanged.

At most the first fully passing source may later be copied byte-identically and
create-new to the sole v6 product raster path, followed only by the sole v6
`PROVENANCE.md`. Provenance additionally records helper contract ID, source
SHA, Science-frozen compile-output byte length/SHA, successful one-link/
identity checks, and exact helper cleanup. It never contains helper/DLL bytes,
native values, API key/header, request/response JSON, base64, rejected bytes/
hash/pixels, diagnostics, or exceptions.

`FRAM-001-v1` stays immutable at exact `17 / 37,410,731`. All v6 media/PBA,
JavaScript/CSS/module/source-map, decode/image-ready/CLS/task, test/build, and
single-E2E caps remain exact. The shipped product remains local/offline with
one same-origin selected-image request and zero external runtime requests.

## Required fresh Science adjudication

One fresh Office of Science Administrator must read complete `FRWO-005-v7`,
complete `FRWO-005-v6`, and complete `FRVE-005-v6`, then independently:

1. verify the exact helper source bytes/length/SHA and reject every method,
   import, parameter, or member beyond the frozen contract;
2. prove exact helper root/DLL absence and protected-root separation without
   parent enumeration;
3. compile only the exact source to the exact DLL, reject diagnostics or extra
   output, prove the DLL ordinary/one-link/non-reparse, freeze its exact byte
   length/SHA in `FRVE-005-v7`, load only those bytes in memory, and complete
   exact helper-output cleanup before any live root/API activity;
4. fixture-prove correct volume/file-index/link-count/attribute/size snapshots
   from already-open exclusive `FileStream.SafeFileHandle` instances, including
   invalid/closed handle, hard-link count, reparse, substitution, reopen,
   pre/post same-directory move identity, destination race, and identity-
   conditioned cleanup branches using disposable non-media fixtures only;
5. revalidate the unchanged direct request/response/parser/credential/
   `CreateNew`/`Flush(true)`/atomic no-replace/strict PNG/product envelope with
   synthetic or disposable non-media evidence and exact zero API sends; and
6. issue exactly one new versioned `POLISH VIABILITY READY`, `REVISE`, or
   `HOLD` artifact.

If the exact helper cannot compile, hash, load, remain incapable of path/write/
close behavior, return stable handle identity and one-link evidence, or clean
exactly—or if any unchanged v6 gate fails—Science must issue `HOLD`. It may not
weaken identity, use another P/Invoke/API/helper/executable/runtime, add a
package/SDK/CLI/script, relax the parser, change transport, or send the API.

## Protected state, records, validation, and handoff

All thirteen inherited process records remain separate and **OPEN**: VR-17,
VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage 4,
VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope record
also remains **OPEN**. This stage closes, cures, merges, waives, or renumbers
none.

Repository QA quarantine, `Art Of No Mans Sky Book Scan.pdf`, `Simplilearn
Training Files/`, user/untracked work, real browser/profile/save, hidden lore,
accepted-media pixels, real managed directory, ordinal-1 residual, OS-temp
parent, live API root, product media, and VR-65 remain protected. Rollback is
limited to this v7 document and synchronized planning controls/handoff.

Operations verified exact starting `HEAD`
`c750893fcf27a99176a780c9cc5538ee7cb47253`; read the required workflow,
registry, complete Operations profile, current handoff, complete
`FRWO-005-v6`, complete `FRVE-005-v6`, and current release map/scoreboard.
Operations computed only the frozen source-byte identity in memory. It did not
compile or invoke the helper, create a temp path, call the API, inspect media,
or change product/runtime state.

One fresh Office of Science Administrator / `office_of_science_administrator`
performs only the non-generative/non-API adjudication above. Science may
allocate only the exact helper root for compilation/fixture proof and must
restore it to absence; it may not allocate the live attempt root, invoke
generation/API, consume an ordinal, inspect pixels, import media, write copy
or provenance, authorize Mission, run E2E, reveal, advance maturity, close an
OPEN record, access a residual or VR-65, schedule, automate, push, release, or
call `FIRST RUN COMPLETE`.
