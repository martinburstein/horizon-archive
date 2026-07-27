import contract from "../../curriculum/readiness/RP-004/contract.json" with { type: "json" };
import {
  THREE_CURRENT_REACH_RECORD_VERSION,
  sanitizeThreeCurrentReachSave,
} from "../src/ThreeCurrentReachNormal.js";

const evidenceKeys = [
  "packet_id", "mapping_id", "form", "skill_or_objective_id",
  "dimension_correctness", "attempt_count", "hint_level", "confidence",
  "misconception_tags", "mastery_status",
];

function evidence(skill, form, dimensions) {
  const value = {
    packet_id: "RP-004",
    mapping_id: "RP004-A3-THREE-CURRENT-REACH",
    form,
    skill_or_objective_id: skill,
    dimension_correctness: Object.fromEntries(dimensions.map((id) => [id, true])),
    attempt_count: 1,
    hint_level: 0,
    confidence: null,
    misconception_tags: [],
    mastery_status: "mastered",
  };
  return Object.fromEntries(evidenceKeys.map((key) => [key, value[key]]));
}

export function exactThreeCurrentReachSaveRecord() {
  const python = contract.python_contract.checks;
  const dimensions = contract.ai901_contract.dimensions;
  return sanitizeThreeCurrentReachSave({
    version: THREE_CURRENT_REACH_RECORD_VERSION,
    packetId: "RP-004",
    mappingId: "RP004-A3-THREE-CURRENT-REACH",
    checkpoint: "three_current_reach_complete",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    note: {
      relations: [
        "suspended_matter_porous_relation",
        "cyclic_pressure_tensioned_relation",
        "conducted_heat_jointed_relation",
      ],
      commonReturn: "observed_purpose_unknown",
      correspondence: "sanitized_replicas_only",
      purpose: null,
    },
    evidence: [
      evidence("PY-011", "primary", python),
      evidence("PY-011", "retrieval", ["iterable", "currentItem", "loopBody", "outputCount", "purposeBoundary"]),
      evidence("PY-011", "transfer", python),
      ...["primary", "retrieval", "transfer"].map((form) => evidence(
        "RP004-WORKLOAD-01",
        form,
        contract.ai901_contract.forms[form].flatMap((item) => (
          dimensions.map((dimension) => `${item.id}.${dimension}`)
        )),
      )),
      evidence("RP004-WORKLOAD-01", "modality_explanation", ["modality_boundary"]),
      evidence("RP004-WORKLOAD-01", "agentic_explanation", ["agentic_boundary"]),
    ],
  });
}
