import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import ruinsAvailableImage from "../../Concept Art Book/production-pixel/AB-01/ab01-available-640x360.png";
import ruinsActiveImage from "../../Concept Art Book/production-pixel/AB-01/ab01-active-640x360.png";
import ruinsCompleteImage from "../../Concept Art Book/production-pixel/AB-01/ab01-complete-640x360.png";
import ruinsAvailableNarrowImage from "../../Concept Art Book/production-pixel/AB-01/ab01-available-320x180.png";
import ruinsActiveNarrowImage from "../../Concept Art Book/production-pixel/AB-01/ab01-active-320x180.png";
import ruinsCompleteNarrowImage from "../../Concept Art Book/production-pixel/AB-01/ab01-complete-320x180.png";
import automatonImage from "../../Concept Art Book/images/witness-corridor-evidence-terminal-v1.png";
import cityImage from "../../Concept Art/Underground City.png";
import evidenceAudio from "../../curriculum/lessons/L-05-07/evidence/basin_audio.wav";
import routePrimaryStarter from "../../curriculum/lessons/L-01-02/route_marker_primary.py?raw";
import routeTransferStarter from "../../curriculum/lessons/L-01-02/route_marker_transfer.py?raw";
import { PixelMeadow } from "./PixelMeadow.jsx";
import { CanonicalGameFrame } from "./CanonicalGameFrame.jsx";
import { MEADOW_PIXEL_HOTSPOTS } from "./pixelMeadow.js";
import { getResumeState, validateAnswer } from "./gameLogic.js";
import {
  evaluateTerminalCode,
  sanitizeExerciseEvidence,
  terminalExercise,
  updateExerciseEvidence,
} from "./terminalExercise.js";
import {
  advanceWorkloadSession,
  createWorkloadSession,
  evaluateWorkloadSelection,
  getWorkloadItems,
  getWorkloadOutcome,
  revealWorkloadHint,
  sanitizeWorkloadEvidence,
  updateWorkloadEvidence,
  workloadChoices,
  workloadSortExercise,
} from "./workloadSortExercise.js";
import {
  evidenceManifest,
  evidencePacketExercise,
  evidenceRemediation,
  evidenceStarter,
  evidenceTelemetry,
  evaluateEvidencePacket,
  sanitizeEvidencePacketMastery,
  updateEvidencePacketMastery,
} from "./evidencePacketExercise.js";
import {
  evaluateRoutePrediction,
  evaluateRouteRetrieval,
  evaluateRouteSource,
  routeMarkerExercise,
  routeRemediation,
  routeRetrieval,
  sanitizeRouteMarkerMastery,
  updateRouteMarkerMastery,
} from "./routeMarkerExercise.js";
import {
  calibrationExercise,
  calibrationRemediation,
  calibrationRetrieval,
  calibrationStarters,
  calibrationTracebacks,
  evaluateCalibrationDiagnosis,
  evaluateCalibrationRetrieval,
  evaluateCalibrationSource,
  sanitizeCalibrationMastery,
  updateCalibrationMastery,
} from "./calibrationExercise.js";
import {
  evaluateResponsibleAIScenario,
  responsibleAIDimensions,
  responsibleAIExercise,
  responsibleAIPrimaryScenarios,
  responsibleAIPrinciples,
  responsibleAIRemediation,
  sanitizeResponsibleAIEvidence,
  updateResponsibleAIEvidence,
} from "./responsibleAIExercise.js";

const SAVE_KEY = "horizon-archive-prologue-v1";

const scenes = [
  {
    id: "meadow",
    chapter: "I",
    location: "Glass Meadow",
    hotspotLabel: "Petal terminal",
    hotspot: MEADOW_PIXEL_HOTSPOTS.primary,
    secondaryHotspots: [{
      id: "route-marker",
      label: "route-marker Terminal",
      hotspot: MEADOW_PIXEL_HOTSPOTS.routeMarker,
    }],
    prompt: "A dormant interface waits inside the crystal bloom. Wake it with one line of Python.",
    question: "Write the line that displays SIGNAL FOUND.",
    answer: 'print("SIGNAL FOUND")',
    validate: (value) => validateAnswer("meadow", value),
    hint: "Python displays text with print(). Put the text inside quotation marks.",
    success: "The bloom answers in your own alphabet. It did not translate the signal. It was already listening for you.",
    routeSuccess: "The route marker accepts both forms. A narrow path illuminates toward the next survey site.",
  },
  {
    id: "ruins",
    chapter: "II",
    location: "The Drowned Archive",
    imageAlt: "Pixel-built flooded basin with a grounded three-fin Workload Sort Terminal, bent causeway, Tidal Lens landmark, and right stair exit",
    hotspotLabel: "grounded Workload Sort Terminal",
    hotspot: {
      left: "24.375%", top: "56.94%", width: "10.625%", height: "21.11%",
      narrow: { left: "20%", top: "54%", width: "24%", height: "43%" },
    },
    prompt: "A grounded three-fin Terminal waits beside the causeway. The suspended archive above it remains silent.",
    question: "Create a variable named pilot_name containing the text MARTIN.",
    answer: 'pilot_name = "MARTIN"',
    validate: (value) => validateAnswer("ruins", value),
    hint: "Use a variable name, an equals sign, then quoted text.",
    success: "Identity accepted. The structure rotates once, like an eye deciding not to close.",
  },
  {
    id: "automaton",
    chapter: "III",
    location: "The Witness Corridor",
    image: automatonImage,
    imageAlt: "Shadowed alien corridor with a grounded three-fin Evidence Terminal on the left and a separate fallen automaton on the right",
    primaryHotspotId: "evidence-terminal",
    hotspotLabel: "grounded Evidence Terminal",
    hotspot: {
      left: "31.5%", top: "54%", width: "13%", height: "45%",
      narrow: { left: "0%", top: "44%", width: "35%", height: "34%" },
    },
    secondaryHotspots: [{
      id: "fallen-automaton",
      label: "fallen automaton",
      hotspot: {
        left: "49%", top: "18%", width: "39%", height: "81%",
        narrow: { left: "47%", top: "18%", width: "53%", height: "61%" },
      },
    }],
    prompt: "The grounded Terminal presents a blank inspection surface and three quiet evidence channels.",
    question: "Set archive_open to the Boolean value true in Python.",
    answer: "archive_open = True",
    validate: (value) => validateAnswer("automaton", value),
    hint: "Python Booleans begin with capital letters and do not use quotation marks.",
    success: "Its lens opens. A voice older than the corridor says: ‘Continuity confirmed. Witness incomplete.’",
  },
];

function TerminalShell({ exerciseId, title, filename, lessonId, statusText, closeLabel = "Close Terminal", restoreFocusTo, onClose, children }) {
  const dialogRef = useRef(null);
  const titleRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    triggerRef.current = restoreFocusTo ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
    titleRef.current?.focus({ preventScroll: true });
    return () => {
      const trigger = triggerRef.current;
      requestAnimationFrame(() => {
        const target = trigger?.isConnected && !trigger.hasAttribute("disabled")
          ? trigger
          : document.querySelector('[data-terminal-focus-fallback]:not([disabled])');
        target?.focus({ preventScroll: true });
      });
    };
  }, []);

  function handleDialogKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      onClose();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = [...dialogRef.current.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, audio[controls], [tabindex]:not([tabindex="-1"])',
    )].filter((element) => element.getClientRects().length > 0 && !element.closest("[inert]"));
    if (!focusable.length) {
      event.preventDefault();
      titleRef.current?.focus();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && (document.activeElement === first || !focusable.includes(document.activeElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <section ref={dialogRef} className="terminal-workbench" role="dialog" aria-modal="true" aria-labelledby="terminal-title" data-terminal-exercise={exerciseId} onKeyDown={handleDialogKeyDown}>
      <header className="terminal-titlebar">
        <div>
          <span className="machine-mark" aria-hidden="true">◇</span>
          <strong ref={titleRef} id="terminal-title" tabIndex="-1">MACHINE TERMINAL // {title}</strong>
        </div>
        <button type="button" onClick={onClose} aria-label={closeLabel}>{closeLabel === "Exit Calibration" ? "Exit" : "Close"}</button>
      </header>
      <div className="terminal-tabbar" role="tablist" aria-label="Open files">
        <button type="button" role="tab" aria-selected="true">{filename}</button>
        <span>{statusText ? `${statusText} · ` : ""}Lesson {lessonId}</span>
      </div>
      {children}
    </section>
  );
}

function getHotspotStyle(hotspot) {
  return {
    "--hotspot-left": hotspot.left,
    "--hotspot-top": hotspot.top,
    "--hotspot-width": hotspot.width,
    "--hotspot-height": hotspot.height,
    "--hotspot-narrow-left": hotspot.narrow?.left ?? hotspot.left,
    "--hotspot-narrow-top": hotspot.narrow?.top ?? hotspot.top,
    "--hotspot-narrow-width": hotspot.narrow?.width ?? hotspot.width,
    "--hotspot-narrow-height": hotspot.narrow?.height ?? hotspot.height,
  };
}

function formatChoice(value) {
  return value.replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function loadSave() {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY) || "null");
    if (!saved || !Array.isArray(saved.completed)) return null;

    // Only a contiguous, known completion prefix is trusted. This prevents a
    // stale or edited save from skipping required questions or unlocking the
    // ending early.
    const routeMarkerMastery = sanitizeRouteMarkerMastery(saved.routeMarkerMastery);
    const completed = saved.completed[0] === "meadow" && routeMarkerMastery?.masteryStatus !== "mastered"
      ? []
      : saved.completed;
    return {
      ...getResumeState(completed, saved.pendingSceneId),
      exerciseEvidence: sanitizeExerciseEvidence(saved.exerciseEvidence),
      workloadEvidence: sanitizeWorkloadEvidence(saved.workloadEvidence),
      evidencePacketMastery: sanitizeEvidencePacketMastery(saved.evidencePacketMastery),
      routeMarkerMastery,
      calibrationMastery: sanitizeCalibrationMastery(saved.calibrationMastery),
      responsibleAIEvidence: sanitizeResponsibleAIEvidence(saved.responsibleAIEvidence),
    };
  } catch {
    // A malformed local save should never prevent a new expedition.
  }
  return null;
}

export function App() {
  const [mode, setMode] = useState("title");
  const [sceneIndex, setSceneIndex] = useState(0);
  const [completed, setCompleted] = useState([]);
  const [verb, setVerb] = useState("LOOK AT");
  const [dialogue, setDialogue] = useState("Select a verb, then choose something in the scene.");
  const [questionOpen, setQuestionOpen] = useState(false);
  const [code, setCode] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [terminalHintLevel, setTerminalHintLevel] = useState(0);
  const [pendingAdvance, setPendingAdvance] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalSessionStarted, setTerminalSessionStarted] = useState(false);
  const [terminalResult, setTerminalResult] = useState(null);
  const [exerciseEvidence, setExerciseEvidence] = useState(null);
  const [workloadSession, setWorkloadSession] = useState(null);
  const [workloadEvidence, setWorkloadEvidence] = useState(null);
  const [evidenceSession, setEvidenceSession] = useState(null);
  const [evidencePacketMastery, setEvidencePacketMastery] = useState(null);
  const [meadowTerminalKind, setMeadowTerminalKind] = useState(null);
  const [routeSession, setRouteSession] = useState(null);
  const [routeMarkerMastery, setRouteMarkerMastery] = useState(null);
  const [calibrationSession, setCalibrationSession] = useState(null);
  const [calibrationMastery, setCalibrationMastery] = useState(null);
  const [ruinsTerminalKind, setRuinsTerminalKind] = useState(null);
  const [responsibleAISession, setResponsibleAISession] = useState(null);
  const [responsibleAIEvidence, setResponsibleAIEvidence] = useState(null);
  const terminalTriggerRef = useRef(null);

  const scene = scenes[Math.min(sceneIndex, scenes.length - 1)];
  const sceneHotspots = [{
    id: scene.primaryHotspotId ?? "primary",
    label: scene.hotspotLabel,
    hotspot: scene.hotspot,
    primary: true,
  }, ...(scene.secondaryHotspots ?? [])];
  const meadowPetalState = exerciseEvidence?.completed
    ? "completed"
    : terminalOpen && meadowTerminalKind === "first" ? "awake" : "locked";
  const meadowRouteState = routeMarkerMastery?.masteryStatus === "mastered"
    ? "completed"
    : exerciseEvidence?.completed ? "awake" : "locked";
  const ruinsVisualState = completed.includes("ruins") ? "complete" : terminalOpen && scene.id === "ruins" ? "active" : "available";
  const ruinsImages = ruinsVisualState === "complete"
    ? { canonical: ruinsCompleteImage, narrow: ruinsCompleteNarrowImage }
    : ruinsVisualState === "active"
      ? { canonical: ruinsActiveImage, narrow: ruinsActiveNarrowImage }
      : { canonical: ruinsAvailableImage, narrow: ruinsAvailableNarrowImage };
  const hotspotButtons = sceneHotspots.map((hotspot) => (
    <button
      key={hotspot.id}
      className={hotspot.primary ? "hotspot hotspot-primary" : "hotspot hotspot-secondary"}
      data-hotspot-id={hotspot.id}
      data-primary-hotspot={hotspot.primary ? "true" : undefined}
      style={getHotspotStyle(hotspot.hotspot)}
      onClick={(event) => { terminalTriggerRef.current = event.currentTarget; useHotspot(hotspot.id); }}
      disabled={pendingAdvance || terminalOpen}
      aria-label={`${verb.toLowerCase()} ${hotspot.label}`}
    >
      <span>{verb} {hotspot.label}</span>
    </button>
  ));
  const canResume = useMemo(() => Boolean(loadSave()), [mode]);

  useEffect(() => {
    if (mode === "playing" || mode === "ending") {
      localStorage.setItem(SAVE_KEY, JSON.stringify({
        sceneIndex,
        completed,
        pendingSceneId: mode === "playing" && pendingAdvance ? scene.id : null,
        exerciseEvidence,
        workloadEvidence,
        evidencePacketMastery,
        routeMarkerMastery,
        calibrationMastery,
        responsibleAIEvidence,
      }));
    }
  }, [mode, sceneIndex, completed, pendingAdvance, scene.id, exerciseEvidence, workloadEvidence, evidencePacketMastery, routeMarkerMastery, calibrationMastery, responsibleAIEvidence]);

  function beginNewGame() {
    localStorage.removeItem(SAVE_KEY);
    setSceneIndex(0);
    setCompleted([]);
    setVerb("LOOK AT");
    setDialogue("Your survey craft is silent behind you. The meadow is not.");
    setQuestionOpen(false);
    setFeedback("");
    setCode("");
    setShowHint(false);
    setPendingAdvance(false);
    setTerminalOpen(false);
    setTerminalSessionStarted(false);
    setTerminalResult(null);
    setTerminalHintLevel(0);
    setExerciseEvidence(null);
    setWorkloadSession(null);
    setWorkloadEvidence(null);
    setEvidenceSession(null);
    setEvidencePacketMastery(null);
    setMeadowTerminalKind(null);
    setRouteSession(null);
    setRouteMarkerMastery(null);
    setCalibrationSession(null);
    setCalibrationMastery(null);
    setRuinsTerminalKind(null);
    setResponsibleAISession(null);
    setResponsibleAIEvidence(null);
    setMode("playing");
  }

  function resumeGame() {
    const saved = loadSave();
    if (!saved) return beginNewGame();
    setSceneIndex(saved.sceneIndex);
    setCompleted(saved.completed);
    setDialogue(saved.pendingSceneId
      ? scenes[saved.sceneIndex].success
      : "The flight recorder restores your last confirmed position.");
    setPendingAdvance(Boolean(saved.pendingSceneId));
    setExerciseEvidence(saved.exerciseEvidence);
    setWorkloadEvidence(saved.workloadEvidence);
    setWorkloadSession(null);
    setEvidencePacketMastery(saved.evidencePacketMastery);
    setEvidenceSession(null);
    setRouteMarkerMastery(saved.routeMarkerMastery);
    setRouteSession(null);
    setMeadowTerminalKind(null);
    setCalibrationMastery(saved.calibrationMastery);
    setCalibrationSession(null);
    setResponsibleAIEvidence(saved.responsibleAIEvidence);
    setResponsibleAISession(null);
    setRuinsTerminalKind(null);
    setTerminalOpen(false);
    setTerminalSessionStarted(false);
    setTerminalResult(null);
    setTerminalHintLevel(0);
    setShowHint(false);
    setCode("");
    setMode(saved.finished ? "ending" : "playing");
  }

  function useHotspot(hotspotId = scene.primaryHotspotId ?? "primary") {
    if (scene.id === "automaton") {
      if (hotspotId === "fallen-automaton") {
        if (verb === "LOOK AT") {
          setDialogue("The fallen automaton is separate from the Terminal. Its lens tracks the three evidence channels without moving its head.");
        } else if (verb === "TALK TO") {
          setDialogue("A damaged speaker returns one measured pulse. The automaton is listening, but the evidence channel is elsewhere.");
        } else {
          setDialogue("Its locked joints reject the command. The grounded Evidence Terminal is the active interface.");
        }
        return;
      }
      if (verb === "LOOK AT") {
        setDialogue(scene.prompt);
        return;
      }
      if (verb === "TALK TO") {
        setDialogue("The Evidence Terminal has no voice. Its three channel lights wait for inspection.");
        return;
      }
      setDialogue("Evidence workspace linked. Inspect the registered packet, repair the JSON, and validate all twelve boundaries.");
      setQuestionOpen(false);
      setTerminalOpen(true);
      if (!evidenceSession) {
        setEvidenceSession({
          workingOutput: evidenceStarter,
          notes: "",
          activeSource: "manifest",
          result: null,
          hintLevel: 0,
        });
      }
      return;
    }
    if (scene.id === "meadow" && hotspotId === "route-marker") {
      if (verb === "LOOK AT") {
        setDialogue(exerciseEvidence?.completed
          ? "A separate route-marker Terminal has risen from the meadow. Its two-form survey is ready."
          : "A low marker remains dark. The Petal Terminal must confirm the first signal before this node can wake.");
        return;
      }
      if (verb === "TALK TO") {
        setDialogue("The route marker has no voice. Its status groove is dark until the prerequisite signal is complete.");
        return;
      }
      if (!exerciseEvidence?.completed) {
        setDialogue("The route marker refuses the link. Complete the Petal Terminal first.");
        return;
      }
      setDialogue("Route-marker workspace linked. Predict each run, validate both forms, then complete retrieval.");
      setTerminalOpen(true);
      setMeadowTerminalKind("route");
      if (!routeSession) {
        setRouteSession({
          form: "primary",
          source: routePrimaryStarter,
          prediction: ["", ""],
          result: null,
          predictionResults: null,
          formPassed: false,
          phase: "form",
          hintLevel: 0,
          retrievalAnswers: {},
          retrievalResults: null,
        });
      }
      return;
    }
    if (verb === "LOOK AT") {
      setDialogue(scene.prompt);
      return;
    }
    if (verb === "TALK TO" && scene.id !== "automaton") {
      setDialogue("Nothing here has a mouth. Something still seems to hear you.");
      return;
    }
    if (scene.id === "meadow") {
      if (exerciseEvidence?.completed) {
        setDialogue("The Petal Terminal is complete. The separate route-marker node now carries the active lesson.");
        return;
      }
      setDialogue("Terminal link established. Complete the file, run it, and confirm the result.");
      setTerminalOpen(true);
      setMeadowTerminalKind("first");
      if (!terminalSessionStarted) {
        setTerminalSessionStarted(true);
        setTerminalResult(null);
        setCode(terminalExercise.starterCode);
        setShowHint(false);
        setTerminalHintLevel(0);
      }
      return;
    }
    if (scene.id === "ruins") {
      setDialogue("Workload Sort linked. Classify each signal, remediate misses, and confirm mastery.");
      setQuestionOpen(false);
      setTerminalOpen(true);
      setRuinsTerminalKind("workload");
      if (!workloadSession) setWorkloadSession(createWorkloadSession());
      return;
    }
    setDialogue(scene.question);
    setQuestionOpen(true);
    setFeedback("");
    setShowHint(false);
    setCode("");
  }

  function runTerminal(event) {
    event.preventDefault();
    const result = evaluateTerminalCode(code);
    setExerciseEvidence((previous) => updateExerciseEvidence(previous, { incrementAttempt: true }));
    setTerminalResult(result);
  }

  function revealTerminalHint() {
    setShowHint(true);
    setTerminalHintLevel((level) => Math.min(terminalExercise.hints.length, level + 1));
    setExerciseEvidence((previous) => updateExerciseEvidence(previous, { hintUsed: true }));
  }

  function acknowledgeTerminalCompletion() {
    if (!terminalResult?.passed) return;
    setExerciseEvidence((previous) => updateExerciseEvidence(previous, { completed: true }));
    setDialogue(scene.success);
    setTerminalOpen(false);
    setTerminalSessionStarted(false);
    setTerminalResult(null);
    setTerminalHintLevel(0);
    setShowHint(false);
    setCode("");
    setMeadowTerminalKind(null);
  }

  function runRouteForm(event) {
    event.preventDefault();
    if (routeSession.prediction.some((line) => !line.trim())) return;
    const result = evaluateRouteSource(routeSession.source, routeSession.form);
    const predictionResults = evaluateRoutePrediction(routeSession.prediction, routeSession.form);
    const predictionPassed = predictionResults.every(Boolean);
    const formPassed = result.passed && predictionPassed;
    const hintLevel = formPassed ? routeSession.hintLevel : Math.max(1, routeSession.hintLevel);
    const predictionTags = routeSession.form === "transfer" && !predictionPassed
      ? ["reassignment-changes-everything", "earlier-value-survives-reassignment"]
      : [];
    setRouteSession({ ...routeSession, result, predictionResults, formPassed, hintLevel });
    setRouteMarkerMastery((previous) => updateRouteMarkerMastery(previous, {
      formId: routeSession.form,
      incrementAttempt: true,
      predictionCorrectness: predictionResults,
      checkResults: result.checks,
      hintLevel,
      misconceptionTags: [...result.misconceptionTags, ...predictionTags],
      masteryStatus: formPassed ? "in_progress" : "remediation_required",
    }));
  }

  function revealRouteHint() {
    const hintLevel = Math.min(3, routeSession.hintLevel + 1);
    setRouteSession({ ...routeSession, hintLevel });
    setRouteMarkerMastery((previous) => updateRouteMarkerMastery(previous, { hintLevel }));
  }

  function loadRouteTransfer() {
    if (!routeSession.formPassed || routeSession.form !== "primary") return;
    setRouteSession({
      ...routeSession,
      form: "transfer",
      source: routeTransferStarter,
      prediction: ["", ""],
      result: null,
      predictionResults: null,
      formPassed: false,
      hintLevel: 0,
    });
  }

  function beginRouteRetrieval() {
    if (!routeSession.formPassed || routeSession.form !== "transfer") return;
    setRouteSession({ ...routeSession, phase: "retrieval", retrievalAnswers: {}, retrievalResults: null, hintLevel: 0 });
  }

  function submitRouteRetrieval(event) {
    event.preventDefault();
    const results = evaluateRouteRetrieval(routeSession.retrievalAnswers);
    const passed = Object.values(results).every(Boolean);
    const missedTags = routeRetrieval.filter((item) => !results[item.id]).map((item) => item.tag);
    const hintLevel = passed ? routeSession.hintLevel : Math.max(1, routeSession.hintLevel);
    setRouteSession({ ...routeSession, retrievalResults: results, phase: passed ? "complete" : "retrieval", hintLevel });
    setRouteMarkerMastery((previous) => updateRouteMarkerMastery(previous, {
      formId: "retrieval",
      incrementAttempt: true,
      checkResults: results,
      hintLevel,
      misconceptionTags: missedTags,
      masteryStatus: passed ? "in_progress" : "remediation_required",
    }));
  }

  function setRouteConfidence(confidence) {
    setRouteMarkerMastery((previous) => updateRouteMarkerMastery(previous, { confidence }));
  }

  function acknowledgeRouteMastery() {
    const retrievalPassed = routeSession?.retrievalResults && Object.values(routeSession.retrievalResults).every(Boolean);
    if (!retrievalPassed || !routeMarkerMastery?.confidence) return;
    setRouteMarkerMastery((previous) => updateRouteMarkerMastery(previous, { masteryStatus: "mastered" }));
    const nextCompleted = completed.includes(scene.id) ? completed : [...completed, scene.id];
    setCompleted(nextCompleted);
    setDialogue(scene.routeSuccess);
    setTerminalOpen(false);
    setMeadowTerminalKind(null);
    setRouteSession(null);
    setPendingAdvance(true);
  }

  function openCalibration() {
    setTerminalOpen(true);
    setMeadowTerminalKind("calibration");
    if (!calibrationSession) {
      setCalibrationSession({
        form: "traceback", pane: "output", source: calibrationStarters.traceback,
        diagnosis: { errorType: "", lineNumber: "", namedToken: "" }, diagnosisResults: null, diagnosisPassed: false,
        result: null, output: [], hintLevel: 0, retrievalAnswers: {}, retrievalResults: null, notes: "",
      });
    }
  }

  function exitCalibration() {
    setTerminalOpen(false);
    setMeadowTerminalKind(null);
    setDialogue("Calibration exited safely. ROUTE OPEN. Continue when ready or resume calibration here.");
  }

  function submitCalibrationDiagnosis(event) {
    event.preventDefault();
    const results = evaluateCalibrationDiagnosis(calibrationSession.diagnosis, calibrationSession.form);
    const passed = Object.values(results).every(Boolean);
    const tags = [];
    if (!results.errorType) tags.push("traceback-is-punishment");
    if (!results.lineNumber) tags.push("line-number-is-random");
    if (!results.namedToken) tags.push(calibrationSession.form === "indentation" ? "indentation-is-decoration" : "random-edits-are-debugging");
    setCalibrationSession({ ...calibrationSession, diagnosisResults: results, diagnosisPassed: passed, pane: passed ? "source" : "task" });
    setCalibrationMastery((previous) => updateCalibrationMastery(previous, {
      formId: calibrationSession.form, diagnosisCorrectness: results, misconceptionTags: tags,
      masteryStatus: passed ? "in_progress" : "remediation_required",
    }));
  }

  function runCalibration(event) {
    event.preventDefault();
    if (!calibrationSession.diagnosisPassed) return;
    const result = evaluateCalibrationSource(calibrationSession.source, calibrationSession.form);
    const hintLevel = result.passed ? calibrationSession.hintLevel : Math.max(1, calibrationSession.hintLevel);
    setCalibrationSession({ ...calibrationSession, result, output: result.outputs, hintLevel, pane: "output" });
    setCalibrationMastery((previous) => updateCalibrationMastery(previous, {
      formId: calibrationSession.form, incrementAttempt: true, checkResults: result.checks, hintLevel,
      misconceptionTags: result.misconceptionTags, masteryStatus: result.passed ? "in_progress" : "remediation_required",
    }));
  }

  function revealCalibrationHint() {
    const hintLevel = Math.min(3, calibrationSession.hintLevel + 1);
    setCalibrationSession({ ...calibrationSession, hintLevel, pane: "hint" });
    setCalibrationMastery((previous) => updateCalibrationMastery(previous, { hintLevel }));
  }

  function loadIndentationCalibration() {
    if (!calibrationSession.result?.passed) return;
    setCalibrationSession({
      ...calibrationSession, form: "indentation", pane: "output", source: calibrationStarters.indentation,
      diagnosis: { errorType: "", lineNumber: "", namedToken: "" }, diagnosisResults: null, diagnosisPassed: false,
      result: null, output: [], hintLevel: 0,
    });
  }

  function beginCalibrationRetrieval() {
    if (!calibrationSession.result?.passed) return;
    setCalibrationSession({ ...calibrationSession, pane: "retrieval", retrievalAnswers: {}, retrievalResults: null });
  }

  function submitCalibrationRetrieval(event) {
    event.preventDefault();
    const results = evaluateCalibrationRetrieval(calibrationSession.retrievalAnswers);
    const passed = Object.values(results).every(Boolean);
    const tags = calibrationRetrieval.filter(([id]) => !results[id]).map(([, , , , tag]) => tag);
    setCalibrationSession({ ...calibrationSession, retrievalResults: results, pane: passed ? "acknowledgement" : "retrieval" });
    setCalibrationMastery((previous) => updateCalibrationMastery(previous, {
      formId: "retrieval", incrementAttempt: true, checkResults: results, misconceptionTags: tags,
      masteryStatus: passed ? "in_progress" : "remediation_required",
    }));
  }

  function setCalibrationConfidence(confidence) {
    setCalibrationMastery((previous) => updateCalibrationMastery(previous, { confidence }));
  }

  function acknowledgeCalibrationMastery() {
    if (!calibrationSession?.retrievalResults || !Object.values(calibrationSession.retrievalResults).every(Boolean) || !calibrationMastery?.confidence) return;
    setCalibrationMastery((previous) => updateCalibrationMastery(previous, { masteryStatus: "mastered", clearMisconceptionTags: true }));
    setCalibrationSession(null);
    setTerminalOpen(false);
    setMeadowTerminalKind(null);
    setDialogue("Calibration complete. ROUTE OPEN. The repaired expedition copy is ready, and the marked path is unchanged.");
  }

  function checkWorkloadCard(event) {
    event.preventDefault();
    const result = evaluateWorkloadSelection(workloadSession);
    setWorkloadSession(result.session);
    if (!result.submitted) return;
    setWorkloadEvidence((previous) => updateWorkloadEvidence(previous, {
      incrementAttempt: true,
      hintLevel: result.session.hintLevel,
      itemId: result.finalized ? result.item.id : null,
      correct: result.finalized ? result.correct : undefined,
      misconceptionTags: result.finalized && !result.correct ? result.item.tags : [],
    }));
  }

  function showWorkloadHint() {
    const next = revealWorkloadHint(workloadSession);
    setWorkloadSession(next);
    setWorkloadEvidence((previous) => updateWorkloadEvidence(previous, { hintLevel: next.hintLevel }));
  }

  function advanceWorkloadCard() {
    const next = advanceWorkloadSession(workloadSession);
    setWorkloadSession(next);
    if (next.phase === "form_complete") {
      const outcome = getWorkloadOutcome(next);
      setWorkloadEvidence((previous) => updateWorkloadEvidence(previous, {
        misconceptionTags: outcome.criticalMisses,
        masteryStatus: outcome.passed ? "in_progress" : "remediation_required",
      }));
    }
  }

  function beginFreshWorkloadRetry() {
    setWorkloadSession(createWorkloadSession("retry"));
    setWorkloadEvidence((previous) => updateWorkloadEvidence(previous, { masteryStatus: "in_progress" }));
  }

  function setWorkloadConfidence(confidence) {
    setWorkloadEvidence((previous) => updateWorkloadEvidence(previous, { confidence }));
  }

  function acknowledgeWorkloadCompletion() {
    const outcome = getWorkloadOutcome(workloadSession);
    if (!outcome.passed || !workloadEvidence?.confidence) return;
    setWorkloadEvidence((previous) => updateWorkloadEvidence(previous, { masteryStatus: "mastered" }));
    const nextCompleted = completed.includes(scene.id) ? completed : [...completed, scene.id];
    setCompleted(nextCompleted);
    setDialogue(scene.success);
    setTerminalOpen(false);
    setRuinsTerminalKind(null);
    setWorkloadSession(null);
    setPendingAdvance(true);
  }

  function openResponsibleAI() {
    setTerminalOpen(true);
    setRuinsTerminalKind("responsible-ai");
    if (!responsibleAISession) {
      setResponsibleAISession({ index: 0, response: { principle: "", stakeholder: "", mitigation: "", owner: "" }, result: null, hintLevel: 0, complete: false });
    }
  }

  function exitResponsibleAI() {
    setTerminalOpen(false);
    setRuinsTerminalKind(null);
    setDialogue("Responsible AI practice closed safely. Continue or resume the primary form when ready.");
  }

  function checkResponsibleAI(event) {
    event.preventDefault();
    const scenario = responsibleAIPrimaryScenarios[responsibleAISession.index];
    const result = evaluateResponsibleAIScenario(scenario.id, responsibleAISession.response);
    const hintLevel = result.passed ? responsibleAISession.hintLevel : Math.max(1, responsibleAISession.hintLevel);
    setResponsibleAISession({ ...responsibleAISession, result, hintLevel });
    setResponsibleAIEvidence((previous) => updateResponsibleAIEvidence(previous, {
      scenarioId: scenario.id, correctness: result.correctness, incrementAttempt: true, hintLevel,
      misconceptionTags: result.misconceptionTags, masteryStatus: result.passed ? "in_progress" : "remediation_required",
    }));
  }

  function revealResponsibleAIHint() {
    const hintLevel = Math.min(3, responsibleAISession.hintLevel + 1);
    setResponsibleAISession({ ...responsibleAISession, hintLevel });
    setResponsibleAIEvidence((previous) => updateResponsibleAIEvidence(previous, { hintLevel }));
  }

  function nextResponsibleAIScenario() {
    if (!responsibleAISession.result?.passed) return;
    if (responsibleAISession.index === responsibleAIPrimaryScenarios.length - 1) {
      setResponsibleAISession({ ...responsibleAISession, complete: true });
      return;
    }
    setResponsibleAISession({ index: responsibleAISession.index + 1, response: { principle: "", stakeholder: "", mitigation: "", owner: "" }, result: null, hintLevel: 0, complete: false });
  }

  function setResponsibleAIConfidence(confidence) {
    setResponsibleAIEvidence((previous) => updateResponsibleAIEvidence(previous, { confidence }));
  }

  function acknowledgeResponsibleAIPrimary() {
    if (!responsibleAISession?.complete || !responsibleAIEvidence?.confidence) return;
    setResponsibleAIEvidence((previous) => updateResponsibleAIEvidence(previous, { masteryStatus: "primary_complete", clearMisconceptionTags: true }));
    setResponsibleAISession(null);
    setTerminalOpen(false);
    setRuinsTerminalKind(null);
    setDialogue("Primary responsible AI practice complete. Transfer form remains a future lesson slice; this was course-authored practice, not a Microsoft exam question.");
  }

  function validateEvidenceOutput(event) {
    event.preventDefault();
    const result = evaluateEvidencePacket(evidenceSession.workingOutput);
    const hintLevel = result.passed ? evidenceSession.hintLevel : Math.max(1, evidenceSession.hintLevel);
    setEvidenceSession({ ...evidenceSession, result, hintLevel });
    setEvidencePacketMastery((previous) => updateEvidencePacketMastery(previous, {
      incrementAttempt: true,
      checkResults: result.checks,
      hintLevel,
      misconceptionTags: result.misconceptionTags,
      masteryStatus: result.passed ? "in_progress" : "remediation_required",
    }));
  }

  function revealEvidenceRemediation() {
    const hintLevel = Math.min(3, evidenceSession.hintLevel + 1);
    setEvidenceSession({ ...evidenceSession, hintLevel });
    setEvidencePacketMastery((previous) => updateEvidencePacketMastery(previous, { hintLevel }));
  }

  function setEvidenceConfidence(confidence) {
    setEvidencePacketMastery((previous) => updateEvidencePacketMastery(previous, { confidence }));
  }

  function acknowledgeEvidenceMastery() {
    if (!evidenceSession?.result?.passed || !evidencePacketMastery?.confidence) return;
    setEvidencePacketMastery((previous) => updateEvidencePacketMastery(previous, { masteryStatus: "mastered" }));
    const nextCompleted = completed.includes(scene.id) ? completed : [...completed, scene.id];
    setCompleted(nextCompleted);
    setDialogue(scene.success);
    setTerminalOpen(false);
    setEvidenceSession(null);
    setCalibrationSession(null);
    setResponsibleAISession(null);
    setRuinsTerminalKind(null);
    setRouteSession(null);
    setMeadowTerminalKind(null);
    setPendingAdvance(true);
  }

  function runCode(event) {
    event.preventDefault();
    if (!scene.validate(code)) {
      setFeedback("The interface dims. Syntax or value mismatch—try again.");
      return;
    }

    const nextCompleted = completed.includes(scene.id) ? completed : [...completed, scene.id];
    setCompleted(nextCompleted);
    setFeedback("Program accepted.");
    setDialogue(scene.success);
    setQuestionOpen(false);
    setPendingAdvance(true);
  }

  function continueJourney() {
    setPendingAdvance(false);
    setTerminalOpen(false);
    setTerminalSessionStarted(false);
    setTerminalResult(null);
    setTerminalHintLevel(0);
    setShowHint(false);
    setCode("");
    setWorkloadSession(null);
    setEvidenceSession(null);
    setCalibrationSession(null);
    if (completed.length === scenes.length) {
      setMode("ending");
      return;
    }
    setSceneIndex(completed.length);
    setVerb("LOOK AT");
    setDialogue("The path changes behind you. The next interface is already awake.");
  }

  if (mode === "title") {
    return (
      <main className="game-shell title-screen" data-playtest-marker="TITLE_SCREEN">
        <PixelMeadow petalState="locked" routeState="locked" />
        <div className="title-shade" aria-hidden="true" />
        <section className="title-copy" aria-labelledby="game-title">
          <p className="eyebrow">A Horizon Archive expedition</p>
          <h1 id="game-title">THE HORIZON ARCHIVE</h1>
          <p className="subtitle">Prologue: The Patient Signal</p>
          <div className="title-actions">
            <button className="primary-action" onClick={beginNewGame}>New expedition</button>
            {canResume && <button className="secondary-action" onClick={resumeGame}>Resume signal</button>}
          </div>
          <p className="title-note">A point-and-click Python mystery</p>
        </section>
      </main>
    );
  }

  if (mode === "ending") {
    return (
      <main className="game-shell credits-screen" data-playtest-marker="CREDITS_REACHED">
        <img className="credits-art" src={cityImage} alt="An immense underground city suspended over glowing volcanic chasms" />
        <section className="credits-copy">
          <p className="eyebrow">Archive access: partial</p>
          <h1>THE CITY BENEATH</h1>
          <p>You came looking for an abandoned system.</p>
          <p>Something below has recorded your arrival as a continuation.</p>
          <div className="credit-rule" />
          <p className="credit-line">The Horizon Archive</p>
          <p className="credit-line muted">Prologue complete</p>
          <button className="primary-action" onClick={() => setMode("title")}>Return to title</button>
        </section>
      </main>
    );
  }

  return (
    <CanonicalGameFrame enabled={scene.id === "ruins"}>
    <main className="game-shell adventure-screen" data-scene={scene.id} data-terminal-open={terminalOpen ? "true" : "false"} data-route-marker-ready={scene.id === "meadow" && exerciseEvidence?.completed ? "true" : undefined}>
      <section className="scene-frame" aria-label={`${scene.location} scene`}>
        {scene.id === "meadow" ? (
          <PixelMeadow petalState={meadowPetalState} routeState={meadowRouteState}>{hotspotButtons}</PixelMeadow>
        ) : (
          <>
            {scene.id === "ruins" ? (
              <picture>
                <source media="(max-width: 639px)" srcSet={ruinsImages.narrow} />
                <img className="scene-art" src={ruinsImages.canonical} alt={scene.imageAlt} data-ab01-state={ruinsVisualState} />
              </picture>
            ) : (
              <img className="scene-art" src={scene.image} alt={scene.imageAlt ?? `Alien archaeological site: ${scene.location}`} />
            )}
            {hotspotButtons}
          </>
        )}
        <div className="scene-status">
          <span>CHAPTER {scene.chapter}</span>
          <strong>{scene.location}</strong>
          <span>{completed.length}/{scenes.length} interfaces</span>
        </div>
        {terminalOpen && scene.id === "meadow" && meadowTerminalKind === "first" && (
          <TerminalShell
            exerciseId={terminalExercise.exerciseId}
            title={terminalExercise.title}
            filename={terminalExercise.filename}
            lessonId={terminalExercise.lessonId}
            restoreFocusTo={terminalTriggerRef.current}
            onClose={() => setTerminalOpen(false)}
          >
            <form className="editor-layout" onSubmit={runTerminal}>
              <aside className="task-pane" aria-labelledby="terminal-task-heading">
                <p className="pane-label">ACTIVE TASK</p>
                <h2 id="terminal-task-heading">Complete the first signal</h2>
                <p>{terminalExercise.task}</p>
                <dl>
                  <div><dt>Activity</dt><dd>{terminalExercise.activityId}</dd></div>
                  <div><dt>Skills</dt><dd>{terminalExercise.skillIds.join(" · ")}</dd></div>
                </dl>
                <button className="hint-action" type="button" onClick={revealTerminalHint} disabled={terminalHintLevel === terminalExercise.hints.length}>
                  {terminalHintLevel ? "Reveal next hint" : "Reveal progressive hint"}
                </button>
                {showHint && <p className="editor-hint">{terminalExercise.hints[Math.max(0, terminalHintLevel - 1)]}</p>}
              </aside>
              <div className="editor-stack">
                <div className="code-editor">
                  <div className="line-numbers" aria-hidden="true">
                    {code.split("\n").map((_, index) => <span key={index}>{index + 1}</span>)}
                  </div>
                  <textarea
                    id="terminal-code"
                    aria-label={`Python code editor for ${terminalExercise.filename}`}
                    value={code}
                    onChange={(event) => { setCode(event.target.value); setTerminalResult(null); }}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
                <section className="terminal-console" aria-labelledby="console-heading">
                  <div className="console-heading-row">
                    <strong id="console-heading">OUTPUT</strong>
                    <button className="run-action" type="submit">Run Python</button>
                  </div>
                  <div className={terminalResult ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">
                    {terminalResult ? terminalResult.feedback : "Ready. Run the file when your edits are complete."}
                  </div>
                  {terminalResult?.output && <pre>{terminalResult.output}</pre>}
                  {terminalResult?.passed && (
                    <button className="confirm-action" type="button" onClick={acknowledgeTerminalCompletion}>Acknowledge completion</button>
                  )}
                </section>
              </div>
            </form>
          </TerminalShell>
        )}
        {terminalOpen && scene.id === "meadow" && meadowTerminalKind === "route" && routeSession && (
          <TerminalShell
            exerciseId={routeMarkerExercise.exercise_id}
            title={routeMarkerExercise.title}
            filename={routeSession.form === "transfer" ? "route_marker_transfer.py" : "route_marker_primary.py"}
            lessonId={routeMarkerExercise.lesson_id}
            restoreFocusTo={terminalTriggerRef.current}
            onClose={() => setTerminalOpen(false)}
          >
            {routeSession.phase === "form" ? (
              <form className="editor-layout route-layout" onSubmit={runRouteForm}>
                <aside className="task-pane" aria-labelledby="route-task-heading">
                  <p className="pane-label">ROUTE FORM // {routeSession.form}</p>
                  <h2 id="route-task-heading">Predict, assign, run</h2>
                  <p>{routeSession.form === "primary"
                    ? "Complete three variables and predict both output lines before validating."
                    : "Start fresh, then reassign only signal_label before the supplied print calls."}</p>
                  <dl>
                    <div><dt>Activity</dt><dd>{routeMarkerExercise.activity_id}</dd></div>
                    <div><dt>Skills</dt><dd>{routeMarkerExercise.skill_ids.join(" · ")}</dd></div>
                    <div><dt>Gate</dt><dd>Prediction + 8 / 8</dd></div>
                  </dl>
                  <fieldset className="route-prediction">
                    <legend>Prediction required before Run</legend>
                    {[0, 1].map((index) => (
                      <label key={index}>
                        Output line {index + 1}
                        <input
                          aria-label={`Predicted output line ${index + 1}`}
                          value={routeSession.prediction[index]}
                          onChange={(event) => {
                            const prediction = [...routeSession.prediction];
                            prediction[index] = event.target.value;
                            setRouteSession({ ...routeSession, prediction, result: null, predictionResults: null, formPassed: false });
                          }}
                          autoComplete="off"
                          spellCheck="false"
                        />
                      </label>
                    ))}
                  </fieldset>
                </aside>
                <div className="editor-stack route-stack">
                  <div className="code-editor">
                    <div className="line-numbers" aria-hidden="true">
                      {routeSession.source.split("\n").map((_, index) => <span key={index}>{index + 1}</span>)}
                    </div>
                    <textarea
                      id="route-source-editor"
                      aria-label={`Python source editor for ${routeSession.form} route marker form`}
                      value={routeSession.source}
                      onChange={(event) => setRouteSession({ ...routeSession, source: event.target.value, result: null, formPassed: false })}
                      autoCapitalize="off"
                      autoCorrect="off"
                      spellCheck="false"
                    />
                  </div>
                  <section className="terminal-console" aria-labelledby="route-output-heading">
                    <div className="console-heading-row">
                      <strong id="route-output-heading">OUTPUT / VALIDATOR</strong>
                      <button className="run-action" type="submit" disabled={routeSession.prediction.some((line) => !line.trim())}>Run route form</button>
                    </div>
                    <div className={routeSession.result ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">
                      {routeSession.result
                        ? `${routeSession.result.score}/8 · prediction ${routeSession.predictionResults.filter(Boolean).length}/2 · ${routeSession.formPassed ? "form passed" : routeSession.result.feedback}`
                        : "Write both predicted lines before Run. Predictions, source, and output stay in this session only."}
                    </div>
                    {routeSession.result?.outputs.length > 0 && <pre>{routeSession.result.outputs.join("\n")}</pre>}
                    {routeSession.result && !routeSession.formPassed && (
                      <div className="evidence-remediation">
                        <p>{routeSession.result.passed
                          ? "Prediction trace — compare each prediction with the latest value available at its print call."
                          : routeRemediation(routeSession.result, routeSession.hintLevel)}</p>
                        <button className="hint-action" type="button" disabled={routeSession.hintLevel >= 3} onClick={revealRouteHint}>
                          Reveal next trace
                        </button>
                      </div>
                    )}
                    {routeSession.formPassed && (
                      <button className="confirm-action" type="button" onClick={routeSession.form === "primary" ? loadRouteTransfer : beginRouteRetrieval}>
                        {routeSession.form === "primary" ? "Load fresh transfer form" : "Begin retrieval gate"}
                      </button>
                    )}
                  </section>
                </div>
              </form>
            ) : (
              <form className="editor-layout route-layout" onSubmit={submitRouteRetrieval}>
                <aside className="task-pane" aria-labelledby="route-retrieval-heading">
                  <p className="pane-label">CLOSED-SOURCE RETRIEVAL</p>
                  <h2 id="route-retrieval-heading">Four distinctions</h2>
                  <p>The source file is closed. Answer all four checks before route acknowledgement.</p>
                  <dl>
                    <div><dt>Primary</dt><dd>8 / 8</dd></div>
                    <div><dt>Transfer</dt><dd>8 / 8</dd></div>
                    <div><dt>Retrieval</dt><dd>{routeSession.retrievalResults ? Object.values(routeSession.retrievalResults).filter(Boolean).length : 0} / 4</dd></div>
                  </dl>
                </aside>
                <div className="editor-stack route-retrieval-stack">
                  {routeSession.phase === "retrieval" ? (
                    <div className="route-retrieval-list">
                      {routeRetrieval.map((item, index) => (
                        <fieldset key={item.id}>
                          <legend>{index + 1}. {item.prompt}</legend>
                          <select
                            aria-label={`Retrieval answer ${index + 1}`}
                            value={routeSession.retrievalAnswers[item.id] || ""}
                            onChange={(event) => setRouteSession({
                              ...routeSession,
                              retrievalAnswers: { ...routeSession.retrievalAnswers, [item.id]: event.target.value },
                              retrievalResults: null,
                            })}
                          >
                            <option value="">Choose one</option>
                            {item.options.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                          </select>
                          {routeSession.retrievalResults?.[item.id] === false && (
                            <p>Contrast: {item.options.find(([value]) => value === item.answer)?.[1]} Retry from memory.</p>
                          )}
                        </fieldset>
                      ))}
                    </div>
                  ) : (
                    <section className="workload-summary" aria-labelledby="route-complete-heading">
                      <p className="pane-label">ROUTE MASTERY</p>
                      <h2 id="route-complete-heading">Primary 8/8 · Transfer 8/8 · Retrieval 4/4</h2>
                      <fieldset className="confidence-group">
                        <legend>Confidence after this checkpoint</legend>
                        {[["low", "Low"], ["medium", "Medium"], ["high", "High"]].map(([value, label]) => (
                          <label key={value}>
                            <input type="radio" name="route-confidence" checked={routeMarkerMastery?.confidence === value} onChange={() => setRouteConfidence(value)} />
                            {label}
                          </label>
                        ))}
                      </fieldset>
                    </section>
                  )}
                  <section className="terminal-console" aria-labelledby="route-retrieval-output-heading">
                    <div className="console-heading-row">
                      <strong id="route-retrieval-output-heading">RETRIEVAL STATUS</strong>
                      {routeSession.phase === "retrieval" && (
                        <button className="run-action" type="submit" disabled={routeRetrieval.some((item) => !routeSession.retrievalAnswers[item.id])}>Check retrieval</button>
                      )}
                    </div>
                    <div className="console-feedback active" role="status" aria-live="polite">
                      {routeSession.phase === "complete"
                        ? "All four distinctions confirmed. Record confidence to acknowledge the route."
                        : routeSession.retrievalResults
                          ? `${Object.values(routeSession.retrievalResults).filter(Boolean).length}/4 · Retry each marked distinction.`
                          : "Select one answer for each distinction. Choices are not persisted."}
                    </div>
                    {routeSession.phase === "complete" && (
                      <button className="confirm-action" type="button" disabled={!routeMarkerMastery?.confidence} onClick={acknowledgeRouteMastery}>
                        Acknowledge route mastery
                      </button>
                    )}
                  </section>
                </div>
              </form>
            )}
          </TerminalShell>
        )}
        {terminalOpen && scene.id === "meadow" && meadowTerminalKind === "calibration" && calibrationSession && (
          <TerminalShell
            exerciseId={calibrationExercise.exercise_id}
            title={calibrationExercise.title}
            filename={calibrationExercise.forms[calibrationSession.form].starter_file}
            lessonId={calibrationExercise.lesson_id}
            restoreFocusTo={terminalTriggerRef.current}
            statusText={`ROUTE OPEN · ${calibrationSession.form}`}
            closeLabel="Exit Calibration"
            onClose={exitCalibration}
          >
            <section className="calibration-workspace" aria-labelledby="calibration-pane-heading">
              <nav className="calibration-pane-tabs" aria-label="Calibration panes">
                {["task", "source", "output", "hint"].map((pane) => (
                  <button key={pane} type="button" aria-current={calibrationSession.pane === pane ? "page" : undefined} onClick={() => setCalibrationSession({ ...calibrationSession, pane })}>
                    {pane === "output" ? "Output / Traceback" : pane}
                  </button>
                ))}
              </nav>
              <p className="calibration-route-status">FILE {calibrationExercise.forms[calibrationSession.form].starter_file} · FORM {calibrationSession.form.toUpperCase()} · ROUTE OPEN</p>
              <p className="calibration-keyboard-help" data-ungraded-orientation="true">{calibrationExercise.ungraded_keyboard_orientation.copy}</p>

              {calibrationSession.pane === "task" && (
                <form className="calibration-pane" onSubmit={submitCalibrationDiagnosis}>
                  <p className="pane-label">PRE-EDIT DIAGNOSIS</p>
                  <h2 id="calibration-pane-heading">Locate before editing</h2>
                  <p>Record the error type, named source line, and suspect token before the source pane unlocks.</p>
                  <div className="calibration-diagnosis-grid">
                    <label>Error type<select aria-label="Calibration error type" value={calibrationSession.diagnosis.errorType} onChange={(event) => setCalibrationSession({ ...calibrationSession, diagnosis: { ...calibrationSession.diagnosis, errorType: event.target.value } })}><option value="">Choose</option><option>NameError</option><option>IndentationError</option><option>TypeError</option></select></label>
                    <label>Line<select aria-label="Calibration line number" value={calibrationSession.diagnosis.lineNumber} onChange={(event) => setCalibrationSession({ ...calibrationSession, diagnosis: { ...calibrationSession.diagnosis, lineNumber: event.target.value } })}><option value="">Choose</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></label>
                    <label>Named token<select aria-label="Calibration named token" value={calibrationSession.diagnosis.namedToken} onChange={(event) => setCalibrationSession({ ...calibrationSession, diagnosis: { ...calibrationSession.diagnosis, namedToken: event.target.value } })}><option value="">Choose</option><option value="route_lable">route_lable</option><option value="route_label">route_label</option><option value="print">print</option></select></label>
                  </div>
                  {calibrationSession.diagnosisResults && !calibrationSession.diagnosisPassed && <p role="status">Diagnosis incomplete. Recheck the final error line and the named source line. ROUTE OPEN.</p>}
                  <button className="run-action" type="submit">Record diagnosis</button>
                </form>
              )}

              {calibrationSession.pane === "source" && (
                <form className="calibration-pane calibration-source-pane" onSubmit={runCalibration}>
                  <p className="pane-label">SOURCE · MAX 8 LINES</p>
                  <h2 id="calibration-pane-heading">Repair one boundary</h2>
                  <textarea
                    id="calibration-source"
                    aria-label="Calibration Python source"
                    value={calibrationSession.source}
                    disabled={!calibrationSession.diagnosisPassed}
                    onChange={(event) => setCalibrationSession({ ...calibrationSession, source: event.target.value, result: null, output: [] })}
                    spellCheck="false"
                  />
                  {!calibrationSession.diagnosisPassed && <p>Source locked until the pre-edit diagnosis is correct.</p>}
                  <button className="run-action" type="submit" disabled={!calibrationSession.diagnosisPassed}>Run repaired copy</button>
                </form>
              )}

              {calibrationSession.pane === "output" && (
                <section className="calibration-pane" aria-live="polite">
                  <p className="pane-label">SELECTABLE OUTPUT · MAX 4 TRACEBACK LINES</p>
                  <h2 id="calibration-pane-heading">{calibrationSession.result ? "Validator result" : "Traceback"}</h2>
                  <pre>{calibrationSession.result
                    ? `${calibrationSession.result.score}/8\n${calibrationSession.result.outputs.join("\n") || calibrationSession.result.failedCodes[0]}`
                    : calibrationTracebacks[calibrationSession.form]}</pre>
                  <p role="status">{calibrationSession.result
                    ? `${calibrationSession.result.passed ? "FORM PASS" : "REPAIR AND RERUN"} · ROUTE OPEN`
                    : "Read error type, file, line, and token. ROUTE OPEN."}</p>
                  {!calibrationSession.result && <button className="run-action" type="button" onClick={() => setCalibrationSession({ ...calibrationSession, pane: "task" })}>Record pre-edit diagnosis</button>}
                  {calibrationSession.result && !calibrationSession.result.passed && <button className="hint-action" type="button" onClick={revealCalibrationHint}>Open targeted hint</button>}
                  {calibrationSession.result?.passed && <button className="confirm-action" type="button" onClick={calibrationSession.form === "traceback" ? loadIndentationCalibration : beginCalibrationRetrieval}>{calibrationSession.form === "traceback" ? "Load indentation form" : "Begin retrieval"}</button>}
                </section>
              )}

              {calibrationSession.pane === "hint" && (
                <section className="calibration-pane">
                  <p className="pane-label">TARGETED REMEDIATION</p>
                  <h2 id="calibration-pane-heading">One controlled repair</h2>
                  <p>{calibrationRemediation(calibrationSession.result, calibrationSession.hintLevel)}</p>
                  <button className="hint-action" type="button" disabled={calibrationSession.hintLevel >= 3} onClick={revealCalibrationHint}>Reveal next hint</button>
                  <button className="run-action" type="button" onClick={() => setCalibrationSession({ ...calibrationSession, pane: "source" })}>Return to source</button>
                </section>
              )}

              {calibrationSession.pane === "retrieval" && (
                <form className="calibration-pane calibration-retrieval" onSubmit={submitCalibrationRetrieval}>
                  <p className="pane-label">RETRIEVAL · 4 / 4 REQUIRED</p>
                  <h2 id="calibration-pane-heading">Debugging and route safety</h2>
                  {calibrationRetrieval.map(([id, prompt, options], index) => (
                    <label key={id}>{index + 1}. {prompt}<select aria-label={`Calibration retrieval ${index + 1}`} value={calibrationSession.retrievalAnswers[id] || ""} onChange={(event) => setCalibrationSession({ ...calibrationSession, retrievalAnswers: { ...calibrationSession.retrievalAnswers, [id]: event.target.value }, retrievalResults: null })}><option value="">Choose</option>{options.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
                  ))}
                  {calibrationSession.retrievalResults && <p role="status">{Object.values(calibrationSession.retrievalResults).filter(Boolean).length}/4 · ROUTE OPEN</p>}
                  <button className="run-action" type="submit" disabled={calibrationRetrieval.some(([id]) => !calibrationSession.retrievalAnswers[id])}>Check retrieval</button>
                </form>
              )}

              {calibrationSession.pane === "acknowledgement" && (
                <section className="calibration-pane">
                  <p className="pane-label">MASTERY ACKNOWLEDGEMENT</p>
                  <h2 id="calibration-pane-heading">The route stayed open; I repaired the human copy.</h2>
                  <fieldset className="confidence-group"><legend>Confidence</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="calibration-confidence" checked={calibrationMastery?.confidence === value} onChange={() => setCalibrationConfidence(value)} />{value}</label>)}</fieldset>
                  <button className="confirm-action" type="button" disabled={!calibrationMastery?.confidence} onClick={acknowledgeCalibrationMastery}>Acknowledge calibration mastery</button>
                </section>
              )}
            </section>
          </TerminalShell>
        )}
        {terminalOpen && scene.id === "ruins" && ruinsTerminalKind === "workload" && workloadSession && (
          <TerminalShell
            exerciseId={workloadSortExercise.exercise_id}
            title={workloadSortExercise.title}
            filename={workloadSession.form === "retry" ? "workload_sort_retry.json" : "workload_sort.json"}
            lessonId={workloadSortExercise.lesson_id}
            restoreFocusTo={terminalTriggerRef.current}
            onClose={() => setTerminalOpen(false)}
          >
            <form className="editor-layout workload-layout" onSubmit={checkWorkloadCard}>
              <aside className="task-pane" aria-labelledby="workload-task-heading">
                <p className="pane-label">ACTIVE CHECKPOINT</p>
                <h2 id="workload-task-heading">Workload Sort</h2>
                <p>Match each scenario to its primary workload or Terminal state. A passing form requires 10/12 with every critical contrast recovered.</p>
                <dl>
                  <div><dt>Activity</dt><dd>{workloadSortExercise.activity_id}</dd></div>
                  <div><dt>Form</dt><dd>{workloadSession.form}</dd></div>
                  <div><dt>Progress</dt><dd>{Math.min(workloadSession.index + 1, 12)} / 12</dd></div>
                </dl>
                {workloadSession.itemAttempt > 0 && workloadSession.phase === "answering" && (
                  <button className="hint-action" type="button" onClick={showWorkloadHint} disabled={workloadSession.hintLevel >= 2}>
                    Reveal contrast hint
                  </button>
                )}
              </aside>
              <div className="editor-stack workload-stack">
                {workloadSession.phase !== "form_complete" ? (
                  <fieldset className="workload-editor">
                    <legend>
                      <span>{getWorkloadItems(workloadSession.form)[workloadSession.index].id}</span>
                      {getWorkloadItems(workloadSession.form)[workloadSession.index].prompt}
                    </legend>
                    <div className="workload-choices">
                      {workloadChoices.map(([key, label]) => (
                        <label key={key} className={workloadSession.selected === key ? "choice-card selected" : "choice-card"}>
                          <input
                            type="radio"
                            name="workload-choice"
                            value={key}
                            checked={workloadSession.selected === key}
                            disabled={workloadSession.phase === "item_complete"}
                            onChange={(event) => setWorkloadSession({ ...workloadSession, selected: event.target.value })}
                          />
                          <code>{key}</code>
                          <span>{label}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                ) : (
                  <section className="workload-summary" aria-labelledby="workload-result-heading">
                    <p className="pane-label">FORM RESULT</p>
                    <h2 id="workload-result-heading">{getWorkloadOutcome(workloadSession).score} / 12</h2>
                    <p>{getWorkloadOutcome(workloadSession).passed
                      ? "Mastery gate met. Record confidence, then confirm the checkpoint."
                      : "Mastery gate not met. Load the deterministic fresh form after reviewing the flagged contrasts."}</p>
                    {getWorkloadOutcome(workloadSession).criticalMisses.length > 0 && (
                      <p>Review: {getWorkloadOutcome(workloadSession).criticalMisses.join(" · ")}</p>
                    )}
                    {getWorkloadOutcome(workloadSession).passed ? (
                      <fieldset className="confidence-group">
                        <legend>Confidence after this check</legend>
                        {[["low", "Low"], ["medium", "Medium"], ["high", "High"]].map(([value, label]) => (
                          <label key={value}>
                            <input type="radio" name="confidence" checked={workloadEvidence?.confidence === value} onChange={() => setWorkloadConfidence(value)} />
                            {label}
                          </label>
                        ))}
                      </fieldset>
                    ) : (
                      <button className="confirm-action" type="button" onClick={beginFreshWorkloadRetry}>Load fresh retry form</button>
                    )}
                  </section>
                )}
                <section className="terminal-console" aria-labelledby="workload-output-heading">
                  <div className="console-heading-row">
                    <strong id="workload-output-heading">OUTPUT / REMEDIATION</strong>
                    {workloadSession.phase === "answering" && <button className="run-action" type="submit">Check card</button>}
                    {workloadSession.phase === "item_complete" && (
                      <button className="run-action" type="button" onClick={advanceWorkloadCard}>
                        {workloadSession.index === 11 ? "View result" : "Next card"}
                      </button>
                    )}
                  </div>
                  <div className="console-feedback active" role="status" aria-live="polite">{workloadSession.feedback}</div>
                  {workloadSession.phase === "form_complete" && getWorkloadOutcome(workloadSession).passed && (
                    <button className="confirm-action" type="button" disabled={!workloadEvidence?.confidence} onClick={acknowledgeWorkloadCompletion}>
                      Acknowledge mastery
                    </button>
                  )}
                </section>
              </div>
            </form>
          </TerminalShell>
        )}
        {terminalOpen && scene.id === "ruins" && ruinsTerminalKind === "responsible-ai" && responsibleAISession && (
          <TerminalShell
            exerciseId={responsibleAIExercise.exercise_id}
            title="Responsible AI — Primary Practice"
            filename="primary_scenarios.json"
            lessonId={responsibleAIExercise.lesson_id}
            statusText={responsibleAISession.complete ? "PRIMARY 24/24" : `PRIMARY ${responsibleAISession.index + 1}/6`}
            closeLabel="Exit Practice"
            restoreFocusTo={terminalTriggerRef.current}
            onClose={exitResponsibleAI}
          >
            <section className="responsible-ai-workspace">
              <p className="responsible-ai-boundary">Course-authored practice scenario — not a Microsoft exam question. Real systems can implicate multiple principles; choose the closest primary harm.</p>
              {!responsibleAISession.complete ? (() => {
                const scenario = responsibleAIPrimaryScenarios[responsibleAISession.index];
                const choices = {
                  principle: responsibleAIPrinciples,
                  stakeholder: scenario.stakeholder_choices,
                  mitigation: scenario.mitigation_choices,
                  owner: scenario.owner_choices,
                };
                return (
                  <form className="responsible-ai-form" onSubmit={checkResponsibleAI}>
                    <header>
                      <p className="pane-label">PRIMARY RETRIEVAL · {scenario.id} · {responsibleAISession.index + 1}/6</p>
                      <h2>{scenario.prompt}</h2>
                    </header>
                    <div className="responsible-ai-fields">
                      {responsibleAIDimensions.map((dimension) => {
                        const fieldResult = responsibleAISession.result?.correctness[dimension];
                        const feedbackId = `rai-${dimension}-feedback`;
                        return (
                          <label key={dimension}>
                            <span>{dimension === "owner" ? "Accountable human owner" : dimension}</span>
                            <select
                              aria-label={`Responsible AI ${dimension}`}
                              aria-describedby={responsibleAISession.result ? feedbackId : undefined}
                              aria-invalid={responsibleAISession.result ? !fieldResult : undefined}
                              value={responsibleAISession.response[dimension]}
                              onChange={(event) => setResponsibleAISession({ ...responsibleAISession, response: { ...responsibleAISession.response, [dimension]: event.target.value }, result: null })}
                            >
                              <option value="">Choose one</option>
                              {choices[dimension].map((value) => <option key={value} value={value}>{formatChoice(value)}</option>)}
                            </select>
                            {responsibleAISession.result && <small id={feedbackId}>{fieldResult ? "Correct." : `Review ${dimension}: choose the closest harm, affected people, testable control, or accountable role.`}</small>}
                          </label>
                        );
                      })}
                    </div>
                    <section className="terminal-console responsible-ai-output" aria-labelledby="rai-output-heading">
                      <div className="console-heading-row"><strong id="rai-output-heading">STRICT VALIDATOR</strong><button className="run-action" type="submit" disabled={responsibleAIDimensions.some((dimension) => !responsibleAISession.response[dimension])}>Check four-part response</button></div>
                      <div className={responsibleAISession.result ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{responsibleAISession.result ? `${responsibleAISession.result.score}/4 · ${responsibleAISession.result.passed ? "Scenario confirmed." : responsibleAIRemediation(responsibleAISession.result, responsibleAISession.hintLevel)}` : "Respond with principle, stakeholder, concrete mitigation, and accountable human owner."}</div>
                      {responsibleAISession.result && !responsibleAISession.result.passed && <button className="hint-action" type="button" disabled={responsibleAISession.hintLevel >= 3} onClick={revealResponsibleAIHint}>Reveal next remediation step</button>}
                      {responsibleAISession.result?.passed && <button className="confirm-action" type="button" onClick={nextResponsibleAIScenario}>{responsibleAISession.index === 5 ? "View primary result" : "Next scenario"}</button>}
                    </section>
                  </form>
                );
              })() : (
                <section className="workload-summary responsible-ai-summary" aria-labelledby="rai-summary-heading">
                  <p className="pane-label">PRIMARY SLICE COMPLETE</p>
                  <h2 id="rai-summary-heading">24 / 24 dimensions</h2>
                  <p>This completes the primary course-authored form only. The unseen transfer form and closed-note explanation remain for the next implementation slice.</p>
                  <fieldset className="confidence-group"><legend>Confidence after primary form</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="rai-confidence" checked={responsibleAIEvidence?.confidence === value} onChange={() => setResponsibleAIConfidence(value)} />{value}</label>)}</fieldset>
                  <button className="confirm-action" type="button" disabled={!responsibleAIEvidence?.confidence} onClick={acknowledgeResponsibleAIPrimary}>Acknowledge primary form</button>
                </section>
              )}
            </section>
          </TerminalShell>
        )}
        {terminalOpen && scene.id === "automaton" && evidenceSession && (
          <TerminalShell
            exerciseId={evidencePacketExercise.exercise_id}
            title={evidencePacketExercise.title}
            filename="working_output.json"
            lessonId={evidencePacketExercise.lesson_id}
            restoreFocusTo={terminalTriggerRef.current}
            onClose={() => setTerminalOpen(false)}
          >
            <form className="editor-layout evidence-layout" onSubmit={validateEvidenceOutput}>
              <aside className="task-pane" aria-labelledby="evidence-task-heading">
                <p className="pane-label">MULTIMODAL CHECKPOINT</p>
                <h2 id="evidence-task-heading">Evidence Packet</h2>
                <p>Fill the exact schema from registered sources. Preserve measured false values and keep unsupported response meaning null.</p>
                <dl>
                  <div><dt>Activity</dt><dd>{evidencePacketExercise.activity_id}</dd></div>
                  <div><dt>Skills</dt><dd>AI901-D2-O7 · PY-015 · PY-016 · PY-020</dd></div>
                  <div><dt>Gate</dt><dd>12 / 12 + critical checks</dd></div>
                </dl>
                <details className="evidence-notes">
                  <summary>Session-only scratch notes</summary>
                  <label htmlFor="evidence-notes">Notes are cleared at scene transition and never saved.</label>
                  <textarea
                    id="evidence-notes"
                    value={evidenceSession.notes}
                    onChange={(event) => setEvidenceSession({ ...evidenceSession, notes: event.target.value })}
                  />
                </details>
              </aside>
              <div className="editor-stack evidence-stack">
                <div className="evidence-main">
                  <section className="evidence-browser" aria-labelledby="evidence-browser-heading">
                    <div className="evidence-tabs" role="tablist" aria-label="Registered evidence sources">
                      {[["manifest", "Manifest"], ["image", "Image"], ["audio", "Audio"], ["telemetry", "Telemetry"]].map(([value, label]) => (
                        <button
                          key={value}
                          type="button"
                          role="tab"
                          aria-selected={evidenceSession.activeSource === value}
                          onClick={() => setEvidenceSession({ ...evidenceSession, activeSource: value })}
                        >{label}</button>
                      ))}
                    </div>
                    <h3 id="evidence-browser-heading">READ-ONLY EVIDENCE</h3>
                    {evidenceSession.activeSource === "manifest" && <pre>{JSON.stringify(evidenceManifest, null, 2)}</pre>}
                    {evidenceSession.activeSource === "telemetry" && <pre>{JSON.stringify(evidenceTelemetry, null, 2)}</pre>}
                    {evidenceSession.activeSource === "image" && (
                      <figure>
                        <img src={ruinsAvailableImage} alt="Registered still image DA-IMG-01 showing the Tidal Lens landmark and grounded Terminal" />
                        <figcaption>DA-IMG-01 · inspect the suspended landmark region, not the grounded Terminal.</figcaption>
                      </figure>
                    )}
                    {evidenceSession.activeSource === "audio" && (
                      <div className="audio-evidence">
                        <p>DA-AUD-01 · deterministic three-second mono ambience · 16,000 Hz</p>
                        <audio controls src={evidenceAudio}>Your browser does not support the evidence audio control.</audio>
                      </div>
                    )}
                  </section>
                  <section className="evidence-editor" aria-labelledby="working-output-heading">
                    <h3 id="working-output-heading">EDITABLE · working_output.json</h3>
                    <textarea
                      id="evidence-json-editor"
                      aria-label="Editable working output JSON"
                      value={evidenceSession.workingOutput}
                      onChange={(event) => setEvidenceSession({ ...evidenceSession, workingOutput: event.target.value, result: null })}
                      autoCapitalize="off"
                      autoCorrect="off"
                      spellCheck="false"
                    />
                  </section>
                </div>
                <section className="terminal-console evidence-console" aria-labelledby="evidence-output-heading">
                  <div className="console-heading-row">
                    <strong id="evidence-output-heading">VALIDATOR OUTPUT</strong>
                    <button className="run-action" type="submit">Validate packet</button>
                  </div>
                  <div className={evidenceSession.result ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">
                    {evidenceSession.result
                      ? `${evidenceSession.result.score}/12 · ${evidenceSession.result.feedback}`
                      : "Ready. Inspect the evidence, edit the schema, then run all twelve deterministic checks."}
                  </div>
                  {evidenceSession.result && !evidenceSession.result.passed && (
                    <div className="evidence-remediation">
                      <p>{evidenceRemediation(evidenceSession.result, evidenceSession.hintLevel)}</p>
                      <button className="hint-action" type="button" disabled={evidenceSession.hintLevel >= 3} onClick={revealEvidenceRemediation}>
                        {evidenceSession.hintLevel < 2 ? "Reveal provenance trace" : "Reveal worked boundary"}
                      </button>
                    </div>
                  )}
                  {evidenceSession.result?.passed && (
                    <div className="evidence-mastery-row">
                      <fieldset className="confidence-group">
                        <legend>Confidence after validation</legend>
                        {["low", "medium", "high"].map((value) => (
                          <label key={value}>
                            <input type="radio" name="evidence-confidence" checked={evidencePacketMastery?.confidence === value} onChange={() => setEvidenceConfidence(value)} />
                            {value[0].toUpperCase() + value.slice(1)}
                          </label>
                        ))}
                      </fieldset>
                      <button className="confirm-action" type="button" disabled={!evidencePacketMastery?.confidence} onClick={acknowledgeEvidenceMastery}>
                        Acknowledge evidence mastery
                      </button>
                    </div>
                  )}
                </section>
              </div>
            </form>
          </TerminalShell>
        )}
      </section>

      <section className="command-panel" aria-label="Adventure controls and dialogue" inert={terminalOpen ? true : undefined}>
        <nav className="verb-grid" aria-label="Action verbs">
          {["LOOK AT", "USE", "TALK TO"].map((item) => (
            <button key={item} className={verb === item ? "verb active" : "verb"} onClick={() => setVerb(item)} disabled={pendingAdvance}>{item}</button>
          ))}
        </nav>

        <div className="dialogue-box" aria-live="polite">
          {questionOpen ? (
            <form className="terminal-form" onSubmit={runCode}>
              <label htmlFor="python-entry">{scene.question}</label>
              <div className="code-row">
                <span className="prompt-mark">&gt;&gt;&gt;</span>
                <input id="python-entry" value={code} onChange={(event) => setCode(event.target.value)} autoComplete="off" spellCheck="false" autoFocus />
                <button type="submit">Run</button>
              </div>
              <div className="terminal-help">
                <button type="button" onClick={() => setShowHint((value) => !value)}>{showHint ? "Hide hint" : "Need a hint?"}</button>
                <span className={feedback ? "feedback visible" : "feedback"}>{feedback || "Awaiting input"}</span>
              </div>
              {showHint && <p className="hint">{scene.hint}</p>}
            </form>
          ) : (
            <div className="dialogue-copy">
              <p>{dialogue}</p>
              <div className="dialogue-footer">
                <span className="speaker">PILOT // FLIGHT RECORDER</span>
                <div className="dialogue-actions">
                  {pendingAdvance && scene.id === "meadow" && routeMarkerMastery?.masteryStatus === "mastered" && calibrationMastery?.masteryStatus !== "mastered" && (
                    <button className="continue-action calibration-launch" data-terminal-focus-fallback onClick={(event) => { terminalTriggerRef.current = event.currentTarget; openCalibration(); }}>{calibrationSession ? "Resume Calibration" : "Start Calibration"}</button>
                  )}
                  {pendingAdvance && scene.id === "ruins" && workloadEvidence?.masteryStatus === "mastered" && responsibleAIEvidence?.masteryStatus !== "primary_complete" && (
                    <button className="continue-action" data-terminal-focus-fallback onClick={(event) => { terminalTriggerRef.current = event.currentTarget; openResponsibleAI(); }}>{responsibleAISession ? "Resume Responsible AI" : "Start Responsible AI"}</button>
                  )}
                  {pendingAdvance && (
                    <button className="continue-action" data-terminal-focus-fallback onClick={continueJourney}>
                      {completed.length === scenes.length ? "Descend to the city" : "Continue"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <aside className="inventory" aria-label="Inventory">
          <span className="inventory-title">INVENTORY</span>
          <button disabled={pendingAdvance} onClick={() => setDialogue("Your recorder preserves actions. It cannot preserve certainty.")}>Flight recorder</button>
          <button disabled={pendingAdvance} onClick={() => setDialogue("A sliver of Builder material. Warm only when you stop watching it.")}>Builder shard</button>
        </aside>
      </section>
    </main>
    </CanonicalGameFrame>
  );
}
