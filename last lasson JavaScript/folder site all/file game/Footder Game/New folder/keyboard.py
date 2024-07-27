import tkinter as tk

window = tk.Tk()
window.title("Image Viewer")
window.geometry("600x400")

# Frame
frame = tk.Frame(window, width=600, height=400)
frame.pack()

# Canvas
canvas = tk.Canvas(frame, width=600, height=400)
canvas.pack()

canvas.create_rectangle(10,10,100,100, tags="rectangle")
# canvas.itemconfigure(canvas.find_withtag('rectagle'),fill='red')

def change_color(event):
    if event.keysym=="Up":
        canvas.itemconfigure(canvas.find_withtag('rectangle'),fill='red')

window.bind("<Key>", change_color)



window.mainloop()