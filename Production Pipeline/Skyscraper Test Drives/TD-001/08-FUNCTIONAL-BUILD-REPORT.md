# TD-001 Functional Build Report

## Document control

| Field | Value |
|---|---|
| Stage | Combat Engineer |
| Agent ID | `combat_engineer` |
| Test drive | `TD-001` |
| Shell | `SS-RP003-PY010-v1` |
| Campaign address | `RP-003 / SC-04 / CM-20-CM-23` |
| Shell authority | `05-PLAYABLE-SLICE-SHELL.md`, disposition `SHELL READY` |
| Creative authority | `06-CREATIVE-TREATMENT.md`, disposition `CREATIVE LOCK` |
| Experience authority | `07-EXPERIENCE-BLUEPRINT.md`, disposition `EXPERIENCE READY` |
| Starting commit | `6dcb9e1f7efa31ccda6637b3dfca741d196214ae` |
| Build commit | This dedicated final Combat Engineer commit; resolve the immutable identity from Git history |
| Validation tier | Tiers 2-4: focused/connected tests, full game suite, all readiness self-tests, production build, served-bundle identity, source/boundary inspection |
| Disposition | `FUNCTIONALLY COMPLETE` |

## Built result

The complete normal-route functional shell is implemented from the accepted all-three `CM-10` survey boundary through the no-action `PY010-P3` landing:

```text
accepted all-three CM-10
  -> fresh explicit review
  -> blank CM-20 primary
  -> strict 8/8 evaluation
  -> actual-miss-only CM-21 repair, answer-free private clear
  -> blank CM-20 retry
  -> P1 atomic checkpoint
  -> blank CM-22 retrieval
  -> strict 4/4 evaluation
  -> actual-miss-only CM-21 repair, answer-free private clear
  -> blank CM-22 retry
  -> P2 atomic checkpoint
  -> blank, distinct CM-23 transfer
  -> strict 8/8 evaluation
  -> actual-miss-only CM-21 repair, answer-free private clear
  -> blank CM-23 retry
  -> P3 atomic checkpoint
  -> PY010-P3 hard stop
```

No `CM-30`, `RP003-IE-01`, save-expedition, onward, later-route, or post-finalization action is reachable from this shell. Finalization records only `PY-010`; it does not alter the invariant world, bearing, note, save, score, authority, or subsequent campaign state.

## Implementation map

### Controller and checkpoint boundary

- `CalibrationMarginPythonFloor.js` owns the storage-agnostic P0-P3 state machine, strict intent validation, seven supported input modalities, native-field memory, evaluator dispatch, actual-miss-only repair, blank retry, recovery, and terminal hard stop.
- `CalibrationMarginPythonCheckpoint.js` owns the exact allowlisted P0-P3 schema and atomic persistence boundary. It stores only ordered finalized evidence, capped attempt/hint counts, allowlisted confidence, empty remediation tags, the exact milestone, and the exact finalized-skill prefix.
- A failed checkpoint write clears the unsafe candidate and deterministically reconstructs the last safe target rather than advancing.
- Malformed/private fields and AI-901 answer, note, bearing, save, world, authority, or later-route content are rejected at the checkpoint boundary.

### Existing normal-route composition

- `CalibrationMarginProtectedSurvey.js` now exposes the accepted all-three boundary as review-dispatchable and consumes one fresh explicit review token.
- `CalibrationMarginNormalEntry.js` composes survey and Python-floor state without weakening the protected normal-entry identity. A write-free return restores accepted all-three survey state and requires a new review action.
- `App.jsx` reads and writes only the dedicated `horizon-archive-rp003-python-checkpoint-v1` key through the exact sanitizer. P1, P2, and P3 resume directly into the appropriate safe group.

### Semantic and responsive UI

- `CalibrationMarginPythonFloor.jsx` mounts exactly one owner group at a time and uses native forms, labeled required controls, help/error associations, `aria-invalid`, explicit status semantics, and deterministic heading/field/action focus targets.
- `CalibrationMarginEntry.jsx` keeps the existing SC-04 presentation as the sole invariant world plate and mounts the Python folio as its layout sibling.
- `styles.css` provides the field-folio structure, a 3:2 wide composition, narrow source-order stacking, 44px minimum controls, forced-colors support, reduced-motion behavior, and no new media dependency.
- Old groups unmount at every replacement boundary. A single polite atomic status region remains within the active group.

## Evidence and route checks

The dedicated and connected tests cover:

- review rejection before accepted all-three state;
- fresh-token, exact-key, exact-owner, exact-action, and one-hit semantics;
- missing-field rejection before token consumption or evaluation;
- primary 8/8, retrieval 4/4, and transfer 8/8 strict thresholds;
- failure disclosure limited to actual failed IDs/dimensions without answers;
- private work clearing and blank retry construction;
- atomic checkpoint failure recovery and exact-prefix preservation;
- P1/P2/P3 restoration;
- all seven supported input modalities;
- one active semantic group, source order, labels, errors, focus, status, forced-color, reduced-motion, and responsive contracts;
- write-free survey return and fresh review re-entry;
- `PY010-P3` no-action hard stop and absence of later-route actions; and
- compatibility with connected survey, journey, calibration, custody, scene-return, and responsible-AI restoration tests.

## Validation record

| Gate | Result |
|---|---|
| Focused plus connected Node tests | PASS, `120/120`, 2.1 seconds |
| Full game suite | PASS, `736/736`, 7.87 seconds |
| Current readiness validator self-tests | PASS, `15/15` (`CUM-01`, `RP-002` through `RP-012`, `SIM-01` through `SIM-03`) |
| Production build | PASS, 173 modules, 10.70 seconds |
| JavaScript budget | PASS, 1,137,126 bytes; SHA-256 `6CF5F6F6EFD9B689D5DE3404C6A05AEAFD0A62E8DB40EA206326C38AFCF6C7C6` |
| CSS budget | PASS, 77,814 bytes; SHA-256 `0E099AABEC927D829AEFCF81CC7304A4A65771805BE0B9D74897EE5A1BA30BF3` |
| Served production preview | PASS, isolated `127.0.0.1:5174`, root/JS/CSS HTTP 200, served JS/CSS byte-identical to `dist`; owned preview stopped |
| Diff integrity | PASS, `git diff --check` |
| New media, font, audio, or network dependency | PASS, none |
| Inherited world art integrity | PASS, 2,626,795 bytes; SHA-256 `1D727694FA1DBB4311F9D7974A017D6165E66F10080114E5F81FE3CFD44EFF6D` |
| Protected user work | PASS, never inspected, altered, staged, or committed |

The normal-route E2E and live computed desktop/narrow visual review remain the Intelligence Officer's independent Tier 5 release gate. This report makes no live gated-state or final-art integration claim.

## Placeholder and downstream ownership ledger

The runtime contains truthful structural copy placeholders so mechanics can be tested without pre-empting Quartermaster ownership:

| Placeholder | Required downstream treatment |
|---|---|
| `COPY-CM20-*` | Final owner heading, instructions, field labels, required/help language, submit label |
| `COPY-CM21-PY-CHECK-*` | Final actual-miss-only primary repair language; no answer or solution leakage |
| `COPY-CM22-*` | Final retrieval owner heading, instructions, dimension labels/help, submit label |
| `COPY-CM21-RETRIEVAL-*` | Final actual-miss-only retrieval repair language |
| `COPY-CM23-*` | Final transfer owner heading, instructions, distinct-context labels/help, submit label |
| `COPY-CM21-TRANSFER-*` | Final actual-miss-only transfer repair language |
| `COPY-PY010-P3-STATUS` | Final no-authority, no-exam-guarantee, no-onward-action completion language |
| `COPY-LOCAL-REVIEW-RECOVERY` | Final write-free return and fresh-review recovery language |
| `COPY-NEGATIVE-AUTHORITY` | Confirm all player-facing claims remain offline, local, private, and non-authoritative |
| `ASSET-SC04-INHERITED-PLATE` | Preserve as inherited temporary atmosphere only; no claim of canonical SC-04 master integration |
| `STYLE-FIELD-FOLIO` | Image Specialist owns final polish within the locked layout and interaction contract |

Quartermaster must replace or explicitly accept every named copy placeholder, record source/provenance and negative-authority checks, and produce `09-CONTENT-ASSET-LEDGER.md`. Quartermaster must not change state transitions, thresholds, evaluated evidence, storage schema, owner mapping, route order, or the hard stop.

## Variances, limitations, and risk

- **Product/shell variance:** none.
- **Inherited visual limitation:** the existing City Threshold plate is still a temporary atmosphere plate. It is not canonical SC-04 master, crop, mask, or hotspot integration.
- **CSS integration risk:** the production CSS is under its locked ceiling by only 14 bytes. Quartermaster should avoid style growth; Image Specialist should refactor or remove equivalent CSS before adding polish.
- **Visual verification limitation:** source, semantic, responsive-rule, forced-color, and reduced-motion contracts pass deterministic tests, but final computed desktop/narrow appearance is deliberately left to independent release review.
- **Content limitation:** visible prose is provisional structural copy and raw failure identifiers. Quartermaster owns final player-readable language while preserving the answer-free evidence boundary.

No hidden-lore source, browser save, browser storage, or gated player state was inspected or mutated to obtain this result.

## Exact handoff

**Next agent:** Quartermaster.

Read this report, `05-PLAYABLE-SLICE-SHELL.md`, `06-CREATIVE-TREATMENT.md`, `07-EXPERIENCE-BLUEPRINT.md`, the live shell, and the named test contracts. Complete the copy/provenance tranche only:

1. replace or accept every named `COPY-*` placeholder with final concise player language;
2. preserve actual-miss-only, answer-free repair and blank retry;
3. preserve local/private/offline/no-authority/no-exam-guarantee language;
4. inventory the inherited plate accurately without claiming final visual integration;
5. add no mechanics, media, route, checkpoint, world response, or later-state affordance;
6. respect the 14-byte CSS headroom unless an equivalent refactor creates space;
7. run the content, boundary, connected route, full-suite, and production-build checks appropriate to the tranche; and
8. issue `09-CONTENT-ASSET-LEDGER.md` with a disposition of `CONTENT READY`, `REVISE`, or `HOLD`.

Commit, push, and synchronization evidence for this Combat Engineer gate is finalized below before handoff.

## Commit and synchronization

| Field | Value |
|---|---|
| Dedicated stage commit | This report and the functional shell are contained in one dedicated Combat Engineer commit |
| Push target | `origin/main` |
| Synchronization | Final commit pushed to `origin/main`; `HEAD == origin/main` verified after push |
