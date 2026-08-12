# First Run Shell - Host 06 v9 Funded B1

Shell ID: `FRSH-005-v1-VR-40`

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / viability / predecessor: `FRWO-005-v9` / `FRVE-005-v9` /
`FRCA-005-v8`

Disposition: **`FIRST RUN SHELL READY / SOLE FUNDED B1 / NEW RETAINED V9
STDIN SOURCES / ONE SEND / NO RETRY OR B2 / PRIVATE REVIEW / BYTE-IDENTICAL
ACCEPTED IMPORT OR EXACT CLEANUP`**

Date: **2026-08-12**

Mission source inspected:
`63086f4925d7f0d313e2019c197c75d26612a407`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

First-run address: `FR-03 / Chapter II - Drowned Archive / Host 06`

Current / target maturity: current physical-host expression remains
`FR0 - 1 accepted shared compression / 1 exact / 10 missing`; a fully accepted
candidate may establish content/presentation evidence for one exact Host 06,
but only Intelligence may advance the maturity record.

Exact next owner: one fresh Quartermaster / `quartermaster`

## Mission decision

Mission accepts `FRVE-005-v9`. The closed v8 request remains consumed and is
not retried or reused. Martin's funded instruction authorizes only one new v9
attempt `{B1}`. The unchanged directorial treatment, player-experience
blueprint, inert Combat implementation, immutable accepted-media manifest,
request/response parser, physical rubric, product destination, and validation
budgets remain exact. Because no direction, flow, code, or manifest correction
is required before generation, this bounded return proceeds directly from
Mission to Quartermaster rather than replaying Recon, Tactical, or Combat.

Mission constructed and retained a distinct v9 builder, production carrier,
launcher, stdin parent, and credential-cleared fixture controller. All five
strict ASCII/UTF-8-no-BOM sources parse with zero errors. The one fixture child
passed through helper construction/identity/cleanup and stopped at the exact
credential-absent PT06 gate:

```text
HOST06_V9_STDIN_FIXTURE_PASS
earliestStage=PT06_CREDENTIAL_GATE
childInvocations=1
credentialReads=0
requestConstructions=0
sendAsyncCalls=0
apiSends=0
B1Consumed=false
controlledPathsAbsent=true
```

Mission made no credential read, request, API send, media operation, product
change, or B1 consumption.

## Frozen retained sources

Quartermaster independently verifies strict UTF-8/no BOM, exact byte length,
lowercase SHA-256, and parser-zero for all five files:

```text
BUILD_HOST06_V9_B1_CARRIER.ps1
  24897 / 0131bfae844923c8f8bcc11bbd9a105ab66fa1d39aad322e68a89e22c0e899d8
HOST06_V9_B1_PRODUCTION_CARRIER.ps1
  34766 / 2b029ef83752051bb5e255e269d291e47a6449a960f13d4a35311c78a257194e
HOST06_V9_B1_LAUNCHER.ps1
  2637 / 22ecacfe490a27492fef4826ec73fb898a4b095985b78b85f316cadc418d5d43
HOST06_V9_B1_STDIN_PARENT.ps1
  2878 / 33a715b9280889bda442370355a35cfb3fe61855cd2c1655d642569d63d81e58
HOST06_V9_B1_STDIN_FIXTURE_CONTROLLER.ps1
  2196 / f534ff3a2d7dabe197f9cad916ccd4fd045ea56506630542435ce1d9adcf3f95
parserErrors=0 for all five
```

Production invokes exactly once:

```text
C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
-NoLogo -NoProfile -NonInteractive -File
Production Pipeline/First Run/HOST06_V9_B1_STDIN_PARENT.ps1
```

The retained parent alone verifies the carrier and launcher, starts one child,
and writes the complete carrier through one closed redirected stdin stream.
Quartermaster may not run the builder or fixture in production, hand-edit,
rebuild, inline, reinterpret, bypass, or directly invoke the launcher/carrier.

## Preflight and exact controlled paths

Before invocation, Quartermaster proves HEAD synchronized to this shell and
all nine literal paths absent without parent enumeration:

```text
helper root=C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-v9-5825b06f-e16d-4518-b924-6d50809e3a33
helper DLL=<helper root>\Host06FileIdentity.dll
live root=C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-v9-ca96f453-a3ca-439b-b45a-635652d387ba
stage=<live root>\.attempt-B1-8958da5b-9968-47f5-bf36-0209793eaf6a.stage
target=<live root>\attempt-B1.png
decision=<live root>\.attempt-B1.review-v1
product root=C:\Users\marti\OneDrive\Desktop\Horizon Archive\Visual Direction\Production Masters\2026-08-10-first-run-host06
product raster=<product root>\host06-stranded-lens-cradle-master-v1.png
product provenance=<product root>\PROVENANCE.md
```

Any existing/reparse/aliased/unexpected path or identity uncertainty stops
before credential access and leaves B1 unconsumed. V7/v8 paths, managed or
opaque roots, and parents/siblings remain inaccessible.

## Helper, credential, request, and B1

The helper source remains exact `1,693 /
98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97`.
The carrier must dynamically freeze current-run DLL bytes/length/SHA, load only
those bytes, prove exact reflection/PInvoke/native surface, exclusively
reobserve identical bytes, require one link/no reparse/exact size, delete the
exact DLL, then delete the empty helper root nonrecursively before credential
access.

Credential authority is environment-only `OPENAI_API_KEY`. Only boolean
nonblank presence may be observed before in-memory Bearer use. The value may
never be printed, persisted, measured, hashed, classified, returned, or
exposed. Missing/blank stops before B1.

The sole request is one non-streaming `POST` to
`https://api.openai.com/v1/images/generations` with exact
`HOST06-GEN-PROMPT-v1`, `model=gpt-image-2`, `n=1`, `size=3840x2160`,
`quality=high`, `background=opaque`, and `output_format=png`.
`AllowAutoRedirect=false`, `ResponseHeadersRead`, a ten-minute timeout, one
request body, and exactly one `SendAsync` are mandatory. B1 begins at that
`SendAsync` and is consumed regardless of result. No retry, B2, redirect,
relaunch, alternate endpoint/model/transport, SDK, CLI, browser generation,
edit, variation, reference image, or second output is allowed.

## Response, diagnostic, and materialization gates

Success requires HTTP `200`, media type `application/json`, complete body
`1..16,500,000` bytes, and the strict official ImagesResponse parser from
`FRVE-005-v9`: exact allowed fields, required created plus one data item,
canonical bounded base64, optional exact echoes and bounded usage, and
duplicate/unknown/trailing/malformed rejection. Decoded PNG is
`1..12,000,000` bytes.

Every completed response retains only status, normalized media type or
`absent`, bounded byte count or `cap-exceeded`, terminal stage, send-started,
and the secret-safe at-most-1,024-byte non-success projection or
`diagnostic-unavailable`. No key, header, request/response body, JSON, base64,
generated bytes, exception/stack, request ID, or account/project identity may
be reported. Working response and diagnostic buffers are cleared.

Decoded bytes use `FileMode.CreateNew`, one bounded write, `Flush(true)`,
close, exclusive reopen, current handle/file identity, one-link/no-reparse/
size/SHA proof, same-directory atomic no-replace move, stage absence, and
final target identity. Any collision, substitution, drift, or cleanup doubt is
terminal.

## Private technical and objective review

Quartermaster may inspect only the exact identity-proved B1 target privately.
It may never display, attach, publish, reveal, screenshot, or place candidate
or rejected media elsewhere.

Technical PASS requires PNG signature/chunk/order/CRC, one IHDR, exact
`3840x2160`, 8-bit truecolor type 2, opaque sRGB/no alpha, bounded inflate,
independent decode, one final IEND, and no trailing bytes, text, watermark,
EXIF, time, animation, private/unknown chunks, or disallowed metadata.

Physical PASS requires every frozen `PHY-01..12`: one weathered lens visibly
nested at least `.80` inside one tilted conformal cradle; tilt `12..35`
degrees; at least two load/stress contacts and two continuous drainage seams;
dry clearance and one continuous dry approach; at least three Host 05-side
fragments outside activation; restrained horizon/reflection crossing at least
`.25` of lens width; same-basin continuity; and one candidate distinct from
Host 05, live water, return-like ridge, Crown, distant Tidal Lens, and any
second candidate. Humans, ships, text, pseudo-text, watermark, lesson diagram,
answer, reward, activation, recognition, authority, world response, or hidden
lore reject.

Layout/accessibility PASS requires one centered cover source across the exact
six layouts; relation/approach center retention and `.995` area; mapped
physical/semantic/label/protected rectangles; at least `44x44 CSS px` target;
center containment/clearance; no protected overlap; separation; keyboard,
pointer, touch, Enter, Space, speech-by-name, and switch-like convergence;
stable focus; exact forced-color focus; no horizontal escape; effective-200%
reflow; reduced-motion parity; and no clipped required text.

The decision file is one create-new bounded record for exact B1. ACCEPT is
allowed only with `technical=true`, `physical=true`, `layouts=true`,
`accessibility=true`, and `codes=NONE`. Otherwise one truthful objective REJECT
closes v9. A malformed, missing, late, replaced, or contradictory decision is
terminal.

## Acceptance, integration, validation, and rollback

REJECT gives B1 zero authority and requires identity-conditioned deletion of
target/decision and the exact empty live root. No product, registry, copy, alt,
credit, maturity, or reuse results.

ACCEPT copies the exact selected bytes with create-new semantics to the single
product raster, verifies exact identity, and creates one `PROVENANCE.md` with
only authorized Work Order/shell/request/model/options/prompt, B1, accepted
file identity, same-run helper identity, objective PASS scalars, immutable
manifest identity, product path, and cleanup completion. It contains no key,
bodies, base64, diagnostics, rejected identity/pixels, or hidden metadata.

After import, Quartermaster populates only the already authorized Host 06
source/provenance/geometry/six-layout/copy/alt slots. State remains fail-closed;
Host 05 -> Host 06 -> return order, sole unchanged L02-03, write-free
LOOK/TALK, read-only completed USE, save/privacy/no-cross-credit/offline,
Hosts 04/05 and 07+, later rail, MH-40 parity, RP-012, null deltas, and
`successor=null` remain exact.

Run focused Host 06/Host 05/model-choice/accessibility tests; learning/privacy
and related route regressions; validators and full suite; clean production and
fixture builds; PBA; served identity; exactly one isolated no-retry E2E with
one summary and one verifier; exact six-layout/live review; browser/process/
port cleanup; and Git identity. All `FRVE-005-v9` budgets apply.

Any post-import failure rolls back only the exact newly owned raster,
provenance, and empty product root by identity-conditioned nonrecursive
cleanup. Existing 17 accepted media remain immutable.

## Role routing, protected boundaries, and definition of done

Quartermaster owns the API operation, private technical/physical review,
objective decision, accepted asset/provenance, final-purpose copy/alt, and
content-complete report. On full PASS it hands the exact candidate to the Image
Specialist for runtime code/configuration presentation only; that role may not
generate/edit/replace media. Intelligence independently validates and alone
may release or advance maturity.

Repository QA quarantine, protected PDF, training tree, Martin's real browser/
profile/save, accepted-media bytes/pixels, v7/v8 paths/residuals, opaque roots,
VR-65, hidden lore, and unrelated work remain inaccessible. All inherited OPEN
records remain separate and OPEN. No reveal is authorized.

Definition of done is one fully accepted B1 source, exact import/provenance,
complete null-slot population, all deterministic/live gates and cleanup PASS,
Quartermaster `PRODUCTION CONTENT COMPLETE`, Image Specialist `RUNTIME
PRESENTATION COMPLETE`, and Intelligence `FIRST RUN PASS RELEASED`. Any lesser
result is truthful HOLD with no maturity advance.

Mission Captain signs **`FIRST RUN SHELL READY / FRSH-005-v1-VR-40 / SOLE
FUNDED B1 / ONE SEND / NO RETRY / PRIVATE REVIEW / ACCEPTED IMPORT OR EXACT
CLEANUP / FRESH QUARTERMASTER NEXT`**.
