# TD-012 Intelligence Officer As-Built Reconciliation - Release Return

Date: **2026-08-09**
Role: **Intelligence Officer / independent release authority**
Shell: **`SS-RP012-MEASURED-HORIZON-v1`**
Candidate audited: **`f80ff79b671a683221eb7d860c409beb69a14eb0`**
Combat checkpoint beneath candidate: **`825416da4426cda1e0d195da254083e2c1d893c3`**
Disposition: **`REVISE - RETURN TO COMBAT ENGINEER`**

## Release decision

TD-012 is not released on this candidate. Fresh shell-to-source comparison
and direct executable probes found three normal-controller correction classes,
demonstrated by four failures that the passing focused suite does not cover:

1. the save sanitizer accepts `READY FOR CURRENT PRACTICE STANDARD` with a
   false gate and an exact remediation route;
2. the sanitizer accepts `NOT YET READY - REMEDIATION ROUTES SAVED` with all
   sixteen gates true and no remediation route;
3. the sanitizer accepts a correctly checksummed record with an arbitrary
   `evidenceReferenceIds` set instead of binding those IDs to the current
   canonical eligibility record; and
4. the route predicate accepts the 14-character token `td012-aaaaaaaa` even
   though the shell requires at least 16 characters.

The first three are restore/forgery failures at the ordered 16-key checkpoint.
The fourth is an exact-entry rejection failure. They violate the Mission
shell's strict local-decision, resolved-evidence, stale/forged-state, and
fresh-token contracts. The earliest responsible owner is Combat Engineer.
Intelligence changed no product, test, fixture, build configuration, content,
media, current master control, canon, shell, or budget.

## Candidate and repository integrity

- `HEAD` is exact committed Quartermaster candidate `f80ff79`; its parent is
  exact pushed Combat checkpoint `825416d`.
- Local `origin/main` and remote `main` remain exact `825416d`; the candidate
  is one local commit ahead. No release push occurred.
- `git diff --check` and `git fsck --no-dangling` passed before the return.
- The tracked tree was clean at review start. The only untracked paths were
  the protected PDF and training directory named in the handoff; neither was
  opened, inspected, staged, moved, altered, or committed.

## Shell-to-build reconciliation

| Shell responsibility | Independent result | Evidence / disposition |
| --- | --- | --- |
| Exact identities and `UR-30 -> MH-00 -> MH-10 -> MH-20 -> MH-25 -> MH-30 -> MH-40` graph | `CORROBORATED` | Source identities, orchestrator wiring, focused traversal, and null-successor public contract are present. |
| Exact normal route, seven modalities, rejection, one-hit token, token at least 16 characters | **`FAIL`** | Predicate `/^td012-[a-z0-9-]{8,}$/` accepts `td012-aaaaaaaa` at length 14. |
| Current prerequisite coverage and 16 independent fresh gates | `CORROBORATED FOR NEW WORK` | Ordered one-Python plus fifteen-objective set, independent evaluators, blank forms, and `13/13` focused evidence pass. |
| Demonstrated-gap-only answer-free remediation and blank retry | `CORROBORATED FOR NEW WORK` | Source/controller and focused traversal retain public false IDs only and blank transient retry fields. |
| Exact ready/not-yet rule on new work and restore | **`FAIL ON RESTORE`** | Both contradictory checksummed local-decision records sanitize successfully. |
| Ordered 16-key private-free save; resolved canonical evidence references | **`FAIL ON RESTORE`** | A checksummed record containing only `FORGED-EVIDENCE-REF` sanitizes successfully; restore does not bind it to current eligibility references. |
| Canonical write/read-back, predecessor equality, rollback, `HOLD`, replay-free restore, safe returns | `PARTIAL / BLOCKED BY SANITIZER` | Adapter mechanics and focused paths pass, but forged/incoherent records cross the restore boundary before those mechanics can establish a trustworthy result. |
| Tour isolation, invariant world, no authority/exam guarantee, no successor/RP-013/post-ending route | `CORROBORATED` | Source/public contract/fixture scans and focused tests expose null deltas and no later-state branch. |
| Exact 58-state production-absent storage-free fixture | `CORROBORATED` | Literal manifest and source test pass; focused render proves 58 owner/focus targets and unique IDs at static-render tier. |
| Four layouts, owner/actual focus, `>=44px`, equal-outcome geometry | `UPSTREAM LIVE CLAIM CORROBORATED ONLY AT FOCUSED SOURCE/RENDER TIER` | Exact fixture/source contracts and direct focused tests pass; Intelligence did not repeat live release review after the blocking controller defect. |
| Content/status/heading/custody/outcome completeness | `CORROBORATED` | Canonical group registry, exact MH-25/MH-30 headings, five retained records plus separate reconciliation, and common outcome audit basis pass focused source/render checks. |
| Exact media/PBA/served/build identity | `NOT PROMOTED AFTER BLOCKER` | Authorities and candidate evidence were inspected; release-mode build/PBA/served gates were intentionally not rerun. |

## Independent reproduction

The focused normal and fixture command passed **`13/13`**:

```text
npm test -- --test-name-pattern='TD012' \
  test/measuredHorizonNormal.test.js \
  test/measuredHorizonFixture.test.js
```

An independent in-memory probe then constructed exact ordered, correctly
checksummed candidate records and called the committed sanitizer directly:

```json
{
  "ready_with_false_gate": true,
  "not_yet_with_all_true": true,
  "forged_evidence_references": true,
  "short_route_token_length": 14,
  "source_route_acceptance_regex_accepts_short": true
}
```

Every `true` value above is a failure of the fail-closed shell contract. The
probe uses no browser storage, external input, personal state, network, file
fixture, protected journey, or hidden lore.

## Variance register

| ID / finding | Intelligence classification | Owner | Required result |
| --- | --- | --- | --- |
| `TD012-FIX-001` exact transient field allowlists | `CLOSED REQUIRED CORRECTION - PENDING FINAL RELEASE` | Combat Engineer | Focused private-field path passes; no widening found. |
| `TD012-FIX-002` reachable not-yet decision | `CLOSED REQUIRED CORRECTION - PENDING FINAL RELEASE` | Combat Engineer | Genuine focused traversal reaches both local outcomes. |
| `TD012-FIX-003` one unique `>=44px` submit control | `CLOSED REQUIRED CORRECTION - PENDING FINAL RELEASE` | Combat Engineer | Static rendering has unique IDs and one action-row submit target. |
| `TD012-FIX-004` unique actionable save focus IDs | `CLOSED REQUIRED CORRECTION - PENDING FINAL RELEASE` | Combat Engineer | Focus targets remain on distinct save/retry controls; headings are separate. |
| `TD012-FIX-005` equal-outcome geometry | `CLOSED REQUIRED CORRECTION - PENDING FINAL RELEASE` | Combat Engineer | Shared anatomy and reserved heading block remain; upstream four-layout proof awaits final release reuse. |
| Quartermaster canonical status, exact MH-25/MH-30 headings, custody folio, and outcome audit copy | `ACCEPTED IMPROVEMENT - PENDING FINAL RELEASE` | Quartermaster | Exact shell meaning is restored with no scoring, save, route, world, or media change. |
| Quartermaster narrow `n OPEN` outcome-fit correction | `CLOSED REQUIRED CONTENT CORRECTION - PENDING FINAL RELEASE` | Quartermaster | Common anatomy remains exact and route IDs remain separately visible. |
| `TD012-FIX-006` contradictory local outcome accepted on restore | **`REQUIRED CORRECTION`** | **Combat Engineer** | Sanitizer must require ready iff all 16 gates are true and remediation is empty; not-yet iff at least one gate is false and exact remediation is nonempty. Add both direct negative regressions. |
| `TD012-FIX-007` forged evidence references accepted on restore | **`REQUIRED CORRECTION`** | **Combat Engineer** | Restore must bind the persisted ordered reference IDs to the exact current sanitized eligibility references and reject missing/extra/reordered/forged IDs before mounting MH-40. Add direct adapter/controller restore regressions. |
| `TD012-FIX-008` route token below 16 characters accepted | **`REQUIRED CORRECTION`** | **Combat Engineer** | Enforce total token length `>=16` in the exact route predicate and prove 15-character rejection plus 16-character acceptance without weakening modality/owner/group/action/version checks. |
| CSS headroom `73` bytes | `DEFERRED LIMITATION - PENDING FINAL RELEASE` | Science/Mission enforcement | No cap waiver or rolling entitlement; corrected candidate must still pass exact `PBA-TD012-v1`. |

No product, canon, campaign, curriculum, evidence rule, privacy contract, save
contract, authority meaning, world response, or masterplan update is accepted
while the candidate remains unreleased.

## Gates completed and intentionally stopped

| Gate | Intelligence result |
| --- | --- |
| Repository/candidate/parent/patch/object integrity | `PASS` |
| Full artifact/shell/source/test/config/control audit | `COMPLETE` |
| Focused TD-012 normal + fixture | `13/13 PASS` |
| Direct forged/incoherent restore and short-token probes | **`FAIL - TD012-FIX-006/007/008`** |
| Cold full suite / forty validators | not rerun after blocker |
| Production/fixture builds and release PBA/media | not rerun after blocker |
| Isolated preview/served identity/live four-layout review | not started after blocker |
| Complete E2E | **not rerun; cycle's sole complete `125.8s` PASS is preserved** |
| Release synchronization/push | not authorized |

The upstream E2E already reached credits with zero runtime errors. It was not
repeated merely to accumulate evidence, and the blocking cases are direct
restore/entry contracts outside that happy path.

## Exact Combat Engineer correction contract

Combat Engineer must change only the normal Measured Horizon validation and
direct regression coverage needed for `TD012-FIX-006/007/008`:

1. enforce bidirectional coherence among all 16 gate booleans, exact
   remediation routes, and the two local outcome strings;
2. on restore, require persisted evidence references to equal the exact
   current sanitized eligibility reference set in the shell-defined order;
3. enforce total route-token length of at least 16 characters;
4. add direct negative tests for both contradictory outcomes, forged/missing/
   extra/reordered reference IDs, 15-character route rejection, and exact
   16-character acceptance;
5. preserve the ordered 16 keys, checksum, predecessor-byte equality,
   rollback/`HOLD`, replay-free restore, route ownership/modalities, all 58
   fixture IDs, copy, CSS, media, PBA caps, world invariance, returns, and
   null-successor hard stop;
6. run the focused normal/fixture tests and one fresh cold full suite, then
   production/fixture builds and candidate PBA; do not rerun the complete E2E;
7. create one dedicated local Combat correction commit and return directly to
   a new fresh Intelligence Officer. Push only at the Combat functional gate
   if the active handoff authorizes it.

No Quartermaster re-review is required unless the correction changes rendered
copy, DOM, focus, CSS, fixture declarations, or content. Image Specialist and
reveal remain disabled.

## Cleanup and protected boundaries

No owned preview or browser was opened. Ports `4173`, `4184`, `4292`, `4293`,
and `5174` are clear. No QA capture changed. No image generation, image edit,
board, variant, import, media addition, accepted-reference byte change, or
reveal occurred. Hidden lore and Martin's browser/profile/save were not
opened or mutated.
