import tkinter as tk
window = tk.Tk()
window.geometry("600x600")
window.configure(bg="black")
window.title("App Title")
frame=tk.Frame(window,width=600,height=600, bg="red")
frame.pack()
canvas=tk.Canvas(frame,width=600, height=600, bg="pink")
canvas.pack()

# ///////////////////////////////
# canvas.create_oval(510,10,600,100,fill="blue")
# canvas.create_oval(410,110,500,200,fill="blue")
# canvas.create_oval(310,210,400,300,fill="blue")
# canvas.create_oval(210,310,300,400,fill="blue")
# canvas.create_oval(110,410,200,500,fill="blue")
# canvas.create_oval(10,510,100,600,fill="blue")
# canvas.create_oval(10,10,100,100,fill="skyblue")
# canvas.create_oval(110,110,200,200,fill="skyblue")
# canvas.create_oval(210,210,300,300,fill="skyblue")
# canvas.create_oval(310,310,400,400,fill="skyblue")
# canvas.create_oval(410,410,500,500,fill="skyblue")
# canvas.create_oval(510,510,600,600,fill="skyblue")
# ///////////////////////////

# ////////////////////////////
# squre_id = canvas.create_rectangle(500,100,550,700, fill="skyblue")
# squre_id = canvas.create_rectangle(400,200,450,600, fill="skyblue")
# squre_id = canvas.create_rectangle(300,400,350,600, fill="skyblue")
# squre_id = canvas.create_rectangle(200,500,250,600, fill="skyblue")
# squre_id = canvas.create_rectangle(100,100,150,600, fill="skyblue")
# /////////////////////////////

# homework
# //////////////////////////
squre_id = canvas.create_rectangle(10,550,70,600, fill="skyblue")
squre_id = canvas.create_rectangle(90,500,150,600, fill="skyblue")
squre_id = canvas.create_rectangle(180,420,230,500, fill="skyblue")
squre_id = canvas.create_rectangle(500,200,450,600, fill="skyblue")
squre_id = canvas.create_oval(20,520,50,550, fill="red")
squre_id = canvas.create_rectangle(250,400,340,380,fill="skyblue")
squre_id = canvas.create_rectangle(360,290,390,370,fill="skyblue")
squre_id = canvas.create_rectangle(250,230,350,250,fill="skyblue")
squre_id = canvas.create_rectangle(400,260,440,270,fill="blue")


window.mainloop()