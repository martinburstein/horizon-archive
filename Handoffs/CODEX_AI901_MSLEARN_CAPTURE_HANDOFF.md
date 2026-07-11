# Codex Handoff: Automate Capture of AI-901 Microsoft Learn Materials

## Mission

Build a small, safe local tool that collects the useful Microsoft Learn materials for Martin's AI-901 study workflow.

The goal is **not** to scrape the entire Microsoft Learn site. The goal is to capture the two official AI-901 self-paced learning paths, their modules, their units, and the text-and-images content needed for AI-assisted studying.

The tool should produce clean local Markdown/JSON files that an AI can read later, while preserving source URLs, titles, module order, unit order, image alt text, and attribution.

## Why this is needed

Microsoft Learn hides the useful instructional content behind a nested flow:

1. Open the AI-901 exam page.
2. Open a self-paced learning path.
3. Click each module.
4. Click each unit inside the module.
5. On unit pages, select **Text and images** when a content-format picker appears.
6. Extract the instructional text, tables, notes, images, code snippets, exercises, and knowledge checks.

Manually doing this is tedious and error-prone. Automate it carefully.

## Primary targets

Capture these two official Microsoft Learn learning paths first:

1. **AI concepts for developers and technology professionals**  
   URL: `https://learn.microsoft.com/en-us/training/paths/ai-concepts/`

2. **Get started with AI applications and agents on Azure**  
   URL: `https://learn.microsoft.com/en-us/training/paths/get-started-ai-apps-agents/`

These are the two must-have self-paced learning paths for AI-901 prep. Each currently lists 6 modules.

## Secondary reference targets

Also save a lightweight reference record for these official docs, but do **not** scrape them deeply unless Martin asks:

1. Microsoft Foundry documentation hub  
   `https://learn.microsoft.com/en-us/azure/foundry/`

2. Microsoft Foundry SDKs and Endpoints overview  
   `https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview`

3. Microsoft Foundry Agent Service overview  
   `https://learn.microsoft.com/en-us/azure/foundry/agents/overview`

4. Azure Content Understanding overview in Foundry Tools  
   `https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview`

If the repo already has the `foundry-azure-source-priority` skill installed, reference it in the script README and use those four URLs as official priority docs.

## Safety and usage rules

Follow these rules exactly:

- Use this only for Martin's personal study archive.
- Do not bypass paywalls, authentication barriers, CAPTCHAs, robots restrictions, or access controls.
- Do not mass-crawl Microsoft Learn.
- Do not redistribute Microsoft Learn content publicly.
- Preserve source URL and Microsoft attribution in every extracted file.
- Rate-limit requests. Use a delay of at least 0.75–1.5 seconds between page fetches.
- Stop gracefully if the site blocks automation or asks for additional verification.
- Do not auto-submit knowledge checks to harvest answers.
- Capture knowledge check prompts and visible choices only. Do not try to infer or scrape hidden answer keys.
- For Azure portal exercises, capture instructions but do not create cloud resources unless Martin explicitly asks and confirms cost/risk.

## Recommended architecture

Use a two-stage approach.

### Stage 1: Discover official learning-path structure

Prefer the Microsoft Learn Catalog API for discovery.

Endpoint:

```text
https://learn.microsoft.com/api/catalog/?locale=en-us
```

The Catalog API is public, returns JSON, and includes metadata for learning paths, modules, and units. Use it to identify the two target learning paths and their module order where possible.

Implementation strategy:

1. Fetch the catalog JSON.
2. Find learning-path records whose `url` contains:
   - `/training/paths/ai-concepts`
   - `/training/paths/get-started-ai-apps-agents`
3. Extract:
   - learning path title
   - UID
   - summary
   - duration
   - module list/order if available
   - last modified date if available
   - source URL
4. Resolve each module UID to a module record.
5. Resolve each module's units to unit URLs.
6. Save a raw `catalog_snapshot.json` and a cleaned `manifest.json`.

Fallback if Catalog API is incomplete:

- Parse the learning path HTML directly.
- Extract module links from the `Modules in this learning path` section.
- Visit each module landing page.
- Extract unit links from the module's unit list.

### Stage 2: Capture unit content

For each unit URL:

1. Open the page using Playwright Chromium.
2. Wait for the main content area to load.
3. If a content-format picker exists, choose **Text and images**.
4. Extract the meaningful unit content from the page.
5. Save raw HTML for traceability.
6. Convert the cleaned content to Markdown.
7. Download images that appear inside the main content area.
8. Rewrite image references in Markdown to local relative paths.
9. Preserve image alt text/captions.
10. Save a unit metadata JSON file.

## Playwright behavior

Use Playwright rather than pure requests for unit pages because the **Text and images** option may be rendered interactively.

Approximate interaction logic:

```ts
await page.goto(unitUrl, { waitUntil: "networkidle" });

const textAndImagesTab = page.getByRole("tab", { name: /text and images/i });
const textAndImagesButton = page.getByRole("button", { name: /text and images/i });

if (await textAndImagesTab.count()) {
  await textAndImagesTab.first().click();
} else if (await textAndImagesButton.count()) {
  await textAndImagesButton.first().click();
}

await page.waitForTimeout(500);
```

Then extract the `main` content, not the whole page.

Potential selectors to test:

```text
main
main[role="main"]
article
.content
#main
```

Do not rely on a single brittle class name. Build fallbacks.

## What counts as “good materials”

Keep these:

- Unit title
- Estimated duration
- Learning objectives
- Paragraph text
- Bullet lists
- Tables
- Notes, tips, warnings, and important callouts
- Diagrams and screenshots
- Image alt text and captions
- Code snippets
- CLI commands
- Exercise instructions
- Knowledge check questions and visible choices
- Summary sections
- Links to relevant Microsoft docs
- Module assessment links, but not hidden answers

Remove these from extracted Markdown:

- Global Microsoft Learn header/footer
- Cookie/privacy controls
- Theme switcher
- Feedback widgets
- “Was this page helpful?” blocks
- Duplicate navigation breadcrumbs unless useful
- “Add to plan” buttons
- XP badges
- Repeated social/footer links

## Output folder structure

Create this structure:

```text
ai901-mslearn-materials/
  README.md
  manifest.json
  source_map.csv
  catalog_snapshot.json
  quality_report.md
  ai901_master_index.md
  ai901_compiled_for_ai.md
  ai901_compiled_for_ai.jsonl

  01_ai-concepts-for-developers-and-technology-professionals/
    path_index.md
    path_metadata.json
    01_<module-slug>/
      module_index.md
      module_metadata.json
      01_<unit-slug>.md
      01_<unit-slug>.metadata.json
      raw/
        01_<unit-slug>.html
      assets/
        image_001.png
        image_002.svg
    02_<module-slug>/
      ...

  02_get-started-with-ai-applications-and-agents-on-azure/
    path_index.md
    path_metadata.json
    01_<module-slug>/
      ...

  reference-docs/
    foundry_priority_sources.md
```

## Markdown front matter

Every generated Markdown unit file should start with YAML front matter:

```yaml
---
title: "Understand Azure"
source_url: "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/2-what-is-azure"
learning_path: "Get started with AI applications and agents on Azure"
module: "Get started with AI in Azure"
unit_number: 2
unit_type: "lesson"
duration_minutes: 4
captured_at_utc: "YYYY-MM-DDTHH:MM:SSZ"
source: "Microsoft Learn"
usage_note: "Personal study archive. Preserve Microsoft attribution. Do not redistribute."
---
```

Then include:

```md
# Understand Azure

Source: <original Microsoft Learn URL>

## Extracted content

...
```

## AI-ready compiled file

Create two AI-ready files:

### `ai901_compiled_for_ai.md`

A single Markdown file containing all captured material in order:

```md
# AI-901 Microsoft Learn Study Materials

Generated from official Microsoft Learn pages for personal study.

## Learning Path 1: ...
### Module 1: ...
#### Unit 1: ...
...
```

### `ai901_compiled_for_ai.jsonl`

One JSON object per unit:

```json
{"id":"get-started-ai-in-azure__2-what-is-azure","learning_path":"Get started with AI applications and agents on Azure","module":"Get started with AI in Azure","unit":"Understand Azure","source_url":"...","text":"...","images":[{"alt":"...","path":"..."}],"captured_at_utc":"..."}
```

This makes the archive easy to feed into a local AI/RAG workflow.

## Quality checks

After capture, generate `quality_report.md` with:

- Number of target learning paths found
- Number of modules found per learning path
- Number of units found per module
- Number of units successfully captured
- Number of units skipped or failed
- Any pages where **Text and images** could not be selected
- Any images that failed to download
- Duplicate module/unit detection
- Source URLs for all failed pages
- Date/time of capture

Hard failure conditions:

- A target learning path cannot be found.
- A module has zero units.
- More than 10% of unit pages fail extraction.
- The compiled file is empty or mostly navigation/footer text.

## Suggested implementation files

Codex should create:

```text
scripts/capture_mslearn_ai901.py
scripts/mslearn_extract.py
scripts/mslearn_catalog.py
requirements.txt
README_AI901_CAPTURE.md
```

Recommended Python dependencies:

```text
playwright
beautifulsoup4
markdownify
requests
tqdm
python-slugify
PyYAML
```

Install browser:

```bash
python -m playwright install chromium
```

Run command:

```bash
python scripts/capture_mslearn_ai901.py --out ai901-mslearn-materials --locale en-us
```

Optional flags:

```bash
--refresh-catalog
--no-images
--delay 1.25
--max-pages 999
--dry-run
--path-url https://learn.microsoft.com/en-us/training/paths/get-started-ai-apps-agents/
```

## Extraction hints

When converting HTML to Markdown:

- Preserve headings in order.
- Preserve table structure.
- Preserve code fences.
- Preserve callout labels like Note, Tip, Important, Warning, Caution.
- Preserve ordered and unordered lists.
- Preserve local image references.
- Convert internal Microsoft Learn links to absolute URLs.
- Remove duplicate blank lines.
- Keep one source URL near the top of every file.

Image handling:

- Download images only from the main content area.
- Keep original file extension when possible.
- If images are SVG, save as SVG.
- If images use relative URLs, resolve against `https://learn.microsoft.com`.
- Save a small `assets_manifest.json` per unit.

Knowledge checks:

- Capture visible questions and answer choices.
- Do not click submit.
- Do not try to reveal hidden correct answers.
- Mark these sections with `## Knowledge check`.

Exercises:

- Capture every written instruction.
- Capture all portal setup steps, screenshots, code snippets, and cleanup steps.
- Do not create Azure resources automatically.
- Add a visible note in the Markdown: `Exercise captured only; not executed.`

## Verification checklist for Codex

Before declaring success, Codex should confirm:

- Both target learning paths exist.
- Each path has 6 modules.
- Each module has a nonzero unit count.
- The first path includes AI concept modules covering generative AI/agents, NLP/text, speech, computer vision, and information extraction.
- The second path includes Azure/Foundry implementation modules covering AI in Azure, generative AI/agents, text analysis, speech, computer vision, and information extraction.
- At least one captured unit shows the **Text and images** content, not just video placeholder text.
- The unit shown in Martin's screenshot, `Understand Azure`, is captured as Markdown with the cloud service categories: Compute, Storage, Networking, and App Services.
- `ai901_master_index.md` links to every captured unit.
- `ai901_compiled_for_ai.md` is readable and in the same order as the learning paths.
- `quality_report.md` lists any missing/failed items.

## Do not overbuild

Build the simplest useful version first:

1. Catalog discovery.
2. Module/unit link resolution.
3. Playwright page load.
4. Text-and-images selection if available.
5. Main-content extraction to Markdown.
6. Image download.
7. Manifest and quality report.

Do not build a GUI. Do not build a database. Do not add cloud dependencies.

## Success definition

The handoff is complete when Martin has a local folder containing clean, ordered, AI-readable study materials for the two AI-901 Microsoft Learn learning paths, plus a manifest and quality report showing exactly what was captured and what, if anything, failed.
