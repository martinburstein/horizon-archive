# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`FIRST RUN SHELL READY / ONE SCALAR PRODUCTION BUILD
PROOF ONLY / FRSH-003-v1-VR-29`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Exact next owner: **fresh Combat Engineer**

Immediate control: `FRSH-003-v1-VR-29`

Immediate return / predecessor authority: Mission VR-28 hold /
`FRSH-003-v1-VR-28`

Mission VR-29 inspected source:
`85c426872b2dce6be4c5bedc7e595f7a60a54cfa`

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

VR-29 independently adjudicated the exact VR-27 fact: native build exit `0`;
Vite `built in 6.39s`; visible output contained exactly one literal `217
modules transformed.` marker and exactly one completion marker; normalized
proof remained unavailable and the wrapper exited `1`, consistent with a
completion-regex or output-capture proof defect. Combat did not rerun and
performed no post-build command or repository write.

The consumed VR-27 authority remains **`HOLD / PRODUCTION BUILD EXECUTION-
CONTROL FAILURE / NO RERUN`**, not a product/build defect. Exact raw captured
output is not durably available as a trusted artifact, so output-only reparse
is not authorized. VR-29 authorizes exactly one corrected proof-only build.

VR-29 separately preserves **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL
PATHNAME OUTPUT / OPEN / VR-28 MISSION STAGING`**. The warning was not
discovery or enumeration, is not candidate evidence, and does not invalidate
the scalar parser. Silent two-document staging is docs-process authority only
and grants no production authority.

Fresh Combat may run only scalar `git rev-parse HEAD` and `git rev-parse
origin/main`, require equality, then fully suppressed tracked and index quiet
checks requiring exit `0`. No untracked-cleanliness claim is permitted.

Combat may then invoke exactly one `npm run build` from
`horizon-archive-game`, with execution-tool timeout `60000ms`, using the exact
VR-29 wrapper. It captures and suppresses the build stream; after ANSI strip it
counts the literal `217 modules transformed.` substring and uses exactly:

```text
(?m)^[^\r\n]*\bbuilt in\s+([0-9]+(?:\.[0-9]+)?)\s*(ms|s)\s*$
```

The wrapper emits only:

```text
moduleCount=<n> completionCount=<n> nativeExit=<n>
```

It requires exact `moduleCount=1`, `completionCount=1`, and `nativeExit=0`.
Missing, duplicate, nonzero, null, capture, timeout, or wrapper failure is
fail-closed. No captured build stream, path, or filename may be emitted.

Stop immediately after the sole build whether it passes or fails. Run no
post-build command and perform no repository write. Return the scalar result
and exact disposition to a fresh Mission Captain. No other build, test,
validator, fixture, PBA/media/offline/dependency/source-map/product-drift/
performance, preview, served request, port/PID, containment, root, browser,
E2E, diagnostic, live-review, cleanup, product, media, protected-state,
user-state, reveal, maturity, or downstream-role action is authorized.

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

No build, test, live, product, media, protected-state, user-state, reveal, or
maturity action occurred during Mission VR-29. No Quartermaster, Image
Specialist, Intelligence, release, schedule, automation, or `FIRST RUN
COMPLETE` action is authorized.

The dedicated Mission shell/handoff commit and final `HEAD == origin/main`
proof are reported from Git after commit because this handoff cannot contain
the hash that first contains itself.
