import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { UnborrowedReach } from "../../src/UnborrowedReach.jsx";
import { UNBORROWED_REACH_CONTROLLER_VERSION, UNBORROWED_REACH_SHELL_VERSION } from "../../src/UnborrowedReachNormal.js";
import { createUnborrowedReachScenario, unborrowedReachScenarioNames } from "./scenarios.js";
import "../../src/styles.css";
import "./fixture.css";

export function ReviewUnborrowedReachFixture() {
  const [name, setName] = useState(unborrowedReachScenarioNames[0]);
  const scenario = useMemo(() => createUnborrowedReachScenario(name), [name]);
  const productRef = useRef(null); const [contract, setContract] = useState(null);
  const declaredOwner = scenario.declaredOwner, declaredFocus = scenario.declaredFocus;
  useLayoutEffect(() => {
    const renderedOwner = productRef.current?.querySelector("[data-active-owner]")?.textContent?.trim() ?? "";
    const activeElementId = document.activeElement?.id ?? "";
    setContract({ renderedOwner, activeElementId, passed: renderedOwner === declaredOwner && activeElementId === declaredFocus });
  }, [name, declaredOwner, declaredFocus]);
  return <div className={`td011-fixture fixture-mode-${scenario.presentationMode}`} data-fixture-root="TD011_UNBORROWED_REACH_FIXTURE" data-shell-version={UNBORROWED_REACH_SHELL_VERSION} data-controller-version={UNBORROWED_REACH_CONTROLLER_VERSION} data-active-group={scenario.state.activeGroup} data-owner={scenario.state.owner} data-phase={scenario.state.phase} data-fixture-contract-version={scenario.fixtureContractVersion}><aside><h1>TD-011 closed review harness</h1><label htmlFor="td011-scenario-picker">Frozen scenario</label><select id="td011-scenario-picker" value={name} onChange={(event) => setName(event.target.value)}>{unborrowedReachScenarioNames.map((id) => <option key={id}>{id}</option>)}</select><p>{unborrowedReachScenarioNames.length} allowlisted scenarios · storage-free · no arbitrary state</p><dl><dt>Layout</dt><dd>{scenario.layout}</dd><dt>Declared owner</dt><dd>{declaredOwner}</dd><dt>Declared focus</dt><dd>{declaredFocus}</dd></dl><output data-rendered-contract={contract?.passed ? "PASS" : "FAIL"} data-rendered-owner={contract?.renderedOwner ?? "pending"} data-declared-owner={declaredOwner} data-active-element={contract?.activeElementId ?? "pending"} data-declared-focus={declaredFocus}>Rendered owner and focus contract: {contract?.passed ? "PASS" : "pending"}</output></aside><section ref={productRef} className="td011-fixture-product" data-layout={scenario.layout}><UnborrowedReach state={scenario.state} onAction={() => {}} onFieldChange={() => {}} /></section></div>;
}
