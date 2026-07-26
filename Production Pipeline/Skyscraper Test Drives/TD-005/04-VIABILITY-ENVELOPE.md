# TD-005 Viability Envelope - Authorized Manyfold Return

## Document control

| Field | Value |
|---|---|
| Stage | Office of Science Administrator |
| Agent ID | `office_of_science_administrator` |
| Certificate ID | `VE-TD005-v2` |
| Supersedes | `VE-TD005-v1` HOLD |
| Product brief | `GDB-TD005-v1` |
| World baseline | `WNMP-TD005-v1` |
| Floor stack | `CFS-TD005-v2` |
| Route contract | `TD005-RTA-001` |
| Released predecessor | `TD-004 / SS-RP004-THREE-CURRENT-v1 / TR-40 VERIFY + RETURN` |
| Selected slice | `TD-005-RP005-MANYFOLD-RETURN-v1` |
| Campaign address | `RP-005 / SC-06 / MF-00-MF-30` |
| Budget authority | `PBA-TD005-v1` |
| Preceding stage commit | `9d3829563d783f9069332417f79bae360d9b9114` |
| Disposition | **`VIABILITY READY - ROUTE, RECORD, EVIDENCE, RECOVERY, ACCESSIBILITY, AND BUDGET VALIDATED`** |

Martin's standing adjacent-transition policy resolves the sole blocker in the
v1 HOLD. Science independently finds the returned route compatible with the
released TD-004 record, frozen RP-005 learning, a separate atomic RP-005
record, deterministic recovery, seven-modality access, invariant-world
limits, and a fresh non-compounding production budget.

This is a construction constraint, not implementation. Only Mission Captain
may issue `SHELL READY`; no Marine may begin from this certificate alone.

## Authority certificate

| Authority | SHA-256 or identity |
|---|---|
| `AGENTS.md` standing adjacent-transition policy | `42C6405230D2E5D5E64D3E6FD5E7CB0DC39BF68F5D0BA6B91D41578B4784D69C` |
| `NEXT_INSTANCE_HANDOFF.md` at stage start | `B02B9833DE5D675436C6615F6C4CADC586CEB908710A311B9701220BF08AE546` |
| `SKYSCRAPER_AGENT_WORKFLOW.md` | `DEB18C55559119AE52466C810B3729A6C91E2A67C05C9DC307160DE8E2A2E132` |
| `Skyscraper Agent Profiles/README.md` | `78170827BD7BA4D420EC985937810396C3ED241A81E9ED6F697B0D9C24666D13` |
| `office-of-science-administrator.md` | `CB5C3A8D1699A9A91829FC403359A59B01EE5F95805794E8C2298EB4EBFD6B44` |
| `TD-005/01-GAME-DEVELOPMENT-BRIEF.md` | `6588EEF0BD4E306D607B54D828CA50DB411EB1A46C7CD5894F169B56A8696BA4` |
| `TD-005/02-WORLD-NARRATIVE-MASTERPLAN.md` | `5DA31A40EDA2B0BCDEF58EE7D73D074787FB553A47D4B0468FDAE7DA605527DE` |
| `TD-005/03-CAMPAIGN-FLOOR-STACK.md` / `CFS-TD005-v2` | `893E70FAEE4BBE65C22B415B8605A2A87F2AE6BF3BD6AB2A39D74F7E36416D3A` |
| superseded `VE-TD005-v1` | `4C64E9FF3EC4B963D9144740FAF93A0EC670C2AD4C258816D9538BF6F095B30E` |
| historical `MC-TD005-HOLD-v1` | `F42CAEDAB2C49F0201BFD58444873802DF0FB1D839A1AB9DE341DBF5A3A4E9A7` |
| `TD-004/11-AS-BUILT-RECONCILIATION.md` | `9449D099BFEB6613BE76E5C1DEFD86FEF71B9D2B41D2B746D6F69738FD11DC01` |
| `curriculum/readiness/RP-005/contract.json` | `CFB836F7361D14A5210861C5615A59712A5A5E47C0D7A05DF26B005FF589FAEF` |
| `ThreeCurrentReachNormal.js` | `6E66E82B9998701CDBEE91D145720BB49700A2602EC9A11CD3E9BC4564DECC85` |
| `ManyfoldReturnProtectedJourney.js` | `EE52CD2BBBD5BE9F2209C83E37C80901811727DB6291A3260CD5D0CB1637356B` |
| `04A-PRODUCTION-BUDGET-AUTHORITY.json` | `BC20F90624B9F601AC7FC6FA58AC55358562412515EBB2D38657C0ED520F07E4` |
| `scripts/validate_td005_budget.py` | `CF87E197B69943DB0F3CBE9E5F34DAF982CA65E936858AE80E8F5FE249D9ADE8` |

The protected RP-005 journey remains reference evidence. It cannot be
imported as the normal adapter because it consumes the protected predecessor
version rather than the released normal TD-004 record.

## Route and adapter validation

### Exact route source

`TD005-RTA-001` is one fresh semantic action owned by:

```text
PILOT // EXPEDITION NAVIGATION
PILOT // FOLLOW EXPEDITION-MARKED ADJACENT SURVEY TO MANYFOLD RETURN
```

`Manyfold Return` is an expedition planning label. The action is not emitted
by the Scene, common return, destinationless notation, durable record,
Builders, city, Machine, or world. It grants no invitation, access,
permission, identity, reward, authority, or response.

### Normal-entry adapter envelope

The normal adapter must reuse, not reimplement, the released exports:

- `THREE_CURRENT_REACH_SAVE_KEY`;
- `THREE_CURRENT_REACH_RECORD_VERSION`;
- `THREE_CURRENT_REACH_SHELL_VERSION`;
- `THREE_CURRENT_REACH_CONTROLLER_VERSION`;
- `sanitizeThreeCurrentReachSave`;
- `createThreeCurrentReachStorageAdapter`; and
- `resolveThreeCurrentReachWorldScene`.

The adapter may expose the RP-005 action only after all conditions pass:

1. Demo Tour is rejected before campaign storage access.
2. Mode is exact normal `campaign`.
3. the released key yields an exact strictly sanitized
   `rp004.three-current-save.v1` record;
4. raw read-back bytes equal the exact canonical serialization of that safe
   record;
5. shell, controller, packet, mapping, checkpoint, continuation, null deltas,
   null successor, three ordered relations, common-return boundary,
   correspondence, purpose, and eight ordered evidence records match
   `CFS-TD005-v2`;
6. mounted state is exact `tr40_restore` or `tr40_restore_recorded`;
7. `resolveThreeCurrentReachWorldScene` returns the released SC-05 identity;
8. learner source, answers, feedback, reasoning, private material,
   credentials, endpoints, payloads, responses, pointer/focus/token history,
   and other transient work are absent;
9. exactly one active `PILOT // EXPEDITION NAVIGATION` group owns the new
   action and the existing independent choices;
10. the intent carries exact route ID, source/target identities, owner,
    active group, one approved modality, and an opaque fresh unused token;
11. every field validates before the token is consumed; and
12. the accepted token mounts exactly one transient
    `MF-00 ARRIVE + IDLE / SC-06` state.

The adapter reads TD-004 but never rewrites, migrates, merges, annotates, or
removes it. Exact TD-004 raw bytes are captured before transition and compared
after every entry, RP-005 save attempt, recovery, and return.

### One-hit and zero-effect result

One accepted token:

- produces one MF-00 arrival and no later checkpoint;
- writes no TD-004 or RP-005 durable bytes;
- grants no observation, Python, AI-901, explanation, review, save, route,
  reward, authority, or exam evidence;
- replays no predecessor event;
- preserves `continuation="continuation"`, both null deltas, and
  `successor=null`;
- changes no physical field, receiver, trace, branch, seal, maintenance path,
  light, sound source, route geometry, or environmental clock; and
- records no Builder, city, Machine, service, or world response.

A duplicate token is a no-op that cannot replay arrival, move focus, erase
work, write, or grant evidence. A new entry after return, reload, or unsaved
interruption requires a fresh Pilot intent and token.

The common return remains non-traversable. Destinationless notation remains
optional, zero-evidence, `routeOpened=false`, `destination=null`, and
`successor=null`; route availability is identical before and after notation.

## State-to-scene identity

| Exact state | Required scene identity | Contract |
|---|---|---|
| TD-004 `TR-40 VERIFY + RETURN` | released `SC-05` master | new Pilot action, optional notation, and existing returns remain independent |
| TD-004 `TR-40 VERIFIED + CONTINUATION NOTED` | same released `SC-05` master | notation is Recorded/inert; no route meaning |
| invalid/missing/stale/duplicate route intent with valid TD-004 | `SC-05 / TR-40` | no scene change, token consumption, write, evidence, or response |
| invalid TD-004 dependency or record | released TD-004 recovery scene | never mount SC-06 |
| accepted `TD005-RTA-001` | `SC-06 / MF-00` panoramic identity | one zero-evidence arrival |
| `MF-10` | invariant SC-06 panorama plus registered detail identity | four equal observations; presentation is zero-credit |
| `MF-20` | invariant SC-06 plus separate expedition interface | strict independent learning, explanations, review, and save |
| exact saved `MF-30` restore | invariant SC-06 | heading-first, replay-free restored controls |
| unsaved interruption/reload | exact released `SC-05 / TR-40` | clear RP-005 transients and require fresh entry |
| invalid/contaminated RP-005 record | exact released `SC-05 / TR-40` | mount no SC-06 restore; TD-004 bytes unchanged |
| RP-005 return to Three-Current Reach | exact released `SC-05 / TR-40` | replay-free, write-free, fresh choices |
| TD-004 return to Calibration Margin | exact released `SC-04 / CM-50` | existing write-free behavior |
| return to City Threshold | existing accepted City Threshold identity | existing write-free behavior |

State identity determines scene identity. Route labels, record presence,
focus, notation, invalid data, and navigation history never select SC-06.

## RP-005 persistence authority

### Exact identities

| Field | Required value |
|---|---|
| Storage key | `horizon-archive-rp005-manyfold-return-save-v1` |
| Record version | `rp005.manyfold-return-save.v1` |
| Shell version | `SS-RP005-MANYFOLD-RETURN-v1` |
| Controller version | `rp005.manyfold-return-controller.v1` |
| Packet | `RP-005` |
| Mapping | `RP005-A3-MANYFOLD-RETURN` |
| Checkpoint | `manyfold_return_complete` |

The record has exactly these ten ordered top-level keys:

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

`continuation` is exactly `continuation`; city and external deltas and
`successor` are `null`.

The note has exactly these nine ordered keys:

```text
observations
recurrence
divergence
unavailable
stewardship
replicas
truth
purpose
destination
```

Required values:

- observations contain each of the four frozen observation IDs exactly once
  in canonical contract order;
- recurrence is `exposed_recurring_range_observed`;
- divergence is `one_bounded_divergence_observed`;
- unavailable is `sealed_branch_unavailable`;
- stewardship is `layered_stewardship_observed`;
- replicas is `sanitized_precomputed_only`; and
- truth, purpose, and destination are `null`.

### Exact evidence

The record contains exactly eight ordered finalized records:

1. `PY-012 / primary`;
2. `PY-012 / trace`;
3. `PY-012 / transfer`;
4. `RP005-TEXT-01 / primary`;
5. `RP005-TEXT-01 / retrieval`;
6. `RP005-TEXT-01 / transfer`;
7. `RP005-TEXT-01 / requested_output_explanation`; and
8. `RP005-TEXT-01 / truth_boundary_explanation`.

Each record uses the frozen packet/mapping identity, exact dimension set,
every dimension `true`, bounded integer attempt count `1-99`, hint level
`0-3`, confidence `null|low|medium|high`, allowlisted misconception tags, and
`mastery_status="mastered"`.

No observation, route, prior-packet evidence, story state, presentation,
focus, modality, timing, execution display, Tour, save display, or confidence
can manufacture or compensate for a missing record.

### Privacy denylist

Reject the whole record if any key or serialized content contains learner
source, raw answers, free-form reasoning, feedback, case/source text, private
notes, identity content, credentials, secrets, endpoints, URLs, payloads,
requests, responses, exam items, external-action requests, pointer/focus
history, event tokens, route intent, live readings, sealed contents, or
unapproved extra keys.

### Atomic commit, rollback, and restore

The RP-005 adapter must:

1. read and retain exact prior RP-005 raw bytes or verified absence;
2. reject a malformed prior record rather than overwrite it;
3. strictly sanitize the complete candidate before writing;
4. verify exact TD-004 raw bytes before the write;
5. perform one replacement at the dedicated RP-005 key only;
6. read back raw bytes and the strictly sanitized object;
7. accept only if raw read-back equals canonical serialization, sanitized
   read-back equals the candidate, and TD-004 raw bytes are unchanged;
8. otherwise restore exact prior RP-005 bytes or verified absence;
9. verify rollback and unchanged TD-004 bytes; and
10. report failure honestly without progression if rollback cannot be proven.

Strict read-back alone defines save success. A write throw, malformed
read-back, prior-record problem, TD-004 byte change, or rollback failure grants
no save, route, evidence, world, or authority effect.

Exact valid save restores only heading-first `MF-30 VERIFY + RETURN` with
private/transient work absent and zero replay. No valid save means reload
returns to exact TR-40/SC-05 and requires fresh entry. A partial finalized
prefix may guide only same-session first-incomplete focus; it is not stored in
the RP-005 save key.

## Learning and evidence firewall

Fresh Microsoft review confirms the April 15, 2026 AI-901 objective still
names keyword extraction, entity detection, sentiment analysis, and
summarization as common text-analysis techniques. The frozen
`RP005-TEXT-01 / AI901-D1-O5` mapping remains aligned. Microsoft Foundry and
Azure Language documentation remain supporting official context; the game
performs no live service call.

### Python chain

- exact `PY-012` small-function primary `8/8`;
- answer-free remediation for actual failed checks only;
- delayed closed-note six-dimension function trace;
- genuinely blank distinct transfer `8/8`;
- supplied sanitized counts, `None`, keys, and field names are unscored; and
- hardcoding, mutation, inference, ranking, metric computation, live access,
  primary reuse, or forbidden operations fail closed.

### AI-901 chain

- exact independent `RP005-TEXT-01` primary `8/8`;
- per-case/per-dimension answer-free remediation;
- exact delayed retrieval `6/6`;
- genuinely blank distinct transfer `8/8`;
- separate requested-output and truth/quality explanations; and
- neutral course-authored cases contain no SC-06, frequency, scenery, color,
  motion, sound, position, or Builder-world answer channel.

### Conjunction and no-cross-credit

Four physical observations, three Python records, three text-technique
records, and two explanations remain separate owners. Only the complete
conjunction permits review and save. Navigation, scene, route, observation
order, frequency, presentation, focus, accessibility, modality, timing,
confidence, hints, Tour, execution, and save/restore display grant zero
learning evidence.

Misses are local, unlimited, answer-free, and wholly blank on retry.
Finalized owners remain independent; failure in one never erases or awards
another.

## Recovery and returns

- invalid route input remains exact TR-40/SC-05 and preserves fresh future
  tokens;
- pre-consumption interruption reconstructs exact TR-40;
- post-arrival pre-save reload clears all RP-005 transient work and
  reconstructs exact TR-40;
- duplicate actions cannot replay, write, advance, or move focus;
- same-session recovery focuses the first incomplete physical or scored
  boundary after clearing private work;
- save failure preserves last-good RP-005 bytes or absence and exact TD-004
  bytes, then returns to bounded review/provenance;
- exact saved re-entry restores MF-30 without replay;
- early/final return to Three-Current Reach reconstructs exact TR-40/SC-05;
- direct RP-005 return to City Threshold remains write-free;
- no direct RP-005-to-Calibration-Margin or Civic shortcut is added; and
- every new RP-005 entry requires fresh route intent and token.

Returns clear RP-005 private/transient work and preserve continuation, null
deltas, null successor, zero evidence, zero authority, and invariant world.

## Accessibility, responsive, and fixture contract

### Semantic access

- seven equivalent modalities: pointer, touch, Enter, Space, switch, speech,
  and screen reader;
- validation before one-hit token consumption;
- one active owner/message/content/action group;
- persistent labels, field-associated errors, semantic headings, and one
  polite atomic live status;
- deterministic focus to the group heading, first invalid control, or next
  required control;
- controls at least `44 x 44 CSS px`;
- no meaning or credit from color, motion, sound, position, or frequency
  alone;
- reduced-motion still/direct replacement and `scroll-behavior:auto`;
- forced-color borders, grouping, focus, and native controls;
- grayscale-legible scene distinctions and text alternatives; and
- no time limit, speed score, forced animation, or dexterity evidence.

### Exact layouts

The closed fixture and release review must cover DPR-1:

- `1920 x 1080` desktop;
- `1366 x 768` laptop;
- `390 x 844` narrow; and
- `768 x 900` width-equivalent effective-`200%` text zoom.

Wide layouts contain the complete shell in `100dvh` with the world dominant,
no outer horizontal/vertical scroll, and the current required action visible.
Narrow/zoom layouts reflow in one natural vertical column with no horizontal
escape or clipped owner, limits, feedback, recovery, save, or return.

### Closed storage-free fixture

The fixture must use an exact allowlisted manifest and include at least:

- route-ready TR-40;
- notation-recorded TR-40;
- invalid/stale/duplicate route attempt;
- accepted MF-00;
- each MF-10 observation class and completed observation set;
- Python and text-technique dense/repair states;
- bounded review;
- save-write and read-back failure;
- exact MF-30 restore;
- early and final Three-Current Reach returns; and
- City Threshold return.

It may not accept URL, query, browser-storage, campaign-save, arbitrary JSON,
or runtime state injection. It is absent from production imports and bundle.
The matrix includes forced colors, reduced motion, grayscale, focus/status,
target size, containment, crop, overflow, local-request, console/page-error,
and scene/alt identity evidence plus a bounded screenshot set and compact
machine-readable summary.

## Offline, Tour, authority, and world limits

- local/offline course practice only;
- no live Azure, Foundry, Language, service, terminal, field, or sealed-branch
  call;
- no credential, resource, endpoint, payload, request, response, external
  action, authentication, access, consent, permission, ranking, correction,
  sampling, or exam guarantee;
- Tour rejects before campaign storage, stays storage-free and zero-credit,
  and cannot dispatch, save, restore, or unlock;
- SC-05 and SC-06 are invariant under entry, observation, evaluation,
  remediation, save, restore, return, and resume;
- no city, Builder, Machine, route, physical, or external delta;
- truth, quality, value, identity, native category, purpose, audience,
  ownership, sealed contents, reward, recognition, and response remain
  unknown or absent; and
- hard stop remains `MF-30`; no RP-006 route, RP-013, successor, or
  post-ending content.

## Production budget

`PBA-TD005-v1` is a fresh one-time, non-compounding five-percent rebaseline
from the exact accepted TD-004 production identity:

| Measure | Baseline | TD-005 cap | Headroom |
|---|---:|---:|---:|
| Aggregate JavaScript | `1,247,724` | `1,310,110` | `62,386` |
| Aggregate CSS | `85,151` | `89,408` | `4,257` |
| Production modules | `183` | `192` | `9` |
| New runtime images | `0` | `2` | `2` |
| New image-only media | `0` | `8,388,608` | `8,388,608` |
| Total runtime media | `21,536,123` | `29,924,731` | `8,388,608` |

The two planned runtime image roles are the SC-06 panoramic world identity and
its registered forensic detail identity. The allowance is a ceiling, not a
quality target. Maximum-quality cinematic photorealism, first-person framing,
physical credibility, provenance, direct import, accessible alternatives,
responsive crops, grayscale review, and placeholder retirement remain
mandatory. Compression or omission that visibly weakens quality fails even
when bytes pass.

No new audio, font, video, or network-fetched payload is permitted.

Timing caps:

- production build `<=60s`;
- focused suite `<=30s`;
- related suite `<=60s`;
- full suite `<=60s`;
- complete non-overlapping E2E `<=180s`; and
- sampled main-thread task `<=100ms`.

`scripts/validate_td005_budget.py`:

- aggregates every emitted JS and CSS chunk;
- hashes every runtime media asset;
- requires all accepted TD-004 media hashes to remain present;
- permits at most two new image assets and 8 MiB aggregate;
- rejects new audio/font/video/unknown classes;
- enforces modules, build, and supplied suite/E2E/main-thread timings;
- requires every timing in release mode; and
- verifies exact baseline JS/CSS/media identity in baseline mode.

Chunking, source maps, duplicate derivatives, hidden directories, or removed
accepted assets cannot manufacture headroom. Any overage returns to Science
and Mission as an explicit variance; quality, evidence, privacy,
accessibility, save/recovery, offline behavior, or release gates may not be
weakened.

## Validation ladder

### Tier 1 - contract

- standing route authority, CFS v2, exact endpoints, owner, and hard stop;
- released TD-004 schema, sanitizer, adapter, byte identity, scene resolver,
  choices, notation, and returns;
- frozen RP-005 mapping, cases, answers, dimensions, thresholds, privacy,
  world, and authority locks;
- exact RP-005 schema, denylist, atomicity, recovery, scene matrix, and PBA.

### Tier 2 - focused

- all seven route modalities, validation-before-consumption, token freshness,
  invalid/duplicate/interruption/reload behavior, and zero-effect arrival;
- TD-004 immutable bytes and exact SC-05 identity;
- all 24 observation orders and idempotent replay;
- exact strict Python and text-analysis chains, both explanations,
  no-cross-credit, answer-free blank retry, and Tour isolation;
- RP-005 sanitizer, atomic commit/read-back/rollback, restore, and returns.

### Tier 3 - related

- TD-003/TD-004 save, rollback, restore, route, image, interruption, return,
  fixture, UI, accessibility, and production-copy regression;
- protected RP-005 reference and curriculum self-tests;
- production-entrypoint absence of protected imports.

### Tier 4 - full product

- full game suite and all readiness validators;
- production build and `PBA-TD005-v1`;
- exact served root/deep-link/JS/CSS/SC-04/SC-05/SC-06 bytes and hashes;
- fixture marker/path/scenario/source-map exclusion from production; and
- patch integrity and local-only network scan.

### Tier 5 - release

- build completes before the single complete E2E;
- isolated owned preview and exact served identity;
- complete E2E with every emitted gate true and no runtime error;
- exact four-layout fixture matrix plus forced/reduced/grayscale review;
- bounded human visual review of world identities and crops;
- incidental QA restoration and owned-process shutdown only;
- shell-to-as-built reconciliation, variance classification, and synchronized
  release handoff.

## Fresh Science evidence

| Gate | Result |
|---|---|
| Official AI-901/Foundry/Azure Language review | `PASS - frozen mapping remains aligned` |
| RP-005 mapping validator | `PASS` |
| Focused route/protected predecessor suite | `38/38 PASS` |
| Related TD-003/TD-004/RP-005 suite | `58/58 PASS` |
| Full product suite | `806/806 PASS` |
| Production build | `PASS - 183 modules / 11.13s` |
| Baseline budget validator | `PASS` |
| Over-module probe | `FAIL as required at 193 > 192` |
| Over-build probe | `FAIL as required at 60.01s > 60s` |
| Release missing-timing probe | `FAIL as required` |
| New audio class probe | `FAIL as required` |
| Three-image count probe | `FAIL as required at 3 > 2` |
| Protected work | hidden lore unopened; protected user paths and Martin-owned browser/save untouched |

The current source remains unimplemented for normal RP-005. Passing reference
and contract evidence does not claim runtime SC-06 integration.

## Risk register

| Risk | Required control |
|---|---|
| Protected predecessor imported as adapter | use released TD-004 exports and exact normal record only |
| Common return or notation treated as route | keep route solely Pilot-owned under `TD005-RTA-001` |
| TD-004 bytes changed | capture and compare exact raw bytes across every operation |
| Partial/private evidence persisted | exact ten-key schema, denylist, eight-record conjunction |
| Save failure advances | strict read-back, verified rollback, no progression |
| Scene identity leaks | exact source/invalid/destination/return matrix and fixture assertions |
| Scenery/frequency becomes answer key | neutral course UI and explicit zero-credit firewall |
| Budget induces quality loss | two-image 8 MiB ceiling plus mandatory human/technical quality gates |
| Tour or network gains authority | reject before storage; local-only request evidence |
| Later story leaks | hard stop at MF-30 and source/bundle absence gates |

## Permitted implementation flexibility

Mission may permit internal module factoring, action copy refinement, focus ID
names, exact SC-06 topology, visual materials, registered crop coordinates,
and UI layout inside this contract. It may trim optional replay, provenance
inspection, hints, confidence, clear-work, early return, or destinationless
notation for clarity or budget.

It may not change route owner/endpoints, record identities/schema, evidence
cases/dimensions/thresholds/order, no-cross-credit, denylist, atomicity,
returns, scene matrix, modalities, accessibility, offline/Tour/world limits,
budget accounting, runtime image roles, quality gates, or hard stop.

## Hard stops

- no construction before Mission issues a versioned conflict-free shell;
- no protected journey as production adapter;
- no TD-004 rewrite, migration, annotation, or byte change;
- no partial RP-005 save or replayed restore;
- no scenery, route, focus, timing, modality, Tour, or presentation credit;
- no live service, credential, endpoint, external action, access, permission,
  authority, reward, identity, response, or world effect;
- no native truth, value, category, purpose, audience, ownership, sealed
  contents, or Machine relation;
- no RP-006 route, RP-013, successor, post-ending content, or hidden lore;
- no inspection or mutation of Martin's browser storage/campaign save; and
- no inspection, alteration, staging, moving, deletion, or commit of protected
  user work.

## Disposition

**`VIABILITY READY - ROUTE, RECORD, EVIDENCE, RECOVERY, ACCESSIBILITY, AND BUDGET VALIDATED`**

`TD005-RTA-001` and the bounded MF-00-MF-30 candidate are supportable under
the exact constraints above. No unresolved Science conflict remains.

## Exact Mission Captain handoff

Read `GDB-TD005-v1`, `WNMP-TD005-v1`, `CFS-TD005-v2`,
`VE-TD005-v2`, `PBA-TD005-v1`, the historical Mission HOLD, released TD-004
reconciliation/source, and frozen RP-005 contracts.

Reconcile every boundary without silently altering Operations or Science. If
conflict-free, replace the historical HOLD with one versioned
`SS-RP005-MANYFOLD-RETURN-v1` `SHELL READY` contract that freezes:

- exact TD-004 source record/bytes and `TD005-RTA-001`;
- validation-before-consumption and one zero-evidence MF-00 arrival;
- MF-00-MF-30 graph and hard stop;
- state-to-scene identity matrix;
- exact RP-005 persistence schema and atomic recovery;
- frozen independent evidence and no-cross-credit;
- seven modalities, focus/status, responsive/forced/reduced/grayscale parity;
- offline/Tour/no-authority/invariant-world limits;
- `PBA-TD005-v1`, two planned runtime image roles, and quality gates;
- closed fixture and complete validation ladder;
- variance protocol and Marine ownership; and
- exact Reconnaissance Sergeant handoff.

Commit and push only at the `SHELL READY` gate, verify
`HEAD == origin/main`, and only then deploy Reconnaissance Sergeant.

If any conflict remains, return it to the earliest responsible owner and do
not issue a partial shell.

## Official sources consulted

- Microsoft Learn, *Study guide for Exam AI-901: Microsoft Azure AI
  Fundamentals*, skills measured as of April 15, 2026.
- Microsoft Learn, *Microsoft Foundry documentation*.
- Microsoft Learn, *What is Azure Language in Foundry Tools?*

The named `foundry-azure-source-priority` skill was unavailable. No
third-party source was used.
