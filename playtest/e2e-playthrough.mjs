import { chromium } from "../ai900_practice_assessment_logger/node_modules/playwright/index.mjs";

const url = process.env.HORIZON_ARCHIVE_URL || "http://127.0.0.1:5174/";
const saveKey = "horizon-archive-prologue-v1";
const browser = await chromium.launch({ headless: true });

try {
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
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

  await openQuestion();
  await answer('print("SIGNAL  FOUND")');
  await page.getByText("Syntax or value mismatch", { exact: false }).waitFor();
  await answer(" print ( 'SIGNAL FOUND' ) ");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.locator('main[data-scene="ruins"]').waitFor();

  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  await page.locator('main[data-scene="ruins"]').waitFor();

  await openQuestion();
  await answer('pilot_name="MARTIN"');
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.locator('main[data-scene="automaton"]').waitFor();
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

  console.log(JSON.stringify({
    title: true,
    forgedSaveBlocked: true,
    wrongAnswerRecovery: true,
    persistence: true,
    questions: ["HA-PY-001", "HA-PY-002", "HA-PY-003"],
    credits: true,
  }));
} finally {
  await browser.close();
}
