# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`FIRST RUN SHELL READY / DIAGNOSTIC FIELD-SOURCE
CORRECTION ONLY / FRSH-003-v1-VR-14`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Exact next owner: **Combat Engineer**

Mission source adjudicated: `0ceba1a2ae87cf6fe6bb611aad8e054e0bbbaae7`

Exact diagnostic-control predecessor:
`ce7c9abbaf1d0ffad8c1031f0398750676d4970e`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Read the Combat Engineer profile in full, complete `FRSH-003-v1-VR-14`,
operative `FRSH-003-v1-VR-07`, diagnostic contract
`FRSH-003-v1-VR-12`, verification shell `FRSH-003-v1-VR-13`, complete
`FRCE-003-v1-VR-12`, complete `FRCE-003-v1-VR-13`, current
`FRAB-003-v1`, and exact current FRRC-002 manifest/E2E/static test.

Mission independently confirms one bounded evidence-control defect. The E2E
capture derives `border` and `padding` from `labelStyle`, correctly uses them
for label text and label gates, then incorrectly returns them under
`image.border/padding`. The diagnostic expects those image fields to be zero,
while the independent passing `zeroImageEdges` gate reads the real
`imageStyle`. This deterministically explains all `96` false paths without
establishing a product defect.

Change exactly:

- `playtest/e2e-playthrough.mjs`: capture distinct unrounded image border/
  padding from `imageStyle` and label border/padding from `labelStyle`; return
  them separately under `geometry.image.*` and `geometry.label.*`; retain
  image expected-zero checks; add complete label expected-one checks; preserve
  the exhaustive sorted inventory and every other diagnostic/summary/gate
  meaning;
- `Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json`:
  freeze only that exact field-source/schema separation; and
- `horizon-archive-game/test/sixfoldWeir.test.js`: extend only the existing
  FRRC-002 static test to prove the separation, with no new test and unchanged
  focused `68/68` count.

Commit those three files as one new diagnostic field-source candidate whose
lineage preserves `ce7c9ab` as predecessor and keeps product `a91763e`,
validation `4cd7fbf`, and evidence predecessor `ca89a679` separate and
immutable.

Run only exact ancestry/diff/blob/frozen-boundary/tracked-drift checks,
`git diff --check`, FRRC JSON/13-entry/40-sorted-validator/one-E2E policy
inspection, `node --check playtest/e2e-playthrough.mjs`, and the exact manifest
focused command requiring `68/68` within `30s`. On PASS, write one versioned
Combat return plus this handoff, commit, push, prove `HEAD == origin/main`, and
return to a **fresh Mission Captain**. Any failure is `HOLD` without repair or
rerun.

The sole prior E2E, exact `312,564`-byte summary with SHA-256
`04919AC83D83F0F9759ABBFDF6119990E9A7961DB0F21A097DEA49D59B8E0533`, and
one passing independent verifier remain truthful but are not a correction
waiver, diagnostic input, release evidence, or maturity evidence. Do not run
or authorize E2E, diagnostic execution, summary, verifier, related/full tests,
validators, builds, PBA/media, previews, served requests, ports/PIDs, browser,
external roots, or cleanup.

Preserve every threshold, media, meaning, learning, evidence, privacy, save,
route, world, identity, and shared-ending boundary. Do not repair product,
inspect protected repository QA/PDF/training/browser/profile/save/hidden-lore/
media/user/predecessor-root state, begin Quartermaster/Image/Intelligence,
expand Host 06-15 or City, create a media operation/reveal/schedule, advance
maturity, or call `FIRST RUN COMPLETE`.
