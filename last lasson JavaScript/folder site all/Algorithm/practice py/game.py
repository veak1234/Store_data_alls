
import tkinter as tk

window = tk.Tk()
window.geometry("800x500")
window.title("Move Shape")
window.resizable(False, False)

# frame 
frame = tk.Frame(window)
frame.pack()

# canvas
canvas = tk.Canvas(frame, width=700, height=400, bg="white")
canvas.pack(pady=20)

shape_id = canvas.create_rectangle(0, 0, 50, 50, fill="black", outline="")

def is_border_left():
    return canvas.coords(shape_id)[0] == 0

def is_border_right():
    return canvas.coords(shape_id)[2] == 700

def is_border_top():
    return canvas.coords(shape_id)[1] == 0

def is_border_bottom():
    return canvas.coords(shape_id)[3] == 400

def move_shape(event):
    if event.keysym == "Left" and not is_border_left():
        canvas.move(shape_id, -5, 0)
    elif event.keysym == "Right" and not is_border_right():
        canvas.move(shape_id, 5, 0)
    elif event.keysym == "Up" and not is_border_top():
        canvas.move(shape_id, 0, -5)
    elif event.keysym == "Down" and not is_border_bottom():
        canvas.move(shape_id, 0, 5)

window.bind("<Key>", move_shape)
window.mainloop()