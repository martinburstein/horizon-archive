# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`FIRST RUN SHELL READY / SYNCHRONIZATION LOCALIZATION
ONLY / FRSH-003-v1-VR-33`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Exact next owner: **fresh Combat Engineer**

Immediate control: `FRSH-003-v1-VR-33`

Immediate return / predecessor authority: Combat VR-32 synchronization-
localization execution-control failure / `FRSH-003-v1-VR-32`

Mission VR-33 inspected and synchronized source:
`caae8eb918ecbc6c82d43bcaac6d656fc326f4e7`

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

VR-33 independently adjudicates the VR-32 Combat return. The return proved
`headEqOrigin=true`, then reported `trackedQuietExit=null` because the native
quiet command and `$LASTEXITCODE` capture crossed separate shell tool calls.
That null is not evidence of the native command's exit. It proves neither
tracked drift nor tracked cleanliness. No cached quiet or frozen-blob result
from VR-32 is accepted.

Fresh Combat may run only the VR-33 sequence. Every native command must be the
sole native command in its own execution-tool call. Its complete native output
and diagnostics must be captured and suppressed, and its scalar value and
`$LASTEXITCODE` must be captured and emitted from that same call. Never invoke
a native command in one shell and read its exit in another.

Emit only, in order:

```text
headMatch=<true|false> head=<40-lowercase-hex|null> headExit=<integer|null>
originMainMatch=<true|false> originMain=<40-lowercase-hex|null> originMainExit=<integer|null>
trackedQuietExit=<integer|null>
indexQuietExit=<integer|null>
frrcBlobMatch=<true|false> frrcBlob=<40-lowercase-hex|null> frrcBlobExit=<integer|null>
e2eBlobMatch=<true|false> e2eBlob=<40-lowercase-hex|null> e2eBlobExit=<integer|null>
staticTestBlobMatch=<true|false> staticTestBlob=<40-lowercase-hex|null> staticTestBlobExit=<integer|null>
appBlobMatch=<true|false> appBlob=<40-lowercase-hex|null> appBlobExit=<integer|null>
drownedArchiveBlobMatch=<true|false> drownedArchiveBlob=<40-lowercase-hex|null> drownedArchiveBlobExit=<integer|null>
packageBlobMatch=<true|false> packageBlob=<40-lowercase-hex|null> packageBlobExit=<integer|null>
```

Exact pass requires both revision matches `true`, both revision hashes equal
`caae8eb918ecbc6c82d43bcaac6d656fc326f4e7`, every native exit `0`, both quiet
exits `0`, all six blob matches `true`, and the six hashes equal their exact
VR-33 values. Stop at the first non-exact scalar. Do not emit a literal
operand, pathname, filename, diagnostic, command, timing, captured stream, or
any other field. Do not inspect or claim untracked cleanliness.

For tracked quiet, the command and capture must occur in the same call, e.g.
`git diff --quiet *> $null; $e=$LASTEXITCODE; "trackedQuietExit=$e"`. Use the
same atomic form for cached quiet. Each revision/blob `git rev-parse` must
capture its hash and native exit in the same call and emit only its authorized
named scalar line.

Stop immediately after the sixth exact blob line. Run no fixture, PBA, build,
test, validator, preview, served identity, port/PID, containment, root,
browser, E2E, diagnostic, live-summary verification, cleanup, or live review.
Perform no repository write and run no post-check command. Return to fresh
Mission.

VR-22 focused `68/68`, related `74/74`, cold full `972/972`, validators
`40/40`; VR-30 six exact frozen blob scalars; and VR-30 production build
`moduleCount=1 builtSubstringCount=1 nativeExit=0` recorded in `8.8s` remain
accepted without rerun. The six VR-33 checks localize current identity only;
they do not replace or reopen the inherited checkpoint.

The fixture and scalar PBA remain pending. Dynamic Host 05 `<=2ms`, sampled
task `<=100ms`, runtime request, and offline runtime gates remain reserved for
the later sole E2E/live checkpoint.

No status, diff-check, listing, discovery, search, glob, broad scan,
protected-path probe, untracked-path check, filename-capable output, content
parse, summary, verifier, cleanup, or synchronization command beyond the exact
VR-33 sequence is authorized.

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
