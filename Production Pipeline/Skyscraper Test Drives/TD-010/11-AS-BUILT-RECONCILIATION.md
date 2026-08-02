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

---

# Fresh Intelligence release return - exact five-sample UTF-8 contract

Date: **2026-08-01**

Role: **Intelligence Officer / independent release authority**

Shell: **`SS-RP010-COUNTERFIELD-v1`**

Candidate audited: **`d22a9b314e17c0da92cd11cca9c10aba20484b08`**

Combat second correction: **`4593d326908c3025a79d98052334a94effd474cc`**

Disposition: **`REVISE - RETURN TO COMBAT ENGINEER`**

## Release decision

TD-010 remains unreleased. The second-corrected candidate resolves the prior
normal-controller recovery and 22-row frozen-registry defects, and every
completed independent release gate passed. The separate shell-frozen
longest-copy contract does not pass, however. Shell 05 and Tactical 07 require
five exact UTF-8 samples to render live and intact at all four required
layouts. The as-built fixture exposes only four samples, substitutes different
label and RP-009 retained-scope text, and omits the exact frozen error.

This is a genuine shell-to-product/fixture implementation defect, not a
containment preference. The earliest owner is Combat Engineer. Intelligence
changed no product source, fixture, test, configuration, content, media,
provenance, checklist, or reveal byte. The complete post-build E2E was not run;
the candidate is already unreleasable and the one Intelligence E2E remains
unconsumed.

## Candidate, repository, and reveal integrity

- `HEAD` was exact committed Image revalidation candidate
  `d22a9b314e17c0da92cd11cca9c10aba20484b08`, whose sole parent is exact
  Combat second correction
  `4593d326908c3025a79d98052334a94effd474cc`.
- Candidate-to-parent `git diff --check`, object integrity, and the tracked
  starting worktree passed. The only untracked paths were the two protected
  user surfaces; neither was opened, inspected, staged, or changed.
- The accepted reveal was viewed at original resolution and independently
  verified as native `1672 x 941`, 24-bit RGB, `2,375,786` bytes, SHA-256
  `92062AC98CC72A1EDDF3075777662152216403BF5327C749F2B79924EF1F8B4E`.
  Its provenance, named checklist item, stewardship-without-standardization
  reading, spoiler boundary, canonical-reference-only status, and non-runtime
  status remain coherent. It is absent from production source and output.
- Both conditional SC-11 runtime image roles remain retired,
  `selectedImageRoles: []` remains exact, CSS is the truthful runtime medium,
  and all `17 / 37,410,731` predecessor media bytes remain exact with zero
  TD-010 runtime-media additions.

## Independent release evidence completed before the blocker

| Gate | Fresh Intelligence evidence | Result |
|---|---|---|
| Focused TD-010 normal/fixture/registry | `12/12` in `3.709s`, including all `5,040` observation orders | PASS |
| Related TD-004 through TD-010 regression | `129/129` in `5.509s` | PASS |
| Cold full product suite | `919/919` in `16.902s`; the disclosed aggregate Chrome startup timeout did not recur | PASS |
| Curriculum/readiness | mappings `11/11`; readiness `15/15` | PASS |
| Fresh builds | production `209` modules in `7.36s`; fixture `52` modules in `1.15s` | PASS |
| `PBA-TD010-v1` | JS `1,564,452` / `74DC7BB3...`; CSS `108,581` / `391C3F71...`; exact 17 media; zero new | PASS |
| Served identity | production and fixture root/deep/chunks/CSS/media byte-exact; owned ports closed | PASS |
| Genuine normal shell/controller/render | `2/2`; all 22 frozen registry rows and eight recovery responsibilities | PASS |
| Live shell fixture | `66/66`; exact IDs, visible owners, actual focus; four layout checks and three modes | PASS |
| Later/fixture/reveal scans | zero scoped RP-011/SC-12/later, fixture-leak, or reveal-runtime matches | PASS |

The genuine normal client-primary miss independently retains exact
`cf20-client-primary-first-failed`, actual failed IDs/tags, answer-free
guidance, private/transient clearing, one atomic polite status, and a wholly
blank retry. `TD010-FIX-003/004` therefore remain resolved rather than merely
claimed by the fixture.

## Blocking live five-sample reproduction

Shell 05 freezes these five exact samples: heading, label, recovery error,
RP-009 retained-scope row, and truthful execution label. Tactical 07 repeats
the same five-sample live-containment contract.

The served storage-free fixture's `longest_copy_contained` scenario rendered
at exact DPR-1 `1920 x 1080`, `1366 x 768`, `390 x 844`, and `768 x 900`:

| Sample | Shell exact text present live | As-built result |
|---|---:|---|
| heading | yes | PASS |
| label | no | FAIL - different client-flow label substituted |
| recovery error | no | FAIL - sample omitted |
| RP-009 retained-scope row | no | FAIL - different shortened scope text substituted |
| truthful execution label | yes | PASS |

At every viewport the four rendered fixture rows were geometrically
contained, the fixture-only `h1` was contained, one product status existed,
focus was exact `cf20-review-heading`, requests were local-only, and browser
console/page errors were empty. Those presentation successes do not waive the
three exact-copy failures. Deterministic source comparison independently
confirms that `FROZEN_LONGEST_COPY` has only four keys and that the shell's
exact label, error, and RP-009 retained-scope string are absent from TD-010
runtime/fixture source.

## Variance register

| ID / variance | Final classification | Owner | Evidence and required result |
|---|---|---|---|
| `TD010-FIX-001` | `RESOLVED` | Combat Engineer | Exact `cf20_exchange_save` remains in the 66-row closed fixture. |
| `TD010-FIX-002` | `RESOLVED` | Combat Engineer | Seven route modalities still render blank CF-00 with exact owner/focus. |
| `TD010-FIX-003` | `RESOLVED` | Combat Engineer | Genuine normal client-primary recovery is responsibility-specific and private-safe. |
| `TD010-FIX-004` | `RESOLVED` | Combat Engineer | Genuine normal owner/heading/status/focus registry passes all 22 shell rows. |
| `TD010-FIX-005` | **`REQUIRED CORRECTION`** | **Combat Engineer** | Render all five shell-frozen UTF-8 samples byte-exactly in the applicable product/fixture surfaces and prove live containment at all four exact DPR-1 layouts. No substitute or omitted sample is allowed. |
| fixture-only `.fixture-harness h1` containment | `ACCEPTED IMPROVEMENT` pending corrected-candidate revalidation | Image Specialist | Live review proves the bounded fixture heading remains contained at all four layouts; production runtime and meaning are unchanged. |
| code-native CSS / zero runtime image roles | `ACCEPTED IMPROVEMENT` pending corrected-candidate revalidation | Quartermaster / Image Specialist | Conditional roles are honestly retired; alternatives, CSS medium, zero runtime-media delta, and budget remain inside shell authority. |
| canonical-reference-only accepted reveal | `ACCEPTED IMPROVEMENT` pending release | Image Specialist | Exact byte-frozen PNG is spoiler-safe, provenance-complete, non-runtime, and unchanged. Publication remains withheld. |
| disclosed aggregate Chrome startup contention | `DEFERRED LIMITATION` | Intelligence Officer / release harness | Historical contention is truthful and bounded. It is not used as a waiver: fresh cold full `919/919` and isolated live shell `66/66` passed without timeout. |

No `MASTERPLAN UPDATE` is accepted while TD-010 is unreleased.

## Exact Combat Engineer acceptance contract

Combat Engineer must correct only the TD-010 normal/fixture copy surfaces and
dedicated regressions:

1. parse the five exact longest UTF-8 samples from shell 05 rather than
   maintaining a divergent hand-copied subset;
2. render the exact heading, label, recovery error, RP-009 retained-scope row,
   and truthful execution label in their applicable production and closed-
   fixture states;
3. add a shell-authoritative regression that fails on this candidate, proves
   all five byte-exact rendered strings, and checks containment at exact DPR-1
   `1920 x 1080`, `1366 x 768`, `390 x 844`, and `768 x 900`;
4. keep `TD010-FIX-001/002/003/004` resolved and preserve the 66-row owner/
   focus registry, fixture-only `h1` containment, one main/status, `>=44px`
   targets, forced colors, reduced motion, grayscale, local-only behavior,
   route, learning, schema, privacy, returns, invariant world, budget, and
   CF-30 hard stop;
5. preserve both retired runtime image roles, zero runtime-media additions,
   and the exact unchanged reference-only reveal/provenance/checklist; no
   image generation, edit, variant, or replacement is permitted; and
6. rerun the complete Combat correction ladder, create one dedicated local
   Combat correction commit, and return to Image Specialist for bounded
   non-generative revalidation before a fresh Intelligence release review.

## Gates intentionally not run after the blocker

- Complete post-build title-to-credits E2E: **not run; zero attempts on this
  candidate**.
- Master current-control promotion, retrospective entry, release commit,
  reveal publication, and push: **not authorized**.

All owned previews were stopped and ports `4173`, `4182`, `4288`, `4289`,
`5173`, and `5174` were clear. No incidental QA capture was created or changed.
Hidden lore, Martin's browser/profile/storage/save, and both protected
untracked user paths remained unopened and untouched.

**Fresh disposition: `REVISE - RETURN TO COMBAT ENGINEER / TD010-FIX-005 /
TD-010 / SS-RP010-COUNTERFIELD-v1`.**
