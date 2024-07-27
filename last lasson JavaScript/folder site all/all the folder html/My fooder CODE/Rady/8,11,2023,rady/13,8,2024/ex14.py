# banana -> 2 $
# apple  -> 5 $
# orange -> 1 $

def getPrice(fruitName):
    if fruitName == "banana":
        return 2
    if fruitName == "apple":
        return 5
    if fruitName == "orange":
        return 1

print("Banana price is: " + str(getPrice("banana")) + "$")
print("Apple price is: " + str(getPrice("apple")) + "$")
print("Orange price is: " + str(getPrice("orange")) + "$")