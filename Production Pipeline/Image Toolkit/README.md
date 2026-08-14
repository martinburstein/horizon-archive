# Horizon Archive Lightweight Image Toolkit

This is the current reusable method for producing new Horizon Archive raster
assets. It deliberately replaces the per-image guide schemas, custody DAGs,
restoration protocol, and multi-role generation choreography used by the closed
`FRM15` experiment.

The toolkit is for creative production. First Run still owns runtime
integration and release verification.

## Default workflow

1. Pick the earliest `ready` entry in `IMAGE_QUEUE.json`.
2. Fill one asset card from `ASSET_CARD_TEMPLATE.json` and write one concise
   prompt from `PROMPT_TEMPLATE.md`.
3. Invoke the global `$private-api-image-production` skill. Use the bundled
   Image API CLI for up to three distinct concepts and keep every candidate
   private. Review candidates through its text-only private evaluator.
4. If useful, make at most two single-change edits of that chosen concept.
5. Copy the selected result into a temporary workspace folder, normalize it
   with `image_toolkit.py`, record one receipt, and integrate only the accepted
   final asset.

Candidate selection is governed by `PRACTICAL_PRODUCTION_RUBRIC.md`. It uses a
small set of genuine hard failures plus a 20-point production score. A score of
`14+` with no hard failure is a practical pass; the workflow does not demand a
perfect literal rendering of every prompt detail.

That is the whole creative loop. Do not build a new agent pipeline, guide
schema, custody graph, restoration ceremony, or bespoke verifier for an
ordinary image.

## Default budget

- hard total: up to `20` API generation/edit attempts per image;
- initial concepts: use only as many as needed to establish a viable family;
- targeted edits: at most `2` non-improving edits per strategy family;
- concurrent calls: `1`;
- first acceptable result stops the asset;
- after two edits that do not improve the selected concept, stop and revise the
  art direction instead of adding another equivalent call;
- if no normal pass exists after attempt `20`, select the best technically
  valid, non-contradictory candidate and mark creative production `DONE`;
- never launch attempt `21` for the same image.

This is a per-image ceiling, not a requirement to use every call. The selected
image is the best candidate observed during the run, not necessarily the final
ordinal. Runtime integration and release remain separate from the creative
`DONE` decision.

## What is retained

- the asset card and final prompt;
- the accepted normalized asset in its product location;
- a small JSON receipt containing source and final hashes;
- any reference image that is itself a durable project input.

Rejected concepts may be deleted after comparison. Retain them only when they
are genuinely useful references. Tool-managed output paths are not runtime
assets and are never the only location of an accepted project image.

## Private API image generation rules

- Use the bundled Image API CLI with `gpt-image-2`; do not substitute the
  built-in generator for this workflow.
- A brand-new concept omits image references.
- An edit includes only the selected concept and any explicitly relevant
  references.
- Make one requested visual change per edit and repeat the invariants.
- Generate at `1920x1088`, then deterministically crop four pixels from the top
  and bottom to exact `1920x1080` RGB PNG.
- Never show candidates or selected outputs in chat unless Martin explicitly
  reverses the private-review boundary.
- Never overwrite accepted media. Use a versioned sibling until integration is
  approved.

## Selection checklist

Start with the hard gates in `PRACTICAL_PRODUCTION_RUBRIC.md`, then score the
candidate as a complete player-facing image:

- immediate scene read;
- composition and runtime usability;
- art direction and world fit;
- physical/story support; and
- finish and production quality.

Only technical invalidity, primary-subject failure, a meaning-changing
contradiction, or actual product unusability is an automatic rejection. Exact
counts, microscopic material relationships, ideal weathering, and hypothetical
crop weaknesses are preferences unless the asset card explicitly identifies
them as player-critical.

If the concept is wrong at the silhouette or scene level, generate another
concept. If it is right except for one local issue, edit it. Do not use local
edits to rescue a fundamentally wrong composition.

The first candidate scoring `14+` without a hard failure stops generation.
For a `14–16` result, one optional single-variable edit is allowed only when its
expected benefit exceeds regression risk; otherwise select the passing best.
If no candidate scores `14+`, attempt 20 forces selection of the best valid,
non-contradictory candidate. Document its compromise and stop; do not generate
attempt 21.

## Normalize and inspect

The utility requires Python and Pillow.

```powershell
python "Production Pipeline/Image Toolkit/image_toolkit.py" self-test

python "Production Pipeline/Image Toolkit/image_toolkit.py" normalize `
  --input "C:\absolute\selected-source.png" `
  --output "C:\absolute\normalized-v1.png" `
  --width 1920 --height 1080 --fit cover --background 000000

python "Production Pipeline/Image Toolkit/image_toolkit.py" inspect `
  --input "C:\absolute\normalized-v1.png"
```

Normalization is deterministic, applies EXIF orientation, converts to sRGB,
flattens alpha against the chosen background, strips metadata, and writes a new
RGB PNG. It refuses to overwrite an existing file.

After selection:

```powershell
python "Production Pipeline/Image Toolkit/image_toolkit.py" receipt `
  --asset-id host-14 `
  --operation edit `
  --tool openai-image-api:gpt-image-2 `
  --prompt "Production Pipeline/Image Toolkit/prompts/host-14-v1.md" `
  --source "C:\absolute\selected-tool-result.png" `
  --final "C:\absolute\normalized-v1.png" `
  --output "Production Pipeline/Image Toolkit/receipts/host-14-v1.json"
```

## Integration and testing

Generation and product integration are separate decisions. A selected image
does not become accepted media until its runtime path, crop, alternative text,
interaction geometry, provenance, performance, and rollback are complete.

Run only tests invalidated by the integration. Reuse exact-commit evidence for
unchanged systems. A full suite is reserved for a behavior-affecting change or
the independent final release holdout.

## Current authority

Martin authorized this lightweight toolkit on 2026-08-13 and subsequently
froze API-only, exact Full HD, private/no-reveal production as the reusable
default. The global `$private-api-image-production` skill is the operational
authority for future image turns.
