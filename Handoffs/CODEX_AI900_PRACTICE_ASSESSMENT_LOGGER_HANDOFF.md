# Codex Handoff: AI-900 Microsoft Learn Practice Assessment Study Logger

## Goal

Build a small browser-assisted workflow that helps Martin work through the official Microsoft Learn AI-900 practice assessment without manually building a study log from scratch.

Primary page:

`https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-900/practice/assessment?assessment-type=practice&assessmentId=26`

The user experience today is one question at a time: answer the current question, optionally check the answer, click **Next**, and repeat for 50 questions. The tool should reduce the tedium by opening the page, tracking progress, and producing an AI-ready study log.

## Important boundary

Do **not** bulk-extract, redistribute, or save the full Microsoft practice-assessment question bank or answer key.

This handoff is for a **personal study logger**, not a question-bank scraper.

Allowed outputs:

- question number
- assessment URL
- high-level topic tags
- correct/incorrect status, if visible after the user checks an answer
- user-selected labels such as `needs_review`
- short user-written notes
- short paraphrased learning takeaways that do not reproduce Microsoft’s wording
- final score / weak-area summary

Do **not** save:

- full verbatim question text
- full verbatim answer choices
- full answer key
- screenshots of every question
- raw HTML dumps of the assessment
- a dataset that can recreate the Microsoft assessment offline

## Desired deliverables

Create a local folder such as:

```text
ai900_practice_assessment_logger/
  README.md
  package.json
  scripts/
    ai900_practice_logger.mjs
  output/
    ai900_practice_session.csv
    ai900_practice_session.json
    ai900_review_plan.md
```

The generated study log should be useful for ChatGPT/Codex study planning, while avoiding copying the assessment itself.

## Recommended implementation

Use Playwright in headed mode.

The script should:

1. Open the official Microsoft Learn AI-900 practice assessment page.
2. Wait for the page to load.
3. Detect the current question counter, such as `Question 1 of 50`.
4. For each question:
   - Read only enough page text into memory to infer broad tags.
   - Do **not** write the raw question text or choices to disk.
   - Ask the user to answer in the browser.
   - Ask the user to click **Check Your Answer** if they want correctness captured.
   - Detect visible correctness/result text if available.
   - Prompt the user in the terminal for optional notes in their own words.
   - Save only the allowed log fields.
   - Ask the user to click **Next**, or let the script click **Next** after confirmation.
5. Stop after question 50 or when the user exits.
6. Write a concise review plan from the topic/status log.

## Topic tagging

Use broad topic tags only. Examples:

```text
responsible_ai
machine_learning_basics
generative_ai
foundry
azure_ai_services
computer_vision
image_analysis
custom_vision
nlp
text_analytics
language_understanding
speech
translation
document_intelligence
content_understanding
search
bot_service
anomaly_detection
model_deployment
endpoints
agents
```

Simple keyword tagging is enough. The script may inspect the currently visible question text in memory to add tags, but it must not save the exact wording.

## Example `package.json`

```json
{
  "name": "ai900-practice-assessment-logger",
  "version": "1.0.0",
  "type": "module",
  "private": true,
  "scripts": {
    "start": "node scripts/ai900_practice_logger.mjs"
  },
  "dependencies": {
    "playwright": "^1.48.0"
  }
}
```

## Example Playwright script

Create `scripts/ai900_practice_logger.mjs`.

```javascript
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const START_URL =
  "https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-900/practice/assessment?assessment-type=practice&assessmentId=26";

const OUT_DIR = path.resolve("output");
const CSV_PATH = path.join(OUT_DIR, "ai900_practice_session.csv");
const JSON_PATH = path.join(OUT_DIR, "ai900_practice_session.json");
const REVIEW_PATH = path.join(OUT_DIR, "ai900_review_plan.md");

fs.mkdirSync(OUT_DIR, { recursive: true });

const rl = readline.createInterface({ input, output });

function csvEscape(value) {
  const s = String(value ?? "");
  return `"${s.replaceAll('"', '""')}"`;
}

function inferTags(text) {
  const t = text.toLowerCase();
  const tags = new Set();

  const rules = [
    ["responsible_ai", ["responsible ai", "fairness", "transparency", "accountability", "privacy", "security", "inclusive", "reliability", "safety"]],
    ["machine_learning_basics", ["classification", "regression", "clustering", "training", "label", "feature", "model", "prediction"]],
    ["generative_ai", ["generative", "prompt", "large language", "llm", "completion", "chat", "image generation"]],
    ["foundry", ["foundry", "azure ai foundry", "deployment", "endpoint"]],
    ["agents", ["agent", "tool", "instruction", "single-agent"]],
    ["computer_vision", ["vision", "image", "object", "face", "celebrity", "landmark", "ocr", "visual"]],
    ["image_analysis", ["image analysis", "categorizing an image", "tags", "caption"]],
    ["custom_vision", ["custom vision", "custom image", "training images"]],
    ["nlp", ["natural language", "language", "sentiment", "key phrase", "entity", "summarization", "text analytics"]],
    ["speech", ["speech", "text to speech", "speech to text", "recognition", "synthesis"]],
    ["translation", ["translate", "translation", "translator"]],
    ["document_intelligence", ["document intelligence", "form recognizer", "forms", "invoice", "receipt", "document"]],
    ["content_understanding", ["content understanding", "extract information", "audio", "video"]],
    ["search", ["search", "index", "query", "semantic ranking"]],
    ["bot_service", ["bot", "conversation", "qna", "question answering"]],
    ["anomaly_detection", ["anomaly", "outlier", "time series"]]
  ];

  for (const [tag, needles] of rules) {
    if (needles.some((needle) => t.includes(needle))) tags.add(tag);
  }

  return [...tags].sort();
}

async function getVisibleText(page) {
  return await page.locator("body").innerText({ timeout: 5000 });
}

function parseQuestionNumber(text) {
  const match = text.match(/Question\s+(\d+)\s+of\s+(\d+)/i);
  if (!match) return { questionNumber: "", totalQuestions: "" };
  return { questionNumber: Number(match[1]), totalQuestions: Number(match[2]) };
}

function inferResult(text) {
  const t = text.toLowerCase();
  if (/\bincorrect\b/.test(t)) return "incorrect";
  if (/\bcorrect\b/.test(t)) return "correct";
  return "not_checked_or_not_detected";
}

async function clickNextIfConfirmed(page) {
  const action = await rl.question("Click Next now? [y/N/quit] ");
  const normalized = action.trim().toLowerCase();

  if (["q", "quit", "exit"].includes(normalized)) return "quit";

  if (normalized === "y" || normalized === "yes") {
    const next = page.getByRole("button", { name: /^next/i });
    if (await next.count()) {
      await next.first().click();
      await page.waitForTimeout(1500);
      return "next_clicked";
    }
    console.log("Could not find a Next button. Please click Next manually.");
    await rl.question("Press Enter after you click Next manually...");
    await page.waitForTimeout(1000);
    return "manual_next";
  }

  await rl.question("Press Enter after you click Next manually...");
  await page.waitForTimeout(1000);
  return "manual_next";
}

function writeOutputs(rows) {
  const headers = [
    "question_number",
    "total_questions",
    "source_url",
    "tags",
    "result",
    "needs_review",
    "user_note"
  ];

  const csv =
    headers.map(csvEscape).join(",") +
    "\n" +
    rows
      .map((row) =>
        headers
          .map((h) => {
            if (Array.isArray(row[h])) return csvEscape(row[h].join(";"));
            return csvEscape(row[h]);
          })
          .join(",")
      )
      .join("\n");

  fs.writeFileSync(CSV_PATH, csv, "utf8");
  fs.writeFileSync(JSON_PATH, JSON.stringify(rows, null, 2), "utf8");

  const missedOrReview = rows.filter(
    (r) => r.result === "incorrect" || r.needs_review === "yes"
  );

  const tagCounts = {};
  for (const row of missedOrReview.length ? missedOrReview : rows) {
    for (const tag of row.tags ?? []) {
      tagCounts[tag] = (tagCounts[tag] ?? 0) + 1;
    }
  }

  const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);

  const reviewMd = [
    "# AI-900 Practice Assessment Review Plan",
    "",
    "This file intentionally does not reproduce Microsoft Learn question text or answer choices.",
    "",
    `Questions logged: ${rows.length}`,
    `Needs review / incorrect: ${missedOrReview.length}`,
    "",
    "## Highest-priority review tags",
    "",
    ...(sortedTags.length
      ? sortedTags.map(([tag, count]) => `- ${tag}: ${count}`)
      : ["- No weak-area tags detected yet."]),
    "",
    "## Question notes",
    "",
    ...rows.map((r) => {
      const status = r.result || "not_checked_or_not_detected";
      const tags = (r.tags ?? []).join(", ") || "untagged";
      const note = r.user_note || "";
      return `### Question ${r.question_number}\n\n- Result: ${status}\n- Tags: ${tags}\n- Needs review: ${r.needs_review}\n- Note: ${note}\n`;
    })
  ].join("\n");

  fs.writeFileSync(REVIEW_PATH, reviewMd, "utf8");
}

async function main() {
  console.log("Opening Microsoft Learn AI-900 practice assessment...");
  console.log("This logger will not save verbatim questions, choices, or an answer key.");

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(START_URL, { waitUntil: "domcontentloaded" });

  console.log("\nUse the browser window to answer questions.");
  console.log("After each question, optionally click 'Check Your Answer' in the browser.");
  console.log("Then return to this terminal.\n");

  const rows = [];

  while (true) {
    await rl.question("Press Enter when the current question is visible and answered/checked...");

    const visibleText = await getVisibleText(page);
    const { questionNumber, totalQuestions } = parseQuestionNumber(visibleText);

    if (!questionNumber) {
      console.log("Could not detect the question number. You may not be on a question page.");
      const cont = await rl.question("Continue anyway? [y/N] ");
      if (!["y", "yes"].includes(cont.trim().toLowerCase())) break;
    }

    const tags = inferTags(visibleText);
    const result = inferResult(visibleText);

    const needsReviewRaw = await rl.question("Mark this question as needs_review? [y/N] ");
    const needsReview = ["y", "yes"].includes(needsReviewRaw.trim().toLowerCase())
      ? "yes"
      : "no";

    const userNote = await rl.question(
      "Optional note in your own words, no copy/paste from Microsoft: "
    );

    rows.push({
      question_number: questionNumber || rows.length + 1,
      total_questions: totalQuestions || 50,
      source_url: START_URL,
      tags,
      result,
      needs_review: needsReview,
      user_note: userNote.trim()
    });

    writeOutputs(rows);
    console.log(`Saved progress for question ${questionNumber || rows.length}.`);

    if (Number(questionNumber) >= Number(totalQuestions || 50)) {
      console.log("Detected final question. Writing final outputs.");
      break;
    }

    const nextStatus = await clickNextIfConfirmed(page);
    if (nextStatus === "quit") break;
  }

  writeOutputs(rows);
  console.log(`\nDone. Outputs written to:\n- ${CSV_PATH}\n- ${JSON_PATH}\n- ${REVIEW_PATH}`);
  await browser.close();
  rl.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

## README instructions for Martin

The final README should include:

```bash
npm install
npx playwright install chromium
npm start
```

Workflow:

1. The browser opens the Microsoft Learn AI-900 practice assessment.
2. Answer the question in the browser.
3. Click **Check Your Answer** if you want to log correctness.
4. Return to the terminal and press Enter.
5. Add an optional note in your own words.
6. Let the script advance or click **Next** manually.
7. Repeat through all 50.

## Output format

`ai900_practice_session.csv` should look like:

```csv
"question_number","total_questions","source_url","tags","result","needs_review","user_note"
"1","50","https://learn.microsoft.com/...","computer_vision;image_analysis","correct","no","Remember the broad feature area to review."
```

Do not add columns for:

- full question
- full answer choices
- correct answer text
- explanation copied from Microsoft

## Optional enhancement

After the session, create a second script:

```text
scripts/build_review_cards.mjs
```

It can turn the session log into flashcards that use Martin’s own notes and broad topic tags, for example:

```text
Front: What should I review for AI-900 computer vision image categorization?
Back: Review Azure AI Vision image analysis features, especially domain-specific models and tagging/captioning capabilities.
```

Again, do not reproduce the assessment text or answer key.

## Acceptance criteria

This handoff is complete when Codex can:

- open the official AI-900 practice assessment in a headed browser
- guide the user through all 50 questions
- avoid saving verbatim Microsoft assessment content
- save progress after every question
- produce CSV, JSON, and Markdown review outputs
- produce a weak-area study plan by topic
- keep the workflow personal-study oriented and non-redistributable
