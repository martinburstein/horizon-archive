# TD-003 Campaign Floor Stack — Baseline-Delta Certificate

## Document control

| Field | Value |
|---|---|
| Stage | Operations Planning Major |
| Agent ID | `operations_planning_major` |
| Pass type | Guarded floor-stack delta |
| Certificate ID | `CFS-TD003-v1` |
| Stable campaign baseline | `CFS-TD001-v1` |
| Prior guarded delta | `CFS-TD002-v1` |
| Product brief | `GDB-TD003-v1` |
| World baseline | `WNMP-TD003-v1` |
| Shell candidate | `SS-RP003-REVIEW-SAVE-v1` |
| Campaign address | `RP-003 / SC-04 / CM-40-CM-50` |
| Accepted predecessor | exact no-action `RP003-IE-01 / IE-P3` |
| Preceding stage commit | `21ee8b2bebfac517fd7475f3b259ac8f2c166d05` |
| Mission return commit | `d4d85a59dff9355ebfcd6e7476c8f2ff6c8c7ec8` |
| Correction | `TD003-MC-R01` — packet mapping identity |
| Disposition | `FLOOR STACK READY — CORRECTED` |

This certificate selects and bounds only the nearest contiguous playable
increment after TD-002. The twelve-packet story rail, intended `RP-012`
ending, and protected full-campaign floor stack remain unchanged. No later
packet is opened or reinterpreted.

## Hash-keyed authority certificate

Stable prose is incorporated by hash rather than repeated.

| Authority | SHA-256 |
|---|---|
| `AGENTS.md` | `CC76D86D21ADA75D3BC6A340D2BDE41B7FEC00678CB74A1F3D0E9EAD3A0953CD` |
| `NEXT_INSTANCE_HANDOFF.md` | `430C1328E47C9044F4217B8EDFCE206A5CD1A90A4CA20C0B5DBE51B97E848F18` |
| `SKYSCRAPER_AGENT_WORKFLOW.md` | `6C22C4C8660BAF5F854246F55AC825B5F52DD6A5D2311C1579EB1C80DF212A43` |
| `Skyscraper Agent Profiles/README.md` | `78170827BD7BA4D420EC985937810396C3ED241A81E9ED6F697B0D9C24666D13` |
| `Skyscraper Agent Profiles/operations-planning-major.md` | `95BD88D25C1ABF418589E235F1C5AE9C31DF733D3A032AC046FB51CACFD461DC` |
| `TD-003/01-GAME-DEVELOPMENT-BRIEF.md` | `CD5E98AAC3F9281BDB2056F17FE184187187F509BFA3B049A729707512F090C7` |
| `TD-003/02-WORLD-NARRATIVE-MASTERPLAN.md` | `BE67E67666053727C72980DA4F9CEB770857F43A8589B02FC5C18A9558EA5411` |
| `TD-003/04-VIABILITY-ENVELOPE.md` | `91F9992C26EF72B15455D964E50731A95BEC7D6707734C142E053B5E283651D1` |
| `TD-003/05-PLAYABLE-SLICE-SHELL.md` | `55FC509E69AA667ABBCEE2378B68025FF49D395CF9895FB781D759B8A21E3D9F` |
| `TD-002/08-FUNCTIONAL-BUILD-REPORT.md` | `560EAECC7856B94A0611E8FC9D422A3A353BCF4608CAE9DDBD99202BC6CC46F0` |
| `TD-002/11-AS-BUILT-RECONCILIATION.md` | `5F8F83AFD42E46246C755C46A8905819C185B8ADFD651CCCF7A023B37088E906` |
| `Production Pipeline/STORY_RAIL_MAP.md` | `204AFCB5D116E8FB665308F10BA25CD31DB7A9A642FEE65582E885D7AD836838` |
| `Production Pipeline/PACKET_SCOREBOARD.md` | `963AB10CA4917683259B01CB8D1F4AB4C2FF8BFAFFF569598B11A1C9135A2BB7` |
| `Production Pipeline/ADVANCE_QUEUE.md` | `061C24BC66E7BC778FC5FE6E92848A662EDC268A78FF15A0BBB65BCB48EA2592` |
| `Production Pipeline/WORKING_QUEUE.md` | `8538FAC5D92086ED6ECC43AA3ECC860D9C8D644F4CF86702B0B9BA5B64E58B3B` |
| `Production Pipeline/EXPEDITION_SPINE.md` | `5F56D0067B74DB84143B39377A01C6465ADAD6CCA7D11AF1D90C871F8C25AABB` |
| `Production Pipeline/rail-packets/RP-003-calibration-margin.md` | `15EFEB2190118EB4B21935D12A348B793D1F01690525E1B28F842CD704F7558A` |
| `PLAYABLE_DEMO.md` | `90ACFEDA4C844218CA86BC7A25BEC8BEAD19B0EF8F07C8E1EC5060E4557C588B` |
| `curriculum/readiness/RP-003/contract.json` | `A861CFE60BE3C403EB487A40069E3E6CB1DBEBBF3BA3B96A761FAA3FD37BBDA6` |
| `CalibrationMarginProtectedJourney.js` | `1DE64B590BD7AF25A632731631A48A94315E87598EF69ED72CAA035AB4ED77FF` |
| `CalibrationMarginNormalEntry.js` | `56BEFA8BD209E694314F054097A58151CFAAC6B17CA619015C807E68C8AD5F4C` |
| `CalibrationMarginPythonCheckpoint.js` | `E1F8B3331587E333F07CE4954F21E95B373068E479F6404AF27DF57229F4AEED` |
| `CalibrationMarginExtractionCheckpoint.js` | `9C380AC7C7147A5CF3D90555FCA5F06BFF0A48D93B3C68817F53F41ED37FDB51` |

The accepted normal route ends at exact no-action `IE-P3`. The older protected
`CM-00-CM-50` journey proves that review, an allowlisted all-or-none note,
replay-free restore, safe return, and strict sanitation are buildable, but it
is non-routable and cannot itself be exposed. TD-003 integrates only the
remaining `CM-40-CM-50` floor against the normal TD-002 checkpoint chain.

Mission return `TD003-MC-R01` identified one Operations-owned identity error.
The source-derived packet mapping is `RP003-A3-CALIBRATION-MARGIN` at both the
durable record's top-level `mappingId` and every evidence record's
`mapping_id`. `RP003-IE-01` remains only the independent information-
extraction `skill_or_objective_id` for four of the seven evidence records.
This correction changes no floor, evidence count/order, note value, route,
budget, or product meaning.

## Whole-building and playable positions

- **Whole-building story position:** all twelve authored packets remain mapped
  through the intended `RP-012` ending; no successor exists.
- **Accepted playable position:** `RP-003 / SC-04`, exact no-action `IE-P3`,
  with the three observations, finalized `PY-010`, and finalized
  `RP003-IE-01` independently verified.
- **Selected floor:** `CM-40 BOUNDED REVIEW -> CM-41 ATOMIC SAVE -> CM-50
  VERIFY + RETURN`.
- **Rationale:** this is the nearest unfinished contiguous floor, closes the
  already-authored RP-003 local expedition loop, reuses proven authorities,
  and can be independently released without naming or opening RP-004.
- **Implementation status distinction:** the full protected floor exists as
  reference evidence; normal route, presentation, persistence, and release
  integration for this floor do not yet exist.

## Next Slice Definition

### Slice identity and player purpose

- **Slice ID:** `SS-RP003-REVIEW-SAVE-v1`.
- **Campaign address:** `RP-003 / SC-04 / CM-40-CM-50`.
- **Player purpose:** account for five independent obligations, inspect the
  provenance boundary, deliberately preserve one local expedition note, then
  verify that the note restores without replay or world response.
- **Emotional function:** quiet accountable closure, never approval, reward,
  authentication, invitation, or triumph.
- **Expected clean duration:** `3-5 minutes`; untimed and never scored.

### Exact predecessor and entry

The sole normal entry is exact no-action `IE-P3` with all of the following
independently reconstructable:

1. the canonical observation set is exactly
   `correspondence`, `bounded_difference`, and `sealed_unavailable`;
2. `PY-010` has its ordered finalized primary, retrieval, and fresh-transfer
   records;
3. `RP003-IE-01` has its ordered finalized primary, retrieval, fresh-transfer,
   and unsupported-input-explanation records;
4. every retained record is current, allowlisted, private-free, Tour-free, and
   provenance-valid;
5. `continuation` is unchanged, `cityStateDelta=null`, no external action is
   enabled, and no successor exists.

Exact entry requires one fresh explicit `REVIEW EXPEDITION EVIDENCE`
activation. Merely reaching `IE-P3`, being eligible, reloading, focusing a
control, viewing copy, or carrying a stale intent does not enter review.
Validation occurs before the one-hit intent is consumed. Rejected input
cannot spend a later valid activation.

## Ordered floor stack

| Floor | Active group and purpose | Required transition | Checkpoint / recovery |
|---|---|---|---|
| `CM-40 BOUNDED REVIEW` | One System-owned review reconstructs five visibly separate checklist conjuncts: observations; `PY-010`; `RP003-IE-01`; supplied-input provenance plus unavailable-source discipline; and no external/physical action. No row derives from or substitutes for another. | `REVIEW PROVENANCE` is a required zero-credit inspection inside the same group. It exposes source ownership and unavailable boundaries without replaying cases, answers, observations, or results. Only then may a fresh `SAVE EXPEDITION NOTE` intent dispatch `CM-41`. | `CM40-R1` is transient and is reconstructed from exact finalized authorities, never persisted as evidence. Early or invalid save dispatch returns to the first incomplete verified boundary. |
| `CM-41 ATOMIC SAVE` | System sanitation performs exactly one all-or-none local expedition transaction. This is a transaction phase, not a new puzzle, confirmation room, or mastery event. | The fresh save intent must still be current and all five conjuncts must revalidate immediately before write. On success, commit the exact allowlist, clear private/transient material, read through the sanitizer, and enter `CM-50`. | Durable identity is `version=rp003.review-save.v1`, `packetId=RP-003`, `mappingId=RP003-A3-CALIBRATION-MARGIN`, `checkpoint=calibration_margin_complete`, unchanged `continuation`, `cityStateDelta=null`, and `successor=null`. A failed write leaves the last verified durable value byte-stable and returns to `CM-40` with a retry available. |
| `CM-50 VERIFY + RETURN` | One System-owned restored-note group shows local record integrity, the expedition-owned correspondence/difference/unavailable note, exposed-input provenance, the unavailable-source boundary, and the exact no-external-action statement. | Verification itself completes TD-003 at a no-action landing. The player may then explicitly return to Civic Comparison or City Threshold. | `CM50-V1` is derived only from a sanitized exact `calibration_margin_complete` record. Restore replays no entry, observation, learning, review, save-success, city, or world event. |

The group sequence is mutually replacing. Only one owner/message/content/action
group is active at a time.

## Five-conjunct review and no-cross-credit rule

The `CM-40` checklist order is fixed:

1. **Observations:** all three exact deliberate Scene observations are present.
2. **Python:** strict finalized `PY-010` evidence is present.
3. **Information extraction:** strict finalized `RP003-IE-01` evidence is
   present.
4. **Provenance:** retained evidence identifies only exposed or supplied
   inputs and preserves unavailable input as unavailable.
5. **No external action:** `cityStateDelta=null`, successor is null, no
   authority is granted, and no external or physical action occurred.

The conjunction is Boolean `1 AND 2 AND 3 AND 4 AND 5`. It is never a score.
Observation state cannot satisfy learning; either learning chain cannot
satisfy the other; completion cannot repair provenance; and the invariant
boundary cannot compensate for missing evidence. Review, provenance
inspection, save intent, transaction status, restore, focus, timing, layout,
return, and Tour remain zero evidence.

## Save identity and allowlist

The atomic record contains only:

- the exact document-control identity named above, including top-level
  `mappingId=RP003-A3-CALIBRATION-MARGIN`;
- one ordered seven-record finalized evidence array:
  `PY-010 primary`, `PY-010 retrieval`, `PY-010 transfer`,
  `RP003-IE-01 primary`, `RP003-IE-01 retrieval`,
  `RP003-IE-01 transfer`, and
  `RP003-IE-01 unsupported_explanation`;
- the exact expedition note:
  - `correspondence=bounded_exposed_correspondence_observed`;
  - `difference=one_bounded_exposed_difference_observed`;
  - `unavailable=sealed_source_unavailable_and_unread`.

Every one of the seven evidence records uses
`mapping_id=RP003-A3-CALIBRATION-MARGIN`. Their separate
`skill_or_objective_id` values remain `PY-010` for records 1-3 and
`RP003-IE-01` for records 4-7. Packet mapping identity and independent
learning identity are never interchangeable.

The note is built only after exact observation verification; it cannot be
used to manufacture or backfill the observation set. The record excludes raw
answers, source text, supplied sequences, prose reasoning, feedback, prompts,
confidence text, credentials, endpoints, payloads, service responses, sealed
content, private controls, focus state, save intent, review-open state, and
any Tour state. Science and the Mission Captain must bind the exact sanitizer
to the normal campaign persistence seam while preserving this field set and
all-or-none meaning.

## Failure, sanitation, and resume routing

Validation order is the fixed five-conjunct order, with each learning
conjunct expanded to its existing ordered checkpoints.

| Invalid condition | Deterministic route | Mutation rule |
|---|---|---|
| Missing or invalid observation ID | first incomplete `CM-10` observation control | retain valid finalized learning; clear private/transient work; write nothing |
| Missing/invalid `PY-010` record | exact first incomplete `CM-20`, `CM-22`, or `CM-23` blank boundary | retain valid earlier finalized evidence; no cross-credit or replay |
| Missing/invalid `RP003-IE-01` record | exact first incomplete `CM-30`, `CM-33`, `CM-34`, or unsupported-explanation blank boundary | retain valid earlier finalized evidence; no cross-credit or replay |
| Provenance malformed or contaminated | underlying first invalid Python/IE record; otherwise `CM-40` provenance inspection | clear the malformed candidate and private/transient content; preserve the last verified durable value |
| Invariant/no-external-action mismatch | fail closed to exact safe `IE-P3` only if its accepted evidence remains valid; otherwise the earlier first incomplete boundary | no save, route, world, successor, or authority mutation |
| Early, stale, replayed, combined, Tour-derived, forged, or malformed save intent | first incomplete boundary; if all evidence is complete, `CM-40` with provenance inspection incomplete | reject before token use and before any write |
| Partial/corrupt stored note or failed adapter write | `CM-40` if all prerequisite evidence remains exact; otherwise first incomplete evidence boundary | discard the candidate atomically; never expose or retain a partial record |
| Exact saved record on reload/re-entry | `CM-50` verified restore | clear private/transient material and replay no event |

“No mutation” means no accepted durable checkpoint, finalized evidence,
route, city/world state, successor, or authority value changes on failure.
Private and transient material is always cleared as a safety action.

## Returns, exits, and bearing disposition

### Permitted exits

- **Verified Civic Comparison return:** explicit
  `RETURN TO CIVIC COMPARISON` reconstructs the known
  `RP-002 / SC-03-50 verified_restore` anchor.
- **Verified City Threshold return:** explicit
  `RETURN TO CITY THRESHOLD` reconstructs the accepted known Threshold anchor.

Both exits preserve the RP-003 complete record, unchanged `continuation`,
`cityStateDelta=null`, no successor, no external action, and zero authority.
Neither replays RP-002 or RP-003 entry, observations, learning, review, save,
restore, completion, or world events. A later legitimate SC-04 re-entry may
sanitize the exact saved record directly to `CM-50`; it may not replay
`CM-40` or issue another automatic save.

Write-free early returns from `CM-40` remain permissible to the same known
anchors, but they do not complete TD-003 and do not create a save.

### Optional bearing decision

`MARK ONWARD SURVEY BEARING` is **omitted** from TD-003's player controls and
status surface. Although the packet permits an undefined marker, even a
non-dispatchable bearing adds destination-shaped presentation, consumes
scarce shell/CSS budget, and is unnecessary to close RP-003. Its reserved
possibility remains unmodified in the packet; this slice creates no bearing,
route, waypoint, successor, invitation, or RP-004 implication.

## Pacing

| Beat | Target |
|---|---:|
| Fresh review entry and five-conjunct scan | `30-60s` |
| Provenance/unavailable-boundary inspection | `45-90s` |
| Fresh save intent, sanitation, and atomic status | `15-30s` |
| Verified restore and no-external-action review | `45-90s` |
| Optional explicit known-anchor return | `15-30s` |
| **Total** | **`3-5m`** |

Timing, speed, modality, return choice, and rereading never change evidence.

## Required versus optional scope

### Required

- exact `IE-P3` entry and fresh explicit bounded-review activation;
- five visibly independent conjuncts in fixed order;
- required zero-credit provenance inspection;
- one fresh explicit one-hit save intent;
- exact all-or-none allowlisted local transaction;
- private/transient sanitation on every path;
- exact verified restore with provenance, unavailable-source, and
  no-external-action statements;
- no-action `CM-50` accepted landing;
- both known reversible return paths implemented and tested;
- deterministic first-incomplete recovery;
- one active group, deterministic focus, non-color meaning, `>=44px`
  controls, wide/narrow/effective-`200%` reflow, forced-color viability, and
  reduced-motion parity;
- offline, local-only, no-authority, no-exam-guarantee, zero-credit Tour, and
  invariant first-person SC-04.

### Optional

- concise re-reading of checklist or provenance details inside the same
  `CM-40` group;
- write-free early return from `CM-40`;
- restrained existing visual emphasis using shared styles and the inherited
  world plate.

No new runtime art, sound, font, animation, world plate, learning content,
native term, location, bearing, or route is required.

## Dependencies and implementation distance

### Required authorities

- accepted TD-002 normal `IE-P3` checkpoint and its exact ordered evidence;
- current normal CM-10 observation, Python, and extraction checkpoint
  sanitizers;
- the accepted campaign storage/save discipline;
- existing safe RP-002 Civic Comparison and City Threshold return
  reconstruction;
- the pure protected review/save/restore/return model as behavior evidence,
  not as a routable import;
- existing SC-04 normal presentation, focus, responsive, accessibility,
  privacy, Tour, and invariant-world contracts.

### Implementation distance

**Contained medium integration.** The normal route stops exactly one floor
before the target, while the pure protected journey already proves the core
sanitizer, seven-record allowlist, atomic adapter, verified restore, and safe
return semantics. Marine construction should compose one normal
review/save/restore controller and one presentation group family, bind it to
the accepted normal checkpoint chain and campaign persistence, then add a
closed storage-free review fixture plus focused and related tests.

Do not import or expose the complete protected journey. Do not add a
transition-module family. The accepted TD-002 CSS has only `29` raw bytes of
declared shell-cap headroom, so the shell should require reuse or consolidation
of existing style contracts rather than assume a cap increase.

## Hard stop and forbidden exposure

TD-003 ends at exact no-action `CM-50`, with only the two known returns
available. It must not name, define, imply, route toward, seed, open, or
display:

- an RP-004 destination or opening;
- an onward bearing, waypoint, invitation, or route unlock;
- RP-013, a successor, or post-ending content;
- a new learning objective, score, observation, native fact, mystery answer,
  or Builder/Machine judgment;
- reward, access, identity, authentication, permission, authority, exam
  standing, or external action;
- city memory, save acceptance, world acknowledgment, physical response, or
  changed SC-04 geometry, light, sound source, route, clock, coupling, seal,
  material, or maintenance behavior; or
- live Azure/Foundry calls, credentials, endpoints, source acquisition, or
  unavailable-input inference.

## Campaign risks and viability questions

| Risk | Floor-stack protection | Science question |
|---|---|---|
| Review reads as a score or verdict | fixed five-row Boolean conjunction with zero-credit owner language | Can semantics and status announcements preserve independence without cognitive overload? |
| Save reads as city acceptance | fresh Pilot intent; System-local all-or-none transaction; invariant Scene | Can the normal persistence adapter prove atomic replacement and local ownership under write failure? |
| Restore mints evidence or replays completion | sanitized exact record to no-action `CM-50`; replay list empty | Can normal reload/re-entry reuse exact validators without accepting stale checkpoint mixtures? |
| Provenance becomes a sixth lesson | required inspection is zero-credit and uses already-finalized records | Can the UI expose source/unavailable boundaries without retaining source text or private prose? |
| Return duplicates story events | exact known-anchor reconstruction only | Which existing route functions provide byte-stable no-replay returns from the new checkpoint? |
| Bearing implies RP-004 | bearing omitted | No viability work is authorized for a bearing. |
| Presentation exceeds shell budget | shared styles and invariant existing world plate | Can the shell remain within current JS/module caps and the declared `29`-byte CSS headroom, or must styles be consolidated first? |
| Gated review would require Martin's save | closed storage-free fixture | Can the fixture launch manifest expose all review/save/failure/restore/return scenarios without production leakage or arbitrary URL state? |

## Validation and report envelope

| Check | Result |
|---|---|
| Contiguous with accepted TD-002 `IE-P3` | PASS |
| Integration-sized rather than micro-seam or whole packet | PASS |
| Exact predecessor, entry action, and completion landing | PASS |
| Five-conjunct independence / no cross-credit | PASS |
| Packet mapping ID / evidence learning-ID separation | PASS — corrected |
| Fresh explicit review and save intents | PASS |
| Atomic allowlist, sanitation, and first-incomplete recovery | PASS |
| Verified restore and replay-free returns | PASS |
| `3-5m` pacing without timing credit | PASS |
| Optional bearing safely dispositioned | PASS — omitted |
| Invariant world and ownership | PASS |
| RP-004 / RP-013 / successor / post-ending boundary | PASS |
| Hidden lore / protected work / browser save | unopened / untouched / uninspected |

- **Stage and agent ID:** Operations Planning Major /
  `operations_planning_major`
- **Current positions:** whole story through `RP-012`; accepted play through
  TD-002 no-action `IE-P3`
- **Work completed:** selected and bounded one CM-40-CM-50 review/save/restore
  floor with exact entry, ordered milestones, checkpoint identity, sanitation,
  exits, pacing, dependencies, and hard stop
- **Decisions locked:** explicit review entry; five independent conjuncts;
  required zero-credit provenance inspection; fresh atomic save; exact
  allowlist; private clearing; `CM-50` no-action landing; two replay-free
  known returns; bearing omission
- **Flexible downstream areas:** concise copy, presentation grouping inside
  one active group, focus wording, shared-style composition, controller
  factoring, and fixture scenario organization
- **Files changed:** this certificate and `TD-003/STAGE-METRICS.json`
- **Validation:** hash audit, TD-002 accepted-boundary comparison, packet and
  protected-journey reconciliation, checkpoint/save/return architecture
  inspection, first-incomplete routing review, pacing check, hard-stop audit,
  and protected-boundary audit
- **Variances:** `TD003-MC-R01` resolved by correcting the durable packet
  mapping identity; bearing omission remains an authorized optional-scope
  decision, not a shell variance
- **Synchronization:** local only; no push authorized at this gate
- **Disposition:** `FLOOR STACK READY — CORRECTED`

## Exact Office of Science Administrator handoff

Using `GDB-TD003-v1`, `WNMP-TD003-v1`, corrected `CFS-TD003-v1`, Mission
return commit `d4d85a59dff9355ebfcd6e7476c8f2ff6c8c7ec8`, and exact no-action
`IE-P3`, revalidate the buildability of `SS-RP003-REVIEW-SAVE-v1` at
`RP-003 / SC-04 / CM-40-CM-50`.

Confirm that the normal checkpoint chain can reconstruct five independent
review conjuncts without cross-credit; require fresh explicit review,
provenance inspection, and save intents. Confirm that the durable top-level
`mappingId` and all seven records' `mapping_id` are exactly
`RP003-A3-CALIBRATION-MARGIN`, while `RP003-IE-01` remains only the
`skill_or_objective_id` for the four independent IE records. Bind one
`rp003.review-save.v1` all-or-none local transaction to those exactly seven
ordered finalized evidence records plus the three-field expedition note;
clear private/transient material; reject early, stale, forged, Tour-derived,
malformed, partial, or failed writes without mutating accepted durable state;
restore only exact `calibration_margin_complete` to no-action `CM-50`; and
reconstruct Civic Comparison or City Threshold without replay.

Resolve the eight viability questions above, especially exact persistence
ownership, sanitizer/reload order, storage-free fixture isolation, accessible
status/focus behavior, and the current CSS budget. Preserve offline operation,
no authority or exam guarantee, zero-credit Tour, invariant SC-04,
`cityStateDelta=null`, no external action, and the omitted bearing. Do not
alter learning mappings, author final copy or art, import the complete
protected journey into normal play, increase scope to RP-004, or add RP-013,
successor, post-ending, reward, access, identity, authority, physical/world
response, or unavailable-source inference. Produce
`04-VIABILITY-ENVELOPE.md` and issue `VIABILITY READY`, `REVISE`, or `HOLD`.
