
import tkinter as tk

from PIL import Image, ImageTk
window=tk.Tk()
window.title("Image Viewer")
window.geometry("600x400")

# Frame
frame=tk.Frame(window,width=600,height=400)
frame.pack()

getImageFile=Image.open("wall.jpg")
img=ImageTk.PhotoImage(getImageFile)


# canvas
label=tk.Label(frame,image=img)
label.pack()


window.mainloop()