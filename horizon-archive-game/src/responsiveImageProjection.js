export const FIRST_RUN_RESPONSIVE_LAYOUTS = Object.freeze({
  desktop: Object.freeze({ width: 1920, height: 1080 }),
  laptop: Object.freeze({ width: 1366, height: 768 }),
  narrow: Object.freeze({ width: 390, height: 844 }),
  effective200: Object.freeze({ width: 768, height: 900 }),
  retained320x180: Object.freeze({ width: 320, height: 180 }),
  retained320x240: Object.freeze({ width: 320, height: 240 }),
});

const finitePositive = (value) => typeof value === "number" && Number.isFinite(value) && value > 0;
const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
const snapEdge = (value, maximum) => Math.abs(value) < 1e-9 ? 0 : Math.abs(value - maximum) < 1e-9 ? maximum : value;

export function isSourceRect(value, sourceWidth = 3840, sourceHeight = 2160) {
  return value != null
    && [value.x, value.y, value.width, value.height, sourceWidth, sourceHeight].every((item) => typeof item === "number" && Number.isFinite(item))
    && value.width > 0 && value.height > 0 && sourceWidth > 0 && sourceHeight > 0
    && value.x >= 0 && value.y >= 0
    && value.x + value.width <= sourceWidth
    && value.y + value.height <= sourceHeight;
}

function parseAxis(value, fallback) {
  if (typeof value === "number" && Number.isFinite(value)) return clamp(value, 0, 1);
  const token = String(value ?? "").trim().toLowerCase();
  if (token === "left" || token === "top") return 0;
  if (token === "center") return 0.5;
  if (token === "right" || token === "bottom") return 1;
  if (/^-?\d+(?:\.\d+)?%$/.test(token)) return clamp(Number.parseFloat(token) / 100, 0, 1);
  return fallback;
}

export function parseObjectPosition(value = "50% 50%") {
  const tokens = String(value).trim().split(/\s+/).filter(Boolean);
  if (tokens.length === 1) {
    if (["top", "bottom"].includes(tokens[0].toLowerCase())) return Object.freeze({ x: 0.5, y: parseAxis(tokens[0], 0.5) });
    return Object.freeze({ x: parseAxis(tokens[0], 0.5), y: 0.5 });
  }
  return Object.freeze({ x: parseAxis(tokens[0], 0.5), y: parseAxis(tokens[1], 0.5) });
}

// Mirrors the production wrapper's inline padding and desktop height cap. Browser
// evidence checks this deterministic model against computed DOM rectangles.
export function getExpectedCanonicalWorldSize(viewportWidth, viewportHeight) {
  if (!finitePositive(viewportWidth) || !finitePositive(viewportHeight)) return null;
  const compact = viewportWidth <= 480;
  const hostPadding = compact ? 0 : clamp(viewportWidth * 0.0075, 0, 12);
  const hostContentWidth = Math.max(1, viewportWidth - hostPadding * 2);
  const desktopCapped = viewportWidth >= 1280 && viewportHeight >= 800;
  const anchorWidth = desktopCapped
    ? Math.min(hostContentWidth, (viewportHeight - 220 - 44) / 0.5625)
    : hostContentWidth;
  const shellPadding = compact ? 2 : clamp(viewportWidth * 0.0055, 3, 10);
  const width = Math.max(1, anchorWidth - shellPadding * 2 - 2);
  return Object.freeze({ width, height: width * 9 / 16 });
}

export function projectCoverGeometry({
  sourceWidth = 3840,
  sourceHeight = 2160,
  containerWidth,
  containerHeight,
  objectFit = "cover",
  objectPosition = "50% 50%",
} = {}) {
  if (![sourceWidth, sourceHeight, containerWidth, containerHeight].every(finitePositive)) return null;
  if (objectFit !== "cover" && objectFit !== "contain") return null;
  const scale = objectFit === "cover"
    ? Math.max(containerWidth / sourceWidth, containerHeight / sourceHeight)
    : Math.min(containerWidth / sourceWidth, containerHeight / sourceHeight);
  const renderedWidth = sourceWidth * scale;
  const renderedHeight = sourceHeight * scale;
  const position = parseObjectPosition(objectPosition);
  const offsetX = (containerWidth - renderedWidth) * position.x;
  const offsetY = (containerHeight - renderedHeight) * position.y;
  const visibleX = snapEdge(clamp(-offsetX / scale, 0, sourceWidth), sourceWidth);
  const visibleY = snapEdge(clamp(-offsetY / scale, 0, sourceHeight), sourceHeight);
  const visibleRight = snapEdge(clamp((containerWidth - offsetX) / scale, 0, sourceWidth), sourceWidth);
  const visibleBottom = snapEdge(clamp((containerHeight - offsetY) / scale, 0, sourceHeight), sourceHeight);
  return Object.freeze({
    sourceWidth, sourceHeight, containerWidth, containerHeight, objectFit,
    objectPosition: Object.freeze(position), scale, renderedWidth, renderedHeight, offsetX, offsetY,
    visibleSource: Object.freeze({ x: visibleX, y: visibleY, width: visibleRight - visibleX, height: visibleBottom - visibleY }),
  });
}

export function projectSourceRect(sourceRect, geometry) {
  if (!geometry || !isSourceRect(sourceRect, geometry.sourceWidth, geometry.sourceHeight)) return null;
  const mapped = {
    x: geometry.offsetX + sourceRect.x * geometry.scale,
    y: geometry.offsetY + sourceRect.y * geometry.scale,
    width: sourceRect.width * geometry.scale,
    height: sourceRect.height * geometry.scale,
  };
  const left = clamp(mapped.x, 0, geometry.containerWidth);
  const top = clamp(mapped.y, 0, geometry.containerHeight);
  const right = clamp(mapped.x + mapped.width, 0, geometry.containerWidth);
  const bottom = clamp(mapped.y + mapped.height, 0, geometry.containerHeight);
  const visibleWidth = Math.max(0, right - left);
  const visibleHeight = Math.max(0, bottom - top);
  return Object.freeze({
    ...mapped,
    centerX: mapped.x + mapped.width / 2,
    centerY: mapped.y + mapped.height / 2,
    visible: Object.freeze({ x: left, y: top, width: visibleWidth, height: visibleHeight }),
    retainedArea: clamp((visibleWidth * visibleHeight) / (mapped.width * mapped.height), 0, 1),
  });
}

export function deriveInteractiveTarget(projected, containerWidth, containerHeight, minimumCssPixels = 44) {
  if (!projected || ![containerWidth, containerHeight, minimumCssPixels].every(finitePositive)) return null;
  const width = Math.min(containerWidth, Math.max(minimumCssPixels, projected.width));
  const height = Math.min(containerHeight, Math.max(minimumCssPixels, projected.height));
  const x = clamp(projected.centerX - width / 2, 0, containerWidth - width);
  const y = clamp(projected.centerY - height / 2, 0, containerHeight - height);
  return Object.freeze({
    x, y, width, height,
    contained: x >= 0 && y >= 0 && x + width <= containerWidth && y + height <= containerHeight,
  });
}

export function rectanglesOverlap(a, b) {
  return Boolean(a && b && a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y);
}

export function deriveResponsiveEvidence({
  viewport,
  sourceWidth = 3840,
  sourceHeight = 2160,
  relation,
  semanticTarget,
  essentialRects = [],
  protectedRects = [],
  objectFit = "cover",
  objectPosition = "50% 50%",
} = {}) {
  const world = getExpectedCanonicalWorldSize(viewport?.width, viewport?.height);
  if (!world || !isSourceRect(relation, sourceWidth, sourceHeight) || !isSourceRect(semanticTarget, sourceWidth, sourceHeight)) return null;
  if (![...essentialRects, ...protectedRects].every((entry) => isSourceRect(entry, sourceWidth, sourceHeight))) return null;
  const geometry = projectCoverGeometry({ sourceWidth, sourceHeight, containerWidth: world.width, containerHeight: world.height, objectFit, objectPosition });
  const relationProjection = projectSourceRect(relation, geometry);
  const semanticProjection = projectSourceRect(semanticTarget, geometry);
  const target = deriveInteractiveTarget(semanticProjection, world.width, world.height);
  const essential = essentialRects.map((entry) => projectSourceRect(entry, geometry));
  const protectedProjected = protectedRects.map((entry) => projectSourceRect(entry, geometry));
  return Object.freeze({
    viewport: Object.freeze({ width: viewport.width, height: viewport.height }),
    world,
    geometry,
    relation: relationProjection,
    semantic: semanticProjection,
    target,
    essentialCentersVisible: essential.every((entry) => entry.centerX >= 0 && entry.centerX <= world.width && entry.centerY >= 0 && entry.centerY <= world.height),
    semanticContainsPhysicalCenter: relationProjection.centerX >= target.x && relationProjection.centerX <= target.x + target.width && relationProjection.centerY >= target.y && relationProjection.centerY <= target.y + target.height,
    protectedOverlap: protectedProjected.filter((entry) => rectanglesOverlap(target, entry)).length,
  });
}
