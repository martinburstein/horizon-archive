# First Run Shell Variance - Bounded Host 06 Child Capture

Variance ID: `FRSH-005-v1-VR-23`

Disposition: **`FIRST RUN SHELL READY / SR05 CHILD STREAM CAPTURE BOUNDED
AND PS5.1-NATIVE-SAFE / FROZEN RUNTIME CARRIERS UNCHANGED / FRESH SCIENCE
ONE-RUN PROOF REQUIRED / FRSH-005-v1-VR-23`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / current Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-19`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-22`

Mission source inspected:
`5a810e69c9b4ef0646585701126ddb6c2f1f4ed0`

Corrected inert code candidate:
`f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree:
`92b22fc56d79d18cf1abf7213c5268c9e4149830`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

Exact next recipient: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Mission decision

Mission accepts `FRVE-005-v7-VR-19` as an exact one-run HOLD. The failed
parent is not reinterpreted as acceptance. Its bounded stop proved one child
invocation and an SR05 failure but discarded which child-exit, stdout, or
allowlisted PT06-diagnostic predicate differed.

Mission corrects only the retained disposable parent's SR05 stream capture and
bounded failure facts. The parent continues to start the frozen child through
`System.Diagnostics.Process`; it does not invoke a native command through the
PowerShell success/error pipeline. Standard output and standard error are now
drained concurrently with `StreamReader.ReadAsync` into fixed `256`- and
`512`-character capture ceilings while independent 64-bit cardinalities are
counted. This avoids `NativeCommandError` and `$ErrorActionPreference`
conversion while preventing an unbounded child body from being retained.

After both pipes reach EOF, the parent waits for process completion and
captures the native exit code. The only accepted stderr class is one exact
allowlisted PT06 record followed by exactly one LF or CRLF terminator. Empty,
nonexact bounded, and oversize stderr are distinct fail-closed classes. SR05
still requires exit `87`, stdout cardinality `0`, and `EXACT_PT06`.

If any SR05 assertion fails, the parent emits no child body. Its single bounded
stop adds only allowlisted facts:

```text
childExit=UNAVAILABLE|0..255|OUT_OF_RANGE
childStdout=UNAVAILABLE|ZERO|NONZERO_BOUNDED|NONZERO_OVERSIZE
childStderr=UNAVAILABLE|EXACT_PT06|EMPTY|NONEXACT_BOUNDED|OVERSIZE
```

The accepted parent stdout record, parent exit `0`, and zero parent stderr
remain unchanged. Variance classification: **`REQUIRED CORRECTION RESOLVED /
SR05 CAPTURE IS BOUNDED, DUAL-DRAINED, NATIVE-EXIT-PRESERVING, AND
DIAGNOSTIC-SCHEMA-CLASSIFIED / FRESH EXECUTION PROOF REQUIRED`**.

## New retained parent identity

The complete corrected source remains retained before execution at:

```text
Production Pipeline/First Run/HOST06_SCIENCE_PARENT_V2.ps1
```

Read-only Mission validation produced:

```text
sourceCharacters=50688
sourceAsciiBytes=50688
sourceSha256=2f47b5d01dd67397654176b596ced4602622a7f35ff1a078c57ad058399ef217
sourceStrictAscii=true
sourceLfOnly=true
sourceFinalLF=true
canonicalBase64AsciiLength=67584
canonicalBase64AsciiSha256=a0102c07a69401291c01ade2254ae4eb9d5cc25be0a20289a83891afd08240e1
sourceDecodeReencodeEqual=true
launcherCarrierOccurrences=1
combinedCarrierOccurrences=1
parserOperations=0
parentExecutions=0
childInvocations=0
```

The tracked file is the complete authoritative parent source. Mission did not
parse, invoke, dot-source, compile, or otherwise execute it.

## Frozen runtime carriers and semantics

Both runtime carriers remain embedded exactly once and byte-identical:

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
```

The launcher, prefix, production tail, helper source/DLL identities, endpoint,
model/options, prompt, request/response rules, ordinal rules, native-handle
identity, atomic file behavior, review, cleanup, provenance, and product-import
semantics do not change. The VR-17 bootstrap, one-child/no-retry rule, split
stage ownership/order, all controlled paths, zero-activity requirements, and
exact accepted V2 result remain effective.

## Exact fresh Science proof

One fresh Science role independently re-proves the retained source identity,
both carrier identities and roundtrips, split stage order, and all preflight
absence facts. It may parse-check this new complete parent source once and,
only if parser-clean, execute exactly one parent through the exact VR-17
fileless bootstrap with `OPENAI_API_KEY` removed without value read. The
parent may invoke exactly one frozen child. No retry exists.

PASS requires parent exit `0`, exactly one accepted V2 stdout record, zero
parent stderr, one child invocation, all activity counters `0`, and every
controlled path absent. A bounded parent stop is evidence only and remains
`HOLD`; its new SR05 fields identify the earliest correction owner without
exposing child content.

PASS permits only **`POLISH VIABILITY READY / RETAINED PARENT V2 BOUNDED
CREDENTIAL-CLEARED NO-REQUEST SUBGATE PASSED / MISSION API SHELL REQUIRED`**
and return to one fresh Mission Captain. Failure permits only exact `HOLD`.
Science commits only its variance and synchronized handoff and does not push.

## Zero activity, protected boundaries, and rollback

Mission performed no parser, bootstrap, parent, child, helper, credential,
request, API, generation, media, pixel, controlled-root, product, test, build,
browser, or E2E operation. Exact activity remains:

```text
credentialValueReads=0
requestConstructions=0
sendAsyncCalls=0
directSends=0
ordinalsConsumed=0
```

Historical ordinal `1` remains consumed, opaque, inaccessible, and unchanged.
Ordinals `2` and `3` remain unstarted and unconsumed. All helper, live,
ordinal-2/3, product, provenance, and Science fixture paths remain absent.
Maturity and every inherited OPEN record remain unchanged.

The player address remains `FR-03 / Chapter II - Drowned Archive / Host 06`.
The Host 05 handoff, one dry same-basin Stranded Lens Cradle, sole unchanged
`L02-03`, one-path rail, equal-dignity MH-40 outcomes, shared RP-012 ending,
and `successor=null` remain immutable. No branch, packet, lesson, Host 07,
reward, access, identity, authority, world response, hidden-lore answer,
RP-013, or post-ending content exists.

Repository QA quarantine, protected PDF, training tree, Martin's real browser/
profile/save, hidden lore, accepted-media bytes/pixels, OS-temp parent,
ordinal-1 residual, real managed directory, user work, VR-65, and opaque
residuals remain untouched.

Rollback restores the prior retained-source bytes, removes only this variance,
and restores the preceding handoff by explicit content. It never resets the
repository or touches protected, controlled, product, media, or user state.

Mission Captain signs **`FIRST RUN SHELL READY / BOUNDED PS5.1-NATIVE-SAFE
SR05 CHILD CAPTURE / FRESH SCIENCE ONE-RUN PROOF REQUIRED /
FRSH-005-v1-VR-23`** from exact source
`5a810e69c9b4ef0646585701126ddb6c2f1f4ed0`.
