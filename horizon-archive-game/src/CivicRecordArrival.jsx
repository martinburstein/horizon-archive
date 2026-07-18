import { useLayoutEffect, useRef, useState } from "react";
import civicRecordArrivalMaster from "../../Visual Direction/Production Masters/2026-07-16-civic-record-district-arrival/civic-record-district-arrival-master-v1.png";
import { CanonicalGameFrame } from "./CanonicalGameFrame.jsx";
import {
  describeCivicActionAccessibility,
  describeCustodyLedgerPrimaryReturnGroup,
  describeCivicWorldRegionAccessibility,
} from "./CivicActionAccessibility.js";
import {
  CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
  CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION,
  custodyLedgerRouteActions,
  custodyLedgerRouteOwners,
} from "./CustodyLedgerNormalRoute.js";
import { CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS } from "./CustodyLedgerPrimaryInteraction.js";
import { CUSTODY_LEDGER_CLEAR_RESULT_ACTION } from "./CustodyLedgerPrimaryResultDismissal.js";
import { CUSTODY_LEDGER_RETRY_TRANSFER_ACTION } from "./CustodyLedgerTransferInteraction.js";
import { CUSTODY_LEDGER_OPEN_BLANK_EXPLANATION } from "./CustodyLedgerExplanationEntry.js";
import {
  CUSTODY_LEDGER_RETRY_BLANK_EXPLANATION,
  CUSTODY_LEDGER_SUBMIT_PYTHON_EXPLANATION,
} from "./CustodyLedgerExplanationSubmission.js";
import { CUSTODY_LEDGER_OPEN_RAI_PRIMARY } from "./CustodyLedgerRAIPrimaryEntry.js";

function formatCustodyLedgerValue(value) {
  if (value === null) return "None";
  if (value === true) return "True";
  if (value === false) return "False";
  return String(value);
}

export function CivicRecordArrival({
  routeState,
  primaryInteraction = null,
  onAction,
  onPrimarySubmit,
  onPrimaryRetry,
  onPrimaryDismiss,
  onTransferSubmit,
  onTransferRetry,
  onExplanationOpen,
  onExplanationSubmit,
  onExplanationRetry,
  onRAIPrimaryOpen,
}) {
  const headingRef = useRef(null);
  const workHeadingRef = useRef(null);
  const feedbackHeadingRef = useRef(null);
  const resultHeadingRef = useRef(null);
  const freshHeadingRef = useRef(null);
  const transferFeedbackHeadingRef = useRef(null);
  const transferCompleteHeadingRef = useRef(null);
  const explanationHeadingRef = useRef(null);
  const explanationFeedbackHeadingRef = useRef(null);
  const explanationConclusionHeadingRef = useRef(null);
  const raiPrimaryHeadingRef = useRef(null);
  const classificationRef = useRef(null);
  const ownerRef = useRef(null);
  const [classification, setClassification] = useState("");
  const [fieldOwner, setFieldOwner] = useState("");
  const [explanationResponses, setExplanationResponses] = useState({});
  const [raiPrimaryResponses, setRAIPrimaryResponses] = useState({});
  const atNearObservation = routeState.boardId === "SC-03-10";
  const atFarObservation = routeState.boardId === "SC-03-20";
  const atLocalComparison = routeState.boardId === "SC-03-30";
  const atPythonPrimary = routeState.checkpoint === "sc03_python_primary_blank";
  const atObservation = atNearObservation || atFarObservation;
  const observationCount = routeState.observationEvidence?.length ?? 0;
  const hasObservation = observationCount > 0;
  const heading = atNearObservation
    ? "Near Exposed Layers"
    : atFarObservation
      ? "Scale Echo and Closed Boundary"
      : atPythonPrimary
        ? "Custody Ledger"
      : atLocalComparison
        ? "Local Comparison"
      : "Civic Record District";
  const artRegistration = atNearObservation
    ? "SC-03-10-registered-continuity-hook"
    : atFarObservation
      ? "SC-03-20-registered-continuity-hook"
      : atLocalComparison
        ? "SC-03-30-registered-continuity-hook"
      : "SC-03-00-civic-record-arrival-v1";
  const routeActions = routeState.availableActions.filter((action) => action !== routeState.routeReturnAction);
  const returnActions = routeState.availableActions.filter((action) => action === routeState.routeReturnAction);

  const primaryPhase = primaryInteraction?.phase ?? (atPythonPrimary ? "30-A0" : null);

  useLayoutEffect(() => {
    if (!["EX-20", "EXS-00"].includes(primaryPhase)
      && Object.keys(explanationResponses).length > 0) {
      setExplanationResponses({});
    }
  }, [primaryPhase, explanationResponses]);

  useLayoutEffect(() => {
    if (primaryPhase !== "RAD-20" && Object.keys(raiPrimaryResponses).length > 0) {
      setRAIPrimaryResponses({});
    }
  }, [primaryPhase, raiPrimaryResponses]);

  useLayoutEffect(() => {
    if (atPythonPrimary) {
      if (primaryPhase === "30-A0" && primaryInteraction?.focusIntent?.target === "classification") {
        classificationRef.current?.focus({ preventScroll: true });
        return;
      }
      if (primaryPhase === "30-A0" && primaryInteraction?.focusIntent?.target === "owner") {
        ownerRef.current?.focus({ preventScroll: true });
        return;
      }
      if (primaryPhase === "30-A0") {
        workHeadingRef.current?.focus({ preventScroll: true });
        return;
      }
      if (primaryPhase === "30-A1F") {
        feedbackHeadingRef.current?.focus({ preventScroll: true });
        return;
      }
      if (primaryPhase === "30-A2" || primaryPhase === "DR-00") {
        resultHeadingRef.current?.focus({ preventScroll: true });
        return;
      }
      if (primaryPhase === "DR-20" || primaryPhase === "FT-00") {
        const retryTarget = primaryInteraction?.attemptCount > 0
          ? primaryInteraction?.focusIntent?.then
          : null;
        if (retryTarget === "classification") {
          classificationRef.current?.focus({ preventScroll: true });
          return;
        }
        if (retryTarget === "owner") {
          ownerRef.current?.focus({ preventScroll: true });
          return;
        }
        freshHeadingRef.current?.focus({ preventScroll: true });
        return;
      }
      if (primaryPhase === "FT-20F") {
        transferFeedbackHeadingRef.current?.focus({ preventScroll: true });
        return;
      }
      if (primaryPhase === "FT-20C") {
        transferCompleteHeadingRef.current?.focus({ preventScroll: true });
        return;
      }
      if (primaryPhase === "EX-20" || primaryPhase === "EXS-00") {
        explanationHeadingRef.current?.focus({ preventScroll: true });
        return;
      }
      if (primaryPhase === "EXS-20F") {
        explanationFeedbackHeadingRef.current?.focus({ preventScroll: true });
        return;
      }
      if (primaryPhase === "EXS-20C") {
        explanationConclusionHeadingRef.current?.focus({ preventScroll: true });
        return;
      }
      if (primaryPhase === "RAD-20") {
        raiPrimaryHeadingRef.current?.focus({ preventScroll: true });
        return;
      }
    }
    headingRef.current?.focus({ preventScroll: true });
  }, [routeState.checkpoint, atPythonPrimary, primaryPhase, primaryInteraction?.focusIntent?.target]);

  function submitPrimary(event) {
    event?.preventDefault?.();
    onPrimarySubmit?.({ classification, owner: fieldOwner }, event);
    setClassification("");
    setFieldOwner("");
  }

  function retryPrimary() {
    setClassification("");
    setFieldOwner("");
    onPrimaryRetry?.();
  }

  function submitTransfer(event) {
    event?.preventDefault?.();
    onTransferSubmit?.({ classification, owner: fieldOwner }, event);
    setClassification("");
    setFieldOwner("");
  }

  function retryTransfer() {
    setClassification("");
    setFieldOwner("");
    onTransferRetry?.();
  }

  function submitExplanation(event) {
    event?.preventDefault?.();
    const result = onExplanationSubmit?.(explanationResponses, event);
    if (["feedback", "python_explanation_complete"].includes(result?.status)) {
      setExplanationResponses({});
    }
  }

  function retryExplanation() {
    setExplanationResponses({});
    onExplanationRetry?.();
  }

  function renderAction(action) {
    const owner = action === custodyLedgerRouteActions.continueProtected
      ? custodyLedgerRouteOwners.system
      : custodyLedgerRouteOwners.pilot;
    const primary = action === custodyLedgerRouteActions.continueProtected
      || action === CUSTODY_LEDGER_NEAR_DETAIL_ACTION
      || action === CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION
      || ((atObservation || atLocalComparison) && action !== routeState.routeReturnAction);
    const actionState = routeState.actionStates?.find((candidate) => candidate.label === action);
    const isInert = actionState?.status === "inert";
    const accessibility = describeCivicActionAccessibility(owner, action, actionState?.status);
    return (
      <button
        className={primary ? "primary-action" : "secondary-action"}
        type="button"
        key={action}
        aria-label={accessibility.accessibleName}
        aria-disabled={isInert || undefined}
        disabled={isInert}
        onClick={isInert ? undefined : (event) => onAction(action, event)}
      >
        {action}
        {actionState && (
          <span className="civic-action-state" data-action-status={actionState.status}>
            {accessibility.stateText}
          </span>
        )}
      </button>
    );
  }

  return (
    <CanonicalGameFrame enabled>
      <main
        className="game-shell city-threshold-screen civic-record-arrival"
        data-scene="civic-record-district"
        data-board={routeState.boardId}
        data-production-art={artRegistration}
        data-production-art-hook={atNearObservation
          ? "SC-03-10-detail-pending"
          : atFarObservation
            ? "SC-03-20-detail-pending"
            : atPythonPrimary
              ? "SC-03-30-python-primary-blank"
            : atLocalComparison
              ? "SC-03-30-local-comparison"
            : undefined}
        data-observation-count={routeState.observationEvidence?.length ?? 0}
      >
        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          {[routeState.sceneStatement?.text, routeState.statusMessage?.text, routeState.message].filter(Boolean).join(" ")}
        </p>
        <section
          className="city-world civic-record-world"
          aria-label={describeCivicWorldRegionAccessibility(routeState)}
        >
          <img
            className="city-world-plate-native"
            src={civicRecordArrivalMaster}
            alt="An immense nonhuman civic landscape of layered mineral infrastructure and glowing geothermal return channels, viewed in first person"
          />
        </section>
        <section className="city-command-panel" aria-labelledby="rp002-arrival-heading">
          <div>
            <p className="eyebrow">{routeState.owner ?? custodyLedgerRouteOwners.system}</p>
            <h1 ref={headingRef} id="rp002-arrival-heading" tabIndex="-1">{heading}</h1>
            {routeState.sceneStatement ? (
              <div className="civic-observation-statement" aria-label="Recorded Scene statement">
                <p className="eyebrow">{routeState.sceneStatement.owner}</p>
                <p>{routeState.sceneStatement.text}</p>
              </div>
            ) : <p>{routeState.message}</p>}
            {routeState.statusMessage && (
              <p className="civic-observation-status">
                <span className="eyebrow">{routeState.statusMessage.owner}</span><br />
                {routeState.statusMessage.text}
              </p>
            )}
            {atPythonPrimary && routeState.learningState && primaryPhase === "30-A0" && (
              <form className="custody-ledger-work-image" aria-labelledby="custody-ledger-work-heading" onSubmit={submitPrimary}>
                <p className="eyebrow">SYSTEM // EXPEDITION SESSION</p>
                <h2 ref={workHeadingRef} id="custody-ledger-work-heading" tabIndex="-1">
                  {routeState.learningState.unfinishedWorkImage.label}
                </h2>
                <dl className="custody-ledger-fields">
                  {Object.entries(routeState.learningState.sourceFields).map(([key, value]) => (
                    <div key={key} data-field-state="locked">
                      <dt>{key.replaceAll("_", " ")}</dt>
                      <dd>{formatCustodyLedgerValue(value)}</dd>
                    </div>
                  ))}
                  <div data-field-state="editable">
                    <dt><label htmlFor="custody-ledger-classification">classification</label></dt>
                    <dd>
                      <input ref={classificationRef} id="custody-ledger-classification" name="classification"
                        value={classification} maxLength="40" autoComplete="off" spellCheck="false"
                        aria-describedby="custody-ledger-field-help"
                        onChange={(event) => setClassification(event.target.value)} />
                    </dd>
                  </div>
                  <div data-field-state="editable">
                    <dt><label htmlFor="custody-ledger-owner">owner</label></dt>
                    <dd>
                      <input ref={ownerRef} id="custody-ledger-owner" name="owner"
                        value={fieldOwner} maxLength="40" autoComplete="off" spellCheck="false"
                        aria-describedby="custody-ledger-field-help"
                        onChange={(event) => setFieldOwner(event.target.value)} />
                    </dd>
                  </div>
                </dl>
                <p id="custody-ledger-field-help" className="civic-observation-status">
                  The four source fields are locked. Only the two expedition fields may be updated locally.
                </p>
                <button className="primary-action" type="submit">
                  {CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS}
                </button>
              </form>
            )}
            {atPythonPrimary && primaryPhase === "30-A1F" && (
              <section className="custody-ledger-work-image" aria-labelledby="custody-ledger-feedback-heading">
                <p className="eyebrow">901 TEACHER // FEEDBACK</p>
                <h2 ref={feedbackHeadingRef} id="custody-ledger-feedback-heading" tabIndex="-1">
                  Local checks need another pass
                </h2>
                <ul className="custody-ledger-feedback" aria-label="Checks to review">
                  {primaryInteraction.feedback.map((item) => {
                    const fieldId = `custody-ledger-feedback-field-${item.checkId}`;
                    const ownerId = `custody-ledger-feedback-owner-${item.checkId}`;
                    const messageId = `custody-ledger-feedback-message-${item.checkId}`;
                    return (
                      <li key={item.checkId} data-feedback-field={item.field}
                        aria-labelledby={`${fieldId} ${ownerId} ${messageId}`}>
                        <span id={fieldId} className="custody-ledger-feedback-field">
                          Field // {item.field}
                        </span><br />
                        <span id={ownerId} className="eyebrow">{item.owner}</span><br />
                        <span id={messageId}>{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
                <p className="civic-observation-status">Submitted work was cleared. Retry begins with two genuinely blank expedition fields.</p>
                <button className="primary-action" type="button" onClick={retryPrimary}>RETRY BLANK</button>
              </section>
            )}
            {atPythonPrimary && (primaryPhase === "30-A2" || primaryPhase === "DR-00") && (
              <section className="custody-ledger-work-image" aria-labelledby="custody-ledger-result-heading">
                <p className="eyebrow">{primaryInteraction.owner}</p>
                <h2 ref={resultHeadingRef} id="custody-ledger-result-heading" tabIndex="-1">
                  Provisional translation
                </h2>
                <dl className="custody-ledger-fields">
                  {Object.entries(primaryInteraction.sourceFields).map(([key, value]) => (
                    <div key={key} data-field-state="locked">
                      <dt>{key.replaceAll("_", " ")}</dt>
                      <dd>{formatCustodyLedgerValue(value)}</dd>
                    </div>
                  ))}
                  {Object.entries(primaryInteraction.expeditionFields).map(([key, value]) => (
                    <div key={key} data-field-state="read-only">
                      <dt>{key.replaceAll("_", " ")}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="civic-observation-status">All 6 local checks passed for this attempt. This read-only result grants no mastery, access, authority, or city change.</p>
                <button className="primary-action" type="button" onClick={onPrimaryDismiss}>
                  {CUSTODY_LEDGER_CLEAR_RESULT_ACTION}
                </button>
              </section>
            )}
            {atPythonPrimary && (primaryPhase === "DR-20" || primaryPhase === "FT-00") && (
              <form className="custody-ledger-work-image" aria-labelledby="custody-ledger-fresh-heading" onSubmit={submitTransfer}>
                <p className="eyebrow">{primaryInteraction.owner}</p>
                <h2 ref={freshHeadingRef} id="custody-ledger-fresh-heading" tabIndex="-1">
                  {primaryInteraction.workImageLabel}
                </h2>
                <dl className="custody-ledger-fields">
                  {Object.entries(primaryInteraction.sourceFields).map(([key, value]) => (
                    <div key={key} data-field-state="locked">
                      <dt>{key.replaceAll("_", " ")}</dt>
                      <dd>{formatCustodyLedgerValue(value)}</dd>
                    </div>
                  ))}
                  <div data-field-state="editable">
                    <dt><label htmlFor="custody-ledger-fresh-classification">classification</label></dt>
                    <dd>
                      <input ref={classificationRef} id="custody-ledger-fresh-classification" name="classification"
                        value={classification} maxLength="40" autoComplete="off" spellCheck="false"
                        aria-describedby="custody-ledger-fresh-field-help"
                        onChange={(event) => setClassification(event.target.value)} />
                    </dd>
                  </div>
                  <div data-field-state="editable">
                    <dt><label htmlFor="custody-ledger-fresh-owner">owner</label></dt>
                    <dd>
                      <input ref={ownerRef} id="custody-ledger-fresh-owner" name="owner"
                        value={fieldOwner} maxLength="40" autoComplete="off" spellCheck="false"
                        aria-describedby="custody-ledger-fresh-field-help"
                        onChange={(event) => setFieldOwner(event.target.value)} />
                    </dd>
                  </div>
                </dl>
                <p id="custody-ledger-fresh-field-help" className="civic-observation-status">
                  Fresh expedition practice is blank, local, and evaluated only by the six expedition checks.
                </p>
                {primaryPhase === "FT-00" && (
                  <button className="primary-action" type="submit">
                    {CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS}
                  </button>
                )}
              </form>
            )}
            {atPythonPrimary && primaryPhase === "FT-20F" && (
              <section className="custody-ledger-work-image" aria-labelledby="custody-ledger-transfer-feedback-heading">
                <p className="eyebrow">901 TEACHER // FEEDBACK</p>
                <h2 ref={transferFeedbackHeadingRef} id="custody-ledger-transfer-feedback-heading" tabIndex="-1">
                  Transfer checks need another pass
                </h2>
                <ul className="custody-ledger-feedback" aria-label="Transfer checks to review">
                  {primaryInteraction.feedback.map((item) => {
                    const fieldId = `custody-ledger-transfer-feedback-field-${item.checkId}`;
                    const ownerId = `custody-ledger-transfer-feedback-owner-${item.checkId}`;
                    const messageId = `custody-ledger-transfer-feedback-message-${item.checkId}`;
                    return (
                      <li key={item.checkId} data-feedback-field={item.field}
                        aria-labelledby={`${fieldId} ${ownerId} ${messageId}`}>
                        <span id={fieldId} className="custody-ledger-feedback-field">Field // {item.field}</span><br />
                        <span id={ownerId} className="eyebrow">{item.owner}</span><br />
                        <span id={messageId}>{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
                <p className="civic-observation-status">Submitted work was cleared. Retry begins with two genuinely blank transfer fields.</p>
                <button className="primary-action" type="button" onClick={retryTransfer}>
                  {CUSTODY_LEDGER_RETRY_TRANSFER_ACTION}
                </button>
              </section>
            )}
            {atPythonPrimary && primaryPhase === "FT-20C" && (
              <section className="custody-ledger-work-image" aria-labelledby="custody-ledger-transfer-complete-heading">
                <p className="eyebrow">{primaryInteraction.owner}</p>
                <h2 ref={transferCompleteHeadingRef} id="custody-ledger-transfer-complete-heading" tabIndex="-1">
                  Transfer evidence complete
                </h2>
                <p className="civic-observation-status">All 6 local transfer checks passed for this attempt. Course evidence is complete; no mastery, access, authority, or city change was granted.</p>
              </section>
            )}
            {atPythonPrimary && ["EX-20", "EXS-00"].includes(primaryPhase) && (
              <form className="custody-ledger-work-image" aria-labelledby="custody-ledger-explanation-heading"
                onSubmit={submitExplanation}>
                <p className="eyebrow">{primaryInteraction.owner}</p>
                <h2 ref={explanationHeadingRef} id="custody-ledger-explanation-heading" tabIndex="-1">
                  Blank Python explanation
                </h2>
                <p>{primaryInteraction.ownershipMessage.text}</p>
                <dl className="custody-ledger-fields custody-ledger-explanation-controls">
                  {(primaryInteraction.explanationControls?.map(({ id }) => id)
                    ?? Object.keys(primaryInteraction.explanationSelections ?? {})).map((dimension, index) => (
                    <div key={dimension} data-field-state="editable">
                      <dt><label htmlFor={`custody-ledger-explanation-${dimension}`}>Explanation part {index + 1}</label></dt>
                      <dd>
                        <textarea
                          id={`custody-ledger-explanation-${dimension}`}
                          name={dimension}
                          value={explanationResponses[dimension] ?? ""}
                          maxLength="2000"
                          autoComplete="off"
                          spellCheck="true"
                          aria-describedby="custody-ledger-explanation-help"
                          onChange={(event) => setExplanationResponses((current) => ({
                            ...current,
                            [dimension]: event.target.value,
                          }))}
                        />
                      </dd>
                    </div>
                  ))}
                </dl>
                <p id="custody-ledger-explanation-help" className="civic-observation-status">
                  This course prompt is genuinely blank. No explanation attempt, evaluation, feedback, result, or credit is active.
                </p>
                {primaryPhase === "EXS-00" && (
                  <button className="primary-action" type="submit">
                    {CUSTODY_LEDGER_SUBMIT_PYTHON_EXPLANATION}
                  </button>
                )}
              </form>
            )}
            {atPythonPrimary && primaryPhase === "EXS-20F" && (
              <section className="custody-ledger-work-image" aria-labelledby="custody-ledger-explanation-feedback-heading">
                <p className="eyebrow">{primaryInteraction.owner}</p>
                <h2 ref={explanationFeedbackHeadingRef} id="custody-ledger-explanation-feedback-heading" tabIndex="-1">
                  Python explanation needs another pass
                </h2>
                <p className="civic-observation-status">
                  {primaryInteraction.boundedResult.confirmedDimensions} of {primaryInteraction.boundedResult.totalDimensions} dimensions passed for this attempt.
                </p>
                <ul className="custody-ledger-feedback" aria-label="Explanation dimensions to review">
                  {primaryInteraction.remediation.map((item) => {
                    const dimensionId = `custody-ledger-explanation-feedback-dimension-${item.dimension}`;
                    const messageId = `custody-ledger-explanation-feedback-message-${item.dimension}`;
                    return (
                      <li key={item.dimension} aria-labelledby={`${dimensionId} ${messageId}`}>
                        <span id={dimensionId} className="custody-ledger-feedback-field">Dimension // {item.dimension}</span><br />
                        <span id={messageId}>{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
                <p className="civic-observation-status">Submitted prose was cleared. Retry begins with all three explanation controls genuinely blank.</p>
                <button className="primary-action" type="button" onClick={retryExplanation}>
                  {CUSTODY_LEDGER_RETRY_BLANK_EXPLANATION}
                </button>
              </section>
            )}
            {atPythonPrimary && primaryPhase === "EXS-20C" && (
              <section className="custody-ledger-work-image" aria-labelledby="custody-ledger-explanation-conclusion-heading">
                <p className="eyebrow">{primaryInteraction.owner}</p>
                <h2 ref={explanationConclusionHeadingRef} id="custody-ledger-explanation-conclusion-heading" tabIndex="-1">
                  Python explanation complete
                </h2>
                <p className="civic-observation-status">
                  {primaryInteraction.boundedResult.confirmedDimensions} of {primaryInteraction.boundedResult.totalDimensions} dimensions passed for this attempt.
                </p>
                <p>{primaryInteraction.ownershipMessage.text}</p>
              </section>
            )}
            {atPythonPrimary && primaryPhase === "RAD-20" && (
              <section className="custody-ledger-work-image" aria-labelledby="custody-ledger-rai-primary-heading">
                <p className="eyebrow">{primaryInteraction.owner}</p>
                <h2 ref={raiPrimaryHeadingRef} id="custody-ledger-rai-primary-heading" tabIndex="-1">
                  Responsible-AI review
                </h2>
                <p>{primaryInteraction.ownershipMessage.text}</p>
                <p>{primaryInteraction.case.prompt}</p>
                <dl className="custody-ledger-fields">
                  {primaryInteraction.controls.map((control) => (
                    <div key={control.id} data-field-state="editable">
                      <dt>
                        <label htmlFor={`custody-ledger-rai-${control.id}`}>
                          {control.id.replaceAll("_", " ")}
                        </label>
                      </dt>
                      <dd>
                        <select
                          id={`custody-ledger-rai-${control.id}`}
                          name={control.id}
                          value={raiPrimaryResponses[control.id] ?? ""}
                          onChange={(event) => setRAIPrimaryResponses((current) => ({
                            ...current,
                            [control.id]: event.target.value,
                          }))}
                        >
                          <option value="">Choose one</option>
                          {control.choices.map((choice) => (
                            <option key={choice} value={choice}>{choice}</option>
                          ))}
                        </select>
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="civic-observation-status">
                  This first course case is genuinely blank. No Responsible-AI attempt, submission, evaluation, feedback, result, evidence, or credit is active.
                </p>
              </section>
            )}
            <p>
              {atObservation
                ? hasObservation
                  ? `${observationCount} bounded Scene ${observationCount === 1 ? "fact is" : "facts are"} retained. ${observationCount === 1 ? "It grants" : "They grant"} no learning evidence, mastery, exam credit, access, or city change.`
                  : "This blank view records no Scene fact, learning evidence, mastery, exam credit, or city change."
                : atPythonPrimary
                  ? primaryPhase === "30-A2" || primaryPhase === "DR-00"
                    ? "The suit rendered one provisional local result. No mastery, access, authority, or city change has been recorded."
                    : primaryPhase === "DR-20" || primaryPhase === "FT-00"
                      ? "A carry-free blank fresh practice image is open. No result, mastery, access, authority, or city change has been recorded."
                    : primaryPhase === "FT-20F"
                      ? "Only the transfer checks that failed are shown. Private working values were cleared before this feedback appeared."
                    : primaryPhase === "FT-20C"
                      ? "Current-attempt transfer evidence is complete. Python explanation and later learning remain closed."
                    : primaryPhase === "EX-20" || primaryPhase === "EXS-00"
                      ? "A blank Teacher-owned Python explanation prompt is open. No attempt, evidence, result, mastery, access, authority, or city change has been recorded."
                    : primaryPhase === "EXS-20F"
                      ? "Only the explanation dimensions that failed are shown. Private prose was cleared before this feedback appeared."
                    : primaryPhase === "EXS-20C"
                      ? "Current-attempt Python explanation evidence is complete. No access, authority, city change, or later learning has opened."
                    : primaryPhase === "RAD-20"
                      ? "The first Responsible-AI course case is open with three genuinely blank controls. No attempt, submission, evaluation, feedback, result, evidence, mastery, access, authority, or city change has been recorded."
                    : primaryPhase === "30-A1F"
                      ? "Only the checks that failed are shown. Private working values were cleared before this feedback appeared."
                      : "The unfinished work image is local, blank, and offline. No answer, result, attempt, mastery, access, authority, or city change has been recorded."
                : atLocalComparison
                  ? "Five bounded Scene facts remain retained. This blank local boundary grants no learning evidence, attempt, hint, confidence, mastery, exam credit, save eligibility, access, or city change."
                : "Arrival and orientation record no observation or learning evidence. The physical city remains unchanged."}
            </p>
          </div>
          <div className="civic-action-groups">
            <div className="city-command-actions" aria-label={atNearObservation
              ? "Near evidence actions"
              : atFarObservation
                ? "Far evidence actions"
                : atPythonPrimary
                  ? describeCustodyLedgerPrimaryReturnGroup(primaryPhase)
                : atLocalComparison
                  ? "Local comparison actions"
                : "Civic route actions"}>
              {routeActions.map(renderAction)}
            </div>
            {returnActions.length > 0 && (
              <div className="city-command-actions civic-route-return-actions" aria-label="Separate route return">
                {returnActions.map(renderAction)}
              </div>
            )}
            {atPythonPrimary && primaryPhase === "FT-20C" && (
              <div className="city-command-actions" aria-label="Pilot explanation entry">
                <span className="eyebrow">PILOT // FLIGHT RECORDER</span>
                <button className="primary-action" type="button" onClick={onExplanationOpen}>
                  {CUSTODY_LEDGER_OPEN_BLANK_EXPLANATION}
                </button>
              </div>
            )}
            {atPythonPrimary && primaryPhase === "EXS-20C" && (
              <div className="city-command-actions" aria-label="Pilot Responsible-AI entry">
                <span className="eyebrow">PILOT // FLIGHT RECORDER</span>
                <button className="primary-action" type="button" onClick={onRAIPrimaryOpen}>
                  {CUSTODY_LEDGER_OPEN_RAI_PRIMARY}
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </CanonicalGameFrame>
  );
}
