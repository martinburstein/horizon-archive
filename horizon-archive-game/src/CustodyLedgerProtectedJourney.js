import {
  acknowledgeCustodyLedgerRouteState,
  advanceCustodyLedgerRouteSystem,
  createCustodyLedgerRouteDispatcher,
  createCustodyLedgerRouteState,
  custodyLedgerRouteActions,
  custodyLedgerRouteOwners,
} from "./CustodyLedgerRouteState.js";
import {
  CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
  CUSTODY_LEDGER_ROUTE_OBSERVATION_VERSION,
  createCustodyLedgerRouteObservationDispatcher,
  custodyLedgerRouteObservationOwners,
} from "./CustodyLedgerRouteObservationState.js";
import {
  CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION,
  createCustodyLedgerHotspotDispatcher,
  custodyLedgerHotspotRegistry,
} from "./CustodyLedgerHotspots.js";
import { createCustodyLedgerFirstNearDispatchOrchestrator } from "./CustodyLedgerFirstNearDispatch.js";
import { createCustodyLedgerSecondNearDispatchOrchestrator } from "./CustodyLedgerSecondNearDispatch.js";
import { createCustodyLedgerThirdNearCompletionOrchestrator } from "./CustodyLedgerThirdNearCompletion.js";
import {
  custodyLedgerObservationControls,
  describeCustodyLedgerObservationInterface,
} from "./CustodyLedgerObservation.js";
import {
  advanceCustodyLedgerPrerequisite,
  beginCustodyLedgerSaveEligibility,
  commitCustodyLedgerBoundedComparison,
  createCustodyLedgerFinalizedObservationFixtures,
  createCustodyLedgerPersistenceAdapter,
  createCustodyLedgerScaffold,
  custodyLedgerAtomicProgression,
  CUSTODY_LEDGER_SAVE_INTENT,
  custodyLedgerExplanationAnswers,
  custodyLedgerRAIDimensions,
  custodyLedgerRAIExplanationAnswers,
  custodyLedgerRAIPrimaryScenarioIds,
  custodyLedgerRAITransferScenarioIds,
  custodyLedgerTransferReferenceSource,
  deriveCustodyLedgerSaveEligibility,
  dismissCustodyLedgerPrimaryResult,
  dismissCustodyLedgerPythonConclusion,
  prepareCustodyLedgerSave,
  restoreCustodyLedgerBoundedComparison,
  resumeCustodyLedgerPython,
  resumeCustodyLedgerRAI,
  submitCustodyLedgerExplanation,
  submitCustodyLedgerPrimary,
  submitCustodyLedgerRAIExplanation,
  submitCustodyLedgerRAIPrimaryScenario,
  submitCustodyLedgerRAITransferScenario,
  submitCustodyLedgerTransfer,
} from "./custodyLedgerExercise.js";

export const CUSTODY_LEDGER_PROTECTED_JOURNEY_VERSION = "rp002.protected-journey.v1";

export const custodyLedgerProtectedJourneyActions = Object.freeze({
  compareScale: custodyLedgerObservationControls.compareScale.label,
  openLocalComparison: custodyLedgerObservationControls.openLocalComparison.label,
  saveBoundedComparison: CUSTODY_LEDGER_SAVE_INTENT,
});

export const custodyLedgerProtectedJourneyPresentation = Object.freeze({
  representativeViewport: Object.freeze({ width: 1920, height: 1080 }),
  fullShell: Object.freeze({
    fitWithinDynamicViewport: true,
    outerHorizontalScroll: false,
    outerVerticalScroll: false,
    currentActionsVisible: true,
    worldAndActiveGroupVisibleTogether: true,
    optionalCrtConsumesFitBudget: false,
  }),
  reflow: Object.freeze({
    narrowNaturalDocumentColumn: true,
    textZoomPercent: 200,
    verticalScrollAllowed: true,
    horizontalPageEscape: false,
    semanticOrderPreserved: true,
  }),
  accessibility: Object.freeze({
    minTargetCssPx: 44,
    meaningUsesColorAlone: false,
    forcedColorBoundaries: true,
    reducedMotionDirectReplacement: true,
    modalities: Object.freeze([
      "pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader",
    ]),
  }),
  referenceSmokeMaxSeconds: 300,
});

const nearIds = Object.freeze(["fixed_trace", "later_stewardship", "outlined_gap"]);
const farIds = Object.freeze(["distant_repetition", "closed_boundary"]);
const semanticByObservation = Object.freeze(Object.fromEntries(
  custodyLedgerHotspotRegistry.map((entry) => [entry.observationId, entry.semanticHotspotId]),
));

function assertExactSet(order, expected, label) {
  if (!Array.isArray(order)
    || order.length !== expected.length
    || new Set(order).size !== expected.length
    || expected.some((id) => !order.includes(id))) {
    throw new TypeError(`${label} must contain each approved observation exactly once.`);
  }
}

function routeIntent(action, eventToken) {
  return {
    packetId: "RP-002",
    version: "rp002.route.v1",
    mode: action === custodyLedgerRouteActions.returnAccepted ? "protected" : "campaign",
    action,
    owner: custodyLedgerRouteOwners.pilot,
    activationKind: "screen_reader",
    eventToken,
  };
}

function hotspotIntent(observationId, boardId, eventToken) {
  return {
    packetId: "RP-002",
    mode: "campaign",
    owner: custodyLedgerRouteOwners.pilot,
    registryVersion: CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION,
    boardId,
    semanticHotspotId: semanticByObservation[observationId],
    activationKind: "screen_reader",
    eventToken,
    evidenceReadable: true,
    cropSafe: true,
    candidateSemanticIds: [semanticByObservation[observationId]],
  };
}

function assertStatus(result, status, label) {
  if (result?.status !== status) throw new Error(`${label} did not reach ${status}.`);
  return result;
}

function runRouteAndNearSurvey(fixture) {
  const route = createCustodyLedgerRouteDispatcher({
    predecessor: fixture.routePredecessor,
    continuation: fixture.continuation,
  });
  assertStatus(route.dispatch(routeIntent(
    custodyLedgerRouteActions.enter,
    "journey-route-enter",
  )), "requested", "Protected route entry");
  route.advanceSystem({ predecessor: fixture.routePredecessor });
  route.acknowledge(custodyLedgerRouteActions.continueProtected);

  const routeObservation = createCustodyLedgerRouteObservationDispatcher(route.getState());
  assertStatus(routeObservation.dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_ROUTE_OBSERVATION_VERSION,
    mode: "protected",
    action: CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
    owner: custodyLedgerRouteObservationOwners.pilot,
    activationKind: "screen_reader",
    eventToken: "journey-near-view",
  }), "requested", "Near-detail request");
  const boundary = routeObservation.registerView({
    status: "registered",
    sourceBoard: "SC-03-00",
    targetBoard: "SC-03-10",
    worldChanged: false,
    replayRequested: false,
  });

  const first = createCustodyLedgerFirstNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState: route.getState(),
  });
  assertStatus(first.dispatch(hotspotIntent(fixture.nearOrder[0], "SC-03-10", "journey-near-first")), "recorded", "First near observation");
  const firstNearState = first.returnToEvidence().state;

  const second = createCustodyLedgerSecondNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState: route.getState(),
    firstNearState,
  });
  assertStatus(second.dispatch(hotspotIntent(fixture.nearOrder[1], "SC-03-10", "journey-near-second")), "recorded", "Second near observation");
  const secondNearState = second.returnToEvidence().state;

  const third = createCustodyLedgerThirdNearCompletionOrchestrator({
    routeObservationState: boundary,
    routeState: route.getState(),
    firstNearState,
    secondNearState,
  });
  assertStatus(third.dispatch(hotspotIntent(fixture.nearOrder[2], "SC-03-10", "journey-near-third")), "recorded", "Third near observation");
  const compareControl = third.getCompareScaleControl();
  if (fixture.compareScaleAction !== custodyLedgerProtectedJourneyActions.compareScale
    || compareControl?.label !== custodyLedgerProtectedJourneyActions.compareScale) {
    throw new Error("Explicit COMPARE SCALE intent is required before the far view.");
  }
  return { route, observationState: third.snapshot().state.observationState };
}

function runFarSurvey(initialState, fixture) {
  const dispatcher = createCustodyLedgerHotspotDispatcher({ initialState });
  for (const [index, observationId] of fixture.farOrder.entries()) {
    assertStatus(dispatcher.dispatch(hotspotIntent(
      observationId,
      "SC-03-20",
      `journey-far-${index + 1}`,
    )), "recorded", `Far observation ${index + 1}`);
  }
  const observationState = dispatcher.snapshot().state;
  const comparisonControl = describeCustodyLedgerObservationInterface(observationState).control;
  if (fixture.openLocalComparisonAction !== custodyLedgerProtectedJourneyActions.openLocalComparison
    || comparisonControl?.label !== custodyLedgerProtectedJourneyActions.openLocalComparison) {
    throw new Error("Explicit OPEN LOCAL COMPARISON intent is required after all five observations.");
  }
  return observationState;
}

function runLearning(fixture) {
  let state = advanceCustodyLedgerPrerequisite(
    createCustodyLedgerScaffold(fixture.learningPredecessor),
    fixture.prerequisiteEvidence,
  );
  state = submitCustodyLedgerPrimary(state, fixture.pythonPrimarySource);
  if (state.phase !== "python_primary_result") throw new Error("PY-009 primary did not pass through the real evaluator.");
  const primaryResume = resumeCustodyLedgerPython(state);
  state = dismissCustodyLedgerPrimaryResult(state);
  state = submitCustodyLedgerTransfer(state, fixture.pythonTransferSource);
  if (state.phase !== "python_explanation") throw new Error("PY-009 transfer did not pass through the real evaluator.");
  state = submitCustodyLedgerExplanation(state, fixture.pythonExplanationAnswers);
  if (state.phase !== "python_complete") throw new Error("PY-009 explanation did not pass through the real evaluator.");
  state = dismissCustodyLedgerPythonConclusion(state);

  for (const scenarioId of custodyLedgerRAIPrimaryScenarioIds) {
    state = submitCustodyLedgerRAIPrimaryScenario(state, scenarioId, fixture.raiPrimaryAnswers[scenarioId]);
  }
  if (state.phase !== "rai_transfer") throw new Error("Responsible-AI primary did not pass through the real evaluator.");
  for (const scenarioId of custodyLedgerRAITransferScenarioIds) {
    state = submitCustodyLedgerRAITransferScenario(state, scenarioId, fixture.raiTransferAnswers[scenarioId]);
  }
  if (state.phase !== "rai_explanation") throw new Error("Responsible-AI transfer did not pass through the real evaluator.");
  state = submitCustodyLedgerRAIExplanation(state, fixture.raiExplanationAnswers);
  if (state.phase !== "rai_complete") throw new Error("Responsible-AI explanation did not pass through the real evaluator.");
  const raiResume = resumeCustodyLedgerRAI(state);
  return { state, primaryResume, raiResume };
}

function exactTourProbe(fixture, learningState) {
  const tourRoute = createCustodyLedgerRouteState({ mode: "demo_tour" });
  const tourObservation = createCustodyLedgerHotspotDispatcher({ mode: "demo_tour" });
  const tourDispatch = tourObservation.dispatch(hotspotIntent("fixed_trace", "SC-03-10", "journey-tour-probe"));
  const adapter = createCustodyLedgerPersistenceAdapter(custodyLedgerAtomicProgression);
  const preview = beginCustodyLedgerSaveEligibility(
    learningState,
    {
      predecessorValue: fixture.learningPredecessor,
      prerequisiteEvidence: fixture.prerequisiteEvidence,
      observationFixtures: createCustodyLedgerFinalizedObservationFixtures(),
    },
    { mode: "demo_tour", tour: fixture.tour },
  );
  return {
    routePhase: tourRoute.phase,
    dispatchStatus: tourDispatch.status,
    savePhase: preview.phase,
    adapterValue: adapter.read(),
  };
}

/**
 * Executes the complete protected RP-002 reference journey without importing it into the live route.
 * Repository fixtures enter only through the real route, observation, learning, save, and restore authorities.
 */
export function runCustodyLedgerProtectedJourneySmoke(fixture) {
  assertExactSet(fixture?.nearOrder, nearIds, "nearOrder");
  assertExactSet(fixture?.farOrder, farIds, "farOrder");
  const acceptedBytes = JSON.stringify(fixture.acceptedCampaign);
  const tourBytes = JSON.stringify(fixture.tour);
  const timeline = [];

  const survey = runRouteAndNearSurvey(fixture);
  timeline.push("P0 ARRIVE", "P1 SURVEY:NEAR", "P1 SURVEY:COMPARE SCALE");
  const observationState = runFarSurvey(survey.observationState, fixture);
  timeline.push("P1 SURVEY:FAR", "P1 SURVEY:OPEN LOCAL COMPARISON");

  const learning = runLearning(fixture);
  timeline.push("P2 INTERPRET:PY-009", "P2 INTERPRET:RP002-RAI-01");
  const dependencies = {
    predecessorValue: fixture.learningPredecessor,
    prerequisiteEvidence: fixture.prerequisiteEvidence,
    observationState,
  };
  const adapter = createCustodyLedgerPersistenceAdapter();
  const review = deriveCustodyLedgerSaveEligibility(
    beginCustodyLedgerSaveEligibility(learning.state, dependencies),
    adapter,
  );
  if (review.phase !== "bounded_review") throw new Error("The strict independent save conjunction was not satisfied.");
  const confirmation = prepareCustodyLedgerSave(review);
  const saved = commitCustodyLedgerBoundedComparison(
    confirmation,
    adapter,
    fixture.saveAction,
  );
  if (saved.phase !== "comparison_complete") throw new Error("The exact atomic save intent did not commit.");
  timeline.push("P2 INTERPRET + SAVE:BOUNDED REVIEW", "P2 INTERPRET + SAVE:SC-03-40");
  const restored = restoreCustodyLedgerBoundedComparison(
    adapter,
    learning.state,
    dependencies,
  );
  if (restored.phase !== "verified_restore") throw new Error("The bounded comparison did not restore to SC-03-50.");

  assertStatus(survey.route.dispatch(routeIntent(
    custodyLedgerRouteActions.returnAccepted,
    "journey-route-return",
  )), "requested", "Safe threshold return");
  survey.route.advanceSystem({ reconstructionValid: true });
  survey.route.acknowledge(custodyLedgerRouteActions.continueAccepted, fixture.routePredecessor);
  timeline.push("P3 VERIFY:SC-03-50", "P3 RETURN:RP-001");

  const tourProbe = exactTourProbe(fixture, learning.state);
  if (JSON.stringify(fixture.acceptedCampaign) !== acceptedBytes || JSON.stringify(fixture.tour) !== tourBytes) {
    throw new Error("Accepted campaign or Tour input changed during the protected journey.");
  }

  return Object.freeze({
    version: CUSTODY_LEDGER_PROTECTED_JOURNEY_VERSION,
    protected: true,
    routable: false,
    offlineOnly: true,
    browserStorageUsed: false,
    externalActionEnabled: false,
    authorityGranted: false,
    examCreditGranted: false,
    examGuarantee: false,
    continuation: fixture.continuation,
    cityStateDelta: null,
    identityMaterialClosed: true,
    successor: null,
    timeline: Object.freeze(timeline),
    observationIds: Object.freeze([...observationState.finalizedObservationIds]),
    learning: Object.freeze({
      pythonPrimaryPhaseOnResume: learning.primaryResume.phase,
      finalPhaseOnResume: learning.raiResume.phase,
      pythonPrimaryComplete: learning.state.pythonEvidence?.masteryStatus === "primary_complete",
      pythonTransferComplete: learning.state.pythonTransferEvidence?.masteryStatus === "transfer_complete",
      pythonExplanationComplete: learning.state.pythonExplanationEvidence?.masteryStatus === "explanation_complete",
      raiPrimaryComplete: learning.state.raiEvidence?.masteryStatus === "primary_complete",
      raiTransferComplete: learning.state.raiTransferEvidence?.masteryStatus === "transfer_complete",
      raiExplanationComplete: learning.state.raiExplanationEvidence?.masteryStatus === "explanation_complete",
    }),
    progression: Object.freeze({ ...adapter.read() }),
    restored: Object.freeze({ phase: restored.phase, boardState: restored.boardState, focusIntent: restored.focusIntent }),
    returnedRoute: Object.freeze({
      phase: survey.route.getState().phase,
      continuation: survey.route.getState().continuation,
      nextFocusIntent: survey.route.getState().nextFocusIntent,
    }),
    tourProbe: Object.freeze(tourProbe),
    presentation: custodyLedgerProtectedJourneyPresentation,
  });
}

export const custodyLedgerProtectedJourneyReferenceDefaults = Object.freeze({
  pythonTransferSource: custodyLedgerTransferReferenceSource,
  pythonExplanationAnswers: custodyLedgerExplanationAnswers,
  raiExplanationAnswers: custodyLedgerRAIExplanationAnswers,
  raiDimensions: custodyLedgerRAIDimensions,
  saveAction: custodyLedgerProtectedJourneyActions.saveBoundedComparison,
});
