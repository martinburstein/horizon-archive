import test from "node:test";
import assert from "node:assert/strict";
import { createOpeningProgress } from "../src/openingFlow.js";
import { FIRST_RUN_CITY_MODE, projectFirstRunCityFrontier } from "../src/firstRunOpeningTransition.js";

test("completed early progress projects one exact cleared-pending City frontier", () => {
  const evidence = { masteryStatus: "mastered", attemptCount: 3 };
  const projected = projectFirstRunCityFrontier({
    opening: createOpeningProgress("playing", "Ada Lovelace", 2),
    sceneIndex: 2,
    completed: ["meadow", "ruins", "automaton"],
    pendingSceneId: "automaton",
    finished: false,
    evidencePacketMastery: evidence,
  });

  assert.equal(FIRST_RUN_CITY_MODE, "city-threshold-staging");
  assert.deepEqual(projected.opening, createOpeningProgress("playing", "Ada Lovelace", 2));
  assert.deepEqual(projected.completed, ["meadow", "ruins", "automaton"]);
  assert.equal(projected.sceneIndex, 2);
  assert.equal(projected.pendingSceneId, null);
  assert.deepEqual(projected.evidencePacketMastery, evidence);
  assert.equal("finished" in projected, false);
});

test("projection fails closed for malformed, noncontiguous, or incomplete campaign progress", () => {
  const opening = createOpeningProgress("playing", "Ada Lovelace", 2);
  assert.equal(projectFirstRunCityFrontier(null), null);
  assert.equal(projectFirstRunCityFrontier({ opening, completed: ["meadow", "automaton"] }), null);
  assert.equal(projectFirstRunCityFrontier({ opening, completed: ["meadow", "ruins"] }), null);
  assert.equal(projectFirstRunCityFrontier({ opening: { ...opening, saveSlot: "forged" }, completed: ["meadow", "ruins", "automaton"] }), null);
});
