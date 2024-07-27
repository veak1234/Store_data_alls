import tkinter as tk

# Window size
window_width = 800
window_height = 600

window = tk.Tk()
window.geometry(str(window_width) + "x" + str(window_height))
window.resizable(0, 0)
window.title("Move Shape")

#Frame container
frame_container = tk.Frame(window, width=window_width, height=window_height)
frame_container.pack()

# Canvas
canvas = tk.Canvas(frame_container, width=window_width-100, height=window_height-100, bg="white")
canvas.pack(pady=20)

# Player
player = canvas.create_rectangle(100, 150, 150, 200, fill="red", outline="")


# check if player near border left
def check_border_left():
    return canvas.coords(player)[0] > 5

# check if player near border right
def check_border_right():
    return canvas.coords(player)[2] < window_width - 103

# Move Player
def move_player(event):
    if event.keysym == "Left" and  check_border_left():
        x = -10
        y = 0
        canvas.move(player, x, y)
    elif event.keysym == "Right" and  check_border_right():
        x = 10
        y = 0
        canvas.move(player, x, y)


window.bind("<Key>", move_player)

window.mainloop()