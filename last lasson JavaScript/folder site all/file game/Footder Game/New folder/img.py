import tkinter as tk
import time
from PIL import Image, ImageTk

window = tk.Tk()
window.title("Game")
window.geometry("600x500")

frame = tk.Frame(window, width=600, height=400)
frame.pack()

canvas = tk.Canvas(frame, width=600, height=500)
canvas.pack()

# Image 1
file_1 = Image.open('Mario.webp')
file_1_size = file_1.resize((70, 70))
img_1 = ImageTk.PhotoImage(file_1_size)
shape_id = canvas.create_image(70, 70, image=img_1)

# style link to style

def Left():
    x=-10
    y=0
    canvas.move(shape_id,x,y)
def Right():
    x=10
    y=0
    canvas.move(shape_id,x,y)
def Up():
    x=0
    y=-10
    canvas.move(shape_id,x,y)
def Down():
    x=0
    y=10
    canvas.move(shape_id,x,y)

# style
def moveLeft(event):
    Left()
def moveRight(event):
    Right()
def moveUp(event):
    Up()
def moveDown(event):
    Down()

# text
canvas.create_text( 290, 20, text = "Game Welcome to you") 

# size time
time_id=canvas.create_text(290,50,text="",font=("bold",20))

# time
def clock():
    hour=time.strftime("%H:%M:%S")
    canvas.itemconfigure(time_id,text=hour)

def updaeTime():
    clock()
    window.after(1000,updaeTime)

window.after(1000,updaeTime)

# key
window.bind("<Left>", moveLeft)
window.bind("<Right>", moveRight)
window.bind("<Up>", moveUp)
window.bind("<Down>", moveDown)

window.mainloop()