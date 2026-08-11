# First Run Shell Variance - Managed-Directory Discovery Planning Return

Variance ID: `FRSH-005-v1-VR-07`

Disposition: **`REVISE / OPERATIONS WORK ORDER RETURN REQUIRED / BOUNDED
BUILT-IN MANAGED-DIRECTORY DISCOVERY IS NOT A MISSION-ONLY ADAPTER CHANGE`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / viability: `FRWO-005-v3` / `FRVE-005-v3`

Base shell / effective Mission variances: `FRSH-005-v1` /
`FRSH-005-v1-VR-01` / `FRSH-005-v1-VR-02` /
`FRSH-005-v1-VR-03` / `FRSH-005-v1-VR-04` /
`FRSH-005-v1-VR-05` / `FRSH-005-v1-VR-06`

Current Quartermaster return: `FRCA-005-v2 / HOLD`

Prior Quartermaster return: `FRCA-005-v1 / HOLD`

Combat functional close: `FRCE-005-v1-VR-04 / PRODUCTION FUNCTIONAL`

Mission source inspected:
`43d880df6fe0149619670b026dbc46af36687e6c`

Mission intake origin:
`1352d08316cd813e1770d118d850bde397156fcb`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Immutable accepted-media manifest: `FRAM-001-v1`, file SHA-256
`a674c337b377de113eaa4c6763bd431afc73ab613374a76501aa8c5ce37e5437`,
exact `17 / 37,410,731`, canonical digest
`c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

Exact next recipient: one fresh Operations Planning Major /
`operations_planning_major`

## Mission adjudication

Mission accepts `FRCA-005-v2` as a correct pre-call fail-closed HOLD. The
same-isolate direct-data-URL materialization adapter frozen by
`FRSH-005-v1-VR-06` is unavailable: the built-in call and filesystem tools
cannot share one non-copying payload stream, and the shell forbids a second
full-payload transport. Quartermaster correctly left ordinal `2` unconsumed.

The installed `imagegen` skill nevertheless keeps the built-in tool as the
preferred mode and states that its outputs are saved beneath
`$CODEX_HOME/generated_images/...`; a project-bound selected output is then
moved or copied into the workspace. That policy permits a narrower built-in
staging route in principle: bracket exactly one built-in call with bounded,
nonrecursive, metadata-only snapshots of the exact managed directory; admit
only one uniquely new ordinary file; copy and identity-prove only that exact
path into the predeclared OS-temp candidate; then delete only the identity-
proved managed source. Neither `output_hint` nor a data URL participates.

That route is not a Mission-only adapter correction. `FRWO-005-v3`,
`FRVE-005-v3`, and `FRSH-005-v1-VR-06` expressly prohibit resolving, listing,
searching, inspecting, copying, moving, deleting, cleaning, or proving absence
within the managed parent and instead classify every possible built-in output
as an opaque retained residual. A bounded before/after snapshot changes Work
Order staging, ingress authority, candidate identity, managed cleanup,
residual accounting, failure classification, rollback, and validation. Mission
may not silently change those facts.

The earliest owner is therefore Operations Planning Major, followed by a
fresh Office of Science Administrator viability review and only then a fresh
Mission shell adjudication. Mission issues **`REVISE`**. No generation,
managed-directory access, or Quartermaster ordinal `2` is authorized by this
variance.

Variance classification: **`REQUIRED CORRECTION / MANAGED-OUTPUT STAGING,
IDENTITY, AND CLEANUP CONTRACT / EARLIEST OWNER OPERATIONS`**.

CLI/API fallback is not selected. Martin's authorization of new Drowned media
does not authorize fallback mode, and the installed skill forbids silent
fallback. Only if Operations or Science rejects the bounded built-in route as
unlawful or technically non-viable may a later terminal HOLD ask Martin
whether to authorize the skill's CLI/API path.

## Exact prospective managed-directory contract returned to Operations

Operations must decide whether to supersede `FRWO-005-v3` with one versioned
Work Order that permits only the following prospective built-in staging
contract. Science must then independently make every step executable and
fail-closed before Mission may authorize a call.

1. **Future ordinals only.** The correction applies only to unconsumed ordinal
   `2` and, after a lawful objective ordinal-2 rejection plus exact cleanup,
   conditional ordinal `3`. Ordinal `1` remains permanently consumed and its
   possible managed residual remains opaque, inaccessible, and unchanged.
2. **Exact managed parent.** Resolve `$CODEX_HOME` once from the trusted local
   environment as a scalar without listing it, canonicalize it, and append
   only literal `generated_images`. Require the resolved parent to be exactly
   `C:\Users\marti\.codex\generated_images` for this candidate, an existing
   ordinary directory, not a reparse point, symlink, junction, mount, or
   alternate stream target. Prove it is outside the repository and outside
   every accepted-media, QA, PDF, training, browser/profile/save, user-work,
   temp-candidate, VR-65, opaque-residual, and other protected root. No parent,
   sibling, ancestor, fallback, glob, or recursive traversal is permitted.
3. **Fresh temp target before discovery.** Resolve the OS temporary parent as
   one scalar without listing it; create one fresh GUID-in-D-format direct
   child with create-new semantics; prove its exact containment and protected-
   root separation; and predeclare only absent `attempt-0N.png`. The temp
   child remains outside the repository and managed parent.
4. **Metadata-only before snapshot.** Immediately before the call, enumerate
   only the exact managed parent's direct children, nonrecursively. Record a
   bounded in-memory snapshot containing only exact child name/path identity,
   ordinary-file versus directory/type, reparse/link status, exact filesystem
   file identity and link count, creation and last-write UTC timestamps, byte
   length for ordinary files, and owner SID/principal. Any unavailable
   required metadata fails closed. Do not open file
   contents, hash, decode, render, inspect pixels, traverse a child directory,
   or retain the snapshot in a report or repository.
5. **Exact call window and one call.** Resolve the expected current owner
   SID/principal before the call. Capture an exact UTC lower bound only after
   the before snapshot is complete and immediately before invoking exactly
   one sequential built-in `image_gen__imagegen` call with the unchanged
   frozen prompt and both image-input fields omitted. Capture an exact UTC
   upper bound immediately after that one call returns. No parallel producer,
   second call, browser, CLI/API, extension, manual file, reference, edit,
   variation, or fallback exists.
6. **Opaque result object.** Do not parse, read, quote, retain, log, expose, or
   use `output_hint`. Do not transport, inspect, decode, or materialize
   `image_url` or any data URL. The managed-directory delta, not a result
   field, is the sole prospective ingress authority. Tool success text and
   prompt intent prove nothing.
7. **Metadata-only after snapshot.** After the call returns and before any
   candidate-content access, enumerate only the same exact managed parent's
   direct children, nonrecursively, using the same metadata schema. The
   before and after snapshots must be compared entirely in memory and then
   discarded after the disposition is recorded.
8. **Exactly one admissible delta.** Require every pre-existing direct child
   to remain present and metadata-identical, with no deletion, rename, type,
   reparse, identity, owner, size, creation-time, or last-write-time change.
   Require exactly one new direct child and no other delta. The new child must
   be one ordinary file: not a directory, subdirectory, reparse point,
   symlink, junction, mount, hard-link ambiguity, device, sparse/offline
   placeholder, or alternate stream; its canonical parent must remain the
   exact frozen managed directory, and its link count must be exactly one. Its
   owner SID/principal must equal the
   pre-resolved current owner, and its creation UTC must fall inclusively
   within the exact call window. Science must decide the exact lawful
   timestamp-resolution tolerance, file-identity primitive, ordinary-file
   predicates, and race/TOCTOU controls; no tolerance may admit an ambiguous
   producer or another delta.
9. **Unexpected delta is opaque.** Zero new files, more than one new entry, a
   new subdirectory, any reparse/link/device/placeholder, changed pre-existing
   metadata, wrong owner, creation time outside the frozen window, unresolved
   identity, inaccessible metadata, or any other ambiguity consumes the
   ordinal and stops opaque. It authorizes no recursive search, child
   traversal, content inspection, broad cleanup, inference, result-field use,
   or later ordinal. The conservative managed-residual count advances by one
   for the consumed ordinal even when no admissible file is proved.
10. **Exact-path source opening and copy.** Only the single admissible new
    ordinary file may be opened, by its exact canonical path, read-only, with
    no-follow/reparse-safe semantics and with handle identity, owner, type,
    creation window, and parent containment re-proved after open. Stream-copy
    it exactly once into only the predeclared create-new OS-temp candidate
    while counting bytes and computing lowercase SHA-256. No repository path
    receives bytes at this stage; no second materialization or conversion
    exists.
11. **Managed-to-temp identity.** Close the temp writer, independently stream
    the exact managed source handle/path and the exact temp candidate read-only,
    and require equal byte length and lowercase SHA-256 before PNG, metadata,
    browser-decode, pixel, or `PHY-01..12` work. Science must bound reads and
    hashing and prove that source replacement, mutation, or handle/path drift
    fails opaque.
12. **Exact managed-file deletion.** Only after managed-to-temp identity passes
    and exact source identity is re-proved may the role delete that one exact
    managed source. It must prove the exact path absent without listing a
    parent and, if Science requires a closing snapshot, repeat only the same
    nonrecursive metadata-only snapshot to prove the parent returned exactly
    to its before state. No directory, parent, sibling, ordinal-1 residual,
    unknown file, pattern, recursive, retry, or fallback cleanup is permitted.
13. **Failure after source identity.** Copy, hash, identity, close, mutation,
    or exact deletion uncertainty is an opaque terminal HOLD. Cleanup may
    delete only an exact identity-proved temp candidate and empty GUID child;
    it may never delete an unproved managed entry or broaden discovery. No
    next ordinal follows an opaque stop or cleanup uncertainty.
14. **Existing candidate gates continue later.** Only a byte-identical temp
    candidate whose managed source has been deleted and proved absent may
    enter the existing strict PNG/chunk/sRGB/opacity/dimension/size/inflate/
    browser-decode gates, original-resolution `PHY-01..12`, source bands,
    six-layout/accessibility mapping, byte-identical project import,
    provenance, copy, runtime, and release ladder. No preview, Markdown image,
    screenshot, contact sheet, or cycle reveal exists.

Operations must specify whether a built-in implementation that creates a new
direct subdirectory rather than exactly one new ordinary file is an immediate
opaque rejection. Under this returned contract it is; Mission does not permit
recursive or one-level child discovery to make that shape acceptable.

## Required Science adjudication

If Operations issues a revised Work Order, one fresh Office of Science
Administrator must independently decide whether the exact parent resolution,
nonrecursive metadata schemas, file identity and owner checks, creation-window
semantics, ordinary-file and no-reparse predicates, before/after comparison,
race isolation, no-follow source open, streaming copy/hash, managed-to-temp
identity, exact-path deletion, absence proof, temp cleanup, residual
accounting, performance, privacy, offline, provenance, and no-reveal controls
are technically viable and fail closed on this Windows/tool boundary.

Science must explicitly test the prospective adapter with non-generative
fixtures before Mission authorization. The fixture set must cover zero, one,
and multiple new entries; new subdirectory; reparse/link/device/placeholder;
wrong owner; before/after timestamp boundary; pre-existing metadata mutation;
source replacement between snapshot/open/copy/delete; copy/hash mismatch;
deletion failure; exact absence proof; and rejection cleanup. Fixture evidence
may not enumerate the real managed parent or use a real built-in result.

If exact creator/owner, creation window, ordinary-file identity, race control,
or exact deletion cannot be established without broader discovery or result-
field parsing, Science must issue `HOLD / MARTIN DECISION REQUIRED`. It may not
silently select CLI/API fallback.

## Exact ordinal, residual, asset, and maturity state

The bounded player-visible outcome remains unchanged:

```text
exact Host 05 / Sixfold Weir mastery
-> lens-like fragment handoff
-> one distinct local dry Host 06 / Stranded Lens Cradle
-> sole unchanged L02-03 entry and loop
-> unchanged next Drowned learning boundary
```

- Total generation ordinal domain remains exactly `{1,2,3}`.
- Ordinal `1` remains permanently consumed by the historical opaque result-
  path stop and is never retried, recovered, discovered, or cleaned.
- Ordinal `2` remains unconsumed and unavailable under this `REVISE`.
- Ordinal `3` remains unconsumed and conditional on a future lawful ordinal-2
  objective rejection plus exact cleanup.
- Built-in calls in `FRCA-005-v2`: exact `0`.
- Conservative possible ordinal-associated managed residual count remains
  exact `1`, associated only with ordinal `1`.
- The ordinal-1 possible residual remains **`DEFERRED LIMITATION / RELEASE-
  PROCESS ONLY / NON-GATING / OPAQUE BUILT-IN MANAGED RESIDUAL`** and was not
  inspected or changed.
- VR-65 remains separately **`DEFERRED LIMITATION / RELEASE-PROCESS ONLY /
  NON-GATING / OPAQUE EXTERNAL QA RESIDUAL`**, unknown and inaccessible.
- Product raster and `PROVENANCE.md` remain absent; Host 06 source, registry,
  provenance, geometry, protected, and six-layout fields remain null/false
  except exact label insets `3/5`; seven copy slots and one alt slot remain
  null. No media or content candidate exists.

Maturity remains unchanged. `FR-03` remains continuity `FR2`; physical-host
expression `FR0 - 1 accepted shared compression / 1 exact / 10 missing`;
learning `FR2`; behavior/save/recovery `FR1`; content `FR2`; presentation
`FR3`; and prior bounded release proof `FR4`. Only Intelligence may advance
the maturity record from accepted as-built evidence.

## Preserved gates, OPEN records, and protected state

Inherited functional gates remain frozen and were not replayed: focused
`50/0`, legacy static-contract `29/0`, learning/privacy `17/0`, related
`58/0`, validators `40/40`, cold full `979/0/0`, production and TD-012
fixture builds PASS, production PBA JavaScript `1,676,508`, CSS `119,394`,
modules `217`, accepted media `17 / 37,410,731`, source maps `0`, served
preflight PASS, owned process/port cleanup PASS, and `git diff --check` PASS.
Complete E2E remains correctly unrun.

All thirteen inherited process records remain separate and **OPEN**: VR-17,
VR-23, VR-24, VR-25, VR-28, VR-39, VR-41, VR-46, VR-47, VR-50, VR-53 Stage
4, VR-60 Call 9, and VR-61. The separate Commandant filename/search-scope
record remains **OPEN**. This stage closes, cures, merges, waives, or renumbers
none.

Mission's initial broad worktree status re-emitted the three already-disclosed
untracked pathnames, and its broad control-file locators emitted repository
filenames. These are process-only recurrences under the applicable still-OPEN
records, including VR-23, VR-24, and the separate Commandant filename/search-
scope record. They supplied no media, candidate, canon, maturity, or release
evidence. No disclosed protected file or directory content was opened.

Repository QA quarantine, `Art Of No Mans Sky Book Scan.pdf`, `Simplilearn
Training Files/`, real browser/profile/save, hidden lore, user work, accepted-
media pixels, OS-temp and managed parents, ordinal-1 residual, and VR-65 remain
protected. The prospective managed-directory exception is not active until a
complete Operations -> Science -> Mission sequence explicitly supersedes the
current prohibition.

## Validation performed and honest limitation

Mission read the current handoff, complete `FRCA-005-v2`, full Mission profile,
complete `FRWO-005-v3`, complete `FRVE-005-v3`, complete
`FRSH-005-v1-VR-06`, and the installed `imagegen` skill, including its built-
in save-path and no-silent-CLI-fallback rules. Mission verified exact local
`HEAD` `43d880df...`, origin `1352d083...`, frozen candidate/tree, and the
documented immutable-manifest identity without opening accepted-media bytes.

Mission did not invoke generation; resolve, enumerate, snapshot, open, hash,
copy, move, delete, or prove absence in the managed parent; inspect or
transport a result/payload; parse `output_hint`; create a temp child; inspect
pixels; import media; write product copy/provenance; run tests/build/browser/
E2E; reveal; advance maturity; close an OPEN record; inspect VR-65; schedule;
automate; release; or call `FIRST RUN COMPLETE`.

This artifact adjudicates ownership and freezes the question returned to
Operations. It does not prove the proposed discovery contract viable or
authorize its execution.

## Rollback, Mission signature, and exact Operations handoff

This planning return changes only this versioned Mission variance and the
synchronized handoff. Rollback is limited to those two documentation files;
planning history is not rewritten. No product, test, runtime, lesson, save,
media, manifest, candidate, copy, provenance, map, scoreboard, maturity,
process classification, residual, schedule, or automation state changes.

Mission Captain signs **`REVISE / OPERATIONS WORK ORDER RETURN REQUIRED /
BOUNDED BUILT-IN MANAGED-DIRECTORY DISCOVERY / FRSH-005-v1-VR-07`** from exact
source `43d880df...`.

One fresh Operations Planning Major / `operations_planning_major` reads this
complete return, `FRCA-005-v2`, complete `FRWO-005-v3`, complete
`FRVE-005-v3`, complete effective shell through `FRSH-005-v1-VR-06`, and the
installed built-in save-path policy. Operations issues exactly one versioned
`WORK ORDER READY`, `REVISE`, or `HOLD` artifact adjudicating the prospective
managed-directory contract and routes any accepted revision to fresh Science.

Operations may not invoke generation; resolve/list/snapshot the real managed
parent; inspect or parse a result; use `output_hint`; transport a data URL;
authorize CLI/API; consume ordinal `2`; inspect pixels; import media; write
copy/provenance; begin Image; run E2E; reveal; advance maturity; close an OPEN
record; inspect VR-65; schedule; automate; release; or call `FIRST RUN
COMPLETE`.
