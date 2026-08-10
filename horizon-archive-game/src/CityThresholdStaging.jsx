import { useLayoutEffect, useMemo, useRef, useState } from "react";
import cityAccessImage from "../../Visual Direction/Production Masters/2026-07-15-photorealistic-demo/city-threshold-access-master.png";
import cityBoundaryImage from "../../Visual Direction/Production Masters/2026-07-15-photorealistic-demo/city-threshold-boundary-master.png";
import cityOverviewImage from "../../Visual Direction/Production Masters/2026-07-15-photorealistic-demo/city-threshold-overview-master.png";
import {
  CITY_THRESHOLD_SAVE_KEY,
  anchorExplanationDimensions,
  anchorPacketStarter,
  anchorProbeChecks,
  cityThresholdHotspots,
  commitCityThresholdAnchor,
  completeCum01Remediation,
  createCityThresholdSave,
  cum01Forms,
  cum01RemediationRoutes,
  evaluateAnchorExplanation,
  evaluateAnchorPacketSource,
  evaluateCum01Form,
  evaluateSafetyExplanation,
  getCityThresholdResumeBoard,
  getCum01Options,
  safetyExplanationDimensions,
  sanitizeCityThresholdSave,
  withAnchorExplanation,
  withAnchorProbeResult,
  withCum01Result,
  withSafetyExplanation,
} from "./cityThresholdExercise.js";
import { CanonicalGameFrame } from "./CanonicalGameFrame.jsx";
import { custodyLedgerRouteActions, custodyLedgerRouteOwners } from "./CustodyLedgerNormalRoute.js";

function formatToken(value) {
  return String(value ?? "").replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function loadStagingSave() {
  try {
    return sanitizeCityThresholdSave(JSON.parse(localStorage.getItem(CITY_THRESHOLD_SAVE_KEY) || "null")) ?? createCityThresholdSave();
  } catch {
    return createCityThresholdSave();
  }
}

function hotspotStyle(rect) {
  const [x, y, width, height] = rect.canonical;
  const [narrowX, narrowY, narrowWidth, narrowHeight] = rect.narrow;
  return {
    "--city-left": `${(x / 640) * 100}%`,
    "--city-top": `${(y / 360) * 100}%`,
    "--city-width": `${(width / 640) * 100}%`,
    "--city-height": `${(height / 360) * 100}%`,
    "--city-narrow-left": `${(narrowX / 320) * 100}%`,
    "--city-narrow-top": `${(narrowY / 180) * 100}%`,
    "--city-narrow-width": `${(narrowWidth / 320) * 100}%`,
    "--city-narrow-height": `${(narrowHeight / 180) * 100}%`,
  };
}

function CityHotspot({ rect, label, disabled = false, onClick, state }) {
  return (
    <button className="city-hotspot" style={hotspotStyle(rect)} disabled={disabled} onClick={onClick} data-observed={state ? "true" : undefined}>
      <span>{label}</span>
    </button>
  );
}

const explanationOptions = {
  list_role: ["ordered_observation_collection", "named_nested_state", "string_interchange_requires_parsing_and_serialization"],
  dictionary_role: ["named_nested_state", "ordered_observation_collection", "string_interchange_requires_parsing_and_serialization"],
  json_role: ["string_interchange_requires_parsing_and_serialization", "named_nested_state", "ordered_observation_collection"],
};

const safetyOptions = {
  valid_output_boundary: ["valid_output_is_not_authority_to_act", "valid_output_authorizes_the_requested_action", "valid_output_proves_identity_acceptance"],
  exam_claim_boundary: ["internal_readiness_is_not_an_exam_guarantee", "internal_readiness_guarantees_exam_success", "confidence_can_override_a_miss"],
  external_action_boundary: ["external_action_needs_separate_scope_authority_and_privacy_review", "course_output_is_enough_authority", "local_validation_authorizes_disclosure"],
};

const cityPlates = {
  overview: { native: cityOverviewImage, narrow: cityOverviewImage },
  boundary: { native: cityBoundaryImage, narrow: cityBoundaryImage },
  access: { native: cityAccessImage, narrow: cityAccessImage },
};

function SelectExplanation({ dimensions, options, values, onChange }) {
  return dimensions.map((dimension) => (
    <label key={dimension}>
      <span>{formatToken(dimension)}</span>
      <select value={values[dimension] ?? ""} onChange={(event) => onChange({ ...values, [dimension]: event.target.value })}>
        <option value="">Choose one</option>
        {options[dimension].map((option) => <option key={option} value={option}>{formatToken(option)}</option>)}
      </select>
    </label>
  ));
}

function AnchorProbe({ save, updateSave }) {
  const [source, setSource] = useState(anchorPacketStarter);
  const [result, setResult] = useState(null);
  const [explanation, setExplanation] = useState({});
  const checksComplete = save.python.masteryStatus === "checks_complete" || save.python.masteryStatus === "mastered";

  function runChecks() {
    const nextResult = evaluateAnchorPacketSource(source);
    setResult(nextResult);
    updateSave(withAnchorProbeResult(save, nextResult));
  }

  function submitExplanation(event) {
    event.preventDefault();
    const nextResult = evaluateAnchorExplanation(explanation);
    updateSave(withAnchorExplanation(save, nextResult));
  }

  return (
    <section className="city-learning-panel" aria-labelledby="anchor-probe-heading">
      <p className="eyebrow">EXPEDITION OVERLAY // PY-020 // COURSE-AUTHORED OFFLINE PROBE</p>
      <h2 id="anchor-probe-heading" tabIndex="-1">Anchor packet transfer</h2>
      {!checksComplete ? (
        <>
          <p>Transform the supplied JSON string. Preserve the existing observations, <code>continuation</code>, and <code>city_state_delta=None</code>.</p>
          <textarea aria-label="Anchor packet Python source" spellCheck="false" value={source} onChange={(event) => { setSource(event.target.value); setResult(null); }} />
          <div className="city-overlay-actions">
            <button type="button" onClick={() => setSource(anchorPacketStarter)}>Restore fresh probe</button>
            <button type="button" className="primary-action" onClick={runChecks}>Run 10 checks</button>
          </div>
          <ol className="city-check-list" aria-live="polite">
            {anchorProbeChecks.map((check) => <li key={check} data-pass={result?.checks?.[check] === true ? "true" : result ? "false" : undefined}>{formatToken(check)}: {result ? (result.checks[check] ? "PASS" : "REPAIR") : "NOT RUN"}</li>)}
          </ol>
          <p role="status">{result ? `${result.score}/10. ${result.passed ? "All deterministic checks passed." : "Repair every named check and rerun."}` : "Working source remains session-only and is never saved."}</p>
        </>
      ) : (
        <form className="city-explanation-form" onSubmit={submitExplanation}>
          <p>The 10/10 run is retained. Explain the three structures without notes.</p>
          <SelectExplanation dimensions={anchorExplanationDimensions} options={explanationOptions} values={explanation} onChange={setExplanation} />
          <button className="primary-action" type="submit">Check structure explanation</button>
        </form>
      )}
    </section>
  );
}

function remediationIds(save, form) {
  const correctness = form === "primary" ? save.cum01.primaryCorrectness : save.cum01.transferCorrectness;
  const ids = new Set();
  for (const item of cum01Forms[form]) {
    if (correctness[item.id]?.decision !== true || correctness[item.id]?.reason !== true) item.objective_ids.forEach((id) => ids.add(id));
  }
  return [...new Set([...ids].map((id) => cum01RemediationRoutes[id]).filter(Boolean))];
}

function Cum01Checkpoint({ save, updateSave }) {
  const primaryComplete = save.cum01.masteryStatus === "primary_complete" || save.cum01.masteryStatus === "transfer_complete" || save.cum01.masteryStatus === "mastered";
  const transferComplete = save.cum01.masteryStatus === "transfer_complete" || save.cum01.masteryStatus === "mastered";
  const inRemediation = save.checkpoint.endsWith("_remediation");
  const form = primaryComplete ? "transfer" : "primary";
  const items = cum01Forms[form];
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState({ decision: "", reason: "" });
  const [safety, setSafety] = useState({});
  const item = items[index];

  function recordItem(event) {
    event.preventDefault();
    const nextAnswers = { ...answers, [item.id]: current };
    setAnswers(nextAnswers);
    setCurrent({ decision: "", reason: "" });
    if (index < items.length - 1) {
      setIndex(index + 1);
      return;
    }
    updateSave(withCum01Result(save, evaluateCum01Form(form, nextAnswers)));
    setAnswers({});
    setIndex(0);
  }

  function submitSafety(event) {
    event.preventDefault();
    updateSave(withSafetyExplanation(save, evaluateSafetyExplanation(safety)));
  }

  if (inRemediation) {
    const missedForm = save.checkpoint.startsWith("cum_transfer") ? "transfer" : "primary";
    return (
      <section className="city-learning-panel" aria-labelledby="cum-remediation-heading">
        <p className="eyebrow">901 TEACHER // MAPPED REMEDIATION</p>
        <h2 id="cum-remediation-heading">CUM-01 repair route</h2>
        <p>Every missed decision/reason pair must be reviewed. The next attempt is a fresh blank {missedForm} form.</p>
        <ul>{remediationIds(save, missedForm).map((lessonId) => <li key={lessonId}>{lessonId}</li>)}</ul>
        <button className="primary-action" onClick={() => updateSave(completeCum01Remediation(save))}>Remediation reviewed; open blank form</button>
      </section>
    );
  }

  if (transferComplete) {
    return (
      <form className="city-learning-panel city-explanation-form" aria-labelledby="cum-safety-heading" onSubmit={submitSafety}>
        <p className="eyebrow">CUM-01 // CLOSED-NOTE SAFETY AND CLAIM GATE</p>
        <h2 id="cum-safety-heading">Bound the claim</h2>
        <SelectExplanation dimensions={safetyExplanationDimensions} options={safetyOptions} values={safety} onChange={setSafety} />
        <button className="primary-action" type="submit">Check safety explanation</button>
      </form>
    );
  }

  return (
    <form className="city-learning-panel" aria-labelledby="cum-item-heading" onSubmit={recordItem}>
      <p className="eyebrow">CUM-01 // {form.toUpperCase()} // {index + 1} OF 8</p>
      <h2 id="cum-item-heading">{item.id}: {formatToken(item.topic)}</h2>
      <p>{item.prompt}</p>
      <label>
        <span>Decision</span>
        <select required value={current.decision} onChange={(event) => setCurrent({ ...current, decision: event.target.value })}>
          <option value="">Choose a decision</option>
          {getCum01Options(form, "decision").map((option) => <option key={option} value={option}>{formatToken(option)}</option>)}
        </select>
      </label>
      <label>
        <span>Reason</span>
        <select required value={current.reason} onChange={(event) => setCurrent({ ...current, reason: event.target.value })}>
          <option value="">Choose a reason</option>
          {getCum01Options(form, "reason").map((option) => <option key={option} value={option}>{formatToken(option)}</option>)}
        </select>
      </label>
      <p>Course-authored practice, not Microsoft exam content. Confidence and timing do not change correctness.</p>
      <button className="primary-action" type="submit">{index === 7 ? `Submit blank ${form} form` : "Record item"}</button>
    </form>
  );
}

export function CityThresholdStaging({
  onFollowCivicRoute,
  onEnterAdjacentSurvey,
  adjacentSurveyAction,
}) {
  const [save, setSave] = useState(loadStagingSave);
  const [board, setBoard] = useState(() => getCityThresholdResumeBoard(loadStagingSave()));
  const [observations, setObservations] = useState({});
  const [anchorSelected, setAnchorSelected] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(() => loadStagingSave().checkpoint !== "threshold_entry" && loadStagingSave().checkpoint !== "anchor_complete");
  const [message, setMessage] = useState("Heat, bridge lights, vapor, and maintenance cycles were already operating when the expedition arrived. No occupant is visible.");
  const cityHeadingRef = useRef(null);
  const cityWorldRef = useRef(null);
  const overlayRef = useRef(null);
  const overlayTriggerRef = useRef(null);
  const restoreAccessFocusRef = useRef(false);
  const routeActionRef = useRef(null);
  const adjacentSurveyActionRef = useRef(null);

  useLayoutEffect(() => {
    if (!overlayOpen && board === "SC-02-00") cityHeadingRef.current?.focus({ preventScroll: true });
  }, []);

  useLayoutEffect(() => {
    if (!overlayOpen) return;
    const target = overlayRef.current?.querySelector("h2, select:not([disabled]), textarea:not([disabled]), button:not([disabled])");
    if (target instanceof HTMLElement) {
      if (target.matches("h2") && !target.hasAttribute("tabindex")) target.tabIndex = -1;
      target.focus({ preventScroll: true });
    }
  }, [overlayOpen, save.checkpoint]);

  useLayoutEffect(() => {
    if (overlayOpen || !restoreAccessFocusRef.current) return;
    restoreAccessFocusRef.current = false;
    const target = cityWorldRef.current?.querySelector("button:not([disabled])") ?? cityHeadingRef.current;
    target?.focus({ preventScroll: true });
  }, [overlayOpen, board]);

  useLayoutEffect(() => {
    if (board === "SC-02-50" && save.checkpoint === "anchor_complete") {
      (onEnterAdjacentSurvey ? adjacentSurveyActionRef : routeActionRef)
        .current?.focus({ preventScroll: true });
    }
  }, [board, save.checkpoint, onEnterAdjacentSurvey]);

  function updateSave(next) {
    const safe = sanitizeCityThresholdSave(next) ?? createCityThresholdSave();
    setSave(safe);
    localStorage.setItem(CITY_THRESHOLD_SAVE_KEY, JSON.stringify(safe));
    if (safe.checkpoint === "anchor_complete") {
      setOverlayOpen(false);
      setBoard("SC-02-40");
      setMessage("Local survey anchor recorded. No external request or irreversible action occurred.");
    }
  }

  const showPython = save.python.masteryStatus !== "mastered";
  const canCommit = save.python.masteryStatus === "mastered" && save.cum01.masteryStatus === "mastered";
  const boardLayer = board === "SC-02-10" ? "boundary" : board === "SC-02-20" ? "access" : "overview";
  const cityPlate = cityPlates[boardLayer];
  const visibleStatus = useMemo(() => `${board} // continuation unchanged // city_state_delta=None`, [board]);

  function cancelOverlay() {
    restoreAccessFocusRef.current = true;
    setOverlayOpen(false);
    setBoard("SC-02-20");
    setAnchorSelected(false);
    setMessage("Working source and unsubmitted choices cleared. The city remains unchanged.");
  }

  function handleOverlayKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      cancelOverlay();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = [...(overlayRef.current?.querySelectorAll(
      'button:not([disabled]), select:not([disabled]), textarea:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ) ?? [])].filter((element) => element instanceof HTMLElement && !element.hidden);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const activeIsControl = focusable.includes(document.activeElement);
    if (event.shiftKey && (!activeIsControl || document.activeElement === first)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (!activeIsControl || document.activeElement === last)) {
      event.preventDefault();
      first.focus();
    }
  }

  function renderHotspots() {
    if (board === "SC-02-00") return <>
      <CityHotspot rect={cityThresholdHotspots[board].cycles} label="OBSERVE OPERATING CYCLES" state={observations.cycles} onClick={() => { setObservations({ ...observations, cycles: true }); setMessage("SCENE // SENSOR RECORD: Heat, light, vapor, and maintenance cycles were already operating."); }} />
      <CityHotspot rect={cityThresholdHotspots[board].boundary} label="TRACE MAINTENANCE" disabled={!observations.cycles} onClick={() => { setObservations({ ...observations, boundary: true }); setBoard("SC-02-10"); setMessage("Small maintenance forms stop at a seam the expedition map does not share."); }} />
      <CityHotspot rect={cityThresholdHotspots[board].routePreview} label="INSPECT LIT BRIDGE // ROUTE LOCKED" onClick={() => setMessage("SYSTEM // EXPEDITION STATE: The bridge is already lit. A local record is incomplete.")} />
    </>;
    if (board === "SC-02-10") return <>
      <CityHotspot rect={cityThresholdHotspots[board].stopSeam} label="INSPECT STOP SEAM" state={observations.stopSeam} onClick={() => { setObservations({ ...observations, stopSeam: true }); setMessage("SCENE // SENSOR RECORD: Maintenance forms stop at the physical seam."); }} />
      <CityHotspot rect={cityThresholdHotspots[board].mapDivision} label="INSPECT MAP DIVISION" state={observations.mapDivision} onClick={() => { setObservations({ ...observations, mapDivision: true }); setMessage("PILOT // FLIGHT RECORDER: My map division is separate from the physical seam."); }} />
      <CityHotspot rect={cityThresholdHotspots[board].detailReturn} label="RETURN TO THRESHOLD" onClick={() => { setBoard("SC-02-00"); setMessage("The unchanged threshold overview is restored."); }} />
    </>;
    if (board === "SC-02-20") return <>
      <CityHotspot rect={cityThresholdHotspots[board].environmental} label="OBSERVE ENVIRONMENTAL ACCESS" state={observations.environmental} onClick={() => { setObservations({ ...observations, environmental: true }); setMessage("SCENE // SENSOR RECORD: Environmental circulation remains open."); }} />
      <CityHotspot rect={cityThresholdHotspots[board].identity} label="OBSERVE CLOSED RECORD APERTURE" state={observations.identity} onClick={() => { setObservations({ ...observations, identity: true }); setMessage("SCENE // SENSOR RECORD: Identity-bearing records remain closed."); }} />
      <CityHotspot rect={cityThresholdHotspots[board].anchorNext} label="ESTABLISH SURVEY POINT" disabled={!observations.environmental || !observations.identity} onClick={() => { setBoard("SC-02-30"); setMessage("SYSTEM // EXPEDITION STATE: Select the bounded survey coordinate."); }} />
      <CityHotspot rect={cityThresholdHotspots[board].detailReturn} label="RETURN TO THRESHOLD" onClick={() => { setBoard("SC-02-00"); setMessage("The unchanged threshold overview is restored."); }} />
    </>;
    if (board === "SC-02-30") return <CityHotspot rect={cityThresholdHotspots[board].anchor} label={anchorSelected ? "RECORD LOCAL ANCHOR" : "SELECT SURVEY COORDINATE"} state={anchorSelected} onClick={(event) => {
      if (!anchorSelected) { setAnchorSelected(true); setMessage("Bounded expedition coordinate selected. No city state changed."); return; }
      overlayTriggerRef.current = event.currentTarget;
      const next = sanitizeCityThresholdSave({ ...save, checkpoint: "python_pending" });
      updateSave(next);
      setOverlayOpen(true);
    }} />;
    return <CityHotspot rect={cityThresholdHotspots[board].forward} label="ENTER CIVIC DISTRICT" onClick={() => {
      setBoard("SC-02-50");
      setMessage("The reversible route is recorded. The successor packet remains behind the staging boundary.");
    }} />;
  }

  return (
    <CanonicalGameFrame enabled>
      <main className="game-shell city-threshold-screen" data-scene="city-threshold" data-board={board} data-city-layer={boardLayer} data-staging-only="RP-001">
        <header className="city-entry-header" data-copy-slot="CITY-ENTRY-HEAD">
          <p className="eyebrow">Chapter IV // local survey</p>
          <h1 ref={cityHeadingRef} tabIndex="-1">City Threshold</h1>
          <p data-copy-slot="CITY-ENTRY-STATUS">Heat, bridge lights, vapor, and maintenance cycles were already operating when the expedition arrived.</p>
        </header>
        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{message}</p>
        <section ref={cityWorldRef} className="city-world" aria-label="City Threshold Survey Anchor staged scene" inert={overlayOpen ? true : undefined}>
          <img className="city-world-plate city-world-plate-native" src={cityPlate.native} alt="An immense empty underground civic landscape already operating above geothermal chasms" />
          <img className="city-world-plate city-world-plate-narrow" src={cityPlate.narrow} alt="" aria-hidden="true" />
          <div className="city-cycle-layer" aria-hidden="true"><i /><i /><i /></div>
          {renderHotspots()}
        </section>
        <section className="city-command-panel" aria-label="City Threshold expedition controls" inert={overlayOpen ? true : undefined}>
          <div>
            <strong>{visibleStatus}</strong>
            <p>{message}</p>
          </div>
          <div className="city-command-actions">
            {board === "SC-02-10" && <button disabled={!observations.stopSeam || !observations.mapDivision} onClick={() => { setBoard("SC-02-20"); setMessage("Utility access and identity-bearing record access remain distinct."); }}>COMPARE BOUNDARIES</button>}
            {board === "SC-02-30" && <button onClick={() => { setBoard("SC-02-20"); setAnchorSelected(false); setMessage("Anchor selection cancelled. No durable state changed."); }}>CANCEL</button>}
            {board === "SC-02-50" && save.checkpoint === "anchor_complete" && onFollowCivicRoute && <>
              <p id="civic-route-owner">{custodyLedgerRouteOwners.pilot}</p>
              <button
                ref={routeActionRef}
                className="primary-action"
                type="button"
                aria-describedby="civic-route-owner"
                onClick={onFollowCivicRoute}
              >
                {custodyLedgerRouteActions.enter}
              </button>
            </>}
            {board === "SC-02-50"
              && save.checkpoint === "anchor_complete"
              && onEnterAdjacentSurvey
              && adjacentSurveyAction && <>
              <p id="adjacent-survey-owner">{custodyLedgerRouteOwners.pilot}</p>
              <button
                ref={adjacentSurveyActionRef}
                className="primary-action"
                type="button"
                aria-describedby="adjacent-survey-owner"
                onClick={onEnterAdjacentSurvey}
              >
                {adjacentSurveyAction}
              </button>
            </>}
          </div>
        </section>
        {overlayOpen && (
          <section ref={overlayRef} className="city-overlay" role="dialog" aria-modal="true" aria-label="Expedition local record overlay" onKeyDown={handleOverlayKeyDown}>
            {showPython ? <AnchorProbe save={save} updateSave={updateSave} /> : canCommit ? (
              <section className="city-learning-panel" aria-labelledby="confirm-local-record-heading">
                <p className="eyebrow">SYSTEM // EXPEDITION STATE</p>
                <h2 id="confirm-local-record-heading">Confirm local record</h2>
                <p>Both learning gates passed. This one confirmation sets only the two expedition flags. The city receives no request and no physical delta.</p>
                <button className="primary-action" onClick={() => updateSave(commitCityThresholdAnchor(save))}>Confirm local record</button>
              </section>
            ) : <Cum01Checkpoint save={save} updateSave={updateSave} />}
            <button className="city-overlay-cancel" onClick={cancelOverlay}>Cancel and return to access detail</button>
          </section>
        )}
      </main>
    </CanonicalGameFrame>
  );
}
