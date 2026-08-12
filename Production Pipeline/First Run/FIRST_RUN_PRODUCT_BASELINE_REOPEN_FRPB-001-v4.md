# Horizon Archive First Run Product Baseline - Host 07 CLI Reopen

Baseline ID: `FRPB-001-v4`

Stage / stable agent: Commandant / `commandant`

Disposition: **`FIRST RUN VISION BASELINE REOPENED / HOST 07 IMAGEGEN CLI
FALLBACK / FIVE TOTAL SEQUENTIAL ATTEMPTS MAXIMUM / FRPB-001-v4`**

Date: **2026-08-12**

Control source: `b6cdb3dcb4b67cb53befc7e730f6c4805b2e1836`

Prior authority: `FRPB-001-v3` / `FRCL-006-v1` / `FRWO-007-v1` /
`FRVE-007-v1`

Released predecessor: `FRAB-005-v1 / Host 06 Stranded Lens Cradle`

Martin's exact decision: **`Authorize imagegen CLI fallback for Host 07 with
five total attempts.`**

## Decision

Martin explicitly resolves `FRVE-007-v1` by selecting the installed
image-generation skill's CLI fallback and replacing the prior two-call built-in
ceiling with **five total sequential CLI generation attempts**. The complete
fresh ledger is `{H7-1,H7-2,H7-3,H7-4,H7-5}`; every member is unconsumed.

This changes transport and attempt ceiling only. It does not change the Host
07 physical relation, product promise, canon, route, learning, privacy, save,
accessibility, offline behavior, invariant world, ending, or maturity.

The authorized executable is only the installed bundled CLI:

```text
C:\Users\marti\.codex\skills\.system\imagegen\scripts\image_gen.py
bytes=35266
sha256=c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05
mode=generate
model=gpt-image-2
```

`OPENAI_API_KEY` is present locally; its value is secret and must never be
printed, persisted, logged, copied into provenance, or read by product code.
No one-off runner, direct REST client, alternate CLI, batch subcommand, edit,
reference image, model downgrade, or script modification is authorized.

## Attempt law

- Calls are sequential, one output each (`n=1`), with one fixed prompt per
  attempt and no internal retry.
- Attempt `n+1` is eligible only after attempt `n` reaches exact terminal
  acceptance or objective rejection and its custody/cleanup is complete.
- The first passing candidate ends generation; every later attempt remains
  unavailable.
- No sixth call, rerun, `--force`, `generate-batch`, edit, variation, reference
  derivation, or alternate model is authorized.
- At most one passing raster may enter the product; all rejected candidates
  have zero reuse, prompt-reference, canon, evidence, maturity, publication, or
  reveal authority.
- The five planning roles and a revised `FIRST RUN SHELL READY` remain required
  before `H7-1`.

## Unchanged product boundary

Host 07 remains one dry same-basin distributed field of irregular mineral
nodules across several wash-channel depths, connected by graded sediment from
exact Host 06 and owning sole unchanged `L03-01 + L03-02`. It is not a literal
abacus, code diagram, message, answer, response, reward, access, authority, or
hidden-lore clue. Hosts 01-06 and accepted media remain immutable. Host 08 and
later content remain unimplemented and unrevealed. RP-012 and
`successor=null` remain exact.

No maturity or inventory changes. Every OPEN process record, both filename-
enumeration records, protected exclusion, and VR-65 remain separate and
unchanged.

## Exact Colonel handoff

Use one fresh Colonel context. Read the full profile, this baseline,
`FRPB-001-v3`, `FRCL-006-v1`, `FRWO-007-v1`, and `FRVE-007-v1`. Issue a
versioned continuity lock or HOLD confirming that the five-attempt CLI
transport changes no Host 07 meaning. On PASS route fresh Operations to revise
the Work Order around `{H7-1..H7-5}` and the exact bundled CLI.

Do not run the CLI, call the API, generate or inspect media, create candidate
paths, begin production, reveal anything, access protected state, advance
maturity, or select Host 08.

Commandant signs **`FIRST RUN VISION BASELINE REOPENED / FRPB-001-v4 /
HOST 07 CLI / FIVE TOTAL ATTEMPTS / ROUTE FRESH COLONEL`**.
