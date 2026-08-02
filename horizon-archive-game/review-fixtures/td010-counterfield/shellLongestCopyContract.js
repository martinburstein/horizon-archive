const requiredLabels = Object.freeze({
  heading: "Heading",
  label: "Label",
  recoveryError: "Error",
  retainedScopeRow: "Retained-scope row",
});

function requireSection(source, startMarker, endMarker) {
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker, start + startMarker.length);
  if (start < 0 || end <= start) throw new Error(`TD-010 shell section is missing: ${startMarker}`);
  return source.slice(start + startMarker.length, end);
}

export function parseCounterfieldLongestCopy(shellSource) {
  if (typeof shellSource !== "string") throw new TypeError("TD-010 shell UTF-8 text is required.");
  const required = requireSection(shellSource, "The longest required strings are:", "All five samples render live and intact at all four layouts.");
  const parsed = {};
  for (const [key, label] of Object.entries(requiredLabels)) {
    const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const match = required.match(new RegExp("^- " + escaped + ": `([^`]+)`$", "m"));
    if (!match) throw new Error(`TD-010 shell longest-copy sample is missing: ${label}`);
    parsed[key] = match[1];
  }
  const executionBlock = requireSection(shellSource, "The exact truthful execution label is:", "The longest required strings are:");
  const truthfulExecutionLabel = executionBlock.split(/\r?\n/)
    .filter((line) => /^>/.test(line))
    .map((line) => line.replace(/^>\s?/, "").trim())
    .filter(Boolean)
    .join(" ");
  if (!truthfulExecutionLabel) throw new Error("TD-010 shell truthful execution label is missing.");
  return Object.freeze({ ...parsed, truthfulExecutionLabel });
}
