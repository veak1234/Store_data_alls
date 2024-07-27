from tkinter import *
from PIL import ImageTk, Image  

app = Tk()
img =Image.open('wall.jpg')
bg = ImageTk.PhotoImage(img)

app.geometry("650x450")

# Add image
label = Label(app, image=bg)
label.place(x = 0,y = 0)

# Execute tkinter
app.mainloop()