import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import { FIRST_RUN_RESPONSIVE_LAYOUTS,deriveResponsiveEvidence } from "../src/responsiveImageProjection.js";

const require=createRequire(import.meta.url);
const { chromium }=require("playwright");
const styles=await readFile(new URL("../src/styles.css",import.meta.url),"utf8");
const relation={x:1050,y:500,width:1740,height:1050};
const semanticTarget={x:1250,y:650,width:1400,height:750};
const browser=await chromium.launch({headless:true,executablePath:"C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",args:["--disable-gpu"]});
try {
  for(const [id,viewport] of Object.entries(FIRST_RUN_RESPONSIVE_LAYOUTS)){
    const context=await browser.newContext({viewport,forcedColors:id==="retained320x240"?"active":"none",reducedMotion:id==="effective200"?"reduce":"no-preference"});
    const page=await context.newPage();
    const evidence=deriveResponsiveEvidence({viewport,relation,semanticTarget});
    const hotspot={left:`${evidence.target.x/evidence.world.width*100}%`,top:`${evidence.target.y/evidence.world.height*100}%`,width:`${evidence.target.width/evidence.world.width*100}%`,height:`${evidence.target.height/evidence.world.height*100}%`};
    await page.setContent(`<style>${styles}</style><div class="canonical-game-host"><div class="crt-stage-anchor"><div class="crt-shell"><div class="canonical-game-frame" data-canonical-layout="${viewport.width<=719?"narrow":"canonical"}"><main class="game-shell adventure-screen" data-scene="ruins" data-terminal-open="false"><section class="scene-frame"><div class="scene-world-content"><img class="scene-art flooded-choir-art" alt="synthetic responsive fixture"><button class="hotspot hotspot-secondary" data-hotspot-id="flooded-choir" style="--hotspot-left:${hotspot.left};--hotspot-top:${hotspot.top};--hotspot-width:${hotspot.width};--hotspot-height:${hotspot.height};--hotspot-narrow-left:${hotspot.left};--hotspot-narrow-top:${hotspot.top};--hotspot-narrow-width:${hotspot.width};--hotspot-narrow-height:${hotspot.height}"><span>USE responsive fixture</span></button></div></section><section class="command-panel"></section></main></div></div></div></div>`);
    const actual=await page.evaluate(()=>{const world=document.querySelector(".scene-frame").getBoundingClientRect();const image=document.querySelector("img");const imageBox=image.getBoundingClientRect();const target=document.querySelector("button");target.focus();const targetBox=target.getBoundingClientRect();const imageStyle=getComputedStyle(image);const targetStyle=getComputedStyle(target);return{world:{x:world.x,y:world.y,width:world.width,height:world.height},image:{x:imageBox.x,y:imageBox.y,width:imageBox.width,height:imageBox.height},target:{x:targetBox.x,y:targetBox.y,width:targetBox.width,height:targetBox.height},objectFit:imageStyle.objectFit,objectPosition:imageStyle.objectPosition,outlineWidth:Number.parseFloat(targetStyle.outlineWidth)||0,active:document.activeElement===target,scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth};});
    assert.ok(Math.abs(actual.world.width-evidence.world.width)<1.1,`${id} world width actual=${actual.world.width} expected=${evidence.world.width}`);
    assert.ok(Math.abs(actual.world.height-evidence.world.height)<1.1,`${id} world height actual=${actual.world.height} expected=${evidence.world.height}`);
    assert.ok(Math.abs(actual.image.width-actual.world.width)<1.1 && Math.abs(actual.image.height-actual.world.height)<1.1,`${id} image fills world`);
    assert.equal(actual.objectFit,"cover");
    assert.ok(["50% 50%","50% 20%","70% 0%"].includes(actual.objectPosition),`${id} computed position ${actual.objectPosition}`);
    assert.ok(actual.target.width>=44 && actual.target.height>=44,`${id} target >=44`);
    assert.ok(actual.target.x>=actual.world.x-1 && actual.target.y>=actual.world.y-1 && actual.target.x+actual.target.width<=actual.world.x+actual.world.width+1 && actual.target.y+actual.target.height<=actual.world.y+actual.world.height+1,`${id} target contained`);
    assert.equal(actual.active,true);
    assert.ok(actual.outlineWidth>=2,`${id} visible focus`);
    assert.equal(actual.scrollWidth,actual.clientWidth,`${id} no horizontal escape`);
    await context.close();
  }
} finally { await browser.close(); }
console.log(`FLOODED_CHOIR_RESPONSIVE_BROWSER_PASS|layouts=${Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS).length}|forcedColors=1|reducedMotion=1`);
