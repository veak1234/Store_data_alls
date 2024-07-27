
import tkinter as tk
from PIL import Image, ImageTk


# ------------- Constants ---------------------
SCREEN_WIDTH = 1536
SCREEN_HEIGHT = 700

GRAVITY_FORCE = 9
JUMP_FORCE = 30
SPEED = 7

TIMED_LOOP = 10

# ------------- Variables ---------------------
keyPressed = []

# ------------- Window ------------------------



window = tk.Tk()
window.geometry(str(SCREEN_WIDTH) + "x" + str(SCREEN_HEIGHT))
window.title("Movement")
window.attributes("-fullscreen", True)

frame = tk.Frame(window, width=SCREEN_WIDTH, height=SCREEN_HEIGHT)
frame.pack()

canvas = tk.Canvas(frame, width=SCREEN_WIDTH, height=SCREEN_HEIGHT)
canvas.pack()

# ------------- Game --------------------------
img_file = Image.open("image/grass.png")
img_size = img_file.resize((200, 100))
grass = ImageTk.PhotoImage(img_size)

canvas.create_image(300, 700,image=grass,tags="PLATFORM")
canvas.create_image(200, 500,image=grass, tags="PLATFORM")
canvas.create_image(300, 300,image=grass, tags="PLATFORM")
canvas.create_image(1000, 400,image=grass, tags="PLATFORM")
canvas.create_image(1200, 200,image=grass, tags="PLATFORM")


img_file = Image.open("image/player.webp")
img_size = img_file.resize((100, 100))
player_id= ImageTk.PhotoImage(img_size)
player=canvas.create_image(100,100,image=player_id)

canvas.create_rectangle(0, 900, SCREEN_WIDTH, SCREEN_HEIGHT, fill="black", tags="PLATFORM")


# canvas.create_rectangle(200, 600, 500, 650, fill="black", tags="PLATFORM")
# canvas.create_rectangle(600, 700, 650, 850, fill="black", tags="PLATFORM")
# canvas.create_rectangle(800, 450, 1100, 500, fill="black", tags="PLATFORM")


# ------------- Functions ---------------------

# Check if the player can move by projecting the movement with dx and dy

def check_movement(dx=0, dy=0, checkGround=False):
    coord = canvas.coords(player)
    platforms = canvas.find_withtag("PLATFORM")

    if coord[0] + dx < 0 or coord[1] + dx > SCREEN_WIDTH:
        return False

    if checkGround:
        overlap = canvas.find_overlapping(coord[0], coord[1], coord[0]+dx, coord[1] + dy)
    else:
        overlap = canvas.find_overlapping(coord[0], coord[1]+dy, coord[0]+dx, coord[1]+dy)
    for platform in platforms:
        if platform in overlap:
            return False

    return True

# Only if the player can move up

def jump(force):
    if force > 0:
        if check_movement(0, -force):
            canvas.move(player, 0, -force)
            window.after(TIMED_LOOP, jump, force-1)


# The start_move function is called when a key is pressed

def start_move(event):
    if event.keysym not in keyPressed:
        keyPressed.append(event.keysym)
        if len(keyPressed) == 1:
            move()

# The move function is called every TIMED_LOOP milliseconds
def move():
    if not keyPressed == []:
        x = 0
        if "Left" in keyPressed:
            x -= SPEED
        if "Right" in keyPressed:
            x += SPEED
        if "space" in keyPressed and not check_movement(0, GRAVITY_FORCE, True):
            jump(JUMP_FORCE)
        if check_movement(x):
            canvas.move(player, x, 0)
        window.after(TIMED_LOOP, move)

# The gravity function is called every TIMED_LOOP milliseconds
def gravity():
    if check_movement(0, GRAVITY_FORCE,False):
        canvas.move(player, 0, GRAVITY_FORCE)
    window.after(TIMED_LOOP, gravity)


# The stop_move function is called when a key is released
def stop_move(event):
    global keyPressed
    if event.keysym in keyPressed:
        keyPressed.remove(event.keysym)

gravity()

window.bind("<Key>", start_move)
window.bind("<KeyRelease>", stop_move)

window.mainloop()




