import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, statSync } from "node:fs";
import test from "node:test";

const view = readFileSync(new URL("../src/ManyfoldReturn.jsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const panoramaMasterUrl = new URL(
  "../../Visual Direction/Production Masters/2026-07-27-rp005-manyfold-return-runtime/sc06-manyfold-return-panorama-runtime-master-v1.webp",
  import.meta.url,
);
const detailMasterUrl = new URL(
  "../../Visual Direction/Production Masters/2026-07-27-rp005-manyfold-return-runtime/sc06-manyfold-return-detail-runtime-master-v1.webp",
  import.meta.url,
);
const panoramaMaster = readFileSync(panoramaMasterUrl);
const detailMaster = readFileSync(detailMasterUrl);
const masterProvenance = readFileSync(
  new URL(
    "../../Visual Direction/Production Masters/2026-07-27-rp005-manyfold-return-runtime/PROVENANCE.md",
    import.meta.url,
  ),
  "utf8",
);

test("TD005 UI has one polite atomic status, heading focus, persistent labels, and native controls", () => {
  assert.match(view, /role="status"/);
  assert.match(view, /aria-live="polite"/);
  assert.match(view, /aria-atomic="true"/);
  assert.match(view, /<h1 id=\{state\.headingId\} tabIndex="-1"/);
  assert.match(view, /<textarea/);
  assert.match(view, /<select/);
  assert.match(view, /<button/);
  assert.doesNotMatch(view, /onMouseOver|onPointerMove|imageMap|<area\b/);
});
test("TD005 UI binds two released SC-06 role masters plus fail-closed native metadata", () => {
  assert.equal((view.match(/^import .*Master from /gm) ?? []).length, 2);
  assert.match(view, /data-world-role=\{worldScene\?\.role\}/);
  assert.match(view, /data-world-master=\{worldScene\?\.masterId\}/);
  assert.match(view, /data-world-crop=\{worldScene\?\.cropId\}/);
  assert.match(view, /data-runtime-source-master=\{runtimeSourceMaster\}/);
  assert.match(view, /data-asset-status="PRODUCTION MASTER — IMAGE SPECIALIST ACCEPTED"/);
  assert.match(view, /data-source-provenance=\{sourceProvenance\}/);
  assert.match(view, /data-receiver-chorus-state=\{host25State\}/);
  assert.match(view, /data-receiver-chorus-source=/);
  assert.doesNotMatch(view, /PLACEHOLDER|Image Specialist gap|data-placeholder-retirement/);
  assert.match(view, /sc06-manyfold-return-panorama-runtime-master-v1\.webp/);
  assert.match(view, /sc06-manyfold-return-detail-runtime-master-v1\.webp/);
  assert.match(view, /Registered invariant SC-06 source/);
  assert.match(view, /adjacent expedition text carries the exact evidence and limits/);
  assert.equal(statSync(panoramaMasterUrl).size, 2_416_978);
  assert.equal(
    createHash("sha256").update(panoramaMaster).digest("hex").toUpperCase(),
    "3EEC1A762ABB1C0654CF41753044173136E79F933DB55C6FE7CA097E33A5012B",
  );
  assert.equal(statSync(detailMasterUrl).size, 2_125_650);
  assert.equal(
    createHash("sha256").update(detailMaster).digest("hex").toUpperCase(),
    "1F64EE18EB14ED0FB7B35EF4814C308391635865056A21F7EC76F3F5BA48D0E9",
  );
  assert.match(masterProvenance, /\| panorama \|[\s\S]*`3840 x 2160`/);
  assert.match(masterProvenance, /\| detail \|[\s\S]*`3840 x 2160`/);
  assert.match(masterProvenance, /do not claim native 4K detail/);
  assert.match(masterProvenance, /No generation, inpainting, cleanup, compositing, sharpening, semantic edit/);
  assert.match(app, /MANYFOLD_RETURN_SHELL_VERSION/);
});

test("TD005 Quartermaster copy retires structural placeholders and raw evaluator identifiers", () => {
  assert.doesNotMatch(view, /TD005-COPY-|data-copy-placeholder/);
  assert.doesNotMatch(view, /replaceAll\("_", " "\)/);
  assert.doesNotMatch(view, /<legend>\{item\.id\}/);
  assert.doesNotMatch(view, /<li key=\{id\}>\{id\}<\/li>/);
  assert.match(view, /return `\$\{form\} case \$\{Number\(match\[2\]\)\}`/);
  assert.match(view, /Return one dictionary/);
  assert.match(view, /technique: "Requested text technique"/);
  assert.match(view, /fieldCopy\[caseDimension\[3\]\]/);
  assert.match(view, /Review the named responsibility only/);
  assert.match(view, /recurrence is description, divergence is supported difference/i);
  assert.match(view, /Truth: null\. Purpose: null\. Destination: null\./);
  assert.match(view, /PILOT \/\/ SAFE RETURN/);
});

test("TD005 styles preserve target, reflow, forced-color, and reduced-motion contracts", () => {
  assert.match(styles, /\.three-current-actions button,[\s\S]*min-height: 44px/);
  assert.match(styles, /@media \(max-width: 767px\)[\s\S]*\.manyfold-form-grid,[\s\S]*grid-template-columns: 1fr/);
  assert.match(styles, /@media \(forced-colors: active\)[\s\S]*\.manyfold-panel \[role="status"\]/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)[\s\S]*\.manyfold-return/);
});
