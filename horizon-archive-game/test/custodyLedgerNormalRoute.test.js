import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY,
  clearCustodyLedgerNormalRoute,
  createCustodyLedgerNormalRouteController,
  createCustodyLedgerNormalRouteIntent,
  custodyLedgerRouteActions,
  readCustodyLedgerNormalRoute,
  sanitizeCustodyLedgerNormalRouteSave,
  writeCustodyLedgerNormalRoute,
} from "../src/CustodyLedgerNormalRoute.js";

const predecessor = Object.freeze({
  verificationStatus: "verified",
  cityThresholdAnchorRecorded: true,
  civicDistrictRouteAvailable: true,
});

const activationKinds = [
  "pointer",
  "touch",
  "keyboard_enter",
  "keyboard_space",
  "switch",
  "speech",
  "screen_reader",
];

function intent(action, activationKind = "pointer", token = `${action}-${activationKind}-event`) {
  return createCustodyLedgerNormalRouteIntent(action, activationKind, token);
}

function assertNoDeltaOrCredit(state) {
  assert.equal(state.cityStateDelta, null);
  assert.equal(state.worldStateDelta, null);
  assert.deepEqual(state.observationEvidence, []);
  assert.deepEqual(state.learningEvidence, []);
  assert.equal(state.successor, null);
  assert.equal(state.authorityGranted, false);
  assert.equal(state.externalActionEnabled, false);
  assert.equal(state.examCreditGranted, false);
}

function memoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key),
  };
}

test("normal RP-002 entry reaches only SC-03-00 across every accepted modality", () => {
  for (const activationKind of activationKinds) {
    const controller = createCustodyLedgerNormalRouteController({ predecessor });
    assert.deepEqual(controller.getState().availableActions, [custodyLedgerRouteActions.enter]);
    const result = controller.dispatch(intent(custodyLedgerRouteActions.enter, activationKind));
    assert.equal(result.status, "entered");
    assert.equal(result.state.checkpoint, "sc03_arrival");
    assert.equal(result.state.boardId, "SC-03-00");
    assert.equal(result.save.checkpoint, "sc03_arrival");
    assertNoDeltaOrCredit(result.state);
  }
});

test("arrival resumes exactly and returns through the protected route authority", () => {
  const entered = createCustodyLedgerNormalRouteController({ predecessor })
    .dispatch(intent(custodyLedgerRouteActions.enter, "pointer", "rp002-enter-resume-event"));
  const resumed = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: entered.save });
  assert.equal(resumed.getState().boardId, "SC-03-00");
  const returned = resumed.dispatch(intent(
    custodyLedgerRouteActions.returnAccepted,
    "keyboard_space",
    "rp002-return-resume-event",
  ));
  assert.equal(returned.status, "returned");
  assert.equal(returned.state.checkpoint, "city_threshold");
  assert.equal(returned.state.boardId, "SC-02-50");
  assertNoDeltaOrCredit(returned.state);
});

test("duplicate activation is one-hit and wrong or combined intents fail closed", () => {
  const duplicateController = createCustodyLedgerNormalRouteController({ predecessor });
  const repeated = intent(custodyLedgerRouteActions.enter, "pointer", "rp002-duplicate-event");
  assert.equal(duplicateController.dispatch(repeated).status, "entered");
  assert.equal(duplicateController.dispatch(repeated).status, "duplicate_suppressed");

  for (const bad of [
    { ...intent("OPEN RP-003", "pointer", "rp002-wrong-action") },
    { ...intent(custodyLedgerRouteActions.enter, "pointer", "rp002-multihit"), multiHit: true },
    { ...intent(custodyLedgerRouteActions.enter, "pointer", "rp002-combined"), actions: [custodyLedgerRouteActions.enter] },
  ]) {
    const controller = createCustodyLedgerNormalRouteController({ predecessor });
    assert.equal(controller.dispatch(bad).status, "rejected");
    assert.equal(controller.getState().checkpoint, "city_threshold");
    assertNoDeltaOrCredit(controller.getState());
  }
});

test("missing, forged, private, and Demo Tour route state remain unavailable", () => {
  const validSave = createCustodyLedgerNormalRouteController({ predecessor })
    .dispatch(intent(custodyLedgerRouteActions.enter, "pointer", "rp002-valid-save-event")).save;
  for (const options of [
    {},
    { predecessor: { ...predecessor, civicDistrictRouteAvailable: false } },
    { predecessor, restoredSave: { ...validSave, successor: "RP-003" } },
    { predecessor, restoredSave: { ...validSave, privateNotes: "do not persist" } },
  ]) {
    const controller = createCustodyLedgerNormalRouteController(options);
    assert.equal(controller.dispatch(intent(custodyLedgerRouteActions.enter, "pointer", "rp002-rejected-event")).status, "rejected");
    assert.equal(controller.getState().availableActions.length, 0);
    assertNoDeltaOrCredit(controller.getState());
  }
  const tour = createCustodyLedgerNormalRouteController({ predecessor, mode: "demo_tour" });
  assert.equal(tour.dispatch(intent(custodyLedgerRouteActions.enter, "pointer", "rp002-tour-event")).status, "rejected");
  assert.equal(tour.getState().status, "tour_view_only");
  assertNoDeltaOrCredit(tour.getState());
});

test("bounded storage keeps only an exact arrival checkpoint and clears on return", () => {
  const storage = memoryStorage();
  const arrival = createCustodyLedgerNormalRouteController({ predecessor })
    .dispatch(intent(custodyLedgerRouteActions.enter, "pointer", "rp002-storage-event")).save;
  assert.equal(writeCustodyLedgerNormalRoute(storage, arrival, predecessor), true);
  assert.deepEqual(readCustodyLedgerNormalRoute(storage, predecessor), arrival);
  assert.equal(sanitizeCustodyLedgerNormalRouteSave({ ...arrival, sourceContent: "private" }, predecessor), null);
  storage.setItem(CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY, JSON.stringify({ ...arrival, checkpoint: "RP-003" }));
  assert.equal(readCustodyLedgerNormalRoute(storage, predecessor), null);
  clearCustodyLedgerNormalRoute(storage);
  assert.equal(storage.getItem(CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY), null);
});

test("normal app surface exposes one predecessor-gated entry, reversible return, and dedicated registered arrival art", async () => {
  const [app, city, arrival, styles] = await Promise.all([
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/CityThresholdStaging.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/CivicRecordArrival.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/styles.css", import.meta.url), "utf8"),
  ]);
  assert.match(app, /readVerifiedCityThresholdPredecessor/);
  assert.match(app, /mode === "rp002-arrival"/);
  assert.match(city, /custodyLedgerRouteActions\.enter/);
  assert.match(arrival, /data-board="SC-03-00"/);
  assert.match(arrival, /2026-07-16-civic-record-district-arrival\/civic-record-district-arrival-master-v1\.png/);
  assert.match(arrival, /data-production-art="SC-03-00-civic-record-arrival-v1"/);
  assert.doesNotMatch(arrival, /SC-03-00-overview-pending|REGISTERED CONTINUITY HOOK|city-threshold-overview-master/);
  assert.doesNotMatch(styles, /\.civic-record-art-status/);
  assert.match(arrival, /custodyLedgerRouteActions\.returnAccepted/);
  assert.doesNotMatch(arrival, /RP-003|exam credit|learning task/i);
  assert.match(styles, /\.civic-record-arrival[\s\S]*min-height:\s*44px/);
});
