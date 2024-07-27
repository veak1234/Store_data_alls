import tkinter as tk
window = tk.Tk()
window.geometry("600x500")
window.title("App Title")
        
frame=tk.Frame(window,width=600,height=500, bg="red")
frame.pack()
canvas=tk.Canvas(frame,width=600, height=500)
canvas.pack()

for i in range(1,10):
    for j in range(1,10):
        canvas.create_rectangle(10+i*100,10+j*100,100+i*100,100+j*100,fill="pink")
print(canvas)

window.mainloop()