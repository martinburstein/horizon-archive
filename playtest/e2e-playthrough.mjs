import { chromium } from "../ai900_practice_assessment_logger/node_modules/playwright/index.mjs";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import referenceEvidenceOutput from "../curriculum/lessons/L-05-07/reference_output.json" with { type: "json" };
import referenceResponsibleAI from "../curriculum/lessons/L-02-02/reference_primary_answers.json" with { type: "json" };
import referenceResponsibleAITransfer from "../curriculum/lessons/L-02-02/reference_transfer_answers.json" with { type: "json" };
import referenceModelChoicePrimary from "../curriculum/lessons/L-02-03/reference_primary_answers.json" with { type: "json" };
import referenceModelChoiceTransfer from "../curriculum/lessons/L-02-03/reference_transfer_answers.json" with { type: "json" };
import referenceFinalConfidence from "../curriculum/readiness/SIM-03/reference_answers.json" with { type: "json" };
import referenceFinalConfidenceEntry from "../curriculum/readiness/SIM-03/reference_entry_evidence.json" with { type: "json" };
import {
  CITY_THRESHOLD_SAVE_KEY,
  anchorPacketReference,
  cum01Forms,
} from "../horizon-archive-game/src/cityThresholdExercise.js";
import {
  CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY,
  sanitizeCustodyLedgerNormalRouteSave,
  writeCustodyLedgerNormalComparisonCheckpoint,
} from "../horizon-archive-game/src/CustodyLedgerNormalRoute.js";
import {
  beginCustodyLedgerSaveEligibility,
  commitCustodyLedgerBoundedComparison,
  createCustodyLedgerPersistenceAdapter,
  deriveCustodyLedgerSaveEligibility,
  prepareCustodyLedgerSave,
} from "../horizon-archive-game/src/custodyLedgerExercise.js";
import { CALIBRATION_MARGIN_REVIEW_SAVE_KEY } from "../horizon-archive-game/src/CalibrationMarginReviewSave.js";
import { THREE_CURRENT_REACH_SAVE_KEY } from "../horizon-archive-game/src/ThreeCurrentReachNormal.js";
import { MANYFOLD_RETURN_SAVE_KEY } from "../horizon-archive-game/src/ManyfoldReturnNormal.js";
import { INTERVAL_WORKS_SAVE_KEY } from "../horizon-archive-game/src/IntervalWorksNormal.js";
import { BRAIDED_VERGE_SAVE_KEY } from "../horizon-archive-game/src/BraidedVergeNormal.js";
import { OFFSET_REACH_SAVE_KEY } from "../horizon-archive-game/src/OffsetReachNormal.js";
import { OCCLUDED_FOLD_SAVE_KEY } from "../horizon-archive-game/src/OccludedFoldNormal.js";
import { COUNTERFIELD_SAVE_KEY } from "../horizon-archive-game/src/CounterfieldNormal.js";
import { UNBORROWED_REACH_SAVE_KEY } from "../horizon-archive-game/src/UnborrowedReachNormal.js";
import { MEASURED_HORIZON_SAVE_KEY } from "../horizon-archive-game/src/MeasuredHorizonNormal.js";

const url = process.env.HORIZON_ARCHIVE_URL || "http://127.0.0.1:5174/";
const saveKey = "horizon-archive-prologue-v1";
const calibrationKeyboardHelp = "Tab moves through this workspace. Shift+Tab moves back. Escape closes without discarding this session.";
const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const qaRoot = process.env.HORIZON_ARCHIVE_QA_DIR || resolve(repositoryRoot, "playtest");
const productCandidate = process.env.HORIZON_ARCHIVE_PRODUCT_CANDIDATE || "unfrozen-product-candidate";
const probeCandidate = process.env.HORIZON_ARCHIVE_PROBE_CANDIDATE || "unfrozen-probe-candidate";
const productPredecessor = "a9776e337f1820776864a5690332c364d0fb2556";
const harnessPredecessor = "bf58e528bc6ce4088f81f2c782ce2895259ab9fd";
mkdirSync(qaRoot, { recursive: true });
const qaPath = (path) => resolve(qaRoot, path.replace(/^playtest[\\/]/, ""));
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
const referenceSdkRoutePrimary = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-03/sdk_route_reference_answers.json"), "utf8"));
const referenceSdkRouteTransfer = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-03/sdk_route_reference_transfer_answers.json"), "utf8"));
const referenceSdkTracePrimary = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-03/sdk_route_trace_reference_answers.json"), "utf8"));
const referenceSingleAgentPrimary = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-04/reference_primary_answers.json"), "utf8"));
const referenceSingleAgentTransfer = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-04/reference_transfer_answers.json"), "utf8"));
const referenceTextSpeechPrimary = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-05/reference_primary_answers.json"), "utf8"));
const referenceTextSpeechTransfer = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-05/reference_transfer_answers.json"), "utf8"));
const referenceVisualPatternPrimary = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-06/reference_primary_answers.json"), "utf8"));
const referenceVisualPatternTransfer = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-05-06/reference_transfer_answers.json"), "utf8"));
const referenceObjectiveLedgerPrimary = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-06-01/reference_primary_answers.json"), "utf8"));
const referenceObjectiveLedgerTransfer = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-06-01/reference_transfer_answers.json"), "utf8"));
const referenceRemediationPlannerPrimary = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-06-02/reference_primary_answers.json"), "utf8"));
const referenceRemediationPlannerTransfer = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-06-02/reference_transfer_answers.json"), "utf8"));
const referenceCapstonePrimary = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-06-03/reference_primary_answers.json"), "utf8"));
const referenceCapstoneTransfer = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/lessons/L-06-03/reference_transfer_answers.json"), "utf8"));
const referenceMixedSimulation = JSON.parse(readFileSync(resolve(repositoryRoot, "curriculum/readiness/SIM-01/reference_answers.json"), "utf8"));
const laterRailFixtures = await buildSanctionedLaterRailFixtures();
const browser = await chromium.launch({ headless: true });

try {
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  const canonicalJourneyStartedAt = Date.now();
  const runtimeErrors = [];
  const mainThreadSamples = [];
  const sixfoldLayouts = [];
  const sixfoldFocus = {
    detection: false, look: false, talk: false, use: false, close: false, escape: false,
    miss: false, primaryAcknowledgement: false, mastery: false, reload: false,
    return: false, nextContinuation: false,
  };
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
  if (await page.locator('main[data-scene="city-threshold"]').count()) throw new Error("Forged save reached City Threshold");
  await page.locator('main[data-scene="meadow"]').waitFor();

  await page.goto(url);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.getByRole("button", { name: "New expedition" }).click();
  await completeOpening(page);
  if (await page.locator('[data-hotspot-id="fracture-nursery"]').count()) throw new Error("Fracture Nursery rendered before Route Marker mastery");

  await assertResponsiveMeadow(page, "desktop", "locked", "locked");
  await captureMeadow(page, "playtest/glass-meadow-pixel-desktop-qa.png");
  await verifyMeadowHotspots(page, "desktop");
  await page.setViewportSize({ width: 320, height: 900 });
  await assertResponsiveMeadow(page, "320px narrow", "locked", "locked");
  await captureMeadow(page, "playtest/glass-meadow-pixel-narrow-qa.png");
  await verifyMeadowHotspots(page, "320px narrow");
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
  await page.getByText("Acknowledge First Signal at the field-linked Terminal", { exact: false }).waitFor();
  if (await page.locator('[data-terminal-exercise="EX-L0102-ROUTE-MARKER"]').count()) throw new Error("Route marker opened before L-01-01");
  await page.locator('button.hotspot[data-primary-hotspot="true"]').click();
  await page.locator('[data-terminal-exercise="terminal-l0101-independent-run"]').waitFor();
  await page.locator('#first-terminal-orientation-heading:focus, #terminal-title:focus').waitFor();
  await page.getByText("This is course-authored Python practice, not a Microsoft exam question", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Close", exact: true }).click();
  await page.getByText("executes the file", { exact: false }).waitFor();
  await page.keyboard.press("Escape");
  await page.locator('[data-terminal-exercise="terminal-l0101-independent-run"]').waitFor({ state: "detached" });
  await page.locator('button.hotspot[data-primary-hotspot="true"]:focus').waitFor();
  await page.locator('button.hotspot[data-primary-hotspot="true"]').press("Enter");
  await page.getByText("Run one real Python file", { exact: true }).waitFor();
  await page.getByText("executes the file", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Run", exact: true }).click();
  await page.getByRole("button", { name: "Yes — the lesson is lost", exact: true }).click();
  await page.getByText("retries are unlimited", { exact: false }).waitFor();
  await page.getByRole("button", { name: "No — inspect, hint, and retry", exact: true }).click();
  await page.locator(".orientation-boundaries dd").filter({ hasText: "Slot 01" }).waitFor();
  await page.getByText("ALLOWLISTED MASTERY EVIDENCE", { exact: true }).waitFor();
  await page.getByRole("button", { name: "No — it stays separate", exact: true }).click();
  await page.getByRole("button", { name: "Python signal: 2", exact: true }).click();
  await page.locator("#terminal-code:focus").waitFor();
  const orientationSave = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (orientationSave?.includes("run-control") || orientationSave?.includes("output-prediction") || orientationSave?.includes("Terminal found.")) {
    throw new Error("Session-only orientation answers or Python source leaked into localStorage");
  }
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
  await assertResponsiveMeadow(page, "Petal complete", "completed", "awake");

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
  const nurseryAvailable = page.getByRole("button", { name: "use Fracture Nursery coupling, available", exact: true });
  await nurseryAvailable.waitFor();
  await page.waitForFunction(() => document.activeElement?.dataset.hotspotId === "fracture-nursery");
  if (await page.getByText(/Optional calibration|Resume optional calibration/i).count()) throw new Error("Generic calibration launcher survived Nursery registration");
  for (const [width, height, label] of [
    [1920, 1080, "Nursery 1920x1080"],
    [1366, 768, "Nursery 1366x768"],
    [390, 844, "Nursery 390x844"],
    [768, 900, "Nursery effective-200 768x900"],
    [320, 180, "Nursery retained 320x180"],
    [320, 240, "Nursery retained 320x240"],
  ]) {
    await page.setViewportSize({ width, height });
    await assertResponsiveMeadow(page, label, "completed", "completed");
    await assertFractureNurseryGeometry(page, label);
  }
  await page.setViewportSize({ width: 1600, height: 900 });
  await captureMeadow(page, "playtest/glass-meadow-pixel-completed-qa.png");
  const routeMastery = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).routeMarkerMastery, { key: saveKey });
  if (routeMastery?.exerciseId !== "EX-L0102-ROUTE-MARKER" || routeMastery?.attemptCount !== 6 || routeMastery?.hintLevel !== 2 || routeMastery?.confidence !== "medium" || routeMastery?.masteryStatus !== "mastered") {
    throw new Error(`Route marker mastery incomplete: ${JSON.stringify(routeMastery)}`);
  }
  if (routeMastery.predictionCorrectness?.primary?.some((value) => !value) || routeMastery.predictionCorrectness?.transfer?.some((value) => !value)) throw new Error("Final prediction correctness incomplete");
  if (Object.values(routeMastery.checkResults?.retrieval || {}).some((value) => !value)) throw new Error("Retrieval gate incomplete");
  if (["source", "prediction", "output", "notes", "answers"].some((key) => key in routeMastery)) throw new Error("Route working state persisted in mastery evidence");

  await page.getByRole("button", { name: "LOOK AT", exact: true }).click();
  await sampleActivation(page.getByRole("button", { name: "look at Fracture Nursery coupling, available", exact: true }), "Nursery LOOK", mainThreadSamples);
  await page.getByText("Clouded test-fractures", { exact: false }).waitFor();
  await page.getByRole("button", { name: "TALK TO", exact: true }).click();
  await sampleActivation(page.getByRole("button", { name: "talk to Fracture Nursery coupling, available", exact: true }), "Nursery TALK", mainThreadSamples);
  await page.getByText("Complete silence", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Depart for Chapter II, The Drowned Archive", exact: true }).click();
  await page.locator('main[data-scene="ruins"]').waitFor();
  const preReturnEvidence = await page.evaluate(({ key }) => {
    const save = JSON.parse(localStorage.getItem(key));
    return JSON.stringify({ routeMarkerMastery: save.routeMarkerMastery, calibrationMastery: save.calibrationMastery ?? null });
  }, { key: saveKey });
  await page.getByRole("button", { name: "Return to Chapter I, Glass Meadow", exact: true }).click();
  await page.locator('main[data-scene="meadow"]').waitFor();
  const postReturnEvidence = await page.evaluate(({ key }) => {
    const save = JSON.parse(localStorage.getItem(key));
    return JSON.stringify({ routeMarkerMastery: save.routeMarkerMastery, calibrationMastery: save.calibrationMastery ?? null });
  }, { key: saveKey });
  if (postReturnEvidence !== preReturnEvidence) throw new Error("Drowned-to-Meadow return mutated route or calibration evidence");
  await page.getByRole("button", { name: "Depart for Chapter II, The Drowned Archive", exact: true }).evaluate((element) => {
    if (document.activeElement !== element) throw new Error("Unstarted Nursery return did not focus departure");
  });
  await page.getByRole("button", { name: "USE", exact: true }).click();
  await sampleActivation(page.getByRole("button", { name: "use Fracture Nursery coupling, available", exact: true }), "Nursery USE", mainThreadSamples);
  await page.locator('[data-terminal-exercise="EX-L0103-CALIBRATION-DEBUG"]').waitFor();
  await page.getByText(calibrationKeyboardHelp, { exact: true }).waitFor();
  await page.getByRole("button", { name: "Exit Calibration", exact: true }).waitFor();
  await page.getByText("ROUTE OPEN", { exact: false }).first().waitFor();
  await page.getByText("NameError", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Exit Calibration", exact: true }).click();
  await assertResponsiveMeadow(page, "calibration exit", "completed", "completed");
  await page.getByRole("button", { name: "Depart for Chapter II, The Drowned Archive", exact: true }).waitFor();
  await page.getByRole("button", { name: "use Fracture Nursery coupling, available", exact: true }).click();
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
  await assertResponsiveMeadow(page, "calibration failed exit", "completed", "completed");
  await page.getByRole("button", { name: "use Fracture Nursery coupling, in progress", exact: true }).click();
  await page.getByText(calibrationKeyboardHelp, { exact: true }).waitFor();
  const calibrationSourceTab = page.getByRole("button", { name: "source", exact: true });
  await calibrationSourceTab.focus();
  await calibrationSourceTab.press("Enter");
  if (!(await page.locator("#calibration-source").inputValue()).includes("CALIBRATION_SESSION_ONLY")) throw new Error("Exit Calibration discarded in-progress source");
  await page.keyboard.press("Escape");
  await page.locator('[data-terminal-exercise="EX-L0103-CALIBRATION-DEBUG"]').waitFor({ state: "detached" });
  await page.getByRole("button", { name: "use Fracture Nursery coupling, in progress", exact: true }).click();
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
  await assertResponsiveMeadow(page, "calibration reload", "completed", "completed");
  await page.getByRole("button", { name: "look at Fracture Nursery coupling, in progress", exact: true }).evaluate((element) => {
    if (document.activeElement !== element) throw new Error("Unfinished Nursery reload did not focus the coupling");
  });
  await page.getByRole("button", { name: "USE", exact: true }).click();
  await page.getByRole("button", { name: "use Fracture Nursery coupling, in progress", exact: true }).click();
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
  await assertResponsiveMeadow(page, "calibration mastered", "completed", "completed");
  const completedNursery = page.getByRole("button", { name: "use Fracture Nursery coupling, complete", exact: true });
  await page.getByRole("button", { name: "USE", exact: true }).click();
  await sampleActivation(completedNursery, "completed Nursery USE", mainThreadSamples);
  if (await page.locator('[data-terminal-exercise="EX-L0103-CALIBRATION-DEBUG"]').count()) throw new Error("Completed Nursery USE reopened scored calibration");
  await page.getByText("Calibration evidence is finalized", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Depart for Chapter II, The Drowned Archive", exact: true }).click();
  await page.locator('main[data-scene="ruins"]').waitFor();

  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  await page.locator('main[data-scene="ruins"]').waitFor();

  await assertVerbSelectionAndDispatch(page, 640, 480, "narrow");
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
  if (await page.getByRole("button", { name: /Start Responsible AI/ }).count()) throw new Error("Generic Responsible AI launcher survived Host 05 integration");
  const availableWeir = page.getByRole("button", { name: "use Sixfold Weir, available", exact: true });
  await page.waitForFunction(() => document.activeElement?.dataset.hotspotId === "sixfold-weir");
  await availableWeir.evaluate((element) => {
    if (document.activeElement !== element) throw new Error("Host 05 detection did not focus Sixfold Weir");
  });
  sixfoldFocus.detection = true;
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.getByRole("button", { name: "LOOK AT", exact: true }).click();
  await page.getByRole("button", { name: "look at Sixfold Weir, available", exact: true }).click();
  sixfoldFocus.look = await page.getByRole("button", { name: "look at Sixfold Weir, available", exact: true }).evaluate((element) => document.activeElement === element);
  await page.getByRole("button", { name: "TALK TO", exact: true }).click();
  await page.getByRole("button", { name: "talk to Sixfold Weir, available", exact: true }).click();
  sixfoldFocus.talk = await page.getByRole("button", { name: "talk to Sixfold Weir, available", exact: true }).evaluate((element) => document.activeElement === element);
  await page.getByRole("button", { name: "USE", exact: true }).click();
  await sampleActivation(availableWeir, "Sixfold Weir activation", mainThreadSamples);
  sixfoldFocus.use = true;
  await page.locator('[data-terminal-exercise="EX-L0202-RESPONSIBLE-AI"]').waitFor();
  await page.keyboard.press("Escape");
  await page.locator('[data-terminal-exercise="EX-L0202-RESPONSIBLE-AI"]').waitFor({ state: "detached" });
  await page.waitForFunction(() => document.activeElement?.dataset.hotspotId === "sixfold-weir");
  sixfoldFocus.escape = await page.getByRole("button", { name: "use Sixfold Weir, available", exact: true }).evaluate((element) => document.activeElement === element);
  await page.getByRole("button", { name: "use Sixfold Weir, available", exact: true }).click();
  await page.locator('[data-terminal-exercise="EX-L0202-RESPONSIBLE-AI"]').waitFor();
  await page.getByText("Course-authored practice scenario", { exact: false }).waitFor();
  await page.locator(".responsible-ai-boundary", { hasText: "not a Microsoft exam question" }).waitFor();
  await page.getByLabel("Responsible AI principle", { exact: true }).selectOption("transparency");
  await page.getByLabel("Responsible AI stakeholder", { exact: true }).selectOption("hiring_vendor");
  await page.getByLabel("Responsible AI mitigation", { exact: true }).selectOption("publish_ai_disclosure_only");
  await page.getByLabel("Responsible AI owner", { exact: true }).selectOption("model_itself");
  await page.getByRole("button", { name: "Check four-part response", exact: true }).click();
  await page.getByRole("status").getByText("0/4", { exact: false }).waitFor();
  sixfoldFocus.miss = await page.getByLabel("Responsible AI principle", { exact: true }).getAttribute("aria-invalid") === "true";
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
  await page.waitForFunction(() => document.activeElement?.dataset.hotspotId === "sixfold-weir");
  sixfoldFocus.close = await page.getByRole("button", { name: "use Sixfold Weir, remediation required", exact: true }).evaluate((element) => document.activeElement === element);
  await page.getByRole("button", { name: "use Sixfold Weir, remediation required", exact: true }).click();
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
  await page.waitForFunction(() => document.activeElement?.dataset.hotspotId === "sixfold-weir");
  sixfoldFocus.primaryAcknowledgement = await page.getByRole("button", { name: "use Sixfold Weir, in progress", exact: true }).evaluate((element) => document.activeElement === element);
  await page.getByText("[FRPX03_IN_PROGRESS]", { exact: true }).waitFor();
  const responsibleAIEvidence = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).responsibleAIEvidence, { key: saveKey });
  if (responsibleAIEvidence?.exerciseId !== "EX-L0202-RESPONSIBLE-AI" || responsibleAIEvidence?.attemptCount !== 7 || responsibleAIEvidence?.hintLevel !== 2 || responsibleAIEvidence?.masteryStatus !== "primary_complete") throw new Error(`Responsible AI primary evidence incomplete: ${JSON.stringify(responsibleAIEvidence)}`);
  if (Object.keys(responsibleAIEvidence.dimensionCorrectness || {}).length !== 6 || Object.values(responsibleAIEvidence.dimensionCorrectness).some((dimensions) => Object.keys(dimensions).length !== 4 || Object.values(dimensions).some((value) => value !== true))) throw new Error("Responsible AI strict primary gate incomplete");
  if (["response", "choices", "reasoning", "scenarioNotes", "runtimeDisplay"].some((key) => key in responsibleAIEvidence)) throw new Error("Responsible AI private session data persisted");

  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  const reloadedWeir = page.getByRole("button", { name: "look at Sixfold Weir, in progress", exact: true });
  await page.waitForFunction(() => document.activeElement?.dataset.hotspotId === "sixfold-weir");
  sixfoldFocus.reload = await reloadedWeir.evaluate((element) => document.activeElement === element);
  for (const layout of [
    ["desktop", 1920, 1080], ["laptop", 1366, 768], ["narrow", 390, 844],
    ["effective-200", 768, 900], ["retained-320x180", 320, 180], ["retained-320x240", 320, 240],
  ]) sixfoldLayouts.push(await measureSixfoldLayout(page, ...layout));
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.getByRole("button", { name: "Return to Chapter I, Glass Meadow", exact: true }).click();
  await page.locator('main[data-scene="meadow"]').waitFor();
  await page.getByRole("button", { name: "Depart for Chapter II, The Drowned Archive", exact: true }).click();
  await page.locator('main[data-scene="ruins"]').waitFor();
  await page.waitForFunction(() => document.activeElement?.dataset.hotspotId === "sixfold-weir");
  sixfoldFocus.return = await page.getByRole("button", { name: "look at Sixfold Weir, in progress", exact: true }).evaluate((element) => document.activeElement === element);
  await page.getByRole("button", { name: "USE", exact: true }).click();
  await page.getByRole("button", { name: "use Sixfold Weir, in progress", exact: true }).click();
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
  await page.getByRole("button", { name: "use Sixfold Weir, in progress", exact: true }).click();
  if (await page.getByLabel("Closed-note owner", { exact: true }).inputValue() !== "trust and safety lead") throw new Error("Closed-note explanation reset after close/reopen");
  const raiExplanationDraft = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  if (raiExplanationDraft.includes("trust and safety lead") || raiExplanationDraft.includes("people affected by moderation decisions")) throw new Error("Closed-note explanation text leaked into localStorage");
  await page.getByRole("button", { name: "Check my explanation", exact: true }).click();
  await page.getByText("Complete explanation confirmed", { exact: false }).waitFor();
  await page.getByRole("checkbox", { name: "I produced this explanation myself without notes.", exact: true }).check();
  await page.getByRole("radio", { name: "high", exact: true }).check();
  await page.getByRole("button", { name: "Acknowledge strict mastery", exact: true }).click();
  const completedWeir = page.getByRole("button", { name: "use Sixfold Weir, complete", exact: true });
  await page.waitForFunction(() => document.activeElement?.dataset.hotspotId === "sixfold-weir");
  sixfoldFocus.mastery = await completedWeir.evaluate((element) => document.activeElement === element);
  await page.getByText("[FRPX03_MASTERED] [FRPX03_NEXT_BOUNDARY]", { exact: true }).waitFor();
  const responsibleAIMastery = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).responsibleAIEvidence, { key: saveKey });
  if (responsibleAIMastery?.masteryStatus !== "mastered" || responsibleAIMastery?.form !== "explanation" || responsibleAIMastery?.attemptCount !== 16) throw new Error(`Responsible AI strict mastery evidence incomplete: ${JSON.stringify(responsibleAIMastery)}`);
  if (Object.keys(responsibleAIMastery.dimensionCorrectness || {}).length !== 13 || Object.values(responsibleAIMastery.dimensionCorrectness).some((dimensions) => Object.keys(dimensions).length !== 4 || Object.values(dimensions).some((value) => value !== true))) throw new Error("Responsible AI two-form plus explanation gate incomplete");
  if (["response", "choices", "reasoning", "explanation", "freeFormReasoning", "scenarioNotes", "runtimeDisplay"].some((key) => key in responsibleAIMastery)) throw new Error("Responsible AI mastery evidence retained private response content");

  const completedUseSave = await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey });
  await sampleActivation(completedWeir, "completed Sixfold Weir USE", mainThreadSamples);
  if (await page.locator('[data-terminal-exercise="EX-L0202-RESPONSIBLE-AI"]').count()) throw new Error("Completed Sixfold Weir USE reopened scored work");
  if (await page.evaluate(({ key }) => localStorage.getItem(key), { key: saveKey }) !== completedUseSave) throw new Error("Completed Sixfold Weir USE changed durable state");
  sixfoldFocus.nextContinuation = await page.getByRole("button", { name: "Start Model Choices", exact: true }).isVisible();

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
  const cbe={configuration:"endpoint address credential identity deployment selects model",client_layers:"project client configuration then compatible inference client",request_response:"send model and input then read returned output",simulation_authority:"mock proves only local flow never authorizes live or destructive action"};for(const[d,v]of Object.entries(cbe))await page.getByLabel(`Closed-note client boundary ${d}`,{exact:true}).fill(v);await page.getByRole("button",{name:"Check client explanation",exact:true}).click();await page.getByText("EXPLANATION PASS",{exact:false}).waitFor();await page.getByRole("checkbox",{name:/produced this client-boundary explanation/i}).check();await page.getByRole("radio",{name:"high",exact:true}).check();await page.getByRole("button",{name:"Acknowledge strict mastery",exact:true}).click();const clientBoundaryContinue=page.getByRole("button",{name:"Start SDK Route Chooser",exact:true});await clientBoundaryContinue.waitFor();if(!await clientBoundaryContinue.evaluate(el=>el===document.activeElement))throw new Error("Client Boundaries mastery did not focus SDK Route Chooser");const cbm=await page.evaluate(({key})=>JSON.parse(localStorage.getItem(key)).clientBoundaryEvidence,{key:saveKey});if(cbm?.masteryStatus!=="mastered"||cbm?.mockPassed!==true)throw new Error(`Client boundary mastery incomplete ${JSON.stringify(cbm)}`);if(["endpoint","deploymentName","credential","requestInput","responseOutput","learnerSource","externalActionRequest","freeText"].some(k=>k in cbm))throw new Error("Client boundary private data persisted");
  await clientBoundaryContinue.click();
  const sdkRouteDialog = page.locator('[data-terminal-exercise="EX-L0503-SDK-ROUTE-CHOOSER"]');
  if (await sdkRouteDialog.getAttribute("aria-describedby") !== "sdk-route-offline-warning") throw new Error("SDK Route Key was forced into the initial dialog description");
  const sdkRouteKey = page.locator("#sdk-route-label-key");
  await sdkRouteKey.waitFor();
  if (await sdkRouteKey.getAttribute("role") !== "region" || await sdkRouteKey.getAttribute("tabindex") !== "0" || await sdkRouteKey.getAttribute("aria-labelledby") !== "sdk-route-label-key-title") throw new Error("SDK Route Key is not an independently named keyboard-readable region");
  await page.getByLabel("SDK route", { exact: true }).selectOption("openai_sdk");
  await page.getByLabel("Reason for SDK route", { exact: true }).selectOption("openai_compatibility_or_embeddings");
  await page.getByRole("button", { name: "Check route and reason", exact: true }).click();
  const sdkTraceForm = page.locator(".sdk-route-trace-form");
  await sdkTraceForm.waitFor();
  for (const [width, height, label] of [[640, 480, "640x480"], [320, 240, "320x240"]]) {
    await page.setViewportSize({ width, height });
    await page.waitForFunction(() => document.querySelector(".canonical-game-frame")?.dataset.canonicalLayout === "narrow");
    await page.waitForFunction(({ width, height }) => {
      const rect = document.querySelector(".canonical-game-frame")?.getBoundingClientRect();
      return rect && rect.left >= -0.5 && rect.right <= width + 0.5;
    }, { width, height });
    const traceGeometry = await page.evaluate(() => {
      const frame = document.querySelector(".canonical-game-frame");
      const dialog = document.querySelector('[data-terminal-exercise="EX-L0503-SDK-ROUTE-CHOOSER"]');
      const routeKey = document.querySelector("#sdk-route-label-key");
      const form = document.querySelector(".sdk-route-trace-form");
      const fields = [...document.querySelectorAll(".sdk-route-trace-fields select")];
      const rect = (element) => { const value = element.getBoundingClientRect(); return { left: value.left, top: value.top, right: value.right, bottom: value.bottom, width: value.width, height: value.height }; };
      return {
        layout: frame?.dataset.canonicalLayout,
        pageContained: document.documentElement.scrollWidth <= innerWidth + 1,
        dialog: rect(dialog),
        routeKey: { ...rect(routeKey), scrollWidth: routeKey.scrollWidth, clientWidth: routeKey.clientWidth },
        form: { ...rect(form), scrollWidth: form.scrollWidth, clientWidth: form.clientWidth },
        fields: fields.map(rect),
        fullLabels: fields.map((field) => [...field.options].map((option) => option.textContent)),
      };
    });
    if (!traceGeometry.pageContained || traceGeometry.dialog.left < 0 || traceGeometry.dialog.right > width) throw new Error(`SDK trace escaped horizontally at ${label}: ${JSON.stringify(traceGeometry)}`);
    if (traceGeometry.routeKey.scrollWidth > traceGeometry.routeKey.clientWidth || traceGeometry.form.scrollWidth > traceGeometry.form.clientWidth) throw new Error(`SDK trace has horizontal overflow at ${label}: ${JSON.stringify(traceGeometry)}`);
    if (traceGeometry.layout !== "narrow" || traceGeometry.fields.length !== 3 || traceGeometry.fields.some((field) => field.height < 44 || field.width < 44)) throw new Error(`SDK trace target/reflow contract failed at ${label}: ${JSON.stringify(traceGeometry)}`);
    if (!(traceGeometry.fields[0].top < traceGeometry.fields[1].top && traceGeometry.fields[1].top < traceGeometry.fields[2].top)) throw new Error(`SDK trace did not use one-column narrow order at ${label}`);
    if (!traceGeometry.fullLabels.flat().includes("Verify approved identity, RBAC, resource, and scope")) throw new Error(`SDK trace lost its longest native-select label at ${label}`);
  }
  await sdkRouteKey.focus();
  if (!await sdkRouteKey.evaluate((element) => element === document.activeElement)) throw new Error("SDK Route Key did not accept keyboard focus");
  await page.keyboard.press("Tab");
  if (!await page.getByLabel("1. Client route", { exact: true }).evaluate((element) => element === document.activeElement)) throw new Error("SDK trace focus order did not move from Route Key to the first decision");
  const sdkTraceAnswer = referenceSdkTracePrimary.DP01;
  await page.getByLabel("1. Client route", { exact: true }).selectOption(sdkTraceAnswer.route);
  await page.getByLabel("2. Endpoint family (concept only)", { exact: true }).selectOption("openai_v1_endpoint");
  await page.getByLabel("3. Next authority-safe action", { exact: true }).selectOption(sdkTraceAnswer.next_action);
  await page.getByRole("button", { name: "Check three decisions", exact: true }).click();
  await sdkTraceForm.getByRole("status").getByText("TARGETED TRACE NOT YET COMPLETE", { exact: false }).waitFor();
  for (const [name, invalid] of [["1. Client route", "false"], ["2. Endpoint family (concept only)", "true"], ["3. Next authority-safe action", "false"]]) {
    const field = page.getByLabel(name, { exact: true });
    if (await field.getAttribute("aria-invalid") !== invalid) throw new Error(`SDK trace ${name} did not expose its independent error state`);
    if (invalid === "true" && !await field.getAttribute("aria-describedby")) throw new Error(`SDK trace ${name} lacks associated remediation`);
  }
  await page.getByLabel("2. Endpoint family (concept only)", { exact: true }).selectOption(sdkTraceAnswer.endpoint_family);
  await page.getByRole("button", { name: "Check three decisions", exact: true }).click();
  await sdkTraceForm.getByRole("status").getByText("DECISION TRACE PASS", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Return to a fresh route retry", exact: true }).click();
  if (await page.getByLabel("SDK route", { exact: true }).inputValue() || await page.getByLabel("Reason for SDK route", { exact: true }).inputValue()) throw new Error("SDK route retry retained working choices after remediation");
  await page.setViewportSize({ width: 1600, height: 900 });
  for(const[id,answer]of Object.entries(referenceSdkRoutePrimary)){await page.getByLabel("SDK route",{exact:true}).selectOption(answer.route);await page.getByLabel("Reason for SDK route",{exact:true}).selectOption(answer.reason);await page.getByRole("button",{name:"Check route and reason",exact:true}).click();await page.getByText("ROUTE + REASON PASS",{exact:false}).waitFor();await page.getByRole("button",{name:id==="P08"?"View form result":"Next scenario",exact:true}).click();}await page.getByRole("radio",{name:"high",exact:true}).check();await page.getByRole("button",{name:"Begin fresh transfer later",exact:true}).click();await page.getByRole("button",{name:"Start SDK Route Transfer",exact:true}).click();for(const[id,answer]of Object.entries(referenceSdkRouteTransfer)){await page.getByLabel("SDK route",{exact:true}).selectOption(answer.route);await page.getByLabel("Reason for SDK route",{exact:true}).selectOption(answer.reason);await page.getByRole("button",{name:"Check route and reason",exact:true}).click();await page.getByText("ROUTE + REASON PASS",{exact:false}).waitFor();await page.getByRole("button",{name:id==="T08"?"View form result":"Next scenario",exact:true}).click();}await page.getByRole("radio",{name:"high",exact:true}).check();await page.getByRole("button",{name:"Acknowledge route mastery",exact:true}).click();const singleAgentAfterSdk=page.getByRole("button",{name:"Start Single Agent",exact:true});await singleAgentAfterSdk.waitFor();if(!await singleAgentAfterSdk.evaluate(el=>el===document.activeElement))throw new Error("SDK Route mastery did not focus Single Agent");const sdkEvidence=await page.evaluate(({key})=>JSON.parse(localStorage.getItem(key)).sdkRouteEvidence,{key:saveKey});if(sdkEvidence?.masteryStatus!=="mastered"||sdkEvidence?.attemptCount!==17||sdkEvidence?.remediationAttemptCount!==2)throw new Error(`SDK route mastery incomplete ${JSON.stringify(sdkEvidence)}`);if(["response","endpoint","credential","deploymentName","request","clickTime","keySequence"].some(key=>key in sdkEvidence))throw new Error("SDK route private or dexterity data persisted");
  await page.reload(); await page.getByRole("button", { name: "Resume signal" }).click(); const restoredClientBoundaryContinue = page.getByRole("button", { name: "Start Single Agent", exact: true }); await restoredClientBoundaryContinue.waitFor(); if(!await restoredClientBoundaryContinue.evaluate(el=>el===document.activeElement))throw new Error("Sanitized SDK route mastery reload did not restore focus to Single Agent"); await restoredClientBoundaryContinue.click();
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
  const visualPatternExplanation={capability_media:"choose analysis for existing pixels multimodal for image plus text and generation for new media",request_validation:"validate media bytes type request and deployed capability before processing",result_provenance:"parse operation specific result shape and label generated content with source model prompt and time",simulation_authority:"offline output proves no live readiness and never authorizes publication or deletion"};for(const[d,v]of Object.entries(visualPatternExplanation))await page.getByLabel(`Closed-note visual pattern ${d}`,{exact:true}).fill(v);await page.getByRole("button",{name:"Exit Visual Patterns",exact:true}).click();await page.getByRole("button",{name:"Resume Visual Patterns",exact:true}).click();if(await page.getByLabel("Closed-note visual pattern result_provenance",{exact:true}).inputValue()!==visualPatternExplanation.result_provenance)throw new Error("Visual Pattern explanation reset");const visualPatternExplanationDraft=await page.evaluate(({key})=>localStorage.getItem(key),{key:saveKey});if(visualPatternExplanationDraft.includes("label generated content")||visualPatternExplanationDraft.includes("never authorizes publication"))throw new Error("Visual Pattern explanation persisted");await page.getByRole("button",{name:"Check visual-pattern explanation",exact:true}).click();await page.getByText("4/4 · PASS",{exact:true}).waitFor();await page.getByRole("checkbox",{name:/produced this visual-pattern explanation/i}).check();await page.getByRole("radio",{name:"high",exact:true}).check();await page.getByRole("button",{name:"Acknowledge strict mastery",exact:true}).click();const visualPatternContinue=page.getByRole("button",{name:"Start Objective Ledger",exact:true});await visualPatternContinue.waitFor();if(!await visualPatternContinue.evaluate(el=>el===document.activeElement))throw new Error("Visual Pattern mastery did not focus Objective Ledger");const visualPatternMastery=await page.evaluate(({key})=>JSON.parse(localStorage.getItem(key)).visualPatternEvidence,{key:saveKey});if(visualPatternMastery?.masteryStatus!=="mastered"||visualPatternMastery?.attemptCount!==16)throw new Error(`Visual Pattern mastery incomplete ${JSON.stringify(visualPatternMastery)}`);if(["mediaBytes","mediaPath","visualDescription","generationPrompt","generatedMedia","endpoint","credential","serviceResponse","externalActionRequest","response","choices","freeText"].some(k=>k in visualPatternMastery))throw new Error("Visual Pattern private data persisted");await page.reload();await page.getByRole("button",{name:"Resume signal"}).click();const restoredVisualPatternContinue=page.getByRole("button",{name:"Start Objective Ledger",exact:true});await restoredVisualPatternContinue.waitFor();if(!await restoredVisualPatternContinue.evaluate(el=>el===document.activeElement))throw new Error("Visual Pattern reload did not focus Objective Ledger");await restoredVisualPatternContinue.click();
  await page.locator('[data-terminal-exercise="EX-L0601-OBJECTIVE-LEDGER"]').waitFor();await assertObjectiveLedgerContinuity(page,"primary");await page.getByLabel("Objective ledger decision",{exact:true}).selectOption("AI901-D1-O2");await page.getByLabel("Objective ledger reason",{exact:true}).selectOption("confidence_or_domain_score_proves_this_objective");await page.getByRole("button",{name:"Check objective evidence",exact:true}).click();await page.getByRole("status").getByText("0/2 · OBJECTIVE REMEDIATE.",{exact:true}).waitFor();await page.getByText("AI901-D1-O1 REMEDIATION",{exact:false}).waitFor();for(const d of["decision","reason"]){const f=page.getByLabel(`Objective ledger ${d}`,{exact:true});if(await f.getAttribute("aria-invalid")!=="true"||await f.getAttribute("aria-describedby")!==`objective-ledger-${d}-feedback`)throw new Error(`Objective Ledger ${d} remediation missing`);}await page.setViewportSize({width:640,height:480});await page.screenshot({path:qaPath("objective-ledger-primary-qa.png"),fullPage:true});await page.setViewportSize({width:1600,height:900});
  for(const id of Object.keys(referenceObjectiveLedgerPrimary)){const a=referenceObjectiveLedgerPrimary[id];await page.getByLabel("Objective ledger decision",{exact:true}).selectOption(a.decision);await page.getByLabel("Objective ledger reason",{exact:true}).selectOption(a.reason);await page.getByRole("button",{name:"Check objective evidence",exact:true}).click();await page.getByRole("status").getByText("2/2 · OBJECTIVE READY · both dimensions confirmed.",{exact:true}).waitFor();await page.getByRole("button",{name:id==="P15"?"View primary result":"Next objective",exact:true}).click();}await page.getByText("30 / 30 dimensions",{exact:true}).waitFor();if(await page.getByText(/READY · L-/).count()!==15)throw new Error("Objective Ledger primary did not ready all 15 objective rows");await page.getByRole("radio",{name:"medium",exact:true}).check();await page.getByRole("button",{name:"Acknowledge primary form",exact:true}).click();
  await page.reload();await page.getByRole("button",{name:"Resume signal"}).click();await page.getByRole("button",{name:"Start Objective Ledger Transfer",exact:true}).click();await assertObjectiveLedgerContinuity(page,"transfer");await page.getByLabel("Objective ledger decision",{exact:true}).selectOption("AI901-D1-O2");await page.getByLabel("Objective ledger reason",{exact:true}).selectOption("confidence_or_domain_score_proves_this_objective");await page.getByRole("button",{name:"Check objective evidence",exact:true}).click();await page.setViewportSize({width:320,height:240});await page.screenshot({path:qaPath("objective-ledger-transfer-remediation-qa.png"),fullPage:true});await page.setViewportSize({width:1600,height:900});await page.getByRole("button",{name:"Exit Objective Ledger",exact:true}).click();await page.getByRole("button",{name:"Resume Objective Ledger",exact:true}).click();if(await page.getByLabel("Objective ledger reason",{exact:true}).inputValue()!=="confidence_or_domain_score_proves_this_objective")throw new Error("Objective Ledger transfer reset after close/reopen");const objectiveLedgerDraft=await page.evaluate(({key})=>localStorage.getItem(key),{key:saveKey});if(objectiveLedgerDraft.includes("confidence_or_domain_score_proves_this_objective"))throw new Error("Objective Ledger working choices persisted");
  for(const id of Object.keys(referenceObjectiveLedgerTransfer)){const a=referenceObjectiveLedgerTransfer[id];await page.getByLabel("Objective ledger decision",{exact:true}).selectOption(a.decision);await page.getByLabel("Objective ledger reason",{exact:true}).selectOption(a.reason);await page.getByRole("button",{name:"Check objective evidence",exact:true}).click();await page.getByRole("status").getByText("2/2 · OBJECTIVE READY · both dimensions confirmed.",{exact:true}).waitFor();await page.getByRole("button",{name:id==="T15"?"Begin closed-note domain mastery":"Next objective",exact:true}).click();}await assertObjectiveLedgerContinuity(page,"closed-note");for(const d of["concept_domain","implementation_domain","evidence_readiness","course_safeguards"])await page.getByLabel(`Closed-note objective ledger ${d}`,{exact:true}).fill("wrong");await page.getByRole("button",{name:"Check domain mastery",exact:true}).click();await page.getByRole("status").getByText("0/4 · EXPLANATION NOT YET COMPLETE.",{exact:true}).waitFor();for(const d of["concept_domain","implementation_domain","evidence_readiness","course_safeguards"]){const f=page.getByLabel(`Closed-note objective ledger ${d}`,{exact:true});if(await f.getAttribute("aria-invalid")!=="true"||await f.getAttribute("aria-describedby")!==`objective-ledger-explanation-${d}-feedback`)throw new Error(`Objective Ledger closed-note ${d} remediation missing`);}await page.screenshot({path:qaPath("objective-ledger-closed-note-qa.png"),fullPage:true});assertDistinctCaptures(["objective-ledger-primary-qa.png","objective-ledger-transfer-remediation-qa.png","objective-ledger-closed-note-qa.png"]);
  const objectiveLedgerExplanation={concept_domain:"domain one requires objective specific evidence for all eight concept objectives",implementation_domain:"domain two requires objective specific evidence for all seven implementation objectives",evidence_readiness:"ready requires passing evidence remediate marks a miss and not yet assessed means no evidence",course_safeguards:"confidence is not mastery and course evidence is not an exam item claim or live action authority"};for(const[d,v]of Object.entries(objectiveLedgerExplanation))await page.getByLabel(`Closed-note objective ledger ${d}`,{exact:true}).fill(v);await page.getByRole("button",{name:"Exit Objective Ledger",exact:true}).click();await page.getByRole("button",{name:"Resume Objective Ledger",exact:true}).click();if(await page.getByLabel("Closed-note objective ledger evidence_readiness",{exact:true}).inputValue()!==objectiveLedgerExplanation.evidence_readiness)throw new Error("Objective Ledger explanation reset after close/reopen");const objectiveLedgerExplanationDraft=await page.evaluate(({key})=>localStorage.getItem(key),{key:saveKey});if(objectiveLedgerExplanationDraft.includes("domain one requires")||objectiveLedgerExplanationDraft.includes("confidence is not mastery"))throw new Error("Objective Ledger explanation persisted");await page.getByRole("button",{name:"Check domain mastery",exact:true}).click();await page.getByRole("status").getByText("4/4 · PASS",{exact:true}).waitFor();await page.getByRole("checkbox",{name:/produced this domain-mastery explanation/i}).check();await page.getByRole("radio",{name:"high",exact:true}).check();await page.getByRole("button",{name:"Acknowledge strict mastery",exact:true}).click();const objectiveLedgerContinue=page.getByRole("button",{name:"Start Remediation Planner",exact:true});await objectiveLedgerContinue.waitFor();if(!await objectiveLedgerContinue.evaluate(el=>el===document.activeElement))throw new Error("Objective Ledger mastery did not focus Remediation Planner");const objectiveLedgerMastery=await page.evaluate(({key})=>JSON.parse(localStorage.getItem(key)).objectiveLedgerEvidence,{key:saveKey});if(objectiveLedgerMastery?.masteryStatus!=="mastered"||objectiveLedgerMastery?.attemptCount!==34||Object.values(objectiveLedgerMastery.statuses||{}).filter(v=>v==="ready").length!==15||Object.keys(objectiveLedgerMastery.evidencePointers||{}).length!==15)throw new Error(`Objective Ledger mastery incomplete ${JSON.stringify(objectiveLedgerMastery)}`);if(["examItemText","credential","endpoint","serviceData","servicePayload","serviceResponse","notes","personalStudyNotes","externalActionRequest","response","choices","freeText"].some(k=>k in objectiveLedgerMastery))throw new Error("Objective Ledger private data persisted");await page.reload();await page.getByRole("button",{name:"Resume signal"}).click();const restoredObjectiveLedgerContinue=page.getByRole("button",{name:"Start Remediation Planner",exact:true});await restoredObjectiveLedgerContinue.waitFor();if(!await restoredObjectiveLedgerContinue.evaluate(el=>el===document.activeElement))throw new Error("Objective Ledger reload did not focus Remediation Planner");await restoredObjectiveLedgerContinue.click();
  await page.locator('[data-terminal-exercise="EX-L0602-REMEDIATION-PLANNER"]').waitFor();await assertRemediationPlannerContinuity(page,"primary");await page.getByLabel("Remediation planner decision",{exact:true}).selectOption("mark_ready_from_confidence");await page.getByLabel("Remediation planner reason",{exact:true}).selectOption("confidence_is_evidence");await page.getByRole("button",{name:"Check remediation route",exact:true}).click();await page.getByRole("status").getByText("0/2 · ROUTE NOT YET COMPLETE.",{exact:true}).waitFor();await page.getByText("Name the exact failed dimension",{exact:false}).waitFor();for(const d of["decision","reason"]){const f=page.getByLabel(`Remediation planner ${d}`,{exact:true});if(await f.getAttribute("aria-invalid")!=="true"||await f.getAttribute("aria-describedby")!==`remediation-planner-${d}-feedback`)throw new Error(`Remediation Planner ${d} remediation missing`);}await page.setViewportSize({width:640,height:480});await page.screenshot({path:qaPath("remediation-planner-primary-qa.png"),fullPage:true});await page.setViewportSize({width:1600,height:900});
  await page.getByText("READINESS MAINTENANCE · 15 / 15 objectives ready with evidence.",{exact:false}).waitFor();await page.getByLabel("Readiness maintenance objective queue",{exact:true}).waitFor();for(const id of Object.keys(referenceRemediationPlannerPrimary)){const a=referenceRemediationPlannerPrimary[id];await page.getByLabel("Remediation planner decision",{exact:true}).selectOption(a.decision);await page.getByLabel("Remediation planner reason",{exact:true}).selectOption(a.reason);await page.getByRole("button",{name:"Check remediation route",exact:true}).click();await page.getByRole("status").getByText("2/2 · ROUTE PASS · both dimensions confirmed.",{exact:true}).waitFor();await page.getByRole("button",{name:id==="P06"?"View primary result":"Next maintenance drill",exact:true}).click();}await page.getByText("12 / 12 dimensions",{exact:true}).waitFor();await page.getByRole("radio",{name:"medium",exact:true}).check();await page.getByRole("button",{name:"Acknowledge primary planner",exact:true}).click();
  await page.reload();await page.getByRole("button",{name:"Resume signal"}).click();await page.getByRole("button",{name:"Start Remediation Planner Transfer",exact:true}).click();await assertRemediationPlannerContinuity(page,"transfer");await page.getByLabel("Remediation planner decision",{exact:true}).selectOption("mark_ready_from_confidence");await page.getByLabel("Remediation planner reason",{exact:true}).selectOption("confidence_is_evidence");await page.getByRole("button",{name:"Check remediation route",exact:true}).click();await page.setViewportSize({width:320,height:240});await page.screenshot({path:qaPath("remediation-planner-transfer-remediation-qa.png"),fullPage:true});await page.setViewportSize({width:1600,height:900});await page.getByRole("button",{name:"Exit Remediation Planner",exact:true}).click();await page.getByRole("button",{name:"Resume Remediation Planner",exact:true}).click();if(await page.getByLabel("Remediation planner reason",{exact:true}).inputValue()!=="confidence_is_evidence")throw new Error("Remediation Planner transfer reset after close/reopen");const remediationPlannerDraft=await page.evaluate(({key})=>localStorage.getItem(key),{key:saveKey});if(remediationPlannerDraft.includes("confidence_is_evidence")||remediationPlannerDraft.includes("mark_ready_from_confidence"))throw new Error("Remediation Planner choices persisted");
  for(const id of Object.keys(referenceRemediationPlannerTransfer)){const a=referenceRemediationPlannerTransfer[id];await page.getByLabel("Remediation planner decision",{exact:true}).selectOption(a.decision);await page.getByLabel("Remediation planner reason",{exact:true}).selectOption(a.reason);await page.getByRole("button",{name:"Check remediation route",exact:true}).click();await page.getByRole("status").getByText("2/2 · ROUTE PASS · both dimensions confirmed.",{exact:true}).waitFor();await page.getByRole("button",{name:id==="T06"?"Begin closed-note remediation plan":"Next maintenance drill",exact:true}).click();}await assertRemediationPlannerContinuity(page,"closed-note");for(const d of["gap_priority","source_route","practice_reassessment","stop_safeguards"])await page.getByLabel(`Closed-note remediation planner ${d}`,{exact:true}).fill("wrong");await page.getByRole("button",{name:"Check remediation-plan explanation",exact:true}).click();await page.getByRole("status").getByText("0/4 · EXPLANATION NOT YET COMPLETE.",{exact:true}).waitFor();for(const d of["gap_priority","source_route","practice_reassessment","stop_safeguards"]){const f=page.getByLabel(`Closed-note remediation planner ${d}`,{exact:true});if(await f.getAttribute("aria-invalid")!=="true"||await f.getAttribute("aria-describedby")!==`remediation-planner-explanation-${d}-feedback`)throw new Error(`Remediation Planner closed-note ${d} remediation missing`);}await page.screenshot({path:qaPath("remediation-planner-closed-note-qa.png"),fullPage:true});assertDistinctCaptures(["remediation-planner-primary-qa.png","remediation-planner-transfer-remediation-qa.png","remediation-planner-closed-note-qa.png"]);
  const remediationPlannerExplanation={gap_priority:"name the failed dimension and prioritize repeated measured gaps by current scope",source_route:"map each weak objective to its prerequisite lesson and current official source",practice_reassessment:"retrieve then complete guided practice then pass fresh transfer before ready",stop_safeguards:"stop and escalate unclear scope repeated failure or live authority and reject confidence and exam guarantees"};for(const[d,v]of Object.entries(remediationPlannerExplanation))await page.getByLabel(`Closed-note remediation planner ${d}`,{exact:true}).fill(v);await page.getByRole("button",{name:"Exit Remediation Planner",exact:true}).click();await page.getByRole("button",{name:"Resume Remediation Planner",exact:true}).click();if(await page.getByLabel("Closed-note remediation planner practice_reassessment",{exact:true}).inputValue()!==remediationPlannerExplanation.practice_reassessment)throw new Error("Remediation Planner explanation reset after close/reopen");const remediationPlannerExplanationDraft=await page.evaluate(({key})=>localStorage.getItem(key),{key:saveKey});if(remediationPlannerExplanationDraft.includes("retrieve then complete guided")||remediationPlannerExplanationDraft.includes("reject confidence and exam guarantees"))throw new Error("Remediation Planner explanation persisted");await page.getByRole("button",{name:"Check remediation-plan explanation",exact:true}).click();await page.getByRole("status").getByText("4/4 · PASS",{exact:true}).waitFor();await page.getByRole("checkbox",{name:/produced this remediation-plan explanation/i}).check();await page.getByRole("radio",{name:"high",exact:true}).check();await page.getByRole("button",{name:"Acknowledge strict mastery",exact:true}).click();const remediationPlannerContinue=page.getByRole("button",{name:"Start Capstone Readiness",exact:true});await remediationPlannerContinue.waitFor();if(!await remediationPlannerContinue.evaluate(el=>el===document.activeElement))throw new Error("Remediation Planner mastery did not focus Capstone Readiness");const remediationPlannerMastery=await page.evaluate(({key})=>JSON.parse(localStorage.getItem(key)).remediationPlannerEvidence,{key:saveKey});if(remediationPlannerMastery?.masteryStatus!=="mastered"||remediationPlannerMastery?.attemptCount!==16||Object.keys(remediationPlannerMastery.routes||{}).length!==12)throw new Error(`Remediation Planner mastery incomplete ${JSON.stringify(remediationPlannerMastery)}`);if(["examItemText","personalStudyNote","credential","endpoint","payload","serviceResponse","externalActionRequest","response","choices","freeText"].some(k=>k in remediationPlannerMastery))throw new Error("Remediation Planner private data persisted");await page.reload();await page.getByRole("button",{name:"Resume signal"}).click();const restoredRemediationPlannerContinue=page.getByRole("button",{name:"Start Capstone Readiness",exact:true});await restoredRemediationPlannerContinue.waitFor();if(!await restoredRemediationPlannerContinue.evaluate(el=>el===document.activeElement))throw new Error("Remediation Planner reload did not focus Capstone Readiness");await restoredRemediationPlannerContinue.click();
  await page.locator('[data-terminal-exercise="EX-L0603-OFFLINE-CAPSTONE"]').waitFor();await page.getByText("PASS · 15/15 objective rows ready",{exact:false}).waitFor();for(const id of Object.keys(referenceCapstonePrimary)){const a=referenceCapstonePrimary[id];await page.getByLabel("Capstone readiness decision",{exact:true}).selectOption(a.decision);await page.getByLabel("Capstone readiness reason",{exact:true}).selectOption(a.reason);await page.getByRole("button",{name:"Check capstone trace",exact:true}).click();await page.getByRole("status").getByText("2/2 · TRACE PASS · both dimensions confirmed.",{exact:true}).waitFor();await page.getByRole("button",{name:id==="P06"?"View primary result":"Next capstone boundary",exact:true}).click();}await page.getByRole("radio",{name:"medium",exact:true}).check();await page.getByRole("button",{name:"Acknowledge primary capstone",exact:true}).click();await page.reload();await page.getByRole("button",{name:"Resume signal"}).click();await page.getByRole("button",{name:"Start Capstone Transfer",exact:true}).click();for(const id of Object.keys(referenceCapstoneTransfer)){const a=referenceCapstoneTransfer[id];await page.getByLabel("Capstone readiness decision",{exact:true}).selectOption(a.decision);await page.getByLabel("Capstone readiness reason",{exact:true}).selectOption(a.reason);await page.getByRole("button",{name:"Check capstone trace",exact:true}).click();await page.getByRole("button",{name:id==="T06"?"Begin closed-note defense":"Next capstone boundary",exact:true}).click();}const capstoneExplanation={client_flow:"separate endpoint identity deployment request result and errors",workload_direction:"analyze existing text recognize audio to text and synthesize text to audio",schema_provenance:"define schema preserve unsupported values as null and retain available evidence and provenance",prerequisite_readiness_safety:"require all 15 objectives ready closed fresh remediation routes and both forms before only recommending the next practice checkpoint with no exam guarantee or live authority"};for(const[d,v]of Object.entries(capstoneExplanation))await page.getByLabel(`Closed-note capstone ${d}`,{exact:true}).fill(v);const capstoneDraft=await page.evaluate(({key})=>localStorage.getItem(key),{key:saveKey});if(capstoneDraft.includes("separate endpoint identity")||capstoneDraft.includes("no exam guarantee or live authority"))throw new Error("Capstone prose persisted");await page.getByRole("button",{name:"Check capstone defense",exact:true}).click();await page.getByRole("checkbox",{name:/produced this capstone explanation/i}).check();await page.getByRole("radio",{name:"high",exact:true}).check();await page.getByRole("button",{name:"Acknowledge next-practice readiness",exact:true}).click();const capstoneContinue=page.getByRole("button",{name:"Continue to mixed simulation",exact:true});await capstoneContinue.waitFor();if(!await capstoneContinue.evaluate(el=>el===document.activeElement))throw new Error("Capstone completion did not focus simulation launch");await page.reload();await page.getByRole("button",{name:"Resume signal"}).click();const restoredCapstoneContinue=page.getByRole("button",{name:"Continue to mixed simulation",exact:true});await restoredCapstoneContinue.waitFor();if(!await restoredCapstoneContinue.evaluate(el=>el===document.activeElement))throw new Error("Capstone reload did not focus simulation launch");await restoredCapstoneContinue.click();
  await page.locator('[data-terminal-exercise="EX-SIM01-MIXED"]').waitFor();
  await page
    .getByText("Untimed mode active · fully equivalent for block completion.", {
      exact: true,
    })
    .waitFor();
  const timerToggle = page.getByRole("checkbox", {
    name: "Enable optional 25-minute diagnostic timer",
    exact: true,
  });
  await timerToggle.check();
  await page
    .getByRole("timer")
    .getByText("Diagnostic elapsed:", { exact: false })
    .waitFor();
  await timerToggle.uncheck();
  await page
    .getByText("Untimed mode active · fully equivalent for block completion.", {
      exact: true,
    })
    .waitFor();
  for (const id of Object.keys(referenceMixedSimulation)) {
    const a = referenceMixedSimulation[id];
    await page
      .getByLabel("Mixed simulation decision", { exact: true })
      .selectOption(a.decision);
    await page
      .getByLabel("Mixed simulation reason", { exact: true })
      .selectOption(a.reason);
    await page
      .getByRole("button", { name: "Check simulation item", exact: true })
      .click();
    await page
      .getByRole("status")
      .getByText("2/2 · ITEM PASS · both dimensions confirmed.", {
        exact: true,
      })
      .waitFor();
    await page
      .getByRole("button", {
        name: id === "Q12" ? "View block result" : "Next mixed item",
        exact: true,
      })
      .click();
  }
  await page
    .getByText("MIXED SIMULATION BLOCK COMPLETE", { exact: true })
    .waitFor();
  await page.getByRole("radio", { name: "high", exact: true }).check();
  await page
    .getByRole("button", {
      name: "Acknowledge mixed simulation block",
      exact: true,
    })
    .click();
  const simulationContinue = page.getByRole("button", {
    name: "Continue to the next survey site",
    exact: true,
  });
  await simulationContinue.waitFor();
  if (
    !(await simulationContinue.evaluate((el) => el === document.activeElement))
  )
    throw new Error("Mixed block completion did not focus scene progression");
  const simulationMastery = await page.evaluate(
    ({ key }) => JSON.parse(localStorage.getItem(key)).mixedSimulationEvidence,
    { key: saveKey },
  );
  if (
    simulationMastery?.masteryStatus !== "mastered" ||
    Object.keys(simulationMastery.dimensionCorrectness || {}).length !== 12
  )
    throw new Error(
      `SIM-01 internal progression key incomplete ${JSON.stringify(simulationMastery)}`,
    );
  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  const restoredSimulationContinue = page.getByRole("button", {
    name: "Continue to the next survey site",
    exact: true,
  });
  await restoredSimulationContinue.waitFor();
  if (
    !(await restoredSimulationContinue.evaluate(
      (el) => el === document.activeElement,
    ))
  )
    throw new Error("Mixed block reload did not focus scene progression");
  await completeFinalConfidence(page);
  await restoredSimulationContinue.click();
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
  await page.getByText("Local evidence is complete. No response follows; the fallen assembly and corridor remain unchanged.", { exact: true }).waitFor();

  const cityBytesBeforeArrival = await page.evaluate(() => localStorage.getItem("horizon-archive-rp001-staging-v1"));
  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  if (await page.locator('main[data-scene="city-threshold"]').count()) throw new Error("Pending Witness acknowledgement skipped to City Threshold");
  await page.locator('main[data-scene="automaton"]').waitFor();
  await page.getByText("Local evidence is complete. No response follows; the fallen assembly and corridor remain unchanged.", { exact: true }).waitFor();
  await page.getByRole("button", { name: "Descend to the city", exact: true }).click();
  await page.locator('main[data-scene="city-threshold"]').waitFor();
  await page.locator('h1:focus').getByText("City Threshold", { exact: true }).waitFor();
  const directCityState = await page.evaluate(({ key }) => ({
    campaign: JSON.parse(localStorage.getItem(key)),
    city: localStorage.getItem("horizon-archive-rp001-staging-v1"),
  }), { key: saveKey });
  if (directCityState.campaign?.opening?.version !== 1
    || directCityState.campaign?.opening?.step !== "playing"
    || directCityState.campaign?.pendingSceneId !== null
    || JSON.stringify(directCityState.campaign?.completed) !== JSON.stringify(["meadow", "ruins", "automaton"])) {
    throw new Error(`Direct City frontier was not atomic: ${JSON.stringify(directCityState.campaign)}`);
  }
  if (directCityState.city !== cityBytesBeforeArrival) throw new Error("Direct City arrival changed the separate City save");
  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  await page.locator('main[data-scene="city-threshold"]').waitFor();
  if (await page.getByText(/credits|prologue complete|recorded your arrival/i).count()) throw new Error("Obsolete credits or response copy survived direct City reload");
  await verifyFirstRunCityStates(page);
  await completeCityThreshold(page);
  await verifyCanonicalLaterRail(page);
  const canonicalJourneyElapsedSeconds = (Date.now() - canonicalJourneyStartedAt) / 1000;
  if (canonicalJourneyElapsedSeconds >= 180) {
    throw new Error(`Canonical clean-start through MH-40 exceeded 180 seconds: ${canonicalJourneyElapsedSeconds.toFixed(3)}s`);
  }
  if (runtimeErrors.length) throw new Error(`Runtime errors detected: ${runtimeErrors.join(" | ")}`);
  const maxMainThreadTaskMs = Math.max(...mainThreadSamples.map(({ durationMs }) => durationMs));
  if (!Number.isFinite(maxMainThreadTaskMs) || maxMainThreadTaskMs > 100) {
    throw new Error(`Fracture Nursery sampled main-thread activation exceeded 100ms: ${JSON.stringify(mainThreadSamples)}`);
  }
  const sixfoldActivationMs = Math.max(...mainThreadSamples.filter(({ label }) => label.includes("Sixfold Weir")).map(({ durationMs }) => durationMs));
  if (!Number.isFinite(sixfoldActivationMs) || sixfoldActivationMs > 2) throw new Error(`Sixfold Weir activation exceeded 2ms: ${sixfoldActivationMs}`);
  const focusPass = Object.values(sixfoldFocus).every(Boolean);
  if (!focusPass) throw new Error(`Sixfold Weir focus contract incomplete: ${JSON.stringify(sixfoldFocus)}`);
  const layoutPass = sixfoldLayouts.length === 6 && sixfoldLayouts.every(({ pass }) => pass);
  if (!layoutPass) throw new Error(`Sixfold Weir layout contract incomplete: ${JSON.stringify(sixfoldLayouts)}`);
  const runtimeRequestPass = await page.evaluate(() => performance.getEntriesByType("resource").every(({ name }) => new URL(name, location.href).origin === location.origin));
  const liveSummary = {
    schema: "horizon.first-run.live-summary.v1",
    producer: "playtest/e2e-playthrough.mjs",
    workOrder: "FRWO-003-v1",
    shell: "FRSH-003-v1-VR-04",
    manifest: "FRRC-002-v1",
    productPredecessor,
    harnessPredecessor,
    productCandidate,
    probeCandidate,
    candidate: probeCandidate,
    externalQaRoot: qaRoot,
    runner: {
      browser: "chromium",
      version: browser.version(),
      latticeQ: 1 / 64,
      operator: "floor",
      epsilon: false,
    },
    runtimeErrors: false,
    layouts: sixfoldLayouts,
    focus: sixfoldFocus,
    inputs: { pointer: true, keyboard: true, touchSemantic: true, switchLikeSemantic: true },
    pba: {
      narrow: process.env.HORIZON_ARCHIVE_PBA_NARROW === "true",
      global: process.env.HORIZON_ARCHIVE_PBA_GLOBAL === "true",
      mediaIdentity: process.env.HORIZON_ARCHIVE_MEDIA_IDENTITY === "true",
      runtimeRequests: runtimeRequestPass,
      sixfoldActivationMs,
    },
  };
  liveSummary.pass = layoutPass && focusPass && Object.values(liveSummary.inputs).every(Boolean)
    && liveSummary.pba.narrow && liveSummary.pba.global && liveSummary.pba.mediaIdentity
    && liveSummary.pba.runtimeRequests && liveSummary.pba.sixfoldActivationMs <= 2;
  writeFileSync(qaPath("first-run-live-summary.json"), `${JSON.stringify(liveSummary, null, 2)}\n`, "utf8");
  if (!liveSummary.pass) throw new Error(`First Run live summary failed closed: ${JSON.stringify(liveSummary)}`);

  console.log(JSON.stringify({
    title: true,
    forgedSaveBlocked: true,
    wrongAnswerRecovery: true,
    terminalExercise: true,
    meadowFluid16x9: true,
    meadowAvailableWidth: true,
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
    sixfoldWeir: true,
    sixfoldLayouts: true,
    sixfoldFocus: true,
    sixfoldCompletedReadOnly: true,
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
    sdkRoutePrimary: true,
    sdkRouteTransfer: true,
    sdkRouteDecisionTraceRemediation: true,
    sdkRouteKeyKeyboardRegion: true,
    sdkRouteResponsiveReflow: true,
    sdkRouteStrictMastery: true,
    sdkRoutePrivacy: true,
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
    objectiveLedgerPrimary: true,
    objectiveLedgerTransfer: true,
    objectiveLedgerClosedNote: true,
    objectiveLedgerAllObjectivesExactlyOnce: true,
    objectiveLedgerStatusEvidence: true,
    objectiveLedgerConfidenceNotMastery: true,
    objectiveLedgerOwnershipSeparation: true,
    objectiveLedgerPrivacy: true,
    objectiveLedgerContinueFocus: true,
    objectiveLedgerReloadFocus: true,
    remediationPlannerPrimary: true,
    remediationPlannerTransfer: true,
    remediationPlannerClosedNote: true,
    remediationPlannerCompleteRoutes: true,
    remediationPlannerStopEscalateSafety: true,
    remediationPlannerConfidenceExamGuaranteeRejection: true,
    remediationPlannerOwnershipSeparation: true,
    remediationPlannerPrivacy: true,
    remediationPlannerContinueFocus: true,
    remediationPlannerReloadFocus: true,
    capstoneReadinessPrimary: true,
    capstoneReadinessTransfer: true,
    capstoneReadinessClosedNote: true,
    capstoneReadinessPrerequisiteGate: true,
    capstoneReadinessPrivacy: true,
    capstoneReadinessContinueFocus: true,
    capstoneReadinessReloadFocus: true,
    mixedSimulationStrict24: true,
    mixedSimulationUntimedEquivalent: true,
    mixedSimulationPrivacy: true,
    mixedSimulationContinueFocus: true,
    mixedSimulationReloadFocus: true,
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
    questions: ["HA-PY-001", "HA-PY-002", "HA-PY-003", "HA-AI901-001", "HA-AI901-RAI-MASTERY", "HA-AI901-MODEL-MASTERY", "HA-PY-STRUCTURED-PACKETS", "HA-PY-CONTROL-FLOW", "HA-PY-CLIENT-BRIDGE", "HA-AI901-TEXT-ANALYSIS", "HA-AI901-SPEECH-WORKLOADS", "HA-AI901-VISUAL-WORKLOADS", "HA-AI901-EXTRACTION-WORKLOADS", "HA-AI901-PORTAL-ORIENTATION", "HA-AI901-PROMPT-LAYERS", "HA-AI901-CLIENT-BOUNDARIES", "HA-AI901-SDK-ROUTE-CHOOSER", "HA-AI901-SINGLE-AGENT", "HA-AI901-TEXT-SPEECH-PATTERNS", "HA-AI901-VISUAL-PATTERNS", "HA-AI901-OBJECTIVE-LEDGER", "HA-AI901-REMEDIATION-PLANNER", "HA-AI901-CAPSTONE-READINESS", "HA-AI901-SIM-01"],
    directCityFrontier: true,
    exactRp001Predecessor: true,
    exactRp002ThroughRp012Chain: true,
    measuredHorizonReadyRestore: true,
    measuredHorizonNotYetRestore: true,
    measuredHorizonOutcomeEquality: true,
    measuredHorizonHardStop: true,
    canonicalJourneyElapsedSeconds,
    maxMainThreadTaskMs,
    sixfoldActivationMs,
  }));
} finally {
  await browser.close();
}

async function sampleActivation(locator, label, samples) {
  const durationMs = await locator.evaluate((element) => {
    const startedAt = performance.now();
    element.click();
    return performance.now() - startedAt;
  });
  samples.push({ label, durationMs });
}

async function measureSixfoldLayout(page, id, width, height) {
  await page.setViewportSize({ width, height });
  const host = page.locator('[data-hotspot-id="sixfold-weir"]');
  const frame = page.locator('.scene-frame');
  const containingBlock = page.locator('.scene-world-content');
  const image = page.locator('.scene-art');
  const primary = page.locator('button.hotspot[data-primary-hotspot="true"]');
  const returned = page.locator('[data-hotspot-id="meadow-return-ridge"]');
  const inventoryReturn = page.getByRole("button", { name: "Return to Chapter I, Glass Meadow", exact: true });
  const lookAt = page.getByRole("button", { name: "LOOK AT", exact: true });
  await page.waitForFunction(() => document.querySelector('.scene-art')?.complete && document.querySelector('.scene-art')?.naturalWidth > 0);
  const [hostRect, frameRect, containingRect, imageRect, host04Rect, returnRect, inventoryReturnRect, labelRect] = await Promise.all([
    host.boundingBox(), frame.boundingBox(), containingBlock.boundingBox(), image.boundingBox(), primary.boundingBox(), returned.boundingBox(), inventoryReturn.boundingBox(), host.locator('span').boundingBox(),
  ]);
  if (!hostRect || !frameRect || !containingRect || !imageRect || !host04Rect || !returnRect || !inventoryReturnRect || !labelRect) throw new Error(`Missing Host 05 geometry at ${id}`);
  const imageState = await image.evaluate((element) => {
    const style = getComputedStyle(element);
    return {
      natural: { width: element.naturalWidth, height: element.naturalHeight },
      objectFit: style.objectFit,
      objectPosition: style.objectPosition,
      border: [style.borderLeftWidth, style.borderTopWidth, style.borderRightWidth, style.borderBottomWidth],
      padding: [style.paddingLeft, style.paddingTop, style.paddingRight, style.paddingBottom],
    };
  });
  if (imageState.natural.width !== 1672 || imageState.natural.height !== 941 || imageState.objectFit !== "cover") throw new Error(`Unexpected Host 05 image contract at ${id}: ${JSON.stringify(imageState)}`);
  const positionTokens = imageState.objectPosition.trim().split(/\s+/);
  const parsePosition = (token, axis) => {
    if (/^-?(?:\d+\.?\d*|\.\d+)%$/.test(token)) return Number.parseFloat(token) / 100;
    const keywords = axis === "x" ? { left: 0, center: 0.5, right: 1 } : { top: 0, center: 0.5, bottom: 1 };
    if (token in keywords) return keywords[token];
    throw new Error(`Unsupported ${axis} object-position at ${id}: ${token}`);
  };
  if (positionTokens.length !== 2) throw new Error(`Unsupported object-position at ${id}: ${imageState.objectPosition}`);
  const objectPosition = { x: parsePosition(positionTokens[0], "x"), y: parsePosition(positionTokens[1], "y") };
  const scale = Math.max(imageRect.width / imageState.natural.width, imageRect.height / imageState.natural.height);
  const drawnWidth = imageState.natural.width * scale;
  const drawnHeight = imageState.natural.height * scale;
  const offsetX = (imageRect.width - drawnWidth) * objectPosition.x;
  const offsetY = (imageRect.height - drawnHeight) * objectPosition.y;
  const latticeQ = 1 / 64;
  const quantizeFloor = (value) => Math.floor(value / latticeQ) * latticeQ;
  const unquantizedPhysical = {
    x: imageRect.x + imageRect.width * 0.45,
    y: imageRect.y + imageRect.height * 0.75,
    width: imageRect.width * 0.20,
    height: imageRect.height * 0.25,
  };
  const physicalRect = {
    x: imageRect.x + quantizeFloor(imageRect.width * 0.45),
    y: imageRect.y + quantizeFloor(imageRect.height * 0.75),
    width: quantizeFloor(imageRect.width * 0.20),
    height: quantizeFloor(imageRect.height * 0.25),
  };
  const sourceBounds = {
    left: (physicalRect.x - imageRect.x - offsetX) / scale,
    top: (physicalRect.y - imageRect.y - offsetY) / scale,
    right: (physicalRect.x + physicalRect.width - imageRect.x - offsetX) / scale,
    bottom: (physicalRect.y + physicalRect.height - imageRect.y - offsetY) / scale,
  };
  const overlap = (a, b) => Math.max(0, Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x))
    * Math.max(0, Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y));
  const nominalSourceBounds = { left: 752.4, top: 705.75, right: 1086.8, bottom: 941 };
  const nominalSourceAnchor = { x: 919.6, y: 823.375 };
  const visible = { left: Math.max(nominalSourceBounds.left, sourceBounds.left), top: Math.max(nominalSourceBounds.top, sourceBounds.top), right: Math.min(nominalSourceBounds.right, sourceBounds.right), bottom: Math.min(nominalSourceBounds.bottom, sourceBounds.bottom) };
  const sourceBandRetention = Math.max(0, visible.right - visible.left) * Math.max(0, visible.bottom - visible.top)
    / ((nominalSourceBounds.right - nominalSourceBounds.left) * (nominalSourceBounds.bottom - nominalSourceBounds.top));
  const actualSourceCenter = { x: (sourceBounds.left + sourceBounds.right) / 2, y: (sourceBounds.top + sourceBounds.bottom) / 2 };
  const anchorContained = nominalSourceAnchor.x >= sourceBounds.left && nominalSourceAnchor.x <= sourceBounds.right
    && nominalSourceAnchor.y >= sourceBounds.top && nominalSourceAnchor.y <= sourceBounds.bottom;
  const boxesEqual = ["x", "y", "width", "height"].every((key) => containingRect[key] === imageRect[key]);
  const zeroImageEdges = [...imageState.border, ...imageState.padding].every((value) => Number.parseFloat(value) === 0);
  const expectedSemantic = {
    x: imageRect.x + quantizeFloor(imageRect.width * 0.45),
    y: imageRect.y + quantizeFloor(Math.min(imageRect.height * 0.75, imageRect.height - 44)),
    width: quantizeFloor(imageRect.width * 0.20),
    height: quantizeFloor(Math.max(imageRect.height * 0.25, 44)),
  };
  const semanticExact = ["x", "y", "width", "height"].every((key) => hostRect[key] === expectedSemantic[key]);
  const semanticBottomAnchored = hostRect.y + hostRect.height === physicalRect.y + physicalRect.height;
  const physicalCenterInsideActivation = physicalRect.x + physicalRect.width / 2 >= hostRect.x
    && physicalRect.x + physicalRect.width / 2 <= hostRect.x + hostRect.width
    && physicalRect.y + physicalRect.height / 2 >= hostRect.y
    && physicalRect.y + physicalRect.height / 2 <= hostRect.y + hostRect.height;
  const labelState = await host.locator('span').evaluate((element) => {
    const style = getComputedStyle(element);
    return {
      border: {
        left: Number.parseFloat(style.borderLeftWidth),
        top: Number.parseFloat(style.borderTopWidth),
        right: Number.parseFloat(style.borderRightWidth),
        bottom: Number.parseFloat(style.borderBottomWidth),
      },
      padding: {
        left: Number.parseFloat(style.paddingLeft),
        top: Number.parseFloat(style.paddingTop),
        right: Number.parseFloat(style.paddingRight),
        bottom: Number.parseFloat(style.paddingBottom),
      },
      scrollWidth: element.scrollWidth,
      scrollHeight: element.scrollHeight,
      clientWidth: element.clientWidth,
      clientHeight: element.clientHeight,
    };
  });
  const labelTextRect = {
    x: labelRect.x + labelState.border.left + labelState.padding.left,
    y: labelRect.y + labelState.border.top + labelState.padding.top,
    width: labelRect.width - labelState.border.left - labelState.border.right - labelState.padding.left - labelState.padding.right,
    height: labelRect.height - labelState.border.top - labelState.border.bottom - labelState.padding.top - labelState.padding.bottom,
  };
  const outerLabelInset = labelRect.x - hostRect.x === 3 && labelRect.y - hostRect.y === 3
    && hostRect.x + hostRect.width - labelRect.x - labelRect.width === 3
    && hostRect.y + hostRect.height - labelRect.y - labelRect.height === 3;
  const innerLabelInset = labelRect.x - (hostRect.x + 1) === 2 && labelRect.y - (hostRect.y + 1) === 2
    && hostRect.x + hostRect.width - 1 - labelRect.x - labelRect.width === 2
    && hostRect.y + hostRect.height - 1 - labelRect.y - labelRect.height === 2;
  const labelBorderExact = Object.values(labelState.border).every((value) => value === 1);
  const labelPaddingExact = Object.values(labelState.padding).every((value) => value === 1);
  const labelTextExact = labelTextRect.x === hostRect.x + 5 && labelTextRect.y === hostRect.y + 5
    && labelTextRect.width === hostRect.width - 10 && labelTextRect.height === hostRect.height - 10;
  const labelRawFinite = [...Object.values(labelState.border), ...Object.values(labelState.padding), ...Object.values(labelTextRect)]
    .every((value) => Number.isFinite(value));
  const labelScrollContained = labelState.scrollWidth <= labelState.clientWidth && labelState.scrollHeight <= labelState.clientHeight;
  const identityBefore = await host.evaluate((element) => ({
    ariaLabel: element.getAttribute("aria-label"),
    hotspotId: element.dataset.hotspotId,
    state: element.dataset.sixfoldWeirState,
    active: document.activeElement === element,
  }));
  if (!identityBefore.active || identityBefore.state !== "in_progress") throw new Error(`Host 05 forced-color precondition failed at ${id}: ${JSON.stringify(identityBefore)}`);
  await page.emulateMedia({ forcedColors: "active", reducedMotion: "reduce" });
  const mediaState = await page.evaluate(() => ({
    forcedColors: matchMedia("(forced-colors: active)").matches,
    reducedMotion: matchMedia("(prefers-reduced-motion: reduce)").matches,
  }));
  const focusOrder = await page.evaluate(() => {
    const identity = (element) => element?.dataset?.hotspotId || element?.getAttribute("aria-label") || element?.textContent?.trim();
    const host04 = document.querySelector('button.hotspot[data-primary-hotspot="true"]');
    const host05 = document.querySelector('[data-hotspot-id="sixfold-weir"]');
    const ridge = document.querySelector('[data-hotspot-id="meadow-return-ridge"]');
    const verbs = Array.from(document.querySelectorAll('.verb-grid .verb'));
    const returnedAction = document.querySelector('[aria-label="Return to Chapter I, Glass Meadow"]');
    return {
      dom: [host04, host05, ridge].map(identity),
      enabled: [host05, ...verbs, returnedAction].filter((element) => element && !element.disabled).map(identity),
    };
  });
  const actionStateBefore = await page.evaluate((key) => ({
    save: localStorage.getItem(key),
    dialogue: document.querySelector('.dialogue-box')?.textContent,
    url: location.href,
  }), saveKey);
  await page.keyboard.press("Tab");
  const intermediate = await lookAt.evaluate((element) => ({
    active: document.activeElement === element,
    focusVisible: element.matches(":focus-visible"),
    identity: element.textContent.trim(),
  }));
  await page.keyboard.press("Shift+Tab");
  const forcedColorEvidence = await host.evaluate((element) => {
    const style = getComputedStyle(element);
    const label = element.querySelector("span");
    const labelStyle = getComputedStyle(label);
    const probe = document.createElement("span");
    probe.style.position = "fixed";
    probe.style.outline = "3px solid Highlight";
    document.body.append(probe);
    const systemHighlight = getComputedStyle(probe).outlineColor;
    probe.remove();
    return {
      active: document.activeElement === element,
      focusVisible: element.matches(":focus-visible"),
      outlineWidth: style.outlineWidth,
      outlineStyle: style.outlineStyle,
      outlineColor: style.outlineColor,
      systemHighlight,
      hostMotion: [style.animationDuration, style.animationDelay, style.transitionDuration, style.transitionDelay],
      labelMotion: [labelStyle.animationDuration, labelStyle.animationDelay, labelStyle.transitionDuration, labelStyle.transitionDelay],
    };
  });
  const actionStateAfter = await page.evaluate((key) => ({
    save: localStorage.getItem(key),
    dialogue: document.querySelector('.dialogue-box')?.textContent,
    url: location.href,
  }), saveKey);
  const identityAfter = await host.evaluate((element) => ({
    ariaLabel: element.getAttribute("aria-label"),
    hotspotId: element.dataset.hotspotId,
    state: element.dataset.sixfoldWeirState,
    active: document.activeElement === element,
  }));
  const postHostRect = await host.boundingBox();
  const postLabelRect = await host.locator('span').boundingBox();
  await page.emulateMedia({ forcedColors: "none", reducedMotion: "no-preference" });
  const motionZero = (values) => values.every((value) => value.split(",").every((part) => Number.parseFloat(part) === 0));
  const noGameAction = JSON.stringify(actionStateBefore) === JSON.stringify(actionStateAfter);
  const forcedColors = mediaState.forcedColors && mediaState.reducedMotion
    && intermediate.active && intermediate.focusVisible && intermediate.identity === "LOOK AT"
    && forcedColorEvidence.active && forcedColorEvidence.focusVisible
    && forcedColorEvidence.outlineWidth === "3px" && forcedColorEvidence.outlineStyle === "solid"
    && forcedColorEvidence.outlineColor === forcedColorEvidence.systemHighlight
    && forcedColorEvidence.outlineColor !== "rgba(0, 0, 0, 0)" && forcedColorEvidence.outlineColor !== "transparent";
  const reducedMotion = motionZero(forcedColorEvidence.hostMotion) && motionZero(forcedColorEvidence.labelMotion);
  const identityStable = JSON.stringify({ ...identityBefore, active: true }) === JSON.stringify(identityAfter)
    && JSON.stringify(hostRect) === JSON.stringify(postHostRect) && JSON.stringify(labelRect) === JSON.stringify(postLabelRect);
  const targetSize = hostRect.width >= 44 && hostRect.height >= 44;
  const labelContained = labelRect.x > hostRect.x && labelRect.x + labelRect.width < hostRect.x + hostRect.width
    && labelRect.y > hostRect.y && labelRect.y + labelRect.height < hostRect.y + hostRect.height;
  const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  const physicalNormalized = { left: 0.45, top: 0.75, width: 0.20, height: 0.25, centerX: 0.55, centerY: 0.875 };
  const result = {
    id,
    viewport: { width, height },
    scene: frameRect,
    containingBlock: containingRect,
    image: { ...imageRect, ...imageState, objectPosition },
    physical: physicalRect,
    unquantizedPhysical,
    expectedSemantic,
    lattice: { q: latticeQ, operator: "floor", strict: true, epsilon: false },
    host05: { x: hostRect.x, y: hostRect.y, width: hostRect.width, height: hostRect.height },
    label: { ...labelRect, border: labelState.border, padding: labelState.padding, text: labelTextRect },
    host04: host04Rect,
    returnRidge: returnRect,
    inventoryReturn: inventoryReturnRect,
    physicalNormalized,
    nominalSourceBounds,
    nominalSourceAnchor,
    sourceBounds,
    actualSourceCenter,
    centerContained: anchorContained,
    anchorContained,
    sourceBandRetention,
    host04OverlapArea: overlap(hostRect, host04Rect),
    returnOverlapArea: overlap(hostRect, returnRect),
    targetSize,
    labelContained,
    labelInset: innerLabelInset && outerLabelInset,
    innerLabelInset,
    outerLabelInset,
    labelBorderExact,
    labelPaddingExact,
    labelTextExact,
    labelRawFinite,
    labelScrollContained,
    boxesEqual,
    zeroImageEdges,
    semanticExact,
    semanticBottomAnchored,
    physicalCenterInsideActivation,
    horizontalOverflow,
    focusOrder,
    forcedColorEvidence: {
      keyPath: "Tab -> Shift+Tab",
      reverseDomPredecessor: null,
      forwardSuccessor: "LOOK AT",
      intermediate,
      final: { identity: identityAfter.hotspotId, active: identityAfter.active, focusVisible: forcedColorEvidence.focusVisible },
      mediaState,
      noGameAction,
      ...forcedColorEvidence,
      identityBefore,
      identityAfter,
    },
    forcedColors,
    reducedMotion,
    identityStable,
  };
  result.pass = result.boxesEqual && result.zeroImageEdges && result.semanticExact && result.semanticBottomAnchored
    && result.physicalCenterInsideActivation && result.anchorContained && result.sourceBandRetention >= 0.95
    && result.host04OverlapArea === 0 && result.returnOverlapArea === 0 && result.targetSize
    && result.labelContained && result.labelInset && result.labelBorderExact && result.labelPaddingExact
    && result.labelTextExact && result.labelRawFinite && result.labelScrollContained && !result.horizontalOverflow
    && result.forcedColors && result.reducedMotion && result.identityStable
    && result.forcedColorEvidence.noGameAction
    && JSON.stringify(result.focusOrder.dom) === JSON.stringify(["primary", "sixfold-weir", "meadow-return-ridge"])
    && JSON.stringify(result.focusOrder.enabled) === JSON.stringify(["sixfold-weir", "LOOK AT", "USE", "TALK TO", "Return to Chapter I, Glass Meadow"]);
  return result;
}

async function loadSanctionedFixtureModule(relativePath, exportedNames, { beforeTests = true } = {}) {
  const file = resolve(repositoryRoot, "horizon-archive-game", relativePath);
  const sourceUrl = pathToFileURL(file);
  let source = readFileSync(file, "utf8");
  if (beforeTests) {
    const firstTest = source.indexOf("\ntest(");
    if (firstTest < 0) throw new Error(`Normal fixture source has no test boundary: ${relativePath}`);
    source = source.slice(0, firstTest);
  }
  source = source
    .replace(/from\s+(["'])(\.\.?\/[^"']+)\1/g, (_match, quote, specifier) => (
      `from ${quote}${new URL(specifier, sourceUrl).href}${quote}`
    ))
    .replaceAll("import.meta.url", JSON.stringify(sourceUrl.href));
  source += `\nexport { ${exportedNames.join(", ")} };`;
  return import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);
}

function exactFixtureBytes(actual, expected, label) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`${label} did not preserve the exact normal-controller predecessor bytes`);
  }
}

async function buildSanctionedLaterRailFixtures() {
  const protectedTest = await loadSanctionedFixtureModule(
    "test/custodyLedgerProtectedJourney.test.js",
    ["fixture"],
  );
  const protectedJourney = await loadSanctionedFixtureModule(
    "src/CustodyLedgerProtectedJourney.js",
    ["runRouteAndNearSurvey", "runFarSurvey", "runLearning"],
    { beforeTests: false },
  );
  const rp002Normal = await loadSanctionedFixtureModule(
    "test/custodyLedgerNormalRoute.test.js",
    ["completeFarSave", "predecessor"],
  );
  const rp002Input = protectedTest.fixture();
  const near = protectedJourney.runRouteAndNearSurvey(rp002Input);
  const observationState = protectedJourney.runFarSurvey(near.observationState, rp002Input);
  const learning = protectedJourney.runLearning(rp002Input);
  const dependencies = {
    predecessorValue: rp002Input.learningPredecessor,
    prerequisiteEvidence: rp002Input.prerequisiteEvidence,
    observationState,
  };
  const comparisonAdapter = createCustodyLedgerPersistenceAdapter();
  const review = deriveCustodyLedgerSaveEligibility(
    beginCustodyLedgerSaveEligibility(learning.state, dependencies),
    comparisonAdapter,
  );
  const comparison = commitCustodyLedgerBoundedComparison(
    prepareCustodyLedgerSave(review),
    comparisonAdapter,
    rp002Input.saveAction,
  );
  if (comparison.phase !== "comparison_complete") throw new Error("Sanctioned RP-002 comparison fixture did not complete");
  const routeBase = sanitizeCustodyLedgerNormalRouteSave({
    ...rp002Normal.completeFarSave("first-run-canonical-rp002"),
    checkpoint: "sc03_python_primary_blank",
  }, rp002Normal.predecessor);
  if (!routeBase) throw new Error("Sanctioned RP-002 route fixture did not sanitize");
  const rp002Memory = new Map();
  const rp002Storage = {
    getItem: (key) => rp002Memory.get(key) ?? null,
    setItem: (key, value) => rp002Memory.set(key, value),
    removeItem: (key) => rp002Memory.delete(key),
  };
  const rp002 = writeCustodyLedgerNormalComparisonCheckpoint(
    rp002Storage,
    routeBase,
    {
      ...comparison,
      owner: comparison.ownerMessage?.owner,
      savedText: comparison.ownerMessage?.text,
    },
    rp002Normal.predecessor,
  );
  if (!rp002 || rp002Memory.get(CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY) !== JSON.stringify(rp002)) {
    throw new Error("Sanctioned RP-002 verified-restore fixture did not commit atomically");
  }

  const { exactReviewSaveRecord } = await import(pathToFileURL(resolve(
    repositoryRoot,
    "horizon-archive-game/test/calibrationMarginReviewSaveFixtures.js",
  )).href);
  const { exactThreeCurrentReachSaveRecord } = await import(pathToFileURL(resolve(
    repositoryRoot,
    "horizon-archive-game/test/threeCurrentReachSaveFixture.js",
  )).href);
  const rp003 = exactReviewSaveRecord();
  const rp004 = exactThreeCurrentReachSaveRecord();

  const rp005Module = await loadSanctionedFixtureModule("test/manyfoldReturnNormal.test.js", [
    "createManyfoldReturnNormalController", "options", "completeAndSave", "td004Record",
  ]);
  exactFixtureBytes(rp004, rp005Module.td004Record(), "RP-004→RP-005");
  const rp005 = rp005Module.completeAndSave(
    rp005Module.createManyfoldReturnNormalController(rp005Module.options()),
  ).record;

  const rp006Module = await loadSanctionedFixtureModule("test/intervalWorksNormal.test.js", [
    "createIntervalWorksNormalController", "options", "completeAndSave", "manyfoldRecord",
  ]);
  exactFixtureBytes(rp005, rp006Module.manyfoldRecord(), "RP-005→RP-006");
  const rp006 = rp006Module.completeAndSave(
    rp006Module.createIntervalWorksNormalController(rp006Module.options()),
  ).record;

  const rp007Module = await loadSanctionedFixtureModule("test/braidedVergeNormal.test.js", [
    "subject", "advanceAll", "dispatch", "braidedVergeActions", "intervalRecord",
  ]);
  exactFixtureBytes(rp006, rp007Module.intervalRecord(), "RP-006→RP-007");
  const rp007Subject = rp007Module.subject();
  rp007Module.advanceAll(rp007Subject.controller);
  rp007Module.dispatch(rp007Subject.controller, rp007Module.braidedVergeActions.review);
  const rp007 = rp007Module.dispatch(rp007Subject.controller, rp007Module.braidedVergeActions.save).record;

  const rp008Module = await loadSanctionedFixtureModule("test/offsetReachNormal.test.js", [
    "subject", "advanceAll", "dispatch", "offsetReachActions", "braidedRecord",
  ]);
  exactFixtureBytes(rp007, rp008Module.braidedRecord(), "RP-007→RP-008");
  const rp008Subject = rp008Module.subject();
  rp008Module.advanceAll(rp008Subject.controller);
  rp008Module.dispatch(rp008Subject.controller, rp008Module.offsetReachActions.review);
  const rp008 = rp008Module.dispatch(rp008Subject.controller, rp008Module.offsetReachActions.save).record;

  const rp009Module = await loadSanctionedFixtureModule("test/occludedFoldNormal.test.js", [
    "subject", "advance", "dispatch", "occludedFoldActions", "offsetRecord",
  ]);
  exactFixtureBytes(rp008, rp009Module.offsetRecord(), "RP-008→RP-009");
  const rp009Subject = rp009Module.subject();
  rp009Module.advance(rp009Subject.controller);
  rp009Module.dispatch(rp009Subject.controller, rp009Module.occludedFoldActions.review);
  const rp009 = rp009Module.dispatch(rp009Subject.controller, rp009Module.occludedFoldActions.save).record;

  const rp010Module = await loadSanctionedFixtureModule("test/counterfieldNormal.test.js", [
    "subject", "advance", "dispatch", "counterfieldActions", "predecessor",
  ]);
  exactFixtureBytes(rp009, rp010Module.predecessor(), "RP-009→RP-010");
  const rp010Subject = rp010Module.subject();
  rp010Module.advance(rp010Subject.controller);
  rp010Module.dispatch(rp010Subject.controller, rp010Module.counterfieldActions.prepareSave);
  const rp010 = rp010Module.dispatch(rp010Subject.controller, rp010Module.counterfieldActions.save).record;

  const rp011Module = await loadSanctionedFixtureModule("test/unborrowedReachNormal.test.js", [
    "subject", "advanceToFreshReview", "dispatch", "update", "unborrowedReachActions",
    "unborrowedReachReconciliationMethodIds", "unborrowedReachLimitIds", "predecessor",
  ]);
  exactFixtureBytes(rp010, rp011Module.predecessor(), "RP-010→RP-011");
  const rp011Subject = rp011Module.subject();
  rp011Module.advanceToFreshReview(rp011Subject.controller);
  rp011Module.dispatch(rp011Subject.controller, rp011Module.unborrowedReachActions.reviewFresh);
  rp011Module.dispatch(rp011Subject.controller, rp011Module.unborrowedReachActions.finalizeFresh);
  for (const action of [
    rp011Module.unborrowedReachActions.reopenRp007,
    rp011Module.unborrowedReachActions.reopenRp008,
    rp011Module.unborrowedReachActions.reopenRp009,
    rp011Module.unborrowedReachActions.reopenRp010,
  ]) rp011Module.dispatch(rp011Subject.controller, action);
  rp011Module.update(rp011Subject.controller, {
    methods: [...rp011Module.unborrowedReachReconciliationMethodIds],
    limits: Object.fromEntries(rp011Module.unborrowedReachLimitIds.map((id) => [id, null])),
  });
  rp011Module.dispatch(rp011Subject.controller, rp011Module.unborrowedReachActions.checkReconciliation);
  rp011Module.dispatch(rp011Subject.controller, rp011Module.unborrowedReachActions.reviewReconciliation);
  const rp011 = rp011Module.dispatch(
    rp011Subject.controller,
    rp011Module.unborrowedReachActions.saveReconciliation,
  ).record;

  const rp012Module = await loadSanctionedFixtureModule("test/measuredHorizonNormal.test.js", [
    "makeMeasuredSubject", "advanceMeasuredToOutcome", "dispatchMeasured", "measuredHorizonActions",
    "measuredHorizonGateIds", "exactReleasedUnborrowedRecordAndState",
  ]);
  exactFixtureBytes(rp011, rp012Module.exactReleasedUnborrowedRecordAndState().record, "RP-011→RP-012");
  const buildMeasured = (missedGateId) => {
    const subject = rp012Module.makeMeasuredSubject();
    rp012Module.advanceMeasuredToOutcome(subject, missedGateId);
    rp012Module.dispatchMeasured(subject.controller, rp012Module.measuredHorizonActions.save);
    return rp012Module.dispatchMeasured(subject.controller, rp012Module.measuredHorizonActions.save).record;
  };
  const rp012Ready = buildMeasured(null);
  const rp012NotYet = buildMeasured(rp012Module.measuredHorizonGateIds[4]);

  return Object.freeze({
    expectedCityPredecessor: rp002Input.learningPredecessor,
    records: Object.freeze({
      [CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY]: rp002,
      [CALIBRATION_MARGIN_REVIEW_SAVE_KEY]: rp003,
      [THREE_CURRENT_REACH_SAVE_KEY]: rp004,
      [MANYFOLD_RETURN_SAVE_KEY]: rp005,
      [INTERVAL_WORKS_SAVE_KEY]: rp006,
      [BRAIDED_VERGE_SAVE_KEY]: rp007,
      [OFFSET_REACH_SAVE_KEY]: rp008,
      [OCCLUDED_FOLD_SAVE_KEY]: rp009,
      [COUNTERFIELD_SAVE_KEY]: rp010,
      [UNBORROWED_REACH_SAVE_KEY]: rp011,
      [MEASURED_HORIZON_SAVE_KEY]: rp012Ready,
    }),
    rp002,
    rp012Ready,
    rp012NotYet,
  });
}

async function captureMeadow(page, path) {
  await page.locator(".scene-art.glass-meadow-art").waitFor();
  await page.locator(".scene-frame").screenshot({ path: qaPath(path) });
}

async function verifyFirstRunCityStates(page) {
  const layouts = [
    [1920, 1080, "desktop"],
    [1366, 768, "laptop"],
    [390, 844, "narrow"],
    [768, 900, "effective-200"],
  ];
  for (const [width, height, label] of layouts) {
    await page.setViewportSize({ width, height });
    if (label === "effective-200") await page.evaluate(() => { document.documentElement.style.fontSize = "200%"; });
    const metrics = await page.locator('main[data-scene="city-threshold"]').evaluate((main) => {
      const controls = [...main.querySelectorAll("button:not([disabled]), select:not([disabled])")]
        .map((control) => control.getBoundingClientRect())
        .filter((rect) => rect.width > 0 && rect.height > 0);
      return {
        scrollWidth: document.documentElement.scrollWidth,
        viewportWidth: document.documentElement.clientWidth,
        headingVisible: Boolean(main.querySelector("h1")?.getBoundingClientRect().height),
        targetsAtLeast44: controls.every((rect) => rect.width >= 44 && rect.height >= 44),
      };
    });
    if (!metrics.headingVisible || metrics.scrollWidth > metrics.viewportWidth + 1 || !metrics.targetsAtLeast44) {
      throw new Error(`City ${label} containment/target failure: ${JSON.stringify(metrics)}`);
    }
    if (label === "effective-200") await page.evaluate(() => { document.documentElement.style.fontSize = ""; });
  }

  await page.emulateMedia({ reducedMotion: "reduce", forcedColors: "active" });
  await page.getByRole("button", { name: "OBSERVE OPERATING CYCLES", exact: true }).focus();
  const focusStyle = await page.getByRole("button", { name: "OBSERVE OPERATING CYCLES", exact: true }).evaluate((element) => getComputedStyle(element).outlineStyle);
  if (focusStyle === "none") throw new Error("City forced-color focus is not visible");
  await page.emulateMedia({ reducedMotion: "no-preference", forcedColors: "none" });
  await page.setViewportSize({ width: 1600, height: 900 });

  await page.getByRole("button", { name: "OBSERVE OPERATING CYCLES", exact: true }).click();
  await page.getByRole("button", { name: "TRACE MAINTENANCE", exact: true }).click();
  await page.getByRole("button", { name: "INSPECT STOP SEAM", exact: true }).click();
  await page.getByRole("button", { name: "INSPECT MAP DIVISION", exact: true }).click();
  await page.getByRole("button", { name: "COMPARE BOUNDARIES", exact: true }).click();
  await page.getByRole("button", { name: "OBSERVE ENVIRONMENTAL ACCESS", exact: true }).click();
  await page.getByRole("button", { name: "OBSERVE CLOSED RECORD APERTURE", exact: true }).click();
  await page.getByRole("button", { name: "ESTABLISH SURVEY POINT", exact: true }).click();
  await page.getByRole("button", { name: "SELECT SURVEY COORDINATE", exact: true }).click();
  await page.getByRole("button", { name: "RECORD LOCAL ANCHOR", exact: true }).click();

  const overlay = page.getByRole("dialog", { name: "Expedition local record overlay", exact: true });
  await overlay.waitFor();
  await page.locator("#anchor-probe-heading:focus").waitFor();
  if (!await page.locator(".city-world").evaluate((element) => element.inert)
    || !await page.locator(".city-command-panel").evaluate((element) => element.inert)) {
    throw new Error("City background remained interactive behind local-record overlay");
  }
  await page.keyboard.press("Shift+Tab");
  if (!await overlay.evaluate((element) => element.contains(document.activeElement))) throw new Error("Shift+Tab escaped City overlay");
  await page.keyboard.press("Escape");
  await overlay.waitFor({ state: "detached" });
  if (!await page.getByRole("button", { name: "OBSERVE ENVIRONMENTAL ACCESS", exact: true }).evaluate((element) => element === document.activeElement)) {
    throw new Error("City overlay cancel did not restore the first required access action");
  }

  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  await overlay.waitFor();
  await page.locator("#anchor-probe-heading:focus").waitFor();
  await page.getByRole("button", { name: "Cancel and return to access detail", exact: true }).click();
  await overlay.waitFor({ state: "detached" });
}

async function completeFinalConfidence(page) {
  await page.getByRole("button", { name: "Open Final Confidence Gate", exact: true }).click();
  const terminal = page.locator('[data-terminal-exercise="EX-SIM03-FINAL-CONFIDENCE"]');
  await terminal.waitFor();
  await terminal.getByLabel("Final confidence L-06-03 readiness", { exact: true })
    .selectOption(referenceFinalConfidenceEntry.l0603_readiness_state);
  for (const [label, value] of [
    ["CUM-01 transfer score", referenceFinalConfidenceEntry.cum01_transfer_score],
    ["SIM-01 score", referenceFinalConfidenceEntry.sim01_score],
    ["SIM-02 score", referenceFinalConfidenceEntry.sim02_score],
    ["Prior simulation separation hours", referenceFinalConfidenceEntry.sim01_sim02_separation_hours],
    ["Open critical misconceptions", referenceFinalConfidenceEntry.open_critical_misconceptions],
  ]) await terminal.getByLabel(`Final confidence ${label}`, { exact: true }).fill(String(value));
  await terminal.getByLabel("Final confidence official sources reverified on", { exact: true })
    .fill(referenceFinalConfidenceEntry.official_sources_reverified_on);
  await terminal.getByLabel("Final confidence attempted on", { exact: true })
    .fill(referenceFinalConfidenceEntry.attempted_on);
  await terminal.getByRole("checkbox", { name: /Every high-confidence miss was explained and retested/i }).check();
  await terminal.getByRole("button", { name: "Check entry evidence", exact: true }).click();
  await terminal.getByLabel("Final confidence decision", { exact: true }).waitFor();

  for (const [id, answer] of Object.entries(referenceFinalConfidence)) {
    await terminal.getByLabel("Final confidence decision", { exact: true }).selectOption(answer.decision);
    await terminal.getByLabel("Final confidence reason", { exact: true }).selectOption(answer.reason);
    await terminal.getByRole("button", { name: "Check final confidence item", exact: true }).click();
    await terminal.getByRole("status").getByText("ITEM PASS", { exact: false }).waitFor();
    await terminal.getByRole("button", {
      name: id === "Q12" ? "View final confidence result" : "Next final confidence item",
      exact: true,
    }).click();
  }
  await terminal.getByRole("heading", { name: "24 / 24 dimensions", exact: true }).waitFor();
  await terminal.getByRole("radio", { name: "high", exact: true }).check();
  await terminal.getByRole("button", { name: "Acknowledge final confidence evidence", exact: true }).click();
  await terminal.waitFor({ state: "detached" });
  const evidence = await page.evaluate(({ key }) => JSON.parse(localStorage.getItem(key)).finalConfidenceEvidence, { key: saveKey });
  if (evidence?.masteryStatus !== "mastered"
    || evidence?.attemptCount !== 12
    || Object.keys(evidence?.dimensionCorrectness ?? {}).length !== 12
    || "response" in evidence
    || "privateNote" in evidence) {
    throw new Error(`Final Confidence did not persist strict private-free mastery: ${JSON.stringify(evidence)}`);
  }
}

async function completeCityThreshold(page) {
  for (const action of [
    "OBSERVE ENVIRONMENTAL ACCESS",
    "OBSERVE CLOSED RECORD APERTURE",
    "ESTABLISH SURVEY POINT",
    "SELECT SURVEY COORDINATE",
    "RECORD LOCAL ANCHOR",
  ]) await page.getByRole("button", { name: action, exact: true }).click();

  await page.getByLabel("Anchor packet Python source", { exact: true }).fill(anchorPacketReference);
  await page.getByRole("button", { name: "Run 10 checks", exact: true }).click();
  const structureForm = page.locator(".city-explanation-form");
  await structureForm.getByRole("button", { name: "Check structure explanation", exact: true }).waitFor();
  await structureForm.locator("select").nth(0).selectOption("ordered_observation_collection");
  await structureForm.locator("select").nth(1).selectOption("named_nested_state");
  await structureForm.locator("select").nth(2).selectOption("string_interchange_requires_parsing_and_serialization");
  await structureForm.getByRole("button", { name: "Check structure explanation", exact: true }).click();

  for (const form of ["primary", "transfer"]) {
    for (const item of cum01Forms[form]) {
      const cumForm = page.locator("form.city-learning-panel");
      await cumForm.locator("select").nth(0).selectOption(item.decision);
      await cumForm.locator("select").nth(1).selectOption(item.reason);
      await cumForm.getByRole("button", { name: /Record item|Submit blank .* form/ }).click();
    }
  }
  const safetyForm = page.locator(".city-explanation-form");
  await safetyForm.locator("select").nth(0).selectOption("valid_output_is_not_authority_to_act");
  await safetyForm.locator("select").nth(1).selectOption("internal_readiness_is_not_an_exam_guarantee");
  await safetyForm.locator("select").nth(2).selectOption("external_action_needs_separate_scope_authority_and_privacy_review");
  await page.getByRole("button", { name: "Check safety explanation", exact: true }).click();
  await page.getByRole("button", { name: "Confirm local record", exact: true }).click();

  const completed = await page.evaluate((key) => JSON.parse(localStorage.getItem(key)), CITY_THRESHOLD_SAVE_KEY);
  if (completed?.checkpoint !== "anchor_complete"
    || completed?.cityThresholdAnchorRecorded !== true
    || completed?.civicDistrictRouteAvailable !== true) {
    throw new Error(`City completion did not persist the verified RP-001 predecessor: ${JSON.stringify(completed)}`);
  }
  await page.locator('.city-world').getByRole("button", { name: "ENTER CIVIC DISTRICT", exact: true }).click();
  await page.locator('.city-command-panel').getByRole("button", { name: "FOLLOW RECORDED CIVIC ROUTE", exact: true }).waitFor();
}

async function installLaterRailRecords(page, measuredHorizonRecord) {
  const entries = Object.entries({
    ...laterRailFixtures.records,
    [MEASURED_HORIZON_SAVE_KEY]: measuredHorizonRecord,
    [CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY]: laterRailFixtures.rp002,
  }).map(([key, record]) => [key, JSON.stringify(record)]);
  await page.evaluate((records) => {
    for (const [key, bytes] of records) localStorage.setItem(key, bytes);
  }, entries);
  const roundTrip = await page.evaluate((records) => Object.fromEntries(
    records.map(([key]) => [key, localStorage.getItem(key)]),
  ), entries);
  for (const [key, bytes] of entries) {
    if (roundTrip[key] !== bytes) throw new Error(`Later-rail fixture did not round-trip exactly: ${key}`);
  }
}

async function measuredHorizonSnapshot(page, expectedGroup, expectedLocalState) {
  const shell = page.locator(`main.measured-horizon-shell[data-active-group="${expectedGroup}"]`);
  await shell.waitFor();
  await page.locator("#mh40-saved-review-heading:focus").waitFor();
  await shell.getByRole("heading", { name: "MEASURED HORIZON RECORD RESTORED", exact: true }).waitFor();
  await shell.getByRole("heading", { name: expectedLocalState, exact: true }).waitFor();
  await shell.getByText("This is recoverable course evidence, not a Microsoft exam result", { exact: false }).waitFor();
  return shell.evaluate((element) => {
    const outcome = element.querySelector('[data-outcome-anatomy="common-v1"]');
    const terms = [...outcome.querySelectorAll("dt")].map((item) => item.textContent.trim());
    const values = [...outcome.querySelectorAll("dd")].map((item) => item.textContent.trim());
    return {
      shellVersion: element.dataset.shellVersion,
      controllerVersion: element.dataset.controllerVersion,
      owner: element.dataset.owner,
      phase: element.dataset.phase,
      outcomeAnatomy: outcome.dataset.outcomeAnatomy,
      terms,
      authority: values[terms.indexOf("Authority")],
      successor: values[terms.indexOf("Successor")],
      boundary: element.querySelector(".measured-horizon-boundary")?.textContent.trim(),
      commonDisclaimer: outcome.querySelector("p:last-child")?.textContent.trim(),
      returns: [...element.querySelectorAll(".measured-horizon-returns button")].map((item) => item.textContent.trim()),
    };
  });
}

async function enterMeasuredHorizonRestore(page) {
  await page.locator('.city-command-panel').getByRole("button", { name: "FOLLOW RECORDED CIVIC ROUTE", exact: true }).click();
  await page.locator('main[data-scene="civic-record-district"] #custody-ledger-verified-restore-heading').waitFor();
  await page.waitForFunction(() => document.activeElement?.textContent?.trim() === "RETURN TO CITY THRESHOLD");
  await page.getByText("Civic comparison restored. Working notes are cleared; closed records remain closed.", { exact: true }).first().waitFor();
  await page.getByRole("button", { name: "RETURN TO CITY THRESHOLD", exact: true }).click();
  await page.waitForTimeout(250);
  const measuredRestore = page.locator('main.measured-horizon-shell[data-phase="MH-40 SAVE + RESTORE"]');
  if (!await measuredRestore.count()) {
    const state = await page.locator("main").first().evaluate((main) => ({
      className: main.className,
      scene: main.dataset.scene ?? null,
      shellVersion: main.dataset.shellVersion ?? null,
      activeGroup: main.dataset.activeGroup ?? null,
      phase: main.dataset.phase ?? null,
      headings: [...main.querySelectorAll("h1,h2")].map((item) => item.textContent.trim()),
    }));
    throw new Error(`Later-rail restore stopped before MH-40: ${JSON.stringify(state)}`);
  }
  await measuredRestore.waitFor();
}

async function verifyCanonicalLaterRail(page) {
  const actualCity = await page.evaluate((key) => JSON.parse(localStorage.getItem(key)), CITY_THRESHOLD_SAVE_KEY);
  exactFixtureBytes(actualCity, laterRailFixtures.expectedCityPredecessor, "RP-001→RP-002");
  await installLaterRailRecords(page, laterRailFixtures.rp012Ready);
  await enterMeasuredHorizonRestore(page);
  const ready = await measuredHorizonSnapshot(
    page,
    "mh40_restore_ready",
    "READY FOR CURRENT PRACTICE STANDARD",
  );
  const readyRecord = await page.evaluate((key) => JSON.parse(localStorage.getItem(key)), MEASURED_HORIZON_SAVE_KEY);
  exactFixtureBytes(readyRecord, laterRailFixtures.rp012Ready, "RP-012 READY restore");

  await installLaterRailRecords(page, laterRailFixtures.rp012NotYet);
  await page.evaluate((key) => localStorage.removeItem(key), CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY);
  await page.reload();
  await page.getByRole("button", { name: "Resume signal" }).click();
  await page.locator('main[data-scene="city-threshold"]').waitFor();
  await page.locator('.city-command-panel').getByRole("button", { name: "FOLLOW RECORDED CIVIC ROUTE", exact: true }).waitFor();
  await page.evaluate(({ key, record }) => localStorage.setItem(key, JSON.stringify(record)), {
    key: CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY,
    record: laterRailFixtures.rp002,
  });
  await enterMeasuredHorizonRestore(page);
  const notYet = await measuredHorizonSnapshot(
    page,
    "mh40_restore_not_yet",
    "NOT YET READY - REMEDIATION ROUTES SAVED",
  );
  const notYetRecord = await page.evaluate((key) => JSON.parse(localStorage.getItem(key)), MEASURED_HORIZON_SAVE_KEY);
  exactFixtureBytes(notYetRecord, laterRailFixtures.rp012NotYet, "RP-012 NOT YET restore");

  for (const key of [
    "shellVersion", "controllerVersion", "owner", "phase", "outcomeAnatomy",
    "terms", "authority", "successor", "boundary", "commonDisclaimer", "returns",
  ]) exactFixtureBytes(ready[key], notYet[key], `Measured Horizon common outcome ${key}`);
  if (ready.authority !== "None" || ready.successor !== "None") {
    throw new Error(`Measured Horizon opened authority or a successor: ${JSON.stringify(ready)}`);
  }

  const stored = await page.evaluate((keys) => Object.fromEntries(keys.map((key) => [key, localStorage.getItem(key)])),
    Object.keys(laterRailFixtures.records));
  for (const [key, record] of Object.entries(laterRailFixtures.records)) {
    if (key === CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY || key === MEASURED_HORIZON_SAVE_KEY) continue;
    if (stored[key] !== JSON.stringify(record)) throw new Error(`Accepted later-rail predecessor changed: ${key}`);
    if (record.successor !== null
      || record.cityStateDelta !== null
      || (Object.hasOwn(record, "worldStateDelta") && record.worldStateDelta !== null)
      || (Object.hasOwn(record, "externalStateDelta") && record.externalStateDelta !== null)
      || (Object.hasOwn(record, "authorityDelta") && record.authorityDelta !== null)) {
      throw new Error(`Later-rail record violated the null-delta hard stop: ${key}`);
    }
  }
  if (notYetRecord.successor !== null
    || notYetRecord.cityStateDelta !== null
    || notYetRecord.worldStateDelta !== null
    || notYetRecord.externalStateDelta !== null
    || notYetRecord.authorityDelta !== null) {
    throw new Error("Measured Horizon NOT YET record violated the null-delta hard stop");
  }
  if (await page.getByText(/prologue credits|credits recorded|post-ending|RP-013/i).count()) {
    throw new Error("Obsolete opening or post-ending state appeared during the canonical later rail");
  }
}

async function verifyMeadowHotspots(page, viewportLabel) {
  await page.getByRole("button", { name: "USE", exact: true }).click();
  const route = page.getByRole("button", { name: "use route-marker Terminal, locked", exact: true });
  const petal = page.getByRole("button", { name: "use field-linked Terminal", exact: true });
  const firstSignal = page.locator('[data-terminal-exercise="terminal-l0101-independent-run"]');
  const routeExercise = page.locator('[data-terminal-exercise="EX-L0102-ROUTE-MARKER"]');
  await route.click();
  await route.focus();
  await route.press("Enter");
  if (await routeExercise.count()) throw new Error(`Locked Route Marker launched at ${viewportLabel}`);
  await petal.click();
  await firstSignal.waitFor();
  await assertSceneVisibleWithMeadowTerminal(page, viewportLabel);
  await assertTerminalKeyboardContract(page, firstSignal, petal, viewportLabel);
  await petal.press("Enter");
  await firstSignal.waitFor();
  await page.keyboard.press("Escape");
  await firstSignal.waitFor({ state: "detached" });
  await page.waitForFunction((element) => document.activeElement === element, await petal.elementHandle());
}

async function assertTerminalKeyboardContract(page, dialog, trigger, viewportLabel) {
  if (await dialog.getAttribute("role") !== "dialog" || await dialog.getAttribute("aria-modal") !== "true") throw new Error(`Terminal dialog semantics missing at ${viewportLabel}`);
  await page.waitForFunction(() => ["first-terminal-orientation-heading", "terminal-title"].includes(document.activeElement?.id));
  if (!await page.locator(".command-panel").evaluate((element) => element.inert)) throw new Error(`Terminal background is not inert at ${viewportLabel}`);
  if (!await page.locator(".scene-world-content").evaluate((element) => element.inert)) throw new Error(`Terminal world background is not inert at ${viewportLabel}`);
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
    const image = document.querySelector(".scene-art.glass-meadow-art").getBoundingClientRect();
    const terminal = document.querySelector(".terminal-workbench").getBoundingClientRect();
    return { frameWidth: frame.width, frameHeight: frame.height, terminalWidth: terminal.width, terminalHeight: terminal.height, imageHeight: image.height };
  });
  if (geometry.imageHeight <= 0 || geometry.terminalWidth > geometry.frameWidth || geometry.terminalHeight > geometry.frameHeight) throw new Error(`Meadow Terminal escaped the scene frame at ${viewportLabel}: ${JSON.stringify(geometry)}`);
}

async function assertResponsiveMeadow(page, viewportLabel, petalState, routeState) {
  const viewport = page.viewportSize();
  const expectedLayout = viewport.width >= 760 && viewport.height >= 596 ? "canonical" : "narrow";
  await page.locator(`.canonical-game-frame[data-canonical-layout="${expectedLayout}"]`).waitFor();
  await page.locator(".scene-art.glass-meadow-art").waitFor();
  await page.waitForFunction(() => {
    const image = document.querySelector(".scene-art.glass-meadow-art");
    const stage = document.querySelector(".scene-frame");
    return image?.complete && image.naturalWidth > 0 && stage?.getBoundingClientRect().width > 0;
  });
  const metrics = await page.evaluate(() => {
    const image = document.querySelector(".scene-art.glass-meadow-art");
    const stage = document.querySelector(".scene-frame");
    const frame = document.querySelector(".canonical-game-frame");
    const command = document.querySelector(".command-panel");
    const petal = document.querySelector('[data-hotspot-id="primary"]');
    const route = document.querySelector('[data-hotspot-id="route-marker"]');
    const stageRect = stage.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();
    const frameRect = frame.getBoundingClientRect();
    const commandRect = command.getBoundingClientRect();
    const petalRect = petal.getBoundingClientRect();
    const routeRect = route.getBoundingClientRect();
    const requiredControls = Array.from(document.querySelectorAll(".verb, .dialogue-actions .continue-action, .inventory button"))
      .map((control) => control.getBoundingClientRect())
      .filter((rect) => rect.width > 0 && rect.height > 0);
    return {
      imageWidth: imageRect.width, imageHeight: imageRect.height, imageRendering: getComputedStyle(image).imageRendering,
      stageWidth: stageRect.width, stageHeight: stageRect.height, petalWidth: petalRect.width, petalHeight: petalRect.height,
      routeWidth: routeRect.width, routeHeight: routeRect.height, separated: petalRect.right < routeRect.left,
      contained: petalRect.left >= stageRect.left && routeRect.right <= stageRect.right && petalRect.top >= stageRect.top && routeRect.bottom <= stageRect.bottom,
      frameWidth: frameRect.width, viewportWidth: document.documentElement.clientWidth,
      viewportHeight: document.documentElement.clientHeight,
      scrollWidth: document.documentElement.scrollWidth, scrollHeight: document.documentElement.scrollHeight,
      allRequiredInside: requiredControls.every((rect) => rect.left >= 0 && rect.right <= innerWidth && rect.top >= 0 && rect.bottom <= innerHeight),
      targetsAtLeast44: requiredControls.every((rect) => rect.width >= 44 && rect.height >= 44),
      worldAreaShare: (stageRect.width * stageRect.height) / ((stageRect.width * stageRect.height) + (commandRect.width * commandRect.height)),
      alt: image.getAttribute("alt"),
    };
  });
  if (Math.abs(metrics.stageWidth / metrics.stageHeight - 16 / 9) > 0.01 || Math.abs(metrics.imageWidth - metrics.stageWidth) > 1 || Math.abs(metrics.imageHeight - metrics.stageHeight) > 1) throw new Error(`Meadow world is not an undistorted fluid 16:9 stage at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  if (metrics.viewportWidth >= 1280 && metrics.viewportHeight >= 800) {
    if (metrics.scrollHeight > metrics.viewportHeight + 1 || metrics.scrollWidth > metrics.viewportWidth + 1 || !metrics.allRequiredInside || !metrics.targetsAtLeast44 || metrics.worldAreaShare < 0.7) throw new Error(`Meadow frame failed desktop full-shell containment at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  } else if (metrics.frameWidth < metrics.viewportWidth - 48 || metrics.scrollWidth > metrics.viewportWidth + 1 || !metrics.targetsAtLeast44) {
    throw new Error(`Meadow frame failed narrow horizontal-reflow contract at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  }
  if (metrics.imageRendering !== "auto") throw new Error(`Meadow richness sampling disabled at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  if (!metrics.separated || !metrics.contained || Math.min(metrics.petalWidth, metrics.petalHeight, metrics.routeWidth, metrics.routeHeight) < 44) throw new Error(`Meadow targets invalid at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  if (!/perfectly flat field/i.test(metrics.alt) || !/first person/i.test(metrics.alt)) throw new Error(`Meadow alt text incomplete: ${metrics.alt}`);
}

async function assertFractureNurseryGeometry(page, viewportLabel) {
  const metrics = await page.evaluate(() => {
    const image = document.querySelector(".scene-art.glass-meadow-art");
    const nursery = document.querySelector('[data-hotspot-id="fracture-nursery"]');
    const primary = document.querySelector('[data-hotspot-id="primary"]');
    const route = document.querySelector('[data-hotspot-id="route-marker"]');
    if (!image || !nursery || !primary || !route) return null;
    const imageRect = image.getBoundingClientRect();
    const nurseryRect = nursery.getBoundingClientRect();
    const primaryRect = primary.getBoundingClientRect();
    const routeRect = route.getBoundingClientRect();
    const overlapArea = (a, b) => Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left))
      * Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
    const sourceRatio = image.naturalWidth / image.naturalHeight;
    const boxRatio = imageRect.width / imageRect.height;
    const visibleSourceHeight = sourceRatio > boxRatio ? image.naturalHeight : image.naturalWidth / boxRatio;
    const sourceCropTop = (image.naturalHeight - visibleSourceHeight) / 2;
    const authoredTop = image.naturalHeight * 0.52;
    const authoredBottom = image.naturalHeight;
    const visibleTop = Math.max(authoredTop, sourceCropTop);
    const visibleBottom = Math.min(authoredBottom, sourceCropTop + visibleSourceHeight);
    return {
      width: nurseryRect.width,
      height: nurseryRect.height,
      expectedWidth: imageRect.width * 0.24,
      expectedHeight: imageRect.height * 0.48,
      leftDelta: Math.abs(nurseryRect.left - imageRect.left),
      topDelta: Math.abs(nurseryRect.top - (imageRect.top + imageRect.height * 0.52)),
      centerContained: nurseryRect.left + nurseryRect.width / 2 >= imageRect.left
        && nurseryRect.left + nurseryRect.width / 2 <= imageRect.right
        && nurseryRect.top + nurseryRect.height / 2 >= imageRect.top
        && nurseryRect.top + nurseryRect.height / 2 <= imageRect.bottom,
      sourceBandOverlap: Math.max(0, visibleBottom - visibleTop) / (authoredBottom - authoredTop),
      primaryOverlap: overlapArea(nurseryRect, primaryRect),
      routeOverlap: overlapArea(nurseryRect, routeRect),
      state: nursery.dataset.fractureNurseryState,
      label: nursery.getAttribute("aria-label"),
    };
  });
  if (!metrics) throw new Error(`Fracture Nursery is absent at ${viewportLabel}`);
  if (Math.abs(metrics.width - metrics.expectedWidth) > 1
    || Math.abs(metrics.height - metrics.expectedHeight) > 1
    || metrics.leftDelta > 1 || metrics.topDelta > 1
    || metrics.width < 44 || metrics.height < 44
    || !metrics.centerContained || metrics.sourceBandOverlap < 0.85
    || metrics.primaryOverlap > 0 || metrics.routeOverlap > 0
    || metrics.state !== "available" || !/Fracture Nursery coupling, available/i.test(metrics.label)) {
    throw new Error(`Fracture Nursery live mapping failed at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  }
}

async function completeOpening(page) {
  await page.locator('[data-playtest-marker="CREATE_SAVE_FILE"]').waitFor();
  await page.getByRole("button", { name: "Create Slot 01", exact: true }).click();
  await page.getByLabel("Flight-recorder display name", { exact: true }).fill("Playtest Pilot");
  await page.getByRole("button", { name: "Confirm name", exact: true }).click();
  for (let beat = 0; beat < 2; beat += 1) {
    await page.getByRole("button", { name: "Continue flight record", exact: true }).click();
    await page.waitForTimeout(450);
  }
  await page.getByRole("button", { name: "Reach Chapter I", exact: true }).click();
  await page.waitForTimeout(450);
  await page.getByRole("button", { name: "Enter the meadow", exact: true }).click();
  await page.locator('button.hotspot[data-primary-hotspot="true"]:focus').waitFor();
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

async function assertObjectiveLedgerContinuity(page, phase) {
  const dialog=page.locator('[data-terminal-exercise="EX-L0601-OBJECTIVE-LEDGER"]');
  if(await dialog.getAttribute("aria-describedby")!=="objective-ledger-offline-warning objective-ledger-domain-equivalent")throw new Error(`Objective Ledger ${phase} warning/equivalent association missing`);
  await page.locator("#objective-ledger-offline-warning").getByText("not Microsoft exam questions and no score guarantee",{exact:false}).waitFor();
  await page.locator("#objective-ledger-offline-warning").getByText("No service, Azure resource, credential, endpoint",{exact:false}).waitFor();
  await page.locator("#objective-ledger-offline-warning").getByText("No exam text, credential, endpoint, service data, personal note",{exact:false}).waitFor();
  await page.locator("#objective-ledger-domain-equivalent").getByText("Domain 1 contains eight concept/capability objectives",{exact:false}).waitFor();
  await page.locator("#objective-ledger-domain-equivalent").getByText("Domain 2 contains seven implementation objectives",{exact:false}).waitFor();
  await page.locator("#objective-ledger-domain-equivalent").getByText("READY means passing evidence; REMEDIATE means an attempted miss; NOT YET ASSESSED means no valid evidence",{exact:false}).waitFor();
  await page.locator("#objective-ledger-domain-equivalent").getByText("Confidence and domain averages never equal mastery",{exact:false}).waitFor();
  if(await page.locator('[aria-label="Objective evidence ledger"] li').count()!==15)throw new Error(`Objective Ledger ${phase} does not show exactly 15 objective rows`);
}

async function assertRemediationPlannerContinuity(page, phase) {
  const dialog=page.locator('[data-terminal-exercise="EX-L0602-REMEDIATION-PLANNER"]');
  if(await dialog.getAttribute("aria-describedby")!=="remediation-planner-offline-warning remediation-planner-route-equivalent")throw new Error(`Remediation Planner ${phase} warning/equivalent association missing`);
  await page.locator("#remediation-planner-offline-warning").getByText("not Microsoft exam questions, no exam guarantee, no service call, and no external action",{exact:false}).waitFor();
  await page.locator("#remediation-planner-offline-warning").getByText("No exam text, personal notes, credentials, endpoints, payloads, responses",{exact:false}).waitFor();
  await page.locator("#remediation-planner-route-equivalent").getByText("objective ID → failed dimension → evidence pointer → measured priority reason",{exact:false}).waitFor();
  await page.locator("#remediation-planner-route-equivalent").getByText("mapped prerequisite lesson → current official source → retrieval task → guided task → fresh-transfer task",{exact:false}).waitFor();
  await page.locator("#remediation-planner-route-equivalent").getByText("reassessment rule → stop/escalate rule",{exact:false}).waitFor();
  await page.locator("#remediation-planner-route-equivalent").getByText("confidence, repeated identical answers, and planner completion never guarantee an exam result",{exact:false}).waitFor();
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
  await page.getByText("A grounded Terminal stands where the dry phase ridge meets the water. The Crown remains distant and unchanged.", { exact: true }).waitFor();

  const talk = page.getByRole("button", { name: "TALK TO", exact: true });
  await talk.focus();
  await talk.press("Enter");
  await assertOnePressed("TALK TO");
  await page.getByRole("button", { name: "talk to grounded Workload Sort Terminal", exact: true }).click();
  await page.getByText("No reply follows. Water continues through the unchanged basin.", { exact: true }).waitFor();

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
  const expectedLayout = viewportLabel === "320x240" || viewportLabel === "640x480" ? "narrow" : "canonical";
  await page.waitForFunction((layout) => {
    const frame = document.querySelector(".canonical-game-frame");
    return frame?.dataset.canonicalLayout === layout;
  }, expectedLayout);
  await page.waitForFunction(() => document.querySelector(".scene-art")?.complete && document.querySelector(".scene-art")?.naturalWidth > 0);
  const metrics = await page.evaluate(() => {
    const gameFrame = document.querySelector(".canonical-game-frame");
    const crtShell = document.querySelector(".crt-shell");
    const host = document.querySelector(".canonical-game-host");
    const scene = document.querySelector(".scene-frame");
    const command = document.querySelector(".command-panel");
    const image = document.querySelector(".scene-art");
    const hotspot = document.querySelector("button.hotspot");
    if (!gameFrame || !crtShell || !host || !scene || !command || !image || !hotspot) return null;
    const hostRect = host.getBoundingClientRect();
    const shellRect = crtShell.getBoundingClientRect();
    const gameRect = gameFrame.getBoundingClientRect();
    const sceneRect = scene.getBoundingClientRect();
    const commandRect = command.getBoundingClientRect();
    const hotspotRect = hotspot.getBoundingClientRect();
    const renderedControls = Array.from(command.querySelectorAll("button"))
      .map((button) => ({ button, rect: button.getBoundingClientRect() }))
      .filter(({ rect }) => rect.width > 0 && rect.height > 0);
    const returnAction = command.querySelector('[aria-label="Return to Chapter I, Glass Meadow"]');
    const returnRect = returnAction?.getBoundingClientRect();
    return {
      layout: gameFrame.dataset.canonicalLayout,
      scale: Number(gameFrame.dataset.canonicalScale),
      logicalWidth: gameFrame.offsetWidth,
      logicalHeight: gameFrame.offsetHeight,
      logicalWorldHeight: scene.offsetHeight,
      logicalInterfaceHeight: command.offsetHeight,
      renderedWidth: gameRect.width,
      renderedHeight: gameRect.height,
      hostWidth: hostRect.width,
      shellWidth: shellRect.width,
      worldRatio: sceneRect.width / sceneRect.height,
      commandFollowsWorld: commandRect.top >= sceneRect.bottom - 1,
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
      viewportWidth: document.documentElement.clientWidth,
      viewportHeight: document.documentElement.clientHeight,
      allRequiredInside: renderedControls.every(({ rect }) => rect.left >= 0 && rect.right <= innerWidth && rect.top >= 0 && rect.bottom <= innerHeight),
      alt: image.getAttribute("alt"),
      src: image.currentSrc,
      visualState: image.dataset.ab01State,
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight,
      imageRendering: getComputedStyle(image).imageRendering,
      hotspotWidth: hotspotRect.width,
      hotspotHeight: hotspotRect.height,
      hotspotContained: hotspotRect.left >= sceneRect.left && hotspotRect.right <= sceneRect.right && hotspotRect.top >= sceneRect.top && hotspotRect.bottom <= sceneRect.bottom,
      liveButtons: renderedControls.length,
      minControlWidth: Math.min(...renderedControls.map(({ rect }) => rect.width)),
      minControlHeight: Math.min(...renderedControls.map(({ rect }) => rect.height)),
      returnWidth: returnRect?.width ?? 0,
      returnHeight: returnRect?.height ?? 0,
    };
  });

  if (!metrics) throw new Error(`Ruins geometry unavailable at ${viewportLabel}`);
  const narrow = viewportLabel === "320x240" || viewportLabel === "640x480";
  if (metrics.visualState !== "available" || (!metrics.src.includes("drowned-archive-master") && !metrics.src.startsWith("data:image/png;base64,"))) throw new Error(`Wrong Drowned Archive production asset at ${viewportLabel}: ${metrics.src}`);
  if (!/Photorealistic flooded Builder phase-processing basin/i.test(metrics.alt) || !/Tidal Lens/i.test(metrics.alt) || !/grounded local coupling/i.test(metrics.alt)) throw new Error(`Drowned Archive alt text incomplete: ${metrics.alt}`);
  if (metrics.layout !== (narrow ? "narrow" : "canonical")) throw new Error(`Wrong frame layout at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  if (Math.abs(metrics.worldRatio - 16 / 9) > 0.01 || !metrics.commandFollowsWorld) throw new Error(`Responsive world/interface bands failed at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  if (metrics.viewportWidth >= 1280 && metrics.viewportHeight >= 800) {
    if (metrics.shellWidth < metrics.hostWidth * 0.65 || metrics.scrollWidth > metrics.viewportWidth + 1 || metrics.scrollHeight > metrics.viewportHeight + 1 || !metrics.allRequiredInside) throw new Error(`Frame failed desktop full-shell containment at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  } else if (metrics.hostWidth - metrics.shellWidth > 40 || metrics.scrollWidth > metrics.viewportWidth + 1) {
    throw new Error(`Frame failed available-width or horizontal-reflow contract at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  }
  if (metrics.naturalWidth !== 1672 || metrics.naturalHeight !== 941) throw new Error(`Unexpected Drowned Archive asset dimensions at ${viewportLabel}: ${metrics.naturalWidth}x${metrics.naturalHeight}`);
  if (metrics.imageRendering !== "auto") throw new Error(`Drowned Archive photoreal sampling disabled at ${viewportLabel}`);
  if (metrics.hotspotWidth < 44 || metrics.hotspotHeight < 44) throw new Error(`Ruins target below 44px at ${viewportLabel}`);
  if (!metrics.hotspotContained || metrics.liveButtons < (narrow ? 4 : 6)) throw new Error(`AB-01 DOM interaction contract failed at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  if (metrics.minControlWidth < 44 || metrics.minControlHeight < 44) throw new Error(`Adventure control target below 44px at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  if (metrics.returnWidth < 44 || metrics.returnHeight < 44) throw new Error(`Safe-return control target below 44px at ${viewportLabel}: ${JSON.stringify(metrics)}`);
}

async function captureWitnessScene(page, path) {
  await page.getByRole("button", { name: "USE", exact: true }).click();
  const terminal = page.getByRole("button", { name: "use grounded Evidence Terminal", exact: true });
  const automaton = page.getByRole("button", { name: "use fallen assembly", exact: true });
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
  await page.getByRole("button", { name: "look at fallen assembly", exact: true }).click();
  await page.getByText("The fallen assembly's joints and residue remain inert. It is physically separate from the grounded Evidence Terminal.", { exact: true }).waitFor();
  if (await exercise.count()) throw new Error(`Automaton LOOK launched Evidence Packet at ${viewportLabel}`);

  await page.getByRole("button", { name: "TALK TO", exact: true }).click();
  const talkAutomaton = page.getByRole("button", { name: "talk to fallen assembly", exact: true });
  await talkAutomaton.focus();
  await talkAutomaton.press("Enter");
  await page.getByText("No response follows. The separate Evidence Terminal remains available.", { exact: true }).waitFor();
  if (await exercise.count()) throw new Error(`Automaton TALK launched Evidence Packet at ${viewportLabel}`);

  await page.getByRole("button", { name: "USE", exact: true }).click();
  const useAutomaton = page.getByRole("button", { name: "use fallen assembly", exact: true });
  await useAutomaton.click();
  await page.getByText("No coupling or motion follows. The usable surface is the separate grounded Evidence Terminal.", { exact: true }).waitFor();
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
  if (!metrics.src.includes("witness-corridor-master")) throw new Error(`Wrong Witness asset at ${viewportLabel}: ${metrics.src}`);
  if (!/Photorealistic Builder forensic passage/i.test(metrics.alt) || !/integrated evidence coupling on the left/i.test(metrics.alt) || !/collapsed maintenance assembly on the right/i.test(metrics.alt)) {
    throw new Error(`Witness alt text does not distinguish both objects: ${metrics.alt}`);
  }
  if (metrics.naturalWidth !== 1672 || metrics.naturalHeight !== 941) throw new Error(`Unexpected Witness asset dimensions: ${metrics.naturalWidth}x${metrics.naturalHeight}`);
  for (const [name, target] of [["Terminal", metrics.terminal], ["automaton", metrics.automaton]]) {
    if (target.width < 44 || target.height < 44) throw new Error(`${name} target below 44px at ${viewportLabel}`);
    if (!target.centerInside || target.overlapRatio < 0.65) throw new Error(`${name} target misses source-mapped object at ${viewportLabel}: ${JSON.stringify(target)}`);
  }
  if (metrics.terminal.right >= metrics.automaton.left) throw new Error(`Witness targets overlap at ${viewportLabel}`);
}
