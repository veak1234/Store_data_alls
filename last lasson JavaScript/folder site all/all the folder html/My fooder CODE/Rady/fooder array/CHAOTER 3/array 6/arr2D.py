
# row=[
#     ['','','',''],
#     ['','','',''],
#     ['','','',''],
# ]
# result=""
# for i in range(len(row)):
#     result+='*'+' '
# print(result)


row=[
    ['*','*','*'],
    ['*','0','*'],
    ['*','*','0']
]
for i in range(len(row)):
    result=0
    for j in range(len(row[i])):
        if row[0][j]=='*':
            result+=1
if result==3:
    print("Ok")
else:
    print("No")
# print(result)

