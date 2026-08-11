# First Run Shell Variance - Deterministic SR01 Identity Construction

Variance ID: `FRSH-005-v1-VR-14`

Disposition: **`FIRST RUN SHELL READY / AUTHORITATIVE STATIC IDENTITIES
RECONFIRMED / DISPOSABLE SCIENCE SR01 STRING-CONSTRUCTION AND FAILURE
LOCALIZATION FROZEN / FRESH CREDENTIAL-CLEARED SCIENCE ONE-RUN PROOF
REQUIRED / FRSH-005-v1-VR-14`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / current Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-11`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-13`

Quartermaster return: `FRCA-005-v4`

Effective treatment / blueprint: `FRDT-005-v1-VR-01` /
`FRPX-005-v1-VR-01`

Functional report: `FRCE-005-v1-VR-05`

Mission source inspected:
`ddd43dec12f1a6edae5c825f005822614b7e91d0`

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

## Mission decision and exact localization

Mission accepts `FRVE-005-v7-VR-11` only as an honest parent-before-child
HOLD. It supplies no child runtime evidence and cannot be reinterpreted,
repaired, or resumed. The retained failure is localized to the disposable
Science parent's first assertion group, before any child preparation:

```text
SCIENCE_PARENT_STOP|stage=SR01_STATIC_IDENTITY|childInvocations=0|code=ASSERTION_FAILED
```

Mission independently re-read the two authoritative literal-block artifacts
as strict UTF-8, normalized only repository line framing into LF, extracted
the exact named fences, and recomputed every frozen scalar. The authoritative
files are internally exact:

```text
launcher byteLength=2001
launcher sha256=96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
prefix byteLength=976
prefix sha256=5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
tail byteLength=26068
tail sha256=e9815ce8f988bca0f1f9bd14a7ba50cfa4935b3d7a47492c95bfa90986b7070c
combined byteLength=27044
combined sha256=015dfd96befad29793892f1e15dc9ff4362ff8cec0ae4ce7b9c45b5da9e125f3
prefixEqual=true
```

The exact retained cause is therefore **not** a launcher, prefix, tail, or
combined authority drift. It is a disposable Science-parent SR01
representation/assertion defect. The removed parent did not retain a
sub-assertion identifier, so no narrower historical expression may be claimed
from evidence. Mission resolves that ambiguity by freezing deterministic
string construction and bounded sub-assertion localization below. No
production byte or behavior changes.

Variance classification: **`REQUIRED CORRECTION RESOLVED / DISPOSABLE
SCIENCE PARENT SR01 STRING CONSTRUCTION AND SUB-ASSERTION LOCALIZATION`**.

## Frozen deterministic SR01 construction

The fresh Science parent must treat each fenced capture as one scalar
`System.String`. It reads only the authoritative `launcher` and `prehelper`
fences from `FRSH-005-v1-VR-09` and the authoritative `production-tail` fence
from `FRSH-005-v1-VR-11`. It decodes strict UTF-8, converts CRLF to LF and any
remaining CR to LF once, requires one and only one exact named fence, and
retains the final LF inside each capture.

The combined value must be constructed exactly as scalar string concatenation:

```powershell
[string]$combined = [string]::Concat([string]$prefix,[string]$tail)
```

Implicit array construction, comma expressions, pipeline enumeration,
collection addition, `+=`, interpolation, object stringification, or a joined
multi-item capture is forbidden. Launcher, prefix, tail, and combined bytes
are each independently obtained with strict BOM-free UTF-8 and hashed in
separate scalar operations. Prefix equality is proved against exact combined
bytes `[0..975]`; it is not inferred from source strings.

Before child preparation, Science must synthetic-test this exact construction
against an array/collection negative case and prove that the negative case
cannot satisfy the combined length/hash. It then parser-checks the complete
combined scalar and completes the unchanged argv, environment, Windows-limit,
and ordered-stage assertions.

If SR01 fails, the only retained no-child stop remains bounded and adds one
exact `assertion` member from this closed allowlist:

```text
LAUNCHER_EXTRACT
LAUNCHER_IDENTITY
PREFIX_EXTRACT
PREFIX_IDENTITY
TAIL_EXTRACT
TAIL_IDENTITY
COMBINED_CONCAT
COMBINED_IDENTITY
PREFIX_EQUALITY
PARSER
ARGV_ENVIRONMENT
WINDOWS_LIMITS
STAGE_ORDER
```

The field order is exact:

```text
SCIENCE_PARENT_STOP|stage=SR01_STATIC_IDENTITY|assertion=<allowlisted>|childInvocations=0|code=ASSERTION_FAILED
```

That stop is still no runtime evidence and routes only to a fresh Mission
Captain. It retains no source, captured value, exception, path, command,
message, stack, byte, hash beyond the already-public frozen identities,
credential, request, response, media, residual, or opaque value.

## Unchanged no-request proof and accepted result

After SR01 passes, every `FRSH-005-v1-VR-12` and
`FRSH-005-v1-VR-13` parent stage, schema, classifier, counter, and absence
rule remains exact. In particular, the child diagnostic has no `code` field.
Exact exit `87`, zero stdout records, one exact PT06 production diagnostic,
ordinal `0`, `sendStarted=false`, and every child-owned absence true maps only
to:

```text
outcome=ACCEPTED_NO_REQUEST_STOP
earliestStage=PT06_CREDENTIAL_GATE
code=CREDENTIAL_ABSENT
childExit=87
```

Product-root, product-raster, and provenance absence remain independent parent
postflight facts, not child diagnostic fields. Acceptance still requires the
complete final result with `childInvocations=1`, every activity counter exact
`0`, and every controlled-path absence exact `true`. Any nonexact result is
HOLD. No retry exists after a child begins.

The unchanged child identities remain:

```text
launcher 2001 / 96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
prefix 976 / 5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
tail 26068 / e9815ce8f988bca0f1f9bd14a7ba50cfa4935b3d7a47492c95bfa90986b7070c
combined 27044 / 015dfd96befad29793892f1e15dc9ff4362ff8cec0ae4ce7b9c45b5da9e125f3
```

The helper source/DLL identities remain exact `1,693 /
98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97`
and `4,096 /
39e85b32b7f8437c2b5732e26093ca5bd9a9182b048c411e9dc5660ba03f10c9`.

## Preserved boundaries, validation, rollback, and handoff

Historical ordinal `1` remains consumed, opaque, inaccessible, and unchanged.
Ordinals `2` and `3` remain unstarted and unconsumed. Credential value reads,
request constructions, `SendAsync` calls, direct sends, and ordinals consumed
remain exact `0`. No live or product root, API request, response, raster,
provenance, media byte, or pixel is authorized in this Mission stage or the
fresh Science no-request proof.

The player-facing address remains `FR-03 / Chapter II - Drowned Archive /
Host 06`. The one-path rail, sole unchanged `L02-03`, both MH-40 outcomes,
equal dignity, all null deltas, shared RP-012 ending, and `successor=null`
remain immutable. No branch, packet, lesson, Host 07, reward, access,
identity, authority, world response, hidden-lore answer, successor, RP-013,
or post-ending content exists.

The immutable manifest and accepted-media bytes/pixels remain untouched.
Repository QA quarantine, the protected PDF, training tree, Martin's real
browser/profile/save, hidden lore, OS-temp parent, ordinal-1 residual, real
managed directory, user work, VR-65, and every opaque residual remain
protected. All inherited OPEN records remain separate and OPEN.

Mission changes only this variance and `NEXT_INSTANCE_HANDOFF.md`. Mission
validation is authority, exact read-only identity recomputation, diff, and
Git. It runs no child, helper, fixture, API, generation, media, pixel, product,
test, build, browser, or E2E operation. Science may later change only one
versioned Science variance and the synchronized handoff; its disposable
parent must remain outside the repository or be removed before commit.

Rollback removes only this variance and restores the immediately preceding
handoff by explicit content. It never resets the repository or touches
product, media, controlled paths, protected state, or user work.

After synchronization, one fresh Office of Science Administrator /
`office_of_science_administrator` reads the complete active intake, full
Science profile, this complete variance, complete `FRVE-005-v7-VR-11`,
complete `FRSH-005-v1-VR-13`, complete `FRVE-005-v7-VR-10`, complete
`FRSH-005-v1-VR-12`, complete `FRVE-005-v7-VR-09`, complete
`FRSH-005-v1-VR-11`, `FRCA-005-v4`, complete
`FRSH-005-v1-VR-10`, complete `FRSH-005-v1-VR-09`, decisive
`FRVE-005-v7-VR-08`, complete `FRWO-005-v7`, decisive
`FRVE-005-v7-VR-03`, the effective shell, treatment, blueprint,
`FRCE-005-v1-VR-05`, immutable `FRAM-001-v1`, and both exact literal blocks.

Science performs only the exact fresh credential-cleared one-run proof. It
may not retry after its child begins; route to Quartermaster; execute
generation/API; allocate the live root; construct a request; call `SendAsync`;
consume ordinal `2`; inspect media/pixels; change product/tests; run E2E;
reveal; advance maturity; close an OPEN record; access a residual or VR-65;
schedule; automate; push; release; or call `FIRST RUN COMPLETE`.

Mission Captain signs **`FIRST RUN SHELL READY / AUTHORITATIVE STATIC
IDENTITIES RECONFIRMED / DETERMINISTIC DISPOSABLE-PARENT SR01 CONSTRUCTION
FROZEN / FRESH SCIENCE ONE-RUN PROOF REQUIRED / FRSH-005-v1-VR-14`** from
exact source `ddd43dec12f1a6edae5c825f005822614b7e91d0`.
