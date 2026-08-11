# First Run Shell Variance - Chunked Canonical Parent Carrier

Variance ID: `FRSH-005-v1-VR-19`

Disposition: **`FIRST RUN SHELL READY / DETERMINISTIC FOUR-CHUNK CANONICAL
CARRIER RETENTION ONLY / ONE PARSER / NO EXECUTION / FRESH SCIENCE REQUIRED /
FRSH-005-v1-VR-19`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / current Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-16`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-18`

Quartermaster return: `FRCA-005-v4`

Effective treatment / blueprint: `FRDT-005-v1-VR-01` /
`FRPX-005-v1-VR-01`

Functional report: `FRCE-005-v1-VR-05`

Mission source inspected:
`5b313f04205ec1579d1d033e67de794adacc207b`

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

## Mission adjudication

Mission accepts `FRVE-005-v7-VR-16` as an honest no-execution HOLD. Science
proved one complete prospective disposable parent candidate in memory: strict
ASCII, LF-only, final-LF, exact `48,615` characters and bytes, SHA-256
`3e0250a1e06e1ed1d26a9d0f16f08bf10a3fc209e4d33251cd2884a1b4b4ef5f`,
with one exact `2,668`-character launcher carrier and one exact
`36,060`-character combined carrier. Its sole local parser operation returned
exact `parserErrorCount=0` and `tokenCount=1441`.

That pass did not retain the required complete canonical parent carrier. The
exact `64,820`-character canonical Base64 scalar exceeded one bounded
controller result and was truncated at `40,021` characters. Parser metrics are
not a substitute for source identity, and the incomplete prefix is rejected.

Mission therefore authorizes exactly one fresh parser-and-retention pass with
one deterministic four-chunk representation of the canonical carrier. The
chunks are presentation segments only. Their ordered concatenation is the sole
authoritative carrier; a chunk alone, a decoded excerpt, candidate metrics, or
any alternate serialization has no execution authority.

Variance classification: **`REQUIRED CORRECTION IN PROGRESS / COMPLETE
PARSER-CLEAN CANDIDATE MUST BE RETAINED THROUGH BOUNDED ORDERED CHUNKS BEFORE
ANY ONE-RUN SEMANTIC PROOF`**.

## Frozen candidate and one-parser rule

Fresh Science independently reconstructs the same prospective parent candidate
in memory under every `FRSH-005-v1-VR-18` construction, grammar,
classification, secrecy, and identity rule. Before carrier retention it must
prove this exact identity:

```text
candidateCharacters=48615
candidateAsciiBytes=48615
candidateSha256=3e0250a1e06e1ed1d26a9d0f16f08bf10a3fc209e4d33251cd2884a1b4b4ef5f
strictAscii=true
lfOnly=true
finalLf=true
launcherCarrierOccurrences=1
combinedCarrierOccurrences=1
launcherCarrierAsciiLength=2668
launcherCarrierAsciiSha256=02c0219793c0aeb6e8e989aac9f9ee52373598cdbc2a33da4f2c54b069796af9
combinedCarrierAsciiLength=36060
combinedCarrierAsciiSha256=c8926687184ecff422bb29fe26a7a9e3bd3d6273c75fceb56746734de89b19f5
```

Science performs exactly one local grammar operation on that complete in-memory
candidate using `System.Management.Automation.Language.Parser.ParseInput`.
The operation and bounded error tuple behavior remain exactly as frozen in
`FRSH-005-v1-VR-18`. It does not call `ScriptBlock.Create`, invoke a script,
start a process, decode or invoke either runtime carrier, or perform any parent,
child, helper, credential, API, media, controlled-root, product, test, browser,
or E2E operation. There is no parser retry.

Any parser error, identity mismatch, construction failure, exception, nonexact
report, or execution attempt is `HOLD`. If parser errors are exact zero,
Science canonical-Base64-encodes the complete ASCII candidate and proves:

```text
canonicalBase64=true
base64AsciiLength=64820
decodedByteCount=48615
decodedSha256=3e0250a1e06e1ed1d26a9d0f16f08bf10a3fc209e4d33251cd2884a1b4b4ef5f
decodeReencodeEqual=true
decodedStrictAscii=true
decodedLfOnly=true
decodedFinalLF=true
parserErrorCount=0
reportedErrorCount=0
tokenCount=1441
```

Science also records `base64AsciiSha256=<64 lowercase hexadecimal characters>`
computed over the complete `64,820` ASCII carrier. Missing or malformed
complete-carrier SHA is `HOLD`.

## Deterministic four-chunk retention transport

The canonical carrier is split by zero-based ASCII character offset, without
inserted, removed, normalized, or wrapped characters, into exactly these four
ordered chunks:

| Chunk | Start inclusive | End exclusive | Exact ASCII length |
| --- | ---: | ---: | ---: |
| `01` | `0` | `16384` | `16384` |
| `02` | `16384` | `32768` | `16384` |
| `03` | `32768` | `49152` | `16384` |
| `04` | `49152` | `64820` | `15668` |

Each chunk is safely below `20,000` characters and the observed
`40,021`-character controller result cap. Science retains the four chunks in
its variance as exactly four separate,
unwrapped fenced `text` blocks in ascending order. No fence content contains
whitespace, newline, label, prefix, suffix, or commentary. The report records
immediately before each block:

```text
chunkOrdinal=<01..04>
chunkStart=<exact table value>
chunkEndExclusive=<exact table value>
chunkAsciiLength=<exact table value>
chunkSha256=<64 lowercase hexadecimal characters>
```

Science may obtain and transfer one chunk at a time through bounded controller
results and may append only that chunk's final report block through the normal
repository patch mechanism. Each retrieval reconstructs the candidate in
memory and must first re-prove the exact candidate SHA and complete canonical
carrier length and SHA. It performs no additional parser operation. No source,
carrier, decoded, runtime, scratch, temp, cache, or intermediate file may be
created. The only permitted persistent representation is the final Science
variance itself after all four blocks and proofs are complete.

After retention, Science reads the four report blocks as literal ASCII data,
validates each recorded length and SHA, concatenates their contents in exact
ordinal order, and proves:

```text
chunkCount=4
chunkOrdinals=01,02,03,04
chunkTotalAsciiLength=64820
concatenatedBase64AsciiLength=64820
concatenatedBase64AsciiSha256=<same complete-carrier SHA>
concatenatedCanonicalBase64=true
concatenatedDecodeReencodeEqual=true
concatenatedDecodedByteCount=48615
concatenatedDecodedSha256=3e0250a1e06e1ed1d26a9d0f16f08bf10a3fc209e4d33251cd2884a1b4b4ef5f
concatenatedDecodedStrictAscii=true
concatenatedDecodedLfOnly=true
concatenatedDecodedFinalLF=true
```

Science calls `Parser.ParseInput` only once in the entire pass. The final
reconstruction check compares the decoded bytes and SHA to the exact
already-parsed candidate identity; it does not parse again. This identity
equality is the frozen link between the one parser result and the retained
chunked carrier.

Any missing, duplicated, reordered, wrapped, truncated, overlong, non-ASCII,
or hash-mismatched chunk; any aggregate mismatch; any decoded candidate
mismatch; any extra carrier representation; any intermediate file; or any
second parser operation is `HOLD`. Science performs no retry.

If every predicate is exact, Science issues only **`POLISH VIABILITY READY /
DISPOSABLE PARENT GRAMMAR AND FOUR-CHUNK CARRIER RETENTION SUBGATE PASSED /
MISSION IMMUTABLE-CARRIER FREEZE REQUIRED`**, commits only its variance and
synchronized handoff, does not push, and routes to one fresh Mission Captain.
This is not child, credential, classifier, transport, API, generation, media,
product, or release evidence.

## Unchanged production identities and semantic contract

The immutable runtime identities remain exact:

```text
launcher 2001 / 96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
prefix 976 / 5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
tail 26068 / e9815ce8f988bca0f1f9bd14a7ba50cfa4935b3d7a47492c95bfa90986b7070c
combined 27044 / 015dfd96befad29793892f1e15dc9ff4362ff8cec0ae4ce7b9c45b5da9e125f3
helper source 1693 / 98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97
helper DLL 4096 / 39e85b32b7f8437c2b5732e26093ca5bd9a9182b048c411e9dc5660ba03f10c9
```

The later one-run acceptance contract remains unchanged and is not exercised:

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

The production child diagnostic still has no `code` field. Product-root,
product-raster, and provenance absence remain independent parent postflight
facts. Nothing in this retention-only variance authorizes a parent or child or
establishes the semantic result above.

## Preserved boundaries, validation, rollback, and handoff

Historical ordinal `1` remains consumed, opaque, inaccessible, and unchanged.
Ordinals `2` and `3` remain unstarted and unconsumed. Mission credential value
reads, request constructions, `SendAsync` calls, direct sends, ordinals
consumed, parent executions, and child invocations are exact `0`. No API,
generation, response, media byte, image, pixel, product raster, or provenance
exists.

The player address remains `FR-03 / Chapter II - Drowned Archive / Host 06`.
The exact Host 05 handoff, one dry same-basin Stranded Lens Cradle, sole
unchanged `L02-03`, next Drowned boundary, one-path rail, both MH-40 outcomes,
equal dignity, all null deltas, shared RP-012 ending, and `successor=null`
remain immutable. No branch, packet, lesson, Host 07, reward, access, identity,
authority, world response, hidden-lore answer, successor, RP-013, or
post-ending content exists.

The immutable manifest and accepted-media bytes/pixels remain untouched.
Repository QA quarantine, protected PDF, training tree, Martin's real browser/
profile/save, hidden lore, OS-temp parent, ordinal-1 residual, real managed
directory, user work, VR-65, and every opaque residual remain protected. All
inherited OPEN records remain separate and OPEN.

Maturity impact: none. `FR-03` remains continuity `FR2`; physical-host
expression remains `FR0 - 1 accepted shared compression / 1 exact / 10
missing`; learning `FR2`; behavior/save/recovery `FR1`; content `FR2`;
presentation `FR3`; and prior bounded release proof `FR4`.

Mission changes only this variance and `NEXT_INSTANCE_HANDOFF.md`. Validation
is read-only authority review, exact shell comparison, bounded chunk protocol
review, diff, and Git. Mission runs no parser candidate, bootstrap, parent,
child, helper, fixture, API, generation, media, pixel, product, test, build,
browser, or E2E operation.

Rollback removes only this variance and restores the immediately preceding
handoff by explicit content. It never resets the repository or touches product,
media, controlled paths, protected state, or user work.

After synchronization, one fresh Office of Science Administrator /
`office_of_science_administrator` reads the complete active intake, full
Science profile, this complete variance, complete `FRVE-005-v7-VR-16`,
complete `FRSH-005-v1-VR-18`, complete `FRVE-005-v7-VR-15`, complete
`FRSH-005-v1-VR-17`, complete `FRSH-005-v1-VR-16`, and all exact cited
effective controls. It performs only the one-parser, four-chunk retention pass
above, commits its variance plus synchronized handoff, and does not push.

Science may not execute the candidate; invoke a bootstrap, parent, child, or
helper; read or change a credential; route to Quartermaster; generate or call
an API; allocate the live root; construct a request; call `SendAsync`; consume
ordinal `2`; inspect media/pixels; change product/tests; run E2E; reveal;
advance maturity; close an OPEN record; access a residual or VR-65; schedule;
automate; push; release; or call `FIRST RUN COMPLETE`.

Mission Captain signs **`FIRST RUN SHELL READY / DETERMINISTIC FOUR-CHUNK
CANONICAL PARENT CARRIER RETENTION / ONE PARSER / NO EXECUTION / FRESH SCIENCE
REQUIRED / FRSH-005-v1-VR-19`** from exact source
`5b313f04205ec1579d1d033e67de794adacc207b`.
