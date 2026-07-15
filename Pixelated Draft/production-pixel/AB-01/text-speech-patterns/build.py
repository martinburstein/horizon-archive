from pathlib import Path
from PIL import Image,ImageDraw,ImageOps
R=Path(__file__).parent; P={'v':(7,8,18),'d':(15,17,27),'b':(43,40,50),'e':(88,76,78),'p':(166,119,190),'q':(117,73,151),'c':(128,166,169),'a':(171,117,54),'A':(100,65,34),'h':(226,177,91)}; C=[(10,18),(24,18),(38,18),(38,44),(24,44),(10,44)]
def motif(parts=range(6),full=True):
 im=Image.new('RGBA',(64,64));d=ImageDraw.Draw(im);d.polygon([(2,59),(4,8),(10,3),(53,3),(60,9),(62,59)],fill=P['d']);d.polygon([(5,56),(7,10),(12,7),(51,7),(58,11),(59,56)],fill=P['b'])
 if full:d.line([(14,18),(20,18)],fill=P['a']);d.line([(28,18),(34,18)],fill=P['a']);d.line([(42,18),(42,44)],fill=P['A'],width=2);d.line([(34,44),(28,44)],fill=P['a']);d.line([(20,44),(14,44)],fill=P['a'])
 for i in parts:
  x,y=C[i];d.rectangle((x-4,y-4,x+4,y+4),outline=P['A'],width=2)
  S=[[(x-3,y-2),(x+3,y-2),(x+1,y),(x+3,y+2),(x-3,y+2)],[(x-3,y),(x+2,y),(x,y-2),(x+2,y),(x,y+2)],[(x-3,y-2),(x,y),(x+3,y-2),(x+3,y+2)],[(x-3,y-2),(x+3,y-2),(x+3,y+2),(x-1,y+2)],[(x-3,y),(x-1,y-2),(x+1,y+2),(x+3,y)],[(x-3,y-2),(x,y),(x-3,y+2),(x+3,y+2)]];d.line(S[i],fill=P['c'] if i%2 else P['p'])
 if full:
  # reversible cancellation: two capped halves with a small reconnectable gap
  d.arc((20,49,34,61),180,340,fill=P['c'],width=2);d.arc((20,49,34,61),20,160,fill=P['c'],width=2);d.rectangle((33,54,35,56),fill=P['b'])
  # distinct disclosure and action locks
  for y in (31,45):d.line([(42,y),(47,y)],fill=P['c']);d.rectangle((48,y-3,50,y+3),fill=P['b']);d.rectangle((51,y-3,61,y+3),outline=P['q'],width=2);d.line([(54,y-3),(54,y-6),(56,y-8),(59,y-6),(59,y-3)],fill=P['c'])
 return im
def main():
 q=R/'qa';q.mkdir(exist_ok=True);a=motif();a.save(R/'text-speech-64x64.png');a.resize((128,128),Image.Resampling.NEAREST).save(q/'2x.png');ImageOps.grayscale(a).save(q/'gray.png');s=Image.new('RGB',(448,64),P['v']);s.paste(a,(0,0),a)
 for i in range(6):
  t=motif((i,),False);s.paste(t,((i+1)*64,0),t)
 s.resize((896,128),Image.Resampling.NEAREST).save(q/'isolation-2x.png')
if __name__=='__main__':main()
