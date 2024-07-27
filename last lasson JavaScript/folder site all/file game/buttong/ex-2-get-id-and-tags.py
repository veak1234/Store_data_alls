import tkinter as tk

window = tk.Tk()
window.geometry("300x300")
window.title("Event 2")

frame = tk.Frame(window, width=300, height=300)
frame.pack()

canvas = tk.Canvas(frame, width=300, height=300)
canvas.pack()

# Shape
shape_id_one = canvas.create_rectangle(10, 10, 100, 100, fill="green", tags="green")
shape_id_two = canvas.create_rectangle(110, 10, 200, 100, fill="blue", tags="blue")

# Get Shape Id
print("Shape Id 1: " + str(shape_id_one))
print("Shape Id 2: " + str(shape_id_two))

# Get Shape id with tags
print(canvas.find_withtag('green'))
print(canvas.find_withtag('blue'))

window.mainloop()