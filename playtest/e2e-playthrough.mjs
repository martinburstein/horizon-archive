import { chromium } from "../ai900_practice_assessment_logger/node_modules/playwright/index.mjs";
import referenceEvidenceOutput from "../curriculum/lessons/L-05-07/reference_output.json" with { type: "json" };

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

  await page.getByRole("button", { name: "USE", exact: true }).click();
  await assertRuinsTerminalAlignment(page, "desktop");
  await page.getByRole("button", { name: "use grounded Workload Sort Terminal", exact: true }).hover();
  await page.locator(".scene-frame").screenshot({ path: "playtest/drowned-archive-terminal-desktop-qa.png" });
  await activateRuinsTerminal(page, "pointer");
  await page.getByRole("button", { name: "Close Terminal", exact: true }).click();
  await activateRuinsTerminal(page, "keyboard");
  await page.getByRole("button", { name: "Close Terminal", exact: true }).click();

  await page.setViewportSize({ width: 320, height: 900 });
  await assertRuinsTerminalAlignment(page, "320px narrow");
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
  await page.locator("button.hotspot").click();
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
  await page.getByAltText("Registered still image DA-IMG-01 showing the suspended landmark and grounded Terminal", { exact: true }).waitFor();
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
    terminalCloseReopen: true,
    terminalSessionPrivacy: true,
    workloadSortExercise: true,
    ruinsTerminalAsset: true,
    ruinsHotspotDesktop: true,
    ruinsHotspotNarrow: true,
    ruinsHotspotKeyboard: true,
    workloadCloseReopen: true,
    workloadFreshRetry: true,
    workloadCriticalOverride: true,
    workloadSceneReset: true,
    evidencePacketExercise: true,
    evidencePacketProvenance: true,
    evidencePacketFalseVsNull: true,
    evidencePacketCloseReopen: true,
    evidencePacketPrivacy: true,
    evidencePacketNarrow: true,
    masteryEvidence: true,
    persistence: true,
    runtimeErrors: false,
    questions: ["HA-PY-001", "HA-AI901-001", "HA-AI901-002"],
    credits: true,
  }));
} finally {
  await browser.close();
}

function terminalSessionMarker() {
  return "# SESSION_ONLY_SENTINEL";
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

async function assertRuinsTerminalAlignment(page, viewportLabel) {
  const metrics = await page.evaluate(() => {
    const frame = document.querySelector(".scene-frame");
    const image = document.querySelector(".scene-art");
    const hotspot = document.querySelector("button.hotspot");
    if (!frame || !image || !hotspot) return null;

    const frameRect = frame.getBoundingClientRect();
    const hotspotRect = hotspot.getBoundingClientRect();
    const computed = getComputedStyle(image);
    const [xToken = "50%", yToken = "50%"] = computed.objectPosition.split(/\s+/);
    const asFraction = (token) => token.endsWith("%") ? Number.parseFloat(token) / 100 : 0.5;
    const scale = Math.max(frameRect.width / image.naturalWidth, frameRect.height / image.naturalHeight);
    const renderedWidth = image.naturalWidth * scale;
    const renderedHeight = image.naturalHeight * scale;
    const imageLeft = frameRect.left + (frameRect.width - renderedWidth) * asFraction(xToken);
    const imageTop = frameRect.top + (frameRect.height - renderedHeight) * asFraction(yToken);

    // Source bounds come from the selected AB-01 scene sheet, not viewport percentages.
    const expected = {
      left: Math.max(frameRect.left, imageLeft + image.naturalWidth * 0.60 * scale),
      top: Math.max(frameRect.top, imageTop + image.naturalHeight * 0.47 * scale),
      right: Math.min(frameRect.right, imageLeft + image.naturalWidth * 0.73 * scale),
      bottom: Math.min(frameRect.bottom, imageTop + image.naturalHeight * 0.82 * scale),
    };
    const overlapWidth = Math.max(0, Math.min(hotspotRect.right, expected.right) - Math.max(hotspotRect.left, expected.left));
    const overlapHeight = Math.max(0, Math.min(hotspotRect.bottom, expected.bottom) - Math.max(hotspotRect.top, expected.top));
    const hotspotArea = hotspotRect.width * hotspotRect.height;
    const centerX = hotspotRect.left + hotspotRect.width / 2;
    const centerY = hotspotRect.top + hotspotRect.height / 2;

    return {
      alt: image.getAttribute("alt"),
      src: image.currentSrc,
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight,
      objectPosition: computed.objectPosition,
      hotspotWidth: hotspotRect.width,
      hotspotHeight: hotspotRect.height,
      overlapRatio: hotspotArea ? (overlapWidth * overlapHeight) / hotspotArea : 0,
      centerInside: centerX >= expected.left && centerX <= expected.right && centerY >= expected.top && centerY <= expected.bottom,
    };
  });

  if (!metrics) throw new Error(`Ruins geometry unavailable at ${viewportLabel}`);
  if (!metrics.src.includes("drowned-archive-workload-terminal-v1")) throw new Error(`Wrong ruins asset at ${viewportLabel}: ${metrics.src}`);
  if (!/grounded crystal Machine Terminal/i.test(metrics.alt) || !/suspended archive landmark/i.test(metrics.alt)) {
    throw new Error(`Ruins alt text does not distinguish Terminal and landmark: ${metrics.alt}`);
  }
  if (metrics.naturalWidth !== 1672 || metrics.naturalHeight !== 941) throw new Error(`Unexpected ruins asset dimensions: ${metrics.naturalWidth}x${metrics.naturalHeight}`);
  if (metrics.hotspotWidth < 44 || metrics.hotspotHeight < 44) throw new Error(`Ruins target below 44px at ${viewportLabel}`);
  if (!metrics.centerInside || metrics.overlapRatio < 0.65) {
    throw new Error(`Ruins hotspot misses source-mapped node at ${viewportLabel}: ${JSON.stringify(metrics)}`);
  }
}
