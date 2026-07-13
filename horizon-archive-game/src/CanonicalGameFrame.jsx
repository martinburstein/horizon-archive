import { useLayoutEffect, useRef, useState } from "react";
import { getCanonicalGameFrame } from "./canonicalFrame.js";

export function CanonicalGameFrame({ enabled, children }) {
  const hostRef = useRef(null);
  const [frame, setFrame] = useState(getCanonicalGameFrame(640, 480));

  useLayoutEffect(() => {
    if (!enabled || !hostRef.current) return undefined;
    const host = hostRef.current;
    const update = () => setFrame(getCanonicalGameFrame(host.clientWidth, host.clientHeight));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(host);
    return () => observer.disconnect();
  }, [enabled]);

  if (!enabled) return children;
  return (
    <div className="canonical-game-host" ref={hostRef}>
      <div
        className="crt-stage-anchor"
        style={{ width: frame.renderedStageWidth, height: frame.renderedStageHeight }}
      >
        <div
          className="crt-shell"
          data-crt-layout={frame.layout}
          style={{
            borderTopWidth: frame.bezel.top,
            borderRightWidth: frame.bezel.right,
            borderBottomWidth: frame.bezel.bottom,
            borderLeftWidth: frame.bezel.left,
            zoom: frame.scale,
          }}
        >
          <div
            className="canonical-game-frame"
            data-canonical-layout={frame.layout}
            data-canonical-scale={frame.scale}
            style={{ width: frame.width, height: frame.height, "--world-height": `${frame.worldHeight}px`, "--interface-height": `${frame.interfaceHeight}px` }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
