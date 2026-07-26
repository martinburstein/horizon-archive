# Horizon Archive - Skyscraper Workflow Handoff

Last updated: **2026-07-26**

## Start here

Read `AGENTS.md`, this file, `SKYSCRAPER_AGENT_WORKFLOW.md`, and
`Skyscraper Agent Profiles/README.md` in full.

TD-004 is active on a validated sequential return chain. Do not restart a
completed stage, repeat an earlier HOLD, or deploy a Marine before Mission
Captain issues a versioned `SHELL READY` contract.

## Current local state

- Test drive: `TD-004`
- Selected slice: `TD-004-RP004-THREE-CURRENT-v1`
- Campaign address: `RP-004 / SC-05 / TR-00-TR-40`
- Released predecessor:
  `TD-003 / SS-RP003-REVIEW-SAVE-v1 / CM-50 VERIFIED RESTORE`
- Route contract: `TD004-RTA-001`
- Floor-stack certificate: `CFS-TD004-v2`
- Science certificate: `VE-TD004-v2`
- Budget authority: `PBA-TD004-v1`
- Science disposition:
  **`VIABILITY READY - ROUTE AND BUDGET REVALIDATED`**
- Operations return commit:
  `e8b4b63a1ee7f9f82433d34bd24c5c611b082956`
- Science return commit: the dedicated local commit containing
  `04-VIABILITY-ENVELOPE.md`, `04A-PRODUCTION-BUDGET-AUTHORITY.json`,
  `scripts/validate_td004_budget.py`, this handoff, and the related current
  controls is authoritative.
- Shell ID/version: **not yet issued**
- Marine deployment: **not authorized**
- Synchronization: **local-only until the Mission `SHELL READY` push gate**

Martin explicitly authorized the exact transition from the released TD-003
`CM-50 VERIFIED RESTORE` state into `RP-004 / SC-05 / TR-00-TR-40`.
Operations encoded that decision as `TD004-RTA-001`; Science has now
independently found the route and its bounded production envelope supportable.

The earlier Operations, Science, and Mission HOLDs remain historical evidence
of the correctly detected route and budget gaps. `CFS-TD004-v2`,
`VE-TD004-v2`, and `PBA-TD004-v1` are the current authorities.

## Frozen transition and recovery contract

The sole Pilot action is:

```text
PILOT // FOLLOW EXPEDITION-MARKED SURVEY TO THREE-CURRENT REACH
```

It is available only after Tour isolation, strict sanitation of the exact
released TD-003 record, exact no-replay `CM-50` reconstruction,
private/transient clearing, complete intent validation, and an unused
seven-modality one-hit token. Validation precedes token consumption.

One accepted intent performs exactly one transient in-memory transition to
`TR-00 ARRIVE + ORIENT`. It writes no TD-003 field, grants no evidence,
authority, invitation, permission, access, reward, identity, world response,
or external action, replays nothing, and preserves
`continuation="continuation"` and `successor=null`.

RP-004 persistence uses the dedicated key
`horizon-archive-rp004-three-current-save-v1` and record version
`rp004.three-current-save.v1`. The exact schema, sanitation, denylist,
atomic write/readback/rollback, resume, re-entry, accessibility, responsive,
offline, evidence, and invariant-world contracts are frozen in
`VE-TD004-v2`.

The two released write-free CM-50 choices remain unchanged:

- `RETURN TO CIVIC COMPARISON`
- `RETURN TO CITY THRESHOLD`

RP-004's existing `RETURN TO CALIBRATION MARGIN` must restore exact CM-50,
where both known returns and a new fresh RP-004 intent are available.
RP-004's direct City Threshold return remains write-free. No direct
RP-004-to-Civic-Comparison shortcut is authorized.

## Production budget authority

`PBA-TD004-v1` replaces the exhausted inherited limits with a one-time,
non-compounding five-percent TD-004 rebaseline grounded in the accepted TD-003
production build:

- aggregate JavaScript: at most `1,255,149` bytes
- aggregate CSS: at most `85,789` bytes
- production modules: at most `187`
- new image-only runtime media: at most `4,194,304` bytes
- total runtime media: at most `23,566,675` bytes
- no new audio, font, video, or network payload
- production build: at most `60` seconds
- focused tests: at most `30` seconds
- complete E2E: at most `180` seconds
- sampled main-thread task: at most `100` milliseconds

The executable validator is `scripts/validate_td004_budget.py`. It aggregates
every emitted JS/CSS chunk, identifies accepted media by SHA-256, rejects
unapproved media classes, and fails on any exceeded cap. The accepted baseline
passes exactly; over-cap module and build-time probes fail closed.

## Continuing protections

- Preserve closed canon, the intended ending, strict AI-901 learning evidence
  and no cross-credit, privacy, accessibility, responsive parity,
  offline/no-authority/no-exam-guarantee, no-credit Tour, deterministic atomic
  save/rollback/restore, and invariant SC-04/SC-05.
- The apparent common return remains observation only and is never a route.
- Stop at `TR-40 VERIFY + RETURN`; no RP-005 route is authorized.
- No RP-013, successor, post-ending content, hidden-lore explanation, live
  service call, external action, or world change is authorized.
- Protected RP-004 code remains reference evidence, not proof of normal
  integration.
- Never open `DO_NOT_READ_HORIZON_ARCHIVE_HIDDEN_LORE_VAULT.md`.
- Never inspect, alter, stage, move, delete, or commit
  `Art Of No Mans Sky Book Scan.pdf` or `Simplilearn Training Files/`.
- Never inspect or mutate Martin's browser storage or campaign save.
- The archived two-team workflow remains inactive.

## Exact next action

**Mission Captain re-entry.**

Read the Mission profile, `CFS-TD004-v2`, `VE-TD004-v2`,
`PBA-TD004-v1`, the historical `MC-TD004-HOLD-v1`, the exact released TD-003
record/controller evidence, the frozen RP-004 contract, and current technical
controls.

Reconcile every boundary without silently changing Operations or Science.
If no conflict remains, replace the historical HOLD with a versioned
`SHELL READY` contract that freezes the playable boundary, implementation
ownership, acceptance matrix, budget command, variance protocol, and exact
Marine deployment order. Commit, push the `SHELL READY` gate, verify
`HEAD == origin/main`, and only then hand off to Reconnaissance Sergeant.

If any conflict remains, return it to the earliest responsible stage with a
bounded revision request. Do not deploy Marines on a partial or implied shell.
