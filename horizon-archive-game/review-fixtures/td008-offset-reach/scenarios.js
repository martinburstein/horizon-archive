import manifest from "./launch-manifest.json" with { type: "json" };

export const TD008_OFFSET_REACH_FIXTURE = "TD008_OFFSET_REACH_FIXTURE";
export const offsetReachScenarioNames = Object.freeze([...manifest.scenarios]);

const groupFor = (name) => {
  if (name.startsWith("route_") || name === "interruption_before_consumption" || name === "return_braided_verge") return "bv30_offset_reach_route_choice";
  if (name === "or00_arrive" || name === "interruption_after_or00_pre_save") return "or00_orientation";
  if (name === "or10_inspect" || name.startsWith("observation_") || name === "resume_contiguous_prefix" || name === "resume_first_gap") return "or10_observations";
  if (name.includes("python_primary")) return "or20_python_primary";
  if (name.includes("python_trace")) return "or20_python_trace";
  if (name.includes("python_transfer")) return "or20_python_transfer";
  if (name.includes("ai_primary")) return "or20_ai_primary";
  if (name.includes("ai_retrieval")) return "or20_ai_retrieval";
  if (name.includes("ai_transfer")) return "or20_ai_transfer";
  if (name.includes("selection_explanation")) return "or20_selection_explanation";
  if (name.includes("inference_explanation")) return "or20_inference_explanation";
  if (name === "review_ineligible" || name === "or20_revise") return "or20_review";
  if (name === "review_eligible" || name.startsWith("save_")) return "or20_save";
  if (name === "or30_restore" || name === "restore_replay_free" || name === "continuation_inert") return "or30_restore";
  if (name === "return_city_threshold") return "city_threshold";
  if (name.includes("cleared") || name === "atomic_polite_status") return "or20_repair";
  return "or20_review";
};

export function createOffsetReachScenario(name) {
  if (!offsetReachScenarioNames.includes(name)) throw new TypeError("A closed TD-008 scenario is required.");
  const group = groupFor(name);
  const layout = name === "layout_desktop" ? "1920x1080" : name === "layout_laptop" ? "1366x768"
    : name === "layout_narrow" ? "390x844" : name === "layout_effective_200" ? "768x900-effective-200" : "representative";
  return Object.freeze({
    name,
    state: Object.freeze({
      shellVersion: "SS-RP008-OFFSET-REACH-v1",
      activeGroup: group,
      boardState: group.startsWith("bv") ? "SC-08" : group === "city_threshold" ? "SC-02-50" : "SC-09",
      owner: group.startsWith("or20_vision") || group.includes("boundary") ? "TEACHER" : group === "or10_observations" ? "SCENE // SENSOR RECORD" : "SYSTEM // CLOSED FIXTURE",
      heading: name === "longest_copy_contained" ? "Review retained local association and independent offset responsibilities" : name.replaceAll("_", " "),
      status: "One complete atomic fixture status; no storage, network, route authority, evidence cross-credit, or world response.",
      layout,
      minTargetCssPx: 44,
      replayedEvents: Object.freeze([]),
      successor: null,
      privateWorkCleared: true,
    }),
    scene: Object.freeze({ role: group === "or10_observations" ? "SC-09-RELATION-DETAIL-MASTER" : "SC-09-PANORAMA-MASTER", provisional: true }),
    storage: "frozen-in-memory-only",
    arbitraryStateAccepted: false,
  });
}
