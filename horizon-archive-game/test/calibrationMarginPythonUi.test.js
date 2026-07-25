import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const entry = readFileSync(
  new URL("../src/CalibrationMarginEntry.jsx", import.meta.url),
  "utf8",
);
const view = readFileSync(
  new URL("../src/CalibrationMarginPythonFloor.jsx", import.meta.url),
  "utf8",
);
const styles = readFileSync(
  new URL("../src/styles.css", import.meta.url),
  "utf8",
);

test("EXP-019 one active group replaces the survey inside one invariant world frame", () => {
  assert.match(entry, /pythonFloorActive \? \(/);
  assert.match(entry, /<CalibrationMarginPythonFloor/);
  assert.match(entry, /className="city-world calibration-margin-world"/);
  assert.equal((entry.match(/city-threshold-overview-master\.png/g) ?? []).length, 1);
  assert.equal((entry.match(/<img\b/g) ?? []).length, 1);
  assert.doesNotMatch(view, /hidden|aria-hidden|inert|position:\s*absolute/);
  assert.match(view, /data-active-group=\{state\.activeGroup\}/);
});

test("EXP-020 fields have persistent labels, unique names, required semantics and direct errors", () => {
  assert.match(view, /<label htmlFor=\{`\$\{state\.activeGroup\}-\$\{name\}`\}>/);
  assert.match(view, /id=\{`\$\{state\.activeGroup\}-\$\{name\}`\}/);
  assert.match(view, /name=\{`\$\{state\.form\}-\$\{name\}`\}/);
  assert.match(view, /\brequired\b/);
  assert.match(view, /aria-invalid=\{error \? "true" : undefined\}/);
  assert.match(view, /aria-describedby=\{error \? `\$\{helpId\} \$\{errorId\}` : helpId\}/);
  assert.match(styles, /\.python-floor-field input \{[\s\S]*?min-width: 44px;[\s\S]*?min-height: 44px;/);
  assert.match(styles, /\.python-floor-actions button \{[\s\S]*?min-width: 44px;[\s\S]*?min-height: 44px;/);
});

test("EXP-021 one polite atomic status and deterministic focus targets are structural", () => {
  assert.equal((view.match(/role="status"/g) ?? []).length, 1);
  assert.equal((view.match(/aria-live="polite"/g) ?? []).length, 1);
  assert.equal((view.match(/aria-atomic="true"/g) ?? []).length, 1);
  assert.match(view, /data-status-message-id=\{state\.statusMessageId\}/);
  assert.match(view, /headingRef\.current\?\.focus/);
  assert.match(view, /inputRefs\.current\.get\(target\)\?\.focus/);
  assert.match(view, /actionRefs\.current\.get\(target\)\?\.focus/);
  assert.match(view, /tabIndex="-1"/);
});

test("EXP-022-025 world-first wide, narrow, zoom, forced-color and reduced-motion contracts are present", () => {
  assert.ok(
    entry.indexOf("calibration-margin-world") < entry.indexOf("<CalibrationMarginPythonFloor"),
    "world precedes the active folio in DOM order",
  );
  assert.match(styles, /@media \(min-width: 1280px\)[\s\S]*?grid-template-columns: minmax\(0, 3fr\) minmax\(430px, 2fr\)/);
  assert.match(styles, /@media \(max-width: 1279px\)[\s\S]*?grid-template-columns: 1fr/);
  assert.match(styles, /@media \(max-width: 767px\)[\s\S]*?\.python-floor-actions/);
  assert.match(styles, /\.python-floor-scaffold pre \{[\s\S]*?white-space: pre-wrap;[\s\S]*?overflow-wrap: anywhere;/);
  assert.match(styles, /@media \(forced-colors: active\)[\s\S]*?Highlight/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)[\s\S]*?transition: none;[\s\S]*?animation: none;/);
  assert.match(styles, /\.python-floor-panel :focus-visible \{[\s\S]*?outline: 3px/);
  assert.doesNotMatch(styles, /\.python-floor[^}]*\btransform:\s*scale/);
});

test("EXP-003/007/010/014 blankness is literal and no answer-bearing placeholder is rendered", () => {
  assert.doesNotMatch(view, /\splaceholder=/);
  assert.doesNotMatch(view, /\bdefaultValue=/);
  assert.match(view, /value=\{state\.fieldValues\[name\] \?\? ""\}/);
  assert.match(view, /autoComplete="off"/);
  assert.match(view, /readOnly=\{state\.readOnly\}/);
  assert.match(view, /state\.availableActions\.map/);
  assert.doesNotMatch(view, /access granted|password|login|unlock|Machine approval/i);
});

test("EXP-027 landing and UI source contain no later action, route, reward or world response", () => {
  for (const forbidden of [
    "CM-30",
    "RP003-IE-01",
    "SAVE EXPEDITION NOTE",
    "MARK ONWARD",
    "RP-004",
    "RP-013",
    "ACCESS GRANTED",
    "CITY ACCEPTED",
  ]) {
    assert.equal(view.includes(forbidden), false, forbidden);
  }
  assert.match(view, /No onward action is available here/);
  assert.doesNotMatch(view, /\bonWorld\b|\bhotspot\b|\bmask\b|\beffect\b|\baudio\b|\bsound\b|\banimation\b/i);
});

test("Quartermaster copy retires structural placeholders and raw evaluator identifiers", () => {
  assert.doesNotMatch(view, /COPY-|data-copy-placeholder/);
  assert.match(view, /Pilot field folio: bounded comparison/);
  assert.match(view, /Teacher check: closed-note boundaries/);
  assert.match(view, /Pilot field folio: independent transfer/);
  assert.match(view, /Local Python objective finalized/);
  assert.match(view, /Course-authored practice runs offline on this device/);
  assert.match(view, /repairCopy\[failedId\]/);
  assert.doesNotMatch(view, />\s*\{failedId\}\s*</);
  assert.doesNotMatch(view, /exposed_a\[index\]\s*==\s*exposed_b\[index\]/);
  assert.doesNotMatch(view, /["'](?:corresponding|different)["']/);
});
