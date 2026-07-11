import test from "node:test";
import assert from "node:assert/strict";
import { getResumeState, sanitizeCompleted, validateAnswer } from "../src/gameLogic.js";

test("accepts flexible Python layout without changing string content", () => {
  assert.equal(validateAnswer("meadow", ` print ( 'SIGNAL FOUND' ) `), true);
  assert.equal(validateAnswer("ruins", `pilot_name="MARTIN"`), true);
  assert.equal(validateAnswer("automaton", `archive_open = True`), true);
});

test("rejects semantically different strings and Boolean spellings", () => {
  assert.equal(validateAnswer("meadow", `print("SIGNAL  FOUND")`), false);
  assert.equal(validateAnswer("ruins", `pilot_name = "Martin"`), false);
  assert.equal(validateAnswer("automaton", `archive_open = true`), false);
});

test("save completion must be a contiguous known prefix", () => {
  assert.deepEqual(sanitizeCompleted(["automaton"]), []);
  assert.deepEqual(sanitizeCompleted(["meadow", "automaton"]), ["meadow"]);
  assert.deepEqual(sanitizeCompleted(["automaton", "ruins", "meadow"]), []);
  assert.deepEqual(sanitizeCompleted(["meadow", "automaton", "ruins"]), ["meadow"]);
  assert.deepEqual(sanitizeCompleted(["meadow", "ruins", "automaton", "forged"]), ["meadow", "ruins", "automaton"]);
});

test("credits unlock only after every required scene", () => {
  assert.equal(getResumeState(["automaton"]).finished, false);
  assert.equal(getResumeState(["meadow", "ruins"]).finished, false);
  assert.equal(getResumeState(["automaton", "ruins", "meadow"]).finished, false);
  assert.equal(getResumeState(["meadow", "ruins", "automaton"]).finished, true);
});

test("an unacknowledged success resumes on its completed scene", () => {
  const middle = getResumeState(["meadow", "ruins"], "ruins");
  assert.equal(middle.sceneIndex, 1);
  assert.equal(middle.pendingSceneId, "ruins");
  assert.equal(middle.finished, false);

  const final = getResumeState(["meadow", "ruins", "automaton"], "automaton");
  assert.equal(final.sceneIndex, 2);
  assert.equal(final.pendingSceneId, "automaton");
  assert.equal(final.finished, false);
});

test("invalid pending acknowledgement metadata is discarded", () => {
  const resumed = getResumeState(["meadow", "ruins"], "meadow");
  assert.equal(resumed.sceneIndex, 2);
  assert.equal(resumed.pendingSceneId, null);
});
