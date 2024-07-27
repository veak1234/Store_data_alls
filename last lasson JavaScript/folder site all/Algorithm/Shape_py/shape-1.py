import tkinter as tk
window = tk.Tk()
window.geometry("500x500")
window.title("Draw Shape")
# Frame
frame = tk.Frame(window, width=500, height=500)
frame.pack()

# Canvas
canvas = tk.Canvas(frame, width=500, height=500)
canvas.pack()

# Shape
canvas.create_rectangle(10, 10, 100, 100, fill="red")

window.mainloop()