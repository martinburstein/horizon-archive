# TD-010 Polish Review - Counterfield Return

## Document control

| Field | Value |
|---|---|
| Stage | Image Specialist |
| Agent ID | `image_specialist` |
| Shell | `SS-RP010-COUNTERFIELD-v1 / SHELL READY` |
| Address | `RP-010 / SC-11 / CF-00-CF-30` |
| Starting build | Quartermaster commit `167b23aa0ee685dc85da86419facc2bbca7d44d0` |
| Quartermaster disposition | `CONTENT COMPLETE` |
| Date | `2026-08-01` |
| Disposition | **`REVISE - RETURN TO COMBAT ENGINEER`** |
| Next recipient | Combat Engineer / `combat_engineer` |

## Exact build reviewed

Image Specialist independently verified local `HEAD` as exact Quartermaster
commit `167b23aa0ee685dc85da86419facc2bbca7d44d0`, with sole parent Combat
commit `02bbfc033992d67cfaf67c5004c005385a60ca03`. The committed and working
Quartermaster ledger is exact blob
`490661606822c76b7332b4a2a65c174237bc0785`; the shell remains exact Mission
blob `85e57757cdf8a1a208a338027e150f0a2edc6d7b`.

Both conditional SC-11 runtime image roles remain honestly retired.
`selectedImageRoles` is empty, the production component reports
`data-rendering-medium="css"`, `data-runtime-image="not-selected"`, and
`data-asset-role-disposition="retired-no-runtime-image"`, and no raster was
silently reinstated.

## Independent presentation review

The storage-free TD-010 fixture was served locally on `127.0.0.1:4182` and
captured at exact `1920 x 1080`, `1366 x 768`, `390 x 844`, and `768 x 900`
CSS viewports. The code-native world remains separate from the interface,
contains no image dispatcher, and preserves complete textual alternatives.
The active review surface uses visible focus, one product main, one atomic
polite status, native controls, system-color/reduced-motion/grayscale rules,
and the Quartermaster's noninteractive CSS medium.

Presentation acceptance stopped before polish because the fixture does not
render the shell-frozen endpoint for multiple named scenarios. A visually
contained surface cannot substitute for an incorrect owner/focus/state
contract. No CSS or production-source correction was made by Image
Specialist.

## Blocking fixture evidence

Image Specialist parsed all 66 exact owner/focus rows directly from shell 05
and compared them with `createCounterfieldScenario(name).state.owner` and
`.focusIntent.target` from the content-complete fixture. The comparison found
the following exact differences:

| Scenario(s) | Shell 05 contract | Rendered fixture contract | Result |
|---|---|---|---|
| `route_pointer`, `route_touch`, `route_keyboard_enter`, `route_keyboard_space`, `route_switch`, `route_speech`, `route_screen_reader` | `SYSTEM // EXPEDITION LEDGER` / `cf00-heading` | `PILOT // EXPEDITION REVIEW` / `cf20-review-heading` | FAIL |
| shell ID `cf20_exchange_save` | exact required scenario ID | absent; fixture instead allowlists `cf20_bound_exchange` | FAIL |
| `client_primary_miss` | `SYSTEM // RECOVERY` / `cf20-client-primary-first-failed` | `SYSTEM // RECOVERY` / `cf20-python-primary-first-failed` | FAIL |

Direct browser evidence reproduces the first failure: with the scenario
picker visibly set to `route_pointer`, the product renders the four-scope
review group, `PILOT // EXPEDITION REVIEW`, and focus
`cf20-review-heading`. The fixture's displayed `PASS` compares the rendered
surface only with its own incorrect declared state, not with shell 05.

The existing focused fixture test still passes because it asserts that each
scenario has a nonempty self-declared owner/focus and checks only a small
subset of exact pairs. That is not the shell-required all-66 independent
comparison and cannot support the predecessor's `66/66` claim.

## Formal variances

### `TD010-FIX-001`

- **Discovering role:** Image Specialist / `image_specialist`.
- **Shell requirement:** the closed fixture must enumerate the exact 66 shell
  IDs once and no others.
- **Observed conflict/evidence:** `cf20_exchange_save` is absent and
  `cf20_bound_exchange` is present instead.
- **Requested smallest change:** restore the exact shell ID without changing
  product mechanics or adding a scenario.
- **Protected dimensions affected:** fixture closure, release evidence, exact
  shell identity.
- **Earliest owning role:** Combat Engineer.
- **Proposed classification:** `REQUIRED CORRECTION`.
- **Work paused at:** Image presentation acceptance before generation.

### `TD010-FIX-002`

- **Discovering role:** Image Specialist / `image_specialist`.
- **Shell requirement:** all seven successful route-modality scenarios render
  blank CF-00 with owner `SYSTEM // EXPEDITION LEDGER` and actual focus
  `cf00-heading`.
- **Observed conflict/evidence:** all seven default through `groupFor()` to
  the four-scope review group and render `PILOT // EXPEDITION REVIEW` with
  actual focus `cf20-review-heading`.
- **Requested smallest change:** map the exact seven successful route IDs to
  the existing contract-equivalent successful entry state and add an
  independent shell-to-rendered regression for every row.
- **Protected dimensions affected:** route-modality endpoint, owner, focus,
  fixture truth, release evidence.
- **Earliest owning role:** Combat Engineer.
- **Proposed classification:** `REQUIRED CORRECTION`.
- **Work paused at:** Image presentation acceptance before generation.

### `TD010-FIX-003`

- **Discovering role:** Image Specialist / `image_specialist`.
- **Shell requirement:** `client_primary_miss` renders System recovery and
  focuses `cf20-client-primary-first-failed`.
- **Observed conflict/evidence:** the fixture renders the generic Python
  failed-control target `cf20-python-primary-first-failed`.
- **Requested smallest change:** provide the exact client-primary failed
  target and render/focus it for the named scenario; protect it with the same
  all-66 shell comparison.
- **Protected dimensions affected:** deterministic recovery focus, client/PY
  independence, accessibility fixture truth.
- **Earliest owning role:** Combat Engineer.
- **Proposed classification:** `REQUIRED CORRECTION`.
- **Work paused at:** Image presentation acceptance before generation.

## Reveal and generation accounting

- Accepted reveal: none.
- Workspace reveal bytes: none.
- Runtime image changes: none.
- Completed image-generation attempts: `0`.
- Recovery attempts: `0`.
- The one-initial/one-targeted-recovery allowance remains available only for
  the resumed Image stage after Combat correction.
- A pending built-in generation call was cancelled before it returned an
  output; it produced no local result and no bytes entered the workspace,
  canon, runtime, provenance, commit, or user-facing reveal.
- No checklist item was closed and no prompt-provenance or visual-canon
  record was updated.

## Validation evidence

| Gate | Result |
|---|---|
| Exact predecessor commit/parent and shell/ledger blobs | PASS |
| Runtime-role retirement and zero new runtime media | PASS |
| Direct four-viewport code-native capture | REVIEWED; acceptance blocked by fixture-state mismatch |
| Shell 05 vs all 66 fixture scenario owner/focus IDs | FAIL: 8 owner/focus rows differ and one exact scenario ID is replaced |
| Existing focused Counterfield/fixture tests | PASS but insufficient; self-referential fixture declarations do not catch the differences above |
| Presentation-safe code changes | none |
| Full/build/PBA/served/release ladder | not rerun after the blocking contract failure; predecessor evidence is not promoted |
| Generation boundary | zero completed attempts; zero accepted/rejected output bytes |
| Protected files and Martin-owned state | untouched |

## Protected boundaries

No mechanic, evidence, save, route, canon, content meaning, runtime asset,
owner, focus, fixture state, successor, RP-011/RP-013, authority, reward,
access, response, external action, or world effect was changed. Hidden lore,
Martin's browser/profile/save, `Art Of No Mans Sky Book Scan.pdf`, and
`Simplilearn Training Files/` remained unopened and untouched.

## Files changed

- this review;
- `Production Pipeline/Skyscraper Test Drives/TD-010/STAGE-METRICS.json`;
- `NEXT_INSTANCE_HANDOFF.md`.

## Disposition

**`REVISE - RETURN TO COMBAT ENGINEER`**

Image Specialist cannot issue `PRESENTATION COMPLETE` or hand this candidate
to Intelligence while the closed fixture materially disagrees with the
shell-frozen route and recovery contracts. The reveal obligation remains
unfulfilled and generation remains deferred until the corrected candidate
returns through the exact sequential handoff.

## Exact Combat Engineer correction handoff

- **Stage / agent:** Combat Engineer / `combat_engineer` only.
- **Starting authority:** Quartermaster content-complete commit
  `167b23aa0ee685dc85da86419facc2bbca7d44d0` plus the dedicated Image
  `REVISE` checkpoint containing this review.
- **Required corrections:** resolve `TD010-FIX-001`, `TD010-FIX-002`, and
  `TD010-FIX-003` in the production-absent TD-010 fixture and focused tests.
- **Exact proof:** compare the shell 05 table with all 66 manifest IDs,
  rendered `[data-active-owner]` text, and actual
  `document.activeElement.id`; require exactly 66 unique equal rows and zero
  differences. Explicitly prove the seven route modalities land at CF-00,
  `cf20_exchange_save` is the exact ID, and `client_primary_miss` focuses the
  client failed control.
- **Preserve:** all accepted product mechanics/content, CSS-medium runtime-role
  retirement, exact source order, storage-free and production-absent fixture
  isolation, four layouts, modes, privacy, budget, returns, invariant world,
  and CF-30 hard stop.
- **Validation after correction:** focused fixture and Counterfield tests,
  all-66 independent shell comparison, full suite, mappings, readiness,
  production and fixture builds, PBA, privacy/later/protected scans, served
  identity, patch integrity, and owned-process cleanup.
- **Generation boundary:** make no board or image call. Preserve zero
  completed attempts and no accepted/rejected output bytes. The resumed Image
  Specialist alone owns the exactly one reveal after correction.
- **Commit/synchronization:** one dedicated local Combat correction commit;
  no push unless the current handoff explicitly changes.
- **Next recipient on pass:** Image Specialist / `image_specialist` for a
  fresh presentation review and the required one accepted reveal; stop before
  Intelligence.
