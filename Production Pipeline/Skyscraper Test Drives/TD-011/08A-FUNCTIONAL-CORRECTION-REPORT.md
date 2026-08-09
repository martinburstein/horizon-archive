# TD-011 Combat Engineer Functional Correction - TD011-FIX-002

Date: **2026-08-09**
Role: **Combat Engineer / bounded release correction**
Shell: **`SS-RP011-UNBORROWED-REACH-v1`**
Starting authority: **second Intelligence return commit `54520a0`**
Correction ID: **`TD011-FIX-002`**
Disposition: **`CORRECTED - INTELLIGENCE RE-REVIEW READY`**

## Second correction

The live defect is closed with one selector-only production change:
`.unborrowed-reconciliation fieldset label{min-height:44px}`. It preserves the
six native checkboxes, wrapping labels, DOM order, content, focus IDs,
controller, evidence, save, route, world, return, LOOK, and hard stop.

A direct regression proves the exact selector and six effective checkbox
labels in each affected closed fixture state: `ur30-all-reopened`,
`ur30-reconciliation-blank`, and `ur30-reconciliation-retry`. Live browser
measurement confirms all `18/18` state/label combinations at a minimum
`259.2x44 CSS px`, with declared owner/focus contract still `PASS`.

Validation on the corrected worktree:

- focused normal/fixture/protected: `26/26 PASS`;
- production build: `212` modules;
- `PBA-TD011-v1`: JS `1,622,151` bytes / SHA-256
  `F9359D9039B8480DFEF2F09377FB2DF13C67B0DB34545828A1E1DF61186C8C0D`;
  CSS `113,974` bytes / SHA-256
  `CB79913285EACCADEBB3CE36C57B72856E4623C3EF953D66FF9D60340D09BE5E`;
  exact media `17 / 37,410,731`; CSS headroom `36` bytes; PASS;
- fresh cold full suite: `932/932 PASS` on the first corrected-candidate run;
- owned fixture browser closed and port `4183` clear; and
- the already-passing complete E2E was not rerun at Combat.

No fixture scenario, component, controller, content, semantics, learning,
persistence, route, media, image, board, reveal, shell, or cap changed. Image
Specialist remains disabled. Protected untracked work remained unopened,
uninspected, unstaged, and untouched.

## Preserved first correction

# TD-011 Combat Engineer Functional Correction — TD011-FIX-001

Date: **2026-08-09**
Role: **Combat Engineer / bounded release correction**
Shell: **`SS-RP011-UNBORROWED-REACH-v1`**
Starting authority: **Intelligence return commit `c92f384`**
Correction ID: **`TD011-FIX-001`**
Disposition: **`CORRECTED — INTELLIGENCE RE-REVIEW READY`**

## Exact objective and reproduction

Intelligence independently reproduced a cold full-suite race: TD-010 and
TD-011 served-identity previews both read the shared production `dist` while
TD-011 did not participate in TD-010's accepted cross-process browser/build
resource lock. The rejected candidate returned `928/930`; both preview tests
observed `0` production assets instead of `19`, while each passed `1/1` when
run sequentially.

## Correction

- `review-fixtures/td011-unborrowed-reach/servedIdentity.test.js` now imports
  the exact accepted `acquireTd010BrowserResource` lock.
- The test acquires once before either preview, holds the same lock across the
  complete production and fixture served-byte checks, and releases once from
  an outer `finally` on success, assertion failure, or preview failure.
- Existing production/fixture inner `finally` cleanup, ports `4290/4291`,
  root/deep fallback checks, every asset hash comparison, `19/2` counts, and
  `120s` test timeout are unchanged.
- `servedIdentityLock.test.js` is a source-level regression that proves the
  shared import, acquisition before both previews, outer-finally release, and
  exactly one acquire/release call.

No production component, controller, CSS, fixture scenario, content, route,
save, media, shell, PBA, or hard-stop file changed.

## Validation

| Gate | Result |
|---|---|
| Focused TD-011 served identity + lock regression | `2/2 PASS` |
| First corrected-candidate cold full suite | `931/931 PASS`; zero failures/skips |
| TD-010 served identity inside full suite | `PASS` |
| TD-011 served identity inside full suite | `PASS` |
| Production source delta | none |
| Patch integrity | `git diff --check PASS` |

The corrected full suite was not serialized by command and excluded no test;
the two preview tests ran under their shared resource lock inside ordinary
`npm test`. No build, complete E2E, release push, or Intelligence conclusion is
claimed by Combat.

## Protected boundaries and cleanup

- No browser tab, Martin storage/save, hidden lore, protected journey content,
  image operation, board, generation, import, or reveal was used.
- The protected untracked PDF and training directory remained unopened,
  uninspected, unstaged, and untouched.
- Both preview tests completed their own shutdown; no owned listener remains
  on ports `4288`, `4289`, `4290`, or `4291`.

## Files changed

- `horizon-archive-game/review-fixtures/td011-unborrowed-reach/servedIdentity.test.js`
- `horizon-archive-game/review-fixtures/td011-unborrowed-reach/servedIdentityLock.test.js`
- this correction report
- `Production Pipeline/Skyscraper Test Drives/TD-011/STAGE-METRICS.json`
- `NEXT_INSTANCE_HANDOFF.md`

## Exact Intelligence handoff

Fresh Intelligence must begin from the dedicated Combat correction commit,
verify `TD011-FIX-001` independently, and rerun the complete release ladder.
Quartermaster content is unchanged and does not require re-review. The
Image Specialist remains disabled; there is no image stage or reveal.
