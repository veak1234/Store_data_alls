

# Ex1 - Array string
# arr = ["Rady","yon","mengheang", "rady", "Yon"]
#1 - Remove duplicate name from list

# def checkIfwordExist(word,array):
#     isExist=False
#     for i in range(len(array)):
#         if array[i].lower()==word.lower():
#             isExist=True
#     return isExist
# arr = ["Rady","yon","mengheang","rady","Yon"]
# newArray=[]
# for i in range(len(arr)):
#     if not checkIfwordExist(arr[i],newArray):
#         newArray.append(arr[i])
# print(newArray)

# =========================================================================

#2 - Reverse only "mengheang" name in list          
# def reverseName(text):
#     newText=""
#     lastIndex=len(text)-1
#     for i in range(len(text)):
#         newText+=text[lastIndex -i]
#     return newText   
# arr = ["Rady","yon","mengheang", "rady", "Yon"]
# for i in range(len(arr)):
#     if arr[i].lower()=="mengheang":
#         arr[i]=reverseName(arr[i])
# print(arr)

# =========================================================================

#3 - Add "Ronan" to first index
# arr = ["Rady","yon","mengheang", "rady", "Yon"]
# arr.insert(0,"ronan")
# print(arr)

# ===========================================================================

#4 - Create new list with number of character in list
# [4, 3, 9, 4, 3]
# def countcharacter(word):
#     return len(word)
# arr = ["Rady","yon","mengheang", "rady", "Yon"]
# newArray=[]
# for i in range(len(arr)):
#     newArray.append(countcharacter(arr[i]))
# print(newArray)

# ===============================================================================

#5 - Create new list with letter "a", "e", "i", "o", "u"
# ['a','o', 'e', 'e', 'a', 'a', 'o']
# arr = ["Rady","yon","mengheang", "rady", "Yon"]

#6 - Count number of 'A' in list
# [1, 0, 1, 1, 0]
# def countcharacter(word):
#     cound=0
#     for i in range(len(word)):
#           if word[i].upper()=="A":
#             cound+=1     
#     return cound
# arr = ["Rady","yon","mengheang", "rady", "Yon"]
# newArray=[]
# for i in range(len(arr)):
#         newArray.append(countcharacter(arr[i]))
# print(newArray)

# =========================================================================

#7 - Keep name who start from letter "R" only


#8 - Remove "Mengheag" from list

# =====================================================================

#9 - Create nested array (Array 2D) from list
# [ ['R','a','d','y'], ['y','o','n'], ...]
# def createArray(word):
#     newArr=[]
#     for i in range(len(word)):
#         newArr.append(word[i])
#     return newArr
# arr = ["Rady","yon","mengheang", "rady", "Yon"]
# newArray2D=[]
# for i in range(len(arr)):
#     newArray2D.append(createArray(arr[i]))
# print(newArray2D)
# -----------------------------------------------------