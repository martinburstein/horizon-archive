# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`FIRST RUN SHELL READY / ONE CORRECTED PREFLIGHT-
CONTROL VERIFICATION / FRSH-003-v1-VR-16`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Exact next owner: **fresh Combat Engineer**

Current bounded verification shell: `FRSH-003-v1-VR-16`

Expended complete-verification shell: `FRSH-003-v1-VR-15`

Immediate Combat return: `FRCE-003-v1-VR-15`

Exact diagnostic field-source candidate:
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`

Exact diagnostic-control predecessor:
`ce7c9abbaf1d0ffad8c1031f0398750676d4970e`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Read the Combat Engineer profile in full, FRSH-003-v1-VR-07 and VR-12
through VR-16, FRCE-003-v1-VR-12 through VR-15, current FRAB-003, this
handoff, and the exact committed FRRC/E2E/static controls.

VR-15's complete-ladder authority is consumed. Combat began its sole ladder
and the combined integrity/static gate failed at its final malformed command
assertion. The actual forbidden candidate-path set was empty, but the command
incorrectly required that set to contain the authorized
`horizon-archive-game/test/sixfoldWeir.test.js` path excluded by its own
regex. No candidate or product defect is established, and no VR-15 gate may
be reused or rerun.

Execute only the exact corrected bounded ladder in VR-16 once:

1. synchronization, ancestry, frozen blobs, tracked/staged drift,
   candidate/current equality, candidate/worktree `git diff --check`,
   protected-boundary noninteraction, and the exact corrected candidate-
   boundary command;
2. FRRC JSON parse proving exact `FRRC-002-v1`, thirteen ordered entries,
   forty exactly named repository-path-sorted validator invocations, and
   `e2e_invocations=1` without running validators;
3. `node --check playtest/e2e-playthrough.mjs`; and
4. exact manifest focused command once within `30s`, requiring `68/68`.

The corrected boundary command must separately require
`forbiddenPaths.Count == 0` and separately require the exact three authorized
candidate paths: the FRRC manifest, existing `sixfoldWeir.test.js`, and E2E.
Never require an authorized path inside the forbidden collection.

Any failure is immediate `HOLD / NO RERUN`. On PASS, issue
`CORRECTED PREFLIGHT-CONTROL PASS / RETURN TO FRESH MISSION /
FRCE-003-v1-VR-16`. Write only that versioned return and this handoff, commit,
push, prove `HEAD == origin/main`, and route a fresh Mission Captain.

No product/test/manifest/E2E/control repair or mutation is authorized. Run no
related/full test, validator, build, PBA/media/offline/performance scan,
preview, served request, port/PID operation, browser, external root,
containment/cleanup, diagnostic, E2E, summary, or verifier. Do not inspect
protected, predecessor, media, hidden-lore, browser/profile/save, or user
state; begin Quartermaster/Image/Intelligence; create a reveal/schedule;
advance maturity; or call `FIRST RUN COMPLETE`.

Preserve every product, probe, diagnostic predecessor, validation, accepted
evidence, threshold, predicate, learning, evidence/privacy, save, route,
world, identity, authority, reward/access, equal MH-40 outcome, null-delta,
`successor=null`, ending, media `17 / 37,410,731`, external-root, cleanup,
diagnostic non-evidence/non-verifier, and one-E2E boundary.

The dedicated Mission commit and final `HEAD == origin/main` proof are
reported from Git after commit because this handoff cannot contain the hash
that first contains itself.
