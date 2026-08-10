# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`FIRST RUN SHELL READY / ONE SCALAR-RANGE SIX-PATH
STATIC-FOCUSED VERIFICATION / FRSH-003-v1-VR-20`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Exact next owner: **fresh Combat Engineer**

Immediate authority / return: `FRSH-003-v1-VR-20` /
`FRCE-003-v1-VR-19`

Mission source:
`28fd26d1afb93e8de409fa6d3309e06ef5405001`

Exact diagnostic field-source candidate:
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`

Exact diagnostic-control predecessor:
`ce7c9abbaf1d0ffad8c1031f0398750676d4970e`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Read the Combat Engineer profile in full, VR-07 and VR-12 through VR-20,
FRCE-003-v1-VR-12 through VR-19, current FRAB-003, this handoff, and the
exact committed FRRC/E2E/static controls.

Mission independently adjudicated VR-19 as **`REQUIRED CORRECTION /
EXECUTION CONTROL / OPEN`**. The unconstructed PowerShell expression
`$probeCandidate..HEAD` caused Git usage/command failure, but VR-19 collapsed
that nonzero exit into drift. It established no candidate or product defect.
VR-19 is consumed and its partial checks are not proof.

Mission constructed the corrected scalar exactly:

```powershell
$candidateRange = "$($probeCandidate)..HEAD"
git diff --quiet --exit-code $candidateRange -- `
  'Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json' `
  'playtest/e2e-playthrough.mjs' `
  'horizon-archive-game/test/sixfoldWeir.test.js' `
  'horizon-archive-game/src/App.jsx' `
  'horizon-archive-game/src/drownedArchive.js' `
  'horizon-archive-game/package.json'
$candidateDiffExit = $LASTEXITCODE
```

The scalar is one Git revision argument. Mission's bounded read-only proof at
the exact synchronized source returned `candidateDiffExit=0`, meaning no
drift. VR-20 requires capture of `$LASTEXITCODE` immediately after every Git
diff: `0` means no drift/integrity finding, `1` means drift/integrity finding,
and `>1` means Git usage/command failure. Command failure must never be
reported as drift.

VR-20 authorizes one repository-root PowerShell invocation only, with the
execution-tool timeout set to `30s`. Use the exact body in VR-20 without
substitution, discovery, repair, waiver, continuation after failure, partial
rerun, or second invocation. File-path scope is exactly the six literal
tracked allowlist paths above. No path enumeration is authorized.

The invocation preserves the five frozen identities/blobs, exact FRRC schema
and `manifest_id`, actual thirteen-entry order and key/ID identity, forty
exact sorted validator structures without validator execution,
`policy.e2e_invocations=1`, one `node --check`, and the exact manifest-focused
command requiring `68 tests / 68 pass / 0 fail`.

Any failure is immediate **`HOLD / NO RERUN`**. On complete PASS, issue
**`SCALAR-RANGE SIX-PATH STATIC-FOCUSED PASS / RETURN TO FRESH MISSION /
FRCE-003-v1-VR-20`**. On failure, issue **`HOLD / SCALAR-RANGE SIX-PATH
STATIC-FOCUSED FAILURE / NO RERUN / RETURN TO FRESH MISSION /
FRCE-003-v1-VR-20`**. Write only that versioned Combat return and this
handoff, commit, push, prove `HEAD == origin/main`, and route a fresh Mission
Captain.

The separate **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION /
OPEN`** classification remains open. Do not enumerate changed, forbidden,
untracked, protected, media, repository-wide, root, predecessor-root, or user-
state paths. Do not run related/full tests, validators, builds, previews,
served requests, browser/E2E/diagnostic/summary/verifier/root/cleanup/media
operations, or any later gate.

No implementation, product, test, manifest, E2E, content, CSS, module,
fixture, dependency, package, curriculum, evaluator, save, story, route, map,
scoreboard, maturity, media, or other control changed. All frozen player,
learning, accessibility, privacy, save, route, world, equal MH-40,
`successor=null`, ending, threshold, immutable-media `17 / 37,410,731`, and
diagnostic non-evidence/non-verifier meanings remain exact. Do not begin
Quartermaster, Image Specialist, or Intelligence; advance maturity; create a
reveal/schedule; or call `FIRST RUN COMPLETE`.

The dedicated Mission commit and final `HEAD == origin/main` proof are
reported from Git after commit because this handoff cannot contain the hash
that first contains itself.
