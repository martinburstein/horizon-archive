# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`FIRST RUN SHELL READY / ONE CORRECTED PRODUCTION BUILD
PROOF ONLY / FRSH-003-v1-VR-27`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Exact next owner: **fresh Combat Engineer**

Immediate authority: `FRSH-003-v1-VR-27`

Immediate return / predecessor authority: Combat VR-26 build return /
`FRSH-003-v1-VR-26`

Mission VR-27 inspected source:
`ab9c6818b39a1509f990f2ed76a6270b4e1eb1d2`

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

VR-27 independently adjudicated the exact VR-26 fact: native build exit `0`;
Vite `built in 6.54s`; visible output contained exactly one literal `217
modules transformed.` substring and exactly one `built in`; the wrapper exited
`1` only because its normalized marker proof required an exact leading glyph;
Combat did not rerun and performed no post-build command or write.

VR-26 is **`HOLD / PRODUCTION BUILD EXECUTION-CONTROL FAILURE / NO RERUN`**,
not a product/build defect. Its authority is consumed. Exact raw combined
output is not durably available here as a trusted artifact, so output-only
reparse is not authorized. VR-27 authorizes exactly one new corrected build-
proof invocation and no second build.

At Mission start, `HEAD == origin/main == ab9c681...`; fully suppressed tracked
and index checks each returned exit `0`. Those checks did not inspect or prove
untracked absence. Make no untracked-cleanliness claim.

The six exact literal paths and required blobs, in order, remain:

- `Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json`:
  `fc91a863be99b11c44405071324e3502b959e621`;
- `playtest/e2e-playthrough.mjs`:
  `0b72f1463c729a8e22337af0115c3316652c2565`;
- `horizon-archive-game/test/sixfoldWeir.test.js`:
  `5910af4e4f6754acbc5193ff021f374fe90a96f2`;
- `horizon-archive-game/src/App.jsx`:
  `802ceffb1a07c3b166dc2f7f06ab38138dc37596`;
- `horizon-archive-game/src/drownedArchive.js`:
  `1bc2f9d93c59a396ddee7ed83cde1600f76b62e7`; and
- `horizon-archive-game/package.json`:
  `2c23c0a59f62af0463fa54bb1c8465aa9f6bb2da`.

The package maps `npm run build` to exact `vite build` with Vite `6.4.2`.
Manifest `production-build` remains exact: workdir `horizon-archive-game`,
command `npm run build`, timeout `60000`, expected native exit `0`, owner
`combat_engineer`, output ownership `horizon-archive-game/dist`.

Fresh Combat may run only:

1. scalar `git rev-parse HEAD` and `git rev-parse origin/main`, requiring
   equality;
2. fully suppressed `git diff --quiet` and `git diff --cached --quiet`,
   requiring exit `0`; and
3. error-suppressed scalar `git rev-parse HEAD:<literal>` for the six paths
   above, requiring the six exact blobs in order.

After those proof groups, from workdir `horizon-archive-game` with timeout
`60000ms`, invoke exactly one `npm run build` using the complete VR-27 wrapper.
The wrapper preserves VR-26 capture and native-exit logic but, after ANSI
stripping, counts the literal substring `217 modules transformed.` exactly
once and counts this anchored Vite completion line exactly once without
requiring a leading glyph:

```powershell
$moduleProof = [regex]::Matches(
  $plainBuildText,
  [regex]::Escape('217 modules transformed.')
)
$completionProof = [regex]::Matches(
  $plainBuildText,
  '(?m)^[^\r\n]*\bbuilt in[ \t]+\d+(?:\.\d+)?(?:ms|s)[ \t]*$'
)
```

Use the complete exact wrapper in `FRSH-003-v1-VR-27`; do not reconstruct it
from this excerpt. Native exit exact `0` remains mandatory. Both counts must be
exactly `1`.

Stop immediately whether the wrapper returns or throws. Return captured output
to a fresh Mission Captain. Run no post-build command and perform no repository
write.

No other pre-build or post-build command is authorized. Do not run `git
status`, `git diff --check`, filename-capable commands, listing, discovery,
search, glob, protected-path probe, untracked-path check, content parse,
summary, verifier, cleanup, or synchronization outside the three exact proof
groups.

The build is the first and only product command. Do not rerun VR-22 tests or
validators. Do not run fixture, PBA/media/offline/dependency/source-map/
product-drift/performance, preview, served request, port/PID, containment,
root, browser, E2E, diagnostic, live-review, cleanup, product, media,
protected-state, user-state, reveal, maturity, or downstream-role work.

On exact native exit `0`, exactly one normalized literal module substring, and
exactly one normalized anchored Vite completion line, return **`PRODUCTION
BUILD EXECUTION-CONTROL PASS / STOP / RETURN TO FRESH MISSION`**. On any
failure, return **`HOLD / PRODUCTION BUILD EXECUTION-CONTROL FAILURE / NO RERUN
/ RETURN TO FRESH MISSION`**. In both cases run no post-build command.

All OPEN divergences remain distinct and OPEN:

- **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN / VR-17`**;
- **`UNAUTHORIZED DIVERGENCE / BROAD REPOSITORY FILENAME ENUMERATION / OPEN /
  VR-23`**;
- **`UNAUTHORIZED DIVERGENCE / UNTRACKED PATHNAME ENUMERATION / OPEN / VR-24
  COMBAT ATTEMPT`**; and
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-25
  MISSION`**.

None is waived, merged, closed, cured, or used as candidate evidence.

All frozen candidate, threshold, player, learning, accessibility, privacy,
save, route, world, equal MH-40, null-delta, `successor=null`, ending,
immutable-media `17 / 37,410,731`, diagnostic non-evidence/non-verifier, and
one-E2E meanings remain exact. No Quartermaster, Image Specialist,
Intelligence, reveal, maturity advance, release, schedule, automation, or
`FIRST RUN COMPLETE` action is authorized.

The dedicated Mission report/handoff commit and final `HEAD == origin/main`
proof are reported from Git after commit because this handoff cannot contain
the hash that first contains itself.
