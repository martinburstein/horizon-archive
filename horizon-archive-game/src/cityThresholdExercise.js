import cum01ScenariosAsset from "../../curriculum/readiness/CUM-01/scenario_bank.json" with { type: "json" };
import cum01RemediationAsset from "../../curriculum/readiness/CUM-01/remediation_routes.json" with { type: "json" };

export const CITY_THRESHOLD_SAVE_KEY = "horizon-archive-rp001-staging-v1";
export const CITY_THRESHOLD_PACKET_ID = "RP-001";
export const CITY_THRESHOLD_CONTINUATION = "continuation";

export const cityThresholdLayouts = Object.freeze({
  canonical: Object.freeze({ width: 640, height: 480, worldHeight: 360, interfaceHeight: 120 }),
  narrow: Object.freeze({ width: 320, height: 240, worldHeight: 180, interfaceHeight: 60 }),
});

export function getCityThresholdLayout(canonicalLayout) {
  return cityThresholdLayouts[canonicalLayout] ?? cityThresholdLayouts.narrow;
}

export function projectCityThresholdRect(rect, canonicalLayout, scale = 1, origin = { x: 0, y: 0 }) {
  const source = canonicalLayout === "canonical" ? rect.canonical : rect.narrow;
  const [x, y, width, height] = source;
  return {
    x: origin.x + x * scale,
    y: origin.y + y * scale,
    width: width * scale,
    height: height * scale,
    right: origin.x + (x + width) * scale,
    bottom: origin.y + (y + height) * scale,
  };
}

export const cityThresholdBoards = ["SC-02-00", "SC-02-10", "SC-02-20", "SC-02-30", "SC-02-40", "SC-02-50"];
export const cityThresholdCheckpoints = [
  "threshold_entry",
  "python_pending",
  "python_complete",
  "cum_primary_pending",
  "cum_primary_remediation",
  "cum_transfer_pending",
  "cum_transfer_remediation",
  "anchor_complete",
];

export const cityThresholdHotspots = {
  "SC-02-00": {
    cycles: { canonical: [36, 154, 158, 140], narrow: [10, 64, 82, 64] },
    boundary: { canonical: [218, 176, 186, 124], narrow: [107, 74, 98, 64] },
    routePreview: { canonical: [458, 197, 150, 95], narrow: [228, 82, 82, 50] },
  },
  "SC-02-10": {
    stopSeam: { canonical: [214, 138, 190, 160], narrow: [105, 58, 102, 78] },
    mapDivision: { canonical: [430, 132, 138, 132], narrow: [214, 54, 80, 78] },
    detailReturn: { canonical: [0, 300, 112, 60], narrow: [0, 136, 56, 44] },
  },
  "SC-02-20": {
    environmental: { canonical: [78, 130, 180, 170], narrow: [22, 50, 92, 82] },
    identity: { canonical: [382, 126, 180, 174], narrow: [206, 50, 92, 82] },
    anchorNext: { canonical: [262, 300, 116, 60], narrow: [116, 132, 88, 48] },
    detailReturn: { canonical: [0, 300, 112, 60], narrow: [0, 136, 56, 44] },
  },
  "SC-02-30": {
    anchor: { canonical: [246, 258, 148, 92], narrow: [112, 126, 96, 54] },
  },
  "SC-02-40": { forward: { canonical: [492, 296, 148, 64], narrow: [248, 136, 72, 44] } },
  "SC-02-50": { forward: { canonical: [492, 296, 148, 64], narrow: [248, 136, 72, 44] } },
};

export const anchorPacketSource = JSON.stringify({
  packet_id: "RP-001-ANCHOR-PROBE",
  observations: [
    { kind: "operating_cycles", observed: true },
    { kind: "maintenance_boundary_mismatch", observed: true },
  ],
  expedition_state: { anchor_recorded: false, civic_route_available: false },
  continuation: CITY_THRESHOLD_CONTINUATION,
  city_state_delta: null,
});

export const anchorPacketStarter = `import json

anchor_packet = '${anchorPacketSource}'
packet = json.loads(anchor_packet)

# Append the two separately observed access records.
# Update only the two expedition_state booleans.

encoded = json.dumps(packet, sort_keys=True)
round_trip = json.loads(encoded)
print(encoded)`;

export const anchorPacketReference = `${anchorPacketStarter.replace(
  "# Append the two separately observed access records.\n# Update only the two expedition_state booleans.",
  'packet["observations"].append({"kind": "environmental_access_open", "observed": True})\npacket["observations"].append({"kind": "identity_record_closed", "observed": True})\npacket["expedition_state"]["anchor_recorded"] = True\npacket["expedition_state"]["civic_route_available"] = True',
)}`;

export const anchorProbeChecks = [
  "parses_supplied_json",
  "derives_from_anchor_packet",
  "preserves_observations",
  "appends_environmental_access",
  "appends_identity_record",
  "updates_expedition_booleans",
  "changes_only_allowed_fields",
  "preserves_continuation",
  "preserves_null_city_delta",
  "verifies_json_round_trip",
];

export const anchorExplanationDimensions = ["list_role", "dictionary_role", "json_role"];
export const safetyExplanationDimensions = ["valid_output_boundary", "exam_claim_boundary", "external_action_boundary"];

const mutationLines = new Set([
  'packet["observations"].append({"kind": "environmental_access_open", "observed": True})',
  'packet["observations"].append({"kind": "identity_record_closed", "observed": True})',
  'packet["expedition_state"]["anchor_recorded"] = True',
  'packet["expedition_state"]["civic_route_available"] = True',
]);

function compactLines(source) {
  return String(source ?? "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
}

function hasLine(lines, expected) {
  return lines.includes(expected);
}

export function evaluateAnchorPacketSource(source) {
  const lines = compactLines(source);
  const sourceText = String(source ?? "");
  const safe = !/(?:\beval\s*\(|\bexec\s*\(|\bopen\s*\(|__import__|subprocess|\bos\.|\bsys\.|requests\.|fetch\s*\()/i.test(sourceText);
  const suppliedLiteral = hasLine(lines, `anchor_packet = '${anchorPacketSource}'`);
  const parses = suppliedLiteral && hasLine(lines, "packet = json.loads(anchor_packet)");
  const environment = hasLine(lines, [...mutationLines][0]);
  const identity = hasLine(lines, [...mutationLines][1]);
  const anchor = hasLine(lines, [...mutationLines][2]);
  const route = hasLine(lines, [...mutationLines][3]);
  const packetOperations = lines.filter((line) => /^packet\[/.test(line));
  const onlyAllowedMutations = packetOperations.every((line) => mutationLines.has(line)) && packetOperations.length === mutationLines.size;
  const noPacketReplacement = !lines.some((line) => /^packet\s*=/.test(line) && line !== "packet = json.loads(anchor_packet)");
  const noAnchorReplacement = lines.filter((line) => /^anchor_packet\s*=/.test(line)).length === 1;
  const checks = {
    parses_supplied_json: safe && parses,
    derives_from_anchor_packet: safe && suppliedLiteral && noPacketReplacement && noAnchorReplacement && !/print\s*\(\s*["']/.test(sourceText),
    preserves_observations: parses && environment && identity && !lines.some((line) => /^packet\["observations"\]\s*=/.test(line)),
    appends_environmental_access: environment,
    appends_identity_record: identity,
    updates_expedition_booleans: anchor && route,
    changes_only_allowed_fields: safe && onlyAllowedMutations,
    preserves_continuation: !lines.some((line) => /packet\["continuation"\]/.test(line)),
    preserves_null_city_delta: suppliedLiteral && !lines.some((line) => /packet\["city_state_delta"\]/.test(line)),
    verifies_json_round_trip: hasLine(lines, "encoded = json.dumps(packet, sort_keys=True)") && hasLine(lines, "round_trip = json.loads(encoded)") && hasLine(lines, "print(encoded)"),
  };
  const score = anchorProbeChecks.filter((check) => checks[check]).length;
  return { checks, score, passed: score === anchorProbeChecks.length, failedChecks: anchorProbeChecks.filter((check) => !checks[check]) };
}

function normalize(value) {
  return String(value ?? "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}

export function evaluateAnchorExplanation(response) {
  const expected = {
    list_role: "ordered_observation_collection",
    dictionary_role: "named_nested_state",
    json_role: "string_interchange_requires_parsing_and_serialization",
  };
  const correctness = Object.fromEntries(anchorExplanationDimensions.map((key) => [key, normalize(response?.[key]) === expected[key]]));
  return { correctness, score: Object.values(correctness).filter(Boolean).length, passed: Object.values(correctness).every(Boolean) };
}

export function evaluateSafetyExplanation(response) {
  const expected = {
    valid_output_boundary: "valid_output_is_not_authority_to_act",
    exam_claim_boundary: "internal_readiness_is_not_an_exam_guarantee",
    external_action_boundary: "external_action_needs_separate_scope_authority_and_privacy_review",
  };
  const correctness = Object.fromEntries(safetyExplanationDimensions.map((key) => [key, normalize(response?.[key]) === expected[key]]));
  return { correctness, score: Object.values(correctness).filter(Boolean).length, passed: Object.values(correctness).every(Boolean) };
}

export const cum01Forms = cum01ScenariosAsset.forms;
export const cum01RemediationRoutes = cum01RemediationAsset;

export function getCum01Options(form, dimension) {
  return cum01Forms[form].map((item) => item[dimension]);
}

export function evaluateCum01Form(form, answers) {
  if (!Object.hasOwn(cum01Forms, form)) return null;
  const itemCorrectness = {};
  const missedObjectiveIds = new Set();
  for (const item of cum01Forms[form]) {
    const decision = answers?.[item.id]?.decision === item.decision;
    const reason = answers?.[item.id]?.reason === item.reason;
    itemCorrectness[item.id] = { decision, reason };
    if (!decision || !reason) item.objective_ids.forEach((id) => missedObjectiveIds.add(id));
  }
  const score = Object.values(itemCorrectness).flatMap((value) => [value.decision, value.reason]).filter(Boolean).length;
  return {
    form,
    itemCorrectness,
    score,
    passed: score === 16,
    objectiveIds: [...new Set(cum01Forms[form].flatMap((item) => item.objective_ids))],
    missedObjectiveIds: [...missedObjectiveIds],
    remediationLessonIds: [...new Set([...missedObjectiveIds].map((id) => cum01RemediationRoutes[id]).filter(Boolean))],
  };
}

function boundedInteger(value, max = 99) {
  return Math.min(max, Math.max(0, Number.isInteger(value) ? value : 0));
}

function sanitizeBooleanMap(value, keys) {
  if (!value || typeof value !== "object") return {};
  return Object.fromEntries(keys.filter((key) => typeof value[key] === "boolean").map((key) => [key, value[key]]));
}

function sanitizeCumCorrectness(value, form) {
  const result = {};
  for (const item of cum01Forms[form]) {
    const safe = sanitizeBooleanMap(value?.[item.id], ["decision", "reason"]);
    if (Object.keys(safe).length) result[item.id] = safe;
  }
  return result;
}

function formPassed(correctness, form) {
  return cum01Forms[form].every((item) => correctness?.[item.id]?.decision === true && correctness?.[item.id]?.reason === true);
}

function allTrue(value, keys) {
  return keys.every((key) => value?.[key] === true);
}

export function sanitizeCityThresholdSave(value) {
  if (!value || typeof value !== "object" || value.packetId !== CITY_THRESHOLD_PACKET_ID) return null;
  const python = {
    checkCorrectness: sanitizeBooleanMap(value.python?.checkCorrectness, anchorProbeChecks),
    explanationCorrectness: sanitizeBooleanMap(value.python?.explanationCorrectness, anchorExplanationDimensions),
    attemptCount: boundedInteger(value.python?.attemptCount),
    hintLevel: boundedInteger(value.python?.hintLevel, 4),
    skillIds: ["PY-020", "PY-008", "PY-009", "PY-016"],
    masteryStatus: "in_progress",
  };
  const pythonPassed = allTrue(python.checkCorrectness, anchorProbeChecks) && allTrue(python.explanationCorrectness, anchorExplanationDimensions);
  python.masteryStatus = pythonPassed ? "mastered" : allTrue(python.checkCorrectness, anchorProbeChecks) ? "checks_complete" : "in_progress";

  const primaryCorrectness = sanitizeCumCorrectness(value.cum01?.primaryCorrectness, "primary");
  const transferCorrectness = sanitizeCumCorrectness(value.cum01?.transferCorrectness, "transfer");
  const safetyCorrectness = sanitizeBooleanMap(value.cum01?.safetyCorrectness, safetyExplanationDimensions);
  const primaryPassed = formPassed(primaryCorrectness, "primary");
  const transferPassed = formPassed(transferCorrectness, "transfer");
  const safetyPassed = allTrue(safetyCorrectness, safetyExplanationDimensions);
  const cum01 = {
    checkpointId: "CUM-01",
    primaryCorrectness,
    transferCorrectness,
    safetyCorrectness,
    attemptCount: {
      primary: boundedInteger(value.cum01?.attemptCount?.primary),
      transfer: boundedInteger(value.cum01?.attemptCount?.transfer),
    },
    hintLevel: boundedInteger(value.cum01?.hintLevel, 4),
    confidence: ["low", "medium", "high"].includes(value.cum01?.confidence) ? value.cum01.confidence : null,
    misconceptionTags: Array.isArray(value.cum01?.misconceptionTags)
      ? [...new Set(value.cum01.misconceptionTags.filter((tag) => typeof tag === "string" && tag.length <= 64))].slice(0, 16)
      : [],
    objectiveIds: [...new Set([...cum01Forms.primary, ...cum01Forms.transfer].flatMap((item) => item.objective_ids))],
    masteryStatus: primaryPassed && transferPassed && safetyPassed ? "mastered" : transferPassed ? "transfer_complete" : primaryPassed ? "primary_complete" : "in_progress",
  };

  const fullyPassed = pythonPassed && cum01.masteryStatus === "mastered";
  const requestedAtomicCommit = value.cityThresholdAnchorRecorded === true && value.civicDistrictRouteAvailable === true;
  const committed = fullyPassed && requestedAtomicCommit;
  let checkpoint = cityThresholdCheckpoints.includes(value.checkpoint) ? value.checkpoint : "threshold_entry";
  if (committed) checkpoint = "anchor_complete";
  else if (!pythonPassed && !["threshold_entry", "python_pending"].includes(checkpoint)) checkpoint = "python_pending";
  else if (pythonPassed && !primaryPassed && !["cum_primary_pending", "cum_primary_remediation"].includes(checkpoint)) checkpoint = "cum_primary_pending";
  else if (primaryPassed && !transferPassed && !["cum_transfer_pending", "cum_transfer_remediation"].includes(checkpoint)) checkpoint = "cum_transfer_pending";
  else if (transferPassed && !safetyPassed) checkpoint = "cum_transfer_pending";

  return {
    packetId: CITY_THRESHOLD_PACKET_ID,
    checkpoint,
    python,
    cum01,
    cityThresholdAnchorRecorded: committed,
    civicDistrictRouteAvailable: committed,
    continuation: CITY_THRESHOLD_CONTINUATION,
    cityStateDelta: null,
  };
}

export function createCityThresholdSave() {
  return sanitizeCityThresholdSave({ packetId: CITY_THRESHOLD_PACKET_ID, checkpoint: "threshold_entry" });
}

export function readVerifiedCityThresholdPredecessor(storage) {
  try {
    const safe = sanitizeCityThresholdSave(JSON.parse(storage?.getItem(CITY_THRESHOLD_SAVE_KEY) ?? "null"));
    if (safe?.checkpoint !== "anchor_complete"
      || safe.cityThresholdAnchorRecorded !== true
      || safe.civicDistrictRouteAvailable !== true
      || safe.continuation !== CITY_THRESHOLD_CONTINUATION
      || safe.cityStateDelta !== null) return null;
    return Object.freeze({
      verificationStatus: "verified",
      cityThresholdAnchorRecorded: true,
      civicDistrictRouteAvailable: true,
    });
  } catch {
    return null;
  }
}

export function getCityThresholdResumeBoard(save) {
  const safe = sanitizeCityThresholdSave(save) ?? createCityThresholdSave();
  if (safe.checkpoint === "anchor_complete") return "SC-02-50";
  if (safe.checkpoint === "threshold_entry") return "SC-02-00";
  return "SC-02-30";
}

export function withAnchorProbeResult(save, result) {
  const safe = sanitizeCityThresholdSave(save) ?? createCityThresholdSave();
  return sanitizeCityThresholdSave({
    ...safe,
    checkpoint: "python_pending",
    python: { ...safe.python, checkCorrectness: result.checks, attemptCount: safe.python.attemptCount + 1 },
  });
}

export function withAnchorExplanation(save, result) {
  const safe = sanitizeCityThresholdSave(save) ?? createCityThresholdSave();
  return sanitizeCityThresholdSave({
    ...safe,
    checkpoint: result.passed ? "cum_primary_pending" : "python_complete",
    python: { ...safe.python, explanationCorrectness: result.correctness },
  });
}

export function withCum01Result(save, result) {
  const safe = sanitizeCityThresholdSave(save) ?? createCityThresholdSave();
  const isPrimary = result.form === "primary";
  return sanitizeCityThresholdSave({
    ...safe,
    checkpoint: result.passed
      ? (isPrimary ? "cum_transfer_pending" : "cum_transfer_pending")
      : (isPrimary ? "cum_primary_remediation" : "cum_transfer_remediation"),
    cum01: {
      ...safe.cum01,
      [isPrimary ? "primaryCorrectness" : "transferCorrectness"]: result.itemCorrectness,
      attemptCount: { ...safe.cum01.attemptCount, [result.form]: safe.cum01.attemptCount[result.form] + 1 },
    },
  });
}

export function completeCum01Remediation(save) {
  const safe = sanitizeCityThresholdSave(save) ?? createCityThresholdSave();
  const form = safe.checkpoint === "cum_transfer_remediation" ? "transfer" : "primary";
  return sanitizeCityThresholdSave({ ...safe, checkpoint: form === "primary" ? "cum_primary_pending" : "cum_transfer_pending" });
}

export function withSafetyExplanation(save, result) {
  const safe = sanitizeCityThresholdSave(save) ?? createCityThresholdSave();
  return sanitizeCityThresholdSave({ ...safe, checkpoint: "cum_transfer_pending", cum01: { ...safe.cum01, safetyCorrectness: result.correctness } });
}

export function commitCityThresholdAnchor(save) {
  const safe = sanitizeCityThresholdSave(save) ?? createCityThresholdSave();
  return sanitizeCityThresholdSave({ ...safe, checkpoint: "anchor_complete", cityThresholdAnchorRecorded: true, civicDistrictRouteAvailable: true });
}
