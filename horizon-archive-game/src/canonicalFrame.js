const NARROW_LAYOUT_MAX = 719;
const MIN_INTERFACE_HEIGHT = 220;

export function getCanonicalGameFrame(hostWidth, hostHeight) {
  const width = Math.max(1, Number.isFinite(hostWidth) ? hostWidth : 1);
  const viewportHeight = Math.max(1, Number.isFinite(hostHeight) ? hostHeight : 1);
  const worldHeight = width * 9 / 16;
  const interfaceHeight = Math.max(MIN_INTERFACE_HEIGHT, viewportHeight - worldHeight);
  const height = worldHeight + interfaceHeight;
  return {
    width,
    height,
    worldHeight,
    interfaceHeight,
    stageWidth: width,
    stageHeight: height,
    renderedWidth: width,
    renderedHeight: height,
    renderedStageWidth: width,
    renderedStageHeight: height,
    scale: 1,
    bezel: { top: 0, right: 0, bottom: 0, left: 0, safeMargin: 0 },
    layout: width <= NARROW_LAYOUT_MAX ? "narrow" : "canonical",
  };
}
