import tkinter as tk
window = tk.Tk()
window.geometry("600x500")
window.configure(bg="black")
window.title("App Title")
frame=tk.Frame(window,width=600,height=500, bg="red")
frame.pack()
canvas=tk.Canvas(frame,width=600, height=500, bg="pink")
canvas.pack()


canvas.create_rectangle(10,10,100,100,fill="blue")
canvas.create_rectangle(110,10,200,100,fill="blue")
canvas.create_rectangle(210,10,300,100,fill="blue")
canvas.create_rectangle(310,10,400,100,fill="blue")
canvas.create_rectangle(410,10,500,100,fill="blue")

canvas.create_rectangle(10,110,100,200,fill="blue")
canvas.create_rectangle(410,110,500,200,fill="blue")

canvas.create_rectangle(10,210,100,300,fill="blue")
canvas.create_rectangle(410,210,500,300,fill="blue")

canvas.create_oval(210,210,300,300,fill="blue")

canvas.create_rectangle(410,310,500,400,fill="blue")

canvas.create_rectangle(10,310,100,400,fill="blue")
canvas.create_rectangle(10,410,100,500,fill="blue")
canvas.create_rectangle(110,410,200,500,fill="blue")
canvas.create_rectangle(210,410,300,500,fill="blue")
canvas.create_rectangle(310,410,400,500,fill="blue")
canvas.create_rectangle(410,410,500,500,fill="blue")

# def change_color(event):
#     x=canvas.canvasx(event.x)
#     y=canvas.canvasy(event.y)
#     shape_id=canvas.find_closest(x,y)
#     print(shape_id)

# canvas.bind("<Button-1", change_color)

window.mainloop()