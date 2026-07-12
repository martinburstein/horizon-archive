import test from "node:test";
import assert from "node:assert/strict";
import { ADVENTURE_VERBS, getVerbPressedState } from "../src/verbSelection.js";

test("exactly one adventure verb reports pressed for every valid selection", () => {
  for (const selected of ADVENTURE_VERBS) {
    const state = getVerbPressedState(selected);
    assert.equal(Object.values(state).filter(Boolean).length, 1);
    assert.equal(state[selected], true);
  }
});
