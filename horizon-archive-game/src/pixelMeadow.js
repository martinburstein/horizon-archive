export const MEADOW_LOGICAL_SIZE = Object.freeze({ width: 320, height: 180 });

export const MEADOW_PIXEL_HOTSPOTS = Object.freeze({
  primary: Object.freeze({ left: "45.9375%", top: "53.0556%", width: "18.75%", height: "37.7778%" }),
  routeMarker: Object.freeze({ left: "77.0313%", top: "53.3333%", width: "21.5625%", height: "46.3889%" }),
});

const palette = Object.freeze({
  sky0: "#111126", sky1: "#1d1a38", sky2: "#302552", dusk: "#67415d",
  peach: "#bf7667", star: "#d7ced6", mountain: "#24203c", mountainNear: "#17172c",
  ground: "#101422", ground2: "#172033", path: "#303044", pathLight: "#51445b",
  crystalDark: "#30334c", crystal: "#6d6d91", crystalLight: "#c0bad0",
  locked: "#26283a", awake: "#e1d7b4", complete: "#f1e6c5", violet: "#9275bd",
  ship: "#343b49", shipLight: "#78808a", amber: "#c88b4b", black: "#080a11",
});

function rect(plan, x, y, width, height, color, tag = "world") {
  plan.push({ x, y, width, height, color, tag });
}

function steppedColumn(plan, x, y, widths, color, tag) {
  widths.forEach((width, index) => rect(plan, x - Math.floor(width / 2), y + index * 3, width, 3, color, tag));
}

export function buildMeadowPixelPlan({ petalState = "locked", routeState = "locked" } = {}) {
  const plan = [];
  rect(plan, 0, 0, 320, 36, palette.sky0);
  rect(plan, 0, 36, 320, 38, palette.sky1);
  rect(plan, 0, 74, 320, 30, palette.sky2);
  rect(plan, 0, 96, 320, 18, palette.dusk);
  rect(plan, 0, 106, 320, 8, palette.peach);

  [[14,18],[41,31],[73,15],[104,48],[142,22],[183,39],[215,14],[272,35],[302,20],[250,57],[91,67]].forEach(([x,y]) => rect(plan, x, y, 1, 1, palette.star));
  [12,18,22,24,22,18,12].forEach((width, row) => rect(plan, 246 - Math.floor(width / 2), 19 + row * 2, width, 2, row < 2 ? palette.star : "#a59bb9"));
  [6,10,12,10,6].forEach((width, row) => rect(plan, 282 - Math.floor(width / 2), 44 + row * 2, width, 2, "#857d9d"));

  [[0,94,18,20],[14,86,20,28],[31,98,28,16],[55,82,22,32],[74,91,30,23],[97,77,24,37],[210,88,26,26],[232,77,22,37],[252,91,28,23],[276,80,20,34],[294,93,26,21]].forEach(([x,y,w,h]) => rect(plan,x,y,w,h,palette.mountain));
  [[0,108,42,18],[35,102,38,24],[68,109,46,17],[196,105,45,21],[236,100,44,26],[274,107,46,19]].forEach(([x,y,w,h]) => rect(plan,x,y,w,h,palette.mountainNear));
  rect(plan, 0, 114, 320, 66, palette.ground);
  rect(plan, 0, 139, 320, 41, palette.ground2);

  [[180,60,25,16],[170,76,22,16],[160,92,20,16],[151,108,17,16],[143,124,14,16],[136,140,11,16],[130,156,8,16],[125,172,6,8]].forEach(([x,y,w,h]) => rect(plan, x, y, w, h, palette.path));
  [[159,103,16],[151,119,14],[144,134,12],[137,148,10],[131,161,8],[126,173,7]].forEach(([y,x,w]) => rect(plan, x, y, w, 2, palette.pathLight));

  rect(plan, 18, 112, 48, 18, palette.ship);
  rect(plan, 27, 104, 28, 8, palette.shipLight);
  rect(plan, 34, 100, 14, 5, palette.black);
  rect(plan, 14, 126, 58, 5, palette.black);
  rect(plan, 22, 131, 5, 7, palette.amber);
  rect(plan, 57, 131, 5, 7, palette.amber);

  for (let x = 8; x < 312; x += 19) {
    const y = 142 + ((x * 7) % 25);
    rect(plan, x, y, 2, 7, palette.crystalDark);
    rect(plan, x - 2, y + 2, 2, 4, palette.crystal);
    rect(plan, x + 2, y + 1, 2, 5, palette.crystalLight);
  }

  // Petal Terminal: deliberately authored stepped clusters, never sampled from concept art.
  rect(plan, 139, 111, 42, 34, palette.crystalDark, "petal-body");
  rect(plan, 145, 118, 30, 22, palette.black, "petal-core");
  steppedColumn(plan, 132, 46, [5,9,13,17,21,17,13,9], palette.crystal, "petal-left");
  steppedColumn(plan, 146, 38, [4,8,12,16,20,16,12,8,4], palette.crystalLight, "petal-left-center");
  steppedColumn(plan, 160, 34, [4,8,12,16,20,16,12,8,4], palette.crystal, "petal-center");
  steppedColumn(plan, 174, 40, [4,8,12,16,20,16,12,8], palette.crystalLight, "petal-right-center");
  steppedColumn(plan, 188, 49, [5,9,13,17,21,17,13], palette.crystal, "petal-right");
  rect(plan, 124, 104, 72, 5, palette.crystalLight, "petal-crown");

  if (petalState === "locked") {
    rect(plan, 154, 123, 12, 4, palette.locked, "petal-locked-bar");
    rect(plan, 158, 119, 4, 12, palette.locked, "petal-locked-cross");
  } else {
    rect(plan, 153, 119, 14, 14, petalState === "completed" ? palette.complete : palette.awake, `petal-${petalState}-core`);
    rect(plan, 149, 116, 22, 2, palette.crystalLight, `petal-${petalState}-ring`);
    if (petalState === "completed") {
      rect(plan, 154, 125, 4, 4, palette.black, "petal-complete-step-a");
      rect(plan, 158, 129, 4, 4, palette.black, "petal-complete-step-b");
      rect(plan, 162, 121, 4, 12, palette.black, "petal-complete-step-c");
    }
  }

  // Separate three-fin Route Marker.
  rect(plan, 247, 123, 34, 27, palette.crystalDark, "route-body");
  steppedColumn(plan, 253, 91, [4,8,12,10,8], palette.crystal, "route-fin-left");
  steppedColumn(plan, 264, 85, [4,8,12,10,8,6], palette.crystalLight, "route-fin-center");
  steppedColumn(plan, 275, 92, [4,8,12,10,8], palette.crystal, "route-fin-right");
  rect(plan, 257, 115, 14, 10, palette.black, "route-core");
  if (routeState === "locked") {
    rect(plan, 251, 136, 26, 4, palette.locked, "route-locked-groove");
    rect(plan, 262, 116, 4, 8, palette.locked, "route-locked-notch");
  } else {
    rect(plan, 258, 116, 12, 8, routeState === "completed" ? palette.complete : palette.awake, `route-${routeState}-core`);
    rect(plan, 251, 136, routeState === "completed" ? 26 : 16, 4, palette.violet, `route-${routeState}-groove`);
    if (routeState === "completed") {
      rect(plan, 271, 132, 4, 4, palette.complete, "route-complete-step-a");
      rect(plan, 275, 128, 4, 4, palette.complete, "route-complete-step-b");
    }
  }
  return plan;
}

export function configurePixelContext(context) {
  context.imageSmoothingEnabled = false;
  return context;
}

export function drawMeadowPixelScene(canvas, states) {
  const context = configurePixelContext(canvas.getContext("2d"));
  context.clearRect(0, 0, MEADOW_LOGICAL_SIZE.width, MEADOW_LOGICAL_SIZE.height);
  for (const command of buildMeadowPixelPlan(states)) {
    context.fillStyle = command.color;
    context.fillRect(command.x, command.y, command.width, command.height);
  }
}

export function getIntegerPixelStage(frameWidth, frameHeight) {
  const scale = Math.max(1, Math.floor(Math.min(frameWidth / MEADOW_LOGICAL_SIZE.width, frameHeight / MEADOW_LOGICAL_SIZE.height)));
  return { scale, width: MEADOW_LOGICAL_SIZE.width * scale, height: MEADOW_LOGICAL_SIZE.height * scale };
}
