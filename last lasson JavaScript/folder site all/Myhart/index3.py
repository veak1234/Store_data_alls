import turtle
from turtle import*

wn = Screen()
wn.bgcolor('black')
wn.title('VEAK')


t = turtle.Turtle()
t.pencolor('white')

def curve():
    for i in range(200):
        t.rt(1)
        t.fd(1)

def heart():
    t.fillcolor('red')
    t.begin_fill()
    t.lt(140)
    t.fd(113)
    curve()
    t.lt(120)
    curve()
    t.fd(112)
    t.end_fill()

heart()
t.ht()

def write(message,pos):
    x,y=pos
    t.penup()
    t.goto(x,y)
    t.color('pink')
    style=('Stencil Std' , 18 , 'italic')
    t.write(message,font=style)

write('I',(-90,95))
write('L',(-70,95))
write('O',(-53,95))
write('V',(-34,95))
write('E ',(-15,95))
write('Y',(8,95))
write('O',(25,95))
write('U ',(46,95))
write(' R',(60,95))
write('A',(85,95))

wn.mainloop()