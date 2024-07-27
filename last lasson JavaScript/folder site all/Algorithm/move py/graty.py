import tkinter as tk

# Create the main window
root = tk.Tk()
root.title("Gravity Simulation")

# Create a canvas to draw on
canvas = tk.Canvas(root, width=400, height=400)
canvas.pack()

# Create a falling object (circle)
object_id = canvas.create_oval(190, 10, 210, 30, fill="blue")
wall = canvas.create_rectangle(10, 360, 390, 380, fill="blue")

# Function to update the object's position
def update_position():
    ball_coods = canvas.coords(object_id)
    wall_coods = canvas.coords(wall)
    if ball_coods[3]<= wall_coods[1] - 6:
        canvas.move(object_id, 0, 9)
    root.after(50, update_position)

# Start the simulation
update_position()

# Run the Tkinter main loop
root.mainloop()
