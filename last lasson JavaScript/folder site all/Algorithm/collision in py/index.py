

from tkinter import*

tk = Tk()
tk.title('AllTech - Bouncing ball')
tk.resizable(False,False)

WIDTH, HEIGHT= 400, 400
Canvas=Canvas(tk, width=WIDTH, height=HEIGHT)
Canvas.pack()

ball=Canvas.create_oval(20,20,60,60, fill='pink', outline='')

# move
xspeed = 3
yspeed= 3
def moveBall():
    global xspeed,yspeed
    Canvas.move(ball, xspeed,yspeed)
    (leftPos, topPos, rightPos, bottomPos)=Canvas.coords(ball)

    if leftPos <= 0 or rightPos >= WIDTH:
        xspeed = -xspeed
    if topPos <= 0 or bottomPos>= WIDTH:
        yspeed = -yspeed
    Canvas.after(30,moveBall)

Canvas.after(30,moveBall)
tk.mainloop()

