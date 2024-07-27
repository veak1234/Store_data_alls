# Ex2 - Array
# Find index

# ouput: {3: "01", 4: "2", 6:"45"}
def countNumber(input1,input2):
    index={}
    for i in range(len(input2)):
        result=input2[i]
        string=""
        for j in range(len(input1)):
            if result==input1[j]:
                string+=str(j)
        index[result]=string
    return index
input1= [3, 3, 4, 5, 6, 6]
input2= [3, 4, 6]        
print(countNumber(input1,input2))
