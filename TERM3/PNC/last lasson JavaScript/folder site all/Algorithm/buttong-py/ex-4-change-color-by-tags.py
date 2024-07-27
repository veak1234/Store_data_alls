import tkinter as tk

window = tk.Tk()
window.geometry("300x300")
window.title("Event 2")

frame = tk.Frame(window, width=300, height=300)
frame.pack()

canvas = tk.Canvas(frame, width=300, height=300)
canvas.pack()

# Shape
canvas.create_rectangle(10, 10, 100, 100, fill="green", tags="green")
canvas.create_rectangle(110, 10, 200, 100, fill="blue", tags="blue")

# Get Shape id with tags
print(canvas.find_withtag('green'))
print(canvas.find_withtag('blue'))

# Change color
canvas.itemconfig(canvas.find_withtag('green'), fill="red")
canvas.itemconfig(canvas.find_withtag('blue'), fill="yellow")

window.mainloop()