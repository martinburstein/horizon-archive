import { useEffect, useRef } from "react";
import {
  DEMO_TOUR_CONFIRMATION,
  DEMO_TOUR_PREVIEW_STATUS,
  DEMO_TOUR_STATUS,
  getNextTourSceneId,
} from "./demoTour.js";

export function DemoTourConfirmation({ onConfirm, onCancel }) {
  const dialogRef = useRef(null);
  const confirmRef = useRef(null);

  useEffect(() => {
    confirmRef.current?.focus({ preventScroll: true });
  }, []);

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      onCancel();
      return;
    }
    if (event.key !== "Tab") return;
    const controls = [...dialogRef.current.querySelectorAll("button:not([disabled])")];
    if (!controls.length) return;
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div className="demo-tour-confirmation-backdrop">
      <section ref={dialogRef} className="demo-tour-confirmation" role="dialog" aria-modal="true" aria-labelledby="demo-tour-confirmation-heading" aria-describedby="demo-tour-confirmation-copy" onKeyDown={handleKeyDown}>
        <p className="eyebrow">Optional preview mode</p>
        <h2 id="demo-tour-confirmation-heading">Skip this practice?</h2>
        <p id="demo-tour-confirmation-copy">{DEMO_TOUR_CONFIRMATION}</p>
        <div className="demo-tour-confirmation-actions">
          <button ref={confirmRef} className="primary-action" type="button" onClick={onConfirm}>ENTER DEMO TOUR</button>
          <button className="secondary-action" type="button" onClick={onCancel}>KEEP PRACTICING</button>
        </div>
      </section>
    </div>
  );
}

export function DemoTourScreen({ state, catalog, onMove, onResume }) {
  const scene = catalog.find((item) => item.id === state.tourSceneId) ?? catalog[0];
  const nextSceneId = getNextTourSceneId(scene.id);
  const nextScene = catalog.find((item) => item.id === nextSceneId);

  return (
    <main className="game-shell demo-tour-screen" data-demo-tour="true" data-tour-scene={scene.id}>
      <section className="demo-tour-world" aria-label={`${scene.location} Demo Tour preview`}>
        {scene.sources ? (
          <picture>
            <source media="(max-width: 759px), (max-height: 595px)" srcSet={scene.sources.narrow} />
            <img src={scene.sources.canonical} alt={scene.alt} />
          </picture>
        ) : (
          <img src={scene.image} alt={scene.alt} />
        )}
        <div className="demo-tour-scene-status">
          <span>CHAPTER {scene.chapter}</span>
          <strong>{scene.location}</strong>
          <span>SHIPPED PREVIEW</span>
        </div>
      </section>
      <section className="demo-tour-controls" aria-labelledby="demo-tour-status-heading">
        <div>
          <p id="demo-tour-status-heading" className="demo-tour-badge" role="status" aria-live="polite">{DEMO_TOUR_STATUS}</p>
          <p>{DEMO_TOUR_PREVIEW_STATUS}</p>
          <p className="demo-tour-resume-note">Campaign parked at: {state.resumeBoundary}</p>
        </div>
        <div className="demo-tour-actions">
          {nextScene && <button className="primary-action" type="button" onClick={() => onMove(nextScene.id)}>NEXT TOUR SCENE</button>}
          <button className="secondary-action" type="button" onClick={onResume}>RESUME CAMPAIGN</button>
        </div>
      </section>
    </main>
  );
}
