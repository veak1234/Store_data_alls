import tkinter as tk

window = tk.Tk()
window.geometry("300x300")
window.title("Event 2")

frame = tk.Frame(window, width=300, height=300)
frame.pack()

canvas = tk.Canvas(frame)
canvas.pack()

# Shape
canvas.create_rectangle(10, 10, 100, 100, fill="green", tags="green")
canvas.create_rectangle(110, 10, 200, 100, fill="blue", tags="blue")

def change_color(event):
    # Change color of shape
    canvas.itemconfig(canvas.find_withtag('green'), fill="red")
    canvas.itemconfig(canvas.find_withtag('blue'), fill="yellow")

# Event handlers mouse left click
canvas.bind("<Button-1>", change_color)
window.mainloop()