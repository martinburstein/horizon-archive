# TD-011 Functional Build Report - Unborrowed Reach

## Document control

| Field | Value |
|---|---|
| Stage | Combat Engineer |
| Agent ID | `combat_engineer` |
| Shell | `SS-RP011-UNBORROWED-REACH-v1` |
| Treatment | `CT-RP011-UNBORROWED-LAMINAE-v1` |
| Blueprint | `XB-RP011-UNBORROWED-REACH-v1` |
| Address | `RP-011 / SC-12 / UR-00-UR-30` |
| Route | sole `TD011-RTA-001` |
| Starting authority | Tactical commit `6d81309` under synchronized Mission commit `1aed098` |
| Disposition | **`FUNCTIONAL BUILD READY`** |

## Functional result

The normal product now implements the complete released-adjacent
`CF-30 / SC-11 -> UR-00 -> UR-10 -> UR-20 -> UR-30 / SC-12` graph without
importing the protected RP-011 reference.

- Entry requires the exact restored normal Counterfield state and canonical
  `rp010.counterfield-save.v1` bytes, exact Pilot route intent, one of seven
  modalities, and one fresh token. Unknown option keys, protected/private
  material, Tour, stale tokens, malformed records, and predecessor changes
  fail closed at CF-30.
- UR-10 exposes six equal physical observations. All `720` orders converge;
  revisits are idempotent and grant no learning evidence.
- UR-20 keeps PY-019 primary, trace, and blank transfer independent from
  single-agent surface primary, retrieval, and transfer and from both
  explanations. Missing work preserves a future token; scored misses clear
  private work and expose only public failed IDs or allowlisted misconception
  tags before a blank retry.
- The fresh checkpoint is conjunctive. Only after six observations, eight
  ordered evidence records, explicit review, and atomic finalization may
  `rp011_fresh_finalized` exist. RP-007 through RP-010 remain hidden and
  retained.
- All four prior scopes reopen individually in any of `24` orders with zero
  learning credit. The exact six-method/twelve-null-limit reconciliation is
  separate from all five records and permits only the atomic
  `rp011_reconciliation_saved` checkpoint.
- Persistence uses the frozen ordered 15-key checksum schema, canonical
  read-back, exact Counterfield bytes, chained predecessor proof, verified
  rollback or HOLD, and replay-free restore. Adapter methods remain callable
  under `Object.freeze`; thrown predecessor proofs fail closed.
- UR-30 exposes only exact Counterfield or City Threshold returns and inert
  LOOK with null destination, no route, no persistence, no evidence, and no
  successor. A returned controller is closed against later dispatch.

## Product surface and accessibility

`UnborrowedReach.jsx` renders one product main, one atomic polite status,
exact owner text, native labelled controls, deterministic heading/control
focus, equal observation buttons, private-safe learning forms, individual
scope reopening, single-column reconciliation, explicit confirmations and
recovery, and the two exact returns.

The SC-12 world is deterministic CSS only: oblique mineral laminae remain
noninteractive and invariant. No runtime image role, imported media, audio,
board, image generation/edit, or reveal exists. The public contract declares
`selectedImageRoles: []`, `renderingMedium: "css"`, and
`structuralPlaceholdersOnly: false`.

Live review passed `1920x1080`, `1366x768`, `390x844`, and effective-200
`384x450` browser viewports with one product main/status, no horizontal
overflow, exact focus, and minimum button height `44px`. Forced-color and
reduced-motion rules preserve boundaries; no sensory attribute carries
meaning alone.

## Closed 80-scenario fixture

The isolated `td011-unborrowed-reach-v1` fixture parses to exactly the 80
shell-authorized unique IDs in exact order. It imports only the public normal
component and controller contract, accepts no arbitrary object, URL,
fragment, storage, file, network, cookie, or protected input, and is absent
from production.

An in-app browser selected all 80 scenarios and compared visible
`[data-active-owner]` text plus actual `document.activeElement.id` with each
declared shell row: **`80/80 PASS`**, zero differences. Static rendering
independently proved every row contains the exact owner, a real declared focus
target, one main, and one status. Production and fixture root/deep fallback,
JS, CSS, and all media served byte-identically from fresh builds.

## Validation

| Validation | Result |
|---|---|
| Focused normal + fixture | `9/9 PASS` |
| Protected RP-011 reference isolation | `15/15 PASS` after fresh build |
| Observation/reopen convergence | `720/720` and `24/24 PASS` |
| Rendered owner/actual-focus contracts | `80/80 PASS` live browser; zero differences |
| Four live layouts | `4/4 PASS`; one main/status, no horizontal overflow, targets `>=44px` |
| Full product suite | `928/928 PASS`; zero failures/skips; `15.507s` Node duration |
| Curriculum validator self-tests | `40/40 PASS`; RP-011 included |
| Production build | PASS; `212` modules |
| Fixture build | PASS; `53` modules |
| Served identity | PASS; `19` production and `2` fixture assets byte-exact |
| Patch/JSON/privacy/protected/fixture/later scans | PASS |

## PBA-TD011-v1 release identity

| Measure | Candidate | Cap | Result |
|---|---:|---:|---|
| Modules | `212` | `219` | PASS |
| Aggregate JavaScript | `1,616,670` bytes | `1,643,686` | PASS |
| JavaScript SHA-256 | `84F02CF02FD0778010458059036D9C0E3A89E1A494F0C355C70A3B89131B7059` | identity evidence | recorded |
| Aggregate CSS | `112,614` bytes | `114,010` | PASS |
| CSS SHA-256 | `578A1C76A8D35B90D067A56E2A7C6869024BC41C329360C4F1D57747ED08ADB4` | identity evidence | recorded |
| Runtime media | exact `17 / 37,410,731` bytes | exact accepted set | PASS |
| New runtime media | `0 / 0` bytes | `0 / 0` | PASS |

`PBA-TD011-v1 / release / PASS`. No new image, audio, video, font,
source-map, Python/WASM runtime, or network payload was added.

## As-built files

- `horizon-archive-game/src/UnborrowedReachNormal.js`
- `horizon-archive-game/src/UnborrowedReach.jsx`
- `horizon-archive-game/src/CalibrationMarginNormalEntry.js`
- `horizon-archive-game/src/App.jsx`
- `horizon-archive-game/src/styles.css`
- `horizon-archive-game/test/unborrowedReachNormal.test.js`
- `horizon-archive-game/test/unborrowedReachFixture.test.js`
- `horizon-archive-game/test/unborrowedReachProtectedJourney.test.js`
- `horizon-archive-game/review-fixtures/td011-unborrowed-reach/`
- `horizon-archive-game/package.json`

## Quartermaster handoff

- **Stage / agent:** Quartermaster / `quartermaster`
- **Starting authority:** this exact functional candidate, shell 05,
  treatment 06, blueprint 07, `PBA-TD011-v1`, and the dedicated Combat commit
- **Objective:** audit and polish non-frozen player-facing copy, accessible
  alternatives, control organization, code-native presentation, asset truth,
  and the no-media ledger without changing mechanics or frozen contracts
- **Must preserve:** route, graph, owners/groups/focus IDs, six observations,
  learning/evidence, 15-key/two-checkpoint persistence, privacy, rollback,
  restore, returns/LOOK, 80-row fixture, exact accepted media, and UR-30 hard
  stop
- **Image boundary:** Image Specialist remains disabled; do not generate,
  edit, select, import, board, or reveal media
- **Required output:** `09-CONTENT-ASSET-LEDGER.md`
- **Required disposition:** `CONTENT COMPLETE`, `REVISE`, or `HOLD`
- **Next recipient on pass:** Intelligence Officer directly

**Disposition: `FUNCTIONAL BUILD READY`.**
