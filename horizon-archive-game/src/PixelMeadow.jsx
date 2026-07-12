import { useLayoutEffect, useRef, useState } from "react";
import { drawMeadowPixelScene, getIntegerPixelStage, MEADOW_LOGICAL_SIZE } from "./pixelMeadow.js";

export function PixelMeadow({ petalState, routeState, children }) {
  const hostRef = useRef(null);
  const canvasRef = useRef(null);
  const [stage, setStage] = useState({ scale: 1, width: 320, height: 180 });

  useLayoutEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;
    const update = () => setStage(getIntegerPixelStage(host.clientWidth, host.clientHeight));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (canvasRef.current) drawMeadowPixelScene(canvasRef.current, { petalState, routeState });
  }, [petalState, routeState]);

  return (
    <div className="pixel-scene-host" ref={hostRef}>
      <div
        className="pixel-scene-stage"
        style={{ width: stage.width, height: stage.height }}
        data-pixel-scale={stage.scale}
        data-petal-state={petalState}
        data-route-state={routeState}
      >
        <canvas
          ref={canvasRef}
          className="pixel-scene-canvas"
          width={MEADOW_LOGICAL_SIZE.width}
          height={MEADOW_LOGICAL_SIZE.height}
          role="img"
          aria-label="Pixel-built twilight meadow with a many-petaled First Signal Terminal, a separate three-fin Route Marker, a small survey craft, and an open path"
        >A pixel-built Glass Meadow scene.</canvas>
        {children}
      </div>
    </div>
  );
}
