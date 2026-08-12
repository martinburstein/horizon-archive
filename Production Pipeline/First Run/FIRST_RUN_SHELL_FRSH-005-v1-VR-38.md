# First Run Shell - Host 06 v8 Parent Character-Length Correction

Shell ID: `FRSH-005-v1-VR-38`

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / viability / predecessor: `FRWO-005-v8` /
`FRVE-005-v8-VR-04` / `FRCA-005-v7`

Disposition: **`FIRST RUN SHELL READY / EXACT 34,766 CHARACTER PREDICATE /
DEPENDENT SOURCES RE-FROZEN / CREDENTIAL-CLEARED SCIENCE PROOF REQUIRED /
NO API OR A1 / FRSH-005-v1-VR-38`**

Date: **2026-08-12**

Mission source inspected:
`d37a70ebf99739786aafe17b9065c3e1373b6198`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

First-run address: `FR-03 / Chapter II - Drowned Archive / Host 06`

Current / target maturity: unchanged physical-host expression
`FR0 - 1 accepted shared compression / 1 exact / 10 missing`; no maturity
advances in this planning or Science subgate.

Exact next owner: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Mission decision and exact correction

Mission accepts `FRVE-005-v8-VR-04`. The stdin parent correctly required the
new carrier byte identity `34,766 /
9b1d315bc728299145d9a9582f7fd0da134403dd0a076254a8423a065da046a5`
but retained a stale decoded-string length of `33,666`. Because the carrier is
strict ASCII, decoded character length must equal byte length exactly.

Mission changed only:

```powershell
if($carrier.Length-ne 33666){throw 'PARENT_CARRIER_LENGTH'}
```

to:

```powershell
if($carrier.Length-ne 34766){throw 'PARENT_CARRIER_LENGTH'}
```

The deterministic builder now also refreezes this parent character predicate
from the generated carrier length, preventing recurrence. No carrier,
launcher, fixture, helper, credential, request, API, media, product, browser,
or E2E execution occurred.

Variance classification: **`REQUIRED CORRECTION RESOLVED / STDIN PARENT BYTE
AND CHARACTER IDENTITIES NOW BOTH REQUIRE EXACT 34,766`**.

## Frozen complete sources

All actual sources remain retained in full. Exact strict-UTF-8/no-BOM
identities and parser results are:

```text
builder 24897 / d0213fca3a1b61b086d6f82e2f218416292d7362fd0a2871e07d584f161923af / parserErrors=0
carrier 34766 / 9b1d315bc728299145d9a9582f7fd0da134403dd0a076254a8423a065da046a5 / parserErrors=0
launcher 2637 / 4eccc9abbed86b917dd987050b04340867aee023707aa063d0ecf13c6bf4bc1a / parserErrors=0
stdin parent 2878 / 6b89f33bbe82595fc142e00106552096ff1f53033748df5d54742bc7fba6580b / parserErrors=0
fixture controller 2196 / 093232af889ea1a2cfc824c4898a0dafa10ea4532bf2ec1a8fddc3c4620dd804 / parserErrors=0
```

All `FRSH-005-v1-VR-37` same-run helper source, compile-output
length/SHA freeze, byte-only load, exact reflection/PInvoke/native surface,
later exclusive byte reobservation, one-link/non-reparse/size identity,
identity-conditioned cleanup, stdin transport, response, A1, content,
accessibility, validation, provenance, rollback, and protection requirements
remain exact and are incorporated unchanged.

## Exact Science proof

Fresh Science first proves all nine controlled paths absent and independently
recomputes all five identities and parser-zero results. It then performs
exactly one credential-cleared fixture through the retained controller,
parent, launcher, and carrier.

PASS requires one child, exact same-run helper compile/load/reflection/native
identity/reobservation/cleanup, stop at `PT06_CREDENTIAL_GATE`, exit `87`,
zero stdout, the exact bounded production diagnostic, credential value reads
`0`, request constructions `0`, `SendAsync` calls `0`, API sends `0`, A1
unconsumed, and all nine controlled paths absent afterward.

There is no retry, correction, alternate transport, production credential
read, request/API/media/product operation, browser/E2E, reveal, maturity
advance, or release in Science. PASS returns to one fresh Mission Captain for
a separate Quartermaster shell. Anything nonexact is `HOLD`.

The player-visible outcome, sole unchanged `L02-03`, entry/completion/exits,
privacy/save/offline/accessibility behavior, one-path rail, equal-dignity
MH-40 outcomes, shared RP-012 ending, all null deltas, and `successor=null`
remain unchanged. Repository QA quarantine, protected PDF, training tree,
Martin's real browser/profile/save, accepted media, v7 paths/residuals, opaque
roots, VR-65, hidden lore, and unrelated work remain inaccessible. No branch,
packet, lesson, reward, access, identity, authority, world response,
Machine/Builder dialogue, Host 07+, RP-013, successor, or post-ending content
is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / FRSH-005-v1-VR-38 / EXACT
34,766 BYTE-AND-CHARACTER PARENT / FRESH CREDENTIAL-CLEARED SCIENCE NEXT /
A1 UNCONSUMED`**.
