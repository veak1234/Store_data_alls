arr = ["Navy","Za","Da","Borey"]
array = ["a","N"]
result = ""
obj = {}
for i in range(len(arr)):
    result += arr[i]
    count1 = 0
    count2 = 0
    for j in range(len(result)):
        if result[j] == "a":
            count1 += 1
        elif result[j] == "N":
            count2 += 1
obj["a"] = count1
obj["N"] = count2
print(obj)