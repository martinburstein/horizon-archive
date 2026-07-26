import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const entry = readFileSync(
  new URL("../src/CalibrationMarginEntry.jsx", import.meta.url),
  "utf8",
);
const view = readFileSync(
  new URL("../src/CalibrationMarginExtractionFloor.jsx", import.meta.url),
  "utf8",
);
const styles = readFileSync(
  new URL("../src/styles.css", import.meta.url),
  "utf8",
);

test("IE-EXP-024 one extraction owner group replaces Python inside invariant frame", () => {
  assert.match(entry, /extractionFloorActive \? \(/);
  assert.match(entry, /<CalibrationMarginExtractionFloor/);
  assert.match(entry, /className="city-world calibration-margin-world"/);
  assert.equal((entry.match(/city-threshold-overview-master\.png/g) ?? []).length, 1);
  assert.equal((entry.match(/<img\b/g) ?? []).length, 1);
  assert.doesNotMatch(view, /\bhidden\b|aria-hidden|\binert\b|position:\s*absolute/);
  assert.match(view, /data-active-group=\{state\.activeGroup\}/);
});

test("IE-EXP-025 labels, native states, errors and one atomic status are structural", () => {
  assert.match(view, /<fieldset/);
  assert.match(view, /<legend>\{copy\.label\}<\/legend>/);
  assert.match(view, /name=\{`\$\{state\.activeGroup\}-\$\{name\}`\}/);
  assert.match(view, /\brequired\b/);
  assert.match(view, /checked=\{state\.fieldValues\[name\] === choice\}/);
  assert.match(view, /aria-invalid=\{error \? "true" : undefined\}/);
  assert.match(view, /aria-describedby=\{error \? `\$\{helpId\} \$\{errorId\}` : helpId\}/);
  assert.equal((view.match(/role="status"/g) ?? []).length, 1);
  assert.equal((view.match(/aria-live="polite"/g) ?? []).length, 1);
  assert.equal((view.match(/aria-atomic="true"/g) ?? []).length, 1);
  assert.match(view, /data-status-message-id=\{state\.statusMessageId\}/);
});

test("IE-EXP-026 controls are 44px, clear is native-disabled and focus is deterministic", () => {
  assert.match(
    styles,
    /\.extraction-floor-options label \{[\s\S]*?min-width: 44px;[\s\S]*?min-height: 44px;/,
  );
  assert.match(
    styles,
    /\.extraction-floor-actions button \{[\s\S]*?min-width: 44px;[\s\S]*?min-height: 44px;/,
  );
  assert.match(view, /disabled=\{disabled\}/);
  assert.match(view, /aria-disabled=\{disabled \? "true" : undefined\}/);
  assert.match(view, /headingRef\.current\?\.focus/);
  assert.match(view, /inputRefs\.current\.get\(target\)\?\.focus/);
  assert.match(view, /actionRefs\.current\.get\(target\)\?\.focus/);
  assert.match(styles, /\.extraction-floor-panel :focus-visible \{[\s\S]*?outline: 3px/);
});

test("IE-EXP-027/028 desktop, narrow, zoom-safe, forced-color and reduced-motion rules exist", () => {
  assert.ok(
    entry.indexOf("calibration-margin-world")
      < entry.indexOf("<CalibrationMarginExtractionFloor"),
    "world precedes extraction group in DOM order",
  );
  assert.match(
    styles,
    /@media \(min-width: 1280px\)[\s\S]*?data-extraction-floor="true"[\s\S]*?grid-template-columns: minmax\(0, 3fr\) minmax\(430px, 2fr\)/,
  );
  assert.match(
    styles,
    /@media \(max-width: 1279px\)[\s\S]*?data-extraction-floor="true"[\s\S]*?grid-template-columns: 1fr/,
  );
  assert.match(
    styles,
    /@media \(max-width: 767px\)[\s\S]*?\.extraction-floor-actions/,
  );
  assert.match(
    styles,
    /@media \(forced-colors: active\)[\s\S]*?\.extraction-floor-panel[\s\S]*?Highlight/,
  );
  assert.match(
    styles,
    /@media \(prefers-reduced-motion: reduce\)[\s\S]*?\.extraction-floor-panel[\s\S]*?transition: none;[\s\S]*?animation: none;/,
  );
  assert.doesNotMatch(styles, /\.extraction-floor[^}]*\btransform:\s*scale/);
});

test("IE-EXP-003/007/010/013/017 blankness and answer-free repair have no defaults", () => {
  assert.doesNotMatch(view, /\splaceholder=/);
  assert.doesNotMatch(view, /\bdefaultValue=/);
  assert.match(view, /checked=\{state\.fieldValues\[name\] === choice\}/);
  assert.match(view, /<option value="">Not recorded<\/option>/);
  assert.match(view, /repairCopy\[failedId\]/);
  assert.doesNotMatch(view, />\s*\{failedId\}\s*</);
  assert.doesNotMatch(view, /correctAnswer|expectedAnswer|isCorrect/);
});

test("IE-EXP-014/019/029/032/033 UI has silent course ownership and hard stop", () => {
  assert.match(view, /EXPEDITION COURSE SOURCE/);
  assert.match(view, /course material actually supplied/i);
  assert.match(view, /Course-authored practice runs offline on this device/);
  assert.match(view, /no onward action is available/i);
  assert.doesNotMatch(
    view,
    /<audio|<video|waveform|microphone|camera|permission request|CITY ACCEPTED|ACCESS GRANTED/i,
  );
  assert.doesNotMatch(
    view,
    /CM-40|SAVE EXPEDITION NOTE|MARK ONWARD|RP-004|RP-013|onWorld|hotspot|mask|relight/i,
  );
});
