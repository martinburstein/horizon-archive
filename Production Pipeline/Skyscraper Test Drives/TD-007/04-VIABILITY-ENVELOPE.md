# TD-007 Viability Envelope - Braided Verge

## Document control

| Field | Value |
|---|---|
| Stage | Office of Science Administrator |
| Agent ID | `office_of_science_administrator` |
| Certificate ID | `VE-TD007-v1` |
| Product brief | `GDB-TD007-v1` |
| World baseline | `WNMP-TD007-v1` |
| Floor stack | `CFS-TD007-v1` |
| Route contract | `TD007-RTA-001` |
| Released predecessor | `TD-006 / SS-RP006-INTERVAL-WORKS-v1 / IW-30` |
| Selected slice | `TD-007-RP007-BRAIDED-VERGE-v1` |
| Campaign address | `RP-007 / SC-08 / BV-00-BV-30` |
| Budget authority | `PBA-TD007-v1` |
| Preceding stage commit | `4893c3e0be645e6456ddec1b63488ed81aa35bde` |
| Disposition | **`VIABILITY READY - ROUTE, BROWSER-SAFE FILE WORK, EVIDENCE, RECORD, RECOVERY, ACCESSIBILITY, ASSETS, AND BUDGET VALIDATED`** |

Science independently finds `TD007-RTA-001` viable from exact released
TD-006. The candidate can preserve all predecessor bytes, implement the
frozen RP-007 learning contracts in the local browser, keep learner file work
private and transient, save only finalized allowlisted evidence, restore
replay-free at BV-30, remain accessible and offline, and fit one fresh
non-compounding production budget.

This certificate authorizes Mission reconciliation only. It does not issue a
shell, deploy a Marine, expose RP-007 in production, generate art, or open a
later route. The protected `BraidedVergeProtectedJourney` remains reference
evidence and must not be imported into the browser build.

## Authority certificate

| Authority | SHA-256 or identity |
|---|---|
| `AGENTS.md` | `DD96BE91D0BD8DACD2A7D0EF7A3949047658F36C577F1A177A9CCABBB2622349` |
| `NEXT_INSTANCE_HANDOFF.md` at stage start | `CD84AEB8E70EB49A40CEFE46C8BB8CCEFF22DB96D7EE992FD202C52C0C2B4665` |
| `SKYSCRAPER_AGENT_WORKFLOW.md` | `CA3D2868DB35D82C08B42EB83BB69A5C49483C60E281476EE79D74359CCA719C` |
| `Skyscraper Agent Profiles/README.md` | `78170827BD7BA4D420EC985937810396C3ED241A81E9ED6F697B0D9C24666D13` |
| `office-of-science-administrator.md` | `CB5C3A8D1699A9A91829FC403359A59B01EE5F95805794E8C2298EB4EBFD6B44` |
| `TD-007/01-GAME-DEVELOPMENT-BRIEF.md` | `42B6A700C5395C7146011162A50A73BCAE63235B909620E82E67389CDDA6D10E` |
| `TD-007/02-WORLD-NARRATIVE-MASTERPLAN.md` | `EA2B14381FF88EBD45350E3B41CC4EFAB8D168B08EC2FBDBDB93523F6A2BE4A3` |
| `TD-007/03-CAMPAIGN-FLOOR-STACK.md` | `2F12C436493FA2A4EBDB6DD1847CE78CBFEE1498BC8DDCC3B0D78EF61C4665DC` |
| `TD-006/11-AS-BUILT-RECONCILIATION.md` | `A1278C88841EFA9970E05F033BDA9A2897FE85080CD76BB7026C4320F13347A5` |
| `Production Pipeline/CURRICULUM_SPINE.md` | `2439A2A1ECEF574FC7053F00CC3049010DB8FF0153DCCAEE98D65F9036084519` |
| `Production Pipeline/GAMEPLAY_SYSTEMS_SPINE.md` | `489559254CE9FBDFE7248B81BD335D812DD61190B5ACE70F59B96BF1C5A00BFF` |
| `Production Pipeline/PRODUCTION_READINESS_SPINE.md` | `1D2AAE16A05742AC07B72D0FFD3D62C8C3DA114FE129ABD53AD9B823091C2F62` |
| `curriculum/readiness/RP-007/contract.json` | `E7A9D730CAC81E511721D2030292F3E61409172110D9471CC79C2F9E6F2F8A85` |
| `curriculum/readiness/RP-007/validate_mapping.py` | `B63A41575525420ACE253610860AE3240928EBF9F797298A1F396E3C61BA0CB1` |
| `RP-007-braided-verge.md` | `47A742D6E363087F939D2B5772556D710D081C7B4F688EA85CFAC7D8192B4644` |
| `SC-08-braided-verge.md` | `80233F0D858BF17D2BAD588053D7066D0614480C316A28B6BF3A433382BA315E` |
| protected `BraidedVergeProtectedJourney.js` | `CA1FB91EF1657BC22D4B1606C0A11DDCE68BE6C768415E805A889F78B87759B1` |
| `04A-PRODUCTION-BUDGET-AUTHORITY.json` | `12885881D8CB96A244B8973F0EBCFBB0EA91B983B29C9F3B72922EFEBA111EBF` |
| executable budget validator | `DDB51C0198C8778E5774233BDFE06F2EC922F47035A748188CFEB46F6BEBA841` |

## Official Microsoft source review

The repository-named `foundry-azure-source-priority` skill was not available
in this session. Science followed the required priority directly and used
only official Microsoft sources for the current learning claim:

- [AI-901 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901)
  was checked on 2026-07-29. Its April 15, 2026 objectives explicitly retain
  “Identify features and capabilities of computer vision and
  image-generation models,” and separately distinguish interpreting visual
  input from creating new visual output.
- [Azure Vision in Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview)
  describes processing existing images and returning information based on
  visual features. It also records the current Image Analysis 4.0 retirement
  warning; RP-007 does not teach that deprecated implementation.
- [Foundry Models sold by Azure](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure)
  identifies image-generation models as producing original images from
  natural language.
- The [Foundry hub](https://learn.microsoft.com/en-us/azure/foundry/),
  [SDK and endpoints overview](https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview),
  [Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/overview),
  and [Content Understanding](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview)
  remain official supporting context.

`RP007-VISION-GENERATION-01` is a focused course-authored offline recognition
exercise. It neither calls nor simulates a live Microsoft service and it
cannot establish resource, model, endpoint, credential, deployment,
permission, external action, or exam authority.

## Route and predecessor viability

### Sole transition

The only permitted transition is:

```text
TD007-RTA-001
PILOT // FOLLOW EXPEDITION-MARKED ADJACENT SURVEY TO BRAIDED VERGE
```

The Pilot owns this fresh choice. The Scene, System, released record,
serviced continuation, sound, material relation, save completion, packet
label, Builder work, Machine, and world do not emit or authorize it.

### Exact predecessor dependency

Normal implementation must reuse, not duplicate, the released TD-006
authorities:

- key `horizon-archive-rp006-interval-works-save-v1`;
- version `rp006.interval-works-save.v1`;
- shell `SS-RP006-INTERVAL-WORKS-v1`;
- controller `rp006.interval-works-controller.v1`;
- packet `RP-006`;
- mapping `RP006-A3-INTERVAL-WORKS`;
- checkpoint `interval_works_complete`;
- exact ordered four observations, exact note, exact eight evidence records,
  `continuation="continuation"`, null city/external deltas, and
  `successor=null`;
- exact raw/object read-back; and
- immutable TD-005 and TD-004 predecessor bytes.

The mounted source must be exact no-replay `IW-30 VERIFY + RETURN` on SC-07.
No scenery, continuation notation, physical relation, sound, prior
completion, or saved field may substitute for the fresh route action.

### Validation before consumption

Route handling must occur in this order:

1. reject Demo Tour before any campaign adapter access;
2. read the released TD-006 bytes once through its released adapter;
3. run the released TD-006 sanitizer and require exact raw/object read-back;
4. require exact IW-30/SC-07 no-replay state;
5. verify TD-005 and TD-004 bytes are unchanged;
6. clear or reject private/transient material;
7. validate normal mode, source shell/controller/packet/mapping/checkpoint,
   active owner group, Pilot owner, exact action, one of seven modalities,
   and opaque token shape;
8. prove the token is fresh and unused;
9. consume it once; and
10. atomically mount only `BV-00 ARRIVE + ORIENT` on SC-08.

The transition itself writes no record, observation, learning, review,
route, world, city, external, authority, or successor state. Duplicate,
stale, malformed, combined, private-bearing, wrong-owner, wrong-action,
wrong-modality, Tour, or interrupted intent is a no-op at IW-30 and does not
spend a later valid token.

## Normal RP-007 systems and state model

### New normal identities

- Save key:
  `horizon-archive-rp007-braided-verge-save-v1`
- Record version:
  `rp007.braided-verge-save.v1`
- Controller version:
  `rp007.braided-verge-controller.v1`
- Route controller:
  `td007.route-controller.v1`

These names are distinct from
`rp007.protected-journey.v1`. Protected code, Node `fs` utilities, its
in-memory protected adapter, fixtures, and test-only controls cannot enter
production.

### Checkpoint graph

```text
IW-30 ROUTE CHOICE
  -> BV-00 ARRIVE + ORIENT
  -> BV-10 INSPECT BRAIDED EVIDENCE
  -> BV-20 RELATE + SAVE
  -> BV-30 VERIFY + RETURN
```

Five observations are equal peers and accept all `120` orders:

1. `distinct_continuities_trace`
2. `recurrent_exposed_association`
3. `bounded_contact_difference`
4. `crosscut_relative_order`
5. `closed_junction_stewardship`

Revisit is idempotent. Order, focus, timing, modality, color, light, sound,
motion, position, scene, and presentation cannot change or complete a peer.
After all five peers, deterministic first-incomplete ownership is:

1. Python primary
2. Python trace
3. Python transfer
4. vision/generation primary
5. vision/generation retrieval
6. vision/generation transfer
7. capability-boundary explanation
8. relation-boundary explanation
9. bounded review and explicit save

### Exact durable record allowlist

The canonical record has exactly ten root keys:

```text
version
packetId
mappingId
checkpoint
continuation
cityStateDelta
externalStateDelta
successor
note
evidence
```

Required fixed identities are `RP-007`,
`RP007-A3-BRAIDED-VERGE`, `braided_verge_complete`,
`continuation="continuation"`, null city/external deltas, and
`successor=null`.

`note` has only:

- the exact five observation IDs;
- `continuities="distinct_visible_continuities"`;
- `association="recurrent_exposed_association"`;
- `difference="one_bounded_difference"`;
- `order="relative_order_supported"`;
- `junction="closed_junction_unavailable"`;
- `stewardship="layered_stewardship_observed"`;
- `replicas="sanitized_precomputed_only"`; and
- `unity`, `coordination`, `cause`, `ownership`, `purpose`, and
  `destination` all `null`.

`evidence` contains exactly eight ordered finalized records:

1. `PY-015 / primary`
2. `PY-015 / trace`
3. `PY-015 / transfer`
4. `RP007-VISION-GENERATION-01 / primary`
5. `RP007-VISION-GENERATION-01 / retrieval`
6. `RP007-VISION-GENERATION-01 / transfer`
7. `RP007-VISION-GENERATION-01 / capability_boundary_explanation`
8. `RP007-VISION-GENERATION-01 / relation_boundary_explanation`

Each record retains only packet, mapping, form, skill/objective ID,
dimension correctness, bounded attempt count, bounded hint level, optional
bounded confidence, scored misconception tags, and mastery status.

### Private and transient denylist

Never persist or log:

- learner source or source fragments;
- report text, restored report, file bytes, filename work state, temporary
  path, temporary directory, or cleanup diagnostics;
- raw cases, active choices, case answers, free-form reasoning, feedback,
  hints, private notes, identity material, focus/pointer/token history;
- credentials, secrets, endpoints, payloads, responses, live samples,
  generated media, prompts, exam items, or external-action requests; or
- inferred unity, coordination, communication, dependence, equivalence,
  cause, ownership, purpose, identity, destination, junction contents, or
  successor.

Clear transient work on miss, retry, boundary replacement, early return,
failed write, reload, invalid restore, successful save, and verified restore.

### Atomic save and recovery

Normal storage must use canonical serialized bytes and one replacement:

1. read and retain prior RP-007 bytes or verified absence;
2. snapshot exact TD-006, TD-005, and TD-004 predecessor bytes;
3. sanitize the candidate in memory;
4. reject before writing unless every conjunct and exact allowlist passes;
5. write canonical RP-007 bytes once;
6. read raw bytes back once;
7. parse, sanitize, and require exact canonical byte equality;
8. verify all predecessor bytes are unchanged;
9. on any failure, restore the prior RP-007 bytes or verified absence;
10. read back and prove rollback byte equality; and
11. if rollback cannot be verified, stop with `HOLD` rather than report
    partial completion.

Only exact verified RP-007 bytes restore `BV-30 VERIFY + RETURN`. Restore
replays no route, arrival, observation, evaluator, explanation, review,
save, sound, motion, or world event.

Invalid/unsaved RP-007 re-entry clears RP-007 work and reconstructs exact
IW-30/SC-07 from the retained released TD-006 record. The Pilot must choose a
fresh route again. Returns to IW-30 or City Threshold are write-free and
replay-free. No direct RP-007 shortcut to earlier packet floors exists.

## Browser-safe PY-015 work boundary

### Viability decision

**PASS, with an exact implementation constraint.**

A local browser cannot import the Node-only protected `node:fs` evaluator and
the budget forbids adding a Python/WASM runtime. Normal RP-007 must therefore
implement one dedicated session-only virtual temporary workspace in ordinary
browser JavaScript. That workspace performs the approved file-operation plan
over an in-memory file entry and then destroys the entry. It does not claim
to execute arbitrary Python.

Required user-facing truth label:

> The course validator executes the approved file-operation plan against an
> isolated session-only virtual temporary file. It does not execute arbitrary
> Python or contact a live service.

### Exact execution semantics

For primary and transfer independently:

1. receive the transient learner source only in component/controller memory;
2. normalize line endings for validation without storing the source;
3. require exactly one `from pathlib import Path`;
4. require the exact supplied relative filename and reject absolute paths,
   separators, traversal, URLs, drive prefixes, environment expansion, and
   alternate names;
5. parse exactly the supplied ordered report text with final newline;
6. require one exact `write_text(report_text, encoding="utf-8")`;
7. require one exact `read_text(encoding="utf-8")`;
8. reject forbidden imports, calls, process/environment/package/network/
   browser-storage/output operations, extra assignments, aliases, or
   hardcoded restored output;
9. create a fresh unshared in-memory workspace object;
10. encode the supplied report once with `TextEncoder` and write one entry;
11. read that same entry once and decode with fatal UTF-8 semantics;
12. compare byte-for-byte and text-for-text with the supplied report;
13. score the exact eight frozen checks;
14. replace response material with allowlisted booleans and failed-check IDs
    only; and
15. in an unconditional `finally`, zero/replace transient byte buffers,
    remove the entry, clear the workspace map, drop source/report/restored
    references, and report only boolean cleanup success.

The workspace may use no `localStorage`, `sessionStorage`, IndexedDB, OPFS,
Cache API, service worker, download, clipboard write, file picker, external
path, network, Worker persistence, environment mutation, package install,
Python runtime, WASM runtime, or hidden browser profile state.

The operation is real as a bounded course-workspace write/read round trip;
the Python source-shape checks are static. Copy and status must preserve that
distinction. A UI that says “Python executed,” “program ran,” “file saved to
disk,” or equivalent is a hard stop.

### Evidence and recovery

- Strict primary is `8/8`; any miss exposes only failed-check IDs and
  answer-free remediation, then clears all work before a genuinely blank
  retry.
- Delayed closed-note trace scores the exact eight
  Path/relative-name/write/read/UTF-8/round-trip/unavailable/unknown
  dimensions.
- Transfer starts genuinely blank and uses the distinct supplied filename
  and report.
- Primary output, source, report, filename work state, or result cannot
  prefill transfer.
- Cleanup failure invalidates the attempt and focuses the private-safe System
  status before a wholly blank retry.
- Scene transition, return, reload, resume, and save all clear the workspace.

The existing protected Node reference independently demonstrates one actual
OS-temporary-directory implementation and cleanup. It is evidence for the
frozen semantics, not production code or proof of the future browser
implementation.

## Independent learning and evidence firewall

### Python chain

`PY-015` remains exactly:

- primary `8/8`;
- actual-failed-check-only answer-free remediation;
- wholly blank unlimited retry;
- delayed closed-note eight-dimension trace; and
- distinct genuinely blank transfer `8/8`.

The report preserves separate continuities, recurrent association, bounded
difference, relative order, closed-junction unavailability, and
`unity=cause=purpose=None`. No learner or runtime operation reads, joins,
routes, opens, changes, or controls live world material.

### AI-901 chain

`RP007-VISION-GENERATION-01 / AI901-D1-O7` remains independently:

- four primary cases across capability and deciding-signal dimensions,
  strict `8/8`;
- per-case/per-dimension answer-free remediation and blank retry;
- two delayed retrieval cases, strict `4/4`;
- four distinct genuinely blank transfer cases, strict `8/8`;
- one separate capability-boundary explanation; and
- one separate relation-boundary explanation.

Existing visual input maps to vision/analysis; creating new visual output
from a prompt maps to generation. These neutral course cases use no SC-08
image, layout, sequence, relation, answer cue, live analysis, live
generation, endpoint, credential, or external service.

### Zero cross-credit

The following are separate conjuncts and cannot prefill, compensate for,
remediate, or finalize one another:

- five Scene observations;
- Python primary, trace, and transfer;
- AI-901 primary, retrieval, transfer, and both explanations;
- route, orientation, review, save, restore, and return;
- presentation, world visibility, image identity, layout, focus, modality,
  timing, confidence, motion, sound, and status; and
- Demo Tour.

Only all finalized conjuncts permit bounded review. Only explicit fresh
private-free save intent after review may attempt persistence. Conjunction
does not create cross-credit.

## Accessibility, responsive, and assistive contract

- Seven modalities converge on one semantic action:
  pointer, touch, keyboard Enter, keyboard Space, switch, speech, and screen
  reader.
- Validation precedes token consumption. Keyboard repeat and multi-event
  activation bursts remain one-hit.
- Exactly one owner/message/content/action group is active.
- Normal group replacement focuses the heading; observation return focuses
  the unordered peer chooser; recovery announces one polite atomic System
  status then focuses the first incomplete scored control.
- Every required target is at least `44 x 44 CSS px`.
- Labels persist. Native semantics, `aria-describedby`, `aria-invalid`, and
  complete text associate fields, errors, help, results, and cleanup state.
- Color, left/right, position, sequence, sound, motion, brightness, glow, or
  material appearance is never sole meaning.
- Forced colors preserve focus, owner grouping, recorded/available
  distinction, errors, disabled state, and selected controls with system
  colors and explicit borders.
- Reduced motion uses direct replacement or registered stills and
  `scroll-behavior:auto`; it changes no evidence, focus, route, or world
  meaning.
- Grayscale must preserve both continuity identities and all five
  observation meanings through geometry/material structure and text.

Exact DPR-1 review matrix:

| Review | Requirement |
|---|---|
| desktop | `1920 x 1080`; complete outer shell in `100dvh`; no outer scroll; world dominant; complete active group/actions visible |
| laptop | `1366 x 768`; complete shell; no horizontal escape; any permitted internal panel scroll is evident and keyboard reachable |
| narrow | `390 x 844`; world above one natural interface column; no horizontal escape or clipped owner/status/action |
| effective 200% | `768 x 900` CSS viewport; natural reflow; no horizontal escape; complete labels/errors/status/actions |

## Closed review fixture

Create one target-only fixture, storage-free and absent from production. It
must:

- accept only a versioned allowlist of public, private-free scenarios;
- include route choice, BV-00, every five-peer observation role, every
  learning owner/form, actual-miss recovery, cleanup failure, review, save
  success/failure, BV-30 restore, both returns, forced colors, and reduced
  motion;
- use no URL/query/hash injection, campaign adapter, arbitrary JSON, browser
  storage, network, service worker, clipboard, file picker, or Martin-owned
  state;
- separate product-focused controls/content from harness controls/output;
- record exact world-role and alternative-text identity for each visual
  state;
- emit a bounded screenshot set rather than one capture per permutation;
- prove fixture paths, IDs, markers, scenario copy, and harness styles are
  absent from production output; and
- stop its owned process and restore generated QA artifacts.

Fixture checks support live review but never replace complete product E2E,
whole-document containment, or human visual inspection.

## Offline, Tour, authority, and invariant world

- No account, sign-in, credential, Azure resource, live endpoint, SDK call,
  HTTP/socket request, upload, analysis, generation, external file, external
  path, package install, or external action is required.
- Demo Tour isolates before campaign storage, exposes no campaign dispatcher,
  creates no evidence/save/route/token, and cannot reach BV-30.
- No score or save claims official Microsoft authorship, exam items, exam
  readiness guarantee, certification, permission, access, authentication,
  external authority, or service truth.
- SC-07 and SC-08 geometry, contacts, junction, continuity state,
  maintenance, light, sound, and environmental clocks remain invariant.
- No result, save, restore, return, or visual state changes the city, world,
  closed junction, continuation, or later surface.
- `Braided Verge`, continuity, association, difference, order, junction,
  stewardship, and all interpretations remain expedition labels.
- BV-30 is a hard stop before any RP-008 scene, route, cue, event, identity,
  purpose, reward, access, permission, authority, response, `RP-013`,
  successor, or post-ending content.

## Asset plan

Exactly two new runtime image roles are permitted:

1. `SC-08-PANORAMA-MASTER` - invariant shared-region panorama;
2. `SC-08-CONTACT-DETAIL-MASTER` - registered contact-detail identity.

Each source is lossless 16:9, preferably generator-native `6144 x 3456` or
larger and never below `3840 x 2160`. Native generation size and any
deterministic enlargement must be recorded separately and truthfully.

Required obligations:

- direct production import and exact source/runtime byte/hash identity;
- prompt, model/mode, reference, date, selection, edit, cleanup, derivative,
  crop, mask, and approval provenance;
- responsive wide/laptop/narrow/effective-200 crop/fitting evidence;
- descriptive alternative treatment and state-to-scene identity;
- grayscale, forced-color, reduced-motion, thumbnail, and contact-detail QA;
- no baked UI, text, arrows, numbers, answer cues, merged continuities,
  access affordance, route portal, protagonist, human trace, or later state;
- explicit structural-placeholder retirement;
- separate counts for private generation attempts, accepted sources, and
  runtime derivatives; and
- exactly one later accepted cycle reveal under the workflow recovery rule.

No new audio, font, video, source map, Python/WASM runtime, or network payload
is authorized.

## Fresh non-compounding production budget

`PBA-TD007-v1` remeasures the exact accepted TD-006 release. It does not
inherit unused TD-006 allowance.

| Measure | Exact TD-006 baseline | TD-007 cap |
|---|---:|---:|
| aggregate JavaScript | `1,340,562` | `1,407,590` |
| aggregate CSS | `91,182` | `95,741` |
| production modules | `193` | `202` |
| runtime media | `29,686,267` / `13` | `38,074,875` total |
| new runtime media | `0` | at most `2` image-only assets / `8,388,608` bytes |
| production build | `10.979s` wall; `8.60s` Vite | `<=60s` |
| focused suite | fresh `0.898s` | `<=30s` |
| related suite | fresh `1.266s` | `<=60s` |
| full suite | fresh `9.597s` | `<=60s` |
| complete E2E | release measurement required | `<=180s` |
| sampled main-thread task | release measurement required | `<=100ms` |

Every JS/CSS chunk and runtime asset counts. Missing accepted media,
source-map hiding, extra image roles, audio/font/video/runtime/network
payloads, or visible-quality reduction fails the budget.

The existing executable validator accepts the new authority through its
`--authority` option. Fresh baseline result:

```text
PBA-TD007-v1 / baseline / PASS
JS 1,340,562; CSS 91,182; modules 193
media 29,686,267 / 13
new media 0; accepted media missing 0
```

Negative probes correctly reject module `203 > 202` and build
`60.001s > 60s`.

## Connected validation ladder

### Mission contract checks

Mission must prove line-by-line agreement among `GDB-TD007-v1`,
`WNMP-TD007-v1`, `CFS-TD007-v1`, `VE-TD007-v1`, and `PBA-TD007-v1`.
The shell must name every record key/version, exact state, visual role,
focus/status identity, return, hard stop, and validation command.

### Combat focused and related checks

Required focused coverage:

- strict TD-006 dependency and predecessor byte preservation;
- route validation-before-consumption across seven modalities;
- invalid/duplicate/stale/Tour/interrupted/private route behavior;
- all 120 observation orders and idempotent revisits;
- browser virtual-file source validation, UTF-8 one-write/one-read,
  primary/transfer independence, cleanup, and truthful status;
- strict AI primary/retrieval/transfer and two explanations;
- no cross-credit and first-incomplete recovery;
- private/transient clearing;
- exact allowlisted atomic save, malformed read-back, rollback, and
  replay-free restore;
- exact returns, Tour isolation, invariant world, and hard stop.

Related regression must include complete TD-004 through TD-006 routes,
records, raw bytes, returns, assets, evidence, restore, sanitation, and
fixture isolation.

### Build and release checks

- focused, related, full suite, RP-007 mapping self-test, all applicable
  readiness validators, production build, and executable PBA;
- isolated production preview with exact served root/deep-link/chunk/media
  identity;
- one complete non-overlapping E2E after build/preview isolation;
- desktop/laptop/narrow/effective-200, forced-color, reduced-motion,
  grayscale, focus, status, targets, crop, alternative-text, local-request,
  runtime-log, and cleanup review;
- exact two-role source/runtime/provenance/direct-import accounting;
- fixture and protected-source absence from production;
- no source maps, protected paths, RP-008 markers, private strings, or
  hidden-lore material;
- patch-integrity review and QA restoration; and
- independent Intelligence shell reconciliation and variance
  classification.

## Fresh Science evidence

| Gate | Fresh independent result |
|---|---|
| RP-007 focused protected suite | `13/13 PASS`; Node `0.816s`; wall `0.898s` |
| TD-006/RP-007 related protected suite | `26/26 PASS`; Node `1.181s`; wall `1.266s` |
| complete game suite | `838/838 PASS`; Node `8.780s`; wall `9.597s` |
| RP-007 mapping self-test | `PASS`: file round trip, vision/generation evidence, mystery locks, bypass probes |
| all 120 observation orders | `PASS` |
| PY-015 protected OS-temp proof | primary and transfer write/read once with UTF-8; relative path; file and directory cleared |
| browser memory-workspace feasibility probe | primary and transfer each perform one UTF-8 write/read and clear their in-memory workspace; `PASS` |
| AI-901 source proof | current official study guide explicitly retains vision/image-generation capability objective |
| production build | `PASS`; `193` modules; Vite `8.60s`; wall `10.979s` |
| exact baseline identity | JS/CSS/media hashes match released TD-006 |
| PBA executable baseline | `PBA-TD007-v1 PASS`; negative module/timing probes reject |
| protected boundary | hidden lore unopened; Martin browser/save uninspected; protected user files untouched |

No live browser implementation or normal RP-007 route exists yet. The
browser virtual-file contract above is therefore a required construction and
release gate, not a claim that the future UI already passed live review.

## Risk register, flexibility, and hard stops

| Risk | Control |
|---|---|
| Static source matching is presented as arbitrary Python execution | required truthful label; hard reject any broader execution claim |
| Memory workspace accidentally becomes durable | explicit storage/API denylist, `finally` cleanup, source scan, browser-context storage audit |
| Report/source leaks through status, errors, save, or logs | boolean/failed-ID result allowlist; private-string probes; console and persistence audit |
| TD-006 bytes are migrated for RP-007 | read-only predecessor adapter; exact byte snapshots before/after transition/save/failure |
| Save partially replaces RP-007 | canonical write/read-back with verified rollback or HOLD |
| Association becomes unity/coordination | exact note allowlist and two separate explanations; no visual merged form |
| Relative order becomes cause/chronology | cause/duration remain unavailable/null; no arrows/timeline |
| Closed junction becomes access challenge | external boundary and bypass only; no control, reward, opening, or contents |
| Two images exceed budget or lose meaning on crops | exact role count, 8 MiB combined cap, registered crops, grayscale/accessibility QA |
| Presentation becomes evidence | controller separation and explicit zero-credit tests |
| RP-008 leaks through continuation | BV-30 hard stop and production/source marker scan |

Downstream may choose component names, internal pure function boundaries,
exact non-answer-bearing copy, focus helper reuse, stylesheet organization,
crop coordinates, and implementation details inside these contracts.

Immediate return conditions:

- route cannot preserve exact released predecessor bytes;
- browser file work requires persistent storage, network, external path,
  package/environment mutation, Python/WASM payload, or false execution copy;
- a frozen case, answer, dimension, threshold, explanation, or remediation
  must change;
- cleanup, atomic rollback, replay-free restore, or first-incomplete recovery
  cannot be proved;
- required accessibility/responsive parity or the two image roles cannot fit
  the budget;
- canon requires unity, cause, junction contents, purpose, response, or a
  later route; or
- any hidden lore or Martin-owned browser/save inspection would be required.

## Disposition and exact Mission Captain handoff

**`VIABILITY READY / VE-TD007-v1 / MISSION NEXT`.**

Mission Captain may reconcile one shell for
`TD-007-RP007-BRAIDED-VERGE-v1`, `RP-007 / SC-08 / BV-00-BV-30`, through
sole route `TD007-RTA-001`.

The shell must freeze:

- exact TD-006 dependency and one fresh Pilot-owned zero-write route;
- `BV-00 -> BV-30`, five equal observations in all 120 orders, and exact
  returns;
- normal save key/version/controller, ten-key root allowlist, exact note,
  eight ordered evidence records, sanitation, atomic read-back/rollback,
  predecessor-byte preservation, and replay-free restore;
- the session-only in-memory virtual temporary-file contract and exact
  truthful execution label;
- strict independent `PY-015`,
  `RP007-VISION-GENERATION-01`, both explanations, and zero cross-credit;
- seven modalities, one-hit behavior, deterministic focus, one polite atomic
  status, `>=44px` targets, four layouts, forced colors, reduced motion,
  grayscale, and closed fixture;
- offline/no-authority/no-exam/Tour and invariant SC-07/SC-08 worlds;
- exactly two SC-08 runtime image roles and all provenance/quality/crop/
  accessibility/accounting gates;
- `PBA-TD007-v1`; and
- BV-30 hard stop before RP-008 or any forbidden later meaning.

Mission must return `REVISE` or `HOLD` if any conflict remains. It may issue
`SHELL READY` only after complete line-by-line reconciliation. No Marine may
deploy before that shell and push gate.
