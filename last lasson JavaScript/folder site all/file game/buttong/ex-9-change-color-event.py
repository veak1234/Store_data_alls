import tkinter as tk

window = tk.Tk()
window.geometry("300x300")
window.title("Event 2")

frame = tk.Frame(window, width=300, height=300)
frame.pack()

canvas = tk.Canvas(frame)
canvas.pack()

# Shape
canvas.create_rectangle(10, 10, 100, 100)
canvas.create_rectangle(110, 10, 200, 100)

def change_color(event):
    # Change color of shape
    x = canvas.canvasx(event.x)
    y = canvas.canvasy(event.y)
    shape_ids = canvas.find_closest(x, y)
    canvas.itemconfig(shape_ids, fill="orange")

# Event handlers mouse left click
canvas.bind("<Button-1>", change_color)
window.mainloop()