import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  activateCustodyLedgerObservationAction,
  createCustodyLedgerObservationInterfaceState,
  CustodyLedgerObservation,
  custodyLedgerObservationActions,
  custodyLedgerObservationInterfaceCopy,
  custodyLedgerObservationInterfaceStyles,
  describeCustodyLedgerObservationInterface,
  requestCustodyLedgerObservation,
  returnToCustodyLedgerObservationEvidence,
} from "../src/CustodyLedgerObservation.js";
import {
  CUSTODY_LEDGER_OBSERVATION_ACTION,
  custodyLedgerObservationIds,
  custodyLedgerObservationOwnershipMessages,
  custodyLedgerObservationStatements,
} from "../src/custodyLedgerExercise.js";

const nearOrders = [
  ["fixed_trace", "later_stewardship", "outlined_gap"],
  ["fixed_trace", "outlined_gap", "later_stewardship"],
  ["later_stewardship", "fixed_trace", "outlined_gap"],
  ["later_stewardship", "outlined_gap", "fixed_trace"],
  ["outlined_gap", "fixed_trace", "later_stewardship"],
  ["outlined_gap", "later_stewardship", "fixed_trace"],
];
const farOrders = [
  ["distant_repetition", "closed_boundary"],
  ["closed_boundary", "distant_repetition"],
];

function render(state, mode = "campaign") {
  return renderToStaticMarkup(React.createElement(CustodyLedgerObservation, {
    ...(state ? { initialState: state } : {}),
    mode,
  }));
}

function afterActions(ids) {
  let state = createCustodyLedgerObservationInterfaceState();
  for (const id of ids) state = activateCustodyLedgerObservationAction(state, id);
  return state;
}

test("blank protected component renders only exact System entry and three near actions", () => {
  const markup = render();
  assert.match(markup, /data-active-group="near_observations"/);
  assert.match(markup, new RegExp(custodyLedgerObservationOwnershipMessages.entry.owner.replaceAll("/", "\\/")));
  assert.match(markup, new RegExp(custodyLedgerObservationOwnershipMessages.entry.text));
  for (const id of ["fixed_trace", "later_stewardship", "outlined_gap"]) {
    assert.match(markup, new RegExp(custodyLedgerObservationActions[id]));
  }
  for (const text of [
    custodyLedgerObservationActions.distant_repetition,
    custodyLedgerObservationActions.closed_boundary,
    "SCENE // SENSOR RECORD",
    "COMPARE SCALE",
    "OPEN LOCAL COMPARISON",
    "CONTINUE TOUR",
  ]) assert.doesNotMatch(markup, new RegExp(text.replaceAll("/", "\\/")));
  assert.equal((markup.match(/data-interface-group=/g) ?? []).length, 1);
});

test("all near and far permutations retain exact evidence while progress and controls follow boundaries", () => {
  for (const near of nearOrders) {
    let state = createCustodyLedgerObservationInterfaceState();
    for (const [index, id] of near.entries()) {
      state = activateCustodyLedgerObservationAction(state, id);
      const markup = renderToStaticMarkup(React.createElement(CustodyLedgerObservation, { initialState: state }));
      // A supplied state remount intentionally sanitizes rather than replaying discovery.
      assert.match(markup, new RegExp(custodyLedgerObservationInterfaceCopy.sanitized));
      assert.equal(state.activeObservation.observationId, id);
      assert.equal(state.activeObservation.text, custodyLedgerObservationStatements[id].text);
      assert.equal(state.progress.near, index + 1);
      assert.equal(state.finalizedObservationIds.length, index + 1);
      assert.equal(new Set(state.finalizedObservationIds).size, index + 1);
    }
    assert.equal(state.phase, "far_observations");
    assert.equal(state.progress.near, 3);

    for (const far of farOrders) {
      let farState = state;
      for (const [index, id] of far.entries()) {
        farState = activateCustodyLedgerObservationAction(farState, id);
        assert.equal(farState.activeObservation.observationId, id);
        assert.equal(farState.progress.far, index + 1);
        assert.equal(farState.activeObservation.text, custodyLedgerObservationStatements[id].text);
      }
      assert.equal(farState.observationComplete, true);
      assert.deepEqual(new Set(farState.finalizedObservationIds), new Set(custodyLedgerObservationIds));
      assert.equal(Object.hasOwn(farState, "mastery"), false);
      assert.equal(farState.campaignCommitEnabled, false);
      assert.equal(farState.cityStateDelta, null);
    }
  }
});

test("statement views expose exact Scene, System progress, and one zero-credit control", () => {
  let state = activateCustodyLedgerObservationAction(createCustodyLedgerObservationInterfaceState(), "outlined_gap");
  let view = describeCustodyLedgerObservationInterface(state);
  assert.deepEqual(view.primary, custodyLedgerObservationStatements.outlined_gap);
  assert.deepEqual(view.status, {
    owner: "SYSTEM // EXPEDITION STATE",
    text: "Near evidence recorded: 1 of 3. The district remains unchanged.",
  });
  assert.deepEqual(view.control, { label: "RETURN TO EVIDENCE", kind: "return" });
  assert.deepEqual(view.actionIds, []);
  assert.deepEqual(state.activeObservation, {
    observationId: "outlined_gap",
    ...custodyLedgerObservationStatements.outlined_gap,
    status: "finalized",
  });
  assert.equal(state.progress.near, 1);

  state = afterActions(["fixed_trace", "later_stewardship", "outlined_gap"]);
  view = describeCustodyLedgerObservationInterface(state);
  assert.equal(state.progress.near, 3);
  assert.equal(state.phase, "far_observations");
  assert.deepEqual(view.control, { label: "COMPARE SCALE", kind: "return" });
  assert.equal(custodyLedgerObservationInterfaceCopy.nearComplete,
    "Near evidence recorded: 3 of 3. Distant comparison is available; no city state changed.");
  state = activateCustodyLedgerObservationAction(state, "distant_repetition");
  view = describeCustodyLedgerObservationInterface(state);
  assert.equal(state.progress.far, 1);
  assert.deepEqual(view.status, {
    owner: "SYSTEM // EXPEDITION STATE",
    text: "Far and closed evidence recorded: 1 of 2. The district remains unchanged.",
  });
  state = activateCustodyLedgerObservationAction(state, "closed_boundary");
  view = describeCustodyLedgerObservationInterface(state);
  assert.equal(state.progress.far, 2);
  assert.deepEqual(view.control, { label: "OPEN LOCAL COMPARISON", kind: "comparison" });
  assert.deepEqual(view.status, {
    owner: "SYSTEM // EXPEDITION STATE",
    text: "Required observations recorded: 5 of 5. Local comparison is available; no access request occurred.",
  });
  assert.equal(custodyLedgerObservationInterfaceCopy.complete,
    "Required observations recorded: 5 of 5. Local comparison is available; no access request occurred.");
});

test("revisits are idempotent and return to the derived first-incomplete boundary", () => {
  const once = afterActions(["fixed_trace"]);
  const evidenceBytes = JSON.stringify(once.observationEvidence);
  const revisited = activateCustodyLedgerObservationAction(once, "fixed_trace");
  assert.equal(revisited.activeGroup, "observation_revisit");
  assert.equal(revisited.activeObservation.status, "already_recorded");
  assert.equal(JSON.stringify(revisited.observationEvidence), evidenceBytes);
  const returned = returnToCustodyLedgerObservationEvidence(revisited);
  assert.equal(returned.activeGroup, "near_observations");
  assert.equal(returned.focusIntent.then, "observation:later_stewardship");
});

test("every unavailable request class is recoverable and strips transient content", () => {
  const base = afterActions(["fixed_trace"]);
  const evidenceBytes = JSON.stringify(base.observationEvidence);
  const badRequests = [
    { actionType: CUSTODY_LEDGER_OBSERVATION_ACTION, observationId: "distant_repetition", boardId: "SC-03-20" },
    { actionType: CUSTODY_LEDGER_OBSERVATION_ACTION, observationId: "unknown", boardId: "SC-03-10" },
    { actionType: "forged_action", observationId: "later_stewardship", boardId: "SC-03-10" },
    { actionType: CUSTODY_LEDGER_OBSERVATION_ACTION, observationId: "later_stewardship", boardId: "SC-03-20" },
    { actionType: CUSTODY_LEDGER_OBSERVATION_ACTION, observationId: "later_stewardship", boardId: "SC-03-10", available: false },
    { actionType: "presentation_hover", observationId: "later_stewardship", boardId: "SC-03-10", privateNotes: "private-771" },
  ];
  for (const request of badRequests) {
    const recovered = requestCustodyLedgerObservation({ ...base, privateNotes: "private-441" }, request);
    assert.equal(recovered.activeGroup, "observation_unavailable");
    assert.equal(recovered.ownerMessage.text, custodyLedgerObservationOwnershipMessages.unavailable.text);
    assert.equal(JSON.stringify(recovered.observationEvidence), evidenceBytes);
    assert.equal(recovered.nextFocusIntent.then, "observation:later_stewardship");
    assert.doesNotMatch(JSON.stringify(recovered), /private-441|private-771|attempt|hint|mastery/);
  }
});

test("remount sanitizes forged, duplicate, premature-far, and private state without replay", () => {
  const canonical = afterActions(["fixed_trace"]);
  const restored = createCustodyLedgerObservationInterfaceState({
    restoredState: {
      ...canonical,
      activeGroup: "observation_statement",
      activeObservation: { text: "forged replay" },
      privateNotes: "private-991",
      observationEvidence: [
        ...canonical.observationEvidence,
        canonical.observationEvidence[0],
        { ...canonical.observationEvidence[0], observationId: "unknown" },
        {
          packetId: "RP-002",
          observationId: "closed_boundary",
          boardId: "SC-03-20",
          finalizationStatus: "finalized",
          provenance: CUSTODY_LEDGER_OBSERVATION_ACTION,
        },
      ],
    },
  });
  assert.equal(restored.activeGroup, "observation_sanitized");
  assert.deepEqual(restored.finalizedObservationIds, ["fixed_trace"]);
  assert.equal(Object.hasOwn(restored, "activeObservation"), false);
  assert.equal(restored.nextFocusIntent.then, "observation:later_stewardship");
  assert.doesNotMatch(JSON.stringify(restored), /private-991|forged replay|closed_boundary|unknown/);
});

test("Tour is one exact no-credit group and cannot own campaign or comparison surfaces", () => {
  const campaign = afterActions(["fixed_trace"]);
  const campaignBytes = JSON.stringify(campaign);
  const preview = createCustodyLedgerObservationInterfaceState({ mode: "demo_tour" });
  const markup = render(null, "demo_tour");
  assert.match(markup, /SYSTEM \/\/ DEMO TOUR/);
  assert.match(markup, /Preview only/);
  assert.match(markup, /CONTINUE TOUR/);
  for (const text of ["SCENE // SENSOR RECORD", "COMPARE SCALE", "OPEN LOCAL COMPARISON", "Near evidence recorded"]) {
    assert.doesNotMatch(markup, new RegExp(text.replaceAll("/", "\\/")));
  }
  assert.equal((markup.match(/data-interface-group=/g) ?? []).length, 1);
  assert.equal(Object.hasOwn(preview, "observationEvidence"), false);
  assert.equal(JSON.stringify(campaign), campaignBytes);
});

test("responsive contract is self-contained, accessible, and isolated from the accepted app", async () => {
  assert.match(custodyLedgerObservationInterfaceStyles, /min-width: 44px/);
  assert.match(custodyLedgerObservationInterfaceStyles, /min-height: 44px/);
  assert.match(custodyLedgerObservationInterfaceStyles, /overflow-wrap: anywhere/);
  assert.match(custodyLedgerObservationInterfaceStyles, /grid-template-columns: 1fr/);
  assert.match(custodyLedgerObservationInterfaceStyles, /prefers-reduced-motion: reduce/);
  assert.match(custodyLedgerObservationInterfaceStyles, /forced-colors: active/);
  assert.doesNotMatch(custodyLedgerObservationInterfaceStyles, /position:\s*(absolute|fixed)|overflow-x|animation-name|(^|[;{\s])transform:/m);

  const appSource = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");
  const mainSource = await readFile(new URL("../src/main.jsx", import.meta.url), "utf8");
  const componentSource = await readFile(new URL("../src/CustodyLedgerObservation.js", import.meta.url), "utf8");
  assert.doesNotMatch(appSource, /CustodyLedgerObservation/);
  assert.doesNotMatch(mainSource, /CustodyLedgerObservation/);
  assert.doesNotMatch(componentSource, /localStorage|sessionStorage|fetch\(|XMLHttpRequest|world|cityResponse|route|successor|accessGranted/);
});

test("protected interface actions add observation evidence only and never learning/save/world authority", () => {
  const external = {
    python: { masteryStatus: "incomplete" },
    rai: { masteryStatus: "incomplete" },
    campaign: { accepted: true },
    world: { clock: 17 },
    route: { current: "accepted-rp001" },
  };
  const bytes = JSON.stringify(external);
  let state = createCustodyLedgerObservationInterfaceState();
  for (const id of custodyLedgerObservationIds) state = activateCustodyLedgerObservationAction(state, id);
  assert.equal(state.observationComplete, true);
  assert.equal(state.campaignCommitEnabled, false);
  assert.equal(state.cityStateDelta, null);
  for (const prohibited of ["mastery", "save", "review", "route", "world", "cityResponse", "authority", "accessGranted", "successor"]) {
    assert.equal(Object.hasOwn(state, prohibited), false, prohibited);
  }
  assert.equal(JSON.stringify(external), bytes);
});
