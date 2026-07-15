"""Build the AB-01 Client Boundaries motif."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageOps
ROOT=Path(__file__).resolve().parent
P={"void":(7,8,18),"deep":(15,17,27),"body":(43,40,50),"edge":(88,76,78),
   "v0":(45,27,70),"v2":(117,73,151),"v3":(166,119,190),
   "c0":(44,69,91),"c1":(76,112,130),"c2":(128,166,169),
   "a0":(100,65,34),"a1":(171,117,54),"a2":(226,177,91)}
C=[(10,18),(24,18),(38,18),(38,44),(24,44),(10,44)]

def plate(d):
 d.polygon([(2,59),(4,8),(10,3),(53,3),(60,9),(62,59)],fill=P["deep"])
 d.polygon([(5,56),(7,10),(12,7),(51,7),(58,11),(59,56)],fill=P["body"])
 d.rectangle((7,57,57,61),fill=P["deep"]); d.rectangle((18,56,46,57),fill=P["edge"])
def frame(d,x,y):
 d.rectangle((x-4,y-4,x+4,y+4),outline=P["a0"],width=2)
 d.point((x-4,y),fill=P["a1"]); d.point((x+4,y),fill=P["a1"])
def endpoint(d,x,y):
 frame(d,x,y); d.line([(x-2,y-2),(x+2,y-2),(x+2,y),(x,y+2),(x-2,y)],fill=P["c2"])
def credential(d,x,y):
 frame(d,x,y); d.rectangle((x-2,y-3,x+2,y+3),outline=P["v3"])
 d.rectangle((x-1,y-2,x+1,y+2),fill=P["void"]); d.rectangle((x+1,y-3,x+3,y-1),fill=P["body"]); d.point((x+1,y-2),fill=P["v2"])
def deployment(d,x,y):
 frame(d,x,y); d.rectangle((x-2,y-2,x+2,y+1),outline=P["c2"]); d.rectangle((x-1,y+2,x+3,y+3),fill=P["c0"])
def client(d,x,y):
 frame(d,x,y); d.line([(x-3,y-2),(x,y-2),(x,y+2),(x+3,y+2)],fill=P["v3"],width=2); d.point((x+2,y-1),fill=P["c2"])
def request(d,x,y):
 frame(d,x,y); d.line([(x-3,y),(x+2,y),(x,y-2),(x+2,y),(x,y+2)],fill=P["c2"])
def response(d,x,y):
 frame(d,x,y); d.line([(x+3,y),(x-2,y),(x,y-2),(x-2,y),(x,y+2)],fill=P["v3"])
ST=[endpoint,credential,deployment,client,request,response]
def rail(d):
 for a,b in ((14,20),(28,34)): d.line([(a,18),(b,18)],fill=P["a1"])
 d.line([(42,18),(42,44)],fill=P["a0"],width=2)
 for a,b in ((34,28),(20,14)): d.line([(a,44),(b,44)],fill=P["a1"])
 for x in (17,31): d.line([(x-1,17),(x,18),(x-1,19)],fill=P["a2"])
 d.line([(41,31),(42,32),(43,31)],fill=P["a2"])
 for x in (31,17): d.line([(x+1,43),(x,44),(x+1,45)],fill=P["a2"])
def mock_loop(d):
 # Closed local-only evidence circuit: no external branch.
 d.rectangle((7,27,20,34),outline=P["c0"],width=2); d.rectangle((10,29,17,32),outline=P["c2"])
 d.point((13,27),fill=P["c2"]); d.point((17,34),fill=P["c1"])
def rejected_success(d):
 d.line([(2,40),(4,44),(2,48)],fill=P["v3"],width=2); d.rectangle((5,40,5,48),fill=P["body"])
def locked_action(d):
 d.line([(42,44),(47,44)],fill=P["c2"]); d.rectangle((48,40,50,48),fill=P["body"])
 d.rectangle((51,42,61,50),outline=P["v2"],width=2)
 d.line([(54,42),(54,39),(56,37),(59,39),(59,42)],fill=P["c2"],width=2)
 d.rectangle((54,45,58,48),fill=P["v0"]); d.point((56,46),fill=P["c2"])
def motif(parts=range(6),extras=True,include_rail=True):
 im=Image.new("RGBA",(64,64),(0,0,0,0)); d=ImageDraw.Draw(im); plate(d)
 if include_rail: rail(d)
 for i in parts: ST[i](d,*C[i])
 if extras: mock_loop(d); rejected_success(d); locked_action(d)
 return im
def main():
 q=ROOT/'qa'; q.mkdir(parents=True,exist_ok=True); a=motif(); a.save(ROOT/'client-boundaries-64x64.png',optimize=False)
 a.resize((128,128),Image.Resampling.NEAREST).save(q/'client-boundaries-2x-128x128.png',optimize=False)
 ImageOps.grayscale(a).save(q/'client-boundaries-grayscale-64x64.png',optimize=False)
 s=Image.new('RGB',(448,64),P['void']); s.paste(a,(0,0),a)
 for i in range(6):
  t=motif((i,),extras=False,include_rail=False); s.paste(t,((i+1)*64,0),t)
 s.resize((896,128),Image.Resampling.NEAREST).save(q/'station-isolation-2x-896x128.png',optimize=False)
if __name__=='__main__': main()
