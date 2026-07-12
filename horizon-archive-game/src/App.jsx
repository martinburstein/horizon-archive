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
import { ADVENTURE_VERBS, getVerbPressedState } from "./verbSelection.js";
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
  evaluateResponsibleAIExplanation,
  evaluateResponsibleAIScenario,
  responsibleAIDimensions,
  responsibleAIExercise,
  responsibleAIPrimaryScenarios,
  responsibleAIPrinciples,
  responsibleAIRemediation,
  responsibleAITransferScenarios,
  sanitizeResponsibleAIEvidence,
  updateResponsibleAIEvidence,
} from "./responsibleAIExercise.js";
import {
  evaluateModelChoiceExplanation,
  evaluateModelChoiceScenario,
  getModelChoiceEligibility,
  getModelChoiceOptions,
  modelChoiceDimensions,
  modelChoiceExercise,
  modelChoicePrimaryScenarios,
  modelChoiceRemediation,
  modelChoiceTransferScenarios,
  sanitizeModelChoiceEvidence,
  updateModelChoiceEvidence,
} from "./modelChoiceExercise.js";
import {
  evaluateStructuredPacketExplanation,
  evaluateStructuredPacketSource,
  getStructuredExplanationFeedback,
  getStructuredPacketFeedback,
  sanitizeStructuredPacketEvidence,
  structuredPacketChecks,
  structuredPacketExercise,
  structuredPacketExplanationDimensions,
  structuredPacketStarters,
  updateStructuredPacketEvidence,
} from "./structuredPacketExercise.js";
import {
  controlFlowChecks,
  controlFlowExercise,
  controlFlowExplanationDimensions,
  controlFlowStarters,
  evaluateControlFlowExplanation,
  evaluateControlFlowSource,
  getControlFlowExplanationFeedback,
  getControlFlowFeedback,
  sanitizeControlFlowEvidence,
  updateControlFlowEvidence,
} from "./controlFlowExercise.js";
import {
  clientBridgeChecks,
  clientBridgeExercise,
  clientBridgeExplanationDimensions,
  clientBridgeRetrieval,
  clientBridgeStarters,
  evaluateClientBridgeExplanation,
  evaluateClientBridgeRetrieval,
  evaluateClientBridgeSource,
  getClientBridgeExplanationFeedback,
  getClientBridgeFeedback,
  getClientBridgeRetrievalFeedback,
  getClientBridgeRetrievalOptions,
  sanitizeClientBridgeEvidence,
  updateClientBridgeEvidence,
} from "./clientBridgeExercise.js";
import {
  evaluateTextAnalysisExplanation,
  evaluateTextAnalysisScenario,
  getTextAnalysisExplanationFeedback,
  getTextAnalysisFeedback,
  getTextAnalysisOptions,
  sanitizeTextAnalysisEvidence,
  textAnalysisDimensions,
  textAnalysisExercise,
  textAnalysisExplanationDimensions,
  textAnalysisPrimaryScenarios,
  textAnalysisTransferScenarios,
  updateTextAnalysisEvidence,
} from "./textAnalysisExercise.js";
import {
  evaluateSpeechExplanation,
  evaluateSpeechScenario,
  getSpeechExplanationFeedback,
  getSpeechFeedback,
  getSpeechOptions,
  sanitizeSpeechEvidence,
  speechDialogDescribedBy,
  speechDimensions,
  speechExplanationDimensions,
  speechPrimaryScenarios,
  speechTransferScenarios,
  speechWorkloadExercise,
  updateSpeechEvidence,
} from "./speechWorkloadExercise.js";
import {
  evaluateVisualExplanation,
  evaluateVisualScenario,
  getVisualExplanationFeedback,
  getVisualFeedback,
  getVisualOptions,
  sanitizeVisualEvidence,
  updateVisualEvidence,
  visualDialogDescribedBy,
  visualDimensions,
  visualExplanationDimensions,
  visualPrimaryScenarios,
  visualTransferScenarios,
  visualWorkloadExercise,
} from "./visualWorkloadExercise.js";
import {
  evaluateExtractionExplanation,
  evaluateExtractionScenario,
  extractionDialogDescribedBy,
  extractionDimensions,
  extractionExplanationDimensions,
  extractionPrimaryScenarios,
  extractionTransferScenarios,
  extractionWorkloadExercise,
  getExtractionExplanationFeedback,
  getExtractionFeedback,
  getExtractionOptions,
  sanitizeExtractionEvidence,
  updateExtractionEvidence,
} from "./extractionWorkloadExercise.js";

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
    prompt: "A grounded Terminal stands by the causeway. The Tidal Lens remains silent.",
    question: "Create a variable named pilot_name containing the text MARTIN.",
    answer: 'pilot_name = "MARTIN"',
    validate: (value) => validateAnswer("ruins", value),
    hint: "Use a variable name, an equals sign, then quoted text.",
    success: "Terminal fins align; route geometry appears. The Tidal Lens remains unchanged.",
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

function TerminalShell({ exerciseId, title, filename, lessonId, statusText, closeLabel = "Close Terminal", describedBy, restoreFocusTo, onClose, children }) {
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
    <section ref={dialogRef} className="terminal-workbench" role="dialog" aria-modal="true" aria-labelledby="terminal-title" aria-describedby={describedBy} data-terminal-exercise={exerciseId} onKeyDown={handleDialogKeyDown}>
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

function getDialogueSpeaker(owner) {
  if (owner === "system") return "SYSTEM // EXPEDITION STATE";
  if (owner === "teacher") return "901 TEACHER // SOURCE-GROUNDED COURSE";
  return "PILOT // FLIGHT RECORDER";
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
      modelChoiceEvidence: sanitizeModelChoiceEvidence(saved.modelChoiceEvidence),
      structuredPacketEvidence: sanitizeStructuredPacketEvidence(saved.structuredPacketEvidence),
      controlFlowEvidence: sanitizeControlFlowEvidence(saved.controlFlowEvidence),
      clientBridgeEvidence: sanitizeClientBridgeEvidence(saved.clientBridgeEvidence),
      textAnalysisEvidence: sanitizeTextAnalysisEvidence(saved.textAnalysisEvidence),
      speechEvidence: sanitizeSpeechEvidence(saved.speechEvidence),
      visualEvidence: sanitizeVisualEvidence(saved.visualEvidence),
      extractionEvidence: sanitizeExtractionEvidence(saved.extractionEvidence),
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
  const [dialogue, setDialogueText] = useState("Select a verb, then choose something in the scene.");
  const [dialogueOwner, setDialogueOwner] = useState("system");
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
  const [modelChoiceSession, setModelChoiceSession] = useState(null);
  const [modelChoiceEvidence, setModelChoiceEvidence] = useState(null);
  const [structuredPacketSession, setStructuredPacketSession] = useState(null);
  const [structuredPacketEvidence, setStructuredPacketEvidence] = useState(null);
  const [controlFlowSession, setControlFlowSession] = useState(null);
  const [controlFlowEvidence, setControlFlowEvidence] = useState(null);
  const [clientBridgeSession, setClientBridgeSession] = useState(null);
  const [clientBridgeEvidence, setClientBridgeEvidence] = useState(null);
  const [textAnalysisSession, setTextAnalysisSession] = useState(null);
  const [textAnalysisEvidence, setTextAnalysisEvidence] = useState(null);
  const [speechSession, setSpeechSession] = useState(null);
  const [speechEvidence, setSpeechEvidence] = useState(null);
  const [visualSession, setVisualSession] = useState(null);
  const [visualEvidence, setVisualEvidence] = useState(null);
  const [extractionSession, setExtractionSession] = useState(null);
  const [extractionEvidence, setExtractionEvidence] = useState(null);
  const terminalTriggerRef = useRef(null);
  const continueButtonRef = useRef(null);
  const focusContinueAfterStructuredRef = useRef(false);
  const focusContinueAfterControlRef = useRef(false);
  const focusContinueAfterClientRef = useRef(false);
  const focusContinueAfterTextRef = useRef(false);
  const focusContinueAfterSpeechRef = useRef(false);
  const focusContinueAfterVisualRef = useRef(false);
  const focusContinueAfterExtractionRef = useRef(false);

  function setDialogue(text, owner = "pilot") {
    setDialogueText(text);
    setDialogueOwner(owner);
  }

  const scene = scenes[Math.min(sceneIndex, scenes.length - 1)];
  const verbPressedState = getVerbPressedState(verb);
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
        modelChoiceEvidence,
        structuredPacketEvidence,
        controlFlowEvidence,
        clientBridgeEvidence,
        textAnalysisEvidence,
        speechEvidence,
        visualEvidence,
        extractionEvidence,
      }));
    }
  }, [mode, sceneIndex, completed, pendingAdvance, scene.id, exerciseEvidence, workloadEvidence, evidencePacketMastery, routeMarkerMastery, calibrationMastery, responsibleAIEvidence, modelChoiceEvidence, structuredPacketEvidence, controlFlowEvidence, clientBridgeEvidence, textAnalysisEvidence, speechEvidence, visualEvidence, extractionEvidence]);

  useLayoutEffect(() => {
    if (!focusContinueAfterStructuredRef.current || terminalOpen || structuredPacketEvidence?.masteryStatus !== "mastered") return;
    focusContinueAfterStructuredRef.current = false;
    continueButtonRef.current?.focus({ preventScroll: true });
  }, [terminalOpen, structuredPacketEvidence?.masteryStatus]);

  useLayoutEffect(() => {
    if (!focusContinueAfterControlRef.current || terminalOpen || !pendingAdvance || controlFlowEvidence?.masteryStatus !== "mastered") return;
    focusContinueAfterControlRef.current = false;
    continueButtonRef.current?.focus({ preventScroll: true });
  }, [terminalOpen, pendingAdvance, controlFlowEvidence?.masteryStatus]);

  useLayoutEffect(() => {
    if (!focusContinueAfterClientRef.current || terminalOpen || !pendingAdvance || clientBridgeEvidence?.masteryStatus !== "mastered") return;
    focusContinueAfterClientRef.current = false;
    continueButtonRef.current?.focus({ preventScroll: true });
  }, [terminalOpen, pendingAdvance, clientBridgeEvidence?.masteryStatus]);

  useLayoutEffect(() => {
    if (!focusContinueAfterTextRef.current || terminalOpen || !pendingAdvance || textAnalysisEvidence?.masteryStatus !== "mastered") return;
    focusContinueAfterTextRef.current = false;
    continueButtonRef.current?.focus({ preventScroll: true });
  }, [terminalOpen, pendingAdvance, textAnalysisEvidence?.masteryStatus]);

  useLayoutEffect(() => {
    if (!focusContinueAfterSpeechRef.current || terminalOpen || !pendingAdvance || speechEvidence?.masteryStatus !== "mastered") return;
    focusContinueAfterSpeechRef.current = false;
    continueButtonRef.current?.focus({ preventScroll: true });
  }, [terminalOpen, pendingAdvance, speechEvidence?.masteryStatus]);

  useLayoutEffect(() => {
    if (!focusContinueAfterVisualRef.current || terminalOpen || !pendingAdvance || visualEvidence?.masteryStatus !== "mastered") return;
    focusContinueAfterVisualRef.current = false;
    continueButtonRef.current?.focus({ preventScroll: true });
  }, [terminalOpen, pendingAdvance, visualEvidence?.masteryStatus]);

  useLayoutEffect(() => {
    if (!focusContinueAfterExtractionRef.current || terminalOpen || !pendingAdvance || extractionEvidence?.masteryStatus !== "mastered") return;
    focusContinueAfterExtractionRef.current = false;
    continueButtonRef.current?.focus({ preventScroll: true });
  }, [terminalOpen, pendingAdvance, extractionEvidence?.masteryStatus]);

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
    setModelChoiceSession(null);
    setModelChoiceEvidence(null);
    setStructuredPacketSession(null);
    setStructuredPacketEvidence(null);
    setControlFlowSession(null);
    setControlFlowEvidence(null);
    setClientBridgeSession(null);
    setClientBridgeEvidence(null);
    setTextAnalysisSession(null);
    setTextAnalysisEvidence(null);
    setSpeechSession(null);
    setSpeechEvidence(null);
    setVisualSession(null);
    setVisualEvidence(null);
    setExtractionSession(null);
    setExtractionEvidence(null);
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
    setStructuredPacketSession(null);
    if (saved.controlFlowEvidence?.masteryStatus === "mastered") focusContinueAfterControlRef.current = true;
    setControlFlowEvidence(saved.controlFlowEvidence);
    setControlFlowSession(null);
    if (saved.clientBridgeEvidence?.masteryStatus === "mastered") focusContinueAfterClientRef.current = true;
    setClientBridgeEvidence(saved.clientBridgeEvidence);
    setClientBridgeSession(null);
    if (saved.textAnalysisEvidence?.masteryStatus === "mastered") focusContinueAfterTextRef.current = true;
    setTextAnalysisEvidence(saved.textAnalysisEvidence);
    setTextAnalysisSession(null);
    if (saved.speechEvidence?.masteryStatus === "mastered") focusContinueAfterSpeechRef.current = true;
    setSpeechEvidence(saved.speechEvidence);
    setSpeechSession(null);
    if (saved.visualEvidence?.masteryStatus === "mastered") focusContinueAfterVisualRef.current = true;
    setVisualEvidence(saved.visualEvidence);
    setVisualSession(null);
    if (saved.extractionEvidence?.masteryStatus === "mastered") focusContinueAfterExtractionRef.current = true;
    setExtractionEvidence(saved.extractionEvidence);
    setExtractionSession(null);
    setResponsibleAIEvidence(saved.responsibleAIEvidence);
    setResponsibleAISession(null);
    setModelChoiceEvidence(saved.modelChoiceEvidence);
    setModelChoiceSession(null);
    setStructuredPacketEvidence(saved.structuredPacketEvidence);
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
      const form = responsibleAIEvidence?.form === "transfer" || responsibleAIEvidence?.form === "explanation" || responsibleAIEvidence?.masteryStatus === "primary_complete" ? "transfer" : "primary";
      const phase = responsibleAIEvidence?.form === "explanation" ? "explanation" : "scenarios";
      setResponsibleAISession({ form, phase, index: 0, response: { principle: "", stakeholder: "", mitigation: "", owner: "" }, result: null, hintLevel: 0, complete: false, explanationResponse: { principle: "", stakeholder: "", mitigation: "", owner: "" }, explanationResult: null, ownershipConfirmed: false });
    }
  }

  function exitResponsibleAI() {
    setTerminalOpen(false);
    setRuinsTerminalKind(null);
    setDialogue("Responsible AI practice closed safely. Continue or resume from the same session when ready.", "system");
  }

  function checkResponsibleAI(event) {
    event.preventDefault();
    const scenarios = responsibleAISession.form === "transfer" ? responsibleAITransferScenarios : responsibleAIPrimaryScenarios;
    const scenario = scenarios[responsibleAISession.index];
    const result = evaluateResponsibleAIScenario(scenario.id, responsibleAISession.response, responsibleAISession.form);
    const hintLevel = result.passed ? responsibleAISession.hintLevel : Math.max(1, responsibleAISession.hintLevel);
    setResponsibleAISession({ ...responsibleAISession, result, hintLevel });
    setResponsibleAIEvidence((previous) => updateResponsibleAIEvidence(previous, {
      scenarioId: scenario.id, correctness: result.correctness, incrementAttempt: true, hintLevel,
      form: responsibleAISession.form, misconceptionTags: result.misconceptionTags, masteryStatus: responsibleAISession.form === "transfer" ? "primary_complete" : result.passed ? "in_progress" : "remediation_required",
    }));
  }

  function revealResponsibleAIHint() {
    const hintLevel = Math.min(3, responsibleAISession.hintLevel + 1);
    setResponsibleAISession({ ...responsibleAISession, hintLevel });
    setResponsibleAIEvidence((previous) => updateResponsibleAIEvidence(previous, { hintLevel }));
  }

  function nextResponsibleAIScenario() {
    if (!responsibleAISession.result?.passed) return;
    const scenarios = responsibleAISession.form === "transfer" ? responsibleAITransferScenarios : responsibleAIPrimaryScenarios;
    if (responsibleAISession.index === scenarios.length - 1) {
      if (responsibleAISession.form === "transfer") {
        setResponsibleAIEvidence((previous) => updateResponsibleAIEvidence(previous, { form: "explanation", masteryStatus: "transfer_complete", clearMisconceptionTags: true }));
        setResponsibleAISession({ ...responsibleAISession, phase: "explanation", complete: false, result: null, hintLevel: 0 });
      } else {
        setResponsibleAISession({ ...responsibleAISession, complete: true });
      }
      return;
    }
    setResponsibleAISession({ ...responsibleAISession, index: responsibleAISession.index + 1, response: { principle: "", stakeholder: "", mitigation: "", owner: "" }, result: null, hintLevel: 0, complete: false });
  }

  function setResponsibleAIConfidence(confidence) {
    setResponsibleAIEvidence((previous) => updateResponsibleAIEvidence(previous, { confidence }));
  }

  function acknowledgeResponsibleAIPrimary() {
    if (!responsibleAISession?.complete || !responsibleAIEvidence?.confidence) return;
    setResponsibleAIEvidence((previous) => updateResponsibleAIEvidence(previous, { form: "transfer", masteryStatus: "primary_complete", clearMisconceptionTags: true }));
    setResponsibleAISession(null);
    setTerminalOpen(false);
    setRuinsTerminalKind(null);
    setDialogue("Primary responsible AI practice complete. The fresh transfer form is ready when you are; this remains course-authored practice, not a Microsoft exam question.", "teacher");
  }

  function checkResponsibleAIExplanation(event) {
    event.preventDefault();
    const result = evaluateResponsibleAIExplanation("T06", responsibleAISession.explanationResponse);
    const hintLevel = result.passed ? responsibleAISession.hintLevel : Math.max(1, responsibleAISession.hintLevel);
    setResponsibleAISession({ ...responsibleAISession, explanationResult: result, hintLevel });
    setResponsibleAIEvidence((previous) => updateResponsibleAIEvidence(previous, {
      form: "explanation", scenarioId: "closed_note_explanation", correctness: result.correctness,
      incrementAttempt: true, hintLevel, misconceptionTags: result.misconceptionTags,
      masteryStatus: "transfer_complete",
    }));
  }

  function acknowledgeResponsibleAIMastery() {
    if (!responsibleAISession?.explanationResult?.passed || !responsibleAISession.ownershipConfirmed || !responsibleAIEvidence?.confidence) return;
    setResponsibleAIEvidence((previous) => updateResponsibleAIEvidence(previous, { form: "explanation", masteryStatus: "mastered", clearMisconceptionTags: true }));
    setResponsibleAISession(null);
    setTerminalOpen(false);
    setRuinsTerminalKind(null);
    setDialogue("Responsible AI readiness confirmed: both course-authored forms and the closed-note explanation are complete. These were not Microsoft exam questions.", "teacher");
  }

  function openModelChoiceExercise() {
    setTerminalOpen(true);
    setRuinsTerminalKind("model-choice");
    if (!modelChoiceSession) {
      const { form } = getModelChoiceEligibility(modelChoiceEvidence);
      setModelChoiceSession({ form, phase: form === "explanation" ? "explanation" : "scenarios", index: 0, response: { decision: "", reason: "" }, result: null, hintLevel: 0, complete: false, explanationResponse: { decision: "", reason: "" }, explanationResult: null, ownershipConfirmed: false });
    }
  }

  function exitModelChoiceExercise() {
    const phase = modelChoiceSession?.phase === "explanation" ? "Closed-note gate" : modelChoiceSession?.form === "transfer" ? "Transfer form" : "Primary form";
    setTerminalOpen(false);
    setRuinsTerminalKind(null);
    setModelChoiceSession(null);
    setDialogue(`${phase} closed safely. Sanitized eligibility and evidence remain; private answers were cleared.`, "system");
  }

  function checkModelChoice(event) {
    event.preventDefault();
    const scenarios = modelChoiceSession.form === "transfer" ? modelChoiceTransferScenarios : modelChoicePrimaryScenarios;
    const scenario = scenarios[modelChoiceSession.index];
    const result = evaluateModelChoiceScenario(scenario.id, modelChoiceSession.response, modelChoiceSession.form);
    const hintLevel = result.passed ? modelChoiceSession.hintLevel : Math.max(1, modelChoiceSession.hintLevel);
    setModelChoiceSession({ ...modelChoiceSession, result, hintLevel });
    setModelChoiceEvidence((previous) => updateModelChoiceEvidence(previous, {
      form: modelChoiceSession.form, scenarioId: scenario.id, correctness: result.correctness, incrementAttempt: true, hintLevel,
      misconceptionTags: result.misconceptionTags, masteryStatus: modelChoiceSession.form === "transfer" ? "primary_complete" : result.passed ? "in_progress" : "remediation_required",
    }));
  }

  function revealModelChoiceHint() {
    const hintLevel = Math.min(3, modelChoiceSession.hintLevel + 1);
    setModelChoiceSession({ ...modelChoiceSession, hintLevel });
    setModelChoiceEvidence((previous) => updateModelChoiceEvidence(previous, { hintLevel }));
  }

  function nextModelChoiceScenario() {
    if (!modelChoiceSession.result?.passed) return;
    const scenarios = modelChoiceSession.form === "transfer" ? modelChoiceTransferScenarios : modelChoicePrimaryScenarios;
    if (modelChoiceSession.index === scenarios.length - 1) {
      if (modelChoiceSession.form === "transfer") {
        setModelChoiceEvidence((previous) => updateModelChoiceEvidence(previous, { form: "explanation", masteryStatus: "transfer_complete", clearMisconceptionTags: true }));
        setModelChoiceSession({ ...modelChoiceSession, form: "explanation", phase: "explanation", complete: false, result: null, hintLevel: 0 });
      } else setModelChoiceSession({ ...modelChoiceSession, complete: true });
      return;
    }
    setModelChoiceSession({ ...modelChoiceSession, index: modelChoiceSession.index + 1, response: { decision: "", reason: "" }, result: null, hintLevel: 0 });
  }

  function acknowledgeModelChoicePrimary() {
    if (!modelChoiceSession?.complete || !modelChoiceEvidence?.confidence) return;
    setModelChoiceEvidence((previous) => updateModelChoiceEvidence(previous, { form: "transfer", masteryStatus: "primary_complete", clearMisconceptionTags: true }));
    setModelChoiceSession(null);
    setTerminalOpen(false);
    setRuinsTerminalKind(null);
    setDialogue("Model and deployment primary form complete at 16 of 16. Transfer and closed-note explanation remain; this course-authored practice is not a Microsoft exam question.", "teacher");
  }

  function checkModelChoiceExplanation(event) {
    event.preventDefault();
    const result = evaluateModelChoiceExplanation(modelChoiceSession.explanationResponse);
    const hintLevel = result.passed ? modelChoiceSession.hintLevel : Math.max(1, modelChoiceSession.hintLevel);
    setModelChoiceSession({ ...modelChoiceSession, explanationResult: result, hintLevel });
    setModelChoiceEvidence((previous) => updateModelChoiceEvidence(previous, {
      form: "explanation", scenarioId: "closed_note_explanation", correctness: result.correctness,
      incrementAttempt: true, hintLevel, misconceptionTags: result.misconceptionTags, masteryStatus: "transfer_complete",
    }));
  }

  function acknowledgeModelChoiceMastery() {
    if (!modelChoiceSession?.explanationResult?.passed || !modelChoiceSession.ownershipConfirmed || !modelChoiceEvidence?.confidence) return;
    setModelChoiceEvidence((previous) => updateModelChoiceEvidence(previous, { form: "explanation", masteryStatus: "mastered", clearMisconceptionTags: true }));
    setModelChoiceSession(null);
    setTerminalOpen(false);
    setRuinsTerminalKind(null);
    setDialogue("Model and deployment readiness confirmed: both 16-of-16 course-authored forms and the closed-note decision explanation are complete.", "teacher");
  }

  function openStructuredPackets() {
    setTerminalOpen(true);
    setRuinsTerminalKind("structured-packets");
    if (!structuredPacketSession) {
      const form = structuredPacketEvidence?.masteryStatus === "primary_complete" ? "transfer" : structuredPacketEvidence?.masteryStatus === "transfer_complete" ? "explanation" : "primary";
      setStructuredPacketSession({ form, phase: form === "explanation" ? "explanation" : "code", source: form === "explanation" ? "" : structuredPacketStarters[form], result: null, hintLevel: 0, complete: false, explanationResponse: { container_path: "", nested_access: "", json_round_trip: "" }, explanationResult: null, ownershipConfirmed: false });
    }
  }

  function exitStructuredPackets() {
    setTerminalOpen(false);
    setRuinsTerminalKind(null);
    setDialogue("Structured Packet practice closed safely. The active source remains in this session only.", "system");
  }

  function runStructuredPacket(event) {
    event.preventDefault();
    const result = evaluateStructuredPacketSource(structuredPacketSession.source, structuredPacketSession.form);
    const hintLevel = result.passed ? structuredPacketSession.hintLevel : Math.max(1, structuredPacketSession.hintLevel);
    setStructuredPacketSession({ ...structuredPacketSession, result, hintLevel });
    setStructuredPacketEvidence((previous) => updateStructuredPacketEvidence(previous, { form: structuredPacketSession.form, correctness: result.checks, incrementAttempt: true, hintLevel, misconceptionTags: result.misconceptionTags, masteryStatus: structuredPacketSession.form === "transfer" ? "primary_complete" : result.passed ? "in_progress" : "remediation_required" }));
  }

  function revealStructuredPacketHint() {
    const hintLevel = Math.min(3, structuredPacketSession.hintLevel + 1);
    setStructuredPacketSession({ ...structuredPacketSession, hintLevel });
    setStructuredPacketEvidence((previous) => updateStructuredPacketEvidence(previous, { hintLevel }));
  }

  function advanceStructuredPacket() {
    if (!structuredPacketSession.result?.passed) return;
    if (structuredPacketSession.form === "transfer") {
      setStructuredPacketEvidence((previous) => updateStructuredPacketEvidence(previous, { form: "explanation", masteryStatus: "transfer_complete", clearMisconceptionTags: true }));
      setStructuredPacketSession({ ...structuredPacketSession, form: "explanation", phase: "explanation", source: "", result: null, hintLevel: 0 });
    } else setStructuredPacketSession({ ...structuredPacketSession, complete: true });
  }

  function acknowledgeStructuredPrimary() {
    if (!structuredPacketSession?.complete || !structuredPacketEvidence?.confidence) return;
    setStructuredPacketEvidence((previous) => updateStructuredPacketEvidence(previous, { form: "transfer", masteryStatus: "primary_complete", clearMisconceptionTags: true }));
    setStructuredPacketSession(null);
    setTerminalOpen(false);
    setRuinsTerminalKind(null);
    setDialogue("Structured Packet primary form complete at 8 of 8. A fresh transfer and closed-note data path remain.", "teacher");
  }

  function checkStructuredExplanation(event) {
    event.preventDefault();
    const result = evaluateStructuredPacketExplanation(structuredPacketSession.explanationResponse);
    setStructuredPacketSession({ ...structuredPacketSession, explanationResult: result });
    setStructuredPacketEvidence((previous) => updateStructuredPacketEvidence(previous, { form: "explanation", correctness: result.correctness, incrementAttempt: true, masteryStatus: "transfer_complete" }));
  }

  function acknowledgeStructuredMastery() {
    if (!structuredPacketSession?.explanationResult?.passed || !structuredPacketSession.ownershipConfirmed || !structuredPacketEvidence?.confidence) return;
    focusContinueAfterStructuredRef.current = true;
    setStructuredPacketEvidence((previous) => updateStructuredPacketEvidence(previous, { form: "explanation", masteryStatus: "mastered", clearMisconceptionTags: true }));
    setStructuredPacketSession(null);
    setTerminalOpen(false);
    setRuinsTerminalKind(null);
    setDialogue("Structured Packet mastery confirmed: both 8-of-8 forms and the closed-note data path are complete.", "teacher");
  }

  function openControlFlow() {
    setTerminalOpen(true); setRuinsTerminalKind("control-flow");
    if (!controlFlowSession) {
      const form = controlFlowEvidence?.masteryStatus === "primary_complete" ? "transfer" : controlFlowEvidence?.masteryStatus === "transfer_complete" ? "explanation" : "primary";
      setControlFlowSession({ form, phase: form === "explanation" ? "explanation" : "code", source: form === "explanation" ? "" : controlFlowStarters[form], result: null, hintLevel: 0, complete: false, explanationResponse: { parameter: "", loop_condition: "", return: "" }, explanationResult: null, ownershipConfirmed: false });
    }
  }
  function exitControlFlow() { setTerminalOpen(false); setRuinsTerminalKind(null); setDialogue("Control Flow practice closed safely. The active function remains session-only.", "system"); }
  function runControlFlow(event) {
    event.preventDefault(); const result = evaluateControlFlowSource(controlFlowSession.source, controlFlowSession.form); const hintLevel = result.passed ? controlFlowSession.hintLevel : Math.max(1, controlFlowSession.hintLevel);
    setControlFlowSession({ ...controlFlowSession, result, hintLevel });
    setControlFlowEvidence((previous) => updateControlFlowEvidence(previous, { form: controlFlowSession.form, correctness: result.checks, incrementAttempt: true, hintLevel, misconceptionTags: result.misconceptionTags, masteryStatus: controlFlowSession.form === "transfer" ? "primary_complete" : result.passed ? "in_progress" : "remediation_required" }));
  }
  function revealControlFlowHint() { const hintLevel = Math.min(3, controlFlowSession.hintLevel + 1); setControlFlowSession({ ...controlFlowSession, hintLevel }); setControlFlowEvidence((previous) => updateControlFlowEvidence(previous, { hintLevel })); }
  function advanceControlFlow() {
    if (!controlFlowSession.result?.passed) return;
    if (controlFlowSession.form === "transfer") { setControlFlowEvidence((previous) => updateControlFlowEvidence(previous, { form: "explanation", masteryStatus: "transfer_complete", clearMisconceptionTags: true })); setControlFlowSession({ ...controlFlowSession, form: "explanation", phase: "explanation", source: "", result: null, hintLevel: 0 }); }
    else setControlFlowSession({ ...controlFlowSession, complete: true });
  }
  function acknowledgeControlFlowPrimary() { if (!controlFlowSession?.complete || !controlFlowEvidence?.confidence) return; setControlFlowEvidence((previous) => updateControlFlowEvidence(previous, { form: "transfer", masteryStatus: "primary_complete", clearMisconceptionTags: true })); setControlFlowSession(null); setTerminalOpen(false); setRuinsTerminalKind(null); setDialogue("Control Flow primary form complete at 8 of 8. Unseen transfer and closed-note flow remain.", "teacher"); }
  function checkControlFlowExplanation(event) { event.preventDefault(); const result = evaluateControlFlowExplanation(controlFlowSession.explanationResponse); setControlFlowSession({ ...controlFlowSession, explanationResult: result }); setControlFlowEvidence((previous) => updateControlFlowEvidence(previous, { form: "explanation", correctness: result.correctness, incrementAttempt: true, masteryStatus: "transfer_complete" })); }
  function acknowledgeControlFlowMastery() { if (!controlFlowSession?.explanationResult?.passed || !controlFlowSession.ownershipConfirmed || !controlFlowEvidence?.confidence) return; focusContinueAfterControlRef.current = true; setControlFlowEvidence((previous) => updateControlFlowEvidence(previous, { form: "explanation", masteryStatus: "mastered", clearMisconceptionTags: true })); setControlFlowSession(null); setTerminalOpen(false); setRuinsTerminalKind(null); setDialogue("Control Flow mastery confirmed: primary, unseen transfer, and closed-note flow are complete.", "teacher"); }

  function openClientBridge() {
    setTerminalOpen(true); setRuinsTerminalKind("client-bridge");
    if (!clientBridgeSession) { const form = clientBridgeEvidence?.masteryStatus === "primary_complete" ? "transfer" : clientBridgeEvidence?.masteryStatus === "transfer_complete" ? "retrieval" : clientBridgeEvidence?.masteryStatus === "retrieval_complete" ? "explanation" : "primary"; setClientBridgeSession({ form, phase: ["retrieval", "explanation"].includes(form) ? form : "code", source: ["primary", "transfer"].includes(form) ? clientBridgeStarters[form] : "", result: null, hintLevel: 0, complete: false, retrievalAnswers: {}, retrievalResult: null, explanationResponse: { module: "", file: "", secret: "", request: "", response: "" }, explanationResult: null, ownershipConfirmed: false }); }
  }
  function exitClientBridge() { setTerminalOpen(false); setRuinsTerminalKind(null); setDialogue("Client Bridge practice closed safely. Source, config, and simulated environment remain session-only.", "system"); }
  function runClientBridge(event) { event.preventDefault(); const result = evaluateClientBridgeSource(clientBridgeSession.source, clientBridgeSession.form); const hintLevel = result.passed ? clientBridgeSession.hintLevel : Math.max(1, clientBridgeSession.hintLevel); setClientBridgeSession({ ...clientBridgeSession, result, hintLevel }); setClientBridgeEvidence((previous) => updateClientBridgeEvidence(previous, { form: clientBridgeSession.form, correctness: result.checks, incrementAttempt: true, hintLevel, misconceptionTags: result.misconceptionTags, masteryStatus: clientBridgeSession.form === "transfer" ? "primary_complete" : result.passed ? "in_progress" : "remediation_required" })); }
  function revealClientBridgeHint() { const hintLevel = Math.min(3, clientBridgeSession.hintLevel + 1); setClientBridgeSession({ ...clientBridgeSession, hintLevel }); setClientBridgeEvidence((previous) => updateClientBridgeEvidence(previous, { hintLevel })); }
  function advanceClientBridge() { if (!clientBridgeSession.result?.passed) return; if (clientBridgeSession.form === "transfer") { setClientBridgeEvidence((previous) => updateClientBridgeEvidence(previous, { form: "retrieval", masteryStatus: "transfer_complete", clearMisconceptionTags: true })); setClientBridgeSession({ ...clientBridgeSession, form: "retrieval", phase: "retrieval", source: "", result: null, hintLevel: 0 }); } else setClientBridgeSession({ ...clientBridgeSession, complete: true }); }
  function acknowledgeClientBridgePrimary() { if (!clientBridgeSession?.complete || !clientBridgeEvidence?.confidence) return; setClientBridgeEvidence((previous) => updateClientBridgeEvidence(previous, { form: "transfer", masteryStatus: "primary_complete", clearMisconceptionTags: true })); setClientBridgeSession(null); setTerminalOpen(false); setRuinsTerminalKind(null); setDialogue("Client Bridge primary form complete at 10 of 10. Fresh transfer, retrieval, and closed-note layers remain.", "teacher"); }
  function checkClientBridgeRetrieval(event) { event.preventDefault(); const result = evaluateClientBridgeRetrieval(clientBridgeSession.retrievalAnswers); setClientBridgeSession({ ...clientBridgeSession, retrievalResult: result }); setClientBridgeEvidence((previous) => updateClientBridgeEvidence(previous, { form: "retrieval", correctness: result.correctness, incrementAttempt: true, masteryStatus: result.passed ? "retrieval_complete" : "transfer_complete" })); }
  function advanceClientBridgeExplanation() { if (!clientBridgeSession.retrievalResult?.passed) return; setClientBridgeSession({ ...clientBridgeSession, form: "explanation", phase: "explanation", retrievalResult: null }); setClientBridgeEvidence((previous) => updateClientBridgeEvidence(previous, { form: "explanation", masteryStatus: "retrieval_complete" })); }
  function checkClientBridgeExplanation(event) { event.preventDefault(); const result = evaluateClientBridgeExplanation(clientBridgeSession.explanationResponse); setClientBridgeSession({ ...clientBridgeSession, explanationResult: result }); setClientBridgeEvidence((previous) => updateClientBridgeEvidence(previous, { form: "explanation", correctness: result.correctness, incrementAttempt: true, masteryStatus: "retrieval_complete" })); }
  function acknowledgeClientBridgeMastery() { if (!clientBridgeSession?.explanationResult?.passed || !clientBridgeSession.ownershipConfirmed || !clientBridgeEvidence?.confidence) return; focusContinueAfterClientRef.current = true; setClientBridgeEvidence((previous) => updateClientBridgeEvidence(previous, { form: "explanation", masteryStatus: "mastered", clearMisconceptionTags: true })); setClientBridgeSession(null); setTerminalOpen(false); setRuinsTerminalKind(null); setDialogue("Client Bridge mastery confirmed: both offline forms, retrieval, and closed-note layers are complete.", "teacher"); }

  function openTextAnalysis() { setTerminalOpen(true); setRuinsTerminalKind("text-analysis"); if (!textAnalysisSession) { const form = textAnalysisEvidence?.masteryStatus === "primary_complete" ? "transfer" : textAnalysisEvidence?.masteryStatus === "transfer_complete" ? "explanation" : "primary"; setTextAnalysisSession({ form, phase: form === "explanation" ? "explanation" : "scenarios", index: 0, response: { decision: "", reason: "" }, result: null, hintLevel: 0, complete: false, explanationResponse: { requested_output: "", capability: "", document_id: "", mixed_result: "" }, explanationResult: null, ownershipConfirmed: false }); } }
  function exitTextAnalysis() { setTerminalOpen(false); setRuinsTerminalKind(null); setDialogue("Text Analysis practice closed safely. Choices and explanation remain session-only.", "system"); }
  function checkTextAnalysis(event) { event.preventDefault(); const scenarios = textAnalysisSession.form === "transfer" ? textAnalysisTransferScenarios : textAnalysisPrimaryScenarios; const scenario = scenarios[textAnalysisSession.index]; const result = evaluateTextAnalysisScenario(scenario.id, textAnalysisSession.response, textAnalysisSession.form); const hintLevel = result.passed ? textAnalysisSession.hintLevel : Math.max(1, textAnalysisSession.hintLevel); setTextAnalysisSession({ ...textAnalysisSession, result, hintLevel }); setTextAnalysisEvidence((previous) => updateTextAnalysisEvidence(previous, { form: textAnalysisSession.form, scenarioId: scenario.id, correctness: result.correctness, incrementAttempt: true, hintLevel, misconceptionTags: result.misconceptionTags, masteryStatus: textAnalysisSession.form === "transfer" ? "primary_complete" : result.passed ? "in_progress" : "remediation_required" })); }
  function revealTextAnalysisHint() { const hintLevel = Math.min(3, textAnalysisSession.hintLevel + 1); setTextAnalysisSession({ ...textAnalysisSession, hintLevel }); setTextAnalysisEvidence((previous) => updateTextAnalysisEvidence(previous, { hintLevel })); }
  function advanceTextAnalysis() { if (!textAnalysisSession.result?.passed) return; const scenarios = textAnalysisSession.form === "transfer" ? textAnalysisTransferScenarios : textAnalysisPrimaryScenarios; if (textAnalysisSession.index === scenarios.length - 1) { if (textAnalysisSession.form === "transfer") { setTextAnalysisEvidence((previous) => updateTextAnalysisEvidence(previous, { form: "explanation", masteryStatus: "transfer_complete", clearMisconceptionTags: true })); setTextAnalysisSession({ ...textAnalysisSession, form: "explanation", phase: "explanation", result: null, hintLevel: 0 }); } else setTextAnalysisSession({ ...textAnalysisSession, complete: true }); return; } setTextAnalysisSession({ ...textAnalysisSession, index: textAnalysisSession.index + 1, response: { decision: "", reason: "" }, result: null, hintLevel: 0 }); }
  function acknowledgeTextAnalysisPrimary() { if (!textAnalysisSession?.complete || !textAnalysisEvidence?.confidence) return; setTextAnalysisEvidence((previous) => updateTextAnalysisEvidence(previous, { form: "transfer", masteryStatus: "primary_complete", clearMisconceptionTags: true })); setTextAnalysisSession(null); setTerminalOpen(false); setRuinsTerminalKind(null); setDialogue("Text Analysis primary form complete at 12 of 12. Fresh transfer and closed-note workload choice remain.", "teacher"); }
  function checkTextAnalysisExplanation(event) { event.preventDefault(); const result = evaluateTextAnalysisExplanation(textAnalysisSession.explanationResponse); setTextAnalysisSession({ ...textAnalysisSession, explanationResult: result }); setTextAnalysisEvidence((previous) => updateTextAnalysisEvidence(previous, { form: "explanation", scenarioId: "explanation", correctness: result.correctness, incrementAttempt: true, masteryStatus: "transfer_complete" })); }
  function acknowledgeTextAnalysisMastery() { if (!textAnalysisSession?.explanationResult?.passed || !textAnalysisSession.ownershipConfirmed || !textAnalysisEvidence?.confidence) return; focusContinueAfterTextRef.current = true; setTextAnalysisEvidence((previous) => updateTextAnalysisEvidence(previous, { form: "explanation", masteryStatus: "mastered", clearMisconceptionTags: true })); setTextAnalysisSession(null); setTerminalOpen(false); setRuinsTerminalKind(null); setDialogue("Text Analysis mastery confirmed: both 12-of-12 forms and closed-note workload explanation are complete.", "teacher"); }

  function openSpeechWorkloads() { setTerminalOpen(true); setRuinsTerminalKind("speech-workloads"); if (!speechSession) { const form = speechEvidence?.masteryStatus === "primary_complete" ? "transfer" : speechEvidence?.masteryStatus === "transfer_complete" ? "explanation" : "primary"; setSpeechSession({ form, phase: form === "explanation" ? "explanation" : "scenarios", index: 0, response: { decision: "", reason: "" }, result: null, hintLevel: 0, complete: false, explanationResponse: { direction: "", workload: "", file_binding: "", result_branch: "" }, explanationResult: null, ownershipConfirmed: false }); } }
  function exitSpeechWorkloads() { setTerminalOpen(false); setRuinsTerminalKind(null); setDialogue("Speech Workloads practice closed safely. No audio state exists; choices remain session-only.", "system"); }
  function checkSpeech(event) { event.preventDefault(); const scenarios = speechSession.form === "transfer" ? speechTransferScenarios : speechPrimaryScenarios; const scenario = scenarios[speechSession.index]; const result = evaluateSpeechScenario(scenario.id, speechSession.response, speechSession.form); const hintLevel = result.passed ? speechSession.hintLevel : Math.max(1, speechSession.hintLevel); setSpeechSession({ ...speechSession, result, hintLevel }); setSpeechEvidence((previous) => updateSpeechEvidence(previous, { form: speechSession.form, scenarioId: scenario.id, correctness: result.correctness, incrementAttempt: true, hintLevel, misconceptionTags: result.misconceptionTags, masteryStatus: speechSession.form === "transfer" ? "primary_complete" : result.passed ? "in_progress" : "remediation_required" })); }
  function revealSpeechHint() { const hintLevel = Math.min(3, speechSession.hintLevel + 1); setSpeechSession({ ...speechSession, hintLevel }); setSpeechEvidence((previous) => updateSpeechEvidence(previous, { hintLevel })); }
  function advanceSpeech() { if (!speechSession.result?.passed) return; const scenarios = speechSession.form === "transfer" ? speechTransferScenarios : speechPrimaryScenarios; if (speechSession.index === scenarios.length - 1) { if (speechSession.form === "transfer") { setSpeechEvidence((previous) => updateSpeechEvidence(previous, { form: "explanation", masteryStatus: "transfer_complete", clearMisconceptionTags: true })); setSpeechSession({ ...speechSession, form: "explanation", phase: "explanation", result: null, hintLevel: 0 }); } else setSpeechSession({ ...speechSession, complete: true }); return; } setSpeechSession({ ...speechSession, index: speechSession.index + 1, response: { decision: "", reason: "" }, result: null, hintLevel: 0 }); }
  function acknowledgeSpeechPrimary() { if (!speechSession?.complete || !speechEvidence?.confidence) return; setSpeechEvidence((previous) => updateSpeechEvidence(previous, { form: "transfer", masteryStatus: "primary_complete", clearMisconceptionTags: true })); setSpeechSession(null); setTerminalOpen(false); setRuinsTerminalKind(null); setDialogue("Speech Workloads primary form complete at 12 of 12. Fresh transfer and closed-note explanation remain.", "teacher"); }
  function checkSpeechExplanation(event) { event.preventDefault(); const result = evaluateSpeechExplanation(speechSession.explanationResponse); setSpeechSession({ ...speechSession, explanationResult: result }); setSpeechEvidence((previous) => updateSpeechEvidence(previous, { form: "explanation", scenarioId: "explanation", correctness: result.correctness, incrementAttempt: true, masteryStatus: "transfer_complete" })); }
  function acknowledgeSpeechMastery() { if (!speechSession?.explanationResult?.passed || !speechSession.ownershipConfirmed || !speechEvidence?.confidence) return; focusContinueAfterSpeechRef.current = true; setSpeechEvidence((previous) => updateSpeechEvidence(previous, { form: "explanation", masteryStatus: "mastered", clearMisconceptionTags: true })); setSpeechSession(null); setTerminalOpen(false); setRuinsTerminalKind(null); setDialogue("Speech Workloads mastery confirmed: both 12-of-12 forms and closed-note explanation are complete.", "teacher"); }
  function openVisualWorkloads() { setTerminalOpen(true); setRuinsTerminalKind("visual-workloads"); if (!visualSession) { const form = visualEvidence?.masteryStatus === "primary_complete" ? "transfer" : visualEvidence?.masteryStatus === "transfer_complete" ? "explanation" : "primary"; setVisualSession({ form, phase: form === "explanation" ? "explanation" : "scenarios", index: 0, response: { decision: "", reason: "" }, result: null, hintLevel: 0, complete: false, explanationResponse: { existing_or_new: "", input_modalities: "", required_output: "", media_handling: "" }, explanationResult: null, ownershipConfirmed: false }); } }
  function exitVisualWorkloads() { setTerminalOpen(false); setRuinsTerminalKind(null); setDialogue("Visual Workloads practice closed safely. No media state exists; choices remain session-only.", "system"); }
  function checkVisual(event) { event.preventDefault(); const scenarios = visualSession.form === "transfer" ? visualTransferScenarios : visualPrimaryScenarios; const scenario = scenarios[visualSession.index]; const result = evaluateVisualScenario(scenario.id, visualSession.response, visualSession.form); const hintLevel = result.passed ? visualSession.hintLevel : Math.max(1, visualSession.hintLevel); setVisualSession({ ...visualSession, result, hintLevel }); setVisualEvidence((previous) => updateVisualEvidence(previous, { form: visualSession.form, scenarioId: scenario.id, correctness: result.correctness, incrementAttempt: true, hintLevel, misconceptionTags: result.misconceptionTags, masteryStatus: visualSession.form === "transfer" ? "primary_complete" : result.passed ? "in_progress" : "remediation_required" })); }
  function revealVisualHint() { const hintLevel = Math.min(3, visualSession.hintLevel + 1); setVisualSession({ ...visualSession, hintLevel }); setVisualEvidence((previous) => updateVisualEvidence(previous, { hintLevel })); }
  function advanceVisual() { if (!visualSession.result?.passed) return; const scenarios = visualSession.form === "transfer" ? visualTransferScenarios : visualPrimaryScenarios; if (visualSession.index === scenarios.length - 1) { if (visualSession.form === "transfer") { setVisualEvidence((previous) => updateVisualEvidence(previous, { form: "explanation", masteryStatus: "transfer_complete", clearMisconceptionTags: true })); setVisualSession({ ...visualSession, form: "explanation", phase: "explanation", result: null, hintLevel: 0 }); } else setVisualSession({ ...visualSession, complete: true }); return; } setVisualSession({ ...visualSession, index: visualSession.index + 1, response: { decision: "", reason: "" }, result: null, hintLevel: 0 }); }
  function acknowledgeVisualPrimary() { if (!visualSession?.complete || !visualEvidence?.confidence) return; setVisualEvidence((previous) => updateVisualEvidence(previous, { form: "transfer", masteryStatus: "primary_complete", clearMisconceptionTags: true })); setVisualSession(null); setTerminalOpen(false); setRuinsTerminalKind(null); setDialogue("Visual Workloads primary form complete at 12 of 12. Fresh transfer and closed-note explanation remain.", "teacher"); }
  function checkVisualExplanation(event) { event.preventDefault(); const result = evaluateVisualExplanation(visualSession.explanationResponse); setVisualSession({ ...visualSession, explanationResult: result }); setVisualEvidence((previous) => updateVisualEvidence(previous, { form: "explanation", scenarioId: "explanation", correctness: result.correctness, incrementAttempt: true, masteryStatus: "transfer_complete" })); }
  function acknowledgeVisualMastery() { if (!visualSession?.explanationResult?.passed || !visualSession.ownershipConfirmed || !visualEvidence?.confidence) return; focusContinueAfterVisualRef.current = true; setVisualEvidence((previous) => updateVisualEvidence(previous, { form: "explanation", masteryStatus: "mastered", clearMisconceptionTags: true })); setVisualSession(null); setTerminalOpen(false); setRuinsTerminalKind(null); setDialogue("Visual Workloads mastery confirmed: both 12-of-12 forms and closed-note explanation are complete.", "teacher"); }

  function openExtractionWorkloads() { setTerminalOpen(true); setRuinsTerminalKind("extraction-workloads"); if (!extractionSession) { const form = extractionEvidence?.masteryStatus === "primary_complete" ? "transfer" : extractionEvidence?.masteryStatus === "transfer_complete" ? "explanation" : "primary"; setExtractionSession({ form, phase: form === "explanation" ? "explanation" : "scenarios", index: 0, response: { decision: "", reason: "" }, result: null, hintLevel: 0, complete: false, explanationResponse: { modality: "", schema: "", missing_value: "", evidence_review: "" }, explanationResult: null, ownershipConfirmed: false }); } }
  function exitExtractionWorkloads() { setTerminalOpen(false); setRuinsTerminalKind(null); setDialogue("Extraction Workloads practice closed safely. No source media or extracted values are retained.", "system"); }
  function checkExtraction(event) { event.preventDefault(); const scenarios = extractionSession.form === "transfer" ? extractionTransferScenarios : extractionPrimaryScenarios; const scenario = scenarios[extractionSession.index]; const result = evaluateExtractionScenario(scenario.id, extractionSession.response, extractionSession.form); const hintLevel = result.passed ? extractionSession.hintLevel : Math.max(1, extractionSession.hintLevel); setExtractionSession({ ...extractionSession, result, hintLevel }); setExtractionEvidence((previous) => updateExtractionEvidence(previous, { form: extractionSession.form, scenarioId: scenario.id, correctness: result.correctness, incrementAttempt: true, hintLevel, misconceptionTags: result.misconceptionTags, masteryStatus: extractionSession.form === "transfer" ? "primary_complete" : result.passed ? "in_progress" : "remediation_required" })); }
  function revealExtractionHint() { const hintLevel = Math.min(3, extractionSession.hintLevel + 1); setExtractionSession({ ...extractionSession, hintLevel }); setExtractionEvidence((previous) => updateExtractionEvidence(previous, { hintLevel })); }
  function advanceExtraction() { if (!extractionSession.result?.passed) return; const scenarios = extractionSession.form === "transfer" ? extractionTransferScenarios : extractionPrimaryScenarios; if (extractionSession.index === scenarios.length - 1) { if (extractionSession.form === "transfer") { setExtractionEvidence((previous) => updateExtractionEvidence(previous, { form: "explanation", masteryStatus: "transfer_complete", clearMisconceptionTags: true })); setExtractionSession({ ...extractionSession, form: "explanation", phase: "explanation", result: null, hintLevel: 0 }); } else setExtractionSession({ ...extractionSession, complete: true }); return; } setExtractionSession({ ...extractionSession, index: extractionSession.index + 1, response: { decision: "", reason: "" }, result: null, hintLevel: 0 }); }
  function acknowledgeExtractionPrimary() { if (!extractionSession?.complete || !extractionEvidence?.confidence) return; setExtractionEvidence((previous) => updateExtractionEvidence(previous, { form: "transfer", masteryStatus: "primary_complete", clearMisconceptionTags: true })); setExtractionSession(null); setTerminalOpen(false); setRuinsTerminalKind(null); setDialogue("Extraction Workloads primary form complete at 12 of 12. Fresh transfer and closed-note explanation remain.", "teacher"); }
  function checkExtractionExplanation(event) { event.preventDefault(); const result = evaluateExtractionExplanation(extractionSession.explanationResponse); setExtractionSession({ ...extractionSession, explanationResult: result }); setExtractionEvidence((previous) => updateExtractionEvidence(previous, { form: "explanation", scenarioId: "explanation", correctness: result.correctness, incrementAttempt: true, masteryStatus: "transfer_complete" })); }
  function acknowledgeExtractionMastery() { if (!extractionSession?.explanationResult?.passed || !extractionSession.ownershipConfirmed || !extractionEvidence?.confidence) return; focusContinueAfterExtractionRef.current = true; setExtractionEvidence((previous) => updateExtractionEvidence(previous, { form: "explanation", masteryStatus: "mastered", clearMisconceptionTags: true })); setExtractionSession(null); setTerminalOpen(false); setRuinsTerminalKind(null); setDialogue("Extraction Workloads mastery confirmed: both 12-of-12 forms and closed-note explanation are complete.", "teacher"); }

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
    setModelChoiceSession(null);
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
            title={`Responsible AI — ${responsibleAISession.phase === "explanation" ? "Closed-note Explanation" : responsibleAISession.form === "transfer" ? "Fresh Transfer" : "Primary Practice"}`}
            filename={responsibleAISession.phase === "explanation" ? "closed_note_response.txt" : `${responsibleAISession.form}_scenarios.json`}
            lessonId={responsibleAIExercise.lesson_id}
            statusText={responsibleAISession.phase === "explanation" ? "EXPLANATION 0/1" : responsibleAISession.complete ? "PRIMARY 24/24" : `${responsibleAISession.form.toUpperCase()} ${responsibleAISession.index + 1}/6`}
            closeLabel="Exit Practice"
            restoreFocusTo={terminalTriggerRef.current}
            onClose={exitResponsibleAI}
          >
            <section className="responsible-ai-workspace">
              <p className="responsible-ai-boundary">Course-authored practice scenario — not a Microsoft exam question. Real systems can implicate multiple principles; choose the closest primary harm.</p>
              {responsibleAISession.phase === "scenarios" && !responsibleAISession.complete ? (() => {
                const scenarios = responsibleAISession.form === "transfer" ? responsibleAITransferScenarios : responsibleAIPrimaryScenarios;
                const scenario = scenarios[responsibleAISession.index];
                const choices = {
                  principle: responsibleAIPrinciples,
                  stakeholder: scenario.stakeholder_choices,
                  mitigation: scenario.mitigation_choices,
                  owner: scenario.owner_choices,
                };
                return (
                  <form className="responsible-ai-form" onSubmit={checkResponsibleAI}>
                    <header>
                      <p className="pane-label">{responsibleAISession.form === "transfer" ? "FRESH TRANSFER" : "PRIMARY RETRIEVAL"} · {scenario.id} · {responsibleAISession.index + 1}/6</p>
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
                      {responsibleAISession.result?.passed && <button className="confirm-action" type="button" onClick={nextResponsibleAIScenario}>{responsibleAISession.index === 5 ? (responsibleAISession.form === "transfer" ? "Begin closed-note explanation" : "View primary result") : "Next scenario"}</button>}
                    </section>
                  </form>
                );
              })() : responsibleAISession.phase === "explanation" ? (
                <form className="responsible-ai-form" onSubmit={checkResponsibleAIExplanation}>
                  <header>
                    <p className="pane-label">STRICT READINESS GATE · SPEAKER: PILOT</p>
                    <h2>Explain T06 without notes</h2>
                    <p>People cannot appeal automated moderation decisions because no human team owns appeals. Type the exact four-part response from memory. Your words stay in this session and are never saved.</p>
                  </header>
                  <div className="responsible-ai-fields">
                    {responsibleAIDimensions.map((dimension) => {
                      const fieldResult = responsibleAISession.explanationResult?.correctness[dimension];
                      const feedbackId = `rai-explanation-${dimension}-feedback`;
                      return (
                        <label key={dimension}>
                          <span>{dimension === "owner" ? "Accountable human owner" : dimension}</span>
                          <input
                            aria-label={`Closed-note ${dimension}`}
                            aria-describedby={responsibleAISession.explanationResult ? feedbackId : undefined}
                            aria-invalid={responsibleAISession.explanationResult ? !fieldResult : undefined}
                            autoComplete="off"
                            value={responsibleAISession.explanationResponse[dimension]}
                            onChange={(event) => setResponsibleAISession({ ...responsibleAISession, explanationResponse: { ...responsibleAISession.explanationResponse, [dimension]: event.target.value }, explanationResult: null, ownershipConfirmed: false })}
                          />
                          {responsibleAISession.explanationResult && <small id={feedbackId}>{fieldResult ? "Recalled correctly." : `Reconstruct the ${dimension} from the harm and four-part response.`}</small>}
                        </label>
                      );
                    })}
                  </div>
                  <section className="terminal-console responsible-ai-output" aria-labelledby="rai-explanation-output-heading">
                    <div className="console-heading-row"><strong id="rai-explanation-output-heading">CLOSED-NOTE VALIDATOR</strong><button className="run-action" type="submit" disabled={responsibleAIDimensions.some((dimension) => !responsibleAISession.explanationResponse[dimension])}>Check my explanation</button></div>
                    <div className={responsibleAISession.explanationResult ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{responsibleAISession.explanationResult ? `${responsibleAISession.explanationResult.score}/4 · ${responsibleAISession.explanationResult.passed ? "Complete explanation confirmed." : responsibleAIRemediation(responsibleAISession.explanationResult, responsibleAISession.hintLevel)}` : "No notes or answer choices are shown. Recall all four dimensions."}</div>
                    {responsibleAISession.explanationResult && !responsibleAISession.explanationResult.passed && <button className="hint-action" type="button" disabled={responsibleAISession.hintLevel >= 3} onClick={revealResponsibleAIHint}>Reveal next remediation step</button>}
                    {responsibleAISession.explanationResult?.passed && <>
                      <label className="ownership-confirmation"><input type="checkbox" checked={responsibleAISession.ownershipConfirmed} onChange={(event) => setResponsibleAISession({ ...responsibleAISession, ownershipConfirmed: event.target.checked })} />I produced this explanation myself without notes.</label>
                      <fieldset className="confidence-group"><legend>Confidence after both forms</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="rai-mastery-confidence" checked={responsibleAIEvidence?.confidence === value} onChange={() => setResponsibleAIConfidence(value)} />{value}</label>)}</fieldset>
                      <button className="confirm-action" type="button" disabled={!responsibleAISession.ownershipConfirmed || !responsibleAIEvidence?.confidence} onClick={acknowledgeResponsibleAIMastery}>Acknowledge strict mastery</button>
                    </>}
                  </section>
                </form>
              ) : (
                <section className="workload-summary responsible-ai-summary" aria-labelledby="rai-summary-heading">
                  <p className="pane-label">PRIMARY SLICE COMPLETE</p>
                  <h2 id="rai-summary-heading">24 / 24 dimensions</h2>
                  <p>Primary course-authored form complete. A fresh transfer form and closed-note explanation are still required for mastery.</p>
                  <fieldset className="confidence-group"><legend>Confidence after primary form</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="rai-confidence" checked={responsibleAIEvidence?.confidence === value} onChange={() => setResponsibleAIConfidence(value)} />{value}</label>)}</fieldset>
                  <button className="confirm-action" type="button" disabled={!responsibleAIEvidence?.confidence} onClick={acknowledgeResponsibleAIPrimary}>Acknowledge primary form</button>
                </section>
              )}
            </section>
          </TerminalShell>
        )}
        {terminalOpen && scene.id === "ruins" && ruinsTerminalKind === "model-choice" && modelChoiceSession && (
          <TerminalShell
            exerciseId={modelChoiceExercise.exercise_id}
            title="Model, Deployment, and Configuration Choices"
            filename={modelChoiceSession.phase === "explanation" ? "closed_note.md" : `${modelChoiceSession.form}_choices.json`}
            lessonId={modelChoiceExercise.lesson_id}
            statusText={modelChoiceSession.phase === "explanation" ? "CLOSED-NOTE GATE" : modelChoiceSession.complete ? "PRIMARY 16/16" : `${modelChoiceSession.form.toUpperCase()} ${modelChoiceSession.index + 1}/8`}
            closeLabel="Exit Model Choices"
            restoreFocusTo={terminalTriggerRef.current}
            onClose={exitModelChoiceExercise}
          >
            <section className="model-choice-workspace">
              <p className="model-choice-boundary">Course-authored practice — not a Microsoft exam question. Live availability, regions, quota, prices, parameter support, and preview status must be reverified.</p>
              {!modelChoiceSession.complete && modelChoiceSession.phase !== "explanation" ? (() => {
                const scenarios = modelChoiceSession.form === "transfer" ? modelChoiceTransferScenarios : modelChoicePrimaryScenarios;
                const scenario = scenarios[modelChoiceSession.index];
                const options = getModelChoiceOptions(scenario.id, modelChoiceSession.form);
                return (
                  <form className="model-choice-form" onSubmit={checkModelChoice}>
                    <header>
                      <p className="pane-label">{modelChoiceSession.form === "transfer" ? "FRESH TRANSFER" : "PRIMARY"} · {scenario.topic.replaceAll("_", " ")} · {scenario.id} · {modelChoiceSession.index + 1}/8</p>
                      <p className="model-choice-layer-labels">MODEL · DEPLOYMENT · REQUEST CONFIGURATION</p>
                      <p className="model-choice-owner">PILOT // DECISION OWNER</p>
                      <h2>{scenario.prompt}</h2>
                    </header>
                    <div className="model-choice-fields">
                      {modelChoiceDimensions.map((dimension) => {
                        const fieldResult = modelChoiceSession.result?.correctness[dimension];
                        const feedbackId = `model-choice-${dimension}-feedback`;
                        return (
                          <label key={dimension}>
                            <span>{dimension === "decision" ? "Decision" : "Reason"}</span>
                            <select
                              aria-label={`Model choice ${dimension}`}
                              aria-describedby={modelChoiceSession.result ? feedbackId : undefined}
                              aria-invalid={modelChoiceSession.result ? !fieldResult : undefined}
                              value={modelChoiceSession.response[dimension]}
                              onChange={(event) => setModelChoiceSession({ ...modelChoiceSession, response: { ...modelChoiceSession.response, [dimension]: event.target.value }, result: null })}
                            >
                              <option value="">Choose one</option>
                              {options[dimension].map((value) => <option key={value} value={value}>{formatChoice(value)}</option>)}
                            </select>
                            {modelChoiceSession.result && <small id={feedbackId}>{fieldResult ? "Correct." : `Review the ${dimension}; use the stated requirement and keep model, deployment, and request layers separate.`}</small>}
                          </label>
                        );
                      })}
                    </div>
                    <section className="terminal-console model-choice-output" aria-labelledby="model-choice-output-heading">
                      <div className="console-heading-row"><strong id="model-choice-output-heading">SYSTEM // STRICT 16-POINT VALIDATOR</strong><button className="run-action" type="submit" disabled={modelChoiceDimensions.some((dimension) => !modelChoiceSession.response[dimension])}>Check decision and reason</button></div>
                      <div className={modelChoiceSession.result ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{modelChoiceSession.result ? `${modelChoiceSession.result.score}/2 · ${modelChoiceSession.result.passed ? "Choice confirmed." : modelChoiceRemediation(scenario, modelChoiceSession.result, modelChoiceSession.hintLevel)}` : "Choose both the decision and the reason grounded in the stated requirement."}</div>
                      {modelChoiceSession.result && !modelChoiceSession.result.passed && <button className="hint-action" type="button" disabled={modelChoiceSession.hintLevel >= 3} onClick={revealModelChoiceHint}>Reveal next comparison step</button>}
                      {modelChoiceSession.result?.passed && <button className="confirm-action" type="button" onClick={nextModelChoiceScenario}>{modelChoiceSession.index === 7 ? (modelChoiceSession.form === "transfer" ? "Begin closed-note explanation" : "View primary result") : "Next scenario"}</button>}
                    </section>
                  </form>
                );
              })() : modelChoiceSession.phase === "explanation" ? (
                <form className="model-choice-form model-choice-explanation" onSubmit={checkModelChoiceExplanation}>
                  <header>
                    <p className="pane-label">901 TEACHER // CLOSED-NOTE READINESS GATE</p>
                    <h2>Explain the data-zone decision without notes</h2>
                    <p>Processing may occur across the named US data zone but not outside it. Recall the decision and reason. No answer choices are shown, and your words remain session-only.</p>
                  </header>
                  <div className="model-choice-fields">
                    {modelChoiceDimensions.map((dimension) => {
                      const fieldResult = modelChoiceSession.explanationResult?.correctness[dimension];
                      const feedbackId = `model-choice-explanation-${dimension}-feedback`;
                      return <label key={dimension}>
                        <span>{dimension === "decision" ? "Closed-note decision" : "Closed-note reason"}</span>
                        <input aria-label={`Closed-note model choice ${dimension}`} aria-describedby={modelChoiceSession.explanationResult ? feedbackId : undefined} aria-invalid={modelChoiceSession.explanationResult ? !fieldResult : undefined} autoComplete="off" value={modelChoiceSession.explanationResponse[dimension]} onChange={(event) => setModelChoiceSession({ ...modelChoiceSession, explanationResponse: { ...modelChoiceSession.explanationResponse, [dimension]: event.target.value }, explanationResult: null, ownershipConfirmed: false })} />
                        {modelChoiceSession.explanationResult && <small id={feedbackId}>{fieldResult ? "Recalled correctly." : `Reconstruct the ${dimension} from the processing boundary.`}</small>}
                      </label>;
                    })}
                  </div>
                  <section className="terminal-console model-choice-output" aria-labelledby="model-choice-explanation-output-heading">
                    <div className="console-heading-row"><strong id="model-choice-explanation-output-heading">SYSTEM // CLOSED-NOTE VALIDATOR</strong><button className="run-action" type="submit" disabled={modelChoiceDimensions.some((dimension) => !modelChoiceSession.explanationResponse[dimension])}>Check my explanation</button></div>
                    <div className={modelChoiceSession.explanationResult ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{modelChoiceSession.explanationResult ? `${modelChoiceSession.explanationResult.score}/2 · ${modelChoiceSession.explanationResult.passed ? "Complete decision and reason confirmed." : "Rebuild both parts from the requirement; the deployment boundary is the deciding constraint."}` : "No notes or answer choices are shown. Recall both dimensions."}</div>
                    {modelChoiceSession.explanationResult?.passed && <>
                      <label className="ownership-confirmation"><input type="checkbox" checked={modelChoiceSession.ownershipConfirmed} onChange={(event) => setModelChoiceSession({ ...modelChoiceSession, ownershipConfirmed: event.target.checked })} />I produced this decision and reason myself without notes.</label>
                      <fieldset className="confidence-group"><legend>Confidence after both forms</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="model-choice-mastery-confidence" checked={modelChoiceEvidence?.confidence === value} onChange={() => setModelChoiceEvidence((previous) => updateModelChoiceEvidence(previous, { confidence: value }))} />{value}</label>)}</fieldset>
                      <button className="confirm-action" type="button" disabled={!modelChoiceSession.ownershipConfirmed || !modelChoiceEvidence?.confidence} onClick={acknowledgeModelChoiceMastery}>Acknowledge strict mastery</button>
                    </>}
                  </section>
                </form>
              ) : (
                <section className="workload-summary model-choice-summary" aria-labelledby="model-choice-summary-heading">
                  <p className="pane-label">901 TEACHER // PRIMARY FORM COMPLETE</p>
                  <h2 id="model-choice-summary-heading">16 / 16 dimensions</h2>
                  <p>Mechanics, model choice, deployment choice, and configuration are covered. Transfer and a closed-note explanation remain before full lesson mastery.</p>
                  <fieldset className="confidence-group"><legend>Confidence after primary form</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="model-choice-confidence" checked={modelChoiceEvidence?.confidence === value} onChange={() => setModelChoiceEvidence((previous) => updateModelChoiceEvidence(previous, { confidence: value }))} />{value}</label>)}</fieldset>
                  <button className="confirm-action" type="button" disabled={!modelChoiceEvidence?.confidence} onClick={acknowledgeModelChoicePrimary}>Acknowledge primary form</button>
                </section>
              )}
            </section>
          </TerminalShell>
        )}
        {terminalOpen && scene.id === "ruins" && ruinsTerminalKind === "structured-packets" && structuredPacketSession && (
          <TerminalShell
            exerciseId={structuredPacketExercise.exercise_id}
            title="Structured Packets"
            filename={structuredPacketSession.phase === "explanation" ? "closed_note.md" : `packet_${structuredPacketSession.form}.py`}
            lessonId={structuredPacketExercise.lesson_id}
            statusText={structuredPacketSession.phase === "explanation" ? "CLOSED-NOTE GATE" : `${structuredPacketSession.form.toUpperCase()} ${structuredPacketSession.result?.score ?? 0}/8`}
            closeLabel="Exit Structured Packets"
            restoreFocusTo={terminalTriggerRef.current}
            onClose={exitStructuredPackets}
          >
            <section className="structured-packet-workspace">
              <p className="model-choice-boundary">Course-authored bridge practice — not a live Foundry payload. Future service fields, SDK objects, endpoints, and API versions must be reverified.</p>
              {structuredPacketSession.phase === "explanation" ? (
                <form className="structured-packet-explanation" onSubmit={checkStructuredExplanation}>
                  <header><p className="pane-label">PILOT // CLOSED-NOTE EXPLANATION OWNER</p><h2>Explain the transfer data path without notes</h2><p>In your own words, recall the container sequence, the exact nested access, and the JSON text-to-object-to-text round trip. Your words remain session-only.</p></header>
                  <div className="structured-explanation-fields">
                    {structuredPacketExplanationDimensions.map((dimension) => {
                      const fieldResult = structuredPacketSession.explanationResult?.correctness[dimension];
                      const feedbackId = `structured-explanation-${dimension}-feedback`;
                      const labels = { container_path: "Container path", nested_access: "Nested access", json_round_trip: "JSON round trip" };
                      return <label key={dimension}><span>{labels[dimension]}</span><input aria-label={`Closed-note ${labels[dimension]}`} aria-invalid={structuredPacketSession.explanationResult ? !fieldResult : undefined} aria-describedby={structuredPacketSession.explanationResult ? feedbackId : undefined} autoComplete="off" value={structuredPacketSession.explanationResponse[dimension]} onChange={(event) => setStructuredPacketSession({ ...structuredPacketSession, explanationResponse: { ...structuredPacketSession.explanationResponse, [dimension]: event.target.value }, explanationResult: null, ownershipConfirmed: false })} />{structuredPacketSession.explanationResult && <small id={feedbackId}>{fieldResult ? "SYSTEM // Dimension confirmed." : `901 TEACHER // Rebuild the ${labels[dimension].toLowerCase()} one boundary at a time.`}</small>}</label>;
                    })}
                  </div>
                  <section className="terminal-console structured-packet-output" aria-labelledby="structured-explanation-output-heading">
                    <div className="console-heading-row"><strong id="structured-explanation-output-heading">SYSTEM // CLOSED-NOTE VALIDATOR</strong><button className="run-action" type="submit" disabled={structuredPacketExplanationDimensions.some((dimension) => !structuredPacketSession.explanationResponse[dimension])}>Check data path</button></div>
                    <div className={structuredPacketSession.explanationResult ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{getStructuredExplanationFeedback(structuredPacketSession.explanationResult).systemScore}</div>
                    {getStructuredExplanationFeedback(structuredPacketSession.explanationResult).teacherRemediation && <p className="teacher-remediation"><strong>901 TEACHER // EXPLANATION REMEDIATION</strong><span>{getStructuredExplanationFeedback(structuredPacketSession.explanationResult).teacherRemediation}</span></p>}
                    {structuredPacketSession.explanationResult?.passed && <><label className="ownership-confirmation"><input type="checkbox" checked={structuredPacketSession.ownershipConfirmed} onChange={(event) => setStructuredPacketSession({ ...structuredPacketSession, ownershipConfirmed: event.target.checked })} />I produced this data-path explanation myself without notes.</label><fieldset className="confidence-group"><legend>Confidence after both forms</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="structured-mastery-confidence" checked={structuredPacketEvidence?.confidence === value} onChange={() => setStructuredPacketEvidence((previous) => updateStructuredPacketEvidence(previous, { confidence: value }))} />{value}</label>)}</fieldset><button className="confirm-action" type="button" disabled={!structuredPacketSession.ownershipConfirmed || !structuredPacketEvidence?.confidence} onClick={acknowledgeStructuredMastery}>Acknowledge strict mastery</button></>}
                  </section>
                </form>
              ) : structuredPacketSession.complete ? (
                <section className="workload-summary structured-packet-summary"><p className="pane-label">901 TEACHER // PRIMARY FORM COMPLETE</p><h2>8 / 8 checks</h2><p>List, dictionary, nested access, JSON round trip, and derived output checks pass. Transfer and closed-note explanation remain.</p><fieldset className="confidence-group"><legend>Confidence after primary form</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="structured-primary-confidence" checked={structuredPacketEvidence?.confidence === value} onChange={() => setStructuredPacketEvidence((previous) => updateStructuredPacketEvidence(previous, { confidence: value }))} />{value}</label>)}</fieldset><button className="confirm-action" type="button" disabled={!structuredPacketEvidence?.confidence} onClick={acknowledgeStructuredPrimary}>Acknowledge primary form</button></section>
              ) : (
                <form className="structured-packet-form" onSubmit={runStructuredPacket}>
                  <aside className="task-pane"><p className="pane-label">{structuredPacketSession.form === "transfer" ? "FRESH TRANSFER" : "PRIMARY"} · PILOT // SOURCE OWNER</p><h2>Trace nested structure</h2><p><strong>Dictionary</strong>: string key. <strong>List</strong>: numeric index. <strong>JSON</strong>: text until <code>json.loads</code>; <code>json.dumps</code> returns text.</p><ol className="data-path-trace"><li>packet → dictionary</li><li>collection key → list</li><li>numeric index → dictionary</li><li>values key → list/value</li></ol><p>Edit the TODOs. Preserve the supplied packet and derive every printed value.</p></aside>
                  <div className="structured-editor-stack"><label htmlFor="structured-source">EDITABLE PYTHON · session-only</label><textarea id="structured-source" aria-label="Structured Packet Python source" aria-invalid={structuredPacketSession.result ? !structuredPacketSession.result.passed : undefined} aria-describedby={structuredPacketSession.result ? structuredPacketSession.result.passed ? "structured-status structured-check-list" : "structured-status structured-check-list structured-python-remediation" : undefined} value={structuredPacketSession.source} onChange={(event) => setStructuredPacketSession({ ...structuredPacketSession, source: event.target.value, result: null })} autoCapitalize="off" autoCorrect="off" spellCheck="false" /><section className="terminal-console structured-packet-output" aria-labelledby="structured-output-heading"><div className="console-heading-row"><strong id="structured-output-heading">SYSTEM // STRICT 8-CHECK VALIDATOR</strong><button className="run-action" type="submit">Run packet</button></div><div id="structured-status" className={structuredPacketSession.result ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{getStructuredPacketFeedback(structuredPacketSession.result, structuredPacketSession.hintLevel).systemScore}</div>{getStructuredPacketFeedback(structuredPacketSession.result, structuredPacketSession.hintLevel).teacherRemediation && <p id="structured-python-remediation" className="teacher-remediation"><strong>901 TEACHER // PYTHON REMEDIATION</strong><span>{getStructuredPacketFeedback(structuredPacketSession.result, structuredPacketSession.hintLevel).teacherRemediation}</span></p>}{structuredPacketSession.result && <ul id="structured-check-list" className="structured-checks" aria-label="Structured Packet checks">{structuredPacketChecks.map((check) => <li key={check} data-check-passed={structuredPacketSession.result.checks[check]}>{structuredPacketSession.result.checks[check] ? "PASS" : "REVIEW"} · {check.replaceAll("_", " ")}</li>)}</ul>}{structuredPacketSession.result && !structuredPacketSession.result.passed && <button className="hint-action" type="button" disabled={structuredPacketSession.hintLevel >= 3} onClick={revealStructuredPacketHint}>Reveal next data-path step</button>}{structuredPacketSession.result?.passed && <button className="confirm-action" type="button" onClick={advanceStructuredPacket}>{structuredPacketSession.form === "transfer" ? "Begin closed-note explanation" : "View primary result"}</button>}</section></div>
                </form>
              )}
            </section>
          </TerminalShell>
        )}
        {terminalOpen && scene.id === "ruins" && ruinsTerminalKind === "control-flow" && controlFlowSession && (
          <TerminalShell exerciseId={controlFlowExercise.exercise_id} title="Control Flow" filename={controlFlowSession.phase === "explanation" ? "closed_note.md" : `control_flow_${controlFlowSession.form}.py`} lessonId={controlFlowExercise.lesson_id} statusText={controlFlowSession.phase === "explanation" ? "CLOSED-NOTE GATE" : `${controlFlowSession.form.toUpperCase()} ${controlFlowSession.result?.score ?? 0}/8`} closeLabel="Exit Control Flow" restoreFocusTo={terminalTriggerRef.current} onClose={exitControlFlow}>
            <section className="structured-packet-workspace control-flow-workspace">
              <p className="model-choice-boundary">Course-authored Python practice — not a live Foundry schema or Microsoft exam question. Future SDK, endpoint, and runtime requirements must be reverified.</p>
              {controlFlowSession.phase === "explanation" ? (
                <form className="structured-packet-explanation" onSubmit={checkControlFlowExplanation}>
                  <header><p className="pane-label">PILOT // CLOSED-NOTE EXPLANATION OWNER</p><h2>Explain parameter → loop → condition → return</h2><p>Recall how caller inputs become parameters, how each loop iteration selects one append branch including equality, and why return follows the loop. Your words stay session-only.</p></header>
                  <div className="structured-explanation-fields">{controlFlowExplanationDimensions.map((dimension) => { const fieldResult = controlFlowSession.explanationResult?.correctness[dimension]; const id = `control-explanation-${dimension}-feedback`; const labels = { parameter: "Parameter input", loop_condition: "Loop and condition", return: "Return placement" }; return <label key={dimension}><span>{labels[dimension]}</span><input aria-label={`Closed-note ${labels[dimension]}`} aria-invalid={controlFlowSession.explanationResult ? !fieldResult : undefined} aria-describedby={controlFlowSession.explanationResult ? id : undefined} autoComplete="off" value={controlFlowSession.explanationResponse[dimension]} onChange={(event) => setControlFlowSession({ ...controlFlowSession, explanationResponse: { ...controlFlowSession.explanationResponse, [dimension]: event.target.value }, explanationResult: null, ownershipConfirmed: false })} />{controlFlowSession.explanationResult && <small id={id}>{fieldResult ? "SYSTEM // Dimension confirmed." : `901 TEACHER // Rebuild ${labels[dimension].toLowerCase()} from one iteration.`}</small>}</label>; })}</div>
                  <section className="terminal-console structured-packet-output"><div className="console-heading-row"><strong>SYSTEM // CLOSED-NOTE VALIDATOR</strong><button className="run-action" type="submit" disabled={controlFlowExplanationDimensions.some((key) => !controlFlowSession.explanationResponse[key])}>Check control flow</button></div><div className={controlFlowSession.explanationResult ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{getControlFlowExplanationFeedback(controlFlowSession.explanationResult).systemScore}</div>{getControlFlowExplanationFeedback(controlFlowSession.explanationResult).teacherRemediation && <p className="teacher-remediation"><strong>901 TEACHER // EXECUTION-PATH REMEDIATION</strong><span>{getControlFlowExplanationFeedback(controlFlowSession.explanationResult).teacherRemediation}</span></p>}{controlFlowSession.explanationResult?.passed && <><label className="ownership-confirmation"><input type="checkbox" checked={controlFlowSession.ownershipConfirmed} onChange={(event) => setControlFlowSession({ ...controlFlowSession, ownershipConfirmed: event.target.checked })} />I produced this control-flow explanation myself without notes.</label><fieldset className="confidence-group"><legend>Confidence after both forms</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="control-mastery-confidence" checked={controlFlowEvidence?.confidence === value} onChange={() => setControlFlowEvidence((previous) => updateControlFlowEvidence(previous, { confidence: value }))} />{value}</label>)}</fieldset><button className="confirm-action" type="button" disabled={!controlFlowSession.ownershipConfirmed || !controlFlowEvidence?.confidence} onClick={acknowledgeControlFlowMastery}>Acknowledge strict mastery</button></>}</section>
                </form>
              ) : controlFlowSession.complete ? (
                <section className="workload-summary"><p className="pane-label">901 TEACHER // PRIMARY FORM COMPLETE</p><h2>8 / 8 checks</h2><p>Function signature, loop, if/else, boundary, unseen reuse, no mutation, return, and derived output pass.</p><fieldset className="confidence-group"><legend>Confidence after primary form</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="control-primary-confidence" checked={controlFlowEvidence?.confidence === value} onChange={() => setControlFlowEvidence((previous) => updateControlFlowEvidence(previous, { confidence: value }))} />{value}</label>)}</fieldset><button className="confirm-action" type="button" disabled={!controlFlowEvidence?.confidence} onClick={acknowledgeControlFlowPrimary}>Acknowledge primary form</button></section>
              ) : (
                <form className="structured-packet-form" onSubmit={runControlFlow}>
                  <aside className="task-pane"><p className="pane-label">{controlFlowSession.form === "transfer" ? "UNSEEN TRANSFER" : "PRIMARY"} · PILOT // FUNCTION OWNER</p><h2>Trace one iteration</h2><ol className="data-path-trace"><li>Parameters receive caller inputs.</li><li>Loop visits every item.</li><li><code>&gt;=</code> includes the boundary.</li><li>Exactly one branch appends.</li><li>Return the new list after the loop.</li></ol><p>Do not mutate input or print a sample answer. The same function must pass unseen inputs.</p></aside>
                  <div className="structured-editor-stack"><label htmlFor="control-flow-source">EDITABLE PYTHON · session-only</label><textarea id="control-flow-source" aria-label="Control Flow Python source" aria-invalid={controlFlowSession.result ? !controlFlowSession.result.passed : undefined} aria-describedby={controlFlowSession.result ? controlFlowSession.result.passed ? "control-flow-status control-flow-check-list" : "control-flow-status control-flow-check-list control-flow-remediation" : undefined} value={controlFlowSession.source} onChange={(event) => setControlFlowSession({ ...controlFlowSession, source: event.target.value, result: null })} autoCapitalize="off" autoCorrect="off" spellCheck="false" /><section className="terminal-console structured-packet-output"><div className="console-heading-row"><strong>SYSTEM // STRICT 8-CHECK VALIDATOR</strong><button className="run-action" type="submit">Run function</button></div><div id="control-flow-status" className={controlFlowSession.result ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{getControlFlowFeedback(controlFlowSession.result, controlFlowSession.hintLevel).systemScore}</div>{getControlFlowFeedback(controlFlowSession.result, controlFlowSession.hintLevel).teacherRemediation && <p id="control-flow-remediation" className="teacher-remediation"><strong>901 TEACHER // PYTHON AND BOUNDARY REMEDIATION</strong><span>{getControlFlowFeedback(controlFlowSession.result, controlFlowSession.hintLevel).teacherRemediation}</span></p>}{controlFlowSession.result && <ul id="control-flow-check-list" className="structured-checks" aria-label="Control Flow checks">{controlFlowChecks.map((check) => <li key={check} data-check-passed={controlFlowSession.result.checks[check]}>{controlFlowSession.result.checks[check] ? "PASS" : "REVIEW"} · {check.replaceAll("_", " ")}</li>)}</ul>}{controlFlowSession.result && !controlFlowSession.result.passed && <button className="hint-action" type="button" disabled={controlFlowSession.hintLevel >= 3} onClick={revealControlFlowHint}>Reveal next iteration step</button>}{controlFlowSession.result?.passed && <button className="confirm-action" type="button" onClick={advanceControlFlow}>{controlFlowSession.form === "transfer" ? "Begin closed-note explanation" : "View primary result"}</button>}</section></div>
                </form>
              )}
            </section>
          </TerminalShell>
        )}
        {terminalOpen && scene.id === "ruins" && ruinsTerminalKind === "client-bridge" && clientBridgeSession && (
          <TerminalShell exerciseId={clientBridgeExercise.exercise_id} title="Offline Client Bridge" filename={clientBridgeSession.phase === "code" ? `client_${clientBridgeSession.form}.py` : `${clientBridgeSession.phase}.md`} lessonId={clientBridgeExercise.lesson_id} statusText={clientBridgeSession.phase === "code" ? `${clientBridgeSession.form.toUpperCase()} ${clientBridgeSession.result?.score ?? 0}/10` : clientBridgeSession.phase.toUpperCase()} closeLabel="Exit Client Bridge" describedBy="client-bridge-offline-warning" restoreFocusTo={terminalTriggerRef.current} onClose={exitClientBridge}>
            <section className="structured-packet-workspace client-bridge-workspace"><p id="client-bridge-offline-warning" className="model-choice-boundary" role="note">OFFLINE SIMULATION ONLY · no real service is contacted. No real credential is accepted. Never paste credentials. Package versions, identity, endpoints, roles, schemas, and runtimes must be reverified.</p>
              {clientBridgeSession.phase === "explanation" ? (
                <form className="structured-packet-explanation" onSubmit={checkClientBridgeExplanation}><header><p className="pane-label">PILOT // CLOSED-NOTE EXPLANATION OWNER</p><h2>Explain module → file → secret → request → response</h2><p>No source, config, secret, or answer choices are shown. Your words remain session-only.</p></header><div className="structured-explanation-fields client-bridge-explanation">{clientBridgeExplanationDimensions.map((dimension) => { const fieldResult = clientBridgeSession.explanationResult?.correctness[dimension]; const id = `bridge-explanation-${dimension}-feedback`; return <label key={dimension}><span>{dimension}</span><input aria-label={`Closed-note bridge ${dimension}`} aria-invalid={clientBridgeSession.explanationResult ? !fieldResult : undefined} aria-describedby={clientBridgeSession.explanationResult ? id : undefined} autoComplete="off" value={clientBridgeSession.explanationResponse[dimension]} onChange={(event) => setClientBridgeSession({ ...clientBridgeSession, explanationResponse: { ...clientBridgeSession.explanationResponse, [dimension]: event.target.value }, explanationResult: null, ownershipConfirmed: false })} />{clientBridgeSession.explanationResult && <small id={id}>{fieldResult ? "SYSTEM // Layer confirmed." : `901 TEACHER // Rebuild the ${dimension} boundary without exposing data.`}</small>}</label>; })}</div><section className="terminal-console structured-packet-output"><div className="console-heading-row"><strong>SYSTEM // CLOSED-NOTE VALIDATOR</strong><button className="run-action" type="submit" disabled={clientBridgeExplanationDimensions.some((key) => !clientBridgeSession.explanationResponse[key])}>Check bridge explanation</button></div><div className={clientBridgeSession.explanationResult ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{getClientBridgeExplanationFeedback(clientBridgeSession.explanationResult).systemScore}</div>{getClientBridgeExplanationFeedback(clientBridgeSession.explanationResult).teacherRemediation && <p className="teacher-remediation"><strong>901 TEACHER // FIVE-LAYER REMEDIATION</strong><span>{getClientBridgeExplanationFeedback(clientBridgeSession.explanationResult).teacherRemediation}</span></p>}{clientBridgeSession.explanationResult?.passed && <><label className="ownership-confirmation"><input type="checkbox" checked={clientBridgeSession.ownershipConfirmed} onChange={(event) => setClientBridgeSession({ ...clientBridgeSession, ownershipConfirmed: event.target.checked })} />I produced this bridge explanation myself without notes.</label><fieldset className="confidence-group"><legend>Confidence after all gates</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="bridge-confidence" checked={clientBridgeEvidence?.confidence === value} onChange={() => setClientBridgeEvidence((previous) => updateClientBridgeEvidence(previous, { confidence: value }))} />{value}</label>)}</fieldset><button className="confirm-action" type="button" disabled={!clientBridgeSession.ownershipConfirmed || !clientBridgeEvidence?.confidence} onClick={acknowledgeClientBridgeMastery}>Acknowledge strict mastery</button></>}</section></form>
              ) : clientBridgeSession.phase === "retrieval" ? (
                <form className="structured-packet-explanation bridge-retrieval" onSubmit={checkClientBridgeRetrieval}><header><p className="pane-label">901 TEACHER // RETRIEVAL 4/4</p><h2>Separate imports, installation, secrets, and HTTP parts</h2></header>{clientBridgeRetrieval.map((item) => <fieldset key={item.id}><legend>{item.id} · {item.prompt}</legend>{getClientBridgeRetrievalOptions(item.id).map((option) => <label key={option}><input type="radio" name={`bridge-${item.id}`} checked={clientBridgeSession.retrievalAnswers[item.id] === option} onChange={() => setClientBridgeSession({ ...clientBridgeSession, retrievalAnswers: { ...clientBridgeSession.retrievalAnswers, [item.id]: option }, retrievalResult: null })} />{formatChoice(option)}</label>)}{clientBridgeSession.retrievalResult && <small>{clientBridgeSession.retrievalResult.correctness[item.id] ? "SYSTEM // Correct." : "901 TEACHER // Revisit this layer distinction."}</small>}</fieldset>)}<section className="terminal-console structured-packet-output"><div className="console-heading-row"><strong>SYSTEM // RETRIEVAL VALIDATOR</strong><button className="run-action" type="submit" disabled={clientBridgeRetrieval.some((item) => !clientBridgeSession.retrievalAnswers[item.id])}>Check retrieval</button></div><div className={clientBridgeSession.retrievalResult ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{getClientBridgeRetrievalFeedback(clientBridgeSession.retrievalResult).systemScore}</div>{getClientBridgeRetrievalFeedback(clientBridgeSession.retrievalResult).teacherRemediation && <p className="teacher-remediation"><strong>901 TEACHER // RETRIEVAL REMEDIATION</strong><span>{getClientBridgeRetrievalFeedback(clientBridgeSession.retrievalResult).teacherRemediation}</span></p>}{clientBridgeSession.retrievalResult?.passed && <button className="confirm-action" type="button" onClick={advanceClientBridgeExplanation}>Begin closed-note explanation</button>}</section></form>
              ) : clientBridgeSession.complete ? (
                <section className="workload-summary"><p className="pane-label">901 TEACHER // PRIMARY FORM COMPLETE</p><h2>10 / 10 checks</h2><p>Imports, file/config, injected secret, missing-secret rejection, offline request, hidden reuse, and redaction pass.</p><fieldset className="confidence-group"><legend>Confidence after primary form</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="bridge-primary-confidence" checked={clientBridgeEvidence?.confidence === value} onChange={() => setClientBridgeEvidence((previous) => updateClientBridgeEvidence(previous, { confidence: value }))} />{value}</label>)}</fieldset><button className="confirm-action" type="button" disabled={!clientBridgeEvidence?.confidence} onClick={acknowledgeClientBridgePrimary}>Acknowledge primary form</button></section>
              ) : (
                <form className="structured-packet-form" onSubmit={runClientBridge}><aside className="task-pane"><p className="pane-label">{clientBridgeSession.form === "transfer" ? "FRESH TRANSFER" : "PRIMARY"} · PILOT // OFFLINE SOURCE OWNER</p><h2>Trace five safe layers</h2><ol className="data-path-trace"><li>Import module from active environment.</li><li>Read passed file path; parse JSON text.</li><li>Look up named environment secret; reject missing.</li><li>Build method/URL/headers/body dictionary.</li><li>Response status/body would arrive later.</li></ol><p>Never send, print authorization, hardcode config, or paste a secret.</p></aside><div className="structured-editor-stack"><label htmlFor="client-bridge-source">EDITABLE PYTHON · no execution/network · session-only</label><textarea id="client-bridge-source" aria-label="Client Bridge Python source" aria-invalid={clientBridgeSession.result ? !clientBridgeSession.result.passed : undefined} aria-describedby={clientBridgeSession.result ? clientBridgeSession.result.passed ? "bridge-status bridge-check-list" : "bridge-status bridge-check-list bridge-remediation" : undefined} value={clientBridgeSession.source} onChange={(event) => setClientBridgeSession({ ...clientBridgeSession, source: event.target.value, result: null })} autoCapitalize="off" autoCorrect="off" spellCheck="false" /><section className="terminal-console structured-packet-output"><div className="console-heading-row"><strong>SYSTEM // STRICT 10-CHECK OFFLINE VALIDATOR</strong><button className="run-action" type="submit">Validate bridge</button></div><div id="bridge-status" className={clientBridgeSession.result ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{getClientBridgeFeedback(clientBridgeSession.result, clientBridgeSession.hintLevel).systemScore}</div>{getClientBridgeFeedback(clientBridgeSession.result, clientBridgeSession.hintLevel).teacherRemediation && <p id="bridge-remediation" className="teacher-remediation"><strong>901 TEACHER // OFFLINE AND CREDENTIAL REMEDIATION</strong><span>{getClientBridgeFeedback(clientBridgeSession.result, clientBridgeSession.hintLevel).teacherRemediation}</span></p>}{clientBridgeSession.result && <ul id="bridge-check-list" className="structured-checks" aria-label="Client Bridge checks">{clientBridgeChecks.map((check) => <li key={check} data-check-passed={clientBridgeSession.result.checks[check]}>{clientBridgeSession.result.checks[check] ? "PASS" : "REVIEW"} · {check.replaceAll("_", " ")}</li>)}</ul>}{clientBridgeSession.result && !clientBridgeSession.result.passed && <button className="hint-action" type="button" disabled={clientBridgeSession.hintLevel >= 3} onClick={revealClientBridgeHint}>Reveal next safe layer</button>}{clientBridgeSession.result?.passed && <button className="confirm-action" type="button" onClick={advanceClientBridge}>{clientBridgeSession.form === "transfer" ? "Begin retrieval" : "View primary result"}</button>}</section></div></form>
              )}
            </section>
          </TerminalShell>
        )}
        {terminalOpen && scene.id === "ruins" && ruinsTerminalKind === "text-analysis" && textAnalysisSession && (
          <TerminalShell exerciseId={textAnalysisExercise.exercise_id} title="Offline Text Analysis" filename={textAnalysisSession.phase === "explanation" ? "closed_note.md" : `${textAnalysisSession.form}_workloads.json`} lessonId={textAnalysisExercise.lesson_id} statusText={textAnalysisSession.phase === "explanation" ? "CLOSED-NOTE GATE" : `${textAnalysisSession.form.toUpperCase()} ${textAnalysisSession.index + 1}/6`} closeLabel="Exit Text Analysis" describedBy="text-analysis-terminology-bridge" restoreFocusTo={terminalTriggerRef.current} onClose={exitTextAnalysis}>
            <section className="model-choice-workspace text-analysis-workspace"><p id="text-analysis-terminology-bridge" className="model-choice-boundary" role="note">COURSE-AUTHORED OFFLINE PRACTICE · no service call or document text. TERMINOLOGY BRIDGE: AI-901 “keyword extraction” ↔ Azure “key phrase extraction.” Reverify SDKs, operations, endpoints, authentication, languages, limits, regions, pricing, and preview status.</p>
              {textAnalysisSession.phase === "explanation" ? (
                <form className="model-choice-form" onSubmit={checkTextAnalysisExplanation}><header><p className="pane-label">PILOT // CLOSED-NOTE WORKLOAD OWNER</p><h2>Explain key phrase extraction and safe result correlation</h2><p>Bridge AI-901 “keyword extraction” wording to the service capability, then preserve document IDs and mixed success/error handling. Your words remain session-only.</p></header><div className="model-choice-fields text-analysis-explanation">{textAnalysisExplanationDimensions.map((dimension) => { const fieldResult = textAnalysisSession.explanationResult?.correctness[dimension]; const id = `text-explanation-${dimension}-feedback`; return <label key={dimension}><span>{dimension.replaceAll("_", " ")}</span><input aria-label={`Closed-note text analysis ${dimension}`} aria-invalid={textAnalysisSession.explanationResult ? !fieldResult : undefined} aria-describedby={textAnalysisSession.explanationResult ? id : undefined} autoComplete="off" value={textAnalysisSession.explanationResponse[dimension]} onChange={(event) => setTextAnalysisSession({ ...textAnalysisSession, explanationResponse: { ...textAnalysisSession.explanationResponse, [dimension]: event.target.value }, explanationResult: null, ownershipConfirmed: false })} />{textAnalysisSession.explanationResult && <small id={id}>{fieldResult ? "SYSTEM // Dimension confirmed." : `901 TEACHER // Rebuild ${dimension.replaceAll("_", " ")} from the requested output and batch flow.`}</small>}</label>; })}</div><section className="terminal-console model-choice-output"><div className="console-heading-row"><strong>SYSTEM // CLOSED-NOTE VALIDATOR</strong><button className="run-action" type="submit" disabled={textAnalysisExplanationDimensions.some((key) => !textAnalysisSession.explanationResponse[key])}>Check workload explanation</button></div><div className={textAnalysisSession.explanationResult ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{getTextAnalysisExplanationFeedback(textAnalysisSession.explanationResult).systemScore}</div>{getTextAnalysisExplanationFeedback(textAnalysisSession.explanationResult).teacherRemediation && <p className="teacher-remediation"><strong>901 TEACHER // DOCUMENT-FLOW REMEDIATION</strong><span>{getTextAnalysisExplanationFeedback(textAnalysisSession.explanationResult).teacherRemediation}</span></p>}{textAnalysisSession.explanationResult?.passed && <><label className="ownership-confirmation"><input type="checkbox" checked={textAnalysisSession.ownershipConfirmed} onChange={(event) => setTextAnalysisSession({ ...textAnalysisSession, ownershipConfirmed: event.target.checked })} />I produced this workload explanation myself without notes.</label><fieldset className="confidence-group"><legend>Confidence after both forms</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="text-analysis-confidence" checked={textAnalysisEvidence?.confidence === value} onChange={() => setTextAnalysisEvidence((previous) => updateTextAnalysisEvidence(previous, { confidence: value }))} />{value}</label>)}</fieldset><button className="confirm-action" type="button" disabled={!textAnalysisSession.ownershipConfirmed || !textAnalysisEvidence?.confidence} onClick={acknowledgeTextAnalysisMastery}>Acknowledge strict mastery</button></>}</section></form>
              ) : textAnalysisSession.complete ? (
                <section className="workload-summary"><p className="pane-label">901 TEACHER // PRIMARY FORM COMPLETE</p><h2>12 / 12 dimensions</h2><p>Four capabilities and both document-correlation/error-flow items pass. Fresh transfer and closed-note explanation remain.</p><fieldset className="confidence-group"><legend>Confidence after primary form</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="text-primary-confidence" checked={textAnalysisEvidence?.confidence === value} onChange={() => setTextAnalysisEvidence((previous) => updateTextAnalysisEvidence(previous, { confidence: value }))} />{value}</label>)}</fieldset><button className="confirm-action" type="button" disabled={!textAnalysisEvidence?.confidence} onClick={acknowledgeTextAnalysisPrimary}>Acknowledge primary form</button></section>
              ) : (() => { const scenarios = textAnalysisSession.form === "transfer" ? textAnalysisTransferScenarios : textAnalysisPrimaryScenarios; const scenario = scenarios[textAnalysisSession.index]; const options = getTextAnalysisOptions(scenario.id, textAnalysisSession.form); const feedback = getTextAnalysisFeedback(scenario, textAnalysisSession.result, textAnalysisSession.hintLevel); return <form className="model-choice-form" onSubmit={checkTextAnalysis}><header><p className="pane-label">{textAnalysisSession.form === "transfer" ? "FRESH TRANSFER" : "PRIMARY"} · PILOT // WORKLOAD OWNER · {scenario.id}</p><p className="model-choice-layer-labels">KEY PHRASES · ENTITIES · SENTIMENT · SUMMARY · DOCUMENT FLOW</p><h2>{scenario.prompt}</h2></header><div className="model-choice-fields">{textAnalysisDimensions.map((dimension) => { const fieldResult = textAnalysisSession.result?.correctness[dimension]; const id = `text-analysis-${dimension}-feedback`; return <label key={dimension}><span>{dimension}</span><select aria-label={`Text analysis ${dimension}`} aria-invalid={textAnalysisSession.result ? !fieldResult : undefined} aria-describedby={textAnalysisSession.result ? id : undefined} value={textAnalysisSession.response[dimension]} onChange={(event) => setTextAnalysisSession({ ...textAnalysisSession, response: { ...textAnalysisSession.response, [dimension]: event.target.value }, result: null })}><option value="">Choose one</option>{options[dimension].map((value) => <option key={value} value={value}>{formatChoice(value)}</option>)}</select>{textAnalysisSession.result && <small id={id}>{fieldResult ? "SYSTEM // Correct." : `901 TEACHER // Review the ${dimension} from the requested output and attribution requirement.`}</small>}</label>; })}</div><section className="terminal-console model-choice-output"><div className="console-heading-row"><strong>SYSTEM // STRICT 12-DIMENSION VALIDATOR</strong><button className="run-action" type="submit" disabled={textAnalysisDimensions.some((key) => !textAnalysisSession.response[key])}>Check workload choice</button></div><div className={textAnalysisSession.result ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{feedback.systemScore}</div>{feedback.teacherRemediation && <p className="teacher-remediation"><strong>901 TEACHER // CAPABILITY AND CORRELATION REMEDIATION</strong><span>{feedback.teacherRemediation}</span></p>}{textAnalysisSession.result && !textAnalysisSession.result.passed && <button className="hint-action" type="button" disabled={textAnalysisSession.hintLevel >= 3} onClick={revealTextAnalysisHint}>Reveal next workload contrast</button>}{textAnalysisSession.result?.passed && <button className="confirm-action" type="button" onClick={advanceTextAnalysis}>{textAnalysisSession.index === 5 ? (textAnalysisSession.form === "transfer" ? "Begin closed-note explanation" : "View primary result") : "Next scenario"}</button>}</section></form>; })()}
            </section>
          </TerminalShell>
        )}
        {terminalOpen && scene.id === "ruins" && ruinsTerminalKind === "speech-workloads" && speechSession && (
          <TerminalShell exerciseId={speechWorkloadExercise.exercise_id} title="Offline Speech Workloads" filename={speechSession.phase === "explanation" ? "closed_note.md" : `${speechSession.form}_speech.json`} lessonId={speechWorkloadExercise.lesson_id} statusText={speechSession.phase === "explanation" ? "CLOSED-NOTE GATE" : `${speechSession.form.toUpperCase()} ${speechSession.index + 1}/6`} closeLabel="Exit Speech Workloads" describedBy={speechDialogDescribedBy} restoreFocusTo={terminalTriggerRef.current} onClose={exitSpeechWorkloads}>
            <section className="model-choice-workspace speech-workspace"><p id="speech-offline-warning" className="model-choice-boundary" role="note">FULLY OFFLINE · no listening, no recording, no service call, and no voice persistence. No microphone, capture, playback generation, or audio file exists. Reverify SDKs, endpoints, authentication, languages, voices, formats, regions, quotas, pricing, and previews.</p><p id="speech-transcript-equivalent" className="speech-transcript">Transcript-equivalent text: spoken audio → recognition → text; written text → synthesis → audio; spoken general-model questions use multimodal prompt flow.</p>
              {speechSession.phase === "explanation" ? (
                <form className="model-choice-form" onSubmit={checkSpeechExplanation}><header><p className="pane-label">PILOT // CLOSED-NOTE SPEECH-FLOW OWNER</p><h2>Explain direction, workload, file binding, and result branch</h2></header><div className="model-choice-fields speech-explanation">{speechExplanationDimensions.map((dimension) => { const fieldResult = speechSession.explanationResult?.correctness[dimension]; const id = `speech-explanation-${dimension}-feedback`; return <label key={dimension}><span>{dimension.replaceAll("_", " ")}</span><input aria-label={`Closed-note speech ${dimension}`} aria-invalid={speechSession.explanationResult ? !fieldResult : undefined} aria-describedby={speechSession.explanationResult ? id : undefined} autoComplete="off" value={speechSession.explanationResponse[dimension]} onChange={(event) => setSpeechSession({ ...speechSession, explanationResponse: { ...speechSession.explanationResponse, [dimension]: event.target.value }, explanationResult: null, ownershipConfirmed: false })} />{speechSession.explanationResult && <small id={id}>{fieldResult ? "SYSTEM // Dimension confirmed." : `901 TEACHER // Rebuild ${dimension.replaceAll("_", " ")} from the text-equivalent flow.`}</small>}</label>; })}</div><section className="terminal-console model-choice-output"><div className="console-heading-row"><strong>SYSTEM // CLOSED-NOTE VALIDATOR</strong><button className="run-action" type="submit" disabled={speechExplanationDimensions.some((key) => !speechSession.explanationResponse[key])}>Check speech explanation</button></div><div className={speechSession.explanationResult ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{getSpeechExplanationFeedback(speechSession.explanationResult).systemScore}</div>{getSpeechExplanationFeedback(speechSession.explanationResult).teacherRemediation && <p className="teacher-remediation"><strong>901 TEACHER // DIRECTION AND CANCELLATION REMEDIATION</strong><span>{getSpeechExplanationFeedback(speechSession.explanationResult).teacherRemediation}</span></p>}{speechSession.explanationResult?.passed && <><label className="ownership-confirmation"><input type="checkbox" checked={speechSession.ownershipConfirmed} onChange={(event) => setSpeechSession({ ...speechSession, ownershipConfirmed: event.target.checked })} />I produced this speech-flow explanation myself without notes.</label><fieldset className="confidence-group"><legend>Confidence after both forms</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="speech-confidence" checked={speechEvidence?.confidence === value} onChange={() => setSpeechEvidence((previous) => updateSpeechEvidence(previous, { confidence: value }))} />{value}</label>)}</fieldset><button className="confirm-action" type="button" disabled={!speechSession.ownershipConfirmed || !speechEvidence?.confidence} onClick={acknowledgeSpeechMastery}>Acknowledge strict mastery</button></>}</section></form>
              ) : speechSession.complete ? (
                <section className="workload-summary"><p className="pane-label">901 TEACHER // PRIMARY FORM COMPLETE</p><h2>12 / 12 dimensions</h2><p>Recognition, synthesis, spoken multimodal prompts, input/output files, and cancellation handling pass. Fresh transfer and closed-note explanation remain.</p><fieldset className="confidence-group"><legend>Confidence after primary form</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="speech-primary-confidence" checked={speechEvidence?.confidence === value} onChange={() => setSpeechEvidence((previous) => updateSpeechEvidence(previous, { confidence: value }))} />{value}</label>)}</fieldset><button className="confirm-action" type="button" disabled={!speechEvidence?.confidence} onClick={acknowledgeSpeechPrimary}>Acknowledge primary form</button></section>
              ) : (() => { const scenarios = speechSession.form === "transfer" ? speechTransferScenarios : speechPrimaryScenarios; const scenario = scenarios[speechSession.index]; const options = getSpeechOptions(scenario.id, speechSession.form); const feedback = getSpeechFeedback(scenario, speechSession.result, speechSession.hintLevel); return <form className="model-choice-form" onSubmit={checkSpeech}><header><p className="pane-label">{speechSession.form === "transfer" ? "FRESH TRANSFER" : "PRIMARY"} · PILOT // SPEECH-FLOW OWNER · {scenario.id}</p><p className="model-choice-layer-labels">AUDIO → TEXT · TEXT → AUDIO · SPOKEN MULTIMODAL PROMPT · RESULT/CANCELLATION</p><h2>{scenario.prompt}</h2><p className="speech-transcript">Transcript-equivalent scenario text: {scenario.prompt}</p></header><div className="model-choice-fields">{speechDimensions.map((dimension) => { const fieldResult = speechSession.result?.correctness[dimension]; const id = `speech-${dimension}-feedback`; return <label key={dimension}><span>{dimension}</span><select aria-label={`Speech ${dimension}`} aria-invalid={speechSession.result ? !fieldResult : undefined} aria-describedby={speechSession.result ? id : undefined} value={speechSession.response[dimension]} onChange={(event) => setSpeechSession({ ...speechSession, response: { ...speechSession.response, [dimension]: event.target.value }, result: null })}><option value="">Choose one</option>{options[dimension].map((value) => <option key={value} value={value}>{formatChoice(value)}</option>)}</select>{speechSession.result && <small id={id}>{fieldResult ? "SYSTEM // Correct." : `901 TEACHER // Review the ${dimension} from direction, file binding, and result reason.`}</small>}</label>; })}</div><section className="terminal-console model-choice-output"><div className="console-heading-row"><strong>SYSTEM // STRICT 12-DIMENSION VALIDATOR</strong><button className="run-action" type="submit" disabled={speechDimensions.some((key) => !speechSession.response[key])}>Check speech choice</button></div><div className={speechSession.result ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{feedback.systemScore}</div>{feedback.teacherRemediation && <p className="teacher-remediation"><strong>901 TEACHER // SPEECH-FLOW REMEDIATION</strong><span>{feedback.teacherRemediation}</span></p>}{speechSession.result && !speechSession.result.passed && <button className="hint-action" type="button" disabled={speechSession.hintLevel >= 3} onClick={revealSpeechHint}>Reveal next speech-flow contrast</button>}{speechSession.result?.passed && <button className="confirm-action" type="button" onClick={advanceSpeech}>{speechSession.index === 5 ? (speechSession.form === "transfer" ? "Begin closed-note explanation" : "View primary result") : "Next scenario"}</button>}</section></form>; })()}
            </section>
          </TerminalShell>
        )}
        {terminalOpen && scene.id === "ruins" && ruinsTerminalKind === "visual-workloads" && visualSession && (
          <TerminalShell exerciseId={visualWorkloadExercise.exercise_id} title="Offline Visual Workloads" filename={visualSession.phase === "explanation" ? "closed_note.md" : `${visualSession.form}_visual.json`} lessonId={visualWorkloadExercise.lesson_id} statusText={visualSession.phase === "explanation" ? "CLOSED-NOTE GATE" : `${visualSession.form.toUpperCase()} ${visualSession.index + 1}/6`} closeLabel="Exit Visual Workloads" describedBy={visualDialogDescribedBy} restoreFocusTo={terminalTriggerRef.current} onClose={exitVisualWorkloads}>
            <section className="model-choice-workspace visual-workspace">
              <p id="visual-offline-warning" className="model-choice-boundary" role="note">FULLY OFFLINE · no media processing, upload, generation, or service call. No image, video, media path, prompt, output, or free text is persisted. Reverify SDKs, endpoints, authentication, supported formats, regions, quotas, pricing, and previews.</p>
              <p id="visual-text-equivalent" className="speech-transcript">Text-equivalent visual flow: existing pixels → image analysis; visual plus text → multimodal prompting; written brief → new image or time-based video; validate path/type before request; branch analysis JSON from generated media.</p>
              <p id="visual-deprecation-warning" className="model-choice-boundary" role="note"><strong>DEPRECATION WARNING:</strong> Image Analysis 4.0 is deprecated. Treat it as exam context, not a recommendation for new production architecture; verify current Microsoft guidance.</p>
              {visualSession.phase === "explanation" ? (
                <form className="model-choice-form" onSubmit={checkVisualExplanation}><header><p className="pane-label">PILOT // CLOSED-NOTE VISUAL-FLOW OWNER</p><h2>Explain workload choice and output handling</h2></header><div className="model-choice-fields visual-explanation">{visualExplanationDimensions.map((dimension) => { const fieldResult = visualSession.explanationResult?.correctness[dimension]; const id = `visual-explanation-${dimension}-feedback`; return <label key={dimension}><span>{dimension.replaceAll("_", " ")}</span><input aria-label={`Closed-note visual ${dimension}`} aria-invalid={visualSession.explanationResult ? !fieldResult : undefined} aria-describedby={visualSession.explanationResult ? id : undefined} autoComplete="off" value={visualSession.explanationResponse[dimension]} onChange={(event) => setVisualSession({ ...visualSession, explanationResponse: { ...visualSession.explanationResponse, [dimension]: event.target.value }, explanationResult: null, ownershipConfirmed: false })} />{visualSession.explanationResult && <small id={id}>{fieldResult ? "SYSTEM // Dimension confirmed." : `901 TEACHER // Rebuild ${dimension.replaceAll("_", " ")} from the text-equivalent flow.`}</small>}</label>; })}</div><section className="terminal-console model-choice-output"><div className="console-heading-row"><strong>SYSTEM // CLOSED-NOTE VALIDATOR</strong><button className="run-action" type="submit" disabled={visualExplanationDimensions.some((key) => !visualSession.explanationResponse[key])}>Check visual explanation</button></div><div className={visualSession.explanationResult ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{getVisualExplanationFeedback(visualSession.explanationResult).systemScore}</div>{getVisualExplanationFeedback(visualSession.explanationResult).teacherRemediation && <p className="teacher-remediation"><strong>901 TEACHER // WORKLOAD AND MEDIA-HANDLING REMEDIATION</strong><span>{getVisualExplanationFeedback(visualSession.explanationResult).teacherRemediation}</span></p>}{visualSession.explanationResult?.passed && <><label className="ownership-confirmation"><input type="checkbox" checked={visualSession.ownershipConfirmed} onChange={(event) => setVisualSession({ ...visualSession, ownershipConfirmed: event.target.checked })} />I produced this visual workload explanation myself without notes.</label><fieldset className="confidence-group"><legend>Confidence after both forms</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="visual-confidence" checked={visualEvidence?.confidence === value} onChange={() => setVisualEvidence((previous) => updateVisualEvidence(previous, { confidence: value }))} />{value}</label>)}</fieldset><button className="confirm-action" type="button" disabled={!visualSession.ownershipConfirmed || !visualEvidence?.confidence} onClick={acknowledgeVisualMastery}>Acknowledge strict mastery</button></>}</section></form>
              ) : visualSession.complete ? (
                <section className="workload-summary"><p className="pane-label">901 TEACHER // PRIMARY FORM COMPLETE</p><h2>12 / 12 dimensions</h2><p>Image analysis, multimodal visual prompting, image generation, video generation, validation, and output branching pass. Fresh transfer and closed-note explanation remain.</p><fieldset className="confidence-group"><legend>Confidence after primary form</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="visual-primary-confidence" checked={visualEvidence?.confidence === value} onChange={() => setVisualEvidence((previous) => updateVisualEvidence(previous, { confidence: value }))} />{value}</label>)}</fieldset><button className="confirm-action" type="button" disabled={!visualEvidence?.confidence} onClick={acknowledgeVisualPrimary}>Acknowledge primary form</button></section>
              ) : (() => { const scenarios = visualSession.form === "transfer" ? visualTransferScenarios : visualPrimaryScenarios; const scenario = scenarios[visualSession.index]; const options = getVisualOptions(scenario.id, visualSession.form); const feedback = getVisualFeedback(scenario, visualSession.result, visualSession.hintLevel); return <form className="model-choice-form" onSubmit={checkVisual}><header><p className="pane-label">{visualSession.form === "transfer" ? "FRESH TRANSFER" : "PRIMARY"} · PILOT // VISUAL-FLOW OWNER · {scenario.id}</p><p className="model-choice-layer-labels">ANALYZE · MULTIMODAL PROMPT · GENERATE IMAGE · GENERATE VIDEO · VALIDATE · BRANCH</p><h2>{scenario.prompt}</h2><p className="speech-transcript">Text-equivalent scenario: {scenario.prompt}</p></header><div className="model-choice-fields">{visualDimensions.map((dimension) => { const fieldResult = visualSession.result?.correctness[dimension]; const id = `visual-${dimension}-feedback`; return <label key={dimension}><span>{dimension}</span><select aria-label={`Visual ${dimension}`} aria-invalid={visualSession.result ? !fieldResult : undefined} aria-describedby={visualSession.result ? id : undefined} value={visualSession.response[dimension]} onChange={(event) => setVisualSession({ ...visualSession, response: { ...visualSession.response, [dimension]: event.target.value }, result: null })}><option value="">Choose one</option>{options[dimension].map((value) => <option key={value} value={value}>{formatChoice(value)}</option>)}</select>{visualSession.result && <small id={id}>{fieldResult ? "SYSTEM // Correct." : `901 TEACHER // Review the ${dimension} from existing/new media, modalities, and required output.`}</small>}</label>; })}</div><section className="terminal-console model-choice-output"><div className="console-heading-row"><strong>SYSTEM // STRICT 12-DIMENSION VALIDATOR</strong><button className="run-action" type="submit" disabled={visualDimensions.some((key) => !visualSession.response[key])}>Check visual choice</button></div><div className={visualSession.result ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{feedback.systemScore}</div>{feedback.teacherRemediation && <p className="teacher-remediation"><strong>901 TEACHER // VISUAL-FLOW REMEDIATION</strong><span>{feedback.teacherRemediation}</span></p>}{visualSession.result && !visualSession.result.passed && <button className="hint-action" type="button" disabled={visualSession.hintLevel >= 3} onClick={revealVisualHint}>Reveal next visual-flow contrast</button>}{visualSession.result?.passed && <button className="confirm-action" type="button" onClick={advanceVisual}>{visualSession.index === 5 ? (visualSession.form === "transfer" ? "Begin closed-note explanation" : "View primary result") : "Next scenario"}</button>}</section></form>; })()}
            </section>
          </TerminalShell>
        )}
        {terminalOpen && scene.id === "ruins" && ruinsTerminalKind === "extraction-workloads" && extractionSession && (
          <TerminalShell exerciseId={extractionWorkloadExercise.exercise_id} title="Offline Extraction Workloads" filename={extractionSession.phase === "explanation" ? "closed_note.md" : `${extractionSession.form}_extraction.json`} lessonId={extractionWorkloadExercise.lesson_id} statusText={extractionSession.phase === "explanation" ? "CLOSED-NOTE GATE" : `${extractionSession.form.toUpperCase()} ${extractionSession.index + 1}/6`} closeLabel="Exit Extraction Workloads" describedBy={extractionDialogDescribedBy} restoreFocusTo={terminalTriggerRef.current} onClose={exitExtractionWorkloads}>
            <section className="model-choice-workspace extraction-workspace"><p id="extraction-offline-warning" className="model-choice-boundary" role="note">FULLY OFFLINE · no document, image, audio, video, media processing, analyzer, upload, or service call. No source media, path, extracted value, service response, or free text is persisted. Reverify schemas, field types, formats, languages, SDK/REST operations, versions, limits, regions, pricing, previews, and deprecations.</p><p id="extraction-text-equivalent" className="speech-transcript">Text equivalent: choose document/form, image, audio, or video; define named fields and types before analysis; preserve missing/null rather than inventing a value; retain provenance and confidence for human review.</p>
              {extractionSession.phase === "explanation" ? (
                <form className="model-choice-form" onSubmit={checkExtractionExplanation}><header><p className="pane-label">PILOT // CLOSED-NOTE EXTRACTION OWNER</p><h2>Explain modality → schema → missing value → evidence review</h2><p>Your schema/null/evidence explanation remains Pilot-owned and session-only.</p></header><div className="model-choice-fields extraction-explanation">{extractionExplanationDimensions.map((dimension) => { const fieldResult = extractionSession.explanationResult?.correctness[dimension]; const id = `extraction-explanation-${dimension}-feedback`; return <label key={dimension}><span>{dimension.replaceAll("_", " ")}</span><input aria-label={`Closed-note extraction ${dimension}`} aria-invalid={extractionSession.explanationResult ? !fieldResult : undefined} aria-describedby={extractionSession.explanationResult ? id : undefined} autoComplete="off" value={extractionSession.explanationResponse[dimension]} onChange={(event) => setExtractionSession({ ...extractionSession, explanationResponse: { ...extractionSession.explanationResponse, [dimension]: event.target.value }, explanationResult: null, ownershipConfirmed: false })} />{extractionSession.explanationResult && <small id={id}>{fieldResult ? "SYSTEM // Dimension confirmed." : `901 TEACHER // Rebuild ${dimension.replaceAll("_", " ")} without inventing evidence.`}</small>}</label>; })}</div><section className="terminal-console model-choice-output"><div className="console-heading-row"><strong>SYSTEM // CLOSED-NOTE VALIDATOR</strong><button className="run-action" type="submit" disabled={extractionExplanationDimensions.some((key) => !extractionSession.explanationResponse[key])}>Check extraction explanation</button></div><div className={extractionSession.explanationResult ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{getExtractionExplanationFeedback(extractionSession.explanationResult).systemScore}</div>{getExtractionExplanationFeedback(extractionSession.explanationResult).teacherRemediation && <p className="teacher-remediation"><strong>901 TEACHER // SCHEMA, NULL, AND EVIDENCE REMEDIATION</strong><span>{getExtractionExplanationFeedback(extractionSession.explanationResult).teacherRemediation}</span></p>}{extractionSession.explanationResult?.passed && <><label className="ownership-confirmation"><input type="checkbox" checked={extractionSession.ownershipConfirmed} onChange={(event) => setExtractionSession({ ...extractionSession, ownershipConfirmed: event.target.checked })} />I produced this extraction explanation myself without notes.</label><fieldset className="confidence-group"><legend>Confidence after both forms</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="extraction-confidence" checked={extractionEvidence?.confidence === value} onChange={() => setExtractionEvidence((previous) => updateExtractionEvidence(previous, { confidence: value }))} />{value}</label>)}</fieldset><button className="confirm-action" type="button" disabled={!extractionSession.ownershipConfirmed || !extractionEvidence?.confidence} onClick={acknowledgeExtractionMastery}>Acknowledge strict mastery</button></>}</section></form>
              ) : extractionSession.complete ? (
                <section className="workload-summary"><p className="pane-label">901 TEACHER // PRIMARY FORM COMPLETE</p><h2>12 / 12 dimensions</h2><p>Four modalities, schema-first reasoning, and missing/evidence integrity pass. Fresh transfer and closed-note explanation remain.</p><fieldset className="confidence-group"><legend>Confidence after primary form</legend>{["low", "medium", "high"].map((value) => <label key={value}><input type="radio" name="extraction-primary-confidence" checked={extractionEvidence?.confidence === value} onChange={() => setExtractionEvidence((previous) => updateExtractionEvidence(previous, { confidence: value }))} />{value}</label>)}</fieldset><button className="confirm-action" type="button" disabled={!extractionEvidence?.confidence} onClick={acknowledgeExtractionPrimary}>Acknowledge primary form</button></section>
              ) : (() => { const scenarios = extractionSession.form === "transfer" ? extractionTransferScenarios : extractionPrimaryScenarios; const scenario = scenarios[extractionSession.index]; const options = getExtractionOptions(scenario.id, extractionSession.form); const feedback = getExtractionFeedback(scenario, extractionSession.result, extractionSession.hintLevel); return <form className="model-choice-form" onSubmit={checkExtraction}><header><p className="pane-label">{extractionSession.form === "transfer" ? "FRESH TRANSFER" : "PRIMARY"} · PILOT // SCHEMA OWNER · {scenario.id}</p><p className="model-choice-layer-labels">DOCUMENT/FORM · IMAGE · AUDIO · VIDEO · FIELD SCHEMA · MISSING/EVIDENCE</p><h2>{scenario.prompt}</h2><p className="speech-transcript">Media-equivalent scenario text: {scenario.prompt}</p></header><div className="model-choice-fields">{extractionDimensions.map((dimension) => { const fieldResult = extractionSession.result?.correctness[dimension]; const id = `extraction-${dimension}-feedback`; return <label key={dimension}><span>{dimension}</span><select aria-label={`Extraction ${dimension}`} aria-invalid={extractionSession.result ? !fieldResult : undefined} aria-describedby={extractionSession.result ? id : undefined} value={extractionSession.response[dimension]} onChange={(event) => setExtractionSession({ ...extractionSession, response: { ...extractionSession.response, [dimension]: event.target.value }, result: null })}><option value="">Choose one</option>{options[dimension].map((value) => <option key={value} value={value}>{formatChoice(value)}</option>)}</select>{extractionSession.result && <small id={id}>{fieldResult ? "SYSTEM // Correct." : `901 TEACHER // Review ${dimension} from modality, requested fields, and evidence integrity.`}</small>}</label>; })}</div><section className="terminal-console model-choice-output"><div className="console-heading-row"><strong>SYSTEM // STRICT 12-DIMENSION VALIDATOR</strong><button className="run-action" type="submit" disabled={extractionDimensions.some((key) => !extractionSession.response[key])}>Check extraction choice</button></div><div className={extractionSession.result ? "console-feedback active" : "console-feedback"} role="status" aria-live="polite">{feedback.systemScore}</div>{feedback.teacherRemediation && <p className="teacher-remediation"><strong>901 TEACHER // MODALITY, SCHEMA, AND EVIDENCE REMEDIATION</strong><span>{feedback.teacherRemediation}</span></p>}{extractionSession.result && !extractionSession.result.passed && <button className="hint-action" type="button" disabled={extractionSession.hintLevel >= 3} onClick={revealExtractionHint}>Reveal next extraction contrast</button>}{extractionSession.result?.passed && <button className="confirm-action" type="button" onClick={advanceExtraction}>{extractionSession.index === 5 ? (extractionSession.form === "transfer" ? "Begin closed-note explanation" : "View primary result") : "Next scenario"}</button>}</section></form>; })()}
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
          {ADVENTURE_VERBS.map((item) => (
            <button key={item} className={verb === item ? "verb active" : "verb"} aria-pressed={verbPressedState[item]} onClick={() => setVerb(item)} disabled={pendingAdvance}>{item}</button>
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
                <span className="speaker" data-dialogue-owner={dialogueOwner}>{getDialogueSpeaker(dialogueOwner)}</span>
                <div className="dialogue-actions">
                  {pendingAdvance && scene.id === "meadow" && routeMarkerMastery?.masteryStatus === "mastered" && calibrationMastery?.masteryStatus !== "mastered" && (
                    <button className="continue-action calibration-launch" data-terminal-focus-fallback onClick={(event) => { terminalTriggerRef.current = event.currentTarget; openCalibration(); }}>{calibrationSession ? "Resume Calibration" : "Start Calibration"}</button>
                  )}
                  {pendingAdvance && scene.id === "ruins" && workloadEvidence?.masteryStatus === "mastered" && responsibleAIEvidence?.masteryStatus !== "mastered" && (
                    <button className="continue-action" data-terminal-focus-fallback onClick={(event) => { terminalTriggerRef.current = event.currentTarget; openResponsibleAI(); }}>{responsibleAISession ? "Resume Responsible AI" : responsibleAIEvidence?.form === "transfer" || responsibleAIEvidence?.form === "explanation" ? "Start Responsible AI Transfer" : "Start Responsible AI"}</button>
                  )}
                  {pendingAdvance && scene.id === "ruins" && responsibleAIEvidence?.masteryStatus === "mastered" && modelChoiceEvidence?.masteryStatus !== "mastered" && (
                    <button className="continue-action" data-terminal-focus-fallback onClick={(event) => { terminalTriggerRef.current = event.currentTarget; openModelChoiceExercise(); }}>{modelChoiceSession ? "Resume Model Choices" : modelChoiceEvidence?.masteryStatus === "primary_complete" ? "Start Model Choice Transfer" : modelChoiceEvidence?.masteryStatus === "transfer_complete" ? "Open Closed-Note Gate" : "Start Model Choices"}</button>
                  )}
                  {pendingAdvance && scene.id === "ruins" && modelChoiceEvidence?.masteryStatus === "mastered" && structuredPacketEvidence?.masteryStatus !== "mastered" && (
                    <button className="continue-action" data-terminal-focus-fallback onClick={(event) => { terminalTriggerRef.current = event.currentTarget; openStructuredPackets(); }}>{structuredPacketSession ? "Resume Structured Packets" : structuredPacketEvidence?.masteryStatus === "primary_complete" ? "Start Structured Transfer" : structuredPacketEvidence?.masteryStatus === "transfer_complete" ? "Open Structured Closed-Note Gate" : "Start Structured Packets"}</button>
                  )}
                  {pendingAdvance && scene.id === "ruins" && structuredPacketEvidence?.masteryStatus === "mastered" && controlFlowEvidence?.masteryStatus !== "mastered" && (
                    <button ref={continueButtonRef} className="continue-action" data-terminal-focus-fallback onClick={(event) => { terminalTriggerRef.current = event.currentTarget; openControlFlow(); }}>{controlFlowSession ? "Resume Control Flow" : controlFlowEvidence?.masteryStatus === "primary_complete" ? "Start Control Flow Transfer" : controlFlowEvidence?.masteryStatus === "transfer_complete" ? "Open Control Flow Closed-Note Gate" : "Start Control Flow"}</button>
                  )}
                  {pendingAdvance && scene.id === "ruins" && controlFlowEvidence?.masteryStatus === "mastered" && clientBridgeEvidence?.masteryStatus !== "mastered" && (
                    <button ref={continueButtonRef} className="continue-action" data-terminal-focus-fallback onClick={(event) => { terminalTriggerRef.current = event.currentTarget; openClientBridge(); }}>{clientBridgeSession ? "Resume Client Bridge" : clientBridgeEvidence?.masteryStatus === "primary_complete" ? "Start Client Bridge Transfer" : clientBridgeEvidence?.masteryStatus === "transfer_complete" ? "Open Client Bridge Retrieval" : clientBridgeEvidence?.masteryStatus === "retrieval_complete" ? "Open Client Bridge Closed-Note Gate" : "Start Client Bridge"}</button>
                  )}
                  {pendingAdvance && scene.id === "ruins" && clientBridgeEvidence?.masteryStatus === "mastered" && textAnalysisEvidence?.masteryStatus !== "mastered" && (
                    <button ref={continueButtonRef} className="continue-action" data-terminal-focus-fallback onClick={(event) => { terminalTriggerRef.current = event.currentTarget; openTextAnalysis(); }}>{textAnalysisSession ? "Resume Text Analysis" : textAnalysisEvidence?.masteryStatus === "primary_complete" ? "Start Text Analysis Transfer" : textAnalysisEvidence?.masteryStatus === "transfer_complete" ? "Open Text Analysis Closed-Note Gate" : "Start Text Analysis"}</button>
                  )}
                  {pendingAdvance && scene.id === "ruins" && textAnalysisEvidence?.masteryStatus === "mastered" && speechEvidence?.masteryStatus !== "mastered" && (
                    <button ref={continueButtonRef} className="continue-action" data-terminal-focus-fallback onClick={(event) => { terminalTriggerRef.current = event.currentTarget; openSpeechWorkloads(); }}>{speechSession ? "Resume Speech Workloads" : speechEvidence?.masteryStatus === "primary_complete" ? "Start Speech Transfer" : speechEvidence?.masteryStatus === "transfer_complete" ? "Open Speech Closed-Note Gate" : "Start Speech Workloads"}</button>
                  )}
                  {pendingAdvance && scene.id === "ruins" && speechEvidence?.masteryStatus === "mastered" && visualEvidence?.masteryStatus !== "mastered" && (
                    <button ref={continueButtonRef} className="continue-action" data-terminal-focus-fallback onClick={(event) => { terminalTriggerRef.current = event.currentTarget; openVisualWorkloads(); }}>{visualSession ? "Resume Visual Workloads" : visualEvidence?.masteryStatus === "primary_complete" ? "Start Visual Transfer" : visualEvidence?.masteryStatus === "transfer_complete" ? "Open Visual Closed-Note Gate" : "Start Visual Workloads"}</button>
                  )}
                  {pendingAdvance && scene.id === "ruins" && visualEvidence?.masteryStatus === "mastered" && extractionEvidence?.masteryStatus !== "mastered" && (
                    <button ref={continueButtonRef} className="continue-action" data-terminal-focus-fallback onClick={(event) => { terminalTriggerRef.current = event.currentTarget; openExtractionWorkloads(); }}>{extractionSession ? "Resume Extraction Workloads" : extractionEvidence?.masteryStatus === "primary_complete" ? "Start Extraction Transfer" : extractionEvidence?.masteryStatus === "transfer_complete" ? "Open Extraction Closed-Note Gate" : "Start Extraction Workloads"}</button>
                  )}
                  {pendingAdvance && (scene.id !== "ruins" || extractionEvidence?.masteryStatus === "mastered") && (
                    <button ref={continueButtonRef} className="continue-action" data-terminal-focus-fallback onClick={continueJourney}>
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
