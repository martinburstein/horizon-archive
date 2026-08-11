# First Run Shell Variance - Retained Host 06 Science Parent V2

Variance ID: `FRSH-005-v1-VR-21`

Disposition: **`FIRST RUN SHELL READY / NEW COMPLETE DISPOSABLE-PARENT
SOURCE RETAINED BEFORE EXECUTION / SOURCE AND RUNTIME CARRIERS IDENTITY-LOCKED /
FRESH SCIENCE ONE-RUN PROOF REQUIRED / FRSH-005-v1-VR-21`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / current Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-17`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-20`

Mission source inspected:
`71885f06ca2ef0d77b2f0f2e022aa9f58654cf1c`

Corrected inert code candidate:
`f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree:
`92b22fc56d79d18cf1abf7213c5268c9e4149830`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

Exact next recipient: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Mission decision

Martin explicitly selected replacement path `1`: construct a new disposable
parent identity and retain its complete source or canonical carrier before any
execution. Mission therefore supersedes only the unavailable historical parent
identity stopped by `FRSH-005-v1-VR-20`. Mission does not reconstruct, reuse,
or claim byte identity with that discarded candidate.

The new authoritative source is retained in full at:

```text
Production Pipeline/First Run/HOST06_SCIENCE_PARENT_V2.ps1
```

That tracked file is the source of truth, not this report, a length, a digest,
a line range, a generated prefix, or an untracked disposable representation.
It contains the actual complete parent program and the complete two frozen
runtime carriers. No carrier content is omitted or represented only by a hash.

Variance classification: **`REQUIRED CORRECTION RESOLVED / NEW PROSPECTIVE
PARENT V2 IS COMPLETELY RETAINED BEFORE EXECUTION AND EXPLICITLY SUPERSEDES
THE UNAVAILABLE HISTORICAL PARENT`**.

## Authoritative parent identity

Read-only Mission validation of the tracked source produced exactly:

```text
sourceCharacters=48090
sourceAsciiBytes=48090
sourceSha256=cf7a722759db7b97fad6aefbdbf21df9864ec4b0794a661ecfde7c4f5384df4f
sourceStrictAscii=true
sourceLfOnly=true
sourceFinalLF=true
canonicalBase64AsciiLength=64120
canonicalBase64AsciiSha256=6b399d80ed7a6066d1bad7600be5ea4ec7594123b8167bee2c49a8d9274407b4
sourceDecodeReencodeEqual=true
launcherCarrierOccurrences=1
combinedCarrierOccurrences=1
parserOperations=0
parentExecutions=0
childInvocations=0
```

The canonical Base64 value above is validation evidence only. The repository
file itself is the complete retained carrier. Mission did not parse, compile,
create a script block from, invoke, dot-source, or otherwise execute the source.

The parent is a new minimal deterministic credential-cleared/no-request
Science wrapper. It owns closed `SR01..SR09` stages, exact carrier identity and
roundtrip checks, exact runtime-stage ordering, one child invocation, bounded
dual-stream capture, the corrected PT06 classifier, independent postflight
absence checks, zero-activity checks, one bounded result, and one bounded
fail-closed stop. It removes `OPENAI_API_KEY` from the child environment without
reading its value. It contains no test hook, alternate child, retry, request
construction, API transport, media operation, or product write.

The sole accepted parent result is exactly one LF-terminated ASCII record with
this complete identity:

```text
SCIENCE_HOST06_COMBINED_RESULT_V2|outcome=ACCEPTED_NO_REQUEST_STOP|earliestStage=PT06_CREDENTIAL_GATE|code=CREDENTIAL_ABSENT|childExit=87|childInvocations=1|credentialValueReads=0|requestConstructions=0|sendAsyncCalls=0|directSends=0|ordinalsConsumed=0|helperRootAbsent=true|helperDllAbsent=true|liveRootAbsent=true|ordinal2StageAbsent=true|ordinal2TargetAbsent=true|ordinal2DecisionAbsent=true|ordinal3StageAbsent=true|ordinal3TargetAbsent=true|ordinal3DecisionAbsent=true|productRootAbsent=true|productRasterAbsent=true|productProvenanceAbsent=true|scienceFixtureRootsAbsent=true
```

Any other exit, stdout, stderr, stage, code, count, boolean, record cardinality,
or source identity is `HOLD`. A parent stop is not runtime acceptance.

## Immutable runtime carriers and API semantics

The complete source contains each frozen carrier exactly once. Mission decoded
them in memory only for read-only identity verification and immediately
discarded the decoded values. Exact evidence is:

```text
launcherCarrierAsciiLength=2668
launcherCarrierAsciiSha256=02c0219793c0aeb6e8e989aac9f9ee52373598cdbc2a33da4f2c54b069796af9
launcherDecodedByteLength=2001
launcherDecodedSha256=96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
combinedCarrierAsciiLength=36060
combinedCarrierAsciiSha256=c8926687184ecff422bb29fe26a7a9e3bd3d6273c75fceb56746734de89b19f5
combinedDecodedByteLength=27044
combinedDecodedSha256=015dfd96befad29793892f1e15dc9ff4362ff8cec0ae4ce7b9c45b5da9e125f3
prefixByteLength=976
prefixSha256=5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
tailByteLength=26068
tailSha256=e9815ce8f988bca0f1f9bd14a7ba50cfa4935b3d7a47492c95bfa90986b7070c
decodedFinalLF=true
```

The launcher, pre-helper prefix, production tail, combined byte boundary,
helper source/DLL identities, endpoint, `gpt-image-2`, `n=1`, `3840x2160`,
`high`, `opaque`, `png`, prompt, request schema, response rules, ordinal rules,
native handle identity, atomic file behavior, review decision, cleanup,
provenance, and product import semantics remain byte-identical to
`FRSH-005-v1-VR-16` and the effective production shell. No API semantic or
runtime carrier byte changes in V2.

Historical ordinal `1` remains consumed, opaque, inaccessible, and unchanged.
Ordinals `2` and `3` remain unstarted and unconsumed. Direct sends remain `0`.

## Exact fresh Science proof

One fresh Science role reads the complete active intake, full Science profile,
this complete shell, `FRVE-005-v7-VR-17`, `FRSH-005-v1-VR-20`,
`FRSH-005-v1-VR-19`, `FRSH-005-v1-VR-18`, `FRSH-005-v1-VR-17`,
`FRSH-005-v1-VR-16`, and their cited controls. It then performs exactly one
bounded proof:

1. Read the authoritative parent file as bytes, require every source identity
   above, canonical Base64 roundtrip equality, and exactly one complete frozen
   launcher carrier and one complete frozen combined carrier.
2. Independently re-prove both carrier ASCII identities, canonical decoding,
   decode/re-encode equality, decoded lengths and SHAs, prefix/tail slices,
   strict UTF-8/LF/final-LF facts, and stage order before execution.
3. Parse-check the complete retained parent source once with zero errors. Do
   not correct or rewrite it. A parse error is terminal `HOLD` with no process.
4. Use the exact VR-17 fileless `ReadToEnd` bootstrap and its exact executable,
   `151`-character arguments, redirected stdin/stdout/stderr, one write/close,
   and dual asynchronous drains. Remove `OPENAI_API_KEY` from the outer parent
   process environment without reading it. Invoke exactly one parent.
5. The exact retained parent may invoke exactly one frozen child. Require the
   exact accepted V2 result, parent exit `0`, one stdout record, zero stderr,
   one child invocation, every activity counter `0`, every controlled path
   absent, and no retry. Retain only bounded result facts, never child body,
   credential, response, carrier, media, path, or opaque contents.

The parent internally performs its one frozen combined-source parser check.
Science's pre-execution parent-source parse is a distinct retention-integrity
gate. Neither authorizes correction, execution retry, or API work.

PASS permits only **`POLISH VIABILITY READY / NEW RETAINED PARENT V2
CREDENTIAL-CLEARED NO-REQUEST SUBGATE PASSED / MISSION API SHELL REQUIRED`**
and return to fresh Mission. Failure permits only exact `HOLD`. Science commits
only its variance and synchronized handoff and does not push.

## Boundaries, files, rollback, and handoff

Mission adds only this variance, the complete authoritative parent source, the
synchronized handoff, and one exact `.gitattributes` `text eol=lf` rule that
preserves the source's frozen LF byte identity across checkout. The source is a
planning control carrier and is not product runtime. Science may read and
execute it only under the exact one-run proof above; no other role or path
gains execution authority from its presence.

Mission performed no parser, bootstrap, process, parent, child, helper,
credential, API, generation, media, pixel, controlled-root, product, test,
build, browser, or E2E operation. API sends remain `0`; ordinals `2` and `3`
remain unconsumed. The immutable manifest, accepted-media bytes/pixels,
repository QA quarantine, protected PDF, training tree, Martin's real browser/
profile/save, hidden lore, OS-temp parent, ordinal-1 residual, real managed
directory, user work, VR-65, and opaque residuals remain untouched.

The player address remains `FR-03 / Chapter II - Drowned Archive / Host 06`.
The exact Host 05 handoff, one dry same-basin Stranded Lens Cradle, sole
unchanged `L02-03`, next Drowned boundary, one-path rail, equal-dignity MH-40
outcomes, all null deltas, shared RP-012 ending, and `successor=null` remain
immutable. No branch, packet, lesson, Host 07, reward, access, identity,
authority, world response, hidden-lore answer, RP-013, or post-ending content
exists. Maturity and all inherited OPEN records remain unchanged.

Rollback removes only the new source and variance, the exact source-specific
`.gitattributes` line, and restores the prior handoff by explicit content. It never resets the
repository or touches protected, controlled, product, media, or user state.

Mission Captain signs **`FIRST RUN SHELL READY / COMPLETE NEW PARENT V2 SOURCE
RETAINED / FRESH SCIENCE ONE-RUN PROOF REQUIRED / FRSH-005-v1-VR-21`** from
exact source `71885f06ca2ef0d77b2f0f2e022aa9f58654cf1c`.
