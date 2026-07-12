from pathlib import Path
import re
from PIL import Image,ImageOps
R=Path(__file__).resolve().parent
def ck(x,m):
 if not x: raise AssertionError(m)
 print('PASS:',m)
def main():
 n=Image.open(R/'client-boundaries-64x64.png'); d=Image.open(R/'qa/client-boundaries-2x-128x128.png'); g=Image.open(R/'qa/client-boundaries-grayscale-64x64.png'); iso=Image.open(R/'qa/station-isolation-2x-896x128.png')
 ck(n.mode=='RGBA' and n.size==(64,64),'native RGBA 64x64'); ck(d.size==(128,128) and d.tobytes()==n.resize((128,128),Image.Resampling.NEAREST).tobytes(),'exact nearest-neighbor 2x'); ck(g.mode=='L' and g.size==(64,64),'grayscale 64x64'); ck(iso.size==(896,128),'combined plus six isolation tiles')
 sm=iso.resize((448,64),Image.Resampling.NEAREST); tiles=[ImageOps.grayscale(sm.crop((i*64,0,(i+1)*64,64))).tobytes() for i in range(1,7)]; ck(len(set(tiles))==6,'six distinct grayscale stations')
 p=n.load(); A={(100,65,34),(171,117,54),(226,177,91)}; pts={(x,y) for y in range(64) for x in range(6,44) if p[x,y][:3] in A}; st=(6,18); seen={st}; q=[st]
 while q:
  x,y=q.pop()
  for z in ((x-1,y),(x+1,y),(x,y-1),(x,y+1)):
   if z in pts and z not in seen: seen.add(z); q.append(z)
 ck(all(z in seen for z in ((6,18),(20,18),(34,18),(34,44),(20,44),(6,44))),'connected rail reaches six station frames')
 V=(7,8,18); empty=sum(p[x,y][:3]==V for y in range(16,21) for x in range(23,26)); ck(empty>=10 and p[25,16][:3]!=V,'credential empty and keyed')
 cyan={(44,69,91),(76,112,130),(128,166,169)}; loop={(x,y) for y in range(27,35) for x in range(7,21) if p[x,y][:3] in cyan}; ck(len(loop)>35 and not any(x in (6,21) for x,y in loop),'mock evidence loop enclosed locally')
 violet={(117,73,151),(166,119,190)}; ck(any(p[x,y][:3] in violet for y in range(39,50) for x in range(2,5)) and all(p[5,y][:3] not in violet|A for y in range(40,49)),'fabricated success spur rejected')
 ck(all(p[x,44][:3]==(43,40,50) for x in range(48,51)) and p[56,46][:3]==(128,166,169),'external action blocked by lock')
 b=n.getbbox(); w=b[2]-b[0]; h=b[3]-b[1]; ck(w<=68 and h<=76 and 156+w<=360,f'{w}x{h} bounds fit target')
 bad=[]
 for md in (R/'README.md',R.parent/'README.md'):
  for l in re.findall(r'\[[^]]*\]\(([^)#]+)',md.read_text(encoding='utf-8')):
   if '://' not in l and not (md.parent/l).exists(): bad.append(l)
 ck(not bad,'local links resolve')
if __name__=='__main__': main()
