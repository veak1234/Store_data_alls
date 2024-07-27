import tkinter as tk

window = tk.Tk()
window.geometry("300x300")
window.title("Event 2")

frame = tk.Frame(window, width=300, height=300)
frame.pack()

canvas = tk.Canvas(frame)
canvas.pack()

# Shape
green_id = canvas.create_rectangle(10, 10, 100, 100, fill="green", tags="green")
blue_id = canvas.create_rectangle(110, 10, 200, 100, fill="blue", tags="blue")

def change_color():
    # Change color of shape
    canvas.itemconfig(green_id, fill="red")
    canvas.itemconfig(blue_id, fill="yellow")

# Button
button = tk.Button(frame, text="Change Color", command=change_color)
button.pack()


window.mainloop()