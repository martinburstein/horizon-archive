import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";
import rp009 from "../../curriculum/readiness/RP-009/contract.json" with { type: "json" };
import rp010 from "../../curriculum/readiness/RP-010/contract.json" with { type: "json" };
import { createCounterfieldRouteState } from "../src/CalibrationMarginNormalEntry.js";
import {
  OCCLUDED_FOLD_CONTROLLER_VERSION, OCCLUDED_FOLD_RECORD_VERSION, OCCLUDED_FOLD_SHELL_VERSION,
  occludedFoldActions, occludedFoldObservationIds, occludedFoldPythonTraceAnswers, sanitizeOccludedFoldSave,
} from "../src/OccludedFoldNormal.js";
import {
  COUNTERFIELD_CONTROLLER_VERSION, COUNTERFIELD_ROUTE_ACTION, COUNTERFIELD_ROUTE_CONTROLLER_VERSION,
  COUNTERFIELD_ROUTE_GROUP, COUNTERFIELD_ROUTE_OWNER, COUNTERFIELD_SHELL_VERSION,
  counterfieldActions, counterfieldExplanationAnswers, counterfieldObservationIds,
  counterfieldPythonTraceAnswers, counterfieldReferenceSources, createCounterfieldIntent,
  createCounterfieldNormalController, createCounterfieldRouteIntent, evaluateCounterfieldClientFlow,
  evaluateCounterfieldPython, evaluateCounterfieldPythonTrace, sanitizeCounterfieldSave,
} from "../src/CounterfieldNormal.js";

const shellPath = fileURLToPath(new URL("../../Production Pipeline/Skyscraper Test Drives/TD-010/05-PLAYABLE-SLICE-SHELL.md", import.meta.url));
const evidenceKeys = ["packet_id", "mapping_id", "form", "skill_or_objective_id", "dimension_correctness", "attempt_count", "hint_level", "confidence", "misconception_tags", "mastery_status"];
const observationActions = Object.values(counterfieldActions).slice(2, 9);
let eventId = 0;

function stripCode(value) {
  const text = value.trim();
  return text.startsWith("`") && text.endsWith("`") ? text.slice(1, -1) : text;
}

function parseFrozenRegistry() {
  const shell = readFileSync(shellPath, "utf8");
  const start = shell.indexOf("### Frozen UTF-8 registry");
  const end = shell.indexOf("The exact truthful execution label is:", start);
  assert.ok(start >= 0 && end > start, "shell 05 frozen UTF-8 registry must be present");
  const rows = shell.slice(start, end).split(/\r?\n/).filter((line) => /^\| (?!State \/ responsibility|---)/.test(line)).map((line) => {
    const [name, owner, heading, statusFocus] = line.split("|").slice(1, -1).map((cell) => cell.trim());
    const match = statusFocus.match(/^`([^`]*)` \/ (?:`([^`]*)`|(.+))$/);
    assert.ok(match, `shell registry status/focus cell must parse: ${name}`);
    return { name, owner: stripCode(owner), heading: stripCode(heading), status: match[1], focus: match[2] ?? match[3] };
  });
  assert.equal(rows.length, 22, "shell 05 must yield all 22 frozen registry rows");
  return Object.fromEntries(rows.map((row) => [row.name, row]));
}

function evidence(packet, mapping, skill, form, dimensions) {
  const row = { packet_id: packet, mapping_id: mapping, form, skill_or_objective_id: skill, dimension_correctness: Object.fromEntries(dimensions.map((id) => [id, true])), attempt_count: 1, hint_level: 0, confidence: null, misconception_tags: [], mastery_status: "mastered" };
  return Object.fromEntries(evidenceKeys.map((key) => [key, row[key]]));
}

function predecessor() {
  const aiShape = (form) => rp009.ai901_contract.forms[form].flatMap((item) => rp009.ai901_contract.dimensions.map((dimension) => `${item.id}.${dimension}`));
  return sanitizeOccludedFoldSave({
    version: OCCLUDED_FOLD_RECORD_VERSION, packetId: "RP-009", mappingId: "RP009-A3-OCCLUDED-FOLD", checkpoint: "occluded_fold_complete", continuation: "continuation", cityStateDelta: null, externalStateDelta: null, successor: null,
    retainedRp007Summary: { checkpoint: "braided_verge_complete", continuities: "distinct_visible_continuities", association: "recurrent_exposed_association", difference: "one_bounded_difference", junction: "closed_junction_unavailable", unity: null, cause: null, purpose: null },
    retainedRp008Summary: { checkpoint: "offset_reach_complete", retained_local_association: true, recurring_familiar_contact: 1, comparable_non_contact: 1, cross_family_contact: 1, unavailable_case: 1, universal: null, exclusive: null, unity: null, cause: null, purpose: null },
    edgeLedger: { observations: [...occludedFoldObservationIds], reconciliation: { mode: "bounded", correspondence: ["near_lamellar"], unmatched: ["far_unmatched"], ambiguous: { far_ambiguous: ["near_lamellar", "near_filament"] }, unavailable: ["outer_margin"], identity: null, topology: null, continuity: null, transformation: null, cause: null, purpose: null } },
    evidence: [evidence("RP-009", "RP009-A3-OCCLUDED-FOLD", "PY-017", "primary", rp009.python_contract.checks), evidence("RP-009", "RP009-A3-OCCLUDED-FOLD", "PY-017", "trace", Object.keys(occludedFoldPythonTraceAnswers)), evidence("RP-009", "RP009-A3-OCCLUDED-FOLD", "PY-017", "transfer", rp009.python_contract.checks), ...["primary", "retrieval", "transfer"].map((form) => evidence("RP-009", "RP009-A3-OCCLUDED-FOLD", "RP009-PROMPT-BOUNDARY-01", form, aiShape(form))), evidence("RP-009", "RP009-A3-OCCLUDED-FOLD", "RP009-PROMPT-BOUNDARY-01", "system_user_boundary_explanation", ["system_user_boundary"]), evidence("RP-009", "RP009-A3-OCCLUDED-FOLD", "RP009-PROMPT-BOUNDARY-01", "truth_authority_boundary_explanation", ["truth_authority_boundary"])],
  });
}

function releasedState() {
  return { shellVersion: OCCLUDED_FOLD_SHELL_VERSION, controllerVersion: OCCLUDED_FOLD_CONTROLLER_VERSION, packetId: "RP-009", phase: "OF-30 VERIFY + RETURN", boardState: "SC-10", activeGroup: "of30_restore", owner: "SYSTEM // EXPEDITION LEDGER", availableActions: [occludedFoldActions.notation, occludedFoldActions.returnInterval, occludedFoldActions.returnThreshold], cityStateDelta: null, externalStateDelta: null, successor: null };
}

function subject(commitOverride) {
  const prior = predecessor();
  let saved = null;
  let controller;
  const adapter = {
    predecessorsStable: () => true,
    commit(candidate) {
      if (commitOverride) return commitOverride(candidate, controller);
      saved = sanitizeCounterfieldSave(candidate);
      return saved ? { status: "committed", value: saved, rollbackVerified: true, predecessorBytesPreserved: true } : { status: "failed", rollbackVerified: true, predecessorBytesPreserved: true };
    },
    read: () => saved,
  };
  const route = createCounterfieldRouteState(releasedState());
  controller = createCounterfieldNormalController({ entrySourceState: route, releasedPredecessorState: releasedState(), predecessorBytes: JSON.stringify(prior), entryIntent: createCounterfieldRouteIntent(COUNTERFIELD_ROUTE_ACTION, "screen_reader", `td010-route-registry-${++eventId}`), adapter });
  return { controller, adapter, prior };
}

function dispatch(controller, action) {
  return controller.dispatch(createCounterfieldIntent(controller.getState(), action, "screen_reader", `td010-registry-action-${++eventId}`));
}

function update(controller, values) {
  for (const [key, value] of Object.entries(values)) controller.updateField(key, value);
}

function clientAnswers(form) {
  return Object.fromEntries(rp010.ai901_contract.forms[form].map((item) => [item.id, Object.fromEntries(rp010.ai901_contract.dimensions.map((dimension) => [dimension, item[dimension]]))]));
}

function fillClient(controller, form, answers = clientAnswers(form)) {
  for (const [id, values] of Object.entries(answers)) for (const [dimension, value] of Object.entries(values)) controller.updateField(`${id}.${dimension}`, value);
}

function enterLearning(controller) {
  dispatch(controller, counterfieldActions.inspect);
  for (const action of observationActions) dispatch(controller, action);
}

function passResponsibility(controller, index) {
  if (index === 0) update(controller, { learnerSource: counterfieldReferenceSources.primary });
  else if (index === 1) update(controller, counterfieldPythonTraceAnswers);
  else if (index === 2) update(controller, { learnerSource: counterfieldReferenceSources.transfer });
  else if (index <= 5) fillClient(controller, ["primary", "retrieval", "transfer"][index - 3]);
  else if (index === 6) update(controller, { clientFlowBoundary: counterfieldExplanationAnswers.clientFlowBoundary });
  else update(controller, { truthAuthorityBoundary: counterfieldExplanationAnswers.truthAuthorityBoundary });
  return dispatch(controller, [counterfieldActions.pythonPrimary, counterfieldActions.pythonTrace, counterfieldActions.pythonTransfer, counterfieldActions.clientPrimary, counterfieldActions.clientRetrieval, counterfieldActions.clientTransfer, counterfieldActions.clientFlowBoundary, counterfieldActions.truthAuthorityBoundary][index]);
}

function advanceToReview(controller) {
  enterLearning(controller);
  for (let index = 0; index < 8; index += 1) passResponsibility(controller, index);
}

function wrongResponsibility(controller, index) {
  if (index === 0 || index === 2) update(controller, { learnerSource: "request_record = {}" });
  else if (index === 1) update(controller, Object.fromEntries(Object.keys(counterfieldPythonTraceAnswers).map((key) => [key, `review_${key}_boundary`])));
  else if (index <= 5) {
    const form = ["primary", "retrieval", "transfer"][index - 3];
    const tag = rp010.ai901_contract.misconception_tags[0];
    fillClient(controller, form, Object.fromEntries(rp010.ai901_contract.forms[form].map((item) => [item.id, Object.fromEntries(rp010.ai901_contract.dimensions.map((dimension) => [dimension, tag]))])));
  } else if (index === 6) update(controller, { clientFlowBoundary: "review_clientFlowBoundary_without_world_inference" });
  else update(controller, { truthAuthorityBoundary: "review_truthAuthorityBoundary_without_world_inference" });
  return dispatch(controller, [counterfieldActions.pythonPrimary, counterfieldActions.pythonTrace, counterfieldActions.pythonTransfer, counterfieldActions.clientPrimary, counterfieldActions.clientRetrieval, counterfieldActions.clientTransfer, counterfieldActions.clientFlowBoundary, counterfieldActions.truthAuthorityBoundary][index]);
}

function assertRegistryState(actual, row, replacements = {}) {
  assert.equal(actual.owner, replacements.owner ?? row.owner, `${row.name} owner`);
  assert.equal(actual.heading, replacements.heading ?? row.heading, `${row.name} heading`);
  assert.equal(actual.statusMessage, row.status, `${row.name} status`);
  assert.equal(actual.focusIntent.target, replacements.focus ?? row.focus, `${row.name} focus`);
}

test("TD010 shell 05 governs genuine normal controller and rendered product owner/heading/status/focus", { timeout: 60_000 }, async () => {
  const registry = parseFrozenRegistry();
  const states = [];
  const routeReady = createCounterfieldRouteState(releasedState());
  states.push([registry["route ready"], routeReady]);
  const rejected = createCounterfieldNormalController({ entrySourceState: routeReady, releasedPredecessorState: releasedState(), predecessorBytes: JSON.stringify(predecessor()), entryIntent: createCounterfieldRouteIntent(COUNTERFIELD_ROUTE_ACTION, "screen_reader", "short"), adapter: { predecessorsStable: () => true } }).getState();
  states.push([registry["route rejection"], rejected, { heading: registry["route ready"].heading }]);

  const { controller } = subject();
  states.push([registry["CF-00"], controller.getState()]);
  dispatch(controller, counterfieldActions.inspect);
  states.push([registry["CF-10 ready/revisit"], controller.getState()]);
  for (const action of observationActions) dispatch(controller, action);

  const learningRows = ["PY primary", "PY trace", "PY transfer", "client primary", "client retrieval", "client transfer", "client-flow explanation", "truth/authority explanation"];
  const recoveryFocus = ["cf20-python-primary-first-failed", "cf20-python-trace-first-failed", "cf20-python-transfer-first-failed", "cf20-client-primary-first-failed", "cf20-client-retrieval-first-failed", "cf20-client-transfer-first-failed", "cf20-client-flow-explanation-failed", "cf20-truth-authority-explanation-failed"];
  for (let index = 0; index < learningRows.length; index += 1) {
    const row = registry[learningRows[index]];
    states.push([row, controller.getState()]);
    if (index === 0) {
      const forgedReview = dispatch(controller, counterfieldActions.prepareSave);
      states.push([registry["review ineligible"], forgedReview.state, { owner: row.owner, heading: row.heading, focus: row.focus }]);
    }
    const miss = wrongResponsibility(controller, index);
    assert.equal(miss.answerIncluded, false, `${learningRows[index]} miss remains answer-free`);
    assert.ok(miss.failedIds.length > 0, `${learningRows[index]} exposes actual failed IDs`);
    if (index >= 3 && index <= 5) assert.deepEqual(miss.misconceptionTags, [rp010.ai901_contract.misconception_tags[0]], `${learningRows[index]} exposes only actually scored allowlisted tags`);
    assert.equal(miss.state.privateWorkCleared, true);
    assert.equal(miss.state.transientWorkCleared, true);
    states.push([registry["scored miss"], miss.state, { focus: recoveryFocus[index] }]);
    const retry = dispatch(controller, counterfieldActions.retry);
    assert.equal(retry.state.activeGroup, ["cf20_python_primary", "cf20_python_trace", "cf20_python_transfer", "cf20_client_primary", "cf20_client_retrieval", "cf20_client_transfer", "cf20_client_flow_explanation", "cf20_truth_authority_explanation"][index]);
    const blank = dispatch(controller, [counterfieldActions.pythonPrimary, counterfieldActions.pythonTrace, counterfieldActions.pythonTransfer, counterfieldActions.clientPrimary, counterfieldActions.clientRetrieval, counterfieldActions.clientTransfer, counterfieldActions.clientFlowBoundary, counterfieldActions.truthAuthorityBoundary][index]);
    assert.equal(blank.status, "required_field_missing", `${learningRows[index]} retry is genuinely blank`);
    assert.equal(blank.tokenConsumed, false);
    passResponsibility(controller, index);
  }

  states.push([registry["four-scope review"], controller.getState()]);
  states.push([registry["save confirmation"], dispatch(controller, counterfieldActions.prepareSave).state]);
  const committed = dispatch(controller, counterfieldActions.save);
  states.push([registry["CF-30 restore"], committed.state]);
  states.push([registry["inert LOOK"], dispatch(controller, counterfieldActions.look).state, { heading: registry["CF-30 restore"].heading }]);

  let transactionState;
  const transactional = subject((candidate, activeController) => { transactionState = activeController.getState(); return { status: "committed", value: sanitizeCounterfieldSave(candidate), rollbackVerified: true, predecessorBytesPreserved: true }; });
  advanceToReview(transactional.controller); dispatch(transactional.controller, counterfieldActions.prepareSave); dispatch(transactional.controller, counterfieldActions.save);
  states.push([registry.transaction, transactionState]);

  for (const [rollbackVerified, rowName] of [[true, "verified rollback"], [false, "rollback unverified"]]) {
    const failed = subject(() => ({ status: "failed", rollbackVerified, predecessorBytesPreserved: rollbackVerified }));
    advanceToReview(failed.controller); dispatch(failed.controller, counterfieldActions.prepareSave);
    states.push([registry[rowName], dispatch(failed.controller, counterfieldActions.save).state]);
  }
  const tour = createCounterfieldNormalController({ mode: "demo_tour", adapter: { predecessorsStable: () => { throw new Error("Tour must not read campaign state"); } } }).getState();
  states.push([registry["Tour rejection"], tour]);
  assert.deepEqual([...new Set(states.map(([row]) => row.name))].sort(), Object.keys(registry).sort(), "every shell-frozen registry row must have genuine normal-controller coverage");

  const vite = await createServer({ root: fileURLToPath(new URL("..", import.meta.url)), appType: "custom", server: { middlewareMode: true }, logLevel: "silent" });
  try {
    const { Counterfield } = await vite.ssrLoadModule("/src/Counterfield.jsx");
    for (const [row, state, replacements = {}] of states) {
      assertRegistryState(state, row, replacements);
      const markup = renderToStaticMarkup(React.createElement(Counterfield, { state, onAction() {}, onFieldChange() {} }));
      assert.ok(markup.includes(`data-active-owner="${state.owner}"`), `${row.name} rendered owner attribute`);
      assert.ok(markup.includes(`>${state.owner}</p>`), `${row.name} rendered owner text`);
      assert.ok(markup.includes(`>${state.heading}</h2>`), `${row.name} rendered heading`);
      assert.ok(markup.includes(`>${state.statusMessage}</p>`), `${row.name} rendered atomic status`);
      assert.ok(markup.includes(`id="${state.focusIntent.target}"`), `${row.name} rendered focus target`);
      for (const id of state.failedPublicIds ?? []) assert.ok(markup.includes(`>${id}</li>`), `${row.name} renders actual failed ID ${id}`);
      for (const tag of state.failedMisconceptionTags ?? []) assert.ok(markup.includes(`>${tag}</li>`), `${row.name} renders actual misconception tag ${tag}`);
    }
  } finally {
    await vite.close();
  }
});

test("TD010 normal client-primary miss keeps actual dimensions/tags and focuses the client failed control", () => {
  const { controller } = subject();
  enterLearning(controller);
  for (let index = 0; index < 3; index += 1) passResponsibility(controller, index);
  const form = "primary";
  const tag = rp010.ai901_contract.misconception_tags[0];
  const wrong = Object.fromEntries(rp010.ai901_contract.forms[form].map((item) => [item.id, Object.fromEntries(rp010.ai901_contract.dimensions.map((dimension) => [dimension, tag]))]));
  fillClient(controller, form, wrong);
  const expected = evaluateCounterfieldClientFlow(form, wrong);
  const miss = dispatch(controller, counterfieldActions.clientPrimary);
  assert.deepEqual(miss.failedIds, Object.keys(expected.correctness).filter((id) => !expected.correctness[id]));
  assert.deepEqual(miss.misconceptionTags, expected.misconceptionTags);
  assert.equal(miss.state.focusIntent.target, "cf20-client-primary-first-failed");
  assert.deepEqual(miss.state.failedPublicIds, miss.failedIds);
  assert.deepEqual(miss.state.failedMisconceptionTags, miss.misconceptionTags);
  assert.equal(miss.state.privateWorkCleared, true);
  assert.equal(miss.state.transientWorkCleared, true);
  assert.equal(miss.state.statusMessage, parseFrozenRegistry()["scored miss"].status);
  assert.equal(dispatch(controller, counterfieldActions.retry).state.activeGroup, "cf20_client_primary");
  assert.equal(dispatch(controller, counterfieldActions.clientPrimary).status, "required_field_missing");
});
