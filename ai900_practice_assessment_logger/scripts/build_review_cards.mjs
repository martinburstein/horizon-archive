import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(SCRIPT_DIR, "..");
const JSON_PATH = path.join(ROOT_DIR, "output", "ai900_practice_session.json");
const FLASHCARD_PATH = path.join(ROOT_DIR, "output", "ai900_flashcard_prompts.md");

function loadRows() {
  if (!fs.existsSync(JSON_PATH)) {
    throw new Error("No session log found. Run the practice logger first.");
  }

  const raw = fs.readFileSync(JSON_PATH, "utf8").replace(/^\uFEFF/, "");
  const rows = JSON.parse(raw);
  if (!Array.isArray(rows)) {
    throw new Error("Session log is not a valid array.");
  }
  return rows;
}

function buildCards(rows) {
  const candidates = rows.filter(
    (row) => row.needs_review === "yes" || row.result === "incorrect"
  );

  const cards = candidates.length ? candidates : rows;

  return [
    "# AI-900 Flashcard Prompts",
    "",
    "These prompts are generated only from topic tags and Martin's own takeaways.",
    "",
    ...cards.map((row) => {
      const tags = row.topic_tags?.join(", ") || row.tags?.join(", ") || "general_ai900";
      const back = row.user_takeaway || row.takeaway || "Review the related Microsoft Learn concepts for this topic.";
      return [
        `## Prompt ${row.question_number}`,
        "",
        `Front: What should I remember for AI-900 topics ${tags}?`,
        `Back: ${back}`,
        ""
      ].join("\n");
    })
  ].join("\n");
}

const rows = loadRows();
fs.writeFileSync(FLASHCARD_PATH, buildCards(rows), "utf8");
console.log(`Wrote ${FLASHCARD_PATH}`);
