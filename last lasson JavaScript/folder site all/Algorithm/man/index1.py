import pygame

# Initialize Pygame
pygame.init()

# Set up the display
width, height = 800, 600
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Walking Animation")

# Load the walking frames
frames = [
    pygame.image.load("fish.webp"),  # Replace "frame1.png" with the path to your first frame
    pygame.image.load("fish.webp"),  # Replace "frame2.png" with the path to your second frame
    # Add more frames as necessary
]
current_frame_index = 0
frame_count = len(frames)
frame_delay = 100  # Delay between frames (in milliseconds)

# Set the initial position of the picture
picture_x = 100
picture_y = 100

# Set the initial velocity of the character
velocity_x = 0

# Game loop
running = True
while running:
    # Fill the screen with a background color
    screen.fill((200, 200, 200))  # White background

    # Draw the current frame on the screen
    current_frame = frames[current_frame_index]
    screen.blit(current_frame, (picture_x, picture_y))

    # Update the position of the picture
    picture_x += velocity_x

    # Clamp the picture's x-position within the screen bounds
    picture_x = max(0, min(picture_x, width - current_frame.get_width()))

    # Update the display
    pygame.display.flip()

    # Switch to the next frame after a delay
    pygame.time.delay(frame_delay)
    current_frame_index = (current_frame_index + 1) % frame_count

    # Process events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:
                velocity_x = -20  # Move left with a velocity of -5 pixels per frame
            elif event.key == pygame.K_RIGHT:
                velocity_x = 20  # Move right with a velocity of 5 pixels per frame
        elif event.type == pygame.KEYUP:
            if event.key == pygame.K_LEFT or event.key == pygame.K_RIGHT:
                velocity_x = 5  # Stop moving when the left or right key is released

# Quit the game
pygame.quit()