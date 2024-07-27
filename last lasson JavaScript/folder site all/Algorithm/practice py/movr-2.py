import tkinter as tk
window = tk.Tk()

window_width = 800
window_height = 600

window.title("Move Game")
window.resizable(0, 0)
#frame 
frame = tk.Frame(window)
frame.pack()

#canvas

canvas = tk.Canvas(frame, width =500, height = 350, bg="pink")
canvas.pack(pady=20)
shape_id = canvas.create_oval(250, 10, 300, 50, fill = "black")
canvas.create_rectangle(500, 320, 0, 340, fill = "red",tags='wall')

# move
def check_moveable():
    coord = canvas.coords(shape_id)
    walls = canvas.find_withtag("wall")
    overlap = canvas.find_overlapping(coord[0],coord[1],coord[2],coord[3])
    print(overlap)
    for wall in walls:
        if wall in overlap:
            return False
    return True

def gravity():
    if check_moveable():
        canvas.move(shape_id, 0, 10)
        window.after(50, gravity)

gravity()

window.bind("<Key>", gravity)


#buttons
window.mainloop()