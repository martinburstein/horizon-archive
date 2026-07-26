import {
  CALIBRATION_MARGIN_PYTHON_CHECKPOINT_VERSION,
  CALIBRATION_MARGIN_PYTHON_SHELL_VERSION,
  sanitizeCalibrationMarginPythonCheckpoint,
} from "./CalibrationMarginPythonCheckpoint.js";
import {
  CALIBRATION_MARGIN_EXTRACTION_CHECKPOINT_VERSION,
  CALIBRATION_MARGIN_EXTRACTION_SHELL_VERSION,
  sanitizeCalibrationMarginExtractionCheckpoint,
} from "./CalibrationMarginExtractionCheckpoint.js";

export const CALIBRATION_MARGIN_REVIEW_SAVE_VERSION =
  "rp003.review-save-controller.v1";
export const CALIBRATION_MARGIN_REVIEW_SAVE_SHELL_VERSION =
  "SS-RP003-REVIEW-SAVE-v1";
export const CALIBRATION_MARGIN_REVIEW_SAVE_RECORD_VERSION =
  "rp003.review-save.v1";
export const CALIBRATION_MARGIN_REVIEW_SAVE_KEY =
  "horizon-archive-rp003-review-save-v1";

export const calibrationMarginReviewSaveActions = Object.freeze({
  review: "REVIEW EXPEDITION EVIDENCE",
  provenance: "REVIEW PROVENANCE",
  save: "SAVE EXPEDITION NOTE",
  returnCivicComparison: "RETURN TO CIVIC COMPARISON",
  returnCityThreshold: "RETURN TO CITY THRESHOLD",
});

export const calibrationMarginReviewSaveModalities = Object.freeze([
  "pointer",
  "touch",
  "keyboard_enter",
  "keyboard_space",
  "switch",
  "speech",
  "screen_reader",
]);

const packetId = "RP-003";
const mappingId = "RP003-A3-CALIBRATION-MARGIN";
const observations = Object.freeze([
  "correspondence",
  "bounded_difference",
  "sealed_unavailable",
]);
const topKeys = Object.freeze([
  "version",
  "packetId",
  "mappingId",
  "checkpoint",
  "continuation",
  "cityStateDelta",
  "successor",
  "note",
  "evidence",
]);
const noteKeys = Object.freeze(["correspondence", "difference", "unavailable"]);
const recordKeys = Object.freeze([
  "packet_id",
  "mapping_id",
  "form",
  "skill_or_objective_id",
  "dimension_correctness",
  "attempt_count",
  "hint_level",
  "confidence",
  "misconception_tags",
  "mastery_status",
]);
const sourceKeys = Object.freeze([
  "observations",
  "pythonCheckpoint",
  "extractionCheckpoint",
  "extractionState",
  "invariants",
]);
const invariantKeys = Object.freeze([
  "worldStateDelta",
  "accessStateDelta",
  "authorityGranted",
  "externalActionEnabled",
  "worldStateChanged",
]);
const intentKeys = Object.freeze([
  "shellVersion",
  "version",
  "packetId",
  "mode",
  "activeGroupId",
  "expectedOwner",
  "allowlistedActionId",
  "activationKind",
  "opaqueFreshEventToken",
]);
const exactNote = Object.freeze({
  correspondence: "bounded_exposed_correspondence_observed",
  difference: "one_bounded_exposed_difference_observed",
  unavailable: "sealed_source_unavailable_and_unread",
});

export const calibrationMarginReviewRows = Object.freeze([
  Object.freeze({
    id: "observations",
    label: "Observations",
    state: "Complete",
    owner: "Expedition observation record",
    limit: "Python or extraction evidence cannot substitute for the three recorded observations.",
  }),
  Object.freeze({
    id: "python",
    label: "PY-010",
    state: "Complete",
    owner: "Finalized Python checkpoint",
    limit: "This checkpoint cannot supply information-extraction credit.",
  }),
  Object.freeze({
    id: "extraction",
    label: "RP003-IE-01",
    state: "Complete",
    owner: "Finalized information-extraction checkpoint",
    limit: "This checkpoint cannot supply Python or observation credit.",
  }),
  Object.freeze({
    id: "provenance",
    label: "Provenance",
    state: "Source-bound",
    owner: "Exposed or supplied course input",
    limit: "Unavailable and sealed input remains unavailable and unread.",
  }),
  Object.freeze({
    id: "no_external_action",
    label: "No external action",
    state: "Complete",
    owner: "Expedition invariant",
    limit: "No city, world, access, authority, service, or successor change occurred.",
  }),
]);

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function exactKeys(value, expected) {
  return value && typeof value === "object" && !Array.isArray(value)
    && Object.keys(value).sort().join("|") === [...expected].sort().join("|");
}

function deepFreeze(value) {
  if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;
  Object.values(value).forEach(deepFreeze);
  return Object.freeze(value);
}

function opaqueToken(value) {
  return typeof value === "string"
    && /^[a-z0-9][a-z0-9:_-]{5,79}$/i.test(value);
}

function privateFree(value) {
  const forbidden = /private|answer|response|feedback|draft|prompt|credential|endpoint|payload|token|focus|diagnostic|tour|sealed(?:content|value)|source(?:text|body)/i;
  const visit = (candidate) => {
    if (Array.isArray(candidate)) return candidate.every(visit);
    if (!candidate || typeof candidate !== "object") return true;
    return Object.entries(candidate).every(([key, child]) => (
      !forbidden.test(key) && visit(child)
    ));
  };
  return visit(value);
}

function noPrivateSourcePayload(value) {
  const serialized = JSON.stringify(value);
  return !/"(?:privateResponse|privateNotes|privateWork|answer|feedback|draft|prompt|credential|endpoint|payload|adapterDiagnostic)"\s*:/i
    .test(serialized);
}

function pythonCheckpointFromEvidence(evidence) {
  return {
    version: CALIBRATION_MARGIN_PYTHON_CHECKPOINT_VERSION,
    shellVersion: CALIBRATION_MARGIN_PYTHON_SHELL_VERSION,
    packetId,
    mappingId,
    checkpoint: "P3",
    continuation: "continuation",
    cityStateDelta: null,
    worldStateDelta: null,
    accessStateDelta: null,
    successor: null,
    evidence,
  };
}

function extractionCheckpointFromEvidence(evidence) {
  return {
    version: CALIBRATION_MARGIN_EXTRACTION_CHECKPOINT_VERSION,
    shellVersion: CALIBRATION_MARGIN_EXTRACTION_SHELL_VERSION,
    packetId,
    mappingId,
    checkpoint: "IE-P3",
    continuation: "continuation",
    cityStateDelta: null,
    worldStateDelta: null,
    accessStateDelta: null,
    successor: null,
    evidence,
  };
}

export function sanitizeCalibrationMarginReviewSave(value) {
  if (!exactKeys(value, topKeys)
    || value.version !== CALIBRATION_MARGIN_REVIEW_SAVE_RECORD_VERSION
    || value.packetId !== packetId
    || value.mappingId !== mappingId
    || value.checkpoint !== "calibration_margin_complete"
    || value.continuation !== "continuation"
    || value.cityStateDelta !== null
    || value.successor !== null
    || !exactKeys(value.note, noteKeys)
    || JSON.stringify(value.note) !== JSON.stringify(exactNote)
    || !Array.isArray(value.evidence)
    || value.evidence.length !== 7
    || !value.evidence.every((record) => exactKeys(record, recordKeys))
    || !privateFree(value)) {
    return null;
  }
  const python = sanitizeCalibrationMarginPythonCheckpoint(
    pythonCheckpointFromEvidence(value.evidence.slice(0, 3)),
  );
  const extraction = sanitizeCalibrationMarginExtractionCheckpoint(
    extractionCheckpointFromEvidence(value.evidence.slice(3)),
  );
  if (!python || !extraction) return null;
  const safe = {
    version: CALIBRATION_MARGIN_REVIEW_SAVE_RECORD_VERSION,
    packetId,
    mappingId,
    checkpoint: "calibration_margin_complete",
    continuation: "continuation",
    cityStateDelta: null,
    successor: null,
    note: clone(exactNote),
    evidence: [...clone(python.evidence), ...clone(extraction.evidence)],
  };
  return deepFreeze(safe);
}

function recoveryForSources(source) {
  if (!exactKeys(source, sourceKeys)
    || !Array.isArray(source.observations)
    || JSON.stringify(source.observations) !== JSON.stringify(observations)) {
    return { group: "observations", phase: "CM-10 SURVEY", target: "first_incomplete_observation" };
  }
  const python = sanitizeCalibrationMarginPythonCheckpoint(source.pythonCheckpoint);
  if (!python || python.checkpoint !== "P3") {
    const checkpoint = python?.checkpoint ?? "P0";
    return checkpoint === "P1"
      ? { group: "python_retrieval", phase: "CM-22 PYTHON RETRIEVAL", target: "heading" }
      : checkpoint === "P2"
        ? { group: "python_transfer", phase: "CM-23 PYTHON TRANSFER", target: "heading" }
        : { group: "python_primary", phase: "CM-20 PYTHON PRIMARY", target: "heading" };
  }
  const extraction = sanitizeCalibrationMarginExtractionCheckpoint(
    source.extractionCheckpoint,
  );
  if (!extraction || extraction.checkpoint !== "IE-P3") {
    const checkpoint = extraction?.checkpoint ?? "IE-P0";
    return checkpoint === "IE-P1"
      ? { group: "ie_retrieval", phase: "CM-33 EXTRACTION RETRIEVAL", target: "heading" }
      : checkpoint === "IE-P2"
        ? { group: "ie_transfer", phase: "CM-34 EXTRACTION TRANSFER", target: "heading" }
        : { group: "ie_primary", phase: "CM-30 EXTRACTION PRIMARY", target: "heading" };
  }
  const state = source.extractionState;
  if (!state
    || state.shellVersion !== CALIBRATION_MARGIN_EXTRACTION_SHELL_VERSION
    || state.packetId !== packetId
    || state.boardState !== "SC-04"
    || state.phase !== "IE-P3"
    || state.activeGroup !== "ie_finalized"
    || state.owner !== "SYSTEM"
    || state.checkpoint !== "IE-P3"
    || JSON.stringify(state.finalizedSkillIds) !== JSON.stringify(["RP003-IE-01"])
    || state.privateWorkCleared !== true
    || state.transientWorkCleared !== true
    || !noPrivateSourcePayload(state)) {
    return { group: "ie_finalized", phase: "IE-P3", target: "heading" };
  }
  if (!exactKeys(source.invariants, invariantKeys)
    || source.invariants.worldStateDelta !== null
    || source.invariants.accessStateDelta !== null
    || source.invariants.authorityGranted !== false
    || source.invariants.externalActionEnabled !== false
    || source.invariants.worldStateChanged !== false
    || state.continuation !== "continuation"
    || state.cityStateDelta !== null
    || state.worldStateDelta !== null
    || state.accessStateDelta !== null
    || state.successor !== null
    || state.authorityGranted !== false
    || state.externalActionEnabled !== false
    || state.worldStateChanged !== false) {
    return { group: "ie_finalized", phase: "IE-P3", target: "heading" };
  }
  return { valid: true, python, extraction };
}

function buildCandidate(source) {
  const checked = recoveryForSources(source);
  if (!checked.valid) return null;
  return sanitizeCalibrationMarginReviewSave({
    version: CALIBRATION_MARGIN_REVIEW_SAVE_RECORD_VERSION,
    packetId,
    mappingId,
    checkpoint: "calibration_margin_complete",
    continuation: "continuation",
    cityStateDelta: null,
    successor: null,
    note: exactNote,
    evidence: [...checked.python.evidence, ...checked.extraction.evidence],
  });
}

function safeStorageFailure(reason, prior, rollbackVerified) {
  return Object.freeze({
    status: "failed",
    reason,
    lastGoodBytesPreserved: rollbackVerified,
    priorBytes: prior,
    value: null,
  });
}

export function createCalibrationMarginReviewSaveStorageAdapter(storage) {
  const hasInterface = storage
    && typeof storage.getItem === "function"
    && typeof storage.setItem === "function"
    && typeof storage.removeItem === "function";
  const restore = (prior) => {
    try {
      if (storage.getItem(CALIBRATION_MARGIN_REVIEW_SAVE_KEY) === prior) {
        return true;
      }
      if (prior === null) storage.removeItem(CALIBRATION_MARGIN_REVIEW_SAVE_KEY);
      else storage.setItem(CALIBRATION_MARGIN_REVIEW_SAVE_KEY, prior);
      return storage.getItem(CALIBRATION_MARGIN_REVIEW_SAVE_KEY) === prior;
    } catch {
      return false;
    }
  };
  return Object.freeze({
    read() {
      if (!hasInterface) return null;
      try {
        const raw = storage.getItem(CALIBRATION_MARGIN_REVIEW_SAVE_KEY);
        return raw === null ? null : sanitizeCalibrationMarginReviewSave(JSON.parse(raw));
      } catch {
        return null;
      }
    },
    commit(candidate) {
      const safe = sanitizeCalibrationMarginReviewSave(candidate);
      if (!hasInterface || !safe) {
        return safeStorageFailure(
          hasInterface ? "saved_record_not_verified" : "local_storage_unavailable",
          null,
          true,
        );
      }
      let prior;
      try {
        prior = storage.getItem(CALIBRATION_MARGIN_REVIEW_SAVE_KEY);
      } catch {
        return safeStorageFailure("local_storage_unavailable", null, true);
      }
      const serialized = JSON.stringify(safe);
      try {
        storage.setItem(CALIBRATION_MARGIN_REVIEW_SAVE_KEY, serialized);
        const raw = storage.getItem(CALIBRATION_MARGIN_REVIEW_SAVE_KEY);
        const readBack = raw === null
          ? null
          : sanitizeCalibrationMarginReviewSave(JSON.parse(raw));
        if (readBack && JSON.stringify(readBack) === serialized) {
          return Object.freeze({
            status: "committed",
            value: readBack,
            serialized,
            priorBytes: prior,
            lastGoodBytesPreserved: true,
          });
        }
        return safeStorageFailure(
          "local_readback_not_verified",
          prior,
          restore(prior),
        );
      } catch {
        return safeStorageFailure("local_write_not_completed", prior, restore(prior));
      }
    },
  });
}

function baseState(group, options = {}) {
  const restored = group === "cm50_verified_restore";
  const transaction = group === "cm41_transaction";
  const entry = group === "ie_finalized";
  const inspected = group === "cm40_provenance_inspected";
  const pending = group === "cm40_review" || group === "cm40_provenance_pending";
  return {
    version: CALIBRATION_MARGIN_REVIEW_SAVE_VERSION,
    shellVersion: CALIBRATION_MARGIN_REVIEW_SAVE_SHELL_VERSION,
    packetId,
    boardState: "SC-04",
    phase: entry
      ? "IE-P3"
      : transaction
        ? "CM-41 ATOMIC SAVE"
        : restored
          ? "CM-50 VERIFIED RESTORE"
          : "CM-40 BOUNDED REVIEW",
    activeGroup: group,
    owner: entry
      ? "SYSTEM"
      : transaction
        ? "SYSTEM // LOCAL EXPEDITION TRANSACTION"
        : restored
          ? "SYSTEM // RESTORED EXPEDITION NOTE"
          : "SYSTEM // EXPEDITION STATE",
    continuation: "continuation",
    cityStateDelta: null,
    worldStateDelta: null,
    accessStateDelta: null,
    successor: null,
    authorityGranted: false,
    externalActionEnabled: false,
    worldStateChanged: false,
    privateWorkCleared: true,
    transientWorkCleared: true,
    replayedEvents: [],
    checkpoint: entry ? "IE-P3" : restored ? "calibration_margin_complete" : null,
    finalizedSkillIds: entry ? ["RP003-IE-01"] : [],
    reviewRows: entry || transaction || restored ? [] : clone(calibrationMarginReviewRows),
    provenanceInspected: inspected,
    provenanceDetail: inspected || restored
      ? "Retained records come only from exposed or supplied course input. Sealed, audio, video, and unsupplied input remains unavailable and unread. Inspection grants zero credit."
      : null,
    saveEligibility: inspected,
    saveDisabled: pending,
    note: restored ? clone(exactNote) : null,
    recordIntegrity: restored
      ? "The exact sanitized local expedition record returned intact."
      : null,
    statusMessageId: options.statusMessageId ?? `${group}:ready`,
    statusMessage: options.statusMessage ?? (
      entry
        ? "Finalized evidence is unchanged. A fresh expedition review is available."
        : transaction
          ? "Validating one local all-or-none expedition record."
          : restored
            ? "The local expedition record restored without replay or external action."
            : inspected
              ? "Provenance is inspected. A fresh local save may be attempted."
              : "Five independent obligations are ready. Provenance inspection is required before local save."
    ),
    publicReason: options.publicReason ?? null,
    availableActions: entry
      ? [calibrationMarginReviewSaveActions.review]
      : transaction
        ? []
        : restored
          ? [
            calibrationMarginReviewSaveActions.returnCivicComparison,
            calibrationMarginReviewSaveActions.returnCityThreshold,
          ]
          : [
            ...(inspected ? [calibrationMarginReviewSaveActions.save] : [
              calibrationMarginReviewSaveActions.provenance,
            ]),
            calibrationMarginReviewSaveActions.returnCivicComparison,
            calibrationMarginReviewSaveActions.returnCityThreshold,
          ],
    focusIntent: {
      group,
      target: options.focusTarget ?? "heading",
    },
  };
}

function exactIntent(intent, state) {
  return exactKeys(intent, intentKeys)
    && intent.shellVersion === CALIBRATION_MARGIN_REVIEW_SAVE_SHELL_VERSION
    && intent.version === CALIBRATION_MARGIN_REVIEW_SAVE_VERSION
    && intent.packetId === packetId
    && intent.mode === "campaign"
    && intent.activeGroupId === state.activeGroup
    && intent.expectedOwner === state.owner
    && state.availableActions.includes(intent.allowlistedActionId)
    && calibrationMarginReviewSaveModalities.includes(intent.activationKind)
    && opaqueToken(intent.opaqueFreshEventToken);
}

export function createCalibrationMarginReviewSaveIntent(
  state,
  action,
  activationKind,
  eventToken,
) {
  return Object.freeze({
    shellVersion: CALIBRATION_MARGIN_REVIEW_SAVE_SHELL_VERSION,
    version: CALIBRATION_MARGIN_REVIEW_SAVE_VERSION,
    packetId,
    mode: "campaign",
    activeGroupId: state?.activeGroup ?? null,
    expectedOwner: state?.owner ?? null,
    allowlistedActionId: action,
    activationKind,
    opaqueFreshEventToken: eventToken,
  });
}

function safeReturn(action) {
  const target = action === calibrationMarginReviewSaveActions.returnCivicComparison
    ? "RP-002"
    : "CITY_THRESHOLD";
  return Object.freeze({
    target,
    continuation: "continuation",
    cityStateDelta: null,
    worldStateDelta: null,
    accessStateDelta: null,
    successor: null,
    authorityGranted: false,
    externalActionEnabled: false,
    writePerformed: false,
    replayedEvents: Object.freeze([]),
  });
}

export function createCalibrationMarginReviewSaveController(options = {}) {
  const restored = sanitizeCalibrationMarginReviewSave(options.restoredRecord);
  const getSources = typeof options.getSources === "function"
    ? options.getSources
    : () => options.sources;
  const adapter = options.adapter;
  const handledTokens = new Set();
  let record = restored;
  let state = restored
    ? baseState("cm50_verified_restore")
    : baseState("ie_finalized");

  const reject = (reason) => Object.freeze({
    status: "rejected",
    reason,
    state: clone(state),
  });

  return Object.freeze({
    getState() {
      return clone(state);
    },
    getRecord() {
      return record ? clone(record) : null;
    },
    dispatch(intent) {
      if (options.mode === "demo_tour") return reject("tour_review_save_closed");
      const intentValid = exactIntent(intent, state);
      if (!intentValid || handledTokens.has(intent?.opaqueFreshEventToken)) {
        if (state.activeGroup === "cm40_provenance_inspected"
          && intent?.allowlistedActionId === calibrationMarginReviewSaveActions.save) {
          state = baseState("cm40_provenance_pending", {
            publicReason: "provenance_inspection_required",
            statusMessageId: "cm40_provenance_pending:intent-rejected",
            statusMessage: "The save action was not accepted. Inspect provenance again before a fresh attempt.",
          });
          return Object.freeze({
            status: "save_intent_rejected_recovered",
            reason: "intent_rejected",
            state: clone(state),
          });
        }
        return reject(handledTokens.has(intent?.opaqueFreshEventToken)
          ? "one_hit_only"
          : "intent_rejected");
      }

      const action = intent.allowlistedActionId;
      if (action === calibrationMarginReviewSaveActions.review) {
        const checked = recoveryForSources(getSources());
        if (!checked.valid) {
          return Object.freeze({
            status: "source_boundary_incomplete",
            recoveryTarget: Object.freeze(checked),
            state: clone(state),
          });
        }
        handledTokens.add(intent.opaqueFreshEventToken);
        state = baseState("cm40_review");
        return Object.freeze({ status: "review_opened", state: clone(state) });
      }

      if (action === calibrationMarginReviewSaveActions.provenance) {
        const checked = recoveryForSources(getSources());
        if (!checked.valid) {
          return Object.freeze({
            status: "source_boundary_incomplete",
            recoveryTarget: Object.freeze(checked),
            state: clone(state),
          });
        }
        handledTokens.add(intent.opaqueFreshEventToken);
        state = baseState("cm40_provenance_inspected", {
          focusTarget: "provenance_heading",
          statusMessageId: "cm40_provenance_inspected:zero-credit",
        });
        return Object.freeze({
          status: "provenance_inspected_zero_credit",
          evidenceGranted: false,
          state: clone(state),
        });
      }

      if (action === calibrationMarginReviewSaveActions.save) {
        const source = getSources();
        const candidate = buildCandidate(source);
        if (!candidate) {
          const recovery = recoveryForSources(source);
          return Object.freeze({
            status: "source_boundary_incomplete",
            recoveryTarget: Object.freeze(recovery),
            state: clone(state),
          });
        }
        handledTokens.add(intent.opaqueFreshEventToken);
        const transactionState = baseState("cm41_transaction");
        const result = adapter?.commit(candidate) ?? {
          status: "failed",
          reason: "local_storage_unavailable",
          lastGoodBytesPreserved: true,
        };
        if (result.status !== "committed"
          || !sanitizeCalibrationMarginReviewSave(result.value)) {
          state = baseState("cm40_provenance_pending", {
            publicReason: result.reason ?? "local_write_not_completed",
            statusMessageId: "cm40_provenance_pending:save-failed",
            statusMessage: "No accepted local write completed. Prior verified bytes remain unchanged; inspect provenance before a fresh save.",
          });
          return Object.freeze({
            status: "save_failed_recovered",
            reason: result.reason ?? "local_write_not_completed",
            lastGoodBytesPreserved: result.lastGoodBytesPreserved === true,
            transactionState: clone(transactionState),
            state: clone(state),
          });
        }
        record = sanitizeCalibrationMarginReviewSave(result.value);
        state = baseState("cm50_verified_restore");
        return Object.freeze({
          status: "save_committed_verified_restore",
          transactionState: clone(transactionState),
          state: clone(state),
          record: clone(record),
        });
      }

      if (action === calibrationMarginReviewSaveActions.returnCivicComparison
        || action === calibrationMarginReviewSaveActions.returnCityThreshold) {
        handledTokens.add(intent.opaqueFreshEventToken);
        const route = safeReturn(action);
        if (state.activeGroup !== "cm50_verified_restore") {
          state = baseState("ie_finalized", {
            statusMessageId: "ie_finalized:known-return",
            statusMessage: "Review transients cleared. Finalized evidence remains unchanged.",
          });
        }
        return Object.freeze({
          status: route.target === "RP-002"
            ? "returned_to_rp002_write_free"
            : "returned_to_city_threshold_write_free",
          route,
          state: clone(state),
        });
      }
      return reject("action_unavailable");
    },
  });
}

export const calibrationMarginReviewSaveContract = Object.freeze({
  packetId,
  mappingId,
  observations,
  topKeys,
  noteKeys,
  recordKeys,
  exactNote,
});
