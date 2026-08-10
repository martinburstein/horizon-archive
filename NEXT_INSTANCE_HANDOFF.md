# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`FIRST RUN SHELL READY / ONE CORRECTED PRODUCTION BUILD
ONLY / FRSH-003-v1-VR-26`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Exact next owner: **fresh Combat Engineer**

Immediate authority: `FRSH-003-v1-VR-26`

Immediate return: `FRSH-003-v1-VR-25`

Prior corrected authority: `FRSH-003-v1-VR-24`

Mission VR-26 inspected source:
`32f416277d4e8675114eab99e04d2668ad230df1`

VR-22 Combat start source:
`c81722376ac4686474648bca71ad5e648e35b644`

Exact diagnostic field-source candidate:
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`

Exact diagnostic-control predecessor:
`ce7c9abbaf1d0ffad8c1031f0398750676d4970e`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Mission VR-26 independently proved `HEAD == origin/main == 32f4162...`, quiet
tracked/index exit `0`, and these six literal blobs, in handoff order:

- `fc91a863be99b11c44405071324e3502b959e621`;
- `0b72f1463c729a8e22337af0115c3316652c2565`;
- `5910af4e4f6754acbc5193ff021f374fe90a96f2`;
- `802ceffb1a07c3b166dc2f7f06ab38138dc37596`;
- `1bc2f9d93c59a396ddee7ed83cde1600f76b62e7`; and
- `2c23c0a59f62af0463fa54bb1c8465aa9f6bb2da`.

The six exact literal paths are:

- `Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json`;
- `playtest/e2e-playthrough.mjs`;
- `horizon-archive-game/test/sixfoldWeir.test.js`;
- `horizon-archive-game/src/App.jsx`;
- `horizon-archive-game/src/drownedArchive.js`; and
- `horizon-archive-game/package.json`.

The package maps `npm run build` to exact `vite build` with Vite `6.4.2`.
Manifest `production-build` remains exact: workdir `horizon-archive-game`,
command `npm run build`, timeout `60000`, expected native exit `0`, owner
`combat_engineer`, output ownership `horizon-archive-game/dist`.

Fresh Combat may run only:

1. scalar `git rev-parse HEAD` and `git rev-parse origin/main`, requiring
   equality;
2. fully suppressed `git diff --quiet` and `git diff --cached --quiet`,
   requiring exit `0`; and
3. error-suppressed `git rev-parse HEAD:<literal>` for the six paths above,
   emitting only scalar hashes and requiring the exact identities above.

The quiet checks neither inspect nor prove untracked absence. Make no such
claim and inspect no untracked content.

After those three proof groups, invoke exactly one `npm run build` using the
unchanged VR-24 wrapper reproduced in VR-26, from workdir
`horizon-archive-game`, timeout `60000ms`. Then stop immediately whether the
wrapper returns or throws and return the captured result to a fresh Mission
Captain.

No other pre-build or post-build command is authorized. Before and after the
wrapper, do not run `git status`, `git diff --check`, or any command capable of
filename output; do not list, search, glob, probe protected paths, check
untracked paths, parse files, summarize, verify, clean up, synchronize, write a
report/handoff, stage, commit, or push.

The build is the first and only product command. Do not rerun VR-22 tests or
validators. Do not run fixture, PBA/media/offline/dependency/source-map/
product-drift/performance, preview, served request, port/PID, containment,
root, browser, E2E, diagnostic, summary, verifier, cleanup, live, product,
media, protected-state, user-state, reveal, maturity, or downstream-role work.

On exact native exit `0`, exactly one normalized `217 modules transformed`
marker, and exactly one normalized Vite `built in` marker, return **`PRODUCTION
BUILD EXECUTION-CONTROL PASS / STOP / RETURN TO FRESH MISSION`**. On any
failure, return **`HOLD / PRODUCTION BUILD EXECUTION-CONTROL FAILURE / NO
RERUN / RETURN TO FRESH MISSION`**. In both cases run no post-build command.

The separately OPEN divergences remain:

- **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN / VR-17`**;
- **`UNAUTHORIZED DIVERGENCE / BROAD REPOSITORY FILENAME ENUMERATION / OPEN /
  VR-23`**;
- **`UNAUTHORIZED DIVERGENCE / UNTRACKED PATHNAME ENUMERATION / OPEN / VR-24
  COMBAT ATTEMPT`**; and
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-25
  MISSION`**.

None is waived, merged, closed, or used as candidate evidence.

All frozen candidate, threshold, player, learning, accessibility, privacy,
save, route, world, equal MH-40, null-delta, `successor=null`, ending,
immutable-media `17 / 37,410,731`, diagnostic non-evidence/non-verifier, and
one-E2E meanings remain exact. No Quartermaster, Image Specialist,
Intelligence, reveal, maturity advance, release, schedule, automation, or
`FIRST RUN COMPLETE` action is authorized.

The dedicated Mission report/handoff commit and final `HEAD == origin/main`
proof are reported from Git after commit because this handoff cannot contain
the hash that first contains itself.
