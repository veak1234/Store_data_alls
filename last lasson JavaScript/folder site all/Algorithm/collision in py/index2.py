import tkinter as tk
from tkinter import*
from tkinter import colorchooser
def draw(event):

    x1 = event.x - width
    x2 = event.x + width
    y1 = event.y - width
    y2 = event.y + width
    canvas.create_oval(x1,y1,x2,y2,fill = color,outline = '')

window = tk.Tk()
window.geometry('900x600')
window.title('whiteboard')

color = 'pink'
width = 10

frame = tk.Frame(window,width = 900, height = 400)
frame.pack()
canvas = tk.Canvas(frame, width = 900,height = 400, bg = "white")
canvas.pack(pady = 30)

canvas.bind("<B1-Motion>", draw)

# color
def click():
    color = colorchooser.askcolor()
button = Button(text='click color' , command = click)
button.pack()

# button
btn = tk.Button(frame,text = "Backspace", command = '')
btn.pack()

tk.mainloop()