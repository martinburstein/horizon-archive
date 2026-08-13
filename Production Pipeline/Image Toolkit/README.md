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

That is the whole creative loop. Do not build a new agent pipeline, guide
schema, custody graph, restoration ceremony, or bespoke verifier for an
ordinary image.

## Default budget

- concepts: up to `3` API calls;
- targeted edits: up to `2` API calls;
- concurrent calls: `1`;
- first acceptable result stops the asset;
- after two edits that do not improve the selected concept, stop and revise the
  art direction instead of adding more calls.

These are per-asset defaults, not a prepaid pool and not a requirement to use
every call. A user instruction can lower or raise them.

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

Select by visual judgment, not by a large synthetic score:

- the required subject and physical relationships read immediately;
- composition survives the intended wide and narrow crops;
- no required fact depends on text, glow, UI, or an invented world response;
- no accidental human infrastructure, modern object, watermark, or stray text;
- the image is distinct from accepted neighboring assets;
- the intended interaction region remains legible at small size.

If the concept is wrong at the silhouette or scene level, generate another
concept. If it is right except for one local issue, edit it. Do not use local
edits to rescue a fundamentally wrong composition.

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
