import tkinter as tk
window = tk.Tk()

window.geometry("600x600")
window.title("Hello World")
frame=tk.Frame(window,width=600,height=500)
frame.pack()
canvas=tk.Canvas(frame,width=600,height=500)
canvas.pack()
arr=["red","blue","green","yellow"]
circle_id= canvas.create_rectangle(110,10,200,100,fill="white")
def changered():
    canvas.itemconfig(circle_id,fill="red")
def changegreen():
    canvas.itemconfig(circle_id,fill="green")

btn=tk.Button(frame,text="Red", command=changered)
btn.pack()
btn=tk.Button(frame,text="Green", command=changegreen)
btn.pack()

window.mainloop()
