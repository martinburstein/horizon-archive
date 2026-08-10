# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`FIRST RUN SHELL READY / ONE CORRECTED PRODUCTION BUILD
ONLY / FRSH-003-v1-VR-24`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Exact next owner: **fresh Combat Engineer**

Immediate authority: `FRSH-003-v1-VR-24`

Immediate return evidence: `FRSH-003-v1-VR-23` /
`FRCE-003-v1-VR-22` / `FRSH-003-v1-VR-22`

Mission VR-24 inspected source:
`e584c8021105a9c571db91756f90aea99952392b`

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

VR-24 authorizes one corrected production-build-only invocation from the newly
synchronized Combat source. VR-22's integrity/static preflight, focused
`68/68`, related `74/74`, cold full `972/972`, and forty validator passes
remain truthful but incomplete evidence and must not be rerun.

Combat must first prove start synchronization and clean tracked/index state
without filename enumeration. It must then prove only these exact authorized
disk identities:

- `horizon-archive-game/package.json` blob
  `2c23c0a59f62af0463fa54bb1c8465aa9f6bb2da`;
- `Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json`
  blob `fc91a863be99b11c44405071324e3502b959e621`; and
- manifest entry `production-build`: workdir `horizon-archive-game`, command
  `npm run build`, timeout `60000`, expected exit `0`, output owner
  `horizon-archive-game/dist`.

Combat then runs the exact VR-24 wrapper once with workdir
`horizon-archive-game` and execution timeout `60000ms`. The wrapper temporarily
uses nonterminating native-stream handling, disables PowerShell native stderr
promotion when supported, captures combined output, captures and evaluates
`$LASTEXITCODE` immediately after the sole native invocation, restores both
preferences in `finally`, ANSI-normalizes output, and requires exactly one
`217 modules transformed` marker plus exactly one Vite `built in` marker.

After success or failure, stop immediately and return one new versioned Combat
report plus this handoff to another fresh Mission Captain. Success syntax is
**`PRODUCTION BUILD EXECUTION-CONTROL PASS / STOP / RETURN TO FRESH MISSION`**.
Failure syntax is **`HOLD / PRODUCTION BUILD EXECUTION-CONTROL FAILURE / NO
RERUN / RETURN TO FRESH MISSION`**.

Do not run `node --check`, focused, related, full, validators, fixture build,
PBA/media/offline/dependency/source-map/product-drift/performance, preview,
served request, port/PID, containment, root, browser, E2E, diagnostic, summary,
verifier, cleanup, or live work. Do not make a product/control repair or begin
a downstream role.

The **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN / VR-17`**
and **`UNAUTHORIZED DIVERGENCE / BROAD REPOSITORY FILENAME ENUMERATION / OPEN /
VR-23`** classifications remain separate and OPEN. Neither is waived, merged,
closed, or used as evidence.

All frozen candidate, threshold, player, learning, accessibility, privacy,
save, route, world, equal MH-40, null-delta, `successor=null`, ending,
immutable-media `17 / 37,410,731`, diagnostic non-evidence/non-verifier, and
one-E2E meanings remain exact. No product/control change, Quartermaster, Image
Specialist, Intelligence, reveal, maturity advance, release, schedule,
automation, or `FIRST RUN COMPLETE` action is authorized.

The dedicated Mission report/handoff commit and final `HEAD == origin/main`
proof are reported from Git after commit because this handoff cannot contain
the hash that first contains itself.
