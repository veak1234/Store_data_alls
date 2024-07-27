import tkinter as tk
from PIL import Image, ImageTk

window = tk.Tk()
window.title("Image Viewer")
window.geometry("600x500")

frame = tk.Frame(window, width=600, height=400)
frame.pack()

canvas = tk.Canvas(frame, width=600, height=400, bg="white")
canvas.pack(pady=20)

# Image 1
file_1 = Image.open('Mario.webp')
file_1_size = file_1.resize((50, 50))
img_1 = ImageTk.PhotoImage(file_1_size)
im_id=canvas.create_image(50, 50, image=img_1,)

def moveLeft(event):
    if canvas.coords(im_id)[0]>50:
        x=-10
        y=0
        canvas.move(im_id,x,y)

def moveRight(event):
    if canvas.coords(im_id)[0]<550:
        x=10
        y=0
        canvas.move(im_id,x,y)

def moveUp(event):
    if canvas.coords(im_id)[1]>50:
        x=0
        y=-10
        canvas.move(im_id,x,y)

def moveDown(event):
    if canvas.coords(im_id)[1]<370:
        x=0
        y=10
        canvas.move(im_id,x,y)

window.bind('<Left>',moveLeft)
window.bind('<Right>',moveRight)
window.bind('<Up>',moveUp)
window.bind('<Down>',moveDown)

window.mainloop()