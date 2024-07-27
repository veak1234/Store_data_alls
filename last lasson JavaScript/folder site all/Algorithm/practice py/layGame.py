import tkinter as tk
from PIL import Image, ImageTk
# from tkinter import *
# import winsound
# from random import randrange
# import time



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

# game_start = tk.PhotoImage(file='image/Angkor wat.webp')
bg_start = tk.PhotoImage(file='image/Angkor.webp')

def createEnemy():
    Angkorwat= canvas.create_image(900,150, image = Angkorwat, tags ='FISH')
# ------------- Game --------------------------
img_file = Image.open("image/img.png")
img_size = img_file.resize((150, 50))
img = ImageTk.PhotoImage(img_size)

canvas.create_image(300, 600,image=img,tags="PLATFORM")
canvas.create_image(500, 400,image=img,tags="PLATFORM")
canvas.create_image(1000, 300,image=img,tags="PLATFORM")
canvas.create_image(800, 500,image=img,tags="PLATFORM")

img_file = Image.open("image/player.png")
img_size = img_file.resize((60, 60))
player_id= ImageTk.PhotoImage(img_size)
player=canvas.create_image(100,100,image = player_id)

canvas.create_rectangle(0, 800, SCREEN_WIDTH, SCREEN_HEIGHT, fill="black", tags="PLATFORM")

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

# Jump by moving the player up by force pixels
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
    if check_movement(0, GRAVITY_FORCE, True):
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