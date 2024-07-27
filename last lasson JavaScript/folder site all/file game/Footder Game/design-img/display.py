import tkinter as tk
from PIL import Image, ImageTk

window = tk.Tk()
window.title("Image Viewer")
window.geometry("500x600")

frame = tk.Frame(window, width=500, height=500)
frame.pack()

canvas = tk.Canvas(frame, width=500, height=500, bg="white")
canvas.pack(pady=20)

# Image 1
file_1 = Image.open('1.png')
file_1_size = file_1.resize((100, 100))
img_1 = ImageTk.PhotoImage(file_1_size)
canvas.create_image(50, 50, image=img_1, )

file_2 = Image.open('2.png')
file_2_size = file_2.resize((100, 150))
img_2 = ImageTk.PhotoImage(file_2_size)
canvas.create_image(130, 80, image=img_2, )

file_3 = Image.open('3.png')
file_3_size = file_3.resize((100, 150))
img_3 = ImageTk.PhotoImage(file_3_size)
canvas.create_image(230, 80, image=img_3, )

file_4 = Image.open('4.png')
file_4_size = file_4.resize((100, 120))
img_4 = ImageTk.PhotoImage(file_4_size)
canvas.create_image(330, 70, image=img_4, )

file_5 = Image.open('5.png')
file_5_size = file_5.resize((100, 120))
img_5 = ImageTk.PhotoImage(file_5_size)
canvas.create_image(440, 70, image=img_5, )


file_6 = Image.open('fb-b.png')
file_6_size = file_6.resize((80, 80))
img_6 = ImageTk.PhotoImage(file_6_size)
canvas.create_image(80, 360, image=img_6, )

file_8 = Image.open('ucl.png')
file_8_size = file_8.resize((80, 80))
img_8 = ImageTk.PhotoImage(file_8_size)
canvas.create_image(250, 290, image=img_8, )

file_7 = Image.open('fc-b.png')
file_7_size = file_7.resize((80, 80))
img_7 = ImageTk.PhotoImage(file_7_size)
canvas.create_image(410, 360, image=img_7,)




# Text
canvas.create_text(250, 200, text="Football Game", font=("Robus", 60, "bold"), fill="purple")
canvas.create_text(175, 370, text="Bayern Munich", font=("bold"), fill="purple")
canvas.create_text(255, 360, text="VS.", font=("Robus", 30, "bold"), fill="purple")
canvas.create_text(320, 370, text="Bacelona", font=("bold"), fill="purple")
canvas.create_text(250, 430, text="8 : 2", font=("bold"), fill="purple")




window.resizable(0, 0)
window.mainloop()