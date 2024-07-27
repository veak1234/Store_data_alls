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
canvas.create_rectangle(10, 10, 100, 100, tags="rect", fill="red")
canvas.create_rectangle(110, 10, 200, 100, tags="rect", fill="blue")
canvas.create_rectangle(210, 10, 300, 100, tags="rect", fill="green")
canvas.create_rectangle(310, 10, 400, 100, tags="rect", fill="orange")
canvas.create_rectangle(410, 10, 500, 100, tags="rect", fill="purple")

def test(event):
    can = canvas.find_withtag('rect')
    for i in range(len(can)):
        canvas.itemconfigure(can[i], fill="pink")
    # canvas.itemconfigure(canvas.find_withtag('rect'), fill="pink")

canvas.bind("<Double 1>", test)

window.mainloop()