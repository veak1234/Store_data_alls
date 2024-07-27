# Ex7 - Array 2D
# ouput: 
# [
#   [1, 2, 3],
#   [1, 2, 3, 4],
#   [1, 2, 3, 4, 5],
#   [1]
# ]
def string(word):
  arr=[]
  for i in range(word):
    arr.append(i+1)
  return arr
array= [3,4, 5, 1]
li=[]
for i in range(len(array)):
  li.append(string(array[i]))
print(li)