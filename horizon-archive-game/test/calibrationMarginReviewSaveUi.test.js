import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("RS-EXP-003/019-026 review-save UI preserves semantic, responsive and invariant-world contracts", () => {
  const view = readFileSync(new URL("../src/CalibrationMarginReviewSave.jsx", import.meta.url), "utf8");
  const entry = readFileSync(new URL("../src/CalibrationMarginEntry.jsx", import.meta.url), "utf8");
  const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
  const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  assert.match(view, /<ol className="extraction-floor-content"/);
  assert.match(view, /role="status"/);
  assert.match(view, /aria-live="polite"/);
  assert.match(view, /aria-atomic="true"/);
  assert.match(view, /disabled[\s\S]*aria-disabled="true"/);
  assert.match(view, /aria-describedby="review-save-disabled-reason"/);
  assert.match(view, /tabIndex="-1"/);
  assert.match(view, /<dl className="custody-ledger-fields"/);
  assert.doesNotMatch(view, /progress|meter|audio|video|img|canvas|svg/i);
  assert.match(entry, /CalibrationMarginReviewSave/);
  assert.equal((entry.match(/cityOverviewImage/g) ?? []).length, 2);
  assert.match(entry, /data-extraction-floor=\{extractionFloorActive \|\| reviewSaveActive/);
  assert.match(styles, /\.extraction-floor-actions button \{[\s\S]*?min-height: 44px;/);
  assert.match(styles, /\.extraction-floor-panel :focus-visible \{[\s\S]*?outline: 3px/);
  assert.match(styles, /@media \(forced-colors: active\)/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(styles, /@media \(max-width: 767px\)/);
  assert.match(app, /createCalibrationMarginReviewSaveStorageAdapter/);
  assert.doesNotMatch(view, /bearing|RP-004|RP-013|successor|reward|permission/i);
});
