from pathlib import Path
from PIL import Image,ImageDraw,ImageOps
R=Path(__file__).resolve().parent; P={'v':(7,8,18),'d':(15,17,27),'b':(43,40,50),'e':(88,76,78),'p':(166,119,190),'q':(117,73,151),'c':(128,166,169),'a':(171,117,54),'A':(100,65,34),'h':(226,177,91)}
C=[(10,18),(24,18),(38,18),(38,44),(24,44),(10,44)]
def base(d): d.polygon([(2,59),(4,8),(10,3),(53,3),(60,9),(62,59)],fill=P['d']); d.polygon([(5,56),(7,10),(12,7),(51,7),(58,11),(59,56)],fill=P['b'])
def frame(d,x,y): d.rectangle((x-4,y-4,x+4,y+4),outline=P['A'],width=2)
def stage(d,i,x,y):
 frame(d,x,y)
 shapes=[[(x-3,y),(x-1,y+2),(x+3,y-2)],[(x-3,y-2),(x+2,y-2),(x+2,y+2)],[(x-3,y-2),(x+3,y-2),(x+3,y+2),(x-3,y+2)],[(x-3,y+2),(x,y-2),(x+3,y+2)],[(x-3,y-2),(x+3,y+2),(x,y),(x+3,y-2)],[(x-3,y),(x+2,y),(x,y-2),(x+2,y),(x,y+2)]]
 d.line(shapes[i],fill=P['c'] if i%2==0 else P['p'],width=1)
 if i==2: d.rectangle((x-1,y-3,x+1,y+3),fill=P['v']); d.point((x+1,y-2),fill=P['q']) # keyed least-privilege shutters
def rail(d):
 d.line([(14,18),(20,18)],fill=P['a']); d.line([(28,18),(34,18)],fill=P['a']); d.line([(42,18),(42,44)],fill=P['A'],width=2); d.line([(34,44),(28,44)],fill=P['a']); d.line([(20,44),(14,44)],fill=P['a'])
def extras(d):
 # Denial/timed-out path ends incomplete below test.
 d.line([(38,48),(38,52),(34,55)],fill=P['q'],width=2); d.rectangle((31,54,33,57),fill=P['b'])
 # Fabricated success fractures before the client-flow station.
 d.line([(2,40),(4,44),(2,48)],fill=P['p'],width=2); d.rectangle((5,40,5,48),fill=P['b'])
 # External action is outside a solid lock boundary.
 d.line([(42,44),(47,44)],fill=P['c']); d.rectangle((48,40,50,48),fill=P['b']); d.rectangle((51,42,61,50),outline=P['q'],width=2); d.line([(54,42),(54,39),(56,37),(59,39),(59,42)],fill=P['c'],width=2)
def motif(parts=range(6),full=True):
 im=Image.new('RGBA',(64,64),(0,0,0,0)); d=ImageDraw.Draw(im); base(d)
 if full: rail(d)
 for i in parts: stage(d,i,*C[i])
 if full: extras(d)
 return im
def main():
 q=R/'qa';q.mkdir(exist_ok=True);a=motif();a.save(R/'single-agent-64x64.png');a.resize((128,128),Image.Resampling.NEAREST).save(q/'single-agent-2x.png');ImageOps.grayscale(a).save(q/'single-agent-gray.png');s=Image.new('RGB',(448,64),P['v']);s.paste(a,(0,0),a)
 for i in range(6):
  t=motif((i,),False);s.paste(t,((i+1)*64,0),t)
 s.resize((896,128),Image.Resampling.NEAREST).save(q/'station-isolation-2x.png')
if __name__=='__main__':main()
