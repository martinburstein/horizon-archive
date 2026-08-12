# Horizon Archive First Run Content and Asset Ledger - Host 09

Ledger ID: `FRCA-009-v1`

Stage / owner: Quartermaster / `quartermaster`

Disposition: **`HOLD / FIVE ATTEMPTS OBJECTIVELY REJECTED / NO PRODUCT IMPORT`**

Shell / functional candidate: `FRSH-009-v1` / `d6cbf42f9d6cd3017d124a18327f0e3c41646f2d`

## Attempt ledger

All five Martin-authorized attempts were invoked sequentially through the
installed imagegen CLI. Each call used its frozen prompt, one exact output
path, `gpt-image-2`, `3840x2160`, high quality, opaque PNG, and no prompt
augmentation. Every request exited `0`; every result was technically valid and
privately reviewed; no result was revealed or imported.

| Attempt | Exact candidate identity | Decision |
| --- | --- | --- |
| `H9-1` | `18,014,997` bytes / SHA-256 `40f537d06beb1d6aaf1937387386d9a294b96a1fa4084abcbd728cdd293019e4` | `REJECT / LAYOUT`; complete relation exceeded the frozen responsive envelope |
| `H9-2` | `17,636,887` bytes / SHA-256 `f87869d3eb47428e418ad75256b2d4771ee3440caec80375d012180ad57035dc` | `REJECT / LAYOUT`; complete relation remained crop-unsafe |
| `H9-3` | `18,503,422` bytes / SHA-256 `97a5445844c60e447a4f16bca0309f853546d76c6518b500116068da0f1ddeb1` | `REJECT / LAYOUT`; physical relation passed but exceeded the responsive-safe family bounds |
| `H9-4` | `14,833,227` bytes / SHA-256 `13e93d121d2459206558af17815ef34606a8142029968d7c4566f03e722a23b6` | `REJECT / LAYOUT`; materially closer but still crossed the frozen crop-safe boundary |
| `H9-5` | `20,423,050` bytes / SHA-256 `45fb8f974c3d04d1503e86d791ff0d8fc56416dac337682ec9a36ae49041c1db` | `REJECT / LAYOUT`; core physical predicates passed but complete family exceeded the frozen compact envelope |

Each rejected file was re-proved by exact length, SHA-256, ordinary-file and
sole-child identity, deleted exactly once, and proved absent before the next
call. After `H9-5`, the empty external scratch root was deleted nonrecursively
and proved absent. No sixth attempt exists.

## Product and runtime disposition

The exact product raster and `PROVENANCE.md` remain absent. The accepted-media
inventory remains `19 / 70,136,520`. The Host 09 runtime remains the inert,
null-first `FRCE-009-v1` functional candidate; no source, provenance, geometry,
copy, alt, image import, E2E route, or release maturity was populated.

Hosts 01-08, all accepted media, the one-path rail, lesson ownership, surface
canon, RP-012, `successor=null`, all OPEN records, and VR-65 remain unchanged.
Repository QA screenshots, Martin's browser/profile/save, the protected
PDF/training tree, hidden lore, and opaque residual roots were not inspected,
restored, staged, altered, or used as evidence.

Quartermaster signs **`HOLD / FRCA-009-v1 / FIVE ATTEMPTS CONSUMED / ROUTE OPERATIONS`**.
