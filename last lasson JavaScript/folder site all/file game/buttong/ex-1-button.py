import tkinter as tk

window = tk.Tk()
window.geometry("300x300")
window.title("Event 1")

def change_color():
    window.config(bg="red")

btn = tk.Button(text="Click Me", command=change_color)
btn.pack()

window.mainloop()