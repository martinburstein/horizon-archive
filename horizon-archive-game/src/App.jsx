import { useEffect, useMemo, useState } from "react";
import meadowImage from "../../Concept Art/Alien Meadow.png";
import ruinsImage from "../../Concept Art Book/images/drowned-archive-workload-terminal-v1.png";
import automatonImage from "../../Concept Art/Fallen Automoton.png";
import cityImage from "../../Concept Art/Underground City.png";
import evidenceAudio from "../../curriculum/lessons/L-05-07/evidence/basin_audio.wav";
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

const SAVE_KEY = "horizon-archive-prologue-v1";

const scenes = [
  {
    id: "meadow",
    chapter: "I",
    location: "Glass Meadow",
    image: meadowImage,
    hotspotLabel: "Petal terminal",
    hotspot: { left: "43%", top: "20%", width: "18%", height: "38%" },
    prompt: "A dormant interface waits inside the crystal bloom. Wake it with one line of Python.",
    question: "Write the line that displays SIGNAL FOUND.",
    answer: 'print("SIGNAL FOUND")',
    validate: (value) => validateAnswer("meadow", value),
    hint: "Python displays text with print(). Put the text inside quotation marks.",
    success: "The bloom answers in your own alphabet. It did not translate the signal. It was already listening for you.",
  },
  {
    id: "ruins",
    chapter: "II",
    location: "The Drowned Archive",
    image: ruinsImage,
    imageAlt: "Flooded alien ruins with a grounded crystal Machine Terminal beside a causeway and a suspended archive landmark",
    hotspotLabel: "grounded Workload Sort Terminal",
    hotspot: {
      left: "60.5%", top: "55%", width: "11%", height: "44%",
      narrow: { left: "44%", top: "47%", width: "29%", height: "36%" },
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
    hotspotLabel: "automaton evidence Terminal",
    hotspot: { left: "54%", top: "17%", width: "34%", height: "53%" },
    prompt: "The automaton carries a sealed evidence workspace. Its validator waits for a provenance-complete packet.",
    question: "Set archive_open to the Boolean value true in Python.",
    answer: "archive_open = True",
    validate: (value) => validateAnswer("automaton", value),
    hint: "Python Booleans begin with capital letters and do not use quotation marks.",
    success: "Its lens opens. A voice older than the corridor says: ‘Continuity confirmed. Witness incomplete.’",
  },
];

function TerminalShell({ exerciseId, title, filename, lessonId, onClose, children }) {
  return (
    <section className="terminal-workbench" aria-labelledby="terminal-title" data-terminal-exercise={exerciseId}>
      <header className="terminal-titlebar">
        <div>
          <span className="machine-mark" aria-hidden="true">◇</span>
          <strong id="terminal-title">MACHINE TERMINAL // {title}</strong>
        </div>
        <button type="button" onClick={onClose} aria-label="Close Terminal">Close</button>
      </header>
      <div className="terminal-tabbar" role="tablist" aria-label="Open files">
        <button type="button" role="tab" aria-selected="true">{filename}</button>
        <span>Lesson {lessonId}</span>
      </div>
      {children}
    </section>
  );
}

function loadSave() {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY) || "null");
    if (!saved || !Array.isArray(saved.completed)) return null;

    // Only a contiguous, known completion prefix is trusted. This prevents a
    // stale or edited save from skipping required questions or unlocking the
    // ending early.
    return {
      ...getResumeState(saved.completed, saved.pendingSceneId),
      exerciseEvidence: sanitizeExerciseEvidence(saved.exerciseEvidence),
      workloadEvidence: sanitizeWorkloadEvidence(saved.workloadEvidence),
      evidencePacketMastery: sanitizeEvidencePacketMastery(saved.evidencePacketMastery),
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

  const scene = scenes[Math.min(sceneIndex, scenes.length - 1)];
  const hotspotStyle = {
    "--hotspot-left": scene.hotspot.left,
    "--hotspot-top": scene.hotspot.top,
    "--hotspot-width": scene.hotspot.width,
    "--hotspot-height": scene.hotspot.height,
    "--hotspot-narrow-left": scene.hotspot.narrow?.left ?? scene.hotspot.left,
    "--hotspot-narrow-top": scene.hotspot.narrow?.top ?? scene.hotspot.top,
    "--hotspot-narrow-width": scene.hotspot.narrow?.width ?? scene.hotspot.width,
    "--hotspot-narrow-height": scene.hotspot.narrow?.height ?? scene.hotspot.height,
  };
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
      }));
    }
  }, [mode, sceneIndex, completed, pendingAdvance, scene.id, exerciseEvidence, workloadEvidence, evidencePacketMastery]);

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
    setTerminalOpen(false);
    setTerminalSessionStarted(false);
    setTerminalResult(null);
    setTerminalHintLevel(0);
    setShowHint(false);
    setCode("");
    setMode(saved.finished ? "ending" : "playing");
  }

  function useHotspot() {
    if (verb === "LOOK AT") {
      setDialogue(scene.prompt);
      return;
    }
    if (verb === "TALK TO" && scene.id !== "automaton") {
      setDialogue("Nothing here has a mouth. Something still seems to hear you.");
      return;
    }
    if (scene.id === "meadow") {
      setDialogue("Terminal link established. Complete the file, run it, and confirm the result.");
      setTerminalOpen(true);
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
      if (!workloadSession) setWorkloadSession(createWorkloadSession());
      return;
    }
    if (scene.id === "automaton") {
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
    const nextCompleted = completed.includes(scene.id) ? completed : [...completed, scene.id];
    setCompleted(nextCompleted);
    setDialogue(scene.success);
    setTerminalOpen(false);
    setTerminalSessionStarted(false);
    setTerminalResult(null);
    setTerminalHintLevel(0);
    setShowHint(false);
    setCode("");
    setPendingAdvance(true);
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
    setWorkloadSession(null);
    setPendingAdvance(true);
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
        <img className="title-art" src={meadowImage} alt="A crystal structure rising from an alien meadow at twilight" />
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
    <main className="game-shell adventure-screen" data-scene={scene.id}>
      <section className="scene-frame" aria-label={`${scene.location} scene`}>
        <img className="scene-art" src={scene.image} alt={scene.imageAlt ?? `Alien archaeological site: ${scene.location}`} />
        <div className="scene-status">
          <span>CHAPTER {scene.chapter}</span>
          <strong>{scene.location}</strong>
          <span>{completed.length}/{scenes.length} interfaces</span>
        </div>
        <button
          className="hotspot"
          style={hotspotStyle}
          onClick={useHotspot}
          disabled={pendingAdvance}
          aria-label={`${verb.toLowerCase()} ${scene.hotspotLabel}`}
        >
          <span>{verb} {scene.hotspotLabel}</span>
        </button>
        {terminalOpen && scene.id === "meadow" && (
          <TerminalShell
            exerciseId={terminalExercise.exerciseId}
            title={terminalExercise.title}
            filename={terminalExercise.filename}
            lessonId={terminalExercise.lessonId}
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
        {terminalOpen && scene.id === "ruins" && workloadSession && (
          <TerminalShell
            exerciseId={workloadSortExercise.exercise_id}
            title={workloadSortExercise.title}
            filename={workloadSession.form === "retry" ? "workload_sort_retry.json" : "workload_sort.json"}
            lessonId={workloadSortExercise.lesson_id}
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
        {terminalOpen && scene.id === "automaton" && evidenceSession && (
          <TerminalShell
            exerciseId={evidencePacketExercise.exercise_id}
            title={evidencePacketExercise.title}
            filename="working_output.json"
            lessonId={evidencePacketExercise.lesson_id}
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
                        <img src={ruinsImage} alt="Registered still image DA-IMG-01 showing the suspended landmark and grounded Terminal" />
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

      <section className="command-panel" aria-label="Adventure controls and dialogue">
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
                {pendingAdvance && (
                  <button className="continue-action" onClick={continueJourney}>
                    {completed.length === scenes.length ? "Descend to the city" : "Continue"}
                  </button>
                )}
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
  );
}
