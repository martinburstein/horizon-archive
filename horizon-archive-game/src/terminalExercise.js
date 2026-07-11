export const terminalExercise = {
  exerciseId: "terminal-l0101-independent-run",
  lessonId: "L-01-01",
  activityId: "A-L0101-3",
  assessmentId: "AS-L0101-CK",
  skillIds: ["PY-001", "PY-002", "PY-003"],
  title: "First Signal",
  filename: "first_signal.py",
  task: "Change signal to 2. Create a learner variable containing a short call sign, then print Operator: followed by that call sign.",
  starterCode: `message = "Horizon Archive online."
signal = 1

print(message)
print("Python signal:", signal)
`,
  hints: [
    "Change the number assigned to signal. A variable stores a value with name = value.",
    "Text needs quotation marks. Try learner = \"PILOT\", then pass the label and learner to print().",
  ],
};

function findMatch(code, pattern) {
  return code.match(pattern);
}

export function evaluateTerminalCode(value) {
  const code = value.replace(/\r/g, "");
  if (!code.trim()) {
    return { passed: false, feedback: "The file is empty. Restore the starter code, then make the two requested edits." };
  }

  const signal = findMatch(code, /^\s*signal\s*=\s*([^#\n]+)\s*$/m);
  if (!signal) {
    return { passed: false, feedback: "No signal assignment was found. Keep a line shaped like signal = 2." };
  }
  if (signal[1].trim() !== "2") {
    return { passed: false, feedback: "The program still gives signal the wrong value. Change only its value to the number 2." };
  }

  const learner = findMatch(code, /^\s*learner\s*=\s*(["'])([^"'\n]+)\1\s*$/m);
  if (!learner) {
    return { passed: false, feedback: "Create learner as quoted text, for example a short call sign. Check the equals sign and matching quotation marks." };
  }
  if (learner[2].trim().length > 24) {
    return { passed: false, feedback: "Use a short call sign of 24 characters or fewer so the Terminal display can show it." };
  }

  if (!/^\s*print\s*\(\s*message\s*\)\s*$/m.test(code)) {
    return { passed: false, feedback: "The first output line is missing. Keep print(message) in the file." };
  }
  if (!/^\s*print\s*\(\s*(["'])Python signal:\1\s*,\s*signal\s*\)\s*$/m.test(code)) {
    return { passed: false, feedback: "Print the Python signal label and the signal variable together. Check spelling, parentheses, and the comma." };
  }
  if (!/^\s*print\s*\(\s*(["'])Operator:\1\s*,\s*learner\s*\)\s*$/m.test(code)) {
    return { passed: false, feedback: "Add a third print instruction using the label Operator: and the learner variable." };
  }

  return {
    passed: true,
    feedback: "Run complete. The file produced all three expected output lines.",
    output: `Horizon Archive online.\nPython signal: 2\nOperator: ${learner[2].trim()}`,
  };
}

export function sanitizeExerciseEvidence(value) {
  if (!value || typeof value !== "object") return null;
  if (value.exerciseId !== terminalExercise.exerciseId) return null;
  return {
    exerciseId: terminalExercise.exerciseId,
    lessonId: terminalExercise.lessonId,
    activityId: terminalExercise.activityId,
    assessmentId: terminalExercise.assessmentId,
    skillIds: [...terminalExercise.skillIds],
    attempts: Math.min(99, Math.max(0, Number.isInteger(value.attempts) ? value.attempts : 0)),
    hintUsed: value.hintUsed === true,
    completed: value.completed === true,
  };
}

export function updateExerciseEvidence(previous, changes = {}) {
  const safe = sanitizeExerciseEvidence(previous) || {
    exerciseId: terminalExercise.exerciseId,
    lessonId: terminalExercise.lessonId,
    activityId: terminalExercise.activityId,
    assessmentId: terminalExercise.assessmentId,
    skillIds: [...terminalExercise.skillIds],
    attempts: 0,
    hintUsed: false,
    completed: false,
  };
  return {
    ...safe,
    attempts: changes.incrementAttempt ? Math.min(99, safe.attempts + 1) : safe.attempts,
    hintUsed: safe.hintUsed || changes.hintUsed === true,
    completed: safe.completed || changes.completed === true,
  };
}
