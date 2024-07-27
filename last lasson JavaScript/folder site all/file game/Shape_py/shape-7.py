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

# Shape in row top
canvas.create_rectangle(10, 10, 100, 100, fill="red")
canvas.create_rectangle(110, 10, 200, 100, fill="blue")
canvas.create_rectangle(210, 10, 300, 100, fill="green")
canvas.create_rectangle(310, 10, 400, 100, fill="orange")
canvas.create_rectangle(410, 10, 500, 100, fill="purple")

# Shape in column left
canvas.create_rectangle(10, 10, 100, 100, fill="red")
canvas.create_rectangle(10, 110, 100, 200, fill="blue")
canvas.create_rectangle(10, 210, 100, 300, fill="green")
canvas.create_rectangle(10, 310, 100, 400, fill="orange")
canvas.create_rectangle(10, 410, 100, 500, fill="purple")

# Shape in row bottom
canvas.create_rectangle(110, 410, 200, 500, fill="red")
canvas.create_rectangle(210, 410, 300, 500, fill="blue")
canvas.create_rectangle(310, 410, 400, 500, fill="green")
canvas.create_rectangle(410, 410, 500, 500, fill="orange")

# Shape in column right
canvas.create_rectangle(410, 310, 500, 400, fill="red")
canvas.create_rectangle(410, 210, 500, 300, fill="green")
canvas.create_rectangle(410, 110, 500, 200, fill="orange")

# Shape in center box
canvas.create_oval(210, 210, 300, 300, fill="black")

def test(event):
    x = canvas.canvasx(event.x)
    y = canvas.canvasy(event.y)
    item = canvas.find_closest(x, y)
    print(item)
    canvas.itemconfigure(item, fill="pink")

canvas.bind("<Double 1>", test)

window.mainloop()