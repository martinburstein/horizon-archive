# First Run Shell Variance - Retained-Carrier Production Authorization

Variance ID: `FRSH-005-v1-VR-32`

Disposition: **`FIRST RUN SHELL READY / SCIENCE CLEANUP AND PT06
NO-REQUEST PROOF ACCEPTED / ONE FRESH QUARTERMASTER RETAINED-CARRIER
PRODUCTION ATTEMPT AUTHORIZED FROM ORDINAL 2 / FRSH-005-v1-VR-32`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / decisive Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-28`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-31`

Effective treatment / blueprint: `FRDT-005-v1-VR-01` /
`FRPX-005-v1-VR-01`

Functional report: `FRCE-005-v1-VR-05`

Mission source inspected:
`2046f6655ec78f0bb6257bccdf3e5345b9614984`

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

Exact next recipient: one fresh Quartermaster / `quartermaster`

## Mission decision

Mission accepts `FRVE-005-v7-VR-28`. Fresh Science first completed the sole
identity-conditioned retained-output cleanup authorized by
`FRSH-005-v1-VR-31`, then executed the exact outer controller once with the
credential removed. The accepted proof is exact:

```text
retainedDll=4096 / 5092fcfd97f14c71841213a59c895d528bfb7b387808fadf6db9be7f9e3fe25d
retainedCleanup=dll absent / root absent
controllerExecutions=1
controllerExit=0
classification=ACCEPTED_PARENT_RESULT
parentExecutions=1
parentExit=0
parentStdout=EXACT_ACCEPTED_V2
parentStderr=EMPTY
childInvocations=1
postflightAbsent=true
controlledPathsAbsent=13/13
```

That result proves the exact retained sources, corrected runtime carrier,
current-run helper-DLL byte freeze, same-run exclusive byte reobservation,
helper load/identity/cleanup, PT06 boundary, parent/child capture, diagnostic
classification, zero-activity result, and exact postflight absence. It makes
no product or media claim. API sends remain `0`; ordinal `1` remains opaque
and consumed; ordinals `2` and `3` remain unstarted and unconsumed.

No conflict remains between the Work Order, Science envelope, treatment,
blueprint, corrected inert implementation, and retained production carrier.
Mission therefore authorizes exactly one fresh Quartermaster production
stage. Its first and only initially lawful send is ordinal `2`. Ordinal `3`
remains conditional exactly as frozen below. This is not authorization for a
second role, retry, alternate runner, repaired source, revealed candidate, or
later-address work.

Variance classification: **`REQUIRED CORRECTION RESOLVED / EXACT RETAINED
OUTPUT CLEANUP AND CREDENTIAL-CLEARED PT06 PROOF ACCEPTED / PRODUCTION
AUTHORITY RESTORED TO QUARTERMASTER`**.

## Exact retained carrier authority

The only source carriers are retained in these repository files:

```text
Production Pipeline/First Run/HOST06_SCIENCE_PARENT_V2.ps1
  58,512 strict-ASCII / LF-only / final-LF bytes
  943d3e83da37d3cba45f35833e2e283b24e9e1434ed137144a7df31ae6169c39

Production Pipeline/First Run/HOST06_SCIENCE_OUTER_CONTROLLER_V1.ps1
  15,559 strict-ASCII / LF-only / final-LF bytes
  55a4cf00b76cee30ebca0718e0f26341957ee72727ceaa620f0a20d48c1a317f
```

The outer controller is Science evidence only and is not invoked in
production. The retained parent is the immutable carrier/build authority; its
Science-specific wrapper is not invoked in production because it deliberately
removes `OPENAI_API_KEY`. Quartermaster may only extract the parent's exact
canonical launcher and combined carriers in memory and apply the parent's
exact two already-proved deterministic corrections. The resulting production
transport is frozen as:

```text
launcher=2001 / 96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
runtimeCombined=27690 / 91bcba2dfd55f0f9af296a9b92bfddd48312cc65aa62aa6a318e1f8fecd72ee0
runtimePrefix=976 / 5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
runtimeTail=26714 / 69a70f77940b2dd6457242a979522b9a7d262419968c30860c6e4bf71019c632
helperSource=1693 / 98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97
```

The first correction is the sole already-proved helper-source LF seam. The
second replaces the invalid prior-instance DLL digest with the already-proved
current-run freeze and later full-byte equality rule and changes the product
provenance line to record that run's actual DLL length/SHA. No other byte,
patch, interpolation, command, source file, encoded command, stdin carrier,
environment name, shell, helper, or transport is permitted.

Quartermaster must independently reproduce all five identities, parser-check
the launcher and corrected runtime carrier with zero errors, prove ordered
`PH01..PH08` and `PT01..PT18`, and conservatively prove the executable,
arguments, and environment value within their frozen limits before start.
Any mismatch is a pre-send `HOLD` with zero ordinal consumption.

The only production child is exact 64-bit Windows PowerShell
`5.1.26100.8875` at:

```text
C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
```

It receives exact arguments `-NoLogo -NoProfile -NonInteractive -ExecutionPolicy
Bypass -Command <exact launcher>` and only the exact corrected runtime carrier
under `HORIZON_ARCHIVE_HOST06_PREHELPER_V1`. The process inherits the existing
process `OPENAI_API_KEY` without Quartermaster reading, printing, measuring,
hashing, copying, logging, or putting it on a command line. The production
child alone performs the exact PT06 environment read. A missing/blank key is a
pre-send terminal `HOLD`, consumes no ordinal, and emits only the bounded
stable production failure record.

## Exact direct Image API request

Transport contract remains `HOST06-IMAGE-API-PSNET-v1`. The request is
exactly one `POST` to:

```text
https://api.openai.com/v1/images/generations
```

The request body has exactly these seven members and values:

```json
{
  "model": "gpt-image-2",
  "prompt": "<exact HOST06-GEN-PROMPT-v1 text>",
  "n": 1,
  "size": "3840x2160",
  "quality": "high",
  "background": "opaque",
  "output_format": "png"
}
```

`HOST06-GEN-PROMPT-v1` is the exact fenced text under that heading in
`FRSH-005-v1-VR-06`, normalized only to the in-memory request string. It is
exact `4,099` ASCII/UTF-8 bytes with SHA-256
`efd8c7f8b5ca6c0ec9e16ac82cdb008921a480e549b3b0b1b4b767f79e323179`.
No character or meaning changes; there is no input image, reference, edit,
variation, mask, seed, metadata, user, response-format field, compression,
moderation override, streaming, or extra member.

Headers are only environment-derived bearer Authorization, exact JSON UTF-8
content type, and JSON Accept. The handler has redirects disabled. The client
timeout is `00:10:00`. The active ordinal calls `SendAsync` exactly once with
`ResponseHeadersRead`. No retry handler, SDK, CLI, Python, package, proxy
override, browser, second send, alternate endpoint/model/parser, result URL,
managed-output discovery, or fallback exists.

## Ordinal ledger and one-stage limit

- Ordinal `1` is permanently consumed, opaque, inaccessible, and never
  inspected, retried, recovered, inferred, or cleaned.
- Ordinal `2` is the required first request. It becomes consumed when its one
  `SendAsync` begins, regardless of outcome.
- Ordinal `3` may begin only in the same still-running child after ordinal `2`
  yields a fully identity-proved objective source rejection, completes every
  technical, physical, composition, mapping, and accessibility review, and
  completes exact identity-conditioned target/root cleanup.
- A helper, credential, transport, HTTP, response, UTF-8, JSON, base64, file,
  handle, link, reparse, substitution, move, destination-race, decision,
  timeout, product, or cleanup failure is terminal and never authorizes
  ordinal `3`.
- Selection at ordinal `2` ends all sends. Rejection at ordinal `3` ends all
  lawful ordinals after exact cleanup. There is no retry, ordinal `4`, new
  process continuation, replacement, parallel call, alternate source, or
  repaired candidate.

This single Quartermaster stage may therefore make one send initially and at
most two sends total only under the conditional objective-rejection rule.

## Response, materialization, identity, and cleanup

The unchanged effective shell remains exact: require HTTP `200`, JSON content
type, response body `1..16,500,000` bytes, one strict UTF-8 JSON object, one
`data` array, one object, one canonical RFC 4648 `b64_json` string of
`4..16,000,000` code units, decoded-length arithmetic `1..12,000,000`, and
one in-memory base64 decode. Reject duplicate/unknown payload-bearing members,
URL results, trailing content, liberal alphabet/padding/pad bits, extra
payloads, or response diagnostics. Never output or retain the key, header,
request/response JSON, base64, response body, exception, or API diagnostic.

The exact live paths remain:

```text
C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-6eae8313-1407-492d-af7c-675051ab8e08
  .attempt-02-5f858a43-216c-4344-a4ce-0bfbcd042bcb.stage
  attempt-02.png
  .attempt-02.review-v1
  .attempt-03-63422fd8-bf71-489b-921a-5acb0fca7357.stage
  attempt-03.png
  .attempt-03.review-v1
```

The exact helper root/output remain those frozen in `FRWO-005-v7`. The child
must compile the exact source, freeze the current-run DLL bytes/length/SHA,
load only those bytes, later exclusively reobserve exact byte equality, prove
the reflection/native surface, one link/no reparse/size, then identity-delete
only the DLL and nonrecursively delete only its empty root before credential
or live-root activity. Provenance records the actual current-run DLL
length/SHA; those values never become a future reproducibility predicate.

Decoded bytes are written once only to the exact active stage through
`FileMode.CreateNew`, `FileAccess.Write`, `FileShare.None`, one bounded write,
`Flush(true)`, and close. The exact stage is exclusively reopened and must
match decoded length/SHA plus handle tuple, one-link, non-reparse, and size.
The same identity is proved immediately before the same-directory two-argument
no-replace move and again on the final target. Destination collision,
substitution, aliasing, identity drift, or uncertain cleanup is terminal.

Deletion is permitted only for the exact active file whose exclusive handle
matches the frozen active tuple, one-link/non-reparse/size predicates. Delete
only exact owned paths, then only the exact empty owned root nonrecursively.
No parent, sibling, glob, recursion, search, cache, managed directory,
ordinal-1 residual, opaque residual, VR-65, repository path, or protected path
is a cleanup target.

## Technical, physical, presentation, and decision gates

Before pixel review, the target must pass exact PNG signature, checked chunk
length/order/CRC, one first `IHDR` at `3840 x 2160`, 8-bit truecolor type `2`,
compression/filter/interlace `0`, one valid pre-IDAT `sRGB`, only constrained
`gAMA`/`cHRM`/`pHYs`, no alpha/`tRNS`/palette/profile/text/EXIF/time/animation/
private/unknown chunks, consecutive nonempty IDAT, one final empty IEND, no
trailing byte, one complete zlib stream, exact `24,885,360` structural bytes,
valid scanline filters, and isolated natural-size browser decode. No repair,
conversion, alternate decode, screenshot, export, crop, derivative, or reveal
is authorized.

Quartermaster then judges the original target against complete `PHY-01..12`
and the exact directorial hierarchy: one complete weathered lens at least
`80%` nested in one tilted `12..35 degree` conformal cradle; at least two
load/stress contacts; at least two drainage seams; at least `2%` source-height
dry clearance and one continuous dry approach; at least three Host 05-side
fragments; at least `25%` inner-lens horizon/reflection crossing; first-person
and no human/text/pseudo-text/watermark trace; same-basin continuity; one
candidate distinct from protected features; no native lesson diagram, answer,
purpose certainty, world response, recognition, reward, access, authority,
invitation, or hidden lore.

The exact source bands and all six layouts remain conjunctive: full centered
`cover / 50% 50%`, relation and approach retain at least `99.5%` area and
their centers, mapping uses the `1/64 CSS px` floor lattice, semantic target is
at least `44 x 44 CSS px`, focus is stable, forced color is exact `3px
Highlight`, reduced motion and non-color meaning are preserved, and no
protected intersection or horizontal escape exists.

The same-process review rendezvous remains exact
`HOST06_REVIEW_V1`. Quartermaster writes one bounded data-only decision at the
exact active review path only after all review gates. `ACCEPT` requires
technical/physical/layout/accessibility all true and `codes=NONE`. `REJECT`
requires complete objective rejection codes. No candidate image, pixel,
screenshot, base64, preview, path, rejected hash/length, or diagnostic enters
the report, repository, prompt, browser profile, or chat.

## Selection, product, content, and validation

At most the first fully passing target may be copied byte-identically and
create-new to:

```text
Visual Direction/Production Masters/2026-08-10-first-run-host06/host06-stranded-lens-cradle-master-v1.png
Visual Direction/Production Masters/2026-08-10-first-run-host06/PROVENANCE.md
```

Product and target length/SHA must be exact. Provenance records only the
authorized Work Order/shell, transport/helper/prompt identities, endpoint,
model and seven options, no-input/edit/variation declaration, consumed
ordinals/dispositions, selected basename/length/SHA, actual current-run DLL
length/SHA, successful identity/technical/decode/physical/layout/accessibility
gates, immutable manifest identity, product path, accepted-media unchanged,
and exact cleanup. It contains no credential/header, request/response JSON,
base64, payload, native tuple, helper/DLL bytes, rejected evidence,
diagnostics, exception, hidden lore, or residual claim.

Only after product/provenance identity may Quartermaster populate the already
declared Host 06 source, provenance, finite physical/activation/protected/
six-layout scalars, seven `FRPX05_COPY` slots, and one factual alt slot in
`horizon-archive-game/src/drownedArchive.js`, plus applicable existing focused
content/source-contract tests. `source.enabled=true` is written last. The
selected ordinal must be exact `2|3`. No behavior, lesson/evaluator,
sanitizer, save schema, dependency, route, world, ending, Host 07+, or later
rail change is permitted.

The fixed player outcome remains exact Host 05 mastery -> calm fragment-led
same-basin Host 06 -> sole unchanged `L02-03` -> unchanged next Drowned
boundary. LOOK/TALK remain write-free, completed USE read-only, remediation
answer-free, save/private clearing exact, Demo Tour no-credit, both MH-40
outcomes equal, shared RP-012 exact, all deltas null, and `successor=null`.

Quartermaster runs the applicable authority/integrity, focused content/source,
learning/privacy, related rail/ending, sorted `40/40`, cold full, production
and TD-012 fixture builds, exact PBA, served product identity, offline/same-
origin, natural decode/image-ready/task/CLS, six-layout/accessibility, owned
process/path cleanup, diff, and Git gates. The complete clean-start E2E remains
reserved for later Intelligence and may not be run by Quartermaster.

`PRODUCTION CONTENT COMPLETE` requires one fully passing selected source,
exact product/provenance/registry/copy/alt identity, all applicable gates,
exact helper/live-root cleanup, a dedicated commit and push, and a synchronized
handoff to one fresh Image Specialist. Any terminal failure or exhaustion of
both lawful ordinals produces one exact `HOLD`, committed with the synchronized
handoff to the earliest owner; it does not reveal or retain a rejected source.

## Permissions, protections, rollback, and role freedoms

Quartermaster may change only the two product media paths above,
`horizon-archive-game/src/drownedArchive.js`, applicable existing focused
content/source-contract tests, one versioned Quartermaster ledger, and
`NEXT_INSTANCE_HANDOFF.md`. It may choose only pass/reject facts, finite
measurements within the frozen predicates, the seven final-purpose copy values,
one observable-fact alt value, and bounded provenance/report wording.

Rollback is limited to exact owned new product/provenance files and the exact
Quartermaster product/config/test/report delta after identity proof. It never
uses repository reset and never touches accepted media, the manifest, helper
or live parent, a residual, user work, Hosts 04/05, curriculum, save schema,
dependencies, Host 07+, later rail, or protected state.

Repository QA quarantine, `Art Of No Mans Sky Book Scan.pdf`, `Simplilearn
Training Files/`, Martin's real browser/profile/save, accepted-media bytes and
pixels, the real managed directory, ordinal-1 residual, opaque residuals,
VR-65, hidden lore, and user/untracked work remain inaccessible. The thirteen
inherited process records and separate Commandant filename/search-scope record
remain separate and **OPEN**.

The Image Specialist remains later and may only polish runtime code/config
presentation around unchanged selected bytes. Intelligence alone may release
or advance maturity. No cycle reveal or image display is authorized.

## Mission validation, Git gate, and exact Quartermaster handoff

Mission read the required active intake, workflow, registry, full Mission
profile, complete `FRVE-005-v7-VR-28`, `FRSH-005-v1-VR-31`,
`FRVE-005-v7-VR-27`, both retained sources, complete `FRWO-005-v7`, effective
request/prompt/product authorities, treatment, blueprint,
`FRCE-005-v1-VR-05`, release map, scoreboard, and immutable manifest identity.
Starting local `HEAD` was exact
`2046f6655ec78f0bb6257bccdf3e5345b9614984`; `origin/main` was the Science
stage's unpushed predecessor `a2ef74832f229da55fb96621081fb8aa4be3fd3c`.

Mission performed no outer/parent/child execution, helper compile/load,
credential read, request construction, API send, ordinal consumption, live
root allocation, media read, pixel review, product change, test/build/browser/
E2E, reveal, residual access, maturity update, record closure, release, or
`FIRST RUN COMPLETE` operation.

This Mission contribution contains only this shell and synchronized handoff.
It must be committed and pushed at the shell gate, including the already
committed Science evidence, and exact `HEAD == origin/main == remote main`
must be proved before Quartermaster begins.

After exact synchronization, one fresh Quartermaster / `quartermaster` reads
the complete active intake, full Quartermaster profile, this complete shell,
complete `FRVE-005-v7-VR-28`, `FRSH-005-v1-VR-31`, complete retained parent,
complete `FRWO-005-v7`, effective prompt/request/product shell, treatment,
blueprint, `FRCE-005-v1-VR-05`, corrected code candidate, immutable
`FRAM-001-v1`, and exact current product/runtime controls. It independently
proves every preflight predicate, then performs the one bounded production
stage beginning at ordinal `2` exactly as authorized above.

Mission Captain signs **`FIRST RUN SHELL READY / ONE FRESH QUARTERMASTER
RETAINED-CARRIER PRODUCTION ATTEMPT AUTHORIZED FROM ORDINAL 2 /
FRSH-005-v1-VR-32`** from exact source
`2046f6655ec78f0bb6257bccdf3e5345b9614984`.
