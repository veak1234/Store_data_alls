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
player = canvas.create_rectangle(100, 150, 150, 200, fill="red", outline="red")

# Wall
canvas.create_rectangle(400, 100, 450, 250, fill="black", tags="PLATFORM")
canvas.create_rectangle(0, 400, window_width-100, window_height-100, fill="black", tags="PLATFORM")


# Check is moveable

def check_moveable(directionX, directionY, isGround=False):
    coordinator = canvas.coords(player)
    platforms = canvas.find_withtag("PLATFORM")

    if coordinator[0] + directionX < 0 or coordinator[2] + directionX > window_width - 100:
        return False
    if isGround:  
        overlap = canvas.find_overlapping(coordinator[0] + directionX, coordinator[1], coordinator[2] + directionX, coordinator[3])
    for platform in platforms:
        if platform in overlap:
            return False
    return True


# Move Player
def move_player(event):
    x = 0
    if event.keysym == "Left":
        x = -7
    if event.keysym == "Right":
        x = 7
    if check_moveable(x):
        canvas.move(player, x, 0)

window.bind("<Key>", move_player)

window.mainloop()