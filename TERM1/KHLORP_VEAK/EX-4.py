

def coundNumber(key):
    cound=0
    object={}
    for key in arr:
        if key['subject']=='Algorithm':
            if key['score'] < 50:
                res=key['name']
                cound=key['score']
        object[res]=cound 
    return object
arr=eval(input("Enter: ")) 
print(coundNumber(arr))







