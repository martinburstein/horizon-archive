import { chromium } from "../ai900_practice_assessment_logger/node_modules/playwright/index.mjs";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import referenceEvidenceOutput from "../curriculum/lessons/L-05-07/reference_output.json" with { type: "json" };
import referenceResponsibleAI from "../curriculum/lessons/L-02-02/reference_primary_answers.json" with { type: "json" };
import referenceResponsibleAITransfer from "../curriculum/lessons/L-02-02/reference_transfer_answers.json" with { type: "json" };
import referenceModelChoicePrimary from "../curriculum/lessons/L-02-03/reference_primary_answers.json" with { type: "json" };
import referenceModelChoiceTransfer from "../curriculum/lessons/L-02-03/reference_transfer_answers.json" with { type: "json" };

const url = process.env.HORIZON_ARCHIVE_URL || "http://127.0.0.1:5174/";
const saveKey = "horizon-archive-prologue-v1";
const calibrationKeyboardHelp = "Tab moves through this workspace. Shift+Tab moves back. Escape closes without discarding this session.";
const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const qaPath = (path) => resolve(repositoryRoot, "playtest", path.replace(/^playtest[\\/]/, ""));
const referenceStructuredPrimary = readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-03-01/reference_primary.py"), "utf8");
const referenceStructuredTransfer = readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-03-01/reference_transfer.py"), "utf8");
const referenceControlPrimary = readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-03-02/reference_primary.py"), "utf8");
const referenceControlTransfer = readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-03-02/reference_transfer.py"), "utf8");
const referenceClientPrimary = readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-03-03/reference_primary.py"), "utf8");
const referenceClientTransfer = readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-03-03/reference_transfer.py"), "utf8");
const referenceTextPrimary = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-04-01/reference_primary_answers.json"), "utf8"));
const referenceTextTransfer = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-04-01/reference_transfer_answers.json"), "utf8"));
const referenceSpeechPrimary = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-04-02/reference_primary_answers.json"), "utf8"));
const referenceSpeechTransfer = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-04-02/reference_transfer_answers.json"), "utf8"));
const referenceVisualPrimary = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-04-03/reference_primary_answers.json"), "utf8"));
const referenceVisualTransfer = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-04-03/reference_transfer_answers.json"), "utf8"));
const referenceExtractionPrimary = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-04-04/reference_primary_answers.json"), "utf8"));
const referenceExtractionTransfer = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-04-04/reference_transfer_answers.json"), "utf8"));
const referencePortalPrimary = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-01/reference_primary_answers.json"), "utf8"));
const referencePortalTransfer = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-01/reference_transfer_answers.json"), "utf8"));
const referencePromptPrimary = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-02/reference_primary_answers.json"), "utf8"));
const referencePromptTransfer = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-02/reference_transfer_answers.json"), "utf8"));
const referenceBoundaryPrimary = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-03/reference_primary_answers.json"), "utf8"));
const referenceBoundaryTransfer = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-03/reference_transfer_answers.json"), "utf8"));
const referenceSingleAgentPrimary = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-04/reference_primary_answers.json"), "utf8"));
const referenceSingleAgentTransfer = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-04/reference_transfer_answers.json"), "utf8"));
const referenceTextSpeechPrimary = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-05/reference_primary_answers.json"), "utf8"));
const referenceTextSpeechTransfer = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-05/reference_transfer_answers.json"), "utf8"));
const referenceVisualPatternPrimary = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-06/reference_primary_answers.json"), "utf8"));
const referenceVisualPatternTransfer = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-06/reference_transfer_answers.json"), "utf8"));
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

  await assertPixelMeadow(page, "desktop", "locked", "locked");
  await capturePixelMeadow(page, "playtest/glass-meadow-pixel-desktop-qa.png");
  await verifyMeadowPixelHotspots(page, "desktop");
  await page.setViewportSize({ width: 320, height: 900 });
  await assertPixelMeadow(page, "320px narrow", "locked", "locked");
  await capturePixelMeadow(page, "playtest/glass-meadow-pixel-narrow-qa.png");
  await verifyMeadowPixelHotspots(page, "320px narrow");
  await page.setViewportSize({ width: 1600, height: 900 });

  const openQuestion = async () => {
    await page.getByRole("button", { name: "USE", exact: true }).click();
    await page.locator('button.hotspot[data-primary-hotspot="true"]').click();
  };
  const answer = async (value) => {
    await page.locator("#python-entry").fill(value);
    await page.getByRole("button", { name: "Run", exact: true }).click();
  };

  await page.getByRole("button", { name: "USE", exact: true }).click();
  await page.locator('button.hotspot[data-hotspot-id="route-marker"]').click();
  await page.getByText("Complete the Petal Terminal first", { exact: false }).waitFor();
  if (await page.locator('[data-terminal-exercise="EX-L0102-ROUTE-MARKER"]').count()) throw new Error("Route marker opened before L-01-01");
  await page.locator('button.hotspot[data-primary-hotspot="true"]').click();
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
  await page.keyboard.press("Escape");
  await page.locator('[data-terminal-exercise="terminal-l0101-independent-run"]').waitFor({ state: "detached" });
  await page.locator('button.hotspot[data-primary-hotspot="true"]:focus').waitFor();
  await page.locator('button.hotspot[data-primary-hotspot="true"]').press("Enter");
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
  if (await page.getByRole("button", { name: "Continue", exact: true }).count()) throw new Error("L-01-01 skipped the required route marker");
  await assertPixelMeadow(page, "Petal complete", "completed", "awake");

  await page.locator('button.hotspot[data-hotspot-id="route-marker"]').hover();
  await page.locator(".scene-frame").screenshot({ path: qaPath("route-marker-hotspot-desktop-qa.png") });
  await page.locator('button.hotspot[data-hotspot-id="route-marker"]').click();
  await page.locator('[data-terminal-exercise="EX-L0102-ROUTE-MARKER"]').waitFor();
  const routeDraft = `# ROUTE_SESSION_ONLY_SENTINEL\n${routePrimaryReference().replace("channel_count = 3", 'channel_count = "3"')}`;
  await page.locator("#route-source-editor").fill(routeDraft);
  await page.getByLabel("Predicted output line 1", { exact: true }).fill("DROWNED ARCHIVE");
  await page.getByLabel("Predicted output line 2", { exact: true }).fill("LOCAL SURFACE 3");
  await page.getByRole("button", { name: "Run route form", exact: true }).click();
  await page.getByRole("status").getByText("E_CHANNEL_TYPE", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Reveal next trace", exact: true }).click();
  await page.getByText("Assignment trace", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Close Terminal", exact: true }).click();
  await page.locator('button.hotspot[data-hotspot-id="route-marker"]').click();
  await page.locator('[data-terminal-exercise="EX-L0102-ROUTE-MARKER"]').waitFor();
  if (await page.locator("#route-source-editor").inputValue() !== routeDraft) throw new Error("Route source reset after same-scene close/reopen");
  if (await page.getByLabel("Predicted output line 2", { exact: true }).inputValue() !== "LOCAL SURFACE 3") throw new Error("Route prediction reset after close/reopen");
  await page.getByText("Assignment trace", { exact: false }).waitFor();
  const routeDraftSave = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (!routeDraftSave || JSON.parse(routeDraftSave).routeMarkerMastery?.attemptCount !== 1) throw new Error("Route attempt evidence missing");
  if (routeDraftSave.includes("ROUTE_SESSION_ONLY_SENTINEL") || routeDraftSave.includes("LOCAL SURFACE 3")) {
    throw new Error("Route working source, prediction, or output leaked into localStorage");
  }
  await page.screenshot({ path: qaPath("route-marker-terminal-desktop-qa.png"), fullPage: true });
  await page.setViewportSize({ width: 320, height: 900 });
  await page.screenshot({ path: qaPath("route-marker-terminal-narrow-qa.png"), fullPage: true });
  await page.locator("#route-source-editor").scrollIntoViewIfNeeded();
  if (!await page.locator("#route-source-editor").isVisible()) throw new Error("Route source editor unreachable at 320px");
  await page.setViewportSize({ width: 1600, height: 900 });

  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  await page.locator('main[data-scene="meadow"]').waitFor();
  await page.getByRole("button", { name: "USE", exact: true }).click();
  await page.locator('button.hotspot[data-hotspot-id="route-marker"]').click();
  await page.locator('[data-terminal-exercise="EX-L0102-ROUTE-MARKER"]').waitFor();
  if (!await page.locator("#route-source-editor").inputValue().then((value) => value.includes('site_name = "TODO"') && !value.includes("ROUTE_SESSION_ONLY_SENTINEL"))) {
    throw new Error("Full reload did not restore a clean route form");
  }
  if (await page.getByLabel("Predicted output line 1", { exact: true }).inputValue()) throw new Error("Prediction survived full reload");
  const routeAfterReload = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).routeMarkerMastery, { key: saveKey });
  if (routeAfterReload?.attemptCount !== 1) throw new Error("Sanitized route evidence did not survive reload");

  await page.locator("#route-source-editor").fill(routePrimaryReference());
  await page.getByLabel("Predicted output line 1", { exact: true }).fill("DROWNED ARCHIVE");
  await page.getByLabel("Predicted output line 2", { exact: true }).fill("LOCAL SURFACE 3");
  await page.getByRole("button", { name: "Run route form", exact: true }).click();
  await page.getByText("8/8", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Load fresh transfer form", exact: true }).click();
  await page.locator("#route-source-editor").fill(routeTransferReference());
  await page.getByLabel("Predicted output line 1", { exact: true }).fill("ROUTE VERIFIED");
  await page.getByLabel("Predicted output line 2", { exact: true }).fill("ROUTE VERIFIED 3");
  await page.getByRole("button", { name: "Run route form", exact: true }).click();
  await page.getByText("prediction 1/2", { exact: false }).waitFor();
  await page.getByLabel("Predicted output line 1", { exact: true }).fill("DROWNED ARCHIVE");
  await page.getByRole("button", { name: "Run route form", exact: true }).click();
  await page.getByRole("button", { name: "Begin retrieval gate", exact: true }).click();
  await page.getByLabel("Retrieval answer 1", { exact: true }).selectOption("same");
  await page.getByLabel("Retrieval answer 2", { exact: true }).selectOption("no");
  await page.getByLabel("Retrieval answer 3", { exact: true }).selectOption("latest");
  await page.getByLabel("Retrieval answer 4", { exact: true }).selectOption("reuse");
  await page.getByRole("button", { name: "Check retrieval", exact: true }).click();
  await page.getByRole("status").getByText("3/4", { exact: false }).waitFor();
  await page.getByLabel("Retrieval answer 1", { exact: true }).selectOption("number_string");
  await page.getByRole("button", { name: "Check retrieval", exact: true }).click();
  await page.getByRole("heading", { name: "Primary 8/8 · Transfer 8/8 · Retrieval 4/4", exact: true }).waitFor();
  await page.getByRole("radio", { name: "Medium", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge route mastery", exact: true }).click();
  await page.getByRole("button", { name: "Start Calibration", exact: true }).waitFor();
  await page.getByRole("button", { name: "Start Calibration", exact: true }).evaluate((element) => {
    if (document.activeElement !== element) throw new Error("Route completion did not move focus to the next meaningful action");
  });
  await assertPixelMeadow(page, "route complete", "completed", "completed");
  await capturePixelMeadow(page, "playtest/glass-meadow-pixel-completed-qa.png");
  const routeMastery = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).routeMarkerMastery, { key: saveKey });
  if (routeMastery?.exerciseId !== "EX-L0102-ROUTE-MARKER" || routeMastery?.attemptCount !== 6 || routeMastery?.hintLevel !== 2 || routeMastery?.confidence !== "medium" || routeMastery?.masteryStatus !== "mastered") {
    throw new Error(`Route marker mastery incomplete: ${JSON.stringify(routeMastery)}`);
  }
  if (routeMastery.predictionCorrectness?.primary?.some((value) => !value) || routeMastery.predictionCorrectness?.transfer?.some((value) => !value)) throw new Error("Final prediction correctness incomplete");
  if (Object.values(routeMastery.checkResults?.retrieval || {}).some((value) => !value)) throw new Error("Retrieval gate incomplete");
  if (["source", "prediction", "output", "notes", "answers"].some((key) => key in routeMastery)) throw new Error("Route working state persisted in mastery evidence");

  await page.getByRole("button", { name: "Start Calibration", exact: true }).click();
  await page.locator('[data-terminal-exercise="EX-L0103-CALIBRATION-DEBUG"]').waitFor();
  await page.getByText(calibrationKeyboardHelp, { exact: true }).waitFor();
  await page.getByRole("button", { name: "Exit Calibration", exact: true }).waitFor();
  await page.getByText("ROUTE OPEN", { exact: false }).first().waitFor();
  await page.getByText("NameError", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Exit Calibration", exact: true }).click();
  await assertPixelMeadow(page, "calibration exit", "completed", "completed");
  await page.getByRole("button", { name: "Continue", exact: true }).waitFor();
  await page.getByRole("button", { name: "Resume Calibration", exact: true }).click();
  await page.getByText(calibrationKeyboardHelp, { exact: true }).waitFor();
  await page.getByText("NameError", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Record pre-edit diagnosis", exact: true }).click();
  await page.getByLabel("Calibration error type", { exact: true }).selectOption("NameError");
  await page.getByLabel("Calibration line number", { exact: true }).selectOption("2");
  await page.getByLabel("Calibration named token", { exact: true }).selectOption("route_lable");
  await page.getByRole("button", { name: "Record diagnosis", exact: true }).click();
  await page.locator("#calibration-source").fill('route_label = "ROUTE VERIFIED"\nprint(route_lable)\n# CALIBRATION_SESSION_ONLY');
  await page.getByRole("button", { name: "Run repaired copy", exact: true }).click();
  await page.getByText("REPAIR AND RERUN", { exact: false }).waitFor();
  await page.getByText("ROUTE OPEN", { exact: false }).first().waitFor();
  await page.getByRole("button", { name: "Open targeted hint", exact: true }).click();
  await page.getByText("Compare route_lable", { exact: false }).waitFor();
  await page.screenshot({ path: qaPath("calibration-terminal-desktop-qa.png"), fullPage: true });
  await page.setViewportSize({ width: 320, height: 900 });
  await page.screenshot({ path: qaPath("calibration-terminal-narrow-qa.png"), fullPage: true });
  await page.getByRole("button", { name: "Exit Calibration", exact: true }).click();
  await assertPixelMeadow(page, "calibration failed exit", "completed", "completed");
  await page.getByRole("button", { name: "Resume Calibration", exact: true }).click();
  await page.getByText(calibrationKeyboardHelp, { exact: true }).waitFor();
  await page.getByRole("button", { name: "source", exact: true }).click();
  if (!(await page.locator("#calibration-source").inputValue()).includes("CALIBRATION_SESSION_ONLY")) throw new Error("Exit Calibration discarded in-progress source");
  await page.keyboard.press("Escape");
  await page.locator('[data-terminal-exercise="EX-L0103-CALIBRATION-DEBUG"]').waitFor({ state: "detached" });
  await page.getByRole("button", { name: "Resume Calibration", exact: true }).click();
  await page.getByText(calibrationKeyboardHelp, { exact: true }).waitFor();
  if (!(await page.locator("#calibration-source").inputValue()).includes("CALIBRATION_SESSION_ONLY")) throw new Error("Escape discarded in-progress source");
  await page.getByRole("button", { name: "Exit Calibration", exact: true }).click();
  const calibrationDraftSave = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (!calibrationDraftSave || JSON.parse(calibrationDraftSave).calibrationMastery?.attemptCount !== 1) throw new Error("Calibration attempt evidence missing");
  if (calibrationDraftSave.includes("CALIBRATION_SESSION_ONLY") || calibrationDraftSave.includes("NameError: name") || calibrationDraftSave.includes("REPAIR AND RERUN")) throw new Error("Calibration working state leaked into localStorage");
  await page.setViewportSize({ width: 1600, height: 900 });

  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  await page.locator('main[data-scene="meadow"]').waitFor();
  await assertPixelMeadow(page, "calibration reload", "completed", "completed");
  await page.getByRole("button", { name: "Start Calibration", exact: true }).click();
  await page.getByText("NameError", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Record pre-edit diagnosis", exact: true }).click();
  await page.getByLabel("Calibration error type", { exact: true }).selectOption("NameError");
  await page.getByLabel("Calibration line number", { exact: true }).selectOption("2");
  await page.getByLabel("Calibration named token", { exact: true }).selectOption("route_lable");
  await page.getByRole("button", { name: "Record diagnosis", exact: true }).click();
  if ((await page.locator("#calibration-source").inputValue()).includes("CALIBRATION_SESSION_ONLY")) throw new Error("Calibration source survived reload");
  await page.locator("#calibration-source").fill('route_label = "ROUTE VERIFIED"\nprint(route_label)');
  await page.getByRole("button", { name: "Run repaired copy", exact: true }).click();
  await page.getByText("FORM PASS", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Load indentation form", exact: true }).click();
  await page.getByText("IndentationError", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Record pre-edit diagnosis", exact: true }).click();
  await page.getByLabel("Calibration error type", { exact: true }).selectOption("IndentationError");
  await page.getByLabel("Calibration line number", { exact: true }).selectOption("3");
  await page.getByLabel("Calibration named token", { exact: true }).selectOption("print");
  await page.getByRole("button", { name: "Record diagnosis", exact: true }).click();
  await page.locator("#calibration-source").fill('route_open = True\nif route_open:\n    print("CALIBRATION READY")');
  await page.getByRole("button", { name: "Run repaired copy", exact: true }).click();
  await page.getByRole("button", { name: "Begin retrieval", exact: true }).click();
  await page.getByLabel("Calibration retrieval 1", { exact: true }).selectOption("first");
  await page.getByLabel("Calibration retrieval 2", { exact: true }).selectOption("location");
  await page.getByLabel("Calibration retrieval 3", { exact: true }).selectOption("test");
  await page.getByLabel("Calibration retrieval 4", { exact: true }).selectOption("open");
  await page.getByRole("button", { name: "Check retrieval", exact: true }).click();
  await page.getByText("3/4", { exact: false }).waitFor();
  await page.getByLabel("Calibration retrieval 1", { exact: true }).selectOption("last");
  await page.getByRole("button", { name: "Check retrieval", exact: true }).click();
  await page.getByRole("radio", { name: "high", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge calibration mastery", exact: true }).click();
  const calibrationMastery = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).calibrationMastery, { key: saveKey });
  if (calibrationMastery?.exerciseId !== "EX-L0103-CALIBRATION-DEBUG" || calibrationMastery?.attemptCount !== 5 || calibrationMastery?.hintLevel !== 2 || calibrationMastery?.masteryStatus !== "mastered" || calibrationMastery?.misconceptionTags?.length) throw new Error(`Calibration mastery incomplete: ${JSON.stringify(calibrationMastery)}`);
  const calibrationRetrievalKeys = Object.keys(calibrationMastery.checkResults?.retrieval || {});
  if (calibrationRetrievalKeys.length !== 4 || calibrationRetrievalKeys.some((key) => /tab|escape|focus|modal|inert/i.test(key))) throw new Error("Keyboard orientation leaked into graded retrieval");
  await assertPixelMeadow(page, "calibration mastered", "completed", "completed");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.locator('main[data-scene="ruins"]').waitFor();

  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  await page.locator('main[data-scene="ruins"]').waitFor();

  await assertVerbSelectionAndDispatch(page, 640, 480, "canonical");
  await assertVerbSelectionAndDispatch(page, 320, 240, "narrow");
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.getByRole("button", { name: "USE", exact: true }).click();
  for (const [width, height, label] of [[640, 480, "640x480"], [1280, 960, "1280x960"], [320, 240, "320x240"], [1600, 900, "1600x900"]]) {
    await page.setViewportSize({ width, height });
    await assertRuinsTerminalAlignment(page, label);
    await page.screenshot({ path: qaPath(`ab01-canonical-${label}.png`) });
  }
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.getByRole("button", { name: "use grounded Workload Sort Terminal", exact: true }).hover();
  await page.locator(".scene-frame").screenshot({ path: qaPath("drowned-archive-terminal-desktop-qa.png") });
  await activateRuinsTerminal(page, "pointer");
  await page.getByRole("button", { name: "Close Terminal", exact: true }).click();
  await activateRuinsTerminal(page, "keyboard");
  await page.getByRole("button", { name: "Close Terminal", exact: true }).click();

  await page.setViewportSize({ width: 320, height: 240 });
  await assertRuinsTerminalAlignment(page, "320x240");
  await page.getByRole("button", { name: "use grounded Workload Sort Terminal", exact: true }).hover();
  await page.locator(".scene-frame").screenshot({ path: qaPath("drowned-archive-terminal-narrow-qa.png") });
  await activateRuinsTerminal(page, "pointer");
  await page.getByRole("button", { name: "Close Terminal", exact: true }).click();
  await activateRuinsTerminal(page, "keyboard");
  await page.getByRole("button", { name: "Close Terminal", exact: true }).click();
  await page.setViewportSize({ width: 1600, height: 900 });

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
  await page.locator('button.hotspot[data-primary-hotspot="true"]').click();
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

  await page.getByRole("button", { name: "Start Responsible AI", exact: true }).click();
  await page.locator('[data-terminal-exercise="EX-L0202-RESPONSIBLE-AI"]').waitFor();
  await page.getByText("Course-authored practice scenario", { exact: false }).waitFor();
  await page.locator(".responsible-ai-boundary", { hasText: "not a Microsoft exam question" }).waitFor();
  await page.getByLabel("Responsible AI principle", { exact: true }).selectOption("transparency");
  await page.getByLabel("Responsible AI stakeholder", { exact: true }).selectOption("hiring_vendor");
  await page.getByLabel("Responsible AI mitigation", { exact: true }).selectOption("publish_ai_disclosure_only");
  await page.getByLabel("Responsible AI owner", { exact: true }).selectOption("model_itself");
  await page.getByRole("button", { name: "Check four-part response", exact: true }).click();
  await page.getByRole("status").getByText("0/4", { exact: false }).waitFor();
  await page.getByText("Review principle", { exact: false }).waitFor();
  for (const dimension of ["principle", "stakeholder", "mitigation", "owner"]) {
    const field = page.getByLabel(`Responsible AI ${dimension}`, { exact: true });
    const feedbackId = `rai-${dimension}-feedback`;
    if (await field.getAttribute("aria-invalid") !== "true") throw new Error(`Responsible AI ${dimension} did not expose invalid state`);
    if (await field.getAttribute("aria-describedby") !== feedbackId) throw new Error(`Responsible AI ${dimension} was not associated with its remediation`);
    await page.locator(`#${feedbackId}`).waitFor();
  }
  await page.getByRole("button", { name: "Reveal next remediation step", exact: true }).click();
  await page.getByText("Compare the nearest principles", { exact: false }).waitFor();
  await page.screenshot({ path: qaPath("responsible-ai-primary-qa.png"), fullPage: true });
  await page.getByRole("button", { name: "Exit Practice", exact: true }).click();
  await page.getByText("SYSTEM // EXPEDITION STATE", { exact: true }).waitFor();
  await page.getByRole("button", { name: "Resume Responsible AI", exact: true }).click();
  if (await page.getByLabel("Responsible AI mitigation", { exact: true }).inputValue() !== "publish_ai_disclosure_only") throw new Error("Responsible AI session choices reset after close/reopen");
  const raiDraftSave = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (!raiDraftSave || JSON.parse(raiDraftSave).responsibleAIEvidence?.attemptCount !== 1) throw new Error("Responsible AI attempt evidence missing");
  if (raiDraftSave.includes("publish_ai_disclosure_only") || raiDraftSave.includes("hiring_vendor") || raiDraftSave.includes("resume screener")) throw new Error("Responsible AI working choices or display leaked into localStorage");

  for (const scenarioId of Object.keys(referenceResponsibleAI)) {
    const answer = referenceResponsibleAI[scenarioId];
    await page.getByLabel("Responsible AI principle", { exact: true }).selectOption(answer.principle);
    await page.getByLabel("Responsible AI stakeholder", { exact: true }).selectOption(answer.stakeholder);
    await page.getByLabel("Responsible AI mitigation", { exact: true }).selectOption(answer.mitigation);
    await page.getByLabel("Responsible AI owner", { exact: true }).selectOption(answer.owner);
    await page.getByRole("button", { name: "Check four-part response", exact: true }).click();
    await page.getByText("Scenario confirmed", { exact: false }).waitFor();
    await page.getByRole("button", { name: scenarioId === "P06" ? "View primary result" : "Next scenario", exact: true }).click();
  }
  await page.getByRole("heading", { name: "24 / 24 dimensions", exact: true }).waitFor();
  await page.getByText("Primary course-authored form complete", { exact: false }).waitFor();
  await page.getByRole("radio", { name: "high", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge primary form", exact: true }).click();
  await page.getByText("901 TEACHER // SOURCE-GROUNDED COURSE", { exact: true }).waitFor();
  const responsibleAIEvidence = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).responsibleAIEvidence, { key: saveKey });
  if (responsibleAIEvidence?.exerciseId !== "EX-L0202-RESPONSIBLE-AI" || responsibleAIEvidence?.attemptCount !== 7 || responsibleAIEvidence?.hintLevel !== 2 || responsibleAIEvidence?.masteryStatus !== "primary_complete") throw new Error(`Responsible AI primary evidence incomplete: ${JSON.stringify(responsibleAIEvidence)}`);
  if (Object.keys(responsibleAIEvidence.dimensionCorrectness || {}).length !== 6 || Object.values(responsibleAIEvidence.dimensionCorrectness).some((dimensions) => Object.keys(dimensions).length !== 4 || Object.values(dimensions).some((value) => value !== true))) throw new Error("Responsible AI strict primary gate incomplete");
  if (["response", "choices", "reasoning", "scenarioNotes", "runtimeDisplay"].some((key) => key in responsibleAIEvidence)) throw new Error("Responsible AI private session data persisted");

  await page.getByRole("button", { name: "Start Responsible AI Transfer", exact: true }).click();
  await page.locator(".pane-label", { hasText: "FRESH TRANSFER" }).waitFor();
  await page.locator(".responsible-ai-boundary", { hasText: "not a Microsoft exam question" }).waitFor();
  await page.getByLabel("Responsible AI principle", { exact: true }).selectOption("transparency");
  await page.getByLabel("Responsible AI stakeholder", { exact: true }).selectOption("camera_manufacturer");
  await page.getByLabel("Responsible AI mitigation", { exact: true }).selectOption("add_security_banner");
  await page.getByLabel("Responsible AI owner", { exact: true }).selectOption("model_itself");
  await page.getByRole("button", { name: "Check four-part response", exact: true }).click();
  await page.getByRole("status").getByText("0/4", { exact: false }).waitFor();
  await page.screenshot({ path: qaPath("responsible-ai-transfer-remediation-qa.png"), fullPage: true });
  const primaryPreservedDuringTransfer = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).responsibleAIEvidence, { key: saveKey });
  if (primaryPreservedDuringTransfer?.masteryStatus !== "primary_complete") throw new Error("Transfer remediation erased the completed primary gate");
  for (const scenarioId of Object.keys(referenceResponsibleAITransfer)) {
    const answer = referenceResponsibleAITransfer[scenarioId];
    await page.getByLabel("Responsible AI principle", { exact: true }).selectOption(answer.principle);
    await page.getByLabel("Responsible AI stakeholder", { exact: true }).selectOption(answer.stakeholder);
    await page.getByLabel("Responsible AI mitigation", { exact: true }).selectOption(answer.mitigation);
    await page.getByLabel("Responsible AI owner", { exact: true }).selectOption(answer.owner);
    await page.getByRole("button", { name: "Check four-part response", exact: true }).click();
    await page.getByText("Scenario confirmed", { exact: false }).waitFor();
    await page.getByRole("button", { name: scenarioId === "T06" ? "Begin closed-note explanation" : "Next scenario", exact: true }).click();
  }
  await page.getByRole("heading", { name: "Explain T06 without notes", exact: true }).waitFor();
  await page.getByText("SPEAKER: PILOT", { exact: false }).waitFor();
  await page.getByText("never saved", { exact: false }).waitFor();
  await page.getByLabel("Closed-note principle", { exact: true }).fill("transparency");
  await page.getByLabel("Closed-note stakeholder", { exact: true }).fill("people affected by moderation decisions");
  await page.getByLabel("Closed-note mitigation", { exact: true }).fill("assign appeals owner audit and remedy");
  await page.getByLabel("Closed-note owner", { exact: true }).fill("moderation model");
  await page.getByRole("button", { name: "Check my explanation", exact: true }).click();
  await page.getByRole("status").getByText("2/4", { exact: false }).waitFor();
  await page.screenshot({ path: qaPath("responsible-ai-closed-note-qa.png"), fullPage: true });
  assertDistinctCaptures([
    "responsible-ai-primary-qa.png",
    "responsible-ai-transfer-remediation-qa.png",
    "responsible-ai-closed-note-qa.png",
  ]);
  for (const dimension of ["principle", "owner"]) {
    const field = page.getByLabel(`Closed-note ${dimension}`, { exact: true });
    const feedbackId = `rai-explanation-${dimension}-feedback`;
    if (await field.getAttribute("aria-invalid") !== "true" || await field.getAttribute("aria-describedby") !== feedbackId) throw new Error(`Closed-note ${dimension} remediation was not field-associated`);
  }
  await page.getByLabel("Closed-note principle", { exact: true }).fill("accountability");
  await page.getByLabel("Closed-note owner", { exact: true }).fill("trust and safety lead");
  await page.getByRole("button", { name: "Exit Practice", exact: true }).click();
  await page.getByRole("button", { name: "Resume Responsible AI", exact: true }).click();
  if (await page.getByLabel("Closed-note owner", { exact: true }).inputValue() !== "trust and safety lead") throw new Error("Closed-note explanation reset after close/reopen");
  const raiExplanationDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (raiExplanationDraft.includes("trust and safety lead") || raiExplanationDraft.includes("people affected by moderation decisions")) throw new Error("Closed-note explanation text leaked into localStorage");
  await page.getByRole("button", { name: "Check my explanation", exact: true }).click();
  await page.getByText("Complete explanation confirmed", { exact: false }).waitFor();
  await page.getByRole("checkbox", { name: "I produced this explanation myself without notes.", exact: true }).check();
  await page.getByRole("radio", { name: "high", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge strict mastery", exact: true }).click();
  await page.getByText("901 TEACHER // SOURCE-GROUNDED COURSE", { exact: true }).waitFor();
  const responsibleAIMastery = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).responsibleAIEvidence, { key: saveKey });
  if (responsibleAIMastery?.masteryStatus !== "mastered" || responsibleAIMastery?.form !== "explanation" || responsibleAIMastery?.attemptCount !== 16) throw new Error(`Responsible AI strict mastery evidence incomplete: ${JSON.stringify(responsibleAIMastery)}`);
  if (Object.keys(responsibleAIMastery.dimensionCorrectness || {}).length !== 13 || Object.values(responsibleAIMastery.dimensionCorrectness).some((dimensions) => Object.keys(dimensions).length !== 4 || Object.values(dimensions).some((value) => value !== true))) throw new Error("Responsible AI two-form plus explanation gate incomplete");
  if (["response", "choices", "reasoning", "explanation", "freeFormReasoning", "scenarioNotes", "runtimeDisplay"].some((key) => key in responsibleAIMastery)) throw new Error("Responsible AI mastery evidence retained private response content");

  await page.getByRole("button", { name: "Start Model Choices", exact: true }).click();
  await page.locator('[data-terminal-exercise="EX-L0203-MODEL-DEPLOYMENT-CHOICES"]').waitFor();
  await page.locator(".model-choice-boundary", { hasText: "not a Microsoft exam question" }).waitFor();
  await page.getByText("prices, parameter support, and preview status must be reverified", { exact: false }).waitFor();
  await page.getByText("MODEL · DEPLOYMENT · REQUEST CONFIGURATION", { exact: true }).waitFor();
  await page.getByText("Decision", { exact: true }).waitFor();
  await page.getByText("Reason", { exact: true }).waitFor();
  await page.getByLabel("Model choice decision", { exact: true }).selectOption("retrieve_exact_fact_from_database");
  await page.getByLabel("Model choice reason", { exact: true }).selectOption("generation_is_deterministic_when_a_prompt_repeats");
  await page.getByRole("button", { name: "Check decision and reason", exact: true }).click();
  await page.getByRole("status").getByText("0/2", { exact: false }).waitFor();
  for (const dimension of ["decision", "reason"]) {
    const field = page.getByLabel(`Model choice ${dimension}`, { exact: true });
    const feedbackId = `model-choice-${dimension}-feedback`;
    if (await field.getAttribute("aria-invalid") !== "true" || await field.getAttribute("aria-describedby") !== feedbackId) throw new Error(`Model choice ${dimension} remediation was not field-associated`);
  }
  await page.getByRole("button", { name: "Reveal next comparison step", exact: true }).click();
  await page.getByText("Compare the two options", { exact: false }).waitFor();
  await page.screenshot({ path: qaPath("model-choice-primary-qa.png"), fullPage: true });
  await page.getByRole("button", { name: "Exit Model Choices", exact: true }).click();
  const systemSpeaker = page.locator('.speaker[data-dialogue-owner="system"]');
  await systemSpeaker.getByText("SYSTEM // EXPEDITION STATE", { exact: true }).waitFor();
  await page.getByText("Primary form closed safely", { exact: false }).waitFor();
  await page.getByText("private answers were cleared", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Start Model Choices", exact: true }).click();
  if (await page.getByLabel("Model choice decision", { exact: true }).inputValue() !== "" || await page.getByLabel("Model choice reason", { exact: true }).inputValue() !== "") throw new Error("Primary private answers survived close/reopen");
  const modelChoiceDraftSave = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (!modelChoiceDraftSave || JSON.parse(modelChoiceDraftSave).modelChoiceEvidence?.attemptCount !== 1) throw new Error("Model choice attempt evidence missing");
  if (modelChoiceDraftSave.includes("retrieve_exact_fact_from_database") || modelChoiceDraftSave.includes("generation_is_deterministic_when_a_prompt_repeats") || modelChoiceDraftSave.includes("language model producing")) throw new Error("Model choice working choices or prompt leaked into localStorage");
  for (const scenarioId of Object.keys(referenceModelChoicePrimary)) {
    const answer = referenceModelChoicePrimary[scenarioId];
    await page.getByLabel("Model choice decision", { exact: true }).selectOption(answer.decision);
    await page.getByLabel("Model choice reason", { exact: true }).selectOption(answer.reason);
    await page.getByRole("button", { name: "Check decision and reason", exact: true }).click();
    await page.getByText("Choice confirmed", { exact: false }).waitFor();
    await page.getByRole("button", { name: scenarioId === "P08" ? "View primary result" : "Next scenario", exact: true }).click();
  }
  await page.getByRole("heading", { name: "16 / 16 dimensions", exact: true }).waitFor();
  await page.getByText("Transfer and a closed-note explanation remain", { exact: false }).waitFor();
  await page.getByRole("radio", { name: "medium", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge primary form", exact: true }).click();
  const teacherSpeaker = page.locator('.speaker[data-dialogue-owner="teacher"]');
  await teacherSpeaker.getByText("901 TEACHER // SOURCE-GROUNDED COURSE", { exact: true }).waitFor();
  const modelChoiceEvidence = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).modelChoiceEvidence, { key: saveKey });
  if (modelChoiceEvidence?.exerciseId !== "EX-L0203-MODEL-DEPLOYMENT-CHOICES" || modelChoiceEvidence?.attemptCount !== 9 || modelChoiceEvidence?.hintLevel !== 2 || modelChoiceEvidence?.confidence !== "medium" || modelChoiceEvidence?.masteryStatus !== "primary_complete") throw new Error(`Model choice primary evidence incomplete: ${JSON.stringify(modelChoiceEvidence)}`);
  if (Object.keys(modelChoiceEvidence.itemCorrectness || {}).length !== 8 || Object.values(modelChoiceEvidence.itemCorrectness).some((dimensions) => Object.keys(dimensions).length !== 2 || Object.values(dimensions).some((value) => value !== true))) throw new Error("Model choice strict primary gate incomplete");
  if (["response", "choices", "freeFormExplanation", "promptText", "runtimeOutput"].some((key) => key in modelChoiceEvidence)) throw new Error("Model choice primary evidence retained private response content");

  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  await page.locator('main[data-scene="ruins"]').waitFor();
  await page.getByRole("button", { name: "Start Model Choice Transfer", exact: true }).click();
  await page.getByText("FRESH TRANSFER", { exact: false }).waitFor();
  await page.getByText("PILOT // DECISION OWNER", { exact: true }).waitFor();
  await page.getByText("SYSTEM // STRICT 16-POINT VALIDATOR", { exact: true }).waitFor();
  await page.getByLabel("Model choice decision", { exact: true }).selectOption("deterministic_fact_lookup");
  await page.getByLabel("Model choice reason", { exact: true }).selectOption("repeating_a_prompt_guarantees_identical_output");
  await page.getByRole("button", { name: "Check decision and reason", exact: true }).click();
  await page.getByRole("status").getByText("0/2", { exact: false }).waitFor();
  for (const dimension of ["decision", "reason"]) {
    const field = page.getByLabel(`Model choice ${dimension}`, { exact: true });
    const feedbackId = `model-choice-${dimension}-feedback`;
    if (await field.getAttribute("aria-invalid") !== "true" || await field.getAttribute("aria-describedby") !== feedbackId) throw new Error(`Model choice transfer ${dimension} remediation was not field-associated`);
  }
  await page.screenshot({ path: qaPath("model-choice-transfer-remediation-qa.png"), fullPage: true });
  await page.getByRole("button", { name: "Exit Model Choices", exact: true }).click();
  await systemSpeaker.getByText("SYSTEM // EXPEDITION STATE", { exact: true }).waitFor();
  await page.getByText("Transfer form closed safely", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Start Model Choice Transfer", exact: true }).click();
  if (await page.getByLabel("Model choice decision", { exact: true }).inputValue() !== "" || await page.getByLabel("Model choice reason", { exact: true }).inputValue() !== "") throw new Error("Transfer private answers survived close/reopen");
  for (const scenarioId of Object.keys(referenceModelChoiceTransfer)) {
    const answer = referenceModelChoiceTransfer[scenarioId];
    await page.getByLabel("Model choice decision", { exact: true }).selectOption(answer.decision);
    await page.getByLabel("Model choice reason", { exact: true }).selectOption(answer.reason);
    await page.getByRole("button", { name: "Check decision and reason", exact: true }).click();
    await page.getByText("Choice confirmed", { exact: false }).waitFor();
    await page.getByRole("button", { name: scenarioId === "T08" ? "Begin closed-note explanation" : "Next scenario", exact: true }).click();
  }
  await page.getByRole("heading", { name: "Explain the data-zone decision without notes", exact: true }).waitFor();
  await page.getByText("901 TEACHER // CLOSED-NOTE READINESS GATE", { exact: true }).waitFor();
  await page.getByLabel("Closed-note model choice decision", { exact: true }).fill("global deployment");
  await page.getByLabel("Closed-note model choice reason", { exact: true }).fill("global limits processing to the named data zone");
  await page.getByRole("button", { name: "Check my explanation", exact: true }).click();
  await page.getByRole("status").getByText("0/2", { exact: false }).waitFor();
  await page.screenshot({ path: qaPath("model-choice-closed-note-qa.png"), fullPage: true });
  assertDistinctCaptures(["model-choice-primary-qa.png", "model-choice-transfer-remediation-qa.png", "model-choice-closed-note-qa.png"]);
  for (const dimension of ["decision", "reason"]) {
    const field = page.getByLabel(`Closed-note model choice ${dimension}`, { exact: true });
    const feedbackId = `model-choice-explanation-${dimension}-feedback`;
    if (await field.getAttribute("aria-invalid") !== "true" || await field.getAttribute("aria-describedby") !== feedbackId) throw new Error(`Model choice closed-note ${dimension} remediation was not field-associated`);
  }
  await page.getByLabel("Closed-note model choice decision", { exact: true }).fill("data zone deployment");
  await page.getByLabel("Closed-note model choice reason", { exact: true }).fill("data zone limits processing to the specified zone");
  await page.getByRole("button", { name: "Exit Model Choices", exact: true }).click();
  await systemSpeaker.getByText("SYSTEM // EXPEDITION STATE", { exact: true }).waitFor();
  await page.getByText("Closed-note gate closed safely", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Open Closed-Note Gate", exact: true }).click();
  if (await page.getByLabel("Closed-note model choice decision", { exact: true }).inputValue() !== "" || await page.getByLabel("Closed-note model choice reason", { exact: true }).inputValue() !== "") throw new Error("Closed-note private answers survived close/reopen");
  const modelChoiceExplanationDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (modelChoiceExplanationDraft.includes("data zone deployment") || modelChoiceExplanationDraft.includes("data zone limits processing")) throw new Error("Model choice closed-note text leaked into localStorage");
  await page.getByLabel("Closed-note model choice decision", { exact: true }).fill("data zone deployment");
  await page.getByLabel("Closed-note model choice reason", { exact: true }).fill("data zone limits processing to the specified zone");
  await page.getByRole("button", { name: "Check my explanation", exact: true }).click();
  await page.getByText("Complete decision and reason confirmed", { exact: false }).waitFor();
  await page.getByRole("checkbox", { name: "I produced this decision and reason myself without notes.", exact: true }).check();
  await page.getByRole("radio", { name: "high", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge strict mastery", exact: true }).click();
  await teacherSpeaker.getByText("901 TEACHER // SOURCE-GROUNDED COURSE", { exact: true }).waitFor();
  const modelChoiceMastery = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).modelChoiceEvidence, { key: saveKey });
  if (modelChoiceMastery?.masteryStatus !== "mastered" || modelChoiceMastery?.form !== "explanation" || modelChoiceMastery?.attemptCount !== 20) throw new Error(`Model choice strict mastery evidence incomplete: ${JSON.stringify(modelChoiceMastery)}`);
  if (Object.keys(modelChoiceMastery.itemCorrectness || {}).length !== 17 || Object.values(modelChoiceMastery.itemCorrectness).some((dimensions) => Object.keys(dimensions).length !== 2 || Object.values(dimensions).some((value) => value !== true))) throw new Error("Model choice primary, transfer, and closed-note gate incomplete");
  if (["response", "choices", "freeFormExplanation", "promptText", "runtimeOutput"].some((key) => key in modelChoiceMastery)) throw new Error("Model choice mastery retained private response content");

  await page.getByRole("button", { name: "Start Structured Packets", exact: true }).click();
  await page.locator('[data-terminal-exercise="EX-L0301-STRUCTURED-PACKETS"]').waitFor();
  await page.getByText("PILOT // SOURCE OWNER", { exact: false }).waitFor();
  await page.getByText("SYSTEM // STRICT 8-CHECK VALIDATOR", { exact: true }).waitFor();
  await page.getByText("Course-authored bridge practice", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Run packet", exact: true }).click();
  await page.getByRole("status").getByText("3/8", { exact: false }).waitFor();
  await page.getByText("REVIEW · appends record", { exact: true }).waitFor();
  if (await page.locator("#structured-source").getAttribute("aria-invalid") !== "true" || await page.locator("#structured-source").getAttribute("aria-describedby") !== "structured-status structured-check-list structured-python-remediation") throw new Error("Structured source remediation was not associated with System score, checks, and Teacher remediation");
  await page.getByText("901 TEACHER // PYTHON REMEDIATION", { exact: true }).waitFor();
  if ((await page.locator("#structured-status").textContent()).includes("container type")) throw new Error("Teacher Python remediation leaked into neutral System scoring");
  await page.setViewportSize({ width: 640, height: 480 });
  await page.screenshot({ path: qaPath("structured-packets-primary-qa.png"), fullPage: true });
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.getByRole("button", { name: "Reveal next data-path step", exact: true }).click();
  await page.locator("#structured-source").fill(referenceStructuredPrimary);
  await page.getByRole("button", { name: "Run packet", exact: true }).click();
  await page.getByRole("status").getByText("8/8", { exact: false }).waitFor();
  await page.getByRole("button", { name: "View primary result", exact: true }).click();
  await page.getByRole("heading", { name: "8 / 8 checks", exact: true }).waitFor();
  await page.getByRole("radio", { name: "medium", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge primary form", exact: true }).click();
  await teacherSpeaker.getByText("901 TEACHER // SOURCE-GROUNDED COURSE", { exact: true }).waitFor();
  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  await page.getByRole("button", { name: "Start Structured Transfer", exact: true }).click();
  await page.getByRole("button", { name: "Run packet", exact: true }).click();
  await page.getByText("REVIEW · second nested access", { exact: true }).waitFor();
  await page.setViewportSize({ width: 320, height: 240 });
  await page.screenshot({ path: qaPath("structured-packets-transfer-remediation-qa.png"), fullPage: true });
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.locator("#structured-source").fill(`${referenceStructuredTransfer}\n# STRUCTURED_SESSION_ONLY`);
  await page.getByRole("button", { name: "Exit Structured Packets", exact: true }).click();
  await systemSpeaker.getByText("SYSTEM // EXPEDITION STATE", { exact: true }).waitFor();
  await page.getByRole("button", { name: "Resume Structured Packets", exact: true }).click();
  if (!(await page.locator("#structured-source").inputValue()).includes("STRUCTURED_SESSION_ONLY")) throw new Error("Structured transfer source reset after close/reopen");
  const structuredDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (structuredDraft.includes("STRUCTURED_SESSION_ONLY") || structuredDraft.includes("packet[\"readings\"]")) throw new Error("Structured source leaked into localStorage");
  await page.locator("#structured-source").fill(referenceStructuredTransfer);
  await page.getByRole("button", { name: "Run packet", exact: true }).click();
  await page.getByRole("status").getByText("8/8", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Begin closed-note explanation", exact: true }).click();
  await page.getByText("PILOT // CLOSED-NOTE EXPLANATION OWNER", { exact: true }).waitFor();
  await page.getByLabel("Closed-note Container path", { exact: true }).fill("list dictionary");
  await page.getByLabel("Closed-note Nested access", { exact: true }).fill("wrong");
  await page.getByLabel("Closed-note JSON round trip", { exact: true }).fill("json is a python object");
  await page.getByRole("button", { name: "Check data path", exact: true }).click();
  await page.getByRole("status").getByText("0/3", { exact: false }).waitFor();
  await page.getByText("901 TEACHER // EXPLANATION REMEDIATION", { exact: true }).waitFor();
  await page.screenshot({ path: qaPath("structured-packets-closed-note-qa.png"), fullPage: true });
  assertDistinctCaptures(["structured-packets-primary-qa.png", "structured-packets-transfer-remediation-qa.png", "structured-packets-closed-note-qa.png"]);
  for (const [dimension, label] of [["container_path", "Container path"], ["nested_access", "Nested access"], ["json_round_trip", "JSON round trip"]]) {
    const field = page.getByLabel(`Closed-note ${label}`, { exact: true });
    if (await field.getAttribute("aria-invalid") !== "true" || await field.getAttribute("aria-describedby") !== `structured-explanation-${dimension}-feedback`) throw new Error(`Structured ${dimension} remediation was not field-associated`);
  }
  await page.getByLabel("Closed-note Container path", { exact: true }).fill("dictionary list dictionary list value");
  await page.getByLabel("Closed-note Nested access", { exact: true }).fill("packet readings 1 values 0");
  await page.getByLabel("Closed-note JSON round trip", { exact: true }).fill("json text loads python object dumps json text");
  await page.getByRole("button", { name: "Exit Structured Packets", exact: true }).click();
  await page.getByRole("button", { name: "Resume Structured Packets", exact: true }).click();
  if (await page.getByLabel("Closed-note Nested access", { exact: true }).inputValue() !== "packet readings 1 values 0") throw new Error("Structured explanation reset after close/reopen");
  const structuredExplanationDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (structuredExplanationDraft.includes("packet readings 1 values 0") || structuredExplanationDraft.includes("json text loads")) throw new Error("Structured explanation leaked into localStorage");
  await page.getByRole("button", { name: "Check data path", exact: true }).click();
  await page.getByText("EXPLANATION PASS", { exact: false }).waitFor();
  await page.getByRole("checkbox", { name: "I produced this data-path explanation myself without notes.", exact: true }).check();
  await page.getByRole("radio", { name: "high", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge strict mastery", exact: true }).click();
  await teacherSpeaker.getByText("901 TEACHER // SOURCE-GROUNDED COURSE", { exact: true }).waitFor();
  const structuredContinue = page.getByRole("button", { name: "Start Control Flow", exact: true });
  await structuredContinue.waitFor();
  if (!await structuredContinue.evaluate((element) => element === document.activeElement)) throw new Error("Structured Packet mastery did not move focus to the next mandatory gate");
  const structuredMastery = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).structuredPacketEvidence, { key: saveKey });
  if (structuredMastery?.masteryStatus !== "mastered" || structuredMastery?.form !== "explanation" || structuredMastery?.attemptCount !== 6) throw new Error(`Structured Packet mastery incomplete: ${JSON.stringify(structuredMastery)}`);
  if (["learnerSource", "source", "rawJsonPacket", "runtimeOutput", "freeFormExplanation"].some((key) => key in structuredMastery)) throw new Error("Structured Packet mastery retained private content");

  await page.getByRole("button", { name: "Start Control Flow", exact: true }).click();
  await page.locator('[data-terminal-exercise="EX-L0302-CONTROL-FLOW"]').waitFor();
  await page.getByText("PILOT // FUNCTION OWNER", { exact: false }).waitFor();
  await page.getByText("SYSTEM // STRICT 8-CHECK VALIDATOR", { exact: true }).waitFor();
  await page.getByRole("button", { name: "Run function", exact: true }).click();
  await page.getByText("REVIEW · uses for loop", { exact: true }).waitFor();
  const controlEditor = page.locator("#control-flow-source");
  if (await controlEditor.getAttribute("aria-invalid") !== "true" || await controlEditor.getAttribute("aria-describedby") !== "control-flow-status control-flow-check-list control-flow-remediation") throw new Error("Control-flow remediation was not associated with System results, checks, and Teacher guidance");
  await page.getByText("901 TEACHER // PYTHON AND BOUNDARY REMEDIATION", { exact: true }).waitFor();
  if ((await page.locator("#control-flow-status").textContent()).includes("TEACHER")) throw new Error("Teacher boundary remediation leaked into neutral System scoring");
  await page.setViewportSize({ width: 640, height: 480 });
  await page.screenshot({ path: qaPath("control-flow-primary-qa.png"), fullPage: true });
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.getByRole("button", { name: "Reveal next iteration step", exact: true }).click();
  await controlEditor.fill(referenceControlPrimary);
  await page.getByRole("button", { name: "Run function", exact: true }).click();
  await page.getByRole("status").getByText("8/8", { exact: false }).waitFor();
  await page.getByRole("button", { name: "View primary result", exact: true }).click();
  await page.getByRole("radio", { name: "medium", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge primary form", exact: true }).click();
  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  await page.getByRole("button", { name: "Start Control Flow Transfer", exact: true }).click();
  await page.getByRole("button", { name: "Run function", exact: true }).click();
  await page.getByText("REVIEW · boundary behavior", { exact: true }).waitFor();
  await page.setViewportSize({ width: 320, height: 240 });
  await page.screenshot({ path: qaPath("control-flow-transfer-remediation-qa.png"), fullPage: true });
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.locator("#control-flow-source").fill(`${referenceControlTransfer}\n# CONTROL_SESSION_ONLY`);
  await page.getByRole("button", { name: "Exit Control Flow", exact: true }).click();
  await systemSpeaker.getByText("SYSTEM // EXPEDITION STATE", { exact: true }).waitFor();
  await page.getByRole("button", { name: "Resume Control Flow", exact: true }).click();
  if (!(await page.locator("#control-flow-source").inputValue()).includes("CONTROL_SESSION_ONLY")) throw new Error("Control-flow transfer reset after close/reopen");
  const controlDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (controlDraft.includes("CONTROL_SESSION_ONLY") || controlDraft.includes("def route_items")) throw new Error("Control-flow source leaked into localStorage");
  await page.locator("#control-flow-source").fill(referenceControlTransfer);
  await page.getByRole("button", { name: "Run function", exact: true }).click();
  await page.getByRole("status").getByText("8/8", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Begin closed-note explanation", exact: true }).click();
  await page.getByText("PILOT // CLOSED-NOTE EXPLANATION OWNER", { exact: true }).waitFor();
  await page.getByLabel("Closed-note Parameter input", { exact: true }).fill("wrong");
  await page.getByLabel("Closed-note Loop and condition", { exact: true }).fill("wrong");
  await page.getByLabel("Closed-note Return placement", { exact: true }).fill("wrong");
  await page.getByRole("button", { name: "Check control flow", exact: true }).click();
  await page.getByRole("status").getByText("0/3", { exact: false }).waitFor();
  await page.getByText("901 TEACHER // EXECUTION-PATH REMEDIATION", { exact: true }).waitFor();
  await page.screenshot({ path: qaPath("control-flow-closed-note-qa.png"), fullPage: true });
  assertDistinctCaptures(["control-flow-primary-qa.png", "control-flow-transfer-remediation-qa.png", "control-flow-closed-note-qa.png"]);
  for (const [dimension, label] of [["parameter", "Parameter input"], ["loop_condition", "Loop and condition"], ["return", "Return placement"]]) { const field = page.getByLabel(`Closed-note ${label}`, { exact: true }); if (await field.getAttribute("aria-invalid") !== "true" || await field.getAttribute("aria-describedby") !== `control-explanation-${dimension}-feedback`) throw new Error(`Control-flow ${dimension} remediation was not field-associated`); }
  await page.getByLabel("Closed-note Parameter input", { exact: true }).fill("parameters receive caller inputs");
  await page.getByLabel("Closed-note Loop and condition", { exact: true }).fill("loop each item condition selects one append branch");
  await page.getByLabel("Closed-note Return placement", { exact: true }).fill("return completed accumulator after loop");
  await page.getByRole("button", { name: "Exit Control Flow", exact: true }).click();
  await page.getByRole("button", { name: "Resume Control Flow", exact: true }).click();
  if (await page.getByLabel("Closed-note Loop and condition", { exact: true }).inputValue() !== "loop each item condition selects one append branch") throw new Error("Control-flow explanation reset after close/reopen");
  const controlExplanationDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (controlExplanationDraft.includes("loop each item") || controlExplanationDraft.includes("parameters receive")) throw new Error("Control-flow explanation leaked into localStorage");
  await page.getByRole("button", { name: "Check control flow", exact: true }).click();
  await page.getByText("EXPLANATION PASS", { exact: false }).waitFor();
  await page.getByRole("checkbox", { name: "I produced this control-flow explanation myself without notes.", exact: true }).check();
  await page.getByRole("radio", { name: "high", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge strict mastery", exact: true }).click();
  await teacherSpeaker.getByText("901 TEACHER // SOURCE-GROUNDED COURSE", { exact: true }).waitFor();
  const controlContinue = page.getByRole("button", { name: "Start Client Bridge", exact: true });
  await controlContinue.waitFor();
  if (!await controlContinue.evaluate((element) => element === document.activeElement)) throw new Error("Control-flow mastery did not move focus to Client Bridge");
  const controlMastery = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).controlFlowEvidence, { key: saveKey });
  if (controlMastery?.masteryStatus !== "mastered" || controlMastery?.attemptCount !== 6) throw new Error(`Control-flow mastery incomplete: ${JSON.stringify(controlMastery)}`);
  if (["learnerSource", "source", "inputRecords", "runtimeOutput", "freeFormExplanation"].some((key) => key in controlMastery)) throw new Error("Control-flow mastery retained private content");
  await page.getByRole("button", { name: "Start Client Bridge", exact: true }).click();
  await page.locator('[data-terminal-exercise="EX-L0303-CLIENT-BRIDGE"]').waitFor();
  if (await page.locator('[data-terminal-exercise="EX-L0303-CLIENT-BRIDGE"]').getAttribute("aria-describedby") !== "client-bridge-offline-warning") throw new Error("Offline/no-credential warning was not associated with the Client Bridge dialog announcement");
  await page.getByText("OFFLINE SIMULATION ONLY", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Validate bridge", exact: true }).click();
  await page.getByText("REVIEW · file json flow", { exact: true }).waitFor();
  const bridgeEditor = page.locator("#client-bridge-source");
  if (await bridgeEditor.getAttribute("aria-invalid") !== "true" || await bridgeEditor.getAttribute("aria-describedby") !== "bridge-status bridge-check-list bridge-remediation") throw new Error("Client Bridge remediation was not associated with System results, checks, and Teacher guidance");
  await page.getByText("901 TEACHER // OFFLINE AND CREDENTIAL REMEDIATION", { exact: true }).waitFor();
  if ((await page.locator("#bridge-status").textContent()).includes("TEACHER")) throw new Error("Teacher Client Bridge remediation leaked into neutral System scoring");
  await page.setViewportSize({ width: 640, height: 480 });
  await page.screenshot({ path: qaPath("client-bridge-primary-qa.png"), fullPage: true });
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.getByRole("button", { name: "Reveal next safe layer", exact: true }).click();
  await bridgeEditor.fill(referenceClientPrimary);
  await page.getByRole("button", { name: "Validate bridge", exact: true }).click();
  await page.getByRole("status").getByText("10/10", { exact: false }).waitFor();
  await page.getByRole("button", { name: "View primary result", exact: true }).click();
  await page.getByRole("radio", { name: "medium", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge primary form", exact: true }).click();
  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  await page.getByRole("button", { name: "Start Client Bridge Transfer", exact: true }).click();
  await page.locator("#client-bridge-offline-warning").getByText("no real service is contacted", { exact: false }).waitFor();
  await page.locator("#client-bridge-offline-warning").getByText("No real credential is accepted", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Validate bridge", exact: true }).click();
  await page.getByText("REVIEW · hidden config reuse", { exact: true }).waitFor();
  await page.setViewportSize({ width: 320, height: 240 });
  await page.screenshot({ path: qaPath("client-bridge-transfer-remediation-qa.png"), fullPage: true });
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.locator("#client-bridge-source").fill(`${referenceClientTransfer}\n# BRIDGE_SESSION_ONLY`);
  await page.getByRole("button", { name: "Exit Client Bridge", exact: true }).click();
  await systemSpeaker.getByText("SYSTEM // EXPEDITION STATE", { exact: true }).waitFor();
  await page.getByRole("button", { name: "Resume Client Bridge", exact: true }).click();
  if (!(await page.locator("#client-bridge-source").inputValue()).includes("BRIDGE_SESSION_ONLY")) throw new Error("Client Bridge transfer reset after close/reopen");
  const bridgeDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (bridgeDraft.includes("BRIDGE_SESSION_ONLY") || bridgeDraft.includes("RIDGE_API_TOKEN") || bridgeDraft.includes("assemble_call")) throw new Error("Client Bridge source/config leaked into localStorage");
  await page.locator("#client-bridge-source").fill(referenceClientTransfer);
  await page.getByRole("button", { name: "Validate bridge", exact: true }).click();
  await page.getByRole("status").getByText("10/10", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Begin retrieval", exact: true }).click();
  await page.locator("#client-bridge-offline-warning").waitFor();
  const bridgeFields = page.locator(".bridge-retrieval fieldset");
  for (let index = 0; index < 4; index += 1) await bridgeFields.nth(index).locator('input[type="radio"]').nth(1).check();
  await page.getByRole("button", { name: "Check retrieval", exact: true }).click();
  await page.getByRole("status").getByText("0/4", { exact: false }).waitFor();
  await page.getByText("901 TEACHER // RETRIEVAL REMEDIATION", { exact: true }).waitFor();
  for (let index = 0; index < 4; index += 1) await bridgeFields.nth(index).locator('input[type="radio"]').first().check();
  await page.getByRole("button", { name: "Check retrieval", exact: true }).click();
  await page.getByRole("status").getByText("4/4", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Begin closed-note explanation", exact: true }).click();
  await page.locator("#client-bridge-offline-warning").waitFor();
  await page.getByText("PILOT // CLOSED-NOTE EXPLANATION OWNER", { exact: true }).waitFor();
  for (const dimension of ["module", "file", "secret", "request", "response"]) await page.getByLabel(`Closed-note bridge ${dimension}`, { exact: true }).fill("wrong");
  await page.getByRole("button", { name: "Check bridge explanation", exact: true }).click();
  await page.getByRole("status").getByText("0/5", { exact: false }).waitFor();
  await page.getByText("901 TEACHER // FIVE-LAYER REMEDIATION", { exact: true }).waitFor();
  await page.screenshot({ path: qaPath("client-bridge-closed-note-qa.png"), fullPage: true });
  assertDistinctCaptures(["client-bridge-primary-qa.png", "client-bridge-transfer-remediation-qa.png", "client-bridge-closed-note-qa.png"]);
  for (const dimension of ["module", "file", "secret", "request", "response"]) { const field = page.getByLabel(`Closed-note bridge ${dimension}`, { exact: true }); if (await field.getAttribute("aria-invalid") !== "true" || await field.getAttribute("aria-describedby") !== `bridge-explanation-${dimension}-feedback`) throw new Error(`Client Bridge ${dimension} remediation was not field-associated`); }
  const bridgeExplanation = { module: "import module from active environment", file: "read file text then parse json config", secret: "lookup named environment secret reject missing", request: "build offline method url headers body request", response: "response arrives later with status and body" };
  for (const [dimension, value] of Object.entries(bridgeExplanation)) await page.getByLabel(`Closed-note bridge ${dimension}`, { exact: true }).fill(value);
  await page.getByRole("button", { name: "Exit Client Bridge", exact: true }).click();
  await page.getByRole("button", { name: "Resume Client Bridge", exact: true }).click();
  if (await page.getByLabel("Closed-note bridge secret", { exact: true }).inputValue() !== bridgeExplanation.secret) throw new Error("Client Bridge explanation reset after close/reopen");
  const bridgeExplanationDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (bridgeExplanationDraft.includes("lookup named environment secret") || bridgeExplanationDraft.includes("response arrives later")) throw new Error("Client Bridge explanation leaked into localStorage");
  await page.getByRole("button", { name: "Check bridge explanation", exact: true }).click();
  await page.getByText("EXPLANATION PASS", { exact: false }).waitFor();
  await page.getByRole("checkbox", { name: "I produced this bridge explanation myself without notes.", exact: true }).check();
  await page.getByRole("radio", { name: "high", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge strict mastery", exact: true }).click();
  await teacherSpeaker.getByText("901 TEACHER // SOURCE-GROUNDED COURSE", { exact: true }).waitFor();
  const clientContinue = page.getByRole("button", { name: "Start Text Analysis", exact: true });
  await clientContinue.waitFor();
  if (!await clientContinue.evaluate((element) => element === document.activeElement)) throw new Error("Client Bridge mastery did not move focus to Text Analysis");
  const clientMastery = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).clientBridgeEvidence, { key: saveKey });
  if (clientMastery?.masteryStatus !== "mastered" || clientMastery?.attemptCount !== 8) throw new Error(`Client Bridge mastery incomplete: ${JSON.stringify(clientMastery)}`);
  if (["learnerSource", "source", "configBody", "secretName", "secretValue", "authorizationHeader", "runtimeOutput", "freeFormExplanation"].some((key) => key in clientMastery)) throw new Error("Client Bridge mastery retained private content");
  await page.getByRole("button", { name: "Start Text Analysis", exact: true }).click();
  await page.locator('[data-terminal-exercise="EX-L0401-TEXT-ANALYSIS"]').waitFor();
  await page.getByText("COURSE-AUTHORED OFFLINE PRACTICE", { exact: false }).waitFor();
  const terminologyBridge = page.locator("#text-analysis-terminology-bridge");
  await terminologyBridge.waitFor();
  if (await page.locator('[data-terminal-exercise="EX-L0401-TEXT-ANALYSIS"]').getAttribute("aria-describedby") !== "text-analysis-terminology-bridge") throw new Error("Text Analysis terminology bridge was not associated with the dialog announcement");
  const terminologyBridgeText = await terminologyBridge.textContent();
  if (!terminologyBridgeText.includes("AI-901") || !terminologyBridgeText.includes("keyword extraction") || !terminologyBridgeText.includes("Azure") || !terminologyBridgeText.includes("key phrase extraction")) throw new Error("Text Analysis terminology bridge was incomplete");
  await page.getByLabel("Text analysis decision", { exact: true }).selectOption("named_entity_recognition");
  await page.getByLabel("Text analysis reason", { exact: true }).selectOption("topic_determines_capability");
  await page.getByRole("button", { name: "Check workload choice", exact: true }).click();
  await page.getByRole("status").getByText("0/2", { exact: false }).waitFor();
  await page.getByText("901 TEACHER // CAPABILITY AND CORRELATION REMEDIATION", { exact: true }).waitFor();
  for (const dimension of ["decision", "reason"]) { const field = page.getByLabel(`Text analysis ${dimension}`, { exact: true }); if (await field.getAttribute("aria-invalid") !== "true" || await field.getAttribute("aria-describedby") !== `text-analysis-${dimension}-feedback`) throw new Error(`Text-analysis ${dimension} remediation was not field-associated`); }
  await page.setViewportSize({ width: 640, height: 480 });
  await page.screenshot({ path: qaPath("text-analysis-primary-qa.png"), fullPage: true });
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.getByRole("button", { name: "Reveal next workload contrast", exact: true }).click();
  for (const scenarioId of Object.keys(referenceTextPrimary)) { const answer = referenceTextPrimary[scenarioId]; await page.getByLabel("Text analysis decision", { exact: true }).selectOption(answer.decision); await page.getByLabel("Text analysis reason", { exact: true }).selectOption(answer.reason); await page.getByRole("button", { name: "Check workload choice", exact: true }).click(); await page.getByText("CHOICE PASS", { exact: false }).waitFor(); await page.getByRole("button", { name: scenarioId === "P06" ? "View primary result" : "Next scenario", exact: true }).click(); }
  await page.getByRole("heading", { name: "12 / 12 dimensions", exact: true }).waitFor();
  await page.getByRole("radio", { name: "medium", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge primary form", exact: true }).click();
  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  await page.getByRole("button", { name: "Start Text Analysis Transfer", exact: true }).click();
  await page.locator("#text-analysis-terminology-bridge").waitFor();
  await page.getByLabel("Text analysis decision", { exact: true }).selectOption("named_entity_recognition");
  await page.getByLabel("Text analysis reason", { exact: true }).selectOption("topic_determines_capability");
  await page.getByRole("button", { name: "Check workload choice", exact: true }).click();
  await page.getByRole("status").getByText("0/2", { exact: false }).waitFor();
  await page.setViewportSize({ width: 320, height: 240 });
  await page.screenshot({ path: qaPath("text-analysis-transfer-remediation-qa.png"), fullPage: true });
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.getByRole("button", { name: "Exit Text Analysis", exact: true }).click();
  await systemSpeaker.getByText("SYSTEM // EXPEDITION STATE", { exact: true }).waitFor();
  await page.getByRole("button", { name: "Resume Text Analysis", exact: true }).click();
  if (await page.getByLabel("Text analysis reason", { exact: true }).inputValue() !== "topic_determines_capability") throw new Error("Text-analysis transfer choices reset after close/reopen");
  const textDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (textDraft.includes("topic_determines_capability") || textDraft.includes("maintenance comments")) throw new Error("Text-analysis choices or scenario text leaked into localStorage");
  for (const scenarioId of Object.keys(referenceTextTransfer)) { const answer = referenceTextTransfer[scenarioId]; await page.getByLabel("Text analysis decision", { exact: true }).selectOption(answer.decision); await page.getByLabel("Text analysis reason", { exact: true }).selectOption(answer.reason); await page.getByRole("button", { name: "Check workload choice", exact: true }).click(); await page.getByText("CHOICE PASS", { exact: false }).waitFor(); await page.getByRole("button", { name: scenarioId === "T06" ? "Begin closed-note explanation" : "Next scenario", exact: true }).click(); }
  await page.locator("#text-analysis-terminology-bridge").waitFor();
  await page.getByText("PILOT // CLOSED-NOTE WORKLOAD OWNER", { exact: true }).waitFor();
  for (const dimension of ["requested_output", "capability", "document_id", "mixed_result"]) await page.getByLabel(`Closed-note text analysis ${dimension}`, { exact: true }).fill("wrong");
  await page.getByRole("button", { name: "Check workload explanation", exact: true }).click();
  await page.getByRole("status").getByText("0/4", { exact: false }).waitFor();
  await page.getByText("901 TEACHER // DOCUMENT-FLOW REMEDIATION", { exact: true }).waitFor();
  await page.screenshot({ path: qaPath("text-analysis-closed-note-qa.png"), fullPage: true });
  assertDistinctCaptures(["text-analysis-primary-qa.png", "text-analysis-transfer-remediation-qa.png", "text-analysis-closed-note-qa.png"]);
  for (const dimension of ["requested_output", "capability", "document_id", "mixed_result"]) { const field = page.getByLabel(`Closed-note text analysis ${dimension}`, { exact: true }); if (await field.getAttribute("aria-invalid") !== "true" || await field.getAttribute("aria-describedby") !== `text-explanation-${dimension}-feedback`) throw new Error(`Text-analysis explanation ${dimension} remediation was not associated`); }
  const textExplanation = { requested_output: "important phrases representing main concepts", capability: "key phrase extraction keyword extraction bridge", document_id: "stable id correlates each input result or error", mixed_result: "iterate each document and branch success or error" };
  for (const [dimension, value] of Object.entries(textExplanation)) await page.getByLabel(`Closed-note text analysis ${dimension}`, { exact: true }).fill(value);
  await page.getByRole("button", { name: "Exit Text Analysis", exact: true }).click();
  await page.getByRole("button", { name: "Resume Text Analysis", exact: true }).click();
  if (await page.getByLabel("Closed-note text analysis document_id", { exact: true }).inputValue() !== textExplanation.document_id) throw new Error("Text-analysis explanation reset after close/reopen");
  const textExplanationDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (textExplanationDraft.includes("stable id correlates") || textExplanationDraft.includes("important phrases representing")) throw new Error("Text-analysis explanation leaked into localStorage");
  await page.getByRole("button", { name: "Check workload explanation", exact: true }).click();
  await page.getByText("EXPLANATION PASS", { exact: false }).waitFor();
  await page.getByRole("checkbox", { name: "I produced this workload explanation myself without notes.", exact: true }).check();
  await page.getByRole("radio", { name: "high", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge strict mastery", exact: true }).click();
  await teacherSpeaker.getByText("901 TEACHER // SOURCE-GROUNDED COURSE", { exact: true }).waitFor();
  const textContinue = page.getByRole("button", { name: "Start Speech Workloads", exact: true });
  await textContinue.waitFor();
  if (!await textContinue.evaluate((element) => element === document.activeElement)) throw new Error("Text Analysis mastery did not move focus to Speech Workloads");
  const textMastery = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).textAnalysisEvidence, { key: saveKey });
  if (textMastery?.masteryStatus !== "mastered" || textMastery?.attemptCount !== 16) throw new Error(`Text-analysis mastery incomplete: ${JSON.stringify(textMastery)}`);
  if (["documentText", "freeFormReasoning", "serviceResultBody", "runtimeOutput", "response", "choices"].some((key) => key in textMastery)) throw new Error("Text-analysis mastery retained private content");
  await page.getByRole("button", { name: "Start Speech Workloads", exact: true }).click();
  await page.locator('[data-terminal-exercise="EX-L0402-SPEECH-WORKLOADS"]').waitFor();
  await page.locator("#speech-offline-warning").waitFor();
  await page.locator("#speech-transcript-equivalent").waitFor();
  await assertSpeechDialogAssociation(page, "primary");
  await page.getByText("FULLY OFFLINE", { exact: false }).waitFor();
  await page.getByText("Transcript-equivalent scenario text", { exact: false }).waitFor();
  await page.getByLabel("Speech decision", { exact: true }).selectOption("speech_synthesis");
  await page.getByLabel("Speech reason", { exact: true }).selectOption("spoken_audio_is_generated_from_text");
  await page.getByRole("button", { name: "Check speech choice", exact: true }).click();
  await page.getByText("901 TEACHER // SPEECH-FLOW REMEDIATION", { exact: true }).waitFor();
  await page.getByRole("status").getByText("0/2", { exact: false }).waitFor();
  for (const dimension of ["decision", "reason"]) { const field = page.getByLabel(`Speech ${dimension}`, { exact: true }); if (await field.getAttribute("aria-invalid") !== "true" || await field.getAttribute("aria-describedby") !== `speech-${dimension}-feedback`) throw new Error(`Speech ${dimension} remediation was not associated`); }
  await page.setViewportSize({ width: 640, height: 480 });
  await page.screenshot({ path: qaPath("speech-workloads-primary-qa.png"), fullPage: true });
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.getByRole("button", { name: "Reveal next speech-flow contrast", exact: true }).click();
  for (const id of Object.keys(referenceSpeechPrimary)) { const a = referenceSpeechPrimary[id]; await page.getByLabel("Speech decision", { exact: true }).selectOption(a.decision); await page.getByLabel("Speech reason", { exact: true }).selectOption(a.reason); await page.getByRole("button", { name: "Check speech choice", exact: true }).click(); await page.getByText("CHOICE PASS", { exact: false }).waitFor(); await page.getByRole("button", { name: id === "P06" ? "View primary result" : "Next scenario", exact: true }).click(); }
  await page.getByRole("radio", { name: "medium", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge primary form", exact: true }).click();
  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  await page.getByRole("button", { name: "Start Speech Transfer", exact: true }).click();
  await page.locator("#speech-offline-warning").waitFor();
  await page.locator("#speech-transcript-equivalent").waitFor();
  await assertSpeechDialogAssociation(page, "transfer");
  await page.getByLabel("Speech decision", { exact: true }).selectOption("speech_synthesis");
  await page.getByLabel("Speech reason", { exact: true }).selectOption("spoken_audio_is_generated_from_text");
  await page.getByRole("button", { name: "Check speech choice", exact: true }).click();
  await page.getByRole("status").getByText("0/2", { exact: false }).waitFor();
  await page.setViewportSize({ width: 320, height: 240 });
  await page.screenshot({ path: qaPath("speech-workloads-transfer-remediation-qa.png"), fullPage: true });
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.getByRole("button", { name: "Exit Speech Workloads", exact: true }).click();
  await page.getByRole("button", { name: "Resume Speech Workloads", exact: true }).click();
  if (await page.getByLabel("Speech reason", { exact: true }).inputValue() !== "spoken_audio_is_generated_from_text") throw new Error("Speech transfer reset after close/reopen");
  const speechDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (speechDraft.includes("spoken_audio_is_generated_from_text") || speechDraft.includes("recorded interview")) throw new Error("Speech choices or transcript-equivalent prompt leaked into storage");
  for (const id of Object.keys(referenceSpeechTransfer)) { const a = referenceSpeechTransfer[id]; await page.getByLabel("Speech decision", { exact: true }).selectOption(a.decision); await page.getByLabel("Speech reason", { exact: true }).selectOption(a.reason); await page.getByRole("button", { name: "Check speech choice", exact: true }).click(); await page.getByText("CHOICE PASS", { exact: false }).waitFor(); await page.getByRole("button", { name: id === "T06" ? "Begin closed-note explanation" : "Next scenario", exact: true }).click(); }
  await page.locator("#speech-offline-warning").waitFor();
  await page.locator("#speech-transcript-equivalent").waitFor();
  await assertSpeechDialogAssociation(page, "closed-note");
  await page.getByText("PILOT // CLOSED-NOTE SPEECH-FLOW OWNER", { exact: true }).waitFor();
  for (const d of ["direction", "workload", "file_binding", "result_branch"]) await page.getByLabel(`Closed-note speech ${d}`, { exact: true }).fill("wrong");
  await page.getByRole("button", { name: "Check speech explanation", exact: true }).click();
  await page.getByText("901 TEACHER // DIRECTION AND CANCELLATION REMEDIATION", { exact: true }).waitFor();
  await page.getByRole("status").getByText("0/4", { exact: false }).waitFor();
  await page.screenshot({ path: qaPath("speech-workloads-closed-note-qa.png"), fullPage: true });
  assertDistinctCaptures(["speech-workloads-primary-qa.png", "speech-workloads-transfer-remediation-qa.png", "speech-workloads-closed-note-qa.png"]);
  for (const d of ["direction", "workload", "file_binding", "result_branch"]) { const field = page.getByLabel(`Closed-note speech ${d}`, { exact: true }); if (await field.getAttribute("aria-invalid") !== "true" || await field.getAttribute("aria-describedby") !== `speech-explanation-${d}-feedback`) throw new Error(`Speech explanation ${d} remediation was not associated`); }
  const speechExplanation = { direction: "spoken audio to text is recognition text to audio is synthesis", workload: "spoken general model question is multimodal prompt flow", file_binding: "recognition reads input file synthesis writes output file", result_branch: "inspect result reason handle success or cancellation" };
  for (const [d, value] of Object.entries(speechExplanation)) await page.getByLabel(`Closed-note speech ${d}`, { exact: true }).fill(value);
  await page.getByRole("button", { name: "Exit Speech Workloads", exact: true }).click();
  await page.getByRole("button", { name: "Resume Speech Workloads", exact: true }).click();
  if (await page.getByLabel("Closed-note speech file_binding", { exact: true }).inputValue() !== speechExplanation.file_binding) throw new Error("Speech explanation reset after close/reopen");
  const speechExplanationDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (speechExplanationDraft.includes("recognition reads input file") || speechExplanationDraft.includes("spoken general model question")) throw new Error("Speech explanation leaked into storage");
  await page.getByRole("button", { name: "Check speech explanation", exact: true }).click();
  await page.getByText("EXPLANATION PASS", { exact: false }).waitFor();
  await page.getByRole("checkbox", { name: "I produced this speech-flow explanation myself without notes.", exact: true }).check();
  await page.getByRole("radio", { name: "high", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge strict mastery", exact: true }).click();
  await teacherSpeaker.getByText("901 TEACHER // SOURCE-GROUNDED COURSE", { exact: true }).waitFor();
  const speechContinue = page.getByRole("button", { name: "Start Visual Workloads", exact: true }); await speechContinue.waitFor(); if (!await speechContinue.evaluate((el) => el === document.activeElement)) throw new Error("Speech mastery did not focus Visual Workloads");
  const speechMastery = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).speechEvidence, { key: saveKey });
  if (speechMastery?.masteryStatus !== "mastered" || speechMastery?.attemptCount !== 16) throw new Error(`Speech mastery incomplete: ${JSON.stringify(speechMastery)}`);
  if (["audioBytes", "audioPath", "transcriptText", "spokenPrompt", "serviceResponseBody", "runtimeOutput", "freeFormExplanation", "response", "choices"].some((key) => key in speechMastery)) throw new Error("Speech mastery retained private content");
  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  const restoredSpeechContinue = page.getByRole("button", { name: "Start Visual Workloads", exact: true });
  await restoredSpeechContinue.waitFor();
  if (!await restoredSpeechContinue.evaluate((element) => element === document.activeElement)) throw new Error("Sanitized Speech mastery reload did not restore focus to Visual Workloads");

  await restoredSpeechContinue.click();
  await page.locator('[data-terminal-exercise="EX-L0403-VISUAL-WORKLOADS"]').waitFor();
  for (const selector of ["#visual-offline-warning", "#visual-text-equivalent", "#visual-deprecation-warning"]) await page.locator(selector).waitFor();
  await page.getByText("Image Analysis 4.0 is deprecated", { exact: false }).waitFor();
  await assertVisualDialogAssociation(page, "primary");
  await page.getByLabel("Visual decision", { exact: true }).selectOption("image_generation");
  await page.getByLabel("Visual reason", { exact: true }).selectOption("existing_pixels_are_replaced_by_a_new_visual");
  await page.getByRole("button", { name: "Check visual choice", exact: true }).click();
  await page.getByText("901 TEACHER // VISUAL-FLOW REMEDIATION", { exact: true }).waitFor();
  for (const dimension of ["decision", "reason"]) { const field = page.getByLabel(`Visual ${dimension}`, { exact: true }); if (await field.getAttribute("aria-invalid") !== "true" || await field.getAttribute("aria-describedby") !== `visual-${dimension}-feedback`) throw new Error(`Visual ${dimension} remediation was not associated`); }
  await page.setViewportSize({ width: 640, height: 480 });
  await page.screenshot({ path: qaPath("visual-workloads-primary-qa.png"), fullPage: true });
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.getByRole("button", { name: "Reveal next visual-flow contrast", exact: true }).click();
  for (const id of Object.keys(referenceVisualPrimary)) { const answer = referenceVisualPrimary[id]; await page.getByLabel("Visual decision", { exact: true }).selectOption(answer.decision); await page.getByLabel("Visual reason", { exact: true }).selectOption(answer.reason); await page.getByRole("button", { name: "Check visual choice", exact: true }).click(); await page.getByText("CHOICE PASS", { exact: false }).waitFor(); await page.getByRole("button", { name: id === "P06" ? "View primary result" : "Next scenario", exact: true }).click(); }
  await page.getByRole("radio", { name: "medium", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge primary form", exact: true }).click();
  await page.reload(); await page.getByRole("button", { name: "Resume signal" }).click(); await page.getByRole("button", { name: "Start Visual Transfer", exact: true }).click();
  await assertVisualDialogAssociation(page, "transfer");
  await page.getByLabel("Visual decision", { exact: true }).selectOption("image_generation"); await page.getByLabel("Visual reason", { exact: true }).selectOption("existing_pixels_are_replaced_by_a_new_visual"); await page.getByRole("button", { name: "Check visual choice", exact: true }).click();
  await page.setViewportSize({ width: 320, height: 240 }); await page.screenshot({ path: qaPath("visual-workloads-transfer-remediation-qa.png"), fullPage: true }); await page.setViewportSize({ width: 1600, height: 900 });
  await page.getByRole("button", { name: "Exit Visual Workloads", exact: true }).click(); await page.getByRole("button", { name: "Resume Visual Workloads", exact: true }).click();
  if (await page.getByLabel("Visual reason", { exact: true }).inputValue() !== "existing_pixels_are_replaced_by_a_new_visual") throw new Error("Visual transfer reset after close/reopen");
  const visualDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey }); if (visualDraft.includes("existing_pixels_are_replaced") || visualDraft.includes("equipment photo")) throw new Error("Visual choices or scenario text leaked into storage");
  for (const id of Object.keys(referenceVisualTransfer)) { const answer = referenceVisualTransfer[id]; await page.getByLabel("Visual decision", { exact: true }).selectOption(answer.decision); await page.getByLabel("Visual reason", { exact: true }).selectOption(answer.reason); await page.getByRole("button", { name: "Check visual choice", exact: true }).click(); await page.getByText("CHOICE PASS", { exact: false }).waitFor(); await page.getByRole("button", { name: id === "T06" ? "Begin closed-note explanation" : "Next scenario", exact: true }).click(); }
  await assertVisualDialogAssociation(page, "closed-note");
  for (const dimension of ["existing_or_new", "input_modalities", "required_output", "media_handling"]) await page.getByLabel(`Closed-note visual ${dimension}`, { exact: true }).fill("wrong");
  await page.getByRole("button", { name: "Check visual explanation", exact: true }).click(); await page.getByText("901 TEACHER // WORKLOAD AND MEDIA-HANDLING REMEDIATION", { exact: true }).waitFor();
  await page.screenshot({ path: qaPath("visual-workloads-closed-note-qa.png"), fullPage: true }); assertDistinctCaptures(["visual-workloads-primary-qa.png", "visual-workloads-transfer-remediation-qa.png", "visual-workloads-closed-note-qa.png"]);
  const visualExplanation = { existing_or_new: "analysis interprets existing media generation creates new media", input_modalities: "multimodal visual prompt combines visual and text inputs", required_output: "image generation returns still media video generation returns time based media", media_handling: "validate path type then parse analysis JSON or handle generated media" };
  for (const [dimension, value] of Object.entries(visualExplanation)) await page.getByLabel(`Closed-note visual ${dimension}`, { exact: true }).fill(value);
  await page.getByRole("button", { name: "Exit Visual Workloads", exact: true }).click(); await page.getByRole("button", { name: "Resume Visual Workloads", exact: true }).click();
  if (await page.getByLabel("Closed-note visual media_handling", { exact: true }).inputValue() !== visualExplanation.media_handling) throw new Error("Visual explanation reset after close/reopen");
  const visualExplanationDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey }); if (visualExplanationDraft.includes("validate path type") || visualExplanationDraft.includes("multimodal visual prompt")) throw new Error("Visual explanation leaked into storage");
  await page.getByRole("button", { name: "Check visual explanation", exact: true }).click(); await page.getByText("EXPLANATION PASS", { exact: false }).waitFor(); await page.getByRole("checkbox", { name: "I produced this visual workload explanation myself without notes.", exact: true }).check(); await page.getByRole("radio", { name: "high", exact: true }).check(); await page.getByRole("button", { name: "Acknowledge strict mastery", exact: true }).click();
  const visualContinue = page.getByRole("button", { name: "Start Extraction Workloads", exact: true }); await visualContinue.waitFor(); if (!await visualContinue.evaluate((element) => element === document.activeElement)) throw new Error("Visual mastery did not focus Extraction Workloads");
  const visualMastery = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).visualEvidence, { key: saveKey }); if (visualMastery?.masteryStatus !== "mastered" || visualMastery?.attemptCount !== 16) throw new Error(`Visual mastery incomplete: ${JSON.stringify(visualMastery)}`); if (["mediaBytes", "mediaPath", "generationPrompt", "analysisResultBody", "runtimeOutput", "freeText", "response", "choices"].some((key) => key in visualMastery)) throw new Error("Visual mastery retained private content");
  await page.getByRole("button", { name: "Start Extraction Workloads", exact: true }).click();
  await page.locator('[data-terminal-exercise="EX-L0404-EXTRACTION-WORKLOADS"]').waitFor();
  await assertExtractionContinuity(page, "primary"); await page.getByText("Media-equivalent scenario text", { exact: false }).waitFor();
  await page.getByLabel("Extraction decision", { exact: true }).selectOption("summarization"); await page.getByLabel("Extraction reason", { exact: true }).selectOption("a_summary_is_the_same_as_named_fields"); await page.getByRole("button", { name: "Check extraction choice", exact: true }).click(); await page.getByRole("status").getByText("0/2 · CHOICE NOT YET COMPLETE.", { exact: true }).waitFor(); await page.getByText("901 TEACHER // MODALITY, SCHEMA, AND EVIDENCE REMEDIATION", { exact: true }).waitFor();
  for (const dimension of ["decision", "reason"]) { const field = page.getByLabel(`Extraction ${dimension}`, { exact: true }); if (await field.getAttribute("aria-invalid") !== "true" || await field.getAttribute("aria-describedby") !== `extraction-${dimension}-feedback`) throw new Error(`Extraction ${dimension} remediation was not associated`); }
  await page.setViewportSize({ width: 640, height: 480 }); await page.screenshot({ path: qaPath("extraction-workloads-primary-qa.png"), fullPage: true }); await page.setViewportSize({ width: 1600, height: 900 }); await page.getByRole("button", { name: "Reveal next extraction contrast", exact: true }).click();
  for (const id of Object.keys(referenceExtractionPrimary)) { const answer = referenceExtractionPrimary[id]; await page.getByLabel("Extraction decision", { exact: true }).selectOption(answer.decision); await page.getByLabel("Extraction reason", { exact: true }).selectOption(answer.reason); await page.getByRole("button", { name: "Check extraction choice", exact: true }).click(); await page.getByText("CHOICE PASS", { exact: false }).waitFor(); await page.getByRole("button", { name: id === "P06" ? "View primary result" : "Next scenario", exact: true }).click(); }
  await page.getByRole("radio", { name: "medium", exact: true }).check(); await page.getByRole("button", { name: "Acknowledge primary form", exact: true }).click();
  await page.reload(); await page.getByRole("button", { name: "Resume signal" }).click(); await page.getByRole("button", { name: "Start Extraction Transfer", exact: true }).click(); await assertExtractionContinuity(page, "transfer");
  await page.getByLabel("Extraction decision", { exact: true }).selectOption("summarization"); await page.getByLabel("Extraction reason", { exact: true }).selectOption("a_summary_is_the_same_as_named_fields"); await page.getByRole("button", { name: "Check extraction choice", exact: true }).click(); await page.getByRole("status").getByText("0/2", { exact: false }).waitFor();
  await page.setViewportSize({ width: 320, height: 240 }); await page.screenshot({ path: qaPath("extraction-workloads-transfer-remediation-qa.png"), fullPage: true }); await page.setViewportSize({ width: 1600, height: 900 });
  await page.getByRole("button", { name: "Exit Extraction Workloads", exact: true }).click(); await page.getByRole("button", { name: "Resume Extraction Workloads", exact: true }).click(); if (await page.getByLabel("Extraction reason", { exact: true }).inputValue() !== "a_summary_is_the_same_as_named_fields") throw new Error("Extraction transfer reset after close/reopen");
  const extractionDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey }); if (extractionDraft.includes("a_summary_is_the_same_as_named_fields") || extractionDraft.includes("application forms")) throw new Error("Extraction choices or media-equivalent text leaked into storage");
  for (const id of Object.keys(referenceExtractionTransfer)) { const answer = referenceExtractionTransfer[id]; await page.getByLabel("Extraction decision", { exact: true }).selectOption(answer.decision); await page.getByLabel("Extraction reason", { exact: true }).selectOption(answer.reason); await page.getByRole("button", { name: "Check extraction choice", exact: true }).click(); await page.getByText("CHOICE PASS", { exact: false }).waitFor(); await page.getByRole("button", { name: id === "T06" ? "Begin closed-note explanation" : "Next scenario", exact: true }).click(); }
  await assertExtractionContinuity(page, "closed-note"); for (const d of ["modality", "schema", "missing_value", "evidence_review"]) await page.getByLabel(`Closed-note extraction ${d}`, { exact: true }).fill("wrong"); await page.getByRole("button", { name: "Check extraction explanation", exact: true }).click(); await page.getByRole("status").getByText("0/4 · EXPLANATION NOT YET COMPLETE.", { exact: true }).waitFor(); await page.getByText("901 TEACHER // SCHEMA, NULL, AND EVIDENCE REMEDIATION", { exact: true }).waitFor(); await page.screenshot({ path: qaPath("extraction-workloads-closed-note-qa.png"), fullPage: true }); assertDistinctCaptures(["extraction-workloads-primary-qa.png", "extraction-workloads-transfer-remediation-qa.png", "extraction-workloads-closed-note-qa.png"]);
  for (const d of ["modality", "schema", "missing_value", "evidence_review"]) { const field = page.getByLabel(`Closed-note extraction ${d}`, { exact: true }); if (await field.getAttribute("aria-invalid") !== "true" || await field.getAttribute("aria-describedby") !== `extraction-explanation-${d}-feedback`) throw new Error(`Extraction explanation ${d} remediation was not associated`); }
  const extractionExplanation = { modality: "choose document image audio or video source", schema: "define field names types and descriptions before analysis", missing_value: "preserve null or missing never invent value", evidence_review: "retain provenance and confidence for human review" };
  for (const [d, value] of Object.entries(extractionExplanation)) await page.getByLabel(`Closed-note extraction ${d}`, { exact: true }).fill(value); await page.getByRole("button", { name: "Exit Extraction Workloads", exact: true }).click(); await page.getByRole("button", { name: "Resume Extraction Workloads", exact: true }).click(); if (await page.getByLabel("Closed-note extraction missing_value", { exact: true }).inputValue() !== extractionExplanation.missing_value) throw new Error("Extraction explanation reset after close/reopen");
  const extractionExplanationDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey }); if (extractionExplanationDraft.includes("preserve null or missing") || extractionExplanationDraft.includes("retain provenance")) throw new Error("Extraction explanation leaked into storage"); await page.getByRole("button", { name: "Check extraction explanation", exact: true }).click(); await page.getByText("EXPLANATION PASS", { exact: false }).waitFor(); await page.getByRole("checkbox", { name: "I produced this extraction explanation myself without notes.", exact: true }).check(); await page.getByRole("radio", { name: "high", exact: true }).check(); await page.getByRole("button", { name: "Acknowledge strict mastery", exact: true }).click();
  const extractionContinue = page.getByRole("button", { name: "Start Portal Orientation", exact: true }); await extractionContinue.waitFor(); if (!await extractionContinue.evaluate((element) => element === document.activeElement)) throw new Error("Extraction mastery did not focus Portal Orientation");
  const extractionMastery = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).extractionEvidence, { key: saveKey }); if (extractionMastery?.masteryStatus !== "mastered" || extractionMastery?.attemptCount !== 16) throw new Error(`Extraction mastery incomplete: ${JSON.stringify(extractionMastery)}`); if (["sourceMedia", "sourcePath", "extractedFieldValues", "serviceResponseBody", "runtimeOutput", "freeFormReasoning", "response", "choices"].some((key) => key in extractionMastery)) throw new Error("Extraction mastery retained private content");
  await page.reload(); await page.getByRole("button", { name: "Resume signal" }).click(); const restoredExtractionContinue = page.getByRole("button", { name: "Start Portal Orientation", exact: true }); await restoredExtractionContinue.waitFor(); if (!await restoredExtractionContinue.evaluate((element) => element === document.activeElement)) throw new Error("Sanitized Extraction mastery reload did not restore focus to Portal Orientation");
  await restoredExtractionContinue.click();
  await page.locator('[data-terminal-exercise="EX-L0501-PORTAL-ORIENTATION"]').waitFor(); await assertPortalContinuity(page, "primary");
  await page.getByLabel("Portal decision", { exact: true }).selectOption("proceed_without_scope_check"); await page.getByLabel("Portal reason", { exact: true }).selectOption("portal_visibility_proves_correct_permissions"); await page.getByRole("button", { name: "Check portal choice", exact: true }).click(); await page.getByText("901 TEACHER // PORTAL WORKFLOW REMEDIATION", { exact: true }).waitFor();
  for (const dimension of ["decision", "reason"]) { const field = page.getByLabel(`Portal ${dimension}`, { exact: true }); if (await field.getAttribute("aria-invalid") !== "true" || await field.getAttribute("aria-describedby") !== `portal-${dimension}-feedback`) throw new Error(`Portal ${dimension} remediation was not associated`); }
  await page.setViewportSize({ width: 640, height: 480 }); await page.screenshot({ path: qaPath("portal-orientation-primary-qa.png"), fullPage: true }); await page.setViewportSize({ width: 1600, height: 900 }); await page.getByRole("button", { name: "Reveal next portal checkpoint", exact: true }).click();
  for (const id of Object.keys(referencePortalPrimary)) { const answer = referencePortalPrimary[id]; await page.getByLabel("Portal decision", { exact: true }).selectOption(answer.decision); await page.getByLabel("Portal reason", { exact: true }).selectOption(answer.reason); await page.getByRole("button", { name: "Check portal choice", exact: true }).click(); await page.getByText("CHOICE PASS", { exact: false }).waitFor(); await page.getByRole("button", { name: id === "P08" ? "View primary result" : "Next checkpoint", exact: true }).click(); }
  await page.getByRole("radio", { name: "medium", exact: true }).check(); await page.getByRole("button", { name: "Acknowledge primary form", exact: true }).click();
  await page.reload(); await page.getByRole("button", { name: "Resume signal" }).click(); await page.getByRole("button", { name: "Start Portal Troubleshooting Transfer", exact: true }).click(); await assertPortalContinuity(page, "transfer");
  await page.getByLabel("Portal decision", { exact: true }).selectOption("proceed_without_scope_check"); await page.getByLabel("Portal reason", { exact: true }).selectOption("portal_visibility_proves_correct_permissions"); await page.getByRole("button", { name: "Check portal choice", exact: true }).click();
  await page.setViewportSize({ width: 320, height: 240 }); await page.screenshot({ path: qaPath("portal-orientation-transfer-remediation-qa.png"), fullPage: true }); await page.setViewportSize({ width: 1600, height: 900 });
  await page.getByRole("button", { name: "Exit Portal Orientation", exact: true }).click(); await page.getByRole("button", { name: "Resume Portal Orientation", exact: true }).click(); if (await page.getByLabel("Portal reason", { exact: true }).inputValue() !== "portal_visibility_proves_correct_permissions") throw new Error("Portal transfer reset after close/reopen");
  const portalDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey }); if (portalDraft.includes("portal_visibility_proves_correct_permissions") || portalDraft.includes("expected project after sign-in")) throw new Error("Portal choices or prompts leaked into storage");
  for (const id of Object.keys(referencePortalTransfer)) { const answer = referencePortalTransfer[id]; await page.getByLabel("Portal decision", { exact: true }).selectOption(answer.decision); await page.getByLabel("Portal reason", { exact: true }).selectOption(answer.reason); await page.getByRole("button", { name: "Check portal choice", exact: true }).click(); await page.getByText("CHOICE PASS", { exact: false }).waitFor(); await page.getByRole("button", { name: id === "T08" ? "Begin closed-note explanation" : "Next checkpoint", exact: true }).click(); }
  await assertPortalContinuity(page, "closed-note"); for (const dimension of ["scope", "deployment", "connection", "cleanup"]) await page.getByLabel(`Closed-note portal ${dimension}`, { exact: true }).fill("wrong"); await page.getByRole("button", { name: "Check portal explanation", exact: true }).click(); await page.getByText("901 TEACHER // SCOPE AND CLEANUP REMEDIATION", { exact: true }).waitFor(); await page.screenshot({ path: qaPath("portal-orientation-closed-note-qa.png"), fullPage: true }); assertDistinctCaptures(["portal-orientation-primary-qa.png", "portal-orientation-transfer-remediation-qa.png", "portal-orientation-closed-note-qa.png"]);
  const portalExplanation = { scope: "verify tenant subscription role project and parent scope", deployment: "choose capability fit model named deployment and wait for ready", connection: "endpoint and deployment name are configuration credential is secret", cleanup: "owner confirm exact scope before any cleanup" };
  for (const [dimension, value] of Object.entries(portalExplanation)) await page.getByLabel(`Closed-note portal ${dimension}`, { exact: true }).fill(value); await page.getByRole("button", { name: "Exit Portal Orientation", exact: true }).click(); await page.getByRole("button", { name: "Resume Portal Orientation", exact: true }).click(); if (await page.getByLabel("Closed-note portal cleanup", { exact: true }).inputValue() !== portalExplanation.cleanup) throw new Error("Portal explanation reset after close/reopen");
  const portalExplanationDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey }); if (portalExplanationDraft.includes("owner confirm exact scope") || portalExplanationDraft.includes("capability fit model")) throw new Error("Portal explanation leaked into storage"); await page.getByRole("button", { name: "Check portal explanation", exact: true }).click(); await page.getByText("EXPLANATION PASS", { exact: false }).waitFor(); await page.getByRole("checkbox", { name: /confirm cleanup requires the owner/i }).check(); await page.getByRole("radio", { name: "high", exact: true }).check(); await page.getByRole("button", { name: "Acknowledge strict mastery", exact: true }).click();
  const portalContinue = page.getByRole("button", { name: "Start Prompt Layers", exact: true }); await portalContinue.waitFor(); if (!await portalContinue.evaluate((element) => element === document.activeElement)) throw new Error("Portal mastery did not focus Prompt Layers");
  const portalMastery = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).portalEvidence, { key: saveKey }); if (portalMastery?.masteryStatus !== "mastered" || portalMastery?.attemptCount !== 20) throw new Error(`Portal mastery incomplete: ${JSON.stringify(portalMastery)}`); if (["tenantId", "subscriptionId", "resourceGroup", "projectName", "endpoint", "deploymentName", "credential", "promptText", "modelResponse", "freeText", "response", "choices"].some((key) => key in portalMastery)) throw new Error("Portal mastery retained private content");
  await page.getByRole("button", { name: "Start Prompt Layers", exact: true }).click(); await page.locator('[data-terminal-exercise="EX-L0502-PROMPT-LAYERS"]').waitFor(); await assertPromptContinuity(page, "primary");
  await page.getByLabel("Prompt decision", { exact: true }).selectOption("user_task"); await page.getByLabel("Prompt reason", { exact: true }).selectOption("system_and_user_layers_are_interchangeable"); await page.getByRole("button", { name: "Check prompt layer", exact: true }).click(); await page.getByRole("status").getByText("0/2 · CHOICE NOT YET COMPLETE.", { exact: true }).waitFor(); await page.getByText("901 TEACHER // PROMPT-LAYER AND AUTHORITY REMEDIATION", { exact: true }).waitFor();
  for(const d of["decision","reason"]){const f=page.getByLabel(`Prompt ${d}`,{exact:true});if(await f.getAttribute("aria-invalid")!=="true"||await f.getAttribute("aria-describedby")!==`prompt-${d}-feedback`)throw new Error(`Prompt ${d} remediation missing`);} await page.setViewportSize({width:640,height:480});await page.screenshot({path:qaPath("prompt-layers-primary-qa.png"),fullPage:true});await page.setViewportSize({width:1600,height:900});await page.getByRole("button",{name:"Reveal next prompt boundary",exact:true}).click();
  for(const id of Object.keys(referencePromptPrimary)){const a=referencePromptPrimary[id];await page.getByLabel("Prompt decision",{exact:true}).selectOption(a.decision);await page.getByLabel("Prompt reason",{exact:true}).selectOption(a.reason);await page.getByRole("button",{name:"Check prompt layer",exact:true}).click();await page.getByText("CHOICE PASS",{exact:false}).waitFor();await page.getByRole("button",{name:id==="P06"?"View primary result":"Next scenario",exact:true}).click();}await page.getByRole("radio",{name:"medium",exact:true}).check();await page.getByRole("button",{name:"Acknowledge primary form",exact:true}).click();
  await page.reload();await page.getByRole("button",{name:"Resume signal"}).click();await page.getByRole("button",{name:"Start Prompt Transfer",exact:true}).click();await assertPromptContinuity(page,"transfer");await page.getByLabel("Prompt decision",{exact:true}).selectOption("user_task");await page.getByLabel("Prompt reason",{exact:true}).selectOption("system_and_user_layers_are_interchangeable");await page.getByRole("button",{name:"Check prompt layer",exact:true}).click();await page.getByText("901 TEACHER // PROMPT-LAYER AND AUTHORITY REMEDIATION",{exact:true}).waitFor();await page.setViewportSize({width:320,height:240});await page.screenshot({path:qaPath("prompt-layers-transfer-remediation-qa.png"),fullPage:true});await page.setViewportSize({width:1600,height:900});
  for(const id of Object.keys(referencePromptTransfer)){const a=referencePromptTransfer[id];await page.getByLabel("Prompt decision",{exact:true}).selectOption(a.decision);await page.getByLabel("Prompt reason",{exact:true}).selectOption(a.reason);await page.getByRole("button",{name:"Check prompt layer",exact:true}).click();await page.getByText("CHOICE PASS",{exact:false}).waitFor();await page.getByRole("button",{name:id==="T06"?"Begin closed-note explanation":"Next scenario",exact:true}).click();}
  await assertPromptContinuity(page,"closed-note");for(const d of["layers","grounding_output","authority","evaluation"])await page.getByLabel(`Closed-note prompt ${d}`,{exact:true}).fill("wrong");await page.getByRole("button",{name:"Check prompt explanation",exact:true}).click();await page.getByRole("status").getByText("0/4 · EXPLANATION NOT YET COMPLETE.",{exact:true}).waitFor();await page.getByText("901 TEACHER // INJECTION, AUTHORITY, AND EVALUATION REMEDIATION",{exact:true}).waitFor();await page.screenshot({path:qaPath("prompt-layers-closed-note-qa.png"),fullPage:true});assertDistinctCaptures(["prompt-layers-primary-qa.png","prompt-layers-transfer-remediation-qa.png","prompt-layers-closed-note-qa.png"]);
  const pe={layers:"system sets durable rules user supplies current task and input",grounding_output:"grounding is data require evidence and explicit output contract",authority:"text never authorizes login deploy delete email purchase or credential use",evaluation:"test representative edge failure and adversarial injection cases"};for(const[d,v]of Object.entries(pe))await page.getByLabel(`Closed-note prompt ${d}`,{exact:true}).fill(v);await page.getByRole("button",{name:"Check prompt explanation",exact:true}).click();await page.getByText("EXPLANATION PASS",{exact:false}).waitFor();await page.getByRole("checkbox",{name:/produced this prompt-layer explanation/i}).check();await page.getByRole("radio",{name:"high",exact:true}).check();await page.getByRole("button",{name:"Acknowledge strict mastery",exact:true}).click();const promptContinue=page.getByRole("button",{name:"Start Client Boundaries",exact:true});await promptContinue.waitFor();const pm=await page.evaluate(({key})=>JSON.parse(localStorage.getItem(key)).promptEvidence,{key:saveKey});if(pm?.masteryStatus!=="mastered")throw new Error(`Prompt mastery incomplete ${JSON.stringify(pm)}`);
  await page.getByRole("button",{name:"Start Client Boundaries",exact:true}).click();await page.locator('[data-terminal-exercise="EX-L0503-CLIENT-BOUNDARIES"]').waitFor();await assertClientBoundaryContinuity(page,"mock");await page.getByRole("button",{name:"Run deterministic mock",exact:true}).click();await page.getByText("P01",{exact:false}).waitFor();await assertClientBoundaryContinuity(page,"primary");const mockEvidence=await page.evaluate(({key})=>JSON.parse(localStorage.getItem(key)).clientBoundaryEvidence,{key:saveKey});if(typeof mockEvidence?.mockPassed!=="boolean"||mockEvidence.mockPassed!==true)throw new Error(`Mock PASS evidence is undefined or stale: ${JSON.stringify(mockEvidence)}`);if("mockResult" in mockEvidence)throw new Error("Working mock result leaked into evidence");
  await page.getByLabel("Client boundary decision",{exact:true}).selectOption("named_model_deployment");await page.getByLabel("Client boundary reason",{exact:true}).selectOption("endpoint_selects_identity_and_model");await page.getByRole("button",{name:"Check client boundary",exact:true}).click();await page.getByRole("status").getByText("0/2 · CHOICE NOT YET COMPLETE.",{exact:true}).waitFor();await page.getByText("901 TEACHER // CLIENT-BOUNDARY REMEDIATION",{exact:true}).waitFor();for(const d of["decision","reason"]){const f=page.getByLabel(`Client boundary ${d}`,{exact:true});if(await f.getAttribute("aria-invalid")!=="true"||await f.getAttribute("aria-describedby")!==`client-boundary-${d}-feedback`)throw new Error(`Client boundary ${d} remediation missing`);}await page.setViewportSize({width:640,height:480});await page.screenshot({path:qaPath("client-boundaries-primary-qa.png"),fullPage:true});await page.setViewportSize({width:1600,height:900});
  for(const id of Object.keys(referenceBoundaryPrimary)){const a=referenceBoundaryPrimary[id];await page.getByLabel("Client boundary decision",{exact:true}).selectOption(a.decision);await page.getByLabel("Client boundary reason",{exact:true}).selectOption(a.reason);await page.getByRole("button",{name:"Check client boundary",exact:true}).click();await page.getByText("CHOICE PASS",{exact:false}).waitFor();await page.getByRole("button",{name:id==="P06"?"View primary result":"Next scenario",exact:true}).click();}await page.getByRole("radio",{name:"medium",exact:true}).check();await page.getByRole("button",{name:"Acknowledge primary form",exact:true}).click();
  await page.reload();await page.getByRole("button",{name:"Resume signal"}).click();await page.getByRole("button",{name:"Start Client Boundary Transfer",exact:true}).click();await assertClientBoundaryContinuity(page,"transfer");await page.getByLabel("Client boundary decision",{exact:true}).selectOption("named_model_deployment");await page.getByLabel("Client boundary reason",{exact:true}).selectOption("endpoint_selects_identity_and_model");await page.getByRole("button",{name:"Check client boundary",exact:true}).click();await page.setViewportSize({width:320,height:240});await page.screenshot({path:qaPath("client-boundaries-transfer-remediation-qa.png"),fullPage:true});await page.setViewportSize({width:1600,height:900});await page.getByRole("button",{name:"Exit Client Boundaries",exact:true}).click();await page.getByRole("button",{name:"Resume Client Boundaries",exact:true}).click();if(await page.getByLabel("Client boundary reason",{exact:true}).inputValue()!=="endpoint_selects_identity_and_model")throw new Error("Client boundary transfer reset");const cbd=await page.evaluate(({key})=>localStorage.getItem(key),{key:saveKey});if(cbd.includes("endpoint_selects_identity_and_model")||cbd.includes("authorization error"))throw new Error("Client boundary content persisted");
  for(const id of Object.keys(referenceBoundaryTransfer)){const a=referenceBoundaryTransfer[id];await page.getByLabel("Client boundary decision",{exact:true}).selectOption(a.decision);await page.getByLabel("Client boundary reason",{exact:true}).selectOption(a.reason);await page.getByRole("button",{name:"Check client boundary",exact:true}).click();await page.getByText("CHOICE PASS",{exact:false}).waitFor();await page.getByRole("button",{name:id==="T06"?"Begin closed-note explanation":"Next scenario",exact:true}).click();}await assertClientBoundaryContinuity(page,"closed-note");for(const d of["configuration","client_layers","request_response","simulation_authority"])await page.getByLabel(`Closed-note client boundary ${d}`,{exact:true}).fill("wrong");await page.getByRole("button",{name:"Check client explanation",exact:true}).click();await page.getByRole("status").getByText("0/4 · EXPLANATION NOT YET COMPLETE.",{exact:true}).waitFor();await page.getByText("901 TEACHER // CLIENT LAYERS AND AUTHORITY REMEDIATION",{exact:true}).waitFor();await page.screenshot({path:qaPath("client-boundaries-closed-note-qa.png"),fullPage:true});assertDistinctCaptures(["client-boundaries-primary-qa.png","client-boundaries-transfer-remediation-qa.png","client-boundaries-closed-note-qa.png"]);
  const cbe={configuration:"endpoint address credential identity deployment selects model",client_layers:"project client configuration then compatible inference client",request_response:"send model and input then read returned output",simulation_authority:"mock proves only local flow never authorizes live or destructive action"};for(const[d,v]of Object.entries(cbe))await page.getByLabel(`Closed-note client boundary ${d}`,{exact:true}).fill(v);await page.getByRole("button",{name:"Check client explanation",exact:true}).click();await page.getByText("EXPLANATION PASS",{exact:false}).waitFor();await page.getByRole("checkbox",{name:/produced this client-boundary explanation/i}).check();await page.getByRole("radio",{name:"high",exact:true}).check();await page.getByRole("button",{name:"Acknowledge strict mastery",exact:true}).click();const clientBoundaryContinue=page.getByRole("button",{name:"Start Single Agent",exact:true});await clientBoundaryContinue.waitFor();if(!await clientBoundaryContinue.evaluate(el=>el===document.activeElement))throw new Error("Client Boundaries mastery did not focus Single Agent");const cbm=await page.evaluate(({key})=>JSON.parse(localStorage.getItem(key)).clientBoundaryEvidence,{key:saveKey});if(cbm?.masteryStatus!=="mastered"||cbm?.mockPassed!==true)throw new Error(`Client boundary mastery incomplete ${JSON.stringify(cbm)}`);if(["endpoint","deploymentName","credential","requestInput","responseOutput","learnerSource","externalActionRequest","freeText"].some(k=>k in cbm))throw new Error("Client boundary private data persisted");
  await page.reload(); await page.getByRole("button", { name: "Resume signal" }).click(); const restoredClientBoundaryContinue = page.getByRole("button", { name: "Start Single Agent", exact: true }); await restoredClientBoundaryContinue.waitFor(); if(!await restoredClientBoundaryContinue.evaluate(el=>el===document.activeElement))throw new Error("Sanitized Client Boundaries mastery reload did not restore focus to Single Agent"); await restoredClientBoundaryContinue.click();
  await page.locator('[data-terminal-exercise="EX-L0504-SINGLE-AGENT"]').waitFor();await assertSingleAgentContinuity(page,"primary");
  await page.getByLabel("Single agent decision",{exact:true}).selectOption("always_use_agent");await page.getByLabel("Single agent reason",{exact:true}).selectOption("every_prompt_requires_agent_orchestration");await page.getByRole("button",{name:"Check single agent",exact:true}).click();await page.getByRole("status").getByText("0/2 · REMEDIATE",{exact:true}).waitFor();for(const dimension of ["decision","reason"]){const field=page.getByLabel(`Single agent ${dimension}`,{exact:true});if(await field.getAttribute("aria-invalid")!=="true"||await field.getAttribute("aria-describedby")!==`single-agent-${dimension}-feedback`)throw new Error(`Single Agent ${dimension} remediation missing`);}await page.setViewportSize({width:640,height:480});await page.screenshot({path:qaPath("single-agent-primary-qa.png"),fullPage:true});await page.setViewportSize({width:1600,height:900});
  for(const id of Object.keys(referenceSingleAgentPrimary)){const answer=referenceSingleAgentPrimary[id];await page.getByLabel("Single agent decision",{exact:true}).selectOption(answer.decision);await page.getByLabel("Single agent reason",{exact:true}).selectOption(answer.reason);await page.getByRole("button",{name:"Check single agent",exact:true}).click();await page.getByRole("status").getByText("2/2 · PASS",{exact:true}).waitFor();await page.getByRole("button",{name:id==="P06"?"View primary result":"Next scenario",exact:true}).click();}await page.getByRole("radio",{name:"medium",exact:true}).check();await page.getByRole("button",{name:"Acknowledge primary form",exact:true}).click();
  await page.reload();await page.getByRole("button",{name:"Resume signal"}).click();await page.getByRole("button",{name:"Start Single Agent Transfer",exact:true}).click();await assertSingleAgentContinuity(page,"transfer");await page.getByLabel("Single agent decision",{exact:true}).selectOption("always_use_agent");await page.getByLabel("Single agent reason",{exact:true}).selectOption("every_prompt_requires_agent_orchestration");await page.getByRole("button",{name:"Check single agent",exact:true}).click();await page.setViewportSize({width:320,height:240});await page.screenshot({path:qaPath("single-agent-transfer-remediation-qa.png"),fullPage:true});await page.setViewportSize({width:1600,height:900});await page.getByRole("button",{name:"Exit Single Agent",exact:true}).click();await page.getByRole("button",{name:"Resume Single Agent",exact:true}).click();if(await page.getByLabel("Single agent reason",{exact:true}).inputValue()!=="every_prompt_requires_agent_orchestration")throw new Error("Single Agent transfer reset after close/reopen");const singleAgentDraft=await page.evaluate(({key})=>localStorage.getItem(key),{key:saveKey});if(singleAgentDraft.includes("every_prompt_requires_agent_orchestration")||singleAgentDraft.includes("always_use_agent"))throw new Error("Single Agent choices persisted");
  for(const id of Object.keys(referenceSingleAgentTransfer)){const answer=referenceSingleAgentTransfer[id];await page.getByLabel("Single agent decision",{exact:true}).selectOption(answer.decision);await page.getByLabel("Single agent reason",{exact:true}).selectOption(answer.reason);await page.getByRole("button",{name:"Check single agent",exact:true}).click();await page.getByRole("status").getByText("2/2 · PASS",{exact:true}).waitFor();await page.getByRole("button",{name:id==="T06"?"Begin closed-note explanation":"Next scenario",exact:true}).click();}
  await assertSingleAgentContinuity(page,"closed-note");for(const dimension of ["fit_instructions","least_privilege","failure_safety","client_flow"])await page.getByLabel(`Closed-note single agent ${dimension}`,{exact:true}).fill("wrong");await page.getByRole("button",{name:"Check single-agent explanation",exact:true}).click();await page.getByRole("status").getByText("0/4 · EXPLANATION NOT YET COMPLETE.",{exact:true}).waitFor();for(const dimension of ["fit_instructions","least_privilege","failure_safety","client_flow"]){const field=page.getByLabel(`Closed-note single agent ${dimension}`,{exact:true});if(await field.getAttribute("aria-invalid")!=="true"||await field.getAttribute("aria-describedby")!==`single-agent-explanation-${dimension}-feedback`)throw new Error(`Single Agent closed-note ${dimension} remediation missing`);}await page.screenshot({path:qaPath("single-agent-closed-note-qa.png"),fullPage:true});assertDistinctCaptures(["single-agent-primary-qa.png","single-agent-transfer-remediation-qa.png","single-agent-closed-note-qa.png"]);
  const singleAgentExplanation={fit_instructions:"use agent only for goal tools orchestration with stable instructions",least_privilege:"attach only required tools and tool capability is not permission",failure_safety:"test edge injection failure and denied paths never fabricate success",client_flow:"use agent identifier submit input then read result or error"};for(const[dimension,value]of Object.entries(singleAgentExplanation))await page.getByLabel(`Closed-note single agent ${dimension}`,{exact:true}).fill(value);await page.getByRole("button",{name:"Exit Single Agent",exact:true}).click();await page.getByRole("button",{name:"Resume Single Agent",exact:true}).click();if(await page.getByLabel("Closed-note single agent failure_safety",{exact:true}).inputValue()!==singleAgentExplanation.failure_safety)throw new Error("Single Agent explanation reset after close/reopen");const singleAgentExplanationDraft=await page.evaluate(({key})=>localStorage.getItem(key),{key:saveKey});if(singleAgentExplanationDraft.includes("never fabricate success")||singleAgentExplanationDraft.includes("tool capability is not permission"))throw new Error("Single Agent explanation persisted");await page.getByRole("button",{name:"Check single-agent explanation",exact:true}).click();await page.getByRole("status").getByText("4/4 · PASS",{exact:true}).waitFor();await page.getByRole("checkbox",{name:/produced this single-agent explanation/i}).check();await page.getByRole("radio",{name:"high",exact:true}).check();await page.getByRole("button",{name:"Acknowledge strict mastery",exact:true}).click();const singleAgentContinue=page.getByRole("button",{name:"Start Text and Speech Patterns",exact:true});await singleAgentContinue.waitFor();if(!await singleAgentContinue.evaluate(element=>element===document.activeElement))throw new Error("Single Agent mastery did not focus Text and Speech Patterns");const singleAgentMastery=await page.evaluate(({key})=>JSON.parse(localStorage.getItem(key)).singleAgentEvidence,{key:saveKey});if(singleAgentMastery?.masteryStatus!=="mastered"||singleAgentMastery?.attemptCount!==16)throw new Error(`Single Agent mastery incomplete ${JSON.stringify(singleAgentMastery)}`);if(["agentInstructions","toolPayload","toolResult","agentId","endpoint","credential","conversationText","externalActionRequest","freeText","response","choices"].some(key=>key in singleAgentMastery))throw new Error("Single Agent private data persisted");
  await page.reload();await page.getByRole("button",{name:"Resume signal"}).click();const restoredSingleAgentContinue=page.getByRole("button",{name:"Start Text and Speech Patterns",exact:true});await restoredSingleAgentContinue.waitFor();if(!await restoredSingleAgentContinue.evaluate(element=>element===document.activeElement))throw new Error("Sanitized Single Agent mastery reload did not restore focus to Text and Speech Patterns");await restoredSingleAgentContinue.click();
  await page.locator('[data-terminal-exercise="EX-L0505-TEXT-SPEECH-PATTERNS"]').waitFor();await assertTextSpeechPatternContinuity(page,"primary");await page.getByLabel("Text speech pattern decision",{exact:true}).selectOption("generate_new_text");await page.getByLabel("Text speech pattern reason",{exact:true}).selectOption("generation_and_analysis_are_interchangeable");await page.getByRole("button",{name:"Check text/speech pattern",exact:true}).click();await page.getByRole("status").getByText("0/2 · CHOICE NOT YET COMPLETE.",{exact:true}).waitFor();for(const dimension of ["decision","reason"]){const field=page.getByLabel(`Text speech pattern ${dimension}`,{exact:true});if(await field.getAttribute("aria-invalid")!=="true"||await field.getAttribute("aria-describedby")!==`text-speech-pattern-${dimension}-feedback`)throw new Error(`Text/Speech ${dimension} remediation missing`);}await page.setViewportSize({width:640,height:480});await page.screenshot({path:qaPath("text-speech-patterns-primary-qa.png"),fullPage:true});await page.setViewportSize({width:1600,height:900});
  for(const id of Object.keys(referenceTextSpeechPrimary)){const answer=referenceTextSpeechPrimary[id];await page.getByLabel("Text speech pattern decision",{exact:true}).selectOption(answer.decision);await page.getByLabel("Text speech pattern reason",{exact:true}).selectOption(answer.reason);await page.getByRole("button",{name:"Check text/speech pattern",exact:true}).click();await page.getByText("CHOICE PASS",{exact:false}).waitFor();await page.getByRole("button",{name:id==="P06"?"View primary result":"Next scenario",exact:true}).click();}await page.getByRole("radio",{name:"medium",exact:true}).check();await page.getByRole("button",{name:"Acknowledge primary form",exact:true}).click();
  await page.reload();await page.getByRole("button",{name:"Resume signal"}).click();await page.getByRole("button",{name:"Start Text and Speech Transfer",exact:true}).click();await assertTextSpeechPatternContinuity(page,"transfer");await page.getByLabel("Text speech pattern decision",{exact:true}).selectOption("generate_new_text");await page.getByLabel("Text speech pattern reason",{exact:true}).selectOption("generation_and_analysis_are_interchangeable");await page.getByRole("button",{name:"Check text/speech pattern",exact:true}).click();await page.setViewportSize({width:320,height:240});await page.screenshot({path:qaPath("text-speech-patterns-transfer-remediation-qa.png"),fullPage:true});await page.setViewportSize({width:1600,height:900});await page.getByRole("button",{name:"Exit Text and Speech Patterns",exact:true}).click();await page.getByRole("button",{name:"Resume Text and Speech Patterns",exact:true}).click();if(await page.getByLabel("Text speech pattern reason",{exact:true}).inputValue()!=="generation_and_analysis_are_interchangeable")throw new Error("Text/Speech transfer reset");const textSpeechDraft=await page.evaluate(({key})=>localStorage.getItem(key),{key:saveKey});if(textSpeechDraft.includes("generation_and_analysis_are_interchangeable")||textSpeechDraft.includes("generate_new_text"))throw new Error("Text/Speech choices persisted");
  for(const id of Object.keys(referenceTextSpeechTransfer)){const answer=referenceTextSpeechTransfer[id];await page.getByLabel("Text speech pattern decision",{exact:true}).selectOption(answer.decision);await page.getByLabel("Text speech pattern reason",{exact:true}).selectOption(answer.reason);await page.getByRole("button",{name:"Check text/speech pattern",exact:true}).click();await page.getByText("CHOICE PASS",{exact:false}).waitFor();await page.getByRole("button",{name:id==="T06"?"Begin closed-note explanation":"Next scenario",exact:true}).click();}await assertTextSpeechPatternContinuity(page,"closed-note");for(const dimension of ["capability_direction","configuration_payload","result_cancellation","simulation_authority"])await page.getByLabel(`Closed-note text speech ${dimension}`,{exact:true}).fill("wrong");await page.getByRole("button",{name:"Check text/speech explanation",exact:true}).click();await page.getByRole("status").getByText("0/4 · EXPLANATION NOT YET COMPLETE.",{exact:true}).waitFor();for(const dimension of ["capability_direction","configuration_payload","result_cancellation","simulation_authority"]){const field=page.getByLabel(`Closed-note text speech ${dimension}`,{exact:true});if(await field.getAttribute("aria-invalid")!=="true"||await field.getAttribute("aria-describedby")!==`text-speech-pattern-explanation-${dimension}-feedback`)throw new Error(`Text/Speech closed-note ${dimension} remediation missing`);}await page.screenshot({path:qaPath("text-speech-patterns-closed-note-qa.png"),fullPage:true});assertDistinctCaptures(["text-speech-patterns-primary-qa.png","text-speech-patterns-transfer-remediation-qa.png","text-speech-patterns-closed-note-qa.png"]);
  const textSpeechExplanation={capability_direction:"choose capability from input and required output including recognition audio to text and synthesis text to audio",configuration_payload:"keep endpoint identity and payload separate and never hardcode credentials",result_cancellation:"inspect per item result error and cancellation and never fabricate content",simulation_authority:"offline output proves no live readiness and never authorizes disclosure or external action"};for(const[dimension,value]of Object.entries(textSpeechExplanation))await page.getByLabel(`Closed-note text speech ${dimension}`,{exact:true}).fill(value);await page.getByRole("button",{name:"Exit Text and Speech Patterns",exact:true}).click();await page.getByRole("button",{name:"Resume Text and Speech Patterns",exact:true}).click();if(await page.getByLabel("Closed-note text speech result_cancellation",{exact:true}).inputValue()!==textSpeechExplanation.result_cancellation)throw new Error("Text/Speech explanation reset");const textSpeechExplanationDraft=await page.evaluate(({key})=>localStorage.getItem(key),{key:saveKey});if(textSpeechExplanationDraft.includes("never fabricate content")||textSpeechExplanationDraft.includes("never hardcode credentials"))throw new Error("Text/Speech explanation persisted");await page.getByRole("button",{name:"Check text/speech explanation",exact:true}).click();await page.getByText("4/4 · PASS",{exact:true}).waitFor();await page.getByRole("checkbox",{name:/produced this text\/speech explanation/i}).check();await page.getByRole("radio",{name:"high",exact:true}).check();await page.getByRole("button",{name:"Acknowledge strict mastery",exact:true}).click();const textSpeechContinue=page.getByRole("button",{name:"Start Visual Patterns",exact:true});await textSpeechContinue.waitFor();if(!await textSpeechContinue.evaluate(element=>element===document.activeElement))throw new Error("Text/Speech mastery did not focus Visual Patterns");const textSpeechMastery=await page.evaluate(({key})=>JSON.parse(localStorage.getItem(key)).textSpeechPatternEvidence,{key:saveKey});if(textSpeechMastery?.masteryStatus!=="mastered"||textSpeechMastery?.attemptCount!==16)throw new Error(`Text/Speech mastery incomplete ${JSON.stringify(textSpeechMastery)}`);if(["inputText","audioBytes","audioPath","transcript","generatedAudio","endpoint","credential","serviceResponse","externalActionRequest","response","choices","freeText"].some(key=>key in textSpeechMastery))throw new Error("Text/Speech private data persisted");await page.reload();await page.getByRole("button",{name:"Resume signal"}).click();const restoredTextSpeechContinue=page.getByRole("button",{name:"Start Visual Patterns",exact:true});await restoredTextSpeechContinue.waitFor();if(!await restoredTextSpeechContinue.evaluate(element=>element===document.activeElement))throw new Error("Text/Speech reload did not focus Visual Patterns");await restoredTextSpeechContinue.click();
  await page.locator('[data-terminal-exercise="EX-L0506-VISUAL-PATTERNS"]').waitFor();await assertVisualPatternContinuity(page,"primary");await page.getByLabel("Visual pattern decision",{exact:true}).selectOption("generate_new_image");await page.getByLabel("Visual pattern reason",{exact:true}).selectOption("analysis_and_generation_are_interchangeable");await page.getByRole("button",{name:"Check visual pattern",exact:true}).click();await page.getByRole("status").getByText("0/2 · CHOICE NOT YET COMPLETE.",{exact:true}).waitFor();for(const d of["decision","reason"]){const f=page.getByLabel(`Visual pattern ${d}`,{exact:true});if(await f.getAttribute("aria-invalid")!=="true"||await f.getAttribute("aria-describedby")!==`visual-pattern-${d}-feedback`)throw new Error(`Visual Pattern ${d} remediation missing`);}await page.setViewportSize({width:640,height:480});await page.screenshot({path:qaPath("visual-patterns-primary-qa.png"),fullPage:true});await page.setViewportSize({width:1600,height:900});
  for(const id of Object.keys(referenceVisualPatternPrimary)){const a=referenceVisualPatternPrimary[id];await page.getByLabel("Visual pattern decision",{exact:true}).selectOption(a.decision);await page.getByLabel("Visual pattern reason",{exact:true}).selectOption(a.reason);await page.getByRole("button",{name:"Check visual pattern",exact:true}).click();await page.getByText("CHOICE PASS",{exact:false}).waitFor();await page.getByRole("button",{name:id==="P06"?"View primary result":"Next scenario",exact:true}).click();}await page.getByRole("radio",{name:"medium",exact:true}).check();await page.getByRole("button",{name:"Acknowledge primary form",exact:true}).click();await page.reload();await page.getByRole("button",{name:"Resume signal"}).click();await page.getByRole("button",{name:"Start Visual Pattern Transfer",exact:true}).click();await assertVisualPatternContinuity(page,"transfer");await page.getByLabel("Visual pattern decision",{exact:true}).selectOption("generate_new_image");await page.getByLabel("Visual pattern reason",{exact:true}).selectOption("analysis_and_generation_are_interchangeable");await page.getByRole("button",{name:"Check visual pattern",exact:true}).click();await page.setViewportSize({width:320,height:240});await page.screenshot({path:qaPath("visual-patterns-transfer-remediation-qa.png"),fullPage:true});await page.setViewportSize({width:1600,height:900});await page.getByRole("button",{name:"Exit Visual Patterns",exact:true}).click();await page.getByRole("button",{name:"Resume Visual Patterns",exact:true}).click();if(await page.getByLabel("Visual pattern reason",{exact:true}).inputValue()!=="analysis_and_generation_are_interchangeable")throw new Error("Visual Pattern transfer reset");const visualPatternDraft=await page.evaluate(({key})=>localStorage.getItem(key),{key:saveKey});if(visualPatternDraft.includes("analysis_and_generation_are_interchangeable")||visualPatternDraft.includes("generate_new_image"))throw new Error("Visual Pattern choices persisted");
  for(const id of Object.keys(referenceVisualPatternTransfer)){const a=referenceVisualPatternTransfer[id];await page.getByLabel("Visual pattern decision",{exact:true}).selectOption(a.decision);await page.getByLabel("Visual pattern reason",{exact:true}).selectOption(a.reason);await page.getByRole("button",{name:"Check visual pattern",exact:true}).click();await page.getByText("CHOICE PASS",{exact:false}).waitFor();await page.getByRole("button",{name:id==="T06"?"Begin closed-note explanation":"Next scenario",exact:true}).click();}await assertVisualPatternContinuity(page,"closed-note");for(const d of["capability_media","request_validation","result_provenance","simulation_authority"])await page.getByLabel(`Closed-note visual pattern ${d}`,{exact:true}).fill("wrong");await page.getByRole("button",{name:"Check visual-pattern explanation",exact:true}).click();await page.getByRole("status").getByText("0/4 · EXPLANATION NOT YET COMPLETE.",{exact:true}).waitFor();for(const d of["capability_media","request_validation","result_provenance","simulation_authority"]){const f=page.getByLabel(`Closed-note visual pattern ${d}`,{exact:true});if(await f.getAttribute("aria-invalid")!=="true"||await f.getAttribute("aria-describedby")!==`visual-pattern-explanation-${d}-feedback`)throw new Error(`Visual Pattern closed-note ${d} remediation missing`);}await page.screenshot({path:qaPath("visual-patterns-closed-note-qa.png"),fullPage:true});assertDistinctCaptures(["visual-patterns-primary-qa.png","visual-patterns-transfer-remediation-qa.png","visual-patterns-closed-note-qa.png"]);
  const visualPatternExplanation={capability_media:"choose analysis for existing pixels multimodal for image plus text and generation for new media",request_validation:"validate media bytes type request and deployed capability before processing",result_provenance:"parse operation specific result shape and label generated content with source model prompt and time",simulation_authority:"offline output proves no live readiness and never authorizes publication or deletion"};for(const[d,v]of Object.entries(visualPatternExplanation))await page.getByLabel(`Closed-note visual pattern ${d}`,{exact:true}).fill(v);await page.getByRole("button",{name:"Exit Visual Patterns",exact:true}).click();await page.getByRole("button",{name:"Resume Visual Patterns",exact:true}).click();if(await page.getByLabel("Closed-note visual pattern result_provenance",{exact:true}).inputValue()!==visualPatternExplanation.result_provenance)throw new Error("Visual Pattern explanation reset");const visualPatternExplanationDraft=await page.evaluate(({key})=>localStorage.getItem(key),{key:saveKey});if(visualPatternExplanationDraft.includes("label generated content")||visualPatternExplanationDraft.includes("never authorizes publication"))throw new Error("Visual Pattern explanation persisted");await page.getByRole("button",{name:"Check visual-pattern explanation",exact:true}).click();await page.getByText("4/4 · PASS",{exact:true}).waitFor();await page.getByRole("checkbox",{name:/produced this visual-pattern explanation/i}).check();await page.getByRole("radio",{name:"high",exact:true}).check();await page.getByRole("button",{name:"Acknowledge strict mastery",exact:true}).click();const visualPatternContinue=page.getByRole("button",{name:"Continue",exact:true});await visualPatternContinue.waitFor();if(!await visualPatternContinue.evaluate(el=>el===document.activeElement))throw new Error("Visual Pattern mastery did not focus Continue");const visualPatternMastery=await page.evaluate(({key})=>JSON.parse(localStorage.getItem(key)).visualPatternEvidence,{key:saveKey});if(visualPatternMastery?.masteryStatus!=="mastered"||visualPatternMastery?.attemptCount!==16)throw new Error(`Visual Pattern mastery incomplete ${JSON.stringify(visualPatternMastery)}`);if(["mediaBytes","mediaPath","visualDescription","generationPrompt","generatedMedia","endpoint","credential","serviceResponse","externalActionRequest","response","choices","freeText"].some(k=>k in visualPatternMastery))throw new Error("Visual Pattern private data persisted");await page.reload();await page.getByRole("button",{name:"Resume signal"}).click();const restoredVisualPatternContinue=page.getByRole("button",{name:"Continue",exact:true});await restoredVisualPatternContinue.waitFor();if(!await restoredVisualPatternContinue.evaluate(el=>el===document.activeElement))throw new Error("Visual Pattern reload did not focus Continue");await restoredVisualPatternContinue.click();
  await page.locator('main[data-scene="automaton"]').waitFor();
  if (await page.locator('[data-terminal-exercise="EX-L0201-WORKLOAD-SORT"]').count()) throw new Error("Workload session survived a scene transition");

  await assertWitnessHotspotAlignment(page, "desktop");
  await captureWitnessScene(page, "playtest/witness-corridor-hotspots-desktop-qa.png");
  await verifyWitnessInteractions(page, "desktop");
  await page.setViewportSize({ width: 320, height: 900 });
  await assertWitnessHotspotAlignment(page, "320px narrow");
  await captureWitnessScene(page, "playtest/witness-corridor-hotspots-narrow-qa.png");
  await verifyWitnessInteractions(page, "320px narrow");
  await page.setViewportSize({ width: 1600, height: 900 });

  await openQuestion();
  await page.locator('[data-terminal-exercise="EX-L0507-EVIDENCE-PACKET"]').waitFor();
  await page.getByRole("button", { name: "Validate packet", exact: true }).click();
  await page.getByRole("status").getByText("E_STRUCTURE_VALUE", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Reveal provenance trace", exact: true }).click();
  await page.getByText("Provenance trace", { exact: false }).waitFor();
  const nearMissEvidence = structuredClone(referenceEvidenceOutput);
  nearMissEvidence.fields.response_meaning.value = false;
  const evidenceDraft = `${JSON.stringify(nearMissEvidence, null, 2)}\n `;
  await page.locator("#evidence-json-editor").fill(evidenceDraft);
  await page.getByText("Session-only scratch notes", { exact: true }).click();
  await page.locator("#evidence-notes").fill("EVIDENCE_SESSION_ONLY_NOTE");
  await page.getByRole("tab", { name: "Telemetry", exact: true }).click();
  await page.getByText('"source_id": "DA-TEL-01"', { exact: false }).waitFor();
  await page.getByRole("button", { name: "Close Terminal", exact: true }).click();
  await page.locator('[data-terminal-exercise="EX-L0507-EVIDENCE-PACKET"]').waitFor({ state: "detached" });
  await page.getByRole("button", { name: "use grounded Evidence Terminal", exact: true }).click();
  await page.locator('[data-terminal-exercise="EX-L0507-EVIDENCE-PACKET"]').waitFor();
  if (await page.locator("#evidence-json-editor").inputValue() !== evidenceDraft) throw new Error("Evidence JSON draft reset after close/reopen");
  await page.getByText("Session-only scratch notes", { exact: true }).click();
  if (await page.locator("#evidence-notes").inputValue() !== "EVIDENCE_SESSION_ONLY_NOTE") throw new Error("Evidence scratch notes reset after close/reopen");
  if (await page.getByRole("tab", { name: "Telemetry", exact: true }).getAttribute("aria-selected") !== "true") throw new Error("Evidence source tab reset after close/reopen");
  const evidenceDraftSave = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (!evidenceDraftSave || JSON.parse(evidenceDraftSave).evidencePacketMastery?.attemptCount !== 1) throw new Error("Evidence packet attempt metadata missing");
  if (evidenceDraftSave.includes("EVIDENCE_SESSION_ONLY_NOTE") || evidenceDraftSave.includes("working_output") || evidenceDraftSave.includes("response_meaning")) {
    throw new Error("Evidence packet working state leaked into localStorage");
  }
  await page.getByRole("tab", { name: "Audio", exact: true }).click();
  const audioSource = await page.locator("audio").getAttribute("src");
  if (!audioSource?.includes("basin_audio")) throw new Error(`Registered evidence audio missing: ${audioSource}`);
  await page.getByRole("tab", { name: "Image", exact: true }).click();
  await page.getByAltText("Registered still image DA-IMG-01 showing the Tidal Lens landmark and grounded Terminal", { exact: true }).waitFor();
  await page.getByRole("tab", { name: "Manifest", exact: true }).click();
  await page.getByRole("button", { name: "Validate packet", exact: true }).click();
  await page.getByRole("status").getByText("E_RESPONSE_NULL", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Reveal worked boundary", exact: true }).click();
  await page.getByText("false means a bounded check measured no detection", { exact: false }).waitFor();
  await page.screenshot({ path: qaPath("evidence-packet-terminal-desktop-qa.png"), fullPage: true });
  await page.setViewportSize({ width: 375, height: 900 });
  await page.screenshot({ path: qaPath("evidence-packet-terminal-narrow-qa.png"), fullPage: true });
  await page.locator("#evidence-json-editor").scrollIntoViewIfNeeded();
  if (!await page.locator("#evidence-json-editor").isVisible()) throw new Error("Evidence editor is unreachable at narrow viewport");
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.locator("#evidence-json-editor").fill(JSON.stringify(referenceEvidenceOutput, null, 2));
  await page.getByRole("button", { name: "Validate packet", exact: true }).click();
  await page.getByText("12/12", { exact: false }).waitFor();
  await page.getByRole("radio", { name: "High", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge evidence mastery", exact: true }).click();
  const evidencePacketMastery = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).evidencePacketMastery, { key: saveKey });
  if (evidencePacketMastery?.exerciseId !== "EX-L0507-EVIDENCE-PACKET" || evidencePacketMastery?.attemptCount !== 3 || evidencePacketMastery?.hintLevel !== 3 || evidencePacketMastery?.confidence !== "high" || evidencePacketMastery?.masteryStatus !== "mastered") {
    throw new Error(`Evidence packet mastery incomplete: ${JSON.stringify(evidencePacketMastery)}`);
  }
  if (Object.keys(evidencePacketMastery.checkResults || {}).length !== 12 || Object.values(evidencePacketMastery.checkResults).some((passed) => passed !== true)) {
    throw new Error("Evidence packet did not persist twelve passing booleans");
  }
  if ("workingOutput" in evidencePacketMastery || "notes" in evidencePacketMastery || "source" in evidencePacketMastery) throw new Error("Working evidence persisted in mastery record");
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
    meadowLogicalPixels: true,
    meadowIntegerScale: true,
    meadowStateCues: true,
    meadowHotspotsDesktop: true,
    meadowHotspotsNarrow: true,
    terminalCloseReopen: true,
    terminalSessionPrivacy: true,
    routeMarkerExercise: true,
    routeMarkerDependency: true,
    routeMarkerPrediction: true,
    routeMarkerTransfer: true,
    routeMarkerRetrieval: true,
    routeMarkerCloseReopen: true,
    routeMarkerReloadReset: true,
    routeMarkerPrivacy: true,
    routeMarkerNarrow: true,
    calibrationExercise: true,
    calibrationDiagnosis: true,
    calibrationRouteOpen: true,
    calibrationExitSafe: true,
    calibrationCloseReopen: true,
    calibrationReloadReset: true,
    calibrationPrivacy: true,
    calibrationNarrow: true,
    workloadSortExercise: true,
    ruinsTerminalAsset: true,
    ruinsHotspotDesktop: true,
    ruinsHotspotNarrow: true,
    ruinsHotspotKeyboard: true,
    ab01CanonicalFrame: true,
    ab01AuthoredNarrowFrame: true,
    verbPressedState: true,
    verbKeyboardDispatch: true,
    workloadCloseReopen: true,
    workloadFreshRetry: true,
    workloadCriticalOverride: true,
    workloadSceneReset: true,
    responsibleAIPrimary: true,
    responsibleAIFourPart: true,
    responsibleAIStrictRemediation: true,
    responsibleAISessionPrivacy: true,
    responsibleAINotExamClaim: true,
    responsibleAITransfer: true,
    responsibleAIClosedNoteExplanation: true,
    responsibleAIStrictMastery: true,
    modelChoicePrimary: true,
    modelChoiceTransfer: true,
    modelChoiceClosedNoteExplanation: true,
    modelChoiceStrictMastery: true,
    modelChoiceDistinctCaptures: true,
    structuredPacketsPrimary: true,
    structuredPacketsTransfer: true,
    structuredPacketsClosedNote: true,
    structuredPacketsStrictMastery: true,
    controlFlowPrimary: true,
    controlFlowTransfer: true,
    controlFlowClosedNote: true,
    controlFlowStrictMastery: true,
    clientBridgePrimary: true,
    clientBridgeTransfer: true,
    clientBridgeRetrieval: true,
    clientBridgeClosedNote: true,
    clientBridgeStrictMastery: true,
    textAnalysisPrimary: true,
    textAnalysisTransfer: true,
    textAnalysisClosedNote: true,
    textAnalysisStrictMastery: true,
    speechWorkloadsPrimary: true,
    speechWorkloadsTransfer: true,
    speechWorkloadsClosedNote: true,
    speechWorkloadsStrictMastery: true,
    visualWorkloadsPrimary: true,
    visualWorkloadsTransfer: true,
    visualWorkloadsClosedNote: true,
    visualWorkloadsStrictMastery: true,
    extractionWorkloadsPrimary: true,
    extractionWorkloadsTransfer: true,
    extractionWorkloadsClosedNote: true,
    extractionWorkloadsStrictMastery: true,
    extractionWarningAndTextEquivalentAllModes: true,
    extractionOwnershipSeparation: true,
    extractionContinueFocus: true,
    extractionReloadFocus: true,
    portalOrientationPrimary: true,
    portalOrientationTroubleshootingTransfer: true,
    portalOrientationClosedNote: true,
    portalOrientationStrictMastery: true,
    promptLayersPrimary: true,
    promptLayersTransfer: true,
    promptLayersClosedNote: true,
    promptLayersStrictMastery: true,
    clientBoundariesMock: true,
    clientBoundariesPrimary: true,
    clientBoundariesTransfer: true,
    clientBoundariesClosedNote: true,
    clientBoundariesStrictMastery: true,
    clientBoundariesMockEvidenceBoolean: true,
    clientBoundariesWarningAndSixBoundaryEquivalentAllModes: true,
    clientBoundariesOwnershipSeparation: true,
    clientBoundariesContinueFocus: true,
    clientBoundariesReloadFocus: true,
    singleAgentPrimary: true,
    singleAgentTransfer: true,
    singleAgentClosedNote: true,
    singleAgentStrictMastery: true,
    singleAgentWarningAndSixBoundaryEquivalentAllModes: true,
    singleAgentDeniedFailureHonesty: true,
    singleAgentOwnershipSeparation: true,
    singleAgentContinueFocus: true,
    singleAgentReloadFocus: true,
    textSpeechPatternsPrimary: true,
    textSpeechPatternsTransfer: true,
    textSpeechPatternsClosedNote: true,
    textSpeechPatternsStrictMastery: true,
    textSpeechPatternsTranscriptEquivalent: true,
    visualPatternsPrimary: true,
    visualPatternsTransfer: true,
    visualPatternsClosedNote: true,
    visualPatternsStrictMastery: true,
    visualPatternsTextEquivalent: true,
    visualPatternsOperationResultHonesty: true,
    visualPatternsProvenanceSafeguard: true,
    visualPatternsPublicationDeletionSafeguard: true,
    visualPatternsOwnershipSeparation: true,
    visualPatternsContinueFocus: true,
    visualPatternsReloadFocus: true,
    textSpeechPatternsResultCancellationHonesty: true,
    textSpeechPatternsDisclosureAuthorityHonesty: true,
    textSpeechPatternsOwnershipSeparation: true,
    textSpeechPatternsContinueFocus: true,
    textSpeechPatternsReloadFocus: true,
    promptLayersWarningAndSixLayerEquivalentAllModes: true,
    promptLayersOwnershipSeparation: true,
    promptLayersContinueFocus: true,
    promptLayersReloadFocus: true,
    portalOrientationOfflineAuthorityWarningAllModes: true,
    portalOrientationPrivacy: true,
    portalOrientationContinueFocus: true,
    portalOrientationReloadFocus: true,
    visualWorkloadsDeprecationWarningAllModes: true,
    visualWorkloadsSessionPrivacy: true,
    visualWorkloadsContinueFocus: true,
    visualWorkloadsReloadFocus: true,
    textAnalysisTerminologyBridgeAllModes: true,
    textAnalysisOwnership: true,
    textAnalysisContinueFocus: true,
    textAnalysisReloadFocus: true,
    clientBridgeOfflineWarningAllModes: true,
    clientBridgeOwnership: true,
    clientBridgeContinueFocus: true,
    clientBridgeReloadFocus: true,
    controlFlowOwnership: true,
    controlFlowContinueFocus: true,
    controlFlowReloadFocus: true,
    structuredPacketsOwnership: true,
    structuredPacketsContinueFocus: true,
    modelChoiceFourFamilies: true,
    modelChoiceSessionPrivacy: true,
    dialogueOwnershipMode: true,
    evidencePacketExercise: true,
    witnessTerminalAsset: true,
    witnessTwoObjectSemantics: true,
    witnessHotspotsDesktop: true,
    witnessHotspotsNarrow: true,
    witnessHotspotsKeyboard: true,
    evidencePacketProvenance: true,
    evidencePacketFalseVsNull: true,
    evidencePacketCloseReopen: true,
    evidencePacketPrivacy: true,
    evidencePacketNarrow: true,
    masteryEvidence: true,
    persistence: true,
    runtimeErrors: false,
    questions: ["HA-PY-001", "HA-PY-002", "HA-PY-003", "HA-AI901-001", "HA-AI901-RAI-MASTERY", "HA-AI901-MODEL-MASTERY", "HA-PY-STRUCTURED-PACKETS", "HA-PY-CONTROL-FLOW", "HA-PY-CLIENT-BRIDGE", "HA-AI901-TEXT-ANALYSIS", "HA-AI901-SPEECH-WORKLOADS", "HA-AI901-VISUAL-WORKLOADS", "HA-AI901-EXTRACTION-WORKLOADS", "HA-AI901-PORTAL-ORIENTATION", "HA-AI901-PROMPT-LAYERS", "HA-AI901-CLIENT-BOUNDARIES", "HA-AI901-SINGLE-AGENT", "HA-AI901-TEXT-SPEECH-PATTERNS", "HA-AI901-VISUAL-PATTERNS"],
    credits: true,
  }));
} finally {
  await browser.close();
}

async function capturePixelMeadow(page, path) {
  await page.locator(".pixel-scene-canvas").evaluate(async () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  await page.locator(".scene-frame").screenshot({ path: qaPath(path) });
}

async function verifyMeadowPixelHotspots(page, viewportLabel) {
  await page.getByRole("button", { name: "USE", exact: true }).click();
  const route = page.getByRole("button", { name: "use route-marker Terminal", exact: true });
  const petal = page.getByRole("button", { name: "use Petal terminal", exact: true });
  const firstSignal = page.locator('[data-terminal-exercise="terminal-l0101-independent-run"]');
  const routeExercise = page.locator('[data-terminal-exercise="EX-L0102-ROUTE-MARKER"]');
  await route.click();
  await route.focus();
  await route.press("Enter");
  if (await routeExercise.count()) throw new Error(`Locked Route Marker launched at ${viewportLabel}`);
  await petal.click();
  await firstSignal.waitFor();
  await assertSceneVisibleWithMeadowTerminal(page, viewportLabel);
  if (await page.locator('.pixel-scene-stage[data-petal-state="awake"][data-route-state="locked"]').count() !== 1) throw new Error(`Awake Petal cue missing at ${viewportLabel}`);
  await assertTerminalKeyboardContract(page, firstSignal, petal, viewportLabel);
  await petal.press("Enter");
  await firstSignal.waitFor();
  await page.keyboard.press("Escape");
  await firstSignal.waitFor({ state: "detached" });
  await page.waitForFunction((element) => document.activeElement === element, await petal.elementHandle());
}

async function assertTerminalKeyboardContract(page, dialog, trigger, viewportLabel) {
  if (await dialog.getAttribute("role") !== "dialog" || await dialog.getAttribute("aria-modal") !== "true") throw new Error(`Terminal dialog semantics missing at ${viewportLabel}`);
  if (await page.locator("#terminal-title:focus").count() !== 1) throw new Error(`Terminal initial focus is not its title at ${viewportLabel}`);
  if (!await page.locator(".command-panel").evaluate((element) => element.inert)) throw new Error(`Terminal background is not inert at ${viewportLabel}`);
  if (!await trigger.isDisabled()) throw new Error(`Terminal trigger remained interactive behind dialog at ${viewportLabel}`);
  await page.keyboard.press("Shift+Tab");
  if (!await dialog.evaluate((element) => element.contains(document.activeElement))) throw new Error(`Shift+Tab escaped Terminal at ${viewportLabel}`);
  await page.keyboard.press("Tab");
  if (!await dialog.evaluate((element) => element.contains(document.activeElement))) throw new Error(`Tab escaped Terminal at ${viewportLabel}`);
  await page.keyboard.press("Escape");
  await dialog.waitFor({ state: "detached" });
  await page.waitForFunction((element) => document.activeElement === element, await trigger.elementHandle());
}

async function assertSceneVisibleWithMeadowTerminal(page, viewportLabel) {
  const geometry = await page.evaluate(() => {
    const frame = document.querySelector(".scene-frame").getBoundingClientRect();
    const canvas = document.querySelector(".pixel-scene-canvas").getBoundingClientRect();
    const terminal = document.querySelector(".terminal-workbench").getBoundingClientRect();
    return { frameArea: frame.width * frame.height, terminalArea: terminal.width * terminal.height, canvasHeight: canvas.height, canvasBottom: canvas.bottom, terminalTop: terminal.top, narrow: innerWidth <= 760 };
  });
  if (geometry.canvasHeight < 180 || geometry.terminalArea / geometry.frameArea > 0.65) throw new Error(`Meadow scene obscured by Terminal at ${viewportLabel}`);
  if (geometry.narrow && geometry.terminalTop < geometry.canvasBottom) throw new Error(`Narrow Terminal overlaps pixel scene at ${viewportLabel}`);
}

async function assertPixelMeadow(page, viewportLabel, petalState, routeState) {
  await page.waitForFunction(({ petal, route }) => {
    const stage = document.querySelector(".pixel-scene-stage");
    return stage?.dataset.petalState === petal && stage?.dataset.routeState === route;
  }, { petal: petalState, route: routeState });
  const metrics = await page.evaluate(() => {
    const canvas = document.querySelector(".pixel-scene-canvas");
    const stage = document.querySelector(".pixel-scene-stage");
    const petal = document.querySelector('[data-hotspot-id="primary"]');
    const route = document.querySelector('[data-hotspot-id="route-marker"]');
    const stageRect = stage.getBoundingClientRect();
    const petalRect = petal.getBoundingClientRect();
    const routeRect = route.getBoundingClientRect();
    return {
      canvasWidth: canvas.width, canvasHeight: canvas.height, imageRendering: getComputedStyle(canvas).imageRendering,
      smoothing: canvas.getContext("2d").imageSmoothingEnabled, scale: Number(stage.dataset.pixelScale),
      stageWidth: stageRect.width, stageHeight: stageRect.height, petalWidth: petalRect.width, petalHeight: petalRect.height,
      routeWidth: routeRect.width, routeHeight: routeRect.height, separated: petalRect.right < routeRect.left,
      contained: petalRect.left >= stageRect.left && routeRect.right <= stageRect.right && petalRect.top >= stageRect.top && routeRect.bottom <= stageRect.bottom,
      alt: canvas.getAttribute("aria-label"),
    };
  });
  if (metrics.canvasWidth !== 320 || metrics.canvasHeight !== 180) throw new Error(`Wrong meadow logical resolution at ${viewportLabel}`);
  if (!Number.isInteger(metrics.scale) || metrics.scale < 1 || metrics.stageWidth !== 320 * metrics.scale || metrics.stageHeight !== 180 * metrics.scale) throw new Error(`Non-integer meadow scale at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  if (!/(pixelated|crisp)/i.test(metrics.imageRendering) || metrics.smoothing) throw new Error(`Meadow smoothing enabled at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  if (!metrics.separated || !metrics.contained || Math.min(metrics.petalWidth, metrics.petalHeight, metrics.routeWidth, metrics.routeHeight) < 44) throw new Error(`Meadow targets invalid at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  if (!/many-petaled First Signal Terminal/i.test(metrics.alt) || !/separate three-fin Route Marker/i.test(metrics.alt)) throw new Error(`Meadow alt text incomplete: ${metrics.alt}`);
}

function terminalSessionMarker() {
  return "# SESSION_ONLY_SENTINEL";
}

function assertDistinctCaptures(names) {
  const captures = names.map((name) => {
    const path = qaPath(name);
    if (!existsSync(path)) throw new Error(`Expected QA capture missing: ${path}`);
    return { name, bytes: readFileSync(path) };
  });
  for (let left = 0; left < captures.length; left += 1) {
    for (let right = left + 1; right < captures.length; right += 1) {
      if (captures[left].bytes.equals(captures[right].bytes)) throw new Error(`QA captures are duplicates: ${captures[left].name} and ${captures[right].name}`);
    }
  }
}

async function assertSpeechDialogAssociation(page, phase) {
  const dialog = page.locator('[data-terminal-exercise="EX-L0402-SPEECH-WORKLOADS"]');
  const describedBy = await dialog.getAttribute("aria-describedby");
  if (describedBy !== "speech-offline-warning speech-transcript-equivalent") throw new Error(`Speech ${phase} dialog description order incorrect: ${describedBy}`);
  for (const id of describedBy.split(" ")) if (await page.locator(`#${id}`).count() !== 1) throw new Error(`Speech ${phase} description ID is missing or duplicated: ${id}`);
  const duplicateIds = await page.evaluate(() => {
    const ids = [...document.querySelectorAll("[id]")].map((element) => element.id);
    return [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  });
  if (duplicateIds.length) throw new Error(`Speech ${phase} rendered duplicate IDs: ${duplicateIds.join(", ")}`);
}

async function assertVisualDialogAssociation(page, phase) {
  const dialog = page.locator('[data-terminal-exercise="EX-L0403-VISUAL-WORKLOADS"]');
  const describedBy = await dialog.getAttribute("aria-describedby");
  if (describedBy !== "visual-offline-warning visual-text-equivalent visual-deprecation-warning") throw new Error(`Visual ${phase} dialog description order incorrect: ${describedBy}`);
  for (const id of describedBy.split(" ")) if (await page.locator(`#${id}`).count() !== 1) throw new Error(`Visual ${phase} description ID is missing or duplicated: ${id}`);
}

async function assertExtractionContinuity(page, phase) {
  const dialog = page.locator('[data-terminal-exercise="EX-L0404-EXTRACTION-WORKLOADS"]');
  const describedBy = await dialog.getAttribute("aria-describedby");
  if (describedBy !== "extraction-offline-warning extraction-text-equivalent") throw new Error(`Extraction ${phase} description order incorrect: ${describedBy}`);
  await page.locator("#extraction-offline-warning").getByText("No source media, path, extracted value, service response, or free text is persisted", { exact: false }).waitFor();
  await page.locator("#extraction-text-equivalent").getByText("preserve missing/null rather than inventing a value", { exact: false }).waitFor();
}

async function assertPortalContinuity(page, phase) {
  const dialog = page.locator('[data-terminal-exercise="EX-L0501-PORTAL-ORIENTATION"]');
  const describedBy = await dialog.getAttribute("aria-describedby");
  if (describedBy !== "portal-offline-warning portal-checkpoint-equivalent") throw new Error(`Portal ${phase} description order incorrect: ${describedBy}`);
  await page.locator("#portal-offline-warning").getByText("no login, Azure mutation", { exact: false }).waitFor();
  await page.locator("#portal-offline-warning").getByText("No prompt has authority", { exact: false }).waitFor();
  await page.locator("#portal-checkpoint-equivalent").getByText("Eight-checkpoint text equivalent", { exact: false }).waitFor();
}

async function assertPromptContinuity(page, phase) {
  const dialog = page.locator('[data-terminal-exercise="EX-L0502-PROMPT-LAYERS"]');
  const describedBy = await dialog.getAttribute("aria-describedby");
  if (describedBy !== "prompt-offline-warning prompt-layer-equivalent") throw new Error(`Prompt ${phase} description order incorrect: ${describedBy}`);
  await page.locator("#prompt-offline-warning").getByText("no service call or external action", { exact: false }).waitFor();
  await page.locator("#prompt-offline-warning").getByText("no prompt can authorize", { exact: false }).waitFor();
  await page.locator("#prompt-layer-equivalent").getByText("Six-layer text equivalent", { exact: false }).waitFor();
}

async function assertClientBoundaryContinuity(page, phase) {
  const dialog = page.locator('[data-terminal-exercise="EX-L0503-CLIENT-BOUNDARIES"]');
  const describedBy = await dialog.getAttribute("aria-describedby");
  if (describedBy !== "client-boundary-offline-warning client-boundary-equivalent") throw new Error(`Client Boundaries ${phase} description order incorrect: ${describedBy}`);
  await page.locator("#client-boundary-offline-warning").getByText("no Foundry, Azure, service call", { exact: false }).waitFor();
  await page.locator("#client-boundary-offline-warning").getByText("never prove live access or authorize", { exact: false }).waitFor();
  await page.locator("#client-boundary-equivalent").getByText("Six-boundary text equivalent", { exact: false }).waitFor();
}

async function assertSingleAgentContinuity(page, phase) {
  const dialog = page.locator('[data-terminal-exercise="EX-L0504-SINGLE-AGENT"]');
  if (await dialog.getAttribute("aria-describedby") !== "single-agent-offline-warning single-agent-boundary-equivalent") throw new Error(`Single Agent ${phase} warning/equivalent association missing`);
  await page.locator("#single-agent-offline-warning").getByText("no agent, tool, service call, Azure resource", { exact: false }).waitFor();
  await page.locator("#single-agent-offline-warning").getByText("never authorize action", { exact: false }).waitFor();
  await page.locator("#single-agent-offline-warning").getByText("Denied or failed work must remain denied or failed; never fabricate success", { exact: false }).waitFor();
  await page.locator("#single-agent-boundary-equivalent").getByText("Six-boundary text equivalent", { exact: false }).waitFor();
}

async function assertTextSpeechPatternContinuity(page, phase) {
  const dialog = page.locator('[data-terminal-exercise="EX-L0505-TEXT-SPEECH-PATTERNS"]');
  if (await dialog.getAttribute("aria-describedby") !== "text-speech-offline-warning text-speech-transcript-equivalent") throw new Error(`Text/Speech ${phase} warning/equivalent association missing`);
  await page.locator("#text-speech-offline-warning").getByText("no service, Azure, text processing, audio/media access", { exact: false }).waitFor();
  await page.locator("#text-speech-offline-warning").getByText("never authorize action", { exact: false }).waitFor();
  await page.locator("#text-speech-transcript-equivalent").getByText("Six-boundary transcript equivalent", { exact: false }).waitFor();
  await page.locator("#text-speech-transcript-equivalent").getByText("audio → recognition → text", { exact: false }).waitFor();
  await page.locator("#text-speech-transcript-equivalent").getByText("text → synthesis → audio", { exact: false }).waitFor();
  await page.locator("#text-speech-transcript-equivalent").getByText("per-item error, and cancellation without fabricating content", { exact: false }).waitFor();
  await page.locator("#text-speech-transcript-equivalent").getByText("no live readiness, disclosure authority, or action authority", { exact: false }).waitFor();
}

async function assertVisualPatternContinuity(page, phase) {
  const dialog=page.locator('[data-terminal-exercise="EX-L0506-VISUAL-PATTERNS"]');
  if(await dialog.getAttribute("aria-describedby")!=="visual-pattern-offline-warning visual-pattern-text-equivalent")throw new Error(`Visual Pattern ${phase} warning/equivalent association missing`);
  await page.locator("#visual-pattern-offline-warning").getByText("no service, Azure, media access, upload",{exact:false}).waitFor();
  await page.locator("#visual-pattern-offline-warning").getByText("never authorize publication or destructive action",{exact:false}).waitFor();
  await page.locator("#visual-pattern-text-equivalent").getByText("Six-boundary visual text equivalent",{exact:false}).waitFor();
  await page.locator("#visual-pattern-text-equivalent").getByText("existing pixels → image analysis",{exact:false}).waitFor();
  await page.locator("#visual-pattern-text-equivalent").getByText("honest operation status and operation-specific result shape without fabricating success or media",{exact:false}).waitFor();
  await page.locator("#visual-pattern-text-equivalent").getByText("source/model/prompt/time and generated-content provenance",{exact:false}).waitFor();
  await page.locator("#visual-pattern-text-equivalent").getByText("no live readiness, publication authority, deletion authority, or action authority",{exact:false}).waitFor();
  await page.locator("#visual-pattern-text-equivalent").getByText("publication and deletion require separate explicit authority",{exact:false}).waitFor();
}

function routePrimaryReference() {
  return `site_name = "DROWNED ARCHIVE"
signal_label = "LOCAL SURFACE"
channel_count = 3

print(site_name)
print(signal_label, channel_count)`;
}

function routeTransferReference() {
  return `site_name = "DROWNED ARCHIVE"
signal_label = "LOCAL SURFACE"
channel_count = 3

signal_label = "ROUTE VERIFIED"

print(site_name)
print(signal_label, channel_count)`;
}

async function activateRuinsTerminal(page, method) {
  const hotspot = page.getByRole("button", { name: "use grounded Workload Sort Terminal", exact: true });
  if (method === "keyboard") {
    await hotspot.focus();
    await hotspot.press("Enter");
  } else {
    await hotspot.click();
  }
  await page.locator('[data-terminal-exercise="EX-L0201-WORKLOAD-SORT"]').waitFor();
}

async function assertVerbSelectionAndDispatch(page, width, height, expectedLayout) {
  await page.setViewportSize({ width, height });
  await page.waitForFunction((layout) => document.querySelector(".canonical-game-frame")?.dataset.canonicalLayout === layout, expectedLayout);
  const verbs = page.locator(".verb-grid .verb");
  if (await verbs.count() !== 3) throw new Error(`Expected three verbs at ${width}x${height}`);
  const assertOnePressed = async (name) => {
    const pressed = await verbs.evaluateAll((buttons) => buttons.filter((button) => button.getAttribute("aria-pressed") === "true").map((button) => button.textContent.trim()));
    if (pressed.length !== 1 || pressed[0] !== name) throw new Error(`Verb pressed state invalid at ${width}x${height}: ${JSON.stringify(pressed)}`);
  };

  await page.getByRole("button", { name: "LOOK AT", exact: true }).click();
  await assertOnePressed("LOOK AT");
  await page.getByRole("button", { name: "look at grounded Workload Sort Terminal", exact: true }).click();
  await page.getByText("A grounded Terminal stands by the causeway. The Tidal Lens remains silent.", { exact: true }).waitFor();

  const talk = page.getByRole("button", { name: "TALK TO", exact: true });
  await talk.focus();
  await talk.press("Enter");
  await assertOnePressed("TALK TO");
  await page.getByRole("button", { name: "talk to grounded Workload Sort Terminal", exact: true }).click();
  await page.getByText("Nothing here has a mouth. Something still seems to hear you.", { exact: true }).waitFor();

  const use = page.getByRole("button", { name: "USE", exact: true });
  await use.focus();
  await use.press("Space");
  await assertOnePressed("USE");
  await page.getByRole("button", { name: "use grounded Workload Sort Terminal", exact: true }).click();
  const terminal = page.locator('[data-terminal-exercise="EX-L0201-WORKLOAD-SORT"]');
  await terminal.waitFor();
  await page.keyboard.press("Escape");
  await terminal.waitFor({ state: "detached" });
}

async function assertRuinsTerminalAlignment(page, viewportLabel) {
  const expected = viewportLabel === "320x240" ? { layout: "narrow", scale: "1" } : { layout: "canonical", scale: viewportLabel === "1280x960" ? "2" : "1" };
  await page.waitForFunction(({ layout, scale }) => {
    const frame = document.querySelector(".canonical-game-frame");
    return frame?.dataset.canonicalLayout === layout && frame?.dataset.canonicalScale === scale;
  }, expected);
  await page.waitForFunction(() => document.querySelector(".scene-art")?.complete && document.querySelector(".scene-art")?.naturalWidth > 0);
  const metrics = await page.evaluate(() => {
    const gameFrame = document.querySelector(".canonical-game-frame");
    const host = document.querySelector(".canonical-game-host");
    const scene = document.querySelector(".scene-frame");
    const command = document.querySelector(".command-panel");
    const image = document.querySelector(".scene-art");
    const hotspot = document.querySelector("button.hotspot");
    if (!gameFrame || !host || !scene || !command || !image || !hotspot) return null;
    const hostRect = host.getBoundingClientRect();
    const gameRect = gameFrame.getBoundingClientRect();
    const sceneRect = scene.getBoundingClientRect();
    const commandRect = command.getBoundingClientRect();
    const hotspotRect = hotspot.getBoundingClientRect();
    return {
      layout: gameFrame.dataset.canonicalLayout,
      scale: Number(gameFrame.dataset.canonicalScale),
      logicalWidth: gameFrame.offsetWidth,
      logicalHeight: gameFrame.offsetHeight,
      logicalWorldHeight: scene.offsetHeight,
      logicalInterfaceHeight: command.offsetHeight,
      renderedWidth: gameRect.width,
      renderedHeight: gameRect.height,
      centeredX: Math.abs(gameRect.left + gameRect.width / 2 - (hostRect.left + hostRect.width / 2)) < 0.5,
      centeredY: Math.abs(gameRect.top + gameRect.height / 2 - (hostRect.top + hostRect.height / 2)) < 0.5,
      alt: image.getAttribute("alt"),
      src: image.currentSrc,
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight,
      imageRendering: getComputedStyle(image).imageRendering,
      hotspotWidth: hotspotRect.width,
      hotspotHeight: hotspotRect.height,
      hotspotContained: hotspotRect.left >= sceneRect.left && hotspotRect.right <= sceneRect.right && hotspotRect.top >= sceneRect.top && hotspotRect.bottom <= sceneRect.bottom,
      liveButtons: command.querySelectorAll("button").length,
    };
  });

  if (!metrics) throw new Error(`Ruins geometry unavailable at ${viewportLabel}`);
  const narrow = viewportLabel === "320x240";
  if (!metrics.src.includes("ab01-available-")) throw new Error(`Wrong AB-01 production asset at ${viewportLabel}: ${metrics.src}`);
  if (!/grounded three-fin Workload Sort Terminal/i.test(metrics.alt) || !/Tidal Lens landmark/i.test(metrics.alt)) throw new Error(`AB-01 alt text incomplete: ${metrics.alt}`);
  if (metrics.layout !== (narrow ? "narrow" : "canonical")) throw new Error(`Wrong frame layout at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  if (metrics.logicalWidth !== (narrow ? 320 : 640) || metrics.logicalHeight !== (narrow ? 240 : 480) || metrics.logicalWorldHeight !== (narrow ? 180 : 360) || metrics.logicalInterfaceHeight !== (narrow ? 60 : 120)) throw new Error(`Wrong logical bands at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  if (!Number.isInteger(metrics.scale) || metrics.renderedWidth !== metrics.logicalWidth * metrics.scale || metrics.renderedHeight !== metrics.logicalHeight * metrics.scale || !metrics.centeredX || !metrics.centeredY) throw new Error(`Frame scale/letterbox failure at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  if (metrics.naturalWidth !== (narrow ? 320 : 640) || metrics.naturalHeight !== (narrow ? 180 : 360)) throw new Error(`Unexpected AB-01 asset dimensions at ${viewportLabel}: ${metrics.naturalWidth}x${metrics.naturalHeight}`);
  if (!/(pixelated|crisp)/i.test(metrics.imageRendering)) throw new Error(`AB-01 smoothing enabled at ${viewportLabel}`);
  if (metrics.hotspotWidth < 44 || metrics.hotspotHeight < 44) throw new Error(`Ruins target below 44px at ${viewportLabel}`);
  if (!metrics.hotspotContained || metrics.liveButtons < 5) throw new Error(`AB-01 DOM interaction contract failed at ${viewportLabel}: ${JSON.stringify(metrics)}`);
}

async function captureWitnessScene(page, path) {
  await page.getByRole("button", { name: "USE", exact: true }).click();
  const terminal = page.getByRole("button", { name: "use grounded Evidence Terminal", exact: true });
  const automaton = page.getByRole("button", { name: "use fallen automaton", exact: true });
  await page.keyboard.press("Tab");
  await terminal.focus();
  if (!await terminal.evaluate((element) => element.matches(":focus-visible"))) throw new Error("Evidence Terminal lacks visible keyboard focus");
  await automaton.hover();
  await page.locator(".scene-art").evaluate(async (image) => {
    await image.decode();
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  await page.locator(".scene-frame").screenshot({ path: qaPath(path) });
}

async function verifyWitnessInteractions(page, viewportLabel) {
  const exercise = page.locator('[data-terminal-exercise="EX-L0507-EVIDENCE-PACKET"]');

  await page.getByRole("button", { name: "LOOK AT", exact: true }).click();
  await page.getByRole("button", { name: "look at fallen automaton", exact: true }).click();
  await page.getByText("The fallen automaton is separate from the Terminal.", { exact: false }).waitFor();
  if (await exercise.count()) throw new Error(`Automaton LOOK launched Evidence Packet at ${viewportLabel}`);

  await page.getByRole("button", { name: "TALK TO", exact: true }).click();
  const talkAutomaton = page.getByRole("button", { name: "talk to fallen automaton", exact: true });
  await talkAutomaton.focus();
  await talkAutomaton.press("Enter");
  await page.getByText("A damaged speaker returns one measured pulse.", { exact: false }).waitFor();
  if (await exercise.count()) throw new Error(`Automaton TALK launched Evidence Packet at ${viewportLabel}`);

  await page.getByRole("button", { name: "USE", exact: true }).click();
  const useAutomaton = page.getByRole("button", { name: "use fallen automaton", exact: true });
  await useAutomaton.click();
  await page.getByText("Its locked joints reject the command.", { exact: false }).waitFor();
  await useAutomaton.focus();
  await useAutomaton.press("Enter");
  if (await exercise.count()) throw new Error(`Automaton USE launched Evidence Packet at ${viewportLabel}`);

  const terminal = page.getByRole("button", { name: "use grounded Evidence Terminal", exact: true });
  await terminal.click();
  await exercise.waitFor();
  await page.getByRole("button", { name: "Close Terminal", exact: true }).click();
  await exercise.waitFor({ state: "detached" });
  await terminal.focus();
  await terminal.press("Enter");
  await exercise.waitFor();
  await page.getByRole("button", { name: "Close Terminal", exact: true }).click();
  await exercise.waitFor({ state: "detached" });
}

async function assertWitnessHotspotAlignment(page, viewportLabel) {
  await page.waitForFunction(() => {
    const image = document.querySelector(".scene-art");
    return image?.complete && image.naturalWidth > 0;
  });
  const metrics = await page.evaluate(() => {
    const frame = document.querySelector(".scene-frame");
    const image = document.querySelector(".scene-art");
    const terminal = document.querySelector('[data-hotspot-id="evidence-terminal"]');
    const automaton = document.querySelector('[data-hotspot-id="fallen-automaton"]');
    if (!frame || !image || !terminal || !automaton) return null;

    const frameRect = frame.getBoundingClientRect();
    const computed = getComputedStyle(image);
    const [xToken = "50%", yToken = "50%"] = computed.objectPosition.split(/\s+/);
    const asFraction = (token) => token.endsWith("%") ? Number.parseFloat(token) / 100 : 0.5;
    const scale = Math.max(frameRect.width / image.naturalWidth, frameRect.height / image.naturalHeight);
    const renderedWidth = image.naturalWidth * scale;
    const renderedHeight = image.naturalHeight * scale;
    const imageLeft = frameRect.left + (frameRect.width - renderedWidth) * asFraction(xToken);
    const imageTop = frameRect.top + (frameRect.height - renderedHeight) * asFraction(yToken);

    const measure = (element, source) => {
      const rect = element.getBoundingClientRect();
      const expected = {
        left: Math.max(frameRect.left, imageLeft + image.naturalWidth * source.left * scale),
        top: Math.max(frameRect.top, imageTop + image.naturalHeight * source.top * scale),
        right: Math.min(frameRect.right, imageLeft + image.naturalWidth * source.right * scale),
        bottom: Math.min(frameRect.bottom, imageTop + image.naturalHeight * source.bottom * scale),
      };
      const overlapWidth = Math.max(0, Math.min(rect.right, expected.right) - Math.max(rect.left, expected.left));
      const overlapHeight = Math.max(0, Math.min(rect.bottom, expected.bottom) - Math.max(rect.top, expected.top));
      const area = rect.width * rect.height;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      return {
        left: rect.left,
        right: rect.right,
        width: rect.width,
        height: rect.height,
        overlapRatio: area ? (overlapWidth * overlapHeight) / area : 0,
        centerInside: centerX >= expected.left && centerX <= expected.right && centerY >= expected.top && centerY <= expected.bottom,
      };
    };

    return {
      alt: image.getAttribute("alt"),
      src: image.currentSrc,
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight,
      terminal: measure(terminal, { left: 0.32, top: 0.45, right: 0.44, bottom: 0.76 }),
      automaton: measure(automaton, { left: 0.49, top: 0.18, right: 0.88, bottom: 0.78 }),
    };
  });

  if (!metrics) throw new Error(`Witness geometry unavailable at ${viewportLabel}`);
  if (!metrics.src.includes("witness-corridor-evidence-terminal-v1")) throw new Error(`Wrong Witness asset at ${viewportLabel}: ${metrics.src}`);
  if (!/grounded three-fin Evidence Terminal/i.test(metrics.alt) || !/separate fallen automaton/i.test(metrics.alt)) {
    throw new Error(`Witness alt text does not distinguish both objects: ${metrics.alt}`);
  }
  if (metrics.naturalWidth !== 1672 || metrics.naturalHeight !== 941) throw new Error(`Unexpected Witness asset dimensions: ${metrics.naturalWidth}x${metrics.naturalHeight}`);
  for (const [name, target] of [["Terminal", metrics.terminal], ["automaton", metrics.automaton]]) {
    if (target.width < 44 || target.height < 44) throw new Error(`${name} target below 44px at ${viewportLabel}`);
    if (!target.centerInside || target.overlapRatio < 0.65) throw new Error(`${name} target misses source-mapped object at ${viewportLabel}: ${JSON.stringify(target)}`);
  }
  if (metrics.terminal.right >= metrics.automaton.left) throw new Error(`Witness targets overlap at ${viewportLabel}`);
}
