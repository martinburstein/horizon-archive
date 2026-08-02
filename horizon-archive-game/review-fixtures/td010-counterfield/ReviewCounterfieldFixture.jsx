import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { Counterfield } from "../../src/Counterfield.jsx";
import { createCounterfieldScenario, counterfieldScenarioNames } from "./scenarios.js";
import "../../src/styles.css";
import "./fixture.css";

function Boundary({ state }) {
  const ref = useRef(null);
  useLayoutEffect(() => { ref.current?.querySelector(`#${CSS.escape(state.focusIntent.target)}`)?.focus?.({ preventScroll: true }); }, [state.focusIntent.target]);
  return <main ref={ref} className="fixture-boundary" data-product-landmark="counterfield-boundary-product" aria-labelledby={state.headingId}><div className="fixture-boundary-world" role="img" aria-label="Released boundary structural review surface; no onward identity, scene, route, or world response is manufactured."/><section><p data-active-owner={state.owner}>{state.owner}</p><h2 id={state.headingId} tabIndex="-1">{state.heading}</h2><p role="status" aria-live="polite" aria-atomic="true">{state.statusMessage}</p>{state.controls.map((action) => <button type="button" key={action}>{action}</button>)}</section></main>;
}
function FrozenCopy({ copy, layout }) { return copy ? <section className="fixture-frozen-copy" data-layout={layout}><h2>Frozen longest-copy containment evidence</h2>{Object.entries(copy).map(([key, value]) => <p key={key} data-frozen-copy={key}>{value}</p>)}</section> : null; }

export function ReviewCounterfieldFixture() {
  const [name, setName] = useState(counterfieldScenarioNames[0]);
  const scenario = useMemo(() => createCounterfieldScenario(name), [name]);
  const productRef = useRef(null); const [contract, setContract] = useState(null);
  const declaredOwner = scenario.state.owner, declaredFocus = scenario.state.focusIntent.target;
  useLayoutEffect(() => { const renderedOwner = productRef.current?.querySelector("[data-active-owner]")?.textContent?.trim() ?? ""; const activeElementId = document.activeElement?.id ?? ""; setContract({ renderedOwner, activeElementId, passed: renderedOwner === declaredOwner && activeElementId === declaredFocus }); }, [name, declaredOwner, declaredFocus]);
  return <main className={`fixture-shell fixture-mode-${scenario.presentationMode}`} data-fixture-root="TD010_COUNTERFIELD_FIXTURE"><aside className="fixture-harness"><h1>TD-010 closed review harness</h1><label htmlFor="fixture-scenario-picker">Frozen scenario</label><select id="fixture-scenario-picker" value={name} onChange={(event) => setName(event.target.value)}>{counterfieldScenarioNames.map((id) => <option key={id}>{id}</option>)}</select><p data-fixture-summary>{counterfieldScenarioNames.length} allowlisted scenarios · storage-free · no arbitrary state</p><dl><dt>Layout</dt><dd>{scenario.layout}</dd><dt>Focus</dt><dd>{declaredFocus}</dd></dl><output data-rendered-contract={contract?.passed ? "PASS" : "FAIL"} data-rendered-owner={contract?.renderedOwner ?? "pending"} data-declared-owner={declaredOwner} data-active-element={contract?.activeElementId ?? "pending"} data-declared-focus={declaredFocus}>Rendered owner and focus contract: {contract?.passed ? "PASS" : "pending"}</output></aside><section ref={productRef} className="fixture-product" data-layout={scenario.layout}>{scenario.surface === "production-counterfield" ? <Counterfield state={scenario.state} onAction={() => {}} onFieldChange={() => {}} /> : <Boundary state={scenario.state} />}<FrozenCopy copy={scenario.frozenLongestCopy} layout={scenario.layout}/></section></main>;
}
