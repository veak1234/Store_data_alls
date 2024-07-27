
def findPositionOfStar(array):
    positionStar = []
    for i in range(len(array)) :
        for j in range(len(array[i])):
            if array[i][j] == "*":
                positionStar.append(i)
                positionStar.append(j)
    return positionStar
def moveLeft(arr,row ,col):
    arr[row][col]='0'
    arr[row][col -1]='*'
def moveRight(arr,row ,col):
    arr[row][col]='0'
    arr[row][col +1]='*'
def moveUp(arr,row ,col):
    arr[row][col]='0'
    arr[row -1][col]='*'
def moveDown(arr,row ,col):
    arr[row][col]='0'
    arr[row +1][col]='*'

array2D = [
    ['0','0','0'],
    ['0','*','0'],
    ['0','0','0'],
]
startAction = True
while startAction:
    currentdex=findPositionOfStar(array2D)
    row =currentdex[0]
    col =currentdex[1]

    command = input("Enter coummand : ")
    
    if command.upper() == 'L':
        print(moveLeft(array2D, row ,col))
    elif command.upper() == 'R':
        print(moveRight(array2D, row ,col))
    elif command.upper() == 'D':
        print(moveDown(array2D , row ,col))
    elif command.upper() == 'U':
        print(moveUp(array2D , row ,col))
    else:
        if command.lower() == "stop":
            startAction = False
            print("Action has been stopped...")
        else:
            print("Unknown " + command + " command")