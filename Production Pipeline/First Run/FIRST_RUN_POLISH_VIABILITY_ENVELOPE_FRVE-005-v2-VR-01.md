# First Run Polish Viability Envelope - Reparse Gate Variance

Variance ID: `FRVE-005-v2-VR-01`

Stage / owner: Office of Science Administrator /
`office_of_science_administrator`

Work Order / shell: `FRWO-005-v2` / `FRSH-005-v1`

Disposition: **`POLISH VIABILITY READY / REQUIRED CORRECTION / MISSION
REPARSE-GATE VARIANCE REQUIRED`**

Science source: `12a8768d603d314e0d3124f6079b50a68176efaf`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-10**

## Decision

The accepted-media manifest remains viable, but the blanket rule to reject
every `ReparsePoint` attribute is not viable in this OneDrive worktree. That
rule confuses a reparse attribute with a name-surrogate redirect. The exact
current paths use Microsoft Cloud Files tags and do not redirect names.

Science therefore classifies the stopped Combat result as **`REQUIRED
CORRECTION / MISSION SHELL AND RELEASE-COMMAND MANIFEST`**. Mission must issue
a versioned variance replacing only the blanket reparse predicate with the
fail-closed handle contract below. All seventeen literals, ordinal order,
tuple schema, total `37,410,731`, raw-byte SHA semantics, candidate identity,
no-pixel boundary, later recomputation, cleanup, and every other
`FRSH-005-v1` requirement remain exact.

This artifact does not itself authorize a byte read. Mission is the earliest
owner because the current shell explicitly says to reject any reparse point.
After Mission freezes the executable adapter, fresh Combat may run the revised
gate against the unchanged frozen inert candidate. Quartermaster does not
begin before that gate passes, its evidence commit is pushed, and
`HEAD == origin/main`.

## Exact corroborated condition

Metadata-only calls addressed only the thirty-one cumulative components
derived from the seventeen frozen literals. They did not list a directory,
search, glob, decode, render, thumbnail, interpret media metadata, open a media
data stream, or inspect pixels.

- Every reparse tag was either `0x9000e01a` or `0x9000601a`.
- Masking the documented Cloud Files variant bits yields
  `IO_REPARSE_TAG_CLOUD (0x9000001a)`; the documented name-surrogate bit
  `0x20000000` is clear in both observed tags.
- Every leaf's `FILE_ATTRIBUTE_TAG_INFO` was `attributes=0x00000420`,
  `tag=0x9000601a`: archive plus reparse only. None had `OFFLINE`, `UNPINNED`,
  or `RECALL_ON_DATA_ACCESS`.
- `CfGetPlaceholderStateFromAttributeTag` returned `0x00000009` for all
  seventeen leaves: `PLACEHOLDER | IN_SYNC`, with neither `PARTIAL` nor
  `PARTIALLY_ON_DISK`.
- Each leaf opened once with `FILE_FLAG_OPEN_REPARSE_POINT` and once with
  normal reparse processing had the same volume serial and 128-bit file ID.
- `GetFinalPathNameByHandleW(FILE_NAME_NORMALIZED | VOLUME_NAME_DOS)` returned
  the exact frozen absolute path under the exact resolved repository root for
  all seventeen leaves. No resolved leaf escaped or substituted another path.
- Handle-reported lengths reconciled to the already-authorized per-path sizes
  without reading media data. No manifest tuple or digest was computed.

Microsoft's API contract distinguishes reparse tags and the name-surrogate
bit, permits direct `FileAttributeTagInfo` queries, defines Cloud Files
placeholder states, defines the offline/recall attributes, and identifies the
final resolved path and stable volume/file identity:

- <https://learn.microsoft.com/en-us/windows/win32/fileio/reparse-point-tags>
- <https://learn.microsoft.com/en-us/windows/win32/api/cfapi/nf-cfapi-cfgetplaceholderstatefromattributetag>
- <https://learn.microsoft.com/en-us/windows/win32/fileio/file-attribute-constants>
- <https://learn.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-getfinalpathnamebyhandlew>
- <https://learn.microsoft.com/en-us/windows/win32/api/winbase/ns-winbase-file_id_info>

## Required replacement manifest primitive

Mission must freeze one versioned Windows handle adapter with these ordered
steps. Any unavailable API, unexpected value, disagreement, or failed
assertion stops before the affected file's byte read and writes no manifest.

1. Load only the exact seventeen literal strings already frozen in
   `FRSH-005-v1` / `FRRC-003-v1`. Validate exact order, uniqueness, POSIX
   spelling, non-rooted form, and absence of empty, `.` or `..` components.
   Do not enumerate a directory or discover a path.
2. Open the repository root metadata-only and freeze its normalized DOS final
   path, volume serial, and 128-bit file ID.
3. For every cumulative literal component, open an attribute-only handle with
   `OPEN_EXISTING`, `FILE_FLAG_BACKUP_SEMANTICS`, and
   `FILE_FLAG_OPEN_REPARSE_POINT`. Query `FileAttributeTagInfo` and file ID.
   An ordinary non-reparse component is permitted. A reparse component is
   permitted only when its tag, after masking `IO_REPARSE_TAG_CLOUD_MASK`, is
   exactly `IO_REPARSE_TAG_CLOUD` **and**
   `IsReparseTagNameSurrogate(tag)` is false. Reject symlinks, mount points,
   junctions, every name surrogate, every non-Cloud tag, invalid tag/state,
   or an API that cannot report the tag.
4. Open the same exact component metadata-only with normal reparse processing.
   Require the same volume/file ID as the reparse-point handle. Require the
   normalized final path to equal the canonical repository-root-plus-literal
   path and remain strictly contained below the normalized repository root.
   Reject alternate final spelling, volume, file ID, link target, junction,
   mount, path substitution, or containment uncertainty.
5. For each leaf, require a regular non-directory file with one hard link.
   Query `FileAttributeTagInfo` and
   `CfGetPlaceholderStateFromAttributeTag`. Reject `OFFLINE`, `UNPINNED`,
   `RECALL_ON_DATA_ACCESS`, `PARTIAL`, `PARTIALLY_ON_DISK`, invalid state, or
   any state implying a content fetch. Do not hydrate, pin, copy, move, or
   relabel a file to cure a stop. A fully local ordinary file or a Cloud Files
   `PLACEHOLDER | IN_SYNC` file is eligible.
6. Only after that leaf preflight passes, open one data handle with
   `GENERIC_READ`, `OPEN_EXISTING`, `FILE_SHARE_READ` only,
   `FILE_FLAG_SEQUENTIAL_SCAN`, and `FILE_FLAG_OPEN_NO_RECALL`. Do not request
   write or delete access and do not share write or delete access. Re-query
   final path, volume/file ID, basic info, standard info, tag, and Cloud state
   from this same handle before the first read; require equality with the
   preflight and repeat every no-fetch predicate.
7. From that one still-open handle, stream once from offset zero through EOF,
   simultaneously counting returned bytes and computing SHA-256. Never seek
   for inspection, decode, render, thumbnail, preview, or interpret content.
8. Before closing the same handle, re-query final path, volume/file ID,
   creation time, last-write time, change time, attributes/tag/Cloud state,
   allocation size, EOF length, link count, delete-pending, and directory
   state. Require exact before/after equality and require bytes read equal the
   same-handle EOF length. `LastAccessTime` is the sole permitted metadata
   delta: Windows advanced it in the non-media proof even with backup/no-recall
   flags. Record unchanged/advanced as a scalar; reject reversal or any other
   metadata change. Never write an old access time back.
9. Build tuples and their canonical digest only in memory. Require exact count
   `17` and total `37,410,731`. Create `FRAM-001-v1` only after all seventeen
   reads pass. Use create-new semantics; on a manifest write failure, delete
   only the exact newly created manifest after proving its path/file identity.
   Never roll back, repair, rehydrate, dehydrate, timestamp-reset, or otherwise
   mutate accepted media.
10. Every later recomputation reruns the entire topology/residency/single-
    handle contract. A safe Cloud placeholder is not a blanket exemption: any
    name surrogate, partial/dehydrated state, final-path drift, identity drift,
    byte drift, or metadata drift stops fail-closed.

## Proof and limitation

The one-handle raw-byte algorithm was exercised only on the already-read
non-media authority `AGENTS.md`, itself an in-sync `0x9000601a` Cloud Files
placeholder. Its same-handle byte count and SHA matched an independent hash;
final path, volume/file ID, length, write/change times, attributes, tag, and
Cloud state stayed stable. Windows advanced only `LastAccessTime`, which is
why the contract above makes that side effect explicit and forbids a repair.

Science did **not** run this data-handle proof on any of the seventeen media
files. No accepted-media byte, pixel, sample, tuple SHA, or canonical digest
was read or produced. The current files are fully local, so the revised gate
has no expected hydration operation; if residency changes before Combat, it
stops before data access.

## Preserved boundaries and exact handoff

No product/runtime file, candidate scalar, accepted-media byte, generator,
attempt ordinal, selected source, provenance, import, preview, E2E, reveal,
maturity record, schedule, automation, or push changed. The candidate remains
`02d957e9...`; `FRAM-001-v1` remains absent; generation ordinals consumed
remain `0`.

All thirteen inherited process records and the separate Commandant filename/
search-scope record remain separate and **OPEN**. VR-65 remains exactly
**`DEFERRED LIMITATION / RELEASE-PROCESS ONLY / NON-GATING / OPAQUE EXTERNAL
QA RESIDUAL`**, unknown and inaccessible.

Exact next owner: one fresh Mission Captain / `mission_captain` issues a
versioned `FRSH-005-v1` variance and superseding `FRRC-003` command manifest
that implement this adapter without changing any other shell field. Exact
next after Mission: one fresh Combat Engineer reruns only the manifest create
gate against the frozen inert candidate, commits scalar/manifest evidence,
pushes only if `PRODUCTION FUNCTIONAL` is lawfully reached, and synchronizes
the handoff. Quartermaster remains stopped meanwhile.
