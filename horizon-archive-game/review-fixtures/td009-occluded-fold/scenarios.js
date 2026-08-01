import manifest from "./launch-manifest.json" with { type: "json" };

export const TD009_OCCLUDED_FOLD_FIXTURE = "TD009_OCCLUDED_FOLD_FIXTURE";
export const occludedFoldScenarioNames = Object.freeze([...manifest.scenarios]);

const groupFor = (name) => {
  if (name.startsWith("route_") || name === "interruption_before_consumption" || name === "return_offset_reach") return "td009-occluded-fold-route";
  if (name === "of00_arrive" || name === "interruption_after_of00_pre_save") return "of00_orientation";
  if (name === "of10_survey" || name.startsWith("observation_") || name === "resume_contiguous_prefix" || name === "resume_first_gap") return "of10_observations";
  if (name.includes("python_primary")) return "of20_python_primary";
  if (name.includes("python_trace")) return "of20_python_trace";
  if (name.includes("python_transfer")) return "of20_python_transfer";
  if (name.includes("prompt_primary")) return "of20_prompt_primary";
  if (name.includes("prompt_retrieval")) return "of20_prompt_retrieval";
  if (name.includes("prompt_transfer")) return "of20_prompt_transfer";
  if (name.includes("system_user_explanation")) return "of20_system_user_explanation";
  if (name.includes("truth_authority_explanation")) return "of20_truth_authority_explanation";
  if (name === "review_ineligible" || name === "of20_reconcile") return "of20_review";
  if (name === "review_eligible" || name.startsWith("save_")) return "of20_save";
  if (name === "of30_restore" || name === "restore_replay_free" || name === "continuation_inert") return "of30_restore";
  if (name === "return_city_threshold") return "city_threshold";
  if (name.includes("cleared") || name === "atomic_polite_status") return "of20_recovery";
  return "of20_review";
};

export function createOccludedFoldScenario(name) {
  if (!occludedFoldScenarioNames.includes(name)) throw new TypeError("A closed TD-009 scenario is required.");
  const group = groupFor(name);
  const layout = name === "layout_desktop" ? "1920x1080" : name === "layout_laptop" ? "1366x768"
    : name === "layout_narrow" ? "390x844" : name === "layout_effective_200" ? "768x900-effective-200" : "representative";
  return Object.freeze({
    name,
    state: Object.freeze({
      shellVersion: "SS-RP009-OCCLUDED-FOLD-v1",
      activeGroup: group,
      boardState: group === "td009-occluded-fold-route" ? "SC-09" : group === "city_threshold" ? "SC-02-50" : "SC-10",
      owner: group.includes("prompt") || group.includes("explanation") ? "PILOT // COURSE WORK" : group === "of10_observations" ? "PILOT // EDGE SURVEY" : "SYSTEM // CLOSED FIXTURE",
      heading: name === "longest_copy_contained" ? "RECONCILE THREE SEPARATELY ATTRIBUTABLE EXPEDITION RECORDS WITHOUT INFERRING AN INTERNAL TOPOLOGY" : name.replaceAll("_", " "),
      status: "One complete atomic fixture status; no storage, network, route authority, evidence cross-credit, or world response.",
      layout,
      minTargetCssPx: 44,
      replayedEvents: Object.freeze([]),
      successor: null,
      privateWorkCleared: true,
    }),
    scene: Object.freeze({ role: group === "of10_observations" ? "SC-10-OCCLUDED-FOLD-EXPOSED-EDGE-DETAIL" : "SC-10-OCCLUDED-FOLD-PANORAMA", structuralPlaceholder: false, renderingMedium: "css", runtimeImage: "deferred" }),
    storage: "frozen-in-memory-only",
    arbitraryStateAccepted: false,
  });
}
