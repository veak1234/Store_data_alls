import tkinter as tk
from PIL import Image, ImageTk
from pygame import mixer
import time


window = tk.Tk()
window.geometry("800x500")
window.title("Move Shape")
window.resizable(False, False)

# frame 

frame = tk.Frame(window)
frame.pack()

# canvas

canvas = tk.Canvas(frame, width = 700, height = 400, bg = "white")
canvas.pack(pady = 20)

#img

img_file = Image.open("harou.png")
img_size = img_file.resize((30, 30))
ball = ImageTk.PhotoImage(img_size)
ball_id = canvas.create_image(30, 30, image = ball)

# banana_file = Image.open("banana.jpg")
# banana_size = banana_file.resize((30, 30))
# banana = ImageTk.PhotoImage(banana_size)

# credits_rectngle or oval

canvas.create_rectangle(70, 70, 130, 130, fill="black", outline="", tags="player")
canvas.create_rectangle(300, 300, 360, 360, fill="black", outline="", tags="player")
canvas.create_rectangle(400, 70, 460, 130, fill="black", outline="", tags="player")
canvas.create_rectangle(70, 200, 130, 260, fill="black", outline="", tags="player")
canvas.create_rectangle(500, 70, 560, 130, fill="black", outline="", tags="player")
canvas.create_rectangle(30, 300, 130, 360, fill="black", outline="", tags="player")


canvas.create_text(100, 50, text=": 0", font=("bold", 20), fill="white", tags = 'SCORE')

# /////
# fanstion

def is_moveable():
    coord = canvas.coords(ball_id)
    players = canvas.find_withtag("player")
    overlap = canvas.find_overlapping(coord[0], coord[1], coord[0] + ball.width(),coord[1] + ball.height())
    print(overlap)
    for player in players:
        if player in overlap:
            return player
    return 0

# ////


# movr

def is_border_left():
    return canvas.coords(ball_id)[0] < 30

def is_border_right():
    return canvas.coords(ball_id)[0] > 670

def is_border_top():
    return canvas.coords(ball_id)[1] < 30

def is_border_bottom():
    return canvas.coords(ball_id)[1] > 370

def move_shape(event):
    is_moveable()
    if event.keysym == "Left" and not is_border_left():
        canvas.move(ball_id, -10, 0)
    elif event.keysym == "Right" and not is_border_right():
        canvas.move(ball_id, 10, 0)
    elif event.keysym == "Up" and not is_border_top():
        canvas.move(ball_id, 0, -10)
    elif event.keysym == "Down" and not is_border_bottom():
        canvas.move(ball_id, 0, 10)
    shape=is_moveable()

    score+=1
    canvas.itemconfigure('SCORE', text=(":" +str(score)))
    # if shape2>0:
    #     canvas.delete(shape2)
    #     win_window()



# ///////
    if shape > 0:
        coord=canvas.coords(shape)
        canvas.delete(shape)
        canvas.create_image(coord[0],coord[1])

        # install
        mixer.init() #Initialzing pyamge mixer

        mixer.music.load('bom.mp3') #Loading Music File

        mixer.music.play() #Playing Music with Pygame

        time.sleep(0.3)

        mixer.music.stop()



window.bind("<Key>", move_shape)
window.mainloop()