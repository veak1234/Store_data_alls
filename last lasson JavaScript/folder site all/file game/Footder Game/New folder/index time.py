import tkinter as tk
import time
from PIL import Image, ImageTk

window = tk.Tk()
window.title("Game")
window.geometry("600x500")

frame = tk.Frame(window, width=600, height=400)
frame.pack()

canvas = tk.Canvas(frame, width=600, height=500, bg="pink")
canvas.pack()

# size
time_id=canvas.create_text(300,230,text="",font=("bold",80))


# time
def clock():
    hour=time.strftime("%H:%M:%S")
    canvas.itemconfigure(time_id,text=hour)

def updaeTime():
    clock()
    window.after(1000,updaeTime)

window.after(1000,updaeTime)


window.mainloop()