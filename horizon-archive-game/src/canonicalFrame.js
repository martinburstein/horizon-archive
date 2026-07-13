export const CANONICAL_FRAME = Object.freeze({ width: 640, height: 480, worldHeight: 360, interfaceHeight: 120 });
export const NARROW_FRAME = Object.freeze({ width: 320, height: 240, worldHeight: 180, interfaceHeight: 60 });

const CRT_BEZELS = Object.freeze({
  canonical: Object.freeze({ top: 38, right: 48, bottom: 54, left: 48, safeMargin: 12 }),
  narrow: Object.freeze({ top: 0, right: 0, bottom: 0, left: 0, safeMargin: 2 }),
});

function roundScale(value) {
  return Math.round(value * 1000) / 1000;
}

export function getCanonicalGameFrame(hostWidth, hostHeight) {
  const logical = hostWidth >= 760 && hostHeight >= 596 ? CANONICAL_FRAME : NARROW_FRAME;
  const layout = logical === CANONICAL_FRAME ? "canonical" : "narrow";
  const bezel = CRT_BEZELS[layout];
  const stageWidth = logical.width + bezel.left + bezel.right;
  const stageHeight = logical.height + bezel.top + bezel.bottom;
  const usableWidth = Math.max(1, hostWidth - bezel.safeMargin * 2);
  const usableHeight = Math.max(1, hostHeight - bezel.safeMargin * 2);
  const minimumScale = layout === "narrow" ? 1 : 0.5;
  const scale = roundScale(Math.max(minimumScale, Math.min(usableWidth / stageWidth, usableHeight / stageHeight)));

  return {
    ...logical,
    scale,
    renderedWidth: logical.width * scale,
    renderedHeight: logical.height * scale,
    stageWidth,
    stageHeight,
    renderedStageWidth: stageWidth * scale,
    renderedStageHeight: stageHeight * scale,
    bezel,
    layout,
  };
}
