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

# Shape in row
canvas.create_rectangle(10, 10, 100, 100, fill="red")
canvas.create_rectangle(110, 10, 200, 100, fill="blue")
canvas.create_rectangle(210, 10, 300, 100, fill="green")
canvas.create_rectangle(310, 10, 400, 100, fill="orange")
canvas.create_rectangle(410, 10, 500, 100, fill="purple")

# Shape in column
canvas.create_rectangle(10, 10, 100, 100, fill="red")
canvas.create_rectangle(10, 110, 100, 200, fill="blue")
canvas.create_rectangle(10, 210, 100, 300, fill="green")
canvas.create_rectangle(10, 310, 100, 400, fill="orange")
canvas.create_rectangle(10, 410, 100, 500, fill="purple")

window.mainloop()