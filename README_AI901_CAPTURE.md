# AI-901 Microsoft Learn Capture

This workspace includes a local capture tool for Martin's personal AI-901 study archive. It discovers the two official Microsoft Learn learning paths, resolves their modules and units, captures unit content into local Markdown and JSON, and generates compiled AI-ready outputs.

The workflow is intentionally narrow:

- It targets only the two AI-901 learning paths.
- It keeps Microsoft attribution and source URLs in every generated unit file.
- It rate-limits fetches and does not attempt to bypass access controls.
- It captures visible knowledge-check prompts and choices, but never submits answers.

If the repository has the `foundry-azure-source-priority` skill installed at `.agents/skills/foundry-azure-source-priority/SKILL.md`, the tool treats these four Microsoft URLs as the official priority references and writes them into `reference-docs/foundry_priority_sources.md`:

1. https://learn.microsoft.com/en-us/azure/foundry/
2. https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview
3. https://learn.microsoft.com/en-us/azure/foundry/agents/overview
4. https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview

## Install

```powershell
python -m pip install -r requirements.txt
python -m playwright install chromium
```

## Run

```powershell
python scripts/capture_mslearn_ai901.py --out ai901-mslearn-materials --locale en-us
```

Useful flags:

```powershell
python scripts/capture_mslearn_ai901.py --out ai901-mslearn-materials --dry-run
python scripts/capture_mslearn_ai901.py --out ai901-mslearn-materials --delay 1.25
python scripts/capture_mslearn_ai901.py --out ai901-mslearn-materials --max-pages 5
python scripts/capture_mslearn_ai901.py --out ai901-mslearn-materials --path-url https://learn.microsoft.com/en-us/training/paths/get-started-ai-apps-agents/
python scripts/capture_mslearn_ai901.py --out ai901-mslearn-materials --no-images
```

## Outputs

The capture writes:

- `manifest.json`
- `catalog_snapshot.json`
- `source_map.csv`
- `quality_report.md`
- `ai901_master_index.md`
- `ai901_compiled_for_ai.md`
- `ai901_compiled_for_ai.jsonl`
- per-path, per-module, and per-unit Markdown, metadata, raw HTML, and assets

## Notes

- The catalog API is used for discovery first, and module HTML is used to resolve ordered unit URLs.
- Playwright is used for unit capture so the script can switch to `Text and images` when that pivot exists.
- If Playwright is unavailable or a page fails to render in-browser, the extractor falls back to a plain HTTP fetch and records that behavior in unit metadata and the quality report.
