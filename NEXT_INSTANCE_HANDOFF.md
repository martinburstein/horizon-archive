# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`FIRST RUN SHELL READY / REMAINING PRE-LIVE FIXTURE
AND SCALAR PBA ONLY / FRSH-003-v1-VR-31`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Exact next owner: **fresh Combat Engineer**

Immediate control: `FRSH-003-v1-VR-31`

Immediate return / predecessor authority: Combat VR-30 proof return /
`FRSH-003-v1-VR-30`

Mission VR-31 inspected source:
`d8796afe0df017b1c06a01eb795f5b5192007b2c`

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

VR-31 accepts without rerun the immutable checkpoint: VR-22 focused `68/68`,
related `74/74`, cold full `972/972`, validators `40/40`; VR-30 six exact
frozen blob scalars; and VR-30 production build
`moduleCount=1 builtSubstringCount=1 nativeExit=0`, recorded in `8.8s`.

Fresh Combat may run only scalar `git rev-parse HEAD` and `git rev-parse
origin/main`, require equality, then fully suppressed tracked and index quiet
checks requiring exit `0`. No untracked-cleanliness claim is permitted.

Combat must not rerun any accepted blob, focused, related, full, validator, or
production-build gate. It may invoke exactly one manifest-owned
`npm run build:td012-fixture` from `horizon-archive-game`, with execution-tool
timeout `60000ms`, through the complete safe native wrapper in VR-31. The
wrapper suppresses the stream and emits only:

```text
fixtureModuleCount=<n> fixtureBuiltSubstringCount=<n> nativeExit=<n>
```

Exact pass is `fixtureModuleCount=1 fixtureBuiltSubstringCount=1 nativeExit=0`.
Any other result is fail-closed, no rerun, no PBA, and immediate return to a
fresh Mission Captain.

Only after exact fixture success may Combat invoke the complete VR-31 scalar
PBA/media/source-map wrapper once from repository root, timeout `60000ms`.
It scalarizes the exact manifest traversal and threshold logic, emits no
filename, and requires exactly:

```text
jsBytes=1666665 cssBytes=119247 mediaCount=17 mediaBytes=37410731 sourceMapCount=0 scanExit=0
```

Stop immediately after that wrapper whether it passes or fails. Run no post-
scan command and perform no repository write. On exact success return
**`REMAINING PRE-LIVE FIXTURE AND SCALAR PBA PASS / STOP / RETURN TO FRESH
MISSION`**. Otherwise return **`HOLD / REMAINING PRE-LIVE EXECUTION-CONTROL OR
EVIDENCE FAILURE / NO RERUN / RETURN TO FRESH MISSION`**.

Package/dependency, product-source, exact test/control, and offline-source
identity are carried only by the already accepted six frozen blobs. No broad
dependency, lockfile, import, URL/network, repository, source, pathname, or
filename scan is authorized. Source-map proof is confined to the scalar PBA
wrapper. Dynamic Host 05 `<=2ms`, sampled task `<=100ms`, runtime request, and
offline runtime gates remain reserved for the later sole E2E/live checkpoint.

No preview, served identity, port/PID, containment, root, browser, E2E,
diagnostic, live-summary verification, cleanup, live-review, product, media,
protected-state, user-state, reveal, or maturity action is authorized. Return
to fresh Mission before any of them.

All OPEN divergences remain separate and OPEN:

- **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN / VR-17`**;
- **`UNAUTHORIZED DIVERGENCE / BROAD REPOSITORY FILENAME ENUMERATION / OPEN /
  VR-23`**;
- **`UNAUTHORIZED DIVERGENCE / UNTRACKED PATHNAME ENUMERATION / OPEN / VR-24
  COMBAT ATTEMPT`**;
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-25
  MISSION`**; and
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-28
  MISSION STAGING`**.

None is waived, merged, closed, cured, or used as candidate evidence.

All frozen candidate, threshold, player, learning, accessibility, privacy,
save, route, world, equal MH-40, null-delta, `successor=null`, ending,
immutable-media `17 / 37,410,731`, diagnostic non-evidence/non-verifier, and
one-E2E meanings remain exact.

No Quartermaster, Image Specialist, Intelligence, release, schedule,
automation, or `FIRST RUN COMPLETE` action is authorized.

The dedicated Mission shell/handoff commit and final `HEAD == origin/main`
proof are reported from Git after commit because this handoff cannot contain
the hash that first contains itself.
