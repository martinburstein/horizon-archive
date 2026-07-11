import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { fileURLToPath } from "node:url";

const START_URL =
  "https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-900/practice/assessment?assessment-type=practice&assessmentId=26";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(SCRIPT_DIR, "..");
const OUT_DIR = path.join(ROOT_DIR, "output");
const CSV_PATH = path.join(OUT_DIR, "ai900_practice_session.csv");
const JSON_PATH = path.join(OUT_DIR, "ai900_practice_session.json");
const REVIEW_PATH = path.join(OUT_DIR, "ai900_review_plan.md");
const FLASHCARD_PATH = path.join(OUT_DIR, "ai900_flashcard_prompts.md");

fs.mkdirSync(OUT_DIR, { recursive: true });

const rl = readline.createInterface({ input, output });

function csvEscape(value) {
  const s = String(value ?? "");
  return `"${s.replaceAll('"', '""')}"`;
}

function loadExistingRows() {
  if (!fs.existsSync(JSON_PATH)) {
    return [];
  }

  try {
    const raw = fs.readFileSync(JSON_PATH, "utf8").replace(/^\uFEFF/, "");
    const rows = JSON.parse(raw);
    return Array.isArray(rows) ? rows : [];
  } catch {
    return [];
  }
}

function inferTags(text) {
  const t = text.toLowerCase();
  const tags = new Set();

  const rules = [
    ["responsible_ai", ["responsible ai", "fairness", "transparency", "accountability", "privacy", "security", "inclusive", "reliability", "safety"]],
    ["machine_learning_basics", ["classification", "regression", "clustering", "training", "label", "feature", "model", "prediction"]],
    ["generative_ai", ["generative", "prompt", "large language", "llm", "completion", "chat", "image generation"]],
    ["foundry", ["foundry", "azure ai foundry"]],
    ["azure_ai_services", ["azure ai services", "azure ai vision", "azure ai language", "azure ai speech", "azure ai search"]],
    ["computer_vision", ["vision", "image", "object", "face", "celebrity", "landmark", "ocr", "visual"]],
    ["image_analysis", ["image analysis", "categorizing an image", "caption", "tagging images"]],
    ["custom_vision", ["custom vision", "custom image", "training images"]],
    ["nlp", ["natural language", "language", "sentiment", "key phrase", "entity", "summarization", "text analytics"]],
    ["text_analytics", ["text analytics", "sentiment", "key phrase", "entity recognition"]],
    ["language_understanding", ["language understanding", "conversational language understanding", "clu", "intent", "utterance"]],
    ["speech", ["speech", "text to speech", "speech to text", "recognition", "synthesis"]],
    ["translation", ["translate", "translation", "translator"]],
    ["document_intelligence", ["document intelligence", "form recognizer", "invoice", "receipt", "document"]],
    ["content_understanding", ["content understanding", "extract information", "audio", "video"]],
    ["search", ["search", "index", "query", "semantic ranking"]],
    ["bot_service", ["bot", "conversation", "qna", "question answering"]],
    ["anomaly_detection", ["anomaly", "outlier", "time series"]],
    ["model_deployment", ["deploy", "deployment", "deploying models"]],
    ["endpoints", ["endpoint", "rest api", "sdk", "client application"]],
    ["agents", ["agent", "tool", "instruction", "single-agent"]]
  ];

  for (const [tag, needles] of rules) {
    if (needles.some((needle) => t.includes(needle))) {
      tags.add(tag);
    }
  }

  return [...tags].sort();
}

async function getVisibleText(page) {
  const main = page.locator("main");
  if (await main.count()) {
    return await main.first().innerText({ timeout: 5000 });
  }
  return await page.locator("body").innerText({ timeout: 5000 });
}

function parseQuestionNumber(text) {
  const match = text.match(/Question\s+(\d+)\s+of\s+(\d+)/i);
  if (!match) {
    return { questionNumber: "", totalQuestions: "" };
  }
  return { questionNumber: Number(match[1]), totalQuestions: Number(match[2]) };
}

function inferResult(text) {
  const t = text.toLowerCase();
  if (/\bincorrect\b/.test(t)) {
    return "incorrect";
  }
  if (/\bcorrect\b/.test(t)) {
    return "correct";
  }
  return "not_checked";
}

function trimUserText(value, maxLength = 300) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function nowIso() {
  return new Date().toISOString();
}

async function detectChoiceState(page) {
  return await page.evaluate(() => {
    const choiceSelectors = [
      'input[type="radio"]',
      '[role="radio"]',
      'input[type="checkbox"]',
      '[role="option"]'
    ];

    const seen = new Set();
    const choices = [];

    for (const selector of choiceSelectors) {
      for (const node of document.querySelectorAll(selector)) {
        const element = node;
        const wrapper = element.closest('label, [role="radio"], [role="option"], li, div');
        const key = wrapper || element;
        if (seen.has(key)) {
          continue;
        }
        seen.add(key);

        let selected = false;
        if (element instanceof HTMLInputElement) {
          selected = element.checked;
        } else {
          selected = element.getAttribute("aria-checked") === "true" || element.getAttribute("aria-selected") === "true";
        }

        choices.push({ selected });
      }
    }

    if (!choices.length) {
      const fallback = [...document.querySelectorAll('button, [role="button"], label')].filter((node) => {
        const text = (node.textContent || "").trim();
        return text.length > 0 && text.length < 120;
      });

      return {
        numberOfChoices: fallback.length || 0,
        selectedChoiceIndices: []
      };
    }

    const selectedChoiceIndices = choices
      .map((choice, index) => (choice.selected ? index + 1 : null))
      .filter(Boolean);

    return {
      numberOfChoices: choices.length,
      selectedChoiceIndices
    };
  });
}

function indicesToLetters(indices) {
  return indices.map((index) => {
    const zeroBased = Number(index) - 1;
    if (zeroBased >= 0 && zeroBased < 26) {
      return String.fromCharCode(65 + zeroBased);
    }
    return String(index);
  });
}

function formatSelections(indices) {
  const letters = indicesToLetters(indices);
  return letters.length ? letters.join(";") : "";
}

async function clickNextIfConfirmed(page) {
  const action = await rl.question("Click Next now? [y/N/quit] ");
  const normalized = action.trim().toLowerCase();

  if (["q", "quit", "exit"].includes(normalized)) {
    return "quit";
  }

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

function buildTopicReviewMap() {
  return {
    responsible_ai: "Review Responsible AI principles and governance guidance on Microsoft Learn.",
    machine_learning_basics: "Review machine learning fundamentals, including classification, regression, clustering, labels, and features.",
    generative_ai: "Review generative AI basics, prompts, large language models, and core use cases.",
    foundry: "Review Microsoft Foundry concepts, projects, deployments, and where Foundry fits in Azure AI workflows.",
    azure_ai_services: "Review the Azure AI services landscape and when to use each service family.",
    computer_vision: "Review computer vision workloads, image analysis, OCR, and vision model use cases.",
    image_analysis: "Review Azure AI Vision image tagging, captioning, and image-analysis capabilities.",
    custom_vision: "Review custom vision training scenarios, labeled images, and model publishing.",
    nlp: "Review natural language processing concepts, sentiment, entities, summarization, and extraction.",
    text_analytics: "Review text analytics features such as sentiment, key phrase extraction, and named entity recognition.",
    language_understanding: "Review conversational language understanding, intents, utterances, and language-model scenarios.",
    speech: "Review speech recognition, speech synthesis, and speech translation capabilities.",
    translation: "Review Azure AI Translator scenarios and multilingual text translation patterns.",
    document_intelligence: "Review document intelligence, form extraction, receipts, invoices, and structured document analysis.",
    content_understanding: "Review Azure Content Understanding across documents, audio, and video extraction workflows.",
    search: "Review Azure AI Search, indexing, querying, and semantic search basics.",
    bot_service: "Review bot and conversational solution patterns, including question answering scenarios.",
    anomaly_detection: "Review anomaly detection and time-series monitoring scenarios.",
    model_deployment: "Review model deployment patterns and operational considerations.",
    endpoints: "Review endpoints, SDK clients, and REST API calling patterns.",
    agents: "Review AI agent concepts, tools, instructions, and agentic workflows."
  };
}

function summarizeWeakTags(rows) {
  const tagCounts = {};
  for (const row of rows) {
    if (row.result === "incorrect" || row.needs_review === "yes") {
      for (const tag of row.topic_tags ?? []) {
        tagCounts[tag] = (tagCounts[tag] ?? 0) + 1;
      }
    }
  }
  return Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);
}

function buildReviewPlan(rows) {
  const correctCount = rows.filter((row) => row.result === "correct").length;
  const incorrectCount = rows.filter((row) => row.result === "incorrect").length;
  const notCheckedCount = rows.filter((row) => row.result === "not_checked").length;
  const reviewRows = rows.filter((row) => row.needs_review === "yes");
  const weakTags = summarizeWeakTags(rows);
  const topicReviewMap = buildTopicReviewMap();
  const suggestedTopics = weakTags
    .slice(0, 8)
    .map(([tag]) => topicReviewMap[tag] || `Review Microsoft Learn material related to ${tag}.`);

  return [
    "# AI-900 Practice Assessment Review Plan",
    "",
    "This file intentionally does not reproduce Microsoft Learn question text or answer choices.",
    "",
    `Total questions completed: ${rows.length}`,
    `Correct: ${correctCount}`,
    `Incorrect: ${incorrectCount}`,
    `Not checked: ${notCheckedCount}`,
    "",
    "## Weakest topic tags",
    "",
    ...(weakTags.length
      ? weakTags.map(([tag, count]) => `- ${tag}: ${count}`)
      : ["- No weak-area tags detected yet."]),
    "",
    "## Questions marked needs_review",
    "",
    ...(reviewRows.length
      ? reviewRows.map((row) => {
          const tags = (row.topic_tags ?? []).join(", ") || "untagged";
          const takeaway = row.user_takeaway || "No takeaway recorded.";
          return `- Question ${row.question_number}: ${tags}. Takeaway: ${takeaway}`;
        })
      : ["- None."]),
    "",
    "## Suggested Microsoft Learn topics to review",
    "",
    ...(suggestedTopics.length ? suggestedTopics.map((line) => `- ${line}`) : ["- No priority topics identified yet."]),
    "",
    "## Session detail",
    "",
    ...rows.map((row) => {
      const tags = (row.topic_tags ?? []).join(", ") || "untagged";
      const selected = row.selected_choice_indices_or_letters || "not_captured";
      const takeaway = row.user_takeaway || "None";
      return [
        `### Question ${row.question_number}`,
        "",
        `- Result: ${row.result}`,
        `- Tags: ${tags}`,
        `- Choices available: ${row.number_of_choices}`,
        `- Selected choice labels: ${selected}`,
        `- Needs review: ${row.needs_review}`,
        `- Takeaway: ${takeaway}`,
        `- Timestamp: ${row.timestamp}`,
        ""
      ].join("\n");
    })
  ].join("\n");
}

function buildFlashcardPrompts(rows) {
  const candidates = rows.filter(
    (row) => row.needs_review === "yes" || row.result === "incorrect"
  );
  const sourceRows = candidates.length ? candidates : rows;

  return [
    "# AI-900 Flashcard Prompts",
    "",
    "These prompts are generated only from topic tags and Martin's own takeaways.",
    "",
    ...sourceRows.map((row) => {
      const tags = row.topic_tags?.join(", ") || "general_ai900";
      const takeaway = row.user_takeaway || "Review the related Microsoft Learn concepts for this topic.";
      return [
        `## Prompt ${row.question_number}`,
        "",
        `Front: What should I remember for AI-900 topics ${tags}?`,
        `Back: ${takeaway}`,
        ""
      ].join("\n");
    })
  ].join("\n");
}

function normalizeRowShape(row) {
  return {
    question_number: row.question_number,
    total_questions: row.total_questions,
    source_url: row.source_url || START_URL,
    topic_tags: row.topic_tags || row.tags || [],
    number_of_choices: row.number_of_choices ?? "",
    selected_choice_indices_or_letters: row.selected_choice_indices_or_letters ?? "",
    result: row.result === "not_checked_or_not_detected" ? "not_checked" : row.result,
    needs_review: row.needs_review || "no",
    user_takeaway: row.user_takeaway || row.takeaway || "",
    timestamp: row.timestamp || nowIso()
  };
}

function writeOutputs(rows) {
  const normalizedRows = rows.map(normalizeRowShape).sort(
    (a, b) => Number(a.question_number) - Number(b.question_number)
  );

  const headers = [
    "question_number",
    "total_questions",
    "source_url",
    "topic_tags",
    "number_of_choices",
    "selected_choice_indices_or_letters",
    "result",
    "needs_review",
    "user_takeaway",
    "timestamp"
  ];

  const csv =
    headers.map(csvEscape).join(",") +
    "\n" +
    normalizedRows
      .map((row) =>
        headers
          .map((header) => {
            if (Array.isArray(row[header])) {
              return csvEscape(row[header].join(";"));
            }
            return csvEscape(row[header]);
          })
          .join(",")
      )
      .join("\n");

  fs.writeFileSync(CSV_PATH, csv, "utf8");
  fs.writeFileSync(JSON_PATH, JSON.stringify(normalizedRows, null, 2), "utf8");
  fs.writeFileSync(REVIEW_PATH, buildReviewPlan(normalizedRows), "utf8");
  fs.writeFileSync(FLASHCARD_PATH, buildFlashcardPrompts(normalizedRows), "utf8");
}

async function askResumeBehavior(existingRows) {
  if (!existingRows.length) {
    return [];
  }

  console.log(`Found an existing session with ${existingRows.length} logged question(s).`);
  const answer = await rl.question("Resume existing session? [Y/n/overwrite] ");
  const normalized = answer.trim().toLowerCase();

  if (normalized === "" || normalized === "y" || normalized === "yes") {
    return existingRows.map(normalizeRowShape);
  }

  if (normalized === "overwrite") {
    const confirm = await rl.question("This will replace previous results. Continue? [y/N] ");
    if (["y", "yes"].includes(confirm.trim().toLowerCase())) {
      return [];
    }
    return existingRows.map(normalizeRowShape);
  }

  if (normalized === "n" || normalized === "no") {
    console.log("Leaving previous results untouched. Exiting without changes.");
    return null;
  }

  return existingRows.map(normalizeRowShape);
}

async function main() {
  console.log("Opening Microsoft Learn AI-900 practice assessment...");
  console.log("Study capture mode only stores topic tags, progress metadata, selected choice labels, and your own takeaways.");
  console.log("It will not save verbatim Microsoft question text, answer choices, raw HTML, screenshots, or a standalone answer key.");

  const existingRows = loadExistingRows();
  const rows = await askResumeBehavior(existingRows);
  if (rows === null) {
    rl.close();
    return;
  }

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(START_URL, { waitUntil: "domcontentloaded" });

  console.log("\nUse the browser window to answer questions.");
  console.log("After each question, click 'Check Your Answer' if you want correctness logged.");
  console.log("Then return to this terminal.\n");

  while (true) {
    await rl.question("Press Enter when the current question is visible and you are ready to log it...");

    const visibleText = await getVisibleText(page);
    const { questionNumber, totalQuestions } = parseQuestionNumber(visibleText);

    if (!questionNumber) {
      console.log("Could not detect the question number. You may not be on a question page.");
      const cont = await rl.question("Continue anyway? [y/N] ");
      if (!["y", "yes"].includes(cont.trim().toLowerCase())) {
        break;
      }
    }

    const topicTags = inferTags(visibleText);
    const choiceState = await detectChoiceState(page);
    const result = inferResult(visibleText);
    const selectedChoiceLabels = formatSelections(choiceState.selectedChoiceIndices);

    if (!selectedChoiceLabels) {
      console.log("No selected choice labels were detected. That can happen if the page uses inaccessible controls.");
    }

    const needsReviewRaw = await rl.question("Mark this question as needs_review? [y/N] ");
    const needsReview = ["y", "yes"].includes(needsReviewRaw.trim().toLowerCase())
      ? "yes"
      : "no";

    const takeaway = trimUserText(
      await rl.question("Short takeaway in your own words: ")
    );

    const effectiveQuestionNumber = questionNumber || rows.length + 1;
    const existingIndex = rows.findIndex(
      (row) => Number(row.question_number) === Number(effectiveQuestionNumber)
    );

    const row = normalizeRowShape({
      question_number: effectiveQuestionNumber,
      total_questions: totalQuestions || 50,
      source_url: START_URL,
      topic_tags: topicTags,
      number_of_choices: choiceState.numberOfChoices,
      selected_choice_indices_or_letters: selectedChoiceLabels,
      result,
      needs_review: needsReview,
      user_takeaway: takeaway,
      timestamp: nowIso()
    });

    if (existingIndex >= 0) {
      rows[existingIndex] = row;
    } else {
      rows.push(row);
    }

    writeOutputs(rows);
    console.log(`Saved progress for question ${effectiveQuestionNumber}.`);

    if (Number(questionNumber) >= Number(totalQuestions || 50)) {
      console.log("Detected final question. Writing final outputs.");
      break;
    }

    const nextStatus = await clickNextIfConfirmed(page);
    if (nextStatus === "quit") {
      break;
    }
  }

  writeOutputs(rows);
  console.log(`\nDone. Outputs written to:\n- ${CSV_PATH}\n- ${JSON_PATH}\n- ${REVIEW_PATH}\n- ${FLASHCARD_PATH}`);
  await browser.close();
  rl.close();
}

main().catch(async (err) => {
  console.error(err);
  rl.close();
  process.exit(1);
});
