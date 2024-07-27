# row =eval(input())
# col =eval(input())
# array=[]
# for i in range(row):
#     array.append(row)
# print(array)
# for i in range(col):
    
#     print(col)

# //////////////////////////////

# row=int(input())
# col=int(input())
# arr2D=[]
# for i in range(len(row)):
#     arr2D.append([])
#     for j in range(col):
#         arr2D[i].append(0)
# print(arr2D)

# /////////////////////////

# def createArr(col):
#     arr=[]
#     for i in range(col):
#         arr.append('0')
#     return arr
# row=int(input("Enter: "))
# col=int(input("Enter: "))
# arr2D=[]
# for i in range(row):
#     arr2D.append(createArr(col))
# print(arr2D)


# ///////////////////////////////////////

# arr2D=[
#     ['0','0','0'],
#     ['0','0','0'],
#     ['0','0','0']
# ]
# result=""
# for i in range(len(arr2D)):
#     for j in range(len(arr2D[i])):
#         result+=arr2D[i][j]
#     result+= "\n" 
# print(result)


# //////////////////////

def createArr(col):
    arr=[]
    for i in range(col):
        arr.append('Ok')
    return arr
def displayGrid(grid):
    result=""
    for i in range(len(grid)):
        for j in range(len(grid[i])):
            result+=grid[i][j] + " "
        result+= "\n" 
    return result
row=int(input("Enter row : "))
col=int(input("Enter col : "))
arr2D=[]
for i in range(row):
    arr2D.append(createArr(col))
print(displayGrid(arr2D))
