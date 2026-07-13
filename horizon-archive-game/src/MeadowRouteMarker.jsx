import { useLayoutEffect, useRef } from "react";
import { drawRouteMarkerPixelLayer, MEADOW_LOGICAL_SIZE } from "./pixelMeadow.js";

export function MeadowRouteMarker({ state }) {
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    drawRouteMarkerPixelLayer(canvasRef.current, state);
  }, [state]);

  return (
    <canvas
      ref={canvasRef}
      className="meadow-route-marker-layer"
      width={MEADOW_LOGICAL_SIZE.width}
      height={MEADOW_LOGICAL_SIZE.height}
      data-route-marker-layer={state}
      aria-hidden="true"
    />
  );
}
