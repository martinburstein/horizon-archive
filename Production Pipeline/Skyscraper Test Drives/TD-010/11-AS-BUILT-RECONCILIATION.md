# TD-010 Intelligence Officer As-Built Reconciliation - Release Return

Date: **2026-08-01**
Role: **Intelligence Officer / independent release authority**
Shell: **`SS-RP010-COUNTERFIELD-v1`**
Candidate audited: **`c80650c84f68f1b21bdb3b85449a1b67852b5185`**
Combat correction beneath candidate: **`f3736129ae4f457205e9988c8b27ccb82036019f`**
Remote at review: **`02bbfc033992d67cfaf67c5004c005385a60ca03`**
Disposition: **`REVISE - RETURN TO COMBAT ENGINEER`**

## Release decision

TD-010 is not released. Independent shell-to-production comparison found that
the corrected fixture reports a shell-compliant client-primary miss while the
normal production controller still returns the Python failed-control focus.
The production controller also does not render several shell-frozen headings
and learning statuses verbatim. These are release defects in deterministic
recovery and exact frozen-copy behavior, not acceptable fixture-only
differences.

The earliest owner is Combat Engineer. Intelligence changed no product source,
test, fixture, build configuration, content, media, or reveal byte. The full
release ladder stops at the first independently reproduced blocking contract
failure; no production build, preview, complete E2E, master-plan promotion,
release commit, publication, or push is authorized from this candidate.

## Candidate and repository integrity

- `HEAD` was exact committed Image candidate
  `c80650c84f68f1b21bdb3b85449a1b67852b5185`, whose sole parent is exact
  Combat correction `f3736129ae4f457205e9988c8b27ccb82036019f`.
- The strategic and Marine chain is sole-parent and ordered from Commandant
  through Image. The Mission shell blob remains the construction authority.
- `origin/main` remained at
  `02bbfc033992d67cfaf67c5004c005385a60ca03`; no push occurred.
- `git diff --check` passed for both Combat-to-candidate and pre-correction-to-
  candidate ranges.
- The tracked worktree was clean at review start. The protected untracked PDF
  and training directory remained unopened, uninspected, unstaged, and
  untouched.

## Independent reproduction

Intelligence ran the actual normal `createCounterfieldNormalController`, not a
fixture-created public state:

1. created the exact canonical released RP-009 predecessor and valid normal
   OF-30 route state;
2. entered blank CF-00 with a fresh valid route token;
3. completed all seven observations, PY-018 primary, trace, and transfer;
4. submitted allowlisted but incorrect values to all eight client-primary
   dimensions; and
5. inspected the controller's returned recovery state.

Actual result:

```json
{
  "status": "remediation_required",
  "activeGroup": "cf20_recovery",
  "owner": "SYSTEM // RECOVERY",
  "focus": "cf20-python-primary-first-failed",
  "failedIds": [
    "P01.client_step",
    "P01.deciding_signal",
    "P02.client_step",
    "P02.deciding_signal",
    "P03.client_step",
    "P03.deciding_signal",
    "P04.client_step",
    "P04.deciding_signal"
  ]
}
```

Shell 05 requires `client_primary_miss` to render
`SYSTEM // RECOVERY` and focus `cf20-client-primary-first-failed`.
`CounterfieldNormal.js` instead hard-codes
`cf20-python-primary-first-failed` in the shared `fail()` path. The fixture
special-cases `client_primary_miss`, so its 66/66 browser proof validates a
synthetic fixture state rather than this production-controller transition.

## Exact frozen-copy comparison

`Counterfield.jsx` renders `state.heading` and `state.statusMessage`. The
normal controller supplies the following non-shell values:

| State | Shell-frozen heading/status | Production controller | Result |
|---|---|---|---|
| PY primary | `PY-018 - PRESERVE REQUEST AND RESPONSE OWNERSHIP`; exact primary-blank status | `PY-018 - DERIVE ONE BOUNDED EXCHANGE SUMMARY FROM SANITIZED REPLICAS`; generic blank status | FAIL |
| PY trace | `PY-018 - COMPLETE THE CLOSED-NOTE OWNERSHIP AND PROVENANCE TRACE`; exact trace-blank status | `TRACE REQUEST-OWNED AND RESPONSE-OWNED FIELDS WITHOUT COLLAPSING THEM`; generic blank status | FAIL |
| PY transfer | `PY-018 - COMPLETE A GENUINELY BLANK FRESH TRANSFER`; exact transfer-blank status | `PY-018 TRANSFER - DERIVE A FRESH BOUNDED EXCHANGE SUMMARY`; generic blank status | FAIL |
| client primary | shell heading; exact neutral-primary status | heading matches; generic blank status | FAIL |
| client retrieval | `AI901-D2-O3 - COMPLETE CLOSED-NOTE CLIENT-FLOW RETRIEVAL`; exact retrieval status | `AI901-D2-O3 RETRIEVAL - KEEP CLIENT-FLOW RESPONSIBILITIES DISTINCT`; generic blank status | FAIL |
| client transfer | `AI901-D2-O3 - COMPLETE A GENUINELY BLANK FRESH CLIENT-FLOW TRANSFER`; exact transfer status | `AI901-D2-O3 TRANSFER - APPLY THE CLIENT-FLOW BOUNDARY`; generic blank status | FAIL |
| client-flow explanation | `EXPLAIN WHY THE FOUR CLIENT-FLOW RESPONSIBILITIES REMAIN DISTINCT`; exact explanation status | `EXPLAIN THE FOUR DISTINCT CLIENT-FLOW RESPONSIBILITIES`; generic blank status | FAIL |
| truth/authority explanation | shell heading; exact no-authority status | heading matches; generic blank status | FAIL |
| scored recovery | `RECOVER THE FIRST INCOMPLETE SCORED RESPONSIBILITY`; exact scored-miss status and responsibility-specific focus | `RETRY THE FIRST INCOMPLETE RESPONSIBILITY WITHOUT AN ANSWER`; different status and Python-only focus | FAIL |

The punctuation above is normalized to ASCII only for this comparison table;
the required correction must preserve the shell's exact UTF-8 bytes.

## Variance register

| ID | Final classification | Owner | Evidence and required result |
|---|---|---|---|
| `TD010-FIX-001` | `RESOLVED` | Combat Engineer | Exact `cf20_exchange_save` is restored in the closed fixture. |
| `TD010-FIX-002` | `RESOLVED` | Combat Engineer | Seven fixture route modalities render blank CF-00 with exact owner/focus. |
| `TD010-FIX-003` | **`REQUIRED CORRECTION`** | **Combat Engineer** | Fixture special-casing does not repair the normal controller. A genuine normal client-primary scored miss must return `SYSTEM // RECOVERY`, focus `cf20-client-primary-first-failed`, retain only actual scored tags, clear private work, and begin a blank client-primary retry. Add a normal-controller and rendered-product regression that fails on the current candidate. |
| `TD010-FIX-004` | **`REQUIRED CORRECTION`** | **Combat Engineer** | Normal production must render every shell-frozen owner, heading, status, and focus field byte-exactly in every applicable state. Add a shell-authoritative normal-controller/rendered-product regression for all frozen registry fields; fixture owner/focus-only proof is insufficient. |
| fixture-only `.fixture-harness h1` containment | `ACCEPTED IMPROVEMENT` pending corrected-candidate revalidation | Image Specialist | Bounded to the fixture harness and changes no production runtime or shell meaning. It cannot be promoted until the corrected candidate passes Intelligence. |
| both conditional runtime image roles retired | `ACCEPTED IMPROVEMENT` pending corrected-candidate revalidation | Quartermaster / Image Specialist | Code-native CSS runtime, complete alternatives, `selectedImageRoles: []`, and zero runtime-media delta remain inside the shell's conditional-role authority. |
| accepted reveal reference-only | `ACCEPTED IMPROVEMENT` pending release | Image Specialist | Exact accepted PNG remains canonical-reference-only and fills neither retired runtime role. It is not published by this failed release gate. |

No `MASTERPLAN UPDATE` is accepted while the candidate is unreleased.

## Gates completed and intentionally not run

| Gate | Intelligence result |
|---|---|
| Repository/candidate/parent/patch integrity | PASS |
| Authority and candidate source/test/config/report inspection | completed through the blocking production comparison |
| Shell-to-production recovery comparison | **FAIL - TD010-FIX-003 reproduced** |
| Shell frozen heading/status comparison | **FAIL - TD010-FIX-004** |
| Reveal file/provenance/hash/dimensions/original-resolution review | PASS as an accepted candidate only; publication withheld |
| Focused, related, full suite reruns | intentionally not promoted after earliest blocking release defect |
| Mappings `11/11` / readiness `15/15` | not rerun by Intelligence after blocker |
| Fresh production/fixture builds and PBA | not run by Intelligence after blocker |
| Served identity and 66-state live matrix | not run by Intelligence after blocker |
| Four exact DPR-1 layouts, modes, targets, copy, logs, requests, hard stop | not run by Intelligence after blocker |
| Complete post-build E2E | **not run**; exactly-zero Intelligence E2E attempts on this rejected candidate |
| Release synchronization/push | not authorized; no push |

Stopping early prevents a large successful regression ladder from masking a
known shell failure and avoids consuming the one permitted complete E2E on an
unreleasable candidate.

## Reveal candidate preservation

Intelligence inspected the exact PNG at original resolution. Independent file
evidence matches the neighboring provenance:

- path:
  `Visual Direction/Production Masters/2026-08-01-rp010-stewardship-without-standardization-reveal/rp010-stewardship-without-standardization-reveal-v1.png`;
- native `1672 x 941`, 24-bit RGB PNG;
- `2,375,786` bytes;
- SHA-256
  `92062AC98CC72A1EDDF3075777662152216403BF5327C749F2B79924EF1F8B4E`;
- checklist proposition: stewardship without standardization across
  physically separated works at landscape scale;
- spoiler boundary: no UI, text, human trace, route, access, reward, response,
  successor, RP-011, or later-content cue observed; and
- status: exact accepted Image candidate, canonical-reference-only,
  non-runtime, not released or published by Intelligence.

No replacement, edit, variant, third generation, or new reveal was made.

## Exact Combat Engineer acceptance contract

Combat Engineer must correct only the normal TD-010 controller/rendered
surface and dedicated tests:

1. make every normal recovery focus responsibility-specific, including exact
   client-primary `cf20-client-primary-first-failed`;
2. preserve actual failed IDs/tags, answer-free guidance, private clearing,
   blank retry, one atomic polite status, and all other learning independence;
3. render every shell-frozen owner, UTF-8 heading, status, and focus byte-
   exactly for every applicable production state;
4. add a shell-05-parsed normal-controller and rendered-product regression
   covering all frozen registry fields, not only fixture owner/focus pairs;
5. keep `TD010-FIX-001/002` resolved, the exact 66 fixture IDs, production-
   absent/storage-free fixture isolation, runtime-role retirement, zero
   runtime-media delta, reference-only reveal, route, schema, privacy,
   returns, invariant world, budget, and CF-30 hard stop unchanged; and
6. rerun the complete Combat correction ladder, create one new dedicated
   local Combat correction commit, and return to Image Specialist for bounded
   revalidation before a fresh Intelligence release review.

## Synchronization and protection

`NEXT_INSTANCE_HANDOFF.md` now contains one exact next action: Combat Engineer
only. The authorized every-three-hours Skyscraper automation remains active in
this task; no additional task was scheduled.

Hidden lore, Martin's browser/profile/storage/save, and the two protected
untracked user paths were not opened, read, modified, staged, or committed.
No preview was started and no port or incidental capture requires cleanup.

**Final disposition: `REVISE - RETURN TO COMBAT ENGINEER / TD-010 /
SS-RP010-COUNTERFIELD-v1`.**
