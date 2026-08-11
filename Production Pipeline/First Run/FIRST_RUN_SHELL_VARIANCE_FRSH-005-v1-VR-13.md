# First Run Shell Variance - Credential-Absence Classification Mapping

Variance ID: `FRSH-005-v1-VR-13`

Disposition: **`FIRST RUN SHELL READY / EXACT PT06 CHILD-DIAGNOSTIC TO
CREDENTIAL-ABSENT RESULT MAPPING FROZEN / FRESH CREDENTIAL-CLEARED SCIENCE
ONE-RUN PROOF REQUIRED / FRSH-005-v1-VR-13`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / current Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-10`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-12`

Quartermaster return: `FRCA-005-v4`

Effective treatment / blueprint: `FRDT-005-v1-VR-01` /
`FRPX-005-v1-VR-01`

Functional report: `FRCE-005-v1-VR-05`

Mission source inspected:
`7ec84b0ba316ffd6680bc544fd40de7d3fc2f4fc`

Corrected inert code candidate:
`f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree:
`92b22fc56d79d18cf1abf7213c5268c9e4149830`

Immutable accepted-media manifest: `FRAM-001-v1`, file SHA-256
`a674c337b377de113eaa4c6763bd431afc73ab613374a76501aa8c5ce37e5437`,
exact `17 / 37,410,731`, canonical digest
`c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

Exact next recipient: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Mission decision

Mission accepts `FRVE-005-v7-VR-10` only as an honest rejected Science run.
That run proved exact child exit `87`, one child invocation, every activity
counter exact `0`, and every controlled-path absence exact `true`, but its
parent retained `REJECTED_CHILD_RESULT / SR06_CHILD_CLASSIFY /
ASSERTION_FAILED`. It did not retain the sole accepted semantic identity and
cannot be reinterpreted, repaired in place, or retried.

The frozen production failure diagnostic has no `code` field. At the expected
credential-cleared stop, the unchanged child emits `stage=PT06_CREDENTIAL_GATE`
with ordinal `0`, `sendStarted=false`, and its inherited cleanup absences true.
The disposable Science parent must derive `code=CREDENTIAL_ABSENT` from that
complete conjunction; it must not search for or require a child `code` member.
The parent classification boundary, not the production child, is the bounded
defect.

This variance therefore changes only the `SR06_CHILD_CLASSIFY` semantic map in
one disposable Science parent. It changes no launcher, pre-helper prefix,
production tail, combined byte, environment name, executable, argument,
parser, child diagnostic, helper, credential operation, live-root operation,
endpoint, prompt, request, response, ordinal, product, runtime, test, lesson,
media, manifest, path, cleanup, or production behavior. No tail variance is
authorized or necessary.

Variance classification: **`REQUIRED CORRECTION RESOLVED / SCIENCE PARENT
PT06 CREDENTIAL-ABSENCE SEMANTIC CLASSIFICATION`**.

## Exact unchanged child identity

Test-mode child contract remains
`HOST06-COMBINED-NO-REQUEST-RESULT-PS51-v1`. The test-mode child remains
byte-identical to the production child. Exact frozen identities remain:

```text
launcher byteLength=2001
launcher sha256=96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
prefix byteLength=976
prefix sha256=5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
tail byteLength=26068
tail sha256=e9815ce8f988bca0f1f9bd14a7ba50cfa4935b3d7a47492c95bfa90986b7070c
combined byteLength=27044
combined sha256=015dfd96befad29793892f1e15dc9ff4362ff8cec0ae4ce7b9c45b5da9e125f3
```

All four remain UTF-8 without BOM, LF-only, and include the final LF.
Combined bytes `[0..975]` remain byte-identical to the accepted prefix. The
sole process-environment name remains exact:

```text
HORIZON_ARCHIVE_HOST06_PREHELPER_V1
```

The exact executable, arguments, order, launcher, `ScriptBlock.Create`, call
operator, one-process boundary, parser, Windows limits, and ordered
`PH01..PH08` / `PT01..PT06` requirements remain those of the effective shell.
No marker, child-result emission change, second environment, source file,
stdin, encoded command, profile, nested shell, second process, callback,
alternate transport, or tail change is authorized.

## Frozen PT06 classification map

At `SR05_CHILD_CAPTURE`, the parent captures the exact child exit plus native
stdout and stderr logical records only in memory. Native line termination is
record framing and is not a schema field. The sole accepted credential-cleared
capture candidate is exactly:

```text
childExit=87
stdoutRecords=0
stderrRecords=1
HOST06_PRODUCTION_FAILURE|stage=PT06_CREDENTIAL_GATE|ordinal=0|sendStarted=false|helperRootAbsent=true|helperDllAbsent=true|liveRootAbsent=true|activeAbsent=true|productAbsent=true|provenanceAbsent=true
```

At `SR06_CHILD_CLASSIFY`, and only for that complete conjunction, the parent
must derive exactly:

```text
outcome=ACCEPTED_NO_REQUEST_STOP
earliestStage=PT06_CREDENTIAL_GATE
code=CREDENTIAL_ABSENT
childExit=87
```

`CREDENTIAL_ABSENT` is a bounded Science-parent semantic label derived from
the exact allowlisted stage and fixed zero-send state. It is not copied from
the child and the child is not required or permitted to emit it. The parent
must not replace this exact accepted mapping with `SR06_CHILD_CLASSIFY /
ASSERTION_FAILED` merely because the child diagnostic lacks a `code` field.

The mapping is exact and closed. A different exit; any stdout record; zero or
multiple stderr records; any missing, extra, reordered, duplicated,
non-ASCII, multiline, or over-limit field; a stage other than exact `PT06`;
nonzero ordinal; `sendStarted=true`; or any false inherited absence is not
accepted. It normalizes to the earliest applicable allowlisted rejection
stage and code under `FRSH-005-v1-VR-12`. No child message, object metadata,
exception, error category, FQID, path, command, or diagnostic body survives
classification.

Before any real child starts, the fresh Science parent must synthetic-test
this exact record and prove that it maps to the four accepted scalars above.
It must also prove that each single-field mutation and every malformed shape
is rejected. A parent that cannot pass this pre-child classifier proof stops
with `childInvocations=0`; it supplies no runtime evidence and may not be
repaired into a child-bearing run without beginning a new Science context.

## Exact bounded result and acceptance

The `SCIENCE_HOST06_COMBINED_RESULT_V1` schema, exact field order, ASCII,
single-line, final-LF, `1,024`-byte cap, outcome/stage/code allowlists,
numeric/boolean grammar, secrecy rejection, and malformed-record rejection
remain unchanged from `FRSH-005-v1-VR-12`.

After the exact SR06 mapping, the same parent must complete
`SR07_POSTFLIGHT_ABSENCE` and `SR08_ZERO_ACTIVITY`. It may emit the accepted
result at `SR09_RESULT_EMIT` only when every inherited parent-observed counter
and controlled-path absence also equals the complete accepted identity:

```text
SCIENCE_HOST06_COMBINED_RESULT_V1|outcome=ACCEPTED_NO_REQUEST_STOP|earliestStage=PT06_CREDENTIAL_GATE|code=CREDENTIAL_ABSENT|childExit=87|childInvocations=1|credentialValueReads=0|requestConstructions=0|sendAsyncCalls=0|directSends=0|ordinalsConsumed=0|helperRootAbsent=true|helperDllAbsent=true|liveRootAbsent=true|ordinal2StageAbsent=true|ordinal2TargetAbsent=true|ordinal2DecisionAbsent=true|ordinal3StageAbsent=true|ordinal3TargetAbsent=true|ordinal3DecisionAbsent=true|productRootAbsent=true|productRasterAbsent=true|productProvenanceAbsent=true|scienceFixtureRootsAbsent=true
```

The child diagnostic's `productAbsent` and `provenanceAbsent` fields prove the
tail-owned raster and provenance cleanup state. The result's
`productRootAbsent`, `productRasterAbsent`, and `productProvenanceAbsent`
fields remain independently parent-observed postflight facts. They are not
additional child-diagnostic fields and may not be required during SR06.

A valid SR06 capture does not become accepted if SR07, SR08, or SR09 fails.
Conversely, zero activity and final absence do not reconstruct or replace a
missing valid SR06 capture. Any nonexact final result is `HOLD`; there is no
partial match, after-the-fact reconstruction, or semantic reinterpretation.

## One fresh Science run

One fresh Office of Science Administrator must independently:

1. prove the unchanged launcher, prefix, tail, combined identities, prefix
   equality, parser, executable/argv/environment rendering, Windows limits,
   and ordered `PH01..PH08` / `PT01..PT06` presence;
2. exhaustively synthetic-test the unchanged bounded result schema plus the
   exact PT06 child-diagnostic mapping and its single-field/malformed
   rejections before child creation;
3. remove `OPENAI_API_KEY` from the parent process environment without reading
   its value and invoke the exact unchanged child exactly once;
4. require the complete accepted result above, including exact helper cleanup,
   all controlled-path absences, and exact zero activity; and
5. remove its disposable parent harness/fixture root, issue one new versioned
   `POLISH VIABILITY READY`, `REVISE`, or `HOLD` artifact, and route only to a
   fresh Mission Captain.

The child invocation count is lifetime-scoped to that fresh Science run. The
child consumed in `FRVE-005-v7-VR-10` belongs to the rejected prior run and is
never retried. Once the new child starts, no parent correction, second child,
or retry exists. Any rejected or absent bounded result is `HOLD`.

Historical ordinal `1` remains consumed, opaque, inaccessible, and unchanged.
Ordinals `2` and `3` remain unstarted and unconsumed. Science may not read a
credential value, allocate the live root or product target, construct a
request, call `SendAsync`, send the API, consume an ordinal, inspect
media/pixels, or import anything.

## Preserved product, player, and protected boundaries

The player-facing address remains `FR-03 / Chapter II - Drowned Archive /
Host 06`. Current maturity remains continuity `FR2`; physical-host expression
`FR0 - 1 accepted shared compression / 1 exact / 10 missing`; learning `FR2`;
behavior/save/recovery `FR1`; content `FR2`; presentation `FR3`; and prior
bounded release proof `FR4`. This parent-only correction changes no player
surface and advances no maturity.

The intended Host 05-to-dry-Host 06 outcome; sole unchanged `L02-03`; entry,
active states, completion, exits, retry, return, resume, hard stop; copy,
focus, announcement, keyboard, pointer, touch, switch-like activation,
effective `200%`, forced-color, reduced-motion; privacy, save, offline,
performance, PBA, and complete E2E requirements remain exactly those of the
effective shell. No production role is authorized by this variance.

The one-path rail, both MH-40 outcomes, equal dignity, all null deltas, shared
RP-012 ending, and `successor=null` remain immutable. No branch, packet,
lesson, Host 07, reward, access, identity, authority, world response,
hidden-lore answer, successor, RP-013, or post-ending content exists.

The immutable `FRAM-001-v1` manifest and accepted-media bytes/pixels remain
untouched. No image/audio/media generation, edit, variation, replacement,
import, decode, render, preview, publication, or reveal is authorized.

The repository QA quarantine, protected PDF, training tree, Martin's real
browser/profile/save, hidden lore, OS-temp parent, ordinal-1 residual, real
managed directory, user work, VR-65, and every opaque residual remain
protected. All thirteen inherited process records and the separate Commandant
filename/search-scope record remain separate and **OPEN**. This variance
closes, cures, merges, waives, renumbers, accesses, or reclassifies none.

## Permitted files, validation, rollback, and definition of done

Mission changes only this variance and `NEXT_INSTANCE_HANDOFF.md`. Science may
later change only one versioned Science variance and the synchronized handoff;
its disposable parent harness and fixtures must remain outside the repository
or be removed before commit. Product, tests, runtime, lesson, save, media,
manifest, candidate, map, scoreboard, maturity, process classification,
residual, schedule, and automation files are patch-forbidden.

Mission validation is contract, authority, identity, diff, and Git only.
Mission runs no launcher, child, helper, fixture, test, build, preview,
browser, E2E, API, generation, media, pixel, cleanup, or product command.
Science validation is only the exact fresh credential-cleared, no-request run
above. All candidate-bearing and release gates remain blocked.

Definition of done is one fresh Science artifact retaining the exact complete
accepted result, independently proving the corrected SR06 semantic mapping,
helper cleanup, all controlled-path absences, exact zero activity, and
ordinals `2`/`3` unstarted/unconsumed, then returning to Mission. Anything
else is `HOLD`.

Rollback removes only this variance and restores the immediately preceding
handoff by explicit file content. It never resets the repository or touches
product, media, manifests, controlled paths, protected state, user work, or
prior planning history.

## Change history, Mission signature, and exact handoff

`FRSH-005-v1-VR-13` supersedes only the erroneous or ambiguous Science-parent
interpretation that a credential-absent production failure must carry a child
`code` field, or that product-root postflight fields belong to the child
diagnostic. Every production identity and all other clauses in the effective
shell remain unchanged.

Mission read the complete active intake, workflow, registry, full Mission
profile, complete `FRVE-005-v7-VR-10`, complete
`FRSH-005-v1-VR-12`, complete `FRVE-005-v7-VR-09`, complete
`FRSH-005-v1-VR-11`, `FRCA-005-v4`, complete
`FRSH-005-v1-VR-10`, complete `FRSH-005-v1-VR-09`, decisive
`FRVE-005-v7-VR-08`, complete `FRWO-005-v7`, decisive
`FRVE-005-v7-VR-03`, the effective shell, treatment, blueprint,
`FRCE-005-v1-VR-05`, immutable `FRAM-001-v1`, release-map/scoreboard
controls, and both exact literal blocks. Starting `HEAD` was exact
`7ec84b0ba316ffd6680bc544fd40de7d3fc2f4fc`.

Mission changed no product or controlled state and executed none of the
forbidden operations above. The dedicated contribution contains only this
variance and the synchronized handoff. It is committed and pushed at the
shell gate, and exact `HEAD == origin/main` is proved before the handoff is
active.

After synchronization, one fresh Office of Science Administrator /
`office_of_science_administrator` reads the complete active intake, full
Science profile, this complete variance, complete `FRVE-005-v7-VR-10`,
complete `FRSH-005-v1-VR-12`, complete `FRVE-005-v7-VR-09`, complete
`FRSH-005-v1-VR-11`, `FRCA-005-v4`, complete
`FRSH-005-v1-VR-10`, complete `FRSH-005-v1-VR-09`, decisive
`FRVE-005-v7-VR-08`, complete `FRWO-005-v7`, decisive
`FRVE-005-v7-VR-03`, the effective shell, treatment, blueprint,
`FRCE-005-v1-VR-05`, immutable `FRAM-001-v1`, and both exact literal blocks.
Science performs only the exact fresh one-run proof above.

Science may not retry after its child begins; route to Quartermaster; execute
generation/API; allocate the live root; construct a request; call `SendAsync`;
consume ordinal `2`; inspect media/pixels; change product/tests; run E2E;
reveal; advance maturity; close an OPEN record; access a residual or VR-65;
schedule; automate; push; release; or call `FIRST RUN COMPLETE`.

Mission Captain signs **`FIRST RUN SHELL READY / EXACT PT06
CHILD-DIAGNOSTIC TO CREDENTIAL-ABSENT RESULT MAPPING FROZEN / FRESH SCIENCE
ONE-RUN PROOF REQUIRED / FRSH-005-v1-VR-13`** from exact source
`7ec84b0...`.
