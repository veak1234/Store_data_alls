// case 1:
let arr = [1, 3, 6, 7, 9];
// TODO: 
// YOUR CODE HERE
let maxOfnum = 0
let newArray = []
for(let valueOfnumber of arr){
    if (valueOfnumber > maxOfnum){
        maxOfnum = valueOfnumber;
    }
}
for(let newValue of arr){
    if (newValue <5){
        newValue=maxOfnum;
    }
    newArray.push(newValue);
}
console.log(newArray)
// output: [9, 9, 6, 7, 9]

