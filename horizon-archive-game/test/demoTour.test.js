import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  DEMO_TOUR_CONFIRMATION,
  DEMO_TOUR_STATUS,
  FIRST_SIGNAL_TOUR_RESUME,
  SHIPPED_DEMO_TOUR_SCENE_IDS,
  clearDemoTour,
  createDemoTourState,
  getNextTourSceneId,
  getDemoTourResumeTarget,
  loadDemoTour,
  moveDemoTour,
  sanitizeDemoTourState,
  saveDemoTour,
} from "../src/demoTour.js";

function memoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key),
    snapshot: () => Object.fromEntries(values),
  };
}

test("tour state is minimal, allowlisted, and separate from campaign bytes", () => {
  const campaignBytes = '{"completed":[],"attemptCount":7,"opening":{"characterName":"Pilot"}}';
  const storage = memoryStorage({ campaign: campaignBytes });
  const tour = createDemoTourState({ tourSceneId: "ruins", resumeCampaignSceneId: "meadow", resumeBoundary: "EX-L0101-FIRST-SIGNAL" });

  saveDemoTour(storage, tour);

  assert.equal(storage.getItem("campaign"), campaignBytes);
  assert.deepEqual(loadDemoTour(storage), tour);
  assert.deepEqual(Object.keys(tour), ["mode", "tourSceneId", "resumeCampaignSceneId", "resumeBoundary"]);
  clearDemoTour(storage);
  assert.equal(storage.getItem("campaign"), campaignBytes);
});

test("tour sanitizer rejects forged credit, mastery, attempt, hint, city, identity, and source fields", () => {
  const base = createDemoTourState({ tourSceneId: "ruins", resumeCampaignSceneId: "meadow", resumeBoundary: "practice" });
  for (const [field, value] of Object.entries({
    masteryStatus: "mastered",
    attempts: 1,
    hintLevel: 3,
    completed: true,
    unlocks: ["ending"],
    cityStateDelta: "changed",
    identity: "invented",
    sourceCode: "answer",
    evidence: { passed: true },
  })) {
    assert.equal(sanitizeDemoTourState({ ...base, [field]: value }), null, field);
  }
});

test("tour traversal can move only through the explicit shipped-scene allowlist", () => {
  assert.deepEqual(SHIPPED_DEMO_TOUR_SCENE_IDS, ["meadow", "ruins", "automaton", "city-threshold"]);
  assert.equal(getNextTourSceneId("meadow"), "ruins");
  assert.equal(getNextTourSceneId("city-threshold"), null);
  const state = createDemoTourState({ tourSceneId: "ruins", resumeCampaignSceneId: "meadow", resumeBoundary: "practice" });
  assert.equal(moveDemoTour(state, "automaton").tourSceneId, "automaton");
  assert.deepEqual(moveDemoTour(state, "unshipped-secret"), state);
});

test("reload keeps only the sanitized no-credit cursor", () => {
  const storage = memoryStorage();
  const state = createDemoTourState({ tourSceneId: "automaton", resumeCampaignSceneId: "ruins", resumeBoundary: "EX-L0401-TEXT-ANALYSIS" });
  saveDemoTour(storage, state);
  assert.deepEqual(loadDemoTour(storage), state);
  assert.equal(DEMO_TOUR_STATUS, "DEMO TOUR // PRACTICE SKIPPED // NO CAMPAIGN CREDIT");
  assert.match(DEMO_TOUR_CONFIRMATION, /no attempts, scores, mastery, campaign completion, or city change/i);
});

test("resume reconstructs the same First Signal gate from every later shipped tour scene", () => {
  for (const tourSceneId of ["ruins", "automaton", "city-threshold"]) {
    const state = createDemoTourState({
      tourSceneId,
      resumeCampaignSceneId: "meadow",
      resumeBoundary: "terminal-l0101-independent-run",
    });
    assert.deepEqual(getDemoTourResumeTarget(state), FIRST_SIGNAL_TOUR_RESUME);
  }
  assert.equal(getDemoTourResumeTarget(createDemoTourState({
    tourSceneId: "ruins",
    resumeCampaignSceneId: "meadow",
    resumeBoundary: "unregistered-practice",
  })), null);
});

test("the app exposes the exact skip, confirmation, resume, and keyboard-safe controls", () => {
  const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  const view = readFileSync(new URL("../src/DemoTour.jsx", import.meta.url), "utf8");
  assert.match(app, /TOUR: SKIP PRACTICE/);
  assert.match(app, /Skip practice and continue in Demo Tour without credit/);
  assert.match(view, /ENTER DEMO TOUR/);
  assert.match(view, /KEEP PRACTICING/);
  assert.match(view, /RESUME CAMPAIGN/);
  assert.match(view, /NEXT TOUR SCENE/);
  assert.match(view, /event\.key === "Escape"/);
  assert.match(app, /inert=\{demoTourConfirmation \? true : undefined\}/);
  assert.match(app, /inert=\{terminalOpen \|\| demoTourConfirmation \? true : undefined\}/);
  assert.match(app, /demoTourReturnFocusPendingRef\.current = true;[\s\S]{0,260}setDemoTourConfirmation\(null\)/);
  assert.match(app, /demoTourTriggerRef\.current\?\.focus\(\{ preventScroll: true \}\)/);
  assert.match(app, /getDemoTourResumeTarget\(demoTour\)/);
  assert.match(app, /setTerminalOpen\(true\);[\s\S]{0,220}setMeadowTerminalKind\(tourResumeTarget\.terminalKind\)/);
  assert.match(app, /setVerb\(tourResumeTarget\.verb\)/);
  assert.match(app, /suppressNextCampaignSaveRef\.current/);
  assert.match(app, /city-threshold-overview-640x360\.png/);
  assert.match(app, /id: "city-threshold",[\s\S]{0,240}sources: \{ canonical: cityThresholdOverviewImage, narrow: cityThresholdOverviewNarrowImage \}/);
});
