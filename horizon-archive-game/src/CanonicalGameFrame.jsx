import { useLayoutEffect, useRef, useState } from "react";
import { getCanonicalGameFrame } from "./canonicalFrame.js";

export function CanonicalGameFrame({ enabled, children }) {
  const hostRef = useRef(null);
  const [frame, setFrame] = useState(getCanonicalGameFrame(1, 1));

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
      <div className="crt-stage-anchor">
        <div
          className="crt-shell"
          data-crt-layout={frame.layout}
        >
          <div
            className="canonical-game-frame"
            data-canonical-layout={frame.layout}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
