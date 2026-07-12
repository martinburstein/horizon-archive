import { chromium } from "../ai900_practice_assessment_logger/node_modules/playwright/index.mjs";
import referenceEvidenceOutput from "../curriculum/lessons/L-05-07/reference_output.json" with { type: "json" };
import referenceResponsibleAI from "../curriculum/lessons/L-02-02/reference_primary_answers.json" with { type: "json" };
import referenceResponsibleAITransfer from "../curriculum/lessons/L-02-02/reference_transfer_answers.json" with { type: "json" };

const url = process.env.HORIZON_ARCHIVE_URL || "http://127.0.0.1:5174/";
const saveKey = "horizon-archive-prologue-v1";
const calibrationKeyboardHelp = "Tab moves through this workspace. Shift+Tab moves back. Escape closes without discarding this session.";
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
  await page.locator(".scene-frame").screenshot({ path: "playtest/route-marker-hotspot-desktop-qa.png" });
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
  await page.screenshot({ path: "playtest/route-marker-terminal-desktop-qa.png", fullPage: true });
  await page.setViewportSize({ width: 320, height: 900 });
  await page.screenshot({ path: "playtest/route-marker-terminal-narrow-qa.png", fullPage: true });
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
  await page.screenshot({ path: "playtest/calibration-terminal-desktop-qa.png", fullPage: true });
  await page.setViewportSize({ width: 320, height: 900 });
  await page.screenshot({ path: "playtest/calibration-terminal-narrow-qa.png", fullPage: true });
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
    await page.screenshot({ path: `playtest/ab01-canonical-${label}.png` });
  }
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.getByRole("button", { name: "use grounded Workload Sort Terminal", exact: true }).hover();
  await page.locator(".scene-frame").screenshot({ path: "playtest/drowned-archive-terminal-desktop-qa.png" });
  await activateRuinsTerminal(page, "pointer");
  await page.getByRole("button", { name: "Close Terminal", exact: true }).click();
  await activateRuinsTerminal(page, "keyboard");
  await page.getByRole("button", { name: "Close Terminal", exact: true }).click();

  await page.setViewportSize({ width: 320, height: 240 });
  await assertRuinsTerminalAlignment(page, "320x240");
  await page.getByRole("button", { name: "use grounded Workload Sort Terminal", exact: true }).hover();
  await page.locator(".scene-frame").screenshot({ path: "playtest/drowned-archive-terminal-narrow-qa.png" });
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
  await page.screenshot({ path: "playtest/responsible-ai-primary-qa.png", fullPage: true });
  await page.getByRole("button", { name: "Exit Practice", exact: true }).click();
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
  const responsibleAIMastery = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).responsibleAIEvidence, { key: saveKey });
  if (responsibleAIMastery?.masteryStatus !== "mastered" || responsibleAIMastery?.form !== "explanation" || responsibleAIMastery?.attemptCount !== 16) throw new Error(`Responsible AI strict mastery evidence incomplete: ${JSON.stringify(responsibleAIMastery)}`);
  if (Object.keys(responsibleAIMastery.dimensionCorrectness || {}).length !== 13 || Object.values(responsibleAIMastery.dimensionCorrectness).some((dimensions) => Object.keys(dimensions).length !== 4 || Object.values(dimensions).some((value) => value !== true))) throw new Error("Responsible AI two-form plus explanation gate incomplete");
  if (["response", "choices", "reasoning", "explanation", "freeFormReasoning", "scenarioNotes", "runtimeDisplay"].some((key) => key in responsibleAIMastery)) throw new Error("Responsible AI mastery evidence retained private response content");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
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
  await page.screenshot({ path: "playtest/evidence-packet-terminal-desktop-qa.png", fullPage: true });
  await page.setViewportSize({ width: 375, height: 900 });
  await page.screenshot({ path: "playtest/evidence-packet-terminal-narrow-qa.png", fullPage: true });
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
    questions: ["HA-PY-001", "HA-PY-002", "HA-PY-003", "HA-AI901-001", "HA-AI901-RAI-MASTERY", "HA-AI901-002"],
    credits: true,
  }));
} finally {
  await browser.close();
}

async function capturePixelMeadow(page, path) {
  await page.locator(".pixel-scene-canvas").evaluate(async () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  await page.locator(".scene-frame").screenshot({ path });
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
  await page.locator(".scene-frame").screenshot({ path });
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
