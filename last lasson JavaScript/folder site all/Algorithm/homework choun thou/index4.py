array2D=[
    ['0','x','0','0'],
    ['0','0','0','0'],
    ['0','0','0','0'],
]

array2D = [row[:-1] for row in array2D]

# Remove elements to the left
array2D = [row[1:] for row in array2D]

print(array2D)
