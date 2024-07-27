import tkinter as tk
window = tk.Tk()
window.geometry("500x500")
window.title("Draw Shape")
# Frame
frame = tk.Frame(window, width=500, height=500)
frame.pack()

# Canvas
canvas = tk.Canvas(frame)
canvas.pack()

# Shape in row top
canvas.create_oval(10, 10, 100, 100, tags="rect", fill="red")
canvas.create_oval(110, 10, 200, 100, tags="rect", fill="blue")
canvas.create_oval(210, 10, 300, 100, tags="rect", fill="green")

def change_color():
    can = canvas.find_withtag('rect')
    for i in range(len(can)):
        canvas.itemconfigure(can[i], fill="pink")

button = tk.Button(frame, text="change color", command=change_color)
button.pack()
window.mainloop()