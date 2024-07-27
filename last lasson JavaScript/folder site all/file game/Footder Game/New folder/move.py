
import tkinter as tk

window = tk.Tk()
window.title("Image Viewer")
window.geometry("600x400")

# Frame
frame = tk.Frame(window, width=600, height=400)
frame.pack()

# Canvas
canvas = tk.Canvas(frame, width=600, height=400)
canvas.pack()

red_id=canvas.create_oval(60,60,100,100, tags="rectangle")

def moveUp():
        canvas.move(red_id, 0, -10)
def moveDown():
    if canvas.coords(red_id)[3] < 390:
        canvas.move(red_id, 0, 10)
def moveLeft():
        canvas.move(red_id,-10,0)
def moveRight():   
        canvas.move(red_id, 10, 0)


def change_color(event):
    if event.keysym=="Up":
        moveUp()
    elif event.keysym=="Down":
        moveDown()
    elif event.keysym=="Left":
        moveLeft()        
    elif event.keysym=="Right":
        moveRight()

window.bind("<Key>", change_color)

window.mainloop()