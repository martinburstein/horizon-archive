import { useEffect, useMemo, useState } from "react";
import meadowImage from "../../Concept Art/Alien Meadow.png";
import ruinsImage from "../../Concept Art/Alien Ruins.png";
import automatonImage from "../../Concept Art/Fallen Automoton.png";
import cityImage from "../../Concept Art/Underground City.png";
import { getResumeState, validateAnswer } from "./gameLogic.js";

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
    hotspotLabel: "Suspended archive",
    hotspot: { left: "38%", top: "21%", width: "24%", height: "38%" },
    prompt: "The archive rejects nameless visitors. Store your call sign before requesting entry.",
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
    hotspotLabel: "Fallen automaton",
    hotspot: { left: "54%", top: "17%", width: "34%", height: "53%" },
    prompt: "The automaton carries one surviving status bit. Give it a Boolean value so it can speak.",
    question: "Set archive_open to the Boolean value true in Python.",
    answer: "archive_open = True",
    validate: (value) => validateAnswer("automaton", value),
    hint: "Python Booleans begin with capital letters and do not use quotation marks.",
    success: "Its lens opens. A voice older than the corridor says: ‘Continuity confirmed. Witness incomplete.’",
  },
];

function loadSave() {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY) || "null");
    if (!saved || !Array.isArray(saved.completed)) return null;

    // Only a contiguous, known completion prefix is trusted. This prevents a
    // stale or edited save from skipping required questions or unlocking the
    // ending early.
    return getResumeState(saved.completed, saved.pendingSceneId);
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
  const [pendingAdvance, setPendingAdvance] = useState(false);

  const scene = scenes[Math.min(sceneIndex, scenes.length - 1)];
  const canResume = useMemo(() => Boolean(loadSave()), [mode]);

  useEffect(() => {
    if (mode === "playing" || mode === "ending") {
      localStorage.setItem(SAVE_KEY, JSON.stringify({
        sceneIndex,
        completed,
        pendingSceneId: mode === "playing" && pendingAdvance ? scene.id : null,
      }));
    }
  }, [mode, sceneIndex, completed, pendingAdvance, scene.id]);

  function beginNewGame() {
    localStorage.removeItem(SAVE_KEY);
    setSceneIndex(0);
    setCompleted([]);
    setVerb("LOOK AT");
    setDialogue("Your survey craft is silent behind you. The meadow is not.");
    setQuestionOpen(false);
    setFeedback("");
    setCode("");
    setPendingAdvance(false);
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
    setDialogue(scene.question);
    setQuestionOpen(true);
    setFeedback("");
    setShowHint(false);
    setCode("");
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
        <img className="scene-art" src={scene.image} alt={`Alien archaeological site: ${scene.location}`} />
        <div className="scene-status">
          <span>CHAPTER {scene.chapter}</span>
          <strong>{scene.location}</strong>
          <span>{completed.length}/{scenes.length} interfaces</span>
        </div>
        <button
          className="hotspot"
          style={scene.hotspot}
          onClick={useHotspot}
          disabled={pendingAdvance}
          aria-label={`${verb.toLowerCase()} ${scene.hotspotLabel}`}
        >
          <span>{verb} {scene.hotspotLabel}</span>
        </button>
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
