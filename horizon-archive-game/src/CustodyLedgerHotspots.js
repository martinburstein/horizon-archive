import {
  custodyLedgerObservationActions,
  createCustodyLedgerObservationInterfaceState,
  requestCustodyLedgerObservation,
} from "./CustodyLedgerObservation.js";
import {
  CUSTODY_LEDGER_OBSERVATION_ACTION,
  custodyLedgerObservationStages,
  custodyLedgerObservationStatements,
  sanitizeCustodyLedgerObservationState,
} from "./custodyLedgerExercise.js";

export const CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION = "rp002.sc03.hotspots.v1";
export const CUSTODY_LEDGER_HOTSPOT_MIN_TARGET_CSS_PX = 44;

const PACKET_ID = "RP-002";
const FULL_CROP = Object.freeze({ x: 0, y: 0, width: 1, height: 1 });

const registryRows = [
  ["rp002.sc03_10.fixed_trace", "fixed_trace", "SC-03-10", "near_observations", { x: 0.08, y: 0.18, width: 0.24, height: 0.6 }],
  ["rp002.sc03_10.later_stewardship", "later_stewardship", "SC-03-10", "near_observations", { x: 0.38, y: 0.18, width: 0.24, height: 0.6 }],
  ["rp002.sc03_10.outlined_gap", "outlined_gap", "SC-03-10", "near_observations", { x: 0.68, y: 0.18, width: 0.24, height: 0.6 }],
  ["rp002.sc03_20.distant_repetition", "distant_repetition", "SC-03-20", "far_observations", { x: 0.08, y: 0.16, width: 0.38, height: 0.64 }],
  ["rp002.sc03_20.closed_boundary", "closed_boundary", "SC-03-20", "far_observations", { x: 0.54, y: 0.16, width: 0.38, height: 0.64 }],
];

export const custodyLedgerHotspotRegistry = Object.freeze(registryRows.map(([
  semanticHotspotId,
  observationId,
  boardId,
  stage,
  region,
]) => Object.freeze({
  packetId: PACKET_ID,
  registryVersion: CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION,
  semanticHotspotId,
  observationId,
  actionType: CUSTODY_LEDGER_OBSERVATION_ACTION,
  actionLabel: custodyLedgerObservationActions[observationId],
  accessibleName: custodyLedgerObservationActions[observationId],
  sceneDescription: custodyLedgerObservationStatements[observationId].text,
  boardId,
  stage,
  region: Object.freeze(region),
  minTargetCssPx: CUSTODY_LEDGER_HOTSPOT_MIN_TARGET_CSS_PX,
})));

const bySemanticId = new Map(custodyLedgerHotspotRegistry.map((entry) => [entry.semanticHotspotId, entry]));
const ACTIVATION_KINDS = new Set([
  "pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader",
]);
const DIRECT_SEMANTIC_KINDS = new Set([
  "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader",
]);

function finiteUnit(value) {
  return Number.isFinite(value) && value >= 0 && value <= 1;
}

function validCrop(crop) {
  return finiteUnit(crop?.x)
    && finiteUnit(crop?.y)
    && Number.isFinite(crop?.width)
    && Number.isFinite(crop?.height)
    && crop.width > 0
    && crop.height > 0
    && crop.x + crop.width <= 1
    && crop.y + crop.height <= 1;
}

function validPoint(point) {
  return finiteUnit(point?.x) && finiteUnit(point?.y);
}

function pointInRegion(point, region) {
  return point.x >= region.x
    && point.x <= region.x + region.width
    && point.y >= region.y
    && point.y <= region.y + region.height;
}

function unavailableState(state) {
  return requestCustodyLedgerObservation(state, {
    actionType: "invalid_hotspot_dispatch",
    observationId: null,
    boardId: null,
    available: false,
  });
}

export function mapCustodyLedgerHotspotPoint({ clientX, clientY, frameRect, crop = FULL_CROP }) {
  const local = {
    x: (clientX - frameRect?.left) / frameRect?.width,
    y: (clientY - frameRect?.top) / frameRect?.height,
  };
  if (!Number.isFinite(clientX) || !Number.isFinite(clientY)
    || !Number.isFinite(frameRect?.left) || !Number.isFinite(frameRect?.top)
    || !Number.isFinite(frameRect?.width) || !Number.isFinite(frameRect?.height)
    || frameRect.width <= 0 || frameRect.height <= 0 || !validPoint(local) || !validCrop(crop)) return null;
  return Object.freeze({
    x: crop.x + local.x * crop.width,
    y: crop.y + local.y * crop.height,
  });
}

export function resolveCustodyLedgerHotspotGeometry({
  boardId,
  stage,
  point,
  crop = FULL_CROP,
  registryVersion = CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION,
  evidenceReadable = true,
  cropSafe = true,
  occludedSemanticIds = [],
  movingSemanticIds = [],
  candidateSemanticIds,
} = {}) {
  if (registryVersion !== CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION) {
    return Object.freeze({ status: "unsafe", reason: "stale_registry", candidates: Object.freeze([]) });
  }
  if (!evidenceReadable || !cropSafe || !validCrop(crop)) {
    return Object.freeze({ status: "unsafe", reason: "unreadable_evidence", candidates: Object.freeze([]) });
  }

  if ((occludedSemanticIds !== undefined && !Array.isArray(occludedSemanticIds))
    || (movingSemanticIds !== undefined && !Array.isArray(movingSemanticIds))) {
    return Object.freeze({ status: "unsafe", reason: "malformed_effect_registration", candidates: Object.freeze([]) });
  }
  const occluded = new Set(occludedSemanticIds ?? []);
  const moving = new Set(movingSemanticIds ?? []);
  let candidates;
  if (candidateSemanticIds !== undefined) {
    if (!Array.isArray(candidateSemanticIds)) {
      return Object.freeze({ status: "unsafe", reason: "malformed_candidate_registration", candidates: Object.freeze([]) });
    }
    candidates = [...candidateSemanticIds];
  } else {
    if (!validPoint(point)) return Object.freeze({ status: "zero", reason: "outside_geometry", candidates: Object.freeze([]) });
    candidates = custodyLedgerHotspotRegistry
      .filter((entry) => entry.boardId === boardId && entry.stage === stage && pointInRegion(point, entry.region))
      .map((entry) => entry.semanticHotspotId);
  }

  const unique = [...new Set(candidates)];
  if (unique.some((id) => !bySemanticId.has(id))) {
    return Object.freeze({ status: "unsafe", reason: "unknown_registration", candidates: Object.freeze(unique) });
  }
  if (unique.some((id) => occluded.has(id) || moving.has(id))) {
    return Object.freeze({ status: "unsafe", reason: "unsafe_effect_association", candidates: Object.freeze(unique) });
  }
  if (candidates.length !== unique.length || unique.length > 1) {
    return Object.freeze({ status: "ambiguous", reason: "multiple_candidates", candidates: Object.freeze(unique) });
  }
  if (unique.length === 0) return Object.freeze({ status: "zero", reason: "outside_geometry", candidates: Object.freeze([]) });

  const entry = bySemanticId.get(unique[0]);
  if (entry.boardId !== boardId || entry.stage !== stage) {
    return Object.freeze({ status: "unsafe", reason: "wrong_board_or_stage", candidates: Object.freeze(unique) });
  }
  return Object.freeze({ status: "unique", entry, candidates: Object.freeze(unique) });
}

export function describeCustodyLedgerHotspotControls(state, mode = "campaign") {
  if (mode === "demo_tour" || state?.phase === "tour_preview") return Object.freeze([]);
  const safe = sanitizeCustodyLedgerObservationState(state);
  return Object.freeze(custodyLedgerHotspotRegistry
    .filter((entry) => entry.boardId === safe.boardId && entry.stage === safe.phase)
    .map((entry) => Object.freeze({
      semanticHotspotId: entry.semanticHotspotId,
      observationId: entry.observationId,
      label: entry.actionLabel,
      accessibleName: entry.accessibleName,
      description: entry.sceneDescription,
      minWidthCssPx: CUSTODY_LEDGER_HOTSPOT_MIN_TARGET_CSS_PX,
      minHeightCssPx: CUSTODY_LEDGER_HOTSPOT_MIN_TARGET_CSS_PX,
      status: safe.finalizedObservationIds.includes(entry.observationId) ? "replay" : "available",
    })));
}

function validEventToken(value) {
  return typeof value === "string" && /^[A-Za-z0-9._:-]{1,128}$/.test(value);
}

export function createCustodyLedgerHotspotDispatcher({ mode = "campaign", initialState } = {}) {
  let state = createCustodyLedgerObservationInterfaceState(
    mode === "demo_tour" ? { mode } : initialState ? { restoredState: initialState } : {},
  );
  const consumedEventTokens = new Set();

  function fail(reason) {
    state = unavailableState(state);
    return Object.freeze({ status: "unavailable", reason, state });
  }

  function dispatch(intent = {}) {
    if (mode === "demo_tour" || state.phase === "tour_preview") {
      return Object.freeze({ status: "tour_view_only", reason: "campaign_dispatch_disabled", state });
    }
    if (!ACTIVATION_KINDS.has(intent.activationKind) || !validEventToken(intent.eventToken)) {
      return fail("invalid_activation");
    }
    if (consumedEventTokens.has(intent.eventToken)) {
      return Object.freeze({ status: "duplicate_suppressed", reason: "event_token_consumed", state });
    }
    consumedEventTokens.add(intent.eventToken);

    const safe = sanitizeCustodyLedgerObservationState(state);
    const boardId = intent.boardId;
    if (intent.packetId !== PACKET_ID || boardId !== safe.boardId
      || intent.registryVersion !== CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION) {
      return fail("wrong_packet_board_or_registry");
    }
    if (intent.evidenceReadable !== true || intent.cropSafe !== true) return fail("unreadable_evidence");

    let resolved;
    if (DIRECT_SEMANTIC_KINDS.has(intent.activationKind)) {
      resolved = resolveCustodyLedgerHotspotGeometry({
        boardId,
        stage: safe.phase,
        candidateSemanticIds: [intent.semanticHotspotId],
        registryVersion: intent.registryVersion,
        evidenceReadable: intent.evidenceReadable,
        cropSafe: intent.cropSafe,
        occludedSemanticIds: intent.occludedSemanticIds,
        movingSemanticIds: intent.movingSemanticIds,
      });
    } else {
      resolved = resolveCustodyLedgerHotspotGeometry({
        boardId,
        stage: safe.phase,
        point: intent.point,
        crop: intent.crop,
        candidateSemanticIds: intent.candidateSemanticIds,
        registryVersion: intent.registryVersion,
        evidenceReadable: intent.evidenceReadable,
        cropSafe: intent.cropSafe,
        occludedSemanticIds: intent.occludedSemanticIds,
        movingSemanticIds: intent.movingSemanticIds,
      });
    }

    if (resolved.status === "zero") return Object.freeze({ status: "no_candidate", reason: resolved.reason, state });
    if (resolved.status !== "unique") return fail(resolved.reason);
    if (intent.semanticHotspotId && intent.semanticHotspotId !== resolved.entry.semanticHotspotId) {
      return fail("forged_semantic_mapping");
    }

    state = requestCustodyLedgerObservation(safe, {
      actionType: resolved.entry.actionType,
      observationId: resolved.entry.observationId,
      boardId: resolved.entry.boardId,
      available: true,
    });
    return Object.freeze({
      status: state.activeGroup === "observation_revisit" ? "replayed" : "recorded",
      semanticHotspotId: resolved.entry.semanticHotspotId,
      observationId: resolved.entry.observationId,
      state,
    });
  }

  return Object.freeze({
    dispatch,
    getState: () => state,
    getControls: () => describeCustodyLedgerHotspotControls(state, mode),
    getRegistry: () => custodyLedgerHotspotRegistry,
    snapshot: () => Object.freeze({ state: sanitizeCustodyLedgerObservationState(state) }),
  });
}
