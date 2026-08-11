# First Run Shell Variance - Combined Child Result Retention

Variance ID: `FRSH-005-v1-VR-12`

Disposition: **`FIRST RUN SHELL READY / ONE BOUNDED TEST-MODE COMBINED-CHILD
RESULT SCHEMA FROZEN / FRESH CREDENTIAL-CLEARED SCIENCE ONE-RUN PROOF
REQUIRED / FRSH-005-v1-VR-12`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / current Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-09`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-11`

Quartermaster return: `FRCA-005-v4`

Effective treatment / blueprint: `FRDT-005-v1-VR-01` /
`FRPX-005-v1-VR-01`

Functional report: `FRCE-005-v1-VR-05`

Mission source inspected:
`d0800c3fc050347ac6e80ac971e49972a03f6753`

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

Mission accepts the static identity, parser, Windows-limit, stage-order,
synthetic non-media, zero-activity, and final-absence evidence in
`FRVE-005-v7-VR-09`. It does not accept the combined child runtime because the
Science parent collapsed every unexpected child result or parent assertion to:

```text
SCIENCE_COMBINED_FIXTURE_FAILURE|code=UNEXPECTED_OR_ASSERTION|childInvocations=1
```

That record proves one invocation but does not retain the exact child exit,
accepted child diagnostic, earliest failing child stage, or first failing
Science assertion. Static control flow and final absence cannot replace that
missing runtime result.

This variance repairs only the result-retention contract for a disposable
Science test parent. It changes no launcher byte, environment name, combined
value byte, production diagnostic, helper, endpoint, prompt, request, ordinal,
source, product, test, runtime, lesson, media, manifest, path, or cleanup rule.
The production child remains exactly the frozen same-process child in
`FRSH-005-v1-VR-11`; no test hook or test-mode branch is inserted into it.

One fresh Science context may run exactly one credential-cleared, no-request
child under the bounded parent contract below. Acceptance requires one
explicit normalized result showing that the exact child traversed the accepted
pre-helper and helper tail, cleaned the helper, and stopped at the credential
gate before live-root allocation, request construction, `SendAsync`, or
ordinal consumption. Any other result is `HOLD` and authorizes no retry.

Variance classification: **`REQUIRED CORRECTION RESOLVED / SCIENCE
COMBINED-CHILD RESULT RETENTION AND FIRST-ASSERTION LOCALIZATION`**.

## Exact unchanged test-mode child identity

Test-mode child contract ID:
`HOST06-COMBINED-NO-REQUEST-RESULT-PS51-v1`.

The test-mode child is byte-identical to the production child. Science must
extract the same literal blocks and normalize only repository CRLF framing
into the already-frozen LF byte domain. The exact identities remain:

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

All four values remain UTF-8 without BOM, LF-only, and include the final LF.
Combined bytes `[0..975]` must remain byte-identical to the accepted prefix.
The sole process-environment name remains exact:

```text
HORIZON_ARCHIVE_HOST06_PREHELPER_V1
```

The executable, arguments, order, launcher, parser, `ScriptBlock.Create`, call
operator, and one-process boundary remain exact. No tail variance, marker,
second environment name, source file, stdin payload, encoded command, profile,
nested shell, second process, callback, or alternate transport is authorized.

## Frozen Science-parent stages

The disposable parent owns these exact ordered stages:

| Order | Stage ID | First assertion group |
| ---: | --- | --- |
| 1 | `SR01_STATIC_IDENTITY` | launcher/prefix/tail/combined bytes, hashes, parser, prefix equality, argv/environment limits |
| 2 | `SR02_NORMALIZER_SELF_TEST` | accepted and rejected PH/production diagnostic and result-schema synthetic cases |
| 3 | `SR03_CHILD_PREPARE` | credential clearing without value read, exact environment, exact one-child command |
| 4 | `SR04_CHILD_INVOKE` | exactly one native child invocation |
| 5 | `SR05_CHILD_CAPTURE` | exact exit and stdout/stderr record cardinality captured in memory |
| 6 | `SR06_CHILD_CLASSIFY` | PH or production diagnostic normalized to the earliest allowlisted child stage and code |
| 7 | `SR07_POSTFLIGHT_ABSENCE` | helper, live, ordinal, product, and Science-fixture controlled paths absent |
| 8 | `SR08_ZERO_ACTIVITY` | credential value, request, send, and ordinal counters exact zero |
| 9 | `SR09_RESULT_EMIT` | exactly one schema-valid bounded result emitted |

Before every assertion group, the parent sets its current `SR` stage. A parent
assertion may not escape as an exception-derived record or collapse to an
unlocated generic result. It must normalize to the current earliest `SR` stage
and an allowlisted code. A valid child diagnostic takes precedence and retains
the exact earliest child stage instead.

The child-stage allowlist is exactly:

```text
PH01_ENV_RETRIEVAL
PH02_PARSE_SUCCESS
PH03_INVOCATION_ENTRY
PH04_PS51_VERSION
PH05_X64_PROCESS
PH06_ROOT_ABSENT
PH07_ROOT_CREATE_ENTRY
PH08_ROOT_CREATE_COMPLETE
PT01_TAIL_ENTRY
PT02_HELPER_SOURCE
PT03_HELPER_COMPILE
PT04_HELPER_LOAD_IDENTITY
PT05_HELPER_CLEANUP
PT06_CREDENTIAL_GATE
```

No later production stage is reachable in the credential-cleared fixture. A
reported `PT07..PT18`, ordinal `2|3`, request construction, `SendAsync`, live
root, or product target is terminal `HOLD`.

## Exact bounded result schema

The parent emits exactly one ASCII, single-line, LF-terminated record, at most
`1,024` bytes, in this exact field order:

```text
SCIENCE_HOST06_COMBINED_RESULT_V1|outcome=<outcome>|earliestStage=<stage>|code=<code>|childExit=<exit>|childInvocations=<count>|credentialValueReads=<count>|requestConstructions=<count>|sendAsyncCalls=<count>|directSends=<count>|ordinalsConsumed=<count>|helperRootAbsent=<bool>|helperDllAbsent=<bool>|liveRootAbsent=<bool>|ordinal2StageAbsent=<bool>|ordinal2TargetAbsent=<bool>|ordinal2DecisionAbsent=<bool>|ordinal3StageAbsent=<bool>|ordinal3TargetAbsent=<bool>|ordinal3DecisionAbsent=<bool>|productRootAbsent=<bool>|productRasterAbsent=<bool>|productProvenanceAbsent=<bool>|scienceFixtureRootsAbsent=<bool>
```

`outcome` is exactly one of:

```text
ACCEPTED_NO_REQUEST_STOP
REJECTED_CHILD_RESULT
REJECTED_FIXTURE_RESULT
```

`earliestStage` is exactly one allowlisted `PH`, `PT`, or `SR` stage above.
`code` is exactly one of:

```text
CREDENTIAL_ABSENT
PH_FAILURE
TAIL_FAILURE
CHILD_INVOCATION_MISMATCH
CHILD_EXIT_MISMATCH
CHILD_STDOUT_REJECTED
CHILD_STDERR_REJECTED
DIAGNOSTIC_SCHEMA_REJECTED
CONTROLLED_PATH_PRESENT
ACTIVITY_NONZERO
ASSERTION_FAILED
RESULT_SCHEMA_REJECTED
```

`childExit` is exact decimal `0`, `86`, or `87`; `childInvocations` and all
activity fields are nonnegative base-10 integers without sign or leading zero;
every boolean is exact lowercase `true|false`. Missing, extra, reordered,
duplicated, multiline, non-ASCII, over-limit, non-allowlisted, or otherwise
malformed content is not accepted evidence.

The accepted result is only this complete semantic identity:

```text
outcome=ACCEPTED_NO_REQUEST_STOP
earliestStage=PT06_CREDENTIAL_GATE
code=CREDENTIAL_ABSENT
childExit=87
childInvocations=1
credentialValueReads=0
requestConstructions=0
sendAsyncCalls=0
directSends=0
ordinalsConsumed=0
helperRootAbsent=true
helperDllAbsent=true
liveRootAbsent=true
ordinal2StageAbsent=true
ordinal2TargetAbsent=true
ordinal2DecisionAbsent=true
ordinal3StageAbsent=true
ordinal3TargetAbsent=true
ordinal3DecisionAbsent=true
productRootAbsent=true
productRasterAbsent=true
productProvenanceAbsent=true
scienceFixtureRootsAbsent=true
```

No partial match, static inference, final-absence-only result, reconstructed
record, generic failure, or after-the-fact reinterpretation is acceptance.

## Diagnostic normalization and secrecy

The parent captures child exit, stdout, and stderr only in memory. For accepted
credential absence, stdout must contain zero records and stderr must contain
exactly one schema-valid `HOST06_PRODUCTION_FAILURE|` record with stage
`PT06_CREDENTIAL_GATE`, ordinal `0`, `sendStarted=false`, and every inherited
absence boolean true. The parent then emits only the bounded Science result
and discards the captured child record.

An exact exit-`86` `HOST06_PREHELPER_FAILURE|` record is normalized only under
the existing `FRSH-005-v1-VR-09` predicate/class/FQID allowlists and size,
ASCII, order, and cardinality limits. This variance neither expands nor
weakens that diagnostic. The Science result retains only its allowlisted
earliest PH stage and `PH_FAILURE`; it does not copy class or FQID through.

An exact exit-`87` production failure before `PT06` is normalized only to its
allowlisted earliest PT stage and `TAIL_FAILURE`. Any output or exit mismatch
uses the first applicable `SR` stage and exact allowlisted rejection code.

Neither the child capture nor the Science result may retain a message, stack,
exception text, source excerpt, command, path, username, timestamp, process
detail, key, credential, header, request/response, JSON, base64, media byte,
pixel, payload, native tuple, helper/DLL byte, diagnostic body, residual, or
opaque value. Production success/failure schemas and provenance remain
unchanged. This test result never enters product runtime, save, provenance,
media, or player-facing evidence.

## One-run Science acceptance

One fresh Office of Science Administrator must independently:

1. prove the exact unchanged child identities, parser, prefix equality,
   executable/argv/environment rendering, and ordered `PH01..PH08` /
   `PT01..PT06` presence;
2. synthetic-test the Science result normalizer for every outcome, stage, code,
   malformed-record rejection, secrecy field, and exact accepted semantic
   identity without creating media or a live/product path;
3. remove `OPENAI_API_KEY` from the parent process environment without reading
   its value, invoke the exact child exactly once, and capture the exact child
   result in memory;
4. require the one accepted result above, including helper DLL/root cleanup,
   every controlled-path absence, and exact zero activity; and
5. remove its disposable fixture harness/root, issue one new versioned
   `POLISH VIABILITY READY`, `REVISE`, or `HOLD` artifact, and route only to a
   fresh Mission Captain.

The child invocation count is lifetime-scoped to this fresh Science run. A
rejected shell submission before child creation is not evidence but must not
be repaired by silently beginning a second wrapper run after the first child.
Once the child starts, no second child or retry exists. Any rejected or absent
bounded result is `HOLD`.

Historical ordinal `1` remains consumed, opaque, inaccessible, and unchanged.
Ordinals `2` and `3` remain unstarted and unconsumed. Direct Image API sends
remain exact `0`. Science may not allocate the live root or product target,
construct a request object, call `SendAsync`, inspect media/pixels, or import
anything.

## Preserved product, player, validation, and protected boundaries

The player-facing address remains `FR-03 / Chapter II - Drowned Archive /
Host 06`. The intended outcome, entry, active states, completion, exits, hard
stop, copy ownership, exact unchanged `L02-03`, focus/recovery, keyboard,
pointer, touch, switch-like activation, effective `200%`, forced-color,
reduced-motion, privacy, save, offline, performance, PBA, and complete E2E
requirements remain those of the effective shell. This variance creates no
player-visible change and authorizes no production stage.

The one-path rail, both MH-40 outcomes, equal dignity, all null deltas, shared
RP-012 ending, and `successor=null` remain immutable. No branch, packet,
lesson, Host 07, reward, access, identity, authority, world response,
hidden-lore answer, successor, RP-013, or post-ending content exists.

The immutable `FRAM-001-v1` manifest and accepted-media bytes/pixels remain
untouched. No image/audio/media generation, edit, variation, replacement,
import, decode, render, preview, publication, or reveal is authorized. The
repository QA quarantine, protected PDF, training tree, Martin's browser/
profile/save, hidden lore, OS-temp parent, ordinal-1 residual, real managed
directory, user work, VR-65, and every opaque residual remain protected.

All thirteen inherited process records and the separate Commandant filename/
search-scope record remain separate and **OPEN**. This variance closes, cures,
merges, waives, renumbers, accesses, or reclassifies none.

Maturity impact: none. `FR-03` remains continuity `FR2`; physical-host
expression remains `FR0 - 1 accepted shared compression / 1 exact / 10
missing`; learning `FR2`; behavior/save/recovery `FR1`; content `FR2`;
presentation `FR3`; and prior bounded release proof `FR4`.

## Permitted files, validation, rollback, and definition of done

Mission changes only this variance and `NEXT_INSTANCE_HANDOFF.md`. Science may
later change only one versioned Science variance and the synchronized handoff;
its disposable parent harness and fixtures must be outside the repository or
removed before commit. Product, tests, runtime, lesson, save, media, manifest,
candidate, map, scoreboard, maturity, process classification, residual,
schedule, and automation files are patch-forbidden.

Mission validation is contract/authority/identity/diff/Git only. Mission runs
no launcher, helper, fixture, test, build, preview, browser, E2E, API,
generation, media, pixel, cleanup, or product command. Science validation is
only the exact one-run nonsecret fixture above. All candidate-bearing and
release gates remain blocked.

Definition of done for this variance is one fresh Science artifact retaining
the exact accepted bounded result, independently proving helper cleanup and
all controlled-path absences, reporting sends `0` and ordinals `2`/`3`
unstarted/unconsumed, and returning to Mission. Anything else is `HOLD`.

Rollback removes only this variance and restores the immediately preceding
handoff by explicit file content. It never resets the repository or touches
product, media, accepted manifests, controlled paths, protected state, user
work, or prior planning history.

## Mission validation, signature, and exact handoff

Mission read the complete active intake, workflow, registry, full Mission
profile, complete `FRVE-005-v7-VR-09`, complete
`FRSH-005-v1-VR-11`, `FRCA-005-v4`, complete
`FRSH-005-v1-VR-10`, complete `FRSH-005-v1-VR-09`, decisive
`FRVE-005-v7-VR-08`, complete `FRWO-005-v7`, decisive
`FRVE-005-v7-VR-03`, the complete effective shell, treatment, blueprint,
`FRCE-005-v1-VR-05`, immutable `FRAM-001-v1`, current release map/
scoreboard controls, and both exact literal blocks. Starting `HEAD` was exact
`d0800c3fc050347ac6e80ac971e49972a03f6753`.

Mission changed no product or controlled state and executed none of the
forbidden operations above. The dedicated contribution contains only this
variance and the synchronized handoff. It is committed and pushed at the
shell gate, and exact `HEAD == origin/main` is proved before the handoff is
active.

After synchronization, one fresh Office of Science Administrator /
`office_of_science_administrator` reads the complete active intake, full
Science profile, this complete variance, complete `FRVE-005-v7-VR-09`,
complete `FRSH-005-v1-VR-11`, `FRCA-005-v4`, complete
`FRSH-005-v1-VR-10`, complete `FRSH-005-v1-VR-09`, decisive
`FRVE-005-v7-VR-08`, complete `FRWO-005-v7`, decisive
`FRVE-005-v7-VR-03`, the effective shell, treatment, blueprint,
`FRCE-005-v1-VR-05`, immutable `FRAM-001-v1`, and both exact literal blocks.
Science performs only the exact one-run credential-cleared fixture above.

Science may not retry after the child begins; route to Quartermaster; execute
generation/API; allocate the live root; construct a request; call `SendAsync`;
consume ordinal `2`; inspect media/pixels; change product/tests; run E2E;
reveal; advance maturity; close an OPEN record; access a residual or VR-65;
schedule; automate; push; release; or call `FIRST RUN COMPLETE`.

Mission Captain signs **`FIRST RUN SHELL READY / ONE BOUNDED TEST-MODE
COMBINED-CHILD RESULT SCHEMA FROZEN / FRESH SCIENCE ONE-RUN PROOF REQUIRED /
FRSH-005-v1-VR-12`** from exact source `d0800c3...`.
