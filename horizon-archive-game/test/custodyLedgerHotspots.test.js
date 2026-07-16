import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  CUSTODY_LEDGER_HOTSPOT_MIN_TARGET_CSS_PX,
  CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION,
  createCustodyLedgerHotspotDispatcher,
  custodyLedgerHotspotRegistry,
  describeCustodyLedgerHotspotControls,
  mapCustodyLedgerHotspotPoint,
  resolveCustodyLedgerHotspotGeometry,
} from "../src/CustodyLedgerHotspots.js";
import {
  activateCustodyLedgerObservationAction,
  createCustodyLedgerObservationInterfaceState,
} from "../src/CustodyLedgerObservation.js";
import {
  custodyLedgerObservationIds,
  beginCustodyLedgerSaveEligibility,
  createCustodyLedgerFinalizedObservationFixtures,
} from "../src/custodyLedgerExercise.js";

const near = ["fixed_trace", "later_stewardship", "outlined_gap"];
const far = ["distant_repetition", "closed_boundary"];
const semanticByObservation = Object.fromEntries(
  custodyLedgerHotspotRegistry.map((entry) => [entry.observationId, entry.semanticHotspotId]),
);
let tokenIndex = 0;

function intent(observationId, activationKind = "screen_reader", overrides = {}) {
  const isNear = near.includes(observationId);
  return {
    packetId: "RP-002",
    registryVersion: CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION,
    boardId: isNear ? "SC-03-10" : "SC-03-20",
    semanticHotspotId: semanticByObservation[observationId],
    activationKind,
    eventToken: `event-${++tokenIndex}`,
    evidenceReadable: true,
    cropSafe: true,
    ...overrides,
  };
}

function permutations(values) {
  if (values.length <= 1) return [values];
  return values.flatMap((value, index) => permutations(values.filter((_, i) => i !== index))
    .map((rest) => [value, ...rest]));
}

test("registry fixes five semantic IDs to exact canonical board and stage ownership", () => {
  assert.equal(custodyLedgerHotspotRegistry.length, 5);
  assert.equal(new Set(custodyLedgerHotspotRegistry.map((entry) => entry.semanticHotspotId)).size, 5);
  assert.deepEqual(custodyLedgerHotspotRegistry.map((entry) => entry.observationId), custodyLedgerObservationIds);
  for (const entry of custodyLedgerHotspotRegistry) {
    assert.equal(entry.packetId, "RP-002");
    assert.equal(entry.registryVersion, CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION);
    assert.equal(entry.minTargetCssPx, 44);
    assert.ok(entry.actionLabel.length > 0);
    assert.equal(entry.accessibleName, entry.actionLabel);
    assert.ok(entry.sceneDescription.length > 0);
    assert.equal(entry.boardId, near.includes(entry.observationId) ? "SC-03-10" : "SC-03-20");
    assert.equal(entry.stage, near.includes(entry.observationId) ? "near_observations" : "far_observations");
  }
});

test("normalized geometry maps responsive CSS coordinates without persisting viewport data", () => {
  assert.deepEqual(mapCustodyLedgerHotspotPoint({
    clientX: 300,
    clientY: 250,
    frameRect: { left: 100, top: 50, width: 800, height: 400 },
    crop: { x: 0.1, y: 0.2, width: 0.8, height: 0.6 },
  }), { x: 0.30000000000000004, y: 0.5 });
  assert.equal(mapCustodyLedgerHotspotPoint({
    clientX: 50,
    clientY: 50,
    frameRect: { left: 100, top: 50, width: 800, height: 400 },
  }), null);
  assert.equal(mapCustodyLedgerHotspotPoint({ clientX: 1, clientY: 1, frameRect: { width: 0, height: 2 } }), null);
});

test("geometry resolves exactly one candidate and never uses z-order to break ambiguity", () => {
  const unique = resolveCustodyLedgerHotspotGeometry({
    boardId: "SC-03-10",
    stage: "near_observations",
    point: { x: 0.2, y: 0.4 },
  });
  assert.equal(unique.status, "unique");
  assert.equal(unique.entry.observationId, "fixed_trace");

  const ambiguous = resolveCustodyLedgerHotspotGeometry({
    boardId: "SC-03-10",
    stage: "near_observations",
    candidateSemanticIds: [semanticByObservation.fixed_trace, semanticByObservation.later_stewardship],
  });
  assert.equal(ambiguous.status, "ambiguous");
  assert.equal(Object.hasOwn(ambiguous, "topmost"), false);
  assert.equal(resolveCustodyLedgerHotspotGeometry({
    boardId: "SC-03-10",
    stage: "near_observations",
    point: { x: 0.5, y: 0.05 },
  }).status, "zero");
});

test("all six near and both far orders dispatch the same sanitized five-fact result", () => {
  for (const nearOrder of permutations(near)) {
    for (const farOrder of permutations(far)) {
      const dispatcher = createCustodyLedgerHotspotDispatcher();
      for (const id of nearOrder) assert.equal(dispatcher.dispatch(intent(id)).status, "recorded");
      assert.equal(dispatcher.getState().progress.near, 3);
      assert.equal(dispatcher.getState().phase, "far_observations");
      for (const id of farOrder) assert.equal(dispatcher.dispatch(intent(id)).status, "recorded");
      assert.equal(dispatcher.getState().observationComplete, true);
      assert.deepEqual(new Set(dispatcher.getState().finalizedObservationIds), new Set(custodyLedgerObservationIds));
    }
  }
});

test("pointer, touch, Enter, Space, switch, speech, and screen-reader paths are evidence-equivalent", () => {
  const kinds = ["pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader"];
  const evidence = kinds.map((kind) => {
    const dispatcher = createCustodyLedgerHotspotDispatcher();
    const direct = !["pointer", "touch"].includes(kind);
    const result = dispatcher.dispatch(intent("fixed_trace", kind, direct ? {} : {
      candidateSemanticIds: [semanticByObservation.fixed_trace],
    }));
    assert.equal(result.status, "recorded");
    assert.equal(result.observationId, "fixed_trace");
    return JSON.stringify(result.state.observationEvidence);
  });
  assert.equal(new Set(evidence).size, 1);
});

test("one event token is a one-hit latch across click, bubble, double, and repeated output", () => {
  const dispatcher = createCustodyLedgerHotspotDispatcher();
  const shared = intent("fixed_trace", "keyboard_enter", { eventToken: "one-hit-event" });
  const first = dispatcher.dispatch(shared);
  const bytes = JSON.stringify(first.state.observationEvidence);
  for (const activationKind of ["pointer", "touch", "screen_reader", "switch"]) {
    const duplicate = dispatcher.dispatch({
      ...shared,
      activationKind,
      candidateSemanticIds: [semanticByObservation.fixed_trace],
    });
    assert.equal(duplicate.status, "duplicate_suppressed");
    assert.equal(JSON.stringify(duplicate.state.observationEvidence), bytes);
  }
  assert.equal(dispatcher.getState().progress.near, 1);
});

test("zero candidates do nothing while overlap, crop, occlusion, and motion fail closed", () => {
  const dispatcher = createCustodyLedgerHotspotDispatcher();
  const blankBytes = JSON.stringify(dispatcher.getState().observationEvidence);
  const zero = dispatcher.dispatch(intent("fixed_trace", "pointer", { candidateSemanticIds: [] }));
  assert.equal(zero.status, "no_candidate");
  assert.equal(zero.state.activeGroup, "near_observations");
  assert.equal(JSON.stringify(zero.state.observationEvidence), blankBytes);

  const unsafeIntents = [
    intent("fixed_trace", "pointer", { candidateSemanticIds: [semanticByObservation.fixed_trace, semanticByObservation.later_stewardship] }),
    intent("fixed_trace", "screen_reader", { cropSafe: false }),
    intent("fixed_trace", "pointer", { candidateSemanticIds: [semanticByObservation.fixed_trace], occludedSemanticIds: [semanticByObservation.fixed_trace] }),
    intent("fixed_trace", "pointer", { candidateSemanticIds: [semanticByObservation.fixed_trace], movingSemanticIds: [semanticByObservation.fixed_trace] }),
  ];
  for (const unsafe of unsafeIntents) {
    const result = dispatcher.dispatch(unsafe);
    assert.equal(result.status, "unavailable");
    assert.equal(result.state.activeGroup, "observation_unavailable");
    assert.equal(JSON.stringify(result.state.observationEvidence), blankBytes);
    assert.equal(result.state.nextFocusIntent.then, "observation:fixed_trace");
  }
});

test("persistent semantic control requires readable evidence and meets the 44 CSS px policy", () => {
  assert.equal(CUSTODY_LEDGER_HOTSPOT_MIN_TARGET_CSS_PX, 44);
  const controls = describeCustodyLedgerHotspotControls(createCustodyLedgerObservationInterfaceState());
  assert.equal(controls.length, 3);
  for (const control of controls) {
    assert.ok(control.minWidthCssPx >= 44);
    assert.ok(control.minHeightCssPx >= 44);
    assert.ok(control.label && control.accessibleName && control.description);
  }
  const dispatcher = createCustodyLedgerHotspotDispatcher();
  assert.equal(dispatcher.dispatch(intent("fixed_trace", "speech", { evidenceReadable: false })).status, "unavailable");
  assert.equal(dispatcher.getState().finalizedObservationIds.length, 0);
});

test("wrong-board, out-of-stage, forged, stale, disabled, and passive dispatch preserve evidence", () => {
  const dispatcher = createCustodyLedgerHotspotDispatcher();
  dispatcher.dispatch(intent("fixed_trace"));
  const evidenceBytes = JSON.stringify(dispatcher.getState().observationEvidence);
  const invalid = [
    intent("later_stewardship", "screen_reader", { boardId: "SC-03-20" }),
    intent("distant_repetition"),
    intent("later_stewardship", "pointer", {
      semanticHotspotId: semanticByObservation.outlined_gap,
      candidateSemanticIds: [semanticByObservation.later_stewardship],
    }),
    intent("later_stewardship", "screen_reader", { registryVersion: "stale" }),
    intent("later_stewardship", "screen_reader", { evidenceReadable: false }),
    intent("later_stewardship", "hover"),
    intent("later_stewardship", "pointer", { candidateSemanticIds: "forged" }),
    intent("later_stewardship", "pointer", { candidateSemanticIds: [semanticByObservation.later_stewardship], occludedSemanticIds: {} }),
  ];
  for (const request of invalid) {
    const result = dispatcher.dispatch(request);
    assert.equal(result.status, "unavailable");
    assert.equal(JSON.stringify(result.state.observationEvidence), evidenceBytes);
    assert.equal(result.state.nextFocusIntent.then, "observation:later_stewardship");
  }
});

test("replay is idempotent and remount discards geometry, token, and private history", () => {
  const first = createCustodyLedgerHotspotDispatcher();
  first.dispatch(intent("fixed_trace"));
  const evidenceBytes = JSON.stringify(first.getState().observationEvidence);
  assert.equal(first.dispatch(intent("fixed_trace")).status, "replayed");
  assert.equal(JSON.stringify(first.getState().observationEvidence), evidenceBytes);

  const remounted = createCustodyLedgerHotspotDispatcher({
    initialState: {
      ...first.getState(),
      eventTokens: ["should-not-survive"],
      pointerPath: [1, 2, 3],
      crop: { private: true },
      privateNotes: "private-geometry-771",
      observationEvidence: [
        ...first.getState().observationEvidence,
        first.getState().observationEvidence[0],
        { observationId: "forged" },
      ],
    },
  });
  const snapshot = JSON.stringify(remounted.snapshot());
  assert.match(snapshot, /fixed_trace/);
  assert.doesNotMatch(snapshot, /eventTokens|pointerPath|private-geometry-771|forged/);
  assert.equal(remounted.getState().activeGroup, "observation_sanitized");
});

test("Tour is view-only and cannot construct campaign observation or comparison intent", () => {
  const dispatcher = createCustodyLedgerHotspotDispatcher({ mode: "demo_tour" });
  assert.deepEqual(dispatcher.getControls(), []);
  const result = dispatcher.dispatch(intent("fixed_trace"));
  assert.equal(result.status, "tour_view_only");
  assert.equal(result.state.phase, "tour_preview");
  assert.equal(Object.hasOwn(result.state, "observationEvidence"), false);
  assert.equal(Object.hasOwn(result, "observationId"), false);
});

test("hotspot evidence cannot cross-credit learning or write the atomic save triplet", () => {
  const external = {
    predecessor: { continuation: "second_moon_route_restored" },
    python: { masteryStatus: "incomplete" },
    rai: { masteryStatus: "incomplete" },
    campaign: { worldClock: 17, cameraClock: 8, cropClock: 4, effectClock: 2 },
    route: "accepted-rp001",
    successor: null,
    externalAction: null,
  };
  const bytes = JSON.stringify(external);
  const dispatcher = createCustodyLedgerHotspotDispatcher();
  for (const id of [...near, ...far]) dispatcher.dispatch(intent(id));
  const state = dispatcher.getState();
  assert.equal(state.observationComplete, true);
  assert.equal(state.campaignCommitEnabled, false);
  assert.equal(state.cityStateDelta, null);
  for (const key of ["mastery", "confidence", "save", "route", "successor", "externalAction", "worldClock", "cameraClock", "cropClock", "effectClock"]) {
    assert.equal(Object.hasOwn(state, key), false, key);
  }
  assert.equal(JSON.stringify(external), bytes);

  const save = beginCustodyLedgerSaveEligibility(null, {
    observationFixtures: createCustodyLedgerFinalizedObservationFixtures(),
  });
  assert.equal(save.phase, "save_eligibility");
  assert.equal(save.saveDependencies.learning.pythonEvidence, null);
  assert.equal(save.saveDependencies.learning.pythonTransferEvidence, null);
  assert.equal(save.saveDependencies.learning.raiEvidence, null);
  assert.equal(save.saveDependencies.learning.raiTransferEvidence, null);
  assert.equal(Object.hasOwn(dispatcher.snapshot(), "save"), false);
});

test("hotspot module remains isolated from App/main, browser storage, routes, and external IO", async () => {
  const app = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");
  const main = await readFile(new URL("../src/main.jsx", import.meta.url), "utf8");
  const source = await readFile(new URL("../src/CustodyLedgerHotspots.js", import.meta.url), "utf8");
  assert.doesNotMatch(app, /CustodyLedgerHotspots|createCustodyLedgerHotspotDispatcher/);
  assert.doesNotMatch(main, /CustodyLedgerHotspots|createCustodyLedgerHotspotDispatcher/);
  assert.doesNotMatch(source, /localStorage|sessionStorage|fetch\(|XMLHttpRequest|WebSocket|indexedDB|window\.|document\./);
});
