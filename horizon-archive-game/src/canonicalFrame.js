export const CANONICAL_FRAME = Object.freeze({ width: 640, height: 480, worldHeight: 360, interfaceHeight: 120 });
export const NARROW_FRAME = Object.freeze({ width: 320, height: 240, worldHeight: 180, interfaceHeight: 60 });

export function getCanonicalGameFrame(hostWidth, hostHeight) {
  const logical = hostWidth >= 640 && hostHeight >= 480 ? CANONICAL_FRAME : NARROW_FRAME;
  const scale = Math.max(1, Math.floor(Math.min(hostWidth / logical.width, hostHeight / logical.height)));
  return { ...logical, scale, renderedWidth: logical.width * scale, renderedHeight: logical.height * scale, layout: logical === CANONICAL_FRAME ? "canonical" : "narrow" };
}
