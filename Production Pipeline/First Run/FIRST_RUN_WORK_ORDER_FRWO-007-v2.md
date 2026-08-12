# Horizon Archive First Run Work Order - Sediment Abacus CLI Pass

Work Order ID: `FRWO-007-v2`

Stage / stable agent: Operations Planning Major /
`operations_planning_major`

Disposition: **`WORK ORDER READY / HOST 07 SEDIMENT ABACUS / IMAGEGEN CLI /
FIVE TOTAL SEQUENTIAL ATTEMPTS MAXIMUM`**

Date: **2026-08-12**

Control source: `ae9b5352`

Supersedes transport/ledger only: `FRWO-007-v1`

Baseline / continuity: `FRPB-001-v4` / `FRCL-006-v2` with all physical and
meaning constraints in `FRCL-006-v1` retained.

## Outcome and scope

The player-visible outcome, route, state, lessons, physical acceptance rubric,
accessibility, performance, validation, rollback, maturity, and protected
boundaries in `FRWO-007-v1` remain exact. This version replaces only its
built-in `{H7-A,H7-B}` transport with Martin's authorized bundled-CLI ledger
`{H7-1,H7-2,H7-3,H7-4,H7-5}`.

## Exact CLI authority

```text
script=C:\Users\marti\.codex\skills\.system\imagegen\scripts\image_gen.py
bytes=35266
sha256=c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05
subcommand=generate
model=gpt-image-2
n=1
size=3840x2160
quality=high
output-format=png
augmentation=off
force=false
```

No script edit, one-off wrapper, direct REST/SDK runner, `generate-batch`,
`edit`, reference image, mask, downscale, alternate model, model downgrade,
background override, compression, moderation override, internal retry, or
`--force` is permitted. `OPENAI_API_KEY` may be inherited by the CLI only; its
value is never printed, persisted, logged, or placed in product/provenance.

## Exact candidate custody and ledger

Mission must freeze one fresh literal scratch root under ignored
`tmp/imagegen/host07-<guid>/`, absent before shell issue. The five exact
candidate paths are `h7-1.png` through `h7-5.png` inside that root. The root is
candidate custody, not product or canon.

For ordinal `n`:

1. all earlier ordinals have exact terminal records; all later paths are
   absent; current path is absent; product paths are absent;
2. CLI/script/options/prompt identities are exact and API-key presence is
   checked only as a boolean;
3. exactly one `generate` process is launched with `--prompt-file` pointing to
   the predeclared immutable prompt file, `--out` pointing to the exact current
   candidate, and no `--force`;
4. a nonzero exit before candidate creation consumes the ordinal and stops for
   Science/Mission adjudication; no automatic next ordinal follows transport,
   authentication, quota, moderation, or tool failure;
5. success requires exactly the current ordinary non-reparse one-link file,
   no other scratch child, strict PNG/decode/size/opacity and physical/layout/
   accessibility PASS;
6. objective rejection records only bounded reason codes, deletes the exact
   current candidate after identity reproof, proves absence, then—and only
   then—makes ordinal `n+1` eligible;
7. acceptance ends generation, leaves every later path absent, copies the exact
   accepted byte stream create-new/no-replace to the Host 07 product path,
   records provenance, then deletes the scratch source after byte/SHA identity
   proof and proves scratch absence; and
8. any path collision, unexpected child, reparse/link/identity drift,
   partial/invalid file, delete failure, or ambiguity stops fail-closed without
   broad search, recursive cleanup, or another ordinal.

The first passing candidate ends the ledger. If all five are objectively
rejected and cleaned, return terminal HOLD. No sixth call or rerun exists.

## Prompt and review law

Recon must freeze five complete prompts before `H7-1`. Each is an independent
new generation with no image input. Prompts may progressively tighten camera,
center-safe composition, dry approach, irregularity, depth-band separation,
and protected margins, but may not use facts from pixels of a rejected result
except its bounded rejection codes. Rejected images are never prompt
references.

Every candidate independently passes the ten physical predicates in
`FRWO-007-v1` and all continuity rejection rules in `FRCL-006-v1`. Science
freezes exact normalized geometry/layout thresholds. Private review is not a
reveal. No rejected image, prompt-specific failure detail, or candidate path is
published to the user.

## Product and rollback

Only these final paths may be created after acceptance:

```text
Visual Direction/Production Masters/2026-08-12-first-run-host07/
  host07-sediment-abacus-master-v1.png
  PROVENANCE.md
```

Accepted Hosts 01-06 and all accepted media remain immutable. Product import
must be byte-identical to the selected scratch candidate. Runtime remains
null-first until candidate, provenance, source, measurements, decode, state,
copy, tests, builds, served identity, and E2E pass. Rollback removes only exact
Host 07 additions.

## Operations validation

A no-network CLI dry-run passed for `gpt-image-2`, `3840x2160`, high-quality
PNG, `n=1`, no augmentation, and explicit output. It reported exact endpoint
and output and confirmed API-key presence without exposing the value. This is
transport-shape evidence only; no attempt was consumed.

## Exact Science handoff

Science reads this version, `FRWO-007-v1`, `FRVE-007-v1`, `FRPB-001-v4`,
`FRCL-006-v2/v1`, the full imagegen skill/CLI references and immutable script,
current runtime/tests, and accepted-media budget. With zero live API calls,
prove or reject CLI dependency, path/collision/write/cleanup behavior,
candidate envelope, physical/layout/accessibility records, state/learning,
performance, validation, and rollback. Explicitly adjudicate the CLI's
exists-then-`Path.write_bytes` behavior under the fresh unique scratch-root
contract; do not silently claim atomic create-new.

Issue `POLISH VIABILITY READY`, `REVISE`, or `HOLD`, synchronize NEXT, and do
not generate media or begin Mission/production.

Operations signs **`WORK ORDER READY / FRWO-007-v2 / HOST 07 CLI /
FIVE TOTAL ATTEMPTS / ROUTE FRESH SCIENCE`**.
