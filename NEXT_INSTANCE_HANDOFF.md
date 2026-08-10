# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`DIAGNOSTIC FIELD-SOURCE CORRECTION COMPLETE / RETURN
TO FRESH MISSION / FRCE-003-v1-VR-14`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Exact next owner: **fresh Mission Captain**

Correction shell: `FRSH-003-v1-VR-14`

Combat return: `FRCE-003-v1-VR-14`

Exact diagnostic field-source candidate:
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`

Exact diagnostic-control predecessor:
`ce7c9abbaf1d0ffad8c1031f0398750676d4970e`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Read the Mission Captain profile in full, complete
`FIRST_RUN_SHELL_VARIANCE_FRSH-003-v1-VR-14.md`, complete
`FIRST_RUN_FUNCTIONAL_REPORT_FRCE-003-v1-VR-14.md`, operative VR-07,
diagnostic VR-12, verification VR-13, current `FRAB-003-v1`, and exact
committed manifest/E2E/static test at candidate `2cccbfe`.

Combat corrected exactly one evidence-control defect in exactly three files.
The E2E now stores unrounded image border/padding from `imageStyle` under
`geometry.image.*`, stores unrounded label border/padding from `labelStyle`
under distinct `geometry.label.*`, continues to use the label fields for label
text and exactness gates, and uses the image fields for the zero-image-edge
gate. The diagnostic retains exhaustive image expected-zero paths and adds
exhaustive label expected-one paths through the same deterministic required,
emitted, uniqueness, sorting, failure-list, and per-layout grouping machinery.
The manifest and existing static test freeze that exact separation.

The candidate changes only:

- `playtest/e2e-playthrough.mjs`;
- `Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json`;
  and
- `horizon-archive-game/test/sixfoldWeir.test.js` inside its existing FRRC-002
  test, with no new test and unchanged `68/68` count.

Combat proof passed: exact ancestry/three-file/blob/frozen-boundary/tracked-
drift inspection, `git diff --check`, FRRC JSON/13-entry/40-sorted-validator/
one-E2E policy inspection, `node --check`, and one exact focused invocation at
`68/68` in `200.4442ms` within `30s`. No gate failed or reran.

Mission must independently adjudicate only candidate `2cccbfe` and may issue
one bounded `HOLD` or `READY` routing. Do not inherit Combat's conclusion as
independent proof. Do not run or authorize E2E from this handoff, execute the
diagnostic, repair product, run related/full tests, validators, builds,
PBA/media, preview, served identity, browser, external-root, summary, verifier,
or cleanup operations unless a new exact shell lawfully authorizes them.

The sole prior E2E, exact `312,564`-byte summary with SHA-256
`04919AC83D83F0F9759ABBFDF6119990E9A7961DB0F21A097DEA49D59B8E0533`,
and one passing independent verifier remain truthful but are not a correction
waiver, diagnostic input, release evidence, or maturity evidence.

Preserve every product, threshold, layout predicate, summary/verifier meaning,
learning, evidence, privacy, save, route, world, identity, shared-ending,
media, protected/user/root/reveal, and maturity boundary. Do not begin
Quartermaster, Image Specialist, or Intelligence; inspect protected repository
QA/PDF/training/browser/profile/save/hidden-lore/media/user/predecessor-root
state; expand Host 06-15 or City; create a media operation, reveal, schedule,
or automation; advance maturity; or call `FIRST RUN COMPLETE`.

The dedicated Combat report/handoff commit and final `HEAD == origin/main`
proof are reported from Git after commit because this handoff cannot contain
the hash that first contains itself.
