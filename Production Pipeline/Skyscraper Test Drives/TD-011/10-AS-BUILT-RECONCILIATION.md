# TD-011 Intelligence Officer As-Built Reconciliation — Release Return

Date: **2026-08-09**
Role: **Intelligence Officer / independent release authority**
Shell: **`SS-RP011-UNBORROWED-REACH-v1`**
Candidate audited: **`0b3a9a213ba359049f3e0b1828e3eb177f051632`**
Combat build beneath candidate: **`c96f3df28db7f57b0d3c86abe79a34e41696f5d5`**
Disposition: **`REVISE — RETURN TO COMBAT ENGINEER`**

## Release decision

TD-011 is not released on this candidate. Independent focused validation
passed the entire normal/protected/fixture surface, but the first fresh cold
full-suite attempt failed two served-identity rows because the TD-010 and
TD-011 preview tests raced over the same production `dist` resource. Both
tests observed zero production assets while expecting nineteen.

The failure is deterministic test-infrastructure contention, not a reproduced
gameplay, content, save, privacy, or media defect: each served-identity test
passed when run sequentially against the same committed candidate. It still
blocks release because the Mission/Intelligence ladder requires a reliable
full product suite, and the prior TD-010 release explicitly retired this class
of browser/build contention through a cross-process resource lock. TD-011's
served-identity test does not acquire that shared lock.

The earliest owner is Combat Engineer. Intelligence changed no product source,
test, fixture, build configuration, content, media, master plan, or accepted
release state. Remaining validators/build/preview/E2E/live-release gates stop
after the first independent blocking full-suite failure.

## Candidate and repository integrity

- `HEAD` was exact committed Quartermaster candidate
  `0b3a9a213ba359049f3e0b1828e3eb177f051632`; its sole parent is exact pushed
  Combat build `c96f3df28db7f57b0d3c86abe79a34e41696f5d5`.
- `origin/main` and remote `main` remained at the Combat commit. No release
  push occurred.
- Candidate patch integrity and `git fsck --no-dangling` passed. The tracked
  tree was clean at review start.
- The protected untracked PDF and training directory remained unopened,
  uninspected, unstaged, and untouched.

## Independent reproduction

Intelligence ran one focused command across the current normal, protected
journey, and fixture tests:

```text
node --test test/unborrowedReachNormal.test.js \
  test/unborrowedReachFixture.test.js \
  test/unborrowedReachProtectedJourney.test.js
```

Result: **`25/25 PASS`**. This independently covered exact entry, all seven
modalities, all `720` observation orders, all `24` scope orders, PY-019,
agent-surface forms, both explanations, remediation, both checkpoints,
sanitation, rollback, restore, returns, LOOK, hard stop, all `80` public
render/focus targets, content completion, and protected-production isolation.

The first cold full suite then returned **`928/930 PASS; 2 FAIL`**:

```text
TD010 production and fixture root, deep fallback, chunks, and media serve
exact fresh-build bytes
  AssertionError: 0 !== 19

TD011 production and closed fixture serve exact fresh-build bytes
  AssertionError: 0 !== 19
```

Source comparison identified the exact asymmetry:

- TD-010 wraps both previews with
  `acquireTd010BrowserResource()` from
  `review-fixtures/td010-counterfield/browserResourceLock.js`;
- TD-011 opens production/fixture previews without that lock; and
- both tests read the shared production `horizon-archive-game/dist/assets`.

The two served-identity tests then passed **`1/1 + 1/1`** when run
sequentially, proving current served bytes are correct and isolating the full-
suite failure to missing cross-process serialization.

## Variance register

| ID / variance | Classification | Owner | Evidence and required result |
|---|---|---|---|
| `TD011-FIX-001` TD-011 served-identity preview lacks the existing shared browser/build resource lock | **`REQUIRED CORRECTION`** | **Combat Engineer** | Import and acquire the accepted shared lock before either TD-011 preview, release it in `finally`, and add a bounded source assertion that prevents regression. The fresh full `npm test` must pass on the first corrected-candidate run without excluding or serially invoking tests by command. |
| Real control focus plus deterministic public fixture form | `ACCEPTED IMPROVEMENT — PENDING CORRECTED-CANDIDATE RELEASE` | Quartermaster / Combat | `25/25` focused evidence confirms each shell target is a real control and accepts no external state. |
| Exact observation, responsibility, custody, recovery, and separate reconciliation content | `ACCEPTED IMPROVEMENT — PENDING CORRECTED-CANDIDATE RELEASE` | Quartermaster | Inside frozen meaning; focused rendered/source checks pass without scoring/evidence change. |
| Native modal save confirmation with only save/cancel | `ACCEPTED IMPROVEMENT — PENDING CORRECTED-CANDIDATE RELEASE` | Quartermaster / Combat | Exact actions/focus and write-free cancel contract pass focused evidence. |
| Stable public validation attributes | `ACCEPTED IMPROVEMENT — PENDING CORRECTED-CANDIDATE RELEASE` | Quartermaster | Public-only identities; no private/save bytes or arbitrary state. |
| `94` CSS bytes remaining under `PBA-TD011-v1` | `DEFERRED LIMITATION — PENDING CORRECTED-CANDIDATE RELEASE` | Science / Mission enforcement | Truthful and non-blocking only if a corrected fresh release build still passes the exact executable PBA. No cap waiver is granted. |

No product, canon, campaign, curriculum, evidence, privacy, save, world,
authority, or masterplan update is accepted while the candidate is unreleased.

## Gates completed and intentionally stopped

| Gate | Intelligence result |
|---|---|
| Repository/candidate/parent/patch/object integrity | `PASS` |
| Focused normal + fixture + protected | `25/25 PASS` |
| Fresh cold full suite | **`FAIL — 928/930; TD011-FIX-001`** |
| Sequential served identity diagnosis | `TD-010 1/1 PASS; TD-011 1/1 PASS` |
| Forty curriculum self-tests | not rerun after blocker |
| Production/fixture builds and PBA | not promoted after blocker |
| Isolated preview/HTTP preflight | not started after blocker |
| Complete E2E | **not run; zero Intelligence E2E attempts** |
| Live release review / runtime logs | not run after blocker |
| Release synchronization/push | not authorized |

Stopping here prevents later successful gates from masking a known cold-suite
failure and preserves the one complete E2E for a releasable candidate.

## Exact Combat Engineer correction contract

Combat Engineer must change only TD-011 served-identity test infrastructure and
its direct regression evidence:

1. reuse the already accepted cross-process preview/build lock rather than
   inventing a second lock or weakening concurrency;
2. acquire it before opening the TD-011 production preview and release it in a
   top-level `finally` on success, assertion failure, or preview failure;
3. preserve exact ports, production/fixture root and deep-route checks, all
   chunk/media hash comparisons, nineteen/two asset counts, timeouts, and
   cleanup;
4. add a source-level regression proving TD-011 acquires/releases the shared
   lock;
5. change no production component/controller/CSS, fixture scenario, shell,
   content, save, route, media, budget, or hard stop;
6. run the focused served-identity/regression command, then one fresh cold full
   `npm test` on the corrected candidate; and
7. create one dedicated Combat correction commit and return directly to a
   fresh Intelligence release review. Image Specialist remains disabled and
   no Quartermaster content re-review is required unless the correction widens.

## Synchronization and protection

`NEXT_INSTANCE_HANDOFF.md` contains one exact next action: Combat Engineer
only for `TD011-FIX-001`. The active three-hour continuation must resume the
latest committed checkpoint and must not duplicate this rejected Intelligence
attempt or overlap the manual owner before 3:00 PM New York time.

No image generation/edit/selection/board/import/reveal action occurred. Hidden
lore, Martin's browser/profile/storage/save, and protected user paths were not
opened, read, mutated, staged, or committed. No preview or browser tab was
opened during this rejected Intelligence attempt, and no owned process or port
requires cleanup.

**Final disposition: `REVISE — RETURN TO COMBAT ENGINEER / TD011-FIX-001`.**
