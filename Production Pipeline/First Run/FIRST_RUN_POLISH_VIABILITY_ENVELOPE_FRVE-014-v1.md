# First Run Polish Viability Envelope

Envelope ID: `FRVE-014-v1`

Work Order: `FRWO-014-v1`

Disposition: **POLISH VIABILITY READY**

Mode: **DESIGN**

This envelope proves that the bounded Host 14 Work Order is technically and
economically viable. It authorizes no generation call, source inspection,
import, product edit, maturity movement, or Mission work. Current, best, and
committed product remain
`FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e`.

## Official-source evidence

The unavailable `foundry-azure-source-priority` skill was handled by its
mandated fallback: official Microsoft Learn sources were checked first and
exclusively. No third-party source was used.

- The current [AI-901 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901)
  says its skills are measured as of April 15, 2026 and retains the current
  concept plus Microsoft Foundry implementation objectives represented by the
  released fifteen-row Objective Ledger. This envelope changes no objective,
  threshold, or answer.
- The [Microsoft Foundry documentation hub](https://learn.microsoft.com/en-us/azure/foundry/)
  continues to distinguish models, agents, tools, evaluation, observability,
  and application construction.
- The [Foundry SDKs and endpoints overview](https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview)
  distinguishes the project endpoint, Agent Framework, and OpenAI-compatible
  endpoint, and emphasizes identity/RBAC. The game therefore must not imply
  that a local simulation has exercised a service, endpoint, credential, or
  authority.
- The [Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)
  describes agents as model/instruction/tool systems able to use data and
  actions. Released lesson boundaries that distinguish explanation from real
  tool authority remain accurate.
- The [Azure Content Understanding overview](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview)
  retains multimodal input, analyzer-defined structured output, grounding, and
  confidence concepts. The released source-backed extraction/remediation
  language remains supportable and unchanged.

These sources support the learning vocabulary only. The released game remains
offline, local, no-authority, and no-exam-guarantee. The production-only image
transport described below is not a learner action and never enters runtime,
save, evidence, or curriculum state.

## Exact answers to the twelve Science questions

### 1. Generator, transport, request, response, and ambiguity

The only lawful generator is:

```yaml
generator:
  interpreter: Python 3.12.10
  sdk: openai 3.0.0
  script: C:\Users\marti\.codex\skills\.system\imagegen\scripts\image_gen.py
  script_bytes: 35266
  script_sha256: c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05
  subcommand: generate
  model: gpt-image-2
  endpoint_reported_by_dry_run: /v1/images/generations
  transport_primitive: openai.OpenAI().images.generate
  concurrency: 1
  outputs_per_call: 1
  forbidden: [batch, force, retry_wrapper, reference, edit, variation, augmentation]
```

Every call uses exactly:

```text
python <script> generate --prompt-file <exact prompt> --model gpt-image-2
  --n 1 --size 3840x2160 --quality high --background opaque
  --output-format png --out <exact absent ordinal path> --no-augment
```

Request fields are exactly `model`, `prompt`, `n`, `size`, `quality`,
`background`, and `output_format`; null fields are stripped. `OPENAI_API_KEY`
is environment-only: only present/absent may be observed; its value may not be
printed, copied, persisted, logged, or placed in a process argument. The
effective response must contain exactly one nonempty `data[0].b64_json`; the
CLI base64-decodes it directly to the exact local output. No URL, revised
prompt, opaque response object, or service metadata is accepted as product
evidence.

The dry run passed for H14-1 with the exact seven fields and exact absent
ordinal path, created no scratch root, and spent no call. The service model is
an external mutable capability; script hash, interpreter, SDK version, request,
output, and observed response shape are the frozen local identity.

An ordinal is consumed when its process launches. Timeout, broken transport,
nonzero exit, loss of stdout/stderr, uncertain process ownership, or output
appearance after an apparently failed call is possible partial completion and
must be reconciled against that ordinal path before any further call. An
existing exact output is the same attempt, never permission to retry. Unknown
process or file identity is `STOP_SAFETY`; absent output after proven process
termination is a consumed transport failure requiring diagnosis.

### 2. Prompt identities and graduated portfolio

The initial portfolio is immutable ASCII/LF text. `read_text().strip()` is the
sent prompt transform; the source-file hash below includes its single final LF.

| Attempt | Bytes | SHA-256 | Strategy |
|---|---:|---|---|
| H14-1 | 1943 | `27ab9adc52fee27a12eb1f11c17975387e58a932be9236db9805b52f705577a3` | balanced complete physical sentence |
| H14-2 | 1784 | `2c1da8be16bb5ae30a5db5a9f103b27580c43aae9a7d5092014d3db60d4c5429` | substrate-first material separation |
| H14-3 | 1664 | `3e9a31d26ce0c5a95b95ddae67a43e94b5865cfdfb08f0a63011270f64386353` | dry access plus waterline continuity |
| H14-4 | 1772 | `36ecfcc1feb9d01a47c81adb918d9a29664015f9d1eeab464196d51e2e17e032` | material-history causality |
| H14-5 | 1655 | `59bc8c37367ba35731da9b84ebf406d801ea8649d587fdcfc36c2f4bea8d7fa4` | upward service-seam continuation |
| H14-6 | 1634 | `c77abf60b96e6f87f45009894747a7f90b510cf4dc807df16ab34df1f9bd3c1a` | anti-writing irregular deposition |
| H14-7 | 1734 | `9f9c306879f81d0a7c0cc22dbb8d4600fe95633d96ed646cc5ccdc78f97fadfa` | central-core responsive resilience |
| H14-8 | 1751 | `59f167e2f0abe8612212d0b11e54df9f8541dbc984903135754e649347047d55` | restrained documentary fallback |

Exact files are `HOST14_GEN_PROMPT_H14-1.txt` through
`HOST14_GEN_PROMPT_H14-8.txt` beside this envelope. Every prompt requires one
broad reachable dry inclined face; one irregular high-water/deposition band;
foundation, later repair, and current service skin crossed by that band;
several upward service seams; same-basin waterline context; first-person
physical causality; and the complete Work Order negative list. All prompts
forbid text, marks, numbers, objective grids, UI, answer encoding, people,
human ergonomics, response, reward, access, and adjacent-host substitution.

H14-9..H14-32 do not yet have prompt bytes. Mission may freeze a new exact
prompt file only after a recorded failure diagnosis identifies one measurable
defect and a falsifiable strategy change. Merely paraphrasing an initial prompt
does not earn or define a call.

### 3. Resource, media, PBA, runtime, and time budgets

```yaml
source_and_transport:
  selected_png_bytes: 1..30000000
  accepted_media_after_import: exactly_25_files_and_at_most_184163567_bytes
  base64_characters: 1..40000000
  response_json_envelope_bytes: <=40100000
  decoded_pixel_working_set_rgb: <=24883200
  decoded_pixel_working_set_rgba: <=33177600
  owned_temp_bytes_before_selection: <=30000000
  owned_transient_bytes_during_atomic_import: <=60000000
production_candidate:
  aggregate_javascript_bytes: <=1785000
  aggregate_css_bytes: <=122000
  production_modules: <=236
  source_maps: 0
  emitted_runtime_media: exactly_25_files_and_selected_accepted_hash_set
  emitted_runtime_requests: local_only_exactly_one_added_selected_raster_and_no_remote_request
time_and_runtime:
  one_generation_process_wall_seconds: <=300
  focused_suite_seconds: <=30
  related_suite_seconds: <=60
  cold_full_suite_seconds: <=90
  production_or_fixture_build_seconds_each: <=60
  complete_e2e_seconds: <=180
  source_activation_after_decode_ms: <=1500
  sampled_main_thread_task_ms: <=50
  runtime_errors_or_unhandled_rejections: 0
```

All emitted chunks and media count. The accepted raster is not downscaled,
re-encoded, optimized, or duplicated. The TD-012 fixture remains 57 modules
unless a shell-frozen fixture import changes it; production must remain within
236. Source-map output, service worker, network-fetched runtime payload,
credential, endpoint, SDK, Python/WASM runtime, new dependency, audio, video,
or font is a hard failure. Quality and final proof are not traded for a cap.

### 4. Temp identity, materialization, cleanup, and ambiguity

The only scratch root is initially absent:

```text
C:\Users\marti\AppData\Local\Temp\horizon-archive-host14-e3223c20-b7b5-410d-b335-3c15c576cfba
```

It may contain only `H14-1.png` through `H14-32.png`, one at a time. Before
creation, resolve the parent and prove containment; create the exact root once
as an ordinary, nonreparse directory; record its handle identity; and prove
every ordinal path absent. No glob, recursive delete, inherited residual, or
alternate root is permitted.

The CLI has a preexistence check but does not provide OS-level exclusive
creation for its final write. Therefore calls are serial, paths are fresh, and
after process completion Quartermaster must open the exact output with no write
sharing, prove final path, ordinary-file type, link count one, nonreparse state,
stable volume/file identity and length on the same handle, then hash and strict
decode that same handle. Any mismatch, replacement, race, or inability to hold
identity is `STOP_SAFETY`.

Workspace import is byte-for-byte and atomic no-replace: create the exact
product-directory sibling `.partial` with exclusive `CreateNew`, stream from
the held source while hashing, flush file and directory, verify byte count and
SHA/decode, then rename with no overwrite to the exact final path. Reopen and
prove the final file identity and byte equality before provenance is final.

For rejection, record only ordinal, bytes/SHA, boolean gates, measurements,
and reason; close all handles; reopen and reprove the exact recorded file ID;
delete that one file; prove absence. After selection, cancellation, or stop,
delete only exact owned ordinal files by the same proof, then remove the exact
root nonrecursively only if empty and its directory identity still matches.
Partial product files use the same identity deletion. Failure to account for
every launched ordinal, process, file, handle, path, port, or partial is a hard
cleanup failure. Unrelated state is never enumerated or touched.

### 5. Physical measurements, review ownership, adversaries, and gaming

Quartermaster owns private source review and measurement after an authorized
call. Intelligence independently holds out the selected exact byte. Neither
prompt assertions nor caller-authored rectangles are sufficient.

The registry must contain source-pixel geometry for: complete relation bounds;
dry approach; foundation, repair, and service-skin bounds; an irregular
deposition-band polyline/bounds crossing all three; continuous waterline
context; at least three distinct service-seam paths with upward direction;
semantic target; physical target center; label anchor; and protected bounds
for predecessor, next generic boundary, live water, return route, suspended
landmark, Crown, and Witness. Each mandatory region must have independently
verified visible-pixel support and nonzero area. Substrate classification must
use texture/joint/erosion/repair evidence, not color alone.

Deterministic gates prove cross/intersection relationships, dry separation
from live water, seam count/direction, one-face containment, target
distinctness, and exclusion from protected bounds. Mutation tests must remove
or displace each mandatory geometry item in turn and force failure; substituting
one rectangle for multiple histories, an arbitrary center band, a generic
kiosk, or relabelled launcher must fail. OCR/text-like pattern detection is a
hard reject when it finds readable marks and an advisory requiring private
review otherwise. Private review also rejects UI/scorecard/objective-grid
appearance, answer leakage, human ergonomics, body/ship, response, completion,
access, or world change.

Gaming risks are fluent prompt claims, invented rectangles, overlapping
one-box aliases, center-crop omission, color-only histories, decorative seams
that do not continue, regular bands that encode rows, visible-fixture
special-casing, test-count inflation, and presentation quality masking a hard
failure. Independent pixels, derived geometry, negative mutations, normal plus
fixture builds, and held-out review are the countermeasures.

### 6. Six-layout and accessibility thresholds

All evidence derives from actual source dimensions/rectangles and the released
`deriveResponsiveEvidence` cover projection using `object-fit: cover` and
`50% 50%` positioning at exactly:

```text
1920x1080, 1366x768, 390x844, 768x900 (effective 200%), 320x180, 320x240
```

Every layout must retain at least `0.95` of the complete relation; show the
center of every required physical item; contain the physical center inside the
semantic target; contain a target at least `44x44` CSS px; keep label, focus,
and target within the world frame; and produce zero intersection with every
protected rectangle. Runtime outer inset is at least 3 CSS px, text inset at
least 5 CSS px, visible focus outline at least 2 CSS px, and label/focus
separation at least 8 CSS px. `scrollWidth == clientWidth`; desktop/laptop
cannot require outer vertical scrolling to act; narrow and effective-200% may
use natural vertical document flow without hiding the action.

Keyboard, pointer, touch, and switch-like activation converge on one semantic
button with stable accessible name and state. Forced colors must retain button,
label, focus, state, and non-image fallback. Reduced motion removes animation
and forced timing without changing state. No meaning may depend on color,
sound, motion, spatial direction alone, or visual texture; non-sensory copy
names only the physical relationship and uncertainty, never an answer.

Real Microsoft Edge must corroborate all six layouts plus forced colors and
reduced motion after deterministic projection passes. Sensitivity must be
demonstrated by at least one crop/shift mutation that lowers relation retention
by more than `.05`, hides an essential center, shrinks the target below 44,
or creates protected overlap and is rejected. Caller attestations or arbitrary
source bands cannot override derived failure.

### 7. Null-first source and safe generic fallback law

`waterlineLedger.js` must export one immutable null-first registry entry whose
default is disabled and has no source path, attempt, bytes, SHA, provenance,
measurements, layouts, alt, or final copy. Lawful enablement is one atomic
predicate requiring exact final path and provenance identity; `H14-[1-32]`;
bytes/SHA; ordinary opaque RGB 3840x2160 PNG; strict decode; all physical
measurements; all six derived layout records; exact semantic copy; and current
schema version.

The released generic Objective Ledger and Remediation Planner launchers remain
visible and functional unless that complete predicate is true and the raster
has decoded successfully in the current runtime. Only then may the native Host
14 relationship atomically replace exactly those two launchers. Native and
generic actions are mutually exclusive in a single render decision; no delayed
second pass, duplicate focus target, or flicker is allowed.

Absent, disabled, partial, malformed, stale-schema, wrong-path, wrong-attempt,
byte/hash/provenance mismatch, decode error, missing measurement, or invalid
layout restores/retains the released generic launchers and suppresses native
presentation. Invalid persisted host/source identity is sanitized away before
render. This deliberately strengthens the prior host pattern: a broken source
may never strand the functional rail.

### 8. State, evidence, adjacency, save, privacy, and functional proof

Deterministic tests must cover null/disabled/malformed/stale/mismatched/decode-
invalid source; mutual exclusion and no flicker; Host 13 strict mastery as sole
entry; native LOOK write-free physical copy; TALK complete nonresponse and no
write; USE first incomplete `L06-01`, then only after strict mastery first
incomplete `L06-02`; exact primary, actual-gap Teacher remediation, fresh
transfer, closed-note explanation, stop/escalate, and read-only completion;
unchanged generic Host 15; write-free earlier return; and unchanged world.

Close/Escape must restore focus to the native USE control when lawful.
Reopening in-session restores the exact transient form. Reload and sanctioned
resume reconstruct only the first valid incomplete boundary from released
allowlisted evidence. Every initial, transfer, reload, close/reopen, route
return, remediation, and completion entry must travel through Host 14 USE and
the native hotspot; the E2E harness may not call a hidden test shortcut.

Released `L06-01` remains 15/15 primary plus 15/15 fresh transfer plus its
four-part explanation; `L06-02` remains 12/12 primary plus 12/12 transfer,
four-part explanation, and complete official-source remediation route.
Confidence/averages never bypass a failed dimension. Strict sanitizers reject
forged mastery. Durable data remains limited to released status/evidence
pointers and route identifiers. Answers, notes, source content, prompts,
candidates, credentials, endpoints, payloads, responses, external requests,
focus/pointer/timing, generation state, and review state never persist.

Focused and related tests must also prove Demo Tour zero-credit isolation,
offline/no-authority/no-exam-guarantee, save allowlists and fail-closed invalid
state, both RP-012 outcomes with equal dignity, and `successor=null`.
Production and TD-012 fixture bundles must be compared for forbidden
`location`, path, port, fixture-label, or environment conditional behavior;
normal and fixture journeys must share the same runtime law.

### 9. Cheap-to-expensive validation cascade and reserve

Run each rung once per candidate unless its inputs changed. A failure stops at
the earliest owner; do not spend a more expensive rung to compensate.

1. Exact `git diff --check`, protected-path diff, prompt hashes, generator
   hash/version/key-presence, scratch absence, and call-ledger preflight.
2. CLI `--dry-run` for the exact next ordinal; source identity, same-handle
   byte/SHA/strict PNG decode; physical measurement registry; cleanup proof.
3. From `horizon-archive-game`, focused `node --test` over
   `test/waterlineLedger.test.js`,
   `test/waterlineLedgerResponsive.browser.mjs`,
   `test/responsiveImageProjection.test.js`,
   `test/objectiveLedgerExercise.test.js`, and
   `test/remediationPlannerExercise.test.js`.
4. Related `node --test` over `test/tidalPatternLoom.test.js`,
   `test/tidalPatternLoomResponsive.browser.mjs`, `test/terminalFocus.test.js`,
   `test/demoTour.test.js`, all current save/privacy/resume tests selected by
   the shell, and TD-012 normal/fixture/protected-journey identity tests.
5. Cold full `node --test` from `horizon-archive-game`.
6. From repository root, invoke exactly the 40 sorted
   `curriculum/**/validate*.py --self-test` entries frozen by
   `FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-001-v1.json`; count and order must
   remain 40/40.
7. `npm run build`; record modules from Vite output; run the Mission-frozen
   deterministic First Run PBA command that aggregates every emitted JS/CSS/
   map/media file, compares the 25 hashes to the accepted-media manifest plus
   selected source, and enforces every cap in question 3; then
   `npm run build:td012-fixture`; then rebuild production so `dist` again
   identifies the product candidate. `scripts/validate_td012_budget.py` is not
   this command: its retired TD-012 media authority cannot validate the current
   First Run inventory and must remain unmodified and unused for this overlay.
8. Start only owned previews at `127.0.0.1:4173` and `127.0.0.1:4184`; prove
   exact asset request count/hash/bytes, maps zero, remote requests zero, PBA,
   media manifest, source registry, and normal/fixture code-law parity.
9. Run source-derived six-layout and adversarial mutations, then private source
   review and real Edge at all six layouts, forced colors, reduced motion,
   keyboard/pointer/touch/switch-like parity, longest copy, and sampled tasks.
10. Start only the owned product server at `127.0.0.1:5174`; run
    `node playtest/e2e-playthrough.mjs` exactly once with a fresh external exact
    QA temp root, through clean start, Host 13 -> Host 14 -> unchanged Host 15,
    both owned lessons, returns/reloads/resume, and both Measured Horizon
    outcomes. Repository QA is not read or written.
11. Prove zero runtime errors, exact PID/port shutdown, exact external QA-temp
    cleanup, scratch/product-partial absence, no unaccounted ordinal, candidate
    commit identity, and clean intended-file synchronization.
12. Intelligence independently reruns the frozen exact candidate holdout and
    either releases it or returns the earliest typed variance.

Generation reserves zero calls for proof and may never consume proof capacity.
Before the first call, the shell must reserve enough wall time, clean ports,
disk, and ownership for one complete rungs 1-11 cascade, one rollback, and one
fresh Intelligence rung 12. If that capacity is unavailable, `STOP_BUDGET`
precedes generation.

### 10. Call economics, improvement, deadband, and stop

The eight-call initial tranche is sufficient because its eight prompt families
isolate composition, substrate, access/waterline, history, seams, anti-writing,
responsive, and restraint failures. Calls are sequential in an append-only
ledger `H14-1..H14-32`; the ordinal is consumed at launch, including transport
failure or ambiguous completion. The first complete PASS stops immediately.

A candidate becomes the media-search best only after technical identity passes
and its measurements are independently supportable. Meaningful improvement is
lexicographic and regression-free:

1. fewer hard physical rejection codes;
2. more complete mandatory physical groups among face/access, three histories,
   band crossings, waterline, seams, distinct target, anti-answer exclusions;
3. more essential centers across six layouts, lower protected-overlap count,
   or higher minimum relation retention; then
4. private-review presentation preference only after 1-3 tie and all hard gates
   pass.

Noise/deadband is minimum-retention change below `.02`, target-size change
below `2` CSS px, unchanged essential-center count, unchanged protected-overlap
count, and unchanged independent hard classification. Soft preference inside
that band is not an earned improvement.

Two failures with the same hard codes and all measurements inside the deadband
force a fresh information action and diagnosis before another call. Three
verified non-improving attempts in one strategy family force `REPLAN`,
`RETURN_TO_OWNER`, or typed stop; an equivalent fourth is forbidden. A family
change must alter the causal representation or composition and record a new
falsifiable measurement prediction, not only synonyms.

At the eight-call boundary, each four-call extension is earned only if at
least one candidate improved the best since the prior tranche, the next four
contain a novel diagnosed strategy, no hard boundary or cleanup gate failed,
and full proof/rollback capacity remains. Maximum six extensions preserves the
32-call ceiling. Stop `LOW_MARGINAL_VALUE` when the last four authorized calls
do not improve best and no next strategy targets a new measurable failure, or
when expected probability of closing every remaining hard dimension is not
meaningfully positive relative to cost and regression exposure.

### 11. Exact rollback

Rollback never uses broad reset or deletion. Preserve the exact released
product as best throughout production. Before import, close/identify/delete
only the rejected ordinal and prove scratch-root absence. After import but
before release, revert only the bounded Host 14 product commits or apply the
shell-frozen inverse patch: remove the exact new raster/provenance and any
owned partial by file-ID proof; restore the null registry; remove the bounded
Host 14 module/tests/styles/App/E2E/count changes; and restore both released
generic launchers.

Rollback acceptance is exact product behavior and inventory equivalent to
`FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e`: accepted media exactly
`24 / 154,163,567`; emitted runtime assets exactly 27 with the released hashes;
JS `1,750,718`; CSS `121,433`; modules `233`; maps `0`; focused/full/40
validators and production/fixture/served identities pass; generic lesson path
works; temp, partials, owned processes, and owned ports are absent. Planning
history remains versioned. Rejection, regression, cancellation, holdout
failure, or failed cleanup cannot advance release or maturity.

### 12. Honest unavailable evidence

No claim is made from repository QA captures; Martin's browser/profile/save;
hidden lore; opaque residual roots; archived authorities; untracked PDFs or
training files; residual/generated media; or any human assistive-technology
study. None was inspected. Science also has no candidate pixels, independent
physical review, decoded source measurements, real-browser candidate evidence,
AT-user findings, call reliability sample, integrated performance result,
future provenance, or release holdout. These remain explicit unknowns and must
be gathered only by the named post-shell owners. Automated accessibility and
input checks are corroboration, not a claim of human AT usability.

## State, evidence, privacy, offline, and recovery contract

The source registry and presentation state are code/configuration, never learner
evidence. The existing L06 evaluators and sanitizers are reused unchanged.
Host 14 adds no objective, threshold, score, save key, answer, remediation
content, branch, reward, access, identity, authority, world response, ending,
or successor. Save stays atomic, allowlisted, private-free, replay-free, and
fail-closed. Invalid state falls back to the first lawful incomplete owned
lesson and the functional generic launcher path. Offline runtime makes no
service call and stores no endpoint, credential, payload, response, prompt,
candidate, source review, or generation state.

## Reused systems, bounded new systems, and Mission freedoms

Reused unchanged: `objectiveLedgerExercise.js`,
`remediationPlannerExercise.js`, their L06-01/L06-02 contracts and validators,
released generic launchers, save sanitizers, Demo Tour isolation, route/ending
state, `deriveResponsiveEvidence`, Vite production/TD-012 fixture machinery,
the 40-validator manifest, accepted-media manifest principles, and current
focus/semantic button primitives.

Bounded new systems after a complete shell: one null-first
`waterlineLedger.js` registry/state module; one source-derived relation record;
one native LOOK/TALK/USE relationship; one atomic generic/native render guard;
focused responsive/functional tests; bounded App/style/E2E integration; one
accepted raster and provenance only after selection; exact served-count
updates; and versioned stage evidence. No new dependency or general framework.

Mission may choose exact function/constant names, component boundaries, CSS
selectors, test-case names, and the order of the already frozen cheap checks.
Mission must freeze every permitted file, exact prompt/call command and cwd,
attempt ledger schema, source registry schema, source-measurement format,
same-handle helper/commands, source-copy/provenance schema, PBA overlay command,
server launch/PID/port/QA-temp commands, selected/rejected cleanup commands,
rollback inverse, stage ownership, and final candidate/commit protocol. Mission
may narrow authority or budgets but may not weaken this envelope, add a call,
create H14-9+, select a source, start production, or alter current/best/
committed product.

## Typed stops

- `STOP_SUCCESS`: first exact candidate passes every hard gate and Intelligence
  releases it; stop all calls and work on this encounter.
- `ROLLBACK`: hard regression or candidate worse than best; restore exact
  FRAB-013-v1 behavior/inventory and cleanup.
- `REPLAN`: falsified diagnosis, insensitive verifier, layout ceiling, or three
  same-family non-improving attempts.
- `RETURN_TO_OWNER`: continuity, scope, lesson, source, shell, implementation,
  or release conflict returns to its earliest owner.
- `STOP_BLOCKED`: tool, source, permission, environment, or verifier ceiling;
  return best state and cheapest unlock.
- `STOP_BUDGET`: authorized tranche, call, time, disk, proof, rollback, or
  authority capacity is exhausted.
- `STOP_LOW_MARGINAL_VALUE`: next tranche lacks meaningful expected player
  value under the rule in question 10.
- `STOP_SAFETY`: secret, protected path, file/process identity, residual, or
  destructive ambiguity cannot be reconciled safely.
- `WAIT`, `ESCALATE`, `STOP_PARTIAL`, and `STOP_CANCELLED` retain
  `FRCV-001-v1` meaning and schedule no call.

## Science validation and handoff

- All twelve Work Order questions are answered.
- Exact H14-1..H14-8 prompt bytes are ASCII, LF-only, final-LF, and hashed.
- Exact CLI dry-run passed and proved the scratch root remained absent.
- Generator script identity, Python/SDK version, environment-key presence,
  current release baselines, L06 contracts, runtime/fallback behavior, tests,
  builds, fixture, budgets, and official sources were checked without a call.
- Generation/media/API/product/runtime actions: `0`.
- Forbidden evidence was neither inspected nor changed.

```yaml
convergence_handoff:
  mode: DESIGN
  state_version_read: FRLS-OPS-001-v1
  state_version_written: FRLS-SCI-001-v1
  current_ref: FRVE-014-v1 / FRLS-SCI-001-v1
  best_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  committed_ref: FRAB-013-v1@357ad6dc4184b74150173504e86e366c761cdc0e
  disposition: POLISH_VIABILITY_READY
  action_kind: information
  predicted_effect: >-
    Mission can freeze one executable shell whose bounded effects are
    measurable, reversible, economical, and independently verifiable.
  verifier_vector:
    official_source_currency: PASS_MICROSOFT_LEARN_ONLY
    generator_and_transport: PASS_DRY_RUN_NO_CALL
    prompt_initial_portfolio: PASS_8_EXACT_IDENTITIES
    budgets_and_reserve: PASS_FROZEN
    temp_identity_and_cleanup: PASS_CONTRACT
    physical_and_anti_gaming: PASS_CONTRACT_CANDIDATE_UNKNOWN
    six_layout_and_accessibility: PASS_CONTRACT_CANDIDATE_UNKNOWN
    null_first_generic_fallback: PASS_CONTRACT_NOT_IMPLEMENTED
    learning_save_privacy_offline: PASS_UNCHANGED_CONTRACT
    rollback_and_stops: PASS_FROZEN
    future_candidate_and_release: NOT_STARTED
  delta_vs_best: zero_product_zero_maturity_zero_media_positive_information
  budget_used:
    generation_calls: 0
    product_effect_actions: 0
    browser_or_e2e: 0
    cli_dry_runs: 1
  budget_remaining:
    generation_calls: 32
    initial_tranche_after_shell: 8
    extensions: 6_increments_of_4_earned_only
    final_verification_reserve: PROTECTED
  remaining_uncertainty:
    - future generated source existence and service transport result
    - candidate pixel-level physical credibility and private review
    - candidate-derived layout/accessibility/browser/performance evidence
    - implementation and exact candidate release holdout
    - human assistive-technology usability study
  decision: GATHER_EVIDENCE
  next_owner: mission_captain
```

Exact next owner: one Mission Captain. Read `FRPB-001-v12`, `FRCL-014-v1`,
`FRWO-014-v1`, this envelope, `FRLS-SCI-001-v1`, the exact released runtime and
test/build/fixture boundary, all eight prompt files, and generator/cleanup
primitives. Issue one versioned `FIRST RUN SHELL READY`, `REVISE`, or `HOLD`
that narrows every executable identity listed under Mission freedoms. Do not
spend a call, inspect or reveal media, change product/runtime/media, advance
maturity, or begin Reconnaissance.
