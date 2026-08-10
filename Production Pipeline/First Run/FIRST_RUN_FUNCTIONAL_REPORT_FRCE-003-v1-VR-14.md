# First Run Functional Return - Diagnostic Edge Field-Source Separation

Return ID: `FRCE-003-v1-VR-14`

Disposition: **`DIAGNOSTIC FIELD-SOURCE CORRECTION COMPLETE / RETURN TO
FRESH MISSION / FRCE-003-v1-VR-14`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Combat Engineer / `combat_engineer`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Diagnostic contract / verification shell / correction shell:
`FRSH-003-v1-VR-12` / `FRSH-003-v1-VR-13` /
`FRSH-003-v1-VR-14`

Combat start source: `e44e2c7712245c9f34bc1d544fd76c577604d86f`

Diagnostic-control predecessor:
`ce7c9abbaf1d0ffad8c1031f0398750676d4970e`

Diagnostic field-source candidate:
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Date: **2026-08-10**

## Correction completed

Combat changed exactly the three VR-14-authorized implementation/control
files and committed them as one separate diagnostic field-source candidate:

- `playtest/e2e-playthrough.mjs` now captures four distinct unrounded edge
  objects. `imageBorder` and `imagePadding` use only `imageStyle` computed
  values; `labelBorder` and `labelPadding` use only `labelStyle` computed
  values. Label text geometry, `labelBorderExact`, and `labelPaddingExact`
  continue to use the label objects. `zeroImageEdges` now uses only the image
  objects.
- The raw geometry schema now returns image edges only under
  `geometry.image.border/padding` and label edges only under
  `geometry.label.border/padding`.
- The exhaustive diagnostic retains every image edge path at exact expected
  `0` with owner `source` and adds every parallel label edge path at exact
  expected `1` with owner `geometry`, for all six layouts, both phases, both
  edge groups, and all four edges. The existing predeclared required paths,
  emitted paths, uniqueness, deterministic sorting, complete false-path list,
  and per-layout grouping machinery remains unchanged.
- `FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json` freezes the exact
  field sources and both exhaustive edge inventories without changing its ID,
  entries, commands, timeouts, owners, one-E2E policy, summary/verifier
  separation, cleanup, or thresholds.
- The existing FRRC-002 static test proves the source split, returned schema,
  image-zero and label-one expected values/owners, and matching manifest
  policy. No test was added and the focused count remains `68`.

No runtime product, layout predicate, direct gate, summary, independent
verifier, transport, threshold, meaning, content, or acceptance behavior
changed.

## Exact candidate and integrity proof

- Candidate parent is exact Combat start source `e44e2c7`; diagnostic-control
  predecessor `ce7c9ab` is an ancestor.
- Candidate `2cccbfe` changes exactly the manifest, the existing FRRC static
  test, and the E2E. Candidate blobs are manifest
  `fc91a863be99b11c44405071324e3502b959e621`, E2E
  `0b72f1463c729a8e22337af0115c3316652c2565`, and static test
  `5910af4e4f6754acbc5193ff021f374fe90a96f2`.
- Exact predecessor blobs remain manifest
  `d9d3491067f072ec2f68dd4159eb4040d47d45ff`, E2E
  `5e63e3fd36ce0d59d276a6bc3324cc15ce03bdb2`, and static test
  `38ea5255a1713740094ab4ee3b36e7b78389bbe0`.
- Frozen product blobs remain exact: `App.jsx`
  `802ceffb1a07c3b166dc2f7f06ab38138dc37596` and `drownedArchive.js`
  `1bc2f9d93c59a396ddee7ed83cde1600f76b62e7`.
- Validation-control test blob remains separately identifiable as
  `d71452e6bb5e8ab5d846b8a8ec4f8b12832b03ae` at `4cd7fbf`.
- Protected and forbidden tracked boundaries had no drift. The three known
  protected untracked entries remained unstaged and untouched.

## Exact bounded validation

- `git diff --check`: **PASS**.
- FRRC JSON parse: **PASS**; exact `FRRC-002-v1`, `13` entries, `40` sorted
  validator paths, and `e2e_invocations=1`.
- `node --check playtest/e2e-playthrough.mjs`: **PASS**.
- Exact manifest `focused` command, invoked once: **68/68 PASS**; Node duration
  `200.4442ms`, within `30s`.

All gates passed on their first invocation. No failed gate was repaired or
rerun.

## Explicit limitations and preserved boundaries

Per VR-14, Combat ran no E2E, diagnostic execution, related/full suite,
validator, build, PBA/media scan, preview, served request, port/PID operation,
browser, external-root command, summary, verifier, or cleanup command. The
prior exact `312,564`-byte summary, SHA-256
`04919AC83D83F0F9759ABBFDF6119990E9A7961DB0F21A097DEA49D59B8E0533`,
and one passing verifier remain truthful prior evidence but were not used as
correction proof, diagnostic input, release evidence, or maturity evidence.

No product, CSS, content, module, fixture, dependency, lockfile, curriculum,
evaluator, save, story, route, map, scoreboard, maturity, media, learning,
world, identity, authority, reward, access, ending, Host 06-15, City,
successor, RP-013, or post-ending state changed. Protected repository QA,
PDF, training, browser/profile/save, hidden lore, media, user state,
predecessor root, and external QA roots were not inspected or touched. No
Quartermaster, Image Specialist, Intelligence, reveal, schedule, automation,
release, maturity advance, or `FIRST RUN COMPLETE` action occurred.

## Exact handoff

Exact next owner is a **fresh Mission Captain**. Independently inspect exact
candidate `2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc` against VR-14 and the
separate frozen product, validation, and evidence identities. Adjudicate only
the committed field-source/schema correction and bounded proof, then issue one
versioned `HOLD` or `READY` routing. Do not run or authorize E2E from this
Combat return, repair product, begin Quartermaster/Image/Intelligence, inspect
protected or external-root state, advance maturity, or call
`FIRST RUN COMPLETE`.

The dedicated report/handoff commit and final synchronization proof are
reported from Git after commit because this artifact cannot contain the hash
that first contains itself.
