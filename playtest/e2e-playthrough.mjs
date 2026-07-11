import { chromium } from "../ai900_practice_assessment_logger/node_modules/playwright/index.mjs";

const url = process.env.HORIZON_ARCHIVE_URL || "http://127.0.0.1:5174/";
const saveKey = "horizon-archive-prologue-v1";
const browser = await chromium.launch({ headless: true });

try {
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  const runtimeErrors = [];
  page.on("pageerror", (error) => runtimeErrors.push(`page: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error") runtimeErrors.push(`console: ${message.text()}`);
  });
  await page.goto(url);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.locator('[data-playtest-marker="TITLE_SCREEN"]').waitFor();

  await page.evaluate(
    ({ key }) => localStorage.setItem(key, JSON.stringify({ sceneIndex: 2, completed: ["automaton", "ruins", "meadow"] })),
    { key: saveKey },
  );
  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  if (await page.locator('[data-playtest-marker="CREDITS_REACHED"]').count()) throw new Error("Forged save reached credits");
  await page.locator('main[data-scene="meadow"]').waitFor();

  await page.goto(url);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.getByRole("button", { name: "New expedition" }).click();

  const openQuestion = async () => {
    await page.getByRole("button", { name: "USE", exact: true }).click();
    await page.locator("button.hotspot").click();
  };
  const answer = async (value) => {
    await page.locator("#python-entry").fill(value);
    await page.getByRole("button", { name: "Run", exact: true }).click();
  };

  await page.getByRole("button", { name: "USE", exact: true }).click();
  await page.locator("button.hotspot").click();
  await page.locator('[data-terminal-exercise="terminal-l0101-independent-run"]').waitFor();
  await page.getByRole("button", { name: "Run Python", exact: true }).click();
  await page.getByText("wrong value", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Reveal progressive hint", exact: true }).click();
  const sessionCode = `${terminalSessionMarker()}
message = "Horizon Archive online."
signal = 1

print(message)
print("Python signal:", signal)`;
  await page.locator("#terminal-code").fill(sessionCode);
  await page.getByRole("button", { name: "Run Python", exact: true }).click();
  await page.getByText("wrong value", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Close Terminal", exact: true }).click();
  await page.locator('[data-terminal-exercise="terminal-l0101-independent-run"]').waitFor({ state: "detached" });
  await page.locator("button.hotspot").click();
  await page.locator('[data-terminal-exercise="terminal-l0101-independent-run"]').waitFor();
  if (await page.locator("#terminal-code").inputValue() !== sessionCode) throw new Error("Terminal code was reset after close/reopen");
  await page.getByText("wrong value", { exact: false }).waitFor();
  await page.getByText("Change the number assigned to signal", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Reveal next hint", exact: true }).waitFor();
  const inProgressSave = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (!inProgressSave) throw new Error("Terminal attempt evidence was not saved");
  if (JSON.parse(inProgressSave).exerciseEvidence?.attempts !== 2) throw new Error("Terminal attempt count was not preserved after close/reopen");
  if (inProgressSave.includes("SESSION_ONLY_SENTINEL") || inProgressSave.includes("Change the number assigned to signal") || inProgressSave.includes("wrong value")) {
    throw new Error("Session-only Terminal content leaked into localStorage");
  }
  await page.locator("#terminal-code").fill(`message = "Horizon Archive online."
signal = 2
learner = "PILOT"

print(message)
print("Python signal:", signal)
print("Operator:", learner)`);
  await page.getByRole("button", { name: "Run Python", exact: true }).click();
  await page.getByText("Operator: PILOT", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Acknowledge completion", exact: true }).click();
  const evidence = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).exerciseEvidence, { key: saveKey });
  if (evidence?.lessonId !== "L-01-01" || evidence?.activityId !== "A-L0101-3" || evidence?.attempts !== 3 || !evidence?.hintUsed || !evidence?.completed) {
    throw new Error(`Terminal mastery evidence incomplete: ${JSON.stringify(evidence)}`);
  }
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.locator('main[data-scene="ruins"]').waitFor();

  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  await page.locator('main[data-scene="ruins"]').waitFor();

  await openQuestion();
  await page.locator('[data-terminal-exercise="EX-L0201-WORKLOAD-SORT"]').waitFor();
  await page.locator('input[name="workload-choice"][value="s"]').check();
  await page.getByRole("button", { name: "Check card", exact: true }).click();
  await page.getByText("Level 1 cue", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Reveal contrast hint", exact: true }).click();
  await page.getByText("Level 2 contrast", { exact: false }).waitFor();
  await page.locator('input[name="workload-choice"][value="a"]').check();
  await page.getByRole("button", { name: "Close Terminal", exact: true }).click();
  await page.locator('[data-terminal-exercise="EX-L0201-WORKLOAD-SORT"]').waitFor({ state: "detached" });
  await page.locator("button.hotspot").click();
  await page.locator('[data-terminal-exercise="EX-L0201-WORKLOAD-SORT"]').waitFor();
  if (!await page.locator('input[name="workload-choice"][value="a"]').isChecked()) throw new Error("Workload draft selection reset after close/reopen");
  await page.getByText("Level 2 contrast", { exact: false }).waitFor();
  const workloadDraftSave = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (!workloadDraftSave || JSON.parse(workloadDraftSave).workloadEvidence?.attemptCount !== 1) throw new Error("Workload attempt evidence missing");
  if (workloadDraftSave.includes("Draft a concise reply") || workloadDraftSave.includes('"selected"') || workloadDraftSave.includes('"a"')) {
    throw new Error("Temporary Workload Sort response leaked into localStorage");
  }
  await page.getByRole("button", { name: "Check card", exact: true }).click();
  await page.getByText("Level 3 worked contrast", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Next card", exact: true }).click();

  const primaryAnswers = ["a", "t", "s", "v", "i", "v", "t", "src", "out", "ev", "session"];
  for (let index = 0; index < primaryAnswers.length; index += 1) {
    await page.locator(`input[name="workload-choice"][value="${primaryAnswers[index]}"]`).check();
    await page.getByRole("button", { name: "Check card", exact: true }).click();
    await page.getByText("Correct. Classification confirmed.", { exact: true }).waitFor();
    await page.getByRole("button", { name: index === primaryAnswers.length - 1 ? "View result" : "Next card", exact: true }).click();
  }
  await page.getByText("11 / 12", { exact: true }).waitFor();
  await page.getByText("generative-is-agentic", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Load fresh retry form", exact: true }).click();
  await page.getByText("retry", { exact: true }).waitFor();

  const retryAnswers = ["g", "a", "t", "s", "v", "i", "v", "t", "src", "out", "ev", "session"];
  for (let index = 0; index < retryAnswers.length; index += 1) {
    await page.locator(`input[name="workload-choice"][value="${retryAnswers[index]}"]`).check();
    await page.getByRole("button", { name: "Check card", exact: true }).click();
    await page.getByRole("button", { name: index === retryAnswers.length - 1 ? "View result" : "Next card", exact: true }).click();
  }
  await page.getByRole("heading", { name: "12 / 12", exact: true }).waitFor();
  await page.getByRole("radio", { name: "Medium", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge mastery", exact: true }).click();
  const workloadEvidence = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).workloadEvidence, { key: saveKey });
  if (workloadEvidence?.exerciseId !== "EX-L0201-WORKLOAD-SORT" || workloadEvidence?.attemptCount !== 25 || workloadEvidence?.hintLevel !== 3 || workloadEvidence?.confidence !== "medium" || workloadEvidence?.masteryStatus !== "mastered") {
    throw new Error(`Workload mastery evidence incomplete: ${JSON.stringify(workloadEvidence)}`);
  }
  if ("selected" in workloadEvidence || "freeFormResponse" in workloadEvidence) throw new Error("Response text persisted in workload evidence");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.locator('main[data-scene="automaton"]').waitFor();
  if (await page.locator('[data-terminal-exercise="EX-L0201-WORKLOAD-SORT"]').count()) throw new Error("Workload session survived a scene transition");
  await openQuestion();
  await answer("archive_open = True");
  await page.getByText("Continuity confirmed. Witness incomplete.", { exact: false }).waitFor();

  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  if (await page.locator('[data-playtest-marker="CREDITS_REACHED"]').count()) throw new Error("Pending final reveal skipped to credits");
  await page.locator('main[data-scene="automaton"]').waitFor();
  await page.getByText("Continuity confirmed. Witness incomplete.", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Descend to the city", exact: true }).click();
  await page.locator('[data-playtest-marker="CREDITS_REACHED"]').waitFor();
  if (runtimeErrors.length) throw new Error(`Runtime errors detected: ${runtimeErrors.join(" | ")}`);

  console.log(JSON.stringify({
    title: true,
    forgedSaveBlocked: true,
    wrongAnswerRecovery: true,
    terminalExercise: true,
    terminalCloseReopen: true,
    terminalSessionPrivacy: true,
    workloadSortExercise: true,
    workloadCloseReopen: true,
    workloadFreshRetry: true,
    workloadCriticalOverride: true,
    workloadSceneReset: true,
    masteryEvidence: true,
    persistence: true,
    runtimeErrors: false,
    questions: ["HA-PY-001", "HA-AI901-001", "HA-PY-003"],
    credits: true,
  }));
} finally {
  await browser.close();
}

function terminalSessionMarker() {
  return "# SESSION_ONLY_SENTINEL";
}
