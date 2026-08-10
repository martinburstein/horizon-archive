# First Run Shell Variance Reissue - Diagnostic Edge-Source Separation

Variance ID: `FRSH-003-v1-VR-14`

Disposition: **`FIRST RUN SHELL READY / DIAGNOSTIC FIELD-SOURCE CORRECTION
ONLY / FRSH-003-v1-VR-14`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Diagnostic contract / prior verification shell: `FRSH-003-v1-VR-12` /
`FRSH-003-v1-VR-13`

Immediate return: `FRCE-003-v1-VR-13`

Mission source inspected: `0ceba1a2ae87cf6fe6bb611aad8e054e0bbbaae7`

Exact diagnostic-control predecessor:
`ce7c9abbaf1d0ffad8c1031f0398750676d4970e`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Released rollback baseline: `3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602`

Date: **2026-08-10**

## Decision

Mission accepts the exact 96-path observation as a deterministic false-path
contract and issues `READY` for one evidence-control correction only. The
earliest responsible implementation owner is Combat Engineer because the
defect is confined to the E2E capture/diagnostic schema and its static release
contract. No runtime product, content, interaction, layout, focus, learning,
save, route, media, ending, or release defect is established.

The sole authorized E2E passed, emitted one accepted live summary, and the
independent verifier passed once. Those facts remain truthful. They do not
waive the open diagnostic-correction objective and do not authorize release,
functional acceptance, maturity advancement, another E2E, or downstream
production.

The correction is lawfully bounded because current committed source proves
one exact field-meaning collision:

- `captureSixfoldGeometry` derives `border` and `padding` from `labelStyle`
  and uses them correctly for label text and the exact `1px` label gates;
- that same pair is incorrectly returned under `image.border` and
  `image.padding`;
- `buildSixfoldLiveDiagnostic` correctly expects the fields named
  `image.border` and `image.padding` to contain zero-valued image edges; and
- the passing `zeroImageEdges` gate independently reads the real
  `imageStyle`, proving the diagnostic's 96 paths are not product failures.

The exact arithmetic is `6 layouts x 2 phases x 2 edge groups x 4 edges =
96`. The successful run's diagnostic file was not read and is not needed to
authorize this static field-source correction.

## Exact correction contract

Combat may change exactly three implementation/control files:

1. `playtest/e2e-playthrough.mjs`;
2. `Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json`;
3. `horizon-archive-game/test/sixfoldWeir.test.js`, only inside the existing
   FRRC-002 contract test, without adding a test or changing the focused
   `68/68` count.

### E2E capture and diagnostic schema

Inside `captureSixfoldGeometry`, Combat must create four semantically distinct
edge objects from the exact computed styles already present:

```text
imageBorder  <- imageStyle borderLeft/Top/Right/BottomWidth
imagePadding <- imageStyle paddingLeft/Top/Right/Bottom
labelBorder  <- labelStyle borderLeft/Top/Right/BottomWidth
labelPadding <- labelStyle paddingLeft/Top/Right/Bottom
```

Each edge remains an unrounded `Number.parseFloat` result. No tolerance,
epsilon, re-quantization, default substitution, or hand-authored value is
permitted.

The label text-content rectangle and `labelBorderExact` /
`labelPaddingExact` direct gates must continue to use only `labelBorder` and
`labelPadding`. `zeroImageEdges` must use only `imageBorder` and
`imagePadding`. The returned raw geometry must preserve both meanings under
separate schema fields:

```text
geometry.image.border   = imageBorder
geometry.image.padding  = imagePadding
geometry.label.border   = labelBorder
geometry.label.padding  = labelPadding
```

The diagnostic must retain every existing
`layouts.<id>.geometry.<pre|post>.image.border.<edge>` and
`image.padding.<edge>` check with exact expected value `0`. It must add the
parallel complete label inventory:

```text
layouts.<id>.geometry.<pre|post>.label.border.<edge>  expected 1
layouts.<id>.geometry.<pre|post>.label.padding.<edge> expected 1
```

for every frozen layout, phase, group, and `left/top/right/bottom` edge. The
new label checks must enter the same deterministic predeclared required path
set, emitted path set, uniqueness proof, sorted checks, complete false-path
list, and per-layout failure grouping. Owners remain bounded to the existing
diagnostic owner vocabulary.

Schema `horizon.first-run.live-diagnostic.v1`, producer, Work Order,
operative shell, diagnostic contract `FRSH-003-v1-VR-12`, manifest,
product/probe/validation/evidence identities, external-root identity,
runtime-error Boolean, six raw layouts, check record shape, sort order,
failure semantics, and concise transport remain unchanged. VR-14 corrects the
implementation of the VR-12 schema; it does not mint a release-evidence
schema or rewrite the historical run.

### FRRC and static control

The FRRC `live_diagnostic` policy may change only enough to freeze the exact
field-source separation and the requirement that both image-zero and
label-one edge inventories remain exhaustive. It may not change manifest ID,
entry count/order, commands, timeouts, owners, environment, output ownership,
one-E2E policy, summary/verifier separation, cleanup, thresholds, or failed-
run no-retry behavior.

The existing `sixfoldWeir.test.js` FRRC-002 test must statically prove:

- image edge capture comes from `imageStyle` and is returned only under the
  image fields;
- label edge capture comes from `labelStyle`, still drives label text and the
  label exactness gates, and is returned under separate label fields;
- diagnostic image edge expectations remain exact zero;
- diagnostic label edge expectations are exact one; and
- the manifest freezes the same separation without weakening diagnostic/
  summary/verifier ordering or meaning.

Static proof may use exact source assertions, but it may not execute the
diagnostic or invent captured values.

## Frozen identities and evidence meaning

The correction must be committed as one new diagnostic field-source candidate
whose parent lineage includes exact predecessor `ce7c9ab`. It does not replace
or absorb any frozen identity:

```text
product candidate             a91763e28d488f31f8cf7d40ece0b2682246ba9b
diagnostic-control predecessor ce7c9abbaf1d0ffad8c1031f0398750676d4970e
validation control            4cd7fbf31291671dd28c0743b44a7c49aaad82bb
accepted evidence predecessor ca89a679195c11d441a76e6c02983a6436f2ccb2
```

The successful one-run live summary remains exactly `312,564` bytes with
SHA-256
`04919AC83D83F0F9759ABBFDF6119990E9A7961DB0F21A097DEA49D59B8E0533`.
Its accepted six layouts, focus/input aggregates, performance values, runtime
error freedom, complete journey, equal MH-40 outcomes, null deltas, and
`successor=null`, plus the one passing independent verifier invocation, remain
truthful prior evidence. They are not rerun, regenerated, modified, used to
execute the diagnostic correction, or promoted to release/maturity evidence
under this shell.

The historical diagnostic transport remains truthful as an observation of
the flawed predecessor: inventory exact, focus/layout true, and 96 false
paths. It may not be hidden, relabeled as product failure, silently waived, or
treated as verifier input.

## Exact bounded validation and return

Combat must begin from the synchronized commit containing this reissue, read
its full profile, VR-07, VR-12, VR-13, VR-14, FRCE-003-v1-VR-12,
FRCE-003-v1-VR-13, current FRAB-003, handoff, and exact three implementation
files. It may then implement only the three-file correction and commit that
delta as one separately identified candidate.

Authorized proof is limited to:

1. exact ancestry, three-file diff/blob, frozen-identity, forbidden-change,
   protected-boundary, and tracked-drift checks;
2. `git diff --check`;
3. exact FRRC-002 JSON parse, thirteen-entry inventory, forty sorted
   validators, and one-E2E policy inspection;
4. `node --check playtest/e2e-playthrough.mjs`; and
5. the exact manifest `focused` command within `30s`, requiring unchanged
   **`68/68`**.

No related or full test, validator execution, build, PBA/media scan, preview,
served request, port/PID operation, browser, external QA root, diagnostic
execution, E2E, live summary, independent verifier, cleanup command, product
repair, or partial/full release ladder is authorized.

Any failure is immediate `HOLD`; Combat may not repair or rerun a failed gate
under this authority. On complete PASS, Combat writes only one versioned
functional evidence-control return and `NEXT_INSTANCE_HANDOFF.md`, commits
them separately from the implementation candidate, pushes, proves
`HEAD == origin/main`, and returns to a **fresh Mission Captain**. Combat may
not authorize verification execution or route directly to Intelligence.

## Protected scope, rollback, and hard stops

Everything substantive remains exact: authored `45/75/20/25`; `q=1/64`,
`Q=floor`, strict equality/no epsilon; semantic `>=44`; label/source/
retention/overlap/overflow/residual/focus/forced-color/reduced-motion gates;
seven final meanings and owners; LOOK, silent TALK, sole USE, completed
read-only behavior; `L02-02`, strict `24/24`, evaluator, remediation,
evidence/privacy/save/reload/return; Host 04, `L02-03`, later rail; both equal
MH-40 outcomes, null deltas, `successor=null`; PBA/performance/offline/served
identity; exact media `17 / 37,410,731`; immutable Drowned master; external-
root containment/cleanup; and the one-complete-E2E rule.

No product source, content, CSS, module, fixture, dependency, lockfile,
curriculum, evaluator, save, story, route, map, scoreboard, maturity, media,
or other control file may change. No Host 06-15, City repair, lesson, branch,
reward, access, identity, authority, world response, successor, RP-013, post-
ending content, image/media operation, reveal, schedule, automation,
Quartermaster/Image replay, release, maturity advance, or `FIRST RUN COMPLETE`
claim is authorized.

Protected repository QA, PDF, training, browser/profile/save, hidden lore,
media, user state, the disclosed predecessor root, and every external QA root
remain forbidden to inspect or touch.

Bounded rollback removes only the new three-file field-source correction and
restores the exact `ce7c9ab` blobs: manifest
`d9d3491067f072ec2f68dd4159eb4040d47d45ff`, E2E
`5e63e3fd36ce0d59d276a6bc3324cc15ce03bdb2`, and static test
`38ea5255a1713740094ab4ee3b36e7b78389bbe0`. It does not reset the
repository, rewrite history, alter any frozen candidate, migrate save, or
touch protected/untracked/user state.

## Mission proof and exact handoff

Mission verified synchronized source
`HEAD == origin/main == 0ceba1a2ae87cf6fe6bb611aad8e054e0bbbaae7`
before this reissue; exact current blobs equal `ce7c9ab`; and current code
contains the one proven label/image field-source collision described above.
Mission ran no test, validator, build, preview, browser, external-root command,
diagnostic, E2E, summary, verifier, cleanup, media, or product command;
inspected no protected, predecessor, media, or user state; and changed no
implementation or maturity control.

Mission Captain signs **`FIRST RUN SHELL READY / DIAGNOSTIC FIELD-SOURCE
CORRECTION ONLY / FRSH-003-v1-VR-14`** while preserving stage and release
`HOLD`.

Exact next owner is **Combat Engineer**. Implement only the exact three-file
image/label edge-source separation, run only the bounded static/focused proof,
issue one versioned return and synchronized handoff, push, prove sync, and
return to a fresh Mission Captain. Do not run or authorize E2E, repair
product, replay downstream roles, advance maturity, create a reveal/schedule,
or call `FIRST RUN COMPLETE`.

The dedicated Mission commit and synchronization proof are reported from Git
after commit because this artifact cannot contain the hash that first contains
it.
